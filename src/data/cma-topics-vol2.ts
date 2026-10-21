import type { CmaDomain, CmaStudyUnit, CmaTopic } from "@/data/cma-topics";

/** Sections and printed PDF starting pages from the supplied 2025 MCQ Bank, Volume 2. */
const sections: {
  unit: CmaStudyUnit;
  section: number;
  page: number;
  id: string;
  ar: string;
  en: string;
  descriptionAr: string;
  descriptionEn: string;
}[] = [
  {
    unit: 11,
    section: 1,
    page: 5,
    id: "su11-value-chain",
    ar: "تحليل سلسلة القيمة",
    en: "Value-Chain Analysis",
    descriptionAr:
      "تحديد الأنشطة المضيفة للقيمة وغير المضيفة لها ومراحل المنتج من التصميم إلى خدمة العميل.",
    descriptionEn:
      "Trace value-adding activities from design through customer service and identify avoidable work.",
  },
  {
    unit: 11,
    section: 2,
    page: 26,
    id: "su11-process-improvement",
    ar: "أدوات تحسين العمليات",
    en: "Other Process Improvement Tools",
    descriptionAr:
      "تطبيق إعادة هندسة العمليات، الجودة، المقارنة المرجعية وتكاليف الوقاية والإخفاق.",
    descriptionEn:
      "Use reengineering, benchmarking, quality measures and prevention/failure cost analysis.",
  },
  {
    unit: 12,
    section: 1,
    page: 56,
    id: "su12-regression",
    ar: "الارتباط والانحدار",
    en: "Correlation and Regression",
    descriptionAr: "تقدير علاقة المتغيرات بالانحدار وفحص قوة التفسير وحدود التنبؤ.",
    descriptionEn:
      "Estimate linear relationships and evaluate fit, correlation and forecast limitations.",
  },
  {
    unit: 12,
    section: 2,
    page: 84,
    id: "su12-learning-curve",
    ar: "منحنى التعلم",
    en: "Learning Curve Analysis",
    descriptionAr: "حساب أثر تضاعف الإنتاج على متوسط الوقت أو الزمن للوحدة التالية.",
    descriptionEn: "Forecast cumulative average and incremental labor time as output doubles.",
  },
  {
    unit: 12,
    section: 3,
    page: 121,
    id: "su12-expected-value",
    ar: "القيمة المتوقعة وتحليل الحساسية",
    en: "Expected Value and Sensitivity Analysis",
    descriptionAr: "وزن النتائج بالاحتمالات واختبار حساسية القرار للافتراضات.",
    descriptionEn: "Weight outcomes by probability and test how input changes affect decisions.",
  },
  {
    unit: 12,
    section: 4,
    page: 187,
    id: "su12-strategic-management",
    ar: "الإدارة الاستراتيجية",
    en: "Strategic Management",
    descriptionAr: "تقييم الميزة التنافسية والبيئة والخيارات الاستراتيجية ومقاييس التنفيذ.",
    descriptionEn: "Assess competitive position, external forces and strategic choices.",
  },
  {
    unit: 12,
    section: 5,
    page: 209,
    id: "su12-strategic-planning",
    ar: "التخطيط الاستراتيجي",
    en: "Strategic Planning",
    descriptionAr: "ربط الرسالة والأهداف طويلة الأجل بالتحليل البيئي والخطط التشغيلية.",
    descriptionEn: "Connect mission, long-range objectives and environmental analysis to plans.",
  },
  {
    unit: 13,
    section: 1,
    page: 220,
    id: "su13-budget-roles",
    ar: "أدوار الموازنات وعملية إعدادها",
    en: "Roles of Budgets and the Budgeting Process",
    descriptionAr: "تحديد وظائف الموازنة ومسؤوليات المشاركة والرقابة ومخاطر التراخي.",
    descriptionEn: "Explain planning, coordination, participation, control and budgetary slack.",
  },
  {
    unit: 13,
    section: 2,
    page: 259,
    id: "su13-standards",
    ar: "الموازنات والتكاليف المعيارية",
    en: "Budgeting and Standard Costs",
    descriptionAr: "تمييز المعايير المثالية والعملية وتحديد الافتراضات اللازمة لإعدادها.",
    descriptionEn: "Distinguish ideal and attainable standards and their use in budgeting.",
  },
  {
    unit: 13,
    section: 3,
    page: 272,
    id: "su13-master-budget",
    ar: "الموازنة الشاملة",
    en: "The Master Budget",
    descriptionAr: "ترتيب موازنات المبيعات والإنتاج والتشغيل والنقد والقوائم التقديرية.",
    descriptionEn: "Sequence sales, production, operating and financial budgets.",
  },
  {
    unit: 13,
    section: 4,
    page: 296,
    id: "su13-budget-methods",
    ar: "منهجيات إعداد الموازنات",
    en: "Budget Methodologies",
    descriptionAr: "المقارنة بين الموازنة الثابتة والمتحركة والصفرية والمبنية على الأنشطة.",
    descriptionEn: "Compare static, flexible, rolling, zero-based and activity-based methods.",
  },
  {
    unit: 14,
    section: 1,
    page: 323,
    id: "su14-sales-budget",
    ar: "توقع المبيعات وموازنتها",
    en: "Sales Forecasts and the Sales Budget",
    descriptionAr: "تقدير الكمية وسعر البيع والمبيعات المتوقعة باستخدام اتجاهات السوق.",
    descriptionEn: "Build sales forecasts and revenue budgets from units and prices.",
  },
  {
    unit: 14,
    section: 2,
    page: 338,
    id: "su14-production-materials",
    ar: "موازنات الإنتاج والمواد المباشرة",
    en: "Production and Direct Materials Budgets",
    descriptionAr: "اشتقاق الإنتاج المطلوب ومشتريات المواد بعد تعديل مخزون أول وآخر المدة.",
    descriptionEn:
      "Derive required production and material purchases from sales and inventory policies.",
  },
  {
    unit: 14,
    section: 3,
    page: 399,
    id: "su14-other-operating-budgets",
    ar: "موازنات التشغيل الأخرى",
    en: "Other Operating Budgets",
    descriptionAr: "حساب الأجور المباشرة والتكاليف الصناعية والتشغيلية وربطها بالإنتاج.",
    descriptionEn: "Prepare labor, overhead, selling and administrative budgets.",
  },
  {
    unit: 14,
    section: 4,
    page: 424,
    id: "su14-capital-cash-collections",
    ar: "الموازنة الرأسمالية والتحصيلات النقدية",
    en: "Capital Budget and Cash Collections",
    descriptionAr: "جدولة المقبوضات حسب أنماط التحصيل وتمييزها عن الإيراد المحاسبي.",
    descriptionEn: "Schedule cash collections across sales periods and budget capital spending.",
  },
  {
    unit: 14,
    section: 5,
    page: 480,
    id: "su14-cash-budget",
    ar: "المدفوعات والموازنة النقدية",
    en: "Cash Disbursements and the Cash Budget",
    descriptionAr: "توقيت المدفوعات وحساب الفائض والاقتراض اللازم والرصيد الأدنى.",
    descriptionEn: "Time payments and determine financing needs against a minimum cash balance.",
  },
  {
    unit: 14,
    section: 6,
    page: 525,
    id: "su14-pro-forma",
    ar: "القوائم المالية التقديرية",
    en: "Pro Forma Financial Statements",
    descriptionAr: "بناء قائمة الدخل والمركز المالي والتدفقات المتوقعة من الموازنات.",
    descriptionEn: "Translate operating and cash budgets into forecast financial statements.",
  },
  {
    unit: 15,
    section: 1,
    page: 563,
    id: "su15-variance-overview",
    ar: "مدخل تحليل الانحرافات",
    en: "Variance Analysis Overview",
    descriptionAr: "تحليل الفرق بين الفعلي والمخطط وربط الانحراف بالمسؤولية والسياق.",
    descriptionEn: "Interpret actual-versus-budget differences and management responsibility.",
  },
  {
    unit: 15,
    section: 2,
    page: 576,
    id: "su15-flexible-variance",
    ar: "انحرافات الموازنة الثابتة والمرنة",
    en: "Static and Flexible Budget Variances",
    descriptionAr: "فصل أثر حجم النشاط عن انحرافات الإنفاق في الموازنة المعدّلة.",
    descriptionEn: "Separate sales volume effects from flexible-budget performance variances.",
  },
  {
    unit: 15,
    section: 3,
    page: 617,
    id: "su15-materials-variance",
    ar: "انحرافات المواد المباشرة",
    en: "Direct Materials Variances",
    descriptionAr: "حساب انحراف السعر والكمية وتحليل توقيت الشراء والاستخدام.",
    descriptionEn:
      "Compute direct-material price and quantity variances from actual and standard inputs.",
  },
  {
    unit: 15,
    section: 4,
    page: 662,
    id: "su15-labor-variance",
    ar: "انحرافات العمل المباشر",
    en: "Direct Labor Variances",
    descriptionAr: "حساب انحراف معدل الأجر والكفاءة وتفسير أثر التدريب والوقت.",
    descriptionEn: "Compute direct-labor rate and efficiency variances.",
  },
  {
    unit: 15,
    section: 5,
    page: 698,
    id: "su15-mix-yield",
    ar: "انحرافات المزيج والمردود",
    en: "Mix and Yield Variances",
    descriptionAr: "فصل أثر نسب المدخلات عن كفاءة استهلاكها الكلية.",
    descriptionEn: "Decompose input efficiency into mix and yield effects.",
  },
  {
    unit: 15,
    section: 6,
    page: 718,
    id: "su15-overhead-variance",
    ar: "انحرافات التكاليف الصناعية غير المباشرة",
    en: "Overhead Variances",
    descriptionAr: "تحليل إنفاق وكفاءة المتغير وحجم وإنتاجية الثابت الصناعي.",
    descriptionEn:
      "Analyze variable overhead spending/efficiency and fixed overhead budget/volume.",
  },
  {
    unit: 15,
    section: 7,
    page: 787,
    id: "su15-comprehensive",
    ar: "مثال متكامل على الانحرافات",
    en: "Comprehensive Variance Example",
    descriptionAr: "تجميع انحرافات المواد والعمل والتكاليف غير المباشرة في حالة تشغيلية.",
    descriptionEn: "Reconcile material, labor and overhead variances in a complete case.",
  },
  {
    unit: 15,
    section: 8,
    page: 808,
    id: "su15-sales-variance",
    ar: "انحرافات المبيعات",
    en: "Sales Variances",
    descriptionAr: "فصل تغير السعر والحجم والمزيج والسوق عن تغير هامش المساهمة.",
    descriptionEn: "Isolate price, quantity, mix and market effects on sales and contribution.",
  },
  {
    unit: 16,
    section: 1,
    page: 846,
    id: "su16-responsibility-centers",
    ar: "مراكز المسؤولية",
    en: "Responsibility Centers",
    descriptionAr: "تحديد تكلفة وإيراد وربح واستثمار كل مركز وحدود سيطرة مديره.",
    descriptionEn: "Distinguish cost, revenue, profit and investment centers and controllability.",
  },
  {
    unit: 16,
    section: 2,
    page: 891,
    id: "su16-cost-revenue-profit",
    ar: "مقاييس مراكز التكلفة والإيراد والربح",
    en: "Cost, Revenue and Profit Center Measures",
    descriptionAr: "قياس نتائج المراكز بما يتفق مع مسؤوليات المديرين وهوامش القطاعات.",
    descriptionEn: "Evaluate controllable costs, revenues and segment contribution.",
  },
  {
    unit: 16,
    section: 3,
    page: 905,
    id: "su16-investment-centers",
    ar: "مقاييس مراكز الاستثمار",
    en: "Investment Center Measures",
    descriptionAr: "مقارنة العائد على الاستثمار والدخل المتبقي وأثرهما على قبول المشروعات.",
    descriptionEn: "Compare ROI, residual income and incentives for accepting projects.",
  },
  {
    unit: 16,
    section: 4,
    page: 963,
    id: "su16-balanced-scorecard",
    ar: "بطاقة الأداء المتوازن",
    en: "The Balanced Scorecard",
    descriptionAr: "ربط المقاييس المالية والعملاء والعمليات والتعلم بالأهداف الاستراتيجية.",
    descriptionEn: "Link financial, customer, process and learning measures to strategy.",
  },
  {
    unit: 16,
    section: 5,
    page: 973,
    id: "su16-transfer-pricing",
    ar: "تسعير التحويل",
    en: "Transfer Pricing",
    descriptionAr: "تحديد أسعار التحويل وفق السوق والتكلفة والتفاوض والطاقة المتاحة.",
    descriptionEn:
      "Choose market, cost or negotiated transfer prices given capacity and incentives.",
  },
  {
    unit: 17,
    section: 1,
    page: 1008,
    id: "su17-governance",
    ar: "حوكمة الشركات واللوائح الرقابية",
    en: "Corporate Governance and Regulations",
    descriptionAr: "تحديد دور مجلس الإدارة ولجنة المراجعة والمتطلبات التنظيمية.",
    descriptionEn: "Explain board and audit committee duties and regulatory control requirements.",
  },
  {
    unit: 17,
    section: 2,
    page: 1034,
    id: "su17-risk-controls",
    ar: "المخاطر والرقابة الداخلية",
    en: "Risk and Internal Control",
    descriptionAr: "تقييم الخطر ومكونات الرقابة والتوثيق ومحدوديتها.",
    descriptionEn: "Assess risk, internal-control components, documentation and limitations.",
  },
  {
    unit: 18,
    section: 1,
    page: 1088,
    id: "su18-control-procedures",
    ar: "إجراءات الرقابة",
    en: "Control Procedures",
    descriptionAr: "تطبيق الفصل بين الواجبات والتفويض والتسويات والرقابة على المعاملات.",
    descriptionEn:
      "Apply authorization, segregation of duties, reconciliations and transaction controls.",
  },
  {
    unit: 18,
    section: 2,
    page: 1162,
    id: "su18-systems-security",
    ar: "رقابة النظم وأمن المعلومات",
    en: "Systems Controls and Information Security",
    descriptionAr: "حماية الإدخال والمعالجة والمخرجات والصلاحيات والبيانات.",
    descriptionEn: "Protect input, processing, output, access and information assets.",
  },
  {
    unit: 18,
    section: 3,
    page: 1193,
    id: "su18-continuity",
    ar: "الأمن واستمرارية الأعمال",
    en: "Security Measures and Business Continuity",
    descriptionAr: "تقييم التشفير والنسخ الاحتياطي وخطط التعافي ومواقع التشغيل البديلة.",
    descriptionEn: "Evaluate encryption, backups, recovery sites and continuity planning.",
  },
  {
    unit: 19,
    section: 1,
    page: 1209,
    id: "su19-accounting-systems",
    ar: "نظم المعلومات المحاسبية",
    en: "Accounting Information Systems",
    descriptionAr: "فهم تدفق المعاملات وقواعد البيانات وتكامل نظم المنشأة.",
    descriptionEn: "Trace transaction processing, accounting databases and enterprise systems.",
  },
  {
    unit: 19,
    section: 2,
    page: 1246,
    id: "su19-data-governance",
    ar: "حوكمة البيانات ودورة حياتها",
    en: "Data Governance and the Data Life Cycle",
    descriptionAr: "إدارة ملكية البيانات وجودتها ونشرها وحفظها وحذفها.",
    descriptionEn: "Manage data ownership, quality, publication, retention and purging.",
  },
  {
    unit: 19,
    section: 3,
    page: 1273,
    id: "su19-coso-data",
    ar: "إطار COSO للرقابة على البيانات",
    en: "COSO Framework for Data Governance",
    descriptionAr: "تطبيق مبادئ COSO على جودة البيانات والرقابة ومتابعة المخاطر.",
    descriptionEn: "Apply COSO principles to data quality, control activities and monitoring.",
  },
  {
    unit: 20,
    section: 1,
    page: 1294,
    id: "su20-finance-transformation",
    ar: "التحول التقني للوظيفة المالية",
    en: "Technology-Enabled Finance Transformation",
    descriptionAr: "تقييم الأتمتة ونظم المؤسسة ومخاطر التحول وتحسين دورة القرار.",
    descriptionEn: "Assess automation, enterprise technology and finance process change.",
  },
  {
    unit: 20,
    section: 2,
    page: 1321,
    id: "su20-data-analytics",
    ar: "تحليل البيانات والبيانات الضخمة",
    en: "Analytics and Big Data",
    descriptionAr: "تمييز التحليل الوصفي والتنبؤي والتوجيهي وجودة وحجم وسرعة البيانات.",
    descriptionEn:
      "Distinguish descriptive, predictive and prescriptive analytics and big-data dimensions.",
  },
];

function domain(unit: number): CmaDomain {
  if (unit === 11) return "cost-mgmt";
  if (unit <= 14) return "planning-budgeting";
  if (unit <= 16) return "performance-mgmt";
  if (unit <= 18) return "internal-controls";
  return "technology-analytics";
}

const domainCode: Record<CmaDomain, string> = {
  "external-reporting": "A",
  "planning-budgeting": "B",
  "performance-mgmt": "C",
  "cost-mgmt": "D",
  "internal-controls": "E",
  "technology-analytics": "F",
  "financial-statement-analysis": "A",
  "corporate-finance": "B",
  "decision-analysis": "C",
  "risk-mgmt": "D",
  "investment-decisions": "E",
  "professional-ethics": "F",
};

const formulas: Record<string, NonNullable<CmaTopic["keyFormulas"]>> = {
  "su11-value-chain": [
    { nameAr: "التكلفة المستهدفة", nameEn: "Target cost", formula: "Market price − Target profit" },
  ],
  "su11-process-improvement": [
    {
      nameAr: "كفاءة دورة العملية",
      nameEn: "Process cycle efficiency",
      formula: "Value-added time ÷ Total throughput time",
    },
  ],
  "su12-regression": [
    { nameAr: "خط الانحدار", nameEn: "Regression equation", formula: "Predicted Y = a + bX" },
    {
      nameAr: "التحديد في الانحدار البسيط مع ثابت",
      nameEn: "Simple regression with intercept: determination",
      formula: "R² = r²",
    },
  ],
  "su12-learning-curve": [
    {
      nameAr: "المتوسط التراكمي",
      nameEn: "Cumulative-average model",
      formula: "Y = aX^b; b = ln(Learning rate) ÷ ln(2); Total time = XY",
    },
    {
      nameAr: "التعلم لكل تضاعف",
      nameEn: "Learning rate",
      formula: "Average time after doubling = Previous average time × Learning rate",
    },
  ],
  "su12-expected-value": [
    {
      nameAr: "قيمة المعلومات الكاملة",
      nameEn: "Expected value of perfect information",
      formula: "EVPI = EV with perfect information − Best EV without it",
    },
    {
      nameAr: "القيمة المتوقعة",
      nameEn: "Expected value",
      formula: "EV = Σ (Probability × Outcome)",
    },
  ],
  "su13-standards": [
    {
      nameAr: "المدخل المسموح",
      nameEn: "Standard input allowed",
      formula: "Actual output × Standard input per unit",
    },
  ],
  "su13-budget-methods": [
    {
      nameAr: "الموازنة المرنة",
      nameEn: "Flexible budget",
      formula: "Fixed cost + Variable rate × Actual activity",
    },
  ],
  "su14-sales-budget": [
    {
      nameAr: "إيراد المبيعات",
      nameEn: "Sales revenue",
      formula: "Σ (Product units × Product price)",
    },
  ],
  "su14-production-materials": [
    {
      nameAr: "الإنتاج المطلوب",
      nameEn: "Required production",
      formula: "Sales + Target ending inventory − Beginning inventory",
    },
    {
      nameAr: "مشتريات المواد",
      nameEn: "Material purchases",
      formula: "Production needs + Ending raw stock − Beginning raw stock",
    },
  ],
  "su14-other-operating-budgets": [
    {
      nameAr: "تكلفة المبيعات",
      nameEn: "Cost of goods sold",
      formula: "Beginning finished goods + Cost of goods manufactured − Ending finished goods",
    },
  ],
  "su14-capital-cash-collections": [
    {
      nameAr: "التحصيلات",
      nameEn: "Cash collections",
      formula: "Σ (Sales by cohort × Collection fraction due this period)",
    },
  ],
  "su14-cash-budget": [
    {
      nameAr: "النقد قبل التمويل",
      nameEn: "Cash before financing",
      formula: "Beginning cash + Collections − Cash payments",
    },
  ],
  "su14-pro-forma": [
    {
      nameAr: "الأرباح المبقاة",
      nameEn: "Retained earnings",
      formula: "Beginning retained earnings + Net income − Declared dividends",
    },
  ],
  "su15-materials-variance": [
    { nameAr: "انحراف سعر المواد", nameEn: "Materials price variance", formula: "AQ × (AP − SP)" },
  ],
  "su15-labor-variance": [
    {
      nameAr: "انحراف كفاءة العمل",
      nameEn: "Labor efficiency variance",
      formula: "SR × (AH − SH)",
    },
  ],
  "su16-investment-centers": [
    {
      nameAr: "الدخل المتبقي",
      nameEn: "Residual income",
      formula: "Operating profit − (Invested capital × Required return)",
    },
  ],
  "su16-transfer-pricing": [
    {
      nameAr: "الحد الأدنى لسعر التحويل",
      nameEn: "Minimum transfer price",
      formula: "Incremental cost + Opportunity cost",
    },
  ],
};

/** Printed pages in the supplied 2024 teaching outlines, not the separate 2025 MCQ bank. */
const guidePages: Record<string, string> = {
  "su11-value-chain": "2–5",
  "su11-process-improvement": "6–12",
  "su12-regression": "2–5",
  "su12-learning-curve": "6–7",
  "su12-expected-value": "8–12",
  "su12-strategic-management": "13–21",
  "su12-strategic-planning": "22–24",
  "su13-budget-roles": "2–9",
  "su13-standards": "10–11",
  "su13-master-budget": "12–13",
  "su13-budget-methods": "14–18",
  "su14-sales-budget": "3",
  "su14-production-materials": "4–5",
  "su14-other-operating-budgets": "6–11",
  "su14-capital-cash-collections": "12–13",
  "su14-cash-budget": "14–16",
  "su14-pro-forma": "17–20",
};

export const CMA_VOL2_TOPICS: CmaTopic[] = sections.map((item, index) => {
  const subject = domain(item.unit);
  return {
    id: item.id,
    code: `CMA-P1-SU${item.unit}-${item.unit}.${item.section}`,
    studyUnit: item.unit,
    section: `${item.unit}.${item.section}`,
    sourcePages: `${item.page}–${index + 1 < sections.length ? sections[index + 1].page - 1 : 1370}`,
    ...(guidePages[item.id] ? { guidePages: guidePages[item.id] } : {}),
    losRef: `IMA Part 1, Domain ${domainCode[subject]}`,
    part: "part-1",
    domain: subject,
    titleAr: item.ar,
    titleEn: item.en,
    summaryAr: item.descriptionAr,
    summaryEn: item.descriptionEn,
    searchTerms: [item.en, item.ar, item.id.replaceAll("-", " ")],
    ...(formulas[item.id] ? { keyFormulas: formulas[item.id] } : {}),
  };
});
