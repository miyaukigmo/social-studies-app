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

export const geographyBasicGisContents: ContentItem[] = [
  {
    id: "geography-basic-gis-basic-summary",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "GISの基本",
    body: "GISは、位置に関する情報を地図上で管理・分析・表現するしくみである。地形、人口、交通、土地利用、災害リスクなど、複数の地理情報を重ね合わせることで、地域の特徴や課題を読み取りやすくなる。地理総合では、GISを単なるデジタル地図としてではなく、地域を分析するための道具として理解することが重要である。",
    shortText: "GISを使って、位置情報を地図上で管理・分析・表現する。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "地域性", "情報化"],
    sourceTags: ["GIS資料", "地図", "統計"],
    skillTags: ["地図読解", "資料読解", "統計読解", "空間認識"],
    relatedReferenceIds: ["gis-basic-overview"],
    relatedHints: [
      {
        label: "主題図の読み取り",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布"],
        regionTags: ["世界", "日本"]
      }
    ]
  },
  {
    id: "geography-basic-gis-term",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "GIS",
    body: "GISは、Geographic Information Systemの略で、日本語では地理情報システムという。地図上の位置情報に、人口、土地利用、交通、災害リスクなどの属性情報を結びつけ、表示・分析・比較するために使われる。",
    shortText: "位置情報と属性情報を結びつけて扱う地理情報システム。",
    order: 2,
    frontText: "GIS",
    backText: "地理情報システム。位置情報と人口・土地利用・交通・災害リスクなどの属性情報を結びつけ、地図上で表示・分析するしくみ。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "情報化", "分布"],
    sourceTags: ["GIS資料", "地図"],
    skillTags: ["地図読解", "資料読解", "空間認識"],
    examTags: ["基本用語", "重要用語", "地図読解"]
  },
  {
    id: "geography-basic-gis-geographic-information-term",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "地理情報",
    body: "地理情報とは、場所に結びついた情報のことである。住所、緯度・経度、標高、土地利用、人口、施設の位置、道路網、災害危険区域などが含まれる。GISでは、これらの情報を地図上に表示し、地域の特徴や課題を分析する。",
    shortText: "場所に結びついた情報。",
    order: 3,
    frontText: "地理情報",
    backText: "住所・緯度経度・標高・土地利用・人口・施設位置など、場所に結びついた情報。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "位置", "地域性", "情報化"],
    sourceTags: ["GIS資料", "地図", "統計"],
    skillTags: ["地図読解", "資料読解", "分類"]
  },
  {
    id: "geography-basic-gis-layer-term",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "レイヤー",
    body: "レイヤーとは、GISで地図情報を層のように分けて扱う考え方である。例えば、地形、道路、鉄道、人口、学校、避難所、浸水想定区域などを別々のレイヤーとして重ねることで、地域の特徴や課題を多面的に分析できる。",
    shortText: "GISで地図情報を層のように分けて扱う考え方。",
    order: 4,
    frontText: "レイヤー",
    backText: "GISで、地形・道路・人口・災害リスクなどの地図情報を層のように分けて扱う考え方。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "防災", "レイヤー"],
    sourceTags: ["GIS資料", "地図", "主題図"],
    skillTags: ["地図読解", "資料読解", "分類", "空間認識"]
  },
  {
    id: "geography-basic-gis-overlay-term",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "重ね合わせ",
    body: "GISの重ね合わせとは、複数の地理情報を同じ地図上に表示して、関係を読み取ることである。例えば、人口分布と鉄道網、学校の位置と通学圏、浸水想定区域と避難所の位置を重ねると、地域の利便性や防災上の課題を考えやすくなる。",
    shortText: "複数の地理情報を同じ地図上に重ねて関係を読み取ること。",
    order: 5,
    frontText: "GISの重ね合わせ",
    backText: "人口・交通・災害リスクなど複数の地理情報を同じ地図上に重ね、地域の特徴や課題を分析すること。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "地域性", "防災", "重ね合わせ"],
    sourceTags: ["GIS資料", "地図", "主題図", "ハザードマップ"],
    skillTags: ["地図読解", "資料読解", "因果関係", "空間認識"]
  },
  {
    id: "geography-basic-gis-analysis-flow",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "GISで地域を分析する流れ",
    body: "GISで地域を分析するときは、まず何を調べるのかという問いを立てる。次に、必要な地理情報を集め、地図上に表示する。さらに、複数の情報を重ね合わせ、分布の偏りや地域差を読み取る。最後に、読み取った内容を地形、人口、交通、産業、防災などの要因と結びつけて説明する。",
    shortText: "問いを立て、情報を集め、重ね合わせ、分布と要因を説明する。",
    order: 6,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "地域差", "地域性"],
    sourceTags: ["GIS資料", "地図", "統計", "主題図"],
    skillTags: ["地図読解", "資料読解", "統計読解", "因果関係", "要約"],
    relatedHints: [
      {
        label: "地域調査と地域づくり",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["地域性", "地域開発", "防災"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-gis-disaster-example-map",
    curriculumNodeId: "geobasic-p1-c2-s4",
    subjectId: "geography-basic",
    type: "map-note",
    title: "GISと防災",
    body: "GISは防災でも活用される。地形、標高、河川、過去の災害、浸水想定区域、避難所、道路網などを重ね合わせることで、どの地域にどのような危険があるのか、避難経路に問題がないかを考えられる。防災では、地図情報を一つだけ見るのではなく、複数の情報を組み合わせて判断することが大切である。",
    shortText: "GISでは、地形・災害リスク・避難所などを重ねて防災を考えられる。",
    order: 7,
    regionTags: ["日本"],
    conceptTags: ["GIS", "防災", "災害", "地形", "地域性"],
    sourceTags: ["GIS資料", "ハザードマップ", "地図", "統計"],
    skillTags: ["地図読解", "資料読解", "因果関係", "空間認識"],
    relatedReferenceIds: ["gis-disaster-hazard-map"],
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
    id: "geography-basic-geographic-information-summary",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "地理情報の収集・整理・表現",
    body: "地理情報を活用するには、情報を集めるだけでなく、目的に合わせて整理し、分かりやすく表現する必要がある。統計、地図、写真、現地調査、ウェブ地図、行政資料などを使い、信頼できる情報かどうかを確認することも大切である。地理情報の表現では、地図、表、グラフ、写真、文章を組み合わせると、地域の特徴を伝えやすくなる。",
    shortText: "地理情報を収集・整理し、地図やグラフで分かりやすく表現する。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "地域性", "情報化"],
    sourceTags: ["GIS資料", "地図", "統計", "グラフ", "表", "写真"],
    skillTags: ["資料読解", "地図読解", "統計読解", "要約", "分類"],
    relatedReferenceIds: ["gis-geographic-information-workflow"]
  },
  {
    id: "geography-basic-geographic-information-collection-source",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "source-note",
    title: "地理情報を集める",
    body: "地理情報は、地図、統計、写真、現地観察、聞き取り調査、行政資料、ウェブ地図などから集めることができる。例えば、人口の変化を調べるなら統計、土地利用を調べるなら地形図や空中写真、災害リスクを調べるならハザードマップが役立つ。目的に合った資料を選ぶことが大切である。",
    shortText: "目的に応じて、地図・統計・写真・行政資料などから情報を集める。",
    order: 2,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "人口", "地形", "災害", "地域性"],
    sourceTags: ["地図", "統計", "写真", "ハザードマップ", "GIS資料"],
    skillTags: ["資料読解", "地図読解", "統計読解", "分類"],
    relatedHints: [
      {
        label: "地域調査",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["地域性", "地図", "GIS"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-geographic-information-source-check-term",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "term-card",
    title: "出典の確認",
    body: "地理情報を使うときは、出典を確認する必要がある。誰が、いつ、どのような方法で作成した資料なのかによって、情報の信頼性や使い方は変わる。統計や地図では、作成年、調査範囲、単位、分類方法を確認することが重要である。",
    shortText: "資料の作成者・時期・方法・単位などを確認すること。",
    order: 3,
    frontText: "出典の確認",
    backText: "資料を使うとき、作成者・作成年・調査方法・単位・分類方法などを確認すること。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "情報化", "分布"],
    sourceTags: ["統計", "地図", "表", "グラフ", "GIS資料"],
    skillTags: ["資料読解", "統計読解", "地図読解"],
    examTags: ["資料読解", "正誤問題注意"]
  },
  {
    id: "geography-basic-geographic-information-statistics-organization-source",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "source-note",
    title: "統計を整理する",
    body: "統計を使うときは、数値をそのまま並べるだけでなく、比較しやすい形に整理する。地域別、年代別、割合、人口あたり、面積あたりなど、目的に合った整理の仕方を選ぶ必要がある。総数と割合では見える内容が異なるため、何を比較しているのかを明確にすることが大切である。",
    shortText: "統計は、地域別・年代別・割合など目的に応じて整理する。",
    order: 4,
    regionTags: ["世界", "日本"],
    conceptTags: ["人口", "地域差", "分布", "都市"],
    sourceTags: ["統計", "表", "グラフ"],
    skillTags: ["統計読解", "資料読解", "比較", "分類"],
    examTags: ["資料読解", "比較問題", "正誤問題注意"]
  },
  {
    id: "geography-basic-geographic-information-map-expression-source",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "source-note",
    title: "地図で表現する",
    body: "地理情報は、地図で表すことで場所ごとの違いや分布の偏りを理解しやすくなる。人口密度は階級区分図、施設の分布はドットマップ、地域ごとの数量比較は図形表現図など、情報の性質に合わせて表現方法を選ぶ。地図で表現するときは、凡例、単位、階級区分を分かりやすく示す必要がある。",
    shortText: "情報の性質に合わせて、階級区分図・ドットマップ・図形表現図などで表す。",
    order: 5,
    regionTags: ["世界", "日本"],
    conceptTags: ["地図", "分布", "地域差", "人口", "都市"],
    sourceTags: ["主題図", "統計", "地図", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "比較"],
    relatedHints: [
      {
        label: "主題図の読み取り",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "分布", "地域差"],
        regionTags: ["世界", "日本"]
      }
    ]
  },
  {
    id: "geography-basic-geographic-information-graph-expression-source",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "source-note",
    title: "グラフで表現する",
    body: "地理情報は、グラフで表すことで変化や比較を読み取りやすくなる。時期ごとの変化は折れ線グラフ、数量の比較は棒グラフ、割合の内訳は円グラフや帯グラフが向いている。グラフを使うときは、単位、目盛り、期間、対象地域を確認する必要がある。",
    shortText: "変化・比較・割合に応じて、折れ線・棒・円・帯グラフを使い分ける。",
    order: 6,
    regionTags: ["世界", "日本"],
    conceptTags: ["人口", "都市", "地域差", "分布"],
    sourceTags: ["グラフ", "統計", "表"],
    skillTags: ["統計読解", "グラフ読解", "資料読解", "比較"],
    examTags: ["資料読解", "比較問題"]
  },
  {
    id: "geography-basic-geographic-information-expression-flow",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "地理情報を表現する流れ",
    body: "地理情報を表現するときは、まず問いや目的を決める。次に、必要な資料を集め、出典や単位を確認する。そのうえで、表やグラフに整理し、必要に応じて地図化する。最後に、分布の特徴、地域差、考えられる要因、課題を文章で説明する。",
    shortText: "問いを立て、資料を集め、整理し、地図やグラフで表現して説明する。",
    order: 7,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "分布", "地域差", "地域性"],
    sourceTags: ["GIS資料", "地図", "統計", "グラフ", "表"],
    skillTags: ["資料読解", "地図読解", "統計読解", "要約", "因果関係"]
  },
  {
    id: "geography-basic-geographic-information-misuse-supplement",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "supplement-note",
    title: "地理情報の扱いで注意すること",
    body: "地理情報は便利だが、使い方を誤ると地域の特徴を一面的に捉えてしまう。古い統計、範囲の違うデータ、単位の違う資料をそのまま比べると、誤った結論につながることがある。また、個人情報や防災情報など、扱いに配慮が必要な情報もある。資料は必ず出典、時期、単位、対象範囲を確認して使う。",
    shortText: "出典・時期・単位・対象範囲を確認しないと、地理情報は誤読につながる。",
    order: 8,
    regionTags: ["世界", "日本"],
    conceptTags: ["GIS", "地図", "情報化", "地域差"],
    sourceTags: ["GIS資料", "統計", "地図", "表", "グラフ"],
    skillTags: ["資料読解", "統計読解", "地図読解", "比較"],
    examTags: ["正誤問題注意", "資料読解"]
  },
  {
    id: "geography-basic-geographic-information-gsi-crosslink",
    curriculumNodeId: "geobasic-p1-c2-s5",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "地理院地図と地理情報",
    body: "日本の地理情報を調べるときは、国土地理院の地理院地図が重要な資料になる。地形図、写真、標高、地形分類、災害情報などを地図上で確認でき、地域の地形や防災上の特徴を調べる入口になる。学校の学習では、地図を眺めるだけでなく、複数の情報を重ねて地域の特徴を説明することが大切である。",
    shortText: "地理院地図は、地形・写真・標高・災害情報などを確認できる地理情報資料である。",
    order: 9,
    regionTags: ["日本"],
    conceptTags: ["GIS", "地図", "地形", "防災", "災害", "地理院地図"],
    sourceTags: ["GIS資料", "地図", "地形図", "写真", "ハザードマップ"],
    skillTags: ["地図読解", "資料読解", "空間認識", "因果関係"],
    relatedReferenceIds: ["gis-gsi-maps"],
    relatedHints: [
      {
        label: "地形図の読み取り",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["地図", "地形", "防災"],
        regionTags: ["日本"]
      },
      {
        label: "自然災害と防災",
        relation: "reference",
        targetSubjectId: "geography-basic",
        conceptTags: ["防災", "災害", "地形"],
        regionTags: ["日本"]
      }
    ]
  }
];

export const geographyBasicStateTerritoryContents: ContentItem[] = [
  {
    id: "geography-basic-state-territory-summary",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "国家と領域",
    body: "国家は、一定の領域、そこに住む人々、政治を行う主権をもつまとまりとして捉えられる。地理総合では、国家を地図上の色分けとして見るだけでなく、領土・領海・領空、国境、資源、交通、安全保障などと結びつけて理解する。国家の領域は、国際法や周辺国との関係にも深く関わる。",
    shortText: "国家を、領域・人々・主権から捉え、地図上の国境や海域と結びつけて理解する。",
    order: 1,
    regionTags: ["世界"],
    conceptTags: ["国家", "主権", "領域", "位置", "地図", "資源", "安全保障"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "空間認識", "資料読解"],
    relatedReferenceIds: ["map-world-political"],
    relatedHints: [
      {
        label: "公共の国家主権・国際法",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["国家", "主権", "安全保障", "国際協調"]
      }
    ]
  },
  {
    id: "geography-basic-state-territory-state-term",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "国家",
    body: "国家とは、一定の領域とそこに住む人々をもち、他国から独立して政治を行う主権をもつまとまりである。地図上では国境線によって区切られるが、実際には民族、宗教、資源、交通路、歴史的経緯などが国家のあり方に関わっている。",
    shortText: "領域・人々・主権をもつ政治的なまとまり。",
    order: 2,
    frontText: "国家",
    backText: "一定の領域と人々をもち、他国から独立して政治を行う主権をもつまとまり。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["国家", "主権", "地図", "地域性"],
    sourceTags: ["地図"],
    skillTags: ["地図読解", "空間認識"],
    relatedHints: [
      {
        label: "政治・経済の国際社会",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["国家", "主権", "国際協調"]
      }
    ]
  },
  {
    id: "geography-basic-state-territory-sovereignty-term",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "主権",
    body: "主権とは、国家が国内政治を最終的に決定し、対外的にも他国から独立して行動する権限である。領土、領海、領空は、主権が及ぶ空間として重要である。ただし、現代の国家は国際法や条約、国際機関との関係の中で行動している。",
    shortText: "国家が国内外で独立して政治を行う権限。",
    order: 3,
    frontText: "主権",
    backText: "国家が国内政治を最終的に決定し、対外的にも他国から独立して行動する権限。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["主権", "国家", "国際協調", "安全保障", "国際法"],
    sourceTags: ["地図", "公文書"],
    skillTags: ["用語説明", "資料読解"],
    relatedHints: [
      {
        label: "公共の国家主権",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["主権", "国家", "安全保障"]
      }
    ]
  },
  {
    id: "geography-basic-state-territory-domain-term",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "領域",
    body: "領域とは、国家の主権が及ぶ空間であり、陸地である領土、海の部分である領海、空の部分である領空からなる。さらに、領海の外側には接続水域や排他的経済水域が設定される。地理では、領域を地図上の範囲として読むだけでなく、資源利用や交通、安全保障との関係で理解する。",
    shortText: "国家の主権が及ぶ空間。領土・領海・領空からなる。",
    order: 4,
    frontText: "領域",
    backText: "国家の主権が及ぶ空間。領土・領海・領空からなる。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["国家", "主権", "領域", "位置", "地図", "資源", "安全保障"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "空間認識", "用語説明"],
    relatedReferenceIds: ["map-world-territory-zones"]
  },
  {
    id: "geography-basic-state-territory-territorial-sea-term",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "領海",
    body: "領海は、沿岸国の主権が及ぶ海域である。一般に領海の基線から外側12海里までの範囲とされる。領海では沿岸国の主権が及ぶが、外国船舶には一定の条件のもとで無害通航権が認められる。",
    shortText: "沿岸国の主権が及ぶ、基線から外側12海里までの海域。",
    order: 5,
    frontText: "領海",
    backText: "沿岸国の主権が及ぶ海域。一般に基線から外側12海里まで。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "領海", "領域", "地図", "交通", "安全保障", "国際法"],
    sourceTags: ["地図", "公文書"],
    skillTags: ["地図読解", "資料読解", "用語説明"],
    relatedReferenceIds: ["map-world-maritime-zones", "source-unclos-territorial-sea"],
    examTags: ["基本用語", "重要用語", "正誤問題注意"]
  },
  {
    id: "geography-basic-state-territory-eez-term",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "term-card",
    title: "排他的経済水域",
    body: "排他的経済水域は、領海の外側に設定される海域で、沿岸国が水産資源や海底資源などの探査・開発・保存・管理に関する権利をもつ。原則として領海の基線から200海里までの範囲に設定される。主権そのものが全面的に及ぶ領海とは区別して理解する必要がある。",
    shortText: "沿岸国が海洋資源の利用・管理などの権利をもつ海域。",
    order: 6,
    frontText: "排他的経済水域",
    backText: "沿岸国が水産資源や海底資源などの探査・開発・保存・管理に関する権利をもつ海域。原則200海里まで。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "排他的経済水域", "領域", "資源", "エネルギー", "安全保障", "国際法"],
    sourceTags: ["地図", "主題図", "公文書"],
    skillTags: ["地図読解", "資料読解", "用語説明"],
    relatedReferenceIds: ["map-world-eez", "source-unclos-eez"],
    examTags: ["基本用語", "重要用語", "正誤問題注意"],
    relatedHints: [
      {
        label: "資源・エネルギー問題",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["資源", "エネルギー", "環境問題"]
      }
    ]
  },
  {
    id: "geography-basic-state-territory-maritime-zones-comparison",
    curriculumNodeId: "geobasic-p1-c3-s1",
    subjectId: "geography-basic",
    type: "comparison-note",
    title: "領海・接続水域・排他的経済水域の違い",
    body: "領海は沿岸国の主権が及ぶ海域で、基線から12海里までとされる。接続水域は領海の外側にあり、通関、出入国管理、衛生などに関する違反の防止や処罰のために設定される。排他的経済水域は、資源の探査・開発・保存・管理などに関する沿岸国の権利が認められる海域で、原則200海里までである。",
    shortText: "領海は主権、接続水域は取締り、排他的経済水域は資源利用の権利が中心。",
    order: 7,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "領海", "排他的経済水域", "領域", "資源", "安全保障", "国際法"],
    sourceTags: ["地図", "主題図", "公文書"],
    skillTags: ["比較", "地図読解", "資料読解", "用語説明"],
    relatedReferenceIds: ["map-world-maritime-zones", "source-unclos-maritime-zones"],
    examTags: ["比較問題", "正誤問題注意", "重要用語"]
  },

  {
    id: "geography-basic-japan-location-territory-summary",
    curriculumNodeId: "geobasic-p1-c3-s2",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "日本の位置と領域",
    body: "日本は、ユーラシア大陸の東、太平洋の西に位置する島国である。南北に長く、多くの島々からなるため、気候や自然環境に地域差があり、広い排他的経済水域をもつ。日本の位置と領域を理解することは、交通、貿易、資源、防災、安全保障を考える基礎になる。",
    shortText: "日本を、島国・南北に長い国・海に囲まれた国として捉える。",
    order: 1,
    regionTags: ["日本", "アジア", "東アジア", "太平洋地域"],
    conceptTags: ["位置", "国家", "地図", "地域性", "交通", "貿易", "資源", "防災"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "空間認識", "地域比較"],
    relatedReferenceIds: ["map-japan-location-east-asia", "map-japan-territory-eez"],
    relatedHints: [
      {
        label: "日本の気候と自然災害",
        relation: "effect",
        targetSubjectId: "geography-basic",
        conceptTags: ["気候", "防災", "災害"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-japan-location-island-country-term",
    curriculumNodeId: "geobasic-p1-c3-s2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "島国としての日本",
    body: "日本は周囲を海に囲まれた島国である。海は、漁業や貿易、海上交通を支える一方で、台風、津波、高潮などの自然災害とも関係する。島国という条件は、日本の産業、交通、文化交流、安全保障を考えるうえで重要である。",
    shortText: "海に囲まれた日本の位置条件を、交通・産業・防災と結びつけて理解する。",
    order: 2,
    frontText: "島国としての日本",
    backText: "日本は海に囲まれた島国であり、漁業・貿易・海上交通・防災・安全保障と深く関わる。",
    isMemorizationTarget: true,
    regionTags: ["日本", "東アジア", "太平洋地域"],
    conceptTags: ["位置", "交通", "貿易", "資源", "防災", "安全保障"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "因果関係", "空間認識"]
  },
  {
    id: "geography-basic-japan-location-north-south-term",
    curriculumNodeId: "geobasic-p1-c3-s2",
    subjectId: "geography-basic",
    type: "term-card",
    title: "南北に長い日本",
    body: "日本列島は南北に長く、北海道から沖縄まで緯度差が大きい。そのため、気温、降水量、植生、農業、生活文化などに地域差が見られる。日本の位置を理解すると、国内の気候や産業の違いも説明しやすくなる。",
    shortText: "日本は南北に長く、気候や生活に地域差がある。",
    order: 3,
    frontText: "南北に長い日本",
    backText: "北海道から沖縄まで緯度差が大きく、気候・植生・農業・生活文化に地域差が見られる。",
    isMemorizationTarget: true,
    regionTags: ["日本", "北海道", "沖縄"],
    conceptTags: ["位置", "気候", "地域差", "農業", "地域性"],
    sourceTags: ["地図", "主題図", "雨温図"],
    skillTags: ["地図読解", "地域比較", "因果関係"],
    relatedHints: [
      {
        label: "日本の気候区分",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["気候", "地域差"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-japan-location-eez-map",
    curriculumNodeId: "geobasic-p1-c3-s2",
    subjectId: "geography-basic",
    type: "map-note",
    title: "日本の排他的経済水域",
    body: "日本は多くの島々からなるため、国土面積に比べて広い排他的経済水域をもつ。排他的経済水域では、水産資源や海底資源、海洋環境の保全などが重要な課題になる。日本の領域を考えるときは、陸地だけでなく、周囲の海域にも注目する必要がある。",
    shortText: "日本は島々によって広い排他的経済水域をもつ。",
    order: 4,
    regionTags: ["日本", "太平洋地域", "東アジア"],
    conceptTags: ["国家", "位置", "排他的経済水域", "領域", "資源", "エネルギー", "環境問題", "安全保障"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "資料読解", "空間認識"],
    relatedReferenceIds: ["map-japan-eez"],
    relatedHints: [
      {
        label: "海洋資源とエネルギー",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["資源", "エネルギー", "環境問題"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-japan-location-relative-position-flow",
    curriculumNodeId: "geobasic-p1-c3-s2",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "日本の位置から見える結びつき",
    body: "日本は東アジアに位置し、太平洋を通じて北アメリカやオセアニアとも結びついている。海上交通や航空路、貿易、観光、人の移動を考えると、日本の位置は世界との関係を理解する手がかりになる。位置を読むときは、近い国だけでなく、交通路や海洋との関係も見ることが重要である。",
    shortText: "日本の位置は、東アジア・太平洋・世界の交通や貿易と結びつく。",
    order: 5,
    regionTags: ["日本", "東アジア", "北アメリカ", "オセアニア", "太平洋地域"],
    conceptTags: ["位置", "交通", "貿易", "観光", "グローバル化"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "空間認識", "因果関係"],
    relatedHints: [
      {
        label: "交通・通信の発達",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["交通", "情報化", "グローバル化"],
        regionTags: ["世界", "日本"]
      }
    ]
  },

  {
    id: "geography-basic-border-territorial-issues-summary",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "国境・領土をめぐる問題",
    body: "国境は、国家の領域を区切る境界である。山脈や河川などの自然物に沿う国境もあれば、緯線・経線などをもとに直線的に引かれた国境もある。国境や領土をめぐる問題は、資源、民族、歴史、安全保障、国際法と関係する。地理総合では、地図で位置を確認しながら、複数の資料を使って背景や影響を考えることが大切である。",
    shortText: "国境・領土問題を、地図・歴史・資源・国際法と結びつけて考える。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "国境", "地図", "資源", "安全保障", "国際協調", "国際法"],
    sourceTags: ["地図", "主題図", "公文書"],
    skillTags: ["地図読解", "資料読解", "因果関係", "比較"],
    relatedReferenceIds: ["map-world-borders", "map-japan-territorial-issues"],
    relatedHints: [
      {
        label: "公共の国際法と平和的解決",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["国家", "主権", "安全保障", "国際協調"]
      }
    ]
  },
  {
    id: "geography-basic-border-natural-border-term",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "自然的国境",
    body: "自然的国境とは、山脈、河川、湖、海峡などの自然物を境界として利用した国境である。地形が境界として分かりやすい一方で、河川の流路変化や資源利用、民族分布などによって問題が生じることもある。",
    shortText: "山脈・河川・海峡など自然物を利用した国境。",
    order: 2,
    frontText: "自然的国境",
    backText: "山脈・河川・湖・海峡など、自然物を境界として利用した国境。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["国家", "国境", "地形", "地図", "地域性"],
    sourceTags: ["地図", "地形図"],
    skillTags: ["地図読解", "空間認識", "分類"]
  },
  {
    id: "geography-basic-border-artificial-border-term",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "人為的国境",
    body: "人為的国境とは、緯線・経線や条約、植民地支配の歴史などによって人為的に定められた国境である。特にアフリカなどでは、民族や生活圏と一致しない直線的な国境が残り、政治的対立や地域問題の背景になることがある。",
    shortText: "緯線・経線や条約などによって人為的に定められた国境。",
    order: 3,
    frontText: "人為的国境",
    backText: "緯線・経線や条約、植民地支配の歴史などによって人為的に定められた国境。",
    isMemorizationTarget: true,
    regionTags: ["世界", "アフリカ"],
    conceptTags: ["国家", "国境", "地図", "植民地主義", "民族自決", "地域性"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "資料読解", "因果関係"],
    relatedHints: [
      {
        label: "世界史の植民地主義と脱植民地化",
        relation: "background",
        targetSubjectId: "world-history-advanced",
        conceptTags: ["植民地主義", "脱植民地化", "民族自決"],
        regionTags: ["アフリカ"]
      }
    ]
  },
  {
    id: "geography-basic-border-territorial-issue-term",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "term-card",
    title: "領土をめぐる問題",
    body: "領土をめぐる問題は、国家間で特定の地域の帰属や管理をめぐって対立が生じる問題である。背景には、歴史的経緯、国際法上の主張、資源、漁業、安全保障、住民の生活などが関わる。学習では、地図で位置を確認し、資料の出典や立場に注意しながら理解する必要がある。",
    shortText: "地域の帰属や管理をめぐる国家間の問題。",
    order: 4,
    frontText: "領土をめぐる問題",
    backText: "国家間で、特定の地域の帰属や管理をめぐって対立が生じる問題。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "国境", "資源", "安全保障", "国際協調", "国際法"],
    sourceTags: ["地図", "主題図", "公文書"],
    skillTags: ["地図読解", "資料読解", "因果関係"],
    examTags: ["重要用語", "現代社会との関連", "資料読解"]
  },
  {
    id: "geography-basic-border-japan-territorial-issues-map",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "map-note",
    title: "日本周辺の領域を地図で確認する",
    body: "日本周辺の領域を学ぶときは、北方領土、竹島、尖閣諸島などの位置を地図で確認する。これらは、北海道、島根県、沖縄県など日本各地の位置理解とも関わる。領土をめぐる内容は、地名暗記だけでなく、国家主権、国際法、平和的解決、漁業や資源利用との関係で考えることが大切である。",
    shortText: "日本周辺の領域を、位置・主権・国際法・資源利用と結びつけて理解する。",
    order: 5,
    regionTags: ["日本", "北海道", "沖縄", "東アジア"],
    conceptTags: ["国家", "主権", "国境", "地図", "資源", "安全保障", "国際協調", "国際法"],
    sourceTags: ["地図", "主題図", "公文書"],
    skillTags: ["地図読解", "資料読解", "空間認識"],
    relatedReferenceIds: ["map-japan-territorial-issues"],
    relatedHints: [
      {
        label: "日本史探究の領土の画定",
        relation: "background",
        targetSubjectId: "japanese-history-advanced",
        conceptTags: ["国民国家", "主権", "近代国家"],
        regionTags: ["日本"]
      },
      {
        label: "公共の国家主権と国際法",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["国家", "主権", "安全保障", "国際協調"]
      }
    ]
  },
  {
    id: "geography-basic-border-peaceful-solution-crosslink",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "領土問題と平和的解決",
    body: "領土をめぐる問題は、感情的な対立だけでなく、歴史的経緯、国際法、外交交渉、安全保障、地域住民の生活に関わる。地理総合では、地図で位置を確認し、複数の資料を比較しながら、国家間の問題を平和的に解決する必要性を理解することが重要である。",
    shortText: "領土問題は、国際法と外交による平和的解決の視点で考える。",
    order: 6,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "国境", "国際協調", "安全保障", "地図", "国際法"],
    sourceTags: ["地図", "公文書", "主題図"],
    skillTags: ["資料読解", "地図読解", "比較", "因果関係"],
    relatedHints: [
      {
        label: "政治・経済の国際法と国際機構",
        relation: "same-concept",
        targetSubjectId: "politics-economics",
        conceptTags: ["国家", "主権", "国際協調", "安全保障"]
      }
    ]
  },
  {
    id: "geography-basic-border-source-reading-supplement",
    curriculumNodeId: "geobasic-p1-c3-s3",
    subjectId: "geography-basic",
    type: "supplement-note",
    title: "領土に関する資料を読むときの注意",
    body: "領土に関する資料は、作成した国や機関の立場が反映されることがある。地図、政府資料、報道、統計を読むときは、出典、作成年、作成主体、地図の表記方法を確認する必要がある。高校範囲では、日本政府の立場を理解するとともに、国際法や平和的解決の視点と結びつけて学ぶことが大切である。",
    shortText: "領土資料は、出典・作成主体・表記方法を確認して読む。",
    order: 7,
    regionTags: ["世界", "日本"],
    conceptTags: ["国家", "主権", "地図", "国際協調", "安全保障", "国際法"],
    sourceTags: ["地図", "公文書", "統計"],
    skillTags: ["資料読解", "地図読解", "比較"],
    examTags: ["正誤問題注意", "資料読解", "現代社会との関連"]
  }
];

export const geographyBasicGlobalConnectionsContents: ContentItem[] = [
  {
    id: "geography-basic-transport-communication-summary",
    curriculumNodeId: "geobasic-p1-c3-s4",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "交通・通信の発達",
    body: "交通・通信の発達は、世界の距離感を大きく変えてきた。航空機、船舶、鉄道、自動車、インターネットなどの発達により、人・もの・情報が国境を越えて移動しやすくなった。地理総合では、交通路や通信網を地図で確認しながら、世界の結びつきがどの地域に強く現れ、どの地域に課題を生んでいるのかを考える。",
    shortText: "交通・通信の発達によって、人・もの・情報の移動が活発になった。",
    order: 1,
    regionTags: ["世界"],
    conceptTags: ["交通", "情報化", "グローバル化", "地域差", "都市"],
    sourceTags: ["地図", "主題図", "統計"],
    skillTags: ["地図読解", "資料読解", "因果関係", "空間認識"],
    relatedReferenceIds: ["map-world-transport-network"],
    relatedHints: [
      {
        label: "時差と世界の結びつき",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["時差", "交通", "情報化", "グローバル化"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-transport-air-route-term",
    curriculumNodeId: "geobasic-p1-c3-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "航空交通",
    body: "航空交通は、人や高付加価値の商品を短時間で長距離移動させる交通手段である。大都市や国際空港を結ぶ航空路は、ビジネス、観光、国際交流、物流を支えている。一方で、航空交通は燃料消費や温室効果ガス排出とも関わるため、環境面の課題もある。",
    shortText: "人や高付加価値の商品を短時間で長距離移動させる交通手段。",
    order: 2,
    frontText: "航空交通",
    backText: "人や高付加価値の商品を短時間で長距離移動させる交通手段。観光・ビジネス・国際交流を支える。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["交通", "航空交通", "観光", "貿易", "グローバル化", "環境問題"],
    sourceTags: ["地図", "主題図", "統計"],
    skillTags: ["地図読解", "統計読解", "因果関係"],
    relatedReferenceIds: ["map-world-air-routes"]
  },
  {
    id: "geography-basic-transport-maritime-route-term",
    curriculumNodeId: "geobasic-p1-c3-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "海上交通",
    body: "海上交通は、大量の貨物を比較的安く運ぶことができる交通手段である。石油、鉄鉱石、穀物、工業製品などの国際貿易を支えており、港湾や海上交通路の位置は世界経済と深く関係する。日本のような島国では、海上交通は貿易や資源輸入の基盤となる。",
    shortText: "大量の貨物を比較的安く運ぶ国際貿易の基盤。",
    order: 3,
    frontText: "海上交通",
    backText: "大量の貨物を比較的安く運ぶ交通手段。石油・鉄鉱石・穀物・工業製品などの国際貿易を支える。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本", "太平洋地域", "インド洋地域"],
    conceptTags: ["交通", "海上交通", "貿易", "資源", "エネルギー", "グローバル化"],
    sourceTags: ["地図", "主題図", "統計"],
    skillTags: ["地図読解", "資料読解", "因果関係"],
    relatedReferenceIds: ["map-world-maritime-routes"],
    relatedHints: [
      {
        label: "日本の位置と領域",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["位置", "交通", "貿易", "資源"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-transport-hub-term",
    curriculumNodeId: "geobasic-p1-c3-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "交通の結節点",
    body: "交通の結節点とは、複数の交通路が集まり、人やものの移動が集中する場所である。空港、港湾、鉄道駅、高速道路の交差点などが例である。交通の結節点には、物流施設、商業施設、業務機能が集まりやすく、都市の発展にも影響する。",
    shortText: "複数の交通路が集まり、人やものの移動が集中する場所。",
    order: 4,
    frontText: "交通の結節点",
    backText: "空港・港湾・鉄道駅など、複数の交通路が集まり、人やものの移動が集中する場所。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["交通", "都市", "工業", "貿易", "地域性"],
    sourceTags: ["地図", "主題図"],
    skillTags: ["地図読解", "空間認識", "因果関係"]
  },
  {
    id: "geography-basic-communication-ict-term",
    curriculumNodeId: "geobasic-p1-c3-s4",
    subjectId: "geography-basic",
    type: "term-card",
    title: "情報通信技術",
    body: "情報通信技術は、インターネットや通信ネットワークを通じて、情報を短時間でやり取りする技術である。通信の発達により、遠隔地との会議、オンライン学習、電子商取引、国際的な金融取引などが広がった。一方で、通信環境の地域差や情報格差も課題になる。",
    shortText: "情報を短時間でやり取りし、世界の結びつきを強める技術。",
    order: 5,
    frontText: "情報通信技術",
    backText: "インターネットや通信ネットワークを通じて、情報を短時間でやり取りする技術。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["情報化", "グローバル化", "地域差", "都市", "格差", "情報格差"],
    sourceTags: ["統計", "主題図"],
    skillTags: ["資料読解", "統計読解", "因果関係"],
    relatedHints: [
      {
        label: "GISの基本",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["GIS", "情報化", "地図"],
        regionTags: ["世界"]
      }
    ]
  },
  {
    id: "geography-basic-transport-communication-flow",
    curriculumNodeId: "geobasic-p1-c3-s4",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "交通・通信の発達が世界を結ぶ流れ",
    body: "交通が発達すると、人やものが短時間で遠くまで移動しやすくなる。通信が発達すると、情報やサービスが国境を越えてやり取りされやすくなる。その結果、貿易、観光、企業活動、文化交流が活発になる。一方で、交通網や通信環境が整った地域とそうでない地域の差も生まれる。",
    shortText: "交通・通信の発達は世界の結びつきを強めるが、地域差も生む。",
    order: 6,
    regionTags: ["世界"],
    conceptTags: ["交通", "情報化", "グローバル化", "貿易", "観光", "地域差", "格差"],
    sourceTags: ["地図", "主題図", "統計"],
    skillTags: ["因果関係", "地図読解", "資料読解"],
    relatedHints: [
      {
        label: "グローバル化する世界",
        relation: "background",
        targetSubjectId: "geography-basic",
        conceptTags: ["グローバル化", "情報化", "交通", "貿易"]
      }
    ]
  },

  {
    id: "geography-basic-trade-tourism-migration-summary",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "貿易・観光・人の移動",
    body: "交通・通信の発達により、国境を越えたもの・人・情報の移動が活発になった。貿易は資源や製品を世界各地でやり取りし、観光は地域の自然や文化を国際的な交流につなげる。人の移動には、観光、留学、労働、移民、難民などさまざまな形があり、受け入れ地域と送り出し地域の双方に影響を与える。",
    shortText: "貿易・観光・人の移動から、世界の結びつきを理解する。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["貿易", "観光", "人口移動", "グローバル化", "多文化共生"],
    sourceTags: ["地図", "主題図", "統計", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "因果関係"],
    relatedReferenceIds: ["stats-world-trade-tourism-migration"],
    relatedHints: [
      {
        label: "公共の多文化共生",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["多文化共生", "人権", "社会"],
        regionTags: ["世界", "日本"]
      }
    ]
  },
  {
    id: "geography-basic-trade-term",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "term-card",
    title: "貿易",
    body: "貿易は、国境を越えて商品やサービスを売買することである。資源が豊かな地域、工業が発達した地域、消費市場が大きい地域などが、交通網や経済関係を通じて結びつく。貿易を読むときは、何を輸出し、何を輸入しているのか、相手国や輸送経路はどこかを確認する。",
    shortText: "国境を越えて商品やサービスを売買すること。",
    order: 2,
    frontText: "貿易",
    backText: "国境を越えて商品やサービスを売買すること。資源・工業・消費市場・交通網と関係する。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["貿易", "交通", "資源", "工業", "グローバル化"],
    sourceTags: ["統計", "地図", "主題図", "グラフ"],
    skillTags: ["統計読解", "地図読解", "資料読解", "因果関係"],
    relatedReferenceIds: ["stats-world-trade"]
  },
  {
    id: "geography-basic-trade-import-export-term",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "term-card",
    title: "輸出と輸入",
    body: "輸出は、自国から外国へ商品やサービスを売ることであり、輸入は、外国から自国へ商品やサービスを買うことである。国や地域によって、輸出入の品目や相手国は異なる。日本の場合、工業製品の輸出や、エネルギー資源・食料の輸入などを地図や統計で確認すると、世界との結びつきが見えやすい。",
    shortText: "輸出は外国へ売ること、輸入は外国から買うこと。",
    order: 3,
    frontText: "輸出と輸入",
    backText: "輸出は自国から外国へ売ること。輸入は外国から自国へ買うこと。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["貿易", "資源", "エネルギー", "工業", "農業"],
    sourceTags: ["統計", "表", "グラフ", "主題図"],
    skillTags: ["統計読解", "資料読解", "比較"],
    relatedReferenceIds: ["stats-japan-trade-import-export"]
  },
  {
    id: "geography-basic-tourism-term",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "term-card",
    title: "観光",
    body: "観光は、人が日常生活の場を離れて、自然、文化、歴史、都市、レジャーなどを目的に移動する活動である。国際観光は、航空交通や情報通信の発達とともに拡大し、地域経済や雇用に影響を与える。一方で、混雑、環境負荷、地域住民の生活への影響も課題になる。",
    shortText: "自然・文化・歴史・都市などを目的に人が移動する活動。",
    order: 4,
    frontText: "観光",
    backText: "人が日常生活の場を離れて、自然・文化・歴史・都市・レジャーなどを目的に移動する活動。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["観光", "交通", "地域性", "環境問題", "持続可能性"],
    sourceTags: ["統計", "地図", "主題図", "グラフ"],
    skillTags: ["統計読解", "資料読解", "地図読解", "因果関係"],
    relatedReferenceIds: ["stats-tourism-inbound-outbound"],
    relatedHints: [
      {
        label: "地域づくりと観光",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["観光", "地域開発", "持続可能性"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-tourism-statistics-source",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "source-note",
    title: "観光統計を読む",
    body: "観光を学ぶときは、訪問者数、出発地、目的地、宿泊数、消費額などの統計を確認する。人数だけでなく、どの地域から来ているのか、どの季節に多いのか、地域経済や交通にどのような影響があるのかを考えることが重要である。訪日外国人旅行者の統計などは、観光と世界の結びつきを読み取る資料になる。",
    shortText: "観光統計では、人数・出発地・目的地・季節性・消費額などを読む。",
    order: 5,
    regionTags: ["世界", "日本"],
    conceptTags: ["観光", "交通", "地域差", "グローバル化"],
    sourceTags: ["統計", "グラフ", "表", "主題図"],
    skillTags: ["統計読解", "資料読解", "比較", "因果関係"],
    relatedReferenceIds: ["stats-jnto-visitor-statistics"],
    relatedHints: [
      {
        label: "統計資料の読み取り",
        relation: "reference",
        targetSubjectId: "geography-basic",
        conceptTags: ["統計", "観光", "地域差"],
        regionTags: ["日本"]
      }
    ]
  },
  {
    id: "geography-basic-migration-term",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "term-card",
    title: "人の移動",
    body: "人の移動には、観光、留学、労働、移住、避難、難民などさまざまな形がある。移動の背景には、仕事、教育、家族、紛争、災害、経済格差などがある。人の移動は、送り出し地域と受け入れ地域の人口構成、労働市場、文化、社会制度に影響を与える。",
    shortText: "観光・留学・労働・移住・避難など、人が地域を越えて移動すること。",
    order: 6,
    frontText: "人の移動",
    backText: "観光・留学・労働・移住・避難など、人が地域を越えて移動すること。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["人口移動", "格差", "多文化共生", "グローバル化", "労働"],
    sourceTags: ["統計", "地図", "主題図"],
    skillTags: ["統計読解", "地図読解", "因果関係", "地域比較"],
    relatedHints: [
      {
        label: "公共の多文化共生と人権",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["多文化共生", "人権", "社会"],
        regionTags: ["世界", "日本"]
      }
    ]
  },
  {
    id: "geography-basic-migration-push-pull-flow",
    curriculumNodeId: "geobasic-p1-c3-s5",
    subjectId: "geography-basic",
    type: "flow-note",
    title: "人の移動を考える流れ",
    body: "人の移動を考えるときは、送り出し地域の事情と受け入れ地域の事情を分けて見る。送り出し地域では、雇用不足、紛争、災害、教育機会の不足などが移動の背景になることがある。受け入れ地域では、労働力需要、賃金、教育機会、安全な生活環境などが人を引きつける要因になる。",
    shortText: "送り出し地域と受け入れ地域の要因を分けて、人の移動を考える。",
    order: 7,
    regionTags: ["世界", "日本"],
    conceptTags: ["人口移動", "労働", "格差", "都市", "多文化共生"],
    sourceTags: ["統計", "地図", "主題図"],
    skillTags: ["因果関係", "地域比較", "統計読解", "地図読解"]
  },

  {
    id: "geography-basic-globalization-summary",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "section-summary",
    title: "グローバル化する世界",
    body: "グローバル化とは、人、もの、資本、情報、文化などが国境を越えて結びつきを強めることである。交通・通信の発達、貿易の拡大、企業活動の国際化、観光や人の移動の増加によって、世界は相互に依存するようになっている。一方で、地域間格差、環境問題、文化摩擦、感染症の拡大など、地球規模の課題も生じている。",
    shortText: "人・もの・資本・情報・文化が国境を越えて結びつきを強める。",
    order: 1,
    regionTags: ["世界", "日本"],
    conceptTags: ["グローバル化", "交通", "情報化", "貿易", "観光", "人口移動", "格差", "環境問題"],
    sourceTags: ["地図", "主題図", "統計", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "因果関係"],
    relatedReferenceIds: ["map-world-globalization"],
    relatedHints: [
      {
        label: "公共のグローバル化と多文化共生",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["グローバル化", "多文化共生", "人権", "格差"]
      }
    ]
  },
  {
    id: "geography-basic-globalization-term",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "term-card",
    title: "グローバル化",
    body: "グローバル化は、人、もの、資本、情報、文化などが国境を越えて結びつきを強めることである。私たちの生活でも、外国産の商品、海外のニュース、国際的な観光、オンラインサービスなどを通して実感できる。地理では、グローバル化がどの地域にどのような影響を与えているかを考える。",
    shortText: "国境を越えて世界の結びつきが強まること。",
    order: 2,
    frontText: "グローバル化",
    backText: "人・もの・資本・情報・文化などが国境を越えて結びつきを強めること。",
    isMemorizationTarget: true,
    regionTags: ["世界"],
    conceptTags: ["グローバル化", "交通", "情報化", "貿易", "観光", "人口移動"],
    sourceTags: ["地図", "統計", "主題図"],
    skillTags: ["用語説明", "地図読解", "資料読解"]
  },
  {
    id: "geography-basic-globalization-interdependence-term",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "term-card",
    title: "相互依存",
    body: "相互依存とは、国や地域が互いに支え合い、影響し合っている状態である。資源を輸入する国、工業製品を輸出する国、観光客を受け入れる地域、労働力を送り出す地域などは、貿易や人の移動を通して結びついている。一つの地域の変化が、遠く離れた地域にも影響することがある。",
    shortText: "国や地域が互いに支え合い、影響し合っている状態。",
    order: 3,
    frontText: "相互依存",
    backText: "国や地域が貿易・資源・人の移動・情報などを通じて互いに支え合い、影響し合う状態。",
    isMemorizationTarget: true,
    regionTags: ["世界", "日本"],
    conceptTags: ["グローバル化", "相互依存", "貿易", "資源", "人口移動", "地域差"],
    sourceTags: ["地図", "主題図", "統計"],
    skillTags: ["因果関係", "地図読解", "資料読解"],
    relatedHints: [
      {
        label: "資源・エネルギー問題",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["資源", "エネルギー", "環境問題"],
        regionTags: ["世界", "日本"]
      }
    ]
  },
  {
    id: "geography-basic-globalization-benefits-problems-comparison",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "comparison-note",
    title: "グローバル化の利点と課題",
    body: "グローバル化には、商品や情報を得やすくなる、観光や文化交流が進む、企業活動や雇用の機会が広がるといった利点がある。一方で、地域間格差の拡大、環境負荷、文化摩擦、経済危機や感染症の広がりやすさなどの課題もある。グローバル化は、よい面だけでも悪い面だけでもなく、地域ごとの影響を具体的に見る必要がある。",
    shortText: "グローバル化は利便性や交流を広げる一方、格差や環境問題も生む。",
    order: 4,
    regionTags: ["世界", "日本"],
    conceptTags: ["グローバル化", "格差", "環境問題", "多文化共生", "持続可能性"],
    sourceTags: ["統計", "主題図", "地図"],
    skillTags: ["比較", "因果関係", "資料読解", "地域比較"],
    relatedHints: [
      {
        label: "SDGsと持続可能な社会",
        relation: "same-concept",
        targetSubjectId: "geography-basic",
        conceptTags: ["SDGs", "持続可能性", "環境問題", "格差"]
      }
    ]
  },
  {
    id: "geography-basic-globalization-map-reading-source",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "source-note",
    title: "グローバル化を地図と統計で読む",
    body: "グローバル化を理解するには、貿易額、航空路、海上交通路、観光客数、移民、インターネット利用率などの地図や統計を組み合わせて読むことが有効である。どの地域が強く結びついているか、どの地域が取り残されやすいかを読み取ることで、世界の結びつきと地域差を具体的に考えられる。",
    shortText: "貿易・交通・観光・移民・通信の資料から、世界の結びつきと地域差を読む。",
    order: 5,
    regionTags: ["世界"],
    conceptTags: ["グローバル化", "貿易", "交通", "観光", "人口移動", "情報化", "地域差"],
    sourceTags: ["地図", "主題図", "統計", "グラフ"],
    skillTags: ["地図読解", "統計読解", "資料読解", "地域比較"],
    relatedReferenceIds: ["map-world-globalization-indicators"]
  },
  {
    id: "geography-basic-globalization-local-life-crosslink",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "crosslink-note",
    title: "身近な生活とグローバル化",
    body: "グローバル化は、遠い世界だけの話ではない。食料品、衣服、スマートフォン、動画配信、観光客、外国人労働者などを通して、身近な生活にも現れている。地理総合では、身近なものがどこから来て、どのような交通・貿易・情報通信によって届いているのかを考えることで、世界とのつながりを具体的に理解できる。",
    shortText: "身近な商品や情報から、世界とのつながりを具体的に理解する。",
    order: 6,
    regionTags: ["世界", "日本"],
    conceptTags: ["グローバル化", "貿易", "交通", "情報化", "多文化共生"],
    sourceTags: ["地図", "統計", "主題図"],
    skillTags: ["資料読解", "地図読解", "因果関係", "要約"],
    relatedHints: [
      {
        label: "歴史総合のグローバル化への見通し",
        relation: "same-concept",
        targetSubjectId: "history-basic",
        conceptTags: ["グローバル化", "近代化", "大衆化"],
        regionTags: ["世界"]
      },
      {
        label: "公共の多文化共生",
        relation: "same-concept",
        targetSubjectId: "public",
        conceptTags: ["多文化共生", "社会", "人権"],
        regionTags: ["日本", "世界"]
      }
    ]
  },
  {
    id: "geography-basic-globalization-sustainable-supplement",
    curriculumNodeId: "geobasic-p1-c3-s6",
    subjectId: "geography-basic",
    type: "supplement-note",
    title: "グローバル化を一面的に見ない",
    body: "グローバル化は、世界を便利に結びつける一方で、地域によって影響が異なる。貿易で利益を得る地域もあれば、産業の空洞化や雇用不安に直面する地域もある。観光で地域経済が活性化する一方で、混雑や環境負荷が問題になることもある。地理では、世界全体の流れと地域ごとの具体的な影響を分けて考えることが大切である。",
    shortText: "グローバル化は地域によって異なる影響をもたらすため、一面的に判断しない。",
    order: 7,
    regionTags: ["世界", "日本"],
    conceptTags: ["グローバル化", "地域差", "格差", "環境問題", "持続可能性"],
    sourceTags: ["統計", "地図", "主題図"],
    skillTags: ["比較", "因果関係", "資料読解", "地域比較"],
    examTags: ["正誤問題注意", "現代社会との関連", "資料読解"]
  }
];
