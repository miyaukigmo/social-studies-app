import fs from 'fs';
import path from 'path';

const geoPath = path.join(process.cwd(), 'src', 'data', 'contentsGeographyBasic.ts');
const contentsPath = path.join(process.cwd(), 'src', 'data', 'contents.ts');

const newContents = `
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
`;

if (fs.existsSync(geoPath)) {
  let content = fs.readFileSync(geoPath, 'utf-8');
  content += "\\n" + newContents;
  fs.writeFileSync(geoPath, content, 'utf-8');
  console.log('Appended to contentsGeographyBasic.ts');
}

if (fs.existsSync(contentsPath)) {
  let content = fs.readFileSync(contentsPath, 'utf-8');
  
  // importにgeographyBasicMapReadingContentsを追加
  content = content.replace(
    /import \{ geographyBasicPositionContents, geographyBasicMapProjectionContents \} from "\.\/contentsGeographyBasic";/,
    'import { geographyBasicPositionContents, geographyBasicMapProjectionContents, geographyBasicMapReadingContents } from "./contentsGeographyBasic";'
  );
  
  // contents配列にマージ
  content = content.replace(
    /  \.\.\.geographyBasicMapProjectionContents,\n\];/,
    '  ...geographyBasicMapProjectionContents,\n  ...geographyBasicMapReadingContents,\n];'
  );
  
  fs.writeFileSync(contentsPath, content, 'utf-8');
  console.log('Updated contents.ts');
}
