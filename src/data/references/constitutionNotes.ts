import type { ConstitutionArticleNote } from "../../types/constitution";

export const constitutionNotes: ConstitutionArticleNote[] = [
  {
    id: "constitution-note-preamble",
    targetId: "constitution-preamble",
    targetType: "preamble",
    summary: "日本国憲法の基本理念を示す前文。国民主権、平和主義、国際協調などと関係する。",
    keywords: ["国民主権", "平和主義", "国際協調", "民主主義", "平和的生存権"],
    relatedCurriculumNodeIds: [],
    relatedStudyContentIds: [],
    memo: "日本国憲法全体の理念を示す部分。特に国民主権、戦争の惨禍の防止、恒久平和、国際協調を読み取ることが重要。",
  },
  {
    id: "constitution-note-article-1",
    targetId: "constitution-article-1",
    targetType: "article",
    summary: "象徴天皇制と国民主権の関係を示す条文。",
    keywords: [
      "象徴天皇制",
      "国民主権",
      "天皇",
      "日本国の象徴",
      "日本国民統合の象徴",
      "主権在民"
    ],
    relatedCurriculumNodeIds: ["politics-economics-section-1-2-3"],
    relatedStudyContentIds: [],
    memo: "大日本帝国憲法の天皇主権から、日本国憲法の国民主権へ転換したことを理解するうえで中心となる条文。天皇の地位は、主権の存する日本国民の総意に基づくとされ、天皇は主権者ではなく象徴と位置づけられる。",
  },
  {
    id: "constitution-note-article-2",
    targetId: "constitution-article-2",
    targetType: "article",
    summary: "皇位の世襲と皇室典範による皇位継承を定める条文。",
    keywords: [
      "皇位",
      "世襲",
      "皇室典範",
      "皇位継承",
      "国会の議決"
    ],
    relatedCurriculumNodeIds: ["politics-economics-section-1-2-3"],
    relatedStudyContentIds: [],
    memo: "皇位は世襲であり、その継承は国会の議決した皇室典範によると定める。皇室に関する制度であっても、憲法のもとでは国会の議決した法律によって定められる点が重要。",
  },
  {
    id: "constitution-note-article-3",
    targetId: "constitution-article-3",
    targetType: "article",
    summary: "天皇の国事行為には内閣の助言と承認が必要であり、内閣が責任を負うことを定める条文。",
    keywords: [
      "国事行為",
      "内閣の助言と承認",
      "内閣の責任",
      "象徴天皇制",
      "国民主権"
    ],
    relatedCurriculumNodeIds: ["politics-economics-section-1-2-3"],
    relatedStudyContentIds: [],
    memo: "天皇の行為が政治的に独立して行われるのではなく、内閣の助言と承認を必要とし、その責任は内閣が負うことを示す。象徴天皇制のもとで、天皇が政治責任を負わない仕組みを理解するうえで重要。",
  },
  {
    id: "constitution-note-article-4",
    targetId: "constitution-article-4",
    targetType: "article",
    summary: "天皇は憲法に定める国事行為のみを行い、国政に関する権能をもたないことを定める条文。",
    keywords: [
      "国事行為",
      "国政に関する権能",
      "象徴天皇制",
      "権能行使の委任",
      "天皇"
    ],
    relatedCurriculumNodeIds: ["politics-economics-section-1-2-3"],
    relatedStudyContentIds: [],
    memo: "天皇が国政に関する実質的な権限をもたないことを明確にする条文。第1条の象徴天皇制、第3条の内閣の助言と承認、第7条の国事行為とセットで理解するとよい。",
  },
  {
    id: "constitution-note-article-5",
    targetId: "constitution-article-5",
    targetType: "article",
    summary: "摂政が置かれる場合、摂政が天皇の名で国事行為を行うことを定める条文。",
    keywords: [
      "摂政",
      "皇室典範",
      "国事行為",
      "天皇",
      "象徴天皇制"
    ],
    relatedCurriculumNodeIds: ["politics-economics-section-1-2-3"],
    relatedStudyContentIds: [],
    memo: "皇室典範により摂政が置かれる場合、摂政は天皇の名で国事行為を行う。ただし、その場合にも天皇が国政に関する権能をもたないという第4条第1項の考え方が準用される。",
  },
  {
    id: "constitution-note-article-6",
    targetId: "constitution-article-6",
    targetType: "article",
    summary: "天皇による内閣総理大臣と最高裁判所長官の任命行為を定める条文。",
    keywords: [
      "内閣総理大臣",
      "最高裁判所長官",
      "任命",
      "国会の指名",
      "内閣の指名",
      "国事行為"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-3",
      "politics-economics-section-1-3-1",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "天皇は内閣総理大臣と最高裁判所長官を任命するが、内閣総理大臣は国会の指名に基づき、最高裁判所長官は内閣の指名に基づく。天皇が自由に人選するのではなく、形式的・儀礼的な任命行為として理解することが重要。",
  },
  {
    id: "constitution-note-article-7",
    targetId: "constitution-article-7",
    targetType: "article",
    summary: "天皇の国事行為の具体的内容を列挙する条文。",
    keywords: [
      "国事行為",
      "憲法改正の公布",
      "法律の公布",
      "国会の召集",
      "衆議院の解散",
      "栄典",
      "大赦",
      "外交文書",
      "儀式"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-3",
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "天皇の国事行為を具体的に列挙する条文。憲法改正・法律・政令・条約の公布、国会の召集、衆議院の解散、総選挙施行の公示、栄典、認証、外交文書の接受、儀式などが含まれる。いずれも内閣の助言と承認に基づいて行われ、天皇の政治的判断によるものではない。",
  },
  {
    id: "constitution-note-article-8",
    targetId: "constitution-article-8",
    targetType: "article",
    summary: "皇室への財産の授受には国会の議決が必要であることを定める条文。",
    keywords: [
      "皇室財産",
      "財産の授受",
      "国会の議決",
      "皇室",
      "財政民主主義"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-3",
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "皇室に財産を譲り渡したり、皇室が財産を譲り受けたり賜与したりするには、国会の議決が必要であると定める。皇室に関わる財産行為も、国会による民主的統制のもとに置かれている点が重要。",
  },
  {
    id: "constitution-note-article-9",
    targetId: "constitution-article-9",
    targetType: "article",
    summary: "平和主義を具体化する中心条文。戦争放棄、戦力不保持、交戦権の否認を定める。",
    keywords: [
      "平和主義",
      "第9条",
      "戦争放棄",
      "武力による威嚇",
      "武力の行使",
      "国際紛争",
      "戦力不保持",
      "交戦権の否認",
      "自衛権",
      "自衛隊",
      "専守防衛",
      "日米安全保障条約",
      "集団的自衛権",
      "安全保障",
      "国際平和協力"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-5"
    ],
    relatedStudyContentIds: [],
    memo: "日本国憲法の平和主義を理解するうえで中心となる条文。第1項は、国際紛争を解決する手段としての戦争、武力による威嚇、武力の行使を放棄する。第2項は、陸海空軍その他の戦力を保持せず、国の交戦権を認めないと定める。高校政治・経済では、条文そのものの理解に加えて、自衛権、自衛隊、専守防衛、日米安全保障体制、集団的自衛権、国際平和協力などとの関係が重要な論点になる。ただし、これらは第9条本文に直接書かれている内容ではなく、戦後日本の安全保障政策や政府解釈、政治的議論の中で扱われてきた論点として整理する。",
  },
  {
    id: "constitution-note-article-10",
    targetId: "constitution-article-10",
    targetType: "article",
    summary: "日本国民たる要件を法律で定めることを規定する条文。",
    keywords: [
      "日本国民",
      "国籍",
      "国民の要件",
      "法律事項",
      "国籍法"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "誰が日本国民であるかは、憲法本文で直接定めるのではなく、法律で定めるとされる。具体的には国籍法と関係する。人権や参政権を考える前提として、国民の範囲をどう定めるかに関わる条文。",
  },
  {
    id: "constitution-note-article-11",
    targetId: "constitution-article-11",
    targetType: "article",
    summary: "国民が基本的人権を妨げられず、現在および将来の国民に与えられる永久の権利であることを定める条文。",
    keywords: [
      "基本的人権",
      "永久の権利",
      "人権保障",
      "侵すことのできない権利",
      "現在及び将来の国民"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "基本的人権が国家から一時的に与えられるものではなく、侵すことのできない永久の権利として位置づけられている点が重要。第97条の基本的人権の永久不可侵性とも関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-12",
    targetId: "constitution-article-12",
    targetType: "article",
    summary: "自由と権利を国民の不断の努力によって保持すべきこと、また権利の濫用禁止と公共の福祉のための利用を定める条文。",
    keywords: [
      "自由及び権利",
      "不断の努力",
      "権利の濫用禁止",
      "公共の福祉",
      "人権保障",
      "国民の責任"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "人権は憲法に書かれているだけで自動的に守られるものではなく、国民の不断の努力によって保持されるとされる。また、自由や権利は濫用してはならず、公共の福祉のために利用する責任を負う。人権保障と社会全体の調整を考えるうえで重要な条文。",
  },
  {
    id: "constitution-note-article-13",
    targetId: "constitution-article-13",
    targetType: "article",
    summary: "個人として尊重されること、生命・自由・幸福追求に対する国民の権利、公共の福祉による調整を定める条文。",
    keywords: [
      "個人の尊重",
      "個人の尊厳",
      "幸福追求権",
      "生命",
      "自由",
      "公共の福祉",
      "新しい人権",
      "自己決定権",
      "プライバシーの権利"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4",
      "politics-economics-section-1-2-7"
    ],
    relatedStudyContentIds: [],
    memo: "日本国憲法の人権保障の中心にある条文。個人の尊重を定め、生命・自由・幸福追求に対する国民の権利を保障する。高校政治・経済では、幸福追求権を根拠として、プライバシーの権利、自己決定権、環境権などの新しい人権が論じられることがある。ただし、これらの権利はすべて同じ程度に確立しているわけではない点にも注意する。",
  },
  {
    id: "constitution-note-article-14",
    targetId: "constitution-article-14",
    targetType: "article",
    summary: "法の下の平等、差別の禁止、貴族制度の否認、栄典に特権を伴わせないことを定める条文。",
    keywords: [
      "法の下の平等",
      "平等権",
      "差別の禁止",
      "人種",
      "信条",
      "性別",
      "社会的身分",
      "門地",
      "貴族制度の否認",
      "栄典"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-9"
    ],
    relatedStudyContentIds: [],
    memo: "平等権の中心条文。人種、信条、性別、社会的身分、門地によって、政治的・経済的・社会的関係において差別されないと定める。形式的に同じ扱いをするだけでなく、現代社会では実質的平等や差別解消の観点からも重要になる。女性差別、障害者差別、外国人差別、部落差別、性的少数者への差別など、現代的課題と関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-15",
    targetId: "constitution-article-15",
    targetType: "article",
    summary: "公務員の選定罷免権、公務員の全体奉仕者性、普通選挙、秘密選挙を定める条文。",
    keywords: [
      "公務員の選定罷免権",
      "参政権",
      "国民主権",
      "全体の奉仕者",
      "普通選挙",
      "秘密選挙",
      "選挙権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-3",
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "国民主権を具体化する条文の一つ。公務員を選び、罷免することは国民固有の権利であるとされる。また、公務員は一部の奉仕者ではなく全体の奉仕者であると定める。普通選挙と秘密選挙も明記され、民主政治の基本制度を支える条文として重要。",
  },
  {
    id: "constitution-note-article-16",
    targetId: "constitution-article-16",
    targetType: "article",
    summary: "損害救済、公務員罷免、法律・命令・規則の制定改廃などについて請願する権利を定める条文。",
    keywords: [
      "請願権",
      "請求権",
      "損害救済",
      "公務員の罷免",
      "法律の制定改廃",
      "政治参加"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4",
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "請願権は、国や地方公共団体に対して希望や意見を申し出る権利である。損害救済、公務員の罷免、法律・命令・規則の制定・廃止・改正などについて請願できる。参政権と請求権の性格をあわせもつ権利として理解できる。",
  },
  {
    id: "constitution-note-article-17",
    targetId: "constitution-article-17",
    targetType: "article",
    summary: "公務員の不法行為によって損害を受けた場合、国または公共団体に賠償を求める権利を定める条文。",
    keywords: [
      "国家賠償請求権",
      "請求権",
      "公務員の不法行為",
      "国",
      "公共団体",
      "人権保障",
      "行政責任"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "国家賠償請求権を定める条文。公務員の不法行為によって損害を受けたとき、国または公共団体に賠償を求めることができる。国家権力による権利侵害に対する救済制度として重要で、第32条の裁判を受ける権利や司法による人権保障とも関係する。",
  },
  {
    id: "constitution-note-article-18",
    targetId: "constitution-article-18",
    targetType: "article",
    summary: "奴隷的拘束を禁止し、犯罪による処罰の場合を除いて意に反する苦役に服させられないことを定める条文。",
    keywords: [
      "奴隷的拘束",
      "苦役からの自由",
      "身体の自由",
      "人身の自由",
      "強制労働の禁止"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "身体の自由・人身の自由に関わる条文。奴隷的拘束を禁止し、犯罪による処罰の場合を除いて、本人の意思に反する苦役に服させられないと定める。近代憲法における自由権の基本として理解するとよい。",
  },
  {
    id: "constitution-note-article-19",
    targetId: "constitution-article-19",
    targetType: "article",
    summary: "思想及び良心の自由は侵してはならないことを定める条文。",
    keywords: [
      "思想及び良心の自由",
      "精神的自由権",
      "内心の自由",
      "思想の自由",
      "良心の自由",
      "自由権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "精神的自由権の基本となる条文。人の内心にある思想や良心は、国家権力によって侵されてはならない。表現の自由や信教の自由と違い、思想・良心そのものは内心にとどまる限り絶対的に保障されると理解されることが多い。",
  },
  {
    id: "constitution-note-article-20",
    targetId: "constitution-article-20",
    targetType: "article",
    summary: "信教の自由、宗教団体への特権付与の禁止、宗教的行為への参加強制の禁止、政教分離を定める条文。",
    keywords: [
      "信教の自由",
      "精神的自由権",
      "宗教の自由",
      "政教分離",
      "宗教団体",
      "宗教的活動",
      "参加強制の禁止",
      "国家と宗教"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "信教の自由と政教分離を定める条文。個人がどの宗教を信じるか、または信じないかの自由を保障するとともに、国や公的機関が特定の宗教に特権を与えたり、宗教的活動を行ったりすることを禁じる。個人の内面の自由と、国家と宗教の距離を考えるうえで重要。",
  },
  {
    id: "constitution-note-article-21",
    targetId: "constitution-article-21",
    targetType: "article",
    summary: "集会・結社・言論・出版その他一切の表現の自由、検閲の禁止、通信の秘密を定める条文。",
    keywords: [
      "表現の自由",
      "集会の自由",
      "結社の自由",
      "言論の自由",
      "出版の自由",
      "報道の自由",
      "知る権利",
      "検閲の禁止",
      "通信の秘密",
      "精神的自由権",
      "民主政治",
      "メディア",
      "インターネット",
      "SNS"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-10"
    ],
    relatedStudyContentIds: [],
    memo: "表現の自由を定める中心条文。言論・出版・集会・結社などの自由は、個人の自己実現だけでなく、国民が政治について情報を得て意見を形成するための民主政治の基盤でもある。高校政治・経済では、報道の自由、知る権利、検閲の禁止、通信の秘密と関連づけて理解する。現代では、SNS、インターネット上の誹謗中傷、デマ、プライバシー、ヘイトスピーチなどとの調整も重要な論点になる。",
  },
  {
    id: "constitution-note-article-22",
    targetId: "constitution-article-22",
    targetType: "article",
    summary: "居住・移転・職業選択の自由、外国移住と国籍離脱の自由を定める条文。",
    keywords: [
      "居住の自由",
      "移転の自由",
      "職業選択の自由",
      "経済的自由権",
      "外国移住の自由",
      "国籍離脱の自由",
      "公共の福祉",
      "営業の自由",
      "移動の自由"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "経済的自由権と移動の自由に関わる条文。居住・移転の自由、職業選択の自由は、個人が生活の場所や職業を選ぶ自由を保障する。ただし、条文上も公共の福祉に反しない限りとされており、職業選択の自由は資格制度、営業規制、労働政策などとの関係で制限される場合がある。外国移住と国籍離脱の自由も定めている。",
  },
  {
    id: "constitution-note-article-23",
    targetId: "constitution-article-23",
    targetType: "article",
    summary: "学問の自由を保障する条文。",
    keywords: [
      "学問の自由",
      "精神的自由権",
      "研究の自由",
      "教授の自由",
      "大学の自治",
      "知的探究",
      "思想の自由",
      "表現の自由"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "学問の自由を保障する条文。学問研究は、国家権力や特定の思想によって不当に制限されるべきではないという考え方に基づく。高校政治・経済では、研究の自由、研究成果を発表する自由、教授の自由、大学の自治などと関連づけて理解する。思想・良心の自由や表現の自由とも近い関係にある。",
  },
  {
    id: "constitution-note-article-24",
    targetId: "constitution-article-24",
    targetType: "article",
    summary: "婚姻と家族生活について、個人の尊厳と両性の本質的平等に立脚すべきことを定める条文。",
    keywords: [
      "婚姻",
      "家族",
      "両性の合意",
      "夫婦同等の権利",
      "個人の尊厳",
      "両性の本質的平等",
      "男女平等",
      "家族生活",
      "配偶者の選択",
      "相続",
      "離婚"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-9",
      "politics-economics-section-1-2-12"
    ],
    relatedStudyContentIds: [],
    memo: "婚姻と家族生活に関する基本原則を定める条文。婚姻は両性の合意のみに基づいて成立し、夫婦が同等の権利を有することを基本とする。また、婚姻・家族に関する法律は、個人の尊厳と両性の本質的平等に立脚して制定されなければならない。高校政治・経済では、男女平等、家族制度、個人の尊厳、ジェンダー平等などと関連づけて理解する。",
  },
  {
    id: "constitution-note-article-25",
    targetId: "constitution-article-25",
    targetType: "article",
    summary: "生存権と、国の社会福祉・社会保障・公衆衛生の向上義務を定める条文。",
    keywords: [
      "生存権",
      "社会権",
      "健康で文化的な最低限度の生活",
      "社会福祉",
      "社会保障",
      "公衆衛生",
      "生活保護",
      "年金",
      "医療",
      "介護",
      "福祉国家",
      "貧困",
      "少子高齢化"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-11"
    ],
    relatedStudyContentIds: [],
    memo: "生存権を定める社会権の中心条文。第1項は、すべて国民が健康で文化的な最低限度の生活を営む権利を有すると定める。第2項は、国が社会福祉、社会保障、公衆衛生の向上と増進に努める義務を定める。高校政治・経済では、生活保護、年金、医療、介護、少子高齢化、貧困、社会保障財政などと関連づけて理解する。",
  },
  {
    id: "constitution-note-article-26",
    targetId: "constitution-article-26",
    targetType: "article",
    summary: "教育を受ける権利、保護する子女に普通教育を受けさせる義務、義務教育の無償を定める条文。",
    keywords: [
      "教育を受ける権利",
      "社会権",
      "教育権",
      "普通教育",
      "義務教育",
      "義務教育の無償",
      "教育の機会均等",
      "能力に応じて等しく",
      "子ども",
      "保護者の義務"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-11"
    ],
    relatedStudyContentIds: [],
    memo: "教育を受ける権利を定める条文。すべて国民は、法律の定めるところにより、その能力に応じて等しく教育を受ける権利を有する。また、保護する子女に普通教育を受けさせる義務と、義務教育の無償も定める。高校政治・経済では、社会権、教育の機会均等、子どもの貧困、教育格差などと関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-27",
    targetId: "constitution-article-27",
    targetType: "article",
    summary: "勤労の権利と義務、労働条件の法定、児童酷使の禁止を定める条文。",
    keywords: [
      "勤労の権利",
      "勤労の義務",
      "社会権",
      "労働条件",
      "賃金",
      "就業時間",
      "休息",
      "労働基準",
      "児童酷使の禁止",
      "労働法",
      "働く権利"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-11"
    ],
    relatedStudyContentIds: [],
    memo: "勤労に関する基本原則を定める条文。すべて国民は勤労の権利を有し、義務を負うとされる。また、賃金、就業時間、休息などの労働条件に関する基準は法律で定めるとされ、児童酷使も禁止される。高校政治・経済では、労働基準法、労働条件、非正規雇用、ワーキングプア、過労などの労働問題と関連づけて理解する。",
  },
  {
    id: "constitution-note-article-28",
    targetId: "constitution-article-28",
    targetType: "article",
    summary: "労働者の団結権、団体交渉権、団体行動権を保障する条文。",
    keywords: [
      "労働基本権",
      "労働三権",
      "団結権",
      "団体交渉権",
      "団体行動権",
      "労働組合",
      "ストライキ",
      "労働者の権利",
      "社会権",
      "使用者",
      "労使関係"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-11"
    ],
    relatedStudyContentIds: [],
    memo: "労働基本権を定める条文。労働者が使用者と対等な立場で労働条件を改善するために、団結権、団体交渉権、団体行動権が保障される。これらは労働三権とも呼ばれる。高校政治・経済では、労働組合、労使交渉、ストライキ、労働問題と関連づけて理解する。公務員の労働基本権には一定の制約がある点も発展的な論点になる。",
  },
  {
    id: "constitution-note-article-29",
    targetId: "constitution-article-29",
    targetType: "article",
    summary: "財産権の保障、公共の福祉による制約、正当な補償のもとでの私有財産の公共利用を定める条文。",
    keywords: [
      "財産権",
      "経済的自由権",
      "私有財産",
      "公共の福祉",
      "正当な補償",
      "公共のために用ひる",
      "土地収用",
      "所有権",
      "経済活動の自由"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4",
      "politics-economics-section-1-2-12"
    ],
    relatedStudyContentIds: [],
    memo: "財産権を保障する条文。財産権は保障されるが、その内容は公共の福祉に適合するように法律で定められる。また、私有財産を公共のために用いる場合には、正当な補償が必要とされる。高校政治・経済では、経済的自由権、所有権、公共事業、土地収用、環境規制、都市計画などと関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-30",
    targetId: "constitution-article-30",
    targetType: "article",
    summary: "国民に法律の定めるところにより納税の義務があることを定める条文。",
    keywords: [
      "納税の義務",
      "国民の義務",
      "租税",
      "税金",
      "法律の定めるところ",
      "租税法律主義",
      "財政"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "国民の三大義務の一つである納税の義務を定める条文。具体的な税の種類や内容は法律によって定められる。政治・経済では、財政、租税、社会保障、公共サービスの財源と関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-31",
    targetId: "constitution-article-31",
    targetType: "article",
    summary: "法律の定める手続によらなければ、生命・自由を奪われ、刑罰を科されないことを定める条文。",
    keywords: [
      "適正手続",
      "デュー・プロセス",
      "生命",
      "自由",
      "刑罰",
      "法律の定める手続",
      "身体の自由",
      "刑事手続",
      "人権保障"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "適正手続を定める中心条文。国家権力が人の生命や自由を奪ったり、刑罰を科したりするには、法律に基づく正当な手続が必要である。第33条以下の逮捕・拘禁・捜索・裁判に関する条文とあわせて、刑事手続における人権保障の土台として理解する。",
  },
  {
    id: "constitution-note-article-32",
    targetId: "constitution-article-32",
    targetType: "article",
    summary: "何人も裁判所において裁判を受ける権利を奪われないことを定める条文。",
    keywords: [
      "裁判を受ける権利",
      "請求権",
      "司法",
      "裁判所",
      "人権保障",
      "法の支配",
      "権利救済"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "裁判を受ける権利を定める条文。国民が権利侵害を受けたとき、裁判所に救済を求めることができるという意味で、司法による人権保障の基礎となる。国家権力や私人による権利侵害に対して、法法的解決を求める権利として重要。",
  },
  {
    id: "constitution-note-article-33",
    targetId: "constitution-article-33",
    targetType: "article",
    summary: "現行犯の場合を除き、逮捕には司法官憲が発する令状が必要であることを定める条文。",
    keywords: [
      "逮捕",
      "令状主義",
      "現行犯",
      "司法官憲",
      "逮捕状",
      "身体の自由",
      "刑事手続",
      "人身の自由"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "逮捕に関する令状主義を定める条文。国家権力が人の身体の自由を奪う逮捕を行うには、原則として、犯罪を明示する令状が必要である。現行犯の場合は例外とされる。身体の自由を守るための重要な手続保障として理解する。",
  },
  {
    id: "constitution-note-article-34",
    targetId: "constitution-article-34",
    targetType: "article",
    summary: "理由の告知と弁護人依頼権がなければ抑留・拘禁されず、理由開示の請求ができることを定める条文。",
    keywords: [
      "抑留",
      "拘禁",
      "理由の告知",
      "弁護人依頼権",
      "拘禁理由開示",
      "身体の自由",
      "刑事手続",
      "人身の自由"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "逮捕後の抑留・拘禁に関する人権保障を定める条文。理由を直ちに告げられ、弁護人を依頼する権利が与えられなければ、抑留または拘禁されない。また、本人や関係者が請求すれば、拘禁の理由を公開の法廷で示す必要がある。身体の自由と防御権を守るために重要。",
  },
  {
    id: "constitution-note-article-35",
    targetId: "constitution-article-35",
    targetType: "article",
    summary: "住居・書類・所持品への侵入、捜索、押収には原則として令状が必要であることを定める条文。",
    keywords: [
      "住居の不可侵",
      "捜索",
      "押収",
      "令状主義",
      "プライバシー",
      "身体の自由",
      "刑事手続",
      "第33条の場合を除く"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-2-7"
    ],
    relatedStudyContentIds: [],
    memo: "住居・書類・所持品についての侵入、捜索、押収に関する令状主義を定める条文。国家権力による不当な捜索や押収から、個人の生活空間やプライバシーを守る意味がある。現代では、通信記録、デジタル機器、個人情報の捜索・押収などとも関連づけて考えられる。",
  },
  {
    id: "constitution-note-article-36",
    targetId: "constitution-article-36",
    targetType: "article",
    summary: "公務員による拷問と残虐な刑罰を絶対に禁止する条文。",
    keywords: [
      "拷問の禁止",
      "残虐な刑罰の禁止",
      "公務員",
      "身体の自由",
      "人間の尊厳",
      "刑事手続",
      "人権保障"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-2-4"
    ],
    relatedStudyContentIds: [],
    memo: "公務員による拷問と残虐な刑罰を絶対に禁止する条文。国家が刑事手続や刑罰を行う場合でも、人間の尊厳を侵害するような手段は許されない。身体の自由と人間の尊厳を守る強い人権保障として理解する。",
  },
  {
    id: "constitution-note-article-37",
    targetId: "constitution-article-37",
    targetType: "article",
    summary: "刑事被告人に公平・迅速・公開の裁判、証人審問、弁護人依頼の権利を保障する条文。",
    keywords: [
      "刑事被告人の権利",
      "公平な裁判",
      "迅速な公開裁判",
      "証人審問権",
      "弁護人依頼権",
      "国選弁護人",
      "刑事裁判",
      "防御権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "刑事裁判における被告人の権利を定める条文。被告人は、公平な裁判所による迅速な公開裁判を受ける権利を持つ。また、証人を審問する機会、自己に有利な証人を求める権利、弁護人を依頼する権利も保障される。刑事手続において、国家権力に対して被告人の防御権を保障するために重要。",
  },
  {
    id: "constitution-note-article-38",
    targetId: "constitution-article-38",
    targetType: "article",
    summary: "自己に不利益な供述を強要されないこと、自白の証拠能力、自白だけでは有罪にされないことを定める条文。",
    keywords: [
      "黙秘権",
      "自己負罪拒否特権",
      "不利益な供述",
      "自白",
      "強制による自白",
      "拷問による自白",
      "自白法則",
      "補強法則",
      "刑事手続"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "刑事手続における黙秘権と自白に関する保障を定める条文。何人も自己に不利益な供述を強要されない。また、強制・拷問・脅迫による自白や、不当に長く抑留・拘禁された後の自白は証拠とすることができない。さらに、自白が唯一の証拠である場合には有罪とされない。えん罪防止の観点からも重要。",
  },
  {
    id: "constitution-note-article-39",
    targetId: "constitution-article-39",
    targetType: "article",
    summary: "実行時に適法だった行為や、すでに無罪とされた行為について刑事責任を問われないこと、一事不再理を定める条文。",
    keywords: [
      "遡及処罰の禁止",
      "事後法の禁止",
      "一事不再理",
      "二重処罰の禁止",
      "刑事責任",
      "無罪",
      "刑罰法規",
      "法的安定性"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "刑罰に関する重要な原則を定める条文。ある行為をした時点で適法だったものを、後からできた法律で処罰することはできない。また、すでに無罪とされた行為について刑事責任を問われることはなく、同一の犯罪について重ねて刑事上の責任を問われない。法的安定性と個人の自由を守るために重要。",
  },
  {
    id: "constitution-note-article-40",
    targetId: "constitution-article-40",
    targetType: "article",
    summary: "抑留・拘禁された後に無罪判決を受けた場合、国に補償を求めることができることを定める条文。",
    keywords: [
      "刑事補償",
      "無罪判決",
      "抑留",
      "拘禁",
      "国家補償",
      "えん罪",
      "人権救済",
      "刑事手続"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8"
    ],
    relatedStudyContentIds: [],
    memo: "刑事補償を定める条文。抑留または拘禁された後に無罪判決を受けた場合、法律の定めるところにより国に補償を求めることができる。国家権力による刑事手続で不利益を受けた人を救済する制度として重要で、えん罪問題とも関係する。",
  },
  {
    id: "constitution-note-article-41",
    targetId: "constitution-article-41",
    targetType: "article",
    summary: "国会が国権の最高機関であり、国の唯一の立法機関であることを定める条文。",
    keywords: [
      "国会",
      "国権の最高機関",
      "唯一の立法機関",
      "立法権",
      "国民主権",
      "議会制民主主義",
      "三権分立",
      "代表民主制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会の地位を示す中心条文。国会は国民の代表機関であり、法律を制定する唯一の立法機関とされる。『国権の最高機関』は、国会が国民代表機関として政治の中心的地位にあることを示す表現であり、国会が他の機関を無制限に支配するという意味ではない。三権分立の中で、立法権を担う機関として理解する。",
  },
  {
    id: "constitution-note-article-42",
    targetId: "constitution-article-42",
    targetType: "article",
    summary: "国会が衆議院と参議院の二院で構成されることを定める条文。",
    keywords: [
      "二院制",
      "両院制",
      "衆議院",
      "参議院",
      "国会",
      "議会制度",
      "慎重審議",
      "抑制と均衡"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "日本の国会が衆議院と参議院から成る二院制であることを定める条文。二院制には、異なる性格をもつ二つの議院で審議することで、慎重な判断を行い、一方の議院の行き過ぎを抑える意味がある。高校政治・経済では、衆議院の優越や参議院の役割と関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-43",
    targetId: "constitution-article-43",
    targetType: "article",
    summary: "両議院が、全国民を代表する選挙された議員で組織されることを定める条文。",
    keywords: [
      "全国民の代表",
      "選挙された議員",
      "国民代表",
      "代表民主制",
      "国民主権",
      "自由委任",
      "衆議院",
      "参議院"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-3",
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会議員が特定の地域や団体だけの代表ではなく、全国民の代表として位置づけられることを示す条文。選挙区から選ばれる場合でも、憲法上は全国民の代表とされる。国民主権と代表民主制を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-44",
    targetId: "constitution-article-44",
    targetType: "article",
    summary: "両議院の議員と選挙人の資格を法律で定めること、資格に関する差別を禁止することを定める条文。",
    keywords: [
      "議員の資格",
      "選挙人の資格",
      "選挙権",
      "被選挙権",
      "普通選挙",
      "差別の禁止",
      "人種",
      "信条",
      "性別",
      "社会的身分",
      "門地",
      "教育",
      "財産",
      "収入"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-9",
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "議員や選挙人の資格を法律で定めるとしつつ、人種、信条、性別、社会的身分、門地、教育、財産、収入によって差別してはならないとする条文。選挙制度における平等と普通選挙の考え方に関わる。第14条の法の下の平等とも関連づけて理解する。",
  },
  {
    id: "constitution-note-article-45",
    targetId: "constitution-article-45",
    targetType: "article",
    summary: "衆議院議員の任期を4年とし、衆議院解散の場合は任期満了前に終了することを定める条文。",
    keywords: [
      "衆議院",
      "衆議院議員",
      "任期",
      "4年",
      "衆議院の解散",
      "総選挙",
      "内閣不信任",
      "衆議院の優越"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "衆議院議員の任期は4年だが、衆議院が解散された場合は任期満了前に終了する。衆議院は解散があるため、国民の意思をより直接的・短期的に反映しやすい議院とされる。参議院の任期6年・解散なしと比較して理解するとよい。",
  },
  {
    id: "constitution-note-article-46",
    targetId: "constitution-article-46",
    targetType: "article",
    summary: "参議院議員の任期を6年とし、3年ごとに半数を改選することを定める条文。",
    keywords: [
      "参議院",
      "参議院議員",
      "任期",
      "6年",
      "半数改選",
      "3年ごとの改選",
      "解散なし",
      "継続性",
      "良識の府"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "参議院議員の任期は6年で、3年ごとに半数を改選する。参議院には衆議院のような解散がないため、政治の継続性や安定性を保つ役割があるとされる。衆議院との違いを押さえることが重要。",
  },
  {
    id: "constitution-note-article-47",
    targetId: "constitution-article-47",
    targetType: "article",
    summary: "選挙区、投票方法、その他両議院議員の選挙に関する事項を法律で定めることを規定する条文。",
    keywords: [
      "選挙区",
      "投票方法",
      "選挙制度",
      "公職選挙法",
      "法律事項",
      "衆議院選挙",
      "参議院選挙",
      "一票の格差"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "選挙区、投票方法、その他の選挙に関する事項を法律で定めるとする条文。実際の選挙制度は公職選挙法などによって具体化される。高校政治・経済では、小選挙区制、比例代表制、選挙区、投票方法、一票の格差などと関連づけて理解する。",
  },
  {
    id: "constitution-note-article-48",
    targetId: "constitution-article-48",
    targetType: "article",
    summary: "同時に衆議院議員と参議院議員を兼ねることができないことを定める条文。",
    keywords: [
      "兼職禁止",
      "衆議院議員",
      "参議院議員",
      "二院制",
      "両議院",
      "議員資格",
      "国会"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "一人の人が同時に衆議院議員と参議院議員を兼ねることはできないと定める条文。二院制において、それぞれの議院が別個の構成員によって組織されることを前提としている。",
  },
  {
    id: "constitution-note-article-49",
    targetId: "constitution-article-49",
    targetType: "article",
    summary: "両議院の議員が、法律の定めるところにより相当額の歳費を受けることを定める条文。",
    keywords: [
      "議員歳費",
      "歳費",
      "国会議員",
      "議員報酬",
      "法律の定めるところ",
      "議会活動",
      "政治参加"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会議員が相当額の歳費を受けることを定める条文。議員活動を行うための経済的基盤を保障する意味がある。議員歳費は、代表民主制を機能させるための制度である一方、政治とお金の問題や国会議員の待遇を考えるうえでも論点になる。",
  },
  {
    id: "constitution-note-article-50",
    targetId: "constitution-article-50",
    targetType: "article",
    summary: "両議院の議員が、法律の定める場合を除いて会期中逮捕されず、会期前に逮捕された議員は議院の要求により釈放されることを定める条文。",
    keywords: [
      "不逮捕特権",
      "国会議員の特権",
      "会期中",
      "逮捕",
      "釈放",
      "議院の要求",
      "議会活動の自由",
      "権力分立",
      "国会"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会議員の不逮捕特権を定める条文。議員が会期中に不当に逮捕され、議会活動を妨げられることを防ぐための制度である。ただし、議員個人に犯罪をしてよい特権を与えるものではなく、国会の活動の独立性を守るための制度として理解することが重要。",
  },
  {
    id: "constitution-note-article-51",
    targetId: "constitution-article-51",
    targetType: "article",
    summary: "両議院の議員が、議院で行った演説・討論・表決について、院外で責任を問われないことを定める条文。",
    keywords: [
      "免責特権",
      "国会議員の特権",
      "演説",
      "討論",
      "表決",
      "院外で責任を問はれない",
      "議会活動の自由",
      "国会の独立",
      "言論の自由"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会議員の免責特権を定める条文。議員が議院内で自由に発言・討論・表決できるようにし、議会活動の独立性を守るための制度である。ただし、議員に無制限の発言の自由を与えるというより、国民代表としての議会活動を外部の圧力から守る制度として理解する。",
  },
  {
    id: "constitution-note-article-52",
    targetId: "constitution-article-52",
    targetType: "article",
    summary: "国会の常会を毎年一回召集することを定める条文。",
    keywords: [
      "常会",
      "通常国会",
      "国会の会期",
      "毎年一回",
      "召集",
      "国会運営"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会の常会を毎年一回召集すると定める条文。常会は通常国会とも呼ばれ、予算審議や法案審議など、国の政治運営にとって中心的な会期となる。国会が継続的に行政を監視し、立法活動を行うための基本制度として理解する。",
  },
  {
    id: "constitution-note-article-53",
    targetId: "constitution-article-53",
    targetType: "article",
    summary: "内閣が臨時会の召集を決定できること、いずれかの議院の総議員の四分の一以上の要求があれば召集を決定しなければならないことを定める条文。",
    keywords: [
      "臨時会",
      "臨時国会",
      "内閣",
      "召集",
      "総議員の四分の一以上",
      "国会の要求",
      "行政監視",
      "国会運営"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会の臨時会について定める条文。内閣は必要に応じて臨時会の召集を決定できる。また、いずれかの議院の総議員の四分の一以上の要求があれば、内閣は召集を決定しなければならない。国会が必要に応じて行政を監視し、政治課題を審議できるようにする制度として重要。",
  },
  {
    id: "constitution-note-article-54",
    targetId: "constitution-article-54",
    targetType: "article",
    summary: "衆議院解散後の総選挙と国会召集、衆議院解散中の参議院緊急集会について定める条文。",
    keywords: [
      "衆議院の解散",
      "総選挙",
      "特別会",
      "参議院の緊急集会",
      "国に緊急の必要",
      "暫定措置",
      "衆議院の同意",
      "内閣",
      "国会運営"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "衆議院が解散された場合、解散の日から40日以内に総選挙を行い、選挙の日から30日以内に国会を召集することを定める。また、衆議院解散中は参議院も閉会となるが、国に緊急の必要があるときは、内閣が参議院の緊急集会を求めることができる。緊急集会の措置は暫定的であり、次の国会開会後に衆議院の同意が必要となる。",
  },
  {
    id: "constitution-note-article-55",
    targetId: "constitution-article-55",
    targetType: "article",
    summary: "各議院が議員の資格争訟を裁判すること、議員の議席を失わせるには出席議員の三分の二以上の多数による議決が必要であることを定める条文。",
    keywords: [
      "議員資格争訟",
      "資格争訟",
      "議席",
      "出席議員の三分の二以上",
      "議院の自律権",
      "国会議員",
      "議院運営"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "議員の資格に関する争いを各議院が判断することを定める条文。議員の議席を失わせるには、出席議員の三分の二以上の多数による議決が必要とされる。議院が自らの構成や内部問題を判断する議院の自律権に関わる。",
  },
  {
    id: "constitution-note-article-56",
    targetId: "constitution-article-56",
    targetType: "article",
    summary: "両議院の議事・議決に必要な定足数と、表決の方法を定める条文。",
    keywords: [
      "定足数",
      "総議員の三分の一以上",
      "出席議員の過半数",
      "可否同数",
      "議長",
      "議決",
      "表決",
      "国会運営"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "両議院が議事を開き議決するには、総議員の三分の一以上の出席が必要であると定める。また、議事は原則として出席議員の過半数で決し、可否同数の場合は議長が決める。国会の意思決定手続の基本として重要。",
  },
  {
    id: "constitution-note-article-57",
    targetId: "constitution-article-57",
    targetType: "article",
    summary: "両議院の会議公開の原則、秘密会、会議録の公開、議員の表決記載について定める条文。",
    keywords: [
      "会議公開の原則",
      "公開会議",
      "秘密会",
      "出席議員の三分の二以上",
      "会議録",
      "表決",
      "国会の透明性",
      "国民への説明責任"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会の会議は公開が原則であることを定める条文。ただし、出席議員の三分の二以上の多数で議決した場合は秘密会を開くことができる。また、会議録を保存・公表し、出席議員の表決も記載する。国民が国会活動を監視し、民主政治を機能させるための透明性に関わる。",
  },
  {
    id: "constitution-note-article-58",
    targetId: "constitution-article-58",
    targetType: "article",
    summary: "両議院が議長その他の役員を選任し、議院規則を定め、院内秩序を乱した議員を懲罰できることを定める条文。",
    keywords: [
      "議長",
      "役員選任",
      "議院規則",
      "議院の自律権",
      "院内秩序",
      "懲罰",
      "除名",
      "出席議員の三分の二以上",
      "国会運営"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "各議院が自ら議長その他の役員を選び、会議・手続・内部規律に関する規則を定めることを認める条文。院内の秩序を乱した議員を懲罰することもできるが、除名には出席議員の三分の二以上の多数による議決が必要である。議院の自律権を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-59",
    targetId: "constitution-article-59",
    targetType: "article",
    summary: "法律案は両議院で可決したとき法律となること、衆議院の再議決による法律成立などを定める条文。",
    keywords: [
      "法律案",
      "法律の成立",
      "両議院の可決",
      "衆議院の再議決",
      "出席議員の三分の二以上",
      "衆議院の優越",
      "参議院",
      "両院協議会",
      "60日ルール"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "法律案の議決手続を定める条文。法律案は原則として両議院で可決したとき法律となる。参議院が衆議院の可決した法律案と異なる議決をした場合でも、衆議院が出席議員の三分の二以上で再可決すれば法律となる。また、参議院が一定期間内に議決しない場合、衆議院は参議院が否決したものとみなすことができる。衆議院の優越の中心的な条文の一つ。",
  },
  {
    id: "constitution-note-article-60",
    targetId: "constitution-article-60",
    targetType: "article",
    summary: "予算は先に衆議院に提出し、予算について衆議院の議決が優先される場合を定める条文。",
    keywords: [
      "予算",
      "予算先議権",
      "衆議院の優越",
      "衆議院",
      "参議院",
      "両院協議会",
      "30日ルール",
      "国会の議決",
      "財政民主主義"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "予算に関する衆議院の優越を定める条文。予算はまず衆議院に提出される。また、参議院が衆議院と異なる議決をして両院協議会でも一致しない場合や、参議院が一定期間内に議決しない場合には、衆議院の議決が国会の議決となる。予算は国政運営に不可欠であるため、民意に近い衆議院を優先する仕組みとして理解する。",
  },
  {
    id: "constitution-note-article-61",
    targetId: "constitution-article-61",
    targetType: "article",
    summary: "条約の国会承認について、予算の場合と同様に衆議院の優越が適用されることを定める条文。",
    keywords: [
      "条約",
      "条約承認",
      "国会の承認",
      "衆議院の優越",
      "予算の規定を準用",
      "外交",
      "内閣",
      "国会"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "条約の国会承認について、予算と同様に衆議院の優越が認められることを定める条文。条約の締結は内閣の権限だが、国会の承認が必要となる。外交に関わる内閣の権限と、国会による民主的統制の関係を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-62",
    targetId: "constitution-article-62",
    targetType: "article",
    summary: "両議院が国政に関する調査を行い、証人の出頭・証言、記録の提出を要求できることを定める条文。",
    keywords: [
      "国政調査権",
      "国政に関する調査",
      "証人",
      "証言",
      "記録の提出",
      "行政監視",
      "国会",
      "三権分立",
      "議会制民主主義"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "国会の国政調査権を定める条文。各議院は、国政に関する調査を行い、証人の出頭や証言、記録の提出を求めることができる。国会が行政を監視し、政策判断のための情報を得るために重要な権限である。政治問題や不祥事の調査、行政監視と関連づけて理解するとよい。",
  },
  {
    id: "constitution-note-article-63",
    targetId: "constitution-article-63",
    targetType: "article",
    summary: "内閣総理大臣や国務大臣が議院に出席して発言でき、答弁や説明のために出席を求められた場合は出席しなければならないことを定める条文。",
    keywords: [
      "内閣総理大臣",
      "国務大臣",
      "議院出席",
      "答弁",
      "説明",
      "国会",
      "内閣",
      "議院内閣制",
      "行政監視"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣総理大臣や国務大臣の国会出席について定める条文。大臣は、議案について発言するために議院に出席できる。また、答弁や説明のために出席を求められた場合は出席しなければならない。国会が内閣を監視し、内閣が国会に対して説明責任を負うという議院内閣制の仕組みと関係する。",
  },
  {
    id: "constitution-note-article-64",
    targetId: "constitution-article-64",
    targetType: "article",
    summary: "罷免の訴追を受けた裁判官を裁判するため、国会に弾劾裁判所を設けることを定める条文。",
    keywords: [
      "弾劾裁判所",
      "裁判官の罷免",
      "裁判官訴追",
      "国会",
      "司法",
      "司法権の独立",
      "裁判官の身分保障",
      "権力分立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "裁判官の罷免に関する弾劾裁判所を国会に設けることを定める条文。裁判官は司法権の独立を守るために身分が保障されているが、一定の場合には弾劾裁判によって罷免される。国会と司法の関係、裁判官の身分保障、司法権の独立を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-65",
    targetId: "constitution-article-65",
    targetType: "article",
    summary: "行政権が内閣に属することを定める条文。",
    keywords: [
      "行政権",
      "内閣",
      "三権分立",
      "行政",
      "内閣制度",
      "議院内閣制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "行政権の帰属を定める第5章の基本条文。立法権は国会、司法権は裁判所、行政権は内閣に属するという三権分立の構造を理解するうえで重要。内閣は国の行政を統轄する中心機関として位置づけられる。",
  },
  {
    id: "constitution-note-article-66",
    targetId: "constitution-article-66",
    targetType: "article",
    summary: "内閣の組織、内閣総理大臣の地位、文民条項、国会に対する連帯責任を定める条文。",
    keywords: [
      "内閣",
      "内閣総理大臣",
      "国務大臣",
      "首長",
      "文民条項",
      "文民",
      "国会に対する連帯責任",
      "議院内閣制",
      "シビリアンコントロール",
      "行政権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣の基本構成を定める条文。内閣は内閣総理大臣と国務大臣で組織され、内閣総理大臣が首長となる。また、内閣総理大臣と国務大臣は文民でなければならない。さらに、内閣は行政権の行使について国会に対して連帯して責任を負う。これは議院内閣制を理解するうえで中心となる。",
  },
  {
    id: "constitution-note-article-67",
    targetId: "constitution-article-67",
    targetType: "article",
    summary: "内閣総理大臣を国会議員の中から国会の議決で指名すること、指名における衆議院の優越を定める条文。",
    keywords: [
      "内閣総理大臣",
      "首相指名",
      "国会の議決",
      "国会議員",
      "衆議院の優越",
      "両院協議会",
      "10日ルール",
      "議院内閣制",
      "国会と内閣"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣総理大臣の指名手続を定める条文。内閣総理大臣は国会議員の中から国会の議決で指名される。衆議院と参議院で異なる指名をした場合、両院協議会でも一致しないときや参議院が一定期間内に指名しないときは、衆議院の議決が国会の議決となる。議院内閣制と衆議院の優越を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-68",
    targetId: "constitution-article-68",
    targetType: "article",
    summary: "内閣総理大臣が国務大臣を任命し、その過半数を国会議員から選ぶこと、国務大臣を任意に罷免できることを定める条文。",
    keywords: [
      "国務大臣",
      "内閣総理大臣",
      "大臣任命",
      "大臣罷免",
      "国会議員の過半数",
      "内閣の組織",
      "首相の権限",
      "議院内閣制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "国務大臣の任命と罷免を定める条文。内閣総理大臣は国務大臣を任命し、その過半数は国会議員の中から選ばなければならない。また、内閣総理大臣は国務大臣を任意に罷免できる。内閣総理大臣が内閣を組織し、行政を主導する権限をもつことを示す。",
  },
  {
    id: "constitution-note-article-69",
    targetId: "constitution-article-69",
    targetType: "article",
    summary: "衆議院で内閣不信任決議案が可決、または信任決議案が否決された場合、内閣は総辞職するか衆議院を解散しなければならないことを定める条文。",
    keywords: [
      "内閣不信任決議",
      "信任決議",
      "衆議院",
      "内閣総辞職",
      "衆議院の解散",
      "10日以内",
      "議院内閣制",
      "国会と内閣",
      "政治責任"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "議院内閣制の核心に関わる条文。衆議院で内閣不信任決議案が可決された場合、または信任決議案が否決された場合、内閣は10日以内に衆議院を解散しない限り総辞職しなければならない。内閣が国会、特に衆議院の信任を基礎として存立することを示す。",
  },
  {
    id: "constitution-note-article-70",
    targetId: "constitution-article-70",
    targetType: "article",
    summary: "内閣総理大臣が欠けた場合、または衆議院議員総選挙後に初めて国会が召集された場合、内閣が総辞職することを定める条文。",
    keywords: [
      "内閣総辞職",
      "内閣総理大臣の欠缺",
      "衆議院総選挙",
      "国会召集",
      "議院内閣制",
      "政治責任",
      "内閣の存続"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣総辞職の場面を定める条文。内閣総理大臣が欠けた場合、または衆議院議員総選挙後に初めて国会が召集された場合、内閣は総辞職しなければならない。内閣が内閣総理大臣を中心に組織されていること、また衆議院選挙後には新たな民意に基づいて内閣の信任関係を確認する必要があることを示す。",
  },
  {
    id: "constitution-note-article-71",
    targetId: "constitution-article-71",
    targetType: "article",
    summary: "内閣が総辞職した後も、新たな内閣総理大臣が任命されるまで引き続き職務を行うことを定める条文。",
    keywords: [
      "職務継続",
      "内閣総辞職",
      "新内閣",
      "内閣総理大臣の任命",
      "行政の継続性",
      "職務執行内閣"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣総辞職後の職務継続を定める条文。総辞職した内閣も、新しい内閣総理大臣が任命されるまでは引き続き職務を行う。行政が空白にならないようにするための仕組みとして理解する。",
  },
  {
    id: "constitution-note-article-72",
    targetId: "constitution-article-72",
    targetType: "article",
    summary: "内閣総理大臣が内閣を代表して議案提出、国務・外交関係の報告、行政各部の指揮監督を行うことを定める条文。",
    keywords: [
      "内閣総理大臣の職務",
      "内閣を代表",
      "議案提出",
      "国務の報告",
      "外交関係の報告",
      "行政各部の指揮監督",
      "首相の指導力",
      "行政権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣総理大臣の職務を定める条文。内閣総理大臣は内閣を代表して議案を国会に提出し、一般国務や外交関係について国会に報告し、行政各部を指揮監督する。内閣総理大臣が内閣の首長として行政を統括する立場にあることを理解するうえで重要。",
  },
  {
    id: "constitution-note-article-73",
    targetId: "constitution-article-73",
    targetType: "article",
    summary: "法律の執行、国務の総理、外交関係、条約締結、官吏事務、予算作成、政令制定、恩赦など、内閣の職務を列挙する条文。",
    keywords: [
      "内閣の職務",
      "法律の執行",
      "国務の総理",
      "外交関係",
      "条約締結",
      "国会の承認",
      "官吏に関する事務",
      "予算作成",
      "予算提出",
      "政令",
      "恩赦",
      "行政権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "内閣の具体的な職務を列挙する条文。法律を誠実に執行し、国務を総理すること、外交関係を処理すること、条約を締結すること、官吏に関する事務を扱うこと、予算を作成して国会に提出すること、政令を制定すること、恩赦を決定することなどが含まれる。国会が法律や予算を審議・議決し、内閣が行政を実行するという役割分担と関連づけて理解する。",
  },
  {
    id: "constitution-note-article-74",
    targetId: "constitution-article-74",
    targetType: "article",
    summary: "法律・政令には主任の国務大臣が署名し、内閣総理大臣が連署することを定める条文。",
    keywords: [
      "法律への署名",
      "政令への署名",
      "主任の国務大臣",
      "内閣総理大臣の連署",
      "行政責任",
      "国務大臣",
      "政令"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "法律や政令の形式的手続に関する条文。法律や政令には、主任の国務大臣が署名し、内閣総理大臣が連署する必要がある。行政上の責任の所在を明確にする意味がある。",
  },
  {
    id: "constitution-note-article-75",
    targetId: "constitution-article-75",
    targetType: "article",
    summary: "国務大臣は在任中、内閣総理大臣の同意がなければ訴追されないが、訴追の権利は害されないことを定める条文。",
    keywords: [
      "国務大臣の訴追",
      "内閣総理大臣の同意",
      "在任中",
      "訴追",
      "大臣の責任",
      "行政の安定",
      "刑事責任",
      "国務大臣"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2"
    ],
    relatedStudyContentIds: [],
    memo: "国務大臣の在任中の訴追について定める条文。国務大臣は在任中、内閣総理大臣の同意がなければ訴追されない。ただし、訴追する権利そのものが失われるわけではない。行政運営の安定と、大臣の法的責任の関係を考えるうえで重要。",
  },
  {
    id: "constitution-note-article-76",
    targetId: "constitution-article-76",
    targetType: "article",
    summary: "司法権が最高裁判所と下級裁判所に属すること、特別裁判所の禁止、裁判官の独立を定める条文。",
    keywords: [
      "司法権",
      "最高裁判所",
      "下級裁判所",
      "特別裁判所の禁止",
      "行政機関による終審裁判の禁止",
      "裁判官の独立",
      "良心に従ひ独立",
      "憲法及び法律にのみ拘束",
      "三権分立",
      "法の支配"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "司法権の帰属と司法権の独立を定める中心条文。司法権は最高裁判所と法律で設置される下級裁判所に属し、特別裁判所は設置できない。また、行政機関が終審として裁判を行うこともできない。裁判官は良心に従って独立して職権を行い、憲法と法律にのみ拘束される。国家権力から独立した裁判所が人権保障を担うという点で重要。",
  },
  {
    id: "constitution-note-article-77",
    targetId: "constitution-article-77",
    targetType: "article",
    summary: "最高裁判所が訴訟手続、弁護士、裁判所内部規律、司法事務処理に関する規則を定める権限を持つことを定める条文。",
    keywords: [
      "最高裁判所",
      "規則制定権",
      "訴訟手続",
      "弁護士",
      "裁判所の内部規律",
      "司法事務処理",
      "司法権の独立",
      "検察官",
      "下級裁判所規則"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "最高裁判所の規則制定権を定める条文。裁判手続や裁判所内部の規律について、最高裁判所が自律的に規則を定められることは、司法権の独立と関係する。検察官が最高裁判所の定める規則に従うことや、最高裁判所が下級裁判所に規則制定権を委任できることも定められている。",
  },
  {
    id: "constitution-note-article-78",
    targetId: "constitution-article-78",
    targetType: "article",
    summary: "裁判官は公の弾劾などによらなければ罷免されず、行政機関が裁判官の懲戒処分を行えないことを定める条文。",
    keywords: [
      "裁判官の身分保障",
      "裁判官の罷免",
      "公の弾劾",
      "弾劾裁判",
      "心身の故障",
      "懲戒処分",
      "行政機関による懲戒の禁止",
      "司法権の独立",
      "裁判官の独立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "裁判官の身分保障を定める条文。裁判官は、心身の故障により職務を執れないと裁判で決定された場合を除き、公の弾劾によらなければ罷免されない。また、行政機関が裁判官の懲戒処分を行うことはできない。裁判官が政治権力や行政権力から独立して判断できるようにするための制度として重要。",
  },
  {
    id: "constitution-note-article-79",
    targetId: "constitution-article-79",
    targetType: "article",
    summary: "最高裁判所裁判官の任命、国民審査、定年、報酬について定める条文。",
    keywords: [
      "最高裁判所裁判官",
      "最高裁判所長官",
      "内閣による任命",
      "天皇による任命",
      "国民審査",
      "最高裁判所裁判官国民審査",
      "罷免",
      "定年",
      "報酬",
      "司法の民主的統制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "最高裁判所裁判官の任命と国民審査を定める条文。最高裁判所長官は内閣の指名に基づいて天皇が任命し、その他の裁判官は内閣が任命する。任命後、衆議院議員総選挙の際に国民審査を受け、その後も一定期間ごとに審査を受ける。司法権の独立を保ちながら、最高裁判所裁判官に対する民主的統制を及ぼす仕組みとして理解する。",
  },
  {
    id: "constitution-note-article-80",
    targetId: "constitution-article-80",
    targetType: "article",
    summary: "下級裁判所裁判官の任命、任期、再任、定年、報酬について定める条文。",
    keywords: [
      "下級裁判所",
      "下級裁判所裁判官",
      "最高裁判所の指名",
      "内閣による任命",
      "任期10年",
      "再任",
      "定年",
      "報酬",
      "裁判官の身分保障",
      "司法権の独立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "下級裁判所裁判官の任命や任期を定める条文。下級裁判所の裁判官は、最高裁判所が指名した名簿に基づいて内閣が任命する。任期は10年で再任可能だが、法律で定める年齢に達したときは退官する。また、在任中は報酬を減額されない。司法権の独立と裁判官の身分保障を支える制度として重要。",
  },
  {
    id: "constitution-note-article-81",
    targetId: "constitution-article-81",
    targetType: "article",
    summary: "最高裁判所が、法律・命令・規則・処分が憲法に適合するかを決定する終審裁判所であることを定める条文。",
    keywords: [
      "違憲審査権",
      "法令審査権",
      "最高裁判所",
      "終審裁判所",
      "法律",
      "命令",
      "規則",
      "処分",
      "憲法適合性",
      "立憲主義",
      "司法による人権保障",
      "三権分立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "違憲審査権を定める条文。最高裁判所は、法律、命令、規則、処分が憲法に適合するかどうかを決定する終審裁判所である。国会が作った法律や行政の処分であっても、憲法に反する場合には司法が判断できる。立憲主義、三権分立、司法による人権保障を理解するうえで最重要の条文の一つ。",
  },
  {
    id: "constitution-note-article-82",
    targetId: "constitution-article-82",
    targetType: "article",
    summary: "裁判の対審と判決を公開すること、一定の場合の非公開、政治犯罪・出版犯罪・基本的人権に関する事件の公開について定める条文。",
    keywords: [
      "裁判の公開",
      "対審",
      "判決",
      "公開法廷",
      "非公開",
      "公の秩序",
      "善良の風俗",
      "政治犯罪",
      "出版に関する犯罪",
      "基本的人権",
      "司法の透明性",
      "裁判の公正"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "裁判公開の原則を定める条文。裁判の対審と判決は公開法廷で行うことが原則である。裁判を公開することで、司法の公正さと透明性を確保する意味がある。ただし、公の秩序や善良の風俗を害するおそれがあると裁判官が全員一致で判断した場合には、対審を公開しないこともできる。ただし、政治犯罪、出版に関する犯罪、または基本的人権が問題となる事件では、対審を常に公開しなければならない。",
  },
  {
    id: "constitution-note-article-83",
    targetId: "constitution-article-83",
    targetType: "article",
    summary: "国の財政を処理する権限は、国会の議決に基づいて行使しなければならないことを定める条文。",
    keywords: [
      "財政",
      "財政民主主義",
      "国会の議決",
      "財政処理",
      "国会による財政統制",
      "国民主権",
      "国の財政",
      "予算"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "財政民主主義の基本条文。国の財政を処理する権限は、国民代表機関である国会の議決に基づいて行使されなければならない。税金を集め、予算を使うことは国民生活に大きく関わるため、内閣や行政機関だけで自由に決めるのではなく、国会の統制のもとに置かれる。",
  },
  {
    id: "constitution-note-article-84",
    targetId: "constitution-article-84",
    targetType: "article",
    summary: "新たに租税を課し、または現行の租税を変更するには、法律または法律の定める条件によらなければならないことを定める条文。",
    keywords: [
      "租税法律主義",
      "租税",
      "税金",
      "課税",
      "法律",
      "国会",
      "財政民主主義",
      "納税の義務",
      "税制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "租税法律主義を定める条文。税金を新たに課したり、既存の税を変更したりするには、法律または法律の定める条件によらなければならない。国民に負担を課す租税は、国民代表機関である国会が定める法律に基づく必要がある。第30条の納税の義務、財政民主主義、税制の学習と関連づけて理解する。",
  },
  {
    id: "constitution-note-article-85",
    targetId: "constitution-article-85",
    targetType: "article",
    summary: "国費の支出や国の債務負担には、国会の議決に基づくことが必要であると定める条文。",
    keywords: [
      "国費",
      "国費支出",
      "国の債務負担",
      "国会の議決",
      "財政民主主義",
      "予算",
      "公債",
      "国債",
      "財政統制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "国費の支出や国の債務負担について、国会の議決に基づくことを求める条文。国のお金を使うことや、将来の国民負担につながる債務を負うことは、国会の統制のもとで行われなければならない。予算、国債、財政赤字などの学習と関係する。",
  },
  {
    id: "constitution-note-article-86",
    targetId: "constitution-article-86",
    targetType: "article",
    summary: "内閣が毎会計年度の予算を作成し、国会に提出して審議と議決を受けなければならないことを定める条文。",
    keywords: [
      "予算",
      "予算作成",
      "内閣",
      "国会提出",
      "国会の審議",
      "国会の議決",
      "会計年度",
      "財政民主主義",
      "予算審議"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1",
      "politics-economics-section-1-3-2",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "予算の作成と国会提出について定める条文。内閣は毎会計年度の予算を作成し、国会に提出して審議を受け、議決を経なければならない。内閣が予算を作り、国会が審議・議決するという役割分担を理解するうえで重要。第60条の予算に関する衆議院の優越とも関連する。",
  },
  {
    id: "constitution-note-article-87",
    targetId: "constitution-article-87",
    targetType: "article",
    summary: "予見しがたい予算不足に備えて予備費を設け、内閣の責任で支出し、事後に国会の承諾を得ることを定める条文。",
    keywords: [
      "予備費",
      "予見し難い予算の不足",
      "内閣の責任",
      "国会の承諾",
      "事後承認",
      "財政民主主義",
      "予算",
      "緊急支出"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "予備費について定める条文。予見しがたい予算不足に備えて、国会の議決に基づいて予備費を設け、内閣の責任で支出できる。ただし、すべての予備費支出について、内閣は事後に国会の承諾を得なければならない。緊急性と国会による財政統制のバランスを考えるうえで重要。",
  },
  {
    id: "constitution-note-article-88",
    targetId: "constitution-article-88",
    targetType: "article",
    summary: "皇室財産は国に属し、皇室の費用は予算に計上して国会の議決を経なければならないことを定める条文。",
    keywords: [
      "皇室財産",
      "皇室の費用",
      "国に属する",
      "予算計上",
      "国会の議決",
      "皇室",
      "財政民主主義",
      "象徴天皇制"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-3",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "皇室財産と皇室費用について定める条文。皇室財産は国に属し、皇室の費用は予算に計上して国会の議決を経なければならない。象徴天皇制のもとで、皇室に関わる財産や費用も国会の統制のもとに置かれている点が重要。",
  },
  {
    id: "constitution-note-article-89",
    targetId: "constitution-article-89",
    targetType: "article",
    summary: "公金その他の公の財産を宗教上の組織・団体や、公の支配に属しない慈善・教育・博愛事業に支出・利用してはならないことを定める条文。",
    keywords: [
      "公金支出の制限",
      "公の財産",
      "宗教上の組織",
      "宗教団体",
      "政教分離",
      "慈善事業",
      "教育事業",
      "博愛事業",
      "公の支配",
      "私学助成",
      "財政民主主義"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4",
      "politics-economics-section-1-2-12",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "公金や公の財産の支出・利用の制限を定める条文。宗教上の組織・団体に公金を支出することを禁じる点で、政教分離と関係する。また、公の支配に属しない慈善・教育・博愛事業への公金支出も禁じている。私学助成や宗教関連施設への公金支出など、現代的な論点とも関わる条文。",
  },
  {
    id: "constitution-note-article-90",
    targetId: "constitution-article-90",
    targetType: "article",
    summary: "国の収入支出の決算を会計検査院が検査し、内閣が次年度に検査報告とともに国会へ提出することを定める条文。",
    keywords: [
      "決算",
      "会計検査院",
      "会計検査",
      "検査報告",
      "内閣",
      "国会提出",
      "財政監視",
      "国の収入支出",
      "財政民主主義",
      "説明責任"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "決算と会計検査院について定める条文。国の収入支出の決算は、すべて毎年会計検査院が検査し、内閣が次の年度に検査報告とともに国会へ提出する。予算を立てるだけでなく、実際にお金が適切に使われたかをチェックする仕組みとして重要。",
  },
  {
    id: "constitution-note-article-91",
    targetId: "constitution-article-91",
    targetType: "article",
    summary: "内閣が国会と国民に対し、少なくとも毎年一回、国の財政状況を報告しなければならないことを定める条文。",
    keywords: [
      "財政状況の報告",
      "内閣",
      "国会への報告",
      "国民への報告",
      "少なくとも毎年一回",
      "財政の透明性",
      "説明責任",
      "財政民主主義",
      "国の財政"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-2",
      "politics-economics-section-2-2-1"
    ],
    relatedStudyContentIds: [],
    memo: "財政状況の報告について定める条文。内閣は、国会と国民に対し、定期的に国の財政状況を報告しなければならない。国民が財政の状況を知り、政治判断を行うための情報公開・説明責任に関わる。財政民主主義を実質的に機能させるために重要。",
  },
  {
    id: "constitution-note-article-92",
    targetId: "constitution-article-92",
    targetType: "article",
    summary: "地方公共団体の組織と運営に関する事項は、地方自治の本旨に基づいて法律で定めることを規定する条文。",
    keywords: [
      "地方自治",
      "地方自治の本旨",
      "地方公共団体",
      "組織及び運営",
      "法律",
      "住民自治",
      "団体自治",
      "地方分権",
      "地方自治法"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-4"
    ],
    relatedStudyContentIds: [],
    memo: "地方自治の基本原則を定める条文。地方公共団体の組織や運営に関する事項は、地方自治の本旨に基づいて法律で定めるとされる。地方自治の本旨は、一般に、地域住民が自ら地域の政治に参加する住民自治と、地方公共団体が国から一定の独立性をもって事務を処理する団体自治の二つの側面から理解される。",
  },
  {
    id: "constitution-note-article-93",
    targetId: "constitution-article-93",
    targetType: "article",
    summary: "地方公共団体に議事機関として議会を設置し、長・議員などを住民が直接選挙することを定める条文。",
    keywords: [
      "地方公共団体",
      "議事機関",
      "地方議会",
      "議会",
      "長",
      "首長",
      "地方公共団体の長",
      "地方議会議員",
      "直接選挙",
      "住民自治",
      "地方自治"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-4"
    ],
    relatedStudyContentIds: [],
    memo: "地方公共団体に議事機関として議会を置くこと、また地方公共団体の長、議会の議員、法律で定めるその他の公務員を住民が直接選挙することを定める条文。国政では内閣総理大臣は国会が指名するが、地方自治では首長を住民が直接選ぶ。地方自治における住民自治を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-94",
    targetId: "constitution-article-94",
    targetType: "article",
    summary: "地方公共団体が財産を管理し、事務を処理し、行政を執行し、法律の範囲内で条例を制定できることを定める条文。",
    keywords: [
      "地方公共団体",
      "財産管理",
      "事務処理",
      "行政執行",
      "条例制定権",
      "条例",
      "法律の範囲内",
      "団体自治",
      "地方自治",
      "地方分権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-4"
    ],
    relatedStudyContentIds: [],
    memo: "地方公共団体の権能を定める条文。地方公共団体は、自らの財産を管理し、事務を処理し、行政を執行する権能をもち、法律の範囲内で条例を制定できる。条例制定権は、地域の実情に応じたルールを住民に近い地方公共団体が作るための重要な権限であり、団体自治と関係する。",
  },
  {
    id: "constitution-note-article-95",
    targetId: "constitution-article-95",
    targetType: "article",
    summary: "一つの地方公共団体のみに適用される特別法は、その地方公共団体の住民投票で過半数の同意を得なければ制定できないことを定める条文。",
    keywords: [
      "地方特別法",
      "一の地方公共団体のみに適用される特別法",
      "住民投票",
      "過半数の同意",
      "地方自治",
      "住民自治",
      "国会",
      "地域住民の意思",
      "特別法"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-4"
    ],
    relatedStudyContentIds: [],
    memo: "一つの地方公共団体だけに適用される特別法について、住民投票による同意を求める条文。国会が特定の地域だけに特別な法律を作る場合、その地域の住民の意思を無視できないようにしている。地方自治において、地域住民の意思を尊重する仕組みとして重要。",
  },
  {
    id: "constitution-note-article-96",
    targetId: "constitution-article-96",
    targetType: "article",
    summary: "憲法改正には、各議院の総議員の三分の二以上による国会の発議と、国民投票などによる過半数の承認が必要であることを定める条文。",
    keywords: [
      "憲法改正",
      "第96条",
      "国会の発議",
      "各議院の総議員の三分の二以上",
      "国民投票",
      "過半数の賛成",
      "天皇による公布",
      "硬性憲法",
      "立憲主義",
      "国民主権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-6",
      "politics-economics-section-1-2-12"
    ],
    relatedStudyContentIds: [],
    memo: "憲法改正手続を定める条文。日本国憲法の改正には、各議院の総議員の三分の二以上の賛成による国会の発議と、国民投票または国会の定める選挙の際の投票における過半数の承認が必要である。通常の法律改正より厳格な手続を必要とするため、日本国憲法は硬性憲法とされる。憲法改正を考えるときは、国民主権と立憲主義の両方から理解することが重要。",
  },
  {
    id: "constitution-note-article-97",
    targetId: "constitution-article-97",
    targetType: "article",
    summary: "基本的人権が人類の多年にわたる自由獲得の努力の成果であり、現在および将来の国民に信託された永久不可侵の権利であることを定める条文。",
    keywords: [
      "基本的人権",
      "永久不可侵",
      "人類の多年にわたる自由獲得の努力",
      "現在及び将来の国民",
      "信託",
      "人権保障",
      "第11条",
      "自由の歴史",
      "立憲主義"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-4",
      "politics-economics-section-1-2-12"
    ],
    relatedStudyContentIds: [],
    memo: "基本的人権の本質を示す条文。人権は一時的な政策や国家からの恩恵ではなく、人類の自由獲得の努力の成果として、現在および将来の国民に信託された永久不可侵の権利とされる。第11条と内容が近く、基本的人権の尊重を理解するうえで重要。ただし、実際の条文配置としては第10章『最高法規』に置かれている点も押さえるとよい。",
  },
  {
    id: "constitution-note-article-98",
    targetId: "constitution-article-98",
    targetType: "article",
    summary: "日本国憲法が国の最高法規であり、これに反する法律・命令・詔勅・国務に関する行為は効力を有しないこと、また条約と国際法規を誠実に遵守することを定める条文。",
    keywords: [
      "最高法規",
      "憲法の最高法規性",
      "違憲",
      "法律",
      "命令",
      "詔勅",
      "国務に関する行為",
      "効力を有しない",
      "条約",
      "国際法規",
      "誠実に遵守",
      "立憲主義",
      "違憲審査権"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-8",
      "politics-economics-section-1-2-12",
      "politics-economics-section-1-3-3"
    ],
    relatedStudyContentIds: [],
    memo: "憲法の最高法規性を定める中心条文。日本国憲法に反する法律、命令、詔勅、国務に関する行為は効力をもたない。これは、国家権力を憲法によって制限する立憲主義の基本である。第81条の違憲審査権とあわせて、憲法が法律や行政行為より上位にあることを理解するとよい。また、第2項では、日本国が締結した条約と確立された国際法規を誠実に遵守することも定めている。",
  },
  {
    id: "constitution-note-article-99",
    targetId: "constitution-article-99",
    targetType: "article",
    summary: "天皇、摂政、国務大臣、国会議員、裁判官その他の公務員に、憲法を尊重し擁護する義務があることを定める条文。",
    keywords: [
      "憲法尊重擁護義務",
      "天皇",
      "摂政",
      "国務大臣",
      "国会議員",
      "裁判官",
      "公務員",
      "立憲主義",
      "権力制限",
      "憲法を守る義務"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-12"
    ],
    relatedStudyContentIds: [],
    memo: "憲法尊重擁護義務を定める条文。義務を負う主体として、天皇、摂政、国務大臣、国会議員、裁判官その他の公務員が挙げられている。憲法は国民を一方的に縛るものではなく、国家権力を担う側を制限し、人権を守るための基本法であるという立憲主義の考え方を理解するうえで重要。",
  },
  {
    id: "constitution-note-article-100",
    targetId: "constitution-article-100",
    targetType: "article",
    summary: "日本国憲法の施行期日と、施行に必要な法律制定・選挙・国会召集などの準備手続を定める条文。",
    keywords: [
      "憲法施行",
      "施行期日",
      "公布の日から六箇月",
      "施行準備",
      "法律制定",
      "参議院議員の選挙",
      "国会召集",
      "経過規定",
      "日本国憲法の成立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-2"
    ],
    relatedStudyContentIds: [],
    memo: "日本国憲法の施行に関する経過規定。憲法は公布の日から6か月を経過した日から施行すると定める。また、憲法施行に必要な法律の制定、参議院議員の選挙、国会召集の手続などは、施行日前にも行えるとされる。日本国憲法の成立と施行過程を理解する補助的な条文として位置づけるとよい。",
  },
  {
    id: "constitution-note-article-101",
    targetId: "constitution-article-101",
    targetType: "article",
    summary: "憲法施行時に参議院がまだ成立していない場合、参議院成立まで衆議院が国会としての権限を行うことを定める経過規定。",
    keywords: [
      "参議院成立前",
      "衆議院",
      "国会としての権限",
      "経過規定",
      "憲法施行",
      "二院制",
      "日本国憲法の成立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-2",
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "日本国憲法施行時の経過規定。憲法施行時に参議院がまだ成立していない場合、参議院が成立するまでの間、衆議院が国会としての権限を行うと定める。二院制への移行期に政治機能が止まらないようにするための規定として理解する。",
  },
  {
    id: "constitution-note-article-102",
    targetId: "constitution-article-102",
    targetType: "article",
    summary: "第一期参議院議員のうち半数の任期を3年とし、その議員を法律で定めることを規定する経過規定。",
    keywords: [
      "第一期参議院議員",
      "参議院",
      "任期",
      "3年",
      "半数改選",
      "経過規定",
      "第46条",
      "参議院の継続性"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-3-1"
    ],
    relatedStudyContentIds: [],
    memo: "参議院制度の開始時に関する経過規定。第46条では参議院議員の任期は6年で、3年ごとに半数を改選するとされる。これを初回から実現するため、第一期参議院議員のうち半数の任期を3年とすることを定めている。参議院の半数改選制度を制度開始時に整えるための規定として理解する。",
  },
  {
    id: "constitution-note-article-103",
    targetId: "constitution-article-103",
    targetType: "article",
    summary: "憲法施行時に在職している国務大臣、衆議院議員、裁判官などの公務員の地位について、憲法と矛盾しない限り在職を妨げないことを定める経過規定。",
    keywords: [
      "公務員の地位",
      "国務大臣",
      "衆議院議員",
      "裁判官",
      "公務員",
      "憲法施行",
      "経過規定",
      "法律で任期を定めた職",
      "日本国憲法の成立"
    ],
    relatedCurriculumNodeIds: [
      "politics-economics-section-1-2-2"
    ],
    relatedStudyContentIds: [],
    memo: "憲法施行時に在職している公務員の地位に関する経過規定。国務大臣、衆議院議員、裁判官その他の公務員は、日本国憲法と矛盾しない限り、当然には在職を妨げられないとされる。ただし、法律で任期が定められている職については、その任期による。新憲法への移行時に行政・立法・司法の機能を継続させるための規定として理解する。",
  }
];
