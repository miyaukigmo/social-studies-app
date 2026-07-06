import type { ContentItem } from "../types/content";

export const politicsEconomicsDemocracyPrinciplesContents: ContentItem[] = [
  {
    id: "politics-economics-politics-meaning-summary",
    curriculumNodeId: "politics-economics-section-1-1-1",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "政治とは何か",
    body: "政治とは、社会の中で生じる意見・利害・価値観の対立を調整し、集団としての意思決定を行う営みである。家庭や学校、地域社会にも広い意味での政治は存在するが、政治・経済では特に国家による法や制度を通じた秩序形成が重要になる。政治を学ぶことは、権力を誰が、どのようなルールで、何のために使うのかを考えることである。",
    shortText: "政治を、対立の調整と社会秩序の形成として理解する。",
    order: 1,
    conceptTags: ["政治", "国家", "民主主義", "公共の福祉"],
    examTags: ["基本用語", "重要用語"],
    skillTags: ["用語説明", "要約"],
    relatedHints: [
      {
        label: "公共における合意形成と対立調整",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["民主主義", "公共の福祉"]
      }
    ]
  },
  {
    id: "politics-economics-politics-political-decision-term",
    curriculumNodeId: "politics-economics-section-1-1-1",
    subjectId: "politics-economics",
    type: "term-card",
    title: "政治",
    body: "政治とは、個人や集団の間にある意見・利害の対立を調整し、社会全体の秩序を維持しながら、集団としての意思決定を行う営みである。政治は国会や政府だけのものではなく、人々が共同生活を送る場面に広く存在する。",
    shortText: "対立を調整し、集団として意思決定を行う営み。",
    order: 2,
    frontText: "政治",
    backText: "個人や集団の意見・利害の対立を調整し、社会全体の秩序を維持しながら意思決定を行う営み。",
    isMemorizationTarget: true,
    conceptTags: ["政治", "国家", "民主主義"],
    examTags: ["基本用語", "重要用語"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "民主政治の基本原理",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["民主主義", "国民主権"]
      }
    ]
  },
  {
    id: "politics-economics-politics-conflict-adjustment-term",
    curriculumNodeId: "politics-economics-section-1-1-1",
    subjectId: "politics-economics",
    type: "term-card",
    title: "対立調整",
    body: "社会には、自由を重視する考え、平等を重視する考え、効率を重視する考え、公正を重視する考えなどがあり、それらはしばしば対立する。政治は、こうした対立を暴力ではなく、議論・法・制度によって調整する働きをもつ。",
    shortText: "異なる利害や価値観を、法や制度によって調整すること。",
    order: 3,
    frontText: "対立調整",
    backText: "社会の中の異なる利害や価値観を、議論・法・制度によって調整すること。",
    isMemorizationTarget: true,
    conceptTags: ["政治", "民主主義", "自由", "平等", "公共の福祉"],
    examTags: ["基本用語", "現代社会との関連"],
    skillTags: ["用語説明", "比較"],
    relatedHints: [
      {
        label: "公共の福祉による人権相互の調整",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["基本的人権", "公共の福祉"]
      }
    ]
  },
  {
    id: "politics-economics-politics-law-function-term",
    curriculumNodeId: "politics-economics-section-1-1-1",
    subjectId: "politics-economics",
    type: "term-card",
    title: "法の機能",
    body: "法は、人々の行動を規律する社会規範の一つであり、国家による強制を伴う点で道徳や慣習と異なる。法には、社会秩序を維持する働きと、個人や集団の権利を守る働きがある。民主社会では、国民の代表者からなる議会が法を制定する。",
    shortText: "社会秩序を維持し、権利を守るための国家的な規範。",
    order: 4,
    frontText: "法の機能",
    backText: "社会秩序を維持し、個人や集団の権利を守ること。国家による強制を伴う点で道徳や慣習と異なる。",
    isMemorizationTarget: true,
    conceptTags: ["法の支配", "立憲主義", "基本的人権"],
    institutionTags: ["国会"],
    examTags: ["重要用語", "正誤問題注意"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "法の支配",
        relation: "background",
        targetSubjectId: "politics-economics",
        conceptTags: ["法の支配", "基本的人権", "立憲主義"]
      }
    ]
  },
  {
    id: "politics-economics-state-power-summary",
    curriculumNodeId: "politics-economics-section-1-1-2",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "権力と国家",
    body: "国家は、一定の領域に住む人々を統治し、法や制度によって秩序を維持する政治共同体である。国家権力は、法律を作り、行政を行い、裁判を通じて紛争を解決する力をもつ。しかし、権力が集中すると人権侵害や独裁につながる危険があるため、民主政治では主権者である国民による統制、憲法による制限、権力分立が重要になる。",
    shortText: "国家権力の働きと、それを制限する必要性を扱う。",
    order: 5,
    conceptTags: ["権力", "国家", "主権", "国民主権", "立憲主義", "権力分立"],
    institutionTags: ["国会", "内閣", "裁判所"],
    examTags: ["重要用語", "因果関係"],
    skillTags: ["因果関係", "制度比較"],
    relatedHints: [
      {
        label: "権力分立",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["権力分立", "三権分立", "立憲主義"]
      }
    ]
  },
  {
    id: "politics-economics-state-state-term",
    curriculumNodeId: "politics-economics-section-1-1-2",
    subjectId: "politics-economics",
    type: "term-card",
    title: "国家",
    body: "国家とは、一定の領域、そこに住む人々、統治する権力を備えた政治共同体である。国家は、法を制定し、行政を行い、裁判を通じて紛争を解決するなど、社会秩序を維持する役割をもつ。",
    shortText: "領域・住民・統治権力を備えた政治共同体。",
    order: 6,
    frontText: "国家",
    backText: "一定の領域、そこに住む人々、統治する権力を備えた政治共同体。",
    isMemorizationTarget: true,
    conceptTags: ["国家", "権力", "主権"],
    examTags: ["基本用語", "重要用語"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "国際社会における主権国家",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["国家", "主権", "国際協調"]
      }
    ]
  },
  {
    id: "politics-economics-state-sovereignty-term",
    curriculumNodeId: "politics-economics-section-1-1-2",
    subjectId: "politics-economics",
    type: "term-card",
    title: "主権",
    body: "主権とは、国家の政治を最終的に決定する最高の権力である。対内的には国内を統治する最高権力、対外的には他国から独立していることを意味する。日本国憲法では、主権は国民にあるとされる。",
    shortText: "国家の政治を最終的に決定する最高権力。",
    order: 7,
    frontText: "主権",
    backText: "国家の政治を最終的に決定する最高権力。対内的最高性と対外的独立性をもつ。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["主権", "国民主権", "国家"],
    lawTags: ["日本国憲法", "日本国憲法第1条"],
    relatedReferenceIds: ["constitution-article-1"],
    examTags: ["重要用語", "正誤問題注意"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "国民主権",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["国民主権", "民主主義", "立憲主義"]
      }
    ]
  },
  {
    id: "politics-economics-state-power-control-flow",
    curriculumNodeId: "politics-economics-section-1-1-2",
    subjectId: "politics-economics",
    type: "flow-note",
    title: "権力を制限する考え方の流れ",
    body: "国家権力は社会秩序の維持に必要である。しかし、権力が集中すると、為政者による恣意的支配や人権侵害が起こりやすくなる。そのため近代以降、憲法によって権力を制限する立憲主義、政治権力を法の下に置く法の支配、権力を複数の機関に分ける権力分立が重視されるようになった。",
    shortText: "国家権力の必要性と危険性から、立憲主義・法の支配・権力分立へつなげる。",
    order: 8,
    conceptTags: ["権力", "国家", "立憲主義", "法の支配", "権力分立", "基本的人権"],
    examTags: ["因果関係", "論述対策"],
    skillTags: ["因果関係", "時系列整理"],
    relatedHints: [
      {
        label: "法の支配と立憲主義",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["法の支配", "立憲主義", "基本的人権"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-formation-summary",
    curriculumNodeId: "politics-economics-section-1-1-3",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "民主政治の成立",
    body: "近代民主政治は、絶対王政のもとで国王や支配者に権力が集中していた状態に対し、人間は生まれながらに権利をもつという自然権の思想や、政治権力は人々の合意に基づくべきだとする社会契約説を背景に成立した。市民革命を通じて、国民主権、人権保障、立憲主義、議会政治などの考え方が広がった。",
    shortText: "自然権・社会契約説・市民革命から近代民主政治の成立を理解する。",
    order: 9,
    periodLabel: "近代市民革命期",
    datePrecision: "period",
    isApproximateDate: true,
    regionTags: ["ヨーロッパ", "アメリカ", "イギリス", "フランス"],
    peopleTags: ["ロック", "ルソー"],
    eventTags: ["名誉革命", "アメリカ独立革命", "フランス革命"],
    conceptTags: ["民主主義", "国民主権", "人権", "市民革命", "立憲主義"],
    lawTags: ["権利章典", "アメリカ独立宣言", "フランス人権宣言"],
    relatedReferenceIds: [
      "source-english-bill-of-rights-1689",
      "declaration-independence-us-1776",
      "declaration-human-rights-france-1789"
    ],
    examTags: ["重要用語", "因果関係", "年号暗記"],
    skillTags: ["時系列整理", "因果関係"],
    relatedHints: [
      {
        label: "世界史探究の市民革命",
        relation: "same-concept",
        targetSubjectId: "world-history-advanced",
        conceptTags: ["市民革命", "人権", "国民主権", "立憲主義"],
        eventTags: ["名誉革命", "アメリカ独立革命", "フランス革命"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-natural-rights-thought",
    curriculumNodeId: "politics-economics-section-1-1-3",
    subjectId: "politics-economics",
    type: "thought-card",
    title: "自然権",
    body: "自然権とは、人間が国家や法律によって与えられる以前から、生まれながらにもっているとされる権利である。生命、自由、財産などの権利を自然権として考える思想は、近代の人権思想や市民革命に大きな影響を与えた。",
    shortText: "人間が生まれながらにもっているとされる権利。",
    order: 10,
    frontText: "自然権",
    backText: "人間が国家や法律によって与えられる以前から、生まれながらにもっているとされる権利。",
    isMemorizationTarget: true,
    peopleTags: ["ロック"],
    conceptTags: ["自然権", "人権", "自由", "平等", "基本的人権"],
    workTags: ["統治二論"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "基本的人権",
        relation: "influence",
        targetSubjectId: "politics-economics",
        conceptTags: ["基本的人権", "人権保障", "自由権"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-social-contract-thought",
    curriculumNodeId: "politics-economics-section-1-1-3",
    subjectId: "politics-economics",
    type: "thought-card",
    title: "社会契約説",
    body: "社会契約説とは、国家や政治権力は人々の合意によって成立すると考える思想である。ロックは自然権を守るために政府がつくられると考え、ルソーは人民全体の意思である一般意思を重視した。社会契約説は、国民主権や民主政治の理論的基礎となった。",
    shortText: "国家や政治権力は人々の合意に基づくとする思想。",
    order: 11,
    periodLabel: "17〜18世紀",
    startYear: 1689,
    endYear: 1762,
    datePrecision: "year",
    isApproximateDate: true,
    frontText: "社会契約説",
    backText: "国家や政治権力は人々の合意によって成立すると考える思想。",
    isMemorizationTarget: true,
    peopleTags: ["ロック", "ルソー"],
    conceptTags: ["社会契約", "国民主権", "民主主義", "人権", "自由", "平等"],
    workTags: ["統治二論", "社会契約論"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "思想比較"],
    relatedHints: [
      {
        label: "倫理の社会契約説",
        relation: "same-concept",
        targetSubjectId: "ethics",
        peopleTags: ["ロック", "ルソー"],
        conceptTags: ["自由", "平等", "社会"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-civil-revolutions-event",
    curriculumNodeId: "politics-economics-section-1-1-3",
    subjectId: "politics-economics",
    type: "event-card",
    title: "市民革命",
    body: "市民革命とは、近代において市民層が絶対王政や身分制的な支配に対抗し、自由や権利、議会政治、国民主権を求めた革命である。代表例として、イギリスの名誉革命、アメリカ独立革命、フランス革命がある。これらは近代民主政治の成立に大きく関わった。",
    shortText: "自由・権利・国民主権を求めた近代の革命。",
    order: 12,
    periodLabel: "17〜18世紀",
    startYear: 1688,
    endYear: 1789,
    datePrecision: "year",
    frontText: "市民革命",
    backText: "市民層が絶対王政や身分制的支配に対抗し、自由・権利・議会政治・国民主権を求めた近代の革命。",
    isMemorizationTarget: true,
    regionTags: ["イギリス", "アメリカ", "フランス"],
    eventTags: ["名誉革命", "アメリカ独立革命", "フランス革命"],
    conceptTags: ["市民革命", "人権", "国民主権", "立憲主義", "近代国家"],
    lawTags: ["権利章典", "アメリカ独立宣言", "フランス人権宣言"],
    relatedReferenceIds: [
      "source-english-bill-of-rights-1689",
      "declaration-independence-us-1776",
      "declaration-human-rights-france-1789"
    ],
    examTags: ["重要用語", "入試頻出", "年号暗記"],
    skillTags: ["時系列整理", "因果関係"],
    relatedHints: [
      {
        label: "歴史総合の近代化と市民革命",
        relation: "same-concept",
        targetSubjectId: "history-basic",
        conceptTags: ["市民革命", "近代化", "人権", "国民国家"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-formation-flow",
    curriculumNodeId: "politics-economics-section-1-1-3",
    subjectId: "politics-economics",
    type: "flow-note",
    title: "近代民主政治成立の流れ",
    body: "絶対王政のもとで権力が集中する。そこに、自然権や社会契約説のように、人々の権利と合意を重視する思想が広がる。市民革命を通じて、権利章典、アメリカ独立宣言、フランス人権宣言などが出される。その結果、国民主権、人権保障、立憲主義、議会政治が近代民主政治の基本原理として確立していった。",
    shortText: "絶対王政から自然権・社会契約説・市民革命を経て、近代民主政治へ至る流れ。",
    order: 13,
    periodLabel: "近代市民革命期",
    startYear: 1688,
    endYear: 1789,
    datePrecision: "year",
    isApproximateDate: true,
    regionTags: ["ヨーロッパ", "アメリカ", "イギリス", "フランス"],
    eventTags: ["名誉革命", "アメリカ独立革命", "フランス革命"],
    conceptTags: ["自然権", "社会契約", "市民革命", "民主主義", "国民主権", "人権", "立憲主義"],
    lawTags: ["権利章典", "アメリカ独立宣言", "フランス人権宣言"],
    relatedReferenceIds: [
      "source-english-bill-of-rights-1689",
      "declaration-independence-us-1776",
      "declaration-human-rights-france-1789"
    ],
    examTags: ["因果関係", "論述対策", "比較問題"],
    skillTags: ["時系列整理", "因果関係", "要約"],
    relatedHints: [
      {
        label: "法の支配・立憲主義への接続",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["法の支配", "立憲主義", "基本的人権"]
      }
    ]
  }
];

export const politicsEconomicsDemocracyPrinciplesPart2Contents: ContentItem[] = [
  {
    id: "politics-economics-democracy-principles-summary",
    curriculumNodeId: "politics-economics-section-1-1-4",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "民主政治の基本原理",
    body: "民主政治とは、国民が政治の主体となり、国民の意思に基づいて政治を行うしくみである。ただし、民主政治は単に多数決で決めることだけを意味しない。国民主権、基本的人権の尊重、法の支配、立憲主義、権力分立などによって、権力の濫用を防ぎながら国民の自由と平等を守ることが重要である。",
    shortText: "民主政治を、国民主権・人権保障・権力制限のしくみとして理解する。",
    order: 1,
    conceptTags: ["多数決", "民主主義", "国民主権", "基本的人権", "法の支配", "立憲主義", "権力分立"],
    examTags: ["重要用語", "論述対策"],
    skillTags: ["要約", "因果関係"],
    relatedHints: [
      {
        label: "近代民主政治の成立",
        relation: "background",
        targetSubjectId: "politics-economics",
        conceptTags: ["市民革命", "人権", "国民主権", "立憲主義"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-democracy-term",
    curriculumNodeId: "politics-economics-section-1-1-4",
    subjectId: "politics-economics",
    type: "term-card",
    title: "民主主義",
    body: "民主主義とは、国民や市民が政治の主体となり、政治の決定に参加する考え方や制度である。現代国家では、国民が選挙で代表者を選び、その代表者が議会で政治を行う代表民主制が中心である。",
    shortText: "国民や市民が政治の主体となる考え方や制度。",
    order: 2,
    frontText: "民主主義",
    backText: "国民や市民が政治の主体となり、政治の決定に参加する考え方や制度。",
    isMemorizationTarget: true,
    conceptTags: ["民主主義", "国民主権", "代表民主制", "参政権"],
    institutionTags: ["選挙制度", "国会"],
    examTags: ["基本用語", "重要用語"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "参政権と選挙制度",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["参政権", "代表民主制", "国民主権"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-popular-sovereignty-term",
    curriculumNodeId: "politics-economics-section-1-1-4",
    subjectId: "politics-economics",
    type: "term-card",
    title: "国民主権",
    body: "国民主権とは、国の政治の最終的な決定権が国民にあるという原理である。日本国憲法では、天皇主権ではなく国民主権が基本原理とされ、国民は選挙や国民投票などを通じて政治に関わる。",
    shortText: "政治の最終的な決定権が国民にあるという原理。",
    order: 3,
    frontText: "国民主権",
    backText: "国の政治の最終的な決定権が国民にあるという原理。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["国民主権", "民主主義", "参政権", "立憲主義"],
    institutionTags: ["選挙制度"],
    lawTags: ["日本国憲法", "日本国憲法第1条"],
    relatedReferenceIds: ["constitution-article-1"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "大日本帝国憲法との比較",
        relation: "contrast",
        targetSubjectId: "japanese-history-advanced",
        conceptTags: ["主権", "立憲主義"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-direct-representative-comparison",
    curriculumNodeId: "politics-economics-section-1-1-4",
    subjectId: "politics-economics",
    type: "comparison-note",
    title: "直接民主制と代表民主制",
    body: "直接民主制は、国民や住民が政治上の決定に直接参加するしくみである。代表民主制は、国民が選挙で代表者を選び、その代表者が政治を行うしくみである。現代の大規模な国家では、すべての政策を国民が直接決めることは難しいため、代表民主制が中心となる。ただし、憲法改正の国民投票や地方自治の住民投票など、直接民主制的なしくみも用いられる。",
    shortText: "直接参加する民主制と、代表者を通じて参加する民主制を比較する。",
    order: 4,
    conceptTags: ["直接民主制", "代表民主制", "間接民主制", "国民主権", "参政権"],
    institutionTags: ["選挙制度", "地方公共団体"],
    lawTags: ["日本国憲法", "日本国憲法第96条", "国民投票法"],
    relatedReferenceIds: ["constitution-article-96"],
    examTags: ["比較問題", "正誤問題注意"],
    skillTags: ["比較", "制度比較"],
    relatedHints: [
      {
        label: "地方自治と住民参加",
        relation: "example",
        targetSubjectId: "politics-economics",
        conceptTags: ["地方自治", "住民自治", "直接民主制"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-majority-minority-supplement",
    curriculumNodeId: "politics-economics-section-1-1-4",
    subjectId: "politics-economics",
    type: "supplement-note",
    title: "多数決と少数意見の尊重",
    body: "民主政治では、多くの場合、最終的な決定に多数決が用いられる。しかし、多数決は少数派の権利や意見を無視してよいという意味ではない。基本的人権、法の支配、立憲主義は、多数派による一方的な支配を防ぎ、少数者の権利を守る役割をもつ。",
    shortText: "民主政治では多数決と少数者の権利保障を両立させる必要がある。",
    order: 5,
    conceptTags: ["多数決", "少数意見の尊重", "民主主義", "基本的人権", "法の支配", "立憲主義", "平等"],
    examTags: ["誤解注意", "論述対策", "現代社会との関連"],
    skillTags: ["因果関係", "論述"],
    relatedHints: [
      {
        label: "公共の福祉と人権相互の調整",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["基本的人権", "公共の福祉", "平等"]
      }
    ]
  },
  {
    id: "politics-economics-rule-of-law-summary",
    curriculumNodeId: "politics-economics-section-1-1-5",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "法の支配",
    body: "法の支配とは、政治権力も法に従わなければならず、権力者の恣意的な支配を許さないという考え方である。ここでいう法は、単に支配者が作った命令ではなく、人権保障や公正な手続を重視する法である。法の支配は、立憲主義や基本的人権の保障と深く結びつく。",
    shortText: "政治権力を法の下に置き、恣意的支配を防ぐ考え方。",
    order: 6,
    conceptTags: ["法の支配", "立憲主義", "基本的人権", "人権保障", "自由権"],
    lawTags: ["日本国憲法"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "因果関係"],
    relatedHints: [
      {
        label: "立憲主義",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["法の支配", "立憲主義", "基本的人権"]
      }
    ]
  },
  {
    id: "politics-economics-rule-of-law-term",
    curriculumNodeId: "politics-economics-section-1-1-5",
    subjectId: "politics-economics",
    type: "thought-card",
    title: "法の支配",
    body: "法の支配とは、国王や政府などの政治権力も法に拘束されるという原理である。権力者が思いどおりに人々を支配するのではなく、法に基づいて政治が行われることで、国民の自由や権利を守ることができる。",
    shortText: "政治権力も法に拘束されるという原理。",
    order: 7,
    frontText: "法の支配",
    backText: "政治権力も法に拘束され、権力者の恣意的な支配を防ぐという原理。",
    isMemorizationTarget: true,
    conceptTags: ["法の支配", "基本的人権", "立憲主義"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "権力と国家",
        relation: "background",
        targetSubjectId: "politics-economics",
        conceptTags: ["国家", "主権", "法の支配"]
      }
    ]
  },
  {
    id: "politics-economics-rule-of-law-legalism-comparison",
    curriculumNodeId: "politics-economics-section-1-1-5",
    subjectId: "politics-economics",
    type: "comparison-note",
    title: "法の支配と法治主義",
    body: "法の支配は、権力を制限し、人権を守るために法が存在するという考え方である。一方、法治主義は、行政や政治が法律に基づいて行われるという考え方である。法律に基づいていても、その法律自体が人権を不当に侵害する場合、法の支配の考え方からは問題があると考えられる。",
    shortText: "法が権力を制限する考え方と、政治が法律に基づく考え方を比較する。",
    order: 8,
    conceptTags: ["法治主義", "法の支配", "立憲主義", "基本的人権", "人権保障"],
    examTags: ["比較問題", "正誤問題注意", "論述対策"],
    skillTags: ["比較", "制度比較", "論述"],
    relatedHints: [
      {
        label: "違憲審査制",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["立憲主義", "法の支配", "基本的人権"]
      }
    ]
  },
  {
    id: "politics-economics-constitutionalism-summary",
    curriculumNodeId: "politics-economics-section-1-1-6",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "立憲主義",
    body: "立憲主義とは、憲法によって国家権力を制限し、国民の権利や自由を守る考え方である。憲法は、国民を一方的に縛るためだけのものではなく、政治権力の行使を制限する最高法規としての役割をもつ。民主政治では、国民主権と立憲主義を組み合わせることで、多数派による権力濫用も防ぐ。",
    shortText: "憲法によって国家権力を制限し、国民の権利を守る考え方。",
    order: 9,
    regionTags: ["日本"],
    conceptTags: ["立憲主義", "憲法", "基本的人権", "国民主権", "法の支配"],
    lawTags: ["日本国憲法", "日本国憲法第98条", "日本国憲法第99条"],
    relatedReferenceIds: ["constitution-of-japan", "constitution-article-98", "constitution-article-99"],
    examTags: ["重要用語", "入試頻出", "論述対策"],
    skillTags: ["用語説明", "因果関係"],
    relatedHints: [
      {
        label: "大日本帝国憲法と日本国憲法の比較",
        relation: "contrast",
        targetSubjectId: "japanese-history-advanced",
        regionTags: ["日本"],
        conceptTags: ["憲法", "立憲主義", "国民主権"]
      }
    ]
  },
  {
    id: "politics-economics-constitutionalism-term",
    curriculumNodeId: "politics-economics-section-1-1-6",
    subjectId: "politics-economics",
    type: "thought-card",
    title: "立憲主義",
    body: "立憲主義とは、憲法によって国家権力を制限し、国民の権利や自由を保障しようとする考え方である。近代以降の憲法は、国家権力を組織するだけでなく、権力を制限する役割を重視している。",
    shortText: "憲法によって国家権力を制限する考え方。",
    order: 10,
    frontText: "立憲主義",
    backText: "憲法によって国家権力を制限し、国民の権利や自由を保障しようとする考え方。",
    isMemorizationTarget: true,
    conceptTags: ["立憲主義", "憲法", "基本的人権", "法の支配"],
    lawTags: ["日本国憲法"],
    relatedReferenceIds: ["constitution-of-japan"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "法の支配",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["法の支配", "立憲主義", "基本的人権"]
      }
    ]
  },
  {
    id: "politics-economics-constitutionalism-constitution-source",
    curriculumNodeId: "politics-economics-section-1-1-6",
    subjectId: "politics-economics",
    type: "source-note",
    title: "日本国憲法と立憲主義",
    body: "日本国憲法は、国民主権、基本的人権の尊重、平和主義を基本原理とし、国家権力のあり方を定めている。憲法第98条は憲法を国の最高法規とし、第99条は天皇・国務大臣・国会議員・裁判官などに憲法尊重擁護義務を課している。これは、憲法が権力を制限する規範であることを理解するうえで重要である。",
    shortText: "憲法第98条・第99条を通じて、憲法が権力を制限する規範であることを理解する。",
    order: 11,
    regionTags: ["日本"],
    conceptTags: ["憲法", "立憲主義", "法の支配", "基本的人権"],
    lawTags: ["日本国憲法", "日本国憲法第98条", "日本国憲法第99条"],
    sourceTags: ["条文"],
    relatedReferenceIds: ["constitution-article-98", "constitution-article-99"],
    examTags: ["資料読解", "正誤問題注意", "論述対策"],
    skillTags: ["条文読解", "資料読解"],
    relatedHints: [
      {
        label: "憲法改正手続",
        relation: "reference",
        targetSubjectId: "politics-economics",
        conceptTags: ["憲法", "国民主権"],
        lawTags: ["日本国憲法第96条"]
      }
    ]
  },
  {
    id: "politics-economics-separation-of-powers-summary",
    curriculumNodeId: "politics-economics-section-1-1-7",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "権力分立",
    body: "権力分立とは、国家権力を一つの機関に集中させず、複数の機関に分けて相互に抑制と均衡を働かせる考え方である。日本国憲法では、立法を国会、行政を内閣、司法を裁判所が担う三権分立が基本となる。権力分立は、権力の濫用を防ぎ、国民の権利を守るための制度である。",
    shortText: "国家権力を分け、相互に抑制と均衡を働かせるしくみ。",
    order: 12,
    regionTags: ["日本"],
    conceptTags: ["権力分立", "三権分立", "立憲主義", "基本的人権"],
    institutionTags: ["国会", "内閣", "裁判所"],
    lawTags: ["日本国憲法"],
    relatedReferenceIds: ["constitution-article-41", "constitution-article-65", "constitution-article-76"],
    examTags: ["重要用語", "入試頻出", "比較問題"],
    skillTags: ["制度比較", "因果関係"],
    relatedHints: [
      {
        label: "国会・内閣・裁判所の具体的なしくみ",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["三権分立", "議院内閣制", "権力分立"]
      }
    ]
  },
  {
    id: "politics-economics-separation-of-powers-term",
    curriculumNodeId: "politics-economics-section-1-1-7",
    subjectId: "politics-economics",
    type: "term-card",
    title: "権力分立",
    body: "権力分立とは、国家権力を立法・行政・司法などに分け、それぞれの機関が互いに抑制し合うことで権力の濫用を防ぐしくみである。三権分立は、立憲主義を制度面から支える重要な考え方である。",
    shortText: "国家権力を分け、権力の濫用を防ぐしくみ。",
    order: 13,
    frontText: "権力分立",
    backText: "国家権力を立法・行政・司法などに分け、相互に抑制させることで権力の濫用を防ぐしくみ。",
    isMemorizationTarget: true,
    conceptTags: ["権力分立", "三権分立", "立憲主義", "法の支配"],
    institutionTags: ["国会", "内閣", "裁判所"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "制度比較"],
    relatedHints: [
      {
        label: "モンテスキューの権力分立論",
        relation: "background",
        targetSubjectId: "ethics",
        conceptTags: ["自由", "法の支配"]
      }
    ]
  },
  {
    id: "politics-economics-separation-of-powers-three-powers-comparison",
    curriculumNodeId: "politics-economics-section-1-1-7",
    subjectId: "politics-economics",
    type: "comparison-note",
    title: "立法・行政・司法の役割",
    body: "立法は、法律を制定する働きであり、日本では国会が担う。行政は、法律や予算に基づいて政策を実行する働きであり、内閣が中心となる。司法は、具体的な争いについて法を適用し、権利を救済する働きであり、裁判所が担う。三権の役割を区別することは、国会・内閣・裁判所の学習の前提になる。",
    shortText: "立法・行政・司法の役割を比較する。",
    order: 14,
    regionTags: ["日本"],
    conceptTags: ["三権分立", "権力分立", "立憲主義"],
    institutionTags: ["国会", "内閣", "裁判所", "最高裁判所"],
    lawTags: ["日本国憲法"],
    relatedReferenceIds: ["constitution-article-41", "constitution-article-65", "constitution-article-76"],
    examTags: ["比較問題", "正誤問題注意"],
    skillTags: ["比較", "制度比較"],
    relatedHints: [
      {
        label: "議院内閣制",
        relation: "example",
        targetSubjectId: "politics-economics",
        conceptTags: ["議院内閣制", "権力分立"],
        institutionTags: ["国会", "内閣"]
      }
    ]
  },
  {
    id: "politics-economics-separation-of-powers-checks-and-balances-flow",
    curriculumNodeId: "politics-economics-section-1-1-7",
    subjectId: "politics-economics",
    type: "flow-note",
    title: "抑制と均衡のしくみ",
    body: "権力分立では、三権を完全に切り離すだけではなく、互いに監視し合う関係をつくることが重要である。国会は内閣総理大臣を指名し、内閣不信任決議を行うことができる。内閣は衆議院を解散することができる。裁判所は違憲審査制により、法律や命令などが憲法に反しないかを判断する。このような抑制と均衡によって、権力の濫用を防ぐ。",
    shortText: "三権が互いに監視し合い、権力の濫用を防ぐしくみ。",
    order: 15,
    regionTags: ["日本"],
    conceptTags: ["権力分立", "三権分立", "立憲主義", "法の支配"],
    institutionTags: ["国会", "内閣", "裁判所", "最高裁判所", "違憲審査制"],
    lawTags: ["日本国憲法", "日本国憲法第81条"],
    relatedReferenceIds: ["constitution-article-41", "constitution-article-65", "constitution-article-76", "constitution-article-81"],
    examTags: ["因果関係", "比較問題", "論述対策"],
    skillTags: ["因果関係", "制度比較", "論述"],
    relatedHints: [
      {
        label: "違憲審査制と司法権",
        relation: "example",
        targetSubjectId: "politics-economics",
        conceptTags: ["法の支配", "立憲主義", "権力分立"],
        institutionTags: ["最高裁判所", "違憲審査制"]
      }
    ]
  },
  {
    id: "politics-economics-separation-of-powers-judicial-review-system",
    curriculumNodeId: "politics-economics-section-1-1-7",
    subjectId: "politics-economics",
    type: "system-card",
    title: "違憲審査制",
    body: "違憲審査制とは、法律・命令・規則・処分などが憲法に違反していないかを裁判所が審査する制度である。日本国憲法第81条は、最高裁判所を終審裁判所として違憲審査権をもつ機関と定めている。違憲審査制は、立憲主義と法の支配を具体化する制度である。",
    shortText: "法律や処分などが憲法に違反しないかを裁判所が審査する制度。",
    order: 16,
    frontText: "違憲審査制",
    backText: "法律・命令・規則・処分などが憲法に違反していないかを裁判所が審査する制度。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["立憲主義", "法の支配", "権力分立", "基本的人権"],
    institutionTags: ["裁判所", "最高裁判所", "違憲審査制"],
    lawTags: ["日本国憲法", "日本国憲法第81条"],
    relatedReferenceIds: ["constitution-article-81"],
    examTags: ["重要用語", "入試頻出", "資料読解"],
    skillTags: ["用語説明", "条文読解"],
    relatedHints: [
      {
        label: "判例学習への接続",
        relation: "reference",
        targetSubjectId: "politics-economics",
        conceptTags: ["基本的人権", "法の支配", "立憲主義"],
        institutionTags: ["最高裁判所", "違憲審査制"]
      }
    ]
  }
];
