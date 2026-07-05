# ID_RULES_v1.md

## 目的

このファイルは、社会科横断学習アプリで使う ID の命名規則を定める。

目的は、以下を安定して実現すること。

- 科目別データの管理
- ContentItem の一意性確保
- 関連コンテンツ表示
- relatedContentIds の安全な接続
- relatedReferenceIds の安全な接続
- 年表・地図・憲法・判例など資料ツールとの接続
- 将来的な検索・再集計・自動リンク生成

---

## 基本方針

すべての ID は、以下を満たすこと。

- 一意である
- 意味が推測できる
- 半角英数字とハイフンのみを使う
- 日本語を使わない
- スペースを使わない
- 大文字を使わない
- 既存 ID を後から変更しない

ID は、表示名ではなく、内部参照用の固定識別子として扱う。

---

## 禁止文字

ID では以下を使わない。

- 日本語
- 全角文字
- スペース
- アンダースコア `_`
- スラッシュ `/`
- コロン `:`
- ピリオド `.`
- 大文字英字

よい例：

```txt
politics-economics-constitution-popular-sovereignty-term
```

避ける例：

```txt
政治経済_国民主権
PoliticsEconomics:Constitution
politics/economics/constitution
```

---

## SubjectId

科目 ID は `CONTENT_SCHEMA_v1.md` の `SubjectId` に従う。

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

新しい科目 ID を勝手に追加しない。

---

## CurriculumNode ID

カリキュラムノード ID は、原則として既存の `curriculumNodes` の ID を使う。

新しく作る場合は、以下の形を基本にする。

```txt
{subject-id}-{level}-{number}
```

例：

```txt
geography-basic-part-1
geography-basic-chapter-1-1
geography-basic-section-1-1-1

politics-economics-part-1
politics-economics-chapter-1-2
politics-economics-section-1-2-3
```

ただし、すでにプロジェクト内で別の命名規則が使われている場合は、既存ルールを優先する。

---

## ContentItem ID

ContentItem の ID は、以下の形を基本にする。

```txt
{subject-id}-{unit-slug}-{content-slug}-{type-slug}
```

例：

```txt
politics-economics-constitution-popular-sovereignty-term
politics-economics-constitution-basic-human-rights-summary
world-history-french-revolution-human-rights-declaration-event
ethics-socrates-ignorance-thought
geography-basic-time-difference-standard-time-term
```

---

## ContentItem ID の構成

### 1. subject-id

所属科目の `SubjectId` を使う。

例：

```txt
politics-economics
world-history-advanced
japanese-history-advanced
ethics
```

### 2. unit-slug

章・節・単元の内容を短く英語またはローマ字で表す。

例：

```txt
constitution
french-revolution
meiji-constitution
climate
time-difference
socrates
```

### 3. content-slug

カードの主題を短く表す。

例：

```txt
popular-sovereignty
basic-human-rights
standard-time
human-rights-declaration
constitutionalism
```

### 4. type-slug

ContentType に対応する短い種別名をつける。

| ContentType       | type-slug    |
| ----------------- | ------------ |
| `section-summary` | `summary`    |
| `term-card`       | `term`       |
| `person-card`     | `person`     |
| `event-card`      | `event`      |
| `system-card`     | `system`     |
| `thought-card`    | `thought`    |
| `flow-note`       | `flow`       |
| `comparison-note` | `comparison` |
| `crosslink-note`  | `crosslink`  |
| `map-note`        | `map`        |
| `timeline-note`   | `timeline`   |
| `source-note`     | `source`     |
| `supplement-note` | `supplement` |

---

## 同じ主題で複数カードがある場合

同じ主題で複数カードが必要な場合は、末尾に番号をつける。

```txt
world-history-french-revolution-background-flow-1
world-history-french-revolution-background-flow-2
```

ただし、基本はカードの主題を分ける。

よい例：

```txt
world-history-french-revolution-background-flow
world-history-french-revolution-impact-flow
```

---

## 暗記カード用 ID

暗記カード化される `term-card` なども、通常の ContentItem ID と同じルールでよい。

例：

```txt
politics-economics-constitution-popular-sovereignty-term
ethics-kant-categorical-imperative-thought
world-history-napoleon-code-civil-system
```

暗記カード専用の別 ID は作らない。

---

## relatedContentIds ルール

`relatedContentIds` には、実際に存在する `ContentItem.id` のみを入れる。

存在しない未来の ID を推測で入れない。

悪い例：

```ts
relatedContentIds: [
  "future-world-history-french-revolution-card"
]
```

よい例：

```ts
relatedHints: [
  {
    label: "フランス革命と人権宣言",
    relation: "same-concept",
    targetSubjectId: "world-history-advanced",
    conceptTags: ["市民革命", "人権", "立憲主義"]
  }
]
```

未来の接続候補は `relatedHints` に入れる。

---

## relatedReferenceIds ルール

`relatedReferenceIds` は、資料ツール側の ID に接続する。

### 憲法全文

```txt
constitution-of-japan
constitution-preamble
constitution-article-1
constitution-article-9
constitution-article-25
constitution-article-96
```

### 年表

将来的に年表ツールを作る場合は、以下の形を基本にする。

```txt
timeline-{year}
timeline-{year}-{event-slug}
```

例：

```txt
timeline-1789
timeline-1789-french-revolution
timeline-1946-constitution-of-japan-promulgation
```

### 地図

将来的に地図資料を作る場合は、以下の形を基本にする。

```txt
map-{region-slug}-{theme-slug}
```

例：

```txt
map-europe-1815
map-japan-industrial-regions
map-world-climate-zones
```

### 判例

将来的に判例資料を作る場合は、以下の形を基本にする。

```txt
case-{case-slug}
```

例：

```txt
case-sunagawa
case-mc-reynolds
```

日本の判例は、一般的な事件名がある場合はそれを使う。

### 条約・宣言

```txt
treaty-{name-slug}-{year}
declaration-{name-slug}-{year}
```

例：

```txt
declaration-human-rights-france-1789
declaration-universal-human-rights-1948
treaty-san-francisco-1951
```

---

## Reference ID の原則

資料ツール側の ID は、資料種別が分かる接頭辞をつける。

| 資料種別 | prefix          |
| ---- | --------------- |
| 憲法   | `constitution-` |
| 年表   | `timeline-`     |
| 地図   | `map-`          |
| 判例   | `case-`         |
| 条約   | `treaty-`       |
| 宣言   | `declaration-`  |
| 統計   | `stats-`        |
| 史料   | `source-`       |

---

## slug 作成ルール

slug は、英語またはローマ字で短く作る。

### 優先順位

1. すでに一般的な英語表記がある場合は英語
2. 固有名詞は一般的なローマ字または英語表記
3. 長すぎる場合は意味が分かる範囲で短縮

例：

```txt
国民主権 → popular-sovereignty
立憲主義 → constitutionalism
基本的人権 → basic-human-rights
平和主義 → pacifism
フランス革命 → french-revolution
明治維新 → meiji-restoration
時差 → time-difference
```

---

## slug で避けること

* 長すぎる slug
* 日本語ローマ字の揺れ
* 意味が分からない略称
* 同じ意味の複数 slug

避ける例：

```txt
kokuminshuken
kokumin-shuken
popular-sovereignty-principle-of-the-people-having-sovereign-power
```

よい例：

```txt
popular-sovereignty
```

---

## ID 変更ルール

一度使った ID は、原則として変更しない。

ID を変更すると、以下が壊れる可能性がある。

* relatedContentIds
* relatedReferenceIds
* 検索結果
* 暗記カード履歴
* 将来の学習履歴
* 外部リンク

どうしても変更が必要な場合は、変更前 ID と変更後 ID の対応表を作る。

---

## ID 重複防止ルール

新しい ContentItem を作るときは、同じファイル内・同じ科目内で ID が重複していないか確認する。

可能なら、将来的に以下のチェックを実装する。

* 全 ContentItem の ID 重複チェック
* `relatedContentIds` の存在チェック
* `relatedReferenceIds` の存在チェック
* `curriculumNodeId` の存在チェック

---

## 科目別ファイルでの命名例

### 政治・経済

```txt
politics-economics-constitution-popular-sovereignty-term
politics-economics-constitution-basic-human-rights-summary
politics-economics-constitution-pacifism-term
politics-economics-diet-bicameral-system-term
```

### 世界史探究

```txt
world-history-advanced-french-revolution-summary
world-history-advanced-french-revolution-human-rights-declaration-event
world-history-advanced-industrial-revolution-summary
world-history-advanced-cold-war-berlin-wall-event
```

### 日本史探究

```txt
japanese-history-advanced-meiji-restoration-summary
japanese-history-advanced-meiji-constitution-system
japanese-history-advanced-postwar-reform-summary
```

### 倫理

```txt
ethics-socrates-ignorance-thought
ethics-plato-idea-theory-thought
ethics-kant-categorical-imperative-thought
```

### 地理総合

```txt
geography-basic-time-difference-summary
geography-basic-time-difference-standard-time-term
geography-basic-hazard-map-source
```

---

## 出力時のルール

単元内容を作るときは、すべての ContentItem に必ず `id` を入れる。

ID が不安な場合は、仮 ID ではなく、まず ID 案を提示する。

出力後に以下を確認する。

* ID が一意か
* ID が長すぎないか
* ID の意味が分かるか
* ContentType と type-slug が対応しているか
* relatedContentIds に存在しない ID を入れていないか
* 既存 ID を勝手に変更していないか

---

## 禁止事項

以下は禁止する。

* 日本語 ID
* 大文字 ID
* スペース入り ID
* その場の思いつき ID
* 同じ内容に複数 ID を作る
* 既存 ID の勝手な変更
* 存在しない ContentItem ID を `relatedContentIds` に入れる
* 資料ツール ID と ContentItem ID を混同する

---

## 運用方針

この ID ルールは v1.0 として固定する。

変更が必要な場合は、既存データへの影響を確認したうえで、変更案として提案する。

勝手に ID ルールを変更しない。
