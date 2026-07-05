import type { ContentItem } from "../types/content";

export const geographyBasicPositionContents: ContentItem[] = [
  {
    id: "geography-basic-position-earth-location-summary",
    curriculumNodeId: "geobasic-p1-c1-s1",
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
    curriculumNodeId: "geobasic-p1-c1-s1",
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
    curriculumNodeId: "geobasic-p1-c1-s1",
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
    curriculumNodeId: "geobasic-p1-c1-s1",
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
    curriculumNodeId: "geobasic-p1-c1-s2",
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
    curriculumNodeId: "geobasic-p1-c1-s2",
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
    curriculumNodeId: "geobasic-p1-c1-s2",
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
    curriculumNodeId: "geobasic-p1-c1-s2",
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
    curriculumNodeId: "geobasic-p1-c1-s2",
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
    curriculumNodeId: "geobasic-p1-c1-s3",
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
    curriculumNodeId: "geobasic-p1-c1-s3",
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
    curriculumNodeId: "geobasic-p1-c1-s3",
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
    curriculumNodeId: "geobasic-p1-c1-s3",
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
    curriculumNodeId: "geobasic-p1-c1-s3",
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
    curriculumNodeId: "geobasic-p1-c1-s3",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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
    curriculumNodeId: "geobasic-p1-c1-s4",
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

export const geographyBasicMapReadingContents: ContentItem[] = [
  {
    id: "geography-basic-map-types-summary",
    curriculumNodeId: "geobasic-p1-c2-s1",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "地図の種類と役割",
    body: "地図は、場所や分布を表すための道具である。一般図は地形・道路・地名などを総合的に示し、主題図は人口、気候、産業、災害リスクなど特定のテーマを強調して示す。地図を読むときは、何を目的に作られた地図なのか、縮尺・方位・凡例・出典を確認することが重要である。",
    shortText: "地図の種類と、目的に応じた使い分けを理解する。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域性", "GIS"],
    sourceTags: ["地図", "主題図", "GIS資料"],
    skillTags: ["地図読解", "資料読解", "分類", "空間認識"],
    relatedReferenceIds: ["map-basic-map-types"],
    relatedHints: [
      {
        label: "GISの基本",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["GIS", "地図", "情報化"]
      }
    ]
  },
  {
    id: "geography-basic-map-types-general-map-term",
    curriculumNodeId: "geobasic-p1-c2-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "一般図",
    body: "一般図は、地形、河川、道路、鉄道、集落、地名など、地域のさまざまな情報を総合的に表した地図である。地域の全体像や位置関係を把握するのに向いている。地形図や道路地図は、一般図として利用されることが多い。",
    shortText: "地域のさまざまな情報を総合的に表した地図。",
    order: 2,
    frontText: "一般図",
    backText: "地形・道路・鉄道・集落・地名など、地域のさまざまな情報を総合的に表した地図。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "位置", "地域性"],
    sourceTags: ["地図", "地形図"],
    skillTags: ["地図読解", "空間認識", "分類"],
    relatedReferenceIds: ["map-japan-topographic-basic"]
  },
  {
    id: "geography-basic-map-types-thematic-map-term",
    curriculumNodeId: "geobasic-p1-c2-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "主題図",
    body: "主題図は、人口密度、気温、降水量、農産物、工業、災害リスクなど、特定のテーマに関する分布や地域差を表した地図である。何のテーマを示しているのか、色や記号が何を意味するのかを凡例で確認しながら読む必要がある。",
    shortText: "特定のテーマの分布や地域差を表した地図。",
    order: 3,
    frontText: "主題図",
    backText: "人口・気候・産業・災害リスクなど、特定のテーマの分布や地域差を表した地図。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域差", "人口", "気候", "産業", "災害"],
    sourceTags: ["主題図", "統計", "地図"],
    skillTags: ["地図読解", "統計読解", "資料読解", "地域比較"],
    relatedReferenceIds: ["map-world-thematic-map-examples"]
  },
  {
    id: "geography-basic-map-types-scale-legend-direction-term",
    curriculumNodeId: "geobasic-p1-c2-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "縮尺・方位・凡例",
    body: "地図を読むときは、縮尺、方位、凡例を確認する。縮尺は地図上の長さと実際の距離の関係、方位は東西南北の向き、凡例は地図記号や色の意味を示す。これらを確認しないと、距離感や分布の意味を誤って読み取ることがある。",
    shortText: "地図読解で必ず確認する基本情報。",
    order: 4,
    frontText: "縮尺・方位・凡例",
    backText: "縮尺は距離の関係、方位は向き、凡例は記号や色の意味を示す。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "位置", "分布"],
    sourceTags: ["地図", "主題図", "地形図"],
    skillTags: ["地図読解", "資料読解", "空間認識"],
    examTags: ["基本用語", "資料読解", "地図読解"]
  },
  {
    id: "geography-basic-map-types-purpose-map",
    curriculumNodeId: "geobasic-p1-c2-s1",
    subjectId: "geography-basic",
    type: "map-note",
    title: "目的に応じて地図を選ぶ",
    body: "地域の全体像を知りたいときは一般図、ある現象の分布を調べたいときは主題図、土地の高さや地形を読みたいときは地形図が役立つ。防災を考える場合は、地形図だけでなくハザードマップや土地利用図も組み合わせて読むとよい。地図は一枚で完結するものではなく、目的に応じて複数の地図を組み合わせて使う。",
    shortText: "目的に応じて、一般図・主題図・地形図などを使い分ける。",
    order: 5,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地形", "防災", "災害"],
    sourceTags: ["地図", "主題図", "地形図", "ハザードマップ"],
    skillTags: ["地図読解", "資料読解", "比較", "空間認識"],
    relatedHints: [
      {
        label: "持続可能な地域づくりと防災",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["防災", "災害", "地域性"],
        regionTags: ["日本"]
      }
    ]
  },

  {
    id: "geography-basic-topographic-map-summary",
    curriculumNodeId: "geobasic-p1-c2-s2",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "地形図の読み取り",
    body: "地形図は、土地の高さ、傾斜、河川、道路、集落、土地利用などを読み取るための基本的な地図である。等高線や地図記号を読み取ることで、山地、谷、平野、扇状地、台地、低地などの地形と、人々の生活や防災上の特徴を考えることができる。",
    shortText: "等高線や地図記号から、地形と地域の特徴を読み取る。",
    order: 1,
    regionTags: ["日本"],
    conceptTags: ["地図", "地形", "地域性", "防災", "災害"],
    sourceTags: ["地形図", "地図"],
    skillTags: ["地図読解", "空間認識", "因果関係"],
    relatedReferenceIds: ["map-japan-topographic-basic"],
    relatedHints: [
      {
        label: "自然災害と防災",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["防災", "災害", "地形"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-topographic-map-contour-line-term",
    curriculumNodeId: "geobasic-p1-c2-s2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "等高線",
    body: "等高線は、同じ高さの地点を結んだ線である。等高線の間隔が狭いところは傾斜が急で、間隔が広いところは傾斜がゆるやかである。等高線を読むことで、山地、谷、尾根、台地、低地などの地形を把握できる。",
    shortText: "同じ高さの地点を結んだ線。",
    order: 2,
    frontText: "等高線",
    backText: "同じ高さの地点を結んだ線。間隔が狭いほど急斜面、広いほど緩斜面を示す。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["地図", "地形"],
    sourceTags: ["地形図", "地図"],
    skillTags: ["地図読解", "空間認識", "資料読解"],
    examTags: ["基本用語", "地図読解", "資料読解"]
  },
  {
    id: "geography-basic-topographic-map-map-symbol-term",
    curriculumNodeId: "geobasic-p1-c2-s2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "地図記号",
    body: "地図記号は、学校、寺院、神社、工場、田、畑、果樹園、針葉樹林、広葉樹林など、地図上の施設や土地利用を表す記号である。地図記号を読むことで、地域の土地利用や産業、集落の特徴を推測できる。",
    shortText: "施設や土地利用を地図上に表す記号。",
    order: 3,
    frontText: "地図記号",
    backText: "施設や土地利用を地図上に表す記号。地域の特徴を読み取る手がかりになる。",
    isMemorizationTarget: true,
    regionTags: ["日本"],
    conceptTags: ["地図", "地域性", "農業", "工業"],
    sourceTags: ["地形図", "地図"],
    skillTags: ["地図読解", "資料読解", "分類"],
    examTags: ["基本用語", "地図読解"]
  },
  {
    id: "geography-basic-topographic-map-landform-reading-map",
    curriculumNodeId: "geobasic-p1-c2-s2",
    subjectId: "geography-basic",
    type: "map-note",
    title: "地形図から地形を読む",
    body: "地形図では、等高線の形や間隔に注目すると地形を読み取りやすい。等高線が山頂に向かって閉じていれば山地、等高線が谷に向かって入り込む形なら谷、河川沿いに低く平らな部分が広がれば低地や平野の可能性がある。地形を読むと、土地利用や災害リスクを考える手がかりになる。",
    shortText: "等高線の形と間隔から、山地・谷・低地などを読み取る。",
    order: 4,
    regionTags: ["日本"],
    conceptTags: ["地図", "地形", "防災", "災害", "地域性"],
    sourceTags: ["地形図", "地図"],
    skillTags: ["地図読解", "空間認識", "因果関係"],
    relatedHints: [
      {
        label: "ハザードマップの読み取り",
        relation: "effect",
        targetSubjectId: "geography-basic",
        conceptTags: ["防災", "災害", "地形"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-topographic-map-land-use-reading-source",
    curriculumNodeId: "geobasic-p1-c2-s2",
    subjectId: "geography-basic",
    type: "source-note",
    title: "地形図から土地利用を読む",
    body: "地形図では、田、畑、果樹園、森林、集落、道路、鉄道などの記号から土地利用を読み取る。低地には水田が広がりやすく、台地や扇状地では畑や果樹園が見られることがある。ただし、実際の土地利用は地形だけでなく、水利、交通、都市化、歴史的経緯などにも影響される。",
    shortText: "地図記号から土地利用と地域の特徴を読み取る。",
    order: 5,
    regionTags: ["日本"],
    conceptTags: ["地図", "地形", "農業", "都市", "地域性"],
    sourceTags: ["地形図", "地図"],
    skillTags: ["地図読解", "資料読解", "因果関係"],
    relatedHints: [
      {
        label: "農業地域の分布",
        relation: "example",
        targetSubjectId: "geography-basic",
        conceptTags: ["農業", "地形", "分布"],
        regionTags: ["日本"]
      },
      {
        label: "都市化と土地利用",
        relation: "effect",
        targetSubjectId: "geography-basic",
        conceptTags: ["都市化", "地域性", "交通"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-topographic-map-disaster-reading-crosslink",
    curriculumNodeId: "geobasic-p1-c2-s2",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "地形図と防災",
    body: "地形図は、防災を考えるときにも重要である。低地や河川沿いでは洪水、急斜面では土砂災害、海岸部では津波や高潮などの危険を考える必要がある。地形図だけで危険を断定することはできないが、ハザードマップや気象情報と組み合わせることで、地域の災害リスクをより具体的に理解できる。",
    shortText: "地形図は、ハザードマップや気象情報と組み合わせて防災に活用できる。",
    order: 6,
    regionTags: ["日本"],
    conceptTags: ["地図", "地形", "防災", "災害", "環境問題"],
    sourceTags: ["地形図", "ハザードマップ", "地図"],
    skillTags: ["地図読解", "資料読解", "因果関係"],
    relatedReferenceIds: ["map-japan-hazard-basic"],
    relatedHints: [
      {
        label: "自然災害と防災",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["防災", "災害", "地形"],
        regionTags: ["日本"]
      }
    ]
  },

  {
    id: "geography-basic-thematic-map-summary",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "主題図の読み取り",
    body: "主題図は、人口、気候、産業、交通、資源、災害リスクなど、特定のテーマについて地域差や分布を表す地図である。読み取るときは、表しているテーマ、単位、階級区分、凡例、出典、作成年を確認する。主題図は便利だが、色分けや区分の仕方によって印象が変わることにも注意する必要がある。",
    shortText: "主題図から、特定テーマの分布や地域差を読み取る。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域差", "人口", "気候", "産業", "資源"],
    sourceTags: ["主題図", "統計", "地図", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "地域比較"],
    relatedReferenceIds: ["map-world-thematic-map-examples"]
  },
  {
    id: "geography-basic-thematic-map-choropleth-term",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "階級区分図",
    body: "階級区分図は、地域ごとの統計値をいくつかの階級に分け、色や濃淡で表した主題図である。人口密度、出生率、高齢化率、農業生産額などの地域差を読み取るのに使われる。階級の分け方によって見え方が変わるため、凡例を必ず確認する必要がある。",
    shortText: "統計値を階級に分け、色や濃淡で地域差を表す主題図。",
    order: 2,
    frontText: "階級区分図",
    backText: "地域ごとの統計値を階級に分け、色や濃淡で地域差を表す主題図。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域差", "人口"],
    sourceTags: ["主題図", "統計", "地図"],
    skillTags: ["地図読解", "統計読解", "資料読解", "比較"],
    examTags: ["資料読解", "地図読解", "正誤問題注意"]
  },
  {
    id: "geography-basic-thematic-map-dot-map-term",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "ドットマップ",
    body: "ドットマップは、点を使って分布を表す主題図である。人口や家畜、工場、農産物などの分布を視覚的に捉えるのに向いている。ただし、点の大きさや点1つが表す数量を確認しないと、分布の密度や量を誤って読み取ることがある。",
    shortText: "点を使って分布を表す主題図。",
    order: 3,
    frontText: "ドットマップ",
    backText: "点を使って人口・工場・農産物などの分布を表す主題図。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "人口", "農業", "工業"],
    sourceTags: ["主題図", "統計", "地図"],
    skillTags: ["地図読解", "統計読解", "資料読解"]
  },
  {
    id: "geography-basic-thematic-map-symbol-map-term",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "図形表現図",
    body: "図形表現図は、円や棒などの図形の大きさで統計量を表す主題図である。都市の人口規模、工業出荷額、農産物の生産量などを比較するのに使われる。図形が何の数量を表しているのか、面積で比較するのか長さで比較するのかを確認することが大切である。",
    shortText: "円や棒などの図形の大きさで統計量を表す主題図。",
    order: 4,
    frontText: "図形表現図",
    backText: "円や棒などの図形の大きさで統計量を表す主題図。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "人口", "工業", "農業"],
    sourceTags: ["主題図", "統計", "地図", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "比較"]
  },
  {
    id: "geography-basic-thematic-map-reading-flow",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "主題図を読む手順",
    body: "主題図を読むときは、まず地図の主題を確認する。次に、凡例、単位、階級区分、色や記号の意味を確認する。そのうえで、分布の偏りや地域差を読み取り、なぜその分布になるのかを地形、気候、人口、産業、交通などと結びつけて考える。",
    shortText: "主題・凡例・単位を確認し、分布と要因を読み取る。",
    order: 5,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域差", "地形", "気候", "人口", "交通"],
    sourceTags: ["主題図", "統計", "地図"],
    skillTags: ["地図読解", "統計読解", "資料読解", "因果関係", "地域比較"]
  },
  {
    id: "geography-basic-thematic-map-misreading-supplement",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "supplement-note",
    title: "主題図の読み間違いに注意",
    body: "主題図は、色が濃い地域や大きな記号が目立つため、印象だけで判断しやすい。しかし、実数を表しているのか割合を表しているのか、総量なのか一人当たりなのかで意味は大きく変わる。また、階級区分や色の選び方によって、地域差が大きく見えたり小さく見えたりすることがある。",
    shortText: "実数・割合・単位・階級区分を確認しないと、主題図は誤読しやすい。",
    order: 6,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域差", "人口", "資源"],
    sourceTags: ["主題図", "統計", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "比較"],
    examTags: ["正誤問題注意", "資料読解", "地図読解"]
  },
  {
    id: "geography-basic-thematic-map-gis-crosslink",
    curriculumNodeId: "geobasic-p1-c2-s3",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "主題図とGIS",
    body: "主題図は、GISと結びつくことでさらに活用しやすくなる。GISでは、人口、土地利用、交通、災害リスクなど複数の地理情報を重ねて表示できる。これにより、単独の主題図では見えにくい地域の特徴や課題を分析しやすくなる。",
    shortText: "GISを使うと、複数の主題図を重ねて地域の特徴を分析できる。",
    order: 7,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "地域性", "防災"],
    sourceTags: ["主題図", "GIS資料", "統計", "地図"],
    skillTags: ["地図読解", "統計読解", "資料読解", "空間認識"],
    relatedHints: [
      {
        label: "GISの基本",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["GIS", "地図", "情報化"],
        regionTags: ["世界", "日本"]
      },
      {
        label: "地理情報の収集・整理・表現",
        relation: "reference",
        targetSubjectId: "geography-basic",
        conceptTags: ["GIS", "地図", "分布"],
        regionTags: ["世界", "日本"]
      }
    ]
  }
];
