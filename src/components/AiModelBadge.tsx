import React from 'react';

interface AiModelBadgeProps {
  model: string;
  suffix?: string;
  variant?: 'pill' | 'inline';
  className?: string;
}

function isArgonModel(model: string): boolean {
  return /argon/i.test(model);
}

function isCarbonModel(model: string): boolean {
  return /carbon/i.test(model);
}

/**
 * 元素几何微徽标：
 * - Carbon（碳 C₆）：正六边形碳晶格 + 中心菱形晶核
 * - Argon（氩 Ar₁₈）：惰性气体轨道圆环 + 电子星点
 */
export function AiModelGlyph({
  model,
  className = 'w-3 h-3 shrink-0'
}: {
  model: string;
  className?: string;
}) {
  if (isArgonModel(model)) {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
        <circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeWidth="1.45" opacity="0.88" />
        <circle cx="8" cy="8" r="2.15" fill="currentColor" />
        <circle cx="12.3" cy="4.1" r="1.35" fill="currentColor" />
      </svg>
    );
  }

  if (isCarbonModel(model)) {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
        <path
          d="M 8 1.7 L 13.3 4.8 L 13.3 11.2 L 8 14.3 L 2.7 11.2 L 2.7 4.8 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M 8 5.0 L 10.7 8 L 8 11.0 L 5.3 8 Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M 8 2 Q 8.8 7.2 14 8 Q 8.8 8.8 8 14 Q 7.2 8.8 2 8 Q 7.2 7.2 8 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AiModelBadge({
  model,
  suffix,
  variant = 'pill',
  className = ''
}: AiModelBadgeProps) {
  const argon = isArgonModel(model);
  const carbon = isCarbonModel(model);

  const fgStyle = argon
    ? 'text-[var(--ebr-argon-fg)]'
    : 'text-[var(--ebr-carbon-fg)]';

  if (variant === 'inline') {
    return (
      <span
        title={`译注模型：${model}`}
        className={`inline-flex items-center gap-1 text-[11px] text-[var(--md-sys-color-on-surface-variant)] ${className}`}
      >
        <span className={`${fgStyle} inline-flex items-center shrink-0`}>
          <AiModelGlyph model={model} className="w-3 h-3" />
        </span>
        <span>
          {model}
          {suffix ? ` ${suffix}` : ''}
        </span>
      </span>
    );
  }

  const bgStyle = argon
    ? 'bg-[var(--ebr-argon-bg)] text-[var(--md-sys-color-on-surface)]'
    : carbon
      ? 'bg-[var(--ebr-carbon-bg)] text-[var(--md-sys-color-on-surface)]'
      : 'bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]';

  return (
    <span
      title={`译注模型：${model}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${bgStyle} ${className}`}
    >
      <span className={`${fgStyle} inline-flex items-center shrink-0`}>
        <AiModelGlyph model={model} className="w-3 h-3" />
      </span>
      <span className="truncate">
        {model}
        {suffix ? ` ${suffix}` : ''}
      </span>
    </span>
  );
}
