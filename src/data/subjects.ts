import type { Subject } from "../types/curriculum";

export const subjects: Subject[] = [
  {
    id: "geography-basic",
    title: "地理総合",
    order: 1,
    colorKey: "geography",
  },
  {
    id: "geography-advanced",
    title: "地理探究",
    order: 2,
    colorKey: "geography",
  },
  {
    id: "history-basic",
    title: "歴史総合",
    order: 3,
    colorKey: "history",
  },
  {
    id: "world-history-advanced",
    title: "世界史探究",
    order: 4,
    colorKey: "worldHistory",
  },
  {
    id: "japanese-history-advanced",
    title: "日本史探究",
    order: 5,
    colorKey: "japaneseHistory",
  },
  {
    id: "public",
    title: "公共",
    order: 6,
    colorKey: "civics",
  },
  {
    id: "ethics",
    title: "倫理",
    order: 7,
    colorKey: "ethics",
  },
  {
    id: "politics-economics",
    title: "政治・経済",
    order: 8,
    colorKey: "politicsEconomics",
  },
];
