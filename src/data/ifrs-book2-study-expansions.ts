import type { StandardStudyExpansion, StudyText } from "./ifrs-standard-study-expansions";

const text = (ar: string, en: string): StudyText => ({ ar, en });

/**
 * Additional applied material reviewed against the cited IFRS requirements.
 * Source-page and acquisition records stay in the private editorial audit;
 * learner-facing references identify the applicable Standard only.
 */
export const IFRS_BOOK2_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> = {
  "IFRS 2": {
    sections: [
      {
        title: text(
          "خدمة الموظف تُقاس عبر فترة الاستحقاق",
          "Employee services accrue over the vesting period",
        ),
        explanation: text(
          "في منح الخيارات المسددة بأسهم للموظفين، تُستخدم القيمة العادلة للخيار في تاريخ المنح أساسًا لقياس خدمات الموظفين. شرط البقاء في الخدمة لا يُخفض قيمة الخيار المقاسة؛ بدلًا من ذلك، يُحدَّث عدد الخيارات المتوقع استحقاقها عند كل تاريخ تقرير. المصروف التراكمي يساوي عدد الأدوات المتوقع استحقاقها × قيمتها في تاريخ المنح × نسبة فترة الخدمة المنقضية. قيد كل سنة هو الفرق بين المصروف التراكمي الجديد وما سُجل سابقًا، ويقابله رصيد في حقوق الملكية. عند الممارسة، تُضاف حصيلة سعر الممارسة إلى حقوق الملكية ولا يُعاد قياس تكلفة الخدمة بسبب سعر السهم اللاحق.",
          "For equity-settled employee options, grant-date option fair value provides the basis for measuring employee services. A service vesting condition does not reduce the measured option value; instead, update the number expected to vest at each reporting date. Cumulative expense equals expected vesting instruments × grant-date value × proportion of service period completed. Each year's charge is the revised cumulative amount less previous charges, with a corresponding equity credit. On exercise, the exercise proceeds enter equity; later share prices do not remeasure the service cost.",
        ),
        keyPoints: [
          text(
            "لا تضرب القيمة العادلة بسعر الممارسة؛ لكل منهما دور مختلف.",
            "Do not multiply fair value by the exercise price; they serve different purposes.",
          ),
          text(
            "أعد تقدير المغادرين كل سنة، ثم احسب مصروف السنة من تغير الرصيد التراكمي.",
            "Revise expected leavers each year, then derive annual expense from the change in cumulative cost.",
          ),
          text(
            "تحقق من توازن قيد الإصدار: النقد مع احتياطي الخيارات في المدين يساوي رأس المال والعلاوة في الدائن.",
            "Check the issue entry balances: cash plus the options reserve debits equal share capital plus premium credits.",
          ),
        ],
        reference: "IFRS 2.14–23",
      },
    ],
    workedExamples: [
      {
        title: text("برنامج 800 موظف خلال ثلاث سنوات", "Three-year grant to 800 employees"),
        facts: text(
          "مُنح كل من 800 موظف 200 خيار، قيمته العادلة في تاريخ المنح 7.50 دولارات وسعر ممارسته 1.50 دولار. يشترط البقاء ثلاث سنوات. التقدير النهائي للمغادرين 60 موظفًا، ومارس 740 موظفًا الخيارات. القيمة الاسمية للسهم دولار واحد.",
          "Each of 800 employees receives 200 options, with grant-date fair value $7.50 and exercise price $1.50. Vesting requires three years' service. Ultimately 60 employees leave and the remaining 740 exercise. Par value is $1 per share.",
        ),
        calculations: [
          text(
            "عدد الخيارات المستحقة = 740 × 200 = 148,000.",
            "Vested options = 740 × 200 = 148,000.",
          ),
          text(
            "إجمالي تكلفة الخدمات = 148,000 × 7.50 = 1,110,000 دولار تُثبت عبر فترة الخدمة.",
            "Total service cost = 148,000 × $7.50 = $1,110,000 across the service period.",
          ),
          text(
            "حصيلة الممارسة = 148,000 × 1.50 = 222,000 دولار؛ رأس المال الاسمي = 148,000 دولار؛ العلاوة = 222,000 + 1,110,000 − 148,000 = 1,184,000 دولار.",
            "Exercise proceeds = 148,000 × $1.50 = $222,000; par share capital = $148,000; share premium = $222,000 + $1,110,000 − $148,000 = $1,184,000.",
          ),
        ],
        conclusion: text(
          "المصروف النهائي 1,110,000؛ يتوازن قيد الإصدار بمجموع 1,332,000 على كل جانب.",
          "Final service expense is $1,110,000; the share issue entry balances at $1,332,000 on each side.",
        ),
        journalEntries: [
          {
            label: text(
              "تكلفة الخدمة الإجمالية خلال السنوات الثلاث",
              "Total service cost over three years",
            ),
            debit: text("مصروف موظفين", "Staff expense"),
            credit: text("احتياطي مدفوعات أسهم", "Share-based-payment reserve"),
            amount: text("1,110,000 دولار إجمالًا", "$1,110,000 in total"),
          },
          {
            label: text("الممارسة — قيد مركب", "Exercise — compound entry"),
            debit: text("نقدية 222,000 + احتياطي 1,110,000", "Cash 222,000 + reserve 1,110,000"),
            credit: text(
              "رأس مال 148,000 + علاوة إصدار 1,184,000",
              "Share capital 148,000 + share premium 1,184,000",
            ),
            amount: text("1,332,000 لكل جانب", "1,332,000 each side"),
          },
        ],
        reference: "IFRS 2.14–23",
      },
    ],
  },
  "IAS 21": {
    sections: [
      {
        title: text(
          "المعاملة الأجنبية: ما الذي يعاد ترجمته؟",
          "Foreign-currency transactions: what is retranslated?",
        ),
        explanation: text(
          "ابدأ بتحديد العملة الوظيفية من البيئة الاقتصادية الأساسية، ثم حوّل المعاملة الأجنبية بسعر الصرف الفوري يوم نشوئها. عند الإقفال، أعد ترجمة البنود النقدية غير المسددة بسعر الإقفال؛ يظهر فرق الصرف عادة في الربح أو الخسارة. أما الأصل غير النقدي المقاس بالتكلفة التاريخية فيبقى بسعر تاريخ المعاملة. اختيار مجموعة لعملة عرض مختلفة لا يبدّل عملة الشركة التابعة الوظيفية وحده.",
          "First establish functional currency from the primary economic environment, then translate a foreign-currency transaction at the transaction-date spot rate. At year-end, retranslate outstanding monetary items at the closing rate; the exchange difference normally enters profit or loss. A non-monetary asset measured at historical cost stays at its transaction-date rate. A group's different presentation currency does not by itself change a subsidiary's functional currency.",
        ),
        keyPoints: [
          text(
            "اسأل: هل سيُسدد البند بعدد ثابت أو محدد من وحدات النقد الأجنبي؟",
            "Ask whether the item will be settled in a fixed or determinable number of foreign-currency units.",
          ),
          text(
            "لا تُعد ترجمة المخزون التاريخي لمجرد أن الدائن المقابل له ما زال مفتوحًا.",
            "Do not retranslate historical-cost inventory merely because the related payable remains outstanding.",
          ),
          text(
            "ترجمة قوائم عملية أجنبية إلى عملة عرض المجموعة خطوة منفصلة عن إعادة قياس المعاملة داخل دفاتر التابعة.",
            "Translation of a foreign operation into the group's presentation currency is distinct from remeasurement within the subsidiary's books.",
          ),
        ],
        reference: "IAS 21.8–12, 21–23, 28, 38–39",
      },
    ],
    workedExamples: [
      {
        title: text(
          "دائن تجاري بالوون عند انخفاض قيمة الدولار",
          "Won-denominated payable as the dollar weakens",
        ),
        facts: text(
          "في 1 ديسمبر اشترت منشأة موادًا بمبلغ 300,000 وون على الحساب. عملتها الوظيفية الدولار: الدولار = 20 وون عند الشراء و16 وون عند 31 ديسمبر. لم تُسدد الفاتورة ولم تُستخدم المواد.",
          "On 1 December an entity bought materials on credit for 300,000 won. Its functional currency is the US dollar: US$1 = 20 won at purchase and 16 won at 31 December. The invoice remains unpaid and the materials unused.",
        ),
        calculations: [
          text(
            "التكلفة والدائن عند الشراء = 300,000 ÷ 20 = 15,000 دولار.",
            "Initial inventory and payable = 300,000 ÷ 20 = US$15,000.",
          ),
          text(
            "الدائن النقدي عند الإقفال = 300,000 ÷ 16 = 18,750 دولار.",
            "Closing monetary payable = 300,000 ÷ 16 = US$18,750.",
          ),
          text(
            "خسارة الصرف = 18,750 − 15,000 = 3,750 دولار؛ يظل المخزون التاريخي 15,000 دولار.",
            "Exchange loss = 18,750 − 15,000 = US$3,750; historical-cost inventory remains US$15,000.",
          ),
        ],
        conclusion: text(
          "المركز المالي: مخزون 15,000 ودائنون 18,750؛ الربح أو الخسارة: خسارة صرف 3,750.",
          "Financial position: inventory 15,000 and payable 18,750; profit or loss: exchange loss 3,750.",
        ),
        journalEntries: [
          {
            label: text("عند شراء المواد", "On purchase"),
            debit: text("مخزون مواد", "Materials inventory"),
            credit: text("دائنون تجاريون", "Trade payables"),
            amount: text("15,000 دولار", "US$15,000"),
          },
          {
            label: text("في 31 ديسمبر", "At 31 December"),
            debit: text("خسارة صرف", "Exchange loss"),
            credit: text("دائنون تجاريون", "Trade payables"),
            amount: text("3,750 دولار", "US$3,750"),
          },
        ],
        reference: "IAS 21.21–23, 28",
      },
    ],
  },
  "IAS 33": {
    sections: [
      {
        title: text(
          "الحقوق والتحويل: افصل البسط عن المقام",
          "Rights and convertibles: separate numerator from denominator",
        ),
        explanation: text(
          "ربحية السهم الأساسية تقسم الربح المنسوب إلى حملة الأسهم العادية على المتوسط المرجح لعدد الأسهم. تُستبعد توزيعات الأسهم الممتازة من البسط، لكن توزيعات الأسهم العادية وتحويل الربح إلى الاحتياطيات لا يُخصمان مرة أخرى. إصدار الحقوق بسعر أقل من السوق يتضمن عنصر منحة يستوجب تعديل عدد الأسهم السابق للإصدار بمعامل القيمة العادلة قبل الحق إلى السعر النظري بعد الحق. عند اختبار قرض قابل للتحويل للمخفضة، افترض التحويل من بداية الفترة إن كان قائمًا حينها: أضف الفائدة بعد الضريبة إلى البسط والأسهم الناشئة إلى المقام، ثم ادرج الأثر فقط إن كان مخفِّضًا.",
          "Basic EPS divides profit attributable to ordinary shareholders by weighted-average ordinary shares. Preference dividends reduce the numerator; ordinary dividends and reserve transfers are not deducted again. A below-market rights issue contains a bonus element, requiring the pre-issue shares to be adjusted by the pre-rights fair value divided by theoretical ex-rights price. For a convertible loan, assume conversion from the period's start if outstanding then: add after-tax interest to the numerator and conversion shares to the denominator, including the effect only if dilutive.",
        ),
        keyPoints: [
          text(
            "احسب السعر النظري للحقوق دون تقريب مبكر، ثم زن الأسهم قبل الإصدار وبعده زمنيًا.",
            "Calculate theoretical ex-rights price without premature rounding, then time-weight pre- and post-issue shares.",
          ),
          text(
            "لا تفترض أن كل أداة قابلة للتحويل مخفِّضة؛ قارن الربحية الناتجة بالأساسية.",
            "Do not assume every convertible is dilutive; compare resulting EPS with basic EPS.",
          ),
          text(
            "اعرض الأساسية والمخفضة حتى عندما تتساويان لعدم وجود أسهم محتملة مخفِّضة.",
            "Present basic and diluted EPS even when equal because no dilutive potential shares exist.",
          ),
        ],
        reference: "IAS 33.12–15, 19–27, 31–40, A2",
      },
    ],
    workedExamples: [
      {
        title: text("إصدار حقوق بنسبة سهم لكل خمسة", "One-for-five rights issue"),
        facts: text(
          "الربح العائد للأسهم العادية 1,127,000 دولار، والأسهم العادية 4,120,000 في بداية السنة. أصدرت الشركة في 1 أكتوبر سهمًا لكل خمسة بسعر 1.20 دولار؛ سعر السهم قبل الحق 1.78 دولار. لا توجد أسهم محتملة مخفِّضة أخرى.",
          "Profit attributable to ordinary shares is $1,127,000 and 4,120,000 ordinary shares were outstanding at the year's start. On 1 October the entity offered one new share for every five at $1.20; the pre-rights price was $1.78. No other dilutive potential shares exist.",
        ),
        calculations: [
          text(
            "الأسهم الجديدة = 4,120,000 ÷ 5 = 824,000؛ الأسهم بعد الإصدار = 4,944,000.",
            "New shares = 4,120,000 ÷ 5 = 824,000; post-issue shares = 4,944,000.",
          ),
          text(
            "السعر النظري = (5 × 1.78 + 1.20) ÷ 6 = 1.683333؛ معامل المنحة = 1.78 ÷ 1.683333 ≈ 1.057426.",
            "Theoretical ex-rights price = (5 × 1.78 + 1.20) ÷ 6 = 1.683333; bonus factor = 1.78 ÷ 1.683333 ≈ 1.057426.",
          ),
          text(
            "المتوسط المرجح ≈ 4,120,000 × 1.057426 × 9/12 + 4,944,000 × 3/12 = 4,503,446 سهمًا.",
            "Weighted average ≈ 4,120,000 × 1.057426 × 9/12 + 4,944,000 × 3/12 = 4,503,446 shares.",
          ),
          text(
            "الربحية = 1,127,000 ÷ 4,503,446 ≈ 0.250253 دولار = 25.03 سنتًا للسهم.",
            "EPS = 1,127,000 ÷ 4,503,446 ≈ $0.250253 = 25.03 cents per share.",
          ),
        ],
        conclusion: text(
          "الأساسية والمخفضة 25.03 سنتًا، على افتراض عدم وجود أدوات أخرى قد تخفّض الربحية.",
          "Basic and diluted EPS are 25.03 cents, assuming no other potentially dilutive instruments.",
        ),
        journalEntries: [],
        reference: "IAS 33.19–27, A2",
      },
    ],
  },
  "IFRS 15": {
    sections: [
      {
        title: text(
          "إعادة الشراء: لماذا قد لا يكون البيع إيرادًا؟",
          "Repurchase: why a sale may not be revenue",
        ),
        explanation: text(
          "انظر إلى حق العميل في توجيه استخدام الأصل والحصول على منافعه، لا إلى عنوان عقد البيع. إذا التزم البائع بإعادة الشراء أو احتفظ بحق شراء الأصل نفسه، فلا يحصل العميل عادة على السيطرة. عندما لا يقل سعر إعادة الشراء عن سعر البيع الأصلي تعالج المتحصلات تمويلًا: يبقى الأصل في دفاتر البائع ويثبت التزام مالي وتكلفة تمويل. أما إذا كان السعر أقل، فتُفحص معالجة الإيجار وفق IFRS 16. خيار إعادة الشراء الذي يملكه العميل يحتاج تحليلًا منفصلًا للحافز الاقتصادي وسعر السوق المتوقع، ولا يُعامل آليًا كخيار البائع.",
          "Look beyond the sale label to the customer's ability to direct use of and obtain benefits from the asset. If the seller is obliged or has the right to repurchase the same asset, the customer generally does not obtain control. A repurchase price at least equal to the original selling price makes the proceeds a financing arrangement: the seller retains the asset and recognises a financial liability and finance cost. A lower price generally leads to lease accounting under IFRS 16. A customer-held put option requires a separate analysis of economic incentive and expected market value; it is not automatically treated like the seller's option.",
        ),
        keyPoints: [
          text(
            "تحقق من صاحب الخيار: البائع أم المشتري، ومن سعر الممارسة مقارنة بسعر البيع والقيمة السوقية المتوقعة.",
            "Identify who holds the option and compare the exercise price with both the selling price and expected market value.",
          ),
          text(
            "في ترتيب التمويل لا يُشطب الأصل ولا تُثبت إيرادات بيع عند استلام النقد.",
            "Under a financing arrangement, the asset remains recognised and cash receipt is not sale revenue.",
          ),
          text(
            "راجع ما يحدث إذا انتهى خيار البائع دون ممارسة؛ عندئذ يعاد تقييم الاعتراف بالإيراد.",
            "If the seller's option expires unexercised, reassess revenue recognition at that point.",
          ),
        ],
        reference: "IFRS 15.B64–B76",
      },
      {
        title: text(
          "الأصيل والوكيل: الإيراد الإجمالي أم العمولة؟",
          "Principal or agent: gross revenue or commission?",
        ),
        explanation: text(
          "قبل تحديد رقم الإيراد، حدّد السلعة أو الخدمة المحددة التي وُعد بها العميل واسأل هل سيطرت عليها المنشأة قبل نقلها. الأصيل يثبت المقابل الإجمالي الذي يتوقع استحقاقه مقابل أدائه؛ الوكيل يثبت الرسم أو العمولة مقابل ترتيب تقديم طرف آخر للسلعة أو الخدمة. المسؤولية الأساسية عن الوفاء، ومخاطر المخزون، وحرية التسعير مؤشرات مساعدة وليست اختبارات مستقلة أو بديلًا عن اختبار السيطرة.",
          "Before measuring revenue, identify the specified good or service and ask whether the entity controls it before transfer. A principal recognises the gross consideration to which it expects to be entitled for its performance; an agent recognises the fee or commission for arranging another party's provision. Primary fulfilment responsibility, inventory risk and pricing discretion are supporting indicators, not independent substitutes for the control assessment.",
        ),
        keyPoints: [
          text(
            "المنصة التي ترتب البيع فقط لا تعرض قيمة بضاعة المورد كإيرادها تلقائيًا.",
            "A platform that merely arranges a sale does not automatically report the supplier's gross sales as its own revenue.",
          ),
          text(
            "وثّق الحكم لكل سلعة أو خدمة محددة في العقد؛ قد تختلف النتيجة داخل العقد الواحد.",
            "Document the conclusion for each specified good or service; outcomes can differ within one contract.",
          ),
        ],
        reference: "IFRS 15.B34–B38",
      },
      {
        title: text(
          "الأمانة التجارية والفاتورة مع الاحتفاظ بالبضاعة",
          "Consignment and bill-and-hold",
        ),
        explanation: text(
          "تسليم البضاعة إلى موزع لا يساوي انتقال السيطرة عندما يستطيع المورد استردادها أو نقلها إلى موزع آخر، ولا يلتزم الموزع بسداد ثمنها دون شرط؛ عندئذ تبقى ضمن مخزون المورد إلى وقوع البيع النهائي أو انتقال السيطرة فعلًا. وفي ترتيب الفاتورة مع الاحتفاظ بالبضاعة قد تنتقل السيطرة قبل التسليم المادي، لكن يلزم سبب جوهري للترتيب، وتحديد البضاعة منفصلة باعتبارها للعميل، وجاهزيتها للنقل، وعدم قدرة البائع على استخدامها أو تحويلها لعميل آخر. كما تُقيّم خدمة الحفظ المتبقية بوصفها التزام أداء محتملًا.",
          "Delivery to a dealer is not a transfer of control when the supplier can recall or redirect the goods and the dealer has no unconditional payment obligation; inventory remains with the supplier until the ultimate sale or another genuine transfer of control. In a bill-and-hold arrangement, control can pass before physical delivery only if the arrangement has a substantive reason, the goods are separately identified for the customer, are ready for transfer, and cannot be used or redirected by the seller. Any remaining custodial service is also assessed as a possible performance obligation.",
        ),
        keyPoints: [
          text(
            "الفاتورة أو الحيازة المادية وحدهما لا يحسمان توقيت الإيراد.",
            "An invoice or physical possession alone does not settle the revenue timing.",
          ),
          text(
            "مخزون الأمانة يظل لدى المورد إذا لم تنتقل السيطرة إلى الموزع.",
            "Consigned inventory remains with the supplier if the dealer has not obtained control.",
          ),
        ],
        reference: "IFRS 15.B77–B82",
      },
    ],
    workedExamples: [
      {
        title: text(
          "تحصيل مليون مع خيار إعادة الشراء",
          "One million received with a repurchase call option",
        ),
        facts: text(
          "في 1 يناير نقلت منشأة أصلًا إلى عميل مقابل 1,000,000، واحتفظت بخيار إعادة شراء الأصل نفسه في نهاية السنة مقابل 1,100,000. يفترض المثال ممارسة الخيار وعدم وجود عناصر تعاقدية أخرى.",
          "On 1 January an entity transfers an asset to a customer for 1,000,000 but retains an option to repurchase that same asset at year-end for 1,100,000. Assume the option is exercised and there are no other contractual components.",
        ),
        calculations: [
          text(
            "سعر إعادة الشراء أعلى من سعر التحصيل، والعميل مقيد بخيار البائع؛ لا يتحقق بيع لأغراض الإيراد.",
            "The repurchase price exceeds the proceeds and the seller's option constrains the customer; no revenue sale occurs.",
          ),
          text(
            "فرق التمويل خلال السنة = 1,100,000 − 1,000,000 = 100,000.",
            "Finance cost for the year = 1,100,000 − 1,000,000 = 100,000.",
          ),
          text(
            "يبقى الأصل في الدفاتر ويستمر قياسه وفق المعيار الذي كان ينطبق عليه قبل الترتيب.",
            "The asset remains recognised and continues to be measured under its pre-existing applicable Standard.",
          ),
        ],
        conclusion: text(
          "المتحصلات التزام تمويلي، لا إيراد بقيمة مليون. عند إعادة الشراء يُسوى الالتزام البالغ 1,100,000.",
          "The proceeds are a financing liability, not revenue of one million. Repurchase settles the 1,100,000 liability.",
        ),
        journalEntries: [
          {
            label: text("عند التحصيل", "On receipt"),
            debit: text("النقدية", "Cash"),
            credit: text("التزام تمويلي", "Financing liability"),
            amount: text("1,000,000", "1,000,000"),
          },
          {
            label: text("إثبات تكلفة التمويل", "Accrue finance cost"),
            debit: text("تكلفة تمويل", "Finance cost"),
            credit: text("التزام تمويلي", "Financing liability"),
            amount: text("100,000", "100,000"),
          },
          {
            label: text("عند ممارسة الخيار", "On exercise"),
            debit: text("التزام تمويلي", "Financing liability"),
            credit: text("النقدية", "Cash"),
            amount: text("1,100,000", "1,100,000"),
          },
        ],
        reference: "IFRS 15.B64–B68",
      },
      {
        title: text("اشتراك مجلات مدفوع مقدمًا", "Prepaid magazine subscription"),
        facts: text(
          "قبض ناشر 240,000 مقدمًا مقابل 24 عددًا شهريًا متماثلًا من مجلة. عند نهاية السنة أرسل ستة أعداد فقط، ولا توجد التزامات أخرى في العقد.",
          "A publisher receives 240,000 in advance for 24 equivalent monthly magazine issues. By year-end it has delivered only six issues and there are no other contractual promises.",
        ),
        calculations: [
          text(
            "نصيب العدد الواحد = 240,000 ÷ 24 = 10,000.",
            "Allocation per issue = 240,000 ÷ 24 = 10,000.",
          ),
          text(
            "الإيراد المتحقق بعد تسليم ستة أعداد = 6 × 10,000 = 60,000.",
            "Revenue on delivering six issues = 6 × 10,000 = 60,000.",
          ),
          text(
            "التزام العقد للأعداد الثمانية عشر الباقية = 240,000 − 60,000 = 180,000.",
            "Contract liability for the remaining 18 issues = 240,000 − 60,000 = 180,000.",
          ),
        ],
        conclusion: text(
          "لا يتحول المقبوض مقدمًا كله إلى إيراد عند التحصيل؛ يعترف فقط بقيمة الأعداد المسلّمة.",
          "Advance cash does not all become revenue on receipt; only the delivered issues are recognised.",
        ),
        journalEntries: [
          {
            label: text("عند قبض الاشتراك", "On subscription receipt"),
            debit: text("النقدية", "Cash"),
            credit: text("التزام عقد", "Contract liability"),
            amount: text("240,000", "240,000"),
          },
          {
            label: text("بعد إرسال ستة أعداد", "After six issues"),
            debit: text("التزام عقد", "Contract liability"),
            credit: text("إيراد الاشتراكات", "Subscription revenue"),
            amount: text("60,000", "60,000"),
          },
        ],
        reference: "IFRS 15.22–30, 31–38, 106",
      },
    ],
  },
  "IFRS 16": {
    sections: [
      {
        title: text(
          "الدفعة المقدمة ليست جزءًا من التزام الإيجار غير المدفوع",
          "An advance payment is not an unpaid lease liability",
        ),
        explanation: text(
          "في تاريخ بدء الإيجار يقاس الالتزام بالقيمة الحالية للمدفوعات التي لم تُسدّد بعد. المدفوع عند البدء يزيد تكلفة أصل حق الاستخدام، لكنه لا يبقى ضمن الالتزام. لاحقًا تزيد الفائدة الالتزام وتخفضه الدفعات، بينما يُستهلك حق الاستخدام خلال المدة المناسبة. عند عدم انتقال الملكية أو توقع ممارسة خيار شراء، تكون مدة الإهلاك الأقصر من العمر النافع ومدة الإيجار.",
          "At commencement the liability is the present value of payments not yet made. A payment made at commencement increases the right-of-use asset but is not left in the liability. Interest subsequently increases the liability and payments reduce it, while the right-of-use asset is depreciated over the appropriate period. If ownership is not transferred and a purchase option is not reasonably certain, that period is the shorter of useful life and lease term.",
        ),
        keyPoints: [
          text(
            "ميّز تاريخ الدفع: مقدمًا عند البدء أم في نهاية كل فترة.",
            "Distinguish payments at commencement from payments at each period-end.",
          ),
          text(
            "لا تخلط إهلاك حق الاستخدام مع فائدة التزام الإيجار.",
            "Do not combine right-of-use depreciation with lease-liability interest.",
          ),
        ],
        reference: "IFRS 16.23–29, 36–38",
      },
      {
        title: text(
          "البيع وإعادة الاستئجار: الربح عن الحق المنقول فقط",
          "Sale and leaseback: gain only on the right transferred",
        ),
        explanation: text(
          "اختبر أولًا بموجب IFRS 15 هل انتقلت السيطرة بحيث يعد نقل الأصل بيعًا. إذا لم يتحقق بيع، يبقى الأصل في دفاتر البائع-المستأجر ويعالج النقد التزامًا ماليًا. وإذا تحقق بيع بالقيمة العادلة وبشروط سوقية، يقاس أصل حق الاستخدام بنسبة القيمة الدفترية السابقة التي تتعلق بالحق المحتفظ به؛ لا يُثبت من مكسب البيع إلا الجزء المتعلق بالحق المنقول للمشتري-المؤجر. تُراجع كذلك أي فروق عن سعر السوق ومدفوعات الإيجار غير السوقية، ومتطلبات القياس اللاحق لالتزام إعادة الاستئجار.",
          "First apply IFRS 15 to determine whether control transferred and the transfer is a sale. If not, the seller-lessee retains the asset and treats the proceeds as a financial liability. For a sale at fair value on market terms, the right-of-use asset is the proportion of the former carrying amount relating to the right retained; only the gain on the right transferred to the buyer-lessor is recognised. Off-market sale prices or lease payments and the subsequent measurement of the leaseback liability also need assessment.",
        ),
        keyPoints: [
          text(
            "لا تثبت كامل مكسب بيع الأصل عندما يبقى للبائع حق استخدامه.",
            "Do not recognise the entire disposal gain when the seller retains a right to use the asset.",
          ),
          text(
            "وجود مبلغ أعلى من القيمة العادلة قد يعني تمويلًا إضافيًا لا ربحًا إضافيًا.",
            "Proceeds above fair value may represent additional financing, not additional gain.",
          ),
        ],
        reference: "IFRS 16.98–103, 102A; IFRS 15.31–38",
      },
    ],
    workedExamples: [
      {
        title: text("إيجار بست دفعات سنوية مقدمًا", "Lease with six annual payments in advance"),
        facts: text(
          "مدة الإيجار ست سنوات، والمدفوعات 18,420 في بداية كل سنة. دُفعت الأولى عند البدء، والقيمة الحالية للخمس غير المدفوعة 65,586 بمعدل 12.5%. العمر النافع للمستأجر خمس سنوات ولا تنتقل ملكية الأصل.",
          "The lease runs for six years with payments of 18,420 at the start of each year. The first is paid at commencement; the present value of the five unpaid payments is 65,586 at 12.5%. The asset's useful life to the lessee is five years and ownership does not transfer.",
        ),
        calculations: [
          text(
            "التزام الإيجار عند البدء = 65,586؛ أصل حق الاستخدام = 65,586 + 18,420 = 84,006.",
            "Opening liability = 65,586; right-of-use asset = 65,586 + 18,420 = 84,006.",
          ),
          text(
            "إهلاك السنة الأولى = 84,006 ÷ 5 = 16,801 تقريبًا؛ رصيد الأصل = 67,205.",
            "First-year depreciation = 84,006 ÷ 5 ≈ 16,801; asset carrying amount ≈ 67,205.",
          ),
          text(
            "فائدة السنة الأولى = 65,586 × 12.5% ≈ 8,198؛ الالتزام آخر السنة قبل دفعة السنة التالية ≈ 73,784.",
            "First-year interest = 65,586 × 12.5% ≈ 8,198; year-end liability before the next advance payment ≈ 73,784.",
          ),
        ],
        conclusion: text(
          "يظهر حق الاستخدام 67,205 والتزام الإيجار 73,784 تقريبًا بنهاية السنة الأولى؛ ثم تخفضه الدفعة التالية 18,420 عند دفعها.",
          "At first year-end, the right-of-use asset is about 67,205 and the liability about 73,784; the next 18,420 payment reduces that liability when made.",
        ),
        journalEntries: [
          {
            label: text("بدء العقد — قيد مركب", "Commencement — compound entry"),
            debit: text("أصل حق الاستخدام 84,006", "Right-of-use asset 84,006"),
            credit: text(
              "التزام إيجار 65,586 + نقدية 18,420",
              "Lease liability 65,586 + cash 18,420",
            ),
            amount: text("84,006 لكل جانب", "84,006 each side"),
          },
          {
            label: text("فائدة السنة الأولى تقريبًا", "First-year interest, rounded"),
            debit: text("تكلفة تمويل", "Finance cost"),
            credit: text("التزام إيجار", "Lease liability"),
            amount: text("8,198", "8,198"),
          },
          {
            label: text("إهلاك السنة الأولى تقريبًا", "First-year depreciation, rounded"),
            debit: text("مصروف إهلاك", "Depreciation expense"),
            credit: text("مجمع إهلاك حق الاستخدام", "Accumulated ROU depreciation"),
            amount: text("16,801", "16,801"),
          },
        ],
        reference: "IFRS 16.23–29, 36–38",
      },
      {
        title: text(
          "بيع آلة وإعادة استئجارها بالقيمة العادلة",
          "Sale of a machine followed by a market leaseback",
        ),
        facts: text(
          "تبلغ القيمة الدفترية لآلة 500,000. باعتها المنشأة بالقيمة العادلة 740,000 ثم استأجرتها فورًا لخمس سنوات، والقيمة الحالية لمدفوعات الإيجار 700,000. يفترض المثال تحقق البيع وفق IFRS 15 وأن السعر والمدفوعات بشروط سوقية.",
          "A machine has a carrying amount of 500,000. The entity sells it at fair value of 740,000 and immediately leases it back for five years; the present value of lease payments is 700,000. Assume the transfer qualifies as a sale under IFRS 15 and both price and payments are at market terms.",
        ),
        calculations: [
          text(
            "نسبة حق الاستخدام المحتفظ به = 700,000 ÷ 740,000 = 94.5946% تقريبًا.",
            "Proportion of right retained = 700,000 ÷ 740,000 ≈ 94.5946%.",
          ),
          text(
            "أصل حق الاستخدام = 500,000 × 700,000 ÷ 740,000 = 472,973 تقريبًا.",
            "Right-of-use asset = 500,000 × 700,000 ÷ 740,000 ≈ 472,973.",
          ),
          text(
            "المكسب الكلي النظري = 740,000 − 500,000 = 240,000؛ المكسب المتعلق بالحق المحتفظ به = 240,000 × 700,000 ÷ 740,000 ≈ 227,027.",
            "Theoretical total gain = 740,000 − 500,000 = 240,000; gain on the retained right = 240,000 × 700,000 ÷ 740,000 ≈ 227,027.",
          ),
          text(
            "المكسب المعترف به عن الحق المنقول فقط = 240,000 − 227,027 = 12,973.",
            "Recognised gain on the right transferred only = 240,000 − 227,027 = 12,973.",
          ),
        ],
        conclusion: text(
          "يثبت أصل حق استخدام 472,973 والتزام إعادة استئجار 700,000 ومكسب بيع 12,973 فقط، لا كامل المكسب النظري 240,000.",
          "Recognise a 472,973 right-of-use asset, 700,000 leaseback liability and only 12,973 gain, rather than the theoretical full gain of 240,000.",
        ),
        journalEntries: [
          {
            label: text(
              "عند النقل وإعادة الاستئجار — قيد مركب",
              "At transfer and leaseback — compound entry",
            ),
            debit: text(
              "نقدية 740,000 + حق استخدام 472,973",
              "Cash 740,000 + right-of-use asset 472,973",
            ),
            credit: text(
              "آلة 500,000 + التزام إيجار 700,000 + مكسب 12,973",
              "Machine 500,000 + lease liability 700,000 + gain 12,973",
            ),
            amount: text("1,212,973 لكل جانب", "1,212,973 each side"),
          },
        ],
        reference: "IFRS 16.98–102; IFRS 15.31–38",
      },
    ],
  },
};
