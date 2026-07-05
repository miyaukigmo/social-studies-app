import React from "react";
import { toolItems } from "../data/tools";
import { ToolCard } from "./ToolCard";

interface Props {
  onToolSelect: (id: string) => void;
}

export const ToolList: React.FC<Props> = ({ onToolSelect }) => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', borderBottom: '2px solid #2e8b57', paddingBottom: '10px' }}>
          参考資料・ツール
        </h2>
        <p style={{ color: '#666', marginTop: '10px' }}>
          学習をサポートする横断的な資料やミニツールです。
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {toolItems.map(item => (
          <ToolCard 
            key={item.id} 
            item={item} 
            onClick={onToolSelect} 
          />
        ))}
      </div>
    </div>
  );
};
