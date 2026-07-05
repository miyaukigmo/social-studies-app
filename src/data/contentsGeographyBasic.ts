import type { ContentItem } from "../types/content";

export const geographyBasicPositionContents: ContentItem[] = [
  {
    id: "geography-basic-position-earth-location-summary",
    curriculumNodeId: "geography-basic-section-1-1-1",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "地球上の位置",
    body: "地理では、ある場所がどこにあるかを正確に捉えることが出発点になる。地球上の位置は、緯度・経度による絶対的位置と、他の場所との関係から捉える相対的位置の両方で理解する。位置を理解すると、気候、交通、貿易、人の移動、国際関係などを考える基礎ができる。",
    shortText: "地球上の位置を、絶対的位置と相対的位置の両方から捉える。",
    order: 1,
    regionTags: ["世界"],
    conceptTags: ["位置", "地域性", "地図"],
    sourceTags: ["地図"],
    skillTags: ["空間認識", "地図読解"],
    relatedReferenceIds: ["map-world-basic"],
    relatedHints: [
      {
        label: "交通・通信の発達と世界の結びつき",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "グローバル化", "位置"]
      }
    ]
  },
  {
    id: "geography-basic-position-absolute-location-term",
    curriculumNodeId: "geography-basic-section-1-1-1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "絶対的位置",
    body: "絶対的位置とは、緯度・経度のような基準を使って、地球上の場所を数値で示す位置のことである。例えば、東京を北緯約35度、東経約139度付近と表すと、世界中のどこからでも同じ場所を確認できる。",
    shortText: "緯度・経度などの数値で示す位置。",
    order: 2,
    frontText: "絶対的位置",
    backText: "緯度・経度などの基準を使って、地球上の場所を数値で示す位置。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本", "東京"],
    conceptTags: ["位置", "地図"],
    sourceTags: ["地図"],
    skillTags: ["空間認識", "地図読解"],
    relatedReferenceIds: ["map-world-latitude-longitude"]
  },
  {
    id: "geography-basic-position-relative-location-term",
    curriculumNodeId: "geography-basic-section-1-1-1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "相対的位置",
    body: "相対的位置とは、ある場所を他の場所との関係で捉える位置のことである。例えば、日本はユーラシア大陸の東、太平洋の西に位置すると説明できる。相対的位置は、交通、貿易、文化交流、安全保障などを考えるときに重要になる。",
    shortText: "他の場所との関係で捉える位置。",
    order: 3,
    frontText: "相対的位置",
    backText: "ある場所を、他の地域・海洋・大陸・交通路などとの関係で捉える位置。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本", "アジア", "太平洋地域"],
    conceptTags: ["位置", "地域性", "交通", "貿易"],
    sourceTags: ["地図"],
    skillTags: ["空間認識", "地域比較"],
    relatedHints: [
      {
        label: "日本の位置と領域",
        relation: "example",
        targetSubjectId: "geography-basic",
        regionTags: ["日本"],
        conceptTags: ["位置", "国家"]
      }
    ]
  },
  {
    id: "geography-basic-position-location-perspective-flow",
    curriculumNodeId: "geography-basic-section-1-1-1",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "位置を読む流れ",
    body: "地理で位置を読むときは、まず緯度・経度で絶対的位置を確認し、次に大陸・海洋・周辺国・交通路との関係から相対的位置を考える。そのうえで、気候や産業、交通、国際関係にどのような影響があるかを読み取る。",
    shortText: "絶対的位置から相対的位置へ進み、地域の特徴や結びつきを考える。",
    order: 4,
    regionTags: ["世界"],
    conceptTags: ["位置", "地域性", "分布", "交通"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "因果関係", "空間認識"],
    relatedHints: [
      {
        label: "主題図の読み取り",
        relation: "reference",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布"],
        regionTags: ["世界"]
      }
    ]
  },

  {
    id: "geography-basic-latitude-longitude-summary",
    curriculumNodeId: "geography-basic-section-1-1-2",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "緯度・経度",
    body: "緯度と経度は、地球上の位置を表すための基本的な座標である。緯度は赤道を基準に南北の位置を示し、経度は本初子午線を基準に東西の位置を示す。緯度・経度を理解すると、地図上の位置、時差、気候帯、国や都市の位置関係を読み取りやすくなる。",
    shortText: "緯度・経度を使って、地球上の位置を数値で表す。",
    order: 1,
    regionTags: ["世界"],
    conceptTags: ["位置", "地図", "気候", "時差"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-world-latitude-longitude"],
    relatedHints: [
      {
        label: "時差の理解",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["時差", "位置", "地図"]
      }
    ]
  },
  {
    id: "geography-basic-latitude-term",
    curriculumNodeId: "geography-basic-section-1-1-2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "緯度",
    body: "緯度は、赤道を0度として、北または南にどれだけ離れているかを角度で示すもの。北半球は北緯、南半球は南緯で表す。緯度は太陽高度や気温と関係が深く、気候帯の違いを考えるときの重要な基準になる。",
    shortText: "赤道を基準に、南北の位置を示す角度。",
    order: 2,
    frontText: "緯度",
    backText: "赤道を0度として、南北の位置を角度で示すもの。北緯・南緯で表す。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["位置", "地図", "気候"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-world-latitude-longitude"],
    relatedHints: [
      {
        label: "気候帯の分布",
        relation: "cause",
        targetSubjectId: "geography-basic",
        conceptTags: ["気候", "分布", "位置"]
      }
    ]
  },
  {
    id: "geography-basic-longitude-term",
    curriculumNodeId: "geography-basic-section-1-1-2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "経度",
    body: "経度は、本初子午線を0度として、東または西にどれだけ離れているかを角度で示すもの。東側は東経、西側は西経で表す。地球は24時間で1回転するため、経度の違いは時差を考える基礎になる。",
    shortText: "本初子午線を基準に、東西の位置を示す角度。",
    order: 3,
    frontText: "経度",
    backText: "本初子午線を0度として、東西の位置を角度で示すもの。東経・西経で表す。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["位置", "地図", "時差"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-world-latitude-longitude"],
    relatedHints: [
      {
        label: "時差と標準時",
        relation: "cause",
        targetSubjectId: "geography-basic",
        conceptTags: ["時差", "位置", "地図"]
      }
    ]
  },
  {
    id: "geography-basic-prime-meridian-term",
    curriculumNodeId: "geography-basic-section-1-1-2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "本初子午線",
    body: "本初子午線は、経度0度の基準となる線で、イギリスのロンドン郊外にあるグリニッジ付近を通る。経度を東経と西経に分ける基準であり、世界の標準時や時差を考えるうえでも重要である。",
    shortText: "経度0度の基準となる子午線。",
    order: 4,
    frontText: "本初子午線",
    backText: "経度0度の基準となる線。グリニッジ付近を通る。",
    isMemorizationTarget: true,
    regionTags: ["世界", "イギリス"],
    conceptTags: ["位置", "地図", "時差"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-world-latitude-longitude", "map-world-time-zones"]
  },
  {
    id: "geography-basic-latitude-longitude-comparison",
    curriculumNodeId: "geography-basic-section-1-1-2",
    subjectId: "geography-basic",
    type: "comparison-note",
    title: "緯度と経度の違い",
    body: "緯度は赤道を基準に南北の位置を示し、気候の違いと関係しやすい。経度は本初子午線を基準に東西の位置を示し、時差と関係しやすい。どちらも地球上の位置を数値で表すための基準だが、読み取る内容が異なる。",
    shortText: "緯度は南北と気候、経度は東西と時差に関係する。",
    order: 5,
    regionTags: ["世界"],
    conceptTags: ["位置", "地図", "気候", "時差"],
    sourceTags: ["地図"],
    skillTags: ["比較", "地図読解", "空間認識"]
  },

  {
    id: "geography-basic-time-difference-summary",
    curriculumNodeId: "geography-basic-section-1-1-3",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "時差",
    body: "時差は、地球の自転と経度の違いによって生じる。地球は約24時間で360度回転するため、経度15度で約1時間の時差が生じる。時差の理解は、国際電話、航空機の移動、貿易、観光、ニュースの時刻など、現代世界の結びつきを考える基礎になる。",
    shortText: "地球の自転と経度差によって生じる時刻の違い。",
    order: 1,
    regionTags: ["世界"],
    conceptTags: ["時差", "位置", "交通", "観光", "貿易"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識", "因果関係"],
    relatedReferenceIds: ["map-world-time-zones"],
    relatedHints: [
      {
        label: "交通・通信の発達",
        relation: "effect",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "情報化", "グローバル化", "時差"]
      }
    ]
  },
  {
    id: "geography-basic-time-difference-standard-time-term",
    curriculumNodeId: "geography-basic-section-1-1-3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "標準時",
    body: "標準時とは、国や地域で共通して使う時刻の基準である。経度が違うと太陽の南中時刻も変わるが、生活や交通を統一するため、一定の範囲で同じ時刻を使う。日本では兵庫県明石市付近を通る東経135度の子午線が日本標準時の基準となる。",
    shortText: "国や地域で共通して使う時刻の基準。",
    order: 2,
    frontText: "標準時",
    backText: "国や地域で共通して使う時刻の基準。日本では東経135度の子午線が基準。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["時差", "位置", "地図"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-japan-standard-time", "map-world-time-zones"]
  },
  {
    id: "geography-basic-time-difference-15-degrees-term",
    curriculumNodeId: "geography-basic-section-1-1-3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "経度15度で1時間",
    body: "地球は約24時間で360度回転する。360度を24時間で割ると、1時間あたり15度になる。そのため、経度が15度違うと、原則として約1時間の時差が生じる。東へ行くほど時刻は進み、西へ行くほど時刻は遅れる。",
    shortText: "経度15度の差は、およそ1時間の時差に対応する。",
    order: 3,
    frontText: "経度15度で1時間",
    backText: "地球は24時間で360度回転するため、360÷24=15より、経度15度で約1時間の時差が生じる。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["時差", "位置", "地図"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "因果関係", "空間認識"]
  },
  {
    id: "geography-basic-time-difference-date-line-term",
    curriculumNodeId: "geography-basic-section-1-1-3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "日付変更線",
    body: "日付変更線は、地球を一周したときの日付のずれを調整するために設けられた線である。おおむね経度180度付近を通るが、国や島を分断しないように一部で曲がっている。西から東へ越えると日付を1日戻し、東から西へ越えると日付を1日進める。",
    shortText: "日付のずれを調整するため、おおむね経度180度付近に設けられた線。",
    order: 4,
    frontText: "日付変更線",
    backText: "地球を一周したときの日付のずれを調整する線。おおむね経度180度付近を通る。",
    isMemorizationTarget: true,
    regionTags: ["世界", "太平洋地域"],
    conceptTags: ["時差", "位置", "地図"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-world-date-line"]
  },
  {
    id: "geography-basic-time-difference-calculation-flow",
    curriculumNodeId: "geography-basic-section-1-1-3",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "時差計算の基本手順",
    body: "時差を考えるときは、まず2地点の経度差を確認する。次に、経度差を15度で割り、およস্তেরの時間差を求める。最後に、東へ行く場合は時刻を進め、西へ行く場合は時刻を戻す。ただし、実際の標準時は国や地域の制度で決まるため、必ずしも経度だけで機械的に決まるわけではない。",
    shortText: "経度差を15度で割り、東なら進め、西なら戻す。",
    order: 5,
    regionTags: ["世界"],
    conceptTags: ["時差", "位置", "地図"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "因果関係", "空間認識"],
    relatedHints: [
      {
        label: "交通・通信と時差",
        relation: "effect",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "情報化", "時差"]
      }
    ]
  },
  {
    id: "geography-basic-time-difference-globalization-crosslink",
    curriculumNodeId: "geography-basic-section-1-1-3",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "時差とグローバル化",
    body: "時差は単なる計算問題ではなく、現代世界の結びつきを理解するための基礎でもある。航空機の到着時刻、国際会議、オンライン授業、金融市場、国際ニュースは、複数の標準時をまたいで行われる。時差を理解することで、世界が同時につながりながらも、地域ごとに異なる時間で動いていることが見える。",
    shortText: "時差は、交通・通信・国際交流を理解する基礎になる。",
    order: 6,
    regionTags: ["世界"],
    conceptTags: ["時差", "交通", "情報化", "グローバル化"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "因果関係", "空間認識"],
    relatedHints: [
      {
        label: "交通・通信の発達",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "情報化", "グローバル化"]
      },
      {
        label: "貿易・観光・人の移動",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["貿易", "観光", "人口移動", "グローバル化"]
      }
    ]
  }
];
