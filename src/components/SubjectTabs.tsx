import type { SubjectId } from '../types/curriculum';
import { subjects } from '../data/subjects';

type Props = {
  activeTab: SubjectId;
  onTabChange: (tab: SubjectId) => void;
};

// 科目ごとのカラーマッピング（仮）
const getColor = (colorKey?: string) => {
  switch (colorKey) {
    case 'geography': return '#2e8b57';
    case 'history': return '#a0522d';
    case 'worldHistory': return '#8b0000';
    case 'japaneseHistory': return '#000080';
    case 'civics': return '#20b2aa';
    case 'ethics': return '#4b0082';
    case 'politicsEconomics': return '#002266';
    default: return 'var(--text-color)';
  }
};

export const SubjectTabs = ({ activeTab, onTabChange }: Props) => {
  // order順にソートしてタブを表示
  const sortedSubjects = [...subjects].sort((a, b) => a.order - b.order);

  return (
    <nav className="tab-nav scrollable-tabs">
      {sortedSubjects.map((subject) => {
        const color = getColor(subject.colorKey);
        return (
          <button
            key={subject.id}
            className={`tab-button ${activeTab === subject.id ? 'active' : ''}`}
            style={{
              borderBottomColor: activeTab === subject.id ? color : 'transparent',
              color: activeTab === subject.id ? color : 'var(--text-color)'
            }}
            onClick={() => onTabChange(subject.id)}
          >
            {subject.shortTitle || subject.title}
          </button>
        );
      })}
    </nav>
  );
};
