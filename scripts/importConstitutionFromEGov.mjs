import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { XMLParser } from 'fast-xml-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GENERATED_FILE_PATH = path.join(__dirname, '../src/data/references/constitution.generated.ts');

const API_URL = 'https://laws.e-gov.go.jp/api/1/lawdata/321CONSTITUTION';

// 章のマッピング用
function getChapterIdByArticleNumber(articleNumber) {
  if (articleNumber >= 1 && articleNumber <= 8) return "chapter-1";
  if (articleNumber === 9) return "chapter-2";
  if (articleNumber >= 10 && articleNumber <= 40) return "chapter-3";
  if (articleNumber >= 41 && articleNumber <= 64) return "chapter-4";
  if (articleNumber >= 65 && articleNumber <= 75) return "chapter-5";
  if (articleNumber >= 76 && articleNumber <= 82) return "chapter-6";
  if (articleNumber >= 83 && articleNumber <= 91) return "chapter-7";
  if (articleNumber >= 92 && articleNumber <= 95) return "chapter-8";
  if (articleNumber === 96) return "chapter-9";
  if (articleNumber >= 97 && articleNumber <= 99) return "chapter-10";
  if (articleNumber >= 100 && articleNumber <= 103) return "chapter-11";
  return "unknown";
}

// 既存の学習メモは constitutionNotes.ts 側で管理するため、スクリプトからは削除

const chaptersList = [
  { id: "preamble", title: "前文", order: 0, description: "日本国憲法の基本理念を示す前文。" },
  { id: "chapter-1", title: "第一章　天皇", order: 1, articleRange: "第一条～第八条", description: "象徴天皇制と天皇の国事行為について定める章。" },
  { id: "chapter-2", title: "第二章　戦争の放棄", order: 2, articleRange: "第九条", description: "戦争放棄、戦力不保持、交戦権の否認について定める章。" },
  { id: "chapter-3", title: "第三章　国民の権利及び義務", order: 3, articleRange: "第十条～第四十条", description: "基本的人権と国民の義務について定める章。" },
  { id: "chapter-4", title: "第四章　国会", order: 4, articleRange: "第四十一条～第六十四条", description: "国会の地位、構成、権限、議事手続などについて定める章。" },
  { id: "chapter-5", title: "第五章　内閣", order: 5, articleRange: "第六十五条～第七十五条", description: "内閣の組織、権限、国会との関係などについて定める章。" },
  { id: "chapter-6", title: "第六章　司法", order: 6, articleRange: "第七十六条～第八十二条", description: "裁判所、司法権、違憲審査権などについて定める章。" },
  { id: "chapter-7", title: "第七章　財政", order: 7, articleRange: "第八十三条～第九十一条", description: "財政処理、予算、租税、会計検査などについて定める章。" },
  { id: "chapter-8", title: "第八章　地方自治", order: 8, articleRange: "第九十二条～第九十五条", description: "地方公共団体と地方自治について定める章。" },
  { id: "chapter-9", title: "第九章　改正", order: 9, articleRange: "第九十六条", description: "憲法改正手続について定める章。" },
  { id: "chapter-10", title: "第十章　最高法規", order: 10, articleRange: "第九十七条～第九十九条", description: "憲法の最高法規性と憲法尊重擁護義務について定める章。" },
  { id: "chapter-11", title: "第十一章　補則", order: 11, articleRange: "第百条～第百三条", description: "憲法施行に関する補則を定める章。" },
];

async function fetchConstitutionXML() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const xmlData = await response.text();
    return xmlData;
  } catch (err) {
    console.error("e-Gov法令APIから日本国憲法を取得できませんでした。");
    console.error("本文をAIで補完せず、公式資料から再取得してください。");
    console.error(err);
    process.exit(1);
  }
}

function processPreamble(preambleObj) {
  let paragraphs = [];
  if (!preambleObj) return paragraphs;
  const pList = Array.isArray(preambleObj.Paragraph) ? preambleObj.Paragraph : [preambleObj.Paragraph];
  for (const p of pList) {
    if (p.ParagraphSentence && p.ParagraphSentence.Sentence) {
      paragraphs.push({ text: p.ParagraphSentence.Sentence });
    }
  }
  return paragraphs;
}

function extractTextFromSentence(sentence) {
  // Sentenceがオブジェクトの場合（ルビなどが含まれる場合がある）と文字列の場合がある
  if (typeof sentence === 'string') return sentence;
  if (typeof sentence === 'object' && sentence['#text']) return sentence['#text'];
  return JSON.stringify(sentence); // 最低限失われないように
}

function processParagraphs(paragraphObj) {
  if (!paragraphObj) return [];
  const pList = Array.isArray(paragraphObj) ? paragraphObj : [paragraphObj];
  const paragraphs = [];
  
  for (const p of pList) {
    let pNum = p['@_Num'];
    let text = "";
    
    // ParagraphSentence の処理
    if (p.ParagraphSentence && p.ParagraphSentence.Sentence) {
      const sentences = Array.isArray(p.ParagraphSentence.Sentence) ? p.ParagraphSentence.Sentence : [p.ParagraphSentence.Sentence];
      text += sentences.map(s => extractTextFromSentence(s)).join("");
    }

    let items = [];
    // Itemの処理（号）
    if (p.Item) {
      const iList = Array.isArray(p.Item) ? p.Item : [p.Item];
      for (const item of iList) {
        let iTitle = item.ItemTitle || "";
        let iText = "";
        if (item.ItemSentence && item.ItemSentence.Sentence) {
          const sentences = Array.isArray(item.ItemSentence.Sentence) ? item.ItemSentence.Sentence : [item.ItemSentence.Sentence];
          iText += sentences.map(s => extractTextFromSentence(s)).join("");
        }
        items.push({ itemLabel: iTitle, text: iText });
      }
    }

    const paraData = {
      text: text
    };
    // 複数項がある場合（Num="1" でも）または項番号を明示したい場合。
    // e-Govでは第1項のみの場合、Num="1"とならない場合が多い。
    // ただし憲法の場合、Num属性がついていればそのまま利用する。
    // 複数項構成かどうかは pList.length > 1 で判断できる。
    if (pList.length > 1 && pNum) {
      paraData.paragraphNumber = parseInt(pNum, 10);
    }
    
    if (items.length > 0) {
      paraData.items = items;
    }
    
    paragraphs.push(paraData);
  }
  return paragraphs;
}

async function run() {
  const xmlData = await fetchConstitutionXML();
  
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    textNodeName: "#text",
  });
  const parsed = parser.parse(xmlData);

  const lawBody = parsed.DataRoot?.ApplData?.LawFullText?.Law?.LawBody;
  if (!lawBody) {
    console.error("XMLの構造が期待と異なります。");
    process.exit(1);
  }

  // 前文の抽出
  const preambleParagraphs = processPreamble(lawBody.Preamble);

  const preambleData = {
    id: "constitution-preamble",
    title: "前文",
    chapterId: "preamble",
    paragraphs: preambleParagraphs,
    sourceNote: "本文はe-Gov法令APIから取得した法令XMLを元に生成している。",
  };

  // 条文の抽出
  const rawArticles = [];
  // e-GovのXMLでは、LawBody 直下の MainProvision に Chapter がある場合が多い。
  const mainProvision = lawBody.MainProvision || lawBody;
  const chapters = mainProvision.Chapter || [];
  const cList = Array.isArray(chapters) ? chapters : [chapters];
  
  for (const c of cList) {
    const aList = c.Article ? (Array.isArray(c.Article) ? c.Article : [c.Article]) : [];
    for (const a of aList) {
      rawArticles.push(a);
    }
  }

  // 補則は LawBody 直下の SupplProvision の中にある場合がある
  const supplProvisions = lawBody.SupplProvision ? (Array.isArray(lawBody.SupplProvision) ? lawBody.SupplProvision : [lawBody.SupplProvision]) : [];
  for (const sp of supplProvisions) {
    if (sp.Chapter) {
      const spCList = Array.isArray(sp.Chapter) ? sp.Chapter : [sp.Chapter];
      for (const c of spCList) {
        if (c.Article) {
          const aList = Array.isArray(c.Article) ? c.Article : [c.Article];
          for (const a of aList) {
            rawArticles.push(a);
          }
        }
      }
    } else if (sp.Article) {
      const aList = Array.isArray(sp.Article) ? sp.Article : [sp.Article];
      for (const a of aList) {
        rawArticles.push(a);
      }
    }
  }

  const articlesData = [];
  let articleCount = 0;

  for (const a of rawArticles) {
    const numAttr = a['@_Num']; // "1", "2", ... "103"
    const aNum = parseInt(numAttr, 10);
    const aTitle = a.ArticleTitle; // "第一条", "第二条"...
    const aCaption = a.ArticleCaption ? extractTextFromSentence(a.ArticleCaption) : undefined;
    
    const paragraphsData = processParagraphs(a.Paragraph);

    articlesData.push({
      id: `constitution-article-${aNum}`,
      chapterId: getChapterIdByArticleNumber(aNum),
      articleNumber: aNum,
      articleLabel: aTitle,
      caption: aCaption ? aCaption.replace(/[（）()]/g, "") : undefined, // （天皇の地位と主権在民）などのカッコを外す
      paragraphs: paragraphsData,
      sourceNote: "本文はe-Gov法令APIから取得した法令XMLを元に生成している。",
    });
    articleCount++;
  }

  const generatedData = {
    meta: {
      id: "constitution-of-japan",
      title: "日本国憲法",
      lawNumber: "昭和二十一年憲法",
      promulgatedAt: "1946-11-03",
      enforcedAt: "1947-05-03",
      source: {
        sourceName: "e-Gov法令検索",
        lawId: "321CONSTITUTION",
        note: "本文はe-Gov法令APIから取得した法令XMLを元に生成している。教材用メモとは別フィールドで扱う。",
      },
    },
    chapters: chaptersList,
    preamble: preambleData,
    articles: articlesData,
    notes: [],
  };

  const fileContent = `import type { ConstitutionReferenceData } from "../../types/constitution";\n\nexport const constitutionReferenceData: ConstitutionReferenceData = ${JSON.stringify(generatedData, null, 2)};\n`;

  await fs.mkdir(path.dirname(GENERATED_FILE_PATH), { recursive: true });
  await fs.writeFile(GENERATED_FILE_PATH, fileContent, 'utf-8');

  console.log("日本国憲法の取得に成功しました。");
  console.log(`前文: ${preambleParagraphs.length > 0 ? '取得済み' : '未取得'}`);
  console.log(`条文数: ${articleCount}`);
  console.log(`生成先: src/data/references/constitution.generated.ts`);

  if (articleCount !== 103) {
    console.warn("警告: 条文数が103ではありません。XMLの解析結果を確認してください。");
  }
}

run();
