import type { ConstitutionReferenceData } from "../../types/constitution";
import { constitutionReferenceData as generatedConstitutionReferenceData } from "./constitution.generated";
import { constitutionNotes } from "./constitutionNotes";
import { constitutionChapterNotes } from "./constitutionChapterNotes";

export const constitutionReferenceData: ConstitutionReferenceData = {
  ...generatedConstitutionReferenceData,
  notes: constitutionNotes,
  chapterNotes: constitutionChapterNotes,
};
