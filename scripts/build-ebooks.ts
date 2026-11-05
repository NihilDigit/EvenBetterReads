import { mkdirSync, mkdtempSync, readdirSync, rmSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { tmpdir } from 'os';
import { parseArgs } from 'util';
import { Resvg } from '@resvg/resvg-js';
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
        return `<strong class="zh-emphasis">${escapeXml(part.slice(2, -2))}</strong>`;
      }
      if (part.startsWith('[^') && part.endsWith(']')) {
        const fnId = part.slice(2, -1);
        const fnNum = maps.fnNumMap[fnId] ?? 1;
        return `<a id="ref-${escapeXml(fnId)}" href="#note-${escapeXml(fnId)}" epub:type="noteref" role="doc-noteref" class="fn-ref">[${escapeXml(authorNoteLabel)} ${fnNum}]</a>`;
      }
      return escapeXml(part);
    })
    .join('');
}

function renderParagraphXhtml(
  text: string,
  maps: BookMaps,
  authorNoteLabel: string,
  className = 'zh-prose'
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
            return `<span class="gloss-anchor">${renderInnerRichXhtml(anchorText, maps, authorNoteLabel)}</span><a id="ref-${escapeXml(glossId)}" href="#note-${escapeXml(glossId)}" epub:type="noteref" role="doc-noteref" class="gloss-ref">[${num}]</a>`;
          }
          return renderInnerRichXhtml(seg, maps, authorNoteLabel);
        })
        .join('');
      return `<p class="${className}">${innerHtml}</p>`;
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
      <aside id="note-${escapeXml(g.id)}" epub:type="footnote" role="doc-footnote" class="note-aside gloss-aside">
        <p class="note-head">
          <a href="#ref-${escapeXml(g.id)}" class="note-backlink">[${num}]</a>
          <strong class="note-anchor-label">${escapeXml(g.anchor)}</strong>
        </p>
        <p class="note-body">${renderInnerRichXhtml(g.content, maps, authorNoteLabel)} <a href="#ref-${escapeXml(g.id)}" class="note-return">↩</a></p>
      </aside>`);
  }

  for (const fn of authorNotes) {
    const num = maps.fnNumMap[fn.id] ?? 1;
    itemsHtml.push(`
      <aside id="note-${escapeXml(fn.id)}" epub:type="footnote" role="doc-footnote" class="note-aside fn-aside">
        <p class="note-head">
          <a href="#ref-${escapeXml(fn.id)}" class="fn-badge">${escapeXml(authorNoteLabel)} [${num}]</a>
        </p>
        <p class="note-body">${renderInnerRichXhtml(fn.zh, maps, authorNoteLabel)} <a href="#ref-${escapeXml(fn.id)}" class="note-return">↩</a></p>
      </aside>`);
  }

  return `
    <section class="notes-rail" epub:type="footnotes" role="doc-endnotes">
      ${itemsHtml.join('\n')}
    </section>`;
}

const EPUB_CSS = `
@charset "UTF-8";

body {
  font-family: "LXGW Neo ZhiSong", "Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", "SimSun", serif;
  line-height: 1.85;
  color: #161514;
  margin: 0;
  padding: 0 4%;
}

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

.title-card {
  border-top: 2px solid #161514;
  border-bottom: 1px solid #161514;
  padding: 1.5em 0 1.2em;
  margin: 1.5em 0 1.8em;
}

.meta-vol {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78em;
  letter-spacing: 0.08em;
  margin: 0 0 0.5em 0;
}

.book-title-zh {
  font-size: 1.75em;
  font-weight: bold;
  line-height: 1.25;
  margin: 0 0 0.25em 0;
}

.book-subtitle-zh {
  font-size: 1.02em;
  margin: 0 0 0.6em 0;
}

.book-title-orig {
  font-family: "EB Garamond", Georgia, serif;
  font-style: italic;
  font-size: 0.95em;
  margin: 0 0 0.8em 0;
}

.book-author {
  font-size: 0.92em;
  margin: 0;
}

.intro-heading {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.82em;
  letter-spacing: 0.1em;
  border-top: 1px solid #161514;
  padding-top: 0.6em;
  margin: 1.8em 0 0.8em;
}

.dedication-box, .epigraph-box {
  border-top: 1px solid #161514;
  border-bottom: 1px solid #161514;
  padding: 1.2em 0.5em;
  margin: 1.8em 0;
}

.dedication-to {
  font-weight: bold;
  text-align: center;
  font-size: 1.05em;
  margin: 0 0 0.6em 0;
  text-indent: 0;
}

.epigraph-quote {
  font-weight: bold;
  margin: 0 0 0.5em 0;
  text-indent: 0;
}

.epigraph-source {
  text-align: right;
  font-size: 0.88em;
  margin: 0;
  text-indent: 0;
}

.section-header {
  border-top: 2px solid #161514;
  border-bottom: 1px solid #161514;
  padding: 1.1em 0 0.9em;
  margin: 1.2em 0 1.5em;
}

.section-roman {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8em;
  color: #9e2a2b;
  letter-spacing: 0.08em;
  margin: 0 0 0.25em 0;
  text-indent: 0;
}

.section-title-zh {
  font-size: 1.35em;
  font-weight: bold;
  line-height: 1.35;
  margin: 0 0 0.2em 0;
  text-indent: 0;
}

.section-title-orig {
  font-family: "EB Garamond", Georgia, serif;
  font-style: italic;
  font-size: 0.95em;
  margin: 0;
  text-indent: 0;
}

.zh-prose {
  text-indent: 2em;
  margin: 0 0 0.75em 0;
  text-align: justify;
}

.zh-emphasis {
  font-family: "LXGW WenKai", "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-weight: bold;
}

.gloss-anchor {
  border-bottom: 1px solid #9e2a2b;
}

.gloss-ref {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75em;
  vertical-align: super;
  line-height: 1;
  color: #9e2a2b;
  text-decoration: none;
  margin-left: 1px;
}

.fn-ref {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72em;
  vertical-align: super;
  line-height: 1;
  color: #161514;
  border: 1px solid #161514;
  padding: 0 3px;
  text-decoration: none;
  margin: 0 2px;
}

.block-divider {
  text-align: center;
  margin: 1.5em 0;
  font-family: "EB Garamond", Georgia, serif;
  letter-spacing: 0.4em;
  text-indent: 0;
}

.notes-rail {
  margin-top: 2.4em;
  padding-top: 1em;
  border-top: 2px solid #161514;
}

.notes-rail-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  margin-bottom: 1em;
  font-weight: bold;
}

.note-aside {
  border-top: 1px solid #c5bfb3;
  padding: 0.65em 0 0.75em;
  margin: 0;
}

.fn-aside {
  border: 1px solid #161514;
  padding: 0.65em 0.8em;
  margin: 0.6em 0;
}

.note-head {
  margin: 0 0 0.25em 0;
  text-indent: 0;
  font-size: 0.88em;
}

.note-backlink {
  font-family: "JetBrains Mono", monospace;
  color: #9e2a2b;
  text-decoration: none;
  font-weight: bold;
  margin-right: 0.4em;
}

.fn-badge {
  font-family: "JetBrains Mono", monospace;
  background-color: #161514;
  color: #f8f5ee;
  padding: 1px 5px;
  font-size: 0.82em;
  text-decoration: none;
}

.note-anchor-label {
  font-family: "LXGW WenKai", "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-weight: bold;
}

.note-body {
  margin: 0;
  text-indent: 0;
  font-size: 0.86em;
  line-height: 1.7;
  text-align: justify;
}

.note-return {
  font-family: "JetBrains Mono", monospace;
  text-decoration: none;
  color: #9e2a2b;
  margin-left: 0.3em;
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
  const coverPng = new Resvg(coverSvg, {
    font: {
      loadSystemFonts: true,
      fontFiles,
      defaultFontFamily: 'LXGW Neo ZhiSong',
      serifFamily: 'LXGW Neo ZhiSong',
      monospaceFamily: 'JetBrains Mono'
    }
  }).render().asPng();

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
      name: 'OEBPS/cover.png',
      data: coverPng
    },
    {
      name: 'OEBPS/cover.xhtml',
      data: Buffer.from(
        wrapXhtmlDoc(
          `${book.titleZh} — 书封`,
          `<div class="cover-wrap"><img src="cover.png" alt="${escapeXml(book.titleZh)}" /></div>`
        ),
        'utf8'
      )
    }
  ];

  // Build intro.xhtml (Title Card + Academic Introduction + Dedication + Epigraph)
  const firstChapter = book.chapters[0];
  const dedicationGlosses = firstChapter?.dedication?.glosses ?? [];
  let dedicationHtml = '';
  if (firstChapter?.dedication) {
    const ded = firstChapter.dedication;
    dedicationHtml = `
      <div class="dedication-box">
        <p class="dedication-to">${escapeXml(ded.toZh)}</p>
        ${ded.noteZh ? renderParagraphXhtml(ded.noteZh, maps, book.authorNoteLabel) : ''}
        ${ded.signatureZh ? `<p class="epigraph-source">${escapeXml(ded.signatureZh)}</p>` : ''}
      </div>`;
  }

  let epigraphHtml = '';
  if (firstChapter?.epigraph) {
    const epi = firstChapter.epigraph;
    epigraphHtml = `
      <div class="epigraph-box">
        <p class="epigraph-quote">${escapeXml(epi.quoteZh)}</p>
        <p class="epigraph-source">— ${escapeXml(epi.authorZh)}，${escapeXml(epi.sourceZh)}</p>
      </div>`;
  }

  const introBody = `
    <div class="title-card">
      <p class="meta-vol">${escapeXml(book.year)}</p>
      <h1 class="book-title-zh">${escapeXml(book.titleZh)}</h1>
      <p class="book-subtitle-zh">${escapeXml(book.subtitleZh)}</p>
      <p class="book-title-orig">${escapeXml(book.titleOriginal)} — ${escapeXml(book.subtitleOriginal)}</p>
      <p class="book-author">${escapeXml(book.authorZh)}（${escapeXml(book.authorOriginal)}）</p>
      <p class="book-author">${escapeXml(book.publisher)}</p>
    </div>
    <div class="intro-section">
      ${renderParagraphXhtml(book.descriptionZh, maps, book.authorNoteLabel)}
    </div>
    ${dedicationHtml}
    ${epigraphHtml}
    ${renderNotesSectionXhtml(dedicationGlosses, [], maps, book.authorNoteLabel)}
  `;

  entries.push({
    name: 'OEBPS/intro.xhtml',
    data: Buffer.from(wrapXhtmlDoc(`${book.titleZh} — 导读与卷首`, introBody), 'utf8')
  });

  // Build section files
  const allSections = book.chapters.flatMap((ch) => ch.sections);
  const sectionFiles: { id: string; href: string; title: string }[] = [];

  allSections.forEach((sec, idx) => {
    const fileNum = String(idx + 1).padStart(2, '0');
    const filename = `sec-${fileNum}.xhtml`;
    const itemId = `sec-${fileNum}`;
    const navTitle = `${sec.roman}  ${sec.titleZh}`;
    sectionFiles.push({ id: itemId, href: filename, title: navTitle });

    const sectionGlosses: GlossItem[] = [];
    const sectionFn: AuthorNote[] = [];

    const blocksHtml = sec.blocks
      .map((blk: ParagraphBlock) => {
        if (blk.type === 'divider') {
          return `<p class="block-divider">* * *</p>`;
        }
        if (blk.glosses) sectionGlosses.push(...blk.glosses);
        if (blk.authorNotes) sectionFn.push(...blk.authorNotes);
        return renderParagraphXhtml(blk.zh, maps, book.authorNoteLabel);
      })
      .join('\n');

    const secBody = `
      <header class="section-header">
        <p class="section-roman">${escapeXml(sec.roman)}</p>
        <h1 class="section-title-zh">${escapeXml(sec.titleZh)}</h1>
        ${
          sec.titleOriginal
            ? `<p class="section-title-orig">${escapeXml(sec.titleOriginal)}</p>`
            : ''
        }
      </header>
      <div class="section-body">
        ${blocksHtml}
      </div>
      ${renderNotesSectionXhtml(sectionGlosses, sectionFn, maps, book.authorNoteLabel)}
    `;

    entries.push({
      name: `OEBPS/${filename}`,
      data: Buffer.from(wrapXhtmlDoc(navTitle, secBody), 'utf8')
    });
  });

  // Build nav.xhtml (EPUB 3 Navigation Document)
  const navItemsHtml = [
    `<li><a href="cover.xhtml">书封</a></li>`,
    `<li><a href="intro.xhtml">导读与卷首</a></li>`,
    ...sectionFiles.map((s) => `<li><a href="${s.href}">${escapeXml(s.title)}</a></li>`)
  ].join('\n        ');

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
    <h1 class="section-title-zh">目录</h1>
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

  // Build toc.ncx (EPUB 2 backward-compatible TOC)
  const ncxPoints = [
    { id: 'nav-intro', href: 'intro.xhtml', title: '导读与卷首' },
    ...sectionFiles.map((s) => ({ id: `nav-${s.id}`, href: s.href, title: s.title }))
  ]
    .map(
      (pt, i) => `
    <navPoint id="${pt.id}" playOrder="${i + 1}">
      <navLabel><text>${escapeXml(pt.title)}</text></navLabel>
      <content src="${pt.href}"/>
    </navPoint>`
    )
    .join('');

  const tocNcx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="urn:ebr:${escapeXml(book.slug)}"/>
    <meta name="dtb:depth" content="1"/>
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
    `<item id="cover-image" href="cover.png" media-type="image/png" properties="cover-image"/>`,
    `<item id="cover-svg" href="cover.svg" media-type="image/svg+xml"/>`,
    `<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>`,
    `<item id="intro" href="intro.xhtml" media-type="application/xhtml+xml"/>`,
    `<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>`,
    `<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>`,
    ...sectionFiles.map(
      (s) => `<item id="${s.id}" href="${s.href}" media-type="application/xhtml+xml"/>`
    )
  ].join('\n    ');

  const spineItems = [
    `<itemref idref="cover"/>`,
    `<itemref idref="intro"/>`,
    `<itemref idref="nav"/>`,
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
    <reference type="text" title="导读与卷首" href="intro.xhtml"/>
    <reference type="toc" title="目录" href="nav.xhtml"/>
  </guide>
</package>`;

  entries.push({
    name: 'OEBPS/content.opf',
    data: Buffer.from(contentOpf, 'utf8')
  });

  const hasher = createHash('sha256');
  hasher.update('azw3-cover-v2-share-not-sync');
  for (const e of entries) {
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

function convertEpubToAzw3(bin: string, epubPath: string, azw3Path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // --share-not-sync 避免写入伪造 UUID 的 EXTH 113 (ASIN) 与 EXTH 501 (EBOK)，
    // 防止 Kindle E-Ink 设备在联网状态下拿伪 ASIN 请求亚马逊封面服务器 404 后冲掉本地书架封面缩略图
    const child = spawn(bin, [epubPath, azw3Path, '--share-not-sync'], {
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
      if (code === 0) resolve();
      else reject(new Error(`ebook-convert exited with code ${code}: ${stderr}`));
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
  if (convertQueue.length > 0 && !bin) throw new Error('未找到 Calibre ebook-convert');
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
