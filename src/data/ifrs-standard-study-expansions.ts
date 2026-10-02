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
};

export function getStandardStudyExpansion(code: string) {
  return IFRS_STANDARD_STUDY_EXPANSIONS[code] ?? null;
}
