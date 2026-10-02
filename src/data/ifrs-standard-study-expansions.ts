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
export const IFRS_STANDARD_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> = {
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
          "يضاف 32,500 إلى تكلفة المخزن عن الفترة من أغسطس إلى ديسمبر وفق بيانات المثال التي تحتسب أربعة أشهر.",
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
};

export function getStandardStudyExpansion(code: string) {
  return IFRS_STANDARD_STUDY_EXPANSIONS[code] ?? null;
}
