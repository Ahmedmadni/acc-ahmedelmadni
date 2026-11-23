/**
 * CMA Part 1 · Gleim 2025 Volume 2 · Study Unit 14
 *
 * Unresolved original-page checks. Entries are NOT corrections or certified
 * translations. Keep publisher source text, page, choices and answer keys as-is
 * and keep all listed questions excluded from scored practice.
 *
 * These short explanations improve learner-facing review warnings and give
 * editors a source-page checklist. Only clear a hold after inspecting the
 * rights-cleared original edition, documenting any repairs and rerunning tests.
 */
export type CmaUnit14ReviewKind =
  | "split-digits"
  | "damaged-solution"
  | "interleaved-columns"
  | "answer-rounding"
  | "missing-context"
  | "broken-options"
  | "reconstructed-choice"
  | "reflowed-table";

const REVIEW_MESSAGES: Record<CmaUnit14ReviewKind, { ar: string; en: string }> = {
  "split-digits": {
    ar: "الأرقام في الجدول الأصلي مقسمة بين أسطر أو أعمدة عند الاستخراج. يلزم مطابقة الصفحة قبل اعتماد الحسابات.",
    en: "PDF extraction split amounts across lines or columns. Compare the original page before certifying the calculations.",
  },
  "damaged-solution": {
    ar: "جزء من جدول الحل أو المعادلة غير مقروء بعد استخراج PDF. لا يمكن اعتماد مفتاح الإجابة دون مراجعة الصفحة.",
    en: "An extracted solution table or equation is damaged. Check the original page before certifying the answer key.",
  },
  "interleaved-columns": {
    ar: "تداخل عمودا بيانات المبيعات والتحصيل في نص السؤال. يلزم إعادة تركيب الجدول من الصفحة الأصلية.",
    en: "Two source columns became interleaved in the question. Reconstruct the table from the original page.",
  },
  "answer-rounding": {
    ar: "يوجد تعارض أو غموض في تقريب الإجابة المطلوبة ومفتاح المصدر. لا تُحتسب درجة لهذا السؤال.",
    en: "The requested rounding and source answer key conflict or are ambiguous. This question is not scored.",
  },
  "missing-context": {
    ar: "هذا سؤال تابع لحالة سابقة ولا يحتوي منفردًا على جميع بياناتها. اعرض الحالة السابقة قبل النظر في الحل.",
    en: "This follow-up question is not self-contained. Read the preceding case before reviewing its answer.",
  },
  "broken-options": {
    ar: "حدود الاختيارات الأربعة تداخلت أثناء استخراج PDF. لا يمكن اعتماد البدائل حتى تُطابق الصفحة الأصلية.",
    en: "The four option boundaries were corrupted during PDF extraction. Check the original page before relying on the choices.",
  },
  "reconstructed-choice": {
    ar: "أعيد بناء أحد اختيارات السؤال لأغراض تعليمية بعد فقده في النص المستخرج. ليس مطابقًا مؤكدًا للمصدر.",
    en: "A missing extracted choice was independently reconstructed for study. Source fidelity has not been certified.",
  },
  "reflowed-table": {
    ar: "أُعيد ترتيب جدول المصدر لتسهيل القراءة، لكن المطابقة البصرية مع طبعة الناشر لم تكتمل بعد.",
    en: "The source table was reflowed for readability, but visual fidelity to the publisher edition remains unverified.",
  },
};

/** Canonical compact key is `14.section.question`, with original PDF page. */
export const CMA_UNIT14_REVIEW_HOLDS: ReadonlyArray<{
  id: string;
  page: number;
  kind: CmaUnit14ReviewKind;
}> = [
  { id: "14.1.4", page: 328, kind: "split-digits" },
  { id: "14.1.5", page: 330, kind: "split-digits" },
  { id: "14.1.6", page: 333, kind: "split-digits" },
  { id: "14.2.14", page: 356, kind: "damaged-solution" },
  { id: "14.2.23", page: 369, kind: "answer-rounding" },
  { id: "14.3.9", page: 410, kind: "split-digits" },
  { id: "14.4.2", page: 425, kind: "reconstructed-choice" },
  { id: "14.4.5", page: 428, kind: "interleaved-columns" },
  { id: "14.4.6", page: 429, kind: "interleaved-columns" },
  { id: "14.4.15", page: 443, kind: "split-digits" },
  { id: "14.4.30", page: 464, kind: "damaged-solution" },
  { id: "14.4.31", page: 468, kind: "reflowed-table" },
  { id: "14.4.32", page: 469, kind: "reflowed-table" },
  { id: "14.5.3", page: 484, kind: "reflowed-table" },
  { id: "14.5.4", page: 485, kind: "reflowed-table" },
  { id: "14.5.10", page: 492, kind: "missing-context" },
  { id: "14.6.3", page: 529, kind: "split-digits" },
  { id: "14.6.4", page: 530, kind: "split-digits" },
  { id: "14.6.5", page: 533, kind: "reflowed-table" },
  { id: "14.6.6", page: 534, kind: "reflowed-table" },
  { id: "14.6.7", page: 535, kind: "reflowed-table" },
  { id: "14.6.10", page: 539, kind: "damaged-solution" },
  { id: "14.6.12", page: 543, kind: "reflowed-table" },
  { id: "14.6.21", page: 551, kind: "answer-rounding" },
  { id: "14.6.31", page: 561, kind: "broken-options" },
];

const reviewById = new Map(CMA_UNIT14_REVIEW_HOLDS.map((entry) => [entry.id, entry]));

export function getCmaUnit14SourceReview(questionId: string):
  | { id: string; page: number; kind: CmaUnit14ReviewKind; message: { ar: string; en: string } }
  | undefined {
  const match = /^cma-gleim-2025-vol2-su14-s(\d+)-q(\d+)$/.exec(questionId);
  if (!match) return undefined;
  const id = `14.${Number(match[1])}.${Number(match[2])}`;
  const review = reviewById.get(id);
  return review ? { ...review, message: REVIEW_MESSAGES[review.kind] } : undefined;
}
