import React from 'react';

export interface GlossIndexMap {
  [glossId: string]: {
    index: number;
    formattedIndex: string;
  };
}

interface ParseZhOptions {
  glossIndexMap: GlossIndexMap;
  onSelectGloss: (glossId: string) => void;
  footnoteMap?: Record<string, number>;
  authorNoteLabel?: string;
  fontSizeClass?: string;
  isVerse?: boolean;
}

function renderPlainWithLineBreaks(text: string, keyPrefix: string): React.ReactNode {
  if (!text.includes('\n')) return text;
  const lines = text.split('\n');
  return lines.map((line, idx) => (
    <React.Fragment key={`${keyPrefix}-ln-${idx}`}>
      {idx > 0 && <br />}
      {line}
    </React.Fragment>
  ));
}

/**
 * 解析内部 **霞鹜文楷强调** 与 [^fn-id] 原注温润胶囊角标
 */
function renderInnerZh(
  text: string,
  keyPrefix: string,
  options?: Pick<ParseZhOptions, 'footnoteMap' | 'authorNoteLabel' | 'onSelectGloss'>
): React.ReactNode[] {
  const tokenRegex = /(\*\*[^*]+\*\*|\[\^[^\]]+\])/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2);
      return (
        <strong key={`${keyPrefix}-b-${idx}`} className="zh-emphasis">
          {renderPlainWithLineBreaks(inner, `${keyPrefix}-b-${idx}`)}
        </strong>
      );
    }
    if (part.startsWith('[^') && part.endsWith(']')) {
      const fnId = part.slice(2, -1);
      const fnNum = options?.footnoteMap?.[fnId] ?? 1;
      const label = options?.authorNoteLabel ?? '原注';
      return (
        <button
          key={`${keyPrefix}-fn-${idx}`}
          type="button"
          data-gloss-trigger={fnId}
          style={{ textIndent: 0, fontFamily: 'var(--font-ui)' }}
          onClick={(e) => {
            e.stopPropagation();
            options?.onSelectGloss?.(fnId);
          }}
          title={`查看${label} ${fnNum}`}
          className="fn-trigger inline-flex items-center gap-0.5 mx-1 px-2 py-[2px] rounded-full text-[11px] font-medium leading-none tabular-nums-ui align-baseline -translate-y-[2px] relative transition-colors duration-150 cursor-pointer touch-manipulation after:content-[''] after:absolute after:-inset-y-2 after:-inset-x-1"
        >
          <span>{label}</span>
          <span className="hidden min-[960px]:inline">{fnNum}</span>
        </button>
      );
    }
    return (
      <React.Fragment key={`${keyPrefix}-t-${idx}`}>
        {renderPlainWithLineBreaks(part, `${keyPrefix}-t-${idx}`)}
      </React.Fragment>
    );
  });
}

function normalizeBoldAcrossGlosses(text: string): string {
  const glossToken = /(\[[^\]]+\]\{#[a-zA-Z0-9_-]+\})/g;
  return text.replace(/\*\*([^*]+)\*\*/g, (full, inner: string) => {
    if (!inner.includes('{#')) return full;
    return inner
      .split(glossToken)
      .map((chunk) => {
        if (!chunk) return '';
        const m = chunk.match(/^\[([^\]]+)\]\{#([a-zA-Z0-9_-]+)\}$/);
        if (m) {
          const [, anchor, id] = m;
          const cleanAnchor = anchor.replace(/\*\*/g, '');
          return `[**${cleanAnchor}**]{#${id}}`;
        }
        return `**${chunk}**`;
      })
      .join('');
  });
}

/**
 * 解析中文正文自然段：
 * 默认面貌极其安静克制（柔和虚点底线 + 轻盈上标序号），
 * 悬停或激活时以 M3E secondaryContainer 圆角柔光色底包裹词条。
 */
export function renderZhParagraph(text: string, options: ParseZhOptions): React.ReactNode[] {
  const paragraphs = normalizeBoldAcrossGlosses(text).split('\n\n');

  return paragraphs.map((para, pIdx) => {
    const glossRegex = /(\[[^\]]+\]\{#[a-zA-Z0-9_-]+\})/g;
    const segments = para.split(glossRegex);

    const children = segments.map((seg, sIdx) => {
      if (!seg) return null;
      const match = seg.match(/^\[([^\]]+)\]\{#([a-zA-Z0-9_-]+)\}$/);
      if (match) {
        const [, anchorText, glossId] = match;
        const meta = options.glossIndexMap[glossId];

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
              const sel = window.getSelection();
              if (sel && !sel.isCollapsed && sel.toString().trim().length > 0) return;
              options.onSelectGloss(glossId);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                options.onSelectGloss(glossId);
              }
            }}
            className="gloss-trigger inline cursor-pointer touch-manipulation rounded-[6px] px-[2px] -mx-[2px] transition-colors duration-150"
          >
            {renderInnerZh(anchorText, `p${pIdx}-s${sIdx}`, options)}
            <sup
              style={{ textIndent: 0, fontFamily: 'var(--font-ui)' }}
              className="gloss-trigger-sup hidden min-[960px]:inline-block ml-[2px] text-[10.5px] font-semibold leading-none tabular-nums-ui select-none"
            >
              {meta.index}
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

    if (options.isVerse) {
      return (
        <blockquote
          key={`verse-${pIdx}`}
          className={`zh-prose zh-emphasis my-2 pl-5 sm:pl-7 border-l-2 border-[var(--md-sys-color-outline-variant)]/60 leading-[1.95] ${options.fontSizeClass ?? ''} ${pIdx > 0 ? 'mt-4' : ''}`}
          style={{ textIndent: 0 }}
        >
          {children}
        </blockquote>
      );
    }

    return (
      <p
        key={`para-${pIdx}`}
        className={`zh-prose zh-indent ${options.fontSizeClass ?? ''} ${pIdx > 0 ? 'mt-4' : ''}`}
      >
        {children}
      </p>
    );
  });
}

export function renderGlossContent(text: string): React.ReactNode[] {
  return renderInnerZh(text, 'gloss');
}
