import type { ExamQuestion } from "@/lib/exam-bank";

/** Original practice items aligned with IMA LOS A.1/A.2, not copied exam or textbook questions. */
export type CmaLocalQuestion = ExamQuestion & {
  topicId: "financial-statements" | "recognition-measurement";
};

export const CMA_LOCAL_QUESTIONS: CmaLocalQuestion[] = [
  {
    id: "cma-p1-a1-001",
    track: "CMA",
    topicId: "financial-statements",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Financial Statements — Indirect Cash Flow",
    difficulty: "hard",
    reference: "IMA LOS 2024, Part 1 A.1.g",
    question: {
      ar: "صافي الربح 120,000، والإهلاك 30,000، وربح بيع آلة 10,000، وزيادة الذمم المدينة 20,000، وزيادة الدائنين 15,000. ما صافي التدفق النقدي التشغيلي بالطريقة غير المباشرة؟",
      en: "Net income is 120,000; depreciation is 30,000; a machine-sale gain is 10,000; receivables increase 20,000 and payables increase 15,000. What is indirect-method operating cash flow?",
    },
    choices: {
      ar: ["105,000", "135,000", "145,000", "175,000"],
      en: ["105,000", "135,000", "145,000", "175,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "120,000 + 30,000 − 10,000 − 20,000 + 15,000 = 135,000. الخيار 105,000 يطرح زيادة الدائنين بدل إضافتها؛ 145,000 يبقي ربح البيع ضمن التشغيل؛ 175,000 يعامل زيادة الذمم كتدفق داخل.",
      en: "120,000 + 30,000 − 10,000 − 20,000 + 15,000 = 135,000. 105,000 subtracts, rather than adds, the payables increase; 145,000 keeps the disposal gain in operations; 175,000 treats rising receivables as cash collected.",
    },
  },
  {
    id: "cma-p1-a1-002",
    track: "CMA",
    topicId: "financial-statements",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Financial Statements — Cash Flow Classification",
    difficulty: "intermediate",
    reference: "IMA LOS 2024, Part 1 A.1.e–g",
    question: {
      ar: "باعت شركة آلة نقدًا بمبلغ 75,000، وكانت قيمتها الدفترية 60,000. كيف يظهر البيع في قائمة التدفقات بالطريقة غير المباشرة وفق US GAAP؟",
      en: "A company sells equipment for 75,000 cash; its carrying amount is 60,000. How is this reflected in a U.S. GAAP indirect-method cash-flow statement?",
    },
    choices: {
      ar: [
        "تدفق تشغيلي 75,000 فقط",
        "تدفق استثماري 75,000 وطرح ربح 15,000 من تسوية التشغيل",
        "تدفق تمويلي 75,000 وإضافة ربح 15,000 للتشغيل",
        "تدفق استثماري 60,000 دون تسوية الربح",
      ],
      en: [
        "75,000 operating inflow only",
        "75,000 investing inflow and subtract the 15,000 gain in the operating reconciliation",
        "75,000 financing inflow and add a 15,000 operating gain",
        "60,000 investing inflow without adjusting the gain",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "الربح = 75,000 − 60,000 = 15,000؛ نحذفه من صافي الربح في التسوية التشغيلية ونعرض كامل المقبوض 75,000 استثماريًا. الخيارات الأخرى تخلط بين حصيلة البيع والربح أو تصنيف النشاط.",
      en: "Gain = 75,000 − 60,000 = 15,000; remove it from net income in the operating reconciliation and show the full 75,000 proceeds in investing. Other options confuse proceeds with gain or misclassify the activity.",
    },
  },
  {
    id: "cma-p1-a1-003",
    track: "CMA",
    topicId: "financial-statements",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Financial Statements — Equity Rollforward",
    difficulty: "intermediate",
    reference: "IMA LOS 2024, Part 1 A.1.f–g",
    question: {
      ar: "رصيد الأرباح المبقاة أول الفترة 200,000، وصافي الربح 80,000، وتوزيعات الأرباح النقدية المعلنة 25,000. ما رصيد الأرباح المبقاة في نهاية الفترة بافتراض عدم وجود بنود أخرى؟",
      en: "Opening retained earnings are 200,000, net income is 80,000, and declared cash dividends are 25,000. With no other items, what are ending retained earnings?",
    },
    choices: {
      ar: ["175,000", "255,000", "280,000", "305,000"],
      en: ["175,000", "255,000", "280,000", "305,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "200,000 + 80,000 − 25,000 = 255,000. 175,000 يهمل الربح؛ 280,000 يهمل التوزيعات؛ 305,000 يضيف التوزيعات بدل طرحها. إعلان التوزيع ينقص الأرباح المبقاة ولو لم يُدفع بعد.",
      en: "200,000 + 80,000 − 25,000 = 255,000. 175,000 ignores earnings; 280,000 ignores dividends; 305,000 adds rather than subtracts dividends. Declaration reduces retained earnings even if payment follows later.",
    },
  },
  {
    id: "cma-p1-a1-004",
    track: "CMA",
    topicId: "financial-statements",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Financial Statements — Consolidation",
    difficulty: "hard",
    reference: "IMA LOS 2024, Part 1 A.1.h–k",
    question: {
      ar: "حققت شركة أم مبيعات خارجية 500,000 وباعت لبنتها بضاعة بقيمة 40,000، وحققت البنت مبيعات خارجية 300,000. ما الإيراد الموحد قبل أي تعديلات أخرى؟",
      en: "A parent has external sales of 500,000 and sells 40,000 of goods to its subsidiary. The subsidiary has external sales of 300,000. What is consolidated revenue before other adjustments?",
    },
    choices: {
      ar: ["760,000", "800,000", "840,000", "540,000"],
      en: ["760,000", "800,000", "840,000", "540,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "500,000 + 300,000 = 800,000؛ تُلغى مبيعات 40,000 الداخلية عند التوحيد. 840,000 يحتسبها مرتين، 760,000 يطرحها مرة ثانية من الإيراد الخارجي، و540,000 يهمل مبيعات البنت الخارجية.",
      en: "500,000 + 300,000 = 800,000; eliminate the 40,000 intercompany sale. 840,000 includes it; 760,000 deducts it again from external sales; 540,000 omits the subsidiary's external sales.",
    },
  },
  {
    id: "cma-p1-a1-005",
    track: "CMA",
    topicId: "financial-statements",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Financial Statements — Integrated Reporting",
    difficulty: "intermediate",
    reference: "IMA LOS 2024, Part 1 A.1.l–p",
    question: {
      ar: "شركة تستثمر في تدريب موظفيها وتشرح أثر ذلك في الابتكار وخلق قيمة طويلة الأجل. أي نوع من رؤوس الأموال الستة يرتبط مباشرة بالمهارات المكتسبة؟",
      en: "A company invests in employee training and explains its contribution to innovation and long-term value. Which of the six capitals is directly associated with acquired employee skills?",
    },
    choices: {
      ar: ["رأس المال الطبيعي", "رأس المال البشري", "رأس المال المالي", "رأس المال المصنّع"],
      en: ["Natural capital", "Human capital", "Financial capital", "Manufactured capital"],
    },
    answerIndex: 1,
    explanation: {
      ar: "المهارات والخبرة من رأس المال البشري. الطبيعي يتعلق بالموارد البيئية، والمالي بالتمويل، والمصنّع بالبنية والأصول المادية. قد تؤثر المبادرة في أنواع أخرى بصورة غير مباشرة، لكن السؤال عن المهارة مباشرةً.",
      en: "Skills and experience are human capital. Natural capital concerns environmental resources, financial capital funds, and manufactured capital physical infrastructure. Training can affect other capitals indirectly, but skills are directly human capital.",
    },
  },
  {
    id: "cma-p1-a2-001",
    track: "CMA",
    topicId: "recognition-measurement",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Recognition and Valuation — FIFO versus LIFO",
    difficulty: "hard",
    reference: "IMA LOS 2024, Part 1 A.2.c–i",
    question: {
      ar: "اشترت شركة 100 وحدة بسعر 10، ثم 100 بسعر 12، وباعت 120 وحدة. كم يزيد المخزون النهائي وفق FIFO عنه وفق LIFO؟",
      en: "A company buys 100 units at 10, then 100 at 12, and sells 120 units. How much higher is FIFO ending inventory than LIFO ending inventory?",
    },
    choices: { ar: ["0", "160", "200", "240"], en: ["0", "160", "200", "240"] },
    answerIndex: 1,
    explanation: {
      ar: "يتبقى 80 وحدة: FIFO = 80 × 12 = 960؛ LIFO = 80 × 10 = 800؛ الفرق 160. الصفر يفترض تكاليف متساوية، و200 فرق 100 وحدة لا 80، و240 هو تكلفة 20 وحدة من الطبقة الأحدث. LIFO غير مسموح به وفق IFRS.",
      en: "80 units remain: FIFO = 80 × 12 = 960; LIFO = 80 × 10 = 800; difference = 160. Zero assumes equal costs; 200 applies the price difference to 100 rather than 80 units; 240 is the cost of 20 later units. IFRS prohibits LIFO.",
    },
  },
  {
    id: "cma-p1-a2-002",
    track: "CMA",
    topicId: "recognition-measurement",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Recognition and Valuation — Credit Loss Allowance",
    difficulty: "intermediate",
    reference: "IMA LOS 2024, Part 1 A.2.a",
    question: {
      ar: "إجمالي الذمم المدينة 500,000، ورصيد مخصص الخسائر الائتمانية قبل التعديل دائن 8,000. يشير التقدير النهائي المطلوب إلى 15,000. ما مصروف الخسائر المطلوب تسجيله وما صافي الذمم؟",
      en: "Gross receivables are 500,000. The allowance has a pre-adjustment credit balance of 8,000; the required closing balance is 15,000. What expense is recorded and what is net receivables?",
    },
    choices: {
      ar: ["7,000 و485,000", "15,000 و485,000", "7,000 و493,000", "23,000 و477,000"],
      en: ["7,000 and 485,000", "15,000 and 485,000", "7,000 and 493,000", "23,000 and 477,000"],
    },
    answerIndex: 0,
    explanation: {
      ar: "المصروف = 15,000 − 8,000 = 7,000؛ صافي الذمم = 500,000 − 15,000 = 485,000. الخيار الثاني يتجاهل رصيد المخصص السابق؛ الثالث يخصم المصروف بدل رصيد المخصص النهائي؛ الرابع يجمع الرصيدين خطأً.",
      en: "Expense = 15,000 − 8,000 = 7,000; net receivables = 500,000 − 15,000 = 485,000. The second ignores the existing allowance; the third deducts current expense rather than closing allowance; the fourth incorrectly adds both balances.",
    },
  },
  {
    id: "cma-p1-a2-003",
    track: "CMA",
    topicId: "recognition-measurement",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Recognition and Valuation — Deferred Taxes",
    difficulty: "hard",
    reference: "IMA LOS 2024, Part 1 A.2.q–s",
    question: {
      ar: "في نهاية السنة، القيمة الدفترية لآلة 90,000 وأساسها الضريبي 70,000، ومعدل الضريبة المطبق عند انعكاس الفرق 25%. ما الأثر الضريبي المؤجل، بافتراض عدم وجود فروق أخرى؟",
      en: "At year-end, equipment has a carrying amount of 90,000 and a tax base of 70,000. The applicable tax rate upon reversal is 25%. What deferred tax effect arises, assuming no other differences?",
    },
    choices: {
      ar: [
        "أصل ضريبي مؤجل 5,000",
        "التزام ضريبي مؤجل 5,000",
        "التزام ضريبي مؤجل 20,000",
        "لا ينشأ فرق مؤقت",
      ],
      en: [
        "Deferred tax asset 5,000",
        "Deferred tax liability 5,000",
        "Deferred tax liability 20,000",
        "No temporary difference",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "فرق مؤقت خاضع للضريبة = 90,000 − 70,000 = 20,000؛ الالتزام = 20,000 × 25% = 5,000. ليس أصلًا لأن الاسترداد الدفتري يتجاوز الأساس الضريبي؛ 20,000 هو الفرق قبل تطبيق المعدل؛ والفرق مؤقت لا دائم.",
      en: "Taxable temporary difference = 90,000 − 70,000 = 20,000; liability = 20,000 × 25% = 5,000. It is not an asset because carrying amount exceeds tax base; 20,000 is the pretax difference; a temporary difference exists.",
    },
  },
  {
    id: "cma-p1-a2-004",
    track: "CMA",
    topicId: "recognition-measurement",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Recognition and Valuation — Revenue Allocation",
    difficulty: "hard",
    reference: "IMA LOS 2024, Part 1 A.2.x–z",
    question: {
      ar: "بيع جهاز وخدمة دعم منفصلان في عقد واحد بمقابل 12,000؛ سعر البيع المستقل للجهاز 9,000 وللدعم 3,000. سُلِّم الجهاز ولم تُقدَّم الخدمة بعد. كم إيراد الجهاز عند التسليم؟",
      en: "A contract bundles distinct equipment and support for 12,000; stand-alone selling prices are 9,000 for equipment and 3,000 for support. The equipment has been delivered; support remains unperformed. How much equipment revenue is recognized on delivery?",
    },
    choices: { ar: ["3,000", "9,000", "12,000", "0"], en: ["3,000", "9,000", "12,000", "0"] },
    answerIndex: 1,
    explanation: {
      ar: "تخصيص الجهاز = 12,000 × 9,000 ÷ (9,000 + 3,000) = 9,000. مبلغ 3,000 مخصص للدعم؛ 12,000 يعجل بإيراد الخدمة؛ الصفر يهمل الوفاء بالتزام الجهاز. يفترض السؤال انتقال السيطرة بالجهاز عند التسليم.",
      en: "Equipment allocation = 12,000 × 9,000 ÷ (9,000 + 3,000) = 9,000. The 3,000 belongs to support; 12,000 prematurely recognizes support revenue; zero ignores fulfillment of the equipment obligation. Delivery is assumed to transfer equipment control.",
    },
  },
  {
    id: "cma-p1-a2-005",
    track: "CMA",
    topicId: "recognition-measurement",
    examDomain: "Part 1 — External Financial Reporting Decisions",
    topic: "Recognition and Valuation — IFRS Comparison",
    difficulty: "intermediate",
    reference: "IMA LOS 2024, Part 1 A.2.ff",
    question: {
      ar: "أي ممارسة تخص تقييم المخزون يمكن استخدامها ضمن US GAAP ولكنها محظورة بموجب IFRS؟",
      en: "Which inventory cost-flow assumption may be used under U.S. GAAP but is prohibited by IFRS?",
    },
    choices: {
      ar: ["FIFO", "LIFO", "المتوسط المرجح", "التحديد المحدد"],
      en: ["FIFO", "LIFO", "Weighted average", "Specific identification"],
    },
    answerIndex: 1,
    explanation: {
      ar: "LIFO محظور وفق IAS 2 ويمكن استخدامه في US GAAP وفق شروطه. FIFO والمتوسط المرجح والتحديد المحدد ليست فروق حظر مماثلة بين الإطارين؛ يختلف تطبيق التحديد المحدد بحسب طبيعة المخزون.",
      en: "IAS 2 prohibits LIFO while U.S. GAAP permits it subject to relevant requirements. FIFO, weighted average and specific identification do not have this cross-framework prohibition; specific identification depends on the inventory's nature.",
    },
  },
];
