export type SubjectId =
  | "geography-basic"
  | "geography-advanced"
  | "history-basic"
  | "world-history-advanced"
  | "japanese-history-advanced"
  | "public"
  | "ethics"
  | "politics-economics";

export type CurriculumNodeLevel =
  | "subject"
  | "part"
  | "chapter"
  | "section";

export type CurriculumNode = {
  id: string;
  subjectId: SubjectId;
  level: CurriculumNodeLevel;
  title: string;
  parentId?: string;
  order: number;
};

export type ContentType =
  | "section-summary"
  | "term-card"
  | "person-card"
  | "event-card"
  | "system-card"
  | "thought-card"
  | "flow-note"
  | "comparison-note"
  | "crosslink-note"
  | "map-note"
  | "timeline-note"
  | "source-note"
  | "supplement-note";

export type DatePrecision =
  | "exact"
  | "year"
  | "decade"
  | "century"
  | "period"
  | "unknown";

export type RelatedHintRelation =
  | "background"
  | "cause"
  | "effect"
  | "same-concept"
  | "contrast"
  | "example"
  | "influence"
  | "reference";

export type RelatedHint = {
  label: string;
  relation: RelatedHintRelation;
  targetSubjectId?: SubjectId;
  targetCurriculumNodeId?: string;
  targetContentId?: string;
  conceptTags?: string[];
  eventTags?: string[];
  peopleTags?: string[];
  regionTags?: string[];
  lawTags?: string[];
  institutionTags?: string[];
};

export type ContentItem = {
  id: string;
  curriculumNodeId: string;
  subjectId: SubjectId;
  type: ContentType;
  title: string;
  body: string;
  shortText?: string;
  order: number;

  // 暗記カード化
  frontText?: string;
  backText?: string;
  isMemorizationTarget?: boolean;

  // 年代・時期
  periodLabel?: string;
  startYear?: number;
  endYear?: number;
  datePrecision?: DatePrecision;
  isApproximateDate?: boolean;

  // 横断タグ
  regionTags?: string[];
  peopleTags?: string[];
  eventTags?: string[];
  conceptTags?: string[];
  institutionTags?: string[];
  lawTags?: string[];
  workTags?: string[];
  sourceTags?: string[];

  // 学習・入試・技能
  examTags?: string[];
  skillTags?: string[];

  // 関連
  relatedContentIds?: string[];
  relatedReferenceIds?: string[];
  relatedHints?: RelatedHint[];
};
