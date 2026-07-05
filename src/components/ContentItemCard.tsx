import type { ContentItem, ContentType } from "../types/content";

type Props = {
  item: ContentItem;
};

const getTypeLabel = (type: ContentType): string => {
  switch (type) {
    case "section-summary":
      return "節まとめ";
    case "term-card":
      return "用語カード";
    case "person-card":
      return "人物カード";
    case "event-card":
      return "事件カード";
    case "system-card":
      return "制度カード";
    case "thought-card":
      return "思想カード";
    case "flow-note":
      return "流れ・因果関係";
    case "comparison-note":
      return "比較メモ";
    case "timeline-note":
      return "年表メモ";
    case "map-note":
      return "地図メモ";
    case "supplement-note":
      return "補足メモ";
    default:
      return "その他";
  }
};

export function ContentItemCard({ item }: Props) {
  return (
    <div
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border-color)",
        borderRadius: "8px",
        padding: "16px 20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "0.75rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "var(--primary-color)",
          padding: "3px 10px",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      >
        {getTypeLabel(item.type)}
      </div>
      <h3 style={{ margin: "0 0 10px 0", color: "var(--text-color)", fontSize: "1.2rem" }}>
        {item.title}
      </h3>
      <div style={{ whiteSpace: "pre-wrap", color: "var(--text-color)", lineHeight: "1.7", fontSize: "0.95rem" }}>
        {item.body}
      </div>
    </div>
  );
}
