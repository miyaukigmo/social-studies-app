export type ToolKind = "reference" | "quiz" | "tool";

export type ToolItem = {
  id: string;
  title: string;
  description: string;
  kind: ToolKind;
};
