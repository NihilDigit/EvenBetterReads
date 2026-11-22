export type BookCategory =
  | 'philosophy'
  | 'literature'
  | 'politics'
  | 'economics'
  | 'history';

export interface GlossItem {
  id: string;
  /** 正文被标记的中文词句 */
  anchor: string;
  /** 旁注正文（支持 **霞鹜文楷强调**） */
  content: string;
  /** 可选：单条旁注独立记录译注 AI 模型 */
  aiModel?: string;
}

export interface AuthorNote {
  id: string;
  fr?: string;
  original?: string;
  zh: string;
}

export interface ParagraphBlock {
  id: string;
  type?: 'paragraph' | 'verse' | 'divider';
  num?: string;
  fr?: string;
  original?: string;
  /** 中文精译（支持 **文楷强调**、[词句]{#gloss-id} 与 [^fn-id]） */
  zh: string;
  /** 原书作者自注 */
  authorNotes?: AuthorNote[];
  /** 伴读旁注 (Gloss) */
  glosses?: GlossItem[];
  /** 可选：单段独立记录译注 AI 模型 */
  aiModel?: string;
}

export interface EpigraphData {
  quoteZh: string;
  authorZh: string;
  sourceZh: string;
}

export interface BookSection {
  id: string;
  roman: string;
  titleOriginal: string;
  titleZh: string;
  /** 可选：本节专属译注 AI 模型（覆盖 chapter.aiModel 与 book.aiModel） */
  aiModel?: string;
  epigraph?: EpigraphData;
  blocks: ParagraphBlock[];
}

export interface BookChapter {
  id: string;
  number: string;
  titleOriginal: string;
  titleZh: string;
  /** 可选：本卷/章专属译注 AI 模型（覆盖 book.aiModel） */
  aiModel?: string;
  epigraph?: EpigraphData;
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
  /** 学科与体裁分类（支持多标签归类） */
  categories?: BookCategory[];
  /** 全书默认译注 AI 模型（如 'Gemini-4-Argon'、'Gemini-4-Carbon'） */
  aiModel?: string;
  /** 可选：导读专属撰写 AI 模型（默认继承 aiModel） */
  descriptionAiModel?: string;
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

/** 书架首页专用的轻量目录元数据 */
export interface BookCatalogItem {
  slug: string;
  vol: string;
  categories: BookCategory[];
  /** 汇总本书各部分涉及的全部 AI 译注模型（去重保序） */
  aiModels: string[];
  titleOriginal: string;
  subtitleOriginal: string;
  titleZh: string;
  subtitleZh: string;
  authorOriginal: string;
  authorZh: string;
  year: string;
  publisher: string;
  collection: string;
  descriptionZh: string;
  sectionCount: number;
  glossCount: number;
  charCount: number;
}
