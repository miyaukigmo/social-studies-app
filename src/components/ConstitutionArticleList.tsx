import React from "react";
import type { ConstitutionReferenceData, ConstitutionDisplayMode } from "../types/constitution";
import { ConstitutionArticleCard } from "./ConstitutionArticleCard";
import { ConstitutionChapterOverview } from "./ConstitutionChapterOverview";

interface Props {
  data: ConstitutionReferenceData;
  selectedChapterId: string;
  displayMode: ConstitutionDisplayMode;
}

export const ConstitutionArticleList: React.FC<Props> = ({ data, selectedChapterId, displayMode }) => {
  // 選択された章が前文かどうか
  const isPreamble = selectedChapterId === "preamble";

  // 該当する条文データをフィルタリング
  const articles = isPreamble 
    ? [data.preamble] 
    : data.articles.filter(a => a.chapterId === selectedChapterId);

  // 章の情報を取得
  const chapterInfo = data.chapters.find(c => c.id === selectedChapterId);
  const chapterNote = data.chapterNotes?.find(n => n.chapterId === selectedChapterId);

  return (
    <div>
      <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.6rem', color: 'var(--text-color)' }}>
          {chapterInfo?.title}
        </h2>
        {chapterInfo?.description && (
          <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>
            {chapterInfo.description}
          </p>
        )}
      </div>

      {chapterInfo && (
        <ConstitutionChapterOverview 
          chapter={chapterInfo} 
          chapterNote={chapterNote} 
          articles={articles} 
        />
      )}

      {articles.length === 0 ? (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#f9f8f6', 
          borderRadius: '8px', 
          border: '1px dashed #ccc',
          color: '#666'
        }}>
          この章の条文データはまだ投入されていません。
        </div>
      ) : (
        <div>
          {articles.map(article => {
            // この条文に関連するメモを探す
            const note = data.notes.find(n => n.targetId === article.id);
            return (
              <ConstitutionArticleCard 
                key={article.id} 
                data={article} 
                note={note} 
                displayMode={displayMode}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
