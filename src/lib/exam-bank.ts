export type ExamTrack = "IFRS" | "CMA" | "CPA" | "FMAA" | "ACCA" | "CFA";

export interface ExamQuestion {
  id: string;
  track: ExamTrack;
  topic: string;
  question: { ar: string; en: string };
  choices: { ar: string[]; en: string[] };
  answerIndex: number;
  explanation: { ar: string; en: string };
  reference: string;
}

export const TRACKS: ExamTrack[] = ["IFRS", "CMA", "CPA", "FMAA", "ACCA", "CFA"];

export const SEED_QUESTIONS: ExamQuestion[] = [
  {
    id: "ifrs-1",
    track: "IFRS",
    topic: "IAS 16 — PP&E",
    question: {
      ar: "وفقاً لـ IAS 16، أي مما يلي يدرج ضمن تكلفة الأصل الثابت عند الاعتراف المبدئي؟",
      en: "Under IAS 16, which of the following is included in the initial cost of an item of PP&E?",
    },
    choices: {
      ar: [
        "تكاليف التدريب على تشغيل الأصل",
        "تكاليف نقل وتركيب الأصل في موقعه التشغيلي",
        "تكاليف الترويج لمنتج جديد",
        "خسائر التشغيل الأولي",
      ],
      en: [
        "Training costs for operating the asset",
        "Costs of bringing the asset to its location and condition for use",
        "Advertising costs for a new product",
        "Initial operating losses",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "IAS 16 §16-17: تشمل التكلفة سعر الشراء وأي تكاليف مباشرة لإيصال الأصل لموقعه وحالته التشغيلية. التدريب والترويج وخسائر التشغيل لا تُرسمل.",
      en: "IAS 16 §16-17: cost includes purchase price plus any directly attributable costs to bring the asset to its location and working condition. Training, advertising, and initial operating losses are expensed.",
    },
    reference: "Gleim CMA / IAS 16",
  },
  {
    id: "ifrs-2",
    track: "IFRS",
    topic: "IFRS 15 — Revenue",
    question: {
      ar: "متى يتم الاعتراف بالإيراد وفق IFRS 15 في عقد بيع بضاعة؟",
      en: "Under IFRS 15, when is revenue recognized for a sale of goods contract?",
    },
    choices: {
      ar: [
        "عند توقيع العقد",
        "عند استلام النقد",
        "عند انتقال السيطرة على البضاعة للعميل",
        "عند نهاية الفترة المالية",
      ],
      en: [
        "When the contract is signed",
        "When cash is received",
        "When control of the goods transfers to the customer",
        "At the end of the reporting period",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "IFRS 15 يعتمد نموذج الخطوات الخمس ويُعترف بالإيراد عند انتقال السيطرة (وليس بالضرورة المخاطر والمنافع كما في IAS 18 السابق).",
      en: "IFRS 15 uses the 5-step model; revenue is recognized upon transfer of control to the customer (not merely risks and rewards as under legacy IAS 18).",
    },
    reference: "Gleim / IFRS 15",
  },
  {
    id: "cma-1",
    track: "CMA",
    topic: "Cost Behavior",
    question: {
      ar: "إذا كانت التكلفة المتغيرة لكل وحدة 20 ريال والتكلفة الثابتة الإجمالية 100,000 ريال وسعر البيع 50 ريال، فما نقطة التعادل بالوحدات؟",
      en: "Variable cost per unit is SAR 20, fixed costs SAR 100,000, selling price SAR 50. What is the breakeven point in units?",
    },
    choices: {
      ar: ["2,000", "3,333", "5,000", "10,000"],
      en: ["2,000", "3,333", "5,000", "10,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "BEP = التكاليف الثابتة / هامش المساهمة للوحدة = 100,000 / (50-20) = 100,000/30 = 3,333 وحدة.",
      en: "BEP = Fixed Costs / Contribution Margin per unit = 100,000 / (50-20) = 100,000/30 = 3,333 units.",
    },
    reference: "Gleim CMA Part 1",
  },
  {
    id: "cma-2",
    track: "CMA",
    topic: "Variance Analysis",
    question: {
      ar: "ما الذي يقيسه انحراف كفاءة العمالة (Labor Efficiency Variance)؟",
      en: "What does the Labor Efficiency Variance measure?",
    },
    choices: {
      ar: [
        "الفرق بين الأجر الفعلي والمعياري",
        "الفرق بين الساعات الفعلية والمعيارية للإنتاج الفعلي",
        "إجمالي تكلفة العمالة",
        "معدل دوران العمالة",
      ],
      en: [
        "Difference between actual and standard wage rate",
        "Difference between actual and standard hours for actual output",
        "Total labor cost",
        "Employee turnover rate",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "LEV = (الساعات الفعلية − الساعات المعيارية للإنتاج الفعلي) × المعدل المعياري. أما فرق الأجر فهو Labor Rate Variance.",
      en: "LEV = (Actual Hours − Standard Hours Allowed) × Standard Rate. The wage-rate difference is the Labor Rate Variance.",
    },
    reference: "Gleim CMA Part 1 — Standard Costs",
  },
  {
    id: "fmaa-1",
    track: "FMAA",
    topic: "Financial Statements",
    question: {
      ar: "أي قائمة مالية توضح المركز المالي للمنشأة في تاريخ محدد؟",
      en: "Which financial statement shows the financial position of an entity at a specific date?",
    },
    choices: {
      ar: [
        "قائمة الدخل",
        "قائمة المركز المالي",
        "قائمة التدفقات النقدية",
        "قائمة التغيرات في حقوق الملكية",
      ],
      en: [
        "Income Statement",
        "Statement of Financial Position",
        "Cash Flow Statement",
        "Statement of Changes in Equity",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "قائمة المركز المالي (الميزانية) تعرض الأصول والالتزامات وحقوق الملكية في تاريخ محدد، بينما باقي القوائم تغطي فترة.",
      en: "The Statement of Financial Position (Balance Sheet) reports assets, liabilities, and equity at a point in time; other statements cover a period.",
    },
    reference: "IMA FMAA Study Guide",
  },
  {
    id: "fmaa-2",
    track: "FMAA",
    topic: "Internal Controls",
    question: {
      ar: "أي مبدأ من مبادئ الرقابة الداخلية يتطلب فصل من يحتفظ بالنقد عمن يسجل القيود المحاسبية؟",
      en: "Which internal control principle requires separating cash custody from accounting record-keeping?",
    },
    choices: {
      ar: ["التوثيق", "فصل المهام", "المصادقات", "الجرد الدوري"],
      en: ["Documentation", "Segregation of duties", "Authorizations", "Periodic verification"],
    },
    answerIndex: 1,
    explanation: {
      ar: "فصل المهام (SoD) يقلل من مخاطر الاحتيال والخطأ بفصل وظائف التفويض والاحتفاظ والتسجيل.",
      en: "Segregation of Duties reduces fraud/error risk by separating authorization, custody, and record-keeping.",
    },
    reference: "COSO / IMA FMAA",
  },
  {
    id: "cpa-1",
    track: "CPA",
    topic: "Audit",
    question: {
      ar: "ما هو الهدف الأساسي من المراجعة المالية الخارجية؟",
      en: "What is the primary objective of an external financial audit?",
    },
    choices: {
      ar: [
        "اكتشاف جميع حالات الاحتيال",
        "إبداء رأي مهني حول عدالة القوائم المالية",
        "إعداد القوائم المالية",
        "تقييم أداء الإدارة",
      ],
      en: [
        "Detect all fraud",
        "Express an opinion on the fairness of the financial statements",
        "Prepare the financial statements",
        "Evaluate management performance",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "ISA 200: هدف المراجع إبداء رأي حول ما إذا كانت القوائم تعبر بعدالة، في جميع جوانبها الجوهرية، عن المركز المالي.",
      en: "ISA 200: the auditor's objective is to express an opinion on whether the financial statements are fairly presented in all material respects.",
    },
    reference: "Gleim CPA AUD",
  },
  {
    id: "acca-1",
    track: "ACCA",
    topic: "IAS 2 — Inventories",
    question: {
      ar: "وفق IAS 2 يقاس المخزون بـ:",
      en: "Under IAS 2, inventories are measured at:",
    },
    choices: {
      ar: [
        "التكلفة فقط",
        "صافي القيمة القابلة للتحقق فقط",
        "الأقل من التكلفة أو صافي القيمة القابلة للتحقق",
        "القيمة العادلة دائماً",
      ],
      en: [
        "Cost only",
        "Net realizable value only",
        "Lower of cost or net realizable value",
        "Fair value always",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "IAS 2: المخزون يقاس بأقل من التكلفة أو صافي القيمة القابلة للتحقق (LCNRV).",
      en: "IAS 2: inventories are measured at the lower of cost and NRV.",
    },
    reference: "ACCA F7 / IAS 2",
  },
  {
    id: "cfa-1",
    track: "CFA",
    topic: "TVM",
    question: {
      ar: "ما القيمة الحالية لمبلغ 10,000 يستحق بعد 3 سنوات بمعدل خصم 8% سنوياً؟",
      en: "What is the present value of 10,000 received in 3 years at 8% discount rate?",
    },
    choices: {
      ar: ["7,938", "8,573", "9,259", "10,800"],
      en: ["7,938", "8,573", "9,259", "10,800"],
    },
    answerIndex: 0,
    explanation: {
      ar: "PV = 10,000 / (1.08)^3 = 10,000 / 1.2597 ≈ 7,938.",
      en: "PV = 10,000 / (1.08)^3 = 10,000 / 1.2597 ≈ 7,938.",
    },
    reference: "CFA Level I — Quantitative Methods",
  },
  {
    id: "ifrs-3",
    track: "IFRS",
    topic: "IFRS 16 — Leases",
    question: {
      ar: "وفق IFRS 16 من منظور المستأجر، أي مما يلي صحيح؟",
      en: "Under IFRS 16, from the lessee's perspective, which is correct?",
    },
    choices: {
      ar: [
        "كل عقود الإيجار تعالج كإيجار تشغيلي",
        "يُعترف بحق استخدام الأصل والتزام إيجار لمعظم العقود",
        "لا يُعترف بأي أصل أو التزام",
        "تتم الرسملة فقط للعقود طويلة الأجل",
      ],
      en: [
        "All leases are operating leases",
        "A right-of-use asset and lease liability are recognized for most leases",
        "No asset or liability is recognized",
        "Only long-term leases are capitalized",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "IFRS 16 ألغى التصنيف التشغيلي/التمويلي للمستأجر؛ يُعترف بـ ROU Asset والتزام إيجار (باستثناء الإيجارات قصيرة الأجل ومنخفضة القيمة).",
      en: "IFRS 16 eliminated the operating/finance distinction for lessees; ROU asset and lease liability are recognized (except short-term and low-value leases).",
    },
    reference: "Gleim / IFRS 16",
  },
];
