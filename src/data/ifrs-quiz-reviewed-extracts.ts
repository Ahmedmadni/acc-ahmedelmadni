import type { ExamQuestion } from "@/lib/exam-bank";

/** Reviewed source extracts. Public references intentionally cite IFRS/IAS only. */
export const IFRS_REVIEWED_EXTRACT_QUESTIONS: ExamQuestion[] = [
  {
    id: "ifrs-reviewed-ifrs10-major-minor-inventory-01",
    track: "IFRS",
    topic: "IFRS 10 — intragroup inventory profit attributable to parent",
    question: {
      ar: "تُعد Major Co قوائمها في 31 ديسمبر وتمتلك 80% من Minor Co. تبيع Minor بضاعة إلى Major بزيادة 33.33% على التكلفة. في 31 ديسمبر 20X8 احتفظت Major ببضاعة من هذا المصدر بقيمة 12,000 دولار، وفي 31 ديسمبر 20X9 احتفظت ببضاعة بقيمة 15,000 دولار. بمقدار كم يُعدّل الربح الموحد المنسوب لمساهمي Major؟ تجاهل الضريبة.",
      en: "Major Co, which makes up its accounts to 31 December, has an 80% owned subsidiary Minor Co. Minor Co sells goods to Major Co at a mark-up of 33.33% on cost. At 31 December 20X8, Major had $12,000 of such goods in its inventory and at 31 December 20X9 had $15,000. What is the amount by which the consolidated profit attributable to Major Co's shareholders should be adjusted in respect of the above? Ignore taxation.",
    },
    choices: {
      ar: ["1,000 دولار مدين", "800 دولار دائن", "750 دولار دائن", "600 دولار مدين"],
      en: ["$1,000 Debit", "$800 Credit", "$750 Credit", "$600 Debit"],
    },
    answerIndex: 3,
    explanation: {
      ar: "تعادل الزيادة على التكلفة 33.33% هامشًا يقارب 25% من سعر التحويل. ربح المخزون غير المحقق أول المدة يقارب 12,000 × 25% = 3,000، وآخرها 15,000 × 25% = 3,750؛ صافي تخفيض ربح التابعة للسنة 750. يُحذف الربح الداخلي كله من المجموعة، ثم يُنسب 80% من تخفيض ربح التابعة إلى ملاك الأم: 750 × 80% = 600 مدين. التقريب في 33.33% لا يغير الاختيار.",
      en: "A 33.33% mark-up on cost is approximately 25% of transfer price. Opening unrealised inventory profit is about $12,000 × 25% = $3,000; closing profit is $15,000 × 25% = $3,750. The subsidiary's current-year profit therefore falls by $750. Eliminate intragroup profit in full, then attribute 80% of the subsidiary-profit reduction to parent owners: $750 × 80% = $600 debit. Rounding of 33.33% does not affect the option.",
    },
    reference: "IFRS 10.B86(c), B94",
    difficulty: "intermediate",
    examDomain: "IFRS 10 intragroup inventory and NCI attribution",
  },
  {
    id: "ifrs-reviewed-ias12-current-tax-measurement-01",
    track: "IFRS",
    topic: "IAS 12 — current tax measurement",
    question: {
      ar: "كيف تُقاس الضريبة الجارية؟",
      en: "How should current tax be measured?",
    },
    choices: {
      ar: [
        "إجمالي الالتزام شاملًا الضريبة المؤجلة",
        "المبلغ المتوقع دفعه إلى السلطات الضريبية أو استرداده منها",
        "المبلغ المحسوب على الربح بمعدلات الضريبة الحالية",
        "المبلغ المحسوب على الربح بمعدلات الضريبة المستقبلية",
      ],
      en: [
        "The total liability, including deferred tax",
        "The amount expected to be paid to (or recovered from) the tax authorities",
        "The amount calculated on profit at current tax rates",
        "The amount calculated on profit at future tax rates",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "يقاس أصل أو التزام الضريبة الجارية بالمبلغ المتوقع استرداده من الجهة الضريبية أو دفعه إليها، وفق القانون ومعدلات الضريبة المقررة أو المقررة موضوعيًا بنهاية الفترة. الضريبة المؤجلة بند قياس منفصل.",
      en: "Measure a current-tax asset or liability at the amount expected to be recovered from or paid to the tax authority, using tax law and rates enacted or substantively enacted by period-end. Deferred tax is measured separately.",
    },
    reference: "IAS 12.46",
    difficulty: "easy",
    examDomain: "IAS 12 current tax",
  },
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
    difficulty: "hard",
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
    difficulty: "easy",
    examDomain: "IAS 40 subsequent measurement",
  },
  {
    id: "ifrs-reviewed-ifrs5-sale-criteria-01",
    track: "IFRS",
    topic: "IFRS 5 — held-for-sale criteria",
    question: {
      ar: "أي الشروط التالية غير مطلوب لتصنيف أصل على أنه محتفظ به للبيع وفق IFRS 5؟",
      en: "Which of the following conditions is not required for an asset to be classified as held for sale under IFRS 5?",
    },
    choices: {
      ar: [
        "التزام الإدارة بخطة للبيع",
        "أن يكون سعر البيع متوافقًا مع القيمة العادلة الحالية",
        "ألا يكون الأصل قد أعيد تقييمه",
        "أن يكون البيع عالي الاحتمال",
      ],
      en: [
        "Management is committed to a plan to sell",
        "The selling price must be in line with current fair value",
        "Asset has not been revalued",
        "Sale is highly probable",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "إعادة تقييم الأصل سابقًا لا تمنع التصنيف. المطلوب أن يكون متاحًا للبيع الفوري وأن يكون البيع عالي الاحتمال، مع التزام الإدارة وخطة نشطة وسعر معقول وتوقع الإتمام عادة خلال سنة.",
      en: "Prior revaluation does not prevent classification. The asset must be available for immediate sale and the sale highly probable, supported by management commitment, an active programme, reasonable pricing and expected completion normally within one year.",
    },
    reference: "IFRS 5.6–9",
    difficulty: "easy",
    examDomain: "IFRS 5 classification",
  },
  {
    id: "ifrs-reviewed-ifrs5-acquired-subsidiary-01",
    track: "IFRS",
    topic: "IFRS 5 — subsidiary acquired for resale",
    question: {
      ar: "استحوذت Poetry Co على Prose Co، وهي شركة تابعة، في 1 أكتوبر 20X7 حصريًا بغرض بيعها. تستوفي Prose Co شروط التصنيف كمحتفظ بها للبيع، لكنها لم تُبع حتى تاريخ القوائم المالية في 31 مايو 20X8. بأي مبلغ تقاس Prose Co في قائمة المركز المالي في ذلك التاريخ؟",
      en: "Poetry Co acquires Prose Co, a subsidiary, on 1 October 20X7, exclusively with a view to selling it. Prose Co meets the criteria to be classified as held for sale. At the date of the financial statements 31 May 20X8, Prose Co has not yet been sold. At what amount should Prose Co be measured in the statement of financial position at 31 May 20X8?",
    },
    choices: {
      ar: [
        "بالقيمة العادلة ناقص تكلفة البيع",
        "بالأقل من التكلفة والقيمة العادلة ناقص تكاليف البيع",
        "بالقيمة الدفترية بعد الإهلاك",
        "بالقيمة القابلة للتحقق",
      ],
      en: [
        "At fair value less cost to sell",
        "At the lower of cost and fair value less costs to sell",
        "At depreciated carrying amount",
        "At realisable value",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "تقاس الشركة التابعة المشتراة حصريًا لإعادة البيع، بعد استيفاء شروط التصنيف، بالأقل من قيمتها الدفترية عند الاقتناء والقيمة العادلة ناقص تكاليف البيع، مع عرضها ضمن مجموعة استبعاد محتفظ بها للبيع.",
      en: "A subsidiary acquired exclusively for resale and meeting the classification criteria is measured at the lower of its acquisition carrying amount and fair value less costs to sell and presented in a held-for-sale disposal group.",
    },
    reference: "IFRS 5.11, 15–18",
    difficulty: "intermediate",
    examDomain: "IFRS 5 measurement",
  },
  {
    id: "ifrs-reviewed-ias32-liability-01",
    track: "IFRS",
    topic: "IAS 32 — financial liability definition",
    question: {
      ar: "أي مما يلي يعد التزامًا ماليًا وفق IAS 32: العرض؟",
      en: "Which of the following is a financial liability under IAS 32:Presentation?",
    },
    choices: {
      ar: [
        "إيراد مؤجل من منحة حكومية",
        "مخصص مدفوعات ضمان",
        "التزام بتسليم أسهم ذاتية بقيمة نقدية ثابتة",
        "عقد مثقل بالأعباء",
      ],
      en: [
        "Deferred revenue from a government grant",
        "A provision for warranty payments",
        "An obligation to deliver own shares worth a fixed amount of cash",
        "An onerous contract",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "الالتزام بتسليم عدد متغير من أسهم المنشأة يعادل قيمة نقدية ثابتة هو التزام مالي، لأنه لا يحقق شرط مبادلة مبلغ ثابت بعدد ثابت من الأسهم. أما البدائل الأخرى فليست أدوات مالية تعاقدية ضمن IAS 32.",
      en: "An obligation to deliver a variable number of the entity's own shares equal to a fixed cash value is a financial liability because it fails the fixed-for-fixed condition. The other items are not contractual financial instruments within IAS 32.",
    },
    reference: "IAS 32.11, 16–27",
    difficulty: "intermediate",
    examDomain: "IAS 32 classification",
  },
  {
    id: "ifrs-reviewed-ifrs9-recognition-01",
    track: "IFRS",
    topic: "IFRS 9 — initial recognition",
    question: {
      ar: "متى يجب الاعتراف بأصل مالي أو التزام مالي وفق IFRS 9 الأدوات المالية؟",
      en: "When should a financial asset or liability be recognised in accordance with IFRS 9 Financial Instruments?",
    },
    choices: {
      ar: [
        "عندما يكون من المحتمل تدفق منافع اقتصادية مستقبلية إلى المنشأة",
        "عندما تصبح المنشأة طرفًا في الأحكام التعاقدية للأداة",
        "عندما تحصل المنشأة على السيطرة على الأداة",
        "عندما تحصل المنشأة على مخاطر ومنافع الملكية",
      ],
      en: [
        "When it is probable that future economic benefits will flow to the entity",
        "When the entity becomes a party to the contractual provisions of the instrument",
        "When the entity obtains control of the instrument",
        "When the entity obtains the risks and rewards of ownership",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "قاعدة الاعتراف المحددة في IFRS 9 هي أن تصبح المنشأة طرفًا في الأحكام التعاقدية للأداة؛ فلا تستبدل هذه القاعدة باختبار احتمال المنافع أو صياغة عامة عن السيطرة.",
      en: "IFRS 9's specific recognition rule is that the entity becomes party to the instrument's contractual provisions; it is not replaced by a probability-of-benefits test or a generic control description.",
    },
    reference: "IFRS 9.3.1.1",
    difficulty: "easy",
    examDomain: "IFRS 9 recognition",
  },
  {
    id: "ifrs-reviewed-ias32-convertible-01",
    track: "IFRS",
    topic: "IAS 32 — compound convertible bond",
    question: {
      ar: "في 1 يوليو 20X1 أصدرت White Co عدد 10,000 سند قابل للتحويل بقيمة اسمية 100 دولار للسند. تدفع السندات فائدة سنوية متأخرة 4% وتسترد بالقيمة الاسمية في 30 يونيو 20X5، ويمكن حينها تحويل كل سند إلى 15 سهمًا عاديًا. سعر الفائدة لسندات مماثلة بلا حق تحويل 5%. ما الذي يثبت عند إصدار السندات؟",
      en: "On 1 July 20X1 White Co issues 10,000 $100 convertible bonds at par. The bonds pay interest annually in arrears at 4% and are redeemable at par on 30 June 20X5. On this date each of the bonds can be exchanged for 15 ordinary shares. The market rate of interest for similar bonds with no conversion rights attached is 5%. What should be recognised in the financial statements when the bonds are issued?",
    },
    choices: {
      ar: [
        "التزام 964,840 دولارًا ورصيد حقوق ملكية 35,160 دولارًا",
        "التزام 1,000,000 دولار",
        "التزام 855,920 دولارًا ورصيد حقوق ملكية 144,080 دولارًا",
        "أصل 1,000,000 دولار",
      ],
      en: [
        "A liability of $964,840 and an equity balance of $35,160.",
        "A liability of $1,000,000",
        "A liability of $855,920 and an equity balance of $144,080",
        "An asset of $1,000,000",
      ],
    },
    answerIndex: 0,
    explanation: {
      ar: "تقاس تدفقات الالتزام بسعر 5% لأداة مماثلة بلا تحويل، فتبلغ قيمتها الحالية 964,840 دولارًا. الفرق بين المتحصلات البالغة مليونًا والالتزام، وقدره 35,160 دولارًا، يثبت ضمن حقوق الملكية كخيار تحويل.",
      en: "Discounting the liability cash flows at the 5% rate for comparable non-convertible debt gives $964,840. The $35,160 residual between $1m proceeds and the liability is recognised in equity as the conversion option.",
    },
    reference: "IAS 32.28–32, AG30–AG35",
    difficulty: "hard",
    examDomain: "IAS 32 compound instruments",
  },
  {
    id: "ifrs-reviewed-ifrs3-goodwill-01",
    track: "IFRS",
    topic: "IFRS 3 — goodwill at acquisition",
    question: {
      ar: "اشترت Netley Co كامل رأس مال Orell Co نقدًا بمبلغ 2,500,000 دولار. في تاريخ الشراء كان رأس مال Orell مبلغ 2,000,000 دولار وأرباحها المحتجزة 250,000 دولار، وكانت القيمة العادلة لأصولها الملموسة أعلى من قيمتها الدفترية بمبلغ 150,000 دولار. ما رصيد الشهرة الذي يظهر في قائمة المركز المالي الموحدة عند الاستحواذ؟",
      en: "Netley Co purchased the whole of the share capital of Orell Co for $2,500,000 cash. Shareholders’ funds of the two companies at the date of the purchase were as follows: Netley—share capital $5,000,000 and retained earnings $600,000; Orell—share capital $2,000,000 and retained earnings $250,000. The fair value of Orell Co’s tangible assets exceeded carrying amount by $150,000. What balance should appear in the consolidated statement of financial position of Netley Co for goodwill at acquisition?",
    },
    choices: {
      ar: ["400,000 دولار", "100,000 دولار", "250,000 دولار", "500,000 دولار"],
      en: ["$400,000", "$100,000", "$250,000", "$500,000"],
    },
    answerIndex: 1,
    explanation: {
      ar: "صافي الأصول القابلة للتحديد يساوي 2,000,000 + 250,000 + 150,000 = 2,400,000 دولار. الشهرة هي المقابل 2,500,000 ناقص صافي الأصول 2,400,000، أي 100,000 دولار.",
      en: "Identifiable net assets are $2,000,000 + $250,000 + $150,000 = $2,400,000. Goodwill is the $2,500,000 consideration less $2,400,000 net assets, giving $100,000.",
    },
    reference: "IFRS 3.18–19, 32",
    difficulty: "intermediate",
    examDomain: "IFRS 3 goodwill",
  },
  {
    id: "ifrs-reviewed-ifrs11-joint-control-01",
    track: "IFRS",
    topic: "IFRS 11 — joint control",
    question: {
      ar: "يمتلك كل من Sneezy Co وSleepy Co وDopey Co ثلث الأسهم وحقوق التصويت في Snow White Co. أي العبارات التالية صحيحة؟",
      en: "One third of the shares, and also voting rights, in Snow White Co are held by each of Sneezy Co, Sleepy Co and Dopey Co. Which of the following statements is true?",
    },
    choices: {
      ar: [
        "إذا نص اتفاق على أن اتخاذ القرار يتطلب 60% على الأقل من حقوق التصويت، تكون لـSneezy Co سيطرة مشتركة.",
        "إذا اشترط الاتفاق كحد أدنى موافقة Sleepy Co وDopey Co بالإجماع، تكون لـSneezy Co سيطرة مشتركة بسبب تساوي حقوق التصويت.",
        "إذا نص الاتفاق على أن اتخاذ القرار يتطلب موافقة Sneezy Co وSleepy Co وDopey Co بالإجماع، تكون لـSneezy Co سيطرة مشتركة.",
        "لا شيء مما سبق.",
      ],
      en: [
        "If an agreement has been drawn up specifying that decision making requires at least 60% of the voting rights Sneezy Co would therefore have joint control.",
        "If an agreement has been drawn up specifying that, as a minimum, decision making requires unanimous agreement by Sleepy Co and Dopey Co, Sneezy Co would have joint control due to the equal share in voting rights.",
        "If an agreement has been drawn up specifying that decision making requires unanimous consent of Sneezy Co, Sleepy Co and Dopey Co, Sneezy Co would have joint control.",
        "None of the above",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "لا تنشأ السيطرة المشتركة من حد 60% يمكن بلوغه بتوليفات مختلفة، ولا من قرار يمكن اتخاذه دون Sneezy. اشتراط موافقة الأطراف الثلاثة التي تسيطر جماعيًا بالإجماع هو الذي يحقق تعريف السيطرة المشتركة.",
      en: "A 60% threshold can be achieved by different combinations, and an agreement that excludes Sneezy does not give it joint control. Requiring unanimous consent of all three parties that collectively control the arrangement meets the definition of joint control.",
    },
    reference: "IFRS 11.7–13, B5–B11",
    difficulty: "intermediate",
    examDomain: "IFRS 11 joint control",
  },
  {
    id: "ifrs-reviewed-ifrs10-voting-control-01",
    track: "IFRS",
    topic: "IFRS 10 — voting rights and control",
    question: {
      ar: "تملك Harwich Co عدد 70,000 سهم ممتاز غير مصوت في Sall Co، وتملك Felixstowe Co عدد 20,000 سهم عادي مصوت. يتكون رأس مال Sall من 100,000 سهم ممتاز و30,000 سهم عادي. أي شركة تعد Sall Co شركة تابعة لها؟",
      en: "Harwich Co holds 70,000 $1 preference shares in Sall Co. These are non-voting but rank equally with the ordinary shares in a winding-up. Felixstowe Co holds 20,000 $1 voting ordinary shares in Sall Co. The share capital of Sall Co is made up of the following: 100,000 preference shares of $1 each and 30,000 ordinary shares of $1 each. Sall Co is a subsidiary undertaking of:",
    },
    choices: {
      ar: [
        "Harwich Co وFelixstowe Co معًا",
        "Harwich Co",
        "Felixstowe Co",
        "لا Harwich Co ولا Felixstowe Co",
      ],
      en: [
        "Both Harwich Co and Felixstowe Co",
        "Harwich Co",
        "Felixstowe Co",
        "Neither Harwich Co nor Felixstowe Co",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "أسهم Harwich غير مصوتة، بينما تملك Felixstowe ثلثي الأسهم العادية المصوتة (20,000 من 30,000). وبافتراض أن هذه الأصوات توجه الأنشطة ذات الصلة، تكون السلطة لدى Felixstowe مع تعرضها للعوائد وقدرتها على التأثير فيها.",
      en: "Harwich's shares are non-voting, while Felixstowe holds two thirds of the voting ordinary shares (20,000 of 30,000). Assuming those votes direct relevant activities, Felixstowe has power together with exposure to returns and the ability to affect them.",
    },
    reference: "IFRS 10.5–8, B34–B50",
    difficulty: "intermediate",
    examDomain: "IFRS 10 control",
  },
  {
    id: "ifrs-reviewed-ias28-equity-method-01",
    track: "IFRS",
    topic: "IAS 28 — equity method carrying amount",
    question: {
      ar: "ما الذي يظهر في قائمة المركز المالي الموحدة للمستثمر عند استخدام طريقة حقوق الملكية للمحاسبة عن الشركات الزميلة؟",
      en: "What is disclosed in the consolidated statement of financial position of an investor when the equity method is used to account for associates?",
    },
    choices: {
      ar: [
        "الذمم المدينة دون نصيب من صافي أصول الشركة الزميلة.",
        "الاستثمار في الشركة الزميلة بالتكلفة زائدًا أو ناقصًا نصيب المجموعة من أرباحها أو خسائرها المحتجزة بعد الاستحواذ.",
        "نصيب صافي أصول الشركة الزميلة والذمم المدينة.",
        "تكلفة الاستثمار زائد الشهرة عند الاستحواذ ناقص المبالغ المشطوبة دون الذمم المدينة.",
      ],
      en: [
        "Receivables but not share of net assets of the associate.",
        "Investment in associate at cost plus /minus the group's share of the associate's post acquisition retained profits or losses.",
        "Share of net assets of the associate and receivables.",
        "Cost of investment plus goodwill on acquisition less amounts written off but not receivables.",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "تبدأ طريقة حقوق الملكية بالتكلفة، ثم تعدل القيمة الدفترية بنصيب المستثمر من نتائج الشركة الزميلة بعد الاستحواذ، وتخفض بالتوزيعات وأي خسائر انخفاض واجبة.",
      en: "The equity method starts at cost and adjusts the carrying amount for the investor's share of post-acquisition results, reduced by distributions and any required impairment losses.",
    },
    reference: "IAS 28.10–11",
    difficulty: "easy",
    examDomain: "IAS 28 equity method",
  },
];
