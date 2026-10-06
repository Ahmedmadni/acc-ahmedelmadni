import { IFRS_BOOK2_STUDY_EXPANSIONS } from "./ifrs-book2-study-expansions";

export type StudyText = { ar: string; en: string };

export interface StudyJournalEntry {
  label: StudyText;
  debit: StudyText;
  credit: StudyText;
  amount: StudyText;
}

export interface StudyWorkedExample {
  title: StudyText;
  facts: StudyText;
  calculations: StudyText[];
  conclusion: StudyText;
  journalEntries: StudyJournalEntry[];
  reference: string;
}

export interface StandardStudyExpansion {
  sections: Array<{
    title: StudyText;
    explanation: StudyText;
    keyPoints: StudyText[];
    reference: string;
  }>;
  workedExamples: StudyWorkedExample[];
}

const text = (ar: string, en: string): StudyText => ({ ar, en });

/**
 * Reviewed study material organised by Standard. The public page deliberately
 * cites only the applicable IFRS/IAS literature; acquisition provenance is not
 * part of the learner-facing content.
 */
const BASE_IFRS_STANDARD_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> = {
  "IFRS 15": {
    sections: [
      {
        title: text("تمييز التزامات الأداء", "Identifying performance obligations"),
        explanation: text(
          "ابدأ بكل وعد صريح أو ضمني في العقد، ثم اختبر هل السلعة أو الخدمة متميزة: يستطيع العميل الانتفاع بها بمفردها أو مع موارد متاحة، ويكون وعد نقلها منفصلًا في سياق العقد. لذلك قد يتضمن عقد برنامج قياسي وتركيب يمكن لمورد آخر تنفيذه ودعمًا فنيًا ثلاثة التزامات أداء، لكن النتيجة تعتمد دائمًا على وقائع التكامل والتعديل والتخصيص.",
          "Start with every explicit or implicit promise in the contract, then test whether each good or service is distinct: the customer can benefit from it on its own or with readily available resources, and the transfer promise is separately identifiable in the contract. A standard software licence, installation available from other providers and technical support may therefore be three performance obligations, but the conclusion always depends on integration, modification and customisation facts.",
        ),
        keyPoints: [
          text(
            "لا تعد عدد الفواتير أو بنود التسعير؛ عد الوعود المتميزة.",
            "Count distinct promises, not invoices or pricing lines.",
          ),
          text(
            "وثّق سبب كون التركيب خدمة مستقلة أو جزءًا من ناتج متكامل.",
            "Document why installation is a separate service or part of one integrated output.",
          ),
          text(
            "اربط كل التزام أداء بتوقيت الاعتراف المناسب له.",
            "Link each performance obligation to its own recognition pattern.",
          ),
        ],
        reference: "IFRS 15.22–30",
      },
      {
        title: text("المقابل المتغير والقيد الحاكم", "Variable consideration and the constraint"),
        explanation: text(
          "يُقدّر المقابل المتغير بطريقة القيمة المتوقعة أو المبلغ الأكثر احتمالًا، بحسب الطريقة التي تتنبأ بصورة أفضل بالمقابل. لكن لا يكفي اختيار النتيجة الأكثر احتمالًا: لا يدخل المبلغ في سعر المعاملة إلا بالقدر الذي يكون معه من المرجح بدرجة عالية ألا يحدث عكس جوهري للإيراد عند زوال عدم التأكد.",
          "Variable consideration is estimated using either expected value or the most likely amount, whichever better predicts the consideration. Selecting the most likely outcome is not enough: an amount is included in the transaction price only to the extent that it is highly probable that a significant revenue reversal will not occur when the uncertainty is resolved.",
        ),
        keyPoints: [
          text(
            "افحص احتمال العكس وحجمه لا احتمال استلام المكافأة وحده.",
            "Assess both the likelihood and magnitude of reversal, not merely the chance of receiving the bonus.",
          ),
          text(
            "أعد تقدير المقابل المتغير في كل تاريخ تقرير.",
            "Update variable consideration at each reporting date.",
          ),
        ],
        reference: "IFRS 15.50–59",
      },
      {
        title: text("التخصيص بأسعار البيع المستقلة", "Allocation using stand-alone selling prices"),
        explanation: text(
          "يوزع سعر المعاملة عند نشأة العقد على التزامات الأداء بنسبة أسعار البيع المستقلة النسبية. السعر المكتوب لكل عنصر ليس بالضرورة مبلغ الإيراد المنسوب إليه، والخصم يوزع عادة على جميع الالتزامات ما لم يثبت أن الخصم يخص التزامًا معينًا وفق شروط المعيار.",
          "At contract inception, the transaction price is allocated to performance obligations in proportion to relative stand-alone selling prices. The stated price of an item is not necessarily its allocated revenue, and a discount is generally allocated across all obligations unless the Standard's evidence supports allocating it to a specific obligation.",
        ),
        keyPoints: [
          text(
            "اجمع أسعار البيع المستقلة أولًا ثم احسب نسبة كل التزام.",
            "First total the stand-alone selling prices, then calculate each obligation's proportion.",
          ),
          text(
            "الاعتراف بالمبلغ المخصص يتبع الوفاء بالالتزام لا تحصيل النقد.",
            "Recognition of the allocated amount follows satisfaction, not cash collection.",
          ),
        ],
        reference: "IFRS 15.73–86",
      },
    ],
    workedExamples: [
      {
        title: text(
          "جهاز راوتر مع خدمة إنترنت لمدة 12 شهرًا",
          "Router bundled with 12 months of broadband",
        ),
        facts: text(
          "دفع العميل 220 مقدمًا مقابل راوتر وخدمة إنترنت لمدة 12 شهرًا. سعر بيع الراوتر منفردًا 30، وسعر الخدمة منفردة 20 شهريًا.",
          "A customer pays 220 in advance for a router and 12 months of broadband. The router sells separately for 30 and broadband sells separately for 20 per month.",
        ),
        calculations: [
          text(
            "إجمالي أسعار البيع المستقلة = 30 + (20 × 12) = 270.",
            "Total stand-alone selling prices = 30 + (20 × 12) = 270.",
          ),
          text(
            "المبلغ المخصص للراوتر = 220 × 30 ÷ 270 = 24.44.",
            "Amount allocated to the router = 220 × 30 ÷ 270 = 24.44.",
          ),
          text(
            "المبلغ المخصص للخدمة = 220 × 240 ÷ 270 = 195.56، أي نحو 16.30 شهريًا عند نمط خدمة منتظم.",
            "Amount allocated to broadband = 220 × 240 ÷ 270 = 195.56, or about 16.30 per month for an even service pattern.",
          ),
        ],
        conclusion: text(
          "يعترف بإيراد الراوتر عند انتقال السيطرة، ويعترف بإيراد الخدمة على مدى 12 شهرًا مع تقديمها.",
          "Router revenue is recognised when control transfers; broadband revenue is recognised over the 12 months as service is provided.",
        ),
        journalEntries: [
          {
            label: text("عند التحصيل مقدمًا", "On advance collection"),
            debit: text("النقدية", "Cash"),
            credit: text("التزام عقد", "Contract liability"),
            amount: text("220.00", "220.00"),
          },
          {
            label: text("عند تسليم الراوتر", "When the router transfers"),
            debit: text("التزام عقد", "Contract liability"),
            credit: text("إيراد الراوتر", "Router revenue"),
            amount: text("24.44", "24.44"),
          },
          {
            label: text("كل شهر من الخدمة تقريبًا", "Approximately each service month"),
            debit: text("التزام عقد", "Contract liability"),
            credit: text("إيراد الخدمة", "Service revenue"),
            amount: text("16.30", "16.30"),
          },
        ],
        reference: "IFRS 15.31, 35, 73–86",
      },
    ],
  },
  "IAS 16": {
    sections: [
      {
        title: text("نموذج إعادة التقييم على مستوى الفئة", "Class-wide revaluation model"),
        explanation: text(
          "إذا اختارت المنشأة نموذج إعادة التقييم، فلا يجوز انتقاء الأصول التي ارتفعت فقط. يعاد تقييم كامل الفئة التي ينتمي إليها الأصل بصورة منتظمة بما يمنع اختلاف القيم الدفترية جوهريًا عن القيم العادلة في نهاية الفترة.",
          "When an entity elects the revaluation model, it cannot select only assets that have appreciated. The entire class is revalued with sufficient regularity so carrying amounts do not differ materially from period-end fair values.",
        ),
        keyPoints: [
          text(
            "حدد الفئة بحسب طبيعة الأصول واستخدامها في العمليات.",
            "Define the class by similar nature and use in operations.",
          ),
          text(
            "الزيادة عادة في الدخل الشامل الآخر، مع مراعاة عكس انخفاض سابق في الربح أو الخسارة.",
            "An increase is generally in OCI, subject to reversing a prior profit-or-loss decrease.",
          ),
          text(
            "الانخفاض يحمل أولًا على فائض إعادة التقييم القائم للأصل ثم على الربح أو الخسارة.",
            "A decrease first uses any existing revaluation surplus for the asset, then profit or loss.",
          ),
        ],
        reference: "IAS 16.31, 36, 39–40",
      },
      {
        title: text("الاستبعاد ونتيجة البيع", "Derecognition and disposal result"),
        explanation: text(
          "يستبعد الأصل عند التصرف فيه أو عندما لا تتوقع منه منافع اقتصادية مستقبلية. نتيجة البيع هي صافي متحصلات التصرف ناقصًا القيمة الدفترية في تاريخ الاستبعاد، وتثبت في الربح أو الخسارة. توقيت تحصيل المقابل لا يؤجل الاستبعاد إذا انتقلت السيطرة وتحققت شروط التصرف.",
          "An asset is derecognised on disposal or when no future economic benefits are expected. The disposal result is net proceeds less carrying amount at derecognition and is recognised in profit or loss. Later cash collection does not defer derecognition when control has transferred and disposal criteria are met.",
        ),
        keyPoints: [
          text(
            "استخدم القيمة الدفترية بعد آخر إهلاك أو إعادة تقييم حتى تاريخ البيع.",
            "Use carrying amount after depreciation or revaluation up to the disposal date.",
          ),
          text(
            "يمكن تحويل فائض إعادة التقييم المرتبط بالأصل داخل حقوق الملكية، لا عبر الربح أو الخسارة.",
            "The related revaluation surplus may be transferred within equity, not through profit or loss.",
          ),
        ],
        reference: "IAS 16.67–71",
      },
    ],
    workedExamples: [
      {
        title: text(
          "زيادة ثم انخفاض في قيمة أرض",
          "An increase followed by a decrease in land value",
        ),
        facts: text(
          "بلغت تكلفة أرض 500,000. ارتفعت قيمتها العادلة أولًا إلى 600,000 ثم انخفضت لاحقًا إلى 450,000، مع افتراض عدم وجود فروق أخرى.",
          "Land cost is 500,000. Fair value first rises to 600,000 and later falls to 450,000, assuming no other differences.",
        ),
        calculations: [
          text(
            "الزيادة الأولى = 600,000 − 500,000 = 100,000.",
            "Initial increase = 600,000 − 500,000 = 100,000.",
          ),
          text(
            "الانخفاض اللاحق = 600,000 − 450,000 = 150,000.",
            "Subsequent decrease = 600,000 − 450,000 = 150,000.",
          ),
          text(
            "يحمل 100,000 على فائض إعادة التقييم، والباقي 50,000 على الربح أو الخسارة.",
            "Charge 100,000 against revaluation surplus and the remaining 50,000 to profit or loss.",
          ),
        ],
        conclusion: text(
          "لا يثبت كامل الانخفاض في المصروف؛ يستخدم الرصيد السابق في الدخل الشامل الآخر أولًا.",
          "The full decrease is not expensed; the existing OCI surplus is used first.",
        ),
        journalEntries: [
          {
            label: text("إثبات الزيادة الأولى", "Record the initial increase"),
            debit: text("الأرض", "Land"),
            credit: text("فائض إعادة التقييم — الدخل الشامل الآخر", "Revaluation surplus — OCI"),
            amount: text("100,000", "100,000"),
          },
          {
            label: text("إثبات الانخفاض اللاحق", "Record the subsequent decrease"),
            debit: text(
              "فائض إعادة التقييم 100,000 + خسارة 50,000",
              "Revaluation surplus 100,000 + loss 50,000",
            ),
            credit: text("الأرض", "Land"),
            amount: text("150,000", "150,000"),
          },
        ],
        reference: "IAS 16.39–40",
      },
      {
        title: text("بيع أرض بعد إعادة تقييمها", "Sale of revalued land"),
        facts: text(
          "اشتريت أرض بمبلغ 15 مليون، وأصبحت قيمتها الدفترية بعد إعادة التقييم 23 مليون، ثم بيعت مقابل 21 مليون مع تحصيل النقد في الفترة التالية.",
          "Land was acquired for 15 million, its revalued carrying amount became 23 million, and it was sold for 21 million with cash collected in the next period.",
        ),
        calculations: [
          text("خسارة التصرف = 21 − 23 = 2 مليون.", "Disposal loss = 21 − 23 = 2 million."),
          text(
            "تثبت الخسارة في فترة البيع؛ تأخر التحصيل ينشئ ذمة ولا يغير نتيجة الاستبعاد.",
            "Recognise the loss in the disposal period; delayed collection creates a receivable and does not change derecognition.",
          ),
        ],
        conclusion: text(
          "خسارة قدرها 2 مليون في الربح أو الخسارة.",
          "A 2 million loss in profit or loss.",
        ),
        journalEntries: [
          {
            label: text("إثبات البيع على الحساب", "Record the sale on credit"),
            debit: text(
              "ذمم مدينة 21 مليون + خسارة بيع 2 مليون",
              "Receivable 21 million + disposal loss 2 million",
            ),
            credit: text("الأرض", "Land"),
            amount: text("23 مليون", "23 million"),
          },
        ],
        reference: "IAS 16.67–71",
      },
    ],
  },
  "IAS 36": {
    sections: [
      {
        title: text("القيمة القابلة للاسترداد", "Recoverable amount"),
        explanation: text(
          "القيمة القابلة للاسترداد هي الأعلى بين القيمة من الاستخدام والقيمة العادلة ناقصًا تكاليف التصرف. توجد خسارة انخفاض فقط عندما تزيد القيمة الدفترية على هذا المبلغ الأعلى، لا على المبلغ الأقل.",
          "Recoverable amount is the higher of value in use and fair value less costs of disposal. An impairment exists only when carrying amount exceeds that higher amount, not the lower amount.",
        ),
        keyPoints: [
          text(
            "لا يلزم دائمًا حساب المبلغين إذا أثبت أحدهما أنه يتجاوز القيمة الدفترية.",
            "Both amounts need not always be calculated if one demonstrably exceeds carrying amount.",
          ),
          text(
            "خسارة أصل معاد تقييمه تتبع أولًا رصيد إعادة التقييم ذي الصلة.",
            "A revalued asset's impairment first follows its related revaluation balance.",
          ),
        ],
        reference: "IAS 36.6, 18–22, 60–61",
      },
      {
        title: text("اختبار وحدة توليد النقد", "Cash-generating unit testing"),
        explanation: text(
          "إذا لم يولد الأصل تدفقات نقدية مستقلة إلى حد كبير، يختبر ضمن أصغر مجموعة أصول تولد تدفقات مستقلة. توزع خسارة الوحدة أولًا على الشهرة، ثم على الأصول الأخرى نسبيًا مع احترام الحدود الدنيا التي يحددها المعيار.",
          "If an asset does not generate largely independent cash inflows, it is tested in the smallest group that does. A CGU loss is allocated first to goodwill and then pro rata to other assets, subject to the Standard's floors.",
        ),
        keyPoints: [
          text(
            "لا تخفض أصلًا إلى أقل من الأعلى من قيمته العادلة ناقص تكاليف التصرف وقيمته من الاستخدام والصفر.",
            "Do not reduce an asset below the highest of FVLCD, value in use and zero.",
          ),
          text("لا تعكس خسارة انخفاض الشهرة لاحقًا.", "Never reverse a goodwill impairment loss."),
        ],
        reference: "IAS 36.66, 104–105, 124",
      },
    ],
    workedExamples: [
      {
        title: text("اختبار آلة بين الاستخدام والبيع", "Testing plant using use and sale values"),
        facts: text(
          "القيمة الدفترية لآلة 124,000، وقيمتها من الاستخدام 117,000. سعر البيع المتوقع 127,000 وتكاليف التصرف 10% من السعر.",
          "Plant has a carrying amount of 124,000 and value in use of 117,000. Expected selling price is 127,000 and disposal costs are 10% of price.",
        ),
        calculations: [
          text(
            "القيمة العادلة ناقص تكاليف التصرف = 127,000 × 90% = 114,300.",
            "Fair value less costs of disposal = 127,000 × 90% = 114,300.",
          ),
          text(
            "القيمة القابلة للاسترداد = الأعلى بين 117,000 و114,300 = 117,000.",
            "Recoverable amount = higher of 117,000 and 114,300 = 117,000.",
          ),
          text(
            "خسارة الانخفاض = 124,000 − 117,000 = 7,000.",
            "Impairment loss = 124,000 − 117,000 = 7,000.",
          ),
        ],
        conclusion: text(
          "تخفض الآلة إلى 117,000 وتثبت خسارة 7,000.",
          "Reduce the plant to 117,000 and recognise a 7,000 loss.",
        ),
        journalEntries: [
          {
            label: text("إثبات الانخفاض", "Recognise impairment"),
            debit: text("خسارة انخفاض — الربح أو الخسارة", "Impairment loss — profit or loss"),
            credit: text("مجمع انخفاض/الأصل", "Accumulated impairment/asset"),
            amount: text("7,000", "7,000"),
          },
        ],
        reference: "IAS 36.6, 59–60",
      },
    ],
  },
  "IAS 12": {
    sections: [
      {
        title: text("من القيمة الدفترية إلى الأساس الضريبي", "From carrying amount to tax base"),
        explanation: text(
          "احسب الفروق المؤقتة لكل أصل والتزام بمقارنة القيمة الدفترية بأساسه الضريبي. الفروق الخاضعة للضريبة تنشئ عادة التزام ضريبة مؤجلة، والفروق القابلة للخصم قد تنشئ أصلًا بقدر احتمال توافر أرباح خاضعة للضريبة.",
          "Calculate temporary differences asset by asset and liability by liability by comparing carrying amount with tax base. Taxable differences generally create deferred tax liabilities; deductible differences may create assets to the extent probable taxable profits will be available.",
        ),
        keyPoints: [
          text(
            "استخدم معدلات الضريبة المقررة أو المقررة جوهريًا والمتوقعة عند الانعكاس.",
            "Use enacted or substantively enacted rates expected on reversal.",
          ),
          text(
            "لا تخصم أرصدة الضريبة المؤجلة إلى القيمة الحالية.",
            "Do not discount deferred tax balances.",
          ),
          text(
            "اعرض أثر الضريبة في نفس موضع المعاملة الأصلية: الربح أو الخسارة أو الدخل الشامل الآخر أو حقوق الملكية.",
            "Recognise tax in the same location as the underlying transaction: P&L, OCI or equity.",
          ),
        ],
        reference: "IAS 12.15, 24, 46–47, 53, 58–61A",
      },
    ],
    workedExamples: [
      {
        title: text("آلة وأرض معاد تقييمها", "A machine and revalued land"),
        facts: text(
          "اشترت منشأة آلة بـ10,000، وإهلاكها المحاسبي للسنة 1,000، بينما الخصم الضريبي 4,000. كما اشترت أرضًا بـ3,000,000 وأعادت تقييمها إلى 5,000,000 دون تغير الأساس الضريبي.",
          "An entity buys a machine for 10,000, records accounting depreciation of 1,000 and receives tax depreciation of 4,000. It also buys land for 3,000,000 and revalues it to 5,000,000 with no change in tax base.",
        ),
        calculations: [
          text(
            "الآلة: القيمة الدفترية 9,000، والأساس الضريبي 6,000، والفرق المؤقت 3,000.",
            "Machine: carrying amount 9,000, tax base 6,000, temporary difference 3,000.",
          ),
          text(
            "الأرض: القيمة الدفترية 5,000,000، والأساس الضريبي 3,000,000، والفرق المؤقت 2,000,000.",
            "Land: carrying amount 5,000,000, tax base 3,000,000, temporary difference 2,000,000.",
          ),
          text(
            "إجمالي الفروق المؤقتة الخاضعة للضريبة = 2,003,000؛ يضرب في معدل الضريبة المناسب لحساب الالتزام.",
            "Total taxable temporary differences = 2,003,000; multiply by the applicable tax rate to measure the liability.",
          ),
        ],
        conclusion: text(
          "جزء الآلة يؤثر عادة في الربح أو الخسارة، بينما ضريبة فرق إعادة تقييم الأرض تتبع الزيادة إلى الدخل الشامل الآخر.",
          "The machine portion generally affects profit or loss, while tax on the land revaluation follows the underlying increase to OCI.",
        ),
        journalEntries: [],
        reference: "IAS 12.15, 20, 58, 61A",
      },
    ],
  },
  "IAS 38": {
    sections: [
      {
        title: text(
          "بوابة الاعتراف: التعريف والسيطرة والقياس",
          "Recognition gateway: definition, control and measurement",
        ),
        explanation: text(
          "لا يكفي أن يكون الإنفاق مفيدًا أو ذا اسم تجاري جذاب حتى يصبح أصلًا غير ملموس. يجب أن يكون المورد غير نقدي بلا جوهر مادي، وقابلًا للتحديد إما لأنه منفصل وقابل للبيع أو الترخيص، أو لأنه ناشئ من حقوق تعاقدية أو قانونية. ثم يلزم احتمال تدفق المنافع المستقبلية وإمكان قياس التكلفة بموثوقية مع سيطرة المنشأة على المورد.",
          "Useful expenditure or an attractive commercial label is not enough to create an intangible asset. The resource must be an identifiable non-monetary asset without physical substance: either separable and capable of sale or licensing, or arising from contractual or legal rights. Probable future benefits, reliable cost measurement and the entity's control over the resource are then required.",
        ),
        keyPoints: [
          text(
            "الشهرة المتولدة داخليًا لا تثبت أصلًا لأنها ليست موردًا قابلًا للتحديد تقاس تكلفته بموثوقية.",
            "Internally generated goodwill is not recognised because it is not an identifiable resource with reliably measurable cost.",
          ),
          text(
            "العلامات التجارية وقوائم العملاء وعناوين النشر المتولدة داخليًا تحمل على المصروف.",
            "Internally generated brands, customer lists and publishing titles are expensed.",
          ),
          text(
            "الأصل المكتسب منفردًا يقاس مبدئيًا بالتكلفة، أما المكتسب في تجميع أعمال فيقاس وفق IFRS 3.",
            "A separately acquired asset is initially measured at cost; one acquired in a business combination follows IFRS 3.",
          ),
        ],
        reference: "IAS 38.8–17, 18–23, 48–64",
      },
      {
        title: text(
          "البحث مقابل التطوير: نقطة التحول الحاسمة",
          "Research versus development: the decisive transition",
        ),
        explanation: text(
          "ينفق البحث فورًا لأنه لا يمكن في تلك المرحلة إثبات وجود أصل سيولد منافع محتملة. أما نفقات التطوير فتُرسمل من التاريخ الذي تثبت فيه المنشأة جميع الشروط الستة معًا: الجدوى الفنية، والنية والقدرة على الإكمال، والقدرة على الاستخدام أو البيع، وكيفية توليد المنافع أو وجود سوق، وتوافر الموارد، والقدرة على قياس الإنفاق بموثوقية. لا يجوز الرجوع لاحقًا ورسملة مبالغ سبق إثباتها مصروفًا.",
          "Research is expensed immediately because an asset capable of generating probable benefits cannot yet be demonstrated. Development expenditure is capitalised only from the date all six conditions are demonstrated together: technical feasibility, intention and ability to complete, ability to use or sell, probable benefits or a market, adequate resources, and reliable measurement of expenditure. Amounts previously expensed cannot later be reinstated as an asset.",
        ),
        keyPoints: [
          text(
            "حدد تاريخ استيفاء الشروط بوثائق مجلس الإدارة والميزانية والاختبارات الفنية ودراسة السوق.",
            "Evidence the criteria date with board approval, budgets, technical tests and market support.",
          ),
          text(
            "إذا تعذر فصل البحث عن التطوير، تعامل مع كامل المشروع كمرحلة بحث.",
            "If research cannot be distinguished from development, treat the whole project as research.",
          ),
          text(
            "تبدأ الرسملة مستقبلًا من تاريخ الاستيفاء، وليست خيارًا محاسبيًا بعد تحقق الشروط.",
            "Capitalisation starts prospectively when the criteria are met; it is not an accounting-policy choice once they are satisfied.",
          ),
        ],
        reference: "IAS 38.52–67, 71",
      },
      {
        title: text(
          "العمر الإنتاجي والقياس اللاحق والانخفاض",
          "Useful life, subsequent measurement and impairment",
        ),
        explanation: text(
          "بعد الاعتراف تختار المنشأة نموذج التكلفة أو نموذج إعادة التقييم للفئة، لكن إعادة التقييم لا تتاح إلا عند وجود سوق نشط، وهو أمر نادر للأصول غير الملموسة الفريدة. الأصل ذو العمر المحدد يستهلك من تاريخ إتاحته للاستخدام وفق نمط المنافع، أما ذو العمر غير المحدد فلا يستهلك ويُختبر سنويًا للانخفاض وتراجع صفة العمر غير المحدد كل فترة.",
          "After recognition, the entity applies the cost model or, for a class, the revaluation model; revaluation is available only when an active market exists, which is rare for unique intangibles. A finite-life asset is amortised from the date it is available for use according to the benefit pattern. An indefinite-life asset is not amortised, is tested annually for impairment, and its indefinite-life assessment is reconsidered each period.",
        ),
        keyPoints: [
          text(
            "القيمة التخريدية للأصل ذي العمر المحدد تساوي صفرًا عادةً إلا في حالات محددة.",
            "The residual value of a finite-life intangible is normally zero except in specified circumstances.",
          ),
          text(
            "راجع العمر والطريقة والقيمة التخريدية سنويًا، وعالج التغير كتغير في تقدير محاسبي.",
            "Review useful life, method and residual value annually and account for changes as estimate changes.",
          ),
          text(
            "الأصل غير المتاح للاستخدام والأصل ذو العمر غير المحدد يخضعان لاختبار انخفاض سنوي.",
            "An asset not yet available for use and an indefinite-life asset require annual impairment testing.",
          ),
        ],
        reference: "IAS 38.72–87, 97–110; IAS 36.9–10",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مشروع بحث وتطوير ومصروف السنة",
          "Research and development project: annual expense",
        ),
        facts: text(
          "في 1 يناير 20X5 كان لدى Moor Labs تكاليف تطوير مرسملة بتكلفة أصلية 10 ملايين وقيمة دفترية 5 ملايين، وتستهلك بنسبة 25% سنويًا بالقسط الثابت. أنفق مشروع جديد 1.6 مليون في البحث حتى 31 أغسطس، ثم 750 ألفًا شهريًا في التطوير. لم تثبت الجدوى التجارية إلا في 1 نوفمبر وظل المشروع قيد التطوير في 31 ديسمبر.",
          "At 1 January 20X5, Moor Labs had capitalised development costs with original cost of $10m and carrying amount of $5m, amortised at 25% a year straight-line. A new project incurred $1.6m of research costs to 31 August and then $750,000 a month of development expenditure. Commercial success was not demonstrated until 1 November and the project remained in development at year-end.",
        ),
        calculations: [
          text("مصروف البحث = 1.6 مليون.", "Research expense = $1.6m."),
          text(
            "تطوير سبتمبر وأكتوبر قبل استيفاء الشروط = 0.75 × شهرين = 1.5 مليون مصروف.",
            "September and October development before the criteria date = $0.75m × 2 = $1.5m expense.",
          ),
          text(
            "تطوير نوفمبر وديسمبر بعد استيفاء الشروط = 0.75 × شهرين = 1.5 مليون يرسمل.",
            "November and December development after the criteria date = $0.75m × 2 = $1.5m capitalised.",
          ),
          text(
            "استهلاك الأصل القائم = 10 × 25% = 2.5 مليون؛ إجمالي مصروف السنة = 1.6 + 1.5 + 2.5 = 5.6 مليون.",
            "Amortisation of the existing asset = $10m × 25% = $2.5m; total annual expense = $1.6m + $1.5m + $2.5m = $5.6m.",
          ),
        ],
        conclusion: text(
          "يثبت 5.6 مليون مصروفًا في 20X5، بينما يضاف 1.5 مليون فقط إلى أصل التطوير الجديد.",
          "$5.6m is recognised as expense in 20X5, while only $1.5m is added to the new development asset.",
        ),
        journalEntries: [
          {
            label: text("البحث والتطوير قبل الاستيفاء", "Research and pre-criteria development"),
            debit: text("مصروف بحث وتطوير", "Research and development expense"),
            credit: text("نقدية/دائنون", "Cash/payables"),
            amount: text("3.1 مليون", "$3.1m"),
          },
          {
            label: text("التطوير بعد استيفاء الشروط", "Post-criteria development"),
            debit: text("أصل تكاليف تطوير", "Development cost asset"),
            credit: text("نقدية/دائنون", "Cash/payables"),
            amount: text("1.5 مليون", "$1.5m"),
          },
          {
            label: text("استهلاك الأصل القائم", "Existing asset amortisation"),
            debit: text("مصروف استهلاك", "Amortisation expense"),
            credit: text("مجمع الاستهلاك", "Accumulated amortisation"),
            amount: text("2.5 مليون", "$2.5m"),
          },
        ],
        reference: "IAS 38.54–67, 71, 97",
      },
    ],
  },
  "IAS 40": {
    sections: [
      {
        title: text("التصنيف بحسب الغرض الاقتصادي", "Classification by economic purpose"),
        explanation: text(
          "العقار الاستثماري أرض أو مبنى، أو جزء منهما، يحتفظ به المالك أو المستأجر كأصل حق استخدام لكسب الإيجار أو الزيادة الرأسمالية أو كليهما. التصنيف تحكمه طريقة استخدام العقار لا شكله القانوني: عقار يستخدم في الإنتاج أو الإدارة يقع عادة ضمن IAS 16، وعقار مطور للبيع في النشاط المعتاد ضمن IAS 2.",
          "Investment property is land or a building, or part of either, held by an owner or by a lessee as a right-of-use asset to earn rentals, for capital appreciation, or both. Classification follows economic use rather than legal form: property used in production or administration normally falls under IAS 16, while property developed for ordinary-course sale falls under IAS 2.",
        ),
        keyPoints: [
          text(
            "تشمل الفئة العقار الشاغر المحتفظ به للتأجير والعقار الجاري تطويره ليصبح استثماريًا.",
            "The category includes vacant property held for rental and property being developed for future investment use.",
          ),
          text(
            "إذا أمكن بيع الأجزاء أو تأجيرها تمويليًا بصورة منفصلة، يحاسب عن كل جزء وفق استخدامه.",
            "If portions can be sold or finance-leased separately, account for each portion according to its use.",
          ),
          text(
            "إذا تعذر الفصل وكان الجزء المستخدم ذاتيًا غير مهم، قد يصنف العقار كله استثماريًا.",
            "If portions cannot be separated and the owner-occupied portion is insignificant, the whole property may qualify as investment property.",
          ),
        ],
        reference: "IAS 40.5–15",
      },
      {
        title: text("القيمة العادلة أم التكلفة؟", "Fair value or cost?"),
        explanation: text(
          "يقاس العقار الاستثماري أولًا بالتكلفة بما فيها تكاليف المعاملة. بعد ذلك تختار المنشأة عادة نموذج القيمة العادلة أو نموذج التكلفة لجميع عقاراتها الاستثمارية. في نموذج القيمة العادلة يثبت التغير مباشرة في الربح أو الخسارة؛ وفي نموذج التكلفة يطبق القياس المناسب وفق IAS 16 أو IFRS 16 مع الإفصاح عن القيمة العادلة.",
          "Investment property is initially measured at cost including transaction costs. The entity then generally selects either the fair value model or the cost model for all investment property. Under fair value, changes go directly to profit or loss. Under cost, subsequent measurement follows IAS 16 or IFRS 16 as applicable, while fair value is disclosed.",
        ),
        keyPoints: [
          text(
            "مكاسب القيمة العادلة لا تمر عبر الدخل الشامل الآخر أو فائض إعادة التقييم.",
            "Fair value gains do not pass through OCI or a revaluation surplus.",
          ),
          text(
            "تعكس القيمة العادلة ظروف السوق في تاريخ التقرير وفق IFRS 13.",
            "Fair value reflects market conditions at the reporting date under IFRS 13.",
          ),
          text(
            "عدم القدرة على القياس الموثوق استثناء محدود ولا يبرر الانتقاء بين العقارات.",
            "Inability to measure reliably is a narrow exception and does not permit cherry-picking among properties.",
          ),
        ],
        reference: "IAS 40.20–32A, 33–56, 79; IFRS 13",
      },
      {
        title: text("التحويلات لا تحدث إلا بتغير الاستخدام", "Transfers require a change in use"),
        explanation: text(
          "لا يكفي تغير نية الإدارة وحده للتحويل من أو إلى العقار الاستثماري؛ يلزم دليل على تغير الاستخدام. عند التحويل من عقار استثماري بالقيمة العادلة إلى إشغال ذاتي أو مخزون تصبح القيمة العادلة يوم التغيير هي التكلفة المفترضة. وعند التحويل من إشغال ذاتي إلى نموذج القيمة العادلة يطبق IAS 16 حتى تاريخ التغيير ثم تعالج الفروق كإعادة تقييم قبل الانتقال.",
          "A change in management intention alone is insufficient for a transfer to or from investment property; evidence of changed use is required. For a transfer from fair-value investment property to owner occupation or inventory, fair value at the date of change becomes deemed cost. For owner-occupied property moving to the fair value model, IAS 16 applies up to the change date and the difference is treated as a revaluation before transfer.",
        ),
        keyPoints: [
          text(
            "ابدأ الإشغال الذاتي أو التطوير للبيع من أمثلة دليل تغير الاستخدام.",
            "Commencement of owner occupation or development for sale are examples of evidence of changed use.",
          ),
          text(
            "إعادة تصنيف الاسم في السجل لا تكفي من دون تغير فعلي يمكن إثباته.",
            "Relabelling the asset in a register is not enough without a demonstrable actual change.",
          ),
        ],
        reference: "IAS 40.57–65",
      },
    ],
    workedExamples: [
      {
        title: text("مبنى من خمسة طوابق متعدد الاستخدام", "A five-storey mixed-use building"),
        facts: text(
          "حصلت Spruce Co على مبنى من خمسة طوابق، وكل طابق مساحة مكتبية مستقلة كان يمكن الحصول عليها منفردة. تستخدم الشركة طابقًا للمبيعات والتسويق، وتؤجر الطوابق الأربعة الأخرى للغير.",
          "Spruce Co obtains a five-storey building. Each floor is self-contained office space that could have been obtained separately. The company uses one floor for sales and marketing and rents the other four to third parties.",
        ),
        calculations: [
          text(
            "الجزء المشغول ذاتيًا = طابق واحد من خمسة = 20% إذا كانت الطوابق متكافئة في أساس التخصيص.",
            "Owner-occupied portion = one floor out of five = 20% if the floors are equivalent for allocation purposes.",
          ),
          text(
            "الجزء المؤجر = أربعة طوابق من خمسة = 80% على الأساس نفسه.",
            "Rented portion = four floors out of five = 80% on the same basis.",
          ),
          text(
            "يفصل القياس: الجزء الأول وفق IAS 16، والجزء الثاني وفق IAS 40؛ ويستخدم أساس تخصيص معقول إذا اختلفت قيم الطوابق.",
            "Split the measurement: the first portion follows IAS 16 and the second IAS 40; use a reasonable allocation basis if floor values differ.",
          ),
        ],
        conclusion: text(
          "قابلية الفصل تمنع تصنيف المبنى كله تصنيفًا واحدًا؛ يحاسب عن كل جزء بحسب استخدامه الفعلي.",
          "Because the portions are separable, the whole building is not forced into one classification; each portion follows its actual use.",
        ),
        journalEntries: [
          {
            label: text("إثبات مبسط عند الاعتراف الأولي", "Simplified initial recognition"),
            debit: text("عقار وآلات ومعدات — الجزء المشغول", "PPE — occupied portion"),
            credit: text("النقدية/الالتزام", "Cash/liability"),
            amount: text("20% من المبلغ المخصص", "20% of allocated amount"),
          },
          {
            label: text("الجزء المؤجر", "Rented portion"),
            debit: text("عقار استثماري", "Investment property"),
            credit: text("النقدية/الالتزام", "Cash/liability"),
            amount: text("80% من المبلغ المخصص", "80% of allocated amount"),
          },
        ],
        reference: "IAS 40.5–15, 20–29; IFRS 16.23–24",
      },
    ],
  },
  "IAS 23": {
    sections: [
      {
        title: text("ما الذي يرسمل ولماذا؟", "What is capitalised and why?"),
        explanation: text(
          "تكاليف الاقتراض المنسوبة مباشرة إلى اقتناء أصل مؤهل أو إنشائه أو إنتاجه تدخل في تكلفة الأصل؛ وما عداها يثبت مصروفًا. الأصل المؤهل هو الذي يحتاج بالضرورة إلى فترة زمنية جوهرية ليصبح جاهزًا للاستخدام المقصود أو البيع، وقد يكون مصنعًا أو عقارًا استثماريًا قيد الإنشاء أو مخزونًا يستغرق إنتاجه مدة طويلة.",
          "Borrowing costs directly attributable to acquiring, constructing or producing a qualifying asset form part of that asset's cost; other borrowing costs are expensed. A qualifying asset necessarily takes a substantial period to become ready for intended use or sale and may include a plant, investment property under construction or long-cycle inventory.",
        ),
        keyPoints: [
          text(
            "الأصل الجاهز عند اقتنائه ليس أصلًا مؤهلًا لمجرد تمويله بقرض.",
            "An asset ready for use when acquired is not qualifying merely because debt financed it.",
          ),
          text(
            "قد تشمل تكاليف الاقتراض فائدة الالتزامات الإيجارية وفروق صرف تعد تعديلًا للفائدة.",
            "Borrowing costs may include lease-liability interest and exchange differences treated as interest adjustments.",
          ),
          text(
            "تقيد الرسملة بالمبلغ الذي كان يمكن تجنبه لولا الإنفاق على الأصل.",
            "Capitalisation is constrained to costs that would have been avoided without expenditure on the asset.",
          ),
        ],
        reference: "IAS 23.1–8",
      },
      {
        title: text("بداية الرسملة وتعليقها وإيقافها", "Commencement, suspension and cessation"),
        explanation: text(
          "تبدأ الرسملة فقط عندما تجتمع ثلاثة شروط: تحمل إنفاق على الأصل، وتحمل تكاليف اقتراض، ومباشرة الأنشطة اللازمة لإعداده. وتشمل الأنشطة العمل الفني والإداري السابق للبناء، لكنها لا تشمل الاحتفاظ بأرض بلا تطوير. تعلق الرسملة خلال فترات ممتدة تتوقف فيها أنشطة التطوير الفعلية، وتتوقف عند اكتمال معظم الأنشطة اللازمة أو عند اكتمال جزء صالح للاستخدام بصورة مستقلة.",
          "Capitalisation begins only when three conditions coincide: expenditure on the asset, borrowing costs, and activities necessary to prepare it. Those activities include technical and administrative work before physical construction, but not merely holding undeveloped land. Capitalisation is suspended during extended periods in which active development is interrupted and ceases when substantially all necessary activities are complete or when an independently usable part is completed.",
        ),
        keyPoints: [
          text(
            "التأخير الفني الطبيعي أو الإداري الضروري لا يؤدي تلقائيًا إلى التعليق.",
            "A normal technical delay or necessary administrative process does not automatically trigger suspension.",
          ),
          text(
            "توقف قصير لا يوصف بأنه فترة ممتدة يحتاج حكمًا موثقًا بدل تطبيق آلي.",
            "A short interruption not amounting to an extended period requires documented judgement rather than an automatic stop.",
          ),
        ],
        reference: "IAS 23.17–25",
      },
      {
        title: text("الاقتراض المحدد والاقتراض العام", "Specific and general borrowings"),
        explanation: text(
          "في القرض المخصص للمشروع يرسمل ما تحملته المنشأة فعليًا خلال الفترة ناقصًا دخل الاستثمار المؤقت للأموال. أما عند استخدام الاقتراض العام فتطبق نسبة رسملة هي المتوسط المرجح لتكاليف الاقتراض السارية على الإنفاق المؤهل، مع استبعاد القروض المخصصة لأصول أخرى حتى تصبح تلك الأصول جاهزة.",
          "For a project-specific loan, capitalise actual borrowing costs during the period less income from temporary investment of those funds. When general borrowings fund the asset, apply a capitalisation rate based on the weighted average borrowing costs applicable to qualifying expenditure, excluding borrowings specific to other assets until those assets are ready.",
        ),
        keyPoints: [
          text(
            "لا يتجاوز المبلغ المرسمل إجمالي تكاليف الاقتراض المتحملة خلال الفترة.",
            "The capitalised amount cannot exceed total borrowing costs incurred during the period.",
          ),
          text(
            "استخدم متوسط القيمة الدفترية للإنفاق عندما يقارب فترات تراكم الإنفاق.",
            "Use average carrying expenditure when it reasonably approximates accumulated expenditure periods.",
          ),
        ],
        reference: "IAS 23.10–16",
      },
    ],
    workedExamples: [
      {
        title: text("مخزن ممول من الاقتراض العام", "Warehouse funded from general borrowings"),
        facts: text(
          "لدى Hazlenut Co طوال 20X4 قرض مصرفي بمليون دولار وفائدة 5% وسندات قرض بثلاثة ملايين وفائدة 7%. في 1 أغسطس استخدمت 1.5 مليون من الاقتراض العام لإنشاء مخزن، وبدأ المعماريون التصميم في اليوم نفسه، ثم بدأ البناء في 1 سبتمبر. المطلوب حساب الرسملة حتى 30 نوفمبر 20X4.",
          "Throughout 20X4, Hazlenut Co has a $1m bank loan at 5% and $3m loan notes at 7%. On 1 August it uses $1.5m of general borrowings to construct a warehouse. Architects begin design that day and physical construction starts on 1 September. Capitalisation is required through 30 November 20X4.",
        ),
        calculations: [
          text(
            "نسبة الرسملة = (1÷4 × 5%) + (3÷4 × 7%) = 6.5%.",
            "Capitalisation rate = (1÷4 × 5%) + (3÷4 × 7%) = 6.5%.",
          ),
          text(
            "تبدأ الرسملة في أغسطس لأن أنشطة الإعداد بدأت بالتصميم، لا يلزم انتظار البناء الفعلي.",
            "Capitalisation starts in August because preparation began with design; physical construction need not have started.",
          ),
          text(
            "تكلفة الاقتراض المرسملة من أغسطس إلى نوفمبر = 1,500,000 × 6.5% × 4÷12 = 32,500.",
            "Borrowing cost capitalised from August through November = $1,500,000 × 6.5% × 4÷12 = $32,500.",
          ),
        ],
        conclusion: text(
          "يضاف 32,500 إلى تكلفة المخزن عن الفترة من أغسطس إلى نوفمبر، وهي أربعة أشهر وفق بيانات المثال.",
          "$32,500 is added to warehouse cost for the example's four-month capitalisation period.",
        ),
        journalEntries: [
          {
            label: text("رسملة الفائدة المؤهلة", "Capitalise eligible interest"),
            debit: text(
              "أصل مؤهل — مخزن تحت الإنشاء",
              "Qualifying asset — warehouse under construction",
            ),
            credit: text("فائدة مستحقة/نقدية", "Interest payable/cash"),
            amount: text("32,500", "$32,500"),
          },
        ],
        reference: "IAS 23.14, 17–19",
      },
    ],
  },
  "IAS 20": {
    sections: [
      {
        title: text("الاعتراف عند وجود تأكيد معقول", "Recognition on reasonable assurance"),
        explanation: text(
          "لا يعترف بالمنحة الحكومية لمجرد صدور الموافقة أو استلام النقد. يلزم تأكيد معقول بأن المنشأة ستلتزم بالشروط وأن المنحة ستُستلم. لا يعني ذلك ضمانًا مطلقًا، لكنه يتطلب أدلة عملية على القدرة والنية وسجل الامتثال. استلام النقد قبل تحقق معيار الاعتراف ينشئ عادة التزامًا إلى أن يتوافر الأساس المناسب.",
          "A government grant is not recognised merely because approval is issued or cash is received. There must be reasonable assurance that the entity will comply with conditions and the grant will be received. This is not absolute certainty, but it requires practical evidence of ability, intent and compliance. Cash received before recognition criteria are met will normally create a liability until an appropriate basis exists.",
        ),
        keyPoints: [
          text(
            "فرّق بين شرط يمنح الاستحقاق وبين إجراء إداري لا يخلق عدم تأكد جوهريًا.",
            "Distinguish entitlement conditions from administrative steps that do not create substantive uncertainty.",
          ),
          text(
            "لا يثبت الاستلام وحده أن جميع الشروط قد تحققت.",
            "Receipt alone does not prove that all conditions have been satisfied.",
          ),
          text(
            "تعالج المنحة واجبة السداد كتغير في تقدير محاسبي مع تطبيق قواعد السداد.",
            "A grant that becomes repayable is treated as a change in accounting estimate under the repayment requirements.",
          ),
        ],
        reference: "IAS 20.7–11, 32",
      },
      {
        title: text("المطابقة المنهجية والعرض", "Systematic matching and presentation"),
        explanation: text(
          "تعترف المنحة في الربح أو الخسارة بصورة منهجية خلال الفترات التي تثبت فيها التكاليف التي تهدف إلى تعويضها. منحة الأصل تعرض إما كدخل مؤجل يطلق على مدى العمر الإنتاجي، أو بخصمها من القيمة الدفترية للأصل. ومنحة الدخل تعرض كدخل منفصل أو تخصم من المصروف المرتبط، مع ثبات السياسة والإفصاح عنها.",
          "A grant is recognised in profit or loss on a systematic basis over the periods in which the related costs are recognised. An asset-related grant is presented either as deferred income released over the useful life or as a deduction from the asset's carrying amount. An income-related grant is shown separately or deducted from the related expense, with a consistent disclosed policy.",
        ),
        keyPoints: [
          text(
            "التوقيت تحكمه التكاليف المرتبطة لا موعد التحصيل.",
            "Timing follows the related costs rather than the collection date.",
          ),
          text(
            "المنحة لتعويض خسائر سابقة أو دعم فوري بلا تكاليف مستقبلية تثبت عند استحقاقها.",
            "A grant compensating past losses or giving immediate support with no future costs is recognised when receivable.",
          ),
          text(
            "أفصح عن السياسة وطبيعة المنح والشروط غير المستوفاة والالتزامات المحتملة.",
            "Disclose the policy, nature of grants, unfulfilled conditions and contingencies.",
          ),
        ],
        reference: "IAS 20.12–31, 39",
      },
      {
        title: text(
          "المنح غير النقدية والمساعدة الحكومية",
          "Non-monetary grants and government assistance",
        ),
        explanation: text(
          "قد تمنح الحكومة أرضًا أو موردًا غير نقدي؛ يسمح المعيار عادة بقياس الأصل والمنحة بالقيمة العادلة، كما يجيز أحيانًا إثباتهما بالقيمة الاسمية. أما المساعدة التي لا يمكن إعطاؤها قيمة معقولة، مثل بعض الاستشارات المجانية، فقد لا تولد قيدًا لكنها تتطلب إفصاحًا إذا كانت مهمة لفهم القوائم.",
          "Government may grant land or another non-monetary resource. The Standard commonly permits recognition of both asset and grant at fair value, while nominal amount is also permitted in some circumstances. Assistance that cannot reasonably be valued, such as some free advice, may create no entry but requires disclosure when significant to understanding the financial statements.",
        ),
        keyPoints: [
          text(
            "القروض القابلة للإعفاء تعامل كمنحة عند وجود تأكيد معقول باستيفاء شروط الإعفاء.",
            "A forgivable loan is treated as a grant when there is reasonable assurance that forgiveness conditions will be met.",
          ),
          text(
            "الفائدة الناتجة من قرض حكومي بأقل من سعر السوق تعالج مع تطبيق IFRS 9.",
            "The benefit of a below-market government loan is accounted for together with IFRS 9.",
          ),
        ],
        reference: "IAS 20.10A, 21–23, 34–39",
      },
    ],
    workedExamples: [
      {
        title: text("منحة أصل عمره عشر سنوات", "Grant for an asset with a ten-year life"),
        facts: text(
          "حصلت منشأة على منحة أصل قدرها مليون لاقتناء أصل عمره عشر سنوات، ويوجد تأكيد معقول باستمرار الالتزام بالشروط. اختارت سياسة الدخل المؤجل وافترض عدم وجود قيمة تخريدية.",
          "An entity receives a $1m asset-related grant for an asset with a ten-year life, with reasonable assurance of continued compliance. It selects the deferred-income presentation and assumes no residual value.",
        ),
        calculations: [
          text(
            "الإطلاق السنوي المنتظم = 1,000,000 ÷ 10 = 100,000.",
            "Annual systematic release = $1,000,000 ÷ 10 = $100,000.",
          ),
          text(
            "لا يثبت المليون كاملًا دخلًا يوم الاستلام لأن التكلفة المرتبطة تُستهلك على عشر سنوات.",
            "The full $1m is not income on receipt because the related cost is consumed over ten years.",
          ),
          text(
            "إذا اختير بديل صافي الأصل، يخفض الأصل بمليون وتظهر المنفعة عبر انخفاض الإهلاك بدل دخل منحة منفصل.",
            "Under the net-asset alternative, the asset is reduced by $1m and the benefit appears through lower depreciation rather than separate grant income.",
          ),
        ],
        conclusion: text(
          "في سياسة الدخل المؤجل يظهر التزام أولي ثم يثبت 100,000 دخل منحة سنويًا بالتوازي مع إهلاك الأصل.",
          "Under deferred income, an initial liability is recognised and $100,000 of grant income is released annually alongside asset depreciation.",
        ),
        journalEntries: [
          {
            label: text(
              "عند استلام المنحة واستيفاء الاعتراف",
              "On receipt when recognition criteria are met",
            ),
            debit: text("النقدية", "Cash"),
            credit: text("دخل منحة مؤجل", "Deferred grant income"),
            amount: text("1,000,000", "$1,000,000"),
          },
          {
            label: text("الإطلاق السنوي", "Annual release"),
            debit: text("دخل منحة مؤجل", "Deferred grant income"),
            credit: text("دخل منحة", "Grant income"),
            amount: text("100,000", "$100,000"),
          },
        ],
        reference: "IAS 20.7, 12, 24–28",
      },
    ],
  },
  "IAS 2": {
    sections: [
      {
        title: text("بناء التكلفة: ما يدخل وما يستبعد", "Building cost: inclusions and exclusions"),
        explanation: text(
          "تشمل تكلفة المخزون تكلفة الشراء بعد الخصومات، وتكاليف التحويل، وأي تكلفة أخرى لازمة لإحضاره إلى موقعه وحالته الحاليين. توزع التكاليف الصناعية الثابتة على أساس الطاقة العادية، بينما توزع المتغيرة على أساس الاستخدام الفعلي. أما الفاقد غير الطبيعي والتخزين غير الضروري والبيع والإدارة غير المرتبطة بالإنتاج فتثبت مصروفًا.",
          "Inventory cost includes purchase cost net of discounts, conversion costs and other costs necessary to bring inventory to its present location and condition. Fixed production overhead is allocated using normal capacity, while variable overhead follows actual use. Abnormal waste, unnecessary storage, selling and unrelated administration are expensed.",
        ),
        keyPoints: [
          text(
            "انخفاض الإنتاج لا يرفع نصيب الوحدة من التكاليف الثابتة؛ الجزء غير الموزع مصروف فترة.",
            "Low production does not inflate fixed overhead per unit; unallocated overhead is a period expense.",
          ),
          text(
            "قد تدخل تكلفة الاقتراض فقط إذا كان المخزون أصلًا مؤهلًا وفق IAS 23.",
            "Borrowing costs enter inventory only when it is a qualifying asset under IAS 23.",
          ),
          text(
            "تكاليف الوفاء بعقد العميل التي لا تنشئ مخزونًا قد تخضع لـIFRS 15 بدل IAS 2.",
            "Customer-contract fulfilment costs that do not create inventory may fall under IFRS 15 instead of IAS 2.",
          ),
        ],
        reference: "IAS 2.10–22; IAS 23.7",
      },
      {
        title: text("صيغ التكلفة واتساق التطبيق", "Cost formulas and consistent application"),
        explanation: text(
          "تستخدم التكلفة المحددة للأصناف غير القابلة للتبادل أو المخصصة لمشروعات محددة. وللأصناف القابلة للتبادل تستخدم FIFO أو المتوسط المرجح؛ ولا يسمح LIFO. تطبق الصيغة نفسها على المخزونات المتشابهة في طبيعتها واستخدامها، ويمكن اختلاف الصيغة عندما تختلف الطبيعة أو الاستخدام فعلًا لا لمجرد اختلاف الموقع الجغرافي.",
          "Specific identification is used for non-interchangeable items or goods allocated to specific projects. Interchangeable items use FIFO or weighted average; LIFO is prohibited. Apply the same formula to inventories with similar nature and use, and use a different formula only when nature or use truly differs, not merely because of geography.",
        ),
        keyPoints: [
          text(
            "يجوز استخدام التكلفة المعيارية أو طريقة التجزئة إذا كانت النتيجة تقارب التكلفة الفعلية.",
            "Standard cost or the retail method may be used when the result approximates actual cost.",
          ),
          text(
            "يحدث المتوسط المرجح دوريًا أو مع كل شحنة بحسب نظام المنشأة.",
            "Weighted average may be updated periodically or upon each delivery, depending on the system.",
          ),
        ],
        reference: "IAS 2.21–27",
      },
      {
        title: text("اختبار صافي القيمة القابلة للتحقق والعكس", "NRV testing and reversal"),
        explanation: text(
          "في كل تاريخ تقرير يقارن المخزون، عادة صنفًا بصنف، بين التكلفة وصافي القيمة القابلة للتحقق: سعر البيع المقدر ناقص تكاليف الإكمال والبيع الضرورية. يثبت الانخفاض فورًا مصروفًا. إذا زالت أسبابه في فترة لاحقة يعكس في حدود الانخفاض الأصلي، فيصبح القياس الجديد الأقل من التكلفة وصافي القيمة القابلة للتحقق المعدل.",
          "At each reporting date, inventory—normally item by item—is compared between cost and net realisable value: estimated selling price less necessary completion and selling costs. A write-down is expensed immediately. If the reasons reverse later, reverse only up to the original write-down, producing the new lower of cost and revised NRV.",
        ),
        keyPoints: [
          text(
            "صافي القيمة القابلة للتحقق قيمة خاصة بالمنشأة وليست هي القيمة العادلة ناقص تكاليف البيع.",
            "NRV is entity-specific and is not the same as fair value less costs to sell.",
          ),
          text(
            "لا تخفض المواد الخام دون التكلفة إذا كان المنتج النهائي المتوقع سيباع بالتكلفة أو أعلى.",
            "Raw materials are not written below cost when the finished goods are expected to sell at or above cost.",
          ),
          text(
            "عند بيع المخزون تصبح قيمته الدفترية مصروفًا في الفترة التي يثبت فيها الإيراد المرتبط.",
            "When inventory is sold, its carrying amount is expensed in the period of related revenue.",
          ),
        ],
        reference: "IAS 2.6–9, 28–35",
      },
    ],
    workedExamples: [
      {
        title: text(
          "انخفاض مخزون إلى صافي القيمة القابلة للتحقق",
          "Inventory write-down to net realisable value",
        ),
        facts: text(
          "تكلفة وحدة مخزون 120. سعر بيعها المتوقع 135، وتحتاج إلى 12 لإكمالها و8 لإتمام البيع.",
          "An inventory item costs $120. Its expected selling price is $135, with $12 needed for completion and $8 needed to make the sale.",
        ),
        calculations: [
          text("صافي القيمة القابلة للتحقق = 135 − 12 − 8 = 115.", "NRV = $135 − $12 − $8 = $115."),
          text(
            "القياس هو الأقل من التكلفة 120 وNRV البالغ 115، إذن القيمة الدفترية 115.",
            "Measurement is the lower of $120 cost and $115 NRV, so carrying amount is $115.",
          ),
          text("خسارة الانخفاض = 120 − 115 = 5.", "Write-down loss = $120 − $115 = $5."),
        ],
        conclusion: text(
          "يثبت انخفاض قدره 5 في الربح أو الخسارة؛ ولا تستبدل NRV بالقيمة العادلة السوقية.",
          "Recognise a $5 write-down in profit or loss; do not substitute market fair value for NRV.",
        ),
        journalEntries: [
          {
            label: text("إثبات الانخفاض", "Record the write-down"),
            debit: text("مصروف انخفاض مخزون", "Inventory write-down expense"),
            credit: text("مخصص انخفاض/المخزون", "Allowance/inventory"),
            amount: text("5", "$5"),
          },
        ],
        reference: "IAS 2.28–34",
      },
    ],
  },
  "IFRS 5": {
    sections: [
      {
        title: text("بوابة التصنيف كمحتفظ به للبيع", "The held-for-sale classification gateway"),
        explanation: text(
          "ينتقل الأصل غير المتداول أو مجموعة الاستبعاد إلى فئة المحتفظ به للبيع عندما تسترد قيمته أساسًا من البيع لا من الاستخدام المستمر. يلزم أن يكون متاحًا للبيع الفوري بحالته الحالية وأن يكون البيع عالي الاحتمال: اعتماد الإدارة المختصة للخطة، بدء برنامج فعلي للبحث عن مشترٍ، تسويق بسعر معقول، توقع الإتمام عادة خلال سنة، وعدم احتمال تغيير الخطة أو سحبها جوهريًا.",
          "A non-current asset or disposal group enters the held-for-sale category when its carrying amount will be recovered principally through sale rather than continuing use. It must be available for immediate sale in its present condition and the sale must be highly probable, supported by appropriate management commitment, an active buyer search, reasonable pricing, expected completion normally within one year, and an unlikely significant change or withdrawal.",
        ),
        keyPoints: [
          text(
            "نية البيع وحدها لا تكفي دون الجاهزية وبرنامج البيع الفعلي.",
            "An intention to sell is insufficient without readiness and an active sale programme.",
          ),
          text(
            "تمتد مهلة السنة فقط في ظروف محددة يكون التأخير فيها خارج سيطرة المنشأة مع استمرار التزامها بالخطة.",
            "The one-year period is extended only in specified circumstances beyond the entity's control while commitment continues.",
          ),
          text(
            "توجد فئة محتفظ به للتوزيع على الملاك بشروط مماثلة عندما يكون التوزيع عالي الاحتمال.",
            "A held-for-distribution category applies under similar conditions when distribution to owners is highly probable.",
          ),
        ],
        reference: "IFRS 5.6–12A, Appendix B",
      },
      {
        title: text("القياس وإيقاف الإهلاك", "Measurement and cessation of depreciation"),
        explanation: text(
          "قبل التصنيف يعاد قياس الأصل وفق معياره الأصلي. ثم يقاس عند التصنيف وفي كل تاريخ لاحق بالأقل من القيمة الدفترية والقيمة العادلة ناقص تكاليف البيع أو التوزيع. يثبت الانخفاض في الربح أو الخسارة، ويتوقف الإهلاك لأن الاسترداد أصبح بالبيع. يجوز عكس انخفاض لاحق في حدود خسائر الانخفاض التراكمية المعترف بها وفق IFRS 5 أو سابقًا وفق IAS 36.",
          "Immediately before classification, the asset is remeasured under its original Standard. It is then measured at classification and subsequently at the lower of carrying amount and fair value less costs to sell or distribute. Any write-down is recognised in profit or loss and depreciation ceases because recovery is through sale. A later gain is limited to cumulative impairment losses recognised under IFRS 5 or previously under IAS 36.",
        ),
        keyPoints: [
          text(
            "لا تستخدم القيمة العادلة وحدها؛ المقارنة مع القيمة الدفترية إلزامية.",
            "Fair value alone is not used; comparison with carrying amount is mandatory.",
          ),
          text(
            "بعض الأصول داخل مجموعة الاستبعاد تظل تقاس وفق معاييرها الخاصة قبل تطبيق قياس المجموعة.",
            "Some assets in a disposal group continue to be measured under their own Standards before group measurement.",
          ),
          text(
            "تكاليف البيع هي التكاليف الإضافية المباشرة، ولا تشمل التمويل أو ضريبة الدخل.",
            "Costs to sell are direct incremental costs and exclude finance costs and income tax.",
          ),
        ],
        reference: "IFRS 5.15–25",
      },
      {
        title: text(
          "مجموعة الاستبعاد والعملية غير المستمرة",
          "Disposal groups and discontinued operations",
        ),
        explanation: text(
          "مجموعة الاستبعاد قد تجمع أصولًا والتزامات سيجري التخلص منها في معاملة واحدة. تعرض أصولها والتزاماتها بصورة منفصلة دون مقاصة. أما العملية غير المستمرة فهي مكون تم التخلص منه أو صنف محتفظًا به للبيع ويمثل خط أعمال رئيسيًا منفصلًا أو منطقة جغرافية رئيسية، أو يدخل في خطة منسقة للتخلص منها، أو هو شركة تابعة مشتراة حصريًا لإعادة البيع.",
          "A disposal group may contain assets and associated liabilities to be disposed of in one transaction. Its assets and liabilities are presented separately without offsetting. A discontinued operation is a disposed-of or held-for-sale component representing a separate major line of business or geography, forming part of a single coordinated disposal plan, or being a subsidiary acquired exclusively for resale.",
        ),
        keyPoints: [
          text(
            "ليس كل أصل محتفظ به للبيع عملية غير مستمرة؛ يلزم حجم وأهمية استراتيجية للمكون.",
            "Not every held-for-sale asset is a discontinued operation; the component must have strategic scale and significance.",
          ),
          text(
            "يعرض صافي نتيجة العملية غير المستمرة ومكسب أو خسارة القياس أو البيع كمبلغ منفصل.",
            "The post-tax result and measurement or disposal gain or loss are shown as a separate amount.",
          ),
          text(
            "توزع خسارة مجموعة الاستبعاد أولًا على الشهرة ثم على الأصول غير المتداولة الخاضعة للقياس.",
            "A disposal-group impairment is allocated first to goodwill and then to relevant non-current assets.",
          ),
        ],
        reference: "IFRS 5.28–42, Appendix A; IAS 36.104",
      },
    ],
    workedExamples: [
      {
        title: text("تصنيف آلة وقياسها عند البيع", "Classifying and measuring a machine for sale"),
        facts: text(
          "في تاريخ استيفاء شروط البيع كانت القيمة الدفترية لآلة 10 ملايين، وقيمتها العادلة 9.4 ملايين، وتكاليف البيع المباشرة المقدرة 0.4 مليون.",
          "When the sale criteria are met, a machine has a $10m carrying amount, $9.4m fair value and $0.4m estimated direct costs to sell.",
        ),
        calculations: [
          text(
            "القيمة العادلة ناقص تكاليف البيع = 9.4 − 0.4 = 9 ملايين.",
            "Fair value less costs to sell = $9.4m − $0.4m = $9m.",
          ),
          text(
            "القياس الجديد = الأقل من 10 و9 = 9 ملايين.",
            "New measurement = lower of $10m and $9m = $9m.",
          ),
          text(
            "خسارة الانخفاض = مليون واحد، ثم يتوقف الإهلاك من تاريخ التصنيف.",
            "Impairment loss = $1m, and depreciation stops from classification.",
          ),
        ],
        conclusion: text(
          "يعرض الأصل منفصلًا كمحتفظ به للبيع بقيمة 9 ملايين ويثبت الانخفاض في الربح أو الخسارة.",
          "Present the asset separately as held for sale at $9m and recognise the write-down in profit or loss.",
        ),
        journalEntries: [
          {
            label: text("إثبات انخفاض التصنيف", "Record classification write-down"),
            debit: text("خسارة انخفاض", "Impairment loss"),
            credit: text("الأصل/مخصص الانخفاض", "Asset/impairment allowance"),
            amount: text("1,000,000", "$1,000,000"),
          },
        ],
        reference: "IFRS 5.15, 20, 25, 38",
      },
    ],
  },
  "IFRS 13": {
    sections: [
      {
        title: text(
          "سعر خروج من منظور المشاركين في السوق",
          "An exit price from a market-participant perspective",
        ),
        explanation: text(
          "IFRS 13 لا يقرر متى تستخدم القيمة العادلة؛ بل يحدد كيفية قياسها عندما يطلبها أو يسمح بها معيار آخر. القياس هو سعر بيع الأصل أو نقل الالتزام في معاملة منظمة بين مشاركين في السوق في تاريخ القياس. لذلك لا تتحكم نية المنشأة في الاحتفاظ بالأصل أو تسوية الالتزام، وتدخل خصائص الأصل أو الالتزام التي يأخذها المشاركون في السوق في التسعير.",
          "IFRS 13 does not decide when fair value is used; it explains how to measure it when another Standard requires or permits it. Fair value is the price to sell an asset or transfer a liability in an orderly transaction between market participants at the measurement date. The entity's intention to hold or settle is therefore irrelevant, while characteristics that market participants price are relevant.",
        ),
        keyPoints: [
          text(
            "المعاملة المفترضة منظمة وليست بيعًا قسريًا أو تصفية اضطرارية.",
            "The assumed transaction is orderly, not a forced sale or distress liquidation.",
          ),
          text(
            "تقاس الالتزامات على أساس النقل مع افتراض بقائها قائمة، لا السداد الفوري.",
            "Liabilities are measured on a transfer basis assuming they remain outstanding, not immediate settlement.",
          ),
          text(
            "يدخل خطر عدم الأداء، بما فيه خطر الائتمان الذاتي، في قياس الالتزام.",
            "Non-performance risk, including own credit risk, enters liability measurement.",
          ),
        ],
        reference: "IFRS 13.1–4, 9–14, 34–43",
      },
      {
        title: text("السوق الرئيسي وأفضل استخدام", "Principal market and highest and best use"),
        explanation: text(
          "يفترض القياس السوق الرئيسي الذي يملك أكبر حجم ونشاط ويمكن للمنشأة الوصول إليه؛ وعند غيابه يستخدم السوق الأكثر منفعة. تكاليف المعاملة تساعد في تحديد السوق الأكثر منفعة لكنها لا تخصم من القيمة العادلة، بينما تخصم تكاليف النقل إذا كان الموقع خاصية للأصل. وللأصل غير المالي يستخدم أفضل وأعلى استخدام يكون ممكنًا فعليًا ومسموحًا قانونًا ومجديًا ماليًا.",
          "Measurement assumes the accessible principal market with the greatest volume and activity; if none exists, it uses the most advantageous market. Transaction costs help identify that market but are not deducted from fair value, while transport costs are deducted when location is an asset characteristic. A non-financial asset uses its physically possible, legally permissible and financially feasible highest and best use.",
        ),
        keyPoints: [
          text(
            "لا تنتقل المنشأة إلى سوق أقل نشاطًا لمجرد أن صافي المتحصل فيه أعلى.",
            "An entity does not switch from the principal market merely because another market gives higher net proceeds.",
          ),
          text(
            "يفترض أن الاستخدام الحالي هو الأفضل والأعلى ما لم تدل عوامل السوق على بديل أعلى قيمة.",
            "Current use is presumed highest and best unless market evidence supports a higher-value alternative.",
          ),
        ],
        reference: "IFRS 13.15–33",
      },
      {
        title: text("أساليب التقييم وتسلسل المدخلات", "Valuation techniques and input hierarchy"),
        explanation: text(
          "تستخدم المنشأة منهج السوق أو التكلفة أو الدخل، منفردًا أو مجتمعًا، بما يزيد استخدام المدخلات القابلة للملاحظة ويقلل غير القابلة للملاحظة. المستوى الأول أسعار معلنة غير معدلة لأصول أو التزامات مطابقة في أسواق نشطة؛ المستوى الثاني مدخلات قابلة للملاحظة أخرى؛ والمستوى الثالث مدخلات غير قابلة للملاحظة. مستوى القياس كله تحدده أدنى مدخلة جوهرية للقياس.",
          "An entity uses market, cost or income approaches, alone or in combination, maximising observable inputs and minimising unobservable ones. Level 1 is unadjusted quoted prices for identical items in active markets; Level 2 comprises other observable inputs; Level 3 comprises unobservable inputs. The entire measurement is classified by the lowest-level significant input.",
        ),
        keyPoints: [
          text(
            "لا يصبح القياس مستوى أول إذا عُدّل السعر المعلن تعديلًا جوهريًا.",
            "A quoted price does not remain Level 1 after a significant adjustment.",
          ),
          text(
            "التغيير في أسلوب التقييم يعامل كتغير في تقدير إذا كان أكثر تمثيلًا للقيمة العادلة.",
            "A valuation-technique change is treated as an estimate change when it better represents fair value.",
          ),
          text(
            "تتطلب قياسات المستوى الثالث مصالحة وحساسية وإفصاحات نوعية وكمية أعمق.",
            "Level 3 measurements require deeper reconciliation, sensitivity and qualitative and quantitative disclosures.",
          ),
        ],
        reference: "IFRS 13.61–90, 91–99",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تحديد السوق الأكثر منفعة وسعر القيمة العادلة",
          "Selecting the most advantageous market and fair value price",
        ),
        facts: text(
          "يباع منتج في الصين بسعر 40 وتكاليف معاملة 1 ونقل 8، وفي فرنسا بسعر 38 وتكاليف معاملة 3 ونقل 5. لا يوجد سوق رئيسي.",
          "A product sells in China for $40 with $1 transaction cost and $8 transport, and in France for $38 with $3 transaction cost and $5 transport. No principal market exists.",
        ),
        calculations: [
          text(
            "صافي الصين لتحديد السوق = 40 − 1 − 8 = 31.",
            "China net amount for market selection = $40 − $1 − $8 = $31.",
          ),
          text(
            "صافي فرنسا لتحديد السوق = 38 − 3 − 5 = 30؛ إذن الصين الأكثر منفعة.",
            "France net amount for market selection = $38 − $3 − $5 = $30; China is most advantageous.",
          ),
          text(
            "القيمة العادلة = 40 − 8 نقل = 32؛ لا تخصم تكلفة المعاملة 1 من القياس.",
            "Fair value = $40 − $8 transport = $32; the $1 transaction cost is not deducted from the measurement.",
          ),
        ],
        conclusion: text(
          "تستخدم تكاليف المعاملة لاختيار السوق فقط، بينما تدخل تكلفة النقل لأن الموقع خاصية للأصل.",
          "Transaction costs select the market only; transport enters the measure because location is an asset characteristic.",
        ),
        journalEntries: [],
        reference: "IFRS 13.15–26",
      },
    ],
  },
  "IAS 32": {
    sections: [
      {
        title: text(
          "الجوهر التعاقدي: التزام أم حقوق ملكية؟",
          "Contractual substance: liability or equity?",
        ),
        explanation: text(
          "التصنيف يتبع جوهر الشروط التعاقدية لا الاسم القانوني للأداة. يوجد التزام مالي عندما تتعهد المنشأة بتسليم نقد أو أصل مالي، أو بالمبادلة بشروط قد تكون غير مواتية. أما أداة حقوق الملكية فتثبت مصلحة متبقية بعد خصم الالتزامات ولا تتضمن التزامًا تعاقديًا بالدفع. لذلك قد تكون أسهم ممتازة قابلة للاسترداد التزامًا رغم تسميتها أسهمًا.",
          "Classification follows contractual substance rather than the legal label. A financial liability exists when the entity is obliged to deliver cash or another financial asset, or exchange instruments on potentially unfavourable terms. Equity evidences a residual interest after liabilities and contains no contractual payment obligation. Redeemable preference shares may therefore be liabilities despite being called shares.",
        ),
        keyPoints: [
          text(
            "تطبق قاعدة مبلغ ثابت مقابل عدد ثابت من الأسهم على تسويات أدوات حقوق الملكية الذاتية.",
            "The fixed-for-fixed rule applies to settlement in the entity's own equity instruments.",
          ),
          text(
            "الأرباح الموزعة على أداة مصنفة التزامًا تعرض تكلفة تمويل لا توزيع حقوق ملكية.",
            "Returns on an instrument classified as a liability are finance costs, not equity distributions.",
          ),
          text(
            "يعاد تقييم التصنيف فقط إذا تغير جوهر الشروط التعاقدية، لا بسبب تغير توقعات الإدارة.",
            "Classification is reconsidered when contractual substance changes, not merely management expectations.",
          ),
        ],
        reference: "IAS 32.11, 15–27",
      },
      {
        title: text("فصل الأداة المركبة", "Splitting a compound instrument"),
        explanation: text(
          "عندما يجمع السند القابل للتحويل التزامًا تعاقديًا بالدفع وخيار تحويل مؤهلًا إلى حقوق ملكية، يفصل المكونان عند الاعتراف الأولي. تقاس المسؤولية أولًا بالقيمة الحالية للتدفقات النقدية المخصومة بسعر أداة دين مماثلة بلا تحويل، ويكون الفرق بين المتحصلات وقيمة الالتزام مكون حقوق الملكية. لا يعاد قياس مكون حقوق الملكية لاحقًا.",
          "When a convertible bond combines a contractual payment obligation with a qualifying equity conversion option, the components are separated at initial recognition. First measure the liability as the present value of cash flows discounted at the rate for comparable debt without conversion; the residual between proceeds and liability is equity. The equity component is not subsequently remeasured.",
        ),
        keyPoints: [
          text(
            "تستخدم طريقة المتبقي: الالتزام أولًا ثم حقوق الملكية، وليس العكس.",
            "Use the residual method: liability first, then equity, not the reverse.",
          ),
          text(
            "تحتسب تكلفة التمويل اللاحقة بسعر الفائدة الفعلي، وقد تزيد القيمة الدفترية للالتزام.",
            "Subsequent finance cost uses the effective interest rate and may increase the liability carrying amount.",
          ),
        ],
        reference: "IAS 32.28–32, AG30–AG35; IFRS 9.5.4.1",
      },
      {
        title: text("المقاصة وأسهم الخزينة", "Offsetting and treasury shares"),
        explanation: text(
          "لا تقاص الأصول والالتزامات المالية إلا إذا كان هناك حق قانوني واجب النفاذ حاليًا للمقاصة، وتنوي المنشأة التسوية على أساس الصافي أو تحقيق الأصل وتسوية الالتزام في الوقت نفسه. أما شراء أسهم المنشأة لنفسها فيخصم من حقوق الملكية ولا ينشأ عنه مكسب أو خسارة في الربح أو الخسارة عند الشراء أو البيع أو الإلغاء.",
          "Financial assets and liabilities are offset only when a currently enforceable legal right exists and the entity intends net settlement or simultaneous realisation and settlement. An entity's own shares repurchased are deducted from equity, with no profit-or-loss gain or loss on purchase, sale, issue or cancellation.",
        ),
        keyPoints: [
          text(
            "اتفاقية المقاصة الرئيسية وحدها لا تكفي إذا لم يكن الحق نافذًا في المسار العادي للأعمال.",
            "A master netting agreement alone is insufficient if the right is not enforceable in the normal course.",
          ),
          text(
            "تكاليف معاملة حقوق الملكية المؤهلة تخصم من حقوق الملكية بعد الأثر الضريبي.",
            "Qualifying equity transaction costs are deducted from equity net of tax.",
          ),
        ],
        reference: "IAS 32.33–35, 42–50, AG38–AG39",
      },
    ],
    workedExamples: [
      {
        title: text(
          "سندات قابلة للتحويل: فصل الالتزام والخيار",
          "Convertible bonds: separating liability and option",
        ),
        facts: text(
          "أصدرت منشأة سندات قابلة للتحويل بمبلغ 500,000، كوبون سنوي 6%، تسترد بعد أربع سنوات. سعر دين مماثل بلا حق تحويل 7%، والقيمة الحالية للتدفقات التعاقدية 483,063.",
          "An entity issues $500,000 convertible bonds with a 6% annual coupon, redeemable after four years. Comparable debt without conversion yields 7%, and the present value of contractual cash flows is $483,063.",
        ),
        calculations: [
          text("مكون الالتزام عند الإصدار = 483,063.", "Liability component at issue = $483,063."),
          text(
            "مكون حقوق الملكية = 500,000 − 483,063 = 16,937.",
            "Equity component = $500,000 − $483,063 = $16,937.",
          ),
          text(
            "تكلفة التمويل للسنة الأولى = 483,063 × 7% = 33,814 تقريبًا؛ الكوبون النقدي = 30,000.",
            "First-year finance cost = $483,063 × 7% = about $33,814; cash coupon = $30,000.",
          ),
        ],
        conclusion: text(
          "يزداد الالتزام بنحو 3,814 في السنة الأولى، بينما يبقى مكون حقوق الملكية 16,937 دون إعادة قياس.",
          "The liability increases by about $3,814 in year one while the $16,937 equity component is not remeasured.",
        ),
        journalEntries: [
          {
            label: text("الإصدار", "Issue"),
            debit: text("النقدية", "Cash"),
            credit: text(
              "التزام مالي 483,063 + حقوق ملكية 16,937",
              "Financial liability $483,063 + equity $16,937",
            ),
            amount: text("500,000", "$500,000"),
          },
          {
            label: text(
              "تكلفة التمويل والكوبون للسنة الأولى",
              "First-year finance cost and coupon",
            ),
            debit: text("تكلفة تمويل", "Finance cost"),
            credit: text("نقدية 30,000 + التزام 3,814", "Cash $30,000 + liability $3,814"),
            amount: text("33,814 تقريبًا", "About $33,814"),
          },
        ],
        reference: "IAS 32.28–32; IFRS 9.5.4.1",
      },
    ],
  },
  "IFRS 7": {
    sections: [
      {
        title: text(
          "أهمية الأدوات المالية للمركز والأداء",
          "Significance of financial instruments for position and performance",
        ),
        explanation: text(
          "يفرض IFRS 7 إفصاحات تمكّن القارئ من فهم مدى تأثير الأدوات المالية في المركز المالي والأداء. تجمع الأدوات في فئات مناسبة لطبيعتها وخصائصها، وتربط الفئات ببنود القوائم. تشمل المعلومات القيم الدفترية وفئات القياس والدخل والمصروف والمكاسب والخسائر وسياسات المحاسبة والضمانات والتعثر وإعادة التصنيف والتحويلات.",
          "IFRS 7 requires disclosures enabling users to understand how financial instruments affect financial position and performance. Instruments are grouped into appropriate classes based on nature and characteristics and reconciled to statement line items. Information covers carrying amounts, measurement categories, income, expense, gains and losses, policies, collateral, defaults, reclassifications and transfers.",
        ),
        keyPoints: [
          text(
            "فئة الإفصاح أكثر تفصيلًا من فئة القياس إذا احتاجت المخاطر ذلك.",
            "A disclosure class may be more granular than a measurement category when risks require it.",
          ),
          text(
            "الإفصاح لا يعوض عرضًا أو قياسًا خاطئًا بموجب IFRS 9 أو IAS 32.",
            "Disclosure does not cure incorrect presentation or measurement under IFRS 9 or IAS 32.",
          ),
          text(
            "يجب أن تتوافق الإفصاحات النوعية مع الأرقام التي ترفع داخليًا للإدارة الرئيسية.",
            "Qualitative disclosures should align with information reported internally to key management.",
          ),
        ],
        reference: "IFRS 7.6–30",
      },
      {
        title: text("مخاطر الائتمان والسيولة والسوق", "Credit, liquidity and market risks"),
        explanation: text(
          "يشرح الكيان لكل نوع خطر تعرضه وكيف ينشأ وأهداف وسياسات وعمليات إدارة الخطر وطرق قياسه، ثم يقدم بيانات كمية تمثل التعرض في نهاية الفترة والتركيزات الجوهرية. تشمل مخاطر الائتمان ممارسات إدارة الائتمان ومخصص الخسائر المتوقعة، وتشمل السيولة تحليل آجال الالتزامات وإدارة التمويل، وتشمل السوق تحليلات حساسية للعملة والفائدة والأسعار الأخرى.",
          "For each risk type, the entity explains exposure and origin, risk-management objectives, policies, processes and measurement methods, then gives quantitative period-end exposure and significant concentrations. Credit-risk disclosure covers credit practices and expected-loss allowances; liquidity covers maturity analysis and funding management; market risk covers currency, interest and other-price sensitivity.",
        ),
        keyPoints: [
          text(
            "تحليل آجال السيولة يقوم على التدفقات التعاقدية غير المخصومة، مع شرح كيفية إدارة الاحتياج النقدي.",
            "Liquidity maturity analysis uses contractual undiscounted flows and explains how cash needs are managed.",
          ),
          text(
            "توضح مصالحة مخصص الخسائر المتوقعة انتقالات المراحل والأسباب التي غيرت الرصيد.",
            "The expected-loss allowance reconciliation explains stage movements and drivers of change.",
          ),
          text(
            "يجب الإفصاح عن التركيزات التي لا تظهر بوضوح من التحليلات الإجمالية.",
            "Concentrations not evident from aggregate analysis must be disclosed.",
          ),
        ],
        reference: "IFRS 7.31–42G, 35A–35N",
      },
      {
        title: text("متطلبات 2026 الجديدة", "New requirements effective in 2026"),
        explanation: text(
          "للفترات التي تبدأ في أو بعد 1 يناير 2026 توسعت الإفصاحات المرتبطة بالخصائص التعاقدية المشروطة التي قد تغير توقيت التدفقات أو مقدارها، والاستثمارات في أدوات حقوق الملكية المختارة للقيمة العادلة عبر الدخل الشامل الآخر. كما أضيفت إفصاحات لعقود الكهرباء المعتمدة على عوامل طبيعية لشرح شروطها والتزاماتها وآثارها في الأداء والتدفقات النقدية.",
          "For periods beginning on or after 1 January 2026, disclosures expand for contingent contractual features that may change the timing or amount of cash flows and for equity investments elected at FVOCI. Disclosures were also added for nature-dependent electricity contracts to explain terms, commitments and effects on performance and cash flows.",
        ),
        keyPoints: [
          text(
            "لا تعامل ملاحظات 2026 كمشروع مستقبلي؛ أصبحت نافذة في الفترة الحالية.",
            "Do not describe the 2026 notes as a future project; they are now effective.",
          ),
          text(
            "اربط الإفصاح عن الخصائص المشروطة بالحكم المستخدم في اختبار التدفقات التعاقدية وفق IFRS 9.",
            "Link contingent-feature disclosure to the IFRS 9 contractual-cash-flow judgement.",
          ),
          text(
            "عقود الكهرباء المعتمدة على الطبيعة تحتاج معلومات تمكن من فهم الأثر المالي وتقلب التدفقات.",
            "Nature-dependent electricity contracts require information explaining financial effects and cash-flow variability.",
          ),
        ],
        reference: "IFRS 7.11A–11B, 20B–20D, 30A–30C; IFRS 7 Appendix C",
      },
    ],
    workedExamples: [
      {
        title: text("حزمة إفصاح مخاطر ذمم العملاء", "Trade-receivable risk disclosure package"),
        facts: text(
          "لدى منشأة ذمم عملاء 12 مليونًا ومخصص خسائر متوقعة 0.6 مليون. تتركز 35% من الذمم لدى ثلاثة عملاء، ويتضمن رصيد المخصص انتقالات بسبب تدهور مخاطر قطاع واحد.",
          "An entity has $12m trade receivables and a $0.6m expected-loss allowance. Three customers represent 35% of receivables and allowance movements include deterioration in one sector.",
        ),
        calculations: [
          text(
            "صافي القيمة الدفترية = 12 − 0.6 = 11.4 مليون، لكن الإفصاح يشرح الإجمالي والمخصص كلًا على حدة.",
            "Net carrying amount = $12m − $0.6m = $11.4m, but disclosure explains gross exposure and allowance separately.",
          ),
          text(
            "تركيز كبار العملاء = 12 × 35% = 4.2 ملايين.",
            "Top-customer concentration = $12m × 35% = $4.2m.",
          ),
          text(
            "يلزم جدول مصالحة للمخصص مع شرح التدهور القطاعي وسياسة الضمان وحدود الائتمان.",
            "Provide an allowance reconciliation plus the sector deterioration, collateral policy and credit limits.",
          ),
        ],
        conclusion: text(
          "الرقم الصافي وحده لا يحقق هدف IFRS 7؛ يجب شرح حجم الخطر وتركيزه وكيف تغير المخصص وإدارته.",
          "The net number alone does not meet IFRS 7; explain exposure size, concentration, allowance movements and management.",
        ),
        journalEntries: [],
        reference: "IFRS 7.31–35N",
      },
    ],
  },
  "IFRS 9": {
    sections: [
      {
        title: text(
          "الاعتراف والتصنيف: نموذج الأعمال واختبار التدفقات",
          "Recognition and classification: business model and cash-flow test",
        ),
        explanation: text(
          "يعترف بالأداة عندما تصبح المنشأة طرفًا في أحكامها التعاقدية. يصنف أصل الدين بحسب نموذج إدارة المحفظة وخصائص التدفقات التعاقدية: تكلفة مستهلكة عند الاحتفاظ للتحصيل مع تدفقات تمثل أصل الدين والفائدة فقط، وقيمة عادلة عبر الدخل الشامل الآخر عند التحصيل والبيع مع اجتياز الاختبار نفسه، وقيمة عادلة عبر الربح أو الخسارة فيما عدا ذلك. الأسهم تقاس بالقيمة العادلة، مع اختيار غير قابل للإلغاء لبعض الاستثمارات غير المحتفظ بها للمتاجرة لعرض التغير في الدخل الشامل الآخر دون إعادة تدوير عند البيع.",
          "An instrument is recognised when the entity becomes party to its contractual provisions. A debt asset is classified by portfolio business model and contractual cash-flow characteristics: amortised cost for hold-to-collect with solely principal-and-interest cash flows, FVOCI for collect-and-sell with the same cash-flow test, and FVTPL otherwise. Equity investments are at fair value, with an irrevocable FVOCI presentation election for some non-trading investments and no recycling on disposal.",
        ),
        keyPoints: [
          text(
            "اختبار التدفقات يقيّم أصل الدين والفائدة مقابل مخاطر وتكاليف الإقراض الأساسية، وليس اسم المنتج.",
            "The cash-flow test evaluates principal and interest against basic lending risks and costs, not product labels.",
          ),
          text(
            "إعادة التصنيف تحدث فقط عند تغير نموذج الأعمال الفعلي لإدارة المحفظة، وهو حدث متوقع أن يكون نادرًا.",
            "Reclassification occurs only when the actual portfolio business model changes, an event expected to be rare.",
          ),
          text(
            "تكاليف المعاملة تدخل القياس الأولي ما لم تكن الأداة بالقيمة العادلة عبر الربح أو الخسارة.",
            "Transaction costs enter initial measurement unless the instrument is at FVTPL.",
          ),
        ],
        reference: "IFRS 9.3.1.1, 4.1.1–4.1.5, 5.1.1, 5.7.5–5.7.6",
      },
      {
        title: text(
          "طريقة الفائدة الفعلية والالتزامات",
          "Effective interest and financial liabilities",
        ),
        explanation: text(
          "تقاس أغلب الالتزامات المالية لاحقًا بالتكلفة المستهلكة باستخدام سعر الفائدة الفعلي؛ بينما تقاس التزامات المتاجرة وبعض الالتزامات المعينة بالقيمة العادلة عبر الربح أو الخسارة. عند تعيين التزام بالقيمة العادلة يفصل عادة أثر تغير مخاطر الائتمان الذاتي إلى الدخل الشامل الآخر ما لم يخلق ذلك عدم تطابق أو يزيده.",
          "Most financial liabilities are subsequently measured at amortised cost using the effective interest method; trading liabilities and some designated liabilities are at FVTPL. For a designated liability, the effect of changes in own credit risk is generally presented in OCI unless that would create or enlarge an accounting mismatch.",
        ),
        keyPoints: [
          text(
            "سعر الفائدة الفعلي يوزع الرسوم والنقاط وتكاليف المعاملة المؤهلة على عمر الأداة.",
            "The effective interest rate allocates eligible fees, points and transaction costs over the instrument life.",
          ),
          text(
            "يستبعد الالتزام عند انقضائه أو إلغائه أو انتهاء مدته، مع إثبات الفرق في الربح أو الخسارة.",
            "A liability is derecognised when extinguished, cancelled or expired, with the difference in profit or loss.",
          ),
          text(
            "من 2026 قد تسمح سياسة محددة باستبعاد التزام مسدد إلكترونيًا قبل تاريخ التسوية عند استيفاء شروط صارمة.",
            "From 2026, a specified policy may permit derecognition of an electronically settled liability before settlement date when strict criteria are met.",
          ),
        ],
        reference: "IFRS 9.3.3.1–3.3.3, 4.2.1–4.2.2, 5.4.1, 5.7.7–5.7.8",
      },
      {
        title: text("الخسائر الائتمانية المتوقعة", "Expected credit losses"),
        explanation: text(
          "يعترف نموذج الخسائر المتوقعة بالخطر قبل وقوع التعثر. في المرحلة الأولى يثبت خسائر 12 شهرًا. عند زيادة جوهرية في مخاطر الائتمان تنتقل الأداة إلى المرحلة الثانية وتثبت خسائر العمر مع استمرار احتساب الفائدة على الإجمالي. وعندما تصبح متعثرة ائتمانيًا تدخل المرحلة الثالثة وتبقى خسائر العمر لكن تحتسب الفائدة على صافي الأصل. للذمم التجارية ومساحات أخرى منهج مبسط بخسائر العمر من البداية.",
          "The expected-loss model recognises risk before default. Stage 1 carries 12-month ECL. A significant increase in credit risk moves the asset to Stage 2 with lifetime ECL while interest remains on the gross amount. Credit-impaired assets enter Stage 3 with lifetime ECL and interest on the net amount. Trade receivables and certain other balances can use a simplified lifetime-loss approach from inception.",
        ),
        keyPoints: [
          text(
            "خسائر 12 شهرًا ليست عجز النقد المتوقع خلال سنة؛ بل جزء خسائر العمر الناتج من تعثر ممكن خلال 12 شهرًا.",
            "Twelve-month ECL is not a one-year cash shortfall; it is the lifetime loss portion arising from defaults possible in 12 months.",
          ),
          text(
            "القياس مرجح بالاحتمالات ويستخدم معلومات معقولة ومؤيدة، بما فيها توقعات مستقبلية.",
            "Measurement is probability-weighted and uses reasonable supportable information, including forward-looking forecasts.",
          ),
          text(
            "راقب انتقالات المراحل وعالج التعافي والتحصيل والتعديل بصورة متسقة مع البيانات الائتمانية.",
            "Monitor stage movements and treat cures, collections and modifications consistently with credit data.",
          ),
        ],
        reference: "IFRS 9.5.5.1–5.5.20, Appendix A, B5.5.1–B5.5.55",
      },
      {
        title: text("تحديثات 2026 والتحوط", "2026 updates and hedge accounting"),
        explanation: text(
          "من 1 يناير 2026 توضح التعديلات تقييم التدفقات للأصول ذات الخصائص المشروطة، بما فيها خصائص مرتبطة بأهداف بيئية أو اجتماعية، وتضيف معالجة للتسوية الإلكترونية. كما تقدم عقود الكهرباء المعتمدة على الطبيعة إرشادات لاختبار الاستخدام الخاص وتسمح في شروط محددة بتعيين مبلغ اسمي متغير من معاملات الكهرباء المتوقعة كبند متحوط، مع إفصاحات IFRS 7 المرتبطة.",
          "From 1 January 2026, amendments clarify cash-flow assessment for assets with contingent features, including environmental or social targets, and add electronic-settlement guidance. Nature-dependent electricity amendments also guide the own-use assessment and, in specified conditions, permit a variable nominal amount of forecast electricity transactions as the hedged item, together with related IFRS 7 disclosures.",
        ),
        keyPoints: [
          text(
            "وجود مؤشر ESG لا يحدد التصنيف وحده؛ افحص طبيعة الحدث المشروط وأثره في التدفقات.",
            "An ESG label alone does not determine classification; assess the contingent event and its cash-flow effect.",
          ),
          text(
            "يتطلب التحوط توثيقًا رسميًا عند البداية وعلاقة اقتصادية ونسبة تحوط مناسبة وعدم هيمنة مخاطر الائتمان.",
            "Hedge accounting requires inception documentation, an economic relationship, an appropriate hedge ratio and no dominance by credit risk.",
          ),
          text(
            "تشمل الأنواع الرئيسية تحوط القيمة العادلة والتدفقات النقدية وصافي الاستثمار في عملية أجنبية.",
            "Main types are fair value, cash flow and net-investment hedges.",
          ),
        ],
        reference: "IFRS 9.4.1.3A–4.1.3B, 6.4.1, 6.10.1–6.10.2, 7.1.14–7.1.15",
      },
    ],
    workedExamples: [
      {
        title: text(
          "سند محتفظ به للتحصيل واستثمار أسهم",
          "Hold-to-collect bond and equity investment",
        ),
        facts: text(
          "اشترت Ulms Co سندًا بمليوني دولار، كوبون 6%، وسعر فائدة فعلي 10.88%، وتنوي الاحتفاظ به للتحصيل. كما اشترت 300,000 سهم بسعر 12.50 للسهم وأصبحت القيمة العادلة 16.60 في نهاية السنة، دون اختيار FVOCI.",
          "Ulms Co buys a $2m bond with a 6% coupon and 10.88% effective rate and intends to hold it to collect. It also buys 300,000 shares at $12.50 each; year-end fair value is $16.60, with no FVOCI election.",
        ),
        calculations: [
          text(
            "دخل فائدة السند = 2,000,000 × 10.88% = 217,600؛ النقد المقبوض = 120,000.",
            "Bond interest income = $2,000,000 × 10.88% = $217,600; cash received = $120,000.",
          ),
          text(
            "قيمة السند في نهاية السنة = 2,000,000 + 217,600 − 120,000 = 2,097,600، وتقرب إلى 2.098 مليون.",
            "Year-end bond amount = $2,000,000 + $217,600 − $120,000 = $2,097,600, approximately $2.098m.",
          ),
          text(
            "تكلفة الأسهم = 300,000 × 12.50 = 3.75 ملايين؛ القيمة العادلة = 300,000 × 16.60 = 4.98 ملايين؛ المكسب = 1.23 مليون.",
            "Share cost = 300,000 × $12.50 = $3.75m; fair value = 300,000 × $16.60 = $4.98m; gain = $1.23m.",
          ),
        ],
        conclusion: text(
          "إذا اجتاز السند اختبار التدفقات يقاس بالتكلفة المستهلكة، بينما يثبت مكسب الأسهم 1.23 مليون في الربح أو الخسارة لعدم اختيار FVOCI.",
          "If the bond passes the cash-flow test it is at amortised cost, while the $1.23m equity gain is in profit or loss because no FVOCI election was made.",
        ),
        journalEntries: [
          {
            label: text("فائدة السند", "Bond effective interest"),
            debit: text(
              "أصل مالي 97,600 + نقدية 120,000",
              "Financial asset $97,600 + cash $120,000",
            ),
            credit: text("دخل فائدة", "Interest income"),
            amount: text("217,600", "$217,600"),
          },
          {
            label: text("إعادة قياس الأسهم", "Equity remeasurement"),
            debit: text("استثمار أسهم", "Equity investment"),
            credit: text("مكسب قيمة عادلة", "Fair value gain"),
            amount: text("1,230,000", "$1,230,000"),
          },
        ],
        reference: "IFRS 9.4.1.2, 4.1.4, 5.4.1, 5.7.1",
      },
      {
        title: text(
          "انتقال مخصص الخسائر من المرحلة الأولى للثانية",
          "Moving an allowance from Stage 1 to Stage 2",
        ),
        facts: text(
          "اشترت Barkers Co أداة دين بقيمة 500,000. عند الاعتراف كان احتمال التعثر خلال 12 شهرًا 3% مع خسارة كاملة، وفي نهاية السنة زادت مخاطر الائتمان جوهريًا وأصبحت خسائر العمر المقدرة 30%.",
          "Barkers Co buys a $500,000 debt instrument. At recognition, 12-month default probability is 3% with total loss; by year-end credit risk has increased significantly and estimated lifetime loss is 30%.",
        ),
        calculations: [
          text(
            "مخصص المرحلة الأولى = 500,000 × 3% = 15,000.",
            "Stage 1 allowance = $500,000 × 3% = $15,000.",
          ),
          text(
            "مخصص المرحلة الثانية = 500,000 × 30% = 150,000.",
            "Stage 2 allowance = $500,000 × 30% = $150,000.",
          ),
          text(
            "الزيادة في المخصص = 150,000 − 15,000 = 135,000.",
            "Allowance increase = $150,000 − $15,000 = $135,000.",
          ),
        ],
        conclusion: text(
          "يثبت مخصص خسائر العمر 150,000، وتظل الفائدة في المرحلة الثانية محسوبة على القيمة الإجمالية قبل المخصص.",
          "Recognise a $150,000 lifetime allowance; in Stage 2, interest remains based on the gross carrying amount.",
        ),
        journalEntries: [
          {
            label: text("المخصص الأولي", "Initial allowance"),
            debit: text("خسارة ائتمانية", "Credit loss expense"),
            credit: text("مخصص خسائر متوقعة", "Expected-loss allowance"),
            amount: text("15,000", "$15,000"),
          },
          {
            label: text("زيادة المخصص في نهاية السنة", "Year-end allowance increase"),
            debit: text("خسارة ائتمانية", "Credit loss expense"),
            credit: text("مخصص خسائر متوقعة", "Expected-loss allowance"),
            amount: text("135,000", "$135,000"),
          },
        ],
        reference: "IFRS 9.5.5.3–5.5.5, 5.5.9, Appendix A",
      },
    ],
  },
  "IFRS 16": {
    sections: [
      {
        title: text(
          "لماذا يظهر حق الاستخدام والالتزام؟",
          "Why a right-of-use asset and liability appear",
        ),
        explanation: text(
          "عند بدء عقد إيجار يسيطر المستأجر عادة على حق استخدام أصل محدد خلال مدة مقابل مدفوعات ملزمة. لذلك يعكس النموذج أصل حق الاستخدام بوصفه موردًا حاليًا، والتزام الإيجار بوصفه التزامًا حاليًا بالسداد، بدل إبقاء معظم الإيجارات خارج قائمة المركز المالي.",
          "At lease commencement, the lessee normally controls the right to use an identified asset over a period in exchange for unavoidable payments. The model therefore depicts a present right-of-use resource and a present lease-payment obligation instead of leaving most leases off the statement of financial position.",
        ),
        keyPoints: [
          text(
            "التحليل يبدأ بتحديد وجود أصل محدد وحق التحكم في استخدامه.",
            "Analysis starts with an identified asset and the right to control its use.",
          ),
          text(
            "إعفاءا الإيجار القصير والأصل منخفض القيمة اختياريان عند استيفاء الشروط.",
            "The short-term and low-value exemptions are optional when their conditions are met.",
          ),
          text(
            "الإعفاء لا يعني عدم وجود عقد؛ بل معالجة مبسطة للمدفوعات كمصروف.",
            "An exemption does not mean no contract exists; it permits simplified expense recognition.",
          ),
        ],
        reference: "IFRS 16.9, 22–24, 26, 5–8",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قراءة العقد من منظور المورد والالتزام",
          "Reading a lease as resource and obligation",
        ),
        facts: text(
          "أبرمت منشأة عقدًا يمنحها التحكم في استخدام أصل محدد طوال المدة، ويلزمها بدفعات دورية. لا ينطبق إعفاء الإيجار القصير أو الأصل منخفض القيمة.",
          "An entity enters a contract that gives it control of an identified asset throughout the term and obliges it to make periodic payments. Neither the short-term nor low-value exemption applies.",
        ),
        calculations: [
          text(
            "يقاس التزام الإيجار بالقيمة الحالية لمدفوعات الإيجار غير المدفوعة عند البدء.",
            "Measure the lease liability at the present value of unpaid lease payments at commencement.",
          ),
          text(
            "يبنى أصل حق الاستخدام من القياس الأولي للالتزام مع تعديلات الدفعات المسبقة والتكاليف المباشرة والحوافز والتفكيك ذات الصلة.",
            "Build the right-of-use asset from the initial liability, adjusted for prepayments, direct costs, incentives and relevant restoration obligations.",
          ),
        ],
        conclusion: text(
          "يثبت أصل حق استخدام والتزام إيجار عند البدء، ثم يهلك الأصل وتحتسب الفائدة على الالتزام وفق متطلبات القياس اللاحق.",
          "Recognise a right-of-use asset and lease liability at commencement, then depreciate the asset and accrue interest on the liability under subsequent measurement requirements.",
        ),
        journalEntries: [
          {
            label: text("قيد بدء مبسط", "Simplified commencement entry"),
            debit: text("أصل حق استخدام", "Right-of-use asset"),
            credit: text("التزام إيجار", "Lease liability"),
            amount: text("القيمة المحسوبة", "Calculated amount"),
          },
        ],
        reference: "IFRS 16.22–28, 29–38",
      },
    ],
  },
  "IFRS 3": {
    sections: [
      {
        title: text("منطق طريقة الاستحواذ", "The acquisition-method logic"),
        explanation: text(
          "تبدأ محاسبة تجميع الأعمال بتحديد المستحوذ وتاريخ السيطرة، ثم الاعتراف بالأصول القابلة للتحديد والالتزامات المتحملة وحقوق غير المسيطرين. لا تُجمع تكلفة الصفقة في رقم واحد؛ فالأصول غير الملموسة القابلة للفصل والالتزامات المحتملة التي تستوفي شروط المعيار قد تظهر منفصلة عن الشهرة، بينما تحمل تكاليف الاستحواذ الإدارية والمهنية على الربح أو الخسارة عند تكبدها.",
          "Accounting for a business combination starts by identifying the acquirer and the date control is obtained, followed by recognising identifiable assets acquired, liabilities assumed and non-controlling interests. The transaction cost is not bundled into one number: separable intangible assets and qualifying contingent liabilities may be recognised separately from goodwill, while acquisition-related professional and administrative costs are expensed as incurred.",
        ),
        keyPoints: [
          text(
            "تاريخ الاستحواذ هو تاريخ الحصول على السيطرة، لا تاريخ توقيع النوايا تلقائيًا.",
            "The acquisition date is the date control is obtained, not automatically the date a letter of intent is signed.",
          ),
          text(
            "يقاس المقابل المحول بالقيمة العادلة ويشمل المقابل المحتمل.",
            "Consideration transferred is measured at fair value and includes contingent consideration.",
          ),
          text(
            "تُفصل الأصول غير الملموسة القابلة للتحديد عن الشهرة حتى لو لم يثبتها المستحوذ عليه سابقًا.",
            "Identifiable intangible assets are separated from goodwill even if the acquiree did not previously recognise them.",
          ),
        ],
        reference: "IFRS 3.4–18, 37–40, 53",
      },
      {
        title: text("الشهرة الكاملة والجزئية", "Full and partial goodwill"),
        explanation: text(
          "تحسب الشهرة من مجموع المقابل المحول وحقوق غير المسيطرين، مع إضافة القيمة العادلة لأي حصة سابقة في الاستحواذ المرحلي، ثم طرح القيمة العادلة لصافي الأصول القابلة للتحديد. يمكن قياس حقوق غير المسيطرين التي تمثل حصص ملكية حالية بالقيمة العادلة أو بنسبة حصتها في صافي الأصول؛ الاختيار لكل عملية على حدة ويؤثر مباشرة في مبلغ الشهرة.",
          "Goodwill is calculated from consideration transferred plus non-controlling interests and, in a step acquisition, the fair value of any previously held interest, less the fair value of identifiable net assets. Present ownership interests in NCI may be measured at fair value or at their proportionate share of net assets; the election is transaction-specific and directly changes the amount of goodwill.",
        ),
        keyPoints: [
          text(
            "قياس NCI بالقيمة العادلة ينتج شهرة كاملة تشمل نصيب غير المسيطرين.",
            "Fair-value measurement of NCI produces full goodwill including the NCI share.",
          ),
          text(
            "القياس النسبي ينتج شهرة جزئية تخص مساهمي الشركة الأم.",
            "Proportionate measurement produces partial goodwill attributable to the parent owners.",
          ),
          text(
            "لا تُستهلك الشهرة؛ تُختبر سنويًا للانخفاض وفق IAS 36.",
            "Goodwill is not amortised; it is tested annually for impairment under IAS 36.",
          ),
        ],
        reference: "IFRS 3.19, 32–34; IAS 36.80–90",
      },
      {
        title: text(
          "الشراء بسعر صفقة والقياس المؤقت",
          "Bargain purchase and provisional measurement",
        ),
        explanation: text(
          "إذا تجاوزت القيمة العادلة لصافي الأصول المقابل وحقوق غير المسيطرين، يعاد فحص تحديد الأصول والالتزامات والقياسات قبل إثبات مكسب شراء بسعر صفقة في الربح أو الخسارة. وإذا لم تكتمل معلومات التقييم في نهاية الفترة، تستخدم مبالغ مؤقتة ويجوز تعديلها بأثر رجعي خلال فترة القياس التي لا تتجاوز سنة من تاريخ الاستحواذ عندما تتعلق المعلومات بظروف قائمة في ذلك التاريخ.",
          "If the fair value of identifiable net assets exceeds consideration and NCI, the identification and measurements are reassessed before recognising a bargain-purchase gain in profit or loss. When valuation information is incomplete at period end, provisional amounts are used and may be adjusted retrospectively during the measurement period, which cannot exceed one year from the acquisition date, for information about conditions existing at that date.",
        ),
        keyPoints: [
          text(
            "لا يُثبت مكسب الصفقة قبل إعادة تقييم دقة كل مكونات الحساب.",
            "A bargain gain is not recognised before reassessing every component of the calculation.",
          ),
          text(
            "تغييرات ما بعد الاستحواذ الناتجة عن أحداث جديدة ليست تعديلات فترة قياس.",
            "Post-acquisition changes caused by new events are not measurement-period adjustments.",
          ),
          text(
            "الإفصاح يشرح طبيعة التجميع وآثاره المالية على المستخدمين.",
            "Disclosure explains the nature and financial effects of the combination to users.",
          ),
        ],
        reference: "IFRS 3.34–36, 45–50, 59–63",
      },
    ],
    workedExamples: [
      {
        title: text("حساب الشهرة عند شراء 100%", "Goodwill on a 100% acquisition"),
        facts: text(
          "اشترت Netley Co كامل أسهم Orell Co نقدًا بمبلغ 2,500,000. في تاريخ الاستحواذ بلغ رأس مال Orell مبلغ 2,000,000 والأرباح المحتجزة 250,000، وكانت القيمة العادلة لأصولها الملموسة أعلى من قيمتها الدفترية بمبلغ 150,000.",
          "Netley Co purchased all of Orell Co for $2,500,000 cash. At acquisition Orell had $2,000,000 share capital and $250,000 retained earnings, and the fair value of its tangible assets exceeded carrying amount by $150,000.",
        ),
        calculations: [
          text(
            "صافي الأصول القابلة للتحديد = 2,000,000 + 250,000 + 150,000 = 2,400,000.",
            "Identifiable net assets = $2,000,000 + $250,000 + $150,000 = $2,400,000.",
          ),
          text(
            "الشهرة = المقابل 2,500,000 − صافي الأصول 2,400,000 = 100,000.",
            "Goodwill = $2,500,000 consideration − $2,400,000 net assets = $100,000.",
          ),
        ],
        conclusion: text(
          "تعرض شهرة قدرها 100,000 ضمن الأصول غير المتداولة للمجموعة وتخضع لاختبار الانخفاض.",
          "The group recognises $100,000 goodwill as a non-current asset subject to impairment testing.",
        ),
        journalEntries: [
          {
            label: text("قيد توضيحي للتجميع", "Illustrative consolidation entry"),
            debit: text(
              "صافي الأصول القابلة للتحديد 2,400,000 + الشهرة 100,000",
              "Identifiable net assets $2,400,000 + goodwill $100,000",
            ),
            credit: text(
              "المقابل المحول / الاستثمار 2,500,000",
              "Consideration transferred / investment $2,500,000",
            ),
            amount: text("2,500,000", "$2,500,000"),
          },
        ],
        reference: "IFRS 3.18–19, 32",
      },
    ],
  },
  "IFRS 10": {
    sections: [
      {
        title: text("اختبار السيطرة بثلاثة عناصر", "The three-element control test"),
        explanation: text(
          "لا تكفي نسبة الملكية وحدها. يسيطر المستثمر عندما يملك سلطة حالية على الأنشطة ذات الصلة، ويتعرض لعوائد متغيرة أو تكون له حقوق فيها، ويستطيع استخدام سلطته للتأثير في تلك العوائد. لذلك قد توجد السيطرة بأقل من نصف الأصوات إذا كانت بقية الملكية مشتتة وكانت الحقوق الأخرى جوهرية، وقد لا توجد رغم أغلبية اقتصادية إذا كانت حقوق التصويت غير مؤثرة في الأنشطة ذات الصلة.",
          "Ownership percentage alone is not enough. An investor controls an investee when it has current power over relevant activities, exposure or rights to variable returns, and the ability to use that power to affect those returns. Control may therefore exist below half the votes when other ownership is dispersed and rights are substantive, and may be absent despite economic exposure when voting rights do not direct the relevant activities.",
        ),
        keyPoints: [
          text(
            "حدد الأنشطة التي تؤثر جوهريًا في العوائد قبل تحديد من يوجهها.",
            "Identify the activities that significantly affect returns before deciding who directs them.",
          ),
          text(
            "افحص الحقوق الجوهرية والحقوق الوقائية وترتيبات الوكلاء.",
            "Assess substantive rights, protective rights and agency arrangements.",
          ),
          text(
            "أعد تقييم السيطرة عندما تتغير الوقائع والظروف.",
            "Reassess control when facts and circumstances change.",
          ),
        ],
        reference: "IFRS 10.5–18, B11–B85",
      },
      {
        title: text("التجميع ككيان اقتصادي واحد", "Consolidation as one economic entity"),
        explanation: text(
          "من تاريخ الحصول على السيطرة تُجمع الأصول والالتزامات والإيرادات والمصروفات والتدفقات النقدية بندًا ببند، ويُلغى استثمار الأم مقابل حقوق ملكية التابعة عند الاستحواذ. كما تُلغى الأرصدة والمعاملات والأرباح غير المحققة داخل المجموعة بالكامل، وتطبق سياسات محاسبية موحدة حتى تعكس القوائم المجموعة كأنها منشأة اقتصادية واحدة.",
          "From the date control is obtained, assets, liabilities, income, expenses and cash flows are combined line by line, and the parent's investment is eliminated against the subsidiary's acquisition-date equity. Intragroup balances, transactions and unrealised profits are eliminated in full, and uniform accounting policies are applied so the statements depict the group as a single economic entity.",
        ),
        keyPoints: [
          text(
            "يبدأ التجميع عند السيطرة وينتهي عند فقدها.",
            "Consolidation begins when control is obtained and ends when control is lost.",
          ),
          text(
            "تعرض حقوق غير المسيطرين داخل حقوق الملكية منفصلة عن حقوق مالكي الأم.",
            "NCI is presented within equity separately from owners of the parent.",
          ),
          text(
            "توحّد تواريخ التقارير قدر الإمكان، وألا يتجاوز الفرق ثلاثة أشهر عند التعذر.",
            "Reporting dates are aligned where practicable; any difference cannot exceed three months.",
          ),
        ],
        reference: "IFRS 10.19–26, B86–B93",
      },
      {
        title: text("تغير الملكية وفقد السيطرة", "Ownership changes and loss of control"),
        explanation: text(
          "شراء أو بيع حصة مع بقاء السيطرة يعد معاملة حقوق ملكية ولا ينشأ عنه ربح أو خسارة في قائمة الدخل. أما فقد السيطرة فيؤدي إلى استبعاد أصول والتزامات التابعة وحقوق غير المسيطرين، وإثبات المقابل المستلم وأي حصة محتفظ بها بالقيمة العادلة، وإعادة تصنيف أو تحويل أرصدة الدخل الشامل الآخر كما لو استبعدت الأصول والالتزامات ذات الصلة مباشرة.",
          "Buying or selling an interest while retaining control is an equity transaction and produces no profit-or-loss gain. Loss of control requires derecognition of the subsidiary's assets, liabilities and NCI, recognition of consideration received and any retained interest at fair value, and reclassification or transfer of related OCI balances as if the underlying assets and liabilities had been disposed of directly.",
        ),
        keyPoints: [
          text(
            "التغير دون فقد السيطرة يضبط أرصدة الأم وNCI داخل حقوق الملكية.",
            "A change without loss of control adjusts parent and NCI balances within equity.",
          ),
          text(
            "القيمة العادلة للحصة المحتفظ بها تدخل في حساب ربح أو خسارة فقد السيطرة.",
            "The fair value of a retained interest enters the loss-of-control gain or loss.",
          ),
          text(
            "بعد الفقد تطبق IAS 28 أو IFRS 11 أو IFRS 9 بحسب طبيعة الحصة المتبقية.",
            "After loss of control, IAS 28, IFRS 11 or IFRS 9 applies according to the retained interest.",
          ),
        ],
        reference: "IFRS 10.23, 25, B96–B99",
      },
    ],
    workedExamples: [
      {
        title: text("ربح المجموعة وتوزيعه على غير المسيطرين", "Group profit and allocation to NCI"),
        facts: text(
          "استحوذت Jam Co على 80% من Marmalade Co في 1 يوليو. للسنة المنتهية في 31 ديسمبر بلغ ربح Jam بعد الضريبة 8.4 مليون وربح Marmalade السنوي 4.2 مليون، بافتراض تحقق الربح بالتساوي وعدم وجود تعديلات أخرى.",
          "Jam Co acquired 80% of Marmalade Co on 1 July. For the year ended 31 December, Jam's profit after tax was $8.4 million and Marmalade's annual profit was $4.2 million, assumed to accrue evenly with no other adjustments.",
        ),
        calculations: [
          text(
            "ربح التابعة بعد الاستحواذ لستة أشهر = 4.2 × 6÷12 = 2.1 مليون.",
            "Subsidiary post-acquisition profit for six months = $4.2m × 6/12 = $2.1m.",
          ),
          text(
            "ربح المجموعة بعد الضريبة = 8.4 + 2.1 = 10.5 مليون.",
            "Group profit after tax = $8.4m + $2.1m = $10.5m.",
          ),
          text(
            "نصيب NCI من ربح التابعة = 2.1 × 20% = 0.42 مليون؛ ونصيب مالكي الأم من الإجمالي = 10.08 مليون.",
            "NCI share of subsidiary profit = $2.1m × 20% = $0.42m; total attributable to owners of the parent = $10.08m.",
          ),
        ],
        conclusion: text(
          "تجمع المجموعة 100% من ربح التابعة بعد الاستحواذ ثم توزع صافي الربح بين مالكي الأم وحقوق غير المسيطرين.",
          "The group includes 100% of post-acquisition subsidiary profit and then allocates total profit between parent owners and NCI.",
        ),
        journalEntries: [],
        reference: "IFRS 10.19–22, B94",
      },
    ],
  },
  "IFRS 11": {
    sections: [
      {
        title: text("إثبات وجود السيطرة المشتركة", "Establishing joint control"),
        explanation: text(
          "السيطرة المشتركة لا تنشأ من تشابه نسب الملكية وحده، بل من ترتيب تعاقدي يجعل القرارات عن الأنشطة ذات الصلة بحاجة إلى موافقة بالإجماع من الأطراف التي تسيطر جماعيًا. فإذا أمكن بلوغ نسبة التصويت المطلوبة بأكثر من مجموعة من المساهمين دون تحديد من يجب أن يوافق، فقد توجد سيطرة جماعية ولكن لا توجد سيطرة مشتركة بمفهوم IFRS 11.",
          "Joint control does not arise merely from equal ownership. A contractual arrangement must require unanimous consent of the parties that collectively control decisions about relevant activities. If a voting threshold can be reached by several combinations of shareholders without specifying whose agreement is required, collective control may exist but joint control under IFRS 11 does not.",
        ),
        keyPoints: [
          text(
            "حدد أولًا مجموعة الأطراف التي تسيطر جماعيًا.",
            "First identify the group of parties that controls collectively.",
          ),
          text(
            "اختبر هل القرارات الجوهرية تتطلب موافقة جميع أطراف تلك المجموعة.",
            "Then test whether relevant decisions require every party in that group to agree.",
          ),
          text(
            "الحقوق الوقائية وحدها لا تمنح سيطرة مشتركة.",
            "Protective rights alone do not confer joint control.",
          ),
        ],
        reference: "IFRS 11.4–13, B5–B11",
      },
      {
        title: text("عملية مشتركة أم مشروع مشترك؟", "Joint operation or joint venture?"),
        explanation: text(
          "التصنيف يتبع الحقوق والالتزامات لا اسم العقد. العملية المشتركة تمنح الأطراف حقوقًا في الأصول والتزامات عن الخصوم؛ أما المشروع المشترك فيمنحهم حقوقًا في صافي الأصول. عند وجود كيان منفصل يُفحص شكله القانوني وشروط العقد، ثم الوقائع والظروف مثل تخصيص كامل المخرجات للأطراف واعتماد تسوية الخصوم باستمرار على تدفقاتهم النقدية.",
          "Classification follows rights and obligations, not the contract label. In a joint operation, parties have rights to assets and obligations for liabilities; in a joint venture they have rights to net assets. When a separate vehicle exists, its legal form and contractual terms are assessed, followed by other facts and circumstances such as the parties taking substantially all output and continuously funding settlement of liabilities.",
        ),
        keyPoints: [
          text(
            "الترتيب غير المنظم في كيان منفصل يكون عادة عملية مشتركة.",
            "An arrangement not structured through a separate vehicle is normally a joint operation.",
          ),
          text(
            "وجود شركة مستقلة لا يحسم وحده أن الترتيب مشروع مشترك.",
            "A separate company alone does not conclusively make the arrangement a joint venture.",
          ),
          text(
            "أعد التصنيف عندما تتغير الحقوق أو الالتزامات أو الوقائع الجوهرية.",
            "Reassess classification when rights, obligations or significant facts change.",
          ),
        ],
        reference: "IFRS 11.14–19, B12–B33",
      },
      {
        title: text("المعالجة المحاسبية حسب النوع", "Accounting follows the classification"),
        explanation: text(
          "يثبت المشغل المشترك أصوله ونصيبه من الأصول المشتركة، والتزاماته ونصيبه من الالتزامات، وإيراداته ومصروفاته المرتبطة بالعملية. أما الشريك في مشروع مشترك فيثبت استثمارًا واحدًا ويطبق طريقة حقوق الملكية وفق IAS 28، مع الاستثناءات المحدودة المقررة هناك. لذا فإن خطأ التصنيف يغير بنية القائمة بالكامل لا مجرد إفصاح هامشي.",
          "A joint operator recognises its assets and share of joint assets, its liabilities and share of joint liabilities, and related revenue and expenses. A joint venturer recognises one investment and applies the equity method under IAS 28, subject to limited exceptions. A classification error therefore changes the architecture of the statements, not merely a note disclosure.",
        ),
        keyPoints: [
          text(
            "العملية المشتركة تعرض الحقوق والالتزامات بندًا بندًا.",
            "A joint operation presents rights and obligations line by line.",
          ),
          text(
            "المشروع المشترك يظهر عادة كبند استثمار واحد.",
            "A joint venture normally appears as a single investment line.",
          ),
          text(
            "عند شراء حصة في عملية مشتركة تمثل أعمالًا تطبق مبادئ IFRS 3 الملائمة.",
            "An acquired interest in a joint operation that constitutes a business applies the relevant IFRS 3 principles.",
          ),
        ],
        reference: "IFRS 11.20–25",
      },
    ],
    workedExamples: [
      {
        title: text("شرط الإجماع بين ثلاثة مستثمرين", "Unanimity among three investors"),
        facts: text(
          "يمتلك كل من Sneezy وSleepy وDopey ثلث حقوق التصويت. ينص الاتفاق على أن قرارات الأنشطة ذات الصلة تحتاج موافقة الأطراف الثلاثة بالإجماع.",
          "Sneezy, Sleepy and Dopey each hold one third of the voting rights. The agreement requires unanimous consent of all three for decisions about relevant activities.",
        ),
        calculations: [
          text(
            "كل طرف يملك 33⅓%، لكن أي طرف يستطيع منع قرار متعلق بالأنشطة ذات الصلة.",
            "Each party holds 33⅓%, but each can block a decision about relevant activities.",
          ),
          text(
            "لا تستطيع أي مجموعة أصغر اتخاذ القرار دون الطرف الثالث؛ لذلك يحدد العقد الأطراف التي تتقاسم السيطرة.",
            "No smaller combination can decide without the third party, so the contract identifies the parties sharing control.",
          ),
        ],
        conclusion: text(
          "يوجد ترتيب خاضع لسيطرة مشتركة، ثم يلزم فحص الحقوق والالتزامات لتصنيفه كعملية مشتركة أو مشروع مشترك.",
          "A jointly controlled arrangement exists; rights and obligations must then be assessed to classify it as a joint operation or joint venture.",
        ),
        journalEntries: [],
        reference: "IFRS 11.7–13",
      },
    ],
  },
  "IFRS 12": {
    sections: [
      {
        title: text(
          "الإفصاح يبدأ بالأحكام المهمة",
          "Disclosure starts with significant judgements",
        ),
        explanation: text(
          "لا يكفي سرد أسماء الشركات ونسب الملكية. يجب شرح الأحكام والافتراضات المهمة التي أدت إلى نتيجة السيطرة أو السيطرة المشتركة أو النفوذ المؤثر، بما في ذلك الحالات غير الواضحة: سيطرة بأقل من نصف الأصوات، أو عدم سيطرة رغم امتلاك أكثر من النصف، وتصنيف الترتيب المشترك عند استخدام كيان منفصل.",
          "Listing entities and ownership percentages is not enough. An entity explains the significant judgements and assumptions behind control, joint control and significant influence conclusions, including unclear cases: control with less than half the votes, no control despite more than half, and classification of a joint arrangement conducted through a separate vehicle.",
        ),
        keyPoints: [
          text(
            "اربط كل حكم بالوقائع التي جعلته مهمًا للمستخدم.",
            "Connect each judgement to the facts that make it significant to users.",
          ),
          text(
            "حدّث الإفصاح عندما تتغير الوقائع أو يتغير الاستنتاج.",
            "Update disclosure when facts or the conclusion change.",
          ),
          text(
            "اشرح تعريف المنشأة الاستثمارية إذا كان مطبقًا.",
            "Explain the investment-entity determination when applicable.",
          ),
        ],
        reference: "IFRS 12.7–9B",
      },
      {
        title: text("مخاطر الشركات التابعة والقيود", "Subsidiary risks and restrictions"),
        explanation: text(
          "تساعد إفصاحات الشركات التابعة المستخدم على فهم تكوين المجموعة وحقوق غير المسيطرين المهمة والقيود الجوهرية على تحويل النقد أو الأصول داخل المجموعة. كما تشرح طبيعة المخاطر المرتبطة بالدعم المقدم إلى منشآت مهيكلة موحدة، وآثار التغير في حصة الملكية دون فقد السيطرة أو عند فقدها.",
          "Subsidiary disclosures help users understand group composition, material NCI and significant restrictions on transferring cash or assets within the group. They also explain risks from support provided to consolidated structured entities and the effects of ownership changes with or without loss of control.",
        ),
        keyPoints: [
          text(
            "حدد أين توجد قيود قانونية أو تعاقدية على التوزيعات والقروض.",
            "Identify legal or contractual restrictions on distributions and loans.",
          ),
          text(
            "قدم معلومات مالية ملخصة للتابعات ذات NCI الجوهري.",
            "Provide summarised financial information for subsidiaries with material NCI.",
          ),
          text(
            "اكشف الدعم غير التعاقدي وأسباب تقديمه عندما يكون مطلوبًا.",
            "Disclose non-contractual support and why it was provided when required.",
          ),
        ],
        reference: "IFRS 12.10–19",
      },
      {
        title: text(
          "المشروعات المشتركة والزميلة والمنشآت المهيكلة",
          "Joint ventures, associates and structured entities",
        ),
        explanation: text(
          "للحصص الجوهرية في المشروعات المشتركة والزميلة، تجمع المنشأة بين وصف طبيعة العلاقة ومعلومات مالية ملخصة ومخاطر الالتزامات. وبالنسبة للمنشآت المهيكلة غير الموحدة، يركز الإفصاح على طبيعة ومدى الحصة، وكيفية التمويل، والحد الأقصى للتعرض للخسارة، وأي دعم دون التزام تعاقدي.",
          "For material joint ventures and associates, an entity combines a description of the relationship with summarised financial information and commitment risks. For unconsolidated structured entities, disclosure focuses on the nature and extent of the interest, financing, maximum exposure to loss and any support provided without a contractual obligation.",
        ),
        keyPoints: [
          text(
            "لا تخفِ المخاطر المختلفة داخل تجميع واسع غير مفيد.",
            "Do not obscure different risks through overly broad aggregation.",
          ),
          text(
            "وازن مستوى التفصيل بحيث لا تغطي البنود غير المهمة على المعلومات المهمة.",
            "Balance detail so immaterial items do not obscure important information.",
          ),
          text(
            "أضف أي معلومات ضرورية إذا لم تحقق المتطلبات المحددة هدف الإفصاح.",
            "Add information when specified requirements do not meet the disclosure objective.",
          ),
        ],
        reference: "IFRS 12.20–31, B2–B6",
      },
    ],
    workedExamples: [
      {
        title: text("بناء إفصاح عن حصة في منشأة مهيكلة", "Building a structured-entity disclosure"),
        facts: text(
          "ترعى منشأة وعاء تمويل غير موحد يحمل محفظة قروض. لا تملك المنشأة أسهم تصويت، لكنها توفر تسهيل سيولة بحد أقصى 8 ملايين وبلغ المستخدم منه في نهاية السنة 3 ملايين، وقدمت خلال السنة دعمًا إضافيًا غير ملزم قدره مليون.",
          "An entity sponsors an unconsolidated financing vehicle holding a loan portfolio. It has no voting shares but provides an $8 million liquidity facility, of which $3 million is drawn at year end, and supplied an additional non-contractual $1 million during the year.",
        ),
        calculations: [
          text(
            "التعرض المسجل الحالي يشمل المبلغ المسحوب 3 ملايين وفق طبيعته المحاسبية.",
            "Current recognised exposure includes the $3 million drawn amount according to its accounting nature.",
          ),
          text(
            "يشرح الإفصاح كذلك الحد الأقصى للتعرض البالغ 8 ملايين، ولا يكتفي بالمبلغ المسجل.",
            "Disclosure also explains the $8 million maximum exposure rather than stopping at the recognised amount.",
          ),
          text(
            "يُوصف الدعم الإضافي البالغ مليون وسبب تقديمه رغم غياب الالتزام التعاقدي.",
            "The additional $1 million support and the reason for providing it despite no contractual obligation are described.",
          ),
        ],
        conclusion: text(
          "الهدف هو كشف مسار الخطر الاقتصادي الكامل وطبيعته، لا عرض رقم واحد منفصل عن تصميم المنشأة.",
          "The objective is to reveal the full path and nature of economic risk, not a single number detached from the vehicle's design.",
        ),
        journalEntries: [],
        reference: "IFRS 12.24–31",
      },
    ],
  },
  "IAS 28": {
    sections: [
      {
        title: text(
          "النفوذ المؤثر ليس اختبار نسبة آليًا",
          "Significant influence is not an automatic percentage test",
        ),
        explanation: text(
          "النفوذ المؤثر هو القدرة على المشاركة في قرارات السياسات المالية والتشغيلية دون السيطرة أو السيطرة المشتركة. حيازة 20% أو أكثر من حقوق التصويت تنشئ افتراضًا قابلًا للدحض، وأقل من 20% ينشئ افتراضًا معاكسًا يمكن دحضه بأدلة مثل تمثيل مجلس الإدارة والمشاركة في السياسات والمعاملات الجوهرية وتبادل الإدارة أو المعلومات الفنية الأساسية.",
          "Significant influence is the power to participate in financial and operating policy decisions without control or joint control. Holding 20% or more of voting power creates a rebuttable presumption; below 20% creates the opposite presumption, which can be overcome by evidence such as board representation, policy participation, material transactions, managerial interchange or essential technical information.",
        ),
        keyPoints: [
          text(
            "وثّق الأدلة النوعية ولا تعتمد على النسبة وحدها.",
            "Document qualitative evidence rather than relying on percentage alone.",
          ),
          text(
            "افحص حقوق التصويت المحتملة الجوهرية عند تقييم النفوذ.",
            "Consider substantive potential voting rights when assessing influence.",
          ),
          text(
            "توقف طريقة حقوق الملكية عند فقد النفوذ المؤثر أو السيطرة المشتركة.",
            "Stop the equity method when significant influence or joint control is lost.",
          ),
        ],
        reference: "IAS 28.3, 5–9, 22–23",
      },
      {
        title: text("كيف تعمل طريقة حقوق الملكية", "How the equity method works"),
        explanation: text(
          "يثبت الاستثمار أولًا بالتكلفة، ثم يزيد أو ينقص بنصيب المستثمر من ربح أو خسارة المستثمر فيه ودخله الشامل الآخر بعد الاستحواذ. التوزيعات المستلمة لا تعد دخلًا جديدًا تحت هذه الطريقة؛ بل تخفض القيمة الدفترية للاستثمار لأن الربح سبق إدراجه عند تحققه لدى المستثمر فيه.",
          "The investment is initially recognised at cost and subsequently increased or decreased by the investor's share of the investee's post-acquisition profit or loss and OCI. Distributions received are not new income under the method; they reduce the investment carrying amount because the underlying profit was recognised as the investee earned it.",
        ),
        keyPoints: [
          text(
            "وحّد السياسات المحاسبية للمعاملات والأحداث المتشابهة.",
            "Use uniform accounting policies for like transactions and events.",
          ),
          text(
            "اعترف بحصة الخسائر حتى تصبح الحصة صفرًا ثم طبّق قواعد الالتزامات الإضافية.",
            "Recognise losses until the interest is reduced to zero, then apply rules for further obligations.",
          ),
          text(
            "اختبر الانخفاض عند وجود مؤشر بعد تطبيق متطلبات الخسائر.",
            "Test for impairment when indicators exist after applying loss-recognition requirements.",
          ),
        ],
        reference: "IAS 28.10–15, 26, 38–43",
      },
      {
        title: text(
          "الأرباح غير المحققة والمعاملات مع المستثمر فيه",
          "Unrealised profits and investee transactions",
        ),
        explanation: text(
          "في المعاملات الصاعدة أو الهابطة بين المستثمر والمنشأة الزميلة أو المشروع المشترك، لا يعترف المستثمر بالأرباح أو الخسائر إلا بقدر حصص المستثمرين غير المرتبطين. لذلك يُلغى نصيب المستثمر من الربح غير المحقق في أصل ما زال داخل العلاقة، مع بقاء الخسارة دلالة محتملة على انخفاض قيمة الأصل المنقول.",
          "For upstream or downstream transactions between an investor and an associate or joint venture, gains and losses are recognised only to the extent of unrelated investors' interests. The investor's share of an unrealised gain on an asset remaining within the relationship is eliminated, while a loss may still signal impairment of the transferred asset.",
        ),
        keyPoints: [
          text(
            "حدد اتجاه المعاملة ومن يحتفظ بالأصل في نهاية الفترة.",
            "Identify the direction of the transaction and who holds the asset at period end.",
          ),
          text(
            "الإلغاء يكون بقدر حصة المستثمر لا بكامل الربح عادة.",
            "Elimination is normally limited to the investor's interest, not the entire gain.",
          ),
          text(
            "لا تستخدم الإلغاء لإخفاء خسارة انخفاض حقيقية.",
            "Do not use elimination to hide a genuine impairment loss.",
          ),
        ],
        reference: "IAS 28.28–31",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تحديث رصيد الاستثمار بطريقة حقوق الملكية",
          "Updating an investment under the equity method",
        ),
        facts: text(
          "اشترت منشأة 30% من شركة زميلة بمبلغ 4,000,000. حققت الزميلة بعد الاستحواذ ربحًا 1,200,000 ودخلًا شاملًا آخر 200,000 ووزعت أرباحًا نقدية 300,000. لا توجد تعديلات قيمة عادلة أو انخفاض.",
          "An entity acquired 30% of an associate for $4,000,000. Post-acquisition, the associate earned $1,200,000 profit, reported $200,000 OCI and paid $300,000 dividends. There are no fair-value adjustments or impairment.",
        ),
        calculations: [
          text(
            "نصيب الربح = 1,200,000 × 30% = 360,000.",
            "Share of profit = $1,200,000 × 30% = $360,000.",
          ),
          text(
            "نصيب الدخل الشامل الآخر = 200,000 × 30% = 60,000.",
            "Share of OCI = $200,000 × 30% = $60,000.",
          ),
          text(
            "التوزيعات المخفضة للاستثمار = 300,000 × 30% = 90,000.",
            "Dividends reducing the investment = $300,000 × 30% = $90,000.",
          ),
          text(
            "الرصيد الختامي = 4,000,000 + 360,000 + 60,000 − 90,000 = 4,330,000.",
            "Closing carrying amount = $4,000,000 + $360,000 + $60,000 − $90,000 = $4,330,000.",
          ),
        ],
        conclusion: text(
          "يظهر الاستثمار بمبلغ 4,330,000؛ يثبت نصيب الربح في الربح أو الخسارة ونصيب OCI في الدخل الشامل الآخر.",
          "The investment is presented at $4,330,000; the profit share is recognised in profit or loss and the OCI share in OCI.",
        ),
        journalEntries: [
          {
            label: text("إثبات نصيب الربح", "Recognise share of profit"),
            debit: text("استثمار في شركة زميلة", "Investment in associate"),
            credit: text("نصيب في ربح شركة زميلة", "Share of associate profit"),
            amount: text("360,000", "$360,000"),
          },
          {
            label: text("استلام التوزيعات", "Receive dividends"),
            debit: text("نقدية", "Cash"),
            credit: text("استثمار في شركة زميلة", "Investment in associate"),
            amount: text("90,000", "$90,000"),
          },
        ],
        reference: "IAS 28.10–11",
      },
    ],
  },
  "IAS 27": {
    sections: [
      {
        title: text(
          "ما المقصود بالقوائم المالية المنفصلة؟",
          "What are separate financial statements?",
        ),
        explanation: text(
          "القوائم المنفصلة تعرض المنشأة المستثمرة بذاتها، فلا تجمع أصول والتزامات الشركات التابعة بندًا ببند ولا تطبق تلقائيًا طريقة حقوق الملكية على الشركات الزميلة والمشروعات المشتركة. وهي تختلف عن القوائم الموحدة، وقد تُعرض بالإضافة إليها أو بوصفها القوائم الوحيدة في حالات الإعفاء المحددة. وجود استثمار عادي خاضع لـIFRS 9 وحده لا يحول القوائم إلى قوائم منفصلة بمفهوم IAS 27.",
          "Separate financial statements present the investing entity itself: they do not combine a subsidiary's assets and liabilities line by line and do not automatically equity-account associates and joint ventures. They differ from consolidated statements and may accompany them or, in specified exemption cases, be the entity's only statements. Merely holding an ordinary IFRS 9 investment does not make financial statements 'separate' under IAS 27.",
        ),
        keyPoints: [
          text(
            "IFRS 10 يحدد متى يلزم التجميع، بينما IAS 27 يحدد محاسبة الاستثمارات في القوائم المنفصلة.",
            "IFRS 10 determines when consolidation is required; IAS 27 governs investments in separate statements.",
          ),
          text(
            "القوائم المنفصلة لا تعني قوائم غير ممتثلة لبقية معايير IFRS.",
            "Separate statements still comply with all other applicable IFRS requirements.",
          ),
          text(
            "المنشأة الاستثمارية التي تقيس تابعاتها بالقيمة العادلة قد تعرض قوائم منفصلة بوصفها قوائمها الوحيدة.",
            "An investment entity measuring subsidiaries at fair value may present separate statements as its only statements.",
          ),
        ],
        reference: "IAS 27.1–9",
      },
      {
        title: text(
          "ثلاثة أسس للقياس واختيار متسق",
          "Three measurement bases and a consistent choice",
        ),
        explanation: text(
          "تختار المنشأة لكل فئة من الاستثمارات في الشركات التابعة أو المشروعات المشتركة أو الشركات الزميلة القياس بالتكلفة، أو وفق IFRS 9، أو بطريقة حقوق الملكية كما يصفها IAS 28. يجب تطبيق الأساس نفسه على جميع الاستثمارات داخل الفئة الواحدة؛ فلا يجوز انتقاء القياس أصلًا بأصل لتحقيق نتيجة مرغوبة. وإذا صُنّف استثمار مقاس بالتكلفة أو بطريقة حقوق الملكية كمحتفظ به للبيع، تطبق عليه متطلبات IFRS 5.",
          "For each category of investments in subsidiaries, joint ventures or associates, an entity chooses cost, IFRS 9 measurement, or the IAS 28 equity method. The same basis is applied to all investments in a category; asset-by-asset selection to engineer an outcome is not permitted. An investment measured at cost or under the equity method applies IFRS 5 when classified as held for sale.",
        ),
        keyPoints: [
          text(
            "وثّق السياسة لكل فئة: تابعات، مشروعات مشتركة، وشركات زميلة.",
            "Document the policy for each category: subsidiaries, joint ventures and associates.",
          ),
          text(
            "اختيار IFRS 9 يجلب قواعد التصنيف والقياس والانخفاض ذات الصلة.",
            "Choosing IFRS 9 brings its relevant classification, measurement and impairment rules.",
          ),
          text(
            "الاستثمارات التي يقيسها كيان استثماري بالقيمة العادلة تظل كذلك في قوائمه المنفصلة.",
            "Investments measured at fair value by an investment entity remain so in its separate statements.",
          ),
        ],
        reference: "IAS 27.10–11A",
      },
      {
        title: text(
          "التوزيعات وإعادة التنظيم والإفصاح",
          "Dividends, reorganisations and disclosure",
        ),
        explanation: text(
          "عند استخدام التكلفة أو IFRS 9 يُعترف بالتوزيع من التابعة أو الزميلة أو المشروع المشترك في الربح أو الخسارة عندما يثبت الحق في استلامه، ما لم تفرض قاعدة أخرى معالجة مختلفة. أما تحت طريقة حقوق الملكية فيخفض التوزيع رصيد الاستثمار. وتشرح الإيضاحات أن القوائم منفصلة، وأسباب إعدادها عند وجود إعفاء، وقائمة الاستثمارات الجوهرية وسياسة المحاسبة المطبقة على كل فئة.",
          "Under cost or IFRS 9, a dividend from a subsidiary, associate or joint venture is recognised in profit or loss when the right to receive it is established, unless another requirement dictates otherwise. Under the equity method, the distribution reduces the investment. Notes identify the statements as separate, explain any exemption relied on, list material investments and describe the accounting policy for each category.",
        ),
        keyPoints: [
          text(
            "لا تخلط بين دخل التوزيع ونصيب الربح المعترف به سابقًا بطريقة حقوق الملكية.",
            "Do not confuse dividend income with profit already recognised under the equity method.",
          ),
          text(
            "افحص مؤشرات الانخفاض في الاستثمار المقاس بالتكلفة وفق المتطلبات ذات الصلة.",
            "Assess impairment indicators for a cost-measured investment under the relevant requirements.",
          ),
          text(
            "الإفصاح يربط اسم المستثمر فيه ومقره ونسبة الملكية وطريقة القياس.",
            "Disclosure connects the investee, domicile, ownership interest and measurement basis.",
          ),
        ],
        reference: "IAS 27.12, 15–17",
      },
    ],
    workedExamples: [
      {
        title: text(
          "التكلفة مقابل طريقة حقوق الملكية في القوائم المنفصلة",
          "Cost versus equity method in separate statements",
        ),
        facts: text(
          "اشترت شركة أم 80% من شركة تابعة مقابل 5,000,000. حققت التابعة بعد الاستحواذ ربحًا 900,000 ووزعت 200,000. لا توجد فروق قيمة عادلة أو انخفاض، وتعرض الأم أثر سياستي التكلفة وحقوق الملكية للمقارنة.",
          "A parent buys 80% of a subsidiary for $5,000,000. After acquisition the subsidiary earns $900,000 and pays $200,000 dividends. There are no fair-value differences or impairment, and the parent compares cost and equity-method policies.",
        ),
        calculations: [
          text(
            "وفق التكلفة: يبقى الاستثمار 5,000,000، ويثبت دخل توزيعات 160,000 = 200,000 × 80%.",
            "Under cost: the investment remains $5,000,000 and dividend income is $160,000 = $200,000 × 80%.",
          ),
          text(
            "وفق حقوق الملكية: نصيب الربح 720,000 = 900,000 × 80%، والتوزيعات 160,000 تخفض الاستثمار.",
            "Under the equity method: profit share is $720,000 = $900,000 × 80%, and $160,000 dividends reduce the investment.",
          ),
          text(
            "رصيد الاستثمار بطريقة حقوق الملكية = 5,000,000 + 720,000 − 160,000 = 5,560,000.",
            "Equity-method carrying amount = $5,000,000 + $720,000 − $160,000 = $5,560,000.",
          ),
        ],
        conclusion: text(
          "السياسة المختارة تغيّر توقيت ومكان ظهور العائد، ويجب تطبيقها باتساق على فئة الشركات التابعة.",
          "The selected policy changes the timing and location of reported returns and must be applied consistently to the subsidiary category.",
        ),
        journalEntries: [
          {
            label: text("التوزيع وفق نموذج التكلفة", "Dividend under the cost model"),
            debit: text("نقدية / توزيعات مستحقة", "Cash / dividend receivable"),
            credit: text("دخل توزيعات", "Dividend income"),
            amount: text("160,000", "$160,000"),
          },
          {
            label: text("نصيب الربح بطريقة حقوق الملكية", "Profit share under the equity method"),
            debit: text("استثمار في شركة تابعة", "Investment in subsidiary"),
            credit: text("نصيب في ربح الشركة التابعة", "Share of subsidiary profit"),
            amount: text("720,000", "$720,000"),
          },
        ],
        reference: "IAS 27.10, 12; IAS 28.10–11",
      },
    ],
  },
  "IAS 21": {
    sections: [
      {
        title: text(
          "العملة الوظيفية قبل عملة العرض",
          "Functional currency before presentation currency",
        ),
        explanation: text(
          "العملة الوظيفية هي عملة البيئة الاقتصادية الأساسية التي تولد فيها المنشأة النقد وتنفقه، ويحددها جوهر عوامل التسعير والتكاليف والتمويل لا رغبة الإدارة في شكل التقرير. أما عملة العرض فيمكن أن تكون أي عملة تختارها المنشأة. تحديد العملة الوظيفية قرار تأسيسي؛ لأنه يحدد ما يعد معاملة أجنبية وكيف تقاس فروق الصرف لاحقًا.",
          "Functional currency is the currency of the primary economic environment in which an entity generates and spends cash. It follows pricing, cost and financing substance rather than management's preferred reporting format. Presentation currency may be any selected currency. Functional-currency determination is foundational because it decides what is a foreign-currency transaction and how later exchange differences are measured.",
        ),
        keyPoints: [
          text(
            "ابدأ بعملة أسعار المبيعات والعمل المؤثرة في تلك الأسعار.",
            "Start with the currency influencing sales prices and the competitive environment.",
          ),
          text(
            "افحص عملة تكاليف العمل والمواد والتكاليف الأخرى، ثم عوامل التمويل والاحتفاظ بالمتحصلات.",
            "Assess the currency of labour, materials and other costs, then financing and receipts-retention factors.",
          ),
          text(
            "لا تتغير العملة الوظيفية إلا إذا تغيرت المعاملات والأحداث والظروف الأساسية.",
            "Functional currency changes only when underlying transactions, events and conditions change.",
          ),
        ],
        reference: "IAS 21.8–14",
      },
      {
        title: text(
          "المعاملات الأجنبية: نقدي أم غير نقدي؟",
          "Foreign transactions: monetary or non-monetary?",
        ),
        explanation: text(
          "تثبت المعاملة أولًا بسعر الصرف الفوري في تاريخها، ويجوز استخدام متوسط مناسب إذا كان تقريبًا معقولًا. في نهاية الفترة تترجم البنود النقدية بالسعر الختامي وتذهب الفروق عادة إلى الربح أو الخسارة. أما البند غير النقدي بالتكلفة التاريخية فيبقى بسعر تاريخ المعاملة، والبند غير النقدي بالقيمة العادلة يستخدم سعر تاريخ قياس القيمة العادلة ويتبع فرق الصرف مكان الاعتراف بمكسب أو خسارة القياس الأصلية.",
          "A transaction is initially recorded at the spot rate on its date, with a suitable average permitted as a reasonable approximation. At period end monetary items use the closing rate and differences normally go to profit or loss. A historical-cost non-monetary item keeps the transaction-date rate; a fair-value non-monetary item uses the rate when fair value was measured, with the exchange component following the location of the underlying valuation gain or loss.",
        ),
        keyPoints: [
          text(
            "النقدي هو حق في استلام أو التزام بتسليم عدد ثابت أو قابل للتحديد من وحدات العملة.",
            "A monetary item is a right to receive or obligation to deliver a fixed or determinable number of currency units.",
          ),
          text(
            "المخزون والأصول الثابتة بالتكلفة بنود غير نقدية؛ الذمم المدينة والدائنة نقدية.",
            "Cost-based inventory and PPE are non-monetary; receivables and payables are monetary.",
          ),
          text(
            "سداد البند النقدي يولد فرق صرف بين سعر الإثبات أو آخر ترجمة وسعر السداد.",
            "Settlement of a monetary item creates an exchange difference between its recognition or last-translation rate and settlement rate.",
          ),
        ],
        reference: "IAS 21.20–37",
      },
      {
        title: text(
          "ترجمة العمليات الأجنبية وصافي الاستثمار",
          "Foreign operations and net investment",
        ),
        explanation: text(
          "عند ترجمة عملية أجنبية إلى عملة عرض المجموعة، تترجم الأصول والالتزامات بالسعر الختامي، والإيرادات والمصروفات بأسعار تواريخ المعاملات أو متوسط مناسب، وتثبت فروق الترجمة في الدخل الشامل الآخر حتى التخلص من العملية وفق الشروط. ويعامل البند النقدي الذي لا يُخطط لسداده ولا يرجح سداده مستقبلًا قريبًا كجزء من صافي الاستثمار في القوائم الموحدة، مع بقاء فرق الصرف في الربح أو الخسارة بالقوائم المنفصلة.",
          "When translating a foreign operation into the group's presentation currency, assets and liabilities use the closing rate, income and expenses use transaction-date rates or a suitable average, and translation differences remain in OCI until disposal under the applicable conditions. A monetary item whose settlement is neither planned nor likely in the foreseeable future may form part of the net investment in consolidated statements, although its exchange difference remains in profit or loss in separate statements.",
        ),
        keyPoints: [
          text(
            "تترجم الشهرة وتعديلات القيمة العادلة للعملية الأجنبية كأصول والتزامات لها بالسعر الختامي.",
            "Goodwill and fair-value adjustments of a foreign operation are translated as its assets and liabilities at the closing rate.",
          ),
          text(
            "يُجمع فرق الترجمة العائد لحقوق غير المسيطرين ضمن رصيدهم.",
            "Translation differences attributable to NCI are accumulated in the NCI balance.",
          ),
          text(
            "التخلص الكامل أو الجزئي المحدد قد يؤدي إلى إعادة تصنيف فرق الترجمة المتراكم.",
            "A qualifying full or partial disposal may reclassify accumulated translation differences.",
          ),
        ],
        reference: "IAS 21.32–33, 38–49",
      },
      {
        title: text(
          "غياب قابلية التحويل: متطلبات سارية منذ 2025",
          "Lack of exchangeability: requirements effective since 2025",
        ),
        explanation: text(
          "من الفترات السنوية التي تبدأ في أو بعد 1 يناير 2025، تختبر المنشأة هل تستطيع الحصول على العملة الأخرى خلال إطار زمني يسمح بالتأخير الإداري الطبيعي ومن خلال سوق أو آلية تنشئ حقوقًا والتزامات واجبة النفاذ. إذا لم تكن العملة قابلة للتحويل لغرض القياس المحدد، تقدر المنشأة سعرًا فوريًا يحقق هدف إظهار السعر الذي كانت ستتم به معاملة تبادل منظمة بين مشاركين في السوق في تاريخ القياس، وتقدم إفصاحات عن طبيعة المشكلة ومخاطرها ومنهج التقدير.",
          "For annual periods beginning on or after 1 January 2025, an entity assesses whether it can obtain the other currency within a time frame allowing normal administrative delay through a market or mechanism that creates enforceable rights and obligations. If a currency is not exchangeable for the specified measurement purpose, the entity estimates a spot rate aimed at the rate for an orderly exchange transaction between market participants at the measurement date and discloses the nature, risks and estimation method.",
        ),
        keyPoints: [
          text(
            "قابلية التحويل تُقيّم في تاريخ القياس ولغرض محدد، وليست وصفًا دائمًا للعملة.",
            "Exchangeability is assessed at a measurement date for a specified purpose, not as a permanent currency label.",
          ),
          text(
            "يمكن استخدام سعر قابل للملاحظة دون تعديل أو تقنية تقدير أخرى إذا حقق هدف التقدير.",
            "An observable rate without adjustment or another estimation technique may be used if it meets the objective.",
          ),
          text(
            "الإفصاح يمكّن المستخدم من فهم كيفية تأثير غياب التحويل في الأداء والمركز والتدفقات.",
            "Disclosure enables users to understand how lack of exchangeability affects performance, position and cash flows.",
          ),
        ],
        reference: "IAS 21.8A–8B, 19A, 57A–57B, Appendix A",
      },
    ],
    workedExamples: [
      {
        title: text(
          "شراء عقار بالروبية وتسوية الجزء المؤجل",
          "Rupee property purchase and deferred settlement",
        ),
        facts: text(
          "عملتها الوظيفية اليورو، اشترت Europe Co عقارًا في 18 أغسطس بمبلغ 220 مليون روبية. دفعت 200 مليون فورًا وبقي 20 مليون حتى 31 أكتوبر. الأسعار: 85 روبية لليورو عند الشراء، و87 عند السداد، و88 في 31 ديسمبر. لم تختلف القيمة العادلة للعقار جوهريًا عن قيمته الدفترية.",
          "Europe Co's functional currency is the euro. On 18 August it buys a property for INR220 million, paying INR200 million immediately and INR20 million on 31 October. Rates are INR85/€ at purchase, INR87/€ at settlement and INR88/€ at year end. The property's fair value is not materially different from carrying amount.",
        ),
        calculations: [
          text(
            "تكلفة العقار = 220,000,000 ÷ 85 = 2,588,235 يورو تقريبًا.",
            "Property cost = INR220,000,000 ÷ 85 = approximately €2,588,235.",
          ),
          text(
            "النقد المدفوع فورًا = 200,000,000 ÷ 85 = 2,352,941 يورو؛ والدائن الأولي = 235,294 يورو.",
            "Immediate cash = INR200,000,000 ÷ 85 = €2,352,941; initial payable = €235,294.",
          ),
          text(
            "مبلغ السداد = 20,000,000 ÷ 87 = 229,885 يورو؛ مكسب الصرف = 235,294 − 229,885 = 5,409 يورو تقريبًا.",
            "Settlement = INR20,000,000 ÷ 87 = €229,885; exchange gain = €235,294 − €229,885 = approximately €5,409.",
          ),
          text(
            "العقار بند غير نقدي بالتكلفة، فيبقى بسعر 18 أغسطس ما لم يجر قياس قيمة عادلة جديد.",
            "The property is a historical-cost non-monetary item and retains the 18 August rate unless a new fair-value measurement is made.",
          ),
        ],
        conclusion: text(
          "يثبت مكسب الصرف عند تسوية الدائن، ولا يعاد ترجمة تكلفة العقار بالسعر الختامي لمجرد تغير سعر العملة.",
          "The exchange gain is recognised when the payable is settled; the property's cost is not retranslated at the closing rate merely because the currency moved.",
        ),
        journalEntries: [
          {
            label: text("إثبات الشراء", "Record the purchase"),
            debit: text("عقار", "Property"),
            credit: text("نقدية 2,352,941 + دائن 235,294", "Cash €2,352,941 + payable €235,294"),
            amount: text("2,588,235 يورو", "€2,588,235"),
          },
          {
            label: text("سداد الدائن", "Settle the payable"),
            debit: text("دائن 235,294", "Payable €235,294"),
            credit: text("نقدية 229,885 + مكسب صرف 5,409", "Cash €229,885 + exchange gain €5,409"),
            amount: text("235,294 يورو", "€235,294"),
          },
        ],
        reference: "IAS 21.21–23, 28",
      },
    ],
  },
  "IAS 29": {
    sections: [
      {
        title: text(
          "متى تصبح البيئة مفرطة التضخم؟",
          "When does an economy become hyperinflationary?",
        ),
        explanation: text(
          "لا يضع IAS 29 نسبة واحدة فاصلة، بل يتطلب حكمًا مبنيًا على خصائص البيئة الاقتصادية: تفضيل الاحتفاظ بالثروة في أصول غير نقدية أو عملة مستقرة، تسعير الائتمان بما يعوض فقد القوة الشرائية، ربط الأسعار بمؤشر، واتجاه معدل التضخم التراكمي لثلاث سنوات إلى 100% أو تجاوزه. يفضل أن تبدأ جميع المنشآت ذات العملة الوظيفية نفسها التطبيق في التاريخ ذاته.",
          "IAS 29 sets no single bright-line rate. Judgement considers characteristics such as holding wealth in non-monetary assets or stable currency, credit pricing that compensates for purchasing-power loss, index-linked prices, and three-year cumulative inflation approaching or exceeding 100%. Entities with the same functional currency should preferably begin applying the Standard at the same date.",
        ),
        keyPoints: [
          text(
            "مؤشر 100% خلال ثلاث سنوات علامة مهمة وليس تعريفًا آليًا وحيدًا.",
            "The 100% three-year indicator is important but not the sole automatic definition.",
          ),
          text(
            "التطبيق يعتمد على العملة الوظيفية لا موقع تسجيل الشركة فقط.",
            "Application follows functional currency, not merely the entity's place of registration.",
          ),
          text(
            "لا تعرض قوائم غير معدلة ثم تجعل إعادة البيان ملحقًا اختياريًا.",
            "Do not present unrestated statements with restatement as an optional supplement.",
          ),
        ],
        reference: "IAS 29.1–7",
      },
      {
        title: text(
          "إعادة البيان بوحدة القياس الجارية",
          "Restatement into the current measuring unit",
        ),
        explanation: text(
          "تعاد القوائم، بما فيها المقارنات، إلى وحدة القياس الجارية في نهاية الفترة باستخدام مؤشر أسعار عام يعكس تغير القوة الشرائية. البنود النقدية لا تعاد لأنها معبر عنها أصلًا بوحدات نقدية جارية، بينما تعاد البنود غير النقدية بالتكلفة وحقوق الملكية والإيرادات والمصروفات من تواريخ نشأتها. البنود غير النقدية المعروضة أصلًا بقيمة جارية في نهاية الفترة لا يعاد تعديلها مرة أخرى.",
          "Financial statements, including comparatives, are restated into the measuring unit current at period end using a general price index reflecting purchasing-power changes. Monetary items are not restated because they are already expressed in current monetary units; historical-cost non-monetary items, equity, income and expenses are restated from their recognition dates. Non-monetary items already carried at a current period-end amount are not adjusted again.",
        ),
        keyPoints: [
          text(
            "حدد تاريخ نشأة كل رصيد غير نقدي ومؤشر ذلك التاريخ.",
            "Identify each non-monetary balance's recognition date and corresponding index.",
          ),
          text(
            "اخفض المبلغ المعاد إذا تجاوز قيمته القابلة للاسترداد أو صافي قيمته القابلة للتحقق.",
            "Reduce a restated amount if it exceeds recoverable amount or net realisable value.",
          ),
          text(
            "أعد بيان قائمة الربح أو الخسارة من تواريخ تسجيل الدخل والمصروف.",
            "Restate profit-or-loss items from the dates income and expenses were recorded.",
          ),
        ],
        reference: "IAS 29.8, 11–27",
      },
      {
        title: text("مكسب أو خسارة المركز النقدي", "Gain or loss on the net monetary position"),
        explanation: text(
          "في التضخم تفقد الأصول النقدية الصافية قوة شرائية فتولد خسارة، بينما تحقق الالتزامات النقدية الصافية مكسبًا اقتصاديًا لأن السداد يتم بوحدات أقل قوة شرائية. يحسب الأثر من تغير المؤشر المطبق على المتوسط المرجح للفروق بين الأصول والالتزامات النقدية خلال الفترة، ويثبت في الربح أو الخسارة ويُفصح عنه منفصلًا.",
          "In inflation, a net monetary asset position loses purchasing power, while a net monetary liability position creates an economic gain because repayment uses units with lower purchasing power. The effect is derived from index changes applied to the weighted exposure between monetary assets and liabilities through the period, recognised in profit or loss and separately disclosed.",
        ),
        keyPoints: [
          text(
            "الرصيد الختامي وحده قد لا يمثل التعرض إذا تحركت الأرصدة خلال السنة.",
            "The closing balance alone may misstate exposure when balances changed during the year.",
          ),
          text(
            "يمكن التحقق التقريبي من المكسب أو الخسارة باستخدام متوسط صافي المركز النقدي.",
            "An approximate check can use the average net monetary position.",
          ),
          text(
            "اعرض أثر صافي المركز النقدي منفصلًا حتى يفهم المستخدم مصدره.",
            "Present the net monetary effect separately so users understand its source.",
          ),
        ],
        reference: "IAS 29.9, 27–28",
      },
      {
        title: text(
          "أول تطبيق وترجمة عملية أجنبية",
          "First application and translation of a foreign operation",
        ),
        explanation: text(
          "عند أول تطبيق تُعامل المنشأة الاقتصاد كما لو كان دائمًا مفرط التضخم لأغراض إعادة بيان أرصدة الافتتاح وفق IFRIC 7، مع معالجة الضريبة المؤجلة بعد إعادة البيان. وإذا كانت العملية الأجنبية ذات عملة وظيفية مفرطة التضخم، تعيد قوائمها أولًا وفق IAS 29 ثم تترجم جميع المبالغ إلى عملة العرض بالسعر الختامي وفق IAS 21.",
          "On first application, IFRIC 7 applies the restatement approach as if the economy had always been hyperinflationary for opening balances, with deferred tax considered after restatement. A foreign operation with a hyperinflationary functional currency first restates under IAS 29 and then translates all amounts into the presentation currency at the closing rate under IAS 21.",
        ),
        keyPoints: [
          text(
            "رتّب العمل: إعادة بيان IAS 29 أولًا، ثم ترجمة IAS 21.",
            "Sequence the work: IAS 29 restatement first, IAS 21 translation second.",
          ),
          text(
            "عند توقف التضخم المفرط تصبح مبالغ نهاية آخر فترة مطبقة أساس القيم الدفترية اللاحقة.",
            "When hyperinflation ceases, amounts at the end of the last applied period become the basis for later carrying amounts.",
          ),
          text(
            "اكشف المؤشر المستخدم ومستواه وحركة الفترة وطبيعة أساس القياس.",
            "Disclose the index used, its level and movement, and the measurement basis.",
          ),
        ],
        reference: "IAS 29.34–41; IAS 21.42–43",
      },
    ],
    workedExamples: [
      {
        title: text(
          "أصل غير نقدي ومركز نقدي صافٍ في سنة تضخم",
          "A non-monetary asset and net monetary position in an inflationary year",
        ),
        facts: text(
          "في 1 يناير كان مؤشر الأسعار 100، واشترت منشأة معدات بمبلغ 1,000. احتفظت طوال السنة تقريبًا بنقد 200 والتزام نقدي 500. بلغ المؤشر 160 في 31 ديسمبر، ولا توجد حركات جوهرية أخرى.",
          "On 1 January the price index is 100 and an entity buys equipment for $1,000. Throughout the year it holds approximately $200 cash and a $500 monetary liability. The index is 160 at 31 December, with no other significant movements.",
        ),
        calculations: [
          text("معامل إعادة البيان = 160 ÷ 100 = 1.60.", "Restatement factor = 160 ÷ 100 = 1.60."),
          text(
            "المعدات المعاد بيانها = 1,000 × 1.60 = 1,600.",
            "Restated equipment = $1,000 × 1.60 = $1,600.",
          ),
          text(
            "النقد والالتزام لا يعاد بيانهما؛ صافي الالتزام النقدي = 500 − 200 = 300.",
            "Cash and the liability are not restated; net monetary liability = $500 − $200 = $300.",
          ),
          text(
            "مع ثبات التعرض طوال السنة، مكسب القوة الشرائية التقريبي = 300 × 60% = 180.",
            "If exposure is constant through the year, the approximate purchasing-power gain = $300 × 60% = $180.",
          ),
        ],
        conclusion: text(
          "يزداد الأصل غير النقدي إلى وحدة القياس الجارية، ويظهر مكسب مستقل لأن المنشأة كانت ممولة بصافي التزامات نقدية أثناء التضخم.",
          "The non-monetary asset is updated to the current measuring unit, and a separate gain arises because the entity was financed by net monetary liabilities during inflation.",
        ),
        journalEntries: [],
        reference: "IAS 29.11–27",
      },
    ],
  },
  "IAS 7": {
    sections: [
      {
        title: text(
          "خريطة التدفقات النقدية والنقد المعادل",
          "Mapping cash flows and cash equivalents",
        ),
        explanation: text(
          "تشرح قائمة التدفقات النقدية كيف انتقل رصيد النقد والنقد المعادل من أول الفترة إلى آخرها. النقد يشمل النقد بالصندوق والودائع تحت الطلب، أما النقد المعادل فهو استثمار قصير الأجل عالي السيولة يمكن تحويله بسهولة إلى مبلغ نقدي معلوم ويتعرض لمخاطر ضئيلة في تغير القيمة. الغرض منه مقابلة الالتزامات النقدية القصيرة لا الاستثمار أو تحقيق العائد؛ لذلك يكون الاستحقاق الأصلي لثلاثة أشهر أو أقل مؤشرًا عمليًا مهمًا وليس اختبارًا منفردًا يكفي بذاته. تُقسم الحركة إلى تشغيل واستثمار وتمويل بحسب طبيعة المنشأة والغرض الاقتصادي للتدفق.",
          "The statement of cash flows explains how cash and cash equivalents moved from the beginning to the end of the period. Cash comprises cash on hand and demand deposits; a cash equivalent is a short-term, highly liquid investment readily convertible to a known amount of cash and subject to insignificant value-change risk. Its purpose is to meet short-term cash commitments rather than investment or return, so an original maturity of three months or less is an important practical indicator, not a stand-alone test. Movements are classified as operating, investing or financing according to the entity's business and the economic purpose of the flow.",
        ),
        keyPoints: [
          text(
            "التشغيل هو النشاط الرئيسي المولد للإيراد وما لا يدخل بوضوح ضمن الاستثمار أو التمويل.",
            "Operating activities are the principal revenue-producing activities and items not clearly investing or financing.",
          ),
          text(
            "الاستثمار يتعلق بشراء وبيع الأصول طويلة الأجل والاستثمارات غير المصنفة نقدًا معادلًا.",
            "Investing relates to acquiring and disposing of long-term assets and investments not classified as cash equivalents.",
          ),
          text(
            "التمويل يغير حجم أو تكوين حقوق الملكية والاقتراض، مثل إصدار أسهم أو سداد أصل قرض.",
            "Financing changes the size or composition of equity and borrowings, such as issuing shares or repaying loan principal.",
          ),
        ],
        reference: "IAS 7.6–17",
      },
      {
        title: text(
          "التدفقات التشغيلية: الطريقة المباشرة وغير المباشرة",
          "Operating cash flows: direct and indirect methods",
        ),
        explanation: text(
          "يمكن عرض التدفقات التشغيلية بالطريقة المباشرة، فتظهر الفئات الرئيسية للمتحصلات والمدفوعات النقدية الإجمالية، أو بالطريقة غير المباشرة، فتبدأ من الربح أو الخسارة وتزيل آثار البنود غير النقدية والاستحقاقات والتأجيلات والبنود التي تنتمي لتدفقات الاستثمار أو التمويل. يشجع IAS 7 الطريقة المباشرة لأنها تقدم معلومات تساعد في تقدير التدفقات المستقبلية، لكن الطريقتين مقبولتان. في الطريقة غير المباشرة لا تُعامل زيادة المخزون أو المدينين على أنها مصروف جديد؛ بل تعديل يربط الربح المحاسبي بالنقد الناتج من التشغيل.",
          "Operating cash flows may be presented using the direct method, showing major classes of gross cash receipts and payments, or the indirect method, starting from profit or loss and removing non-cash items, accruals, deferrals and items whose cash effects belong to investing or financing. IAS 7 encourages the direct method because it provides information useful in estimating future cash flows, although both methods are permitted. Under the indirect method, increases in inventory or receivables are not new expenses; they are reconciliation adjustments from accounting profit to operating cash.",
        ),
        keyPoints: [
          text(
            "ابدأ من رقم الربح الذي تستخدمه المنشأة ثم افصل منه آثار الاستثمار والتمويل بصورة متسقة.",
            "Start from the entity's chosen profit measure and consistently separate investing and financing effects.",
          ),
          text(
            "أضف المصروفات غير النقدية مثل الإهلاك، واعكس الأرباح أو الخسائر التي يرد تدفقها النقدي في قسم آخر.",
            "Add back non-cash expenses such as depreciation and reverse gains or losses whose cash flow appears elsewhere.",
          ),
          text(
            "زيادة أصل تشغيلي تخفض النقد التشغيلي عادة، وزيادة التزام تشغيلي ترفعه عادة.",
            "An increase in an operating asset normally reduces operating cash; an increase in an operating liability normally increases it.",
          ),
        ],
        reference: "IAS 7.18–20",
      },
      {
        title: text(
          "الفوائد والتوزيعات والضرائب والعملات والبنود غير النقدية",
          "Interest, dividends, tax, foreign currency and non-cash items",
        ),
        explanation: text(
          "تُعرض الفوائد والتوزيعات المقبوضة والمدفوعة كل فئة على حدة، ويُختار لها تصنيف تشغيلي أو استثماري أو تمويلي بحسب البدائل التي يسمح بها المعيار وطبيعة المنشأة، مع الثبات من فترة لأخرى. تُصنف ضرائب الدخل عادة تشغيلية إلا إذا أمكن ربطها تحديدًا باستثمار أو تمويل. تُترجم تدفقات العملة الأجنبية بسعر تاريخ التدفق، ويمكن استخدام متوسط يقارب السعر الفعلي، بينما أثر تغير سعر الصرف على النقد المحتفظ به لا يعد تدفقًا ويعرض منفصلًا للمصالحة. معاملات مثل شراء أصل بإصدار أسهم أو عقد إيجار دون دفعة نقدية تستبعد من القائمة وتفصح في موضع آخر.",
          "Interest and dividends received and paid are each disclosed separately and classified consistently from period to period as operating, investing or financing within the alternatives permitted by the Standard and the entity's circumstances. Income taxes are normally operating unless specifically identifiable with investing or financing. Foreign-currency cash flows are translated at the rate on the cash-flow date; a representative average may be used, while exchange effects on cash held are not cash flows and are shown separately in the reconciliation. Transactions such as acquiring an asset by issuing shares or entering a lease with no cash payment are excluded from the statement and disclosed elsewhere.",
        ),
        keyPoints: [
          text(
            "لا تغيّر تصنيف الفائدة أو التوزيعات بهدف تجميل التدفق التشغيلي بين الفترات.",
            "Do not change interest or dividend classification to improve operating cash flow between periods.",
          ),
          text(
            "اعرض التدفقات على أساس إجمالي إلا في الحالات المحدودة التي يسمح فيها بالصافي.",
            "Present cash flows gross except in the limited circumstances in which net presentation is permitted.",
          ),
          text(
            "افصل المعاملة غير النقدية عن أي دفعة نقدية لاحقة مرتبطة بها.",
            "Separate a non-cash transaction from any later cash payment related to it.",
          ),
        ],
        reference: "IAS 7.21–24, 28, 31–37, 43–44",
      },
      {
        title: text(
          "مصالحة التمويل وترتيبات تمويل الموردين",
          "Financing reconciliation and supplier finance arrangements",
        ),
        explanation: text(
          "يلزم الإفصاح عن التغيرات في الالتزامات الناتجة عن أنشطة التمويل، بما يفصل التغير النقدي عن الاستحواذات وفروق العملة والقيمة العادلة وغيرها من التغيرات غير النقدية. كما تتطلب تعديلات ترتيبات تمويل الموردين معلومات تمكن المستخدم من فهم أثر هذه الترتيبات على الالتزامات والتدفقات ومخاطر السيولة: شروط الترتيب، القيم الدفترية ومكان عرض الالتزامات، الجزء الذي سدده مقدمو التمويل للموردين، نطاق آجال السداد مقارنة بالدائنين التجاريين غير المشمولين، والتغيرات غير النقدية. لا يكفي نقل مبلغ من الدائنين إلى الاقتراض دون شرح طبيعة الترتيب.",
          "An entity discloses changes in liabilities arising from financing activities, distinguishing cash changes from acquisitions, foreign-exchange effects, fair-value movements and other non-cash changes. Supplier-finance amendments also require information enabling users to understand effects on liabilities, cash flows and liquidity risk: arrangement terms, carrying amounts and statement line items, amounts for which finance providers have already paid suppliers, ranges of payment due dates compared with comparable trade payables outside the arrangements, and non-cash changes. Merely reclassifying an amount from trade payables to borrowings does not explain the arrangement's substance.",
        ),
        keyPoints: [
          text(
            "أنشئ حركة افتتاحي–نقدي–غير نقدي–ختامي لكل فئة تمويل جوهرية.",
            "Prepare an opening–cash–non-cash–closing roll-forward for each material financing class.",
          ),
          text(
            "قيّم العرض في قائمة المركز المالي والتدفقات وفق الشروط والجوهر، لا اسم المنتج المصرفي.",
            "Assess balance-sheet and cash-flow presentation from terms and substance, not the bank product's label.",
          ),
          text(
            "اربط إفصاح تمويل الموردين بإفصاحات مخاطر السيولة في IFRS 7.",
            "Connect supplier-finance information with IFRS 7 liquidity-risk disclosures.",
          ),
        ],
        reference: "IAS 7.44A–44H",
      },
    ],
    workedExamples: [
      {
        title: text(
          "إعداد التدفق النقدي التشغيلي بالطريقة غير المباشرة",
          "Preparing operating cash flow using the indirect method",
        ),
        facts: text(
          "حققت منشأة ربحًا قبل الضريبة قدره 500,000. يتضمن الربح إهلاكًا 80,000 وربح بيع آلة 20,000 وتكلفة تمويل 30,000. زاد المخزون 40,000، وانخفض العملاء 25,000، وزاد الموردون 15,000. دفعت المنشأة فوائد 30,000 وضريبة دخل 70,000، وتصنف الفائدة المدفوعة تشغيلية بثبات.",
          "An entity reports profit before tax of 500,000, including depreciation of 80,000, a 20,000 gain on disposal of machinery and finance costs of 30,000. Inventory increased by 40,000, receivables decreased by 25,000 and payables increased by 15,000. Interest paid was 30,000 and income tax paid was 70,000; the entity consistently classifies interest paid as operating.",
        ),
        calculations: [
          text(
            "الربح قبل تغير رأس المال العامل = 500,000 + 80,000 − 20,000 + 30,000 = 590,000.",
            "Profit before working-capital changes = 500,000 + 80,000 − 20,000 + 30,000 = 590,000.",
          ),
          text(
            "أثر رأس المال العامل = −40,000 + 25,000 + 15,000 = صفر؛ إذ عوض انخفاض العملاء وزيادة الموردين زيادة المخزون.",
            "Working-capital effect = −40,000 + 25,000 + 15,000 = nil; the receivables fall and payables rise offset the inventory increase.",
          ),
          text(
            "النقد الناتج من العمليات = 590,000؛ وبعد الفائدة والضريبة يصبح صافي التدفق التشغيلي = 590,000 − 30,000 − 70,000 = 490,000.",
            "Cash generated from operations = 590,000; after interest and tax, net operating cash flow = 590,000 − 30,000 − 70,000 = 490,000.",
          ),
          text(
            "متحصل بيع الآلة يعرض كاملًا ضمن الاستثمار؛ وربح البيع 20,000 أزيل من مصالحة التشغيل حتى لا يتكرر أثره.",
            "The full disposal proceeds are shown in investing; the 20,000 gain is removed from the operating reconciliation to prevent double counting.",
          ),
        ],
        conclusion: text(
          "يفصل العرض بين نتيجة الاستحقاق وقدرة النشاط على توليد النقد، مع إبقاء التدفقات الاستثمارية والتمويلية في أقسامها الصحيحة.",
          "The presentation separates accrual profit from operating cash generation while keeping investing and financing cash flows in their proper sections.",
        ),
        journalEntries: [],
        reference: "IAS 7.18–20, 31–35",
      },
    ],
  },
  "IFRS 8": {
    sections: [
      {
        title: text(
          "النطاق ومنهج الإدارة ومتخذ القرار التشغيلي",
          "Scope, management approach and the CODM",
        ),
        explanation: text(
          "يطبق IFRS 8 على القوائم المنفصلة أو الفردية للمنشأة التي تتداول أدوات دينها أو حقوق ملكيتها في سوق عام أو تودع قوائمها بغرض إصدار أدوات في سوق عام، وعلى القوائم الموحدة للمجموعة التي لها شركة أم بهذه الصفات. القطاع التشغيلي مكوّن يزاول أنشطة قد يحقق منها إيرادات ويتحمل عنها مصروفات، وتراجع نتائجه بانتظام جهة متخذ القرار التشغيلي لتخصيص الموارد وتقييم الأداء، وتتوفر عنه معلومات مالية منفصلة. متخذ القرار التشغيلي وظيفة إدارية لا مسمى وظيفيًا ثابتًا، وقد يكون فردًا أو لجنة.",
          "IFRS 8 applies to separate or individual financial statements of an entity whose debt or equity instruments trade in a public market, or that files statements to issue instruments in a public market, and to consolidated statements of a group with such a parent. An operating segment is a component that engages in activities from which it may earn revenue and incur expenses, whose results are regularly reviewed by the chief operating decision maker to allocate resources and assess performance, and for which discrete financial information is available. The CODM is a management function, not a fixed title, and may be a person or committee.",
        ),
        keyPoints: [
          text(
            "ابدأ بالتقارير الداخلية الفعلية التي تصل إلى متخذ القرار، لا بالهيكل القانوني للشركات.",
            "Start with actual internal reports reviewed by the CODM, not the group's legal-company structure.",
          ),
          text(
            "قد يكون نشاط ما قطاعًا قبل أن يحقق إيرادات، مثل عملية ناشئة تراجعها الإدارة منفصلة.",
            "An activity may be a segment before earning revenue, such as a start-up operation reviewed separately.",
          ),
          text(
            "إذا تضمن تقرير واحد قوائم موحدة ومنفصلة للأم، تعرض معلومات القطاعات في القوائم الموحدة فقط.",
            "If one report contains consolidated and parent separate statements, segment information is required only in the consolidated statements.",
          ),
        ],
        reference: "IFRS 8.2–9",
      },
      {
        title: text(
          "تجميع القطاعات وحدود الحكم",
          "Aggregation of segments and limits of judgement",
        ),
        explanation: text(
          "يجوز جمع قطاعين أو أكثر في قطاع تشغيلي واحد فقط إذا كان التجميع متسقًا مع المبدأ الأساسي للمعيار، وكانت للقطاعات خصائص اقتصادية متشابهة، وتشابهت في طبيعة المنتجات والخدمات وعمليات الإنتاج ونوع العميل وطرق التوزيع، وكذلك البيئة التنظيمية حين تكون ملائمة. تشابه هامش الربح في سنة واحدة لا يثبت وحده تشابه الخصائص الاقتصادية طويلة الأجل. ويجب الإفصاح عن الأحكام التي اتخذتها الإدارة عند تطبيق معايير التجميع، بما في ذلك وصف القطاعات المجمعة والمؤشرات التي دعمت التشابه.",
          "Two or more operating segments may be aggregated only when aggregation is consistent with the Standard's core principle, the segments have similar economic characteristics, and they are similar in products and services, production processes, customer type, distribution methods and, when relevant, regulatory environment. Similar profit margins in one year do not by themselves demonstrate similar long-term economic characteristics. Management also discloses judgements made in applying aggregation criteria, including the segments combined and indicators supporting similarity.",
        ),
        keyPoints: [
          text(
            "وثّق التشابه عبر فترة مناسبة، لا عند تاريخ واحد فقط.",
            "Document similarity over an appropriate period, not only at one date.",
          ),
          text(
            "لا تستخدم التجميع لإخفاء قطاع ضعيف الأداء أو مختلف المخاطر.",
            "Do not use aggregation to conceal an underperforming or differently exposed segment.",
          ),
          text(
            "أعد تقييم القطاعات إذا تغيرت التقارير الداخلية أو طريقة تخصيص الموارد.",
            "Reassess segments when internal reporting or resource-allocation processes change.",
          ),
        ],
        reference: "IFRS 8.11–12, 22(aa)",
      },
      {
        title: text("اختبارات 10% وحد تغطية 75%", "The 10% tests and 75% coverage rule"),
        explanation: text(
          "يصبح القطاع قابلًا للتقرير إذا بلغ 10% أو أكثر في أي اختبار: إيراده الداخلي والخارجي من مجموع إيرادات القطاعات؛ أو القيمة المطلقة لربحه أو خسارته مقارنة بالأكبر مطلقًا بين مجموع أرباح القطاعات الرابحة ومجموع خسائر القطاعات الخاسرة؛ أو أصوله من مجموع أصول القطاعات. بعد تحديد القطاعات القابلة للتقرير يجب أن تغطي إيراداتها من العملاء الخارجيين 75% على الأقل من إيرادات المنشأة الخارجية، وإلا تضاف قطاعات حتى بلوغ الحد ولو لم تنجح منفردة في اختبار 10%. يمكن جمع الباقي في «قطاعات أخرى» مع وصف مصادر الإيراد.",
          "A segment becomes reportable if it meets any 10% test: internal plus external revenue against total segment revenue; the absolute amount of profit or loss against the greater absolute total of profitable-segment profits and loss-making-segment losses; or assets against total segment assets. After reportable segments are identified, their external revenue must cover at least 75% of the entity's external revenue; otherwise additional segments are added until the threshold is reached even if they do not individually pass a 10% test. The remainder may be combined as 'all other segments', with revenue sources described.",
        ),
        keyPoints: [
          text(
            "في اختبار الإيراد استخدم الإيراد الخارجي وبين القطاعات، لكن في اختبار 75% استخدم الإيراد الخارجي فقط.",
            "Use external and intersegment revenue for the revenue test, but external revenue only for the 75% coverage test.",
          ),
          text(
            "اختبار الربح أو الخسارة يعتمد القيمة المطلقة والمقام الأكبر؛ لا تصفّر القطاعات الخاسرة.",
            "The profit-or-loss test uses absolute amounts and the larger denominator; do not net loss-making segments to zero.",
          ),
          text(
            "يمكن استمرار عرض قطاع كان قابلًا للتقرير سابقًا إذا ظل مهمًا في تقدير الإدارة.",
            "A previously reportable segment may continue to be shown when management judges it remains significant.",
          ),
        ],
        reference: "IFRS 8.13–19",
      },
      {
        title: text("القياس والإفصاح والمصالحات", "Measurement, disclosures and reconciliations"),
        explanation: text(
          "تعرض المنشأة مقياس الربح أو الخسارة لكل قطاع قابل للتقرير وفق المقياس المقدم إلى متخذ القرار التشغيلي، وتعرض الأصول والالتزامات إذا كانت تقدم له بانتظام. كما تكشف أساس القياس والفروق عن سياسات القوائم، وتُجري مصالحات بين مجموع إيرادات وربح أو خسارة وأصول والتزامات القطاعات وبين أرقام المنشأة. مبالغ الإيراد والمصروف المحددة في الفقرة 23 تفصح إذا كانت داخلة في مقياس الربح الذي يراجعه متخذ القرار أو تقدم إليه بانتظام؛ ولا يعني ذلك نسخ كل بند من قائمة الربح أو الخسارة لكل قطاع. وتضاف إفصاحات على مستوى المنشأة عن المنتجات والخدمات والمناطق الجغرافية والعملاء الرئيسيين متى انطبقت.",
          "The entity reports a profit-or-loss measure for each reportable segment using the measure reported to the CODM, and reports assets and liabilities when regularly provided to the CODM. It explains the measurement basis and differences from financial-statement policies, and reconciles total segment revenue, profit or loss, assets and liabilities to entity amounts. Paragraph 23's specified income and expense amounts are disclosed when included in the segment profit measure reviewed by the CODM or otherwise regularly provided; this does not require copying every income-statement line for every segment. Entity-wide disclosures about products and services, geography and major customers are added when applicable.",
        ),
        keyPoints: [
          text(
            "الإدارة الداخلية تحدد مقياس القطاع، لكن المصالحة تمنع انفصاله عن القوائم المالية.",
            "Internal management reporting determines the segment measure, but reconciliation anchors it to the financial statements.",
          ),
          text(
            "قيّم أهمية معلومات الدخل والمصروف في سياق القوائم ككل، مع مراعاة الطبيعة والحجم وعدم إخفاء المعلومات بالتجميع.",
            "Assess material income and expense information in the context of the financial statements as a whole, considering nature, magnitude and obscuring aggregation.",
          ),
          text(
            "افصح عن الاعتماد على عميل خارجي يساوي 10% أو أكثر من الإيراد دون وجوب تسمية العميل.",
            "Disclose reliance on an external customer representing 10% or more of revenue without necessarily naming the customer.",
          ),
        ],
        reference: "IFRS 8.20–34; IFRIC agenda decision (July 2024, updated January 2026)",
      },
    ],
    workedExamples: [
      {
        title: text("تحديد القطاعات القابلة للتقرير", "Identifying reportable segments"),
        facts: text(
          "تعرض الإدارة أربعة قطاعات: ألف بإيراد إجمالي 500 وربح 80 وأصول 400 وإيراد خارجي 420؛ باء 260 وربح 20 وأصول 180 وإيراد خارجي 230؛ جيم 120 وخسارة 35 وأصول 90 وإيراد خارجي 100؛ دال 70 وربح 5 وأصول 30 وإيراد خارجي 50. لا توجد قطاعات أخرى، والأرقام بالملايين.",
          "Management reviews four segments: A has total revenue 500, profit 80, assets 400 and external revenue 420; B has 260, profit 20, assets 180 and external revenue 230; C has 120, loss 35, assets 90 and external revenue 100; D has 70, profit 5, assets 30 and external revenue 50. There are no other segments; amounts are in millions.",
        ),
        calculations: [
          text(
            "حد الإيراد = 10% × (500 + 260 + 120 + 70) = 95؛ فتنجح ألف وباء وجيم.",
            "Revenue threshold = 10% × (500 + 260 + 120 + 70) = 95; A, B and C pass.",
          ),
          text(
            "مجموع أرباح القطاعات الرابحة = 105، ومجموع الخسائر المطلقة = 35؛ المقام الأكبر 105، وحد الاختبار 10.5. تنجح ألف وباء وجيم بالقيمة المطلقة.",
            "Total profit of profitable segments = 105 and absolute losses = 35; the larger denominator is 105, so the threshold is 10.5. A, B and C pass on an absolute basis.",
          ),
          text(
            "حد الأصول = 10% × 700 = 70؛ فتنجح ألف وباء وجيم أيضًا، بينما لا ينجح دال في أي اختبار.",
            "Asset threshold = 10% × 700 = 70; A, B and C also pass, while D passes none of the tests.",
          ),
          text(
            "تغطية الإيراد الخارجي للقطاعات ألف وباء وجيم = (420 + 230 + 100) ÷ 800 = 93.75%، أعلى من 75%؛ فلا يلزم إضافة دال.",
            "External-revenue coverage for A, B and C = (420 + 230 + 100) ÷ 800 = 93.75%, above 75%; D need not be added.",
          ),
        ],
        conclusion: text(
          "تعرض ألف وباء وجيم كقطاعات قابلة للتقرير، ويمكن إدراج دال ضمن «القطاعات الأخرى» مع وصف مصادر إيراده ومصالحة المجاميع.",
          "A, B and C are reportable; D may be included in 'all other segments', with its revenue sources described and totals reconciled.",
        ),
        journalEntries: [],
        reference: "IFRS 8.13–16",
      },
    ],
  },
  "IAS 24": {
    sections: [
      {
        title: text(
          "لماذا نكشف ومن هو الشخص ذو العلاقة؟",
          "Why disclose and which people are related?",
        ),
        explanation: text(
          "قد تتأثر نتيجة المنشأة ومركزها المالي بعلاقة طرف ذي علاقة حتى دون وقوع معاملة، لأن العلاقة قد تغير قرارات التسعير أو الشراء أو التمويل. يكون الشخص أو أحد أفراد أسرته المقربين طرفًا ذا علاقة إذا كان يسيطر أو يشارك في السيطرة على المنشأة المعدة للتقرير، أو يملك تأثيرًا جوهريًا عليها، أو كان من أفراد الإدارة العليا للمنشأة أو لشركتها الأم. أفراد الأسرة المقربون هم من المتوقع أن يؤثروا في الشخص أو يتأثروا به في تعاملاتهم مع المنشأة، ويشملون على الأقل الأبناء والزوج أو الشريك وأبناء الزوج أو الشريك والمعالين.",
          "An entity's profit and financial position may be affected by a related-party relationship even without a transaction because the relationship can influence pricing, purchasing or financing decisions. A person, or a close family member, is related when the person controls or jointly controls the reporting entity, has significant influence over it, or is a member of key management personnel of the entity or its parent. Close family members are those expected to influence, or be influenced by, that person in dealings with the entity and include at least children, spouse or domestic partner, their children and dependants.",
        ),
        keyPoints: [
          text(
            "اختبر السيطرة والسيطرة المشتركة والتأثير الجوهري والإدارة العليا كلًا على حدة.",
            "Test control, joint control, significant influence and key management separately.",
          ),
          text(
            "وسّع الفحص إلى أفراد الأسرة المقربين والمنشآت التي يسيطرون عليها أو يؤثرون فيها.",
            "Extend the review to close family members and entities they control or influence.",
          ),
          text(
            "أفصح عن علاقة الأم والمسيطر النهائي حتى إذا لم تحدث معاملات خلال الفترة.",
            "Disclose the parent and ultimate controlling party relationship even when no transactions occurred.",
          ),
        ],
        reference: "IAS 24.1–9, 13",
      },
      {
        title: text(
          "العلاقات بين المنشآت وما لا يصنع علاقة تلقائيًا",
          "Entity relationships and what is not automatically related",
        ),
        explanation: text(
          "تشمل المنشآت ذات العلاقة أعضاء المجموعة نفسها، والمنشأة الزميلة أو المشروع المشترك للطرف الآخر، والمنشآت التي تكون مشروعات مشتركة لطرف ثالث، والعلاقة بين مشروع مشترك ومنشأة زميلة للطرف الثالث، وخطط منافع ما بعد الخدمة للعاملين، والمنشآت التي يسيطر عليها شخص ذو علاقة، وبعض علاقات الإدارة العليا أو خدماتها. في المقابل لا تنشأ العلاقة تلقائيًا لمجرد وجود مدير مشترك، أو لأن منشأتين مشاركتان في مشروع مشترك، أو بسبب التعامل مع بنك أو نقابة أو مرفق عام أو جهة حكومية في المسار العادي، أو بسبب الاعتماد الاقتصادي على عميل أو مورد كبير وحده. الحكم يتبع جوهر العلاقة لا شكلها القانوني.",
          "Related entities include members of the same group, an associate or joint venture of the other entity, entities that are joint ventures of the same third party, a joint venture and associate of the same third party, employee post-employment benefit plans, entities controlled by a related person, and specified key-management or management-service relationships. Conversely, a relationship does not arise automatically merely from a common director, two joint venturers, ordinary dealings with a bank, union, utility or government body, or economic dependence on a major customer or supplier alone. Judgement follows the relationship's substance, not only its legal form.",
        ),
        keyPoints: [
          text(
            "ارسم خريطة ملكية وتأثير تشمل المجموعة والزملاء والمشروعات المشتركة والأشخاص المؤثرين.",
            "Map ownership and influence across the group, associates, joint ventures and influential people.",
          ),
          text(
            "لا تخلط بين الاعتماد الاقتصادي والتأثير الجوهري أو السيطرة.",
            "Do not confuse economic dependence with significant influence or control.",
          ),
          text(
            "حدّث السجل عند تغير مجلس الإدارة أو الملكية أو هيكل المجموعة.",
            "Update the register when the board, ownership or group structure changes.",
          ),
        ],
        reference: "IAS 24.9–12",
      },
      {
        title: text(
          "مصفوفة الإفصاح والتعويضات والأرصدة",
          "Disclosure matrix, compensation and balances",
        ),
        explanation: text(
          "معاملة الطرف ذي العلاقة هي نقل موارد أو خدمات أو التزامات سواء فُرض سعر أم لا. إذا حدثت معاملات، تفصح المنشأة عن طبيعة العلاقة ومعلومات تكفي لفهم أثرها: مبلغ المعاملات، الأرصدة والالتزامات القائمة وشروطها وضماناتها، مخصص الديون المشكوك فيها والمصروف المعترف به للديون المعدومة أو المشكوك فيها. تُعرض المعلومات حسب فئات مثل الأم والمنشآت ذات السيطرة أو التأثير المشترك، والتابعة والزميلة والمشروعات المشتركة والإدارة العليا والأطراف الأخرى. كما يفصح إجمالي تعويض الإدارة العليا موزعًا إلى المنافع القصيرة، وما بعد الخدمة، وطويلة الأجل الأخرى، وإنهاء الخدمة، والمدفوعات على أساس الأسهم.",
          "A related-party transaction is a transfer of resources, services or obligations whether or not a price is charged. When transactions occur, the entity discloses the relationship and information sufficient to understand its effect: transaction amounts, outstanding balances and commitments, their terms and guarantees, doubtful-debt provisions and recognised bad- or doubtful-debt expense. Information is presented by categories such as the parent, entities with joint control or significant influence, subsidiaries, associates, joint ventures, key management and other related parties. Total key-management compensation is also split into short-term, post-employment, other long-term, termination and share-based payment categories.",
        ),
        keyPoints: [
          text(
            "اجمع العقود غير المسعرة والخدمات المجانية والضمانات والالتزامات، لا الفواتير فقط.",
            "Capture unpriced contracts, free services, guarantees and commitments, not only invoices.",
          ),
          text(
            "لا تقل إن الشروط مماثلة للسوق إلا إذا أمكن إثبات ذلك.",
            "Do not state that terms are at arm's length unless the claim can be substantiated.",
          ),
          text(
            "تُفصح المعاملات داخل المجموعة في القوائم المنفصلة ذات الصلة، ثم تُلغى في القوائم الموحدة.",
            "Intragroup transactions are disclosed in relevant separate statements and eliminated in consolidated statements.",
          ),
        ],
        reference: "IAS 24.17–24",
      },
      {
        title: text(
          "الإعفاء الجزئي للجهات الحكومية وضبط الاكتمال",
          "Partial government-related exemption and completeness controls",
        ),
        explanation: text(
          "يعطي IAS 24 إعفاءً جزئيًا من تفاصيل المعاملات والأرصدة عندما تكون العلاقة ناشئة لأن حكومة تسيطر أو تشترك في السيطرة أو تؤثر جوهريًا على الطرفين. لكنه لا يلغي الإفصاح: تُذكر الجهة الحكومية وطبيعة العلاقة، وتعرض كل معاملة جوهرية منفردة ومؤشرًا نوعيًا أو كميًا لغيرها من المعاملات المهمة مجتمعة. عمليًا يبدأ ضبط الاكتمال بإقرارات دورية من أعضاء الإدارة العليا، وسجل مركزي للأطراف، ومطابقة أسماء العملاء والموردين والمقرضين والضمانات والعقود مع السجل، ثم مراجعة المعاملات غير المعتادة قرب نهاية الفترة.",
          "IAS 24 provides a partial exemption from detailed transaction and balance disclosures when the relationship arises because a government controls, jointly controls or significantly influences both parties. It does not remove disclosure entirely: the government and nature of the relationship are identified, each individually significant transaction is reported, and a qualitative or quantitative indication is given for other collectively significant transactions. In practice, completeness controls begin with periodic key-management declarations, a central party register, matching customer, supplier, lender, guarantee and contract names to that register, and reviewing unusual transactions near period end.",
        ),
        keyPoints: [
          text(
            "وثّق لماذا ينطبق الإعفاء وحدد المعاملات الجوهرية فرديًا أو جماعيًا.",
            "Document why the exemption applies and identify individually or collectively significant transactions.",
          ),
          text(
            "اجعل إقرار تعارض المصالح جزءًا من دورة الإقفال لا إجراءً سنويًا متأخرًا.",
            "Make conflict-of-interest declarations part of the close cycle, not a late annual exercise.",
          ),
          text(
            "راجع الأرصدة الصفرية أيضًا؛ فقد توجد علاقة أو التزام أو ضمان يحتاج إلى إفصاح.",
            "Review zero balances too; a relationship, commitment or guarantee may still require disclosure.",
          ),
        ],
        reference: "IAS 24.25–27",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قرض لشركة يسيطر عليها قريب من الإدارة العليا",
          "Loan to an entity controlled by a close family member of key management",
        ),
        facts: text(
          "المدير التنفيذي عضو في الإدارة العليا للشركة ألف. تسيطر زوجته على الشركة باء. منحت ألف باء في 1 يوليو قرضًا قدره 1,000,000 بفائدة سنوية 3%، بينما تبلغ فائدة قرض مماثل في السوق 8%. تستحق الفائدة سنويًا ولم يُسدد شيء حتى 31 ديسمبر. يفترض المثال أن القرض يقاس وفق IFRS 9 وأن الفائدة التعاقدية مستحقة بالكامل.",
          "The chief executive is key management of Company A. The executive's spouse controls Company B. On 1 July, A lends B 1,000,000 at 3% annual interest while a comparable market loan bears 8%. Interest is due annually and nothing is paid by 31 December. The example assumes the loan is measured under IFRS 9 and all contractual interest has accrued.",
        ),
        calculations: [
          text(
            "باء طرف ذو علاقة لأن فردًا قريبًا من عضو الإدارة العليا يسيطر عليها.",
            "B is related because a close family member of A's key management controls it.",
          ),
          text(
            "الفائدة التعاقدية لنصف سنة = 1,000,000 × 3% × 6÷12 = 15,000.",
            "Contractual interest for six months = 1,000,000 × 3% × 6÷12 = 15,000.",
          ),
          text(
            "مؤشر منفعة التسعير مقارنة بالسوق = 1,000,000 × (8% − 3%) × 6÷12 = 25,000، لكنه لا يغني عن تطبيق القياس الفعلي في IFRS 9.",
            "An indicator of the pricing benefit versus market = 1,000,000 × (8% − 3%) × 6÷12 = 25,000, but it does not replace the required IFRS 9 measurement.",
          ),
          text(
            "إفصاح IAS 24 يذكر طبيعة العلاقة، مبلغ القرض، المعاملة وشروطها وسعر الفائدة والرصيد والفائدة المستحقة وأي ضمان أو مخصص خسارة ائتمانية.",
            "IAS 24 disclosure describes the relationship, loan amount, transaction and terms, interest rate, outstanding balance and interest, and any guarantee or credit-loss allowance.",
          ),
        ],
        conclusion: text(
          "لا يجوز وصف القرض بأنه بشروط السوق لأن فرق الفائدة يناقض ذلك. القياس والإيراد والخسارة الائتمانية تتبع IFRS 9، بينما يضمن IAS 24 شفافية العلاقة والشروط والأرصدة.",
          "The loan cannot be described as arm's length because the rate difference contradicts that claim. Measurement, income and credit loss follow IFRS 9; IAS 24 ensures transparency about the relationship, terms and balances.",
        ),
        journalEntries: [
          {
            label: text(
              "إثبات الفائدة التعاقدية لنصف السنة",
              "Record six months' contractual interest",
            ),
            debit: text("فائدة مستحقة القبض", "Interest receivable"),
            credit: text("إيراد فائدة", "Interest income"),
            amount: text("15,000", "15,000"),
          },
        ],
        reference: "IAS 24.9, 18–23; IFRS 9",
      },
    ],
  },
  "IAS 33": {
    sections: [
      {
        title: text("النطاق ومقام الربحية الأساسية", "Scope and the basic EPS numerator"),
        explanation: text(
          "يطبق IAS 33 على المنشأة التي تكون أسهمها العادية أو أسهمها العادية المحتملة متداولة في سوق عام، أو التي تودع قوائمها بغرض إصدارها في سوق عام. وإذا عرضت منشأة أخرى ربحية السهم اختيارًا فعليها حسابها والإفصاح عنها وفق المعيار. في القوائم الموحدة يبدأ بسط الربحية الأساسية من الربح أو الخسارة العائد لحملة الأسهم العادية في الشركة الأم، بعد استبعاد نصيب الحقوق غير المسيطرة وطرح توزيعات الأسهم الممتازة المصنفة حقوق ملكية وأي فروق تسوية تتعلق بها. لا تُطرح فائدة أداة مصنفة التزامًا مرة أخرى لأنها تدخل أصلًا ضمن الربح أو الخسارة.",
          "IAS 33 applies when an entity's ordinary shares or potential ordinary shares are publicly traded, or when it files statements to issue them in a public market. Any other entity that voluntarily presents EPS must calculate and disclose it under the Standard. In consolidated statements, the basic-EPS numerator begins with profit or loss attributable to the parent's ordinary equity holders, excluding non-controlling interests and deducting dividends on equity-classified preference shares and related settlement differences. Interest on a liability-classified instrument is not deducted again because it is already reflected in profit or loss.",
        ),
        keyPoints: [
          text(
            "اعرض الربحية الأساسية والمخفضة بالأهمية نفسها حتى إذا كانت القيمة خسارة للسهم.",
            "Present basic and diluted EPS with equal prominence even when the result is a loss per share.",
          ),
          text(
            "استخدم الربح العائد لمساهمي الأم لا إجمالي ربح المجموعة.",
            "Use profit attributable to the parent's shareholders, not total group profit.",
          ),
          text(
            "افصل ربحية العمليات المستمرة عن أثر العملية المتوقفة عندما تنطبق.",
            "Separate continuing-operation EPS from the effect of a discontinued operation when applicable.",
          ),
        ],
        reference: "IAS 33.2–4A, 10–18, 66–69",
      },
      {
        title: text(
          "المتوسط المرجح والأسهم المجانية وحقوق الأولوية",
          "Weighted average shares, bonus issues and rights issues",
        ),
        explanation: text(
          "مقام الربحية الأساسية هو المتوسط المرجح للأسهم العادية القائمة خلال الفترة، بعد استبعاد أسهم الخزينة. الإصدار النقدي بالقيمة العادلة يدخل من تاريخ استحقاق المقابل موزونًا بالزمن، أما الإصدار المجاني أو تجزئة الأسهم فتغير عدد الأسهم دون موارد جديدة، لذلك تعدل المقارنات وكل الفترات السابقة المعروضة بأثر رجعي كما لو أن الحدث وقع في بداية أقدم فترة. يتضمن إصدار حقوق الأولوية عادة عنصرًا مجانيًا إذا كان سعر الاكتتاب أقل من القيمة العادلة؛ عندها يحسب السعر النظري بعد الحق ومعامل التعديل، ويطبق العنصر المجاني على الأسهم السابقة للإصدار، ثم توزن الأسهم الجديدة زمنيًا.",
          "The basic-EPS denominator is the weighted average ordinary shares outstanding during the period, excluding treasury shares. A cash issue at fair value enters from the date consideration is receivable and is time-weighted. A bonus issue or share split changes share count without new resources, so comparative and all earlier periods presented are adjusted retrospectively as if the event occurred at the start of the earliest period. A rights issue normally contains a bonus element when the subscription price is below fair value; the theoretical ex-rights price and adjustment factor are calculated, the bonus element is applied to pre-issue shares, and new shares are then time-weighted.",
        ),
        keyPoints: [
          text(
            "أنشئ خطًا زمنيًا لكل تغير في الأسهم قبل تنفيذ الحساب.",
            "Build a timeline of every share-count change before performing the calculation.",
          ),
          text(
            "صحح المقارنات للأحداث المجانية الواقعة بعد الفترة وقبل اعتماد القوائم للإصدار.",
            "Adjust comparatives for bonus events occurring after period end but before the statements are authorised.",
          ),
          text(
            "لا تعامل كامل إصدار الحقوق كإصدار مجاني؛ افصل عنصر الموارد عن عنصر الخصم.",
            "Do not treat the entire rights issue as a bonus issue; separate the resource and discount elements.",
          ),
        ],
        reference: "IAS 33.19–29, 64",
      },
      {
        title: text("الربحية المخفضة واختبار التخفيف", "Diluted EPS and the dilution test"),
        explanation: text(
          "تفترض الربحية المخفضة تحويل الأسهم العادية المحتملة المخفضة منذ بداية الفترة أو تاريخ إصدارها إن كان لاحقًا. في السند القابل للتحويل يضاف إلى البسط أثر الفائدة بعد الضريبة والمصروفات أو التغيرات الأخرى التي كانت ستختفي عند التحويل، وتضاف الأسهم الناتجة إلى المقام. في الخيارات والضمانات تستخدم طريقة أسهم الخزينة: يفترض استعمال متحصلات الممارسة لشراء أسهم بالقيمة السوقية المتوسطة، ولا يضاف سوى صافي الأسهم المجانية. تُستبعد الأدوات المضادة للتخفيف، وتُرتب مجموعات الأدوات من الأكثر تخفيضًا إلى الأقل حتى لا تخفي أداة مضادة للتخفيف أثر أداة أخرى.",
          "Diluted EPS assumes conversion of dilutive potential ordinary shares from the beginning of the period or, if later, their issue date. For a convertible bond, the numerator adds back after-tax interest and other expenses or changes that conversion would eliminate, while conversion shares enter the denominator. Options and warrants use the treasury-stock method: assumed exercise proceeds buy shares at the average market price and only the net no-consideration shares are added. Antidilutive instruments are excluded, and instrument groups are sequenced from most to least dilutive so that an antidilutive instrument cannot conceal another instrument's dilution.",
        ),
        keyPoints: [
          text(
            "قارن الربح الإضافي لكل سهم إضافي بربحية العمليات المستمرة المستخدمة كرقم تحكم.",
            "Compare incremental earnings per incremental share with continuing-operations EPS used as the control number.",
          ),
          text(
            "في حالة الخسارة قد تكون الأدوات التي تبدو مخفضة في الربح مضادة للتخفيف.",
            "In a loss period, instruments that look dilutive in a profit period may be antidilutive.",
          ),
          text(
            "أعد الاختبار لكل فترة معروضة؛ فالنتيجة لا تنتقل تلقائيًا من سنة إلى أخرى.",
            "Repeat the test for every period presented; the conclusion does not automatically carry forward.",
          ),
        ],
        reference: "IAS 33.30–63",
      },
      {
        title: text(
          "العرض والإفصاح وقائمة المراجعة",
          "Presentation, disclosure and review checklist",
        ),
        explanation: text(
          "تعرض الربحية الأساسية والمخفضة لكل فئة من الأسهم العادية ذات الحق المختلف في الربح، وبالأهمية نفسها لجميع الفترات. تكشف المنشأة مبالغ البسط ومصالحتها مع الربح أو الخسارة، والمتوسط المرجح للأسهم في كل مقام ومصالحته، والأدوات التي قد تخفض الربحية مستقبلًا لكنها استبعدت حاليًا، ومعاملات الأسهم الجوهرية بعد الفترة التي كانت ستغير الحساب. إذا عرضت المنشأة مقياسًا إضافيًا للسهم يستخدم عنصرًا آخر من الربح أو الخسارة، فيجب تحديد بسطه وفق أساس متسق وبيان مطابقته والإفصاح عنه في الإيضاحات لا بطريقة تطغى على مقاييس IAS 33.",
          "Basic and diluted EPS are presented for each class of ordinary shares with a different right to profit, with equal prominence for all periods. The entity discloses numerator amounts and their reconciliation to profit or loss, weighted-average shares in each denominator and their reconciliation, instruments that could dilute EPS in future but are currently excluded, and significant post-period share transactions that would have changed the calculation. If an additional per-share measure uses another profit-or-loss component, its numerator must be consistently determined, identified and reconciled, and it is disclosed in the notes without overshadowing IAS 33 measures.",
        ),
        keyPoints: [
          text(
            "طابق سجل رأس المال مع محاضر المجلس والسجل القانوني وأحداث ما بعد الفترة.",
            "Reconcile the share register to board minutes, statutory records and post-period events.",
          ),
          text(
            "راجع الضرائب وشروط التحويل وسعر السوق المتوسط لكل أداة محتملة.",
            "Review tax effects, conversion terms and average market price for every potential instrument.",
          ),
          text(
            "احفظ ورقة مصالحة مستقلة للبسط والمقام الأساسي والمخفض.",
            "Retain separate reconciliation schedules for basic and diluted numerators and denominators.",
          ),
        ],
        reference: "IAS 33.66–73A",
      },
    ],
    workedExamples: [
      {
        title: text(
          "إصدار نقدي ثم أسهم مجانية وسند قابل للتحويل",
          "Cash issue, bonus issue and a convertible bond",
        ),
        facts: text(
          "كان لدى منشأة 5,000,000 سهم في 1 يناير. أصدرت 1,000,000 سهم نقدًا بالقيمة العادلة في 1 أبريل، ثم أصدرت في 1 أكتوبر سهمًا مجانيًا لكل خمسة أسهم قائمة. بلغ الربح بعد الضريبة العائد لمساهمي الأم 3,600,000 وتوزيعات الأسهم الممتازة المصنفة حقوق ملكية 120,000. يوجد سند قابل للتحويل بفائدة سنوية 60,000 ومعدل ضريبة 25%، قابل للتحويل إلى 300,000 سهم، وكان قائمًا طوال السنة.",
          "An entity has 5,000,000 shares on 1 January. It issues 1,000,000 shares for cash at fair value on 1 April and makes a one-for-five bonus issue on 1 October. After-tax profit attributable to the parent's owners is 3,600,000 and dividends on equity-classified preference shares are 120,000. A convertible bond with annual interest of 60,000 and a 25% tax rate converts into 300,000 shares and was outstanding all year.",
        ),
        calculations: [
          text(
            "البسط الأساسي = 3,600,000 − 120,000 = 3,480,000.",
            "Basic numerator = 3,600,000 − 120,000 = 3,480,000.",
          ),
          text(
            "المقام المرجح = (5,000,000 × 3÷12 × 1.2) + (6,000,000 × 6÷12 × 1.2) + (7,200,000 × 3÷12) = 6,900,000 سهم.",
            "Weighted denominator = (5,000,000 × 3/12 × 1.2) + (6,000,000 × 6/12 × 1.2) + (7,200,000 × 3/12) = 6,900,000 shares.",
          ),
          text(
            "الربحية الأساسية = 3,480,000 ÷ 6,900,000 = 0.5043 للسهم تقريبًا.",
            "Basic EPS = 3,480,000 ÷ 6,900,000 = approximately 0.5043 per share.",
          ),
          text(
            "فائدة التحويل بعد الضريبة = 60,000 × 75% = 45,000؛ وربحها الإضافي لكل سهم = 45,000 ÷ 300,000 = 0.15، وهو أقل من الربحية الأساسية، لذا فهي مخفضة.",
            "After-tax convertible interest = 60,000 × 75% = 45,000; incremental earnings per share = 45,000 ÷ 300,000 = 0.15, below basic EPS, so the instrument is dilutive.",
          ),
          text(
            "الربحية المخفضة = (3,480,000 + 45,000) ÷ (6,900,000 + 300,000) = 0.4896 للسهم تقريبًا.",
            "Diluted EPS = (3,480,000 + 45,000) ÷ (6,900,000 + 300,000) = approximately 0.4896 per share.",
          ),
        ],
        conclusion: text(
          "يطبق معامل الأسهم المجانية بأثر رجعي على الأسهم القائمة قبل 1 أكتوبر، بينما يختبر السند على أساس أثره الإضافي بعد الضريبة ويضاف فقط لأنه يخفض ربحية السهم.",
          "The bonus factor is applied retrospectively to shares outstanding before 1 October; the bond is tested using its incremental after-tax effect and included only because it reduces EPS.",
        ),
        journalEntries: [],
        reference: "IAS 33.10–12, 19–29, 31–49, 64",
      },
    ],
  },
  "IAS 34": {
    sections: [
      {
        title: text(
          "النطاق والحد الأدنى للتقرير المرحلي",
          "Scope and minimum interim report content",
        ),
        explanation: text(
          "لا يفرض IAS 34 على منشأة بعينها إصدار تقرير مرحلي ولا يحدد تواتره أو موعد نشره؛ تتولى القوانين والجهات التنظيمية ذلك. لكنه يطبق عندما تصف منشأة تستخدم IFRS تقريرها المرحلي بأنه ممتثل للمعايير. يمكن إعداد مجموعة كاملة من القوائم أو مجموعة مختصرة تشمل قائمة المركز المالي والربح أو الخسارة والدخل الشامل الآخر والتغيرات في حقوق الملكية والتدفقات النقدية وإيضاحات مختارة. ويجب أن يحتوي التقرير المختصر على الأقل على كل العناوين والمجاميع الفرعية الواردة في آخر قوائم سنوية، مع إضافة بنود إذا كان حذفها يجعل التقرير مضللًا.",
          "IAS 34 does not mandate which entity publishes an interim report, its frequency or publication deadline; laws and regulators decide those matters. It applies when an IFRS-reporting entity describes its interim report as complying with IFRS. The report may contain a complete set or a condensed set comprising financial position, profit or loss and other comprehensive income, changes in equity, cash flows and selected notes. A condensed report includes at least all headings and subtotals in the latest annual statements and adds lines when omission would make the report misleading.",
        ),
        keyPoints: [
          text(
            "لا تصف التقرير بأنه ممتثل لـIFRS إذا لم يستوف جميع متطلبات IAS 34.",
            "Do not describe the report as IFRS-compliant unless it meets all IAS 34 requirements.",
          ),
          text(
            "استخدم التقرير السنوي الأخير كنقطة بداية ثم ركز على الجديد والمتغير.",
            "Use the latest annual report as the baseline and focus on what is new or changed.",
          ),
          text(
            "اعرض ربحية السهم الأساسية والمخفضة في التقرير المرحلي عندما ينطبق IAS 33.",
            "Present basic and diluted EPS in the interim report when IAS 33 applies.",
          ),
        ],
        reference: "IAS 34.1–19",
      },
      {
        title: text("الفترات المقارنة والأهمية النسبية", "Comparative periods and materiality"),
        explanation: text(
          "تقارن قائمة المركز المالي بنهاية السنة السابقة مباشرة. أما الربح أو الخسارة والدخل الشامل الآخر فيعرضان للفترة المرحلية الحالية وللسنة حتى تاريخهما، مع فترتي المقارنة المناظرتين من السنة السابقة. وتعرض التغيرات في حقوق الملكية والتدفقات النقدية تراكميًا من بداية السنة مع المقارنة التراكمية المناظرة. تُقاس الأهمية النسبية بالرجوع إلى البيانات المرحلية نفسها، لأن بندًا قد يكون مؤثرًا في ربع سنة ولو بدا صغيرًا أمام أرقام السنة كاملة. ولا تبرر السرعة إخفاء معلومات جوهرية أو تجميع بنود مختلفة الطبيعة.",
          "The statement of financial position is compared with the immediately preceding year-end. Profit or loss and other comprehensive income are shown for the current interim period and year-to-date, with corresponding prior-year periods. Changes in equity and cash flows are cumulative year-to-date with corresponding cumulative comparatives. Materiality is assessed against interim-period data because an item may influence a quarter even when small relative to the full year. Timeliness does not justify obscuring material information or aggregating items with different characteristics.",
        ),
        keyPoints: [
          text(
            "ضع جدولًا للفترات المطلوبة قبل إعداد القوائم حتى لا تختلط مقارنة الربع بالمقارنة التراكمية.",
            "Prepare a required-period matrix before drafting statements to avoid mixing current-quarter and year-to-date comparatives.",
          ),
          text(
            "قيّم الموسمية وإتاحة معلومات اثني عشر شهرًا إضافية عندما تفيد المستخدم.",
            "Consider seasonality and whether additional trailing-twelve-month information would help users.",
          ),
          text(
            "راجع الأهمية نوعيًا وكميًا على مستوى الفترة المرحلية.",
            "Assess materiality qualitatively and quantitatively at the interim-period level.",
          ),
        ],
        reference: "IAS 34.20–25",
      },
      {
        title: text(
          "القياس من بداية السنة وعدم تمهيد الأرباح",
          "Year-to-date measurement without earnings smoothing",
        ),
        explanation: text(
          "تطبق السياسات المحاسبية نفسها المستخدمة سنويًا، وتقاس المبالغ على أساس السنة حتى التاريخ بحيث لا يغير عدد التقارير المرحلية النتيجة السنوية. لا يعجل إيراد موسمي متوقع ولا يؤجل مصروف غير مؤهل لمجرد تسوية النتائج بين الأرباع. يثبت مصروف ضريبة الدخل المرحلي باستخدام أفضل تقدير لمتوسط معدل الضريبة السنوي الفعلي على الربح قبل الضريبة حتى التاريخ، مع معالجة البنود غير العادية ضريبيًا على نحو مناسب. ويمكن تغيير تقدير فترة سابقة في الفترة اللاحقة دون إعادة إصدار التقرير السابق، مع الإفصاح عن طبيعة وحجم التغير الجوهري.",
          "The same annual accounting policies apply and measurements are made year-to-date so reporting frequency does not change annual results. Expected seasonal revenue is not anticipated and an otherwise ineligible cost is not deferred merely to smooth quarters. Interim income tax expense uses the best estimate of the weighted-average annual effective tax rate applied to year-to-date pre-tax income, with appropriate treatment for unusual tax items. An earlier interim estimate may change in a later period without reissuing the earlier report, with the nature and amount of a material change disclosed.",
        ),
        keyPoints: [
          text(
            "حدّث توقع معدل الضريبة السنوي في كل تاريخ مرحلي ووثق عناصر المعدل.",
            "Update the expected annual effective tax rate at each interim date and document its components.",
          ),
          text(
            "لا تؤجل تكلفة إلا إذا كانت ستؤهل أصلًا في نهاية السنة في الظروف نفسها.",
            "Defer a cost only if it would qualify as an asset at year-end in the same circumstances.",
          ),
          text(
            "استخدم تقديرات معقولة لكن وسّع الإفصاح عندما تكون درجة عدم التأكد أعلى.",
            "Use reasonable estimates but expand disclosure when estimation uncertainty is greater.",
          ),
        ],
        reference: "IAS 34.28–43, B12–B22",
      },
      {
        title: text(
          "الأحداث الجوهرية والانخفاض وIFRS 18",
          "Significant events, impairment and IFRS 18",
        ),
        explanation: text(
          "تركز الإيضاحات على الأحداث والمعاملات الجوهرية منذ آخر سنة، مثل انخفاض المخزون أو الأصول وعكسه المسموح، الاستحواذات والتصرفات وإعادة الهيكلة والتقاضي والتعثر وتغيرات القيمة العادلة والمعاملات مع الأطراف ذات العلاقة. لا يجوز وفق IFRIC 10 عكس خسارة انخفاض شهرة سبق إثباتها في فترة مرحلية حتى لو لم تكن ستظهر لو أجري الاختبار فقط في نهاية السنة. وعند تطبيق IFRS 18، تتسع إيضاحات القوائم المرحلية المختصرة لتشمل معلومات مقاييس الأداء المحددة من الإدارة التي يطلبها IFRS 18؛ لذلك ينبغي ربط حزمة الإقفال المرحلي بالمقاييس المعلنة خارجيًا.",
          "Notes focus on significant events and transactions since the latest year-end, such as inventory or asset impairment and permitted reversals, acquisitions, disposals, restructurings, litigation, defaults, fair-value changes and related-party transactions. IFRIC 10 prohibits reversing a goodwill impairment recognised in an earlier interim period even if no loss would have arisen had testing occurred only at year-end. When IFRS 18 is applied, condensed interim notes also include the management-defined performance measure information required by IFRS 18, so the interim close package should connect to externally communicated measures.",
        ),
        keyPoints: [
          text(
            "حدّث سجل الأحداث الجوهرية من تاريخ التقرير السنوي لا من بداية الربع فقط.",
            "Update the significant-events register from the annual reporting date, not merely the quarter's start.",
          ),
          text(
            "اربط اختبار الانخفاض المرحلي بقيود العكس الخاصة بكل معيار.",
            "Connect interim impairment testing with the reversal restrictions in each applicable Standard.",
          ),
          text(
            "طبّق إفصاحات مقاييس الأداء المحددة من الإدارة عند سريان وتطبيق IFRS 18.",
            "Apply management-defined performance measure disclosures when IFRS 18 is effective and applied.",
          ),
        ],
        reference: "IAS 34.15–16A, 26, 41; IFRIC 10.8; IFRS 18",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تطوير أصل ومعدل ضريبة سنوي في تقرير نصف سنوي",
          "Development asset and annual tax rate in a half-year report",
        ),
        facts: text(
          "أنفقت منشأة 240,000 خلال الربع الأول على مشروع لم يثبت بعد استيفاؤه معايير IAS 38، ثم أثبتت في 1 أبريل تحقق جميع معايير رسملة التطوير وأنفقت 180,000 إضافية حتى 30 يونيو. بلغ الربح قبل الضريبة للنصف الأول 800,000، وأفضل تقدير لمعدل الضريبة السنوي الفعلي 25%.",
          "An entity spends 240,000 in the first quarter on a project that has not yet demonstrated the IAS 38 capitalisation criteria. On 1 April all development recognition criteria are demonstrably met, and another 180,000 is spent by 30 June. Half-year profit before tax is 800,000 and the best estimate of the annual effective tax rate is 25%.",
        ),
        calculations: [
          text(
            "يبقى إنفاق الربع الأول البالغ 240,000 مصروفًا؛ لا تعاد رسملته بعد تحقق المعايير.",
            "The first-quarter expenditure of 240,000 remains expensed; it is not reinstated after the criteria are met.",
          ),
          text(
            "يرسمل إنفاق 1 أبريل إلى 30 يونيو البالغ 180,000 من تاريخ تحقق الشروط، مع بدء الإطفاء عند إتاحة الأصل للاستخدام.",
            "The 180,000 spent from 1 April to 30 June is capitalised from the qualification date, with amortisation beginning when the asset is available for use.",
          ),
          text(
            "مصروف الضريبة المرحلي التقديري = 800,000 × 25% = 200,000، قبل أي بنود ضريبية منفصلة غير عادية.",
            "Estimated interim tax expense = 800,000 × 25% = 200,000, before any separately treated unusual tax items.",
          ),
        ],
        conclusion: text(
          "التقرير المرحلي لا يسمح باستخدام معلومات لاحقة لإلغاء مصروف صحيح سابقًا، ويستخدم توقع السنة كاملة للضريبة حتى لا يؤدي توقيت الأرباح وحده إلى معدل مرحلي مضلل.",
          "Interim reporting does not permit hindsight to reverse a previously correct expense and uses a full-year tax expectation so profit timing alone does not create a misleading interim rate.",
        ),
        journalEntries: [
          {
            label: text(
              "رسملة الإنفاق المؤهل بعد 1 أبريل",
              "Capitalise qualifying spend after 1 April",
            ),
            debit: text("أصل تطوير", "Development asset"),
            credit: text("نقدية أو دائنون", "Cash or payables"),
            amount: text("180,000", "180,000"),
          },
          {
            label: text("إثبات ضريبة النصف الأول", "Recognise first-half tax"),
            debit: text("مصروف ضريبة الدخل", "Income tax expense"),
            credit: text("ضريبة دخل مستحقة", "Income tax payable"),
            amount: text("200,000", "200,000"),
          },
        ],
        reference: "IAS 34.28–30, B12; IAS 38.54–65",
      },
    ],
  },
  "IFRS 1": {
    sections: [
      {
        title: text(
          "تحديد أول قوائم IFRS وتاريخ الانتقال",
          "Identifying first IFRS statements and the transition date",
        ),
        explanation: text(
          "تكون المنشأة متبنية لأول مرة عندما تعرض أول قوائم سنوية تحتوي بيانًا صريحًا وغير متحفظ بالامتثال لـIFRS ولم تكن قوائمها السابقة تتضمن هذا البيان. تعد قائمة مركز مالي افتتاحية وفق IFRS في تاريخ الانتقال، وهو بداية أقدم فترة مقارنة كاملة معروضة. فإذا كانت أول قوائم IFRS للسنة المنتهية في 31 ديسمبر 2026 وتعرض مقارنة سنة كاملة واحدة، يكون تاريخ الانتقال 1 يناير 2025. تستخدم السياسات نفسها في القائمة الافتتاحية وجميع الفترات المعروضة، وفق المعايير النافذة في نهاية أول فترة تقرير IFRS، مع مراعاة استثناءات وإعفاءات IFRS 1.",
          "An entity is a first-time adopter when its first annual statements contain an explicit and unreserved IFRS compliance statement and its previous statements did not. It prepares an opening IFRS statement of financial position at the transition date—the beginning of the earliest full comparative period presented. If the first IFRS statements are for the year ended 31 December 2026 with one full comparative year, transition is 1 January 2025. The same policies apply in the opening statement and throughout all periods presented, using Standards effective at the end of the first IFRS reporting period, subject to IFRS 1 exceptions and exemptions.",
        ),
        keyPoints: [
          text(
            "وثّق سبب انطباق تعريف المتبني لأول مرة قبل اختيار أي إعفاء.",
            "Document why the first-time-adopter definition is met before choosing exemptions.",
          ),
          text(
            "اربط تاريخ الانتقال بعدد سنوات المقارنة الكاملة التي ستعرضها المنشأة.",
            "Link the transition date to the number of full comparative years the entity will present.",
          ),
          text(
            "ضع قائمة بالمعايير النافذة في نهاية أول سنة IFRS ولا تستخدم نسخًا تاريخية مختلفة لكل مقارنة.",
            "List Standards effective at the first IFRS year-end rather than using different historical versions for each comparative period.",
          ),
        ],
        reference: "IFRS 1.2–9, Appendix A",
      },
      {
        title: text(
          "بناء قائمة المركز المالي الافتتاحية",
          "Building the opening statement of financial position",
        ),
        explanation: text(
          "تبدأ خريطة التحويل بأربع حركات: الاعتراف بكل أصل والتزام يطلبه IFRS، إلغاء ما لا يسمح IFRS بالاعتراف به، إعادة تصنيف البنود إلى العرض المناسب، ثم قياس الأرصدة وفق IFRS. تثبت فروق الانتقال عادة مباشرة في الأرباح المحتجزة أو فئة أخرى من حقوق الملكية في تاريخ الانتقال. تشمل الأعمال العملية مطابقة ميزان المراجعة السابق بكل معيار، وفصل تعديلات السياسة عن تصحيح الأخطاء، وحساب الضريبة المؤجلة على فروق التحويل، وربط كل تعديل بدليل ومالك وتاريخ إنجاز. القائمة الافتتاحية هي أساس الأرقام اللاحقة وليست قائمة منشورة منفصلة بالضرورة.",
          "The conversion map has four movements: recognise every asset and liability required by IFRS, derecognise items IFRS does not permit, reclassify items into the appropriate presentation, and measure balances under IFRS. Transition differences are generally recognised directly in retained earnings or another equity category at the transition date. Practical work includes mapping the previous-GAAP trial balance to each Standard, separating policy changes from error corrections, calculating deferred tax on conversion differences, and assigning evidence, ownership and completion dates to each adjustment. The opening statement is the basis for later amounts and is not necessarily a separately published statement.",
        ),
        keyPoints: [
          text(
            "اختبر الاكتمال قبل القياس؛ الأصل أو الالتزام المفقود لا يعالجه نموذج تقييم متقن.",
            "Test completeness before measurement; a valuation model cannot fix a missing asset or liability.",
          ),
          text(
            "سجل كل تعديل بالقيد والمرجع والضريبة والأثر على الإفصاح.",
            "Record every adjustment with its entry, reference, tax and disclosure effect.",
          ),
          text(
            "استخدم المعلومات المتاحة في التاريخ التاريخي ولا تدخل معرفة لاحقة بصورة انتقائية.",
            "Use information available at the historical date and avoid selective hindsight.",
          ),
        ],
        reference: "IFRS 1.10–14",
      },
      {
        title: text(
          "الاستثناءات الإلزامية ومنع المعرفة اللاحقة",
          "Mandatory exceptions and the hindsight barrier",
        ),
        explanation: text(
          "يمنع IFRS 1 التطبيق بأثر رجعي في مجالات محددة تشمل بعض حالات إلغاء الاعتراف بالأدوات المالية ومحاسبة التحوط والتقديرات والحقوق غير المسيطرة وتصنيف وقياس الأصول المالية والانخفاض وغيرها وفق الملحق B. التقدير في تاريخ الانتقال يجب أن يتسق مع تقدير GAAP السابق في التاريخ نفسه بعد تعديل اختلافات السياسة، ما لم يوجد دليل موضوعي على خطأ؛ فلا يجوز تحسين تاريخ الأداء بمعلومة ظهرت لاحقًا. ومن 1 يناير 2026 توضّح تحسينات المعيار اتساق متطلبات محاسبة التحوط للمتبني لأول مرة مع معايير الأهلية والتخصيص والتوثيق في IFRS 9، مع معالجة التحوطات غير المؤهلة وفق قواعد الانتقال.",
          "IFRS 1 prohibits retrospective application in specified areas including aspects of financial-instrument derecognition, hedge accounting, estimates, non-controlling interests, classification and measurement of financial assets, impairment and other Appendix B matters. A transition-date estimate must be consistent with the previous-GAAP estimate at that same date after policy differences, unless objective evidence shows error; later knowledge cannot be selectively used to improve history. From 1 January 2026, the annual improvement clarifies alignment of first-time-adopter hedge-accounting requirements with IFRS 9 eligibility, designation and documentation criteria, with non-qualifying hedges handled under the transition rules.",
        ),
        keyPoints: [
          text(
            "افصل الاستثناء الإلزامي عن الإعفاء الاختياري في سجل القرارات.",
            "Separate mandatory exceptions from optional exemptions in the decision log.",
          ),
          text(
            "احتفظ بتاريخ المعلومات المستخدمة لإثبات عدم توظيف المعرفة اللاحقة.",
            "Retain the date of information used to demonstrate that hindsight was not applied.",
          ),
          text(
            "راجع علاقات التحوط والتوثيق عند تاريخ الانتقال وفق صياغة IFRS 1 النافذة في 2026.",
            "Review hedge relationships and documentation at transition using the IFRS 1 wording effective in 2026.",
          ),
        ],
        reference: "IFRS 1.14–17, Appendix B; Annual Improvements—Volume 11",
      },
      {
        title: text(
          "الإعفاءات الاختيارية والمصالحات والإفصاح",
          "Optional exemptions, reconciliations and disclosure",
        ),
        explanation: text(
          "يقدم الملحق D إعفاءات اختيارية محددة لتخفيف تكلفة إعادة التاريخ، مثل عدم إعادة تركيبات الأعمال السابقة، واستخدام القيمة العادلة أو إعادة تقييم سابقة كتكلفة مفترضة لبعض الأصول، وتصفير فروق الترجمة التراكمية، وبعض ترتيبات المدفوعات بالأسهم وعقود الإيجار وتكاليف الاقتراض. لا يجوز القياس عليها لإنشاء إعفاء جديد، ويختار كل إعفاء بعد تحليل أثره المستقبلي لا لتجميل الرصيد الافتتاحي فقط. تشرح أول قوائم IFRS الانتقال بمصالحة حقوق الملكية في تاريخ الانتقال ونهاية آخر فترة GAAP، ومصالحة الدخل الشامل لآخر فترة، وشرح التعديلات الجوهرية على التدفقات وأي خسائر انخفاض، مع عرض ثلاثة مراكز مالية عند اقتضاء العرض.",
          "Appendix D offers specified optional exemptions to reduce the cost of reconstructing history, including not restating past business combinations, using fair value or a previous revaluation as deemed cost for specified assets, resetting cumulative translation differences, and relief for some share-based arrangements, leases and borrowing costs. They cannot be analogised into new exemptions, and each choice considers future consequences rather than merely improving opening balances. The first IFRS statements explain transition through equity reconciliations at transition and the latest previous-GAAP year-end, a total comprehensive income reconciliation for the latest period, explanation of material cash-flow adjustments and impairment losses, and three statements of financial position when required.",
        ),
        keyPoints: [
          text(
            "اعتمد مصفوفة لكل إعفاء: الأهلية والاختيار والدليل والأثر الحالي والمستقبلي.",
            "Approve an exemption matrix covering eligibility, election, evidence, and current and future effects.",
          ),
          text(
            "طابق المصالحات مع القوائم المنشورة ودفتر تحويل قابل للتدقيق.",
            "Reconcile published statements to an auditable conversion ledger.",
          ),
          text(
            "اشرح للمستخدم طبيعة التعديل لا الرقم وحده، خصوصًا عندما يغير مؤشرات الأداء.",
            "Explain an adjustment's nature, not only its amount, especially when it changes performance indicators.",
          ),
        ],
        reference: "IFRS 1.20–33, Appendices C–E",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قائمة انتقال افتتاحية واختيارات التكلفة المفترضة",
          "Opening transition statement and deemed-cost elections",
        ),
        facts: text(
          "ستصدر منشأة أول قوائم IFRS للسنة المنتهية في 31 ديسمبر 2026 مع مقارنة 2025. في 1 يناير 2025 أظهرت سجلات GAAP السابق معدات بقيمة 8,000,000، ومخصص احتياطي عام غير مستوفٍ IAS 37 بمبلغ 400,000، ولم تثبت التزام إزالة أصل بقيمة حالية 300,000 وتكلفة أصل مساوية له. اختارت القيمة العادلة 9,200,000 تكلفة مفترضة للمعدات، وصفّرت احتياطي ترجمة تراكميًا ذا رصيد مدين 250,000. تُهمل الضريبة المؤجلة في المثال فقط لتوضيح حركة حقوق الملكية.",
          "An entity will issue its first IFRS statements for the year ended 31 December 2026 with 2025 comparatives. At 1 January 2025, previous GAAP records equipment at 8,000,000 and a 400,000 general reserve provision that fails IAS 37, while omitting a 300,000 present-value decommissioning obligation and equal asset cost. It elects fair value of 9,200,000 as the equipment's deemed cost and resets a cumulative translation reserve with a 250,000 debit balance. Deferred tax is omitted only to illustrate equity movements.",
        ),
        calculations: [
          text(
            "تاريخ الانتقال هو 1 يناير 2025: بداية أقدم مقارنة كاملة.",
            "The transition date is 1 January 2025: the beginning of the earliest full comparative period.",
          ),
          text(
            "زيادة المعدات بالتكلفة المفترضة = 9,200,000 − 8,000,000 = 1,200,000 تضاف إلى الأرباح المحتجزة قبل الضريبة.",
            "Deemed-cost increase = 9,200,000 − 8,000,000 = 1,200,000 added to retained earnings before tax.",
          ),
          text(
            "إلغاء المخصص غير المؤهل يرفع الأرباح المحتجزة 400,000؛ وإثبات أصل والتزام الإزالة بمبلغ 300,000 لكل منهما لا يغير صافي حقوق الملكية عند البداية.",
            "Derecognising the ineligible provision increases retained earnings by 400,000; recognising the 300,000 decommissioning asset and liability has no opening net-equity effect.",
          ),
          text(
            "تصفير رصيد الترجمة المدين ينقل 250,000 داخل حقوق الملكية من الأرباح المحتجزة إلى احتياطي الترجمة دون تغيير إجماليها؛ صافي زيادة الأرباح المحتجزة قبل هذا النقل 1,600,000 وبعده 1,350,000.",
            "Resetting the debit translation reserve transfers 250,000 within equity from retained earnings to the translation reserve without changing total equity; retained earnings rise 1,600,000 before that transfer and 1,350,000 after it.",
          ),
        ],
        conclusion: text(
          "تثبت القيود في قائمة المركز المالي الافتتاحية ثم تمتد سياسات IFRS نفسها إلى مقارنة 2025 وسنة 2026، مع إضافة الضريبة المؤجلة الفعلية والمصالحات المطلوبة في التطبيق الواقعي.",
          "The entries establish the opening IFRS statement and the same policies continue through the 2025 comparative and 2026 current year, with actual deferred tax and required reconciliations added in a real implementation.",
        ),
        journalEntries: [
          {
            label: text("القيمة العادلة كتكلفة مفترضة", "Fair value as deemed cost"),
            debit: text("معدات", "Equipment"),
            credit: text("أرباح محتجزة", "Retained earnings"),
            amount: text("1,200,000", "1,200,000"),
          },
          {
            label: text("إلغاء احتياطي عام غير مؤهل", "Remove ineligible general reserve"),
            debit: text("مخصص احتياطي عام", "General reserve provision"),
            credit: text("أرباح محتجزة", "Retained earnings"),
            amount: text("400,000", "400,000"),
          },
          {
            label: text("إثبات التزام إزالة الأصل", "Recognise decommissioning obligation"),
            debit: text("تكلفة أصل", "Asset cost"),
            credit: text("مخصص إزالة الأصل", "Decommissioning provision"),
            amount: text("300,000", "300,000"),
          },
          {
            label: text("تصفير احتياطي الترجمة المدين", "Reset debit translation reserve"),
            debit: text("أرباح محتجزة", "Retained earnings"),
            credit: text("احتياطي فروق ترجمة", "Translation reserve"),
            amount: text("250,000", "250,000"),
          },
        ],
        reference: "IFRS 1.6–14, 24–26, D5–D8, D13",
      },
    ],
  },
  "IAS 1": {
    sections: [
      {
        title: text(
          "مجموعة القوائم الكاملة والعرض العادل",
          "Complete financial statements and fair presentation",
        ),
        explanation: text(
          "يضع IAS 1 الأساس العام لعرض القوائم حتى تكون قابلة للمقارنة عبر الفترات والمنشآت. تشمل المجموعة الكاملة قائمة المركز المالي، وقائمة الربح أو الخسارة والدخل الشامل الآخر، والتغيرات في حقوق الملكية، والتدفقات النقدية، والإيضاحات والمقارنات، وقائمة مركز مالي ثالثة في بداية الفترة المقارنة عندما يؤدي تطبيق سياسة بأثر رجعي أو تصحيح أو إعادة تصنيف إلى أثر جوهري على ذلك التاريخ. يلزم بيان صريح وغير متحفظ بالامتثال، ولا يكفي تطبيق بعض المعايير. يفترض الامتثال مع الإفصاح الإضافي عند الحاجة تحقيق العرض العادل، أما الخروج عن متطلب معياري فلا يحدث إلا في ظروف نادرة للغاية وبإفصاحات واسعة إذا سمح الإطار التنظيمي بذلك.",
          "IAS 1 establishes the overall presentation basis so statements are comparable across periods and entities. A complete set includes financial position, profit or loss and other comprehensive income, changes in equity, cash flows, notes and comparatives, plus a third statement of financial position at the beginning of the comparative period when retrospective policy application, correction or reclassification has a material effect at that date. An explicit and unreserved compliance statement is required; applying only some Standards is insufficient. Compliance plus additional disclosure when necessary is presumed to achieve fair presentation, while departure from a requirement occurs only in extremely rare circumstances with extensive disclosures when the regulatory framework permits.",
        ),
        keyPoints: [
          text(
            "اعرض مجموعة كاملة مرة سنويًا على الأقل وبالأهمية نفسها لكل قائمة.",
            "Present a complete set at least annually with equal prominence for each statement.",
          ),
          text(
            "أضف القائمة الثالثة فقط عندما يكون أثر الرجوع جوهريًا على مركز بداية المقارنة.",
            "Add the third statement only when the retrospective effect at comparative opening is material.",
          ),
          text(
            "لا تصف القوائم بأنها ممتثلة ما لم تستوف جميع المتطلبات المنطبقة.",
            "Do not describe statements as compliant unless all applicable requirements are met.",
          ),
        ],
        reference: "IAS 1.1–18, 36–40D",
      },
      {
        title: text(
          "الاستمرارية والاستحقاق والأهمية وعدم المقاصة",
          "Going concern, accruals, materiality and no offsetting",
        ),
        explanation: text(
          "تقيّم الإدارة قدرة المنشأة على الاستمرار آخذة جميع المعلومات المتاحة عن المستقبل، لفترة لا تقل عن اثني عشر شهرًا من نهاية الفترة وليست محدودة بها. إذا وجدت شكوك جوهرية قد تثير عدم تأكد جوهريًا، تفصح المنشأة عن الأحداث والظروف وخطط التعامل؛ وإذا لم يعد أساس الاستمرارية مناسبًا فلا تعد القوائم عليه وتكشف الأساس البديل. فيما عدا التدفقات النقدية، تستخدم المحاسبة على أساس الاستحقاق. تعرض كل فئة جوهرية من البنود المتشابهة منفصلة، ولا تخفي المعلومات الجوهرية بتجميع غير مناسب. ولا تقاص الأصول والالتزامات أو الدخل والمصروف إلا إذا طلب أو سمح معيار آخر.",
          "Management assesses the entity's ability to continue as a going concern using all available future information, for at least twelve months from period end but not limited to that period. Material uncertainties arising from events or conditions are disclosed with management's response; if going concern is no longer appropriate, statements are prepared on another basis and that basis is explained. Except for cash-flow information, accrual accounting applies. Each material class of similar items is presented separately and material information is not obscured by inappropriate aggregation. Assets and liabilities, or income and expenses, are not offset unless another Standard requires or permits it.",
        ),
        keyPoints: [
          text(
            "قيّم المنشأة ككل، ثم عالج مشكلات مكوّن منفرد وفق معايير الانخفاض أو المخصصات عند الحاجة.",
            "Assess the entity as a whole, then address component-specific difficulties under impairment or provision Standards as needed.",
          ),
          text(
            "وثّق السيناريوهات والسيولة والتمويل والحساسيات الداعمة لحكم الاستمرارية.",
            "Document scenarios, liquidity, financing and sensitivities supporting the going-concern judgement.",
          ),
          text(
            "اختبر المقاصة على أساس نص معياري محدد لا على الرغبة في تقليل حجم القائمة.",
            "Test offsetting against a specific Standard, not a desire to shorten the statement.",
          ),
        ],
        reference: "IAS 1.25–35, 29–35",
      },
      {
        title: text(
          "التصنيف الجاري وحقوق التأجيل والتعهدات",
          "Current classification, deferral rights and covenants",
        ),
        explanation: text(
          "يصنف الأصل جاريًا إذا كان ضمن دورة التشغيل العادية أو محتفظًا به للمتاجرة أو متوقعًا تحقيقه خلال اثني عشر شهرًا أو كان نقدًا غير مقيد طويلًا. ويصنف الالتزام جاريًا إذا كان ضمن دورة التشغيل أو للمتاجرة أو مستحقًا خلال اثني عشر شهرًا أو لم تكن للمنشأة في نهاية الفترة تسوية حق في تأجيل تسويته اثني عشر شهرًا على الأقل. النية في إعادة التمويل لا تكفي: يجب أن يكون الحق قائمًا في تاريخ التقرير. التعهد الذي يجب الالتزام به في ذلك التاريخ يؤثر في وجود الحق، أما التعهد الواجب بعد التاريخ فلا يغير التصنيف لكنه قد يستلزم إفصاحًا يمكّن المستخدم من فهم خطر أن يصبح الالتزام مستحقًا خلال اثني عشر شهرًا.",
          "An asset is current when it is in the normal operating cycle, held for trading, expected to be realised within twelve months, or unrestricted cash. A liability is current when it is in the operating cycle, held for trading, due within twelve months, or the entity lacks at period end the right to defer settlement for at least twelve months. An intention to refinance is insufficient: the right must exist at the reporting date. A covenant with which the entity must comply on that date affects the right; a covenant tested only after that date does not change classification but may require disclosure enabling users to understand the risk that the liability becomes repayable within twelve months.",
        ),
        keyPoints: [
          text(
            "استخدم الحق القائم وشروط العقد في تاريخ التقرير، لا توقعات الإدارة وحدها.",
            "Use the existing right and contract terms at the reporting date, not management expectations alone.",
          ),
          text(
            "اتفاق إعادة التمويل أو تنازل المقرض بعد الفترة لا يصلح عادة تصنيف نهاية الفترة.",
            "A refinancing agreement or lender waiver obtained after period end generally does not repair period-end classification.",
          ),
          text(
            "افصح عن التعهدات المستقبلية والمعلومات التي تشير إلى صعوبة الالتزام بها عندما يكون الخطر جوهريًا.",
            "Disclose future covenants and facts indicating possible non-compliance when the risk is material.",
          ),
        ],
        reference: "IAS 1.60–76ZA",
      },
      {
        title: text(
          "العرض والمقارنات والانتقال إلى IFRS 18",
          "Presentation, comparatives and transition to IFRS 18",
        ),
        explanation: text(
          "يتطلب IAS 1 حدًا أدنى من البنود ويضيف بنودًا ومجاميع فرعية عندما تكون ملائمة، مع فصل الدخل الشامل الآخر القابل لإعادة التصنيف عن غير القابل. تحلل المصروفات بالطبيعة أو الوظيفة وفق ما يقدم معلومات أكثر فائدة، وإذا استخدمت الوظيفة تقدم معلومات طبيعية إضافية مطلوبة. تثبت معاملات الملاك في قائمة التغيرات في حقوق الملكية، وتعرض الإيضاحات سياسات محاسبية جوهرية لا نصوصًا نمطية. يعاد تصنيف المقارنات عند تغيير العرض إن كان عمليًا مع شرح الأثر. سيحل IFRS 18 محل IAS 1 للفترات التي تبدأ في أو بعد 1 يناير 2027—مع السماح بالتطبيق المبكر—ولذلك يجب ألا تُخلط متطلبات العرض الجديدة مع قوائم 2026 ما لم تطبق المنشأة IFRS 18 مبكرًا.",
          "IAS 1 specifies minimum line items and adds lines and subtotals when relevant, separating OCI that may be reclassified from OCI that will not. Expenses are analysed by nature or function according to whichever provides more useful information; a functional analysis requires specified additional nature information. Owner transactions appear in changes in equity, while notes disclose material accounting policy information rather than boilerplate. Comparatives are reclassified when presentation changes if practicable, with the effect explained. IFRS 18 replaces IAS 1 for periods beginning on or after 1 January 2027, with earlier application permitted, so its new presentation requirements are not mixed into 2026 statements unless the entity early applies IFRS 18.",
        ),
        keyPoints: [
          text(
            "طابق كل مجموع فرعي إضافي مع البنود المعترف بها والمقاسة وفق IFRS.",
            "Reconcile each additional subtotal to items recognised and measured under IFRS.",
          ),
          text(
            "افصل تغيرات الملاك عن الدخل الشامل في حركة حقوق الملكية.",
            "Separate owner changes from comprehensive income in the equity roll-forward.",
          ),
          text(
            "ضع خطة انتقال مستقلة لـIFRS 18 تشمل المقارنات والمجاميع ومقاييس الإدارة.",
            "Maintain a separate IFRS 18 transition plan covering comparatives, subtotals and management measures.",
          ),
        ],
        reference: "IAS 1.38–46, 54–59, 81A–117; IFRS 18.C1–C3",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قرض مع تعهد منقوض وتنازل لاحق",
          "Loan with a breached covenant and a later waiver",
        ),
        facts: text(
          "لدى منشأة قرض قدره 5,000,000 يستحق تعاقديًا في 2030. يشترط العقد ألا تتجاوز نسبة الدين إلى الأرباح 3.0 في 31 ديسمبر 2026. بلغت النسبة 3.4 في ذلك التاريخ، فأصبح للمقرض حق طلب السداد. حصلت المنشأة على تنازل من المقرض في 10 فبراير 2027، قبل اعتماد القوائم في 20 مارس. ويوجد تعهد آخر سيُختبر لأول مرة في 30 يونيو 2027.",
          "An entity has a 5,000,000 loan contractually due in 2030. The agreement requires debt-to-earnings not to exceed 3.0 at 31 December 2026. The ratio is 3.4 on that date, giving the lender a right to demand repayment. The lender waives the breach on 10 February 2027 before the statements are authorised on 20 March. Another covenant will first be tested on 30 June 2027.",
        ),
        calculations: [
          text(
            "في 31 ديسمبر لا تملك المنشأة حق تأجيل التسوية اثني عشر شهرًا بسبب خرق التعهد القائم في ذلك التاريخ.",
            "At 31 December the entity lacks a right to defer settlement for twelve months because it breached the covenant applicable on that date.",
          ),
          text(
            "يصنف مبلغ 5,000,000 التزامًا جاريًا؛ التنازل في 10 فبراير حدث غير معدل ويُفصح عنه إذا كان جوهريًا.",
            "The 5,000,000 is classified as current; the 10 February waiver is a non-adjusting event disclosed if material.",
          ),
          text(
            "تعهد 30 يونيو لا يؤثر وحده في تصنيف 31 ديسمبر لأنه لا يلزم الالتزام به في تاريخ التقرير، لكن تكشف معلومات الخطر إذا أشارت الوقائع إلى صعوبة تحقيقه.",
            "The 30 June covenant alone does not affect 31 December classification because compliance is not required at the reporting date, but risk information is disclosed if facts indicate possible non-compliance.",
          ),
        ],
        conclusion: text(
          "التصنيف يتبع الحق القائم في تاريخ التقرير وليس تاريخ الاستحقاق الأصلي وحده أو التنازل الذي تم الحصول عليه لاحقًا. وهذا يصحح التطبيق القديم الذي كان قد يعتمد على مجرد نية إعادة التمويل.",
          "Classification follows the right existing at the reporting date, not merely original maturity or a waiver obtained later. This corrects the older approach that could rely on refinancing intention alone.",
        ),
        journalEntries: [
          {
            label: text("إعادة عرض القرض في القسم الجاري", "Reclassify the loan as current"),
            debit: text("قرض غير جاري", "Non-current loan"),
            credit: text("قرض جاري", "Current loan"),
            amount: text("5,000,000", "5,000,000"),
          },
        ],
        reference: "IAS 1.69–76ZA; IAS 10.22",
      },
    ],
  },
  "IAS 8": {
    sections: [
      {
        title: text(
          "اختيار السياسة المحاسبية وتسلسل الحكم",
          "Selecting accounting policies and the judgement hierarchy",
        ),
        explanation: text(
          "السياسة المحاسبية هي المبادئ والأسس والقواعد والممارسات المحددة المستخدمة في إعداد القوائم. عندما ينطبق معيار أو تفسير على معاملة، تطبق متطلباته وإرشاداته ذات الصلة. وعند غياب نص خاص تستخدم الإدارة حكمها لإنتاج معلومات ملائمة وموثوقة: ترجع أولًا إلى متطلبات المعايير في مسائل مشابهة ومرتبطة، ثم إلى تعريفات ومعايير الاعتراف ومفاهيم القياس في الإطار المفاهيمي. ويمكن النظر إلى إصدارات جهات أخرى ذات إطار مشابه والممارسات المقبولة ما دامت لا تتعارض مع المصدرين الأعلى. تطبق السياسة باتساق على المعاملات المتشابهة إلا إذا طلب معيار تصنيفًا يسمح بسياسات مختلفة.",
          "An accounting policy is a specific principle, basis, convention, rule or practice used in preparing statements. When a Standard or Interpretation applies to a transaction, its relevant requirements and guidance are applied. Without specific guidance, management uses judgement to produce relevant and reliable information: first considering IFRS requirements for similar and related issues, then definitions, recognition criteria and measurement concepts in the Conceptual Framework. Pronouncements of other bodies with a similar framework and accepted practice may be considered only when they do not conflict with those higher sources. A policy is applied consistently to similar transactions unless a Standard requires or permits categories with different policies.",
        ),
        keyPoints: [
          text(
            "وثّق البحث عن معيار مباشر قبل استخدام القياس أو الممارسة بالقياس.",
            "Document the search for directly applicable guidance before using analogy or practice.",
          ),
          text(
            "السياسة تحدد أساس القياس أو الاعتراف؛ التطبيق العددي لذلك الأساس قد يحتاج تقديرًا.",
            "A policy sets the recognition or measurement basis; applying that basis numerically may require an estimate.",
          ),
          text(
            "لا تنقل ممارسة قطاعية إذا تعارضت مع معيار أو الإطار المفاهيمي.",
            "Do not import industry practice that conflicts with a Standard or the Conceptual Framework.",
          ),
        ],
        reference: "IAS 8.5, 7–13",
      },
      {
        title: text(
          "تغير السياسة والتطبيق بأثر رجعي",
          "Policy changes and retrospective application",
        ),
        explanation: text(
          "لا تغير المنشأة سياسة إلا إذا طلب معيار ذلك أو نتج عن التغيير معلومات أكثر موثوقية وملاءمة. تتبع الأحكام الانتقالية الخاصة عند صدور معيار جديد؛ وفي التغيير الاختياري أو عند غياب أحكام انتقالية يطبق التغيير بأثر رجعي كما لو كانت السياسة الجديدة مستخدمة دائمًا، فتعدل المقارنات والرصيد الافتتاحي لكل مكوّن متأثر من حقوق الملكية في أقدم فترة معروضة. يتوقف الرجوع فقط عندما يكون تحديد أثر فترة معينة أو الأثر التراكمي غير عملي بعد بذل كل جهد معقول، وعندها يبدأ التطبيق من أقدم تاريخ عملي مع شرح سبب عدم العملية.",
          "An entity changes a policy only when a Standard requires it or the change produces more reliable and relevant information. Specific transition provisions apply for a new Standard; otherwise a voluntary change is applied retrospectively as if the new policy had always been used, adjusting comparatives and the opening balance of each affected equity component in the earliest period presented. Retrospection stops only when determining a period-specific or cumulative effect is impracticable after every reasonable effort; application then begins from the earliest practicable date with the reason explained.",
        ),
        keyPoints: [
          text(
            "الانتقال من أساس تكلفة إلى أساس قيمة عادلة محدد هو عادة تغير سياسة، لا تغير تقدير.",
            "Moving from a specified cost basis to a fair-value basis is generally a policy change, not an estimate change.",
          ),
          text(
            "لا تستخدم عدم العملية كمرادف لارتفاع التكلفة أو ضيق الوقت.",
            "Do not treat impracticability as a synonym for cost or time pressure.",
          ),
          text(
            "افصح عن طبيعة التغيير وسببه وأثره على كل بند وربحية السهم عند الانطباق.",
            "Disclose the change's nature, reason and line-item and EPS effects when applicable.",
          ),
        ],
        reference: "IAS 8.14–31",
      },
      {
        title: text(
          "التقديرات: معلومات جديدة لا إعادة كتابة الماضي",
          "Estimates: new information, not rewritten history",
        ),
        explanation: text(
          "التقديرات المحاسبية مبالغ نقدية في القوائم تخضع لعدم تأكد القياس، مثل خسائر الائتمان والقيمة القابلة للتحقق والالتزامات المقدرة والأعمار والقيم المتبقية. تغير مدخل أو افتراض أو أسلوب قياس يعد تغير تقدير ما لم يصحح خطأ سابقًا؛ أما تغير أساس القياس نفسه فهو تغير سياسة. يثبت أثر تغير التقدير مستقبلًا في فترة التغيير فقط أو فيها والفترات المقبلة بحسب الأثر، أو بتعديل القيمة الدفترية للأصل أو الالتزام أو حقوق الملكية عند الاقتضاء. وإذا تعذر عمليًا الفصل بين تغير سياسة وتقدير، يعامل كتغير تقدير بعد تحليل كافٍ.",
          "Accounting estimates are monetary amounts in the statements subject to measurement uncertainty, such as credit losses, net realisable value, provisions, useful lives and residual values. A change in an input, assumption or measurement technique is an estimate change unless it corrects a prior error; changing the measurement basis itself is a policy change. An estimate change is recognised prospectively in the current period only or in current and future periods depending on its effects, or by adjusting the related asset, liability or equity carrying amount. If policy and estimate cannot be distinguished after sufficient analysis, the change is treated as an estimate change.",
        ),
        keyPoints: [
          text(
            "اسأل: هل كانت المعلومات الجديدة متاحة ويمكن توقع استخدامها سابقًا؟",
            "Ask whether the new information was available and could reasonably have been used previously.",
          ),
          text(
            "لا تعدل مقارنات صحيحة لمجرد أن التوقع الحالي اختلف.",
            "Do not restate correct comparatives merely because today's expectation differs.",
          ),
          text(
            "افصح عن طبيعة ومبلغ الأثر الحالي والمتوقع مستقبلًا أو سبب تعذر تقديره.",
            "Disclose the nature and amount of current and expected future effects or why estimation is impracticable.",
          ),
        ],
        reference: "IAS 8.5, 32–40",
      },
      {
        title: text("أخطاء الفترات السابقة وإعادة البيان", "Prior-period errors and restatement"),
        explanation: text(
          "الخطأ السابق هو حذف أو تحريف ناشئ من عدم استخدام أو سوء استخدام معلومات موثوقة كانت متاحة عندما اعتمدت القوائم وكان متوقعًا بصورة معقولة الحصول عليها واستخدامها. تشمل الأخطاء الحسابية وسوء تطبيق السياسة وإغفال الوقائع والغش. يصحح الخطأ الجوهري بأثر رجعي في أول قوائم تعتمد بعد اكتشافه: تعاد أرقام الفترة التي وقع فيها، أو تعدل الأرصدة الافتتاحية لأقدم فترة إذا سبقها. لا يدخل أثر التصحيح في ربح الفترة المكتشف فيها. تفصح المنشأة عن طبيعة الخطأ ومبلغ التصحيح لكل بند ولكل فترة وربحية السهم، أو تشرح عدم العملية وكيف ومتى تم التصحيح.",
          "A prior-period error is an omission or misstatement from failing to use, or misusing, reliable information available when the statements were authorised and reasonably expected to have been obtained and considered. Errors include arithmetic mistakes, policy misapplication, overlooked facts and fraud. A material error is corrected retrospectively in the first statements authorised after discovery: amounts are restated in the affected period or opening balances of the earliest period when the error predates it. The correction does not enter profit in the discovery period. The entity discloses the error's nature and correction by line item, period and EPS, or explains impracticability and how and when correction occurred.",
        ),
        keyPoints: [
          text(
            "ميّز الخطأ عن نتيجة تقدير معقول ثبت لاحقًا أنه غير دقيق.",
            "Distinguish an error from a reasonable estimate later shown to be inaccurate.",
          ),
          text(
            "قيّم الجوهرية منفردة ومجتمعة ولا ترحل الخطأ عمدًا إلى السنة الحالية.",
            "Assess materiality individually and collectively; do not intentionally roll an error into the current year.",
          ),
          text(
            "اربط إعادة البيان بقائمة مركز مالي ثالثة وفق IAS 1 إذا كان أثر البداية جوهريًا.",
            "Connect restatement to an IAS 1 third statement of financial position when the opening effect is material.",
          ),
        ],
        reference: "IAS 8.5, 41–53",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تغير عمر إنتاجي مقابل خطأ مخزون",
          "Useful-life revision versus an inventory error",
        ),
        facts: text(
          "اشترت منشأة آلة بمبلغ 1,000,000 في 1 يناير 2024 بعمر مقدر عشر سنوات وقيمة متبقية صفر، واستخدمت القسط الثابت. في 1 يناير 2026 أظهرت معلومات فنية جديدة أن العمر المتبقي أربع سنوات. وفي 2026 اكتشفت أيضًا أن مخزون 31 ديسمبر 2025 كان منخفضًا بمبلغ 150,000 بسبب خطأ عدّ كانت معلوماته متاحة عند الإقفال. نهمل الضريبة للتوضيح.",
          "An entity buys a machine for 1,000,000 on 1 January 2024 with a ten-year life, zero residual value and straight-line depreciation. On 1 January 2026 new engineering information indicates a four-year remaining life. In 2026 the entity also discovers that 31 December 2025 inventory was understated by 150,000 because of a counting error whose information was available at close. Tax is ignored for illustration.",
        ),
        calculations: [
          text(
            "إهلاك 2024 و2025 الصحيح = 1,000,000 ÷ 10 = 100,000 سنويًا؛ القيمة في 1 يناير 2026 = 800,000.",
            "Correct 2024 and 2025 depreciation = 1,000,000 ÷ 10 = 100,000 annually; carrying amount at 1 January 2026 = 800,000.",
          ),
          text(
            "العمر الجديد تغير تقدير مبني على معلومات جديدة: إهلاك 2026 وما بعده = 800,000 ÷ 4 = 200,000 سنويًا دون إعادة بيان 2024 أو 2025.",
            "The new life is an estimate change based on new information: depreciation from 2026 = 800,000 ÷ 4 = 200,000 annually, without restating 2024 or 2025.",
          ),
          text(
            "نقص المخزون 150,000 خطأ سابق، فيعاد بيان مقارنة 2025 بزيادة المخزون والربح قبل الضريبة 150,000، لا كدخل جديد في 2026.",
            "The 150,000 inventory understatement is a prior error, so the 2025 comparative inventory and pre-tax profit increase by 150,000; it is not new 2026 income.",
          ),
        ],
        conclusion: text(
          "مصدر المعلومة وتوافرها في التاريخ السابق هو الفاصل: التطور الفني اللاحق يغير التقدير مستقبلًا، بينما معلومة العد المتاحة تكشف خطأ يعاد بيانه.",
          "The source and historical availability of information drive the answer: later engineering developments change the estimate prospectively, while available count information reveals an error requiring restatement.",
        ),
        journalEntries: [
          {
            label: text(
              "إهلاك سنة 2026 وفق التقدير الجديد",
              "2026 depreciation under the new estimate",
            ),
            debit: text("مصروف إهلاك", "Depreciation expense"),
            credit: text("مجمع إهلاك", "Accumulated depreciation"),
            amount: text("200,000", "200,000"),
          },
          {
            label: text(
              "قيد تصحيح الخطأ في الأرصدة الافتتاحية",
              "Opening entry to correct the prior error",
            ),
            debit: text("مخزون", "Inventory"),
            credit: text("أرباح محتجزة", "Retained earnings"),
            amount: text("150,000", "150,000"),
          },
        ],
        reference: "IAS 8.32–40, 41–49",
      },
    ],
  },
  "IAS 10": {
    sections: [
      {
        title: text("نافذة الأحداث وتاريخ الاعتماد", "The event window and authorisation date"),
        explanation: text(
          "أحداث ما بعد الفترة هي الأحداث المواتية وغير المواتية الواقعة بين نهاية الفترة وتاريخ اعتماد القوائم للإصدار. يختلف تاريخ الاعتماد باختلاف هيكل الحوكمة والقانون: إذا كان المساهمون يعتمدون القوائم بعد إصدارها، يكون تاريخ الإصدار هو نهاية النافذة لا اجتماع المساهمين. تفصح المنشأة عن تاريخ الاعتماد والجهة التي اعتمدت القوائم، وما إذا كان يحق للملاك أو غيرهم تعديلها بعد الإصدار. يجب أن يغطي إجراء الإقفال جميع مصادر الأحداث حتى ذلك التاريخ، مثل محاضر المجلس والقضايا والتحصيلات والتعثرات والعقود والتقييمات.",
          "Events after the reporting period are favourable and unfavourable events between period end and the date the statements are authorised for issue. The authorisation date depends on governance and law: when shareholders approve statements after issuance, the issue date closes the window, not the shareholder meeting. The entity discloses the authorisation date, who authorised the statements and whether owners or others can amend them after issue. Closing procedures cover all event sources through that date, including board minutes, litigation, collections, defaults, contracts and valuations.",
        ),
        keyPoints: [
          text(
            "ثبت تاريخ الاعتماد رسميًا ولا تستخدم تاريخ توقيع المدقق تلقائيًا دون تحليل.",
            "Establish the formal authorisation date; do not automatically use the auditor's signing date without analysis.",
          ),
          text(
            "اجمع الأحداث المواتية وغير المواتية؛ المعيار لا يقتصر على الخسائر.",
            "Capture favourable and unfavourable events; the Standard is not limited to losses.",
          ),
          text(
            "استمر في تحديث السجل حتى لحظة الاعتماد لا حتى انتهاء العمل الميداني فقط.",
            "Keep the event register current through authorisation, not merely the end of fieldwork.",
          ),
        ],
        reference: "IAS 10.1–7, 17–18",
      },
      {
        title: text(
          "الحدث المعدل: دليل على حالة قائمة",
          "Adjusting events: evidence about an existing condition",
        ),
        explanation: text(
          "يعدل الحدث الأرقام عندما يقدم دليلًا إضافيًا عن حالة كانت موجودة في نهاية الفترة. من الأمثلة تسوية قضية تؤكد وجود التزام، وإفلاس عميل بعد الفترة بما يؤكد انخفاض الرصيد في نهايتها، وبيع مخزون بما يقدم دليلًا على صافي قيمته القابلة للتحقق في التاريخ، وتحديد تكلفة أصل تم شراؤه أو حصيلة أصل بيع قبل النهاية، واكتشاف غش أو خطأ. لا يكفي أن يقع الحدث لاحقًا؛ السؤال الحاكم هو متى نشأت الحالة الاقتصادية التي يوضحها. يراجع التعديل القياس والإفصاح معًا، وقد يغير مخصصًا أو انخفاضًا أو إيرادًا أو ضريبة.",
          "An event adjusts amounts when it provides additional evidence about a condition existing at period end. Examples include litigation settlement confirming an obligation, a customer's post-period bankruptcy confirming closing-date impairment, an inventory sale evidencing period-end net realisable value, determining the cost or proceeds of an asset purchased or sold before period end, and discovering fraud or error. Mere later occurrence is insufficient; the controlling question is when the underlying economic condition arose. Adjustment covers measurement and disclosure and may change a provision, impairment, income or tax.",
        ),
        keyPoints: [
          text(
            "اكتب الحالة في تاريخ التقرير ثم حدد ما الدليل الجديد الذي قدمه الحدث.",
            "Describe the reporting-date condition, then identify the new evidence supplied by the event.",
          ),
          text(
            "لا تجعل تاريخ الفاتورة أو الحكم القضائي بديلًا عن تحليل نشأة الالتزام.",
            "Do not substitute invoice or judgment date for analysis of when the obligation arose.",
          ),
          text(
            "أعد حساب التقدير وفق المعيار المختص، مثل IFRS 9 أو IAS 2 أو IAS 37.",
            "Remeasure under the relevant Standard, such as IFRS 9, IAS 2 or IAS 37.",
          ),
        ],
        reference: "IAS 10.8–9",
      },
      {
        title: text(
          "الحدث غير المعدل والإفصاح الجوهري",
          "Non-adjusting events and material disclosure",
        ),
        explanation: text(
          "إذا دل الحدث على حالة نشأت بعد نهاية الفترة فلا تعدل أرقام النهاية، لكن تكشف طبيعة الحدث وتقدير أثره المالي عندما يكون جوهريًا، أو تصرح بتعذر التقدير. تشمل الأمثلة اندماجًا كبيرًا أو بيع شركة تابعة، وحريقًا لاحقًا، وإعادة هيكلة أُعلنت بعد الفترة، وإصدار أسهم، وتغيرًا غير عادي في أسعار الأصول أو العملات، وتغير معدل ضريبة سُن بعد الفترة، والتزامًا أو ضمانًا مهمًا جديدًا، وبدء تقاضٍ عن حدث لاحق. قد يكون عدم الإفصاح مضللًا حتى لو كان القيد صفرًا في تاريخ التقرير.",
          "When an event indicates a condition arising after period end, closing amounts are not adjusted, but the event's nature and estimated financial effect are disclosed if material, or inability to estimate is stated. Examples include a major combination or subsidiary disposal, a later fire, a restructuring announced after period end, a share issue, unusually large asset-price or currency movements, a tax-rate change enacted later, a new major commitment or guarantee, and litigation arising from a later event. Omission can be misleading even when the period-end journal entry is nil.",
        ),
        keyPoints: [
          text(
            "اختبر الجوهرية على قرارات المستخدم لا على وجود قيد محاسبي.",
            "Assess materiality by user decisions, not by whether a journal entry exists.",
          ),
          text(
            "حدّث تقدير الأثر حتى الاعتماد، وفسّر عدم إمكان التقدير بدل ترك الإفصاح فارغًا.",
            "Update effect estimates through authorisation and explain inability to estimate rather than leaving disclosure blank.",
          ),
          text(
            "اربط الحدث بتعهدات التمويل والسيولة والقطاعات والمخاطر الأخرى المتأثرة.",
            "Connect the event to financing covenants, liquidity, segments and other affected risks.",
          ),
        ],
        reference: "IAS 10.10, 21–22",
      },
      {
        title: text(
          "التوزيعات والاستمرارية وتحديث الإفصاح",
          "Dividends, going concern and updated disclosure",
        ),
        explanation: text(
          "التوزيعات المعلنة بعد نهاية الفترة لا تثبت التزامًا في ذلك التاريخ لأنها لم تصبح التزامًا قائمًا، لكنها تفصح وفق المتطلبات ذات الصلة. أما إذا أظهرت أحداث لاحقة أن الإدارة تنوي تصفية المنشأة أو وقف نشاطها أو لا تملك بديلًا واقعيًا، فلا تعد القوائم على أساس الاستمرارية؛ وهذا تغيير جوهري في أساس المحاسبة وليس مجرد تعديل مبلغ. كذلك إذا وردت بعد الفترة معلومات جديدة عن حالة كانت مفصحًا عنها أصلًا، تحدّث المنشأة الإفصاح حتى لو لم يتغير مبلغ معترف به، مثل تطور التزام محتمل كان قائمًا عند النهاية.",
          "Dividends declared after period end are not liabilities at that date because no present obligation then exists, though they are disclosed under the applicable requirements. If later events show management intends to liquidate or cease trading, or has no realistic alternative, the statements are not prepared on a going-concern basis; this is a fundamental change in accounting basis, not merely an amount adjustment. New post-period information about a condition previously disclosed also updates that disclosure even if no recognised amount changes, such as developments in a closing-date contingent liability.",
        ),
        keyPoints: [
          text(
            "ميّز بين اقتراح التوزيع واعتماده وفق قانون الشركة قبل تحديد الالتزام.",
            "Distinguish proposing from authorising a dividend under company law before determining the obligation.",
          ),
          text(
            "أعد تقييم الاستمرارية حتى تاريخ الاعتماد باستخدام أحدث السيولة وخطط التمويل.",
            "Reassess going concern through authorisation using the latest liquidity and financing plans.",
          ),
          text(
            "حدّث الإفصاح عن الحالات القائمة حتى إذا لم ينتج الحدث قيدًا جديدًا.",
            "Update disclosures about existing conditions even when the event produces no new entry.",
          ),
        ],
        reference: "IAS 10.12–16, 19–20",
      },
    ],
    workedExamples: [
      {
        title: text(
          "إفلاس عميل وحريق وتوزيعات بعد نهاية السنة",
          "Customer bankruptcy, fire and dividend after year-end",
        ),
        facts: text(
          "تنتهي سنة منشأة في 31 ديسمبر 2026 وتعتمد القوائم في 20 مارس 2027. كان على عميل متعثر رصيد 600,000 في نهاية السنة، ثم أعلن إفلاسه في 20 يناير بسبب صعوبات كانت قائمة قبل ديسمبر ولا يتوقع تحصيل شيء. وفي 15 يناير دمر حريق مستودعًا قيمته 2,000,000 ولم تكن أسبابه قائمة في نهاية السنة. وفي 5 فبراير أعلن المجلس توزيعات قدرها 400,000.",
          "An entity's year ends on 31 December 2026 and its statements are authorised on 20 March 2027. A financially distressed customer owes 600,000 at year-end and enters bankruptcy on 20 January because of difficulties existing before December; no recovery is expected. On 15 January a fire destroys a 2,000,000 warehouse, with no underlying condition at year-end. On 5 February the board declares a 400,000 dividend.",
        ),
        calculations: [
          text(
            "الإفلاس يؤكد حالة ائتمانية قائمة في 31 ديسمبر: يثبت انخفاض 600,000 وفق IFRS 9 مع تحديث الإفصاح.",
            "Bankruptcy confirms a credit condition existing at 31 December: a 600,000 IFRS 9 impairment is recognised and disclosure updated.",
          ),
          text(
            "الحريق حالة نشأت في يناير: لا تخفض أصول 31 ديسمبر، لكن يفصح عن طبيعته وأثر 2,000,000 إذا كان جوهريًا.",
            "The fire is a January condition: 31 December assets are not reduced, but its nature and 2,000,000 effect are disclosed if material.",
          ),
          text(
            "التوزيعات المعلنة في فبراير لا تثبت التزامًا بمبلغ 400,000 في 31 ديسمبر؛ تعرض في الإفصاح المناسب.",
            "The February dividend does not create a 400,000 liability at 31 December; it is presented in the appropriate disclosure.",
          ),
        ],
        conclusion: text(
          "ليس تاريخ وقوع الخبر هو الاختبار الوحيد: إفلاس يناير عدل الأرقام لأنه أكد حالة قديمة، بينما الحريق والتوزيع نشآ بعد الفترة فلا يعدلان الرصيد الختامي.",
          "The news date is not the sole test: January bankruptcy adjusts amounts because it confirms an old condition, while the fire and dividend arise after period end and do not adjust closing balances.",
        ),
        journalEntries: [
          {
            label: text("إثبات انخفاض رصيد العميل", "Recognise customer impairment"),
            debit: text("خسارة انخفاض ائتماني", "Credit impairment loss"),
            credit: text("مخصص خسائر ائتمانية", "Credit loss allowance"),
            amount: text("600,000", "600,000"),
          },
        ],
        reference: "IAS 10.8–16, 21–22; IFRS 9",
      },
    ],
  },
  "IFRS 2": {
    sections: [
      {
        title: text(
          "الفكرة الأساسية والنطاق وتاريخ الاعتراف",
          "Core principle, scope and recognition timing",
        ),
        explanation: text(
          "يطبق IFRS 2 عندما تحصل المنشأة على سلع أو خدمات مقابل أدوات حقوق ملكيتها أو مقابل مبالغ تعتمد على سعر أسهمها أو أدوات حقوق ملكيتها. تثبت السلعة أو الخدمة عند الحصول عليها، كأصل إذا استوفت شروط معيار آخر أو كمصروف بخلاف ذلك، مع زيادة مقابلة في حقوق الملكية للمعاملة المسواة بحقوق الملكية أو التزام للمعاملة المسواة نقدًا. لا يؤجل المصروف لمجرد أن المقابل أسهم أو خيارات، ولا تعني معاملة المساهم بصفته مالكًا بالضرورة أنها دفعة على أساس السهم؛ يلزم تحديد السلع أو الخدمات المستلمة وصفة الطرف المتعامل.",
          "IFRS 2 applies when an entity receives goods or services for its own equity instruments or for amounts based on the price of its shares or equity instruments. The goods or services are recognised when received, as an asset if another Standard's criteria are met and otherwise as an expense, with a corresponding increase in equity for an equity-settled transaction or a liability for a cash-settled transaction. Expense recognition is not deferred merely because consideration is shares or options, and a shareholder transaction is not automatically share-based payment; the goods or services received and the counterparty's capacity must be identified.",
        ),
        keyPoints: [
          text(
            "حدد أولًا هل توجد سلع أو خدمات مستلمة، ثم صنف طريقة التسوية.",
            "First identify the goods or services received, then classify the settlement method.",
          ),
          text(
            "إذا لم تتأهل الخدمة أو السلعة كأصل، يثبت أثرها مصروفًا عند الاستهلاك.",
            "If the service or good does not qualify as an asset, recognise its effect as expense when consumed.",
          ),
          text(
            "افصل معاملات الاستحواذ وإعادة الهيكلة الرأسمالية ومعاملات المالك الخالصة عن نطاق المعيار عند انطباق استثناءاتها.",
            "Separate acquisition, equity-restructuring and pure owner transactions when their scope exceptions apply.",
          ),
        ],
        reference: "IFRS 2.2–6A, 7–9",
      },
      {
        title: text(
          "المعاملات المسواة بحقوق الملكية وشروط الاستحقاق",
          "Equity-settled awards and vesting conditions",
        ),
        explanation: text(
          "تقاس السلع أو الخدمات مباشرة بقيمتها العادلة إن أمكن؛ وبالنسبة لخدمات الموظفين ومن يقدمون خدمات مماثلة يستخدم عادةً للقيمة العادلة للأدوات الممنوحة في تاريخ المنح. إذا كان الاستحقاق فوريًا يثبت المبلغ فورًا، وإذا اشترطت خدمة مستقبلية يوزع على فترة الاستحقاق مع تحديث عدد الأدوات المتوقع استحقاقها للشروط الخدمية وشروط الأداء غير السوقية. تدخل الشروط السوقية وغير الاستحقاقية في القيمة العادلة ولا يعكس أثرها عادةً بعكس المصروف لاحقًا ما دامت شروط الخدمة وبقية الشروط غير السوقية مستوفاة. بعد تاريخ المنح لا يعاد قياس رصيد حقوق الملكية لمجرد تغير سعر السهم.",
          "Goods or services are measured directly at fair value when possible; employee and similar services are normally measured by reference to the grant-date fair value of the equity instruments granted. Immediate vesting is recognised immediately, while future service conditions spread recognition over the vesting period and the expected number of instruments is updated for service and non-market performance conditions. Market and non-vesting conditions enter grant-date fair value and normally do not reverse expense later if service and other non-market vesting conditions are met. After grant date the equity balance is not remeasured merely because the share price changes.",
        ),
        keyPoints: [
          text(
            "ميّز الشرط السوقي عن هدف الأداء التشغيلي لأن المعالجة اللاحقة تختلف.",
            "Distinguish a market condition from an operational performance target because subsequent accounting differs.",
          ),
          text(
            "راجع تقدير عدد المستحقين في كل إقفال للشروط الخدمية وغير السوقية.",
            "Revise the expected number vesting at each close for service and non-market conditions.",
          ),
          text(
            "لا تعكس الرصيد النهائي بسبب عدم ممارسة خيار استحق بالفعل.",
            "Do not reverse the final balance merely because a vested option is not exercised.",
          ),
        ],
        reference: "IFRS 2.10–21A, B1–B41",
      },
      {
        title: text(
          "المعاملات المسواة نقدًا وإعادة القياس",
          "Cash-settled awards and remeasurement",
        ),
        explanation: text(
          "في الحقوق التي تدفع نقدًا بحسب سعر السهم—مثل حقوق ارتفاع قيمة السهم—يثبت التزام بالقيمة العادلة للخدمات المستلمة. يعاد قياس الالتزام في كل تاريخ تقرير وعند التسوية، وتدخل التغيرات في الربح أو الخسارة، مع توزيع التكلفة على فترة الاستحقاق إن وجدت. تراعي القيمة العادلة شروط الاستحقاق وغير الاستحقاق وفق متطلبات المعيار الخاصة بالمعاملات النقدية. لذلك يختلف ملف الربح والخسارة عن المنحة المسواة بحقوق الملكية: سعر السهم والتقلبات بعد المنح يستمران في التأثير حتى التسوية.",
          "For rights paid in cash by reference to share price—such as share appreciation rights—a liability is recognised at the fair value of the services received. The liability is remeasured at every reporting date and at settlement, with changes in profit or loss, while cost is spread over any vesting period. Fair value reflects vesting and non-vesting conditions under the Standard's cash-settled requirements. The profit-or-loss profile therefore differs from an equity-settled grant: post-grant share-price and valuation changes continue to affect expense until settlement.",
        ),
        keyPoints: [
          text(
            "أعد التقييم حتى تاريخ السداد لا حتى تاريخ الاستحقاق فقط.",
            "Remeasure through payment date, not only through vesting date.",
          ),
          text(
            "افصل مصروف الخدمة عن حركة إعادة قياس الالتزام في ورقة العمل.",
            "Separate service expense from liability remeasurement in the workpaper.",
          ),
          text(
            "اختبر التصنيف من شروط التسوية الفعلية لا من اسم الخطة.",
            "Determine classification from substantive settlement terms, not the plan's label.",
          ),
        ],
        reference: "IFRS 2.30–33D",
      },
      {
        title: text(
          "اختيارات التسوية والتعديلات والإفصاح",
          "Settlement choices, modifications and disclosure",
        ),
        explanation: text(
          "إذا كان للطرف المقابل حق اختيار النقد أو الأسهم تنشأ عادة أداة مركبة بجزء التزام وجزء حقوق ملكية. وإذا كان الاختيار للمنشأة، تعامل المعاملة كحقوق ملكية ما لم يوجد التزام حالي بالتسوية نقدًا. لا يجوز لتعديل غير مفيد للموظف أن يخفض القيمة الدنيا المعترف بها للمنحة الأصلية، بينما تثبت الزيادة في القيمة العادلة عندما يكون التعديل مفيدًا. وتوجد متطلبات خاصة لصافي التسوية المتعلق بحجز ضريبة الموظف وللتغيير من التسوية النقدية إلى حقوق الملكية. تكشف المنشأة طبيعة الخطط وكيفية تحديد القيمة العادلة وأثرها في الربح أو الخسارة والمركز المالي.",
          "When the counterparty can choose cash or shares, the award generally contains a liability component and an equity component. When the entity chooses, the award is equity-settled unless a present obligation to settle in cash exists. A modification that is not beneficial to the employee cannot reduce the minimum amount recognised for the original grant, while incremental fair value is recognised when a modification is beneficial. Specific requirements cover net settlement for employee withholding tax and changes from cash to equity settlement. Disclosures explain plan nature, fair-value determination, and effects on profit or loss and financial position.",
        ),
        keyPoints: [
          text(
            "وثق من يملك خيار التسوية وما إذا كانت الممارسة السابقة أنشأت التزامًا نقديًا.",
            "Document who controls settlement and whether past practice creates a cash obligation.",
          ),
          text(
            "احسب القيمة الإضافية للتعديل في تاريخه دون محو تكلفة المنحة الأصلية.",
            "Calculate modification-date incremental value without erasing original grant cost.",
          ),
          text(
            "اربط حركة رصيد حقوق الملكية أو الالتزام بعدد الأدوات ومتوسط أسعارها.",
            "Reconcile equity or liability movements to instrument counts and weighted prices.",
          ),
        ],
        reference: "IFRS 2.27–29, 34–43C, 44–52",
      },
    ],
    workedExamples: [
      {
        title: text(
          "خيارات موظفين بشرط خدمة ثلاث سنوات",
          "Employee options with a three-year service condition",
        ),
        facts: text(
          "في 1 يناير 2026 منحت منشأة 100 موظف لكل منهم 1,000 خيار، على أن يبقى الموظف ثلاث سنوات. بلغت القيمة العادلة للخيار في تاريخ المنح 6. في نهاية 2026 توقعت المنشأة استحقاق 90 موظفًا، وفي نهاية 2027 عدلت التقدير إلى 88، وفي نهاية 2028 استحق فعليًا 85 موظفًا. لا توجد شروط سوقية أخرى.",
          "On 1 January 2026 an entity grants each of 100 employees 1,000 options, conditional on three years of service. Grant-date fair value is 6 per option. At the end of 2026 the entity expects 90 employees to vest, at the end of 2027 it revises the estimate to 88, and at the end of 2028 85 employees actually vest. There are no other market conditions.",
        ),
        calculations: [
          text(
            "2026: المصروف التراكمي = 90 × 1,000 × 6 × 1/3 = 180,000.",
            "2026: cumulative expense = 90 × 1,000 × 6 × 1/3 = 180,000.",
          ),
          text(
            "2027: المصروف التراكمي = 88 × 1,000 × 6 × 2/3 = 352,000؛ مصروف السنة = 172,000.",
            "2027: cumulative expense = 88 × 1,000 × 6 × 2/3 = 352,000; current-year expense = 172,000.",
          ),
          text(
            "2028: المبلغ النهائي = 85 × 1,000 × 6 = 510,000؛ مصروف السنة = 510,000 − 352,000 = 158,000.",
            "2028: final amount = 85 × 1,000 × 6 = 510,000; current-year expense = 510,000 − 352,000 = 158,000.",
          ),
        ],
        conclusion: text(
          "القيمة العادلة للوحدة ثابتة عند تاريخ المنح لأن المعاملة مسواة بحقوق الملكية، بينما يتغير عدد الأدوات حتى الاستحقاق لأن شرط الخدمة غير سوقي.",
          "Unit fair value remains fixed at grant date because the award is equity-settled, while the instrument count changes through vesting because service is a non-market condition.",
        ),
        journalEntries: [
          {
            label: text(
              "قيد كل سنة بحسب مصروفها المحسوب",
              "Annual entry for the calculated expense",
            ),
            debit: text("مصروف مدفوعات على أساس السهم", "Share-based payment expense"),
            credit: text("احتياطي مدفوعات على أساس السهم", "Share-based payment reserve"),
            amount: text("180,000 ثم 172,000 ثم 158,000", "180,000, then 172,000, then 158,000"),
          },
        ],
        reference: "IFRS 2.10–21A",
      },
    ],
  },
  "IAS 19": {
    sections: [
      {
        title: text(
          "مبدأ الاستحقاق والمزايا قصيرة الأجل",
          "Accrual principle and short-term benefits",
        ),
        explanation: text(
          "يحمّل IAS 19 تكلفة مزايا الموظفين للفترة التي قدم فيها الموظف الخدمة لا للفترة التي تم فيها الدفع. تشمل المزايا قصيرة الأجل الأجور والمساهمات والغياب المدفوع والمكافآت المتوقع تسويتها كليًا قبل اثني عشر شهرًا من نهاية فترة الخدمة. تقاس دون خصم ويثبت التزام بعد طرح ما دفع، أو أصل مدفوع مقدمًا إذا تجاوز الدفع الالتزام وسيؤدي إلى استرداد أو خفض مدفوعات مستقبلية. في الإجازات المتراكمة ينشأ الالتزام مع اكتساب الموظف الحق، أما الإجازات غير المتراكمة فتثبت عند حدوث الغياب. وتثبت المكافأة فقط عند وجود التزام قانوني أو ضمني وإمكان التقدير الموثوق.",
          "IAS 19 attributes employee-benefit cost to the period in which the employee renders service, not the payment period. Short-term benefits include wages, contributions, paid absences and bonuses expected to be settled wholly before twelve months after the end of the service period. They are measured without discounting, with a liability after payments or a prepaid asset when payment exceeds the obligation and will produce a refund or reduced future payments. Accumulating leave creates an obligation as entitlement is earned; non-accumulating leave is recognised when absence occurs. A bonus is recognised only when a legal or constructive obligation exists and can be reliably estimated.",
        ),
        keyPoints: [
          text(
            "اختبر مدة التسوية المتوقعة لا الاسم المستخدم في سياسة الموارد البشرية.",
            "Test expected settlement timing rather than the HR policy label.",
          ),
          text(
            "استخدم عدد أيام الإجازة المتوقع استعمالها أو دفعها، لا الرصيد النظري دائمًا.",
            "Use leave days expected to be used or paid, not always the theoretical balance.",
          ),
          text(
            "لا تثبت مشاركة الأرباح الاختيارية ما لم تنشئ الممارسة توقعًا صحيحًا والتزامًا ضمنيًا.",
            "Do not accrue discretionary profit sharing unless practice creates a valid expectation and constructive obligation.",
          ),
        ],
        reference: "IAS 19.8–25",
      },
      {
        title: text(
          "خطط المساهمات المحددة والمنافع المحددة",
          "Defined contribution and defined benefit plans",
        ),
        explanation: text(
          "في خطة المساهمات المحددة يقتصر التزام المنشأة على المساهمات المتفق عليها، فتثبت المصروفات والمبالغ المستحقة مقابل الخدمة. أما خطة المنافع المحددة فتبقي مخاطر الاكتوار والاستثمار على المنشأة؛ ويقاس الالتزام بالقيمة الحالية للمنافع المنسوبة للخدمة باستخدام طريقة وحدة الائتمان المتوقعة، ثم يطرح منه القيمة العادلة لأصول الخطة. يخضع أي صافي أصل لسقف الأصل، أي القيمة الحالية للمنافع الاقتصادية المتاحة في صورة رد أو تخفيض مساهمات مستقبلية. تستعمل افتراضات ديموغرافية ومالية غير متحيزة ومتوافقة، ويستند معدل الخصم إلى عوائد سندات شركات عالية الجودة بالعملة نفسها، أو السندات الحكومية عند غياب سوق عميقة لتلك السندات.",
          "A defined contribution plan limits the entity's obligation to agreed contributions, so expense and amounts payable are recognised for service. A defined benefit plan leaves actuarial and investment risk with the entity; the obligation is the present value of benefits attributed to service using the projected unit credit method, less the fair value of plan assets. Any net asset is capped at the present value of economic benefits available as refunds or reductions in future contributions. Unbiased, mutually compatible demographic and financial assumptions are used, and the discount rate is based on high-quality corporate bonds in the same currency, or government bonds when no deep corporate-bond market exists.",
        ),
        keyPoints: [
          text(
            "صنف الخطة من جوهر الضمان والمخاطر، لا من اسمها القانوني.",
            "Classify the plan from the substance of guarantees and risks, not its legal name.",
          ),
          text(
            "طابق عملة ومدة معدل الخصم مع عملة ومدة الالتزام.",
            "Match the discount rate's currency and duration to the obligation.",
          ),
          text(
            "اختبر سقف الأصل وأي حد أدنى للتمويل قبل عرض فائض الخطة.",
            "Test the asset ceiling and any minimum funding requirement before presenting a plan surplus.",
          ),
        ],
        reference: "IAS 19.27–49, 55–98, 113–115, 133–134",
      },
      {
        title: text(
          "مكونات التكلفة: الربح أو الخسارة والدخل الشامل الآخر",
          "Cost components: profit or loss and OCI",
        ),
        explanation: text(
          "تفصل تكلفة خطة المنافع المحددة إلى تكلفة خدمة وصافي فائدة وإعادة قياس. تشمل تكلفة الخدمة الحالية والسابقة وأثر التسويات وتثبت في الربح أو الخسارة. يحسب صافي الفائدة بتطبيق معدل الخصم في بداية الفترة على صافي التزام أو أصل المنافع المحددة، مع مراعاة التغيرات الناتجة عن المساهمات والمدفوعات. أما إعادة القياس—المكاسب والخسائر الاكتوارية، وعائد أصول الخطة باستبعاد مبلغ الفائدة، وتغير سقف الأصل باستبعاد الفائدة—فتثبت فورًا في الدخل الشامل الآخر ولا يعاد تصنيفها لاحقًا إلى الربح أو الخسارة. لا يستخدم عائد متوقع مستقل لأصول الخطة بدل هذا النموذج.",
          "Defined-benefit cost is separated into service cost, net interest and remeasurement. Current and past service cost and settlement effects go to profit or loss. Net interest applies the opening discount rate to the net defined-benefit liability or asset, considering changes from contributions and benefit payments. Remeasurements—actuarial gains and losses, plan-asset return excluding interest, and asset-ceiling changes excluding interest—are recognised immediately in OCI and are never reclassified to profit or loss. A separate expected-return assumption for plan assets is not substituted for this model.",
        ),
        keyPoints: [
          text(
            "ابدأ بصافي الرصيد لا بحساب معدل مختلف متوقع لأصول الخطة.",
            "Start from the net balance rather than a separate expected plan-asset return rate.",
          ),
          text(
            "اعترف بتكلفة الخدمة السابقة عند تعديل الخطة أو التقليص، أيهما أسبق مع إعادة الهيكلة ذات الصلة.",
            "Recognise past service cost when amendment or curtailment occurs, or earlier with a related restructuring.",
          ),
          text(
            "أبق إعادة القياس داخل حقوق الملكية بعد OCI ولا تعيد تدويرها للربح أو الخسارة.",
            "Retain remeasurement in equity after OCI without recycling it to profit or loss.",
          ),
        ],
        reference: "IAS 19.99–112, 120–130",
      },
      {
        title: text(
          "المزايا طويلة الأجل وإنهاء الخدمة والإفصاح",
          "Other long-term, termination benefits and disclosure",
        ),
        explanation: text(
          "تقاس المزايا الأخرى طويلة الأجل بطريقة قريبة من المنافع المحددة، لكن جميع مكونات صافي التكلفة—بما فيها إعادة القياس—تثبت في الربح أو الخسارة. أما مزايا إنهاء الخدمة فهي مقابل إنهاء العمل لا مقابل خدمة الموظف؛ تثبت عند التاريخ الأسبق بين تعذر سحب العرض وبين إثبات إعادة هيكلة ضمن IAS 37 تتضمن تلك المدفوعات. إذا كانت المنفعة تجمع بين مقابل خدمة وحافز إنهاء، يفصل كل جزء حسب جوهره. في خطط المنافع المحددة تشرح الإفصاحات خصائص الخطة ومخاطرها، والمبالغ في القوائم، والمصالحة، والافتراضات الاكتوارية الجوهرية والحساسيات وآثار التدفقات النقدية المستقبلية.",
          "Other long-term benefits use measurement broadly similar to defined-benefit plans, but every component of net cost—including remeasurement—is recognised in profit or loss. Termination benefits compensate for ending employment rather than employee service and are recognised at the earlier of when the offer cannot be withdrawn and when an IAS 37 restructuring involving those payments is recognised. If a benefit combines service consideration and a termination incentive, components are separated by substance. Defined-benefit disclosures explain plan characteristics and risks, statement amounts, reconciliations, significant actuarial assumptions and sensitivities, and future cash-flow effects.",
        ),
        keyPoints: [
          text(
            "اسأل هل الدفع مقابل خدمة مستقبلية؛ إن كان كذلك فليس كله منفعة إنهاء.",
            "Ask whether payment is for future service; if so, it is not wholly a termination benefit.",
          ),
          text(
            "لا تعرض إعادة قياس المزايا الطويلة الأخرى في OCI.",
            "Do not present remeasurement of other long-term benefits in OCI.",
          ),
          text(
            "ركز الحساسية على الافتراضات الجوهرية دون الإيحاء بأن السيناريوهات مستقلة تمامًا.",
            "Focus sensitivity on significant assumptions without implying scenarios are fully independent.",
          ),
        ],
        reference: "IAS 19.135–179",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مصالحة خطة منافع محددة وصافي الفائدة",
          "Defined-benefit reconciliation and net interest",
        ),
        facts: text(
          "في 1 يناير 2026 كان التزام المنافع المحددة 5,000,000 والقيمة العادلة لأصول الخطة 4,200,000، ومعدل الخصم 5%. بلغت تكلفة الخدمة الحالية 600,000 وساهمت المنشأة بـ500,000 ودُفعت من الخطة منافع 300,000. في 31 ديسمبر قيّم الخبير الالتزام بـ5,700,000 وبلغت أصول الخطة 4,550,000. نهمل سقف الأصل والضريبة.",
          "At 1 January 2026 the defined-benefit obligation is 5,000,000 and plan assets are 4,200,000, with a 5% discount rate. Current service cost is 600,000, the entity contributes 500,000 and the plan pays benefits of 300,000. At 31 December the actuary values the obligation at 5,700,000 and plan assets are 4,550,000. Asset ceiling and tax are ignored.",
        ),
        calculations: [
          text(
            "صافي الالتزام الافتتاحي = 5,000,000 − 4,200,000 = 800,000؛ صافي الفائدة في الربح أو الخسارة = 800,000 × 5% = 40,000.",
            "Opening net liability = 5,000,000 − 4,200,000 = 800,000; net interest in profit or loss = 800,000 × 5% = 40,000.",
          ),
          text(
            "التزام متوقع قبل إعادة القياس = 5,000,000 + 250,000 فائدة + 600,000 خدمة − 300,000 منافع = 5,550,000؛ الخسارة الاكتوارية = 150,000.",
            "Expected obligation before remeasurement = 5,000,000 + 250,000 interest + 600,000 service − 300,000 benefits = 5,550,000; actuarial loss = 150,000.",
          ),
          text(
            "أصول متوقعة قبل إعادة القياس = 4,200,000 + 210,000 فائدة + 500,000 مساهمة − 300,000 منافع = 4,610,000؛ خسارة العائد خارج الفائدة = 60,000. إجمالي خسارة OCI = 210,000 وصافي الالتزام الختامي = 1,150,000.",
            "Expected assets before remeasurement = 4,200,000 + 210,000 interest + 500,000 contribution − 300,000 benefits = 4,610,000; return loss excluding interest = 60,000. Total OCI loss = 210,000 and closing net liability = 1,150,000.",
          ),
        ],
        conclusion: text(
          "مصروف الربح أو الخسارة 640,000 (خدمة 600,000 + صافي فائدة 40,000)، وخسارة إعادة القياس 210,000 في OCI. وتتحقق المصالحة: 800,000 + 640,000 + 210,000 − 500,000 = 1,150,000.",
          "Profit-or-loss expense is 640,000 (600,000 service + 40,000 net interest), and the 210,000 remeasurement loss goes to OCI. The reconciliation is 800,000 + 640,000 + 210,000 − 500,000 = 1,150,000.",
        ),
        journalEntries: [
          {
            label: text("تكلفة الخدمة وصافي الفائدة", "Service cost and net interest"),
            debit: text("مصروف مزايا موظفين", "Employee-benefit expense"),
            credit: text("صافي التزام منافع محددة", "Net defined-benefit liability"),
            amount: text("640,000", "640,000"),
          },
          {
            label: text("إعادة القياس", "Remeasurement"),
            debit: text("الدخل الشامل الآخر", "Other comprehensive income"),
            credit: text("صافي التزام منافع محددة", "Net defined-benefit liability"),
            amount: text("210,000", "210,000"),
          },
          {
            label: text("مساهمة المنشأة في الخطة", "Employer contribution to the plan"),
            debit: text("صافي التزام منافع محددة", "Net defined-benefit liability"),
            credit: text("نقدية", "Cash"),
            amount: text("500,000", "500,000"),
          },
        ],
        reference: "IAS 19.55–64, 120–130",
      },
    ],
  },
  "IAS 37": {
    sections: [
      {
        title: text(
          "الاعتراف بالمخصص والالتزام الحالي",
          "Provision recognition and present obligation",
        ),
        explanation: text(
          "المخصص التزام غير مؤكد التوقيت أو المبلغ. يثبت فقط عندما ينشأ عن حدث سابق التزام حالي قانوني أو ضمني، ويكون خروج الموارد للتسوية محتملًا، ويمكن تقدير المبلغ تقديرًا موثوقًا. ينشأ الالتزام الضمني من نمط ممارسة أو سياسة منشورة أو بيان محدد أنشأ توقعًا صحيحًا لدى الأطراف المتأثرة. إذا تعذر حسم وجود الالتزام في حالات نادرة، تعامل المنشأة معه كحالي عندما تشير جميع الأدلة المتاحة—ومنها أحداث ما بعد الفترة—إلى أن وجوده أرجح من عدمه. لا يثبت مخصص لخسائر التشغيل المستقبلية أو إنفاق يمكن تجنبه بتصرفات مستقبلية.",
          "A provision is a liability of uncertain timing or amount. It is recognised only when a past event creates a present legal or constructive obligation, an outflow of resources is probable, and the amount can be estimated reliably. A constructive obligation arises from established practice, a published policy or a sufficiently specific statement that creates a valid expectation among affected parties. In rare cases where obligation existence is unclear, it is treated as present when all available evidence—including subsequent events—makes existence more likely than not. No provision is recognised for future operating losses or expenditure avoidable by future actions.",
        ),
        keyPoints: [
          text(
            "حدد الحدث الملزم الذي لم يترك بديلًا واقعيًا للتسوية.",
            "Identify the obligating event that leaves no realistic alternative to settlement.",
          ),
          text(
            "لا تساوِ بين خطة الإدارة الداخلية والتزام تجاه طرف آخر.",
            "Do not equate an internal management plan with an obligation to another party.",
          ),
          text(
            "وثق حكم الاحتمال والأدلة القانونية والتشغيلية في تاريخ التقرير.",
            "Document probability judgement and legal and operational evidence at reporting date.",
          ),
        ],
        reference: "IAS 37.10, 14–26",
      },
      {
        title: text("أفضل تقدير والمخاطر والقيمة الحالية", "Best estimate, risk and present value"),
        explanation: text(
          "يقاس المخصص بالمبلغ الذي تدفعه المنشأة عقلانيًا لتسوية الالتزام أو نقله في نهاية الفترة. للعدد الكبير من البنود يستخدم المتوسط المرجح بالاحتمالات، أما الالتزام المنفرد فقد تكون النتيجة الأرجح نقطة البداية مع مراعاة النتائج الأخرى. تدخل المخاطر وعدم التأكد دون مضاعفة الأثر في التدفقات ومعدل الخصم. إذا كان أثر الزمن جوهريًا تخصم التدفقات بمعدل قبل الضريبة يعكس تقييم السوق للقيمة الزمنية والمخاطر غير المدرجة في التدفقات، وتثبت زيادة المخصص بسبب مرور الزمن كتكلفة تمويل. تراجع المخصصات في كل إقفال وتعكس إذا لم يعد الخروج محتملًا، ولا تستخدم إلا للغرض الذي أنشئت من أجله.",
          "A provision is measured at the amount the entity would rationally pay to settle or transfer the obligation at period end. A large population uses probability-weighted expected value, while a single obligation may begin with the most likely outcome adjusted for other possible results. Risk and uncertainty are included without double counting them in cash flows and discount rate. When the time-value effect is material, cash flows are discounted at a pre-tax rate reflecting market time value and risks not already in cash flows, with unwinding recognised as finance cost. Provisions are reviewed each close, reversed when outflow is no longer probable, and used only for their original purpose.",
        ),
        keyPoints: [
          text(
            "طابق أسلوب الاحتمال مع طبيعة مجتمع الالتزامات.",
            "Match the probability method to the obligation population.",
          ),
          text(
            "حدّث التدفقات والمعدل في نهاية كل فترة وفسر الحركة.",
            "Update cash flows and rate each period end and explain movements.",
          ),
          text(
            "لا تخصم المخاطر مرتين داخل التدفق ومعدل الخصم.",
            "Do not count risk twice in cash flows and discount rate.",
          ),
        ],
        reference: "IAS 37.36–52, 59–61",
      },
      {
        title: text(
          "العقود المرهقة وإعادة الهيكلة والإزالة",
          "Onerous contracts, restructuring and decommissioning",
        ),
        explanation: text(
          "يثبت للعقد المرهق مخصص عندما تتجاوز التكاليف التي لا يمكن تجنبها المنافع الاقتصادية المتوقعة، بعد إثبات أي انخفاض في الأصول المستخدمة في تنفيذه. تكلفة تنفيذ العقد تشمل التكاليف الإضافية وتوزيع التكاليف الأخرى المرتبطة مباشرة بالتنفيذ، ويقارن بها تعويض أو غرامة الخروج أيهما أقل تكلفة لا يمكن تجنبها. في إعادة الهيكلة لا يكفي قرار مجلس الإدارة؛ يلزم برنامج رسمي مفصل وبدء التنفيذ أو إعلان سماته الرئيسية بما ينشئ توقعًا صحيحًا، ويقتصر المخصص على النفقات المباشرة الضرورية غير المرتبطة بالنشاط المستمر. التزام إزالة أصل أو إعادة موقعه يثبت عند نشوئه، وغالبًا يضاف القياس الأولي إلى تكلفة الأصل وفق المعيار المختص.",
          "An onerous-contract provision is recognised when unavoidable costs exceed expected economic benefits, after impairment of assets used to fulfil the contract. Fulfilment cost includes incremental costs and an allocation of other costs directly related to fulfilling it; unavoidable cost is the lower of fulfilment cost and compensation or penalties for exit. A board decision alone does not create a restructuring provision: a detailed formal plan plus implementation or announcement of its main features must create a valid expectation, and the provision includes only direct necessary expenditures unrelated to continuing activities. An asset-removal or site-restoration obligation is recognised when it arises, with initial measurement often added to the related asset's cost under the relevant Standard.",
        ),
        keyPoints: [
          text(
            "اختبر انخفاض أصول العقد قبل حساب مخصص العقد المرهق.",
            "Test contract assets for impairment before measuring an onerous provision.",
          ),
          text(
            "استبعد تدريب الموظفين والتسويق والاستثمار في الأنظمة المستقبلية من مخصص إعادة الهيكلة.",
            "Exclude staff retraining, marketing and future systems investment from a restructuring provision.",
          ),
          text(
            "افصل التزام الإزالة الناشئ عند إنشاء الأصل عن الالتزام الناشئ تدريجيًا من الإنتاج.",
            "Separate removal obligations arising on asset construction from obligations generated progressively by production.",
          ),
        ],
        reference: "IAS 37.63–83; IAS 16.16(c)",
      },
      {
        title: text(
          "الالتزامات والأصول المحتملة والتعويض",
          "Contingent liabilities, contingent assets and reimbursement",
        ),
        explanation: text(
          "لا يثبت الالتزام المحتمل، بل يفصح عن طبيعته وتقدير أثره وعدم التأكد وإمكان التعويض ما لم يكن احتمال الخروج بعيدًا. ويشمل التزامًا ممكنًا يعتمد وجوده على حدث غير مؤكد، أو التزامًا حاليًا لا يثبت لأن الخروج غير محتمل أو القياس غير موثوق. الأصل المحتمل لا يثبت؛ يفصح عنه عندما يكون التدفق الداخل محتملًا، وعندما يصبح مؤكدًا فعليًا يثبت الأصل لأنه لم يعد محتملًا. إذا كان طرف ثالث سيعوض إنفاق المخصص، يثبت أصل منفصل فقط عندما يكون التحصيل مؤكدًا فعليًا إذا تمت التسوية، وبحد لا يتجاوز المخصص، ويمكن عرض المصروف صافي التعويض في الربح أو الخسارة.",
          "A contingent liability is not recognised; its nature, estimated effect, uncertainty and reimbursement are disclosed unless outflow is remote. It includes a possible obligation dependent on an uncertain event, or a present obligation not recognised because outflow is not probable or measurement is unreliable. A contingent asset is not recognised; it is disclosed when inflow is probable, and recognised once inflow is virtually certain because it is no longer contingent. Third-party reimbursement is a separate asset only when receipt is virtually certain if settlement occurs, capped at the provision amount, while the related expense may be presented net of reimbursement in profit or loss.",
        ),
        keyPoints: [
          text(
            "راجع الاحتمالات في كل إقفال لأن التصنيف قد ينتقل من إفصاح إلى اعتراف.",
            "Reassess probabilities each close because classification can move from disclosure to recognition.",
          ),
          text(
            "لا تخصم أصل التعويض من المخصص في قائمة المركز المالي.",
            "Do not offset the reimbursement asset against the provision in financial position.",
          ),
          text(
            "يجوز حجب تفاصيل نادرة إذا أضرت النزاع بجدية، مع بيان الطبيعة وسبب الحجب.",
            "Rarely, prejudicial detail may be withheld, with the general nature and reason disclosed.",
          ),
        ],
        reference: "IAS 37.27–35, 53–58, 84–92",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مخصص ضمان مع تعويض مؤكد فعليًا",
          "Warranty provision with virtually certain reimbursement",
        ),
        facts: text(
          "باعت منشأة 100,000 جهاز في 2026 بضمان سنة. تشير الخبرة إلى أن 5% تحتاج إصلاحًا بسيطًا متوسطه 40، و1% تحتاج إصلاحًا كبيرًا متوسطه 150، والباقي بلا عيوب. وافق مورد مكوّن معيب تعاقديًا على تعويض المنشأة عن 120,000 من تكاليف الضمان، وأصبح التحصيل مؤكدًا فعليًا إذا تمت الإصلاحات.",
          "An entity sells 100,000 devices in 2026 with a one-year warranty. Experience indicates 5% require minor repairs averaging 40, 1% require major repairs averaging 150, and the remainder have no defects. A supplier of a defective component contractually agrees to reimburse 120,000 of warranty costs, and collection is virtually certain if repairs occur.",
        ),
        calculations: [
          text(
            "الإصلاحات البسيطة = 100,000 × 5% × 40 = 200,000.",
            "Minor repairs = 100,000 × 5% × 40 = 200,000.",
          ),
          text(
            "الإصلاحات الكبيرة = 100,000 × 1% × 150 = 150,000؛ أفضل تقدير للمخصص = 350,000.",
            "Major repairs = 100,000 × 1% × 150 = 150,000; best-estimate provision = 350,000.",
          ),
          text(
            "يثبت أصل تعويض مستقل 120,000 ولا يخصم من المخصص؛ يمكن عرض صافي المصروف 230,000 في الربح أو الخسارة.",
            "A separate 120,000 reimbursement asset is recognised and not offset against the provision; net expense of 230,000 may be presented in profit or loss.",
          ),
        ],
        conclusion: text(
          "عدد كبير من الضمانات يقاس بالقيمة المتوقعة. وجود التعويض لا يخفض الالتزام تجاه العملاء، بل ينشئ أصلًا مستقلًا عند بلوغ التحصيل درجة التأكد الفعلي.",
          "A large warranty population uses expected value. Reimbursement does not reduce the customer obligation; it creates a separate asset once receipt is virtually certain.",
        ),
        journalEntries: [
          {
            label: text("إثبات مخصص الضمان", "Recognise warranty provision"),
            debit: text("مصروف ضمان", "Warranty expense"),
            credit: text("مخصص ضمان", "Warranty provision"),
            amount: text("350,000", "350,000"),
          },
          {
            label: text("إثبات أصل التعويض", "Recognise reimbursement asset"),
            debit: text("ذمم تعويض مستحقة", "Reimbursement receivable"),
            credit: text("دخل تعويض الضمان", "Warranty reimbursement income"),
            amount: text("120,000", "120,000"),
          },
        ],
        reference: "IAS 37.36–40, 53–54",
      },
    ],
  },
  "IAS 41": {
    sections: [
      {
        title: text(
          "النطاق والتحول البيولوجي والنباتات المثمرة",
          "Scope, biological transformation and bearer plants",
        ),
        explanation: text(
          "يطبق IAS 41 على الأصول البيولوجية أثناء إدارتها زراعيًا، وعلى المحصول الزراعي عند نقطة الحصاد، وبعض المنح الحكومية المتعلقة بها. الأصل البيولوجي حيوان أو نبات حي، والنشاط الزراعي هو إدارة تحوله البيولوجي وحصاده للبيع أو للتحويل إلى محصول أو أصول بيولوجية إضافية. تستبعد الأرض الزراعية وتخضع لـIAS 16 أو IAS 40، كما تستبعد النباتات المثمرة الناضجة وتخضع لـIAS 16، لكن الثمار النامية عليها تبقى ضمن IAS 41. بعد الحصاد يتحول المحصول إلى مخزون وتطبق عليه IAS 2. لا يشمل المعيار تصنيع المحصول بعد الحصاد مثل تحويل العنب إلى نبيذ.",
          "IAS 41 applies to biological assets managed in agricultural activity, agricultural produce at harvest and specified related government grants. A biological asset is a living animal or plant, while agricultural activity manages biological transformation and harvest for sale, conversion into produce or creation of additional biological assets. Agricultural land is outside the Standard and follows IAS 16 or IAS 40; mature bearer plants follow IAS 16, while produce growing on them remains within IAS 41. At harvest, produce becomes inventory under IAS 2. Post-harvest processing, such as turning grapes into wine, is outside IAS 41.",
        ),
        keyPoints: [
          text(
            "افصل النبات المثمر عن المحصول النامي عليه في سجل الأصول.",
            "Separate a bearer plant from the produce growing on it in the asset register.",
          ),
          text(
            "حدد نقطة الحصاد بدقة لأنها تنقل القياس من IAS 41 إلى IAS 2.",
            "Identify the harvest point precisely because it moves measurement from IAS 41 to IAS 2.",
          ),
          text(
            "اختبر وجود إدارة للتحول البيولوجي؛ اقتناء حيوان لغرض غير زراعي قد يخضع لمعيار آخر.",
            "Test whether biological transformation is managed; an animal held for a non-agricultural purpose may fall under another Standard.",
          ),
        ],
        reference: "IAS 41.1–7; IAS 16.3(b), 22A",
      },
      {
        title: text(
          "الاعتراف والقيمة العادلة ناقص تكاليف البيع",
          "Recognition and fair value less costs to sell",
        ),
        explanation: text(
          "يثبت الأصل البيولوجي أو المحصول عندما تسيطر المنشأة عليه نتيجة حدث سابق، ويرجح تدفق المنافع، ويمكن قياس قيمته العادلة أو تكلفته بصورة موثوقة. يقاس الأصل البيولوجي عند الاعتراف وفي كل نهاية فترة بالقيمة العادلة ناقص تكاليف البيع، ويقاس المحصول عند الحصاد على الأساس نفسه ويصبح ذلك المبلغ تكلفته عند بدء IAS 2. القيمة العادلة تتبع IFRS 13 وتراعي موقع الأصل وحالته، بينما تكاليف البيع هي التكاليف الإضافية المنسوبة مباشرة للتصرف ولا تشمل تكاليف التمويل أو ضريبة الدخل. تدخل أرباح وخسائر الاعتراف والتغير في القياس مباشرة في الربح أو الخسارة.",
          "A biological asset or produce is recognised when the entity controls it from a past event, benefits are probable, and fair value or cost can be measured reliably. Biological assets are measured initially and at each reporting date at fair value less costs to sell; produce uses the same basis at harvest, which becomes its cost on entering IAS 2. Fair value follows IFRS 13 and reflects asset location and condition, while costs to sell are incremental disposal costs excluding finance costs and income taxes. Initial and subsequent measurement gains and losses go directly to profit or loss.",
        ),
        keyPoints: [
          text(
            "لا تخصم تكاليف النقل إلى السوق مرتين؛ تعكس في تحديد القيمة في الموقع لا ضمن تكاليف البيع أيضًا.",
            "Do not deduct transport to market twice; reflect it in location-adjusted fair value, not again as a cost to sell.",
          ),
          text(
            "افصل أثر السعر عن التغير الفيزيائي في التحليل الإداري عندما يكون مفيدًا.",
            "Separate price effects from physical change in management analysis when useful.",
          ),
          text(
            "استخدم قياس الحصاد كتكلفة ابتدائية ثابتة للمخزون بعد ذلك.",
            "Use the harvest measurement as the fixed initial cost of inventory thereafter.",
          ),
        ],
        reference: "IAS 41.10–29; IFRS 13",
      },
      {
        title: text(
          "استثناء التكلفة النادر والمنح الحكومية",
          "Rare cost exception and government grants",
        ),
        explanation: text(
          "يفترض أن القيمة العادلة للأصل البيولوجي قابلة للقياس بصورة موثوقة، ولا يدحض الافتراض إلا عند الاعتراف الأولي إذا لم تتوافر أسعار سوقية وكانت البدائل غير موثوقة بوضوح. عندها يقاس الأصل بالتكلفة ناقص الإهلاك والانخفاض إلى أن تصبح القيمة العادلة قابلة للقياس، ثم ينتقل إليها. هذا الاستثناء لا يطبق على المحصول عند الحصاد. المنحة غير المشروطة المتعلقة بأصل مقاس بالقيمة العادلة ناقص تكاليف البيع تثبت دخلًا عندما تصبح مستحقة القبض، أما المشروطة فتثبت عندما تستوفى الشروط؛ وتطبق IAS 20 على المنح المتعلقة بأصل مقاس بالتكلفة.",
          "Fair value of a biological asset is presumed reliably measurable. The presumption is rebutted only on initial recognition when market prices are unavailable and alternatives are clearly unreliable. The asset is then measured at cost less depreciation and impairment until fair value becomes reliably measurable, when fair-value accounting begins. The exception does not apply to produce at harvest. An unconditional grant related to an asset measured at fair value less costs to sell is income when receivable; a conditional grant is income only when conditions are met. IAS 20 applies to grants related to cost-measured assets.",
        ),
        keyPoints: [
          text(
            "وثق سبب عدم موثوقية كل بديل للقيمة العادلة عند الاعتراف الأولي.",
            "Document why each fair-value alternative is unreliable at initial recognition.",
          ),
          text(
            "لا تستمر في التكلفة بعد ظهور قياس عادل موثوق.",
            "Do not remain on cost once reliable fair-value measurement becomes available.",
          ),
          text(
            "اربط توقيت دخل المنحة بشرطها الفعلي لا بموعد استلام النقد فقط.",
            "Link grant-income timing to its substantive condition, not merely cash receipt.",
          ),
        ],
        reference: "IAS 41.30–37",
      },
      {
        title: text(
          "العرض والإفصاحات والرقابة التشغيلية",
          "Presentation, disclosures and operating controls",
        ),
        explanation: text(
          "تعرض المنشأة الأصول البيولوجية منفصلة وتصف كل مجموعة، مع معلومات كمية مناسبة تميز الأصول الاستهلاكية عن المثمرة والناضجة عن غير الناضجة عندما يكون ذلك مفيدًا. تفصح عن مكاسب وخسائر القياس، وطبيعة الأنشطة، والقيود والضمانات والتعهدات، واستراتيجية المخاطر المالية، ومصالحة الرصيد الافتتاحي والختامي تشمل المشتريات والمبيعات والحصاد وتغير القيمة وفروق العملة والاندماجات. للأصول المقاسة بالتكلفة إفصاحات إضافية عن سبب تعذر القيمة العادلة ونطاق التقديرات والإهلاك والانخفاض. تتطلب الجودة ربط الجرد الميداني بالعمر والوزن والحالة ومصادر الأسعار.",
          "Biological assets are presented separately and each group is described, with useful quantitative distinctions between consumable and bearer, and mature and immature assets. Disclosures cover measurement gains and losses, activity nature, restrictions, pledges and commitments, financial-risk strategy, and an opening-to-closing reconciliation including purchases, sales, harvest, value changes, currency effects and combinations. Cost-measured assets require additional explanation of fair-value unreliability, estimate ranges, depreciation and impairment. Quality depends on linking field counts to age, weight, condition and price sources.",
        ),
        keyPoints: [
          text(
            "صالح أعداد النظام مع العد الميداني وحلل النفوق والمواليد والتحويلات.",
            "Reconcile system quantities to field counts and analyse deaths, births and transfers.",
          ),
          text(
            "احتفظ بدليل مستقل للأسعار وتكاليف البيع في تاريخ القياس.",
            "Retain independent evidence for prices and costs to sell at measurement date.",
          ),
          text(
            "اربط حركة الكميات بحركة القيمة قبل اعتماد مكسب القيمة العادلة.",
            "Link quantity movement to value movement before approving the fair-value gain.",
          ),
        ],
        reference: "IAS 41.40–57",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قياس قطيع بالقيمة العادلة ناقص تكاليف البيع",
          "Measuring a herd at fair value less costs to sell",
        ),
        facts: text(
          "اشترت مزرعة في 1 يناير 2026 عدد 100 رأس ماشية مقابل 85,000. كانت قيمتها العادلة في حالتها وموقعها 82,000 وتكاليف البيع المقدرة 2,000، فبلغ القياس الأولي 80,000. في 31 ديسمبر بقي 95 رأسًا وبلغت قيمتها العادلة 116,000 وتكاليف البيع 2,000. لا توجد مشتريات أو مبيعات أخرى.",
          "On 1 January 2026 a farm buys 100 cattle for 85,000. Their fair value in their condition and location is 82,000 and estimated costs to sell are 2,000, giving initial measurement of 80,000. At 31 December 95 cattle remain, with fair value of 116,000 and costs to sell of 2,000. There are no other purchases or sales.",
        ),
        calculations: [
          text(
            "القياس الأولي = 82,000 − 2,000 = 80,000؛ خسارة الاعتراف الأولي مقارنة بالنقد المدفوع = 5,000.",
            "Initial measurement = 82,000 − 2,000 = 80,000; initial-recognition loss versus cash paid = 5,000.",
          ),
          text(
            "قياس 31 ديسمبر = 116,000 − 2,000 = 114,000.",
            "31 December measurement = 116,000 − 2,000 = 114,000.",
          ),
          text(
            "مكسب التغير خلال السنة = 114,000 − 80,000 = 34,000، ويشمل الأثر الصافي للنمو والأسعار والنفوق.",
            "Current-year change gain = 114,000 − 80,000 = 34,000, including the net effect of growth, price and mortality.",
          ),
        ],
        conclusion: text(
          "يعرض الأصل البيولوجي في 31 ديسمبر بمبلغ 114,000، وتدخل خسارة البداية 5,000 ثم مكسب التغير 34,000 في الربح أو الخسارة، مع شرح حركة الكميات والقيمة.",
          "The biological asset is presented at 114,000 at 31 December. The 5,000 initial loss and subsequent 34,000 gain enter profit or loss, supported by quantity and value movement disclosures.",
        ),
        journalEntries: [
          {
            label: text("الشراء والاعتراف الأولي", "Purchase and initial recognition"),
            debit: text("أصل بيولوجي 80,000 + خسارة 5,000", "Biological asset 80,000 + loss 5,000"),
            credit: text("نقدية", "Cash"),
            amount: text("85,000", "85,000"),
          },
          {
            label: text("إعادة القياس في نهاية السنة", "Year-end remeasurement"),
            debit: text("أصل بيولوجي", "Biological asset"),
            credit: text("مكسب تغير القيمة العادلة", "Fair-value change gain"),
            amount: text("34,000", "34,000"),
          },
        ],
        reference: "IAS 41.12–29",
      },
    ],
  },
  "IFRS 6": {
    sections: [
      {
        title: text(
          "حدود مرحلة الاستكشاف والتقييم",
          "Boundary of the exploration and evaluation phase",
        ),
        explanation: text(
          "يغطي IFRS 6 النفقات المتكبدة بعد حصول المنشأة على الحقوق القانونية للاستكشاف في منطقة محددة وقبل إثبات الجدوى الفنية والقدرة التجارية لاستخراج المورد. النفقات قبل الحقوق—مثل البحث العام عن مناطق محتملة—لا تدخل نطاقه، كما أن التطوير بعد إثبات الجدوى يخضع لمعايير أخرى مثل IAS 16 وIAS 38. لا يتناول المعيار الأنشطة السابقة للاستكشاف أو تكلفة استخراج الموارد بعد بدء التطوير. لذا يجب أن تتضمن بوابة المشروع تواريخ الحق القانوني وقرار الجدوى وإثبات الانتقال بين المراحل.",
          "IFRS 6 covers expenditure after an entity obtains legal rights to explore a specific area and before technical feasibility and commercial viability of extraction are demonstrable. Pre-right expenditure, such as general area research, is outside its scope, while development after feasibility follows other Standards such as IAS 16 and IAS 38. The Standard does not cover pre-exploration activity or extraction cost after development begins. Project controls should therefore record the legal-right date, feasibility decision and evidence supporting each phase transfer.",
        ),
        keyPoints: [
          text(
            "افصل كل منطقة امتياز لأن الحقوق والمؤشرات والقرارات تختلف.",
            "Separate each licence area because rights, indicators and decisions differ.",
          ),
          text(
            "لا ترسمل نفقات سبقت الحق القانوني لمجرد نجاح المشروع لاحقًا.",
            "Do not capitalise pre-right expenditure merely because the project later succeeds.",
          ),
          text(
            "وثق تاريخ ثبوت الجدوى لأنه ينهي تطبيق IFRS 6 على الإنفاق اللاحق.",
            "Document the feasibility date because it ends IFRS 6 treatment for subsequent expenditure.",
          ),
        ],
        reference: "IFRS 6.3–5; Appendix A",
      },
      {
        title: text("السياسة المحاسبية وعناصر التكلفة", "Accounting policy and cost components"),
        explanation: text(
          "يمنح IFRS 6 إعفاءً محدودًا من تسلسل IAS 8 عند تطوير سياسة الاعتراف والقياس لأصول الاستكشاف والتقييم، لكنه لا يسمح بسياسة اعتباطية؛ يجب أن تنتج معلومات ملائمة وموثوقة وتطبق باتساق على النفقات المتشابهة. تحدد المنشأة ما ترسمله لكل منطقة، وقد تشمل اقتناء الحقوق والدراسات الطبوغرافية والجيولوجية والجيوكيميائية والجيوفيزيائية والحفر الاستكشافي وأخذ العينات والأنشطة المرتبطة بتقييم الجدوى. لا تدخل عادة المصروفات الإدارية العامة غير المرتبطة مباشرة. أي تغيير في السياسة يجب أن يجعل القوائم أكثر ملاءمة دون خفض الموثوقية أو أكثر موثوقية دون خفض الملاءمة.",
          "IFRS 6 gives a limited exemption from the IAS 8 hierarchy when developing recognition and measurement policies for exploration and evaluation assets, but it does not permit arbitrary policy. Information must remain relevant and reliable, and the policy is applied consistently to similar expenditure. The entity defines capitalisable cost by area, potentially including acquisition of rights, topographical, geological, geochemical and geophysical studies, exploratory drilling, sampling and feasibility-evaluation activities. Unrelated general administration is normally excluded. A policy change must make statements more relevant without reducing reliability, or more reliable without reducing relevance.",
        ),
        keyPoints: [
          text(
            "اكتب مصفوفة رسملة تربط نوع النفقة والمرحلة والمنطقة والدليل.",
            "Maintain a capitalisation matrix linking expenditure type, phase, area and evidence.",
          ),
          text(
            "طبق السياسة نفسها على مشاريع متشابهة ولا تغيرها لإدارة الأرباح.",
            "Apply the same policy to similar projects and do not change it to manage earnings.",
          ),
          text(
            "افصل الالتزامات البيئية عن تكلفة الاستكشاف وعالجها وفق IAS 37 عند نشوئها.",
            "Separate environmental obligations from exploration cost and apply IAS 37 when they arise.",
          ),
        ],
        reference: "IFRS 6.6–14",
      },
      {
        title: text(
          "التصنيف وإعادة التصنيف والانخفاض",
          "Classification, reclassification and impairment",
        ),
        explanation: text(
          "تصنف أصول الاستكشاف والتقييم كملموسة أو غير ملموسة وفق طبيعتها وتطبق سياسة القياس اللاحق المختارة بما يتوافق مع IAS 16 أو IAS 38. عند ثبوت الجدوى الفنية والقدرة التجارية لا يبقى الأصل ضمن IFRS 6؛ يختبر أولًا للانخفاض ثم يعاد تصنيفه. تشمل مؤشرات الانخفاض انتهاء حق الاستكشاف أو قرب انتهائه دون توقع التجديد، وعدم وجود إنفاق جوهري مخطط، وقرار وقف الاستكشاف لعدم اكتشاف كميات مجدية، ووجود بيانات تشير إلى عدم استرداد القيمة رغم احتمال استمرار التطوير. عند وجود مؤشر تقاس الخسارة وفق IAS 36، ويجوز تحديد وحدات اختبار لا تتجاوز حجم قطاع تشغيلي.",
          "Exploration and evaluation assets are classified as tangible or intangible according to nature, with subsequent policy consistent with IAS 16 or IAS 38. Once technical feasibility and commercial viability become demonstrable, the asset leaves IFRS 6: it is first tested for impairment and then reclassified. Indicators include licence expiry without expected renewal, no substantial planned expenditure, a decision to stop after no commercial discovery, or data indicating the carrying amount will not be recovered despite possible development. When an indicator exists, loss is measured under IAS 36, and the testing unit cannot be larger than an operating segment.",
        ),
        keyPoints: [
          text(
            "لا تؤخر اختبار الانخفاض حتى قرار التخلي الرسمي إذا ظهرت المؤشرات قبله.",
            "Do not delay impairment testing until formal abandonment if indicators arise earlier.",
          ),
          text(
            "اختبر قبل إعادة التصنيف إلى أصول التطوير.",
            "Test for impairment before reclassification into development assets.",
          ),
          text(
            "لا تجمع مناطق غير مرتبطة في وحدة اختبار تخفي مشروعًا ضعيفًا.",
            "Do not combine unrelated areas into a testing unit that masks a weak project.",
          ),
        ],
        reference: "IFRS 6.15–22; IAS 36",
      },
      {
        title: text("العرض والإفصاح ومسار التدقيق", "Presentation, disclosure and audit trail"),
        explanation: text(
          "تفصح المنشأة عن سياساتها لنفقات الاستكشاف والتقييم والاعتراف بالأصول، وعن مبالغ الأصول والالتزامات والدخل والمصروف والتدفقات التشغيلية والاستثمارية الناشئة عنها. تعامل الأصول كفئة مستقلة للإفصاح وفق IAS 16 أو IAS 38 بما يتفق مع تصنيفها. عمليًا يجب أن يربط ملف كل امتياز المصروفات بالعقود والفواتير ونتائج الحفر والاحتياطيات وقرارات الاستثمار وتجديد الحقوق ومؤشرات الانخفاض. ويساعد الفصل بين تدفقات التشغيل والاستثمار وفق IAS 7 على منع تصنيف كل إنفاق قطاع التعدين تلقائيًا كاستثماري.",
          "The entity discloses policies for exploration and evaluation expenditure and asset recognition, plus related assets, liabilities, income, expense and operating and investing cash flows. Such assets form a separate disclosure class under IAS 16 or IAS 38 according to classification. In practice, each licence file links expenditure to contracts, invoices, drilling results, reserves, investment decisions, licence renewals and impairment indicators. Separating operating and investing cash flows under IAS 7 also prevents automatic classification of all extractive-sector spending as investing.",
        ),
        keyPoints: [
          text(
            "صالح دفتر الأستاذ مع سجل التكلفة لكل امتياز ومشروع.",
            "Reconcile the ledger to the cost register by licence and project.",
          ),
          text(
            "احتفظ بمحاضر القرارات الفنية والتجارية لأنها تحدد المرحلة والمحاسبة.",
            "Retain technical and commercial decision records because they determine phase and accounting.",
          ),
          text(
            "اربط الإفصاح عن التدفقات بطبيعة النشاط لا باسم الحساب فقط.",
            "Link cash-flow disclosure to activity nature, not merely account name.",
          ),
        ],
        reference: "IFRS 6.23–25; IAS 7",
      },
    ],
    workedExamples: [
      {
        title: text(
          "منطقة استكشاف انتهى حقها دون تجديد",
          "Exploration area with an expiring, non-renewed right",
        ),
        facts: text(
          "حصلت منشأة على حق استكشاف منطقة في 2026. دفعت 2,000,000 لاقتناء الحق، و600,000 لدراسات جيولوجية، و1,400,000 لحفر استكشافي، و300,000 إدارة عامة غير مرتبطة مباشرة. تسمح سياستها برسملة النفقات المباشرة بعد الحصول على الحق. في نهاية السنة انتهى الحق وقررت الإدارة عدم التجديد، وقدرت القيمة القابلة للاسترداد للمعلومات والمعدات المرتبطة بـ1,100,000.",
          "An entity obtains exploration rights to an area in 2026. It pays 2,000,000 for the right, 600,000 for geological studies, 1,400,000 for exploratory drilling and 300,000 of unrelated general administration. Its policy capitalises direct expenditure after rights are obtained. At year-end the right expires and management decides not to renew; recoverable amount of related data and equipment is 1,100,000.",
        ),
        calculations: [
          text(
            "تكلفة أصل الاستكشاف والتقييم = 2,000,000 + 600,000 + 1,400,000 = 4,000,000.",
            "Exploration and evaluation asset cost = 2,000,000 + 600,000 + 1,400,000 = 4,000,000.",
          ),
          text(
            "المصروف الإداري غير المباشر 300,000 يثبت في الربح أو الخسارة ولا يضاف للأصل.",
            "The unrelated 300,000 administration cost is expensed and not added to the asset.",
          ),
          text(
            "انتهاء الحق دون تجديد مؤشر انخفاض؛ الخسارة = 4,000,000 − 1,100,000 = 2,900,000.",
            "Expiry without renewal is an impairment indicator; loss = 4,000,000 − 1,100,000 = 2,900,000.",
          ),
        ],
        conclusion: text(
          "يعرض الأصل بعد الاختبار بمبلغ 1,100,000، مع إثبات مصروف الإدارة 300,000 وخسارة انخفاض 2,900,000 بصورة منفصلة.",
          "The post-test asset is 1,100,000, with 300,000 administration expense and 2,900,000 impairment loss recognised separately.",
        ),
        journalEntries: [
          {
            label: text("رسملة النفقات المباشرة", "Capitalise direct expenditure"),
            debit: text("أصل استكشاف وتقييم", "Exploration and evaluation asset"),
            credit: text("نقدية/دائنون", "Cash/payables"),
            amount: text("4,000,000", "4,000,000"),
          },
          {
            label: text("إثبات الانخفاض", "Recognise impairment"),
            debit: text("خسارة انخفاض", "Impairment loss"),
            credit: text("مجمع انخفاض أصل الاستكشاف", "Exploration asset impairment allowance"),
            amount: text("2,900,000", "2,900,000"),
          },
        ],
        reference: "IFRS 6.8–22; IAS 36",
      },
    ],
  },
  "IFRS 14": {
    sections: [
      {
        title: text(
          "نطاق ضيق واختيار لمتبني IFRS لأول مرة",
          "Narrow scope and first-time adopter election",
        ),
        explanation: text(
          "IFRS 14 معيار مرحلي لا يتيح لكل منشأة منظمة الأسعار إنشاء أصول جديدة. يمكن تطبيقه فقط في أول قوائم IFRS لمنشأة تمارس أنشطة منظمة الأسعار وكانت تعترف وفق مبادئها السابقة بأرصدة تستوفي تعريف حسابات التأجيل التنظيمية. الاختيار عند التحول اختياري، لكن من يختاره يطبقه على جميع الأرصدة المؤهلة ويستمر في الفترات اللاحقة؛ والمنشأة التي كانت تطبق IFRS أصلًا لا تبدأ استخدامه. الرصيد المؤهل هو مصروف أو دخل لا يعترف به كأصل أو التزام وفق معيار آخر، لكنه يؤجل لأن منظم الأسعار أدخله أو يتوقع إدخاله في تحديد الأسعار المستقبلية.",
          "IFRS 14 is an interim Standard and does not let every rate-regulated entity create new assets. It is available only in an entity's first IFRS statements when the entity conducts rate-regulated activities and recognised qualifying balances under previous GAAP. Election at transition is optional, but an electing entity applies it to all qualifying balances and continues in later periods; an existing IFRS reporter cannot start using it. A qualifying balance is expense or income that would not be an asset or liability under another Standard but is deferred because the rate regulator includes, or is expected to include, it in future rate setting.",
        ),
        keyPoints: [
          text(
            "تحقق من حالة المتبني لأول مرة قبل دراسة طبيعة الرصيد.",
            "Confirm first-time adopter status before analysing the balance.",
          ),
          text(
            "لا تستخدم IFRS 14 لتجاوز اعتراف أو قياس يفرضه معيار آخر.",
            "Do not use IFRS 14 to override recognition or measurement required by another Standard.",
          ),
          text(
            "وثق دليل إدخال المبلغ في الأسعار الخاضعة للتنظيم.",
            "Document evidence that the amount enters regulated rate setting.",
          ),
        ],
        reference: "IFRS 14.1–8; Appendix A",
      },
      {
        title: text(
          "استمرار سياسة المبادئ السابقة والتغييرات المحدودة",
          "Continuation of previous-GAAP policy and limited changes",
        ),
        explanation: text(
          "يستفيد من يطبق IFRS 14 من إعفاء مؤقت من بعض متطلبات IAS 8 ليستمر في سياسات المبادئ السابقة للاعتراف والقياس والانخفاض وإلغاء الاعتراف بأرصدة التأجيل، مع التعديلات التي يفرضها IFRS 14 وتطبيق بقية معايير IFRS على الأرصدة المتداخلة. لا يغير السياسة إلا إذا جعل القوائم أكثر ملاءمة دون خفض الموثوقية أو أكثر موثوقية دون خفض الملاءمة. لا يعيد التصنيف إلى رصيد تنظيمي لمجرد أن نتيجة معيار آخر غير مرغوبة، وتدرس آثار الضرائب والعرض لكل رصيد وفق الاستثناءات المحددة.",
          "An IFRS 14 entity uses a temporary exemption from parts of IAS 8 to continue previous-GAAP policies for recognition, measurement, impairment and derecognition of deferral balances, subject to IFRS 14 modifications and the application of other IFRS Standards to intersecting balances. Policy changes are allowed only when statements become more relevant without less reliability, or more reliable without less relevance. Amounts are not reclassified as regulatory merely because another Standard's result is undesirable, and tax and presentation effects are analysed under the specified exceptions.",
        ),
        keyPoints: [
          text(
            "احتفظ بجسر واضح بين سياسة المبادئ السابقة والتعديلات المطلوبة في IFRS 14.",
            "Maintain a clear bridge between previous-GAAP policy and IFRS 14 modifications.",
          ),
          text(
            "اختبر الانخفاض وفق السياسة المستمرة ومتطلبات المعايير المتداخلة.",
            "Test impairment under the continued policy and intersecting Standard requirements.",
          ),
          text(
            "لا توسع فئة الأرصدة المؤهلة بعد التحول خارج أساس السياسة المختارة.",
            "Do not expand eligible balance categories after transition beyond the elected policy basis.",
          ),
        ],
        reference: "IFRS 14.9–17",
      },
      {
        title: text(
          "العرض المنفصل والحركة التنظيمية",
          "Separate presentation and regulatory movements",
        ),
        explanation: text(
          "يعزل IFRS 14 أثر التنظيم عن البنود المعترف بها وفق بقية المعايير. تعرض مجاميع الأرصدة المدينة والدائنة لحسابات التأجيل في بنود منفصلة، ولا تصنف عادة ضمن الأصول والالتزامات الجارية وغير الجارية المعتادة. تعرض صافي الحركة المتعلقة بالربح أو الخسارة منفصلة، وتفصل الحركة المرتبطة بالدخل الشامل الآخر بما يتوافق مع البند الذي تتعلق به. تقدم الضريبة المؤجلة المتعلقة بالأرصدة التنظيمية مع تلك الأرصدة والحركات بدل خلطها بمجاميع IAS 12 الأخرى. يمنع هذا الفصل المستخدم من تفسير الرصيد التنظيمي كذمم عميل عادية.",
          "IFRS 14 isolates rate-regulation effects from items recognised under other Standards. Aggregate debit and credit regulatory deferral balances are separate line items and are generally not placed within ordinary current/non-current asset and liability subtotals. Net profit-or-loss movements are presented separately, while OCI-related movements follow the related OCI item. Deferred tax related to regulatory balances and movements is presented with them rather than mixed into other IAS 12 totals. This separation prevents users from reading a regulatory balance as an ordinary customer receivable.",
        ),
        keyPoints: [
          text(
            "لا تقاص الأرصدة المدينة والدائنة إلا عند استيفاء شروط المقاصة المحددة.",
            "Do not offset debit and credit balances unless the specified offsetting conditions are met.",
          ),
          text(
            "اربط كل حركة تنظيمية ببند الربح أو الخسارة أو OCI المناسب.",
            "Link each regulatory movement to its appropriate profit-or-loss or OCI line.",
          ),
          text(
            "قدم مصالحة تفصل النشأة والاسترداد والإطفاء والانخفاض والعملات.",
            "Provide a reconciliation separating origination, recovery, amortisation, impairment and currency effects.",
          ),
        ],
        reference: "IFRS 14.18–26",
      },
      {
        title: text(
          "الإفصاح والانتقال المخطط إلى IFRS 20",
          "Disclosure and planned transition to IFRS 20",
        ),
        explanation: text(
          "تشرح الإفصاحات طبيعة ومخاطر تنظيم الأسعار وكيف أثّر في المركز والأداء والتدفقات، وتشمل وصف الأنشطة والمنظم وآلية تحديد السعر وفترات الاسترداد أو العكس ومصالحة كل فئة ومعدلات العائد أو الخصم المتبعة. صدر IFRS 20 في مايو 2026 ويحل محل IFRS 14 للفترات التي تبدأ في أو بعد 1 يناير 2029 مع السماح بالتطبيق المبكر. لذلك يجب ألا يكتفي مستخدم IFRS 14 بتدوير سياسة المبادئ السابقة؛ بل يبني سجل الحقوق والالتزامات القابلة للإنفاذ وفروق التوقيت والبيانات اللازمة للقياس القائم على التدفقات في IFRS 20.",
          "Disclosures explain the nature and risks of rate regulation and its effects on position, performance and cash flows, including activities, regulator, rate-setting mechanism, recovery or reversal periods, class reconciliations and return or discount rates. IFRS 20 was issued in May 2026 and replaces IFRS 14 for periods beginning on or after 1 January 2029, with earlier application permitted. An IFRS 14 reporter should therefore move beyond rolling forward previous-GAAP policy and build a register of enforceable rights and obligations, timing differences and data required for IFRS 20 cash-flow-based measurement.",
        ),
        keyPoints: [
          text(
            "حدد فجوات البيانات بين سجل IFRS 14 وتعريفات وقياس IFRS 20.",
            "Identify data gaps between the IFRS 14 register and IFRS 20 definitions and measurement.",
          ),
          text(
            "افصل تاريخ السريان الإلزامي عن قرار التطبيق المبكر الموثق.",
            "Separate mandatory effective date from a documented early-adoption decision.",
          ),
          text(
            "لا تخلط أرصدة IFRS 14 الانتقالية بأرصدة IFRS 20 قبل اعتماد المعيار الجديد.",
            "Do not mix transitional IFRS 14 balances with IFRS 20 balances before adopting the new Standard.",
          ),
        ],
        reference: "IFRS 14.27–36; IFRS 20 effective-date requirements",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تكلفة عاصفة مؤجلة وفق سياسة المبادئ السابقة",
          "Storm cost deferred under previous-GAAP policy",
        ),
        facts: text(
          "منشأة كهرباء تتبنى IFRS لأول مرة في 2026 وتختار IFRS 14. كانت سياستها السابقة—المطبقة على أرصدة مؤهلة—تؤجل تكلفة إصلاح عاصفة قدرها 1,200,000 وافق المنظم على استردادها بالتساوي في أسعار ثلاث سنوات. أثبتت المنشأة تكلفة الإصلاح وفق المعايير الأخرى، واستردت في أسعار 2026 مبلغ 400,000. نهمل الضريبة والخصم للتبسيط.",
          "An electricity entity first adopts IFRS in 2026 and elects IFRS 14. Its qualifying previous-GAAP policy defers a 1,200,000 storm-repair cost approved by the regulator for equal recovery through rates over three years. The repair cost is recognised under other Standards, and 400,000 is recovered in 2026 rates. Tax and discounting are ignored for simplicity.",
        ),
        calculations: [
          text(
            "الرصيد التنظيمي الأولي المؤهل = 1,200,000 وفق السياسة السابقة المستمرة.",
            "Initial qualifying regulatory balance = 1,200,000 under the continued previous-GAAP policy.",
          ),
          text(
            "الاسترداد خلال 2026 = 1,200,000 ÷ 3 = 400,000.",
            "Recovery during 2026 = 1,200,000 ÷ 3 = 400,000.",
          ),
          text(
            "الرصيد المدين الختامي المعروض منفصلًا = 1,200,000 − 400,000 = 800,000.",
            "Closing separately presented debit balance = 1,200,000 − 400,000 = 800,000.",
          ),
        ],
        conclusion: text(
          "لا ينشأ الرصيد لأن التكلفة أصل وفق معيار آخر، بل لأن المنشأة المتبنية لأول مرة واصلت سياسة سابقة مؤهلة. وتحتاج خطة الانتقال إلى تقييم مختلف عند تطبيق IFRS 20.",
          "The balance does not arise because the cost is an asset under another Standard, but because the first-time adopter continues a qualifying previous-GAAP policy. IFRS 20 transition will require a different assessment.",
        ),
        journalEntries: [
          {
            label: text(
              "إثبات رصيد التأجيل وفق السياسة المؤهلة",
              "Recognise qualifying deferral balance",
            ),
            debit: text("رصيد مدين لحساب تأجيل تنظيمي", "Regulatory deferral debit balance"),
            credit: text(
              "صافي حركة تنظيمية في الربح أو الخسارة",
              "Net regulatory movement in profit or loss",
            ),
            amount: text("1,200,000", "1,200,000"),
          },
          {
            label: text(
              "استرداد جزء من الرصيد خلال السنة",
              "Recover part of the balance during the year",
            ),
            debit: text(
              "صافي حركة تنظيمية في الربح أو الخسارة",
              "Net regulatory movement in profit or loss",
            ),
            credit: text("رصيد مدين لحساب تأجيل تنظيمي", "Regulatory deferral debit balance"),
            amount: text("400,000", "400,000"),
          },
        ],
        reference: "IFRS 14.5–17, 20–26",
      },
    ],
  },
  "IFRS 20": {
    sections: [
      {
        title: text("الهدف والنطاق وفروق التوقيت", "Objective, scope and timing differences"),
        explanation: text(
          "صدر IFRS 20 في مايو 2026 لسد فجوة الإفصاح عن نوع محدد من تنظيم الأسعار. يطبق على منشأة تكون طرفًا مع منظم في اتفاق قابل للإنفاذ يحدد السعر المنظم وينشئ أصولًا أو التزامات تنظيمية. جوهر النموذج أن يثبت إجمالي التعويض المسموح به عن السلع أو الخدمات التنظيمية في الفترة التي قدمت فيها، حتى إذا حصلت المنشأة عليه من العملاء عبر سعر فترة مختلفة. فرق التوقيت بين فترة التوريد وفترة التحصيل أو الرد هو ما ينشئ الرصيد التنظيمي. تستبعد الأرصدة الناشئة من تنظيم أقساط عقود التأمين ضمن IFRS 17.",
          "Issued in May 2026, IFRS 20 fills a reporting gap for a specified type of rate regulation. It applies when an entity and regulator are parties to an enforceable agreement that determines a regulated rate and creates regulatory assets or liabilities. The model recognises total allowed compensation for regulatory goods or services in the period those goods or services are supplied, even if customers are charged through another period's rate. The timing difference between supply and recovery or return creates the regulatory balance. Balances arising from regulated premiums on IFRS 17 insurance contracts are excluded.",
        ),
        keyPoints: [
          text(
            "أثبت وجود حقوق والتزامات قابلة للإنفاذ؛ التنظيم الاقتصادي العام وحده لا يكفي.",
            "Establish enforceable rights and obligations; general economic regulation alone is insufficient.",
          ),
          text(
            "حدد إجمالي التعويض المسموح به لكل فترة توريد قبل مقارنة فواتير IFRS 15.",
            "Determine total allowed compensation for each supply period before comparing IFRS 15 billings.",
          ),
          text(
            "طبق المعايير الأخرى على الحقوق والالتزامات أولًا، ثم IFRS 20 على فروق التوقيت المتبقية.",
            "Apply other Standards to rights and obligations first, then IFRS 20 to remaining timing differences.",
          ),
        ],
        reference: "IFRS 20 (2026), objective, scope and defined terms",
      },
      {
        title: text(
          "الاعتراف والعلاقة المباشرة وعدم تأكد الوجود",
          "Recognition, direct relationship and existence uncertainty",
        ),
        explanation: text(
          "تعترف المنشأة عمومًا بكل أصل والتزام تنظيمي قائم في نهاية الفترة وبالدخل والمصروف التنظيمي الناشئ خلالها. الأصل حق حالي قابل للإنفاذ لإضافة مبلغ إلى أسعار مستقبلية لأن تعويض خدمة قدمت لم يدخل بعد في إيراد IFRS 15، والالتزام واجب حالي لخصم مبلغ لأن تعويض خدمة مستقبلية دخل بالفعل في الإيراد. يثبت الرصيد إذا كان وجوده أرجح من عدمه. أما الأرصدة الناشئة من الإهلاك التنظيمي لقاعدة رأس المال التنظيمية فتحتاج علاقة مباشرة يمكن فيها تتبع كيفية تقديم الإهلاك التنظيمي للتعويض حسب المبلغ والفترة إلى البنود المرتبطة.",
          "An entity generally recognises all regulatory assets and liabilities existing at period end and related regulatory income and expense arising during the period. An asset is an enforceable present right to add an amount to future rates because compensation for services already supplied is not yet in IFRS 15 revenue; a liability is a present obligation to deduct an amount because compensation for future services is already in revenue. A balance is recognised when it is more likely than not to exist. Balances arising from regulatory depreciation of a regulatory capital base require a direct relationship that allows tracking how regulatory depreciation provides compensation by amount and period to related items.",
        ),
        keyPoints: [
          text(
            "ابنِ سجلًا يربط كل حق أو التزام بنص الاتفاق وقرار المنظم وفترة الخدمة.",
            "Build a register linking each right or obligation to agreement terms, regulator decisions and service period.",
          ),
          text(
            "وثق أدلة احتمال الوجود مثل السوابق والقرارات والمشورة القانونية.",
            "Document existence evidence such as precedent, decisions and legal advice.",
          ),
          text(
            "اكشف الرصيد غير المعترف به عندما تمنع متطلبات العلاقة المباشرة الاعتراف رغم وجود معلومات مفيدة.",
            "Disclose unrecognised balances when direct-relationship requirements prevent recognition despite useful information.",
          ),
        ],
        reference: "IFRS 20 (2026), recognition and direct-relationship requirements",
      },
      {
        title: text(
          "القياس القائم على التدفقات والفائدة التنظيمية",
          "Cash-flow-based measurement and regulatory interest",
        ),
        explanation: text(
          "تقاس الأصول والالتزامات التنظيمية عمومًا بتقنية قائمة على التدفقات النقدية: تقدّر جميع التدفقات المستقبلية من الاسترداد أو الوفاء، بما فيها عدم التأكد الملائم، ثم تخصم بمعدل الفائدة التنظيمي. في حالات معينة يشتق معدل ضمني يساوي بين القيمة الأولية والتدفقات المقدرة. تحدث المنشأة مبلغ وتوقيت التدفقات للمعلومات الجديدة، ولا تغير طريقة التقدير إلا إذا تغيرت الوقائع، وتستمر في معدل الاعتراف الأولي ما لم يعدل الاتفاق معدل الفائدة. توجد طريقة مبسطة لبنود تؤثر في الأسعار فقط عند دفع أو استلام النقد، مثل بعض تكاليف مزايا الموظفين.",
          "Regulatory assets and liabilities are generally measured using a cash-flow-based technique: estimate all future recovery or fulfilment cash flows, including relevant uncertainty, then discount using the regulatory interest rate. In specified cases an implied rate equates initial value with estimated cash flows. Amount and timing estimates are updated for new information, the estimation method changes only with changed facts, and the initial rate continues unless the agreement changes the regulatory interest rate. A simplified approach applies to items affecting rates only when cash is paid or received, such as some employee-benefit costs.",
        ),
        keyPoints: [
          text(
            "صالح جدول التدفقات مع التعرفة المتوقعة وحجم الطلب وفترة الاسترداد.",
            "Reconcile cash-flow schedules to expected tariffs, demand volumes and recovery periods.",
          ),
          text(
            "افصل الفائدة التنظيمية المتراكمة عن التدفقات التي لم تتراكم بعد.",
            "Separate accrued regulatory interest from interest cash flows not yet accrued.",
          ),
          text(
            "حدّث التقديرات دون تغيير معدل الخصم إلا في الحالات التي يحددها الاتفاق.",
            "Update estimates without changing the discount rate except when the agreement requires it.",
          ),
        ],
        reference: "IFRS 20 (2026), measurement requirements",
      },
      {
        title: text(
          "العرض والإفصاح والسريان والانتقال",
          "Presentation, disclosure, effective date and transition",
        ),
        explanation: text(
          "يعرض صافي الدخل التنظيمي ناقص المصروف التنظيمي كبند في قائمة الربح أو الخسارة، ويصنف عمومًا كإيراد، مع معالجة الحركات المرتبطة ببنود OCI بصورة متسقة. تعرض الأصول والالتزامات التنظيمية وفق هيكل الجاري وغير الجاري أو السيولة في IFRS 18. تشمل الإفصاحات مصالحات الأرصدة، ومكونات الدخل والمصروف، وتحليل آجال الاسترداد والوفاء، وعدم التأكد، والعلاقة بين قاعدة رأس المال والبنود المرتبطة، والأرصدة غير المعترف بها. يطبق IFRS 20 للفترات التي تبدأ في أو بعد 1 يناير 2029 مع التطبيق المبكر، ويحل محل IFRS 14. يسمح بالانتقال الكامل بأثر رجعي أو المعدل، مع مقارنة معدلة للسنة السابقة مباشرة.",
          "Net regulatory income less regulatory expense is a profit-or-loss line item and is generally classified as revenue, while movements linked to OCI items are treated consistently. Regulatory assets and liabilities follow the current/non-current or liquidity structure under IFRS 18. Disclosures include balance reconciliations, income and expense components, recovery and fulfilment maturities, uncertainty, the relationship between regulatory capital base and related items, and unrecognised balances. IFRS 20 applies from periods beginning on or after 1 January 2029, permits early application and supersedes IFRS 14. Full retrospective or modified retrospective transition is permitted, with an adjusted immediately preceding comparative.",
        ),
        keyPoints: [
          text(
            "خطط لربط IFRS 15 وIFRS 18 وIFRS 20 في مخطط حسابات واحد.",
            "Plan an integrated chart of accounts across IFRS 15, IFRS 18 and IFRS 20.",
          ),
          text(
            "ابنِ تحليل آجال من بيانات العقود والتنظيم لا من تقدير إجمالي غير مسند.",
            "Build maturity analysis from contractual and regulatory data, not unsupported totals.",
          ),
          text(
            "اختر منهج الانتقال مبكرًا لأن المقارنة السابقة يجب تعديلها في الحالتين.",
            "Choose the transition method early because the immediately preceding comparative is adjusted under either approach.",
          ),
        ],
        reference: "IFRS 20 (2026), presentation, disclosure and transition requirements",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تكلفة مسموح باستردادها في تعرفة السنة التالية",
          "Allowed cost recovered through next year's tariff",
        ),
        facts: text(
          "قدمت منشأة كهرباء خدمات تنظيمية في 2029 وتكبدت تكلفة إصلاح مسموحًا بها قدرها 1,200,000. ينص الاتفاق القابل للإنفاذ على استرداد التكلفة بالكامل عبر تعرفة 2030، لذلك لم تدخل في إيراد IFRS 15 لعام 2029. الاسترداد متوقع خلال سنة ولا يوجد أثر خصم جوهري. في 2030 أضيف المبلغ إلى الفواتير وحُصل من العملاء.",
          "An electricity entity supplies regulatory services in 2029 and incurs an allowed repair cost of 1,200,000. The enforceable agreement provides full recovery through the 2030 tariff, so the amount is absent from 2029 IFRS 15 revenue. Recovery is expected within one year and discounting is immaterial. In 2030 the amount is added to customer bills and collected.",
        ),
        calculations: [
          text(
            "في 2029 يوجد حق حالي لإضافة 1,200,000 إلى سعر مستقبلي مقابل خدمة قدمت؛ يثبت أصل تنظيمي ودخل تنظيمي 1,200,000.",
            "In 2029 a present right exists to add 1,200,000 to a future rate for service already supplied; a 1,200,000 regulatory asset and regulatory income are recognised.",
          ),
          text(
            "في 2030 يتضمن إيراد IFRS 15 مبلغ 1,200,000 عند الفوترة، ويستوفى الأصل التنظيمي بإثبات مصروف تنظيمي مساوٍ.",
            "In 2030 IFRS 15 revenue includes 1,200,000 on billing, and fulfilment of the regulatory asset creates equal regulatory expense.",
          ),
          text(
            "الأثر عبر السنتين: يعكس 2029 التعويض المسموح للخدمة المقدمة، بينما لا يتكرر الأثر الاقتصادي عند تحصيله في 2030.",
            "Across both years, 2029 reflects allowed compensation for service supplied, while the economic effect is not duplicated when collected in 2030.",
          ),
        ],
        conclusion: text(
          "لا يستبدل IFRS 20 إيراد IFRS 15؛ بل يضيف الدخل أو المصروف التنظيمي ليعكس فرق توقيت التعويض بين فترة الخدمة وفترة التعرفة.",
          "IFRS 20 does not replace IFRS 15 revenue; regulatory income or expense overlays it to reflect the compensation timing difference between service and tariff periods.",
        ),
        journalEntries: [
          {
            label: text("إثبات حق 2029", "Recognise the 2029 right"),
            debit: text("أصل تنظيمي", "Regulatory asset"),
            credit: text("دخل تنظيمي", "Regulatory income"),
            amount: text("1,200,000", "1,200,000"),
          },
          {
            label: text("استيفاء الأصل عند تحصيله في 2030", "Fulfil the asset on 2030 recovery"),
            debit: text("مصروف تنظيمي", "Regulatory expense"),
            credit: text("أصل تنظيمي", "Regulatory asset"),
            amount: text("1,200,000", "1,200,000"),
          },
        ],
        reference: "IFRS 20 (2026), timing-difference model",
      },
    ],
  },
  "IFRS 17": {
    sections: [
      {
        title: text("النطاق وفصل المكونات", "Scope and separation of components"),
        explanation: text(
          "يطبق IFRS 17 على عقود التأمين الصادرة، وعقود إعادة التأمين المحتفظ بها، وبعض عقود الاستثمار ذات ميزات المشاركة الاختيارية. يبدأ التحليل بتحديد ما إذا كان العقد ينقل خطر تأمين جوهريًا، ثم تُفصل المشتقات الضمنية والمكونات الاستثمارية والتزامات الأداء المتميزة عندما تستوفي شروط الفصل، وتطبق عليها المعايير المناسبة. لا يكفي أن يسمى المنتج وثيقة تأمين؛ فجوهر الخطر والحقوق والالتزامات هو الحاكم.",
          "IFRS 17 applies to issued insurance contracts, reinsurance contracts held and specified investment contracts with discretionary participation features. Analysis starts by determining whether the contract transfers significant insurance risk, then separating embedded derivatives, investment components and distinct performance obligations when separation criteria are met and applying the relevant Standards to them. A product label is not decisive; the substance of risk, rights and obligations governs.",
        ),
        keyPoints: [
          text(
            "اختبر الخطر التأميني على أساس السيناريوهات ذات الجوهر التجاري، لا متوسط النتيجة وحده.",
            "Test insurance risk using scenarios with commercial substance, not only the average outcome.",
          ),
          text(
            "افصل المكون فقط عندما يطلب المعيار ذلك؛ الفصل غير الصحيح يشوه الإيراد والالتزام.",
            "Separate a component only when required; incorrect separation distorts revenue and the liability.",
          ),
          text(
            "ميّز بين العقود الصادرة وإعادة التأمين المحتفظ بها لأن التجميع والقياس لا يتطابقان تمامًا.",
            "Distinguish issued contracts from reinsurance held because grouping and measurement are not identical.",
          ),
        ],
        reference: "IFRS 17.3–13 and Appendix A",
      },
      {
        title: text("التجميع والاعتراف", "Grouping and recognition"),
        explanation: text(
          "تقسم المحفظة إلى مجموعات لا تضم عقودًا صادرة بفاصل يزيد على سنة، وتفصل على الأقل العقود الخاسرة عند الاعتراف الأولي، والعقود التي لا يوجد احتمال جوهري لأن تصبح خاسرة، والعقود الأخرى. يُعترف بالمجموعة من أسبق تواريخ: بداية فترة التغطية، أو استحقاق أول دفعة من حامل الوثيقة، أو التاريخ الذي تصبح فيه المجموعة خاسرة. يمنع هذا التجميع تعويض خسائر عقود ضعيفة بأرباح عقود أخرى على نحو يخفي الأداء.",
          "A portfolio is divided into groups that do not include contracts issued more than one year apart and that distinguish, at a minimum, contracts onerous at initial recognition, contracts with no significant possibility of becoming onerous and remaining contracts. A group is recognised at the earliest of the coverage-period start, the date the first policyholder payment becomes due, and the date the group becomes onerous. This grouping prevents losses on weak contracts being obscured by profits on other contracts.",
        ),
        keyPoints: [
          text(
            "حدد المحافظ بحسب أخطار متشابهة تدار معًا قبل تقسيم الربحية.",
            "Identify portfolios of similar risks managed together before profitability grouping.",
          ),
          text(
            "لا تنقل العقود بين المجموعات بعد الاعتراف الأولي لمجرد تغير التقديرات.",
            "Do not move contracts between groups after initial recognition merely because estimates change.",
          ),
          text(
            "العقود الخاسرة تولد خسارة فورية ومكون خسارة؛ لا تنشئ هامش خدمة تعاقدية موجبًا.",
            "Onerous contracts create an immediate loss and loss component; they do not create a positive CSM.",
          ),
        ],
        reference: "IFRS 17.14–28",
      },
      {
        title: text("القياس العام وهامش الخدمة", "General measurement and the CSM"),
        explanation: text(
          "في نموذج القياس العام تساوي قيمة المجموعة تدفقات الوفاء مضافًا إليها هامش الخدمة التعاقدية. تدفقات الوفاء تشمل تقديرًا حاليًا غير متحيز مرجحًا بالاحتمالات للتدفقات المستقبلية، وتعديل القيمة الزمنية والمخاطر المالية، وتعديلًا صريحًا للمخاطر غير المالية. يمنع هامش الخدمة إثبات ربح اليوم الأول للمجموعة المربحة، ثم يحرر في الربح أو الخسارة مع تقديم خدمات عقود التأمين وفق وحدات التغطية. أما الخسارة في المجموعة الخاسرة فتثبت فورًا.",
          "Under the general measurement model, a group's carrying amount comprises fulfilment cash flows plus the contractual service margin. Fulfilment cash flows include current, unbiased, probability-weighted estimates of future cash flows, adjustments for time value and financial risk, and an explicit risk adjustment for non-financial risk. The CSM prevents day-one profit for a profitable group and is then released to profit or loss as insurance contract services are provided using coverage units. A loss on an onerous group is recognised immediately.",
        ),
        keyPoints: [
          text(
            "حدّث الافتراضات في كل تاريخ تقرير واستخدم معلومات معقولة ومؤيدة متاحة دون تكلفة أو جهد لا مبرر لهما.",
            "Update assumptions at each reporting date using reasonable and supportable information available without undue cost or effort.",
          ),
          text(
            "افصل أثر الخدمة المستقبلية الذي يعدل CSM عن أثر الخدمة الحالية أو الماضية الذي يمر بالنتيجة.",
            "Separate future-service effects that adjust the CSM from current- or past-service effects recognised in results.",
          ),
          text(
            "يجوز نهج تخصيص الأقساط للعقود المؤهلة، لكنه تبسيط للقياس وليس إعفاءً من التجميع أو عرض المطالبات.",
            "The premium allocation approach is available for eligible contracts, but is a measurement simplification, not an exemption from grouping or claims presentation.",
          ),
        ],
        reference: "IFRS 17.29–59 and B36–B119",
      },
      {
        title: text("العرض والإفصاح والانتقال", "Presentation, disclosure and transition"),
        explanation: text(
          "يعرض IFRS 17 إيراد التأمين ومصروفات خدمة التأمين منفصلين عن دخل أو مصروف تمويل التأمين، ولا يعامل تحصيل الأقساط أو سداد المكون الاستثماري كإيراد أو مصروف تأمين. يمكن للمنشأة اختيار عرض كامل دخل ومصروف التمويل في الربح أو الخسارة أو تفكيك جزء منه إلى الدخل الشامل الآخر وفق السياسة المسموح بها. تشمل الإفصاحات مصالحات أرصدة العقود وCSM ومكون الخسارة، والأحكام الجوهرية، وطبيعة ومدى المخاطر. الانتقال بأثر رجعي كامل ما لم يكن غير عملي، وعندها يستخدم الأثر الرجعي المعدل أو منهج القيمة العادلة.",
          "IFRS 17 presents insurance revenue and insurance service expenses separately from insurance finance income or expenses, and does not treat premium receipts or repayments of investment components as insurance revenue or expense. An entity may present all insurance finance income or expense in profit or loss or, where permitted, disaggregate a portion into OCI. Disclosures include reconciliations of contract balances, the CSM and loss components, significant judgements, and the nature and extent of risks. Transition is fully retrospective unless impracticable, in which case the modified retrospective or fair value approach is used.",
        ),
        keyPoints: [
          text(
            "صالح الإيراد التأميني مع حركة التزام التغطية المتبقية بدل مساواته بالأقساط المحصلة.",
            "Reconcile insurance revenue to movements in the liability for remaining coverage rather than equating it with premiums collected.",
          ),
          text(
            "احتفظ بسجل منفصل لخدمة التأمين وتمويل التأمين والمكونات الاستثمارية.",
            "Maintain separate ledgers for insurance service, insurance finance and investment components.",
          ),
          text(
            "وثق سبب تعذر الأثر الرجعي الكامل قبل اختيار منهج انتقال بديل.",
            "Document why full retrospective application is impracticable before selecting an alternative transition approach.",
          ),
        ],
        reference: "IFRS 17.78–132 and Appendix C",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مجموعة عقود خاسرة عند الاعتراف الأولي",
          "Onerous group at initial recognition",
        ),
        facts: text(
          "أصدرت شركة تأمين مجموعة عقود لمدة سنة. القيمة الحالية للأقساط المستقبلية المتوقعة 1,000,000، والقيمة الحالية للمطالبات والمصروفات المستقبلية 1,050,000، وتعديل المخاطر غير المالية 100,000. نهمل أثر التمويل الإضافي، ولم تُستلم الأقساط بعد.",
          "An insurer issues a one-year group of contracts. The present value of expected future premiums is 1,000,000, the present value of future claims and expenses is 1,050,000, and the risk adjustment for non-financial risk is 100,000. Additional finance effects are ignored and premiums have not yet been received.",
        ),
        calculations: [
          text(
            "صافي التدفقات النقدية المستقبلية = 1,050,000 − 1,000,000 = تدفق خارج 50,000.",
            "Net future cash flows = 1,050,000 − 1,000,000 = 50,000 net outflow.",
          ),
          text(
            "تدفقات الوفاء = 50,000 + تعديل مخاطر 100,000 = التزام 150,000.",
            "Fulfilment cash flows = 50,000 + 100,000 risk adjustment = 150,000 liability.",
          ),
          text(
            "لأن تدفقات الوفاء التزام صافي، فالمجموعة خاسرة: CSM = صفر والخسارة الفورية = 150,000.",
            "Because fulfilment cash flows are a net liability, the group is onerous: CSM is zero and the immediate loss is 150,000.",
          ),
        ],
        conclusion: text(
          "تثبت الخسارة عند الاعتراف الأولي ولا تؤجل داخل CSM. ويُتتبع مبلغ 150,000 كمكون خسارة داخل التزام التغطية المتبقية لتخصيص التغيرات اللاحقة بصورة صحيحة.",
          "The loss is recognised at initial recognition and is not deferred in the CSM. The 150,000 is tracked as a loss component within the liability for remaining coverage so later changes are allocated correctly.",
        ),
        journalEntries: [
          {
            label: text("إثبات خسارة المجموعة عند الاعتراف", "Recognise the group loss"),
            debit: text("مصروف خدمة التأمين", "Insurance service expense"),
            credit: text("التزام عقود التأمين", "Insurance contract liability"),
            amount: text("150,000", "150,000"),
          },
        ],
        reference: "IFRS 17.32–38 and 47–52",
      },
    ],
  },
  "IFRS 18": {
    sections: [
      {
        title: text(
          "الهدف والسريان والعلاقة مع IAS 1",
          "Objective, effective date and IAS 1 transition",
        ),
        explanation: text(
          "يحل IFRS 18 محل IAS 1 للفترات السنوية التي تبدأ في أو بعد 1 يناير 2027، مع السماح بالتطبيق المبكر. يحافظ على كثير من متطلبات القوائم الكاملة والمقارنات، لكنه يعيد تنظيم متطلبات العرض والإفصاح ويركز خصوصًا على قائمة الربح أو الخسارة. لا يغير المعيار قواعد الاعتراف والقياس الخاصة بالأصول والالتزامات؛ وإنما يغير موضع وطريقة تجميع وعرض بعض النتائج ومعلومات الأداء.",
          "IFRS 18 replaces IAS 1 for annual periods beginning on or after 1 January 2027, with earlier application permitted. It retains many requirements for a complete set of financial statements and comparatives, but reorganises presentation and disclosure requirements and focuses especially on the statement of profit or loss. It does not change asset and liability recognition or measurement; it changes where and how specified results and performance information are aggregated and presented.",
        ),
        keyPoints: [
          text(
            "خطط للمقارنات لأن التطبيق بأثر رجعي وفق IAS 8 يحتاج إعادة عرض الفترة المقارنة.",
            "Plan for comparatives because retrospective application under IAS 8 requires restating the comparative period.",
          ),
          text(
            "حدّث مخطط الحسابات والتقارير الإدارية معًا حتى تتطابق مصادر التصنيف والمصالحة.",
            "Update the chart of accounts and management reporting together so classification and reconciliation share consistent sources.",
          ),
          text(
            "افصل أثر العرض عن أي تغيير قياس صادر من معيار آخر.",
            "Separate presentation effects from measurement changes arising under another Standard.",
          ),
        ],
        reference: "IFRS 18.1–18 and C1–C7",
      },
      {
        title: text(
          "فئات قائمة الربح أو الخسارة والمجاميع الجديدة",
          "Profit-or-loss categories and new subtotals",
        ),
        explanation: text(
          "يصنف الدخل والمصروف في فئات التشغيل والاستثمار والتمويل وضريبة الدخل والعمليات غير المستمرة. التشغيل فئة متبقية لكنها ليست مرادفًا للبنود المتكررة؛ فقد تضم بنودًا متقلبة أو غير معتادة. يطلب المعيار مجموعين محددين: الربح التشغيلي، والربح قبل التمويل وضريبة الدخل. وتوجد متطلبات خاصة للمنشآت التي يكون الاستثمار في أصول أو تقديم التمويل للعملاء نشاطًا رئيسيًا، لأن بعض البنود التي تكون استثمارية أو تمويلية لغيرها قد تصبح تشغيلية لديها.",
          "Income and expenses are classified into operating, investing, financing, income tax and discontinued-operation categories. Operating is a residual category but is not synonymous with recurring items; it can include volatile or unusual items. The Standard requires two defined subtotals: operating profit and profit before financing and income taxes. Special rules apply when investing in assets or providing financing to customers is a main business activity, because items that would be investing or financing for other entities may be operating for those entities.",
        ),
        keyPoints: [
          text(
            "حدد الأنشطة الرئيسية على مستوى المنشأة المبلغة وبأدلة يمكن ملاحظتها، لا بمجرد رغبة الإدارة في عرض نتيجة أفضل.",
            "Assess main business activities at reporting-entity level using observable evidence, not management preference for a better result.",
          ),
          text(
            "لا تستخدم وصف غير متكرر لتبرير إخراج بند من التشغيل.",
            "Do not use a non-recurring label to justify excluding an item from operating.",
          ),
          text(
            "اربط كل حساب دخل أو مصروف بقاعدة تصنيف موثقة وقابلة للتطبيق على المقارنة.",
            "Map every income and expense account to a documented classification rule applicable to the comparative period.",
          ),
        ],
        reference: "IFRS 18.47–85 and B29–B76",
      },
      {
        title: text("مقاييس الأداء المحددة من الإدارة", "Management-defined performance measures"),
        explanation: text(
          "مقياس الأداء المحدد من الإدارة هو مجموع فرعي للدخل والمصروف تستخدمه المنشأة في اتصالات عامة خارج القوائم لإبلاغ نظرة الإدارة لأداء المنشأة ككل، ولا يكون مجموعًا محددًا في IFRS. تجمع الإفصاحات الخاصة بهذه المقاييس في إيضاح واحد، وتشمل وصف سبب فائدتها وطريقة حسابها، ومصالحة مع أقرب مجموع محدد في IFRS، والأثر الضريبي وأثر حقوق غير المسيطرين لكل بند مصالحة، وشرح التغييرات من فترة لأخرى.",
          "A management-defined performance measure is a subtotal of income and expenses used in public communications outside the financial statements to convey management's view of the entity's overall financial performance and is not a subtotal specified by IFRS. Related disclosures are placed in a single note and include why the measure is useful, how it is calculated, a reconciliation to the most directly comparable IFRS subtotal, the tax and non-controlling-interest effects of each reconciling item, and explanations of period-to-period changes.",
        ),
        keyPoints: [
          text(
            "امسح البيانات الصحفية وتعليقات الإدارة وعروض المستثمرين لتحديد المقاييس المستخدمة فعليًا.",
            "Inventory press releases, management commentary and investor presentations to identify measures actually used.",
          ),
          text(
            "لا تفترض أن كل رقم غير GAAP هو MPM؛ يجب أن يكون مجموعًا فرعيًا للدخل والمصروف ويخص أداء المنشأة ككل.",
            "Do not assume every non-GAAP number is an MPM; it must be an income-and-expense subtotal concerning the entity as a whole.",
          ),
          text(
            "اضبط المصالحة والضريبة وحقوق غير المسيطرين من نفس بيانات الإقفال المالي.",
            "Control the reconciliation, tax and NCI effects from the same financial-close data.",
          ),
        ],
        reference: "IFRS 18.117–125 and B113–B142",
      },
      {
        title: text(
          "التجميع والتفكيك وتحليل المصروفات",
          "Aggregation, disaggregation and expense analysis",
        ),
        explanation: text(
          "تقدم القوائم الأساسية ملخصات منظمة مفيدة، بينما تقدم الإيضاحات المعلومات الجوهرية اللازمة للتفسير. لذلك تجمع البنود ذات الخصائص المشتركة وتفكك البنود ذات الخصائص المختلفة متى كانت المعلومات الناتجة جوهرية، ولا تستخدم تسمية مثل «أخرى» إذا كانت تحجب طبيعة بنود مهمة. تعرض مصروفات التشغيل بطريقة الطبيعة أو الوظيفة أو مزيج منهما بما يقدم الملخص الأكثر فائدة؛ وعند عرض بنود بالوظيفة يلزم إفصاح واحد عن مصروفات محددة بطبيعتها، ومنها الإهلاك والاستهلاك ومنافع الموظفين والانخفاض والمخزون المعترف به مصروفًا.",
          "Primary financial statements provide useful structured summaries, while notes provide material explanatory information. Items with shared characteristics are aggregated and those with dissimilar characteristics are disaggregated when the resulting information is material; labels such as 'other' must not obscure significant items. Operating expenses are presented by nature, function or a mixed approach that gives the most useful summary. When functional line items are used, a single note discloses specified expenses by nature, including depreciation, amortisation, employee benefits, impairment and inventory recognised as expense.",
        ),
        keyPoints: [
          text(
            "اختبر الجوهرية بحسب الطبيعة والحجم معًا وعلى مستوى القوائم ككل.",
            "Assess materiality by nature and magnitude together in the context of the financial statements as a whole.",
          ),
          text(
            "اربط تفاصيل الإيضاح مباشرة بالبند التجميعي في القائمة الأساسية.",
            "Link note disaggregation directly to its aggregated primary-statement line item.",
          ),
          text(
            "تجنب تكرار مصروف الطبيعة نفسه إذا دخل في أكثر من وظيفة عند إعداد الإفصاح المطلوب.",
            "Avoid double counting a nature expense included in more than one function when preparing the required disclosure.",
          ),
        ],
        reference: "IFRS 18.16–43, 78–83 and B16–B28",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تصنيف قائمة الربح أو الخسارة ومصالحة MPM",
          "Profit-or-loss classification and MPM reconciliation",
        ),
        facts: text(
          "منشأة صناعية لا يعد الاستثمار أو التمويل نشاطًا رئيسيًا لها. لديها إيراد 1,000، ومصروفات تشغيل 700 تشمل إعادة هيكلة 30، وحصة ربح شركة زميلة 40، وفائدة ودائع 10، ومصروف تمويل 50، وضريبة دخل 60. تعلن الإدارة «الربح التشغيلي المعدل» بعد استبعاد إعادة الهيكلة.",
          "A manufacturer for which investing and financing are not main business activities has revenue of 1,000, operating expenses of 700 including 30 restructuring costs, a 40 share of profit of an associate, 10 deposit interest, 50 finance expense and 60 income tax. Management publicly communicates 'adjusted operating profit' excluding restructuring.",
        ),
        calculations: [
          text("الربح التشغيلي = 1,000 − 700 = 300.", "Operating profit = 1,000 − 700 = 300."),
          text(
            "فئة الاستثمار = 40 + 10 = 50؛ الربح قبل التمويل وضريبة الدخل = 300 + 50 = 350.",
            "Investing category = 40 + 10 = 50; profit before financing and income taxes = 300 + 50 = 350.",
          ),
          text(
            "الربح قبل الضريبة = 350 − 50 = 300؛ الربح = 300 − 60 = 240.",
            "Profit before tax = 350 − 50 = 300; profit = 300 − 60 = 240.",
          ),
          text(
            "MPM المعلن = 330، ويصالح إلى الربح التشغيلي 300 بإضافة مصروف إعادة الهيكلة 30، مع إفصاح أثر الضريبة وحقوق غير المسيطرين للبند.",
            "The communicated MPM is 330 and reconciles to operating profit of 300 by adding back the 30 restructuring expense, with tax and NCI effects disclosed for the item.",
          ),
        ],
        conclusion: text(
          "إعادة الهيكلة تبقى في فئة التشغيل رغم وصفها بأنها غير متكررة، بينما يشرح إيضاح MPM التعديل بشفافية. المثال يغير العرض والإفصاح ولا ينشئ قيدًا محاسبيًا جديدًا.",
          "Restructuring remains in operating despite being described as non-recurring, while the MPM note transparently explains the adjustment. The example changes presentation and disclosure and creates no new accounting entry.",
        ),
        journalEntries: [],
        reference: "IFRS 18.47–85 and 117–125",
      },
    ],
  },
  "IFRS 19": {
    sections: [
      {
        title: text("شروط الأهلية والاختيار", "Eligibility and election"),
        explanation: text(
          "يجوز للمنشأة تطبيق IFRS 19 إذا كانت شركة تابعة في نهاية فترة التقرير، ولا تخضع للمساءلة العامة، وكان لها كيان أم نهائي أو وسيط ينتج قوائم مالية موحدة متاحة للاستخدام العام ومتوافقة مع IFRS. توجد المساءلة العامة عادة عندما تكون أدوات الدين أو حقوق الملكية متداولة علنًا أو في طريقها للإصدار العام، أو عندما تحتفظ المنشأة بأصول مجموعة واسعة من الأطراف بصفة ائتمانية كنشاط رئيسي، كما في كثير من البنوك وشركات التأمين وصناديق الاستثمار.",
          "An entity may apply IFRS 19 if, at the end of the reporting period, it is a subsidiary, does not have public accountability, and has an ultimate or intermediate parent that produces consolidated financial statements available for public use and compliant with IFRS. Public accountability generally arises when debt or equity instruments are publicly traded or being prepared for public issue, or when the entity holds assets in a fiduciary capacity for a broad group of outsiders as a primary business, as many banks, insurers and investment funds do.",
        ),
        keyPoints: [
          text(
            "أعد تقييم الأهلية في نهاية كل فترة تقرير ولا تعتمد على نتيجة السنة الماضية.",
            "Reassess eligibility at the end of every reporting period rather than relying on last year's conclusion.",
          ),
          text(
            "احتفاظ عارض بأموال العملاء لا يعني دائمًا مساءلة عامة؛ اختبر هل الصفة الائتمانية نشاط رئيسي.",
            "Incidental custody of customer funds does not always create public accountability; test whether fiduciary holding is a primary business.",
          ),
          text(
            "وثق إتاحة قوائم الأم المتوافقة مع IFRS للاستخدام العام.",
            "Document that the parent's IFRS-compliant consolidated statements are available for public use.",
          ),
        ],
        reference: "IFRS 19.4–8",
      },
      {
        title: text("ما الذي يتغير وما الذي لا يتغير", "What changes and what does not"),
        explanation: text(
          "IFRS 19 معيار إفصاح مخفض، وليس إطار اعتراف أو قياس مبسطًا. تطبق الشركة التابعة المؤهلة متطلبات الاعتراف والقياس والعرض في معايير IFRS الأخرى كما هي، ثم تستخدم إفصاحات IFRS 19 بدل إفصاحات تلك المعايير، مع مراعاة المتطلبات التي يحيل إليها IFRS 19 أو يبقيها واجبة. لذلك لا يجوز استخدامه لتغيير قيمة أصل أو مخصص أو إيراد، ولا يساوي معيار IFRS للمنشآت الصغيرة والمتوسطة.",
          "IFRS 19 is a reduced-disclosure Standard, not a simplified recognition or measurement framework. An eligible subsidiary applies recognition, measurement and presentation requirements in other IFRS Accounting Standards unchanged, then uses IFRS 19 disclosures instead of those Standards' disclosures, subject to requirements incorporated or retained by IFRS 19. It therefore cannot be used to change the amount of an asset, provision or revenue, and it is not the IFRS for SMEs Accounting Standard.",
        ),
        keyPoints: [
          text(
            "ضع مصفوفة تفصل متطلبات الاعتراف والقياس والعرض عن متطلبات الإفصاح لكل معيار.",
            "Build a matrix separating recognition, measurement and presentation from disclosure requirements for every Standard.",
          ),
          text(
            "لا تنقل إعفاءات القياس من IFRS للمنشآت الصغيرة والمتوسطة إلى IFRS 19.",
            "Do not import IFRS for SMEs measurement simplifications into IFRS 19.",
          ),
          text(
            "راجع الإحالات داخل الإفصاحات المخفضة حتى لا يسقط إفصاح لازم من معيار آخر.",
            "Review cross-references in reduced disclosures so a required disclosure from another Standard is not omitted.",
          ),
        ],
        reference: "IFRS 19.1–3 and disclosure requirements by Standard",
      },
      {
        title: text("التطبيق والتغيير والمقارنات", "Application, changes and comparatives"),
        explanation: text(
          "يمكن للشركة المؤهلة اختيار IFRS 19 أو التوقف عنه من فترة إلى أخرى دون أن يكون قرارها غير قابل للعكس، لكن يجب تطبيق متطلبات الانتقال والمقارنة المناسبة. عند تطبيقه في الفترة الحالية دون السابقة، تقدم معلومات مقارنة لجميع المبالغ المعروضة في الفترة الحالية ما لم يسمح معيار آخر بخلاف ذلك. وعند فقد الأهلية تعود إفصاحات IFRS الكاملة؛ لذلك يلزم الاحتفاظ ببيانات يمكنها دعم التوسع في الإفصاحات مستقبلًا.",
          "An eligible subsidiary may elect IFRS 19 or stop applying it in later periods; the decision is not irrevocable, but applicable transition and comparative requirements must be followed. When applying it in the current period but not the preceding period, comparative information is provided for all amounts reported in the current period unless another Standard permits otherwise. Loss of eligibility restores full IFRS disclosures, so data capable of supporting future expanded disclosures should be retained.",
        ),
        keyPoints: [
          text(
            "لا تحذف بيانات الإفصاح الكاملة من النظام لمجرد أن تقرير السنة الحالية مخفض.",
            "Do not remove full-disclosure data from systems merely because the current report is reduced.",
          ),
          text(
            "حدّث قائمة التحقق عند صدور أو تعديل أي معيار لأن IFRS 19 يحتاج تحديثًا دوريًا.",
            "Update the checklist when any Standard is issued or amended because IFRS 19 requires periodic maintenance.",
          ),
          text(
            "عالج التغيير في سياسة الإفصاح دون تغيير أرقام الاعتراف والقياس الأساسية.",
            "Treat the disclosure-policy change without altering underlying recognition and measurement amounts.",
          ),
        ],
        reference: "IFRS 19.9–14 and Appendix A",
      },
      {
        title: text(
          "السريان وتحديثات 2025 وضبط الإفصاح",
          "Effective date, 2025 updates and disclosure control",
        ),
        explanation: text(
          "يسري IFRS 19 للفترات السنوية التي تبدأ في أو بعد 1 يناير 2027 مع السماح بالتطبيق المبكر. وقد أصدر IASB في أغسطس 2025 تعديلات توفر إفصاحات مخفضة لمتطلبات ناشئة عن معايير وتعديلات صدرت بين فبراير 2021 ومايو 2024، بما يحافظ على مواكبة المعيار. عمليًا يجب استخدام نسخة قائمة التحقق المطابقة لتاريخ التقرير وحالة تطبيق IFRS 18 والتعديلات الأخرى، لا نسخة ثابتة قديمة.",
          "IFRS 19 is effective for annual periods beginning on or after 1 January 2027, with earlier application permitted. In August 2025 the IASB issued amendments providing reduced disclosures for requirements arising from Standards and amendments issued between February 2021 and May 2024, keeping the Standard current. In practice, use a disclosure checklist matched to the reporting date and the entity's application of IFRS 18 and other amendments rather than a stale fixed version.",
        ),
        keyPoints: [
          text(
            "ثبت تاريخ إصدار قائمة التحقق والمجموعة الكاملة من التعديلات المطبقة.",
            "Record the checklist version and the complete set of applied amendments.",
          ),
          text(
            "صالح كل إفصاح مخفض مع رصيد دفتر الأستاذ أو إيضاح المجموعة ذي الصلة.",
            "Reconcile each reduced disclosure to the related ledger balance or group note.",
          ),
          text(
            "راجع أهلية التطبيق واعتماد السياسة ضمن إقفال كل سنة.",
            "Include eligibility and policy approval in every year-end close.",
          ),
        ],
        reference: "IFRS 19 Appendix A; Amendments to IFRS 19 (August 2025)",
      },
    ],
    workedExamples: [
      {
        title: text(
          "شركة تصنيع تابعة مؤهلة للإفصاح المخفض",
          "Eligible manufacturing subsidiary using reduced disclosures",
        ),
        facts: text(
          "شركة تصنيع تابعة مملوكة بالكامل لا تتداول أدواتها علنًا ولا تحتفظ بأصول الغير بصفة ائتمانية كنشاط رئيسي. تنشر أمها النهائية قوائم موحدة متوافقة مع IFRS للاستخدام العام. لدى التابعة آلة تكلفتها 5,000,000 ومجمع إهلاكها 2,000,000، وقرض 1,000,000 بفائدة 8%. اختارت IFRS 19 للفترة المؤهلة.",
          "A wholly owned manufacturing subsidiary has no publicly traded instruments and does not hold outsiders' assets in a fiduciary capacity as a primary business. Its ultimate parent publishes IFRS-compliant consolidated financial statements for public use. The subsidiary has machinery costing 5,000,000 with accumulated depreciation of 2,000,000 and a 1,000,000 loan at 8%. It elects IFRS 19 for the eligible period.",
        ),
        calculations: [
          text(
            "القيمة الدفترية للآلة = 5,000,000 − 2,000,000 = 3,000,000 وفق IAS 16 دون تغيير بسبب IFRS 19.",
            "Machinery carrying amount = 5,000,000 − 2,000,000 = 3,000,000 under IAS 16, unchanged by IFRS 19.",
          ),
          text(
            "مصروف الفائدة السنوي = 1,000,000 × 8% = 80,000 وفق IFRS 9، أيضًا دون تخفيض قياس.",
            "Annual interest expense = 1,000,000 × 8% = 80,000 under IFRS 9, also without a measurement reduction.",
          ),
          text(
            "الفرق يقع في مجموعة الإفصاحات: تستخدم متطلبات IFRS 19 المتعلقة بـIAS 16 وIFRS 7/IFRS 9 بدل قوائم الإفصاح الكاملة، مع إبقاء البيانات اللازمة للمصالحة.",
            "The difference is the disclosure set: IFRS 19 requirements relating to IAS 16 and IFRS 7/IFRS 9 replace full disclosure lists, while data needed for reconciliation is retained.",
          ),
        ],
        conclusion: text(
          "الأهلية تخفض عبء الإفصاح، لكنها لا تغير 3,000,000 قيمة الآلة ولا 80,000 مصروف الفائدة ولا العرض المطلوب في المعايير الأخرى؛ لذلك لا ينتج قيد محاسبي من انتخاب IFRS 19 نفسه.",
          "Eligibility reduces disclosure burden but changes neither the 3,000,000 machinery amount nor the 80,000 interest expense nor presentation required by other Standards; the IFRS 19 election itself therefore creates no journal entry.",
        ),
        journalEntries: [],
        reference: "IFRS 19.1–14 and disclosure requirements relating to IAS 16 and IFRS 7",
      },
    ],
  },
  "IAS 26": {
    sections: [
      {
        title: text(
          "وحدة التقرير والعلاقة مع IAS 19",
          "Reporting entity and relationship with IAS 19",
        ),
        explanation: text(
          "يعالج IAS 26 القوائم المالية لخطة منافع التقاعد باعتبارها كيان تقرير منفصلًا عن أصحاب العمل المشاركين. فهو يبين معلومات الخطة للمشاركين كمجموعة، بينما يعالج IAS 19 تكلفة والتزام منافع الموظفين في قوائم صاحب العمل. يطبق IAS 26 سواء كان للصندوق شخصية قانونية مستقلة أو أمناء، ولا يغطي تقارير الحق الفردي لكل مشارك أو خطط الضمان الاجتماعي الحكومية.",
          "IAS 26 addresses the financial statements of a retirement benefit plan as a reporting entity separate from participating employers. It reports information about the plan to participants as a group, while IAS 19 addresses employee-benefit cost and obligations in an employer's financial statements. IAS 26 applies whether or not the fund has separate legal identity or trustees and does not cover individual participant entitlement reports or government social-security arrangements.",
        ),
        keyPoints: [
          text(
            "لا تنقل التزام IAS 19 الخاص بصاحب العمل مباشرة إلى قوائم الخطة.",
            "Do not copy the employer's IAS 19 obligation directly into the plan's financial statements.",
          ),
          text(
            "حدد هل التقرير يخص الخطة ككل أم كشف مشارك فردي قبل تطبيق المعيار.",
            "Determine whether the report concerns the plan as a whole or an individual participant statement before applying the Standard.",
          ),
          text(
            "طبق المعايير الأخرى على معاملات الخطة بالقدر الذي لا يستبدله IAS 26.",
            "Apply other Standards to plan transactions to the extent IAS 26 does not supersede them.",
          ),
        ],
        reference: "IAS 26.1–8",
      },
      {
        title: text("خطط المساهمات المحددة", "Defined contribution plans"),
        explanation: text(
          "في خطة المساهمات المحددة تعتمد المنافع المستقبلية أساسًا على مساهمات صاحب العمل والمشارك وكفاءة تشغيل الصندوق وعائد استثماراته. تركز القوائم على صافي الأصول المتاحة للمنافع وسياسة التمويل، وتعرض بيان صافي الأصول وبيان التغيرات فيه ووصفًا للسياسة التمويلية. الخطر الاستثماري والنتيجة المتاحة للمشارك يرتبطان بأداء موجودات الخطة، لذلك تعد شفافية العائد والمصروفات والتحويلات أساسية.",
          "In a defined contribution plan, future benefits depend primarily on employer and participant contributions, the fund's operating efficiency and investment returns. Financial statements focus on net assets available for benefits and funding policy, presenting a statement of net assets, a statement of changes in net assets and a description of funding policy. Investment risk and participants' outcomes depend on plan assets, making transparency over returns, expenses and transfers essential.",
        ),
        keyPoints: [
          text(
            "صالح المساهمات المستحقة والمحصلة مع سجلات المشاركين وأصحاب العمل.",
            "Reconcile contributions due and received to participant and employer records.",
          ),
          text(
            "اعرض المنافع المدفوعة والمصروفات الإدارية منفصلة عن عائد الاستثمار.",
            "Present benefits paid and administrative expenses separately from investment return.",
          ),
          text(
            "اشرح أي تغيير جوهري في سياسة التمويل أو شروط الخطة.",
            "Explain any material change in funding policy or plan terms.",
          ),
        ],
        reference: "IAS 26.13–16 and 32–36",
      },
      {
        title: text(
          "خطط المنافع المحددة والقيمة الاكتوارية",
          "Defined benefit plans and actuarial value",
        ),
        explanation: text(
          "تربط خطة المنافع المحددة المنفعة الموعودة بصيغة مثل الراتب وسنوات الخدمة، لذلك يلزم إظهار العلاقة بين صافي الأصول والقيمة الحالية الاكتوارية للمنافع الموعودة. تعرض القوائم إما بيانًا يجمع صافي الأصول والقيمة الحالية للمنافع المستحقة وغير المستحقة والفائض أو العجز، أو بيان صافي الأصول مع الإفصاح عن القيمة الاكتوارية في إيضاح أو بالإحالة إلى تقرير اكتواري مرفق. يوضح التقرير هل حسبت المنافع على الرواتب الحالية أم المتوقعة وأثر التغييرات الجوهرية.",
          "A defined benefit plan links promised benefits to a formula such as salary and service, so reporting must show the relationship between net assets and the actuarial present value of promised benefits. Statements either show net assets, the actuarial present value of vested and non-vested benefits and the resulting surplus or deficit together, or show net assets with the actuarial amount in a note or an accompanying actuarial report. Reporting explains whether benefits are based on current or projected salaries and the effect of material changes.",
        ),
        keyPoints: [
          text(
            "افصل المنافع المستحقة قانونًا أو غير المشروطة عن غير المستحقة.",
            "Distinguish vested or unconditional benefits from non-vested benefits.",
          ),
          text(
            "لا تقدم رقم العجز أو الفائض دون تاريخ وأساس التقييم الاكتواري.",
            "Do not present a surplus or deficit without the actuarial valuation date and basis.",
          ),
          text(
            "اشرح أثر التعديلات على الخطة والتغيرات في الافتراضات على المعلومات المعروضة.",
            "Explain the effect of plan amendments and assumption changes on reported information.",
          ),
        ],
        reference: "IAS 26.17–31",
      },
      {
        title: text(
          "قياس الاستثمارات والعرض والإفصاح",
          "Investment measurement, presentation and disclosure",
        ),
        explanation: text(
          "تقاس استثمارات خطة منافع التقاعد بالقيمة العادلة، ويستخدم سعر السوق للاستثمارات القابلة للتداول. وإذا تعذر تقدير القيمة العادلة لاستثمار يبين سبب استخدام أساس آخر. تشمل القوائم وصف الخطة وسياساتها المحاسبية، وبيان صافي الأصول المتاحة للمنافع، وبيان التغيرات فيه أو المعلومات المكافئة، ومعلومات التمويل والاستثمارات والالتزامات غير القيمة الحالية الاكتوارية للمنافع. ويجب أن تساعد المعلومات المستخدم على تقييم قدرة الخطة على سداد المنافع عبر الزمن.",
          "Retirement benefit plan investments are measured at fair value, using market value for marketable securities. If fair value cannot be estimated for an investment, the reason for using another basis is disclosed. Financial statements include a plan description and accounting policies, a statement of net assets available for benefits, a statement of changes or equivalent information, and information about funding, investments and liabilities other than the actuarial present value of promised benefits. The information should help users assess the plan's ability to pay benefits over time.",
        ),
        keyPoints: [
          text(
            "صالح تقييم الاستثمار مع أمين الحفظ والأسعار المستخدمة في تاريخ التقرير.",
            "Reconcile investment valuations to custodian records and prices used at the reporting date.",
          ),
          text(
            "افصل تغير القيمة العادلة عن دخل الفوائد والتوزيعات عند تحليل عائد الاستثمار.",
            "Separate fair value changes from interest and dividend income when analysing investment return.",
          ),
          text(
            "اكشف وصف الخطة وعدد المشاركين ونوعها وشروط الإنهاء والتغيرات المهمة.",
            "Disclose the plan description, participant numbers, plan type, termination terms and significant changes.",
          ),
        ],
        reference: "IAS 26.32–36",
      },
    ],
    workedExamples: [
      {
        title: text(
          "حركة صافي أصول خطة مساهمات محددة",
          "Movement in defined contribution plan net assets",
        ),
        facts: text(
          "لدى خطة مساهمات محددة صافي أصول أول المدة 2,000,000. استلمت مساهمات 500,000، وحققت دخل استثمار 80,000، ودفعت منافع 220,000، وتحملت مصروفات إدارية 20,000. نفترض عدم وجود تغير قيمة عادلة آخر.",
          "A defined contribution plan has opening net assets of 2,000,000. It receives contributions of 500,000, earns investment income of 80,000, pays benefits of 220,000 and incurs administrative expenses of 20,000. Assume no other fair value movement.",
        ),
        calculations: [
          text(
            "الزيادة الصافية = 500,000 + 80,000 − 220,000 − 20,000 = 340,000.",
            "Net increase = 500,000 + 80,000 − 220,000 − 20,000 = 340,000.",
          ),
          text(
            "صافي الأصول المتاحة للمنافع آخر المدة = 2,000,000 + 340,000 = 2,340,000.",
            "Closing net assets available for benefits = 2,000,000 + 340,000 = 2,340,000.",
          ),
          text(
            "يعرض بيان التغيرات مصادر الزيادة والتخفيض كلًا على حدة، لا الرقم الصافي وحده.",
            "The statement of changes presents each source of increase and decrease separately, not only the net figure.",
          ),
        ],
        conclusion: text(
          "يمثل 2,340,000 موارد الخطة المتاحة للمنافع في نهاية الفترة، ولا يمثل التزام IAS 19 في دفاتر صاحب العمل.",
          "The 2,340,000 represents plan resources available for benefits at period end; it is not the employer's IAS 19 liability.",
        ),
        journalEntries: [
          {
            label: text("إثبات المساهمات المستلمة", "Recognise contributions received"),
            debit: text("النقدية/الاستثمارات", "Cash/investments"),
            credit: text("مساهمات", "Contributions"),
            amount: text("500,000", "500,000"),
          },
          {
            label: text("إثبات دخل الاستثمار", "Recognise investment income"),
            debit: text("النقدية/دخل مستحق", "Cash/accrued income"),
            credit: text("دخل استثمار", "Investment income"),
            amount: text("80,000", "80,000"),
          },
          {
            label: text("دفع المنافع والمصروفات", "Pay benefits and expenses"),
            debit: text("منافع ومصروفات إدارية", "Benefits and administrative expenses"),
            credit: text("النقدية", "Cash"),
            amount: text("240,000", "240,000"),
          },
        ],
        reference: "IAS 26.13–16 and 32–36",
      },
    ],
  },
};

export const IFRS_STANDARD_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> =
  Object.fromEntries(
    Object.keys(BASE_IFRS_STANDARD_STUDY_EXPANSIONS).map((code) => {
      const base = BASE_IFRS_STANDARD_STUDY_EXPANSIONS[code];
      const addition = IFRS_BOOK2_STUDY_EXPANSIONS[code];
      if (!base) throw new Error(`Missing base study expansion for ${code}`);
      return [
        code,
        addition
          ? {
              sections: [...base.sections, ...addition.sections],
              workedExamples: [...base.workedExamples, ...addition.workedExamples],
            }
          : base,
      ];
    }),
  );

export function getStandardStudyExpansion(code: string) {
  return IFRS_STANDARD_STUDY_EXPANSIONS[code] ?? null;
}
