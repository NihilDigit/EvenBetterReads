import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Check,
  BookOpen,
  Download
} from 'lucide-react';
import type { BookCatalogItem, BookCategory } from '../types/book';
import BookCoverSvg from './BookCoverSvg';
import BrandMark from './BrandMark';
import AiModelBadge from './AiModelBadge';
import { FourColorSwatch, M3AppearanceControls } from './M3PaletteControls';
import {
  M3_PALETTE_PRESETS,
  type ColorMode,
  type PaletteId,
  type ResolvedColorMode
} from '../styles/m3e-palettes';
import {
  loadProgressStore,
  loadPalettePreference,
  loadColorModePreference,
  applyAppearanceToDom,
  savePalettePreference,
  saveColorModePreference,
  type ReadingProgressStore
} from '../utils/readingProgress';

interface LibraryAppProps {
  catalog: BookCatalogItem[];
}

type FilterKey = 'ALL' | 'READING' | BookCategory;

const FILTER_LABELS: Record<FilterKey, string> = {
  ALL: '全部',
  READING: '在读',
  philosophy: '哲学',
  literature: '文学',
  politics: '政治',
  economics: '经济',
  history: '历史'
};

function stripInlineStars(text: string): string {
  return text.replace(/\*\*/g, '');
}

function formatWordCount(count: number): string {
  if (count >= 10000) {
    const wan = (count / 10000).toFixed(1).replace(/\.0$/, '');
    return `${wan} 万字`;
  }
  return `${(Math.round(count / 100) * 100).toLocaleString('en-US')} 字`;
}

export default function LibraryApp({ catalog }: LibraryAppProps) {
  const [palette, setPalette] = useState<PaletteId>('terracotta');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [resolvedMode, setResolvedMode] = useState<ResolvedColorMode>('light');
  const [appearanceOpen, setAppearanceOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('ALL');
  const [progressStore, setProgressStore] = useState<ReadingProgressStore>({
    lastSlug: null,
    items: {}
  });

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchWrapRef = useRef<HTMLDivElement | null>(null);
  const appearanceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const legacySlug = params.get('book');
    if (legacySlug && catalog.some((b) => b.slug === legacySlug)) {
      window.location.replace(`/books/${legacySlug}`);
      return;
    }

    const initPalette = loadPalettePreference();
    const initMode = loadColorModePreference();
    setPalette(initPalette);
    setColorMode(initMode);
    setResolvedMode(applyAppearanceToDom(initPalette, initMode));
    setProgressStore(loadProgressStore());

    const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
    const onSystemThemeChange = () => {
      const currentMode = loadColorModePreference();
      if (currentMode === 'system') {
        setResolvedMode(applyAppearanceToDom(loadPalettePreference(), 'system'));
      }
    };
    mql?.addEventListener?.('change', onSystemThemeChange);

    const openAndFocusSearch = () => {
      setSearchExpanded(true);
      window.requestAnimationFrame(() => {
        searchInputRef.current?.focus();
      });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openAndFocusSearch();
      } else if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        openAndFocusSearch();
      } else if (e.key === 'Escape') {
        setAppearanceOpen(false);
        setSearchQuery('');
        setSearchExpanded(false);
        searchInputRef.current?.blur();
      }
    };

    const onClickOutside = (e: MouseEvent) => {
      if (appearanceRef.current && !appearanceRef.current.contains(e.target as Node)) {
        setAppearanceOpen(false);
      }
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setSearchExpanded((prev) => (prev ? false : prev));
      }
    };

    const onPageShow = () => {
      const p = loadPalettePreference();
      const m = loadColorModePreference();
      setPalette(p);
      setColorMode(m);
      setResolvedMode(applyAppearanceToDom(p, m));
      setProgressStore(loadProgressStore());
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pageshow', onPageShow);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      mql?.removeEventListener?.('change', onSystemThemeChange);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pageshow', onPageShow);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [catalog]);

  const handleSelectPalette = (nextPalette: PaletteId) => {
    setPalette(nextPalette);
    setResolvedMode(savePalettePreference(nextPalette, colorMode));
  };

  const handleSelectColorMode = (nextMode: ColorMode) => {
    setColorMode(nextMode);
    setResolvedMode(saveColorModePreference(nextMode, palette));
  };

  const activePreset = useMemo(
    () => M3_PALETTE_PRESETS.find((p) => p.id === palette) ?? M3_PALETTE_PRESETS[0],
    [palette]
  );

  const resumeEntry = useMemo(() => {
    const candidateSlug =
      progressStore.lastSlug && progressStore.items[progressStore.lastSlug]
        ? progressStore.lastSlug
        : Object.values(progressStore.items).sort((a, b) => b.updatedAt - a.updatedAt)[0]?.slug;
    if (!candidateSlug) return null;
    const record = progressStore.items[candidateSlug];
    const book = catalog.find((b) => b.slug === candidateSlug);
    if (!record || !book || record.progress <= 0 || record.progress >= 100) return null;
    return { book, record };
  }, [catalog, progressStore]);

  const readingCount = useMemo(
    () =>
      Object.values(progressStore.items).filter(
        (it) => it.progress > 0 && it.progress < 100 && catalog.some((b) => b.slug === it.slug)
      ).length,
    [catalog, progressStore]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<BookCategory, number> = {
      philosophy: 0,
      literature: 0,
      politics: 0,
      economics: 0,
      history: 0
    };
    for (const b of catalog) {
      for (const cat of b.categories) {
        counts[cat] = (counts[cat] ?? 0) + 1;
      }
    }
    return counts;
  }, [catalog]);

  const filteredBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return catalog.filter((b) => {
      if (activeFilter === 'READING') {
        const rec = progressStore.items[b.slug];
        if (!rec || rec.progress <= 0 || rec.progress >= 100) return false;
      } else if (activeFilter !== 'ALL' && !b.categories.includes(activeFilter)) {
        return false;
      }

      if (!q) return true;
      const haystack = [
        b.titleZh,
        b.titleOriginal,
        b.subtitleZh,
        b.subtitleOriginal,
        b.authorZh,
        b.authorOriginal,
        b.year,
        b.descriptionZh,
        ...b.aiModels
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [catalog, activeFilter, searchQuery, progressStore]);

  const filterKeys: FilterKey[] = [
    'ALL',
    ...(readingCount > 0 ? (['READING'] as const) : []),
    'philosophy',
    'literature',
    'politics',
    'economics',
    'history'
  ];

  const isSearchOpen = searchExpanded || Boolean(searchQuery);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-surface)]">
      {/* ==================== M3 Expressive Top App Bar ==================== */}
      <header className="sticky top-0 z-30 bg-[color-mix(in_srgb,var(--md-sys-color-background)_88%,transparent)] backdrop-blur-md">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-[72px] flex items-center justify-between gap-2.5 sm:gap-4">
          <a
            href="/"
            className="shrink-0 flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            <BrandMark className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:scale-[1.04]" />
            <span
              className={`${
                isSearchOpen ? 'hidden sm:inline' : 'inline'
              } text-[15.5px] sm:text-[16.5px] font-semibold leading-none tracking-[-0.015em] text-[var(--md-sys-color-on-surface)]`}
            >
              Even Better Reads
            </span>
          </a>

          <div className={`flex items-center justify-end gap-2 ${isSearchOpen ? 'flex-1 sm:flex-initial' : 'shrink-0'}`}>
            {isSearchOpen ? (
              <div ref={searchWrapRef} className="flex-1 sm:flex-initial sm:w-[250px] md:w-[290px]">
                <label className="relative flex items-center h-10 rounded-full bg-[var(--md-sys-color-surface-container-high)] focus-within:bg-[var(--md-sys-color-surface-container-lowest)] focus-within:ring-2 focus-within:ring-[var(--md-sys-color-primary)] pl-3.5 pr-2 gap-2 transition-all duration-200 cursor-text">
                  <Search className="w-4 h-4 text-[var(--md-sys-color-on-surface-variant)] shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索书目或作者…"
                    aria-label="搜索馆藏书目"
                    className="w-full min-w-0 bg-transparent text-sm text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)]/75 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSearchExpanded(false);
                    }}
                    aria-label="关闭搜索"
                    className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] shrink-0 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </label>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSearchExpanded(true);
                  window.requestAnimationFrame(() => {
                    searchInputRef.current?.focus();
                  });
                }}
                aria-label="搜索书目 (/ 或 Ctrl+K)"
                title="搜索书目 (/ 或 Ctrl+K)"
                className="h-10 w-10 sm:w-auto sm:px-3.5 rounded-full inline-flex items-center justify-center gap-1.5 text-xs font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4 text-[var(--md-sys-color-on-surface-variant)]" />
                <span className="hidden sm:inline">搜索</span>
              </button>
            )}

            {/* M3 四色圆圈主题色板与明暗模式选择器 */}
            <div ref={appearanceRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setAppearanceOpen((v) => !v)}
                aria-expanded={appearanceOpen}
                aria-label="主题色板与外观设置"
                title="主题色板与外观设置"
                className={`h-10 pl-2 pr-3 sm:pr-3.5 rounded-full inline-flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer ${
                  appearanceOpen
                    ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                    : 'bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                <FourColorSwatch quadrants={activePreset.quadrants} sizeClass="w-6 h-6" />
                <span className="hidden sm:inline">{activePreset.label}</span>
              </button>

              {appearanceOpen && (
                <div className="anim-m3e-dialog absolute right-0 mt-2 w-[284px] rounded-[24px] bg-[var(--md-sys-color-surface-container)] p-4 shadow-[var(--md-sys-elevation-3)] z-50">
                  <M3AppearanceControls
                    palette={palette}
                    colorMode={colorMode}
                    onSelectPalette={handleSelectPalette}
                    onSelectColorMode={handleSelectColorMode}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ==================== 主内容画布 ==================== */}
      <main className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-10 pt-3 pb-14 flex-1 space-y-6">
        {resumeEntry && !searchQuery && (
          <section className="anim-m3e-enter rounded-[28px] bg-[var(--md-sys-color-surface-container-low)] p-4 sm:p-6 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-4 min-w-0">
                <a
                  href={`/books/${resumeEntry.book.slug}`}
                  className="w-[60px] sm:w-[70px] shrink-0 group block"
                >
                  <BookCoverSvg slug={resumeEntry.book.slug} mode={resolvedMode} />
                </a>

                <div className="min-w-0 space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]">
                      <BookOpen className="w-3 h-3" />
                      阅读进度
                    </span>
                    <span className="text-xs text-[var(--md-sys-color-on-surface-variant)] truncate">
                      {resumeEntry.record.sectionTitle}
                    </span>
                  </div>

                  <a href={`/books/${resumeEntry.book.slug}`} className="block group">
                    <h2 className="zh-display-serif text-lg sm:text-xl text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors truncate">
                      {resumeEntry.book.titleZh}
                      <span className="fr-prose italic font-normal text-sm text-[var(--md-sys-color-on-surface-variant)] ml-2.5 hidden md:inline">
                        {resumeEntry.book.titleOriginal}
                      </span>
                    </h2>
                  </a>

                  <div className="flex items-center gap-3 max-w-md pt-0.5">
                    <div className="flex-1 h-1.5 rounded-full bg-[var(--md-sys-color-surface-container-highest)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--md-sys-color-primary)] transition-all duration-300"
                        style={{ width: `${resumeEntry.record.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium tabular-nums-ui text-[var(--md-sys-color-primary)]">
                      {resumeEntry.record.progress}%
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={`/books/${resumeEntry.book.slug}`}
                className="sm:shrink-0 h-11 px-6 rounded-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:brightness-105 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>继续阅读</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        )}

        {/* M3E 标准学科分类筛选栏 */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div
            role="tablist"
            aria-label="按学科分类筛选"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5"
          >
            {filterKeys.map((key) => {
              const selected = activeFilter === key;
              const count =
                key === 'ALL'
                  ? catalog.length
                  : key === 'READING'
                    ? readingCount
                    : (categoryCounts[key] ?? 0);

              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveFilter(key)}
                  className={`h-9 px-3.5 rounded-[10px] inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium shrink-0 transition-all duration-200 cursor-pointer ${
                    selected
                      ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                      : 'bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container)] hover:text-[var(--md-sys-color-on-surface)]'
                  }`}
                >
                  {selected && <Check className="w-3.5 h-3.5 stroke-[2.4]" />}
                  <span>{FILTER_LABELS[key]}</span>
                  <span className="opacity-70 tabular-nums-ui text-[11.5px]">{count}</span>
                </button>
              );
            })}
          </div>

          {searchQuery && (
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              共匹配{' '}
              <strong className="text-[var(--md-sys-color-on-surface)]">
                {filteredBooks.length}
              </strong>{' '}
              部作品
            </p>
          )}
        </div>

        {/* ==================== M3E 馆藏卡片网格 ==================== */}
        {filteredBooks.length === 0 ? (
          <div className="rounded-[28px] bg-[var(--md-sys-color-surface-container-low)] py-16 px-6 text-center space-y-3">
            <p className="text-base font-medium">未找到匹配「{searchQuery}」的作品</p>
            <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
              可尝试检索作者译名、外文原题、学科关键词或译注模型名称
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('ALL');
              }}
              className="mt-2 h-10 px-5 rounded-full text-sm font-medium bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] cursor-pointer"
            >
              重置筛选
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {filteredBooks.map((b, idx) => {
              const saved = progressStore.items[b.slug];
              const hasProgress = Boolean(saved && saved.progress > 0 && saved.progress < 100);
              const firstParaSnippet = stripInlineStars(b.descriptionZh.split('\n\n')[0] ?? '');

              return (
                <article
                  key={b.slug}
                  style={{ animationDelay: `${Math.min(idx * 24, 240)}ms` }}
                  className="anim-m3e-enter group relative rounded-[24px] bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container)] transition-all duration-300 ease-[var(--md-sys-motion-spring-spatial)] hover:-translate-y-0.5 hover:shadow-[var(--md-sys-elevation-1)]"
                >
                  <a
                    href={`/books/${b.slug}`}
                    className="h-full p-4 sm:p-5 grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[108px_minmax(0,1fr)] gap-4 items-stretch focus:outline-none rounded-[24px] focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary)]"
                  >
                    <div className="self-start">
                      <BookCoverSvg slug={b.slug} mode={resolvedMode} />
                    </div>

                    <div className="min-w-0 flex flex-col justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium text-[var(--md-sys-color-on-surface-variant)] truncate">
                            {b.authorZh}
                          </span>
                          <span className="text-xs tabular-nums-ui text-[var(--md-sys-color-primary)] font-medium shrink-0">
                            {b.year}
                          </span>
                        </div>

                        <h2 className="zh-display-serif text-[18px] sm:text-[19.5px] leading-snug text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors">
                          {b.titleZh}
                        </h2>

                        <p className="fr-prose italic text-[13px] text-[var(--md-sys-color-on-surface-variant)] truncate">
                          {b.titleOriginal}
                        </p>

                        <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]/90 line-clamp-2 leading-relaxed pt-1">
                          {b.subtitleZh ? `—— ${b.subtitleZh}` : firstParaSnippet}
                        </p>
                      </div>

                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between gap-2 text-[11px] text-[var(--md-sys-color-on-surface-variant)]">
                          <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
                            {b.aiModels.map((m) => (
                              <AiModelBadge key={m} model={m} className="max-w-[156px]" />
                            ))}
                            <span
                              title={`正文约 ${b.charCount.toLocaleString('en-US')} 字`}
                              className="px-2 py-0.5 rounded-full bg-[var(--md-sys-color-surface-container-high)] tabular-nums-ui shrink-0"
                            >
                              {formatWordCount(b.charCount)}
                            </span>
                          </div>

                          {hasProgress ? (
                            <span className="text-xs font-medium text-[var(--md-sys-color-primary)] tabular-nums-ui shrink-0">
                              {saved!.progress}%
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-0.5 text-xs font-medium text-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                              阅读
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>

                        {hasProgress && (
                          <div className="h-1 rounded-full bg-[var(--md-sys-color-surface-container-highest)] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[var(--md-sys-color-primary)]"
                              style={{ width: `${saved!.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* ==================== 底部栏 ==================== */}
      <footer className="mt-auto py-6 px-4 sm:px-6 lg:px-10 text-xs text-[var(--md-sys-color-on-surface-variant)]">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 border-t border-[var(--md-sys-color-outline-variant)]/45">
          <div className="flex items-center gap-2 min-w-0">
            <BrandMark className="w-5 h-5 shrink-0" />
            <span className="text-[13px] font-medium text-[var(--md-sys-color-on-surface)] tracking-[-0.01em] shrink-0">
              Even Better Reads
            </span>
            <span
              className="hidden sm:inline-block h-3 w-px bg-[var(--md-sys-color-outline-variant)]"
              aria-hidden="true"
            />
            <span className="truncate">大语言模型据外文原典译注</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap shrink-0">
            <a
              href="/ebooks/EvenBetterReads-EPUB.zip"
              download="EvenBetterReads-EPUB.zip"
              className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
              <span>全集 EPUB</span>
            </a>
            <a
              href="/ebooks/EvenBetterReads-AZW3.zip"
              download="EvenBetterReads-AZW3.zip"
              className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)] shrink-0" />
              <span>全集 AZW3</span>
            </a>
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0/deed.zh-hans"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-3.5 h-3.5 shrink-0"
              >
                <circle cx="12" cy="12" r="9.5" />
                <rect x="9" y="7.5" width="6" height="9" rx="3" />
              </svg>
              <span>CC0 1.0</span>
            </a>
            <a
              href="https://github.com/NihilDigit/EvenBetterReads"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-medium bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-3.5 h-3.5 shrink-0"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
