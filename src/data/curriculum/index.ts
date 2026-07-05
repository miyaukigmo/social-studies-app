import type { CurriculumNode } from "../../types/curriculum";

import { geographyBasicNodes } from "./geographyBasic";
import { geographyAdvancedNodes } from "./geographyAdvanced";
import { historyBasicNodes } from "./historyBasic";
import { worldHistoryAdvancedNodes } from "./worldHistoryAdvanced";
import { japaneseHistoryAdvancedNodes } from "./japaneseHistoryAdvanced";
import { publicNodes } from "./public";
import { ethicsNodes } from "./ethics";
import { politicsEconomicsNodes } from "./politicsEconomics";

export const curriculumNodes: CurriculumNode[] = [
  ...geographyBasicNodes,
  ...geographyAdvancedNodes,
  ...historyBasicNodes,
  ...worldHistoryAdvancedNodes,
  ...japaneseHistoryAdvancedNodes,
  ...publicNodes,
  ...ethicsNodes,
  ...politicsEconomicsNodes,
];
