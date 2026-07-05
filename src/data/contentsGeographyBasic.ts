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

export const geographyBasicMapProjectionContents: ContentItem[] = [
  {
    id: "geography-basic-map-projection-summary",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "球面上の世界と地図表現",
    body: "地球は球体に近い形をしているため、平面の地図に表すと、面積・方位・距離・形のどこかに必ずゆがみが生じる。地図は現実の世界をそのまま写したものではなく、目的に合わせて情報を選び、変形して表したものである。地図を読むときは、どの図法が何を正しく表し、何をゆがめているのかを意識することが重要である。",
    shortText: "球面である地球を平面地図に表すときのゆがみと図法の違いを扱う。",
    order: 1,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "分布", "地域性"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識", "比較"],
    relatedReferenceIds: ["map-world-projection-comparison"],
    relatedHints: [
      {
        label: "主題図の読み取り",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-map-projection-globe-term",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "地球儀",
    body: "地球儀は、地球を球体に近い形で表した模型である。面積・方位・距離・形のゆがみが少なく、地球全体の大まかな位置関係を理解しやすい。一方で、持ち運びや細かい情報の表示には向きにくく、一度に地球全体を平面として見ることはできない。",
    shortText: "地球を球体に近い形で表した模型。",
    order: 2,
    frontText: "地球儀",
    backText: "地球を球体に近い形で表した模型。ゆがみが少ないが、細かい情報表示や一覧性には限界がある。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "地域性"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedReferenceIds: ["map-world-globe"]
  },
  {
    id: "geography-basic-map-projection-map-projection-term",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "地図投影法",
    body: "地図投影法とは、球面上の地球を平面の地図に表す方法のことである。球面を平面に完全に正しく写すことはできないため、面積・方位・距離・形のうち、何を重視するかによってさまざまな図法が使い分けられる。",
    shortText: "球面上の地球を平面地図に表す方法。",
    order: 3,
    frontText: "地図投影法",
    backText: "球面上の地球を平面地図に表す方法。面積・方位・距離・形のどこかにゆがみが生じる。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "分布"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識", "比較"],
    relatedReferenceIds: ["map-world-projection-comparison"]
  },
  {
    id: "geography-basic-map-projection-distortion-term",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "地図のゆがみ",
    body: "地図のゆがみとは、球面の地球を平面に表すときに、面積・方位・距離・形が実際とは異なって表されることである。特に世界全体を表す地図では、どこかに必ずゆがみが生じる。地図を読むときは、その地図が何を正しく表すために作られているのかを確認する必要がある。",
    shortText: "球面を平面に表すことで生じる面積・方位・距離・形のずれ。",
    order: 4,
    frontText: "地図のゆがみ",
    backText: "球面の地球を平面に表すとき、面積・方位・距離・形が実際とは異なって表されること。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "分布"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "比較", "資料読解"],
    relatedReferenceIds: ["map-world-projection-comparison"]
  },
  {
    id: "geography-basic-map-projection-mercator-term",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "メルカトル図法",
    body: "メルカトル図法は、緯線と経線が直角に交わる世界地図の図法である。角度が正しく表されるため、一定の方位で進む航路を直線で示しやすく、航海図に利用されてきた。一方で、高緯度ほど面積が大きく表されるため、グリーンランドや南極大陸などは実際より大きく見える。",
    shortText: "角度を正しく表すが、高緯度の面積が大きく見える図法。",
    order: 5,
    frontText: "メルカトル図法",
    backText: "角度を正しく表し、航海図に向く図法。ただし高緯度ほど面積が大きく表される。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "交通"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "比較", "空間認識"],
    relatedReferenceIds: ["map-world-mercator"],
    relatedHints: [
      {
        label: "交通・通信の発達",
        relation: "example",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "地図"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-map-projection-equidistant-azimuthal-term",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "正距方位図法",
    body: "正距方位図法は、中心から各地点への方位と距離を正しく表す図法である。例えば、東京を中心にした正距方位図法の地図では、東京から世界各地への最短距離や方位を考えやすい。航空路や通信、国際的な結びつきを考えるときに役立つ。",
    shortText: "中心から各地点への方位と距離を正しく表す図法。",
    order: 6,
    frontText: "正距方位図法",
    backText: "中心から各地点への方位と距離を正しく表す図法。航空路や国際的な結びつきの理解に役立つ。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本", "東京"],
    conceptTags: ["地図", "位置", "交通", "情報化"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識", "比較"],
    relatedReferenceIds: ["map-world-azimuthal-equidistant-tokyo"],
    relatedHints: [
      {
        label: "航空交通と世界の結びつき",
        relation: "example",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "グローバル化", "位置"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-map-projection-equal-area-term",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "面積を正しく表す図法",
    body: "面積を正しく表す図法では、大陸や国の面積の大小関係を比較しやすい。人口分布、農業地域、森林面積、資源分布など、面積の広がりを読み取る主題図に向いている。一方で、形や方位はゆがむことがあるため、何を読み取る地図なのかを確認する必要がある。",
    shortText: "面積の大小関係を比較しやすい図法。",
    order: 7,
    frontText: "面積を正しく表す図法",
    backText: "面積の大小関係を正しく比較しやすい図法。分布や主題図の読み取りに向く。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["地図", "分布", "人口", "農業", "資源"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "統計読解", "比較"],
    relatedReferenceIds: ["map-world-equal-area"],
    relatedHints: [
      {
        label: "主題図の読み取り",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-map-projection-purpose-map",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "map-note",
    title: "目的に応じた地図の使い分け",
    body: "地図は、目的に応じて使い分ける必要がある。航路や方位を考えるならメルカトル図法や正距方位図法が役立つ。国や大陸の面積を比較するなら、面積を正しく表す図法が適している。人口や資源の分布を読むなら、主題図として何が強調されているかを確認することが大切である。",
    shortText: "地図は、航路・方位・面積・分布など目的に応じて使い分ける。",
    order: 8,
    regionTags: ["世界"],
    conceptTags: ["地図", "分布", "位置", "交通", "資源", "人口"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "資料読解", "比較", "空間認識"],
    relatedReferenceIds: ["map-world-projection-comparison"],
    relatedHints: [
      {
        label: "地図の種類と役割",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-map-projection-comparison",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "comparison-note",
    title: "図法ごとの特徴比較",
    body: "メルカトル図法は角度を正しく表し、航海図に向いているが、高緯度の面積が大きく見える。正距方位図法は中心からの方位と距離を正しく表し、航空路や通信の理解に向いている。面積を正しく表す図法は、国や大陸の面積比較、人口や資源の分布を読むときに役立つ。地図の図法は、正解を一つ覚えるのではなく、目的に応じて選ぶものとして理解する。",
    shortText: "図法ごとに、正しく表せるものとゆがむものが異なる。",
    order: 9,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "分布", "交通", "資源", "人口"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["比較", "地図読解", "資料読解", "空間認識"],
    relatedReferenceIds: ["map-world-projection-comparison"]
  },
  {
    id: "geography-basic-map-projection-web-map-supplement",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "supplement-note",
    title: "ウェブ地図を見るときの注意",
    body: "スマートフォンやパソコンの地図は便利だが、表示範囲、縮尺、中心位置、投影法によって見え方が変わる。拡大・縮小しながら見る地図では、今見ている情報が世界全体の中でどの位置にあるのかを意識しにくいこともある。ウェブ地図を使うときも、縮尺、方位、凡例、出典を確認する習慣が必要である。",
    shortText: "ウェブ地図でも、縮尺・方位・凡例・出典を確認する必要がある。",
    order: 10,
    regionTags: ["世界"],
    conceptTags: ["地図", "GIS", "情報化", "位置"],
    sourceTags: ["地図", "GIS資料"],
    skillTags: ["地図読解", "資料読解", "空間認識"],
    relatedHints: [
      {
        label: "GISの基本",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["GIS", "地図", "情報化"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-map-projection-misreading-supplement",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "supplement-note",
    title: "地図をそのまま世界の姿だと思わない",
    body: "世界地図は、実際の地球を完全にそのまま表したものではない。例えば、メルカトル図法では高緯度地域が大きく見えるため、国や大陸の面積感覚を誤りやすい。地図を読むときは、地図が作られた目的、使われている図法、凡例や縮尺を確認し、見え方に偏りがある可能性を考えることが大切である。",
    shortText: "地図には必ず表現上の偏りやゆがみがある。",
    order: 11,
    regionTags: ["世界"],
    conceptTags: ["地図", "地域性", "分布"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "資料読解", "比較"],
    examTags: ["正誤問題注意", "資料読解"]
  },
  {
    id: "geography-basic-map-projection-globalization-crosslink",
    curriculumNodeId: "geography-basic-section-1-1-4",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "地図表現と世界の見え方",
    body: "地図表現の違いは、世界の見え方にも影響する。中心に置く地域や使う図法によって、近く見える地域、遠く見える地域、大きく見える地域が変わる。これは、交通、貿易、観光、国際関係を考えるときにも重要である。地図を読むことは、世界をどの視点から見ているのかを考えることでもある。",
    shortText: "図法や中心の置き方によって、世界の見え方は変わる。",
    order: 12,
    regionTags: ["世界"],
    conceptTags: ["地図", "位置", "交通", "貿易", "観光", "グローバル化"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "空間認識", "比較"],
    relatedHints: [
      {
        label: "グローバル化する世界",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["グローバル化", "交通", "貿易", "観光"],
        regionTags: ["世界"]
      },
      {
        label: "主題図の読み取り",
        relation: "reference",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布"],
        regionTags: ["世界"]
      }
    ]
  }
];
