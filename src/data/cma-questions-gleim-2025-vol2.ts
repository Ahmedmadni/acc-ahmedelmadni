import { CMA_TOPICS, type CmaStudyUnit } from "@/data/cma-topics";
import type { CmaLocalQuestion } from "@/data/cma-question-bank";
import { hasCompleteArabic } from "@/data/cma-questions-gleim-2025-vol1";
import unit11 from "@/data/cma-gleim-2025-vol2-unit-11.json";
import unit12 from "@/data/cma-gleim-2025-vol2-unit-12.json";
import unit13 from "@/data/cma-gleim-2025-vol2-unit-13.json";
import unit14 from "@/data/cma-gleim-2025-vol2-unit-14.json";
import unit15 from "@/data/cma-gleim-2025-vol2-unit-15.json";
import unit16 from "@/data/cma-gleim-2025-vol2-unit-16.json";
import unit17 from "@/data/cma-gleim-2025-vol2-unit-17.json";
import unit18 from "@/data/cma-gleim-2025-vol2-unit-18.json";
import unit19 from "@/data/cma-gleim-2025-vol2-unit-19.json";
import unit20 from "@/data/cma-gleim-2025-vol2-unit-20.json";

interface SourceRecord {
  unit: number;
  section: number;
  number: number;
  page: number;
  topicId: string;
  stem: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  answerStatus: string;
  sourceTextStatus?: "reconstructed" | "table-reflowed";
  /** A complete, source-specific Arabic draft; never replace the English original. */
  stemAr?: string;
  choicesAr?: string[];
  explanationAr?: string;
}

const records: SourceRecord[] = [
  ...unit11,
  ...unit12,
  ...unit13,
  ...unit14,
  ...unit15,
  ...unit16,
  ...unit17,
  ...unit18,
  ...unit19,
  ...unit20,
];
const topics = new Map(CMA_TOPICS.map((topic) => [topic.id, topic]));

/** Source PDF page layout must be reviewed before trusting flattened tables.
 * These records remain English-first and are not automatically translated.
 */
const pendingSourceLayouts = new Set([
  "12.1.8", "12.1.9", "12.1.13", "12.1.14", "12.1.28",
  "12.2.3", "12.2.4", "12.2.23",
  "12.3.8", "12.3.10", "12.3.23", "12.3.24",
  "12.3.27", "12.3.28", "12.3.29", "12.3.32",
  "12.3.34", "12.3.35", "12.3.36",
  // Unit 14 §6 Q31 has broken option boundaries after PDF extraction.
  "14.6.31",
]);

/** An ambiguous required-whole-unit rounding outcome should not earn a score
 * until the source answer rationale and rounding convention are verified.
 * This uses the existing source-review exclusion flag for compatibility with
 * all scored quiz entry points; the original imported record is unchanged.
 */
const pendingAnswerRoundingReviews = new Set(["14.2.23"]);

/** Source §6 Q21 requests rounded Year 2 EBIT, but the source solution
 * reports $462,000 after rounding while the keyed option is $461,800.
 * Keep the exact original publisher record and block graded use until checked.
 * The sourceLayoutReview flag is the shared compatibility safety gate.
 */
const pendingAnswerConsistencyReviews = new Set(["14.6.21"]);

/** §5 Q10 is a follow-up to Montero's preceding case: its isolated stem
 * contains neither the prior cash collections nor the cash expense schedule.
 * Do not grade it as an independent MCQ until the missing context is supplied.
 * The imported publisher question and original answer are not modified.
 */
const pendingStandaloneContextReviews = new Set(["14.5.10"]);

/** Source-language items retain their English text while Arabic translation is reviewed. */
export const CMA_GLEIM_2025_VOL2_QUESTIONS: CmaLocalQuestion[] = records.map((item) => {
  const topic = topics.get(item.topicId);
  const hasArabic = hasCompleteArabic(item);
  if (!topic || topic.studyUnit !== item.unit)
    throw new Error(`Invalid Gleim 2025 question: SU ${item.unit}.${item.section} Q${item.number}`);
  return {
    id: `cma-gleim-2025-vol2-su${item.unit}-s${item.section}-q${String(item.number).padStart(3, "0")}`,
    track: "CMA",
    studyUnit: item.unit as CmaStudyUnit,
    topicId: item.topicId,
    topic: topic.titleEn,
    examDomain: `Part 1 — Study Unit ${item.unit}`,
    difficulty: "intermediate",
    reference: `Gleim CMA Part 1, 2025 MCQ Bank Vol. 2, SU ${item.unit} §${item.section}, Q${item.number}, p. ${item.page}`,
    question: { ar: hasArabic ? item.stemAr! : item.stem, en: item.stem },
    choices: { ar: hasArabic ? item.choicesAr! : item.choices, en: item.choices },
    answerIndex: item.answerIndex,
    explanation: { ar: hasArabic ? item.explanationAr! : item.explanation, en: item.explanation },
    sourceLanguage: hasArabic ? undefined : "en",
    sourcePage: item.page,
    answerStatus: item.answerStatus === "inferred" ? "inferred" : "source",
    sourceTextStatus: item.sourceTextStatus,
    sourceLayoutReview: item.sourceTextStatus === "table-reflowed" || item.sourceTextStatus === "reconstructed" || pendingSourceLayouts.has(`${item.unit}.${item.section}.${item.number}`) || pendingAnswerRoundingReviews.has(`${item.unit}.${item.section}.${item.number}`) || pendingAnswerConsistencyReviews.has(`${item.unit}.${item.section}.${item.number}`) || pendingStandaloneContextReviews.has(`${item.unit}.${item.section}.${item.number}`),
    sourceArabicStatus: hasArabic ? "draft" : undefined,
  };
});
