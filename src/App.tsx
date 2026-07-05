import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import './App.css';
import type { SubjectId } from './types/curriculum';
import { subjects } from './data/subjects';
import { SubjectTabs } from './components/SubjectTabs';
import { CurriculumTree } from './components/CurriculumTree';
import { SectionDetail } from './components/SectionDetail';
import { MapQuiz } from './components/MapQuiz';
import { TopModeTabs } from './components/TopModeTabs';
import type { AppMode } from './components/TopModeTabs';
import { ToolList } from './components/ToolList';
import { ConstitutionReference } from './components/ConstitutionReference';

const getThemeColor = (colorKey?: string) => {
  switch (colorKey) {
    case 'geography': return '#2e8b57';
    case 'history': return '#a0522d';
    case 'worldHistory': return '#8b0000';
    case 'japaneseHistory': return '#000080';
    case 'civics': return '#20b2aa';
    case 'ethics': return '#4b0082';
    case 'politicsEconomics': return '#002266';
    default: return '#0056b3';
  }
};

type ToolView = 'list' | 'constitution' | 'map-quiz';

function App() {
  const [appMode, setAppMode] = useState<AppMode>('study');
  const [toolView, setToolView] = useState<ToolView>('list');
  
  const [activeTab, setActiveTab] = useState<SubjectId>('geography-basic');
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeSectionTitle, setActiveSectionTitle] = useState<string>('');

  const activeSubject = subjects.find(s => s.id === activeTab);
  const themeColor = getThemeColor(activeSubject?.colorKey);

  const handleTabChange = (tab: SubjectId) => {
    setActiveTab(tab);
    // タブ（科目）が切り替わったら選択中の節をリセットする
    setActiveSectionId(null);
    setActiveSectionTitle('');
  };

  const handleSectionSelect = (id: string, title: string) => {
    setActiveSectionId(id);
    setActiveSectionTitle(title);
  };

  // 全画面表示が必要なツール（地図クイズなど）の表示
  if (appMode === 'tools' && toolView === 'map-quiz') {
    return <MapQuiz onBack={() => setToolView('list')} />;
  }

  return (
    <div 
      className="tab-container" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        '--primary-color': themeColor 
      } as React.CSSProperties}
    >
      <header style={{ 
        padding: '20px 20px 0 20px', 
        backgroundColor: 'var(--card-bg)', 
        borderBottom: '1px solid var(--border-color)', 
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={24} /> 社会科横断学習アプリ
          </h1>
        </div>
        
        {/* 学習ノートとツールの切り替えタブ */}
        <TopModeTabs activeMode={appMode} onModeChange={setAppMode} />
      </header>
      
      {appMode === 'study' ? (
        <>
          <div style={{ flexShrink: 0 }}>
            <SubjectTabs activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
          
          <main className="tab-content container two-pane-layout" style={{ flexGrow: 1, overflow: 'hidden', padding: 0 }}>
            <div className="left-pane scrollable-pane" style={{ padding: '20px' }}>
              <CurriculumTree 
                subjectId={activeTab} 
                activeSectionId={activeSectionId || undefined}
                onSectionSelect={handleSectionSelect}
              />
            </div>
            <div className="right-pane scrollable-pane" style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
              <SectionDetail sectionId={activeSectionId} sectionTitle={activeSectionTitle} />
            </div>
          </main>
        </>
      ) : (
        <main style={{ flexGrow: 1, overflow: 'auto', backgroundColor: '#f0f2f5' }}>
          {toolView === 'list' && (
            <ToolList onToolSelect={(id) => setToolView(id as ToolView)} />
          )}
          {toolView === 'constitution' && (
            <ConstitutionReference onBack={() => setToolView('list')} />
          )}
        </main>
      )}
    </div>
  );
}

export default App;
