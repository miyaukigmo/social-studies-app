import React from "react";
import type { 
  ConstitutionChapter, 
  ConstitutionChapterNote, 
  ConstitutionArticle, 
  ConstitutionPreamble 
} from "../types/constitution";

interface Props {
  chapter: ConstitutionChapter;
  chapterNote?: ConstitutionChapterNote;
  articles: (ConstitutionArticle | ConstitutionPreamble)[];
}

export const ConstitutionChapterOverview: React.FC<Props> = ({ chapterNote, articles }) => {
  if (!chapterNote && articles.length === 0) return null;

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* 章の要点カード */}
      {chapterNote && (
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', color: '#2c5282', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
            この章の要点
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#2d3748', marginBottom: '16px' }}>
            {chapterNote.summary}
          </p>
          <ul style={{ paddingLeft: '20px', color: '#4a5568', lineHeight: '1.6', marginBottom: '16px' }}>
            {chapterNote.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          {chapterNote.keywords && chapterNote.keywords.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              {chapterNote.keywords.map(kw => (
                <span key={kw} style={{ 
                  backgroundColor: '#edf2f7', 
                  color: '#4a5568', 
                  padding: '4px 10px', 
                  borderRadius: '16px', 
                  fontSize: '0.85rem' 
                }}>
                  #{kw}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ミニ目次 */}
      {articles.length > 0 && (
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '16px 24px',
        }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '1rem', color: '#4a5568' }}>この章の条文</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {articles.map((article) => {
              const label = article.chapterId === "preamble" ? "前文" : `${(article as ConstitutionArticle).articleLabel} ${(article as ConstitutionArticle).caption || ""}`;
              const isImportant = chapterNote?.importantArticleIds.includes(article.id);
              
              return (
                <button
                  key={article.id}
                  onClick={() => {
                    const el = document.getElementById(article.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    padding: '8px 12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#2b6cb0',
                    fontSize: '0.95rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                    fontWeight: isImportant ? 'bold' : 'normal',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ebf8ff'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ 
                    display: 'inline-block', 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: isImportant ? '#ed8936' : '#a0aec0',
                    marginRight: '12px'
                  }}></span>
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
