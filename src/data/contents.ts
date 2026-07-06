import type { ContentItem } from "../types/content";
import { ethicsYouthSelfFormationContents, ethicsYouthSelfFormationContentsPart2, ethicsYouthSelfFormationContentsPart3 } from "./contentsEthics";
import { historyBasicHistoryDoorChapter1Contents, historyBasicSourcesChapter2Part1Contents, historyBasicSourcesChapter2Part2Contents } from "./contentsHistoryBasic";
import { geographyBasicPositionContents, geographyBasicMapProjectionContents, geographyBasicMapReadingContents, geographyBasicGisContents, geographyBasicStateTerritoryContents, geographyBasicGlobalConnectionsContents } from "./contentsGeographyBasic";

export const contents: ContentItem[] = [
  ...ethicsYouthSelfFormationContents,
  ...ethicsYouthSelfFormationContentsPart2,
  ...ethicsYouthSelfFormationContentsPart3,
  ...historyBasicHistoryDoorChapter1Contents,
  ...historyBasicSourcesChapter2Part1Contents,
  ...historyBasicSourcesChapter2Part2Contents,
  ...geographyBasicPositionContents,
  ...geographyBasicMapProjectionContents,
  ...geographyBasicMapReadingContents,
  ...geographyBasicGisContents,
  ...geographyBasicStateTerritoryContents,
  ...geographyBasicGlobalConnectionsContents,
];
