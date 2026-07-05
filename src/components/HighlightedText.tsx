import React from "react";

interface Props {
  text: string;
  query: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const HighlightedText: React.FC<Props> = ({ text, query }) => {
  if (!query || !query.trim()) return <>{text}</>;

  const normalizedQuery = query.trim();
  const parts = text.split(new RegExp(`(${escapeRegExp(normalizedQuery)})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === normalizedQuery.toLowerCase() ? (
          <mark 
            key={index} 
            style={{ 
              backgroundColor: '#ffeeba', 
              padding: '0 2px', 
              borderRadius: '2px',
              color: '#333'
            }}
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};
