import type { KnowledgeCard } from "../types/knowledge";

export const sampleCards: KnowledgeCard[] = [
  // 世界史探究
  {
    id: "wh-1",
    title: "フランス革命",
    subject: "worldHistoryAdvanced",
    period: "18世紀末",
    region: "ヨーロッパ",
    summary: "1789年に始まり、絶対王政を倒して共和制を樹立した市民革命。自由・平等・友愛を掲げた。",
    examPoint: "バスティーユ牢獄襲撃、人権宣言、恐怖政治、ナポレオンの台頭までの流れと各派閥（ジロンド派、ジャコバン派等）の違い。",
    whyItMatters: "近代民主主義の出発点であり、その後の国民国家の形成や人権思想に決定的な影響を与えた。",
    tags: ["革命", "市民社会", "人権"]
  },
  {
    id: "wh-2",
    title: "産業革命",
    subject: "worldHistoryAdvanced",
    period: "18世紀後半〜",
    region: "イギリス",
    summary: "イギリスで始まった、機械制工場工業の成立による経済・社会の構造的変化。",
    examPoint: "飛び杼、紡績機などの技術革新の順序、なぜイギリスで最初に起こったか（資本、労働力、市場、資源）。",
    whyItMatters: "資本主義社会を確立させ、都市化や労働問題、さらには後の帝国主義へと繋がる現代社会の土台を作った。",
    tags: ["経済", "技術", "資本主義", "近代化"]
  },
  // 日本史探究
  {
    id: "jh-1",
    title: "明治維新",
    subject: "japaneseHistoryAdvanced",
    period: "19世紀後半",
    region: "日本",
    summary: "江戸幕府を倒し、天皇を中心とした近代的な中央集権国家を作り上げた一連の政治・社会的変革。",
    examPoint: "大政奉還から廃藩置県、地租改正、徴兵令などの諸改革の目的と内容。士族反乱の流れ。",
    whyItMatters: "非西洋諸国でいち早く近代化に成功した事例であり、その後の日本の急激な発展と帝国主義化の起点となった。",
    tags: ["近代化", "改革", "国民国家"]
  },
  // 倫理
  {
    id: "et-1",
    title: "ソクラテス",
    subject: "ethics",
    period: "古代ギリシア",
    region: "アテネ",
    summary: "「無知の知」を自覚し、問答法（産婆術）を通じて真の知を追求した哲学者。",
    examPoint: "ソフィスト（プロタゴラス等）の相対主義との対比。「無知の知」「アレテー（徳）」「知行合一」。",
    whyItMatters: "「よく生きる」とは何かを問い続ける西洋哲学の出発点であり、対話による真理探究の姿勢は現代にも通じる。",
    tags: ["哲学", "古代ギリシア"]
  },
  // 政治・経済
  {
    id: "pe-1",
    title: "民主主義",
    subject: "politicsEconomics",
    period: "現代",
    region: "世界",
    summary: "人民が権力を所有し、自らそれを行使する政治形態。直接民主制と間接民主制がある。",
    examPoint: "多数決の原理とその限界（少数意見の尊重）。リンカンの言葉「人民の、人民による、人民のための政治」。",
    whyItMatters: "現代の多くの国家の基本原理であるが、ポピュリズムや衆愚政治など、制度を維持するための課題も多い。",
    tags: ["政治制度", "イデオロギー"]
  }
];
