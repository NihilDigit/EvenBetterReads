import {
  M3_PALETTE_PRESETS,
  type ColorMode,
  type PaletteId,
  type ResolvedColorMode
} from '../styles/m3e-palettes';

export interface ReadingProgressItem {
  slug: string;
  blockId: string | null;
  sectionId: string;
  sectionTitle: string;
  progress: number;
  updatedAt: number;
}

export interface ReadingProgressStore {
  lastSlug: string | null;
  items: Record<string, ReadingProgressItem>;
}

export const PROGRESS_STORAGE_KEY = 'ebr-reading-progress-v1';
export const PALETTE_STORAGE_KEY = 'ebr-palette';
export const COLOR_MODE_STORAGE_KEY = 'ebr-color-mode';
export const LEGACY_THEME_STORAGE_KEY = 'ebr-theme';
export const SCALE_STORAGE_KEY = 'ebr-scale';

const VALID_PALETTES = new Set<string>(M3_PALETTE_PRESETS.map((p) => p.id));

export function loadPalettePreference(): PaletteId {
  if (typeof window === 'undefined') return 'terracotta';
  try {
    const saved = window.localStorage.getItem(PALETTE_STORAGE_KEY);
    if (saved && VALID_PALETTES.has(saved)) {
      return saved as PaletteId;
    }
    const legacy = window.localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
    if (legacy === 'warm' || legacy === 'parchment') {
      return 'amber';
    }
    return 'terracotta';
  } catch {
    return 'terracotta';
  }
}

export function loadColorModePreference(): ColorMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem(COLOR_MODE_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
    const legacy = window.localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
    if (legacy === 'dark' || legacy === 'obsidian') {
      return 'dark';
    }
    return 'light';
  } catch {
    return 'light';
  }
}

export function resolveColorMode(mode: ColorMode): ResolvedColorMode {
  if (mode === 'dark') return 'dark';
  if (mode === 'light') return 'light';
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function applyAppearanceToDom(palette: PaletteId, mode: ColorMode): ResolvedColorMode {
  const resolved = resolveColorMode(mode);
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-palette', palette);
    document.documentElement.setAttribute('data-theme', resolved);
  }
  return resolved;
}

export function savePalettePreference(palette: PaletteId, currentMode: ColorMode): ResolvedColorMode {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    } catch {
      // ignore
    }
  }
  return applyAppearanceToDom(palette, currentMode);
}

export function saveColorModePreference(mode: ColorMode, currentPalette: PaletteId): ResolvedColorMode {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }
  return applyAppearanceToDom(currentPalette, mode);
}

export function loadProgressStore(): ReadingProgressStore {
  if (typeof window === 'undefined') return { lastSlug: null, items: {} };
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
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

export function saveProgressStore(store: ReadingProgressStore) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // ignore storage errors
  }
}

export function updateBookProgress(item: ReadingProgressItem): ReadingProgressStore {
  const store = loadProgressStore();
  store.lastSlug = item.slug;
  store.items[item.slug] = {
    ...item,
    progress: Math.min(100, Math.max(1, Math.round(item.progress))),
    updatedAt: Date.now()
  };
  saveProgressStore(store);
  return store;
}

export function clearBookProgress(slug: string): ReadingProgressStore {
  const store = loadProgressStore();
  delete store.items[slug];
  if (store.lastSlug === slug) {
    const remaining = Object.values(store.items).sort((a, b) => b.updatedAt - a.updatedAt);
    store.lastSlug = remaining[0]?.slug ?? null;
  }
  saveProgressStore(store);
  return store;
}
