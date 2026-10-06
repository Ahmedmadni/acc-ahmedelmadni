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
      "كيف يُحدد عدد التزامات الأداء وتوقيت الإيراد في عقد الامتياز؟ وهل يجوز تسجيل 10,000 من رسم البداية في السنة الأولى و15,000 بعدها كل سنة مباشرة دون تحليل إضافي؟",
      "How should the franchise's performance obligations and revenue timing be determined? Can $10,000 of the upfront fee be recognised in year one and $15,000 annually thereafter without further analysis?",
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
        "بعد التوزيع يُعترف بإيراد كل التزام عند الوفاء به وبمقياس تقدم ملائم لما ينفذ على مدى الزمن. لا تسمح الوقائع الحالية باعتماد جدول 10,000 في السنة الأولى و15,000 لكل سنة لاحقة أو نسبة ربح نهائية؛ يلزم العقد وتقييم التمييز وطبيعة الترخيص وأسعار البيع المستقلة وأثر التمويل المحتمل أولًا.",
        "Recognise each allocated component when its promise is satisfied, using an appropriate progress measure for performance over time. The stated facts do not justify a definitive $10,000 first-year and $15,000 later-year schedule or profit margin: obtain the contract, distinctness assessment, licence nature, stand-alone prices and any financing analysis first.",
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
      "كم ربح البضاعة الباقية ضمن سعرها؟ ومتى يُستبعد عند التجميع، ولماذا لا يمكن الجزم بتعديل المخزون أو الإيراد الداخلي من البيانات الحالية؟",
      "How much profit is embedded in the unsold goods, when is it eliminated on consolidation, and why are the inventory and intragroup-revenue adjustments not definitive?",
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
    ],
    reference: "IFRS 10.20, B86(c)",
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
        "لا يتيح فائض إعادة التقييم القديم البالغ 40,000 دولار استخدامه تلقائيًا لامتصاص خسارة القيمة العادلة للسنة. يجب فحص تسوية الرصيد القديم عند الانتقال إلى IFRS أو تغيير السياسة المحاسبية على حدة، ومعرفة ما إذا كانت هذه أول قوائم IFRS؛ كما لا يمكن استخراج قائمة حقوق ملكية كاملة من هذا الجزء دون حسم ما إذا كان هبوط أصول التكلفة 25,000 دولار مدرجًا أصلًا في الربح المعطى.",
        "The old $40,000 local-rule revaluation surplus does not automatically absorb the year's fair-value loss. Analyse its opening-balance transition under first-time IFRS adoption or an accounting-policy change separately, including whether these are the first IFRS financial statements. The full equity statement is not determinable from this isolated part without resolving whether the $25,000 impairment of cost-model assets is already included in the stated profit.",
      ),
    ],
    reference: "IAS 40.33–35; IAS 8.19–22; IFRS 1.10–11",
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
      "Extract: متى نعترف بمخصص لا مجرد تكلفة مستقبلية؟",
      "Extract: when is a provision more than an expected future cost?",
    ),
    facts: text(
      "تستخرج Extract المعادن من موقع في Copperland، ولا تعالج تلوث الموقع إلا إذا أوجب القانون ذلك. في 23 ديسمبر 20X0 بلغ مجلس الإدارة توقعٌ بأن تشريعًا يلزم المنشآت بإصلاح مواقع التعدين سيصدر، وصدر التشريع فعليًا في 15 مارس 20X1. تقدر الشركة الإنفاق النقدي للإصلاح في نهاية 20X5 بمليوني دولار. لا يقدم هذا الجزء دليلًا موضوعيًا كافيًا على أن نص التشريع كان شبه مؤكد الإقرار بصيغته عند 31 ديسمبر 20X0، ولا يبين أي التلوث نشأ قبل أو بعد فرض الالتزام القانوني.",
      "Extract mines at a Copperland site and remediates contamination only where legislation requires it. On 23 December 20X0 directors expected a law obliging remediation of mining sites; the law was actually enacted on 15 March 20X1. Extract estimates $2m cash restoration expenditure at the end of 20X5. This part supplies insufficient objective evidence that the drafted law was virtually certain to be enacted as worded by 31 December 20X0, and does not separate contamination before and after the legal obligation arose.",
    ),
    question: text(
      "لماذا يشترط IAS 37 ضوابط لإثبات المخصص، وما شروطه الثلاثة؟ وهل يكفي مجرد توقع الإدارة صدور قانون لتسجيل مليوني دولار في 20X0؟",
      "Why does IAS 37 constrain provision recognition, what are its three conditions, and is management's expectation of a future law alone enough to record the $2m in 20X0?",
    ),
    solution: [
      text(
        "لا يُستخدم المخصص لتقديم خسائر التشغيل المستقبلية أو تكاليف يمكن تجنبها بتغيير النشاط إلى سنة حالية. إثباته يحتاج التزامًا حاليًا قانونيًا أو ضمنيًا نتج من حدث ماضٍ، ورجحان خروج موارد لتسويته، وإمكان تقدير المبلغ بثقة كافية؛ إن غاب شرط فلا يثبت المخصص.",
        "A provision cannot move future operating losses or avoidable future costs into the current year. Recognition requires a present legal or constructive obligation from a past event, probable outflow to settle it and a sufficiently reliable estimate; if a condition fails, no provision is recognised.",
      ),
      text(
        "مجرد توقع مجلس الإدارة أن البرلمان سيصدر قانونًا لا يكفي وحده لإثبات التزام قائم في 31 ديسمبر 20X0. عند الاعتماد على تشريع لم يُسن بعد، يجب إثبات أن إقراره بصيغته شبه مؤكد عند تاريخ التقرير وتحديد الحدث الملزم؛ صدوره لاحقًا في مارس لا يحول التوقع السابق تلقائيًا إلى التزام في ديسمبر.",
        "The board's prediction that legislation will pass does not by itself establish a 31 December 20X0 obligation. For an unenacted law, evidence that enactment as drafted was virtually certain at the reporting date and identification of the obligating event are needed; enactment the following March does not retroactively turn a prediction into a December obligation.",
      ),
      text(
        "حتى إذا ثبت الالتزام بعد صدور القانون، يلزم قياس أفضل تقدير لتدفقات الإصلاح وخصمها عند جوهرية أثر الزمن، ثم تحليل مكان تحميل التكلفة بين أصل مؤهل ومصروف وفق المعيار الخاص بالأصل وسبب التلوث. لا تنتج الوقائع المتاحة وحدها رقم مخصص أو أصل قاطع لسنة 20X0.",
        "If an obligation is established after enactment, measure the best estimate of settlement cash flows and discount when the time-value effect is material. Then analyse whether the cost belongs to a qualifying asset or expense under the relevant asset standard and the cause of contamination. These facts alone do not yield a definitive 20X0 provision or asset amount.",
      ),
    ],
    reference: "IAS 37.14–22, 36, 45; IAS 16.16(c)–18",
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
      "للسنة المنتهية في 31 مايو 20X5، منحت Vident في 1 يونيو 20X3 عدد 20,000 خيار للمدير الأول، القيمة العادلة يوم المنح 5 دولارات للخيار وسعر الممارسة 4.50. يشترط نمو ربحية السهم السنوية 4% مع استمرار الخدمة حتى 1 يونيو 20X5؛ معدلات النمو الفعلية المعطاة 4.5% ثم 4.1% ثم 4.2%، ولم يغادر المدير. ومنحت في 1 يونيو 20X4 عدد 50,000 خيار لمدير ثانٍ، قيمتها العادلة يوم المنح 6 دولارات وسعر الممارسة 6؛ تتطلب خدمته ثلاث سنوات حتى 1 يونيو 20X7 وبلوغ السهم مستوى أعلى من 13.50 دولار، بينما سعره في 31 مايو 20X5 هو 12. لم يغادر أي مدير ولا يُتوقع مغادرته قبل الاستحقاق. Vident تنتقل إلى IFRS في السنة الحالية، ويطلب السؤال تعديل افتتاحي 1 يونيو 20X4 ومصروف السنة.",
      "For the year ended 31 May 20X5, Vident granted 20,000 options to one director on 1 June 20X3 at grant-date fair value $5 per option and exercise price $4.50. Annual EPS growth of at least 4% and continued service until 1 June 20X5 are required; stated growth rates are 4.5%, 4.1% and 4.2%, and the director remains employed. Another director received 50,000 options on 1 June 20X4, grant-date fair value $6 and exercise price $6; three years' service to 1 June 20X7 and a share price above $13.50 are required. The 31 May 20X5 share price is $12. Neither director has left or is expected to leave before vesting. Vident adopts IFRS in the current year; the question asks for the 1 June 20X4 opening adjustment and current-year expense.",
    ),
    question: text(
      "اشرح سبب إثبات خدمة المديرين مصروفًا، وفصل شرط الأداء غير السوقي عن الشرط السوقي، ثم احسب التعديل الافتتاحي ومصروف 20X5 ورصيد احتياطي الخيارات.",
      "Explain why the directors' services are expensed, distinguish the non-market from the market condition, then calculate the opening adjustment, 20X5 expense and option reserve.",
    ),
    solution: [
      text(
        "تُقابل الخيارات خدمة المديرين التي تستهلكها المنشأة؛ عدم دفع نقد لا يلغي تكلفة الخدمة. إثبات المصروف يعكس تلقي الخدمة، بينما ربحية السهم المخفضة تعكس احتمال زيادة عدد الأسهم، فلا يوجد احتساب مزدوج للحدث نفسه.",
        "The options are consideration for director services consumed by the entity; the absence of a cash payment does not make the service free. Expense recognition reflects receiving services, whereas diluted EPS depicts possible additional shares, so these are not duplicate recognition of the same event.",
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
    reference: "IFRS 2.14–23; IFRS 1.D2; IAS 33.31–32",
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
];

export function getIfrsPracticeCases(standardCode: string): IfrsPracticeCase[] {
  return IFRS_BOOK2_PRACTICE_CASES.filter(
    (practiceCase) => practiceCase.standardCode === standardCode,
  );
}
