import type { Lang } from "@/lib/i18n";

export type ToolCategory = "finance" | "tax" | "analysis" | "excel" | "ifrs";

export interface ToolInfoSection {
  ar: string[];
  en: string[];
}

export interface ToolMeta {
  id: string;
  category: ToolCategory;
  icon: string; // lucide icon name
  title: { ar: string; en: string };
  short: { ar: string; en: string };
  standard?: { ar: string; en: string };
  formula?: string;
  about: { ar: string; en: string };
  whenToUse: ToolInfoSection;
  commonMistakes: ToolInfoSection;
  tips: ToolInfoSection;
}

export const CATEGORIES: { id: ToolCategory; label: { ar: string; en: string } }[] = [
  { id: "finance", label: { ar: "التمويل والاستثمار", en: "Finance & Investment" } },
  { id: "tax", label: { ar: "الزكاة والضرائب", en: "Zakat & Tax" } },
  { id: "analysis", label: { ar: "التحليل المالي", en: "Financial Analysis" } },
  { id: "excel", label: { ar: "أدوات Excel", en: "Excel Tools" } },
  { id: "ifrs", label: { ar: "معايير IFRS", en: "IFRS Standards" } },
];

export const TOOLS: ToolMeta[] = [
  {
    id: "pv",
    category: "finance",
    icon: "TrendingDown",
    title: { ar: "القيمة الحالية (PV)", en: "Present Value (PV)" },
    short: {
      ar: "احسب القيمة الحالية لمبلغ مستقبلي أو دفعات منتظمة.",
      en: "Compute today's value of a future amount or annuity.",
    },
    standard: { ar: "IAS 36 · IFRS 13 · IFRS 16", en: "IAS 36 · IFRS 13 · IFRS 16" },
    formula: "PV = FV / (1 + r)^n",
    about: {
      ar: "أداة أساسية في التقييم وقياس الانخفاض في القيمة وخصم التدفقات النقدية المستقبلية إلى وقتها الحالي.",
      en: "Foundational valuation tool — discounting future cash flows to today using a market rate.",
    },
    whenToUse: {
      ar: [
        "تقييم استثمار أو فرصة عمل",
        "اختبار انخفاض القيمة لأصل (IAS 36)",
        "احتساب التزام الإيجار (IFRS 16)",
        "تقدير القيمة العادلة (IFRS 13)",
      ],
      en: [
        "Valuing an investment opportunity",
        "Impairment testing of an asset (IAS 36)",
        "Lease liability measurement (IFRS 16)",
        "Fair value estimation (IFRS 13)",
      ],
    },
    commonMistakes: {
      ar: [
        "استخدام معدل خصم لا يعكس مخاطر التدفق",
        "خلط التدفقات الاسمية بالحقيقية",
        "نسيان قيمة استرداد نهاية الفترة",
      ],
      en: [
        "Using a discount rate that ignores cash-flow risk",
        "Mixing nominal and real cash flows",
        "Forgetting the terminal/residual value",
      ],
    },
    tips: {
      ar: [
        "ابدأ بمعدل خصم متحفظ ثم اختبر الحساسية",
        "وحّد وحدة الفترة (شهري/سنوي) مع المعدل",
      ],
      en: [
        "Start with a conservative rate, then run sensitivity",
        "Keep the period unit consistent with the rate",
      ],
    },
  },
  {
    id: "fv",
    category: "finance",
    icon: "TrendingUp",
    title: { ar: "القيمة المستقبلية (FV)", en: "Future Value (FV)" },
    short: {
      ar: "كم ستصبح أموالك بعد عدد من السنوات مع/بدون دفعات منتظمة.",
      en: "Project what a present amount (plus contributions) becomes over time.",
    },
    formula: "FV = PV·(1+r)^n + PMT·[((1+r)^n − 1)/r]",
    about: {
      ar: "تخدم في تخطيط الادخار، احتساب صناديق الاستهلاك، وتقدير عوائد الاستثمار المستقبلية.",
      en: "Used in savings planning, sinking-fund calculations, and projected investment returns.",
    },
    whenToUse: {
      ar: ["تخطيط ادخار شخصي", "صناديق استهلاك أو إحلال", "مقارنة فرص ادخار"],
      en: ["Personal savings planning", "Sinking / replacement funds", "Comparing savings options"],
    },
    commonMistakes: {
      ar: ["إهمال أثر تكرار التركيب", "افتراض ثبات المعدل لفترات طويلة"],
      en: ["Ignoring compounding frequency", "Assuming a constant long-horizon rate"],
    },
    tips: {
      ar: ["استخدم معدلاً واقعياً بعد التضخم", "أضف دفعات شهرية لرؤية أثر المراكمة"],
      en: ["Use a realistic real rate after inflation", "Add monthly contributions to see compounding"],
    },
  },
  {
    id: "npv",
    category: "finance",
    icon: "BarChart3",
    title: { ar: "صافي القيمة الحالية (NPV)", en: "Net Present Value (NPV)" },
    short: {
      ar: "قرر قبول أو رفض المشروع بخصم تدفقاته إلى اليوم.",
      en: "Accept or reject a project by discounting all cashflows to today.",
    },
    standard: { ar: "Capital Budgeting", en: "Capital Budgeting" },
    formula: "NPV = Σ CFt / (1+r)^t",
    about: {
      ar: "إذا كانت NPV موجبة فالمشروع يضيف قيمة بالمعدل المختار، والعكس صحيح.",
      en: "Positive NPV means the project adds value at the chosen rate; negative means it destroys value.",
    },
    whenToUse: {
      ar: ["تقييم مشاريع رأسمالية", "المقارنة بين بدائل استثمارية", "قرارات شراء معدات"],
      en: ["Capital project appraisal", "Comparing investment alternatives", "Equipment purchase decisions"],
    },
    commonMistakes: {
      ar: ["استبعاد التكاليف الغارقة بشكل غير صحيح", "تجاهل رأس المال العامل"],
      en: ["Mishandling sunk costs", "Ignoring working capital changes"],
    },
    tips: {
      ar: ["استخدم WACC كمعدل خصم للشركة", "أضف سنة 0 كتدفق سالب (الاستثمار)"],
      en: ["Use WACC as the company discount rate", "Year 0 is the initial outflow (negative)"],
    },
  },
  {
    id: "irr",
    category: "finance",
    icon: "Percent",
    title: { ar: "معدل العائد الداخلي (IRR)", en: "Internal Rate of Return (IRR)" },
    short: {
      ar: "المعدل الذي يجعل صافي القيمة الحالية = صفر.",
      en: "The discount rate that makes NPV equal to zero.",
    },
    formula: "Solve: Σ CFt / (1+IRR)^t = 0",
    about: {
      ar: "يمثل العائد الفعلي الضمني للمشروع، ويُقارن عادة بـ Hurdle Rate أو WACC.",
      en: "The project's implied return — typically compared with a hurdle rate or WACC.",
    },
    whenToUse: {
      ar: ["تقييم جدوى المشاريع", "ترتيب أولوية الفرص الاستثمارية"],
      en: ["Project feasibility", "Ranking investment opportunities"],
    },
    commonMistakes: {
      ar: ["استخدام IRR منفردًا مع تدفقات متعددة الإشارات", "تجاهل حجم الاستثمار"],
      en: ["Using IRR alone with sign-changing cashflows", "Ignoring investment scale"],
    },
    tips: {
      ar: ["استخدم MIRR عند وجود إعادة استثمار", "اقرن دائماً مع NPV"],
      en: ["Use MIRR when reinvestment matters", "Always pair IRR with NPV"],
    },
  },
  {
    id: "loan",
    category: "finance",
    icon: "Banknote",
    title: { ar: "جدول إطفاء قرض", en: "Loan Amortization" },
    short: {
      ar: "جدول كامل يوضح الفائدة والأصل والرصيد المتبقي.",
      en: "Full schedule showing interest, principal, and remaining balance.",
    },
    standard: { ar: "IFRS 9 — Effective Interest Method", en: "IFRS 9 — Effective Interest Method" },
    formula: "PMT = P·r / (1 − (1+r)^−n)",
    about: {
      ar: "يستخدم لاحتساب التزامات القروض وعرض هيكل السداد للإدارة والبنك.",
      en: "Used for loan liability schedules and presenting repayment structure to management/lenders.",
    },
    whenToUse: {
      ar: ["قروض شركات وأفراد", "تمويلات إيجار تمويلي", "سندات بأقساط دورية"],
      en: ["Corporate and personal loans", "Finance lease facilities", "Installment bonds"],
    },
    commonMistakes: {
      ar: ["خلط معدل سنوي بمعدل دوري", "إهمال الرسوم الإدارية في معدل الفائدة الفعلي"],
      en: ["Confusing annual vs periodic rate", "Ignoring fees in the effective rate"],
    },
    tips: {
      ar: ["قسّم الفائدة السنوية على عدد الدفعات", "تحقق أن الرصيد النهائي ≈ 0"],
      en: ["Divide annual rate by payment frequency", "Verify the ending balance ≈ 0"],
    },
  },
  {
    id: "vat",
    category: "tax",
    icon: "ReceiptText",
    title: { ar: "حاسبة ضريبة القيمة المضافة", en: "VAT Calculator" },
    short: {
      ar: "احسب الضريبة سواء كان المبلغ شامل أو غير شامل.",
      en: "Compute VAT whether the amount is inclusive or exclusive of tax.",
    },
    standard: { ar: "ZATCA — لائحة ضريبة القيمة المضافة", en: "ZATCA — VAT Regulations" },
    formula: "Tax = Base × rate · Total = Base + Tax",
    about: {
      ar: "أداة سريعة لاحتساب الضريبة على الفواتير وفق نسب الزكاة والضريبة والجمارك في السعودية.",
      en: "Quick utility for invoice VAT computation aligned with ZATCA rates.",
    },
    whenToUse: {
      ar: ["إصدار فواتير ضريبية", "مراجعة فواتير الموردين", "إعداد إقرار VAT"],
      en: ["Issuing tax invoices", "Reviewing vendor invoices", "Preparing the VAT return"],
    },
    commonMistakes: {
      ar: ["استخدام النسبة على مبلغ شامل بدل غير شامل", "إهمال البنود المعفاة أو خاضعة لنسبة صفر"],
      en: ["Applying the rate to an inclusive amount as if exclusive", "Forgetting exempt or zero-rated items"],
    },
    tips: {
      ar: ["تحقق من سجل المورد الضريبي قبل الخصم", "احفظ نسخة من الفاتورة الإلكترونية"],
      en: ["Verify supplier's VAT registration before reclaiming input tax", "Keep the e-invoice archived"],
    },
  },
];

export const toolById = (id: string) => TOOLS.find((t) => t.id === id);

export const labelByCategory = (c: ToolCategory, lang: Lang) =>
  CATEGORIES.find((x) => x.id === c)?.label[lang] ?? c;
