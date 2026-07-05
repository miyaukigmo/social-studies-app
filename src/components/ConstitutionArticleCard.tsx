import React, { useState } from "react";
import type { ConstitutionArticle, ConstitutionPreamble, ConstitutionArticleNote, ConstitutionDisplayMode } from "../types/constitution";
import { StickyNote, ChevronDown, ChevronRight, Info } from "lucide-react";
import { HighlightedText } from "./HighlightedText";

interface Props {
  data: ConstitutionArticle | ConstitutionPreamble;
  note?: ConstitutionArticleNote;
  displayMode?: ConstitutionDisplayMode;
  searchQuery?: string;
  matchedFields?: string[];
}

const matchedFieldLabels: Record<string, string> = {
  articleNumber: "条番号",
  articleLabel: "条番号",
  caption: "見出し",
  articleText: "条文本文",
  noteSummary: "学習メモ",
  noteMemo: "補足メモ",
  noteKeywords: "キーワード",
  chapter: "章全体",
  chapterTitle: "章タイトル",
  chapterDescription: "章説明",
  text: "本文",
  note: "学習メモ全体"
};

export const ConstitutionArticleCard: React.FC<Props> = ({ 
  data, 
  note, 
  displayMode = "with-notes", 
  searchQuery = "",
  matchedFields = [] 
}) => {
  const [isNoteExpanded, setIsNoteExpanded] = useState(!!searchQuery);
  const [isTextExpanded, setIsTextExpanded] = useState(displayMode !== "notes-focused");

  const isPreamble = (d: ConstitutionArticle | ConstitutionPreamble): d is ConstitutionPreamble => {
    return d.chapterId === "preamble";
  };

  const title = isPreamble(data) ? data.title : `${data.articleLabel} ${data.caption || ""}`;

  // ヒット理由のラベル生成
  const hitLabels = matchedFields
    .map(f => matchedFieldLabels[f] || f)
    .filter((v, i, a) => a.indexOf(v) === i); // 重複排除

  return (
    <div id={data.id} style={{
      backgroundColor: '#fff',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      scrollMarginTop: '20px'
    }}>
      {hitLabels.length > 0 && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: '#ebf8ff',
          color: '#2b6cb0',
          fontSize: '0.85rem',
          padding: '4px 10px',
          borderRadius: '16px',
          marginBottom: '12px',
          fontWeight: 'bold'
        }}>
          <Info size={14} />
          ヒット：{hitLabels.join(" / ")}
        </div>
      )}

      <h3 style={{ margin: '0 0 16px 0', fontSize: '1.4rem', color: 'var(--text-color)', borderBottom: '2px solid #2e8b57', paddingBottom: '8px' }}>
        <HighlightedText text={title} query={searchQuery} />
      </h3>

      {/* 条文本文の表示領域 */}
      {(displayMode === "text-only" || displayMode === "with-notes" || isTextExpanded) ? (
        <div style={{ 
          fontFamily: '"Yu Mincho", "Noto Serif JP", serif', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          color: '#333',
          marginBottom: '24px'
        }}>
          {data.paragraphs.map((p, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              {p.paragraphNumber ? `${p.paragraphNumber}　` : ""}
              <HighlightedText text={p.text} query={searchQuery} />
              {p.items && p.items.map((item, iIndex) => (
                <div key={iIndex} style={{ marginLeft: '1em' }}>
                  {item.itemLabel} <HighlightedText text={item.text} query={searchQuery} />
                </div>
              ))}
            </div>
          ))}
          {displayMode === "notes-focused" && (
            <button 
              onClick={() => setIsTextExpanded(false)}
              style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem', marginTop: '8px' }}
            >
              ▲ 本文を折りたたむ
            </button>
          )}
        </div>
      ) : (
        <div style={{ marginBottom: '16px' }}>
          <button 
            onClick={() => setIsTextExpanded(true)}
            style={{ 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '4px',
              color: '#4a5568', 
              cursor: 'pointer', 
              fontSize: '0.9rem', 
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <ChevronRight size={16} /> 条文本文を表示
          </button>
        </div>
      )}

      {/* 学習メモの表示領域 */}
      {note && displayMode !== "text-only" && (
        <div style={{
          backgroundColor: '#f9f8f6',
          border: '1px solid #e0dcd3',
          borderLeft: '4px solid #f0ad4e',
          borderRadius: '4px',
          padding: '16px'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#555', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <StickyNote size={18} /> 学習メモ
          </h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#333', lineHeight: '1.6' }}>
            <HighlightedText text={note.summary} query={searchQuery} />
          </p>

          <button
            onClick={() => setIsNoteExpanded(!isNoteExpanded)}
            style={{
              background: 'none',
              border: 'none',
              color: '#0056b3',
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 0',
              marginBottom: isNoteExpanded ? '12px' : '0'
            }}
          >
            {isNoteExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {isNoteExpanded ? '閉じる' : '詳しく見る'}
          </button>

          {isNoteExpanded && (
            <div>
              {note.memo && (
                <div style={{ 
                  margin: '0 0 16px 0', 
                  padding: '12px', 
                  backgroundColor: '#fff', 
                  borderLeft: '3px solid #ccc',
                  fontSize: '0.9rem', 
                  color: '#555', 
                  lineHeight: '1.6' 
                }}>
                  <HighlightedText text={note.memo} query={searchQuery} />
                </div>
              )}
              
              {note.keywords && note.keywords.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#777', marginBottom: '4px' }}>キーワード:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {note.keywords.map(kw => (
                      <span key={kw} style={{ 
                        backgroundColor: '#eaf6ff', 
                        color: '#0056b3', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.85rem' 
                      }}>
                        <HighlightedText text={kw} query={searchQuery} />
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
