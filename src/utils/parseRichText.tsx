import React from 'react';

export interface GlossIndexMap {
  [glossId: string]: {
    index: number;
    formattedIndex: string;
  };
}

interface ParseZhOptions {
  glossIndexMap: GlossIndexMap;
  activeGlossId: string | null;
  onSelectGloss: (glossId: string) => void;
  footnoteMap?: Record<string, number>;
  authorNoteLabel?: string;
  fontSizeClass?: string;
}

/**
 * 解析内部 **霞鹜文楷强调** 与 [^fn-id] 原注标记
 */
function renderInnerZh(
  text: string,
  keyPrefix: string,
  options?: Pick<
    ParseZhOptions,
    'footnoteMap' | 'authorNoteLabel' | 'activeGlossId' | 'onSelectGloss'
  >
): React.ReactNode[] {
  const tokenRegex = /(\*\*[^*]+\*\*|\[\^[^\]]+\])/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2);
      return (
        <strong key={`${keyPrefix}-b-${idx}`} className="zh-emphasis">
          {inner}
        </strong>
      );
    }
    if (part.startsWith('[^') && part.endsWith(']')) {
      const fnId = part.slice(2, -1);
      const fnNum = options?.footnoteMap?.[fnId] ?? 1;
      const isActive = options?.activeGlossId === fnId;
      const label = options?.authorNoteLabel ?? '作者原注';
      return (
        <button
          key={`${keyPrefix}-fn-${idx}`}
          type="button"
          data-gloss-trigger={fnId}
          style={{ textIndent: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            options?.onSelectGloss?.(fnId);
          }}
          title={`查看${label}`}
          className={`inline-flex items-center mx-1 px-1.5 py-0.5 text-[11px] leading-none font-mono-coord align-baseline border transition-colors cursor-pointer ${
            isActive
              ? 'bg-[var(--ink-primary)] text-[var(--bg-canvas)] border-[var(--ink-primary)]'
              : 'bg-transparent text-[var(--ink-primary)] border-[var(--rule-strong)] hover:bg-[var(--ink-primary)] hover:text-[var(--bg-canvas)]'
          }`}
        >
          {label} {fnNum}
        </button>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t-${idx}`}>{part}</React.Fragment>;
  });
}

/**
 * 解析中文段落：每个自然段均为 <p className="zh-prose zh-indent">（首行缩进两字）
 */
export function renderZhParagraph(text: string, options: ParseZhOptions): React.ReactNode[] {
  const paragraphs = text.split('\n\n');

  return paragraphs.map((para, pIdx) => {
    const glossRegex = /(\[[^\]]+\]\{#[a-zA-Z0-9_-]+\})/g;
    const segments = para.split(glossRegex);

    const children = segments.map((seg, sIdx) => {
      if (!seg) return null;
      const match = seg.match(/^\[([^\]]+)\]\{#([a-zA-Z0-9_-]+)\}$/);
      if (match) {
        const [, anchorText, glossId] = match;
        const meta = options.glossIndexMap[glossId];
        const isActive = options.activeGlossId === glossId;

        if (!meta) {
          return (
            <React.Fragment key={`p${pIdx}-s${sIdx}`}>
              {renderInnerZh(anchorText, `p${pIdx}-s${sIdx}`, options)}
            </React.Fragment>
          );
        }

        return (
          <span
            key={`p${pIdx}-s${sIdx}`}
            role="button"
            tabIndex={0}
            data-gloss-trigger={glossId}
            onClick={(e) => {
              e.stopPropagation();
              options.onSelectGloss(glossId);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                options.onSelectGloss(glossId);
              }
            }}
            className={`group/gloss inline cursor-pointer border-b-[1.5px] pb-[1px] transition-colors duration-150 ${
              isActive
                ? 'bg-[var(--accent-nrf-soft)] border-solid border-[var(--accent-nrf)]'
                : 'border-solid border-[var(--accent-nrf)]/65 hover:border-[var(--accent-nrf)] hover:bg-[var(--accent-nrf-soft)]'
            }`}
          >
            {renderInnerZh(anchorText, `p${pIdx}-s${sIdx}`, options)}
            <sup
              style={{ textIndent: 0 }}
              className="inline-block ml-0.5 font-mono-coord text-[11px] leading-none select-none text-[var(--accent-nrf)]"
            >
              {meta.formattedIndex}
            </sup>
          </span>
        );
      }

      return (
        <React.Fragment key={`p${pIdx}-s${sIdx}`}>
          {renderInnerZh(seg, `p${pIdx}-s${sIdx}`, options)}
        </React.Fragment>
      );
    });

    return (
      <p
        key={`para-${pIdx}`}
        className={`zh-prose zh-indent ${options.fontSizeClass ?? ''} ${pIdx > 0 ? 'mt-3.5' : ''}`}
      >
        {children}
      </p>
    );
  });
}

/**
 * 解析旁注正文（支持 **霞鹜文楷强调**）
 */
export function renderGlossContent(text: string): React.ReactNode[] {
  return renderInnerZh(text, 'gloss');
}
