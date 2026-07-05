import type { CurriculumNode } from "../types/curriculum";

type Props = {
  node: CurriculumNode;
  children?: React.ReactNode;
  activeSectionId?: string;
  onSectionSelect?: (id: string, title: string) => void;
};

export const CurriculumNodeItem = ({ node, children, activeSectionId, onSectionSelect }: Props) => {
  const isSection = node.level === "section";
  const isActive = isSection && node.id === activeSectionId;

  const getStyle = () => {
    switch (node.level) {
      case "subject":
        return { 
          fontSize: "1.5rem", 
          fontWeight: "bold", 
          borderBottom: "2px solid var(--border-color)", 
          paddingBottom: "10px", 
          marginBottom: "20px" 
        };
      case "part":
        return { 
          fontSize: "1.2rem", 
          fontWeight: "bold", 
          marginTop: "24px", 
          marginBottom: "12px", 
          color: "var(--primary-color, var(--text-color))",
          letterSpacing: "0.05em"
        };
      case "chapter":
        return { 
          fontSize: "1.05rem", 
          fontWeight: "600", 
          marginTop: "16px", 
          marginBottom: "8px", 
          marginLeft: "12px",
          color: "#444"
        };
      case "section":
        return { 
          fontSize: "0.95rem", 
          marginLeft: "24px", 
          marginBottom: "6px",
          padding: "8px 12px 8px 16px",
          backgroundColor: isActive ? "var(--primary-color)" : "#ffffff",
          color: isActive ? "white" : "#555",
          borderRadius: "6px",
          cursor: "pointer",
          border: isActive ? "1px solid var(--primary-color)" : "1px solid var(--border-color)",
          borderLeft: isActive ? "4px solid white" : "4px solid transparent",
          transition: "all 0.2s ease",
          boxShadow: isActive ? "0 2px 4px rgba(0,0,0,0.1)" : "none"
        };
      default:
        return {};
    }
  };

  const handleClick = () => {
    if (isSection && onSectionSelect) {
      onSectionSelect(node.id, node.title);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div 
        style={getStyle()} 
        className={isSection && !isActive ? "section-hover" : ""}
        onClick={handleClick}
      >
        {node.title}
      </div>
      {children && <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>}
    </div>
  );
};


