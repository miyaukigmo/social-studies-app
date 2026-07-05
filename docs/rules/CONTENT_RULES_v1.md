# CONTENT_RULES_v1.md

## 目的

このファイルは、社会科横断学習アプリに入れる教材コンテンツの執筆ルールを定める。

目的は、以下を将来的に可能にすること。

- 全科目横断検索
- 年号検索
- 人物検索
- 事件検索
- 地域検索
- 概念検索
- 関連単元表示
- 資料ツールとの接続
- 暗記カード化
- 授業・復習で使いやすい表示

教材本文だけでなく、検索・再集計・関連表示に使うメタデータを必ずセットで作る。

---

## 基本方針

各コンテンツは、必ず次の2層で作る。

1. 人間が読む本文
2. 横断検索・再集計用のメタデータ

本文に年号・人物・地域・制度・概念を書くだけで終わらせない。

検索や関連表示に使いたい情報は、必ず以下にも入れる。

- `startYear`
- `endYear`
- `periodLabel`
- `regionTags`
- `peopleTags`
- `eventTags`
- `conceptTags`
- `institutionTags`
- `relatedHints`
- `relatedReferenceIds`

---

## 1節あたりの標準構成

各節は、原則として以下の構成で作る。

1. `section-summary`
   - その節全体の要点
2. `term-card`
   - 重要用語
3. `person-card`
   - 人物
4. `event-card`
   - 事件・出来事
5. `system-card`
   - 制度・法律・組織
6. `thought-card`
   - 思想・理論・概念
7. `flow-note`
   - 流れ・因果関係
8. `comparison-note`
   - 比較・対立構造
9. `crosslink-note`
   - 他科目との接続
10. `supplement-note`
   - 注意点・補足

すべてを毎回入れる必要はない。

ただし、各節には原則として以下を必ず入れる。

- `section-summary`
- 重要用語カード
- `flow-note` または `comparison-note`
- `conceptTags`
- 年号がある場合は `startYear` / `endYear`
- 他科目接続できる場合は `relatedHints`

---

## カード粒度

1カードにつき、扱うテーマは1つにする。

よい例：

- 「フランス革命」
- 「人権宣言」
- 「立憲主義」
- 「大日本帝国憲法」
- 「日本国憲法第9条」

避ける例：

- 「フランス革命と産業革命とナポレオン」
- 「日本国憲法の全部」
- 「近代の政治思想いろいろ」

1カードが長くなりすぎる場合は、複数カードに分ける。

---

## カードの役割

各カードは、必ず次のいずれかの役割を持つ。

- 暗記するためのカード
- 理解するためのカード
- 比較するためのカード
- 流れをつかむカード
- 横断するためのカード
- 資料へ飛ぶためのカード

役割が不明なカードは作らない。

---

## 本文の書き方

本文は、以下を満たすように書く。

- 高校社会の内容として正確である
- 授業で説明しやすい
- 暗記だけでなく理解につながる
- 他科目との接続が見える
- 難しすぎる専門用語は必要な場合だけ使う
- 用語を出す場合は、必要に応じて別カード化する
- 一文を長くしすぎない
- 断定しすぎに注意する
- 論争的な内容は、複数の見方があることを示す

---

## 科目別の本文方針

### 歴史系

対象：

- 歴史総合
- 世界史探究
- 日本史探究

基本構成：

- 背景
- 展開
- 結果
- 影響
- 他地域・後世への接続

重視する情報：

- 年号
- 時代
- 地域
- 人物
- 事件
- 国家
- 制度
- 思想
- 因果関係

重視するタグ：

- `startYear`
- `endYear`
- `periodLabel`
- `regionTags`
- `peopleTags`
- `eventTags`
- `conceptTags`
- `institutionTags`

---

### 地理系

対象：

- 地理総合
- 地理探究

基本構成：

- 場所
- 分布
- 要因
- 影響
- 課題

重視する情報：

- 地域
- 地形
- 気候
- 人口
- 都市
- 産業
- 資源
- 交通
- 環境
- 防災
- 地図・GIS

重視するタグ：

- `regionTags`
- `conceptTags`
- `skillTags`
- `sourceTags`

---

### 公民系

対象：

- 公共
- 政治・経済

基本構成：

- 定義
- 制度
- しくみ
- 論点
- 現代社会との関係

重視する情報：

- 制度
- 法律
- 憲法
- 政治機関
- 経済制度
- 社会問題
- 現代的論点
- 判例・資料との接続

重視するタグ：

- `conceptTags`
- `institutionTags`
- `lawTags`
- `examTags`
- `relatedReferenceIds`

---

### 倫理

対象：

- 倫理

基本構成：

- 問い
- 思想家
- 概念
- 対立・比較
- 現代的意味

重視する情報：

- 思想家
- 思想概念
- 著作
- 時代背景
- 対立する思想
- 後世への影響

重視するタグ：

- `peopleTags`
- `conceptTags`
- `workTags`
- `periodLabel`
- `relatedHints`

---

## 暗記カード化ルール

以下の type は、原則として暗記対象にする。

- `term-card`
- `person-card`
- `event-card`
- `system-card`
- `thought-card`

その場合、以下を入れる。

- `frontText`
- `backText`
- `isMemorizationTarget: true`

例：

```ts
frontText: "立憲主義"
backText: "国家権力を憲法によって制限し、国民の権利や自由を守ろうとする考え方。"
isMemorizationTarget: true
```

以下は原則として暗記対象にしない。

* `section-summary`
* `flow-note`
* `comparison-note`
* `crosslink-note`
* `supplement-note`

ただし、必要がある場合は例外として暗記対象にしてよい。

---

## 年号ルール

年号がある場合は、本文だけでなく必ず数値フィールドにも入れる。

例：

```ts
periodLabel: "フランス革命"
startYear: 1789
endYear: 1799
datePrecision: "year"
```

単年の場合：

```ts
startYear: 1789
datePrecision: "year"
```

期間の場合：

```ts
startYear: 1914
endYear: 1918
periodLabel: "第一次世界大戦"
datePrecision: "year"
```

世紀の場合：

```ts
periodLabel: "紀元前5世紀"
datePrecision: "century"
isApproximateDate: true
```

紀元前は負数で扱う。

```ts
startYear: -431
endYear: -404
periodLabel: "ペロポネソス戦争"
```

年号が不明・不要な場合は、無理に入れない。

---

## タグ付けルール

タグは横断検索のために使う。

本文に書いた重要情報は、必要に応じてタグにも入れる。

特に重要なのは以下。

* `regionTags`
* `peopleTags`
* `eventTags`
* `conceptTags`
* `institutionTags`
* `lawTags`
* `workTags`

タグは表記揺れを避ける。

避ける例：

```ts
conceptTags: ["国民主権", "国民の主権", "主権在民"]
```

よい例：

```ts
conceptTags: ["国民主権"]
```

新しいタグが必要な場合は、勝手に増やさず、変更案として提案する。

---

## conceptTags の重要性

`conceptTags` は全科目横断の中心になる。

必ず丁寧につける。

例：

```ts
conceptTags: ["市民革命", "人権", "国民主権", "立憲主義"]
```

歴史の出来事でも、単なる事件名だけで終わらせない。

悪い例：

```ts
eventTags: ["フランス革命"]
```

よい例：

```ts
eventTags: ["フランス革命"]
conceptTags: ["市民革命", "人権", "国民主権", "近代国家"]
```

---

## relatedHints ルール

まだ関連先のカードIDが存在しない場合でも、将来つなげたい内容は `relatedHints` に入れる。

例：

```ts
relatedHints: [
  {
    label: "日本国憲法の国民主権",
    relation: "same-concept",
    targetSubjectId: "politics-economics",
    conceptTags: ["国民主権", "立憲主義"]
  }
]
```

`relatedHints` は、将来の関連単元表示の候補として使う。

使える relation は原則として以下。

* `background`
* `cause`
* `effect`
* `same-concept`
* `contrast`
* `example`
* `influence`
* `reference`

---

## relatedReferenceIds ルール

憲法全文、年表、地図、判例、条約、統計などの資料ツールに接続する場合は `relatedReferenceIds` を使う。

例：

```ts
relatedReferenceIds: ["constitution-article-25"]
```

本文中で憲法や条約に触れる場合、可能なら資料ツールへの接続を意識する。

---

## shortText ルール

`shortText` は一覧表示や検索結果に出す短い説明として使う。

原則として1文で書く。

例：

```ts
shortText: "国民が健康で文化的な最低限度の生活を営む権利を定めたもの。"
```

本文の冒頭をそのまま切り出すだけでなく、検索結果で意味が伝わるように書く。

---

## section-summary ルール

`section-summary` は、その節を開いたときに最初に読むカード。

次を含める。

* この節で何を学ぶか
* 何が重要か
* 他の単元とどうつながるか

長くしすぎない。

---

## flow-note ルール

`flow-note` は、背景・原因・展開・結果・影響を整理するカード。

歴史系では特に重要。

例：

```txt
背景 → 出来事 → 結果 → 影響
```

地理系では、要因と結果の流れとして書く。

例：

```txt
地形・気候 → 産業分布 → 人口移動 → 都市問題
```

---

## comparison-note ルール

`comparison-note` は、似たものや対立するものを整理するカード。

例：

* 大日本帝国憲法と日本国憲法
* 衆議院と参議院
* 自由権と社会権
* 形式的平等と実質的平等
* 直接民主制と間接民主制
* 資本主義と社会主義

比較軸を明確にする。

---

## crosslink-note ルール

`crosslink-note` は、他科目・他単元との接続を明示するカード。

例：

```txt
フランス革命は、世界史では市民革命として扱うが、公共・政治経済では人権・国民主権・立憲主義の理解につながる。
```

`relatedHints` も必ずセットで入れる。

---

## supplement-note ルール

`supplement-note` は、誤解しやすい点・発展的な補足・授業上の注意を扱う。

例：

* 「国権の最高機関」は国会が他機関を無制限に支配する意味ではない
* 「公共の福祉」は人権を何でも制限できる魔法の言葉ではない
* 「平和主義」は第9条の条文だけでなく安全保障政策との関係で議論される

---

## 品質チェック

各節を作ったら、最後に以下を確認する。

* `section-summary` がある
* 重要用語がカード化されている
* 年号があるものに `startYear` / `endYear` がある
* 地域があるものに `regionTags` がある
* 人物があるものに `peopleTags` がある
* 事件があるものに `eventTags` がある
* 制度・法律があるものに `institutionTags` / `lawTags` がある
* 概念横断できるものに `conceptTags` がある
* 他科目と接続できるものに `relatedHints` がある
* 資料ツールに接続できるものに `relatedReferenceIds` がある
* カードが長すぎない
* 同じ内容のカードが重複していない
* タグ表記が揺れていない

---

## 禁止事項

以下は禁止する。

* 本文だけを書いてメタデータを入れない
* タグを思いつきで増やす
* 同じ意味のタグを複数表記で作る
* ContentItem の型を勝手に変更する
* IDルールを勝手に変更する
* 1カードに複数テーマを詰め込みすぎる
* 史実・制度・条文を曖昧な記憶だけで断定する
* 論争的内容を一つの見方だけで断定する
* 特定教科書の本文をそのまま写す

---

## 出力ルール

単元内容を作るときは、原則として以下の形で出力する。

```ts
export const xxxContents: ContentItem[] = [
  // ContentItem
];
```

または、既存プロジェクト構成に合わせた実装指示文として出力する。

ユーザーが「実装指示で」と言った場合は、実装AIにそのまま渡せる形で書く。

ユーザーが「内容だけ」と言った場合は、ContentItem 配列のみを出す。

---

## 運用ルール

今後、単元内容を作るときは毎回この順番で行う。

1. 節の役割を確認する
2. 必要なカード種類を選ぶ
3. 本文を書く
4. 暗記カード化できるものに `frontText` / `backText` を入れる
5. 年号・地域・人物・事件・制度・概念タグを入れる
6. `relatedHints` を入れる
7. 必要なら `relatedReferenceIds` を入れる
8. タグ表記の揺れを確認する
9. 実装用にコピペしやすい形で出力する

---

## 最終方針

科目ごとに本文の書き方は変えてよい。

ただし、以下は全科目で統一する。

* ContentItem の型
* カード粒度
* タグ方針
* 年号の扱い
* 関連ヒントの扱い
* 暗記カード化ルール
* 出力形式

これにより、将来的な全科目横断検索・年号検索・人物検索・概念検索・関連単元表示・資料ツール接続を可能にする。
