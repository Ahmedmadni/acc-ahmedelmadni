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
