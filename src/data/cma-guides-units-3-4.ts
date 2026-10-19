import type { CmaStudyUnitCase, CmaTopicGuide } from "@/data/cma-guides";

/** Original teaching material based on the user's Gleim 2024 Part 1 SU 3 and SU 4. */
export const CMA_TOPIC_GUIDES_3_4: Record<string, CmaTopicGuide> = {
  "su3-equity-securities": {
    topicId: "su3-equity-securities",
    scope: {
      ar: "الوحدة 3، 3.1: استثمارات الأسهم غير الخاضعة لحقوق الملكية أو التوحيد، وإعادة القياس والتوزيعات.",
      en: "SU 3 §3.1: equity holdings outside the equity method and consolidation, fair-value remeasurement and dividends.",
    },
    concepts: {
      ar: "ابدأ بتقييم السيطرة أو النفوذ المهم قبل اختيار الطريقة. بالنسبة إلى حيازة أسهم غير مسيطرة لا ينطبق عليها منهج حقوق الملكية، تُقاس الأسهم عمومًا بالقيمة العادلة وتُثبت تغيراتها في صافي الربح وفق US GAAP، سواء تحققت بالبيع أم لم تتحقق. تظهر توزيعات الأرباح عادةً كإيراد مستقل عندما ينشأ الحق فيها. لا تنقل ربح تغير أسعار الأسهم إلى OCI لمجرد أنها محتفظ بها مدة طويلة؛ تصنيف AFS في هذا السياق يتعلق بأدوات الدين.",
      en: "First assess control and significant influence. An equity holding outside those models is generally remeasured to fair value through net income under U.S. GAAP, including unrealized price changes. Dividends normally create separate income when the right arises. Do not send ordinary equity-security price changes to OCI because management intends a long holding period; AFS in this context is a debt-security category.",
    },
    workflow: {
      ar: "اختبر نسبة الملكية وحقوق التأثير الفعلية؛ سجل الشراء بالتكلفة؛ أعد القياس إلى السعر في تاريخ التقرير؛ سجل الفرق في الربح؛ افصل دخل التوزيعات عن ربح إعادة القياس.",
      en: "Assess ownership and substantive influence; recognize cost at acquisition; remeasure to reporting-date fair value; report the change in earnings; distinguish dividends from holding gains.",
    },
    pitfalls: {
      ar: "نسبة 20% قرينة وليست اختبارًا قاطعًا للنفوذ. لا تعيد حساب ربح السنة الثانية انطلاقًا من تكلفة الشراء إذا تغيرت القيمة في نهاية السنة الأولى. لا تخلط بين أسهم عادية وسهم مفضل واجب الاسترداد الذي قد يعد أداة دين.",
      en: "A 20% interest is a presumption, not a conclusive test. A year-two holding gain starts from the previous carrying amount, not the original purchase price. Mandatorily redeemable preferred shares may be debt securities, unlike ordinary equity.",
    },
    practicalCase: {
      titleAr: "تغير القيمة على فترتين",
      titleEn: "Two reporting dates",
      scenarioAr:
        "اشترت منشأة 300 سهم بسعر 40 للسهم دون نفوذ مهم. كان السعر آخر السنة الأولى 36، وآخر السنة الثانية 45، ولم تبع الأسهم. احسب ربح/خسارة التقييم في كل سنة.",
      scenarioEn:
        "An investor buys 300 shares at 40 each with no significant influence. The year-one price is 36 and the year-two price is 45; no shares are sold. Calculate each year's remeasurement effect.",
      solutionAr:
        "التكلفة 12,000؛ قيمة السنة الأولى 10,800 وخسارتها 1,200 في الربح. قيمة السنة الثانية 13,500، وربح السنة الثانية 2,700 في الربح؛ لا يُعاد الاعتراف بخسارة السنة الأولى.",
      solutionEn:
        "Cost is 12,000. Year-one fair value is 10,800 and loss is 1,200 in earnings. Year-two fair value is 13,500 and gain from the prior carrying amount is 2,700 in earnings.",
    },
  },
  "su3-equity-method": {
    topicId: "su3-equity-method",
    scope: {
      ar: "الوحدة 3، 3.2: النفوذ المهم وحركة رصيد الاستثمار وحصة الأرباح والتوزيعات.",
      en: "SU 3 §3.2: significant influence, investment rollforward, share of results and distributions.",
    },
    concepts: {
      ar: "عند النفوذ المهم دون سيطرة تُسجل الحيازة أولًا بالتكلفة. بعد ذلك تزيد القيمة الدفترية بنصيب المستثمر من صافي ربح الشركة الزميلة وتقل بنصيبه من الخسارة والتوزيعات. الأرباح الموزعة استرداد لجزء من رصيد الاستثمار، وليست دخل توزيعات جديدًا؛ وإلا ازدوج الدخل. إذا تم الشراء أثناء السنة احتسب فقط حصة نتائج ما بعد تاريخ الاقتناء. مؤشر ملكية 20%–50% لا يلغي ضرورة الحكم على النفوذ الفعلي.",
      en: "With significant influence but no control, record initial cost; increase the investment for the investor's share of investee profit, decrease it for losses and distributions. Dividends recover part of the carrying amount rather than becoming another income stream. For a midyear purchase recognize only post-acquisition results. The 20%–50% presumption still requires considering actual influence.",
    },
    workflow: {
      ar: "حدد تاريخ اكتساب النفوذ؛ احسب نصيب الربح عن فترة الحيازة؛ اطرح نصيب التوزيعات؛ سوِّ رصيد أول وآخر الفترة؛ راجع مؤشرات انخفاض القيمة وفق الإطار المعمول به.",
      en: "Identify the influence date; compute the share of post-acquisition income; subtract distributions; reconcile beginning and ending investment; assess impairment when indicators arise.",
    },
    pitfalls: {
      ar: "لا تسجل كامل ربح الشركة المستثمر فيها، ولا تعامل التوزيعات كدخل إضافي، ولا تطبق التوحيد الكامل لمجرد بلوغ 30%. اختيار القيمة العادلة خارج نطاق هذا التمهيد.",
      en: "Do not book all of the investee's profit, treat distributions as additional earnings, or consolidate solely because of a 30% stake. A fair-value election is outside this introductory coverage.",
    },
    practicalCase: {
      titleAr: "حركة استثمار في زميلة",
      titleEn: "Associate rollforward",
      scenarioAr:
        "في 1 يوليو استثمرت شركة 240,000 مقابل 30% من شركة زميلة. حققت الزميلة 80,000 في السنة بالتساوي شهريًا، وأعلنت توزيعات 20,000 بعد الاستحواذ. احسب دخل المستثمر والرصيد الختامي.",
      scenarioEn:
        "On July 1 an investor pays 240,000 for 30% of an associate. The associate earns 80,000 evenly through the year and declares 20,000 dividends after purchase. Find investor income and ending carrying amount.",
      solutionAr:
        "الدخل =80,000×6/12×30%=12,000. حصة التوزيعات 6,000 تخفض الاستثمار؛ الرصيد =240,000+12,000−6,000=246,000.",
      solutionEn:
        "Equity income =80,000×6/12×30%=12,000. Dividend share 6,000 reduces the investment, so carrying amount is 246,000.",
    },
  },
  "su3-debt-securities": {
    topicId: "su3-debt-securities",
    scope: {
      ar: "الوحدة 3، 3.3: HTM وAFS والمتاجرة، وعرض القيمة والفوائد والتغيرات غير المحققة.",
      en: "SU 3 §3.3: HTM, AFS and trading classifications, measurement, interest and unrealized changes.",
    },
    concepts: {
      ar: "يُستخدم HTM لأداة دين مع نية وقدرة إيجابيتين للاحتفاظ حتى الاستحقاق ويُعرض بالتكلفة المطفأة. دين المتاجرة بالقيمة العادلة وتغيرها في الربح. دين AFS بالقيمة العادلة وتغير السعر غير المرتبط بخسارة ائتمانية في OCI؛ يُعرض دخل الفائدة الفعلي في الربح. طبق المعالجة الحالية للخسائر الائتمانية: خسارة ائتمان HTM تُقدر بمخصص وفق ASC 326، وخسارة ائتمان AFS بمخصص ضمن حدود انخفاض القيمة العادلة؛ لا تُعمم وصفة قديمة بأن كل هبوط دائم يُشطب نهائيًا. السعر السوقي لا يغير مباشرة تكلفة HTM المطفأة بسبب تقلب الفائدة وحده.",
      en: "HTM debt requires positive intent and ability to hold to maturity and is measured at amortized cost. Trading debt is marked to fair value with changes in earnings. AFS debt is at fair value; noncredit holding changes generally enter OCI while effective interest enters earnings. Under current ASC 326, expected credit losses for HTM and credit-related declines on AFS use allowances under their respective rules. Do not apply an obsolete blanket permanent write-down rule to every AFS price decline. A market-rate movement alone does not mark HTM amortized cost to market.",
    },
    workflow: {
      ar: "صنف بناءً على النية والقدرة عند الشراء وراجعها؛ احسب الفائدة على أساس التكلفة المطفأة؛ حدد القيمة العادلة المطلوبة للمتاجرة/AFS؛ ميّز أثر السوق والائتمان؛ راجع العرض في الربح وOCI والمخصص.",
      en: "Classify from intent and ability and reassess; compute interest on amortized cost; obtain fair value for trading/AFS; separate market and credit effects; reconcile earnings, OCI and any credit allowance.",
    },
    pitfalls: {
      ar: "AFS يخص الدين هنا، لا الأسهم العادية. لا تعترف بتغير قيمة HTM لمجرد تغير سعر الفائدة. تقييم خسارة الائتمان مختلف عن تغير السعر بسبب الفائدة.",
      en: "AFS here applies to debt, not ordinary shares. Do not mark HTM to market merely for interest-rate moves. Credit losses require a different analysis from rate-driven value changes.",
    },
    practicalCase: {
      titleAr: "أثر تغير السعر حسب التصنيف",
      titleEn: "Same bond, different classification",
      scenarioAr:
        "تكلفة مطفأة لسند 100,000 وقيمته العادلة في نهاية السنة 94,000 بسبب ارتفاع أسعار الفائدة وحده، بلا خسارة ائتمانية. قارن أثر تغير السعر في HTM وAFS والمتاجرة.",
      scenarioEn:
        "A bond has amortized cost 100,000 and year-end fair value 94,000 solely because rates rose, with no credit loss. Compare HTM, AFS and trading price-change treatment.",
      solutionAr:
        "HTM يبقى عند 100,000 قبل أي تسويات فائدة؛ AFS يُعرض 94,000 وخسارة غير محققة 6,000 في OCI؛ المتاجرة 94,000 وخسارة 6,000 في الربح. الفائدة تسجل منفصلة.",
      solutionEn:
        "HTM remains at amortized cost 100,000 before interest adjustments; AFS reports 94,000 and a 6,000 noncredit loss in OCI; trading reports 94,000 and 6,000 in earnings. Interest is separate.",
    },
  },
  "su3-ppe": {
    topicId: "su3-ppe",
    scope: {
      ar: "الوحدة 3، 3.4: تكلفة الأصل والإنفاق اللاحق والقيمة الدفترية وأربع طرق للإهلاك.",
      en: "SU 3 §3.4: initial cost, subsequent outlays, carrying value and four depreciation approaches.",
    },
    concepts: {
      ar: "ترسمل تكلفة الاقتناء والرسوم غير القابلة للاسترداد والنقل والتركيب والاختبارات اللازمة لإعداد الأصل للاستخدام، مع مراعاة قواعد رسملة تكلفة الاقتراض المؤهلة. الصيانة المعتادة مصروف، أما التحسين الذي يزيد المنفعة أو العمر فيرسمل. القيمة الدفترية = التكلفة ناقص مجمع الإهلاك وخسائر انخفاض القيمة. القسط الثابت يوزع القاعدة القابلة للإهلاك بانتظام؛ طريقة الوحدات تتبع الإنتاج؛ الرصيد المتناقص يطبق معدلًا على الرصيد أول الفترة دون النزول عن الخردة؛ مجموع أرقام السنوات يطبق كسر السنوات المتبقية على القاعدة القابلة للإهلاك. الأرض لا تُهلك.",
      en: "Capitalize purchase price, nonrecoverable taxes and direct delivery, installation and testing needed for use, including qualifying borrowing costs where relevant. Ordinary repairs are expensed; betterments that add benefits are capitalized. Carrying value is cost less accumulated depreciation and impairment. Straight-line spreads the depreciable base evenly, units-of-output tracks activity, declining balance applies a rate to opening book value without crossing residual value, and SYD uses remaining years over the years sum on a constant base. Land is not depreciated.",
    },
    workflow: {
      ar: "حدد تكلفة الأصل وحدها واستبعد الأرض؛ قدر الخردة والعمر أو الطاقة؛ اختر الطريقة المناسبة لنمط الاستخدام؛ احسب كسور السنة والرصيد الختامي؛ افصل تكاليف الصيانة عن التحسين.",
      en: "Separate land and asset cost; estimate residual value and life/output; choose a usage-matching method; apply partial-year conventions and reconcile carrying amount; classify maintenance versus improvements.",
    },
    pitfalls: {
      ar: "لا تضف تمهيد الأرض إلى تكلفة المبنى تلقائيًا. لا تخصم الخردة مرتين في المتناقص المزدوج؛ تحد فقط الإهلاك النهائي. الإهلاك ليس مقياس انخفاض القيمة السوقية السنوي.",
      en: "Land preparation is not automatically building cost. Do not subtract residual value twice in double-declining depreciation; it acts as a floor. Depreciation is not the annual market-value change.",
    },
    practicalCase: {
      titleAr: "مقارنة طرق الإهلاك",
      titleEn: "Compare depreciation methods",
      scenarioAr:
        "آلة كلفتها 260,000 وخردتها 20,000 وعمرها 4 سنوات وطاقة إنتاجها 80,000 وحدة، أنتجت 30,000 في السنة الأولى. احسب إهلاك السنة الأولى بالقسط الثابت والإنتاج والمتناقص المزدوج ومجموع أرقام السنوات.",
      scenarioEn:
        "A machine costs 260,000, has 20,000 residual value, four-year life and 80,000 expected units; it produces 30,000 units in year one. Find first-year straight-line, output, double-declining and SYD expense.",
      solutionAr:
        "القاعدة 240,000؛ الثابت 60,000؛ الإنتاج 240,000×30/80=90,000؛ المتناقص 260,000×50%=130,000؛ مجموع السنوات 240,000×4/10=96,000.",
      solutionEn:
        "Base is 240,000; straight-line 60,000; output 240,000×30/80=90,000; DDB 260,000×50%=130,000; SYD 240,000×4/10=96,000.",
    },
  },
  "su3-intangibles": {
    topicId: "su3-intangibles",
    scope: {
      ar: "الوحدة 3، 3.5: التكاليف القابلة للرسملة، البحث والتطوير، العمر النافع، البراءة والشهرة.",
      en: "SU 3 §3.5: capitalizable intangible costs, R&D, finite lives, patents and goodwill.",
    },
    concepts: {
      ar: "يثبت الأصل غير الملموس المشترى بثمنه وتكاليفه المباشرة. وفق US GAAP تُحمّل مصروفات البحث والتطوير الداخلية عمومًا عند تكبدها، وتُرسمل تكاليف قانونية محددة لإنشاء البراءة أو الدفاع الناجح عنها عند انطباق الشروط. الأصل ذو العمر المحدد يُطفأ على فترة منفعته؛ البراءة لا تتجاوز الأقصر من العمر الاقتصادي والقانوني المتبقي. الأصل ذو العمر غير المحدد لا يُطفأ بل يُراجع للانخفاض. لا تنشأ شهرة مثبتة إلا في تجميع الأعمال ولا تثبت السمعة المتولدة داخليًا؛ تفصيل انخفاض القيمة في الوحدة الخامسة.",
      en: "Purchased intangibles include acquisition price and directly attributable costs. U.S. GAAP generally expenses internal R&D as incurred, while eligible direct patent legal/registration costs and successful defense may be capitalized. Finite-life intangibles are amortized over their beneficial life; patents use no longer than the shorter of economic and remaining legal life. Indefinite-life assets are not amortized but assessed for impairment. Goodwill is recognized in a business combination, not from internally built reputation; detailed impairment is in Study Unit 5.",
    },
    workflow: {
      ar: "افصل شراء أصل معروف عن بحث داخلي وتكاليف قانونية؛ حدد العمر القانوني والاقتصادي؛ احسب القاعدة والإطفاء إن كان العمر محددًا؛ راقب مؤشرات انخفاض القيمة دون افتراض إطفاء للشهرة.",
      en: "Separate acquired rights, internal research and qualifying legal costs; estimate economic and legal life; amortize finite-life balances; evaluate impairment indicators without amortizing goodwill.",
    },
    pitfalls: {
      ar: "الشهرة المتولدة داخليًا ليست أصلًا مثبتًا. العمر غير المحدد لا يعني غياب فحص الانخفاض. لا تختَر مدة البراءة القانونية الكاملة إذا كانت المنفعة الاقتصادية أقصر.",
      en: "Internally generated goodwill is not recorded. Indefinite life does not remove impairment testing. Patent legal life cannot override a shorter economic life.",
    },
    practicalCase: {
      titleAr: "تكلفة براءة وإطفاؤها",
      titleEn: "Patent cost and amortization",
      scenarioAr:
        "أنفقت شركة 70,000 على البحث و90,000 على تطوير براءة داخلية، ودفعت 10,000 رسوم تسجيل و5,000 أتعابًا قانونية مباشرة. من تاريخ الجاهزية بقي للبراءة عمر قانوني 12 سنة وعمر اقتصادي 5 سنوات. ما أصل البراءة والإطفاء السنوي وفق القسط الثابت؟",
      scenarioEn:
        "A company spends 70,000 on research, 90,000 developing an internal patent, 10,000 on registration and 5,000 on directly related legal work. At readiness its remaining legal life is 12 years and economic life five. Find U.S. GAAP patent cost and annual straight-line amortization.",
      solutionAr:
        "مصروف البحث والتطوير 160,000؛ أصل البراءة 10,000+5,000=15,000؛ الإطفاء 15,000/5=3,000 سنويًا، بافتراض عدم وجود خردة.",
      solutionEn:
        "Expense R&D 160,000; capitalize registration and direct legal costs of 15,000; amortize 15,000/5=3,000 annually assuming zero residual value.",
    },
  },
  "su4-contingencies-warranties": {
    topicId: "su4-contingencies-warranties",
    scope: {
      ar: "الوحدة 4، 4.1: احتمال الخسارة وقابليتها للتقدير، ونوعا الضمان ومخصص كل منهما.",
      en: "SU 4 §4.1: probability/estimability of loss and assurance versus service warranty accounting.",
    },
    concepts: {
      ar: "في US GAAP تُثبت الخسارة المحتملة إذا كانت مرجحة ويمكن تقديرها معقولًا؛ إذا توفرت احتمالية معقولة ولم تتحقق شروط الإثبات يفصح عنها عادةً دون قيد، والنائية لا تفصح عادة. ضمن مجال تقدير متساوي الاحتمال لا توجد فيه نقطة أفضل، يثبت الحد الأدنى مع الإفصاح الملائم. ضمان الجودة الملازم للبيع يخلق مصروفًا ومخصصًا من تاريخ الإيراد، بينما خدمة ضمان يمكن شراؤها مستقلة التزام أداء وإيراد مؤجل يُعترف به مع تقديم الخدمة. لا تسجل تكلفة مطالبة مدفوعة مرة أخرى مصروفًا إذا كان المخصص يغطيها.",
      en: "Under U.S. GAAP accrue a probable and reasonably estimable loss; a reasonably possible loss that fails accrual criteria is ordinarily disclosed, while remote losses generally are not. If no amount in an equally plausible loss range is a better estimate, accrue the minimum and disclose as needed. An assurance warranty creates expense and a liability when product revenue is recognized; a separately purchasable service warranty is a performance obligation and deferred revenue released as service is delivered. Claims against an existing provision are not expensed again.",
    },
    workflow: {
      ar: "صنف الاحتمال ودرجة التقدير؛ قرر إثباتًا أو إفصاحًا؛ حدد ضمان جودة أو خدمة؛ احسب المخصص من التوقع الكامل؛ اطرح المطالبات الفعلية أو وزع إيراد الخدمة على فترة تقديمها.",
      en: "Assess likelihood and estimation; decide accrual or disclosure; identify assurance versus service; accrue expected assurance costs and reduce provision for claims, or recognize service consideration over coverage.",
    },
    pitfalls: {
      ar: "لا تؤجل كامل تكلفة ضمان الجودة للسنة التالية لأن الدفع سيتأخر. الحد الأدنى في مدى بلا أفضلية ليس المتوسط. لا تعامل بيع خدمة الضمان كإيراد المنتج الكامل في يوم البيع.",
      en: "Do not defer expected assurance costs until claims are paid. An equally plausible range without a best estimate uses its minimum under U.S. GAAP, not its midpoint. Do not recognize all separately priced service coverage on day one.",
    },
    practicalCase: {
      titleAr: "مخصص الضمان",
      titleEn: "Warranty provision",
      scenarioAr:
        "مبيعات أجهزة 600,000 وضمان جودة سنة واحدة بتكلفة متوقعة 4% من المبيعات؛ رصيد المخصص أول الفترة 7,000 وسددت إصلاحات 15,000. احسب مصروف السنة والمخصص الختامي.",
      scenarioEn:
        "Equipment sales are 600,000 with an assurance warranty expected to cost 4% of sales; beginning provision is 7,000 and 15,000 of claims are paid. Find current expense and closing provision.",
      solutionAr:
        "مصروف ضمان السنة 24,000؛ المخصص الختامي 7,000+24,000−15,000=16,000. دفع المطالبات يخفض المخصص ولا يخلق المصروف نفسه ثانية.",
      solutionEn:
        "Expense =600,000×4%=24,000; ending provision =7,000+24,000−15,000=16,000. Claims reduce the provision rather than duplicate expense.",
    },
  },
  "su4-leases": {
    topicId: "su4-leases",
    scope: {
      ar: "الوحدة 4، 4.2: تصنيف المستأجر والعرض المبدئي واللاحق لحق الاستخدام والالتزام.",
      en: "SU 4 §4.2: lessee classification and initial/subsequent ROU and liability presentation.",
    },
    concepts: {
      ar: "يفحص المستأجر انتقال الملكية أو خيار شراء مرجح أو كون المدة معظم العمر أو القيمة الحالية معظم القيمة العادلة أو الطبيعة المتخصصة للأصل؛ تحقق أحدها يرجح تصنيفًا تمويليًا. في الحالتين يظهر عادة أصل حق استخدام والتزام عند البدء، مع خيار سياسة عقود قصيرة لا تتجاوز 12 شهرًا ولا خيار شراء مرجح. التمويل يفصل مصروف الفائدة وإطفاء حق الاستخدام، والتشغيلي يقدم مصروف إيجار واحدًا غالبًا خطيًا. أصل التمويل يُطفأ على العمر النافع عند انتقال الملكية أو ترجيح شراء الأصل، وإلا عادة الأقصر من عمر الأصل والمدة. أصل الإيجار التشغيلي والتزامه يعرضان منفصلين عن النوع التمويلي. يتطلب IMA التصنيف والعرض، ولا يجعل حساب القيمة الحالية التفصيلي لإيجار الجزء الأول مطلوبًا في هذا الدرس.",
      en: "A lessee checks transfer of title, a reasonably certain purchase option, a major part of economic life, substantially all fair value, or specialized use. One criterion generally means finance classification. Both types normally start with an ROU asset and lease liability, subject to an elected short-term exemption for qualifying leases of up to 12 months without a reasonably certain purchase. Finance leases separately show interest and ROU amortization; operating leases normally show one straight-line lease cost. Finance ROU amortization uses useful life if title transfers or purchase is reasonably certain, otherwise generally the shorter life/term. Operating and finance categories are separately presented or disclosed. IMA emphasizes classification and presentation here rather than full lease-PV computations.",
    },
    workflow: {
      ar: "حدد هوية الأصل والمدة والخيار؛ طبق معايير التصنيف؛ سجل حق الاستخدام والالتزام حيث يلزم؛ في كل دفعة افصل تخفيض الالتزام عن الفائدة؛ قارن عرض الربح والتدفقات حسب النوع.",
      en: "Identify the asset, term and option; apply classification tests; record ROU and liability when applicable; split each payment's liability reduction and interest; compare earnings and cash-flow presentation by type.",
    },
    pitfalls: {
      ar: "الإيجار التشغيلي الطويل ليس خارج المركز المالي. 75% و90% مؤشرات تطبيقية وليستا قواعد كونية صارمة. لا تُظهر مصروفين منفصلين للإيجار التشغيلي كما في التمويلي.",
      en: "A long operating lease is not off balance sheet. The 75% and 90% conventions are indicators, not universal bright-line requirements. Do not present separate interest and amortization expense for an operating lease.",
    },
    practicalCase: {
      titleAr: "تصنيف الإيجار وعرض الدفعة",
      titleEn: "Classification and payment",
      scenarioAr:
        "عقد معدات مدته 4 سنوات من أصل 5 سنوات باقية دون انتقال ملكية. التزام الإيجار قبل دفعة نهاية السنة 100,000 ومعدل الخصم 8% والدفعة 30,000. صنف العقد واحسب الفائدة وتخفيض الالتزام؛ افترض أن المبلغ مستخدم للتوضيح وليس حساب القيمة الحالية الابتدائية.",
      scenarioEn:
        "An equipment lease covers four of five remaining useful years without title transfer. Liability before a year-end payment is 100,000, the rate is 8%, and the payment is 30,000. Classify and split the payment; the figures illustrate a subsequent period, not initial PV.",
      solutionAr:
        "4/5=80% مؤشر قوي لتمويل ضمن الوقائع؛ الفائدة 8,000 وتخفيض الالتزام 22,000 والرصيد 78,000. يُعرض إطفاء حق الاستخدام منفصلًا عن الفائدة، ولا يُحسب من هذه المعطيات.",
      solutionEn:
        "Four-fifths =80%, suggesting a finance lease in these facts. Interest =8,000; principal reduction =22,000; ending liability =78,000. ROU amortization is separate and cannot be calculated from the supplied data.",
    },
  },
  "su4-income-taxes": {
    topicId: "su4-income-taxes",
    scope: {
      ar: "الوحدة 4، 4.3: التخصيص داخل الفترة وبين الفترات، الفروق المؤقتة والدائمة وDTA/DTL.",
      en: "SU 4 §4.3: intra/interperiod allocation, temporary/permanent differences, DTA and DTL.",
    },
    concepts: {
      ar: "مصروف الضريبة = الجاري وفق الدخل الخاضع للضريبة والتشريع النافذ + المؤجل. الفرق الدائم لا ينعكس ولا ينشئ أصلًا أو التزامًا مؤجلًا، مثل غرامة غير قابلة للخصم. الفرق المؤقت ينعكس في سنوات لاحقة: إهلاك ضريبي أسرع غالبًا ينشئ DTL، ومصروف ضمان مثبت محاسبيًا قبل خصمه ضريبيًا ينشئ DTA. استخدم معدل ضريبة مُشرعًا ومتوقع التطبيق عند انعكاس الفرق، لا معدلًا افتراضيًا. خصص ضريبة OCI والبنود الأخرى للموضع المحاسبي ذي الصلة، وقيّم إمكانية تحقق الأصل المؤجل وفق القواعد.",
      en: "Income-tax expense comprises current tax under enacted law and deferred tax. A permanent difference does not reverse or create deferred balances, for example a nondeductible penalty. Temporary differences reverse later: accelerated tax depreciation usually creates DTL; an accrued warranty deductible when paid creates DTA. Measure reversals at the enacted rate expected when they occur, not a guessed rate. Allocate tax effects to continuing operations, OCI or other affected components as appropriate and assess DTA realizability.",
    },
    workflow: {
      ar: "سوِّ الربح المحاسبي بالدخل الضريبي؛ افصل الفروق الدائمة عن المؤقتة؛ صنف DTA أو DTL واتجاه الحركة؛ احسب الضريبة الجارية ثم أضف صافي المؤجل مع مراعاة موضع عرض البنود.",
      en: "Reconcile book and taxable income; separate permanent and temporary items; identify DTA/DTL and movements; compute current tax and add net deferred expense, allocating tax to the relevant financial-statement components.",
    },
    pitfalls: {
      ar: "الغرامة الدائمة ترفع معدل الضريبة الفعلي ولا تُنشئ DTA. زيادة DTA تخفض مصروف الضريبة المؤجلة في الحالة المعتادة. لا تخلط بين رصيد DTL ومصروف التغير في DTL.",
      en: "A permanent fine can increase effective tax but creates no DTA. Increasing DTA ordinarily reduces deferred tax expense. A DTL balance is not itself the year's expense; its movement matters.",
    },
    practicalCase: {
      titleAr: "التغير في الأرصدة المؤجلة",
      titleEn: "Deferred balance movements",
      scenarioAr:
        "دخل خاضع للضريبة 500,000 ومعدل مُشرع 25%. زاد DTL من 18,000 إلى 26,000، وزاد DTA القابل للتحقق من 6,000 إلى 11,000؛ جميع البنود من العمليات المستمرة. احسب الضريبة الجارية والمؤجلة والإجمالية.",
      scenarioEn:
        "Taxable income is 500,000 at an enacted 25% rate. DTL rises from 18,000 to 26,000 and a realizable DTA rises from 6,000 to 11,000; all items relate to continuing operations. Find current, deferred and total tax expense.",
      solutionAr:
        "الجاري 125,000؛ زيادة DTL مقدارها 8,000 ناقص زيادة DTA مقدارها 5,000 = مصروف مؤجل 3,000؛ المجموع 128,000.",
      solutionEn:
        "Current =125,000; deferred =8,000 DTL increase−5,000 DTA increase=3,000; total =128,000.",
    },
  },
  "su4-bonds": {
    topicId: "su4-bonds",
    scope: {
      ar: "الوحدة 4، 4.4: علاوة وخصم إصدار السندات وأثر طريقة الفائدة الفعلية على المصروف والرصيد.",
      en: "SU 4 §4.4: bond premium/discount and the effective-interest effects on expense and carrying amount.",
    },
    concepts: {
      ar: "إذا فاق معدل الكوبون معدل السوق صدر السند بعلاوة، وإذا قل صدر بخصم؛ يتساويان عند الإصدار بالقيمة الاسمية. النقد المدفوع كل فترة = القيمة الاسمية × معدل الكوبون للفترة، والمصروف = القيمة الدفترية أول الفترة × عائد السوق الفعلي للفترة. في الخصم يكون المصروف أعلى من النقد ويرتفع الرصيد مع إطفائه؛ في العلاوة يكون أدنى وينخفض الرصيد. يصل الرصيد إلى الاسمي عند الاستحقاق إذا تم الإطفاء الكامل. احتساب سعر الإصدار بالقيمة الحالية بالتفصيل يتبع الجزء الثاني وفق هذا الكتاب، والتركيز هنا على التسجيل والأثر والعرض.",
      en: "A coupon above market yield produces an issue premium; below market yield produces a discount; equality produces par. Cash interest equals face amount times period coupon; effective-interest expense equals opening carrying amount times period market yield. With a discount expense exceeds cash and carrying value accretes; with a premium expense is lower and carrying value declines. It converges to face at maturity after full amortization. This unit emphasizes recording and financial-statement effects; detailed PV pricing is assigned to Part 2 in the supplied text.",
    },
    workflow: {
      ar: "قارن معدلي الكوبون والسوق؛ حدد النقد المستلم والاسمي والعلاوة/الخصم؛ احسب النقد الدوري والمصروف الفعلي؛ حدث القيمة الدفترية واتجاه الإطفاء؛ طابق الرصيد النهائي.",
      en: "Compare coupon and yield; determine proceeds versus face and premium/discount; compute cash and effective expense; roll forward carrying value; reconcile the closing balance.",
    },
    pitfalls: {
      ar: "لا تستخدم القيمة الاسمية بدل القيمة الدفترية لحساب المصروف الفعلي بعد الإصدار. علاوة الإصدار تخفض المصروف بالنسبة للنقد، ولا تمثل إيرادًا فوريًا. طابق تكرار معدل الفائدة مع فترات الدفعات.",
      en: "Do not use face value for effective expense after issue. A premium lowers interest expense relative to cash; it is not immediate income. Match rate frequency to payment periods.",
    },
    practicalCase: {
      titleAr: "إطفاء خصم في السنة الأولى",
      titleEn: "First-year discount amortization",
      scenarioAr:
        "أُصدرت سندات اسميها 200,000 بمبلغ 190,000؛ الكوبون السنوي 6% وعائد الإصدار الفعلي 8%، والدفع آخر السنة. احسب النقد والفائدة والإطفاء والرصيد آخر السنة الأولى.",
      scenarioEn:
        "Bonds with 200,000 face issue for 190,000; annual coupon is 6% and effective yield 8%, paid year-end. Calculate cash coupon, interest expense, discount amortization and first year-end carrying value.",
      solutionAr:
        "النقد 12,000؛ المصروف 190,000×8%=15,200؛ إطفاء الخصم 3,200؛ الرصيد 193,200. الخصم غير المطفأ ينخفض من 10,000 إلى 6,800.",
      solutionEn:
        "Cash coupon =12,000; expense =190,000×8%=15,200; discount amortization =3,200; closing carrying value =193,200, leaving 6,800 unamortized discount.",
    },
  },
};

export const CMA_STUDY_UNIT_CASES_3_4: CmaStudyUnitCase[] = [
  {
    studyUnit: 3,
    title: {
      ar: "حالة مترابطة: محفظة أصول طويلة الأجل",
      en: "Linked case: long-term asset portfolio",
    },
    scenario: {
      ar: "في بداية السنة اشترت شركة 25% من شركة زميلة بـ160,000 مع نفوذ مهم؛ ربحت الزميلة 80,000 ووزعت 20,000 خلال السنة. اشترت الشركة أيضًا 100 سهم في شركة مستقلة بسعر 30 للسهم دون نفوذ، وبلغ سعرها نهاية السنة 36. اشترت آلة بـ120,000 ودفعت 10,000 للنقل والتركيب، وقدرت خردتها 10,000 وعمرها 4 سنوات. جميع الوقائع مستقلة ولا ضرائب.",
      en: "At the start of the year a company acquires 25% of an associate for 160,000 with significant influence; the associate earns 80,000 and distributes 20,000. The investor also buys 100 shares of an unrelated company at 30 each with no influence; year-end price is 36. A machine costs 120,000 plus 10,000 delivery and installation, with 10,000 residual value and four-year life. The facts are independent; ignore tax.",
    },
    tasks: [
      {
        prompt: {
          ar: "احسب دخل حقوق الملكية ورصيد الاستثمار في الزميلة.",
          en: "Find equity-method income and closing associate investment.",
        },
        solution: {
          ar: "حصة الربح 25%×80,000=20,000؛ حصة التوزيع 5,000 تخفض الاستثمار؛ الرصيد 160,000+20,000−5,000=175,000.",
          en: "Share of income =20,000; dividend share 5,000 reduces investment; closing investment =160,000+20,000−5,000=175,000.",
        },
      },
      {
        prompt: {
          ar: "احسب قيمة الأسهم المستقلة وربح إعادة قياسها.",
          en: "Find fair value and holding gain on the unrelated shares.",
        },
        solution: {
          ar: "قيمة الأسهم 100×36=3,600؛ ربح غير محقق في صافي الربح 100×(36−30)=600 وفق الوقائع.",
          en: "Fair value =100×36=3,600; unrealized earnings gain =100×(36−30)=600.",
        },
      },
      {
        prompt: {
          ar: "احسب تكلفة الآلة وإهلاكها بالقسط الثابت في أول سنة كاملة.",
          en: "Find machine cost and first full-year straight-line depreciation.",
        },
        solution: {
          ar: "التكلفة 120,000+10,000=130,000؛ القاعدة 120,000؛ القسط 30,000؛ القيمة الدفترية آخر السنة 100,000.",
          en: "Cost =130,000; depreciable base =120,000; annual charge =30,000; ending carrying value =100,000.",
        },
      },
    ],
  },
  {
    studyUnit: 4,
    title: { ar: "حالة مترابطة: ضمان وتمويل وضريبة", en: "Linked case: warranty, debt and tax" },
    scenario: {
      ar: "شركة باعت منتجات بـ400,000 بضمان جودة يتوقع أن يكلف 3%، ورصيد مخصص الضمان السابق 2,000 وسددت مطالبات 5,000. في بداية السنة أصدرت سندًا اسميًا 100,000 مقابل 95,000، بكوبون سنوي 4% وعائد فعلي 6%. مصروف الضمان الجديد غير قابل للخصم ضريبيًا إلا عند الدفع. افترض أن فرق الضمان الجديد الباقي في نهاية السنة ينعكس لاحقًا بمعدل ضريبة مُشرع 25%، ولا توجد فروق أخرى.",
      en: "A company sells products for 400,000 with an assurance warranty expected to cost 3%; prior provision is 2,000 and claims paid are 5,000. At the start of the year it issues bonds with 100,000 face for 95,000 at a 4% annual coupon and 6% effective yield. New warranty expense is deductible for tax only on payment. Assume the remaining new warranty difference reverses at an enacted 25% rate, with no other differences.",
    },
    tasks: [
      {
        prompt: {
          ar: "احسب مصروف الضمان والمخصص الختامي.",
          en: "Find warranty expense and closing liability.",
        },
        solution: {
          ar: "المصروف 400,000×3%=12,000؛ المخصص 2,000+12,000−5,000=9,000.",
          en: "Current expense =12,000; closing warranty liability =2,000+12,000−5,000=9,000.",
        },
      },
      {
        prompt: {
          ar: "احسب مصروف فائدة السند وإطفاء الخصم والرصيد نهاية السنة.",
          en: "Find effective bond expense, discount amortization and closing carrying value.",
        },
        solution: {
          ar: "نقد الفائدة 4,000؛ المصروف 95,000×6%=5,700؛ إطفاء الخصم 1,700؛ الرصيد 96,700.",
          en: "Cash interest =4,000; expense =95,000×6%=5,700; discount accretion =1,700; ending bond =96,700.",
        },
      },
      {
        prompt: {
          ar: "إذا كان مخصص الضمان الختامي كله قابلاً للخصم مستقبلًا، فما الأصل الضريبي المؤجل المرتبط به؟",
          en: "If the entire closing warranty provision is deductible in future periods, what is its related deferred tax asset?",
        },
        solution: {
          ar: "فرق قابل للخصم مستقبلًا 9,000؛ أصل ضريبي مؤجل 9,000×25%=2,250، بشرط إمكان تحقق المنفعة. لا يستخدم رصيد أول الفترة لحساب مصروف الضريبة المؤجلة الحالي وحده.",
          en: "Future deductible temporary difference =9,000; DTA =9,000×25%=2,250, subject to realizability. The closing balance is not itself the current-year deferred tax expense.",
        },
      },
    ],
  },
];
