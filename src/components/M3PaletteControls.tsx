import React from 'react';
import { Check, Sun, Moon, Monitor } from 'lucide-react';
import {
  M3_PALETTE_PRESETS,
  type ColorMode,
  type PaletteId
} from '../styles/m3e-palettes';

/**
 * 标准 Material Design 3 四色圆圈色板组件：
 * 圆形内四等分象限展示该主题色板的四个特征 HCT 色阶，选中时外圈高亮并居中显示对勾。
 */
export function FourColorSwatch({
  quadrants,
  sizeClass = 'w-9 h-9',
  selected = false
}: {
  quadrants: [string, string, string, string];
  sizeClass?: string;
  selected?: boolean;
}) {
  return (
    <span
      className={`relative inline-grid grid-cols-2 grid-rows-2 gap-[1.5px] rounded-full overflow-hidden bg-[var(--md-sys-color-surface-container)] transition-transform duration-200 shrink-0 ${sizeClass} ${
        selected
          ? 'ring-2 ring-[var(--md-sys-color-primary)] ring-offset-2 ring-offset-[var(--md-sys-color-surface-container)]'
          : 'group-hover/swatch:scale-105'
      }`}
    >
      <span style={{ backgroundColor: quadrants[0] }} />
      <span style={{ backgroundColor: quadrants[1] }} />
      <span style={{ backgroundColor: quadrants[2] }} />
      <span style={{ backgroundColor: quadrants[3] }} />
      {selected && (
        <span className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center shadow-xs">
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </span>
      )}
    </span>
  );
}

interface M3PaletteSectionProps {
  palette: PaletteId;
  colorMode: ColorMode;
  onSelectPalette: (id: PaletteId) => void;
  onSelectColorMode: (mode: ColorMode) => void;
}

export function M3AppearanceControls({
  palette,
  colorMode,
  onSelectPalette,
  onSelectColorMode
}: M3PaletteSectionProps) {
  return (
    <div className="space-y-4">
      {/* 明暗模式切换 */}
      <div className="space-y-2">
        <span className="text-xs font-medium text-[var(--md-sys-color-on-surface-variant)]">
          外观模式
        </span>
        <div className="grid grid-cols-3 gap-1 p-1 rounded-full bg-[var(--md-sys-color-surface-container-high)]">
          {(
            [
              { id: 'light', label: '浅色', Icon: Sun },
              { id: 'dark', label: '深色', Icon: Moon },
              { id: 'system', label: '跟随系统', Icon: Monitor }
            ] as const
          ).map(({ id, label, Icon }) => {
            const active = colorMode === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectColorMode(id)}
                className={`h-8 rounded-full inline-flex items-center justify-center gap-1 text-xs font-medium transition-colors cursor-pointer ${
                  active
                    ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]'
                    : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 标准 MD 四色圆圈主题色板矩阵 (4 × 2) */}
      <div className="space-y-2.5">
        <span className="text-xs font-medium text-[var(--md-sys-color-on-surface-variant)]">
          主题色板
        </span>
        <div
          role="radiogroup"
          aria-label="选择主题色板"
          className="grid grid-cols-4 gap-y-3 gap-x-2 pt-0.5"
        >
          {M3_PALETTE_PRESETS.map((preset) => {
            const selected = palette === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onSelectPalette(preset.id)}
                className="group/swatch flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none"
              >
                <FourColorSwatch
                  quadrants={preset.quadrants}
                  sizeClass="w-10 h-10"
                  selected={selected}
                />
                <span
                  className={`text-[11px] leading-none transition-colors ${
                    selected
                      ? 'font-semibold text-[var(--md-sys-color-primary)]'
                      : 'text-[var(--md-sys-color-on-surface-variant)] group-hover/swatch:text-[var(--md-sys-color-on-surface)]'
                  }`}
                >
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
