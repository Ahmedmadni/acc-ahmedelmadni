import { IFRS_STANDARDS, type AccountingStandard, type StandardTopic } from "./ifrs-standards";

export type LocalizedText = { ar: string; en: string };

export interface IfrsContentSource {
  key: string;
  name: string;
  url: string;
  revision: string;
  license: string;
  usage: "paraphrased_with_attribution" | "structural_reference_only";
  purpose: LocalizedText;
}

export interface StandardEnrichment {
  professionalNotes: LocalizedText[];
  applicationMethods: LocalizedText[];
  evidence: LocalizedText[];
  dataFields: LocalizedText[];
  relatedStandards: Array<{ code: string; note: LocalizedText }>;
  sourceKeys: string[];
}

export const IFRS_CONTENT_SOURCES: IfrsContentSource[] = [
  {
    key: "ramyatrouny-ifrs-skill",
    name: "ramyatrouny/ifrs-skill",
    url: "https://github.com/ramyatrouny/ifrs-skill",
    revision: "fda78bbc4080790ae9cf5d1fe47b931c1610e44e",
    license: "MIT",
    usage: "paraphrased_with_attribution",
    purpose: {
      ar: "مرجع فني للشروحات ومسارات التطبيق وقوائم الإفصاح والأمثلة والقيود، مع إعادة الصياغة والتحقق قبل النشر.",
      en: "Technical reference for explanations, workflows, disclosure checklists, examples and entries, paraphrased and reviewed before publication.",
    },
  },
  {
    key: "api-evangelist-accounting-standards",
    name: "api-evangelist/accounting-standards",
    url: "https://github.com/api-evangelist/accounting-standards",
    revision: "def62d16a4a9d9ca9d29c521530cf734e0c6c8d9",
    license: "No repository-wide licence detected",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع لبنية JSON Schema والبيانات القابلة للقراءة الآلية، دون نسخ محتوى غير مرخص.",
      en: "Reference for JSON Schema and machine-readable data patterns without copying unlicensed content.",
    },
  },
  {
    key: "charles-hoffman-fac-ifrs",
    name: "CharlesHoffmanCPA/fac-ifrs",
    url: "https://github.com/CharlesHoffmanCPA/fac-ifrs",
    revision: "014a900f19291b242b982202cbec71ea6a965e93",
    license: "GPL-3.0",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع لفهم علاقات المفاهيم والتصنيفات وفحوص اتساق التقارير؛ لا تنسخ ملفات GPL إلى بيانات الموقع.",
      en: "Reference for concept relations, taxonomies and report-consistency checks; GPL files are not copied into site data.",
    },
  },
  {
    key: "ifrs-connect-public",
    name: "adamjabenn-prog/ifrsconnect-public",
    url: "https://github.com/adamjabenn-prog/ifrsconnect-public",
    revision: "a7fa9cca0a377040c1a737b7d4e143c7770b3531",
    license: "Public product documentation; calculation engine proprietary",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع لتصميم مدخلات ومخرجات وجداول عمل IFRS 16، لا لنسخ محرك الحساب الخاص.",
      en: "Reference for IFRS 16 input, output and working-paper design, not for copying the proprietary calculation engine.",
    },
  },
  {
    key: "systemorph-ifrs17-engine",
    name: "Systemorph/IFRS17CalculationEngine",
    url: "https://github.com/Systemorph/IFRS17CalculationEngine",
    revision: "6014e05e59a1e7ff74886c3ffe27137247db44d6",
    license: "No repository-wide licence detected",
    usage: "structural_reference_only",
    purpose: {
      ar: "مرجع بنيوي لنماذج التدفقات والقيمة الحالية ومكونات قياس IFRS 17 فقط.",
      en: "Structural reference for cash-flow, present-value and IFRS 17 measurement-component models only.",
    },
  },
];

type TopicProfile = {
  judgement: LocalizedText;
  methods: LocalizedText[];
  evidence: LocalizedText[];
  fields: LocalizedText[];
};

const TOPIC_PROFILES: Record<StandardTopic, TopicProfile> = {
  presentation: {
    judgement: {
      ar: "الفنية الأهم هي التمييز بين تغيير حقيقي في القياس وبين إعادة تصنيف أو إفصاح لا يغيّر صافي الأصول.",
      en: "The central judgement is distinguishing a genuine measurement change from a reclassification or disclosure that does not change net assets.",
    },
    methods: [
      {
        ar: "ابنِ خريطة من ميزان المراجعة إلى بنود القوائم ثم اختبر الاكتمال والاتساق بين القوائم والإيضاحات.",
        en: "Map the trial balance to statement captions, then test completeness and consistency between statements and notes.",
      },
      {
        ar: "استخدم مصالحة افتتاحي–حركة–ختامي لكل بند جوهري حتى تظهر التغيرات النقدية وغير النقدية.",
        en: "Use opening-movement-closing reconciliations for material captions so cash and non-cash changes remain visible.",
      },
      {
        ar: "راجع التجميع والتفصيل من منظور المستخدم، لا من منظور شجرة الحسابات فقط.",
        en: "Review aggregation and disaggregation from the user's perspective, not merely the chart-of-accounts structure.",
      },
    ],
    evidence: [
      {
        ar: "ميزان المراجعة وربط الحسابات بالقوائم والإيضاحات.",
        en: "Trial balance and account-to-statement/note mapping.",
      },
      {
        ar: "مذكرة الأحكام الجوهرية والأهمية النسبية وإعادة التصنيف.",
        en: "Material-judgement, materiality and reclassification memo.",
      },
      {
        ar: "مصالحة الأرقام المقارنة وأثر أي تغيير في العرض.",
        en: "Comparative-number reconciliation and presentation-change effects.",
      },
    ],
    fields: [
      {
        ar: "رمز البند، رصيد الفترة، المقارن، التصنيف، مرجع الإيضاح.",
        en: "Caption code, current balance, comparative, classification and note reference.",
      },
      {
        ar: "نوع الحركة: نقدية، غير نقدية، إعادة تصنيف أو ترجمة.",
        en: "Movement type: cash, non-cash, reclassification or translation.",
      },
      {
        ar: "حكم الأهمية النسبية ومستوى التجميع.",
        en: "Materiality conclusion and aggregation level.",
      },
    ],
  },
  "financial-instruments": {
    judgement: {
      ar: "ابدأ دائمًا من شروط العقد والغرض من الاحتفاظ بالأداة؛ اسم الحساب وحده لا يحدد التصنيف أو القياس.",
      en: "Always start with contractual terms and the purpose for holding the instrument; the account label alone does not determine classification or measurement.",
    },
    methods: [
      {
        ar: "افصل قرار التصنيف عن نموذج القياس، ثم اربط كل فئة بطريقة احتساب العائد والخسارة الائتمانية والتغير في القيمة.",
        en: "Separate classification from measurement, then link each category to yield, credit-loss and value-change calculations.",
      },
      {
        ar: "وثّق مصادر PD وLGD وEAD والسيناريوهات والأوزان والافتراضات المستقبلية عند وجود ECL.",
        en: "Document PD, LGD, EAD, scenarios, weights and forward-looking assumptions where ECL applies.",
      },
      {
        ar: "أنشئ مصالحة بين سجل الأدوات والدفتر العام والإفصاحات لتجنب سقوط أدوات أو ضمانات من التحليل.",
        en: "Reconcile the instrument register to the ledger and disclosures so no instruments or collateral fall outside the analysis.",
      },
    ],
    evidence: [
      {
        ar: "العقود وجداول التدفقات ومذكرات نموذج الأعمال والتصنيف.",
        en: "Contracts, cash-flow schedules, business-model and classification memos.",
      },
      {
        ar: "نماذج القيمة العادلة أو الخسائر الائتمانية ومدخلاتها واعتماداتها.",
        en: "Fair-value or credit-loss models, inputs and approvals.",
      },
      {
        ar: "مصالحة الأرصدة والمخصصات والحركات والإفصاحات.",
        en: "Balance, allowance, movement and disclosure reconciliations.",
      },
    ],
    fields: [
      {
        ar: "معرّف الأداة، الطرف المقابل، العملة، الاستحقاق، معدل العائد.",
        en: "Instrument ID, counterparty, currency, maturity and yield.",
      },
      {
        ar: "فئة القياس، المرحلة الائتمانية، PD وLGD وEAD.",
        en: "Measurement category, credit stage, PD, LGD and EAD.",
      },
      {
        ar: "القيمة الدفترية، القيمة العادلة، المخصص، الضمانات.",
        en: "Carrying amount, fair value, allowance and collateral.",
      },
    ],
  },
  "group-reporting": {
    judgement: {
      ar: "جوهر التحليل هو طبيعة النفوذ الفعلي—سيطرة أو سيطرة مشتركة أو تأثير مهم—وليس نسبة الملكية وحدها.",
      en: "The core analysis is the nature of substantive power—control, joint control or significant influence—not ownership percentage alone.",
    },
    methods: [
      {
        ar: "ارسم هيكل المجموعة والحقوق التعاقدية وحقوق التصويت المحتملة قبل اختيار طريقة المحاسبة.",
        en: "Map the group structure, contractual rights and potential voting rights before selecting the accounting method.",
      },
      {
        ar: "استخدم حزمة توحيد موحدة تشمل السياسات والعملات والمعاملات والأرصدة البينية.",
        en: "Use a standard consolidation pack covering policies, currencies and intragroup transactions and balances.",
      },
      {
        ar: "اجعل كل تعديل توحيد قابلًا للتتبع إلى كيان وحساب وسبب ومرجع مستندي.",
        en: "Make every consolidation adjustment traceable to entity, account, rationale and supporting evidence.",
      },
    ],
    evidence: [
      {
        ar: "هيكل الملكية والاتفاقيات وحقوق اتخاذ القرار.",
        en: "Ownership chart, agreements and decision-making rights.",
      },
      {
        ar: "حزم التقارير ومصالحة المعاملات والأرباح البينية.",
        en: "Reporting packs and intragroup transaction/profit reconciliations.",
      },
      {
        ar: "مذكرات السيطرة وNCI والشهرة أو قيمة الاستثمار.",
        en: "Control, NCI, goodwill or investment-value memos.",
      },
    ],
    fields: [
      {
        ar: "الكيان، نسبة الملكية، نسبة التصويت، تاريخ السيطرة.",
        en: "Entity, ownership, voting percentage and control date.",
      },
      {
        ar: "نوع العلاقة وطريقة المحاسبة وعملة العرض.",
        en: "Relationship type, accounting method and presentation currency.",
      },
      {
        ar: "الرصيد البيني والطرف المقابل وتعديل الإلغاء.",
        en: "Intragroup balance, counterparty and elimination adjustment.",
      },
    ],
  },
  revenue: {
    judgement: {
      ar: "العقد لا يتحول إلى إيراد بمجرد الفاتورة؛ النقطة الحاسمة هي تحديد الالتزامات ومتى تنتقل السيطرة للعميل.",
      en: "A contract does not become revenue merely because it is invoiced; the decisive issue is identifying obligations and when control transfers to the customer.",
    },
    methods: [
      {
        ar: "حوّل كل عقد إلى سجل يربط البنود التجارية بالتزامات الأداء وسعر المعاملة والتخصيص والتوقيت.",
        en: "Turn each contract into a register linking commercial terms to performance obligations, transaction price, allocation and timing.",
      },
      {
        ar: "افصل التقديرات المتغيرة ومكوّن التمويل والتعديلات عن المقابل الثابت.",
        en: "Separate variable estimates, financing components and modifications from fixed consideration.",
      },
      {
        ar: "صالح الإيراد والفواتير والنقد وأصول والتزامات العقد في حركة واحدة مفهومة.",
        en: "Reconcile revenue, billing, cash and contract assets/liabilities in one understandable roll-forward.",
      },
    ],
    evidence: [
      {
        ar: "العقود وأوامر التغيير وأدلة التسليم أو قبول العميل.",
        en: "Contracts, change orders and delivery or customer-acceptance evidence.",
      },
      {
        ar: "مذكرة التزامات الأداء وسعر البيع المنفصل والتخصيص.",
        en: "Performance-obligation, standalone-selling-price and allocation memo.",
      },
      {
        ar: "تقارير التقدم والتكاليف والفواتير والتحصيلات.",
        en: "Progress, cost, billing and collection reports.",
      },
    ],
    fields: [
      {
        ar: "العقد، العميل، الالتزام، سعر البيع المنفصل، المبلغ المخصص.",
        en: "Contract, customer, obligation, standalone selling price and allocated amount.",
      },
      {
        ar: "طريقة الاعتراف ومقياس التقدم وتاريخ الانتقال.",
        en: "Recognition method, progress measure and transfer date.",
      },
      {
        ar: "الإيراد والفاتورة والنقد وأصل أو التزام العقد.",
        en: "Revenue, invoice, cash and contract asset or liability.",
      },
    ],
  },
  assets: {
    judgement: {
      ar: "القرار الفني يبدأ بتحديد وحدة الحساب وما إذا كان الإنفاق ينشئ منفعة مستقبلية يمكن قياسها أم يمثل مصروف فترة.",
      en: "The technical decision starts by identifying the unit of account and whether expenditure creates a measurable future benefit or a period expense.",
    },
    methods: [
      {
        ar: "اربط سجل الأصل بدورة حياته: اقتناء، جاهزية للاستخدام، إهلاك، إعادة تقييم أو انخفاض، ثم استبعاد.",
        en: "Link the asset register to its life cycle: acquisition, ready-for-use date, depreciation, revaluation or impairment, then disposal.",
      },
      {
        ar: "افصل المكونات الجوهرية واختبر الأعمار والقيم المتبقية ومؤشرات الانخفاض في كل إقفال.",
        en: "Separate significant components and review lives, residual values and impairment indicators at each close.",
      },
      {
        ar: "استخدم مصالحة كمية وقيمية عندما تكون وحدات المخزون أو الأصول قابلة للعد.",
        en: "Use both quantity and value reconciliations where inventory or asset units can be counted.",
      },
    ],
    evidence: [
      {
        ar: "فواتير الشراء ومحاضر الاستلام والتشغيل وسجل الأصل.",
        en: "Purchase invoices, receipt/commissioning evidence and asset register.",
      },
      {
        ar: "دراسة العمر والقيمة المتبقية ومؤشرات أو اختبار الانخفاض.",
        en: "Useful-life, residual-value and impairment indicator/test support.",
      },
      {
        ar: "الجرد والمصالحة وتقارير الاستخدام والصيانة والاستبعاد.",
        en: "Counts, reconciliations, usage, maintenance and disposal reports.",
      },
    ],
    fields: [
      {
        ar: "معرّف الأصل، الفئة، الموقع، تاريخ الجاهزية، التكلفة.",
        en: "Asset ID, class, location, ready-for-use date and cost.",
      },
      {
        ar: "العمر، القيمة المتبقية، طريقة الإهلاك، المكوّن.",
        en: "Life, residual value, depreciation method and component.",
      },
      {
        ar: "القيمة الدفترية، القيمة القابلة للاسترداد، خسارة الانخفاض.",
        en: "Carrying amount, recoverable amount and impairment loss.",
      },
    ],
  },
  "tax-benefits": {
    judgement: {
      ar: "افصل بين القياس المحاسبي والتدفق النقدي والوعاء النظامي؛ الفروق الزمنية والافتراضات الاكتوارية لا تظهر من رصيد الدفتر وحده.",
      en: "Separate accounting measurement, cash flow and statutory base; timing differences and actuarial assumptions are not visible from the ledger balance alone.",
    },
    methods: [
      {
        ar: "ابنِ مصالحة بندية بين القيمة الدفترية والأساس النظامي أو الالتزام المتوقع.",
        en: "Build an item-by-item reconciliation between carrying amount and statutory base or expected obligation.",
      },
      {
        ar: "وثّق المعدلات والافتراضات وتواريخ السريان وحساسية النتائج قبل تسجيل القيد.",
        en: "Document rates, assumptions, effective dates and sensitivities before posting the entry.",
      },
      {
        ar: "افصل أثر الفترة في الربح أو الخسارة وOCI وحقوق الملكية طبقًا لمصدر المعاملة.",
        en: "Separate current-period effects between profit or loss, OCI and equity according to the underlying transaction.",
      },
    ],
    evidence: [
      {
        ar: "الإقرارات أو تقارير الخبير والبيانات الأساسية المعتمدة.",
        en: "Returns or specialist reports and approved underlying data.",
      },
      {
        ar: "جداول الفروق والمعدلات والافتراضات وتحليل الحساسية.",
        en: "Difference schedules, rates, assumptions and sensitivity analysis.",
      },
      {
        ar: "مصالحة المصروف والالتزام والمدفوعات والإفصاحات.",
        en: "Expense, liability, payment and disclosure reconciliation.",
      },
    ],
    fields: [
      {
        ar: "البند، القيمة الدفترية، الأساس النظامي، الفرق المؤقت.",
        en: "Item, carrying amount, statutory base and temporary difference.",
      },
      {
        ar: "المعدل، الاحتمال، التوقيت، القيمة الحالية.",
        en: "Rate, probability, timing and present value.",
      },
      {
        ar: "أثر الربح أو الخسارة وOCI والرصيد الختامي.",
        en: "Profit-or-loss effect, OCI effect and closing balance.",
      },
    ],
  },
  industry: {
    judgement: {
      ar: "ابدأ من اقتصاديات النشاط والعقد والوحدة المنتجة للتدفق، ثم طبّق المعيار القطاعي مع المعايير العامة ذات الصلة.",
      en: "Start with the activity's economics, contract and cash-flow-generating unit, then apply the industry Standard together with relevant general Standards.",
    },
    methods: [
      {
        ar: "قسّم المحفظة أو النشاط إلى وحدات متجانسة قبل القياس بدل استخدام متوسط واحد يخفي الاختلافات.",
        en: "Segment the portfolio or activity into homogeneous units before measurement rather than using one average that hides differences.",
      },
      {
        ar: "اربط الافتراضات التشغيلية بالتدفقات والقيود والإفصاحات في نموذج واحد قابل للمراجعة.",
        en: "Link operating assumptions to cash flows, entries and disclosures in one reviewable model.",
      },
      {
        ar: "اختبر النتائج بتحليل حركة وحساسية ومقارنة مع الخبرة الفعلية.",
        en: "Test results through roll-forwards, sensitivities and comparison with actual experience.",
      },
    ],
    evidence: [
      {
        ar: "العقود وبيانات المحفظة والتدفقات والافتراضات التشغيلية.",
        en: "Contracts, portfolio data, cash flows and operating assumptions.",
      },
      {
        ar: "النموذج الحسابي والتحقق المستقل وتحليل الحساسية.",
        en: "Calculation model, independent validation and sensitivity analysis.",
      },
      {
        ar: "مصالحة الحركة بين النظام التشغيلي والدفتر والإفصاحات.",
        en: "Movement reconciliation across operating system, ledger and disclosures.",
      },
    ],
    fields: [
      {
        ar: "المحفظة أو الوحدة، تاريخ البداية، المدة، العملة.",
        en: "Portfolio or unit, inception date, duration and currency.",
      },
      {
        ar: "التدفقات، معدل الخصم، تعديل المخاطر، السيناريو.",
        en: "Cash flows, discount rate, risk adjustment and scenario.",
      },
      {
        ar: "رصيد الافتتاح، الخدمة أو الإنتاج، التسويات، الختام.",
        en: "Opening balance, service or production, adjustments and closing balance.",
      },
    ],
  },
  other: {
    judgement: {
      ar: "حدّد الحدث المحاسبي ووحدة الحساب والشرط الذي يغيّر الاعتراف أو القياس قبل التفكير في اسم القيد.",
      en: "Identify the accounting event, unit of account and condition that changes recognition or measurement before thinking about the journal label.",
    },
    methods: [
      {
        ar: "اكتب مذكرة قصيرة: الوقائع، السؤال، المتطلبات، التحليل، الاستنتاج ثم أثر القيد والإفصاح.",
        en: "Write a short memo covering facts, issue, requirements, analysis, conclusion, entry and disclosure effect.",
      },
      {
        ar: "حوّل المتطلبات إلى نقاط قرار يمكن اختبارها بدل الاعتماد على وصف عام.",
        en: "Turn requirements into testable decision points rather than relying on a general description.",
      },
      {
        ar: "اربط كل استنتاج بمستند ومالك للمعلومة وتاريخ مراجعة.",
        en: "Link every conclusion to evidence, an information owner and a review date.",
      },
    ],
    evidence: [
      {
        ar: "العقد أو القرار أو الحدث المنشئ للمعالجة.",
        en: "Contract, decision or event giving rise to the accounting.",
      },
      {
        ar: "مذكرة التحليل والموافقات والافتراضات المستخدمة.",
        en: "Analysis memo, approvals and assumptions used.",
      },
      {
        ar: "القيد والمصالحة والإفصاح المرتبط.",
        en: "Related entry, reconciliation and disclosure.",
      },
    ],
    fields: [
      {
        ar: "نوع الحدث، التاريخ، الطرف، المبلغ، العملة.",
        en: "Event type, date, party, amount and currency.",
      },
      {
        ar: "قرار النطاق والاعتراف والقياس والعرض.",
        en: "Scope, recognition, measurement and presentation conclusion.",
      },
      {
        ar: "مرجع المستند والمراجع والحالة وتاريخ التحديث.",
        en: "Evidence reference, reviewer, status and update date.",
      },
    ],
  },
};

const topicRelationText: Record<StandardTopic, LocalizedText> = {
  presentation: {
    ar: "يتكامل معه في إعداد القوائم والعرض والإفصاح والمقارنات.",
    en: "Interacts in statement preparation, presentation, disclosures and comparatives.",
  },
  "financial-instruments": {
    ar: "يرتبط به في تصنيف الأدوات أو قياسها أو مخاطرها وإفصاحاتها.",
    en: "Connects through instrument classification, measurement, risk or disclosures.",
  },
  "group-reporting": {
    ar: "يرتبط به في تحديد العلاقة بين المنشآت وقياس الاستثمار أو إعداد التقارير المجمعة.",
    en: "Connects through entity relationships, investment measurement or group reporting.",
  },
  revenue: {
    ar: "يتقاطع معه في توقيت الاعتراف والمقابل والأرصدة التعاقدية.",
    en: "Interacts through recognition timing, consideration and contract balances.",
  },
  assets: {
    ar: "يتقاطع معه في تحديد تكلفة الأصل وقياسه اللاحق وانخفاضه أو استبعاده.",
    en: "Interacts through asset cost, subsequent measurement, impairment or disposal.",
  },
  "tax-benefits": {
    ar: "يرتبط به في قياس الالتزامات طويلة الأجل والافتراضات وآثار العرض.",
    en: "Connects through long-term obligation measurement, assumptions and presentation effects.",
  },
  industry: {
    ar: "يكمل المعالجة القطاعية بمتطلبات القياس والعرض العامة ذات الصلة.",
    en: "Complements industry accounting with relevant general measurement and presentation requirements.",
  },
  other: {
    ar: "يوفر معالجة مكملة عند تداخل النطاق أو الاعتراف أو القياس.",
    en: "Provides complementary accounting where scope, recognition or measurement overlap.",
  },
};

function relatedStandards(standard: AccountingStandard) {
  const peers = IFRS_STANDARDS.filter(
    (candidate) => candidate.code !== standard.code && candidate.topic === standard.topic,
  ).slice(0, 4);
  return peers.map((peer) => ({ code: peer.code, note: topicRelationText[standard.topic] }));
}

function buildEnrichment(standard: AccountingStandard): StandardEnrichment {
  const profile = TOPIC_PROFILES[standard.topic];
  const specialistSources = [
    "ramyatrouny-ifrs-skill",
    "api-evangelist-accounting-standards",
    "charles-hoffman-fac-ifrs",
  ];
  if (standard.code === "IFRS 16") specialistSources.push("ifrs-connect-public");
  if (standard.code === "IFRS 17") specialistSources.push("systemorph-ifrs17-engine");

  return {
    professionalNotes: [
      profile.judgement,
      {
        ar: `في ${standard.code} لا يكفي حفظ القاعدة؛ القيمة المهنية تأتي من ربطها بالوقائع والمستندات والنظام المحاسبي وأثرها على القوائم.`,
        en: `For ${standard.code}, memorising a rule is insufficient; professional value comes from connecting it to facts, evidence, systems and financial-statement effects.`,
      },
      {
        ar: "اعتبر المثال نقطة بداية للفهم لا وصفة جاهزة؛ تغير شرط واحد في العقد أو التوقيت قد يغيّر النتيجة.",
        en: "Treat the example as a starting point, not a recipe; one change in a contractual term or timing can change the conclusion.",
      },
    ],
    applicationMethods: profile.methods,
    evidence: profile.evidence,
    dataFields: profile.fields,
    relatedStandards: relatedStandards(standard),
    sourceKeys: specialistSources,
  };
}

export const IFRS_STANDARD_ENRICHMENTS: Record<string, StandardEnrichment> = Object.fromEntries(
  IFRS_STANDARDS.map((standard) => [standard.code, buildEnrichment(standard)]),
);

export function getStandardEnrichment(code: string) {
  return IFRS_STANDARD_ENRICHMENTS[code];
}
