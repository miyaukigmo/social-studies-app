import { useMemo } from "react";
import type { SubjectId } from "../types/curriculum";
import { curriculumNodes } from "../data/curriculumNodes";
import { CurriculumNodeItem } from "./CurriculumNodeItem";

type Props = {
  subjectId: SubjectId;
  activeSectionId?: string;
  onSectionSelect?: (id: string, title: string) => void;
};

export const CurriculumTree = ({ subjectId, activeSectionId, onSectionSelect }: Props) => {
  // 選択された科目の全ノードを取得
  const subjectNodes = useMemo(() => {
    return curriculumNodes.filter((node) => node.subjectId === subjectId);
  }, [subjectId]);

  if (subjectNodes.length === 0) {
    return <p>目次データがありません。</p>;
  }

  // ツリーを再帰的に構築する関数
  const buildTree = (parentId?: string): React.ReactNode => {
    // 親IDが一致するノードを取得し、order順にソート
    const children = subjectNodes
      .filter((node) => (parentId ? node.parentId === parentId : node.level === "subject"))
      .sort((a, b) => a.order - b.order);

    if (children.length === 0) return null;

    return children.map((node) => (
      <CurriculumNodeItem 
        key={node.id} 
        node={node}
        activeSectionId={activeSectionId}
        onSectionSelect={onSectionSelect}
      >
        {buildTree(node.id)}
      </CurriculumNodeItem>
    ));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {buildTree()}
    </div>
  );
};
