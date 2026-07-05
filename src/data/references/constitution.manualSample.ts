import type { ConstitutionReferenceData } from "../../types/constitution";

export const constitutionReferenceData: ConstitutionReferenceData = {
  meta: {
    id: "constitution-of-japan",
    title: "日本国憲法",
    lawNumber: "昭和二十一年憲法",
    promulgatedAt: "1946-11-03",
    enforcedAt: "1947-05-03",
    source: {
      sourceName: "e-Gov法令検索・衆議院 日本国憲法資料",
      lawId: "321CONSTITUTION",
      note: "条文本文は公式資料の表記を保持して管理する。教材用メモとは別フィールドで扱う。",
    },
  },

  chapters: [
    {
      id: "preamble",
      title: "前文",
      order: 0,
      description: "日本国憲法の基本理念を示す前文。",
    },
    {
      id: "chapter-1",
      title: "第一章　天皇",
      order: 1,
      articleRange: "第一条～第八条",
      description: "象徴天皇制と天皇の国事行為について定める章。",
    },
    {
      id: "chapter-2",
      title: "第二章　戦争の放棄",
      order: 2,
      articleRange: "第九条",
      description: "戦争放棄、戦力不保持、交戦権の否認について定める章。",
    },
    {
      id: "chapter-3",
      title: "第三章　国民の権利及び義務",
      order: 3,
      articleRange: "第十条～第四十条",
      description: "基本的人権と国民の義務について定める章。",
    },
    {
      id: "chapter-4",
      title: "第四章　国会",
      order: 4,
      articleRange: "第四十一条～第六十四条",
      description: "国会の地位、構成、権限、議事手続などについて定める章。",
    },
    {
      id: "chapter-5",
      title: "第五章　内閣",
      order: 5,
      articleRange: "第六十五条～第七十五条",
      description: "内閣の組織、権限、国会との関係などについて定める章。",
    },
    {
      id: "chapter-6",
      title: "第六章　司法",
      order: 6,
      articleRange: "第七十六条～第八十二条",
      description: "裁判所、司法権、違憲審査権などについて定める章。",
    },
    {
      id: "chapter-7",
      title: "第七章　財政",
      order: 7,
      articleRange: "第八十三条～第九十一条",
      description: "財政処理、予算、租税、会計検査などについて定める章。",
    },
    {
      id: "chapter-8",
      title: "第八章　地方自治",
      order: 8,
      articleRange: "第九十二条～第九十五条",
      description: "地方公共団体と地方自治について定める章。",
    },
    {
      id: "chapter-9",
      title: "第九章　改正",
      order: 9,
      articleRange: "第九十六条",
      description: "憲法改正手続について定める章。",
    },
    {
      id: "chapter-10",
      title: "第十章　最高法規",
      order: 10,
      articleRange: "第九十七条～第九十九条",
      description: "憲法の最高法規性と憲法尊重擁護義務について定める章。",
    },
    {
      id: "chapter-11",
      title: "第十一章　補則",
      order: 11,
      articleRange: "第百条～第百三条",
      description: "憲法施行に関する補則を定める章。",
    },
  ],

  preamble: {
    id: "constitution-preamble",
    title: "前文",
    chapterId: "preamble",
    paragraphs: [
      {
        text: "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。",
      },
      {
        text: "日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を保持しようと決意した。われらは、平和を維持し、専制と隷従、圧迫と偏狭を地上から永遠に除去しようと努めてゐる国際社会において、名誉ある地位を占めたいと思ふ。われらは、全世界の国民が、ひとしく恐怖と欠乏から免かれ、平和のうちに生存する権利を有することを確認する。",
      },
      {
        text: "われらは、いづれの国家も、自国のことのみに専念して他国を無視してはならないのであつて、政治道徳の法則は、普遍的なものであり、この法則に従ふことは、自国の主権を維持し、他国と対等関係に立たうとする各国の責務であると信ずる。",
      },
      {
        text: "日本国民は、国家の名誉にかけ、全力をあげてこの崇高な理想と目的を達成することを誓ふ。",
      },
    ],
    sourceNote: "本文投入済み。公式資料の表記を保持している。",
  },

  articles: [
    {
      id: "constitution-article-1",
      chapterId: "chapter-1",
      articleNumber: 1,
      articleLabel: "第一条",
      caption: "天皇の地位と主権在民",
      paragraphs: [
        {
          text: "天皇は、日本国の象徴であり日本国民統合の象徴であつて、この地位は、主権の存する日本国民の総意に基く。",
        },
      ],
      sourceNote: "本文投入済み。公式資料の表記を保持している。",
    },
    {
      id: "constitution-article-9",
      chapterId: "chapter-2",
      articleNumber: 9,
      articleLabel: "第九条",
      caption: "戦争の放棄、戦力及び交戦権の否認",
      paragraphs: [
        {
          paragraphNumber: 1,
          text: "日本国民は、正義と秩序を基調とする国際平和を誠実に希求し、国権の発動たる戦争と、武力による威嚇又は武力の行使は、国際紛争を解決する手段としては、永久にこれを放棄する。",
        },
        {
          paragraphNumber: 2,
          text: "前項の目的を達するため、陸海空軍その他の戦力は、これを保持しない。国の交戦権は、これを認めない。",
        },
      ],
      sourceNote: "本文投入済み。公式資料の表記を保持している。",
    },
    {
      id: "constitution-article-25",
      chapterId: "chapter-3",
      articleNumber: 25,
      articleLabel: "第二十五条",
      caption: "生存権及び国民生活の社会的進歩向上に努める国の義務",
      paragraphs: [
        {
          paragraphNumber: 1,
          text: "すべて国民は、健康で文化的な最低限度の生活を営む権利を有する。",
        },
        {
          paragraphNumber: 2,
          text: "国は、すべての生活部面について、社会福祉、社会保障及び公衆衛生の向上及び増進に努めなければならない。",
        },
      ],
      sourceNote: "本文投入済み。公式資料の表記を保持している。",
    },
    {
      id: "constitution-article-96",
      chapterId: "chapter-9",
      articleNumber: 96,
      articleLabel: "第九十六条",
      caption: "憲法改正の発議、国民投票及び公布",
      paragraphs: [
        {
          paragraphNumber: 1,
          text: "この憲法の改正は、各議院の総議員の三分の二以上の賛成で、国会が、これを発議し、国民に提案してその承認を経なければならない。この承認には、特別の国民投票又は国会の定める選挙の際行はれる投票において、その過半数の賛成を必要とする。",
        },
        {
          paragraphNumber: 2,
          text: "憲法改正について前項の承認を経たときは、天皇は、国民の名で、この憲法と一体を成すものとして、直ちにこれを公布する。",
        },
      ],
      sourceNote: "本文投入済み。公式資料の表記を保持している。",
    },
  ],

  notes: [
    {
      id: "constitution-note-preamble",
      targetId: "constitution-preamble",
      targetType: "preamble",
      summary: "日本国憲法の基本理念を示す前文。国民主権、平和主義、国際協調などと関係する。",
      keywords: ["国民主権", "平和主義", "国際協調", "民主主義"],
      relatedCurriculumNodeIds: [],
      relatedStudyContentIds: [],
    },
    {
      id: "constitution-note-article-1",
      targetId: "constitution-article-1",
      targetType: "article",
      summary: "象徴天皇制と国民主権の関係を示す条文。",
      keywords: ["象徴天皇制", "国民主権", "天皇"],
      relatedCurriculumNodeIds: ["politics-economics-section-1-2-3"],
      relatedStudyContentIds: [],
    },
    {
      id: "constitution-note-article-9",
      targetId: "constitution-article-9",
      targetType: "article",
      summary: "平和主義を具体化する中心条文。戦争放棄、戦力不保持、交戦権の否認と関係する。",
      keywords: ["平和主義", "戦争放棄", "戦力不保持", "交戦権の否認"],
      relatedCurriculumNodeIds: ["politics-economics-section-1-2-5"],
      relatedStudyContentIds: [],
    },
    {
      id: "constitution-note-article-25",
      targetId: "constitution-article-25",
      targetType: "article",
      summary: "生存権と国の社会保障義務を定める条文。",
      keywords: ["生存権", "社会権", "社会保障"],
      relatedCurriculumNodeIds: ["politics-economics-section-1-2-11"],
      relatedStudyContentIds: [],
    },
    {
      id: "constitution-note-article-96",
      targetId: "constitution-article-96",
      targetType: "article",
      summary: "憲法改正手続を定める条文。",
      keywords: ["憲法改正", "国会の発議", "国民投票"],
      relatedCurriculumNodeIds: ["politics-economics-section-1-2-6"],
      relatedStudyContentIds: [],
    },
  ],
};
