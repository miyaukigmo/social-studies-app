import React from "react";
import { BookText, Wrench } from "lucide-react";

export type AppMode = "study" | "tools";

interface Props {
  activeMode: AppMode;
  onModeChange: (mode: AppMode) => void;
}

export const TopModeTabs: React.FC<Props> = ({ activeMode, onModeChange }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
      <button
        onClick={() => onModeChange("study")}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '8px 8px 0 0',
          border: 'none',
          backgroundColor: activeMode === "study" ? '#0056b3' : '#e0e0e0',
          color: activeMode === "study" ? '#fff' : '#666',
          flex: 1,
          transition: 'all 0.2s ease',
        }}
      >
        <BookText size={20} /> 学習ノート
      </button>
      <button
        onClick={() => onModeChange("tools")}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '8px 8px 0 0',
          border: 'none',
          backgroundColor: activeMode === "tools" ? '#2e8b57' : '#e0e0e0',
          color: activeMode === "tools" ? '#fff' : '#666',
          flex: 1,
          transition: 'all 0.2s ease',
        }}
      >
        <Wrench size={20} /> 参考資料・ツール
      </button>
    </div>
  );
};
