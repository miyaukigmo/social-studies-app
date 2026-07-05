# 社会科横断学習アプリ：教材データ受け渡し・実装運用ルール

このプロジェクトでは、ChatGPT側で高校社会の教材内容を `ContentItem[]` 形式で作成し、それをバイブコーディングAIに渡してアプリへ実装する。

バイブコーディングAIは、以下の4つのルールファイルを必ず前提にすること。

* `CONTENT_RULES_v1.md`
* `CONTENT_SCHEMA_v1.md`
* `TAG_DICTIONARY_v1.md`
* `ID_RULES_v1.md`

## 1. 役割分担

### ChatGPT側の役割

ChatGPTは、主に以下を行う。

* 高校社会の範囲・教科書的な進め方に沿って教材内容を作る
* 単元・節ごとに必要な内容を判断する
* `ContentItem[]` 形式で教材データを出力する
* 年号・地域・人物・事件・制度・概念タグを付ける
* 暗記カード化できるものに `frontText` / `backText` を付ける
* 資料ツールと接続できるものに `relatedReferenceIds` を付ける
* まだ実在しない関連先は `relatedContentIds` ではなく `relatedHints` に入れる
* 新規タグが必要な場合は、勝手に追加せず「新規タグ候補」として提案する

### バイブコーディングAI側の役割

バイブコーディングAIは、主に以下を行う。

* ChatGPTから渡された `ContentItem[]` を既存プロジェクトに実装する
* 既存の型定義・ファイル構成・import/export 形式に合わせて配置する
* `ContentItem` の型を勝手に変更しない
* `SubjectId`、`ContentType`、タグ分類、IDルールを勝手に変更しない
* 既存IDを勝手に変更しない
* `relatedContentIds` に存在しないIDが入っていないか確認する
* タグ表記が `TAG_DICTIONARY_v1.md` と大きくズレていないか確認する
* TypeScriptエラーが出ないように整える
* 必要なら一覧へのexport追加、検索対象への登録、ルーティング接続などを行う

## 2. 出力単位の考え方

教材内容は、一度に大量生成しすぎない。

原則として、1回の出力は以下のどちらかに収める。

* 1〜3節分
* `ContentItem` でおよそ8〜20個程度

対象範囲が大きい場合は、ChatGPT側で分割案を出し、第1便から順に作成する。

分割基準は以下を優先する。

1. 高校社会の単元構成として自然であること
2. 授業で説明する順番として自然であること
3. 1つのファイル・1つの配列として実装しやすいこと
4. `ContentItem` の品質が落ちない量であること

例：

ユーザーが
「倫理の以下の部分をお願い：青年期の意義、自己形成とアイデンティティ、欲求と適応、パーソナリティ、感情・認知・発達、他者との関係、自己実現と生きがい、キャリア形成と社会参加」
のように広い範囲を渡した場合、ChatGPTは一括で雑に作らず、以下のように分割する。

* 第1便：青年期の意義／自己形成とアイデンティティ／欲求と適応
* 第2便：パーソナリティ／感情・認知・発達／他者との関係
* 第3便：自己実現と生きがい／キャリア形成と社会参加

## 3. ChatGPTから渡される出力形式

ChatGPTから渡される内容は、基本的に以下のどちらかである。

### A. ContentItem配列

```ts
export const ethicsYouthContents: ContentItem[] = [
  // ContentItem
];
```

この場合、バイブコーディングAIは、内容を勝手に要約・改変せず、型・ID・タグ・import/export を確認しながら実装する。

### B. 実装指示文

ファイル追加、既存ファイル修正、export追加、表示対応などが必要な場合、ChatGPTは実装指示文として出力する。

この場合、バイブコーディングAIは、指示に沿って既存構成へ反映する。

## 4. ContentItem実装時の必須確認

各 `ContentItem` には、少なくとも以下が必要。

* `id`
* `curriculumNodeId`
* `subjectId`
* `type`
* `title`
* `body`
* `order`

可能な限り、以下も入れる。

* `shortText`
* `periodLabel`
* `startYear`
* `endYear`
* `datePrecision`
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
* `relatedContentIds`
* `relatedReferenceIds`
* `relatedHints`

特に `conceptTags` は横断検索の中心なので、空欄にしすぎない。

## 5. 暗記カード化の扱い

以下の `type` は、原則として暗記対象にする。

* `term-card`
* `person-card`
* `event-card`
* `system-card`
* `thought-card`

暗記対象の場合は、以下を入れる。

```ts
frontText: "表面に出す語句",
backText: "裏面に出す説明",
isMemorizationTarget: true
```

以下の `type` は、原則として暗記対象にしない。

* `section-summary`
* `flow-note`
* `comparison-note`
* `crosslink-note`
* `map-note`
* `timeline-note`
* `source-note`
* `supplement-note`

## 6. relatedContentIds と relatedHints の扱い

`relatedContentIds` には、実在する `ContentItem.id` だけを入れる。

まだ作っていないカードや、将来接続したい単元は `relatedContentIds` に推測で入れない。

その場合は `relatedHints` を使う。

例：

```ts
relatedHints: [
  {
    label: "公共のアイデンティティ論との接続",
    relation: "same-concept",
    targetSubjectId: "public",
    conceptTags: ["個人", "社会", "自己形成"]
  }
]
```

バイブコーディングAIは、`relatedContentIds` に存在しないIDが入っていた場合、勝手に架空IDを作らず、修正候補として報告する。

## 7. relatedReferenceIds の扱い

憲法、条約、宣言、判例、年表、地図、統計などの資料ツールに接続できる内容は、`relatedReferenceIds` を使う。

例：

```ts
relatedReferenceIds: ["constitution-article-13"]
```

ただし、資料ツール側にまだIDが存在しない場合は、無理に確定IDとして入れず、必要に応じて資料ID候補として扱う。

## 8. タグの扱い

タグは `TAG_DICTIONARY_v1.md` の表記を優先する。

同じ意味のタグを複数表記で増やさない。

避ける例：

```ts
conceptTags: ["国民主権", "国民の主権", "主権在民"]
```

よい例：

```ts
conceptTags: ["国民主権"]
```

新規タグが必要な場合、バイブコーディングAIは勝手に辞書へ追加しない。

まず以下のような形で提案する。

```md
## 新規タグ候補

### conceptTags

- 追加候補：自己形成
- 理由：青年期・アイデンティティ・キャリア形成を横断する概念として必要
- 想定使用箇所：倫理「青年期と自己形成」、公共「個人と社会」
- 近い既存タグ：個人、社会
- 代替可能性：低い
```

## 9. IDの扱い

IDは `ID_RULES_v1.md` に従う。

基本形は以下。

```txt
{subject-id}-{unit-slug}-{content-slug}-{type-slug}
```

例：

```txt
ethics-youth-identity-thought
ethics-youth-moratorium-term
ethics-socrates-ignorance-thought
```

IDでは以下を使わない。

* 日本語
* 全角文字
* スペース
* アンダースコア
* スラッシュ
* コロン
* ピリオド
* 大文字英字

既存IDは原則変更しない。

ID変更が必要な場合は、変更前IDと変更後IDの対応表を作る。

## 10. バイブコーディングAIに渡されたときの作業手順

ChatGPTから教材データを渡されたら、以下の順番で処理する。

1. 既存の型定義と `ContentItem` の形が合っているか確認する
2. 配置先ファイルを判断する
3. 必要なら新規ファイルを作る
4. `ContentItem[]` に明示的な型注釈を付ける
5. import/export を既存構成に合わせて追加する
6. `curriculumNodeId` が既存ノードと対応しているか確認する
7. `id` が重複していないか確認する
8. `relatedContentIds` が実在するIDだけを参照しているか確認する
9. `relatedReferenceIds` が資料ツールIDとして妥当か確認する
10. タグ表記が大きく揺れていないか確認する
11. TypeScriptエラー・lintエラーを確認する
12. 必要なら、一覧表示・検索・暗記カード化処理に反映されるか確認する

## 11. やってはいけないこと

以下は禁止。

* `ContentItem` の型を勝手に変える
* 科目ごとに独自型を作る
* 既存IDを勝手に変更する
* 存在しないIDを `relatedContentIds` に入れる
* タグを思いつきで増やす
* 本文だけを実装してメタデータを削る
* `frontText` / `backText` を勝手に省略する
* 教材本文を勝手に短縮・要約する
* 史実・制度・条文の内容を推測で書き換える
* 特定教科書の本文をそのままコピーする
* 資料ツールIDと `ContentItem.id` を混同する

## 12. 完了条件

実装完了時は、以下を満たすこと。

* `ContentItem[]` が型エラーなく読み込まれる
* 既存のデータ一覧から参照できる
* 各 `id` が一意である
* `curriculumNodeId` が正しく対応している
* 暗記対象カードに `frontText` / `backText` / `isMemorizationTarget` がある
* 年号が必要なカードに `startYear` / `endYear` / `periodLabel` がある
* 主要なカードに `conceptTags` がある
* `relatedContentIds` が実在IDのみを参照している
* `relatedHints` が将来接続候補として残っている
* `relatedReferenceIds` が資料ツール接続用として整理されている
* タグ表記が大きく揺れていない
* 検索・関連表示・暗記カード化に使える状態になっている

## 13. 基本方針

このプロジェクトでは、教材本文を作ることだけが目的ではない。

最終的には、以下ができるデータ構造を作ることが目的である。

* 全科目横断検索
* 年号検索
* 人物検索
* 事件検索
* 地域検索
* 概念検索
* 関連単元表示
* 憲法全文・年表・地図・判例・条約・統計などの資料ツール接続
* 暗記カード化
* 授業・復習で使いやすい表示

そのため、バイブコーディングAIは、ChatGPTから渡された教材データを単なる文章としてではなく、検索・接続・暗記・復習に使う構造化データとして扱うこと。
