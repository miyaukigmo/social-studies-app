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

export type Subject = {
  id: SubjectId;
  title: string;
  shortTitle?: string;
  order: number;
  colorKey?: string;
};
