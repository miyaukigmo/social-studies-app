import React, { useState, useMemo } from "react";
import { constitutionReferenceData } from "../data/references/constitution";
import { ConstitutionChapterList } from "./ConstitutionChapterList";
import { ConstitutionArticleList } from "./ConstitutionArticleList";
import { searchConstitution } from "../utils/constitutionSearch";
import { ConstitutionArticleCard } from "./ConstitutionArticleCard";
import type { ConstitutionDisplayMode } from "../types/constitution";
import { Search, X, BookOpen, FileText, LayoutList } from "lucide-react";

interface Props {
  onBack: () => void;
}

export const ConstitutionReference: React.FC<Props> = ({ onBack }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("preamble");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayMode, setDisplayMode] = useState<ConstitutionDisplayMode>("with-notes");

  const searchResults = useMemo(() => {
    return searchConstitution(constitutionReferenceData, searchQuery);
  }, [searchQuery]);

  const handleChapterSelect = (id: string) => {
    setSelectedChapterId(id);
    setSearchQuery(""); // 章を切り替えたら検索をクリア
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* ヘッダー部分 */}
      <div style={{ 
        padding: '16px 20px', 
        backgroundColor: '#fff', 
        borderBottom: '1px solid var(--border-color)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={onBack}
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ← ツール一覧に戻る
          </button>
          <h1 style={{ margin: 0, fontSize: '1.4rem', color: '#333' }}>
            {constitutionReferenceData.meta.title}
          </h1>
        </div>

          {/* 表示モード切り替えと検索バーのコンテナ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', width: '100%', justifyContent: 'flex-end' }}>
          {/* 表示モード切り替え */}
          <div style={{ display: 'flex', backgroundColor: '#f0f2f5', borderRadius: '8px', padding: '4px', overflowX: 'auto', maxWidth: '100%' }}>
            <button
              onClick={() => setDisplayMode("text-only")}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                background: displayMode === "text-only" ? '#fff' : 'transparent',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: displayMode === "text-only" ? '#2b6cb0' : '#666',
                boxShadow: displayMode === "text-only" ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                fontWeight: displayMode === "text-only" ? 'bold' : 'normal',
                whiteSpace: 'nowrap'
              }}
            >
              <FileText size={16} /> 条文のみ
            </button>
            <button
              onClick={() => setDisplayMode("with-notes")}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                background: displayMode === "with-notes" ? '#fff' : 'transparent',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: displayMode === "with-notes" ? '#2b6cb0' : '#666',
                boxShadow: displayMode === "with-notes" ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                fontWeight: displayMode === "with-notes" ? 'bold' : 'normal',
                whiteSpace: 'nowrap'
              }}
            >
              <LayoutList size={16} /> 条文＋メモ
            </button>
            <button
              onClick={() => setDisplayMode("notes-focused")}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                background: displayMode === "notes-focused" ? '#fff' : 'transparent',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: displayMode === "notes-focused" ? '#2b6cb0' : '#666',
                boxShadow: displayMode === "notes-focused" ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                fontWeight: displayMode === "notes-focused" ? 'bold' : 'normal',
                whiteSpace: 'nowrap'
              }}
            >
              <BookOpen size={16} /> メモ中心
            </button>
          </div>

          {/* 検索バー */}
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f2f5', borderRadius: '24px', padding: '4px 16px', flex: '1 1 300px' }}>
            <Search size={18} color="#666" style={{ marginRight: '8px', flexShrink: 0 }} />
            <input 
              type="text" 
              placeholder="条文・キーワードを検索" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '1rem',
                padding: '8px 0',
              }}
            />
            {searchQuery && (
              <button 
                onClick={handleClearSearch}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  padding: '4px'
                }}
                title="クリア"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2ペインレイアウト */}
      <div className="two-pane-layout" style={{ flexGrow: 1, overflow: 'hidden' }}>
        {/* 左ペイン：章一覧 */}
        <div className="left-pane" style={{ 
          width: '280px', 
          backgroundColor: '#fafafa', 
          overflowY: 'auto',
          padding: '16px 0'
        }}>
          <ConstitutionChapterList 
            chapters={constitutionReferenceData.chapters} 
            selectedChapterId={searchQuery ? "" : selectedChapterId}
            onChapterSelect={handleChapterSelect}
          />
        </div>

        {/* 右ペイン：条文一覧または検索結果 */}
        <div className="right-pane scrollable-pane" style={{ 
          backgroundColor: '#f0f2f5', 
          padding: '24px 40px'
        }}>
          {searchQuery ? (
            <div>
              <div style={{ 
                marginBottom: '20px', 
                borderBottom: '1px solid var(--border-color)', 
                paddingBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <h2 style={{ margin: '0', fontSize: '1.4rem', color: 'var(--text-color)' }}>
                  「{searchQuery}」の検索結果：{searchResults.length}件
                </h2>
                <button
                  onClick={handleClearSearch}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2b6cb0',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '0.95rem'
                  }}
                >
                  検索をクリア
                </button>
              </div>
              
              {searchResults.length === 0 ? (
                <div style={{ 
                  padding: '40px', 
                  textAlign: 'center', 
                  backgroundColor: '#f9f8f6', 
                  borderRadius: '8px', 
                  border: '1px dashed #ccc',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 'bold' }}>検索結果はありません。</p>
                  <p>別のキーワードや条番号で検索してください。</p>
                  <p>例：第9条、生存権、表現の自由、国会</p>
                </div>
              ) : (
                <div>
                  {searchResults.map((result) => {
                    const note = constitutionReferenceData.notes.find(n => n.targetId === result.id);
                    return (
                      <ConstitutionArticleCard 
                        key={result.id} 
                        data={result.data} 
                        note={note} 
                        displayMode={displayMode}
                        searchQuery={searchQuery}
                        matchedFields={result.matchedFields}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <ConstitutionArticleList 
              data={constitutionReferenceData} 
              selectedChapterId={selectedChapterId} 
              displayMode={displayMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};
