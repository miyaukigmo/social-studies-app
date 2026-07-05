import { useMemo } from "react";
import { contents } from "../data/contents";
import { curriculumNodes } from "../data/curriculumNodes";
import { subjects } from "../data/subjects";
import { ContentItemCard } from "./ContentItemCard";
import { ContentGroup } from "./ContentGroup";

type Props = {
  sectionId: string | null;
  sectionTitle?: string;
};

export function SectionDetail({ sectionId, sectionTitle }: Props) {
  const breadcrumbs = useMemo(() => {
    if (!sectionId) return [];

    const path: string[] = [];
    let currentId: string | undefined = sectionId;

    while (currentId) {
      const node = curriculumNodes.find(n => n.id === currentId);
      if (node) {
        path.unshift(node.title);
        if (node.level === "subject") {
          currentId = undefined; // subjectの上に辿る必要があればsubjectsを見るが、CurriculumNodeにsubjectレベルがある場合はここで止まる
        } else {
          currentId = node.parentId;
          if (!currentId && node.subjectId) {
            // 親IDがないがsubjectIdがある場合は、科目をパンくずに追加
            const subject = subjects.find(s => s.id === node.subjectId);
            if (subject) {
              path.unshift(subject.title);
            }
          }
        }
      } else {
        currentId = undefined;
      }
    }
    return path;
  }, [sectionId]);

  if (!sectionId) {
    return (
      <div style={{ padding: "20px", color: "var(--text-color)", textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>左側の目次から節を選んでください。</p>
      </div>
    );
  }

  const sectionContents = contents
    .filter((item) => item.curriculumNodeId === sectionId)
    .sort((a, b) => a.order - b.order);

  const summaryGroup = sectionContents.filter(c => c.type === "section-summary");
  const termGroup = sectionContents.filter(c => ["term-card", "person-card", "event-card", "system-card", "thought-card"].includes(c.type));
  const flowGroup = sectionContents.filter(c => ["flow-note", "timeline-note"].includes(c.type));
  const comparisonGroup = sectionContents.filter(c => c.type === "comparison-note");
  const mapGroup = sectionContents.filter(c => c.type === "map-note");
  const supplementGroup = sectionContents.filter(c => c.type === "supplement-note");
  const otherGroup = sectionContents.filter(c => !["section-summary", "term-card", "person-card", "event-card", "system-card", "thought-card", "flow-note", "timeline-note", "comparison-note", "map-note", "supplement-note"].includes(c.type));

  return (
    <div style={{ padding: "0 20px 40px" }}>
      {breadcrumbs.length > 0 && (
        <div style={{ 
          fontSize: "0.85rem", 
          color: "#666", 
          marginBottom: "16px",
          marginTop: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center"
        }}>
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {crumb}
              {index < breadcrumbs.length - 1 && <span style={{ margin: "0 8px", color: "#ccc" }}>/</span>}
            </span>
          ))}
        </div>
      )}

      {sectionTitle && (
        <h2 style={{ 
          color: "var(--text-color)", 
          borderBottom: "2px solid var(--primary-color)", 
          paddingBottom: "12px", 
          marginBottom: "24px",
          fontSize: "1.8rem"
        }}>
          {sectionTitle}
        </h2>
      )}

      {sectionContents.length === 0 ? (
        <div style={{ 
          backgroundColor: "#f9f8f6",
          border: "1px dashed #ccc",
          borderRadius: "8px",
          padding: "30px 20px",
          textAlign: "center",
          color: "#555"
        }}>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>この節のコンテンツはまだありません。</p>
          <p style={{ fontSize: "0.9rem", color: "#777" }}>今後、節まとめ・用語カード・流れメモなどを追加できます。</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ContentGroup title="概要" count={summaryGroup.length} initiallyExpanded={true}>
            {summaryGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>

          <ContentGroup title="重要用語" count={termGroup.length} initiallyExpanded={false}>
            {termGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>

          <ContentGroup title="流れ・因果関係" count={flowGroup.length} initiallyExpanded={true}>
            {flowGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>

          <ContentGroup title="比較メモ" count={comparisonGroup.length} initiallyExpanded={false}>
            {comparisonGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>

          <ContentGroup title="地図メモ" count={mapGroup.length} initiallyExpanded={false}>
            {mapGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>

          <ContentGroup title="補足メモ" count={supplementGroup.length} initiallyExpanded={false}>
            {supplementGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>

          <ContentGroup title="その他" count={otherGroup.length} initiallyExpanded={false}>
            {otherGroup.map(item => <ContentItemCard key={item.id} item={item} />)}
          </ContentGroup>
        </div>
      )}
    </div>
  );
}
