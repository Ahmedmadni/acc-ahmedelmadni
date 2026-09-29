import type { ExamQuestion } from "@/lib/exam-bank";

/**
 * Editorial IFRS question seed used by the standards hub.
 *
 * Questions are independently written from standard principles and public
 * educational references. They are not copied from proprietary exam banks.
 * Database-imported questions can extend/replace this starter set.
 */
export const IFRS_QUESTION_SEED: ExamQuestion[] = [
  {
    id: "ifrs-hub-ias2-01",
    track: "IFRS",
    topic: "IAS 2 — Inventories",
    difficulty: "intermediate",
    domain: "measurement",
    question: {
      ar: "في نهاية الفترة، كانت تكلفة صنف من المخزون 120 ريالاً وصافي قيمته القابلة للتحقق 105 ريالات. بأي مبلغ يُعرض المخزون وفق IAS 2؟",
      en: "At period end, an inventory item costs SAR 120 and has a net realisable value of SAR 105. At what amount is it reported under IAS 2?",
    },
    choices: {
      ar: ["120 ريالاً", "105 ريالات", "225 ريالاً", "لا يُعترف بالمخزون"],
      en: ["SAR 120", "SAR 105", "SAR 225", "The inventory is not recognised"],
    },
    answerIndex: 1,
    explanation: {
      ar: "يقاس المخزون وفق IAS 2 بالأقل من التكلفة وصافي القيمة القابلة للتحقق. لذلك يُعرض الصنف بمبلغ 105 ريالات، ويُعترف بالانخفاض عن التكلفة كمصروف وفق متطلبات المعيار.",
      en: "IAS 2 measures inventories at the lower of cost and net realisable value. The item is therefore reported at SAR 105, with the write-down from cost recognised in accordance with the standard.",
    },
    reference: "IFRS Foundation — IAS 2 Inventories",
  },
  {
    id: "ifrs-hub-ias2-02",
    track: "IFRS",
    topic: "IAS 2 — Inventories",
    difficulty: "easy",
    domain: "cost",
    question: {
      ar: "أي تكلفة مما يلي لا تُضم عادةً إلى تكلفة المخزون وفق IAS 2؟",
      en: "Which cost is generally excluded from inventory cost under IAS 2?",
    },
    choices: {
      ar: [
        "تكاليف الشراء",
        "تكاليف التحويل",
        "هدر غير طبيعي في المواد أو العمالة",
        "تكاليف أخرى لازمة لإيصال المخزون إلى موقعه وحالته الحالية",
      ],
      en: [
        "Costs of purchase",
        "Costs of conversion",
        "Abnormal waste of materials or labour",
        "Other costs incurred to bring inventories to their present location and condition",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "التكاليف غير الطبيعية للهدر لا تمثل تكلفة ضرورية لإيصال المخزون إلى حالته وموقعه الحاليين؛ لذلك تُحمّل عادةً على المصروف عند حدوثها بدلاً من رسملتها ضمن المخزون.",
      en: "Abnormal waste is not a cost necessary to bring inventory to its present location and condition, so it is generally expensed rather than capitalised in inventory.",
    },
    reference: "IFRS Foundation — IAS 2 Inventories",
  },
  {
    id: "ifrs-hub-ifrs9-01",
    track: "IFRS",
    topic: "IFRS 9 — Financial Instruments",
    difficulty: "easy",
    domain: "impairment",
    question: {
      ar: "ما الفكرة الأساسية لنموذج الخسائر الائتمانية المتوقعة في IFRS 9؟",
      en: "What is the core idea of the IFRS 9 expected credit loss model?",
    },
    choices: {
      ar: [
        "انتظار حدوث التعثر الفعلي قبل تكوين أي مخصص",
        "إثبات خسائر ائتمانية متوقعة اعتماداً على معلومات مستقبلية معقولة ومدعومة",
        "إلغاء مخصص الديون المشكوك فيها",
        "قياس جميع الأدوات بالقيمة العادلة دائماً",
      ],
      en: [
        "Wait for an actual default before recognising any allowance",
        "Recognise expected credit losses using reasonable and supportable forward-looking information",
        "Eliminate credit-loss allowances",
        "Always measure every instrument at fair value",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "IFRS 9 انتقل من نموذج الخسارة المتحققة إلى نموذج استباقي للخسائر الائتمانية المتوقعة. التقدير يأخذ في الاعتبار معلومات تاريخية وحالية وتوقعات مستقبلية معقولة ومدعومة.",
      en: "IFRS 9 uses a forward-looking expected credit loss model rather than waiting for an incurred loss event. Estimates incorporate historical, current, and reasonable supportable forward-looking information.",
    },
    reference: "IFRS Foundation — IFRS 9 Financial Instruments",
  },
  {
    id: "ifrs-hub-ifrs10-01",
    track: "IFRS",
    topic: "IFRS 10 — Consolidated Financial Statements",
    difficulty: "intermediate",
    domain: "control",
    question: {
      ar: "أي مجموعة من العناصر تعبّر عن مفهوم السيطرة في IFRS 10؟",
      en: "Which combination reflects the IFRS 10 concept of control?",
    },
    choices: {
      ar: [
        "ملكية أكثر من 50% فقط في جميع الحالات",
        "السلطة على المنشأة المستثمر فيها، والتعرض لعوائد متغيرة، والقدرة على استخدام السلطة للتأثير في العوائد",
        "وجود معاملة بين شركتين",
        "امتلاك مقعد واحد في مجلس الإدارة فقط",
      ],
      en: [
        "Ownership above 50% in all circumstances",
        "Power over the investee, exposure to variable returns, and the ability to use power to affect those returns",
        "Having a transaction between two companies",
        "Holding one board seat only",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "لا يعتمد IFRS 10 على نسبة ملكية ميكانيكية وحدها. يجب تقييم السلطة والعوائد المتغيرة والقدرة على الربط بينهما لتحديد ما إذا كانت السيطرة قائمة.",
      en: "IFRS 10 does not rely on a mechanical ownership threshold alone. Control requires power, exposure to variable returns, and the ability to use that power to affect returns.",
    },
    reference: "IFRS Foundation — IFRS 10 Consolidated Financial Statements",
  },
  {
    id: "ifrs-hub-ifrs15-01",
    track: "IFRS",
    topic: "IFRS 15 — Revenue",
    difficulty: "easy",
    domain: "recognition",
    question: {
      ar: "في نموذج IFRS 15، متى يُعترف بالإيراد المرتبط بالتزام أداء؟",
      en: "Under IFRS 15, when is revenue related to a performance obligation recognised?",
    },
    choices: {
      ar: [
        "دائماً عند توقيع العقد",
        "عندما تفي المنشأة بالتزام الأداء بنقل السيطرة على السلعة أو الخدمة للعميل",
        "دائماً عند استلام النقد",
        "فقط في نهاية السنة",
      ],
      en: [
        "Always when the contract is signed",
        "When the entity satisfies the performance obligation by transferring control of the good or service to the customer",
        "Always when cash is collected",
        "Only at year end",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "يربط IFRS 15 الاعتراف بالإيراد بالوفاء بالتزامات الأداء. يحدث ذلك عندما تنتقل السيطرة على السلعة أو الخدمة للعميل، سواء في نقطة زمنية أو على مدى الزمن حسب طبيعة الالتزام.",
      en: "IFRS 15 links revenue recognition to satisfaction of performance obligations. This occurs when control of the promised good or service transfers to the customer, either at a point in time or over time.",
    },
    reference: "IFRS Foundation — IFRS 15 Revenue from Contracts with Customers",
  },
  {
    id: "ifrs-hub-ifrs16-01",
    track: "IFRS",
    topic: "IFRS 16 — Leases",
    difficulty: "easy",
    domain: "lessee-accounting",
    question: {
      ar: "بالنسبة للمستأجر، ما المعالجة العامة لعقد إيجار يقع ضمن نطاق IFRS 16؟",
      en: "For a lessee, what is the general accounting treatment for a lease within IFRS 16?",
    },
    choices: {
      ar: [
        "إثبات مصروف إيجار فقط دون أي أصل أو التزام في جميع الحالات",
        "إثبات أصل حق استخدام والتزام إيجار، مع وجود إعفاءات محدودة",
        "إثبات أصل ثابت فقط دون التزام",
        "عدم الاعتراف بأي شيء حتى نهاية العقد",
      ],
      en: [
        "Recognise rent expense only with no asset or liability in all cases",
        "Recognise a right-of-use asset and a lease liability, subject to limited exemptions",
        "Recognise only a fixed asset with no liability",
        "Recognise nothing until the lease ends",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "النموذج العام للمستأجر في IFRS 16 يعترف بحق استخدام الأصل وبالتزام الإيجار. توجد إعفاءات اختيارية محدودة، من أبرزها بعض الإيجارات قصيرة الأجل والأصول منخفضة القيمة.",
      en: "The general IFRS 16 lessee model recognises a right-of-use asset and lease liability. Limited optional exemptions include certain short-term leases and leases of low-value assets.",
    },
    reference: "IFRS Foundation — IFRS 16 Leases",
  },
  {
    id: "ifrs-hub-ias24-01",
    track: "IFRS",
    topic: "IAS 24 — Related Party Disclosures",
    difficulty: "easy",
    domain: "disclosures",
    question: {
      ar: "لماذا يطلب IAS 24 الإفصاح عن معاملات الأطراف ذات العلاقة؟",
      en: "Why does IAS 24 require disclosure of related party transactions?",
    },
    choices: {
      ar: [
        "لأن جميع معاملات الأطراف ذات العلاقة محظورة",
        "لتمكين مستخدمي القوائم من تقييم أثر العلاقات والمعاملات والأرصدة التي قد تتأثر بعلاقة الطرفين",
        "لاستبدال قائمة الدخل",
        "لإلغاء الحاجة إلى الإفصاح عن الإدارة الرئيسية",
      ],
      en: [
        "Because all related party transactions are prohibited",
        "To help users assess the effect of relationships, transactions, and balances that may be influenced by the related-party relationship",
        "To replace the income statement",
        "To eliminate key management disclosures",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "المعيار لا يفترض أن المعاملة غير سليمة، لكنه يطلب شفافية كافية لأن العلاقة بين الأطراف قد تؤثر في شروط المعاملة أو المركز والأداء الماليين.",
      en: "The standard does not assume such transactions are improper; it requires transparency because related-party relationships can influence transaction terms and an entity's financial position or performance.",
    },
    reference: "IFRS Foundation — IAS 24 Related Party Disclosures",
  },
  {
    id: "ifrs-hub-ias36-01",
    track: "IFRS",
    topic: "IAS 36 — Impairment of Assets",
    difficulty: "intermediate",
    domain: "recoverable-amount",
    question: {
      ar: "كيف تُحدد القيمة القابلة للاسترداد لأصل أو وحدة مولدة للنقد وفق IAS 36؟",
      en: "How is recoverable amount determined under IAS 36?",
    },
    choices: {
      ar: [
        "القيمة الدفترية فقط",
        "الأقل من القيمة العادلة والقيمة الاستخدامية",
        "الأعلى من القيمة العادلة ناقص تكاليف الاستبعاد والقيمة الاستخدامية",
        "التكلفة التاريخية فقط",
      ],
      en: [
        "Carrying amount only",
        "The lower of fair value and value in use",
        "The higher of fair value less costs of disposal and value in use",
        "Historical cost only",
      ],
    },
    answerIndex: 2,
    explanation: {
      ar: "القيمة القابلة للاسترداد هي الأعلى بين القيمة العادلة ناقص تكاليف الاستبعاد والقيمة الاستخدامية. تُثبت خسارة انخفاض إذا تجاوزت القيمة الدفترية هذه القيمة القابلة للاسترداد.",
      en: "Recoverable amount is the higher of fair value less costs of disposal and value in use. An impairment loss arises when carrying amount exceeds recoverable amount.",
    },
    reference: "IFRS Foundation — IAS 36 Impairment of Assets",
  },
  {
    id: "ifrs-hub-ifrs13-01",
    track: "IFRS",
    topic: "IFRS 13 — Fair Value Measurement",
    difficulty: "easy",
    domain: "measurement",
    question: {
      ar: "ما طبيعة قياس القيمة العادلة في IFRS 13؟",
      en: "What is the nature of fair value measurement under IFRS 13?",
    },
    choices: {
      ar: [
        "قياس خاص بالمنشأة يعتمد فقط على نيتها الداخلية",
        "سعر خروج قائم على السوق في معاملة منتظمة بين مشاركين في السوق بتاريخ القياس",
        "التكلفة التاريخية المعدلة دائماً",
        "القيمة الدفترية دون تعديل",
      ],
      en: [
        "An entity-specific measure based only on internal intent",
        "A market-based exit price in an orderly transaction between market participants at the measurement date",
        "Always adjusted historical cost",
        "Unadjusted carrying amount",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "IFRS 13 يعرّف القيمة العادلة باعتبارها قياساً قائماً على السوق، ويركز على سعر الخروج في معاملة منتظمة بين مشاركين في السوق في تاريخ القياس.",
      en: "IFRS 13 defines fair value as a market-based measure focused on an exit price in an orderly transaction between market participants at the measurement date.",
    },
    reference: "IFRS Foundation — IFRS 13 Fair Value Measurement",
  },
  {
    id: "ifrs-hub-ias7-01",
    track: "IFRS",
    topic: "IAS 7 — Statement of Cash Flows",
    difficulty: "easy",
    domain: "classification",
    question: {
      ar: "شراء آلة نقداً يُصنّف عادةً في قائمة التدفقات النقدية وفق IAS 7 ضمن أي نشاط؟",
      en: "A cash purchase of machinery is generally classified under IAS 7 as which type of cash flow?",
    },
    choices: {
      ar: ["تشغيلي", "استثماري", "تمويلي", "غير نقدي"],
      en: ["Operating", "Investing", "Financing", "Non-cash"],
    },
    answerIndex: 1,
    explanation: {
      ar: "اقتناء أصل طويل الأجل مثل الآلات يمثل عادةً تدفقاً نقدياً استثمارياً، لأنه يتعلق بالحصول على موارد يُتوقع أن تسهم في توليد تدفقات نقدية مستقبلية.",
      en: "Acquiring a long-term asset such as machinery is generally an investing cash flow because it relates to resources expected to generate future cash flows.",
    },
    reference: "IFRS Foundation — IAS 7 Statement of Cash Flows",
  },
  {
    id: "ifrs-hub-ifrs18-01",
    track: "IFRS",
    topic: "IFRS 18 — Presentation and Disclosure",
    difficulty: "intermediate",
    domain: "presentation",
    question: {
      ar: "أي موضوع يُعد من أبرز التغييرات التي قدمها IFRS 18؟",
      en: "Which topic is a major change introduced by IFRS 18?",
    },
    choices: {
      ar: [
        "إلغاء قائمة الربح أو الخسارة",
        "فئات ومجاميع فرعية محددة في قائمة الربح أو الخسارة ومتطلبات إفصاح لمقاييس الأداء المحددة من الإدارة",
        "إلغاء الإفصاحات نهائياً",
        "استبدال IFRS 9",
      ],
      en: [
        "Eliminating the statement of profit or loss",
        "Specified categories and subtotals in profit or loss plus disclosures for management-defined performance measures",
        "Eliminating disclosures entirely",
        "Replacing IFRS 9",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "يركز IFRS 18 على تحسين قابلية المقارنة والتواصل في القوائم المالية، ومن أبرز عناصره فئات ومجاميع فرعية محددة في قائمة الربح أو الخسارة وإفصاحات مرتبطة بمقاييس الأداء المحددة من الإدارة.",
      en: "IFRS 18 aims to improve comparability and communication in financial statements, including specified profit-or-loss categories and subtotals and disclosures for management-defined performance measures.",
    },
    reference: "IFRS Foundation — IFRS 18 Presentation and Disclosure in Financial Statements",
  },
  {
    id: "ifrs-hub-ifrs3-01",
    track: "IFRS",
    topic: "IFRS 3 — Business Combinations",
    difficulty: "intermediate",
    domain: "goodwill",
    question: {
      ar: "في تجميع أعمال يقع ضمن نطاق IFRS 3، ماذا تمثل الشهرة بصورة مبسطة؟",
      en: "In a business combination within IFRS 3, what does goodwill broadly represent?",
    },
    choices: {
      ar: [
        "كل أصول المنشأة المستحوذ عليها",
        "الزيادة المتبقية في المقابل ومكونات القياس ذات الصلة على صافي الأصول القابلة للتحديد المقاسة وفق المعيار",
        "رصيد النقد فقط",
        "الالتزامات المتداولة فقط",
      ],
      en: [
        "All assets of the acquiree",
        "The residual excess of the consideration and relevant measurement components over identifiable net assets measured under the standard",
        "Cash balance only",
        "Current liabilities only",
      ],
    },
    answerIndex: 1,
    explanation: {
      ar: "ضمن طريقة الاستحواذ، تُقاس الأصول والالتزامات القابلة للتحديد وفق متطلبات IFRS 3، وتمثل الشهرة المبلغ المتبقي بعد مقارنة المقابل ومكونات القياس ذات الصلة بصافي تلك الأصول القابلة للتحديد.",
      en: "Under the acquisition method, identifiable assets and liabilities are measured under IFRS 3 and goodwill is the residual after comparing consideration and relevant measurement components with those identifiable net assets.",
    },
    reference: "IFRS Foundation — IFRS 3 Business Combinations",
  },
];
