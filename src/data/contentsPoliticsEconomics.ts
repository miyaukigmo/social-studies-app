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
    conceptTags: ["国家", "民主主義", "公共の福祉"],
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
    conceptTags: ["国家", "民主主義"],
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
    conceptTags: ["民主主義", "自由", "平等", "公共の福祉"],
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
    conceptTags: ["国家", "主権", "国民主権", "立憲主義", "権力分立"],
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
    conceptTags: ["国家", "主権"],
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
    conceptTags: ["国家", "立憲主義", "法の支配", "権力分立", "基本的人権"],
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
    conceptTags: ["人権", "自由", "平等", "基本的人権"],
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
    conceptTags: ["国民主権", "民主主義", "人権", "自由", "平等"],
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
    conceptTags: ["市民革命", "民主主義", "国民主権", "人権", "立憲主義"],
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
