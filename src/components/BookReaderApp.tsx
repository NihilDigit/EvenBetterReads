import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  PanelRight,
  Search,
  Download,
  X,
  LocateFixed,
  Sparkles,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  BookOpen
} from 'lucide-react';
import type { BookMeta, BookSection, BookChapter, ParagraphBlock } from '../types/book';
import {
  renderZhParagraph,
  renderGlossContent,
  type GlossIndexMap
} from '../utils/parseRichText';
import { FourColorSwatch, M3AppearanceControls } from './M3PaletteControls';
import {
  M3_PALETTE_PRESETS,
  type ColorMode,
  type PaletteId
} from '../styles/m3e-palettes';
import {
  loadPalettePreference,
  loadColorModePreference,
  applyAppearanceToDom,
  savePalettePreference,
  saveColorModePreference,
  loadProgressStore,
  updateBookProgress,
  clearBookProgress,
  SCALE_STORAGE_KEY
} from '../utils/readingProgress';

type FontScale = 'sm' | 'md' | 'lg' | 'xl';
type NoteFilter = 'all' | 'gloss' | 'authorNote';

interface BookReaderAppProps {
  book: BookMeta;
}

export interface AnnotationCardItem {
  kind: 'gloss' | 'authorNote';
  id: string;
  numLabel: string;
  anchor?: string;
  authorLabel?: string;
  content: string;
  renderedContent: React.ReactNode[];
  sectionId: string;
  sectionLabel: string;
  aiModel: string;
}

interface FlatSectionEntry {
  chapterIndex: number;
  chapter: BookChapter;
  isFirstInChapter: boolean;
  globalIndex: number;
  section: BookSection;
  resolvedAiModel: string;
}

interface SectionMetric {
  id: string;
  title: string;
  top: number;
}

interface TriggerMetric {
  id: string;
  top: number;
  bottom: number;
  checkpointY: number;
  cardTop: number;
  cardBottom: number;
}

interface BlockMetric {
  id: string;
  bottom: number;
}

interface SearchIndexItem {
  kind: 'prose' | 'gloss' | 'authorNote';
  targetId: string;
  title: string;
  text: string;
  lower: string;
}

function formatRomanLabel(roman: string): string {
  if (roman === 'Vorrede') return '序言';
  if (roman === 'Appendice') return '附录';
  return roman;
}

function stripMarkupForSearch(raw: string): string {
  return raw
    .replace(/\[([^\]]+)\]\{#[a-zA-Z0-9_-]+\}/g, '$1')
    .replace(/\[\^[a-zA-Z0-9_-]+\]/g, '')
    .replace(/\*\*/g, '');
}

/** 二分查找最后一个满足 top <= threshold 的索引 */
function findLastLe<T>(arr: T[], threshold: number, getVal: (item: T) => number): number {
  let lo = 0;
  let hi = arr.length - 1;
  let ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    if (getVal(arr[mid]) <= threshold) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans;
}

/** 二分查找第一个满足 val > threshold 的索引 */
function findFirstGt<T>(arr: T[], threshold: number, getVal: (item: T) => number): number {
  let lo = 0;
  let hi = arr.length - 1;
  let ans = arr.length;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    if (getVal(arr[mid]) > threshold) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans;
}

interface BookProseStreamProps {
  flatSections: FlatSectionEntry[];
  glossIndexMap: GlossIndexMap;
  footnoteMap: Record<string, number>;
  authorNoteLabel: string;
  fontSizeClass: string;
  onSelectGloss: (noteId: string) => void;
}

/**
 * 独立记忆化的正文流组件：
 * 滚动进度、注疏高亮（通过 data-active 属性直改 DOM）、弹窗开关均不触发全书正文重渲染。
 */
const BookProseStream = React.memo(function BookProseStream({
  flatSections,
  glossIndexMap,
  footnoteMap,
  authorNoteLabel,
  fontSizeClass,
  onSelectGloss
}: BookProseStreamProps) {
  return (
    <div className="space-y-20">
      {flatSections.map((entry) => {
        const { chapter, isFirstInChapter, section, resolvedAiModel } = entry;

        return (
          <article
            key={section.id}
            id={`section-${section.id}`}
            data-reader-section={section.id}
            className="space-y-8 scroll-mt-20 reader-contain"
          >
            {isFirstInChapter && (chapter.dedication || chapter.epigraph) && (
              <div className="rounded-[24px] bg-[var(--md-sys-color-surface-container-low)] p-6 sm:p-8 space-y-6">
                {chapter.dedication && (
                  <div className="space-y-4">
                    <div className={chapter.dedication.noteZh ? '' : 'text-center py-1'}>
                      <p className="zh-emphasis text-lg sm:text-xl text-[var(--md-sys-color-on-surface)]">
                        {chapter.dedication.toZh}
                      </p>
                      {chapter.dedication.toOriginal && (
                        <p className="fr-prose italic text-sm text-[var(--md-sys-color-on-surface-variant)] mt-0.5">
                          {chapter.dedication.toOriginal}
                        </p>
                      )}
                    </div>

                    {chapter.dedication.noteZh && (
                      <div>
                        {renderZhParagraph(chapter.dedication.noteZh, {
                          glossIndexMap,
                          onSelectGloss,
                          authorNoteLabel,
                          fontSizeClass
                        })}
                        {chapter.dedication.signatureZh && (
                          <p className="zh-emphasis text-base mt-4 text-right text-[var(--md-sys-color-on-surface-variant)]">
                            {chapter.dedication.signatureZh}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {chapter.epigraph && (
                  <blockquote
                    className={`${
                      chapter.dedication
                        ? 'pt-6 border-t border-[var(--md-sys-color-outline-variant)]/45'
                        : ''
                    } text-center px-2 sm:px-6 space-y-2.5`}
                  >
                    <p className="zh-emphasis text-[17px] sm:text-[19px] leading-relaxed">
                      「{chapter.epigraph.quoteZh}」
                    </p>
                    <footer className="text-xs sm:text-[13px] text-[var(--md-sys-color-on-surface-variant)]">
                      —— {chapter.epigraph.authorZh} {chapter.epigraph.sourceZh}
                    </footer>
                  </blockquote>
                )}
              </div>
            )}

            <header className="space-y-1.5 pt-2 pb-4 border-b border-[var(--md-sys-color-outline-variant)]/50">
              <div className="flex items-center justify-between gap-2">
                <span className="fr-prose text-sm font-semibold tracking-wide text-[var(--md-sys-color-primary)]">
                  {formatRomanLabel(section.roman)}
                </span>
                <span
                  title={`本节译注模型：${resolvedAiModel}`}
                  className="inline-flex items-center gap-1 text-[11px] text-[var(--md-sys-color-on-surface-variant)]/85"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[var(--md-sys-color-primary)]" />
                  <span>{resolvedAiModel}</span>
                </span>
              </div>
              <h2 className="zh-display-serif text-2xl sm:text-[26px] leading-snug text-[var(--md-sys-color-on-surface)]">
                {section.titleZh}
              </h2>
              <p className="fr-prose italic text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)]">
                {section.titleOriginal}
              </p>
            </header>

            {section.epigraph && (
              <blockquote className="rounded-[20px] bg-[var(--md-sys-color-surface-container-low)] py-5 px-6 text-center space-y-2">
                <p className="zh-emphasis text-base sm:text-[17.5px] leading-relaxed">
                  「{section.epigraph.quoteZh}」
                </p>
                <footer className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  —— {section.epigraph.authorZh} {section.epigraph.sourceZh}
                </footer>
              </blockquote>
            )}

            <div className="space-y-4">
              {section.blocks.map((blk: ParagraphBlock) => {
                if (blk.type === 'divider') {
                  return (
                    <div
                      key={blk.id}
                      className="py-5 flex items-center justify-center gap-3 select-none text-[var(--md-sys-color-outline)]"
                      aria-hidden="true"
                    >
                      <span className="w-10 h-[1px] bg-[var(--md-sys-color-outline-variant)]" />
                      <span className="fr-prose text-sm text-[var(--md-sys-color-primary)]">
                        ✦
                      </span>
                      <span className="w-10 h-[1px] bg-[var(--md-sys-color-outline-variant)]" />
                    </div>
                  );
                }

                return (
                  <div key={blk.id} id={blk.id} data-reading-block={blk.id}>
                    {renderZhParagraph(blk.zh, {
                      glossIndexMap,
                      onSelectGloss,
                      footnoteMap,
                      authorNoteLabel,
                      fontSizeClass,
                      isVerse: blk.type === 'verse'
                    })}
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
});

interface AnnotationCardProps {
  item: AnnotationCardItem;
  isSelected: boolean;
  isSyncedLead: boolean;
  isInViewport: boolean;
  hasCustomNoteModel: boolean;
  onToggleSelect: (id: string) => void;
  onLocate: (id: string) => void;
  registerRef: (id: string, el: HTMLElement | null) => void;
}

const AnnotationCard = React.memo(function AnnotationCard({
  item,
  isSelected,
  isSyncedLead,
  isInViewport,
  hasCustomNoteModel,
  onToggleSelect,
  onLocate,
  registerRef
}: AnnotationCardProps) {
  return (
    <article
      ref={(el) => registerRef(item.id, el)}
      onClick={() => {
        const sel = window.getSelection();
        if (sel && !sel.isCollapsed && sel.toString().trim().length > 0) return;
        onToggleSelect(item.id);
      }}
      className={`reader-contain rounded-[20px] p-4 transition-colors duration-200 cursor-pointer ${
        isSelected
          ? 'bg-[var(--md-sys-color-secondary-container)] ring-1.5 ring-[var(--md-sys-color-primary)] shadow-xs'
          : isSyncedLead
            ? 'bg-[var(--md-sys-color-secondary-container)]/65 ring-1 ring-[var(--md-sys-color-primary)]/45'
            : isInViewport
              ? 'bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)]'
              : 'bg-[var(--md-sys-color-surface-container-lowest)]/75 hover:bg-[var(--md-sys-color-surface-container)]'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        {item.kind === 'authorNote' ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] tabular-nums-ui">
            {item.authorLabel} {item.numLabel}
          </span>
        ) : (
          <div className="flex items-baseline gap-2 min-w-0">
            <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-[11px] font-semibold tabular-nums-ui bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] shrink-0">
              {item.numLabel}
            </span>
            <span className="zh-emphasis text-[14px] leading-snug text-[var(--md-sys-color-on-surface)]">
              {item.anchor}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onLocate(item.id);
          }}
          title="定位原文"
          aria-label="定位原文"
          className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-highest)] hover:text-[var(--md-sys-color-primary)] transition-colors shrink-0 cursor-pointer"
        >
          <LocateFixed className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="gloss-prose text-[13.5px] leading-relaxed cursor-text">
        {item.renderedContent}
      </p>

      {hasCustomNoteModel && (
        <div className="mt-2 pt-1.5 border-t border-[var(--md-sys-color-outline-variant)]/35 flex items-center gap-1 text-[10.5px] text-[var(--md-sys-color-on-surface-variant)]">
          <Sparkles className="w-2.5 h-2.5 text-[var(--md-sys-color-primary)]" />
          <span>{item.aiModel}</span>
        </div>
      )}
    </article>
  );
});

interface MobilePlainNoteSheetProps {
  note: AnnotationCardItem;
  defaultBookModel: string;
  onClose: () => void;
}

/**
 * 窄屏 M3E Plain ModalBottomSheet (< 960px)：
 * 纯粹承载释文，不重复引文、不展示编号与全书注疏入口，支持下滑手势关闭。
 */
function MobilePlainNoteSheet({ note, defaultBookModel, onClose }: MobilePlainNoteSheetProps) {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const dragStartYRef = useRef<number | null>(null);
  const dragDeltaRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const body = bodyRef.current;
    if (body && body.scrollTop > 0) return;
    dragStartYRef.current = e.touches[0]?.clientY ?? null;
    dragDeltaRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (dragStartYRef.current === null || !sheetRef.current) return;
    const dy = (e.touches[0]?.clientY ?? dragStartYRef.current) - dragStartYRef.current;
    if (dy > 0) {
      dragDeltaRef.current = dy;
      sheetRef.current.style.transition = 'none';
      sheetRef.current.style.transform = `translateY(${dy}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (dragStartYRef.current === null || !sheetRef.current) return;
    const dy = dragDeltaRef.current;
    dragStartYRef.current = null;
    dragDeltaRef.current = 0;
    if (dy > 64) {
      onClose();
    } else {
      sheetRef.current.style.transition = 'transform 220ms var(--md-sys-motion-spring-spatial)';
      sheetRef.current.style.transform = 'translateY(0)';
    }
  };

  const hasCustomModel = note.aiModel !== defaultBookModel;

  return (
    <div
      className="min-[960px]:hidden fixed inset-0 z-50 bg-[var(--md-sys-color-scrim)] flex flex-col justify-end"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={note.kind === 'authorNote' ? (note.authorLabel ?? '原注') : '伴读旁注'}
    >
      <div
        ref={sheetRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="anim-m3e-sheet w-full max-w-[640px] mx-auto max-h-[72vh] rounded-t-[28px] bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface)] shadow-[var(--md-sys-elevation-3)] flex flex-col overflow-hidden"
      >
        <div
          className="pt-3.5 pb-2.5 flex justify-center cursor-pointer shrink-0"
          onClick={onClose}
          aria-hidden="true"
        >
          <span className="w-8 h-1 rounded-full bg-[var(--md-sys-color-outline)]/40" />
        </div>

        <div
          ref={bodyRef}
          className="px-6 pt-1 pb-[calc(1.75rem+env(safe-area-inset-bottom))] overflow-y-auto overscroll-contain"
        >
          {note.kind === 'authorNote' && note.authorLabel && (
            <p className="text-xs font-medium text-[var(--md-sys-color-on-surface-variant)] mb-2">
              {note.authorLabel}
            </p>
          )}
          <p className="gloss-prose text-[15px] leading-[1.85] text-[var(--md-sys-color-on-surface)]">
            {note.renderedContent}
          </p>
          {hasCustomModel && (
            <p className="mt-3 text-[11px] text-[var(--md-sys-color-on-surface-variant)]">
              {note.aiModel}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookReaderApp({ book }: BookReaderAppProps) {
  const defaultBookModel = book.aiModel ?? 'Gemini-4-Carbon';
  const introAiModel = book.descriptionAiModel ?? defaultBookModel;

  // 展平全书各部分并解析每节专属 AI 译注模型署名
  const flatSections = useMemo<FlatSectionEntry[]>(() => {
    const list: FlatSectionEntry[] = [];
    let gIdx = 0;
    book.chapters.forEach((ch, cIdx) => {
      ch.sections.forEach((sec, sIdx) => {
        const resolvedAiModel = sec.aiModel ?? ch.aiModel ?? defaultBookModel;
        list.push({
          chapterIndex: cIdx,
          chapter: ch,
          isFirstInChapter: sIdx === 0,
          globalIndex: gIdx++,
          section: sec,
          resolvedAiModel
        });
      });
    });
    return list;
  }, [book, defaultBookModel]);

  // 汇总本书涉及的所有 AI 译注模型（去重保序）
  const bookAllModels = useMemo(() => {
    const set = new Set<string>();
    set.add(introAiModel);
    for (const entry of flatSections) {
      set.add(entry.resolvedAiModel);
      for (const blk of entry.section.blocks) {
        if (blk.aiModel) set.add(blk.aiModel);
        for (const g of blk.glosses ?? []) {
          if (g.aiModel) set.add(g.aiModel);
        }
      }
    }
    return Array.from(set);
  }, [flatSections, introAiModel]);

  // 全书统一编号映射与注疏列表（预解析释文 ReactNode，避免后续重渲染重复正则切分）
  const { glossIndexMap, footnoteMap, allAnnotations, annotationById } = useMemo(() => {
    const gMap: GlossIndexMap = {};
    const fnMap: Record<string, number> = {};
    const notes: AnnotationCardItem[] = [];
    const byId = new Map<string, AnnotationCardItem>();
    let gCounter = 1;
    let fnCounter = 1;

    for (const entry of flatSections) {
      const { chapter, isFirstInChapter, section, resolvedAiModel } = entry;
      const secLabel = `${formatRomanLabel(section.roman)} ${section.titleZh}`;

      if (isFirstInChapter && chapter.dedication?.glosses) {
        for (const g of chapter.dedication.glosses) {
          const idx = gCounter++;
          const formatted = String(idx).padStart(2, '0');
          gMap[g.id] = { index: idx, formattedIndex: formatted };
          const item: AnnotationCardItem = {
            kind: 'gloss',
            id: g.id,
            numLabel: String(idx),
            anchor: g.anchor,
            content: g.content,
            renderedContent: renderGlossContent(g.content),
            sectionId: section.id,
            sectionLabel: '卷首献辞',
            aiModel: g.aiModel ?? chapter.aiModel ?? defaultBookModel
          };
          notes.push(item);
          byId.set(item.id, item);
        }
      }

      for (const blk of section.blocks) {
        if (blk.type === 'divider') continue;
        const blockModel = blk.aiModel ?? resolvedAiModel;
        const localEntries: { pos: number; item: AnnotationCardItem }[] = [];

        if (blk.glosses) {
          for (const g of blk.glosses) {
            const idx = gCounter++;
            const formatted = String(idx).padStart(2, '0');
            gMap[g.id] = { index: idx, formattedIndex: formatted };
            const pos = blk.zh.indexOf(`{#${g.id}}`);
            localEntries.push({
              pos: pos >= 0 ? pos : 99999,
              item: {
                kind: 'gloss',
                id: g.id,
                numLabel: String(idx),
                anchor: g.anchor,
                content: g.content,
                renderedContent: renderGlossContent(g.content),
                sectionId: section.id,
                sectionLabel: secLabel,
                aiModel: g.aiModel ?? blockModel
              }
            });
          }
        }

        if (blk.authorNotes) {
          for (const fn of blk.authorNotes) {
            const num = fnCounter++;
            fnMap[fn.id] = num;
            const pos = blk.zh.indexOf(`[^${fn.id}]`);
            localEntries.push({
              pos: pos >= 0 ? pos : 99999,
              item: {
                kind: 'authorNote',
                id: fn.id,
                numLabel: String(num),
                authorLabel: book.authorNoteLabel,
                content: fn.zh,
                renderedContent: renderGlossContent(fn.zh),
                sectionId: section.id,
                sectionLabel: secLabel,
                aiModel: blockModel
              }
            });
          }
        }

        localEntries.sort((a, b) => a.pos - b.pos);
        for (const le of localEntries) {
          notes.push(le.item);
          byId.set(le.item.id, le.item);
        }
      }
    }

    return {
      glossIndexMap: gMap,
      footnoteMap: fnMap,
      allAnnotations: notes,
      annotationById: byId
    };
  }, [book.authorNoteLabel, defaultBookModel, flatSections]);

  const [palette, setPalette] = useState<PaletteId>('terracotta');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [fontScale, setFontScale] = useState<FontScale>('md');

  // 响应式断点 (>= 960px 为宽屏双栏 Supporting Pane)
  const [isDesktopLayout, setIsDesktopLayout] = useState<boolean>(false);

  const [introExpanded, setIntroExpanded] = useState<boolean>(false);
  const [introSheetOpen, setIntroSheetOpen] = useState<boolean>(false);

  const [desktopPaneOpen, setDesktopPaneOpen] = useState<boolean>(true);
  const [mobileSheetOpen, setMobileSheetOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [inBookQuery, setInBookQuery] = useState<string>('');

  // 右侧注疏面板同步滚动状态机（仅宽屏且面板展开时活跃）
  const [isAutoSync, setIsAutoSync] = useState<boolean>(true);
  const [syncedNoteId, setSyncedNoteId] = useState<string | null>(null);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [visibleNoteIds, setVisibleNoteIds] = useState<Set<string>>(() => new Set());
  const [noteFilter, setNoteFilter] = useState<NoteFilter>('all');

  const [currentSectionTitle, setCurrentSectionTitle] = useState<string>('');

  const mainRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const sidePaneScrollRef = useRef<HTMLDivElement | null>(null);
  const noteCardRefs = useRef<Record<string, HTMLElement | null>>({});
  const settingsRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const activeDomTriggerRef = useRef<HTMLElement | null>(null);

  // 缓存的文档几何坐标（避免滚动帧内全量 querySelectorAll 与 getBoundingClientRect 重排）
  const sectionMetricsRef = useRef<SectionMetric[]>([]);
  const triggerMetricsRef = useRef<TriggerMetric[]>([]);
  const blockMetricsRef = useRef<BlockMetric[]>([]);
  const docScrollableHeightRef = useRef<number>(1);
  const currentSectionTitleRef = useRef<string>('');

  const isDesktopLayoutRef = useRef<boolean>(false);
  isDesktopLayoutRef.current = isDesktopLayout;
  const desktopPaneOpenRef = useRef<boolean>(true);
  desktopPaneOpenRef.current = desktopPaneOpen;
  const isAutoSyncRef = useRef<boolean>(true);
  isAutoSyncRef.current = isAutoSync;
  const selectedNoteIdRef = useRef<string | null>(null);
  selectedNoteIdRef.current = selectedNoteId;
  const selectedAtScrollYRef = useRef<number | null>(null);
  const targetPaneScrollTopRef = useRef<number | null>(null);
  const paneAnimRafRef = useRef<number | null>(null);
  const paneClientHeightRef = useRef<number>(600);
  const syncTargetOffsetRef = useRef<number>(0);
  const syncFromLeftScrollRef = useRef<(() => void) | null>(null);

  const filteredNotes = useMemo(() => {
    if (noteFilter === 'all') return allAnnotations;
    return allAnnotations.filter((n) => n.kind === noteFilter);
  }, [allAnnotations, noteFilter]);

  const stopPaneAnimation = useCallback(() => {
    if (paneAnimRafRef.current !== null) {
      window.cancelAnimationFrame(paneAnimRafRef.current);
      paneAnimRafRef.current = null;
    }
    targetPaneScrollTopRef.current = null;
  }, []);

  const runPaneChaseLoop = useCallback(() => {
    const pane = sidePaneScrollRef.current;
    const rawTarget = targetPaneScrollTopRef.current;
    if (!pane || rawTarget === null) {
      paneAnimRafRef.current = null;
      return;
    }

    const maxScroll = Math.max(0, pane.scrollHeight - pane.clientHeight);
    const target = Math.min(maxScroll, Math.max(0, rawTarget));
    const diff = target - pane.scrollTop;

    if (Math.abs(diff) <= 0.8) {
      pane.scrollTop = target;
      targetPaneScrollTopRef.current = null;
      paneAnimRafRef.current = null;
      return;
    }

    pane.scrollTop += diff * 0.3;
    paneAnimRafRef.current = window.requestAnimationFrame(runPaneChaseLoop);
  }, []);

  const scrollPaneToOffset = useCallback(
    (targetTop: number) => {
      const pane = sidePaneScrollRef.current;
      if (!pane) return;
      targetPaneScrollTopRef.current = Math.max(0, targetTop);
      if (paneAnimRafRef.current === null) {
        paneAnimRafRef.current = window.requestAnimationFrame(runPaneChaseLoop);
      }
    },
    [runPaneChaseLoop]
  );

  const scrollNoteIntoPane = useCallback(
    (noteId: string) => {
      const pane = sidePaneScrollRef.current;
      const topCard = noteCardRefs.current[noteId];
      if (!pane || !topCard) return;
      scrollPaneToOffset(Math.max(0, topCard.offsetTop - 12));
    },
    [scrollPaneToOffset]
  );

  const registerNoteCardRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) {
      noteCardRefs.current[id] = el;
    } else {
      delete noteCardRefs.current[id];
    }
  }, []);

  // 批量测量并缓存正文小节、段落与注疏触发器坐标
  const measureLayout = useCallback(() => {
    const main = mainRef.current;
    if (!main) return;
    const scrollY = window.scrollY;
    docScrollableHeightRef.current = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );

    const secTitleMap = new Map<string, string>();
    for (const entry of flatSections) {
      secTitleMap.set(
        entry.section.id,
        `${formatRomanLabel(entry.section.roman)} ${entry.section.titleZh}`
      );
    }

    const sections: SectionMetric[] = [];
    main.querySelectorAll<HTMLElement>('[data-reader-section]').forEach((el) => {
      const id = el.dataset.readerSection;
      if (!id) return;
      sections.push({
        id,
        title: secTitleMap.get(id) ?? '',
        top: el.getBoundingClientRect().top + scrollY
      });
    });
    sectionMetricsRef.current = sections;

    const blocks: BlockMetric[] = [];
    main.querySelectorAll<HTMLElement>('[data-reading-block]').forEach((el) => {
      const id = el.dataset.readingBlock;
      if (!id) return;
      blocks.push({
        id,
        bottom: el.getBoundingClientRect().bottom + scrollY
      });
    });
    blockMetricsRef.current = blocks;

    if (isDesktopLayoutRef.current && desktopPaneOpenRef.current) {
      if (sidePaneScrollRef.current) {
        paneClientHeightRef.current = sidePaneScrollRef.current.clientHeight;
      }
      const triggers: TriggerMetric[] = [];
      main.querySelectorAll<HTMLElement>('[data-gloss-trigger]').forEach((el) => {
        const id = el.dataset.glossTrigger;
        if (!id) return;
        const card = noteCardRefs.current[id];
        if (!card) return;
        const r = el.getBoundingClientRect();
        const top = r.top + scrollY;
        const bottom = r.bottom + scrollY;
        triggers.push({
          id,
          top,
          bottom,
          checkpointY: top,
          cardTop: Math.max(0, card.offsetTop - 12),
          cardBottom: card.offsetTop + card.offsetHeight
        });
      });

      if (triggers.length > 0) {
        const MIN_STRIDE = 88;
        triggers[0].checkpointY = triggers[0].top;
        for (let i = 1; i < triggers.length; i++) {
          triggers[i].checkpointY = Math.max(
            triggers[i].top,
            triggers[i - 1].checkpointY + MIN_STRIDE
          );
        }
        const maxReachableY = docScrollableHeightRef.current + window.innerHeight * 0.92;
        if (triggers[triggers.length - 1].checkpointY > maxReachableY) {
          triggers[triggers.length - 1].checkpointY = Math.min(
            triggers[triggers.length - 1].checkpointY,
            maxReachableY
          );
          for (let i = triggers.length - 2; i >= 0; i--) {
            if (triggers[i].checkpointY > triggers[i + 1].checkpointY - 36) {
              triggers[i].checkpointY = triggers[i + 1].checkpointY - 36;
            }
          }
        }
      }
      triggerMetricsRef.current = triggers;
      syncFromLeftScrollRef.current?.();
    } else {
      triggerMetricsRef.current = [];
    }
  }, [flatSections]);

  useEffect(() => {
    return () => stopPaneAnimation();
  }, [stopPaneAnimation]);

  // 监听响应式宽度断点 (>= 960px)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 960px)');
    const update = () => {
      const desktop = mql.matches;
      setIsDesktopLayout(desktop);
      if (!desktop) {
        stopPaneAnimation();
        setSyncedNoteId(null);
        setVisibleNoteIds((prev) => (prev.size === 0 ? prev : new Set()));
      } else {
        setMobileSheetOpen(false);
      }
    };
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [stopPaneAnimation]);

  // 初始化偏好与上次阅读进度恢复
  useEffect(() => {
    const initPalette = loadPalettePreference();
    const initMode = loadColorModePreference();
    setPalette(initPalette);
    setColorMode(initMode);
    applyAppearanceToDom(initPalette, initMode);

    const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      if (loadColorModePreference() === 'system') {
        applyAppearanceToDom(loadPalettePreference(), 'system');
      }
    };
    mql?.addEventListener?.('change', onSystemChange);

    try {
      const savedScale = localStorage.getItem(SCALE_STORAGE_KEY) as FontScale | null;
      if (savedScale && ['sm', 'md', 'lg', 'xl'].includes(savedScale)) {
        setFontScale(savedScale);
      }
      const savedPane = localStorage.getItem('ebr-m3e-pane');
      if (savedPane === 'closed') {
        setDesktopPaneOpen(false);
      }
    } catch {
      // ignore
    }

    const params = new URLSearchParams(window.location.search);
    const secParam = params.get('sec');
    const saved = loadProgressStore().items[book.slug];

    if (secParam) {
      window.requestAnimationFrame(() => {
        const secEl = document.getElementById(`section-${secParam}`);
        if (secEl) {
          const y = Math.max(0, secEl.getBoundingClientRect().top + window.scrollY - 84);
          window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
        }
      });
    } else if (saved && saved.progress > 1 && saved.progress < 99) {
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${saved.progress / 100})`;
      }
      window.requestAnimationFrame(() => {
        const target =
          (saved.blockId ? document.getElementById(saved.blockId) : null) ||
          document.getElementById(`section-${saved.sectionId}`);
        if (target) {
          const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 92);
          window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
        }
      });
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setSettingsOpen(false);
        setMobileSheetOpen(false);
        setSelectedNoteId(null);
        setIntroSheetOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      mql?.removeEventListener?.('change', onSystemChange);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [book.slug]);

  useEffect(() => {
    if (searchOpen) {
      window.setTimeout(() => searchInputRef.current?.focus(), 40);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!mobileSheetOpen && !searchOpen && !introSheetOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileSheetOpen, searchOpen, introSheetOpen]);

  // 当版式、字号、导读展开状态或字体加载完成时重新测量缓存坐标
  useEffect(() => {
    let measureRaf: number | null = null;
    const scheduleMeasure = () => {
      if (measureRaf !== null) return;
      measureRaf = window.requestAnimationFrame(() => {
        measureRaf = null;
        measureLayout();
      });
    };

    scheduleMeasure();

    const ro =
      typeof ResizeObserver !== 'undefined' && mainRef.current
        ? new ResizeObserver(scheduleMeasure)
        : null;
    if (ro && mainRef.current) {
      ro.observe(mainRef.current);
    }

    window.addEventListener('resize', scheduleMeasure, { passive: true });
    document.fonts?.ready?.then(scheduleMeasure);

    return () => {
      if (measureRaf !== null) window.cancelAnimationFrame(measureRaf);
      ro?.disconnect();
      window.removeEventListener('resize', scheduleMeasure);
    };
  }, [measureLayout, fontScale, introExpanded, isDesktopLayout, desktopPaneOpen, noteFilter]);

  // 左栏滚动监听：基于缓存坐标与二分查找驱动进度条、小节感知与宽屏右侧同步焦点
  useEffect(() => {
    let rafPending = false;
    let saveTimer: number | null = null;

    const syncFromLeftScroll = () => {
      rafPending = false;
      const scrollTop = Math.max(0, window.scrollY);
      const vh = window.innerHeight;
      const docH = docScrollableHeightRef.current;
      const pct = Math.min(100, Math.max(0, (scrollTop / docH) * 100));

      // 零 React 重渲染、GPU 合成的阅读进度条更新
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${pct / 100})`;
      }

      // 宽屏点选某条注疏后继续上下滚动超过 48px，自动释放锁定恢复动态跟随
      if (
        isDesktopLayoutRef.current &&
        selectedNoteIdRef.current !== null &&
        selectedAtScrollYRef.current !== null &&
        Math.abs(scrollTop - selectedAtScrollYRef.current) > 48
      ) {
        selectedNoteIdRef.current = null;
        selectedAtScrollYRef.current = null;
        setSelectedNoteId(null);
      }

      // O(log S) 二分查找当前小节
      const sections = sectionMetricsRef.current;
      let activeSecId = flatSections[0]?.section.id ?? '';
      let activeSecTitle = flatSections[0]
        ? `${formatRomanLabel(flatSections[0].section.roman)} ${flatSections[0].section.titleZh}`
        : '';
      if (sections.length > 0) {
        const idx = findLastLe(sections, scrollTop + 160, (s) => s.top);
        const hit = idx >= 0 ? sections[idx] : sections[0];
        activeSecId = hit.id;
        activeSecTitle = hit.title;
      }
      if (activeSecTitle && activeSecTitle !== currentSectionTitleRef.current) {
        currentSectionTitleRef.current = activeSecTitle;
        setCurrentSectionTitle(activeSecTitle);
      }

      // 仅宽屏且注疏面板展开时执行注疏同步追踪；移动端绝不自动高亮注疏
      if (isDesktopLayoutRef.current && desktopPaneOpenRef.current) {
        const triggers = triggerMetricsRef.current;
        if (triggers.length > 0) {
          const viewTop = scrollTop + 72;
          const viewBottom = scrollTop + vh - 32;
          const preloadHorizon = scrollTop + vh * 0.84;

          const nextVisible = new Set<string>();
          const approxStart = Math.max(
            0,
            findLastLe(triggers, viewTop - 120, (t) => t.top) - 1
          );
          for (let i = approxStart; i < triggers.length; i++) {
            const t = triggers[i];
            if (t.top > viewBottom) break;
            if (t.bottom >= viewTop) {
              nextVisible.add(t.id);
            }
          }

          setVisibleNoteIds((prev) => {
            if (prev.size === nextVisible.size && [...prev].every((x) => nextVisible.has(x))) {
              return prev;
            }
            return nextVisible;
          });

          // 以视口中上部舒适阅读线为基准；仅在滚至全书末尾半屏时平滑下探至视口底端，保证文末连注逐条走完
          let tailProgress = 0;
          if (docH > 32) {
            const tailSpan = Math.min(docH, Math.max(1, vh * 0.65));
            const tailStart = docH - tailSpan;
            if (scrollTop > tailStart) {
              tailProgress = Math.min(1, (scrollTop - tailStart) / tailSpan);
            }
          }
          const readingLineY =
            scrollTop + Math.max(104, vh * 0.28) + tailProgress * (vh * 0.66);

          const paneH = paneClientHeightRef.current;
          const k = findLastLe(triggers, readingLineY, (t) => t.checkpointY);
          let desiredPaneTop = triggers[0].cardTop;
          let nextLead: string | null = null;

          if (k < 0) {
            desiredPaneTop = triggers[0].cardTop;
            nextLead = triggers[0].top <= preloadHorizon ? triggers[0].id : null;
          } else if (k >= triggers.length - 1) {
            const last = triggers[triggers.length - 1];
            nextLead = last.id;
            desiredPaneTop = Math.max(last.cardTop, last.cardBottom - paneH + 24);
          } else {
            const curr = triggers[k];
            const next = triggers[k + 1];
            const span = Math.max(1, next.checkpointY - curr.checkpointY);
            const currEndScroll = Math.max(curr.cardTop, curr.cardBottom - paneH + 24);
            const glideWindow = Math.min(110, span * 0.62);
            const glideStart = next.checkpointY - glideWindow;

            if (readingLineY <= glideStart) {
              nextLead = curr.id;
              if (currEndScroll > curr.cardTop && glideStart > curr.checkpointY) {
                const ownU = Math.min(
                  1,
                  (readingLineY - curr.checkpointY) /
                    Math.min(200, glideStart - curr.checkpointY)
                );
                desiredPaneTop = curr.cardTop + ownU * (currEndScroll - curr.cardTop);
              } else {
                desiredPaneTop = curr.cardTop;
              }
            } else {
              const u = Math.min(1, (readingLineY - glideStart) / Math.max(1, glideWindow));
              desiredPaneTop = currEndScroll + u * (next.cardTop - currEndScroll);
              nextLead = u >= 0.55 ? next.id : curr.id;
            }
          }

          syncTargetOffsetRef.current = desiredPaneTop;
          setSyncedNoteId((prev) => (prev === nextLead ? prev : nextLead));
          if (isAutoSyncRef.current && selectedNoteIdRef.current === null) {
            scrollPaneToOffset(desiredPaneTop);
          }
        } else {
          setVisibleNoteIds((prev) => (prev.size === 0 ? prev : new Set()));
          setSyncedNoteId(null);
        }
      }

      if (saveTimer !== null) window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => {
        if (pct >= 99.2) {
          clearBookProgress(book.slug);
          return;
        }
        if (scrollTop < 60) return;

        const blocks = blockMetricsRef.current;
        let currentBlockId: string | null = null;
        if (blocks.length > 0) {
          const bIdx = findFirstGt(blocks, scrollTop + 88, (b) => b.bottom);
          if (bIdx < blocks.length) {
            currentBlockId = blocks[bIdx].id;
          }
        }

        if (activeSecId) {
          updateBookProgress({
            slug: book.slug,
            blockId: currentBlockId,
            sectionId: activeSecId,
            sectionTitle: activeSecTitle,
            progress: Math.min(99, Math.max(1, Math.round(pct))),
            updatedAt: Date.now()
          });
        }
      }, 180);
    };

    const onWindowScroll = () => {
      if (!rafPending) {
        rafPending = true;
        window.requestAnimationFrame(syncFromLeftScroll);
      }
    };

    syncFromLeftScrollRef.current = syncFromLeftScroll;
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    syncFromLeftScroll();

    return () => {
      syncFromLeftScrollRef.current = null;
      window.removeEventListener('scroll', onWindowScroll);
      if (saveTimer !== null) window.clearTimeout(saveTimer);
    };
  }, [book.slug, flatSections, scrollPaneToOffset]);

  useEffect(() => {
    if (!isDesktopLayout || !isAutoSync || !desktopPaneOpen) return;
    scrollPaneToOffset(syncTargetOffsetRef.current);
  }, [isDesktopLayout, isAutoSync, desktopPaneOpen, noteFilter, scrollPaneToOffset]);

  // 直改单个 DOM 元素的 data-active 属性实现高亮，零正文树 React 重渲染
  const activeHighlightId = isDesktopLayout
    ? selectedNoteId ?? (desktopPaneOpen && isAutoSync ? syncedNoteId : null)
    : mobileSheetOpen
      ? selectedNoteId
      : null;

  useEffect(() => {
    if (activeDomTriggerRef.current) {
      activeDomTriggerRef.current.removeAttribute('data-active');
      activeDomTriggerRef.current = null;
    }
    if (!activeHighlightId || !mainRef.current) return;
    const el = mainRef.current.querySelector<HTMLElement>(
      `[data-gloss-trigger="${activeHighlightId}"]`
    );
    if (el) {
      el.setAttribute('data-active', 'true');
      activeDomTriggerRef.current = el;
    }
  }, [activeHighlightId]);

  const pauseAutoSyncByManualAction = useCallback(() => {
    stopPaneAnimation();
    if (isAutoSyncRef.current) {
      setIsAutoSync(false);
    }
  }, [stopPaneAnimation]);

  const resumeAutoSync = useCallback(() => {
    setSelectedNoteId(null);
    setIsAutoSync(true);
    window.requestAnimationFrame(() => {
      scrollPaneToOffset(syncTargetOffsetRef.current);
    });
  }, [scrollPaneToOffset]);

  const handleSelectTrigger = useCallback(
    (noteId: string, forceOpen = false) => {
      if (!isDesktopLayoutRef.current) {
        setSelectedNoteId(noteId);
        setMobileSheetOpen(true);
        return;
      }

      setNoteFilter('all');

      if (!forceOpen && selectedNoteIdRef.current === noteId) {
        setSelectedNoteId(null);
        selectedAtScrollYRef.current = null;
        return;
      }

      setSelectedNoteId(noteId);
      selectedAtScrollYRef.current = window.scrollY;
      setDesktopPaneOpen(true);
      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          scrollNoteIntoPane(noteId);
        }, 20);
      });
    },
    [scrollNoteIntoPane]
  );

  const handleCloseMobileSheet = useCallback(() => {
    setMobileSheetOpen(false);
    setSelectedNoteId(null);
  }, []);

  const handleToggleCardSelect = useCallback((id: string) => {
    if (selectedNoteIdRef.current === id) {
      setSelectedNoteId(null);
      selectedAtScrollYRef.current = null;
    } else {
      setSelectedNoteId(id);
      selectedAtScrollYRef.current = window.scrollY;
    }
  }, []);

  const scrollProseToTrigger = useCallback((noteId: string) => {
    setSelectedNoteId(noteId);
    setMobileSheetOpen(false);
    const trigger = document.querySelector<HTMLElement>(`[data-gloss-trigger="${noteId}"]`);
    if (trigger) {
      const y = Math.max(0, trigger.getBoundingClientRect().top + window.scrollY - 120);
      selectedAtScrollYRef.current = y;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const handleOpenIntroAction = () => {
    if (typeof window !== 'undefined' && window.scrollY < 320) {
      setIntroExpanded((v) => !v);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIntroSheetOpen(true);
    }
  };

  const handleSelectPalette = (nextPalette: PaletteId) => {
    setPalette(nextPalette);
    savePalettePreference(nextPalette, colorMode);
  };

  const handleSelectColorMode = (nextMode: ColorMode) => {
    setColorMode(nextMode);
    saveColorModePreference(nextMode, palette);
  };

  const activePreset = useMemo(
    () => M3_PALETTE_PRESETS.find((p) => p.id === palette) ?? M3_PALETTE_PRESETS[0],
    [palette]
  );

  const handleScaleChange = (next: FontScale) => {
    setFontScale(next);
    try {
      localStorage.setItem(SCALE_STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const toggleDesktopSupportingPane = () => {
    setDesktopPaneOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ebr-m3e-pane', next ? 'open' : 'closed');
      } catch {
        // ignore
      }
      return next;
    });
  };

  // 惰性构建书内检索索引：仅在打开检索弹窗时首次剥离标记
  const searchIndex = useMemo<SearchIndexItem[] | null>(() => {
    if (!searchOpen) return null;
    const list: SearchIndexItem[] = [];
    for (const entry of flatSections) {
      const { section } = entry;
      const secLabel = `${formatRomanLabel(section.roman)} ${section.titleZh}`;

      for (const blk of section.blocks) {
        if (blk.type === 'divider') continue;
        const cleanZh = stripMarkupForSearch(blk.zh);
        list.push({
          kind: 'prose',
          targetId: blk.id,
          title: secLabel,
          text: cleanZh,
          lower: cleanZh.toLowerCase()
        });

        for (const g of blk.glosses ?? []) {
          const cleanG = `${g.anchor} — ${stripMarkupForSearch(g.content)}`;
          list.push({
            kind: 'gloss',
            targetId: g.id,
            title: g.anchor,
            text: cleanG,
            lower: cleanG.toLowerCase()
          });
        }

        for (const fn of blk.authorNotes ?? []) {
          const cleanFn = stripMarkupForSearch(fn.zh);
          list.push({
            kind: 'authorNote',
            targetId: fn.id,
            title: `${book.authorNoteLabel} (${secLabel})`,
            text: cleanFn,
            lower: cleanFn.toLowerCase()
          });
        }
      }
    }
    return list;
  }, [searchOpen, book.authorNoteLabel, flatSections]);

  const searchResults = useMemo(() => {
    const q = inBookQuery.trim().toLowerCase();
    if (!q || !searchIndex) return [];
    const hits: {
      kind: 'prose' | 'gloss' | 'authorNote';
      targetId: string;
      title: string;
      snippet: string;
    }[] = [];

    for (const item of searchIndex) {
      const idx = item.lower.indexOf(q);
      if (idx >= 0) {
        const padBefore = item.kind === 'prose' ? 28 : 20;
        const padAfter = item.kind === 'prose' ? 52 : 56;
        const start = Math.max(0, idx - padBefore);
        const end = Math.min(item.text.length, idx + q.length + padAfter);
        hits.push({
          kind: item.kind,
          targetId: item.targetId,
          title: item.title,
          snippet: `${start > 0 ? '…' : ''}${item.text.slice(start, end)}${end < item.text.length ? '…' : ''}`
        });
        if (hits.length >= 40) break;
      }
    }

    return hits;
  }, [searchIndex, inBookQuery]);

  const fontSizeClass =
    fontScale === 'sm'
      ? 'text-[16.5px] sm:text-[17px]'
      : fontScale === 'lg'
        ? 'text-[19.5px] sm:text-[20.5px]'
        : fontScale === 'xl'
          ? 'text-[21px] sm:text-[22.5px]'
          : 'text-[17.5px] sm:text-[18.5px]';

  const activeMobileNote = selectedNoteId ? (annotationById.get(selectedNoteId) ?? null) : null;

  const introParagraphs = useMemo(
    () => book.descriptionZh.split('\n\n').map((para) => renderGlossContent(para)),
    [book.descriptionZh]
  );

  const firstIntroSnippet = useMemo(
    () => (book.descriptionZh.split('\n\n')[0] ?? '').replace(/\*\*/g, ''),
    [book.descriptionZh]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-surface)] selection:bg-[var(--md-sys-color-primary-container)] selection:text-[var(--md-sys-color-on-primary-container)]">
      {/* ==================== M3 Expressive Top App Bar ==================== */}
      <header className="sticky top-0 z-30 bg-[color-mix(in_srgb,var(--md-sys-color-background)_90%,transparent)] backdrop-blur-md">
        <div className="max-w-[1380px] mx-auto px-3 sm:px-6 h-15 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <a
              href="/"
              title="返回书架"
              className="h-10 px-3.5 rounded-full inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
              <span>书架</span>
            </a>

            <div className="hidden sm:flex items-baseline gap-3 min-w-0 pl-1">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="zh-display-serif text-[15px] text-[var(--md-sys-color-on-surface)] hover:text-[var(--md-sys-color-primary)] transition-colors truncate cursor-pointer"
              >
                {book.titleZh}
              </button>
              {currentSectionTitle && (
                <span className="text-xs text-[var(--md-sys-color-on-surface-variant)] truncate">
                  {currentSectionTitle}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={handleOpenIntroAction}
              title="作品导读与电子书下载"
              className="h-10 px-3 sm:px-3.5 rounded-full inline-flex items-center gap-1.5 text-xs font-medium bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
              <span>导读</span>
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              title="检索本书正文与注疏 (Ctrl+K)"
              aria-label="检索本书"
              className="w-10 h-10 rounded-full inline-flex items-center justify-center bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            <div ref={settingsRef} className="relative">
              <button
                type="button"
                onClick={() => setSettingsOpen((v) => !v)}
                aria-expanded={settingsOpen}
                aria-label="色板与版式设置"
                title="色板与版式设置"
                className={`h-10 pl-2 pr-3 rounded-full inline-flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer ${
                  settingsOpen
                    ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                    : 'bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                <FourColorSwatch quadrants={activePreset.quadrants} sizeClass="w-5 h-5" />
                <span className="hidden sm:inline">版式</span>
              </button>

              {settingsOpen && (
                <div className="anim-m3e-dialog absolute right-0 mt-2 w-[288px] rounded-[24px] bg-[var(--md-sys-color-surface-container)] p-4 shadow-[var(--md-sys-elevation-3)] space-y-4 z-50">
                  <M3AppearanceControls
                    palette={palette}
                    colorMode={colorMode}
                    onSelectPalette={handleSelectPalette}
                    onSelectColorMode={handleSelectColorMode}
                  />

                  <div className="pt-2 border-t border-[var(--md-sys-color-outline-variant)]/40 space-y-2">
                    <span className="text-xs font-medium text-[var(--md-sys-color-on-surface-variant)]">
                      正文字号
                    </span>
                    <div className="grid grid-cols-4 gap-1.5 p-1 rounded-full bg-[var(--md-sys-color-surface-container-high)]">
                      {(
                        [
                          { id: 'sm', label: '紧凑' },
                          { id: 'md', label: '标准' },
                          { id: 'lg', label: '舒朗' },
                          { id: 'xl', label: '大字' }
                        ] as const
                      ).map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => handleScaleChange(s.id)}
                          className={`h-8 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                            fontScale === s.id
                              ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                              : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1 border-t border-[var(--md-sys-color-outline-variant)]/40 space-y-2">
                    <span className="text-xs font-medium text-[var(--md-sys-color-on-surface-variant)]">
                      电子书副本下载
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`/ebooks/${book.slug}.epub`}
                        download={`${book.titleZh}.epub`}
                        className="h-9 rounded-full inline-flex items-center justify-center gap-1.5 text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] hover:bg-[var(--md-sys-color-surface-container-highest)] transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>EPUB</span>
                      </a>
                      <a
                        href={`/ebooks/${book.slug}.azw3`}
                        download={`${book.titleZh}.azw3`}
                        className="h-9 rounded-full inline-flex items-center justify-center gap-1.5 text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] hover:bg-[var(--md-sys-color-surface-container-highest)] transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>AZW3</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 仅宽屏展示注疏侧栏开关；移动端点击正文词条直接以 Plain Sheet 呈现 */}
            <button
              type="button"
              onClick={toggleDesktopSupportingPane}
              title="切换注疏面板"
              aria-label="切换注疏面板"
              className={`hidden min-[960px]:inline-flex h-10 px-3.5 rounded-full items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer ${
                desktopPaneOpen
                  ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                  : 'bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]'
              }`}
            >
              <PanelRight className="w-4 h-4" />
              <span>注疏</span>
              <span className="tabular-nums-ui opacity-80">{allAnnotations.length}</span>
            </button>
          </div>
        </div>

        <div className="h-[2px] w-full bg-[var(--md-sys-color-surface-container-high)] overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-[var(--md-sys-color-primary)] origin-left will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </header>

      {/* ==================== M3E 双栏主阅读画布 ==================== */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 flex-1 flex items-start justify-center gap-8 xl:gap-10 py-6 sm:py-9">
        {/* 左栏：正文连续流 */}
        <main
          ref={mainRef}
          onClick={() => {
            if (!selectedNoteIdRef.current) return;
            const sel = window.getSelection();
            if (sel && !sel.isCollapsed && sel.toString().trim().length > 0) return;
            setSelectedNoteId(null);
            selectedAtScrollYRef.current = null;
          }}
          className="flex-1 min-w-0 max-w-[700px] mx-auto anim-m3e-enter pb-20"
        >
          <header className="mb-10 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2.5 text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  <span className="font-medium text-[var(--md-sys-color-on-surface)]">
                    {book.authorZh}
                  </span>
                  <span className="fr-prose">{book.authorOriginal}</span>
                  <span className="tabular-nums-ui text-[var(--md-sys-color-primary)] font-medium">
                    {book.year}
                  </span>
                </div>

                <span
                  title="译注模型署名"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface-variant)]"
                >
                  <Sparkles className="w-3 h-3 text-[var(--md-sys-color-primary)]" />
                  <span>{bookAllModels.join(' / ')} 译注</span>
                </span>
              </div>

              <h1 className="zh-display-serif text-3xl sm:text-[34px] leading-snug text-[var(--md-sys-color-on-surface)]">
                {book.titleZh}
              </h1>

              <p className="fr-prose italic text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)]">
                {book.titleOriginal}
                {book.subtitleZh ? (
                  <span className="not-italic text-sm ml-2 text-[var(--md-sys-color-on-surface-variant)]/85">
                    —— {book.subtitleZh}
                  </span>
                ) : null}
              </p>
            </div>

            {/* 卷首内联折叠「作品导读」 */}
            <div className="rounded-[22px] bg-[var(--md-sys-color-surface-container-low)] overflow-hidden transition-colors">
              <button
                type="button"
                onClick={() => setIntroExpanded((v) => !v)}
                aria-expanded={introExpanded}
                className="w-full px-5 py-3.5 flex items-center justify-between gap-4 text-left hover:bg-[var(--md-sys-color-surface-container)]/70 transition-colors cursor-pointer"
              >
                <div className="min-w-0 flex-1 flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] shrink-0">
                    作品导读
                  </span>
                  {!introExpanded ? (
                    <span className="text-xs text-[var(--md-sys-color-on-surface-variant)] truncate">
                      {firstIntroSnippet}
                    </span>
                  ) : (
                    <span className="text-[11px] text-[var(--md-sys-color-on-surface-variant)]">
                      {introAiModel} 撰写
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--md-sys-color-primary)] shrink-0">
                  <span>{introExpanded ? '收起' : '展开'}</span>
                  {introExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              {introExpanded && (
                <div className="px-5 sm:px-6 pb-5 pt-2 space-y-3.5 border-t border-[var(--md-sys-color-outline-variant)]/35">
                  {introParagraphs.map((nodes, idx) => (
                    <p
                      key={idx}
                      className="zh-prose zh-indent text-[15px] sm:text-[15.5px] leading-relaxed"
                    >
                      {nodes}
                    </p>
                  ))}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span>{book.publisher}</span>
                      <span>{book.collection}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`/ebooks/${book.slug}.epub`}
                        download={`${book.titleZh}.epub`}
                        className="px-3 py-1 rounded-full bg-[var(--md-sys-color-surface-container-high)] hover:bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)] inline-flex items-center gap-1 transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        EPUB
                      </a>
                      <a
                        href={`/ebooks/${book.slug}.azw3`}
                        download={`${book.titleZh}.azw3`}
                        className="px-3 py-1 rounded-full bg-[var(--md-sys-color-surface-container-high)] hover:bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)] inline-flex items-center gap-1 transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        AZW3
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* 全书正文章节流（独立记忆化） */}
          <BookProseStream
            flatSections={flatSections}
            glossIndexMap={glossIndexMap}
            footnoteMap={footnoteMap}
            authorNoteLabel={book.authorNoteLabel}
            fontSizeClass={fontSizeClass}
            onSelectGloss={handleSelectTrigger}
          />

          <footer className="mt-20 pt-8 border-t border-[var(--md-sys-color-outline-variant)]/50 space-y-6">
            <div className="rounded-[24px] bg-[var(--md-sys-color-surface-container-low)] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="fr-prose italic text-sm text-[var(--md-sys-color-primary)]">
                  {book.titleOriginal}
                </p>
                <p className="text-sm font-medium">《{book.titleZh}》全文完</p>
                <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  译注模型：{bookAllModels.join('、')}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="h-10 px-4 rounded-full text-xs font-medium bg-[var(--md-sys-color-surface-container-high)] hover:bg-[var(--md-sys-color-surface-container-highest)] transition-colors cursor-pointer"
                >
                  返回顶部
                </button>
                <a
                  href="/"
                  className="h-10 px-5 rounded-full inline-flex items-center gap-1.5 text-xs font-medium bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:brightness-105 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>返回书架</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--md-sys-color-on-surface-variant)] px-1">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  className="w-4.5 h-4.5 shrink-0"
                >
                  <rect
                    x="2"
                    y="2"
                    width="60"
                    height="60"
                    rx="18"
                    fill="var(--md-sys-color-primary)"
                  />
                  <rect
                    x="12"
                    y="13"
                    width="21"
                    height="38"
                    rx="7"
                    fill="var(--md-sys-color-on-primary)"
                  />
                  <rect
                    x="37"
                    y="13"
                    width="15"
                    height="17"
                    rx="6.5"
                    fill="var(--md-sys-color-tertiary-container)"
                  />
                  <rect
                    x="37"
                    y="34"
                    width="15"
                    height="17"
                    rx="6.5"
                    fill="var(--md-sys-color-secondary-container)"
                  />
                </svg>
                <span className="fr-prose text-[13px] text-[var(--md-sys-color-on-surface)] tracking-[-0.01em] shrink-0">
                  <span className="italic text-[var(--md-sys-color-primary)] pr-[1px]">Even</span>
                  <span className="font-semibold">Better</span>
                  <span>Reads</span>
                </span>
                <span
                  className="hidden sm:inline-block h-3 w-px bg-[var(--md-sys-color-outline-variant)]"
                  aria-hidden="true"
                />
                <span className="truncate">基于外文底本由大语言模型译注</span>
              </div>
              <div className="flex items-center gap-2">
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
        </main>

        {/* 右栏：M3E 连续阻尼同步滚动注疏面板（仅宽屏 >= 960px 挂载，移动端零 DOM 开销） */}
        {isDesktopLayout && desktopPaneOpen && (
          <aside
            aria-label="伴读注疏面板"
            className="flex sticky top-[84px] w-[348px] xl:w-[384px] h-[calc(100vh-104px)] shrink-0 rounded-[28px] bg-[var(--md-sys-color-surface-container-low)] flex-col overflow-hidden relative"
          >
            <div className="px-4 pt-4 pb-3 bg-[var(--md-sys-color-surface-container)]/65 flex flex-col gap-2.5 shrink-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <h2 className="text-sm font-semibold text-[var(--md-sys-color-on-surface)] shrink-0">
                    伴读注疏
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium tabular-nums-ui bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] shrink-0">
                    {filteredNotes.length}
                  </span>

                  {isAutoSync ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] text-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary-container)]/50 truncate">
                      同步滚动
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={resumeAutoSync}
                      title="恢复与正文的同步滚动"
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:brightness-105 transition-all cursor-pointer truncate"
                    >
                      <RefreshCw className="w-3 h-3 shrink-0" />
                      <span>恢复同步</span>
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={toggleDesktopSupportingPane}
                  title="收起注疏面板"
                  aria-label="收起注疏面板"
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-on-surface)] cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                {(
                  [
                    { id: 'all', label: '全部' },
                    { id: 'gloss', label: '伴读旁注' },
                    { id: 'authorNote', label: book.authorNoteLabel }
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setNoteFilter(tab.id)}
                    className={`h-7 px-3 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      noteFilter === tab.id
                        ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                        : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 独立纵向滚动容器：仅真实用户输入事件（滚轮/触控/拖拽滚动条/按键）触发脱离同步 */}
            <div
              ref={sidePaneScrollRef}
              onWheel={pauseAutoSyncByManualAction}
              onTouchMove={pauseAutoSyncByManualAction}
              onPointerDown={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                if (e.clientX >= rect.right - 18) {
                  pauseAutoSyncByManualAction();
                }
              }}
              onKeyDown={(e) => {
                if (
                  ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(
                    e.key
                  )
                ) {
                  pauseAutoSyncByManualAction();
                }
              }}
              className="relative flex-1 overflow-y-auto overscroll-contain p-3 pb-16 space-y-2.5"
            >
              {filteredNotes.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center p-6 text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  暂无此类注疏
                </div>
              ) : (
                filteredNotes.map((item) => (
                  <AnnotationCard
                    key={item.id}
                    item={item}
                    isSelected={selectedNoteId === item.id}
                    isSyncedLead={isAutoSync && !selectedNoteId && syncedNoteId === item.id}
                    isInViewport={visibleNoteIds.has(item.id)}
                    hasCustomNoteModel={item.aiModel !== defaultBookModel}
                    onToggleSelect={handleToggleCardSelect}
                    onLocate={scrollProseToTrigger}
                    registerRef={registerNoteCardRef}
                  />
                ))
              )}
            </div>

            {!isAutoSync && (
              <div className="absolute bottom-3.5 left-0 right-0 flex justify-center pointer-events-none px-4">
                <button
                  type="button"
                  onClick={resumeAutoSync}
                  className="anim-m3e-enter pointer-events-auto h-9 px-4 rounded-full inline-flex items-center gap-1.5 text-xs font-medium bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-[var(--md-sys-elevation-2)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>恢复同步滚动</span>
                </button>
              </div>
            )}
          </aside>
        )}
      </div>

      {/* ==================== 作品导读弹窗 ==================== */}
      {introSheetOpen && (
        <div
          className="fixed inset-0 z-50 bg-[var(--md-sys-color-scrim)] flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={() => setIntroSheetOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="作品导读"
        >
          <div
            className="anim-m3e-dialog w-full max-w-[660px] max-h-[84vh] rounded-t-[28px] sm:rounded-[28px] bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface)] shadow-[var(--md-sys-elevation-3)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-[var(--md-sys-color-surface-container)] flex items-center justify-between gap-3">
              <div>
                <h2 className="zh-display-serif text-lg">《{book.titleZh}》导读</h2>
                <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  {introAiModel} 撰写
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIntroSheetOpen(false)}
                aria-label="关闭导读"
                className="w-8 h-8 rounded-full inline-flex items-center justify-center bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              {introParagraphs.map((nodes, idx) => (
                <p key={idx} className="zh-prose zh-indent text-[15.5px] leading-relaxed">
                  {nodes}
                </p>
              ))}
            </div>

            <div className="px-6 py-3.5 bg-[var(--md-sys-color-surface-container)] flex items-center justify-between gap-3 text-xs">
              <span className="text-[var(--md-sys-color-on-surface-variant)] truncate">
                {book.publisher} ({book.year})
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/ebooks/${book.slug}.epub`}
                  download={`${book.titleZh}.epub`}
                  className="h-9 px-3.5 rounded-full inline-flex items-center gap-1.5 font-medium bg-[var(--md-sys-color-surface-container-highest)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  EPUB
                </a>
                <a
                  href={`/ebooks/${book.slug}.azw3`}
                  download={`${book.titleZh}.azw3`}
                  className="h-9 px-3.5 rounded-full inline-flex items-center gap-1.5 font-medium bg-[var(--md-sys-color-surface-container-highest)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  AZW3
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 窄屏 Plain ModalBottomSheet (< 960px) ==================== */}
      {!isDesktopLayout && mobileSheetOpen && activeMobileNote && (
        <MobilePlainNoteSheet
          note={activeMobileNote}
          defaultBookModel={defaultBookModel}
          onClose={handleCloseMobileSheet}
        />
      )}

      {/* ==================== 书内全文与注疏检索弹窗 ==================== */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-[var(--md-sys-color-scrim)] flex items-start justify-center p-4 sm:pt-16"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="检索本书"
        >
          <div
            className="anim-m3e-dialog w-full max-w-[600px] max-h-[78vh] rounded-[28px] bg-[var(--md-sys-color-surface-container-low)] shadow-[var(--md-sys-elevation-3)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-[var(--md-sys-color-surface-container)] flex items-center gap-3">
              <Search className="w-4 h-4 text-[var(--md-sys-color-primary)] shrink-0" />
              <input
                ref={searchInputRef}
                type="search"
                value={inBookQuery}
                onChange={(e) => setInBookQuery(e.target.value)}
                placeholder={`在《${book.titleZh}》全文与注疏中检索…`}
                className="flex-1 bg-transparent text-sm text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)]/75 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="关闭检索"
                className="w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 overflow-y-auto space-y-1.5">
              {!inBookQuery.trim() ? (
                <p className="py-10 text-center text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  输入关键词、人名或术语，即时检索本书全部译文与考据旁注
                </p>
              ) : searchResults.length === 0 ? (
                <p className="py-10 text-center text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  本书中未找到「{inBookQuery}」
                </p>
              ) : (
                searchResults.map((hit, idx) => (
                  <button
                    key={`${hit.targetId}-${idx}`}
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      if (hit.kind === 'prose') {
                        const el = document.getElementById(hit.targetId);
                        if (el) {
                          const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 96);
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      } else {
                        scrollProseToTrigger(hit.targetId);
                        window.setTimeout(() => handleSelectTrigger(hit.targetId, true), 150);
                      }
                    }}
                    className="w-full p-3.5 rounded-[16px] hover:bg-[var(--md-sys-color-surface-container-high)] text-left space-y-1 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[var(--md-sys-color-primary)] truncate">
                        {hit.title}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] shrink-0">
                        {hit.kind === 'prose' ? '正文' : hit.kind === 'gloss' ? '旁注' : '原注'}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] line-clamp-2 leading-relaxed">
                      {hit.snippet}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
