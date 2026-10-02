import type { ExamQuestion } from "@/lib/exam-bank";

/** Reviewed source extracts. Public references intentionally cite IFRS/IAS only. */
export const IFRS_REVIEWED_EXTRACT_QUESTIONS: ExamQuestion[] = [
  {
    id: "ifrs-reviewed-ias16-disposal-01",
    track: "IFRS",
    topic: "IAS 16 — disposal after revaluation",
    question: {
      ar: "اشترت شركة أرضًا بمبلغ 15 مليونًا في 20X0، ثم أعادت تقييمها في تواريخ مختلفة حتى بلغت قيمتها الدفترية 23 مليونًا في 20X7، وباعتها مقابل 21 مليونًا في 20X7، لكن النقد لم يُحصّل حتى 20X8. مع تجاهل الضريبة، ما الربح أو الخسارة المسجلة في 20X7؟",
      en: "A company bought some land for $15m in 20X0, revalued it at various dates up to $23m in 20X7, and sold it for $21m in 20X7, but did not receive any cash until 20X8. Ignoring tax, the gain/loss recorded in 20X7 should be:",
    },
    choices: {
      ar: ["صفر", "ربح 6 ملايين", "خسارة مليونيْن", "ربح 21 مليونًا"],
      en: ["Zero", "A gain of $6m", "A loss of $2m", "A gain of $21m"],
    },
    answerIndex: 2,
    explanation: {
      ar: "تستبعد الأرض في 20X7 بالقيمة الدفترية 23 مليونًا، ويثبت مقابل البيع 21 مليونًا؛ لذلك تظهر خسارة قدرها مليونا دولار في فترة البيع. تأخر التحصيل إلى 20X8 لا يؤجل الاستبعاد.",
      en: "The land is derecognised in 20X7 at its $23m carrying amount against $21m proceeds, producing a $2m loss in the disposal period. Collection in 20X8 does not defer derecognition.",
    },
    reference: "IAS 16.67–71",
    difficulty: "intermediate",
    examDomain: "IAS 16 disposal",
  },
  {
    id: "ifrs-reviewed-ifrs15-broadband-01",
    track: "IFRS",
    topic: "IFRS 15 — bundled router and broadband",
    question: {
      ar: "تقدم شركة راوتر لاسلكيًا وباقة إنترنت فائق السرعة لمدة 12 شهرًا مقابل 220 دولارًا تدفع مقدمًا. يباع الراوتر منفردًا بـ30 دولارًا والخدمة منفردة بـ20 دولارًا شهريًا. متى يعترف بالمبلغ المخصص لباقـة الإنترنت؟",
      en: "EF Co provides a wireless router and 12 months' superfast broadband package to a customer for $220 payable in advance. A customer buying the router separately would pay $30 and a customer buying the broadband package separately would pay $20 per month. When is the transaction price allocated to the broadband package recognised?",
    },
    choices: {
      ar: [
        "فور استلام 220 دولارًا",
        "على مدى فترة الاثني عشر شهرًا",
        "في نهاية الاثني عشر شهرًا فقط",
        "يثبت 30 دولارًا فورًا ويوزع الباقي على الفترة",
      ],
      en: [
        "Immediately, when the $220 payment is received",
        "Over the 12 month period",
        "At the end of the 12 month period",
        "$30 immediately with the remaining spread over the contract period",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "الخدمة التزام أداء يُوفى على مدى الوقت مع حصول العميل على المنفعة واستهلاكها؛ لذلك يعترف بالمبلغ المخصص للخدمة خلال 12 شهرًا، وليس لمجرد التحصيل مقدمًا.",
      en: "Broadband is a performance obligation satisfied over time as the customer receives and consumes the benefit, so its allocated amount is recognised over 12 months rather than on advance collection.",
    },
    reference: "IFRS 15.31, 35, 73–86",
    difficulty: "intermediate",
    examDomain: "IFRS 15 recognition over time",
  },
  {
    id: "ifrs-reviewed-ias38-rd-expense-01",
    track: "IFRS",
    topic: "IAS 38 — research and development expense",
    question: {
      ar: "في 1 يناير 20X5 كان لدى Moor Labs Co تكاليف تطوير مرسملة بتكلفة أصلية 10 ملايين دولار وقيمة دفترية 5 ملايين دولار. بدأ مشروع بحث وتطوير جديد في التاريخ نفسه؛ بلغت تكاليف البحث 1.6 مليون دولار حتى 31 أغسطس، ثم بلغت تكاليف التطوير 750,000 دولار شهريًا. في 1 نوفمبر أصبحت الإدارة واثقة من النجاح التجاري، وظل المشروع قيد التطوير في 31 ديسمبر. تستهلك تكاليف التطوير المرسملة بنسبة 25% سنويًا بالقسط الثابت. ما مبلغ مصروف البحث والتطوير المعترف به في السنة المنتهية في 31 ديسمبر 20X5؟",
      en: "At 1 January 20X5, Moor Labs Co has capitalised development costs with an original cost of $10million and carrying amount of $5million. The company started a new R&D project on 1 January 20X5, incurring $1.6 million costs during the research phase, which lasted until 31 August 20X5. From that date, average development costs incurred on the project were $750,000 per month. On 1 November 20X5, the management of Moor Labs Co became confident that the project would be a commercial success and make good profits. The project is still in development at 31 December 20X5. Capitalised development expenditure is amortised at 25% per annum using the straight line method. What amount is recognised as an expense in terms of R&D in the year ended 31 December 20X5?",
    },
    choices: {
      ar: ["1.6 مليون دولار", "3.1 مليون دولار", "4.1 مليون دولار", "5.6 مليون دولار"],
      en: ["$1.6million", "$3.1million", "$4.1million", "$5.6million"],
    },
    answerIndex: 3,
    explanation: {
      ar: "المصروف يساوي 1.6 مليون للبحث، و1.5 مليون لتطوير سبتمبر وأكتوبر قبل استيفاء شروط الرسملة، و2.5 مليون استهلاكًا للأصل القائم (10 ملايين × 25%). أما 1.5 مليون المنفقة في نوفمبر وديسمبر فتُرسمل؛ لذلك الإجمالي 5.6 مليون.",
      en: "Expense comprises $1.6m research, $1.5m September–October development before the capitalisation criteria were demonstrated, and $2.5m amortisation of the existing asset ($10m × 25%). The $1.5m spent in November–December is capitalised, giving total expense of $5.6m.",
    },
    reference: "IAS 38.54–67, 71, 97",
    difficulty: "advanced",
    examDomain: "IAS 38 research and development",
  },
  {
    id: "ifrs-reviewed-ias38-statements-01",
    track: "IFRS",
    topic: "IAS 38 — useful life, development and revaluation",
    question: {
      ar: "أي العبارات التالية صحيحة؟ 1. يشترط IAS 38 ألا يزيد العمر الإنتاجي المخصص للأصول غير الملموسة على 20 سنة. 2. عند استيفاء شروط معينة، يسمح IAS 38 للشركة بالاختيار بين رسملة نفقات التطوير أو الاستمرار في إثباتها مصروفًا. 3. يسمح IAS 38 بإعادة تقييم الأصول غير الملموسة إذا وُجد سوق نشط للأصل.",
      en: "Which of the following statements is/are true? 1. IAS 38 requires that intangible assets are assigned a useful life of no more than 20 years 2. When certain criteria are met, IAS 38 allows a company to choose to capitalise development expenditure or continue to recognise it as an expense 3. IAS 38 allows intangible assets to be revalued if there is an active market for the asset",
    },
    choices: {
      ar: ["1 و2", "3 فقط", "1 و3", "جميع ما سبق"],
      en: ["1 and 2", "3 only", "1 and 3", "All of the above"],
    },
    answerIndex: 1,
    explanation: {
      ar: "العبارة الثالثة فقط صحيحة. قد يكون العمر الإنتاجي غير محدد، ولا يوجد حد عام قدره 20 سنة. وعند استيفاء شروط التطوير تصبح الرسملة مطلوبة وليست اختيارًا. يسمح بنموذج إعادة التقييم فقط عندما تقاس القيمة العادلة بالرجوع إلى سوق نشط.",
      en: "Only statement 3 is true. An intangible may have an indefinite useful life, so there is no general 20-year cap. Once the development criteria are met, capitalisation is required rather than optional. Revaluation is permitted only when fair value can be measured by reference to an active market.",
    },
    reference: "IAS 38.21, 57, 72–87, 88–96",
    difficulty: "intermediate",
    examDomain: "IAS 38 recognition and measurement",
  },
  {
    id: "ifrs-reviewed-ias40-fair-value-01",
    track: "IFRS",
    topic: "IAS 40 — subsequent measurement",
    question: {
      ar: "وفقًا لـIAS 40، فإن العقار الاستثماري:",
      en: "In accordance with IAS 40, an investment property",
    },
    choices: {
      ar: [
        "يمكن قياسه بالقيمة العادلة مع إثبات المكاسب والخسائر في الدخل الشامل الآخر",
        "يمكن قياسه بالقيمة العادلة مع إثبات المكاسب والخسائر في الربح أو الخسارة",
        "يجب قياسه بالتكلفة التاريخية ناقص الإهلاك",
        "يجب قياسه بصافي القيمة القابلة للتحقق",
      ],
      en: [
        "May be held at fair value with gains and losses recorded through other comprehensive income",
        "May be held at fair value with gains and losses recorded through profit and loss",
        "Must be held at historical cost less depreciation",
        "Must be held at net realisable value",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "يسمح IAS 40 بنموذج القيمة العادلة، وتثبت تغيرات القيمة العادلة في الربح أو الخسارة للفترة. كما يسمح بنموذج التكلفة، لذلك لا يكون القياس بالتكلفة إلزاميًا، ولا يستخدم صافي القيمة القابلة للتحقق للعقار الاستثماري.",
      en: "IAS 40 permits the fair value model, under which fair value changes are recognised in profit or loss for the period. The cost model is also permitted, so historical cost is not mandatory, and net realisable value is not an investment-property measurement basis.",
    },
    reference: "IAS 40.30–35, 56",
    difficulty: "beginner",
    examDomain: "IAS 40 subsequent measurement",
  },
];
