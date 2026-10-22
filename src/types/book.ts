export interface GlossItem {
  id: string;
  /** 正文被标记的中文词句 */
  anchor: string;
  /** 旁注正文（支持 **霞鹜文楷强调**） */
  content: string;
}

export interface AuthorNote {
  id: string;
  fr?: string;
  original?: string;
  zh: string;
}

export interface ParagraphBlock {
  id: string;
  type?: 'paragraph' | 'divider';
  num?: string;
  fr?: string;
  original?: string;
  /** 中文精译（支持 **文楷强调**、[词句]{#gloss-id} 与 [^fn-id]） */
  zh: string;
  /** 原书作者自注 */
  authorNotes?: AuthorNote[];
  /** 伴读旁注 (Gloss) */
  glosses?: GlossItem[];
}

export interface BookSection {
  id: string;
  roman: string;
  titleOriginal: string;
  titleZh: string;
  blocks: ParagraphBlock[];
}

export interface BookChapter {
  id: string;
  number: string;
  titleOriginal: string;
  titleZh: string;
  epigraph?: {
    quoteZh: string;
    authorZh: string;
    sourceZh: string;
  };
  dedication?: {
    toOriginal?: string;
    toZh: string;
    noteZh?: string;
    signatureZh?: string;
    glosses?: GlossItem[];
  };
  sections: BookSection[];
}

export interface BookMeta {
  slug: string;
  vol: string;
  langOriginal: string;
  titleOriginal: string;
  subtitleOriginal: string;
  titleZh: string;
  subtitleZh: string;
  authorOriginal: string;
  authorZh: string;
  authorNoteLabel: string;
  year: string;
  publisher: string;
  collection: string;
  descriptionZh: string;
  chapters: BookChapter[];
}
