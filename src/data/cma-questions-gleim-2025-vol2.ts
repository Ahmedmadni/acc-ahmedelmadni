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
  // Unit 14 §2 Q14 ends its raw-material purchase solution in "42,00".
  // Unit 14 §4 Q5/Q6 have interleaved cash-pattern columns in the stem.
  // Unit 14 §4 Q30 has split numerical columns in the source cash table.
  // Unit 14 §6 Q10 has an incomplete/unreadable algebra equation from PDF.
  // Preserve both original English records, but do not grade until source
  // page comparisons and correct display layouts are verified.
  // Unit 14 §1 Q4–Q6 contain split sales-revenue digits in the source
  // solution tables. §3 Q9 splits the labor-rate and answer digits.
  // §4 Q15 and §6 Q3/Q4 split balance-sheet amounts across columns.
  "14.1.4", "14.1.5", "14.1.6", "14.3.9", "14.4.15", "14.6.3", "14.6.4",
  "14.2.14", "14.4.5", "14.4.6", "14.4.30", "14.6.10",
  // Unit 14 §6 Q31 has broken option boundaries after PDF extraction.
  "14.6.31",
  // Unit 15 §2 Q25's department cost table renders a total variance as
  // "$1.360 U" rather than a reliable $1,360; other source columns have
  // been flattened. §2 Q32 interleaves Nash's prose and capacity table.
  // Do not translate or grade these items before visual source-page review.
  "15.2.25", "15.2.32",
  // Unit 15 §3 Q32's imported variance table labels a difference between
  // actual total material cost and standard allowed cost as a price variance:
  // $13,200 actual vs $12,000 standard = $1,200, yet 3,300 input pounds at
  // the same $4/pound standard means no independently established price
  // variance. The source explanation is also perspective-ambiguous.
  // §3 Q37/Q38 split the Jackson standard-cost table into PDF column fragments.
  // §3 Q39's Arrow standards header is visibly cut to "Sta" and "C".
  // Do not grade these English-only records until the authorized source
  // pages and answer rationale are reviewed visually.
  "15.3.32", "15.3.37", "15.3.38", "15.3.39",
  // §4 Q1/Q2 use the Jackson standard-cost table, whose columns were
  // flattened; Q9/Q10 reuse Arrow's visibly truncated 'Sta' and 'C' headings.
  // §4 Q12 has a side-by-side five-job variance table requiring page layout
  // comparison before a trustworthy scored presentation.
  // §4 Q19's source calculation presents a negative signed denominator but
  // reports a positive rate; §4 Q24's algebra states the wrong sign while
  // reaching the correct numeric wage answer; and §4 Q32 treats products
  // sold as direct-labor input hours without adequate input-hour data.
  // Keep originals English-first, ungraded and source-review-only.
  "15.4.1", "15.4.2", "15.4.9", "15.4.10", "15.4.12",
  "15.4.19", "15.4.24", "15.4.32",
  // §5 Q2/Q3 Mack Fuels input and purchases tables merge side-by-side
  // columns and visibly split quantities (for example "Quantit", "5\n0").
  // §5 Q5/Q6/Q7 Mountain View Hospital's multi-DRG nursing hours table
  // interleaves values from RN/LPN/Aide columns and corrupts patient counts.
  // Keep the original source and original keys, but do not score until the
  // licensed original 2025 pages are visually checked and the table is fixed.
  "15.5.2", "15.5.3", "15.5.5", "15.5.6", "15.5.7",
  // §6 Q53 Valyn planned and actual tables are interleaved and monetary amounts split.
  "15.6.53",
  // §7 Ardmore/Water Control and §8 Folsom cases have interleaved table/prose columns.
  "15.7.1", "15.7.2", "15.7.3", "15.7.4", "15.7.5", "15.7.6", "15.7.7", "15.7.8", "15.7.9",
  "15.8.2", "15.8.6", "15.8.7", "15.8.8",
  // §8 Q30 Xerbert income statement has truncated numeric columns.
  "15.8.30",
  // Unit 16 §1 Q4 has an incomplete fourth choice; Q19 has an inferred key.
  "16.1.4", "16.1.19",
  // Q46 common-cost allocation solution has truncated monetary amounts and headers.
  "16.1.46",
  // §2 Q10 splits sales and utility amounts; solution loses Customer D column.
  "16.2.10",
  // §3 Q30 has a truncated depreciation column heading.
  "16.3.30",
  // §5 Q1–3: shared Parkside case has interleaved columns; verify original layout.
  "16.5.1", "16.5.2", "16.5.3",
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
// Unit 15 §6 Q28 asks for actual machine hours but volume variance only identifies standard allowed hours.
const pendingAnswerConsistencyReviews = new Set(["14.6.21", "15.6.28", "15.6.58", "15.6.61", "15.8.26", "15.8.31", "16.1.42", "16.3.9", "16.3.10", "16.3.11", "16.3.26", "16.3.43", "16.3.53", "16.4.9", "16.5.13", "16.5.21", "16.5.22", "16.5.25", "16.5.28", "16.5.33", "16.5.34", "17.1.1", "17.1.2", "17.1.3", "17.1.4", "17.1.5", "17.1.6", "17.1.10", "17.1.11", "17.1.12", "17.1.14", "17.1.18", "17.1.20", "17.1.22", "17.1.26", "17.2.2", "17.2.21", "17.2.37", "17.2.43", "17.2.46", "17.2.55", "18.1.1", "18.1.10", "18.1.17", "18.1.21", "18.1.24", "18.1.35", "18.1.43", "18.1.44", "18.1.46", "18.1.55", "18.1.63", "18.1.64", "18.1.65", "18.1.68", "18.1.72", "18.1.74", "18.1.82", "18.1.83", "18.2.4", "18.2.10", "18.2.15", "18.2.25", "18.2.26", "18.2.28", "18.2.33", "18.2.35", "18.2.36", "18.3.5", "18.3.8", "18.3.11", "18.3.12", "18.3.14", "18.3.17", "18.3.21", "19.1.3", "19.1.6", "19.1.7", "19.1.9", "19.1.26", "19.1.27", "19.1.28", "19.1.29", "19.1.32", "19.1.35", "19.1.40", "19.2.6", "19.2.7", "19.2.11", "19.2.13", "19.2.19", "19.2.25", "19.2.27", "19.2.28"]);

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
