import type {
  ConstitutionReferenceData,
  ConstitutionSearchResult,
} from "../types/constitution";

/** 文字列の正規化（全角→半角、小文字化、空白削除） */
function normalizeString(str: string): string {
  if (!str) return "";
  return str
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
    .toLowerCase()
    .replace(/[\s　]+/g, "");
}

/** 簡易的な漢数字→数値の変換（1〜103対応） */
function parseKanjiNumber(kanji: string): number | null {
  const kanjiMap: Record<string, number> = {
    "一": 1, "二": 2, "三": 3, "四": 4, "五": 5,
    "六": 6, "七": 7, "八": 8, "九": 9, "十": 10,
    "百": 100
  };

  let total = 0;
  let temp = 0;

  for (let i = 0; i < kanji.length; i++) {
    const char = kanji[i];
    const num = kanjiMap[char];

    if (num === undefined) return null; // 漢数字以外が含まれている

    if (num === 100) {
      total += (temp === 0 ? 1 : temp) * 100;
      temp = 0;
    } else if (num === 10) {
      total += (temp === 0 ? 1 : temp) * 10;
      temp = 0;
    } else {
      temp += num;
    }
  }
  total += temp;

  return total;
}

/** 検索クエリが条番号を指しているか判定し、該当数値を返す */
function parseArticleNumberQuery(query: string): number | null {
  const normalized = normalizeString(query);

  // 例: "9", "25", "103"
  if (/^\d+$/.test(normalized)) {
    const num = parseInt(normalized, 10);
    return num >= 1 && num <= 103 ? num : null;
  }

  // 例: "第9条", "9条"
  const arabicMatch = normalized.match(/^(?:第)?(\d+)条$/);
  if (arabicMatch) {
    const num = parseInt(arabicMatch[1], 10);
    return num >= 1 && num <= 103 ? num : null;
  }

  // 例: "第九条", "九条", "第二十五条", "第百三条"
  const kanjiMatch = normalized.match(/^(?:第)?([一二三四五六七八九十百]+)条$/);
  if (kanjiMatch) {
    const num = parseKanjiNumber(kanjiMatch[1]);
    if (num !== null && num >= 1 && num <= 103) {
      return num;
    }
  }

  return null;
}

export function searchConstitution(
  data: ConstitutionReferenceData,
  rawQuery: string
): ConstitutionSearchResult[] {
  const normalizedQuery = normalizeString(rawQuery);
  if (!normalizedQuery) {
    return [];
  }

  const results: Map<string, ConstitutionSearchResult> = new Map();
  
  // 1. 各記事・前文の初期化と各フィールドでのマッチ判定
  for (const article of data.articles) {
    const matchedFields: string[] = [];
    const note = data.notes.find((n) => n.targetId === article.id);

    // 条番号
    const targetArticleNum = parseArticleNumberQuery(rawQuery);
    if (targetArticleNum !== null && article.articleNumber === targetArticleNum) {
      matchedFields.push("articleNumber");
    }

    // 章の検索
    const chapter = data.chapters.find((c) => c.id === article.chapterId);
    if (chapter) {
      const titleNorm = normalizeString(chapter.title);
      const descNorm = normalizeString(chapter.description || "");
      if (titleNorm.includes(normalizedQuery)) matchedFields.push("chapterTitle");
      if (descNorm.includes(normalizedQuery)) matchedFields.push("chapterDescription");
    }

    // 条文見出し・本文
    const labelNorm = normalizeString(article.articleLabel);
    const captionNorm = normalizeString(article.caption || "");
    const textNorm = normalizeString(
      article.paragraphs
        .map((p) => {
          let t = p.text;
          if (p.items) {
            t += p.items.map((i) => i.itemLabel + i.text).join("");
          }
          return t;
        })
        .join("")
    );

    if (labelNorm.includes(normalizedQuery)) matchedFields.push("articleLabel");
    if (captionNorm.includes(normalizedQuery)) matchedFields.push("caption");
    if (textNorm.includes(normalizedQuery)) matchedFields.push("articleText");

    // 学習メモ
    if (note) {
      const summaryNorm = normalizeString(note.summary);
      const keywordsNorm = note.keywords.map(normalizeString).join("");
      const memoNorm = normalizeString(note.memo || "");

      if (summaryNorm.includes(normalizedQuery)) matchedFields.push("noteSummary");
      if (keywordsNorm.includes(normalizedQuery)) matchedFields.push("noteKeywords");
      if (memoNorm.includes(normalizedQuery)) matchedFields.push("noteMemo");
    }

    if (matchedFields.length > 0) {
      results.set(article.id, {
        type: "article",
        id: article.id,
        data: article,
        matchedFields: Array.from(new Set(matchedFields)),
      });
    }
  }

  // 前文の検索
  const preambleMatchedFields: string[] = [];
  const preambleChapter = data.chapters.find((c) => c.id === "preamble");
  if (preambleChapter) {
    const titleNorm = normalizeString(preambleChapter.title);
    const descNorm = normalizeString(preambleChapter.description || "");
    if (titleNorm.includes(normalizedQuery)) preambleMatchedFields.push("chapterTitle");
    if (descNorm.includes(normalizedQuery)) preambleMatchedFields.push("chapterDescription");
  }

  const preambleNorm = normalizeString(data.preamble.paragraphs.map((p) => p.text).join(""));
  if (preambleNorm.includes(normalizedQuery)) {
    preambleMatchedFields.push("articleText");
  }

  const preambleNote = data.notes.find((n) => n.targetId === data.preamble.id);
  if (preambleNote) {
    const summaryNorm = normalizeString(preambleNote.summary);
    const keywordsNorm = preambleNote.keywords.map(normalizeString).join("");
    const memoNorm = normalizeString(preambleNote.memo || "");

    if (summaryNorm.includes(normalizedQuery)) preambleMatchedFields.push("noteSummary");
    if (keywordsNorm.includes(normalizedQuery)) preambleMatchedFields.push("noteKeywords");
    if (memoNorm.includes(normalizedQuery)) preambleMatchedFields.push("noteMemo");
  }

  if (preambleMatchedFields.length > 0) {
    results.set(data.preamble.id, {
      type: "preamble",
      id: data.preamble.id,
      data: data.preamble,
      matchedFields: Array.from(new Set(preambleMatchedFields)),
    });
  }

  // 3. 並び替え（1. 前文、2. 条文番号順）
  const resultsArray = Array.from(results.values());
  resultsArray.sort((a, b) => {
    if (a.type === "preamble" && b.type === "article") return -1;
    if (a.type === "article" && b.type === "preamble") return 1;
    if (a.type === "article" && b.type === "article") {
      return a.data.articleNumber - b.data.articleNumber;
    }
    return 0;
  });

  return resultsArray;
}
