import React from 'react';

interface BrandMarkProps {
  className?: string;
}

/**
 * EvenBetterReads 品牌徽记：
 * M3E 连续曲率超椭圆底砖 + 左侧修长开卷主书叶 + 右下伴读侧叶 + 右上圆润四芒星辉，
 * 直接绑定当前激活的 M3 HCT 主题色板 CSS 变量，随 8 套色板与明暗模式平滑过渡。
 */
export default function BrandMark({ className = 'w-9 h-9' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* M3E 连续曲率超椭圆柔和底砖 */}
      <path
        d="M 22 2 L 42 2 C 55.5 2 62 8.5 62 22 L 62 42 C 62 55.5 55.5 62 42 62 L 22 62 C 8.5 62 2 55.5 2 42 L 2 22 C 2 8.5 8.5 2 22 2 Z"
        fill="var(--md-sys-color-primary-container)"
      />
      {/* 右下：伴读注疏侧叶（Supporting Gloss Leaf） */}
      <path
        d="M 33.4 30.2 C 36.4 28.2 41.2 26.9 46.4 26.7 C 49.5 26.6 51.8 28.9 51.8 32.0 L 51.8 43.4 C 51.8 46.2 49.6 48.5 46.8 48.7 C 41.6 49.1 37.2 50.5 34.4 52.4 C 33.7 52.9 32.8 52.3 32.8 51.4 L 32.8 31.4 C 32.8 30.9 33.0 30.5 33.4 30.2 Z"
        fill="color-mix(in srgb, var(--md-sys-color-primary) 42%, var(--md-sys-color-surface-container-lowest))"
      />
      {/* 左侧：修长开卷正文主书叶（Primary Reading Leaf） */}
      <path
        d="M 30.6 16.0 C 27.4 13.4 22.6 11.7 17.4 11.4 C 14.3 11.2 12.0 13.5 12.0 16.6 L 12.0 43.4 C 12.0 46.2 14.2 48.5 17.0 48.7 C 22.2 49.1 26.6 50.5 29.4 52.4 C 30.1 52.9 31.0 52.3 31.0 51.4 L 31.0 17.0 C 31.0 16.6 30.9 16.2 30.6 16.0 Z"
        fill="var(--md-sys-color-primary)"
      />
      {/* 右上：象征思想洞见与伴读旁注的四芒圆润星辉 */}
      <path
        d="M 42.50 10.40 Q 43.45 16.25 49.30 17.20 Q 43.45 18.14 42.50 24.00 Q 41.55 18.14 35.70 17.20 Q 41.55 16.25 42.50 10.40 Z"
        fill="var(--md-sys-color-primary)"
        stroke="var(--md-sys-color-primary)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
