import * as fs from 'fs';
import * as path from 'path';

// 事前定義された世界約190カ国のデータセット（ISO numeric code, 日本語名, 地域, CCA3）
const staticCountries = [
  // 東アジア
  { id: "392", names: ["日本", "にほん", "にっぽん"], region: "asia", cca3: "JPN" },
  { id: "156", names: ["中国", "中華人民共和国", "ちゅうごく"], region: "asia", cca3: "CHN" },
  { id: "410", names: ["韓国", "大韓民国", "かんこく"], region: "asia", cca3: "KOR" },
  { id: "408", names: ["北朝鮮", "朝鮮民主主義人民共和国", "きたちょうせん"], region: "asia", cca3: "PRK" },
  { id: "158", names: ["台湾", "中華民国", "たいわん"], region: "asia", cca3: "TWN" },
  { id: "496", names: ["モンゴル", "モンゴル国"], region: "asia", cca3: "MNG" },
  // 東南アジア
  { id: "360", names: ["インドネシア", "インドネシア共和国"], region: "asia", cca3: "IDN" },
  { id: "764", names: ["タイ", "タイ王国"], region: "asia", cca3: "THA" },
  { id: "704", names: ["ベトナム", "ベトナム社会主義共和国"], region: "asia", cca3: "VNM" },
  { id: "608", names: ["フィリピン", "フィリピン共和国"], region: "asia", cca3: "PHL" },
  { id: "458", names: ["マレーシア"], region: "asia", cca3: "MYS" },
  { id: "104", names: ["ミャンマー", "ミャンマー連邦共和国"], region: "asia", cca3: "MMR" },
  { id: "702", names: ["シンガポール", "シンガポール共和国"], region: "asia", cca3: "SGP" },
  { id: "116", names: ["カンボジア", "カンボジア王国"], region: "asia", cca3: "KHM" },
  { id: "418", names: ["ラオス", "ラオス人民民主共和国"], region: "asia", cca3: "LAO" },
  { id: "096", names: ["ブルネイ", "ブルネイ・ダルサラーム国"], region: "asia", cca3: "BRN" },
  // 南・中央・西アジア
  { id: "356", names: ["インド", "インド共和国"], region: "asia", cca3: "IND" },
  { id: "586", names: ["パキスタン", "パキスタン・イスラム共和国"], region: "asia", cca3: "PAK" },
  { id: "050", names: ["バングラデシュ", "バングラデシュ人民共和国"], region: "asia", cca3: "BGD" },
  { id: "144", names: ["スリランカ", "スリランカ民主社会主義共和国"], region: "asia", cca3: "LKA" },
  { id: "524", names: ["ネパール", "ネパール連邦民主共和国"], region: "asia", cca3: "NPL" },
  { id: "364", names: ["イラン", "イラン・イスラム共和国"], region: "asia", cca3: "IRN" },
  { id: "368", names: ["イラク", "イラク共和国"], region: "asia", cca3: "IRQ" },
  { id: "682", names: ["サウジアラビア", "サウジアラビア王国"], region: "asia", cca3: "SAU" },
  { id: "792", names: ["トルコ", "トルコ共和国", "テュルキエ"], region: "asia", cca3: "TUR" },
  { id: "376", names: ["イスラエル", "イスラエル国"], region: "asia", cca3: "ISR" },
  { id: "760", names: ["シリア", "シリア・アラブ共和国"], region: "asia", cca3: "SYR" },
  { id: "422", names: ["レバノン", "レバノン共和国"], region: "asia", cca3: "LBN" },
  { id: "400", names: ["ヨルダン", "ヨルダン・ハシミテ王国"], region: "asia", cca3: "JOR" },
  { id: "004", names: ["アフガニスタン", "アフガニスタン・イスラム・エミレート"], region: "asia", cca3: "AFG" },
  { id: "784", names: ["アラブ首長国連邦", "UAE"], region: "asia", cca3: "ARE" },
  { id: "634", names: ["カタール", "カタール国"], region: "asia", cca3: "QAT" },
  { id: "414", names: ["クウェート", "クウェート国"], region: "asia", cca3: "KWT" },
  { id: "398", names: ["カザフスタン", "カザフスタン共和国"], region: "asia", cca3: "KAZ" },
  { id: "860", names: ["ウズベキスタン", "ウズベキスタン共和国"], region: "asia", cca3: "UZB" },
  // ヨーロッパ
  { id: "826", names: ["イギリス", "グレートブリテン及び北アイルランド連合王国", "英国", "いぎりす"], region: "europe", cca3: "GBR" },
  { id: "250", names: ["フランス", "フランス共和国", "ふらんす"], region: "europe", cca3: "FRA" },
  { id: "276", names: ["ドイツ", "ドイツ連邦共和国", "どいつ"], region: "europe", cca3: "DEU" },
  { id: "380", names: ["イタリア", "イタリア共和国", "いたりあ"], region: "europe", cca3: "ITA" },
  { id: "724", names: ["スペイン", "スペイン王国", "すぺいん"], region: "europe", cca3: "ESP" },
  { id: "620", names: ["ポルトガル", "ポルトガル共和国"], region: "europe", cca3: "PRT" },
  { id: "528", names: ["オランダ", "オランダ王国"], region: "europe", cca3: "NLD" },
  { id: "056", names: ["ベルギー", "ベルギー王国"], region: "europe", cca3: "BEL" },
  { id: "756", names: ["スイス", "スイス連邦"], region: "europe", cca3: "CHE" },
  { id: "040", names: ["オーストリア", "オーストリア共和国"], region: "europe", cca3: "AUT" },
  { id: "752", names: ["スウェーデン", "スウェーデン王国"], region: "europe", cca3: "SWE" },
  { id: "578", names: ["ノルウェー", "ノルウェー王国"], region: "europe", cca3: "NOR" },
  { id: "246", names: ["フィンランド", "フィンランド共和国"], region: "europe", cca3: "FIN" },
  { id: "208", names: ["デンマーク", "デンマーク王国"], region: "europe", cca3: "DNK" },
  { id: "372", names: ["アイルランド", "アイルランド共和国"], region: "europe", cca3: "IRL" },
  { id: "352", names: ["アイスランド", "アイスランド共和国"], region: "europe", cca3: "ISL" },
  { id: "643", names: ["ロシア", "ロシア連邦", "ろしあ"], region: "europe", cca3: "RUS" },
  { id: "804", names: ["ウクライナ"], region: "europe", cca3: "UKR" },
  { id: "616", names: ["ポーランド", "ポーランド共和国"], region: "europe", cca3: "POL" },
  { id: "300", names: ["ギリシャ", "ギリシャ共和国"], region: "europe", cca3: "GRC" },
  { id: "642", names: ["ルーマニア"], region: "europe", cca3: "ROU" },
  { id: "348", names: ["ハンガリー"], region: "europe", cca3: "HUN" },
  { id: "203", names: ["チェコ", "チェコ共和国"], region: "europe", cca3: "CZE" },
  { id: "703", names: ["スロバキア", "スロバキア共和国"], region: "europe", cca3: "SVK" },
  { id: "100", names: ["ブルガリア", "ブルガリア共和国"], region: "europe", cca3: "BGR" },
  { id: "191", names: ["クロアチア", "クロアチア共和国"], region: "europe", cca3: "HRV" },
  { id: "688", names: ["セルビア", "セルビア共和国"], region: "europe", cca3: "SRB" },
  // アフリカ
  { id: "818", names: ["エジプト", "エジプト・アラブ共和国"], region: "africa", cca3: "EGY" },
  { id: "710", names: ["南アフリカ", "南アフリカ共和国", "みなみあふりか"], region: "africa", cca3: "ZAF" },
  { id: "566", names: ["ナイジェリア", "ナイジェリア連邦共和国"], region: "africa", cca3: "NGA" },
  { id: "404", names: ["ケニア", "ケニア共和国"], region: "africa", cca3: "KEN" },
  { id: "231", names: ["エチオピア", "エチオピア連邦民主共和国"], region: "africa", cca3: "ETH" },
  { id: "504", names: ["モロッコ", "モロッコ王国"], region: "africa", cca3: "MAR" },
  { id: "012", names: ["アルジェリア", "アルジェリア民主人民共和国"], region: "africa", cca3: "DZA" },
  { id: "288", names: ["ガーナ", "ガーナ共和国"], region: "africa", cca3: "GHA" },
  { id: "384", names: ["コートジボワール", "コートジボワール共和国"], region: "africa", cca3: "CIV" },
  { id: "800", names: ["ウガンダ", "ウガンダ共和国"], region: "africa", cca3: "UGA" },
  { id: "834", names: ["タンザニア", "タンザニア連合共和国"], region: "africa", cca3: "TZA" },
  { id: "024", names: ["アンゴラ", "アンゴラ共和国"], region: "africa", cca3: "AGO" },
  { id: "736", names: ["スーダン", "スーダン共和国"], region: "africa", cca3: "SDN" },
  { id: "450", names: ["マダガスカル", "マダガスカル共和国"], region: "africa", cca3: "MDG" },
  { id: "120", names: ["カメルーン", "カメルーン共和国"], region: "africa", cca3: "CMR" },
  // 南北アメリカ
  { id: "840", names: ["アメリカ", "アメリカ合衆国", "米国", "あめりか"], region: "americas", cca3: "USA" },
  { id: "124", names: ["カナダ", "かなだ"], region: "americas", cca3: "CAN" },
  { id: "484", names: ["メキシコ", "メキシコ合衆国"], region: "americas", cca3: "MEX" },
  { id: "076", names: ["ブラジル", "ブラジル連邦共和国", "ぶらじる"], region: "americas", cca3: "BRA" },
  { id: "032", names: ["アルゼンチン", "アルゼンチン共和国"], region: "americas", cca3: "ARG" },
  { id: "152", names: ["チリ", "チリ共和国"], region: "americas", cca3: "CHL" },
  { id: "604", names: ["ペルー", "ペルー共和国"], region: "americas", cca3: "PER" },
  { id: "170", names: ["コロンビア", "コロンビア共和国"], region: "americas", cca3: "COL" },
  { id: "862", names: ["ベネズエラ", "ベネズエラ・ボリバル共和国"], region: "americas", cca3: "VEN" },
  { id: "192", names: ["キューバ", "キューバ共和国"], region: "americas", cca3: "CUB" },
  { id: "388", names: ["ジャマイカ"], region: "americas", cca3: "JAM" },
  { id: "332", names: ["ハイチ", "ハイチ共和国"], region: "americas", cca3: "HTI" },
  { id: "218", names: ["エクアドル", "エクアドル共和国"], region: "americas", cca3: "ECU" },
  { id: "068", names: ["ボリビア", "ボリビア多民族国"], region: "americas", cca3: "BOL" },
  { id: "600", names: ["パラグアイ", "パラグアイ共和国"], region: "americas", cca3: "PRY" },
  { id: "858", names: ["ウルグアイ", "ウルグアイ東方共和国"], region: "americas", cca3: "URY" },
  // オセアニア
  { id: "036", names: ["オーストラリア", "オーストラリア連邦"], region: "oceania", cca3: "AUS" },
  { id: "554", names: ["ニュージーランド"], region: "oceania", cca3: "NZL" },
  { id: "598", names: ["パプアニューギニア", "パプアニューギニア独立国"], region: "oceania", cca3: "PNG" },
  { id: "242", names: ["フィジー", "フィジー共和国"], region: "oceania", cca3: "FJI" },
  { id: "090", names: ["ソロモン諸島"], region: "oceania", cca3: "SLB" },
];

const TAGS = {
  "G7": ["USA", "CAN", "GBR", "FRA", "DEU", "ITA", "JPN"],
  "G20": ["USA", "CAN", "GBR", "FRA", "DEU", "ITA", "JPN", "ARG", "AUS", "BRA", "CHN", "IND", "IDN", "MEX", "KOR", "RUS", "SAU", "ZAF", "TUR"],
  "ASEAN": ["BRN", "KHM", "IDN", "LAO", "MYS", "MMR", "PHL", "SGP", "THA", "VNM"],
  "Lv1(超基礎)": ["JPN", "USA", "CHN", "KOR", "RUS", "GBR", "FRA", "DEU", "ITA", "CAN", "AUS", "BRA", "IND", "SAU", "EGY", "ZAF", "MEX", "ESP", "TUR", "ARG"]
};

function generate() {
  const results = staticCountries.map(country => {
    const tags: string[] = [];
    for (const [tagName, cca3List] of Object.entries(TAGS)) {
      if (cca3List.includes(country.cca3)) {
        tags.push(tagName);
      }
    }
    return {
      id: country.id,
      names: country.names,
      region: country.region,
      tags: tags
    };
  });

  const outputPath = path.join(process.cwd(), 'src', 'data', 'quizCountries.ts');
  const fileContent = `// 自動生成された国データ
export interface QuizCountryData {
  id: string; // ISO 3166-1 numeric 3-digit code
  names: string[]; // 1つ目がメインの表示名、2つ目以降は別名（タイピング判定用）
  region: string; // 'asia', 'europe', 'africa', 'americas', 'oceania', etc.
  tags: string[]; // 'G7', 'G20', 'ASEAN', 'Lv1(超基礎)' etc.
}

export const quizCountries: QuizCountryData[] = ${JSON.stringify(results, null, 2)};
`;

  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`Successfully wrote to ${outputPath} with ${results.length} countries.`);
}

generate();
