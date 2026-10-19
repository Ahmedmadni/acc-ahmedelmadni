/** Original educational explanations mapped to IMA LOS A.1 and A.2; no textbook excerpts. */
export interface CmaTopicGuide {
  topicId: string;
  scope: { ar: string; en: string };
  concepts: { ar: string; en: string };
  workflow: { ar: string; en: string };
  pitfalls: { ar: string; en: string };
  practicalCase: {
    titleAr: string;
    titleEn: string;
    scenarioAr: string;
    scenarioEn: string;
    solutionAr: string;
    solutionEn: string;
  };
}

export const CMA_TOPIC_GUIDES: Record<string, CmaTopicGuide> = {
  "financial-statements": {
    topicId: "financial-statements",
    scope: {
      ar: "يتبع هذا الدليل أهداف IMA للجزء الأول A.1: مستخدمو القوائم الأربع وأغراضها وحدودها وتصنيف المعاملات والترابط بينها؛ إعداد التدفقات النقدية بالطريقة غير المباشرة؛ نماذج القوائم الموحدة الأمريكية وإلغاءات التعاملات الداخلية؛ ومفاهيم التقرير المتكامل ورؤوس الأموال الستة.",
      en: "Mapped to IMA Part 1 A.1: users, purposes, limitations, classifications and connections of the four statements; the indirect cash-flow method; U.S. GAAP consolidation models and intercompany eliminations; and integrated reporting with six capitals.",
    },
    concepts: {
      ar: "قائمة المركز المالي لقطة في تاريخ محدد: الأصول = الالتزامات + حقوق الملكية. تعرض قائمة الدخل الأداء خلال فترة، وينتقل صافي الربح إلى الأرباح المبقاة في قائمة التغيرات في حقوق الملكية. تفسر قائمة التدفقات تغير النقد عبر التشغيل والاستثمار والتمويل، ولا يساوي الربح النقد عادةً بسبب الاستحقاقات. في الطريقة غير المباشرة نبدأ بصافي الربح، ونضيف المصروفات غير النقدية، ونزيل أرباح بيع الأصول الداخلة في الربح، ثم نعكس تغيرات رأس المال العامل التشغيلي: زيادة الذمم المدينة تخصم وزيادة الدائنين تضاف. في القوائم الموحدة تُعرض المجموعة ككيان اقتصادي، وتُلغى المبيعات والأرصدة الداخلية؛ تميّز أهداف التعلم بين نموذج السيطرة عبر حقوق التصويت ونموذج المنشأة ذات المصلحة المتغيرة (VIE). التقرير المتكامل يربط الاستراتيجية والحوكمة والأداء بخلق القيمة عبر رؤوس الأموال: المالي، والمصنّع، والفكري، والبشري، والاجتماعي/العلاقاتي، والطبيعي.",
      en: "The balance sheet is a point-in-time snapshot: assets = liabilities + equity. The income statement covers a period, and net income flows into retained earnings in the statement of changes in equity. Cash flows explain changes in cash from operating, investing and financing activities; accrual income usually differs from cash. Under the indirect method, start with net income, add noncash expenses, remove gains on asset disposals included in income, and reverse operating working-capital changes: an increase in receivables is subtracted and an increase in payables added. Consolidation portrays the group as one economic entity and eliminates intercompany sales and balances; the LOS distinguishes voting-interest and variable-interest-entity (VIE) models under U.S. GAAP. Integrated reporting connects strategy, governance and performance to value creation through financial, manufactured, intellectual, human, social/relationship and natural capital.",
    },
    workflow: {
      ar: "1. حدد الفترة والكيان وأساس التقرير قبل تصنيف أي حركة. 2. اربط الإيرادات والمصروفات بصافي الربح ثم بالأرباح المبقاة. 3. صنف أرصدة نهاية الفترة في قائمة المركز المالي وتحقق من المعادلة. 4. استخرج التدفق التشغيلي من صافي الربح مع فصل البنود غير النقدية وتغيرات التشغيل، ثم أضف الاستثمار والتمويل وطابق التغير في النقد. 5. عند وجود مجموعة، أزل الأرصدة والعمليات بين شركاتها قبل قراءة الأرقام الموحدة. 6. في التقرير المتكامل، اربط الموارد والمخاطر والنتائج بقدرة المنشأة على خلق قيمة بمرور الوقت.",
      en: "1. Identify period, reporting entity and accounting basis before classifying transactions. 2. Connect revenues and expenses to net income and retained earnings. 3. Classify ending balances and verify the accounting equation. 4. Derive operating cash flow from income, noncash items and operating changes; add investing and financing cash flows and reconcile ending cash. 5. Eliminate intercompany balances and transactions before interpreting consolidated figures. 6. Connect resources, risks and outcomes to long-term value creation in the integrated report.",
    },
    pitfalls: {
      ar: "لا تعتبر زيادة الذمم المدينة تدفقًا نقديًا داخلًا، ولا تضف ربح بيع الأصل إلى التدفق التشغيلي بعد أن دخل ضمن صافي الربح؛ حصيلة البيع تعرض عادةً ضمن الاستثمار. لا تخلط رصيد النقد بنهاية الفترة مع صافي الربح. بيع بين شركتين داخل المجموعة ليس إيرادًا للمجموعة، وقد يلزم إلغاء ربح غير محقق في المخزون. التقرير المتكامل لا يحل محل القوائم المالية المدققة.",
      en: "An increase in receivables is not a cash inflow. Remove an asset-sale gain from indirect operating cash flow because proceeds generally belong in investing. Ending cash is not net income. An intercompany sale is not group revenue, and unrealized profit in remaining inventory may require elimination. An integrated report does not replace audited financial statements.",
    },
    practicalCase: {
      titleAr: "تسوية الربح إلى النقد التشغيلي",
      titleEn: "Reconcile earnings to operating cash",
      scenarioAr:
        "بلغ صافي الربح 120,000، والإهلاك 30,000، وربح بيع آلة 10,000، وزادت الذمم المدينة 20,000 والدائنون التجاريون 15,000. احسب التدفق النقدي التشغيلي بالطريقة غير المباشرة.",
      scenarioEn:
        "Net income is 120,000; depreciation 30,000; gain on machine sale 10,000; receivables rose 20,000 and trade payables rose 15,000. Compute cash flow from operations using the indirect method.",
      solutionAr:
        "120,000 + 30,000 − 10,000 − 20,000 + 15,000 = 135,000. نعيد الإهلاك لأنه غير نقدي؛ نطرح الربح المدرج في صافي الدخل حتى لا نكرر حصيلة بيع الآلة التشغيلية؛ نطرح زيادة الذمم ونضيف زيادة الدائنين. لا يمكن حساب صافي تغير النقد دون بيانات الاستثمار والتمويل.",
      solutionEn:
        "120,000 + 30,000 − 10,000 − 20,000 + 15,000 = 135,000. Add back noncash depreciation; remove the gain included in earnings (the sale proceeds are an investing cash flow); subtract the receivables increase and add the payables increase. Total change in cash also needs investing and financing cash flows.",
    },
  },
  "recognition-measurement": {
    topicId: "recognition-measurement",
    scope: {
      ar: "يغطي أهداف IMA للجزء الأول A.2: تقييم الذمم والمخزون والأوراق المالية والأصول طويلة الأجل؛ تصنيف الالتزامات والضمانات والضرائب المؤجلة والإيجارات؛ حركات حقوق الملكية؛ توقيت الاعتراف بالإيراد وقياس الدخل؛ وأوجه الاختلاف الرئيسية بين US GAAP وIFRS. الأمثلة تبين المبادئ ولا تستبدل الرجوع إلى المعايير السارية.",
      en: "Mapped to IMA Part 1 A.2: receivable, inventory, security and long-lived-asset valuation; liabilities, warranties, deferred taxes and leases; equity transactions; revenue and income measurement; and major U.S. GAAP/IFRS differences. Examples illustrate principles and do not replace current standards.",
    },
    concepts: {
      ar: "صافي الذمم = إجمالي الذمم − مخصص الخسائر الائتمانية. تحديد المخزون يتطلب التحقق من الملكية والتكاليف المسموح بها وافتراض تدفق التكلفة؛ في فترات ارتفاع الأسعار، ينتج FIFO عادةً مخزونًا ختاميًا وربحًا أعلى من LIFO، مع أن IFRS لا يسمح بـ LIFO. وفق US GAAP تُقاس أغلب أصناف المخزون بحد التكلفة أو صافي القيمة القابلة للتحقق، مع استثناءات LIFO وطريقة التجزئة؛ وفق IAS 2 الحد الأدنى هو التكلفة وصافي القيمة القابلة للتحقق. يتأثر الربح بالإهلاك والانخفاض في قيمة الأصول؛ ويؤدي اختلاف القيمة الدفترية والأساس الضريبي المؤقت إلى أصل أو التزام ضريبي مؤجل بحسب اتجاه الأثر المستقبلي. ميّز ضمان الإصلاح المضمن في البيع عن خدمة ضمان إضافية مستقلة. وفق نموذج الإيراد ذي الخطوات الخمس، حدد العقد والتزامات الأداء وسعر المعاملة وتوزيعه ثم اعترف بالإيراد عند الوفاء بالالتزام. في التحليل المقارن انتبه إلى فروق الإيجارات وإعادة تقييم الأصول ورسملة التطوير وخسائر الانخفاض بين الإطارين.",
      en: "Net receivables equal gross receivables less the allowance for credit losses. Inventory requires determining ownership, includable costs and a cost-flow assumption; during rising prices FIFO generally produces higher ending inventory and income than LIFO, which IFRS prohibits. U.S. GAAP generally uses lower of cost and net realizable value except for LIFO/retail-method inventories; IAS 2 uses lower of cost and net realizable value. Depreciation and impairment affect earnings; temporary differences between carrying amount and tax base may create deferred tax assets or liabilities depending on future tax effects. Distinguish an assurance warranty included with a sale from a separately priced service warranty. Under the five-step revenue model identify the contract, performance obligations, transaction price and allocation, then recognize revenue as each obligation is satisfied. In comparative analysis, consider framework differences in leases, revaluation, development costs and impairment reversals.",
    },
    workflow: {
      ar: "1. حدد إطار التقرير (US GAAP أو IFRS) قبل تطبيق قاعدة قياس. 2. تحقق من تاريخ انتقال السيطرة أو ملكية المخزون ومن وجود التزام حالي. 3. احسب التكلفة أو القيمة الدفترية ثم اختبر المخصصات أو الانخفاض عند اللزوم. 4. افصل الفروق المؤقتة الضريبية عن الدائمة؛ المؤقتة فقط تنشئ ضرائب مؤجلة. 5. للعقود مع العملاء، وزع المقابل على التزامات الأداء بحسب أسعار البيع المستقلة النسبية. 6. قيّم أثر الاختيار المحاسبي في الأصول والربح والنسب والإفصاح.",
      en: "1. Establish the reporting framework (U.S. GAAP or IFRS) before selecting a measurement rule. 2. Confirm control/ownership date and the existence of a present obligation. 3. Compute cost or carrying amount, then assess allowances and impairment where relevant. 4. Separate temporary from permanent tax differences; only the former give rise to deferred taxes. 5. Allocate customer consideration to performance obligations using relative stand-alone selling prices. 6. Assess how measurement choices change assets, income, ratios and disclosure.",
    },
    pitfalls: {
      ar: "لا تعامل مخصص خسائر الائتمان كمحو مباشر للذمم الإجمالية. لا تستخدم LIFO في قوائم IFRS، ولا تطبق استثناء تقييم LIFO الأمريكي على جميع المخزون. لا تنشئ أصلًا ضريبيًا مؤجلًا من فرق دائم. توزيعات الأسهم وتقسيم الأسهم لا يخلقان تدفقًا نقديًا للشركة. لا تعترف بكامل إيراد عقد متعدد الالتزامات عند تسليم عنصر واحد.",
      en: "An allowance does not erase the gross receivable. Do not use LIFO in IFRS financial statements or extend the U.S. LIFO valuation exception to all inventories. Permanent tax differences do not create deferred tax balances. Stock dividends and stock splits do not generate company cash flows. Do not recognize all consideration for a multi-obligation contract on delivery of just one component.",
    },
    practicalCase: {
      titleAr: "المخزون في فترة ارتفاع الأسعار",
      titleEn: "Inventory under rising prices",
      scenarioAr:
        "اشترت منشأة 100 وحدة بسعر 10 للوحدة ثم 100 وحدة بسعر 12، وباعت 120 وحدة. لا يوجد مخزون أول المدة. احسب تكلفة المبيعات والمخزون النهائي وفق FIFO وLIFO، مع تجاهل الضريبة.",
      scenarioEn:
        "A company buys 100 units at 10 each, then 100 at 12, and sells 120. There is no opening inventory. Compute COGS and ending inventory under FIFO and LIFO, ignoring tax.",
      solutionAr:
        "FIFO: تكلفة المبيعات = (100 × 10) + (20 × 12) = 1,240؛ المخزون = 80 × 12 = 960. LIFO: تكلفة المبيعات = (100 × 12) + (20 × 10) = 1,400؛ المخزون = 80 × 10 = 800. يزيد ربح FIFO عن LIFO بمقدار 160 إذا تساوت الإيرادات والمصروفات الأخرى. LIFO متاح في US GAAP ضمن الشروط ذات الصلة، وغير مسموح به وفق IFRS.",
      solutionEn:
        "FIFO: COGS = (100 × 10) + (20 × 12) = 1,240; ending inventory = 80 × 12 = 960. LIFO: COGS = (100 × 12) + (20 × 10) = 1,400; ending inventory = 80 × 10 = 800. FIFO income exceeds LIFO income by 160 if other items are equal. LIFO can be used under applicable U.S. GAAP rules but is prohibited by IFRS.",
    },
  },
};
