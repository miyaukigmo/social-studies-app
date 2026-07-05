# CONTENT_SCHEMA_v1.md

## 目的

このファイルは、社会科横断学習アプリで使う教材データの型・フィールド・意味を定義する。

目的は、以下を安定して実現すること。

- 科目別の教材表示
- 全科目横断検索
- 年号検索
- 人物検索
- 事件検索
- 地域検索
- 概念検索
- 関連単元表示
- 暗記カード化
- 資料ツールとの接続
- 将来的な再集計・分析

---

## 基本方針

教材コンテンツの基本単位は `ContentItem` とする。

`ContentItem` は、本文だけでなく、検索・再集計・関連表示に必要なメタデータを必ず持つ。

本文に書いた重要情報は、必要に応じてタグや年号フィールドにも入れる。

---

## SubjectId

```ts
export type SubjectId =
  | "geography-basic"
  | "geography-advanced"
  | "history-basic"
  | "world-history-advanced"
  | "japanese-history-advanced"
  | "public"
  | "ethics"
  | "politics-economics";
```

---

## CurriculumNodeLevel

```ts
export type CurriculumNodeLevel =
  | "subject"
  | "part"
  | "chapter"
  | "section";
```

---

## CurriculumNode

```ts
export type CurriculumNode = {
  id: string;
  subjectId: SubjectId;
  level: CurriculumNodeLevel;
  title: string;
  parentId?: string;
  order: number;
};
```

### フィールド説明

| field       | 必須 | 説明                                 |
| ----------- | -: | ---------------------------------- |
| `id`        | 必須 | カリキュラムノードID                        |
| `subjectId` | 必須 | 所属科目                               |
| `level`     | 必須 | subject / part / chapter / section |
| `title`     | 必須 | 表示名                                |
| `parentId`  | 任意 | 親ノードID                             |
| `order`     | 必須 | 並び順                                |

---

## ContentType

```ts
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
```

---

## ContentType の意味

| type              | 用途          |     暗記対象 |
| ----------------- | ----------- | -------: |
| `section-summary` | 節全体の要約      | 原則 false |
| `term-card`       | 重要用語        |  原則 true |
| `person-card`     | 人物          |  原則 true |
| `event-card`      | 事件・出来事      |  原則 true |
| `system-card`     | 制度・法律・組織    |  原則 true |
| `thought-card`    | 思想・理論・概念    |  原則 true |
| `flow-note`       | 流れ・因果関係     | 原則 false |
| `comparison-note` | 比較・対立構造     | 原則 false |
| `crosslink-note`  | 他科目との接続     | 原則 false |
| `map-note`        | 地図・空間理解     | 原則 false |
| `timeline-note`   | 年表・時系列      | 原則 false |
| `source-note`     | 資料・史料・条文・統計 | 原則 false |
| `supplement-note` | 補足・注意点      | 原則 false |

---

## DatePrecision

```ts
export type DatePrecision =
  | "exact"
  | "year"
  | "decade"
  | "century"
  | "period"
  | "unknown";
```

### 意味

| value     | 意味        |
| --------- | --------- |
| `exact`   | 年月日まで明確   |
| `year`    | 年単位で明確    |
| `decade`  | 10年単位     |
| `century` | 世紀単位      |
| `period`  | 時代・期間名で扱う |
| `unknown` | 不明または不要   |

---

## RelatedHintRelation

```ts
export type RelatedHintRelation =
  | "background"
  | "cause"
  | "effect"
  | "same-concept"
  | "contrast"
  | "example"
  | "influence"
  | "reference";
```

### 意味

| relation       | 意味        |
| -------------- | --------- |
| `background`   | 背景        |
| `cause`        | 原因        |
| `effect`       | 結果・影響     |
| `same-concept` | 同じ概念でつながる |
| `contrast`     | 対立・比較     |
| `example`      | 具体例       |
| `influence`    | 影響関係      |
| `reference`    | 資料・参照     |

---

## RelatedHint

```ts
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
};
```

### フィールド説明

| field                    | 必須 | 説明                  |
| ------------------------ | -: | ------------------- |
| `label`                  | 必須 | 関連先の説明              |
| `relation`               | 必須 | 関係の種類               |
| `targetSubjectId`        | 任意 | 関連しそうな科目            |
| `targetCurriculumNodeId` | 任意 | 関連する節・章ID           |
| `targetContentId`        | 任意 | 関連する ContentItem ID |
| `conceptTags`            | 任意 | 関連概念                |
| `eventTags`              | 任意 | 関連事件                |
| `peopleTags`             | 任意 | 関連人物                |
| `regionTags`             | 任意 | 関連地域                |

まだ関連先IDが存在しない場合は、`label` と `relation` とタグだけでもよい。

---

## ContentItem

```ts
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
```

---

## ContentItem 必須フィールド

| field              | 説明        |
| ------------------ | --------- |
| `id`               | コンテンツ固有ID |
| `curriculumNodeId` | 所属する節ID   |
| `subjectId`        | 所属科目      |
| `type`             | カード種別     |
| `title`            | 表示タイトル    |
| `body`             | 本文        |
| `order`            | 節内での並び順   |

---

## ContentItem 推奨フィールド

可能な限り入れる。

| field          | 説明            |
| -------------- | ------------- |
| `shortText`    | 検索結果・一覧用の短い説明 |
| `conceptTags`  | 横断検索の中心       |
| `regionTags`   | 地域検索用         |
| `peopleTags`   | 人物検索用         |
| `eventTags`    | 事件検索用         |
| `periodLabel`  | 時代・期間名        |
| `relatedHints` | 将来の関連表示候補     |

---

## 年号フィールド

### 単年

```ts
startYear: 1789,
datePrecision: "year",
```

### 期間

```ts
startYear: 1914,
endYear: 1918,
periodLabel: "第一次世界大戦",
datePrecision: "year",
```

### 世紀

```ts
periodLabel: "紀元前5世紀",
datePrecision: "century",
isApproximateDate: true,
```

### 紀元前

紀元前は負数で扱う。

```ts
startYear: -431,
endYear: -404,
periodLabel: "ペロポネソス戦争",
datePrecision: "year",
```

---

## タグフィールドの意味

| field             | 用途             |
| ----------------- | -------------- |
| `regionTags`      | 地域・国・都市・広域圏    |
| `peopleTags`      | 人物             |
| `eventTags`       | 事件・出来事         |
| `conceptTags`     | 横断概念           |
| `institutionTags` | 制度・組織          |
| `lawTags`         | 法律・条文・条約       |
| `workTags`        | 著作・作品          |
| `sourceTags`      | 資料・統計・地図・史料    |
| `examTags`        | 入試・定期テスト上の分類   |
| `skillTags`       | 地図読解・資料読解などの技能 |

---

## タグの型について

タグは現時点では `string[]` とする。

ただし、実際に使うタグは `TAG_DICTIONARY_v1.md` に登録された表記を優先する。

新しいタグが必要な場合は、勝手に乱立させず、変更案として提案する。

---

## 暗記カードフィールド

```ts
frontText?: string;
backText?: string;
isMemorizationTarget?: boolean;
```

### 原則

以下は暗記対象にする。

* `term-card`
* `person-card`
* `event-card`
* `system-card`
* `thought-card`

例：

```ts
{
  type: "term-card",
  title: "立憲主義",
  frontText: "立憲主義",
  backText: "国家権力を憲法によって制限し、国民の権利や自由を守ろうとする考え方。",
  isMemorizationTarget: true
}
```

以下は原則として暗記対象にしない。

* `section-summary`
* `flow-note`
* `comparison-note`
* `crosslink-note`
* `map-note`
* `timeline-note`
* `source-note`
* `supplement-note`

---

## relatedContentIds

既に存在する `ContentItem` と接続する場合に使う。

```ts
relatedContentIds: [
  "politics-economics-constitution-popular-sovereignty-summary"
]
```

IDが存在しない未来の関連先には使わない。
その場合は `relatedHints` を使う。

---

## relatedReferenceIds

憲法全文、地図、年表、判例、条約、統計などの資料ツールと接続する場合に使う。

例：

```ts
relatedReferenceIds: [
  "constitution-article-25"
]
```

将来的な例：

```ts
relatedReferenceIds: [
  "constitution-article-25",
  "timeline-1789",
  "map-europe-1815",
  "treaty-versailles-1919"
]
```

---

## source-note の扱い

`source-note` は、資料そのもの、または資料読解の入口として使う。

例：

* 日本国憲法第25条
* フランス人権宣言
* ポツダム宣言
* 世界人口の統計
* 気候区分図
* 選挙制度の比較表

資料本文をそのまま大量にカード内へ入れるのではなく、長い資料は資料ツール側に置き、`relatedReferenceIds` で接続する。

---

## 検索用に重要なフィールド

横断検索では、少なくとも以下を検索対象にする想定。

* `title`
* `body`
* `shortText`
* `frontText`
* `backText`
* `periodLabel`
* `regionTags`
* `peopleTags`
* `eventTags`
* `conceptTags`
* `institutionTags`
* `lawTags`
* `workTags`
* `sourceTags`
* `examTags`
* `skillTags`

---

## 再集計用に重要なフィールド

将来的な集計では、以下を使う想定。

### 年号別

* `startYear`
* `endYear`
* `periodLabel`
* `datePrecision`

### 地域別

* `regionTags`

### 人物別

* `peopleTags`

### 事件別

* `eventTags`

### 概念別

* `conceptTags`

### 制度・法律別

* `institutionTags`
* `lawTags`

### 科目別

* `subjectId`
* `curriculumNodeId`

---

## TypeScript 実装時の注意

巨大データを扱うため、データ配列には必ず明示的な型注釈をつける。

OK：

```ts
export const politicsEconomicsContents: ContentItem[] = [
  // ...
];
```

NG：

```ts
export const politicsEconomicsContents = [
  // ...
] as const;
```

NG寄り：

```ts
export const politicsEconomicsContents = [
  // ...
] satisfies ContentItem[];
```

巨大リテラル型を保持すると TypeScript の型推論が重くなる可能性があるため、教材データでは `ContentItem[]` の明示型を優先する。

---

## 最小の ContentItem 例

```ts
{
  id: "politics-economics-constitution-principles-summary",
  curriculumNodeId: "politics-economics-section-1-2-2",
  subjectId: "politics-economics",
  type: "section-summary",
  title: "日本国憲法の成立",
  body: "日本国憲法は、第二次世界大戦後、ポツダム宣言の受諾と占領改革の中で成立した。大日本帝国憲法を改正する形式をとりながら、国民主権・基本的人権の尊重・平和主義を基本原理とする新しい憲法となった。",
  shortText: "日本国憲法の成立過程と三大原理を扱う。",
  order: 1,
  periodLabel: "戦後改革",
  startYear: 1946,
  datePrecision: "year",
  regionTags: ["日本"],
  eventTags: ["日本国憲法の公布"],
  conceptTags: ["国民主権", "基本的人権", "平和主義", "立憲主義"],
  institutionTags: ["日本国憲法"],
  lawTags: ["日本国憲法"],
  relatedReferenceIds: ["constitution-of-japan"],
  relatedHints: [
    {
      label: "大日本帝国憲法との比較",
      relation: "contrast",
      targetSubjectId: "politics-economics",
      conceptTags: ["立憲主義", "国民主権"]
    }
  ]
}
```

---

## 暗記カード例

```ts
{
  id: "politics-economics-constitution-term-popular-sovereignty",
  curriculumNodeId: "politics-economics-section-1-2-3",
  subjectId: "politics-economics",
  type: "term-card",
  title: "国民主権",
  body: "国の政治の最終的な決定権が国民にあるという考え方。日本国憲法では、天皇主権から国民主権への転換が明確に示された。",
  shortText: "政治の最終的な決定権が国民にあるという考え方。",
  order: 2,
  frontText: "国民主権",
  backText: "国の政治の最終的な決定権が国民にあるという考え方。",
  isMemorizationTarget: true,
  regionTags: ["日本"],
  conceptTags: ["国民主権", "民主主義", "立憲主義"],
  institutionTags: ["日本国憲法"],
  lawTags: ["日本国憲法第1条"],
  relatedReferenceIds: ["constitution-article-1"]
}
```

---

## 禁止事項

以下は禁止する。

* `ContentItem` の型をその場で勝手に変更する
* タグ専用フィールドを本文代わりに使う
* 本文にしか年号を書かない
* 本文にしか人物名を書かない
* 本文にしか概念を書かない
* タグ表記を自由に揺らす
* 存在しない `relatedContentIds` を入れる
* 長い資料本文を `body` に大量に貼る
* 科目ごとに独自の型を作る

---

## 運用方針

この schema は v1.0 として固定する。

変更が必要な場合は、既存データへの影響を確認したうえで、変更案として提案する。

勝手にフィールドを追加・削除・改名しない。
