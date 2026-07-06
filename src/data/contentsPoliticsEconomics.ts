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
    id: "politics-economics-rights-liberty-social-political-summary",
    curriculumNodeId: "politics-economics-section-1-1-9",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "自由権・社会権・参政権",
    body: "基本的人権は、国家から不当に干渉されない「自由権」、人間らしい生活を国家に求める「社会権」、国民が政治に参加する「参政権」などに大きく分けられる。自由権は近代市民革命期から重視され、社会権は資本主義の発展に伴う貧困・労働問題を背景に20世紀に確立した。現代の民主政治では、これらの権利が相互に関連しながら保障されている。",
    shortText: "自由権・社会権・参政権の意味とそれぞれの歴史的背景を扱う。",
    order: 4.5,
    conceptTags: ["基本的人権", "自由権", "社会権", "参政権", "市民革命", "福祉国家"],
    examTags: ["重要用語", "比較問題", "論述対策"],
    skillTags: ["分類", "要約", "時系列整理"],
    relatedHints: [
      {
        label: "人権の歴史的展開",
        relation: "background",
        targetSubjectId: "politics-economics",
        conceptTags: ["基本的人権", "自由権", "社会権"]
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

export const politicsEconomicsDemocracyPrinciplesPart4Contents: ContentItem[] = [
  {
    id: "politics-economics-democracy-issues-summary",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "現代民主政治の課題",
    body: "現代民主政治では、国民主権や人権保障の原理を制度として整えるだけでなく、国民が政治に関心をもち、公正な情報に基づいて判断し、政治に参加することが重要である。しかし、政治的無関心、投票率の低下、世論操作、メディアやSNSによる情報の偏り、ポピュリズム、少数者の権利保障など、多くの課題がある。民主政治を維持するには、制度だけでなく、市民の判断力と参加が必要である。",
    shortText: "政治参加・世論・メディア・ポピュリズムなど、現代民主政治の課題を扱う。",
    order: 1,
    conceptTags: ["民主主義", "国民主権", "政治参加", "世論", "政治的無関心", "投票率", "メディアリテラシー", "ポピュリズム", "少数意見の尊重"],
    institutionTags: ["選挙制度"],
    examTags: ["現代社会との関連", "論述対策", "重要用語"],
    skillTags: ["要約", "論述", "資料読解"],
    relatedHints: [
      {
        label: "参政権と選挙制度",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["参政権", "政治参加", "国民主権"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-political-participation-term",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "term-card",
    title: "政治参加",
    body: "政治参加とは、国民や住民が政治の意思決定に関わることである。選挙で投票することだけでなく、請願、住民投票、デモ、署名活動、政党や市民団体での活動、政治について意見を表明することなども含まれる。政治参加は、国民主権を実際に機能させるために重要である。",
    shortText: "国民や住民が政治の意思決定に関わること。",
    order: 2,
    frontText: "政治参加",
    backText: "国民や住民が政治の意思決定に関わること。投票、請願、住民投票、署名活動、意見表明などを含む。",
    isMemorizationTarget: true,
    conceptTags: ["政治参加", "国民主権", "民主主義", "参政権", "社会参加"],
    institutionTags: ["選挙制度", "地方公共団体"],
    lawTags: ["日本国憲法", "日本国憲法第15条", "日本国憲法第16条"],
    relatedReferenceIds: ["constitution-article-15", "constitution-article-16"],
    examTags: ["基本用語", "重要用語", "現代社会との関連"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "公共における社会参加",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["社会参加", "政治参加", "民主主義"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-voting-right-age-source",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "source-note",
    title: "18歳選挙権と主権者教育",
    body: "日本では、2015年の公職選挙法改正により、選挙権年齢が20歳以上から18歳以上へ引き下げられた。これは、若い世代の意見を政治に反映させることを目的とする。高校政治・経済では、選挙権をもつことだけでなく、情報を集め、候補者や政策を比較し、自分の判断で政治に参加する力が重要になる。",
    shortText: "18歳選挙権を通じて、若者の政治参加と主権者教育を考える。",
    order: 3,
    startYear: 2015,
    datePrecision: "year",
    regionTags: ["日本"],
    conceptTags: ["政治参加", "参政権", "国民主権", "主権者教育", "若者の政治参加"],
    institutionTags: ["選挙制度"],
    lawTags: ["公職選挙法"],
    sourceTags: ["公文書"],
    examTags: ["現代社会との関連", "資料読解", "年号暗記"],
    skillTags: ["資料読解", "要約"],
    relatedHints: [
      {
        label: "参政権",
        relation: "example",
        targetSubjectId: "politics-economics",
        conceptTags: ["参政権", "政治参加", "国民主権"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-political-apathy-term",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "term-card",
    title: "政治的無関心",
    body: "政治的無関心とは、政治に対する関心や参加意識が低い状態である。政治は自分の生活に関係がないと感じたり、投票しても社会は変わらないと考えたりすることで、投票率の低下や政治参加の停滞につながる。民主政治では、政治的無関心が広がると、一部の人々の意見だけが政治に反映されやすくなる。",
    shortText: "政治への関心や参加意識が低い状態。",
    order: 4,
    frontText: "政治的無関心",
    backText: "政治への関心や参加意識が低い状態。投票率低下や政治参加の停滞につながる。",
    isMemorizationTarget: true,
    conceptTags: ["政治的無関心", "政治参加", "投票率", "民主主義", "国民主権"],
    institutionTags: ["選挙制度"],
    examTags: ["重要用語", "現代社会との関連", "論述対策"],
    skillTags: ["用語説明", "因果関係"],
    relatedHints: [
      {
        label: "投票率と代表民主制",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["投票率", "代表民主制", "政治参加"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-turnout-supplement",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "supplement-note",
    title: "投票率低下の問題",
    body: "投票率が低下すると、選挙結果が国民全体の意思を十分に反映しているのかが問題になる。特に若い世代の投票率が低い場合、政治家や政党は投票に行く層を重視しやすくなり、若い世代の課題が政策に反映されにくくなる可能性がある。投票率の問題は、代表民主制の正統性や世代間の公平とも関係する。",
    shortText: "投票率低下が代表民主制や世代間公平に与える影響を扱う。",
    order: 5,
    conceptTags: ["投票率", "政治参加", "代表民主制", "若者の政治参加", "世代間公平", "民主主義"],
    institutionTags: ["選挙制度", "政党"],
    examTags: ["現代社会との関連", "論述対策", "資料読解"],
    skillTags: ["因果関係", "論述", "統計読解"],
    relatedHints: [
      {
        label: "少子高齢化と世代間公平",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["少子高齢化", "世代間公平", "社会保障"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-public-opinion-term",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "term-card",
    title: "世論",
    body: "世論とは、政治や社会問題について、多くの人々が共有する意見や考え方である。民主政治では、世論は政治を動かす重要な力になる。ただし、世論はメディアの報道、SNS上の情報、世論調査の設問、感情的な反応などによって影響を受けるため、公正な世論形成が重要である。",
    shortText: "政治や社会問題について、多くの人々が共有する意見や考え方。",
    order: 6,
    frontText: "世論",
    backText: "政治や社会問題について、多くの人々が共有する意見や考え方。",
    isMemorizationTarget: true,
    conceptTags: ["世論", "民主主義", "政治参加", "メディアリテラシー", "情報リテラシー"],
    sourceTags: ["統計", "グラフ"],
    examTags: ["重要用語", "資料読解", "現代社会との関連"],
    skillTags: ["用語説明", "資料読解", "統計読解"],
    relatedHints: [
      {
        label: "メディアと民主政治",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["世論", "メディアリテラシー", "民主主義"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-media-role-term",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "term-card",
    title: "メディアと民主政治",
    body: "メディアは、政治や社会の情報を人々に伝え、権力を監視し、世論形成に影響を与える役割をもつ。新聞、テレビ、インターネット、SNSなどを通じて、人々は政治情報を得る。しかし、情報の選び方や伝え方には偏りが生じることもあるため、複数の情報源を比較し、根拠を確認する姿勢が必要である。",
    shortText: "メディアの情報伝達・権力監視・世論形成の役割を理解する。",
    order: 7,
    frontText: "メディアの政治的役割",
    backText: "政治情報を伝えること、権力を監視すること、世論形成に影響を与えること。",
    isMemorizationTarget: true,
    conceptTags: ["メディア", "世論", "民主主義", "政治参加", "メディアリテラシー", "情報リテラシー"],
    sourceTags: ["新聞", "グラフ", "統計"],
    examTags: ["現代社会との関連", "資料読解", "論述対策"],
    skillTags: ["資料読解", "比較", "論述"],
    relatedHints: [
      {
        label: "表現の自由と知る権利",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["表現の自由", "知る権利", "世論"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-sns-fake-news-supplement",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "supplement-note",
    title: "SNSとフェイクニュース",
    body: "SNSは、個人が政治的意見を発信しやすくし、政治参加のきっかけを広げる一方で、誤情報やフェイクニュースが急速に広がる危険もある。また、自分と似た意見ばかりに触れることで、社会の意見分布を誤って理解することもある。現代民主政治では、情報を受け取る側のメディアリテラシーや情報リテラシーが重要になる。",
    shortText: "SNSによる政治参加の広がりと、誤情報拡散の危険を扱う。",
    order: 8,
    conceptTags: ["SNS", "フェイクニュース", "メディアリテラシー", "情報リテラシー", "世論", "政治参加", "民主主義"],
    sourceTags: ["統計", "グラフ"],
    examTags: ["現代社会との関連", "論述対策", "誤解注意"],
    skillTags: ["資料読解", "比較", "論述"],
    relatedHints: [
      {
        label: "情報化社会と新しい人権",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["情報化", "プライバシーの権利", "知る権利", "メディアリテラシー"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-populism-term",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "term-card",
    title: "ポピュリズム",
    body: "ポピュリズムとは、一般に、既存の政治家や専門家、エリートへの不信を背景に、人々の不満や感情に直接訴える政治手法や運動を指す。民意を重視する点で民主政治と関係するが、複雑な問題を単純化したり、少数者の権利を軽視したりする危険もある。",
    shortText: "人々の不満や感情に直接訴える政治手法や運動。",
    order: 9,
    frontText: "ポピュリズム",
    backText: "既存政治や専門家への不信を背景に、人々の不満や感情に直接訴える政治手法や運動。",
    isMemorizationTarget: true,
    conceptTags: ["ポピュリズム", "民主主義", "世論", "少数意見の尊重", "多数者の専制"],
    examTags: ["重要用語", "現代社会との関連", "論述対策"],
    skillTags: ["用語説明", "論述"],
    relatedHints: [
      {
        label: "多数決と少数意見の尊重",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["民主主義", "多数決", "少数意見の尊重"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-majority-tyranny-supplement",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "supplement-note",
    title: "多数者の専制",
    body: "多数者の専制とは、多数派の意思が絶対視され、少数派の権利や意見が不当に抑えられる状態である。民主政治では多数決が必要になる場面が多いが、多数決だけで民主主義が成り立つわけではない。基本的人権、法の支配、立憲主義は、多数派の権力濫用から少数者を守る役割をもつ。",
    shortText: "多数派の意思が絶対視され、少数派の権利が損なわれる問題を扱う。",
    order: 10,
    conceptTags: ["多数者の専制", "多数決", "少数意見の尊重", "基本的人権", "法の支配", "立憲主義", "民主主義"],
    examTags: ["誤解注意", "論述対策", "比較問題"],
    skillTags: ["論述", "比較", "因果関係"],
    relatedHints: [
      {
        label: "公共の福祉と権利の調整",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["公共の福祉", "権利の調整", "基本的人権"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-civil-society-term",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "term-card",
    title: "市民社会",
    body: "市民社会とは、国家や市場だけに任せるのではなく、市民が自発的に公共的な課題に関わる社会のあり方である。NPO、NGO、ボランティア、市民団体などの活動は、行政だけでは対応しきれない課題に取り組み、民主政治を支える役割をもつ。",
    shortText: "市民が自発的に公共的課題に関わる社会のあり方。",
    order: 11,
    frontText: "市民社会",
    backText: "市民が自発的に公共的な課題に関わる社会のあり方。NPO・NGO・ボランティアなどの活動と関係する。",
    isMemorizationTarget: true,
    conceptTags: ["市民社会", "政治参加", "社会参加", "ボランティア", "民主主義", "公共"],
    institutionTags: ["NPO", "NGO"],
    examTags: ["重要用語", "現代社会との関連"],
    skillTags: ["用語説明"],
    relatedHints: [
      {
        label: "公共における社会参加とボランティア",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["社会参加", "ボランティア", "公共", "市民社会"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-deliberative-democracy-thought",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "thought-card",
    title: "熟議民主主義",
    body: "熟議民主主義とは、人々が十分な情報をもとに話し合い、理由を示し合いながら合意や判断を形成することを重視する民主主義の考え方である。単に多数決で決めるだけでなく、異なる立場の意見を聞き、少数意見もふまえて判断する点が重要である。",
    shortText: "十分な情報と話し合いを通じて判断を形成する民主主義の考え方。",
    order: 12,
    frontText: "熟議民主主義",
    backText: "人々が十分な情報をもとに話し合い、理由を示し合いながら合意や判断を形成することを重視する民主主義の考え方。",
    isMemorizationTarget: true,
    conceptTags: ["熟議民主主義", "民主主義", "政治参加", "少数意見の尊重", "世論"],
    examTags: ["発展", "論述対策", "現代社会との関連"],
    skillTags: ["論述", "比較", "要約"],
    relatedHints: [
      {
        label: "公共における合意形成",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["合意形成", "民主主義", "熟議民主主義"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-issues-flow",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "flow-note",
    title: "現代民主政治の課題の流れ",
    body: "民主政治は、国民が政治の主体となる制度である。しかし、政治的無関心が広がると投票率が低下し、特定の層の意見だけが政治に反映されやすくなる。また、メディアやSNSの影響で世論が偏ったり、感情的な対立が強まったりすることもある。こうした課題に対して、主権者教育、メディアリテラシー、熟議、少数意見の尊重、市民社会の活動が重要になる。",
    shortText: "政治的無関心・情報環境・世論の課題から、主権者教育や熟議へつなげる。",
    order: 13,
    conceptTags: ["民主主義", "政治参加", "政治的無関心", "投票率", "世論", "メディアリテラシー", "熟議民主主義", "市民社会", "少数意見の尊重"],
    examTags: ["論述対策", "因果関係", "現代社会との関連"],
    skillTags: ["因果関係", "要約", "論述"],
    relatedHints: [
      {
        label: "選挙制度と政党政治",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["選挙制度", "政党", "政治参加", "代表民主制"]
      }
    ]
  },
  {
    id: "politics-economics-democracy-principles-crosslink-note",
    curriculumNodeId: "politics-economics-section-1-1-12",
    subjectId: "politics-economics",
    type: "crosslink-note",
    title: "第1章全体の接続",
    body: "民主政治の基本原理は、政治とは何か、国家権力とは何か、民主政治はどのように成立したか、法の支配や立憲主義はなぜ必要か、基本的人権をどう保障するか、という流れで理解する。現代民主政治の課題は、この原理が現実社会でうまく機能しているかを問い直す単元である。今後の国会・内閣・裁判所・選挙制度・政党政治の学習にもつながる。",
    shortText: "民主政治の基本原理を、今後の政治制度学習へ接続する。",
    order: 14,
    conceptTags: ["民主主義", "国家", "国民主権", "法の支配", "立憲主義", "権力分立", "基本的人権", "政治参加"],
    institutionTags: ["国会", "内閣", "裁判所", "選挙制度", "政党"],
    examTags: ["要約", "論述対策", "因果関係"],
    skillTags: ["要約", "時系列整理", "因果関係"],
    relatedHints: [
      {
        label: "国会・内閣・裁判所",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["三権分立", "権力分立", "議院内閣制"],
        institutionTags: ["国会", "内閣", "裁判所"]
      },
      {
        label: "選挙制度と政党政治",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["代表民主制", "政治参加", "政党"],
        institutionTags: ["選挙制度"]
      }
    ]
  }
];

export const politicsEconomicsConstitutionModernPoliticsPart1Contents: ContentItem[] = [
  {
    id: "politics-economics-constitution-modern-politics-summary",
    curriculumNodeId: "politics-economics-section-1-2-1",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "日本国憲法と現代政治",
    body: "この章では、大日本帝国憲法から日本国憲法への転換を通じて、現代日本の政治がどのような原理に基づいているのかを学ぶ。大日本帝国憲法では天皇主権のもとで統治権が位置づけられたが、日本国憲法では国民主権、基本的人権の尊重、平和主義が基本原理となった。憲法は、政治制度を定めるだけでなく、国家権力を制限し、国民の権利を保障する最高法規である。",
    shortText: "大日本帝国憲法から日本国憲法への転換と、現代政治の基本原理を扱う。",
    order: 1,
    periodLabel: "近代日本から戦後日本",
    startYear: 1889,
    endYear: 1947,
    datePrecision: "year",
    regionTags: ["日本"],
    eventTags: ["日本国憲法の公布", "日本国憲法の施行", "戦後改革"],
    conceptTags: ["憲法", "立憲主義", "天皇主権", "国民主権", "基本的人権", "平和主義"],
    institutionTags: ["帝国議会", "国会"],
    lawTags: ["大日本帝国憲法", "日本国憲法"],
    relatedReferenceIds: ["source-meiji-constitution-1889", "constitution-of-japan"],
    examTags: ["重要用語", "比較問題", "論述対策"],
    skillTags: ["時系列整理", "比較", "要約"],
    relatedHints: [
      {
        label: "民主政治の基本原理",
        relation: "background",
        targetSubjectId: "politics-economics",
        conceptTags: ["民主主義", "国民主権", "立憲主義", "基本的人権"]
      }
    ]
  },
  {
    id: "politics-economics-meiji-constitution-summary",
    curriculumNodeId: "politics-economics-section-1-2-1",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "大日本帝国憲法",
    body: "大日本帝国憲法は、1889年に発布され、1890年に施行された日本最初の近代憲法である。天皇が国の元首として統治権を総攬し、臣民の権利は法律の範囲内で認められた。帝国議会が設けられたことで立憲政治の形式は整えられたが、主権は国民ではなく天皇にあるとされた点で、日本国憲法とは大きく異なる。",
    shortText: "天皇主権と臣民の権利を特徴とする日本最初の近代憲法。",
    order: 2,
    periodLabel: "明治憲法体制",
    startYear: 1889,
    endYear: 1947,
    datePrecision: "year",
    regionTags: ["日本"],
    eventTags: ["大日本帝国憲法の発布"],
    peopleTags: ["伊藤博文"],
    conceptTags: ["大日本帝国憲法", "天皇主権", "欽定憲法", "臣民の権利", "立憲主義", "近代国家"],
    institutionTags: ["帝国議会", "枢密院"],
    lawTags: ["大日本帝国憲法"],
    relatedReferenceIds: ["source-meiji-constitution-1889"],
    examTags: ["重要用語", "入試頻出", "比較問題"],
    skillTags: ["用語説明", "比較", "時系列整理"],
    relatedHints: [
      {
        label: "明治維新と近代国家形成",
        relation: "background",
        targetSubjectId: "japanese-history-advanced",
        regionTags: ["日本"],
        eventTags: ["明治維新"],
        conceptTags: ["近代国家", "立憲主義"]
      }
    ]
  },
  {
    id: "politics-economics-meiji-constitution-term",
    curriculumNodeId: "politics-economics-section-1-2-1",
    subjectId: "politics-economics",
    type: "system-card",
    title: "大日本帝国憲法",
    body: "大日本帝国憲法は、天皇が定めて国民に与える形で発布された欽定憲法である。天皇は国の元首とされ、統治権を総攬するとされた。臣民の権利は認められたが、多くは法律の範囲内で保障されるものだったため、国家権力を強く制限するという意味での立憲主義には限界があった。",
    shortText: "1889年発布の欽定憲法。天皇主権と臣民の権利を特徴とする。",
    order: 3,
    periodLabel: "明治憲法体制",
    startYear: 1889,
    datePrecision: "year",
    frontText: "大日本帝国憲法",
    backText: "1889年に発布された日本最初の近代憲法。天皇主権・欽定憲法・臣民の権利が特徴。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    peopleTags: ["伊藤博文"],
    conceptTags: ["大日本帝国憲法", "天皇主権", "欽定憲法", "臣民の権利", "法律の留保"],
    institutionTags: ["帝国議会", "枢密院"],
    lawTags: ["大日本帝国憲法", "大日本帝国憲法第4条"],
    relatedReferenceIds: ["source-meiji-constitution-1889"],
    examTags: ["重要用語", "入試頻出", "正誤問題注意"],
    skillTags: ["用語説明", "条文読解"]
  },
  {
    id: "politics-economics-meiji-constitution-imperial-sovereignty-term",
    curriculumNodeId: "politics-economics-section-1-2-1",
    subjectId: "politics-economics",
    type: "term-card",
    title: "天皇主権",
    body: "天皇主権とは、国家の統治権が天皇にあるとする考え方である。大日本帝国憲法では、天皇が国の元首として統治権を総攬するとされた。日本国憲法の国民主権とは対照的であり、大日本帝国憲法と日本国憲法を比較するうえで最も重要な違いの一つである。",
    shortText: "国家の統治権が天皇にあるとする考え方。",
    order: 4,
    frontText: "天皇主権",
    backText: "国家の統治権が天皇にあるとする考え方。大日本帝国憲法の特徴。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["天皇主権", "主権", "大日本帝国憲法", "国民主権"],
    lawTags: ["大日本帝国憲法", "大日本帝国憲法第4条"],
    relatedReferenceIds: ["source-meiji-constitution-1889"],
    examTags: ["重要用語", "比較問題", "正誤問題注意"],
    skillTags: ["用語説明", "比較"],
    relatedHints: [
      {
        label: "日本国憲法の国民主権",
        relation: "contrast",
        targetSubjectId: "politics-economics",
        conceptTags: ["国民主権", "主権", "象徴天皇制"]
      }
    ]
  },
  {
    id: "politics-economics-meiji-constitution-civil-rights-term",
    curriculumNodeId: "politics-economics-section-1-2-1",
    subjectId: "politics-economics",
    type: "term-card",
    title: "臣民の権利",
    body: "臣民の権利とは、大日本帝国憲法のもとで国民に認められた権利である。信教の自由、言論・出版・集会・結社の自由、財産権などが定められたが、多くは法律の範囲内で保障されるものだった。日本国憲法の基本的人権が、侵すことのできない永久の権利とされる点と比較して理解する必要がある。",
    shortText: "大日本帝国憲法下で、法律の範囲内で認められた国民の権利。",
    order: 5,
    frontText: "臣民の権利",
    backText: "大日本帝国憲法のもとで国民に認められた権利。多くは法律の範囲内で保障された。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["臣民の権利", "法律の留保", "基本的人権", "人権保障"],
    lawTags: ["大日本帝国憲法", "日本国憲法"],
    relatedReferenceIds: ["source-meiji-constitution-1889", "constitution-of-japan"],
    examTags: ["重要用語", "比較問題", "正誤問題注意"],
    skillTags: ["比較", "用語説明"],
    relatedHints: [
      {
        label: "基本的人権の尊重",
        relation: "contrast",
        targetSubjectId: "politics-economics",
        conceptTags: ["基本的人権", "人権保障", "個人の尊重"]
      }
    ]
  },
  {
    id: "politics-economics-meiji-constitution-japan-constitution-comparison",
    curriculumNodeId: "politics-economics-section-1-2-1",
    subjectId: "politics-economics",
    type: "comparison-note",
    title: "大日本帝国憲法と日本国憲法の比較",
    body: "大日本帝国憲法は天皇主権を基本とし、国民は臣民として位置づけられた。臣民の権利は法律の範囲内で認められた。一方、日本国憲法は国民主権を基本とし、国民の基本的人権を侵すことのできない永久の権利として保障している。また、日本国憲法では天皇は日本国と日本国民統合の象徴とされ、政治的権能をもたない。",
    shortText: "主権・人権・天皇の地位を軸に、二つの憲法を比較する。",
    order: 6,
    periodLabel: "明治憲法体制から日本国憲法体制へ",
    startYear: 1889,
    endYear: 1947,
    datePrecision: "year",
    regionTags: ["日本"],
    conceptTags: ["大日本帝国憲法", "日本国憲法", "天皇主権", "国民主権", "臣民の権利", "基本的人権", "象徴天皇制"],
    institutionTags: ["帝国議会", "国会"],
    lawTags: ["大日本帝国憲法", "日本国憲法", "日本国憲法第1条", "日本国憲法第4条"],
    relatedReferenceIds: ["source-meiji-constitution-1889", "constitution-of-japan", "constitution-article-1", "constitution-article-4"],
    examTags: ["比較問題", "入試頻出", "論述対策"],
    skillTags: ["比較", "条文読解", "論述"],
    relatedHints: [
      {
        label: "日本史探究の明治憲法体制と戦後改革",
        relation: "same-concept",
        targetSubjectId: "japanese-history-advanced",
        regionTags: ["日本"],
        eventTags: ["戦後改革"],
        conceptTags: ["大日本帝国憲法", "日本国憲法", "民主化"]
      }
    ]
  },
  {
    id: "politics-economics-constitution-enactment-summary",
    curriculumNodeId: "politics-economics-section-1-2-2",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "日本国憲法の成立",
    body: "日本国憲法は、第二次世界大戦後の占領改革の中で、大日本帝国憲法を改正する形式をとって成立した。ポツダム宣言の受諾後、日本政府による憲法改正案の検討、GHQ草案の提示、日本政府案の作成、帝国議会での審議を経て、1946年11月3日に公布され、1947年5月3日に施行された。",
    shortText: "占領改革の中で、大日本帝国憲法の改正手続を経て成立した憲法。",
    order: 7,
    periodLabel: "戦後改革",
    startYear: 1945,
    endYear: 1947,
    datePrecision: "year",
    regionTags: ["日本", "アメリカ"],
    eventTags: ["ポツダム宣言受諾", "戦後改革", "日本国憲法の公布", "日本国憲法の施行"],
    conceptTags: ["日本国憲法", "国民主権", "基本的人権", "平和主義", "民主化", "占領改革"],
    institutionTags: ["GHQ", "帝国議会"],
    lawTags: ["日本国憲法", "大日本帝国憲法", "ポツダム宣言"],
    relatedReferenceIds: ["constitution-of-japan", "declaration-potsdam-1945", "timeline-1946-constitution-of-japan-promulgation", "timeline-1947-constitution-of-japan-enforcement"],
    examTags: ["重要用語", "年号暗記", "因果関係"],
    skillTags: ["時系列整理", "因果関係", "要約"],
    relatedHints: [
      {
        label: "日本史探究の占領改革",
        relation: "same-concept",
        targetSubjectId: "japanese-history-advanced",
        regionTags: ["日本"],
        eventTags: ["戦後改革"],
        conceptTags: ["民主化", "占領改革"]
      }
    ]
  },
  {
    id: "politics-economics-constitution-potsdam-declaration-event",
    curriculumNodeId: "politics-economics-section-1-2-2",
    subjectId: "politics-economics",
    type: "event-card",
    title: "ポツダム宣言受諾",
    body: "ポツダム宣言受諾は、日本が第二次世界大戦の終結を受け入れ、占領改革へ進む出発点となった出来事である。ポツダム宣言は、日本の軍国主義の除去や民主主義的傾向の復活強化などを求めた。日本国憲法の成立は、この戦後改革の流れの中で理解する必要がある。",
    shortText: "戦争終結と戦後改革の出発点となった出来事。",
    order: 8,
    periodLabel: "第二次世界大戦後",
    startYear: 1945,
    datePrecision: "year",
    frontText: "ポツダム宣言受諾",
    backText: "日本が第二次世界大戦の終結を受け入れ、占領改革へ進む出発点となった出来事。",
    isMemorizationTarget: true,
    regionTags: ["日本", "アメリカ"],
    eventTags: ["ポツダム宣言受諾", "第二次世界大戦", "戦後改革"],
    conceptTags: ["占領改革", "民主化", "日本国憲法", "平和主義"],
    lawTags: ["ポツダム宣言"],
    relatedReferenceIds: ["declaration-potsdam-1945"],
    examTags: ["重要用語", "年号暗記", "因果関係"],
    skillTags: ["時系列整理", "因果関係"]
  },
  {
    id: "politics-economics-constitution-ghq-draft-term",
    curriculumNodeId: "politics-economics-section-1-2-2",
    subjectId: "politics-economics",
    type: "term-card",
    title: "GHQ草案",
    body: "GHQ草案とは、日本国憲法の制定過程で、連合国軍総司令部が日本政府に提示した憲法草案である。日本政府の改正案が不十分と判断された後、GHQ草案をもとに日本政府案が作成され、帝国議会で審議された。日本国憲法の成立過程を理解するうえで重要な用語である。",
    shortText: "連合国軍総司令部が日本政府に提示した憲法草案。",
    order: 9,
    periodLabel: "戦後改革",
    startYear: 1946,
    datePrecision: "year",
    frontText: "GHQ草案",
    backText: "日本国憲法の制定過程で、連合国軍総司令部が日本政府に提示した憲法草案。",
    isMemorizationTarget: true,
    regionTags: ["日本", "アメリカ"],
    conceptTags: ["GHQ草案", "日本国憲法", "占領改革", "民主化"],
    institutionTags: ["GHQ", "帝国議会"],
    lawTags: ["日本国憲法", "大日本帝国憲法"],
    relatedReferenceIds: ["source-ghq-draft-1946"],
    examTags: ["重要用語", "因果関係", "正誤問題注意"],
    skillTags: ["用語説明", "時系列整理"]
  },
  {
    id: "politics-economics-constitution-enactment-flow",
    curriculumNodeId: "politics-economics-section-1-2-2",
    subjectId: "politics-economics",
    type: "flow-note",
    title: "日本国憲法成立の流れ",
    body: "1945年に日本がポツダム宣言を受諾する。戦後改革の中で、憲法改正が課題となる。日本政府は改正案を検討したが、GHQはそれを不十分と判断し、1946年にGHQ草案を提示した。その後、日本政府案が作られ、帝国議会で審議される。日本国憲法は1946年11月3日に公布され、1947年5月3日に施行された。",
    shortText: "ポツダム宣言受諾からGHQ草案、公布・施行までの流れを整理する。",
    order: 10,
    periodLabel: "日本国憲法制定過程",
    startYear: 1945,
    endYear: 1947,
    datePrecision: "year",
    regionTags: ["日本", "アメリカ"],
    eventTags: ["ポツダム宣言受諾", "戦後改革", "日本国憲法の公布", "日本国憲法の施行"],
    conceptTags: ["日本国憲法", "GHQ草案", "占領改革", "民主化", "国民主権", "基本的人権", "平和主義"],
    institutionTags: ["GHQ", "帝国議会"],
    lawTags: ["日本国憲法", "大日本帝国憲法", "ポツダム宣言"],
    relatedReferenceIds: ["constitution-of-japan", "declaration-potsdam-1945", "source-ghq-draft-1946"],
    examTags: ["因果関係", "年号暗記", "論述対策"],
    skillTags: ["時系列整理", "因果関係", "要約"],
    relatedHints: [
      {
        label: "戦後改革と民主化",
        relation: "same-concept",
        targetSubjectId: "japanese-history-advanced",
        eventTags: ["戦後改革"],
        conceptTags: ["民主化", "占領改革", "日本国憲法"]
      }
    ]
  },
  {
    id: "politics-economics-constitution-three-principles-term",
    curriculumNodeId: "politics-economics-section-1-2-2",
    subjectId: "politics-economics",
    type: "term-card",
    title: "日本国憲法の三大原理",
    body: "日本国憲法の三大原理とは、国民主権、基本的人権の尊重、平和主義である。国民主権は政治の最終的な決定権が国民にあること、基本的人権の尊重は個人の尊厳と権利を保障すること、平和主義は戦争を放棄し平和を重視することを意味する。",
    shortText: "国民主権・基本的人権の尊重・平和主義の三つ。",
    order: 11,
    frontText: "日本国憲法の三大原理",
    backText: "国民主権、基本的人権の尊重、平和主義。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["日本国憲法", "国民主権", "基本的人権", "平和主義", "個人の尊重"],
    lawTags: ["日本国憲法", "日本国憲法第1条", "日本国憲法第9条", "日本国憲法第11条", "日本国憲法第13条", "日本国憲法第97条"],
    relatedReferenceIds: ["constitution-of-japan", "constitution-article-1", "constitution-article-9", "constitution-article-11", "constitution-article-13", "constitution-article-97"],
    examTags: ["基本用語", "重要用語", "入試頻出"],
    skillTags: ["用語説明", "分類"]
  },
  {
    id: "politics-economics-popular-sovereignty-summary",
    curriculumNodeId: "politics-economics-section-1-2-3",
    subjectId: "politics-economics",
    type: "section-summary",
    title: "国民主権",
    body: "国民主権とは、国の政治の最終的な決定権が国民にあるという原理である。日本国憲法第1条は、天皇を日本国と日本国民統合の象徴とし、その地位は主権の存する日本国民の総意に基づくと定めている。国民主権は、選挙、国民投票、請願などを通じて具体化される。",
    shortText: "政治の最終的な決定権が国民にあるという日本国憲法の基本原理。",
    order: 12,
    regionTags: ["日本"],
    conceptTags: ["国民主権", "主権", "民主主義", "参政権", "象徴天皇制", "政治参加"],
    institutionTags: ["選挙制度", "国会"],
    lawTags: ["日本国憲法", "日本国憲法第1条", "日本国憲法第15条", "日本国憲法第16条", "日本国憲法第96条"],
    relatedReferenceIds: ["constitution-article-1", "constitution-article-15", "constitution-article-16", "constitution-article-96"],
    examTags: ["重要用語", "入試頻出", "論述対策"],
    skillTags: ["用語説明", "条文読解", "制度比較"],
    relatedHints: [
      {
        label: "参政権と選挙制度",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["参政権", "政治参加", "代表民主制"]
      }
    ]
  },
  {
    id: "politics-economics-popular-sovereignty-term",
    curriculumNodeId: "politics-economics-section-1-2-3",
    subjectId: "politics-economics",
    type: "term-card",
    title: "国民主権",
    body: "国民主権とは、国の政治の最終的な決定権が国民にあるという考え方である。日本国憲法では、主権は国民にあるとされ、天皇は日本国と日本国民統合の象徴と位置づけられる。国民主権は、選挙や国民投票などの政治参加によって支えられる。",
    shortText: "政治の最終決定権が国民にあるという考え方。",
    order: 13,
    frontText: "国民主権",
    backText: "国の政治の最終的な決定権が国民にあるという考え方。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["国民主権", "主権", "民主主義", "政治参加", "象徴天皇制"],
    institutionTags: ["選挙制度"],
    lawTags: ["日本国憲法", "日本国憲法第1条"],
    relatedReferenceIds: ["constitution-article-1"],
    examTags: ["基本用語", "重要用語", "入試頻出"],
    skillTags: ["用語説明"]
  },
  {
    id: "politics-economics-popular-sovereignty-symbolic-emperor-system",
    curriculumNodeId: "politics-economics-section-1-2-3",
    subjectId: "politics-economics",
    type: "system-card",
    title: "象徴天皇制",
    body: "象徴天皇制とは、日本国憲法のもとで、天皇を日本国と日本国民統合の象徴とする制度である。天皇の地位は主権の存する日本国民の総意に基づく。天皇は憲法の定める国事行為のみを行い、国政に関する権能をもたない。",
    shortText: "天皇を日本国と日本国民統合の象徴とする制度。",
    order: 14,
    frontText: "象徴天皇制",
    backText: "日本国憲法のもとで、天皇を日本国と日本国民統合の象徴とする制度。天皇は国政に関する権能をもたない。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["象徴天皇制", "国民主権", "主権", "日本国憲法"],
    lawTags: ["日本国憲法", "日本国憲法第1条", "日本国憲法第4条"],
    relatedReferenceIds: ["constitution-article-1", "constitution-article-4"],
    examTags: ["重要用語", "入試頻出", "正誤問題注意"],
    skillTags: ["用語説明", "条文読解"],
    relatedHints: [
      {
        label: "大日本帝国憲法の天皇主権との比較",
        relation: "contrast",
        targetSubjectId: "politics-economics",
        conceptTags: ["天皇主権", "国民主権", "象徴天皇制"]
      }
    ]
  },
  {
    id: "politics-economics-popular-sovereignty-realization-flow",
    curriculumNodeId: "politics-economics-section-1-2-3",
    subjectId: "politics-economics",
    type: "flow-note",
    title: "国民主権を具体化するしくみ",
    body: "国民主権は、単に憲法に書かれているだけでは機能しない。国民は選挙で代表者を選び、国会を通じて政治に関わる。また、憲法改正では国民投票が必要とされ、請願権によって国や地方公共団体に意見や要望を伝えることもできる。国民主権は、参政権や政治参加によって具体化される。",
    shortText: "選挙・国民投票・請願を通じて、国民主権が具体化される。",
    order: 15,
    regionTags: ["日本"],
    conceptTags: ["国民主権", "参政権", "政治参加", "代表民主制", "直接民主制", "請願権"],
    institutionTags: ["選挙制度", "国会"],
    lawTags: ["日本国憲法", "日本国憲法第15条", "日本国憲法第16条", "日本国憲法第96条", "公職選挙法", "国民投票法"],
    relatedReferenceIds: ["constitution-article-15", "constitution-article-16", "constitution-article-96"],
    examTags: ["因果関係", "論述対策", "現代社会との関連"],
    skillTags: ["因果関係", "制度比較", "論述"],
    relatedHints: [
      {
        label: "選挙制度と政党政治",
        relation: "effect",
        targetSubjectId: "politics-economics",
        conceptTags: ["政治参加", "代表民主制", "選挙制度"],
        institutionTags: ["選挙制度"]
      }
    ]
  }
];
