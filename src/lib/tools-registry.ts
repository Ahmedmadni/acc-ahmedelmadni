import type { Lang } from "@/lib/i18n";

export type ToolCategory = "finance" | "tax" | "analysis" | "excel" | "ifrs" | "career" | "legal";

export interface ToolInfoSection {
  ar: string[];
  en: string[];
}

export interface ToolMeta {
  id: string;
  category: ToolCategory;
  icon: string; // lucide icon name
  official?: boolean;
  title: { ar: string; en: string };
  short: { ar: string; en: string };
  standard?: { ar: string; en: string };
  formula?: string;
  about: { ar: string; en: string };
  whenToUse: ToolInfoSection;
  commonMistakes: ToolInfoSection;
  tips: ToolInfoSection;
  /** When set, the tool page shows a CTA to have Ahmed do this for you —
   *  links to /request-service?service=<requestServiceId>. Matches an id in
   *  the SERVICES list in src/routes/request-service.tsx. */
  requestServiceId?: string;
}

export const CATEGORIES: { id: ToolCategory; label: { ar: string; en: string } }[] = [
  { id: "finance", label: { ar: "التمويل والاستثمار", en: "Finance & Investment" } },
  { id: "tax", label: { ar: "الزكاة والضرائب", en: "Zakat & Tax" } },
  { id: "analysis", label: { ar: "التحليل المالي", en: "Financial Analysis" } },
  { id: "excel", label: { ar: "أدوات Excel", en: "Excel Tools" } },
  { id: "ifrs", label: { ar: "معايير IFRS", en: "IFRS Standards" } },
  { id: "career", label: { ar: "المهنة والتطوير", en: "Career & Development" } },
  { id: "legal", label: { ar: "الأحوال الشخصية والمواريث", en: "Personal Status & Inheritance" } },
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
      ar: ["ابدأ بمعدل خصم متحفظ ثم اختبر الحساسية", "وحّد وحدة الفترة (شهري/سنوي) مع المعدل"],
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
      en: [
        "Use a realistic real rate after inflation",
        "Add monthly contributions to see compounding",
      ],
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
      en: [
        "Capital project appraisal",
        "Comparing investment alternatives",
        "Equipment purchase decisions",
      ],
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
    standard: {
      ar: "IFRS 9 — Effective Interest Method",
      en: "IFRS 9 — Effective Interest Method",
    },
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
      en: [
        "Applying the rate to an inclusive amount as if exclusive",
        "Forgetting exempt or zero-rated items",
      ],
    },
    tips: {
      ar: ["تحقق من سجل المورد الضريبي قبل الخصم", "احفظ نسخة من الفاتورة الإلكترونية"],
      en: [
        "Verify supplier's VAT registration before reclaiming input tax",
        "Keep the e-invoice archived",
      ],
    },
  },

  // ============== Phase 2 — Finance ==============
  {
    id: "dcf",
    category: "finance",
    icon: "LineChart",
    title: { ar: "تحليل DCF بقيمة استمرارية", en: "DCF with Terminal Value" },
    short: {
      ar: "خصم التدفقات الحرة المستقبلية + قيمة استمرارية (Gordon Growth).",
      en: "Discount free cashflows plus terminal value (Gordon Growth).",
    },
    standard: { ar: "IFRS 13 · Valuation", en: "IFRS 13 · Valuation" },
    formula: "EV = Σ FCFt/(1+r)^t + [FCFn·(1+g)/(r−g)] / (1+r)^n",
    about: {
      ar: "النموذج الأكثر استخداماً في تقييم الشركات والصفقات — يجمع بين خصم التدفقات صريحة المدى وقيمة استمرارية تمثل ما بعد فترة التنبؤ.",
      en: "The workhorse of corporate valuation — explicit-period DCF combined with a perpetuity terminal value.",
    },
    whenToUse: {
      ar: ["تقييم شركة أو وحدة أعمال", "صفقات M&A", "اختبار انخفاض القيمة (CGU)"],
      en: ["Valuing a company or business unit", "M&A transactions", "Impairment of a CGU"],
    },
    commonMistakes: {
      ar: ["g ≥ r يجعل القيمة لا نهائية", "خلط FCFF بـ FCFE", "إهمال رأس المال العامل"],
      en: ["g ≥ r explodes the formula", "Mixing FCFF with FCFE", "Ignoring working-capital needs"],
    },
    tips: {
      ar: ["اضبط g ≤ نمو الناتج المحلي طويل الأجل", "اختبر حساسية r و g"],
      en: ["Keep g ≤ long-run GDP growth", "Run a sensitivity grid on r and g"],
    },
  },
  {
    id: "payback",
    category: "finance",
    icon: "Hourglass",
    title: { ar: "فترة الاسترداد المخصومة", en: "Discounted Payback" },
    short: {
      ar: "كم من السنوات يحتاج المشروع لاسترداد الاستثمار بقيمة الزمن.",
      en: "Years required to recover the investment, time-value adjusted.",
    },
    formula: "Find t: Σ CFi/(1+r)^i ≥ 0",
    about: {
      ar: "مقياس سيولة المشروع. لا يحل محل NPV لكنه مفيد لقياس المخاطرة الزمنية.",
      en: "A liquidity metric. Complements NPV by measuring how fast capital is recovered.",
    },
    whenToUse: {
      ar: ["مشاريع ذات مخاطر سيولة", "قطاعات سريعة التغير تقنياً"],
      en: ["Liquidity-sensitive projects", "Fast-moving tech sectors"],
    },
    commonMistakes: {
      ar: ["تجاهل التدفقات بعد فترة الاسترداد", "استخدامه كمعيار وحيد"],
      en: ["Ignoring cashflows after the cutoff", "Using it as the only criterion"],
    },
    tips: {
      ar: ["استخدمه دائماً مع NPV/IRR", "اضبط Hurdle مدى زمني واضح"],
      en: ["Always pair with NPV/IRR", "Define a clear cutoff period"],
    },
  },
  {
    id: "pi",
    category: "finance",
    icon: "Scale",
    title: { ar: "مؤشر الربحية (PI)", en: "Profitability Index (PI)" },
    short: {
      ar: "نسبة PV للتدفقات الداخلة إلى قيمة الاستثمار الأولي.",
      en: "Ratio of PV of inflows to the initial investment.",
    },
    formula: "PI = PV(inflows) / |Initial Outflow|",
    about: {
      ar: "أداة قوية لتصنيف المشاريع عند محدودية رأس المال — PI > 1 يضيف قيمة.",
      en: "Powerful for ranking projects under capital rationing — PI > 1 adds value.",
    },
    whenToUse: {
      ar: ["محدودية رأس المال", "ترتيب أولوية محفظة مشاريع"],
      en: ["Capital rationing", "Ranking a project portfolio"],
    },
    commonMistakes: {
      ar: ["إغفال حجم الاستثمار", "تجاهل المشاريع المتنافية"],
      en: ["Ignoring absolute project size", "Overlooking mutually exclusive projects"],
    },
    tips: {
      ar: ["استخدم PI مع NPV لقرار محفظة متوازن", "قارن مشاريع بنفس المدى"],
      en: ["Use PI alongside NPV for portfolio balance", "Compare projects with similar horizons"],
    },
  },
  {
    id: "ear",
    category: "finance",
    icon: "Repeat",
    title: { ar: "المعدل السنوي الفعلي (EAR)", en: "Effective Annual Rate (EAR)" },
    short: {
      ar: "تحويل المعدل الاسمي إلى معدل سنوي فعلي حسب تكرار التركيب.",
      en: "Convert a nominal rate into the effective annual rate.",
    },
    formula: "EAR = (1 + r/m)^m − 1",
    about: {
      ar: "أساسي لمقارنة عروض التمويل بمعدلات مختلفة التركيب (شهري، ربع سنوي، يومي).",
      en: "Essential for comparing financing offers with different compounding frequencies.",
    },
    whenToUse: {
      ar: ["مقارنة قروض", "تقييم بطاقات ائتمان", "حسابات ادخار"],
      en: ["Comparing loans", "Evaluating credit cards", "Savings products"],
    },
    commonMistakes: {
      ar: ["استخدام APR كأنه EAR", "إهمال تكرار التركيب"],
      en: ["Treating APR as EAR", "Ignoring compounding frequency"],
    },
    tips: {
      ar: ["وحّد كل العروض على EAR قبل المقارنة"],
      en: ["Normalize all offers to EAR before comparing"],
    },
  },
  {
    id: "bond",
    category: "finance",
    icon: "FileText",
    title: { ar: "تسعير السندات", en: "Bond Pricing" },
    short: {
      ar: "السعر العادل لسند بناءً على الكوبون والعائد المطلوب.",
      en: "Fair price of a coupon bond given yield and maturity.",
    },
    standard: { ar: "IFRS 9 — Amortised Cost", en: "IFRS 9 — Amortised Cost" },
    formula: "P = Σ C/(1+y)^t + F/(1+y)^n",
    about: {
      ar: "احتساب السعر النظيف للسند بأقساط كوبونية ودفعة قيمة اسمية في النهاية.",
      en: "Computes the clean price from coupons and face value cashflows.",
    },
    whenToUse: {
      ar: ["تقييم سندات الشركات والحكومية", "محاسبة الأدوات المالية"],
      en: ["Corporate and sovereign bond pricing", "Financial-instrument accounting"],
    },
    commonMistakes: {
      ar: ["نسيان قسمة الكوبون والعائد على التكرار", "خلط السعر النظيف بالقذر"],
      en: ["Forgetting to divide coupon and yield by frequency", "Confusing clean vs dirty price"],
    },
    tips: {
      ar: ["استخدم نصف-سنوي للسندات الأمريكية افتراضياً"],
      en: ["Default to semi-annual for US bonds"],
    },
  },
  {
    id: "lease",
    category: "finance",
    icon: "Building2",
    title: { ar: "التزام الإيجار IFRS 16", en: "IFRS 16 Lease Liability" },
    short: {
      ar: "احسب الالتزام الأولي وجدول الإطفاء وفق IFRS 16.",
      en: "Initial lease liability + amortization schedule under IFRS 16.",
    },
    standard: { ar: "IFRS 16 — Leases", en: "IFRS 16 — Leases" },
    formula: "Liability₀ = Σ Payment / (1+r)^t",
    about: {
      ar: "بعد IFRS 16 يجب على المستأجر إثبات حق استخدام أصل والتزام إيجار يُطفأ بطريقة الفائدة الفعلية.",
      en: "Under IFRS 16 lessees recognize a right-of-use asset and a lease liability amortized at the IBR.",
    },
    whenToUse: {
      ar: ["إيجارات عقارات ومركبات ومعدات", "تطبيق IFRS 16 لأول مرة"],
      en: ["Property, vehicle, equipment leases", "First-time IFRS 16 adoption"],
    },
    commonMistakes: {
      ar: ["استخدام معدل الفائدة المعلن بدل IBR", "إهمال خيارات التجديد المؤكدة"],
      en: ["Using stated rate instead of IBR", "Ignoring reasonably certain renewals"],
    },
    tips: {
      ar: ["وثّق IBR وفترات الخيارات بوضوح", "افصل الفائدة عن إطفاء حق الاستخدام في القوائم"],
      en: [
        "Document the IBR and option periods clearly",
        "Split interest from RoU depreciation in disclosures",
      ],
    },
  },

  // ============== Phase 2 — Tax ==============
  {
    id: "vat-return",
    category: "tax",
    icon: "ClipboardList",
    official: true,
    requestServiceId: "vat-declaration",
    title: {
      ar: "إقرار ضريبة القيمة المضافة (نموذج ZATCA الرسمي)",
      en: "VAT Return (Official ZATCA Form)",
    },
    short: {
      ar: "محاكي إقرار ضريبة القيمة المضافة الشهري/الربعي مع تصدير PDF/Excel.",
      en: "Saudi VAT return simulator with PDF/Excel export and AI explanation.",
    },
    standard: {
      ar: "ZATCA — لائحة ضريبة القيمة المضافة",
      en: "ZATCA — VAT Implementing Regulations",
    },
    formula: "Net VAT = Output VAT − Deductible Input VAT",
    about: {
      ar: "نموذج كامل لإقرار ضريبة القيمة المضافة يشمل المبيعات الخاضعة والصفرية والمعفاة والمشتريات وضريبة المدخلات، مع شرح ذكي لكل حقل وأرشيف للإقرارات السابقة.",
      en: "Full Saudi VAT return form covering taxable / zero-rated / exempt sales, purchases and input VAT, with AI explanations and saved declaration archive.",
    },
    whenToUse: {
      ar: ["إعداد الإقرار الشهري أو الربعي قبل الرفع لـ ZATCA", "مراجعة دقة الإقرار قبل التقديم"],
      en: [
        "Preparing monthly/quarterly returns before ZATCA submission",
        "Auditing return accuracy before filing",
      ],
    },
    commonMistakes: {
      ar: ["إدراج المبيعات شاملة الضريبة في خانة الخاضعة", "خصم مدخلات غير مؤهلة كمصاريف الضيافة"],
      en: [
        "Including VAT-inclusive amounts in taxable sales",
        "Deducting non-eligible input VAT such as entertainment",
      ],
    },
    tips: {
      ar: [
        "احفظ كل فترة في الأرشيف لتتبّع الالتزام",
        "استخدم زر الذكاء الاصطناعي لتفسير صافي الضريبة",
      ],
      en: [
        "Save every period to the archive to track compliance",
        "Use the AI button to interpret the net VAT figure",
      ],
    },
  },
  {
    id: "zakat-declaration",
    category: "tax",
    icon: "FileSpreadsheet",
    official: true,
    requestServiceId: "zakat-declaration",
    title: {
      ar: "الإقرار الزكوي والضريبي (نموذج ZATCA الرسمي)",
      en: "Zakat & Tax Declaration (Official ZATCA Form)",
    },
    short: {
      ar: "محاكي شامل لإعداد الإقرار الزكوي السنوي مع التسويات وتقارير قابلة للطباعة.",
      en: "Complete annual Zakat declaration simulator with adjustments and printable reports.",
    },
    standard: { ar: "ZATCA — لائحة جباية الزكاة", en: "ZATCA — Zakat Collection Regulations" },
    formula:
      "Zakat Base = Capital + Retained + Reserves − Investments − Fixed Assets ± Adjustments",
    about: {
      ar: "أداة احترافية تساعدك على بناء الوعاء الزكوي بالكامل وحساب الزكاة المستحقة بنسبة 2.5%، مع تصدير PDF و Excel وأرشفة الإقرارات.",
      en: "Professional tool to build the full Zakat base and compute the 2.5% Zakat due, with PDF & Excel export and archive support.",
    },
    whenToUse: {
      ar: ["تحضير الإقرار الزكوي السنوي", "تقدير الزكاة قبل إقفال السنة المالية"],
      en: ["Preparing the annual Zakat return", "Estimating Zakat before fiscal year-end close"],
    },
    commonMistakes: {
      ar: ["عدم خصم الاستثمارات المزدوجة الزكاة", "نسيان تسويات المخصصات"],
      en: ["Failing to deduct already-zakated investments", "Forgetting provision adjustments"],
    },
    tips: {
      ar: ["استخدم الفترة بصيغة سنة-Y مثل 2026-Y", "اربط كل تسوية بمرفق داعم في ملفك"],
      en: ["Use a period label like 2026-Y", "Tie every adjustment to a supporting workpaper"],
    },
  },
  {
    id: "zakat",
    category: "tax",
    icon: "Coins",
    title: { ar: "حاسبة الزكاة", en: "Zakat Calculator" },
    short: {
      ar: "احسب الزكاة على الوعاء الزكوي وفق نسبة ZATCA.",
      en: "Compute Zakat on the Zakat base per ZATCA rate.",
    },
    standard: { ar: "ZATCA — لائحة الزكاة", en: "ZATCA — Zakat Regulations" },
    formula: "Zakat = Base × 2.5775%",
    about: {
      ar: "تطبق الهيئة 2.5775% (تعويضاً لفرق السنة الهجرية/الميلادية) على الوعاء بعد التسويات.",
      en: "ZATCA applies 2.5775% (lunar/solar adjustment) on the adjusted Zakat base.",
    },
    whenToUse: {
      ar: ["إعداد إقرار الزكاة السنوي", "تقدير الالتزام الزكوي"],
      en: ["Preparing the annual Zakat return", "Estimating Zakat liability"],
    },
    commonMistakes: {
      ar: ["خلط الوعاء الزكوي مع الربح المحاسبي", "نسيان طرح الموجودات المعفاة"],
      en: ["Confusing Zakat base with accounting profit", "Forgetting to exclude exempt assets"],
    },
    tips: {
      ar: ["وثّق التسويات بمرفقات مرقمة في الإقرار"],
      en: ["Document base adjustments with numbered schedules"],
    },
  },
  {
    id: "wht",
    category: "tax",
    icon: "Scissors",
    title: { ar: "ضريبة الاستقطاع (WHT)", en: "Withholding Tax (WHT)" },
    short: {
      ar: "احسب قيمة الاستقطاع والصافي المستحق للمورد غير المقيم.",
      en: "Compute withholding and net payable to a non-resident supplier.",
    },
    standard: { ar: "نظام ضريبة الدخل السعودي", en: "Saudi Income Tax Law" },
    formula: "WHT = Invoice × rate",
    about: {
      ar: "تطبق نسب 5% / 15% / 20% حسب نوع الخدمة على المدفوعات لغير المقيمين.",
      en: "Rates of 5% / 15% / 20% apply to non-resident payments depending on service type.",
    },
    whenToUse: {
      ar: ["خدمات استشارية لمزود أجنبي", "أتعاب إدارية أو فنية", "إيجار أصول"],
      en: [
        "Consulting services from foreign vendors",
        "Management or technical fees",
        "Equipment rentals",
      ],
    },
    commonMistakes: {
      ar: ["نسيان السداد خلال 10 أيام من نهاية الشهر", "تطبيق نسبة خاطئة"],
      en: ["Missing the 10-day filing deadline", "Applying the wrong rate"],
    },
    tips: {
      ar: ["راجع اتفاقيات تجنب الازدواج الضريبي قبل التطبيق"],
      en: ["Check the relevant Double Tax Treaty before applying"],
    },
  },
  {
    id: "corp-tax",
    category: "tax",
    icon: "Landmark",
    title: { ar: "ضريبة الدخل على الشركات", en: "Corporate Income Tax" },
    short: {
      ar: "احسب ضريبة الدخل والصافي بعد الضريبة على الربح الخاضع.",
      en: "Compute income tax and after-tax profit on taxable income.",
    },
    formula: "Tax = Taxable Profit × rate",
    about: {
      ar: "تطبق 20% على الشركات غير السعودية، مع نسب خاصة لبعض القطاعات (نفط، غاز).",
      en: "20% applies to non-Saudi shareholders, with special rates for oil and gas sectors.",
    },
    whenToUse: {
      ar: ["تقدير العبء الضريبي السنوي", "تخطيط ضريبي"],
      en: ["Estimating annual tax burden", "Tax planning"],
    },
    commonMistakes: {
      ar: ["خلط الربح المحاسبي بالخاضع للضريبة", "إهمال المصروفات غير المسموح بها"],
      en: ["Mixing book profit with taxable profit", "Ignoring non-deductible expenses"],
    },
    tips: {
      ar: ["جهّز كشف توفيق بين الربح المحاسبي والضريبي"],
      en: ["Prepare a book-to-tax reconciliation schedule"],
    },
  },
  {
    id: "deferred-tax",
    category: "tax",
    icon: "Layers",
    title: { ar: "الضريبة المؤجلة IAS 12", en: "Deferred Tax (IAS 12)" },
    short: {
      ar: "احسب الفروق المؤقتة والأصول/الالتزامات الضريبية المؤجلة.",
      en: "Compute temporary differences and DTA / DTL.",
    },
    standard: { ar: "IAS 12 — Income Taxes", en: "IAS 12 — Income Taxes" },
    formula: "DT = (Carrying Amount − Tax Base) × rate",
    about: {
      ar: "تنشأ الضريبة المؤجلة عن فروق توقيت بين الأساس المحاسبي والضريبي، وتقاس بمعدل الضريبة المتوقع عند الاسترداد.",
      en: "Deferred tax arises from timing differences between accounting and tax bases, measured at the rate expected on reversal.",
    },
    whenToUse: {
      ar: ["إعداد قوائم مالية وفق IFRS", "اختلاف إهلاك محاسبي عن ضريبي"],
      en: ["IFRS financial statements", "Different book vs tax depreciation"],
    },
    commonMistakes: {
      ar: ["تطبيق المعدل الحالي بدل المتوقع", "تجاهل خسائر مرحلية قابلة للاستخدام"],
      en: [
        "Applying current rate instead of enacted future rate",
        "Ignoring usable carry-forward losses",
      ],
    },
    tips: {
      ar: ["راجع احتمالية تحقق DTA قبل الإثبات", "أفصح عن مكونات الضريبة في الإيضاحات"],
      en: ["Assess DTA recoverability before recognition", "Disclose components in the tax note"],
    },
  },

  // ============== Phase 2 — Analysis ==============
  {
    id: "ratios",
    category: "analysis",
    icon: "PieChart",
    title: { ar: "لوحة النسب المالية", en: "Financial Ratios Dashboard" },
    short: {
      ar: "كل نسب السيولة والربحية والملاءة والكفاءة في لوحة واحدة.",
      en: "Liquidity, profitability, solvency, and efficiency ratios in one dashboard.",
    },
    formula: "15+ ratios from one compact input set",
    about: {
      ar: "أداة قراءة سريعة للأداء المالي للشركة عبر 15 نسبة معيارية مع رسومات بيانية مقارنة.",
      en: "A 15-ratio one-look financial readout with comparative visuals.",
    },
    whenToUse: {
      ar: ["تحليل قوائم مالية لشركة", "إعداد تقرير إدارة دورية", "Due Diligence"],
      en: ["Company financial analysis", "Periodic management reporting", "Due diligence"],
    },
    commonMistakes: {
      ar: ["استخدام أرقام نهاية الفترة بدلاً من المتوسطات", "تجاهل الموسمية"],
      en: ["Using period-end values instead of averages", "Ignoring seasonality"],
    },
    tips: {
      ar: ["قارن بالقطاع وبفترات سابقة دائماً"],
      en: ["Always benchmark against industry and prior periods"],
    },
  },

  // ============== Phase 2 — Excel ==============
  {
    id: "depreciation",
    category: "excel",
    icon: "TrendingDown",
    title: { ar: "حاسبة الإهلاك", en: "Depreciation Calculator" },
    short: {
      ar: "جدول إهلاك بالطرق المختلفة (SL / DDB / SYD).",
      en: "Depreciation schedules: SL / DDB / SYD.",
    },
    standard: { ar: "IAS 16 — Property Plant & Equipment", en: "IAS 16 — PP&E" },
    formula: "SL · DDB · Sum-of-Years Digits",
    about: {
      ar: "احتساب الإهلاك السنوي والقيمة الدفترية باختلاف الطرق المتعارف عليها.",
      en: "Annual expense and book value across the most common depreciation methods.",
    },
    whenToUse: {
      ar: ["شراء أصل ثابت جديد", "مراجعة سياسات إهلاك", "إعداد ميزانية رأسمالية"],
      en: ["New fixed asset purchase", "Reviewing depreciation policy", "Capital budgeting"],
    },
    commonMistakes: {
      ar: ["خلط القسط الثابت بالمتناقص", "تجاهل القيمة المتبقية في DDB"],
      en: ["Confusing SL with declining methods", "Ignoring salvage floor in DDB"],
    },
    tips: {
      ar: ["راجع العمر الإنتاجي سنوياً (IAS 8)"],
      en: ["Review useful life annually (IAS 8)"],
    },
  },
  {
    id: "inventory",
    category: "excel",
    icon: "Package",
    title: { ar: "تقييم المخزون FIFO/LIFO/WA", en: "Inventory Valuation FIFO/LIFO/WA" },
    short: {
      ar: "احسب COGS وقيمة المخزون النهائي بطرق التدفق المختلفة.",
      en: "Compute COGS and ending inventory under different cost-flow methods.",
    },
    standard: { ar: "IAS 2 — Inventories", en: "IAS 2 — Inventories" },
    formula: "COGS + Ending Inventory = Cost of Goods Available",
    about: {
      ar: "يسمح IAS 2 بـ FIFO أو المتوسط المرجح فقط؛ LIFO ممنوع لكنه شائع للأغراض الإدارية والمقارنة.",
      en: "IAS 2 allows FIFO or Weighted Average only; LIFO is prohibited but useful for managerial comparison.",
    },
    whenToUse: {
      ar: ["تقييم مخزون نهاية الفترة", "تحليل تأثير التضخم على التكلفة"],
      en: ["Period-end inventory valuation", "Inflation impact on cost"],
    },
    commonMistakes: {
      ar: ["استخدام LIFO في تقارير IFRS", "إهمال قاعدة LCNRV"],
      en: ["Using LIFO under IFRS", "Ignoring lower of cost / NRV rule"],
    },
    tips: {
      ar: ["قارن FIFO و WA لقياس أثر تذبذب الأسعار"],
      en: ["Compare FIFO vs WA to gauge price-swing impact"],
    },
  },
  {
    id: "office-ai",
    category: "excel",
    icon: "Sparkles",
    title: { ar: "مساعد Excel & Office الذكي", en: "Excel & Office AI Assistant" },
    short: {
      ar: "اسأل عن أي دالة Excel أو اشرح مشكلتك بلغتك، واحصل على صيغة جاهزة + شرح + كود VBA.",
      en: "Ask about any Excel function or describe a problem — get ready formulas, explanations, and VBA code.",
    },
    standard: {
      ar: "Microsoft Office · Excel · VBA · Power Query",
      en: "Microsoft Office · Excel · VBA · Power Query",
    },
    formula: "AI Chat · Functions · VBA · Power Query · DAX",
    about: {
      ar: "مساعد ذكي يفهم العربية والإنجليزية، يجاوبك عن دوال Excel وWord وPowerPoint وOutlook بمثال عملي وصيغة جاهزة للنسخ. يدعم VBA و Power Query و DAX و Pivot Tables.",
      en: "AI assistant fluent in Arabic and English, answering questions about Excel, Word, PowerPoint, and Outlook with examples and copy-ready formulas. Supports VBA, Power Query, DAX, and Pivot Tables.",
    },
    whenToUse: {
      ar: [
        "نسيت اسم دالة وتريد التذكير بصيغتها",
        "تواجه مشكلة بيانات ولا تعرف الدالة المناسبة",
        "تحتاج كود VBA أو Power Query أو DAX جاهز",
        "تريد مقارنة بين دالتين أو طريقتين",
      ],
      en: [
        "Forgot a function name and need its syntax",
        "Stuck on a data problem and don't know the right function",
        "Need ready-to-use VBA / Power Query / DAX",
        "Comparing two functions or two approaches",
      ],
    },
    commonMistakes: {
      ar: [
        "نسخ الصيغة بدون تعديل المراجع",
        "استخدام , أو ; حسب إعدادات الجهاز",
        "إهمال قفل المراجع بـ $",
      ],
      en: [
        "Pasting a formula without adapting cell refs",
        "Using , vs ; depending on locale",
        "Forgetting to lock refs with $",
      ],
    },
    tips: {
      ar: [
        "كن دقيقاً في وصف المشكلة (شكل البيانات + النتيجة المطلوبة)",
        "اطلب نسخة بـ XLOOKUP بدل VLOOKUP حيث أمكن",
        "اسأل عن أداء الصيغة على ملفات كبيرة",
      ],
      en: [
        "Be specific (data shape + expected output)",
        "Ask for an XLOOKUP version instead of VLOOKUP when possible",
        "Ask about formula performance on large files",
      ],
    },
  },

  // ============== Career ==============
  {
    id: "cv-builder",
    category: "career",
    icon: "FileUser",
    title: { ar: "منشئ السيرة الذاتية بالذكاء الاصطناعي", en: "AI CV Builder" },
    short: {
      ar: "أنشئ سيرة ذاتية احترافية بمساعدة الذكاء الاصطناعي مع قوالب فاخرة وتصدير PDF.",
      en: "Build a professional CV with AI assistance, premium templates, and PDF export.",
    },
    standard: { ar: "Career Tools", en: "Career Tools" },
    formula: "AI + Premium Templates + PDF",
    about: {
      ar: "اختر قالباً، أدخل بياناتك في كل قسم، حسّن النصوص بالذكاء الاصطناعي بنقرة واحدة، أرفع صورتك الشخصية (للقوالب المناسبة)، ثم صدّر سيرتك بصيغة PDF بجودة طباعة.",
      en: "Pick a template, fill in each section, polish text with AI in one click, upload your photo (for photo templates), and export a print-quality PDF.",
    },
    whenToUse: {
      ar: ["التقديم على وظيفة جديدة", "تحديث السيرة الذاتية بشكل دوري", "التحضير لمقابلات تنفيذية"],
      en: ["Applying for a new role", "Periodic CV refresh", "Preparing for executive interviews"],
    },
    commonMistakes: {
      ar: ["كتابة مهام بدل إنجازات", "غياب الأرقام والنتائج", "استخدام قالب لا يناسب المجال"],
      en: [
        "Listing duties instead of achievements",
        "Missing metrics and outcomes",
        "Wrong template for your field",
      ],
    },
    tips: {
      ar: [
        "ابدأ بأفعال قوية (قُدت، خفضت، حسّنت)",
        "أضف أرقاماً ونسباً",
        "اجعل السيرة ضمن صفحتين كحد أقصى",
      ],
      en: [
        "Lead with strong verbs (Led, Reduced, Improved)",
        "Add numbers and percentages",
        "Keep your CV within 2 pages",
      ],
    },
  },
  {
    id: "typing-test",
    category: "career",
    icon: "Keyboard",
    title: { ar: "اختبار الكتابة السريعة", en: "Typing Speed Test" },
    short: {
      ar: "قِس سرعة كتابتك بالكلمات في الدقيقة (WPM) مع دعم العربية والإنجليزية وعدة لغات.",
      en: "Measure your typing speed in words per minute (WPM) with Arabic, English, and more.",
    },
    standard: { ar: "Career Tools", en: "Career Tools" },
    formula: "WPM = (Correct chars / 5) / minutes",
    about: {
      ar: "تمرين تفاعلي لقياس سرعة الكتابة والدقة، مع مؤقت قابل للضبط (30/60/120 ثانية) وحفظ أفضل نتيجة محلياً.",
      en: "Interactive typing drill measuring speed and accuracy with adjustable timer (30/60/120s) and local best-score persistence.",
    },
    whenToUse: {
      ar: [
        "تحسين سرعة إدخال البيانات",
        "التحضير لاختبارات السكرتارية",
        "زيادة إنتاجية العمل المكتبي",
      ],
      en: [
        "Improve data-entry speed",
        "Prepare for secretarial tests",
        "Boost office productivity",
      ],
    },
    commonMistakes: {
      ar: ["التركيز على السرعة بدل الدقة", "النظر إلى لوحة المفاتيح أثناء الكتابة"],
      en: ["Prioritizing speed over accuracy", "Looking at the keyboard while typing"],
    },
    tips: {
      ar: ["تدرّب يومياً 10 دقائق", "ابدأ ببطء وزد السرعة تدريجياً", "حافظ على وضع الأصابع الصحيح"],
      en: ["Practice 10 minutes daily", "Start slow and build up", "Keep proper finger position"],
    },
  },
  {
    id: "exam-prep",
    category: "career",
    icon: "GraduationCap",
    title: { ar: "تدريب الامتحانات المهنية", en: "Professional Exam Trainer" },
    short: {
      ar: "تدرّب على أسئلة IFRS وCMA وCPA وFMAA وACCA وCFA مع شرح المصدر وإمكانية رفع بنوك أسئلة.",
      en: "Practice IFRS, CMA, CPA, FMAA, ACCA, and CFA questions with sourced explanations and upload your own question banks.",
    },
    standard: {
      ar: "IFRS · CMA · CPA · FMAA · ACCA · CFA",
      en: "IFRS · CMA · CPA · FMAA · ACCA · CFA",
    },
    formula: "MCQ + Sourced explanation + AI-extracted custom banks",
    about: {
      ar: "موسوعة أسئلة اختيار متعدد للامتحانات المحاسبية والمالية المهنية، مع شروحات مأخوذة من مراجع معروفة (Gleim, Wiley, IMA, IFRS). يمكنك رفع ملفك الخاص وسيقوم الذكاء الاصطناعي بتحليله واستخراج الأسئلة بالعربية والإنجليزية تلقائياً.",
      en: "MCQ bank for professional accounting and finance exams with explanations sourced from Gleim, Wiley, IMA, and IFRS. Upload your own bank and AI will extract MCQs in Arabic and English automatically.",
    },
    whenToUse: {
      ar: [
        "التحضير لاختبارات الشهادات المهنية",
        "مراجعة سريعة قبل الامتحان",
        "بناء بنك أسئلة شخصي",
      ],
      en: [
        "Preparing for professional certification exams",
        "Quick pre-exam review",
        "Building a personal question bank",
      ],
    },
    commonMistakes: {
      ar: ["الحفظ بدون فهم", "تجاهل الشرح والمصدر", "التركيز على مسار واحد فقط"],
      en: [
        "Memorizing without understanding",
        "Ignoring explanations and sources",
        "Focusing on only one track",
      ],
    },
    tips: {
      ar: [
        "اقرأ الشرح حتى لو أجبت صحيحاً",
        "نوّع المسارات يومياً",
        "ارفع أسئلة الكتب المعتمدة لإثراء البنك",
      ],
      en: [
        "Read the explanation even on correct answers",
        "Rotate tracks daily",
        "Upload textbook banks to enrich the pool",
      ],
    },
  },
  {
    id: "financial-statements",
    category: "ifrs",
    icon: "FileBarChart",
    official: true,
    requestServiceId: "financial-reports",
    title: { ar: "معدّ القوائم المالية الكاملة", en: "Full Financial Statements Builder" },
    short: {
      ar: "استورد ميزان المراجعة وأنشئ القوائم المالية الخمس كاملة وفق IFRS مع احتساب الزكاة تلقائياً.",
      en: "Import a trial balance and generate all five IFRS financial statements, with Zakat computed automatically.",
    },
    standard: { ar: "IAS 1 · IAS 7 · ZATCA", en: "IAS 1 · IAS 7 · ZATCA" },
    formula: "Assets = Liabilities + Equity",
    about: {
      ar: "أداة احترافية تستورد ميزان المراجعة (Excel/CSV)، تصنّف الحسابات تلقائياً مع إمكانية المراجعة والتعديل، وتنشئ الميزانية وقائمة الدخل والدخل الشامل والتغيرات في حقوق الملكية والتدفقات النقدية، مع احتساب الوعاء الزكوي وفق لائحة هيئة الزكاة والضريبة والجمارك. تتضمن خطوة معاينة إلزامية قبل الطباعة أو التصدير لتفادي الأخطاء.",
      en: "Professional tool that imports a trial balance (Excel/CSV), auto-classifies accounts with a review/override step, and produces the Balance Sheet, Income Statement, Statement of Comprehensive Income, Statement of Changes in Equity, and Statement of Cash Flows — plus the ZATCA Zakat base. Includes a mandatory preview step before printing or exporting.",
    },
    whenToUse: {
      ar: [
        "إعداد القوائم المالية السنوية أو الدورية من ميزان المراجعة",
        "تحضير مسودة للمراجع قبل التدقيق",
        "تقدير الوعاء الزكوي بسرعة من بيانات فعلية",
      ],
      en: [
        "Preparing periodic/annual financial statements from a trial balance",
        "Drafting a working version before audit",
        "Quickly estimating the Zakat base from real account balances",
      ],
    },
    commonMistakes: {
      ar: [
        "ترك حسابات بدون تصنيف قبل الطباعة",
        "نسيان تسويات التدفقات النقدية اليدوية (لا تُشتق من ميزان مراجعة واحد فقط)",
        "عدم مراجعة صفحة المعاينة قبل الطباعة",
      ],
      en: [
        "Leaving accounts unclassified before printing",
        "Skipping the manual cash-flow adjustments (not derivable from a single trial balance alone)",
        "Not reviewing the preview page before printing",
      ],
    },
    tips: {
      ar: [
        "تحقق من توازن ميزان المراجعة أولاً قبل التصنيف",
        "زوّد الأداة بميزان مراجعة الفترة السابقة يدوياً عبر التسويات لتحصل على تدفقات نقدية أدق",
        "راجع مؤشرات التوازن (✓) في صفحة المعاينة قبل أي طباعة",
      ],
      en: [
        "Confirm the trial balance is balanced before classifying",
        "Feed prior-period movements into the manual adjustments for a more accurate cash flow",
        "Check the balance indicators (✓) on the preview page before printing",
      ],
    },
  },
  {
    id: "inheritance",
    category: "legal",
    icon: "Users",
    title: { ar: "حاسبة المواريث الشرعية", en: "Islamic Inheritance Calculator" },
    short: {
      ar: "توزيع التركة على الورثة وفق الفرائض الشرعية، مع تفصيل أصول التركة (عقارات، أرصدة، ذهب، شركات) بعملات متعددة.",
      en: "Distribute an estate among heirs per Islamic inheritance rules, with an itemized multi-currency breakdown of assets (real estate, cash, gold, business shares).",
    },
    standard: { ar: "علم الفرائض — الفقه السني", en: "Fara'id — Sunni jurisprudence" },
    about: {
      ar: "تحسب الأداة أنصبة الورثة (الزوجين، الأبوين، الأجداد، الأبناء وأبناء الابن، الإخوة) من صافي التركة بعد الديون والتجهيز والوصية، وفق القواعد المتفق عليها بين المذاهب السنية والمعتمدة غالباً في المحاكم السعودية. حالة واحدة معقدة ومختلف فيها (اجتماع الجد لأب مع الإخوة) تُعرض كـ'تحتاج مراجعة قاضٍ' بدل حسابها تلقائياً.",
      en: "Computes each heir's share (spouses, parents, grandparents, children and son's children, siblings) from the net estate after debts, funeral costs and any bequest, following the rules agreed upon across Sunni schools and generally applied in Saudi courts. One genuinely disputed case (a paternal grandfather alongside siblings) is flagged as 'needs a judge's review' rather than auto-calculated.",
    },
    whenToUse: {
      ar: [
        "تقدير أولي لتوزيع تركة قبل زيارة المحكمة",
        "شرح حصص الورثة للعائلة بشكل شفاف قبل القسمة",
        "التحقق من حساب صك حصر ورثة رسمي",
      ],
      en: [
        "A preliminary estimate before visiting the Sharia court",
        "Explaining heirs' shares transparently to the family before division",
        "Cross-checking an official heirs-restriction deed",
      ],
    },
    commonMistakes: {
      ar: [
        "توزيع التركة الإجمالية دون خصم الديون وتكاليف التجهيز أولاً",
        "تجاوز حد الثلث في الوصية دون موافقة الورثة",
        "إغفال أثر عدد الإخوة على خفض نصيب الأم إلى السدس حتى لو كانوا محجوبين",
      ],
      en: [
        "Distributing the gross estate without deducting debts and funeral costs first",
        "Exceeding the one-third bequest cap without heir consent",
        "Overlooking that 2+ siblings reduce the mother's share to a sixth even if the siblings themselves are excluded",
      ],
    },
    tips: {
      ar: [
        "أدخل الديون والوصية بدقة — التوزيع يُبنى على صافي التركة فقط",
        "عند اجتماع الجد مع الإخوة راجع قاضياً شرعياً؛ هذه الحالة لا تُحسب هنا تلقائياً",
      ],
      en: [
        "Enter debts and the bequest accurately — distribution is based on the net estate only",
        "When a grandfather and siblings co-exist, consult a Sharia judge; that case isn't auto-calculated here",
      ],
    },
  },
];

export const toolById = (id: string) => TOOLS.find((t) => t.id === id);

export const labelByCategory = (c: ToolCategory, lang: Lang) =>
  CATEGORIES.find((x) => x.id === c)?.label[lang] ?? c;
