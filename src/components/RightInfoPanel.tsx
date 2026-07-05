import { useMemo } from "react";
import { BookOpen, Link2, MapPin, Lightbulb, ExternalLink } from "lucide-react";
import { contents } from "../data/contents";

type Props = {
  sectionId: string | null;
  themeColor: string;
};

// この節と関連する他科目のヒントを収集
function useRelatedHints(sectionId: string | null) {
  return useMemo(() => {
    if (!sectionId) return [];
    const sectionContents = contents.filter((c) => c.curriculumNodeId === sectionId);
    const hints: { label: string; relation: string; targetSubjectId?: string }[] = [];
    const seen = new Set<string>();
    for (const item of sectionContents) {
      if (!item.relatedHints) continue;
      for (const hint of item.relatedHints) {
        const key = `${hint.targetSubjectId || "none"}:${hint.label}`;
        if (!seen.has(key)) {
          seen.add(key);
          hints.push(hint);
        }
      }
    }
    return hints;
  }, [sectionId]);
}

// 暗記対象の用語を収集
function useKeyTerms(sectionId: string | null) {
  return useMemo(() => {
    if (!sectionId) return [];
    return contents
      .filter((c) => c.curriculumNodeId === sectionId && c.isMemorizationTarget && c.frontText)
      .slice(0, 6);
  }, [sectionId]);
}

const subjectLabelMap: Record<string, string> = {
  "geography-basic": "地理総合",
  "geography-advanced": "地理探究",
  "history-basic": "歴史総合",
  "japanese-history-advanced": "日本史探究",
  "world-history-advanced": "世界史探究",
  public: "公共",
  ethics: "倫理",
  "politics-economics": "政治・経済",
};

const relationLabelMap: Record<string, string> = {
  "same-concept": "同じ概念",
  background: "背景",
  effect: "影響",
  reference: "参考",
};

export function RightInfoPanel({ sectionId, themeColor }: Props) {
  const relatedHints = useRelatedHints(sectionId);
  const keyTerms = useKeyTerms(sectionId);

  if (!sectionId) {
    return (
      <div style={{ color: "#aaa", textAlign: "center", marginTop: "60px", fontSize: "0.9rem" }}>
        <BookOpen size={32} style={{ opacity: 0.3, marginBottom: "12px" }} />
        <p>節を選ぶと<br />関連情報が表示されます</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* セクションタイトル */}
      <div style={{
        background: `linear-gradient(135deg, ${themeColor}18, ${themeColor}08)`,
        border: `1px solid ${themeColor}30`,
        borderRadius: "10px",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <BookOpen size={18} color={themeColor} />
        <span style={{ fontSize: "0.88rem", fontWeight: "bold", color: themeColor }}>
          関連情報パネル
        </span>
      </div>

      {/* 重要用語クイックリスト */}
      {keyTerms.length > 0 && (
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: "7px",
            marginBottom: "10px", color: "#444", fontSize: "0.85rem", fontWeight: "bold"
          }}>
            <Lightbulb size={15} color="#f59e0b" />
            この節の重要用語
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {keyTerms.map((item) => (
              <div key={item.id} style={{
                background: "#f8f9fa",
                border: "1px solid #e9ecef",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "0.83rem",
              }}>
                <div style={{ fontWeight: "bold", color: "#333", marginBottom: "2px" }}>
                  {item.frontText}
                </div>
                <div style={{ color: "#666", fontSize: "0.78rem", lineHeight: 1.4 }}>
                  {item.backText?.slice(0, 50)}{item.backText && item.backText.length > 50 ? "…" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 他科目との関連 */}
      {relatedHints.length > 0 && (
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: "7px",
            marginBottom: "10px", color: "#444", fontSize: "0.85rem", fontWeight: "bold"
          }}>
            <Link2 size={15} color="#6366f1" />
            他科目との関連
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {relatedHints.map((hint, i) => (
              <div key={i} style={{
                background: "#f5f3ff",
                border: "1px solid #ddd6fe",
                borderRadius: "8px",
                padding: "10px 12px",
                fontSize: "0.82rem",
              }}>
                <div style={{ fontWeight: "bold", color: "#4f46e5", marginBottom: "4px" }}>
                  {hint.targetSubjectId ? (subjectLabelMap[hint.targetSubjectId] ?? hint.targetSubjectId) : "他科目"}
                </div>
                <div style={{ color: "#555" }}>{hint.label}</div>
                <div style={{
                  display: "inline-block",
                  marginTop: "4px",
                  background: "#ede9fe",
                  color: "#7c3aed",
                  borderRadius: "4px",
                  padding: "1px 6px",
                  fontSize: "0.74rem"
                }}>
                  {relationLabelMap[hint.relation] ?? hint.relation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 地図・参考資料モックアップ */}
      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: "7px",
          marginBottom: "10px", color: "#444", fontSize: "0.85rem", fontWeight: "bold"
        }}>
          <MapPin size={15} color="#10b981" />
          参考資料・地図
        </div>
        <div style={{
          background: "#f0fdf4",
          border: "1px dashed #6ee7b7",
          borderRadius: "10px",
          padding: "20px 16px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "0.82rem"
        }}>
          <MapPin size={24} style={{ opacity: 0.3, marginBottom: "8px" }} color="#10b981" />
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            この節に関連する地図・<br />統計・参考画像が<br />ここに表示されます
          </p>
        </div>
      </div>

      {/* 外部リンクモックアップ */}
      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: "7px",
          marginBottom: "10px", color: "#444", fontSize: "0.85rem", fontWeight: "bold"
        }}>
          <ExternalLink size={15} color="#0ea5e9" />
          関連リンク
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {["文部科学省 学習指導要領", "国土地理院", "外務省 地理情報"].map((label) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "#f0f9ff",
              border: "1px solid #bae6fd",
              borderRadius: "8px",
              padding: "8px 12px",
              fontSize: "0.82rem",
              color: "#0369a1",
              opacity: 0.7,
              cursor: "default"
            }}>
              <ExternalLink size={12} />
              {label}
              <span style={{ marginLeft: "auto", fontSize: "0.72rem", color: "#94a3b8" }}>準備中</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
