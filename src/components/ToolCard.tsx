import React from "react";
import type { ToolItem } from "../types/tools";
import { FileText, Gamepad2, PenTool } from "lucide-react";

interface Props {
  item: ToolItem;
  onClick: (id: string) => void;
}

export const ToolCard: React.FC<Props> = ({ item, onClick }) => {
  const getIcon = (kind: string) => {
    switch (kind) {
      case "reference": return <FileText size={32} color="#555" />;
      case "quiz": return <Gamepad2 size={32} color="#555" />;
      default: return <PenTool size={32} color="#555" />;
    }
  };

  return (
    <div 
      onClick={() => onClick(item.id)}
      style={{
        backgroundColor: '#fff',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '20px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {getIcon(item.kind)}
        </div>
        <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#333' }}>{item.title}</h3>
      </div>
      <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>
        {item.description}
      </p>
    </div>
  );
};
