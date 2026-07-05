import React from "react";
import type { ConstitutionChapter } from "../types/constitution";

interface Props {
  chapters: ConstitutionChapter[];
  selectedChapterId: string;
  onChapterSelect: (id: string) => void;
}

export const ConstitutionChapterList: React.FC<Props> = ({ chapters, selectedChapterId, onChapterSelect }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {chapters.map(chapter => (
        <button
          key={chapter.id}
          onClick={() => onChapterSelect(chapter.id)}
          style={{
            padding: '12px 16px',
            textAlign: 'left',
            backgroundColor: selectedChapterId === chapter.id ? '#eaf6ff' : 'transparent',
            border: 'none',
            borderLeft: selectedChapterId === chapter.id ? '4px solid #0056b3' : '4px solid transparent',
            cursor: 'pointer',
            fontSize: '1rem',
            color: selectedChapterId === chapter.id ? '#0056b3' : '#333',
            fontWeight: selectedChapterId === chapter.id ? 'bold' : 'normal',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            if (selectedChapterId !== chapter.id) e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
          onMouseOut={(e) => {
            if (selectedChapterId !== chapter.id) e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {chapter.title}
        </button>
      ))}
    </div>
  );
};
