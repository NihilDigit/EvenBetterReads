import React, { useState, useEffect, useLayoutEffect, useMemo, useRef, useCallback } from 'react';
import type { BookMeta, GlossItem, ParagraphBlock } from '../types/book';
import {
  renderZhParagraph,
  renderGlossContent,
  type GlossIndexMap
} from '../utils/parseRichText';

type PaperTheme = 'ivory' | 'parchment' | 'obsidian';
type FontScale = 'sm' | 'md' | 'lg';

interface ReaderAppProps {
  books: BookMeta[];
}

export interface RailNoteItem {
  kind: 'gloss' | 'authorNote';
  id: string;
  formattedIndex: string;
  anchor?: string;
  authorLabel?: string;
  content: string;
}

interface PositionedSidenoteRailProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  items: RailNoteItem[];
  activeId: string | null;
  onSelect: (id: string) => void;
  layoutDeps: unknown[];
}

/**
 * 桌面端右侧独立旁注与原注轨道：
 * 同时承载「伴读旁注 (gloss)」与「作者原注 (authorNote)」，
 * 按左栏正文中 [data-gloss-trigger] 锚点真实行高对齐并自动防重叠顺延，
 * 绝不撑开左栏正文自然段之间的间距。
 */
function PositionedSidenoteRail({
  containerRef,
  items,
  activeId,
  onSelect,
  layoutDeps
}: PositionedSidenoteRailProps) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const noteRefs = useRef<Record<string, HTMLElement | null>>({});
  const [positions, setPositions] = useState<Record<string, number>>({});
  const [railMinHeight, setRailMinHeight] = useState<number>(0);

  const computePositions = useCallback(() => {
    const container = containerRef.current;
    const rail = railRef.current;
    if (!container || !rail || items.length === 0) return;

    const railRect = rail.getBoundingClientRect();
    if (railRect.width === 0) return;

    const nextPositions: Record<string, number> = {};
    let cursorY = 0;
    const GAP = 16;

    for (const item of items) {
      const trigger = container.querySelector<HTMLElement>(`[data-gloss-trigger="${item.id}"]`);
      const noteEl = noteRefs.current[item.id];
      let idealTop = cursorY;

      if (trigger) {
        const triggerRect = trigger.getBoundingClientRect();
        idealTop = triggerRect.top - railRect.top - 4;
      }

      const finalTop = Math.max(cursorY, idealTop);
      nextPositions[item.id] = finalTop;

      const noteHeight = noteEl ? noteEl.offsetHeight : 120;
      cursorY = finalTop + noteHeight + GAP;
    }

    setPositions(nextPositions);
    setRailMinHeight(cursorY);
  }, [containerRef, items]);

  useLayoutEffect(() => {
    computePositions();
  }, [computePositions, ...layoutDeps]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      computePositions();
    });
    ro.observe(container);
    window.addEventListener('resize', computePositions);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => computePositions());
    }

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', computePositions);
    };
  }, [containerRef, computePositions]);

  if (items.length === 0) {
    return <div className="hidden xl:block" />;
  }

  return (
    <div
      ref={railRef}
      className="hidden xl:block relative w-[310px]"
      style={{ minHeight: railMinHeight > 0 ? `${railMinHeight}px` : undefined }}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        const top = positions[item.id] ?? 0;

        if (item.kind === 'authorNote') {
          return (
            <aside
              key={item.id}
              ref={(el) => {
                noteRefs.current[item.id] = el;
              }}
              onClick={() => onSelect(item.id)}
              style={{ top: `${top}px` }}
              className={`absolute left-0 right-0 border px-3.5 py-3 transition-colors duration-150 cursor-pointer ${
                isActive
                  ? 'border-[var(--ink-primary)] bg-[var(--bg-elevated)]/45'
                  : 'border-[var(--rule-strong)] bg-transparent hover:bg-[var(--bg-elevated)]/25'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block bg-[var(--ink-primary)] text-[var(--bg-canvas)] px-1.5 py-0.5 font-mono-coord text-[11px] leading-none">
                  {item.authorLabel} [{item.formattedIndex}]
                </span>
              </div>
              <p className="gloss-prose text-[13px] leading-relaxed">
                {renderGlossContent(item.content)}
              </p>
            </aside>
          );
        }

        return (
          <aside
            key={item.id}
            ref={(el) => {
              noteRefs.current[item.id] = el;
            }}
            onClick={() => onSelect(item.id)}
            style={{ top: `${top}px` }}
            className={`absolute left-0 right-0 border-t-2 pt-2.5 pb-3 px-3 transition-colors duration-150 cursor-pointer gloss-prose ${
              isActive
                ? 'border-[var(--accent-nrf)] bg-[var(--accent-nrf-soft)]'
                : 'border-[var(--rule-line)] bg-transparent hover:border-[var(--rule-strong)]'
            }`}
          >
            <div className="grid grid-cols-[26px_1fr] items-baseline mb-1">
              <span className="font-mono-coord text-xs text-[var(--accent-nrf)] font-medium">
                {item.formattedIndex}
              </span>
              <span className="zh-emphasis text-[13.5px] leading-snug">{item.anchor}</span>
            </div>
            <p className="text-[13px] leading-relaxed pl-[26px]">
              {renderGlossContent(item.content)}
            </p>
          </aside>
        );
      })}
    </div>
  );
}

/**
 * 提取单个段落块内的伴读旁注与作者原注，并按其在正文中出现的先后位置排序
 */
function getBlockRailItems(
  blk: ParagraphBlock,
  glossIndexMap: GlossIndexMap,
  footnoteMap: Record<string, number>,
  authorNoteLabel: string
): RailNoteItem[] {
  const entries: { pos: number; item: RailNoteItem }[] = [];

  if (blk.glosses) {
    for (const g of blk.glosses) {
      const meta = glossIndexMap[g.id];
      const pos = blk.zh.indexOf(`{#${g.id}}`);
      entries.push({
        pos: pos >= 0 ? pos : 99999,
        item: {
          kind: 'gloss',
          id: g.id,
          formattedIndex: meta?.formattedIndex ?? '00',
          anchor: g.anchor,
          content: g.content
        }
      });
    }
  }

  if (blk.authorNotes) {
    for (const fn of blk.authorNotes) {
      const fnNum = footnoteMap[fn.id] ?? 1;
      const pos = blk.zh.indexOf(`[^${fn.id}]`);
      entries.push({
        pos: pos >= 0 ? pos : 99999,
        item: {
          kind: 'authorNote',
          id: fn.id,
          formattedIndex: String(fnNum),
          authorLabel: authorNoteLabel,
          content: fn.zh
        }
      });
    }
  }

  entries.sort((a, b) => a.pos - b.pos);
  return entries.map((e) => e.item);
}

export default function ReaderApp({ books }: ReaderAppProps) {
  const [activeBookSlug, setActiveBookSlug] = useState<string | null>(null);
  const [theme, setTheme] = useState<PaperTheme>('ivory');
  const [fontScale, setFontScale] = useState<FontScale>('md');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);
  const [currentSpySection, setCurrentSpySection] = useState<string>('liminaire');
  const [activeGlossId, setActiveGlossId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const dedicationRowRef = useRef<HTMLDivElement | null>(null);
  const sectionRowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 初始化主题、字号、目录状态与 URL 书籍参数
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('ebr-theme') as PaperTheme | null;
      const savedScale = localStorage.getItem('ebr-scale') as FontScale | null;
      const savedSidebar = localStorage.getItem('ebr-sidebar');
      if (savedTheme && ['ivory', 'parchment', 'obsidian'].includes(savedTheme)) {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      if (savedScale && ['sm', 'md', 'lg'].includes(savedScale)) {
        setFontScale(savedScale);
      }
      if (savedSidebar === 'closed') {
        setSidebarOpen(false);
      }
    } catch {
      // ignore storage errors
    }

    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get('book');
      if (slug && books.some((b) => b.slug === slug)) {
        setActiveBookSlug(slug);
      } else {
        setActiveBookSlug(null);
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [books]);

  const openBook = (slug: string) => {
    setActiveBookSlug(slug);
    setActiveGlossId(null);
    setMobileTocOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.set('book', slug);
    window.history.pushState({ book: slug }, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const returnToShelf = () => {
    setActiveBookSlug(null);
    setActiveGlossId(null);
    setMobileTocOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('book');
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleThemeChange = (nextTheme: PaperTheme) => {
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('ebr-theme', nextTheme);
    } catch {
      // ignore
    }
  };

  const handleScaleChange = (nextScale: FontScale) => {
    setFontScale(nextScale);
    try {
      localStorage.setItem('ebr-scale', nextScale);
    } catch {
      // ignore
    }
  };

  const toggleDesktopSidebar = () => {
    setSidebarOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ebr-sidebar', next ? 'open' : 'closed');
      } catch {
        // ignore
      }
      return next;
    });
  };

  const book = useMemo(
    () => books.find((b) => b.slug === activeBookSlug) ?? books[0],
    [books, activeBookSlug]
  );
  const chapter = book.chapters[0];
  const hasLiminaire = Boolean(chapter.dedication?.noteZh || chapter.epigraph);

  // 切换书籍时更新页面标题与默认章节锚点
  useEffect(() => {
    if (!activeBookSlug) {
      document.title = 'EvenBetterReads';
      return;
    }
    document.title = `${book.titleZh} — ${book.authorZh} | EvenBetterReads`;
    setCurrentSpySection(hasLiminaire ? 'liminaire' : (chapter.sections[0]?.id ?? 'liminaire'));
  }, [activeBookSlug, book, chapter, hasLiminaire]);

  const { glossIndexMap, allRailItemsMap, footnoteMap } = useMemo(() => {
    const gMap: GlossIndexMap = {};
    const railMap: Record<string, RailNoteItem> = {};
    const fnMap: Record<string, number> = {};
    let gCounter = 1;
    let fnCounter = 1;

    if (chapter.dedication?.glosses) {
      for (const g of chapter.dedication.glosses) {
        const formatted = String(gCounter).padStart(2, '0');
        gMap[g.id] = { index: gCounter, formattedIndex: formatted };
        railMap[g.id] = {
          kind: 'gloss',
          id: g.id,
          formattedIndex: formatted,
          anchor: g.anchor,
          content: g.content
        };
        gCounter++;
      }
    }

    for (const sec of chapter.sections) {
      for (const blk of sec.blocks) {
        if (blk.authorNotes) {
          for (const fn of blk.authorNotes) {
            const num = fnCounter++;
            fnMap[fn.id] = num;
            railMap[fn.id] = {
              kind: 'authorNote',
              id: fn.id,
              formattedIndex: String(num),
              authorLabel: book.authorNoteLabel,
              content: fn.zh
            };
          }
        }
        if (blk.glosses) {
          for (const g of blk.glosses) {
            const formatted = String(gCounter).padStart(2, '0');
            gMap[g.id] = { index: gCounter, formattedIndex: formatted };
            railMap[g.id] = {
              kind: 'gloss',
              id: g.id,
              formattedIndex: formatted,
              anchor: g.anchor,
              content: g.content
            };
            gCounter++;
          }
        }
      }
    }

    return { glossIndexMap: gMap, allRailItemsMap: railMap, footnoteMap: fnMap };
  }, [chapter, book.authorNoteLabel]);

  const activeRailItem = useMemo(
    () => (activeGlossId ? (allRailItemsMap[activeGlossId] ?? null) : null),
    [allRailItemsMap, activeGlossId]
  );

  useEffect(() => {
    if (!activeBookSlug) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }

      const sectionEls = document.querySelectorAll<HTMLElement>('[data-section-anchor]');
      let current = hasLiminaire ? 'liminaire' : (chapter.sections[0]?.id ?? 'liminaire');
      for (const el of sectionEls) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 180) {
          current = el.dataset.sectionAnchor || current;
        }
      }
      setCurrentSpySection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeBookSlug, hasLiminaire, chapter.sections]);

  const handleSelectGloss = (id: string) => {
    setActiveGlossId((prev) => (prev === id ? null : id));
  };

  const jumpToSection = (sectionId: string) => {
    setMobileTocOpen(false);
    const target = document.getElementById(`section-${sectionId}`);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const fontSizeClass =
    fontScale === 'sm'
      ? 'text-[16px] md:text-[17px]'
      : fontScale === 'lg'
        ? 'text-[19px] md:text-[21px]'
        : 'text-[17.5px] md:text-[19px]';

  const currentSectionTitle = useMemo(() => {
    if (currentSpySection === 'liminaire') return '卷首与题词';
    const found = chapter.sections.find((s) => s.id === currentSpySection);
    return found ? `${found.roman} ${found.titleZh}` : '';
  }, [currentSpySection, chapter.sections]);

  // 纸张主题切换组件（书架与阅读器共用）
  const renderThemeSwitcher = () => (
    <div
      className="inline-flex border border-[var(--rule-line)] bg-[var(--bg-panel)] p-0.5 text-xs"
      role="group"
      aria-label="纸张主题"
    >
      {(
        [
          { id: 'ivory', label: '棉纸', dot: '#f6f3ec' },
          { id: 'parchment', label: '暖卷', dot: '#ede6d6' },
          { id: 'obsidian', label: '玄夜', dot: '#181a17' }
        ] as const
      ).map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => handleThemeChange(t.id)}
          className={`flex items-center gap-1.5 px-2 py-1 cursor-pointer transition-colors ${
            theme === t.id
              ? 'bg-[var(--ink-primary)] text-[var(--bg-canvas)]'
              : 'hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <span
            className="w-2 h-2 border border-current inline-block"
            style={{ backgroundColor: t.dot }}
          />
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );

  // ==================== 书架视图 (Bookshelf View) ====================
  if (!activeBookSlug) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--ink-primary)] selection:bg-[var(--accent-nrf-soft)]">
        <header className="border-b-2 border-[var(--rule-strong)] bg-[var(--bg-canvas)]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
            <h1 className="fr-prose text-2xl sm:text-[32px] leading-none tracking-[-0.02em] select-none">
              <span className="italic font-normal text-[var(--accent-nrf)] pr-[2px]">Even</span>
              <span className="font-semibold">Better</span>
              <span className="font-normal">Reads</span>
            </h1>
            {renderThemeSwitcher()}
          </div>
        </header>

        <main className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((b) => (
              <article
                key={b.slug}
                onClick={() => openBook(b.slug)}
                className="group border border-[var(--rule-strong)] p-1.5 bg-[var(--bg-panel)] hover:border-[var(--accent-nrf)] transition-colors cursor-pointer flex flex-col"
              >
                <div className="border border-[var(--rule-line)] group-hover:border-[var(--accent-nrf)] transition-colors px-5 py-5 sm:px-6 sm:py-6 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[var(--rule-line)]">
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="fr-prose uppercase tracking-[0.14em] text-xs truncate">
                        {b.authorOriginal}
                      </span>
                      <span className="text-xs shrink-0">{b.authorZh}</span>
                    </div>
                    <span className="font-mono-coord text-[11px] shrink-0">{b.year}</span>
                  </div>

                  <div className="mt-4">
                    <p className="fr-prose italic text-sm sm:text-base">{b.titleOriginal}</p>
                    <h2 className="zh-title-bold text-xl sm:text-2xl tracking-tight mt-0.5 leading-snug">
                      {b.titleZh}
                    </h2>
                    <p className="text-xs sm:text-[13px] mt-1">
                      —— {b.subtitleZh}（<span className="fr-prose italic">{b.subtitleOriginal}</span>）
                    </p>
                  </div>

                  <p className="zh-prose zh-indent text-[13.5px] mt-4 leading-relaxed">
                    {b.descriptionZh}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // ==================== 阅读器视图 (Reader View) ====================
  const dedicationRailItems: RailNoteItem[] = (chapter.dedication?.glosses ?? []).map((g) => ({
    kind: 'gloss',
    id: g.id,
    formattedIndex: glossIndexMap[g.id]?.formattedIndex ?? '01',
    anchor: g.anchor,
    content: g.content
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--ink-primary)] selection:bg-[var(--accent-nrf-soft)]">
      {/* 顶部网格导航栏 */}
      <header className="sticky top-0 z-40 bg-[var(--bg-canvas)]/95 backdrop-blur-sm border-b border-[var(--rule-line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-13 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            {/* 左上角主按钮：返回书架 */}
            <button
              type="button"
              onClick={returnToShelf}
              className="inline-flex items-center px-2.5 py-1 text-xs border border-[var(--rule-strong)] hover:bg-[var(--ink-primary)] hover:text-[var(--bg-canvas)] transition-colors cursor-pointer shrink-0"
            >
              ← 返回书架
            </button>

            {/* 移动端目录抽屉按钮 */}
            <button
              type="button"
              onClick={() => setMobileTocOpen((v) => !v)}
              className="xl:hidden inline-flex items-center px-2.5 py-1 text-xs border border-[var(--rule-line)] hover:border-[var(--rule-strong)] cursor-pointer shrink-0"
              aria-label="切换目录"
            >
              目录
            </button>

            {/* 桌面端仅在左侧目录收起时显示「展开目录」按钮 */}
            {!sidebarOpen && (
              <button
                type="button"
                onClick={toggleDesktopSidebar}
                className="hidden xl:inline-flex items-center px-2.5 py-1 text-xs border border-[var(--rule-line)] hover:border-[var(--rule-strong)] transition-colors cursor-pointer shrink-0"
              >
                展开目录
              </button>
            )}

            <a
              href="#top"
              className="flex items-baseline gap-2.5 truncate ml-1"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-sm sm:text-[15px] font-medium tracking-wide truncate">
                {book.titleZh}
              </span>
              <span className="fr-prose italic text-xs hidden md:inline">
                {book.titleOriginal}
              </span>
            </a>

            <span className="hidden lg:inline-block h-3.5 w-[1px] bg-[var(--rule-line)]" />
            <span className="hidden lg:inline-block text-xs font-mono-coord truncate">
              {currentSectionTitle}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* 字号调节 */}
            <div
              className="hidden md:inline-flex border border-[var(--rule-line)] bg-[var(--bg-panel)] p-0.5 text-xs"
              role="group"
              aria-label="字号大小"
            >
              {(
                [
                  { id: 'sm', label: '小' },
                  { id: 'md', label: '中' },
                  { id: 'lg', label: '大' }
                ] as const
              ).map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleScaleChange(s.id)}
                  className={`px-2 py-1 cursor-pointer transition-colors ${
                    fontScale === s.id
                      ? 'bg-[var(--ink-primary)] text-[var(--bg-canvas)]'
                      : 'hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {renderThemeSwitcher()}
          </div>
        </div>

        <div className="h-[1.5px] w-full bg-transparent overflow-hidden">
          <div
            className="h-full bg-[var(--accent-nrf)] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* 移动端目录与字号抽屉（去掉多余分割线） */}
      {mobileTocOpen && (
        <div
          className="fixed inset-0 z-50 xl:hidden bg-black/45"
          onClick={() => setMobileTocOpen(false)}
        >
          <div
            className="w-72 max-w-[82vw] h-full bg-[var(--bg-canvas)] border-r border-[var(--rule-line)] p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4">
                <div>
                  <p className="font-mono-coord text-[10px] tracking-[0.2em] uppercase text-[var(--accent-nrf)]">
                    {chapter.number}
                  </p>
                  <h2 className="text-base font-medium mt-0.5">{chapter.titleZh}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileTocOpen(false)}
                  className="px-2 py-1 text-xs border border-[var(--rule-line)] cursor-pointer"
                >
                  关闭
                </button>
              </div>

              <nav className="mt-3 space-y-1.5">
                {hasLiminaire && (
                  <button
                    type="button"
                    onClick={() => jumpToSection('liminaire')}
                    className={`w-full text-left py-2.5 px-2.5 text-sm grid grid-cols-[36px_1fr] items-baseline transition-colors border-[1.5px] ${
                      currentSpySection === 'liminaire'
                        ? 'border-[var(--rule-strong)] bg-[var(--bg-elevated)] font-medium'
                        : 'border-transparent hover:bg-[var(--bg-elevated)]/50'
                    }`}
                  >
                    <span className="font-mono-coord text-xs text-[var(--accent-nrf)]">序</span>
                    <span>卷首与题词</span>
                  </button>
                )}

                {chapter.sections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => jumpToSection(sec.id)}
                    className={`w-full text-left py-2.5 px-2.5 text-sm grid grid-cols-[36px_1fr] items-baseline transition-colors border-[1.5px] ${
                      currentSpySection === sec.id
                        ? 'border-[var(--rule-strong)] bg-[var(--bg-elevated)] font-medium'
                        : 'border-transparent hover:bg-[var(--bg-elevated)]/50'
                    }`}
                  >
                    <span className="font-mono-coord text-xs text-[var(--accent-nrf)]">
                      {sec.roman === 'Vorrede' ? '序言' : sec.roman}
                    </span>
                    <div>
                      <div>{sec.titleZh}</div>
                      <div className="fr-prose italic text-xs mt-0.5">{sec.titleOriginal}</div>
                    </div>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6">
                <div className="text-xs mb-2">正文字号</div>
                <div className="grid grid-cols-3 border border-[var(--rule-line)] p-0.5 text-xs">
                  {(
                    [
                      { id: 'sm', label: '紧凑' },
                      { id: 'md', label: '标准' },
                      { id: 'lg', label: '舒朗' }
                    ] as const
                  ).map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleScaleChange(s.id)}
                      className={`py-1.5 ${
                        fontScale === s.id ? 'bg-[var(--ink-primary)] text-[var(--bg-canvas)]' : ''
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 主体网格容器 */}
      <div
        id="top"
        className={`max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 flex-1 grid grid-cols-1 ${
          sidebarOpen ? 'xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-10' : 'xl:grid-cols-1'
        }`}
      >
        {/* 左栏：桌面端可收起章节目录（清理全部冗余横线） */}
        {sidebarOpen && (
          <aside className="hidden xl:block border-r border-[var(--rule-line)] pr-6 py-12">
            <div className="sticky top-24 space-y-7">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono-coord text-[10px] tracking-[0.22em] uppercase text-[var(--accent-nrf)]">
                    {book.authorOriginal}
                  </p>
                  <h1 className="text-lg font-medium mt-1 tracking-wide">{book.titleZh}</h1>
                  <p className="fr-prose italic text-xs mt-0.5">
                    {book.titleOriginal} ({book.year})
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleDesktopSidebar}
                  title="收起目录"
                  className="px-2 py-0.5 text-[11px] border border-[var(--rule-line)] hover:border-[var(--rule-strong)] transition-colors cursor-pointer shrink-0"
                >
                  收起
                </button>
              </div>

              <div>
                <div className="mb-2.5 px-2.5">
                  <span className="font-mono-coord text-[10px] tracking-[0.18em] uppercase">
                    {chapter.number}
                  </span>
                </div>

                <nav className="space-y-1.5">
                  {hasLiminaire && (
                    <button
                      type="button"
                      onClick={() => jumpToSection('liminaire')}
                      className={`w-full text-left py-2.5 px-2.5 text-xs grid grid-cols-[30px_1fr] items-baseline transition-colors cursor-pointer border-[1.5px] ${
                        currentSpySection === 'liminaire'
                          ? 'border-[var(--rule-strong)] bg-[var(--bg-elevated)] font-semibold'
                          : 'border-transparent hover:bg-[var(--bg-elevated)]/50'
                      }`}
                    >
                      <span className="font-mono-coord text-[11px] text-[var(--accent-nrf)]">
                        序
                      </span>
                      <span>卷首与题词</span>
                    </button>
                  )}

                  {chapter.sections.map((sec) => {
                    const isCurrent = currentSpySection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => jumpToSection(sec.id)}
                        className={`w-full text-left py-2.5 px-2.5 text-xs grid grid-cols-[30px_1fr] items-baseline transition-colors cursor-pointer border-[1.5px] ${
                          isCurrent
                            ? 'border-[var(--rule-strong)] bg-[var(--bg-elevated)] font-semibold'
                            : 'border-transparent hover:bg-[var(--bg-elevated)]/50'
                        }`}
                      >
                        <span className="font-mono-coord text-[11px] text-[var(--accent-nrf)]">
                          {sec.roman === 'Vorrede' ? '序言' : sec.roman}
                        </span>
                        <div className="min-w-0">
                          <div>{sec.titleZh}</div>
                          <div className="fr-prose italic text-[11px] truncate mt-0.5">
                            {sec.titleOriginal}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        )}

        {/* 主阅读画布 */}
        <main
          className={`py-8 sm:py-12 lg:py-16 min-w-0 ${
            !sidebarOpen ? 'xl:max-w-[1040px] xl:mx-auto w-full' : ''
          }`}
        >
          {/* 卷首：独立献辞/副标题页 + 卷首说明 + 独立卷首题词页 */}
          {(chapter.dedication || chapter.epigraph) && (
            <section
              id="section-liminaire"
              data-section-anchor="liminaire"
              className="mb-16 sm:mb-24"
            >
              {chapter.dedication && (
                <>
                  {/* 1. 独立献辞/题献块 */}
                  <div className="max-w-[680px] py-12 sm:py-16 mb-12 border-y border-[var(--rule-line)] text-center px-4">
                    <p className="zh-emphasis text-xl sm:text-[26px] tracking-wide leading-relaxed">
                      {chapter.dedication.toZh}
                    </p>
                    {chapter.dedication.toOriginal && (
                      <p className="fr-prose italic text-base sm:text-lg mt-2.5">
                        {chapter.dedication.toOriginal}
                      </p>
                    )}
                  </div>

                  {/* 2. 卷首说明与对应旁注（如有） */}
                  {chapter.dedication.noteZh && (
                    <div
                      id="dedication-block"
                      ref={dedicationRowRef}
                      className="grid grid-cols-1 xl:grid-cols-[minmax(0,680px)_310px] gap-6 xl:gap-12 items-start"
                    >
                      <div>
                        <div>
                          {renderZhParagraph(chapter.dedication.noteZh, {
                            glossIndexMap,
                            activeGlossId,
                            onSelectGloss: handleSelectGloss,
                            authorNoteLabel: book.authorNoteLabel,
                            fontSizeClass
                          })}
                        </div>

                        {chapter.dedication.signatureZh && (
                          <p className="zh-emphasis text-base sm:text-[17px] tracking-[0.12em] mt-6 text-right">
                            {chapter.dedication.signatureZh}
                          </p>
                        )}
                      </div>

                      <PositionedSidenoteRail
                        containerRef={dedicationRowRef}
                        items={dedicationRailItems}
                        activeId={activeGlossId}
                        onSelect={handleSelectGloss}
                        layoutDeps={[fontScale, sidebarOpen, activeBookSlug]}
                      />
                    </div>
                  )}
                </>
              )}

              {/* 3. 独立卷首题词块 */}
              {chapter.epigraph && (
                <div className="max-w-[680px] mt-14 sm:mt-20 py-14 sm:py-20 border-y border-[var(--rule-strong)] text-center px-4 sm:px-10">
                  <p className="zh-emphasis text-lg sm:text-[21px] leading-relaxed">
                    「{chapter.epigraph.quoteZh}」
                  </p>
                  <footer className="mt-5 text-sm tracking-wide">
                    —— {chapter.epigraph.authorZh} {chapter.epigraph.sourceZh}
                  </footer>
                </div>
              )}
            </section>
          )}

          {/* 正文各节：左栏自然段连续紧凑流式排布，右栏独立定位伴读旁注与作者原注 */}
          <div className="space-y-20 sm:space-y-28">
            {chapter.sections.map((sec) => {
              const sectionRailItems = sec.blocks.flatMap((blk) =>
                getBlockRailItems(blk, glossIndexMap, footnoteMap, book.authorNoteLabel)
              );
              const sectionContainerRef = {
                get current() {
                  return sectionRowRefs.current[sec.id] ?? null;
                }
              };

              return (
                <section
                  key={sec.id}
                  id={`section-${sec.id}`}
                  data-section-anchor={sec.id}
                  className="scroll-mt-20"
                >
                  {/* 小节标题横幅 */}
                  <div className="max-w-[680px] mb-8 sm:mb-10 pb-4 border-b-2 border-[var(--rule-strong)]">
                    <div className="flex items-baseline gap-3">
                      {sec.roman !== 'Vorrede' && (
                        <span className="fr-prose text-2xl sm:text-[28px] text-[var(--accent-nrf)]">
                          {sec.roman}.
                        </span>
                      )}
                      <div>
                        <h2 className="text-2xl sm:text-[26px] font-normal tracking-wide leading-snug">
                          {sec.titleZh}
                        </h2>
                        <p className="fr-prose italic text-sm sm:text-base mt-1">
                          {sec.titleOriginal}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 双列主体：左栏连续自然段流，右栏独立计算旁注与作者原注坐标 */}
                  <div
                    ref={(el) => {
                      sectionRowRefs.current[sec.id] = el;
                    }}
                    className="grid grid-cols-1 xl:grid-cols-[minmax(0,680px)_310px] gap-0 xl:gap-12 items-start"
                  >
                    {/* 左栏：连续自然段流 */}
                    <div className="space-y-3.5">
                      {sec.blocks.map((blk: ParagraphBlock) => {
                        if (blk.type === 'divider') {
                          return (
                            <div
                              key={blk.id}
                              className="py-5 flex items-center justify-center gap-4 select-none"
                              aria-hidden="true"
                            >
                              <span className="w-12 h-[1px] bg-[var(--rule-line)]" />
                              <span className="font-mono-coord text-sm text-[var(--accent-nrf)]">
                                *
                              </span>
                              <span className="w-12 h-[1px] bg-[var(--rule-line)]" />
                            </div>
                          );
                        }

                        return (
                          <div key={blk.id} id={blk.id}>
                            {renderZhParagraph(blk.zh, {
                              glossIndexMap,
                              activeGlossId,
                              onSelectGloss: handleSelectGloss,
                              footnoteMap,
                              authorNoteLabel: book.authorNoteLabel,
                              fontSizeClass
                            })}
                          </div>
                        );
                      })}
                    </div>

                    {/* 右栏：独立旁注与原注轨道 */}
                    <PositionedSidenoteRail
                      containerRef={sectionContainerRef}
                      items={sectionRailItems}
                      activeId={activeGlossId}
                      onSelect={handleSelectGloss}
                      layoutDeps={[fontScale, sidebarOpen, activeBookSlug]}
                    />
                  </div>
                </section>
              );
            })}
          </div>

          {/* 章节尾声底栏 */}
          <footer className="mt-24 pt-10 border-t-2 border-[var(--rule-strong)] max-w-[680px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono-coord text-[11px] uppercase tracking-[0.18em] text-[var(--accent-nrf)]">
                  {book.titleOriginal}
                </p>
                <p className="text-sm mt-1">
                  《{book.titleZh}》{chapter.titleZh} 完
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={returnToShelf}
                  className="px-4 py-2 text-xs border border-[var(--rule-line)] hover:border-[var(--rule-strong)] transition-colors cursor-pointer"
                >
                  ← 返回书架
                </button>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-4 py-2 text-xs border border-[var(--rule-strong)] hover:bg-[var(--ink-primary)] hover:text-[var(--bg-canvas)] transition-colors cursor-pointer"
                >
                  返回章首
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* 移动端/平板端：半透明遮罩 + 底部旁注/原注面板 */}
      {activeRailItem && (
        <div
          className="xl:hidden fixed inset-0 z-50 bg-black/45 flex items-end"
          onClick={() => setActiveGlossId(null)}
          role="dialog"
          aria-label={activeRailItem.kind === 'authorNote' ? book.authorNoteLabel : '伴读旁注'}
        >
          <div
            className={`w-full border-t-2 bg-[var(--bg-canvas)] px-5 pt-4 pb-7 sm:px-6 shadow-2xl ${
              activeRailItem.kind === 'authorNote'
                ? 'border-[var(--ink-primary)]'
                : 'border-[var(--accent-nrf)]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-[680px] mx-auto">
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-[var(--rule-line)]">
                {activeRailItem.kind === 'authorNote' ? (
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-[var(--ink-primary)] text-[var(--bg-canvas)] px-2 py-0.5 font-mono-coord text-xs">
                      {activeRailItem.authorLabel} [{activeRailItem.formattedIndex}]
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-[28px_1fr] items-baseline gap-1 min-w-0">
                    <span className="font-mono-coord text-xs text-[var(--accent-nrf)] font-semibold">
                      {activeRailItem.formattedIndex}
                    </span>
                    <p className="zh-emphasis text-[15px] leading-snug">
                      {activeRailItem.anchor}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setActiveGlossId(null)}
                  className="px-2.5 py-1 text-xs bg-[var(--ink-primary)] text-[var(--bg-canvas)] shrink-0 cursor-pointer"
                >
                  关闭
                </button>
              </div>

              <div className="mt-3.5 max-h-[42vh] overflow-y-auto">
                <p className="gloss-prose text-[14.5px] leading-relaxed">
                  {renderGlossContent(activeRailItem.content)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
