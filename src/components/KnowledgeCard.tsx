import React from 'react';
import type { KnowledgeCard as KnowledgeCardType } from '../types/knowledge';
import { BookOpen, MapPin, Clock, Tag } from 'lucide-react';

type Props = {
  card: KnowledgeCardType;
};

const getSubjectColor = (subject: string) => {
  switch (subject) {
    case 'geography': return 'var(--color-geography)';
    case 'worldHistory': return 'var(--color-world-history)';
    case 'japaneseHistory': return 'var(--color-japanese-history)';
    case 'ethics': return 'var(--color-ethics)';
    case 'politicsEconomics': return 'var(--color-politics-economics)';
    case 'crossTheme': return 'var(--color-cross-theme)';
    default: return '#333';
  }
};

export const KnowledgeCard: React.FC<Props> = ({ card }) => {
  const color = getSubjectColor(card.subject);

  return (
    <div className="knowledge-card" style={{ borderColor: color }}>
      <div className="card-header" style={{ backgroundColor: color }}>
        <span className="course-label">{card.courseLabel || '横断テーマ'}</span>
        <h3 className="card-title">{card.title}</h3>
      </div>
      
      <div className="card-meta">
        {card.period && (
          <span className="meta-item"><Clock size={14} /> {card.period}</span>
        )}
        {card.region && (
          <span className="meta-item"><MapPin size={14} /> {card.region}</span>
        )}
      </div>

      <div className="card-body">
        <p className="summary">{card.summary}</p>
        
        <div className="exam-point">
          <h4 className="section-title"><BookOpen size={16} /> 重要ポイント</h4>
          <p>{card.examPoint}</p>
        </div>

        {card.whyItMatters && (
          <div className="why-it-matters">
            <h4 className="section-title">現代的意義・つながり</h4>
            <p>{card.whyItMatters}</p>
          </div>
        )}
      </div>

      {card.tags && card.tags.length > 0 && (
        <div className="card-footer">
          <Tag size={14} />
          {card.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};
