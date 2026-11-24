/** Unit 16 review-only ledger. No original key correction or scoring release. */
export const CMA_UNIT16_REVIEW_HOLDS = [
  { id: "16.1.4", page: 849, kind: "damaged-choice", message: { ar: "أحد الاختيارات غير مكتمل في النص المستخرج؛ يلزم استرجاعه من الصفحة الأصلية.", en: "An extracted answer choice is damaged; recover it from the original page." } },
  { id: "16.1.19", page: 862, kind: "inferred-key", message: { ar: "مفتاح الإجابة مستنتج وليس مؤكدًا من المصدر؛ يلزم مطابقة الإجابة الأصلية.", en: "The answer key is inferred rather than source-confirmed; verify the original answer." } },
  { id: "16.1.42", page: 880, kind: "behavioral-assumption", message: { ar: "تبرير تخصيص التكاليف على أساس سلوك المديرين يحتمل أكثر من تفسير؛ يلزم تحديد الافتراضات.", en: "The behavioral rationale for allocating costs is ambiguous; clarify the assumptions." } },
  { id: "16.1.46", page: 884, kind: "truncated-table", message: { ar: "مبالغ وعناوين جدول الحل مقطوعة؛ يلزم استعادة الجدول الكامل.", en: "Solution table amounts and headings are truncated; recover the complete table." } },
  { id: "16.2.10", page: 899, kind: "truncated-table", message: { ar: "تجزأت مبالغ المبيعات والمرافق وفُقد عمود العميل D في الحل؛ يلزم مطابقة الجدول الأصلي.", en: "Sales and utilities amounts are split, and Customer D's solution column is missing; verify the original table." } },
  { id: "16.3.9", page: 913, kind: "roi-assumption", message: { ar: "تحسن الإيرادات والتكاليف مع خفض الأصول لا يضمن ارتفاع العائد على الاستثمار عند وجود خسائر.", en: "Improving revenue and costs while reducing assets need not increase ROI when operating income is negative." } },
  { id: "16.3.10", page: 914, kind: "responsibility-scope", message: { ar: "السؤال يجمع بين مركز الربح ومركز الاستثمار بينما الحل يعالج مركز الاستثمار فقط.", en: "The stem combines profit and investment centers, but the rationale addresses only investment centers." } },
  { id: "16.3.11", page: 915, kind: "roi-assumption", message: { ar: "زيادة حجم المبيعات مع هامش مساهمة سالب أو خفض الأصول عند وجود خسائر قد يخفض العائد.", en: "Higher volume with negative contribution or fewer assets with negative income may reduce ROI." } },
  { id: "16.3.26", page: 928, kind: "funding-assumption", message: { ar: "شراء المخزون من النقد المتاح لا يزيد إجمالي الأصول بالضرورة؛ يلزم تحديد مصدر التمويل.", en: "Buying inventory with existing cash need not increase total assets; clarify funding." } },
  { id: "16.3.30", page: 932, kind: "truncated-table", message: { ar: "عنوان عمود الإهلاك مقطوع في الجدول؛ يلزم التحقق من الصفحة الأصلية.", en: "The depreciation column heading is truncated; verify the original page." } },
  { id: "16.3.43", page: 949, kind: "roi-assumption", message: { ar: "تجاوز عائد المشروع الحد الأدنى المطلوب لا يضمن ارتفاع العائد الإجمالي للشركة؛ يلزم معرفة العائد الحالي.", en: "Exceeding the hurdle rate does not guarantee higher corporate ROI; existing ROI is needed." } },
  { id: "16.3.53", page: 960, kind: "inflation-assumption", message: { ar: "التضخم لا يضمن ارتفاع العائد على الاستثمار؛ يلزم تحديد أثره في الإيرادات والتكاليف وقياس الأصول.", en: "Inflation does not guarantee higher ROI; specify its effects on revenues, costs and asset measurement." } },
  { id: "16.4.9", page: 969, kind: "metric-overlap", message: { ar: "مدة انتظار العميل والالتزام بالمواعيد قد يكونان مقياسين للعملاء أو العمليات حسب الهدف الاستراتيجي.", en: "Customer wait time and punctuality may belong to customer or process perspectives depending on strategy." } },
  { id: "16.5.1", page: 974, kind: "interleaved-columns", message: { ar: "تداخلت أعمدة دراسة حالة Parkside؛ يلزم مطابقة البيانات الأصلية قبل اعتماد الحساب.", en: "Parkside case columns are interleaved; verify original data before certifying calculations." } },
  { id: "16.5.2", page: 975, kind: "interleaved-columns", message: { ar: "تداخلت أعمدة دراسة حالة Parkside؛ يلزم مطابقة بيانات التكلفة والطاقة الفائضة.", en: "Parkside case columns are interleaved; verify costs and excess capacity assumptions." } },
  { id: "16.5.3", page: 976, kind: "interleaved-columns", message: { ar: "تداخلت أعمدة دراسة حالة Parkside؛ يلزم التحقق من التكلفة وسعر السوق التقديري.", en: "Parkside case columns are interleaved; verify costs and estimated market price." } },
  { id: "16.5.13", page: 984, kind: "compliance-context", message: { ar: "يعرض المصدر تغيير أسعار التحويل الدولية دون بيان القيود النظامية ومبدأ السعر المحايد؛ يلزم استكمال السياق.", en: "The source omits regulatory constraints and arm's-length pricing context." } },
  { id: "16.5.21", page: 993, kind: "negotiation-assumption", message: { ar: "التفاوض بين الأقسام لا يضمن بالضرورة النتيجة المثلى للشركة؛ يلزم تحديد شروط التفاوض.", en: "Divisional negotiation does not necessarily optimize the company outcome; clarify conditions." } },
  { id: "16.5.22", page: 994, kind: "profit-scope", message: { ar: "الحل يخلط بين ربح القسم البائع وربح الشركة ككل؛ يلزم مقارنة التكاليف والإيرادات ذات الصلة.", en: "The rationale conflates selling-division profit and consolidated profit; compare relevant costs and revenues." } },
  { id: "16.5.25", page: 996, kind: "full-cost-assumption", message: { ar: "مزايا التكلفة الكلية الواردة ليست مضمونة دون تحديد سلوك التكاليف وظروف القرار.", en: "The stated full-cost advantages are not guaranteed without cost behavior and decision assumptions." } },
  { id: "16.5.28", page: 999, kind: "full-cost-assumption", message: { ar: "التكلفة الكلية الفعلية لا تضمن توافق الأهداف؛ يلزم بحث عدم الكفاءة وتكلفة الفرصة البديلة.", en: "Actual full cost does not guarantee goal congruence; consider inefficiency and opportunity cost." } },
  { id: "16.5.33", page: 1003, kind: "opportunity-cost", message: { ar: "التكلفة الكلية ليست بالضرورة الحد الأدنى لسعر التحويل عند وجود فرصة بيع خارجية؛ يلزم تحديد هامش المساهمة المفقود.", en: "Full cost need not be the minimum transfer price when external sales are available; determine forgone contribution." } },
  { id: "16.5.34", page: 1005, kind: "compliance-context", message: { ar: "المعدلات الضريبية افتراضية والبدائل لا تتناول القيود النظامية لأسعار التحويل؛ لا يعد السؤال إرشادًا ضريبيًا حاليًا.", en: "Tax rates are hypothetical and alternatives omit transfer-pricing compliance constraints; not current tax guidance." } },
] as const;
const reviewById = new Map<string, (typeof CMA_UNIT16_REVIEW_HOLDS)[number]>(CMA_UNIT16_REVIEW_HOLDS.map(entry => [entry.id, entry]));
export function getCmaUnit16SourceReview(questionId: string) {
  const match = /^cma-gleim-2025-vol2-su16-s(\d+)-q(\d+)$/.exec(questionId);
  if (!match) return undefined;
  const entry = reviewById.get(`16.${Number(match[1])}.${Number(match[2])}`);
  if (!entry) return undefined;
  return { ...entry, message: {
    ar: `مراجعة المصدر — صفحة ${entry.page}: ${entry.message.ar} هذا السؤال غير محتسب في الدرجة.`,
    en: `Source review — p. ${entry.page}: ${entry.message.en} This question is not scored.`,
  } };
}
