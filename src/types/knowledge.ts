// 科目の定義（新学習指導要領に基づく8科目）
export type Subject =
  | "geographyBasic"       // 地理総合
  | "geographyAdvanced"    // 地理探究
  | "historyBasic"         // 歴史総合
  | "worldHistoryAdvanced" // 世界史探究
  | "japaneseHistoryAdvanced" // 日本史探究
  | "public"               // 公共
  | "ethics"               // 倫理
  | "politicsEconomics";   // 政治・経済

// --- 将来のツリー構造用データ型（今回は想定のみ） ---
export type Part = {
  id: string;
  title: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  sections: Section[];
};

export type Section = {
  id: string;
  title: string;
  contents: ContentBlock[]; // 節の中には様々なコンテンツが入る
};

// 将来想定されるコンテンツのタイプ
export type ContentType =
  | "summary"       // 節まとめ
  | "term"          // 用語カード
  | "person"        // 人物カード
  | "event"         // 事件カード
  | "system"        // 制度カード
  | "philosophy"    // 思想カード
  | "flow"          // 流れ・因果関係メモ
  | "comparison"    // 比較メモ
  | "chronology"    // 年表メモ
  | "map"           // 地図メモ
  | "note";         // 補足メモ

// 節の中に入る個々のコンテンツブロック（知識カード等の拡張版）
export type ContentBlock = {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  period?: string;
  region?: string;
  examPoint?: string;
  whyItMatters?: string;
  relatedIds?: string[];
  tags?: string[];
};
// --------------------------------------------------

// 従来のKnowledgeCard型（今回のバージョン互換用）
export type KnowledgeCard = {
  id: string;
  title: string;
  subject: Subject;
  courseLabel?: string;
  period?: string;
  region?: string;
  summary: string;
  examPoint: string;
  whyItMatters?: string;
  relatedCardIds?: string[];
  philosophyLinks?: string[];
  tags?: string[];
};

export type CountryData = {
  id: string; // ISO 3166-1 alpha-3 code
  name: string;
  capital?: string;
  region?: string;
  description?: string;
};
