type LocalizedText = { ar: string; en: string };

export interface IfrsPracticeCase {
  id: string;
  standardCode: string;
  title: LocalizedText;
  facts: LocalizedText;
  question: LocalizedText;
  solution: LocalizedText[];
  reference: string;
}

const text = (ar: string, en: string): LocalizedText => ({ ar, en });

/** Open-response questions are source-derived; no MCQ options are invented. */
export const IFRS_BOOK2_PRACTICE_CASES: IfrsPracticeCase[] = [
  {
    id: "ifrs-book2-400-employees-service-estimates",
    standardCode: "IFRS 2",
    title: text("400 موظف: تحديث تقدير المغادرين خلال ثلاث سنوات", "400 employees: revising three-year leaver estimates"),
    facts: text(
      "في 1 يناير 20X1 منحت منشأة 100 خيار لكل من 400 موظف، بشرط استمرار العمل حتى 31 ديسمبر 20X3. القيمة العادلة لكل خيار عند المنح 20 دولارًا. غادر 20 موظفًا في 20X1، وقدرت المنشأة أن إجمالي المغادرين خلال السنوات الثلاث سيكون 20% من الموظفين الأصليين. غادر 25 آخرون في 20X2، وعُدل تقدير إجمالي المغادرين إلى 25%. وغادر عشرة آخرون في 20X3.",
      "On 1 January 20X1 an entity grants 100 options to each of 400 employees, conditional on working until 31 December 20X3. Grant-date fair value is $20 per option. Twenty employees leave in 20X1 and estimated total departures over the three years are 20% of the original employees. Another 25 leave in 20X2 and the total-departure estimate is revised to 25%. Ten more leave in 20X3."
    ),
    question: text("احسب مصروف المكافآت عن معاملة الدفع على أساس الأسهم لكل سنة من السنوات الثلاث المنتهية في 31 ديسمبر 20X3.", "Calculate the remuneration expense for the share-based payment transaction for each of the three years ended 31 December 20X3."),
    solution: [
      text("شرط الخدمة يدخل في عدد الخيارات المتوقع استحقاقها. قيمة الوحدة 20 دولارًا بتاريخ المنح ثابتة لهذه المنحة المسددة بحقوق الملكية؛ ومصروف كل سنة هو تغير التكلفة التراكمية، لا التكلفة التراكمية كاملة.", "The service condition affects expected vesting numbers. The $20 grant-date unit value stays fixed for this equity-settled award; each year's expense is the movement in cumulative cost, not the full cumulative amount."),
      text("20X1: المتوقع بقاء 400 × 80% = 320 موظفًا؛ المصروف التراكمي ومصروف السنة = 320 × 100 × 20 × 1/3 = 213,333.33 دولار تقريبًا.", "20X1: 400 × 80% = 320 employees expected to vest; cumulative and current-year expense = 320 × 100 × $20 × 1/3 ≈ $213,333.33."),
      text("20X2: المتوقع بقاء 400 × 75% = 300 موظف؛ التكلفة التراكمية = 300 × 100 × 20 × 2/3 = 400,000 دولار؛ مصروف السنة = 400,000 − 213,333.33 ≈ 186,666.67 دولار.", "20X2: 400 × 75% = 300 employees expected to vest; cumulative cost = 300 × 100 × $20 × 2/3 = $400,000; annual expense = $400,000 − $213,333.33 ≈ $186,666.67."),
      text("20X3: المغادرون الفعليون 20 + 25 + 10 = 55؛ يستحق 345 موظفًا 34,500 خيار. التكلفة النهائية = 34,500 × 20 = 690,000 دولار؛ مصروف السنة = 690,000 − 400,000 = 290,000 دولار. مجموع المصروفات 690,000، ويقابله رصيد حقوق ملكية بالمبلغ نفسه.", "20X3: actual leavers = 20 + 25 + 10 = 55; 345 employees vest in 34,500 options. Final cost = 34,500 × $20 = $690,000; annual expense = $690,000 − $400,000 = $290,000. Annual expenses total $690,000, matched by the equity balance.")
    ],
    reference: "IFRS 2.11, 15, 19–20, 23",
  },

  {
    id: "ifrs-book2-ifrs6-ch13-quiz-oil-funding",
    standardCode: "IFRS 6",
    title: text("استكشاف النفط وعدم التأكد من التمويل", "Oil exploration and uncertain funding"),
    facts: text(
      "بدأت منشأة استكشاف منطقة من المحيط لم تُستكشف سابقًا بحثًا عن النفط. اكتشفت النفط وتوجد سوق نشطة لبيعه، لكنها غير متأكدة من قدرتها على جمع الأموال اللازمة لإكمال الاستكشاف. لا يحدد السؤال مبلغ التكاليف أو سياسة الاعتراف بها أو تفاصيل الحق القانوني أو القيمة القابلة للاسترداد.",
      "An entity has just begun exploring a previously unexplored area of ocean for oil. It has discovered oil and there is an active market in which to sell it, but it is unsure whether it can raise the funds needed to complete exploration. The prompt gives no cost amount, recognition policy, legal-right details or recoverable amount."
    ),
    question: text("ما المعالجة المطلوبة لتكاليف الاستكشاف المتكبدة؟", "What is the required treatment of the exploration costs incurred?"),
    solution: [
      text(
        "تحقق أولًا من نطاق IFRS 6: يلزم حصول المنشأة على حق قانوني للاستكشاف، وألا تكون الجدوى الفنية والقدرة التجارية للاستخراج قد أصبحتا قابلتين للإثبات. وجود نفط وسوق لبيعه لا يثبت وحده اكتمال هذه المرحلة. ضمن النطاق تطبق المنشأة سياستها المتسقة للاعتراف بنفقات الاستكشاف والتقييم؛ لا يفرض IFRS 6 رسملة كل نفقة.",
        "First establish IFRS 6 scope: the entity must hold legal exploration rights, and technical feasibility and commercial viability of extraction must not yet be demonstrable. Finding oil and a market does not alone establish completion of that phase. Within scope, apply the entity's consistent policy for recognising exploration and evaluation expenditure; IFRS 6 does not require every cost to be capitalised."
      ),
      text(
        "عدم التأكد من التمويل يستلزم فحص الوقائع التي قد تشير إلى تعذر استرداد أصل مثبت: هل يوجد إنفاق جوهري مخطط أو معتمد؟ هل ستستمر الأنشطة؟ وهل يمكن استرداد الرصيد بالتطوير أو البيع؟ عند وجود مؤشر انخفاض يجرى اختبار وفق IAS 36 وتثبت الخسارة اللازمة. لا تكفي عبارة «غير متأكدة» للجزم بانعدام الاسترداد أو صرف الرصيد كاملًا.",
        "Funding uncertainty requires assessment of facts that may indicate a recognised asset is not recoverable: is substantial further expenditure budgeted or planned, will activity continue, and can the balance be recovered through development or sale? When impairment indicators exist, test under IAS 36 and recognise the resulting loss. Merely being unsure does not establish zero recovery or an automatic full write-off."
      ),
      text(
        "إذا كانت السياسة تقضي بصرف هذه النفقات، تثبت مصروفًا عند تكبدها؛ وإذا رسملت وفق سياسة مؤهلة، تفحص للانخفاض. لا تتوافر مبالغ أو بيانات استرداد لقياس أصل أو خسارة أو إعداد قيد رقمي. اكتشاف المورد وحده لا يبرر تجاوز الاختبار.",
        "If the policy expenses these costs, recognise expense as incurred; if they were capitalised under an eligible policy, assess impairment. No amounts or recovery data are supplied to measure an asset or loss or prepare a numerical entry. Discovery alone does not justify bypassing that assessment."
      )
    ],
    reference: "IFRS 6.3–10, 17–22; IAS 36.18",
  },

  {
    id: "ifrs-book2-valor-principal-most-advantageous-market",
    standardCode: "IFRS 13",
    title: text("Valor: السوق الرئيسي والسوق الأكثر منفعة", "Valor: principal and most advantageous markets"),
    facts: text(
      "يمكن لـValor الوصول إلى سوقي X وY لبيع أصل متماثل بتاريخ القياس. سعر X هو 58 دولارًا، وتكاليف معاملته 4 دولارات ونقله 4 دولارات؛ سعر Y هو 57 دولارًا، وتكاليف معاملته 3 دولارات ونقله دولاران. يفترض المثال أن موقع الأصل خاصية له، وأن الأسعار من معاملات منتظمة وقابلة للوصول؛ لا يقدم حجم النشاط إلا في فرض أن X هو السوق الرئيسي.",
      "Valor can access markets X and Y to sell an identical asset at the measurement date. X quotes $58 with $4 transaction and $4 transport costs; Y quotes $57 with $3 transaction and $2 transport costs. Assume location is a characteristic of the asset and prices represent accessible orderly transactions. Volume and activity are given only in the alternative assumption that X is the principal market."
    ),
    question: text("ما القيمة العادلة إذا كان X السوق الرئيسي؟ وما السوق والقيمة إذا لم يوجد سوق رئيسي؟", "What is fair value if X is the principal market? Which market and value apply if neither is principal?"),
    solution: [
      text("إذا كان X السوق الرئيسي المتاح، يُستخدم سعره ولو كان صافي Y أعلى: القيمة العادلة = 58 − 4 نقل = 54 دولارًا. لا يخصم مبلغ 4 تكاليف المعاملة من القياس.", "If accessible X is principal, use it even though Y offers better net proceeds: fair value = $58 − $4 transport = $54. Do not deduct X's $4 transaction costs from the measure."),
      text("إذا لم يوجد سوق رئيسي، قارن صافي حصيلة اختيار السوق: X = 58 − 4 معاملة − 4 نقل = 50 دولارًا؛ Y = 57 − 3 معاملة − 2 نقل = 52 دولارًا. لذلك Y هو الأكثر منفعة.", "If there is no principal market, compare net proceeds to select a market: X = $58 − $4 transaction − $4 transport = $50; Y = $57 − $3 transaction − $2 transport = $52. Therefore Y is most advantageous."),
      text("بعد اختيار Y، القيمة العادلة = 57 − 2 نقل = 55 دولارًا، وليست صافي الحصيلة 52 دولارًا؛ لا تخصم تكاليف المعاملة 3 دولارات من القياس. لا يعطي السؤال معيار القياس المحاسبي لهذا الأصل أو قيمته الدفترية، لذلك لا يُستنتج قيد أو مكسب إعادة تقييم.", "After selecting Y, fair value = $57 − $2 transport = $55, not the $52 net proceeds; its $3 transaction costs are excluded from fair value. The question supplies neither the asset's applicable accounting measurement basis nor its carrying amount, so no entry or remeasurement gain follows."),
    ],
    reference: "IFRS 13.16–19, 24–26, Appendix A",
  },
  {
    id: "ifrs-book2-ifrs15-p-contract-cost-progress",
    standardCode: "IFRS 15",
    title: text("عقد P: التقدم بالتكلفة وتصنيف الحق في المقابل", "P contract: cost-based progress and right-to-payment presentation"),
    facts: text(
      "لدى P عقد بسعر إجمالي 750 مليون دولار. تكبدت حتى التاريخ 225 مليونًا، وتتوقع 340 مليونًا إضافية للإكمال. أصدرت فواتير وتلقت 290 مليونًا. تستخدم طريقة المدخلات بالتكلفة لقياس التقدم. يفترض التحليل أن التزام الأداء مستوفى على مدى الزمن وأن تكاليف الـ225 مليونًا تعكس فعلًا الأداء المنقول إلى العميل؛ لا يوضح النص ما إذا كان الحق في باقي المقابل غير مشروط.",
      "P has a $750m contract, with $225m cost incurred and $340m further cost expected to complete. It has invoiced and collected $290m. It uses a cost-based input measure of progress. The analysis assumes the performance obligation qualifies for over-time recognition and all $225m depicts performance transferred; the facts do not say whether the remaining right to consideration is unconditional."
    ),
    question: text("احسب التقدم والإيراد والربح حتى التاريخ، وفسّر عرض المبلغ الزائد عن المقبوض.", "Calculate progress, revenue and profit to date, and explain presentation of the amount exceeding cash received."),
    solution: [
      text("التكلفة الكلية المتوقعة = 225 + 340 = 565 مليونًا؛ نسبة التقدم الدقيقة = 225 ÷ 565 = 39.8230%، بشرط أن تكون المدخلات ملائمة لقياس نقل السيطرة وفق IFRS 15.39–40 وB19.", "Expected total cost = 225 + 340 = $565m; exact progress is 225 / 565 = 39.8230%, assuming the inputs appropriately depict transfer of control under IFRS 15.39–40 and B19."),
      text("الإيراد الدقيق حتى التاريخ = 750 × 225 ÷ 565 = 298.6726 مليون؛ تكلفة المبيعات 225 مليونًا؛ الربح 73.6726 مليونًا. بتقريب نسبة التقدم أولًا إلى 40% كما في حل تدريبي مبسط، تظهر أرقام 300 و75 مليونًا؛ الفرق 1.3274 مليون من تقريب وسيط، وليس معاملة أخرى.", "Exact revenue to date = 750 × 225 / 565 = $298.6726m; cost of sales $225m; profit $73.6726m. Rounding progress first to 40% produces a simplified $300m revenue and $75m profit; the $1.3274m difference is intermediate rounding, not another transaction."),
      text("الفارق بين الإيراد الدقيق والمقبوض والمفوتر 290 مليونًا هو 8.6726 مليون. إن بقي الحق في ذلك المبلغ معلقًا على أداء آخر أو شهادة مستقبلية فهو أصل عقد؛ وإن لم يبق سوى مرور الزمن لاستحقاق دفعه فهو ذمة مدينة، ولو لم تصدر فاتورته بعد. لا تكفي واقعة عدم الفوترة وحدها للجزم بالتصنيف.", "Revenue above the $290m billed and collected is $8.6726m. It is a contract asset if entitlement remains conditional on further performance or certification; if only time must pass before payment is due, it is a receivable even if not yet invoiced. Lack of an invoice alone does not determine classification.")
    ],
    reference: "IFRS 15.35, 39–40, B19, 105–108",
  },
  {
    id: "ifrs-book2-ifrs15-office-software-obligations",
    standardCode: "IFRS 15",
    title: text("حزمة البرمجيات: أربع وعود قابلة للتمييز", "Software package: four distinct promises"),
    facts: text(
      "تتعاقد Office Solutions مع عميل لتوفير ترخيص استخدام برنامج اتصالات، وتركيبه، ودعم فني لمدة ثلاث سنوات، وتحديثات للبرنامج لثلاث سنوات. قد يتطلب التركيب تحديث نظام التشغيل لكنه لا يخصص البرنامج للعميل؛ ويمكن لمزود آخر إجراء التركيب أو الدعم، ويعمل البرنامج بلا التحديثات والدعم.",
      "Office Solutions contracts to provide a communications-software licence, installation, three years of technical support and three years of software updates. Installation might require an operating-system upgrade but does not customise the software; another provider can install or support it, and the software functions without updates or support."
    ),
    question: text("حدد ما إذا كانت الوعود في العقد التزامات أداء منفصلة وفق IFRS 15.", "Determine whether the promises are separate performance obligations under IFRS 15."),
    solution: [
      text("كل من الترخيص والتركيب والدعم والتحديثات قابل لأن ينتفع منه العميل بذاته أو مع موارد متاحة بسهولة. كما أنها قابلة للتحديد على حدة ضمن العقد: لا يدمج التركيب البرمجية في مخرج معدل جوهريًا، ولا يعتمد تشغيلها على الدعم أو التحديثات. بناءً على الوقائع المعطاة توجد أربعة التزامات أداء متميزة.", "The customer can benefit from each of the licence, installation, support and updates on its own or with readily available resources. The promises are also separately identifiable in this contract: installation does not significantly modify the software, which operates without the later support or updates. On the stated facts there are four distinct performance obligations."),
      text("لا يحدد السؤال أسعار البيع المستقلة أو المقابل أو تواريخ تقديم الخدمات، فلا يُحسب تخصيص سعر الصفقة ولا توقيت الإيراد. إذا اختلفت الوقائع، مثل تخصيص جوهري أو تكامل مرتفع، يجب إعادة تقييم التمييز ولا يكفي عدّ عناصر العقد آليًا.", "The prompt gives no stand-alone selling prices, total consideration or service dates, so allocation and revenue timing cannot be calculated. Material customisation or significant integration would require reassessing distinctness; merely counting contract line items is not enough.")
    ],
    reference: "IFRS 15.22–30, 73–74",
  },
  {
    id: "ifrs-book2-ifrs15-taplop-retrospective-volume-discount",
    standardCode: "IFRS 15",
    title: text("Taplop: خصم كمية بأثر رجعي وتحديث الإيراد", "Taplop: retrospective volume rebate and revenue update"),
    facts: text(
      "اتفقت Taplop في 1 يوليو 20X5 على بيع حواسيب إلى TrillCo بسعر 500 دولار للوحدة، وينخفض سعر جميع وحدات سنة العقد بأثر رجعي إلى 450 دولارًا إذا تجاوزت المشتريات 500 وحدة. بنهاية سبتمبر باعت 70 وحدة وقدّرت أن العميل لن يتجاوز العتبة خلال السنة. في الربع المنتهي في ديسمبر اشترى العميل 250 وحدة أخرى بعد توسع كبير، فأصبحت Taplop تتوقع تجاوز عتبة الخصم. نهاية سنة Taplop في 30 يونيو.",
      "On 1 July 20X5 Taplop agreed to sell laptops to TrillCo for $500 per unit, retrospectively reduced to $450 for all units in the contract year if purchases exceed 500. By September it had sold 70 and estimated the customer would not pass the threshold. During the December quarter the customer purchased another 250 after substantial expansion, and Taplop then expected the threshold to be exceeded. Taplop's year-end is 30 June."
    ),
    question: text("احسب إيراد Taplop في ربعي سبتمبر وديسمبر، مع توضيح أثر الخصم الرجعي.", "Calculate Taplop's September and December quarter revenue, explaining the retrospective rebate."),
    solution: [
      text("في 30 سبتمبر، طبقًا للتقدير المدعوم حينها وقيود المقابل المتغير، إيراد 70 × 500 = 35,000 دولار. لا يُعاد توصيف هذا التقدير القديم بأنه خطأ لمجرد تغير الوقائع لاحقًا.", "At 30 September, on the supported estimate then and subject to the variable-consideration constraint, revenue is 70 × $500 = $35,000. A later change in facts does not make that earlier estimate an error."),
      text("في ربع ديسمبر، يقدّر السعر الجديد 450 دولارًا لجميع الوحدات: إيراد 250 وحدة جديدة = 250 × 450 = 112,500؛ ويُخفض إيراد الـ70 وحدة السابقة بمقدار 70 × (500 − 450) = 3,500. إذن إيراد ربع ديسمبر = 112,500 − 3,500 = 109,000 دولار، ويصبح الإيراد التراكمي 35,000 + 109,000 = 144,000 = 320 × 450.", "For the December quarter the revised price is $450 for all units: new-unit revenue is 250 × $450 = $112,500, less a $3,500 catch-up reduction for the first 70 (70 × ($500 − $450)). December-quarter revenue is $109,000; cumulative revenue is $144,000 = 320 × $450."),
      text("يعاد تقييم المقابل المتغير في نهاية كل فترة. إذا لم يكن تجاوز عتبة 500 وحدة مرجحًا بدرجة تدعم التقدير المقيد في ديسمبر، فلا يثبت التخفيض بهذه الصورة؛ الوقائع المعطاة تفترض أن تغير نمط الشراء يبرر التقدير الجديد.", "Variable consideration is reassessed each reporting date. If exceeding the threshold were not sufficiently supportable under the constraint in December, this particular adjustment would not follow; the stated facts establish the changed purchasing pattern supporting the new estimate.")
    ],
    reference: "IFRS 15.50–59, 87–89",
  },
  {
    id: "ifrs-book2-ias8-kelshall-policy-incentive",
    standardCode: "IAS 8",
    title: text("تغيير نموذج قياس العقارات تحت ضغط الحوافز", "Changing a property measurement model under incentive pressure"),
    facts: text(
      "في شركة Kelshall المدرجة، نهاية السنة 31 ديسمبر 20X5. تقيس الشركة فئة عقارات تشغلها بنفسها بنموذج إعادة التقييم. تراجعت أسعار العقارات، واقترح المدير المالي التحول إلى نموذج التكلفة. ترتبط مكافأته بالربح ولديه خيارات أسهم. تحدث الرئيس التنفيذي، الذي يملك خيارات كثيرة ويعتزم التقاعد خلال العام التالي، عن رغبته في رفع سعر السهم قبل تقاعده. لا يذكر السؤال فروق القيم أو رصيد فائض إعادة التقييم أو سببًا مدعومًا لتحسين ملاءمة المعلومات.",
      "Listed Kelshall has a 31 December 20X5 year-end and measures its class of owner-occupied properties using the revaluation model. Property prices have fallen and the finance director proposes switching to the cost model. Their remuneration includes a profit-related bonus and share options. The CEO, who holds many options and expects to retire within a year, speaks of wanting to raise the share price before retirement. No valuation difference, revaluation-surplus balance or evidence of improved information relevance is given."
    ),
    question: text(
      "هل يجوز تغيير نموذج القياس في هذه الظروف؟ وكيف يُقيّم المدير المالي ضغط الحوافز وتصرف الرئيس التنفيذي؟",
      "May the measurement model be changed in these circumstances, and how should the finance director assess the incentive pressure and the CEO's conduct?"
    ),
    solution: [
      text("لا يكفي انخفاض الأسعار أو رغبة الإدارة في نتيجة ربحية معينة لتغيير سياسة محاسبية اختيارياً. يشترط IAS 8.14 أن يفرض معيار التغيير أو أن ينتج عنه معلومات موثوقة وأكثر ملاءمة؛ ويجب توثيق هذا الأساس على الوقائع. يسمح IAS 16.29 بالاختيار بين التكلفة وإعادة التقييم لفئة كاملة من الممتلكات والآلات والمعدات، لا لعقار متراجع وحده.",
        "Falling prices or a preferred profit outcome alone do not justify a voluntary policy change. IAS 8.14 requires a Standard to mandate it or the change to yield reliable and more relevant information, supported by the facts. IAS 16.29 permits a cost or revaluation policy for an entire class of property, plant and equipment, not just a single declining property."),
      text("لا يمكن الجزم بأن التحول سيزيد الربح: تخفيض القيمة تحت نموذج إعادة التقييم يعترف به في الربح أو الخسارة إلا بقدر ما يقابل فائض إعادة تقييم لنفس الأصل في الدخل الشامل الآخر؛ ونموذج التكلفة لا يلغي اختبار الانخفاض. لا تتوافر مبالغ كافية لقيد أو أثر عددي. ينبغي للمدير المالي طلب تقييم مستقل ومراجعة مبرر التغيير ورفع تعارض المصالح إلى الحوكمة الملائمة؛ ولا تثبت نية التلاعب من تعليق الرئيس التنفيذي وحده، لكن ضغط الحوافز يستلزم يقظة وتوثيقًا.",
        "The switch cannot be assumed to increase profit. A revaluation decrease is recognised in profit or loss except to the extent of a revaluation surplus for that asset in other comprehensive income; the cost model does not remove impairment requirements. No numerical entry is determinable here. The finance director should obtain an objective valuation, document the rationale and escalate conflicts to appropriate governance. The CEO's comment alone does not prove manipulation, but the incentive pressure calls for scrutiny and documentation.")
    ],
    reference: "IAS 8.14–15; IAS 16.29–31, 40; IAS 36.9",
  },
  {
    id: "ifrs-book2-ifrs10-alpha-beta-gamma-full-consolidation",
    standardCode: "IFRS 10",
    title: text("Alpha وBeta وGamma: مركز مالي موحد مع زميلة", "Alpha, Beta and Gamma: consolidated position with an associate"),
    facts: text(
      "جميع المبالغ بملايين الدولارات في 31 مارس 20X7. أصول Alpha: ممتلكات 125، استثمار Gamma 32، مخزون 33، مدينون 43، نقد 11؛ حقوقها: رأس مال 70 وأرباح محتجزة 55؛ خصومها: قرض 50 وضريبة مؤجلة 35 ودائنون 25 وضريبة جارية 9. أصول Beta: ممتلكات 85، مخزون 30، مدينون 30، نقد 10؛ حقوقها: رأس مال 50 وأرباح محتجزة 44؛ خصومها: قرض 25 وضريبة مؤجلة 12 ودائنون 17 وضريبة جارية 7. في 1 أبريل 20X6 اقتنت Alpha نسبة 80% من Beta بإصدار 20 مليون سهم عادي قيمتها العادلة 6 للسهم ولم تسجل الإصدار؛ ومصروف الإصدار 0.8 خُصم خطأ من الربح. القيمة العادلة للحصة غير المسيطرة عند الشراء 24، وأرباح Beta المحتجزة حينئذ 35. زيادات قيمة أصول Beta يوم الشراء: أرض 10، معدات 8 بعمر أربع سنوات، وعلاقات عملاء بقيمة 20، يُتوقع استمرار الطلب من عملائها لخمس سنوات على الأقل؛ يفترض الحل العددي أنها قابلة للتحديد وعمر إطفائها خمس سنوات. أصل مطالبة قضائية محتمل 3 لا يعترف به عند الشراء. لا تتغير الأسس الضريبية للزيادات ويطبق معدل 25%. اشترت Alpha أيضًا 40% من Gamma مقابل 32؛ أرباح Gamma المحتجزة عند الشراء 15 وعند الإقفال 28، واستمر تأثير Alpha المهم دون سيطرة. بقايا مخزون لدى Beta وGamma اشترتاها من Alpha بـ20 و16 على التوالي، بسعر التكلفة مضافًا إليه 25%. مدينو Alpha يتضمنون 5 على Beta يقابلها دائنون لديها. افترض عدم انخفاض الشهرة وقابلية استرداد الضريبة المؤجلة على الربح الداخلي.",
      "All figures are $m at 31 March 20X7. Alpha assets: PPE 125, Gamma investment 32, inventory 33, receivables 43, cash 11; equity: capital 70 and retained earnings 55; liabilities: loan 50, deferred tax 35, payables 25, current tax 9. Beta assets: PPE 85, inventory 30, receivables 30, cash 10; equity: capital 50 and retained earnings 44; liabilities: loan 25, deferred tax 12, payables 17, current tax 7. On 1 April 20X6 Alpha acquired 80% of Beta by issuing 20m ordinary shares with fair value $6 each but did not record the issue; the $0.8m share-issue cost was incorrectly expensed. Acquisition-date fair value of NCI was 24 and Beta retained earnings were 35. Beta acquisition-date uplifts: land 10, equipment 8 with four-year life, and customer relationships valued at 20, with orders expected for at least five years; the numerical solution assumes they are identifiable and amortised over five years. A 3 contingent lawsuit claim is not an acquisition-date asset. Tax bases of uplifts are unchanged and the tax rate is 25%. Alpha also acquired 40% of Gamma for 32; Gamma retained earnings were 15 at acquisition and 28 at closing, with significant influence but no control. Beta and Gamma still hold inventory bought from Alpha for 20 and 16 respectively, at cost plus 25%. Alpha receivables include 5 due from Beta, matched by Beta payables. Assume no goodwill impairment and recovery of deferred tax on intragroup profit elimination."
    ),
    question: text(
      "أعد قائمة المركز المالي الموحدة لـAlpha، موضحًا الشهرة، حقوق غير المسيطرين، الزميلة، أثر الربح غير المحقق والضريبة؛ ولا تدرج أصل المطالبة المحتمل ضمن أصول الاستحواذ.",
      "Prepare Alpha's consolidated statement of financial position, showing goodwill, NCI, the associate, unrealised profit and tax; do not include the contingent lawsuit claim among acquired assets."
    ),
    solution: [
      text("صافي أصول Beta المحددة يوم الشراء = 50 + 35 + 10 + 8 + 20 − 9.5 ضريبة مؤجلة = 113.5؛ الشهرة الكاملة = 120 مقابل الأسهم + 24 غير مسيطرين − 113.5 = 30.5. لا يثبت أصل الدعوى المحتمل 3 عند الاستحواذ بموجب IFRS 3.23A، حتى لو حققت الدعوى نتيجة لاحقة.", "Beta acquisition-date identifiable net assets = 50 + 35 + 10 + 8 + 20 − 9.5 deferred tax = 113.5; full goodwill = 120 share consideration + 24 NCI − 113.5 = 30.5. Do not recognise the 3 contingent lawsuit claim at acquisition under IFRS 3.23A, even if the litigation later succeeds."),
      text("عند الإقفال تبقى زيادة الأرض 10 والمعدات 6؛ وبافتراض عمر إطفاء خمس سنوات تبقى علاقات العملاء 16؛ تقابلها ضريبة مؤجلة 8، فصافي زيادة Beta = 24. صافي أصولها المعدل = 94 + 24 = 118، وحركة ما بعد الشراء = 118 − 113.5 = 4.5. حصة غير المسيطرين = 24 + 20% × 4.5 = 24.9.", "At closing, land uplift 10 and equipment 6 remain; with an assumed five-year amortisation life, customer relationships of 16 remain, offset by deferred tax 8, giving Beta's net uplift 24. Adjusted net assets are 94 + 24 = 118; post-acquisition movement is 118 − 113.5 = 4.5. NCI is 24 + 20% × 4.5 = 24.9."),
      text("الزميلة Gamma: التكلفة 32 + حصة Alpha في الأرباح اللاحقة 40% × (28 − 15) = 5.2 − حصة الربح الداخلي غير المتحقق 40% × (16 × 25/125) = 1.28؛ رصيد الاستثمار بطريقة حقوق الملكية 35.92. داخل Beta يُلغى الربح الداخلي كاملًا 20 × 25/125 = 4 من المخزون، وتُلغى أرصدة المدين والدائن المتقابلة 5.", "Associate Gamma: cost 32 + Alpha's share of post-acquisition earnings 40% × (28 − 15) = 5.2 − its share of unrealised downstream profit 40% × (16 × 25/125) = 1.28; equity-method investment 35.92. Eliminate the entire 20 × 25/125 = 4 unrealised profit from Beta inventory and eliminate reciprocal 5 receivable and payable."),
      text("يُثبت إصدار الأسهم: مدين استثمار Beta 120، دائن رأس مال 20 وعلاوة إصدار 100. لأن 0.8 تكاليف إصدار حقوق ملكية خُصمت من الربح، يُعكس المصروف إلى الأرباح المحتجزة وتُخصم التكاليف من علاوة الإصدار، فتصبح العلاوة 99.2. لا تُعد هذه التكاليف جزءًا من مقابل الاستحواذ.", "Record the share issue: debit Beta investment 120, credit share capital 20 and premium 100. Reverse the 0.8 equity-issue cost incorrectly expensed to retained earnings and deduct it from premium, leaving 99.2. The cost is not acquisition consideration."),
      text("بافتراض قيام فرق خارجي خاضع للضريبة على حصة Alpha في أرباح Gamma لا تسيطر على وقت عكسه، يعترف بالتزام ضريبة مؤجلة 5.2 × 25% = 1.3. ويُعترف بأصل ضريبة مؤجلة 25% × (4 + 1.28) = 1.32 على الربح الداخلي المستبعد إذا استوفت شروط IAS 12؛ لا يلزم افتراض حق مقاصة قانوني، لذا يُعرض إجمالي الالتزام 56.30 وأصل الضريبة 1.32 أو يُذكر صافي 54.98 لأغراض تسوية السؤال فقط.", "Assuming a taxable outside-basis difference on Alpha's share of Gamma earnings whose reversal it cannot control, recognise a 5.2 × 25% = 1.3 deferred-tax liability. Recognise a 25% × (4 + 1.28) = 1.32 deferred-tax asset on eliminated internal profit if IAS 12's recognition conditions are met. Do not presume a legal right of set-off: present gross liability 56.30 and asset 1.32, or state net 54.98 solely to reconcile this exercise."),
      text("الأرباح المحتجزة العائدة للأم = 55 + 0.8 عكس تكاليف الإصدار + 80% × 4.5 من Beta + 5.2 من Gamma − 4 − 1.28 ربح غير محقق + 1.32 أصل ضريبي − 1.3 ضريبة أرباح الزميلة = 59.34.", "Parent retained earnings = 55 + 0.8 reversal of issue cost + 80% × 4.5 from Beta + 5.2 from Gamma − 4 − 1.28 unrealised profit + 1.32 deferred-tax asset − 1.3 tax on associate earnings = 59.34."),
      text("قائمة المركز المالي بالمليون، مع عرض الضريبة المؤجلة إجمالًا: الممتلكات 226؛ الشهرة 30.5؛ علاقات العملاء 16؛ استثمار الزميلة 35.92؛ أصل ضريبة مؤجلة 1.32؛ المخزون 59؛ المدينون 68؛ النقد 21. إجمالي الأصول 457.74. حقوق الملكية: رأس المال 90، العلاوة 99.2، الأرباح المحتجزة 59.34، غير المسيطرين 24.9؛ الإجمالي 273.44. الخصوم: قروض 75، ضريبة مؤجلة 56.30، دائنون 37، ضريبة جارية 16؛ الإجمالي 184.30؛ الحقوق والخصوم 457.74. إذا جازت المقاصة قانونًا، تظهر ضريبة مؤجلة صافية 54.98 وإجمالي الأصول والحقوق والخصوم 456.42.", "Consolidated position in $m with gross deferred-tax presentation: PPE 226; goodwill 30.5; customer relationships 16; associate investment 35.92; deferred-tax asset 1.32; inventory 59; receivables 68; cash 21. Total assets 457.74. Equity: capital 90, premium 99.2, retained earnings 59.34, NCI 24.9; total 273.44. Liabilities: loans 75, deferred tax 56.30, payables 37, current tax 16; total 184.30; equity and liabilities 457.74. If legal offset is permitted, net deferred tax is 54.98 and both totals are 456.42.")
    ],
    reference: "IFRS 10.B86, B94; IFRS 3.10, 18–19, 23A, 32; IAS 28.10, 28–30; IAS 12.15, 39, 74; IAS 32.37"
  },
  {
    id: "ifrs-book2-ifrs10-ch22-quiz-intragroup-asset",
    standardCode: "IFRS 10",
    title: text("بيع أصل غير متداول داخل المجموعة", "Intragroup transfer of a non-current asset"),
    facts: text("في بداية السنة باعت تابعة تملك الأم 75% منها أصلًا إلى الأم مقابل 500,000؛ كانت قيمته الدفترية لدى التابعة 400,000 وبقيت أربع سنوات من عمره النافع. لا يذكر السؤال طريقة الإهلاك أو القيمة المتبقية.", "At the start of the year a 75%-owned subsidiary transferred an asset to its parent for 500,000; its pre-transfer carrying amount was 400,000 with four years' useful life remaining. Depreciation method and residual value are not stated."),
    question: text("كيف تُعالج الصفقة في ربح أو خسارة المجموعة بنهاية السنة؟", "How is the transaction treated in group profit or loss at year-end?"),
    solution: [
      text("يُلغى ربح البيع الداخلي البالغ 100,000 كاملًا ويُعاد الأصل إلى أساسه الدفتري للمجموعة، ثم يُعدّل إهلاكه اللاحق لإزالة الزيادة الناتجة عن سعر التحويل. إذا استُخدم القسط الثابت بلا قيمة متبقية وتوزعت السنوات الأربع بالتساوي، فالزيادة في إهلاك الأم = 100,000 ÷ 4 = 25,000، فيكون صافي تخفيض ربح المجموعة 75,000؛ والقيمة الدفترية للأصل تقل في نهاية السنة بمقدار 75,000. ولا يكفي السؤال وحده لتحديد تفاصيل عرض التوزيع بين ملاك الأم وغير المسيطرين دون تحليل قيود البائع والمشتري منفصلة. إن كانت طريقة الإهلاك أو القيمة المتبقية مختلفة فلا يمكن الجزم بمبلغ 25,000 من المعطيات وحدها، لكن يلزم حذف الربح الداخلي وتعديل الإهلاك الفعلي في جميع الأحوال.", "Eliminate the entire 100,000 intragroup disposal gain and restore the group's carrying basis, then reverse transfer-price excess depreciation. If straight-line depreciation with no residual value applies evenly over the remaining four years, the parent's excess depreciation is 100,000 / 4 = 25,000, giving a net group-profit reduction of 75,000 and an asset closing carrying amount 75,000 lower. The question alone does not establish a reliable owner/NCI allocation without analysing seller and buyer entries separately. A different depreciation method or residual value makes the exact 25,000 indeterminable from the stated facts, but the internal gain and actual excess depreciation must still be eliminated."),
    ],
    reference: "IFRS 10.B86(c), B94; IAS 16.50, 60",
  },
  {
    id: "ifrs-book2-ifrs10-ch21-quiz-major-minor",
    standardCode: "IFRS 10",
    title: text("Major وMinor: تغير الربح غير المحقق", "Major and Minor: change in unrealised profit"),
    facts: text("تمتلك Major نسبة 80% من Minor التي تبيع لها بسعر التكلفة مضافًا إليه 33.33%. بضاعة من هذه المبيعات في مخزون Major بلغت 12,000 بنهاية 20X8 و15,000 بنهاية 20X9. أُهملت الضريبة. الخيارات: أ) مدين 1,000؛ ب) دائن 800؛ ج) دائن 750؛ د) مدين 600.", "Major owns 80% of Minor, which sells goods to Major at cost plus 33.33%. Goods from those sales in Major's inventory were 12,000 at 20X8 year-end and 15,000 at 20X9 year-end. Ignore tax. Options: A 1,000 debit; B 800 credit; C 750 credit; D 600 debit."),
    question: text("بكم يُعدل ربح المجموعة العائد لمساهمي Major بسبب تغير المخزون غير المحقق؟", "By how much is consolidated profit attributable to Major shareholders adjusted for the change in unrealised inventory profit?"),
    solution: [
      text("الخيار د: مدين 600 تقريبًا. نسبة الربح إلى سعر التحويل = 33.33 ÷ 133.33 ≈ 25%. ربح المخزون الافتتاحي غير المحقق ≈ 12,000 × 25% = 3,000 ويُعكس؛ وربح الختامي ≈ 15,000 × 25% = 3,750 ويُلغى. صافي تخفيض ربح المجموعة = 750، وحصة ملاك الأم 80% × 750 = 600؛ وحصة غير المسيطرين 150. الفروق الصغيرة المحتملة من تقريب 33.33% لا تغير الاختيار.", "Choice D: approximately 600 debit. Profit as a share of transfer price = 33.33 / 133.33 ≈ 25%. Opening unrealised profit ≈ 12,000 × 25% = 3,000 reverses; closing unrealised profit ≈ 15,000 × 25% = 3,750 is eliminated. Net group-profit reduction is 750; parent owners bear 80% × 750 = 600 and NCI bears 150. Minor rounding from the stated 33.33% does not change the choice."),
    ],
    reference: "IFRS 10.B86(c), B94",
  },
  {
    id: "ifrs-book2-ifrs10-ch20-quiz-subsidiary",
    standardCode: "IFRS 10",
    title: text("تعريف الشركة التابعة", "Subsidiary definition"),
    facts: text("السؤال يطلب تعريف الشركة التابعة.", "The question asks for the definition of a subsidiary."),
    question: text("ما الشركة التابعة؟", "What is a subsidiary?"),
    solution: [text("منشأة يسيطر عليها مستثمر آخر هو الشركة الأم. لا يكفي اسم العلاقة أو مجرد نسبة ملكية بدون فحص السيطرة.", "An entity controlled by another entity, the parent. The label or ownership percentage alone does not replace the control assessment.")],
    reference: "IFRS 10 Appendix A, 5–7",
  },
  {
    id: "ifrs-book2-ifrs10-ch20-quiz-control",
    standardCode: "IFRS 10",
    title: text("عناصر السيطرة", "Elements of control"),
    facts: text("السؤال يطلب متى تُعد الشركة مسيطرة على مستثمر فيها.", "The question asks when an investor controls an investee."),
    question: text("متى تتحقق السيطرة وفق IFRS 10؟", "When does control exist under IFRS 10?"),
    solution: [text("عندما تكون للمستثمر سلطة على المنشأة المستثمر فيها، وتعرض أو حقوق لعوائد متغيرة منها، وقدرة على استخدام سلطته للتأثير في تلك العوائد؛ تلزم العناصر الثلاثة معًا وتُراجع الوقائع والظروف.", "When the investor has power over the investee, exposure or rights to variable returns, and the ability to use power to affect those returns; all three elements are necessary and facts and circumstances are reassessed.")],
    reference: "IFRS 10.6–8",
  },
  {
    id: "ifrs-book2-ifrs10-ch20-quiz-consolidation",
    standardCode: "IFRS 10",
    title: text("واجب تجميع قوائم الشركة الأم", "Parent's consolidation requirement"),
    facts: text("السؤال عن معالجة الشركة الأم للشركات التابعة.", "The question concerns a parent's accounting for subsidiaries."),
    question: text("ما المعالجة التي يفرضها IFRS 10 على الشركة الأم؟", "What accounting does IFRS 10 require of a parent?"),
    solution: [text("تعد قوائم مالية موحدة تجمع أصول والتزامات وحقوق ملكية وإيرادات ومصروفات الشركة الأم وتوابعها كمنشأة اقتصادية واحدة، مع استبعاد الأرصدة والمعاملات داخل المجموعة، ما لم ينطبق استثناء محدد.", "Prepare consolidated statements presenting the parent and subsidiaries as one economic entity, combining assets, liabilities, equity, income and expenses and eliminating intragroup balances and transactions, unless a specific exemption applies.")],
    reference: "IFRS 10.4, B86",
  },
  {
    id: "ifrs-book2-ifrs10-ch20-quiz-exemption",
    standardCode: "IFRS 10",
    title: text("استثناء إعداد القوائم الموحدة", "Exemption from consolidation"),
    facts: text("السؤال يطلب حالات إعفاء الشركة الأم من إعداد قوائم موحدة.", "The question asks when a parent is exempt from consolidated statements."),
    question: text("متى تُعفى شركة أم من إعداد القوائم الموحدة؟", "When may a parent omit consolidated financial statements?"),
    solution: [text("قد ينطبق استثناء IFRS 10.4(a) إذا كانت هي نفسها تابعة مملوكة كليًا أو جزئيًا وأُبلغ سائر مالكيها ولم يعترضوا، ولا تتداول أدواتها أو تسعى لطرحها في سوق عامة، وكانت أم أعلى أو وسيطة تصدر قوائم موحدة متاحة للعامة متوافقة مع IFRS؛ وقد ينطبق استثناء كيان الاستثمار وفق IFRS 10.4B و31. يجب تحقق كل شروط المسار المعني، لا مجرد كونها تابعة.", "The IFRS 10.4(a) exemption may apply when the parent is itself wholly or partially owned and all other owners were informed and do not object, its instruments are neither publicly traded nor in a public-issuance filing, and an ultimate or intermediate parent issues publicly available IFRS-compliant consolidated statements. The investment-entity exception may apply under IFRS 10.4B and 31. All relevant conditions must be met; subsidiary status alone is insufficient.")],
    reference: "IFRS 10.4(a), 4B, 31",
  },
  {
    id: "ifrs-book2-ias27-ch20-quiz-separate",
    standardCode: "IAS 27",
    title: text("الاستثمار في التابعة بالقوائم المنفصلة", "Subsidiary investment in separate statements"),
    facts: text("السؤال عن معالجة الاستثمار في تابعة في قوائم الأم المنفصلة.", "The question concerns a subsidiary investment in the parent's separate statements."),
    question: text("كيف يُحاسب عنه في القوائم المنفصلة؟", "How is it accounted for in separate financial statements?"),
    solution: [text("تختار المنشأة لكل فئة من الاستثمارات التكلفة، أو IFRS 9، أو طريقة حقوق الملكية وفق IAS 28، مع تطبيق السياسة نفسها على كل فئة. لا تُستبدل القوائم الموحدة بالقوائم المنفصلة إلا عند انطباق استثناء.", "Use cost, IFRS 9, or the equity method in IAS 28, applying the same accounting to each investment category. Separate statements do not replace consolidated statements absent an applicable exemption.")],
    reference: "IAS 27.10",
  },
  {
    id: "ifrs-book2-ifrs10-ch20-quiz-nci",
    standardCode: "IFRS 10",
    title: text("الحصة غير المسيطرة", "Non-controlling interest"),
    facts: text("السؤال يطلب تعريف الحصة غير المسيطرة في تابعة.", "The question asks for the definition of non-controlling interest in a subsidiary."),
    question: text("ما الحصة غير المسيطرة؟", "What is a non-controlling interest?"),
    solution: [text("حقوق الملكية في الشركة التابعة التي لا تُنسب مباشرة أو بصورة غير مباشرة إلى الشركة الأم؛ تُعرض ضمن حقوق الملكية الموحدة منفصلة عن حقوق مالكي الأم.", "Equity in a subsidiary not attributable, directly or indirectly, to the parent; present it within consolidated equity separately from owners of the parent.")],
    reference: "IFRS 10 Appendix A, 22",
  },
  {
    id: "ifrs-book2-ias24-ch18-quiz-transaction",
    standardCode: "IAS 24",
    title: text("معاملة الطرف ذي العلاقة", "Related-party transaction"),
    facts: text("السؤال يطلب تعريف معاملة بين المنشأة وطرف ذي علاقة.", "The question asks for the definition of a transaction between an entity and a related party."),
    question: text("ما معاملة الطرف ذي العلاقة؟", "What is a related-party transaction?"),
    solution: [text("نقل موارد أو خدمات أو التزامات بين المنشأة المعدة للتقرير وطرف ذي علاقة، سواء فُرض سعر أم لا. عدم وجود مقابل لا يلغي الإفصاح المطلوب عند انطباق المعيار.", "A transfer of resources, services or obligations between the reporting entity and a related party, whether or not a price is charged. Nil consideration does not remove applicable disclosure.")],
    reference: "IAS 24.9, 18",
  },
  {
    id: "ifrs-book2-ias24-ch18-quiz-director",
    standardCode: "IAS 24",
    title: text("العضو المنتدب والطرف ذو العلاقة", "Managing director as a related party"),
    facts: text("العبارة: «العضو المنتدب للشركة طرف ذو علاقة بها».", "The statement is: 'A company's managing director is a related party of that company.'"),
    question: text("هل العبارة صحيحة؟", "Is the statement true?"),
    solution: [text("صحيحة؛ العضو المنتدب من الإدارة العليا الرئيسية. لكن شركتين تشتركان في مدير لا تصبحان بالضرورة طرفين ذوي علاقة لمجرد ذلك.", "True: a managing director is key management personnel. Two entities merely sharing a director are not necessarily related parties for that reason alone.")],
    reference: "IAS 24.9, 11(a)",
  },
  {
    id: "ifrs-book2-ias24-ch18-quiz-not-necessarily",
    standardCode: "IAS 24",
    title: text("أوضاع لا تنشئ علاقة تلقائيًا", "Relationships that are not automatic"),
    facts: text("السؤال يطلب مثالين على أوضاع لا تكفي وحدها لإثبات علاقة أطراف ذات علاقة.", "The question asks for two situations that alone do not establish a related-party relationship."),
    question: text("اذكر مثالين لا تنشأ فيهما علاقة طرف ذي علاقة بالضرورة.", "Give two examples where a related-party relationship does not necessarily exist."),
    solution: [text("1) شركتان تشتركان فقط في مدير؛ 2) مورد أو عميل كبير تنشأ معه تبعية اقتصادية فحسب. تُفحص حقوق السيطرة أو التأثير الجوهرية الأخرى على حدة.", "1) Two entities merely share a director; 2) a major supplier or customer creates only economic dependence. Other control or significant-influence facts must be assessed separately.")],
    reference: "IAS 24.11(a), 11(d)",
  },
  {
    id: "ifrs-book2-ifrs8-ch18-quiz-reportable",
    standardCode: "IFRS 8",
    title: text("اختبارات القطاع الواجب التقرير", "Reportable-segment tests"),
    facts: text("السؤال يطلب معايير تحديد القطاع التشغيلي الواجب التقرير عنه.", "The question asks when an operating segment is reportable."),
    question: text("ما معايير تحديد القطاع الواجب التقرير عنه؟", "What determines whether an operating segment is reportable?"),
    solution: [text("يكفي بلوغ أحد حدود 10%: إيراد القطاع الداخلي والخارجي من مجموع إيرادات القطاعات؛ أو القيمة المطلقة لربحه/خسارته من الأكبر بين مجموع أرباح القطاعات الرابحة وخسائر القطاعات الخاسرة؛ أو أصوله من مجموع أصول القطاعات. وتطبق قواعد التجميع وتغطية 75% من الإيراد الخارجي.", "Any one 10% threshold suffices: segment internal and external revenue versus combined segment revenue; absolute segment profit/loss versus the greater of aggregate profitable-segment profit and loss-making-segment loss; or segment assets versus combined assets. Aggregation and 75% external-revenue coverage also apply.")],
    reference: "IFRS 8.12–15",
  },
  {
    id: "ifrs-book2-ifrs8-ch18-quiz-coverage",
    standardCode: "IFRS 8",
    title: text("حد تغطية إيرادات القطاعات", "Segment-revenue coverage"),
    facts: text("السؤال عن نسبة الحد الأدنى من الإيراد الخارجي المشمول بالقطاعات الواجب التقرير عنها.", "The question asks for minimum external-revenue coverage by reportable segments."),
    question: text("كم من إيراد المنشأة الخارجي يجب أن تغطيه القطاعات؟", "How much of the entity's external revenue must reportable segments cover?"),
    solution: [text("75% على الأقل من إيراد العملاء الخارجيين. إذا لم تبلغه القطاعات المحددة تُضاف قطاعات أخرى حتى يتحقق، ولو لم تبلغ وحدها حدود 10%.", "At least 75% of external-customer revenue. Add other operating segments for reporting until the threshold is reached, even if they individually fail the 10% tests.")],
    reference: "IFRS 8.15",
  },
  {
    id: "ifrs-book2-ias33-ch17-quiz-basic",
    standardCode: "IAS 33",
    title: text("حساب ربحية السهم الأساسية", "Basic earnings per share"),
    facts: text("السؤال يطلب صيغة ربحية السهم الأساسية.", "The question asks for the basic EPS formula."),
    question: text("كيف تُحسب ربحية السهم الأساسية؟", "How is basic EPS calculated?"),
    solution: [text("الربح أو الخسارة العائدة لحملة الأسهم العادية في المنشأة الأم مقسومًا على المتوسط المرجح للأسهم العادية القائمة خلال الفترة، مع تعديل البسط لأثر الأسهم الممتازة حيث يلزم.", "Profit or loss attributable to ordinary equity holders of the parent divided by the weighted-average ordinary shares outstanding, adjusting for preference-share effects when applicable.")],
    reference: "IAS 33.9–21",
  },
  {
    id: "ifrs-book2-ias33-ch17-quiz-rights-factor",
    standardCode: "IAS 33",
    title: text("عامل عنصر المنحة في إصدار الحقوق", "Rights-issue bonus factor"),
    facts: text("إصدار حقوق بسعر اكتتاب دون القيمة السوقية السابقة.", "A rights issue priced below the preceding market value."),
    question: text("ما صيغة عامل تعديل عنصر المنحة في إصدار الحقوق؟", "What is the bonus-adjustment factor for a rights issue?"),
    solution: [text("القيمة العادلة للسهم قبل الحقوق مباشرة (السعر شامل الحق) ÷ القيمة العادلة النظرية بعد انفصال الحق؛ يُستخدم لتعديل عدد الأسهم قبل الإصدار والمقارنات.", "Fair value per share immediately before rights (cum-rights price) divided by theoretical ex-rights fair value; use it to adjust pre-issue shares and comparatives.")],
    reference: "IAS 33.27(b), A2",
  },
  {
    id: "ifrs-book2-ias33-ch17-quiz-dilutive-potential",
    standardCode: "IAS 33",
    title: text("السهم العادي المحتمل المخفِّض", "Dilutive potential ordinary share"),
    facts: text("السؤال يطلب تعريف السهم العادي المحتمل المخفِّض.", "The question asks for the definition of a dilutive potential ordinary share."),
    question: text("ما السهم العادي المحتمل المخفِّض؟", "What is a dilutive potential ordinary share?"),
    solution: [text("السهم المحتمل ينشأ من أداة أو عقد قد يمنح أسهمًا عادية؛ ويكون مخفِّضًا إذا أدى افتراض تحويله أو ممارسته إلى خفض ربحية السهم أو زيادة الخسارة للسهم من العمليات المستمرة. تُستبعد الأدوات المضادة للتخفيف.", "A potential ordinary share arises from an instrument or contract that may entitle its holder to ordinary shares; it is dilutive if assumed conversion or exercise decreases EPS or increases loss per share from continuing operations. Exclude antidilutive instruments.")],
    reference: "IAS 33.5, 41–43",
  },
  {
    id: "ifrs-book2-ias33-ch17-quiz-dilution-numerator",
    standardCode: "IAS 33",
    title: text("بسط اختبار التخفيف", "Numerator for the dilution test"),
    facts: text("السؤال يحدد مبلغ الربح المستخدم لاختبار التخفيف.", "The question identifies the earnings amount used to test dilution."),
    question: text("أي بسط يُستخدم لتحديد إن كانت الأسهم المحتملة مخفِّضة؟", "Which numerator is used to determine whether potential shares are dilutive?"),
    solution: [text("الربح أو الخسارة من العمليات المستمرة العائد إلى حملة الأسهم العادية في المنشأة الأم بعد التعديلات المرتبطة بالأداة المحتملة؛ لا تُستخدم نتائج العمليات المتوقفة لاختبار التخفيف.", "Profit or loss from continuing operations attributable to the parent's ordinary equity holders after instrument-related adjustments; discontinued-operation results do not drive the dilution test.")],
    reference: "IAS 33.41–43",
  },
  {
    id: "ifrs-book2-ias33-ch17-quiz-convertible-interest",
    standardCode: "IAS 33",
    title: text("تعديل البسط للسند القابل للتحويل", "Numerator adjustment for a convertible bond"),
    facts: text("السؤال عن أثر افتراض تحويل سند إلى أسهم عادية.", "The question concerns assuming a bond converts into ordinary shares."),
    question: text("لماذا يُعدّل البسط عند حساب ربحية السهم المخففة لسند قابل للتحويل؟", "Why adjust the numerator for a convertible bond in diluted EPS?"),
    solution: [text("لأن افتراض التحويل يعني زوال فائدة السند بعد التحويل. يُضاف أثر الفائدة بعد الضريبة وتغيرات الدخل أو المصروف المرتبطة إلى البسط، وتُضاف الأسهم المرجحة الناتجة إلى المقام، بشرط أن تكون الأداة مخفِّضة.", "Assumed conversion eliminates bond interest after conversion. Add back after-tax interest and related income or expense changes to the numerator and add weighted incremental shares to the denominator, provided the instrument is dilutive.")],
    reference: "IAS 33.31–36, 49",
  },
  {
    id: "ifrs-book2-ias8-ch16-quiz-prior-error",
    standardCode: "IAS 8",
    title: text("تصحيح خطأ فترة سابقة", "Correcting a prior-period error"),
    facts: text("السؤال عن خطأ جوهري كُشف بعد إصدار قوائم فترة سابقة.", "The question concerns a material error discovered after prior-period statements were issued."),
    question: text("كيف يُصحح خطأ فترة سابقة وفق IAS 8؟", "How is a prior-period error corrected under IAS 8?"),
    solution: [
      text("بإعادة العرض بأثر رجعي لمبالغ المقارنة للفترة التي وقع فيها الخطأ، أو بتعديل أرصدة الافتتاح للأصول والالتزامات ومكونات حقوق الملكية في أبكر فترة معروضة إذا سبقها الخطأ، إلا إذا تعذرت إعادة العرض عمليًا. لا يقتصر التصحيح بالضرورة على الأرباح المحتجزة؛ فقد يؤثر في بنود أخرى.", "Restate comparative amounts retrospectively for the period in which the material error arose, or adjust opening asset, liability and equity-component balances of the earliest period presented if it arose earlier, unless restatement is impracticable. The correction is not necessarily limited to retained earnings; other components may be affected."),
    ],
    reference: "IAS 8.42–47",
  },
  {
    id: "ifrs-book2-ias8-ch16-quiz-policy-change",
    standardCode: "IAS 8",
    title: text("متى تُغيَّر السياسة المحاسبية؟", "When is an accounting policy changed?"),
    facts: text("السؤال يطلب الظروف التي قد توجب تغيير سياسة محاسبية.", "The question asks when an accounting-policy change may be required."),
    question: text("متى يجوز أو يجب تغيير سياسة محاسبية؟", "When may or must an accounting policy change?"),
    solution: [
      text("إذا تطلب معيار IFRS ذلك، أو إذا أدى التغيير الطوعي إلى معلومات أكثر موثوقية وملاءمة عن آثار المعاملات والأحداث والظروف على القوائم. تُتبع أحكام الانتقال المحددة في المعيار الجديد إن وجدت؛ وإلا تُطبق السياسة بأثر رجعي ما لم يتعذر ذلك عمليًا. لا يكفي تفضيل الإدارة وحده.", "When required by an IFRS Accounting Standard, or when a voluntary change produces more reliable and relevant information about the effects of transactions, events and conditions. Follow any specific transitional provisions in the new Standard; otherwise apply retrospectively unless impracticable. Management preference alone is insufficient."),
    ],
    reference: "IAS 8.14, 19–27",
  },
  {
    id: "ifrs-book2-ifrs5-ch16-quiz-held-for-sale",
    standardCode: "IFRS 5",
    title: text("شروط التصنيف محتفظًا به للبيع", "Conditions for held-for-sale classification"),
    facts: text("أصل غير متداول يراد استرداد قيمته بالبيع بدل الاستخدام المستمر.", "A non-current asset is intended to recover its carrying amount through sale rather than continued use."),
    question: text("متى يمكن تصنيفه محتفظًا به للبيع؟", "When can it be classified as held for sale?"),
    solution: [
      text("عندما يكون متاحًا للبيع الفوري بحالته الراهنة وفق الشروط المعتادة، ويكون البيع عالي الاحتمال. يتطلب ذلك التزام مستوى الإدارة المناسب بخطة البيع ووجود برنامج نشط للعثور على مشترٍ وإتمام الصفقة وفق IFRS 5؛ لا تكفي نية غير موثقة أو مجرد توقع بيع يومًا ما.", "When available for immediate sale in its present condition on usual terms and the sale is highly probable. This requires appropriate management commitment to a sale plan and an active programme to locate a buyer and complete the plan under IFRS 5; an undocumented intention or possible future sale is insufficient."),
    ],
    reference: "IFRS 5.6–8",
  },
  {
    id: "ifrs-book2-ifrs5-ch16-quiz-measurement",
    standardCode: "IFRS 5",
    title: text("قياس الأصل المحتفظ به للبيع", "Measuring a held-for-sale asset"),
    facts: text("أصل غير متداول استوفى شروط تصنيفه محتفظًا به للبيع.", "A non-current asset meets the held-for-sale classification criteria."),
    question: text("كيف يُقاس بعد التصنيف؟", "How is it measured after classification?"),
    solution: [
      text("بالأقل من قيمته الدفترية وقيمته العادلة ناقصًا تكاليف البيع. وقبل القياس الأول وفق IFRS 5 تُقاس الأصول والالتزامات وفق المعايير المطبقة عليها مباشرة قبل التصنيف، مع مراعاة استثناءات نطاق قياس IFRS 5 لبعض البنود؛ ويتوقف إهلاك الأصل الخاضع لهذا التصنيف.", "At the lower of carrying amount and fair value less costs to sell. Immediately before initial IFRS 5 measurement, measure assets and liabilities under their applicable Standards, observing IFRS 5 measurement-scope exceptions for some items; depreciation of an asset classified as held for sale ceases."),
    ],
    reference: "IFRS 5.5, 15–18, 25",
  },
  {
    id: "ifrs-book2-ifrs5-ch16-quiz-discontinued",
    standardCode: "IFRS 5",
    title: text("تعريف العملية المتوقفة", "Definition of a discontinued operation"),
    facts: text("السؤال يطلب تعريف العملية المتوقفة في IFRS 5.", "The question asks for IFRS 5's discontinued-operation definition."),
    question: text("متى تكون عملية منشأة عملية متوقفة؟", "When is an entity component a discontinued operation?"),
    solution: [
      text("إذا كان مكونًا يمكن تمييز عملياته وتدفقاته النقدية، وقد تم التخلص منه أو صُنّف محتفظًا به للبيع، وكان يمثل خط أعمال رئيسيًا أو منطقة جغرافية رئيسية منفصلة، أو جزءًا من خطة منسقة واحدة للتخلص من مثل ذلك، أو شركة تابعة اقتُنيت حصريًا لإعادة بيعها. ليس كل أصل منفرد محتفظ به للبيع عملية متوقفة.", "A distinguishable component that has been disposed of or classified as held for sale and represents a separate major line of business or geographical area, is part of a single coordinated plan to dispose of such a line or area, or is a subsidiary acquired exclusively for resale. Not every individual held-for-sale asset is a discontinued operation."),
    ],
    reference: "IFRS 5.31–32",
  },
  {
    id: "ifrs-book2-ias1-ch15-quiz-current-assets",
    standardCode: "IAS 1",
    title: text("أمثلة الأصول المتداولة", "Examples of current assets"),
    facts: text("الخيارات المعطاة: أ) عقارات وآلات ومعدات؛ ب) مصروفات مدفوعة مقدمًا؛ ج) معادلات نقدية؛ د) تراخيص تصنيع؛ هـ) أرباح محتجزة.", "Given choices: A property, plant and equipment; B prepayments; C cash equivalents; D manufacturing licences; E retained earnings."),
    question: text("أي الخيارات أمثلة لأصول متداولة؟", "Which choices are examples of current assets?"),
    solution: [
      text("ب وج في الظروف المعتادة: المدفوعات مقدمًا التي ستُستهلك في دورة التشغيل أو خلال 12 شهرًا، ومعادلات النقد غير المقيدة بما يمنع استخدامها 12 شهرًا. قد تكون دفعة مقدمة طويلة الأجل غير متداولة؛ وتصنيفها يعتمد على توقيت الاسترداد. الأصول الثابتة والتراخيص عادة غير متداولة، والأرباح المحتجزة من حقوق الملكية وليست أصلًا.", "B and C in the usual circumstances: prepayments to be consumed in the operating cycle or within 12 months, and unrestricted cash equivalents. A longer-term prepayment can be non-current, depending on realisation. PPE and licences are generally non-current; retained earnings are equity, not an asset."),
    ],
    reference: "IAS 1.66–68",
  },
  {
    id: "ifrs-book2-ias1-ch15-quiz-provisions",
    standardCode: "IAS 1",
    title: text("عرض المخصصات", "Presentation of provisions"),
    facts: text("العبارة المطروحة: «يجب الإفصاح عن المخصصات في قائمة المركز المالي».", "The statement is: 'Provisions must be disclosed in the statement of financial position.'"),
    question: text("هل العبارة صحيحة؟", "Is the statement true?"),
    solution: [
      text("صحيحة في إطار متطلبات IAS 1 لعرض المخصصات كبند ضمن الحد الأدنى لعناصر قائمة المركز المالي، مع مراعاة الأهمية النسبية وإمكان تجميع البنود غير الجوهرية؛ ويقدم IAS 37 إفصاحات إضافية في الإيضاحات. ليست كل فئة صغيرة من المخصصات سطرًا منفصلًا بالضرورة.", "True under IAS 1's minimum statement-of-financial-position line items, subject to materiality and aggregation of immaterial items; IAS 37 requires further note disclosures. Every small provision category need not occupy a separate line."),
    ],
    reference: "IAS 1.54(l), 55, 29–31; IAS 37.84–85",
  },
  {
    id: "ifrs-book2-ias1-ch15-quiz-profit-lines",
    standardCode: "IAS 1",
    title: text("بنود قائمة الربح أو الخسارة", "Profit-or-loss line items"),
    facts: text("الخيارات المعطاة: أ) مصروف الضريبة؛ ب) تحليل المصروفات؛ ج) الربح أو الخسارة.", "Given choices: A tax expense; B analysis of expenses; C profit or loss."),
    question: text("أي الخيارات يجب عرضها كبنود في قائمة الربح أو الخسارة وفق IAS 1؟", "Which choices must be presented as line items in profit or loss under IAS 1?"),
    solution: [
      text("أ وج: مصروف الضريبة، ومجموع الربح أو الخسارة. تحليل المصروفات حسب الطبيعة أو الوظيفة مطلوب ضمن العرض/الإيضاحات وفق القواعد المناسبة، لكنه ليس بحد ذاته سطرًا واحدًا واجبًا في القائمة. ترتبط الإجابة بفترات تطبق IAS 1؛ يبدأ تطبيق IFRS 18 إلزاميًا للفترات السنوية التي تبدأ في 1 يناير 2027، مع جواز التطبيق المبكر.", "A and C: tax expense and the profit-or-loss total. Expense analysis by nature or function is required in the appropriate statement or notes, but is not itself one mandatory single line item. This answer concerns periods applying IAS 1; IFRS 18 becomes mandatory for annual periods beginning 1 January 2027, with early application permitted."),
    ],
    reference: "IAS 1.81A–82, 99–105; IFRS 18.C1",
  },
  {
    id: "ifrs-book2-ias16-ch15-quiz-revaluation",
    standardCode: "IAS 16",
    title: text("مكان عرض فائض إعادة التقييم", "Where revaluation gains are presented"),
    facts: text("السؤال عن مكاسب إعادة تقييم أصول وفق نموذج إعادة التقييم.", "The question asks about revaluation gains under a revaluation model."),
    question: text("أين تُعرض مكاسب إعادة التقييم في القوائم المالية؟", "Where are revaluation gains shown in the financial statements?"),
    solution: [
      text("تُعرض الزيادة عادة في الدخل الشامل الآخر وتتراكم في حقوق الملكية ضمن فائض إعادة التقييم، فتظهر حركتها في قائمة التغيرات في حقوق الملكية. أما بقدر عكس هبوط إعادة تقييم سابق للأصل نفسه أُثبت في الربح أو الخسارة، فتُعترف الزيادة في الربح أو الخسارة؛ لذلك ليست كل زيادة حتمًا في OCI.", "An increase is ordinarily recognised in other comprehensive income and accumulated in equity as revaluation surplus, with its movement in the statement of changes in equity. To the extent it reverses a previous revaluation decrease for the same asset recognised in profit or loss, the increase is recognised in profit or loss; not every increase necessarily goes to OCI."),
    ],
    reference: "IAS 16.39–40; IAS 1.106",
  },
  {
    id: "ifrs-book2-ias1-ch15-quiz-expense-function",
    standardCode: "IAS 1",
    title: text("تحليل المصروفات حسب الوظيفة", "Expense analysis by function"),
    facts: text("تظهر في القائمة عناوين تكلفة المبيعات وتكاليف التوزيع والمصروفات الإدارية.", "The statement headings are cost of sales, distribution costs and administrative expenses."),
    question: text("هل صُنفت هذه المصروفات بحسب الطبيعة أم الوظيفة؟", "Are these expenses analysed by nature or function?"),
    solution: [
      text("بحسب الوظيفة؛ فالعناوين تجمع النفقة تبعًا للدور الذي أدته في المنشأة لا نوعها مثل الرواتب والاستهلاك. في فترات IAS 1 يلزم عند هذا العرض تقديم معلومات إضافية عن طبيعة المصروفات، بما فيها الاستهلاك ومنافع العاملين، وفق المعيار.", "By function: the headings group expenses by the organisational role they serve rather than by type such as wages or depreciation. In periods applying IAS 1, additional nature-of-expense information, including depreciation and employee benefits, is required under the Standard."),
    ],
    reference: "IAS 1.99–105",
  },
  {
    id: "ifrs-book2-ifrs2-ch14-quiz-cash-settled",
    standardCode: "IFRS 2",
    title: text("المعاملة المسددة نقدًا", "Cash-settled share-based payment"),
    facts: text("السؤال يطلب تعريف معاملة دفع على أساس الأسهم تسدد نقدًا.", "The question asks for the definition of a cash-settled share-based payment."),
    question: text("ما معاملة الدفع على أساس الأسهم المسددة نقدًا؟", "What is a cash-settled share-based payment transaction?"),
    solution: [
      text("تحصل المنشأة على سلع أو خدمات مقابل التزام بتحويل نقد أو أصول أخرى بمبلغ يعتمد على سعر أو قيمة أدوات حقوق ملكيتها، مثل حق ارتفاع قيمة السهم المسدد نقدًا. يُعترف بالخدمة أو السلعة والالتزام المقابل وفق شروط الاستحقاق والقياس.", "The entity receives goods or services in exchange for an obligation to transfer cash or other assets at an amount based on the price or value of its equity instruments, such as cash-settled share appreciation rights. Recognise the goods or services and corresponding liability under the applicable vesting and measurement rules."),
    ],
    reference: "IFRS 2 Appendix A, 30–33",
  },
  {
    id: "ifrs-book2-ifrs2-ch14-quiz-grant-date",
    standardCode: "IFRS 2",
    title: text("تاريخ المنح", "Grant date"),
    facts: text("السؤال يطلب تعريف تاريخ المنح في اتفاق دفع على أساس الأسهم.", "The question asks for the grant-date definition in a share-based payment arrangement."),
    question: text("ما تاريخ المنح؟", "What is the grant date?"),
    solution: [
      text("التاريخ الذي تتفق فيه المنشأة والطرف الآخر، بما في ذلك الموظف، على ترتيب الدفع على أساس الأسهم ويصبح لدى الطرفين فهم مشترك لشروطه وأحكامه؛ وإذا كان الاتفاق مشروطًا بموافقة لازمة، لا يحل تاريخ المنح قبل الحصول عليها.", "The date when the entity and counterparty, including an employee, agree to a share-based payment arrangement and share an understanding of its terms and conditions; if a required approval is a condition, grant date is not before that approval is obtained."),
    ],
    reference: "IFRS 2 Appendix A",
  },
  {
    id: "ifrs-book2-ifrs2-ch14-quiz-equity-entry",
    standardCode: "IFRS 2",
    title: text("إثبات التسوية بأدوات حقوق الملكية", "Recognising equity-settled payment"),
    facts: text("منشأة تدخل في معاملة دفع على أساس الأسهم تُسوّى بأدوات حقوق ملكيتها.", "An entity enters an equity-settled share-based payment transaction."),
    question: text("ماذا تثبت المنشأة في قوائمها؟", "What does the entity recognise in its financial statements?"),
    solution: [
      text("تثبت السلع أو الخدمات المستلمة عند الحصول عليها، مع زيادة مقابلة في حقوق الملكية. تُثبت مصروفًا ما لم تستوفِ شروط الاعتراف بأصل؛ وتُوزع خدمات الموظفين على فترة الاستحقاق عند وجود شرط خدمة مناسب.", "Recognise the goods or services received when obtained, with a corresponding increase in equity. Expense them unless they qualify as an asset, and recognise employee services over the vesting period when a service condition applies."),
    ],
    reference: "IFRS 2.7–9, 14–15",
  },
  {
    id: "ifrs-book2-ifrs2-ch14-quiz-employee-options",
    standardCode: "IFRS 2",
    title: text("قياس خيارات الأسهم الممنوحة للموظفين", "Measuring employee share options"),
    facts: text("منحت المنشأة موظفين خيارات أسهم مقابل خدماتهم.", "An entity grants employees share options in exchange for services."),
    question: text("كيف تُقاس المعاملة؟", "How is the transaction measured?"),
    solution: [
      text("تُقاس الخدمات المستلمة بالإشارة إلى القيمة العادلة لأدوات حقوق الملكية الممنوحة في تاريخ المنح، لأن القيمة العادلة لخدمات الموظفين لا يمكن عادة تقديرها مباشرة بصورة موثوقة. يُراعى عدد الأدوات المتوقع استحقاقها وشروط الاستحقاق ذات الصلة عبر الفترة، مع عدم إعادة قياس القيمة العادلة للوحدة كل نهاية فترة لمجرد تغير السعر.", "Measure employee services by reference to the fair value of equity instruments granted at grant date, because the fair value of employee services generally cannot be reliably measured directly. Reflect the expected vesting quantity and relevant vesting conditions over the period, without remeasuring each instrument's grant-date fair value every reporting date merely because its price changes."),
    ],
    reference: "IFRS 2.19–20, 15–16",
  },
  {
    id: "ifrs-book2-ifrs2-ch14-quiz-remeasurement",
    standardCode: "IFRS 2",
    title: text("سبب إعادة قياس الالتزام النقدي", "Why remeasure a cash-settled liability?"),
    facts: text("السؤال يقارن التزام التسوية النقدية بمكون حقوق الملكية في معاملة مسددة بأدوات الملكية.", "The question contrasts a cash-settled liability with equity in an equity-settled arrangement."),
    question: text("لماذا يُعاد قياس المعاملة المسددة نقدًا في نهاية كل فترة، بخلاف القيمة العادلة المقررة عند المنح للمعاملة المسددة بأدوات الملكية؟", "Why is a cash-settled award remeasured at each reporting date, unlike grant-date fair value for an equity-settled award?"),
    solution: [
      text("لأن مبلغ النقد المستحق يعتمد على قيمة متغيرة لأداة حقوق الملكية، فيبقى التزامًا يُقاس بالقيمة العادلة بنهاية كل فترة وحتى التسوية، ويُعترف بتغيره في الربح أو الخسارة. أما المعاملة المسددة بأدوات الملكية فتُثبت عادة بالقيمة العادلة بتاريخ المنح ولا يُعاد قياس تلك القيمة لاحقًا؛ مع تحديث تقدير عدد الأدوات المتوقع استحقاقها لشروط الخدمة أو الأداء غير السوقي حيث يلزم. لذلك كلمة «فقط» في السؤال تخص إعادة قياس القيمة العادلة للالتزام، لا كل تقدير لاحق.", "The cash amount owed changes with the underlying equity value, so the liability is remeasured at fair value at each reporting date and settlement, with changes in profit or loss. In an equity-settled award, grant-date fair value is generally not subsequently remeasured, though estimates of instruments expected to vest are updated for service or non-market performance conditions where required. Thus 'only' concerns remeasurement of liability fair value, not every later estimate."),
    ],
    reference: "IFRS 2.19–20, 23, 30",
  },
  {
    id: "ifrs-book2-ias41-ch13-quiz-biological",
    standardCode: "IAS 41",
    title: text("تعريف الأصل الحيوي", "What is a biological asset?"),
    facts: text("السؤال عن تعريف الأصل الحيوي في النشاط الزراعي.", "The question asks for the definition of a biological asset in agricultural activity."),
    question: text("ما الأصل الحيوي؟", "What is a biological asset?"),
    solution: [
      text("حيوان حي أو نبات حي. تُطبق IAS 41 على الأصول الحيوية المرتبطة بالنشاط الزراعي، باستثناء النباتات المثمرة الواقعة ضمن IAS 16؛ ويبقى الثمر النامي عليها ضمن IAS 41.", "A living animal or plant. IAS 41 covers biological assets in agricultural activity except bearer plants accounted for under IAS 16; produce growing on those plants remains within IAS 41."),
    ],
    reference: "IAS 41.5, 2(b), 5C",
  },
  {
    id: "ifrs-book2-ias41-ch13-quiz-produce",
    standardCode: "IAS 41",
    title: text("تعريف المنتج الزراعي", "What is agricultural produce?"),
    facts: text("السؤال يميز المنتج المحصود عن الأصل الحيوي قبل الحصاد.", "The question distinguishes harvested produce from a pre-harvest biological asset."),
    question: text("ما المنتج الزراعي؟", "What is agricultural produce?"),
    solution: [
      text("المنتج المحصود من أصول المنشأة الحيوية، مثل الصوف بعد جزّه أو الثمار بعد قطفها. يُقاس عند نقطة الحصاد بالقيمة العادلة ناقصًا تكاليف البيع بموجب IAS 41؛ ثم يُطبق IAS 2 على المخزون الناتج حيث يلزم.", "Produce harvested from the entity's biological assets, such as shorn wool or picked fruit. At harvest it is measured at fair value less costs to sell under IAS 41; resulting inventory is subsequently dealt with under IAS 2 as applicable."),
    ],
    reference: "IAS 41.5, 13",
  },
  {
    id: "ifrs-book2-ias41-ch13-quiz-categories",
    standardCode: "IAS 41",
    title: text("الفئات الإنتاجية للأصول الحيوية", "Production categories of biological assets"),
    facts: text("السؤال يطلب فئتين في نظام الإنتاج الزراعي.", "The question asks for two categories within agricultural production."),
    question: text("ما الفئتان اللتان تُستخدمان لتصنيف الأصول الحيوية في الإنتاج الزراعي؟", "What are the two categories used to classify biological assets in agricultural production?"),
    solution: [
      text("أصول حيوية استهلاكية، وأصول حيوية حاملة للإنتاج. هذا تصنيف وصفي لا يلغي تعديل نطاق المعايير: النبات المثمر نفسه يخضع لـIAS 16، بينما المنتج النامي عليه يخضع لـIAS 41؛ ولا تُعامل كل الأصول الحاملة بالطريقة نفسها.", "Consumable biological assets and bearer biological assets. This descriptive distinction does not override the scope amendment: the bearer plant itself is under IAS 16, while its growing produce remains under IAS 41; not all bearer assets share one accounting treatment."),
    ],
    reference: "IAS 41.43–44, 2(b), 5C",
  },
  {
    id: "ifrs-book2-ias41-ch13-quiz-cost",
    standardCode: "IAS 41",
    title: text("هل ألغى IAS 41 التكلفة؟", "Did IAS 41 abolish cost?"),
    facts: text("العبارة المطروحة: «ألغى IAS 41 مفهوم التكلفة لأغراض القياس».", "The statement is: 'IAS 41 has abolished cost for measurement purposes.'"),
    question: text("هل العبارة صحيحة؟", "Is the statement true?"),
    solution: [
      text("خطأ. القاعدة هي القيمة العادلة ناقصًا تكاليف البيع للأصل الحيوي، لكن يمكن دحض افتراض إمكان قياس القيمة العادلة بصورة موثوقة فقط عند الاعتراف الأولي في ظروف IAS 41.30، فيُستخدم حينها مقياس التكلفة ناقص الاستهلاك والهبوط المتراكمين حتى تتاح قيمة عادلة موثوقة. وتوجد النباتات المثمرة ضمن IAS 16، حيث يوجد نموذجا التكلفة وإعادة التقييم.", "False. Fair value less costs to sell is the usual biological-asset measurement, but the presumption of reliable fair-value measurement can be rebutted only at initial recognition in the circumstances of IAS 41.30; cost less accumulated depreciation and impairment is then used until fair value becomes reliably measurable. Bearer plants fall under IAS 16, which permits cost or revaluation models."),
    ],
    reference: "IAS 41.12, 30; IAS 16.29",
  },
  {
    id: "ifrs-book2-ias2-ch13-quiz-nrv",
    standardCode: "IAS 2",
    title: text("مكونات صافي القيمة القابلة للتحقق", "Components of net realisable value"),
    facts: text("السؤال يطلب إكمال الصيغة: سعر البيع ناقصًا بندين.", "The question asks to complete the formula: selling price less two items."),
    question: text("ما البندان المخصومان من سعر البيع للوصول إلى صافي القيمة القابلة للتحقق؟", "Which two items are deducted from selling price to arrive at net realisable value?"),
    solution: [
      text("التكاليف المقدرة للإكمال، والتكاليف المقدرة اللازمة لإتمام البيع في سياق الأعمال العادية. لذلك لا يُساوى صافي القيمة القابلة للتحقق بسعر البيع الخام.", "Estimated costs of completion and estimated costs necessary to make the sale in the ordinary course of business. Net realisable value is not the gross selling price."),
    ],
    reference: "IAS 2.6",
  },
  {
    id: "ifrs-book2-ias2-ch13-quiz-fifo",
    standardCode: "IAS 2",
    title: text("FIFO أم LIFO في IAS 2", "FIFO or LIFO under IAS 2"),
    facts: text("الاختياران الواردان: أ) الوارد أولًا يُصرف أولًا (FIFO)؛ ب) الوارد أخيرًا يُصرف أولًا (LIFO).", "The given choices are A first-in, first-out (FIFO) and B last-in, first-out (LIFO)."),
    question: text("أي الطريقتين الواردتين مسموحة في IAS 2؟", "Which of the two stated methods is permitted under IAS 2?"),
    solution: [
      text("الخيار أ: FIFO. طريقة LIFO غير مسموحة. ويجيز IAS 2 أيضًا المتوسط المرجح للمخزون المتبادل عادة، والتحديد المحدد للتكلفة للأصناف غير المتبادلة؛ فلا يوحي اختيار FIFO من هذين البديلين بأنه الصيغة الوحيدة المسموحة.", "Choice A: FIFO; LIFO is not permitted. IAS 2 also permits weighted-average cost for ordinarily interchangeable inventory and specific identification for non-interchangeable items; choosing FIFO over the two listed options does not make it the only permitted formula."),
    ],
    reference: "IAS 2.23–27",
  },
  {
    id: "ifrs-book2-ias21-ch12-quiz-conversion-translation",
    standardCode: "IAS 21",
    title: text("صرف العملة وترجمة المبالغ", "Currency conversion and translation"),
    facts: text("سؤال يفرق بين مبادلة العملات فعليًا وعرض مبلغ بعملة أخرى.", "A question contrasting actual currency exchange with expressing an amount in another currency."),
    question: text("ما الفرق بين تحويل عملة إلى أخرى وترجمة مبلغ بعملة أخرى؟", "What is the difference between conversion and translation?"),
    solution: [
      text("التحويل أو الصرف بالمعنى العام مبادلة مبلغ نقدي من عملة إلى أخرى. أما الترجمة المحاسبية فهي التعبير عن مبلغ محدد بعملة أخرى وفق سعر صرف مناسب دون اشتراط مبادلة النقد فعليًا؛ ويحدد IAS 21 توقيت وسعر ترجمة المعاملة أو القوائم. لا يُستدل على تحقق صرف نقدي من مجرد ظهور فرق ترجمة.", "Conversion in ordinary usage exchanges cash in one currency for another. Accounting translation expresses an amount in another currency at the appropriate exchange rate without necessarily exchanging cash; IAS 21 sets rates for transactions and financial statements. A translation difference does not itself prove a cash exchange occurred."),
    ],
    reference: "IAS 21.8, 20–23, 38–42",
  },
  {
    id: "ifrs-book2-ias21-ch12-quiz-monetary",
    standardCode: "IAS 21",
    title: text("تعريف البند النقدي", "Definition of a monetary item"),
    facts: text("سؤال تعريفي عن النقد والحقوق أو الالتزامات ذات عدد الوحدات المحدد.", "A definition question about cash and fixed or determinable currency-unit claims and obligations."),
    question: text("ما المقصود بالبند النقدي في IAS 21؟", "What is a monetary item under IAS 21?"),
    solution: [
      text("هو وحدات عملة محتفظ بها، أو أصل أو التزام يُستلم أو يُدفع بعدد ثابت أو قابل للتحديد من وحدات العملة؛ مثل النقد والمدينين والدائنين النقديين. ولا يصبح المخزون أو دفعة مقدمة لاستلام سلعة بندًا نقديًا لمجرد تقويمه بعملة أجنبية.", "It is currency held, or an asset or liability to be received or paid in a fixed or determinable number of currency units, such as cash and monetary receivables/payables. Inventory or a prepayment for goods does not become monetary merely because its price is foreign-currency-denominated."),
    ],
    reference: "IAS 21.8, 16",
  },
  {
    id: "ifrs-book2-ias21-ch12-quiz-initial-transaction",
    standardCode: "IAS 21",
    title: text("إثبات معاملة بعملة أجنبية مبدئيًا", "Initial recognition of a foreign-currency transaction"),
    facts: text("منشأة لديها معاملة بعملة غير عملتها الوظيفية.", "An entity has a transaction denominated in a currency other than its functional currency."),
    question: text("بأي سعر صرف تثبت المعاملة عند الاعتراف الأول؟", "Which exchange rate applies at initial recognition?"),
    solution: [
      text("تُترجم إلى العملة الوظيفية بسعر الصرف الفوري في تاريخ المعاملة. يجوز استخدام متوسط تقريبي عملي لفترة قصيرة عندما يقارب أسعار التواريخ الفعلية؛ لا يلائم ذلك فترة شهدت تقلبات كبيرة. وتتبع الأرصدة اللاحقة قواعد البنود النقدية وغير النقدية في IAS 21.", "Translate into the functional currency at the spot exchange rate on the transaction date. A period average can be a practical approximation when it closely approximates the actual dates' rates; it is inappropriate during significant fluctuations. Subsequent balances follow IAS 21 monetary/non-monetary rules."),
    ],
    reference: "IAS 21.21–22, 23",
  },
  {
    id: "ifrs-book2-ias21-ch12-quiz-functional-change",
    standardCode: "IAS 21",
    title: text("تغيير العملة الوظيفية", "Changing functional currency"),
    facts: text("سؤال عن ظروف تغيير عملة البيئة الاقتصادية الأساسية للمنشأة.", "A question on changing the currency of the primary economic environment."),
    question: text("متى يجوز تغيير العملة الوظيفية؟", "When may functional currency change?"),
    solution: [
      text("فقط عندما تتغير المعاملات والأحداث والظروف الأساسية ذات الصلة بنشاط المنشأة، مثل العملة التي تؤثر أساسًا في أسعار المبيعات؛ لا يكفي تفضيل الإدارة أو اختيار عملة عرض جديدة. ويُطبق التغيير مستقبلًا من تاريخه وفق إجراءات IAS 21.", "Only when underlying transactions, events and conditions relevant to operations change, for example the currency mainly influencing sales prices; management preference or a new presentation currency alone is insufficient. Apply the new functional currency prospectively from the change date under IAS 21."),
    ],
    reference: "IAS 21.9–14, 35–37",
  },
  {
    id: "ifrs-book2-ias21-ch12-quiz-presentation-change",
    standardCode: "IAS 21",
    title: text("تغيير عملة العرض", "Changing presentation currency"),
    facts: text("سؤال عن اختيار العملة التي تُعرض بها القوائم المالية.", "A question on selecting the currency in which statements are presented."),
    question: text("هل عملة العرض مقيدة بشروط تغيير العملة الوظيفية نفسها؟", "Is presentation currency subject to the same change restriction as functional currency?"),
    solution: [
      text("لا. يجيز IAS 21 عرض القوائم بأي عملة أو عملات؛ يمكن اختيار عملة عرض أخرى دون حدوث تغيير في العملة الوظيفية. لكن يجب ترجمة المركز والنتائج والمقارنات وفق القواعد المناسبة والإفصاح عن العملة الوظيفية وسبب اختلافها عن عملة العرض، مع الحفاظ على عرض مفهوم وقابل للمقارنة. لا يعني تغيير العرض تبديل قياس المعاملات الأصلية اعتباطيًا.", "No. IAS 21 permits presentation in any currency or currencies, so a different presentation currency need not reflect a functional-currency change. Translate financial position, results and comparatives under the applicable rules and disclose the functional currency and reason for a different presentation currency, preserving understandable comparability. Changing presentation does not arbitrarily remeasure the original transactions."),
    ],
    reference: "IAS 21.38–42, 53–55",
  },
  {
    id: "ifrs-book2-ias12-ch11-quiz-current-tax",
    standardCode: "IAS 12",
    title: text("قياس ضريبة الدخل الحالية", "Measuring current income tax"),
    facts: text("الخيارات الأصلية: أ) إجمالي الالتزام بما فيه المؤجل؛ ب) المتوقع دفعه أو استرداده من سلطة الضريبة؛ ج) الربح في معدل الضريبة الحالي؛ د) الربح في معدل ضريبة مستقبلي.", "The given choices are: A total liability including deferred tax; B amount expected to be paid to or recovered from tax authorities; C profit times current tax rate; D profit times future tax rate."),
    question: text("أي أساس يقيس ضريبة الدخل الحالية؟", "Which basis measures current income tax?"),
    solution: [
      text("الخيار ب: يُقاس أصل أو التزام الضريبة الحالية بالمبلغ المتوقع دفعه إلى سلطة الضريبة أو استرداده منها، باستخدام قوانين ومعدلات الضريبة النافذة أو النافذة عمليًا بنهاية الفترة. لا تكفي عملية ضرب الربح المحاسبي في المعدل دون تعديل القاعدة الضريبية.", "Choice B: measure the current tax asset or liability at the amount expected to be paid to or recovered from tax authorities, using rates and laws enacted or substantively enacted by the reporting date. Simply multiplying accounting profit by a rate may ignore tax-base adjustments."),
    ],
    reference: "IAS 12.12, 46",
  },
  {
    id: "ifrs-book2-ias12-ch11-quiz-taxable-difference",
    standardCode: "IAS 12",
    title: text("الفروق المؤقتة الخاضعة للضريبة", "Taxable temporary differences"),
    facts: text("العبارة المطروحة: «الفارق المؤقت الخاضع للضريبة ينتج عنه التزام ضريبة مؤجلة».", "The statement is: 'A taxable temporary difference gives rise to a deferred tax liability.'"),
    question: text("هل العبارة صحيحة؟", "Is the statement true?"),
    solution: [
      text("صحيحة كقاعدة عامة: الفارق المؤقت الخاضع للضريبة يؤدي إلى التزام ضريبة مؤجلة عند استرداد الأصل أو تسوية الالتزام. لكن IAS 12 يتضمن استثناءات محددة، ومنها بعض فروق الاعتراف الأولي بالشّهرة وبعض فروق الاستثمار في شركات تابعة عند تحقق شروط التحكم في توقيت الانعكاس وعدم توقعه قريبًا؛ فلا تُطبق العبارة بلا استثناء.", "Generally true: a taxable temporary difference ordinarily produces a deferred tax liability as the asset is recovered or liability settled. IAS 12 has specific exceptions, including certain initial-goodwill differences and some investment outside-basis differences when reversal timing is controlled and reversal is not expected in the foreseeable future. It is not an exception-free rule."),
    ],
    reference: "IAS 12.5, 15, 39",
  },
  {
    id: "ifrs-book2-ias12-ch11-quiz-investment-differences",
    standardCode: "IAS 12",
    title: text("الفروق المؤقتة لاستثمارات الشركات", "Temporary differences on investments"),
    facts: text("استثمار في شركة تابعة أو زميلة أو ترتيب مشترك له مبلغ دفتري وأساس ضريبي.", "An investment in a subsidiary, associate or joint arrangement has a carrying amount and tax base."),
    question: text("كيف تنشأ فروق مؤقتة مرتبطة بهذا الاستثمار؟", "How do temporary differences arise on that investment?"),
    solution: [
      text("تنشأ عندما يختلف المبلغ الدفتري للاستثمار أو حصة المستثمر في صافي الأصول عن أساسه الضريبي، مثل أثر الأرباح غير الموزعة أو فروق العملة أو هبوط قيمة الاستثمار. يُختبر بعد ذلك حكم الاعتراف بضريبة مؤجلة والاستثناءات الخاصة بفروق الاستثمار، بدل افتراض أن كل فرق يُثبت فورًا.", "They arise when the carrying amount of the investment or investor's share of net assets differs from its tax base, for example from undistributed profits, currency changes or an impairment. Then apply the deferred-tax recognition criteria and investment-specific exceptions rather than assuming every difference is immediately recognised."),
    ],
    reference: "IAS 12.38–45",
  },
  {
    id: "ifrs-book2-ias12-ch11-quiz-examples",
    standardCode: "IAS 12",
    title: text("أمثلة للفروق المؤقتة", "Examples of temporary differences"),
    facts: text("السؤال يطلب ثلاثة أمثلة من اختلاف القيمة الدفترية والأساس الضريبي.", "The question asks for three examples of carrying amount differing from tax base."),
    question: text("اذكر ثلاثة أمثلة لفروق مؤقتة.", "Give three examples of temporary differences."),
    solution: [
      text("1) إهلاك ضريبي معجل يجعل الأساس الضريبي لأصل أقل من قيمته الدفترية؛ 2) تكلفة تطوير رُسملت محاسبيًا وخُصمت ضريبيًا عند تكبدها؛ 3) إيراد فوائد أُثبت محاسبيًا قبل تحصيله ويُفرض عليه الضريبة عند التحصيل. الأمثلة الثانية والثالثة مشروطة بالقانون الضريبي المنطبق؛ مجرد تأخر التحصيل لا يخلق فرقًا إذا كانت الضريبة على أساس الاستحقاق أيضًا.", "1) Accelerated tax depreciation leaving an asset's tax base below its carrying amount; 2) development expenditure capitalised for accounting but deducted immediately for tax; 3) interest revenue accrued in accounts but taxed only on receipt. The second and third depend on the applicable tax law: delayed cash collection alone does not create a difference if taxation is also accrual-based."),
    ],
    reference: "IAS 12.5, 17–20, 26",
  },
  {
    id: "ifrs-book2-ias12-ch11-quiz-current-deferred-charge",
    standardCode: "IAS 12",
    title: text("اختبار الفصل 11: مصروف الضريبة الجارية والمؤجلة", "Chapter 11 quiz: current and deferred tax charge"),
    facts: text(
      "يعرض الاختبار ربحًا للسنة قدره 150,000 دولار، وزيادة في الفروق المؤقتة الخاضعة للضريبة قدرها 6,000 دولار، وزيادة سابقة في تقدير الضريبة الجارية قدرها 3,000 دولار ستعكس في السنة الحالية. معدل الضريبة 30%. لا يذكر النص صراحةً هل الربح المذكور هو الربح الخاضع للضريبة، ولا أين نشأت الزيادة في الفروق المؤقتة.",
      "The quiz gives profit for the year of $150,000, a $6,000 increase in taxable temporary differences, and a $3,000 prior-year overprovision of current tax to be reversed this year. The tax rate is 30%. It does not explicitly say whether the quoted profit is taxable profit or where the temporary-difference movement arose."
    ),
    question: text("احسب مصروف الضريبة في الربح أو الخسارة وفق افتراضات الحل المبسط، وبيّن ما يلزم لحكم غير مشروط.", "Calculate the profit-or-loss tax charge under the quiz's simplified assumptions, and identify what is needed for an unconditional answer."),
    solution: [
      text("إذا كان مبلغ 150,000 هو الربح الخاضع للضريبة، أو لا توجد تعديلات بينه وبين الربح الخاضع، فالضريبة الجارية للسنة = 150,000 × 30% = 45,000 دولار. يخفّض تصحيح زيادة تقدير السنة السابقة مصروف الضريبة الجارية بمبلغ 3,000، ليصبح 42,000 دولار.", "If $150,000 is taxable profit, or no accounting-to-tax adjustments are needed, current tax for this year is $150,000 × 30% = $45,000. Reversing the prior-year $3,000 overprovision reduces current-tax expense to $42,000."),
      text("إذا كانت زيادة الفرق الخاضع للضريبة البالغة 6,000 نشأت من بند في الربح أو الخسارة وكان معدل الانعكاس 30%، تزيد الضريبة المؤجلة على الربح أو الخسارة بمبلغ 6,000 × 30% = 1,800 دولار. المصروف الإجمالي = 45,000 − 3,000 + 1,800 = 43,800 دولار، كما في مفتاح الكتاب.", "If the $6,000 increase in the taxable difference arises from a profit-or-loss item and 30% is the reversal rate, deferred tax charged to profit or loss rises by $6,000 × 30% = $1,800. Total expense is $45,000 − $3,000 + $1,800 = $43,800, as in the book's key."),
      text("إن كان 150,000 ربحًا محاسبيًا مع فروق ضريبية أخرى، فلا تكفي الوقائع لحساب الضريبة الجارية؛ وإن نشأ الفرق المؤقت في OCI أو حقوق الملكية، لا يضاف أثره إلى مصروف الربح أو الخسارة. يلزم الربح الخاضع ومصدر حركة الفرق وتحقق المعدل الساري عند الانعكاس قبل اعتماد 43,800 دون شرط.", "If $150,000 is accounting profit with other tax adjustments, current tax cannot be calculated from the facts. If the temporary difference arose in OCI or equity, its tax effect is not added to profit-or-loss expense. Taxable profit, the source of the difference movement and the reversal rate are needed before treating $43,800 as unconditional."),
    ],
    reference: "IAS 12.12, 15, 46–47, 57–58, 61A",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-subsequent-assets",
    standardCode: "IFRS 9",
    title: text("قياس الأصول المالية لاحقًا", "Subsequent measurement of financial assets"),
    facts: text("سؤال عن فئات قياس الأصل المالي بعد الاعتراف الأول.", "A question on subsequent financial-asset measurement categories."),
    question: text("ما فئات القياس اللاحق للأصول المالية في IFRS 9؟", "What are the IFRS 9 subsequent-measurement categories for financial assets?"),
    solution: [
      text("التكلفة المطفأة، أو القيمة العادلة من خلال الدخل الشامل الآخر، أو القيمة العادلة من خلال الربح أو الخسارة. يحدد تصنيف أدوات الدين نموذج الأعمال وخصائص التدفقات النقدية التعاقدية، وتوجد اختيارات أو متطلبات خاصة لبعض استثمارات حقوق الملكية؛ ليست الفئات الثلاث اختيارًا حرًا لكل أصل.", "Amortised cost, fair value through other comprehensive income (FVOCI), or fair value through profit or loss (FVTPL). Debt classification depends on business model and contractual cash-flow characteristics, with specific requirements or elections for some equity investments; the three categories are not a free choice for every asset."),
    ],
    reference: "IFRS 9.4.1.1–4.1.5, 5.7.5",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-ecl-worst-case",
    standardCode: "IFRS 9",
    title: text("هل خسائر الائتمان المتوقعة أسوأ حالة؟", "Are expected credit losses the worst case?"),
    facts: text("العبارة المطروحة: «عند قياس خسائر الائتمان المتوقعة يجب دائمًا اعتماد أسوأ سيناريو».", "The statement is: 'Expected credit losses must always use the worst-case scenario.'"),
    question: text("هل العبارة صحيحة؟", "Is the statement true?"),
    solution: [
      text("خطأ. التقدير مبلغ غير متحيز مرجح بالاحتمالات عبر نطاق من النتائج الممكنة، ويعكس احتمال وقوع خسارة واحتمال عدم وقوعها، مع مراعاة قيمة الزمن للمبلغ ومعلومات معقولة ومؤيدة عن الماضي والحاضر والمستقبل. أسوأ حالة وحدها قد تبالغ في الخسارة.", "False. Estimate an unbiased probability-weighted amount across possible outcomes, reflecting both a credit-loss outcome and a no-loss outcome, the time value of money, and reasonable supportable past, current and forward-looking information. Worst case alone can overstate the loss."),
    ],
    reference: "IFRS 9.5.5.17, B5.5.41–B5.5.42",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-embedded",
    standardCode: "IFRS 9",
    title: text("المشتقات الضمنية في العقد المختلط", "Embedded derivatives in hybrid contracts"),
    facts: text("سؤال يميز بين عقد مضيف أصل مالي داخل IFRS 9 ومضيف آخر.", "A question contrasting a financial-asset host within IFRS 9 with another type of host."),
    question: text("متى يُفصل المشتق الضمني عن العقد المضيف؟", "When is an embedded derivative separated from its host?"),
    solution: [
      text("إذا كان المضيف أصلًا ماليًا داخل IFRS 9 تُطبق قواعد تصنيف وقياس الأصل على العقد المختلط كله، ولا يُفصل المشتق. وإذا لم يكن المضيف أصلًا ماليًا داخل المعيار، يُفصل المشتق فقط عند تحقق الشروط الثلاثة: عدم الارتباط الوثيق بين خصائصه ومخاطر المضيف، وأن أداة مستقلة بالشروط نفسها مشتق، وألا يكون العقد المختلط كله مقاسًا بالقيمة العادلة من خلال الربح أو الخسارة. وإلا يُعالج العقد وفق القواعد المنطبقة.", "For a host that is a financial asset within IFRS 9, classify and measure the whole hybrid contract without separating the derivative. For another host, separate only if the embedded component is not closely related to the host, a stand-alone instrument with the same terms would be a derivative, and the whole hybrid is not at FVTPL. Otherwise apply the relevant whole-contract requirements."),
    ],
    reference: "IFRS 9.4.3.2–4.3.6",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-hedge-accounting",
    standardCode: "IFRS 9",
    title: text("معنى محاسبة التحوط", "Meaning of hedge accounting"),
    facts: text("سؤال تعريفي عن أداة التحوط والبند المتحوط له.", "A definition question about a hedging instrument and hedged item."),
    question: text("ما المقصود بمحاسبة التحوط؟", "What is hedge accounting?"),
    solution: [
      text("هي تمثيل في القوائم لتأثير إدارة المخاطر عبر تخصيص علاقة بين أداة تحوط مؤهلة وبند متحوط له، بحيث تنعكس آثار تغيرات القيمة العادلة أو التدفقات النقدية المرتبطة بالخطر المتحوط له وفق نوع التحوط. لا يكفي وجود مشتق أو تعويض اقتصادي محتمل: يلزم توثيق العلاقة والهدف والاستراتيجية واستيفاء اختبارات التأهل في IFRS 9؛ ولا تكون محاسبة التحوط واجبة لمجرد وجود خطر.", "Hedge accounting represents risk-management effects by designating a qualifying relationship between a hedging instrument and hedged item, reflecting offsetting fair-value or cash-flow changes attributable to the hedged risk according to hedge type. An economic offset or derivative alone is insufficient: designation, documentation and IFRS 9 qualifying criteria are required; hedge accounting is not automatic whenever risk exists."),
    ],
    reference: "IFRS 9.6.1.1, 6.4.1, 6.5.1–6.5.2",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-hedge-types",
    standardCode: "IFRS 9",
    title: text("أنواع علاقات التحوط الثلاثة", "Three hedging relationship types"),
    facts: text("سؤال تعداد لأنواع التحوط في IFRS 9.", "An enumeration question on IFRS 9 hedge types."),
    question: text("سمّ الأنواع الثلاثة لعلاقات التحوط.", "Name the three types of hedging relationship."),
    solution: [
      text("تحوط القيمة العادلة، وتحوط التدفقات النقدية، وتحوط صافي الاستثمار في عملية أجنبية. يحدد نوع الخطر والبند المؤهل المعالجة، ولا تُستنتج أهلية أي علاقة من مجرد تسميتها.", "Fair value hedge, cash flow hedge, and hedge of a net investment in a foreign operation. The qualifying exposure and hedged item drive accounting; a label alone does not establish eligibility."),
    ],
    reference: "IFRS 9.6.5.2",
  },
  {
    id: "ifrs-book2-ifrs13-ch10-quiz-inputs",
    standardCode: "IFRS 13",
    title: text("مدخلات قياس القيمة العادلة", "Fair-value valuation inputs"),
    facts: text("سؤال لإكمال مبدأ اختيار مدخلات أسلوب التقييم.", "A fill-in question on the principle for valuation-technique inputs."),
    question: text("أي مدخلات ينبغي تعظيم استخدامها، وأيها ينبغي تقليلها؟", "Which valuation inputs should be maximised and which minimised?"),
    solution: [
      text("يُعظَّم استخدام المدخلات الملحوظة ذات الصلة، ويُقلَّل استخدام المدخلات غير الملحوظة، مع اختيار أسلوب تقييم مناسب للظروف وتوافر بيانات كافية. لا يعني ذلك تجاهل فرضيات المشاركين في السوق أو استعمال مدخل ملحوظ غير ذي صلة لمجرد أنه متاح.", "Maximise relevant observable inputs and minimise unobservable inputs, using an appropriate valuation technique and sufficient data. This does not mean ignoring market-participant assumptions or using irrelevant observable inputs merely because they are available."),
    ],
    reference: "IFRS 13.61, 67, 81–89",
  },
  {
    id: "ifrs-book2-ias32-ch10-quiz-scope",
    standardCode: "IAS 32",
    title: text("موضوع معيار IAS 32", "What IAS 32 addresses"),
    facts: text("سؤال عن وظيفة معيار الأدوات المالية IAS 32.", "A question on the role of IAS 32 for financial instruments."),
    question: text("ما المسائل التي يعالجها IAS 32؟", "Which financial-instrument issues does IAS 32 address?"),
    solution: [
      text("يعالج تصنيف وعرض الأدوات المالية، ولا سيما التمييز بين الالتزام المالي وأداة حقوق الملكية وفصل مكونات الأداة المركبة، وشروط المقاصة في العرض. يتناول IFRS 9 الاعتراف والقياس، وIFRS 7 الإفصاحات، فلا تُنسب هذه المجالات كلها إلى IAS 32.", "It addresses classification and presentation, notably the liability/equity distinction, compound-instrument components and offsetting conditions. IFRS 9 handles recognition and measurement, and IFRS 7 disclosures; these should not all be attributed to IAS 32."),
    ],
    reference: "IAS 32.2, 15–16, 28–32, 42",
  },
  {
    id: "ifrs-book2-ias32-ch10-quiz-non-instruments",
    standardCode: "IAS 32",
    title: text("بنود ليست أدوات مالية", "Items that are not financial instruments"),
    facts: text("يطلب السؤال أمثلة لبنود لا تستوفي تعريف أداة مالية.", "The question asks for examples that do not meet the definition of a financial instrument."),
    question: text("اذكر أنواع البنود التي لا تُعد أدوات مالية في IAS 32.", "Which types of items are not financial instruments under IAS 32?"),
    solution: [
      text("الأصول المادية بذاتها، والمصروفات المدفوعة مقدمًا التي تعطي حق خدمة أو سلعة لا نقدًا، والأصول أو الالتزامات القانونية غير التعاقدية مثل ضريبة الدخل، والحقوق التعاقدية التي تنتهي بتسلم سلعة أو خدمة لا نقد أو أصل مالي، لا تعد عادةً أدوات مالية. الحكم على مضمون الحق أو الالتزام التعاقدي، لا مجرد وجود عقد.", "Physical assets themselves, prepayments entitling the holder to goods or services rather than cash, non-contractual statutory balances such as income tax, and contractual rights settled in goods or services rather than cash or another financial asset generally are not financial instruments. Assess the contractual substance, not merely the presence of a contract."),
    ],
    reference: "IAS 32.11, AG10–AG12",
  },
  {
    id: "ifrs-book2-ias32-ch10-quiz-liability-feature",
    standardCode: "IAS 32",
    title: text("السمة الحاسمة للالتزام المالي", "Key feature of a financial liability"),
    facts: text("سؤال عن التمييز بين الالتزام المالي وحقوق الملكية عند جهة الإصدار.", "A question on distinguishing a financial liability from equity for the issuer."),
    question: text("ما السمة التعاقدية الحاسمة لوجود التزام مالي؟", "What contractual feature is central to identifying a financial liability?"),
    solution: [
      text("وجود التزام تعاقدي بتسليم نقد أو أصل مالي آخر للطرف المقابل، أو مبادلة أصول أو التزامات مالية بشروط قد تكون غير مواتية، هو السمة الأساسية. وقد تكون تسوية بأسهم المنشأة نفسها التزامًا ماليًا بحسب عدد الأسهم وأسلوب التسوية؛ لذا لا يُكتفى بعبارة «يدفع نقدًا» في جميع الحالات.", "The core feature is a contractual obligation to deliver cash or another financial asset, or to exchange financial assets or liabilities under potentially unfavourable conditions. Settlement in the issuer's own shares can also produce a liability depending on the number of shares and settlement terms, so 'cash payment' is not an exhaustive test."),
    ],
    reference: "IAS 32.11, 16, 22",
  },
  {
    id: "ifrs-book2-ias32-ch10-quiz-compound",
    standardCode: "IAS 32",
    title: text("عرض الأداة المالية المركبة", "Presentation of a compound instrument"),
    facts: text("جهة إصدار أداة تتضمن التزامًا بالسداد وخيار تحويل مؤهلًا لحقوق الملكية.", "An issuer has an instrument with a repayment obligation and a qualifying equity conversion option."),
    question: text("كيف تُعرض مكونات الأداة المركبة أوليًا؟", "How are the compound instrument's components initially presented?"),
    solution: [
      text("يُفصل مكون الالتزام عن مكون حقوق الملكية. يُقاس الالتزام أولًا بالقيمة العادلة لالتزام مماثل بلا خيار تحويل مؤهل، ويُحدد مكون حقوق الملكية كباقي القيمة العادلة للأداة كلها بعد طرح مكون الالتزام. ثم يُعرضان منفصلين في قائمة المركز المالي؛ لا يُعاد تصنيفهما لمجرد تغير احتمال التحويل.", "Separate liability and equity. First measure the liability at the fair value of a comparable liability without the qualifying conversion option; assign the residual of the entire instrument's fair value to equity. Present both components separately in the statement of financial position; a changed likelihood of conversion alone does not reclassify them."),
    ],
    reference: "IAS 32.28–32",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-derecognition",
    standardCode: "IFRS 9",
    title: text("استبعاد أصل مالي", "Derecognition of a financial asset"),
    facts: text("سؤال عام عن انتهاء الحق أو نقل الأصل المالي لطرف آخر.", "A general question about expiry of rights or transfer of a financial asset."),
    question: text("متى يُستبعد الأصل المالي من قائمة المركز المالي؟", "When is a financial asset derecognised?"),
    solution: [
      text("يُستبعد عندما تنقضي الحقوق التعاقدية في تدفقاته النقدية، أو عندما يُنقل الأصل نقلًا يحقق شروط الاستبعاد. عند النقل تُختبر المخاطر والمنافع: نقل معظمها يحقق الاستبعاد، واحتفاظ المنشأة بمعظمها يمنعه؛ وإذا لم تنقل أو تحتفظ بمعظمها يُختبر انتقال السيطرة وقد يستمر الاعتراف بقدر الارتباط المستمر. لذلك لا يكفي مجرد توقيع عقد بيع أو تحويل التدفقات.", "Derecognise when contractual cash-flow rights expire or when a transfer qualifies. For a transfer, assess risks and rewards: transferring substantially all supports derecognition, retaining substantially all prevents it; if neither, assess control and possible continuing involvement. A sale agreement or cash-flow assignment alone is insufficient."),
    ],
    reference: "IFRS 9.3.2.3–3.2.6, 3.2.15–3.2.16",
  },
  {
    id: "ifrs-book2-ifrs9-ch10-quiz-initial-measurement",
    standardCode: "IFRS 9",
    title: text("القياس الأولي للأداة المالية", "Initial measurement of a financial instrument"),
    facts: text("سؤال عن أساس قياس الأصل أو الالتزام المالي عند الاعتراف الأول.", "A question on the initial measurement basis of a financial asset or liability."),
    question: text("كيف يُقاس الأصل أو الالتزام المالي مبدئيًا؟", "How is a financial asset or liability initially measured?"),
    solution: [
      text("الأصل العام هو القيمة العادلة. إذا لم تكن الأداة بالقيمة العادلة من خلال الربح أو الخسارة، تُضاف أو تُطرح تكاليف المعاملة المنسوبة مباشرة بحسب كونها أصلًا أو التزامًا. ولا تعني عبارة «بالتكلفة = القيمة العادلة» أن سعر الصفقة يساويها دائمًا؛ وقد تُقاس الذمم التجارية غير ذات التمويل المهم بسعر المعاملة وفق الاستثناء في IFRS 9 وIFRS 15.", "The general starting point is fair value. For an instrument not at fair value through profit or loss, add or subtract directly attributable transaction costs as appropriate for an asset or liability. 'Cost equals fair value' is not universally true: transaction price can differ from fair value, and eligible trade receivables without significant financing use their IFRS 15 transaction price under the specific exception."),
    ],
    reference: "IFRS 9.5.1.1–5.1.3",
  },
  {
    id: "ifrs-book2-ias19-ch9-quiz-categories",
    standardCode: "IAS 19",
    title: text("فئات منافع الموظفين", "Categories of employee benefits"),
    facts: text("سؤال يطلب الفئات الأربع في IAS 19.", "The question asks for the four IAS 19 benefit categories."),
    question: text("ما الفئات الأربع لمنافع الموظفين؟", "What are the four categories of employee benefits?"),
    solution: [
      text("منافع الموظفين قصيرة الأجل، ومنافع ما بعد انتهاء الخدمة، والمنافع طويلة الأجل الأخرى، ومنافع إنهاء الخدمة. تُصنف بحسب طبيعة المنفعة وتوقيت تسويتها وشروطها، وليس بحسب اسم البرنامج وحده.", "Short-term employee benefits, post-employment benefits, other long-term employee benefits, and termination benefits. Classification follows the benefit's substance, settlement timing and terms rather than the programme's label alone."),
    ],
    reference: "IAS 19.5, 8",
  },
  {
    id: "ifrs-book2-ias19-ch9-quiz-plan-types",
    standardCode: "IAS 19",
    title: text("خطة مساهمة محددة مقابل منفعة محددة", "Defined contribution versus defined benefit"),
    facts: text("سؤال يقارن نوعي خطط ما بعد انتهاء الخدمة.", "A question comparing the two types of post-employment plans."),
    question: text("ما الفرق الجوهري بين خطة المساهمة المحددة وخطة المنفعة المحددة؟", "What is the core difference between a defined contribution and a defined benefit plan?"),
    solution: [
      text("في خطة المساهمة المحددة تدفع المنشأة مساهمات ثابتة إلى صندوق منفصل ولا يكون عليها التزام قانوني أو ضمني بدفع المزيد إذا لم تكفِ أصول الصندوق. وأي خطة ما بعد خدمة غير ذلك تُعد منفعة محددة؛ تتحمل المنشأة فيها مخاطر اكتوارية أو استثمارية وتتطلب قياس التزام المنفعة وأصول الخطة وفق IAS 19.", "Under a defined contribution plan the entity pays fixed contributions into a separate fund and has no legal or constructive obligation to pay more if assets are insufficient. Any other post-employment plan is defined benefit; the entity bears actuarial or investment risk and measures the benefit obligation and plan assets under IAS 19."),
    ],
    reference: "IAS 19.27–30",
  },
  {
    id: "ifrs-book2-ias19-ch9-quiz-constructive-obligation",
    standardCode: "IAS 19",
    title: text("التزام ضمني بمنافع الموظفين", "Constructive employee-benefit obligation"),
    facts: text("تلتزم منشأة بممارسات سابقة أو سياسات معلنة تجاه الموظفين إضافة إلى شروط العقود.", "An entity has past practice or published policies towards employees in addition to contractual terms."),
    question: text("كيف يختلف الالتزام الضمني عن الالتزام القانوني في منافع الموظفين؟", "How does a constructive obligation differ from a legal one for employee benefits?"),
    solution: [
      text("ينشأ الالتزام القانوني من عقد أو قانون. أما الضمني فينشأ من سلوك المنشأة أو سياستها المعلنة التي أوجدت لدى الموظفين توقعًا صحيحًا بالوفاء، بحيث لا تملك بديلًا واقعيًا عن الدفع. عند قياس التزام المنفعة المحددة تؤخذ الالتزامات القانونية والضمنية معًا.", "A legal obligation arises from contract or law. A constructive obligation arises from the entity's actions or announced policy creating a valid employee expectation such that it has no realistic alternative to paying. Both legal and constructive obligations are included in measuring defined benefit obligations."),
    ],
    reference: "IAS 19.4, 61; IAS 37.10",
  },
  {
    id: "ifrs-book2-ias19-ch9-quiz-defined-benefit-expense",
    standardCode: "IAS 19",
    title: text("مكونات مصروف المنفعة المحددة", "Defined benefit cost in profit or loss"),
    facts: text("سؤال عن توزيع تكلفة خطة المنفعة المحددة بين الربح أو الخسارة والدخل الشامل الآخر.", "The question asks how defined benefit cost is split between profit or loss and other comprehensive income."),
    question: text("ما المكونات التي تُعترف عادةً في الربح أو الخسارة، وأين تذهب إعادة القياس؟", "Which components normally enter profit or loss, and where do remeasurements go?"),
    solution: [
      text("تُثبت تكلفة الخدمة، بما فيها الحالية والسابقة وأثر تقليص الخطة أو تسويتها، وصافي الفائدة على صافي التزام أو أصل المنفعة المحددة في الربح أو الخسارة، ما لم يوجب أو يسمح معيار آخر برسملة جزء ضمن تكلفة أصل. أما إعادة القياس، ومنها المكاسب والخسائر الاكتوارية وعائد أصول الخطة المستبعد من صافي الفائدة، فتُثبت في الدخل الشامل الآخر، ولا تدخل ضمن مصروف الفترة في الربح أو الخسارة. لا يُستخدم «العائد المتوقع» القديم أو ترحيل مكاسب اكتوارية معترف بها إلى الربح أو الخسارة.", "Recognise service cost—including current and past service cost and plan curtailment or settlement effects—and net interest on the net defined benefit liability or asset in profit or loss, unless another Standard requires or permits an amount in an asset's cost. Remeasurements, including actuarial gains/losses and plan-asset return outside net interest, go to other comprehensive income, not current profit-or-loss expense. Do not use the superseded expected-return or actuarial-gain recycling model."),
    ],
    reference: "IAS 19.57(c)–(d), 120–124, 127–130",
  },
  {
    id: "ifrs-book2-ias19-ch9-quiz-actuarial-gains",
    standardCode: "IAS 19",
    title: text("أسباب المكاسب والخسائر الاكتوارية", "Causes of actuarial gains and losses"),
    facts: text("سؤال عن تغير قياس التزام منافع محددة بين تاريخين.", "A question about changes in a defined benefit obligation between measurement dates."),
    question: text("ما الذي يسبب المكاسب أو الخسائر الاكتوارية؟", "What causes actuarial gains or losses?"),
    solution: [
      text("تنشأ من تعديلات الخبرة عندما تختلف النتائج الفعلية عما افترض سابقًا، ومن التغير في الافتراضات الديموغرافية أو المالية مثل دوران الموظفين أو الأجور أو معدل الخصم. تُعد جزءًا من إعادة قياس صافي التزام/أصل المنفعة المحددة وتُثبت في الدخل الشامل الآخر لخطة ما بعد الخدمة ذات المنفعة المحددة.", "They arise from experience adjustments when actual outcomes differ from prior assumptions, and from changes in demographic or financial assumptions such as turnover, salary growth or the discount rate. They are remeasurements of the net defined benefit liability or asset, recognised in other comprehensive income for post-employment defined benefit plans."),
    ],
    reference: "IAS 19.120(c), 127–129",
  },
  {
    id: "ifrs-book2-ias37-ch8-quiz-provision-definition",
    standardCode: "IAS 37",
    title: text("تعريف المخصص", "Definition of a provision"),
    facts: text("سؤال لإكمال تعريف المخصص.", "A fill-in question asking for the definition of a provision."),
    question: text("المخصص التزام غير مؤكد من أي ناحيتين؟", "A provision is a liability uncertain in which two respects?"),
    solution: [
      text("المخصص التزام غير مؤكد التوقيت أو المبلغ. لا يكفي مجرد عدم اليقين لإثباته: يجب وجود التزام حالي ناتج عن حدث سابق، ورجحان تدفق موارد للخارج، وإمكان تقدير المبلغ بموثوقية.", "A provision is a liability of uncertain timing or amount. Uncertainty alone is insufficient: recognition requires a present obligation from a past event, a probable outflow and a reliable estimate."),
    ],
    reference: "IAS 37.10, 14",
  },
  {
    id: "ifrs-book2-ias37-ch8-quiz-franchising-restructuring",
    standardCode: "IAS 37",
    title: text("تحويل سلسلة مطاعم إلى امتيازات", "Converting restaurants to franchises"),
    facts: text("أطلقت الإدارة برنامجًا لتحويل سلسلة مطاعم تملكها بالكامل إلى نظام امتيازات.", "Management undertakes a programme to convert a wholly owned restaurant chain into franchises."),
    question: text("هل يمثل التغيير إعادة هيكلة، وهل يكفي القرار وحده لإثبات مخصص؟", "Is this a restructuring, and does management's decision alone create a provision?"),
    solution: [
      text("نعم، قد يكون إعادة هيكلة لأنه يغير بصورة جوهرية طريقة ممارسة النشاط. لكن التصنيف لا ينشئ مخصصًا تلقائيًا: يلزم خطة رسمية مفصلة تنشئ توقعًا صحيحًا لدى المتأثرين ببدء التنفيذ أو إعلان السمات الرئيسية، مع استيفاء شروط المخصص العامة؛ ويقتصر المخصص على النفقات المباشرة الملازمة لإعادة الهيكلة لا تكاليف التشغيل المستقبلية.", "Yes, it can be a restructuring because it fundamentally changes how the business is conducted. Classification alone does not create a provision: a detailed formal plan must give those affected a valid expectation through implementation or announcement, and the general provision criteria must be met. Include only direct expenditures necessarily entailed by restructuring, not future operating costs."),
    ],
    reference: "IAS 37.14, 70–72, 80–82",
  },
  {
    id: "ifrs-book2-ias37-ch8-quiz-contingencies",
    standardCode: "IAS 37",
    title: text("الأصل والالتزام المحتملان", "Contingent asset and liability"),
    facts: text("سؤال لتعريف الأصل والالتزام المحتملين والتمييز بينهما.", "A definition question distinguishing contingent assets and liabilities."),
    question: text("عرّف الأصل المحتمل والالتزام المحتمل، واذكر قاعدة الاعتراف المختصرة.", "Define a contingent asset and contingent liability and state the basic recognition rule."),
    solution: [
      text("الأصل المحتمل أصل ممكن من حدث سابق لا يتأكد وجوده إلا بحدث مستقبلي غير خاضع بالكامل لسيطرة المنشأة. والالتزام المحتمل إما التزام ممكن مماثل، أو التزام حالي لا يُثبت لعدم رجحان التدفق الخارجي أو تعذر القياس الموثوق. لا يُثبت أي منهما كأصل أو التزام وفق IAS 37؛ يُفصح عن الأصل عند رجحان التدفق الداخل وعن الالتزام ما لم تكن فرصة التدفق الخارجي بعيدة. وإذا أصبح التدفق الداخل شبه مؤكد يخرج الأصل من وصف «محتمل» ويُعترف به.", "A contingent asset is a possible asset from a past event whose existence depends on uncertain future events not wholly within the entity's control. A contingent liability is either a similar possible obligation or a present obligation not recognised because outflow is not probable or reliable measurement is unavailable. Neither is recognised under IAS 37; disclose a contingent asset when inflow is probable and a contingent liability unless outflow is remote. A virtually certain inflow is no longer contingent and an asset is recognised."),
    ],
    reference: "IAS 37.10, 27–31, 33–34, 86, 89",
  },
  {
    id: "ifrs-book2-ias37-ch8-quiz-oilfield-decommissioning",
    standardCode: "IAS 37",
    title: text("تكلفة إزالة منشأة حقل نفط", "Oilfield decommissioning costs"),
    facts: text("ينشأ على المنشأة التزام بإزالة منشأة حقل نفط وإعادة الموقع إلى حالته.", "An entity incurs an obligation to decommission an oilfield installation and restore the site."),
    question: text("كيف تُثبت التكلفة والالتزام عند نشوئه؟", "How are the decommissioning cost and obligation initially recognised?"),
    solution: [
      text("يُثبت التزام إزالة/إعادة تأهيل وفق IAS 37 بأفضل تقدير، ويُخصم للقيمة الحالية عند جوهرية أثر الزمن. ويُضاف التقدير الأولي المؤهل إلى تكلفة أصل المنشأة وفق IAS 16 عندما ينشأ من اقتنائها أو إنشائها؛ ثم يُهلك جزء الأصل وتُعالج زيادة المخصص بمرور الزمن تكلفةَ تمويل. يختلف الحكم إذا نشأ الالتزام من استخدام الأصل لإنتاج مخزون في فترة لاحقة.", "Recognise the decommissioning/restoration obligation at the IAS 37 best estimate, discounted when time value is material. Add a qualifying initial estimate to the installation's cost under IAS 16 when arising from acquisition or construction, then depreciate that asset component and recognise unwinding of the provision as finance cost. An obligation arising from later use to produce inventory needs separate analysis."),
    ],
    reference: "IAS 37.14, 36, 45–47, 60; IAS 16.16(c); IFRIC 1",
  },
  {
    id: "ifrs-book2-ias37-ch8-quiz-overhaul",
    standardCode: "IAS 37",
    title: text("هل تُكوَّن مخصصات للعمرة الدورية؟", "Provision for a future major overhaul"),
    facts: text("تقترح المنشأة تجميع مخصص تدريجيًا خلال الفترة بين عمرتين رئيسيتين لمعدة.", "An entity proposes to accrue a provision over the period between two major equipment overhauls."),
    question: text("هل تكوين المخصص بهذه الطريقة صحيح؟", "Is that rolling accrual appropriate?"),
    solution: [
      text("لا. الإنفاق على عمرة مستقبلية لا ينشئ التزامًا حاليًا لمجرد استخدام المعدة؛ تستطيع المنشأة غالبًا تجنبه ببيع الأصل أو وقف تشغيله. لا تُكوَّن له مخصصات دورية دون حدث ملزم. إذا استوفت العمرة الفعلية شروط IAS 16 تُرسمل تكلفة الفحص/الاستبدال عند تنفيذها ويُلغى رصيد تكلفة الفحص السابق المتبقي، مع إهلاك المكوّن المناسب خلال الفترة المعنية.", "No. A future overhaul does not create a present obligation merely because equipment is used; the entity can generally avoid it by disposing of or ceasing to use the asset. Do not accrue a rolling provision without an obligating event. When a major inspection occurs and IAS 16 criteria are met, capitalise its cost as a replacement, derecognise the remaining previous inspection component and depreciate the appropriate component over its period."),
    ],
    reference: "IAS 37.18–19; IAS 16.13–14, 43–47",
  },
  {
    id: "ifrs-book2-ias38-ch7-quiz-recognition",
    standardCode: "IAS 38",
    title: text("شرطا الاعتراف بالأصل غير الملموس", "Intangible-asset recognition criteria"),
    facts: text("سؤال لإكمال شرطي الاعتراف الأساسيين للأصل غير الملموس.", "A fill-in question on two core recognition tests for an intangible asset."),
    question: text("ما الشرطان المتعلقان بالمنافع الاقتصادية والتكلفة؟", "What conditions concern future economic benefits and cost?"),
    solution: [
      text("يلزم رجحان تدفق المنافع الاقتصادية المستقبلية المنسوبة للأصل إلى المنشأة، وإمكان قياس تكلفته بصورة موثوقة، فضلًا عن تحقق تعريف الأصل غير الملموس وقواعد فئته. مجرد الإنفاق أو غياب الشكل المادي لا يكفيان للاعتراف.", "It must be probable that attributable future economic benefits will flow to the entity and that its cost can be measured reliably, in addition to meeting the intangible-asset definition and applicable category rules. Expenditure or lack of physical substance alone is insufficient."),
    ],
    reference: "IAS 38.8, 18–23",
  },
  {
    id: "ifrs-book2-ias38-ch7-quiz-development",
    standardCode: "IAS 38",
    title: text("شروط رسملة تكاليف التطوير", "Criteria for capitalising development expenditure"),
    facts: text("مشروع داخلي انتقل من البحث إلى مرحلة التطوير.", "An internal project has progressed from research to development."),
    question: text("ما الذي يجب إثباته قبل الاعتراف بإنفاق التطوير أصلًا؟", "What must be demonstrated before development expenditure is recognised as an asset?"),
    solution: [
      text("ستة شروط مجتمعة: الجدوى الفنية لإكمال الأصل؛ نية إكماله واستخدامه أو بيعه؛ القدرة على استخدامه أو بيعه؛ كيفية توليده منافع اقتصادية مستقبلية محتملة؛ توافر الموارد الفنية والمالية وغيرها للإكمال والاستخدام أو البيع؛ والقدرة على قياس الإنفاق المنسوب إليه بموثوقية. يُصرف البحث وما أُنفق قبل تحقق الشروط، ولا يُعاد رسملته لاحقًا لمجرد نجاح المشروع.", "All six must be demonstrated: technical feasibility to complete; intention to complete and use or sell; ability to use or sell; probable future economic benefits; adequate technical, financial and other resources; and reliable measurement of attributable expenditure. Research and expenditure incurred before the criteria are met are expensed and not reinstated merely because the project later succeeds."),
    ],
    reference: "IAS 38.54, 57, 65, 71",
  },
  {
    id: "ifrs-book2-ias38-ch7-quiz-start-up",
    standardCode: "IAS 38",
    title: text("مصروفات بدء النشاط", "Start-up expenditure"),
    facts: text("العبارة المطروحة: «يجب تحميل تكاليف بدء النشاط مصروفًا».", "The statement is: 'Start-up costs must be expensed.'"),
    question: text("هل العبارة صحيحة في إطار IAS 38؟", "Is the statement true under IAS 38?"),
    solution: [
      text("صحيحة في الأصل: تكاليف تأسيس المنشأة وافتتاح مرفق أو نشاط جديد تُثبت مصروفًا عند تكبدها، ولا تصبح أصلًا غير ملموس لمجرد توقع إيراد مستقبلي. الاستثناء أن تكون تكلفة مؤهلة لأصل آخر، مثل بند عقارات وآلات ومعدات وفق IAS 16، أو دفعة مقدمة لخدمة لم تُستلم بعد؛ فلا يُعمم الحكم خارج نطاقه.", "Generally yes: incorporation, pre-opening and pre-operating expenditure is expensed as incurred and is not an intangible asset merely because future revenue is expected. A cost may instead qualify as part of another asset, for example PPE under IAS 16, or as a prepayment for services not yet received; the rule is not absolute outside its scope."),
    ],
    reference: "IAS 38.68–70; IAS 16.16–17",
  },
  {
    id: "ifrs-book2-ifrs3-ch7-quiz-peggy-phil-goodwill",
    standardCode: "IFRS 3",
    title: text("حساب شهرة شراء نشاط فيل", "Goodwill in Peggy's purchase of Phil's business"),
    facts: text("اشترت بيجي نشاط فيل مقابل 30,000. القيم العادلة المعطاة: حانة 20,000، مخزون 3,000، ومدينون 3,000. لا يذكر السؤال التزامات أو حصصًا غير مسيطرة.", "Peggy bought Phil's business for 30,000. Given fair values are a bar 20,000, inventory 3,000 and receivables 3,000. The question identifies no liabilities or non-controlling interest."),
    question: text("كم تبلغ الشهرة وفق هذه المعطيات؟", "What is goodwill on the stated facts?"),
    solution: [
      text("صافي الأصول المحددة المعطاة = 20,000 + 3,000 + 3,000 = 26,000. بافتراض أن الصفقة تجميع أعمال وأن هذه كل الأصول والالتزامات ذات الصلة، الشهرة = 30,000 − 26,000 = 4,000. إذا ظهرت التزامات أو تعديلات قيمة عادلة أخرى تتغير النتيجة؛ لا نفترضها دون بيانات.", "Given identifiable net assets total 20,000 + 3,000 + 3,000 = 26,000. Assuming a business combination and that these are all relevant assets and liabilities, goodwill is 30,000 − 26,000 = 4,000. Additional liabilities or fair-value adjustments would change the result; none is supplied."),
    ],
    reference: "IFRS 3.10, 18, 32",
  },
  {
    id: "ifrs-book2-ifrs3-ch7-quiz-goodwill-subsequent",
    standardCode: "IFRS 3",
    title: text("المحاسبة اللاحقة عن شهرة التجميع", "Subsequent accounting for combination goodwill"),
    facts: text("سؤال عن الشهرة الناشئة عن تجميع أعمال بعد الاعتراف المبدئي.", "A question on goodwill arising from a business combination after initial recognition."),
    question: text("ما المعالجة المطلوبة للشهرة بعد تاريخ الاستحواذ؟", "How is goodwill accounted for after acquisition?"),
    solution: [
      text("تبقى الشهرة بالتكلفة بعد طرح خسائر هبوط القيمة المتراكمة؛ لا تُطفأ دوريًا. وتُخصص للوحدات المولدة للنقد أو مجموعاتها المتوقع استفادتها من التآزر، وتُختبر سنويًا للهبوط، وكذلك عند وجود مؤشر هبوط. الخسارة المثبتة للشهرة لا تُعكس لاحقًا.", "Goodwill is carried at cost less accumulated impairment losses, not amortised. Allocate it to the cash-generating units or groups expected to benefit from synergies, test it annually and when indicators arise, and never reverse a recognised goodwill impairment."),
    ],
    reference: "IFRS 3.32; IAS 36.80, 90, 124",
  },
  {
    id: "ifrs-book2-ifrs3-ch7-quiz-bargain-purchase",
    standardCode: "IFRS 3",
    title: text("مكسب الشراء بسعر منخفض", "Gain on a bargain purchase"),
    facts: text("بعد حساب تجميع أعمال، تظهر الأصول الصافية المحددة أكبر من مجموع المقابل وعناصر حصة المالكين ذات الصلة.", "A business-combination calculation indicates identifiable net assets exceed the consideration and relevant ownership components."),
    question: text("كيف يُعالج مكسب الشراء بسعر منخفض؟", "How is a gain on a bargain purchase accounted for?"),
    solution: [
      text("تُراجع المنشأة أولًا تحديد الأصول والالتزامات والحصة غير المسيطرة والمقابل وقياس كل منها؛ وإذا بقي الفرق بعد إعادة التقييم تُثبت مكسب الشراء بسعر منخفض فورًا في الربح أو الخسارة بتاريخ الاستحواذ. لا تُسجل «شهرة سالبة» مؤجلة.", "First reassess identification and measurement of acquired assets, assumed liabilities, non-controlling interest and consideration. If the excess remains, recognise the bargain-purchase gain immediately in profit or loss at the acquisition date; do not defer 'negative goodwill'."),
    ],
    reference: "IFRS 3.32–36",
  },
  {
    id: "ifrs-book2-ifrs16-ch6-quiz-definition",
    standardCode: "IFRS 16",
    title: text("متى يتضمن العقد إيجارًا؟", "When does a contract contain a lease?"),
    facts: text("سؤال لإكمال تعريف العقد الذي يتضمن إيجارًا.", "A fill-in question about the definition of a lease."),
    question: text("ما الحق الذي يجب أن يمنحه العقد، ومقابل ماذا؟", "What right must the contract convey, and in exchange for what?"),
    solution: [
      text("يكون العقد إيجارًا أو يتضمن إيجارًا إذا منح حق السيطرة على استخدام أصل محدد لفترة زمنية مقابل عوض. يتطلب ذلك، في الجوهر، حق الحصول على المنافع الاقتصادية من الاستخدام وحق توجيه كيفية استخدام الأصل والغرض منه ضمن حدود العقد.", "A contract is, or contains, a lease if it conveys the right to control the use of an identified asset for a period of time in exchange for consideration. In substance the customer must obtain substantially all economic benefits from use and have the right to direct its use within the contract's bounds."),
    ],
    reference: "IFRS 16.9, B9–B30",
  },
  {
    id: "ifrs-book2-ifrs16-ch6-quiz-initial-entry",
    standardCode: "IFRS 16",
    title: text("قيد بدء إيجار مرتفع القيمة", "Initial entry for a high-value lease"),
    facts: text("منشأة تستأجر أصلًا مرتفع القيمة لمدة خمس سنوات؛ لا ينطبق إعفاء الأصل منخفض القيمة.", "An entity leases a high-value asset for five years; the low-value exemption is unavailable."),
    question: text("ما القيد المبدئي لدى المستأجر عند بدء الإيجار؟", "What is the lessee's initial double entry at commencement?"),
    solution: [
      text("من حـ/ أصل حق الاستخدام، إلى حـ/ التزام الإيجار، وفق القياسين الأوليين في IFRS 16. هذا هو القيد الأساسي الذي يطلبه السؤال؛ قد تختلف قيمة أصل حق الاستخدام عن قيمة الالتزام إذا وجدت دفعات مقدمة أو حوافز أو تكاليف مباشرة أولية أو التزام بإزالة الأصل، ولا تُفترض هذه البنود دون معطيات.", "Debit right-of-use asset; credit lease liability, using the IFRS 16 initial measurements. This is the basic entry requested; the ROU asset may differ from the liability if prepayments, incentives, initial direct costs or restoration obligations exist, none of which is supplied here."),
    ],
    reference: "IFRS 16.22–28",
  },
  {
    id: "ifrs-book2-ifrs16-ch6-quiz-depreciation-term",
    standardCode: "IFRS 16",
    title: text("مدة إهلاك حق استخدام شاحنة", "ROU depreciation period for a lorry"),
    facts: text("العمر الاقتصادي الكلي للشاحنة ست سنوات، ومدة الإيجار خمس سنوات بلا خيار شراء، ويتوقع المستأجر الانتفاع بها أربع سنوات.", "A lorry has a six-year total economic life, a five-year lease with no purchase option, and an expected four-year period of benefit to the lessee."),
    question: text("على أي مدة يُهلك المستأجر أصل حق الاستخدام؟", "Over what period does the lessee depreciate the right-of-use asset?"),
    solution: [
      text("أربع سنوات: أقصر مدة الإيجار (خمس سنوات) والعمر النافع للمستأجر (أربع سنوات)، ما دام العقد لا ينقل الملكية ولا توجد ممارسة متوقعة بدرجة يقين معقول لخيار شراء. الست سنوات عمر الشاحنة الاقتصادي الكلي، وليست عمر حق الاستخدام لدى المستأجر في هذه الوقائع.", "Four years: the shorter of the five-year lease term and the four-year useful life to the lessee, because ownership does not transfer and there is no reasonably certain purchase option. The lorry's six-year total economic life is not the ROU asset's useful life for this lessee on these facts."),
    ],
    reference: "IFRS 16.29, 31–32; IAS 16.55",
  },
  {
    id: "ifrs-book2-ifrs16-ch6-quiz-tablet",
    standardCode: "IFRS 16",
    title: text("إيجار جهاز لوحي منخفض القيمة", "Low-value tablet lease"),
    facts: text("شركة تستأجر جهازًا لوحيًا منفصلًا يمكنها الانتفاع به وحده؛ لا يورد السؤال ثمنًا أو دفعات محددة.", "A company leases a stand-alone tablet computer; no price or payment schedule is supplied."),
    question: text("كيف يمكنها معالجة هذا الإيجار إذا كان الأصل منخفض القيمة عند كونه جديدًا؟", "How may it account for the lease if the underlying asset is low value when new?"),
    solution: [
      text("يجوز للمستأجر اختيار إعفاء الأصول منخفضة القيمة لكل إيجار مؤهل؛ وعند اختياره تُثبت دفعات الإيجار مصروفًا على أساس القسط الثابت خلال المدة أو أساس منتظم آخر أكثر تمثيلًا. لا يُفترض أن الإعفاء واجب أو أن كل جهاز لوحي مؤهل بصرف النظر عن قيمته الجديدة أو اعتماده على أصول أخرى؛ وإلا يُثبت أصل حق استخدام والتزام إيجار.", "The lessee may elect the low-value-asset exemption lease by lease. If elected, recognise lease payments as expense on a straight-line basis over the term or another systematic basis that better represents benefit. The exemption is optional and depends on the asset's value when new and its stand-alone use; otherwise recognise a ROU asset and lease liability."),
    ],
    reference: "IFRS 16.5–8, B3–B8",
  },
  {
    id: "ifrs-book2-ifrs16-ch6-quiz-sale-leaseback",
    standardCode: "IFRS 16",
    title: text("سعر بيع فوق القيمة العادلة مع إعادة الاستئجار", "Above-market sale and leaseback"),
    facts: text("بيع أصل ثم إعادة استئجاره، وسعر البيع المتفق عليه أعلى من القيمة العادلة.", "An asset is sold and leased back, and the agreed selling price exceeds fair value."),
    question: text("كيف يُعالج الجزء الذي يزيد عن القيمة العادلة إذا تحققت شروط البيع؟", "How is the excess above fair value treated if the transfer qualifies as a sale?"),
    solution: [
      text("يُعامل الجزء الزائد بوصفه تمويلًا إضافيًا قدمه المشتري-المؤجر إلى البائع-المستأجر، لا ربح بيع. ويُضبط مقابل البيع إلى القيمة العادلة وفق IFRS 16.101–102. أولًا يجب اختبار ما إذا كان نقل الأصل بيعًا وفق IFRS 15؛ إن لم يكن بيعًا فلا تطبق محاسبة البيع وإعادة الاستئجار هذه.", "Treat the above-market portion as additional financing provided by the buyer-lessor to the seller-lessee, not a sale gain, and adjust sale proceeds to fair value under IFRS 16.101–102. First assess whether transfer is a sale under IFRS 15; if not, sale-and-leaseback sale accounting does not apply."),
    ],
    reference: "IFRS 16.99–102",
  },
  {
    id: "ifrs-book2-ias36-ch5-quiz-recoverable-amount",
    standardCode: "IAS 36",
    title: text("تعريف المبلغ القابل للاسترداد", "Recoverable amount"),
    facts: text("سؤال تعريفي عن اختبار هبوط قيمة أصل.", "A definition question about testing an asset for impairment."),
    question: text("ما المبلغ القابل للاسترداد للأصل؟", "What is an asset's recoverable amount?"),
    solution: [
      text("هو الأعلى من القيمة العادلة مطروحًا منها تكاليف الاستبعاد والقيمة قيد الاستخدام. يُقارن بالقيمة الدفترية؛ وإذا تعذر تقديره للأصل منفردًا يُنظر إلى أصغر وحدة مولدة للنقد تحقق تدفقات مستقلة إلى حد كبير.", "It is the higher of fair value less costs of disposal and value in use. Compare it with the carrying amount; if it cannot be estimated for an individual asset, assess the smallest cash-generating unit with largely independent cash inflows."),
    ],
    reference: "IAS 36.6, 18, 66–67",
  },
  {
    id: "ifrs-book2-ias36-ch5-quiz-revalued-asset",
    standardCode: "IAS 36",
    title: text("هبوط قيمة أصل مُعاد تقييمه", "Impairment of a revalued asset"),
    facts: text("أصل مدرج بالمبلغ المعاد تقييمه أصابه هبوط قيمة.", "An asset carried at a revalued amount is impaired."),
    question: text("كيف يُعالج خسارة هبوط قيمته؟", "How is its impairment loss accounted for?"),
    solution: [
      text("تُعامل بوصفها انخفاضًا في إعادة التقييم وفق المعيار الحاكم للأصل: تُثبت في الدخل الشامل الآخر إلى حد رصيد فائض إعادة التقييم الخاص بالأصل، ويذهب ما زاد إلى الربح أو الخسارة. لا يجوز افتراض أن كل الخسارة تُحمّل تلقائيًا على فائض إعادة تقييم لأصول أخرى.", "Treat it as a revaluation decrease under the asset's applicable Standard: recognise it in other comprehensive income to the extent of that asset's existing revaluation surplus, and recognise any excess in profit or loss. Do not automatically charge the entire loss to a surplus relating to other assets."),
    ],
    reference: "IAS 36.60–61; IAS 16.40",
  },
  {
    id: "ifrs-book2-ias36-ch5-quiz-cgu-allocation",
    standardCode: "IAS 36",
    title: text("توزيع خسارة هبوط الوحدة المولدة للنقد", "Allocating a CGU impairment loss"),
    facts: text("وحدة مولدة للنقد تضم شهرة وأصولًا أخرى، وقد تظهر مؤشرات هبوط لأصل محدد داخلها.", "A cash-generating unit includes goodwill and other assets, and a specific asset within it may have its own impairment indicator."),
    question: text("ما ترتيب اختبار الهبوط وتوزيع خسارة الوحدة؟", "In what order are impairment testing and allocation performed for the unit?"),
    solution: [
      text("إذا أمكن اختبار أصل متضرر أو وحدة أصغر وظهرت مؤشرات هبوط، يُختبر أولًا وتُثبت خسارته الفردية قبل اختبار الوحدة الحاوية للشهرة. ثم تُوزع خسارة الوحدة أولًا على الشهرة المخصصة لها، وبعدها على الأصول الأخرى بنسبة قيمها الدفترية، مع عدم خفض أي أصل دون أعلى قيمته العادلة ناقص تكاليف الاستبعاد، وقيمته قيد الاستخدام إن أمكن تحديدها، والصفر. مجرد التلف لا يجعل خصمًا اعتباطيًا من أي أصل خطوة عامة تسبق اختبار قيمته.", "If an identifiable damaged asset or smaller unit has an impairment indicator and can be tested, test it and recognise its individual loss before testing the goodwill-containing unit. Allocate the remaining unit loss first to allocated goodwill, then pro rata to other assets based on carrying amounts, without reducing an asset below the highest of fair value less costs of disposal (if measurable), value in use (if determinable) and zero. Damage does not justify an arbitrary deduction without an individual impairment test."),
    ],
    reference: "IAS 36.97–98, 104–105",
  },
  {
    id: "ifrs-book2-ias36-ch5-quiz-reversal",
    standardCode: "IAS 36",
    title: text("شروط عكس هبوط القيمة", "When an impairment loss may be reversed"),
    facts: text("خسارة هبوط أُثبتت في فترة سابقة.", "An impairment loss was recognised in an earlier period."),
    question: text("متى يمكن عكس الخسارة، وهل يجوز عكس خسارة الشهرة؟", "When may the loss be reversed, and may goodwill impairment be reversed?"),
    solution: [
      text("يجوز عكس خسارة أصل غير الشهرة فقط عندما تتغير التقديرات المستخدمة لتحديد المبلغ القابل للاسترداد منذ إثبات آخر هبوط. يُقيد الرفع بالقيمة الدفترية التي كانت ستوجد لو لم يحدث الهبوط، بعد الإهلاك أو الإطفاء المحتمل. لا تُعكس خسارة الشهرة في فترة لاحقة؛ ومرور الزمن وحده لا يثبت تحسنًا يبرر العكس.", "An impairment loss for an asset other than goodwill is reversed only after a change in the estimates used to determine recoverable amount since the last loss. The increase is capped at the carrying amount that would have existed without impairment, net of any depreciation or amortisation. Goodwill impairment is never reversed in a subsequent period; the passage of time alone does not justify reversal."),
    ],
    reference: "IAS 36.110–117, 124",
  },
  {
    id: "ifrs-book2-ias36-ch5-quiz-reversal-amount",
    standardCode: "IAS 36",
    title: text("حساب الحد الأقصى لعكس الهبوط", "Calculating the reversal cap"),
    facts: text("أصل لا يُهلك قيمته الدفترية 300,000، هبط مبلغه القابل للاسترداد إلى 280,000، ثم ارتفع في الفترة اللاحقة إلى 310,000.", "A non-depreciable asset had a carrying amount of 300,000, was impaired to a recoverable amount of 280,000, and had a recoverable amount of 310,000 in the next period."),
    question: text("كم من خسارة الهبوط السابقة يمكن عكسه؟", "How much of the prior impairment loss may be reversed?"),
    solution: [
      text("الخسارة السابقة = 300,000 − 280,000 = 20,000. رغم ارتفاع المبلغ القابل للاسترداد إلى 310,000، لا تتجاوز القيمة الدفترية بعد العكس 300,000، لأنها القيمة التي كانت ستظهر دون الهبوط لأصل لا يُهلك؛ لذا يُعكس 20,000 فقط، ولا يُثبت 30,000 بوصفه عكسًا للهبوط.", "The previous loss was 300,000 − 280,000 = 20,000. Even though recoverable amount rose to 310,000, the post-reversal carrying amount cannot exceed 300,000—the amount that would have existed without impairment for this non-depreciable asset. Reverse only 20,000, not 30,000."),
    ],
    reference: "IAS 36.114, 117",
  },
  {
    id: "ifrs-book2-ias16-ch4-quiz-depreciation",
    standardCode: "IAS 16",
    title: text("تعريف الإهلاك", "Definition of depreciation"),
    facts: text("سؤال تعريفي عن أصل مادي ذي عمر نافع محدود.", "A definition question about a tangible asset with a limited useful life."),
    question: text("عرّف الإهلاك.", "Define depreciation."),
    solution: [
      text("الإهلاك هو التوزيع المنتظم للمبلغ القابل للإهلاك للأصل على مدى عمره النافع. والمبلغ القابل للإهلاك هو التكلفة، أو مبلغ بديل عنها، مطروحًا منه القيمة المتبقية. لا يمثل الإهلاك بالضرورة هبوط القيمة السوقية في كل فترة.", "Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life. The depreciable amount is cost, or an amount substituted for cost, less residual value. It is not necessarily the period's decline in market value."),
    ],
    reference: "IAS 16.6, 50",
  },
  {
    id: "ifrs-book2-ias16-binkie-revaluation-reversal",
    standardCode: "IAS 16",
    title: text("Binkie: ارتفاع أرض بعد خسارة إعادة تقييم", "Binkie: land increase after a revaluation loss"),
    facts: text(
      "بلغت تكلفة أرض Binkie أصلًا 15,000 دولار. قبل سنتين هبطت قيمتها إلى 13,000، فأثبتت المنشأة انخفاض إعادة التقييم البالغ 2,000 في الربح أو الخسارة. قيمتها العادلة الآن 20,000، ولم يرد تغير آخر يخص الأرض.",
      "Binkie's land originally cost $15,000. Two years ago its value fell to $13,000 and the $2,000 revaluation decrease was recognised in profit or loss. Its current fair value is $20,000, with no other change specified for this land.",
    ),
    question: text("كيف توزع زيادة إعادة التقييم الحالية وما القيد؟", "How is the current revaluation increase split and recorded?"),
    solution: [
      text("الزيادة الكلية = 20,000 − 13,000 = 7,000 دولار. يُرد في الربح أو الخسارة 2,000 بقدر الخسارة السابقة للأرض نفسها؛ وتعترف المنشأة بباقي الزيادة 5,000 في الدخل الشامل الآخر ويتراكم ضمن فائض إعادة التقييم.", "Total increase = $20,000 − $13,000 = $7,000. Recognise $2,000 in profit or loss to reverse the earlier loss on the same land; recognise the remaining $5,000 in other comprehensive income and accumulate it in revaluation surplus."),
      text("القيد: من حـ/ الأرض 7,000؛ إلى حـ/ ربح عكس انخفاض إعادة تقييم 2,000؛ وإلى حـ/ الدخل الشامل الآخر — فائض إعادة تقييم 5,000. لا تُحوّل الزيادة كلها إلى الإيراد.", "Entry: debit land $7,000; credit profit or loss—reversal of the earlier revaluation decrease $2,000; credit other comprehensive income—revaluation surplus $5,000. Do not take the entire increase to revenue."),
    ],
    reference: "IAS 16.39",
  },
  {
    id: "ifrs-book2-ias16-binkie-revaluation-decrease",
    standardCode: "IAS 16",
    title: text("Binkie: انخفاض أرض بعد فائض إعادة تقييم", "Binkie: land decrease after a revaluation surplus"),
    facts: text(
      "في حالة مستقلة، كلفت أرض 15,000 دولار ثم أعيد تقييمها قبل سنتين إلى 20,000 مع إثبات فائض 5,000 يخص الأرض نفسها. أصبحت قيمتها العادلة الآن 13,000، ولم يُستخدم الفائض في الفترة الفاصلة.",
      "In a separate scenario, land cost $15,000 and was revalued two years ago to $20,000, creating a $5,000 surplus for that same land. Its current fair value is $13,000 and that surplus has not been used in the intervening period.",
    ),
    question: text("كيف توزع خسارة إعادة التقييم الحالية وما القيد؟", "How is the current revaluation decrease split and recorded?"),
    solution: [
      text("الانخفاض الكلي = 20,000 − 13,000 = 7,000 دولار. يُخفض الدخل الشامل الآخر وفائض إعادة التقييم الخاص بالأرض بمبلغ 5,000؛ ويُعترف بالمتبقي 2,000 في الربح أو الخسارة.", "Total decrease = $20,000 − $13,000 = $7,000. Reduce other comprehensive income and this land's revaluation surplus by $5,000; recognise the remaining $2,000 in profit or loss."),
      text("القيد: من حـ/ الدخل الشامل الآخر — فائض إعادة تقييم 5,000، ومن حـ/ خسارة إعادة تقييم في الربح أو الخسارة 2,000؛ إلى حـ/ الأرض 7,000. لا تُقابل الخسارة بفائض أصل آخر.", "Entry: debit other comprehensive income—revaluation surplus $5,000 and profit or loss—revaluation loss $2,000; credit land $7,000. Do not offset the decrease against another asset's surplus."),
    ],
    reference: "IAS 16.40",
  },
  {
    id: "ifrs-book2-ias16-crinkle-revaluation-depreciation",
    standardCode: "IAS 16",
    title: text("Crinkle: إعادة التقييم والإهلاك اللاحق", "Crinkle: revaluation and subsequent depreciation"),
    facts: text(
      "اشترت Crinkle أصلًا في أول 20X6 بتكلفة 10,000 دولار وعمر نافع خمس سنوات. في 1 يناير 20X8، بعد سنتين من إهلاك القسط الثابت وبافتراض قيمة متبقية صفر، أعيد تقييمه إلى 12,000؛ بقي العمر النافع ثلاث سنوات.",
      "Crinkle bought an asset at the start of 20X6 for $10,000 with a five-year useful life. On 1 January 20X8, after two years of straight-line depreciation and assuming nil residual value, it was revalued to $12,000; three years of useful life remain.",
    ),
    question: text("احسب قيد إعادة التقييم وإهلاك 20X8 وما بعده، وبيّن كيف يمكن تحويل فائض الإهلاك المتحقق.", "Calculate the revaluation entry, depreciation from 20X8 and any permitted transfer of realised excess-depreciation surplus."),
    solution: [
      text("الإهلاك قبل إعادة التقييم = 10,000 ÷ 5 = 2,000 سنويًا؛ مجمع سنتين 4,000 والقيمة الدفترية في 1 يناير 20X8 هي 6,000. الزيادة إلى 12,000 = 6,000 فائض إعادة تقييم في الدخل الشامل الآخر، بافتراض عدم وجود خسارة سابقة للأصل.", "Pre-revaluation depreciation is $10,000 / 5 = $2,000 annually; two-year accumulated depreciation is $4,000 and 1 January 20X8 carrying amount is $6,000. The increase to $12,000 is $6,000 recognised in other comprehensive income as revaluation surplus, assuming no prior loss on this asset."),
      text("باستخدام أسلوب إلغاء المجمع في IAS 16.35: من حـ/ مجمع الإهلاك 4,000 ومن حـ/ الأصل 2,000؛ إلى حـ/ فائض إعادة التقييم 6,000. هذا أحد أساليب عرض المجمع المسموح بها، وليس معالجة إلزامية وحيدة.", "Using IAS 16.35's accumulated-depreciation elimination method: debit accumulated depreciation $4,000 and asset $2,000; credit revaluation surplus $6,000. This is one permitted presentation method, not the only required one."),
      text("إهلاك كل سنة من السنوات الثلاث ابتداءً من 20X8 = 12,000 ÷ 3 = 4,000 مقابل 2,000 على التكلفة السابقة. يجوز، لا يجب، تحويل فرق 2,000 سنويًا مباشرةً من الفائض إلى الأرباح المحتجزة؛ لا يمر التحويل في الربح أو الخسارة. يبقى مصروف الإهلاك 4,000 سنويًا.", "Depreciation each year from 20X8 for the three remaining years is $12,000 / 3 = $4,000, compared with $2,000 on original cost. The $2,000 annual excess may, but need not, be transferred directly from surplus to retained earnings; this transfer never passes through profit or loss. Depreciation expense remains $4,000 per year."),
    ],
    reference: "IAS 16.35, 39, 41, 50–55, 60",
  },
  {
    id: "ifrs-book2-ias16-ch4-quiz-production-cost",
    standardCode: "IAS 16",
    title: text("عناصر تكلفة أصل يُنشأ ذاتيًا", "Cost of a self-constructed asset"),
    facts: text("يعرض السؤال أربعة عناصر: شراء المواد الخام، أتعاب المهندس المعماري، رسوم الاستيراد، وتكاليف التركيب.", "The question lists four items: raw-material purchase price, architect fees, import duties, and installation costs."),
    question: text("أي العناصر الأربعة يمكن إدخاله في تكلفة إنتاج أصل غير متداول؟", "Which of these four items may form part of the production cost of a non-current asset?"),
    solution: [
      text("يمكن إدخال العناصر الأربعة متى ارتبطت مباشرة بإنشاء الأصل وتجهيزه للموقع والحالة اللازمين لتشغيله كما تنوي الإدارة: المواد المستهلكة في البناء، والأتعاب المهنية، ورسوم الاستيراد غير القابلة للاسترداد، والتركيب. لا تُرسمل مواد لم تُستخدم أو أتعاب عامة لا تخص الأصل؛ ويتوقف الرسملة عند جاهزية الأصل للاستخدام.", "All four can qualify when directly attributable to constructing the asset and bringing it to the location and condition needed for intended operation: materials consumed, professional fees, non-refundable import duties and installation. Unused materials or unrelated overhead are not capitalised; capitalisation stops when the asset is ready for use."),
    ],
    reference: "IAS 16.16–22",
  },
  {
    id: "ifrs-book2-ifrs13-ch4-quiz-market-value",
    standardCode: "IFRS 13",
    title: text("القيمة السوقية والقيمة العادلة", "Market value and fair value"),
    facts: text("العبارة المطروحة: «يمكن عادةً أخذ القيمة السوقية بوصفها قيمة عادلة».", "The statement is: 'Market value can usually be taken as fair value.'"),
    question: text("هل العبارة صحيحة؟ وما القيد المهم عند استخدام سعر السوق؟", "Is the statement true, and what qualification matters when using a market price?"),
    solution: [
      text("صحيحة على نحو مشروط: السعر المعلن لأصل أو التزام مطابق في سوق نشطة يمكن للمنشأة الوصول إليها عند تاريخ القياس هو عادةً أفضل دليل، ويستخدم دون تعديل إلا في استثناءات المعيار. أما أي «قيمة سوقية» عامة أو سعر صفقة غير منتظمة فلا يكفي وحده؛ القيمة العادلة سعر خروج في معاملة منتظمة بين مشاركين في السوق في السوق الرئيسي، أو الأكثر ملاءمة عند غيابه، وفق خصائص البند المقاس.", "Conditionally true: an unadjusted quoted price for an identical item in an active market accessible at the measurement date is normally the strongest evidence, subject to the Standard's exceptions. A generic 'market value' or a disorderly transaction price is not automatically fair value. Fair value is an exit price in an orderly transaction between market participants in the principal market, or the most advantageous market if none exists, considering the item's characteristics."),
    ],
    reference: "IFRS 13.24, 16–19, 69, 76–80",
  },
  {
    id: "ifrs-book2-ias40-ch4-quiz-cost-model",
    standardCode: "IAS 40",
    title: text("هل القيمة العادلة إلزامية للعقار الاستثماري؟", "Is fair value mandatory for investment property?"),
    facts: text("العبارة المطروحة: «يجب دائمًا عرض العقار الاستثماري بالقيمة العادلة».", "The statement is: 'Investment properties must always be shown at fair value.'"),
    question: text("هل العبارة صحيحة؟", "Is the statement true?"),
    solution: [
      text("لا. بعد الاعتراف الأولي تختار المنشأة سياسة القيمة العادلة أو نموذج التكلفة، وتطبق السياسة باتساق على عقاراتها الاستثمارية مع مراعاة استثناءات IAS 40. وفي نموذج التكلفة تُحدد القيمة العادلة للإفصاح وإن لم تكن هي القيمة الدفترية.", "No. After initial recognition an entity selects the fair value model or cost model as its accounting policy and applies it consistently to investment property, subject to IAS 40's exceptions. Under the cost model fair value is determined for disclosure even though carrying amount is cost-based."),
    ],
    reference: "IAS 40.30, 32, 35, 56, 75",
  },
  {
    id: "ifrs-book2-ias40-ch4-quiz-under-construction",
    standardCode: "IAS 40",
    title: text("عقار تحت الإنشاء للاستثمار", "Investment property under construction"),
    facts: text("عقار يُبنى بقصد تأجيره أو الاحتفاظ به لزيادة قيمته مستقبلًا.", "A property is being constructed for future rental income or capital appreciation."),
    question: text("ما المعيار الذي يحكم العقار أثناء الإنشاء إذا كان استخدامه المستقبلي عقارًا استثماريًا؟", "Which Standard governs property under construction for future use as investment property?"),
    solution: [
      text("يدخل ضمن العقار الاستثماري في IAS 40 منذ الإنشاء إذا كان الغرض المثبت هو التأجير أو زيادة القيمة، وليس ضمن عقارات التشغيل في IAS 16 لمجرد أنه لم يكتمل. يبدأ القياس بالتكلفة، ثم تطبق سياسة القياس اللاحق المختارة؛ ويمكن أن تنطبق أحكام IAS 40 الخاصة بعدم إمكان قياس القيمة العادلة بصورة موثوقة أثناء الإنشاء.", "It is within IAS 40 while under construction when its intended use is to earn rentals or capital appreciation; incompleteness alone does not make it owner-occupied PPE under IAS 16. Initial measurement is at cost, followed by the selected subsequent-measurement policy, with IAS 40's special rules if fair value cannot yet be measured reliably during construction."),
    ],
    reference: "IAS 40.8(e), 20, 30, 53A–53B",
  },
  {
    id: "ifrs-book2-ifrs15-ch3-quiz-output-methods",
    standardCode: "IFRS 15",
    title: text("قياس التقدم بطريقة المخرجات", "Output methods for measuring progress"),
    facts: text("سؤال قصير عن التزام أداء يستوفى على مدى الزمن.", "A short question about a performance obligation satisfied over time."),
    question: text("ما المقصود بطرق المخرجات لقياس استيفاء التزام الأداء؟", "What are output methods of measuring satisfaction of a performance obligation?"),
    solution: [
      text(
        "تقيس طريقة المخرجات قيمة السلع أو الخدمات التي انتقلت إلى العميل حتى تاريخه مقارنة بما تبقى في العقد، متى صوّرت تقدم الأداء بأمانة. من أمثلتها معاينة العمل المنجز، أو الوحدات المنتجة أو المسلّمة، أو مراحل الإنجاز المتحققة؛ لا يكفي عدد الوحدات إذا لم يمثّل نقل السيطرة. تستخدم فقط عندما يستوفى الالتزام على مدى الزمن وتُقاس نسبة الإنجاز بصورة معقولة.",
        "An output method measures the value to the customer of goods or services transferred to date relative to those remaining, when it faithfully depicts performance. Examples include surveys of work performed, units produced or delivered and milestones reached; a unit count is inappropriate if it does not represent transfer of control. It applies to an over-time obligation when progress can be reasonably measured.",
      ),
    ],
    reference: "IFRS 15.35, 39–42, B14–B15",
  },
  {
    id: "ifrs-book2-ifrs15-ch3-quiz-point-or-over-time",
    standardCode: "IFRS 15",
    title: text("توقيت استيفاء التزام الأداء", "Point-in-time or over-time satisfaction"),
    facts: text("السؤال يطلب التمييز بين نمطي الوفاء في عقود العملاء.", "The question distinguishes the two patterns of satisfying customer promises."),
    question: text("ما نمطا استيفاء التزامات الأداء في IFRS 15؟", "What are the two patterns of satisfying performance obligations under IFRS 15?"),
    solution: [
      text(
        "التمييز يخص التزام الأداء لا مجرد اسم العقد: قد تنتقل السيطرة في نقطة زمنية محددة، أو يستوفى الوعد على مدى الزمن إذا تحقق أحد اختبارات الفقرة 35. قد يتضمن عقد واحد أكثر من التزام ولكل منها نمط مختلف؛ يحدد ذلك قبل قياس الإيراد.",
        "The distinction concerns each performance obligation, not merely the contract label: control can pass at a point in time or the promise can be satisfied over time if one of paragraph 35's criteria is met. A single contract may contain obligations with different patterns; determine the pattern before measuring revenue.",
      ),
    ],
    reference: "IFRS 15.22–23, 35, 38",
  },
  {
    id: "ifrs-book2-ifrs15-ch3-quiz-control",
    standardCode: "IFRS 15",
    title: text("شرط الاعتراف بإيراد العقد", "Control and revenue recognition"),
    facts: text("سؤال عن النقل الذي يسبق الاعتراف بالإيراد.", "A question about the transfer underlying revenue recognition."),
    question: text("ما الذي يجب نقله إلى العميل قبل إثبات الإيراد؟", "What must transfer to the customer before revenue is recognised?"),
    solution: [
      text(
        "تعترف المنشأة بالإيراد عندما أو كلما تستوفي التزام الأداء بنقل السيطرة على السلعة أو الخدمة الموعودة إلى العميل. التسليم المادي أو الفاتورة أو انتقال المخاطر قد تكون مؤشرات، لكنها لا تحل منفردة محل اختبار السيطرة.",
        "An entity recognises revenue when or as it satisfies a performance obligation by transferring control of the promised good or service to the customer. Physical delivery, invoicing or transfer of risks may be indicators but do not individually replace the control assessment.",
      ),
    ],
    reference: "IFRS 15.31–34, 38",
  },
  {
    id: "ifrs-book2-ifrs15-ch3-quiz-repurchase",
    standardCode: "IFRS 15",
    title: text("معنى اتفاق إعادة الشراء", "Meaning of a repurchase agreement"),
    facts: text("السؤال يطلب تعريفًا دون أسعار أو شروط عقدية أخرى.", "The question asks for a definition without prices or other contractual terms."),
    question: text("ما اتفاق إعادة الشراء؟", "What is a repurchase agreement?"),
    solution: [
      text(
        "هو ترتيب تبيع فيه المنشأة أصلًا وتَعِد أو تمتلك حقًا في إعادة شرائه، سواء في العقد نفسه أو عقد آخر. قد يكون الأصل نفسه أو أصلًا مماثلًا جوهريًا. لا يعني وجود فاتورة بيع اعترافًا فوريًا بالإيراد: يختلف الحكم بين التزام/خيار البائع وخيار العميل، وبين إعادة الشراء دون سعر البيع أو عنده أو فوقه؛ وتُراجع شروط IFRS 15 قبل التكييف.",
        "It is an arrangement in which an entity sells an asset and also promises or has an option to repurchase it, in the same or another contract; the asset may be the same or substantially similar. A sale invoice does not automatically establish revenue: accounting depends on whether the entity or customer holds the right and on the repurchase-price terms under IFRS 15.",
      ),
    ],
    reference: "IFRS 15.B64–B76",
  },
  {
    id: "ifrs-book2-ifrs15-ch3-quiz-five-steps",
    standardCode: "IFRS 15",
    title: text("خطوات نموذج الإيراد الخمس", "The five-step revenue model"),
    facts: text("السؤال يطلب ترتيب خطوات الاعتراف بإيراد عقود العملاء.", "The question asks for the ordered steps for customer-contract revenue."),
    question: text("اذكر خطوات نموذج الإيراد الخمس في IFRS 15.", "List the five steps of the IFRS 15 revenue model."),
    solution: [
      text(
        "1) حدد العقد مع العميل؛ 2) حدد التزامات الأداء المتميزة؛ 3) حدد سعر المعاملة؛ 4) وزع السعر على الالتزامات بحسب أسعار البيع المستقلة النسبية؛ 5) اعترف بالإيراد عندما أو كلما استوفيت كل التزام بنقل السيطرة. تحديد الخطوات لا يغني عن تقدير المقابل المتغير أو اختبار تعديل العقد عندما ينطبقان.",
        "1) Identify the customer contract; 2) identify distinct performance obligations; 3) determine the transaction price; 4) allocate it to obligations using relative stand-alone selling prices; 5) recognise revenue when or as each obligation is satisfied by transferring control. The outline does not remove the need to assess variable consideration or contract modifications when relevant.",
      ),
    ],
    reference: "IFRS 15.9, 22–30, 47, 73–86, 31–38",
  },
  {
    id: "ifrs-book2-ifrs11-ch24-joint-operation-examples",
    standardCode: "IFRS 11",
    title: text("أمثلة على العملية المشتركة", "Examples of a joint operation"),
    facts: text(
      "يسأل الفصل عن مواقف قد تنشأ فيها عملية مشتركة وفق IFRS 11.",
      "The chapter asks for situations in which an IFRS 11 joint operation might arise.",
    ),
    question: text(
      "اذكر أمثلة لمواقف قد ينشأ فيها هذا النوع من الترتيبات المشتركة.",
      "Can you think of examples of situations where this type of joint arrangement might take place?",
    ),
    solution: [
      text(
        "قد تتفق شركات استخراج النفط أو الغاز أو المعادن على تشغيل خط أنابيب مشترك؛ تنقل كل شركة إنتاجها وتتحمل نصيبها التعاقدي من تكاليف التشغيل. وقد تُشغّل أطراف عقارًا تملكه على نحو مشترك، فتتقاسم إيراد الإيجار والمصروفات وفق الاتفاق.",
        "Oil, gas or mineral-extraction companies may jointly operate a pipeline, each transporting its output and bearing an agreed share of operating costs. Parties may also operate jointly held property and share rental income and expenses under their agreement.",
      ),
      text(
        "هذه أمثلة محتملة وليست تصنيفًا تلقائيًا: لا بد من إثبات السيطرة المشتركة وحقوق الأطراف المباشرة في الأصول والتزاماتها عن الخصوم. إن اقتصر حقها على صافي أصول منشأة منفصلة، فالترتيب مشروع مشترك لا عملية مشتركة.",
        "These are possible examples, not automatic classifications: establish joint control and the parties' direct rights to assets and obligations for liabilities. If their rights are only to the net assets of a separate vehicle, the arrangement is a joint venture instead.",
      ),
    ],
    reference: "IFRS 11.7, 15–20, B16–B21",
  },
  {
    id: "ifrs-book2-ifrs11-ch24-quiz-1-joint-venture-definition",
    standardCode: "IFRS 11",
    title: text("تعريف المشروع المشترك", "Definition of a joint venture"),
    facts: text("أكمل تعريف المشروع المشترك في IFRS 11.", "Complete the IFRS 11 definition of a joint venture."),
    question: text("المشروع المشترك ترتيب مشترك يكون للأطراف التي تتمتع بـ____ على الترتيب حقوق في ____ الترتيب. ما الكلمتان الناقصتان؟", "A joint venture is a joint arrangement whereby the parties that have ____ of the arrangement have rights to the ____ of the arrangement. Fill in the blanks."),
    solution: [
      text("الكلمتان هما «سيطرة مشتركة» و«صافي أصول». ليست ملكية نسبة من الأصول الفردية أو تحمل نسبة من الالتزامات هي السمة الحاسمة للمشروع المشترك.", "The missing terms are “joint control” and “net assets”. Direct rights to individual assets and obligations for liabilities instead characterise a joint operation."),
    ],
    reference: "IFRS 11.4, 16, Appendix A",
  },
  {
    id: "ifrs-book2-ifrs11-ch24-quiz-2-joint-operation-accounting",
    standardCode: "IFRS 11",
    title: text("حصة المشغّل المشترك في العملية المشتركة", "Joint operator's interest in a joint operation"),
    facts: text("لدى المنشأة حصة في ترتيب صُنّف عملية مشتركة، وهي أحد المشغّلين المشتركين.", "An entity is a joint operator in an arrangement classified as a joint operation."),
    question: text("كيف يُحاسب المشغّل عن حصته في العملية المشتركة؟", "How should a joint operator account for its interest in a joint operation?"),
    solution: [
      text("يعترف المشغّل بأصوله، بما فيها حصته في الأصول المحتفظ بها بصورة مشتركة؛ وبالتزاماته، بما فيها حصته في الالتزامات المتكبدة بصورة مشتركة.", "The joint operator recognises its assets, including its share of assets held jointly, and its liabilities, including its share of liabilities incurred jointly."),
      text("ويعترف بإيراد بيع حصته من مخرجات العملية، وحصته في إيراد بيع المخرجات بواسطة العملية المشتركة، ومصروفاته بما فيها حصته في المصروفات المتكبدة بصورة مشتركة. تُحدد الحصص وفق الحقوق والالتزامات التعاقدية، لا بنسبة الملكية آليًا.", "It also recognises revenue from selling its share of output, its share of revenue from output sold by the joint operation, and its expenses including its share of jointly incurred expenses. The allocation follows contractual rights and obligations, not an automatic ownership percentage."),
    ],
    reference: "IFRS 11.20–22",
  },
  {
    id: "ifrs-book2-ifrs11-ch24-quiz-3-joint-venture-equity-method",
    standardCode: "IFRS 11",
    title: text("المحاسبة عن حصة المشروع المشترك", "Accounting for an interest in a joint venture"),
    facts: text("المنشأة طرف يتمتع بسيطرة مشتركة، وتصنيف الترتيب مشروع مشترك.", "An entity has joint control and the arrangement is classified as a joint venture."),
    question: text("كيف تُحاسب المنشأة عن حصتها في المشروع المشترك؟", "How should the entity account for its interest in the joint venture?"),
    solution: [
      text("تعترف بالحصة استثمارًا وتطبق طريقة حقوق الملكية بموجب IAS 28، ما لم ينطبق استثناء محدد من تلك الطريقة. لا تضم كل أصل والتزام للمشروع المشترك سطرًا بسطر كما في العملية المشتركة.", "It recognises the interest as an investment and applies the equity method under IAS 28, unless a specified exemption applies. It does not line-by-line recognise the venture's assets and liabilities as for a joint operation."),
      text("إذا كان المطلوب قوائم مالية منفصلة، فيرجع قياس الحصة إلى خيارات IAS 27 بدل افتراض أن طريقة حقوق الملكية إلزامية في كل قائمة.", "For separate financial statements, the interest is accounted for under the options in IAS 27; the equity method should not be assumed mandatory for every set of statements."),
    ],
    reference: "IFRS 11.24, 26; IAS 28.16; IAS 27.10",
  },
  {
    id: "ifrs-book2-ifrs11-ch24-quiz-4-separate-vehicle",
    standardCode: "IFRS 11",
    title: text("هل تعني المنشأة المنفصلة مشروعًا مشتركًا دائمًا؟", "Does a separate vehicle always mean a joint venture?"),
    facts: text("صُمم ترتيب مشترك عبر منشأة منفصلة.", "A joint arrangement is structured through a separate vehicle."),
    question: text("هل يصبح الترتيب دائمًا مشروعًا مشتركًا لمجرد وجود منشأة منفصلة؟ صح أم خطأ؟", "A joint arrangement structured through a separate vehicle will always be a joint venture. True or false?"),
    solution: [
      text("خطأ. قد يكون الترتيب عملية مشتركة أو مشروعًا مشتركًا. يُفحص الشكل القانوني للمنشأة وشروط العقد، وعند اللزوم الوقائع والظروف الأخرى، لتحديد ما إذا كانت للأطراف حقوق مباشرة في الأصول والتزامات عن الخصوم أم حقوق في صافي الأصول فقط.", "False. The arrangement can be a joint operation or joint venture. Assess the vehicle's legal form, contractual terms and, when relevant, other facts and circumstances to determine whether the parties have direct rights to assets and obligations for liabilities or rights only to net assets."),
    ],
    reference: "IFRS 11.B19–B33",
  },
  {
    id: "ifrs-book2-ias28-ch24-quiz-5-downstream-gains",
    standardCode: "IAS 28",
    title: text("ربح بيع أصل من المستثمر إلى مشروعه المشترك", "Gain on a downstream sale to a joint venture"),
    facts: text("باع المستثمر أصلًا لا يشكل نشاط أعمال إلى مشروع مشترك يُحاسب عنه بطريقة حقوق الملكية. يطلب السؤال معالجة أرباح معاملات المصب؛ أي انتقال الأصل من المستثمر إلى المشروع المشترك.", "An investor sells an asset that is not a business to its equity-accounted joint venture. The question concerns a downstream transaction—an asset moving from the investor to the joint venture."),
    question: text("كيف تُعالج أرباح معاملة المصب مع المشروع المشترك في قوائم المستثمر؟", "How should the investor account for gains on the downstream transaction with its joint venture?"),
    solution: [
      text("يعترف المستثمر بالربح فقط بقدر حصص المستثمرين غير المرتبطين به في المشروع المشترك، ويلغي/يؤجل حصته هو من الربح غير المحقق أثناء بقاء الأصل داخل المشروع. ويُعترف بالجزء المؤجل عند تحققه لاحقًا بحسب طبيعة الأصل.", "The investor recognises the gain only to the extent of unrelated investors' interests in the joint venture and eliminates or defers its own share of the unrealised gain while the asset remains in the venture. The deferred element is recognised when it is subsequently realised, according to the nature of the asset."),
      text("هذه معالجة البيع من المستثمر إلى المشروع المشترك؛ أما شراء المستثمر أصلًا من المشروع فهو معاملة منبع مختلفة. وإذا دلّت خسارة المصب على انخفاض صافي القيمة القابلة للتحقق أو اضمحلال الأصل، تُعترف الخسارة ذات الصلة بالكامل وفق IAS 28.", "This is the treatment of a sale from investor to joint venture; a purchase by the investor from the venture is a distinct upstream transaction. A downstream loss evidencing reduced net realisable value or impairment is recognised in full under IAS 28."),
    ],
    reference: "IAS 28.28–29",
  },
  {
    id: "ifrs-book2-ifrs11-shopping-centre-x-classification",
    standardCode: "IFRS 11",
    title: text("المركز التجاري X: عملية مشتركة أم مشروع مشترك؟", "Shopping centre X: joint operation or joint venture?"),
    facts: text(
      "أسست شركتان عقاريتان منشأة منفصلة X لاقتناء مركز تجاري وتشغيله. يمنح العقد الطرفين سيطرة مشتركة على الأنشطة ذات الصلة؛ وتشمل أنشطة X تأجير الوحدات وإدارة المواقف وصيانة المركز ومعداته وتنمية قاعدة العملاء. يملك X المركز باسمه وله حقوق الأصول والتزامات الديون وفق شكله القانوني. لا يمنح العقد الشركتين حقًا مباشرًا في المركز، ولا يلزمهما بسداد ديون X للدائنين؛ يقتصر تعرض كل طرف للدائنين على مساهمته الرأسمالية غير المسددة. يستطيع كل طرف بيع حصته في X أو رهنها، ويتلقى نصيبًا من دخل تشغيل المركز بعد المصروفات بحسب حصته.",
      "Two real estate companies form a separate entity, X, to acquire and operate a shopping centre. Their contract gives both parties joint control of the relevant activities, including letting retail units, managing parking, maintaining the centre and its equipment and developing its customer base. Under its legal form X owns the centre and holds the rights to assets and obligations for its debts. The contract gives the parties no direct right to the centre and does not make them liable to X's creditors beyond their unpaid capital contributions. Each party may sell or pledge its interest in X and receives a share of net operating income in proportion to that interest."
    ),
    question: text(
      "كيف تُصنف المنشأة X وفق IFRS 11؟",
      "How is entity X classified under IFRS 11?"
    ),
    solution: [
      text(
        "توجد سيطرة مشتركة تعاقدية؛ لكن وجود منشأة منفصلة لا يحدد التصنيف وحده. يُختبر الشكل القانوني والعقد والوقائع الأخرى لمعرفة هل للشركتين حقوق مباشرة في أصول الترتيب والتزامات مباشرة بخصومه، أم حقوق في صافي أصول X فقط.",
        "There is contractually agreed joint control, but the separate vehicle alone does not determine classification. Assess its legal form, contractual terms and other facts to decide whether the parties have direct rights to arrangement assets and direct obligations for liabilities, or rights only to X's net assets."
      ),
      text(
        "X، لا الشركتان، يملك المركز ويلتزم بديونه. لم ينقل العقد حقوق المركز أو التزامات دائنيه مباشرة إلى الشركتين؛ وحصر مطالبة الدائنين في مساهمة رأسمالية غير مسددة لا يحوّل كل ديون X إلى ديون مباشرة على الطرفين. حق كل طرف في بيع حصته والحصول على جزء من صافي الدخل يتسق مع حق في صافي أصول X.",
        "X, not the parties, owns the centre and owes its debts. The contract does not transfer rights in the centre or obligations to its creditors directly to the parties; exposure limited to unpaid capital does not make every X liability a direct liability of the parties. Each party's transferable interest and share of net income are consistent with rights to X's net assets."
      ),
      text(
        "لذلك تُصنف X مشروعًا مشتركًا، لا عملية مشتركة، في الوقائع المعطاة. يحاسب كل طرف ذي سيطرة مشتركة عن استثماره بطريقة حقوق الملكية وفق IAS 28 في قوائمه التي تطبق IFRS 11، ما لم ينطبق استثناء محدد؛ فلا يسجل تلقائيًا نسبة من مبنى المركز وقروض X وإيراد الإيجارات ومصاريف التشغيل بندًا ببند.",
        "On these facts X is a joint venture, not a joint operation. Each party with joint control accounts for its investment using the IAS 28 equity method in statements applying IFRS 11, subject to any specific exemption; it does not automatically recognise a proportional slice of the centre building, X's borrowings, rental revenue and operating costs line by line."
      ),
      text(
        "لا يكفي توزيع دخل التشغيل بنسبة الملكية لإثبات عملية مشتركة؛ المعيار الحاسم هو الحقوق في الأصول والالتزامات تجاه الخصوم. لو تغيرت الشروط لتمنح الطرفين تلك الحقوق والالتزامات مباشرة، وجب إعادة تقييم التصنيف بدل الاعتماد على اسم X أو شكله وحده.",
        "Sharing operating income in ownership proportions is not enough to establish a joint operation; the decisive test is rights to assets and obligations for liabilities. If terms changed to grant those direct rights and obligations, reassess classification rather than relying on X's name or form alone."
      )
    ],
    reference: "IFRS 11.4–7, 14–16, 20, 24, B15–B21, B25–B33; IAS 28.16",
  },

  {
    id: "ifrs-book2-ifrs10-j-p-s-group-position",
    standardCode: "IFRS 10",
    title: text("J وP وS: مركز مالي موحد يجمع تابعة وزميلة", "J, P and S: consolidated position with a subsidiary and an associate"),
    facts: text(
      "جميع الأرقام بالألف دولار في 31 ديسمبر 20X5. أرصدة J: عقارات 1,950، آلات 795، استثمارات 1,500، مخزون 575، ذمم مدينة 330، نقد 50؛ رأس مال 2,000، أرباح محتجزة 1,460، سندات قرض 500، ذمم دائنة 680، سحب بنكي 560. أرصدة P: عقارات 1,250، آلات 375، مخزون 300، ذمم مدينة 290، نقد 120؛ رأس مال 1,000، أرباح محتجزة 885، سندات قرض 100، ذمم دائنة 350. أرصدة S: عقارات 500، آلات 285، مخزون 265، ذمم مدينة 370، نقد 20؛ رأس مال 750، أرباح محتجزة 390، ذمم دائنة 300.",
      "All figures are US$ thousands at 31 December 20X5. J balances: property 1,950, plant 795, investments 1,500, inventory 575, receivables 330, cash 50; share capital 2,000, retained earnings 1,460, loan stock 500, payables 680, overdraft 560. P balances: property 1,250, plant 375, inventory 300, receivables 290, cash 120; share capital 1,000, retained earnings 885, loan stock 100, payables 350. S balances: property 500, plant 285, inventory 265, receivables 370, cash 20; share capital 750, retained earnings 390 and payables 300."
    ),
    question: text(
      "أعد قائمة المركز المالي الموحدة لمجموعة J في 31 ديسمبر 20X5 بعد مراعاة الاقتناء وفرق القيمة العادلة وربحي المخزون غير المحققين والانخفاض في القيمة.",
      "Prepare J group's consolidated statement of financial position at 31 December 20X5, allowing for acquisition, the fair-value uplift, both unrealised inventory profits and impairment."
    ),
    solution: [
      text(
        "هيكل المجموعة: اشترت J في 1 يناير 20X0 عدد 600,000 من أصل مليون سهم في P مقابل 1,000؛ أي 60%، مع افتراض أن الأسهم تمنح السيطرة، فتُوحَّد P بالكامل وتعرض حصة غير مسيطرة 40%. كانت أرباح P المحتجزة عند الاقتناء 200. واشترت J في 1 يناير 20X4 عدد 225,000 من أصل 750,000 سهم في S مقابل 500؛ أي 30%، مع افتراض التأثير المهم، فتُحاسب S زميلة بطريقة حقوق الملكية لا بتجميع أصولها والتزاماتها.",
        "Group structure: on 1 January 20X0 J acquired 600,000 of P's one million shares for 1,000 (60%). Assuming these shares convey control, consolidate all of P and report 40% NCI. P's acquisition-date retained earnings were 200. On 1 January 20X4 J acquired 225,000 of S's 750,000 shares for 500 (30%). Assuming significant influence, equity-account S as an associate rather than adding its assets and liabilities line by line."
      ),
      text(
        "عند اقتناء P زادت القيمة العادلة لعقارها 400. خُصص نصف الفرق للمبنى القابل للإهلاك؛ كان عمر العقار الأصلي 50 سنة من يناير 20W0، وبقي منه 40 سنة في يناير 20X0. الإهلاك الإضافي السنوي = 400 × 50% ÷ 40 = 5، وعن ست سنوات 20X0–20X5 = 30. فرق القيمة الباقي 370، فتكون العقارات الموحدة = 1,950 + 1,250 + 370 = 3,570، والآلات = 795 + 375 = 1,170.",
        "At P's acquisition its property fair value exceeded carrying amount by 400. Half of the uplift relates to depreciable buildings; the property originally had a 50-year life from January 20W0, leaving 40 years in January 20X0. Additional annual depreciation = 400 × 50% ÷ 40 = 5, or 30 over 20X0–20X5. The remaining uplift is 370, so consolidated property = 1,950 + 1,250 + 370 = 3,570 and plant = 795 + 375 = 1,170."
      ),
      text(
        "قِيست حصة غير المسيطرين في P بالقيمة العادلة: 400,000 سهم × 1.60 دولار = 640. صافي الأصول المحددة عند الاقتناء = رأس مال 1,000 + أرباح محتجزة 200 + فرق قيمة عادلة 400 = 1,600؛ الشهرة المعترف بها = مقابل 1,000 + حصة غير مسيطرة 640 − 1,600 = 40. نصت الوقائع على انخفاض هذه الشهرة بالكامل، فيصبح رصيدها صفرًا وتخفض الخسارة 40 ربح المجموعة وحصة غير المسيطرين وفق أساس توزيع الربح في هذه الوحدة.",
        "P's NCI was measured at fair value: 400,000 shares × US$1.60 = 640. Acquisition-date identifiable net assets = share capital 1,000 + retained earnings 200 + fair-value uplift 400 = 1,600. Recognised goodwill = consideration 1,000 + NCI 640 − 1,600 = 40. The facts state that this goodwill is wholly impaired, leaving nil goodwill and reducing group profit and NCI according to the profit-attribution basis for this unit."
      ),
      text(
        "باعت P مكونات إلى J بسعر التكلفة مضافًا إليه 25%، وبقي لدى J مخزون منها بسعر تحويل 100. الربح غير المحقق = 100 × 25/125 = 20؛ لأنه بيع داخل مجموعة موحدة، يخفض مخزون J والمجموعة كاملًا 20 ويخفض أرباح P المعدلة قبل تقسيمها بين ملاك J وغير المسيطرين. إذن المخزون الموحد = 575 + 300 − 20 = 855.",
        "P sold components to J at cost plus 25%, and J still holds inventory priced at 100 at the transfer price. Unrealised profit = 100 × 25/125 = 20. As a sale within the consolidated group, eliminate the full 20 from J's/group inventory and from P's adjusted earnings before splitting the effect between J's owners and NCI. Consolidated inventory = 575 + 300 − 20 = 855."
      ),
      text(
        "باعت J إلى الزميلة S بضاعة بقي منها لدى S بسعر تحويل 80 وبزيادة سعرية 25% على التكلفة. الربح الكامن = 80 × 25/125 = 16؛ حصة J التي لا تزال غير محققة = 30% × 16 = 4.8. لا تُضاف بضاعة S إلى مخزون المجموعة، لذا يُخفض ربح J والاستثمار في S بمبلغ 4.8 ولا يُخفض المخزون الموحد ثانية. كانت أرباح S عند الاقتناء 150 وعند الإقفال 390؛ نصيب J في الزيادة = 30% × (390 − 150) = 72. مع خسارة انخفاض استثمار S المحددة صراحة بمبلغ 92، يصبح رصيد الزميلة = 500 + 72 − 4.8 − 92 = 475.2.",
        "J sold goods to associate S; S retains goods at a transfer price of 80 with a 25% mark-up on cost. Embedded gain = 80 × 25/125 = 16; J's still-unrealised 30% share = 4.8. S's goods are not consolidated inventory, so reduce J's profit and the investment in S by 4.8 without a second inventory reduction. S's acquisition-date and closing retained earnings were 150 and 390; J's share of their increase is 30% × (390 − 150) = 72. Given the explicit 92 impairment of S's investment, the associate carrying amount is 500 + 72 − 4.8 − 92 = 475.2."
      ),
      text(
        "أرباح P المحتجزة اللاحقة للاقتناء بعد التسويات = 885 − 200 قبل الاقتناء − 30 إهلاك فرق القيمة − 20 ربح المخزون الداخلي − 40 انخفاض الشهرة = 595. حصة ملاك J منها = 60% × 595 = 357، وحصة غير المسيطرين = 40% × 595 = 238. تُعرض حصة غير المسيطرين الإقفالية = 640 عند الاقتناء + 238 = 878؛ وهي تشمل نصيبها من انخفاض الشهرة المعترف بها وفق IAS 36.C6.",
        "P's adjusted post-acquisition retained earnings = 885 − 200 pre-acquisition − 30 uplift depreciation − 20 intragroup inventory gain − 40 goodwill impairment = 595. J owners' share is 60% × 595 = 357; NCI's share is 40% × 595 = 238. Closing NCI = acquisition-date 640 + 238 = 878, including its share of recognised goodwill impairment under IAS 36.C6."
      ),
      text(
        "الأرباح المحتجزة الموحدة لملاك J = أرباح J البالغة 1,460 − ربح البيع إلى S غير المحقق 4.8 + حصة P المعدلة 357 + حصة أرباح S اللاحقة للاقتناء 72 − انخفاض استثمار S البالغ 92 = 1,792.2. لا يُضاف رأس مال P أو S إلى رأس مال المجموعة؛ يبقى رأس مال J فقط 2,000.",
        "Consolidated retained earnings attributable to J owners = J's 1,460 − unrealised sale profit to S 4.8 + adjusted share of P 357 + post-acquisition share of S earnings 72 − S investment impairment 92 = 1,792.2. Do not add P or S share capital to group share capital; retain J's 2,000 only."
      ),
      text(
        "القائمة المختصرة بالألف: الأصول غير المتداولة عقارات 3,570 + آلات 1,170 + استثمار في S بمبلغ 475.2 = 5,215.2. الأصول المتداولة مخزون 855 + ذمم 620 (330+290) + نقد 170 (50+120) = 1,645. إجمالي الأصول 6,860.2. يقابله رأس مال J 2,000 + أرباح ملاك J 1,792.2 + حصة غير المسيطرين 878 = حقوق ملكية 4,670.2؛ وسندات قرض غير متداولة 600 (500+100) + التزامات متداولة 1,590 (680+350+560) = 2,190؛ الإجمالي 6,860.2.",
        "Summarised statement, in thousands: non-current assets comprise property 3,570 + plant 1,170 + S investment 475.2 = 5,215.2. Current assets are inventory 855 + receivables 620 (330+290) + cash 170 (50+120) = 1,645. Total assets = 6,860.2. On the other side J share capital 2,000 + J-owner retained earnings 1,792.2 + NCI 878 = equity 4,670.2; non-current loan stock 600 (500+100) + current liabilities 1,590 (680+350+560) = 2,190; total 6,860.2."
      ),
      text(
        "فحص القيود: تسوية ربح P الداخلي تخفض المخزون والأرباح المجمعة 20؛ وتسوية بيع J للزميلة تخفض ربح J والاستثمار 4.8؛ وانخفاض استثمار S يخفض الاستثمار والربح 92؛ وانخفاض شهرة P يخفض الشهرة والربح 40. لا تحذف ذممًا أو قروضًا بين J وP بلا رصيد متقابل معطى، ولا تحسب ضريبة مؤجلة رقمية من دون معدل وأساس ضريبي؛ يظل تحليل IAS 12 مطلوبًا إذا توافرت البيانات.",
        "Entry check: P's intragroup gain adjustment reduces group inventory and earnings by 20; J's associate-sale adjustment reduces J profit and the investment by 4.8; S's investment impairment reduces investment and profit by 92; P goodwill impairment reduces goodwill and profit by 40. Do not eliminate receivables or loans between J and P without matching balances supplied, or invent deferred tax without a tax rate and tax bases; IAS 12 analysis remains necessary if facts become available."
      )
    ],
    reference: "IFRS 10.B86(c), B94; IAS 28.10, 28, 40–43; IFRS 3.18–19, 32; IAS 16.50, 56; IAS 36.104, C6; IAS 12",
  },

  {
    id: "ifrs-book2-ias28-ch23-quiz-associate-definition",
    standardCode: "IAS 28",
    title: text("متى تُسمى المنشأة زميلة؟", "When is an investee an associate?"),
    facts: text(
      "يسأل تمرين تعريفي عن وصف المنشأة التي يستطيع مستثمر المشاركة في قرارات سياساتها المالية والتشغيلية من دون أن يسيطر عليها أو يشترك في السيطرة عليها.",
      "A definition exercise asks about an investee whose financial and operating policy decisions an investor can influence without controlling or jointly controlling it."
    ),
    question: text("عرّف المنشأة الزميلة.", "Define an associate."),
    solution: [
      text(
        "الزميلة منشأة يتمتع المستثمر عليها بتأثير مهم، ولا تكون تابعة له ولا ترتيبًا مشتركًا؛ والتأثير المهم سلطة المشاركة في القرارات المالية والتشغيلية، لا سلطة التحكم فيها.",
        "An associate is an entity over which the investor has significant influence, but which is neither its subsidiary nor a joint arrangement. Significant influence is the power to participate in financial and operating policy decisions, not to control them."
      ),
      text(
        "توجد قرينة قابلة للدحض للتأثير المهم عند امتلاك 20% أو أكثر من حقوق التصويت، مباشرة أو غير مباشرة؛ لا تكفي نسبة الأسهم وحدها إذا اختلفت عن حقوق التصويت، وقد تدل قرائن أخرى على تأثير مهم بنسبة أقل.",
        "A direct or indirect holding of at least 20% of voting power creates a rebuttable presumption of significant influence. An ordinary-share percentage alone is insufficient if voting rights differ, and other evidence may establish influence below that threshold."
      )
    ],
    reference: "IAS 28.3, 5–6",
  },
  {
    id: "ifrs-book2-ias27-ch23-quiz-separate-associate",
    standardCode: "IAS 27",
    title: text("الزميلة في القوائم المنفصلة: ما الخيارات؟", "Associate in separate statements: what are the options?"),
    facts: text(
      "أعد مستثمر قوائم مالية منفصلة تتضمن استثماره في منشأة زميلة، ويسأل التمرين عن أساس المحاسبة في هذه القوائم لا في القوائم الموحدة.",
      "An investor prepares separate financial statements including its investment in an associate. The exercise concerns the accounting policy in those separate statements, not group consolidated statements."
    ),
    question: text(
      "كيف يحاسب المستثمر عن زميلته في قوائمه المالية المنفصلة؟",
      "How does the investor account for its associate in its separate financial statements?"
    ),
    solution: [
      text(
        "يسمح IAS 27 لكل فئة من الاستثمارات في التابعات والمشروعات المشتركة والزميلات بسياسة محاسبية متسقة من ثلاثة أسس: التكلفة، أو وفق IFRS 9، أو بطريقة حقوق الملكية كما في IAS 28. لا تفرض ملكية الزميلة استخدام التكلفة في القوائم المنفصلة.",
        "IAS 27 permits a consistent policy for each category of investments in subsidiaries, joint ventures and associates using one of three bases: cost, IFRS 9 or the IAS 28 equity method. An associate holding does not make cost mandatory in separate statements."
      ),
      text(
        "افصل هذه الإجابة عن القوائم الموحدة للمستثمر؛ هناك تُطبق طريقة حقوق الملكية على الزميلة عند انطباق IAS 28، إلا إذا تحقق استثناء خاص.",
        "Keep this separate from the investor's consolidated financial statements, where an associate is equity-accounted under IAS 28 unless a specific exemption applies."
      )
    ],
    reference: "IAS 27.9–10; IAS 28.16–17",
  },
  {
    id: "ifrs-book2-ias28-ch23-quiz-equity-method-effect",
    standardCode: "IAS 28",
    title: text("أثر طريقة حقوق الملكية في الأداء والمركز المالي", "Equity method effects on performance and financial position"),
    facts: text(
      "لدى مجموعة استثمار في زميلة تتأثر قيمته بأرباح الزميلة وخسائرها وتوزيعاتها بعد الاقتناء. لا يطلب السؤال قيمة رقمية بل موضع الأثر في قائمتين موحدتين.",
      "A group has an associate investment whose carrying amount responds to the associate's post-acquisition profits, losses and distributions. The exercise asks for statement effects rather than a numerical amount."
    ),
    question: text(
      "ما أثر طريقة حقوق الملكية في قائمة الربح أو الخسارة الموحدة وقائمة المركز المالي الموحدة؟",
      "How does the equity method affect the consolidated statement of profit or loss and the consolidated statement of financial position?"
    ),
    solution: [
      text(
        "في الربح أو الخسارة تثبت المجموعة نصيبها من ربح الزميلة أو خسارتها بعد الضريبة كبند مستقل؛ لا تضم إيرادات الزميلة ومصروفاتها بندًا ببند، ولا تعامل توزيعاتها على أنها ربح إضافي فوق نصيب الأرباح.",
        "In profit or loss, the group recognises its share of the associate's after-tax profit or loss as one line. It does not consolidate the associate's individual revenue and expense lines, nor count distributions as extra income in addition to its profit share."
      ),
      text(
        "في المركز المالي يبدأ الاستثمار بالتكلفة، ثم يُزاد أو يُخفض بنصيب النتائج والدخل الشامل الآخر اللاحقين للاقتناء، وتخفضه التوزيعات المستلمة. تُراجع الفروق عند الاقتناء والمعاملات بين الطرفين والانخفاض في القيمة إذا توفرت وقائعها؛ لا تنحصر الحركة دائمًا في الأرباح فقط.",
        "In financial position, the investment starts at cost, changes for the group's post-acquisition share of profit or loss and other comprehensive income, and decreases for distributions received. Acquisition differences, investor–associate transactions and impairment need assessment when facts arise; the roll-forward is not always limited to profit alone."
      )
    ],
    reference: "IAS 28.10, 28, 32, 40–43",
  },
  {
    id: "ifrs-book2-ifrs10-ch23-quiz-alpha-bravo-gamma-revenue",
    standardCode: "IFRS 10",
    title: text("Alpha وBravo وGamma: الإيراد بعد الاقتناء", "Alpha, Bravo and Gamma: post-acquisition revenue"),
    facts: text(
      "اشترت Alpha في 1 سبتمبر 20X5 نسبة 80% من أسهم Bravo ونسبة 30% من أسهم Gamma. إيرادات السنة المنتهية في 31 ديسمبر 20X5 هي 2.1 مليون لـAlpha و1.5 مليون لـBravo و0.9 مليون لـGamma. لا يقدم السؤال إيراد Bravo الفعلي من سبتمبر إلى ديسمبر ولا بيانات تعاملات بين الشركات. لغرض الحل الحسابي الوارد في التمرين فقط يُفترض أن نسبة الأسهم تعكس السيطرة على Bravo والتأثير المهم على Gamma وأن إيرادات Bravo انتظمت خلال السنة.",
      "On 1 September 20X5 Alpha acquired 80% of Bravo's shares and 30% of Gamma's shares. Revenue for the year ended 31 December 20X5 was 2.1 million for Alpha, 1.5 million for Bravo and 0.9 million for Gamma. The question does not provide Bravo's actual September–December revenue or intragroup sales. Solely for the exercise's numerical illustration, assume the holdings reflect control of Bravo and significant influence over Gamma and that Bravo's revenue was earned evenly."
    ),
    question: text(
      "ما الإيراد الذي يعرض في قائمة الربح أو الخسارة الموحدة لـAlpha للسنة المنتهية في 31 ديسمبر 20X5؟",
      "What revenue appears in Alpha's consolidated statement of profit or loss for the year ended 31 December 20X5?"
    ),
    solution: [
      text(
        "تضم المجموعة إيراد Alpha السنوي 2.1 مليون وإيراد Bravo كاملاً عن فترة السيطرة فقط، لا 80% منه. على افتراض انتظام الإيراد: 1.5 مليون × 4/12 = 0.5 مليون؛ فيكون الإجمالي التوضيحي 2.6 مليون قبل أي حذف لمبيعات داخلية. لا تضاف نسبة 30% من إيراد Gamma؛ تعرض حصة أرباحها بعد الضريبة وفق IAS 28 لا مبيعاتها.",
        "The group includes Alpha's full-year 2.1 million and 100% of Bravo's revenue only during the period of control, not 80% of it. Assuming even earning: 1.5 million × 4/12 = 0.5 million; illustrative total revenue is 2.6 million before any intragroup eliminations. Do not add 30% of Gamma's revenue: IAS 28 reports a share of its after-tax result, not its sales."
      ),
      text(
        "الرقم 2.6 مليون مشروط بالتبسيط التعليمي؛ لا يفرض IFRS 10 توزيع إيراد Bravo على الأشهر بالتساوي. إذا اختلف إيراد الأشهر الفعلي أو وُجدت مبيعات بين شركات المجموعة، يلزم سجلها لتحديد رقم نهائي صحيح.",
        "The 2.6 million figure depends on the teaching simplification; IFRS 10 does not require an even monthly allocation of Bravo's revenue. Actual monthly revenue and intragroup sales records are needed for a definitive figure if either differs."
      )
    ],
    reference: "IFRS 10.7, 20, B86(c), B88; IAS 28.5–6, 10",
  },
  {
    id: "ifrs-book2-ias28-ch23-quiz-associate-inventory",
    standardCode: "IAS 28",
    title: text("بضاعة في مخزون الزميلة: أي مخزون يُعدل؟", "Goods held by an associate: which inventory is adjusted?"),
    facts: text(
      "باعت أم بضاعة إلى زميلة تملك منها 30% ونتج ربح بيع 100,000. بقيت البضاعة كلها لدى الزميلة في نهاية السنة. يفترض السؤال استمرار التأثير المهم وأن البضاعة أصلًا عاديًا لا يمثل نشاطًا تجاريًا.",
      "A parent sold goods to a 30%-owned associate and earned a sales profit of 100,000. All the goods remained in the associate's inventory at year-end. Assume continuing significant influence and that the goods are ordinary assets, not a business."
    ),
    question: text(
      "ما التعديل المطلوب في رقم المخزون بقائمة المركز المالي الموحدة بسبب هذا الربح غير المحقق؟",
      "What adjustment to consolidated statement of financial position inventory is required because of this unrealised profit?"
    ),
    solution: [
      text(
        "تعديل مخزون المجموعة يساوي صفرًا؛ لأن مخزون الزميلة لا يضاف بندًا ببند إلى مخزون الأم وتابعاتها. لا تخفض مخزون المجموعة بقيمة 100,000 ولا بنصيب 30,000، ما دامت البضاعة ليست لدى منشأة موحدة.",
        "The adjustment to group inventory is zero because the associate's inventory is not added line by line to the parent and subsidiaries' inventory. Reduce group inventory by neither 100,000 nor 30,000 while the goods are held outside the consolidated group."
      ),
      text(
        "لكن نصيب المجموعة من ربح البيع غير المحقق = 30% × 100,000 = 30,000. يُخفض ربح المجموعة والاستثمار في الزميلة بهذا المقدار وفق IAS 28.28، مع بقاء الجزء المنسوب إلى المستثمرين الآخرين 70,000 معترفًا به. موقع التسوية في الاستثمار لا يغير جواب السؤال عن المخزون: صفر.",
        "The group's share of unrealised sale profit is nevertheless 30% × 100,000 = 30,000. Reduce group profit and the associate investment by that amount under IAS 28.28; the other investors' 70,000 share remains recognised. Adjusting the investment does not change the answer about inventory: zero."
      )
    ],
    reference: "IAS 28.28; IFRS 10.B86(c)",
  },

  {
    id: "ifrs-book2-ias28-p-a-investment-amount",
    standardCode: "IAS 28",
    title: text("P وA: رصيد الاستثمار في الزميلة عند الإقفال", "P and A: closing associate investment"),
    facts: text(
      "في 1 يناير 20X6 كانت صافي الأصول الملموسة لـA تساوي 220,000، ممولة بـ100,000 سهم عادي قيمة كل سهم 1 واحتياطيات 120,000. تملك P شركات تابعة واشترت 30,000 سهم من A مقابل 75,000. ربحت A خلال السنة المنتهية في 31 ديسمبر 20X6 مبلغ 30,000 ودفعت توزيعات إجمالية 12,000. يفترض المثال أن حصة الأسهم 30% تعكس حقوق التصويت والتأثير المهم، وأن الأرباح والتوزيعات تخص فترة ما بعد الاقتناء، ولا توجد تسويات أخرى معطاة.",
      "On 1 January 20X6 A had net tangible assets of 220,000, financed by 100,000 ordinary shares of 1 each and reserves of 120,000. P has subsidiaries and acquired 30,000 A shares for 75,000. In the year ended 31 December 20X6, A earned 30,000 and paid total dividends of 12,000. The illustration assumes the 30% ordinary-share holding reflects voting power and significant influence, that profit and distributions are post-acquisition, and that no other adjustments are supplied."
    ),
    question: text(
      "بكم يظهر استثمار P في A في قائمة المركز المالي الموحدة في 31 ديسمبر 20X6؟",
      "At what amount does P's investment in A appear in the consolidated statement of financial position at 31 December 20X6?"
    ),
    solution: [
      text(
        "بعد إثبات التأثير المهم تُقاس الزميلة بطريقة حقوق الملكية: حصة P من ربح A = 30% × 30,000 = 9,000، وحصتها من التوزيعات = 30% × 12,000 = 3,600. التوزيع استرداد لجزء من القيمة الدفترية، وليس ربحًا إضافيًا فوق حصة الربح.",
        "Once significant influence is established, equity-account the associate: P's share of A's profit = 30% × 30,000 = 9,000; its share of dividends = 30% × 12,000 = 3,600. A distribution reduces the carrying amount and is not additional profit on top of the profit share."
      ),
      text(
        "الحركة في الاستثمار = التكلفة 75,000 + حصة الربح 9,000 − التوزيعات 3,600 = 80,400. وفحص بديل: زيادة أرباح A المحتجزة بعد الاقتناء = 30,000 − 12,000 = 18,000؛ حصة P = 5,400؛ لذلك 75,000 + 5,400 = 80,400.",
        "Investment roll-forward = initial cost 75,000 + profit share 9,000 − distributions 3,600 = 80,400. Alternative check: A's post-acquisition retained-profit increase is 30,000 − 12,000 = 18,000; P's share is 5,400, so 75,000 + 5,400 = 80,400."
      ),
      text(
        "يبقى الاستثمار أصلًا واحدًا في القوائم الموحدة؛ لا تُجمع أصول A والتزاماتها بندًا ببند ولا تُضاف توزيعات 3,600 إلى ربح الزميلة 9,000. لا يمكن استخراج تعديل قيمة عادلة أو انخفاض قيمة من المعطيات وحدها.",
        "The investment remains one asset in consolidated statements; A's individual assets and liabilities are not added line by line, and the 3,600 distribution is not added to the 9,000 associate profit share. The data alone do not establish a fair-value adjustment or impairment."
      )
    ],
    reference: "IAS 28.5–6, 10",
  },
  {
    id: "ifrs-book2-ias28-alfred-grimbald-profit-dividend",
    standardCode: "IAS 28",
    title: text("Alfred وGrimbald: الربح بعد الضريبة وأثر التوزيع", "Alfred and Grimbald: after-tax profit and dividend"),
    facts: text(
      "اشترت Alfred نسبة 25% من أسهم Grimbald في 31 ديسمبر 20X8 بتكلفة 38,000. حققت Grimbald في السنة المنتهية في 31 ديسمبر 20X9 ربحًا قبل الضريبة 82,000، وبلغت ضريبة أرباحها 32,000. دفعت Grimbald توزيعات إجمالية 20,000 في 31 ديسمبر 20X9 من أرباح السنة. يُفترض أن الملكية تعكس حقوق التصويت والتأثير المهم، ولا توجد فروق أو معاملات أو انخفاض قيمة أخرى مذكورة.",
      "Alfred acquired a 25% holding in Grimbald on 31 December 20X8 for 38,000. For the year ended 31 December 20X9 Grimbald's pre-tax profit was 82,000 and its tax charge was 32,000. Grimbald paid total dividends of 20,000 on 31 December 20X9 out of that year's profits. Assume ownership reflects voting power and significant influence; no other differences, transactions or impairment are supplied."
    ),
    question: text(
      "احسب البنود والقيود المتعلقة بالزميلة التي تظهر في القوائم الموحدة لمجموعة Alfred وفق IAS 28.",
      "Calculate the associate-related amounts and entries in Alfred group's consolidated statements under IAS 28."
    ),
    solution: [
      text(
        "ربح Grimbald بعد الضريبة = 82,000 − 32,000 = 50,000؛ حصة Alfred في ربح الزميلة = 25% × 50,000 = 12,500. يمكن التحقق من ذلك بـ25% × 82,000 = 20,500 مطروحًا منها 25% × 32,000 = 8,000؛ لكن العرض النهائي بند واحد لحصة الربح 12,500، لا بند ربح قبل الضريبة 20,500 وبند ضريبة مجموعة إضافي 8,000.",
        "Grimbald's after-tax profit = 82,000 − 32,000 = 50,000; Alfred's associate-profit share is 25% × 50,000 = 12,500. Cross-check: 25% × 82,000 = 20,500 less 25% × 32,000 = 8,000; the final presentation is one 12,500 associate-profit line, not a 20,500 pre-tax associate-profit line plus 8,000 of extra group tax."
      ),
      text(
        "حصة Alfred من التوزيعات = 25% × 20,000 = 5,000. رصيد الاستثمار في 31 ديسمبر 20X9 = تكلفة 38,000 + حصة ربح 12,500 − توزيعات 5,000 = 45,500. الفحص البديل: الأرباح المحتجزة بعد الاقتناء لدى Grimbald = 50,000 − 20,000 = 30,000؛ حصتها 7,500، ومن ثم 38,000 + 7,500 = 45,500.",
        "Alfred's dividend entitlement = 25% × 20,000 = 5,000. Investment at 31 December 20X9 = cost 38,000 + profit share 12,500 − dividends 5,000 = 45,500. Alternative check: Grimbald's post-acquisition retained profit is 50,000 − 20,000 = 30,000; Alfred's 25% share is 7,500, giving 38,000 + 7,500 = 45,500."
      ),
      text(
        "في سجل طريقة حقوق الملكية: مدين استثمار في زميلة 12,500 / دائن حصة ربح زميلة 12,500؛ ثم مدين نقد أو توزيعات مستحقة 5,000 / دائن استثمار في زميلة 5,000. إذا أثبتت القوائم المنفصلة توزيعات 5,000 كإيراد على أساس التكلفة، فيُستبعد إيراد التوزيع من ورقة التوحيد مقابل تخفيض الاستثمار، حتى لا يتكرر مع حصة الربح.",
        "Equity-method entries: debit investment in associate 12,500 / credit share of associate profit 12,500; then debit cash or dividend receivable 5,000 / credit investment in associate 5,000. If cost-basis separate statements recorded the 5,000 as dividend income, eliminate that income against the investment in the consolidation worksheet so it is not counted again beside the profit share."
      ),
      text(
        "لا تُوحد إيرادات Grimbald أو مصاريفها أو ضريبتها بندًا ببند، ولا تنشأ حصة غير مسيطرة لمجرد امتلاك Alfred نسبة 25% من زميلة. أي انخفاض في الاستثمار أو تعديلات إضافية تحتاج وقائع غير مقدمة.",
        "Do not consolidate Grimbald's revenue, expenses or tax line by line, and do not recognise subsidiary-style NCI merely because Alfred owns 25% of an associate. Any investment impairment or further adjustments need facts not supplied."
      )
    ],
    reference: "IAS 28.5–6, 10; IAS 1.82(c)",
  },

  {
    id: "ifrs-book2-ias28-parent-associate-summary",
    standardCode: "IAS 28",
    title: text("مجموعة Parent والزميلة Associate: قائمتان مختصرتان", "Parent group and Associate: two summarised statements"),
    facts: text(
      "الأرقام بالآلاف. اشترت مجموعة Parent نسبة 40% من رأس مال Associate قبل ثلاث سنوات حين كانت احتياطيات Associate تساوي 40. في تاريخ التقرير لدى مجموعة Parent أصول ثابتة ملموسة 220، واستثمار في Associate بالتكلفة 60، وقرض لها 20، وأصول متداولة 100؛ ورأس مال 250 وأرباح محتجزة 150. لدى Associate أصول ثابتة 170 وأصول متداولة 50، وعليها قرض لمجموعة Parent قدره 20؛ ورأس مال 100 وأرباح محتجزة 100. ربح مجموعة Parent قبل الضريبة 95 وضريبتها 35، وربح Associate قبل الضريبة 80 وضريبتها 30. يُفترض أن أصول والتزامات Associate بالقيمة العادلة وألا توجد حصص غير مسيطرة في الشركات التابعة. ولتطبيق المثال يُفترض استمرار التأثير المهم وعدم وجود توزيعات أو انخفاض قيمة أو تعديلات أخرى غير مذكورة.",
      "Figures are in thousands. Parent group acquired 40% of Associate three years ago when Associate's reserves were 40. At the reporting date Parent group's tangible non-current assets are 220, its investment in Associate at cost is 60, its loan to Associate is 20, and current assets are 100; share capital is 250 and retained earnings 150. Associate has tangible non-current assets of 170, current assets of 50, a loan payable to Parent group of 20, share capital of 100 and retained earnings of 100. Parent group's pre-tax profit is 95 and tax expense 35; Associate's pre-tax profit is 80 and tax expense 30. Associate's assets and liabilities are assumed to be at fair value, with no NCI in Parent's subsidiaries. The illustration assumes significant influence continues and no unmentioned distributions, impairment or other adjustments."
    ),
    question: text(
      "أعد قائمة مختصرة للربح أو الخسارة وقائمة مركز مالي موحدة لمجموعة Parent، مع بيان معالجة القرض إلى الزميلة.",
      "Prepare Parent group's summarised consolidated statement of profit or loss and statement of financial position, including the treatment of the loan to Associate."
    ),
    solution: [
      text(
        "تعالج Associate زميلة بطريقة حقوق الملكية، بافتراض تحقق التأثير المهم، ولا تُضاف أصولها 170 و50 أو التزاماتها وإيراداتها ومصاريفها بندًا ببند إلى المجموعة. ربحها بعد الضريبة = 80 − 30 = 50؛ حصة المجموعة في الربح = 40% × 50 = 20. يظهر مبلغ 20 في بند مستقل «حصة في ربح زميلة»؛ فلا تُضاف ضريبة Associate البالغة 30 إلى ضريبة المجموعة.",
        "Subject to significant influence, Associate is equity-accounted rather than consolidated line by line. Its assets of 170 and 50, liabilities, revenue and expenses are not added individually to group amounts. Associate's after-tax profit is 80 − 30 = 50; the group's share is 40% × 50 = 20. Report 20 as a separate share-of-associate-profit line; do not add Associate's tax expense of 30 to group tax."
      ),
      text(
        "قائمة الربح أو الخسارة المختصرة، بالآلاف: ربح مجموعة Parent قبل حصة الزميلة والضريبة 95؛ زائد حصة ربح الزميلة 20؛ الربح قبل ضريبة المجموعة 115؛ مصروف ضريبة المجموعة (35)؛ ربح السنة 80. لا تعني ملكية 40% إضافة 40% من إيرادات Associate ومصروفاتها كل على حدة.",
        "Summarised profit or loss, in thousands: Parent group's profit before associate share and group tax 95; add share of Associate's profit 20; profit before group tax 115; group tax expense (35); profit for the year 80. A 40% holding does not mean adding 40% of Associate's revenue and expenses line by line."
      ),
      text(
        "الاحتياطيات اللاحقة للاقتناء في Associate = 100 − 40 = 60؛ حصة المجموعة المتراكمة = 40% × 60 = 24. لذا قيمة الاستثمار في الزميلة = التكلفة 60 + 24 = 84، والأرباح المحتجزة الموحدة = 150 + 24 = 174. حصة الربح الجاري 20 جزء من التغير المتراكم 24 وليست إضافة ثانية إليه.",
        "Associate's post-acquisition reserves = 100 − 40 = 60; the group's cumulative share is 40% × 60 = 24. Investment in Associate is therefore cost 60 + 24 = 84, and consolidated retained earnings are 150 + 24 = 174. The current-year profit share of 20 is part of the cumulative 24, not a second addition."
      ),
      text(
        "قائمة المركز المالي المختصرة، بالآلاف: أصول ثابتة ملموسة 220 + استثمار في زميلة 84 + قرض إلى الزميلة 20 + أصول متداولة 100 = إجمالي أصول 424. يقابلها رأس مال Parent البالغ 250 + أرباح محتجزة موحدة 174 = 424. لا تُحذف قيمة القرض 20 مع دين الزميلة المقابل لأن Associate ليست منشأة تابعة تُوحد بندًا ببند؛ يبقى قرض المجموعة أصلًا مستقلًا، ويخضع عند اللزوم لمتطلبات IFRS 9 بشأن الائتمان والخسائر المتوقعة دون اختلاق مبلغ من المعطيات.",
        "Summarised financial position, in thousands: tangible non-current assets 220 + investment in Associate 84 + loan to Associate 20 + current assets 100 = total assets 424. This equals Parent share capital 250 + consolidated retained earnings 174 = 424. Do not cancel the 20 loan against Associate's payable because an associate is not consolidated line by line; Parent's loan remains a separate asset, subject where relevant to IFRS 9 credit-loss requirements without inventing an amount from the facts."
      ),
      text(
        "فحص مزدوج: الزيادة في رصيد الاستثمار 84 − 60 = 24 تساوي زيادة الأرباح المحتجزة 174 − 150 = 24؛ والربح السنوي 80 = ربح مجموعة Parent بعد ضريبتها 60 + حصة ربح الزميلة 20. لا تكفي الوقائع لاستنتاج ربح استحواذ أو فرق قيمة عادلة أو استبعاد خسارة ائتمانية.",
        "Cross-check: the investment increase 84 − 60 = 24 equals the retained-earnings increase 174 − 150 = 24; current-year profit 80 equals Parent group's own after-tax 60 plus the 20 associate profit share. The facts do not support inventing an acquisition gain, fair-value adjustment or credit-loss amount."
      )
    ],
    reference: "IAS 28.5–6, 10; IAS 1.82(c); IFRS 9.5.5",
  },

  {
    id: "ifrs-book2-ias28-p-a-associate-profit-dividend",
    standardCode: "IAS 28",
    title: text("P وA: حصة ربح الزميلة مقابل توزيعاتها", "P and A: associate profit share versus dividend income"),
    facts: text(
      "لدى P شركات تابعة، واشترت في 1 يناير 20X8 عدد 25,000 من أصل 100,000 سهم عادي في A مقابل 60,000. حققت A خلال السنة المنتهية في 31 ديسمبر 20X8 ربحًا قدره 24,000 ودفعت توزيعات إجمالية 6,000. تُفترض في المثال مساواة نسبة الأسهم العادية لنسبة حقوق التصويت واستمرار التأثير المهم، وعدم وجود فروق قيمة عادلة أو انخفاض أو معاملات مع الزميلة مذكورة. لم تُحدد سياسة P في قوائمها المنفصلة، لذا يوضح الحل بديل التكلفة رقميًا ويفصل البدائل الأخرى.",
      "P has subsidiaries and on 1 January 20X8 acquired 25,000 of A's 100,000 ordinary shares for 60,000. For the year ended 31 December 20X8, A earned profit of 24,000 and paid total dividends of 6,000. For this example ordinary-share ownership is assumed to match voting power, significant influence continues, and no fair-value adjustments, impairment or transactions with the associate are supplied. P's separate-statement policy is unspecified, so the numerical illustration uses cost and distinguishes other permitted policies.",
    ),
    question: text(
      "كيف تُعالج نتائج A وتوزيعاتها في القوائم المنفصلة لـP وفي قوائم مجموعتها الموحدة للسنة المنتهية في 31 ديسمبر 20X8؟",
      "How are A's results and dividends accounted for in P's separate and group consolidated financial statements for the year ended 31 December 20X8?",
    ),
    solution: [
      text(
        "امتلاك 25% من حقوق التصويت، بافتراض مساواتها لحصة الأسهم، يولد قرينة تأثير مهم قابلة للدحض وفق IAS 28؛ فإذا ثبتت تكون A زميلة لا تابعة، ولا تُدمج إيراداتها ومصروفاتها بندًا ببند. نصيب P من ربح السنة = 25% × 24,000 = 6,000، ونصيبها من التوزيعات = 25% × 6,000 = 1,500.",
        "A 25% voting interest, assuming it matches the ordinary-share holding, creates the rebuttable IAS 28 presumption of significant influence. If established, A is an associate rather than a subsidiary, and its revenue and expenses are not consolidated line by line. P's share of annual profit = 25% × 24,000 = 6,000 and its dividend entitlement = 25% × 6,000 = 1,500.",
      ),
      text(
        "في القوائم المنفصلة يسمح IAS 27 بالقياس بالتكلفة أو وفق IFRS 9 أو بطريقة حقوق الملكية، بحسب السياسة المنطبقة؛ التكلفة ليست إلزامية بمجرد كون الاستثمار في زميلة. بافتراض اختيار التكلفة، يبقى الاستثمار 60,000 قبل أي اختبار انخفاض، ويُثبت حق التوزيع 1,500 عند نشوئه: مدين نقد/توزيعات مستحقة 1,500، دائن إيراد توزيعات 1,500. لو اختيرت طريقة حقوق الملكية في القوائم المنفصلة، يُثبت ربح 6,000 وتخفض التوزيعات الاستثمار 1,500؛ أما قيمة IFRS 9 فتحتاج معلومات قيمة عادلة غير معطاة.",
        "IAS 27 permits cost, IFRS 9 or the equity method in separate financial statements according to the applicable policy; cost is not compulsory simply because the investment is an associate. If cost is chosen, the investment remains 60,000 before any impairment assessment, and the 1,500 dividend entitlement is recognised when established: debit cash/dividend receivable 1,500, credit dividend income 1,500. If the equity method is elected separately, recognise the 6,000 profit share and reduce the investment by the 1,500 distribution; an IFRS 9 carrying amount needs fair-value information not supplied.",
      ),
      text(
        "في القوائم الموحدة وبافتراض عدم انطباق استثناء من IAS 28، تعرض P بندًا واحدًا «حصة في ربح الزميلة» بمبلغ 6,000، ولا تُبقي مبلغ 1,500 إيراد توزيعات إضافة إليه. القيمة الدفترية للاستثمار = تكلفة 60,000 + نصيب الربح 6,000 − التوزيع المستلم 1,500 = 64,500؛ لا تُضاف إيرادات ومصاريف A تفصيليًا إلى إيرادات ومصاريف المجموعة.",
        "In consolidated statements, assuming no IAS 28 exemption applies, P reports a single 6,000 share-of-associate-profit line and does not retain the 1,500 dividend income in addition to it. Investment carrying amount = initial cost 60,000 + profit share 6,000 − distribution received 1,500 = 64,500; A's individual revenues and expenses are not added line by line to those of the group.",
      ),
      text(
        "إذا بدأت ورقة التوحيد من قوائم P المنفصلة المقاسة بالتكلفة والتي سجلت التوزيع، فالقيدان الواضحان: (1) مدين استثمار في زميلة 6,000 / دائن حصة ربح زميلة 6,000؛ (2) مدين إيراد توزيعات 1,500 / دائن استثمار في زميلة 1,500. الأثر الصافي زيادة الاستثمار والربح عن أرقام P المنفصلة بمقدار 4,500، لكن العرض النهائي لربح الزميلة 6,000 وليس 4,500 مع إبقاء إيراد التوزيع 1,500.",
        "If the consolidation worksheet starts from P's cost-basis separate statements, which include dividend income, show both adjustments: (1) debit investment in associate 6,000 / credit share of associate profit 6,000; (2) debit dividend income 1,500 / credit investment in associate 1,500. The net increase to investment and profit over P's separate figures is 4,500, but the final associate-profit line is 6,000, not 4,500 alongside an uneliminated 1,500 dividend line.",
      ),
      text(
        "لا تكفي المعطيات لحساب شهرة مضمنة في الاستثمار أو تعديل أرباح A عن فروق قيمة عادلة عند الاقتناء أو ضريبة؛ لا تُختلق هذه المبالغ. وتبقى خسائر الانخفاض أو معاملات المستثمر مع الزميلة موضوع فحص مستقل إن ظهرت أدلتها.",
        "The facts do not permit calculation of any goodwill embedded in the investment, acquisition-date fair-value profit adjustments or tax; do not invent these amounts. Assess impairment and investor–associate transactions separately if evidence arises.",
      ),
    ],
    reference: "IAS 28.5–6, 10, 32; IAS 27.10, 12",
  },

  {
    id: "ifrs-book2-ifrs10-ch22-quiz-unrealised-trading-profit",
    standardCode: "IFRS 10",
    title: text("أين يظهر ربح المخزون الداخلي غير المحقق؟", "Where does unrealised intragroup inventory profit appear?"),
    facts: text(
      "تتاجر منشأتان ضمن مجموعة واحدة في بضاعة، ويبقى جزء من البضاعة في مخزون المجموعة عند نهاية الفترة. السؤال عن موضع أثر الربح الداخلي الذي لم يتحقق ببيع لطرف خارجي في قائمة الربح أو الخسارة الموحدة.",
      "Two entities in one group trade goods, some of which remain in group inventory at period-end. The question concerns where the profit not yet realised through a sale outside the group affects the consolidated statement of profit or loss.",
    ),
    question: text(
      "أين يظهر الربح غير المحقق من التداول داخل المجموعة في قائمة الربح أو الخسارة؟",
      "Where does unrealised profit on intragroup trading appear in the statement of profit or loss?",
    ),
    solution: [
      text(
        "تُحذف المبيعات والمشتريات الداخلية من الإيراد وتكلفة المبيعات، ثم يخفض ربح المخزون الداخلي غير المحقق قيمة المخزون النهائي ويرفع تكلفة المبيعات الموحدة؛ لذلك يظهر أثره تخفيضًا لمجمل الربح الموحد، لا إيرادًا منفصلًا أو ربحًا مكتسبًا للمجموعة.",
        "Eliminate intragroup sales and purchases from revenue and cost of sales. Then reduce ending inventory for unrealised intragroup profit and increase consolidated cost of sales; its profit-or-loss effect is a reduction of consolidated gross profit, not separate revenue or realised group profit.",
      ),
      text(
        "إذا بيعت البضاعة لاحقًا إلى طرف خارجي، ينعكس الحذف في الفترة التي يتحقق فيها الربح للمجموعة. ويُختبر اتجاه البيع عند توزيع أثر الحذف بين ملاك الأم وغير المسيطرين.",
        "When the goods are subsequently sold outside the group, the elimination reverses as the profit becomes realised by the group. Consider whether the sale was upstream or downstream when attributing the adjustment between parent owners and NCI.",
      ),
    ],
    reference: "IFRS 10.B86(c), B94; IAS 2.9, 10",
  },
  {
    id: "ifrs-book2-ifrs10-ch22-quiz-subsidiary-inventory-revenue",
    standardCode: "IFRS 10",
    title: text("بيع بضاعة من التابعة للأم: تعديل الإيراد", "Subsidiary-to-parent inventory sale: revenue adjustment"),
    facts: text(
      "باعت تابعة إلى أمها بضاعة تكلفتها 100,000 بزيادة سعرية 25% على التكلفة. بقي 30% من هذه البضاعة في مخزون الأم عند نهاية السنة.",
      "A subsidiary sells goods costing 100,000 to its parent at a mark-up of 25% on cost. At year-end, 30% of those goods remain in the parent's inventory.",
    ),
    question: text(
      "ما التعديل المطلوب في الإيراد بقائمة الربح أو الخسارة الموحدة؟",
      "What adjustment is required to revenue in the consolidated statement of profit or loss?",
    ),
    solution: [
      text(
        "سعر البيع الداخلي = 100,000 × 1.25 = 125,000. يُحذف من إيراد المجموعة مبلغ 125,000 كاملًا، وتُحذف المشتريات الداخلية المقابلة من تكلفة المبيعات؛ نسبة المخزون المتبقي لا تغيّر مقدار حذف الإيراد.",
        "Internal selling price = 100,000 × 1.25 = 125,000. Eliminate the full 125,000 from group revenue and the matching intragroup purchase from cost of sales; the percentage of goods remaining does not change the revenue elimination.",
      ),
      text(
        "فحص مستقل للمخزون: الربح الداخلي الإجمالي 25,000؛ وغير المحقق في الـ30% المتبقية 7,500، فيخفض المخزون ومجمل الربح. هذا تعديل آخر غير مبلغ 125,000 المطلوب للإيراد، ولا يُخلط بينهما.",
        "Separate inventory check: total intragroup profit is 25,000, of which 30% or 7,500 remains unrealised, reducing inventory and gross profit. That is a distinct adjustment from the 125,000 revenue elimination asked for.",
      ),
    ],
    reference: "IFRS 10.B86(c), B94; IAS 2.9",
  },
  {
    id: "ifrs-book2-ifrs10-ch22-quiz-downstream-nci",
    standardCode: "IFRS 10",
    title: text("بيع من الأم للتابعة: هل تتأثر حصة غير المسيطرين؟", "Downstream sale: is NCI adjusted?"),
    facts: text(
      "باعت أم بضاعة إلى تابعة تملك منها 70% وحققت ربحًا داخليًا مقداره 14,000. بقي ربع هذا الربح غير محقق في مخزون المجموعة عند نهاية السنة.",
      "A parent sells goods to a 70%-owned subsidiary, generating intragroup profit of 14,000. One quarter of that profit remains unrealised in group inventory at year-end.",
    ),
    question: text(
      "ما التعديل المطلوب على حصة غير المسيطرين نتيجة الربح غير المحقق؟",
      "What adjustment to NCI is required for the unrealised profit?",
    ),
    solution: [
      text(
        "الربح غير المحقق = 14,000 × 25% = 3,500 ويُحذف من ربح المجموعة ومن المخزون. البائع هو الأم، لذلك يُحمَّل حذف هذا الربح على ربح ملاك الأم ولا يُعدل نصيب غير المسيطرين في ربح التابعة: التعديل على NCI يساوي صفرًا.",
        "Unrealised profit = 14,000 × 25% = 3,500; eliminate it from group profit and inventory. The seller is the parent, so the adjustment is attributed to parent owners rather than to the subsidiary's NCI: the NCI adjustment is zero.",
      ),
      text(
        "نسبة ملكية الأم 70% لا تعني حذف 70% فقط من الربح الداخلي؛ يُحذف الربح غير المحقق كاملًا على مستوى المجموعة، ثم يُحدد الطرف الذي يتحمل أثره.",
        "The parent's 70% ownership does not mean eliminating only 70% of the internal profit. Eliminate the entire unrealised amount at group level, then determine attribution.",
      ),
    ],
    reference: "IFRS 10.B86(c), B94",
  },
  {
    id: "ifrs-book2-ifrs10-ch22-quiz-alpha-beta-disposal-revenue",
    standardCode: "IFRS 10",
    title: text("Alpha وBeta: الإيراد حتى تاريخ فقد السيطرة", "Alpha and Beta: revenue up to loss of control"),
    facts: text(
      "امتلكت Alpha نسبة 75% من Beta ثم باعت حصتها كلها في 1 سبتمبر 20X5. للسنة المنتهية في 31 ديسمبر 20X5 بلغ إيراد Alpha منفردة 1.5 مليون، وإيراد Beta للسنة الكاملة 360,000. لا تذكر المعطيات إيراد Beta الفعلي حتى البيع أو معاملات داخلية بين الشركتين.",
      "Alpha owned 75% of Beta and sold its entire holding on 1 September 20X5. For the year ended 31 December 20X5, Alpha's own revenue was 1.5 million and Beta's full-year revenue was 360,000. The facts do not give Beta's actual revenue up to disposal or any intragroup transactions.",
    ),
    question: text(
      "ما الإيراد الذي يظهر في قائمة الربح أو الخسارة الموحدة للسنة المنتهية في 31 ديسمبر 20X5؟",
      "What revenue appears in the consolidated statement of profit or loss for the year ended 31 December 20X5?",
    ),
    solution: [
      text(
        "تُضم إيرادات Beta بالكامل، لا بنسبة ملكية Alpha البالغة 75%، عن المدة التي ظلت فيها السيطرة قائمة من يناير إلى أغسطس فقط. ويفترض الحل الحسابي التعليمي انتظام إيراد Beta خلال السنة، فيكون 360,000 × 8/12 = 240,000؛ والإيراد الموحد التوضيحي = 1,500,000 + 240,000 = 1,740,000، بافتراض عدم وجود معاملات داخلية تحتاج الحذف.",
        "Consolidate 100% of Beta's revenue, not Alpha's 75% ownership share, for the January–August period of control only. The illustrative calculation assumes Beta's revenue arose evenly, giving 360,000 × 8/12 = 240,000; illustrative group revenue is 1,500,000 + 240,000 = 1,740,000, assuming no intragroup sales requiring elimination.",
      ),
      text(
        "القاعدة المحاسبية هي استخدام إيراد Beta الفعلي حتى تاريخ فقد السيطرة؛ لا يفرض IFRS 10 التوزيع الزمني الآلي. إذا تركزت المبيعات في أشهر معينة أو وُجدت معاملات داخل المجموعة، يلزم سجل الإيراد الفعلي لتحديد رقم نهائي مختلف.",
        "The accounting requirement is to use Beta's actual revenue up to loss of control; IFRS 10 does not mandate straight-line time apportionment. If sales were seasonal or intragroup transactions existed, actual records are needed for a definitive figure.",
      ),
    ],
    reference: "IFRS 10.20, 25, B86(c), B88",
  },

  {
    id: "ifrs-book2-ias1-bull-lamb-changes-in-equity",
    standardCode: "IAS 1",
    title: text("Bull وLamb: التغيرات الموحدة في حقوق الملكية", "Bull and Lamb: consolidated changes in equity"),
    facts: text(
      "تعد مجموعة Bull قائمتها للسنة المنتهية في 30 أبريل 20X7، والأرقام بالآلاف. ربح المجموعة بعد الضريبة 340، منه 332 لملاك الأم و8 لغير المسيطرين. ربح إعادة تقييم عقار ضمن الدخل الشامل الآخر 300؛ لذا إجمالي الدخل الشامل 640، منه 592 للأم و48 لغير المسيطرين. دفعت Bull توزيعات 200 ودفعت تابعتها Lamb توزيعات 30. أرباح Bull/احتياطياتها في أول السنة 360 وفي آخرها 584، ولدى Lamb 105 و315 على الترتيب. رأس مال Bull هو 5,000 ورأس مال Lamb هو 1,000. اشترت Bull نسبة 80% من Lamb في 20X0 عندما كان رصيد احتياطيات Lamb 50، ولم يكن لأي منهما فائض إعادة تقييم قبل السنة الحالية. تقيس المجموعة حصة غير المسيطرين بنسبة حصتها في صافي أصول التابعة. يُستخدم تاريخا 30 أبريل 20X6 و30 أبريل 20X7 لرصيدَي الافتتاح والإقفال وفق سنة السؤال.",
      "The Bull group prepares its statement for the year ended 30 April 20X7, with figures in thousands. Group after-tax profit is 340, attributed 332 to parent owners and 8 to NCI. A property revaluation gain of 300 is in OCI; total comprehensive income is therefore 640, attributed 592 to parent owners and 48 to NCI. Bull paid dividends of 200 and its subsidiary Lamb paid dividends of 30. Bull's opening and closing reserves are 360 and 584; Lamb's are 105 and 315. Bull's share capital is 5,000 and Lamb's is 1,000. Bull acquired 80% of Lamb in 20X0 when Lamb's reserves were 50; neither entity had a revaluation surplus before the current year. The group uses proportionate-share NCI measurement. Opening and closing dates are 30 April 20X6 and 30 April 20X7, consistently with the question's reporting year.",
    ),
    question: text(
      "أعد قائمة التغيرات في حقوق الملكية الموحدة لمجموعة Bull عن السنة المنتهية في 30 أبريل 20X7.",
      "Prepare the Bull group consolidated statement of changes in equity for the year ended 30 April 20X7.",
    ),
    solution: [
      text(
        "حقوق ملاك الأم افتتاحًا = رأس مال Bull فقط 5,000 + احتياطياتها 360 + 80% × احتياطيات Lamb اللاحقة للاقتناء (105 − 50) = 5,404. حصة غير المسيطرين افتتاحًا = 20% × [رأس مال Lamb 1,000 + احتياطياتها 105] = 221. مجموع حقوق الملكية الافتتاحي = 5,625. لا يضاف رأس مال Lamb إلى رأس مال المجموعة.",
        "Opening parent-owner equity = Bull share capital only 5,000 + Bull reserves 360 + 80% × Lamb post-acquisition reserves (105 − 50) = 5,404. Opening NCI = 20% × [Lamb share capital 1,000 + reserves 105] = 221. Total opening equity is 5,625. Lamb's share capital is not added to group share capital.",
      ),
      text(
        "يُنسب ربح السنة 332 للأم و8 لغير المسيطرين. الدخل الشامل الآخر المنسوب للأم = 592 − 332 = 260؛ ولغير المسيطرين = 48 − 8 = 40؛ والمجموع 300 كما في المعطيات. تعرض قائمة التغيرات إجمالي الدخل الشامل 592 في عمود ملاك الأم و48 في عمود غير المسيطرين، ولا يوضع كله في عمود الأرباح المحتجزة إذا عُرض فائض إعادة التقييم في احتياطي مستقل.",
        "Attribute current-year profit 332 to the parent and 8 to NCI. Parent OCI = 592 − 332 = 260; NCI OCI = 48 − 8 = 40, totalling the supplied 300. Show total comprehensive income of 592 in the parent column and 48 in the NCI column; do not put all OCI into retained earnings if the revaluation surplus is displayed in a separate reserve.",
      ),
      text(
        "توزيع Bull البالغ 200 يخفض حقوق ملاك الأم. من توزيع Lamb البالغ 30، يخرج من المجموعة فقط نصيب غير المسيطرين = 20% × 30 = 6 فينخفض عمودهم؛ أما نصيب الأم 24 فهو توزيع داخل المجموعة لا يظهر كتوزيع خارجي ثانٍ. وعليه يتصالح الإجمالي: 5,625 + 640 − 200 − 6 = 6,059.",
        "Bull's 200 dividend reduces parent-owner equity. Of Lamb's 30 dividend, only NCI's 20% × 30 = 6 leaves the group and reduces the NCI column; the parent's 24 share is intragroup and not a second external distribution. Total equity reconciles: 5,625 + 640 − 200 − 6 = 6,059.",
      ),
      text(
        "حقوق ملاك الأم إقفالًا = 5,404 + 592 − 200 = 5,796؛ ويمكن إثباتها استقلالًا: 5,000 + احتياطيات Bull 584 + 80% × (احتياطيات Lamb 315 − 50 عند الاقتناء) = 5,796. حصة غير المسيطرين إقفالًا = 221 + 48 − 6 = 263؛ وتساوي 20% × (1,000 + 315). إجمالي الإقفال = 5,796 + 263 = 6,059.",
        "Closing parent-owner equity = 5,404 + 592 − 200 = 5,796; independently, 5,000 + Bull reserves 584 + 80% × (Lamb reserves 315 − 50 at acquisition) = 5,796. Closing NCI = 221 + 48 − 6 = 263; it also equals 20% × (1,000 + 315). Closing total = 5,796 + 263 = 6,059.",
      ),
      text(
        "تُعنون بداية القائمة 30 أبريل 20X6 ونهايتها 30 أبريل 20X7، اتساقًا مع السنة المطلوبة؛ أي تواريخ افتتاح أو إقفال مختلفة في نموذج عرض لا تتوافق مع وقائع السؤال. ولعرض تفصيلي حسب مكونات حقوق الملكية، يُفصل ربح السنة عن فائض إعادة التقييم بدل عرضهما كحركة واحدة غير مفصلة.",
        "Label the statement's opening and closing balances 30 April 20X6 and 30 April 20X7, consistent with the requested reporting year; different opening or closing dates in a sample presentation would not match the question. For component-by-component presentation, separate current-year profit from the revaluation surplus rather than leave them as one undifferentiated movement.",
      ),
    ],
    reference: "IAS 1.106–108; IFRS 10.B86(c), B94; IAS 16.39",
  },

  {
    id: "ifrs-book2-ias1-delta-group-changes-in-equity",
    standardCode: "IAS 1",
    title: text("Delta: قائمة التغيرات في حقوق الملكية وسند قابل للتحويل", "Delta: consolidated changes in equity and a convertible bond"),
    facts: text(
      "تُعد مجموعة Delta قوائمها للسنة المنتهية في 31 مارس 20X1. في 31 مارس 20X0، وبالآلاف، بلغ رأس مال المجموعة 90,000 والأرباح المحتجزة المنسوبة للأم 40,000 وحصة غير المسيطرين 25,000. في 1 أبريل 20X0 أصدرت سندًا صفري الفائدة بمتحصلات 12,000، يستحق في 31 مارس 20X5 بمبلغ 16,105.1، ولحامليه خيار تحويله إلى أسهم. لولا خيار التحويل لبلغت القيمة العادلة لالتزام مماثل 10,000 بمعدل عائد 10%. دُفعت خلال السنة توزيعات 20,000 للمساهمين العاديين في الأم بحسب افتراض الحل. إجمالي الدخل الشامل النهائي للسنة 10,000، منه 500 لحصة غير المسيطرين. لا تبين المعطيات عدد الأسهم أو شروط تسوية خيار التحويل؛ لذلك يظل تصنيفه كأداة حقوق ملكية مشروطًا باستيفاء شرط مبلغ ثابت مقابل عدد ثابت من أسهم المُصدر.",
      "The Delta group prepares accounts for the year ended 31 March 20X1. At 31 March 20X0, in thousands, group share capital was 90,000, retained earnings attributable to the parent 40,000 and NCI 25,000. On 1 April 20X0 it issued a zero-coupon bond for 12,000, redeemable for 16,105.1 on 31 March 20X5; holders have an option to convert it into shares. Without that option the fair value of a comparable liability would have been 10,000 at a 10% yield. Dividends of 20,000 were paid to ordinary shareholders of the parent under the teaching answer's assumption. Final total comprehensive income for the year was 10,000, of which 500 was attributable to NCI. The facts do not specify the number of shares or settlement terms of the conversion option; equity classification therefore depends on a fixed amount for a fixed number of the issuer's own shares.",
    ),
    question: text(
      "أعد قائمة التغيرات في حقوق الملكية الموحدة والمقتطفات ذات الصلة من قائمة المركز المالي في 31 مارس 20X1.",
      "Prepare the consolidated statement of changes in equity and relevant extracts from the statement of financial position at 31 March 20X1.",
    ),
    solution: [
      text(
        "أولًا افحص عقد التحويل: إذا أمكن الوفاء به بمبلغ ثابت مقابل عدد ثابت من أسهم Delta نفسها ولا يوجد شرط آخر يغيّر التصنيف، يكون السند أداة مركبة وفق IAS 32. لا يكفي مجرد وصفه بأنه «قابل للتحويل إلى أسهم» لإثبات هذه الشروط؛ إذا كان عدد الأسهم متغيرًا فقد يختلف التصنيف والقياس، ولا تكون أرقام حقوق الملكية المشروطة أدناه نتيجة نهائية.",
        "First inspect the conversion contract: if settlement exchanges a fixed amount for a fixed number of Delta's own shares and no other term changes the classification, the bond is a compound instrument under IAS 32. Merely saying 'convertible into shares' does not establish those terms; a variable number of shares could change classification and measurement, so the conditional equity amounts below are not unconditional results.",
      ),
      text(
        "بفرض استيفاء شرط الأداة المركبة، تقاس مديونية الإصدار أولًا بالقيمة العادلة لسند مماثل بلا خيار تحويل: 16,105.1 ÷ (1.10)^5 ≈ 10,000 ألف. مكون حقوق الملكية المتبقي = متحصلات 12,000 − التزام 10,000 = 2,000. قيد الإصدار النموذجي بالآلاف: مدين نقد 12,000؛ دائن التزام سند 10,000؛ دائن مكون حقوق ملكية لخيار التحويل 2,000. لا تُعد الـ2,000 ربحًا للسنة.",
        "Assuming compound-instrument treatment applies, initially measure the liability at the fair value of comparable debt without conversion: 16,105.1 ÷ (1.10)^5 ≈ 10,000 thousand. Residual equity component = proceeds 12,000 − liability 10,000 = 2,000. Illustrative issue entry, in thousands: debit cash 12,000; credit bond liability 10,000; credit conversion-option equity 2,000. The 2,000 is not current-year profit.",
      ),
      text(
        "تُحمّل مديونية السند بعد الإصدار بمعدل الفائدة الفعلي: تكلفة تمويل السنة الأولى 10% × 10,000 = 1,000، والقيمة الدفترية للالتزام في 31 مارس 20X1 = 11,000، بافتراض عدم وجود تكاليف إصدار أو شروط أخرى. يُفهم أن إجمالي الدخل الشامل المعطى 10,000 رقم نهائي بعد تسجيل هذه التكلفة؛ إن لم يكن كذلك يجب تعديل الربح والأرباح المحتجزة قبل إعداد القائمة، ولا تُخصم التكلفة مرتين.",
        "Subsequently accrete the bond liability using the effective interest rate: first-year finance cost = 10% × 10,000 = 1,000 and the liability carrying amount at 31 March 20X1 = 11,000, assuming no issue costs or other terms. The supplied 10,000 total comprehensive income is treated as a final figure after this cost; if it is not, adjust profit and retained earnings before preparing the statement rather than deducting the cost twice.",
      ),
      text(
        "قائمة التغيرات الموحدة، بالآلاف وبافتراض تصنيف خيار التحويل ضمن حقوق الملكية: الرصيد الافتتاحي = رأس مال 90,000 + أرباح محتجزة للأم 40,000 + حصة غير مسيطرين 25,000 = 155,000. الدخل الشامل للأم = 10,000 − 500 = 9,500؛ ولغير المسيطرين 500. توزيعات الأم تخفض أرباحها المحتجزة 20,000. مكون خيار التحويل يزيد احتياطي حقوق ملكية الأم 2,000. الرصيد الختامي: رأس مال 90,000؛ احتياطي الخيار 2,000؛ أرباح محتجزة للأم 40,000 + 9,500 − 20,000 = 29,500؛ إجمالي حقوق ملاك الأم 121,500؛ حصة غير مسيطرين 25,500؛ إجمالي حقوق الملكية 147,000.",
        "Consolidated changes in equity, in thousands and conditional on equity classification of the conversion option: opening balance = share capital 90,000 + parent retained earnings 40,000 + NCI 25,000 = 155,000. Parent comprehensive income = 10,000 − 500 = 9,500; NCI comprehensive income 500. Parent dividends reduce retained earnings by 20,000. The conversion option adds 2,000 to parent equity reserves. Closing balances: share capital 90,000; option reserve 2,000; parent retained earnings 40,000 + 9,500 − 20,000 = 29,500; total attributable to parent owners 121,500; NCI 25,500; total equity 147,000.",
      ),
      text(
        "مقتطف المركز المالي الموافق لنفس الفرض: حقوق ملكية ملاك الأم 121,500؛ حصة غير المسيطرين 25,500؛ إجمالي الحقوق 147,000؛ والتزام السند بالتكلفة المطفأة 11,000 ضمن الالتزامات غير المتداولة ما دام الاستحقاق بعد أكثر من 12 شهرًا ولا يوجد حق يفرض التسوية المبكرة. لا تُدرج حصة غير المسيطرين في التزامات المجموعة، ولا يُضاف خيار التحويل إلى رأس المال المصدر قبل التحويل الفعلي.",
        "Matching statement-of-financial-position extract on the same assumption: parent owners' equity 121,500; NCI 25,500; total equity 147,000; bond liability at amortised cost 11,000 within non-current liabilities provided settlement is due after more than 12 months and no term requires earlier settlement. NCI is not a group liability, and the conversion option is not issued share capital before actual conversion.",
      ),
    ],
    reference: "IAS 1.106–107; IAS 32.16, 22, 28–32; IFRS 9 Appendix A (effective interest method); IFRS 10.B94",
  },

  {
    id: "ifrs-book2-ifrs10-horse-hoof-full-disposal",
    standardCode: "IFRS 10",
    title: text("Horse وHoof: بيع الحصة المسيطرة بالكامل", "Horse and Hoof: disposal of the entire controlling interest"),
    facts: text(
      "اشترت مجموعة Horse في 1 أكتوبر 20X5 نسبة 80% من Hoof مقابل 648 ألفًا. كان رصيد أرباح Hoof المحتجزة يوم الاقتناء 360 ألفًا ورأس مالها 360 ألفًا، ولا تذكر الحالة فروق قيمة عادلة للأصول والالتزامات. اختير قياس حصة غير المسيطرين بنسبة حصتهم في صافي الأصول، ولم تنخفض قيمة الشهرة. لدى Horse شركات تابعة أخرى مملوكة بالكامل. في 30 سبتمبر 20X8، قبل إثبات البيع، كانت أرقام مجموعة Horse باستبعاد Hoof، بالآلاف: أصول غير متداولة 720، استثمار في Hoof بقيمة 648، أصول متداولة 740، رأس مال 1,080، أرباح محتجزة 828، والتزامات متداولة 200. أرقام Hoof في اليوم نفسه: أصول غير متداولة 540، أصول متداولة 740، رأس مال 360، أرباح محتجزة 720، والتزامات متداولة 200. في السنة المنتهية بذلك اليوم بلغ ربح Horse قبل الضريبة 306 والضريبة 90، وربح Hoof قبل الضريبة 252 والضريبة 72. باعت Horse جميع حصتها في Hoof في 30 سبتمبر 20X8 مقابل نقد 1,300 ألف ولم تثبت البيع بعد. الأرباح منتظمة خلال السنة، ولم تُدفع توزيعات. يُفترض في الحساب الرقمي أن المقابل والقوائم بعملة قياس واحدة؛ إن اختلفت العملة فعليًا يلزم سعر الصرف قبل اعتماد المبالغ. لا تُضاف ضريبة على التصرف لعدم توافر بياناتها.",
      "On 1 October 20X5 the Horse group acquired 80% of Hoof for 648 thousand. Hoof's acquisition-date retained earnings and share capital were 360 thousand each; no fair-value adjustments are supplied. The group elected proportionate-share NCI and goodwill has not been impaired. Horse has other wholly owned subsidiaries. At 30 September 20X8, before recording the disposal, Horse group figures excluding Hoof, in thousands, were: non-current assets 720, investment in Hoof 648, current assets 740, share capital 1,080, retained earnings 828 and current liabilities 200. Hoof's figures were: non-current assets 540, current assets 740, share capital 360, retained earnings 720 and current liabilities 200. For the year then ended, Horse's profit before tax was 306 and tax 90; Hoof's profit before tax was 252 and tax 72. Horse sold its entire Hoof interest for cash consideration of 1,300 thousand on 30 September 20X8, but had not recorded the sale. Profit accrues evenly and no dividends were paid. The numerical answer assumes consideration and statements share one measurement currency; if they do not, the exchange rate is required before amounts can be finalised. No incremental disposal tax is calculated because the necessary data are absent.",
    ),
    question: text(
      "أعد قائمة المركز المالي الموحدة لمجموعة Horse في 30 سبتمبر 20X8 وقائمة الربح أو الخسارة الموحدة للسنة المنتهية في ذلك اليوم.",
      "Prepare the Horse group consolidated statement of financial position at 30 September 20X8 and consolidated statement of profit or loss for the year then ended.",
    ),
    solution: [
      text(
        "يوم الاقتناء صافي أصول Hoof = 360 + 360 = 720 ألفًا. حصة غير المسيطرين = 20% × 720 = 144؛ والشهرة = 648 + 144 − 720 = 72. هذا القياس يفترض عدم وجود تعديلات قيمة عادلة أو مقابل إضافي غير مذكور.",
        "At acquisition Hoof's net assets were 360 + 360 = 720 thousand. NCI = 20% × 720 = 144; goodwill = 648 + 144 − 720 = 72. This calculation assumes no unmentioned fair-value adjustments or additional consideration.",
      ),
      text(
        "في تاريخ فقد السيطرة يبلغ صافي أصول Hoof الدفتري 360 + 720 = 1,080؛ وحصة غير المسيطرين 20% × 1,080 = 216. يُستبعد كامل أصول Hoof والتزاماتها والشهرة وحصة غير المسيطرين، ويُثبت المقابل النقدي. ربح التصرف الموحد = 1,300 − (1,080 + 72 − 216) = 364 ألفًا. لا يُستخدم ربح بيع الاستثمار في قوائم Horse المنفصلة، 1,300 − 648 = 652، بوصفه ربح المجموعة.",
        "At loss of control Hoof's carrying net assets are 360 + 720 = 1,080 and NCI is 20% × 1,080 = 216. Derecognise all Hoof assets, liabilities, goodwill and NCI, and recognise the cash proceeds. The consolidated disposal gain is 1,300 − (1,080 + 72 − 216) = 364 thousand. The 1,300 − 648 = 652 gain on sale of the investment in Horse's separate figures is not the group gain.",
      ),
      text(
        "ظلّت Hoof تابعة حتى نهاية يوم السنة المالية، فتُضم نتائجها عن السنة كلها ثم يُعرض ربح فقد السيطرة. بالآلاف: الربح قبل الضريبة من النشاط = 306 + 252 = 558؛ ربح التصرف = 364؛ المجموع قبل الضريبة = 922؛ الضريبة المثبتة في المعطيات = 90 + 72 = 162؛ ربح السنة = 760. ينسب إلى غير المسيطرين 20% × ربح Hoof بعد الضريبة 180 = 36، وإلى ملاك الأم 724. لا تُنسب حصة من ربح التصرف لغير المسيطرين لأنه ربح فقد السيطرة المنسوب إلى الأم.",
        "Hoof remained a subsidiary until the financial year-end disposal date, so include its full-year results and then recognise the loss-of-control gain. In thousands: operating profit before tax = 306 + 252 = 558; disposal gain = 364; total profit before tax = 922; tax in the supplied figures = 90 + 72 = 162; period profit = 760. Attribute 20% × Hoof's 180 after-tax profit = 36 to NCI and 724 to parent owners. The loss-of-control gain itself is attributable to the parent.",
      ),
      text(
        "في مركز المجموعة بعد البيع لا يبقى استثمار Hoof ولا أصولها والتزاماتها أو حصتها غير المسيطرة: أصول غير متداولة 720؛ أصول متداولة 740 + نقد البيع 1,300 = 2,040؛ مجموع الأصول 2,760. رأس المال 1,080؛ والأرباح المحتجزة = 828 + ربح التصرف الموحد 364 + حصة الأم 80% × (أرباح Hoof المحتجزة 720 − 360 يوم الاقتناء) = 1,480؛ الالتزامات المتداولة 200. المجموع 1,080 + 1,480 + 200 = 2,760.",
        "After disposal the group has no Hoof investment, assets, liabilities or NCI: non-current assets 720; current assets 740 + sale cash 1,300 = 2,040; total assets 2,760. Share capital is 1,080; retained earnings = 828 + consolidated disposal gain 364 + parent's 80% × (Hoof retained earnings 720 − 360 at acquisition) = 1,480; current liabilities 200. The total is 1,080 + 1,480 + 200 = 2,760.",
      ),
      text(
        "للتثبت من القيد الموحد عند فقد السيطرة، يُحمَّل النقد 1,300 والالتزامات المستبعدة 200 وحصة غير المسيطرين المستبعدة 216، وتُدائن أصول Hoof المستبعدة 1,280 والشهرة 72 وربح التصرف 364؛ الطرفان 1,716. هذا قيد توضيحي لورقة التوحيد، ولا يحل محل قيد البيع في الدفاتر المنفصلة. إن كان ثمن البيع بعملة أخرى فلا يكفي هذا المثال لتحديد ربح نهائي من دون سعر صرف؛ كما تُفحص أي مكونات دخل شامل آخر سابقة قابلة لإعادة التصنيف إن وُجدت.",
        "As a consolidation worksheet check on loss of control, debit cash 1,300, derecognised liabilities 200 and derecognised NCI 216; credit Hoof assets derecognised 1,280, goodwill 72 and disposal gain 364; both sides equal 1,716. This illustrative group worksheet entry does not replace the sale entry in separate books. If the consideration is denominated in another currency, a final gain requires an exchange rate; also assess any pre-existing OCI components requiring reclassification, if present.",
      ),
    ],
    reference: "IFRS 10.25, B97–B99; IFRS 3.18–19",
  },

  {
    id: "ifrs-book2-ifrs10-quadra-saturn-midyear-disposal",
    standardCode: "IFRS 10",
    title: text("Quadra وSaturn: بيع شركة تابعة منتصف السنة بعد توزيع أرباح", "Quadra and Saturn: mid-year subsidiary disposal after a dividend"),
    facts: text(
      "اقتنت Quadra نسبة 80% من Saturn في 1 يناير 20X6 مقابل 560 ألفًا. يوم الاقتناء كان رأس مال Saturn بقيمة 200 ألف وأرباحها المحتجزة 376 ألفًا، والقيمة العادلة لحصة غير المسيطرين 134 ألفًا. اختارت Quadra قياس هذه الحصة بالقيمة العادلة ولم يحدث انخفاض في الشهرة. في 30 يونيو 20X9 باعت Quadra حصتها كلها في Saturn مقابل 700 ألف. تعرض بيانات Saturn للسنة المنتهية في 31 ديسمبر 20X9 أرباحًا محتجزة افتتاحية 430 ألفًا وربحًا للسنة كلها 48 ألفًا. دُفع توزيع نهائي عن 20X8 بقيمة 20 ألفًا في 14 مارس 20X9 ولم يكن قد سُجل في الأرصدة المعطاة. يفترض انتظام الربح خلال السنة؛ الأرقام جميعها بالآلاف وبعملة واحدة.",
      "Quadra acquired 80% of Saturn on 1 January 20X6 for 560 thousand. Saturn's acquisition-date share capital was 200 thousand, retained earnings 376 thousand and the fair value of NCI 134 thousand. Quadra elected fair-value NCI measurement, and goodwill has not been impaired. On 30 June 20X9 Quadra sold its entire Saturn interest for 700 thousand. Saturn's figures for the year ended 31 December 20X9 show opening retained earnings of 430 thousand and full-year profit of 48 thousand. A 20-thousand final dividend for 20X8 was paid on 14 March 20X9 but had not been recorded in the supplied balances. Profit is assumed to accrue evenly; all figures are in thousands in one currency.",
    ),
    question: text(
      "ما ربح بيع Saturn الذي يظهر في القوائم الموحدة لمجموعة Quadra للسنة المنتهية في 31 ديسمبر 20X9؟",
      "What gain on disposal of Saturn is reported in the Quadra group's consolidated financial statements for the year ended 31 December 20X9?",
    ),
    solution: [
      text(
        "حتى تاريخ فقد السيطرة يدخل من ربح Saturn السنوي نصفه فقط = 48 × 6/12 = 24 ألفًا. يجب تنزيل التوزيع المدفوع 20 من أرباح Saturn المحتجزة رغم عدم تسجيله في الأرصدة المعطاة. إذن أرباحها المحتجزة عند البيع = 430 + 24 − 20 = 434؛ وصافي الأصول = رأس المال 200 + 434 = 634 ألفًا. لا تُستخدم الأرباح السنوية كاملة لتقييم صافي الأصول في 30 يونيو.",
        "Include only Saturn's profit up to loss of control: 48 × 6/12 = 24 thousand. Deduct the paid 20 dividend from Saturn's retained earnings even though it was omitted from the supplied balances. Retained earnings on disposal = 430 + 24 − 20 = 434; net assets = share capital 200 + 434 = 634 thousand. Full-year profit must not be used for 30 June net assets.",
      ),
      text(
        "صافي الأصول يوم الاقتناء = 200 + 376 = 576؛ والشهرة على أساس حصة غير المسيطرين بالقيمة العادلة = المقابل 560 + القيمة العادلة للحصة 134 − 576 = 118 ألفًا. لا يُعاد حساب حصة غير المسيطرين يوم الاقتناء كنسبة 20% من صافي الأصول؛ فالسياسة المختارة هي القيمة العادلة.",
        "Acquisition-date net assets = 200 + 376 = 576; goodwill using fair-value NCI = consideration 560 + NCI fair value 134 − 576 = 118 thousand. Do not substitute 20% of net assets for acquisition-date NCI because the fair-value election was made.",
      ),
      text(
        "تتغير حصة غير المسيطرين من قيمتها العادلة عند الاقتناء بمقدار نصيبها في حركة صافي الأصول بعد الاقتناء. عند البيع = 134 + 20% × (الأرباح المحتجزة 434 − 376) = 145.6 ألفًا، مع غياب أي حركات أخرى أو انخفاض في الشهرة. التوزيع المدفوع مؤثر بالفعل في صافي الأصول والحصة؛ لا يُضاف ثمنه مرة ثانية إلى مقابل البيع.",
        "NCI rolls forward from acquisition-date fair value by its share of post-acquisition changes in net assets. At disposal it is 134 + 20% × (retained earnings 434 − 376) = 145.6 thousand, assuming no other movements or goodwill impairment. The paid dividend already affects net assets and NCI; it is not added again to sale consideration.",
      ),
      text(
        "ربح فقد السيطرة الموحد = المقابل 700 − [صافي أصول Saturn البالغ 634 + الشهرة 118 − حصة غير المسيطرين 145.6] = 93.6 ألفًا. يستبعد التوحيد أصول Saturn والتزاماتها وشهرتها وحصة غير المسيطرين اعتبارًا من 30 يونيو، ويُعترف بهذا الربح ضمن ربح أو خسارة المجموعة والمنسوب إلى ملاك الأم.",
        "Consolidated loss-of-control gain = consideration 700 − [Saturn net assets 634 + goodwill 118 − NCI 145.6] = 93.6 thousand. The group derecognises Saturn's assets, liabilities, goodwill and NCI on 30 June, and recognises this gain in group profit or loss attributable to parent owners.",
      ),
      text(
        "هذا حساب ربح البيع، لا حكمًا تلقائيًا بأن Saturn «عملية متوقفة». يُختبر عرض العملية المتوقفة بصورة مستقلة وفق تعريف IFRS 5 إذا توفرت وقائع كافية؛ كما تُفحص الضرائب وآثار الدخل الشامل الآخر السابق إن وُجدت قبل اعتماد قائمة كاملة.",
        "This calculates the disposal gain; it does not automatically classify Saturn as a discontinued operation. Assess IFRS 5's discontinued-operation definition separately if sufficient facts exist, and consider tax and any previous OCI effects before finalising a complete statement.",
      ),
    ],
    reference: "IFRS 10.25, B97–B99; IFRS 3.18–19; IFRS 5.32–33",
  },

  {
    id: "ifrs-book2-ifrs10-crystal-pebble-oci",
    standardCode: "IFRS 10",
    title: text("Crystal وPebble: ربح المجموعة والدخل الشامل الآخر", "Crystal and Pebble: group profit and other comprehensive income"),
    facts: text("في 1 يوليو 20X8 اشترت Crystal عدد 60,000 من أسهم Pebble البالغة 100,000. الأرقام التالية بالآلاف للسنة المنتهية في 31 ديسمبر 20X8: لدى Crystal إيراد 43,000، تكلفة مبيعات 28,000، دخل توزيعات من Pebble بمبلغ 2,000، مصروفات توزيع 2,000، إدارية 4,000، تمويل 500، ضريبة 1,400، وربح 9,100؛ ودخل شامل آخر لاستثمار في أداة حقوق ملكية 200. لدى Pebble إيراد 26,000، تكلفة مبيعات 18,000، مصروفات توزيع 800، إدارية 2,200، تمويل 300، ضريبة 900، وربح 3,800؛ وورد في قائمتها ربح إعادة تقييم مبنى 2,000. عند الاقتناء فاقت القيمة العادلة للمبنى قيمته الدفترية بمبلغ 1,000 وعمره المتبقي 20 سنة؛ وأعيد تقييمه في نهاية السنة مع زيادة إضافية مذكورة قدرها 1,000. باعت Crystal إلى Pebble بعد الاقتناء بضاعة بـ6,000 لا تزال كلها في مخزون Pebble؛ هامش التسعير زيادة 20% على التكلفة. تقرر انخفاض قيمة شهرة Pebble بمبلغ 500، وتقيس Crystal حصة غير المسيطرين بالقيمة العادلة الكاملة. تفترض الحالة انتظام الإيرادات والمصروفات خلال السنة ولا تعطي أسسًا أو معدلات للضريبة المؤجلة.", "On 1 July 20X8 Crystal acquired 60,000 of Pebble's 100,000 shares. Figures below are in thousands for the year ended 31 December 20X8. Crystal has revenue 43,000, cost of sales 28,000, dividend income from Pebble 2,000, distribution expense 2,000, administration 4,000, finance cost 500, tax 1,400 and profit 9,100; its other comprehensive income includes 200 for an equity-instrument investment. Pebble has revenue 26,000, cost of sales 18,000, distribution expense 800, administration 2,200, finance cost 300, tax 900 and profit 3,800; it reports a 2,000 building revaluation gain in its own OCI. At acquisition the building's fair value exceeded carrying amount by 1,000 and its remaining life was 20 years; it was revalued again at year-end with a stated further increase of 1,000. After acquisition Crystal sold goods to Pebble for 6,000, all still in Pebble's inventory; the selling price was cost plus 20%. Pebble goodwill impairment is assessed at 500, and Crystal uses full fair-value NCI measurement. The case assumes even accrual of income and expenses and gives no deferred-tax bases or rates."),
    question: text("أعد قائمة الربح أو الخسارة والدخل الشامل الآخر الموحدة للسنة المنتهية في 31 ديسمبر 20X8.", "Prepare the consolidated statement of profit or loss and other comprehensive income for the year ended 31 December 20X8."),
    solution: [
      text("تدخل نتائج Pebble من تاريخ السيطرة في 1 يوليو؛ وبفرض انتظام البنود تؤخذ نصف إيراداتها ومصروفاتها. يُحذف دخل التوزيعات الداخلي لدى Crystal البالغ 2,000. ويُحذف البيع الداخلي 6,000 من الإيراد والتكلفة؛ لأنه بزيادة 20% على التكلفة فالربح الكامن في البضاعة = 6,000 × 20/120 = 1,000، يخفض المخزون ويرفع تكلفة المبيعات الموحدة. البائع Crystal، لذلك لا يحمل هذا الحذف على حصة غير المسيطرين في Pebble.", "Include Pebble's results from control on 1 July; under the case's even-incurrence assumption take half its revenues and expenses. Eliminate Crystal's 2,000 intragroup dividend income. Eliminate the 6,000 internal sale from revenue and cost of sales; because the sale is at cost plus 20%, unrealised profit is 6,000 × 20/120 = 1,000, reducing group inventory and increasing group cost of sales. Crystal is the seller, so this elimination is not attributed to Pebble's NCI."),
      text("إهلاك الزيادة في القيمة العادلة للمبنى خلال ستة أشهر = 1,000 ÷ 20 × 6/12 = 25 ضمن المصروفات الإدارية الموحدة. تخفيض الشهرة 500 يظهر كمصروف انخفاض مستقل في هذا العرض بدل افتراض أنه دائمًا جزء من المصروفات الإدارية؛ وبما أن الشهرة مقاسة على أساس الحصة الكاملة، يحمل 40% منه على غير المسيطرين وفق افتراض الحالة.", "Additional six-month depreciation on the building's acquisition-date fair-value uplift is 1,000 ÷ 20 × 6/12 = 25 in group administration. Present the 500 goodwill impairment as a separate expense here rather than assume it is always an administrative expense; because full goodwill is recognised, 40% is attributed to NCI on the case's assumptions."),
      text("بالآلاف: الإيراد = 43,000 + 13,000 − 6,000 = 50,000؛ تكلفة المبيعات = 28,000 + 9,000 − 6,000 + 1,000 = 32,000؛ مجمل الربح 18,000؛ مصروفات التوزيع 2,400؛ الإدارية قبل تخفيض الشهرة 4,000 + 1,100 + 25 = 5,125؛ انخفاض الشهرة 500؛ التمويل 650؛ الربح قبل الضريبة 9,325؛ الضريبة المسجلة في بيانات السؤال 1,850؛ ربح الفترة التوضيحي 7,475. حصة غير المسيطرين في الربح = 40% × (3,800 ÷ 2 − 25 − 500) = 550؛ وحصة ملاك الأم = 6,925.", "In thousands: revenue = 43,000 + 13,000 − 6,000 = 50,000; cost of sales = 28,000 + 9,000 − 6,000 + 1,000 = 32,000; gross profit 18,000; distribution 2,400; administration before goodwill impairment 4,000 + 1,100 + 25 = 5,125; goodwill impairment 500; finance 650; profit before tax 9,325; recorded case tax expense 1,850; illustrative period profit 7,475. NCI's profit share is 40% × (3,800 ÷ 2 − 25 − 500) = 550; parent owners' share is 6,925."),
      text("وفق تفسير الحل التعليمي أن الزيادة الإضافية في قيمة المبنى 1,000 هي ربح إعادة التقييم الصافي اللاحق للاقتناء بعد مراعاة أساس القياس والإهلاك، يدخل 1,000 فقط من إعادة تقييم Pebble في الدخل الشامل الآخر الموحد، لا كامل مبلغ 2,000 في قائمتها المنفصلة. يضاف 200 من دخل Crystal الشامل الآخر كما عُرض في المعطيات؛ المجموع 1,200، وإجمالي الدخل الشامل 8,675. ينسب لغير المسيطرين 550 + 40% × 1,000 = 950، ولملاك الأم 7,725. لا يُحوّل ربح إعادة التقييم إلى ربح السنة لمجرد التوحيد.", "Under the teaching answer's interpretation that the building's further 1,000 increase is the net post-acquisition revaluation gain after the measurement basis and depreciation are taken into account, only 1,000 of Pebble's revaluation is in group OCI, not the full 2,000 in its separate statement. Add Crystal's stated 200 OCI, giving OCI of 1,200 and total comprehensive income of 8,675. Attribute 550 + 40% × 1,000 = 950 to NCI and 7,725 to parent owners. Consolidation does not turn the revaluation gain into current-period profit."),
      text("هذه الأرقام لا تحسم المعالجة الضريبية المؤجلة: يلزم فحص الأساس الضريبي لزيادة قيمة المبنى وإعادة تقييمه ولحذف ربح المخزون، ومعدل الضريبة وشروط الاعتراف وفق IAS 12؛ وقد تتغير بذلك الشهرة والربح والدخل الشامل وتوزيعهما. كذلك إن كانت عبارة «زيادة 1,000 إضافية» تقارن بالقيمة العادلة يوم الاقتناء قبل إهلاك نصف السنة، لا بالقيمة الدفترية فور إعادة التقييم، يُعاد حساب ربح إعادة التقييم بدل افتراض 1,000. وتصنيف مبلغ 200 لاستثمار حقوق الملكية ضمن OCI يفترض استيفاء معالجة IFRS 9 الواردة في بيانات الحالة.", "These figures do not resolve deferred tax. The tax bases of the building uplift and revaluation and the eliminated inventory profit, tax rate and recognition conditions must be assessed under IAS 12; goodwill, profit, OCI and allocations could change. If 'a further 1,000 increase' compares year-end fair value with acquisition-date fair value before the intervening depreciation rather than carrying amount immediately before revaluation, recompute the revaluation gain instead of assuming 1,000. The 200 equity-investment OCI classification also assumes the IFRS 9 treatment reflected in the given statements is valid."),
    ],
    reference: "IFRS 10.B86(c), B88, B94; IFRS 3.18–19; IAS 16.39, 42; IAS 36.C6–C8; IAS 12.19–20, 24; IFRS 9.5.7.5",
  },

  {
    id: "ifrs-book2-ifrs10-ps-midyear-dividends",
    standardCode: "IFRS 10",
    title: text("P وS: اقتناء أثناء السنة وتوزيعات داخلية", "P and S: mid-year acquisition and intragroup dividends"),
    facts: text("اقتنت P نسبة 60% من أسهم S في 1 أبريل 20X5، ورأس مال S 100,000. للسنة المنتهية في 31 ديسمبر 20X5، سجلت P إيرادًا 170,000 وتكلفة مبيعات 65,000، ودخل توزيعات من S بمبلغ 3,600، ومصروفات إدارية 43,000 وضريبة 23,000؛ ربحها 42,600. وسجلت S إيرادًا 80,000 وتكلفة مبيعات 36,000 ومصروفات إدارية 12,000 وضريبة 8,000؛ ربحها 24,000. دفعت P توزيعات 12,000 وS توزيعات 6,000 في 31 ديسمبر؛ الأرباح المحتجزة أول الفترة 81,000 لـP و40,000 لـS، وآخرها 111,600 و58,000. يفترض الحل التعليمي انتظام إيرادات S ومصروفاتها خلال السنة، ولا تُذكر تعديلات قيمة عادلة يوم الاقتناء أو قياس حصة غير المسيطرين بالقيمة العادلة.", "P acquired 60% of S on 1 April 20X5; S has share capital of 100,000. For the year ended 31 December 20X5, P recorded revenue 170,000, cost of sales 65,000, dividend income from S of 3,600, administration 43,000 and tax 23,000; its profit was 42,600. S recorded revenue 80,000, cost of sales 36,000, administration 12,000 and tax 8,000; its profit was 24,000. P paid dividends of 12,000 and S paid 6,000 on 31 December. Opening retained earnings were 81,000 for P and 40,000 for S; closing balances were 111,600 and 58,000. The teaching solution assumes S's income and expenses arose evenly through the year; no acquisition-date fair-value adjustments or fair-value NCI measurement are specified."),
    question: text("أعد قائمة الربح أو الخسارة الموحدة للسنة المنتهية في 31 ديسمبر 20X5 ومقتطفات الأرباح المحتجزة وحصة غير المسيطرين من قائمة التغيرات في حقوق الملكية.", "Prepare the consolidated statement of profit or loss for the year ended 31 December 20X5 and the retained-earnings and NCI extracts from the statement of changes in equity."),
    solution: [
      text("تدخل نتائج S منذ 1 أبريل فقط. بافتراض انتظام تحقق البنود، مدة ما بعد الاقتناء 9/12: إيراد S = 60,000، تكلفة مبيعات 27,000، مصروفات إدارية 9,000، ضريبة 6,000، وربح 18,000. أما ربح 6,000 قبل الاقتناء فلا يدخل ربح المجموعة. تقسيم 9/12 افتراض خاص بالحالة؛ في التطبيق تُستخدم نتائج الفترة الفعلية إذا توافرت ولا يفرض IFRS 10 التقسيم الخطي.", "Include S's results only from 1 April. On the stated even-incurrence assumption, the post-acquisition period is 9/12: S revenue 60,000, cost of sales 27,000, administration 9,000, tax 6,000 and profit 18,000. The 6,000 pre-acquisition profit is not group-period profit. The 9/12 split is a case-specific approximation; use actual period results when available, as IFRS 10 does not prescribe straight-line allocation."),
      text("تُحذف توزيعات S إلى P، البالغة 6,000 × 60% = 3,600، من دخل P عند التوحيد. إيراد المجموعة 170,000 + 60,000 = 230,000؛ تكلفة مبيعاتها 65,000 + 27,000 = 92,000؛ مجمل الربح 138,000؛ المصروفات الإدارية 52,000؛ الربح قبل الضريبة 86,000؛ الضريبة 29,000؛ ربح السنة 57,000. لا تدخل توزيعات S ضمن دخل المجموعة.", "Eliminate S's 6,000 × 60% = 3,600 dividend paid to P from P's income on consolidation. Group revenue is 170,000 + 60,000 = 230,000; cost of sales 65,000 + 27,000 = 92,000; gross profit 138,000; administration 52,000; profit before tax 86,000; tax 29,000; profit for the year 57,000. S's intragroup dividend is not group income."),
      text("حصة غير المسيطرين في ربح ما بعد الاقتناء = 40% × 18,000 = 7,200، والربح المنسوب لملاك الأم = 57,000 − 7,200 = 49,800. الأرباح المحتجزة المنسوبة للأم: أول الفترة 81,000؛ ناقص توزيعات P إلى ملاكها 12,000؛ زائد ربح ملاك الأم 49,800؛ آخر الفترة 118,800. فحص بديل: أرباح S المحتجزة يوم الاقتناء = 40,000 + 6,000 = 46,000؛ الزيادة بعد الاقتناء حتى نهاية السنة = 58,000 − 46,000 = 12,000؛ ونصيب P منها 7,200، فيساوي 111,600 + 7,200 = 118,800.", "NCI's share of post-acquisition profit is 40% × 18,000 = 7,200, leaving 57,000 − 7,200 = 49,800 attributable to parent owners. Parent-attributable retained earnings: opening 81,000, less P's 12,000 dividend to its owners, plus 49,800 parent profit, closing 118,800. Cross-check: S retained earnings at acquisition are 40,000 + 6,000 = 46,000; the post-acquisition increase to year-end is 58,000 − 46,000 = 12,000; P's 60% share is 7,200, yielding 111,600 + 7,200 = 118,800."),
      text("إن اختير قياس حصة غير المسيطرين يوم الاقتناء بنصيبها النسبي، ومع افتراض أن 100,000 + 46,000 تمثل صافي الأصول القابلة للتحديد دون تعديلات قيمة عادلة أخرى، يكون رصيدها الابتدائي يوم الاقتناء 40% × 146,000 = 58,400؛ ثم يزيد 7,200 من الربح وينخفض 2,400 توزيعات S المدفوعة للخارج، فيصبح 63,200. أما إذا اختيرت القيمة العادلة للحصة يوم الاقتناء، فلا يمكن حساب رصيدها النهائي من المعطيات، بل يساوي قيمة الاقتناء غير المعطاة + 4,800. توزيعات S إلى P تُحذف، بينما توزيعاتها إلى غير المسيطرين تخفض حصتهم في حقوق الملكية.", "If acquisition-date NCI is measured proportionately, and assuming the 100,000 + 46,000 balances represent identifiable net assets with no other fair-value adjustments, initial NCI is 40% × 146,000 = 58,400; add 7,200 profit and deduct 2,400 S dividends paid externally for closing NCI of 63,200. If fair-value NCI is elected at acquisition, its closing total cannot be calculated from the facts: it is the unspecified acquisition-date fair value + 4,800. S dividends to P are eliminated, whereas those to outside NCI reduce its equity."),
    ],
    reference: "IFRS 10.B86(c), B88, B94; IFRS 3.19; IAS 1.106",
  },

  {
    id: "ifrs-book2-ifrs10-ps-basic-profit",
    standardCode: "IFRS 10",
    title: text("P وS: الربح الموحد ونصيب غير المسيطرين", "P and S: consolidated profit and NCI allocation"),
    facts: text("اقتنت P نسبة 75% من أسهم S العادية عند تأسيس S في 20X3. للسنة المنتهية في 31 ديسمبر 20X6، أرقام P: إيراد 75,000، تكلفة مبيعات 30,000، مصروفات إدارية 14,000، ضريبة دخل 10,000، وربح 21,000؛ وأرقام S: إيراد 38,000، تكلفة مبيعات 20,000، مصروفات إدارية 8,000، ضريبة دخل 2,000، وربح 8,000. الأرباح المحتجزة أول الفترة 87,000 لـP و17,000 لـS، وآخرها 108,000 و25,000 على الترتيب. لا تذكر الحالة عمليات داخلية أو توزيعات أو دخلًا شاملًا آخر.", "P acquired 75% of S ordinary shares when S was incorporated in 20X3. For the year ended 31 December 20X6, P reports revenue 75,000, cost of sales 30,000, administrative expenses 14,000, income tax 10,000 and profit 21,000; S reports revenue 38,000, cost of sales 20,000, administrative expenses 8,000, income tax 2,000 and profit 8,000. Opening retained earnings are 87,000 for P and 17,000 for S; closing balances are 108,000 and 25,000 respectively. No intragroup transactions, dividends or other comprehensive income are specified."),
    question: text("أعد قائمة الربح أو الخسارة الموحدة ومقتطف التغيرات في حقوق الملكية الخاص بالأرباح المحتجزة وحصة غير المسيطرين.", "Prepare the consolidated statement of profit or loss and the retained-earnings and NCI extract of the statement of changes in equity."),
    solution: [
      text("تُجمع بنود الأم والتابعة كاملة لأن S تحت السيطرة طوال السنة: الإيراد 75,000 + 38,000 = 113,000؛ تكلفة المبيعات 50,000؛ مجمل الربح 63,000؛ المصروفات الإدارية 22,000؛ الربح قبل الضريبة 41,000؛ الضريبة 12,000؛ وربح السنة 29,000. لا تضرب إيرادات S أو مصروفاتها في 75%؛ النسبة تُستخدم لتخصيص الربح بين الملاك.", "Combine 100% of both entities' line items because S was controlled throughout the year: revenue 75,000 + 38,000 = 113,000; cost of sales 50,000; gross profit 63,000; administration 22,000; profit before tax 41,000; tax 12,000; profit for the year 29,000. Do not multiply S revenue or expenses by 75%; use that percentage to allocate profit between owners."),
      text("حصة غير المسيطرين في ربح السنة = 25% × 8,000 = 2,000؛ والربح المنسوب لملاك الأم = 29,000 − 2,000 = 27,000. مقتطف الأرباح المحتجزة المنسوبة للأم: أول الفترة 87,000 + 75% × 17,000 = 99,750؛ تضاف أرباح السنة 27,000؛ آخر الفترة 126,750، وهو أيضًا 108,000 + 75% × 25,000.", "NCI's share of annual profit is 25% × 8,000 = 2,000; profit attributable to parent owners is 29,000 − 2,000 = 27,000. The parent-attributable retained-earnings extract begins with 87,000 + 75% × 17,000 = 99,750, adds 27,000 profit, and closes at 126,750, also equal to 108,000 + 75% × 25,000."),
      text("جزء الأرباح المحتجزة العائد لغير المسيطرين يرتفع من 25% × 17,000 = 4,250 إلى 25% × 25,000 = 6,250. هذه مبالغ تخص مكوّن الأرباح فقط، لا إجمالي حصة غير المسيطرين في حقوق الملكية؛ فلا تتوافر قيمة رأس مال S أو قياس الحصة عند الاقتناء لحساب الإجمالي. لا يُنشأ قيد مستقل لمجرد توزيع ربح المجموعة.", "The retained-earnings component attributable to NCI rises from 25% × 17,000 = 4,250 to 25% × 25,000 = 6,250. These are earnings components, not total NCI equity; S's capital value and acquisition-date NCI measurement are not provided to calculate the total. Attribution of group profit alone does not create a separate journal entry."),
    ],
    reference: "IFRS 10.22, B86(a), B94; IAS 1.106",
  },
  {
    id: "ifrs-book2-ifrs10-ps-intragroup-goods",
    standardCode: "IFRS 10",
    title: text("P وS: بيع داخلي ومخزون نهاية السنة", "P and S: intragroup sale and closing inventory"),
    facts: text("باستخدام أرقام P وS للسنة المنتهية في 31 ديسمبر 20X6: إيراد P 75,000 وتكلفة مبيعاتها 30,000 ومصروفاتها الإدارية 14,000 وضريبتها 10,000؛ إيراد S 38,000 وتكلفة مبيعاتها 20,000 ومصروفاتها الإدارية 8,000 وضريبتها 2,000. تمتلك P نسبة 75% من S منذ تأسيسها. باعت S بضاعة إلى P مقابل 5,000، وكانت تكلفتها على S من الموردين الخارجيين 3,000؛ بقي نصف البضاعة في مخزون P في 31 ديسمبر 20X6. لا تُعطى بيانات الأسس الضريبية أو معدل الضريبة المؤجلة.", "Using P and S figures for the year ended 31 December 20X6: P revenue is 75,000, cost of sales 30,000, administration 14,000 and tax 10,000; S revenue is 38,000, cost of sales 20,000, administration 8,000 and tax 2,000. P has owned 75% of S since incorporation. S sold goods to P for 5,000, having bought them from outside suppliers for 3,000; half the goods remained in P inventory at 31 December 20X6. Tax bases and a deferred-tax rate are not supplied."),
    question: text("أعد قائمة الربح أو الخسارة الموحدة بعد تعديل البيع الداخلي والمخزون غير المباع.", "Prepare the revised consolidated statement of profit or loss after adjusting the intragroup sale and unsold inventory."),
    solution: [
      text("تُحذف معاملة البيع الداخلية كاملة من الإيراد وتكلفة المبيعات: الإيراد 75,000 + 38,000 − 5,000 = 108,000. ربح S على البضاعة المباعة داخليًا = 5,000 − 3,000 = 2,000؛ نصفه لا يزال في المجموعة، فالربح غير المحقق = 1,000. يُخفض المخزون 1,000 وتُزاد تكلفة المبيعات الموحدة بذلك المبلغ؛ فتكلفة المبيعات = 30,000 + 20,000 − 5,000 + 1,000 = 46,000.", "Eliminate the entire intragroup sale from revenue and cost of sales: revenue is 75,000 + 38,000 − 5,000 = 108,000. S's profit on the goods sold internally is 5,000 − 3,000 = 2,000; half remains within the group, so unrealised profit is 1,000. Reduce inventory by 1,000 and increase group cost of sales by the same amount; group cost of sales is 30,000 + 20,000 − 5,000 + 1,000 = 46,000."),
      text("مجمل الربح = 62,000؛ المصروفات الإدارية = 22,000؛ الربح قبل الضريبة = 40,000؛ وضريبة السنة في أرقام السؤال = 12,000؛ فيكون الربح الموضح 28,000 قبل أي أثر ضريبي مؤجل غير محدد. لأن S هي البائع، يُخفض ربحها القابل للتوزيع داخل المجموعة 8,000 − 1,000 = 7,000؛ حصة غير المسيطرين من الربح = 25% × 7,000 = 1,750، وحصة ملاك الأم = 26,250.", "Gross profit is 62,000; administration 22,000; profit before tax 40,000; and the tax expense supplied is 12,000, giving illustrative profit of 28,000 before any unspecified deferred-tax effect. Because S is the seller, its profit for group attribution is reduced from 8,000 to 7,000; NCI's profit share is 25% × 7,000 = 1,750 and parent owners' share is 26,250."),
      text("يختلف حذف مبلغ البيع الداخلي 5,000 من طرفَي القائمة عن حذف الربح غير المحقق 1,000 من المخزون والربح؛ الأول لا يغير ربح المجموعة وحده، والثاني يخفضه. تطبق IAS 12 على الفرق المؤقت الناشئ إذا توافرت بيانات الأساس الضريبي ومعدل الضريبة وشروط الاعتراف، ولا يُستنتج مبلغ ضريبة مؤجلة من المعطيات الحالية.", "Eliminating the 5,000 internal sale from both sides of the statement differs from eliminating 1,000 unrealised profit from inventory and earnings: the first alone does not change group profit, while the second reduces it. Apply IAS 12 to any resulting temporary difference when tax bases, rate and recognition conditions are known; no deferred-tax amount can be inferred from the stated facts."),
    ],
    reference: "IFRS 10.B86(a), B86(c), B94; IAS 12.24",
  },

  {
    id: "ifrs-book2-ifrs13-anscome-land-highest-use",
    standardCode: "IFRS 13",
    title: text("Anscome: استخدام الأرض الصناعي أم السكني", "Anscome: industrial or residential use of land"),
    facts: text("اقتنت Anscome أرضًا ضمن تجميع أعمال. الأرض مطورة حاليًا كموقع لمصنع. بنيت مواقع قريبة حديثًا لمبانٍ سكنية مرتفعة، وتشير التغييرات الأخيرة في التنظيم إلى إمكان تطوير موقع المصنع سكنيًا. يرى المشاركون في السوق أن هذه الإمكانية قد تدخل في تسعير الأرض. لا تعطي الحالة قيمًا نقدية للموقع تحت أي من الاستخدامين.", "Anscome acquired land in a business combination. It is currently developed as a factory site. Nearby sites have recently been developed for high-rise apartments, and recent zoning changes indicate that residential redevelopment may be possible. Market participants might incorporate that possibility when pricing the land. The case supplies no numerical values for either use."),
    question: text("كيف يُحدد الاستخدام الأعلى والأفضل للأرض عند قياس قيمتها العادلة؟", "How is the land's highest and best use determined for fair-value measurement?"),
    solution: [
      text("الاستخدام الحالي الصناعي هو نقطة البداية المفترضة، لكنه ليس نتيجة نهائية إذا أشارت معلومات السوق إلى بديل أعلى قيمة. يُختبر الاستخدام السكني على أساس إمكانية التنفيذ المادية، والسماح القانوني في ضوء التنظيم، والجدوى المالية من منظور المشاركين في السوق؛ مجرد وجود مبانٍ قريبة لا يثبت بذاته كل شرط.", "Existing industrial use is the starting presumption, not the final answer when market evidence suggests a higher-value alternative. Test residential use for physical possibility, legal permissibility under zoning and financial feasibility from market participants' perspective; nearby buildings alone do not prove every condition."),
      text("تُقارن قيمة الأرض في استخدامها الصناعي الحالي مع قيمتها كموقع شاغر للاستخدام السكني، بعد أخذ تكلفة هدم المصنع وغيرها من تكاليف التحويل ومخاطر التصاريح والتنفيذ في الاعتبار. إذا كان صافي الاستخدام السكني الممكن قانونًا وماليًا أعلى، فهو الاستخدام الأعلى والأفضل حتى لو واصلت Anscome التشغيل الصناعي؛ وإلا يبقى الاستخدام الصناعي. لا يمكن حساب قيمة عادلة رقمية أو تفضيل قطعي دون مدخلات التقييم.", "Compare the land's value in current industrial use with its value as a vacant residential site after considering demolition, conversion costs and permitting/execution uncertainty. If the legally and financially feasible net residential use gives the higher market-participant value, it is highest and best use even if Anscome keeps operating the factory; otherwise industrial use remains. No numerical fair value or unconditional choice is possible without valuation inputs."),
      text("هذا اختبار قياس لأصل غير مالي وفق IFRS 13، وليس قرارًا إداريًا بالبيع أو إنشاء قيد محاسبي مستقل لمجرد المقارنة. عند تجميع الأعمال يقاس الأصل القابل للتحديد عند الاقتناء وفق IFRS 3 مع مراعاة الاستثناءات ذات الصلة.", "This is a measurement assessment for a non-financial asset under IFRS 13, not a management decision to sell or a standalone journal entry merely for comparing uses. In a business combination, the identifiable asset is measured at acquisition under IFRS 3, subject to relevant exceptions."),
    ],
    reference: "IFRS 13.27–32; IFRS 3.18",
  },
  {
    id: "ifrs-book2-ifrs13-searcher-rd-project",
    standardCode: "IFRS 13",
    title: text("Searcher: مشروع بحث وتطوير محتفظ به دفاعيًا", "Searcher: defensively held R&D project"),
    facts: text("اقتنت Searcher مشروع بحث وتطوير في تجميع أعمال. لا تنوي إكماله لأنه قد ينافس مشروعها التقني القائم، بل تخطط للاحتفاظ به لمنع المنافسين من الوصول إلى التقنية. لو اشترته Developer، التي لا تمتلك تقنية مماثلة، لاستمرت في تطويره مع أصولها المكملة لتعظيم قيمة مجموعة الأصول. لا تورد الحالة سعر بيع أو تدفقات نقدية رقمية.", "Searcher acquired an R&D project in a business combination. It does not intend to complete it because it could compete with its existing technology project; instead it plans to hold it to prevent competitors obtaining the technology. Developer, a market participant without similar technology, would continue development with complementary assets to maximise the value of its asset group. No sale price or numerical cash flows are provided."),
    question: text("على أي أساس تُقاس القيمة العادلة لمشروع البحث والتطوير؟", "On what basis is the R&D project's fair value measured?"),
    solution: [
      text("لا يُختزل القياس في قيمة Searcher الدفاعية أو في صفر بسبب قرارها عدم الإكمال. IFRS 13 ينظر إلى الاستخدام الأعلى والأفضل لأصل غير مالي من منظور المشاركين في السوق؛ وقد يختلف عن نية المقتني. على وقائع الحالة، يستمر مشارك مثل Developer في تطوير المشروع إذا كان هذا الاستخدام ممكنًا ماديًا وقانونيًا ومجديًا ماليًا ويحقق أعلى قيمة.", "Measurement is not limited to Searcher's defensive value or reduced to zero because it will not complete the project. IFRS 13 assesses a non-financial asset's highest and best use from market participants' perspective, which can differ from the acquirer's intention. On these facts, a participant such as Developer would continue developing the project if that use is physically possible, legally permissible, financially feasible and value-maximising."),
      text("تُقاس القيمة العادلة بسعر بيع المشروع في معاملة منظمة يوم القياس، على افتراض استخدام المشتري له مع أصول والتزامات مكملة متاحة له أو قابلة للحصول عليها؛ لا يُضاف إلى سعر المشروع كامل قيمة تلك الأصول المكملة. تحتاج القيمة الرقمية إلى افتراضات وتسعير المشاركين في السوق غير المعطاة، ولذلك لا يُختلق مبلغ أو قيد.", "Fair value is the price for selling the project in an orderly transaction at the measurement date, assuming the buyer uses it with complementary assets and liabilities available to or obtainable by that buyer; the full value of those complementary items is not added to the project's price. A numerical amount requires market-participant pricing inputs not provided here, so no amount or journal entry is invented."),
      text("يُراجع أيضًا استيفاء المشروع تعريف الأصل غير الملموس القابل للتحديد للاعتراف منفصلًا عن الشهرة في تجميع الأعمال؛ ولا يحسم مجرد وصفه كمشروع بحث وتطوير وحده القياس أو الاعتراف.", "Separately assess whether the project qualifies as an identifiable intangible asset recognised apart from goodwill in the business combination; calling it an R&D project alone does not settle recognition or measurement."),
    ],
    reference: "IFRS 13.9, 27–32; IFRS 3.18, B31–B34",
  },

  {
    id: "ifrs-book2-ifrs10-ps-plant-transfer",
    standardCode: "IFRS 10",
    title: text("P وS: بيع أصل ثابت داخل المجموعة", "P and S: intragroup sale of plant"),
    facts: text("تمتلك P نسبة 60% من S. في 1 يناير 20X1 باعت S إلى P آلة بلغت تكلفتها الدفترية 10,000 بمبلغ 12,500. تنتهي سنة الشركتين في 31 ديسمبر 20X1، وتحسبان إهلاك الآلة بمعدل 10% سنويًا. تتضمن أرباح P المحتجزة البالغة 27,000 إهلاك الآلة على تكلفة شرائها، وتتضمن أرباح S المحتجزة البالغة 18,000 ربح بيعها الداخلي. لا تُعطى بيانات للضريبة أو أرباح ما قبل الاقتناء.", "P owns 60% of S. On 1 January 20X1 S sold plant with a 10,000 carrying amount to P for 12,500. Both entities report at 31 December 20X1 and depreciate the plant at 10% a year. P's retained earnings of 27,000 include depreciation based on its purchase price; S's retained earnings of 18,000 include the intragroup sale profit. Tax data and pre-acquisition profits are not supplied."),
    question: text("أظهر تسوية الأرباح المحتجزة الموحدة في 31 ديسمبر 20X1.", "Show the consolidated retained-earnings working at 31 December 20X1."),
    solution: [
      text("ربح البيع المثبت لدى S = 12,500 − 10,000 = 2,500، وهو غير محقق من منظور المجموعة. يخفض ربح S المحتجز إلى 18,000 − 2,500 = 15,500 ويخفض الأصل 2,500 عند الإلغاء. لأن S هي البائع، يتحمل ملاك الأم وغير المسيطرين الربح الملغى بنسبة ملكيتهما.", "S recorded a 12,500 − 10,000 = 2,500 gain, unrealised from the group's perspective. Eliminate it by reducing S's retained earnings from 18,000 to 15,500 and reducing plant by 2,500. Because S is the seller, the eliminated gain affects parent owners and NCI in their ownership proportions."),
      text("إهلاك P الزائد بسبب سعر التحويل = 10% × (12,500 − 10,000) = 250 لسنة كاملة. يُعكس هذا الإهلاك بزيادة الأصل وأرباح P المحتجزة 250. صافي تخفيض القيمة الدفترية للآلة في القوائم الموحدة = 2,500 − 250 = 2,250؛ فتساوي قيمتها بعد سنة، في حدود هذه المعطيات، 10,000 − 1,000 = 9,000 لا 12,500 − 1,250 = 11,250.", "P's excess depreciation arising from the transfer price is 10% × (12,500 − 10,000) = 250 for the full year. Reverse that depreciation by increasing plant and P's retained earnings by 250. The net reduction in the consolidated plant balance is 2,500 − 250 = 2,250; on these facts its year-end amount is 10,000 − 1,000 = 9,000 rather than 12,500 − 1,250 = 11,250."),
      text("أرباح المجموعة المحتجزة المنسوبة لملاك الأم في هذا التمرين = أرباح P المصححة (27,000 + 250) + 60% × أرباح S المصححة 15,500 = 36,550. حصة غير المسيطرين من أرباح S المذكورة = 40% × 15,500 = 6,200؛ وهذا جزء الأرباح فقط، وليس إجمالي رصيد حصة غير المسيطرين الذي يحتاج بيانات الاقتناء. لا يُنشأ مبلغ ضريبة مؤجلة لأن الأساس الضريبي والمعدل غير معطيين؛ تُراجع آثار IAS 12 عند توفرهما.", "Parent-attributable consolidated retained earnings in this exercise are corrected P retained earnings (27,000 + 250) + 60% × corrected S retained earnings of 15,500 = 36,550. NCI's share of the stated S earnings is 40% × 15,500 = 6,200; this is the earnings component, not total NCI, which requires acquisition-date data. No deferred-tax amount is invented without tax-base and rate information; assess IAS 12 when those data are available."),
    ],
    reference: "IFRS 10.B86(c); IAS 12.24",
  },

  {
    id: "ifrs-book2-ifrs10-ping-pong-consolidated-position",
    standardCode: "IFRS 10",
    title: text("Ping وPong: قائمة المركز المالي الموحدة", "Ping and Pong: consolidated statement of financial position"),
    facts: text("في 30 يونيو 20X8، تظهر قوائم Ping: ممتلكات وآلات 50,000، استثمار في 20,000 سهم من Pong بتكلفة 30,000، مخزون 3,000، مدينون خارجيون 16,000، نقد 2,000؛ رأس مال 45,000، فائض إعادة تقييم 12,000، أرباح محتجزة 26,000، مستحق إلى Pong بمبلغ 8,000، ودائنون تجاريون 10,000. وتظهر قوائم Pong: ممتلكات وآلات 40,000، مخزون 8,000، مستحق من Ping بمبلغ 10,000، مدينون خارجيون 7,000؛ رأس مال 25,000، فائض إعادة تقييم 5,000، أرباح محتجزة 28,000، ودائنون تجاريون 7,000. اقتنت Ping نسبة 80% في 1 يوليو 20X7، وكانت أرباح Pong المحتجزة يومئذ 6,000. دفعت Ping نقدًا 30,000 ووعدت بمبلغ 10,000 في 1 يوليو 20X9؛ معدل الخصم 7%. كانت لدى Pong علامة مطورة داخليًا قيمتها العادلة يوم الاقتناء 5,000، ولم يتغير رأس مالها أو فائض إعادة تقييمها منذ الاقتناء. قُدرت حصة غير المسيطرين بالقيمة العادلة 9,000 عند الاقتناء، ولا يوجد انخفاض في الشهرة. أرسلت Ping مبلغ 2,000 سدادًا لبضاعة فوترتها Pong ولم يصل التحويل إلى Pong بنهاية الفترة. لم تُعطَ قواعد الضريبة للعلامة أو عمرها النافع.", "At 30 June 20X8, Ping reports PPE 50,000, an investment in 20,000 Pong shares at cost 30,000, inventory 3,000, external receivables 16,000 and cash 2,000; share capital 45,000, revaluation surplus 12,000, retained earnings 26,000, an 8,000 payable to Pong and trade payables 10,000. Pong reports PPE 40,000, inventory 8,000, a 10,000 receivable from Ping and other receivables 7,000; share capital 25,000, revaluation surplus 5,000, retained earnings 28,000 and trade payables 7,000. Ping acquired 80% on 1 July 20X7, when Pong retained earnings were 6,000. Ping paid 30,000 cash and promised 10,000 on 1 July 20X9; the discount rate is 7%. Pong had an internally developed brand with acquisition-date fair value 5,000, and its capital and revaluation surplus have not changed since acquisition. NCI was measured at fair value of 9,000 at acquisition; goodwill has not been impaired. Ping remitted 2,000 for goods invoiced by Pong, but Pong had not received the transfer at period end. No tax bases or useful life for the brand are provided."),
    question: text("أعد قائمة المركز المالي الموحدة لـPing في 30 يونيو 20X8، مبينًا حساب الشهرة والمقابل المؤجل وحصة غير المسيطرين وتسوية النقد بالطريق والحسابات المتبادلة.", "Prepare Ping's consolidated statement of financial position at 30 June 20X8, showing goodwill, deferred consideration, NCI, cash in transit and intragroup balance adjustments."),
    solution: [
      text("الملكية = 20,000 ÷ 25,000 = 80%. القيمة الحالية للمقابل المؤجل يوم الاقتناء = 10,000 ÷ 1.07² = 8,734 تقريبًا؛ إجمالي المقابل = 38,734. صافي الأصول المحددة يوم الاقتناء = 25,000 رأس مال + 5,000 فائض تقييم + 6,000 أرباح محتجزة + 5,000 علامة تجارية = 41,000. الشهرة قبل أي ضريبة مؤجلة غير معطاة = 38,734 + 9,000 حصة غير مسيطرة بالقيمة العادلة − 41,000 = 6,734. لا يُدمج استثمار Ping البالغ 30,000 كأصل مستقل بعد حذف الاستثمار مقابل حقوق ملكية التابعة.", "Ownership is 20,000 ÷ 25,000 = 80%. Acquisition-date present value of deferred consideration is 10,000 ÷ 1.07² = about 8,734; total consideration is 38,734. Identifiable net assets at acquisition are 25,000 capital + 5,000 revaluation surplus + 6,000 retained earnings + 5,000 brand = 41,000. Goodwill before any unspecified deferred tax is 38,734 + 9,000 fair-value NCI − 41,000 = 6,734. Ping's 30,000 investment is eliminated against Pong's equity rather than carried as a separate group asset."),
      text("بعد سنة يبلغ المقابل المؤجل 10,000 ÷ 1.07 = 9,346 تقريبًا، ويظهر فرق 612 بين المبلغين المقربين ضمن تكلفة التمويل. أرباح Pong بعد الاقتناء = 28,000 − 6,000 = 22,000؛ نصيب المجموعة 17,600، فالأرباح المحتجزة الموحدة وفق التقريب المستخدم = 26,000 − 612 + 17,600 = 42,988. حصة غير المسيطرين = 9,000 + 20% × 22,000 = 13,400؛ وفائض إعادة التقييم الموحد = 12,000 لعدم حدوث زيادة لاحقة لدى Pong.", "After one year the deferred amount is about 10,000 ÷ 1.07 = 9,346; the 612 difference between rounded balances is a finance cost. Pong's post-acquisition retained earnings are 28,000 − 6,000 = 22,000; the group's share is 17,600, so rounded consolidated retained earnings are 26,000 − 612 + 17,600 = 42,988. NCI is 9,000 + 20% × 22,000 = 13,400; consolidated revaluation surplus is 12,000 because Pong has had no post-acquisition increase."),
      text("فرق الحسابين المتبادلين 10,000 مدين لدى Pong مقابل 8,000 دائن لدى Ping هو سداد 2,000 بالطريق. يُضاف 2,000 إلى نقد Pong ويُخفض مدينه إلى 8,000، ثم يُحذف المدين والدائن المتطابقان 8,000. لا ينشأ من هذه الواقعة وحدها ربح مخزون غير محقق، إذ لا تعطي الحالة هامش البيع أو مقدار البضاعة الباقية.", "The difference between Pong's 10,000 receivable and Ping's 8,000 payable is the 2,000 remittance in transit. Add 2,000 to Pong's cash and reduce its receivable to 8,000, then eliminate the matching 8,000 receivable and payable. These facts alone do not support an unrealised inventory-profit adjustment because no sales margin or remaining-goods amount is given."),
      text("الأصول الموحدة وفق معطيات الحالة والتقريب: ممتلكات وآلات 90,000؛ شهرة 6,734؛ علامة 5,000؛ مخزون 11,000؛ مدينون خارجيون 23,000؛ نقد 4,000؛ الإجمالي 139,734. تقابلها حقوق ملكية الأم: رأس مال 45,000 + فائض تقييم 12,000 + أرباح محتجزة 42,988 = 99,988؛ وحصة غير مسيطرين 13,400؛ ودائنون خارجيون 17,000؛ ومقابل مؤجل 9,346؛ الإجمالي 139,734. الأرقام مقربة إلى أقرب وحدة مع اعتماد فرق التمويل بين رصيدي الدين المقربين.", "Using the case's inputs and rounding, group assets are PPE 90,000; goodwill 6,734; brand 5,000; inventory 11,000; external receivables 23,000; cash 4,000; total 139,734. Against this are parent equity: share capital 45,000 + revaluation surplus 12,000 + retained earnings 42,988 = 99,988; NCI 13,400; external trade payables 17,000; and deferred consideration 9,346; total 139,734. Amounts are rounded to the nearest unit using the difference between rounded debt balances as the finance cost."),
      text("تنبيهان للتطبيق الفعلي: إذا ظلت القاعدة الضريبية للعلامة دون قيمتها الدفترية، يلزم تقييم التزام ضريبي مؤجل وفق IAS 12، ما يغير صافي الأصول والشهرة؛ وكذلك لا يمكن تحديد إطفاء العلامة لاحقًا دون عمرها النافع. وبالقراءة الحرفية للتاريخين، استحقاق المقابل في 1 يوليو 20X9 يقع بعد أكثر من 12 شهرًا من 30 يونيو 20X8 بيوم واحد؛ لذلك يُعرض غير متداول إذا كان حق التأجيل قائمًا ولا توجد شروط أخرى تفرض السداد المبكر.", "Two real-world qualifications: if the brand's tax base is below its carrying amount, assess a deferred-tax liability under IAS 12, changing net assets and goodwill; subsequent brand amortisation cannot be calculated without its useful life. Reading the dates literally, 1 July 20X9 falls one day beyond twelve months after 30 June 20X8; therefore the deferred consideration is non-current if the right to defer remains and no other terms accelerate payment."),
    ],
    reference: "IFRS 10.B86; IFRS 3.18–19, 32, 37; IAS 12.19, 66; IAS 1.69",
  },

  {
    id: "ifrs-book2-ifrs10-sanus-portus-margin",
    standardCode: "IFRS 10",
    title: text("Sanus وPortus: هامش 40% من سعر البيع", "Sanus and Portus: 40% sales margin"),
    facts: text("باعت Sanus بضاعة إلى تابعتها المملوكة بالكامل Portus مقابل 200,000 بهامش ربح إجمالي 40% من سعر البيع. بقيت البضاعة كلها في مخزون Portus في نهاية السنة.", "Sanus sold goods to its wholly owned subsidiary Portus for 200,000 at a gross-profit margin of 40% of selling price. All the goods remained in Portus's year-end inventory."),
    question: text("كم الربح غير المحقق من هذا البيع؟", "What is the unrealised profit on this sale?"),
    solution: [
      text("الهامش هنا نسبة من سعر البيع نفسه: 200,000 × 40% = 80,000. وبما أن كل البضاعة لا تزال داخل المجموعة، يُحذف كامل الربح 80,000 من المخزون ومن أرباح المجموعة؛ فتكون تكلفة المجموعة الأصلية للبضاعة 120,000. لا يُحسب 40% على التكلفة، ولا يثبت ربح حتى تباع البضاعة لطرف خارجي. البائع هو الأم، لذا لا يحمل هذا الحذف على حصة غير المسيطرين، وهي أصلًا غير موجودة في هذه الحالة.", "Margin is a percentage of selling price: 200,000 × 40% = 80,000. Because all goods remain within the group, eliminate the full 80,000 from inventory and group profit; the original group cost is 120,000. Do not apply 40% to cost, and do not recognise group profit until an external sale. The parent is the seller, so this adjustment is not attributed to NCI, which does not exist in this wholly owned case."),
    ],
    reference: "IFRS 10.B86(c)",
  },
  {
    id: "ifrs-book2-ifrs10-ramus-dorsal-markup",
    standardCode: "IFRS 10",
    title: text("Ramus وDorsal: زيادة 25% على التكلفة", "Ramus and Dorsal: 25% cost mark-up"),
    facts: text("باعت Ramus بضاعة إلى تابعتها المملوكة بالكامل Dorsal مقابل 200,000 بزيادة 25% على التكلفة. بقيت البضاعة كلها في مخزون Dorsal في نهاية السنة.", "Ramus sold goods to its wholly owned subsidiary Dorsal for 200,000 at a 25% mark-up on cost. All the goods remained in Dorsal's year-end inventory."),
    question: text("كم الربح غير المحقق من هذا البيع؟", "What is the unrealised profit on this sale?"),
    solution: [
      text("سعر البيع يمثل 125% من التكلفة، ولذلك تكلفة المجموعة = 200,000 ÷ 1.25 = 160,000، والربح غير المحقق = 200,000 − 160,000 = 40,000؛ أو 200,000 × 25 ÷ 125. يُحذف 40,000 كاملًا من مخزون المجموعة وربحها. لا تخلط زيادة 25% على التكلفة مع هامش 25% من سعر البيع، لأنهما ينتجان مبلغين مختلفين.", "Selling price is 125% of cost, so group cost is 200,000 ÷ 1.25 = 160,000 and unrealised profit is 200,000 − 160,000 = 40,000, equivalently 200,000 × 25 ÷ 125. Eliminate the full 40,000 from group inventory and profit. A 25% mark-up on cost is not a 25% margin on selling price; the two produce different answers."),
    ],
    reference: "IFRS 10.B86(c)",
  },
  {
    id: "ifrs-book2-ifrs3-tyzo-kono-acquisition-goodwill",
    standardCode: "IFRS 3",
    title: text("Tyzo وKono: الشهرة عند الاقتناء", "Tyzo and Kono: acquisition-date goodwill"),
    facts: text("تعد Tyzo قوائمها في 31 ديسمبر. في 1 سبتمبر 20X7 اشترت 6 ملايين سهم من أسهم Kono البالغ عددها 8 ملايين سهم مقابل دولارين للسهم. عند الاقتناء، وبالمليون، عرضت Kono ممتلكات وآلات 16.0، مخزون مواد خام 4.0، مدينين 2.9، نقدًا 1.2، رأس مال 8.0، احتياطيات 4.4، قروضًا طويلة 4.0، دائنين تجاريين 3.2، مخصص ضريبة 0.6، وسحبًا على المكشوف 3.9. كانت تكلفة إحلال الممتلكات والآلات الإجمالية 28.4 وصافي تكلفة إحلالها 16.6، وقيمتها الاقتصادية 18.0 وصافي قيمتها القابلة للتحقق 8.0؛ تكلفتها التاريخية 27.0 وإهلاكها 25% سنويًا بالتناسب الزمني، ولم تتصرف Kono في أصل ثابت حتى نهاية السنة. تكلفة إحلال مخزون المواد الخام 4.2؛ وبعد الاقتناء بيعت بضاعة من مخزون يوم الاقتناء بتكلفة 3.0 مقابل 3.6. قررت Tyzo في 1 سبتمبر إعادة تنظيم المجموعة بتكلفة مقدرة 3.0 يبدأ تنفيذها في مارس 20X8، ولم تثبت لها مخصصًا. تُقاس حصة غير المسيطرين بنصيبها النسبي من صافي الأصول القابلة للتحديد. لم تُذكر الأسس الضريبية لزيادات القيمة أو معدل الضريبة المؤجلة.", "Tyzo reports to 31 December. On 1 September 20X7 it acquired 6 million of Kono's 8 million shares for $2 each. At acquisition, in millions, Kono reported PPE 16.0, raw-material inventory 4.0, receivables 2.9, cash 1.2, share capital 8.0, reserves 4.4, long-term loans 4.0, trade payables 3.2, tax provision 0.6 and bank overdraft 3.9. PPE gross replacement cost was 28.4, depreciated net replacement cost 16.6, economic value 18.0 and net realisable value 8.0; historical cost was 27.0 with depreciation at 25% a year pro rata, and Kono disposed of no non-current asset before year-end. Raw-material replacement cost was 4.2; after acquisition, goods in acquisition-date inventory that had cost 3.0 were sold for 3.6. Tyzo decided on 1 September to rationalise the group at an estimated cost of 3.0, with implementation starting in March 20X8; no provision had been recognised. NCI is measured at its proportionate share of identifiable net assets. Tax bases for the fair-value uplifts and a deferred-tax rate are not given."),
    question: text("احسب الشهرة الناتجة عن تجميع Kono في قوائم Tyzo الموحدة للسنة المنتهية في 31 ديسمبر 20X7، واشرح معالجة البنود المذكورة.", "Compute goodwill on consolidation of Kono in Tyzo Group's financial statements for the year ended 31 December 20X7 and explain the treatment of the stated items."),
    solution: [
      text("حصة Tyzo = 6 ÷ 8 = 75%، والمقابل = 6 × 2 = 12.0 مليون. صافي أصول Kono الدفتري في تاريخ الاقتناء = رأس المال 8.0 + الاحتياطيات 4.4 = 12.4. مخصص الضريبة 0.6 داخل الالتزامات بالفعل، فلا يطرح مرة ثانية.", "Tyzo's interest is 6 ÷ 8 = 75%, and consideration is 6 × 2 = 12.0 million. Kono's acquisition-date book net assets are share capital 8.0 + reserves 4.4 = 12.4. The 0.6 tax provision is already in liabilities; do not deduct it again."),
      text("إذا كان صافي تكلفة الإحلال 16.6 قياسًا ملائمًا للقيمة العادلة في ظروف الحالة، تزيد الممتلكات والآلات 0.6 على قيمتها الدفترية. وإذا عكست تكلفة إحلال المواد الخام 4.2 افتراضات المشاركين في السوق، تزيد قيمة المخزون 0.2. إذن صافي الأصول المعدل قبل الضريبة المؤجلة غير المعطاة = 12.4 + 0.6 + 0.2 = 13.2. حصة غير المسيطرين = 25% × 13.2 = 3.3؛ والشهرة قبل أي أثر ضريبي إضافي = 12.0 + 3.3 − 13.2 = 2.1 مليون. تكلفة الإحلال الإجمالية 28.4 والقيمتان 18.0 و8.0 ليست مبالغ تضاف إلى 16.6؛ ويجب تقييم ملاءمة طريقة تكلفة الإحلال وفق IFRS 13.", "If the depreciated replacement cost of 16.6 is an appropriate fair-value measure in these circumstances, uplift PPE by 0.6 from book value. If the 4.2 raw-material replacement cost reflects market-participant assumptions, uplift inventory by 0.2. Identifiable net assets before unspecified deferred tax are thus 12.4 + 0.6 + 0.2 = 13.2. Proportionate NCI is 25% × 13.2 = 3.3; goodwill before any additional tax effect is 12.0 + 3.3 − 13.2 = 2.1 million. Gross replacement cost 28.4 and the 18.0 and 8.0 amounts are not added to 16.6; assess whether the cost approach is appropriate under IFRS 13."),
      text("بيع جزء من مخزون يوم الاقتناء بعده، والإهلاك اللاحق، يؤثران في أرباح ما بعد الاقتناء لا في حساب الشهرة يوم الاقتناء. قرار Tyzo إعادة التنظيم بتكلفة 3.0 لا يثبت وحده التزامًا لدى Kono قائمًا يوم الاقتناء؛ فلا يُدخل مخصصًا جديدًا في صافي الأصول أو الشهرة لمجرد النية. ويعاد فحص شروط IAS 37 لأي التزام ينشأ لاحقًا.", "The post-acquisition sale of acquisition-date inventory and subsequent depreciation affect post-acquisition earnings, not acquisition-date goodwill. Tyzo's 3.0 rationalisation decision does not alone create an existing Kono liability at acquisition; do not insert a new provision into net assets or goodwill merely because of intent. Reassess IAS 37 conditions for any obligation arising later."),
      text("مبلغ 2.1 مليون مشروط بعدم نشوء ضريبة مؤجلة على فروق القيمة العادلة. إذا بقيت الأسس الضريبية دون زيادة، قد يلزم إثبات التزام ضريبة مؤجلة وفق IAS 12.19 و66، فيزيد الشهرة. لا تُعطي الحالة الأساس الضريبي أو معدل الضريبة، فلا يجوز اختلاق رقم نهائي له. إذا كان التزام الضريبة المؤجلة الإضافي الوحيد D، تصبح الشهرة 2.1 + 75% × D لأن حصة غير المسيطرين تقاس نسبيًا. هذه ملاحظة ضرورية قبل اعتبار 2.1 نتيجة غير مشروطة.", "The 2.1 million figure is conditional on no deferred tax arising from the fair-value uplifts. If tax bases do not step up, IAS 12.19 and 66 may require a deferred tax liability, increasing goodwill. Neither tax bases nor a tax rate are supplied, so no numeric final adjustment should be invented. If the only additional deferred tax liability is D, goodwill becomes 2.1 + 75% × D because NCI is measured proportionately. This qualification is necessary before treating 2.1 as unconditional."),
    ],
    reference: "IFRS 3.10–11, 18–19, 32; IFRS 13.24, B8–B9; IAS 12.19, 66; IAS 37.72–75",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-even-profit-assumption",
    standardCode: "IFRS 10",
    title: text("هل تُوزع أرباح سنة الاقتناء بالتساوي؟", "Can acquisition-year profit be assumed even?"),
    facts: text("اقتنت شركة أم شركة تابعة خلال فترة إعداد قوائمها المالية.", "A parent acquired a subsidiary during its accounting period."),
    question: text("«يمكن للشركة الأم افتراض أن أرباح التابعة تتحقق بالتساوي على مدار السنة». هل العبارة صحيحة أم خاطئة؟", "A parent company can assume that, for a subsidiary acquired during its accounting period, profits accrue evenly during the year. True or false?"),
    solution: [
      text("خاطئة كقاعدة عامة. يبدأ تضمين إيرادات ومصروفات التابعة في القوائم الموحدة من تاريخ حصول السيطرة، ولذلك يُحدد الربح اللاحق للاقتناء من سجلاتها الفعلية متى توفرت. لا يُستخدم التقسيم الزمني المنتظم إلا كافتراض مبسط إذا نصت عليه المسألة أو كان ملائمًا للوقائع وغياب بيانات أدق؛ فقد تغير الموسمية أو الصفقات المهمة توزيع الربح.", "False as a general rule. Subsidiary income and expenses enter consolidated statements from the date control is obtained, so post-acquisition profit should be based on actual records when available. An even time split is only a simplifying assumption when stated or justified by the facts and no better information exists; seasonality or major transactions may make it inappropriate."),
    ],
    reference: "IFRS 10.B88",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-pre-acquisition-profit-workings",
    standardCode: "IFRS 10",
    title: text("معالجة أرباح التابعة قبل الاقتناء في أوراق التجميع", "Pre-acquisition subsidiary profit in consolidation workings"),
    facts: text("كانت لدى الشركة التابعة أرباح محتجزة قبل أن تحصل الشركة الأم على السيطرة.", "The subsidiary had retained earnings before the parent obtained control."),
    question: text("ما التسويات التي تُجرى في أوراق التجميع لإثبات أرباح التابعة السابقة للاقتناء؟", "What entries are made in the workings to record pre-acquisition profits of a subsidiary?"),
    solution: [
      text("تُحدد الأرباح المحتجزة للتابعة في تاريخ الاقتناء ضمن صافي أصولها القابلة للتحديد آنذاك، وتدخل في حساب الشهرة وفق IFRS 3. في ورقة التجميع تُقابل حقوق ملكية التابعة القائمة يوم الاقتناء، بما فيها هذه الأرباح، باستثمار الأم عند حذف الاستثمار/الحقوق. لا تُضاف أرباح ما قبل الاقتناء إلى الأرباح المحتجزة الموحدة لملاك الأم باعتبارها ربحًا لاحقًا؛ يُنسب فقط تغير الأرباح بعد الاقتناء إلى الأم وغير المسيطرين بحسب حصصهما، بعد تسويات التجميع.", "Identify the subsidiary's acquisition-date retained earnings within its acquisition-date identifiable net assets and include them in the IFRS 3 goodwill calculation. In consolidation workings, offset the subsidiary's acquisition-date equity, including those earnings, against the parent's investment when eliminating the investment/equity. Do not add pre-acquisition earnings to consolidated retained earnings of parent owners as post-acquisition profit; attribute only post-acquisition movements between parent owners and NCI after consolidation adjustments."),
    ],
    reference: "IFRS 10.B86(b), B88, B94; IFRS 3.32",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-unrealised-profit-cost-of-sales",
    standardCode: "IFRS 10",
    title: text("أثر الربح الداخلي غير المحقق في تكلفة المبيعات", "Unrealised intragroup profit in cost of sales"),
    facts: text("تتضمن بضاعة نهاية الفترة للمجموعة ربحًا من بيع بين منشأتين داخل المجموعة.", "Group closing inventory contains profit from a sale between group entities."),
    question: text("أين يظهر تعديل الربح غير المحقق من التداول داخل المجموعة في قائمة الربح أو الخسارة؟", "Where does unrealised profit on intragroup trading appear in the statement of profit or loss?"),
    solution: [
      text("عند عرض المصروفات بحسب الوظيفة وتحديد تكلفة المبيعات، تُضاف قيمة الربح غير المحقق في مخزون نهاية الفترة إلى تكلفة المبيعات الموحدة، فينخفض إجمالي الربح؛ ويُخفض المخزون بالمبلغ نفسه. وتُحذف كذلك المبيعات وتكلفة الشراء الداخلية بالكامل عند التجميع. هذا وصف لتعديل مخزون الإقفال؛ أما ربح مخزون الافتتاح المحقق ببيعه خارج المجموعة خلال الفترة فينعكس أثره في الاتجاه المقابل.", "When expenses are presented by function using cost of sales, add the unrealised profit in closing inventory to consolidated cost of sales, reducing gross profit, and reduce inventory by the same amount. The intragroup sale and matching purchase/cost are also eliminated in full on consolidation. This describes the closing-inventory adjustment; profit in opening inventory realised through an external sale during the period reverses in the opposite direction."),
    ],
    reference: "IFRS 10.B86(c)",
  },
  {
    id: "ifrs-book2-ifrs10-chicken-egg-inventory-profit",
    standardCode: "IFRS 10",
    title: text("Chicken وEgg: ربح مخزون داخل المجموعة", "Chicken and Egg: intragroup inventory profit"),
    facts: text("تمتلك Chicken نسبة 80% من Egg. باعت Egg إلى Chicken خلال السنة المنتهية في 31 ديسمبر 20X9 بضائع مفوترة بمبلغ 900,000، بسعر التكلفة مضافًا إليه 50%. بقيت في مخزون Chicken في نهاية السنة بضائع من هذه المشتريات بقيمة فاتورة 60,000.", "Chicken owns 80% of Egg. In the year ended 31 December 20X9, Egg invoiced goods to Chicken for 900,000 at cost plus 50%. Goods from these purchases invoiced at 60,000 remained in Chicken's closing inventory."),
    question: text("ما مقدار التخفيض في إجمالي الربح المجمع؟", "What is the reduction in aggregate gross profit?"),
    solution: [
      text("الربح في سعر التحويل يساوي 50 ÷ 150 من الفاتورة، وليس 50% منها. الربح غير المحقق في المخزون الباقي = 60,000 × 50 ÷ 150 = 20,000. يُخفض مخزون المجموعة وتكلفة المبيعات/إجمالي الربح المجمع بهذا المبلغ كاملًا، ولا يقتصر الحذف على ملكية الأم البالغة 80%.", "The profit fraction of the transfer price is 50 ÷ 150, not 50%. Unrealised profit in closing inventory is 60,000 × 50 ÷ 150 = 20,000. Reduce group inventory and aggregate gross profit by the full 20,000; the elimination is not limited to the parent's 80% ownership."),
      text("تُحذف أيضًا المبيعات والمشتريات الداخلية 900,000 من الإيراد وتكلفة المبيعات عند التجميع، لكنهما يتقابلان ولا يغيران إجمالي الربح بذاتهما. وبما أن البائع هو التابعة، يُوزع أثر الربح غير المحقق على ملاك الأم وغير المسيطرين عند إسناد نتيجة التابعة؛ هذه خطوة منفصلة عن التخفيض الكامل لإجمالي ربح المجموعة.", "The 900,000 intragroup sales and purchases are also eliminated from group revenue and cost of sales; that matching elimination alone does not change gross profit. Because the subsidiary is the seller, attribution of the unrealised-profit adjustment between parent owners and NCI is a separate step from the full group gross-profit reduction."),
    ],
    reference: "IFRS 10.B86(c), B94",
  },
  {
    id: "ifrs-book2-ifrs3-negative-goodwill-true-false",
    standardCode: "IFRS 3",
    title: text("هل الشهرة دائمًا موجبة؟", "Is goodwill always positive?"),
    facts: text("سؤال صح أو خطأ عن نتيجة احتساب الشهرة في تجميع الأعمال.", "A true-or-false question about the outcome of a business-combination goodwill calculation."),
    question: text("«الشهرة دائمًا رقم موجب». هل العبارة صحيحة أم خاطئة؟", "‘Goodwill is always a positive figure.’ True or false?"),
    solution: [
      text("خاطئة: قد تكون الشهرة صفرًا. وإذا تجاوزت حصة المشتري في صافي الأصول القابلة للتحديد المقابلَ والحصةَ غير المسيطرة وأي حصة سابقة، تُعاد مراجعة تحديد الأصول والالتزامات وقياس جميع المكونات أولًا. وإذا بقي الفائض فهو ربح شراء بسعر مغرٍ يُعترف به في الربح أو الخسارة يوم الاقتناء، وليس «شهرة سالبة» تُعرض كأصل أو رصيد شهرة سالب.", "False: goodwill can be zero. If identifiable net assets exceed the consideration, NCI and any previously held interest, the acquirer first reassesses the identification and measurement of the acquisition components. Any remaining excess is a bargain-purchase gain recognised in profit or loss at acquisition, not a negative goodwill asset or a negative goodwill balance."),
    ],
    reference: "IFRS 3.32, 34–36",
  },
  {
    id: "ifrs-book2-ifrs13-level-one-inputs-quick-quiz",
    standardCode: "IFRS 13",
    title: text("مدخلات المستوى الأول للقيمة العادلة", "Level 1 fair-value inputs"),
    facts: text("يتعلق السؤال بهرم مدخلات قياس القيمة العادلة في IFRS 13.", "The question concerns the IFRS 13 fair-value input hierarchy."),
    question: text("ما المقصود بمدخلات المستوى الأول وفق IFRS 13؟", "Under IFRS 13, what are Level 1 inputs?"),
    solution: [
      text("هي أسعار معلنة غير معدلة في أسواق نشطة لأصول أو التزامات مطابقة، تستطيع المنشأة الوصول إليها في تاريخ القياس. السعر لأصل مشابه أو في سوق غير نشطة لا يحقق وحده تعريف المستوى الأول؛ كما أن تعديل السعر عادةً ينقل القياس إلى مستوى أدنى بحسب IFRS 13.", "They are unadjusted quoted prices in active markets for identical assets or liabilities that the entity can access at the measurement date. A price for a merely similar item or from an inactive market does not itself meet Level 1; adjusting a quoted price generally moves the measurement to a lower hierarchy level under IFRS 13."),
    ],
    reference: "IFRS 13.72, 76–79",
  },
  {
    id: "ifrs-book2-ifrs3-fair-value-uplift-deferred-tax",
    standardCode: "IFRS 3",
    title: text("زيادة القيمة العادلة عند الاقتناء والضريبة المؤجلة", "Acquisition fair-value uplift and deferred tax"),
    facts: text("اشترت P نسبة 75% من S في 1 سبتمبر 20X5 مقابل 51,000. عند الاقتناء كانت أرباح S المحتجزة 21,000 ورأس مالها 20,000، والقيمة العادلة لممتلكاتها وآلاتها تزيد على دفاترها 23,000 دون زيادة مماثلة في أساسها الضريبي؛ معدل الضريبة 20%. قِيست حصة غير المسيطرين عند الاقتناء بالقيمة العادلة 18,000. لم تُسجّل S زيادة القيمة في دفاترها؛ ولو سجلتها لزاد إهلاك السنة المنتهية 31 أغسطس 20X6 بمبلغ 3,000. في ذلك التاريخ: لدى P ممتلكات وآلات 63,000، استثمار S بمبلغ 51,000، أصول متداولة 82,000، رأس مال 80,000، أرباح محتجزة 96,000 والتزامات متداولة 20,000. ولدى S ممتلكات وآلات 28,000، أصول متداولة 43,000، رأس مال 20,000، أرباح محتجزة 41,000 والتزامات متداولة 10,000.", "P acquired 75% of S on 1 September 20X5 for 51,000. At acquisition S had retained earnings of 21,000 and share capital of 20,000. Its PPE acquisition-date fair value exceeded book value by 23,000 without a corresponding tax-base step-up; the tax rate is 20%. Acquisition-date NCI fair value was 18,000. S did not record the uplift in its own books; had it done so, depreciation for the year ended 31 August 20X6 would have risen by 3,000. At that date P reports PPE 63,000, investment in S 51,000, current assets 82,000, share capital 80,000, retained earnings 96,000 and current liabilities 20,000. S reports PPE 28,000, current assets 43,000, share capital 20,000, retained earnings 41,000 and current liabilities 10,000."),
    question: text("أعد قائمة المركز المالي الموحدة لـP في 31 أغسطس 20X6.", "Prepare P's consolidated statement of financial position at 31 August 20X6."),
    solution: [
      text("في تاريخ الاقتناء تُرفع الممتلكات والآلات 23,000 في ورقة التجميع، وينشأ التزام ضريبة مؤجلة = 23,000 × 20% = 4,600 لأن الأساس الضريبي لم يتغير. صافي الأصول القابلة للتحديد المعدلة = رأس مال 20,000 + أرباح قبل الاقتناء 21,000 + زيادة القيمة 23,000 − ضريبة مؤجلة 4,600 = 59,400. الشهرة الكاملة = مقابل 51,000 + حصة غير المسيطرين 18,000 − 59,400 = 9,600؛ ولا تُسجل زيادة القيمة كإيراد يوم الاقتناء.", "At acquisition, increase group PPE by 23,000 and recognise a 23,000 × 20% = 4,600 deferred tax liability because tax base did not step up. Adjusted identifiable net assets are share capital 20,000 + pre-acquisition earnings 21,000 + fair-value uplift 23,000 − deferred tax 4,600 = 59,400. Full goodwill is consideration 51,000 + NCI 18,000 − 59,400 = 9,600. The acquisition uplift is not day-one income."),
      text("بنهاية السنة هلك من الزيادة 3,000؛ لذا يصبح فرق القيمة الباقي 20,000 والتزام الضريبة المؤجلة 20,000 × 20% = 4,000. أثر السنة على ربح S الموحد: إهلاك إضافي 3,000 يقابله انعكاس ضريبة مؤجلة 600. أرباح S اللاحقة للاقتناء المعدلة = 41,000 − 21,000 − 3,000 + 600 = 17,600. أرباح ملاك الأم = 96,000 + 75% × 17,600 = 109,200؛ وحصة غير المسيطرين = 18,000 + 25% × 17,600 = 22,400.", "By year-end 3,000 of the uplift has been depreciated, leaving a 20,000 difference and a 20,000 × 20% = 4,000 deferred tax liability. The year's group adjustment reduces S's profit by 3,000 additional depreciation and increases it by 600 deferred tax reversal. Adjusted post-acquisition S earnings are 41,000 − 21,000 − 3,000 + 600 = 17,600. Parent owners' retained earnings are 96,000 + 75% × 17,600 = 109,200; NCI is 18,000 + 25% × 17,600 = 22,400."),
      text("الأصول الموحدة: ممتلكات وآلات 63,000 + 28,000 + 23,000 − 3,000 = 111,000، شهرة 9,600، أصول متداولة 82,000 + 43,000 = 125,000؛ الإجمالي 245,600. تقابلها حقوق الأم 80,000 + 109,200، وحصة غير المسيطرين 22,400، والتزامات متداولة 20,000 + 10,000 = 30,000، والتزام ضريبة مؤجلة غير متداول 4,000؛ الإجمالي 245,600. لا يصح جمع الضريبة المؤجلة مع الالتزامات المتداولة عند عرض تصنيف متداول/غير متداول؛ هذا تصحيح لعرض الحل المبسط.", "Consolidated assets: PPE 63,000 + 28,000 + 23,000 − 3,000 = 111,000, goodwill 9,600 and current assets 82,000 + 43,000 = 125,000; total 245,600. They equal parent equity 80,000 + 109,200, NCI 22,400, current liabilities 20,000 + 10,000 = 30,000 and a separately presented non-current deferred tax liability of 4,000. Where current/non-current classification is used, deferred tax must not be bundled with current liabilities; this corrects the simplified source presentation."),
    ],
    reference: "IFRS 3.18–19, 25, 32; IFRS 10.B86, B94; IAS 12.19, 66; IAS 1.56",
  },
  {
    id: "ifrs-book2-ias16-acquisition-fair-value-disposal",
    standardCode: "IAS 16",
    title: text("ربح بيع أصل: دفاتر التابعة مقابل القوائم الموحدة", "Asset disposal gain: subsidiary versus consolidated accounts"),
    facts: text("سجلت S أصلًا بتكلفة تاريخية 4,000، ويُهلك بالقسط الثابت على أربع سنوات من دون قيمة متبقية. في 1 يناير 20X5، بعد انقضاء سنتين من عمره، اشترت P نسبة 80% من S وكانت القيمة العادلة للأصل عند الاقتناء 3,000. باعت S الأصل في 30 يونيو 20X5 بمبلغ 2,600. لا يذكر السؤال أثرًا ضريبيًا.", "S recorded an asset at historical cost 4,000 and depreciates it straight-line over four years with no residual value. On 1 January 20X5, after two years of use, P acquired 80% of S and the asset's acquisition-date fair value was 3,000. S sold the asset on 30 June 20X5 for 2,600. No tax effect is specified."),
    question: text("ما ربح أو خسارة التصرف الواجب تسجيله في دفاتر S منفردة، وما ربح أو خسارة التصرف في قوائم P الموحدة للسنة المنتهية 31 ديسمبر 20X5؟", "What disposal gain or loss is recorded in S's own accounts and in P's consolidated accounts for the year ended 31 December 20X5?"),
    solution: [
      text("في دفاتر S: الإهلاك السنوي على التكلفة التاريخية = 4,000 ÷ 4 = 1,000. عند الاقتناء كانت القيمة الدفترية 2,000 بعد سنتين، ثم يُحمّل نصف سنة إهلاك 500 حتى 30 يونيو. القيمة الدفترية عند البيع = 1,500، ومن ثم ربح التصرف الفردي = 2,600 − 1,500 = 1,100.", "In S's own accounts, annual depreciation on historical cost is 4,000 ÷ 4 = 1,000. After two years, carrying amount at acquisition was 2,000; another half-year's depreciation to 30 June is 500. Carrying amount at disposal is 1,500, so the separate-account gain is 2,600 − 1,500 = 1,100."),
      text("في قوائم المجموعة يبدأ قياس الأصل من قيمته العادلة يوم اقتناء S، وهي 3,000، ويُوزع على السنتين المتبقيتين وفق العمر المعطى: إهلاك نصف سنة = 3,000 ÷ 2 × 6÷12 = 750. القيمة الدفترية الموحدة عند البيع = 2,250، وربح التصرف الموحد = 2,600 − 2,250 = 350. الفرق 750 بين ربحي التصرف ليس معاملة بيع داخل المجموعة؛ سببه أساس القياس المختلف منذ الاقتناء. لا تُختلق ضريبة أو قيد لها دون معلومات إضافية.", "For consolidation, the asset starts at its 3,000 acquisition-date fair value and is depreciated over the stated two remaining years: half-year depreciation = 3,000 ÷ 2 × 6÷12 = 750. Group carrying amount on sale is 2,250 and group disposal gain is 2,600 − 2,250 = 350. The 750 difference between disposal gains is not an intragroup sale; it follows from the different acquisition-date measurement bases. Do not invent tax entries without further facts."),
    ],
    reference: "IAS 16.55, 67–68, 71; IFRS 3.18; IFRS 10.B86",
  },
  {
    id: "ifrs-book2-ifrs10-hinge-singe-acquisition-period",
    standardCode: "IFRS 10",
    title: text("Hinge وSinge: فصل أرباح ما قبل الاقتناء", "Hinge and Singe: pre-acquisition profit split"),
    facts: text("اشترت Hinge نسبة 80% من أسهم Singe في 1 أبريل 20X5 مقابل 50,000. لدى Singe رأس مال 10,000 مكوّن من 20,000 سهم قيمة الواحد 0.50، وعلاوة إصدار 4,000، وأرباح محتجزة 15,000 في 31 ديسمبر 20X4. بلغت القيمة السوقية لسهم Singe عند الاقتناء 2.50، وتُقاس حصة غير المسيطرين بالقيمة العادلة. في 31 ديسمبر 20X5 تعرض Hinge ممتلكات وآلات 32,000، استثمار Singe بمبلغ 50,000، أصولًا متداولة 85,000، رأس مال 100,000، علاوة إصدار 7,000، أرباحًا محتجزة 40,000 والتزامات متداولة 20,000. وتعرض Singe ممتلكات وآلات 30,000، أصولًا متداولة 43,000، رأس مال 10,000، علاوة إصدار 4,000، أرباحًا محتجزة 39,000 والتزامات متداولة 20,000. لم تُدفع توزيعات خلال 20X5 ولا توجد خسارة انخفاض للشهرة. لا تتوافر بيانات شهرية للربح.", "Hinge acquired 80% of Singe on 1 April 20X5 for 50,000. Singe has share capital of 10,000 comprising 20,000 shares of 0.50 each; its share premium was 4,000 and retained earnings 15,000 at 31 December 20X4. The acquisition-date market price per Singe share was 2.50 and NCI is measured at fair value. At 31 December 20X5, Hinge reports PPE 32,000, investment in Singe 50,000, current assets 85,000, share capital 100,000, share premium 7,000, retained earnings 40,000 and current liabilities 20,000. Singe reports PPE 30,000, current assets 43,000, share capital 10,000, share premium 4,000, retained earnings 39,000 and current liabilities 20,000. Neither company paid dividends in 20X5 and goodwill has not been impaired. No monthly profit data are supplied."),
    question: text("أعد قائمة المركز المالي الموحدة لـHinge في 31 ديسمبر 20X5.", "Prepare Hinge's consolidated statement of financial position at 31 December 20X5."),
    solution: [
      text("ربح Singe لسنة 20X5 = 39,000 − 15,000 = 24,000. لغياب بيانات أدق، يُستخدم افتراض تعليمي صريح بأن الربح تحقق بانتظام: ثلاثة أشهر قبل الاقتناء = 6,000، وتسعة أشهر بعده = 18,000. لا تجعل التوزيع الزمني الآلي قاعدة عامة؛ إذا أظهرت سجلات فعلية موسمية أو معاملات كبيرة استُخدمت أرقامها. وعليه أرباح Singe المحتجزة عند الاقتناء = 15,000 + 6,000 = 21,000.", "Singe's 20X5 profit is 39,000 − 15,000 = 24,000. With no better data, this illustration expressly assumes even profit accrual: three pre-acquisition months contribute 6,000 and nine post-acquisition months 18,000. Straight-line allocation is not a general rule; use actual monthly records where seasonality or material events exist. Acquisition-date Singe retained earnings are therefore 15,000 + 6,000 = 21,000."),
      text("لدى غير المسيطرين 4,000 سهم؛ قيمتهم العادلة عند الاقتناء = 4,000 × 2.50 = 10,000. بافتراض أن التابعة تمثل منشأة أعمال وأن الأرصدة المعطاة تمثل صافي الأصول القابلة للتحديد في تاريخ الاقتناء، تكون الشهرة = مقابل 50,000 + حصة غير المسيطرين 10,000 − (رأس مال Singe 10,000 + علاوة إصدارها 4,000 + أرباحها عند الاقتناء 21,000) = 25,000. لا تُضم علاوة إصدار التابعة إلى علاوة إصدار الأم في حقوق المجموعة.", "NCI holds 4,000 shares; acquisition-date fair value is 4,000 × 2.50 = 10,000. Assuming the subsidiary is a business and the supplied balances represent acquisition-date identifiable net assets, goodwill is consideration 50,000 + NCI 10,000 − (Singe share capital 10,000 + share premium 4,000 + acquisition-date retained earnings 21,000) = 25,000. The subsidiary's share premium is not added to the parent's share premium in group equity."),
      text("أرباح ملاك الأم المحتجزة = 40,000 + 80% × 18,000 = 54,400؛ وحصة غير المسيطرين في نهاية السنة = 10,000 + 20% × 18,000 = 13,600. الأصول الموحدة: ممتلكات وآلات 32,000 + 30,000 = 62,000، شهرة 25,000، أصول متداولة 85,000 + 43,000 = 128,000؛ المجموع 215,000. تقابلها حقوق الأم: رأس مال 100,000، علاوة إصدار 7,000، أرباح محتجزة 54,400؛ ثم حصة غير المسيطرين 13,600 والتزامات 20,000 + 20,000 = 40,000؛ المجموع 215,000.", "Parent owners' retained earnings are 40,000 + 80% × 18,000 = 54,400, and closing NCI is 10,000 + 20% × 18,000 = 13,600. Consolidated assets comprise PPE 32,000 + 30,000 = 62,000, goodwill 25,000 and current assets 85,000 + 43,000 = 128,000, totalling 215,000. These equal parent share capital 100,000, parent share premium 7,000, group retained earnings 54,400, NCI 13,600 and liabilities 20,000 + 20,000 = 40,000."),
    ],
    reference: "IFRS 10.20, 22, B86, B94; IFRS 3.19, 32",
  },
  {
    id: "ifrs-book2-ifrs10-upstream-inventory-75-percent",
    standardCode: "IFRS 10",
    title: text("بيع مخزون من التابعة إلى الأم: حصة 75%", "Upstream inventory sale: 75% parent interest"),
    facts: text("تملك P نسبة 75% من S منذ تأسيسها. باعت S إلى P بضاعة تكلفتها 16,000 مقابل 20,000، وما زالت كلها في مخزون P آخر السنة. قائمة P: ممتلكات وآلات 125,000، استثمار S بمبلغ 75,000، مخزون 50,000، ذمم مدينة 20,000؛ رأس مال 80,000، أرباح محتجزة 150,000، التزامات متداولة 40,000. قائمة S: ممتلكات وآلات 120,000، مخزون 48,000، ذمم مدينة 16,000؛ رأس مال 100,000، أرباح محتجزة 60,000، التزامات 24,000. القيمة العادلة لحصة غير المسيطرين عند الاقتناء 25,000.", "P has owned 75% of S since incorporation. S sold goods costing 16,000 to P for 20,000; all remain in P's year-end inventory. P reports PPE 125,000, investment in S 75,000, inventory 50,000, receivables 20,000, share capital 80,000, retained earnings 150,000 and current liabilities 40,000. S reports PPE 120,000, inventory 48,000, receivables 16,000, share capital 100,000, retained earnings 60,000 and current liabilities 24,000. Acquisition-date NCI fair value was 25,000."),
    question: text("أعد قائمة المركز المالي الموحدة لشركة P في نهاية السنة.", "Prepare P's consolidated statement of financial position at year-end."),
    solution: [
      text("ربح البيع الداخلي = 20,000 − 16,000 = 4,000، ويبقى كله غير محقق لأن البضاعة لم تغادر المجموعة. يحذف بالكامل من المخزون: 50,000 + 48,000 − 4,000 = 94,000. البائع هو S؛ لذلك يُوزع تعديل ربحها 3,000 على ملاك الأم و1,000 على غير المسيطرين. يُحذف أيضًا البيع الداخلي من الإيراد وتكلفة المبيعات عند إعداد قائمة الأداء.", "The 20,000 − 16,000 = 4,000 intragroup profit is wholly unrealised because the goods have not left the group. Eliminate it in full from inventory: 50,000 + 48,000 − 4,000 = 94,000. S is the seller, so its profit adjustment is attributed 3,000 to parent owners and 1,000 to NCI. Eliminate the intragroup sale from revenue and cost of sales when preparing group performance."),
      text("لا تنشأ شهرة في المعطيات: 75,000 + 25,000 − 100,000 = صفر. الأصول الموحدة: ممتلكات وآلات 245,000، مخزون 94,000، ذمم مدينة 36,000؛ المجموع 375,000. حقوق الأم: رأس مال 80,000 وأرباح محتجزة 150,000 + 75% × (60,000 − 4,000) = 192,000. حصة غير المسيطرين = 25,000 + 25% × 56,000 = 39,000. الالتزامات 40,000 + 24,000 = 64,000؛ المجموع 375,000.", "The supplied figures yield no goodwill: 75,000 + 25,000 − 100,000 = zero. Consolidated assets are PPE 245,000, inventory 94,000 and receivables 36,000, totalling 375,000. Parent equity is share capital 80,000 and retained earnings 150,000 + 75% × (60,000 − 4,000) = 192,000. NCI is 25,000 + 25% × 56,000 = 39,000. Liabilities are 40,000 + 24,000 = 64,000; equity and liabilities total 375,000."),
      text("تسوية المركز المالي: مدين أرباح محتجزة منسوبة لملاك الأم 3,000، مدين حصة غير المسيطرين 1,000، دائن مخزون 4,000. يُفحص فرق القيمة الدفترية والأساس الضريبي للمخزون وفق IAS 12، ويُثبت أصل الضريبة المؤجلة عن الفرق القابل للخصم إذا استوفت شروطه، ومنها احتمال توافر ربح خاضع للضريبة. لا معدل ضريبة أو أساس ضريبي معطيين لحساب مبلغ هنا.", "Position-statement adjustment: debit retained earnings attributable to parent owners 3,000, debit NCI 1,000, credit inventory 4,000. Assess any difference between group carrying amount and inventory tax base under IAS 12; recognise a deferred tax asset for a deductible difference when its conditions, including probable taxable profit, are met. Neither tax rate nor tax base is given to calculate an amount here."),
    ],
    reference: "IFRS 10.B86, B94; IFRS 3.19, 32; IAS 12.24",
  },
  {
    id: "ifrs-book2-ifrs10-upstream-inventory-80-percent",
    standardCode: "IFRS 10",
    title: text("مخزون غير مباع ورصيد متبادل: حصة 80%", "Unsold inventory and reciprocal balance: 80% interest"),
    facts: text("اشترت P نسبة 80% من S قبل سنة مقابل 46,000 حين كانت أرباح S المحتجزة 10,000 ورأس مالها 30,000. القيمة العادلة لحصة غير المسيطرين يوم الاقتناء 9,000. في نهاية السنة: P لديها ممتلكات وآلات 80,000، استثمار S بمبلغ 46,000، أصول متداولة 40,000؛ رأس مال 100,000، أرباح محتجزة 45,000، التزامات متداولة 21,000. S لديها ممتلكات وآلات 40,000 وأصول متداولة 30,000؛ رأس مال 30,000، أرباح محتجزة 22,000، التزامات 18,000. باعت S إلى P سلعًا بـ50,000 وكان ربحها 20% من سعر البيع؛ بقي في مخزون P منها ما قيمته بسعر التحويل 15,000. وتدين P لـS بمبلغ 12,000 مدرج في التزاماتها وذمم S المدينة.", "P acquired 80% of S a year earlier for 46,000 when S had share capital 30,000 and retained earnings 10,000; acquisition-date NCI fair value was 9,000. At year-end P has PPE 80,000, investment in S 46,000, current assets 40,000, share capital 100,000, retained earnings 45,000 and current liabilities 21,000. S has PPE 40,000, current assets 30,000, share capital 30,000, retained earnings 22,000 and current liabilities 18,000. S sold goods to P for 50,000 at a profit of 20% of selling price; goods with a transfer price of 15,000 remain in P's inventory. P owes S 12,000, included in P's liabilities and S's receivables."),
    question: text("أعد قائمة المركز المالي الموحدة لشركة P.", "Prepare P's consolidated statement of financial position."),
    solution: [
      text("الشهرة عند الاقتناء = 46,000 + 9,000 − (30,000 + 10,000) = 15,000. الربح غير المحقق في مخزون P = 15,000 × 20% من سعر البيع = 3,000؛ وليس 20% من التكلفة. يحذف رصيد P المستحق لـS البالغ 12,000 من كل من الأصول المتداولة والالتزامات المتداولة، كما يخفض المخزون 3,000.", "Acquisition goodwill is 46,000 + 9,000 − (30,000 + 10,000) = 15,000. Unrealised profit in P's inventory is 15,000 × 20% of selling price = 3,000; this is not a 20% mark-up on cost. Eliminate the reciprocal 12,000 from current assets and current liabilities, and reduce inventory by 3,000."),
      text("ربح S اللاحق للاقتناء بعد التعديل = 22,000 − 10,000 − 3,000 = 9,000. أرباح ملاك الأم المحتجزة = 45,000 + 80% × 9,000 = 52,200؛ وحصة غير المسيطرين = 9,000 عند الاقتناء + 20% × 9,000 = 10,800. البائع هو التابعة، لذا يخفض الربح غير المحقق أيضًا نصيب غير المسيطرين من ربحها.", "S's adjusted post-acquisition earnings are 22,000 − 10,000 − 3,000 = 9,000. Parent owners' retained earnings are 45,000 + 80% × 9,000 = 52,200; NCI is acquisition-date 9,000 + 20% × 9,000 = 10,800. Because the subsidiary sold the goods, the unrealised profit also reduces NCI's share of its earnings."),
      text("الأصول: ممتلكات وآلات 80,000 + 40,000 = 120,000، شهرة 15,000، أصول متداولة 40,000 + 30,000 − 12,000 − 3,000 = 55,000؛ الإجمالي 190,000. يقابله رأس مال الأم 100,000، أرباحها الموحدة 52,200، حصة غير المسيطرين 10,800، والتزامات 21,000 + 18,000 − 12,000 = 27,000؛ الإجمالي 190,000. لا يُحسب أثر ضريبي رقمي دون معطياته.", "Assets are PPE 80,000 + 40,000 = 120,000, goodwill 15,000 and current assets 40,000 + 30,000 − 12,000 − 3,000 = 55,000; total 190,000. This equals parent share capital 100,000, group retained earnings 52,200, NCI 10,800 and liabilities 21,000 + 18,000 − 12,000 = 27,000. No numeric tax adjustment is possible without tax inputs."),
    ],
    reference: "IFRS 10.B86, B94; IFRS 3.19, 32; IAS 12.24",
  },
  {
    id: "ifrs-book2-ias36-two-cgus-partial-goodwill",
    standardCode: "IAS 36",
    title: text("انخفاض قيمة وحدتين مع شهرة جزئية", "Impairment of two units with partial goodwill"),
    facts: text("اشترت Acetone نسبة 80% من Dushanbe مقابل 600,000، وكانت صافي أصولها القابلة للتحديد بالقيمة العادلة 400,000. في تاريخ الاختبار بقيت صافي الأصول 400,000، والمبلغ القابل للاسترداد للوحدة 520,000. واشترت 85% من Maclullich مقابل 800,000 حين بلغت صافي أصولها 700,000؛ وفي تاريخ الاختبار بقيت صافي الأصول 700,000، والمبلغ القابل للاسترداد 660,000. تُقاس الحصص غير المسيطرة بنصيبها النسبي في صافي الأصول، ولا توجد خسائر شهرة سابقة.", "Acetone bought 80% of Dushanbe for 600,000 when its identifiable net assets had a fair value of 400,000. At testing, those net assets remain 400,000 and the unit's recoverable amount is 520,000. It also bought 85% of Maclullich for 800,000 when its net assets were 700,000. At testing, net assets remain 700,000 and recoverable amount is 660,000. NCI is measured as a proportionate share of net assets, and no earlier goodwill impairment is stated."),
    question: text("احسب لـDushanbe القيمة الدفترية المعدلة لأغراض اختبار الانخفاض والشهرة المتبقية، ثم احسب حصة غير المسيطرين في Maclullich بعد توزيع خسارة الانخفاض.", "For Dushanbe, calculate the adjusted carrying amount for the impairment test and the remaining recognised goodwill. Then calculate Maclullich's closing NCI after allocating the impairment loss."),
    solution: [
      text("Dushanbe: الشهرة المثبتة = 600,000 − 80% × 400,000 = 280,000. للاختبار فقط، تُزاد افتراضيًا إلى 280,000 ÷ 80% = 350,000 لتشمل شهرة الأقلية غير المثبتة. القيمة المقارنة = 400,000 + 350,000 = 750,000، وخسارة الوحدة الافتراضية = 750,000 − 520,000 = 230,000.", "Dushanbe: recognised goodwill is 600,000 − 80% × 400,000 = 280,000. Solely for testing, gross it up to 280,000 ÷ 80% = 350,000 to include unrecognised NCI goodwill. The comparable unit carrying amount is 400,000 + 350,000 = 750,000; notional unit impairment is 750,000 − 520,000 = 230,000."),
      text("تُخصص الخسارة أولًا للشهرة، ولكن لا يثبت من شطب الشهرة الافتراضية إلا نصيب الأم: 80% × 230,000 = 184,000. الشهرة المثبتة المتبقية = 280,000 − 184,000 = 96,000؛ ولا يُقيد نصيب شهرة الأقلية غير المثبتة، وهو 46,000، كخسارة مستقلة.", "Allocate the loss first to goodwill, but only the parent's 80% of notional goodwill impairment is recognised: 80% × 230,000 = 184,000. Remaining recognised goodwill is 280,000 − 184,000 = 96,000. The 46,000 attributable to unrecognised NCI goodwill is not separately booked."),
      text("Maclullich: الشهرة المثبتة = 800,000 − 85% × 700,000 = 205,000؛ والشهرة الافتراضية للاختبار = 205,000 ÷ 85% ≈ 241,176.47. لذا الخسارة الافتراضية ≈ (700,000 + 241,176.47) − 660,000 = 281,176.47. تُستهلك الشهرة الافتراضية أولًا بالكامل، ومنها الشهرة المثبتة 205,000، ثم يُخفض صافي الأصول 40,000. وبافتراض عدم وجود حدود خاصة للأصول الفردية تمنع هذا التخصيص، تصبح حصة غير المسيطرين = 15% × (700,000 − 40,000) = 99,000. الجزء الافتراضي من شهرة الأقلية لا يدخل رصيدها.", "Maclullich: recognised goodwill is 800,000 − 85% × 700,000 = 205,000; notional grossed-up goodwill is 205,000 ÷ 85% ≈ 241,176.47. Notional impairment is (700,000 + 241,176.47) − 660,000 ≈ 281,176.47. All notional goodwill is absorbed first, including 205,000 recognised goodwill; the remaining 40,000 reduces identifiable net assets. Assuming no individual-asset floor restricts that allocation, closing NCI is 15% × (700,000 − 40,000) = 99,000. Unrecognised NCI goodwill does not enter the NCI balance."),
    ],
    reference: "IAS 36.104–105, C3–C8; IFRS 3.19, 32",
  },
  {
    id: "ifrs-book2-ias36-dushanbe-full-goodwill",
    standardCode: "IAS 36",
    title: text("مقارنة الشهرة الكاملة في Dushanbe", "Dushanbe full-goodwill comparison"),
    facts: text("في اقتناء Acetone لنسبة 80% من Dushanbe مقابل 600,000، كانت القيمة العادلة لصافي الأصول القابلة للتحديد 400,000. في هذه الحالة تُقاس حصة غير المسيطرين بالقيمة العادلة 100,000 عند الاقتناء، لا بالنصيب النسبي. بقي صافي الأصول 400,000 في تاريخ الاختبار، والمبلغ القابل للاسترداد للوحدة 520,000، ولم تُثبت خسارة سابقة.", "Acetone acquired 80% of Dushanbe for 600,000; acquisition-date fair value of identifiable net assets was 400,000. In this variation, NCI is measured at acquisition-date fair value of 100,000, not proportionately. Net assets remain 400,000 at testing and the unit's recoverable amount is 520,000; no earlier impairment is stated."),
    question: text("احسب القيمة الدفترية المقارنة للوحدة والشهرة المتبقية بعد انخفاض القيمة عند استخدام الشهرة الكاملة.", "Compute the comparable unit carrying amount and remaining goodwill after impairment under full goodwill."),
    solution: [
      text("الشهرة الكاملة المثبتة عند الاقتناء = المقابل 600,000 + القيمة العادلة لحصة غير المسيطرين 100,000 − صافي الأصول 400,000 = 300,000. القيمة الدفترية للوحدة = 400,000 + 300,000 = 700,000؛ والخسارة = 700,000 − 520,000 = 180,000، وكلها تخفض الشهرة أولًا. المتبقي من الشهرة = 120,000.", "Full recognised goodwill at acquisition is consideration 600,000 + fair-value NCI 100,000 − identifiable net assets 400,000 = 300,000. Unit carrying amount is 400,000 + 300,000 = 700,000; impairment is 700,000 − 520,000 = 180,000, wholly allocated to goodwill first. Remaining goodwill is 120,000."),
      text("لأن حصة الأقلية قِيست بالقيمة العادلة ودخل نصيبها من الشهرة في القوائم، تُحمّل خسارة 180,000 على نتيجة المجموعة، ويُنسب منها 144,000 لملاك الأم و36,000 لغير المسيطرين بنسبة 80%/20% وفق فرضية الوحدة المستقلة هنا. لا تُستخدم زيادة افتراضية للشهرة في اختبار هذه الحالة.", "Because fair-value NCI includes recognised goodwill, the full 180,000 loss enters group profit or loss; 144,000 is attributed to parent owners and 36,000 to NCI at 80%/20% for this stand-alone unit. No notional goodwill gross-up is needed in this variation."),
    ],
    reference: "IAS 36.104, C3–C6; IFRS 3.19, 32",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-subsidiary-definition",
    standardCode: "IFRS 10",
    title: text("تعريف الشركة التابعة", "Definition of a subsidiary"),
    facts: text("يرتبط تصنيف الاستثمار بتقييم السيطرة، لا بمجرد نسبة الأسهم الاسمية.", "Investment classification depends on control, not merely the nominal shareholding percentage."),
    question: text("عرّف الشركة التابعة.", "Define a subsidiary."),
    solution: [
      text("الشركة التابعة منشأة تسيطر عليها منشأة أخرى. تُثبت السيطرة بفحص السلطة على الأنشطة ذات الصلة، والتعرض لعوائد متغيرة أو الحق فيها، والقدرة على استخدام السلطة للتأثير في تلك العوائد؛ لذلك قد تختلف نتيجة التقييم عن مجرد أغلبية الأسهم.", "A subsidiary is an entity controlled by another entity. Control requires power over relevant activities, exposure or rights to variable returns, and the ability to use that power to affect those returns; a simple share-majority test is not always conclusive."),
    ],
    reference: "IFRS 10.6–7, Appendix A",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-control-assessment",
    standardCode: "IFRS 10",
    title: text("متى تتحقق السيطرة؟", "When does control exist?"),
    facts: text("يملك مستثمر حقوقًا في منشأة أخرى ويتلقى عوائد من مشاركته فيها.", "An investor holds rights in another entity and receives returns from its involvement."),
    question: text("متى يمكن القول إن المستثمر يسيطر على المنشأة المستثمر فيها؟", "When can an investor be considered to control an investee?"),
    solution: [
      text("يلزم اجتماع العناصر الثلاثة: سلطة حالية تتيح توجيه الأنشطة ذات الصلة، وتعرض أو حقوق لعوائد متغيرة، وقدرة على استخدام السلطة للتأثير في مقدار هذه العوائد. لا تكفي حقوق الحماية أو التعرض للعوائد وحده. تُراجع حقوق التصويت الحالية والمحتملة الجوهرية والترتيبات التعاقدية بحسب الوقائع.", "All three elements are required: existing power to direct relevant activities, exposure or rights to variable returns, and the ability to use that power to affect those returns. Protective rights or returns alone are insufficient. Assess substantive present and potential voting rights and contractual arrangements in context."),
    ],
    reference: "IFRS 10.6–10, B11–B25, B47",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-parent-treatment",
    standardCode: "IFRS 10",
    title: text("معالجة الشركة الأم للقوائم", "Parent's consolidation requirement"),
    facts: text("تسيطر شركة أم على شركة تابعة وتعد قوائم مالية وفق المعايير الدولية.", "A parent controls a subsidiary and prepares IFRS financial statements."),
    question: text("ما المعالجة التي يتطلبها IFRS 10 من الشركة الأم؟", "What accounting treatment does IFRS 10 require of a parent?"),
    solution: [
      text("الأصل أن تعد الشركة الأم قوائم مالية موحدة تعرض أصول الأم وتابعاتها والتزاماتها وحقوق ملكيتها وإيراداتها ومصروفاتها وتدفقاتها النقدية كما لو كانت منشأة اقتصادية واحدة، مع حذف المعاملات والأرصدة داخل المجموعة. يُفحص استثناء الإعفاء في IFRS 10.4 أو استثناء المنشأة الاستثمارية حيث ينطبق؛ ولا يحل عرض الاستثمار بالقيمة فقط في قوائم الأم المنفصلة محل التوحيد المطلوب.", "Ordinarily the parent presents consolidated financial statements showing the parent and subsidiaries' assets, liabilities, equity, income, expenses and cash flows as one economic entity, eliminating intragroup items. Assess the IFRS 10.4 exemption or the investment-entity exception where relevant; merely recognising an investment in the parent's separate statements does not replace required consolidation."),
    ],
    reference: "IFRS 10.4, 19–20, 31–32, Appendix A, B86",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-consolidation-exemption",
    standardCode: "IFRS 10",
    title: text("إعفاء الشركة الأم الوسيطة من التوحيد", "Intermediate-parent consolidation exemption"),
    facts: text("تريد شركة أم داخل مجموعة أكبر معرفة ما إذا كان يجوز لها عدم عرض قوائم موحدة خاصة بها.", "A parent within a larger group asks whether it may omit its own consolidated financial statements."),
    question: text("متى تُعفى الشركة الأم من إعداد القوائم المالية الموحدة؟", "When is a parent exempt from presenting consolidated financial statements?"),
    solution: [
      text("إعفاء IFRS 10.4(a) مشروط بتحقق جميع الشروط: تكون تابعة مملوكة بالكامل أو جزئيًا، ويُبلّغ سائر الملاك بمن فيهم من لا يملكون حق التصويت ولا يعترضون؛ لا تتداول أدوات دينها أو حقوق ملكيتها في سوق عام؛ لا تودع قوائمها ولا تستعد لإيداعها بغرض إصدار أدوات في سوق عام؛ وتصدر أمها النهائية أو وسيطة قوائم متاحة للجمهور ملتزمة بـIFRS، تُوحَّد فيها التابعات أو تُقاس بالقيمة العادلة عبر الربح أو الخسارة طبقًا للاستثناء. وهناك استثناء مختلف للمنشأة الاستثمارية في IFRS 10.4B و31؛ فلا تجعل مجرد كونها تابعة إعفاءً عامًا.", "The IFRS 10.4(a) exemption requires every condition: the parent is wholly or partly owned by another entity and all other owners, including non-voting owners, have been informed and do not object; its debt or equity is not publicly traded; it is not filing or preparing to file statements to issue instruments in a public market; and an ultimate or intermediate parent issues publicly available IFRS-compliant statements consolidating subsidiaries or measuring them at fair value through profit or loss as IFRS 10 permits. A distinct investment-entity exception appears in IFRS 10.4B and 31. Merely being a subsidiary is not enough."),
    ],
    reference: "IFRS 10.4(a), 4B, 31–32",
  },
  {
    id: "ifrs-book2-ias27-quiz-subsidiary-separate-statements",
    standardCode: "IAS 27",
    title: text("استثمار التابعة في القوائم المنفصلة", "Subsidiary investment in separate statements"),
    facts: text("تعرض شركة أم قوائم مالية منفصلة إلى جانب قوائم المجموعة، ولديها استثمار في شركة تابعة.", "A parent presents separate financial statements alongside group statements and holds an investment in a subsidiary."),
    question: text("كيف تحاسب الشركة الأم عن استثمارها في التابعة في قوائمها المالية المنفصلة؟", "How does a parent account for an investment in a subsidiary in its separate financial statements?"),
    solution: [
      text("يجوز وفق IAS 27.10 اختيار التكلفة، أو تطبيق IFRS 9، أو طريقة حقوق الملكية وفق IAS 28، مع توحيد السياسة لكل فئة من الاستثمارات. الاستثمار الذي يُحاسب عنه بالتكلفة أو بحقوق الملكية ويُصنف محتفظًا به للبيع يُعالَج وفق IFRS 5؛ أما قياس استثمار IFRS 9 فلا يتغير لهذا السبب. لا تخلط هذه الخيارات مع متطلبات التوحيد في قوائم المجموعة.", "IAS 27.10 permits cost, IFRS 9 measurement or the equity method described in IAS 28, applying the same policy within each investment category. An investment at cost or under the equity method classified as held for sale is accounted for under IFRS 5; IFRS 9 measurement does not change solely for that classification. These separate-statement choices are distinct from group consolidation requirements."),
    ],
    reference: "IAS 27.9–10; IFRS 5; IFRS 9; IAS 28",
  },
  {
    id: "ifrs-book2-ifrs10-quiz-noncontrolling-interest",
    standardCode: "IFRS 10",
    title: text("حقوق الملكية غير المسيطرة", "Non-controlling interest"),
    facts: text("تُوحَّد شركة تابعة لا تعود ملكيتها كلها إلى الشركة الأم.", "A subsidiary that is not wholly owned is consolidated."),
    question: text("ما المقصود بحقوق الملكية غير المسيطرة؟", "What is a non-controlling interest?"),
    solution: [
      text("هي حقوق الملكية في الشركة التابعة التي لا تُنسب مباشرة أو غير مباشرة إلى الشركة الأم. تُعرض في حقوق الملكية بالقائمة الموحدة منفصلة عن حقوق ملاك الأم، ولا تعني استبعاد نسبة غير المسيطرين من أصول التابعة والتزاماتها عند التوحيد الكامل.", "It is equity in a subsidiary not attributable, directly or indirectly, to the parent. Present it within equity in the consolidated statement separately from the parent's owners' equity; it does not mean omitting the non-controlling share of a consolidated subsidiary's assets and liabilities."),
    ],
    reference: "IFRS 10.22, Appendix A",
  },
  {
    id: "ifrs-book2-ifrs8-jesmond-segment-tests",
    standardCode: "IFRS 8",
    title: text("Jesmond: اختبار القطاعات وحد 75%", "Jesmond: segment tests and the 75% rule"),
    facts: text("تقدم Jesmond تقارير للإدارة بحسب المنطقة. بالمليون دولار: أوروبا إيراد خارجي 200 وداخلي 3 وخسارة 10 وأصول 300 والتزامات 200؛ أمريكا الشمالية 300 و2 وربح 60 وأصول 800 والتزامات 300؛ «مناطق أخرى» 500 و5 وربح 105 وأصول 2,000 والتزامات 1,400. لا يوضح السؤال هل صف المناطق الأخرى قطاع تشغيلي واحد أم مجموع قطاعات.", "Jesmond reports to management by region. In $m: Europe has external revenue 200, intersegment revenue 3, loss 10, assets 300 and liabilities 200; North America 300, 2, profit 60, assets 800 and liabilities 300; 'Other regions' 500, 5, profit 105, assets 2,000 and liabilities 1,400. The question does not say whether 'Other regions' is one operating segment or a subtotal of several."),
    question: text("حدد حدود IFRS 8 الكمية والقطاعات التي يجب التقرير عنها، وبيّن أثر غموض «المناطق الأخرى» في اختبار 75%.", "Calculate IFRS 8 quantitative thresholds and identify reportable segments, explaining how the ambiguous 'Other regions' row affects the 75% test."),
    solution: [
      text("إجمالي إيراد القطاعات الخارجي والداخلي = 200+3+300+2+500+5 = 1,010؛ حد الإيراد 101. مجموع أرباح القطاعات الرابحة 60+105=165 مقابل خسائر بالقيمة المطلقة 10، فيكون حد الربح/الخسارة 16.5. مجموع الأصول 300+800+2,000=3,100 وحدها 310. لا يوجد اختبار 10% مستقل للالتزامات.", "Combined external and intersegment revenue = 200+3+300+2+500+5 = $1,010m, so the revenue threshold is $101m. Profitable segments total $165m (60+105) versus $10m absolute losses; the profit/loss threshold is $16.5m. Assets total $3,100m and the asset threshold is $310m. There is no separate 10% liabilities test."),
      text("أوروبا تحقق حد الإيراد بإجمالي 203 رغم أن خسارتها 10 وأصولها 300 دون الحدين الآخرين. أمريكا الشمالية تحقق الحدود الثلاثة بإيراد 302 وربح 60 وأصول 800. «المناطق الأخرى» تحقق حسابيًا الحدود الثلاثة بإيراد 505 وربح 105 وأصول 2,000 إذا كانت قطاعًا تشغيليًا واحدًا أو تجميعًا جائزًا وفق IFRS 8؛ فلا يصح استبعادها آليًا من اختبار 10%.", "Europe meets the revenue threshold with $203m although its $10m loss and $300m assets do not meet the other two. North America meets all three with $302m revenue, $60m profit and $800m assets. 'Other regions' mathematically meets all three with $505m revenue, $105m profit and $2,000m assets if it is one operating segment or a permitted aggregation under IFRS 8; it cannot simply be ignored in the 10% tests."),
      text("إيراد العملاء الخارجيين للمنشأة 1,000، فتغطية أوروبا وأمريكا الشمالية فقط = (200+300)÷1,000=50%، أقل من 75%. إن كانت «المناطق الأخرى» قطاعًا مؤهلًا للتقرير تصبح التغطية 100%، ويكون واجب التقرير عنها أصلاً بسبب حدود 10%. أما إن كانت مجموع قطاعات، فيلزم تفصيل تقارير متخذ القرار التشغيلي الرئيسي واختبار كل قطاع وشروط التجميع قبل تحديد أي قطاعات إضافية تحقق 75%. المعطيات لا تسمح بحكم نهائي على مكونات ذلك الصف؛ IFRS 8 معيار إفصاح ولا ينشئ قيدًا لمجرد هذا التصنيف.", "Total external-customer revenue is $1,000m, so Europe plus North America cover only (200+300)/1,000 = 50%, below 75%. If 'Other regions' is an eligible reportable segment, coverage becomes 100%, and it is reportable already under the 10% tests. If it is a subtotal, obtain the chief operating decision maker's underlying segment reports and test each component and any aggregation criteria before selecting additional segments to reach 75%. The data do not support a definitive classification of that row's components. IFRS 8 is a disclosure standard; this classification alone creates no journal entry."),
    ],
    reference: "IFRS 8.5, 11–16",
  },
  {
    id: "ifrs-book2-ias24-fancy-feet-suppliers",
    standardCode: "IAS 24",
    title: text("Fancy Feet: صلة الموردين", "Fancy Feet: supplier relationships"),
    facts: text("شركة بريطانية يملكها ويديرها السيد Kostades وأبناؤه الثلاثة؛ تشتري الأحذية من شركة فرنسية يملكها صندوق عائلة Kostades، وتستورد سلعًا من مورد يوناني لم يُذكر مالكه.", "A UK company is owned and run by Mr Kostades and his three children. It buys shoes from a French company owned by the Kostades Family Trust and goods from a Greek supplier whose owners are not identified."),
    question: text("ما مسائل IAS 24 التي يلزم فحصها؟ هل يكفي الوصف وحده لتصنيف الموردين طرفين ذوي علاقة؟", "What IAS 24 issues need investigation? Is the description alone enough to classify either supplier as related?"),
    solution: [
      text("افحص من يسيطر على الشركة البريطانية والصندوق والشركة الفرنسية، بما في ذلك صلاحيات الأمناء والمستفيدين. تشابه اسم العائلة لا يثبت وحده سيطرة الأشخاص أنفسهم؛ إذا ثبتت سيطرة شخص أو فرد مقرب من أسرته على المنشأتين، فاختبر علاقة IAS 24.9 والإفصاح عن المعاملات والأرصدة والالتزامات ذات الصلة.", "Establish who controls the UK entity, trust and French company, including trustees' powers and beneficiaries. A common family name alone does not establish common control. If a person or close family member controls the relevant entities, assess the IAS 24.9 relationship and related transactions, balances and commitments."),
      text("لا تُظهر الوقائع صلة المورد اليوناني؛ حجم التوريد أو الاعتماد عليه لا يكفي وحده. ولا توصف أي معاملة ذات علاقة بأنها بسعر مستقل إلا إذا أمكن إثبات ذلك.", "The facts do not establish that the Greek supplier is related; supply volume or economic dependence alone is insufficient. Do not assert arm's-length terms for a related-party transaction unless substantiated."),
    ],
    reference: "IAS 24.9–11, 18, 23",
  },
  {
    id: "ifrs-book2-ias24-rp-ab-investment",
    standardCode: "IAS 24",
    title: text("RP وAB: التمويل والتأثير المهم", "RP and AB: finance and significant influence"),
    facts: text("مولت RP شراء إدارة AB للشركة، واحتفظت بحصة ملكية 25% ومقعد بمجلس إدارة AB. تلقت أتعاب إدارة وفوائد وتوزيعات أرباح؛ وبقية الحصة لدى إدارة AB.", "RP financed a management buyout of AB, retained a 25% equity stake and a board seat, and received management fees, interest and dividends. AB's management owns the remainder."),
    question: text("هل يُستبعد إفصاح IAS 24 لأن RP مقدم تمويل؟ وما أثر الحصة ومقعد المجلس؟", "Does RP's financing role remove IAS 24 disclosure? How do the holding and board seat affect the conclusion?"),
    solution: [
      text("مقدم التمويل العادي ليس طرفًا ذا علاقة لمجرد القرض، لكن ذلك لا يلغي علاقة تنشأ من التأثير المهم. إذا كانت 25% من حقوق التصويت، يُفترض التأثير المهم وفق IAS 28.5 ما لم يثبت بوضوح عكسه؛ ويدعمه مقعد المجلس. افحص حقوق التصويت الفعلية، فلا تتساوى بالضرورة مع نسبة الأسهم، ولا تنفي ملكية الإدارة للباقي التأثير تلقائيًا.", "A normal lender is not related merely by lending, but that does not negate a relationship arising from significant influence. If the holding represents 25% of voting power, IAS 28.5 presumes significant influence unless clearly rebutted; the board seat supports it. Verify actual voting rights, which need not equal equity percentage. Management's remaining stake does not automatically rebut the presumption."),
      text("إذا كانت AB زميلة، أفصح عن طبيعة العلاقة والمعاملات والأرصدة والالتزامات وشروط القرض اللازمة لفهم أثرها؛ لا يعفي السعر السوقي من الإفصاح ولا يدعم وصف المعاملة بأنها مستقلة دون دليل. لا تضع قيدًا رقميًا لمبالغ لم تُعط.", "If AB is an associate, disclose the relationship and transaction, balance, commitment and loan-term information needed to understand its effect. Market pricing does not waive disclosure or justify an unsubstantiated arm's-length claim. No transaction amounts are given for journal entries."),
    ],
    reference: "IAS 24.9, 11, 18–19, 23; IAS 28.5–6",
  },
  {
    id: "ifrs-book2-ias24-rp-xino-disposal",
    standardCode: "IAS 24",
    title: text("RP وXino: تغير العلاقة خلال السنة", "RP and Xino: relationship changes during the year"),
    facts: text("باعت RP تابعتها Xino إلى Zukk في 1 يوليو 20X9، وسنتها تنتهي في 31 أكتوبر. باعت RP معدات مستعملة إلى Xino وأجّرت لها مصنعًا خلال السنة بأسعار وُصفت بالسوقية؛ تواريخ المعاملات وروابط الطرفين بعد البيع غير محددة.", "RP sold subsidiary Xino to Zukk on 1 July 20X9; its year ends on 31 October. RP sold equipment to Xino and leased it a factory at stated market rates. Transaction dates and post-sale links are unspecified."),
    question: text("كيف يختلف حكم إفصاح IAS 24 قبل البيع وبعده في قوائم RP المجمعة؟", "How does IAS 24 disclosure in RP's consolidated statements differ before and after disposal?"),
    solution: [
      text("قبل فقد السيطرة تُحذف معاملات وأرصدة RP مع تابعتها في القوائم المجمعة، وفق IAS 24.4 وIFRS 10؛ أما قوائم RP المنفصلة فلا تُحذف فيها بالطريقة ذاتها.", "Before loss of control, RP–subsidiary transactions and balances are eliminated from consolidated statements under IAS 24.4 and IFRS 10. They are not eliminated in the same way in RP's separate statements."),
      text("بعد 1 يوليو لا يجعل البيعُ السابق أو الإيجارُ المستمر Xino طرفًا ذا علاقة تلقائيًا. افحص أي سيطرة أو نفوذ أو روابط أشخاص باقية، وحدد تاريخ كل معاملة. طبّق إفصاح IAS 24 فقط حيث توجد علاقة فعلية خلال الفترة المعنية، مع الأرصدة والالتزامات ذات الصلة؛ لا تفترض وجوب الإفصاح عن كل معاملات يوليو–أكتوبر لمجرد أنها كانت تابعة. السعر السوقي لا يلغي الإفصاح إذا ثبتت العلاقة.", "After 1 July, former-subsidiary status and a continuing lease do not automatically make Xino related. Assess retained control, influence or personal links and each transaction date. Apply IAS 24 where a relationship actually exists during the relevant period, including relevant balances and commitments; do not assume every July–October transaction is related merely because Xino was formerly a subsidiary. Market rates do not waive disclosure if a relationship remains."),
    ],
    reference: "IAS 24.4, 9, 18, 23; IFRS 10.B86",
  },
  {
    id: "ifrs-book2-ias24-rp-retirement-plan",
    standardCode: "IAS 24",
    title: text("RP: خطة التقاعد ومدير الاستثمار", "RP: retirement plan and investment manager"),
    facts: text("تدير جهة أخرى خطة تقاعد موظفي RP. مساهمة المجموعة السنوية 16 مليون دولار؛ نقلت أصولًا ثابتة للخطة بقيمة 10 ملايين وحمّلتها تكاليف إدارية 3 ملايين في 20X9. مدير استثمار الخطة عضو غير تنفيذي بمجلس RP ويتلقى 25,000 دولار سنويًا.", "Another institution manages RP's employee retirement plan. RP contributes $16m annually, transferred $10m of PPE to the plan and recharged $3m of administration costs in 20X9. The plan's investment manager is a non-executive RP director receiving $25,000 annually."),
    question: text("ما الأطراف ذات العلاقة هنا وما الإفصاحات اللازمة؟ ميّز الخطة عن الشخص الذي يدير استثماراتها.", "Which parties are related and what disclosures are required? Distinguish the plan from its investment manager."),
    solution: [
      text("خطة منافع ما بعد الخدمة للموظفين طرف ذو علاقة وفق IAS 24.9. افحص مساهمات 16 مليون ونقل الأصول 10 ملايين وتحميل التكاليف 3 ملايين، وأفصح عن أنواع المعاملات ومبالغها وأرصدة نهاية الفترة وشروطها اللازمة لفهم الأثر. لا تعرف المعطيات القيمة الدفترية للأصول أو ربح النقل، فلا تختلق قيدًا عدديًا.", "An employee post-employment benefit plan is related under IAS 24.9. Assess the $16m contributions, $10m asset transfer and $3m recharge, disclosing transaction types, amounts, year-end balances and terms needed to understand their effect. Carrying amounts and any transfer gain are unknown, so no numerical journal entry can be derived."),
      text("البنك المدير لا يصبح طرفًا ذا علاقة لمجرد تقديم الخدمة. عضو مجلس RP غير التنفيذي من الإدارة العليا الرئيسيين؛ حدد من يدفع مبلغ 25,000 وطبيعة الخدمة، وأدرج تعويضه المناسب ضمن إجمالي وفئات تعويض الإدارة العليا في IAS 24.17. لا يفرض المعيار نشر مبلغ كل مدير منفردًا لمجرد صفته.", "The managing bank is not related merely by providing services. RP's non-executive director is key management personnel; establish who pays the $25,000 and for which service, and include relevant compensation in IAS 24.17 totals and categories. The standard does not require individual publication of every director's fee merely because of the role."),
    ],
    reference: "IAS 24.9, 11, 17–19, 24",
  },
  {
    id: "ifrs-book2-ias24-quiz-related-transaction",
    standardCode: "IAS 24",
    title: text("معاملة الطرف ذي العلاقة", "A related party transaction"),
    facts: text("قد تنتقل موارد أو خدمات أو التزامات بين منشأة وطرف ذي علاقة، بمقابل أو بدونه.", "Resources, services or obligations may pass between an entity and a related party, with or without consideration."),
    question: text("ما المقصود بمعاملة الطرف ذي العلاقة؟", "What is a related party transaction?"),
    solution: [
      text("هي تحويل موارد أو خدمات أو التزامات بين المنشأة المعدّة للتقرير وطرف ذي علاقة، بغض النظر عما إذا حُدِّد سعر أو فُرض مقابل. لذلك لا يُسقط غياب المقابل وصف المعاملة أو متطلبات الإفصاح ذات الصلة.", "It is a transfer of resources, services or obligations between the reporting entity and a related party, regardless of whether a price is charged. A nil price does not by itself remove the transaction from related-party disclosure requirements."),
    ],
    reference: "IAS 24.9, 18",
  },
  {
    id: "ifrs-book2-ias24-quiz-managing-director",
    standardCode: "IAS 24",
    title: text("المدير المنتدب والأطراف ذات العلاقة", "Managing director as a related party"),
    facts: text("يشغل شخص منصب المدير المنتدب للمنشأة المعدّة للتقرير.", "An individual is the reporting entity's managing director."),
    question: text("صح أم خطأ: المدير المنتدب طرف ذو علاقة بالمنشأة؟ وضّح السبب.", "True or false: a managing director is a related party of the entity. Explain why."),
    solution: [
      text("صح. المدير المنتدب من أفراد الإدارة العليا الرئيسيين لأن له سلطة ومسؤولية تخطيط أنشطة المنشأة وتوجيهها والرقابة عليها؛ ويشمل التعريف أي مدير، تنفيذيًا كان أو غير تنفيذي. لذلك يُعد الشخص طرفًا ذا علاقة وفق تعريف IAS 24.", "True. A managing director is key management personnel because the role carries authority and responsibility for planning, directing and controlling the entity's activities. The definition includes any director, executive or otherwise; that person is therefore a related party under IAS 24."),
    ],
    reference: "IAS 24.9",
  },
  {
    id: "ifrs-book2-ias24-quiz-nonrelated-examples",
    standardCode: "IAS 24",
    title: text("علاقات لا تكفي وحدها لإثبات الارتباط", "Relationships insufficient on their own"),
    facts: text("قد تتشابه الإدارة بين منشأتين، أو تعتمد إحداهما اقتصاديًا على عميل كبير، دون وقائع أخرى عن السيطرة أو النفوذ.", "Two entities may share a director, or one may depend economically on a major customer, with no other evidence of control or influence."),
    question: text("اذكر مثالين لعلاقات لا تُنشئ صفة الطرف ذي العلاقة بالضرورة.", "Give two examples of circumstances that do not necessarily create a related party relationship."),
    solution: [
      text("(1) منشأتان لهما مدير أو فرد من الإدارة العليا الرئيسيين مشترك، لمجرد هذا الاشتراك. (2) عميل أو مورد كبير توجد معه معاملات كثيرة، لمجرد الاعتماد الاقتصادي. افحص الوقائع الأخرى في كل حالة؛ فقد تنشأ العلاقة إذا وُجدت سيطرة أو سيطرة مشتركة أو نفوذ مؤثر وفق تعريف المعيار.", "(1) Two entities merely sharing a director or other key management person. (2) A major customer or supplier merely because of economic dependence or a large transaction volume. Other facts must still be assessed: control, joint control or significant influence can establish a relationship."),
    ],
    reference: "IAS 24.9–11",
  },
  {
    id: "ifrs-book2-ifrs8-quiz-reportable-thresholds",
    standardCode: "IFRS 8",
    title: text("تحديد القطاع الواجب التقرير عنه", "Identify a reportable segment"),
    facts: text("حددت المنشأة قطاعاتها التشغيلية وفق التقارير التي يراجعها متخذ القرار التشغيلي الرئيسي.", "An entity has identified operating segments from the reports reviewed by its chief operating decision maker."),
    question: text("ما معايير تحديد القطاع التشغيلي الواجب التقرير عنه؟", "What criteria determine whether an operating segment is reportable?"),
    solution: [
      text("بعد تحديد القطاع التشغيلي وتطبيق شروط التجميع إن انطبقت، يُبلّغ عنه منفصلًا إذا حقق أيًا من حدود 10%: إيراده المبلّغ، بما فيه الإيراد بين القطاعات، من مجموع إيرادات القطاعات الداخلية والخارجية؛ أو القيمة المطلقة لربحه أو خسارته من الأكبر بالقيمة المطلقة بين مجموع أرباح القطاعات الرابحة ومجموع خسائر القطاعات الخاسرة؛ أو أصوله من مجموع أصول القطاعات. يكفي تحقق حد واحد، وقد تُعرض قطاعات أخرى منفصلة إذا كانت معلوماتها مفيدة أو لازمة لتغطية إيرادات العملاء الخارجيين بنسبة 75% على الأقل.", "After identifying operating segments and applying the aggregation criteria where appropriate, report one separately if it meets any 10% threshold: reported revenue including intersegment revenue versus total internal and external segment revenue; absolute reported profit or loss versus the greater absolute total of profitable segments' profits and loss-making segments' losses; or segment assets versus total segment assets. One threshold is enough. Other segments may be reported if useful or needed to reach at least 75% external-revenue coverage."),
    ],
    reference: "IFRS 8.5, 11–15",
  },
  {
    id: "ifrs-book2-ifrs8-quiz-revenue-coverage",
    standardCode: "IFRS 8",
    title: text("تغطية إيرادات القطاعات المبلّغ عنها", "Reportable-segment revenue coverage"),
    facts: text("تجاوز بعض القطاعات الحدود الكمية للتقرير، وتبقى إيرادات لعملاء خارجيين من قطاعات أخرى.", "Some segments pass the quantitative tests, while other segments generate external-customer revenue."),
    question: text("ما الحد الأدنى من إيراد المنشأة الذي يجب أن تغطيه القطاعات الواجب التقرير عنها؟", "What minimum proportion of entity revenue must reportable segments cover?"),
    solution: [
      text("يجب أن تبلغ إيرادات العملاء الخارجيين للقطاعات الواجب التقرير عنها 75% على الأقل من إجمالي إيرادات المنشأة من العملاء الخارجيين. إذا كانت النسبة أقل، تُحدد قطاعات تشغيلية إضافية للتقرير عنها حتى الوصول إلى الحد، ولو لم تبلغ حدود 10%. لا تُستخدم التحويلات بين القطاعات في بسط اختبار 75%.", "External-customer revenue of reportable segments must account for at least 75% of the entity's total external-customer revenue. If coverage falls short, identify additional operating segments for separate reporting until the threshold is reached, even if they fail the 10% tests. Intersegment transfers do not form the numerator of this 75% test."),
    ],
    reference: "IFRS 8.15",
  },
  {
    id: "ifrs-book2-ias33-greymatter-bonus-comparative",
    standardCode: "IAS 33",
    title: text("Greymatter: أثر أسهم المنحة على المقارنة", "Greymatter: bonus shares and comparative EPS"),
    facts: text("كان لدى Greymatter عدد 400,000 سهم عادي، ثم أصدرت 100,000 سهم منحة في 30 سبتمبر 20X2. بلغ ربح 20X2 مبلغ 80,000 دولار، وكانت ربحية 20X1 المنشورة 18.75 سنتًا للسهم. السنة من يناير إلى ديسمبر.", "Greymatter had 400,000 ordinary shares, then issued 100,000 bonus shares on 30 September 20X2. Its 20X2 earnings were $80,000, and previously reported 20X1 EPS was 18.75 cents. Its year runs January–December."),
    question: text("احسب ربحية 20X2 وأعد بيان رقم المقارنة 20X1.", "Calculate 20X2 EPS and restate the 20X1 comparative."),
    solution: [
      text("إصدار المنحة لا يجلب موارد جديدة؛ يعامل عدد الأسهم بعده، 500,000 سهم، كأنه قائم من بداية أقدم فترة معروضة. ربحية 20X2 = 80,000 ÷ 500,000 = 0.16 دولار = 16 سنتًا. لا يُرجَّح إصدار المنحة لثلاثة أشهر فقط كما لو كان إصدارًا نقديًا.", "A bonus issue brings no new resources. Treat the post-bonus 500,000 shares as outstanding from the beginning of the earliest period presented. 20X2 EPS = $80,000 ÷ 500,000 = $0.16 = 16 cents. Do not weight the bonus shares for only three months as if they were issued for cash."),
      text("معامل تعديل مقارنة 20X1 = 400,000 ÷ 500,000 = 0.8؛ ربحيتها المعاد بيانها = 18.75 × 0.8 = 15 سنتًا. يعاد بيان مقام المقارنة لا أرباح 20X1 نفسها.", "Comparative adjustment factor = 400,000 ÷ 500,000 = 0.8; restated 20X1 EPS = 18.75 × 0.8 = 15 cents. Restate the comparative denominator, not the 20X1 earnings themselves."),
    ],
    reference: "IAS 33.26–28, 64",
  },
  {
    id: "ifrs-book2-ias33-egghead-theoretical-ex-rights",
    standardCode: "IAS 33",
    title: text("Egghead: السعر النظري بعد فصل الحق", "Egghead: theoretical ex-rights price"),
    facts: text("لدى Egghead عشرة ملايين سهم، وتقترح إصدار حق بسهم جديد لكل أربعة أسهم قائمة بسعر 3 دولارات، بينما سعر السهم شامل الحق مباشرة قبل الإصدار 3.50 دولارات.", "Egghead has 10,000,000 shares and proposes one new share for every four held at $3, while the cum-rights price immediately before issue is $3.50."),
    question: text("ما القيمة النظرية للسهم بعد فصل الحق؟", "What is the theoretical ex-rights value per share?"),
    solution: [
      text("على أساس أربع أسهم قديمة وسهم جديد: (4 × 3.50 + 1 × 3.00) ÷ 5 = 17 ÷ 5 = 3.40 دولارات للسهم. وبالأعداد الكلية: (10,000,000 × 3.50 + 2,500,000 × 3.00) ÷ 12,500,000 = 3.40 دولارات.", "Using four old shares and one new share: (4 × $3.50 + 1 × $3.00) ÷ 5 = $17 ÷ 5 = $3.40 per share. On total shares: (10,000,000 × $3.50 + 2,500,000 × $3.00) ÷ 12,500,000 = $3.40."),
      text("هذا سعر نظري لتقدير عنصر المنحة، وليس سعر تداول مضمونًا. معامل تعديل عدد الأسهم السابق لممارسة الحقوق سيكون 3.50 ÷ 3.40 إذا تمت الممارسة؛ الاقتراح وحده لا يعني أن الأسهم الجديدة أصبحت قائمة.", "This is a theoretical value for estimating the bonus element, not a guaranteed traded price. The pre-exercise share adjustment factor would be $3.50 ÷ $3.40 if the rights are exercised; the proposal alone does not mean the new shares are outstanding."),
    ],
    reference: "IAS 33.26–27, A2",
  },
  {
    id: "ifrs-book2-ias33-brains-rights-comparison",
    standardCode: "IAS 33",
    title: text("Brains: إصدار حقوق وربحية سنتين", "Brains: rights issue across two EPS periods"),
    facts: text("لدى Brains عدد 100,000 سهم قبل إصدار حق بسهم لكل خمسة في 1 أكتوبر 20X2 بسعر دولار واحد. سعر السهم شامل الحق 1.60 دولار. الربح 50,000 دولار في 20X2 و40,000 دولار في 20X1.", "Brains had 100,000 shares before a one-for-five rights issue on 1 October 20X2 at $1. The cum-rights share price was $1.60. Earnings were $50,000 in 20X2 and $40,000 in 20X1."),
    question: text("احسب ربحية 20X2 ورقم 20X1 المقارن بعد تعديل عنصر المنحة.", "Calculate 20X2 EPS and the bonus-adjusted 20X1 comparative."),
    solution: [
      text("السعر النظري بعد فصل الحق = (5 × 1.60 + 1) ÷ 6 = 1.50 دولار؛ معامل عنصر المنحة = 1.60 ÷ 1.50 = 1.0666667. ربحية 20X1 الأصلية = 40,000 ÷ 100,000 = 40 سنتًا؛ المعاد بيانها = 40 × 1.50 ÷ 1.60 = 37.5 سنتًا.", "Theoretical ex-rights value = (5 × $1.60 + $1) ÷ 6 = $1.50; bonus factor = $1.60 ÷ $1.50 = 1.0666667. Original 20X1 EPS = $40,000 ÷ 100,000 = 40 cents; restated EPS = 40 × $1.50 ÷ $1.60 = 37.5 cents."),
      text("المتوسط المرجح في 20X2 = 100,000 × 1.0666667 × 9/12 + 120,000 × 3/12 = 80,000 + 30,000 = 110,000 سهم. ربحية 20X2 = 50,000 ÷ 110,000 = 0.454545 دولار ≈ 45.5 سنتًا. لا يُعدل الربح بعنصر المنحة.", "20X2 weighted-average shares = 100,000 × 1.0666667 × 9/12 + 120,000 × 3/12 = 80,000 + 30,000 = 110,000. 20X2 EPS = $50,000 ÷ 110,000 = $0.454545 ≈ 45.5 cents. The bonus element does not adjust earnings."),
    ],
    reference: "IAS 33.19–27, 64, A2",
  },
  {
    id: "ifrs-book2-ias33-marcoli-rights-three-years",
    standardCode: "IAS 33",
    title: text("Marcoli: أثر حقوق الاكتتاب خلال ثلاث سنوات", "Marcoli: rights issue across three years"),
    facts: text("بلغ ربح Marcoli في 20X6 و20X7 و20X8 على التوالي 1.1 و1.5 و1.8 مليون دولار. في 1 يناير 20X7 كان لديها 500,000 سهم؛ أعلنت خلال 20X7 حقًا بسهم لكل خمسة، أي 100,000 سهم جديد، بسعر تنفيذ 5 دولارات. آخر يوم للممارسة 1 مارس 20X7، وسعر السهم قبل ممارسة الحقوق مباشرة 11 دولارًا.", "Marcoli's earnings for 20X6, 20X7 and 20X8 were $1.1m, $1.5m and $1.8m. It had 500,000 shares on 1 January 20X7 and announced a one-for-five rights issue during 20X7, 100,000 new shares, at $5. The last exercise date was 1 March 20X7 and the immediately pre-exercise share price was $11."),
    question: text("احسب ربحية السهم للسنوات الثلاث، مع توضيح الفرض اللازم لتوقيت الممارسة.", "Calculate EPS for all three years, identifying the required exercise-date assumption."),
    solution: [
      text("السعر النظري بعد فصل الحق = (500,000 × 11 + 100,000 × 5) ÷ 600,000 = 10 دولارات؛ معامل المنحة = 11 ÷ 10 = 1.1. يفترض حل المسألة أن 500,000 سهم كانت قائمة طوال 20X6 وأن الحقوق مُورست في 1 مارس؛ آخر موعد للممارسة وحده لا يثبت تاريخ كل ممارسة فعليًا.", "Theoretical ex-rights value = (500,000 × $11 + 100,000 × $5) ÷ 600,000 = $10; bonus factor = $11 ÷ $10 = 1.1. The worked result assumes 500,000 shares throughout 20X6 and exercise on 1 March; a final exercise deadline alone does not prove each actual exercise date."),
      text("تحت هذه الفروض: ربحية 20X6 المعاد بيانها = 1,100,000 ÷ (500,000 × 1.1) = 2.00 دولار؛ مقام 20X7 = 500,000 × 1.1 × 2/12 + 600,000 × 10/12 = 591,666.67 سهم، وربحيته = 1,500,000 ÷ 591,666.67 ≈ 2.54 دولار؛ ربحية 20X8 = 1,800,000 ÷ 600,000 = 3.00 دولارات للسهم.", "Under those assumptions: restated 20X6 EPS = $1,100,000 ÷ (500,000 × 1.1) = $2.00; 20X7 denominator = 500,000 × 1.1 × 2/12 + 600,000 × 10/12 = 591,666.67 shares, giving $1,500,000 ÷ 591,666.67 ≈ $2.54; 20X8 EPS = $1,800,000 ÷ 600,000 = $3.00 per share."),
      text("إذا اختلفت تواريخ الممارسة الفعلية أو حركة أسهم 20X6 يتغير المقام الزمني؛ لا تعمم هذه الأرقام من دون تلك الوقائع.", "If actual exercise dates or the 20X6 share movement differed, time-weighted shares would differ. Do not generalise the figures without those facts."),
    ],
    reference: "IAS 33.19–27, 64, A2",
  },
  {
    id: "ifrs-book2-ias33-justina-weighted-shares",
    standardCode: "IAS 33",
    title: text("Justina: ترجيح الأسهم الصادرة نقدًا", "Justina: time-weight a cash share issue"),
    facts: text("بدأت Justina سنة 20X7 ولديها 170,000 سهم عادي. في 31 مايو أصدرت 80,000 سهم جديد مقابل نقد، فأصبح رصيد نهاية السنة 250,000 سهم.", "Justina began 20X7 with 170,000 ordinary shares. On 31 May it issued 80,000 new shares for cash, leaving 250,000 shares at year-end."),
    question: text("احسب المتوسط المرجح للأسهم العادية القائمة في 20X7.", "Calculate weighted-average ordinary shares outstanding in 20X7."),
    solution: [
      text("باستخدام التقريب الشهري في المسألة، تُوزن الأسهم الأصلية طوال 12 شهرًا والجديدة سبعة أشهر من يونيو إلى ديسمبر: 170,000 × 12/12 + 80,000 × 7/12 = 216,666.67، أي نحو 216,667 سهمًا. ويمكن التحقق أيضًا: 170,000 × 5/12 + 250,000 × 7/12 = النتيجة نفسها.", "Using the question's monthly approximation, weight the original shares for 12 months and the new shares for seven months, June–December: 170,000 × 12/12 + 80,000 × 7/12 = 216,666.67, or approximately 216,667 shares. Equivalently, 170,000 × 5/12 + 250,000 × 7/12 gives the same result."),
      text("في التطبيق العملي يبدأ احتساب أسهم الإصدار النقدي عندما يصبح المقابل مستحق التحصيل؛ ويمكن استخدام الأيام الفعلية إذا كان فرق يوم الإصدار جوهريًا. رصيد 250,000 في نهاية السنة ليس مقام السنة كلها.", "In practice cash-issued shares enter the average when consideration becomes receivable; actual days can be used if the issue-day difference matters. The 250,000 year-end balance is not the denominator for the entire year."),
    ],
    reference: "IAS 33.19–21",
  },
  {
    id: "ifrs-book2-ias33-flame-basic-eps",
    standardCode: "IAS 33",
    title: text("Flame: الأسهم الممتازة وربحية السهم", "Flame: preference shares and basic EPS"),
    facts: text("لدى Flame عدد 100,000 سهم عادي و20,000 سهم ممتاز قابل للاسترداد بقيمة اسمية دولار واحد وفائدة/توزيع 10%. مجمل الربح 200,000 دولار، ومصاريف النشاط 50,000، وضريبة السنة المقدرة 40,000. سددت المنشأة عائد الأسهم الممتازة وتوزيعًا للأسهم العادية قدره 42 سنتًا للسهم.", "Flame has 100,000 $1 ordinary shares and 20,000 $1 10% redeemable preference shares. Gross profit is $200,000, trading expenses are $50,000 and estimated tax is $40,000. It paid the preference return and a 42-cent ordinary dividend per share."),
    question: text("احسب ربحية السهم الأساسية للسنة، مع بيان أثر تصنيف الأسهم الممتازة.", "Calculate basic EPS for the year, explaining the effect of preference-share classification."),
    solution: [
      text("عائد الأسهم الممتازة = 20,000 × 10% × 1 = 2,000 دولار. حل المسألة المطبوع يفترض إدراج كامل العائد ضمن المصروفات: (200,000 − 50,000 − 2,000 − 40,000) ÷ 100,000 = 1.08 دولار = 108 سنتات للسهم. في هذا الفرض لا يُخصم مبلغ 2,000 مرة ثانية من بسط الربحية.", "Preference return = 20,000 × 10% × $1 = $2,000. The question's worked treatment assumes the full return is recognised as an expense: ($200,000 − $50,000 − $2,000 − $40,000) ÷ 100,000 = $1.08 = 108 cents per share. On that assumption, do not deduct the $2,000 again from the EPS numerator."),
      text("لو كان العائد توزيعًا على عنصر حقوق ملكية، لكان الربح قبل توزيعه 110,000 دولار، ثم يُخصم العائد الملائم من بسط ربحية السهم وفق IAS 33، فتظل النتيجة الحسابية هنا 108 سنتات إذا لم يتغير أثر الضريبة. كلمة «قابلة للاسترداد» وحدها لا تحدد هل الأداة التزام أم حقوق ملكية أم أداة مركبة؛ يلزم فحص شروط الاسترداد وقرار التوزيع وفق IAS 32. توزيع الأسهم العادية 42 سنتًا لا يُخصم من البسط.", "If the return is a distribution on an equity component, profit before that distribution would be $110,000, then the applicable preference return is deducted from the IAS 33 numerator, again giving 108 cents here if the tax effect is unchanged. The word 'redeemable' alone does not determine whether the instrument is a liability, equity or compound; inspect redemption and dividend terms under IAS 32. The 42-cent ordinary dividend is not deducted."),
    ],
    reference: "IAS 33.10–15; IAS 32.16–18",
  },
  {
    id: "ifrs-book2-ias33-boffin-cash-issue-comparison",
    standardCode: "IAS 33",
    title: text("Boffin: مقارنة ربحية السهم بعد إصدار نقدي", "Boffin: compare EPS after a cash issue"),
    facts: text("في 30 سبتمبر 20X2 أصدرت Boffin مليون سهم عادي بالقيمة السوقية. كان عدد الأسهم بنهاية 20X1 ثمانية ملايين وبنهاية 20X2 تسعة ملايين. الربح بعد الضريبة وتوزيعات الأسهم الممتازة 3,280,000 دولار في 20X1 و3,300,000 دولار في 20X2. السنة المالية من يناير إلى ديسمبر.", "On 30 September 20X2 Boffin issued 1,000,000 ordinary shares at full market price. Shares at the end of 20X1 were 8,000,000 and at the end of 20X2 were 9,000,000. Profit after tax and preference dividends was $3,280,000 in 20X1 and $3,300,000 in 20X2. The financial year runs January–December."),
    question: text("احسب ربحية السهم للسنتين 20X1 و20X2 وقارن الاتجاه.", "Calculate EPS for 20X1 and 20X2 and compare the trend."),
    solution: [
      text("بافتراض ثبات الأسهم الثمانية ملايين طوال 20X1 وقبل الإصدار في 20X2، مقام 20X2 = 8,000,000 × 9/12 + 9,000,000 × 3/12 = 8,250,000 سهم. إذن ربحية 20X2 = 3,300,000 ÷ 8,250,000 = 0.40 دولار = 40 سنتًا.", "Assuming the 8,000,000 shares were outstanding throughout 20X1 and before the 20X2 issue, the 20X2 denominator = 8,000,000 × 9/12 + 9,000,000 × 3/12 = 8,250,000. Thus 20X2 EPS = $3,300,000 ÷ 8,250,000 = $0.40 = 40 cents."),
      text("مقام 20X1 = 8,000,000؛ ربحيتها = 3,280,000 ÷ 8,000,000 = 0.41 دولار = 41 سنتًا. زاد الربح الإجمالي 20,000 دولار، لكن ربحية السهم انخفضت سنتًا واحدًا لأن الإصدار زاد المتوسط المرجح للأسهم؛ لا يُعاد بيان مقارنة 20X1 لإصدار نقدي بمقابل سوقي.", "The 20X1 denominator is 8,000,000; EPS = $3,280,000 ÷ 8,000,000 = $0.41 = 41 cents. Total earnings rose by $20,000, yet EPS fell by one cent because the issue increased weighted-average shares. A full-market cash issue does not restate 20X1 comparative EPS."),
    ],
    reference: "IAS 33.19–21, 26, 64",
  },
  {
    id: "ifrs-book2-ias33-farrah-convertible",
    standardCode: "IAS 33",
    title: text("Farrah: أثر القرض القابل للتحويل", "Farrah: convertible loan and diluted EPS"),
    facts: text("في 20X7 بلغت ربحية السهم الأساسية 105 سنتات، بناءً على ربح 105,000 دولار و100,000 سهم عادي. لدى Farrah قرض قابل للتحويل بقيمة 40,000 دولار وفائدة 15%، يمكن تحويله بعد سنتين بمعدل 4 أسهم عادية لكل 5 دولارات من أصل القرض. معدل الضريبة 30%.", "In 20X7 Farrah had basic EPS of 105 cents based on earnings of $105,000 and 100,000 ordinary shares. It also had $40,000 of 15% convertible loan stock, convertible in two years at four ordinary shares for every $5 of stock. The tax rate is 30%."),
    question: text("احسب ربحية السهم المخففة.", "Calculate diluted earnings per share."),
    solution: [
      text("أسهم التحويل = 40,000 ÷ 5 × 4 = 32,000 سهم؛ المقام المفترض = 132,000 سهم، بافتراض بقاء القرض قائمًا طوال الفترة كما يفترض المثال.", "Conversion shares = $40,000 ÷ $5 × 4 = 32,000; assumed denominator = 132,000 shares, on the example's assumption that the loan was outstanding throughout the period."),
      text("الفائدة السنوية = 40,000 × 15% = 6,000 دولار؛ أثرها بعد الضريبة = 6,000 × (1 − 30%) = 4,200؛ البسط المعدل = 105,000 + 4,200 = 109,200 دولار، ما لم توجد آثار دخل أو مصروف أخرى ناشئة عن التحويل.", "Annual interest = $40,000 × 15% = $6,000; after-tax effect = $6,000 × (1 − 30%) = $4,200; adjusted numerator = $105,000 + $4,200 = $109,200, assuming no other consequential income or expense."),
      text("المخففة = 109,200 ÷ 132,000 = 0.82727 دولار ≈ 82.7 سنتًا للسهم. وهي أدنى من الأساسية البالغة 105 سنتات، لذلك يُدرج القرض في هذا الفرض. لا يُثبت قيد تحويل فعلي؛ هذا حساب افتراضي للعرض فقط.", "Diluted EPS = $109,200 ÷ 132,000 = $0.82727 ≈ 82.7 cents per share. This is below the 105-cent basic EPS, so the loan is included on these facts. No actual conversion entry is recorded; this is a presentation calculation."),
    ],
    reference: "IAS 33.31–36, 41–44",
  },
  {
    id: "ifrs-book2-ias33-ardent-two-convertibles",
    standardCode: "IAS 33",
    title: text("Ardent: فرز قرضين قابلين للتحويل", "Ardent: test two convertible issues separately"),
    facts: text("لدى Ardent خمسة ملايين سهم عادي، وربح 20X4 يبلغ 1,750,000 دولار. لديها قرض قابل للتحويل بمليون دولار وفائدة 14% إلى سهمين لكل 10 دولارات، وآخر بمليوني دولار وفائدة 10% إلى ثلاثة أسهم لكل 5 دولارات. معدل ضريبة الدخل 35%.", "Ardent has 5,000,000 ordinary shares and 20X4 earnings of $1,750,000. It has $1,000,000 of 14% convertible debt at two shares per $10 of stock, and $2,000,000 of 10% convertible debt at three shares per $5 of stock. Income tax is 35%."),
    question: text("احسب ربحية السهم الأساسية والمخففة، وافحص كل قرض على حدة.", "Calculate basic and diluted EPS and test each loan separately."),
    solution: [
      text("بافتراض أن الربح المعطى منسوب كله للأسهم العادية وأن الأرقام قائمة طوال الفترة: الأساسية = 1,750,000 ÷ 5,000,000 = 0.35 دولار = 35 سنتًا للسهم.", "Assuming all stated earnings belong to ordinary shareholders and the instruments were outstanding throughout the period: basic EPS = $1,750,000 ÷ 5,000,000 = $0.35 = 35 cents per share."),
      text("قرض 14%: أسهمه الإضافية = 1,000,000 ÷ 10 × 2 = 200,000؛ فائدة بعد الضريبة = 1,000,000 × 14% × 65% = 91,000 دولار؛ ربحية السهم الإضافي = 91,000 ÷ 200,000 = 45.5 سنتًا. هذا أعلى من الأساسية 35 سنتًا، لذلك يكون مضادًا للتخفيف ويُستبعد.", "14% loan: incremental shares = $1,000,000 ÷ $10 × 2 = 200,000; after-tax interest = $1,000,000 × 14% × 65% = $91,000; incremental earnings per share = $91,000 ÷ 200,000 = 45.5 cents. This exceeds basic EPS of 35 cents, so the issue is antidilutive and excluded."),
      text("قرض 10%: أسهمه الإضافية = 2,000,000 ÷ 5 × 3 = 1,200,000؛ فائدة بعد الضريبة = 2,000,000 × 10% × 65% = 130,000 دولار؛ ربحية السهم الإضافي ≈ 10.83 سنتات. يُدرج لأنه مخفف: (1,750,000 + 130,000) ÷ (5,000,000 + 1,200,000) = 0.30323 دولار ≈ 30.3 سنتًا. لا تجمع أثر القرضين قبل اختبار كل إصدار.", "10% loan: incremental shares = $2,000,000 ÷ $5 × 3 = 1,200,000; after-tax interest = $2,000,000 × 10% × 65% = $130,000; incremental earnings per share ≈ 10.83 cents. Include it because it is dilutive: ($1,750,000 + $130,000) ÷ (5,000,000 + 1,200,000) = $0.30323 ≈ 30.3 cents. Do not aggregate the two issues before testing each one."),
    ],
    reference: "IAS 33.31–36, 41–44",
  },
  {
    id: "ifrs-book2-ias33-brand-options",
    standardCode: "IAS 33",
    title: text("Brand: خيارات الأسهم وربحية السهم", "Brand: options and diluted EPS"),
    facts: text("في سنة 20X7 بلغ ربح Brand مليونًا ومئتي ألف دولار، والمتوسط المرجح للأسهم العادية القائمة 500,000 سهم. متوسط السعر العادل للسهم 20 دولارًا، والمتوسط المرجح للأسهم تحت الخيار 100,000 سهم، وسعر التنفيذ 15 دولارًا للسهم.", "In 20X7 Brand's earnings were $1,200,000, weighted-average ordinary shares outstanding were 500,000, average market value per share was $20, weighted-average shares under option were 100,000, and the exercise price was $15 per share."),
    question: text("احسب ربحية السهم الأساسية والمخففة.", "Calculate basic and diluted earnings per share."),
    solution: [
      text("بافتراض أن الربح المعطى منسوب كله للأسهم العادية: الأساسية = 1,200,000 ÷ 500,000 = 2.40 دولار للسهم.", "Assuming all stated earnings belong to ordinary shareholders: basic EPS = $1,200,000 ÷ 500,000 = $2.40 per share."),
      text("لأن سعر التنفيذ 15 دولارًا أقل من متوسط السوق 20 دولارًا فالخيارات مخففة. متحصلات التنفيذ المفترضة = 100,000 × 15 = 1,500,000 دولار؛ الأسهم التي تكافئ هذا المبلغ بسعر السوق = 1,500,000 ÷ 20 = 75,000؛ الأسهم المجانية ضمنًا = 100,000 − 75,000 = 25,000.", "The $15 exercise price is below the $20 average market price, so the options are dilutive. Assumed proceeds = 100,000 × $15 = $1,500,000; equivalent shares at market price = $1,500,000 ÷ $20 = 75,000; deemed no-consideration shares = 100,000 − 75,000 = 25,000."),
      text("المقام المخفف = 500,000 + 25,000 = 525,000؛ المخففة = 1,200,000 ÷ 525,000 = 2.285714 دولار ≈ 2.29 دولار للسهم. لا تُضاف متحصلات تنفيذ مفترضة إلى ربح الفترة، ولا يُثبت قيد ممارسة حقيقي.", "Diluted denominator = 500,000 + 25,000 = 525,000; diluted EPS = $1,200,000 ÷ 525,000 = $2.285714 ≈ $2.29 per share. Assumed exercise proceeds are not added to period earnings, and no actual exercise entry is recorded."),
    ],
    reference: "IAS 33.41–47",
  },
  {
    id: "ifrs-book2-ias33-quiz-basic-eps",
    standardCode: "IAS 33",
    title: text("صيغة ربحية السهم الأساسية", "Basic earnings-per-share formula"),
    facts: text("سؤال مفاهيمي عن بسط ومقام ربحية السهم الأساسية.", "A conceptual question about the numerator and denominator of basic EPS."),
    question: text("كيف تُحسب ربحية السهم الأساسية؟", "How is basic earnings per share calculated?"),
    solution: [
      text("تقسم نتيجة الفترة المنسوبة لحملة الأسهم العادية في الشركة الأم، بعد التعديلات المتعلقة بالأسهم الممتازة المصنفة حقوق ملكية عند انطباقها، على المتوسط المرجح للأسهم العادية القائمة خلال الفترة. في القوائم الموحدة لا يستخدم إجمالي ربح المجموعة قبل استبعاد حصة غير المسيطرين.", "Divide profit or loss attributable to ordinary equity holders of the parent, after applicable adjustments for equity-classified preference shares, by the weighted-average ordinary shares outstanding during the period. Consolidated EPS does not use total group profit before non-controlling interests are excluded."),
    ],
    reference: "IAS 33.10–20",
  },
  {
    id: "ifrs-book2-ias33-quiz-rights-bonus-factor",
    standardCode: "IAS 33",
    title: text("معامل عنصر المنحة في إصدار الحقوق", "Rights-issue bonus factor"),
    facts: text("سؤال عن تعديل عدد الأسهم لفترات ما قبل إصدار حقوق بسعر دون القيمة العادلة.", "A question about adjusting pre-rights share counts when rights are issued below fair value."),
    question: text("ما صيغة معامل عنصر المنحة في إصدار الحقوق؟", "What is the rights-issue bonus-element adjustment factor?"),
    solution: [
      text("المعامل = القيمة العادلة للسهم مباشرة قبل ممارسة الحقوق (السعر شامل الحق) ÷ القيمة النظرية للسهم بعد فصل الحق. وتحسب القيمة النظرية = (القيمة العادلة لكل الأسهم القائمة قبل الممارسة + متحصلات ممارسة الحقوق) ÷ عدد الأسهم بعد الممارسة.", "Factor = fair value per share immediately before rights exercise (cum-rights price) ÷ theoretical ex-rights fair value per share. Theoretical ex-rights value = (fair value of all shares outstanding before exercise + total rights proceeds) ÷ shares outstanding after exercise."),
      text("يضرب عدد الأسهم في فترات ما قبل ممارسة الحقوق في هذا المعامل عند حساب المتوسط المرجح، وتُعاد أرقام ربحية السهم المقارنة ذات الصلة؛ لا يُضرب الربح نفسه فيه.", "Multiply pre-exercise share counts by this factor in the weighted average and restate relevant comparative EPS figures; do not multiply earnings by it."),
    ],
    reference: "IAS 33.26–27, A2–A3",
  },
  {
    id: "ifrs-book2-ias33-quiz-dilutive-potential-share",
    standardCode: "IAS 33",
    title: text("تعريف السهم العادي المحتمل المخفِّض", "Define a dilutive potential ordinary share"),
    facts: text("قد تمنح أداة قابلة للتحويل أو خيار أو ضمان حق الحصول على أسهم عادية مستقبلًا.", "A convertible instrument, option or warrant may give a right to ordinary shares in the future."),
    question: text("ما السهم العادي المحتمل المخفِّض؟", "What is a dilutive potential ordinary share?"),
    solution: [
      text("السهم العادي المحتمل ينشأ من أداة مالية أو عقد آخر قد يُخوِّل حامله الحصول على أسهم عادية. يكون مخفِّضًا فقط إذا أدى افتراض تحويله أو ممارسته إلى انخفاض ربحية السهم، أو زيادة خسارة السهم، من العمليات المستمرة. وجود حق تحويل وحده لا يكفي؛ الأدوات المضادة للتخفيف تستبعد من ربحية السهم المخففة.", "A potential ordinary share arises from a financial instrument or other contract that may entitle its holder to ordinary shares. It is dilutive only if assumed conversion or exercise decreases earnings per share, or increases loss per share, from continuing operations. A conversion right alone is insufficient; antidilutive instruments are excluded from diluted EPS."),
    ],
    reference: "IAS 33.5, 31, 41–43",
  },
  {
    id: "ifrs-book2-ias33-quiz-dilution-control-number",
    standardCode: "IAS 33",
    title: text("بسط اختبار التخفيف", "Numerator for the dilution test"),
    facts: text("سؤال عن رقم الربح أو الخسارة المرجعي عند تحديد ما إذا كانت الأسهم المحتملة مخفِّضة.", "A question about the earnings control number for judging whether potential shares are dilutive."),
    question: text("أي بسط يُستخدم لاختبار ما إذا كانت الأسهم العادية المحتملة مخفِّضة؟", "Which numerator is used to test whether potential ordinary shares are dilutive?"),
    solution: [
      text("يستخدم ربح أو خسارة العمليات المستمرة المنسوب إلى الشركة الأم، بعد تعديل البسط وفق IAS 33.12 للأسهم الممتازة وما يرتبط بها عند الحاجة، مع استبعاد نتائج العمليات المتوقفة. ثم يُقارن الأثر الافتراضي لكل إصدار أو سلسلة على حدة وبالترتيب الأكثر تخفيفًا.", "Use profit or loss from continuing operations attributable to the parent, adjusted under IAS 33.12 for preference-share effects when relevant, and exclude discontinued operations. Assess each issue or series separately in the most-dilutive sequence."),
    ],
    reference: "IAS 33.12, 41–44",
  },
  {
    id: "ifrs-book2-ias33-quiz-convertible-interest",
    standardCode: "IAS 33",
    title: text("تعديل البسط عند تحويل السندات", "Numerator adjustment for convertible debt"),
    facts: text("سؤال عن فرض تحويل سندات قابلة للتحويل إلى أسهم عادية في حساب ربحية السهم المخففة.", "A question about assuming convertible debt converts into ordinary shares for diluted EPS."),
    question: text("لماذا يُعدل بسط ربحية السهم المخففة عند وجود سندات قابلة للتحويل؟", "Why is the diluted-EPS numerator adjusted for convertible bonds?"),
    solution: [
      text("لأن فرض التحويل يزيل مصروف الفائدة المتعلق بالسندات، فيعاد إلى الربح أثر الفائدة بعد الضريبة لا مبلغها الإجمالي تلقائيًا. وتُراعى أيضًا أي تغيرات أخرى في الإيرادات أو المصروفات كانت ستنجم عن التحويل. وبالمقابل يزيد المقام بالأسهم العادية الإضافية المرجحة، لكن تُدرج الأداة فقط إذا كانت مخفِّضة وفق اختبار IAS 33.", "Assumed conversion eliminates the bond-related interest expense, so its after-tax effect—not automatically gross interest—is added back to earnings. Any other consequential income or expense changes are also considered. The denominator increases by weighted additional ordinary shares, but the instrument is included only if it is dilutive under IAS 33."),
    ],
    reference: "IAS 33.31–36, 41–44",
  },
  {
    id: "ifrs-book2-ias8-global-inventory-error",
    standardCode: "IAS 8",
    title: text("Global: خطأ مخزون المقارنة", "Global: comparative inventory error"),
    facts: text(
      "اكتشفت Global خلال 20X7 أن مخزون 31 ديسمبر 20X6 تضمن بضاعة بمبلغ 4,200 ألف دولار بيعت قبل نهاية 20X6. أرقام 20X6 المنشورة بالألف: المبيعات 47,400، تكلفة المبيعات 34,570، ضريبة الدخل 3,880، صافي الربح 8,950. مسودة 20X7: المبيعات 67,200، تكلفة المبيعات 55,800 (تشمل خطأ مخزون أول المدة)، ضريبة الدخل 3,400، صافي الربح 8,000. الأرباح المحتجزة أول 20X6 هي 13,000، بلا توزيعات، ومعدل الضريبة 30%.",
      "During 20X7 Global finds that 31 December 20X6 inventory included US$4,200 thousand of goods sold before 20X6 year-end. Published 20X6 amounts in thousands: revenue 47,400, cost of sales 34,570, income tax 3,880 and net profit 8,950. The 20X7 draft shows revenue 67,200, cost of sales 55,800 (including the opening-inventory error), tax 3,400 and net profit 8,000. Opening 20X6 retained earnings are 13,000, with no dividends; the stated tax rate is 30%."
    ),
    question: text("أعد عرض قائمة الربح أو الخسارة لسنة 20X7 مع مقارنة 20X6 والأرباح المحتجزة، وبيّن أثر المعلومات الضريبية الناقصة.", "Show 20X7 profit or loss with the 20X6 comparative and retained earnings, noting the tax information needed."),
    solution: [
      text("أعد بيان 20X6: المبيعات 47,400؛ تكلفة المبيعات 34,570 + 4,200 = 38,770؛ الربح قبل الضريبة 8,630. في 20X7: المبيعات 67,200؛ تكلفة المبيعات 55,800 − 4,200 = 51,600؛ الربح قبل الضريبة 15,600. لا يُحمل خطأ السنة السابقة على ربح 20X7 بدعوى أن الخطأ انعكس فيه.", "Restate 20X6: revenue 47,400; cost of sales 34,570 + 4,200 = 38,770; pre-tax profit 8,630. For 20X7: revenue 67,200; cost of sales 55,800 − 4,200 = 51,600; pre-tax profit 15,600. Do not charge the prior-year error to 20X7 profit merely because it reversed there."),
      text("إذا افترضنا أن كامل تصحيح المخزون يؤثر في الضريبة بنسبة 30% بكل سنة وأن مبلغ السنة السابقة قابل للاسترداد أو التسوية، فالأثر 1,260 لكل سنة: ضريبة 20X6 تصبح 2,620 وصافي الربح 6,010؛ وضريبة 20X7 تصبح 4,660 وصافي الربح 10,940.", "If the full inventory correction affects tax at 30% in each year and prior-year tax is recoverable or adjustable, the effect is 1,260 in each year: 20X6 tax becomes 2,620 and net profit 6,010; 20X7 tax becomes 4,660 and net profit 10,940."),
      text("تحت الافتراض الضريبي نفسه، الأرباح المحتجزة الختامية لـ20X6 = 13,000 + 6,010 = 19,010، ولـ20X7 = 19,010 + 10,940 = 29,950. أما إذا اختلف وضع الإقرارات أو الوعاء الضريبي، فلا تكفي نسبة 30% وحدها لتثبيت مبلغ الضريبة؛ يلزم تطبيق IAS 12 على المبالغ المتوقع استردادها أو دفعها، مع إبقاء إعادة بيان الأرباح قبل الضريبة وفق IAS 8.", "Under the same tax assumption, closing retained earnings are 13,000 + 6,010 = 19,010 for 20X6 and 19,010 + 10,940 = 29,950 for 20X7. If returns or taxable bases differ, the 30% rate alone cannot establish the tax amount: IAS 12 must be applied to amounts expected to be recovered or paid, while the IAS 8 pre-tax restatement remains."),
    ],
    reference: "IAS 8.4, 42–49; IAS 12.12–14, 58–61A",
  },
  {
    id: "ifrs-book2-ifrs5-steelworks-closure",
    standardCode: "IFRS 5",
    title: text("إغلاق مصنع الصلب تدريجيًا", "Gradual closure of a steelworks"),
    facts: text(
      "أعلن مديرو شركة أم في 20 أكتوبر 20X3 نية إغلاق مصنع صلب يمثل نحو 10% من إيرادات المجموعة، وينتهي الإغلاق في يوليو 20X4. انخفض الإنتاج فعلًا واستغني عن بعض العاملين قبل 31 ديسمبر 20X3، ويمكن تمييز تدفقات المصنع وإيراداته ومصروفاته عن بقية العمليات. الخطة إغلاق لا بيع.",
      "A parent company's directors announced on 20 October 20X3 a plan to close a steelworks that had represented about 10% of group revenue. Closure is expected in July 20X4. By 31 December 20X3 output is substantially reduced and some redundancies have occurred. Its cash flows, revenue and expenses are distinguishable from other operations. The plan is closure, not sale."
    ),
    question: text("كيف يعرض الإغلاق في القوائم المالية للسنة المنتهية في 31 ديسمبر 20X3؟", "How is the closure treated in the financial statements for the year ended 31 December 20X3?"),
    solution: [
      text("لا يصنف المصنع أو مجموعة أصوله محتفظًا بها للبيع، لأن القيمة الدفترية ستسترد أساسًا من الاستخدام أثناء الإغلاق لا من صفقة بيع. لا تكفي خطة الإغلاق أو الإعلان عنها لتغيير التصنيف.", "The steelworks and its assets are not held for sale: their carrying amounts will be recovered principally through use during wind-down, not a sale transaction. A closure plan or announcement alone does not change classification."),
      text("في 31 ديسمبر 20X3 لم يتوقف استخدام المصنع بعد؛ لذلك لا تعرض نتائجه عملية متوقفة حينها وتبقى ضمن العمليات المستمرة. إذا تحقق شرط خط نشاط رئيسي مستقل وتوقف استخدام المجموعة لاحقًا، يعاد تقييم عرض العملية المتوقفة عند ذلك التاريخ وفق IFRS 5.13 و32؛ نسبة 10% وحدها ليست حدًا رقميًا تلقائيًا في المعيار.", "At 31 December 20X3 the plant has not ceased to be used, so its results are not yet presented as discontinued and remain in continuing operations. If it is a separate major line of business and the group ceases to be used later, reassess discontinued-operation presentation at that date under IFRS 5.13 and 32; the 10% revenue share alone is not a numerical threshold in the Standard."),
      text("تقيَّم بصورة منفصلة التزامات الاستغناء أو إعادة الهيكلة والانخفاض في القيمة وفق IAS 19 وIAS 37 وIAS 36 بحسب الوقائع؛ لا يحدد السؤال مبلغًا كافيًا لقيد موحد. ويمكن الإفصاح عن خطة الإغلاق إذا كانت المعلومات جوهرية.", "Assess termination or restructuring obligations and impairment separately under IAS 19, IAS 37 and IAS 36 as facts warrant; the question supplies no amount for a single journal entry. Disclose the closure plan if material."),
    ],
    reference: "IFRS 5.6, 13, 31–33; IAS 19; IAS 36; IAS 37",
  },
  {
    id: "ifrs-book2-ias8-quiz-prior-error",
    standardCode: "IAS 8",
    title: text("تصحيح خطأ فترة سابقة", "Correcting a prior-period error"),
    facts: text("سؤال مفاهيمي عن معالجة خطأ جوهري يخص فترة سابقة.", "A conceptual question about a material error relating to a prior period."),
    question: text("كيف يُصحح خطأ فترة سابقة وفق IAS 8؟", "How is a prior-period error corrected under IAS 8?"),
    solution: [
      text("يعاد عرض مبالغ المقارنة للفترة أو الفترات التي وقع فيها الخطأ، أو يُعدل الرصيد الافتتاحي للأصول والالتزامات وحقوق الملكية في أقدم فترة مقارنة معروضة إذا سبقها الخطأ. يظهر أثر الأرباح المحتجزة الافتتاحية عندما يتعلق بها التصحيح؛ ليس التصحيح مجرد قيد مباشر فيها في جميع الحالات.", "Restate the comparative amounts for the period or periods in which the error occurred, or restate opening assets, liabilities and equity for the earliest comparative period presented if the error predates it. Adjust opening retained earnings when the correction affects them; it is not invariably only a direct retained-earnings entry."),
      text("يطبق التصحيح بأثر رجعي ما لم يتعذر تحديد أثره على فترة بعينها أو أثره التراكمي عمليًا؛ عندئذ تُطبق قواعد التعذر المحددة في IAS 8 مع الإفصاح اللازم. لا يُدرج أثر خطأ فترة سابقة ضمن ربح السنة الحالية لمجرد اكتشافه الآن.", "The correction is retrospective unless it is impracticable to determine the period-specific or cumulative effect; the specific IAS 8 impracticability rules and disclosures then apply. Do not put a prior-period error into current-year profit merely because it was discovered now."),
    ],
    reference: "IAS 8.42–49",
  },
  {
    id: "ifrs-book2-ias8-quiz-policy-change",
    standardCode: "IAS 8",
    title: text("متى تتغير السياسة المحاسبية؟", "When may an accounting policy change?"),
    facts: text("سؤال مفاهيمي عن الحالات التي تبرر تغيير سياسة محاسبية قائمة.", "A conceptual question about when an existing accounting policy may change."),
    question: text("ما الحالتان اللتان قد تستلزمان أو تسمحان بتغيير سياسة محاسبية؟", "Which two circumstances may require or permit a change in accounting policy?"),
    solution: [
      text("تتغير السياسة إذا طلب معيار IFRS ذلك، أو إذا جعلها التغيير الطوعي تقدم معلومات موثوقة وأكثر ملاءمة عن أثر المعاملات والظروف على المركز والأداء والتدفقات النقدية. لا تكفي رغبة الإدارة في تحسين ربح سنة معينة.", "A policy changes when required by an IFRS Standard, or when a voluntary change makes the financial statements provide reliable and more relevant information about transactions and conditions affecting financial position, performance and cash flows. A wish to improve one year's profit is insufficient."),
      text("يُتبع الحكم الانتقالي المحدد في المعيار الجديد إن وجد؛ وإلا يطبق التغيير بأثر رجعي، ما لم يكن ذلك غير عملي. أما المعاملات الجديدة المختلفة جوهريًا والتغيرات في التقديرات فلا تُصنف آليًا تغييرًا في السياسة.", "Follow any specific transition provisions in a new Standard; otherwise apply the change retrospectively unless impracticable. A substantively different new transaction or a change in estimate is not automatically a policy change."),
    ],
    reference: "IAS 8.14–19, 22–27, 32–40",
  },
  {
    id: "ifrs-book2-ifrs5-quiz-classification",
    standardCode: "IFRS 5",
    title: text("متى يصنف الأصل محتفظًا به للبيع؟", "When is an asset held for sale?"),
    facts: text("سؤال عن شروط تصنيف أصل غير متداول على أنه محتفظ به للبيع.", "A question about classifying a non-current asset as held for sale."),
    question: text("متى يجوز تصنيف أصل غير متداول على أنه محتفظ به للبيع؟", "When may a non-current asset be classified as held for sale?"),
    solution: [
      text("حين يُسترد مبلغه الدفتري أساسًا من عملية بيع لا من الاستخدام المستمر، ويكون متاحًا للبيع الفوري بحالته الراهنة وفق شروط البيع المعتادة، ويكون البيع مرجحًا بدرجة عالية. يتطلب ذلك التزام الإدارة المختصة بخطة البيع وبرنامجًا نشطًا لإيجاد مشترٍ وإتمام الخطة، وتسويقًا بسعر معقول قياسًا إلى القيمة العادلة، وتوقع إتمام البيع عادةً خلال سنة إلا إذا تحققت استثناءات التأخير المحددة.", "Its carrying amount must be recovered principally through sale rather than continuing use; it must be available for immediate sale in its present condition on usual terms and the sale must be highly probable. This involves appropriate management commitment, an active buyer-search/completion programme, marketing at a price reasonable relative to fair value and expected completion normally within one year, subject to specified delay exceptions."),
      text("مجرد نية البيع أو الإعلان عنه لا يكفي ما لم تستوف الشروط مجتمعة في تاريخ التصنيف.", "A sale intention or announcement alone is insufficient unless the conditions are met together at classification date."),
    ],
    reference: "IFRS 5.6–9",
  },
  {
    id: "ifrs-book2-ifrs5-quiz-measurement",
    standardCode: "IFRS 5",
    title: text("قياس الأصل المحتفظ به للبيع", "Measuring an asset held for sale"),
    facts: text("سؤال مفاهيمي عن أصل غير متداول يقع ضمن متطلبات قياس IFRS 5 واستوفى شروط الاحتفاظ به للبيع.", "A conceptual question about a non-current asset within IFRS 5's measurement requirements that qualifies as held for sale."),
    question: text("كيف يقاس الأصل المحتفظ به للبيع؟", "How is an asset held for sale measured?"),
    solution: [
      text("بالأقل من مبلغه الدفتري وقيمته العادلة ناقصًا تكاليف البيع. قبل القياس عند إعادة التصنيف، تُقاس أصول المجموعة والتزاماتها وفق معاييرها المنطبقة، ثم يُطبق قياس IFRS 5 على المجموعة عند الاقتضاء؛ ويتوقف إهلاك الأصل الذي يقع ضمن متطلبات القياس بعد التصنيف.", "At the lower of carrying amount and fair value less costs to sell. Immediately before classification, measure the assets and liabilities under their applicable Standards, then apply IFRS 5 measurement to the group where relevant; depreciation ceases for an asset within the measurement requirements after classification."),
      text("هذه ليست قاعدة قياس شاملة لكل عنصر في مجموعة الاستبعاد: يستثني IFRS 5 بعض الأصول من متطلبات قياسه، فتستمر بالقياس وفق معيارها الخاص، وإن شملها عرض مجموعة الاستبعاد.", "This is not a blanket measurement rule for every disposal-group item: IFRS 5 excludes specified assets from its measurement requirements, and those continue under their own Standards even when included in disposal-group presentation."),
    ],
    reference: "IFRS 5.5, 15, 18, 25",
  },
  {
    id: "ifrs-book2-ifrs5-quiz-discontinued-definition",
    standardCode: "IFRS 5",
    title: text("تعريف العملية المتوقفة", "Definition of a discontinued operation"),
    facts: text("سؤال تعريفي عن عملية يمكن فصل عملياتها وتدفقاتها النقدية عن بقية المنشأة.", "A definition question about an operation whose activities and cash flows can be distinguished from the rest of the entity."),
    question: text("متى تكون العملية «متوقفة» وفق IFRS 5؟", "When is an operation 'discontinued' under IFRS 5?"),
    solution: [
      text("هي مكوّن من المنشأة جرى استبعاده أو صُنّف محتفظًا به للبيع، ويمثل خط نشاط رئيسيًا مستقلًا أو منطقة جغرافية رئيسية، أو يدخل في خطة واحدة منسقة لاستبعاد أحدهما، أو يكون منشأة تابعة اشتريت حصريًا لإعادة البيع. يجب إمكان تمييز عملياته وتدفقاته النقدية تشغيليًا ولأغراض التقرير عن بقية المنشأة.", "It is a component that has been disposed of or classified as held for sale and represents a separate major line of business or geographical area, forms part of one coordinated plan to dispose of either, or is a subsidiary acquired exclusively for resale. Its operations and cash flows must be clearly distinguishable operationally and for reporting purposes."),
      text("إعلان نية إغلاق نشاط تدريجيًا لا يحقق وحده هذا التعريف؛ العملية التي ستُهجر دون بيع لا تعرض كعملية متوقفة حتى يتوقف استخدامها فعليًا، كما لا تصنف أصولها محتفظًا بها للبيع لمجرد خطة الإغلاق.", "Announcing a gradual closure alone does not meet this definition. An operation to be abandoned rather than sold is not reported as discontinued until it ceases to be used; its assets are not held for sale merely because of the closure plan."),
    ],
    reference: "IFRS 5.13, 31–32, Appendix A",
  },
  {
    id: "ifrs-book2-ias1-quiz-current-assets",
    standardCode: "IAS 1",
    title: text("تحديد الأصول المتداولة", "Identify current assets"),
    facts: text(
      "تضم القائمة عقارات وآلات ومعدات، ومصروفات مدفوعة مقدمًا، ومعادلات نقدية، وتراخيص تصنيع، وأرباحًا محتجزة. لا يحدد السؤال آجال المدفوعات المقدمة.",
      "The list contains property, plant and equipment, prepayments, cash equivalents, manufacturing licences and retained earnings. The prepayment periods are not specified.",
    ),
    question: text("أي البنود المذكورة يُصنف عادةً أصلًا متداولًا؟", "Which listed items would normally be current assets?"),
    solution: [
      text("المعادلات النقدية أصل متداول ما لم تكن مقيدة عن المبادلة أو الاستخدام لتسوية التزام لمدة لا تقل عن 12 شهرًا بعد تاريخ التقرير. والمدفوعات المقدمة تكون متداولة بقدر ما تُستهلك في دورة التشغيل العادية أو خلال 12 شهرًا؛ الجزء الأطول أمدًا ليس متداولًا تلقائيًا.", "Cash equivalents are current unless restricted from exchange or use to settle a liability for at least 12 months after the reporting date. Prepayments are current to the extent consumed in the normal operating cycle or within 12 months; any longer-term part is not automatically current."),
      text("العقارات والآلات والمعدات وتراخيص التصنيع أصول غير متداولة عادةً، والأرباح المحتجزة حقوق ملكية وليست أصلًا. إذن اختيار السؤال هو المدفوعات المقدمة المتداولة والمعادلات النقدية، مع مراعاة القيود والآجال الفعلية.", "Property, plant and equipment and manufacturing licences are normally non-current assets; retained earnings are equity, not an asset. The intended selections are current prepayments and cash equivalents, subject to their actual terms and restrictions."),
    ],
    reference: "IAS 1.54, 66–68; IAS 7.6–7",
  },
  {
    id: "ifrs-book2-ias1-quiz-provisions-line",
    standardCode: "IAS 1",
    title: text("عرض المخصصات في المركز المالي", "Presenting provisions in financial position"),
    facts: text("سؤال صح أو خطأ عن بند المخصصات في قائمة المركز المالي.", "A true-or-false question about provisions in the statement of financial position."),
    question: text("صح أم خطأ: تُعرض المخصصات في قائمة المركز المالي؟", "True or false: are provisions presented in the statement of financial position?"),
    solution: [
      text("صح في حالة المخصص المعترف به: يذكر IAS 1 المخصصات ضمن الحد الأدنى لبنود قائمة المركز المالي. تُراعى الأهمية النسبية والتجميع الملائم، ويُفصل المتداول عن غير المتداول عند تطبيق هذا العرض؛ أما الالتزام المحتمل غير المعترف به وفق IAS 37 فلا يتحول إلى مخصص معروض لمجرد وجود إفصاح عنه.", "True for a recognised provision: IAS 1 includes provisions among the minimum financial-position line items. Apply materiality and appropriate aggregation, with current/non-current classification where used. An unrecognised contingent liability under IAS 37 is not presented as a provision merely because it is disclosed."),
    ],
    reference: "IAS 1.29–31, 54(l), 60; IAS 37.14, 27–30",
  },
  {
    id: "ifrs-book2-ias1-quiz-profit-loss-lines",
    standardCode: "IAS 1",
    title: text("بنود قائمة الربح أو الخسارة", "Profit-or-loss line items"),
    facts: text("في سياق عرض IAS 1 قبل التطبيق المبكر لـIFRS 18، الخيارات هي مصروف الضريبة، وتحليل المصروفات، والربح أو الخسارة.", "Under IAS 1 presentation before any early application of IFRS 18, the candidates are tax expense, an analysis of expenses, and profit or loss."),
    question: text("أي هذه البنود يلزم عرضه في قائمة الربح أو الخسارة نفسها؟", "Which candidates must appear in the statement of profit or loss itself?"),
    solution: [
      text("مصروف الضريبة والربح أو الخسارة من البنود/المجاميع المطلوبة في القائمة. أما تحليل المصروفات بالطبيعة أو الوظيفة فيمكن تقديمه في القائمة أو في الإيضاحات وفق IAS 1، فلا يلزم أن يكون سطرًا مستقلًا في صلب القائمة.", "Tax expense and profit or loss are required in the statement. The analysis of expenses by nature or function can be presented in the statement or in the notes under IAS 1, so it need not be a separate face-of-statement line."),
      text("هذه إجابة لفترة تطبيق IAS 1. يحل IFRS 18 محله للفترات السنوية التي تبدأ في أو بعد 1 يناير 2027، مع السماح بالتطبيق المبكر، فلا تُنقل صياغة السؤال القديمة إليه دون مراجعة متطلباته.", "This answer assumes IAS 1 applies. IFRS 18 replaces it for annual periods beginning on or after 1 January 2027, with early application permitted; do not carry this older question into IFRS 18 without reassessing its requirements."),
    ],
    reference: "IAS 1.82, 99–104; IFRS 18.C1",
  },
  {
    id: "ifrs-book2-ias16-quiz-revaluation-presentation",
    standardCode: "IAS 16",
    title: text("موضع فائض إعادة تقييم الأصل الثابت", "Where a PPE revaluation surplus appears"),
    facts: text("يسأل النص عن عرض زيادة إعادة تقييم دون تحديد نوع الأصل أو بيان خسائر إعادة تقييم سابقة. يوضح الحل أدناه حالة أصل ثابت يخضع لـIAS 16 فقط.", "The question asks about presentation of a revaluation increase without specifying the asset type or any earlier revaluation losses. The solution below addresses only PPE within IAS 16."),
    question: text("أين تظهر زيادة إعادة التقييم في القوائم المالية؟", "Where does a revaluation increase appear in the financial statements?"),
    solution: [
      text("إذا كانت الزيادة تخص أصلًا ثابتًا وفق IAS 16، تُعترف عادةً في الدخل الشامل الآخر وتتراكم ضمن حقوق الملكية في فائض إعادة التقييم؛ وتظهر حركة الدخل الشامل الآخر وحقوق الملكية في قائمة التغيرات في حقوق الملكية. كذلك تتغير القيمة الدفترية للأصل في قائمة المركز المالي.", "For PPE under IAS 16, an increase is normally recognised in other comprehensive income and accumulated in equity as revaluation surplus; the OCI/equity movement is reflected in the statement of changes in equity. The asset's carrying amount also changes in financial position."),
      text("الاستثناء: الجزء الذي يعكس انخفاض إعادة تقييم سابقًا لنفس الأصل سبق تحميله على الربح أو الخسارة يُعترف به في الربح أو الخسارة حتى حدود ذلك الانخفاض؛ ولذلك لا يجوز تعميم الدخل الشامل الآخر على كل زيادة دون مراجعة تاريخ الأصل.", "Exception: to the extent the increase reverses a previous revaluation decrease of the same asset recognised in profit or loss, it goes to profit or loss. Do not generalise OCI treatment without checking the asset's history."),
    ],
    reference: "IAS 16.31, 39–40; IAS 1.106",
  },
  {
    id: "ifrs-book2-ias1-quiz-expense-function",
    standardCode: "IAS 1",
    title: text("تحليل المصروفات بحسب الوظيفة", "Expense analysis by function"),
    facts: text("تظهر في قائمة الربح أو الخسارة عناوين تكلفة المبيعات وتكاليف التوزيع والمصروفات الإدارية.", "The profit-or-loss statement uses cost of sales, distribution costs and administrative expenses headings."),
    question: text("هل تصنف هذه المصروفات بحسب طبيعتها أم وظيفتها؟", "Are these expenses classified by nature or function?"),
    solution: [
      text("بحسب الوظيفة: يبين كل عنوان دور التكلفة في نشاط المنشأة، لا نوعها الاقتصادي مثل الأجور أو الإهلاك. عند تطبيق IAS 1 يلزم كذلك تقديم المعلومات الإضافية المطلوبة عن طبيعة المصروفات، بما فيها الإهلاك والإطفاء ومنافع الموظفين.", "By function: each heading describes the cost's role in the entity's activities rather than its economic nature, such as wages or depreciation. Under IAS 1, the required additional nature information, including depreciation, amortisation and employee benefits, must also be disclosed."),
      text("لفترات تطبيق IFRS 18، يُعاد تقييم طريقة العرض والإفصاح وفق متطلباته؛ وقد تكون طريقة تجمع الطبيعة والوظيفة هي الأجدى، ولا تفترض أن قالب IAS 1 ينتقل بلا تغيير.", "For periods applying IFRS 18, reassess presentation and disclosure under that Standard; a mixture of nature and function can be the most useful structure, so the IAS 1 template should not be assumed unchanged."),
    ],
    reference: "IAS 1.99–104; IFRS 18.78–85",
  },
  {
    id: "ifrs-book2-piper-replacement-options",
    standardCode: "IFRS 2",
    title: text("Piper: إلغاء الخيارات ومنح بدائل", "Piper: cancellation and replacement options"),
    facts: text(
      "في 1 يناير 20X1 منحت Piper كلًا من 1,000 موظف 3,000 خيار سهم بشرط البقاء حتى 31 ديسمبر 20X3. القيمة العادلة للخيار عند المنح 5 دولارات. في نهاية 20X1 قدرت مغادرة 100 موظف وكانت قد أثبتت تكلفة خدمة 4.5 ملايين دولار. انخفضت القيمة العادلة للخيار القديم إلى دولار واحد في 1 يناير 20X2، وبقي حينها 975 موظفًا. خلال 20X2 غادر 35، وتوقعت مغادرة 40 في 20X3. في 1 يناير 20X2 ألغت الإدارة الخيارات القديمة ومنحت خيارات جديدة بدلًا منها تستحق 31 ديسمبر 20X4، قيمتها العادلة عند المنح 7 دولارات، ولم تدفع تعويضًا. توقعت مغادرة 40 موظفًا إضافيين في 20X4. لا يذكر النص صراحةً إن كانت الخيارات الجديدة قد عُيّنت بدائل للأصلية عند منحها.",
      "On 1 January 20X1 Piper granted 3,000 options to each of 1,000 employees, subject to service until 31 December 20X3. Grant-date fair value was $5. At end-20X1 management expected 100 leavers and had recognised $4.5 million service cost. The old option fair value fell to $1 at 1 January 20X2, when 975 employees remained. During 20X2, 35 left and a further 40 were expected in 20X3. On 1 January 20X2 management cancelled the old options and granted new options in their place vesting on 31 December 20X4, with $7 grant-date fair value and no compensation paid. Another 40 employees were expected to leave during 20X4. The facts do not expressly say whether the new awards were identified as replacements at grant date.",
    ),
    question: text(
      "ناقش مع الحسابات المناسبة معالجة فرع إلغاء الخيارات القديمة ومنح خيارات جديدة بدلًا منها في القوائم المالية للسنة المنتهية في 31 ديسمبر 20X2؛ وبيّن أثر شرط تعيينها بدائل وقت المنح.",
      "Discuss, with suitable calculations, the accounting treatment for the year ended 31 December 20X2 when the original options were cancelled and replaced with new share options, including the condition for replacement accounting.",
    ),
    solution: [
      text("إذا عُيّنت الخيارات الجديدة بدائل للأصلية عند منحها، تعالج كتعديل للمنحة الأصلية وفق IFRS 2.28(c)، لا كمنحة مستقلة مضافة بالكامل. لم يدفع تعويض؛ الزيادة في القيمة العادلة لكل خيار في تاريخ الاستبدال = 7 − 1 = 6 دولارات.", "If the new options were identified as replacements at grant date, IFRS 2.28(c) treats the arrangement as a modification of the original grant, not a wholly additional award. With no cancellation payment, incremental fair value per option on the replacement date is $7 − $1 = $6."),
      text("المتوقع استحقاقهم في نهاية 20X2 = 975 − 35 − 40 − 40 = 860. تكلفة المنحة الأصلية التراكمية = 860 × 3,000 × 5 × 2/3 = 8.60 ملايين دولار عبر فترة الاستحقاق الأصلية حتى نهاية 20X3. تكلفة الزيادة التراكمية = 860 × 3,000 × 6 × 1/3 = 5.16 ملايين دولار عبر فترة خدمة البديل من بداية 20X2 حتى نهاية 20X4.", "Expected vesting employees at end-20X2 = 975 − 35 − 40 − 40 = 860. Cumulative original-award cost is 860 × 3,000 × $5 × 2/3 = $8.60 million over the original period through end-20X3. Cumulative incremental cost is 860 × 3,000 × $6 × 1/3 = $5.16 million over replacement service from start-20X2 through end-20X4."),
      text("الرصيد التراكمي = 8.60 + 5.16 = 13.76 مليون دولار. بطرح احتياطي 20X1 البالغ 4.50 ملايين يكون مصروف 20X2 = 9.26 ملايين: مدين مصروف موظفين، دائن احتياطي خيارات. إذا لم تكن الخيارات الجديدة قد عُيّنت بدائل عند المنح، يلزم فصل محاسبة إلغاء المنحة الأصلية عن منحة جديدة؛ لا يصح تعميم مبلغ 9.26 ملايين على هذه الحالة المختلفة.", "Cumulative reserve is $8.60m + $5.16m = $13.76m. Less the $4.50m opening reserve, 20X2 expense is $9.26m: debit staff expense and credit option reserve. If the new awards were not identified as replacements when granted, account separately for cancellation of the old award and the new grant; $9.26m cannot automatically be used for that different fact pattern."),
    ],
    reference: "IFRS 2.19–23, 27–28(c), B42–B43(a)",
  },
  {
    id: "ifrs-book2-piper-cancellation-cash-compensation",
    standardCode: "IFRS 2",
    title: text("Piper: إلغاء الخيارات وتعويض نقدي", "Piper: cancelled options and cash compensation"),
    facts: text(
      "منحت Piper في 1 يناير 20X1 كلًا من 1,000 موظف 3,000 خيار سهم، مشروطة بالبقاء حتى 31 ديسمبر 20X3، بقيمة عادلة 5 دولارات للخيار عند المنح. في نهاية 20X1 قدرت مغادرة 100 موظف وأثبتت 4.5 ملايين دولار تكلفة خدمة. في 1 يناير 20X2 بقي 975 موظفًا، وانخفضت القيمة العادلة للخيار القائم إلى دولار واحد. في ذلك اليوم ألغت الشركة الخيارات القديمة ودفعت 4 ملايين دولار للموظفين تعويضًا. لا يُحدد السؤال صراحةً هل مقارنة مبلغ إعادة الشراء تشمل جميع خيارات الموظفين الموجودين عند الإلغاء أم الخيارات المتوقع استحقاقها فقط.",
      "On 1 January 20X1 Piper granted 3,000 options to each of 1,000 employees, conditional on service until 31 December 20X3, at $5 grant-date fair value per option. At end-20X1 it estimated 100 leavers and recognised $4.5 million service cost. On 1 January 20X2, 975 employees remained and the outstanding option fair value was $1. On that date the company cancelled the old options and paid employees $4 million compensation. The question does not expressly resolve whether the repurchase comparison includes all options held by employees present at cancellation or only options expected to vest.",
    ),
    question: text(
      "ناقش، مع الحسابات المناسبة، معالجة إلغاء الخيارات الأصلية ودفع تعويض 4 ملايين دولار في قوائم Piper للسنة المنتهية في 31 ديسمبر 20X2.",
      "Discuss, with suitable calculations, the accounting treatment in Piper's financial statements for the year ended 31 December 20X2 when the original options were cancelled and $4 million compensation was paid.",
    ),
    solution: [
      text("الإلغاء بقرار المنشأة ليس سقوطًا بسبب عدم تحقق شرط الخدمة. وفق IFRS 2.28(a)، تُسرَّع تكلفة الخدمة التي كان سيثبتها الكيان خلال فترة الاستحقاق المتبقية. إذا ظل أفضل تقدير للخيارات التي كانت ستستحق هو 900 موظف، فتكون تكلفة المنحة الأصلية 900 × 3,000 × 5 = 13.5 مليون دولار، منها 4.5 ملايين سبق إثباتها؛ يُثبت الفرق 9 ملايين فور الإلغاء: مدين مصروف موظفين، دائن احتياطي خيارات.", "Entity-initiated cancellation is not forfeiture for failure to satisfy the service condition. IFRS 2.28(a) accelerates service cost otherwise recognised over the remaining vesting period. If the best estimate of employees who would have vested remains 900, original grant cost is 900 × 3,000 × $5 = $13.5 million. With $4.5 million already recognised, the $9 million difference is charged immediately: debit staff expense, credit option reserve."),
      text("تعويض الـ4 ملايين خطوة منفصلة: تُعامل الدفعة كإعادة شراء لحق ملكية حتى القيمة العادلة للأدوات الملغاة في تاريخ الإلغاء، ويذهب ما زاد إلى الربح أو الخسارة وفق IFRS 2.28(b). سعر الدولار للخيار ليس تكلفة الخدمة الأصلية البالغة 5 دولارات، ولا يصح خصم التعويض كله من المصروف المسرَّع.", "The $4 million payment is separate. Treat it as repurchase of an equity interest up to the cancellation-date fair value of the cancelled instruments, with any excess in profit or loss under IFRS 2.28(b). The $1 cancellation-date value is not the original $5 service-cost measure, and the payment should not simply be netted against accelerated expense."),
      text("إذا شملت مقارنة إعادة الشراء جميع خيارات 975 موظفًا الموجودين عند الإلغاء، فالقيمة 975 × 3,000 × 1 = 2.925 مليون دولار، والزيادة على القيمة = 1.075 مليون. وإذا اقتصر عدد الأدوات المعتمد على 900 المتوقع استحقاقهم، فالقيمة 2.7 مليون والزيادة 1.3 مليون. لا يُعرض أي تقسيم منهما باعتباره النتيجة الوحيدة من المعطيات؛ يلزم حسم عدد الأدوات التي شملتها التسوية وشروطها قبل قيد نهائي للتعويض.", "If the repurchase comparison covers all options held by the 975 employees present at cancellation, fair value is 975 × 3,000 × $1 = $2.925 million and the excess is $1.075 million. If the population is limited to the 900 expected to vest, fair value is $2.7 million and the excess is $1.3 million. Neither split is presented as the unique answer on these facts; establish the number of instruments actually settled and the arrangement's terms before posting a final compensation entry."),
    ],
    reference: "IFRS 2.27–28(b)",
  },
  {
    id: "ifrs-book2-ifrs2-quiz-cash-settled",
    standardCode: "IFRS 2",
    title: text("تعريف التسوية النقدية", "Cash-settled share-based payment"),
    facts: text("سؤال مفاهيمي عن نوع معاملة الدفع المبني على الأسهم، دون بيانات رقمية.", "A conceptual question about a type of share-based payment, with no numeric facts."),
    question: text("ما معاملة الدفع المبني على الأسهم التي تُسوّى نقدًا؟", "What is a cash-settled share-based payment transaction?"),
    solution: [
      text("هي معاملة تتلقى فيها المنشأة سلعًا أو خدمات، وينشأ مقابلها التزام بنقل نقد أو أصول أخرى يحدد مبلغه بالاعتماد على سعر أو قيمة أدوات حقوق ملكية للمنشأة أو لشركة أخرى في مجموعتها. فالمعيار لا يقتصر على أسهم المنشأة ذاتها ولا على دفع النقد وحده؛ يقاس الالتزام ويعاد قياسه حتى التسوية.", "The entity receives goods or services and incurs an obligation to transfer cash or other assets in an amount based on the price or value of equity instruments of the entity or another group entity. The definition is not limited to the entity's own shares or cash alone; the liability is measured and remeasured until settlement."),
    ],
    reference: "IFRS 2 Appendix A, 30–33",
  },
  {
    id: "ifrs-book2-ifrs2-quiz-grant-date",
    standardCode: "IFRS 2",
    title: text("تحديد تاريخ المنح", "Identify the grant date"),
    facts: text("سؤال تعريفي عن نقطة قياس أدوات حقوق الملكية الممنوحة للموظف.", "A definition question about the measurement date for equity instruments granted to an employee."),
    question: text("ما تاريخ المنح؟", "What is the grant date?"),
    solution: [
      text("هو تاريخ اتفاق المنشأة والطرف المقابل على ترتيب الدفع المبني على الأسهم مع فهم مشترك لشروطه وأحكامه. وإذا كان الاتفاق خاضعًا لإجراء اعتماد مطلوب، يكون تاريخ المنح عند الحصول على ذلك الاعتماد. لا يلزم أن تكون كل المبالغ النهائية معلومة في ذلك التاريخ ما دامت الشروط متفقًا عليها.", "It is when the entity and counterparty agree to the share-based payment arrangement with a shared understanding of its terms and conditions. If a required approval applies, grant date is when that approval is obtained. Final amounts need not all be known if the agreed terms are understood."),
    ],
    reference: "IFRS 2 Appendix A",
  },
  {
    id: "ifrs-book2-ifrs2-quiz-equity-recognition",
    standardCode: "IFRS 2",
    title: text("ما يُعترف به في التسوية بالأسهم", "Recognition for an equity-settled award"),
    facts: text("السؤال عن أثر معاملة تسوّى بأدوات حقوق ملكية مقابل سلع أو خدمات.", "The question concerns goods or services received for an equity-settled award."),
    question: text("إذا دخلت المنشأة في معاملة دفع مبني على الأسهم تُسوّى بأدوات حقوق الملكية، فما الذي تعترف به في قوائمها المالية؟", "If an entity has entered into an equity-settled share-based payment transaction, what should it recognise in its financial statements?"),
    solution: [
      text("تعترف بالسلع أو الخدمات المستلمة وبزيادة مقابلة في حقوق الملكية عندما تحصل على السلع أو تُقدم الخدمات. تسجل السلع أصلًا فقط إذا استوفت شروط الاعتراف بأصل؛ وإلا يثبت مقابل الخدمة أو السلعة مصروفًا. شروط الاستحقاق قد توزع تكلفة خدمة الموظفين على فترة الاستحقاق.", "Recognise the goods or services received and a corresponding increase in equity as the goods are obtained or services rendered. Capitalise goods only if they qualify as an asset; otherwise expense them. Employee service conditions can spread the cost across the vesting period."),
    ],
    reference: "IFRS 2.7–9, 14–15",
  },
  {
    id: "ifrs-book2-ifrs2-quiz-employee-options-measurement",
    standardCode: "IFRS 2",
    title: text("قياس خيارات الموظفين", "Measure employee share options"),
    facts: text("تمنح المنشأة خيارات أسهم لموظفين مقابل خدماتهم؛ لا توجد قيم رقمية في السؤال.", "The entity grants employee share options for their services; no numerical values are supplied."),
    question: text("إذا منحت المنشأة موظفيها خيارات أسهم مقابل خدماتهم، فكيف تقاس المعاملة؟", "Where an entity has granted share options to its employees in return for services, how is the transaction measured?"),
    solution: [
      text("تقاس خدمات الموظفين بصورة غير مباشرة بالرجوع إلى القيمة العادلة للخيارات الممنوحة في تاريخ المنح، ويضرب هذا الأساس في عدد الخيارات الذي يستحق وفق شرط الخدمة؛ يعاد تقدير عدد الأدوات المتوقع استحقاقها عند كل تاريخ تقرير. لا تعاد قيمة الخيار العادلة بتاريخ المنح لمجرد تغير سعر السهم في معاملة مسددة بالأسهم.", "Measure employee services indirectly by reference to the options' grant-date fair value, applied to the number vesting under the service condition; update estimated vesting numbers at reporting dates. An equity-settled option's grant-date fair value is not remeasured merely because the share price moves."),
    ],
    reference: "IFRS 2.11, 15, 19–23",
  },
  {
    id: "ifrs-book2-ifrs2-quiz-cash-remeasurement",
    standardCode: "IFRS 2",
    title: text("سبب إعادة قياس الالتزام النقدي", "Why remeasure a cash-settled liability"),
    facts: text("تقارن المسألة بين منحة موظف مسددة بالأسهم وأخرى مسددة نقدًا مرتبطة بقيمة السهم.", "The question contrasts an employee equity award with a cash award linked to share value."),
    question: text("لماذا تحدث إعادة القياس في نهاية كل سنة في حالة معاملات الدفع المبني على الأسهم المسددة نقدًا فقط؟", "Why does remeasurement at each year end occur only in the case of cash-settled share-based payments?"),
    solution: [
      text("لأن المبلغ النقدي المطلوب سداده قد يتغير مع قيمة الأداة الأساسية، فيعاد قياس الالتزام بالقيمة العادلة في كل تاريخ تقرير وعند التسوية وتثبت حركته في الربح أو الخسارة. في المقابل، تثبت منحة الموظف المسددة بالأسهم عادة على أساس القيمة العادلة بتاريخ المنح ولا تعاد قيمتها لهذا السبب، مع استمرار تحديث عدد الأدوات المتوقع استحقاقها. كلمة «فقط» هنا تخص المقارنة الأساسية بين هذين النوعين؛ قد توجد تعديلات أو ترتيبات خاصة لها أحكام إضافية.", "Cash ultimately payable changes with the underlying equity value, so the liability is remeasured to fair value at each reporting date and settlement, with changes in profit or loss. By contrast, an ordinary equity-settled employee award retains grant-date fair value, though expected vesting numbers are updated. The question's 'only' describes that basic comparison; modifications and special arrangements have additional rules."),
    ],
    reference: "IFRS 2.19–23, 27–28, 30–33",
  },
  {
    id: "ifrs-book2-bruce-option-tax",
    standardCode: "IAS 12",
    title: text("خصم خيارات الموظف والضريبة المؤجلة", "Bruce: employee-option tax deduction and deferred tax"),
    facts: text(
      "في 1 يناير 20X2 منحت Bruce موظفًا 5,000 خيار يستحق في 31 ديسمبر 20X3 بعد سنتين من الخدمة. القيمة العادلة لكل خيار عند المنح 3 دولارات. يسمح قانون الضريبة بخصم القيمة الجوهرية للخيار فقط عند الممارسة؛ بلغت 1.20 دولار لكل خيار في 31 ديسمبر 20X2 و3.40 دولارات في 31 ديسمبر 20X3، حين مورست جميع الخيارات. معدل الضريبة 30%. يفترض الحل احتمال توفر ربح ضريبي كافٍ لاستعمال الخصم المتوقع؛ إن غاب هذا الاحتمال يعاد تقييم إثبات الأصل المؤجل.",
      "On 1 January 20X2 Bruce grants an employee 5,000 options vesting on 31 December 20X3 after two years' service. Grant-date fair value is $3 per option. Tax law allows deduction of intrinsic value only when options are exercised; intrinsic value is $1.20 per option at 31 December 20X2 and $3.40 at 31 December 20X3, when all options are exercised. The tax rate is 30%. The solution assumes probable taxable profits to utilise the future deduction; otherwise deferred-asset recognition must be reassessed.",
    ),
    question: text(
      "أظهر معالجة الضريبة المؤجلة في 31 ديسمبر 20X2، وفي 31 ديسمبر 20X3 قبل الممارسة، ثم عند ممارسة الخيارات، مبينًا ما يذهب إلى الربح أو الخسارة وما يثبت مباشرة في حقوق الملكية.",
      "Show deferred tax accounting at 31 December 20X2, at 31 December 20X3 before exercise, and on exercise, distinguishing profit or loss from amounts recognised directly in equity.",
    ),
    solution: [
      text("20X2: مصروف الخدمة التراكمي 5,000 × 3 × 1/2 = 7,500 دولار. الخصم الضريبي المتوقع المنسوب إلى الخدمة المكتسبة = 5,000 × 1.20 × 1/2 = 3,000؛ الفرق القابل للخصم 3,000 وأصل الضريبة المؤجلة = 900. القيد: مدين أصل ضريبة مؤجلة 900، دائن دخل ضريبة مؤجلة في الربح أو الخسارة 900.", "20X2: cumulative service expense is 5,000 × $3 × 1/2 = $7,500. Estimated future deduction attributable to earned service is 5,000 × $1.20 × 1/2 = $3,000; deductible difference is $3,000 and deferred tax asset $900. Debit deferred tax asset $900; credit deferred tax income in profit or loss $900."),
      text("20X3 قبل الممارسة: مصروف الخدمة التراكمي 15,000، والخصم الضريبي المتوقع 5,000 × 3.40 = 17,000، فأصل الضريبة المؤجلة 5,100. المنفعة الضريبية التراكمية حتى حد المصروف = 15,000 × 30% = 4,500 في الربح أو الخسارة، والزيادة 2,000 × 30% = 600 مباشرة في حقوق الملكية، لا في OCI.", "20X3 before exercise: cumulative service expense is $15,000 and estimated deduction 5,000 × $3.40 = $17,000, giving a $5,100 deferred tax asset. Cumulative tax benefit up to the expense is $15,000 × 30% = $4,500 in profit or loss; the excess $2,000 × 30% = $600 goes directly to equity, not OCI."),
      text("حركة 20X3: مدين أصل ضريبة مؤجلة 4,200؛ دائن دخل ضريبة مؤجلة في الربح أو الخسارة 3,600 ودائن حقوق ملكية 600. عند الممارسة يسمح بخصم فعلي 17,000 ومنفعة ضريبة جارية 5,100؛ يعكس أصل الضريبة المؤجلة ويثبت الأثر الجاري. يمكن عرض القيد الصافي مدين أصل ضريبة جارية أو تخفيض ضريبة جارية مستحقة 5,100، دائن أصل ضريبة مؤجلة 5,100؛ لا تضف المنفعة مرة ثانية إلى ربح السنة.", "20X3 movement: debit deferred tax asset $4,200; credit deferred tax income in profit or loss $3,600 and equity $600. On exercise the actual $17,000 deduction yields a $5,100 current-tax benefit; reverse deferred tax and recognise current tax. A net presentation is debit current tax receivable or reduction of current tax payable $5,100, credit deferred tax asset $5,100; do not count the benefit in income twice."),
    ],
    reference: "IAS 12.24, 28–29, 68A–68C; IFRS 2.19–23",
  },
  {
    id: "ifrs-book2-saddler-settlement-choice",
    standardCode: "IFRS 2",
    title: text("خيار المدير بين الأسهم والنقد", "Saddler: director chooses shares or cash"),
    facts: text(
      "في 1 أكتوبر 20X2 منح Saddler أحد مديريه حق الاختيار بين 24,000 سهم ودفعة نقدية تعادل قيمة 20,000 سهم، بشرط بقائه في الخدمة ثلاث سنوات من تاريخ المنح. القيمة العادلة لبديل الأسهم عند المنح 4.50 دولارات للسهم، وسعر السهم السوقي عند المنح 5.20 دولارات وعند 30 سبتمبر 20X3 بلغ 6.10 دولارات.",
      "On 1 October 20X2, Saddler granted a director a choice of 24,000 shares or cash equal to the value of 20,000 phantom shares, conditional on three years' employment. Grant-date fair value of the share alternative was $4.50 per share; market share price was $5.20 at grant and $6.10 on 30 September 20X3.",
    ),
    question: text(
      "اشرح المعالجة المحاسبية لهذه المعاملة للسنة المنتهية في 30 سبتمبر 20X3، وافصل مكوّن حقوق الملكية عن مكوّن الالتزام مع قيودهما.",
      "Explain the accounting treatment for the year ended 30 September 20X3, separating the equity and liability components and their entries.",
    ),
    solution: [
      text("بما أن المدير، لا المنشأة، يملك خيار التسوية، فالمنحة أداة مركبة وفق IFRS 2.35–38. يقاس الالتزام النقدي أولًا، ثم مكوّن حقوق الملكية المتبقي، ويعترف بالخدمة على ثلاث سنوات.", "Because the director, not the entity, chooses settlement, the award is a compound instrument under IFRS 2.35–38. Measure the cash component first, then residual equity, recognising service over three years."),
      text("عند المنح: بديل الأسهم = 24,000 × 4.50 = 108,000 دولار؛ بديل النقد = 20,000 × 5.20 = 104,000؛ مكوّن حقوق الملكية = 4,000. نصيب السنة الأولى = 4,000 ÷ 3 = 1,333.33 تقريبًا: مدين مصروف موظفين ودائن حقوق ملكية.", "At grant: share alternative = 24,000 × $4.50 = $108,000; cash alternative = 20,000 × $5.20 = $104,000; residual equity = $4,000. First-year share = $4,000 ÷ 3 ≈ $1,333.33: debit staff expense and credit equity."),
      text("في 30 سبتمبر 20X3 يعاد قياس المكوّن النقدي بسعر التقرير: 20,000 × 6.10 × 1/3 = 40,666.67 دولار تقريبًا؛ مدين مصروف موظفين ودائن التزام. مجموع مصروف السنة 42,000 دولار قبل أي تقريب؛ لا يعاد قياس مكوّن حقوق الملكية البالغ 4,000 لمجرد تغير سعر السهم.", "At 30 September 20X3, remeasure the cash component: 20,000 × $6.10 × 1/3 ≈ $40,666.67; debit staff expense and credit a liability. Total first-year expense is $42,000 before rounding. The $4,000 equity component is not remeasured merely because the share price changes."),
    ],
    reference: "IFRS 2.35–38",
  },
  {
    id: "ifrs-book2-cash-sars-five-years",
    standardCode: "IFRS 2",
    title: text("حقوق ارتفاع السهم النقدية على خمس سنوات", "Five-year cash share appreciation rights"),
    facts: text(
      "في 1 يناير 20X1 مُنح كل من 500 موظف 100 حق ارتفاع سهم تُسوى نقدًا بشرط البقاء حتى 31 ديسمبر 20X3. في 20X1 غادر 35 وتُوقع مغادرة 60 آخرين؛ وفي 20X2 غادر 40 إضافيون وتُوقع مغادرة 25 في 20X3؛ وفي 20X3 غادر 22. مارس 150 من المستحقين حقوقهم في نهاية 20X3، ثم 140 في نهاية 20X4، ثم 113 الباقون في نهاية 20X5. القيم العادلة للحق القائم في نهايات 20X1–20X4 هي على الترتيب 14.40 و15.50 و18.20 و21.40 دولارًا؛ قيمة السداد النقدي لكل حق ممارس في 20X3–20X5 هي 15 و20 و25 دولارًا.",
      "On 1 January 20X1, each of 500 employees receives 100 cash-settled share appreciation rights conditional on employment through 31 December 20X3. In 20X1, 35 leave and a further 60 are expected to leave; in 20X2 another 40 leave and a further 25 are expected in 20X3; 22 leave in 20X3. At each year-end, 150 vested employees exercise in 20X3, 140 in 20X4, and the remaining 113 in 20X5. Fair values per outstanding right at the ends of 20X1–20X4 are $14.40, $15.50, $18.20 and $21.40; settlement values per exercised right in 20X3–20X5 are $15, $20 and $25.",
    ),
    question: text(
      "احسب المصروف في الربح أو الخسارة لكل سنة من 20X1 إلى 20X5، والتزام نهاية كل سنة، مع فصل قيمة الحقوق القائمة عن النقد المدفوع عند الممارسة.",
      "Calculate the profit-or-loss expense for each year from 20X1 to 20X5 and the liability at each year-end, distinguishing outstanding rights from cash paid on exercise.",
    ),
    solution: [
      text("20X1: المتوقع استحقاقهم 500 − 35 − 60 = 405؛ الالتزام والمصروف = 405 × 100 × 14.40 × 1/3 = 194,400 دولار.", "20X1: 500 − 35 − 60 = 405 are expected to vest; liability and expense = 405 × 100 × $14.40 × 1/3 = $194,400."),
      text("20X2: المتوقع استحقاقهم 500 − 35 − 40 − 25 = 400؛ الالتزام التراكمي = 400 × 100 × 15.50 × 2/3 = 413,333.33؛ مصروف السنة = 218,933.33 تقريبًا.", "20X2: 500 − 35 − 40 − 25 = 400 are expected to vest; cumulative liability = 400 × 100 × $15.50 × 2/3 = $413,333.33; annual expense ≈ $218,933.33."),
      text("20X3: استحق 500 − 35 − 40 − 22 = 403 موظفين. سُدد لـ150 منهم 150 × 100 × 15 = 225,000، وبقي التزام 253 × 100 × 18.20 = 460,460؛ مصروف السنة = 460,460 + 225,000 − 413,333.33 ≈ 272,126.67.", "20X3: 500 − 35 − 40 − 22 = 403 employees vest. Pay 150 × 100 × $15 = $225,000; remaining liability is 253 × 100 × $18.20 = $460,460. Annual expense = $460,460 + $225,000 − $413,333.33 ≈ $272,126.67."),
      text("20X4: المدفوع لـ140 موظفًا = 140 × 100 × 20 = 280,000؛ التزام 113 الباقين = 113 × 100 × 21.40 = 241,820؛ المصروف = 241,820 + 280,000 − 460,460 = 61,360.", "20X4: pay 140 × 100 × $20 = $280,000; liability for 113 remaining employees = 113 × 100 × $21.40 = $241,820; expense = $241,820 + $280,000 − $460,460 = $61,360."),
      text("20X5: المدفوع لـ113 = 113 × 100 × 25 = 282,500؛ الالتزام الختامي صفر؛ المصروف = 282,500 − 241,820 = 40,680. مجموع المصروفات عبر السنوات يساوي 787,500 دولار، وهو مجموع المدفوعات عند انقضاء جميع الحقوق. يعاد قياس الالتزام حتى السداد وفق IFRS 2.", "20X5: pay 113 × 100 × $25 = $282,500; closing liability is nil; expense = $282,500 − $241,820 = $40,680. Total five-year expense is $787,500, equal to all cash paid once every right is settled. The liability is remeasured until settlement under IFRS 2."),
    ],
    reference: "IFRS 2.30–33D",
  },
  {
    id: "ifrs-book2-jb-options-and-cash-alternative",
    standardCode: "IFRS 2",
    title: text("خيارات J&B وبديل السداد النقدي", "J&B options and a cash-settled alternative"),
    facts: text(
      "في 1 يناير 20X1 منحت J&B عدد 200 خيار على أسهم عادية قيمتها الاسمية دولار واحد لكل من 800 موظف، بشرط استمرار العمل حتى 31 ديسمبر 20X3. القيمة العادلة للخيار عند المنح 4 دولارات، وسعر الممارسة 1.50 دولار، وسعر السهم يوم المنح 3 دولارات. توقعت أولًا مغادرة 50 ثم 40 ثم 30 خلال السنوات الثلاث. غادر فعليًا 40 في 20X1، وعدلت تقدير إجمالي المغادرين إلى 95؛ وغادر 20 في 20X2، وعدلت الإجمالي إلى 70؛ ولم يغادر أحد في 20X3. مارس جميع المستحقين خياراتهم في 31 ديسمبر 20X3. لا يورد السؤال قيمًا عادلة لحقوق نقدية افتراضية في تواريخ التقرير.",
      "On 1 January 20X1 J&B granted 200 options on $1 ordinary shares to each of 800 employees, conditional on service through 31 December 20X3. Grant-date option fair value was $4, exercise price $1.50 and grant-date share price $3. Initially 50, then 40, then 30 departures were forecast for the three years. Forty actually left in 20X1, when estimated total leavers changed to 95; twenty left in 20X2, when the total forecast changed to 70; none left in 20X3. All vested options were exercised on 31 December 20X3. No reporting-date fair values for hypothetical cash rights are provided.",
    ),
    question: text(
      "أظهر قيود مصروف خدمات الموظفين في السنوات الثلاث وقيد إصدار الأسهم عند ممارسة جميع الخيارات المستحقة. ثم اشرح كيف ستختلف المعالجة لو وعدت المنشأة الموظفين بمبالغ نقدية تعتمد على قيمة السهم بدلًا من الخيارات.",
      "Show the double entries for employee-service charges over the three years and the share issue if all vested options are exercised. Explain how the accounting would differ if employees received cash based on share value instead of share options.",
    ),
    solution: [
      text("20X1: التقدير 800 − 95 = 705 موظفين. المصروف والاحتياطي التراكميان = 705 × 200 × 4 × 1/3 = 188,000 دولار؛ مدين مصروف موظفين ودائن احتياطي خيارات.", "20X1: 800 − 95 = 705 employees are expected to vest. Cumulative expense and option reserve = 705 × 200 × $4 × 1/3 = $188,000; debit staff expense and credit option reserve."),
      text("20X2: التقدير 730 موظفًا. الاحتياطي التراكمي = 730 × 200 × 4 × 2/3 = 389,333.33 دولار، ومن ثم مصروف السنة 201,333.33 تقريبًا؛ مدين مصروف موظفين ودائن الاحتياطي. التقريب إلى دولار كامل يعطي 201,333.", "20X2: 730 employees are expected to vest. Cumulative reserve = 730 × 200 × $4 × 2/3 = $389,333.33, so the current-year expense is approximately $201,333.33; debit staff expense and credit the reserve. Rounded to whole dollars this is $201,333."),
      text("20X3: المغادرون الفعليون 40 + 20 = 60، فالمستحقون 740، والاحتياطي النهائي = 740 × 200 × 4 = 592,000 دولار. مصروف السنة = 592,000 − 389,333.33 = 202,666.67 تقريبًا، أو 202,667 بعد التقريب؛ مدين مصروف موظفين ودائن الاحتياطي.", "20X3: actual leavers total 40 + 20 = 60, so 740 vest; final reserve = 740 × 200 × $4 = $592,000. Current-year expense = $592,000 − $389,333.33 ≈ $202,666.67, or $202,667 rounded; debit staff expense and credit the reserve."),
      text("عند الممارسة يصدر 148,000 سهم. القيد: مدين نقدية 222,000 ومدين احتياطي خيارات 592,000؛ دائن رأس مال 148,000 ودائن علاوة إصدار 666,000 دولار. يتساوى جانبا القيد عند 814,000.", "On exercise 148,000 shares are issued. Debit cash $222,000 and option reserve $592,000; credit share capital $148,000 and share premium $666,000. Both sides equal $814,000."),
      text("لو كان الوعد نقدًا مرتبطًا بقيمة السهم، يقابل الخدمة التزام لا احتياطي حقوق ملكية. يُعاد قياس الحق النقدي بالقيمة العادلة في كل تاريخ تقرير وعند السداد، وتثبت التغيرات في الربح أو الخسارة. الصيغة خلال الاستحقاق: الحقوق المتوقع استحقاقها × قيمتها العادلة الحالية × نسبة الخدمة المنقضية، ناقص الالتزام المثبت سابقًا لاستخراج مصروف السنة؛ يستمر إعادة القياس بعد الاستحقاق حتى الدفع. لا يمكن استخراج التزام أو مصروف نقدي رقمي من سعر خيار المنحة البالغ 4 دولارات وحده لأن قيم الحقوق النقدية غير معطاة.", "For a cash promise linked to share value, service credits a liability rather than an equity reserve. Remeasure each cash right to fair value at every reporting date and settlement, taking changes to profit or loss. During vesting, cumulative liability is rights expected to vest × current fair value × elapsed service fraction; deduct the previous liability to obtain the year's charge. Continue remeasuring after vesting until payment. The $4 grant-date equity-option value alone cannot produce numerical cash-liability or expense amounts because fair values of the cash rights are not supplied."),
    ],
    reference: "IFRS 2.14–23, 30–33",
  },
  {
    id: "ifrs-book2-four-year-employee-options",
    standardCode: "IFRS 2",
    title: text("خيارات موظفين مشروطة بخدمة أربع سنوات", "Four-year employee share options"),
    facts: text(
      "في 1 يناير 20X3 مُنح كل من 200 موظف 250 خيار سهم، وشرط الاستحقاق الوحيد بقاؤهم في الخدمة حتى 31 ديسمبر 20X6. غادر خمسة موظفين خلال 20X3. سعر كل خيار في 1 يناير 12 دولارًا، وفي 31 ديسمبر 15 دولارًا. لا تُحدد المعطيات وحدها عدد من سيغادر في السنوات الثلاث التالية.",
      "On 1 January 20X3 an entity grants 250 share options to each of its 200 employees. The only vesting condition is continued employment until 31 December 20X6. Five employees leave during 20X3. The price of each option is $12 at 1 January and $15 at 31 December. The facts alone do not specify departures over the next three years.",
    ),
    question: text(
      "بيّن أثر المعاملة في القوائم المالية للسنة المنتهية في 31 ديسمبر 20X3، مع بيان أي تقدير للمغادرين تستخدمه.",
      "Show how this transaction will be reflected in the financial statements for the year ended 31 December 20X3.",
    ),
    solution: [
      text("منحة الأسهم تقاس بقيمة الخيار في تاريخ المنح 12 دولارًا، لا بقيمته في 31 ديسمبر البالغة 15 دولارًا. يُعدّل عدد الخيارات المتوقع استحقاقها وفق أفضل تقدير متاح لشرط الخدمة، ويثبت ربع إجمالي تكلفة الخدمة في السنة الأولى من فترة السنوات الأربع.", "The equity-settled grant uses the $12 grant-date option value, not the $15 year-end value. Update the number of options expected to vest for the service condition using the best available estimate and recognise one quarter of expected total service cost in the first of four service years."),
      text("إذا قدّرت الإدارة، استنادًا إلى معدل المغادرة المرصود ومعلوماتها الأخرى، استمرار خروج خمسة موظفين كل سنة، فتتوقع 20 مغادرًا طوال الفترة، و180 مستحقًا، و180 × 250 = 45,000 خيار. المصروف التراكمي في نهاية 20X3 = 45,000 × 12 × 1/4 = 135,000 دولار.", "If management, using observed attrition and other available information, estimates five departures each year, it forecasts 20 leavers over the period, 180 vesting employees and 180 × 250 = 45,000 options. Cumulative 20X3 expense is 45,000 × $12 × 1/4 = $135,000."),
      text("القيد وفق هذا التقدير: مدين مصروف موظفين 135,000، دائن احتياطي مدفوعات أسهم 135,000. خمسة مغادرين في السنة الأولى لا يفرضان هذا التوقع حسابيًا؛ لو توفر تقدير موثق مختلف لعدد الخيارات المستحقة، يعاد حساب المصروف وفقه في كل تاريخ تقرير.", "On that explicit estimate: debit staff expense $135,000 and credit share-based-payment reserve $135,000. Five first-year departures do not mathematically compel the forecast; a different supported estimate of options expected to vest would change the period-end amount and is reassessed at each reporting date."),
    ],
    reference: "IFRS 2.19–23",
  },
  {
    id: "ifrs-book2-ias41-quiz-biological-asset",
    standardCode: "IAS 41",
    title: text("تعريف الأصل البيولوجي", "Quick check: biological asset"),
    facts: text("سؤال تعريف في نهاية فصل الزراعة.", "A definition question in the agriculture chapter review."),
    question: text("ما الأصل البيولوجي؟", "What is a biological asset?"),
    solution: [text("الأصل البيولوجي حيوان أو نبات حي. لكن دخول الأصل في نطاق IAS 41 يتطلب أيضًا النظر إلى النشاط الزراعي واستثناء النبات المثمر نفسه الذي يُحاسب عنه وفق IAS 16.", "A biological asset is a living animal or plant. Whether it is accounted for under IAS 41 also depends on agricultural activity and the exception for the bearer plant itself, which follows IAS 16.")],
    reference: "IAS 41.1–5; IAS 16.3(b)",
  },
  {
    id: "ifrs-book2-ias41-quiz-produce",
    standardCode: "IAS 41",
    title: text("تعريف المحصول الزراعي", "Quick check: agricultural produce"),
    facts: text("سؤال تعريف في نهاية فصل الزراعة.", "A definition question in the agriculture chapter review."),
    question: text("ما المحصول الزراعي؟", "What is agricultural produce?"),
    solution: [text("هو الناتج الذي حُصد من الأصل البيولوجي للمنشأة، مثل اللبن المحلوب من الأبقار. يقاس عند نقطة الحصاد بالقيمة العادلة ناقص تكاليف البيع، ويصبح ذلك تكلفة المخزون عند تطبيق IAS 2 بعد الحصاد؛ لا يُعاد قياسه وفق IAS 41 في كل تاريخ تقرير لاحق.", "It is the harvested product of the entity's biological assets, such as milk taken from dairy cattle. At harvest it is measured at fair value less costs to sell; that amount becomes inventory cost under IAS 2 after harvest. It is not remeasured under IAS 41 at each later reporting date.")],
    reference: "IAS 41.3, 5, 13, 32; IAS 2.9",
  },
  {
    id: "ifrs-book2-ias41-quiz-categories",
    standardCode: "IAS 41",
    title: text("فئتا النشاط الزراعي", "Quick check: agricultural production categories"),
    facts: text("سؤال تصنيفي في نهاية فصل الزراعة.", "A classification question in the agriculture chapter review."),
    question: text("ما الفئتان في نظام الإنتاج الزراعي؟", "What are the two categories in the agricultural production system?"),
    solution: [text("استهلاكية: يُحصد الأصل نفسه أو يباع، مثل أشجار مزروعة للأخشاب. وحاملة أو منتجة: تُبقى لإنتاج محاصيل متكررة، مثل الأبقار الحلوب. هذا تمييز في طبيعة الإنتاج؛ النبات المثمر المؤهل، مثل كرمة العنب، يخضع هو نفسه لـIAS 16 قبل النضج وبعده، بينما محصوله النامي ضمن IAS 41.", "Consumable assets are harvested themselves or sold, such as trees grown for timber. Bearer or producing assets yield repeated produce, such as dairy cattle. This is a production distinction: a qualifying bearer plant such as a grape vine follows IAS 16 before and after maturity, while its growing produce remains under IAS 41.")],
    reference: "IAS 41.5, 43–46; IAS 16.3(b), 22A",
  },
  {
    id: "ifrs-book2-ias41-quiz-cost-exception",
    standardCode: "IAS 41",
    title: text("صح أم خطأ: هل أُلغي أساس التكلفة؟", "True or false: was the cost concept abolished?"),
    facts: text("عبارة صح/خطأ من مراجعة الفصل؛ المطلوب تبرير الإجابة لا الاكتفاء بكلمة واحدة.", "A true/false statement from the chapter review; explain the answer rather than giving one word only."),
    question: text("ألغى IAS 41 مفهوم التكلفة لأغراض القياس. صح أم خطأ؟", "IAS 41 has abolished the concept of cost for measurement purposes. True/False?"),
    solution: [text("خطأ. إذا دُحض افتراض إمكان قياس القيمة العادلة بصورة موثوقة عند الاعتراف الأولي بأصل بيولوجي، لغياب الأسعار المعلنة وعدم موثوقية بدائل القياس بوضوح، يُستخدم مؤقتًا أساس التكلفة ناقص الإهلاك والانخفاض حتى تصبح القيمة العادلة موثوقة. لا يمتد الاستثناء إلى المحصول عند الحصاد؛ فهو يُقاس بالقيمة العادلة ناقص تكاليف البيع في جميع الحالات.", "False. On initial recognition only, if quoted market prices for a biological asset are unavailable and alternative fair-value measurements are clearly unreliable, cost less accumulated depreciation and impairment is used until fair value becomes reliably measurable. This exception does not apply to agricultural produce at harvest, which is always measured at fair value less costs to sell.")],
    reference: "IAS 41.30–33",
  },
  {
    id: "ifrs-book2-ias2-quiz-nrv-formula",
    standardCode: "IAS 2",
    title: text("أكمل معادلة صافي القيمة القابلة للتحقق", "Complete the NRV formula"),
    facts: text("سؤال إكمال في مراجعة فصل المخزون.", "A fill-in question in the inventory chapter review."),
    question: text("صافي القيمة القابلة للتحقق = سعر البيع ناقص ....... ناقص .......", "Net realisable value = selling price less ............... less ..............."),
    solution: [text("الأولى: التكاليف المقدرة للإتمام. الثانية: التكاليف المقدرة الضرورية لإتمام البيع في النشاط المعتاد. ليست القيمة العادلة ناقص تكاليف البيع بالضرورة مرادفة لصافي القيمة القابلة للتحقق الخاص بالمنشأة.", "First blank: estimated costs of completion. Second blank: estimated costs necessary to make the sale in the ordinary course of business. Entity-specific NRV need not equal fair value less costs to sell.")],
    reference: "IAS 2.6–7, 28–30",
  },
  {
    id: "ifrs-book2-ias2-quiz-fifo-lifo",
    standardCode: "IAS 2",
    title: text("المفاضلة بين FIFO وLIFO", "FIFO versus LIFO"),
    facts: text("قارن طريقتي التكلفة المحددتين في السؤال ضمن متطلبات IAS 2.", "Compare the two specified cost formulas under IAS 2."),
    question: text("أي طريقة تكلفة مخزون يسمح بها IAS 2؟ (أ) الوارد أولًا صادر أولًا FIFO؛ (ب) الوارد أخيرًا صادر أولًا LIFO.", "Which inventory costing method is allowed under IAS 2? (a) FIFO; (b) LIFO."),
    solution: [text("الخيار (أ) FIFO مسموح، وLIFO غير مسموح. ولا يعني حصر السؤال في هذين الخيارين أن FIFO وحدها مسموحة عمومًا؛ يسمح IAS 2 أيضًا بالمتوسط المرجح للأصناف القابلة للتبادل، وبالتعيين المحدد للسلع غير القابلة للتبادل عادة.", "Option (a), FIFO, is permitted; LIFO is not. The two choices in this question do not imply FIFO is the only generally permitted method: IAS 2 also permits weighted average for ordinarily interchangeable items and specific identification when items are not ordinarily interchangeable.")],
    reference: "IAS 2.23–27",
  },
  {
    id: "ifrs-book2-gold-diggers-exploration-costs",
    standardCode: "IFRS 6",
    title: text("فرز تكاليف الاستكشاف والتقييم", "Gold Diggers: exploration and evaluation costs"),
    facts: text(
      "تكبدت Gold Diggers خلال سنة استكشاف الذهب المصروفات التالية، وكل الأرقام بالألف دولار: مصروفات قانونية لاقتناء أرض الاستكشاف 15,000؛ مصروفات قانونية للحصول على حق استكشاف الأرض 12,000؛ تكاليف حفر استكشافي 123,000؛ أعباء إدارية عامة موزعة على استكشاف المنطقة 25,000؛ تكاليف استخراج ذهب 152,000. يفترض عند تطبيق الحل وجود حق قانوني للاستكشاف وسياسة محاسبية متسقة تعترف بالنفقات المباشرة المؤهلة أصلًا.",
      "Gold Diggers Co incurred the following during a gold exploration year, all amounts in US$ thousands: legal expenses for acquiring land for exploration 15,000; legal expenses for acquiring the right to explore that land 12,000; exploratory drilling 123,000; general administrative overhead allocated to the area 25,000; and gold extraction 152,000. Applying the solution assumes legal exploration rights and a consistently applied policy recognising qualifying direct expenditure as an asset.",
    ),
    question: text(
      "أي من هذه التكاليف يجوز رسملته ضمن أصول الاستكشاف والتقييم وفق IFRS 6؟",
      "Which of the above costs may be capitalised as exploration and evaluation assets in accordance with IFRS 6?",
    ),
    solution: [
      text("إذا شملتهما سياسة الاعتراف المتسقة، فإن تكلفة اقتناء حق الاستكشاف 12,000 وتكلفة الحفر الاستكشافي 123,000 من أمثلة النفقات المرتبطة بالبحث عن مورد محدد. الإجمالي المحتمل لأصل IFRS 6 هو 135,000 ألف دولار؛ مدين أصل استكشاف وتقييم، دائن نقدية/دائنون بالمبلغ نفسه.", "If covered by the consistent recognition policy, the 12,000 right-acquisition cost and 123,000 exploratory drilling cost are examples of expenditure associated with finding a specific resource. The potential IFRS 6 asset is US$135,000 thousand: debit exploration and evaluation asset, credit cash/payables."),
      text("تكلفة اقتناء الأرض 15,000 ليست تكلفة أصل استكشاف IFRS 6 لمجرد وجود المشروع؛ تُفحص ضمن تكلفة الأرض وفق IAS 16 إن تحققت شروطها. الحصول على حق قانوني للاستكشاف لا يتطلب ملكية الأرض؛ لذلك لا يُعتمد تعليل الملكية المطلق.", "The 15,000 land-acquisition cost is not an IFRS 6 exploration asset merely because of the project; assess it as land cost under IAS 16 if its criteria are met. A legal right to explore does not require ownership of the land, so an absolute land-ownership rationale is not valid."),
      text("توزيع أعباء إدارية عامة 25,000 لا يثبت ارتباطها المباشر باستكشاف المورد، فلا تدخل في أصل IFRS 6 بالوقائع المعطاة. استخراج الذهب 152,000 يقع خارج مرحلة الاستكشاف؛ لا يدخل أصل IFRS 6، ولا يُحكم بصرفه الفوري دون معرفة هل هو تكلفة مخزون إنتاج أو غير ذلك وفق معيار آخر.", "Allocating 25,000 of general administration does not demonstrate direct association with the resource search, so the stated facts do not support its inclusion in the IFRS 6 asset. Gold extraction of 152,000 is beyond the exploration phase and cannot be included in an IFRS 6 asset; without further facts one cannot conclude it is immediately expensed rather than production inventory or another item under a different Standard."),
    ],
    reference: "IFRS 6.3–11, Appendix A; IAS 16; IAS 2",
  },
  {
    id: "ifrs-book2-ias2-two-items-nrv",
    standardCode: "IAS 2",
    title: text("تقييم مخزون صنفين", "Two-item inventory valuation"),
    facts: text(
      "في نهاية الفترة، الصنف A: 300 وحدة، تكلفة مواد للوحدة 160 دولارًا، أعباء إنتاج منسوبة 15، تكاليف بيع منسوبة 12، سعر بيع متوقع 185. الصنف B: 250 وحدة، تكلفة مواد 50، أعباء إنتاج 10، تكاليف بيع 10، سعر بيع متوقع 75. لم تُذكر تكاليف إتمام أخرى.",
      "At period-end, item A comprises 300 units with per-unit raw material cost US$160, attributable production overhead US$15, attributable selling costs US$12 and expected selling price US$185. Item B comprises 250 units with corresponding amounts of US$50, US$10, US$10 and US$75. No further completion costs are stated.",
    ),
    question: text(
      "بأي مبلغ سيظهر المخزون في قائمة المركز المالي وفق IAS 2؟",
      "At what amount will inventories be stated in the statement of financial position in accordance with IAS 2?",
    ),
    solution: [
      text("A: تكلفة الوحدة 160 + 15 = 175، وصافي القيمة القابلة للتحقق 185 − 12 = 173؛ الأقل 173. قيمة 300 وحدة = 51,900 دولار.", "A: unit cost is 160 + 15 = 175 and net realisable value is 185 − 12 = 173; use 173. For 300 units, carrying amount is US$51,900."),
      text("B: تكلفة الوحدة 50 + 10 = 60، وصافي القيمة القابلة للتحقق 75 − 10 = 65؛ الأقل 60. قيمة 250 وحدة = 15,000 دولار.", "B: unit cost is 50 + 10 = 60 and net realisable value is 75 − 10 = 65; use 60. For 250 units, carrying amount is US$15,000."),
      text("الإجمالي 66,900 دولار. تخفيض A من تكلفته الأصلية 52,500 إلى 51,900 يساوي 600 دولار: مدين مصروف تخفيض المخزون، دائن المخزون أو مخصص التخفيض. لا يُرفع B فوق تكلفته ولا يُدخل سعر البيع المتوقع ضمن تكلفة المخزون.", "Total inventory is US$66,900. Item A falls from original cost of US$52,500 to US$51,900, so debit inventory write-down expense and credit inventory or a valuation allowance for US$600. Do not raise B above cost or include expected selling price in inventory cost."),
    ],
    reference: "IAS 2.6, 9–16, 28–34",
  },
  {
    id: "ifrs-book2-ias12-quiz-investment-difference",
    standardCode: "IAS 12",
    title: text("كيف يظهر فرق مؤقت في استثمار تابع أو زميل؟", "How does a temporary difference arise on a subsidiary or associate investment?"),
    facts: text(
      "تحتفظ منشأة باستثمار في شركة تابعة أو زميلة، وقد تختلف القيمة الدفترية المرتبطة بالاستثمار في التقارير المالية عن أساس الاستثمار المعترف به لأغراض الضريبة. لم تُعط قيم رقمية أو خطة توزيعات.",
      "An entity holds an investment in a subsidiary or associate, whose financial-reporting carrying amount may differ from its tax base. No numerical balances or distribution plan are supplied.",
    ),
    question: text("كيف ينشأ الفرق المؤقت المرتبط بالاستثمار، وما الذي يجب اختباره قبل استنتاج التزام ضريبة مؤجلة؟", "How does the investment-related temporary difference arise, and what must be tested before concluding that a deferred tax liability is recognised?"),
    solution: [
      text("ينشأ الفرق عندما تختلف القيمة الدفترية المرتبطة بالاستثمار عن أساسه الضريبي؛ قد تسهم الأرباح غير الموزعة أو فروق التحويل أو خفض قيمة الاستثمار في ذلك. لا يكفي وجود ربح محتجز لدى المستثمر فيه وحده لتحديد مبلغ الفرق.", "A difference arises when the investment's carrying amount differs from its tax base; undistributed profits, translation differences or impairment of the investment can contribute. Retained earnings at the investee alone do not quantify the difference."),
      text("في الفرق الخاضع، اختبر استثناء IAS 12.39: هل يستطيع المستثمر التحكم في توقيت الانعكاس وهل يُرجح عدم انعكاسه في المستقبل المنظور؟ يجب تحقق الشرطين معًا. قد تختلف قواعد الاستثمارات في الزميلة عن التابعة من حيث القدرة على التحكم في التوزيع.", "For a taxable difference test IAS 12.39: can the investor control reversal timing, and is non-reversal probable in the foreseeable future? Both conditions are required. Control over distributions may differ between an associate and a subsidiary."),
    ],
    reference: "IAS 12.38–40",
  },
  {
    id: "ifrs-book2-ias12-quiz-three-differences",
    standardCode: "IAS 12",
    title: text("ثلاثة أمثلة على فروق مؤقتة", "Three examples of temporary differences"),
    facts: text(
      "تختلف قواعد المحاسبة عن قواعد الضريبة في توقيت الاعتراف ببعض المنافع والتكاليف. لا تُعط معطيات رقمية أو ولاية ضريبية محددة.",
      "Accounting and tax rules can recognise certain benefits and costs at different times. No amounts or particular tax jurisdiction are provided.",
    ),
    question: text("اذكر ثلاثة أمثلة صحيحة على فروق مؤقتة، موضحًا في كل مثال القاعدة الضريبية التي تجعل الفرق مؤقتًا لا دائمًا.", "Give three valid examples of temporary differences, stating in each the tax rule that makes the difference temporary rather than permanent."),
    solution: [
      text("1) أصل ثابت يُهلك ضريبيًا أسرع من إهلاكه المحاسبي، فيقل أساسه الضريبي عن قيمته الدفترية. 2) فوائد مستحقة محاسبيًا لا تُفرض عليها الضريبة إلا عند التحصيل، فيكون أساس الذمة الضريبي صفرًا حتى القبض.", "1) Equipment with faster tax than accounting depreciation has a tax base below carrying amount. 2) Accrued interest taxed only on collection has a nil receivable tax base until cash is received."),
      text("3) تكلفة تطوير مرسملة محاسبيًا بعد استيفاء شروط IAS 38 لكنها خُصمت ضريبيًا عند الإنفاق، فيبقى أصل محاسبي بأساس ضريبي صفر. لا يكفي ذكر «الإيرادات المقدمة» أو «المصروفات المستحقة» دون بيان متى تخضع أو تخصم ضريبيًا؛ فالفرق يعتمد على القانون.", "3) Qualifying development cost capitalised under IAS 38 but deducted for tax on expenditure leaves an accounting asset with a nil tax base. Merely naming advances or accruals without their tax timing is insufficient: the tax law determines whether a difference exists."),
    ],
    reference: "IAS 12.5, 7–8, 15, 24",
  },
  {
    id: "ifrs-book2-eramu-loss-carryback",
    standardCode: "IAS 12",
    title: text("Eramu: منفعة ترحيل خسارة للخلف", "Eramu: benefit of a loss carryback"),
    facts: text(
      "دفعت Eramu ضريبة قدرها 50,000 دولار عن أرباح 20X7، ثم تكبدت في 20X8 خسارة ضريبية 24,000. يجيز القانون ترحيل الخسارة إلى الفترة السابقة لاسترداد الضريبة المدفوعة، ومعدل الضريبة 30%. افترض أن كامل الخسارة مؤهل لهذا الرد.",
      "Eramu paid $50,000 tax on 20X7 profits and then incurs a $24,000 tax loss in 20X8. Law permits carryback to recover prior tax paid, and the tax rate is 30%. Assume the full loss qualifies for the refund.",
    ),
    question: text("احسب منفعة الضريبة عن 20X8، وحدد هل ينشأ أصل أم التزام ضريبة جارية، واكتب القيد.", "Calculate the 20X8 tax benefit, identify whether a current-tax asset or liability arises, and give the entry."),
    solution: [
      text("الاسترداد = 24,000 × 30% = 7,200 دولار، وهو أقل من ضريبة 20X7 المدفوعة البالغة 50,000؛ لذا يمكن استرداده وفق الفرض.", "Refund = $24,000 × 30% = $7,200, below the $50,000 prior tax paid and therefore recoverable under the stated assumption."),
      text("القيد: مدين ضريبة جارية مستردة 7,200، ودائن دخل/منفعة ضريبة جارية في الربح أو الخسارة 7,200. يعرض الأصل حتى التحصيل؛ لا ينشأ من الترحيل للخلف أصل ضريبة مؤجلة أو التزام ضريبة جارية عن الخسارة نفسها.", "Entry: debit current tax receivable $7,200 and credit current-tax benefit in profit or loss $7,200. Present the asset until collected; the carryback itself is neither a deferred tax asset nor a current-tax payable from the loss."),
    ],
    reference: "IAS 12.12–14, 46, 58",
  },
  {
    id: "ifrs-book2-carrol-anchor-dividend-tax",
    standardCode: "IAS 12",
    title: text("Carrol وAnchor: ضريبة التوزيعات المخطط لها", "Carrol and Anchor: tax on planned distributions"),
    facts: text(
      "تملك Carrol شركة Anchor التابعة. كانت أرباح Anchor المحتجزة عند الشراء 2,000,000 دولار. قرر مديرو Carrol تلقي توزيعات 500,000 دولار كل سنة من السنوات الثلاث القادمة، وتُفرض ضريبة على تحويلها، لكن لم يعلن توزيع عن السنة الحالية. لا يذكر السؤال معدل الضريبة أو أساس الاستثمار الضريبي.",
      "Carrol owns subsidiary Anchor, whose retained earnings at acquisition were $2,000,000. Carrol's directors plan $500,000 annual distributions for the next three years, taxable on remittance, but no current-year dividend has been declared. Neither the tax rate nor the investment's tax base is given.",
    ),
    question: text("ناقش أثر الخطة في الاعتراف بالضريبة المؤجلة على الاستثمار في Anchor، وهل يمكن حساب مبلغ الالتزام من البيانات المعطاة؟", "Discuss how the plan affects deferred-tax recognition on the Anchor investment and whether a liability amount can be calculated from the given facts."),
    solution: [
      text("استثناء IAS 12 يشترط معًا التحكم في توقيت انعكاس الفرق المؤقت ورجحان ألا ينعكس في المستقبل المنظور. تتحكم Carrol في سياسة التوزيع، لكن خطة دفع 500,000 سنويًا لثلاث سنوات تجعل الشرط الثاني غير متحقق للجزء المتوقع توزيعه، ولو لم يعلن توزيع حاليًا.", "The IAS 12 exception requires both control of temporary-difference reversal and probable non-reversal in the foreseeable future. Carrol controls dividend policy, but the three-year $500,000 annual plan defeats the second condition for the portion expected to be distributed, even without a current declaration."),
      text("تُقيّم ضريبة مؤجلة على الفرق المؤقت الخاضع ذي الصلة بالاستثمار والمتوقع انعكاسه. مجموع التوزيعات المخطط 1,500,000 لا يساوي تلقائيًا الفرق المؤقت؛ وبغياب أساس الاستثمار ومعدل الضريبة لا يجوز اختلاق مبلغ للالتزام أو قيد رقمي.", "Assess deferred tax on the taxable investment difference expected to reverse. Planned distributions total $1,500,000 but do not automatically equal the temporary difference; without the investment tax base and applicable tax rate, no numerical liability or journal amount can be derived."),
    ],
    reference: "IAS 12.38–40, 47",
  },
  {
    id: "ifrs-book2-beta-land-revaluation-tax",
    standardCode: "IAS 12",
    title: text("Beta: قيد ضريبة إعادة تقييم أرض", "Beta: tax entry on land revaluation"),
    facts: text(
      "اشترت Beta أرضًا في 1 يناير 20X7 مقابل 400,000 دولار. أعيد تقييمها في 31 ديسمبر 20X8 إلى 500,000؛ لا تغير إعادة التقييم الأساس الضريبي أو الربح الخاضع. معدل الضريبة 30%، ولا يذكر السؤال انخفاضًا سابقًا مسجلًا في الربح أو الخسارة.",
      "Beta bought land on 1 January 20X7 for $400,000. On 31 December 20X8 it is revalued to $500,000; revaluation changes neither tax base nor taxable profit. The tax rate is 30%, and no earlier profit-or-loss decrease is stated.",
    ),
    question: text("أعد قيد الضريبة المؤجلة المتعلق بإعادة التقييم لسنة 20X8، مع بيان موضع عرض أثره.", "Prepare the 20X8 deferred-tax entry relating to revaluation and identify where its effect is presented."),
    solution: [
      text("القيمة الدفترية بعد التقييم 500,000 والأساس الضريبي 400,000؛ الفرق المؤقت الخاضع 100,000 والالتزام المؤجل 100,000 × 30% = 30,000 دولار.", "Post-revaluation carrying amount is $500,000 and tax base remains $400,000; taxable temporary difference is $100,000 and deferred tax liability $100,000 × 30% = $30,000."),
      text("إذا سُجلت زيادة الأرض البالغة 100,000 في الدخل الشامل الآخر، فالقيد مدين ضريبة إعادة التقييم في OCI 30,000 ودائن التزام ضريبة مؤجلة 30,000. صافي الزيادة في فائض إعادة التقييم 70,000، ولا يحمل أثرها الضريبي على ربح الفترة.", "If the $100,000 land uplift is recorded in OCI, debit revaluation tax in OCI $30,000 and credit deferred tax liability $30,000. The net increase in revaluation surplus is $70,000; its tax is not charged to period profit."),
    ],
    reference: "IAS 12.20, 47, 61A–62; IAS 16.39, 42",
  },
  {
    id: "ifrs-book2-charlton-revaluation-tax-split",
    standardCode: "IAS 12",
    title: text("Charlton: فصل الضريبة القديمة عن أثر إعادة التقييم", "Charlton: separating old tax from revaluation effect"),
    facts: text(
      "رفعت Charlton عقارًا خلال الفترة من قيمة دفترية 2,000,000 دولار إلى قيمة عادلة 2,500,000. تكلفته التاريخية 2,200,000 وأساسه الضريبي في تاريخ التقرير 1,800,000. معدل الضريبة 30%. لا يذكر السؤال رصيد ضريبة مؤجلة افتتاحيًا أو تغير الأساس الضريبي خلال السنة؛ افترض أن زيادة التقييم كلها في OCI.",
      "Charlton revalues property during the period from $2,000,000 carrying amount to $2,500,000 fair value. Historical cost is $2,200,000 and reporting-date tax base $1,800,000. The tax rate is 30%. No opening deferred-tax balance or tax-base movement during the year is stated; assume the uplift is wholly in OCI.",
    ),
    question: text("احسب الالتزام المؤجل الختامي والضريبة المرتبطة بزيادة إعادة التقييم، وناقش هل يمكن تحميل الفرق الباقي على ربح الفترة من المعطيات وحدها.", "Calculate closing deferred tax and the tax attributable to the revaluation uplift, and discuss whether the remaining difference can be charged to this period's profit from the stated facts alone."),
    solution: [
      text("الفرق المؤقت الختامي = 2,500,000 − 1,800,000 = 700,000، فالالتزام المؤجل الختامي 210,000. زيادة إعادة التقييم 500,000، وضريبتها 150,000 في OCI مع قيد مدين OCI ودائن الالتزام.", "Closing temporary difference is $2,500,000 − $1,800,000 = $700,000, giving a $210,000 closing liability. The $500,000 revaluation uplift adds $150,000 tax in OCI: debit OCI and credit the liability."),
      text("إذا كان الأساس قبل التقييم 1,800,000 بالفعل، فالفرق القديم 200,000 وضريبته 60,000 كانت قائمة قبل الزيادة. عدم بيان رصيد الالتزام الافتتاحي أو حركات الإهلاك والأساس الضريبي يمنع الجزم بأن 60,000 مصروف ربح أو خسارة جديد لهذه الفترة؛ فهو جزء من رصيد ختامي لا حركة مثبتة للسنة.", "If tax base already equalled $1,800,000 before revaluation, the old $200,000 difference carried $60,000 tax before the uplift. Without the opening liability and depreciation or tax-base movements, the $60,000 cannot be asserted as a new profit-or-loss expense for this period; it is part of a closing balance, not a demonstrated period movement."),
    ],
    reference: "IAS 12.20, 47, 58, 61A–62; IAS 16.39, 42",
  },
  {
    id: "ifrs-book2-tax-base-five-assets",
    standardCode: "IAS 12",
    title: text("الأساس الضريبي لخمسة أصول", "Tax bases of five assets"),
    facts: text(
      "(أ) معدة تكلفتها 10,000 دولار خُصم إهلاك ضريبي 3,000 وسيكون الباقي قابلًا للخصم عند استخدامها أو بيعها؛ منافع استخدامها ومكسب بيعها خاضعة، والخسارة قابلة للخصم. (ب) فوائد مستحقة 1,000 تُفرض عليها الضريبة عند التحصيل. (ج) ذمم تجارية 10,000 سبق خضوع إيرادها للضريبة. (د) قرض مدين 1,000,000 لا أثر ضريبي لسداد أصله. (هـ) توزيعات مستحقة من تابعة 5,000 غير خاضعة للضريبة.",
      "(a) Equipment costs $10,000, of which $3,000 tax depreciation has been deducted; the remainder is deductible on use or disposal, with taxable benefits and gains and deductible losses. (b) $1,000 interest receivable is taxed on collection. (c) $10,000 trade receivables relate to revenue already taxed. (d) Recovery of a $1,000,000 loan receivable principal has no tax consequence. (e) $5,000 dividends receivable from a subsidiary are non-taxable.",
    ),
    question: text("حدد الأساس الضريبي لكل أصل من (أ) إلى (هـ)، وبيّن لماذا لا تنشأ ضريبة مؤجلة عن التوزيعات غير الخاضعة.", "State the tax base of each asset (a)–(e) and explain why non-taxable dividends create no deferred tax."),
    solution: [
      text("(أ) 7,000 = 10,000 − 3,000، وهو الخصم المستقبلي المتبقي. (ب) صفر لأن الفوائد ستدخل الربح الخاضع عند التحصيل. (ج) 10,000 لأن إيراد البيع سبق خضوعه ولن يعاد فرض الضريبة عند التحصيل.", "(a) $7,000 = $10,000 − $3,000, the remaining future deduction. (b) Nil because interest becomes taxable on collection. (c) $10,000 because the sales revenue was already taxed and collection is not taxed again."),
      text("(د) 1,000,000 لأن استرداد أصل القرض محايد ضريبيًا. (هـ) 5,000 بتحليل أن المنفعة غير خاضعة، فلا فرق مؤقت خاضع. ويمكن تحليل (هـ) بأساس صفر ومعدل ضريبة صفر؛ النتيجة أيضًا عدم وجود التزام ضريبة مؤجلة.", "(d) $1,000,000 because principal recovery is tax-neutral. (e) $5,000 because the benefit is non-taxable, producing no taxable temporary difference. Alternatively a nil tax base and nil tax rate likewise produce no deferred tax liability."),
    ],
    reference: "IAS 12.7",
  },
  {
    id: "ifrs-book2-tax-base-five-liabilities",
    standardCode: "IAS 12",
    title: text("الأساس الضريبي لخمسة التزامات", "Tax bases of five liabilities"),
    facts: text(
      "(أ) مصروف مستحق 1,000 دولار لا يخصم ضريبيًا إلا عند الدفع. (ب) فوائد مقبوضة مقدمًا 10,000 ضُرّبت عند القبض وسُجلت التزامًا محاسبيًا. (ج) مصروف مستحق 2,000 سبق خصمه ضريبيًا. (د) غرامة مستحقة 100 غير قابلة للخصم أبدًا. (هـ) قرض دائن 1,000,000 لا أثر ضريبي لسداد أصله.",
      "(a) A $1,000 accrued expense is deductible only on payment. (b) $10,000 interest received in advance was taxed on receipt and recorded as an accounting liability. (c) A $2,000 accrued expense has already been deducted for tax. (d) A $100 accrued fine is never deductible. (e) Settlement of a $1,000,000 loan payable principal has no tax consequence.",
    ),
    question: text("حدد الأساس الضريبي لكل التزام من (أ) إلى (هـ)، وفسر لماذا لا يكون أساس الغرامة صفرًا.", "State the tax base of each liability (a)–(e), explaining why the fine's tax base is not nil."),
    solution: [
      text("(أ) صفر = 1,000 − خصم مستقبلي 1,000. (ب) صفر = 10,000 − إيراد لن يخضع ثانيةً 10,000. (ج) 2,000 لأن الخصم استُخدم بالفعل ولا يتبقى خصم عند الدفع.", "(a) Nil = $1,000 less a $1,000 future deduction. (b) Nil = $10,000 less $10,000 income not taxable again. (c) $2,000 because the deduction was already used and no future deduction remains."),
      text("(د) 100؛ لا خصم مستقبلي للغرامة غير القابلة للخصم، فهي فرق دائم ولا يولد الالتزام نفسه أصل ضريبة مؤجلة. (هـ) 1,000,000 لأن سداد أصل القرض محايد ضريبيًا.", "(d) $100: a non-deductible fine yields no future deduction, so the expense difference is permanent and the liability itself creates no deferred tax asset. (e) $1,000,000 because repayment of principal is tax-neutral."),
    ],
    reference: "IAS 12.8",
  },
  {
    id: "ifrs-book2-catsu-tax-depreciation",
    standardCode: "IAS 12",
    title: text("Catsu: حركة الضريبة المؤجلة على معدة", "Catsu: equipment deferred-tax movement"),
    facts: text(
      "اشترت Catsu معدة في 1 يناير 20X1 بتكلفة 1,000,000 دولار وقيمة متبقية 100,000 وعمر نافع عشر سنوات، ويحسب الإهلاك المحاسبي بالقسط الثابت. يسمح القانون بخصم ضريبي 20% سنويًا من الرصيد المتناقص، ومعدل ضريبة الدخل 30%. لا توجد حركات ضريبية أخرى لهذه المعدة.",
      "Catsu buys equipment on 1 January 20X1 for $1,000,000, with $100,000 residual value and a ten-year useful life, depreciated straight-line for accounting. Tax depreciation is 20% annually on the reducing balance; the income-tax rate is 30%. There are no other tax movements for this equipment.",
    ),
    question: text("احسب مصروف الضريبة المؤجلة في الربح أو الخسارة لسنة 20X2 ورصيد التزام الضريبة المؤجلة في 31 ديسمبر 20X2، مع إظهار حساب 20X1 الافتتاحي.", "Calculate the 20X2 profit-or-loss deferred-tax charge and the deferred-tax liability at 31 December 20X2, showing the opening 20X1 calculation."),
    solution: [
      text("الإهلاك المحاسبي = (1,000,000 − 100,000) ÷ 10 = 90,000 سنويًا. نهاية 20X1: القيمة الدفترية 910,000، والأساس الضريبي بعد خصم 200,000 يساوي 800,000؛ الفرق 110,000 والالتزام المؤجل 33,000.", "Accounting depreciation is ($1,000,000 − $100,000) ÷ 10 = $90,000 each year. End-20X1 carrying amount is $910,000 and tax base after a $200,000 deduction is $800,000; the $110,000 taxable difference gives a $33,000 liability."),
      text("في 20X2 الخصم الضريبي 800,000 × 20% = 160,000، فيهبط الأساس إلى 640,000؛ القيمة الدفترية 910,000 − 90,000 = 820,000. الفرق الخاضع 180,000 × 30% = التزام ختامي 54,000. مصروف السنة = 54,000 − 33,000 = 21,000: مدين مصروف ضريبة مؤجلة ودائن الالتزام بهذا المبلغ.", "20X2 tax depreciation is $800,000 × 20% = $160,000, reducing tax base to $640,000; carrying amount is $910,000 − $90,000 = $820,000. The $180,000 taxable difference × 30% gives a $54,000 closing liability. The year's charge is $54,000 − $33,000 = $21,000: debit deferred tax expense and credit the liability."),
    ],
    reference: "IAS 12.7, 15, 17, 47, 58",
  },
  {
    id: "ifrs-book2-epsilon-development-tax",
    standardCode: "IAS 12",
    title: text("Epsilon: ضريبة أصل تطوير خُصم فورًا", "Epsilon: tax on development deducted immediately"),
    facts: text(
      "رسملت Epsilon خلال السنة المنتهية في 31 مارس 20X4 تكاليف تطوير مؤهلة قدرها 1,600,000 دولار. أصبح الأصل متاحًا للاستخدام وبدأ توليد المنافع في 1 يناير 20X4، بعمر نافع خمس سنوات وإطفاء موزع شهريًا. خُصمت النفقات كلها ضريبيًا عن السنة المنتهية في 31 مارس 20X4، ومعدل الضريبة 25%.",
      "During the year to 31 March 20X4 Epsilon capitalises $1,600,000 of qualifying development costs. The asset becomes available for use and begins generating benefits on 1 January 20X4, with a five-year useful life and monthly amortisation. All expenditure is deducted for tax for the year to 31 March 20X4; the tax rate is 25%. ",
    ),
    question: text("ناقش واحسب أثر الضريبة المؤجلة في 31 مارس 20X4، مبينًا الإطفاء والقيمة الدفترية والأساس الضريبي.", "Discuss and calculate deferred tax at 31 March 20X4, showing amortisation, carrying amount and tax base."),
    solution: [
      text("إطفاء ثلاثة أشهر = 1,600,000 ÷ 5 × 3/12 = 80,000؛ القيمة الدفترية 1,520,000. بما أن التكلفة خُصمت كلها ضريبيًا، فلا يبقى خصم مستقبلي ويكون الأساس الضريبي صفرًا.", "Three months' amortisation is $1,600,000 ÷ 5 × 3/12 = $80,000; carrying amount is $1,520,000. Because the full cost has been deducted for tax, no future deduction remains and the tax base is nil."),
      text("الفرق المؤقت الخاضع 1,520,000، والالتزام المؤجل 1,520,000 × 25% = 380,000 دولار. يثبت مدين مصروف ضريبة مؤجلة ودائن التزام ضريبة مؤجلة بالمبلغ عند نهاية السنة، بافتراض عدم وجود رصيد افتتاحي لهذا الفرق. الخصم الضريبي الفوري يمنع تبرير إعفاء الاعتراف الأول بالقول إن المعاملة لم تؤثر في الربح الخاضع.", "The taxable temporary difference is $1,520,000 and the deferred tax liability is $1,520,000 × 25% = $380,000. Debit deferred tax expense and credit the liability at year-end, assuming no opening balance for this difference. The immediate tax deduction means the initial-recognition exception cannot be justified by saying the transaction did not affect taxable profit."),
    ],
    reference: "IAS 12.7, 15, 17, 47, 58; IAS 38.97",
  },
  {
    id: "ifrs-book2-darton-current-tax-true-up",
    standardCode: "IAS 12",
    title: text("Darton: تصحيح ضريبة سنة سابقة", "Darton: prior-year current-tax true-up"),
    facts: text(
      "في 20X8 حققت Darton ربحًا خاضعًا للضريبة قدره 120,000 دولار ومعدل الضريبة 30%. قُدرت ضريبة 20X7 بمبلغ 30,000 وسُدد هذا التقدير. حُددت ضريبة 20X7 نهائيًا لاحقًا بمبلغ 35,000 في البديل (أ) أو 25,000 في البديل (ب). لا تسوى فروق الدفع أو الاسترداد إلا عند دفعة ضريبة السنة التالية.",
      "In 20X8 Darton earns taxable profit of $120,000 and the tax rate is 30%. Its 20X7 tax was estimated at $30,000 and that estimate was paid. The 20X7 final assessment is subsequently set at $35,000 in alternative (a) or $25,000 in alternative (b). Payment or recovery of the difference awaits the following year's tax payment.",
    ),
    question: text("احسب مصروف الضريبة والمطلوب أو المسترد في 20X8 لكل بديل، وبيّن متى يجوز عرض الأصل والمطلوب بالصافي.", "Calculate 20X8 tax expense and the payable or receivable under each alternative, explaining when assets and liabilities may be presented net."),
    solution: [
      text("ضريبة ربح 20X8 = 120,000 × 30% = 36,000 دولار. في البديل (أ)، نقص تقدير 20X7 = 35,000 − 30,000 = 5,000، فمصروف الضريبة الجارية 41,000 والمطلوب الكلي قبل السداد 41,000.", "Tax on 20X8 profit = $120,000 × 30% = $36,000. In (a), the 20X7 underestimate is $35,000 − $30,000 = $5,000, giving $41,000 current-tax expense and $41,000 total payable before settlement."),
      text("في البديل (ب)، زيادة تقدير 20X7 = 30,000 − 25,000 = 5,000، فمصروف الضريبة الجارية 31,000. يُثبت أصل مسترد 5,000 مقابل مطلوب السنة الجارية 36,000؛ لا يعرضان بصافي 31,000 إلا مع حق مقاصة قانوني نافذ ونية تسوية صافية أو متزامنة. تأجيل السداد وحده لا ينشئ ضريبة مؤجلة.", "In (b), the 20X7 overestimate is $30,000 − $25,000 = $5,000, giving $31,000 current-tax expense. Record a $5,000 receivable alongside the $36,000 current-year payable; show them net at $31,000 only with an enforceable set-off right and an intention to settle net or simultaneously. Payment delay alone creates no deferred tax."),
    ],
    reference: "IAS 12.12, 46, 58, 71",
  },
  {
    id: "ifrs-book2-alpha-beta-acquisition-tax",
    standardCode: "IAS 12",
    title: text("Alpha وBeta: الضريبة المؤجلة للمعدة المقتناة", "Alpha and Beta: deferred tax on acquired equipment"),
    facts: text(
      "في 1 أبريل 20X5 اشترت Alpha كامل أسهم Beta. كانت القيم العادلة للأصول والالتزامات المقتناة مساوية لقيمها الدفترية باستثناء معدة قيمتها العادلة 54 مليون دولار وأساسها الضريبي 50 مليونًا. تعديل القيمة العادلة لا يغير أساس المعدة الضريبي. معدل الضريبة 25%.",
      "On 1 April 20X5 Alpha acquired all Beta's ordinary shares. Acquired assets and liabilities had fair values equal to carrying amounts except for equipment with a $54m fair value and $50m tax base. The fair-value adjustment does not change the equipment's tax base. The tax rate is 25%.",
    ),
    question: text("ناقش أثر هذه البيانات في الضريبة المؤجلة بالقوائم المجمعة وفي الشهرة الناتجة عن الاستحواذ؛ لا تفترض مقابل شراء غير معطى.", "Discuss the deferred-tax effect in the consolidated accounts and its effect on acquisition goodwill; do not assume an unstated consideration."),
    solution: [
      text("القيمة الدفترية المجمعة 54 مليونًا والأساس الضريبي 50 مليونًا، فينشأ فرق مؤقت خاضع 4 ملايين والتزام ضريبة مؤجلة 4 × 25% = مليون دولار.", "Consolidated carrying amount is $54m and tax base $50m, producing a $4m taxable temporary difference and a $4m × 25% = $1m deferred tax liability."),
      text("يُدرج الالتزام ضمن محاسبة تاريخ الاستحواذ: مدين الشهرة ودائن التزام الضريبة المؤجلة بمليون، بوصفه أثرًا على صافي الأصول المقتناة. تزيد الشهرة مليونًا مقارنة بحساب يستبعد هذا الالتزام، لكن لا يمكن حساب إجماليها دون مقابل الشراء وبقية عناصر التخصيص. لا يطبق استثناء الاعتراف الأول بالشهرة على فرق المعدة القابلة للتحديد.", "Include the liability in acquisition-date accounting: debit goodwill and credit deferred tax liability $1m as an effect on acquired net assets. Goodwill is $1m higher than a calculation omitting that liability, but total goodwill requires consideration and the rest of the allocation. The initial-recognition exception for goodwill itself does not exempt the identifiable equipment difference."),
    ],
    reference: "IAS 12.15, 19, 47, 66; IFRS 3.10, 18",
  },
  {
    id: "ifrs-book2-bets-cash-flow-hedge-cumulative",
    standardCode: "IFRS 9",
    title: text("Bets: احتياطي تحوط شراء أصل باليورو", "Bets: hedge reserve on a euro asset purchase"),
    facts: text(
      "التزمت Bets في 1 نوفمبر 20X1 بشراء أصل غير مالي بمبلغ 60 مليون يورو في 1 نوفمبر 20X2، وعملتها الوظيفية الدولار. وعيّنت العقد الآجل كاملًا لشراء المبلغ نفسه بالسعر 1 دولار = 1.50 يورو ضمن تحوط تدفقات نقدية مستوفٍ للشروط، دون فصل عنصر الآجل لمعالجة تكلفة تحوط مستقلة. الأسعار الفورية عند البداية و31 ديسمبر ويوم الشراء هي 1.45 و1.20 و1.00 يورو للدولار؛ والأسعار الآجلة لموعد الشراء هي 1.50 و1.24 و1.00. للتطبيق العددي المبسط، افترض عدم جوهرية أثر خصم التدفقات المحوطة وأن تغيرها محسوب من هذه الأسعار الفورية. فرق الآجل داخل مكسب العقد ولا يُهمل.",
      "On 1 November 20X1 Bets commits to buy a non-financial asset for €60m on 1 November 20X2, with USD functional currency. The entire forward to buy the same amount at $1 = €1.50 is designated in a qualifying cash flow hedge, without separately treating its forward element as a cost of hedging. Spot rates at inception, 31 December and purchase are €1.45, €1.20 and €1.00 per dollar; forward rates for purchase-date delivery are €1.50, €1.24 and €1.00. For simplified calculation, assume immaterial additional effect from discounting hedged cash flows and measure their changes using these spot rates. Forward-point differences remain within the instrument gain.",
    ),
    question: text("بيّن القيود في البداية و31 ديسمبر ويوم الشراء، مع قياس احتياطي التحوط وعدم الفاعلية على أساس تراكمي وتكلفة الأصل بعد تعديل الأساس.", "Show inception, 31 December and purchase-date entries, measuring the reserve and ineffectiveness cumulatively and determining basis-adjusted asset cost."),
    solution: [
      text("في البداية قيمة العقد الآجل صفر ضمن الافتراضات، ولا يثبت أصل الشراء قبل تنفيذه. في 31 ديسمبر مكسب العقد 60م ÷ 1.24 − 60م ÷ 1.50 = 8,387,096.77، وتغير التعرض المتراكم 60م ÷ 1.20 − 60م ÷ 1.45 = 8,620,689.66. الأقل 8,387,096.77 يثبت مدين أصل مشتق ودائن احتياطي تحوط عبر OCI.", "At inception the forward has nil value under the assumptions and no purchased asset is yet recognised. At 31 December its gain is €60m ÷ 1.24 − €60m ÷ 1.50 = $8,387,096.77; cumulative exposure change is €60m ÷ 1.20 − €60m ÷ 1.45 = $8,620,689.66. Debit derivative asset and credit the OCI hedge reserve for the lower $8,387,096.77."),
      text("يوم الشراء مكسب المشتق المتراكم 20,000,000، وتغير البند المحوّط المتراكم 18,620,689.66؛ لذلك الاحتياطي النهائي 18,620,689.66 وعدم الفاعلية التراكمية في الربح أو الخسارة 1,379,310.34. وفق أرصدة الدفاتر المعروضة بعد التقريب: مدين أصل مشتق إضافي 11,612,903.23؛ دائن احتياطي 10,233,592.89 ودائن ربح عدم فاعلية 1,379,310.34. لا تحدد الاحتياطي بإضافة 10 ملايين فقط بناءً على حركة تعرض الفترة الثانية المنفردة.", "At purchase, cumulative derivative gain is $20,000,000 and cumulative hedged-item change $18,620,689.66; closing reserve is therefore $18,620,689.66 and cumulative profit-or-loss ineffectiveness $1,379,310.34. Using rounded displayed ledger balances, debit derivative asset a further $11,612,903.23, credit reserve $10,233,592.89 and credit ineffectiveness gain $1,379,310.34. Do not cap the second-period reserve addition at that period's stand-alone $10m exposure change."),
      text("يثبت شراء الأصل: مدين أصل 60,000,000 ودائن نقدية 60,000,000؛ ويسوى العقد بمدين نقدية 20,000,000 ودائن أصل مشتق 20,000,000. ينقل الاحتياطي مباشرةً إلى الأصل: مدين الاحتياطي 18,620,689.66 ودائن الأصل بالمبلغ نفسه، فتصبح التكلفة 41,379,310.34 دولار في الافتراض المبسط. إذا كان أثر القيمة الزمنية أو شروط التعيين جوهريًا، لا تصلح هذه الأرقام كقياس نهائي دون معلومات إضافية.", "Record the purchase by debiting the asset $60,000,000 and crediting cash; settle the forward by debiting cash $20,000,000 and crediting the derivative asset. Directly basis-adjust by debiting the $18,620,689.66 reserve and crediting the asset, leaving $41,379,310.34 cost in the simplified case. Material time-value or designation effects require further inputs before these can be final measured amounts."),
    ],
    reference: "IFRS 9.6.4.1, 6.5.4, 6.5.11(a)–(d), B6.5.4–B6.5.5; IAS 21.21",
  },
  {
    id: "ifrs-book2-jules-inventory-fair-value-hedge",
    standardCode: "IFRS 9",
    title: text("Jules: قيود تحوط القيمة العادلة للمخزون", "Jules: entries for an inventory fair value hedge"),
    facts: text(
      "اشترت Jules في 1 يوليو 20X6 عدد 10,000 أونصة من معدن بسعر 200 دولار للأونصة. وعيّنت عقد بيع مستقبلي لها بسعر 210 دولارات للتسليم في 30 يونيو 20X7 تحوطًا مؤهلًا ومُوثقًا لخطر السعر. في 31 ديسمبر 20X6 كان سعر المعدن 220 دولارًا وسعر العقد المستقبلي 227 دولارًا للأونصة. في 30 يونيو 20X7 بيع المخزون وأغلق العقد بسعر فوري 230 دولارًا. افترض أن 200 دولار كان السعر عند التعيين، وأن تغير الأسعار المعطى يمثل تغير الخطر المحوّط والقيمة العادلة للعقد دون أثر خصم أو هامش جوهري.",
      "Jules bought 10,000 ounces of metal on 1 July 20X6 at $200 per ounce and designated a futures sale at $210 for delivery on 30 June 20X7 as a qualifying, documented hedge of price risk. At 31 December 20X6 metal price was $220 and the futures price $227 per ounce. On 30 June 20X7 inventory was sold and the future closed at a $230 spot price. Assume $200 was the designation-date price and that quoted price movements represent hedged-risk and derivative fair value changes without material discount or margin effects.",
    ),
    question: text(
      "بيّن قيود العقد والمخزون في تاريخ التقرير والتسوية والبيع، واحسب صافي أثر التحوط. لماذا لا تعني الزيادة في المخزون اختيار نموذج قيمة عادلة عام؟",
      "Show derivative and inventory entries at reporting date, settlement and sale, and calculate the hedge's net effect. Why is the inventory uplift not a general fair-value accounting policy?",
    ),
    solution: [
      text("في 31 ديسمبر تثبت خسارة مشتق 170,000 مدينًا والتزام عقد 170,000 دائنًا؛ وتزيد قيمة المخزون 200,000 مدينًا مع ربح بند محوّط 200,000 دائنًا. الصافي في الربح أو الخسارة 30,000، ورصيد المخزون 2,200,000.", "At 31 December debit derivative loss $170,000 and credit futures liability $170,000; debit inventory $200,000 and credit hedged-item gain $200,000. Net profit-or-loss effect is $30,000 and inventory carries $2,200,000."),
      text("في 30 يونيو تثبت خسارة عقد إضافية 30,000 وربح تعديل مخزون إضافي 100,000، فيصبح المخزون 2,300,000 والتزام العقد 200,000. البيع: مدين نقدية 2,300,000 ودائن إيراد 2,300,000، ثم مدين تكلفة مبيعات 2,300,000 ودائن مخزون 2,300,000. تسوية العقد: مدين التزام 200,000 ودائن نقدية 200,000.", "At 30 June record a further $30,000 derivative loss and $100,000 inventory hedge gain, bringing inventory to $2,300,000 and futures liability to $200,000. On sale debit cash $2,300,000/credit revenue $2,300,000, then debit cost of sales $2,300,000/credit inventory $2,300,000. Settle the future by debiting its $200,000 liability and crediting cash."),
      text("النتيجة الكلية = 2,300,000 متحصل − 2,000,000 تكلفة أصلية − 200,000 تسوية عقد = 100,000 دولار؛ تقسم محاسبيًا إلى 30,000 حتى ديسمبر و70,000 بعده. تعديل المخزون يخص فقط تغير الخطر المعين في علاقة تحوط مستوفية IFRS 9. بخلاف ذلك تطبق قواعد IAS 2 المعتادة، ولا يُرفع كل المخزون للقيمة العادلة لمجرد ارتفاع السوق.", "Overall result = $2,300,000 sale proceeds − $2,000,000 original cost − $200,000 futures settlement = $100,000, reflected as $30,000 through December and $70,000 thereafter. The inventory adjustment is limited to the designated risk in a qualifying IFRS 9 hedge. Otherwise normal IAS 2 measurement applies; a market-price rise does not revalue all inventory."),
    ],
    reference: "IFRS 9.6.4.1, 6.5.2(a), 6.5.8; IAS 2.9, 34",
  },
  {
    id: "ifrs-book2-iron-order-versus-forward",
    standardCode: "IFRS 9",
    title: text("طلب حديد وعقد آجل: متى يظهر مشتق؟", "Iron order and forward: when does a derivative appear?"),
    facts: text(
      "تقارن الصفحة 205 عقدين مستقلين لكمية محددة من الحديد: طلب شراء ملزم ضمن النشاط المعتاد، وعقدًا آجلًا لشراء الحديد بسعر وتاريخ محددين في حالة عدم أخذ التسليم. لا تعطي الصفحة سعرًا سوقيًا عند التعاقد أو قيمة عادلة أو آلية تفصيلية للتسوية النقدية. حل الكتاب يفترض التزامًا ماليًا موجبًا للعقد الآجل فور الدخول فيه.",
      "Scanned p205 compares two independent contracts for a specified quantity of iron: a firm ordinary-course purchase order and a forward purchase at a specified price and date if delivery is not taken. It gives no inception market price, fair value or detailed cash-settlement mechanism. The printed answer assumes an immediate positive financial liability for the forward.",
    ),
    question: text("كيف تقيّم الاعتراف الأولي لكل عقد؟ وهل يمكن تحديد مبلغ أو جهة رصيد العقد الآجل من هذه الوقائع؟", "How should each contract be assessed at inception? Can these facts establish the forward's amount or asset/liability direction?"),
    solution: [
      text("طلب الشراء الذي يستهدف استلام الحديد واستخدامه لا ينشئ بذاته أداة مالية أو مخزونًا عند توقيعه؛ يفحص استثناء الاستخدام الخاص وشروط التسوية، ثم يُثبت الحديد والدائن عند التسليم بحسب العقد. الوعد بإجراء شراء في المستقبل وحده لا يحدد مبلغ التزام مالي يوم الطلب.", "An order held for physical receipt and use does not by itself create a financial instrument or inventory on signing. Test the own-use exception and settlement terms; recognise iron and any payable on delivery as appropriate. A future purchase promise alone does not quantify a financial liability at order date."),
      text("إذا كان العقد الآجل الثاني قابلاً للتسوية الصافية نقدًا ودخل نطاق IFRS 9، يبدأ الاعتراف بالمشتق عند الدخول في شروطه ويقاس بقيمته العادلة. قد تكون قيمته صفرًا عند التعاقد بسعر السوق، وقد تكون أصلًا أو التزامًا بشروط مختلفة. لذلك لا يثبت من الوقائع المعطاة مبلغ موجب أو إشارة الرصيد؛ يلزم سعر العقد والسوق وشروط التسوية. يعاد قياس مشتق غير معين لتحوط مؤهل عبر الربح أو الخسارة لاحقًا.", "If the second forward can be net settled in cash and is within IFRS 9, recognise it on becoming party to its terms at fair value. An at-market forward may initially be worth zero, while other terms may create an asset or liability. The supplied facts establish neither a positive amount nor its sign; contract and market prices and settlement terms are needed. A derivative outside a qualifying hedge is subsequently remeasured through profit or loss."),
    ],
    reference: "IFRS 9.2.4–2.7, 3.1.1, 5.1.1, 5.7.1; IAS 32.AG20–AG23",
  },
  {
    id: "ifrs-book2-ab-ef-derecognition",
    standardCode: "IFRS 9",
    title: text("خيار AB وإقراض أسهم EF: اختبر المخاطر والعوائد", "AB call and EF securities loan: test risks and rewards"),
    facts: text(
      "في مثال الصفحة 207 تبيع AB استثمارًا في أسهم وتحتفظ بخيار شرائه لاحقًا بسعره السوقي حينئذ. وتُقرض EF استثمارها في أسهم إلى طرف ثالث لمدة محددة مقابل رسم. لا يقدم المثال مبالغ بيع أو قيمًا دفترية، ولا نصوصًا تفصيلية للعقدين.",
      "In scanned p207, AB sells a share investment but retains a call to repurchase it at its market value when exercised. EF lends its share investment to a third party for a fixed period in return for a fee. No sale proceeds, carrying amounts or detailed contract terms are supplied.",
    ),
    question: text("هل يستبعد كل طرف استثماره؟ اشرح أثر سعر الخيار وطبيعة قرض الأسهم، وحدود الاستنتاج من النص المختصر.", "Does either party derecognise its investment? Explain the option price, the securities loan and the limits of the brief facts."),
    solution: [
      text("إذا انتقلت حقوق الأصل وبقي خيار AB عند سعر السوق الحقيقي وقت إعادة الشراء دون شرط آخر يبقي تعرضها، فإن المشتري يتحمل تغير قيمة السهم ويؤيد ذلك الاستبعاد. سبب النتيجة انتقال معظم المخاطر والعوائد، لا مجرد كون إعادة الشراء اختيارية؛ خيار ثابت السعر أو عميق الربحية قد يغير التقييم. لا يمكن حساب ربح بيع دون المقابل والقيمة الدفترية.", "If asset rights have transferred and AB's call is at genuine future market value with no other retained exposure, the buyer bears share-price changes and derecognition is supported. The reason is transfer of substantially all risks and rewards, not merely that repurchase is optional; a fixed-price or deeply in-the-money call could change the assessment. No sale gain can be calculated without proceeds and carrying amount."),
      text("وصف EF بأنه قرض أسهم مؤقت مقابل رسم يشير إلى توقع رد الأسهم نفسها أو ما يعادلها؛ إذا أكدت الشروط ذلك، تحتفظ EF عادة بمعظم المخاطر والعوائد وتستمر في إثبات الاستثمار رغم انتقال الحيازة مؤقتًا. إن كانت شروط الرد أو نقل التعرض مختلفة، فيلزم اختبارها قبل حكم نهائي أو قيد.", "EF's temporary stock loan for a fee suggests return of the same or substantially the same shares. If its terms confirm that, EF normally retains substantially all risks and rewards and continues to recognise the investment despite temporary transfer of possession. Different return or exposure terms require reassessment before a definitive entry."),
    ],
    reference: "IFRS 9.3.2.3–3.2.6, B3.2.4–B3.2.5",
  },
  {
    id: "ifrs-book2-convertible-loan-sppi",
    standardCode: "IFRS 9",
    title: text("قرض قابل للتحويل: هل تدفقاته أصل وفائدة فقط؟", "Convertible loan: are its cash flows solely principal and interest?"),
    facts: text(
      "يسأل تمرين الصفحة 210 عن استثمار في قرض قابل للتحويل إلى أدوات حقوق ملكية، دون تقديم مبالغ أو نسب أو نموذج أعمال للمستثمر. يفترض الجواب أن حق التحويل جوهري وقابل للتنفيذ، ولا يضيف شروطًا رقمية غير مذكورة.",
      "The p210 prompt asks about an investment in a loan convertible into equity instruments. It gives no amounts, rates or investor business model. The answer assumes a substantive exercisable conversion right and adds no unstated numerical terms.",
    ),
    question: text("هل تؤهل الأداة للقياس بالتكلفة المستهلكة؟ وهل يفصل المستثمر خيار التحويل من أصل القرض؟", "Can the instrument qualify for amortised cost? Does the investor separate the conversion option from the loan asset?"),
    solution: [
      text("التكلفة المستهلكة تتطلب معًا محفظة هدفها تحصيل التدفقات، وتدفقات عقدية تمثل أصل المبلغ والفائدة عليه فقط. حق التحويل الجوهري يربط العائد بقيمة حقوق الملكية، فلا يجتاز اختبار التدفقات حتى لو كان المستثمر ينوي الاحتفاظ بالقرض حتى التحويل أو الاستحقاق.", "Amortised cost requires both a hold-to-collect business model and contractual cash flows solely of principal and interest. A substantive conversion right links return to equity value, so the cash-flow test fails even if the holder intends to keep the loan until conversion or maturity."),
      text("في أصل مالي مضيف داخل IFRS 9 يُختبر العقد المركب كله ولا يفصل خيار التحويل لمجرد تطبيق نموذج أصل الدين؛ تكون النتيجة عادة القيمة العادلة عبر الربح أو الخسارة. لا يمكن حساب القيمة العادلة أو الربح من معلومات السؤال وحدها.", "For a financial-asset host within IFRS 9, assess the whole hybrid rather than separating the conversion option for debt-asset classification; the normal result is fair value through profit or loss. No fair value or gain can be calculated from this prompt."),
    ],
    reference: "IFRS 9.4.1.1–4.1.4, 4.3.2, B4.1.7A–B4.1.9",
  },
  {
    id: "ifrs-book2-d-co-collect-business-model",
    standardCode: "IFRS 9",
    title: text("محفظة D: مبيعات محدودة قبل تمويل الإنفاق الرأسمالي", "D's portfolio: limited sales before funding capital expenditure"),
    facts: text(
      "تتوقع D إنفاقًا رأسماليًا نقديًا بعد عشر سنوات، فتستثمر الفائض في أصول مالية قصيرة الأجل وتعيد استثمار المتحصلات عند استحقاقها إلى حين الحاجة للنقد. المبيعات قبل الاستحقاق قليلة القيمة، باستثناء ما قد تبيعه عند زيادة مخاطر الائتمان. لا يحدد التمرين شروط تدفقات كل أصل.",
      "D expects a cash capital-expenditure outflow in ten years. It invests spare cash in short-term financial assets and reinvests their maturity proceeds until the funds are needed. Sales before maturity are insignificant in value except when credit risk rises. The prompt gives no contractual cash-flow terms for individual assets.",
    ),
    question: text("ما هدف نموذج أعمال المحفظة؟ وهل يكفي ذلك وحده للحكم بأن كل أصل فيها بالتكلفة المستهلكة؟", "What is this portfolio's business-model objective? Does that alone prove every asset is at amortised cost?"),
    solution: [
      text("دورة الاحتفاظ حتى الاستحقاق وإعادة استثمار التحصيلات، مع مبيعات مبكرة غير جوهرية أو مرتبطة بارتفاع خطر الائتمان، تدعم نموذج الاحتفاظ لتحصيل التدفقات التعاقدية. وجود حاجة نقدية بعد عشر سنوات لا يجعل البيع هدفًا ملازمًا للمحفظة.", "Holding assets to maturity and reinvesting collections, with only insignificant early sales or sales prompted by increased credit risk, supports a hold-to-collect model. A funding need in ten years does not itself make selling an integral portfolio objective."),
      text("تحديد نموذج الأعمال خطوة واحدة فقط: التكلفة المستهلكة لكل أصل تتطلب أيضًا نجاح اختبار أصل المبلغ والفائدة على رصيده. إن فشلت تدفقات أصل معين، فلا تُستنتج تكلفته المستهلكة من وصف المحفظة، ولا يمكن تحديد مبلغ قياس دون شروطه وقيمته.", "Business model is only one test: amortised cost for each asset also requires solely principal-and-interest cash flows. If an asset fails that contractual test, the portfolio description cannot make it amortised cost, and no measured amount follows without its terms and value."),
    ],
    reference: "IFRS 9.4.1.1–4.1.2, B4.1.1–B4.1.4",
  },
  {
    id: "ifrs-book2-indexed-bond-hybrid-host",
    standardCode: "IFRS 9",
    title: text("سند مرتبط بمؤشر أسهم: من هو صاحب العقد المضيف؟", "Equity-indexed bond: whose host contract is it?"),
    facts: text(
      "توضح الصفحة 229 سندًا يستحق بعد خمس سنوات ويعتمد جزء من مبلغ استرداده على ارتفاع مؤشر FTSE 100، وترسم المضيف كسند بالتكلفة المستهلكة وخيار المؤشر كمشتق منفصل. كما تذكر عقد إنشاء مسعرًا بعملة أجنبية دون بيان عملة النشاط أو عملة التسعير المعتادة أو وجود رافعة أو خيار. لا تقدم الصفحة سعر إصدار أو تدفقات محددة.",
      "Scanned p229 describes a five-year bond whose redemption partly depends on a rise in the FTSE 100 and depicts an amortised-cost bond host with a separate index option. It also mentions a foreign-currency-priced construction contract without identifying functional currency, routinely used pricing currency, leverage or option features. No issue price or specified cash flows are supplied.",
    ),
    question: text("هل يطبق فصل الرسم على حامل السند ومصدره معًا؟ وهل تُفصل عملة عقد الإنشاء تلقائيًا؟", "Does the diagram's bifurcation apply to both holder and issuer? Is the construction contract's currency feature automatically separated?"),
    solution: [
      text("بالنسبة إلى مستثمر يحمل سندًا يمثل أصلًا ماليًا ضمن IFRS 9، يفحص العقد المختلط كله؛ تعرض التدفقات لارتفاع مؤشر أسهم يفشل عادة اختبار أصل المبلغ والفائدة ويقود إلى القيمة العادلة عبر الربح أو الخسارة دون فصل الخيار. فلا ينطبق رسم «سند بالتكلفة المستهلكة + خيار منفصل» على هذا الحامل.", "For a holder whose bond is a financial asset within IFRS 9, assess the entire hybrid. Equity-index exposure normally fails solely-principal-and-interest cash flows and leads to fair value through profit or loss without splitting the option. The diagram's 'amortised-cost bond plus separate option' does not apply to that holder."),
      text("لدى المصدر، المضيف التزام مالي لا أصل مالي؛ قد يفصل الخيار المرتبط بالمؤشر إذا لم يكن وثيق الصلة، واستوفى تعريف المشتق، ولم يقس العقد كله بالقيمة العادلة عبر الربح أو الخسارة. عقد الإنشاء غير المالي يحتاج اختبار شروط العملة للارتباط الوثيق قبل الفصل؛ مجرد العملة الأجنبية لا يكفي. لا يمكن حساب قيم أو قيود دون الشروط والأسعار الغائبة.", "For the issuer, the host is a liability rather than a financial asset. Bifurcation may apply if the index feature is not closely related, would be a derivative on its own, and the entire hybrid is not at FVPL. A non-financial construction host needs the foreign-currency close-relationship test before splitting; currency denomination alone is insufficient. Values and entries cannot be calculated without the omitted terms and prices."),
    ],
    reference: "IFRS 9.4.1.2–4.1.4, 4.3.2–4.3.5, B4.3.5(a), B4.3.8(d)",
  },
  {
    id: "ifrs-book2-oil-inventory-fair-value-hedge",
    standardCode: "IFRS 9",
    title: text("مخزون نفط وعقد بيع مستقبلي: أثر التعيين", "Oil inventory and sale future: effect of designation"),
    facts: text(
      "اشترت منشأة في 1 ديسمبر 20X3 مخزونًا من 20,000 غالون نفط بتكلفة 400,000 دولار، وأبرمت عقد بيع مستقبلي لتسليمه في 31 مارس 20X4 بسعر 22 دولارًا للغالون. في 31 ديسمبر 20X3 بلغ السعر الفوري 23 دولارًا، وسعر العقد للتسليم نفسه 24 دولارًا. لا يقدم المصدر وثيقة تعيين التحوط أو صافي القيمة القابلة للتحقق أو مدخلات خصم وهامش. عند مقارنة حالتي المحاسبة، افترض لأغراض حساب تغير العقد أن أسعار المستقبل المعطاة تمثل تغير قيمته العادلة دون أثر خصم جوهري.",
      "On 1 December 20X3 an entity buys 20,000 gallons of oil for $400,000 and sells a future to deliver them on 31 March 20X4 at $22 per gallon. At 31 December 20X3 the spot price is $23 and the same-delivery futures price $24. The source gives no hedge designation document, net realisable value, discount or margin inputs. For comparing accounting treatments, assume the quoted futures-price movement represents the derivative fair-value change without material discount effect.",
    ),
    question: text("ما أثر العقد دون محاسبة التحوط؟ وما أثر تحوط قيمة عادلة مؤهل إذا ثبت تغير الخطر المعين من 20 إلى 23 دولارًا؟", "What is the futures effect without hedge accounting? What changes for a qualifying fair value hedge if the designated risk rises from $20 to $23?"),
    solution: [
      text("في الحالتين ينتج من عقد البيع المستقبلي خسارة قيمة عادلة (24 − 22) × 20,000 = 40,000 دولار؛ مدين خسارة في الربح أو الخسارة ودائن التزام مشتق. دون تعيين تحوط مؤهل لا ترفع المخزون 60,000 لمجرد ارتفاع السوق؛ تطبق قاعدة IAS 2: التكلفة أو صافي القيمة القابلة للتحقق أيهما أقل، ولا تكفي المعطيات لحساب الأخيرة.", "In both scenarios the sale future loses (24 − 22) × 20,000 = $40,000; debit profit-or-loss loss and credit derivative liability. Without a qualifying hedge designation do not uplift inventory by $60,000 merely because spot rose; apply IAS 2's lower of cost and net realisable value, whose latter input is absent."),
      text("إذا وثقت المنشأة عند البداية تحوط قيمة عادلة مؤهل لخطر السعر، وثبت أن سعر 20 دولارًا عند الشراء يمثل قيمة البداية وأن ارتفاع السعر الفوري إلى 23 هو تغير القيمة العادلة المنسوب كله للخطر المعين، تعدل المخزون 20,000 × (23 − 20) = 60,000 مع ربح مقابل في الربح أو الخسارة؛ يصبح الأثر الصافي مع خسارة العقد ربحًا 20,000. لا تعني هذه المعالجة إعادة قياس عامة لكل المخزون بالقيمة العادلة، وإذا اختلفت قيمة البداية أو أثر الخطر فلا يفترض مبلغ 60,000 من التكلفة وحدها.", "If the entity documented an eligible fair value hedge at inception, $20 purchase price represented designation-date value, and the $23 spot quote fully represents the hedged-risk movement, adjust inventory by 20,000 × ($23 − $20) = $60,000 with a profit-or-loss gain. Net of the $40,000 futures loss, profit or loss gains $20,000. This is not general fair-value inventory accounting; if starting fair value or hedged-risk effect differs, $60,000 cannot be inferred from cost alone."),
    ],
    reference: "IFRS 9.6.1.2, 6.4.1, 6.5.2(a), 6.5.8; IAS 2.9",
  },
  {
    id: "ifrs-book2-credito-industry-mortgages",
    standardCode: "IFRS 9",
    title: text("Credito: ركود صناعة ورهون عقارية", "Credito: industry downturn and mortgages"),
    facts: text(
      "يقدم Credito قروضًا شخصية ورهونًا في منطقة تعتمد على صناعة الملابس، وتطلب طلبات الاقتراض قطاع عمل العميل ورمز موقع العقار المرهون. متوسط نسبة القرض إلى قيمة العقار في الرهون 75%. انخفضت إيرادات وأرباح مصانع ملابس عديدة وقد يغلق بعضها. لاحقًا حدد البنك قروضًا تعثرت أو قاربت التعثر. لا تعرض الصفحة احتمالات أو قيم ضمانات محدثة أو تدفقات تحصيل لكل قرض.",
      "Credito lends to consumers and mortgage borrowers in a clothing-industry region, collecting applicants' employment sector and mortgaged-property postcode. Average mortgage loan-to-value is 75%. Several clothing manufacturers have falling revenue and profit and may close. Later the bank identifies specific loans that defaulted or may be about to default. The page supplies no probabilities, updated collateral values or loan-by-loan recovery cash flows.",
    ),
    question: text("كيف يحدد البنك القروض ذات الزيادة الجوهرية في خطر التعثر، وما دور العقار المرهون والقروض التي تعثرت فعلًا؟", "How should the bank find loans with a significant rise in default risk, and how do collateral and actual defaults affect the analysis?"),
    solution: [
      text("قسّم القروض وفق تعرض المقترضين الحقيقي للصناعة، بما في ذلك العاملون لدى المصانع وموردوها وخدماتها ومناطقها عند وجود دليل ارتباط. قارن خطر التعثر الحالي بالخطر عند نشأة كل قرض باستخدام توقعات الإغلاق والدخل والبطالة وسلوك السداد. إذا ثبتت زيادة جوهرية، استخدم خسائر العمر للمجموعة المتأثرة؛ لا تعامل جميع قروض المنطقة تلقائيًا كمرحلة ثانية، ولا تنتظر التأخر إذا دل التوقع على الخطر مبكرًا.", "Segment loans by borrowers' actual exposure to the industry, including manufacturer staff, suppliers, services and local areas where evidence connects them. Compare current default risk with origination risk using closure, income, employment and payment forecasts. Apply lifetime ECL to a segment with a supported significant increase; neither move every regional loan automatically nor wait for arrears if forecasts reveal risk earlier."),
      text("تقدير 75% متوسط قد يدعم استردادًا من الرهن ويخفض مبلغ الخسارة، لكنه لا يحسم خطر التعثر أو قيمة كل عقار. القروض المتعثرة فعلًا تفحص فرديًا كأصول متعثرة ائتمانيًا مع خسائر العمر وفائدة لاحقة على التكلفة المستهلكة؛ «على وشك التعثر» يحتاج دليل حدث ضار بالتدفقات قبل الجزم بالمرحلة الثالثة. لا يمكن تحديد مخصص رقمي بلا احتمالات وتحصلات مخصومة.", "A 75% average loan-to-value may support mortgage recovery and lower loss severity, but it proves neither each property's value nor absence of default risk. Assess defaulted loans individually for credit impairment, lifetime ECL and subsequent interest on amortised cost; 'about to default' needs evidence of a detrimental event before concluding Stage 3. No allowance amount follows without probabilities and discounted recoveries."),
    ],
    reference: "IFRS 9.5.4.1, 5.5.3–5.5.5, 5.5.9, 5.5.17, Appendix A, B5.5.5–B5.5.6",
  },
  {
    id: "ifrs-book2-debita-undrawn-overdraft",
    standardCode: "IFRS 9",
    title: text("Debita: مخصص تسهيلات سحب غير مستخدمة", "Debita: undrawn overdraft allowance"),
    facts: text(
      "وافق Debita في 30 سبتمبر 20X4 على تسهيلات سحب مكشوف غير مستخدمة بقيمة 10 ملايين دولار. منها 8 ملايين بلا زيادة جوهرية في خطر الائتمان، ويتوقع سحب 4 ملايين منها خلال 12 شهرًا مع احتمال تعثر 3%. والـ2 مليون الأخرى زاد خطرها جوهريًا، ويتوقع سحبها كلها خلال العمر المتبقي مع احتمال تعثر 10%. لا يعطي السؤال التدفقات المستحقة بعد السحب أو نسبة الاسترداد أو توقيت التعثر والتحصيل أو أثر الخصم.",
      "At 30 September 20X4 Debita has $10 million approved but undrawn overdraft facilities. For $8 million without a significant credit-risk increase, $4 million is expected to be drawn within twelve months with 3% default probability. For the other $2 million with significant deterioration, all $2 million is expected to be drawn over the remaining life with 10% default probability. The prompt gives no post-draw contractual and recovery cash flows, default/collection timing or discount effect.",
    ),
    question: text("فسر مبلغ 320,000 دولار المطبوع، وهل يثبت منه مخصص IFRS 9 نهائي؟", "Explain the printed $320,000 and whether the facts establish a final IFRS 9 allowance."),
    solution: [
      text("إذا افترض أن الخسارة عند التعثر تساوي كامل مبلغ السحب ولا استرداد ولا أثر خصم، يعطي الجزء الأول 4,000,000 × 3% = 120,000 دولار خسائر 12 شهرًا، والجزء الثاني 2,000,000 × 10% = 200,000 خسائر عمر؛ المجموع التعليمي 320,000. لا تضرب الـ10 ملايين كلها في نسبة واحدة، ولا تخلط أفق السحب في المرحلتين.", "If loss on default equals the entire expected draw with no recovery or discount effect, the first portion gives $4,000,000 × 3% = $120,000 twelve-month ECL and the second $2,000,000 × 10% = $200,000 lifetime ECL, totalling the illustrative $320,000. Do not apply one rate to all $10 million or mix the two draw horizons."),
      text("القيمتان 120,000 و200,000 قبل افتراض الخسارة الكاملة ليستا إلا تعرضين مرجحين بالتعثر؛ يلزم تقدير عجز النقد المخصوم بعد التحصيلات والضمانات وربما مدة تعرض السحب المكشوف الدوار. لذلك لا تدعم المعطيات مخصصًا نهائيًا قدره 320,000 أو قيدًا دقيقًا؛ يثبت المخصص المناسب للتسهيل كالتزام عند اكتمال قياسه.", "Before assuming total loss, $120,000 and $200,000 are default-weighted exposures, not measured shortfalls. Estimate discounted losses after collections and collateral, and consider the risk-exposure period of a revolving overdraft. Thus the facts do not establish a final $320,000 allowance or precise entry; recognise the measured commitment provision as a liability."),
    ],
    reference: "IFRS 9.5.5.1, 5.5.3–5.5.5, 5.5.17, 5.5.20, B5.5.30–B5.5.31",
  },
  {
    id: "ifrs-book2-kredco-detco-due-date",
    standardCode: "IFRS 9",
    title: text("Kredco وDetco: تاريخ الاستحقاق قبل شريحة التأخر", "Kredco and Detco: due date before overdue bucket"),
    facts: text(
      "باعت Kredco إلى Detco على الحساب بمبلغ 200,000 دولار في 1 يونيو 20X4 بشروط ائتمان وصفت بأنها 60 يومًا. مصفوفة Kredco تعطي 1% للذمم غير المتأخرة و5% للمتأخرة من 1 إلى 30 يومًا. لم تدفع Detco بحلول 31 يوليو، وعلمت Kredco أنها تواجه صعوبة نقدية جدية لفقد عميل رئيسي، رغم تطمينات موظف مالي لديها. لا يحدد المصدر نص تاريخ الاستحقاق التعاقدي أو معايرة النسب للخسارة بعد الاسترداد.",
      "Kredco sells $200,000 on credit to Detco on 1 June 20X4 under terms described as sixty days. Kredco's matrix has a 1% current bucket and a 5% bucket for one to thirty days past due. Detco has not paid by 31 July, and Kredco learns of serious cash difficulty after loss of a major customer despite reassurance from its finance controller. The source does not give the contractual due-date wording or whether rates are calibrated for recoveries.",
    ),
    question: text("ما قيد المخصص الأولي، وهل تكفي الوقائع لإثبات زيادة 8,000 دولار في 31 يوليو؟", "What is the initial allowance entry, and do the facts justify a further $8,000 on 31 July?"),
    solution: [
      text("إذا كان معدل 1% معدل خسارة عمر معايرًا، يثبت في 1 يونيو ذمم مدينة وإيرادًا 200,000 دولار، ومصروف خسائر ائتمانية مقابل مخصص 2,000 = 200,000 × 1%. المصفوفة المبسطة تبدأ بخسائر العمر عند نشأة ذمة تجارية مؤهلة.", "If the 1% is a calibrated lifetime loss rate, on 1 June recognise $200,000 receivable and revenue, plus $2,000 ECL expense and allowance (1% × $200,000). The eligible trade receivable starts with lifetime ECL under the simplified approach."),
      text("حدد أولًا تاريخ الاستحقاق الفعلي: إذا حل في 31 يوليو، عدم السداد بنهاية ذلك اليوم لا يثبت بالضرورة يومًا كاملًا من التأخر، أما استحقاق 30 يوليو فقد يدخل شريحة 1–30 يومًا. وإذا كان معدل 5% يمثل الخسارة المناسبة فعلًا، يصبح الرصيد المطلوب 10,000 ويضاف 8,000 إلى المخصص القائم. لكن الصعوبة النقدية الخاصة بـDetco قد تجعل معدل المجموعة غير ممثل؛ عدل الخسارة المتوقعة بمعلومات العميل والتحصيلات، فلا تفرض زيادة 8,000 قطعيًا من النص المختصر.", "First establish the actual due date: if it is 31 July, nonpayment by that day's end need not mean a full day past due, whereas a 30 July due date could put it in the one-to-thirty-day bucket. If 5% is truly the appropriate loss rate, target allowance is $10,000 and the increment is $8,000. But Detco's specific cash difficulties may make the group rate unrepresentative; adjust expected loss for customer evidence and recoveries, so the brief facts do not establish an unconditional $8,000 increase."),
    ],
    reference: "IFRS 9.5.5.8, 5.5.15–5.5.17, Appendix A, B5.5.35",
  },
  {
    id: "ifrs-book2-orange-lemon-ecl-stages",
    standardCode: "IFRS 9",
    title: text("Orange وLemon: خسائر 12 شهرًا والعمر", "Orange and Lemon: twelve-month and lifetime ECL"),
    facts: text(
      "منحت Orange قرضًا بفائدة مدته ثلاث سنوات إلى Lemon بمبلغ مليوني دولار في 1 يوليو 20X4. عند البداية قُدر خطر التعثر خلال 12 شهرًا بـ2%، وفي باقي المدة بـ5.5%، والخسارة إذا وقع التعثر بـ800,000 دولار. في 31 ديسمبر 20X4 أصبحت النسبتان 3.5% و10.5% والخسارة 750,000 دولار. في 31 ديسمبر 20X5 أصبحتا 1.5% و1% والخسارة 450,000 دولار. لا تحدد الصفحات هل نسب الفترات غير متداخلة وغير مشروطة، ولا توقيت العجز أو قيمة الخسارة المخصومة، ولا مقارنة الخطر على أفق ثابت.",
      "Orange advances a three-year interest-bearing $2 million loan to Lemon on 1 July 20X4. Initially it estimates 2% default risk in the next twelve months, 5.5% in the remaining term and $800,000 loss if default occurs. At 31 December 20X4 the respective figures are 3.5%, 10.5% and $750,000; at 31 December 20X5 they are 1.5%, 1% and $450,000. The pages do not specify whether period percentages are non-overlapping unconditional probabilities, when shortfalls occur, whether loss amounts are discounted, or a fixed-horizon risk comparison.",
    ),
    question: text("بيّن أرقام المخصص التعليمية في التواريخ الثلاثة، وحدد الشروط اللازمة لاعتمادها وفق IFRS 9.", "Show the three illustrative allowance amounts and identify the IFRS 9 conditions needed to rely on them."),
    solution: [
      text("في البداية، إن كانت 800,000 دولار تمثل القيمة الحالية للعجز الناشئ عند التعثر في الاثني عشر شهرًا القادمة، وكان احتمال 2% مناسبًا، فمخصص 12 شهرًا التوضيحي = 16,000 دولار. لا يعني هذا حصر العجز النقدي في أول 12 شهرًا؛ توقيت التعثر هو المحدد.", "At inception, if $800,000 is the present value of all shortfalls arising from a default in the next twelve months and 2% is the relevant probability, illustrative twelve-month ECL is $16,000. This does not restrict the ensuing cash shortfalls to twelve months; it restricts default timing."),
      text("في 31 ديسمبر 20X4، لا يكفي جمع 3.5% و10.5% ومقارنته بـ7.5% في تاريخ مختلف لإثبات زيادة جوهرية؛ يلزم مقارنة خطر التعثر على أفق متسق منذ البداية ومعلومات مستقبلية. إذا ثبتت الزيادة وكانت النسبتان احتمالين هامشيين غير متداخلين والخسارة 750,000 قيمة حالية ممثلة لكل مسار، يكون مخصص العمر التوضيحي (3.5% + 10.5%) × 750,000 = 105,000 دولار. دون تلك الشروط لا تكفي الوقائع لتحديد مبلغ نهائي.", "At 31 December 20X4, summing 3.5% and 10.5% and comparing with 7.5% at a different date does not itself prove a significant increase; compare default risk over a consistent horizon using forward-looking evidence. If significant increase is supported, the percentages are non-overlapping marginal probabilities and $750,000 is a representative present-value loss, illustrative lifetime ECL is (3.5% + 10.5%) × $750,000 = $105,000. Without those conditions the facts cannot establish a final allowance."),
      text("في 31 ديسمبر 20X5، إذا أثبت تقييم مقارن أن الزيادة الجوهرية زالت وأن 450,000 دولار قيمة حالية مناسبة للخسارة الشرطية، يعود المخصص إلى خسائر 12 شهرًا التوضيحية: 1.5% × 450,000 = 6,750 دولارًا. تغير مبلغ الخسارة عند التعثر وحده لا يقرر الانتقال بين المرحلتين؛ وكذلك لا يمكن استخراج مصروف حركة المخصص دون حركات الشطب والسداد والتحديث الأخرى.", "At 31 December 20X5, if a comparable assessment shows significant deterioration has reversed and $450,000 is an appropriate conditional present-value loss, the illustrative twelve-month allowance returns to 1.5% × $450,000 = $6,750. Changed loss severity alone does not decide stages; allowance expense also needs write-offs, collections and other movements."),
    ],
    reference: "IFRS 9.5.5.3–5.5.9, 5.5.17, Appendix A, B5.5.7–B5.5.11, B5.5.43",
  },
  {
    id: "ifrs-book2-abacus-effective-interest",
    standardCode: "IFRS 9",
    title: text("Abacus: العائد الفعلي وخصم السند", "Abacus: effective yield and bond discount"),
    facts: text(
      "اشترت Abacus أصل دين في 1 يناير 20X1 بمبلغ 1,000 دولار، يستحق أصله 1,250 دولار في 31 ديسمبر 20X5، ويدفع سنويًا كوبون 4.72% من المبلغ الاسمي، أي 59 دولارًا. يذكر المصدر عائدًا فعليًا 10% ويعرض جدولًا بالدولار الكامل. افترض تحقق شرط الاحتفاظ للتحصيل واختبار أصل المبلغ والفائدة وعدم وجود خسائر ائتمانية أو تكاليف معاملة إضافية في هذا التوضيح.",
      "Abacus buys a debt asset on 1 January 20X1 for $1,000. Its $1,250 principal matures on 31 December 20X5 and it pays an annual 4.72% coupon on face value, or $59. The source states a 10% effective yield and displays whole-dollar amounts. For this illustration assume hold-to-collect and solely-principal-and-interest conditions, with no credit loss or additional transaction costs.",
    ),
    question: text("احسب دخل الفائدة ورصيد نهاية 20X1، وفسر لماذا لا يغلق تطبيق 10% دون تقريب رصيد السنة الخامسة تمامًا.", "Calculate 20X1 interest income and closing carrying amount. Why does an unrounded 10% calculation leave a small residual after the fifth-year receipt?"),
    solution: [
      text("دخل فائدة 20X1 وفق 10% المعطاة = 1,000 × 10% = 100 دولار، والتحصيل 59 دولارًا، فتزداد القيمة الدفترية إلى 1,041 دولارًا. يمثل الفرق 41 دولارًا إطفاءً لخصم شراء السند؛ دخل الفائدة ليس الكوبون وحده.", "At the stated 10%, 20X1 interest income is $1,000 × 10% = $100. Cash coupon is $59, so carrying amount rises to $1,041. The $41 difference amortises part of the purchase discount; interest income is not just the coupon."),
      text("معدل 10% مقرب: الخصم الدقيق للتدفقات الخمسة، 59 دولارًا سنويًا و1,250 دولارًا في النهاية، إلى سعر 1,000 دولار يعطي نحو 9.99531867%. تطبيق 10% على أرصدة غير مقربة يترك نحو 0.31 دولار بعد استلام 1,309 دولارات في السنة الخامسة. لذلك جدول المصدر بالدولار الكامل توضيحي، ولا يُفسر فرق التقريب أصلًا إضافيًا أو دخلًا جديدًا. باستخدام المعدل الضمني الدقيق يكون رصيد نهاية 20X1 نحو 1,040.95 دولار ويغلق الرصيد بعد التحصيل النهائي.", "The 10% rate is rounded: discounting five $59 coupons plus $1,250 principal to the $1,000 price implies about 9.99531867%. Applying exactly 10% to unrounded balances leaves about $0.31 after the final $1,309 receipt. The source's whole-dollar table is illustrative; that rounding residual is not another asset or a new income item. At the exact implied rate, 20X1 closing amount is about $1,040.95 and the asset clears on final receipt."),
    ],
    reference: "IFRS 9.Appendix A, 4.1.2, 5.4.1",
  },
  {
    id: "ifrs-book2-wolf-equity-transaction-costs",
    standardCode: "IFRS 9",
    title: text("Wolf: أسهم متاجرة أم اختيار الدخل الشامل الآخر؟", "Wolf: trading shares or an OCI election?"),
    facts: text(
      "اشترت Wolf في يناير 20X6 عشرة ملايين سهم مدرج في Hall بسعر 5 دولارات للسهم، وتكبدت 3 ملايين دولار تكاليف معاملة. في 30 نوفمبر 20X6 بلغ السعر 6.50 دولارات للسهم؛ واستلمت في 31 أكتوبر توزيعات قدرها 0.20 دولار للسهم. قارن بين (أ) الاحتفاظ للمتاجرة و(ب) الاحتفاظ لدخل التوزيعات مع اختيار غير قابل للنقض عند الاعتراف الأولي لعرض تغير القيمة العادلة في الدخل الشامل الآخر. افترض أن التوزيع ليس بوضوح استردادًا لجزء من تكلفة الاستثمار.",
      "In January 20X6 Wolf buys ten million listed Hall shares at $5 each and pays $3 million in transaction costs. The 30 November 20X6 quote is $6.50 per share; on 31 October it receives a $0.20 per-share dividend. Compare (a) held for trading with (b) held for dividend income and an irrevocable fair-value-change OCI election at initial recognition. Assume the dividend is not clearly a recovery of part of investment cost.",
    ),
    question: text("اعرض قيمة الاستثمار ودخل التوزيعات وأثر تغير السعر والتكاليف في الحالتين بالملايين.", "Show investment carrying value, dividend income, price movement and transaction-cost effects in both cases, in millions."),
    solution: [
      text("للمتاجرة: يثبت الاستثمار أولًا بـ50 مليون دولار وتحمّل تكاليف المعاملة 3 ملايين على الربح أو الخسارة. في 30 نوفمبر يساوي 65 مليونًا؛ ربح القيمة العادلة 15 مليونًا في الربح أو الخسارة، والتوزيعات 2 مليون فيه أيضًا. صافي البنود الثلاثة في ربح أو خسارة الفترة = 14 مليونًا، مع أصل ختامي 65 مليونًا.", "Trading: initially recognise the asset at $50 million and expense $3 million transaction costs in profit or loss. At 30 November it is $65 million: $15 million fair-value gain and $2 million dividend income enter profit or loss. These three items net to $14 million in period profit or loss, with a $65 million closing asset."),
      text("مع اختيار الدخل الشامل الآخر المؤهل: قيمة البداية 53 مليون دولار شاملة تكاليف المعاملة، وقيمة الإقفال 65 مليونًا، فيثبت فرق 12 مليونًا في الدخل الشامل الآخر. دخل التوزيعات 2 مليون في الربح أو الخسارة. لا تحمل تكاليف 3 ملايين كمصروف منفصل في البداية ولا تعرض ربح سعر مقداره 15 مليونًا في الدخل الشامل الآخر؛ الزيادة من القيمة الدفترية الأولية هي 12 مليونًا.", "With the eligible OCI election: initial carrying amount is $53 million including transaction costs and closing fair value is $65 million, so $12 million goes to OCI. The $2 million dividend is in profit or loss. Do not separately expense the $3 million at inception or report a $15 million OCI gain; the increase from initial carrying amount is $12 million."),
    ],
    reference: "IFRS 9.5.1.1, 5.7.1A, 5.7.5–5.7.6, B5.2.2",
  },
  {
    id: "ifrs-book2-dazzle-zero-coupon-finance-cost",
    standardCode: "IFRS 9",
    title: text("Dazzle: فائدة فعلية لسند بلا كوبون", "Dazzle: effective interest on a zero-coupon note"),
    facts: text(
      "أصدرت Dazzle في 1 يناير 20X3 سندات قرض بمتحصل اسمي 600,000 دولار وتكلفة إصدار مباشرة 200 دولار. لا تحمل كوبونًا، وتسترد في 31 ديسمبر 20X4 بمبلغ 752,389 دولارًا، وهو الأصل مضافًا إليه علاوة الاسترداد 152,389 دولارًا. يعطي السؤال معدل فائدة فعلي 12%، ويفترض قياس الالتزام بالتكلفة المستهلكة دون تعديل أو استرداد مبكر.",
      "On 1 January 20X3 Dazzle issues notes for $600,000 and pays $200 directly attributable issue costs. They have no coupon and are redeemed on 31 December 20X4 for $752,389, including a $152,389 premium. The question supplies a 12% effective rate and assumes amortised-cost liability measurement without modification or early repayment.",
    ),
    question: text("ما تكلفة التمويل لسنة 20X4؟ وضّح الرصيد الأولي ورصيد نهاية 20X3.", "What is the 20X4 finance cost? Show initial and end-20X3 carrying amounts."),
    solution: [
      text("المتحصل الصافي والتزام البداية = 600,000 − 200 = 599,800 دولار. تكلفة تمويل 20X3 = 599,800 × 12% = 71,976، ولا يوجد كوبون نقدي، فيصبح رصيد نهاية 20X3 مبلغ 671,776.", "Net proceeds and initial liability = $600,000 − $200 = $599,800. The 20X3 finance cost is $599,800 × 12% = $71,976. With no cash coupon, end-20X3 carrying amount is $671,776."),
      text("تكلفة تمويل 20X4 = 671,776 × 12% = 80,613.12 دولار، أي 80,613 بالدولار الكامل. الرصيد قبل السداد 752,389.12 تقريبًا مقابل سداد 752,389؛ فرق 0.12 دولار من تقريب المعدل/المبلغ ولا يغير أن العلاوة وتكاليف الإصدار تُوزع بالفائدة الفعلية.", "The 20X4 finance cost is $671,776 × 12% = $80,613.12, or $80,613 in whole dollars. The pre-payment balance is about $752,389.12 versus the $752,389 redemption; the $0.12 residual reflects rate/amount rounding, not a separate gain. Effective interest allocates both redemption premium and issue costs."),
    ],
    reference: "IFRS 9.4.2.1, 5.1.1, 5.4.1, Appendix A",
  },
  {
    id: "ifrs-book2-seven-year-note-total-finance-cost",
    standardCode: "IFRS 9",
    title: text("سند سبع سنوات: إجمالي تكلفة التمويل", "Seven-year note: total finance cost"),
    facts: text(
      "أصدرت منشأة في 1 يناير 20X1 سندًا اسميًا بمبلغ 6,000,000 دولار وكوبون سنوي 3.5%. بلغت تكاليف الإصدار المباشرة 120,000 دولار ويسترد السند في 31 ديسمبر 20X7 بعلاوة 1,100,000 دولار. افترض دفع الكوبونات السبعة في نهاية كل سنة واستمرار السند حتى الاسترداد دون تعديل.",
      "On 1 January 20X1 an entity issues a $6,000,000 face-value note with a 3.5% annual coupon. Direct issue costs are $120,000 and it is redeemed on 31 December 20X7 at a $1,100,000 premium. Assume seven year-end coupons and no modification before redemption.",
    ),
    question: text("احسب إجمالي تكلفة التمويل على عمر السند، وراجع مجموع المصدر المطبوع.", "Calculate total finance cost over the note's life and check the source's printed total."),
    solution: [
      text("المتحصل الصافي أولًا = 6,000,000 − 120,000 = 5,880,000 دولار. كل كوبون 6,000,000 × 3.5% = 210,000؛ مجموع سبعة كوبونات = 1,470,000. مبلغ الاسترداد = 7,100,000. لذلك إجمالي تكلفة التمويل = 7,100,000 + 1,470,000 − 5,880,000 = 2,690,000 دولار، بما فيه تكلفة الإصدار والعلاوة.", "Initial net proceeds are $6,000,000 − $120,000 = $5,880,000. Each coupon is $210,000; seven coupons total $1,470,000. Redemption is $7,100,000. Lifetime finance cost is therefore $7,100,000 + $1,470,000 − $5,880,000 = $2,690,000, including issue cost and premium."),
      text("المجموع 2,690,600 المطبوع في الصفحة يزيد 600 دولار عن جمع بنوده نفسها؛ والقيد الدوري يحتاج حساب معدل الفائدة الفعلي، الذي لم يعطه السؤال. لا توزع إجمالي التكلفة بالتساوي افتراضًا.", "The printed $2,690,600 total exceeds its own components by $600; the period-by-period entry would require an effective-rate calculation not supplied by the prompt. Do not assume straight-line allocation of the total."),
    ],
    reference: "IFRS 9.4.2.1, 5.1.1, 5.4.1, Appendix A",
  },
  {
    id: "ifrs-book2-mn-preference-shares-options",
    standardCode: "IAS 32",
    title: text("MN: أسهم ممتازة وخيارات أسهم مباعة", "MN: preference shares and sold share options"),
    facts: text(
      "أصدرت MN خلال السنة المنتهية في 28 فبراير 20X5 أداتين: (1) أسهمًا ممتازة بمعدل معلن 8% قابلة للاسترداد في 28 فبراير 20X9 بعلاوة 10%؛ (2) خيارات أسهم باعتها، ويمكن ممارستها من 28 فبراير 20X8. لا يورد السؤال من يملك قرار الاسترداد، وهل التوزيعات إلزامية، ولا سعر ممارسة الخيارات أو عدد الأسهم أو التسوية أو وجود خدمة مقابلة.",
      "In the year ended 28 February 20X5 MN issues (1) 8% preference shares redeemable on 28 February 20X9 at a 10% premium and (2) sold share options exercisable from 28 February 20X8. The prompt does not say who controls redemption, whether distributions are mandatory, or the option exercise price, share count, settlement and whether services were received.",
    ),
    question: text("ما الذي يمكن الجزم به في تصنيف كل أداة، وما شروط العقد اللازمة لإكمال الحكم؟", "What can be concluded about each instrument's classification, and which missing terms decide the rest?"),
    solution: [
      text("إذا كان على MN استرداد الأسهم الممتازة نقدًا في التاريخ المحدد، ينشأ مكوّن التزام، وتقاس تكلفة التمويل وفق شروطه؛ أما استرداد تملكه MN وحدها فلا ينشئ الالتزام بذاته. افحص 8%: التوزيع الإلزامي يضاف إلى خصائص الالتزام، بينما قد يكون الاختياري مكوّن حقوق ملكية. لا تكفي كلمة «قابلة للاسترداد» وحدها للجزم بأن الأداة كلها دين.", "If MN must redeem the preference shares for cash on that date, a liability component exists and finance cost follows its terms; redemption solely at MN's discretion does not itself impose the obligation. Test whether the 8% distributions are mandatory or discretionary. The label 'redeemable' alone does not prove the entire instrument is debt."),
      text("الخيار المباع لمستثمر قد يكون حقوق ملكية إذا لزم تبادل مبلغ ثابت بعملة المنشأة الوظيفية مقابل عدد ثابت من أسهم MN دون بديل نقدي؛ وإلا قد يكون التزامًا أو مشتقًا. لا يمكن تصنيفه قطعيًا من تاريخ الممارسة وحده، ولا يُنسب تلقائيًا إلى IFRS 2 دون سلع أو خدمات مستلمة لقاء الخيار.", "A sold investor option may be equity if it exchanges fixed consideration in functional currency for a fixed number of MN shares with no cash alternative; otherwise it may be a liability or derivative. Exercise date alone cannot settle classification, and IFRS 2 does not automatically apply without goods or services received for the option."),
    ],
    reference: "IAS 32.11, 16–22, 28–32, AG27(a); IFRS 2.2, Appendix A",
  },
  {
    id: "ifrs-book2-efg-convertible-bond",
    standardCode: "IAS 32",
    title: text("EFG: خيار تحويل سند ومعاملات خصم مقربة", "EFG: bond conversion option and rounded discount factors"),
    facts: text(
      "أصدرت EFG في 1 يناير 20X1 عدد 10,000 سند قابل للتحويل بقيمة اسمية 50 دولارًا للسند، وكوبون 5% سنويًا متأخرًا، ويسترد في 1 يناير 20X6 إن لم يحول. للحامل خيار التحويل خلال السنوات الخمس. عائد دين مماثل بلا تحويل 6%، ومعاملات السؤال المقربة: 0.747 لدولار بعد خمس سنوات و4.212 لدفعات سنوية. لا يذكر المصدر عدد الأسهم عند التحويل أو بديل التسوية؛ افترض لأجل تقسيم حقوق الملكية تحقق شرط مبلغ ثابت مقابل عدد ثابت وعدم التسوية النقدية.",
      "On 1 January 20X1 EFG issues 10,000 convertible bonds at $50 face each, with a 5% annual arrears coupon and 1 January 20X6 redemption if unconverted. The holder may convert during five years. Comparable debt without conversion yields 6%; the question supplies rounded five-year factors of 0.747 for $1 due and 4.212 for annuity payments. Share count and settlement alternatives are absent; for an equity split, assume fixed-for-fixed conversion with no cash settlement option.",
    ),
    question: text("احسب مكوّن الدين والخيار عند الإصدار بمعاملات السؤال، ثم بيّن أثر استخدام معاملات دقيقة وحدود التصنيف.", "Value the initial liability and option using the supplied factors, then explain precise-factor rounding and classification limits."),
    solution: [
      text("المتحصل 500,000 دولار والكوبون السنوي 25,000. مكوّن الدين بمعاملات المصدر = 500,000 × 0.747 + 25,000 × 4.212 = 478,800 دولار، والباقي للخيار في حقوق الملكية = 21,200 دولار عند تحقق شرط التحويل المفترض.", "Proceeds are $500,000 and annual coupon $25,000. Using the supplied factors, liability = $500,000 × 0.747 + $25,000 × 4.212 = $478,800, leaving a $21,200 equity option if the assumed conversion terms qualify."),
      text("بمعاملات 6% غير المقربة يبلغ مكوّن الدين نحو 478,938.18 دولار والخيار نحو 21,061.82؛ الاختلاف تقريب لا تغيير في القاعدة. إن كان عدد الأسهم أو المقابل متغيرًا أو وجدت تسوية نقدية، يعاد تقييم تصنيف الخيار قبل إثباته في حقوق الملكية؛ لا توفر الصفحة هذه الشروط.", "At unrounded 6% factors the liability is about $478,938.18 and residual option about $21,061.82; the difference is factor rounding, not a different principle. Variable shares, variable consideration or cash settlement would require reassessing option classification before recording equity; the page omits those terms."),
    ],
    reference: "IAS 32.16, 22, 28–32, AG30–AG35; IFRS 9.5.4.1",
  },
  {
    id: "ifrs-book2-rathbone-compound-bond",
    standardCode: "IAS 32",
    title: text("Rathbone: قيمة خيار تحويل السند", "Rathbone: value of a bond conversion option"),
    facts: text(
      "في بداية 20X2 أصدرت Rathbone عدد 2,000 سند قابل للتحويل بقيمة اسمية ومتحصل 1,000 دولار لكل سند. مدته ثلاث سنوات وكوبونه 6% سنويًا في نهاية السنة، ويحوّل كل سند إلى 250 سهمًا عاديًا عند اختيار الحامل خلال مدته. عائد دين مشابه بلا تحويل 9%. سعر السهم عند الإصدار 3 دولارات والتوزيع المتوقع 0.14 دولار للسهم. افترض استيفاء خيار التحويل شرط مبلغ ثابت مقابل عدد ثابت وعدم وجود بديل تسوية نقدية أو تكاليف إصدار.",
      "At the start of 20X2 Rathbone issues 2,000 convertible bonds for $1,000 each, equal to face value. The term is three years, coupon 6% annually in arrears, and each bond converts at the holder's option into 250 ordinary shares during its term. Comparable debt without conversion yields 9%. Issue-date share price is $3 and expected dividend $0.14 a share. Assume a fixed-for-fixed option, no alternative cash settlement and no issue costs.",
    ),
    question: text("ما قيمة مكون حقوق الملكية لخيار التحويل عند الإصدار؟ احسب مكون الدين أولًا، وبيّن أثر تقريب معاملات الخصم.", "What is the issue-date equity component of the conversion option? Value the debt first and explain the effect of rounded discount factors."),
    solution: [
      text("متحصل الإصدار 2,000,000 دولار والكوبون السنوي 120,000. بسعر 9%، القيمة الحالية للأصل 1,544,366.96 والكوبونات 303,755.36، فيساوي مكون الالتزام 1,848,122.32 دولار.", "Proceeds are $2,000,000 and annual coupon $120,000. At 9%, principal present value is $1,544,366.96 and coupons $303,755.36, giving a $1,848,122.32 liability component."),
      text("مكون خيار التحويل = 2,000,000 − 1,848,122.32 = 151,877.68 دولار ضمن حقوق الملكية. معاملات خصم مختصرة 0.772 للأصل و2.531 للكوبونات تعطي تقريبًا 152,280 للخيار؛ لا تختلط فروق التقريب مع فروق التصنيف. سعر السهم والتوزيع المتوقع ليسا مدخلين لهذا التخصيص بطريقة الباقي.", "Residual equity option = $2,000,000 − $1,848,122.32 = $151,877.68. Shortened factors of 0.772 for principal and 2.531 for coupons give about $152,280 for the option; do not mistake factor rounding for a classification difference. Share price and expected dividend do not enter this residual allocation."),
    ],
    reference: "IAS 32.16, 22, 28–32, AG30–AG35; IFRS 9.5.4.1",
  },
  {
    id: "ifrs-book2-redblack-receivables-matrix",
    standardCode: "IFRS 9",
    title: text("Redblack: مصفوفة خسائر الذمم لسنتين", "Redblack: two-year receivables loss matrix"),
    facts: text(
      "في 30 يونيو 20X4 كانت أرصدة الذمم بالملايين حسب فئات التأخر (جارية، 1–30، 31–60، 61–90، أكثر من 90 يومًا): 30، 15، 8، 5، 2؛ والمعدلات المقابلة 0.3%، 1.6%، 3.6%، 6.6%، 10.6%. في 30 يونيو 20X5 صارت الأرصدة 32، 16، 10، 7، 3؛ والمعدلات 0.5%، 1.8%، 3.8%، 7%، 11%. لأغراض الحساب افترض أن النسب معدلات خسارة متوقعة على مدى العمر بعد معايرة الاسترداد والمعلومات المستقبلية، وأن مخصص 20X4 لم يتأثر بالشطب أو الاستخدام أو حركات أخرى.",
      "At 30 June 20X4, receivables balances in millions by ageing bucket (current, 1–30, 31–60, 61–90 and over 90 days overdue) are 30, 15, 8, 5 and 2; corresponding rates are 0.3%, 1.6%, 3.6%, 6.6% and 10.6%. At 30 June 20X5, balances are 32, 16, 10, 7 and 3; rates are 0.5%, 1.8%, 3.8%, 7% and 11%. For calculation assume calibrated lifetime expected-loss rates after recoveries and forward-looking information, and no write-offs, utilisation or other movements in the 20X4 allowance.",
    ),
    question: text("احسب مخصص كل تاريخ وقيد التغير في 20X5. ماذا يتغير لو كانت النسب احتمالات تعثر مجردة؟", "Calculate the allowance at each date and the 20X5 movement entry. What changes if the rates are only default probabilities?"),
    solution: [
      text("بالآلاف: مخصص 20X4 = 90 + 240 + 288 + 330 + 212 = 1,160. مخصص 20X5 = 160 + 288 + 380 + 490 + 330 = 1,648. تختلف الشرائح ومعدلاتها، لذلك لا تستخدم معدلًا موحدًا على 68 مليونًا.", "In $000, the 20X4 allowance is 90 + 240 + 288 + 330 + 212 = 1,160. The 20X5 allowance is 160 + 288 + 380 + 490 + 330 = 1,648. Bucket balances and rates differ, so do not apply one blanket rate to $68m."),
      text("في ظل فرض عدم حركات أخرى، الزيادة 488,000 دولار: مدين مصروف خسائر ائتمانية متوقعة ودائن مخصص خسائر الذمم. إن كانت النسب احتمالات تعثر فقط، فلا يكفي ضربها في الرصيد؛ يلزم تقدير العجز النقدي بعد الاسترداد وتوقيته، ولا تُستنتج قيمة خسارة قطعية من هذه البيانات وحدها.", "With no other movements, the $488,000 increase is a debit to ECL expense and a credit to receivables loss allowance. If rates are only default probabilities, multiplying them by gross balances is insufficient: estimate the cash shortfall after recoveries and its timing, so no definitive ECL amount follows from these data alone."),
    ],
    reference: "IFRS 9.5.5.15–5.5.17, B5.5.35; IFRS 7.35N",
  },
  {
    id: "ifrs-book2-plyman-accumulating-sick-leave",
    standardCode: "IAS 19",
    title: text("Plyman: قياس الإجازة المرضية المرحلة", "Plyman: measuring carried-forward sick leave"),
    facts: text(
      "لدى الشركة 100 موظف، لكل واحد خمسة أيام مرضية مدفوعة في السنة. يرحّل غير المستخدم لسنة واحدة، لكن أيام السنة الجديدة تستهلك أولًا. رصيد نهاية 20X8 المتوسط يومان لكل موظف. في السنة التالية يتوقع أن يستخدم 92 موظفًا خمسة أيام أو أقل، وأن يستخدم الثمانية الآخرون 6.5 أيام لكل منهم. لم يذكر أجر اليوم.",
      "The entity has 100 employees, each with five paid sick days annually. Unused days carry forward one year, but new-year days are consumed first. The average unused balance at the end of 20X8 is two days per employee. Next year, 92 employees are expected to use no more than five days and the other eight 6.5 days each. No daily pay rate is given.",
    ),
    question: text(
      "كم يومًا من الإجازات المرحلة يدخل في قياس الالتزام؟ ولماذا لا تساوي التكلفة كامل رصيد الأيام؟",
      "How many carried-forward days enter the liability measurement, and why does the expense differ from the full balance?",
    ),
    solution: [
      text("الرصيد النظري 200 يوم، لكنه ليس مقياس المدفوعات الإضافية المتوقعة. الـ92 موظفًا لا يتجاوزون حق السنة الجديدة، فلا يستهلكون من الرصيد القديم. الثمانية الآخرون يتجاوزونه بواقع 1.5 يوم لكل منهم: 8 × 1.5 = 12 يومًا.", "The nominal balance is 200 days, but that is not the measure of expected incremental payments. The 92 employees stay within the new-year allowance and use no old entitlement. The other eight exceed it by 1.5 days each: 8 × 1.5 = 12 days."),
      text("يثبت مصروف والتزام بقدر أجر 12 يومًا في 20X8، إذا تحققت هذه التوقعات. لا يمكن تحديد مبلغ نقدي أو كتابة قيد برقم عملة دون معدل أجر اليوم.", "Recognise an expense and liability for 12 days of pay in 20X8 on these estimates. A currency amount cannot be computed without a daily pay rate."),
    ],
    reference: "IAS 19.13–17",
  },
  {
    id: "ifrs-book2-factory-termination-retention",
    standardCode: "IAS 19",
    title: text("إغلاق مصنع: تعويض إنهاء أم مكافأة بقاء؟", "Factory closure: termination pay or retention bonus?"),
    facts: text(
      "قررت منشأة إغلاق مصنع بعد عشرة أشهر. سيحصل كل من يغادر قبل الإغلاق على 10,000 وحدة نقد، بينما من يظل ويعمل حتى الإغلاق يحصل على 30,000. يعمل بها 120 شخصًا؛ يتوقع أن يغادر 20 مبكرًا ويبقى 100. افترض تحقق شروط الاعتراف بمزايا الإنهاء عند إعلان الخطة، وأن الزيادة مقابل الخدمة منفعة قصيرة الأجل دون خصم.",
      "An entity plans to close a factory in ten months. Each employee leaving before closure receives CU10,000, while each who works until closure receives CU30,000. There are 120 employees; 20 are expected to leave early and 100 to stay. Assume termination-benefit recognition criteria are met when the plan is announced and the service increment is a short-term benefit without discounting.",
    ),
    question: text(
      "حلل التدفق المتوقع بين مزايا الإنهاء والخدمة، وحدد توقيت الاعتراف والمصروف الشهري المبدئي.",
      "Split expected cash flows between termination and service benefits, and determine recognition timing and the initial monthly expense.",
    ),
    solution: [
      text("التدفق المتوقع 20 × 10,000 + 100 × 30,000 = 3,200,000. مبلغ 10,000 لكل من 120 موظفًا مستحق بسبب إنهاء العمل بغض النظر عن البقاء، فينشأ جزء إنهاء 1,200,000 عند تحقق شرط الاعتراف؛ لا يؤجل كله للعشرة أشهر.", "Expected outflow is 20 × CU10,000 + 100 × CU30,000 = CU3,200,000. CU10,000 for each of 120 employees is attributable to termination regardless of staying, so recognise a CU1,200,000 termination component when its recognition trigger occurs; do not defer it all for ten months."),
      text("الزيادة 20,000 × 100 المتوقع بقاؤهم = 2,000,000 مقابل خدمة مستقبلية. يثبت مبدئيًا 200,000 شهريًا عبر عشرة أشهر مع تحديث تقدير البقاء؛ لا تُسجل كامل 3,200,000 عند إعلان الخطة.", "The CU20,000 increment for 100 expected stayers is CU2,000,000 for future service. Accrue initially CU200,000 monthly over ten months, revising expected retention; do not expense the entire CU3,200,000 on announcement."),
    ],
    reference: "IAS 19.11, 159–170; IAS 37.72–83",
  },
  {
    id: "ifrs-book2-parker-warranty-expected-value",
    standardCode: "IAS 37",
    title: text(
      "Parker: مخصص الضمان لمجموعة مبيعات",
      "Parker: warranty provision for a sales population",
    ),
    facts: text(
      "باعت Parker Co منتجات بضمان أداء ستة أشهر. التقدير المستند إلى الخبرة: 75% بلا عيوب، 20% بإصلاحات بسيطة، 5% بإصلاحات كبيرة. لو أصابت العيوب البسيطة جميع السلع لبلغت كلفة إصلاحها مليون دولار، ولو أصابتها العيوب الكبيرة كلها لبلغت 4 ملايين دولار. يفترض أن الضمان لتأكيد المطابقة لا خدمة مستقلة، وأن الخصم غير جوهري.",
      "Parker Co sold products with a six-month performance warranty. Experience estimates 75% with no defects, 20% needing minor repairs and 5% major repairs. Minor repairs for the entire population would cost $1 million; major repairs for all items would cost $4 million. Assume an assurance rather than a separate service warranty and immaterial discounting.",
    ),
    question: text(
      "ما أفضل تقدير لمخصص الضمان؟ بيّن أثر كل نتيجة محتملة والقيد عند الاعتراف.",
      "What is the best estimate of the warranty provision? Show each outcome's contribution and the recognition entry.",
    ),
    solution: [
      text(
        "تكلفة فئة بلا عيوب = 75% × صفر = صفر؛ البسيطة = 20% × 1,000,000 = 200,000؛ الكبيرة = 5% × 4,000,000 = 200,000. إجمالي القيمة المتوقعة = 400,000 دولار.",
        "No-defect cost = 75% × nil = nil; minor = 20% × $1,000,000 = $200,000; major = 5% × $4,000,000 = $200,000. Total expected value is $400,000.",
      ),
      text(
        "مدين مصروف الضمان 400,000 ودائن مخصص الضمان 400,000. تراجع الشركة الاحتمالات والتكلفة المتوقعة في الإقفالات اللاحقة؛ عدم يقين مطالبة عميل منفرد لا يلغي التزام المجموعة.",
        "Debit warranty expense $400,000 and credit warranty provision $400,000. Reassess probabilities and expected costs at later closes; uncertainty over one customer's claim does not remove the population-level obligation.",
      ),
    ],
    reference: "IAS 37.14, 24, 36–40; IFRS 15.B28–B33",
  },
  {
    id: "ifrs-book2-leaf-onerous-construction",
    standardCode: "IAS 37",
    title: text(
      "Leaf: عقد إنشاء خاسر مع خيار تعويض الانسحاب",
      "Leaf: loss-making construction contract with an exit penalty",
    ),
    facts: text(
      "تعاقدت Leaf Co على إنشاء أصل بمقابل ثابت 100,000 دولار، وتقدر تكاليف التنفيذ المرتبطة مباشرة بالعقد بـ120,000 دولار. يلزمها العقد بتعويض العميل 30,000 دولار إذا انسحبت. تأمل الشركة الحصول على أعمال مستقبلية منفصلة من العميل، لكن لا يضمنها العقد. يفترض عدم وجود أصول مرتبطة بالعقد تتطلب إثبات انخفاض قبل المخصص وعدم جوهرية الخصم.",
      "Leaf Co contracts to build an asset for a fixed $100,000, with estimated directly related fulfilment costs of $120,000. Exiting requires $30,000 compensation to the customer. It hopes for separate future business, which this contract does not guarantee. Assume no related asset needs impairment before the provision and discounting is immaterial.",
    ),
    question: text(
      "احسب مخصص العقد المرهق واشرح لماذا لا يساوي كامل تكلفة الإنشاء أو غرامة الانسحاب.",
      "Calculate the onerous-contract provision and explain why it is neither the full construction cost nor the exit penalty.",
    ),
    solution: [
      text(
        "الوفاء يسبب خسارة صافية 120,000 − 100,000 = 20,000، بينما الانسحاب يكلف 30,000. المبلغ الأقل الذي لا يمكن تجنبه هو 20,000 دولار، فيثبت مخصص بهذا المبلغ.",
        "Fulfilment causes a $120,000 − $100,000 = $20,000 net loss, while exit costs $30,000. The lower unavoidable amount is $20,000, recognised as a provision.",
      ),
      text(
        "مدين خسارة عقد مرهق 20,000 ودائن المخصص 20,000. لا تدخل مكاسب أعمال مستقبلية غير مضمونة في منافع هذا العقد؛ ولو وجدت أصول مرتبطة به لاختبر انخفاضها أولًا وفق IAS 36.",
        "Debit onerous-contract loss $20,000 and credit provision $20,000. Unguaranteed future work is not a benefit of this contract; if related assets existed, test their impairment first under IAS 36.",
      ),
    ],
    reference: "IAS 37.66–69; IAS 36.9",
  },
  {
    id: "ifrs-book2-ias37-provision-trigger-matrix",
    standardCode: "IAS 37",
    title: text(
      "أربع وقائع: متى ينشأ التزام يجيز المخصص؟",
      "Four situations: when does a provision-triggering obligation arise?",
    ),
    facts: text(
      "قارن أربع وقائع مستقلة عند 31 ديسمبر 20X9: (أ) قرر مجلس الإدارة إغلاق قسم في 13 ديسمبر ولم يبلغ المتأثرين ولم يبدأ التنفيذ؛ (ب) اعتمد المجلس خطة إغلاق تفصيلية في 20 ديسمبر وأبلغ الموظفين والعملاء بسماتها الرئيسية؛ (ج) لحق ضرر بيئي فعلي بالمنشأة وعليها التزام قائم بتنظيفه؛ (د) تعتزم المنشأة إنفاق مبالغ مستقبلًا لتغيير أسلوب عملها، ولم يحدث بعد ما يلزمها بذلك. لا توجد مبالغ أو احتمالات قياس معطاة.",
      "Compare four independent facts at 31 December 20X9: (a) on 13 December the board decided to close a division but neither informed affected parties nor began implementation; (b) on 20 December it approved a detailed closure plan and communicated its main features to employees and customers; (c) environmental damage has already occurred and the entity has a present clean-up obligation; (d) it intends future expenditure to change how it operates, with no obligating action yet. No measurement amounts or probabilities are supplied.",
    ),
    question: text(
      "حدد في كل واقعة هل يوجد أساس للاعتراف بمخصص، وما الشروط الإضافية اللازمة قبل تسجيل رقم.",
      "For each situation, determine whether a provision has a recognition basis and what further conditions are needed before recording an amount.",
    ),
    solution: [
      text(
        "(أ) لا التزام ضمنيًا من قرار داخلي غير معلن وحده، فلا مخصص. (ب) الخطة التفصيلية مع إعلان سماتها للمتأثرين قد تنشئ توقعًا صحيحًا والتزامًا ضمنيًا؛ يتحقق أيضًا من احتمال خروج الموارد وموثوقية التقدير، ويقتصر المبلغ على التكاليف المباشرة الضرورية لإعادة الهيكلة.",
        "(a) An uncommunicated internal decision alone creates no constructive obligation, so no provision. (b) A detailed plan communicated to those affected can create a valid expectation and constructive obligation; also assess probable outflow and reliable estimate, and include only necessary direct restructuring costs.",
      ),
      text(
        "(ج) الضرر السابق مع التزام التنظيف الحالي يوفر الحدث الملزم؛ يثبت مخصص إذا رجح خروج الموارد وأمكن تقدير المبلغ. (د) الإنفاق المتوقع لتشغيل مختلف في المستقبل يمكن تجنبه بتغيير التصرفات، ولا ينشئ في ذاته التزامًا حاليًا. لا يمكن حساب مبلغ لأي من الوقائع من البيانات المقدمة.",
        "(c) Past damage plus a present clean-up obligation supplies the obligating event; recognise a provision if outflow is probable and estimable. (d) Planned future operating expenditure can be avoided through future action and creates no present obligation by itself. No monetary amount can be computed from these facts.",
      ),
    ],
    reference: "IAS 37.14–22, 63–83",
  },
  {
    id: "ifrs-book2-doug-development-threshold",
    standardCode: "IAS 38",
    title: text(
      "Doug Co: متى تبدأ رسملة مشروع التطوير؟",
      "Doug Co: when does development capitalisation begin?",
    ),
    facts: text(
      "أنفقت Doug Co خلال 20X3 مبلغ 100,000 دولار لتطوير عملية إنتاج؛ تكبدت 90,000 قبل 1 ديسمبر و10,000 من 1 إلى 31 ديسمبر. استطاعت في 1 ديسمبر لأول مرة إثبات جميع معايير الاعتراف بأصل غير ملموس، وقدرت القيمة القابلة للاسترداد للمعرفة الفنية بـ50,000 في نهاية السنة.",
      "In 20X3 Doug Co spent $100,000 developing a production process: $90,000 before 1 December and $10,000 from 1 to 31 December. On 1 December it could first demonstrate all intangible-asset recognition criteria. At year-end, the know-how's recoverable amount was estimated at $50,000.",
    ),
    question: text(
      "كم من الإنفاق يُعترف به أصلًا في 31 ديسمبر، وكم يُحمل على المصروف؟ هل تسمح القيمة القابلة للاسترداد برسملة النفقات السابقة؟",
      "How much expenditure is recognised as an asset at 31 December and how much is expensed? Can the recoverable amount justify capitalising earlier expenditure?",
    ),
    solution: [
      text(
        "يُعترف بأصل تطوير 10,000 دولار فقط، وهي النفقة منذ تاريخ تحقق جميع الشروط. تحمل 90,000 دولار السابقة على مصروف 20X3 ولا يُعاد إثباتها أصلًا بأثر رجعي.",
        "Recognise only the $10,000 incurred from the date all criteria were demonstrated as development cost. Expense the earlier $90,000 in 20X3; it is not reinstated retrospectively.",
      ),
      text(
        "القيمة القابلة للاسترداد البالغة 50,000 ليست تكلفة الأصل ولا تسمح برفعه إليها؛ وعلى الأرقام المعطاة لا تشير إلى انخفاض عن التكلفة المعترف بها. لا يُحسب إهلاك دون تاريخ إتاحة الأصل للاستخدام وعمره النافع.",
        "The $50,000 recoverable amount is not asset cost and does not uplift the asset to that amount; the supplied figures do not suggest impairment below recognised cost. Amortisation cannot be calculated without an available-for-use date and useful life.",
      ),
    ],
    reference: "IAS 38.54–57, 65–67, 71; IAS 36.18",
  },
  {
    id: "ifrs-book2-intangible-downward-revaluation",
    standardCode: "IAS 38",
    title: text(
      "هبوط إعادة تقييم أصل غير ملموس بعد تكوين فائض",
      "Intangible downward revaluation after a previous surplus",
    ),
    facts: text(
      "تطبق منشأة نموذج إعادة تقييم مسموحًا لأصل غير ملموس بافتراض وجود سوق نشط. بلغ فائض إعادة التقييم الخاص بالأصل 400 دولار بعد زيادة في 20X3. في نهاية 20X4 انخفضت قيمته الدفترية 500 دولار، ولا توجد تغيرات أخرى في الفائض.",
      "An entity applies a permitted revaluation model to an intangible, assuming an active market. A 20X3 increase created a $400 surplus for that asset. At the end of 20X4 its carrying amount must decrease by $500, with no other surplus movements.",
    ),
    question: text(
      "وزع هبوط 500 دولار بين الدخل الشامل الآخر والربح أو الخسارة، وبين أثره على فائض إعادة التقييم.",
      "Allocate the $500 decrease between other comprehensive income and profit or loss, and state its effect on the revaluation surplus.",
    ),
    solution: [
      text(
        "يثبت 400 دولار من الانخفاض في الدخل الشامل الآخر ويخفض رصيد فائض هذا الأصل إلى صفر، ويثبت 100 دولار المتبقية خسارة في الربح أو الخسارة. القيد المجمع: مدين الدخل الشامل الآخر 400 ومدين خسارة إعادة التقييم 100؛ دائن الأصل 500.",
        "Recognise $400 of the decrease in other comprehensive income, reducing this asset's surplus to nil, and the remaining $100 as a loss in profit or loss. Combined entry: debit OCI $400 and revaluation loss $100; credit the asset $500.",
      ),
      text(
        "هذه النتيجة تفترض أن نموذج إعادة التقييم متاح لوجود سوق نشط، وأن الـ400 تتعلق بالأصل نفسه. لا يُسحب من فائض أصل آخر.",
        "This assumes an active market permits revaluation and that the $400 belongs to this same asset. Another asset's surplus cannot be used.",
      ),
    ],
    reference: "IAS 38.75–78, 86",
  },
  {
    id: "ifrs-book2-capital-sale-leaseback",
    standardCode: "IFRS 16",
    title: text(
      "Capital: بيع آلة وإعادة استئجارها مع فصل الربح والإهلاك",
      "Capital: machine sale-and-leaseback with gain and depreciation separated",
    ),
    facts: text(
      "في 1 أبريل 20X7 باعت Capital آلة قيمتها الدفترية 300,000 دولار مقابل قيمتها العادلة 400,000، ثم استأجرتها فورًا لخمس سنوات هي عمرها النافع المتبقي. دفعات الإيجار 90,000 سنويًا في نهاية كل سنة، ومعدل الفائدة 5%. معامل القيمة الحالية المعطى لخمس دفعات = 4.329، وهو معامل مقرب. يفترض السؤال أن نقل الأصل بيع وفق IFRS 15 وأن شروط البيع والإيجار سوقية، ولا توجد عناصر تعاقدية أخرى.",
      "On 1 April 20X7 Capital sells a machine with a $300,000 carrying amount at its $400,000 fair value and immediately leases it back for five years, equal to its remaining useful life. Annual lease payments of $90,000 are due in arrears at 5%. The supplied five-payment present-value factor is 4.329, a rounded factor. Assume the transfer qualifies as a sale under IFRS 15, sale and lease terms are at market, and there are no other contract components.",
    ),
    question: text(
      "احسب قيد البيع وإعادة الاستئجار، والمكسب الذي يجوز إثباته، وأثر السنة المنتهية في 31 مارس 20X8 على الربح أو الخسارة والقيمة الدفترية لحق الاستخدام والتزام الإيجار.",
      "Calculate the sale-and-leaseback entry, recognisable gain, and the year to 31 March 20X8 effects on profit or loss and the carrying amounts of the right-of-use asset and lease liability.",
    ),
    solution: [
      text(
        "القيمة الحالية لدفعات الإيجار وفق المعامل المعطى = 90,000 × 4.329 = 389,610. نسبة الحق المحتفظ به = 389,610 ÷ 400,000 = 97.4025%. أصل حق الاستخدام عند البدء = 300,000 × 97.4025% = 292,207.50 دولار.",
        "Present value using the supplied factor = $90,000 × 4.329 = $389,610. The retained-right proportion is $389,610 ÷ $400,000 = 97.4025%; the opening right-of-use asset is $300,000 × 97.4025% = $292,207.50.",
      ),
      text(
        "الربح الإجمالي لو بيع الأصل دون احتفاظ بحق = 400,000 − 300,000 = 100,000. لا يعترف من هذا الربح إلا بالجزء المنقول للمشتري-المؤجر: 100,000 × (400,000 − 389,610) ÷ 400,000 = 2,597.50 دولار. قيد البدء: مدين نقدية 400,000 وحق استخدام 292,207.50؛ دائن الآلة 300,000 والتزام الإيجار 389,610 ومكسب الحقوق المنقولة 2,597.50.",
        "The gain on an outright transfer would be $400,000 − $300,000 = $100,000. Only the transferred-right portion is recognised: $100,000 × ($400,000 − $389,610) ÷ $400,000 = $2,597.50. Opening entry: debit cash $400,000 and right-of-use asset $292,207.50; credit machine $300,000, lease liability $389,610 and transferred-right gain $2,597.50.",
      ),
      text(
        "في السنة الأولى: إهلاك حق الاستخدام = 292,207.50 ÷ 5 = 58,441.50، وفائدة الالتزام = 389,610 × 5% = 19,480.50. بعد دفع 90,000 يصبح الالتزام في 31 مارس 20X8 = 389,610 + 19,480.50 − 90,000 = 319,090.50. القيمة الدفترية لحق الاستخدام بعد الإهلاك = 292,207.50 − 58,441.50 = 233,766.00، وليست قيمته عند البدء.",
        "In year one, right-of-use depreciation is $292,207.50 ÷ 5 = $58,441.50 and interest is $389,610 × 5% = $19,480.50. After the $90,000 payment, the 31 March 20X8 liability is $389,610 + $19,480.50 − $90,000 = $319,090.50. The right-of-use asset's carrying amount after depreciation is $292,207.50 − $58,441.50 = $233,766.00, not its opening amount.",
      ),
      text(
        "للتصنيف في 31 مارس 20X8، فائدة السنة التالية بالتقريب للسنتات = 319,090.50 × 5% = 15,954.53. الجزء الذي يسدد من أصل الالتزام خلال 12 شهرًا = 90,000 − 15,954.53 = 74,045.47 متداول، والمتبقي 245,045.03 غير متداول؛ مجموعهما 319,090.50. أثر الربح أو الخسارة خلال السنة: مكسب 2,597.50، ومصروف إهلاك 58,441.50، ومصروف تمويل 19,480.50.",
        "For classification at 31 March 20X8, next year's interest rounded to cents is $319,090.50 × 5% = $15,954.53. Principal due within 12 months is $90,000 − $15,954.53 = $74,045.47 current, leaving $245,045.03 non-current; these total $319,090.50. Year-one profit or loss includes a $2,597.50 gain, $58,441.50 depreciation expense and $19,480.50 finance cost.",
      ),
    ],
    reference: "IFRS 16.29–36, 98–102A; IFRS 15.31–38",
  },
  {
    id: "ifrs-book2-minimart-cgu",
    standardCode: "IAS 36",
    title: text(
      "Minimart: هل المتجر وحدة توليد نقد مستقلة؟",
      "Minimart: is one store a separate cash-generating unit?",
    ),
    facts: text(
      "تشتري Minimart بضائعها عبر مركز شراء مجموعة Maximart، وتحدد المجموعة الأسعار والتسويق والإعلان وسياسات العاملين. لدى المجموعة خمسة متاجر أخرى في أحياء مختلفة بالمدينة وعشرون متجرًا في مدن أخرى. يبدو أن لكل موقع قاعدة عملاء مختلفة، وقد نشأت شهرة عند شراء بعض المتاجر. لا تتضمن الوقائع بيانات تدفقات نقدية رقمية لكل متجر.",
      "Minimart buys goods through its parent Maximart's central purchasing function, while the group sets pricing, marketing, advertising and staff policies. Maximart has five other stores in different neighbourhoods of the city and twenty in other cities. Each location appears to have a different customer base, and goodwill arose when some stores were acquired. The facts provide no numerical cash flows by store.",
    ),
    question: text(
      "ما العوامل التي تفحصها المجموعة لتحديد هل Minimart وحدة توليد نقد منفصلة لاختبار انخفاض القيمة؟ وهل المركزية الإدارية تمنع ذلك تلقائيًا؟",
      "What factors determine whether Minimart is a separate cash-generating unit for impairment testing? Does centralised management automatically prevent that conclusion?",
    ),
    solution: [
      text(
        "الاختبار الأساسي هو أصغر مجموعة أصول تولد تدفقات نقدية داخلة من أطراف خارجية مستقلة إلى حد كبير عن تدفقات الوحدات الأخرى. افحص مبيعات عملاء المتجر، وتداخل قواعد العملاء مع المتاجر المجاورة، وكيف تراقب الإدارة الأداء وتتخذ قرارات استمرار كل موقع أو إغلاقه.",
        "The primary test is the smallest asset group generating cash inflows from external parties that are largely independent of other units' inflows. Examine customer receipts, overlap with neighbouring stores, and how management monitors performance and decides whether each location continues or closes.",
      ),
      text(
        "الشراء والإعلان والتسعير المركزيان قد يشاركون في التكاليف والقرارات، لكن استقلال التدفقات الداخلة أهم من استقلال المصروفات. وجود أحياء وقواعد عملاء مختلفة يدعم — ولا يثبت قطعيًا — أن Minimart وحدة مستقلة؛ يلزم فحص الوقائع الفعلية قبل تحديد حدود الوحدة.",
        "Central purchasing, advertising and pricing may share costs and decisions, but independence of cash inflows matters more than independence of outflows. Different neighbourhoods and customer bases support, but do not conclusively prove, a separate Minimart unit; actual facts must be assessed.",
      ),
      text(
        "وجود شهرة من شراء المتاجر لا يحسم حدود وحدة توليد النقد ولا يعني توزيعها تلقائيًا بالتساوي؛ يخصص اختبار الشهرة إلى الوحدة أو مجموعة الوحدات التي يُتوقع أن تنتفع من منافع التجميع وفق ضوابط IAS 36.",
        "Goodwill from acquiring stores does not by itself fix CGU boundaries or require equal allocation; impairment testing allocates it to the unit or group expected to benefit from combination synergies under IAS 36.",
      ),
    ],
    reference: "IAS 36.6, 66–69, 80–87",
  },
  {
    id: "ifrs-book2-arturo-asset-grant",
    standardCode: "IAS 20",
    title: text("Arturo: منحة آلة وإهلاكها", "Arturo: machine grant and depreciation"),
    facts: text(
      "حصلت Arturo على منحة حكومية تمثل 50% من تكلفة آلة تبلغ 40,000 دولار. عمر الآلة أربع سنوات وقيمتها المتبقية صفر. يعرض السؤال احتمالين لطريقة الإهلاك: القسط الثابت، أو 40% من الرصيد المتناقص مع إهلاك كامل المتبقي في السنة الرابعة. افترض تحقق التأكيد المعقول بشروط المنحة واختيار عرضها دخلًا مؤجلًا.",
      "Arturo receives a government grant equal to 50% of a $40,000 machine's cost. The machine has a four-year life and nil residual value. The question compares straight-line depreciation with 40% reducing balance and a final-year charge for the remaining balance. Assume reasonable assurance about grant conditions and deferred-income presentation.",
    ),
    question: text(
      "ما إيراد المنحة الذي يقابل إهلاك كل سنة في كل من طريقتَي الإهلاك؟",
      "What grant income corresponds to each year's depreciation under each method?",
    ),
    solution: [
      text(
        "قيمة المنحة = 40,000 × 50% = 20,000 دولار. في القسط الثابت، الإهلاك 10,000 سنويًا لأربع سنوات، ويحرر من الدخل المؤجل 5,000 في كل سنة.",
        "Grant amount = $40,000 × 50% = $20,000. Under straight line, depreciation is $10,000 annually for four years and $5,000 of deferred grant is released each year.",
      ),
      text(
        "عند 40% من الرصيد المتناقص، الإهلاك للسنوات الأربع = 16,000؛ 9,600؛ 5,760؛ ثم المتبقي 8,640 في السنة الأخيرة. يقابلها إيراد منحة = 8,000؛ 4,800؛ 2,880؛ 4,320. مجموع الإهلاك 40,000 ومجموع المنحة 20,000.",
        "Under 40% reducing balance, depreciation is $16,000, $9,600, $5,760 and the $8,640 remaining in the final year. Corresponding grant income is $8,000, $4,800, $2,880 and $4,320. Total depreciation is $40,000 and total grant income $20,000.",
      ),
      text(
        "إذا اختير بدلًا من ذلك خصم المنحة من الأصل، يصبح الأساس الصافي 20,000 ويظهر أثر المنحة في مصروف إهلاك أقل، لا في إيراد منحة منفصل. يلزم تطبيق سياسة العرض المختارة باتساق.",
        "If the grant is instead deducted from the asset, the net depreciable base is $20,000 and the grant affects lower depreciation rather than separate grant income. Apply the selected presentation policy consistently.",
      ),
    ],
    reference: "IAS 20.7, 12, 24–27; IAS 16.50–62",
  },
  {
    id: "ifrs-book2-acruni-general-borrowings",
    standardCode: "IAS 23",
    title: text("Acruni: رسملة فائدة قرضين عامين", "Acruni: capitalising two general loans"),
    facts: text(
      "خلال سنة 20X6 كان لدى Acruni قرضان عامان ثابتان: 120 مليون دولار بمعدل 10% و80 مليونًا بمعدل 9.5%. بدأت في 1 يناير إنشاء آلة مؤهلة للرسملة، وأنفقت 30 مليونًا يوم البدء ثم 20 مليونًا في 1 أكتوبر. افترض استمرار الأنشطة اللازمة خلال السنة وعدم وجود قروض مخصصة أو توقف ممتد.",
      "Throughout 20X6 Acruni has two general loans outstanding: $120m at 10% and $80m at 9.5%. It begins constructing a qualifying machine on 1 January, spending $30m then and another $20m on 1 October. Assume necessary activities continue all year, with no specific borrowing or extended suspension.",
    ),
    question: text(
      "احسب نسبة الرسملة وتكلفة الاقتراض التي تضاف إلى تكلفة الآلة في 20X6، مع إظهار أثر توقيت دفعة أكتوبر.",
      "Calculate the capitalisation rate and borrowing cost added to the machine in 20X6, showing the time weighting of the October expenditure.",
    ),
    solution: [
      text(
        "إجمالي فائدة القرضين = 120 × 10% + 80 × 9.5% = 19.6 مليون، وإجمالي أصل القروض 200 مليون؛ نسبة الرسملة المرجحة = 19.6 ÷ 200 = 9.8%.",
        "Interest on both loans = $120m × 10% + $80m × 9.5% = $19.6m; loan principal totals $200m, so the weighted capitalisation rate is 19.6 ÷ 200 = 9.8%.",
      ),
      text(
        "تكلفة إنفاق يناير = 30 × 9.8% × 12÷12 = 2.94 مليون؛ وتكلفة إنفاق أكتوبر = 20 × 9.8% × 3÷12 = 0.49 مليون. المبلغ المرسمل = 3.43 مليون دولار، وهو دون فائدة السنة الفعلية 19.6 مليون.",
        "January spending contributes $30m × 9.8% × 12÷12 = $2.94m; October spending contributes $20m × 9.8% × 3÷12 = $0.49m. Capitalised cost is $3.43m, below actual annual interest of $19.6m.",
      ),
      text(
        "يضاف 3.43 مليون إلى الآلة تحت الإنشاء، ولا تعامل دفعة أكتوبر كأنها قائمة طوال السنة. إذا لم توجد أصول مؤهلة أخرى، يعترف بباقي الفائدة 16.17 مليون كمصروف.",
        "Add $3.43m to the machine under construction rather than treating October's spending as outstanding all year. If there are no other qualifying assets, the remaining $16.17m is expensed.",
      ),
    ],
    reference: "IAS 23.8, 14, 17–18",
  },
  {
    id: "ifrs-book2-jameson-consignment",
    standardCode: "IFRS 15",
    title: text(
      "Jameson: مجوهرات لدى تاجر على سبيل الأمانة",
      "Jameson: jewellery held by a dealer on consignment",
    ),
    facts: text(
      "تعرض Jameson مجوهرات صنعتها Rochester. تحتفظ Rochester بحق تعديل سعر البيع، وتسترد القطع غير المبيعة بعد تسعة أشهر، وينتقل سند الملكية منها مباشرة إلى المشتري النهائي. دفعت Jameson وديعة كبيرة تخصم عند البيع أو ترد كاملة عند إعادة القطع، ولا تدفع باقي الثمن إلا إذا باعت القطع للعملاء.",
      "Jameson displays jewellery made by Rochester. Rochester can change selling prices, recalls unsold items after nine months and transfers legal title directly to the final buyer. Jameson pays a large deposit that is offset on sale or refunded in full on return, and owes the remaining amount only when the jewellery is sold to customers.",
    ),
    question: text(
      "هل تعرض Jameson المجوهرات في مخزونها قبل بيعها للمستهلك، وما أثر الوديعة القابلة للرد؟",
      "Should Jameson include the jewellery in its inventory before sale to the final customer, and what is the effect of the refundable deposit?",
    ),
    solution: [
      text(
        "الحيازة المادية والوديعة لا تثبتان انتقال السيطرة. تحتفظ Rochester بتحديد السعر ومخاطر عدم البيع، ويمكنها استرداد القطع، ولا ينشأ على Jameson التزام غير مشروط بسداد ثمنها. هذه مؤشرات قوية على ترتيب أمانة وفق IFRS 15.B77–B78.",
        "Physical possession and a deposit do not establish transfer of control. Rochester retains pricing discretion and unsold-goods risk, can recover the items, and Jameson has no unconditional duty to pay their price. These strongly indicate consignment under IFRS 15.B77–B78.",
      ),
      text(
        "لذلك لا تُدرج Jameson القطع في مخزونها قبل انتقال السيطرة، وتبقى لدى Rochester محاسبيًا. الوديعة القابلة للرد تُقيّم كحق استرداد منفصل، لا كتكلفة مخزون لم تحصل Jameson على السيطرة عليه. يحدد عقد التاجر لاحقًا ما إذا كان إيراد Jameson عمولة بصفته وكيلًا أم مقابلًا إجماليًا بعد فحص السيطرة على الخدمة أو السلعة الموعودة.",
        "Jameson therefore does not recognise the jewellery as its inventory before obtaining control; it remains Rochester's inventory. The refundable deposit is assessed as a separate recovery right, not inventory cost for goods Jameson does not control. The dealer contract then determines whether Jameson's own revenue is a commission as agent or gross consideration after assessing control of the promised good or service.",
      ),
    ],
    reference: "IFRS 15.B34–B38, B77–B78",
  },
  {
    id: "ifrs-book2-ifrs15-fancy-goods-agent",
    standardCode: "IFRS 15",
    title: text("Fancy Goods: منصة ترتب البيع بعمولة", "Fancy Goods: platform arranging sales for a commission"),
    facts: text(
      "تشغل Fancy Goods موقعًا يمكّن العملاء من شراء منتجات موردين متعددين. يحدد الموردون الأسعار ويسلمون المنتجات مباشرة إلى العملاء الذين دفعوا مقدمًا. تسهّل المنصة الدفع وتتقاضى عمولة 5% من سعر البيع، ولا يبقى عليها التزام تجاه العميل بعد ترتيب التوريد.",
      "Fancy Goods operates a website through which customers buy products from different suppliers. Suppliers set the prices and deliver directly to customers who have paid in advance. The platform facilitates payment, earns a 5% commission on the selling price and has no further customer obligation after arranging supply.",
    ),
    question: text(
      "هل تتصرف Fancy Goods أصيلًا أم وكيلًا، وبأي أساس تعرض الإيراد؟",
      "Is Fancy Goods a principal or an agent, and on what basis does it present revenue?",
    ),
    solution: [
      text(
        "حدد أولًا الوعد المحدد: ترتيب تقديم المورد للسلعة. المورد مسؤول عن الوفاء، ويتحمل مخاطر المخزون ويحدد السعر. لا تسيطر Fancy Goods على السلعة قبل نقلها للعميل، فتتصرف وكيلًا؛ وهذه المؤشرات تدعم حكم السيطرة ولا تحل محله.",
        "First identify the specified promise: arranging the supplier's provision of the product. The supplier is responsible for fulfilment, bears inventory risk and sets the price. Fancy Goods does not control the product before customer transfer and acts as agent; the indicators support rather than replace the control assessment.",
      ),
      text(
        "تعترف المنصة بإيراد عمولتها فقط، وهو 5% من سعر البيع عند الوفاء بخدمة الترتيب، لا بكامل متحصلات العميل. لم يحدد السؤال سعر بيع عدديًا أو تفاصيل توقيت التسوية، فلا يُفترض مبلغ أو قيد نقدي غير معطى.",
        "The platform recognises only its 5% commission as revenue when its arranging service is satisfied, not the customer's gross payment. No numerical selling price or settlement timing is provided, so no unsupported amount or cash entry is assumed.",
      ),
    ],
    reference: "IFRS 15.B34–B38",
  },
  {
    id: "ifrs-book2-ifrs15-certified-tower-progress",
    standardCode: "IFRS 15",
    title: text("عقد البرج: الإنجاز المعتمد والحق في المقابل", "Tower contract: certified progress and the right to consideration"),
    facts: text(
      "بدأ عقد بناء في 1 يناير 20X5 بقيمة 1,500,000 دولار، وينتظر إتمامه في 31 ديسمبر 20X6. حتى 31 ديسمبر 20X5 تكبدت المنشأة 600,000 دولار، واكتمل نصف العمل، وأصدرت شهادات بقيمة العمل المنجز 750,000 دولار. تتوقع تكاليف أخرى 600,000 لإتمامه. لا تذكر الوقائع شروط إنهاء العميل للعقد أو أثر الشهادات على استحقاق الدفع أو الفواتير والتحصيل.",
      "A $1,500,000 construction contract begins on 1 January 20X5 and is expected to finish on 31 December 20X6. By 31 December 20X5 the entity has incurred $600,000, completed half the work and obtained work certificates for $750,000. Another $600,000 of cost is expected to complete it. The facts do not state customer termination rights, whether certificates make payment unconditional, or invoicing and cash collections.",
    ),
    question: text(
      "احسب إيراد وربح 20X5 إذا تحقق شرط الاعتراف على مدى الزمن وكانت نسبة 50% مقياس تقدم مناسبًا؛ وهل تثبت الشهادات وحدها حقًا نافذًا في الدفع أو ذممًا مدينة بقيمة 750,000؟",
      "Calculate 20X5 revenue and profit if an over-time criterion is met and 50% appropriately measures progress. Do certificates alone establish an enforceable right to payment or a $750,000 receivable?",
    ),
    solution: [
      text(
        "بشرط تحقق IFRS 15.35 وطريقة تقدم تعكس الأداء، إيراد 20X5 = 1,500,000 × 50% = 750,000 دولار؛ تكلفة الأداء المتكبدة 600,000؛ الربح = 150,000. التكاليف المتوقعة الكلية 1,200,000 تعطي ربحًا متوقعًا 300,000، لكن هذه الأرقام لا تُثبت بذاتها تحقق شرط الاعتراف على مدى الزمن.",
        "Subject to IFRS 15.35 and a faithful progress measure, 20X5 revenue is $1,500,000 × 50% = $750,000, cost is $600,000 and profit is $150,000. Total expected cost of $1,200,000 implies expected profit of $300,000, but these figures alone do not establish over-time eligibility.",
      ),
      text(
        "تُختبر شروط IFRS 15.35(a)–(c): استفادة العميل بالتزامن، أو سيطرته على أصل قيد الإنشاء، أو عدم إمكان استخدام الأصل لغيره مع حق نافذ في مقابل الأداء المنجز. شهادة الـ750,000 قد تساعد في قياس المخرجات، لكنها لا تثبت وحدها حقًا نافذًا طوال مدة العقد؛ يلزم فحص الشروط التعاقدية والقانونية، ولا سيما التعويض عند إنهاء العميل دون إخلال من البائع.",
        "Test IFRS 15.35(a)–(c): simultaneous customer benefit, customer control of the work in progress, or no alternative use plus an enforceable right to payment for performance to date. A $750,000 certificate may support output measurement but does not by itself prove an enforceable right throughout the contract; inspect contract and law, especially compensation on customer termination without seller default.",
      ),
      text(
        "إذا كان الحق في الـ750,000 غير مشروط إلا بمرور الوقت، يعرض ذممًا مدينة حتى لو لم تصدر فاتورة. وإذا كان الحق مشروطًا بأداء إضافي، يعرض أصل عقد. لا تُعطى شروط كافية لاختيار أحد العرضين أو إثبات تحصيل نقدي، كما أن الفرق بين الشهادات والفواتير ليس بذاته أصل العقد.",
        "If the $750,000 right is unconditional except for time, present a receivable even without an invoice. If it depends on further performance, present a contract asset. The facts do not support choosing one presentation or recording cash; certificates less invoices are not automatically a contract asset.",
      ),
    ],
    reference: "IFRS 15.35–40, 105–108, B14–B19",
  },
  {
    id: "ifrs-book2-santolina-contract-profit",
    standardCode: "IFRS 15",
    title: text(
      "Santolina: عقد بناء وبيع طوب مستقل",
      "Santolina: construction contract and separate brick sale",
    ),
    facts: text(
      "في 30 سبتمبر 20X3، يبلغ مقابل عقد بناء 290,000 دولار، والتكلفة المتكبدة 210,450 دولارًا، وقيمة الأداء المنجز المقاسة بصورة مناسبة 230,000 دولار. أصدرت المنشأة فواتير بمبلغ 210,000 وحصلت منها 194,000. وفي معاملة منفصلة نقلت طوبًا تكلفته 10,000 إلى العميل ليستعمله في مشروع آخر لن تنفذه المنشأة، وباعته له بمبلغ 14,000 على الحساب. يفترض الحل تحقق أحد شروط الاعتراف بإيراد البناء على مدى الزمن، وانتقال السيطرة على الطوب في التاريخ المذكور.",
      "At 30 September 20X3 a construction contract has consideration of $290,000, costs incurred of $210,450 and appropriately measured performance to date of $230,000. The entity has invoiced $210,000 and collected $194,000. In a separate transaction it transfers bricks costing $10,000 to the customer for another project the entity will not undertake, selling them on credit for $14,000. The solution assumes an over-time criterion is met for the building work and control of the bricks transfers on that date.",
    ),
    question: text(
      "احسب الإيراد وتكلفة المبيعات والربح الإجمالي، ثم افصل أصل العقد عن الذمم التجارية في قائمة المركز المالي في 30 سبتمبر 20X3. لماذا لا تعد الفواتير أو المتحصلات وحدها مقياسًا للإيراد؟",
      "Calculate revenue, cost of sales and gross profit, then distinguish contract asset from trade receivables at 30 September 20X3. Why do invoices or cash receipts alone not measure revenue?",
    ),
    solution: [
      text(
        "إيراد البناء المعترف به على مدى الزمن = قيمة الأداء المنجز 230,000، وإيراد الطوب عند انتقال السيطرة = 14,000؛ إجمالي الإيراد 244,000 دولار. لا يدخل سعر عقد البناء الكامل 290,000 إيرادًا قبل استيفاء الأداء المقابل.",
        "Over-time construction revenue equals measured performance of $230,000 and brick revenue on control transfer is $14,000; total revenue is $244,000. The full $290,000 construction price is not revenue before the corresponding performance is satisfied.",
      ),
      text(
        "تكلفة المبيعات = تكلفة البناء المتكبدة 210,450 + تكلفة الطوب 10,000 = 220,450 دولارًا. الربح الإجمالي = 244,000 − 220,450 = 23,550 دولارًا.",
        "Cost of sales is $210,450 of incurred construction costs plus $10,000 for the bricks, or $220,450. Gross profit is $244,000 − $220,450 = $23,550.",
      ),
      text(
        "من أداء البناء المنجز لم يصبح 20,000 مستحق الدفع بلا شرط بعد: أصل العقد = 230,000 − 210,000 المفوترة = 20,000 دولار. أما الذمم التجارية غير المحصلة = (210,000 − 194,000) للبناء + 14,000 للطوب = 30,000 دولار، بافتراض استحقاق الفواتير دون شرط سوى مرور الوقت.",
        "Of the completed building performance, $20,000 is not yet an unconditional right to payment: contract asset = $230,000 − $210,000 invoiced = $20,000. Uncollected trade receivables are ($210,000 − $194,000) for building plus $14,000 for bricks, or $30,000, assuming the invoices are unconditional apart from the passage of time.",
      ),
      text(
        "يلزم التحقق فعليًا من شرط الاعتراف على مدى الزمن وطريقة قياس التقدم؛ كون النشاط بناءً أو وجود شهادات لا يكفي وحده. كما يخضع أصل العقد والذمم لتقييم خسائر الائتمان وفق IFRS 9، لكن لا توجد بيانات لتحديد مبلغ خسارة هنا.",
        "The actual over-time criterion and progress measure must be verified; construction activity or certificates alone are insufficient. The contract asset and receivables also require IFRS 9 credit-loss assessment, but no loss amount can be determined from these facts.",
      ),
    ],
    reference: "IFRS 15.35–40, 105–108; IFRS 9.5.5",
  },
  {
    id: "ifrs-book2-jenson-performance-obligation",
    standardCode: "IFRS 15",
    title: text(
      "التزام الأداء في عقد العميل وتوقيت الإيراد",
      "Performance obligations and revenue timing",
    ),
    facts: text(
      "يتناول السؤال النظري تحديد الوعد الذي ينقل إلى العميل سلعة أو خدمة في عقد قد يضم أكثر من وعد. لا تُعطى في هذا الجزء مبالغ أو تواريخ لمعاملة محددة.",
      "This conceptual question concerns identifying a promise to transfer a good or service to a customer in a contract that may contain more than one promise. This part supplies no transaction amounts or dates.",
    ),
    question: text(
      "اشرح المقصود بالتزام الأداء فيما يتعلق بالاعتراف بإيراد العقود مع العملاء.",
      "Explain what is meant by a performance obligation in relation to revenue recognition from contracts with customers.",
    ),
    solution: [
      text(
        "التزام الأداء هو وعد في العقد بنقل سلعة أو خدمة مميزة، أو حزمة مميزة، إلى العميل؛ وقد يكون سلسلة من سلع أو خدمات مميزة متشابهة جوهريًا ولها نمط نقل واحد. لا يعد كل نشاط داخلي للمنشأة وعدًا منفصلًا للعميل.",
        "A performance obligation is a contractual promise to transfer a distinct good or service, or a distinct bundle, to a customer; it can also be a series of substantially similar distinct goods or services with the same pattern of transfer. Not every internal activity of the entity is a separate promise to the customer.",
      ),
      text(
        "يكون الوعد مميزًا إذا استطاع العميل الانتفاع به وحده أو مع موارد متاحة بسهولة، وكان قابلاً للفصل عن الوعود الأخرى في سياق العقد. لذلك يُفحص العقد وارتباط الوعود قبل تحديد عدد الالتزامات وتوزيع سعر المعاملة عليها.",
        "A promise is distinct when the customer can benefit from it on its own or with readily available resources and it is separately identifiable from other promises in the contract. Examine the contract and interdependence of promises before counting obligations and allocating the transaction price.",
      ),
      text(
        "يُعترف بالإيراد عند الوفاء بالوعد بنقل السيطرة إلى العميل: على مدى الزمن إذا استوفى أحد معايير IFRS 15.35، وإلا عند نقطة زمنية تُحدد بمؤشرات انتقال السيطرة. إصدار فاتورة أو قبض مبلغ مقدم لا يكفيان وحدهما لإثبات الوفاء.",
        "Recognise revenue as control transfers to the customer: over time if one of the IFRS 15.35 criteria is met, otherwise at the point in time indicated by transfer of control. Billing or receiving an advance alone does not establish satisfaction.",
      ),
    ],
    reference: "IFRS 15.22–30, 31–38",
  },
  {
    id: "ifrs-book2-jenson-franchise-licence",
    standardCode: "IFRS 15",
    title: text(
      "Jenson: رسم امتياز أولي وخدمات مستمرة",
      "Jenson: franchise upfront fee and continuing services",
    ),
    facts: text(
      "منحت Jenson في 1 أبريل 20X4 السيد Cody امتيازًا لفتح منفذ وجبات سريعة لمدة خمس سنوات. قبضت 50,000 دولار مقدمًا عن السنة الأولى، وتستحق لها 5,000 سنويًا في السنوات التالية. تلتزم طوال مدة الامتياز بإعلانات وتطوير منتجات بتكلفة تقارب 8,000 سنويًا للمنفذ، وتقدر هامش ربح هذه الخدمات بنحو 20% من إيراداتها. لا يحدد السؤال سعر بيع مستقل قابل للملاحظة للترخيص أو الخدمات، ولا يبين هل أنشطة Jenson المستمرة تغير المنفعة من العلامة تغييرًا مهمًا أو هل يُستفاد من الترخيص بمعزل عن الخدمات.",
      "On 1 April 20X4 Jenson granted Mr Cody a five-year fast-food outlet franchise. It received $50,000 upfront for year one and is due $5,000 annually for the remaining years. It must provide advertising and product-development services throughout the franchise at about $8,000 annual cost per outlet and estimates a 20% revenue margin on those services. The case gives no observable stand-alone selling prices for the licence or services and does not establish whether Jenson's continuing activities significantly affect the brand's utility or whether the licence can be benefited from separately.",
    ),
    question: text(
      "صف معالجة Jenson لعقد الامتياز في قوائم السنة المنتهية في 31 مارس 20X5، مع بيان كيفية تحديد التزامات الأداء وتوقيت إيرادها.",
      "Explain Jenson's accounting for the franchise in the year ended 31 March 20X5, including how to identify its performance obligations and revenue timing.",
    ),
    solution: [
      text(
        "يبدأ التحليل بتحديد ما إذا كان الترخيص والخدمات المستمرة وعودًا مميزة منفصلة أم التزام أداء واحدًا. رسم الـ50,000 المقبوض مقدمًا ليس إيرادًا تلقائيًا يوم القبض؛ إن لم ينقل الرسم نفسه خدمة مميزة فهو دفعة عن أداء لاحق. وتحدد طبيعة الترخيص: حق وصول إلى ملكية فكرية تتأثر جوهريًا بنشاط المرخص المستمر فيعترف به على مدى الزمن، أم حق استخدام ما كان قائمًا عند المنح في نقطة زمنية؛ ولا يكفي وصف العقد «امتيازًا» للحسم.",
        "First identify whether the licence and continuing services are distinct promises or a combined performance obligation. Receipt of the $50,000 fee does not itself create revenue; if the fee transfers no distinct service, it is an advance for later performance. Assess whether the licence is a right to access intellectual property significantly affected by the licensor's continuing activities over time or a right to use intellectual property as it exists at grant. Calling the arrangement a franchise does not decide that question.",
      ),
      text(
        "النقد التعاقدي الاسمي عبر السنوات الخمس = 50,000 + 4 × 5,000 = 70,000 دولار، قبل أي تحليل لعنصر تمويل مهم. إذا كانت الخدمات مميزة، يوزع سعر المعاملة على الالتزامات بحسب أسعار البيع المستقلة النسبية، لا بحسب جدول التحصيل وحده. تكلفة الخدمة 8,000 مع هامش 20% من الإيراد توحي بتقدير تكلفة مضافًا إليها هامش = 8,000 ÷ 80% = 10,000 سنويًا، لكنها لا تثبت وحدها سعر الترخيص المستقل أو التوزيع النهائي.",
        "Nominal contractual cash across five years is $50,000 + 4 × $5,000 = $70,000, before assessing any significant financing component. If services are distinct, allocate the transaction price by relative stand-alone selling prices, not simply by the cash schedule. Service cost of $8,000 with a 20% revenue margin suggests a cost-plus estimate of $8,000 ÷ 80% = $10,000 a year, but that alone does not establish the licence's stand-alone price or the final allocation.",
      ),
      text(
        "بعد التوزيع يُعترف بإيراد كل التزام عند الوفاء به وبمقياس تقدم ملائم لما ينفذ على مدى الزمن. لا تسمح الوقائع الحالية باعتماد جدول إيراد أو نسبة ربح نهائية من جدول التحصيل وحده؛ يلزم تقييم العقد، وتمييز الوعود، وطبيعة الترخيص، وأسعار البيع المستقلة، وأثر التمويل المحتمل أولًا.",
        "Recognise each allocated component when its promise is satisfied, using an appropriate progress measure for performance over time. The stated facts do not justify a definitive revenue schedule or profit margin from the cash schedule alone: assess the contract, distinctness of promises, licence nature, stand-alone prices and any financing effect first.",
      ),
    ],
    reference: "IFRS 15.22–30, 60–65, 73–80, B48–B60",
  },
  {
    id: "ifrs-book2-dt-tax-components",
    standardCode: "IAS 12",
    title: text(
      "DT Group: ضريبة جارية وفروق مؤقتة عند الاستحواذ وبيع المخزون",
      "DT Group: current tax and acquisition and inventory temporary differences",
    ),
    facts: text(
      "جميع المبالغ بالمليون دولار. في 30 نوفمبر 20X1 اشترت DT كامل Bravo مقابل 90؛ بلغت القيمة الدفترية لصافي الأصول المحددة المستحوذ عليها 76 وأساسها الضريبي 60، ومعدل الضريبة لدى Bravo 25%، ولا خصم ضريبي للشهرة. بعد الشراء مباشرة باعت DT إلى Bravo مخزونًا بـ30 يتضمن ربحًا 20% من سعر البيع، ولم يُبع المخزون خارج المجموعة حتى نهاية اليوم. وكان على DT ضريبة دخل قدرها 165 عن عقار باعته في 20X0، لكن القانون يؤجل دفعها إلى نوفمبر 20X4. لا تتناول هذه الحالة بقية فروق المسألة أو إجمالي مصروف الضريبة.",
      "All amounts are in $m. On 30 November 20X1 DT acquired all of Bravo for 90. Identifiable acquired net assets had carrying amount 76 and tax base 60; Bravo's tax rate is 25%, and goodwill has no tax deduction. Immediately after acquisition DT sold Bravo inventory for 30 at a profit of 20% of the selling price; Bravo had not sold it outside the group by that day's end. DT also owed income tax of 165 on property it sold in 20X0, but tax law defers payment until November 20X4. This case excludes the other temporary differences and the total tax expense in the source problem.",
    ),
    question: text(
      "احسب الضريبة المؤجلة الناشئة من صافي أصول Bravo والمخزون غير المباع، وميزها عن ضريبة العقار المبيع سابقًا. لماذا لا يصح جمع 165 مع الضريبة المؤجلة لمجرد تأجيل الدفع؟",
      "Calculate deferred tax on Bravo's acquired net assets and unsold inventory and distinguish it from tax on the previously sold property. Why does postponed payment not by itself make the 165 deferred tax?",
    ),
    solution: [
      text(
        "فرق صافي الأصول المحددة عند الاستحواذ = 76 − 60 = 16؛ وبمعدل 25% ينشأ التزام ضريبة مؤجلة 4 عند تاريخ الشراء. إذا لم توجد تعديلات أخرى، ينخفض صافي الأصول المحددة بعد الضريبة إلى 72، وترتفع الشهرة الأولية من 90 − 76 = 14 إلى 90 − 72 = 18. لا يُثبت التزام ضريبة مؤجلة مستقل عن الاعتراف الأولي بالشهرة نفسها.",
        "The acquisition-date taxable difference on identifiable net assets is 76 − 60 = 16, producing a deferred-tax liability of 4 at 25%. Absent other adjustments, identifiable net assets after tax are 72, so preliminary goodwill rises from 90 − 76 = 14 to 90 − 72 = 18. No separate deferred-tax liability arises from the initial recognition of goodwill itself.",
      ),
      text(
        "ربح البيع الداخلي المضمن في المخزون = 30 × 20% من سعر البيع = 6، فتبلغ قيمة المخزون المجمعة 24. إذا ظل أساسه الضريبي لدى Bravo هو تكلفة الشراء 30، فإن الفرق القابل للخصم = 30 − 24 = 6، وأصل الضريبة المؤجلة المحتمل = 6 × 25% = 1.5. يثبت الأصل فقط بقدر احتمال توافر أرباح خاضعة للضريبة تسمح بالاستفادة من الخصم عند تحقق المخزون؛ ولا يستخدم معدل ضريبة DT البالغ 30% بدل معدل Bravo.",
        "The intragroup profit in inventory is 30 × 20% of selling price = 6, leaving consolidated inventory of 24. If Bravo's tax base remains its purchase cost of 30, the deductible temporary difference is 30 − 24 = 6 and the potential deferred-tax asset is 6 × 25% = 1.5. Recognise it only to the extent that future taxable profits are probable when the inventory is realised; use Bravo's 25% rate, not DT's 30% rate.",
      ),
      text(
        "ضريبة الـ165 تخص بيعًا وقع في 20X0. إذا نشأ الالتزام الضريبي وقت البيع وتأجل السداد فقط، فهي ضريبة جارية غير مدفوعة عن فترة سابقة وفق IAS 12، ولو حُدد تاريخ السداد في 20X4. أما إن كان القانون يؤجل نشأة الربح الخاضع للضريبة نفسها، فيلزم تحليل نصه وأي أصل أو أساس ضريبي متبقٍ. مجرد تأجيل موعد الدفع لا ينشئ فرقًا مؤقتًا قدره 165؛ لذلك لا يعتمد إجمالي الضريبة المؤجلة أو مصروفها في حل المسألة قبل إعادة فحص جميع بنوده.",
        "The 165 relates to a sale completed in 20X0. If the tax obligation arose on sale and only payment was deferred, it is unpaid current tax for a prior period under IAS 12 even though due in 20X4. If the law instead defers when the gain becomes taxable, its terms and any surviving asset or tax base require separate analysis. Payment deferral alone creates no temporary difference of 165, so the source problem's aggregate deferred-tax balance and expense cannot be adopted without reassessing all components.",
      ),
    ],
    reference: "IAS 12.5, 12, 15(a), 24, 46–47, 66; IFRS 3.10",
  },
  {
    id: "ifrs-book2-dt-directors-tax-report",
    standardCode: "IAS 12",
    title: text(
      "DT Group: تقرير آثار تطبيق ضريبة الدخل للمديرين",
      "DT Group: directors' report on applying income-tax accounting",
    ),
    facts: text(
      "تطبق DT معايير IFRS لأول مرة في قوائم السنة المنتهية في 30 نوفمبر 20X1. أظهرت ملاحظة 20X0 صافي التزام ضريبة مؤجلة قدره 3 ملايين دولار وفق السياسة السابقة، وقدّر المديرون رصيد البداية وفق IAS 12 بمبلغ 280 مليونًا. توجد فروق ضريبية تخص أصولًا أعيد تقييمها، واستحواذ Bravo، وخسائر ضريبية مرحلة، ومنافع رعاية صحية تخصم عند السداد. كذلك تستحق ضريبة قدرها 165 مليونًا عن بيع عقار وقع في 20X0، لكن سدادها مؤجل إلى 20X4. المطلوب تقرير موجز للمديرين عن أثر IAS 12، لا إعادة حساب كامل رصيد الإقفال من معطيات غير محسومة.",
      "DT first applies IFRS in its financial statements for the year ended 30 November 20X1. The 20X0 note reported a net deferred-tax liability of $3m under the previous policy; directors estimate an opening IAS 12 balance of $280m. Tax differences concern revalued property, the Bravo acquisition, carried-forward tax losses and healthcare benefits deductible on payment. A further $165m tax relating to a property sold in 20X0 is payable only in 20X4. The task is a brief directors' report on IAS 12's effects, not a complete closing-balance calculation from unresolved facts.",
    ),
    question: text(
      "أعد تقريرًا موجزًا للمديرين يبيّن أثر تطبيق IAS 12 على القوائم المالية لمجموعة DT.",
      "Prepare a brief report for DT Group's directors on the effect of applying IAS 12 to its financial statements.",
    ),
    solution: [
      text(
        "إلى المديرين: سيُعرض أثر الضريبة الجارية والضريبة المؤجلة بصورة منفصلة من حيث طبيعة كل منهما. يُنشأ الالتزام أو الأصل المؤجل من الفروق بين القيمة الدفترية والأساس الضريبي للأصول والالتزامات، مع اختبار قابلية استرداد أصول الضريبة المؤجلة. قد تتغير الالتزامات وصافي الأصول المعروضة دون أن يعني الاعتراف بضريبة مؤجلة دفع نقدية في تاريخ القيد.",
        "To the directors: current and deferred tax must be analysed separately. Deferred tax arises from differences between the carrying amounts and tax bases of assets and liabilities, subject to recoverability testing for deferred-tax assets. Recognising deferred tax can change reported liabilities and net assets without itself causing a cash payment on the recognition date.",
      ),
      text(
        "رقما 3 و280 مليونًا يعطيان فرق تسوية حسابيًا قدره 277 مليونًا فقط إذا كانا يمثلان الرصيد الصافي للكيانات نفسها وفي التاريخ نفسه وعلى أساس قابل للمقارنة. يجب مراجعة تقدير 280 أولًا وتحديد تاريخ الانتقال الرسمي وفترات المقارنة؛ ولا يُحمّل فرق السياسة الافتتاحي تلقائيًا على ربح 20X1. تعديلات قائمة المركز المالي الافتتاحية عند الانتقال تُثبت عادة في الأرباح المبقاة أو بند آخر مناسب من حقوق الملكية وفق IFRS 1.",
        "The $3m and $280m figures yield an arithmetic bridge of $277m only if they cover the same entities, date and comparable net balance. First validate the $280m estimate and identify the formal IFRS transition date and comparative periods. An opening accounting-policy adjustment is not automatically a 20X1 profit-or-loss charge; IFRS 1 generally records opening adjustments in retained earnings or another appropriate equity component.",
      ),
      text(
        "لا يساوي مصروف الضريبة المؤجلة للسنة الفرق بين رصيد الإقفال ورصيد البداية دون تسوية الحركات. تُفصل ضريبة إعادة تقييم أصل مُثبتة في الدخل الشامل الآخر عن ضريبة معاملات الربح أو الخسارة؛ وضريبة فروق أصول Bravo المحددة بتاريخ الاستحواذ تؤثر في قياس الشهرة، لا في مصروف السنة بمجرد نشأتها. لا تُثبت منفعة الخسائر المرحلة أو خصم منافع الرعاية الصحية إلا بقدر توافر أرباح خاضعة للضريبة مناسبة وبأدلة كافية، ولا يُستخدم الربح المتوقع نفسه مرتين.",
        "The year's deferred-tax expense is not simply the difference between opening and closing balances without reconciling the movements. Tax on a property revaluation recognised in other comprehensive income follows that presentation, while acquisition-date tax on Bravo's identifiable assets affects goodwill rather than becoming current-year expense merely on recognition. Loss carryforwards and healthcare deductions support an asset only to the extent suitable taxable profits are probable and evidenced; the same forecast profit cannot be counted twice.",
      ),
      text(
        "ضريبة الـ165 مليونًا عن العقار المباع سابقًا تُصنف ضريبة جارية غير مدفوعة إذا نشأ الالتزام عند البيع وتأجل السداد فقط. أما إذا أجّل القانون خضوع الربح نفسه للضريبة، فيلزم فحص النص القانوني والأساس الضريبي قبل استنتاج فرق مؤقت. لذلك لا يمكن الجزم من موعد السداد وحده برصيد ضريبة مؤجلة أو مصروف نهائي للمجموعة. كما لا يجوز خصم رصيد الضريبة المؤجلة بمعدل فائدة؛ يظل تقرير الأثر الرقمي النهائي معلقًا على هذه التحليلات.",
        "The $165m tax on the previously sold property is unpaid current tax if the obligation arose on sale and only settlement was delayed. If the law instead postpones taxation of the gain itself, its terms and tax bases must be examined before identifying any temporary difference. The payment date alone therefore cannot establish a final group deferred-tax balance or expense. Deferred-tax balances must not be discounted; the final numerical effect remains subject to these analyses.",
      ),
    ],
    reference: "IAS 12.5, 12, 24, 34–36, 53, 57–58, 61A, 66, 71–74; IFRS 1.6–11",
  },
  {
    id: "ifrs-book2-panther-inventory-timing",
    standardCode: "IFRS 10",
    title: text(
      "Panther وSabre: ربح المخزون يتوقف على تاريخ الشراء",
      "Panther and Sabre: inventory profit depends on purchase timing",
    ),
    facts: text(
      "اشترت Panther حصة مسيطرة 60% في Sabre في 1 يوليو 20X4. خلال سنة 20X4 كلها اشترت Panther بضاعة من Sabre بمبلغ 640,000 دولار؛ بقي منها مخزون بقيمة فواتير 60,000 دولار في 31 ديسمبر. تسعر Sabre البيع على أساس التكلفة مضافًا إليها 20%. ينص السؤال على تراكم الإيرادات والمصروفات العادية بالتساوي خلال السنة لكنه يستثني البنود الداخلية، ولا يحدد تواريخ شراء البضاعة المتبقية.",
      "Panther acquired a controlling 60% interest in Sabre on 1 July 20X4. Across all of 20X4 Panther bought $640,000 of goods from Sabre; $60,000 at invoice price remained in inventory at 31 December. Sabre sells at a 20% markup on cost. The case says ordinary income and expenses accrue evenly during the year but expressly excludes intragroup items from that assumption, and it does not date the purchases remaining on hand.",
    ),
    question: text(
      "أعد قائمة الربح أو الخسارة والدخل الشامل الآخر الموحدة وكشف احتياطيات المجموعة للسنة المنتهية في 31 ديسمبر 20X4، وبيّن الأرقام التي تتوقف على توقيت التعاملات الداخلية أو أثر الضريبة غير المعطى.",
      "Prepare the consolidated profit or loss and other comprehensive income statement and group-reserves extract for the year ended 31 December 20X4, identifying amounts conditional on the timing of intragroup trading or unspecified tax effects.",
    ),
    solution: [
      text(
        "الهامش 20% على التكلفة، لا على سعر البيع؛ لذلك الربح المضمن في المخزون الباقي = 60,000 × 20/120 = 10,000 دولار. هذا هو الحد الأقصى القابل للاستبعاد إذا كانت كل هذه الوحدات مشتراة بعد 1 يوليو ولم تُبع لطرف خارجي حتى نهاية السنة.",
        "The 20% markup is on cost, not selling price. Embedded profit in unsold inventory is therefore $60,000 × 20/120 = $10,000. This is the maximum eliminable amount if all those units were bought after 1 July and remained unsold to outsiders at year-end.",
      ),
      text(
        "إذا تم بيع الوحدات بعد حصول Panther على السيطرة، فالبيع بين عضوين في المجموعة ويُستبعد الربح غير المحقق كاملًا عند التجميع؛ وبما أن البائع Sabre التابعة، يخفض تعديل الربح اللاحق للاقتناء أيضًا حصة غير المسيطرين بحسب نسبتهم 40% قبل تحليل أثر الضريبة. أما البضاعة المشتراة قبل 1 يوليو فلا يمثل بيعها حينئذ معاملة داخل المجموعة، ولا يُستبعد ربحها لمجرد أن Sabre أصبحت تابعة لاحقًا.",
        "Goods sold after Panther obtained control represent an intragroup transaction; eliminate the full unrealised profit on consolidation. Because Sabre is the selling subsidiary, the adjustment also reduces post-acquisition profit attributable to the 40% non-controlling interest before considering tax effects. Goods bought before 1 July were not an intragroup sale at that time, so their profit is not eliminated merely because Sabre became a subsidiary later.",
      ),
      text(
        "إذا اختلطت المشتريات السابقة واللاحقة، يحتاج الحل قيمة المخزون الباقي من مبيعات ما بعد الاستحواذ؛ ولا يصح افتراض أن نصف الـ60,000 أو نصف مبيعات الـ640,000 وقع بعد 1 يوليو لأن فرض التوزيع المنتظم في السؤال لا يشمل التعاملات الداخلية. من دون جدول تواريخ التعامل لا يمكن اعتماد تعديل 10,000 أو قائمة الربح الموحد الكاملة كرقم نهائي.",
        "For a mix of pre- and post-acquisition purchases, the value of closing inventory sourced after control is needed. Do not simply assume half of the $60,000 or half the $640,000 sales arose after 1 July: the even-accrual assumption excludes intragroup items. Without dated transaction detail, neither the $10,000 elimination nor the full consolidated profit statement is definitive.",
      ),
      text(
        "لإكمال القائمة دون افتراض تاريخ غير معطى، عرّف x بمبيعات Sabre إلى Panther بعد 1 يوليو وy بقيمة المخزون الختامي من تلك المبيعات، وكلاهما بآلاف الدولارات؛ 0 ≤ y ≤ 60 وy ≤ x ≤ 640. الإيراد الموحد = 22,800 + نصف 4,300 − x = 24,950 − x. تكلفة المبيعات = 13,600 + نصف 2,600 − x + y/6 + 5 = 14,905 − x + y/6؛ إذ إن y/6 هو ربح البائع غير المحقق، و5 إهلاك نصف سنة على زيادة القيمة العادلة للعقار 200 بعمر متبق 20 سنة. لا تُستنتج قيمة x أو y من عبارة تراكم البنود الأخرى بالتساوي.",
        "To complete the statement without assuming an unstated transaction date, let x be Sabre-to-Panther sales after 1 July and y the closing inventory invoiced from those sales, both in $000; 0 ≤ y ≤ 60 and y ≤ x ≤ 640. Consolidated revenue is 22,800 + half of 4,300 − x = 24,950 − x. Cost of sales is 13,600 + half of 2,600 − x + y/6 + 5 = 14,905 − x + y/6: y/6 is the seller's unrealised profit and 5 is six months' depreciation on the 200 acquisition-date property uplift over 20 remaining years. The even-accrual statement for other items cannot determine x or y.",
      ),
      text(
        "تكاليف التوزيع 3,150 والإدارة 1,950؛ تُلغى فائدة القرض الداخلية لستة أشهر بعد السيطرة فقط، 800 × 5% × 6/12 = 20، فتكون تكلفة التمويل 215 وإيراد التمويل 30. وعليه الربح قبل الضريبة = 4,760 − y/6. مصروف الضريبة الظاهر في القائمتين بعد ضم نصف سنة للتابعة = 1,410 قبل أي تعديل ضريبي مؤجل؛ ويجب فحص فروق إلغاء الربح الداخلي وزيادة القيمة العادلة وفق IAS 12، لكن لا يوجد معدل ضريبي أو أساس ضريبي يسمح بحسابها. الدخل الشامل الآخر المعطى صافيًا من الضريبة = 1,600 + نصف 180 = 1,690.",
        "Distribution costs are 3,150 and administration costs 1,950. Eliminate intragroup loan interest only for the six months after control, 800 × 5% × 6/12 = 20, giving finance costs of 215 and finance income of 30. Profit before tax is therefore 4,760 − y/6. The two companies' stated tax charges after including half a year of Sabre total 1,410 before any deferred-tax adjustment; IAS 12 applies to temporary differences from profit elimination and the fair-value uplift, but no tax rate or tax base is supplied to quantify them. Stated OCI, already net of tax, is 1,600 + half of 180 = 1,690.",
      ),
      text(
        "إذا اقتصر الحساب على مصروف الضريبة المعطى ولم تنشأ تسوية ضريبية إضافية، يكون ربح السنة 3,350 − y/6، والدخل الشامل الكلي 5,040 − y/6. نصيب غير المسيطرين من الربح = 40% × (305 − 5 − y/6) = 120 − y/15؛ ونصيبهم من الدخل الشامل الكلي = 156 − y/15. نصيب ملاك الأم من الدخل الشامل الكلي = 4,884 − y/10، ومن ثم احتياطيات المجموعة الختامية = 12,750 − 900 + (4,884 − y/10) = 16,734 − y/10. هذه صيغ مشروطة؛ تتغير الأرباح والحصص والاحتياطيات إذا لزم تعديل ضريبي وفق IAS 12، ولا يصح عرض أرقام نهائية واحدة من الوقائع المتاحة.",
        "If the calculation uses only the stated tax charges and no further tax adjustment arises, profit for the year is 3,350 − y/6 and total comprehensive income is 5,040 − y/6. NCI's profit share is 40% × (305 − 5 − y/6) = 120 − y/15; its total comprehensive income is 156 − y/15. Owners' total comprehensive income is 4,884 − y/10, giving closing group reserves of 12,750 − 900 + (4,884 − y/10) = 16,734 − y/10. These are conditional formulas: profit, attribution and reserves change if IAS 12 tax adjustments are required, and the stated facts do not support a single definitive set of figures.",
      ),
    ],
    reference: "IFRS 10.20, B86(c)–(d), B88, B94; IAS 12.11, 24",
  },
  {
    id: "ifrs-book2-gains-investment-property",
    standardCode: "IAS 40",
    title: text(
      "Gains: انخفاض القيمة العادلة للعقار الاستثماري",
      "Gains: investment-property fair-value decrease",
    ),
    facts: text(
      "كانت القيمة المسجلة لعقارات Gains الاستثمارية في 1 يناير 20X9 مبلغ 160,000 دولار، وتتضمن فائض إعادة تقييم 40,000 دولار وفق قواعد محلية سابقة. بلغت قيمتها العادلة في 31 ديسمبر 20X9 مبلغ 110,000 دولار. ترغب الشركة في تطبيق نموذج القيمة العادلة وفق IAS 40، ولم تسجل بعد أثر التغيير أو الانخفاض اللاحق. هذه الحالة تعزل قياس العقار خلال 20X9 بافتراض أن نموذج IAS 40 مطبق من أول السنة؛ ولا تحسم معالجة الانتقال من القواعد المحلية أو بقية عناصر قائمة التغيرات في حقوق الملكية.",
      "Gains carried its investment properties at $160,000 on 1 January 20X9, including a $40,000 revaluation surplus under previous local accounting rules. Their fair value at 31 December 20X9 was $110,000. Gains wishes to apply the IAS 40 fair-value model and has not yet recorded the change or subsequent fall. This case isolates the 20X9 measurement assuming the IAS 40 model applies from the start of the year; it does not resolve transition from local rules or the remaining statement of changes in equity.",
    ),
    question: text(
      "إذا كان نموذج القيمة العادلة ساريًا طوال 20X9، فما رصيد العقار وخسارة تغير القيمة العادلة؟ وهل يجوز تحميل خسارة السنة مباشرة على فائض إعادة التقييم المحلي القديم؟",
      "If the fair-value model applied throughout 20X9, what are the property balance and fair-value loss? Can the year's loss be charged directly against the old local-GAAP revaluation surplus?",
    ),
    solution: [
      text(
        "رصيد العقار في 31 ديسمبر = قيمته العادلة 110,000 دولار. التغير خلال السنة = 110,000 − 160,000 = خسارة 50,000 دولار، بافتراض أن رصيد أول السنة يمثل أساس القيمة العادلة الصحيح عند بدء التطبيق. يعترف بتغير القيمة العادلة في الربح أو الخسارة عن سنة حدوثه وفق IAS 40، لا في الدخل الشامل الآخر.",
        "The 31 December property balance is its $110,000 fair value. The year's movement is $110,000 − $160,000 = a $50,000 loss, assuming the opening amount is the correct fair-value starting point. IAS 40 recognises the fair-value change in profit or loss for the year, not in other comprehensive income.",
      ),
      text(
        "لا يتيح فائض إعادة التقييم القديم البالغ 40,000 دولار استخدامه تلقائيًا لامتصاص خسارة القيمة العادلة للسنة. يجب فحص تسوية الرصيد القديم عند الانتقال إلى IFRS أو تغيير السياسة المحاسبية على حدة، ومعرفة ما إذا كانت هذه أول قوائم IFRS؛ ولا يمكن استخراج رصيد ختامي واحد قاطع لقائمة حقوق الملكية دون حسم ما إذا كان هبوط أصول التكلفة 25,000 دولار مدرجًا أصلًا في الربح المعطى.",
        "The old $40,000 local-rule revaluation surplus does not automatically absorb the year's fair-value loss. Analyse its opening-balance transition under first-time IFRS adoption or an accounting-policy change separately, including whether these are the first IFRS financial statements. A single definitive closing equity balance cannot be derived from this isolated part without resolving whether the $25,000 impairment of cost-model assets is already included in the stated profit.",
      ),
    ],
    reference: "IAS 40.33–35; IAS 8.19–22; IFRS 1.10–11",
  },
  {
    id: "ifrs-book2-gains-changes-in-equity",
    standardCode: "IAS 1",
    title: text(
      "Gains: قائمة التغيرات في حقوق الملكية مع توضيح شرط انخفاض القيمة",
      "Gains: changes in equity with an explicit impairment condition",
    ),
    facts: text(
      "جميع المبالغ بآلاف الدولارات للسنة المنتهية في 31 ديسمبر 20X9. أرصدة أول السنة: رأس مال 2,800، علاوة إصدار 1,150، أرباح محتجزة 2,120، وفائض إعادة تقييم 750. الربح بعد الضريبة المعطى 566، ودخل شامل آخر من إعادة تقييم أرض 120. كان رصيد عقار استثماري أول السنة 160 يتضمن فائض 40 وفق سياسة محلية سابقة، وانخفضت قيمته العادلة إلى 110 دون تسجيل الأثر؛ يفترض السؤال تسوية تغيير السياسة وفق IAS 8. ورد انخفاض بقيمة 25 في أصول محمولة بالتكلفة، دون بيان صريح هل أُدرج في الربح 566. بيع أصل سبق رفع قيمته من 30 إلى 80، بعد ثلاث سنوات من عمر عشر سنوات؛ تنقل الشركة سنويًا فائض الإهلاك إلى الأرباح المحتجزة. أصدرت 200 ألف سهم مجاني بقيمة اسمية دولار من علاوة الإصدار، ثم 400 ألف سهم بقيمة اسمية دولار مقابل 1.40 للسهم، ودفعت توزيعات 200. لا يحدد السؤال ما إذا كان ربح بيع الأصل أو أثر ضريبي إضافي يحتاجان تعديل الربح المعطى.",
      "All amounts are in $000 for the year ended 31 December 20X9. Opening balances are share capital 2,800, share premium 1,150, retained earnings 2,120 and revaluation surplus 750. Stated after-tax profit is 566 and land-revaluation OCI is 120. Investment property opened at 160 including a 40 surplus under prior local policy and fell to fair value 110 without an entry; the question directs policy-change treatment under IAS 8. A cost-model asset was impaired by 25, but the question does not expressly say whether this is already in the 566 profit. A previously revalued asset, uplifted from 30 to 80, was sold after three years of a ten-year life; excess depreciation is transferred annually to retained earnings. Gains issued 200,000 $1 bonus shares from premium and 400,000 $1 shares for $1.40 each, and paid dividends of 200. Whether the disposal gain or additional tax is already reflected in stated profit is not specified.",
    ),
    question: text(
      "أعد قائمة التغيرات في حقوق الملكية لشركة Gains للسنة المنتهية في 31 ديسمبر 20X9.",
      "Prepare Gains Co's statement of changes in equity for the year ended 31 December 20X9.",
    ),
    solution: [
      text(
        "إذا صح تطبيق التغيير بأثر رجعي على رصيد الافتتاح كما تفترض المسألة، يعاد تصنيف فائض العقار الاستثماري القديم 40 من فائض إعادة التقييم إلى الأرباح المحتجزة؛ لا يغير ذلك إجمالي حقوق الملكية الافتتاحية 6,820. الأرصدة المعدلة تصبح 2,800 لرأس المال، 1,150 للعلاوة، 2,160 للأرباح المحتجزة، و710 للفائض. يجب عرض أثر تغيير السياسة منفصلًا عن معاملات السنة ومراعاة المقارنات وفق IAS 8.",
        "If retrospective application to the opening balance is appropriate as the question assumes, reclassify the old investment-property surplus of 40 from revaluation surplus to retained earnings. Opening total equity remains 6,820. Restated components are capital 2,800, premium 1,150, retained earnings 2,160 and surplus 710. Present the policy-change effect separately from current-year transactions and address comparatives under IAS 8.",
      ),
      text(
        "الأسهم المجانية: زيادة رأس المال 200 ونقص العلاوة 200 بلا تغير في إجمالي الحقوق. إصدار النقد: زيادة رأس المال 400 والعلاوة 160، أي مساهمة ملاك 560. لذلك الحركة الصافية لرأس المال +600 والعلاوة −40؛ الرصيد الختامي 3,400 و1,110. التوزيعات المدفوعة 200 تخفض الأرباح المحتجزة، ولا تدخل الربح أو الخسارة.",
        "The bonus issue raises capital by 200 and reduces premium by 200, with no total-equity effect. The cash issue raises capital by 400 and premium by 160, an owner contribution of 560. Thus net capital movement is +600 and premium movement −40, leaving 3,400 and 1,110 respectively. Paid dividends of 200 reduce retained earnings, not profit or loss.",
      ),
      text(
        "خسارة القيمة العادلة للعقار الاستثماري في السنة = 160 − 110 = 50 تُحمّل على الربح أو الخسارة وفق IAS 40. إعادة تقييم الأرض 120 تبقى في الدخل الشامل الآخر وفائض إعادة التقييم. فائض الأصل المباع المتبقي = 50 − [(80 − 30) ÷ 10 × 3] = 35؛ يُحوّل مباشرة من الفائض إلى الأرباح المحتجزة دون مروره بالربح أو الخسارة. لذلك يصبح فائض إعادة التقييم الختامي 710 + 120 − 35 = 795.",
        "The current-year investment-property fair-value loss is 160 − 110 = 50 in profit or loss under IAS 40. The 120 land revaluation remains in OCI and revaluation surplus. Surplus remaining on the disposed asset is 50 − [(80 − 30) ÷ 10 × 3] = 35; transfer it directly from surplus to retained earnings, without recycling through profit or loss. Closing revaluation surplus is therefore 710 + 120 − 35 = 795.",
      ),
      text(
        "بافتراض أن مكسب بيع الأصل البالغ 60 − (80 − 24) = 4 وأي أثر ضريبي ذي صلة داخلان أصلًا في الربح المعطى، ولا ينشأ أثر ضريبي إضافي من التعديلات غير المعطى تفصيلها، يكون الربح المعدل 516 إذا كان انخفاض الـ25 مدرجًا فيه سابقًا، أو 491 إذا لم يكن مدرجًا ويستلزم قيد مصروف IAS 36. لا يجوز خصم الـ25 مرتين. إذا لم يدخل مكسب البيع في الربح المعطى، يُزاد الربح المناسب 4 بعد التحقق من القيد الأصلي.",
        "Assuming the disposal gain of 60 − (80 − 24) = 4 and any related tax are already in stated profit, with no further tax effect from adjustments for which no tax detail is supplied, adjusted profit is 516 if the 25 impairment was previously included, or 491 if it was not and IAS 36 expense is still required. Do not deduct the 25 twice. If the disposal gain is not in stated profit, increase the relevant profit figure by 4 after checking the original entry.",
      ),
      text(
        "على افتراض إدراج مكسب البيع والضريبة مسبقًا وعدم وجود أثر ضريبي إضافي، الأرباح المحتجزة الختامية = 2,160 + الربح المعدل − 200 + 35، أي 2,511 أو 2,486 حسب معالجة انخفاض الـ25. الإجمالي الختامي = 3,400 رأس مال + 1,110 علاوة + 795 فائض + الأرباح المحتجزة، أي 7,816 أو 7,791. يعرض الخياران بوضوح ولا يقدَّم أي منهما بوصفه جوابًا قطعيًا قبل فحص سجل الربح والانخفاض.",
        "Assuming the disposal gain and tax were already recorded and no further tax effect arises, closing retained earnings are 2,160 + adjusted profit − 200 + 35, or 2,511 versus 2,486 depending on the 25 impairment. Closing equity totals 3,400 capital + 1,110 premium + 795 surplus + retained earnings, or 7,816 versus 7,791. Present both as conditional outcomes, not as one definitive answer until the profit and impairment ledger is checked.",
      ),
    ],
    reference: "IAS 1.106–110; IAS 8.19–22; IAS 16.41; IAS 36.60; IAS 40.35",
  },
  {
    id: "ifrs-book2-jerzy-defined-benefit",
    standardCode: "IAS 19",
    title: text(
      "Jerzy: عجز خطة المنافع المحددة وحدود بيانات التسوية",
      "Jerzy: defined-benefit deficit and limits of the reconciliation",
    ),
    facts: text(
      "خلال السنة المنتهية في 30 نوفمبر 20X3 أنشأت Jerzy خطة معاشات ذات منافع محددة، ودفعت إليها 160 مليون دولار نقدًا في آخر يوم من السنة، لكن الدفعة سجلت خطأً ضمن الذمم التجارية المدينة. في ذلك التاريخ بلغت القيمة الحالية لالتزام المنافع 208 ملايين والقيمة العادلة لأصول الخطة 200 مليون. وردت تكلفة خدمة حالية 176 مليونًا وتكلفة فائدة على الالتزام 32 مليونًا و«عائد متوقع» على أصول الخطة 16 مليونًا. لا يقدم السؤال معدل الخصم ولا جدول تغير أصول الخطة والتزاماتها وتوقيت تكون الأصول الأخرى.",
      "During the year ended 30 November 20X3 Jerzy established a defined-benefit pension plan and contributed $160m cash on the final day, but wrongly recorded the payment in trade receivables. At that date the present value of the obligation was $208m and the fair value of plan assets was $200m. The case lists $176m current service cost, $32m interest cost on the obligation and a $16m 'expected return' on plan assets. It gives no discount rate or complete movement schedule for plan assets and obligations, including when the other assets arose.",
    ),
    question: text(
      "ما صافي التزام المنافع المحددة في نهاية السنة؟ وأي عناصر تذهب إلى الربح أو الخسارة أو الدخل الشامل الآخر، وما الأرقام التي لا يجوز استنتاجها من هذه الوقائع؟",
      "What is the closing net defined-benefit liability? Which components belong in profit or loss versus other comprehensive income, and which amounts cannot be derived from these facts?",
    ),
    solution: [
      text(
        "العجز في 30 نوفمبر = القيمة الحالية للالتزام 208 − القيمة العادلة لأصول الخطة 200 = 8 ملايين دولار؛ يعرض صافي التزام منافع محددة في قائمة المركز المالي، مع الإفصاحات المطلوبة، وليس مجرد رقم في الإيضاحات. ويجب إلغاء إدراج دفعة الـ160 مليونًا ضمن الذمم المدينة لأنها مساهمة في الخطة وليست حق تحصيل من عميل.",
        "The 30 November deficit is the $208m present-value obligation less $200m fair-value plan assets = $8m. Present a net defined-benefit liability in the statement of financial position, with the required disclosures, rather than only a note figure. Remove the $160m plan contribution from trade receivables: it is not a customer receivable.",
      ),
      text(
        "تكلفة الخدمة الحالية البالغة 176 مليونًا تدخل عادةً في الربح أو الخسارة، ما لم يتطلب معيار آخر إدراجها في تكلفة أصل مؤهل. ويحسب صافي الفائدة باستخدام معدل الخصم على صافي الالتزام/الأصل مع مراعاة تغيراته خلال الفترة؛ لا يساوي تلقائيًا 32 − 16 = 16 مليونًا، لأن «العائد المتوقع» على أصول الخطة ليس أساس قياس صافي الفائدة في IAS 19 الحالي.",
        "The $176m current service cost is normally in profit or loss unless another Standard requires inclusion in the cost of a qualifying asset. Net interest uses the discount rate on the net liability or asset, taking account of changes during the period; it is not automatically $32m − $16m = $16m because 'expected return' on plan assets is not the current IAS 19 basis for net interest.",
      ),
      text(
        "تعاد قياسات صافي الالتزام، بما فيها عائد أصول الخطة المستبعد من صافي الفائدة، إلى الدخل الشامل الآخر ولا يعاد تدويرها لاحقًا إلى الربح أو الخسارة. لا يجوز إثبات مكسب إعادة قياس 24 مليونًا كرقم متوازن: مساهمة الـ160 مليونًا دُفعت في آخر يوم، ولا يكشف السؤال كيف بلغت أصول الخطة 200 مليونًا أو معدل الخصم وحركة الالتزام. لذلك لا يمكن استخراج صافي فائدة ومكسب إعادة قياس وقيد تسوية شامل موثوق من هذه البيانات وحدها.",
        "Remeasurements of the net liability, including plan-asset return excluded from net interest, go to other comprehensive income and are not later recycled to profit or loss. Do not force a $24m remeasurement gain as a balancing figure: the $160m contribution was paid on the final day and the case does not explain how plan assets reached $200m or give the discount rate and obligation movements. A reliable net-interest figure, remeasurement gain and complete correcting entry therefore cannot be derived from these facts alone.",
      ),
    ],
    reference: "IAS 19.57–64, 120–124, 127–130, 140",
  },
  {
    id: "ifrs-book2-extract-provision-criteria",
    standardCode: "IAS 37",
    title: text(
      "Extract: مخصص إصلاح موقع التعدين بين تاريخين",
      "Extract: mining-site restoration provision across two reporting dates",
    ),
    facts: text(
      "تستخرج Extract المعادن في Copperland منذ يناير 20W8 وتتوقع استمرار الإنتاج حتى 31 ديسمبر 20X5، ولا تعالج التلوث إلا إذا ألزمها القانون. في 23 ديسمبر 20X0 علم المديرون أن تمرير تشريع يلزم بإصلاح مواقع التعدين كان شبه مؤكد؛ وصدر القانون في 15 مارس 20X1. تقدر الشركة دفع مليوني دولار في 31 ديسمبر 20X5. معدل الخصم 10%، ومعاملا القيمة الحالية المعطيان لأربع وخمس سنوات 0.683 و0.621. لا يحدد السؤال نص القانون المتوقع بصيغته النهائية أو ما إذا كان يشمل التلوث السابق، ولا يوزع تكاليف الإصلاح بين استخدام الموقع للإنتاج وغيره.",
      "Extract has mined at a Copperland site since January 20W8 and expects production until 31 December 20X5. It remediates contamination only where legally required. On 23 December 20X0 directors learned that legislation requiring restoration of mining sites was virtually certain to pass; it was enacted on 15 March 20X1. Estimated cash restoration cost is $2m on 31 December 20X5. The given discount rate is 10%, with four- and five-year present-value factors of 0.683 and 0.621. The question does not establish the exact drafted law's terms or whether it covers pre-existing contamination, or allocate restoration costs between inventory production and other uses of the site.",
    ),
    question: text(
      "لماذا يضبط IAS 37 إثبات المخصص، وما شروطه؟ احسب أثر الإصلاح المحتمل في 20X0 و20X1 باستخدام العوامل المعطاة، وبيّن الافتراضات اللازمة للاعتراف ومكان تحميل التكلفة.",
      "Why does IAS 37 constrain provision recognition, and what conditions apply? Calculate the potential 20X0 and 20X1 restoration amounts using the supplied factors, stating the assumptions needed for recognition and for allocating the related cost.",
    ),
    solution: [
      text(
        "لا يجوز تكوين مخصص لخسائر تشغيل مستقبلية أو تكاليف يمكن تجنبها. يلزم التزام حالي قانوني أو ضمني من حدث ماضٍ، ورجحان خروج موارد، وتقدير موثوق. وعند التعويل على قانون لم يصدر بعد، يلزم أن يكون إقراره بصيغته شبه مؤكد وأن يكون الحدث الملزم قد وقع؛ مجرد احتمال سياسي أو إعلان لا يكفي.",
        "A provision cannot be used for future operating losses or avoidable costs. Recognition requires a present legal or constructive obligation from a past event, a probable outflow and a reliable estimate. For an unenacted law, enactment as drafted must be virtually certain and the obligating event must already have occurred; political expectation or announcement alone is insufficient.",
      ),
      text(
        "إذا ثبت في 31 ديسمبر 20X0 أن القانون شبه مؤكد بصيغته وأنه يلزم Extract بإصلاح تلوث حدث بالفعل، وافترض أن كامل التدفق النقدي البالغ مليوني دولار يخص هذا الالتزام، فالقيمة الحالية = 2,000,000 × 0.621 = 1,242,000 دولار. هذا مبلغ مشروط، وليس مخصصًا مثبتًا قطعًا من عبارة «شبه مؤكد تمريره» وحدها؛ صدور القانون في مارس لا ينشئ التزام ديسمبر بأثر رجعي.",
        "If, at 31 December 20X0, enactment as drafted is virtually certain and the law will oblige Extract to repair contamination already caused, and the entire $2m cash flow relates to that obligation, present value is $2,000,000 × 0.621 = $1,242,000. This is a conditional amount, not a definitive 20X0 provision from 'virtually certain to pass' alone; enactment in March does not retrospectively create a December obligation.",
      ),
      text(
        "إذا شمل القانون النافذ كامل التلوث المعني في 31 ديسمبر 20X1 وظل التدفق والتوقيت ثابتين، تكون القيمة الحالية = 2,000,000 × 0.683 = 1,366,000 دولار. إذا كان مخصص 1,242,000 قد أُثبت في 20X0، فالزيادة التقريبية من فك الخصم 124,000 دولار، وتعرض تكلفة تمويل؛ فرق التقريب عن 10% × 1,242,000 سببه المعاملات المقربة. أما إذا نشأ الالتزام لأول مرة في 20X1 فلا يُنسب فك خصم إلى سنة سابقة.",
        "If the enacted law covers all relevant contamination at 31 December 20X1 and amount and timing are unchanged, present value is $2,000,000 × 0.683 = $1,366,000. If a $1,242,000 provision was recognised in 20X0, the approximately $124,000 increase from unwinding the discount is a finance cost; the small difference from 10% × $1,242,000 is caused by rounded factors. If the obligation first arose in 20X1, there is no prior-year discount unwind to attribute.",
      ),
      text(
        "لا يثبت أصل غير متداول تلقائيًا مقابل كامل المخصص. تكلفة إعادة الموقع التي ترتبط بأصل مؤهل قد تدخل IAS 16؛ أما الالتزامات الناشئة من استخدام الموقع لإنتاج مخزون في فترة معينة فتخضع لتحليل IAS 2 مع قياس المخصص وفق IAS 37. فقط إذا رُسمل مبلغ 1,242,000 كاملًا في أصل يستفاد منه لخمس سنوات من نهاية 20X0، يكون إهلاك 20X1 = 248,400 وقيمته الدفترية = 993,600؛ لا تتوافر في السؤال تفاصيل تكفي لاعتماد هذه الرسملة لكل المبلغ دون شرط.",
        "Do not automatically debit a non-current asset for the entire provision. Restoration attributable to a qualifying asset may be included under IAS 16; obligations arising from using the site to produce inventory in a period require IAS 2 analysis, while the provision is measured under IAS 37. Only if all $1,242,000 was properly capitalised in an asset benefiting five years from the end of 20X0 would 20X1 depreciation be $248,400 and closing carrying amount $993,600. The question does not establish that whole-amount capitalisation without qualification.",
      ),
    ],
    reference: "IAS 37.14–22, 36, 45–47, 60; IAS 16.16(c)–18; IAS 2.9–16; IFRIC 1.8",
  },
  {
    id: "ifrs-book2-biogenics-internally-generated-ias38",
    standardCode: "IAS 38",
    title: text("Biogenics: متى يُعترف بأصل غير ملموس مطوّر داخليًا؟", "Biogenics: when is an internally generated intangible recognised?"),
    facts: text(
      "سؤال نظري عن أصل غير ملموس تطوره المنشأة داخليًا، مثل البرمجيات؛ لا يقدم مبالغ أو تواريخ مشروع محدد.",
      "A conceptual question about an internally generated intangible asset such as software; it supplies no project-specific amounts or dates.",
    ),
    question: text(
      "وفق IAS 38، ناقش بإيجاز متى يُعترف بأصل غير ملموس مطوّر داخليًا، وكيف يُقاس أولًا ويُحاسب عنه بعد الاعتراف.",
      "Under IAS 38, briefly discuss whether an internally developed intangible asset can be recognised and, if so, how it is initially measured and subsequently accounted for.",
    ),
    solution: [
      text("ليس كل إنفاق داخلي أصلًا، وليس كل أصل مطوّر داخليًا ممنوع الاعتراف به. يجب أن يكون المورد غير نقدي بلا جوهر مادي، قابلًا للتحديد، خاضعًا لسيطرة المنشأة، ومتوقعًا منه منافع مستقبلية مع إمكان قياس تكلفته بموثوقية. لا يُعترف بالشهرة والعلامات التجارية وقوائم العملاء المتولدة داخليًا لمجرد الإنفاق عليها.", "Internal spending is not automatically an asset, but internally developed assets are not categorically prohibited. The resource must be identifiable, non-monetary and without physical substance, controlled by the entity, with probable future benefits and reliably measurable cost. Internally generated goodwill, brands and customer lists are not recognised merely because expenditure was incurred."),
      text("إنفاق مرحلة البحث مصروف حين يُتكبد. تبدأ رسملة التطوير فقط من تاريخ إثبات الشروط الستة مجتمعة: إمكان الإكمال تقنيًا، ونية الإكمال، والقدرة على الاستخدام أو البيع، ومنافع اقتصادية مستقبلية محتملة، وموارد كافية، وقياس موثوق للنفقات المنسوبة. إذا تعذر فصل البحث عن التطوير، يعامل الإنفاق كله كبحث. ما حُمّل مصروفًا سابقًا لا يُعاد إلى تكلفة الأصل لاحقًا.", "Research expenditure is expensed as incurred. Development cost is capitalised only from the date all six conditions are demonstrated: technical feasibility, intention and ability to complete and use or sell, probable future benefits, adequate resources, and reliable measurement of attributable expenditure. If research and development cannot be distinguished, treat the expenditure as research. Previously expensed amounts are not reinstated as asset cost later."),
      text("يقاس الأصل المؤهل أولًا بتكاليف التطوير المنسوبة إليه من تاريخ تحقق الشروط. بعد الاعتراف تختار المنشأة نموذج التكلفة ناقص الإطفاء والانخفاض، أو نموذج إعادة التقييم للفئة إذا وُجد سوق نشطة نادرة لهذا الأصل. يبدأ إطفاء الأصل ذي العمر المحدد عندما يصبح متاحًا للاستخدام، لا بمجرد دفع التكاليف؛ أما العمر غير المحدد فلا إطفاء له لكنه يخضع لاختبار انخفاض سنوي. الأصل غير الجاهز للاستخدام يُختبر سنويًا أيضًا.", "Initially measure a qualifying asset at directly attributable development cost incurred from the date the criteria are met. Subsequently use cost less amortisation and impairment, or the class-wide revaluation model when the rare required active market exists. Amortise a finite-life asset from when it is available for use, not simply from when cash is spent. An indefinite-life asset is not amortised but is tested annually for impairment; an asset not yet available for use is also tested annually."),
      text("تغيّر التوقعات بعد الاعتراف لا يؤدي وحده إلى شطب الأصل فورًا؛ تُراجع القيمة القابلة للاسترداد والعمر النافع وفق IAS 36 وIAS 38. ولا تُستنتج قيمة أصل أو قيد رقمي من هذا السؤال النظري دون بيانات مشروع فعلية.", "A later change in expectations does not by itself automatically write off a recognised asset; assess recoverable amount and useful life under IAS 36 and IAS 38. This conceptual question supplies no basis for a project-specific asset value or journal amount."),
    ],
    reference: "IAS 38.8, 18–23, 48–67, 71–75, 97, 107–108; IAS 36.10",
  },
  {
    id: "ifrs-book2-biogenics-development-patent-list",
    standardCode: "IAS 38",
    title: text("Biogenics: تطوير الدواء والبراءة وقائمة الأطباء", "Biogenics: drug development, patent and GP list"),
    facts: text(
      "خلال السنة المنتهية في 31 ديسمبر 20X9 أنفقت Biogenics ستة ملايين دولار على تطوير دواء للسمنة. حصل الدواء على موافقة سريرية في 1 يوليو 20X9 وأصبح ناجحًا تجاريًا، ويتوقع المديرون أن يحقق ربحًا خلال 12 شهرًا من الموافقة. سُجلت براءة في 1 يوليو بتكلفة 1.5 مليون دولار وتسري ثلاث سنوات. وفي 1 سبتمبر اشترت الشركة قائمة حديثة بأطباء الممارسة العامة مقابل 500,000 دولار وتستخدمها في زيارات ترويجية؛ ويتوقع أن تولد مبيعات طوال دورة حياة الدواء. لا تفصل الوقائع إنفاق التطوير قبل تاريخ تحقق شروط IAS 38 وبعده، ولا تحدد تاريخ جاهزية الدواء للاستعمال، أو العمر النافع المحدد للقائمة.",
      "During the year ended 31 December 20X9 Biogenics spent $6 million developing an obesity drug. It received clinical approval on 1 July 20X9 and is proving commercially successful; directors expect a profit within 12 months of approval. A patent was registered on 1 July at a cost of $1.5 million and lasts three years. On 1 September the company bought an up-to-date list of general practitioners for $500,000 and uses it for promotional visits; sales are expected throughout the drug's life cycle. The facts do not split development spending before and after the IAS 38 criteria date, identify when the drug became available for use, or quantify the list's useful life.",
    ),
    question: text(
      "ما الأصول والمصروفات المتعلقة بتطوير الدواء والبراءة والقائمة التي يمكن إثباتها في 31 ديسمبر 20X9؟ وما الأرقام التي لا يمكن تحديدها من هذه الوقائع؟",
      "Which drug-development, patent and list assets or expenses can be supported at 31 December 20X9, and which amounts cannot be determined from these facts?",
    ),
    solution: [
      text(
        "لا تُرسمل الستة ملايين دولار كلها لمجرد الموافقة السريرية أو النجاح اللاحق. يبدأ أصل التطوير من تاريخ إثبات جميع شروط IAS 38.57، بما فيها الجدوى الفنية، والنية والقدرة على الاستخدام أو البيع، والمنافع المتوقعة، والموارد، والقياس الموثوق. يُصرف الإنفاق السابق لذلك التاريخ ولا يعاد إحياؤه أصلًا لاحقًا. لا يحدد السؤال متى استوفيت الشروط الستة ولا مقدار الإنفاق منذ ذلك التاريخ؛ لذا لا يمكن استخراج تكلفة أصل التطوير أو مصروفه النهائيين.",
        "Do not capitalise the entire $6 million merely because of clinical approval or later success. A development asset begins when all IAS 38.57 criteria can be demonstrated, including feasibility, intention and ability to use or sell, probable benefits, resources and reliable measurement. Earlier expenditure remains expense and cannot later be reinstated as an asset. The question states neither the date all six criteria were met nor spending thereafter, so definitive development-asset cost and expense cannot be calculated.",
      ),
      text(
        "تكلفة البراءة المسجلة 1.5 مليون دولار تُحلل حقًا قانونيًا قابلًا للتحديد؛ وتبدأ تكلفة حق مؤهل من المبلغ المدفوع، مع فحص ما إذا كان جزءًا من أصل التطوير أو أصلًا منفصلًا لتجنب ازدواج التكلفة. مدة الحماية القانونية ثلاث سنوات ليست دليلًا على عمر اقتصادي أطول منها. يبدأ الإطفاء عند إتاحة الأصل للاستخدام، لا لمجرد دفع التكلفة أو توقع الربح.",
        "Analyse the registered $1.5 million patent as an identifiable legal right measured from its qualifying cost, while assessing whether it is part of the development asset or a separate asset to avoid double-counting. Its three-year legal protection does not support a longer economic useful life. Amortisation starts when the asset is available for use, not merely when paid for or when profit is forecast.",
      ),
      text(
        "إذا كانت البراءة متاحة للاستخدام من 1 يوليو، وكان عمرها النافع ثلاث سنوات، وقيمتها المتبقية صفرًا، واستخدم القسط الثابت، يصبح إطفاء ستة أشهر = 1,500,000 ÷ 3 × 6 ÷ 12 = 250,000 دولار، والقيمة الدفترية 1,250,000 دولار قبل أي انخفاض. هذه أرقام مشروطة؛ إن اختلف تاريخ الإتاحة أو العمر الاقتصادي تغيرت.",
        "If the patent was available for use on 1 July, its useful life is three years, residual value is nil and straight-line amortisation is appropriate, six months' amortisation is $1,500,000 ÷ 3 × 6 ÷ 12 = $250,000 and carrying amount is $1,250,000 before impairment. These figures are conditional; a different availability date or economic life changes them.",
      ),
      text(
        "القائمة مشتراة من الغير مقابل 500,000 دولار، فلا تُطبق عليها آليًا قاعدة منع إثبات القوائم المولدة داخليًا. اختبر قابلية فصل حق القائمة وسيطرة الشركة عليه والمنافع المستقبلية؛ إن استوفت تعريف وشروط الأصل غير الملموس تثبت بالتكلفة، ثم يبدأ إطفاؤها من تاريخ إتاحتها للاستخدام على عمرها النافع. عبارة «دورة حياة الدواء» لا تحدد عدد الأشهر، ولا تسمح بافتراض 34 شهرًا أو مصروف إطفاء معين في 20X9.",
        "The $500,000 list was bought from a third party, so the prohibition on recognising internally generated lists does not automatically apply. Test separability, the entity's control and future benefits; if it meets the intangible-asset definition and recognition criteria, record its cost and amortise from the available-for-use date over its useful life. 'Drug life cycle' supplies no number of months and does not justify assuming 34 months or a specific 20X9 amortisation charge.",
      ),
      text(
        "تكاليف الزيارات الترويجية نفسها مصروفات عند تلقي الخدمات، ولا تدخل تلقائيًا في تكلفة القائمة أو الدواء؛ لم يعط السؤال مبلغها. لذلك لا يمكن إعداد مجموع نهائي موثوق للأصول غير الملموسة أو الإطفاء أو مصروف السنة من البنود الثلاثة دون سجل الإنفاق وتواريخ الجاهزية وتقدير عمر القائمة.",
        "Promotional-visit costs themselves are expensed as services are received and are not automatically added to the list or drug; their amount is unstated. A reliable total for intangible assets, amortisation or current-year expense from these three items therefore requires the spending schedule, availability dates and estimated list life.",
      ),
    ],
    reference: "IAS 38.18–23, 25–32, 54–57, 63–67, 69, 71, 88–97",
  },
  {
    id: "ifrs-book2-biogenics-research-project",
    standardCode: "IAS 38",
    title: text(
      "Biogenics: رواتب البحث والحاسب المستخدم في المشروع",
      "Biogenics: research salaries and project equipment",
    ),
    facts: text(
      "في 1 أكتوبر 20X9 بدأت Biogenics مشروع بحث عن دواء جديد للسرطان. حتى 31 ديسمبر 20X9 أنفقت 400,000 دولار على رواتب الباحثين واشترت أجهزة حاسب للمشروع بمبلغ 200,000 دولار، عمرها النافع المتوقع أربع سنوات. لا يذكر هذا الجزء تحقق شروط الاعتراف بأصل تطوير أو قيمة متبقية للجهاز؛ وتُعرض أرقام الإهلاك بافتراض أن الجهاز أصبح جاهزًا للاستخدام في 1 أكتوبر ويستهلك بالقسط الثابت بلا قيمة متبقية.",
      "On 1 October 20X9 Biogenics began a research project for a new cancer drug. By 31 December 20X9 it incurred $400,000 researcher salaries and bought computer equipment for the project costing $200,000 with a four-year expected useful life. This part states no development-asset recognition criteria or equipment residual value. Depreciation figures below assume the equipment was available for use on 1 October, is depreciated straight-line and has no residual value.",
    ),
    question: text(
      "ما معالجة رواتب البحث وأجهزة الحاسب في قوائم 31 ديسمبر 20X9؟ ولماذا لا تعامل تكلفة الجهاز بأكملها كمصروف بحث؟",
      "How should the research salaries and computer equipment be treated at 31 December 20X9, and why is the full equipment cost not research expense?",
    ),
    solution: [
      text(
        "رواتب 400,000 تخص مرحلة البحث، فتثبت مصروفًا عند تكبدها وفق IAS 38؛ لا تثبت أصلًا غير ملموس لمجرد توقع إنتاج دواء ناجح. إن تعذر تمييز البحث من التطوير في مشروع داخلي، تعامل المصروفات غير المميزة معاملة البحث حتى تثبت شروط التطوير.",
        "The $400,000 salaries relate to the research phase and are expensed as incurred under IAS 38; an intangible asset is not recognised merely because a successful drug is hoped for. If an internal project's research and development phases cannot be distinguished, unseparated expenditure is treated as research until development criteria can be demonstrated.",
      ),
      text(
        "الحاسب أصل مادي منفصل يستخدم خلال أربع سنوات، فتثبت تكلفته 200,000 ضمن الممتلكات والآلات وفق IAS 16 بدل تحميلها كاملة على نتيجة البحث. يبدأ الإهلاك عند الجاهزية للاستخدام، وليس لمجرد دفع ثمن الجهاز.",
        "The computer equipment is a separate physical asset used over four years, so its $200,000 cost is recognised as property, plant and equipment under IAS 16 rather than expensed in full with research. Depreciation begins when available for use, not merely when paid for.",
      ),
      text(
        "بفرض الجاهزية في 1 أكتوبر وعدم القيمة المتبقية: إهلاك ثلاثة أشهر = 200,000 ÷ 4 × 3/12 = 12,500؛ الرصيد في 31 ديسمبر = 187,500. القيد: مدين مصروف بحث 400,000 ودائن نقد/مستحقات 400,000؛ ومدين مصروف إهلاك 12,500 ودائن مجمع الإهلاك 12,500. إذا تأخرت الجاهزية أو وُجدت قيمة متبقية يتغير رقم الإهلاك.",
        "If available for use on 1 October with no residual value, three months' depreciation = $200,000 ÷ 4 × 3/12 = $12,500 and 31 December carrying amount = $187,500. Entries: debit research expense $400,000 and credit cash/payables $400,000; debit depreciation expense $12,500 and credit accumulated depreciation $12,500. A later available-for-use date or residual value would change the depreciation figure.",
      ),
    ],
    reference: "IAS 38.52–57; IAS 16.15–16, 55",
  },
  {
    id: "ifrs-book2-alpha-gamma-associate",
    standardCode: "IAS 28",
    title: text(
      "Alpha وGamma: زميلة وربح بيع لم يتحقق",
      "Alpha and Gamma: associate and unrealised downstream profit",
    ),
    facts: text(
      "جميع الأرقام بملايين الدولارات. في 1 أبريل 20X5 اشترت Alpha عدد 20 مليون سهم من أصل 50 مليون سهم في Gamma مقابل 1.60 دولار للسهم، وأصبحت قادرة على المشاركة في قراراتها التشغيلية والمالية دون السيطرة عليها. كانت أرباح Gamma المحتجزة يوم الشراء 15؛ وفي 31 مارس 20X7 بلغت 28. لم تُذكر فروق قيمة عادلة يوم الشراء أو انخفاض في الاستثمار. في نهاية 20X7 بقي لدى Gamma مخزون اشترته من Alpha خلال السنة بـ16؛ باعت Alpha البضاعة بسعر التكلفة مضافًا إليه 25%. لا تتوافر في هذا الجزء معطيات لقياس أثر ضريبي مستقل.",
      "All figures are in $m. On 1 April 20X5 Alpha bought 20m of Gamma's 50m shares for $1.60 each and obtained significant influence over operating and financial policies without control. Gamma's retained earnings were 15 at investment and 28 at 31 March 20X7. No acquisition-date fair-value difference or investment impairment is stated. At the 20X7 year-end Gamma still holds inventory it bought from Alpha during the year for 16; Alpha priced it at cost plus 25%. This part of the case provides no inputs for a separate tax-effect calculation.",
    ),
    question: text(
      "احسب القيمة الدفترية لاستثمار Alpha في Gamma بطريقة حقوق الملكية، وفسر سبب استبعاد جزء من ربح البيع رغم عدم تجميع مخزون Gamma بندًا ببند.",
      "Calculate the carrying amount of Alpha's investment in Gamma under the equity method and explain why part of the sale profit is eliminated although Gamma inventory is not consolidated line by line.",
    ),
    solution: [
      text(
        "حصة Alpha = 20 ÷ 50 = 40%. لأن الوقائع تثبت تأثيرًا مهمًا دون سيطرة، تعالج Gamma كزميلة بطريقة حقوق الملكية لا كتابعة؛ تكلفة الاستثمار الأولية = 20 مليون سهم × 1.60 = 32 مليون دولار.",
        "Alpha's interest is 20 ÷ 50 = 40%. With significant influence but no control, Gamma is an associate accounted for by the equity method, not a line-by-line subsidiary; initial investment cost = 20m shares × $1.60 = $32m.",
      ),
      text(
        "حصة Alpha في الأرباح المحتجزة اللاحقة للاقتناء = 40% × (28 − 15) = 5.2 مليون. ربح بيع المخزون = 16 × 25/125 = 3.2 مليون؛ الجزء الذي لم يتحقق من منظور المستثمر وحصته في الزميلة = 40% × 3.2 = 1.28 مليون.",
        "Alpha's share of Gamma's post-investment retained earnings = 40% × (28 − 15) = $5.2m. Profit included in the inventory sale = 16 × 25/125 = $3.2m; the portion unrealised to the investor through its associate interest = 40% × $3.2m = $1.28m.",
      ),
      text(
        "القيمة الدفترية للاستثمار في الزميلة = 32 + 5.2 − 1.28 = 35.92 مليون دولار. يُخصم الربح غير المحقق من رصيد الاستثمار بطريقة حقوق الملكية وربح المستثمر، ولا يُخفض كامل مخزون Gamma في قائمة المجموعة لأن الزميلة غير مجمعة بندًا ببند. الرقم يستبعد أي أثر ضريبي لا يمكن اشتقاقه من هذا الجزء وحده.",
        "Associate carrying amount = $32m + $5.2m − $1.28m = $35.92m. Eliminate Alpha's unrealised downstream gain against the equity-method investment and investor profit; do not reduce all of Gamma's inventory in the consolidated statement because an associate is not consolidated line by line. This amount excludes any tax effect not determinable from these isolated facts.",
      ),
    ],
    reference: "IAS 28.10, 28–30; IFRS 10.7",
  },
  {
    id: "ifrs-book2-sirus-marne-director-payments",
    standardCode: "IFRS 3",
    title: text("Sirus/Marne: دفعات المديرين بعد الاستحواذ", "Sirus/Marne: payments to directors after acquisition"),
    facts: text(
      "استحوذت Sirus على Marne في 1 مايو 20X7. كان مديرو Marne هم ملاكها الوحيدين، وعُرضت عليهم حصة أرباح أعلى في الأعمال المدمجة لسنتين بعد الاستحواذ لحثهم على قبول العرض، ثم تعود مكافآتهم إلى مستواها المعتاد. قدرت Sirus تكلفة الدفعات بخمسة ملايين دولار عند 30 أبريل 20X8 وستة ملايين عند 30 أبريل 20X9، وتدفع نقدًا بعد نهاية كل سنة بقليل. لا يذكر السؤال هل يسقط الحق عند توقف المدير عن العمل، ولا شروط خدمة ملزمة، أو معادلة الحصة، أو معدل خصم.",
      "Sirus acquired Marne on 1 May 20X7. Marne's directors were its only shareholders and were offered a higher profit share in the combined business for two years after acquisition as an incentive to accept the offer; remuneration then returns to normal. Sirus estimated the payments at $5 million at 30 April 20X8 and a further $6 million at 30 April 20X9, payable in cash shortly after each year-end. The question does not state whether entitlement is forfeited on termination of employment, any required service term, the profit-share formula or a discount rate.",
    ),
    question: text(
      "هل تدخل دفعات المديرين في مقابل الاستحواذ وشهرة Marne، أم تُعالج كتعويض عن خدماتهم اللاحقة؟ بيّن أثر كل مسار وما يلزم لحسم التصنيف.",
      "Are the directors' payments part of Marne's acquisition consideration and goodwill, or compensation for their later services? Explain each outcome and the facts needed to decide.",
    ),
    solution: [
      text(
        "يفصل IFRS 3 بين ثمن الحصول على المنشأة ومعاملة مستقلة تكافئ الملاك السابقين عن خدمات ما بعد الاستحواذ. صفة «ملاك سابقين» أو عبارة «حافز لقبول العرض» لا تحسمان وحدهما التصنيف؛ راجع اتفاقي البيع والعمل، وسبب الدفعة، ومن يحصل عليها، ومدة العمل مقارنة بمدة الدفع، ومستوى الأجر المعتاد.",
        "IFRS 3 separates consideration for the business from a separate transaction remunerating former owners for post-combination services. Being former shareholders or describing a payment as an incentive to accept the offer is not conclusive. Review the sale and employment agreements, why the payment was arranged, who receives it, the service and payment periods, and normal remuneration.",
      ),
      text(
        "إذا سقطت الدفعات آليًا عند انتهاء عمل المدير وكان شرط الخدمة جوهريًا، فهي تعويض عن خدمة لاحقة لا مقابل استحواذ، حتى لو كان المستفيدون هم البائعين. تُثبت تكلفة الخدمة والالتزام تبعًا لفترات استحقاقها وفق IAS 19، لا تضاف إلى الشهرة يوم 1 مايو. في 30 أبريل 20X8 قد يستحق مبلغ السنة الأولى المقدر بخمسة ملايين إذا أُديت الخدمة ونشأ التزام قابل للتقدير؛ ولا يُحمّل مبلغ السنة الثانية البالغ ستة ملايين على السنة الأولى لمجرد توقعه.",
        "If payments are automatically forfeited when a director's substantive employment ends, they are compensation for post-combination service rather than acquisition consideration, even though the recipients sold Marne. Recognise service cost and the related obligation over the earning periods under IAS 19, not in goodwill on 1 May. At 30 April 20X8 the estimated $5 million for year one may be accrued if the service was rendered and a reliably measurable obligation arose; do not charge the further $6 million for unrendered year-two service to year one merely because it is forecast.",
      ),
      text(
        "إذا بقي حق المديرين في الدفعات عند ترك العمل، فقد تكون مقابلًا احتماليًا للاستحواذ بحسب بقية الشروط. عندئذ يُقاس الجزء المصنف مقابلًا بالقيمة العادلة في تاريخ الاستحواذ مع احتمالات التدفقات والقيمة الزمنية، ويؤثر في الشهرة؛ والمقابل النقدي المصنف التزامًا يعاد قياسه لاحقًا وفق القواعد المطبقة. لا يصح إدراج 5 + 6 = 11 مليون دولار غير مخصومة تلقائيًا في الشهرة، ولا يمكن حساب القيمة العادلة من الوقائع المعطاة.",
        "If the directors retain entitlement after leaving employment, the payments may instead be contingent acquisition consideration depending on the other terms. Measure any consideration component at acquisition-date fair value using cash-flow probabilities and time value, affecting goodwill; a cash-settled liability is subsequently remeasured under the applicable rules. Automatically adding the undiscounted $5 million + $6 million = $11 million to goodwill is unsupported, and the facts do not permit a fair-value calculation.",
      ),
      text(
        "قد يتطلب العقد فصل جزء يُدفع ثمنًا وجزء يرتبط بالخدمة إذا دلّت البنود على عنصرين. قبل إعداد قيد عددي، احصل على نص شرط انتهاء العمل، وشرط الربح، وتوقعات الدفع عند تاريخ الشراء، وطريقة التسوية. لا تحول التقديرين بنهاية السنتين إلى أرقام شراء مؤكدة.",
        "The contract may require separating an acquisition-price element from a service element if its terms contain both. Before recording an amount, obtain the termination provision, profit formula, acquisition-date payment expectations and settlement terms. The two year-end estimates are not automatically fixed acquisition-date amounts.",
      ),
    ],
    reference: "IFRS 3.39–40, 51–52, 58, B54–B55; IAS 19.11, 19–22",
  },
  {
    id: "ifrs-book2-sirus-bank-loan-repayment",
    standardCode: "IFRS 9",
    title: text("Sirus: قرض مع خيار سداد بعد سبع سنوات", "Sirus: loan with a seven-year repayment option"),
    facts: text(
      "اقترضت Sirus مليوني دولار في 1 مايو 20X7؛ فائدة 8% سنويًا تُدفع متأخرة، وأصل القرض يستحق بعد عشر سنوات. يسمح العقد للشركة بالسداد بعد سبع سنوات بدفع أصل المليوني دولار، وفائدة السنة السابعة، وغرامة 200,000 دولار. يعطى معدل فعلي 9.1% لمسار استعمال هذا الخيار. في 30 أبريل 20X8 كانت الإدارة تناقش مبدئيًا مع البنك إمكان السداد في السنة المالية التالية، دون اتفاق معدل. لا يحدد السؤال التوقع المثبت عند نشأة القرض بشأن استعمال خيار السنوات السبع، أو تاريخ دفع أول فائدة بدقة.",
      "Sirus borrowed $2 million on 1 May 20X7 at 8% annual interest payable in arrears, with principal due after ten years. The contract permits Sirus to repay after seven years by paying the $2 million principal, year-seven interest and a $200,000 penalty. An effective rate of 9.1% is supplied for the seven-year option path. At 30 April 20X8 management was in preliminary discussions with the bank about repayment in the following financial year, without an amended agreement. The question does not establish the inception expectation about exercise of the seven-year option or the exact first-interest payment date.",
    ),
    question: text(
      "كيف تقيس Sirus القرض وتكلفة تمويله في 30 أبريل 20X8؟ وهل تجعل مباحثات السداد المبكر أصل القرض التزامًا متداولًا؟",
      "How should Sirus measure the loan and its finance cost at 30 April 20X8, and do early-repayment discussions make its principal a current liability?",
    ),
    solution: [
      text(
        "الفائدة النقدية السنوية 2,000,000 × 8% = 160,000 دولار، لكن مصروف التمويل بالتكلفة المطفأة يستخدم معدل الفائدة الفعلي المستند إلى التدفقات المتوقعة عند الاعتراف الأولي، مع مراعاة الشروط الفعلية وتكاليف التعامل إن وجدت. لا يُختار 8% أو 9.1% من نية الإدارة في نهاية السنة وحدها.",
        "Annual contractual interest is $2,000,000 × 8% = $160,000, but amortised-cost finance expense uses the effective interest rate based on initially estimated contractual cash flows and actual terms, including any transaction costs. Management's year-end intention alone does not select 8% or 9.1%.",
      ),
      text(
        "إذا كان المسار المتوقع عند النشأة هو السداد بعد عشر سنوات بالقيمة الاسمية، ولا توجد تكاليف أو فروق أولية أخرى، تكون الفائدة الفعلية 8%: مصروف السنة 160,000 ودفع الفائدة أو إثبات مستحقها 160,000، ويبقى أصل القرض بتكلفة مطفأة قدرها مليونا دولار.",
        "If ten-year repayment at par was expected at inception and there were no other initial costs or differences, the effective rate is 8%: first-year finance expense is $160,000, with $160,000 paid or accrued, and the principal remains at $2 million amortised cost.",
      ),
      text(
        "إذا كان استعمال خيار السنوات السبع متوقعًا عند النشأة وكان 9.1% هو المعدل الفعلي الصحيح لذلك المسار، فمصروف السنة التقريبي 2,000,000 × 9.1% = 182,000 دولار. بعد فائدة نقدية 160,000، تزيد التكلفة المطفأة بنحو 22,000 إلى 2,022,000 دولار؛ قد يختلف التقريب بحسب معدل الفائدة الفعلي الدقيق وتوقيت الدفع.",
        "If exercising the seven-year option was expected at inception and 9.1% is the correct effective rate for that path, approximate first-year expense is $2,000,000 × 9.1% = $182,000. After $160,000 contractual interest, amortised cost rises by about $22,000 to $2,022,000; rounding and payment timing can affect the precise figure.",
      ),
      text(
        "إذا تغير تقدير التدفقات التعاقدية المسموح بها لاحقًا، يُعاد حساب التكلفة المطفأة بالقيمة الحالية للتدفقات المقدرة باستخدام المعدل الفعلي الأصلي ويُعترف بأثر التعديل وفق IFRS 9؛ أما التفاوض الأولي على سداد العام التالي، الذي لا يتيحه العقد الحالي، فلا يثبت وحده تعديلًا تعاقديًا نافذًا أو مبلغ إعادة قياس قابلًا للحساب.",
        "If estimated permitted contractual cash flows subsequently change, recalculate amortised cost as their present value discounted at the original effective rate and recognise the adjustment under IFRS 9. Preliminary talks about next-year repayment, which the existing contract does not itself permit, do not alone establish an effective modification or a calculable remeasurement.",
      ),
      text(
        "في 30 أبريل 20X8 لا يستحق أصل القرض خلال 12 شهرًا وفق العقد القائم؛ وأقرب سداد اختياري تعاقدي للشركة يأتي بعد سبع سنوات من بدء القرض. ما دامت Sirus تملك في تاريخ التقرير حق تأجيل تسوية أصل الدين لأكثر من 12 شهرًا، يعرض أصل القرض غير متداول حتى لو رغبت الإدارة في التفاوض على سداده مبكرًا. تصنف الفائدة المستحقة القريبة منفصلة ضمن المتداول إن لم تكن قد دفعت.",
        "At 30 April 20X8 the principal is not contractually due within twelve months; the earliest contractual optional repayment by Sirus is seven years from origination. If Sirus has the reporting-date right to defer principal settlement beyond twelve months, classify principal as non-current even if management hopes to negotiate earlier payment. Any near-term accrued interest is current separately if unpaid.",
      ),
    ],
    reference: "IFRS 9.4.2.1, Appendix A, B5.4.6; IAS 1.69(d), 75A",
  },
  {
    id: "ifrs-book2-sirus-retirement-annuities",
    standardCode: "IAS 19",
    title: text("Sirus: نوعان من معاشات المديرين السابقين", "Sirus: two former-director annuities"),
    facts: text(
      "تلتزم Sirus تعاقديًا أو بحكم الممارسة بدفعات سنوية لمديرين بعد التقاعد، وتتحدد حقوقهم بمدة خدمتهم. تتلقى مجموعة مبلغًا سنويًا ثابتًا لمدة محددة تبدأ بعد أول ذكرى للتقاعد؛ وإذا توفي أحدهم يُدفع لتركته المبلغ الذي يمثل القيمة الحالية للدفعات الباقية. وتتلقى مجموعة أخرى مبلغًا سنويًا ثابتًا ينتهي عند الوفاة. لا يذكر السؤال قيمة الأقساط أو مدد الخدمة أو أعمار المستفيدين أو معدل الخصم أو أصول خطة.",
      "Sirus has contractual or constructive obligations to pay annual amounts to former directors after retirement, with entitlements based on length of service. One group receives a fixed annual amount for a fixed term beginning on the first anniversary of retirement; if a director dies, the present value of remaining payments is paid to the estate. Another group receives a fixed annual amount that ceases on death. Instalment amounts, service periods, beneficiaries' ages, discount rates and plan assets are not supplied.",
    ),
    question: text(
      "كيف تُصنف وتعالج مجموعتا المعاشات عن خدمة المديرين؟ وما أثر شرط الدفع للتركة مقارنة بشرط توقف الدفعات عند الوفاة؟",
      "How should the two service-earned annuities be classified and accounted for, and how do the estate-payment and death-cessation terms affect measurement?",
    ),
    solution: [
      text(
        "كلتا الحالتين وعد بمنافع ما بعد انتهاء العمل نشأ من خدمة المديرين، فيُختبر ضمن IAS 19. الوعد بدفع معاش محدد من صاحب العمل ليس خطة مساهمات محددة لمجرد ثبات القسط؛ ما لم يقتصر التزام صاحب العمل على مساهمة ثابتة لصندوق بلا التزام إضافي، فهو التزام منافع محددة. لا تُنقل الحالة الأولى تلقائيًا إلى IAS 32 أو IFRS 9 لأنها تُسدد نقدًا، ولا الثانية إلى IAS 37 لمجرد عدم يقين موعد الوفاة؛ التزامات أصحاب العمل ضمن خطط منافع الموظفين مستثناة من نطاق معايير الأدوات المالية وتُعالج بـIAS 19.",
        "Both arrangements promise post-employment benefits earned through directors' service and are assessed under IAS 19. An employer's promise of a specified annuity is not a defined contribution plan merely because the instalment is fixed; absent a fixed-only contribution to a fund with no further obligation, it is a defined benefit obligation. Cash settlement does not automatically move the first plan to IAS 32 or IFRS 9, nor does uncertain death timing move the second to IAS 37: employers' employee-benefit-plan obligations are accounted for under IAS 19 rather than the financial-instrument standards.",
      ),
      text(
        "في المعاش محدد المدة، يبقى التزام الدفعات الباقية خلال الفترة المضمونة حتى بعد وفاة المدير لأن التركة تستلم قيمتها الحالية؛ لذا لا يُفترض أن الوفاة بعد التقاعد تُسقط تلك التدفقات. تُقدّر القيمة الحالية للمنافع المنسوبة إلى سنوات الخدمة مع مراعاة توقيت الدفعات والخصم وأي شروط أهلية قبل التقاعد.",
        "For the fixed-term annuity, the guaranteed remaining payments persist after the director dies because the estate receives their present value; post-retirement death therefore does not eliminate those cash flows. Estimate the present value of benefits attributed to service years, taking payment timing, discounting and any pre-retirement eligibility terms into account.",
      ),
      text(
        "في المعاش المنتهي بالوفاة، تعتمد الدفعات المتوقعة على بقاء المستفيد حيًا؛ فتدخل افتراضات الوفيات وسنوات الحياة المتوقعة ضمن القياس الاكتواري إلى جانب الخصم. لا تعامل مدة الحياة مجهولة كسبب لإهمال الالتزام أو لتطبيق نموذج مخصص ضمانات بدل نموذج منافع الموظفين.",
        "For the annuity ending at death, expected payments depend on the beneficiary's survival, so mortality and expected lifetime enter the actuarial measurement along with discounting. Uncertain lifetime is not a reason to ignore the obligation or replace employee-benefit measurement with a warranty-provision model.",
      ),
      text(
        "تُنسب المنافع إلى فترات الخدمة وفق IAS 19 ويقاس التزام المنافع المحددة بالقيمة الحالية، مطروحًا منه أصول الخطة المؤهلة إن وجدت. تُعرض تكلفة الخدمة وصافي الفائدة في الربح أو الخسارة، وإعادة القياس الاكتواري في الدخل الشامل الآخر وفق المتطلبات المطبقة. لا يمكن استخراج قيد أو رصيد عددي من البيانات المذكورة وحدها.",
        "Attribute benefits to service periods under IAS 19 and measure the defined benefit obligation at present value, net of qualifying plan assets if any. Service cost and net interest affect profit or loss; actuarial remeasurements are recognised in other comprehensive income under the applicable requirements. No numerical entry or balance can be derived from the supplied facts alone.",
      ),
    ],
    reference: "IAS 19.8, 26–27, 57–67, 70–73, 81–83, 120; IAS 32.4(b); IFRS 9.2.1(c)",
  },
  {
    id: "ifrs-book2-sirus-director-shares",
    standardCode: "IAS 32",
    title: text(
      "Sirus: أسهم مديرين واجبة الاسترداد وتوزيعات غير معتمدة",
      "Sirus: redeemable directors' shares and unapproved distributions",
    ),
    facts: text(
      "تلزم عقود خدمة مديري Sirus كل مدير بشراء أسهم عادية من الفئة B عند تعيينه، وترد الشركة رأس المال له نقدًا عند مغادرته. المديرون وحدهم يحملون هذه الفئة. في 30 أبريل 20X8 تعرض الشركة أسهم الفئة A بمبلغ 100 مليون دولار، والفئة B بمبلغ 20 مليونًا، وأرباحًا محتجزة 30 مليونًا تحت بند حقوق الملكية. أوصى مجلس الإدارة بدفع 3 ملايين لحملة B إضافة إلى أجور تعاقدية للمديرين 10 ملايين؛ لكن دفع الـ3 ملايين يتطلب موافقة أغلبية جميع المساهمين في اجتماع عام، ولم تصدر الموافقة بعد. لا يورد السؤال توقيت مغادرة المديرين أو معدل الخصم أو نصًا يجعل توزيعات B إلزامية.",
      "The service agreements of Sirus directors require each director to buy class B ordinary shares on appointment, and Sirus must repay the subscribed capital in cash when the director leaves. Directors alone hold class B. At 30 April 20X8 Sirus presents class A shares of $100m, class B shares of $20m and retained earnings of $30m as equity. The board recommends a $3m payment to B holders in addition to $10m contractual remuneration, but the $3m requires approval by a majority of all shareholders at a general meeting; approval has not occurred. The case supplies no directors' departure dates, discount rate or term making the B distributions compulsory.",
    ),
    question: text(
      "بيّن تصنيف أسهم B وأثر التزام رد رأس المال، وهل تُثبت توصية توزيع 3 ملايين كالتزام في تاريخ القوائم، مع التمييز بينها وبين الأجور التعاقدية.",
      "Classify the B shares and the repayment obligation, determine whether the recommended $3m distribution is a reporting-date liability, and distinguish it from contractual remuneration.",
    ),
    solution: [
      text(
        "الاسم القانوني «أسهم عادية» لا يحسم التصنيف. يوجب العقد تسليم نقد للمدير عند مغادرته، ولا تستطيع Sirus تجنب السداد؛ لذلك يتضمن ترتيب B التزامًا ماليًا، ولا يصح عرض كامل المبلغ المكتتب به تلقائيًا ضمن حقوق الملكية. استثناء الأدوات القابلة للرد في IAS 32 يحتاج شروطًا محددة، ولا تثبتها وقائع هذه الفئة التي يحملها المديرون وحدهم مع وجود الفئة A.",
        "The legal label 'ordinary shares' does not determine classification. The contract obliges Sirus to deliver cash when a director leaves, without an unconditional ability to avoid payment; the B arrangement therefore contains a financial liability and cannot automatically remain wholly in equity. IAS 32's puttable-instrument equity exception has specific conditions not established for this directors-only class alongside class A.",
      ),
      text(
        "يقاس عنصر الالتزام وفق الشروط التعاقدية وقواعد القياس ذات الصلة؛ لا يمكن استنتاج أن رصيده في 30 أبريل يساوي 20 مليونًا، أو حساب قيمته الحالية، دون مبلغ الاسترداد التفصيلي وتوقيته ومعدل مناسب. يلزم أيضًا فحص أي حقوق متبقية قد تشكل مكون حقوق ملكية؛ لا تكفي المعطيات لتقسيم رقمي قاطع.",
        "Measure the liability component under the contractual terms and relevant measurement rules. The facts do not establish that its 30 April carrying amount is exactly $20m, nor permit present-value calculation without detailed redemption amounts, timing and an appropriate rate. Any residual equity rights must also be assessed; no defensible numerical split is possible here.",
      ),
      text(
        "توصية توزيع 3 ملايين ليست التزامًا قائمًا في 30 أبريل، لأن أغلبية المساهمين تستطيع رفضها ولم تعتمدها بعد. إذا نشأ لاحقًا التزام بدفع عائد على أداة مصنفة التزامًا ماليًا، يعرض العائد وفق طبيعتها ضمن الربح أو الخسارة لا كتوزيع حقوق ملكية. أما أجور المديرين التعاقدية البالغة 10 ملايين فهي مصروف خدمة منفصل وليست جزءًا من توصية التوزيع.",
        "The recommended $3m is not a present obligation at 30 April because shareholder approval can still be withheld. If an obligation to pay a return on a liability-classified instrument later arises, the return follows the instrument's liability classification in profit or loss rather than being an equity distribution. The $10m contractual directors' remuneration is a separate service expense, not part of the proposed distribution.",
      ),
    ],
    reference: "IAS 32.15–18, 16A–16B, 35–36; IFRS 9.4.2.1",
  },
  {
    id: "ifrs-book2-vident-share-options",
    standardCode: "IFRS 2",
    title: text(
      "Vident: شرطان مختلفان لاستحقاق خيارات المديرين",
      "Vident: two different conditions for director share options",
    ),
    facts: text(
      "للسنة المنتهية في 31 مايو 20X5، منحت Vident في 1 يونيو 20X3 عدد 20,000 خيار للمدير الأول، القيمة العادلة يوم المنح 5 دولارات للخيار وسعر الممارسة 4.50. يشترط نمو ربحية السهم السنوية 4% مع استمرار الخدمة حتى 1 يونيو 20X5؛ معدلات النمو الفعلية المعطاة 4.5% ثم 4.1% ثم 4.2%، ولم يغادر المدير. ومنحت في 1 يونيو 20X4 عدد 50,000 خيار لمدير ثانٍ، قيمتها العادلة يوم المنح 6 دولارات وسعر الممارسة 6؛ تتطلب خدمته ثلاث سنوات حتى 1 يونيو 20X7 وبلوغ السهم مستوى أعلى من 13.50 دولار، بينما سعره في 31 مايو 20X5 هو 12. لم يغادر أي مدير ولا يُتوقع مغادرته قبل الاستحقاق. تعترض الإدارة على إثبات تكلفة للخيارات لأنها لا تدفع نقدًا، وتشكك في وصف الخدمة مصروفًا، وتخشى تكرار الأثر في ربحية السهم المخفضة أو تثبيط خطط الخيارات الجديدة. Vident تنتقل إلى IFRS في السنة الحالية، ويطلب السؤال تعديل افتتاحي 1 يونيو 20X4 ومصروف السنة.",
      "For the year ended 31 May 20X5, Vident granted 20,000 options to one director on 1 June 20X3 at grant-date fair value $5 per option and exercise price $4.50. Annual EPS growth of at least 4% and continued service until 1 June 20X5 are required; stated growth rates are 4.5%, 4.1% and 4.2%, and the director remains employed. Another director received 50,000 options on 1 June 20X4, grant-date fair value $6 and exercise price $6; three years' service to 1 June 20X7 and a share price above $13.50 are required. The 31 May 20X5 share price is $12. Neither director has left or is expected to leave before vesting. Management argues that options have no cash cost, questions whether service consumption is an expense, fears double counting in diluted EPS, and worries the accounting may discourage new option plans. Vident adopts IFRS in the current year; the question asks for the 1 June 20X4 opening adjustment and current-year expense.",
    ),
    question: text(
      "ناقش اعتراضات المديرين الأربعة على إثبات مكافآت الخيارات، ثم افصل شرط الأداء غير السوقي عن الشرط السوقي واحسب التعديل الافتتاحي ومصروف 20X5 ورصيد احتياطي الخيارات.",
      "Address the directors' four objections to recognising option remuneration, distinguish the non-market from the market condition, then calculate the opening adjustment, 20X5 expense and option reserve.",
    ),
    solution: [
      text(
        "تُقابل الخيارات خدمة المديرين التي تستهلكها المنشأة؛ عدم دفع نقد لا يلغي تكلفة الخدمة. إثبات المصروف يعكس تلقي الخدمة، بينما ربحية السهم المخفضة تعكس احتمال زيادة عدد الأسهم، فلا يوجد احتساب مزدوج للحدث نفسه.",
        "The options are consideration for director services consumed by the entity; the absence of a cash payment does not make the service free. Expense recognition reflects receiving services, whereas diluted EPS depicts possible additional shares, so these are not duplicate recognition of the same event.",
      ),
      text(
        "إذا استُلمت خدمة المدير واستهلكت فورًا ولم تنشئ أصلًا قابلًا للإثبات، يقيد IFRS 2 تكلفة الخدمة مصروفًا يقابله زيادة في حقوق الملكية؛ وسيلة السداد بأسهم لا تغير طبيعة الخدمة المستهلكة. وإظهار أثر الخيارات على مقام ربحية السهم المخفضة يعرض احتمال التخفيف لا تكلفة الخدمة مرة ثانية. قد يؤثر الإفصاح الصادق في قرار المنشأة بمنح خيارات مستقبلًا، لكن هذا أثر اقتصادي لا مبرر لإخفاء تكلفة المكافأة أو تعطيل متطلبات الاعتراف.",
        "When a director's service is received and consumed without creating a recognisable asset, IFRS 2 records the service cost as an expense with a corresponding equity increase; settlement in shares does not change the nature of the consumed service. Potential dilution in the denominator of diluted EPS is not a second charge for that service. Transparent reporting may affect decisions about future option plans, but that economic consequence is no basis for omitting remuneration cost or suspending recognition.",
      ),
      text(
        "شرط نمو ربحية السهم غير سوقي، وتؤخذ احتمالات الاستحقاق منه ومن الخدمة في عدد الخيارات المتوقع استحقاقها؛ وفق الوقائع، يستحق 20,000 خيار للمدير الأول. إجمالي تكلفة المنحة = 20,000 × 5 = 100,000 دولار على سنتين، أي 50,000 للسنة السابقة و50,000 للسنة الحالية.",
        "EPS-growth is a non-market condition; its expected outcome and service affect the number of options expected to vest. On the stated facts, all 20,000 first-director options are expected to vest. Total grant cost = 20,000 × $5 = $100,000 over two years, or $50,000 for each year.",
      ),
      text(
        "هدف سعر السهم للمدير الثاني شرط سوقي أُدخل في القيمة العادلة يوم المنح؛ هبوط السعر إلى 12 في يوم الإقفال لا يلغي مصروف الخدمة ما دامت خدمته المتوقعة مستمرة. تكلفة المنحة 50,000 × 6 = 300,000 على ثلاث سنوات؛ مصروف السنة الأولى 100,000.",
        "The second director's share-price target is a market condition reflected in grant-date fair value; a $12 closing share price does not reverse the service expense while continued service is expected. Grant cost is 50,000 × $6 = $300,000 over three years; first-year expense is $100,000.",
      ),
      text(
        "عند الانتقال، وبافتراض تطبيق IFRS 2 على المنحة السابقة، يُخفض رصيد الأرباح الافتتاحي 50,000 ويُزاد احتياطي خيارات الأسهم 50,000. في 20X5 يكون القيد: مدين مصروف مكافآت بالأسهم 150,000، دائن احتياطي الخيارات 150,000؛ رصيد الاحتياطي التراكمي في 31 مايو 20X5 = 200,000.",
        "At transition, assuming IFRS 2 applies to the earlier grant, debit opening retained earnings $50,000 and credit the share-option reserve $50,000. For 20X5, debit share-based remuneration expense $150,000 and credit the option reserve $150,000; the cumulative closing reserve is $200,000.",
      ),
    ],
    reference: "IFRS 2.7–8, 14–23; IFRS 1.D2; IAS 33.31–32",
  },
  {
    id: "ifrs-book2-vident-share-option-tax",
    standardCode: "IAS 12",
    title: text("Vident: ضريبة مؤجلة لخيارات الأسهم", "Vident: deferred tax on share options"),
    facts: text(
      "في مسألة Vident ذاتها، لا تسمح القواعد الضريبية بخصم مكافأة الخيارات إلا عند ممارستها، ويعتمد الخصم على قيمتها الجوهرية يوم الممارسة. منحة المدير الأول 20,000 خيار، سعر الممارسة 4.50، وسعر السهم في 31 مايو 20X4 كان 12.50 وفي 31 مايو 20X5 أصبح 12؛ المنحة تُحمّل على سنتين، وكان المصروف التراكمي 50,000 ثم 100,000. منحة المدير الثاني 50,000 خيار بسعر ممارسة 6، بدأت في 1 يونيو 20X4 وتُحمّل على ثلاث سنوات؛ مصروفها التراكمي في 31 مايو 20X5 هو 100,000. معدل الضريبة 30%. تفترض الحسابات أن الخصومات المستقبلية ستكون قابلة للاستخدام مقابل أرباح ضريبية محتملة.",
      "In the same Vident case, tax law permits a deduction for options only on exercise, based on intrinsic value at exercise. The first grant has 20,000 options with $4.50 exercise price; share prices were $12.50 at 31 May 20X4 and $12 at 31 May 20X5. Its two-year cumulative remuneration expense was $50,000 then $100,000. The second grant has 50,000 options at $6 exercise price, beginning 1 June 20X4 and expensed over three years; its cumulative expense at 31 May 20X5 is $100,000. The tax rate is 30%. Calculations assume future deductions are usable against probable taxable profits.",
    ),
    question: text(
      "احسب أصل الضريبة المؤجلة افتتاحًا وختامًا، ووزع تغيره بين الربح أو الخسارة وحقوق الملكية وفق IAS 12، مع ذكر شرط الاعتراف.",
      "Calculate opening and closing deferred-tax assets and allocate their change between profit or loss and equity under IAS 12, stating the recognition condition.",
    ),
    solution: [
      text(
        "في 31 مايو 20X4، الخصم الضريبي المستقبلي المقدَّر لخدمة المدير الأول المقدمة حتى ذلك التاريخ = 20,000 × (12.50 − 4.50) × نصف مدة الخدمة = 80,000 دولار؛ أصل الضريبة المؤجلة = 80,000 × 30% = 24,000، بشرط رجحان أرباح ضريبية كافية.",
        "At 31 May 20X4, estimated future deduction for the first director's service received to that date = 20,000 × ($12.50 − $4.50) × one half = $80,000; deferred-tax asset = $80,000 × 30% = $24,000, subject to probable sufficient taxable profits.",
      ),
      text(
        "المصروف التراكمي للمنحة الأولى عند الافتتاح 50,000، وأثره الضريبي 15,000 في الأرباح؛ الزيادة في الخصم المقدَّر فوق المصروف 80,000 − 50,000 = 30,000 ينتج عنها 9,000 تُنسب مباشرة إلى حقوق الملكية. هذا بيان أثر الانتقال في الأرصدة الافتتاحية، لا دخل السنة الجديدة.",
        "Opening cumulative first-grant expense is $50,000, with $15,000 of tax benefit attributable to profit or loss; the $30,000 excess of estimated deduction over expense creates $9,000 recognised directly in equity. These are opening-transition amounts, not current-year income.",
      ),
      text(
        "في 31 مايو 20X5، الخصم المقدَّر للمنحة الأولى = 20,000 × (12 − 4.50) = 150,000، وللثانية = 50,000 × (12 − 6) × ثلث مدة الخدمة = 100,000؛ المجموع 250,000، وأصل الضريبة المؤجلة = 75,000.",
        "At 31 May 20X5, estimated first-grant deduction = 20,000 × ($12 − $4.50) = $150,000, and second-grant deduction = 50,000 × ($12 − $6) × one third = $100,000; total $250,000, giving a $75,000 deferred-tax asset.",
      ),
      text(
        "المصروف التراكمي لكلتا المنحتين 200,000، وأثره الضريبي 60,000؛ والزيادة في الخصم المقدَّر 50,000 تعطي 15,000 تراكميًا في حقوق الملكية. مقارنة بالافتتاح، يرتفع أصل الضريبة 51,000، منها 45,000 منفعة ضريبية في ربح أو خسارة 20X5 و6,000 في حقوق الملكية. لا يُثبت الأصل إذا لم تتحقق متطلبات الاعتراف بأصل الضريبة المؤجلة.",
        "Cumulative remuneration expense for both grants is $200,000, with $60,000 associated tax benefit; the $50,000 excess estimated deduction results in cumulative $15,000 in equity. Relative to opening, the asset increases $51,000: $45,000 current-year tax benefit in profit or loss and $6,000 in equity. No deferred-tax asset is recognised unless its recognition criteria are met.",
      ),
    ],
    reference: "IAS 12.24, 68A–68C; IFRS 2.19–21",
  },
  {
    id: "ifrs-book2-reprise-encore-consolidation",
    standardCode: "IFRS 10",
    title: text(
      "Reprise وEncore: تسوية النقدية في الطريق والتجميع",
      "Reprise and Encore: cash in transit and consolidation",
    ),
    facts: text(
      "جميع الأرقام بآلاف الدولارات في 31 مارس 20X4. اشترت Reprise نسبة 75% من Encore مقابل 2,000 قبل عشر سنوات، حين بلغت أرباح Encore المحتجزة 1,044 ورأس مالها 500. كانت القيمة السوقية للسهم 4.40 دولارات يوم الشراء؛ يقاس غير المسيطرين بالقيمة العادلة، ويبلغ انخفاض الشهرة المتراكم 180. أرصدة الأم/التابعة: أرض ومبانٍ 3,350/صفر؛ آلات ومعدات 1,010/2,210؛ مركبات 510/345؛ مخزون 890/352؛ مدينون 1,372/514؛ نقدية 89/51؛ أرباح محتجزة 4,225/2,610؛ دائنون 996/362. للأم رأس مال 1,000، فائض إعادة تقييم 2,500 وسندات طويلة 500. تشمل مدينون الأم 75 مستحقة على التابعة؛ أرسلت التابعة منها 39 نقدًا لم يصل إلى الأم عند الإقفال، فأصبحت مديونيتها الدفترية 36. يضم مخزون التابعة بضاعة اشترتها من الأم مقابل 31.2 مع زيادة سعر بيع 30% على التكلفة. لا تورد الوقائع فروق قيمة عادلة أخرى أو بيانات ضريبة مؤجلة.",
      "All figures are in $000 at 31 March 20X4. Reprise acquired 75% of Encore for 2,000 ten years earlier, when Encore had retained earnings of 1,044 and capital of 500. Encore shares traded at $4.40 each at acquisition; NCI is measured at fair value and cumulative goodwill impairment is 180. Parent/subsidiary balances: land and buildings 3,350/nil; plant and equipment 1,010/2,210; vehicles 510/345; inventory 890/352; receivables 1,372/514; cash 89/51; retained earnings 4,225/2,610; payables 996/362. The parent also has capital 1,000, revaluation surplus 2,500 and long-term debentures 500. Parent receivables include 75 due from the subsidiary; the latter sent 39 in cash that had not reached the parent by closing, leaving its recorded payable at 36. Subsidiary inventory includes goods bought from the parent for 31.2 at a 30% mark-up on cost. The facts provide no other acquisition-date fair-value differences or deferred-tax data.",
    ),
    question: text(
      "أعد قائمة المركز المالي الموحدة، مع تسوية النقدية في الطريق، الرصيد المتبادل، الربح غير المحقق، الشهرة، والأرباح المحتجزة وحقوق غير المسيطرين.",
      "Prepare the consolidated statement of financial position, reconciling cash in transit, the reciprocal balance, unrealised profit, goodwill, retained earnings and NCI.",
    ),
    solution: [
      text(
        "حقوق غير المسيطرين يوم الشراء = 25% × 500,000 سهم × 4.40 دولار = 550 ألفًا. صافي أصول Encore المعطى يوم الاستحواذ = 500 + 1,044 = 1,544. الشهرة الكاملة = 2,000 + 550 − 1,544 = 1,006؛ رصيدها بعد انخفاض 180 = 826.",
        "Acquisition-date NCI = 25% × 500,000 shares × $4.40 = $550,000. Encore's stated acquisition-date net assets = 500 + 1,044 = 1,544 ($000). Full goodwill = 2,000 + 550 − 1,544 = 1,006; closing goodwill after impairment of 180 is 826.",
      ),
      text(
        "الربح غير المحقق في مخزون التابعة = 31.2 × 30/130 = 7.2. لأن البيع من الأم إلى التابعة، يخصم الربح 7.2 من مخزون المجموعة ومن أرباح ملاك الأم، دون تخصيصه لغير المسيطرين.",
        "Unrealised profit in subsidiary inventory = 31.2 × 30/130 = 7.2. As the sale was downstream from parent to subsidiary, reduce group inventory and owners' retained earnings by 7.2, without allocating it to NCI.",
      ),
      text(
        "أثبت النقدية في الطريق 39 بزيادة نقد المجموعة وتخفيض مديني الأم 39؛ يصبح الرصيد المتبادل 36 لدى الجانبين ويُلغى. لذلك المدينون الموحدون = 1,372 + 514 − 39 − 36 = 1,811، والدائنون = 996 + 362 − 36 = 1,322، والنقد = 89 + 51 + 39 = 179.",
        "Record the 39 cash in transit by increasing group cash and reducing parent receivables by 39; the reciprocal balance is then 36 on both sides and is eliminated. Consolidated receivables = 1,372 + 514 − 39 − 36 = 1,811; payables = 996 + 362 − 36 = 1,322; cash = 89 + 51 + 39 = 179.",
      ),
      text(
        "أرباح المجموعة المحتجزة = 4,225 − 7.2 + 75% × (2,610 − 1,044) − 75% × 180 = 5,257.3. حقوق غير المسيطرين = 550 + 25% × 1,566 − 25% × 180 = 896.5؛ يقسم انخفاض الشهرة عليهما لأن الشهرة قِيست كاملة.",
        "Group retained earnings = 4,225 − 7.2 + 75% × (2,610 − 1,044) − 75% × 180 = 5,257.3. NCI = 550 + 25% × 1,566 − 25% × 180 = 896.5; goodwill impairment is shared because full goodwill was measured.",
      ),
      text(
        "الأصول غير المتداولة: أرض ومبانٍ 3,350، آلات 3,220، مركبات 855، شهرة 826؛ مجموعها 8,251 بعد إلغاء استثمار الأم في Encore. الأصول المتداولة: مخزون 890 + 352 − 7.2 = 1,234.8، ومدينون 1,811، ونقد 179؛ مجموعها 3,224.8. مجموع الأصول 11,475.8.",
        "Non-current assets: land and buildings 3,350; plant 3,220; vehicles 855; goodwill 826; total 8,251 after eliminating the parent's investment in Encore. Current assets: inventory 890 + 352 − 7.2 = 1,234.8; receivables 1,811; cash 179; total 3,224.8. Assets total 11,475.8.",
      ),
      text(
        "الحقوق والخصوم: رأس مال الأم 1,000 + فائض إعادة تقييمها 2,500 + أرباح محتجزة 5,257.3 + غير مسيطرين 896.5 = حقوق 9,653.8؛ سندات 500 ودائنون 1,322، ليصبح الإجمالي 11,475.8. هذه الأرقام تفترض عدم وجود تعديل ضريبي إضافي لم تتوافر مدخلاته في السؤال.",
        "Equity and liabilities: parent capital 1,000 + its revaluation surplus 2,500 + group retained earnings 5,257.3 + NCI 896.5 = equity 9,653.8; debentures 500 and payables 1,322 bring the total to 11,475.8. These figures assume no additional tax adjustment for which the case provides no inputs.",
      ),
    ],
    reference: "IFRS 10.B86–B94; IFRS 3.18–19, 32; IAS 36.104",
  },
  {
    id: "ifrs-book2-smith-loss-of-control",
    standardCode: "IFRS 10",
    title: text(
      "Smith: بيع كامل الحصة وفقد السيطرة يوم الإقفال",
      "Smith: sale of the entire holding and loss of control at year-end",
    ),
    facts: text(
      "جميع الأرقام بآلاف الدولارات. اشترت Smith نسبة 80% من Jones مقابل 324 في 1 أكتوبر 20X5، وكانت أرباح Jones المحتجزة يومها 180 ورأس مالها 180. تقاس حقوق غير المسيطرين بحصتها النسبية في صافي الأصول، ولا انخفاض شهرة. في 30 سبتمبر 20X8، قبل تسجيل البيع، كان لدى Smith أصول غير متداولة 360، استثمار Jones 324، أصول متداولة 370، رأس مال 540، أرباح محتجزة 414، وخصوم متداولة 100. ولدى Jones أصول غير متداولة 270، متداولة 370، رأس مال 180، أرباح محتجزة 360، وخصوم 100. ربح السنة قبل الضريبة Smith/Jones = 153/126، والضريبة = 45/36. باعت Smith حصتها كلها نقدًا في 30 سبتمبر 20X8 مقابل 650، ولم تسجل أي قيد بعد. يُتجاهل أثر الضريبة على البيع وتفترض المسألة أن الربح نشأ بانتظام خلال السنة.",
      "All figures are in $000. Smith bought 80% of Jones for 324 on 1 October 20X5, when Jones had retained earnings of 180 and capital of 180. NCI is measured as its proportionate share of identifiable net assets and there has been no goodwill impairment. Immediately before recording the sale on 30 September 20X8, Smith shows non-current assets 360, investment in Jones 324, current assets 370, capital 540, retained earnings 414 and current liabilities 100. Jones shows non-current assets 270, current assets 370, capital 180, retained earnings 360 and current liabilities 100. Smith/Jones profit before tax for the year is 153/126, with tax of 45/36. Smith sold its entire holding for 650 cash on 30 September 20X8 but recorded no entry. Tax on disposal is ignored and profit is assumed to accrue evenly through the year.",
    ),
    question: text(
      "احسب شهرة الاستحواذ ومكسب فقد السيطرة، ثم أعد مقتطف الربح أو الخسارة الموحد والمركز المالي في تاريخ البيع.",
      "Calculate acquisition goodwill and the gain on loss of control, then prepare consolidated profit or loss and financial-position extracts at the sale date.",
    ),
    solution: [
      text(
        "صافي أصول Jones يوم الاستحواذ = 180 رأس مال + 180 أرباح محتجزة = 360؛ حقوق غير المسيطرين يومها = 20% × 360 = 72؛ الشهرة بالطريقة النسبية = 324 + 72 − 360 = 36.",
        "Jones's acquisition-date net assets = 180 capital + 180 retained earnings = 360; acquisition-date NCI = 20% × 360 = 72; proportionate-method goodwill = 324 + 72 − 360 = 36.",
      ),
      text(
        "صافي أصول Jones عند فقد السيطرة = 270 + 370 − 100 = 540؛ حقوق غير المسيطرين حينئذ = 20% × 540 = 108. مكسب البيع في القوائم الموحدة = المقبوض 650 + استبعاد حقوق غير المسيطرين 108 − صافي الأصول 540 − الشهرة 36 = 182.",
        "Jones's net assets when control is lost = 270 + 370 − 100 = 540; NCI then is 20% × 540 = 108. Consolidated disposal gain = proceeds 650 + derecognised NCI 108 − net assets 540 − goodwill 36 = 182.",
      ),
      text(
        "لأن البيع في آخر يوم من السنة، تُجمع نتائج Jones طوال السنة حتى تاريخ فقد السيطرة رغم عدم تجميع أصولها في المركز المالي عند الإقفال. ربح المجموعة قبل الضريبة = 153 + 126 + 182 = 461؛ الضريبة المعطاة 45 + 36 = 81؛ صافي الربح = 380. حصة غير المسيطرين في ربح Jones = 20% × (126 − 36) = 18؛ لملاك الأم 362.",
        "Because the disposal is on the final day, Jones's results are consolidated up to loss of control for the full year although its assets are not consolidated at closing. Group profit before tax = 153 + 126 + 182 = 461; stated tax = 45 + 36 = 81; profit = 380. NCI's share of Jones's $90 net profit = 18; owners' share = 362.",
      ),
      text(
        "في مركز 30 سبتمبر بعد البيع، تخرج أصول Jones والتزاماتها وشهرتها وحقوق غير المسيطرين بالكامل، ويلغى استثمار Smith المسجل 324؛ تضاف حصيلة النقد 650 إلى أصول Smith المتداولة 370. أرباح المجموعة المحتجزة = 414 + مكسب 182 + 80% × (360 − 180) = 740. الأصول = 360 غير متداولة + 1,020 متداولة = 1,380؛ رأس مال 540 + أرباح 740 + خصوم 100 = 1,380.",
        "At 30 September after disposal, all Jones assets, liabilities, goodwill and NCI are removed and Smith's recorded investment of 324 is eliminated; 650 cash proceeds are added to Smith's current assets of 370. Group retained earnings = 414 + gain 182 + 80% × (360 − 180) = 740. Assets = 360 non-current + 1,020 current = 1,380; capital 540 + retained earnings 740 + liabilities 100 = 1,380.",
      ),
    ],
    reference: "IFRS 10.20, 25, B97–B99; IFRS 3.19, 32",
  },
  {
    id: "ifrs-book2-hever-subsidiary-associate",
    standardCode: "IFRS 10",
    title: text(
      "Hever: التابعة والزميلة في مركز مالي واحد",
      "Hever: a subsidiary and an associate in one statement",
    ),
    facts: text(
      "جميع الأرقام بآلاف الدولارات في 31 ديسمبر 20X4. تمتلك Hever 48,000 من 80,000 سهم في Spiro (60%)، كلفة الاستثمار 128، و15,000 من 50,000 سهم في Aldridge (30%)، كلفته 90. في تاريخ شراء Spiro: رأس المال 80، علاوة الإصدار 80، أرباح محتجزة 20، وفرق قيمة عادلة للممتلكات +50 والمخزون −20؛ أصبح الإهلاك الإضافي المتراكم 5 وبيع مخزون الاستحواذ. حقوق غير المسيطرين بالقيمة العادلة يوم الشراء 90. أرباح Aldridge المحتجزة عند الشراء 150. قوائم نهاية الفترة: ممتلكات ومعدات Hever/Spiro/Aldridge = 370/190/260؛ مخزون 160/100/180؛ مدينون 170/90/100؛ نقد 50/40/10؛ أرباح محتجزة 568/200/400. لدى Hever رأس مال 200 وعلاوة إصدار 100، وفي Spiro 80 و80. باعت Hever إلى Spiro مخزونًا بـ16 كلفته 10؛ بقي ربعه لدى Spiro. دائنون Hever/Spiro = 100/60. لم تُذكر انخفاضات شهرة أو بيانات أساس ضريبي لزيادات القيمة العادلة، ويُفترض تحقق السيطرة والتأثير المهم وفق الحقوق المعطاة.",
      "All amounts are in $000 at 31 December 20X4. Hever owns 48,000 of Spiro's 80,000 shares (60%), investment cost 128, and 15,000 of Aldridge's 50,000 shares (30%), cost 90. At Spiro's acquisition its share capital was 80, share premium 80 and retained earnings 20; fair-value adjustments were +50 for PPE and −20 for inventory. Cumulative extra depreciation is 5 and the acquisition-date inventory has since been sold. Acquisition-date fair value of NCI is 90. Aldridge's retained earnings at investment were 150. Closing PPE for Hever/Spiro/Aldridge is 370/190/260; inventories 160/100/180; receivables 170/90/100; cash 50/40/10; retained earnings 568/200/400. Hever has capital 200 and share premium 100; Spiro has 80 and 80. Hever sold inventory costing 10 to Spiro for 16; one quarter remains with Spiro. Hever/Spiro payables are 100/60. No goodwill impairment or tax-basis information for fair-value uplifts is supplied; control and significant influence are assumed from the stated rights.",
    ),
    question: text(
      "أعد المركز المالي الموحد لـHever مع حساب الشهرة، الاستثمار في الزميلة بطريقة حقوق الملكية، الأرباح المحتجزة وحقوق غير المسيطرين.",
      "Prepare Hever's consolidated statement of financial position, calculating goodwill, equity-accounted associate investment, retained earnings and NCI.",
    ),
    solution: [
      text(
        "تُجمّع Spiro التابعة بالكامل لأن حصة Hever 60% مع افتراض السيطرة؛ أما Aldridge فتُعرض استثمارًا واحدًا بطريقة حقوق الملكية عند افتراض تأثير مهم لحصة 30%، ولا تُضم أصولها والتزاماتها بندًا بندًا.",
        "Consolidate Spiro in full on the assumption that Hever's 60% conveys control. Aldridge is one equity-method investment, assuming significant influence from the 30% stake; its individual assets and liabilities are not added line by line.",
      ),
      text(
        "صافي أصول Spiro يوم الاستحواذ = 80 رأس مال + 80 علاوة + 20 أرباح + 50 زيادة ممتلكات − 20 نقص مخزون = 210. الشهرة بالطريقة الكاملة = مقابل 128 + حقوق غير مسيطرين 90 − 210 = 8.",
        "Spiro's acquisition-date identifiable net assets = 80 capital + 80 share premium + 20 retained earnings + 50 PPE uplift − 20 inventory reduction = 210. Full goodwill = consideration 128 + fair-value NCI 90 − 210 = 8.",
      ),
      text(
        "صافي حركة القيمة العادلة التي دخلت أرباح Spiro بعد الاستحواذ = +20 لانخفاض قيمة مخزون الاستحواذ الذي بيع، ناقص 5 إهلاك إضافي، أي +15. أرباحها اللاحقة المعدلة = 200 − 20 + 15 = 195. الاستثمار في Aldridge = 90 + 30% × (400 − 150) = 165، ما دام لا توجد تعديلات أخرى معطاة.",
        "The post-acquisition fair-value effect on Spiro's profit is +20 from the lower-valued acquisition inventory now sold, less 5 extra depreciation, or +15. Adjusted post-acquisition earnings = 200 − 20 + 15 = 195. Aldridge investment = 90 + 30% × (400 − 150) = 165, absent other stated adjustments.",
      ),
      text(
        "ربح البيع الداخلي غير المحقق في مخزون التابعة = (16 − 10) × ربع الكمية = 1.5. لأنه بيع من الأم إلى التابعة، يخصم من أرباح ملاك الأم لا من أرباح Spiro المعدلة أو حقوق غير المسيطرين. أرباح المجموعة المحتجزة = 568 − 1.5 + 60% × 195 + 30% × 250 = 758.5. حقوق غير المسيطرين = 90 + 40% × 195 = 168.",
        "Unrealised profit on parent-to-subsidiary inventory = (16 − 10) × one quarter = 1.5. As a downstream sale, it reduces owners' group retained earnings, not Spiro's adjusted earnings or NCI. Group retained earnings = 568 − 1.5 + 60% × 195 + 30% × 250 = 758.5. NCI = 90 + 40% × 195 = 168.",
      ),
      text(
        "الأصول الموحدة: ممتلكات ومعدات 370 + 190 + (50 − 5) = 605؛ شهرة 8؛ استثمار الزميلة 165؛ مخزون 160 + 100 − 1.5 = 258.5؛ مدينون 260؛ نقد 90. المجموع 1,386.5. الحقوق: رأس مال الأم 200 + علاوة 100 + أرباح 758.5 + غير مسيطرين 168 = 1,226.5؛ الدائنون 100 + 60 = 160؛ المجموع 1,386.5. الأرقام مشروطة بعدم وجود ضريبة مؤجلة إضافية غير قابلة للاحتساب من المعطيات.",
        "Consolidated assets: PPE 370 + 190 + (50 − 5) = 605; goodwill 8; associate investment 165; inventories 160 + 100 − 1.5 = 258.5; receivables 260; cash 90. Total 1,386.5. Equity: parent capital 200 + premium 100 + retained earnings 758.5 + NCI 168 = 1,226.5; payables 100 + 60 = 160; total 1,386.5. Figures assume no additional deferred-tax adjustment that cannot be calculated from the supplied data.",
      ),
    ],
    reference: "IFRS 10.B86–B94; IFRS 3.18–19, 32; IAS 28.10, 32",
  },
  {
    id: "ifrs-book2-fallowfield-rusholme-profit",
    standardCode: "IFRS 10",
    title: text(
      "Fallowfield وRusholme: الربح الموحد والربح غير المحقق",
      "Fallowfield and Rusholme: consolidated profit and unrealised profit",
    ),
    facts: text(
      "استحوذت Fallowfield على 60% من Rusholme قبل ثلاث سنوات، عندما كانت أرباح Rusholme المحتجزة 16,000 دولار. للسنة المنتهية في 30 يونيو 20X8، كانت الإيرادات 403,400 و193,000، وتكلفة المبيعات 201,400 و92,600، وتكاليف التوزيع 16,000 و14,600، والمصروفات الإدارية 24,250 و17,800، وضريبة الدخل 61,750 و22,000، على الترتيب. أدرجت الأم 15,000 توزيعات مستلمة من التابعة ضمن الربح. ربح السنة المنفرد 115,000 للأم و46,000 للتابعة. أرصدة الأرباح المحتجزة أول السنة 163,000 و61,000، وآخرها 238,000 و82,000؛ دفعت الأم توزيعات 40,000، ودفعت التابعة 25,000. باعت التابعة للأم بضائع بـ40,000 تتضمن هامشًا 25% على التكلفة؛ بقي نصفها في المخزون بنهاية السنة. لا تتوافر معطيات لحساب أثر ضريبي مستقل لتعديل الربح غير المحقق، ويُطلب تجاهل الشهرة.",
      "Fallowfield acquired 60% of Rusholme three years earlier, when Rusholme's retained earnings were $16,000. For the year ended 30 June 20X8, parent/subsidiary revenue was $403,400/$193,000, cost of sales $201,400/$92,600, distribution costs $16,000/$14,600, administration $24,250/$17,800 and income tax $61,750/$22,000. The parent's profit includes a $15,000 dividend from the subsidiary. Separate profit for the year was $115,000/$46,000. Opening retained earnings were $163,000/$61,000 and closing balances $238,000/$82,000; parent dividends were $40,000 and subsidiary dividends $25,000. Rusholme sold $40,000 of goods to Fallowfield at a 25% mark-up on cost; half remained in closing inventory. No information is given to calculate a separate tax effect for eliminating unrealised profit, and goodwill is ignored.",
    ),
    question: text(
      "أعد الربح أو الخسارة الموحد للسنة، ووزع ربحها بين ملاك الأم وغير المسيطرين، واحسب الأرباح المحتجزة الموحدة أول السنة وآخرها.",
      "Prepare the consolidated profit or loss for the year, allocate profit between owners and NCI, and calculate opening and closing consolidated retained earnings.",
    ),
    solution: [
      text(
        "ألغِ البيع الداخلي 40,000 من الإيراد وتكلفة المبيعات. الربح غير المحقق في مخزون الأم = 40,000 × نصف الكمية × 25/125 = 4,000؛ يخفض المخزون والربح الموحد، ولأن البائع هو التابعة فإنه يخفض أيضًا الربح المنسوب لحقوق غير المسيطرين.",
        "Eliminate the $40,000 intragroup sale from revenue and cost of sales. Unrealised profit in the parent's inventory = $40,000 × one half × 25/125 = $4,000; it reduces inventory and group profit. Because the subsidiary was the seller, it also reduces profit attributed to NCI.",
      ),
      text(
        "الإيراد الموحد = 403,400 + 193,000 − 40,000 = 556,400. تكلفة المبيعات = 201,400 + 92,600 − 40,000 + 4,000 = 258,000؛ فيكون مجمل الربح 298,400. تُلغى توزيعات التابعة 15,000 المثبتة إيرادًا لدى الأم.",
        "Consolidated revenue = $403,400 + $193,000 − $40,000 = $556,400. Cost of sales = $201,400 + $92,600 − $40,000 + $4,000 = $258,000, giving gross profit of $298,400. The $15,000 subsidiary dividend income recorded by the parent is eliminated.",
      ),
      text(
        "بعد تكاليف توزيع 30,600 وإدارة 42,050 يصبح الربح قبل الضريبة 225,750. ضريبة الدخل المعطاة = 61,750 + 22,000 = 83,750، فيكون ربح المجموعة 142,000، بشرط عدم وجود تعديل ضريبي إضافي غير مذكور في المسألة.",
        "After distribution costs of $30,600 and administration of $42,050, profit before tax is $225,750. The stated income-tax expenses total $83,750, leaving group profit of $142,000, assuming no additional tax adjustment absent from the case.",
      ),
      text(
        "حصة غير المسيطرين في ربح التابعة المعدل = 40% × (46,000 − 4,000) = 16,800. الربح المنسوب لملاك الأم = 142,000 − 16,800 = 125,200. لا تظهر توزيعات التابعة كنفقة موحدة.",
        "NCI's share of adjusted subsidiary profit = 40% × ($46,000 − $4,000) = $16,800. Profit attributable to the parent's owners = $142,000 − $16,800 = $125,200. Subsidiary dividends are not a consolidated expense.",
      ),
      text(
        "الأرباح المحتجزة الموحدة أول السنة = 163,000 + 60% × (61,000 − 16,000) = 190,000. آخر السنة = 238,000 + 60% × (82,000 − 16,000 − 4,000) = 275,200؛ وبالمطابقة: 190,000 + ربح الملاك 125,200 − توزيعات الأم 40,000 = 275,200.",
        "Opening group retained earnings = $163,000 + 60% × ($61,000 − $16,000) = $190,000. Closing balance = $238,000 + 60% × ($82,000 − $16,000 − $4,000) = $275,200; reconciliation: $190,000 + owners' profit $125,200 − parent dividends $40,000 = $275,200.",
      ),
    ],
    reference: "IFRS 10.B86–B94; IAS 2.9–10",
  },
  {
    id: "ifrs-book2-barcelona-madrid-consolidation",
    standardCode: "IFRS 10",
    title: text(
      "Barcelona وMadrid: مركز مالي موحد",
      "Barcelona and Madrid: consolidated financial position",
    ),
    facts: text(
      "بالمليون دولار: استحوذت Barcelona على 60% من Madrid في 1 أكتوبر 20X2 بسعر 1.06 دولار للسهم؛ رأس مال Madrid 50 مليون دولار مكوّن من 250 مليون سهم قيمة 0.20 دولار. أرباح Madrid المحتجزة يوم الاستحواذ 104 وحقوقها الأخرى 11؛ في 30 سبتمبر 20X6 أصبحت 394 و46. المقابل المسجل لدى Barcelona 159، والقيمة العادلة لحقوق غير المسيطرين يوم الاستحواذ 86. زيادات القيمة العادلة يوم الشراء: مخزون 8 بيع كله لاحقًا، أرض 6، مبانٍ 20 عمرها المتبقي عشر سنوات. خسارة انخفاض الشهرة المتراكمة 20. أرصدة المركز المالي في 20X6: ممتلكات وآلات Barcelona 2,848 وMadrid 354؛ براءات Barcelona 45؛ مخزون 895 و225؛ مدينون 1,348 و251؛ نقدية 212 و34؛ رأس مال Barcelona 920؛ أرباحها المحتجزة 2,086؛ حقوقها الأخرى 775؛ قروض طويلة 558 و168؛ دائنون 1,168 و183؛ قسط جارٍ من قرض Madrid 23. لا يقدم السؤال أساسًا ضريبيًا أو معدلًا لحساب ضريبة مؤجلة على زيادات القيمة العادلة؛ الأرقام التالية مشروطة بعدم وجود تعديل ضريبي إضافي.",
      "All figures in $m. Barcelona acquired 60% of Madrid on 1 October 20X2 for $1.06 per share; Madrid's $50m capital comprises 250m $0.20 shares. Madrid had $104m retained earnings and $11m other equity at acquisition, rising to $394m and $46m by 30 September 20X6. Barcelona's recorded consideration is $159m and acquisition-date fair value of NCI is $86m. Acquisition-date fair-value uplifts: inventory $8m, all since sold; land $6m; buildings $20m with ten years' remaining life. Cumulative goodwill impairment is $20m. At 20X6 the statements show respectively Barcelona/Madrid: PPE 2,848/354; Barcelona patents 45; inventory 895/225; receivables 1,348/251; cash 212/34; Barcelona share capital 920, retained earnings 2,086 and other equity 775; long-term borrowings 558/168; payables 1,168/183; Madrid current borrowing portion 23. No tax bases or rate are supplied for deferred tax on fair-value uplifts; the figures below assume no additional tax adjustment.",
    ),
    question: text(
      "أعد قائمة المركز المالي الموحدة لمجموعة Barcelona في 30 سبتمبر 20X6، مع حساب الشهرة، تعديل القيمة العادلة، الأرباح المحتجزة الموحدة، وحقوق غير المسيطرين.",
      "Prepare the Barcelona Group consolidated statement of financial position at 30 September 20X6, calculating goodwill, fair-value adjustments, group retained earnings and non-controlling interests.",
    ),
    solution: [
      text(
        "صافي أصول Madrid القابلة للتحديد يوم الاستحواذ = رأس مال 50 + أرباح 104 + حقوق أخرى 11 + زيادات قيمة عادلة (8 + 6 + 20) = 199. الشهرة الكاملة = مقابل 159 + غير مسيطرين بالقيمة العادلة 86 − 199 = 46؛ بعد انخفاض 20 تصبح 26.",
        "Madrid's identifiable acquisition-date net assets = capital 50 + retained earnings 104 + other equity 11 + fair-value uplifts (8 + 6 + 20) = 199. Full goodwill = consideration 159 + fair-value NCI 86 − 199 = 46; after impairment of 20, goodwill is 26.",
      ),
      text(
        "تعديل المباني المتبقي بعد أربع سنوات = 20 − (20 ÷ 10 × 4) = 12؛ وتبقى زيادة الأرض 6. بيع مخزون الاستحواذ يزيل زيادته 8 من أصل المخزون الحالي ويخفض ربح ما بعد الاستحواذ. مجموع زيادة الممتلكات والآلات عند الإقفال = 12 + 6 = 18.",
        "After four years the building uplift remaining is 20 − (20 ÷ 10 × 4) = 12; the land uplift of 6 remains. Sale of acquisition-date inventory removes its uplift of 8 from current inventory and reduces post-acquisition profit. Closing PPE uplift is 12 + 6 = 18.",
      ),
      text(
        "ربح Madrid المحتجز بعد الاستحواذ المعدل = 394 − 104 − 8 المخزون − 8 إهلاك المباني الإضافي = 274. أرباح المجموعة المحتجزة = 2,086 + 60% × 274 − 60% × 20 انخفاض الشهرة = 2,238.4. مكونات حقوق الملكية الأخرى للمجموعة = 775 + 60% × (46 − 11) = 796.",
        "Madrid's adjusted post-acquisition retained earnings = 394 − 104 − 8 inventory uplift − 8 extra building depreciation = 274. Group retained earnings = 2,086 + 60% × 274 − 60% × 20 goodwill impairment = 2,238.4. Group other equity = 775 + 60% × (46 − 11) = 796.",
      ),
      text(
        "حقوق غير المسيطرين = 86 عند الاستحواذ + 40% × 274 من الأرباح اللاحقة + 40% × 35 من الحقوق الأخرى − 40% × 20 من انخفاض الشهرة = 201.6.",
        "NCI = 86 at acquisition + 40% × 274 later retained earnings + 40% × 35 other equity − 40% × 20 goodwill impairment = 201.6.",
      ),
      text(
        "الأصول الموحدة: ممتلكات وآلات 2,848 + 354 + 18 = 3,220؛ براءات 45؛ شهرة 26؛ مخزون 895 + 225 = 1,120؛ مدينون 1,348 + 251 = 1,599؛ نقدية 212 + 34 = 246. مجموع الأصول 6,256؛ يُلغى استثمار Barcelona في Madrid البالغ 159 عند التوحيد.",
        "Consolidated assets: PPE 2,848 + 354 + 18 = 3,220; patents 45; goodwill 26; inventory 895 + 225 = 1,120; receivables 1,348 + 251 = 1,599; cash 212 + 34 = 246. Total assets = 6,256; Barcelona's $159m investment in Madrid is eliminated on consolidation.",
      ),
      text(
        "الحقوق والخصوم: رأس مال الأم 920 + أرباح محتجزة 2,238.4 + حقوق أخرى 796 + غير مسيطرين 201.6 = إجمالي حقوق 4,156؛ قروض طويلة 558 + 168 = 726؛ دائنون 1,168 + 183 = 1,351؛ قسط جارٍ 23. المجموع = 4,156 + 726 + 1,351 + 23 = 6,256، مساويًا للأصول.",
        "Equity and liabilities: parent capital 920 + group retained earnings 2,238.4 + other equity 796 + NCI 201.6 = total equity 4,156; long-term loans 558 + 168 = 726; payables 1,168 + 183 = 1,351; current loan portion 23. Total = 4,156 + 726 + 1,351 + 23 = 6,256, matching assets.",
      ),
    ],
    reference: "IFRS 10.B86–B94; IFRS 3.18–19, 32; IAS 36.104",
  },
  {
    id: "ifrs-book2-pqr-oil-futures",
    standardCode: "IFRS 9",
    title: text("PQR: عقد مستقبلي على النفط ومخزون قائم", "PQR: oil futures and existing inventory"),
    facts: text(
      "اشترت PQR في 1 يوليو 2025 عدد 100,000 برميل من النفط الخام بتكلفة 26 دولارًا للبرميل، وأبرمت في اليوم نفسه عقدًا مستقبليًا لتسليم الكمية في 31 مارس 2026 بسعر 27.50 دولار للبرميل. في 31 ديسمبر 2025 أصبح سعر السوق الفوري 22.50 دولارًا، وسعر العقد المستقبلي للتسليم في 31 مارس 2026 هو 23.25 دولارًا للبرميل. لا تذكر الوقائع تعيين علاقة تحوط وتوثيقها عند البداية، أو تكاليف إتمام البيع، أو ترتيبات التسوية والهامش.",
      "On 1 July 2025 PQR bought 100,000 barrels of crude oil at $26 per barrel and on the same day entered into a futures contract to deliver that quantity on 31 March 2026 at $27.50 per barrel. At 31 December 2025 the spot market price was $22.50 and the futures price for 31 March 2026 delivery was $23.25 per barrel. The facts do not specify inception hedge designation and documentation, selling or completion costs, or margin and settlement arrangements.",
    ),
    question: text(
      "اشرح أثر المخزون والعقد المستقبلي في قوائم PQR عن السنة المنتهية في 31 ديسمبر 2025، وبيّن ما يمكن حسابه وما يتوقف على معلومات إضافية.",
      "Explain the inventory and futures-contract effects in PQR's financial statements for the year ended 31 December 2025, distinguishing calculable amounts from matters requiring further facts.",
    ),
    solution: [
      text(
        "تكلفة شراء المخزون = 100,000 × 26 = 2,600,000 دولار. يقاس لاحقًا بالتكلفة أو صافي القيمة القابلة للتحقق أيهما أقل. وصافي القيمة القابلة للتحقق هو سعر البيع المتوقع في سياق الأعمال المعتاد ناقص تكاليف الإتمام والبيع اللازمة؛ لا يثبت السعر الفوري 22.50 وحده هذه القيمة.",
        "Inventory purchase cost is 100,000 × $26 = $2,600,000. Subsequent measurement is at the lower of cost and net realisable value (NRV). NRV is expected ordinary-course selling price less necessary completion and selling costs; the $22.50 spot quote alone does not establish NRV.",
      ),
      text(
        "إذا افترضنا صراحةً أن 22.50 دولارًا هو سعر البيع المتوقع وأنه لا توجد تكاليف إتمام أو بيع، يصبح صافي القيمة القابلة للتحقق 2,250,000 دولار ويكون خفض المخزون 350,000 دولار في الربح أو الخسارة. هذا مثال مشروط لا مبلغًا نهائيًا تتيحه الوقائع؛ وقد يختلف الخفض عند معرفة التكاليف أو أسعار البيع المتوقعة.",
        "Only if $22.50 is assumed to be the expected selling price with no completion or selling costs does NRV equal $2,250,000, producing a $350,000 inventory write-down in profit or loss. This is a conditional illustration, not a definitive amount from the stated facts; the write-down can differ when selling prices and costs are established.",
      ),
      text(
        "فرق السعرين المستقبليين = (27.50 − 23.25) × 100,000 = 425,000 دولار لصالح مركز البيع؛ وهو مكسب اقتصادي تقريبي قبل أثر التسوية اليومية والخصم وأي فروق تعاقدية. يقاس المشتق وفق شروطه بالقيمة العادلة، وتذهب تغيراته عادة إلى الربح أو الخسارة إن لم تطبق محاسبة تحوط مؤهلة؛ ولا يمكن الجزم بأن 425,000 رصيد أصل مشتق قائم إذا كانت مكاسب العقد قد سويت نقدًا عبر الهامش.",
        "The futures-price movement is ($27.50 − $23.25) × 100,000 = $425,000 in favour of the short position, an indicative economic gain before daily settlement, discounting and contract-basis effects. Measure the derivative on its actual terms at fair value, generally recognising changes in profit or loss absent qualifying hedge accounting. A $425,000 outstanding derivative asset cannot be asserted if variation margin has already settled gains in cash.",
      ),
      text(
        "لا يثبت وصف الإدارة للعقد بأنه حماية من هبوط السعر أهلية تحوط القيمة العادلة. يتطلب IFRS 9 تعيينًا وتوثيقًا رسميين عند بدء العلاقة، وتحديد الأداة والبند والخطر المحوط، واختبار شروط الفاعلية. وإن ثبتت الأهلية، يقاس تعديل المخزون المنسوب إلى الخطر المعين منفصلًا؛ فلا يُعد خفض IAS 2 إلى صافي القيمة القابلة للتحقق تلقائيًا تعديل التحوط نفسه ولا يُسجل الأثر مرتين.",
        "Management's protective purpose alone does not establish a qualifying fair value hedge. IFRS 9 requires formal inception designation and documentation identifying the instrument, item and hedged risk, plus effectiveness criteria. If qualification is evidenced, measure the inventory adjustment attributable to the designated risk separately; an IAS 2 NRV write-down is not automatically that hedge adjustment and must not be double-counted.",
      ),
      text(
        "بافتراضات التبسيط السابقة فقط، يكون صافي الأثر الحسابي 425,000 مكسبًا ناقص 350,000 خسارة = 75,000 دولار مكسبًا قبل الضرائب. لا تعرض هذا الرقم كإجابة نهائية أو دليلاً على تطبيق محاسبة التحوط دون بيانات التقييم وصافي القيمة القابلة للتحقق وتوثيق العلاقة.",
        "Under the stated simplifying assumptions only, the arithmetic net is $425,000 gain less $350,000 loss = $75,000 pre-tax gain. Do not present that figure as a definitive answer or evidence of hedge accounting without valuation, NRV and hedge-designation facts.",
      ),
    ],
    reference: "IFRS 9.5.7.1, 6.4.1, 6.5.2(a), 6.5.8; IAS 2.6–7, 9, 28–33",
  },
  {
    id: "ifrs-book2-pqr-debentures",
    standardCode: "IFRS 9",
    title: text("PQR: سندات مشتراة بخصم", "PQR: debentures purchased at a discount"),
    facts: text(
      "اشترت PQR في 1 يناير 20X5 سندات STU بقيمة اسمية 40,000 دولار مقابل 34,000، وبقسيمة سنوية 4%، وتخطط للاحتفاظ بها حتى استردادها في 31 ديسمبر 20X8. معدل العائد الفعلي المعطى 8.6%، ولا تذكر المسألة تكاليف تعامل أو بيانات خسائر ائتمانية.",
      "On 1 January 20X5 PQR Co purchased STU Co debentures with $40,000 nominal value for $34,000. They pay a 4% annual coupon and PQR plans to hold them to redemption on 31 December 20X8. The stated effective yield is 8.6%; the case supplies no transaction-cost or credit-loss data.",
    ),
    question: text(
      "حدد فئة القياس المناسبة للسندات واحسب إيراد الفائدة والقيمة الدفترية الإجمالية في 31 ديسمبر 20X5، مع بيان ما لا يمكن تحديده من المعطيات.",
      "Identify the appropriate measurement category and calculate 20X5 interest revenue and gross carrying amount at 31 December, explaining what cannot be determined from the facts.",
    ),
    solution: [
      text(
        "إذا كانت التدفقات التعاقدية مدفوعات أصل وفائدة فقط، وكان نموذج الأعمال فعليًا الاحتفاظ للتحصيل، فإن السندات تقاس بالتكلفة المطفأة. مجرد نية الاحتفاظ وحدها لا تكفي دون تحقق اختبار التدفقات؛ وتفترض الأرقام الآتية عدم تكاليف تعامل إضافية.",
        "If contractual cash flows are solely principal and interest and the actual business model is hold-to-collect, the debentures qualify for amortised cost. Management's intention alone is not a substitute for the contractual-cash-flow test; the following figures assume no additional transaction costs.",
      ),
      text(
        "إيراد الفائدة بالطريقة الفعلية = 34,000 × 8.6% = 2,924 دولار. المقبوض من القسيمة = 40,000 × 4% = 1,600؛ زيادة الرصيد الإجمالي بسبب إطفاء الخصم = 1,324.",
        "Effective-interest revenue = $34,000 × 8.6% = $2,924. Cash coupon = $40,000 × 4% = $1,600; discount accretion increases the gross balance by $1,324.",
      ),
      text(
        "الرصيد الإجمالي في 31 ديسمبر = 34,000 + 2,924 − 1,600 = 35,324 دولار. القيد: مدين نقدية 1,600 ومدين أصل السند 1,324، دائن إيراد فوائد 2,924.",
        "Gross carrying amount at 31 December = $34,000 + $2,924 − $1,600 = $35,324. Entry: debit cash $1,600 and the debenture asset $1,324; credit interest revenue $2,924.",
      ),
      text(
        "يتطلب IFRS 9 تقييم خسائر الائتمان المتوقعة أيضًا. لا تتوافر في المسألة معطيات المخصص، لذلك لا يجوز الجزم بأن 35,324 هو صافي الرصيد المعروض بعد المخصص؛ ولا يمكن حساب أثر نهائي قاطع على نسبة المديونية.",
        "IFRS 9 also requires expected-credit-loss assessment. The case gives no loss-allowance inputs, so $35,324 cannot be asserted as the net carrying amount after the allowance; a definitive gearing effect cannot be computed either.",
      ),
    ],
    reference: "IFRS 9.4.1.2, 5.4.1, 5.5.1–5.5.8",
  },
  {
    id: "ifrs-book2-pqr-forward-machine-commitment",
    standardCode: "IFRS 9",
    title: text(
      "PQR: عقد عملة آجل لشراء آلة مستقبلًا",
      "PQR: foreign-currency forward for a future machine purchase",
    ),
    facts: text(
      "لدى PQR عن السنة المنتهية في 31 ديسمبر 20X5 عقد عملة آجل للتحوط من التزام بشراء آلة بعملة أجنبية بعد نهاية السنة بستة أشهر. لا يذكر السؤال قيمة الالتزام أو عملته، وسعر العقد الآجل أو أسعار الصرف، والقيمة العادلة للعقد في تاريخ الإقفال، أو شروط الالتزام الملزم، أو وجود تعيين وتوثيق للتحوط عند بدايته. تطلب المسألة مشورة محاسبية وأثر الأداة في المديونية بقدر ما تسمح به الوقائع.",
      "For the year ended 31 December 20X5, PQR has entered into a foreign-currency forward intended to hedge a commitment to buy a machine six months after year-end. The question supplies no notional amount or currency, contracted or closing exchange rates, year-end fair value, enforceable commitment terms, or evidence of hedge designation and documentation at inception. It asks for accounting advice and the gearing effect only insofar as the facts permit.",
    ),
    question: text(
      "قدّم المشورة بشأن المعالجة المحاسبية لعقد العملة الآجل المرتبط بشراء الآلة، وبيّن أثره في المديونية بقدر ما تسمح به المعلومات المتاحة.",
      "Advise on the accounting for the foreign-currency forward associated with the machine purchase and its effect on gearing, insofar as the information permits.",
    ),
    solution: [
      text(
        "العقد الآجل مشتق مالي يُقاس بالقيمة العادلة. عند بدايته قد تكون القيمة العادلة صفرًا، لكن لا يجوز افتراض ذلك أو تجاهل إعادة القياس في 31 ديسمبر. إذا لم تتوافر شروط محاسبة التحوط، يظهر المشتق أصلًا أو التزامًا بحسب قيمته العادلة وتذهب تغيراته إلى الربح أو الخسارة؛ ولا تُثبت الآلة قبل استيفاء شروط الاعتراف بها لمجرد توقيع عقد التحوط.",
        "The forward is a derivative measured at fair value. Its initial fair value may be zero, but that cannot be presumed or used to omit 31 December remeasurement. Without qualifying hedge accounting, recognise a derivative asset or liability according to its fair value and take changes to profit or loss. Signing the hedge alone does not bring the undelivered machine into assets.",
      ),
      text(
        "لا تكفي عبارة «للتحوط» في وصف العملية. يشترط IFRS 9 عند بدء العلاقة تعيينها وتوثيق أداة التحوط والبند المحوط والمخاطرة والاستراتيجية وطريقة تقييم الفاعلية، مع تحقق العلاقة الاقتصادية وضوابط الفاعلية الأخرى. لا يثبت السؤال وقوع ذلك، لذا لا يصح عرض نتيجة تحوط مؤهل بوصفها معالجة مؤكدة.",
        "Calling the contract a hedge is insufficient. At inception IFRS 9 requires formal designation and documentation of the instrument, hedged item, risk, strategy and effectiveness assessment, together with the economic relationship and other qualifying criteria. The question does not establish these facts, so qualified hedge accounting cannot be asserted as the actual treatment.",
      ),
      text(
        "إذا كان شراء الآلة التزامًا ملزمًا، واستوفت العلاقة شروط التحوط واختير تحوط القيمة العادلة لمخاطر العملة، يعترف بتغير قيمة المشتق في الربح أو الخسارة وبالتغير المقابل في قيمة الالتزام غير المعترف به المرتبط بالمخاطرة المحوطة أصلًا أو التزامًا مع أثره في الربح أو الخسارة. عند تنفيذ الالتزام، يدخل التعديل المتراكم للبند المحوط في التكلفة الأولية للآلة.",
        "If the machine purchase is a firm commitment, the hedge qualifies and fair-value-hedge accounting is designated for currency risk, recognise the derivative change in profit or loss and the corresponding hedged-risk change in the unrecognised commitment as an asset or liability through profit or loss. On fulfilment, include the accumulated hedged-item adjustment in the machine's initial cost.",
      ),
      text(
        "يمكن بدلًا من ذلك، للتحوط المؤهل من مخاطر عملة التزام ملزم، اختيار تحوط التدفقات النقدية. يثبت الجزء الفعال من تغير المشتق في الدخل الشامل الآخر واحتياطي التحوط، وعدم الفاعلية في الربح أو الخسارة. عندما ينشأ أصل الآلة غير المالي، يُزال الرصيد الملائم من الاحتياطي ويُدرج مباشرة في تكلفتها الأولية؛ ليس تأجيله إلى الربح أو الخسارة على مدى الإهلاك خيارًا حرًا لهذه الحالة وفق IFRS 9 الحالي.",
        "Alternatively, a qualifying hedge of the foreign-currency risk of a firm commitment may be designated a cash-flow hedge. Recognise the effective derivative movement in OCI and the cash-flow hedge reserve, with ineffectiveness in profit or loss. When the non-financial machine is recognised, remove the relevant reserve balance and include it directly in the asset's initial cost; deferring that amount for discretionary recycling with depreciation is not an option for this case under current IFRS 9.",
      ),
      text(
        "لا تسمح الوقائع بحساب قيمة المشتق أو فاعلية التحوط أو أثر محدد في نسبة المديونية؛ فالاتجاه يعتمد على ما إذا كانت قيمة المشتق أصلًا أم التزامًا، وعلى نوع التحوط المؤهل وأرصدة الحقوق والالتزامات وطريقة تعريف النسبة. القيمة الاسمية لعقد الآجل ليست تلقائيًا قرضًا أو التزامًا مساويًا لها.",
        "The facts do not permit a derivative valuation, effectiveness calculation or quantified gearing effect. Direction depends on whether the derivative is an asset or liability, the qualifying hedge type, equity and liability balances, and the gearing definition. A forward's notional amount is not automatically a loan or an equal-sized liability.",
      ),
    ],
    reference: "IFRS 9.4.2.1, 5.7.1, 6.4.1, 6.5.4, 6.5.8–6.5.11",
  },
  {
    id: "ifrs-book2-pqr-preference-shares",
    standardCode: "IAS 32",
    title: text("PQR: أسهم ممتازة قابلة للاسترداد", "PQR: redeemable preference shares"),
    facts: text(
      "أصدرت PQR في 20X0 عدد 100,000 سهم ممتاز بقيمة اسمية دولار واحد للسهم، مع دفعة سنوية مذكورة قدرها 6 سنتات للسهم، واسترداد بالقيمة الاسمية في 20X8. لا يفصل نص المسألة ما إذا كان الاسترداد والدفعات السنوية التزامين تعاقديين لا يمكن تجنبهما، أو يخضعان لقرار الشركة.",
      "In 20X0 PQR Co issued 100,000 $1 preference shares with a stated annual payment of six cents per share and redemption at nominal value in 20X8. The case does not spell out whether redemption and annual payments are unavoidable contractual obligations or remain at the issuer's discretion.",
    ),
    question: text(
      "بيّن تصنيف الأسهم الممتازة وعلاج دفعاتها وأثرها المحتمل في المديونية، مع توضيح الشرط التعاقدي الحاسم.",
      "Explain classification of the preference shares, treatment of their payments and possible gearing effect, identifying the decisive contractual condition.",
    ),
    solution: [
      text(
        "إذا أوجب العقد على PQR دفع 100,000 نقدًا في 20X8 ودفع 6,000 سنويًا دون سلطة لتجنب الدفع، فالورقة التزام مالي لا تصبح حقوق ملكية لمجرد تسميتها «سهمًا». في هذه الحالة تكون الدفعة السنوية تكلفة تمويل، ويظهر الالتزام ضمن الخصوم وفق أجل الاسترداد.",
        "If the contract obliges PQR to pay $100,000 cash in 20X8 and $6,000 annually with no discretion to avoid payment, the instrument is a financial liability despite its 'share' label. The annual amount is then a finance cost and the liability is presented according to its redemption maturity.",
      ),
      text(
        "عندما يساوي سعر الإصدار والمبلغ المسترد 100,000، وتكون الدفعة الإلزامية 6% سنويًا ولا توجد تكاليف أو عناصر أخرى، يبقى الرصيد بعد إثبات فائدة 6,000 وسدادها عند 100,000. هذه نتيجة مشروطة بالشروط السابقة وليست قاعدة لكل سهم ممتاز قابل للاسترداد.",
        "If issue proceeds and redemption amount are both $100,000, the compulsory annual payment is 6% and no other costs or features exist, the balance remains $100,000 after accruing and paying $6,000 interest. This is conditional on those terms, not a rule for every redeemable preference share.",
      ),
      text(
        "إن كانت الدفعات اختيارية مع بقاء الاسترداد إلزاميًا فقد تتكون أداة مركبة ذات جزء التزام وجزء حقوق ملكية؛ وإن كان الاسترداد نفسه اختيارًا للشركة، يلزم إعادة فحص التصنيف. تصنيف مبلغ ملزم كدين يرفع نسبة المديونية مقارنة بعرضه خطأً ضمن حقوق الملكية، مع بقاء الأثر الرقمي تابعًا لتعريف النسبة.",
        "If payments are discretionary while redemption is mandatory, the instrument may be compound, with liability and equity components; if redemption itself is at the issuer's discretion, classification needs reassessment. Debt classification raises gearing compared with incorrectly presenting an unavoidable obligation as equity, although the numerical ratio depends on its definition.",
      ),
    ],
    reference: "IAS 32.15–18, 28–32, 35–36, AG37; IFRS 9.4.2.1",
  },
  {
    id: "ifrs-book2-jenson-repurchase",
    standardCode: "IFRS 15",
    title: text("Jenson: بيع مع خيار إعادة شراء", "Jenson: sale with a repurchase call"),
    facts: text(
      "في 1 يوليو 20X4 نقلت Jenson بضائع تكلفتها 20,000 دولار إلى Wholesaler مقابل 35,000 دولار. تحتفظ Jenson بخيار إعادة شراء البضائع في أي وقت خلال السنتين التاليتين، بسعر 35,000 دولار مضافًا إليه فائدة 12% سنويًا من يوم النقل إلى يوم إعادة الشراء. يُتوقع ممارسة الخيار. تاريخ القوائم 31 مارس 20X5.",
      "On 1 July 20X4 Jenson Co transferred goods costing $20,000 to Wholesaler Co for $35,000. Jenson has a call option to repurchase the goods at any time within the next two years for $35,000 plus interest at 12% per annum from transfer to repurchase. Exercise is expected. The reporting date is 31 March 20X5.",
    ),
    question: text(
      "بيّن معالجة Jenson لهذه المعاملة في قوائم السنة المنتهية في 31 مارس 20X5، مع حساب أثر التمويل.",
      "Explain Jenson Co's accounting for this arrangement for the year ended 31 March 20X5, including the financing effect.",
    ),
    solution: [
      text(
        "خيار إعادة الشراء بيد Jenson، وسعره لا يقل عن المبلغ المقبوض. لذلك لا يحصل المشتري على السيطرة التي تسمح بإثبات إيراد بيع؛ يعالج المقبوض ترتيبًا تمويليًا. تبقى البضاعة ذات التكلفة 20,000 ضمن أصول Jenson وفق معيار المخزون المطبق عليها.",
        "Jenson holds the repurchase call and the exercise amount is at least the proceeds. The buyer therefore does not obtain control for sale revenue; the proceeds are a financing arrangement. The goods costing $20,000 remain an asset of Jenson under the applicable inventory requirements.",
      ),
      text(
        "في 1 يوليو: مدين نقدية 35,000، دائن التزام تمويلي 35,000؛ لا يُثبت إيراد 35,000 ولا تكلفة مبيعات 20,000.",
        "On 1 July: debit cash $35,000 and credit a financing liability $35,000; do not recognise $35,000 revenue or $20,000 cost of sales.",
      ),
      text(
        "تكلفة التمويل عن تسعة أشهر حتى 31 مارس = 35,000 × 12% × 9/12 = 3,150 دولار. القيد: مدين تكلفة تمويل 3,150، دائن التزام تمويلي 3,150؛ يصبح الالتزام 38,150 دولار عند الإقفال، بافتراض عدم وجود دفعات خلال الفترة.",
        "Nine months' finance cost to 31 March = $35,000 × 12% × 9/12 = $3,150. Debit finance cost and credit the liability $3,150; closing liability is $38,150, assuming no intervening payments.",
      ),
    ],
    reference: "IFRS 15.B64–B69",
  },
  {
    id: "ifrs-book2-jenson-subscriptions",
    standardCode: "IFRS 15",
    title: text("Jenson: اشتراكات مجلة مقدمة", "Jenson: prepaid magazine subscriptions"),
    facts: text(
      "في 1 سبتمبر 20X4 قبضت Jenson مقدمًا 240,000 دولار مقابل 24 عددًا شهريًا من مجلة تنتجها. بحلول 31 مارس 20X5 أنتجت وأرسلت ستة أعداد فقط من أصل 24. لا تُذكر التزامات أخرى في هذا الجزء من المسألة.",
      "On 1 September 20X4 Jenson Co received $240,000 in advance for 24 monthly issues of a magazine it produces. By 31 March 20X5 it had produced and dispatched six of the 24 issues. This part of the case identifies no other promises.",
    ),
    question: text(
      "كم من المقبوض يُعترف به إيرادًا حتى 31 مارس 20X5، وما الرصيد المؤجل في المركز المالي؟ بيّن المعالجة.",
      "How much of the advance receipt is revenue by 31 March 20X5 and what balance remains deferred in the statement of financial position? Explain the treatment.",
    ),
    solution: [
      text(
        "عند قبض 240,000 يُثبت التزام عقد مقابل النقد، لأن الأعداد لم تُسلم بعد؛ القبض وحده ليس وفاءً بالالتزام.",
        "On receipt of $240,000, recognise a contract liability against cash because the issues have not yet been delivered; receipt alone does not satisfy the promise.",
      ),
      text(
        "بافتراض تماثل الأعداد: نصيب العدد الواحد = 240,000 ÷ 24 = 10,000 دولار. أُوفي بستة أعداد، فيعترف بإيراد 6 × 10,000 = 60,000؛ القيد مدين التزام عقد ودائن إيراد 60,000.",
        "Assuming equivalent issues, allocation per issue = $240,000 ÷ 24 = $10,000. Six delivered issues produce revenue of 6 × $10,000 = $60,000; debit contract liability and credit revenue $60,000.",
      ),
      text(
        "رصيد التزام العقد للأعداد الثمانية عشر غير المسلمة = 240,000 − 60,000 = 180,000 دولار في 31 مارس؛ لا يعترف به إيرادًا قبل الوفاء بها.",
        "The contract liability for 18 undelivered issues is $240,000 − $60,000 = $180,000 at 31 March; it is not revenue until the related promises are satisfied.",
      ),
    ],
    reference: "IFRS 15.22–30, 31–38, 106",
  },
  {
    id: "ifrs-book2-ace-related-parties",
    standardCode: "IAS 24",
    title: text("إفصاح المعاملات داخل المجموعة", "Ace: related-party disclosures within a group"),
    facts: text(
      "امتلكت Ace منذ 1 أبريل 20X1 نسبة 75% من Deuce و80% من Trey، ثم اشترت حصة Deuce المتبقية في 1 أبريل 20X2. في 20X1/20X2 باعت Ace آلة إلى Deuce بمبلغ 25,000 دولار (تكلفتها 20,000) وسُددت قبل نهاية السنة. وفي 20X2/20X3 باعت Deuce بضائع إلى Trey بمبلغ 15,000 (تكلفتها 12,000) وسُددت وبِيعت خارج المجموعة قبل نهاية السنة. قدمت Ace خدمات إدارة إلى الشركتين بلا مقابل في السنة الأولى؛ وفي الثانية تقاضت 10,000 من Trey بقيت مستحقة في 31 مارس 20X3. تقدم Ace قوائم موحدة في السنتين.",
      "From 1 April 20X1 Ace Co owned 75% of Deuce Co and 80% of Trey Co, acquiring the remaining Deuce interest on 1 April 20X2. In 20X1/20X2 Ace sold Deuce a machine for $25,000 (cost $20,000), paid before year-end. In 20X2/20X3 Deuce sold Trey goods for $15,000 (cost $12,000); they were paid for and sold outside the group before year-end. Ace provided management services to both for no charge in the first year; in the second, it charged Trey $10,000, outstanding at 31 March 20X3. Ace presents consolidated statements in both years.",
    ),
    question: text(
      "لخص إفصاحات الأطراف ذات العلاقة المطلوبة عن المعاملات في قوائم Ace الموحدة والقوائم الفردية لكل من Deuce وTrey للسنتين المنتهيتين في 31 مارس 20X2 و20X3.",
      "Summarise related-party disclosures for the transactions in Ace's consolidated financial statements and the individual financial statements of Deuce and Trey for the two years ended 31 March 20X2 and 20X3.",
    ),
    solution: [
      text(
        "Ace أمٌّ للشركتين في السنتين؛ Deuce وTrey شركتان شقيقتان تحت سيطرة مشتركة. تغير ملكية Deuce من 75% إلى 100% لا يلغي العلاقة ولا يعفي قوائمها الفردية من الإفصاح عن معاملات المجموعة. تُذكر علاقة الأم والطرف المسيطر النهائي حتى إن لم تكن هناك معاملات.",
        "Ace is parent of both subsidiaries in both years; Deuce and Trey are fellow subsidiaries under common control. Deuce becoming wholly owned does not remove the relationship or exempt its individual statements from group-transaction disclosure. Parent and ultimate controlling-party relationships are identified even without transactions.",
      ),
      text(
        "في قوائم Ace الموحدة تُلغى المعاملات والأرصدة بين الشركات الثلاث، فلا تُعاد كإفصاح IAS 24 عن معاملات المجموعة الداخلة في التوحيد. أما إذا عرضت Ace قوائم منفصلة، فتظل معاملاتها مع التابعتين موضوع إفصاح مناسب فيها.",
        "In Ace's consolidated statements, transactions and balances among the three consolidated entities are eliminated and are not separately disclosed again as intragroup IAS 24 transactions. If Ace also presents separate statements, its transactions with the subsidiaries still require appropriate disclosure there.",
      ),
      text(
        "في 20X2 تفصح Deuce فرديًا عن شراء الآلة من الأم بمبلغ 25,000، مع طبيعة العلاقة وعدم وجود رصيد مستحق بنهاية السنة؛ وتُبين الشركتان خدمات الإدارة المقدمة بلا مقابل من Ace حيث يلزم لفهم المعاملة، لأن غياب السعر لا يلغي صفة الطرف ذي العلاقة.",
        "For 20X2, Deuce individually discloses the $25,000 machine purchase from its parent, the relationship and that no balance remains at year-end. Both subsidiaries consider disclosure of Ace's free management services where needed to understand the transaction; absence of a charge does not remove related-party status.",
      ),
      text(
        "في 20X3 تفصح Deuce وTrey فرديًا عن بيع/شراء البضائع بمبلغ 15,000 مع عدم بقاء رصيد بينهما. تُبين Deuce أيضًا خدمة الإدارة المجانية من Ace، وتفصح Trey عن خدمة الإدارة من الأم بمبلغ 10,000 والرصيد المستحق نفسه في 31 مارس؛ وAce في قوائمها المنفصلة، إن عرضتها، عن المقابل المستحق من Trey. يُفصل بين قيمة المعاملة والرصيد عند نهاية الفترة.",
        "For 20X3, Deuce and Trey individually disclose the $15,000 sale/purchase and that no intercompany balance remains. Deuce also reports Ace's free management service; Trey discloses Ace's $10,000 management service and the same amount outstanding at 31 March; Ace, in separate statements if presented, discloses the receivable from Trey. Transaction value and period-end balance are distinct disclosures.",
      ),
    ],
    reference: "IAS 24.4, 9, 13, 18–21; IFRS 10.B86",
  },
  {
    id: "ifrs-book2-biological-assets",
    standardCode: "IAS 41",
    title: text("الأصل البيولوجي والمحصول عند الحصاد", "Biological assets and produce at harvest"),
    facts: text(
      "تطلب المسألة التمييز بين الأصول البيولوجية والمحصول الزراعي، وقياس المحصول عند الحصاد، وإعطاء خمسة أزواج من الأصل والمحصول، ثم بيان معنى الأصل الاستهلاكي والأصل المستخدم للإنتاج. بعض الأمثلة تشمل شجرة مثمرة وكرمة عنب؛ يجب الانتباه إلى أن النبات المثمر نفسه يُحاسب عنه وفق IAS 16، مع بقاء ثماره ضمن IAS 41.",
      "The case asks for the distinction between biological assets and agricultural produce, measurement of produce at harvest, five asset–produce pairs, and the meaning of consumable and bearer biological assets. Some examples include a fruit tree and grape vine; the bearer plant itself falls under IAS 16, while produce growing on it remains under IAS 41.",
    ),
    question: text(
      "ميّز بين الأصل البيولوجي والمحصول الزراعي، واشرح قياس المحصول عند الحصاد، وأعطِ خمسة أمثلة صحيحة للأصل وما ينتجه، ثم قارن الأصل الاستهلاكي بالأصل المستخدم للإنتاج مع بيان الاستثناء الخاص بالنباتات المثمرة.",
      "Distinguish a biological asset from agricultural produce; explain how produce is measured at harvest; give five valid asset–produce examples; and distinguish consumable from bearer assets, including the bearer-plant exception.",
    ),
    solution: [
      text(
        "الأصل البيولوجي حيوان أو نبات حي. المحصول الزراعي هو الناتج المحصود من الأصل البيولوجي؛ مثل الصوف المنفصل عن الأغنام أو العنب المقطوف من الكرمة. المنتج المعالج بعد الحصاد ليس محصولًا زراعيًا في نطاق IAS 41.",
        "A biological asset is a living animal or plant. Agricultural produce is the harvested product of a biological asset, such as wool shorn from sheep or grapes picked from vines. Post-harvest processing is outside IAS 41's produce-at-harvest measurement.",
      ),
      text(
        "يقاس المحصول عند نقطة الحصاد بالقيمة العادلة ناقص تكاليف البيع. يصبح هذا المبلغ تكلفة المخزون عند تطبيق IAS 2 بعد الحصاد؛ ولا يُعاد تطبيق IAS 41 على مراحل التخزين أو التصنيع اللاحقة.",
        "At the point of harvest, produce is measured at fair value less costs to sell. That amount becomes inventory cost under IAS 2 after harvest; later storage or processing is not measured again under IAS 41.",
      ),
      text(
        "خمسة أزواج: أغنام/صوف؛ أبقار حلوب/لبن؛ دجاج/بيض؛ أشجار غابات للحصاد/جذوع خشب؛ كروم عنب/عنب. الزوج الأخير يوضح أن الكرمة النبات المثمر نفسها في نطاق IAS 16، لكن العنب النامي والمحصول عند حصاده في نطاق IAS 41.",
        "Five pairs: sheep/wool; dairy cattle/milk; hens/eggs; timber trees/harvested logs; grape vines/grapes. The last pair illustrates that the bearer vine itself is under IAS 16, while growing grapes and the produce at harvest are under IAS 41.",
      ),
      text(
        "الأصل الاستهلاكي يُحصد هو نفسه أو يباع كأصل بيولوجي، مثل الأشجار المزروعة للأخشاب. الأصل المستخدم للإنتاج يعطي محصولًا متكررًا، مثل بقرة حلوب. لا يعني وصف النبات بأنه مثمر إبقاء الشجرة أو الكرمة تحت IAS 41: النباتات المثمرة المؤهلة تخضع لـIAS 16، بخلاف الحيوانات المنتجة ومحصول النباتات.",
        "A consumable asset is itself harvested or sold as a biological asset, such as trees grown for timber. A bearer asset produces harvests repeatedly, such as a dairy cow. Calling a plant 'bearer' does not keep the qualifying tree or vine under IAS 41: bearer plants follow IAS 16, unlike producing animals and the plants' produce.",
      ),
    ],
    reference: "IAS 41.1–5, 12–13, 43–46; IAS 16.3(b)",
  },
  {
    id: "ifrs-book2-wislon-conditional-statements",
    standardCode: "IAS 1",
    title: text(
      "Wislon: إعداد القوائم مع اختبار الشهرة والاستثمارات",
      "Wislon: statements conditional on goodwill and investments",
    ),
    facts: text(
      "جميع الأرقام بآلاف الدولارات في 31 ديسمبر 20X7. ميزان Wislon: أسهم عادية 450، قرض 10% بمبلغ 200، أرباح محتجزة افتتاحية 242، مكونات حقوق أخرى 171؛ عقار بتكلفة 430 ومجمع إهلاك مبانٍ 20، آلات بتكلفة 830 ومجمع إهلاك 222؛ مخزون افتتاحي 190، مبيعات 2,695، مشتريات 2,152، توزيعات عادية مدفوعة 15، فائدة قرض مدفوعة 10، أجور ورواتب 254، إنارة وتدفئة 31، مصروفات متفرقة 113، ذمم مدينة 179 ودائنة 195، نقد 126، وحساب معلق دائن 135. الحساب المعلق = 120 متحصلات إصدار 100,000 سهم عادي بقيمة اسمية 0.50 دولار + 300 بيع آلة − 285 ثمن شراء صافي أصول Mary & Co في 3 مارس. الصافي المشتَرى وفق السؤال استثمارات أسهم قيمتها 231 ومخزون 34 بيع كاملًا خلال السنة، ولا يذكر وجود عملية أو قوة عمل مقتناة، أو قيمة الاستثمارات العادلة بنهاية السنة. أُدرج تأمين 9 ضمن المتفرقات يغطي السنة حتى 1 سبتمبر 20X8، ولم تُسجل فاتورة كهرباء 3؛ وتضم الإنارة عمولة بائعين 20. كلفة المباني ضمن العقار 100 وعمرها 50 سنة؛ القيمة المعاد تقييم العقار إليها آخر السنة 800. آلة مباعة كلفتها 350 وقيمتها الدفترية 274 في أول السنة؛ لا يحدد تاريخ بيعها. إهلاك الآلات للسنة 36؛ رسوم تدقيق مستحقة 4، وتحويل داخلي إلى مكونات حقوق الملكية 16. مخزون الإقفال 220 بالتكلفة، ولا تُعطى صافي قيمته القابلة للتحقق. تُهمل الضرائب.",
      "All amounts are $000 at 31 December 20X7. Wislon's balances include ordinary capital 450, 10% loan notes 200, opening retained earnings 242 and other equity components 171; property cost 430 with building accumulated depreciation 20, plant cost 830 with accumulated depreciation 222; opening inventory 190, sales 2,695, purchases 2,152, ordinary dividends paid 15, loan interest paid 10, wages/salaries 254, light/heat 31, sundry expense 113, receivables 179, payables 195, cash 126 and a 135 credit suspense balance. Suspense comprises 120 proceeds from 100,000 new 50-cent ordinary shares plus 300 proceeds on sale of plant less 285 paid on 3 March for Mary & Co's net assets. The acquired items are equity investments with a stated value of 231 and inventory of 34, all sold during the year. No acquired process or workforce, nor closing fair value of the investments, is supplied. Sundry expense includes 9 insurance through 1 September 20X8; electricity of 3 is unrecorded; light/heat includes 20 salespeople's commission. The building element of property cost is 100 with a 50-year life, and the property is revalued to 800 at year-end. Plant sold had cost 350 and a carrying amount of 274 at the start of the year, but its sale date is unspecified. Current plant depreciation is 36, audit fees due 4, and management transfers 16 within equity. Closing inventory is 220 at cost without net-realisable-value data. Ignore income tax.",
    ),
    question: text(
      "أعد قائمة الربح أو الخسارة والدخل الشامل الآخر، وقائمة المركز المالي، وتغيرات حقوق الملكية للسنة، ثم حدد البيانات الإضافية اللازمة لاعتمادها وفق IFRS الحالية.",
      "Prepare the year's profit or loss and other comprehensive income, financial-position and changes-in-equity statements, and identify the additional facts needed to finalise them under current IFRS.",
    ),
    solution: [
      text(
        "أولًا تُحل التسويات المؤكدة: التأمين المدفوع مقدمًا 6، والكهرباء المستحقة 3، وفائدة القرض السنوية 20 منها 10 غير مدفوعة، ورسوم التدقيق المستحقة 4. إصدار الأسهم: مدين نقد 120، دائن رأس مال 50 وعلاوة إصدار 70. تُعرض عمولة البائعين 20 ضمن التوزيع لا الإدارة عند اختيار العرض حسب الوظيفة. إهلاك المباني 100/50 = 2؛ القيمة قبل إعادة التقييم 430 − 20 − 2 = 408، وزيادة إعادة التقييم 392 في الدخل الشامل الآخر ما لم توجد خسارة سابقة ذات صلة. إهلاك الآلات المتبقية المقرر 36.",
        "First resolve supported adjustments: prepaid insurance 6, accrued electricity 3, annual loan interest 20 with 10 unpaid, and audit fees due 4. Share issue: debit cash 120, credit capital 50 and premium 70. Classify the 20 salespeople's commission as distribution rather than administration under a functional presentation. Building depreciation is 100/50 = 2; pre-revaluation property carrying amount is 430 − 20 − 2 = 408, producing a 392 OCI revaluation gain absent a related earlier loss. Stated current depreciation of the remaining plant is 36.",
      ),
      text(
        "يصلح الحساب التالي قالبًا مشروطًا فقط إذا كانت مجموعة Mary نشاطًا تجاريًا مؤهلًا وفق IFRS 3، وكانت الاستثمارات المقتناة لا تختلف قيمتها العادلة في تاريخ الإقفال عن 231، وكان 274 قيمة الآلة المباعة عند التصرف بلا إهلاك إضافي قبل البيع، ومخزون 220 لا يتطلب خفضًا، ولا توجد فروق أخرى. عندئذ تكون الشهرة = 285 − (231 + 34) = 20؛ وربح بيع الآلة = 300 − 274 = 26؛ والآلات الباقية = (830 − 350) − (222 − (350 − 274) + 36) = 298. لا تثبت هذه الافتراضات من نص الوقائع.",
        "The following is only a conditional template if Mary constitutes a qualifying business under IFRS 3, the acquired investments' closing fair value remains 231, the sold plant's 274 is its carrying amount at disposal without further interim depreciation, closing inventory of 220 needs no write-down, and no other adjustments arise. Then goodwill is 285 − (231 + 34) = 20; plant disposal gain is 300 − 274 = 26; and remaining plant is (830 − 350) − (222 − (350 − 274) + 36) = 298. The facts do not establish those assumptions.",
      ),
      text(
        "وفق هذه الشروط: تكلفة المبيعات = مخزون افتتاحي 190 + مشتريات (2,152 + 34) − مخزون ختامي 220 = 2,156. الإيراد 2,695 ومجمل الربح 539؛ ربح بيع الآلة 26؛ مصروف توزيع 20؛ إدارة = أجور 254 + متفرقات (113 − 6) + إنارة مصححة (31 − 20 + 3) + إهلاك مبانٍ 2 + آلات 36 + تدقيق 4 = 417؛ تمويل 20؛ ربح السنة 108. دخل شامل آخر من إعادة التقييم 392؛ الإجمالي الشامل 500. مجموع الإدارة والتوزيع 437، لكن فصلهما يبيّن وظيفة العمولة بوضوح.",
        "Under those conditions, cost of sales is opening inventory 190 + purchases (2,152 + 34) − closing inventory 220 = 2,156. Revenue is 2,695 and gross profit 539; plant-disposal gain 26; distribution expense 20; administration is wages 254 + sundry (113 − 6) + corrected light/heat (31 − 20 + 3) + building depreciation 2 + plant depreciation 36 + audit 4 = 417; finance expense 20; profit for the year 108. Revaluation OCI is 392 and total comprehensive income 500. Administration plus distribution is 437, but separating the commission makes its function clear.",
      ),
      text(
        "قائمة المركز المالي المشروطة: عقار 800، آلات 298، شهرة 20، استثمارات أسهم 231؛ أصول غير متداولة 1,349. المخزون 220، الذمم المدينة 179، مصروف مقدم 6 والنقد 126؛ متداولة 531، ومجموع الأصول 1,880. رأس المال 500، علاوة الإصدار 70، فائض إعادة تقييم 392، مكونات حقوق أخرى 187، وأرباح محتجزة 319؛ حقوق الملكية 1,468. قرض غير متداول 200؛ دائنون تجاريون 195 ومستحقات 17؛ إجمالي الالتزامات 412، فيتوازن المجموع عند 1,880.",
        "Conditional financial position: property 800, plant 298, goodwill 20 and equity investments 231 give non-current assets of 1,349. Inventory 220, receivables 179, prepayment 6 and cash 126 give current assets of 531 and total assets of 1,880. Capital 500, premium 70, revaluation surplus 392, other equity components 187 and retained earnings 319 give equity of 1,468. Non-current loan notes are 200; trade payables 195 and accruals 17 give liabilities of 412, balancing at 1,880.",
      ),
      text(
        "تغيرات حقوق الملكية المشروطة: الافتتاح 450 رأس مال + 242 أرباح محتجزة + 171 مكونات أخرى = 863؛ إصدار أسهم 120؛ توزيعات مدفوعة (15)؛ الربح 108 والدخل الشامل الآخر 392؛ التحويل الداخلي 16 من الأرباح المحتجزة إلى المكونات الأخرى بلا أثر في إجمالي الحقوق؛ الإقفال 1,468. لا يجعل توازن القوائم الافتراضات المفقودة صحيحة تلقائيًا.",
        "Conditional changes in equity: opening capital 450 + retained earnings 242 + other components 171 = 863; new shares 120; dividends paid (15); profit 108 and OCI 392; transfer of 16 from retained earnings to other components with no effect on total equity; closing equity 1,468. A balanced statement does not validate missing assumptions.",
      ),
      text(
        "قبل اعتماد القوائم، اختبر هل اشتريت عملية جوهرية مع المدخلات لا مجرد مخزون واستثمارات؛ إن لم تكن مجموعة Mary نشاطًا تجاريًا فلا تُعترف شهرة تلقائيًا، بل تطبق قواعد اقتناء مجموعة الأصول وقياس الاستثمار المالي. قياس استثمارات الأسهم اللاحق بالقيمة العادلة وفق IFRS 9، مع تحديد إن كان اختيار عرض التغير في الدخل الشامل الآخر متاحًا ومختارًا؛ ولا يعطي السؤال قيمة الإقفال. اطلب تاريخ بيع الآلة لإكمال إهلاكها وربح التصرف، وصافي القيمة القابلة للتحقق للمخزون، وتحقق من سياسة إعادة تقييم فئة العقار. أي اختلاف يغير القوائم أعلاه.",
        "Before finalising, determine whether inputs and a substantive process were acquired rather than merely inventory and investments. If Mary is not a business, do not recognise goodwill automatically; apply the asset-group acquisition rules and financial-asset measurement. Equity investments subsequently follow IFRS 9 fair value, subject to any eligible elected OCI presentation, but closing fair value is absent. Obtain the plant disposal date for depreciation and gain, inventory net realisable value, and the property-class revaluation policy. Differences change the statements above.",
      ),
    ],
    reference: "IAS 1.54, 81A, 106; IFRS 3.2(b), B7–B12D; IFRS 9.4.1.4, 5.7.5; IAS 16.36, 39–40, 55, 67–71; IAS 2.9, 28",
  },
  {
    id: "ifrs-book2-polymer-conditional-financial-statements",
    standardCode: "IAS 1",
    title: text(
      "Polymer: قائمتا الأداء والمركز المالي مع شروط القياس",
      "Polymer: conditional performance and financial-position statements",
    ),
    facts: text(
      "في 31 مايو 20X8 لدى Polymer (بالدولار): مبيعات 1,526,750؛ مخزون افتتاحي مواد خام 108,400 وتحت التشغيل 32,750 وتام 184,500؛ مشتريات مواد 750,600 ونقل للداخل 10,500 وأجور تصنيع 250,000 وأعباء تصنيع 125,000. المخزون الختامي: خام 112,600، تحت التشغيل 37,800، تام 275,350. المصروفات: إدارة 158,100، بيع وتوزيع 116,800، قانونية ومهنية 54,100 منها 5,000 مباشرة لشراء الأرض. أرض مملوكة 250,000؛ عقار إيجار طويل 75,000 ومجمع استهلاكه 15,000، مدة حقه 50 سنة منذ اقتنائه قبل عشر سنوات؛ معدات 150,000 ومجمع إهلاكها 68,500، السنة 8% من التكلفة للإنتاج؛ أثاث 50,000 ومجمعه 15,750، السنة 10% للإدارة؛ سيارات 75,000 ومجمعها 25,000، السنة 20% من الرصيد، ربعها للإدارة والباقي للتوزيع. براءات وعلامات 215,500؛ ذمم مدينة 177,630 ومخصصها 5,750؛ نقد 5,120؛ دائنون 97,500 وسحب مكشوف 51,250. سندات قرض 100,000 بفائدة 10% مستحقة لسنة كاملة، و100,000 سهم ممتاز تراكمي قابل للاسترداد بقيمة اسمية دولار وعائد 8.4% من دون شروط العقد التفصيلية؛ أسهم عادية 300,000، علاوة إصدار 100,000، مكونات حقوق أخرى 50,000، فائض إعادة تقييم افتتاحي 50,000، وأرباح محتجزة افتتاحية 283,500. ضريبة السنة المقدرة 40,000. أوصى المديرون بعد نهاية السنة بتوزيع 3.5 سنت للسهم العادي.",
      "At 31 May 20X8 Polymer has, in dollars: sales 1,526,750; opening raw materials 108,400, work in progress 32,750 and finished goods 184,500; raw-material purchases 750,600, inward carriage 10,500, manufacturing wages 250,000 and manufacturing overhead 125,000. Closing raw materials are 112,600, work in progress 37,800 and finished goods 275,350. Administration expense is 158,100, selling/distribution 116,800 and legal/professional expense 54,100, including 5,000 directly attributable to land purchase. Owned land is 250,000; a long-lease property interest costs 75,000 with accumulated amortisation 15,000, held for ten years of a 50-year term; equipment costs 150,000 with accumulated depreciation 68,500 and current production depreciation of 8% of cost; furniture costs 50,000 with accumulated depreciation 15,750 and 10% current administration depreciation; vehicles cost 75,000 with accumulated depreciation 25,000 and 20% reducing-balance depreciation, one quarter for administration and the rest for distribution. Patents/trademarks are 215,500; receivables 177,630 with a 5,750 allowance; cash 5,120; payables 97,500 and overdraft 51,250. There are 100,000 10% loan notes with a full year's interest due, and 100,000 cumulative redeemable $1 preference shares with an 8.4% stated return but no detailed contract terms; ordinary shares are 300,000, share premium 100,000, other equity components 50,000, opening revaluation surplus 50,000 and opening retained earnings 283,500. Estimated current income tax is 40,000. After year-end directors recommended a 3.5-cent ordinary-share dividend.",
    ),
    question: text(
      "أعد قائمة الربح أو الخسارة والدخل الشامل الآخر وقائمة المركز المالي في 31 مايو 20X8، مبينًا بوضوح الافتراضات اللازمة بشأن الأسهم الممتازة وحق الإيجار والمخزون والأصل غير الملموس، وأثر التوزيع المقترح بعد نهاية السنة.",
      "Prepare the profit or loss and other comprehensive income statement and the 31 May 20X8 financial-position statement, explicitly identifying assumptions needed for the preference shares, leased interest, inventory and intangibles, and the effect of the post-year-end proposed dividend.",
    ),
    solution: [
      text(
        "الحساب التعليمي التالي مشروط بأن شروط الأسهم الممتازة تفرض استرداد 100,000 ودفع عائد 8,400، وأن قياس الالتزام عند الإقفال يساوي القيمة الاسمية مع تأجيل استرداده لأكثر من 12 شهرًا؛ وأن مبلغ حق الإيجار 75,000 يمثل تكلفته الكاملة بلا التزام إيجار إضافي غير معطى؛ وأن الأعباء الصناعية قابلة للتحميل وفق IAS 2، ولا يوجد تخفيض مخزون إلى صافي القيمة القابلة للتحقق أو إطفاء/هبوط إضافي للبراءات. لا يثبت السؤال هذه الشروط كلها، لذلك لا تمثل القائمة نتيجة IFRS وحيدة حتمية.",
        "The following teaching calculation assumes the preference terms mandate redemption of 100,000 and payment of the 8,400 return, with a closing liability equal to par and redemption deferred for more than 12 months; that the 75,000 leased-property interest is its complete cost with no additional lease liability omitted; that production overhead qualifies under IAS 2, with no inventory net-realisable-value write-down or further patent amortisation/impairment. The question does not establish all these conditions, so these statements are not a uniquely compelled IFRS result.",
      ),
      text(
        "تكلفة المبيعات = المخزون الافتتاحي 325,650 + المشتريات 750,600 + النقل 10,500 + أجور التصنيع 250,000 + الأعباء 125,000 + إهلاك آلات الإنتاج 12,000 − المخزون الختامي 425,750 = 1,048,000. مصروف التوزيع = 116,800 + 7,500 إهلاك سيارات = 124,300. الإدارة = 158,100 + (54,100 − 5,000 رسوم أرض تُرسمل) + 5,000 إهلاك أثاث + 2,500 إهلاك سيارات + 1,500 استهلاك حق الإيجار = 216,200.",
        "Cost of sales is opening inventory 325,650 + purchases 750,600 + carriage 10,500 + manufacturing wages 250,000 + overhead 125,000 + production-equipment depreciation 12,000 − closing inventory 425,750 = 1,048,000. Distribution expense is 116,800 + vehicle depreciation 7,500 = 124,300. Administration is 158,100 + (54,100 − 5,000 land fees capitalised) + furniture depreciation 5,000 + vehicle depreciation 2,500 + leasehold amortisation 1,500 = 216,200.",
      ),
      text(
        "في قائمة الأداء المشروطة: إيراد 1,526,750؛ تكلفة مبيعات (1,048,000)؛ مجمل ربح 478,750؛ توزيع (124,300)؛ إدارة (216,200)؛ تكلفة تمويل (18,400) تشمل 10,000 فائدة سندات و8,400 عائد السهم المصنف التزامًا؛ ربح قبل الضريبة 119,850؛ ضريبة جارية (40,000)؛ ربح السنة 79,850. لا توجد حركة دخل شامل آخر للسنة في الوقائع؛ فائض إعادة التقييم 50,000 رصيد افتتاحي لا يُعد مكسب السنة.",
        "Under the stated assumptions, performance is: revenue 1,526,750; cost of sales (1,048,000); gross profit 478,750; distribution (124,300); administration (216,200); finance cost (18,400), comprising 10,000 loan interest and 8,400 return on shares classified as a liability; profit before tax 119,850; current tax (40,000); profit for the year 79,850. No current-year OCI movement is supplied; the 50,000 revaluation surplus is an opening balance, not this year's gain.",
      ),
      text(
        "المركز المالي المشروط: أرض 255,000 بعد رسملة الرسوم، حق عقار مستأجر 58,500، معدات 69,500، أثاث 29,250 وسيارات 40,000؛ إجمالي الممتلكات 452,250. مع غير الملموس 215,500 تصبح الأصول غير المتداولة 667,750. الأصول المتداولة: مخزون 425,750، ذمم صافية 171,880، نقد 5,120؛ الإجمالي 602,750. مجموع الأصول 1,270,500.",
        "Conditional financial position: owned land 255,000 after capitalising fees, leased-property interest 58,500, equipment 69,500, furniture 29,250 and vehicles 40,000; total property interests and equipment 452,250. Including intangibles of 215,500 gives non-current assets of 667,750. Current assets are inventory 425,750, net receivables 171,880 and cash 5,120, totalling 602,750. Total assets are 1,270,500.",
      ),
      text(
        "حقوق الملكية المشروطة = رأس مال عادي 300,000 + علاوة إصدار 100,000 + أرباح محتجزة (283,500 + 79,850) = 363,350 + مكونات أخرى 50,000 + فائض إعادة تقييم افتتاحي 50,000؛ الإجمالي 863,350. الالتزامات غير المتداولة المفترضة: قرض 100,000 وأسهم ممتازة مصنفة التزامًا 100,000؛ الإجمالي 200,000. الالتزامات المتداولة: دائنون (97,500 + 10,000 فائدة + 8,400 عائد مفترض مستحق) = 115,900؛ سحب مكشوف 51,250؛ ضريبة 40,000؛ الإجمالي 207,150. المجموع 863,350 + 200,000 + 207,150 = 1,270,500.",
        "Conditional equity is ordinary capital 300,000 + premium 100,000 + retained earnings (283,500 + 79,850) = 363,350 + other components 50,000 + opening revaluation surplus 50,000, totalling 863,350. Assumed non-current liabilities are loan notes 100,000 and liability-classified preference shares 100,000, totalling 200,000. Current liabilities are payables (97,500 + 10,000 loan interest + 8,400 assumed accrued preference return) = 115,900, overdraft 51,250 and tax 40,000, totalling 207,150. The statement balances at 863,350 + 200,000 + 207,150 = 1,270,500.",
      ),
      text(
        "يلزم الرجوع إلى عقد الأسهم الممتازة لتصنيفها وقياسها؛ «قابلة للاسترداد» وحدها لا تثبت التزامًا بقيمة 100,000 أو وجوب دفع العائد. ويلزم عقد الإيجار لتحديد أي التزام أو قياس آخر، وبيانات العمر النافع/الهبوط للأصل غير الملموس، وسياسة تحميل الأعباء وصافي القيمة القابلة للتحقق للمخزون. التوزيع العادي المقترح بعد 31 مايو = 300,000 × 0.035 = 10,500 ولا يُثبت التزامًا في تاريخ الإقفال. يُراجع شكل العرض وفق IFRS 18 للفترات التي تبدأ من 1 يناير 2027 أو عند التطبيق المبكر؛ المثال لا يثبت فترة تقويمية فعلية أو تبنيًا مبكرًا.",
        "Inspect the preference contract for classification and measurement: 'redeemable' alone establishes neither a 100,000 liability nor a mandatory return. Inspect the lease for any additional liability or measurement, the intangible's useful life/impairment and inventory overhead allocation and net realisable value. The ordinary dividend proposed after 31 May is 300,000 × 0.035 = 10,500 and creates no closing-date liability. Revisit statement presentation under IFRS 18 for periods beginning on or after 1 January 2027 or upon early adoption; the hypothetical 20X8 label does not establish a real calendar period or early adoption.",
      ),
    ],
    reference: "IAS 1.54, 81A, 82; IAS 2.9–16, 28; IAS 10.12–13; IAS 16.16–17; IAS 32.15–19, 35; IAS 38.97–107; IFRS 16.23–26; IFRS 18.C1",
  },
  {
    id: "ifrs-book2-polymer-redeemable-preference-shares",
    standardCode: "IAS 32",
    title: text("Polymer: هل السهم الممتاز القابل للاسترداد دين أم حقوق ملكية؟", "Polymer: is a redeemable preference share debt or equity?"),
    facts: text(
      "تظهر في أرصدة Polymer عند 31 مايو 20X8 أسهم ممتازة تراكمية قابلة للاسترداد، عددها 100,000 سهم بقيمة اسمية دولار واحد وعائد اسمي 8.4%، ضمن رأس المال. لا يبين السؤال تاريخ الاسترداد أو من يملك حق طلبه أو ما إذا كان دفع العائد إلزاميًا.",
      "Polymer's 31 May 20X8 balances include 100,000 cumulative redeemable $1 preference shares carrying a stated 8.4% return, initially listed in share capital. The question gives no redemption date, holder put right or terms establishing whether distributions are mandatory.",
    ),
    question: text(
      "وفق IAS 32، ما الشروط التي تحدد تصنيف هذه الأسهم وتوزيعاتها؟ احسب العائد السنوي الاسمي، وبيّن متى يصبح مصروف تمويل ولماذا لا تكفي الوقائع للجزم برصيد التزام 100,000 دولار.",
      "Under IAS 32, what terms determine the classification of these shares and their distributions? Calculate the stated annual return, and explain when it is a finance expense and why the facts do not establish an unconditional $100,000 liability balance.",
    ),
    solution: [
      text(
        "العبرة بجوهر العقد لا باسم «سهم». إذا ألزم العقد Polymer باسترداد السهم نقدًا في تاريخ محدد أو عند طلب الحامل، ينشأ مكوّن التزام مالي، ما لم ينطبق استثناء محدد في IAS 32. أما إذا كان الاسترداد والتوزيع تحت سيطرة المصدر وله حق غير مشروط في تجنب دفع النقد، فقد يكون السهم حقوق ملكية. يلزم الاطلاع على شروط الإصدار الفعلية قبل الحسم.",
        "Classification follows the contract's substance, not the label 'share'. Mandatory cash redemption on a specified date or at the holder's option creates a financial-liability component, subject to any applicable IAS 32 exception. If redemption and distributions remain at the issuer's discretion and it has an unconditional right to avoid cash settlement, the instrument may be equity. The actual issue terms must be checked.",
      ),
      text(
        "حتى إذا كان الاسترداد النقدي إلزاميًا فقد يحتوي السهم على مكوّن حقوق ملكية إذا كانت التوزيعات قبل الاسترداد اختيارية؛ يقاس مكوّن الالتزام مبدئيًا بالقيمة الحالية لالتزام الاسترداد، ويعالج الفرق وفق شروط الأداة. لذلك لا يثبت من كلمة «قابل للاسترداد» وحدها أن القيمة الدفترية للالتزام عند الإقفال تساوي 100,000 دولار.",
        "Even with mandatory cash redemption, discretionary pre-redemption distributions may create an equity component alongside the liability. The liability component is initially measured at the present value of the redemption obligation, with any residual treated under the instrument's actual terms. 'Redeemable' alone does not prove that the closing liability carrying amount is $100,000.",
      ),
      text(
        "العائد السنوي الاسمي = 100,000 × 8.4% = 8,400 دولار. إذا أوجبت الشروط دفع هذا العائد وكان السهم مصنفًا بالكامل التزامًا، يعرض العائد مصروف تمويل وتثبت ذمته غير المدفوعة. أما التوزيع التقديري المرتبط بمكوّن حقوق ملكية فيعالج مباشرة ضمن حقوق الملكية عند نشوء الالتزام به، لا كمصروف؛ والتراكمية وحدها لا تحسم الاختيار أو توقيت الالتزام.",
        "The stated annual return is 100,000 × 8.4% = $8,400. If the terms require that return and the shares are wholly liabilities, it is a finance expense with an unpaid payable where relevant. A discretionary distribution attributable to an equity component is recognised directly in equity when an obligation to distribute arises, not as an expense. The word 'cumulative' alone does not settle discretion or timing.",
      ),
    ],
    reference: "IAS 32.15–19, 35–36, AG25–AG26, AG37",
  },
  {
    id: "ifrs-book2-polymer-post-reporting-dividend",
    standardCode: "IAS 10",
    title: text("Polymer: توصية بتوزيع أرباح بعد تاريخ التقرير", "Polymer: dividend proposed after the reporting date"),
    facts: text(
      "نهاية سنة Polymer هي 31 مايو 20X8. يوجد 300,000 سهم عادي قائم. في 30 يونيو، بعد نهاية السنة، أوصى المديرون بتوزيع 3.5 سنتات للسهم؛ لا يذكر السؤال اعتماد المساهمين لهذا التوزيع قبل 31 مايو أو تاريخ اعتماد القوائم للنشر.",
      "Polymer's reporting date is 31 May 20X8 and it has 300,000 ordinary shares outstanding. On 30 June, after year-end, the directors recommended a dividend of 3.5 cents per share. The question does not say shareholders approved it by 31 May or state the financial statements' authorisation date.",
    ),
    question: text(
      "احسب مبلغ التوزيع المقترح، وبيّن هل ينشأ عنه التزام في 31 مايو 20X8 وكيف يعرض أو يفصح عنه إذا تم اقتراحه قبل اعتماد القوائم للنشر.",
      "Calculate the proposed dividend and explain whether it creates a 31 May 20X8 liability and how it is presented or disclosed if proposed before the financial statements are authorised for issue.",
    ),
    solution: [
      text(
        "المبلغ الحسابي = 300,000 × 0.035 دولار = 10,500 دولار. التوصية الصادرة في 30 يونيو لا تنشئ التزامًا في 31 مايو؛ فلا يثبت دائن توزيعات ولا يخصم 10,500 دولار من ربح السنة أو رصيد الالتزامات في ذلك التاريخ.",
        "The proposed amount is 300,000 × $0.035 = $10,500. A recommendation made on 30 June creates no obligation at 31 May; no dividend payable is recognised then and $10,500 is not deducted from that year's profit or included in year-end liabilities.",
      ),
      text(
        "إذا وقع الاقتراح أو الإعلان قبل اعتماد القوائم للنشر، يفصح عن التوزيع المقترح ومبلغه للسهم في الإيضاحات وفق متطلبات العرض السارية؛ ويثبت التوزيع في الفترة اللاحقة فقط حين يصبح معتمدًا وغير خاضع لتقدير المنشأة. إن لم يقع الاقتراح قبل الاعتماد، فلا تفترض وقائع المسألة إفصاحًا حدث بعد التقرير داخل تلك القوائم.",
        "If proposed or declared before authorisation for issue, disclose the proposal and amount per share under the applicable presentation requirements. Recognise a distribution in a later period only when duly authorised and no longer at the entity's discretion. If the proposal occurred after authorisation, the question does not establish a post-reporting-event disclosure in those statements.",
      ),
    ],
    reference: "IAS 10.12–13; IFRS 18.132(a)",
  },
  {
    id: "ifrs-book2-polymer-going-concern",
    standardCode: "IAS 1",
    title: text("Polymer: إعداد القوائم عند انتفاء الاستمرارية", "Polymer: statements when going concern no longer applies"),
    facts: text(
      "طُلب من Polymer بيان أثر عدم صلاحية فرض الاستمرارية على القوائم المالية المنشورة مع مثال. لا يذكر السؤال أن الشركة قررت التصفية فعلًا، أو موعد تسوية الالتزامات، أو قيمة بيع الأصول. يورد المثال آلة تكلفتها الأصلية 10,000 وقيمتها الدفترية 6,000، ولا يوجد لها سوق بيع مستقل.",
      "Polymer is asked to explain, with an example, how published financial statements change if the going-concern basis is inappropriate. The question does not establish that liquidation has actually been decided, when liabilities fall due, or asset disposal proceeds. Its illustration describes a machine originally costing 10,000, with a 6,000 carrying amount and no standalone sales market.",
    ),
    question: text(
      "إذا لم تعد الاستمرارية مناسبة، كيف تختار Polymer أساس إعداد القوائم وتعرض أثره؟ وهل تُصفّر الآلة تلقائيًا وتتحول جميع البنود غير المتداولة إلى متداولة؟",
      "If going concern is no longer appropriate, how should Polymer choose and disclose its preparation basis? Must the machine automatically be written down to zero and every non-current item become current?",
    ),
    solution: [
      text(
        "تقيّم الإدارة الاستمرارية من المعلومات المتاحة حتى تاريخ اعتماد القوائم. لا يكفي مجرد احتمال الصعوبات؛ ينتفي الأساس إذا قصدت الإدارة التصفية أو وقف النشاط، أو لم يبقَ بديل واقعي لذلك. وإذا نشأ هذا الاستنتاج بعد تاريخ التقرير وقبل اعتماد القوائم، فلا تُعد القوائم على أساس الاستمرارية.",
        "Management assesses going concern using information available up to authorisation of the statements. Difficulty alone is not enough: the basis ceases to be appropriate if management intends to liquidate or cease trading, or has no realistic alternative. A conclusion reached after the reporting date but before authorisation also prevents preparation on a going-concern basis.",
      ),
      text(
        "عند إعداد القوائم على أساس آخر، تفصح Polymer بوضوح عن عدم استخدام الاستمرارية، وأساس الإعداد المختار، وسبب انتفاء الاستمرارية. لا يفرض IAS 1 نموذجًا رقميًا واحدًا لقيم التصفية؛ يُحدد القياس والعرض بحسب الحقائق وأساس الإعداد المعلن، مع اختبار كل أصل والتزام على حدة.",
        "When statements use another basis, Polymer discloses that fact, the basis used and why it is not a going concern. IAS 1 does not prescribe one universal numerical liquidation model: measurement and presentation follow the facts and the disclosed preparation basis, with each asset and liability assessed individually.",
      ),
      text(
        "في مثال الآلة: القيمة الدفترية 6,000 ليست بالضرورة القيمة التي ستظهر عند توقف النشاط، لكن انعدام سوق بيع مستقل وحده لا يثبت أن قيمتها صفر؛ افحص إمكان نقلها مع نشاط آخر أو الحصول على منافع أو متحصلات منها والتكاليف المرتبطة. إن خلص القياس الملائم إلى عدم وجود قيمة قابلة للاسترداد، تُعكس الخسارة وفق الأساس المختار؛ وإلا فلا يجوز اختلاق تخفيض كامل إلى الصفر.",
        "For the illustrated machine, the 6,000 carrying amount need not remain appropriate after trading ceases. Yet no standalone market does not by itself prove a zero value: consider transfer with another business, other obtainable benefits or proceeds, and related costs. A loss follows only if the applicable measurement yields no recoverable amount; an automatic full write-off would be unsupported.",
      ),
      text(
        "لا تُعاد تسمية جميع الأصول والالتزامات غير المتداولة على أنها متداولة آليًا؛ يُراجع توقيت تحقيق كل أصل وتسوية كل التزام والحقوق القائمة عند تاريخ التقرير ومتطلبات العرض. ويُشرح للمستخدمين أي تغيير جوهري في القياس أو التصنيف بدل افتراض قواعد شاملة من واقعة انتفاء الاستمرارية.",
        "Do not automatically relabel all non-current assets and liabilities as current. Reassess each item's expected realisation or settlement, reporting-date rights and presentation requirements, explaining material measurement or classification changes instead of applying a blanket rule.",
      ),
    ],
    reference: "IAS 1.25–26, 66, 69; IAS 10.14",
  },
  {
    id: "ifrs-book2-hewlett-options",
    standardCode: "IFRS 2",
    title: text("خيارات الموظفين وشروط البقاء", "Hewlett: employee options and service vesting"),
    facts: text(
      "منحت Hewlett في 1 يناير 20X3 عدد 200 خيار لكل من 800 موظف، بشرط بقائهم حتى 31 ديسمبر 20X5. القيمة العادلة لكل خيار في تاريخ المنح 7.50 دولارات وسعر الممارسة 1.50 دولار. كان التقدير الأولي لمغادرة الموظفين 50 ثم 40 ثم 30 عبر السنوات الثلاث. في نهاية 20X3 غادر 40 وأصبح تقدير إجمالي المغادرين 95؛ وفي نهاية 20X4 غادر 20 آخرون وأصبح التقدير الإجمالي 70؛ ولم يغادر أحد في 20X5. مارس جميع المستحقين الخيارات في 31 ديسمبر 20X5، والقيمة الاسمية للسهم دولار واحد.",
      "On 1 January 20X3 Hewlett Co granted 200 options on $1 ordinary shares to each of 800 employees, conditional on employment through 31 December 20X5. Grant-date fair value was $7.50 per option and exercise price $1.50. Initially 50, 40 and 30 departures were estimated across the three years. At the end of 20X3, 40 had left and estimated total departures were revised to 95; by the end of 20X4, another 20 had left and total estimated departures were revised to 70; no one left in 20X5. All vested options were exercised on 31 December 20X5.",
    ),
    question: text(
      "أظهر القيود المزدوجة لمصروف خدمات الموظفين في كل سنة من سنوات الاستحقاق الثلاث، ثم قيد إصدار الأسهم عند الممارسة.",
      "Show the double entries for the employee-services charge to profit or loss over the three years and for the share issue on exercise.",
    ),
    solution: [
      text(
        "20X3: المستحق المتوقع 800 − 95 = 705 موظفين. المصروف التراكمي = 705 × 200 × 7.50 × 1/3 = 352,500 دولار؛ مدين مصروف موظفين، دائن احتياطي مدفوعات أسهم بالقيمة نفسها.",
        "20X3: expected vesting employees = 800 − 95 = 705. Cumulative charge = 705 × 200 × $7.50 × 1/3 = $352,500; debit staff expense and credit share-based-payment reserve.",
      ),
      text(
        "20X4: المستحق المتوقع 730؛ المصروف التراكمي = 730 × 200 × 7.50 × 2/3 = 730,000. مصروف السنة = 730,000 − 352,500 = 377,500؛ مدين مصروف موظفين، دائن الاحتياطي.",
        "20X4: expected vesting employees = 730; cumulative charge = 730 × 200 × $7.50 × 2/3 = $730,000. Current-year expense = 730,000 − 352,500 = $377,500; debit staff expense and credit the reserve.",
      ),
      text(
        "20X5: استحق 740 موظفًا بعد مغادرة 60 إجمالًا. التكلفة النهائية = 740 × 200 × 7.50 = 1,110,000؛ مصروف السنة = 1,110,000 − 730,000 = 380,000؛ مدين مصروف موظفين، دائن الاحتياطي.",
        "20X5: 740 employees vested after 60 total departures. Final cost = 740 × 200 × $7.50 = $1,110,000; current-year expense = 1,110,000 − 730,000 = $380,000; debit staff expense and credit the reserve.",
      ),
      text(
        "عند الممارسة يُصدر 740 × 200 = 148,000 سهم. النقد المقبوض = 148,000 × 1.50 = 222,000، ورصيد الاحتياطي 1,110,000. القيد المتوازن: مدين نقدية 222,000، ومدين احتياطي مدفوعات أسهم 1,110,000؛ دائن رأس مال أسهم 148,000، ودائن علاوة إصدار 1,184,000.",
        "On exercise, 740 × 200 = 148,000 shares are issued. Cash received = 148,000 × $1.50 = $222,000 and the reserve is $1,110,000. Balanced entry: debit cash $222,000 and share-based-payment reserve $1,110,000; credit $1 par share capital $148,000 and share premium $1,184,000.",
      ),
    ],
    reference: "IFRS 2.14–23",
  },
  {
    id: "ifrs-book2-euro-purchase-settlement",
    standardCode: "IAS 21",
    title: text("شراء مخزون باليورو وتسوية الدائن", "Euro inventory purchase and payable settlement"),
    facts: text(
      "اشترت منشأة مخزونًا بالآجل مقابل 124,250 يورو. عملتها الوظيفية الدولار، وكان سعر الصرف عند استلام المخزون 3.50 يورو لكل دولار، ثم سددت الدائن عندما أصبح السعر 3.55 يورو لكل دولار. لأغراض هذه الحالة المركزة، افترض عدم وقوع نهاية فترة تقرير بين الشراء والسداد.",
      "An entity buys inventory on credit for €124,250. Its functional currency is the US dollar. The rate is €3.50 per US dollar when the inventory is received and €3.55 per US dollar when the payable is settled. For this focused case, assume no reporting date falls between purchase and settlement.",
    ),
    question: text(
      "احسب قيمة الاعتراف الأولي ومبلغ السداد وفرق الصرف، وبيّن أثرها في المخزون والربح أو الخسارة.",
      "Calculate the initial recognition amount, settlement cash and exchange difference, and explain the effects on inventory and profit or loss.",
    ),
    solution: [
      text(
        "عند الاستلام: 124,250 ÷ 3.50 = 35,500 دولار. يُثبت المخزون والدائن التجاري بهذا المبلغ لأن سعر تاريخ المعاملة هو أساس الاعتراف الأولي.",
        "On receipt: €124,250 ÷ 3.50 = US$35,500. Recognise inventory and the trade payable at this amount because initial recognition uses the transaction-date rate.",
      ),
      text(
        "عند السداد: 124,250 ÷ 3.55 = 35,000 دولار نقدًا. إلغاء الدائن البالغ 35,500 مقابل نقدية 35,000 ينتج مكسب صرف 500 دولار في الربح أو الخسارة.",
        "On settlement: €124,250 ÷ 3.55 = US$35,000 cash. Derecognising the US$35,500 payable against US$35,000 cash produces a US$500 exchange gain in profit or loss.",
      ),
      text(
        "يبقى المخزون غير النقدي المقاس بالتكلفة التاريخية عند 35,500 دولار؛ لا يُخفض بمكسب الصرف. نشأ المكسب من تسوية الدائن النقدي، لا من إعادة قياس المخزون.",
        "The non-monetary inventory measured at historical cost remains US$35,500; the exchange gain does not reduce it. The gain arises from settling the monetary payable, not from remeasuring the inventory.",
      ),
    ],
    reference: "IAS 21.21–23, 28",
  },
  {
    id: "ifrs-book2-yuan-sale-settlement",
    standardCode: "IAS 21",
    title: text("بيع باليوان وتحصيل المدين", "Yuan sale and receivable settlement"),
    facts: text(
      "باعت منشأة محلية بضاعة إلى عميل صيني مقابل 116,000 يوان. عملتها الوظيفية الدولار. كان السعر عند البيع 10.75 يوان لكل دولار، وعند التحصيل 10.8 يوان لكل دولار. لأغراض هذه الحالة المركزة، افترض عدم وقوع نهاية فترة تقرير بين التاريخين.",
      "A local entity sells goods to a Chinese customer for CNY116,000. Its functional currency is the US dollar. The rate is CNY10.75 per US dollar at sale and CNY10.8 per US dollar on collection. For this focused case, assume no reporting date falls between the two dates.",
    ),
    question: text(
      "احسب الإيراد والمدين والنقد المحصل وفرق الصرف دون تقريب مبكر، ثم فسّر أرقام المصدر المقربة.",
      "Calculate revenue, the receivable, cash collected and the exchange difference without premature rounding, then explain the source's rounded figures.",
    ),
    solution: [
      text(
        "عند البيع: 116,000 ÷ 10.75 = 10,790.70 دولار تقريبًا؛ مدين ذمم مدينة ودائن إيراد مبيعات بهذا المبلغ.",
        "At sale: CNY116,000 ÷ 10.75 = approximately US$10,790.70; debit the receivable and credit sales revenue for that amount.",
      ),
      text(
        "عند التحصيل: 116,000 ÷ 10.8 = 10,740.74 دولار تقريبًا. خسارة الصرف = 10,790.70 − 10,740.74 = 49.96 دولار في الربح أو الخسارة.",
        "On collection: CNY116,000 ÷ 10.8 = approximately US$10,740.74. The exchange loss is US$10,790.70 − US$10,740.74 = US$49.96 in profit or loss.",
      ),
      text(
        "يعرض المصدر 10,800 و10,750 وخسارة 50 دولارًا؛ وهي توافق تقريب ناتجي القسمة إلى أقرب 50 دولارًا، رغم أن أساس التقريب غير مذكور صراحة. الحساب الدقيق أعلاه يحافظ على اتساق القيد، ويمكن عرض مبالغ مقربة وفق سياسة ثابتة دون تغيير جوهر خسارة الصرف.",
        "The source prints US$10,800, US$10,750 and a US$50 loss. Those figures correspond to rounding each quotient to the nearest US$50, although the source does not state that rounding basis. The precise calculation above keeps the entry internally consistent; amounts may be presented under a consistent rounding policy without changing the substance of the exchange loss.",
      ),
    ],
    reference: "IAS 21.21–22, 28",
  },
  {
    id: "ifrs-book2-belgian-property-translation",
    standardCode: "IAS 21",
    title: text("عقار تابع بلجيكي وعملة عرض المجموعة", "Belgian subsidiary property and group presentation currency"),
    facts: text(
      "اشترت شركة تابعة بلجيكية عقارًا في 31 ديسمبر 20X7 مقابل 2,100,000 يورو عندما كان السعر 70 يورو لكل دولار. بلغ إهلاك 20X8 مبلغ 16,800 يورو، فأصبحت القيمة الدفترية في 31 ديسمبر 20X8 مقدارها 2,083,200 يورو، وكان سعر الإقفال 60 يورو لكل دولار. يعرض المصدر أيضًا متوسطًا سنويًا قدره 64 يورو لكل دولار. تعد المجموعة قوائمها بالدولار، ولا يذكر السؤال صراحة عملة التابعة الوظيفية أو وجود تضخم مفرط.",
      "A Belgian subsidiary buys property on 31 December 20X7 for €2,100,000 when the rate is €70 per US dollar. Its 20X8 depreciation is €16,800, leaving a €2,083,200 carrying amount at 31 December 20X8, when the closing rate is €60 per US dollar. The source also gives a €64 per US dollar annual average. The group presents in US dollars; the question does not expressly state the subsidiary's functional currency or whether it is hyperinflationary.",
    ),
    question: text(
      "بيّن نتيجة ترجمة العقار والإهلاك إذا كان اليورو عملة التابعة الوظيفية والدولار عملة عرض المجموعة، وقارنها بحالة كون الدولار عملتها الوظيفية.",
      "Show the property and depreciation translation if the euro is the subsidiary's functional currency and the US dollar is the group's presentation currency, and compare that result with a US-dollar functional currency.",
    ),
    solution: [
      text(
        "إذا كان اليورو العملة الوظيفية والاقتصاد غير مفرط التضخم، تُترجم أصول والتزامات التابعة إلى عملة العرض بسعر الإقفال: 2,083,200 ÷ 60 = 34,720 دولار للقيمة الدفترية للعقار.",
        "If the euro is the functional currency and the economy is not hyperinflationary, translate the subsidiary's assets and liabilities into the presentation currency at the closing rate: €2,083,200 ÷ 60 = US$34,720 for the property's carrying amount.",
      ),
      text(
        "يُترجم مصروف الإهلاك بسعر تاريخ المعاملة. إذا كان متوسط 64 يقارب الأسعار الفعلية لتواريخ استهلاك منافع العقار ولم تكن التقلبات جوهرية، يكون المصروف 16,800 ÷ 64 = 262.50 دولار. لا يكفي المتوسط إذا لم يكن تقريبًا مناسبًا.",
        "Translate depreciation expense at transaction-date rates. If the €64 average approximates the actual rates when the property's benefits were consumed and rates did not fluctuate significantly, the expense is €16,800 ÷ 64 = US$262.50. The average is not sufficient when it is not an appropriate approximation.",
      ),
      text(
        "تذهب فروق ترجمة نتائج ومركز العملية الأجنبية إلى الدخل الشامل الآخر وفق IAS 21؛ لا يمكن حساب احتياطي الترجمة الكامل من العقار وحده لغياب بقية صافي الأصول وحقوق الملكية. وإذا كان الدولار هو العملة الوظيفية فعلًا والعقار أصلًا غير نقدي بالتكلفة التاريخية، يُثبت مبدئيًا بمبلغ 2,100,000 ÷ 70 = 30,000 دولار، ويكون الإهلاك المكافئ 16,800 ÷ 70 = 240 دولارًا والقيمة 29,760 دولارًا. لذلك يحدد تقدير العملة الوظيفية المسار، ولا يُختار 29,760 أو34,720 اعتباطيًا.",
        "Exchange differences from translating a foreign operation's results and financial position go to OCI under IAS 21; a complete translation reserve cannot be calculated from the property alone because the other net assets and equity are missing. If the US dollar is in fact the functional currency and the property is a historical-cost non-monetary asset, initially recognise €2,100,000 ÷ 70 = US$30,000, with equivalent depreciation of €16,800 ÷ 70 = US$240 and a US$29,760 carrying amount. Functional-currency assessment therefore determines the route; US$29,760 and US$34,720 are not elective alternatives.",
      ),
    ],
    reference: "IAS 21.9–12, 21–23, 34, 38–41",
  },
  {
    id: "ifrs-book2-courtney-currency",
    standardCode: "IAS 21",
    title: text("شراء مواد بعملة أجنبية", "Courtney: foreign-currency purchase"),
    facts: text(
      "اشترت Courtney في ديسمبر 20X7 مواد من مورد في بلد عملته الوون بمبلغ 300,000 وون ولم تسدد الثمن حتى 31 ديسمبر. عملتها الوظيفية الدولار الأمريكي. في 1 ديسمبر كان الدولار = 20 وون، وفي 31 ديسمبر الدولار = 16 وون. الشركة تابعة بالكامل لمجموعة تعرض قوائمها باليورو. لا يحدد نص الحالة يوم الشراء صراحة؛ يفترض الحل أنه 1 ديسمبر وفق السعر المعطى.",
      "Courtney Co bought materials in December 20X7 from a supplier whose currency is the won for 300,000 won. The amount remained unpaid at 31 December. Courtney's functional currency is the US dollar. The exchange rate was US$1 = 20 won on 1 December and US$1 = 16 won on 31 December. Courtney is a wholly owned subsidiary of a group presenting its results in euros. The case does not expressly state the purchase day; the solution assumes 1 December, the date of the supplied transaction rate.",
    ),
    question: text(
      "بيّن معالجة العملية في قوائم 31 ديسمبر 20X7، واشرح الفرق بين العملة الوظيفية وعملة العرض لدى Courtney ومجموعتها.",
      "Show how the transaction is included in the financial statements at 31 December 20X7, and define functional and presentation currencies in relation to Courtney Co and its parent.",
    ),
    solution: [
      text(
        "في تاريخ الشراء: 300,000 ÷ 20 = 15,000 دولار. يُثبت مخزون المواد والدائن التجاري بهذا المبلغ، بافتراض أن المواد لم تُستهلك بعد.",
        "At purchase: 300,000 ÷ 20 = US$15,000. Recognise materials inventory and the trade payable at that amount, assuming the materials have not yet been consumed.",
      ),
      text(
        "في 31 ديسمبر: الدائن بند نقدي يُعاد ترجمته بسعر الإقفال: 300,000 ÷ 16 = 18,750 دولار. فرق الخسارة = 18,750 − 15,000 = 3,750 دولار، في الربح أو الخسارة؛ القيد: مدين خسارة صرف 3,750، دائن دائنون تجاريون 3,750.",
        "At 31 December the monetary payable is retranslated at the closing rate: 300,000 ÷ 16 = US$18,750. The US$3,750 loss (18,750 − 15,000) goes to profit or loss: debit exchange loss 3,750, credit trade payables 3,750.",
      ),
      text(
        "تكلفة المواد غير النقدية بالتكلفة التاريخية تبقى 15,000 دولار؛ لا تُعاد ترجمتها بسعر الإقفال. العملة الوظيفية لـCourtney هي الدولار وفق البيئة الاقتصادية الأساسية، أما عملة عرض قوائم المجموعة فهي اليورو. لا يكفي كون المجموعة تعرض باليورو لتغيير عملة Courtney الوظيفية تلقائيًا.",
        "Materials carried at historical cost remain US$15,000; they are not retranslated at the closing rate. Courtney's functional currency is the US dollar based on its primary economic environment, while the group's presentation currency is the euro. Group presentation in euros does not automatically change Courtney's functional currency.",
      ),
    ],
    reference: "IAS 21.8–12, 21–23, 28, 38–39",
  },
  {
    id: "ifrs-book2-white-cliffs-instalments",
    standardCode: "IAS 21",
    title: text("فاتورة يورو وسدادها عبر سنتين", "White Cliffs: euro instalments across two years"),
    facts: text(
      "اشترت White Cliffs بضائع من Rinka في 30 سبتمبر مقابل 40,000 يورو، تُسدد على دفعتين متساويتين في 30 نوفمبر و31 يناير. تنتهي السنة في 31 ديسمبر. أسعار الصرف، يورو لكل دولار: 1.60 في 30 سبتمبر، 1.80 في 30 نوفمبر، 1.90 في 31 ديسمبر، 1.85 في 31 يناير.",
      "White Cliffs Co, whose year-end is 31 December, buys goods from Rinka SA on 30 September for €40,000, payable in equal instalments on 30 November and 31 January. Exchange rates, euros per US dollar: 1.60 on 30 September, 1.80 on 30 November, 1.90 on 31 December and 1.85 on 31 January.",
    ),
    question: text(
      "اذكر القيود المحاسبية في دفاتر White Cliffs، مع فصل فروق الصرف بين السنتين.",
      "State the accounting entries in the books of White Cliffs Co.",
    ),
    solution: [
      text(
        "30 سبتمبر: 40,000 ÷ 1.60 = 25,000 دولار؛ مدين مشتريات/مخزون ودائن دائنون تجاريون بالمبلغ نفسه. يبقى نصيب كل دفعة من الدائن الأصلي 12,500 دولار.",
        "30 September: €40,000 ÷ 1.60 = US$25,000; debit purchases/inventory and credit trade payables. The initial carrying amount attributable to each half is US$12,500.",
      ),
      text(
        "30 نوفمبر: تكلفة 20,000 يورو = 20,000 ÷ 1.80 ≈ 11,111 دولار. القيد: مدين دائنون 12,500؛ دائن نقدية 11,111 ومكسب صرف 1,389 في الربح أو الخسارة.",
        "30 November: €20,000 costs €20,000 ÷ 1.80 ≈ US$11,111. Debit payables 12,500; credit cash 11,111 and an exchange gain in profit or loss of 1,389.",
      ),
      text(
        "31 ديسمبر: يعاد قياس الدائن المتبقي 20,000 ÷ 1.90 ≈ 10,526 دولار؛ مدين دائنون 1,974 ودائن مكسب صرف 1,974. إجمالي مكاسب السنة الأولى 3,363 دولار. لا تُعاد ترجمة تكلفة البضائع التاريخية.",
        "31 December: retranslate the remaining payable to €20,000 ÷ 1.90 ≈ US$10,526; debit payables 1,974 and credit exchange gain 1,974. Total first-year gains are US$3,363. The historical cost of the goods is not retranslated.",
      ),
      text(
        "31 يناير: تكلفة السداد 20,000 ÷ 1.85 ≈ 10,811 دولار. القيد: مدين دائنون 10,526 وخسارة صرف 285؛ دائن نقدية 10,811. خسارة يناير تخص السنة الثانية فقط. كل المبالغ مقربة إلى أقرب دولار.",
        "31 January: settlement costs €20,000 ÷ 1.85 ≈ US$10,811. Debit payables 10,526 and exchange loss 285; credit cash 10,811. The January loss belongs in the second year only. All amounts are rounded to whole dollars.",
      ),
    ],
    reference: "IAS 21.21–23, 28–29",
  },
  {
    id: "ifrs-book2-ias21-quiz-monetary",
    standardCode: "IAS 21",
    title: text("اختبار مفهوم البند النقدي", "IAS 21 quick check: monetary item"),
    facts: text("سؤال مفاهيمي عن تعريف IAS 21 للبند النقدي.", "A conceptual question about IAS 21's definition of a monetary item."),
    question: text("عرّف البنود النقدية وفق IAS 21.", "Define 'monetary' items according to IAS 21."),
    solution: [text(
      "تشمل وحدات النقد المحتفظ بها، والأصول والالتزامات التي ستُستلم أو تُدفع بعدد ثابت أو قابل للتحديد من وحدات النقد. لذلك يختلف الدائن المحدد باليورو عن مخزون البضاعة الذي لا يُسدد نقدًا في ذاته.",
      "They are units of currency held and assets or liabilities to be received or paid in a fixed or determinable number of currency units. A euro-denominated payable is therefore distinct from the underlying goods inventory.",
    )],
    reference: "IAS 21.8, 16",
  },
  {
    id: "ifrs-book2-ias21-quiz-conversion-translation",
    standardCode: "IAS 21",
    title: text("اختبار الاستبدال والترجمة", "IAS 21 quick check: conversion and translation"),
    facts: text("سؤال مفاهيمي عن عمليتين مرتبطتين بالعملة الأجنبية.", "A conceptual question distinguishing two foreign-currency activities."),
    question: text("ما الفرق بين استبدال العملة وترجمتها لأغراض المحاسبة؟", "What is the difference between conversion and translation?"),
    solution: [text(
      "استبدال العملة هو مبادلة مبلغ فعلي من عملة بأخرى؛ أما الترجمة المحاسبية فتحول قيمة معاملة أو رصيد أو قوائم إلى العملة المطلوبة للقياس أو العرض دون مبادلة نقدية بالضرورة. هذه تسمية تعليمية للتمييز بين النشاطين؛ معالجة فروق الصرف نفسها تُحكم بقواعد IAS 21 للبند وتوقيت التسوية أو التقرير، لا بلفظ «استبدال» وحده.",
      "Conversion exchanges one currency amount for another. Accounting translation expresses a transaction, balance or financial statements in the required currency without necessarily exchanging cash. This is a teaching distinction: IAS 21 determines exchange-difference treatment by the item and the settlement or reporting date, not merely by a label such as 'conversion'.",
    )],
    reference: "IAS 21.8, 21–23, 28",
  },
  {
    id: "ifrs-book2-ias21-quiz-initial-rate",
    standardCode: "IAS 21",
    title: text("اختبار سعر الاعتراف الأولي", "IAS 21 quick check: initial rate"),
    facts: text("سؤال مفاهيمي عن تسجيل المعاملة بعملة أجنبية لدى منشأة منفردة.", "A conceptual question on recording a foreign-currency transaction by an individual entity."),
    question: text("كيف يُعترف أوليًا بمعاملة بعملة أجنبية في حسابات المنشأة؟", "How should foreign currency transactions be recognised initially in an individual entity's accounts?"),
    solution: [text(
      "سجّل المعاملة بعملتها الوظيفية مستخدمًا سعر الصرف الفوري بتاريخ المعاملة، أي تاريخ تأهلها للاعتراف. يجوز استخدام سعر متوسط تقريبي لفترة قصيرة عندما يقارب الأسعار الفعلية ولم تتقلب الأسعار تقلبًا جوهريًا؛ لا تستخدم متوسطًا مضللًا إذا تقلبت الأسعار بقوة.",
      "Record the transaction in the functional currency at the spot exchange rate on the transaction date, when it first qualifies for recognition. A period-average approximation is acceptable only when it approximates actual rates; an average is unsuitable when rates fluctuate significantly.",
    )],
    reference: "IAS 21.21–22",
  },
  {
    id: "ifrs-book2-ias21-quiz-functional-change",
    standardCode: "IAS 21",
    title: text("اختبار تغيير العملة الوظيفية", "IAS 21 quick check: changing functional currency"),
    facts: text("سؤال مفاهيمي عن توقيت تغيير العملة الوظيفية.", "A conceptual question about when functional currency changes."),
    question: text("متى يمكن تغيير العملة الوظيفية للمنشأة؟", "When can an entity's functional currency be changed?"),
    solution: [text(
      "عندما تتغير المعاملات أو الأحداث أو الظروف الأساسية التي تحدد العملة الوظيفية، وليس لمجرد رغبة الإدارة. تُترجم البنود إلى العملة الجديدة بسعر تاريخ التغيير ويطبق الأثر مستقبلًا.",
      "Only when the underlying transactions, events and conditions relevant to the entity change, not merely by management preference. Translate all items at the rate on the change date and apply the change prospectively.",
    )],
    reference: "IAS 21.35–37",
  },
  {
    id: "ifrs-book2-ias21-quiz-presentation-change",
    standardCode: "IAS 21",
    title: text("اختبار تغيير عملة العرض", "IAS 21 quick check: changing presentation currency"),
    facts: text("سؤال مفاهيمي يميّز عملة العرض عن العملة الوظيفية.", "A conceptual question distinguishing presentation from functional currency."),
    question: text("متى يمكن للمنشأة تغيير عملة عرض قوائمها؟", "When can an entity's presentation currency be changed?"),
    solution: [text(
      "يجوز اختيار عملة العرض أو تغييرها؛ IAS 21 لا يربط هذا الاختيار بتغير المعاملات الأساسية مثلما يشترط لتغير العملة الوظيفية. عند اختلاف عملة العرض عن الوظيفية تُترجم القوائم وفق قواعد IAS 21، وتُفصح المنشأة عن العملة الوظيفية وسبب عرض القوائم بعملة مختلفة، مع مراعاة الإفصاحات الأخرى ذات الصلة.",
      "An entity may choose or change its presentation currency; IAS 21 does not require the same change in underlying transactions that governs a functional-currency change. If presentation currency differs from functional currency, translate the statements under IAS 21 and disclose the functional currency and reason for using another presentation currency, with other relevant disclosures.",
    )],
    reference: "IAS 21.38–39, 53–57",
  },
  {
    id: "ifrs-book2-pilum-eps",
    standardCode: "IAS 33",
    title: text("ربحية السهم وإصدار الحقوق والتحويل", "Pilum: EPS, rights and conversion"),
    facts: text(
      "ربح Pilum بعد الضريبة لعام 20X4 هو 1,403,000 دولار. رأس المال في أول السنة: 4,600,000 سهم ممتاز بنسبة 6% قيمة كل منها دولار واحد، و4,120,000 سهم عادي. عالج كل فرض مستقلًا: (أ) لا تغير في الأسهم؛ (ب) إصدار حقوق في 1 أكتوبر بنسبة سهم جديد لكل خمسة أسهم، بسعر 1.20 دولار، وكان سعر السهم قبل الحق 1.78 دولار؛ (ج) لا إصدار أسهم، لكن يوجد قرض قابل للتحويل بقيمة 1,500,000 دولار وفائدة 10% طوال السنة؛ الحد الأقصى للتحويل 90 سهمًا لكل 100 دولار من أصل القرض، ومعدل الضريبة 30%.",
      "Pilum Co's 20X4 profit after tax is $1,403,000. At the start of the year it had 4,600,000 6% $1 preference shares and 4,120,000 $1 ordinary shares. Treat each alternative separately: (a) no change in issued shares; (b) a 1-for-5 rights issue on 1 October at $1.20 when the cum-rights market price was $1.78; (c) no new share issue, but $1,500,000 of 10% convertible loan stock was outstanding throughout the year, convertible at a maximum of 90 $1 ordinary shares per $100 nominal, with a 30% income tax rate.",
    ),
    question: text(
      "احسب ربحية السهم الأساسية والمخفضة للسنة المنتهية في 31 ديسمبر 20X4 في كل من الفروض الثلاثة المستقلة.",
      "Calculate basic and diluted earnings per share for the year ended 31 December 20X4 for each of the three separate circumstances.",
    ),
    solution: [
      text(
        "الربح المنسوب للأسهم العادية = 1,403,000 − (4,600,000 × 6%) = 1,127,000 دولار. تحويل الربح إلى احتياطي وتوزيع أرباح الأسهم العادية لا يُخصمان مرة أخرى من بسط ربحية السهم.",
        "Profit attributable to ordinary shareholders = 1,403,000 − (4,600,000 × 6%) = $1,127,000. A transfer to reserves and ordinary dividends are not deducted again from the EPS numerator.",
      ),
      text(
        "(أ) المتوسط المرجح = 4,120,000؛ الأساسية = 1,127,000 ÷ 4,120,000 = 27.35 سنتًا. لا توجد أسهم محتملة مخفِّضة في هذا الفرض، فتساويها المخفضة.",
        "(a) Weighted-average shares = 4,120,000; basic EPS = 1,127,000 ÷ 4,120,000 = 27.35 cents. With no dilutive potential shares in this alternative, diluted EPS is the same.",
      ),
      text(
        "(ب) سعر ما بعد الحق النظري = (5 × 1.78 + 1 × 1.20) ÷ 6 = 1.683333 دولار؛ معامل عنصر المنحة = 1.78 ÷ 1.683333. المتوسط المرجح = 4,120,000 × المعامل × 9/12 + 4,944,000 × 3/12 ≈ 4,503,446 سهمًا. الأساسية والمخفضة ≈ 1,127,000 ÷ 4,503,446 = 25.03 سنتًا؛ لا يُقرب السعر النظري قبل إكمال الحساب.",
        "(b) Theoretical ex-rights price = (5 × 1.78 + 1 × 1.20) ÷ 6 = $1.683333; bonus factor = 1.78 ÷ 1.683333. Weighted-average shares = 4,120,000 × factor × 9/12 + 4,944,000 × 3/12 ≈ 4,503,446. Basic and diluted EPS ≈ 1,127,000 ÷ 4,503,446 = 25.03 cents; do not round the theoretical price prematurely.",
      ),
      text(
        "(ج) الأساسية = 27.35 سنتًا. بافتراض التحويل من بداية السنة: تضاف الفائدة بعد الضريبة 1,500,000 × 10% × (1 − 30%) = 105,000 إلى الربح، وتضاف 1,500,000 ÷ 100 × 90 = 1,350,000 سهم. المخفضة = 1,232,000 ÷ 5,470,000 = 22.52 سنتًا؛ وهي أقل من الأساسية، لذا يُدرج التحويل.",
        "(c) Basic EPS = 27.35 cents. Assuming conversion from the start of the year: add back after-tax interest of 1,500,000 × 10% × (1 − 30%) = $105,000 and add 1,500,000 ÷ 100 × 90 = 1,350,000 shares. Diluted EPS = 1,232,000 ÷ 5,470,000 = 22.52 cents; conversion is dilutive and is included.",
      ),
    ],
    reference: "IAS 33.12–15, 19–27, 31–40, A2",
  },
  {
    id: "ifrs-book2-lease-lis",
    standardCode: "IFRS 16",
    title: text("إيجار أصل بدفعات مقدمة", "Lease of an asset with advance payments"),
    facts: text(
      "في 1 يناير 20X3 دخلت شركة Lis في عقد إيجار أصل لمدة ست سنوات، ثم سيُرد للمؤجر ويُستبعد. الدفعة السنوية 18,420 وتُسدَّد مقدمًا. يبلغ القياس الأولي لالتزام الإيجار 65,586، باستخدام معدل الفائدة الضمني في العقد البالغ 12.5%. تتوقع الشركة بيع السلع المنتَجة بالأصل خلال السنوات الخمس الأولى، لكن مدة العقد ست سنوات بطلب المؤجر ولاحتمال تغير التوقع. للشركة حق تحديد استخدام الأصل خلال مدة العقد، وتحصل على معظم منافعه الاقتصادية.",
      "On 1 January 20X3 Lis Co entered into a lease agreement to rent an asset for a six-year period, at which point it will be returned to the lessor and scrapped, with annual payments of $18,420 made in advance. The initial measurement of the lease liability amounts to $65,586, discounted at the implicit interest rate shown in the lease agreement of 12.5%. Lis Co expects to sell goods produced by the asset during the first five years of the lease term, but has leased the asset for six years as this is the requirement of the lessor, and in case this expectation changes. Lis Co has the right to determine the use of the asset during the lease term and will obtain substantially all the economic benefit from its use.",
    ),
    question: text(
      "اشرح معالجة هذا الإيجار عن السنة المنتهية في 31 ديسمبر 20X3، مع إعداد المقتطفات ذات الصلة من قائمتي الربح أو الخسارة والمركز المالي. لا يلزم إعداد الإيضاحات.",
      "Explain how the above lease would be accounted for for the year ending 31 December 20X3 including producing relevant extracts from the statement of profit or loss and statement of financial position. You are not required to prepare the notes to the financial statements.",
    ),
    solution: [
      text(
        "عند البدء: أصل حق الاستخدام = 65,586 + الدفعة المسددة عند البدء 18,420 = 84,006؛ والتزام الإيجار = 65,586 للدفعات غير المسددة فقط.",
        "At commencement: right-of-use asset = 65,586 + the 18,420 commencement payment = 84,006; lease liability = 65,586 for unpaid payments only.",
      ),
      text(
        "مصروف إهلاك 20X3 = 84,006 ÷ 5 = 16,801 تقريبًا. لا تنتقل الملكية، والعمر النافع للمستأجر خمس سنوات، وهو أقصر من مدة الإيجار. قيمة حق الاستخدام في 31 ديسمبر = 67,205 تقريبًا.",
        "20X3 depreciation expense = 84,006 ÷ 5 ≈ 16,801. Ownership does not transfer and the five-year useful life to the lessee is shorter than the lease term. Right-of-use carrying amount at 31 December ≈ 67,205.",
      ),
      text(
        "مصروف التمويل = 65,586 × 12.5% = 8,198 تقريبًا؛ والتزام الإيجار في 31 ديسمبر قبل دفعة يناير التالية = 73,784 تقريبًا.",
        "Finance cost = 65,586 × 12.5% ≈ 8,198; the 31 December lease liability before the following January payment ≈ 73,784.",
      ),
      text(
        "مقتطف المركز المالي: أصل حق الاستخدام 67,205؛ التزام إيجار متداول 18,420 وغير متداول 55,364 تقريبًا. في قائمة الربح أو الخسارة يُعرض الإهلاك 16,801 وتكلفة التمويل 8,198 كلٌّ على حدة. فروق الوحدة الأخيرة ناتجة عن التقريب.",
        "Statement of financial position extract: right-of-use asset 67,205; current lease liability 18,420 and non-current lease liability about 55,364. Profit or loss shows depreciation of 16,801 separately from finance cost of 8,198. Unit-level differences arise from rounding.",
      ),
    ],
    reference: "IFRS 16.9, 22–29, 36–38, 47–49",
  },
  {
    id: "ifrs-book2-retail-unit-eastway",
    standardCode: "IFRS 16",
    title: text(
      "هل يحتوي عقد منفذ البيع على إيجار؟",
      "Does the retail-unit contract contain a lease?",
    ),
    facts: text(
      "تمتلك شركة Propfield مركز Eastway التجاري المكوّن من 30 وحدة تؤجرها لتجار التجزئة. حصلت شركة Sellerwell على حق استخدام الوحدة 21 لمدة أربع سنوات. يحق لـPropfield مطالبتها بالانتقال إلى وحدة مماثلة مع سداد تكاليف الانتقال؛ ولا تستفيد اقتصاديًا من ذلك إلا إذا دخل مستأجر كبير يغطي تكاليف نقلها ونقل مستأجرين آخرين، وهو احتمال عُدّ غير مرجح عند بدء العقد. تستخدم Sellerwell الوحدة لعلامتها التجارية خلال ساعات عمل المركز، وتحدد بنفسها أصناف البضائع وأسعارها وكميات المخزون، وتسيطر على الدخول إلى الوحدة. تدفع مبلغًا ثابتًا ونسبة متغيرة من المبيعات. تقدم Propfield خدمات تسويق وتنظيف وأمن.",
      "Propfield Co, a property company, owns Eastway, a large shopping centre with a 30 units which it rents out to retailers. Sellerwell Co enters into a contract with Propfield Co giving Sellerwell the right to use Unit 21 of Eastway for a four-year period. The contract gives Propfield Co the right to require Sellerwell Co to move to another retail unit. However, if it does so, Propfield Co must pay for Sellerwell Co's relocation costs and provide Sellerwell Co with a retail unit of similar quality and specifications to Unit 21. The only reason Propfield Co would benefit economically from relocating Sellerwell Co is if a major new tenant were to decide to occupy a large amount of retail space at a rate high enough to cover the costs of relocating Sellerwell Co and other tenants in the retail space. While this scenario is possible, at inception of the contract, it is thought to be unlikely to occur. Sellerwell Co must, under the contract, use Unit 21 to operate its well-known retail brand to sell its goods during the hours that the shopping centre is open. Sellerwell Co makes all the decisions about how the retail unit is used. For example, Sellerwell Co decides on the mix of goods sold from the unit, the pricing of the goods sold and the quantities of inventory held. Sellerwell Co also controls physical access to the unit throughout the four-year period of use. The contract requires Sellerwell Co to make fixed payments to Propfield Co, as well as variable payments that are a percentage of sales from Unit 21. As part of the contract, Propfield Co provides marketing, cleaning and security services.",
    ),
    question: text(
      "حدد ما إذا كان العقد بين Propfield وSellerwell يحتوي على إيجار، مع توضيح سبب الحكم.",
      "Determine whether the contract between Propfield Co and Sellerwell Co contains a lease.",
    ),
    solution: [
      text(
        "الوحدة 21 أصل محدد صراحة. حق الاستبدال ليس جوهريًا في وقائع السؤال: المنفعة الاقتصادية من ممارسته مشروطة بحدث غير مرجح عند بدء العقد، مع تحمل المؤجر تكاليف النقل.",
        "Unit 21 is explicitly identified. The substitution right is not substantive on these facts: the economic benefit from exercising it depends on an event considered unlikely at inception and the supplier bears relocation costs.",
      ),
      text(
        "تحصل Sellerwell على معظم المنافع من استخدام الوحدة طوال الأربع سنوات. دفع نسبة من المبيعات مقابل الإيجار لا يسلبها هذه المنافع؛ فهو جزء من المقابل للمؤجر.",
        "Sellerwell obtains substantially all economic benefits from using the unit over the four years. Paying a sales-based amount does not remove those benefits; it is consideration to the lessor.",
      ),
      text(
        "توجه Sellerwell الاستخدام لأنها تقرر الأصناف والأسعار والمخزون ضمن نطاق العقد. تقييد ساعات فتح المركز وقيام Propfield بالتسويق والتنظيف والأمن لا يمنح Propfield قرارات الاستخدام ذات الصلة.",
        "Sellerwell directs use by deciding product mix, prices and inventory within the contract's scope. Shopping-centre hours and Propfield's marketing, cleaning and security services do not give Propfield the relevant use decisions.",
      ),
      text(
        "النتيجة: يحتوي العقد على إيجار للوحدة 21 مدته أربع سنوات. تُقيّم خدمات التسويق والتنظيف والأمن بوصفها مكونات غير إيجارية، مع تطبيق قواعد الفصل/التخصيص المناسبة.",
        "Conclusion: the contract contains a four-year lease of Unit 21. Marketing, cleaning and security are assessed as non-lease components under the applicable separation and allocation requirements.",
      ),
    ],
    reference: "IFRS 16.9, 12–13, B9–B19, B21–B30",
  },
  {
    id: "ifrs-book2-dt-health-benefits-and-tax-losses",
    standardCode: "IAS 12",
    title: text(
      "DT Group: اختبار استرداد أصل الضريبة المؤجلة",
      "DT Group: testing recovery of deferred-tax assets",
    ),
    facts: text(
      "جميع المبالغ بالمليون دولار. لدى DT خسائر ضريبية قدرها 300 نشأت في 20X0 ويُسمح بترحيلها ثلاث سنوات. يذكر السؤال أرباحًا خاضعة للضريبة قدرها 110 في 20X1 ومتوقعة قدرها 100 في 20X2 و130 في 20X3؛ لكن توقع 20X3 يعتمد على شراء شركة مربحة لم يثبت بعد. في 30 نوفمبر 20X1 بلغ التزام الرعاية الصحية 100 وأساسه الضريبي صفر، ولا تُخصم هذه المنافع ضريبيًا إلا عند دفعها. لا يحدد السؤال موعد الدفع. لا يُتوقع انعكاس الفروق المؤقتة الخاضعة للضريبة القائمة قبل نهاية 20X3، ومعدل الضريبة المحلي 30%. تتناول هذه الحالة قابلية استرداد الأصل فقط، لا إجمالي ضريبة المجموعة.",
      "All figures are in $m. DT has 300 of tax losses from 20X0, available for carryforward for three years. The question states taxable profit of 110 for 20X1 and forecasts of 100 for 20X2 and 130 for 20X3, but the 20X3 forecast depends on an unconfirmed acquisition of a profitable company. At 30 November 20X1 the healthcare-benefit liability is 100 with a nil tax base; its tax deductions arise only on payment. No payment date is given. Existing taxable temporary differences are not expected to reverse before the end of 20X3. The domestic tax rate is 30%. This case concerns recoverability of the asset, not the group's total tax charge.",
    ),
    question: text(
      "حلّل أصل الضريبة المؤجلة المحتمل من الخسائر المرحلة والتزام الرعاية الصحية في 30 نوفمبر 20X1. ما المبالغ الحسابية الأولية، وما الأدلة اللازمة للاعتراف، وهل تكفي أرباح 20X2 وحدها لإثبات الأصلين كاملين؟",
      "Analyse potential deferred-tax assets for the carried-forward losses and healthcare liability at 30 November 20X1. What are the initial numerical amounts, what evidence is needed for recognition, and can the 20X2 profits alone support both assets in full?",
    ),
    solution: [
      text(
        "إذا تحقق الربح الخاضع للضريبة 110 في 20X1 واستُخدم ضده جزء من خسائر 20X0 وفق القانون، فالمتبقي للترحيل 300 − 110 = 190. هذا الاستخدام يخفض الضريبة الجارية للسنة ولا يمثل أصلًا ضريبيًا مؤجلًا إضافيًا في تاريخ الإقفال. يجب تأكيد تحقق الربح وسريان حق المقاصة؛ فلا يُعامل التوقع وحده على أنه استخدام منجز.",
        "If the 110 taxable profit was realised in 20X1 and 20X0 losses could legally be offset against it, 300 − 110 = 190 remains available for carryforward. That utilisation reduces current-year tax, rather than creating another closing deferred-tax asset. Confirm the realised profit and legal offset; a forecast alone is not completed utilisation.",
      ),
      text(
        "إذا كان ربح 20X2 البالغ 100 مدعومًا بأدلة كافية ومتاحًا قانونًا للخسائر قبل انتهائها، فإن منفعة خسائر مقدارها 100 تساوي أصلًا محتملًا قدره 30 عند معدل 30%. لا يُضاف تلقائيًا أصل عن 130 المتوقعة في 20X3؛ فالشراء الذي يعتمد عليه التوقع غير مؤكد، والخسائر السابقة قرينة تستلزم دليلًا مقنعًا على الربح المستقبلي أو مصدرًا ملائمًا آخر وفق IAS 12.",
        "If the 100 forecast taxable profit for 20X2 is adequately supported and legally available to the losses before expiry, the benefit of 100 of losses is a potential 30 asset at 30%. No asset is automatically added for the 130 forecast for 20X3: it relies on an unconfirmed acquisition, and recent losses call for convincing evidence of future profit or another suitable source under IAS 12.",
      ),
      text(
        "التزام الرعاية الصحية 100 وأساسه الضريبي صفر يعني فرقًا مؤقتًا قابلًا للخصم قدره 100، ومنفعة ضريبية حسابية قصوى 30. لكن الاعتراف يتوقف على موعد دفع المنافع ووجود أرباح خاضعة للضريبة مناسبة حين تصبح قابلة للخصم، مع مراعاة الكيان والسلطة الضريبية وحدود الترحيل. لا يثبت السؤال موعد الانعكاس أو مصدر أرباح مستقلًا لهذا الخصم.",
        "The healthcare liability of 100 and its nil tax base give a deductible temporary difference of 100 and a gross potential tax benefit of 30. Recognition depends on when benefits are paid and on suitable taxable profit when the deduction becomes available, considering the taxable entity, tax authority and carryforward limits. The question supplies neither the reversal date nor a separate profit source for this deduction.",
      ),
      text(
        "لا يجوز استعمال ربح 20X2 البالغ 100 مرتين لتبرير أصل 30 للخسائر وأصل 30 للرعاية الصحية معًا. تُقيَّم الخصومات والخسائر التي تُستعمل ضد الربح نفسه معًا، وتُراجع أولويات استخدامها ونوافذ انتهاء الصلاحية. قد يختلف المبلغ المعترف به إذا دُفعت المنافع في سنة أخرى أو ظهرت أرباح أو فروق خاضعة للضريبة مؤهلة؛ لذلك لا يُثبت إجمالي 60 من هذه الوقائع وحدها، ولا يُستنتج منها مصروف ضريبة مؤجلة نهائي.",
        "The same 100 of 20X2 taxable profit cannot be counted twice to justify both a 30 loss asset and a 30 healthcare asset. Assess deductions and losses drawing on the same profit together, including utilisation priority and expiry. Recognition could differ if benefits are paid in another year or other qualifying profit or taxable differences arise. The facts alone therefore do not establish a combined 60 asset or a final deferred-tax expense.",
      ),
    ],
    reference: "IAS 12.24, 27–29, 34–37, 82",
  },
  {
    id: "ifrs-book2-bco-revised-useful-life",
    standardCode: "IAS 16",
    title: text("B Co: تعديل العمر الإنتاجي المتبقي", "B Co: revision of remaining useful life"),
    facts: text(
      "اشترت B Co أصلًا غير متداول في 1 يناير 20X2 بمبلغ 80,000 دولار، بلا قيمة متبقية، وكان عمره الإنتاجي المقدر عشر سنوات. في 1 يناير 20X5 عُدّل العمر المتبقي إلى أربع سنوات.",
      "B Co acquired a non-current asset on 1 January 20X2 for $80,000, with no residual value and an original ten-year useful life. On 1 January 20X5, the remaining useful life was revised to four years.",
    ),
    question: text("ما مصروف إهلاك سنة 20X5؟", "What is the depreciation charge for 20X5?"),
    solution: [
      text("الإهلاك السنوي الأصلي = 80,000 ÷ 10 = 8,000 دولار. إهلاك السنوات 20X2–20X4 = 24,000، فتكون القيمة الدفترية في 1 يناير 20X5 = 56,000.", "Original annual depreciation = $80,000 ÷ 10 = $8,000. Depreciation for 20X2–20X4 totals $24,000, leaving a $56,000 carrying amount on 1 January 20X5."),
      text("يُطبّق تعديل التقدير بأثر مستقبلي: مصروف 20X5 = 56,000 ÷ 4 = 14,000 دولار، مع افتراض عدم تغير القيمة المتبقية وعدم وجود انخفاض قيمة أو تعديل آخر. لا يُعاد فتح مصروف السنوات السابقة.", "Apply the estimate change prospectively: 20X5 depreciation is $56,000 ÷ 4 = $14,000, assuming no change in residual value, impairment or other adjustment. Do not restate earlier depreciation."),
      text("قيد 20X5: من حـ/ مصروف الإهلاك 14,000 إلى حـ/ مجمع الإهلاك 14,000.", "20X5 entry: debit depreciation expense $14,000; credit accumulated depreciation $14,000."),
    ],
    reference: "IAS 16.50–51, 55–57; IAS 8.36–38",
  },
  {
    id: "ifrs-book2-lorry-four-depreciation-methods",
    standardCode: "IAS 16",
    title: text("شاحنة: أربع طرق لحساب الإهلاك", "Lorry: four depreciation calculations"),
    facts: text(
      "تكلفة شاحنة 17,000 دولار، وقيمتها المتبقية المتوقعة بعد خمس سنوات 2,000 دولار. الاستخدام المتوقع بالأيام للسنوات الخمس: 200، 100، 100، 150، 40. طُلبت طريقة القسط الثابت، والرصيد المتناقص بمعدل 35%، وطريقة الاستخدام، ومجموع أرقام السنوات.",
      "A lorry costs $17,000, with expected residual value of $2,000 after five years. Expected use in days is 200, 100, 100, 150 and 40 for years 1–5. Calculate straight-line, 35% diminishing-balance, use-based and sum-of-years-digits depreciation.",
    ),
    question: text(
      "احسب إهلاك كل سنة بالطرق الأربع، وبيّن كيف تحافظ طريقة الاستخدام على إجمالي المبلغ القابل للإهلاك.",
      "Calculate each year's depreciation under the four methods and show how the use-based method allocates the full depreciable amount.",
    ),
    solution: [
      text("المبلغ القابل للإهلاك = 17,000 − 2,000 = 15,000 دولار. القسط الثابت: 3,000 دولار في كل سنة من السنوات الخمس.", "Depreciable amount = $17,000 − $2,000 = $15,000. Straight-line: $3,000 in each of the five years."),
      text("الرصيد المتناقص 35% من القيمة الدفترية الافتتاحية، مقربًا لأقرب دولار: 5,950؛ 3,868؛ 2,514؛ 1,634؛ ثم 1,034 في السنة الخامسة للوصول إلى القيمة المتبقية 2,000، لا للنزول دونها. إجمالي الإهلاك 15,000.", "At 35% of opening carrying amount, rounded to whole dollars: $5,950; $3,868; $2,514; $1,634; then $1,034 in year 5 to reach the $2,000 residual value, not below it. Total depreciation is $15,000."),
      text("إجمالي الاستخدام = 590 يومًا. خصص 15,000 × أيام كل سنة ÷ 590 مع تقريب الناتج السنوي فقط: 5,084.75؛ 2,542.37؛ 2,542.37؛ 3,813.56؛ 1,016.95 دولار. المجموع 15,000؛ تقريب معدل اليوم إلى 25.42 قبل الضرب يخلق فرق تقريب غير ضروري.", "Total expected use is 590 days. Allocate $15,000 × each year's days ÷ 590, rounding each annual result only: $5,084.75; $2,542.37; $2,542.37; $3,813.56; $1,016.95. The sum is $15,000; prematurely rounding the daily rate to $25.42 creates an avoidable rounding difference."),
      text("مجموع أرقام السنوات = 5 + 4 + 3 + 2 + 1 = 15. الإهلاك للسنوات 1–5 = 5,000؛ 4,000؛ 3,000؛ 2,000؛ 1,000 دولار. هذه مقارنات حسابية مطلوبة بالسؤال؛ تُختار السياسة الفعلية وفق نمط استهلاك المنافع الاقتصادية، لا وفق أكبر أو أصغر ربح.", "Sum of years' digits = 5 + 4 + 3 + 2 + 1 = 15. Year 1–5 depreciation is $5,000; $4,000; $3,000; $2,000; $1,000. These are the requested numerical comparisons; the actual method must reflect the pattern of benefit consumption, not a desired profit figure."),
    ],
    reference: "IAS 16.50–51, 60–62",
  },

  {
    id: "ifrs-book2-ias16-carrying-amount-versus-market",
    standardCode: "IAS 16",
    title: text("القيمة الدفترية والقيمة السوقية لأصل مستخدم", "Carrying amount versus market value of a used asset"),
    facts: text(
      "السؤال المفاهيمي عن أصل مستخدم جزئيًا معروض في قائمة المركز المالي وفق IAS 16، ولا يقدم أرقامًا أو سياسة قياس محددة. قارن بين قيمته الدفترية وقيمته الممكنة في سوق بيع ثانوي.",
      "A conceptual question concerns a partly used asset in a statement of financial position prepared under IAS 16. No figures or measurement policy are supplied. Compare its carrying amount with its possible secondary-market value.",
    ),
    question: text(
      "ماذا تمثل القيمة الدفترية؟ وهل يجب ألا تتجاوز القيمة السوقية الصافية للأصل المستخدم في تاريخ التقرير؟ فسّر.",
      "What does the carrying amount represent? Must it never exceed the used asset's net market value at the reporting date? Explain.",
    ),
    solution: [
      text(
        "القيمة الدفترية هي المبلغ المعترف به بعد طرح مجمع الإهلاك وخسائر الانخفاض المتراكمة من تكلفة الأصل، أو من مبلغه بعد إعادة التقييم إذا كانت تلك سياسة الفئة. لذلك لا تختزل دائمًا إلى «التكلفة ناقص الإهلاك».",
        "Carrying amount is the recognised amount after accumulated depreciation and accumulated impairment losses are deducted from cost, or from a revalued amount when that class uses the revaluation model. It is not invariably just original cost less depreciation.",
      ),
      text(
        "نعم، قد تتجاوز القيمة الدفترية سعر البيع الصافي أو القيمة العادلة ناقص تكاليف الاستبعاد إذا كانت قيمة الاستخدام أعلى. وبموجب IAS 36 يكون المبلغ القابل للاسترداد هو الأعلى بين القيمة العادلة ناقص تكاليف الاستبعاد وقيمة الاستخدام؛ وعند وجود مؤشر انخفاض، يُختبر الأصل أو وحدة توليد النقد المناسبة ولا يُترك مبلغ دفتري يتجاوز المبلغ القابل للاسترداد.",
        "Yes. Carrying amount may exceed the net sale value or fair value less costs of disposal if value in use is higher. IAS 36 defines recoverable amount as the higher of fair value less costs of disposal and value in use; when an impairment indicator exists, test the asset or appropriate cash-generating unit rather than leaving carrying amount above recoverable amount.",
      ),
      text(
        "الإهلاك توزيع منهجي للمبلغ القابل للإهلاك خلال العمر الإنتاجي، وليس إعادة قياس تلقائية إلى سعر السوق ولا صندوقًا مخصصًا لشراء بديل. لا تفترض من السؤال وحده أن القيمة الدفترية مساوية للمبلغ القابل للاسترداد أو أن أصلًا محددًا منخفض القيمة.",
        "Depreciation systematically allocates depreciable amount over useful life; it is neither automatic remeasurement to market price nor a cash fund for a replacement. The facts alone do not establish that carrying amount equals recoverable amount or that a particular asset is impaired.",
      ),
    ],
    reference: "IAS 16.6, 29–31, 50–55; IAS 36.9, 18, 22",
  },
  {
    id: "ifrs-book2-ias16-depreciation-purpose-and-pattern",
    standardCode: "IAS 16",
    title: text("غرض الإهلاك واختيار نمطه", "Purpose of depreciation and choice of pattern"),
    facts: text(
      "سؤالان تفسيران عن سبب إثبات الإهلاك ومتى تكون طريقة الرصيد المتناقص أنسب من القسط الثابت. لا تُعطى مبالغ أو أصل معين.",
      "Two conceptual prompts ask why depreciation is provided and when diminishing balance is more appropriate than straight-line. No amounts or specific asset are given.",
    ),
    question: text(
      "ما أغراض إثبات الإهلاك؟ وفي أي ظروف تكون طريقة الرصيد المتناقص أنسب من القسط الثابت، ولماذا؟",
      "What are the purposes of providing for depreciation? In what circumstances is diminishing balance more appropriate than straight-line, and why?",
    ),
    solution: [
      text(
        "الغرض هو توزيع المبلغ القابل للإهلاك بطريقة منهجية على العمر الإنتاجي، بما يعكس استهلاك المنشأة للمنافع الاقتصادية للأصل. يبدأ الإهلاك عند جاهزية الأصل للاستخدام ولا يتوقف لمجرد خمول الأصل، وإن كان مصروف طريقة وحدات الإنتاج قد يساوي صفرًا عند عدم الإنتاج. الإهلاك ليس مخصصًا نقديًا لاستبدال الأصل ولا قياسًا لهبوط سعره السوقي.",
        "Depreciation systematically allocates the depreciable amount over useful life in line with consumption of the asset's benefits. It begins when available for use and does not stop merely because an asset is idle, although units-of-production depreciation may be zero without output. It is not a cash reserve for replacement or a market-price decline measurement.",
      ),
      text(
        "الرصيد المتناقص يلائم نمطًا متوقعًا لاستهلاك منافع أكبر في السنوات الأولى وأقل لاحقًا؛ أما القسط الثابت فيلائم نمطًا أقرب للانتظام. لا تكفي الرغبة في تسوية تكاليف الإصلاح أو تعديل الربح لتبرير الطريقة. راجع النمط سنويًا وعدل الطريقة بأثر مستقبلي إذا تغير التوقع جوهريًا.",
        "Diminishing balance fits an expected benefit-consumption pattern weighted toward early years; straight-line fits a more even pattern. A desire to smooth repair costs or manage profit is insufficient. Review the pattern annually and change method prospectively if the expectation changes significantly.",
      ),
    ],
    reference: "IAS 16.50–55, 60–62; IAS 8.36–38",
  },
  {
    id: "ifrs-book2-riveting-machines-disposals",
    standardCode: "IAS 16",
    title: text("آلتان لصناعة المسامير: الإهلاك والاستبعاد", "Two riveting machines: depreciation and disposal"),
    facts: text(
      "اشترت منشأة آلتين لصناعة المسامير في 1 يناير 20X5 بتكلفة 15,000 دولار لكل آلة، بعمر خمس سنوات وقيمة متبقية صفر، وبطريقة القسط الثابت. باعت الأولى آجلًا في 31 مارس 20X7 مقابل 8,000 دولار، وباعت الثانية نقدًا في 1 ديسمبر 20X7 مقابل 2,500 دولار. لا تذكر الوقائع تصنيفًا كأصول محتفظ بها للبيع قبل تاريخي البيع.",
      "An entity bought two riveting machines on 1 January 20X5 for $15,000 each, with five-year lives, nil residual values and straight-line depreciation. It sold the first on credit on 31 March 20X7 for $8,000 and the second for cash on 1 December 20X7 for $2,500. The facts do not state any held-for-sale classification before the sale dates.",
    ),
    question: text(
      "أعد حساب حركة تكلفة الآلات ومجمع إهلاكها والاستبعاد خلال سنة 20X7، مع تحديد نتيجة بيع كل آلة.",
      "Prepare the machinery cost, accumulated depreciation and disposal movements for 20X7, identifying the result on each machine.",
    ),
    solution: [
      text(
        "تكلفة كل آلة 15,000، وإهلاكها السنوي 3,000 والشهري 250. في 1 يناير 20X7 تكلفة الآلتين 30,000 ومجمع إهلاكهما 12,000، أي 6,000 لكل آلة.",
        "Each machine costs $15,000, with $3,000 annual and $250 monthly depreciation. On 1 January 20X7 their aggregate cost is $30,000 and accumulated depreciation $12,000, or $6,000 per machine.",
      ),
      text(
        "الآلة الأولى: إهلاك يناير–مارس 750، ومجمع الإهلاك عند البيع 6,750، والقيمة الدفترية 8,250. مقابل البيع الآجل 8,000؛ خسارة الاستبعاد 250. أزل تكلفة 15,000 ومجمع 6,750 وأثبت ذمة مدينة 8,000 والخسارة 250.",
        "First machine: January–March depreciation $750, accumulated depreciation at sale $6,750, carrying amount $8,250. Credit sale proceeds $8,000 give a $250 disposal loss. Remove $15,000 cost and $6,750 accumulated depreciation, and recognise an $8,000 receivable and $250 loss.",
      ),
      text(
        "الآلة الثانية: إهلاك يناير–نوفمبر 2,750، ومجمع الإهلاك عند البيع 8,750، والقيمة الدفترية 6,250. مقابل البيع النقدي 2,500؛ خسارة الاستبعاد 3,750. أزل تكلفة 15,000 ومجمع 8,750 وأثبت النقد والخسارة.",
        "Second machine: January–November depreciation $2,750, accumulated depreciation at sale $8,750, carrying amount $6,250. Cash proceeds $2,500 give a $3,750 disposal loss. Remove $15,000 cost and $8,750 accumulated depreciation, and recognise cash and the loss.",
      ),
      text(
        "مصروف إهلاك 20X7 للآلتين = 750 + 2,750 = 3,500، وإجمالي خسائر الاستبعاد = 250 + 3,750 = 4,000. تصبح أرصدة تكلفة الآلات ومجمع إهلاكهما صفرًا بعد بيع الآلتين. لا تُصنف الخسارة إيرادًا.",
        "20X7 depreciation for both machines totals $750 + $2,750 = $3,500; aggregate disposal losses are $250 + $3,750 = $4,000. Both machinery cost and accumulated depreciation close to nil after the two sales. The loss is not revenue.",
      ),
    ],
    reference: "IAS 16.55, 67–68, 71–72",
  },

  {
    id: "ifrs-book2-rich-undetermined-land-use",
    standardCode: "IAS 40",
    title: text("Rich Co: أرض لم يتحدد استخدامها بعد", "Rich Co: land with undetermined future use"),
    facts: text(
      "تملك Rich Co قطعة أرض. لم يقرر المديرون بعد هل سيبنون عليها مصنعًا للشركة أم سيحتفظون بها إلى حين ارتفاع قيمتها ثم يبيعونها.",
      "Rich Co owns land. Its directors have not decided whether to build a factory for the business or retain the land and sell it after its value rises.",
    ),
    question: text(
      "هل تُصنف الأرض عقارًا استثماريًا بموجب IAS 40؟",
      "Would the land be classified as investment property under IAS 40?",
    ),
    solution: [
      text(
        "نعم في الوقائع المعطاة، إذا لم تتحدد بعد نية إشغال الأرض بواسطة المنشأة أو بيعها في النشاط العادي قصير الأجل، تُعامل الأرض ذات الاستخدام المستقبلي غير المحدد على أنها محتفظ بها لزيادة القيمة الرأسمالية وفق IAS 40.8(b). مجرد احتمال مصنع مستقبلي لا يجعلها أصلًا مشغولًا من المالك الآن.",
        "Yes on the stated facts: where neither owner-occupation nor short-term sale in the ordinary course has been determined, land with currently undetermined future use is treated as held for capital appreciation under IAS 40.8(b). A possible future factory does not yet make it owner-occupied.",
      ),
      text(
        "إذا ظهرت أدلة لاحقة على بدء تطويرها لمصنع الشركة، تُقيّم إعادة التصنيف وفق قواعد تغير الاستخدام؛ وإذا كانت مخصصة فعليًا للبيع في النشاط العادي، يطبق IAS 2 بدل IAS 40. لا تكفي نية إدارية مجردة منفردة لإثبات تغير الاستخدام.",
        "If later evidence shows development for the entity's factory has commenced, assess transfer under the change-in-use rules. If the land is actually held for ordinary-course sale, IAS 2 applies instead. A management intention in isolation does not prove a change in use.",
      ),
    ],
    reference: "IAS 40.5, 7–9, 57; IAS 2.6",
  },
  {
    id: "ifrs-book2-office-transfer-to-investment-property",
    standardCode: "IAS 40",
    title: text("نقل مبنى المقر إلى عقار استثماري", "Transfer of head office to investment property"),
    facts: text(
      "اشترت شركة مبنى مقرها في 1 يناير 20X0 بمبلغ 250,000 دولار، ويُهلك على 50 سنة. في 30 يونيو 20X9 نقلت وظائف المقر إلى مكان آخر وبدأت تأجير المبنى، مع اختيار نموذج القيمة العادلة للعقار الاستثماري. قُدّرت قيمته العادلة يوم النقل بمبلغ 350,000 دولار. ويذكر المثال قيمة عادلة 380,000 في نهاية السنة التالية. لا يذكر خسارة انخفاض سابقة للمبنى.",
      "An entity bought its head-office building on 1 January 20X0 for $250,000 and depreciates it over 50 years. On 30 June 20X9 it moved its head-office functions elsewhere and began letting the building, applying the fair value model for investment property. Fair value at transfer was $350,000; the illustration also gives $380,000 at the end of the following year. No prior impairment loss is stated.",
    ),
    question: text(
      "كيف يُعرض المبنى في 30 يونيو 20X9، وكيف يُعالج ارتفاع القيمة العادلة اللاحق إلى 380,000 دولار؟",
      "How is the building accounted for at 30 June 20X9, and how is the later increase to $380,000 treated?",
    ),
    solution: [
      text(
        "الإهلاك السنوي قبل النقل = 250,000 ÷ 50 = 5,000. من 1 يناير 20X0 حتى 30 يونيو 20X9 = 9.5 سنوات، فيكون مجمع الإهلاك 47,500 والقيمة الدفترية قبل النقل 202,500 دولار.",
        "Pre-transfer annual depreciation is $250,000 ÷ 50 = $5,000. The 9.5 years from 1 January 20X0 to 30 June 20X9 give $47,500 accumulated depreciation and $202,500 pre-transfer carrying amount.",
      ),
      text(
        "انتهاء الإشغال الإداري وبدء التأجير دليل تغير استخدام إلى عقار استثماري. الفرق في يوم النقل = 350,000 − 202,500 = 147,500 دولار. وفق IAS 40.61–62 يعامل كما لو كان إعادة تقييم بموجب IAS 16؛ وبافتراض عدم وجود خسارة سابقة قابلة للعكس، يدخل الدخل الشامل الآخر وفائض إعادة التقييم، لا ربح القيمة العادلة في الربح أو الخسارة.",
        "Ending administrative occupation and beginning letting evidence a transfer to investment property. The transfer-date difference is $350,000 − $202,500 = $147,500. IAS 40.61–62 treats this like an IAS 16 revaluation; absent a prior impairment reversal, recognise it in other comprehensive income and revaluation surplus, not as a fair-value profit-or-loss gain.",
      ),
      text(
        "بعد النقل يطبق نموذج القيمة العادلة لـ IAS 40. إذا كان 350,000 هو مبلغ القياس السابق وبلغت القيمة في تاريخ تقرير لاحق 380,000، يُعترف بتغير قدره 30,000 في الربح أو الخسارة في تلك الفترة، لا في فائض إعادة التقييم. لا تُحسب إيجارات أو ضرائب لم تُعطَ.",
        "After transfer, apply the IAS 40 fair value model. If $350,000 was the prior measurement and fair value later reaches $380,000, recognise the $30,000 change in that later period's profit or loss, not in revaluation surplus. No unprovided rent or tax effects are calculated.",
      ),
    ],
    reference: "IAS 40.35, 57, 61–62; IAS 16.39–40, 50–55",
  },

  {
    id: "ifrs-book2-stremans-specific-borrowing-two-assets",
    standardCode: "IAS 23",
    title: text("Stremans: تمويل مخصص لأصلين مؤهلين", "Stremans: specific borrowing for two qualifying assets"),
    facts: text(
      "في 1 يناير 20X6 اقترضت Stremans مبلغ 1.5 مليون دولار بفائدة 9% لتمويل أصلين يتطلب كل منهما عامًا للبناء. في 1 يناير أنفقت 250,000 على A و500,000 على B؛ وفي 1 يوليو أنفقت 250,000 أخرى على A و500,000 أخرى على B. استثمرت الأموال غير المستخدمة مؤقتًا بعائد 7%. يقول السؤال إن العمل بدأ خلال 20X6 لكنه لا يحدد يوم بدء الأنشطة اللازمة لإعداد كل أصل.",
      "On 1 January 20X6 Stremans borrowed $1.5m at 9% specifically for two assets each expected to take a year to build. On 1 January it spent $250,000 on A and $500,000 on B; on 1 July it spent another $250,000 on A and $500,000 on B. Unused funds earned 7% temporarily. The question says work began during 20X6 but does not specify the date necessary preparation activities began for each asset.",
    ),
    question: text(
      "بتجاهل الفائدة المركبة، احسب تكلفة الاقتراض الممكن رسملتها وتكلفة كل أصل في 31 ديسمبر 20X6، واذكر شرط تاريخ بدء الرسملة.",
      "Ignoring compound interest, calculate capitalisable borrowing costs and each asset's cost at 31 December 20X6, and state the capitalisation commencement condition.",
    ),
    solution: [
      text(
        "إذا كانت نفقات الأصلين وتكاليف الاقتراض وأنشطة الإعداد اللازمة قد بدأت جميعها في 1 يناير واستمرت دون توقف جوهري، ففائدة القرض السنوية 1,500,000 × 9% = 135,000 دولار. يخصص للأصل A ثلثها، 45,000، ولـ B ثلثاها، 90,000، بحسب حصة كل أصل المتسقة من القرض.",
        "If expenditures, borrowing costs and necessary preparation activities for both assets all began on 1 January and continued without a substantive interruption, annual loan interest is $1,500,000 × 9% = $135,000. On the consistently one-third/two-thirds funding allocation, A bears $45,000 and B $90,000.",
      ),
      text(
        "الأموال التي لم تستخدم حتى 1 يوليو = 250,000 مخصصة لـ A و500,000 لـ B. دخل الاستثمار لستة أشهر: A = 250,000 × 7% × 6/12 = 8,750؛ B = 500,000 × 7% × 6/12 = 17,500. صافي تكاليف الاقتراض الممكن رسملتها = 36,250 لـ A و72,500 لـ B؛ المجموع 108,750 دولار.",
        "Until 1 July, unused funds are $250,000 attributable to A and $500,000 to B. Six-month investment income is A: $250,000 × 7% × 6/12 = $8,750; B: $500,000 × 7% × 6/12 = $17,500. Net potentially capitalisable borrowing costs are $36,250 for A and $72,500 for B, totalling $108,750.",
      ),
      text(
        "على هذا الافتراض فقط، تكلفة A بنهاية السنة = 500,000 إنفاق + 36,250 رسملة = 536,250؛ وتكلفة B = 1,000,000 + 72,500 = 1,072,500 دولار، قبل أي عناصر تكلفة أخرى غير معطاة.",
        "Only on that assumption, A's year-end cost is $500,000 expenditure + $36,250 capitalisation = $536,250; B's is $1,000,000 + $72,500 = $1,072,500, before any unprovided cost elements.",
      ),
      text(
        "لكن عبارة «بدأ العمل خلال السنة» لا تثبت أن أنشطة إعداد الأصلين بدأت في 1 يناير. يشترط IAS 23.17 تزامن الإنفاق وتكبد تكلفة الاقتراض ومباشرة الأنشطة اللازمة. إذا بدأت الأنشطة لاحقًا، يلزم تاريخها لإعادة تحديد الفترة المؤهلة وصافي تكلفة الاقتراض؛ لا تُعامل الأرقام السابقة كإجابة قطعية من الوقائع وحدها.",
        "However, 'work started during the year' does not establish that necessary preparation for both assets began on 1 January. IAS 23.17 requires expenditure, borrowing costs and preparation activities concurrently. If activities began later, their dates are needed to redetermine eligible periods and net borrowing costs; the above figures are not unconditional conclusions from the facts alone.",
      ),
    ],
    reference: "IAS 23.8, 12–13, 17–18, 20–22",
  },

  {
    id: "ifrs-book2-ch4-quiz-define-depreciation",
    standardCode: "IAS 16",
    title: text("مراجعة الفصل الرابع: تعريف الإهلاك", "Chapter 4 quiz: define depreciation"),
    facts: text("سؤال تعريفي دون معطيات رقمية.", "A definition prompt with no numerical facts."),
    question: text("عرّف الإهلاك.", "Define depreciation."),
    solution: [
      text("الإهلاك هو التوزيع المنهجي للمبلغ القابل للإهلاك للأصل على مدى عمره الإنتاجي؛ والمبلغ القابل للإهلاك هو التكلفة أو مبلغ بديل عنها مطروحًا منه القيمة المتبقية. لا يساوي بالضرورة هبوط القيمة السوقية.", "Depreciation is the systematic allocation of an asset's depreciable amount over its useful life. Depreciable amount is cost, or an amount substituted for cost, less residual value; it is not necessarily a fall in market value."),
    ],
    reference: "IAS 16.6, 50",
  },
  {
    id: "ifrs-book2-ch4-quiz-asset-production-costs",
    standardCode: "IAS 16",
    title: text("مراجعة الفصل الرابع: بنود تكلفة إنشاء أصل", "Chapter 4 quiz: costs of constructing an asset"),
    facts: text("البنود الواردة في السؤال: ثمن المواد الخام، أتعاب المهندس المعماري، رسوم الاستيراد، وتكاليف التركيب.", "The listed items are raw-material purchase price, architect's fees, import duties and installation costs."),
    question: text("أي البنود الأربعة يمكن إدخاله في تكلفة إنتاج أصل غير متداول؟", "Which of the following elements can be included in the production cost of a non-current asset?"),
    solution: [
      text("يمكن إدراج البنود الأربعة كلها إذا كانت تخص الأصل مباشرة وتستوفي شروط الاعتراف: المواد المستخدمة في الإنشاء، الأتعاب المهنية المباشرة، الرسوم غير القابلة للاسترداد، والتركيب اللازم لجعل الأصل جاهزًا للاستخدام المقصود. لا يعني ذلك إدراج أي مادة أو أتعاب عامة لا تتصل بالأصل.", "All four may qualify when directly attributable to the asset and recognition criteria are met: construction materials, directly attributable professional fees, non-refundable import duties and installation needed to make it ready for intended use. Unrelated materials or general fees do not qualify merely because they share these labels."),
    ],
    reference: "IAS 16.7, 16–17",
  },
  {
    id: "ifrs-book2-ch4-quiz-market-value-fair-value",
    standardCode: "IFRS 13",
    title: text("مراجعة الفصل الرابع: سعر السوق والقيمة العادلة", "Chapter 4 quiz: market price and fair value"),
    facts: text("يسأل الاختبار هل يمكن عادةً اعتبار قيمة السوق قيمة عادلة، دون تحديد سوق أو تاريخ أو حالة البيع.", "The quiz asks whether market value can usually be treated as fair value, without identifying the market, date or transaction conditions."),
    question: text("يمكن عادةً اعتبار القيمة السوقية قيمة عادلة: صحيح أم خطأ؟", "Market value can usually be taken as fair value. True or false?"),
    solution: [
      text("إجابة الاختبار الموجزة: صحيح عادةً إذا كان السعر يعكس معاملة منتظمة في السوق الرئيسية أو الأكثر منفعة بين مشاركين في السوق بتاريخ القياس. لكنهما ليسا مترادفين تلقائيًا: قد يلزم تعديل سعر معلن أو استخدام أسلوب تقييم إذا لم يكن السعر مناسبًا، ولا تُطرح تكاليف المعاملة من قياس القيمة العادلة بموجب IFRS 13.", "The quiz's short answer is usually true when the price represents an orderly transaction in the principal or most advantageous market between market participants at the measurement date. But the terms are not automatically interchangeable: a quoted price may need adjustment or a valuation technique may be required, and transaction costs are not deducted from IFRS 13 fair value."),
    ],
    reference: "IFRS 13.9, 16, 22–26, 61",
  },
  {
    id: "ifrs-book2-ch4-quiz-investment-property-fair-value",
    standardCode: "IAS 40",
    title: text("مراجعة الفصل الرابع: نموذج قياس العقار الاستثماري", "Chapter 4 quiz: investment-property model"),
    facts: text("عبارة اختبار عن القياس اللاحق لجميع العقارات الاستثمارية.", "A quiz statement about subsequent measurement of all investment property."),
    question: text("يجب دائمًا عرض العقارات الاستثمارية بالقيمة العادلة: صحيح أم خطأ؟", "Investment properties must always be shown at fair value. True or false?"),
    solution: [
      text("خطأ. تختار المنشأة نموذج القيمة العادلة أو نموذج التكلفة سياسةً محاسبية للعقارات الاستثمارية وفق شروط IAS 40. حتى عند اختيار نموذج التكلفة، تحدد القيمة العادلة للإفصاح المطلوب ما لم ينطبق استثناء محدد.", "False. IAS 40 permits a fair value model or a cost model as an accounting policy for investment property, subject to its requirements. Fair value is normally determined for disclosure even under the cost model, subject to specific exceptions."),
    ],
    reference: "IAS 40.30–35, 56, 79(e)",
  },
  {
    id: "ifrs-book2-ch4-quiz-ip-under-construction",
    standardCode: "IAS 40",
    title: text("مراجعة الفصل الرابع: عقار قيد الإنشاء للاستثمار", "Chapter 4 quiz: property under construction for investment"),
    facts: text("عقار يجري تشييده الآن بغرض استخدامه مستقبلًا كعقار استثماري، وليس بغرض البيع في النشاط العادي أو إشغال المنشأة.", "Property is being built for future use as investment property, not for ordinary-course sale or the entity's own occupation."),
    question: text("ما المعالجة الصحيحة للعقار الذي يُنشأ للاستخدام المستقبلي كعقار استثماري؟", "What is the correct treatment for property being constructed for future use as investment property?"),
    solution: [
      text("يدخل العقار قيد الإنشاء ضمن تعريف العقار الاستثماري وفق IAS 40.8(e). يُعترف به أولًا بالتكلفة بما فيها تكاليف المعاملة المؤهلة، ثم يطبق نموذج القياس اللاحق المختار وفق IAS 40 مع مراعاة شروطه؛ لا يُحول آليًا إلى مخزون IAS 2 أو أصل مشغول IAS 16.", "Property being constructed for future use as investment property is within IAS 40.8(e). Recognise it initially at cost including qualifying transaction costs, then apply the chosen IAS 40 subsequent-measurement model subject to its requirements; do not automatically classify it as IAS 2 inventory or IAS 16 owner-occupied property."),
    ],
    reference: "IAS 40.8(e), 16–20, 30–35",
  },

  {
    id: "ifrs-book2-aco-machinery-impairment",
    standardCode: "IAS 36",
    title: text("A Co: مقارنة البيع بالاستخدام لاختبار آلة", "A Co: compare disposal and use values for a machine"),
    facts: text(
      "تمسك A Co آلة وفق نموذج التكلفة بقيمة دفترية 10,500 دولار. قيمتها العادلة 10,000، وتكاليف التصرف 500، والقيمة الحالية للتدفقات من استخدامها 9,000 دولار.",
      "A Co carries a machine under the cost model at $10,500. Its fair value is $10,000, costs of disposal are $500 and present value of its future use cash flows is $9,000.",
    ),
    question: text(
      "هل حدث انخفاض قيمة للآلة؟ إذا نعم، احسب الخسارة.",
      "Is the machine impaired and, if so, what is the impairment loss?",
    ),
    solution: [
      text("القيمة العادلة ناقص تكاليف التصرف = 10,000 − 500 = 9,500 دولار. قيمة الاستخدام 9,000. القيمة القابلة للاسترداد هي الأعلى، أي 9,500، لا الأقل ولا مجموع القيمتين.", "Fair value less costs of disposal is $10,000 − $500 = $9,500. Value in use is $9,000. Recoverable amount is the higher, $9,500, not the lower or their sum."),
      text("القيمة الدفترية 10,500 تتجاوز القابلة للاسترداد 9,500؛ خسارة الانخفاض = 1,000 دولار. يخفض الأصل إلى 9,500 وتثبت الخسارة في الربح أو الخسارة لأن الآلة مسجلة بالتكلفة.", "Carrying amount $10,500 exceeds recoverable amount $9,500, so impairment is $1,000. Reduce the asset to $9,500 and recognise the loss in profit or loss because the machine is cost-measured."),
      text("قيد نموذجي: من حـ/ خسارة انخفاض 1,000 إلى حـ/ مجمع انخفاض الآلة 1,000.", "Illustrative entry: debit impairment loss $1,000; credit accumulated impairment on the machine $1,000."),
    ],
    reference: "IAS 36.18–19, 59–60, 63",
  },
  {
    id: "ifrs-book2-krisp-value-in-use",
    standardCode: "IAS 36",
    title: text("Krisp: خصم تدفقات أربع سنوات واختبار الانخفاض", "Krisp: discount four-year cash flows and test impairment"),
    facts: text(
      "اشترت Krisp أصلًا في 1 يونيو 20X3 بمبلغ 3,000,000 دولار، ويهلك بالقسط الثابت خلال خمس سنوات. في 31 مايو 20X4 قدرت تدفقات نهاية السنوات الأربع اللاحقة بـ 280,000 و450,000 و500,000 و550,000 دولار. معدل الخصم المعطى 5%، والقيمة العادلة ناقص تكاليف التصرف 1,400,000. لا تذكر الوقائع قيمة متبقية.",
      "Krisp bought an asset on 1 June 20X3 for $3,000,000, depreciated straight-line over five years. At 31 May 20X4 it forecasts end-of-year cash flows for the next four years of $280,000, $450,000, $500,000 and $550,000. The stated discount rate is 5%, fair value less costs of disposal is $1,400,000, and no residual value is stated.",
    ),
    question: text(
      "احسب قيمة الاستخدام للأصل وخسارة الانخفاض الناشئة، مع بيان أثر تقريب التدفقات.",
      "Calculate the asset's value in use and any impairment loss, showing the effect of rounding discounted cash flows.",
    ),
    solution: [
      text(
        "بافتراض قيمة متبقية صفر وملاءمة التدفقات ومعدل الخصم: إهلاك السنة الأولى = 3,000,000 ÷ 5 = 600,000؛ القيمة الدفترية في 31 مايو 20X4 = 2,400,000.",
        "Assuming nil residual value and appropriate cash flows and discount rate, year-one depreciation is $3,000,000 ÷ 5 = $600,000 and carrying amount at 31 May 20X4 is $2,400,000.",
      ),
      text(
        "قيمة الاستخدام = 280,000÷1.05 + 450,000÷1.05² + 500,000÷1.05³ + 550,000÷1.05⁴ ≈ 1,559,235 دولارًا. تقريب التدفقات المخصومة لأقرب ألف في العرض يعطي نحو 1,559,000.",
        "Value in use = $280,000÷1.05 + $450,000÷1.05² + $500,000÷1.05³ + $550,000÷1.05⁴ ≈ $1,559,235. Rounding discounted flows to the nearest thousand for display gives about $1,559,000.",
      ),
      text(
        "القيمة القابلة للاسترداد هي 1,559,235 تقريبًا، لأنها أعلى من 1,400,000. خسارة الانخفاض ≈ 2,400,000 − 1,559,235 = 840,765 دولارًا؛ وتُعرض 841,000 لأقرب ألف. لا تستخدم التدفقات غير المخصومة، ولا تجمع قيمة الاستخدام بقيمة البيع.",
        "Recoverable amount is approximately $1,559,235, exceeding $1,400,000. Impairment is approximately $2,400,000 − $1,559,235 = $840,765, or $841,000 to the nearest thousand. Do not use undiscounted flows or add use value to disposal value.",
      ),
    ],
    reference: "IAS 36.18, 30–57, 59–60, 63",
  },


  {
    id: "ifrs-book2-cgu-identification-examples",
    standardCode: "IAS 36",
    title: text("أمثلة تحديد وحدة توليد النقد", "Examples of identifying a cash-generating unit"),
    facts: text(
      "توجد حالتان: سكة خاصة بمنجم لا تولد تدفقات داخلة مستقلة ولا يمكن بيعها إلا خردة؛ وشركة حافلات ذات أربعة خطوط، تُحدد أصول وتدفقات كل خط، لكنها ملزمة تعاقديًا بتشغيل الخطوط الأربعة ولا تستطيع إيقاف الخط الخاسر وحده.",
      "Two situations are described: a mine's private railway has no independent cash inflows and only scrap value; a bus company has four routes with identifiable route assets and cash flows, but its contract requires all four routes and it cannot discontinue the loss-making route on its own.",
    ),
    question: text(
      "هل يمكنك إعطاء أمثلة على كيفية تحديد وحدة توليد النقد؟",
      "Can you think of some examples of how a cash-generating unit would be identified?",
    ),
    solution: [
      text(
        "السكة لا تُختبر كوحدة نقدية مستقلة لمجرد أن لها قيمة خردة؛ لأنها تخدم مخرجات المنجم ولا تولد تدفقات مستقلة إلى حد كبير. افحص المنجم مع السكة في أصغر مجموعة تولد تدفقات مستقلة.",
        "The railway is not a separate unit merely because it has scrap value. It supports the mine's output without largely independent inflows, so test the mine and railway in the smallest group with independent inflows.",
      ),
      text(
        "في مثال الحافلات، رغم إمكانية رصد نتائج كل خط، فإن الالتزام بتشغيل الأربعة ومنع إيقاف الخاسر منفردًا يجعل المجموعة المتعاقد عليها وحدة الاختبار على الوقائع المذكورة. لا تعمم عدد الخطوط أو حدود الوحدة على منشآت أخرى دون اختبار استقلال التدفقات والعقد.",
        "For the bus company, separate route results do not override the binding requirement to run all four. On these facts the contracted routes form the test unit; do not assume the same boundary for another operator without examining independent inflows and its contract.",
      ),
      text(
        "افحص كيف تراقب الإدارة الأداء وتتخذ قرارات الاستمرار أو التخلص، واستخدم حدودًا متسقة عبر الفترات ما لم يتغير الأساس بمبرر. وجود سوق نشطة لمخرجات مجموعة أصول قد يجعلها وحدة منفصلة حتى إن استُخدم ناتجها داخليًا.",
        "Consider how management monitors performance and makes continuation or disposal decisions, and identify units consistently between periods unless a change is justified. An active market for a group's output may make it a separate unit even when output is used internally.",
      ),
    ],
    reference: "IAS 36.6, 66–72",
  },
  {
    id: "ifrs-book2-fourways-cgu-loss-allocation",
    standardCode: "IAS 36",
    title: text("Fourways: توزيع خسارة وحدة توليد النقد", "Fourways: allocate a CGU impairment loss"),
    facts: text(
      "لدى Fourways وحدة توليد نقد تضم مبنى بقيمة دفترية 30 مليون دولار، وآلات ومعدات 6 ملايين، وشهرة مخصصة 10 ملايين، وأصولًا متداولة 20 مليونًا؛ مجموع البنود 66 مليونًا. قُدرت القيمة القابلة للاسترداد للوحدة، على أساس متسق مع هذه البنود، بـ50 مليونًا. لا يحدد السؤال ماهية الأصول المتداولة أو نتائج قياسها بموجب معاييرها.",
      "Fourways has a cash-generating unit with a building carried at $30 million, plant and equipment $6 million, allocated goodwill $10 million and current assets $20 million, total $66 million. The unit's recoverable amount, assumed consistently measured on this basis, is $50 million. The question does not identify the current assets or their measurements under their own Standards.",
    ),
    question: text(
      "كيف توزع خسارة انخفاض القيمة البالغة 16 مليون دولار بين بنود الوحدة؟",
      "How do we allocate the impairment loss?",
    ),
    solution: [
      text(
        "إذا كان مجموع القيمة الدفترية 66 مليونًا والقيمة القابلة للاسترداد 50 مليونًا على أساس متسق، فإن خسارة الوحدة 16 مليونًا. وفق IAS 36، اختبر أولًا أي أصل يحتاج قياسًا منفردًا، ثم خفض الشهرة المخصصة أولًا بمقدار 10 ملايين إلى صفر.",
        "On a consistent $66 million carrying and $50 million recoverable basis, the unit loss is $16 million. First test any assets requiring an individual assessment; under IAS 36 reduce allocated goodwill by $10 million to zero before allocating the remaining loss.",
      ),
      text(
        "إذا كانت الأصول المتداولة قد قيست بالفعل بمعاييرها ولا تتحمل جزءًا آخر من خسارة IAS 36، ولا يوجد حد أدنى فردي يمنع التخفيض، يوزع الرصيد 6 ملايين بين المبنى والآلات بنسبة 30:6: خسارة المبنى 5 ملايين وخسارة الآلات مليون؛ فتكون القيم 25 و5 و0 و20 مليونًا على الترتيب، ومجموعها 50 مليونًا.",
        "If the current assets have been measured under their applicable Standards and bear no further IAS 36 allocation, and no individual floor restricts the write-down, split the remaining $6 million over building and plant in the 30:6 ratio: $5 million to the building and $1 million to plant. Resulting balances are $25 million, $5 million, nil goodwill and $20 million current assets, totalling $50 million.",
      ),
      text(
        "هذه القسمة الأخيرة مشروطة؛ فمجرد وصف الأصول المتداولة بأنها «متداولة» لا يثبت أنها بقيمتها العادلة أو أنها لا تحتاج تخفيضًا وفق IAS 2 أو IFRS 9 مثلًا. تحقق من قياسها واتساق طرفي المقارنة ومن حدود IAS 36.105 قبل اعتماد توزيع 5/1 نهائيًا.",
        "That final split is conditional: calling assets 'current' does not prove they are at fair value or need no adjustment under, for example, IAS 2 or IFRS 9. Verify their measurements, the consistency of both sides of the test and IAS 36.105 floors before treating the $5m/$1m allocation as unconditional.",
      ),
    ],
    reference: "IAS 36.2, 76–79, 97–98, 104–105",
  },


  {
    id: "ifrs-book2-oil-platform-restoration-cgu",
    standardCode: "IAS 36",
    title: text("منصة نفط: مقارنة متسقة مع التزام التفكيك", "Oil platform: compare amounts consistently with dismantling liability"),
    facts: text(
      "تبلغ القيمة الدفترية لمنصة حفر 3 ملايين دولار، وقد اعترفت المنشأة منفصلًا بالتزام تفكيك وإزالة قيمته الدفترية 0.6 مليون. عرض مشترٍ دفع 2.8 مليون مقابل المنصة مع تحمل التزام الإزالة. تقدر القيمة الحالية لتدفقات استخدامها بـ3.3 ملايين قبل طرح الالتزام. لا تذكر الوقائع تكاليف تصرف إضافية.",
      "A drilling platform has a $3 million asset carrying amount and a separately recognised dismantling liability of $0.6 million. A buyer offers $2.8 million for the platform while assuming the removal obligation. Present value of use cash flows is $3.3 million before the liability; no additional disposal costs are specified.",
    ),
    question: text(
      "ما القيمة التي تستمر بها المنصة في قائمة المركز المالي؟ وهل نشأت خسارة انخفاض قيمة؟",
      "What should be the value of the drilling platform in the statement of financial position, and what, if anything, is the impairment loss?",
    ),
    solution: [
      text(
        "لأن عرض الشراء يتضمن تولي المشتري التزامًا معترفًا به، قارن على أساس صافٍ متسق: القيمة الدفترية للوحدة = 3 − 0.6 = 2.4 مليون. القيمة من الاستخدام بعد الالتزام = 3.3 − 0.6 = 2.7 مليون، وعرض البيع الصافي 2.8 مليون، بافتراض أنه يمثل القيمة العادلة ناقص تكاليف التصرف.",
        "Because the bid requires the buyer to assume a recognised obligation, compare on a consistent net basis: the unit carrying amount is $3m − $0.6m = $2.4m. Value in use after the liability is $3.3m − $0.6m = $2.7m; assuming the bid represents fair value less costs of disposal, the net disposal amount is $2.8m.",
      ),
      text(
        "القيمة القابلة للاسترداد للوحدة = 2.8 مليون، وهي أعلى من القيمة الدفترية الصافية 2.4 مليون؛ لا تنشأ خسارة انخفاض في هذه الوقائع. يبقى الأصل معروضًا بقيمته الدفترية 3 ملايين والالتزام منفصلًا بـ0.6 مليون. طرح الالتزام من قيمة الاستخدام فقط ثم مقارنة 2.8 مليون بالأصل الإجمالي 3 ملايين يخلط أساسين وينتج خسارة 0.2 مليون غير مبررة.",
        "Recoverable amount of the net unit is $2.8m, above its $2.4m net carrying amount, so the facts produce no impairment. The asset remains at its $3m carrying amount with the $0.6m liability separately presented. Deducting the liability from value in use but comparing the $2.8m net bid to the $3m gross asset would mix bases and wrongly suggest a $0.2m loss.",
      ),
    ],
    reference: "IAS 36.18, 29, 75–79",
  },


  {
    id: "ifrs-book2-cgu-reversal-three-years-later",
    standardCode: "IAS 36",
    title: text("وحدة مولدة للنقد: حدود عكس الانخفاض بعد ثلاث سنوات", "CGU: reversal limits three years after impairment"),
    facts: text(
      "قبل اختبار الانخفاض كانت وحدة تضم شهرة 40 مليون دولار، وبراءة اختراع 20 مليونًا، وأصولًا ملموسة 80 مليونًا. هبط المبلغ القابل للاسترداد إلى 60 مليونًا؛ خُفضت الشهرة والبراءة إلى صفر، وخُفضت الأصول الملموسة إلى 60 مليونًا، وهو قيمتها السوقية حينذاك. بعد ثلاث سنوات ارتفع المبلغ القابل للاسترداد للوحدة إلى 90 مليونًا بفعل تطور تقني للمنشأة، وكانت القيمة الدفترية للأصول الملموسة التي كانت ستظهر دون الانخفاض السابق 70 مليونًا. لا يحدد السؤال قيمتها الفعلية بعد إهلاك السنوات الثلاث ولا قيمة قابلة للاسترداد للبراءة منفردة.",
      "Before impairment a CGU held goodwill $40m, a patent $20m and tangible assets $80m. Its recoverable amount fell to $60m; goodwill and patent were written to nil and tangible assets to $60m as stated in the case allocation; their then market value was $60m. Three years later the unit's recoverable amount rose to $90m after an entity-specific technological breakthrough. The tangible assets would have carried $70m absent the prior impairment. The question does not give their actual post-depreciation carrying amount or a separate recoverable amount for the patent.",
    ),
    question: text(
      "اشرح هل يجوز عكس خسارة الانخفاض، واحسب مبلغ العكس حيث تسمح المعطيات.",
      "Explain whether the impairment loss can be reversed, calculating the amount of the reversal where relevant.",
    ),
    solution: [
      text(
        "الخسارة الأصلية للوحدة 140 − 60 = 80 مليونًا: 40 على الشهرة، و20 على البراءة، و20 على الأصول الملموسة وفق توزيع الحالة المعطى. لا تكفي القيمة السوقية وحدها لإثبات حد IAS 36.105 دون تكاليف التصرف وقيمة الاستخدام عند الاقتضاء. لا يجوز عكس خسارة الشهرة مطلقًا في فترة لاحقة بموجب IAS 36.124.",
        "The original CGU loss was $140m − $60m = $80m: $40m goodwill, $20m patent and $20m tangible assets under the allocation supplied. Market value alone does not establish the IAS 36.105 floor without disposal costs and, where relevant, value in use. IAS 36.124 prohibits reversing the goodwill loss in a later period.",
      ),
      text(
        "قد يجيز تغير التقديرات عكس انخفاض الأصول الأخرى، لكن قيمة الأصل الملموس بعد العكس لا تتجاوز 70 مليونًا، أي قيمته المفترضة بعد الإهلاك لو لم يُثبت انخفاض سابق. إن كانت قيمته الحالية فعلًا 60 مليونًا وكانت بقية شروط العكس مستوفاة، فالحد العددي لعكسه 10 ملايين. أما إذا تغيرت قيمته الحالية بالإهلاك خلال السنوات الثلاث، فمبلغ العكس هو الفرق بين الحد 70 والقيمة الحالية المؤهلة، ضمن حدود IAS 36 وتوزيع خسارة الوحدة؛ لا يمكن تحديده من هذه المعطيات وحدها.",
        "A change in estimates may permit reversal for other assets, but tangible assets cannot be raised above $70m, the depreciated amount that would have existed without prior impairment. If their actual current carrying amount is $60m and other reversal conditions hold, the numerical cap gives $10m. If depreciation changed their current carrying amount over three years, the reversal depends on the gap to $70m and the IAS 36 unit-allocation limits; the facts alone do not determine it.",
      ),
      text(
        "في عكس خسارة الوحدة يوزع المبلغ على أصولها عدا الشهرة بنسبة قيمها الدفترية، مع حدود IAS 36.123 لكل أصل؛ والبراءة قيمتها الدفترية صفر في الوقائع المعطاة، فلا يخصص لها عكس من توزيع الوحدة على هذا الأساس. يلزم فحص منفصل إذا ظهرت أدلة جديدة على استرداد البراءة، ولا تكفي زيادة قيمة الوحدة وحدها لإثبات عكسها. استمرار تفوق منتج المنافس لا يحسم مدى أثر تطور المنشأة على منافع براءتها.",
        "A unit-level reversal is allocated to assets other than goodwill pro rata with their carrying amounts, subject to IAS 36.123 caps. The patent has nil carrying amount on the stated facts, so it receives no allocation from the unit reversal on that basis. Separate evidence would be needed to assess a patent-specific reversal; the unit's increase alone does not establish it. A competitor's continuing superior product does not itself resolve whether the entity's breakthrough restores patent benefits.",
      ),
    ],
    reference: "IAS 36.110–115, 117–123, 124",
  },

  {
    id: "ifrs-book2-company-a-five-year-advance-lease",
    standardCode: "IFRS 16",
    title: text("شركة أ: عرض أصل حق الاستخدام والتزام الإيجار", "Company A: presenting the ROU asset and lease liability"),
    facts: text(
      "تبدأ شركة أ في 1 يناير 20X1 إيجار معدة لخمس سنوات. تسدد 2,000 دولار عند البدء ثم 2,000 في بداية كل سنة من السنوات الأربع التالية. القيمة العادلة للمعدة 8,000، والقيمة الحالية للدفعات الأربع غير المسددة 6,075، وعمر الاستخدام خمس سنوات، والمعدل الضمني 12%. تُعد القوائم في 31 ديسمبر.",
      "On 1 January 20X1 Company A leases equipment for five years. It pays $2,000 at commencement and $2,000 at the beginning of each of the next four years. The equipment's fair value is $8,000, present value of the four unpaid payments is $6,075, useful life is five years, and the implicit rate is 12%. Its reporting date is 31 December.",
    ),
    question: text(
      "كيف يظهر هذا الإيجار في قائمة المركز المالي في 31 ديسمبر 20X1؟",
      "How should the lease be presented in Company A's statement of financial position at 31 December 20X1?",
    ),
    solution: [
      text(
        "عند البدء: التزام الإيجار 6,075 يمثل الدفعات غير المسددة فقط. تكلفة أصل حق الاستخدام = 6,075 + 2,000 = 8,075؛ لا تُستبدل بالقيمة العادلة المعطاة 8,000. القيد: من حـ/ أصل حق الاستخدام 8,075، إلى حـ/ التزام الإيجار 6,075 وإلى حـ/ النقدية 2,000.",
        "At commencement, the $6,075 liability is the PV of unpaid payments only. ROU cost = $6,075 + $2,000 = $8,075; do not replace it with the stated $8,000 equipment fair value. Entry: Dr ROU asset $8,075; Cr lease liability $6,075 and cash $2,000.",
      ),
      text(
        "إهلاك السنة الأولى بالقسط الثابت = 8,075 ÷ 5 = 1,615؛ صافي أصل حق الاستخدام في 31 ديسمبر = 6,460. فائدة الالتزام = 6,075 × 12% = 729، فيصبح 6,804 قبل دفعة 1 يناير 20X2.",
        "Straight-line first-year depreciation = $8,075 / 5 = $1,615, leaving a $6,460 ROU asset at 31 December. Liability interest = $6,075 × 12% = $729, producing $6,804 before the 1 January 20X2 payment.",
      ),
      text(
        "يعرض التزام 6,804 منه 2,000 متداول لأنه يُسدد في بداية السنة التالية، و4,804 غير متداول بعد تلك الدفعة. لا تخصم الدفعة من التزام 31 ديسمبر قبل حدوثها. قيد السنة: من حـ/ تكلفة التمويل 729 إلى حـ/ التزام الإيجار 729، ومن حـ/ مصروف إهلاك 1,615 إلى حـ/ مجمع إهلاك حق الاستخدام 1,615.",
        "Present the $6,804 liability as $2,000 current, payable at the start of the next year, and $4,804 non-current after that payment. Do not deduct the next payment from the 31 December liability before it occurs. Year-one entries: Dr finance cost $729, Cr lease liability $729; Dr depreciation expense $1,615, Cr accumulated ROU depreciation $1,615.",
      ),
    ],
    reference: "IFRS 16.22–29, 36–38, 47; IAS 1.69",
  },


  {
    id: "ifrs-book2-alpha-operating-lease-rent-free",
    standardCode: "IFRS 16",
    title: text("مؤجر تشغيلي: شهران بلا إيجار في بداية العقد", "Operating lessor: two rent-free months at commencement"),
    facts: text(
      "أجّرت Alpha آلة إلى Beta لمدة ثلاث سنوات تبدأ 1 يناير 20X1؛ العمر النافع المتبقي للآلة عشر سنوات. الإيجار السنوي 3,600 دولار يُدفع في 31 ديسمبر، مع إعفاء Beta من أول شهرين عند بداية العقد. تتولى Alpha صيانة الآلة. لا تذكر الوقائع قيمة الآلة أو سعر خدمة الصيانة المستقل.",
      "Alpha leases a machine to Beta for three years from 1 January 20X1; the machine's remaining useful life is ten years. Annual rent of $3,600 is payable on 31 December, with Beta granted the first two months rent-free. Alpha maintains the machine. The facts give neither the machine's carrying amount nor a stand-alone price for maintenance.",
    ),
    question: text(
      "ناقش معالجة العقد في قوائم Alpha عن السنة المنتهية في 31 ديسمبر 20X1، مع الحسابات الممكنة.",
      "Discuss Alpha's accounting for the year ended 31 December 20X1, including relevant calculations.",
    ),
    solution: [
      text(
        "بحسب المعطيات، مدة الثلاث سنوات جزء محدود من عمر الآلة الباقي ولا تظهر قرائن نقل معظم مخاطر ومنافع الملكية؛ فيُصنف العقد لدى المؤجر تشغيليًا. تبقى الآلة ضمن أصول Alpha ويستمر إهلاكها وفق IAS 16؛ لا يمكن حساب الإهلاك لغياب قيمتها الدفترية وتفاصيلها.",
        "On the stated facts, three years is a limited portion of the machine's remaining life and there is no evidence that substantially all ownership risks and rewards transfer, so the lessor classifies it as operating. Alpha retains and depreciates the machine under IAS 16; its depreciation cannot be calculated without carrying amount and other details.",
      ),
      text(
        "إذا كان مبلغ 3,600 السنوي كله مقابل حق الاستخدام، فالنقد المستحق عن السنة الأولى بعد إعفاء شهرين = 3,600 × 10 ÷ 12 = 3,000، ثم 3,600 في كل من السنتين التاليتين. مجموع المقابل 10,200؛ إيراد الإيجار السنوي على أساس منتظم = 10,200 ÷ 3 = 3,400. لذلك يُثبت 3,400 إيرادًا و400 ذمة مستحقة بنهاية السنة الأولى فوق مبلغ 3,000 المحصل.",
        "If the annual $3,600 is entirely lease consideration, first-year cash due after two free months is $3,600 × 10 / 12 = $3,000, followed by $3,600 in each later year. Total consideration is $10,200, so straight-line lease income is $10,200 / 3 = $3,400 yearly. Recognise $3,400 income and a $400 accrued receivable at year-end above the $3,000 collected.",
      ),
      text(
        "لكن إن كانت الصيانة خدمة مميزة ضمن المقابل، يجب فصل عنصر الإيجار والخدمة وتوزيع المقابل وفق IFRS 16.17 وIFRS 15؛ لا يتيح السؤال سعرًا مستقلًا لحساب إيراد الإيجار منفردًا. عندئذ يكون 3,400 توزيعًا مشروطًا للمقابل الكلي لا رقمًا مؤكدًا لإيراد الإيجار وحده.",
        "If maintenance is a distinct service within the consideration, separate the lease and service components and allocate consideration under IFRS 16.17 and IFRS 15; no stand-alone prices are given to compute lease-only income. In that case $3,400 is a conditional straight-line total-consideration illustration, not a proven amount of lease revenue alone.",
      ),
    ],
    reference: "IFRS 16.17, 61–66, 81–84; IFRS 15.73–90; IAS 16.55",
  },


  {
    id: "ifrs-book2-ias38-purchased-brand-useful-life",
    standardCode: "IAS 38",
    title: text("تقدير العمر النافع لعلامة تجارية مشتراة", "Assessing the useful life of a purchased brand"),
    facts: text(
      "اشترت منشأة اسم علامة تجارية. لا يقدم السؤال مدة قانونية أو توقعات نقدية أو تاريخ تجديد محدد.",
      "An entity has purchased a brand name. The question provides no legal term, cash-flow forecast or specified renewal date.",
    ),
    question: text(
      "كيف تحدد المنشأة العمر النافع للعلامة المشتراة، وما أثر تصنيفه محدودًا أو غير محدد؟",
      "How should the entity determine the purchased brand's useful life, and what follows if it is finite or indefinite?",
    ),
    solution: [
      text(
        "تفحص حقوق الحماية وتجديدها وتكلفة التجديد، وعمر العلامة ومكانتها، واستقرار السوق والانتشار الجغرافي، ومخاطر المنافسة والتقادم، والإنفاق اللازم لدعمها، وخطط الإدارة وقدرتها على الحفاظ على المنافع، والفترة المتوقعة لتدفقات النقد. لا تُساوي بين امتداد حق قانوني وبين ضمان استمرار المنافع.",
        "Examine legal protection, renewal rights and renewal cost; the brand's age and market position; market stability and geographic reach; competition and obsolescence; supporting expenditure; management's plans and ability to maintain benefits; and the expected cash-flow period. A renewable legal right does not by itself guarantee continuing benefits.",
      ),
      text(
        "إن وُجد حد متوقع للمنافع، تُطفأ العلامة على عمرها المحدود بدءًا من جاهزيتها للاستخدام ويُراجع العمر والطريقة سنويًا. وإن لم يوجد حد منظور بعد تحليل الأدلة فهي غير محددة العمر، فلا تُطفأ بل تُختبر للانخفاض سنويًا، ويُراجع حكم عدم التحديد كل سنة. لا يمكن اختيار عدد سنوات أو مبلغ إطفاء من معطيات السؤال.",
        "If benefits have a foreseeable limit, amortise the finite-life brand from when it is available for use and review life and method annually. If no foreseeable limit remains after analysing the evidence, do not amortise; test for impairment annually and revisit the indefinite-life assessment each year. The facts do not support inventing a term or charge.",
      ),
    ],
    reference: "IAS 38.88–96, 97–110; IAS 36.10",
  },
  {
    id: "ifrs-book2-ias38-research-development-activity-examples",
    standardCode: "IAS 38",
    title: text("أمثلة أنشطة البحث والتطوير", "Examples of research and development activities"),
    facts: text(
      "يطلب تمرين تصنيف أمثلة الأنشطة التي يوردها IAS 38 في مرحلتي البحث والتطوير، دون مبالغ أو تواريخ مشروع.",
      "A review prompt asks for the activity examples in IAS 38's research and development phases, without project amounts or dates.",
    ),
    question: text(
      "ما أمثلة أنشطة البحث وأنشطة التطوير؟ وهل دخول النشاط في التطوير يكفي وحده لرسملة تكلفته؟",
      "What activities exemplify research and development? Is being in the development phase alone enough to capitalise cost?",
    ),
    solution: [
      text(
        "من البحث: السعي إلى معرفة جديدة؛ البحث عن تطبيقات نتائج الأبحاث وتقييمها واختيارها؛ استكشاف بدائل للمواد أو الأجهزة أو المنتجات أو العمليات أو الأنظمة أو الخدمات؛ وتصميم البدائل الممكنة وتقييمها واختيارها. يُحمل الإنفاق البحثي على المصروف عند تكبده.",
        "Research includes seeking new knowledge; searching for, evaluating and selecting applications of findings; searching for alternatives to materials, devices, products, processes, systems or services; and formulating, evaluating and selecting possible alternatives. Expense research expenditure as incurred.",
      ),
      text(
        "من التطوير: تصميم وبناء واختبار نماذج ما قبل الإنتاج؛ تصميم أدوات وقوالب بتقنية جديدة؛ إنشاء وتشغيل مصنع تجريبي غير مجدٍ للإنتاج التجاري؛ وتصميم واختبار البديل المختار لتحسين منتج أو عملية. هذه أمثلة على المرحلة وليست إذنًا آليًا بالرسملة؛ يلزم إثبات شروط IAS 38 الستة جميعًا، ولا تُجمع في تكلفة الأصل إلا النفقات اللاحقة لتاريخ تحققها.",
        "Development examples include designing, building and testing pre-production prototypes; designing tools or moulds using new technology; constructing and operating a pilot plant not economically feasible for commercial production; and designing and testing the selected improvement. These identify a phase, not automatic capitalisation: all six IAS 38 criteria must be demonstrated, and only expenditure from that date enters asset cost.",
      ),
    ],
    reference: "IAS 38.54–59, 65–67",
  },
  {
    id: "ifrs-book2-ifrs3-goodwill-distinguishing-characteristics",
    standardCode: "IFRS 3",
    title: text("ما الذي يميز شهرة الاستحواذ عن الأصل غير الملموس المحدد؟", "How does acquisition goodwill differ from an identifiable intangible?"),
    facts: text(
      "يسأل تمرين تفسيري عن طبيعة الشهرة، وقابلية فصلها، وارتباط قيمتها بعوامل مثل فريق العمل والعلاقات مع العملاء، وعن أثر ذلك على معالجتها المحاسبية.",
      "An explanatory prompt asks about goodwill's nature, separability and links to factors such as an assembled workforce and customer relationships, and how these affect its accounting.",
    ),
    question: text(
      "اذكر الخصائص الرئيسية التي تميز الشهرة عن أصل غير ملموس محدد، وبيّن المعالجة الواجبة لشهرة تجميع الأعمال والشهرة المتولدة داخليًا.",
      "State the main characteristics distinguishing goodwill from an identifiable intangible, and the required treatment of business-combination and internally generated goodwill.",
    ),
    solution: [
      text(
        "تمثل الشهرة منافع مستقبلية متبقية من عناصر مشتراة في تجميع أعمال لا يمكن تحديدها والاعتراف بكل منها منفصلًا. لا تباع عادةً بمعزل عن النشاط، ولا تقاس مباشرةً بتكلفة بناء السمعة أو تدريب العاملين؛ وتختلف عن أصل قابل للفصل أو ناشئ من حق تعاقدي/قانوني يمكن تحديده. يجب فصل الأصول غير الملموسة المحددة المستحوذ عليها عن الشهرة متى استوفت متطلبات IFRS 3 وIAS 38.",
        "Goodwill is the residual future benefit from acquired items in a business combination that cannot individually be identified and separately recognised. It is not ordinarily sold apart from the business or measured by spending on reputation or staff training. An identifiable intangible is separable or arises from contractual or legal rights; recognise qualifying acquired identifiable intangibles separately from goodwill.",
      ),
      text(
        "لا تُعترف الشهرة المتولدة داخليًا أصلًا. أما شهرة تجميع الأعمال فتُقاس وفق معادلة IFRS 3 التي تشمل المقابل والحصة غير المسيطرة وأي حصة سابقة مقابل صافي الأصول المحددة في تاريخ الاستحواذ، وتبقى بالتكلفة ناقص خسائر الانخفاض؛ لا تُطفأ وتُختبر سنويًا. إمكان الجدل النظري بشأن صعوبة تقييمها لا يجيز شطب شهرة الاستحواذ فورًا أو استبدال المعالجة الإلزامية.",
        "Do not recognise internally generated goodwill. Measure combination goodwill under IFRS 3 using consideration, non-controlling interest and any previously held interest less acquisition-date identifiable net assets; subsequently carry it at cost less impairment, without amortisation, and test it annually. Conceptual debate about valuation does not permit immediate write-off of acquired goodwill or override the required treatment.",
      ),
    ],
    reference: "IFRS 3.10–13, 32; IAS 38.11–12, 48–50; IAS 36.80, 90, 124",
  },


  {
    id: "ifrs-book2-warren-three-year-assurance-warranty",
    standardCode: "IAS 37",
    title: text("ضمان Warren لثلاث سنوات: هل ينشأ مخصص؟", "Warren's three-year warranty: is a provision required?"),
    facts: text(
      "تبيع Warren Co منتجات مع ضمان معياري عند البيع لتعمل كما هو متوقع ثلاث سنوات. لا يحدد السؤال مقابلًا منفصلًا للخدمة أو تكاليف إصلاح أو توزيع عيوب.",
      "Warren Co sells products with a standard three-year promise that they will perform as expected. The prompt gives no separately priced service, repair costs or defect distribution.",
    ),
    question: text(
      "هل يعترف بمخصص عن المنتجات المبيعة قبل تاريخ التقرير؟ وكيف يؤثر احتمال وجود خدمة إضافية في تصنيف الضمان؟",
      "Is a provision recognised for products sold before reporting date? How would any additional service affect warranty classification?",
    ),
    solution: [
      text(
        "إذا كان الضمان يؤكد مطابقة المنتج لمواصفاته فقط، فإن البيع حدث ملزم؛ يُقدر في تاريخ التقرير إصلاح أو استبدال العيوب المبلغ عنها والعيوب الكامنة المتوقع ظهورها في الوحدات المبيعة خلال المدة المتبقية، ويثبت مخصص بأفضل تقدير عند رجحان خروج الموارد وإمكان القياس. لا يقتصر على المطالبات المبلغ عنها بالفعل، ولا يمكن حساب مبلغ من البيانات المتاحة.",
        "If this is assurance that the product meets agreed specifications, the sale creates the obligation. At reporting date estimate repair or replacement for notified defects and latent defects expected in units already sold during remaining cover; recognise a best-estimate provision when outflow is probable and measurable. Do not restrict it to claims already notified; no amount can be computed here.",
      ),
      text(
        "افحص مدة الثلاث سنوات وطبيعة المهام وخيار شراء الضمان منفصلًا وفق IFRS 15. إذا تضمن خدمة مستقلة إضافية، تُعالج الخدمة أو الجزء غير القابل للفصل كالتزام أداء، وليس كله مخصص IAS 37 تلقائيًا. طول المدة وحده مؤشر وليس حكمًا قاطعًا.",
        "Assess the three-year term, promised tasks and any separate purchase option under IFRS 15. If additional distinct service is provided, account for that service or an inseparable combined warranty as a performance obligation rather than automatically placing the whole promise in IAS 37. Duration alone is an indicator, not conclusive.",
      ),
    ],
    reference: "IAS 37.14, 24, 36–40; IFRS 15.B28–B33",
  },
  {
    id: "ifrs-book2-callow-food-poisoning-litigation",
    standardCode: "IAS 37",
    title: text("دعوى Callow: تطور الدليل بين تاريخين", "Callow litigation: evidence changes between reporting dates"),
    facts: text(
      "بعد حفل في 20X0 توفي عشرة أشخاص، وربما ارتبطت الحالات بأغذية باعتها Callow Co. بدأت دعوى تعويض وتنكر الشركة مسؤوليتها. عند اعتماد قوائم 31 ديسمبر 20X0 رجح محاموها عدم ثبوت المسؤولية، لكن عند إعداد قوائم 31 ديسمبر 20X1 رجحوا ثبوتها بعد تطورات القضية. لا يقدم السؤال تقدير مبلغ التعويض.",
      "Ten people died after a 20X0 event, possibly linked to food sold by Callow Co. Damages proceedings began and the company disputes liability. On authorising its 31 December 20X0 statements, lawyers expected it probably would not be liable; when preparing 31 December 20X1 statements, case developments led them to expect liability is probable. No damages estimate is supplied.",
    ),
    question: text(
      "ما المعالجة في قوائم 20X0 و20X1، وما البيانات اللازمة لإثبات مبلغ؟",
      "What is the treatment in the 20X0 and 20X1 statements, and what would be needed to record an amount?",
    ),
    solution: [
      text(
        "في 20X0، إذا لم يرجح وجود التزام حالي أو خروج موارد بناءً على الدليل المتاح عند اعتماد القوائم، لا يثبت مخصص؛ تفصح عن التزام محتمل ما لم تكن إمكانية الخروج بعيدة. لا يفترض الحكم أن كل حدث وفاة يثبت آليًا مسؤولية المنشأة.",
        "In 20X0, if the available evidence at authorisation does not support a probable present obligation or outflow, do not recognise a provision; disclose a contingent liability unless outflow is remote. The deaths alone do not establish the entity's legal responsibility.",
      ),
      text(
        "في 20X1 تعيد تقييم الوقائع: إذا صار الالتزام الحالي وخروج الموارد مرجحين وأمكن تقدير التعويض بصورة موثوقة، يثبت مخصص بأفضل تقدير في تلك القوائم. إذا تعذر التقدير بشكل نادر، يبقى إفصاح الالتزام المحتمل. لا يمكن اختراع رقم من السؤال، ولا يُعاد كتابة قوائم 20X0 تلقائيًا لمجرد تغير التقدير اللاحق.",
        "Reassess in 20X1: if a present obligation and outflow are probable and damages can be reliably estimated, recognise a best-estimate provision then. In the rare absence of a reliable estimate, continue contingent-liability disclosure. The question gives no monetary amount, and later estimate changes do not automatically rewrite 20X0.",
      ),
    ],
    reference: "IAS 37.14–16, 25–26, 36–40, 86",
  },
  {
    id: "ifrs-book2-smack-pony-financial-guarantee",
    standardCode: "IFRS 9",
    title: text("ضمان Smack لقرض Pony: نطاق IFRS 9 أولًا", "Smack's guarantee of Pony borrowing: test IFRS 9 scope first"),
    facts: text(
      "ضمنت Smack Co في 20X0 اقتراض Pony Co عندما كانت حالتها المالية سليمة. تدهورت حالة Pony خلال 20X1 وطلبت حماية من الدائنين في 30 يونيو. لا يقدم السؤال نص الضمان أو المقابل أو القيمة العادلة أو الرصيد القائم أو بيانات الخسائر الائتمانية.",
      "Smack Co guaranteed Pony Co borrowing in 20X0 when Pony was financially sound. Pony's condition deteriorated during 20X1 and it sought creditor protection on 30 June. The exact guarantee terms, fee, fair value, exposure and credit-loss inputs are not supplied.",
    ),
    question: text(
      "ما المعالجة في 31 ديسمبر 20X0 و31 ديسمبر 20X1 إذا استوفى الضمان تعريف عقد الضمان المالي في IFRS 9؟ وهل يكفي تصنيفه التزامًا محتملًا ثم مخصصًا وفق IAS 37؟",
      "What is the treatment at 31 December 20X0 and 31 December 20X1 if the guarantee meets IFRS 9's financial-guarantee definition? Is IAS 37 contingent-liability-then-provision treatment sufficient?",
    ),
    solution: [
      text(
        "تحقق أولًا أن العقد يلزم Smack بتعويض حامل الدين عن خسارة تنشأ من عدم سداد Pony دفعة مستحقة؛ عند انطباق تعريف الضمان المالي ونطاق IFRS 9، تثبت Smack التزام الضمان مبدئيًا بالقيمة العادلة حتى لو كانت Pony سليمة. سلامة المدين لا تجعل القيمة أو الخسائر الائتمانية صفرًا بحكم تلقائي، ولا يكفي إفصاح IAS 37 وحده في 20X0.",
        "First determine whether Smack must reimburse a debt holder for loss caused by Pony's failure to pay when due. If the contract meets the financial-guarantee definition and IFRS 9 applies, Smack initially recognises a guarantee liability at fair value even when Pony is sound. Sound credit does not automatically mean nil fair value or nil expected losses; IAS 37 disclosure alone is insufficient in 20X0.",
      ),
      text(
        "في 20X1، ومع عدم اختيار قياس آخر مسموح، يقاس الالتزام لاحقًا بالأعلى من مخصص الخسائر الائتمانية المتوقعة وفق IFRS 9 والمبلغ المثبت أولًا ناقص الدخل المعترف به وفق مبادئ IFRS 15. تعثر Pony مؤشر قوي على إعادة تقييم الخسائر المتوقعة، لكنه لا يحدد المبلغ وحده. إن لم يستوف العقد تعريف الضمان المالي أو انطبق استثناء نطاق محدد، يُعاد تحليل المعيار المناسب؛ لا يُفترض ذلك من العنوان فقط.",
        "In 20X1, absent another permitted designation, subsequently measure the liability at the higher of IFRS 9's expected-credit-loss allowance and the initial amount less income recognised under IFRS 15 principles. Pony's financial distress requires reassessing expected losses but gives no amount by itself. If the terms fail the financial-guarantee definition or a specific scope exception applies, determine the appropriate Standard separately; a label alone is insufficient.",
      ),
    ],
    reference: "IFRS 9.Appendix A, 2.1(e), 4.2.1(c), 5.1.1, 5.5; IFRS 15",
  },

  {
    id: "ifrs-book2-ias19-unused-holiday-carryforward",
    standardCode: "IAS 19",
    title: text("إجازة سنوية مرحلة: الالتزام المتوقع لا الرصيد الأقصى", "Carried-forward holiday: expected obligation, not a ceiling"),
    facts: text(
      "تسمح منشأة بترحيل الإجازة السنوية غير المستعملة حتى 12 شهرًا. في نهاية 20X9 رحّل الموظفون 50 يومًا إجمالًا، والأجر 100 دولار لليوم. لا يبين السؤال عدد الأيام التي يُتوقع استخدامها قبل انقضاء حق الترحيل أو ما إذا كانت تُدفع نقدًا عند المغادرة.",
      "An entity permits unused annual holiday to be carried forward for up to 12 months. At the end of 20X9 employees have carried forward 50 days in total, at $100 per day. The prompt does not state how many days are expected to be used before expiry or whether unused days are payable on departure."
    ),
    question: text(
      "حدد توقيت الاعتراف بالإجازة المرحلة وكيفية قياس الالتزام بنهاية 20X9.",
      "State when carried-forward holiday is recognised and how the liability is measured at the end of 20X9."
    ),
    solution: [
      text(
        "لأن الغياب المدفوع تراكمي، تنشأ تكلفة والتزام مع خدمة الموظفين التي تزيد حقهم في إجازة مستقبلية؛ لا يؤجل الاعتراف حتى أخذ الإجازة. يُخفض الالتزام عند استهلاك الأيام أو سقوط الحق وفق شروطه.",
        "Because the paid absence accumulates, recognise expense and liability as employee service increases entitlement to future leave; do not wait until the absence occurs. Release the liability as days are taken or entitlement expires under its terms."
      ),
      text(
        "يقاس الالتزام بالمبلغ الإضافي المتوقع دفعه بسبب الأيام المرحلة. يمثل 50 × 100 = 5,000 دولار حدًا حسابيًا إذا استُخدمت جميع الأيام أو استحقت نقدًا، وليس تلقائيًا أفضل تقدير. لا يتيح السؤال توقع الاستخدام أو تسوية نقدية؛ لذلك لا يمكن الجزم برصيد 5,000 دولار دون معلومات إضافية.",
        "Measure the liability at the additional amount expected to be paid because the entitlement has accumulated. Fifty days × $100 = $5,000 is the arithmetic amount if all days are used or paid in cash, not automatically the best estimate. Expected usage and cash-settlement terms are absent, so a $5,000 liability cannot be asserted unconditionally."
      ),
      text(
        "القيد عند ثبوت التقدير: من حـ/مصروف منافع الموظفين (أو تكلفة أصل مؤهلة) إلى حـ/التزام الإجازات بالمبلغ الإضافي المتوقع؛ ولا يُختلق مبلغ نهائي من الرصيد الاسمي وحده.",
        "Once a supportable estimate exists: debit employee-benefit expense (or an eligible asset cost) and credit accrued holiday liability for the expected additional amount. The nominal carry-forward balance alone does not supply a definitive journal amount."
      )
    ],
    reference: "IAS 19.11, 13–17",
  },

  {
    id: "ifrs-book2-ias19-one-year-defined-benefit-remeasurement",
    standardCode: "IAS 19",
    title: text("خطة منافع محددة: مصالحة الالتزام وأصول الخطة", "Defined-benefit plan: reconcile obligation and plan assets"),
    facts: text(
      "في 1 يناير 20X2 بلغت القيمة الحالية لالتزام منافع محددة 1,250,000 دولار والقيمة العادلة لأصول الخطة 1,100,000. تكلفة الخدمة الجارية خلال السنة 360,000 ومعدل الخصم 6%. في 31 ديسمبر دفعت المنشأة مساهمة للخطة 490,000، وسددت الخطة منافع 190,000. في نهاية السنة قيّم الخبير الالتزام بمبلغ 1,553,600، وأصول الخطة بمبلغ 1,500,000. تمت المساهمة وسداد المنافع في نهاية السنة، فلا يحملان فائدة خلال 20X2.",
      "On 1 January 20X2 the present value of a defined-benefit obligation was $1,250,000 and the fair value of plan assets was $1,100,000. Current service cost was $360,000 and the discount rate was 6%. At 31 December the employer contributed $490,000 and the plan paid $190,000 of benefits. The year-end actuarial obligation was $1,553,600 and plan assets had a fair value of $1,500,000. Contributions and benefits were paid at year-end, so they bear no interest during 20X2."
    ),
    question: text(
      "احسب صافي الفائدة وإعادة قياس الالتزام وعائد أصول الخطة خارج الفائدة وصافي أثر الدخل الشامل الآخر والالتزام الختامي، مع توضيح عرضها في القوائم.",
      "Calculate net interest, obligation remeasurement, plan-asset return excluding interest, net OCI effect and closing liability, and explain financial-statement presentation."
    ),
    solution: [
      text(
        "فائدة الالتزام = 1,250,000 × 6% = 75,000؛ فائدة أصول الخطة الداخلة في صافي الفائدة = 1,100,000 × 6% = 66,000؛ صافي مصروف الفائدة = 9,000. مع تكلفة الخدمة 360,000، يكون أثر الربح أو الخسارة مصروفًا قدره 369,000 دولار.",
        "Interest on the obligation is $1,250,000 × 6% = $75,000; interest on plan assets included in net interest is $1,100,000 × 6% = $66,000; net interest expense is $9,000. Together with $360,000 current service cost, the profit-or-loss expense is $369,000."
      ),
      text(
        "التزام ما قبل إعادة القياس = 1,250,000 + 75,000 + 360,000 − 190,000 = 1,495,000؛ وبمقارنته مع الالتزام الختامي 1,553,600 تظهر خسارة إعادة قياس 58,600. أصول ما قبل إعادة القياس = 1,100,000 + 66,000 + 490,000 − 190,000 = 1,466,000؛ وبمقارنتها مع 1,500,000 يظهر عائد إضافي على الأصول 34,000.",
        "The obligation before remeasurement is $1,250,000 + $75,000 + $360,000 − $190,000 = $1,495,000; comparison with $1,553,600 closing obligation yields a $58,600 remeasurement loss. Plan assets before remeasurement are $1,100,000 + $66,000 + $490,000 − $190,000 = $1,466,000; comparison with $1,500,000 gives $34,000 asset return excluding interest."
      ),
      text(
        "صافي خسارة إعادة القياس في الدخل الشامل الآخر = 58,600 − 34,000 = 24,600، ولا يعاد تدويرها لاحقًا إلى الربح أو الخسارة. صافي الالتزام في المركز المالي = 1,553,600 − 1,500,000 = 53,600. وتؤكد المصالحة: التزام أول المدة 150,000 + مصروف 369,000 − مساهمة 490,000 + خسارة دخل شامل آخر 24,600 = 53,600.",
        "Net remeasurement loss in OCI is $58,600 − $34,000 = $24,600; it is not subsequently recycled to profit or loss. The closing statement-of-financial-position liability is $1,553,600 − $1,500,000 = $53,600. Cross-check: opening net liability $150,000 + $369,000 expense − $490,000 employer contribution + $24,600 OCI loss = $53,600."
      ),
      text(
        "على مستوى صافي الالتزام: يثبت مصروف الخدمة والفائدة مدينًا 369,000 ودائنًا الالتزام؛ وتخفض المساهمة النقدية الالتزام 490,000؛ وتثبت خسارة إعادة القياس مدينًا في الدخل الشامل الآخر ودائنًا الالتزام 24,600. سداد المنافع من أصول الخطة يخفض الأصل والالتزام الإجماليين بالمبلغ نفسه ولا يغيّر صافي الالتزام.",
        "At the net-liability level, debit service and net-interest expense and credit the liability $369,000; employer cash contribution reduces that liability by $490,000; debit OCI and credit the liability $24,600 for net remeasurement loss. Benefits paid from plan assets reduce gross assets and obligation equally, leaving the net liability unchanged."
      )
    ],
    reference: "IAS 19.57, 113, 120–130",
  },

  {
    id: "ifrs-book2-ias19-bcd-three-year-plan-settlement",
    standardCode: "IAS 19",
    title: text("BCD: تسوية خطة منافع محددة عبر ثلاث سنوات", "BCD: three-year defined-benefit plan and settlement"),
    facts: text(
      "جميع المبالغ بآلاف الدولارات، ومعدل الخصم 10% سنويًا، وجميع المعاملات بنهاية السنة. في بداية 20X2 كان الالتزام وأصول الخطة 1,000 لكل منهما. للسنوات 20X2 و20X3 و20X4 على الترتيب: تكلفة الخدمة الجارية 140 و150 و150؛ المنافع المدفوعة من الخطة 120 و140 و150؛ مساهمات المنشأة 110 و120 و120. كانت قيم الالتزام الختامية قبل تحويل 20X3 هي 1,200 و1,650 و1,700، وقيم أصول الخطة 1,250 و1,450 و1,610. بنهاية 20X3 انتقل استحقاق مجموعة موظفين إلى خطة صاحب عمل جديد، فانخفض التزام BCD بمقدار 50 ونُقلت أصول خطة بقيمة 48، بعد قياس القيم الختامية المذكورة. في نهاية 20X4 أعلنت BCD دفعة إضافية لمتقاعدين لم تتضمنها شروط الخطة السابقة؛ يشمل التزام 1,700 الختامي زيادة 40 لهذه الدفعة. لا تُعطى شروط تتيح استرداد فائض الخطة أو تخفيض المساهمات المستقبلية.",
      "All amounts are in $000, the annual discount rate is 10%, and all transactions occur at year-end. At the start of 20X2 both the obligation and plan assets were 1,000. For 20X2, 20X3 and 20X4 respectively: current service cost is 140, 150 and 150; plan benefits paid are 120, 140 and 150; employer contributions are 110, 120 and 120. Year-end obligations before the 20X3 transfer are 1,200, 1,650 and 1,700; plan assets are 1,250, 1,450 and 1,610. At the end of 20X3 a group of employees transferred accrued entitlements to a new employer's plan, reducing BCD's obligation by 50 and transferring plan assets of 48 after the stated year-end valuations. At the end of 20X4 BCD announced an extra payment to pensioners outside the previous plan terms; the 1,700 closing obligation includes 40 for it. The terms governing refunds or future contribution reductions are not provided."
    ),
    question: text(
      "صالح الالتزام وأصول الخطة لكل سنة؛ احسب أثر التسوية وتكلفة الخدمة السابقة والربح أو الخسارة والدخل الشامل الآخر، وحدد أثر غياب معلومات سقف الأصل على العرض.",
      "Reconcile the obligation and plan assets for each year; calculate the settlement, past service cost, profit or loss and OCI, and explain how missing asset-ceiling information limits presentation."
    ),
    solution: [
      text(
        "الأرقام التالية لمصروف الربح أو الخسارة وصافي الدخل الشامل الآخر تفترض أن سقف الأصل لا يقيّد فائض 20X2؛ من دون هذا الافتراض تبقى حركتا الالتزام وأصول الخطة صحيحتين، لكن المبالغ المعروضة مشروطة. في 20X2 فائدة الالتزام والأصول 100 لكل منهما. قبل إعادة القياس: الالتزام 1,000 + 100 + 140 − 120 = 1,120، فخسارته الاكتوارية 80 ليصبح 1,200. الأصول 1,000 + 100 + 110 − 120 = 1,090، فعائدها خارج الفائدة 160 ليصبح 1,250. مصروف الربح أو الخسارة 140، وصافي الدخل الشامل الآخر مكسب 80 قبل أثر السقف، والفائض الحسابي 50. لا يثبت أصل 50 تلقائيًا قبل اختبار السقف.",
        "The following profit-or-loss and net OCI figures assume that the asset ceiling does not limit the 20X2 surplus; without that assumption the gross obligation and asset movements remain valid, but the presented totals are conditional. In 20X2 interest on the obligation and assets is 100 each. Before remeasurement the obligation is 1,000 + 100 + 140 − 120 = 1,120; an actuarial loss of 80 brings it to 1,200. Assets are 1,000 + 100 + 110 − 120 = 1,090; return beyond interest of 160 brings them to 1,250. Profit-or-loss expense is 140, net OCI gain before any ceiling effect is 80 and the arithmetic surplus is 50. Recognition of a 50 asset still requires the ceiling test."
      ),
      text(
        "في 20X3 فائدة الالتزام 120 وفائدة الأصول 125. بعد التسوية يصبح الالتزام 1,650 − 50 = 1,600، والأصول 1,450 − 48 = 1,402. قبل إعادة القياس والتسوية، الالتزام 1,200 + 120 + 150 − 140 = 1,330؛ بعد إضافة خسارة اكتوارية 320 يصل إلى 1,650. الأصول 1,250 + 125 + 120 − 140 = 1,355؛ عائد 95 خارج الفائدة يصل بها إلى 1,450. إذا أزال التحويل التزام BCD نهائيًا، ربح التسوية 50 − 48 = 2 في الربح أو الخسارة. صافي الفائدة دخل 5، فيكون مصروف الربح أو الخسارة 150 − 5 − 2 = 143؛ وصافي خسارة الدخل الشامل الآخر 320 − 95 = 225. العجز الختامي 1,600 − 1,402 = 198.",
        "In 20X3 obligation interest is 120 and asset interest 125. After settlement the obligation is 1,650 − 50 = 1,600 and assets are 1,450 − 48 = 1,402. Before remeasurement and settlement, the obligation is 1,200 + 120 + 150 − 140 = 1,330; an actuarial loss of 320 brings it to 1,650. Assets are 1,250 + 125 + 120 − 140 = 1,355; return beyond interest of 95 brings them to 1,450. If the transfer extinguishes BCD's obligation, the settlement gain is 50 − 48 = 2 in profit or loss. Net interest is income of 5, so profit-or-loss expense is 150 − 5 − 2 = 143; net OCI loss is 320 − 95 = 225. The closing deficit is 1,600 − 1,402 = 198."
      ),
      text(
        "في 20X4 فائدة الالتزام 160 وفائدة الأصول 140.2. الزيادة البالغة 40 مقابل منافع عن خدمة سابقة تكلفتها خدمة سابقة في الربح أو الخسارة، لا خسارة اكتوارية. قبل إعادة القياس يصبح الالتزام 1,600 + 160 + 150 + 40 − 150 = 1,800؛ قيمته 1,700 تعني مكسب إعادة قياس 100. الأصول قبل إعادة القياس 1,402 + 140.2 + 120 − 150 = 1,512.2؛ قيمتها 1,610 تعني عائدًا إضافيًا 97.8. صافي الفائدة 19.8، ومصروف الربح أو الخسارة 150 + 40 + 19.8 = 209.8، ومكسب الدخل الشامل الآخر 197.8. العجز الختامي 1,700 − 1,610 = 90. بالتقريب لأقرب ألف: 20 و210 و198 على التوالي.",
        "In 20X4 obligation interest is 160 and asset interest 140.2. The 40 increase for earlier service is past service cost in profit or loss, not an actuarial loss. The obligation before remeasurement is 1,600 + 160 + 150 + 40 − 150 = 1,800; its 1,700 value implies a remeasurement gain of 100. Assets before remeasurement are 1,402 + 140.2 + 120 − 150 = 1,512.2; their 1,610 value implies additional return of 97.8. Net interest is 19.8, profit-or-loss expense is 150 + 40 + 19.8 = 209.8 and OCI gain is 197.8. The closing deficit is 1,700 − 1,610 = 90. Rounded to whole thousands, the first three amounts are 20, 210 and 198."
      ),
      text(
        "تتحقق المصالحة على فرض عدم تقيد فائض 20X2 بالسقف: صافي 20X2 هو 0 + 140 − 110 − 80 = أصل 50؛ ثم −50 + 143 − 120 + 225 = التزام 198 في 20X3؛ ثم 198 + 209.8 − 120 − 197.8 = التزام 90 في 20X4. إذا كان الفائض غير متاح كاسترداد أو تخفيض مساهمات، يتغير الأصل المثبت وأثر السقف في صافي الفائدة والدخل الشامل الآخر، ولا تكفي الوقائع لحسابهما. تظل مصالحتا الالتزام وأصول الخطة الإجماليتان قائمتين.",
        "The net roll-forward works if the 20X2 surplus is not ceiling-limited: 0 + 140 − 110 − 80 = 50 asset in 20X2; then −50 + 143 − 120 + 225 = 198 liability in 20X3; then 198 + 209.8 − 120 − 197.8 = 90 liability in 20X4. If the surplus is unavailable as a refund or contribution reduction, the recognised asset and ceiling effects in net interest and OCI change; the facts cannot quantify them. The gross obligation and asset reconciliations still hold."
      ),
    ],
    reference: "IAS 19.57, 64, 99–112, 120–130; IFRIC 14.7–9",
  },

  {
    id: "ifrs-book2-ias19-jett-timed-contributions-benefits",
    standardCode: "IAS 19",
    title: text("Jett: توقيت مساهمة الخطة ومدفوعات المنافع", "Jett: timing of plan contribution and benefit payments"),
    facts: text(
      "تغطي سنة Jett المنتهية في 31 يناير 20X8 اثني عشر شهرًا تبدأ في 1 فبراير 20X7. في بدايتها بلغت أصول خطة المنافع المحددة 4.1 ملايين دولار والتزامها 4.8 ملايين. دفعت الشركة مساهمة 680,000 دولار في 1 فبراير. دفعت الخطة منافع 440,000 على دفعتين متساويتين في 31 يوليو و31 يناير. معدل الخصم 6%، وعائد أصول الخطة الفعلي خلال السنة 282,000. تساوي تكلفة الخدمة الجارية 4.2% من أجور السنة البالغة 5.9 ملايين دولار. بلغت القيمة الحالية للالتزام في 31 يناير 4.95 ملايين. تُهمل الضريبة؛ تفترض الحسابات أن أصول الخطة مؤهلة وأن معدل الخصم المعطى مناسب.",
      "Jett's year ended 31 January 20X8 runs for twelve months from 1 February 20X7. Opening defined-benefit plan assets were $4.1 million and the obligation was $4.8 million. The employer contributed $680,000 on 1 February. The plan paid $440,000 of benefits in equal instalments on 31 July and 31 January. The discount rate is 6% and actual return on plan assets for the year is $282,000. Current service cost is 4.2% of annual wages of $5.9 million. The obligation's 31 January present value is $4.95 million. Ignore tax; the calculations assume qualifying plan assets and an appropriate stated discount rate."
    ),
    question: text(
      "أعد مصالحة الالتزام وأصول الخطة، واحسب صافي الفائدة وإعادة القياس ومبالغ الربح أو الخسارة والدخل الشامل الآخر وصافي الالتزام الختامي، مع مراعاة توقيت التدفقات النقدية.",
      "Reconcile the obligation and plan assets; calculate time-weighted net interest, remeasurements, profit or loss, OCI and the closing net liability."
    ),
    solution: [
      text(
        "تكلفة الخدمة الجارية = 5,900,000 × 4.2% = 247,800 دولار. دُفعت 220,000 من المنافع في 31 يوليو، و220,000 في 31 يناير؛ الدفعة الثانية لا تؤثر في فائدة السنة. فائدة الالتزام = 4,800,000 × 6% × 6/12 + (4,800,000 − 220,000) × 6% × 6/12 = 281,400. الرصيد المتوقع قبل إعادة القياس = 4,800,000 + 281,400 + 247,800 − 440,000 = 4,889,200؛ بالمقارنة مع 4,950,000 تظهر خسارة اكتوارية 60,800 في الدخل الشامل الآخر.",
        "Current service cost is $5,900,000 × 4.2% = $247,800. Benefits of $220,000 were paid on 31 July and $220,000 on 31 January; the second payment bears no interest in this year. Obligation interest is $4,800,000 × 6% × 6/12 + ($4,800,000 − $220,000) × 6% × 6/12 = $281,400. The obligation before remeasurement is $4,800,000 + $281,400 + $247,800 − $440,000 = $4,889,200; compared with $4,950,000 this gives a $60,800 actuarial loss in OCI."
      ),
      text(
        "تدخل مساهمة 680,000 في أصول الخطة منذ 1 فبراير. فائدة الأصول = (4,100,000 + 680,000) × 6% × 6/12 + (4,100,000 + 680,000 − 220,000) × 6% × 6/12 = 280,200. العائد الفعلي 282,000، ولذلك يكون عائد الأصول خارج الفائدة 1,800 مكسبًا في الدخل الشامل الآخر. الأصول الختامية = 4,100,000 + 680,000 − 440,000 + 282,000 = 4,622,000.",
        "The $680,000 contribution is in plan assets from 1 February. Asset interest is ($4,100,000 + $680,000) × 6% × 6/12 + ($4,100,000 + $680,000 − $220,000) × 6% × 6/12 = $280,200. Actual return was $282,000, so $1,800 is asset return beyond interest, an OCI gain. Closing assets are $4,100,000 + $680,000 − $440,000 + $282,000 = $4,622,000."
      ),
      text(
        "صافي مصروف الفائدة = 281,400 − 280,200 = 1,200؛ مع تكلفة الخدمة 247,800 يكون مصروف الربح أو الخسارة 249,000. صافي خسارة إعادة القياس في الدخل الشامل الآخر = 60,800 − 1,800 = 59,000. يظهر صافي التزام منافع محددة قدره 4,950,000 − 4,622,000 = 328,000. وتؤكد المصالحة: التزام افتتاحي 700,000 + مصروف 249,000 − مساهمة صاحب العمل 680,000 + خسارة دخل شامل آخر 59,000 = 328,000. تصنيف الالتزام إلى متداول أو غير متداول يتطلب معلومات عن التسوية والحقوق بتاريخ التقرير، فلا يستنتج من العجز وحده.",
        "Net interest expense is $281,400 − $280,200 = $1,200; with $247,800 service cost, profit-or-loss expense is $249,000. Net OCI remeasurement loss is $60,800 − $1,800 = $59,000. The net defined-benefit liability is $4,950,000 − $4,622,000 = $328,000. Cross-check: opening liability $700,000 + $249,000 expense − $680,000 employer contribution + $59,000 OCI loss = $328,000. Current/non-current classification needs settlement and reporting-date rights information; the deficit alone does not determine it."
      ),
    ],
    reference: "IAS 19.57, 113–115, 120–130; IAS 1.69",
  },

];

export function getIfrsPracticeCases(standardCode: string): IfrsPracticeCase[] {
  return IFRS_BOOK2_PRACTICE_CASES.filter(
    (practiceCase) => practiceCase.standardCode === standardCode,
  );
}
