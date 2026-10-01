/** Original educational cases; amounts are illustrative currency units (CU). */
export type LocalizedText = { ar: string; en: string };
type Pair = readonly [string, string];

export interface StandardDeepDive {
  caseTitle: LocalizedText;
  caseFacts: LocalizedText;
  calculationSteps: LocalizedText[];
  conclusion: LocalizedText;
  journalEntries: Array<{
    label: LocalizedText;
    debit: LocalizedText;
    credit: LocalizedText;
    amount: LocalizedText;
    note: LocalizedText;
  }>;
  technicalPoints: LocalizedText[];
  disclosureChecks: LocalizedText[];
  decisionPath: LocalizedText[];
  dataFields: LocalizedText[];
  relatedStandards: string[];
}

type EntryFact = readonly [Pair, Pair, Pair, number, Pair];
type CaseFact = {
  title: Pair;
  facts: Pair;
  steps: Pair[];
  conclusion: Pair;
  entries?: EntryFact[];
  tech: Pair[];
  disclose: Pair[];
  path: Pair[];
};

const localize = ([ar, en]: Pair): LocalizedText => ({ ar, en });
const localizeAll = (items: Pair[]) => items.map(localize);
const define = (item: CaseFact): StandardDeepDive => ({
  caseTitle: localize(item.title),
  caseFacts: localize(item.facts),
  calculationSteps: localizeAll(item.steps),
  conclusion: localize(item.conclusion),
  journalEntries: (item.entries ?? []).map(([label, debit, credit, amount, note]) => ({
    label: localize(label),
    debit: localize(debit),
    credit: localize(credit),
    amount: localize([amount.toLocaleString("en-US"), amount.toLocaleString("en-US")]),
    note: localize(note),
  })),
  technicalPoints: localizeAll(item.tech),
  disclosureChecks: localizeAll(item.disclose),
  decisionPath: localizeAll(item.path),
  dataFields: [],
  relatedStandards: [],
});

export const IFRS_STANDARD_DEEP_DIVES: Record<string, StandardDeepDive> = {
  "IFRS 1": define({
    title: ["قائمة افتتاحية عند التحول", "Opening balance sheet on transition"],
    facts: [
      "في تاريخ الانتقال يظهر أصل بــ 900,000 في الأساس السابق؛ قيمته العادلة 1,050,000، واختارت المنشأة إعفاء التكلفة المفترضة المؤهل.",
      "At transition an asset has a previous-GAAP carrying amount of 900,000 and a fair value of 1,050,000; the entity elects an eligible deemed-cost exemption.",
    ],
    steps: [
      ["احسب الفرق: 1,050,000 − 900,000 = 150,000.", "Difference: 1,050,000 − 900,000 = 150,000."],
      [
        "أعد قائمة افتتاحية وتسوية حقوق ملكية، وافحص ضريبة الدخل المؤجلة إن انطبقت.",
        "Prepare the opening statement and equity reconciliation; assess any deferred tax effect.",
      ],
    ],
    conclusion: [
      "هذه تسوية انتقال افتتاحية، لا ربح تشغيل في سنة التحول.",
      "This is an opening transition adjustment, not operating profit in the transition year.",
    ],
    entries: [
      [
        ["إثبات التكلفة المفترضة", "Recognise deemed cost"],
        ["أصل ثابت", "Property, plant and equipment"],
        ["أرباح مبقاة/احتياطي انتقال", "Retained earnings/transition reserve"],
        150000,
        [
          "القيد مبسط قبل الضريبة المؤجلة وأي أثر للإعفاءات الأخرى.",
          "Simplified entry before deferred tax and other exemptions.",
        ],
      ],
    ],
    tech: [
      [
        "لا تستخدم معلومات ظهرت بعد تاريخ الانتقال لتعديل تقديرات كانت معقولة حينها.",
        "Do not use later information to revise estimates that were reasonable at the transition date.",
      ],
    ],
    disclose: [
      [
        "طابق تسويات حقوق الملكية والربح بين الأساس السابق وIFRS.",
        "Reconcile equity and profit from previous GAAP to IFRS.",
      ],
    ],
    path: [
      [
        "حدد تاريخ الانتقال ← اختر الإعفاءات ← أعد القيود ← طابق المقارنات.",
        "Set transition date → elect exemptions → post adjustments → reconcile comparatives.",
      ],
    ],
  }),
  "IFRS 2": define({
    title: ["خيارات موظفين تستحق بالخدمة", "Employee options vesting through service"],
    facts: [
      "مُنح 1,000 خيار بقيمة عادلة 30 للخيار في تاريخ المنح، وتستحق بعد ثلاث سنوات خدمة؛ المتوقع استحقاقها جميعًا.",
      "An entity grants 1,000 options with grant-date fair value of 30 each, vesting after three years of service; all are expected to vest.",
    ],
    steps: [
      [
        "إجمالي قيمة الخدمة 1,000 × 30 = 30,000؛ مصروف كل سنة 10,000.",
        "Total service value is 1,000 × 30 = 30,000; annual expense is 10,000.",
      ],
      [
        "حدّث عدد الأدوات المتوقع استحقاقها إذا تغيرت شروط الخدمة غير السوقية.",
        "Update expected vesting quantities if non-market service conditions change.",
      ],
    ],
    conclusion: [
      "تثبت الخدمة خلال فترة الاستحقاق مقابل احتياطي حقوق ملكية.",
      "Recognise service over the vesting period against an equity reserve.",
    ],
    entries: [
      [
        ["مصروف السنة الأولى", "Year-one expense"],
        ["مصروف تعويضات الموظفين", "Employee compensation expense"],
        ["احتياطي الدفع على أساس الأسهم", "Share-based payment reserve"],
        10000,
        [
          "جائزة مسددة بأدوات ملكية؛ لا تعاد قياس قيمة تاريخ المنح لمجرد تغير سعر السهم.",
          "Equity-settled award; grant-date fair value is not remeasured merely because the share price changes.",
        ],
      ],
    ],
    tech: [
      [
        "فرّق بين شروط السوق المضمنة في القيمة العادلة وشروط الخدمة التي تؤثر في عدد الجوائز المتوقع استحقاقها.",
        "Separate market conditions embedded in fair value from service conditions affecting expected vesting quantities.",
      ],
    ],
    disclose: [
      [
        "اذكر عدد الخيارات وحركتها ومتوسط أسعار الممارسة ومنهج التقييم.",
        "Disclose option movements, weighted exercise prices and valuation method.",
      ],
    ],
    path: [
      [
        "حدد نوع التسوية ← تاريخ المنح ← القيمة العادلة ← فترة الخدمة.",
        "Determine settlement type → grant date → fair value → service period.",
      ],
    ],
  }),
  "IFRS 3": define({
    title: ["حساب الشهرة عند شراء عمل", "Goodwill in a business acquisition"],
    facts: [
      "دُفع 1,000,000 للاستحواذ على 100% من عمل، والقيمة العادلة لصافي أصوله القابلة للتحديد 800,000.",
      "Consideration of 1,000,000 buys 100% of a business whose identifiable net assets have fair value of 800,000.",
    ],
    steps: [
      [
        "الشهرة = المقابل 1,000,000 − صافي الأصول 800,000 = 200,000.",
        "Goodwill = 1,000,000 consideration − 800,000 net assets = 200,000.",
      ],
      [
        "افصل الأصول غير الملموسة المحددة قبل اعتبار الفرق شهرة.",
        "Identify separate intangible assets before treating the residual as goodwill.",
      ],
    ],
    conclusion: [
      "تعترف المجموعة بشهرة 200,000 وتختبرها لاحقًا للانخفاض.",
      "The group recognises 200,000 goodwill and subsequently tests it for impairment.",
    ],
    entries: [
      [
        ["تسوية تجميع مبسطة", "Simplified consolidation adjustment"],
        [
          "صافي أصول محددة 800,000 وشهرة 200,000",
          "Identifiable net assets 800,000 and goodwill 200,000",
        ],
        ["الاستثمار في التابعة", "Investment in subsidiary"],
        1000000,
        [
          "تسوية في ورقة القوائم الموحدة، لا قيد في دفاتر الشركة الأم المنفصلة؛ تفترض عدم وجود حصة غير مسيطرة أو مقابل محتمل.",
          "A consolidated-statement worksheet adjustment, not an entry in the parent's separate ledger; assumes no NCI or contingent consideration.",
        ],
      ],
    ],
    tech: [
      [
        "تحقق أولًا من أن المجموعة المشتراة تمثل عملًا لا مجرد أصول.",
        "First confirm that the acquired set is a business rather than only assets.",
      ],
    ],
    disclose: [
      [
        "اشرح المقابل، الأصول والالتزامات الرئيسية، والشهرة وأسباب نشوئها.",
        "Explain consideration, major acquired assets and liabilities, and the reasons for goodwill.",
      ],
    ],
    path: [
      [
        "اختبار العمل ← تحديد المستحوذ والتاريخ ← تقييم صافي الأصول ← حساب الشهرة.",
        "Business test → identify acquirer/date → value net assets → calculate goodwill.",
      ],
    ],
  }),
  "IFRS 5": define({
    title: ["آلة جاهزة للبيع", "Machine available for sale"],
    facts: [
      "قيمتها الدفترية 500,000، والقيمة العادلة ناقص تكاليف البيع 460,000؛ الإدارة التزمت بخطة بيع مرجحة التنفيذ.",
      "A machine carries at 500,000; fair value less costs to sell is 460,000; management has committed to a highly probable sale plan.",
    ],
    steps: [
      [
        "قارن 500,000 مع 460,000؛ فرق القياس 40,000 خسارة.",
        "Compare 500,000 with 460,000; the write-down is 40,000.",
      ],
      [
        "أوقف الإهلاك من تاريخ تحقق تصنيف المحتفظ به للبيع.",
        "Cease depreciation when held-for-sale classification criteria are met.",
      ],
    ],
    conclusion: [
      "اعرض الأصل منفصلًا بمبلغ 460,000؛ تصنيف العملية غير المستمرة يحتاج اختبارًا إضافيًا.",
      "Present the asset separately at 460,000; discontinued-operation presentation requires a separate assessment.",
    ],
    entries: [
      [
        ["خفض القيمة", "Write-down"],
        ["خسارة قياس أصل محتفظ به للبيع", "Held-for-sale measurement loss"],
        ["الأصل المحتفظ به للبيع", "Asset held for sale"],
        40000,
        [
          "يفترض اكتمال القياس المطلوب بموجب المعايير المعنية قبل تطبيق IFRS 5.",
          "Assumes measurement under relevant Standards has been completed before IFRS 5 is applied.",
        ],
      ],
    ],
    tech: [
      [
        "نية البيع وحدها لا تكفي؛ افحص الجاهزية الفورية واحتمال الإتمام العالي.",
        "Intent to sell alone is insufficient; assess immediate availability and high probability of completion.",
      ],
    ],
    disclose: [
      [
        "صف الأصل ووقائع خطة البيع والخسارة والقطاع المعني إن لزم.",
        "Describe the asset, sale-plan facts, loss and relevant segment where applicable.",
      ],
    ],
    path: [
      [
        "اختبر الشروط ← قِس بالأقل ← أوقف الإهلاك ← راجع تصنيف العملية.",
        "Test criteria → measure at lower amount → stop depreciation → assess operation classification.",
      ],
    ],
  }),
  "IFRS 6": define({
    title: ["نفقات استكشاف بعد الترخيص", "Exploration spending after licence"],
    facts: [
      "حصلت منشأة تعدين على حق استكشاف؛ أنفقت 120,000 على مسح جيولوجي مؤهل وفق سياستها، قبل إثبات الجدوى الفنية والتجارية.",
      "A mining entity has exploration rights and spends 120,000 on a geological survey qualifying under its policy, before technical and commercial feasibility is established.",
    ],
    steps: [
      [
        "تحقق من تاريخ الحق القانوني وطبيعة الإنفاق؛ سجل 120,000 ضمن أصل استكشاف وتقييم.",
        "Confirm the legal-right date and nature of spending; record 120,000 as an exploration and evaluation asset.",
      ],
      [
        "راقب انتهاء الحق، غياب ميزانية مستقبلية، أو نتائج تشير إلى عدم الاسترداد.",
        "Monitor licence expiry, lack of future budget or results indicating non-recovery.",
      ],
    ],
    conclusion: [
      "التصنيف مؤقت حتى إثبات الجدوى، وعندها يعاد تقييم الانخفاض قبل إعادة التصنيف.",
      "The classification lasts only until feasibility is demonstrated; impairment is assessed before reclassification.",
    ],
    entries: [
      [
        ["رسملة مسح مؤهل", "Capitalise qualifying survey"],
        ["أصل استكشاف وتقييم", "Exploration and evaluation asset"],
        ["النقد/الدائنون", "Cash/payables"],
        120000,
        [
          "مشروط بسياسة محاسبية متسقة وبوقوع الإنفاق داخل نطاق IFRS 6.",
          "Subject to a consistent accounting policy and expenditure falling within IFRS 6 scope.",
        ],
      ],
    ],
    tech: [
      [
        "لا تضم تكاليف ما قبل الترخيص أو ما بعد إثبات الجدوى تلقائيًا إلى أصل IFRS 6.",
        "Do not automatically include pre-licence costs or post-feasibility spending in the IFRS 6 asset.",
      ],
    ],
    disclose: [
      [
        "أوضح سياسة الرسملة وفئة الأصل والخسائر ومبالغ الاستكشاف المهمة.",
        "Explain capitalisation policy, asset class, impairments and material exploration amounts.",
      ],
    ],
    path: [
      [
        "حق قانوني ← فترة الاستكشاف ← سياسة الرسملة ← مؤشرات الانخفاض.",
        "Legal right → exploration phase → capitalisation policy → impairment indicators.",
      ],
    ],
  }),
  "IFRS 7": define({
    title: ["سلم استحقاق السيولة", "Liquidity maturity ladder"],
    facts: [
      "التزامات تعاقدية غير مخصومة: 200,000 خلال سنة، 300,000 خلال سنتين إلى خمس، و100,000 بعد خمس سنوات.",
      "Undiscounted contractual obligations are 200,000 within one year, 300,000 in years two to five, and 100,000 after year five.",
    ],
    steps: [
      [
        "مجموع التدفقات التعاقدية 600,000، وقد يختلف عن القيمة الدفترية بسبب الفائدة والخصم.",
        "Total contractual cash flows are 600,000 and can differ from carrying amounts because of interest and discounting.",
      ],
      [
        "صنّف الفترات على أساس آجال العقد وأضف وصف طريقة إدارة خطر السيولة.",
        "Bucket the periods by contractual maturities and explain liquidity-risk management.",
      ],
    ],
    conclusion: [
      "العمل هنا جدول إفصاح ومصالحة مع سجل الالتزامات؛ لا ينشأ قيد من إعداد الجدول.",
      "The output is a disclosure table reconciled to the liability register; creating it does not generate a journal entry.",
    ],
    tech: [
      [
        "لا تعرض الرصيد الدفتري المخصوم باعتباره كل التدفقات التعاقدية غير المخصومة.",
        "Do not present discounted carrying values as all undiscounted contractual cash flows.",
      ],
    ],
    disclose: [
      [
        "قدم مخاطر الائتمان والسيولة والسوق وأساليب إدارتها وتحليلات الاستحقاق اللازمة.",
        "Provide credit, liquidity and market risk information, risk-management methods and required maturity analysis.",
      ],
    ],
    path: [
      [
        "استخرج العقود ← ابنِ التدفقات ← صنف الآجال ← طابق الأرصدة.",
        "Extract contracts → build cash flows → bucket maturities → reconcile balances.",
      ],
    ],
  }),
  "IFRS 8": define({
    title: ["اختبار قطاع قابل للتقرير", "Reportable segment test"],
    facts: [
      "إيراد قطاع الطاقة 120 مليونًا من إجمالي إيرادات القطاعات 900 مليون، وتراجعه الإدارة العليا بصورة منفصلة.",
      "An energy segment has revenue of 120 million out of total segment revenue of 900 million and is separately reviewed by the chief operating decision maker.",
    ],
    steps: [
      [
        "نسبة الإيراد 120 ÷ 900 = 13.3%، فتتجاوز حد 10% الكمي.",
        "Revenue share is 120 ÷ 900 = 13.3%, exceeding the 10% quantitative threshold.",
      ],
      [
        "افحص أيضًا تغطية 75% من الإيراد الخارجي ومعايير الربح والأصول والتجميع.",
        "Also assess 75% external-revenue coverage, profit/assets thresholds and aggregation criteria.",
      ],
    ],
    conclusion: [
      "يحتاج القطاع إلى عرض منفصل إذا استوفى تعريف القطاع التشغيلي؛ النسب وحدها لا تنشئ قيدًا.",
      "Separate reporting follows if it meets the operating-segment definition; thresholds do not create an entry.",
    ],
    tech: [
      [
        "استخدم حزم التقارير الداخلية الفعلية، ولو اختلفت مقاييس الإدارة عن IFRS، مع المصالحات اللازمة.",
        "Use actual internal reporting packages, even where management measures differ from IFRS, with required reconciliations.",
      ],
    ],
    disclose: [
      [
        "صالح مجموع إيرادات ونتائج وأصول القطاعات مع مبالغ القوائم.",
        "Reconcile total segment revenue, results and assets to financial statement amounts.",
      ],
    ],
    path: [
      [
        "حدد متخذ القرار ← استخرج القطاعات ← اختبر العتبات ← صالح الإجماليات.",
        "Identify decision maker → identify segments → test thresholds → reconcile totals.",
      ],
    ],
  }),
  "IFRS 9": define({
    title: ["مخصص خسائر ائتمانية متوقعة", "Expected credit loss allowance"],
    facts: [
      "رصيد قرض 1,000,000؛ احتمال التعثر خلال الفترة المناسبة 3%، والخسارة عند التعثر 40%، والتعرض 1,000,000، مع افتراض عدم أثر للخصم في هذا المثال المبسط.",
      "A loan exposure is 1,000,000; relevant default probability is 3%, loss given default 40%, exposure 1,000,000, with discounting ignored in this simplified example.",
    ],
    steps: [
      [
        "ECL المبسط = 1,000,000 × 3% × 40% = 12,000.",
        "Simplified ECL = 1,000,000 × 3% × 40% = 12,000.",
      ],
      [
        "حدد المرحلة الائتمانية وأفق الخسارة والسيناريوهات المستقبلية قبل اعتماد المبلغ.",
        "Determine credit stage, loss horizon and forward-looking scenarios before approving the amount.",
      ],
    ],
    conclusion: [
      "يسجل مخصص 12,000 إذا دعمته المدخلات النهائية للنموذج.",
      "Record a 12,000 allowance if final model inputs support it.",
    ],
    entries: [
      [
        ["تكوين مخصص", "Recognise allowance"],
        ["مصروف خسائر ائتمانية", "Credit impairment expense"],
        ["مخصص خسائر ائتمانية متوقعة", "Expected credit loss allowance"],
        12000,
        [
          "الحساب تدريبي؛ النماذج الفعلية تشمل الخصم والسيناريوهات والتحقق من SICR.",
          "Educational calculation; production models include discounting, scenarios and SICR assessment.",
        ],
      ],
    ],
    tech: [
      [
        "تصنيف الأصل يتوقف على نموذج الأعمال واختبار التدفقات التعاقدية، لا على جودة الائتمان وحدها.",
        "Asset classification depends on business model and contractual cash-flow test, not credit quality alone.",
      ],
    ],
    disclose: [
      [
        "اربط حركة المخصص بمراحل الائتمان ومبالغ التعرض وافتراضات النموذج.",
        "Reconcile allowance movements to credit stages, exposures and model assumptions.",
      ],
    ],
    path: [
      [
        "صنّف الأداة ← حدد المرحلة ← احسب ECL ← طابق سجل القروض.",
        "Classify instrument → determine stage → calculate ECL → reconcile loan register.",
      ],
    ],
  }),
  "IFRS 10": define({
    title: ["إلغاء بيع داخل المجموعة", "Eliminate an intragroup sale"],
    facts: [
      "شركة أم تسيطر على تابعة؛ باعت الأم للتابعة مخزونًا مقابل 100,000 بتكلفة 70,000، وبقي كله لدى التابعة بنهاية الفترة.",
      "A parent controls a subsidiary and sells inventory to it for 100,000 that cost 70,000; all remains with the subsidiary at year end.",
    ],
    steps: [
      [
        "ألغِ بيعًا وشراءً داخليين بقيمة 100,000.",
        "Eliminate 100,000 intragroup sale and purchase.",
      ],
      [
        "الربح غير المحقق = 100,000 − 70,000 = 30,000؛ خفّض المخزون المجمع.",
        "Unrealised profit = 100,000 − 70,000 = 30,000; reduce consolidated inventory.",
      ],
    ],
    conclusion: [
      "المخزون في القوائم الموحدة يبقى 70,000 قبل آثار أخرى.",
      "Consolidated inventory remains at 70,000 before other effects.",
    ],
    entries: [
      [
        [
          "إلغاء ربح غير محقق في ورقة التوحيد",
          "Eliminate unrealised profit in consolidation worksheet",
        ],
        ["تكلفة المبيعات", "Cost of sales"],
        ["المخزون", "Inventory"],
        30000,
        [
          "قيد تجميعي لا يسجل في دفاتر كل شركة منفردة؛ وتلزم أيضًا تسوية البيع/الشراء الداخلي.",
          "Consolidation-only worksheet entry; also eliminate the intragroup sale and purchase.",
        ],
      ],
    ],
    tech: [
      [
        "السيطرة تجمع سلطة القرار والتعرض للعوائد والقدرة على التأثير فيها.",
        "Control combines power, exposure to variable returns and ability to affect those returns.",
      ],
    ],
    disclose: [
      [
        "وضح الأحكام المهمة لتحديد السيطرة والحصص غير المسيطرة.",
        "Explain significant control judgements and non-controlling interests.",
      ],
    ],
    path: [
      [
        "اختبر السيطرة ← وحّد الأرصدة ← ألغِ المعاملات والأرباح الداخلية.",
        "Assess control → combine balances → eliminate intragroup transactions and profits.",
      ],
    ],
  }),
  "IFRS 11": define({
    title: ["حقوق مباشرة في عملية مشتركة", "Direct rights in a joint operation"],
    facts: [
      "ترتيب 50/50 يمنح كل طرف حقًا مباشرًا في الأصول والتزامًا مباشرًا بالديون؛ اشترت العملية معدات بـ 200,000 نقدًا من الطرفين.",
      "A 50/50 arrangement gives each party direct rights to assets and direct obligations for liabilities; it buys equipment for 200,000 funded by the parties.",
    ],
    steps: [
      [
        "حصة كل مشغّل في المعدات 100,000، وكذلك مساهمته النقدية 100,000.",
        "Each operator's equipment share and cash contribution are 100,000.",
      ],
      [
        "افحص نص العقد والشكل القانوني والوقائع الأخرى؛ نسبة 50% لا تكفي وحدها.",
        "Assess contract, legal form and other facts; 50% ownership alone is insufficient.",
      ],
    ],
    conclusion: [
      "في العملية المشتركة يسجل كل مشغّل حصته في الأصل والالتزام والإيراد والمصروف؛ المشروع المشترك يعالج بطريقة حقوق الملكية.",
      "Each joint operator recognises its share of assets, liabilities, income and expenses; a joint venture uses the equity method.",
    ],
    entries: [
      [
        ["شراء حصة المشغّل", "Operator's equipment share"],
        ["معدات", "Equipment"],
        ["النقد", "Cash"],
        100000,
        [
          "يفترض أن المعدات مملوكة مباشرة للأطراف وليس لمنشأة مستقلة تمنحهم صافي حقوق فقط.",
          "Assumes direct rights to equipment rather than rights only to a separate vehicle's net assets.",
        ],
      ],
    ],
    tech: [
      [
        "ابدأ بالحقوق والالتزامات الفعلية، لا باسم الترتيب في العقد.",
        "Start with substantive rights and obligations, not the arrangement's name.",
      ],
    ],
    disclose: [
      [
        "اشرح نوع الترتيب والأحكام التي دعمت تصنيفه.",
        "Explain arrangement type and classification judgements.",
      ],
    ],
    path: [
      [
        "سيطرة مشتركة؟ ← حقوق في الأصول أم صافي الأصول؟ ← اختر المعالجة.",
        "Joint control? → rights to assets or net assets? → choose accounting.",
      ],
    ],
  }),
  "IFRS 12": define({
    title: ["حصة غير مسيطرة جوهرية", "Material non-controlling interest"],
    facts: [
      "تملك المجموعة 80% من تابعة؛ تمتلك الأقلية 20%، وربح التابعة 500,000 وأصولها 4,000,000.",
      "A group owns 80% of a subsidiary; NCI owns 20%; subsidiary profit is 500,000 and assets are 4,000,000.",
    ],
    steps: [
      [
        "حصة الأقلية في الربح، قبل تعديلات التوحيد، 500,000 × 20% = 100,000.",
        "NCI's share of profit before consolidation adjustments is 500,000 × 20% = 100,000.",
      ],
      [
        "أعد معلومات مالية ملخصة للتابعة وعدّلها وفق أساس التقرير المطلوب.",
        "Prepare summarised financial information for the subsidiary on the required reporting basis.",
      ],
    ],
    conclusion: [
      "المعيار يطلب إفصاحات عن المصالح والأحكام والمخاطر؛ الحساب مثال لجدول الإفصاح لا لقيد مستقل.",
      "The Standard requires disclosures about interests, judgements and risks; the calculation feeds a disclosure table, not a standalone entry.",
    ],
    tech: [
      [
        "قيّم جوهرية الحصة غير المسيطرة على مستوى كل تابعة، لا على مستوى المجموعة فقط.",
        "Assess material NCI at each subsidiary level, not only group-wide.",
      ],
    ],
    disclose: [
      [
        "اعرض نسبة الملكية والتصويت، معلومات مالية ملخصة، قيود تحويل النقد والمخاطر المهمة.",
        "Disclose ownership/voting interests, summarised financial data, transfer restrictions and significant risks.",
      ],
    ],
    path: [
      [
        "احصر المصالح ← قيّم الجوهرية ← اجمع البيانات ← صالح مع التوحيد.",
        "Inventory interests → assess materiality → collect data → reconcile to consolidation.",
      ],
    ],
  }),
  "IFRS 13": define({
    title: ["قيمة عادلة بتدفقات مخصومة", "Fair value from discounted cash flows"],
    facts: [
      "أصل يولد تدفقًا واحدًا متوقعًا 110,000 بعد سنة؛ معدل خصم يعكس افتراضات المشاركين بالسوق 10%، ولا توجد تعقيدات أخرى.",
      "An asset yields one expected cash flow of 110,000 in one year; a 10% discount rate reflects market-participant assumptions, with no other complexities.",
    ],
    steps: [
      ["القيمة الحالية = 110,000 ÷ 1.10 = 100,000.", "Present value = 110,000 ÷ 1.10 = 100,000."],
      [
        "افحص ما إذا كانت المدخلات قابلة للملاحظة وحدد مستوى التسلسل الهرمي.",
        "Assess input observability and determine the fair-value hierarchy level.",
      ],
    ],
    conclusion: [
      "100,000 قيمة تعليمية؛ الاعتراف بأي فرق يتحدد بالمعيار الذي طلب القيمة العادلة.",
      "100,000 is an illustrative fair value; the Standard requiring fair value determines recognition of any difference.",
    ],
    tech: [
      [
        "IFRS 13 يحدد طريقة القياس ولا يقرر متى يجب قياس الأصل بالقيمة العادلة.",
        "IFRS 13 specifies how to measure fair value, not when fair value must be used.",
      ],
    ],
    disclose: [
      [
        "وثّق تقنية التقييم والمدخلات المهمة ومستوى الهرم وأي حساسية لازمة.",
        "Document valuation technique, significant inputs, hierarchy level and required sensitivities.",
      ],
    ],
    path: [
      [
        "حدد الأصل/الالتزام ووحدة الحساب ← سوق رئيسية ← تقنية ومدخلات ← إفصاح.",
        "Identify item/unit of account → principal market → technique and inputs → disclosure.",
      ],
    ],
  }),
  "IFRS 14": define({
    title: [
      "رصيد تأجيل تنظيمي قائم عند التحول",
      "Existing regulatory deferral balance on transition",
    ],
    facts: [
      "منشأة مؤهلة تطبق IFRS لأول مرة وكان لديها رصيد تأجيل تنظيمي 80,000 وفق أساسها السابق.",
      "An eligible first-time adopter has an 80,000 regulatory deferral balance recognised under previous GAAP.",
    ],
    steps: [
      [
        "تحقق من أهلية التطبيق ومن وجود سياسة سابقة؛ لا تنشئ رصيدًا لمجرد توقع تعويض مستقبلي.",
        "Confirm eligibility and previous-GAAP policy; do not create a balance solely from expected future recovery.",
      ],
      [
        "استمر في سياسة القياس المؤهلة واعرض الرصيد 80,000 منفصلًا وفق متطلبات المعيار.",
        "Continue the qualifying measurement policy and present the 80,000 balance separately as required.",
      ],
    ],
    conclusion: [
      "مثال عرض لرصيد سابق؛ لا يفترض قيد اعتراف جديدًا عند الانتقال.",
      "This illustrates presentation of a pre-existing balance; it assumes no new recognition entry on transition.",
    ],
    tech: [
      [
        "IFRS 14 متاح لفئة ضيقة من مطبقي IFRS لأول مرة؛ راقب أثر IFRS 20 عند سريانه.",
        "IFRS 14 is limited to certain first-time adopters; monitor the effect of IFRS 20 when effective.",
      ],
    ],
    disclose: [
      [
        "اعرض أرصدة التأجيل وحركاتها وأساس التنظيم بصورة منفصلة.",
        "Present deferral balances, movements and regulatory basis separately.",
      ],
    ],
    path: [
      [
        "أهلية أول تطبيق ← سياسة سابقة ← قياس مستمر ← عرض منفصل.",
        "First-time eligibility → existing policy → continued measurement → separate presentation.",
      ],
    ],
  }),
  "IFRS 15": define({
    title: ["عقد جهاز وصيانة", "Equipment and maintenance contract"],
    facts: [
      "السعر التعاقدي 120,000 لجهاز وصيانة سنة؛ أسعار البيع المستقلة 100,000 للجهاز و50,000 للصيانة، وسلم الجهاز عند البداية.",
      "A contract charges 120,000 for equipment and one year of maintenance; standalone prices are 100,000 and 50,000, and the equipment is delivered at inception.",
    ],
    steps: [
      [
        "توزيع السعر: الجهاز 120,000 × 100/150 = 80,000؛ الصيانة 40,000.",
        "Allocation: equipment 120,000 × 100/150 = 80,000; maintenance 40,000.",
      ],
      [
        "اعترف بـ 80,000 عند انتقال السيطرة، و3,333.33 تقريبًا شهريًا للصيانة إذا قدمت بالتساوي.",
        "Recognise 80,000 on transfer of control and approximately 3,333.33 monthly for evenly delivered maintenance.",
      ],
    ],
    conclusion: [
      "لا يسجل كامل 120,000 إيرادًا عند تسليم الجهاز؛ 40,000 التزام عقد يُفرج عنه مع الخدمة.",
      "Do not recognise the full 120,000 on equipment delivery; 40,000 remains a contract liability released as service is provided.",
    ],
    entries: [
      [
        ["تحصيل وتسليم الجهاز", "Collect and deliver equipment"],
        ["النقد 120,000", "Cash 120,000"],
        [
          "إيراد أجهزة 80,000؛ التزام عقد 40,000",
          "Equipment revenue 80,000; contract liability 40,000",
        ],
        120000,
        [
          "قيد مركب مبسط؛ تكلفة الجهاز تسجل منفصلة.",
          "Simplified compound entry; equipment cost is recorded separately.",
        ],
      ],
    ],
    tech: [
      [
        "اختبر تميز التزامات الأداء وافصل المقابل المتغير ومكون التمويل إن وُجدا.",
        "Assess distinct performance obligations and any variable consideration or financing component.",
      ],
    ],
    disclose: [
      [
        "اعرض أرصدة العقد والتزامات الأداء المتبقية وأحكام توزيع السعر.",
        "Disclose contract balances, remaining performance obligations and allocation judgements.",
      ],
    ],
    path: [
      [
        "عقد ← التزامات أداء ← سعر معاملة ← توزيع ← توقيت الاعتراف.",
        "Contract → performance obligations → transaction price → allocation → recognition timing.",
      ],
    ],
  }),
  "IFRS 16": define({
    title: ["عقد إيجار بدفعات سنوية", "Lease with annual payments"],
    facts: [
      "مستأجر يدفع 100,000 في نهاية كل سنة لمدة ثلاث سنوات، ومعدل الخصم 10%، دون تكاليف أولية أو حوافز.",
      "A lessee pays 100,000 at each year end for three years at a 10% discount rate, with no initial costs or incentives.",
    ],
    steps: [
      [
        "القيمة الحالية = 100,000/1.1 + 100,000/1.1² + 100,000/1.1³ ≈ 248,685.",
        "Present value = 100,000/1.1 + 100,000/1.1² + 100,000/1.1³ ≈ 248,685.",
      ],
      [
        "فائدة السنة الأولى ≈ 24,869؛ بعد دفعة 100,000 يصبح الالتزام ≈ 173,554؛ الإهلاك الخطي للأصل ≈ 82,895 سنويًا.",
        "Year-one interest ≈ 24,869; after the 100,000 payment liability ≈ 173,554; straight-line ROU depreciation ≈ 82,895 yearly.",
      ],
    ],
    conclusion: [
      "اعترف مبدئيًا بأصل حق استخدام والتزام إيجار يقاربان 248,685.",
      "Initially recognise an ROU asset and lease liability of approximately 248,685.",
    ],
    entries: [
      [
        ["بداية الإيجار", "Lease commencement"],
        ["أصل حق استخدام", "Right-of-use asset"],
        ["التزام إيجار", "Lease liability"],
        248685,
        [
          "الأرقام تقريبية؛ افحص مدة الإيجار والخيارات والدفعات المتغيرة والخدمات غير الإيجارية.",
          "Rounded figures; assess lease term, options, variable payments and non-lease services.",
        ],
      ],
    ],
    tech: [
      [
        "وجود أصل محدد وحق التحكم في استخدامه أهم من عنوان العقد.",
        "An identified asset and the right to control its use matter more than the contract label.",
      ],
    ],
    disclose: [
      [
        "قدم مصروف الفائدة والإهلاك والتدفقات وتحليل استحقاق التزامات الإيجار.",
        "Disclose interest, depreciation, cash flows and lease-liability maturity analysis.",
      ],
    ],
    path: [
      [
        "عقد يحتوي إيجارًا؟ ← مدة ودفعات ← خصم ← قياس لاحق وتعديل.",
        "Contains a lease? → term and payments → discount → subsequent measurement/modification.",
      ],
    ],
  }),
  "IFRS 17": define({
    title: ["هامش الخدمة التعاقدية", "Contractual service margin"],
    facts: [
      "مجموعة عقود تأمين مؤهلة للنموذج العام: القيمة الحالية للتدفقات المستقبلية الصافية الخارجة 900,000، وتعديل المخاطر 50,000، والأقساط المحصلة مقدمًا 1,000,000، دون تدفقات أخرى.",
      "An insurance-contract group under the general model has present value of net future outflows of 900,000, risk adjustment of 50,000 and premiums received up front of 1,000,000, with no other cash flows.",
    ],
    steps: [
      [
        "الفائض المبدئي المبسط = 1,000,000 − 900,000 − 50,000 = 50,000.",
        "Simplified initial surplus = 1,000,000 − 900,000 − 50,000 = 50,000.",
      ],
      [
        "يمنع هامش الخدمة التعاقدية الاعتراف بربح يوم أول؛ يحرر مع وحدات التغطية اللاحقة.",
        "The contractual service margin prevents day-one profit and is released over future coverage units.",
      ],
    ],
    conclusion: [
      "هامش توضيحي 50,000، مشروط بحدود العقد وتجميعه وقياس جميع التدفقات وفق IFRS 17.",
      "Illustrative CSM of 50,000, subject to contract boundary, grouping and complete IFRS 17 cash-flow measurement.",
    ],
    entries: [
      [
        ["تحصيل القسط عند البداية", "Receive premium at inception"],
        ["النقد", "Cash"],
        [
          "التزام عقود التأمين للتغطية المتبقية",
          "Insurance contract liability for remaining coverage",
        ],
        1000000,
        [
          "هامش الخدمة 50,000 جزء من قياس الالتزام في هذا المثال؛ لا يسجل ربحًا منفصلًا يوم البداية.",
          "The 50,000 CSM forms part of the liability measurement here; it is not separately recognised as day-one profit.",
        ],
      ],
    ],
    tech: [
      [
        "اختبر أولًا إن كان العقد ضمن IFRS 17، ثم حدد مجموعته والنموذج المناسب: العام أو تخصيص الأقساط أو المشاركة المتغيرة.",
        "First assess IFRS 17 scope, then group contracts and select the general, premium-allocation or variable-fee model.",
      ],
    ],
    disclose: [
      [
        "اعرض مصالحات الرصيد، إيراد التأمين، مصروف الخدمة وافتراضات المخاطر.",
        "Disclose roll-forwards, insurance revenue, service expense and risk assumptions.",
      ],
    ],
    path: [
      [
        "حدود العقد ← المجموعات ← التدفقات وتعديل المخاطر ← CSM ← وحدات التغطية.",
        "Contract boundary → groups → cash flows/risk adjustment → CSM → coverage units.",
      ],
    ],
  }),
  "IFRS 18": define({
    title: ["تصنيف الربح التشغيلي", "Classify operating profit"],
    facts: [
      "شركة صناعية لها إيراد 1,000,000 وتكلفة مبيعات 600,000 ومصروفات تشغيل 180,000 وفائدة تمويل 30,000.",
      "A manufacturer has revenue of 1,000,000, cost of sales 600,000, operating expenses 180,000 and financing interest 30,000.",
    ],
    steps: [
      [
        "الربح التشغيلي في المثال = 1,000,000 − 600,000 − 180,000 = 220,000.",
        "Illustrative operating profit = 1,000,000 − 600,000 − 180,000 = 220,000.",
      ],
      [
        "تعرض فائدة التمويل 30,000 ضمن فئة التمويل في هذا المثال؛ افحص أنشطة العمل الرئيسية والاستثناءات.",
        "Present 30,000 financing interest in financing here; assess specified main business activities and exceptions.",
      ],
    ],
    conclusion: [
      "العمل إعادة عرض وتصنيف لقائمة الربح وفق معيار يبدأ إلزاميًا من 2027؛ لا ينشئ القيد التشغيلي من تلقاء نفسه.",
      "This is profit-or-loss presentation under a Standard mandatory from 2027; categorisation alone creates no new entry.",
    ],
    tech: [
      [
        "ميز الربح التشغيلي المحدد بالمعيار من مقاييس الأداء التي تحددها الإدارة وتفصح عنها في إيضاح واحد.",
        "Distinguish the required operating-profit subtotal from management-defined performance measures disclosed in one note.",
      ],
    ],
    disclose: [
      [
        "اعرض الفئات والمجاميع الفرعية والمصالحات لكل مقياس أداء إداري مستخدم.",
        "Present required categories/subtotals and reconciliations for each management-defined performance measure used.",
      ],
    ],
    path: [
      [
        "حدد النشاط الرئيسي ← صنف بنود الربح ← احسب المجاميع ← اختبر MPM.",
        "Determine main activities → classify income/expenses → calculate subtotals → assess MPMs.",
      ],
    ],
  }),
  "IFRS 19": define({
    title: ["شركة تابعة مؤهلة لإفصاحات مخفضة", "Eligible subsidiary's reduced disclosures"],
    facts: [
      "شركة تابعة غير خاضعة للمساءلة العامة ضمن مجموعة تصدر قوائم موحدة وفق IFRS ومتاحة للاستخدام العام؛ لديها التزام إيجار 500,000 وأصل استخدام 480,000.",
      "A subsidiary without public accountability belongs to a group whose IFRS consolidated statements are available for public use; it has a 500,000 lease liability and 480,000 ROU asset.",
    ],
    steps: [
      [
        "اختبر شروط الأهلية والاختيار للفترة التي تبدأ من 2027 أو عند التطبيق المبكر المسموح.",
        "Check eligibility and election for periods beginning in 2027 or permitted early application.",
      ],
      [
        "استمر بقياس الإيجار وفق IFRS 16؛ استبدل فقط متطلبات الإفصاح ذات الصلة بمتطلبات IFRS 19.",
        "Continue IFRS 16 lease measurement; replace the relevant disclosure requirements with those of IFRS 19.",
      ],
    ],
    conclusion: [
      "يبقى القياس 500,000 و480,000 قبل أي حركة أخرى؛ تتغير حزمة الإفصاح عند الانتخاب الصحيح.",
      "Measurement remains 500,000 and 480,000 before other movements; the disclosure package changes on a valid election.",
    ],
    tech: [
      [
        "الأهلية لا تعني التطبيق التلقائي؛ IFRS 19 خيار للتابعة المؤهلة.",
        "Eligibility does not make application automatic; IFRS 19 is an election for an eligible subsidiary.",
      ],
    ],
    disclose: [
      [
        "أنشئ مصفوفة تربط كل موضوع إفصاح ببند IFRS 19 بدل قوائم إفصاح المعايير الأخرى.",
        "Map each disclosure topic to IFRS 19 rather than other Standards' disclosure lists.",
      ],
    ],
    path: [
      [
        "أهلية التبعية ← انتخاب التطبيق ← قياس IFRS كامل ← إفصاحات IFRS 19.",
        "Subsidiary eligibility → election → full IFRS measurement → IFRS 19 disclosures.",
      ],
    ],
  }),
  "IFRS 20": define({
    title: ["فرق توقيت في تعريفة منظمة", "Timing difference in regulated tariff"],
    facts: [
      "جهة تنظيمية تسمح بتحميل 120,000 تكلفة خدمة في تعريفة العام التالي بدل الفترة الحالية؛ المثال يصور فكرة فرق التوقيت فقط.",
      "A regulator permits recovery of 120,000 service cost in next year's tariff rather than the current period; the case illustrates the timing-difference concept only.",
    ],
    steps: [
      [
        "وثّق الاتفاقية التنظيمية والحق القابل للإنفاذ وسبب تأخر التحصيل.",
        "Document the regulatory agreement, enforceable right and reason for deferred recovery.",
      ],
      [
        "طابق 120,000 مع نموذج التعريفة والفترات المتأثرة؛ لا تستنتج أصلًا بمجرد نية الإدارة.",
        "Reconcile 120,000 to the tariff model and affected periods; management expectation alone does not establish an asset.",
      ],
    ],
    conclusion: [
      "IFRS 20 صادر في 2026 ويسري من 2029؛ هذه حالة مفاهيمية للتجهيز وليست حكمًا نهائيًا على الاعتراف أو القيد.",
      "IFRS 20 was issued in 2026 and becomes effective in 2029; this is a preparation case, not a definitive recognition or journal-entry conclusion.",
    ],
    tech: [
      [
        "طبّق IFRS 15 وحقوق امتياز الخدمة المعنية أولًا، ثم حلل حقوق والتزامات فرق التوقيت التنظيمي.",
        "Apply IFRS 15 and relevant service-concession rights first, then analyse regulatory timing rights and obligations.",
      ],
    ],
    disclose: [
      [
        "احتفظ بسجل فروق التوقيت والعقود والتعريفات إلى حين تطبيق المتطلبات النهائية ذات الصلة.",
        "Maintain a timing-difference, agreement and tariff register for application of the relevant final requirements.",
      ],
    ],
    path: [
      [
        "اتفاقية ملزمة ← فرق توقيت محدد ← سجل تسوية ← تاريخ سريان المعيار.",
        "Enforceable agreement → identified timing difference → reconciliation ledger → effective date.",
      ],
    ],
  }),
  "IAS 1": define({
    title: ["تصنيف قرض عند تاريخ التقرير", "Classifying a loan at reporting date"],
    facts: [
      "قرض 400,000 يستحق بعد 18 شهرًا، لكن شرطًا يجب الوفاء به في تاريخ التقرير انتُهك وأصبح القرض مستحقًا عند الطلب.",
      "A 400,000 loan matures in 18 months, but a covenant required at the reporting date was breached and the loan became payable on demand.",
    ],
    steps: [
      [
        "اختبر الحق القائم في تاريخ التقرير لتأجيل التسوية 12 شهرًا على الأقل.",
        "Assess the right existing at reporting date to defer settlement for at least 12 months.",
      ],
      [
        "ما لم تكن مهلة مؤهلة قد اتُفق عليها بحلول ذلك التاريخ، يصنف 400,000 متداولًا.",
        "Unless a qualifying grace period existed by that date, classify 400,000 as current.",
      ],
    ],
    conclusion: [
      "التصنيف عرض للقرض الموجود؛ لا ينشئ مصروفًا أو قيدًا جديدًا.",
      "This classifies an existing loan; it does not create a new expense or entry.",
    ],
    tech: [
      [
        "الإعفاء الذي يحصل بعد تاريخ التقرير لا يغير حق التأجيل في ذلك التاريخ؛ راقب انتقال متطلبات العرض إلى IFRS 18 من 2027.",
        "A post-reporting waiver does not change the right at that date; note the move of presentation requirements to IFRS 18 from 2027.",
      ],
    ],
    disclose: [
      [
        "افصح عن السياسات المهمة والأحكام وعدم اليقين وشروط الدين ذات الصلة.",
        "Disclose material policies, judgements, uncertainties and relevant debt covenants.",
      ],
    ],
    path: [
      [
        "اقرأ العقد ← حدّد الحق عند تاريخ التقرير ← اختبر المهلة ← صنّف الدين.",
        "Read agreement → determine right at reporting date → assess grace period → classify debt.",
      ],
    ],
  }),
  "IAS 2": define({
    title: ["مخزون انخفض صافي قيمته القابلة للتحقق", "Inventory below cost"],
    facts: [
      "تكلفة دفعة مخزون 100,000؛ سعر البيع المتوقع 98,000 وتكلفة الإكمال والبيع 8,000.",
      "An inventory lot costs 100,000; expected selling price is 98,000 and completion/selling costs are 8,000.",
    ],
    steps: [
      [
        "صافي القيمة القابلة للتحقق = 98,000 − 8,000 = 90,000.",
        "Net realisable value = 98,000 − 8,000 = 90,000.",
      ],
      [
        "الخفض = التكلفة 100,000 − 90,000 = 10,000.",
        "Write-down = cost 100,000 − 90,000 = 10,000.",
      ],
    ],
    conclusion: [
      "يعرض المخزون عند 90,000 ويعترف بخسارة 10,000.",
      "Present inventory at 90,000 and recognise a 10,000 loss.",
    ],
    entries: [
      [
        ["خفض مخزون", "Inventory write-down"],
        ["مصروف خفض المخزون", "Inventory write-down expense"],
        ["المخزون/مخصص الخفض", "Inventory/write-down allowance"],
        10000,
        [
          "راجع كل فترة إمكانية عكس الخفض حتى سقف التكلفة الأصلية.",
          "Reassess reversals each period, capped at original cost.",
        ],
      ],
    ],
    tech: [
      [
        "صافي القيمة القابلة للتحقق خاص بالمنشأة، وهو ليس بالضرورة القيمة العادلة ناقص تكاليف البيع.",
        "NRV is entity-specific and is not necessarily fair value less costs to sell.",
      ],
    ],
    disclose: [
      [
        "أفصح عن سياسة التكلفة، إجمالي المخزون، التخفيضات والعكس والرهونات المهمة.",
        "Disclose cost policy, inventory balances, write-downs/reversals and material pledges.",
      ],
    ],
    path: [
      [
        "حدد التكلفة ← قدر البيع والتكاليف اللازمة ← خذ الأقل ← اختبر العكس.",
        "Determine cost → estimate selling price and costs → take lower amount → test reversal.",
      ],
    ],
  }),
  "IAS 7": define({
    title: ["استثمار غير نقدي خارج التدفقات", "Non-cash investment outside cash flows"],
    facts: [
      "اشترت منشأة معدات بقيمة 300,000 بإصدار أسهم، وسددت 40,000 نقدًا لفاتورة معدات أخرى.",
      "An entity buys equipment worth 300,000 by issuing shares and pays 40,000 cash for separate equipment.",
    ],
    steps: [
      [
        "المدفوع نقدًا 40,000 يظهر كتدفق استثماري خارج.",
        "The 40,000 cash payment is an investing outflow.",
      ],
      [
        "معاملة الأسهم 300,000 غير نقدية؛ تستبعد من متن قائمة التدفقات وتفصح عنها بصورة ملائمة.",
        "The 300,000 share transaction is non-cash; exclude it from the cash-flow statement and disclose appropriately.",
      ],
    ],
    conclusion: [
      "إجمالي إضافات المعدات 340,000 لا يساوي التدفق النقدي الاستثماري 40,000؛ تُجرى مصالحة.",
      "Total equipment additions of 340,000 differ from the 40,000 investing cash flow; reconcile them.",
    ],
    tech: [
      [
        "ابدأ من حركة النقد والبنوك، ثم طابق التمويل والأنشطة غير النقدية مع الميزانية.",
        "Start from cash and bank movements, then reconcile financing and non-cash activities to the balance sheet.",
      ],
    ],
    disclose: [
      [
        "بيّن المعاملات الاستثمارية والتمويلية غير النقدية وتسوية الالتزامات الناشئة عن التمويل.",
        "Explain non-cash investing/financing transactions and reconcile financing liabilities.",
      ],
    ],
    path: [
      [
        "تغير النقد ← مصدر كل حركة ← تشغيل/استثمار/تمويل ← إفصاح غير النقدي.",
        "Cash movement → source of each item → operating/investing/financing → non-cash disclosure.",
      ],
    ],
  }),
  "IAS 8": define({
    title: ["تغيير عمر إنتاجي: تقدير لا خطأ", "Useful-life change: estimate, not error"],
    facts: [
      "أصل قيمته الدفترية 80,000 في بداية السنة؛ أعادت المنشأة تقدير العمر المتبقي من أربع سنوات إلى سنتين، بلا قيمة متبقية.",
      "At year start an asset carries at 80,000; estimated remaining life changes from four years to two, with no residual value.",
    ],
    steps: [
      [
        "الإهلاك الجديد = 80,000 ÷ 2 = 40,000 سنويًا من تاريخ تغيير التقدير.",
        "New depreciation = 80,000 ÷ 2 = 40,000 annually from the estimate change.",
      ],
      [
        "لو استمر التقدير القديم لبلغ 20,000؛ لا تعاد كتابة الفترات السابقة بسبب معلومات جديدة.",
        "Under the old estimate it would have been 20,000; do not restate prior periods for new information.",
      ],
    ],
    conclusion: [
      "الأثر مستقبلي، مع شرح طبيعة التغيير ومبلغه إذا كان جوهريًا.",
      "The change is prospective, with nature and amount explained if material.",
    ],
    entries: [
      [
        ["إهلاك السنة بالتقدير الجديد", "Year depreciation using revised estimate"],
        ["مصروف إهلاك", "Depreciation expense"],
        ["مجمع إهلاك", "Accumulated depreciation"],
        40000,
        [
          "القياس يبدأ من تاريخ مراجعة التقدير؛ المثال يفترض بداية السنة.",
          "Measurement starts at the revision date; this example assumes year start.",
        ],
      ],
    ],
    tech: [
      [
        "فرّق بين سياسة محاسبية وتقدير جديد وتصحيح خطأ سابق؛ لكل منها أساس معالجة مختلف.",
        "Distinguish accounting policy, new estimate and correction of a prior error; each has different treatment.",
      ],
    ],
    disclose: [
      [
        "صف التغيير الجوهري في التقدير وأثره الحالي أو المتوقع إن أمكن.",
        "Describe a material estimate change and its current or expected effect where practicable.",
      ],
    ],
    path: [
      [
        "معلومة جديدة أم خطأ قديم؟ ← صنف التغيير ← حدد التطبيق المستقبلي/الرجعي.",
        "New information or old error? → classify change → determine prospective/retrospective treatment.",
      ],
    ],
  }),
  "IAS 10": define({
    title: ["تسوية دعوى بعد الإقفال", "Lawsuit settlement after year end"],
    facts: [
      "كانت دعوى قائمة في 31 ديسمبر ومخصصها 50,000؛ في فبراير قبل اعتماد القوائم سُويت مقابل 80,000، مؤكدة التزامًا قائمًا في تاريخ التقرير.",
      "A lawsuit existed on 31 December with a 50,000 provision; in February before authorisation it settles for 80,000, confirming an obligation at reporting date.",
    ],
    steps: [
      [
        "الزيادة في أفضل تقدير للالتزام = 80,000 − 50,000 = 30,000.",
        "Increase in the best estimate = 80,000 − 50,000 = 30,000.",
      ],
      [
        "عدّل أرقام 31 ديسمبر لأن التسوية تقدم دليلًا على ظرف كان قائمًا آنذاك.",
        "Adjust 31 December figures because settlement provides evidence of an existing condition.",
      ],
    ],
    conclusion: [
      "المخصص النهائي 80,000 قبل سداد التسوية.",
      "The final provision is 80,000 before settlement payment.",
    ],
    entries: [
      [
        ["تعديل حدث لاحق", "Adjusting subsequent event"],
        ["مصروف دعوى", "Litigation expense"],
        ["مخصص دعوى", "Litigation provision"],
        30000,
        [
          "إذا نشأ الحدث نفسه بعد الفترة فقد يكون غير معدل مع إفصاح بدلاً من القيد.",
          "If the condition itself arose later, the event may be non-adjusting with disclosure instead.",
        ],
      ],
    ],
    tech: [
      [
        "الفاصل الحاسم هو وجود الظرف بنهاية الفترة، لا تاريخ استلام المستند النهائي.",
        "The decisive issue is whether the condition existed at period end, not when final documentation arrived.",
      ],
    ],
    disclose: [
      [
        "اذكر الأحداث غير المعدلة الجوهرية وطبيعتها وتقدير أثرها المالي أو تعذر التقدير.",
        "Disclose material non-adjusting events, their nature and estimated financial effect or inability to estimate.",
      ],
    ],
    path: [
      [
        "حدد تاريخ التقرير والاعتماد ← هل كان الظرف قائمًا؟ ← عدل أو أفصح.",
        "Identify reporting/authorisation dates → did condition exist? → adjust or disclose.",
      ],
    ],
  }),
  "IAS 12": define({
    title: ["التزام ضريبة مؤجلة من فرق مؤقت", "Deferred tax liability from temporary difference"],
    facts: [
      "قيمة أصل دفترية 500,000، أساسه الضريبي 400,000، ومعدل الضريبة المشرّع المتوقع 25%؛ لا ينطبق استثناء اعتراف.",
      "An asset carries at 500,000 with tax base 400,000 and applicable enacted tax rate of 25%; no recognition exception applies.",
    ],
    steps: [
      [
        "الفرق المؤقت الخاضع = 500,000 − 400,000 = 100,000.",
        "Taxable temporary difference = 500,000 − 400,000 = 100,000.",
      ],
      [
        "الالتزام الضريبي المؤجل = 100,000 × 25% = 25,000.",
        "Deferred tax liability = 100,000 × 25% = 25,000.",
      ],
    ],
    conclusion: [
      "اعترف بالتزام 25,000 مع تتبع أصل الفرق وأثره في الربح أو OCI أو حقوق الملكية.",
      "Recognise a 25,000 liability, tracing the underlying item's impact through profit, OCI or equity.",
    ],
    entries: [
      [
        ["ضريبة مؤجلة", "Deferred tax"],
        ["مصروف ضريبة مؤجلة", "Deferred tax expense"],
        ["التزام ضريبة مؤجلة", "Deferred tax liability"],
        25000,
        [
          "يفترض أن أصل الفرق سجل في الربح أو الخسارة؛ مكان الضريبة يتبع المعاملة الأصلية.",
          "Assumes the underlying difference went through profit or loss; tax follows the originating transaction.",
        ],
      ],
    ],
    tech: [
      [
        "ميز الفروق المؤقتة عن الدائمة، وافحص شروط الاعتراف بأصول الضريبة المؤجلة.",
        "Distinguish temporary from permanent differences and assess deferred tax asset recognition criteria.",
      ],
    ],
    disclose: [
      [
        "صالح مصروف الضريبة مع الربح المحاسبي وحركة الأرصدة المؤجلة.",
        "Reconcile tax expense to accounting profit and deferred balances' movement.",
      ],
    ],
    path: [
      [
        "قيمة دفترية وأساس ضريبي ← فرق مؤقت ← معدل ← استثناءات ← قيد وإفصاح.",
        "Carrying amount and tax base → temporary difference → rate → exceptions → entry/disclosure.",
      ],
    ],
  }),
  "IAS 16": define({
    title: ["إهلاك مكوّن رئيسي", "Depreciating a significant component"],
    facts: [
      "مكوّن آلة تكلفته 1,000,000، قيمته المتبقية 100,000 وعمره خمس سنوات؛ يبدأ استخدامه أول السنة.",
      "A machine component costs 1,000,000, has residual value 100,000 and five-year useful life; it is available for use at year start.",
    ],
    steps: [
      [
        "المبلغ القابل للإهلاك = 1,000,000 − 100,000 = 900,000.",
        "Depreciable amount = 1,000,000 − 100,000 = 900,000.",
      ],
      [
        "إهلاك السنة الخطي = 900,000 ÷ 5 = 180,000.",
        "Annual straight-line depreciation = 900,000 ÷ 5 = 180,000.",
      ],
    ],
    conclusion: [
      "سجّل 180,000 للمكوّن وراجع العمر والقيمة المتبقية وطريقة الإهلاك كل سنة.",
      "Record 180,000 for the component and review life, residual value and method annually.",
    ],
    entries: [
      [
        ["إهلاك مكوّن", "Component depreciation"],
        ["مصروف إهلاك", "Depreciation expense"],
        ["مجمع إهلاك المكوّن", "Accumulated component depreciation"],
        180000,
        [
          "افصل المكونات المهمة ذات الأعمار المختلفة؛ يبدأ الإهلاك حين يصبح الأصل متاحًا للاستخدام.",
          "Separate significant components with different lives; depreciation begins when available for use.",
        ],
      ],
    ],
    tech: [
      [
        "الإنفاق اللاحق يرسمل فقط إذا استوفى شروط الاعتراف؛ عند استبدال مكوّن ألغِ قيمة القديم.",
        "Capitalise subsequent spend only when recognition criteria are met; derecognise the replaced component.",
      ],
    ],
    disclose: [
      [
        "اعرض أسس القياس والأعمار وطرق الإهلاك ومصالحة الحركة والقيود على الملكية.",
        "Disclose measurement bases, lives, methods, roll-forwards and title restrictions.",
      ],
    ],
    path: [
      [
        "حدد التكلفة والمكونات ← جاهزية الاستخدام ← إهلاك ← مراجعة وتدني.",
        "Determine cost/components → available-for-use date → depreciate → review/impairment.",
      ],
    ],
  }),
  "IAS 19": define({
    title: ["تكلفة خدمة لمنافع محددة", "Defined-benefit service cost"],
    facts: [
      "التزام منافع محددة افتتاحي 500,000 وأصول خطة 420,000؛ تكلفة الخدمة الحالية لهذه السنة 30,000، دون أحداث أخرى في المثال.",
      "Opening defined-benefit obligation is 500,000 and plan assets are 420,000; current service cost is 30,000, with no other events in this example.",
    ],
    steps: [
      [
        "صافي الالتزام الافتتاحي = 500,000 − 420,000 = 80,000.",
        "Opening net liability = 500,000 − 420,000 = 80,000.",
      ],
      [
        "أضف تكلفة الخدمة 30,000 إلى مصروف الفترة والالتزام؛ احسب صافي الفائدة وإعادة القياس كلًّا على حدة عند وجودهما.",
        "Add 30,000 current service cost to period expense and liability; calculate net interest and remeasurement separately when present.",
      ],
    ],
    conclusion: [
      "صافي الالتزام يصبح 110,000 في هذا المثال المبسط قبل صافي الفائدة والمدفوعات وإعادة القياس.",
      "Net liability becomes 110,000 in this simplified case before net interest, payments and remeasurement.",
    ],
    entries: [
      [
        ["تكلفة الخدمة الحالية", "Current service cost"],
        ["مصروف منافع موظفين", "Employee benefit expense"],
        ["صافي التزام منافع محددة", "Net defined-benefit liability"],
        30000,
        [
          "إعادة القياس الاكتوارية تذهب عادة إلى OCI لا إلى تكلفة الخدمة.",
          "Actuarial remeasurement generally goes to OCI, not current service cost.",
        ],
      ],
    ],
    tech: [
      [
        "قارن نوع الخطة: مساهمات محددة أم منافع محددة؛ القياس الاكتواري مطلوب للأخيرة.",
        "Determine plan type: defined contribution or defined benefit; the latter needs actuarial measurement.",
      ],
    ],
    disclose: [
      [
        "اعرض مصالحة الالتزام والأصول والافتراضات والحساسيات ومخاطر الخطة.",
        "Disclose obligation/asset roll-forwards, assumptions, sensitivities and plan risks.",
      ],
    ],
    path: [
      [
        "نوع المنفعة ← بيانات العاملين ← قياس اكتواري ← خدمة/فائدة/OCI.",
        "Benefit type → employee data → actuarial measurement → service/interest/OCI.",
      ],
    ],
  }),
  "IAS 20": define({
    title: ["منحة تمول أصلًا ثابتًا", "Asset-related government grant"],
    facts: [
      "اشترت منشأة آلة بتكلفة 500,000 وعمر خمس سنوات وقيمة متبقية صفر، وحصلت على منحة حكومية 100,000 مع اطمئنان معقول لاستيفاء شروطها؛ اختارت عرض الدخل المؤجل.",
      "An entity buys a 500,000 machine with five-year life and zero residual value, and receives a 100,000 government grant with reasonable assurance of compliance; it chooses deferred-income presentation.",
    ],
    steps: [
      [
        "وزع الدخل المؤجل 100,000 على خمس سنوات: 20,000 سنويًا بصورة منتظمة.",
        "Release 100,000 deferred income over five years: 20,000 yearly on a systematic basis.",
      ],
      [
        "إهلاك الأصل 500,000 ÷ 5 = 100,000 سنويًا قبل القيمة المتبقية.",
        "Asset depreciation is 500,000 ÷ 5 = 100,000 yearly before residual value.",
      ],
    ],
    conclusion: [
      "يُعرض الأصل بالتكلفة والمنحة كدخل مؤجل؛ يعترف بدخل 20,000 مع مصروف الإهلاك.",
      "Present the asset at cost and grant as deferred income; recognise 20,000 income alongside depreciation.",
    ],
    entries: [
      [
        ["استلام المنحة", "Receive grant"],
        ["النقد", "Cash"],
        ["دخل منحة مؤجل", "Deferred grant income"],
        100000,
        [
          "يمكن بدلًا من ذلك خصم المنحة من الأصل إذا اختيرت الطريقة المسموحة بصورة متسقة.",
          "Alternatively deduct the grant from the asset if that permitted method is selected consistently.",
        ],
      ],
    ],
    tech: [
      [
        "الاستلام النقدي وحده لا يكفي؛ يلزم اطمئنان معقول باستيفاء الشروط وتلقي المنحة.",
        "Cash receipt alone is insufficient; reasonable assurance of compliance and receipt is required.",
      ],
    ],
    disclose: [
      [
        "اشرح السياسة والشروط غير المستوفاة والمنافع الحكومية الأخرى المهمة.",
        "Explain policy, unfulfilled conditions and other material government assistance.",
      ],
    ],
    path: [
      [
        "شروط المنحة ← اطمئنان معقول ← اختيار العرض ← مقابلة الدخل بالتكاليف.",
        "Grant conditions → reasonable assurance → presentation choice → match income with costs.",
      ],
    ],
  }),
  "IAS 21": define({
    title: ["ذمة أجنبية في تاريخ التقرير", "Foreign-currency payable at reporting date"],
    facts: [
      "التزام 100,000 دولار سجل بسعر 3.75 للعملة الوظيفية، وأصبح سعر الإقفال 3.80 قبل السداد.",
      "A USD 100,000 payable was recorded at 3.75 functional-currency units per dollar; closing rate is 3.80 before payment.",
    ],
    steps: [
      [
        "القيمة الأولية = 375,000؛ قيمة الإقفال = 380,000.",
        "Initial value = 375,000; closing value = 380,000.",
      ],
      [
        "فرق الصرف الخاسر = 380,000 − 375,000 = 5,000.",
        "Exchange loss = 380,000 − 375,000 = 5,000.",
      ],
    ],
    conclusion: [
      "زاد الالتزام النقدي إلى 380,000؛ اعترف بخسارة 5,000 عادة في الربح أو الخسارة.",
      "The monetary liability rises to 380,000; generally recognise a 5,000 profit-or-loss loss.",
    ],
    entries: [
      [
        ["إعادة ترجمة التزام نقدي", "Remeasure monetary payable"],
        ["خسارة فروق عملة", "Foreign-exchange loss"],
        ["ذمم دائنة", "Trade payable"],
        5000,
        [
          "تختلف معالجة بعض صافي الاستثمارات في العمليات الأجنبية؛ المثال لذمة تجارية عادية.",
          "Certain net-investment items differ; this example is an ordinary trade payable.",
        ],
      ],
    ],
    tech: [
      [
        "ميز العملة الوظيفية عن عملة العرض، والبنود النقدية عن غير النقدية.",
        "Distinguish functional from presentation currency and monetary from non-monetary items.",
      ],
    ],
    disclose: [
      [
        "اذكر فروق الصرف المعترف بها وأرصدة ترجمة العمليات الأجنبية ذات الأهمية.",
        "Disclose material recognised exchange differences and foreign-operation translation reserves.",
      ],
    ],
    path: [
      [
        "حدد العملة الوظيفية ← تاريخ المعاملة ← نقدي أم غير نقدي ← سعر الإقفال.",
        "Set functional currency → transaction date → monetary or non-monetary → closing rate.",
      ],
    ],
  }),
  "IAS 23": define({
    title: ["فوائد تمويل مبنى قيد الإنشاء", "Borrowing cost on a building under construction"],
    facts: [
      "قرض مخصص 2,000,000 بفائدة سنوية 10% مول مبنى يحتاج وقتًا جوهريًا ليصبح جاهزًا؛ استمرت أنشطة الإنشاء المؤهلة ستة أشهر.",
      "A specific 2,000,000 loan at 10% annual interest funds a building requiring substantial time to become ready; qualifying construction activities continue for six months.",
    ],
    steps: [
      [
        "الفائدة للفترة = 2,000,000 × 10% × 6/12 = 100,000.",
        "Period interest = 2,000,000 × 10% × 6/12 = 100,000.",
      ],
      [
        "افحص أي عائد استثماري مؤقت على القرض المخصص قبل تحديد المبلغ النهائي للرسملة.",
        "Consider temporary investment income on the specific borrowing before finalising capitalisation.",
      ],
    ],
    conclusion: [
      "يمكن إضافة 100,000 لتكلفة المبنى في المثال إذا استوفت شروط بدء واستمرار الرسملة ولم يوجد عائد خصم.",
      "Capitalise 100,000 into the building in this example if commencement/continuation criteria are met and no offsetting income exists.",
    ],
    entries: [
      [
        ["رسملة فوائد مؤهلة", "Capitalise qualifying interest"],
        ["مبنى قيد الإنشاء", "Building under construction"],
        ["فوائد مستحقة/نقد", "Interest payable/cash"],
        100000,
        [
          "أوقف الرسملة عند جاهزية الأصل المقصودة، وعَلِّقها عند توقف طويل غير لازم.",
          "Stop at intended readiness and suspend during extended unnecessary interruption.",
        ],
      ],
    ],
    tech: [
      [
        "الأصل المؤهل يحتاج وقتًا جوهريًا للإعداد؛ الاقتراض وحده لا يجعل كل فوائد المنشأة قابلة للرسملة.",
        "A qualifying asset takes substantial time to prepare; borrowing alone does not make all interest capitalisable.",
      ],
    ],
    disclose: [
      [
        "اعرض مبلغ تكاليف الاقتراض المرسملة ومعدل الرسملة المستخدم.",
        "Disclose borrowing costs capitalised and the capitalisation rate used.",
      ],
    ],
    path: [
      [
        "أصل مؤهل؟ ← تاريخ بدء الأنشطة والإنفاق ← قرض خاص/عام ← وقف الرسملة.",
        "Qualifying asset? → activities/expenditure start → specific/general borrowing → cessation.",
      ],
    ],
  }),
  "IAS 24": define({
    title: ["معاملة مع طرف ذي علاقة", "Related-party transaction"],
    facts: [
      "باعت منشأة بضاعة مقابل 300,000 لشركة يسيطر عليها مالك يسيطر أيضًا على المنشأة البائعة؛ بقي منها 80,000 ذممًا مستحقة بنهاية السنة.",
      "An entity sold goods for 300,000 to another company controlled by an owner who also controls the reporting seller; 80,000 remained receivable at year end.",
    ],
    steps: [
      [
        "حدد العلاقة من السيطرة أو النفوذ الفعلي، ثم اربط 300,000 مبيعات و80,000 رصيدًا طرفيًا بسجل الإفصاح.",
        "Establish the relationship from substantive control/influence; link 300,000 sales and 80,000 closing balance to the disclosure register.",
      ],
      [
        "راجع شروط الائتمان والضمانات وأي مخصص خسارة على الرصيد وفق المعايير الأخرى.",
        "Review credit terms, security and any loss allowance on the balance under other Standards.",
      ],
    ],
    conclusion: [
      "IAS 24 يضيف شفافية عن العلاقة والمعاملة؛ قيد البيع الأصلي تحدده قواعد الإيراد، ولا يوجد قيد إفصاح جديد.",
      "IAS 24 adds transparency about the relationship and transaction; revenue rules govern the original sale and disclosure creates no new entry.",
    ],
    tech: [
      [
        "لا تصف السعر بأنه بشروط السوق إلا إذا أمكن إثبات ذلك؛ وتتطلب الإفصاحات علاقة السيطرة حتى بلا معاملات.",
        "Do not claim arm's-length terms without substantiation; control relationships may require disclosure even without transactions.",
      ],
    ],
    disclose: [
      [
        "اذكر طبيعة العلاقة والمبلغ والأرصدة والشروط والضمانات والمخصصات المطلوبة.",
        "Disclose relationship, transaction amount, balances, terms, security and required allowances.",
      ],
    ],
    path: [
      [
        "أطراف مرتبطة ← معاملات وأرصدة ← شروط ومخصصات ← تجميع مناسب للإفصاح.",
        "Related parties → transactions/balances → terms/allowances → suitable disclosure categories.",
      ],
    ],
  }),
  "IAS 26": define({
    title: ["تقرير خطة منافع تقاعدية", "Retirement benefit plan report"],
    facts: [
      "خطة منافع محددة لديها صافي أصول متاحة للمنافع 1,000,000، والقيمة الاكتوارية الحالية للمنافع الموعودة 1,200,000.",
      "A defined-benefit plan has net assets available for benefits of 1,000,000 and actuarial present value of promised benefits of 1,200,000.",
    ],
    steps: [
      [
        "الفجوة التوضيحية = 1,200,000 − 1,000,000 = 200,000.",
        "Illustrative gap = 1,200,000 − 1,000,000 = 200,000.",
      ],
      [
        "افصل تقرير الخطة نفسه عن محاسبة راعي الخطة لمنافع الموظفين وفق IAS 19.",
        "Separate the plan's own reporting from the sponsor's IAS 19 employee-benefit accounting.",
      ],
    ],
    conclusion: [
      "اعرض الأصول والمنافع الموعودة والسياسة التمويلية والتطور الاكتواري؛ الفجوة ليست تلقائيًا قيدًا على راعي الخطة.",
      "Present plan assets, promised benefits, funding policy and actuarial development; the gap is not automatically a sponsor entry.",
    ],
    tech: [
      [
        "قياس الموجودات المتاحة للمنافع في قوائم الخطة يختلف عن قياس صافي التزام صاحب العمل.",
        "Measurement of plan assets available for benefits differs from the employer's net benefit liability.",
      ],
    ],
    disclose: [
      [
        "أظهر نوع الخطة، التغيرات في الأصول، المنافع الموعودة والافتراضات الاكتوارية الأساسية.",
        "Show plan type, asset movements, promised benefits and key actuarial assumptions.",
      ],
    ],
    path: [
      [
        "نوع الخطة ← موجودات المنافع ← قيمة المنافع الموعودة ← تقرير وتمويل.",
        "Plan type → benefit assets → promised-benefit value → reporting/funding.",
      ],
    ],
  }),
  "IAS 27": define({
    title: ["استثمار تابع في القوائم المنفصلة", "Subsidiary investment in separate statements"],
    facts: [
      "دفعت شركة أم 400,000 لشراء حصص في تابعة، واختارت في قوائمها المنفصلة طريقة التكلفة للفئة المعنية.",
      "A parent pays 400,000 for shares in a subsidiary and selects the cost method for the relevant category in its separate financial statements.",
    ],
    steps: [
      [
        "سجّل الاستثمار مبدئيًا بتكلفة 400,000 في القوائم المنفصلة.",
        "Initially record the investment at cost of 400,000 in separate statements.",
      ],
      [
        "لا تخلط مع ورقة توحيد IFRS 10؛ افحص الانخفاض لاحقًا وفق المعايير المعنية.",
        "Do not confuse this with IFRS 10 consolidation worksheets; subsequently assess impairment under relevant requirements.",
      ],
    ],
    conclusion: [
      "تظهر حصة التابعة كاستثمار في القوائم المنفصلة؛ القوائم الموحدة تعرض أصول والتزامات التابعة بدل هذا الحساب.",
      "The subsidiary appears as an investment in separate statements; consolidated statements present the subsidiary's assets and liabilities instead.",
    ],
    entries: [
      [
        ["شراء استثمار تابع", "Purchase subsidiary investment"],
        ["استثمار في شركة تابعة", "Investment in subsidiary"],
        ["النقد", "Cash"],
        400000,
        [
          "يجوز اختيار التكلفة أو IFRS 9 أو طريقة حقوق الملكية لفئة الاستثمارات وفق سياسة متسقة.",
          "Cost, IFRS 9 or equity method may be elected by investment category under a consistent policy.",
        ],
      ],
    ],
    tech: [
      [
        "حدد أولًا أي قوائم تُعد: منفصلة أم موحدة؛ تختلف وحدة العرض والمعالجة.",
        "First determine whether separate or consolidated statements are being prepared; the unit of presentation and treatment differ.",
      ],
    ],
    disclose: [
      [
        "اذكر السياسة والفئات والشركات المستثمر فيها وارتباط القوائم المنفصلة بالقوائم الأخرى.",
        "Disclose policy, investment categories, investees and relationship to other statements.",
      ],
    ],
    path: [
      [
        "قوائم منفصلة؟ ← فئة الاستثمار ← سياسة مختارة ← اعتراف ومراجعة.",
        "Separate statements? → investment category → selected policy → recognition/review.",
      ],
    ],
  }),
  "IAS 28": define({
    title: ["حصة ربح شركة زميلة", "Share of associate profit"],
    facts: [
      "تملك منشأة 30% من زميلة ذات تأثير مهم؛ ربحت الزميلة 200,000 خلال السنة ولم توزع أرباحًا، مع افتراض عدم تعديلات.",
      "An investor holds 30% of an associate with significant influence; the associate earns 200,000 and pays no dividends, with no other adjustments.",
    ],
    steps: [
      ["حصة الربح = 200,000 × 30% = 60,000.", "Share of profit = 200,000 × 30% = 60,000."],
      [
        "ارفع القيمة الدفترية للاستثمار بمقدار 60,000، وعدل لاحقًا للتوزيعات وفروق السياسات والانخفاض.",
        "Increase the investment carrying amount by 60,000; later adjust for dividends, policy differences and impairment.",
      ],
    ],
    conclusion: [
      "تعترف المنشأة بإيراد حصة ربح 60,000 وفق طريقة حقوق الملكية.",
      "Recognise 60,000 share of profit under the equity method.",
    ],
    entries: [
      [
        ["حصة ربح زميلة", "Associate profit share"],
        ["استثمار بطريقة حقوق الملكية", "Equity-method investment"],
        ["حصة الربح من زميلة", "Share of associate profit"],
        60000,
        [
          "وجود 30% مؤشر للتأثير المهم لكنه لا يغني عن تحليل الحقوق الفعلية.",
          "A 30% holding indicates significant influence but does not replace rights analysis.",
        ],
      ],
    ],
    tech: [
      [
        "اختبر التأثير المهم لا السيطرة؛ وأوقف الاعتراف بالخسائر وفق قواعد الاستثمار والمصالح طويلة الأجل.",
        "Assess significant influence rather than control; apply rules for losses and long-term interests.",
      ],
    ],
    disclose: [
      [
        "أظهر طبيعة الحصة وملخص النتائج ومصالحة القيمة الدفترية عند اللزوم.",
        "Disclose interest nature, summarised results and carrying-amount reconciliation where required.",
      ],
    ],
    path: [
      [
        "نفوذ مهم؟ ← قيمة بدء الاستثمار ← حصة النتائج والتوزيعات ← انخفاض.",
        "Significant influence? → initial carrying amount → results/dividends → impairment.",
      ],
    ],
  }),
  "IAS 29": define({
    title: ["إعادة التعبير بوحدة قياس جارية", "Restatement into current purchasing power"],
    facts: [
      "أصل غير نقدي اقتني مقابل 200,000 حين كان مؤشر الأسعار 100؛ أصبح المؤشر العام 150 في نهاية فترة الاقتصاد شديد التضخم.",
      "A non-monetary asset was acquired for 200,000 when the general price index was 100; the index is 150 at the end of a hyperinflationary reporting period.",
    ],
    steps: [
      ["معامل إعادة التعبير = 150 ÷ 100 = 1.5.", "Restatement factor = 150 ÷ 100 = 1.5."],
      [
        "القيمة المعاد التعبير عنها = 200,000 × 1.5 = 300,000، قبل الإهلاك والانخفاض المطلوبين.",
        "Restated amount = 200,000 × 1.5 = 300,000, before required depreciation and impairment.",
      ],
    ],
    conclusion: [
      "تعرض البنود بوحدة قياس نهاية الفترة ويحسب ربح أو خسارة صافي المركز النقدي بصورة منفصلة.",
      "Present amounts in end-period measuring units and separately determine the net monetary-position gain or loss.",
    ],
    tech: [
      [
        "لا تضرب البنود النقدية الجارية في معامل التضخم مرة ثانية؛ وقارن المؤشرات من تواريخ نشأة البنود.",
        "Do not re-index current monetary balances; apply indices from dates non-monetary items arose.",
      ],
    ],
    disclose: [
      [
        "اذكر حقيقة إعادة التعبير وهوية المؤشر ومستواه وتغيره خلال الفترة.",
        "Disclose that statements are restated and identify index level and movement.",
      ],
    ],
    path: [
      [
        "اقتصاد شديد التضخم؟ ← تواريخ بنود غير نقدية ← مؤشرات ← صافي مركز نقدي.",
        "Hyperinflationary economy? → non-monetary item dates → indices → net monetary position.",
      ],
    ],
  }),
  "IAS 32": define({
    title: ["سهم قابل للاسترداد إلزاميًا", "Mandatorily redeemable share"],
    facts: [
      "أصدرت منشأة أداة مقابل 1,000,000 يجب عليها رد المبلغ نقدًا عند طلب الحامل؛ لا يوجد استثناء ينقلها إلى حقوق الملكية.",
      "An entity issues an instrument for 1,000,000 with an unavoidable cash redemption on the holder's demand; no exception permits equity classification.",
    ],
    steps: [
      [
        "افحص الالتزام التعاقدي بتسليم النقد؛ الاسم القانوني 'سهم' لا يحسم التصنيف.",
        "Assess the contractual duty to deliver cash; the legal label 'share' does not determine classification.",
      ],
      [
        "اعترف بالالتزام المالي عند الإصدار بمبلغ 1,000,000 المستحق عند الطلب.",
        "Recognise a financial liability on issue for the 1,000,000 payable on demand.",
      ],
    ],
    conclusion: [
      "تعرض الأداة كالتزام مالي في هذه الوقائع، ثم تتبع قواعد القياس اللاحق المطبقة.",
      "Present the instrument as a financial liability on these facts, then apply relevant subsequent-measurement rules.",
    ],
    entries: [
      [
        ["إصدار أداة ذات التزام نقدي", "Issue cash-obligation instrument"],
        ["النقد", "Cash"],
        ["التزام مالي", "Financial liability"],
        1000000,
        [
          "تفاصيل التسعير والفائدة قد تتطلب قياسًا أوليًا وتجزئة أكثر تعقيدًا.",
          "Pricing and interest terms may require more complex initial measurement and component separation.",
        ],
      ],
    ],
    tech: [
      [
        "حلل كل مكون في الأداة المركبة؛ اختبر شرط مبلغ ثابت مقابل عدد ثابت عند التسوية بأسهم.",
        "Analyse each component of a compound instrument; test fixed-for-fixed terms for share settlement.",
      ],
    ],
    disclose: [
      [
        "اربط تصنيف الأداة بشروطها ومخاطرها وإيضاحات الأدوات المالية.",
        "Link instrument classification to contractual terms, risks and financial-instrument notes.",
      ],
    ],
    path: [
      [
        "شروط العقد ← التزام نقد أو تبادل غير ثابت؟ ← التزام/حقوق/مركب.",
        "Contract terms → cash duty or non-fixed exchange? → liability/equity/compound.",
      ],
    ],
  }),
  "IAS 33": define({
    title: ["ربحية السهم الأساسية", "Basic earnings per share"],
    facts: [
      "ربح السنة العائد لحملة الأسهم العادية بعد تعديل توزيعات الممتازة 750,000؛ المتوسط المرجح للأسهم العادية 250,000 سهم.",
      "Profit attributable to ordinary shareholders after preference-dividend adjustment is 750,000; weighted-average ordinary shares are 250,000.",
    ],
    steps: [
      [
        "ربحية السهم الأساسية = 750,000 ÷ 250,000 = 3.00 وحدات نقد للسهم.",
        "Basic EPS = 750,000 ÷ 250,000 = 3.00 currency units per share.",
      ],
      [
        "افحص الخيارات والأدوات القابلة للتحويل لحساب الربحية المخففة بصورة منفصلة إذا كانت مُخفِّضة.",
        "Examine options and convertibles separately for diluted EPS if dilutive.",
      ],
    ],
    conclusion: [
      "تعرض 3.00 للسهم الأساسي؛ الحساب لا ينشئ قيدًا في الدفاتر.",
      "Present basic EPS of 3.00; the calculation creates no ledger entry.",
    ],
    tech: [
      [
        "استخدم متوسط الأسهم المرجح زمنيًا لا عدد الأسهم عند نهاية السنة وحده؛ عالج التجزئة والمنح المجانية بأثر مناسب.",
        "Use time-weighted shares, not only year-end shares; adjust appropriately for splits and bonus issues.",
      ],
    ],
    disclose: [
      [
        "صالح بسط ومقام الربحية الأساسية والمخففة واذكر الأدوات المستبعدة المضادة للتخفيف.",
        "Reconcile basic/diluted numerators and denominators and describe excluded anti-dilutive instruments.",
      ],
    ],
    path: [
      [
        "ربح عادي معدل ← متوسط أسهم مرجح ← EPS أساسي ← اختبار التخفيف.",
        "Adjusted ordinary profit → weighted shares → basic EPS → dilution test.",
      ],
    ],
  }),
  "IAS 34": define({
    title: ["تقرير نصف سنوي مختصر", "Condensed half-year report"],
    facts: [
      "إيراد الأشهر الستة 600,000 مقابل 500,000 للفترة المقارنة؛ بيع موسمي كبير تحقق في يونيو.",
      "Six-month revenue is 600,000 versus 500,000 comparatively; a significant seasonal sale occurs in June.",
    ],
    steps: [
      [
        "التغير = 100,000؛ النمو = 100,000 ÷ 500,000 = 20%.",
        "Change = 100,000; growth = 100,000 ÷ 500,000 = 20%.",
      ],
      [
        "اعرض المعلومات المقارنة المناسبة، وفسر الموسمية والأحداث المهمة منذ آخر قوائم سنوية.",
        "Present appropriate comparatives and explain seasonality and significant changes since the last annual report.",
      ],
    ],
    conclusion: [
      "المعيار يحدد الحد الأدنى للتقرير المرحلي والشرح، ولا يخلق قيدًا لمجرد زيادة الإيراد.",
      "The Standard sets minimum interim reporting and explanation; revenue growth itself creates no new entry.",
    ],
    tech: [
      [
        "لا تؤجل مصروفًا يخص الفترة لمجرد تنعيم نتيجة نصف السنة؛ طبق السياسات نفسها المستخدمة سنويًا.",
        "Do not defer period costs merely to smooth interim profit; apply the same accounting policies as annually.",
      ],
    ],
    disclose: [
      [
        "اشرح التغيرات الجوهرية في التقديرات والموسمية والمعاملات غير العادية.",
        "Explain material estimate changes, seasonality and unusual transactions.",
      ],
    ],
    path: [
      [
        "حدد فترة التقرير ← قوائم مختصرة ومقارنات ← أحداث مهمة ← اتساق السياسات.",
        "Set interim period → condensed statements/comparatives → significant events → consistent policies.",
      ],
    ],
  }),
  "IAS 36": define({
    title: ["اختبار انخفاض آلة", "Machine impairment test"],
    facts: [
      "القيمة الدفترية 500,000؛ قيمة الاستخدام 470,000 والقيمة العادلة ناقص تكاليف الاستبعاد 450,000.",
      "A machine carries at 500,000; value in use is 470,000 and fair value less costs of disposal is 450,000.",
    ],
    steps: [
      [
        "المبلغ القابل للاسترداد = الأعلى من 470,000 و450,000 = 470,000.",
        "Recoverable amount = higher of 470,000 and 450,000 = 470,000.",
      ],
      [
        "خسارة الانخفاض = 500,000 − 470,000 = 30,000.",
        "Impairment loss = 500,000 − 470,000 = 30,000.",
      ],
    ],
    conclusion: [
      "اعترف بانخفاض 30,000 وخفّض الأصل إلى 470,000 في هذا المثال.",
      "Recognise 30,000 impairment and reduce the asset to 470,000 in this example.",
    ],
    entries: [
      [
        ["خسارة انخفاض", "Impairment loss"],
        ["مصروف انخفاض قيمة", "Impairment expense"],
        ["الأصل/مجمع الانخفاض", "Asset/impairment allowance"],
        30000,
        [
          "إذا كان الأصل ضمن وحدة مولدة للنقد أو معاد التقييم، راعِ قواعد التخصيص والعرض الخاصة.",
          "For CGUs or revalued assets, apply their specific allocation and presentation rules.",
        ],
      ],
    ],
    tech: [
      [
        "الشهرة تختبر سنويًا ولا تعكس خسارة انخفاضها لاحقًا؛ بقية الأصول قد تعكس ضمن الحدود.",
        "Goodwill is tested annually and its impairment cannot be reversed; other assets may reverse within limits.",
      ],
    ],
    disclose: [
      [
        "اشرح مؤشرات الانخفاض والمبلغ القابل للاسترداد والافتراضات الحساسة للوحدات الجوهرية.",
        "Explain indicators, recoverable amount and sensitive assumptions for material CGUs.",
      ],
    ],
    path: [
      [
        "مؤشر أو اختبار سنوي ← وحدة قياس ← أعلى VIU/FVLCD ← خسارة/عكس.",
        "Indicator or annual test → testing unit → higher VIU/FVLCD → loss/reversal.",
      ],
    ],
  }),
  "IAS 37": define({
    title: ["مخصص ضمان منتجات", "Product warranty provision"],
    facts: [
      "باعت منشأة 100 منتج مع ضمان إصلاح؛ تشير الخبرة إلى تكلفة متوقعة 200 لكل منتج عند توزيع احتمالات المطالبات، ولا أثر جوهري للخصم.",
      "An entity sells 100 products with repair warranties; probability-weighted experience implies expected cost 200 per product, with no material discounting effect.",
    ],
    steps: [
      [
        "أفضل تقدير لمجموعة الالتزامات = 100 × 200 = 20,000.",
        "Best estimate for the obligation population = 100 × 200 = 20,000.",
      ],
      [
        "تحقق من وجود التزام حالي واحتمال خروج الموارد وموثوقية التقدير.",
        "Confirm present obligation, probable outflow and reliable estimate.",
      ],
    ],
    conclusion: [
      "اعترف بمخصص 20,000 عند البيع، وراجعه في كل تاريخ تقرير.",
      "Recognise a 20,000 provision on sale and reassess it each reporting date.",
    ],
    entries: [
      [
        ["مخصص ضمان", "Warranty provision"],
        ["مصروف ضمان", "Warranty expense"],
        ["مخصص ضمان منتجات", "Warranty provision liability"],
        20000,
        [
          "إن كان الضمان خدمة منفصلة فقد يلزم تحليل التزام أداء وفق IFRS 15.",
          "A distinct service warranty may instead require IFRS 15 performance-obligation analysis.",
        ],
      ],
    ],
    tech: [
      [
        "المخصص ليس احتياطيًا عامًا؛ يلزم التزام قائم من حدث سابق. الالتزامات المحتملة تفصح غالبًا ولا تعترف.",
        "A provision is not a general reserve; a past-event obligation is required. Contingent liabilities are generally disclosed, not recognised.",
      ],
    ],
    disclose: [
      [
        "اعرض طبيعة الالتزام وعدم اليقين الزمني وحركة المخصص والتعويضات المتوقعة بشروطها.",
        "Disclose obligation nature, timing uncertainty, provision roll-forward and qualifying reimbursements.",
      ],
    ],
    path: [
      [
        "التزام حالي؟ ← خروج مرجح؟ ← تقدير موثوق؟ ← قيد أو إفصاح.",
        "Present obligation? → probable outflow? → reliable estimate? → recognise or disclose.",
      ],
    ],
  }),
  "IAS 38": define({
    title: ["بحث وتطوير برنامج", "Software research and development"],
    facts: [
      "أنفقت منشأة 40,000 في مرحلة بحث و80,000 بعد إثبات جميع شروط رسملة التطوير؛ البرنامج لم يصبح جاهزًا للاستخدام بعد.",
      "An entity spends 40,000 during research and 80,000 after meeting every development-capitalisation criterion; the software is not yet available for use.",
    ],
    steps: [
      ["حمّل 40,000 بحثًا على المصروف عند تكبده.", "Expense 40,000 research as incurred."],
      [
        "رسمل 80,000 من تاريخ تحقق الشروط فقط؛ لا تبدأ الإطفاء قبل الجاهزية للاستخدام.",
        "Capitalise 80,000 only from the date criteria are met; do not amortise before availability for use.",
      ],
    ],
    conclusion: [
      "أصل غير ملموس قيد التطوير 80,000 ومصروف بحث 40,000.",
      "Recognise 80,000 intangible under development and 40,000 research expense.",
    ],
    entries: [
      [
        ["تكاليف تطوير مؤهلة", "Qualifying development costs"],
        ["أصل تطوير برمجيات", "Software development asset"],
        ["النقد/الدائنون", "Cash/payables"],
        80000,
        [
          "تكاليف البحث 40,000 تقيد مصروفًا بصورة منفصلة؛ لا يعاد رسملتها لاحقًا.",
          "The 40,000 research costs are separately expensed and not later reinstated as an asset.",
        ],
      ],
    ],
    tech: [
      [
        "وثّق الجدوى الفنية ونية الإكمال والاستخدام والموارد والمنافع المستقبلية وقياس التكلفة.",
        "Document technical feasibility, intention, ability/resources, future benefits and reliable cost measurement.",
      ],
    ],
    disclose: [
      [
        "اعرض العمر الإنتاجي وطريقة الإطفاء ومصالحة تكلفة الأصل والتطوير الجاري.",
        "Disclose useful life, amortisation method and intangible/development roll-forward.",
      ],
    ],
    path: [
      [
        "بحث أم تطوير؟ ← ستة معايير رسملة ← تكلفة منذ تاريخ تحققها ← إطفاء/انخفاض.",
        "Research or development? → six capitalisation criteria → cost from fulfilment date → amortisation/impairment.",
      ],
    ],
  }),
  "IAS 40": define({
    title: ["مبنى مؤجر بنموذج القيمة العادلة", "Rented building under fair-value model"],
    facts: [
      "عقار استثماري مؤجر للغير قيمته الدفترية 1,000,000؛ قيمته العادلة بنهاية السنة 1,100,000، والمنشأة تختار نموذج القيمة العادلة.",
      "An investment property rented to others carries at 1,000,000; year-end fair value is 1,100,000 and the entity uses the fair-value model.",
    ],
    steps: [
      [
        "ربح التغير في القيمة العادلة = 1,100,000 − 1,000,000 = 100,000.",
        "Fair-value gain = 1,100,000 − 1,000,000 = 100,000.",
      ],
      [
        "تأكد من غرض الاحتفاظ؛ المبنى المشغول ذاتيًا يتبع IAS 16 لا IAS 40.",
        "Confirm holding purpose; an owner-occupied building follows IAS 16, not IAS 40.",
      ],
    ],
    conclusion: [
      "يرتفع الأصل إلى 1,100,000 ويعترف بربح 100,000 في الربح أو الخسارة.",
      "Increase the asset to 1,100,000 and recognise 100,000 in profit or loss.",
    ],
    entries: [
      [
        ["ربح قيمة عادلة", "Fair-value gain"],
        ["عقار استثماري", "Investment property"],
        ["ربح تغير القيمة العادلة", "Fair-value gain in profit or loss"],
        100000,
        [
          "لا يطبق إهلاك IAS 16 على العقار الخاضع لنموذج القيمة العادلة IAS 40.",
          "Do not apply IAS 16 depreciation to property under IAS 40's fair-value model.",
        ],
      ],
    ],
    tech: [
      [
        "نموذج التكلفة خيار آخر، لكن القيمة العادلة تبقى مطلب إفصاح؛ نقل الفئات يحتاج تغيرًا مثبتًا في الاستخدام.",
        "Cost model is another option, but fair value remains a disclosure requirement; transfers require evidenced change in use.",
      ],
    ],
    disclose: [
      [
        "وضح النموذج وتقنية التقييم وحركة العقارات والإيراد الإيجاري والمصروفات المباشرة.",
        "Disclose model, valuation technique, property movements, rental income and direct expenses.",
      ],
    ],
    path: [
      [
        "غرض الاحتفاظ ← عقار استثماري؟ ← نموذج قياس ← قيمة عادلة/تكلفة وإفصاح.",
        "Holding purpose → investment property? → measurement model → fair value/cost and disclosure.",
      ],
    ],
  }),
  "IAS 41": define({
    title: ["نمو أصل حيوي", "Biological asset growth"],
    facts: [
      "قطيع ماشية قيمته العادلة ناقص تكاليف البيع أول السنة 300,000، وأصبحت 360,000 في نهايتها، دون شراء أو بيع أو ولادات في المثال.",
      "A livestock herd is measured at 300,000 fair value less costs to sell at year start and 360,000 at year end, with no purchases, sales or births in this example.",
    ],
    steps: [
      [
        "تغير القياس = 360,000 − 300,000 = 60,000.",
        "Measurement change = 360,000 − 300,000 = 60,000.",
      ],
      [
        "افصل أثر تغير السعر عن التغير المادي في سجل الحركة عندما تكون المعلومة مفيدة.",
        "Separate price from physical change in the roll-forward where useful.",
      ],
    ],
    conclusion: [
      "يعترف بربح 60,000 ويعرض القطيع بمبلغ 360,000.",
      "Recognise a 60,000 gain and present the herd at 360,000.",
    ],
    entries: [
      [
        ["تغير قيمة أصل حيوي", "Biological asset remeasurement"],
        ["أصول حيوية", "Biological assets"],
        ["ربح قياس أصول حيوية", "Biological-asset measurement gain"],
        60000,
        [
          "النباتات المثمرة نفسها تتبع IAS 16؛ محصولها أثناء النمو يخضع لقواعد IAS 41.",
          "Bearer plants themselves follow IAS 16; growing produce on them follows IAS 41.",
        ],
      ],
    ],
    tech: [
      [
        "حدّد نقطة الحصاد: يقاس المحصول عندها بالقيمة العادلة ناقص تكاليف البيع، ثم يصبح ذلك أساس تكلفة IAS 2.",
        "Identify harvest: produce is measured at fair value less costs to sell then, which becomes IAS 2 cost.",
      ],
    ],
    disclose: [
      [
        "اشرح الفئات والكميات والحركة ومكاسب القياس وافتراضات التقييم.",
        "Disclose asset classes, quantities, movements, measurement gains and valuation assumptions.",
      ],
    ],
    path: [
      [
        "أصل حيوي/محصول؟ ← قيمة عادلة ناقص تكاليف البيع ← حركة وربح ← حصاد.",
        "Biological asset/produce? → fair value less selling costs → roll-forward/gain → harvest.",
      ],
    ],
  }),
};

type DataLinks = { fields: [Pair, Pair, Pair]; related: string[] };
const STANDARD_DATA_LINKS: Record<string, DataLinks> = {
  "IFRS 1": {
    fields: [
      ["تاريخ الانتقال وأساس التقرير السابق", "Transition date and previous GAAP"],
      ["القيمة السابقة والقيمة الافتتاحية وفق IFRS", "Previous and opening IFRS values"],
      ["الإعفاء المستخدم وأثر حقوق الملكية", "Elected exemption and equity impact"],
    ],
    related: ["IAS 8", "IAS 12", "IAS 16"],
  },
  "IFRS 2": {
    fields: [
      ["تاريخ المنح ونوع التسوية", "Grant date and settlement type"],
      ["عدد الجوائز وشروط الاستحقاق", "Award count and vesting conditions"],
      ["القيمة العادلة وفترة الخدمة", "Fair value and service period"],
    ],
    related: ["IAS 19", "IAS 12", "IFRS 3"],
  },
  "IFRS 3": {
    fields: [
      ["تاريخ الاستحواذ ونسبة السيطرة", "Acquisition date and control percentage"],
      ["المقابل وصافي الأصول المحددة", "Consideration and identifiable net assets"],
      ["الحصة غير المسيطرة والشهرة", "Non-controlling interest and goodwill"],
    ],
    related: ["IFRS 10", "IFRS 13", "IAS 36", "IAS 12"],
  },
  "IFRS 5": {
    fields: [
      ["الأصل وخطة البيع وتاريخ الاعتماد", "Asset, sale plan and approval date"],
      ["القيمة الدفترية وقيمة البيع الصافية", "Carrying amount and net selling amount"],
      ["نتيجة العملية غير المستمرة إن انطبقت", "Discontinued-operation result if applicable"],
    ],
    related: ["IAS 16", "IAS 36", "IFRS 8"],
  },
  "IFRS 6": {
    fields: [
      ["الترخيص والمنطقة وتاريخ الحق", "Licence, area and legal-right date"],
      ["نوع نفقة الاستكشاف والسياسة", "Exploration spending type and policy"],
      ["مؤشر الانخفاض وحالة الجدوى", "Impairment indicator and feasibility status"],
    ],
    related: ["IAS 16", "IAS 36", "IAS 38"],
  },
  "IFRS 7": {
    fields: [
      ["معرّف الأداة وفئة القياس", "Instrument ID and measurement category"],
      ["التدفقات التعاقدية حسب الاستحقاق", "Contractual cash flows by maturity"],
      ["التعرض الائتماني والضمانات", "Credit exposure and collateral"],
    ],
    related: ["IFRS 9", "IAS 32", "IFRS 13"],
  },
  "IFRS 8": {
    fields: [
      ["القطاع ومسؤول القرار التشغيلي", "Segment and chief operating decision maker"],
      ["الإيراد والنتيجة والأصول حسب القطاع", "Revenue, result and assets by segment"],
      ["فروق مقاييس الإدارة عن القوائم", "Internal-measure differences from statements"],
    ],
    related: ["IFRS 5", "IFRS 18", "IAS 34"],
  },
  "IFRS 9": {
    fields: [
      ["معرّف الأداة ونموذج الأعمال واختبار SPPI", "Instrument ID, business model and SPPI test"],
      ["مرحلة الائتمان وPD وLGD وEAD", "Credit stage, PD, LGD and EAD"],
      ["المعدل الفعلي والضمان والقيمة الدفترية", "Effective rate, collateral and carrying amount"],
    ],
    related: ["IFRS 7", "IFRS 13", "IAS 32"],
  },
  "IFRS 10": {
    fields: [
      ["هيكل الملكية وحقوق القرار", "Ownership structure and decision rights"],
      ["تاريخ بدء/انتهاء السيطرة", "Control start/end date"],
      ["أرصدة المجموعة والمعاملات الداخلية", "Group balances and intragroup transactions"],
    ],
    related: ["IFRS 3", "IFRS 12", "IAS 27"],
  },
  "IFRS 11": {
    fields: [
      ["أطراف الترتيب وقرارات الموافقة", "Arrangement parties and consent decisions"],
      ["حقوق الأصول والتزامات الديون", "Rights to assets and duties for liabilities"],
      ["تصنيف العملية أو المشروع المشترك", "Joint-operation or joint-venture classification"],
    ],
    related: ["IFRS 10", "IFRS 12", "IAS 28"],
  },
  "IFRS 12": {
    fields: [
      ["كيان مستثمر فيه ونوع العلاقة", "Investee and relationship type"],
      [
        "نسبة الملكية والتصويت والحصة غير المسيطرة",
        "Ownership, voting and non-controlling interest",
      ],
      [
        "المعلومات المالية الملخصة والقيود على التحويل",
        "Summarised data and transfer restrictions",
      ],
    ],
    related: ["IFRS 10", "IFRS 11", "IAS 28"],
  },
  "IFRS 13": {
    fields: [
      ["الأصل ووحدة الحساب والسوق الرئيسية", "Item, unit of account and principal market"],
      ["تقنية التقييم والمدخلات", "Valuation technique and inputs"],
      ["مستوى الهرم والحساسيات", "Hierarchy level and sensitivities"],
    ],
    related: ["IFRS 9", "IFRS 3", "IAS 40"],
  },
  "IFRS 14": {
    fields: [
      ["حالة أول تطبيق ونظام التعريفة", "First-time status and tariff regime"],
      ["رصيد التأجيل السابق وطريقة القياس", "Prior deferral balance and measurement policy"],
      ["حركة الرصيد وفترة الاسترداد", "Balance movement and recovery period"],
    ],
    related: ["IFRS 1", "IFRS 15", "IFRS 20"],
  },
  "IFRS 15": {
    fields: [
      ["العقد والعميل وتاريخ التنفيذ", "Contract, customer and performance dates"],
      ["التزامات الأداء وأسعار البيع المستقلة", "Performance obligations and standalone prices"],
      ["سعر المعاملة والتزام/أصل العقد", "Transaction price and contract liability/asset"],
    ],
    related: ["IFRS 16", "IFRS 9", "IAS 37"],
  },
  "IFRS 16": {
    fields: [
      ["الأصل المحدد ومدة الإيجار والخيارات", "Identified asset, lease term and options"],
      ["دفعات الإيجار ومعدل الخصم", "Lease payments and discount rate"],
      ["أصل حق الاستخدام والالتزام وجدول الفائدة", "ROU asset, liability and interest schedule"],
    ],
    related: ["IFRS 15", "IAS 36", "IAS 37"],
  },
  "IFRS 17": {
    fields: [
      ["حدود العقد وفوج الإصدار والمجموعة", "Contract boundary, cohort and group"],
      ["التدفقات المستقبلية وتعديل المخاطر", "Future cash flows and risk adjustment"],
      ["هامش الخدمة ووحدات التغطية", "Service margin and coverage units"],
    ],
    related: ["IFRS 9", "IFRS 15", "IAS 21"],
  },
  "IFRS 18": {
    fields: [
      ["فئة بند الربح والنشاط الرئيسي", "Profit-or-loss category and main activity"],
      ["المجاميع الفرعية التشغيلية والتمويلية", "Operating and financing subtotals"],
      ["مقياس الإدارة ومصالحة IFRS", "Management-defined measure and IFRS reconciliation"],
    ],
    related: ["IAS 1", "IAS 7", "IAS 33"],
  },
  "IFRS 19": {
    fields: [
      ["شروط أهلية الشركة التابعة", "Subsidiary eligibility conditions"],
      ["قرار انتخاب الإفصاحات المخفضة", "Reduced-disclosure election"],
      ["خريطة بند المعيار إلى متطلب IFRS 19", "Standard-topic to IFRS 19 requirement map"],
    ],
    related: ["IFRS 10", "IFRS 18", "IAS 27"],
  },
  "IFRS 20": {
    fields: [
      ["الاتفاقية التنظيمية والتعريفة", "Regulatory agreement and tariff"],
      ["فرق التوقيت وفترة الاسترداد/الرد", "Timing difference and recovery/refund period"],
      ["الحق أو الالتزام القابل للإنفاذ", "Enforceable right or obligation"],
    ],
    related: ["IFRS 14", "IFRS 15", "IAS 12"],
  },
  "IAS 1": {
    fields: [
      ["بند القائمة والتصنيف الحالي/غير الحالي", "Statement caption and current/non-current class"],
      ["شروط القروض وحق التأجيل", "Debt covenants and deferral right"],
      ["حكم الأهمية النسبية والسياسة", "Materiality judgement and policy"],
    ],
    related: ["IFRS 18", "IAS 8", "IAS 10"],
  },
  "IAS 2": {
    fields: [
      ["صنف المخزون وتكلفته", "Inventory category and cost"],
      ["سعر البيع وتكلفة الإكمال والبيع", "Selling price and completion/selling costs"],
      ["المبلغ المخفض وتاريخ المراجعة", "Write-down amount and review date"],
    ],
    related: ["IAS 23", "IFRS 15", "IAS 41"],
  },
  "IAS 7": {
    fields: [
      ["تاريخ التدفق وقيمته والبنك", "Cash-flow date, amount and bank"],
      ["نشاط تشغيل/استثمار/تمويل", "Operating/investing/financing activity"],
      ["الحركة غير النقدية ومصالحة التمويل", "Non-cash movement and financing reconciliation"],
    ],
    related: ["IFRS 18", "IFRS 16", "IAS 34"],
  },
  "IAS 8": {
    fields: [
      ["نوع التغيير: سياسة/تقدير/خطأ", "Change type: policy/estimate/error"],
      ["تاريخ نشأة المعلومة أو الخطأ", "Information/error origin date"],
      ["الفترات المتأثرة ومبالغ التسوية", "Affected periods and adjustment amounts"],
    ],
    related: ["IFRS 1", "IAS 10", "IAS 16"],
  },
  "IAS 10": {
    fields: [
      ["تاريخ التقرير وتاريخ اعتماد القوائم", "Reporting and authorisation dates"],
      ["تاريخ الحدث والظرف السابق", "Event date and pre-existing condition"],
      ["تصنيف معدل/غير معدل والأثر", "Adjusting/non-adjusting class and effect"],
    ],
    related: ["IAS 37", "IAS 8", "IFRS 1"],
  },
  "IAS 12": {
    fields: [
      ["القيمة الدفترية والأساس الضريبي", "Carrying amount and tax base"],
      ["الفرق المؤقت ومعدل الضريبة", "Temporary difference and tax rate"],
      ["تاريخ العكس ومكان الاعتراف", "Reversal period and recognition location"],
    ],
    related: ["IAS 16", "IFRS 3", "IAS 19"],
  },
  "IAS 16": {
    fields: [
      ["الأصل والمكون وتاريخ الجاهزية", "Asset, component and ready-for-use date"],
      ["التكلفة والقيمة المتبقية والعمر", "Cost, residual value and useful life"],
      ["الإهلاك والاستبدال والانخفاض", "Depreciation, replacement and impairment"],
    ],
    related: ["IAS 23", "IAS 36", "IAS 38"],
  },
  "IAS 19": {
    fields: [
      ["نوع الخطة وبيانات الموظفين", "Plan type and employee data"],
      ["التزام المنافع وأصول الخطة", "Benefit obligation and plan assets"],
      ["الخدمة والفائدة وإعادة القياس", "Service cost, interest and remeasurement"],
    ],
    related: ["IAS 26", "IAS 12", "IFRS 2"],
  },
  "IAS 20": {
    fields: [
      ["برنامج المنحة وشروطها", "Grant programme and conditions"],
      ["الأصل/المصروف المدعوم والمبلغ", "Supported asset/cost and amount"],
      ["فترة الاعتراف والدخل المؤجل", "Recognition period and deferred income"],
    ],
    related: ["IAS 16", "IAS 23", "IAS 37"],
  },
  "IAS 21": {
    fields: [
      ["العملة الوظيفية وعملة المعاملة", "Functional and transaction currencies"],
      ["المبلغ الأجنبي وسعر المعاملة والإقفال", "Foreign amount and transaction/closing rates"],
      ["نوع البند وفرق الصرف", "Item type and exchange difference"],
    ],
    related: ["IAS 29", "IFRS 10", "IFRS 18"],
  },
  "IAS 23": {
    fields: [
      ["الأصل المؤهل وتاريخ بدء الإنشاء", "Qualifying asset and construction start"],
      ["الرصيد المقترض ومعدل الفائدة", "Borrowing balance and interest rate"],
      [
        "فترة الرسملة وعوائد الاستثمار المؤقت",
        "Capitalisation period and temporary investment income",
      ],
    ],
    related: ["IAS 16", "IAS 38", "IFRS 16"],
  },
  "IAS 24": {
    fields: [
      ["هوية الطرف وطبيعة العلاقة", "Party identity and relationship"],
      ["نوع المعاملة ومبلغها", "Transaction type and amount"],
      ["الرصيد والشروط والضمانات", "Balance, terms and security"],
    ],
    related: ["IFRS 10", "IFRS 12", "IFRS 9"],
  },
  "IAS 26": {
    fields: [
      ["نوع خطة التقاعد والمستفيدون", "Retirement-plan type and beneficiaries"],
      ["صافي الأصول المتاحة للمنافع", "Net assets available for benefits"],
      ["القيمة الاكتوارية للمنافع الموعودة", "Actuarial value of promised benefits"],
    ],
    related: ["IAS 19", "IFRS 9", "IAS 21"],
  },
  "IAS 27": {
    fields: [
      ["الشركة المستثمر فيها ونوع الحصة", "Investee and interest type"],
      ["سياسة القياس في القوائم المنفصلة", "Separate-statement measurement policy"],
      ["تكلفة الاستثمار وتوزيعاته", "Investment cost and distributions"],
    ],
    related: ["IFRS 10", "IAS 28", "IFRS 9"],
  },
  "IAS 28": {
    fields: [
      ["نسبة الملكية ودليل التأثير المهم", "Ownership and significant-influence evidence"],
      ["القيمة الدفترية وحصة النتائج", "Carrying amount and share of results"],
      ["التوزيعات والخسائر والمصالح الطويلة", "Dividends, losses and long-term interests"],
    ],
    related: ["IFRS 11", "IFRS 12", "IAS 36"],
  },
  "IAS 29": {
    fields: [
      ["الدولة ومؤشر الأسعار العام", "Country and general price index"],
      ["تاريخ نشأة الأصل غير النقدي", "Non-monetary asset origination date"],
      ["معامل إعادة التعبير وصافي المركز النقدي", "Restatement factor and net monetary position"],
    ],
    related: ["IAS 21", "IAS 16", "IFRS 18"],
  },
  "IAS 32": {
    fields: [
      ["شروط السداد والتسوية النقدية", "Redemption and cash-settlement terms"],
      ["عدد الأسهم ومبلغ التسوية", "Share quantity and settlement amount"],
      ["مكونات الدين وحقوق الملكية", "Liability and equity components"],
    ],
    related: ["IFRS 9", "IFRS 7", "IAS 33"],
  },
  "IAS 33": {
    fields: [
      ["الربح العائد للأسهم العادية", "Profit attributable to ordinary shares"],
      ["المتوسط المرجح للأسهم", "Weighted-average share count"],
      ["الأدوات المحتملة وأثر التخفيف", "Potential shares and dilution effect"],
    ],
    related: ["IAS 32", "IFRS 2", "IFRS 18"],
  },
  "IAS 34": {
    fields: [
      ["الفترة المرحلية والمقارنة", "Interim and comparative periods"],
      ["التغيرات المهمة والموسمية", "Significant changes and seasonality"],
      ["السياسات والتقديرات المرحلية", "Interim policies and estimates"],
    ],
    related: ["IAS 10", "IAS 8", "IFRS 18"],
  },
  "IAS 36": {
    fields: [
      ["الأصل أو الوحدة المولدة للنقد", "Asset or cash-generating unit"],
      ["القيمة الدفترية وقيمة الاستخدام", "Carrying amount and value in use"],
      ["قيمة البيع الصافية ومعدل الخصم", "Net disposal value and discount rate"],
    ],
    related: ["IAS 16", "IAS 38", "IFRS 3"],
  },
  "IAS 37": {
    fields: [
      ["الحدث السابق ونوع الالتزام", "Past event and obligation type"],
      ["احتمال الخروج وأفضل تقدير", "Outflow probability and best estimate"],
      ["توقيت التسوية والخصم والتعويض", "Settlement timing, discount and reimbursement"],
    ],
    related: ["IAS 10", "IFRS 15", "IAS 36"],
  },
  "IAS 38": {
    fields: [
      ["مرحلة البحث أو التطوير", "Research or development phase"],
      ["تاريخ تحقق شروط الرسملة", "Capitalisation criteria fulfilment date"],
      ["التكلفة والعمر وتاريخ الجاهزية", "Cost, life and ready-for-use date"],
    ],
    related: ["IAS 36", "IAS 16", "IFRS 3"],
  },
  "IAS 40": {
    fields: [
      ["العقار وغرض الاحتفاظ", "Property and holding purpose"],
      ["نموذج القياس والقيمة العادلة", "Measurement model and fair value"],
      ["الإيجار وحركة العقار", "Rental income and property roll-forward"],
    ],
    related: ["IFRS 13", "IAS 16", "IFRS 16"],
  },
  "IAS 41": {
    fields: [
      ["نوع الأصل الحيوي وعدده", "Biological asset type and quantity"],
      ["القيمة العادلة وتكاليف البيع", "Fair value and selling costs"],
      ["التغير المادي/السعري وتاريخ الحصاد", "Physical/price change and harvest date"],
    ],
    related: ["IAS 2", "IAS 16", "IFRS 13"],
  },
};

for (const [code, dive] of Object.entries(IFRS_STANDARD_DEEP_DIVES)) {
  const links = STANDARD_DATA_LINKS[code];
  if (!links) throw new Error(`Missing practical data links for ${code}`);
  dive.dataFields = localizeAll(links.fields);
  dive.relatedStandards = links.related;
}

export const getStandardDeepDive = (code: string) => IFRS_STANDARD_DEEP_DIVES[code];
