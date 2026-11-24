/** CMA Part 1 · Gleim 2025 Volume 2 · Study Unit 15.
 * Review-only ledger, not a source correction or scoring release.
 * Resolve entries only after authorized original-page comparison and regression checks.
 */
export type CmaUnit15ReviewKind = "split-digits" | "interleaved-columns" | "truncated-table" | "variance-classification" | "algebra-sign" | "missing-input" | "hours-definition" | "investigation-scope" | "actual-flexible-cost" | "revenue-margin" | "table-reflowed" | "reconstructed";

const REVIEW_MESSAGES: Record<CmaUnit15ReviewKind, { ar: string; en: string }> = {
  "split-digits": { ar: "تجزأت مبالغ أو أرقام الجدول في النص المستخرج؛ يلزم مطابقة الأرقام مع الصفحة الأصلية قبل اعتماد الحسابات.", en: "Extracted amounts or digits are split or malformed. Compare the original page before certifying the calculations." },
  "interleaved-columns": { ar: "تداخلت أعمدة بيانات الحالة أثناء الاستخراج؛ يلزم إعادة ترتيب الجدول من الصفحة الأصلية قبل اعتماد السؤال.", en: "Case-data columns were interleaved during extraction. Rebuild the table from the original page before certifying the question." },
  "truncated-table": { ar: "بعض عناوين أو خلايا الجدول المستخرج مقطوعة؛ يلزم التحقق من البيانات الكاملة في الصفحة الأصلية.", en: "Extracted table headers or cells are truncated. Verify the complete data against the original page." },
  "variance-classification": { ar: "لا يطابق تصنيف الانحراف في الحل معطيات السعر والكمية بصورة مؤكدة؛ يلزم مراجعة تفسير المصدر.", en: "The variance classification is not clearly supported by the price and quantity inputs. Review the source rationale." },
  "algebra-sign": { ar: "توجد مشكلة في إشارة المعادلة أو تسلسل الحل الجبري؛ يلزم تدقيق اتجاه الانحراف قبل اعتماد الإجابة.", en: "The equation sign or algebraic sequence is inconsistent. Verify the variance direction before certifying the answer." },
  "missing-input": { ar: "لا تكفي بيانات المدخلات لاشتقاق ساعات العمل المطلوبة بصورة مستقلة؛ يلزم التحقق من سياق المصدر.", en: "Input data do not independently establish the required labor hours. Verify the source context." },
  "hours-definition": { ar: "انحراف حجم الإنتاج الثابت يحدد الساعات المعيارية المسموح بها، لا الساعات الفعلية المطلوبة في السؤال.", en: "Fixed overhead volume variance identifies standard allowed hours, not the actual hours requested." },
  "investigation-scope": { ar: "تحديد الانحراف الذي يستوجب التحقيق يحتاج معيار الأهمية النسبية والمسؤولية؛ هذه المعايير غير واضحة في السؤال.", en: "The investigation decision requires materiality and responsibility criteria that are not clear in the stem." },
  "actual-flexible-cost": { ar: "لا يتضح ما إذا كانت التكاليف المرنة المعروضة تمثل تكاليف متغيرة فعلية؛ يلزم حسم التعريف قبل اعتماد انحراف الإنفاق.", en: "It is unclear whether the stated flexible costs are actual variable costs. Clarify the definition before certifying spending variance." },
  "revenue-margin": { ar: "الحل يستخدم سعر البيع المقدر بينما يصف الانحراف بأنه متعلق بهامش المساهمة؛ يلزم تمييز انحراف الإيراد عن انحراف الهامش.", en: "The solution uses budgeted selling prices but describes a contribution-margin variance. Distinguish revenue from margin effects." },
  "table-reflowed": { ar: "أعيد ترتيب جدول المصدر لأغراض القراءة؛ لم تُؤكد مطابقته البصرية مع الطبعة الأصلية بعد.", en: "The source table was reflowed for readability; visual fidelity to the publisher edition remains unverified." },
  "reconstructed": { ar: "أعيد بناء جزء من النص المستخرج؛ يلزم التحقق من الصفحة الأصلية قبل اعتماد السؤال ومفتاحه.", en: "Part of the extracted source was reconstructed. Verify the original page before certifying the question and key." },
};

export const CMA_UNIT15_REVIEW_HOLDS: ReadonlyArray<{
  id: string; page: number; kind: CmaUnit15ReviewKind; gate: "explicit" | "source-status";
}> = [
  { id: "15.2.25", page: 596, kind: "split-digits", gate: "explicit" },
  { id: "15.2.32", page: 607, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.3.32", page: 645, kind: "variance-classification", gate: "explicit" },
  { id: "15.3.37", page: 652, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.3.38", page: 652, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.3.39", page: 654, kind: "truncated-table", gate: "explicit" },
  { id: "15.4.1", page: 663, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.4.2", page: 663, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.4.9", page: 671, kind: "truncated-table", gate: "explicit" },
  { id: "15.4.10", page: 671, kind: "truncated-table", gate: "explicit" },
  { id: "15.4.12", page: 673, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.4.19", page: 680, kind: "algebra-sign", gate: "explicit" },
  { id: "15.4.24", page: 685, kind: "algebra-sign", gate: "explicit" },
  { id: "15.4.32", page: 693, kind: "missing-input", gate: "explicit" },
  { id: "15.5.2", page: 700, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.5.3", page: 702, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.5.5", page: 706, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.5.6", page: 707, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.5.7", page: 709, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.6.28", page: 743, kind: "hours-definition", gate: "explicit" },
  { id: "15.6.53", page: 771, kind: "split-digits", gate: "explicit" },
  { id: "15.6.58", page: 776, kind: "investigation-scope", gate: "explicit" },
  { id: "15.6.61", page: 780, kind: "actual-flexible-cost", gate: "explicit" },
  { id: "15.7.1", page: 788, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.2", page: 789, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.3", page: 789, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.4", page: 790, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.5", page: 792, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.6", page: 793, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.7", page: 793, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.8", page: 794, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.9", page: 794, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.7.10", page: 799, kind: "table-reflowed", gate: "source-status" },
  { id: "15.7.11", page: 800, kind: "table-reflowed", gate: "source-status" },
  { id: "15.7.12", page: 801, kind: "table-reflowed", gate: "source-status" },
  { id: "15.7.13", page: 802, kind: "table-reflowed", gate: "source-status" },
  { id: "15.8.2", page: 810, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.8.6", page: 814, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.8.7", page: 815, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.8.8", page: 815, kind: "interleaved-columns", gate: "explicit" },
  { id: "15.8.9", page: 817, kind: "table-reflowed", gate: "source-status" },
  { id: "15.8.10", page: 817, kind: "table-reflowed", gate: "source-status" },
  { id: "15.8.11", page: 822, kind: "table-reflowed", gate: "source-status" },
  { id: "15.8.23", page: 835, kind: "reconstructed", gate: "source-status" },
  { id: "15.8.26", page: 839, kind: "revenue-margin", gate: "explicit" },
  { id: "15.8.30", page: 844, kind: "split-digits", gate: "explicit" },
  { id: "15.8.31", page: 844, kind: "revenue-margin", gate: "explicit" },
];

const reviewById = new Map(CMA_UNIT15_REVIEW_HOLDS.map(entry => [entry.id, entry]));

export function getCmaUnit15SourceReview(questionId: string) {
  const match = /^cma-gleim-2025-vol2-su15-s(\d+)-q(\d+)$/.exec(questionId);
  if (!match) return undefined;
  const entry = reviewById.get(`15.${Number(match[1])}.${Number(match[2])}`);
  if (!entry) return undefined;
  const detail = REVIEW_MESSAGES[entry.kind];
  return { ...entry, message: {
    ar: `مراجعة المصدر — صفحة ${entry.page}: ${detail.ar} هذا السؤال غير محتسب في الدرجة.`,
    en: `Source review — p. ${entry.page}: ${detail.en} This question is not scored.`,
  } };
}
