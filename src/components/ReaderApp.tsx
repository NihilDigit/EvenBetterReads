import React, { useState, useEffect, useLayoutEffect, useMemo, useRef, useCallback } from 'react';
import type { BookMeta, GlossItem, ParagraphBlock } from '../types/book';
import { books as defaultBooks } from '../data/books';
import BookCoverSvg from './BookCoverSvg';
import {
  renderZhParagraph,
  renderGlossContent,
  type GlossIndexMap
} from '../utils/parseRichText';

type PaperTheme = 'ivory' | 'parchment' | 'obsidian';
type FontScale = 'sm' | 'md' | 'lg';

interface ReaderAppProps {
  books?: BookMeta[];
}

interface ReadingProgressItem {
  slug: string;
  blockId: string | null;
  sectionId: string;
  sectionTitle: string;
  progress: number;
  updatedAt: number;
}

interface ReadingProgressStore {
  lastSlug: string | null;
  items: Record<string, ReadingProgressItem>;
}

const PROGRESS_STORAGE_KEY = 'ebr-reading-progress-v1';

function loadProgressStore(): ReadingProgressStore {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return { lastSlug: null, items: {} };
    const parsed = JSON.parse(raw) as Partial<ReadingProgressStore>;
    return {
      lastSlug: typeof parsed.lastSlug === 'string' ? parsed.lastSlug : null,
      items: parsed.items && typeof parsed.items === 'object' ? parsed.items : {}
    };
  } catch {
    return { lastSlug: null, items: {} };
  }
}

function saveProgressStore(store: ReadingProgressStore) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // ignore storage errors
  }
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

  const handleNoteClick = (id: string) => {
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed && sel.toString().trim().length > 0) return;
    onSelect(id);
  };

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
              onClick={() => handleNoteClick(item.id)}
              style={{ top: `${top}px` }}
              className={`absolute left-0 right-0 border px-3.5 py-3 transition-[top,background-color,border-color] duration-200 ease-out cursor-pointer ${
                isActive
                  ? 'border-[var(--ink-primary)] bg-[var(--bg-elevated)]/45'
                  : 'border-[var(--rule-strong)] bg-transparent hover:bg-[var(--bg-elevated)]/25'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block bg-[var(--surface-solid)] text-[var(--ink-on-solid)] border border-[var(--rule-strong)] px-1.5 py-0.5 font-mono-coord text-[11px] leading-none">
                  {item.authorLabel} [{item.formattedIndex}]
                </span>
              </div>
              <p className="gloss-prose text-[13px] leading-relaxed cursor-text">
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
            onClick={() => handleNoteClick(item.id)}
            style={{ top: `${top}px` }}
            className={`absolute left-0 right-0 border-t-2 pt-2.5 pb-3 px-3 transition-[top,background-color,border-color] duration-200 ease-out cursor-pointer gloss-prose ${
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
            <p className="text-[13px] leading-relaxed pl-[26px] cursor-text">
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

export default function ReaderApp({ books = defaultBooks }: ReaderAppProps) {
  const [activeBookSlug, setActiveBookSlug] = useState<string | null>(null);
  const [theme, setTheme] = useState<PaperTheme>('ivory');
  const [fontScale, setFontScale] = useState<FontScale>('md');
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);
  const [currentSpySection, setCurrentSpySection] = useState<string>('liminaire');
  const [activeGlossId, setActiveGlossId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [previewBookSlug, setPreviewBookSlug] = useState<string | null>(null);
  const [progressStore, setProgressStore] = useState<ReadingProgressStore>({
    lastSlug: null,
    items: {}
  });

  const dedicationRowRef = useRef<HTMLDivElement | null>(null);
  const sectionRowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tocNavRef = useRef<HTMLElement | null>(null);
  const isRestoringScrollRef = useRef<boolean>(false);
  const lastRailItemRef = useRef<RailNoteItem | null>(null);
  const sheetTouchStartYRef = useRef<number | null>(null);
  const [sheetDragY, setSheetDragY] = useState<number>(0);

  // 初始化主题、字号、目录状态、阅读进度与 URL 书籍参数
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('ebr-theme') as PaperTheme | null;
      const savedScale = localStorage.getItem('ebr-scale') as FontScale | null;
      if (savedTheme && ['ivory', 'parchment', 'obsidian'].includes(savedTheme)) {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      if (savedScale && ['sm', 'md', 'lg'].includes(savedScale)) {
        setFontScale(savedScale);
      }
    } catch {
      // ignore storage errors
    }

    setProgressStore(loadProgressStore());

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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewBookSlug(null);
        setActiveGlossId(null);
        setMobileTocOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [books]);

  const openBook = (slug: string, initialSectionId?: string) => {
    isRestoringScrollRef.current = true;
    setPreviewBookSlug(null);
    setActiveBookSlug(slug);
    setActiveGlossId(null);
    setMobileTocOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.set('book', slug);
    window.history.pushState({ book: slug }, '', url.toString());
    if (initialSectionId) {
      window.setTimeout(() => {
        const target = document.getElementById(`section-${initialSectionId}`);
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 60);
    }
  };

  const returnToShelf = () => {
    setActiveBookSlug(null);
    setActiveGlossId(null);
    setMobileTocOpen(false);
    setProgressStore(loadProgressStore());
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

  const book = useMemo(
    () => books.find((b) => b.slug === activeBookSlug) ?? books[0],
    [books, activeBookSlug]
  );
  const chapter = book.chapters[0];
  const hasLiminaire = Boolean(chapter.dedication?.noteZh || chapter.epigraph);

  // 切换书籍时更新页面标题并恢复上次阅读到的自然段坐标
  useLayoutEffect(() => {
    if (!activeBookSlug) {
      document.title = 'EvenBetterReads';
      isRestoringScrollRef.current = false;
      return;
    }

    document.title = `${book.titleZh} — ${book.authorZh} | EvenBetterReads`;
    const defaultSection = hasLiminaire ? 'liminaire' : (chapter.sections[0]?.id ?? 'liminaire');
    const store = loadProgressStore();
    const saved = store.items[activeBookSlug];

    if (saved && saved.progress > 0 && saved.progress < 99) {
      isRestoringScrollRef.current = true;
      setCurrentSpySection(saved.sectionId || defaultSection);
      setScrollProgress(saved.progress);

      const alignToSavedBlock = () => {
        const target =
          (saved.blockId ? document.getElementById(saved.blockId) : null) ||
          document.getElementById(`section-${saved.sectionId}`);
        if (target) {
          const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 84);
          window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
        }
      };

      alignToSavedBlock();
      const rafId = window.requestAnimationFrame(() => {
        alignToSavedBlock();
        window.setTimeout(() => {
          isRestoringScrollRef.current = false;
        }, 80);
      });

      return () => window.cancelAnimationFrame(rafId);
    } else {
      isRestoringScrollRef.current = false;
      setCurrentSpySection(defaultSection);
      setScrollProgress(0);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [activeBookSlug, book, chapter, hasLiminaire]);

  // 目录抽屉打开或高亮项变化时，保持高亮项在目录可视区域内
  useEffect(() => {
    if (!activeBookSlug || !mobileTocOpen || !tocNavRef.current) return;
    const activeBtn = tocNavRef.current.querySelector<HTMLElement>(
      `[data-toc-section="${currentSpySection}"]`
    );
    activeBtn?.scrollIntoView({ block: 'nearest' });
  }, [activeBookSlug, mobileTocOpen, currentSpySection]);

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

  if (activeRailItem) {
    lastRailItemRef.current = activeRailItem;
  }
  const sheetItem = activeRailItem ?? lastRailItemRef.current;

  // 弹窗/目录抽屉/移动端底部注疏 Sheet 打开时锁定底层页面滚动，避免穿透滚动
  useEffect(() => {
    const isMobileViewport = typeof window !== 'undefined' && window.innerWidth < 1280;
    const shouldLock =
      Boolean(previewBookSlug) ||
      Boolean(mobileTocOpen) ||
      Boolean(activeRailItem && isMobileViewport);

    if (!shouldLock) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [previewBookSlug, mobileTocOpen, activeRailItem]);

  useEffect(() => {
    if (!activeBookSlug) return;

    let saveTimer: number | null = null;

    const getSectionLabel = (secId: string) => {
      if (secId === 'liminaire') return '卷首与题词';
      const found = chapter.sections.find((s) => s.id === secId);
      if (!found) return '';
      const prefix =
        found.roman === 'Vorrede'
          ? '序言'
          : found.roman === 'Appendice'
            ? '附录'
            : found.roman;
      return `${prefix} ${found.titleZh}`;
    };

    const persistReadingPosition = (
      scrollTop: number,
      pct: number,
      currentSection: string
    ) => {
      if (isRestoringScrollRef.current) return;

      const store = loadProgressStore();

      // 在卷首顶部或已读至全书末尾时，清除未完待续状态
      if (scrollTop < 80 || pct >= 99) {
        if (store.items[activeBookSlug]) {
          delete store.items[activeBookSlug];
          if (store.lastSlug === activeBookSlug) {
            const remaining = Object.values(store.items).sort(
              (a, b) => b.updatedAt - a.updatedAt
            );
            store.lastSlug = remaining[0]?.slug ?? null;
          }
          saveProgressStore(store);
          setProgressStore(store);
        }
        return;
      }

      const blocks = document.querySelectorAll<HTMLElement>('[data-reading-block]');
      let activeBlockId: string | null = null;
      for (const el of blocks) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 68) {
          activeBlockId = el.dataset.readingBlock ?? null;
          break;
        }
      }

      const nextItem: ReadingProgressItem = {
        slug: activeBookSlug,
        blockId: activeBlockId,
        sectionId: currentSection,
        sectionTitle: getSectionLabel(currentSection),
        progress: Math.min(98, Math.max(1, Math.round(pct))),
        updatedAt: Date.now()
      };

      store.lastSlug = activeBookSlug;
      store.items[activeBookSlug] = nextItem;
      saveProgressStore(store);
      setProgressStore(store);
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      if (!isRestoringScrollRef.current && docHeight > 0) {
        setScrollProgress(pct);
      }

      const sectionEls = document.querySelectorAll<HTMLElement>('[data-section-anchor]');
      let current = hasLiminaire ? 'liminaire' : (chapter.sections[0]?.id ?? 'liminaire');
      for (const el of sectionEls) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 180) {
          current = el.dataset.sectionAnchor || current;
        }
      }
      if (!isRestoringScrollRef.current) {
        setCurrentSpySection(current);
      }

      if (saveTimer !== null) {
        window.clearTimeout(saveTimer);
      }
      saveTimer = window.setTimeout(() => {
        persistReadingPosition(scrollTop, pct, current);
      }, 120);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (saveTimer !== null) {
        window.clearTimeout(saveTimer);
      }
    };
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

  // 纸张主题切换组件（书架与阅读器共用，高度与字号切换器严格统一为 h-8）
  const renderThemeSwitcher = () => (
    <div
      className="inline-flex items-center h-8 border border-[var(--rule-line)] bg-[var(--bg-panel)] p-0.5 text-xs"
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
          title={t.label}
          aria-label={t.label}
          className={`h-full w-7 sm:w-auto sm:px-2.5 inline-flex items-center justify-center gap-1.5 leading-none cursor-pointer transition-colors ${
            theme === t.id
              ? 'bg-[var(--surface-solid)] text-[var(--ink-on-solid)]'
              : 'text-[var(--ink-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <span
            className="w-2.5 h-2.5 border border-current inline-block shrink-0"
            style={{ backgroundColor: t.dot }}
          />
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );

  // ==================== 书架视图 (Bookshelf View) ====================
  if (!activeBookSlug) {
    const resumeEntry = (() => {
      const candidateSlug =
        progressStore.lastSlug && progressStore.items[progressStore.lastSlug]
          ? progressStore.lastSlug
          : Object.values(progressStore.items).sort((a, b) => b.updatedAt - a.updatedAt)[0]?.slug;
      if (!candidateSlug) return null;
      const record = progressStore.items[candidateSlug];
      const targetBook = books.find((b) => b.slug === candidateSlug);
      if (!record || !targetBook || record.progress <= 0 || record.progress >= 99) return null;
      return { book: targetBook, record };
    })();

    const previewBook = previewBookSlug
      ? (books.find((b) => b.slug === previewBookSlug) ?? null)
      : null;

    const renderBookCard = (b: BookMeta, idx: number) => {
      const isLongTitle = b.titleZh.length > 10;

      return (
        <article
          key={b.slug}
          onClick={() => setPreviewBookSlug(b.slug)}
          style={{ animationDelay: `${idx * 28}ms` }}
          className="anim-card-enter group border border-[var(--rule-strong)] p-1 bg-[var(--bg-panel)] hover:-translate-y-0.5 hover:border-[var(--accent-nrf)] hover:shadow-[0_6px_18px_-6px_rgba(0,0,0,0.12)] transition-all duration-250 ease-out cursor-pointer"
        >
          <div className="border border-[var(--rule-line)] group-hover:border-[var(--accent-nrf)] transition-colors duration-250 p-3.5 sm:p-4">
            <div className="grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[104px_minmax(0,1fr)] gap-3.5 sm:gap-4 items-stretch">
              <BookCoverSvg slug={b.slug} />

              <div className="min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 pb-1.5 border-b border-[var(--rule-line)]">
                    <span className="text-xs font-medium truncate">{b.authorZh}</span>
                    <span className="font-mono-coord text-[11px] text-[var(--accent-nrf)] shrink-0">
                      {b.year}
                    </span>
                  </div>

                  <h2
                    className={`zh-title-bold tracking-tight mt-2 leading-snug group-hover:text-[var(--accent-nrf)] transition-colors duration-200 ${
                      isLongTitle ? 'text-[16px] sm:text-[17px]' : 'text-lg sm:text-[19.5px]'
                    }`}
                  >
                    {b.titleZh}
                  </h2>
                  <p className="fr-prose italic text-xs leading-snug mt-0.5 truncate">
                    {b.titleOriginal}
                  </p>
                  <p className="text-[11.5px] mt-1 leading-snug truncate">
                    —— {b.subtitleZh}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[var(--rule-line)] flex items-center justify-end">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openBook(b.slug);
                    }}
                    className="group/btn w-full sm:w-auto px-4 py-1.5 text-[13px] font-medium bg-[var(--surface-solid)] text-[var(--ink-on-solid)] border border-[var(--rule-strong)] hover:bg-[var(--accent-nrf)] hover:border-[var(--accent-nrf)] hover:text-[#fbf9f5] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>开始阅读</span>
                    <span className="font-mono-coord inline-block group-hover/btn:translate-x-0.5 transition-transform duration-200">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    };

    return (
      <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--ink-primary)] selection:bg-[var(--accent-nrf-soft)]">
        <header className="border-b border-[var(--rule-strong)] bg-[var(--bg-canvas)]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-13 sm:h-14 flex items-center justify-between gap-4">
            <h1 className="fr-prose text-xl sm:text-[25px] leading-none tracking-[-0.02em] select-none shrink-0">
              <span className="italic font-normal text-[var(--accent-nrf)] pr-[2px]">Even</span>
              <span className="font-semibold">Better</span>
              <span className="font-normal">Reads</span>
            </h1>
            {renderThemeSwitcher()}
          </div>
        </header>

        <main className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-5 sm:py-6 flex-1">
          {/* 书架顶部紧凑「最近续读」条 */}
          {resumeEntry && (
            <div
              onClick={() => openBook(resumeEntry.book.slug)}
              className="anim-view-enter group relative mb-5 border border-[var(--rule-strong)] bg-[var(--bg-panel)] hover:border-[var(--accent-nrf)] transition-all duration-200 px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="inline-block bg-[var(--accent-nrf)] text-[#fbf9f5] transition-colors px-1.5 py-0.5 font-mono-coord text-[10.5px] tracking-wider shrink-0">
                  继续阅读
                </span>
                <div className="flex items-baseline gap-2 min-w-0 truncate">
                  <span className="zh-title-bold text-sm sm:text-[15px] truncate">
                    {resumeEntry.book.titleZh}
                  </span>
                  <span className="fr-prose italic text-xs hidden md:inline truncate">
                    {resumeEntry.book.titleOriginal}
                  </span>
                </div>
                <span className="hidden sm:inline-block h-3 w-[1px] bg-[var(--rule-line)] shrink-0" />
                <span className="hidden sm:inline-block zh-emphasis text-xs truncate">
                  {resumeEntry.record.sectionTitle}
                </span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <span className="font-mono-coord text-[11px] text-[var(--accent-nrf)]">
                  {resumeEntry.record.progress}%
                </span>
                <span className="text-[11.5px] border border-[var(--rule-strong)] px-2 py-0.5 group-hover:bg-[var(--surface-solid)] group-hover:text-[var(--ink-on-solid)] transition-colors flex items-center gap-1">
                  <span>续读</span>
                  <span className="font-mono-coord inline-block group-hover:translate-x-0.5 transition-transform duration-200">
                    →
                  </span>
                </span>
              </div>

              <div className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-transparent overflow-hidden">
                <div
                  className="h-full bg-[var(--accent-nrf)] transition-all duration-150"
                  style={{ width: `${resumeEntry.record.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* 移动端单列流 */}
          <div className="flex flex-col gap-5 md:hidden">
            {books.map((b, idx) => renderBookCard(b, idx))}
          </div>

          {/* 平板双列网格 */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 items-stretch">
            {books.map((b, idx) => renderBookCard(b, idx))}
          </div>

          {/* 桌面端三列网格 */}
          <div className="hidden lg:grid grid-cols-3 gap-5 items-stretch">
            {books.map((b, idx) => renderBookCard(b, idx))}
          </div>
        </main>

        {/* 书籍导读与目录弹窗 (移动端为底部弹出 Sheet，点击上方留白即可收起；桌面端为居中弹窗) */}
        {previewBook && (
          <div
            className="anim-backdrop-enter fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setPreviewBookSlug(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${previewBook.titleZh} 导读`}
          >
            <div
              className="anim-sheet-up sm:anim-modal-enter border-t-2 sm:border-2 border-[var(--rule-strong)] bg-[var(--bg-canvas)] text-[var(--ink-primary)] max-w-[680px] w-full max-h-[85vh] sm:max-h-[88vh] flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 移动端顶部拖拽柄 */}
              <div
                className="sm:hidden pt-2.5 pb-1 bg-[var(--bg-panel)] flex justify-center cursor-pointer"
                onClick={() => setPreviewBookSlug(null)}
              >
                <span className="w-10 h-1 bg-[var(--rule-line)] block" />
              </div>

              {/* 弹窗固定顶栏：滚动到底部时依然常驻 */}
              <div className="shrink-0 px-4 sm:px-7 py-3 border-b border-[var(--rule-strong)] bg-[var(--bg-panel)] flex items-center justify-between gap-3">
                <div className="flex items-baseline gap-2.5 min-w-0 truncate">
                  <span className="font-mono-coord text-xs text-[var(--accent-nrf)] shrink-0">
                    {previewBook.vol}
                  </span>
                  <span className="zh-title-bold text-base sm:text-lg truncate">
                    {previewBook.titleZh}
                  </span>
                  <span className="text-xs hidden sm:inline truncate">
                    {previewBook.authorZh}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => openBook(previewBook.slug)}
                    className="group/mbtn px-3.5 sm:px-4 py-1.5 text-xs sm:text-[13px] font-medium bg-[var(--accent-nrf)] text-[#fbf9f5] hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1"
                  >
                    <span>开始阅读</span>
                    <span className="font-mono-coord inline-block group-hover/mbtn:translate-x-0.5 transition-transform duration-200">
                      →
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewBookSlug(null)}
                    aria-label="关闭弹窗"
                    className="w-8 h-8 flex items-center justify-center text-sm border border-[var(--rule-line)] bg-[var(--bg-canvas)] text-[var(--ink-primary)] hover:border-[var(--rule-strong)] hover:bg-[var(--bg-elevated)] active:scale-[0.98] transition-all duration-150 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* 弹窗可滚动内容区 */}
              <div className="p-5 sm:p-7 overflow-y-auto toc-scroll space-y-6">
                {/* 书籍题录头块 */}
                <div className="grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[116px_minmax(0,1fr)] gap-5 items-start pb-5 border-b border-[var(--rule-line)]">
                  <BookCoverSvg slug={previewBook.slug} />

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-medium">{previewBook.authorZh}</span>
                      <span className="fr-prose uppercase tracking-[0.12em] text-xs">
                        {previewBook.authorOriginal}
                      </span>
                      <span className="font-mono-coord text-xs text-[var(--accent-nrf)] ml-auto">
                        {previewBook.year}
                      </span>
                    </div>

                    <h2 className="zh-title-bold text-xl sm:text-2xl tracking-tight mt-2 leading-snug">
                      {previewBook.titleZh}
                    </h2>
                    <p className="fr-prose italic text-sm sm:text-base mt-0.5">
                      {previewBook.titleOriginal}
                    </p>
                    <p className="text-xs sm:text-[13px] mt-1">
                      —— {previewBook.subtitleZh}（
                      <span className="fr-prose italic">{previewBook.subtitleOriginal}</span>）
                    </p>
                    <p className="fr-prose text-xs mt-3 pt-2 border-t border-[var(--rule-line)]">
                      {previewBook.publisher}
                    </p>
                  </div>
                </div>

                {/* 弹窗正文：完整多段式学术导读 */}
                <div className="space-y-3.5">
                  {previewBook.descriptionZh.split('\n\n').map((para, idx) => (
                    <p
                      key={idx}
                      className="zh-prose zh-indent text-[14.5px] sm:text-[15.5px] leading-relaxed"
                    >
                      {renderGlossContent(para)}
                    </p>
                  ))}
                </div>

                {/* 弹窗底部：章节目录速览（点击可直接跳入对应章节） */}
                {previewBook.chapters[0] && (
                  <div className="pt-5 border-t border-[var(--rule-line)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-coord text-xs uppercase tracking-[0.15em] text-[var(--accent-nrf)]">
                        章节目录（点击直达）
                      </span>
                      <span className="font-mono-coord text-[11px]">
                        {previewBook.chapters[0].number}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {previewBook.chapters[0].sections.map((sec) => (
                        <button
                          key={sec.id}
                          type="button"
                          onClick={() => openBook(previewBook.slug, sec.id)}
                          className="text-left px-3 py-2 text-xs border border-[var(--rule-line)] hover:border-[var(--rule-strong)] hover:bg-[var(--bg-elevated)]/60 transition-colors grid grid-cols-[minmax(32px,auto)_1fr] gap-2 items-baseline cursor-pointer"
                        >
                          <span className="font-mono-coord text-[11px] text-[var(--accent-nrf)]">
                            {sec.roman === 'Vorrede'
                              ? '序言'
                              : sec.roman === 'Appendice'
                                ? '附录'
                                : sec.roman}
                          </span>
                          <span className="truncate">{sec.titleZh}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 书架底部牌记与译注协议说明 */}
        <footer className="border-t border-[var(--rule-strong)] bg-[var(--bg-canvas)] mt-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="fr-prose text-sm tracking-tight">
                <span className="italic text-[var(--accent-nrf)] pr-[1px]">Even</span>
                <span className="font-semibold">Better</span>
                <span>Reads</span>
              </span>
              <span className="hidden sm:inline-block h-3 w-[1px] bg-[var(--rule-line)]" />
              <span>全站中文译文与伴读旁注由</span>
              <a
                href="https://deepmind.google/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-coord text-[11.5px] text-[var(--accent-nrf)] underline underline-offset-4 decoration-[var(--accent-nrf)] hover:opacity-80 transition-opacity"
              >
                Gemini-4-Argon
              </a>
              <span>依据外文权威底本直接精译并撰注</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span>
                中文译文与伴读旁注采用{' '}
                <a
                  href="https://creativecommons.org/publicdomain/zero/1.0/deed.zh-hans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-coord text-[11px] underline underline-offset-4 decoration-[var(--rule-strong)] hover:text-[var(--accent-nrf)] transition-colors"
                >
                  CC0 1.0
                </a>{' '}
                献入公有领域
              </span>
              <span className="hidden sm:inline-block h-3 w-[1px] bg-[var(--rule-line)]" />
              <a
                href="https://github.com/NihilDigit/EvenBetterReads"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-coord text-[11px] underline underline-offset-4 decoration-[var(--rule-strong)] hover:text-[var(--accent-nrf)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
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
      <header className="sticky top-0 z-40 bg-[var(--bg-canvas)]/95 backdrop-blur-sm border-b border-[var(--rule-strong)]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 h-13 sm:h-14 flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            {/* 左上角第一顺位：全端统一的汉堡目录按钮（与右侧控件统一为 h-8 盒模型） */}
            <button
              type="button"
              onClick={() => setMobileTocOpen((v) => !v)}
              className="h-8 w-8 p-0.5 inline-flex items-center justify-center border border-[var(--rule-line)] bg-[var(--bg-panel)] cursor-pointer shrink-0 transition-colors"
              aria-label="切换章节目录"
              title="章节目录"
            >
              <span
                className={`w-full h-full inline-flex items-center justify-center transition-colors ${
                  mobileTocOpen
                    ? 'bg-[var(--surface-solid)] text-[var(--ink-on-solid)]'
                    : 'text-[var(--ink-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1.75 3.25H12.25M1.75 7H9.75M1.75 10.75H12.25"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </button>

            {/* 汉堡按钮右侧：品牌 Logo（窄屏简写为 EBR，点击直接返回书架主页） */}
            <button
              type="button"
              onClick={returnToShelf}
              title="返回书架主页"
              className="fr-prose text-[20px] sm:text-[23px] leading-none tracking-[-0.02em] select-none cursor-pointer shrink-0 hover:opacity-80 transition-opacity flex items-center"
            >
              <span className="sm:hidden">
                <span className="italic font-normal text-[var(--accent-nrf)] pr-[1px]">E</span>
                <span className="font-semibold">B</span>
                <span className="font-normal">R</span>
              </span>
              <span className="hidden sm:inline">
                <span className="italic font-normal text-[var(--accent-nrf)] pr-[2px]">Even</span>
                <span className="font-semibold">Better</span>
                <span className="font-normal">Reads</span>
              </span>
            </button>

            <span className="hidden sm:inline-block h-4 w-[1px] bg-[var(--rule-line)] shrink-0" />

            <a
              href="#top"
              className="hidden sm:flex items-baseline gap-2 truncate"
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

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* 字号调节（与左侧汉堡及右侧主题切换器高度、外框、内边距完全统一） */}
            <div
              className="inline-flex items-center h-8 border border-[var(--rule-line)] bg-[var(--bg-panel)] p-0.5 text-xs"
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
                  className={`h-full w-7 inline-flex items-center justify-center leading-none cursor-pointer transition-colors ${
                    fontScale === s.id
                      ? 'bg-[var(--surface-solid)] text-[var(--ink-on-solid)]'
                      : 'text-[var(--ink-primary)] hover:bg-[var(--bg-elevated)]'
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

      {/* 全端统一的汉堡目录抽屉（纯 GPU transform 滑入滑出，零文档流重排，点击右侧遮罩即收起） */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          mobileTocOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } bg-black/45`}
        onClick={() => setMobileTocOpen(false)}
        aria-hidden={!mobileTocOpen}
      >
        <aside
          className={`toc-scroll w-72 sm:w-80 max-w-[84vw] h-full bg-[var(--bg-canvas)] text-[var(--ink-primary)] border-r border-[var(--rule-strong)] p-5 sm:p-6 flex flex-col justify-between overflow-y-auto overscroll-contain shadow-2xl will-change-transform transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileTocOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          aria-label="章节目录"
        >
          <div>
            <div className="flex items-start justify-between gap-2 pb-4 border-b border-[var(--rule-line)]">
              <div className="min-w-0">
                <p className="font-mono-coord text-[10px] tracking-[0.2em] uppercase text-[var(--accent-nrf)] truncate">
                  {book.authorOriginal} / {chapter.number}
                </p>
                <h2 className="text-base sm:text-lg font-medium mt-1 leading-snug">
                  {book.titleZh}
                </h2>
                <p className="fr-prose italic text-xs mt-0.5 truncate">
                  {book.titleOriginal} ({book.year})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileTocOpen(false)}
                aria-label="收起目录"
                className="w-8 h-8 -mr-1 -mt-1 flex items-center justify-center text-sm text-[var(--ink-primary)] opacity-75 hover:opacity-100 cursor-pointer shrink-0"
              >
                ✕
              </button>
            </div>

            <nav ref={tocNavRef} className="mt-3.5 space-y-1">
              {hasLiminaire && (
                <button
                  type="button"
                  data-toc-section="liminaire"
                  onClick={() => jumpToSection('liminaire')}
                  className={`w-full text-left py-2.5 px-2.5 text-sm grid grid-cols-[minmax(38px,auto)_1fr] gap-2.5 items-baseline transition-colors border-[1.5px] cursor-pointer ${
                    currentSpySection === 'liminaire'
                      ? 'border-[var(--rule-strong)] bg-[var(--bg-elevated)] font-medium'
                      : 'border-transparent hover:bg-[var(--bg-elevated)]/50'
                  }`}
                >
                  <span className="font-mono-coord text-xs text-[var(--accent-nrf)] shrink-0">
                    序
                  </span>
                  <span>卷首与题词</span>
                </button>
              )}

              {chapter.sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  data-toc-section={sec.id}
                  onClick={() => jumpToSection(sec.id)}
                  className={`w-full text-left py-2.5 px-2.5 text-sm grid grid-cols-[minmax(38px,auto)_1fr] gap-2.5 items-baseline transition-colors border-[1.5px] cursor-pointer ${
                    currentSpySection === sec.id
                      ? 'border-[var(--rule-strong)] bg-[var(--bg-elevated)] font-medium'
                      : 'border-transparent hover:bg-[var(--bg-elevated)]/50'
                  }`}
                >
                  <span className="font-mono-coord text-xs text-[var(--accent-nrf)] shrink-0">
                    {sec.roman === 'Vorrede'
                      ? '序言'
                      : sec.roman === 'Appendice'
                        ? '附录'
                        : sec.roman}
                  </span>
                  <div className="min-w-0">
                    <div>{sec.titleZh}</div>
                    <div className="fr-prose italic text-xs mt-0.5">{sec.titleOriginal}</div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      {/* 主体网格容器（主阅读区与右侧旁注轨道始终在视口居中，开合汉堡目录零重排） */}
      <div
        id="top"
        key={activeBookSlug}
        className="anim-view-enter max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-10 flex-1"
      >
        {/* 主阅读画布 */}
        <main className="py-8 sm:py-10 min-w-0 w-full">
          {/* 卷首：献辞/导言标题 + 卷首说明 + 卷首题词 */}
          {(chapter.dedication || chapter.epigraph) && (
            <section
              id="section-liminaire"
              data-section-anchor="liminaire"
              className="mb-14 sm:mb-20"
            >
              {chapter.dedication && (
                <>
                  {/* 1. 献辞/导言标题横幅（去掉顶部分割线与过大内边距，与正文小节标题层级统一） */}
                  <div
                    className={`max-w-[680px] ${
                      chapter.dedication.noteZh
                        ? 'mb-7 sm:mb-8 pb-4 border-b-2 border-[var(--rule-strong)]'
                        : 'py-6 sm:py-8 mb-8 border-b border-[var(--rule-line)] text-center'
                    }`}
                  >
                    <h2
                      className={`${
                        chapter.dedication.noteZh
                          ? 'text-2xl sm:text-[26px] font-normal tracking-wide leading-snug'
                          : 'zh-emphasis text-xl sm:text-[24px] tracking-wide leading-relaxed'
                      }`}
                    >
                      {chapter.dedication.toZh}
                    </h2>
                    {chapter.dedication.toOriginal && (
                      <p className="fr-prose italic text-sm sm:text-base mt-1">
                        {chapter.dedication.toOriginal}
                      </p>
                    )}
                  </div>

                  {/* 2. 卷首说明与对应旁注（如有） */}
                  {chapter.dedication.noteZh && (
                    <div
                      id="dedication-block"
                      data-reading-block="dedication-block"
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
                        layoutDeps={[fontScale, activeBookSlug]}
                      />
                    </div>
                  )}
                </>
              )}

              {/* 3. 独立卷首题词块 */}
              {chapter.epigraph && (
                <div
                  className={`max-w-[680px] ${
                    chapter.dedication ? 'mt-10 pt-8 border-t border-[var(--rule-line)]' : ''
                  } pb-8 border-b border-[var(--rule-strong)] text-center px-4 sm:px-8`}
                >
                  <p className="zh-emphasis text-lg sm:text-[20px] leading-relaxed">
                    「{chapter.epigraph.quoteZh}」
                  </p>
                  <footer className="mt-4 text-sm tracking-wide">
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
                      {sec.roman !== 'Vorrede' && sec.roman !== 'Appendice' && (
                        <span className="fr-prose text-2xl sm:text-[28px] text-[var(--accent-nrf)] shrink-0">
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
                          <div key={blk.id} id={blk.id} data-reading-block={blk.id}>
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
                      layoutDeps={[fontScale, activeBookSlug]}
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
                  className="px-4 py-2 text-xs border border-[var(--rule-strong)] hover:bg-[var(--surface-solid)] hover:text-[var(--ink-on-solid)] transition-colors cursor-pointer"
                >
                  返回章首
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--rule-line)] flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 text-xs">
              <div className="flex flex-wrap items-baseline gap-1.5">
                <span>本篇中文译文与伴读旁注由</span>
                <a
                  href="https://deepmind.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-coord text-[11.5px] text-[var(--accent-nrf)] underline underline-offset-4 decoration-[var(--accent-nrf)] hover:opacity-80 transition-opacity"
                >
                  Gemini-4-Argon
                </a>
                <span>自外文底本直接译注</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span>
                  中文译注协议：
                  <a
                    href="https://creativecommons.org/publicdomain/zero/1.0/deed.zh-hans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-coord text-[11px] underline underline-offset-4 decoration-[var(--rule-strong)] hover:text-[var(--accent-nrf)] transition-colors ml-1"
                  >
                    CC0 1.0
                  </a>
                </span>
                <span className="h-3 w-[1px] bg-[var(--rule-line)]" />
                <a
                  href="https://github.com/NihilDigit/EvenBetterReads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-coord text-[11px] underline underline-offset-4 decoration-[var(--rule-strong)] hover:text-[var(--accent-nrf)] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* 移动端/平板端：底部弹出 Sheet（点击上方空白区域或向下滑动即收起） */}
      <div
        className={`xl:hidden fixed inset-0 z-50 flex flex-col justify-end transition-opacity duration-200 ${
          activeRailItem ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } bg-black/45`}
        onClick={() => {
          setSheetDragY(0);
          setActiveGlossId(null);
        }}
        role="dialog"
        aria-modal={Boolean(activeRailItem)}
        aria-hidden={!activeRailItem}
        aria-label={sheetItem?.kind === 'authorNote' ? book.authorNoteLabel : '伴读旁注'}
      >
        <div
          style={{
            transform: activeRailItem
              ? `translateY(${sheetDragY}px)`
              : 'translateY(100%)'
          }}
          className={`w-full max-h-[72vh] flex flex-col border-t-2 bg-[var(--bg-canvas)] text-[var(--ink-primary)] pt-2 shadow-2xl transition-transform ${
            sheetDragY > 0 ? 'duration-0' : 'duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]'
          } ${
            sheetItem?.kind === 'authorNote'
              ? 'border-[var(--rule-strong)]'
              : 'border-[var(--accent-nrf)]'
          }`}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => {
            sheetTouchStartYRef.current = e.touches[0]?.clientY ?? null;
          }}
          onTouchMove={(e) => {
            if (sheetTouchStartYRef.current === null) return;
            const deltaY = (e.touches[0]?.clientY ?? 0) - sheetTouchStartYRef.current;
            if (deltaY > 0) {
              setSheetDragY(deltaY);
            }
          }}
          onTouchEnd={() => {
            if (sheetDragY > 56) {
              setActiveGlossId(null);
            }
            setSheetDragY(0);
            sheetTouchStartYRef.current = null;
          }}
        >
          {/* Sheet 顶部拖拽柄（点击或下滑均可收起） */}
          <div
            className="w-full py-1.5 shrink-0 flex justify-center cursor-pointer"
            onClick={() => setActiveGlossId(null)}
          >
            <span className="w-10 h-1 bg-[var(--rule-line)] block" />
          </div>

          {sheetItem && (
            <div className="max-w-[680px] w-full mx-auto mt-1 flex flex-col min-h-0 flex-1">
              <div className="px-5 sm:px-6 shrink-0">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-[var(--rule-line)]">
                  {sheetItem.kind === 'authorNote' ? (
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-[var(--surface-solid)] text-[var(--ink-on-solid)] border border-[var(--rule-strong)] px-2 py-0.5 font-mono-coord text-xs">
                        {sheetItem.authorLabel} [{sheetItem.formattedIndex}]
                      </span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-[28px_1fr] items-baseline gap-1 min-w-0">
                      <span className="font-mono-coord text-xs text-[var(--accent-nrf)] font-semibold">
                        {sheetItem.formattedIndex}
                      </span>
                      <p className="zh-emphasis text-[15px] leading-snug">
                        {sheetItem.anchor}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveGlossId(null)}
                    aria-label="收起注疏"
                    className="w-8 h-8 -mr-1.5 -mt-1 flex items-center justify-center text-sm text-[var(--ink-primary)] opacity-70 hover:opacity-100 shrink-0 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="px-5 sm:px-6 pt-3.5 pb-6 overflow-y-auto overscroll-contain flex-1 min-h-0">
                <p className="gloss-prose text-[14.5px] leading-relaxed">
                  {renderGlossContent(sheetItem.content)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
