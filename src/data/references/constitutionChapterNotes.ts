import type { ConstitutionChapterNote } from "../../types/constitution";

export const constitutionChapterNotes: ConstitutionChapterNote[] = [
  {
    id: "constitution-chapter-note-preamble",
    chapterId: "preamble",
    summary: "日本国憲法全体の基本理念を示す部分。国民主権、平和主義、国際協調、戦争の惨禍の防止などが読み取れる。",
    keyPoints: [
      "日本国憲法の理念を示す",
      "国民主権を宣言する",
      "恒久平和と国際協調を重視する",
      "戦争の惨禍を繰り返さない決意を示す"
    ],
    importantArticleIds: ["constitution-preamble"],
    keywords: ["前文", "国民主権", "平和主義", "国際協調", "平和的生存権"]
  },
  {
    id: "constitution-chapter-note-1",
    chapterId: "chapter-1",
    summary: "象徴天皇制と天皇の国事行為について定める章。天皇は主権者ではなく、日本国および日本国民統合の象徴とされる。",
    keyPoints: [
      "天皇は日本国と日本国民統合の象徴である",
      "天皇の地位は国民の総意に基づく",
      "天皇の国事行為には内閣の助言と承認が必要",
      "天皇は国政に関する権能をもたない"
    ],
    importantArticleIds: ["constitution-article-1", "constitution-article-3", "constitution-article-4", "constitution-article-7"],
    keywords: ["天皇", "象徴天皇制", "国民主権", "国事行為", "内閣の助言と承認"]
  },
  {
    id: "constitution-chapter-note-2",
    chapterId: "chapter-2",
    summary: "平和主義を具体化する章。第9条で戦争放棄、戦力不保持、交戦権の否認を定める。",
    keyPoints: [
      "戦争放棄を定める",
      "戦力不保持を定める",
      "交戦権の否認を定める",
      "自衛隊・安全保障政策との関係が重要論点になる"
    ],
    importantArticleIds: ["constitution-article-9"],
    keywords: ["平和主義", "第9条", "戦争放棄", "戦力不保持", "交戦権の否認", "自衛隊"]
  },
  {
    id: "constitution-chapter-note-3",
    chapterId: "chapter-3",
    summary: "国民の権利と義務を定める章。基本的人権、自由権、平等権、社会権、参政権、請求権、刑事手続上の権利、国民の義務などを含む。",
    keyPoints: [
      "日本国憲法の人権保障の中心",
      "個人の尊重と幸福追求権を定める",
      "自由権・社会権・参政権・請求権を含む",
      "刑事手続における人権保障も定める",
      "教育・勤労・納税の義務も含む"
    ],
    importantArticleIds: [
      "constitution-article-13",
      "constitution-article-14",
      "constitution-article-21",
      "constitution-article-25",
      "constitution-article-31",
      "constitution-article-38"
    ],
    keywords: ["基本的人権", "個人の尊重", "幸福追求権", "法の下の平等", "表現の自由", "生存権", "適正手続"]
  },
  {
    id: "constitution-chapter-note-4",
    chapterId: "chapter-4",
    summary: "国会の地位、構成、権限、手続を定める章。国会は国権の最高機関であり、国の唯一の立法機関とされる。",
    keyPoints: [
      "国会は国権の最高機関である",
      "国会は唯一の立法機関である",
      "衆議院と参議院の二院制を採用する",
      "法律案・予算・条約承認で衆議院の優越が認められる",
      "国政調査権や弾劾裁判所も定める"
    ],
    importantArticleIds: [
      "constitution-article-41",
      "constitution-article-42",
      "constitution-article-59",
      "constitution-article-60",
      "constitution-article-62",
      "constitution-article-64"
    ],
    keywords: ["国会", "国権の最高機関", "唯一の立法機関", "二院制", "衆議院の優越", "国政調査権"]
  },
  {
    id: "constitution-chapter-note-5",
    chapterId: "chapter-5",
    summary: "行政権を担う内閣について定める章。内閣の組織、内閣総理大臣、国務大臣、議院内閣制、内閣の職務などを扱う。",
    keyPoints: [
      "行政権は内閣に属する",
      "内閣は国会に対して連帯責任を負う",
      "内閣総理大臣は国会議員の中から国会が指名する",
      "衆議院の不信任決議と内閣総辞職・解散が関係する",
      "内閣は外交・条約・予算・政令などを扱う"
    ],
    importantArticleIds: [
      "constitution-article-65",
      "constitution-article-66",
      "constitution-article-67",
      "constitution-article-69",
      "constitution-article-73"
    ],
    keywords: ["内閣", "行政権", "議院内閣制", "内閣総理大臣", "内閣不信任決議", "内閣総辞職"]
  },
  {
    id: "constitution-chapter-note-6",
    chapterId: "chapter-6",
    summary: "司法権を担う裁判所について定める章。司法権の独立、裁判官の身分保障、違憲審査権、裁判公開の原則が中心。",
    keyPoints: [
      "司法権は最高裁判所と下級裁判所に属する",
      "特別裁判所は禁止される",
      "裁判官は独立して職権を行う",
      "最高裁判所は違憲審査権をもつ",
      "裁判は公開が原則である"
    ],
    importantArticleIds: [
      "constitution-article-76",
      "constitution-article-78",
      "constitution-article-79",
      "constitution-article-81",
      "constitution-article-82"
    ],
    keywords: ["司法権", "裁判所", "司法権の独立", "国民審査", "違憲審査権", "裁判の公開"]
  },
  {
    id: "constitution-chapter-note-7",
    chapterId: "chapter-7",
    summary: "国の財政について定める章。財政民主主義、租税法律主義、予算、決算、会計検査院、公金支出の制限などを扱う。",
    keyPoints: [
      "財政は国会の議決に基づいて処理される",
      "租税法律主義を定める",
      "内閣が予算を作成し、国会が審議・議決する",
      "決算は会計検査院が検査する",
      "公金支出には制限がある"
    ],
    importantArticleIds: [
      "constitution-article-83",
      "constitution-article-84",
      "constitution-article-86",
      "constitution-article-89",
      "constitution-article-90"
    ],
    keywords: ["財政", "財政民主主義", "租税法律主義", "予算", "会計検査院", "公金支出の制限"]
  },
  {
    id: "constitution-chapter-note-8",
    chapterId: "chapter-8",
    summary: "地方自治について定める章。地方自治の本旨、地方議会、首長の直接選挙、条例制定権、地方特別法の住民投票などを扱う。",
    keyPoints: [
      "地方自治の本旨を定める",
      "住民自治と団体自治が重要",
      "地方公共団体には議会を置く",
      "首長と議員は住民が直接選挙する",
      "地方公共団体には条例制定権がある"
    ],
    importantArticleIds: [
      "constitution-article-92",
      "constitution-article-93",
      "constitution-article-94",
      "constitution-article-95"
    ],
    keywords: ["地方自治", "地方自治の本旨", "住民自治", "団体自治", "条例制定権", "住民投票"]
  },
  {
    id: "constitution-chapter-note-9",
    chapterId: "chapter-9",
    summary: "憲法改正手続について定める章。国会の発議と国民投票による承認が必要であり、日本国憲法が硬性憲法であることに関わる。",
    keyPoints: [
      "憲法改正には各議院の総議員の三分の二以上による発議が必要",
      "国民投票などで過半数の承認が必要",
      "通常の法律改正より厳格な手続が必要",
      "硬性憲法と関係する"
    ],
    importantArticleIds: ["constitution-article-96"],
    keywords: ["憲法改正", "硬性憲法", "国会の発議", "国民投票", "三分の二", "過半数"]
  },
  {
    id: "constitution-chapter-note-10",
    chapterId: "chapter-10",
    summary: "憲法の最高法規性と、憲法尊重擁護義務について定める章。立憲主義を理解するうえで重要。",
    keyPoints: [
      "基本的人権の永久不可侵性を示す",
      "憲法は国の最高法規である",
      "憲法に反する法律や命令は効力をもたない",
      "公務員には憲法尊重擁護義務がある"
    ],
    importantArticleIds: [
      "constitution-article-97",
      "constitution-article-98",
      "constitution-article-99"
    ],
    keywords: ["最高法規", "基本的人権", "永久不可侵", "憲法尊重擁護義務", "立憲主義"]
  },
  {
    id: "constitution-chapter-note-11",
    chapterId: "chapter-11",
    summary: "日本国憲法の施行に関する補則・経過規定を定める章。憲法施行時の移行手続を扱う。",
    keyPoints: [
      "憲法の施行期日を定める",
      "施行前の準備手続を定める",
      "参議院成立前の扱いを定める",
      "第一期参議院議員の任期を調整する",
      "公務員の地位に関する経過規定を置く"
    ],
    importantArticleIds: [
      "constitution-article-100",
      "constitution-article-101",
      "constitution-article-102",
      "constitution-article-103"
    ],
    keywords: ["補則", "憲法施行", "経過規定", "参議院成立前", "第一期参議院議員"]
  }
];
