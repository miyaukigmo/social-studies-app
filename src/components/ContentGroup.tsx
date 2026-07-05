import { useState } from "react";

type Props = {
  title: string;
  count: number;
  initiallyExpanded?: boolean;
  children: React.ReactNode;
};

export function ContentGroup({ title, count, initiallyExpanded = false, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  if (count === 0) return null;

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "12px 16px",
          backgroundColor: "#fff",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          cursor: "pointer",
          textAlign: "left",
          boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
          marginBottom: isExpanded ? "16px" : "0",
          transition: "background-color 0.2s",
          fontFamily: "inherit"
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
      >
        <span
          style={{
            marginRight: "10px",
            fontSize: "0.8rem",
            color: "var(--primary-color)",
            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            display: "inline-block",
            width: "16px",
            textAlign: "center"
          }}
        >
          ▶
        </span>
        <span style={{ fontSize: "1.1rem", fontWeight: "bold", color: "var(--text-color)" }}>
          {title}
        </span>
        <span style={{ marginLeft: "8px", fontSize: "0.9rem", color: "#888" }}>
          （{count}件）
        </span>
      </button>

      {isExpanded && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "8px" }}>
          {children}
        </div>
      )}
    </div>
  );
}
