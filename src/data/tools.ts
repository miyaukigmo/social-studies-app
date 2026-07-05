import type { ToolItem } from "../types/tools";

export const toolItems: ToolItem[] = [
  {
    id: "constitution",
    title: "憲法全文",
    description: "日本国憲法の全文を章・条文ごとに確認するための資料です。",
    kind: "reference",
  },
  {
    id: "map-quiz",
    title: "地図クイズ",
    description: "国名・首都・位置などを地図で確認するためのクイズツールです。",
    kind: "quiz",
  },
];
