import type { CountryData } from "../types/knowledge";

export const sampleCountries: Record<string, CountryData> = {
  GBR: {
    id: "GBR",
    name: "イギリス (グレートブリテン及び北アイルランド連合王国)",
    capital: "ロンドン",
    region: "ヨーロッパ",
    description: "産業革命の発祥地。かつては「太陽の沈まない国」と呼ばれた大英帝国を築いた。"
  },
  FRA: {
    id: "FRA",
    name: "フランス共和国",
    capital: "パリ",
    region: "ヨーロッパ",
    description: "フランス革命を通じて近代市民社会のモデルを提示した。農業大国でもある。"
  },
  DEU: {
    id: "DEU",
    name: "ドイツ連邦共和国",
    capital: "ベルリン",
    region: "ヨーロッパ",
    description: "ヨーロッパ最大の経済大国。EU（欧州連合）の中心的な役割を担う。"
  },
  CHN: {
    id: "CHN",
    name: "中華人民共和国",
    capital: "北京",
    region: "東アジア",
    description: "世界最大の人口（近年インドと拮抗）を抱え、急速な経済成長を遂げた社会主義国家。"
  },
  JPN: {
    id: "JPN",
    name: "日本国",
    capital: "東京",
    region: "東アジア",
    description: "島国であり、四季に恵まれる。明治維新以降、非西洋圏でいち早く近代化を達成した。"
  },
  USA: {
    id: "USA",
    name: "アメリカ合衆国",
    capital: "ワシントンD.C.",
    region: "北アメリカ",
    description: "世界最大の経済規模と軍事力を持つ超大国。多様な民族や文化が混在する。"
  }
};
