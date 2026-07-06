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

export const politicsEconomicsDemocracyPrinciplesPart3Contents: ContentItem[] = [
  {
    id: "politics-economics-human-rights-summary",
    curriculumNodeId: "politics-economics-section-1-1-8",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "基本的人権",
    body: "基本的人権とは、人間が人間らしく生きるために、生まれながらにもつと考えられる権利である。日本国憲法では、基本的人権は侵すことのできない永久の権利として保障される。人権は、自由権・社会権・参政権・請求権・平等権などに整理できる。民主政治では、国家権力を制限し、個人の尊厳を守ることが重要である。",
    shortText: "人間が人間らしく生きるために保障される基本的な権利を扱う。",
    order: 1,
    regionTags: ["日本"],
    conceptTags: ["基本的人権", "人権保障", "個人の尊重", "自由権", "社会権", "参政権", "請求権", "平等権"],
    lawTags: ["日本国憲法", "日本国憲法第11条", "日本国憲法第13条", "日本国憲法第97条"],
    relatedReferenceIds: ["constitution-article-11", "constitution-article-13", "constitution-article-97"],
    examTags: ["重要用語", "入試頻出", "論述対策"],
    skillTags: ["要約", "分類"],
    relatedHints: [
      {
        label: "立憲主義と人権保障",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["立憲主義", "基本的人権", "人権保障"]
      }
    ]
  },
  {
    id: "politics-economics-human-rights-basic-human-rights-term",
    curriculumNodeId: "politics-economics-section-1-1-8",
    subjectId: "politics-economics",
    type: "term-card",
    title: "基本的人権",
    body: "基本的人権とは、人間が人間らしく生きるために保障される基本的な権利である。日本国憲法では、基本的人権は国民に保障される永久の権利とされ、国家権力によって不当に侵害されてはならない。",
    shortText: "人間が人間らしく生きるために保障される基本的な権利。",
    order: 2,
    frontText: "基本的人権",
    backText: "人間が人間らしく生きるために保障される基本的な権利。日本国憲法では侵すことのできない永久の権利とされる。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["基本的人権", "人権保障", "個人の尊重"],
    lawTags: ["日本国憲法", "日本国憲法第11条", "日本国憲法第97条"],
    relatedReferenceIds: ["constitution-article-11", "constitution-article-97"],
    examTags: ["基本用語", "重要用語"],
    skillTags: ["用語説明"]
  },
  {
    id: "politics-economics-human-rights-individual-dignity-thought",
    curriculumNodeId: "politics-economics-section-1-1-8",
    subjectId: "politics-economics",
    type: "thought-card",
    title: "個人の尊重",
    body: "個人の尊重とは、一人ひとりの人間をかけがえのない存在として扱う考え方である。日本国憲法第13条は、すべて国民は個人として尊重されると定めている。個人の尊重は、幸福追求権やプライバシーの権利など、新しい人権を考える基礎にもなる。",
    shortText: "一人ひとりをかけがえのない存在として尊重する考え方。",
    order: 3,
    frontText: "個人の尊重",
    backText: "一人ひとりの人間をかけがえのない存在として扱う考え方。日本国憲法第13条に定められる。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["個人の尊重", "基本的人権", "幸福追求権", "新しい人権", "プライバシーの権利"],
    lawTags: ["日本国憲法", "日本国憲法第13条"],
    relatedReferenceIds: ["constitution-article-13"],
    examTags: ["重要用語", "入試頻出", "現代社会との関連"],
    skillTags: ["用語説明", "条文読解"],
    relatedHints: [
      {
        label: "新しい人権",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["幸福追求権", "新しい人権", "プライバシーの権利"]
      }
    ]
  },
  {
    id: "politics-economics-human-rights-new-rights-supplement",
    curriculumNodeId: "politics-economics-section-1-1-8",
    subjectId: "politics-economics",
    type: "supplement-note",
    title: "新しい人権",
    body: "新しい人権とは、社会の変化にともなって重要性が意識されるようになった権利である。プライバシーの権利、環境権、知る権利、自己決定権などが例として扱われる。これらは憲法に明文で細かく列挙されているわけではないが、個人の尊重や幸福追求権を根拠に考えられることが多い。",
    shortText: "社会の変化にともなって重要性が高まった人権。",
    order: 4,
    regionTags: ["日本"],
    conceptTags: ["新しい人権", "幸福追求権", "プライバシーの権利", "環境権", "知る権利", "自己決定権", "個人の尊重"],
    lawTags: ["日本国憲法", "日本国憲法第13条"],
    relatedReferenceIds: ["constitution-article-13"],
    examTags: ["現代社会との関連", "論述対策", "正誤問題注意"],
    skillTags: ["分類", "論述"],
    relatedHints: [
      {
        label: "情報化社会とプライバシー",
        relation: "example",
        targetSubjectId: "public",
        conceptTags: ["情報化", "プライバシーの権利", "自己決定権"]
      }
    ]
  },
  {
    id: "politics-economics-rights-classification-comparison",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "comparison-note",
    title: "自由権・社会権・参政権の比較",
    body: "自由権は、国家から不当に干渉されない自由を保障する権利である。社会権は、人間らしい生活を国家に求める権利である。参政権は、国民が政治に参加する権利である。自由権は近代市民革命の中で重視され、社会権は資本主義の発展にともなう貧困や労働問題を背景に重視されるようになった。",
    shortText: "自由権・社会権・参政権の意味と背景を比較する。",
    order: 5,
    conceptTags: ["自由権", "社会権", "参政権", "基本的人権", "人権保障", "市民革命", "福祉国家"],
    examTags: ["比較問題", "入試頻出", "正誤問題注意"],
    skillTags: ["比較", "分類", "時系列整理"],
    relatedHints: [
      {
        label: "市民革命と自由権",
        relation: "background",
        targetSubjectId: "world-history-advanced",
        conceptTags: ["市民革命", "人権", "自由権"]
      },
      {
        label: "資本主義と社会権",
        relation: "background",
        targetSubjectId: "politics-economics",
        conceptTags: ["資本主義", "社会権", "福祉国家"]
      }
    ]
  },
  {
    id: "politics-economics-rights-liberty-rights-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "自由権",
    body: "自由権とは、国家から不当に干渉されず、自由に考え、行動し、生活することを保障する権利である。自由権は、精神の自由、経済活動の自由、人身の自由に大きく分けられる。近代市民革命を通じて、国家権力から個人の自由を守る権利として重視された。",
    shortText: "国家から不当に干渉されない自由を保障する権利。",
    order: 6,
    frontText: "自由権",
    backText: "国家から不当に干渉されず、自由に考え、行動し、生活することを保障する権利。",
    isMemorizationTarget: true,
    conceptTags: ["自由権", "精神の自由", "経済活動の自由", "人身の自由", "基本的人権"],
    lawTags: ["日本国憲法", "日本国憲法第18条", "日本国憲法第19条", "日本国憲法第21条", "日本国憲法第22条", "日本国憲法第29条", "日本国憲法第31条"],
    relatedReferenceIds: [
      "constitution-article-18",
      "constitution-article-19",
      "constitution-article-21",
      "constitution-article-22",
      "constitution-article-29",
      "constitution-article-31"
    ],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "分類"]
  },
  {
    id: "politics-economics-rights-spiritual-freedom-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "精神の自由",
    body: "精神の自由とは、内心や表現に関わる自由であり、思想・良心の自由、信教の自由、表現の自由、学問の自由などを含む。民主政治では、国民が自由に考え、意見を表明し、政治を批判できることが重要であるため、精神の自由は特に重要な自由権とされる。",
    shortText: "思想・信仰・表現・学問など、内心や表現に関わる自由。",
    order: 7,
    frontText: "精神の自由",
    backText: "思想・良心の自由、信教の自由、表現の自由、学問の自由など、内心や表現に関わる自由。",
    isMemorizationTarget: true,
    conceptTags: ["精神の自由", "思想・良心の自由", "信教の自由", "表現の自由", "学問の自由", "自由権"],
    lawTags: ["日本国憲法", "日本国憲法第19条", "日本国憲法第20条", "日本国憲法第21条", "日本国憲法第23条"],
    relatedReferenceIds: ["constitution-article-19", "constitution-article-20", "constitution-article-21", "constitution-article-23"],
    examTags: ["重要用語", "入試頻出", "資料読解"],
    skillTags: ["分類", "条文読解"]
  },
  {
    id: "politics-economics-rights-economic-freedom-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "経済活動の自由",
    body: "経済活動の自由とは、職業選択の自由、居住・移転の自由、財産権など、経済生活に関わる自由である。ただし、経済活動は社会全体に大きな影響を与えるため、公共の福祉による制約を受ける場合がある。",
    shortText: "職業選択・居住移転・財産権など、経済生活に関わる自由。",
    order: 8,
    frontText: "経済活動の自由",
    backText: "職業選択の自由、居住・移転の自由、財産権など、経済生活に関わる自由。",
    isMemorizationTarget: true,
    conceptTags: ["経済活動の自由", "職業選択の自由", "居住・移転の自由", "財産権", "自由権", "公共の福祉"],
    lawTags: ["日本国憲法", "日本国憲法第22条", "日本国憲法第29条"],
    relatedReferenceIds: ["constitution-article-22", "constitution-article-29"],
    examTags: ["重要用語", "正誤問題注意"],
    skillTags: ["分類", "条文読解"]
  },
  {
    id: "politics-economics-rights-personal-freedom-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "人身の自由",
    body: "人身の自由とは、身体を不当に拘束されたり、刑罰を科されたりしないための自由である。奴隷的拘束や苦役からの自由、適正手続の保障、拷問や残虐な刑罰の禁止などが含まれる。国家権力による身体拘束は重大な人権侵害につながるため、手続の保障が重視される。",
    shortText: "身体を不当に拘束・処罰されないための自由。",
    order: 9,
    frontText: "人身の自由",
    backText: "身体を不当に拘束されたり、刑罰を科されたりしないための自由。適正手続の保障などを含む。",
    isMemorizationTarget: true,
    conceptTags: ["人身の自由", "適正手続", "自由権", "基本的人権"],
    lawTags: ["日本国憲法", "日本国憲法第18条", "日本国憲法第31条", "日本国憲法第36条"],
    relatedReferenceIds: ["constitution-article-18", "constitution-article-31", "constitution-article-36"],
    examTags: ["重要用語", "正誤問題注意"],
    skillTags: ["用語説明", "条文読解"]
  },
  {
    id: "politics-economics-rights-social-rights-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "社会権",
    body: "社会権とは、人間らしい生活を送るために、国家に一定の配慮や制度整備を求める権利である。資本主義の発展にともなって貧困や労働問題が深刻化したことを背景に、20世紀以降、社会権の保障が重視されるようになった。生存権、教育を受ける権利、勤労の権利、労働基本権などが含まれる。",
    shortText: "人間らしい生活のために、国家に制度整備を求める権利。",
    order: 10,
    frontText: "社会権",
    backText: "人間らしい生活を送るために、国家に一定の配慮や制度整備を求める権利。",
    isMemorizationTarget: true,
    conceptTags: ["社会権", "生存権", "教育を受ける権利", "勤労の権利", "労働基本権", "福祉国家"],
    lawTags: ["日本国憲法", "日本国憲法第25条", "日本国憲法第26条", "日本国憲法第27条", "日本国憲法第28条"],
    relatedReferenceIds: ["constitution-article-25", "constitution-article-26", "constitution-article-27", "constitution-article-28"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "分類"],
    relatedHints: [
      {
        label: "社会保障制度",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["社会権", "社会保障", "福祉国家"]
      }
    ]
  },
  {
    id: "politics-economics-rights-right-to-live-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "生存権",
    body: "生存権とは、すべての国民が健康で文化的な最低限度の生活を営む権利である。日本国憲法第25条に定められており、社会保障制度や生活保護制度などを考える基礎になる。単なる生活の維持だけでなく、人間らしい生活を保障する点が重要である。",
    shortText: "健康で文化的な最低限度の生活を営む権利。",
    order: 11,
    frontText: "生存権",
    backText: "すべての国民が健康で文化的な最低限度の生活を営む権利。日本国憲法第25条に定められる。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["生存権", "社会権", "社会保障", "福祉国家", "貧困"],
    institutionTags: ["社会保障制度", "生活保護制度"],
    lawTags: ["日本国憲法", "日本国憲法第25条"],
    relatedReferenceIds: ["constitution-article-25"],
    examTags: ["重要用語", "入試頻出", "現代社会との関連"],
    skillTags: ["用語説明", "条文読解"]
  },
  {
    id: "politics-economics-rights-labor-rights-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "労働基本権",
    body: "労働基本権とは、労働者が使用者と対等な立場で労働条件を改善するために保障される権利である。団結権、団体交渉権、団体行動権の三つを労働三権という。日本国憲法第28条に定められ、労働組合の活動を支える。",
    shortText: "労働者が労働条件を改善するために保障される権利。",
    order: 12,
    frontText: "労働基本権",
    backText: "労働者が労働条件を改善するための権利。団結権・団体交渉権・団体行動権を労働三権という。",
    isMemorizationTarget: true,
    conceptTags: ["労働基本権", "労働三権", "社会権", "労働", "労働問題"],
    institutionTags: ["労働組合"],
    lawTags: ["日本国憲法", "日本国憲法第28条", "労働組合法"],
    relatedReferenceIds: ["constitution-article-28"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "分類"],
    relatedHints: [
      {
        label: "労働問題と労働法",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["労働", "労働問題", "労働基本権"]
      }
    ]
  },
  {
    id: "politics-economics-rights-political-rights-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "参政権",
    body: "参政権とは、国民が政治に参加する権利である。選挙権、被選挙権、最高裁判所裁判官の国民審査、憲法改正の国民投票などが関係する。参政権は、国民主権を具体化する重要な権利である。",
    shortText: "国民が政治に参加するための権利。",
    order: 13,
    frontText: "参政権",
    backText: "国民が政治に参加する権利。選挙権・被選挙権・国民審査・国民投票などが関係する。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["参政権", "国民主権", "民主主義", "代表民主制", "直接民主制"],
    institutionTags: ["選挙制度", "国民審査"],
    lawTags: ["日本国憲法", "日本国憲法第15条", "日本国憲法第79条", "日本国憲法第96条", "公職選挙法", "国民投票法"],
    relatedReferenceIds: ["constitution-article-15", "constitution-article-79", "constitution-article-96"],
    examTags: ["重要用語", "入試頻出"],
    skillTags: ["用語説明", "制度比較"]
  },
  {
    id: "politics-economics-rights-claims-rights-term",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "term-card",
    title: "請求権",
    body: "請求権とは、国民が国家に対して一定の行為を求める権利である。裁判を受ける権利、国家賠償請求権、刑事補償請求権などが含まれる。人権が侵害された場合に救済を求めるための権利として重要である。",
    shortText: "国家に対して救済や一定の行為を求める権利。",
    order: 14,
    frontText: "請求権",
    backText: "国民が国家に対して一定の行為や救済を求める権利。裁判を受ける権利、国家賠償請求権などを含む。",
    isMemorizationTarget: true,
    conceptTags: ["請求権", "人権保障", "裁判を受ける権利", "国家賠償請求権", "刑事補償請求権"],
    lawTags: ["日本国憲法", "日本国憲法第17条", "日本国憲法第32条", "日本国憲法第40条"],
    relatedReferenceIds: ["constitution-article-17", "constitution-article-32", "constitution-article-40"],
    examTags: ["重要用語", "正誤問題注意"],
    skillTags: ["用語説明", "分類"]
  },
  {
    id: "politics-economics-rights-duties-summary",
    curriculumNodeId: "politics-economics-section-1-1-10",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "権利と義務",
    body: "日本国憲法は、国民の権利を保障するとともに、国民の義務も定めている。代表的な義務として、教育を受けさせる義務、勤労の義務、納税の義務がある。ただし、義務は人権を制限する根拠として安易に使うものではない。民主社会では、権利を保障しながら、社会を支える責任について考えることが重要である。",
    shortText: "憲法上の権利保障と国民の義務の関係を扱う。",
    order: 15,
    regionTags: ["日本"],
    conceptTags: ["基本的人権", "国民の義務", "教育", "労働", "租税"],
    lawTags: ["日本国憲法", "日本国憲法第26条", "日本国憲法第27条", "日本国憲法第30条"],
    relatedReferenceIds: ["constitution-article-26", "constitution-article-27", "constitution-article-30"],
    examTags: ["重要用語", "正誤問題注意"],
    skillTags: ["分類", "条文読解"]
  },
  {
    id: "politics-economics-rights-three-duties-term",
    curriculumNodeId: "politics-economics-section-1-1-10",
    subjectId: "politics-economics",
    type: "term-card",
    title: "国民の三大義務",
    body: "国民の三大義務とは、教育を受けさせる義務、勤労の義務、納税の義務である。教育を受けさせる義務は保護者が子どもに普通教育を受けさせる義務であり、子ども自身に教育を受ける義務があるという意味ではない点に注意が必要である。",
    shortText: "教育を受けさせる義務・勤労の義務・納税の義務。",
    order: 16,
    frontText: "国民の三大義務",
    backText: "教育を受けさせる義務、勤労の義務、納税の義務。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["国民の義務", "教育", "労働", "租税"],
    lawTags: ["日本国憲法", "日本国憲法第26条", "日本国憲法第27条", "日本国憲法第30条"],
    relatedReferenceIds: ["constitution-article-26", "constitution-article-27", "constitution-article-30"],
    examTags: ["基本用語", "重要用語", "正誤問題注意"],
    skillTags: ["用語説明", "条文読解"]
  },
  {
    id: "politics-economics-public-welfare-summary",
    curriculumNodeId: "politics-economics-section-1-1-11",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "公共の福祉",
    body: "公共の福祉とは、人権どうしが衝突する場合に、それぞれの権利を調整するための考え方である。人権は最大限尊重されるべきだが、他者の人権を侵害する形で無制限に行使できるわけではない。ただし、公共の福祉は国家が自由に人権を制限するための言葉ではなく、必要性や合理性が問われる。",
    shortText: "人権相互の衝突を調整するための考え方。",
    order: 17,
    regionTags: ["日本"],
    conceptTags: ["公共の福祉", "基本的人権", "人権保障", "自由権", "社会権", "権利の調整"],
    lawTags: ["日本国憲法", "日本国憲法第12条", "日本国憲法第13条"],
    relatedReferenceIds: ["constitution-article-12", "constitution-article-13"],
    examTags: ["重要用語", "論述対策", "誤解注意"],
    skillTags: ["用語説明", "論述"],
    relatedHints: [
      {
        label: "多数決と少数意見の尊重",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["民主主義", "基本的人権", "公共の福祉"]
      }
    ]
  },
  {
    id: "politics-economics-public-welfare-term",
    curriculumNodeId: "politics-economics-section-1-1-11",
    subjectId: "politics-economics",
    type: "term-card",
    title: "公共の福祉",
    body: "公共の福祉とは、個人の人権と他者の人権、または社会全体の利益が衝突する場合に、人権を調整するための考え方である。重要なのは、公共の福祉が人権を何でも制限できる理由ではなく、人権相互の調整原理として理解される点である。",
    shortText: "人権相互の衝突を調整するための原理。",
    order: 18,
    frontText: "公共の福祉",
    backText: "個人の人権と他者の人権、または社会全体の利益が衝突する場合に、人権を調整するための考え方。",
    isMemorizationTarget: true,
    conceptTags: ["公共の福祉", "権利の調整", "基本的人権", "人権保障"],
    lawTags: ["日本国憲法", "日本国憲法第12条", "日本国憲法第13条"],
    relatedReferenceIds: ["constitution-article-12", "constitution-article-13"],
    examTags: ["重要用語", "入試頻出", "誤解注意"],
    skillTags: ["用語説明"]
  },
  {
    id: "politics-economics-public-welfare-misunderstanding-supplement",
    curriculumNodeId: "politics-economics-section-1-1-11",
    subjectId: "politics-economics",
    type: "supplement-note",
    title: "公共の福祉の誤解",
    body: "公共の福祉は、国家や多数派が気に入らない意見や行動を自由に制限するための言葉ではない。民主社会では、表現の自由や経済活動の自由などを制限する場合でも、目的が正当か、手段が必要かつ合理的かが問われる。公共の福祉は、人権を消す原理ではなく、人権を共存させるための調整原理として理解する必要がある。",
    shortText: "公共の福祉は人権を何でも制限できる理由ではない。",
    order: 19,
    conceptTags: ["公共の福祉", "権利の調整", "表現の自由", "経済活動の自由", "基本的人権"],
    lawTags: ["日本国憲法", "日本国憲法第12条", "日本国憲法第13条", "日本国憲法第21条", "日本国憲法第22条"],
    relatedReferenceIds: ["constitution-article-12", "constitution-article-13", "constitution-article-21", "constitution-article-22"],
    examTags: ["誤解注意", "論述対策", "現代社会との関連"],
    skillTags: ["論述", "因果関係"]
  }
];
