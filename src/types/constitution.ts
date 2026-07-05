export type ConstitutionSource = {
  sourceName: string;
  lawId?: string;
  note?: string;
};

export type ConstitutionMeta = {
  id: string;
  title: string;
  lawNumber: string;
  promulgatedAt: string;
  enforcedAt: string;
  source: ConstitutionSource;
};

export type ConstitutionChapter = {
  id: string;
  title: string;
  titleKana?: string;
  order: number;
  articleRange?: string;
  description?: string;
};

export type ConstitutionPreamble = {
  id: string;
  title: "前文";
  chapterId: "preamble";
  paragraphs: ConstitutionParagraph[];
  sourceNote?: string;
};

export type ConstitutionArticle = {
  id: string;
  chapterId: string;
  articleNumber: number;
  articleLabel: string;
  caption?: string;
  paragraphs: ConstitutionParagraph[];
  sourceNote?: string;
};

export type ConstitutionParagraph = {
  paragraphNumber?: number;
  text: string;
  items?: ConstitutionItem[];
};

export type ConstitutionItem = {
  itemLabel: string;
  text: string;
  subItems?: ConstitutionSubItem[];
};

export type ConstitutionSubItem = {
  subItemLabel: string;
  text: string;
};

export type ConstitutionArticleNote = {
  id: string;
  targetId: string;
  targetType: "preamble" | "article";
  summary: string;
  keywords: string[];
  relatedStudyContentIds?: string[];
  relatedCurriculumNodeIds?: string[];
  memo?: string;
};

export type ConstitutionChapterNote = {
  id: string;
  chapterId: string;
  summary: string;
  keyPoints: string[];
  importantArticleIds: string[];
  keywords: string[];
};

export type ConstitutionDisplayMode = "text-only" | "with-notes" | "notes-focused";

export type ConstitutionReferenceData = {
  meta: ConstitutionMeta;
  chapters: ConstitutionChapter[];
  preamble: ConstitutionPreamble;
  articles: ConstitutionArticle[];
  notes: ConstitutionArticleNote[];
  chapterNotes?: ConstitutionChapterNote[];
};

export type ConstitutionSearchResult =
  | {
      type: "preamble";
      id: string;
      data: ConstitutionPreamble;
      matchedFields: string[];
    }
  | {
      type: "article";
      id: string;
      data: ConstitutionArticle;
      matchedFields: string[];
    };
