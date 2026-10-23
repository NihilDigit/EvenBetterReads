import { readFileSync } from 'fs';
import { books } from '../src/data/books/index';

const errors: string[] = [];
const coverSvgSource = readFileSync('src/components/BookCoverSvg.tsx', 'utf8');

/**
 * 校验单段富文本（支持 **文楷强调**，禁止残余裸露的 **、单星号 *斜体* 或 _下划线斜体_）
 * 允许历史语言学构拟词根星号（如 *men-、*tūnan、*ghordho-）
 */
function checkInlineMarkup(text: string, loc: string) {
  if (!text) return;

  // 1. 检查是否存在跨伴读旁注或原注的 **...**（按成对 ** 从左到右匹配）
  const boldSpans = [...text.matchAll(/\*\*([^*]+)\*\*/g)];
  for (const m of boldSpans) {
    if (m[1].includes('{#') || m[1].includes('[^')) {
      errors.push(
        `[跨锚点加粗 **] ${loc}: 禁止用 ** 包裹或横跨 [词句]{#id} / [^fn-id] -> ${JSON.stringify(m[0])}`
      );
    }
  }

  // 2. 按解析器相同逻辑切分后，检查是否残留未配对的 * 或 **
  const tokenRegex = /(\*\*[^*]+\*\*|\[\^[^\]]+\])/g;
  const parts = text.split(tokenRegex);
  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) continue;
    if (part.startsWith('[^') && part.endsWith(']')) continue;

    // 剥离印欧语/古日耳曼语历史语言学构拟词根星号（如 *men-、*tūnan、*ghordho-）
    const withoutLinguisticRoots = part.replace(
      /(?<=[\s\u4e00-\u9fa5])\*(?:men-|tūnan|ghordho-)/g,
      ''
    );

    if (withoutLinguisticRoots.includes('*')) {
      errors.push(`[残留星号 *] ${loc}: ${JSON.stringify(part)}`);
    }

    if (/_[^_]+_/.test(withoutLinguisticRoots)) {
      errors.push(`[残留 Markdown 下划线 _] ${loc}: ${JSON.stringify(part)}`);
    }
  }
}

function checkParagraphText(text: string, loc: string) {
  // 先在整段层面检查是否有 **...** 包裹或横跨了 {#id} / [^id]
  const boldSpans = [...text.matchAll(/\*\*([^*]+)\*\*/g)];
  for (const m of boldSpans) {
    if (m[1].includes('{#') || m[1].includes('[^')) {
      errors.push(
        `[跨锚点加粗 **] ${loc}: 禁止用 ** 包裹或横跨 [词句]{#id} / [^fn-id] -> ${JSON.stringify(m[0])}`
      );
    }
  }

  const paragraphs = text.split('\n\n');
  for (const para of paragraphs) {
    const glossRegex = /(\[[^\]]+\]\{#[a-zA-Z0-9_-]+\})/g;
    const segments = para.split(glossRegex);
    for (const seg of segments) {
      if (!seg) continue;
      const match = seg.match(/^\[([^\]]+)\]\{#([a-zA-Z0-9_-]+)\}$/);
      if (match) {
        checkInlineMarkup(match[1], `${loc} [anchor #${match[2]}]`);
      } else {
        checkInlineMarkup(seg, loc);
      }
    }
  }
}

for (const book of books) {
  if (!coverSvgSource.includes(`case '${book.slug}':`)) {
    errors.push(
      `[缺失 SVG 书封] ${book.slug}: 未在 src/components/BookCoverSvg.tsx 中定义专属馆藏 SVG 书封`
    );
  }
  checkInlineMarkup(book.descriptionZh, `${book.slug}/descriptionZh`);

  const seenBlockIds = new Set<string>();
  const seenGlossIds = new Set<string>();
  const seenFnIds = new Set<string>();

  for (const ch of book.chapters) {
    if (ch.dedication) {
      checkInlineMarkup(ch.dedication.toZh, `${book.slug}/dedication/toZh`);
      if (ch.dedication.noteZh) {
        checkParagraphText(ch.dedication.noteZh, `${book.slug}/dedication/noteZh`);
      }
      for (const g of ch.dedication.glosses ?? []) {
        if (seenGlossIds.has(g.id)) {
          errors.push(`[重复旁注 ID] ${book.slug}/dedication/${g.id}`);
        }
        seenGlossIds.add(g.id);
        if (g.anchor.includes('*')) {
          errors.push(`[旁注 anchor 含 *] ${book.slug}/dedication/${g.id}: ${g.anchor}`);
        }
        checkInlineMarkup(g.content, `${book.slug}/dedication/${g.id}/content`);
      }
    }

    if (ch.epigraph) {
      checkInlineMarkup(ch.epigraph.quoteZh, `${book.slug}/epigraph/quoteZh`);
    }

    for (const sec of ch.sections) {
      for (const blk of sec.blocks) {
        if (seenBlockIds.has(blk.id)) {
          errors.push(`[重复段落 ID] ${book.slug}/${sec.id}/${blk.id}`);
        }
        seenBlockIds.add(blk.id);

        if (blk.type === 'divider') continue;

        const loc = `${book.slug}/${sec.id}/${blk.id}`;
        checkParagraphText(blk.zh, `${loc}/zh`);

        const zhGlossIds = [
          ...blk.zh.matchAll(/\[([^\]]+)\]\{#([a-zA-Z0-9_-]+)\}/g)
        ].map((m) => m[2]);
        const defGlossIds = (blk.glosses ?? []).map((g) => g.id);

        for (const id of zhGlossIds) {
          if (!defGlossIds.includes(id)) {
            errors.push(`[缺失旁注定义] ${loc}: 正文引用了 {#${id}}，但 glosses 中未定义`);
          }
        }
        for (const id of defGlossIds) {
          if (!zhGlossIds.includes(id)) {
            errors.push(`[未挂载旁注] ${loc}: glosses 定义了 ${id}，但正文中未挂载 {#${id}}`);
          }
        }

        for (const g of blk.glosses ?? []) {
          if (seenGlossIds.has(g.id)) {
            errors.push(`[重复旁注 ID] ${loc}/${g.id}`);
          }
          seenGlossIds.add(g.id);
          if (g.anchor.includes('*')) {
            errors.push(`[旁注 anchor 含 *] ${loc}/${g.id}: ${g.anchor}`);
          }
          checkInlineMarkup(g.content, `${loc}/${g.id}/content`);
        }

        const zhFnIds = [...blk.zh.matchAll(/\[\^([a-zA-Z0-9_-]+)\]/g)].map((m) => m[1]);
        const defFnIds = (blk.authorNotes ?? []).map((fn) => fn.id);

        for (const id of zhFnIds) {
          if (!defFnIds.includes(id)) {
            errors.push(`[缺失原注定义] ${loc}: 正文引用了 [^${id}]，但 authorNotes 中未定义`);
          }
        }
        for (const id of defFnIds) {
          if (!zhFnIds.includes(id)) {
            errors.push(`[未挂载原注] ${loc}: authorNotes 定义了 ${id}，但正文中未挂载 [^${id}]`);
          }
        }

        for (const fn of blk.authorNotes ?? []) {
          if (seenFnIds.has(fn.id)) {
            errors.push(`[重复原注 ID] ${loc}/${fn.id}`);
          }
          seenFnIds.add(fn.id);
          checkInlineMarkup(fn.zh, `${loc}/${fn.id}/zh`);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`\n❌ 书籍文本与注疏校验失败（共 ${errors.length} 处问题）：`);
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
} else {
  console.log(`✓ 全库 ${books.length} 部作品文本标记与注疏锚点校验通过`);
}
