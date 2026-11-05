import { mkdirSync, mkdtempSync, readdirSync, rmSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { tmpdir } from 'os';
import { parseArgs } from 'util';
import { Resvg } from '@resvg/resvg-js';
import jpeg from 'jpeg-js';
import { decompress } from 'wawoff2';
import { deflateRawSync } from 'zlib';
import { spawn, spawnSync } from 'child_process';
import { createHash } from 'crypto';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { books } from '../src/data/books/index';
import BookCoverSvg from '../src/components/BookCoverSvg';
import type { BookMeta, GlossItem, AuthorNote, ParagraphBlock } from '../src/types/book';

const { values: options } = parseArgs({
  args: process.argv.slice(2),
  options: { book: { type: 'string' }, 'out-dir': { type: 'string' } },
  strict: true
});
const OUT_DIR = resolve(options['out-dir'] ?? join('public', 'ebooks'));
const MANIFEST_PATH = join(OUT_DIR, '.manifest.json');

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// CRC32 Table for standard ZIP creation
const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  CRC_TABLE[n] = c >>> 0;
}

function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

interface ZipEntry {
  name: string;
  data: Buffer;
  store?: boolean;
}

/**
 * 构建符合 EPUB OCF 规范的 ZIP 容器（首个文件 mimetype 无压缩且无 extra field）
 */
function buildEpubZip(entries: ZipEntry[]): Buffer {
  const localChunks: Buffer[] = [];
  const centralChunks: Buffer[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBuf = Buffer.from(entry.name, 'utf8');
    const uncompressed = entry.data;
    const crc = crc32(uncompressed);
    const isStore = Boolean(entry.store);
    const compressed = isStore ? uncompressed : deflateRawSync(uncompressed, { level: 9 });
    const method = isStore ? 0 : 8;

    const localHeader = Buffer.alloc(30 + nameBuf.length);
    localHeader.writeUInt32LE(0x04034b50, 0); // signature
    localHeader.writeUInt16LE(20, 4); // version needed
    localHeader.writeUInt16LE(0x0800, 6); // UTF-8 flag
    localHeader.writeUInt16LE(method, 8);
    localHeader.writeUInt16LE(0, 10); // mod time
    localHeader.writeUInt16LE(0x5765, 12); // mod date
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(compressed.length, 18);
    localHeader.writeUInt32LE(uncompressed.length, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28); // extra len
    nameBuf.copy(localHeader, 30);

    localChunks.push(localHeader, compressed);

    const centralHeader = Buffer.alloc(46 + nameBuf.length);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4); // version made by
    centralHeader.writeUInt16LE(20, 6); // version needed
    centralHeader.writeUInt16LE(0x0800, 8); // UTF-8 flag
    centralHeader.writeUInt16LE(method, 10);
    centralHeader.writeUInt16LE(0, 12);
    centralHeader.writeUInt16LE(0x5765, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(compressed.length, 20);
    centralHeader.writeUInt32LE(uncompressed.length, 24);
    centralHeader.writeUInt16LE(nameBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(offset, 42);
    nameBuf.copy(centralHeader, 46);

    centralChunks.push(centralHeader);
    offset += localHeader.length + compressed.length;
  }

  const centralDirSize = centralChunks.reduce((acc, b) => acc + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralDirSize, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localChunks, ...centralChunks, eocd]);
}

function renderBookCoverSvgString(slug: string): string {
  const raw = renderToStaticMarkup(React.createElement(BookCoverSvg, { slug }));
  const svg = raw.match(/<svg\b[^>]*>[\s\S]*<\/svg>/)?.[0];
  if (!svg) throw new Error(`未找到书封 SVG: ${slug}`);
  const resolved = svg
    .replace(/currentColor/g, '#161514')
    .replace(/var\(--accent-nrf\)/g, '#9e2a2b')
    .replace(/var\(--bg-canvas\)/g, '#f8f5ee')
    .replace(/class="[^"]*"/g, '');

  return resolved.replace(
    /^<svg\b[^>]*>/,
    '<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1400" viewBox="0 0 200 280"><rect x="0" y="0" width="200" height="280" fill="#f8f5ee"/>'
  );
}

// resvg accepts SFNT fonts, not the WOFF2 files used by the website. Decode into
// a temporary directory so CI and local builds use the same project typefaces.
async function prepareCoverFonts(dir: string): Promise<string[]> {
  const sources = [
    join(process.cwd(), 'public/fonts/LXGWNeoZhiSong-subset.woff2'),
    join(process.cwd(), 'public/fonts/LXGWWenKai-subset.woff2')
  ];
  for (const family of ['eb-garamond', 'jetbrains-mono']) {
    const fontDir = new URL('./files/', import.meta.resolve(`@fontsource/${family}/400.css`));
    for (const file of readdirSync(fontDir)) {
      if (file.endsWith('.woff2')) sources.push(new URL(file, fontDir).href);
    }
  }
  const fontFiles: string[] = [];
  for (const [index, source] of sources.entries()) {
    const target = join(dir, `${index}.ttf`);
    const input = source.startsWith('file:') ? new URL(source) : source;
    writeFileSync(target, await decompress(readFileSync(input)));
    fontFiles.push(target);
  }
  return fontFiles;
}

interface BookMaps {
  glossNumMap: Record<string, string>;
  fnNumMap: Record<string, number>;
}

function buildBookMaps(book: BookMeta): BookMaps {
  const glossNumMap: Record<string, string> = {};
  const fnNumMap: Record<string, number> = {};
  let glossCount = 0;
  let fnCount = 0;

  for (const ch of book.chapters) {
    if (ch.dedication?.glosses) {
      for (const g of ch.dedication.glosses) {
        glossCount++;
        glossNumMap[g.id] = String(glossCount).padStart(2, '0');
      }
    }
    for (const sec of ch.sections) {
      for (const blk of sec.blocks) {
        if (blk.glosses) {
          for (const g of blk.glosses) {
            glossCount++;
            glossNumMap[g.id] = String(glossCount).padStart(2, '0');
          }
        }
        if (blk.authorNotes) {
          for (const fn of blk.authorNotes) {
            fnCount++;
            fnNumMap[fn.id] = fnCount;
          }
        }
      }
    }
  }

  return { glossNumMap, fnNumMap };
}

function renderInnerRichXhtml(
  text: string,
  maps: BookMaps,
  authorNoteLabel: string
): string {
  const tokenRegex = /(\*\*[^*]+\*\*|\[\^[^\]]+\])/g;
  const parts = text.split(tokenRegex);

  return parts
    .map((part) => {
      if (!part) return '';
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        return `<strong>${escapeXml(part.slice(2, -2))}</strong>`;
      }
      if (part.startsWith('[^') && part.endsWith(']')) {
        const fnId = part.slice(2, -1);
        const fnNum = maps.fnNumMap[fnId] ?? 1;
        return `<sup><a id="ref-${escapeXml(fnId)}" href="#note-${escapeXml(fnId)}" epub:type="noteref" role="doc-noteref">[${escapeXml(authorNoteLabel)} ${fnNum}]</a></sup>`;
      }
      return escapeXml(part);
    })
    .join('');
}

function renderParagraphXhtml(
  text: string,
  maps: BookMaps,
  authorNoteLabel: string
): string {
  const paragraphs = text.split('\n\n');
  return paragraphs
    .map((para) => {
      const glossRegex = /(\[[^\]]+\]\{#[a-zA-Z0-9_-]+\})/g;
      const segments = para.split(glossRegex);
      const innerHtml = segments
        .map((seg) => {
          if (!seg) return '';
          const match = seg.match(/^\[([^\]]+)\]\{#([a-zA-Z0-9_-]+)\}$/);
          if (match) {
            const [, anchorText, glossId] = match;
            const num = maps.glossNumMap[glossId] ?? '00';
            return `${renderInnerRichXhtml(anchorText, maps, authorNoteLabel)}<sup><a id="ref-${escapeXml(glossId)}" href="#note-${escapeXml(glossId)}" epub:type="noteref" role="doc-noteref">[${num}]</a></sup>`;
          }
          return renderInnerRichXhtml(seg, maps, authorNoteLabel);
        })
        .join('');
      return `<p>${innerHtml}</p>`;
    })
    .join('\n');
}

function renderNotesSectionXhtml(
  glosses: GlossItem[],
  authorNotes: AuthorNote[],
  maps: BookMaps,
  authorNoteLabel: string
): string {
  if (glosses.length === 0 && authorNotes.length === 0) return '';

  const itemsHtml: string[] = [];

  for (const g of glosses) {
    const num = maps.glossNumMap[g.id] ?? '00';
    itemsHtml.push(`
      <aside id="note-${escapeXml(g.id)}" epub:type="footnote" role="doc-footnote">
        <p><a href="#ref-${escapeXml(g.id)}">[${num}]</a> <strong>${escapeXml(g.anchor)}：</strong>${renderInnerRichXhtml(g.content, maps, authorNoteLabel)}</p>
      </aside>`);
  }

  for (const fn of authorNotes) {
    const num = maps.fnNumMap[fn.id] ?? 1;
    itemsHtml.push(`
      <aside id="note-${escapeXml(fn.id)}" epub:type="footnote" role="doc-footnote">
        <p><a href="#ref-${escapeXml(fn.id)}">[${escapeXml(authorNoteLabel)} ${num}]</a> ${renderInnerRichXhtml(fn.zh, maps, authorNoteLabel)}</p>
      </aside>`);
  }

  return `
    <section epub:type="footnotes" role="doc-endnotes">
      ${itemsHtml.join('\n')}
    </section>`;
}

const EPUB_CSS = `
@charset "UTF-8";

.cover-wrap {
  text-align: center;
  margin: 0;
  padding: 0;
  page-break-after: always;
}

.cover-wrap img {
  max-width: 100%;
  max-height: 96vh;
  height: auto;
}

h1 {
  font-size: 1.25em;
  font-weight: bold;
  line-height: 1.35;
  margin: 1.2em 0 0.35em 0;
  text-indent: 0;
}

h2 {
  font-size: 1.1em;
  font-weight: bold;
  line-height: 1.35;
  margin: 1em 0 0.3em 0;
  text-indent: 0;
}

p {
  text-indent: 2em;
  margin: 0 0 0.6em 0;
}

blockquote p, aside p, .no-indent {
  text-indent: 0;
}

.block-divider {
  text-align: center;
  text-indent: 0;
  margin: 1.2em 0;
}
`;

function wrapXhtmlDoc(title: string, bodyContent: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>${escapeXml(title)}</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
${bodyContent}
</body>
</html>`;
}

function buildBookEpubBuffer(book: BookMeta, fontFiles: string[]): { epubBuf: Buffer; contentHash: string } {
  const maps = buildBookMaps(book);
  const coverSvg = renderBookCoverSvgString(book.slug);
  const renderedCover = new Resvg(coverSvg, {
    font: {
      loadSystemFonts: false,
      fontFiles,
      defaultFontFamily: 'LXGW Neo ZhiSong',
      serifFamily: 'LXGW Neo ZhiSong',
      monospaceFamily: 'JetBrains Mono'
    }
  }).render();
  const coverJpg = Buffer.from(
    jpeg.encode(
      {
        data: renderedCover.pixels,
        width: renderedCover.width,
        height: renderedCover.height
      },
      92
    ).data
  );

  const entries: ZipEntry[] = [
    {
      name: 'mimetype',
      data: Buffer.from('application/epub+zip', 'utf8'),
      store: true
    },
    {
      name: 'META-INF/container.xml',
      data: Buffer.from(
        `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`,
        'utf8'
      )
    },
    {
      name: 'OEBPS/styles.css',
      data: Buffer.from(EPUB_CSS.trim(), 'utf8')
    },
    {
      name: 'OEBPS/cover.svg',
      data: Buffer.from(coverSvg, 'utf8')
    },
    {
      name: 'OEBPS/cover.jpg',
      data: coverJpg
    },
    {
      name: 'OEBPS/cover.xhtml',
      data: Buffer.from(
        wrapXhtmlDoc(
          `${book.titleZh} — 书封`,
          `<div class="cover-wrap"><img src="cover.jpg" alt="${escapeXml(book.titleZh)}" /></div>`
        ),
        'utf8'
      )
    }
  ];

  // 原书卷首献辞与题词（不含学术导读 descriptionZh）
  const firstChapter = book.chapters[0];
  const dedicationGlosses = firstChapter?.dedication?.glosses ?? [];
  let liminaireHtml = '';
  if (firstChapter?.dedication) {
    const ded = firstChapter.dedication;
    liminaireHtml += `
      <blockquote>
        <p><strong>${escapeXml(ded.toZh)}</strong></p>
        ${ded.noteZh ? renderParagraphXhtml(ded.noteZh, maps, book.authorNoteLabel) : ''}
        ${ded.signatureZh ? `<p>${escapeXml(ded.signatureZh)}</p>` : ''}
      </blockquote>`;
  }

  if (firstChapter?.epigraph) {
    const epi = firstChapter.epigraph;
    liminaireHtml += `
      <blockquote>
        <p>「${escapeXml(epi.quoteZh)}」</p>
        <p>—— ${escapeXml(epi.authorZh)} ${escapeXml(epi.sourceZh)}</p>
      </blockquote>`;
  }

  // Build section files (原生标题 + 正文 + 尾注，生成真实二级目录树)
  const allSections = book.chapters.flatMap((ch) => ch.sections);
  interface TocNode {
    id: string;
    href: string;
    title: string;
    children?: TocNode[];
  }
  const sectionFiles: { id: string; href: string; title: string; roman: string; subNodes: TocNode[] }[] = [];

  allSections.forEach((sec, idx) => {
    const fileNum = String(idx + 1).padStart(2, '0');
    const filename = `sec-${fileNum}.xhtml`;
    const itemId = `sec-${fileNum}`;
    const navTitle =
      sec.roman === 'Vorrede' || sec.roman === 'Appendice'
        ? sec.titleZh
        : `${sec.roman}. ${sec.titleZh}`;

    const sectionGlosses: GlossItem[] = idx === 0 ? [...dedicationGlosses] : [];
    const sectionFn: AuthorNote[] = [];
    const subNodes: TocNode[] = [];

    const blocksHtml = sec.blocks
      .map((blk: ParagraphBlock) => {
        if (blk.type === 'divider') {
          return `<p class="block-divider">* * *</p>`;
        }
        if (blk.glosses) sectionGlosses.push(...blk.glosses);
        if (blk.authorNotes) sectionFn.push(...blk.authorNotes);

        // 识别段落开头的二级小节号/日记时间点（如《道德谱系》的 **一**~**二十八**、《恶心》的日期/钟点标题）
        let subAnchorId = '';
        if (book.slug === 'zur-genealogie-der-moral') {
          const m = blk.zh.match(/^\*\*([一二三四五六七八九十]+)\*\*/);
          if (m) {
            subAnchorId = blk.id;
            subNodes.push({
              id: `sub-${blk.id}`,
              href: `${filename}#${blk.id}`,
              title: `§ ${m[1]}`
            });
          }
        } else if (book.slug === 'la-nausee') {
          const m = blk.zh.match(/^\*\*([^*]{2,18})\*\*/);
          if (m && !m[1].includes('选择') && !m[1].includes('变化')) {
            subAnchorId = blk.id;
            const cleanSub = m[1].replace(/[。：:]$/, '');
            subNodes.push({
              id: `sub-${blk.id}`,
              href: `${filename}#${blk.id}`,
              title: cleanSub
            });
          }
        }

        const rendered = renderParagraphXhtml(blk.zh, maps, book.authorNoteLabel);
        if (subAnchorId) {
          return rendered.replace(/^<p>/, `<p id="${escapeXml(subAnchorId)}">`);
        }
        return rendered;
      })
      .join('\n');

    sectionFiles.push({ id: itemId, href: filename, title: navTitle, roman: sec.roman, subNodes });

    const secBody = `
      ${idx === 0 && liminaireHtml ? liminaireHtml : ''}
      <h2>${escapeXml(navTitle)}</h2>
      ${sec.titleOriginal ? `<p class="no-indent"><em>${escapeXml(sec.titleOriginal)}</em></p>` : ''}
      ${blocksHtml}
      ${renderNotesSectionXhtml(sectionGlosses, sectionFn, maps, book.authorNoteLabel)}
    `;

    entries.push({
      name: `OEBPS/${filename}`,
      data: Buffer.from(wrapXhtmlDoc(navTitle, secBody), 'utf8')
    });
  });

  // 构建二级目录树（支持按章分组或章内子节展开）
  const tocTree: TocNode[] = [];
  if (book.slug === 'le-mythe-de-sisyphe') {
    const groups: { prefix: string; title: string }[] = [
      { prefix: 'I.', title: 'I. 荒谬的推论' },
      { prefix: 'II.', title: 'II. 荒谬的人' },
      { prefix: 'III.', title: 'III. 荒谬的创造' }
    ];
    for (const grp of groups) {
      const children = sectionFiles
        .filter((s) => s.roman.startsWith(grp.prefix))
        .map((s) => ({ id: s.id, href: s.href, title: s.title }));
      if (children.length > 0) {
        tocTree.push({ id: `grp-${grp.prefix}`, href: children[0].href, title: grp.title, children });
      }
    }
    for (const s of sectionFiles.filter((s) => !s.roman.includes('.'))) {
      tocTree.push({ id: s.id, href: s.href, title: s.title });
    }
  } else if (book.slug === 'was-ist-metaphysik') {
    const lectureSecs = sectionFiles.slice(0, 3).map((s) => ({ id: s.id, href: s.href, title: s.title }));
    const nachwortSec = sectionFiles[3];
    if (lectureSecs.length > 0) {
      tocTree.push({
        id: 'grp-vorlesung',
        href: lectureSecs[0].href,
        title: '形而上学是什么？（一九二九年弗赖堡就职演说）',
        children: lectureSecs
      });
    }
    if (nachwortSec) {
      tocTree.push({ id: nachwortSec.id, href: nachwortSec.href, title: nachwortSec.title });
    }
  } else if (book.slug === 'protestantische-ethik') {
    const part1 = sectionFiles.slice(0, 3).map((s) => ({ id: s.id, href: s.href, title: s.title }));
    const part2 = sectionFiles.slice(3).map((s) => ({ id: s.id, href: s.href, title: s.title }));
    if (part1.length > 0) {
      tocTree.push({ id: 'grp-pe-1', href: part1[0].href, title: '第一卷：问题', children: part1 });
    }
    if (part2.length > 0) {
      tocTree.push({
        id: 'grp-pe-2',
        href: part2[0].href,
        title: '第二卷：禁欲主义新教诸分支的职业伦理',
        children: part2
      });
    }
  } else {
    for (const s of sectionFiles) {
      tocTree.push({
        id: s.id,
        href: s.href,
        title: s.title,
        children: s.subNodes.length > 0 ? s.subNodes : undefined
      });
    }
  }

  // Build nav.xhtml (EPUB 3 Navigation Document，支持二级嵌套 <ol>)
  const navItemsHtml = tocTree
    .map((node) => {
      if (node.children && node.children.length > 0) {
        const subItems = node.children
          .map((c) => `<li><a href="${escapeXml(c.href)}">${escapeXml(c.title)}</a></li>`)
          .join('\n            ');
        return `<li><a href="${escapeXml(node.href)}">${escapeXml(node.title)}</a>\n          <ol>\n            ${subItems}\n          </ol>\n        </li>`;
      }
      return `<li><a href="${escapeXml(node.href)}">${escapeXml(node.title)}</a></li>`;
    })
    .join('\n        ');

  const navXhtml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>目录 — ${escapeXml(book.titleZh)}</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  <nav epub:type="toc" id="toc">
    <h2>目录</h2>
    <ol>
        ${navItemsHtml}
    </ol>
  </nav>
</body>
</html>`;

  entries.push({
    name: 'OEBPS/nav.xhtml',
    data: Buffer.from(navXhtml, 'utf8')
  });

  // Build toc.ncx (EPUB 2 & Kindle KF8 原生二级目录树)
  let playOrder = 0;
  const hasSecondLevel = tocTree.some((n) => n.children && n.children.length > 0);
  const ncxPoints = tocTree
    .map((pt) => {
      playOrder++;
      const parentOrder = playOrder;
      const childrenXml = (pt.children ?? [])
        .map((c) => {
          playOrder++;
          return `
      <navPoint id="nav-${escapeXml(c.id)}" playOrder="${playOrder}">
        <navLabel><text>${escapeXml(c.title)}</text></navLabel>
        <content src="${escapeXml(c.href)}"/>
      </navPoint>`;
        })
        .join('');
      return `
    <navPoint id="nav-${escapeXml(pt.id)}" playOrder="${parentOrder}">
      <navLabel><text>${escapeXml(pt.title)}</text></navLabel>
      <content src="${escapeXml(pt.href)}"/>${childrenXml}
    </navPoint>`;
    })
    .join('');

  const tocNcx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="urn:ebr:${escapeXml(book.slug)}"/>
    <meta name="dtb:depth" content="${hasSecondLevel ? '2' : '1'}"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>${escapeXml(book.titleZh)}</text></docTitle>
  <docAuthor><text>${escapeXml(book.authorZh)}</text></docAuthor>
  <navMap>${ncxPoints}
  </navMap>
</ncx>`;

  entries.push({
    name: 'OEBPS/toc.ncx',
    data: Buffer.from(tocNcx, 'utf8')
  });

  // Build content.opf
  const manifestItems = [
    `<item id="css" href="styles.css" media-type="text/css"/>`,
    `<item id="cover-image" href="cover.jpg" media-type="image/jpeg" properties="cover-image"/>`,
    `<item id="cover-svg" href="cover.svg" media-type="image/svg+xml"/>`,
    `<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>`,
    `<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>`,
    `<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>`,
    ...sectionFiles.map(
      (s) => `<item id="${s.id}" href="${s.href}" media-type="application/xhtml+xml"/>`
    )
  ].join('\n    ');

  const spineItems = [
    `<itemref idref="cover"/>`,
    ...sectionFiles.map((s) => `<itemref idref="${s.id}"/>`)
  ].join('\n    ');

  const plainDesc = book.descriptionZh.replace(/\*\*/g, '');

  const contentOpf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="zh-CN">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="bookid">urn:ebr:${escapeXml(book.slug)}</dc:identifier>
    <dc:title>${escapeXml(book.titleZh)}：${escapeXml(book.subtitleZh)}</dc:title>
    <dc:creator>${escapeXml(book.authorZh)} (${escapeXml(book.authorOriginal)})</dc:creator>
    <dc:language>zh-CN</dc:language>
    <dc:publisher>EvenBetterReads / ${escapeXml(book.publisher)}</dc:publisher>
    <dc:description>${escapeXml(plainDesc)}</dc:description>
    <meta property="dcterms:modified">2026-11-05T00:00:00Z</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    ${manifestItems}
  </manifest>
  <spine toc="ncx">
    ${spineItems}
  </spine>
  <guide>
    <reference type="cover" title="书封" href="cover.xhtml"/>
    <reference type="toc" title="目录" href="nav.xhtml"/>
    <reference type="text" title="正文" href="sec-01.xhtml"/>
  </guide>
</package>`;

  entries.push({
    name: 'OEBPS/content.opf',
    data: Buffer.from(contentOpf, 'utf8')
  });

  const hasher = createHash('sha256');
  hasher.update('azw3-native-toc2-v5');
  for (const e of entries) {
    if (e.name === 'OEBPS/cover.jpg') continue;
    hasher.update(e.name);
    hasher.update(e.data);
  }
  const contentHash = hasher.digest('hex').slice(0, 16);

  return { epubBuf: buildEpubZip(entries), contentHash };
}

function resolveEbookConvertBin(): string | null {
  const candidates = [
    'C:\\Program Files\\Calibre2\\ebook-convert.exe',
    'C:\\Users\\rosetta\\.local\\calibre\\Calibre Portable\\Calibre\\ebook-convert.exe'
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  return spawnSync('ebook-convert', ['--version'], { stdio: 'ignore' }).status === 0
    ? 'ebook-convert'
    : null;
}

/**
 * 将 AZW3 EXTH 501 (CDEContentType) 从 EBOK 替换为等长 4 字节的 PDOC，
 * 使 Kindle 固件直接从文件内置的 EXTH 201 Baseline JPEG 提取本地封面缩略图，
 * 避免 EBOK 模式下联网请求亚马逊服务器 404 导致无封面。
 */
function patchAzw3ExthToPdoc(azw3Path: string): void {
  const buf = readFileSync(azw3Path);
  const ebokRecord = Buffer.from([0x00, 0x00, 0x01, 0xf5, 0x00, 0x00, 0x00, 0x0c, 0x45, 0x42, 0x4f, 0x4b]);
  const pdocRecord = Buffer.from([0x00, 0x00, 0x01, 0xf5, 0x00, 0x00, 0x00, 0x0c, 0x50, 0x44, 0x4f, 0x43]);
  let idx = 0;
  let patched = false;
  while ((idx = buf.indexOf(ebokRecord, idx)) !== -1) {
    pdocRecord.copy(buf, idx);
    idx += ebokRecord.length;
    patched = true;
  }
  if (patched) {
    writeFileSync(azw3Path, buf);
  }
}

function convertEpubToAzw3(bin: string, epubPath: string, azw3Path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(bin, [epubPath, azw3Path, '--disable-font-rescaling'], {
      stdio: ['ignore', 'pipe', 'pipe']
    });
    let stderr = '';
    child.stderr.on('data', (d) => {
      stderr += d.toString();
    });
    child.on('error', (err) => {
      reject(err);
    });
    child.on('close', (code) => {
      if (code === 0) {
        patchAzw3ExthToPdoc(azw3Path);
        resolve();
      } else {
        reject(new Error(`ebook-convert exited with code ${code}: ${stderr}`));
      }
    });
  });
}

async function main(fontFiles: string[]) {
  const selectedBooks = options.book ? books.filter((book) => book.slug === options.book) : books;
  if (selectedBooks.length === 0) throw new Error(`未知书目: ${options.book}`);
  mkdirSync(OUT_DIR, { recursive: true });

  let prevManifest: Record<string, string> = {};
  if (existsSync(MANIFEST_PATH)) {
    try {
      prevManifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
    } catch {
      prevManifest = {};
    }
  }

  const nextManifest: Record<string, string> = options.book ? { ...prevManifest } : {};
  const convertQueue: { slug: string; epubPath: string; azw3Path: string }[] = [];

  for (const book of selectedBooks) {
    const { epubBuf, contentHash: hash } = buildBookEpubBuffer(book, fontFiles);
    nextManifest[book.slug] = hash;

    const epubPath = join(OUT_DIR, `${book.slug}.epub`);
    const azw3Path = join(OUT_DIR, `${book.slug}.azw3`);

    writeFileSync(epubPath, epubBuf);

    if (prevManifest[book.slug] !== hash || !existsSync(azw3Path)) {
      convertQueue.push({ slug: book.slug, epubPath, azw3Path });
    }
  }

  console.log(`✓ 已生成 ${selectedBooks.length} 部作品的 EPUB 3 电子书（${OUT_DIR}）`);

  const bin = resolveEbookConvertBin();
  const missingAzw3 = convertQueue.filter((q) => !existsSync(q.azw3Path));
  if (missingAzw3.length > 0 && !bin) throw new Error('未找到 Calibre ebook-convert');
  if (convertQueue.length > 0 && bin) {
    console.log(`正在调用 Calibre ebook-convert 编译 ${convertQueue.length} 部 AZW3 (KF8) 副本...`);
    const CONCURRENCY = 4;
    let idx = 0;
    const workers = Array.from({ length: Math.min(CONCURRENCY, convertQueue.length) }, async () => {
      while (idx < convertQueue.length) {
        const current = convertQueue[idx++];
        await convertEpubToAzw3(bin, current.epubPath, current.azw3Path);
        console.log(`  ✓ ${current.slug}.azw3`);
      }
    });
    await Promise.all(workers);
  }

  writeFileSync(MANIFEST_PATH, JSON.stringify(nextManifest, null, 2));

  if (!options.book) {
    const epubBundleEntries: ZipEntry[] = [];
    const azw3BundleEntries: ZipEntry[] = [];

    selectedBooks.forEach((book, i) => {
      const prefix = String(i + 1).padStart(2, '0');
      const safeTitle = `${prefix}-${book.titleZh}-${book.authorZh}`.replace(/[\\/:*?"<>|]/g, '_');
      const epubFile = join(OUT_DIR, `${book.slug}.epub`);
      const azw3File = join(OUT_DIR, `${book.slug}.azw3`);

      if (existsSync(epubFile)) {
        epubBundleEntries.push({
          name: `${safeTitle}.epub`,
          data: readFileSync(epubFile),
          store: true
        });
      }
      if (existsSync(azw3File)) {
        azw3BundleEntries.push({
          name: `${safeTitle}.azw3`,
          data: readFileSync(azw3File),
          store: true
        });
      }
    });

    writeFileSync(join(OUT_DIR, 'EvenBetterReads-EPUB.zip'), buildEpubZip(epubBundleEntries));
    writeFileSync(join(OUT_DIR, 'EvenBetterReads-AZW3.zip'), buildEpubZip(azw3BundleEntries));
    console.log('✓ 已打包全集压缩包 EvenBetterReads-EPUB.zip 与 EvenBetterReads-AZW3.zip');
  }

  console.log(`✓ ${selectedBooks.length} 部作品 EPUB 与 AZW3 副本准备就绪`);
}

async function run() {
  const fontDir = mkdtempSync(join(tmpdir(), 'ebr-cover-fonts-'));
  try {
    await main(await prepareCoverFonts(fontDir));
  } finally {
    rmSync(fontDir, { recursive: true, force: true });
  }
}

run().catch((err) => {
  console.error('❌ 电子书构建失败:', err);
  process.exit(1);
});
