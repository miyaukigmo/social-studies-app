export type ContentType =
  | "section-summary"
  | "term-card"
  | "person-card"
  | "event-card"
  | "system-card"
  | "thought-card"
  | "flow-note"
  | "comparison-note"
  | "timeline-note"
  | "map-note"
  | "supplement-note";

export type ContentItem = {
  id: string;
  curriculumNodeId: string;
  type: ContentType;
  title: string;
  body: string;
  order: number;

  period?: string;
  region?: string;
  conceptTags?: string[];
  examTags?: string[];
  relatedContentIds?: string[];

  // 拡張フィールド
  shortText?: string;
  frontText?: string;
  backText?: string;
  isMemorizationTarget?: boolean;
};
