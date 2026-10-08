import type { StandardStudyExpansion, StudyText } from "./ifrs-standard-study-expansions";

const text = (ar: string, en: string): StudyText => ({ ar, en });

/**
 * Additional applied material reviewed against the cited IFRS requirements.
 * Source-page and acquisition records stay in the private editorial audit;
 * learner-facing references identify the applicable Standard only.
 */
export const IFRS_BOOK2_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> = {
  "IFRS 6": {
    sections: [
      {
        title: text("بوابة نطاق الاستكشاف: حق قانوني لا ملكية أرض", "Exploration scope gate: legal right, not land ownership"),
        explanation: text(
          "يبدأ نطاق IFRS 6 بعد حصول المنشأة على حق قانوني للاستكشاف في منطقة محددة وينتهي عندما يمكن إثبات الجدوى الفنية والقدرة التجارية للاستخراج. لا يشترط المعيار امتلاك الأرض؛ قد يكون الحق ترخيصًا أو امتيازًا منفصلًا. تحدد سياسة محاسبية متسقة أي نفقات الاستكشاف والتقييم ترتبط بالبحث عن مورد محدد وتُعترف بها أصلًا؛ اقتناء الحق والحفر الاستكشافي من الأمثلة المحتملة، ولا تعني القائمة رسملة كل إنفاق تلقائيًا. افصل تكلفة شراء الأرض نفسها، والمصاريف الإدارية العامة غير المرتبطة مباشرة، والإنفاق على الاستخراج بعد مرحلة الاستكشاف. كون بند خارج IFRS 6 لا يحدد وحده هل هو مصروف فوري أم مخزون أو أصل وفق معيار آخر.",
          "IFRS 6 applies after an entity obtains a legal right to explore a specified area and before technical feasibility and commercial viability of extraction are demonstrable. The entity need not own the land: a separate licence or concession may supply the legal right. A consistently applied accounting policy identifies which exploration and evaluation expenditure associated with finding a specific resource is recognised as an asset. Acquiring rights and exploratory drilling are possible elements, not an automatic capitalisation rule. Separate the acquisition of land itself, unrelated general administration and extraction after the exploration phase. An item being outside IFRS 6 does not by itself prove it is immediately expensed rather than inventory or an asset under another Standard.",
        ),
        keyPoints: [
          text("تحقق من تاريخ الحق القانوني وتاريخ ثبوت الجدوى قبل تصنيف أي فاتورة.", "Check the legal-right and feasibility dates before classifying each invoice."),
          text("المبلغ المعروض بوحدة «ألف دولار» لا يُقرأ على أنه دولار واحد لكل وحدة رقمية.", "An amount stated in thousands of dollars must not be read as a dollar amount."),
          text("إذا نشأ التزام إزالة أو إعادة تأهيل من الاستكشاف، افحص IAS 37 منفصلًا.", "If exploration creates a removal or restoration obligation, assess IAS 37 separately."),
        ],
        reference: "IFRS 6.3–11, Appendix A; IAS 16; IAS 37",
      },
    ],
    workedExamples: [
      {
        title: text("فرز تكاليف Gold Diggers حسب المرحلة", "Gold Diggers: classify costs by phase"),
        facts: text(
          "خلال سنة الاستكشاف والتقييم تكبدت منشأة تعدين، بالألف دولار: مصروفًا قانونيًا لاقتناء الأرض 15,000، وللحصول على حق استكشافها 12,000، وحفرًا استكشافيًا 123,000، وأعباء إدارية عامة موزعة على المشروع 25,000، واستخراج ذهب 152,000. يفترض المثال وجود حق قانوني للاستكشاف وأن سياسة المنشأة ترسمل النفقات المباشرة المؤهلة.",
          "During an exploration and evaluation year a miner incurred, in US$ thousands: legal costs of acquiring land 15,000; legal costs of obtaining exploration rights 12,000; exploratory drilling 123,000; allocated general administration 25,000; and gold extraction 152,000. The illustration assumes a legal exploration right and a policy that capitalises qualifying direct expenditure.",
        ),
        calculations: [
          text("نفقات الاستكشاف والتقييم التي يمكن إدراجها في الأصل وفق السياسة المفترضة = 12,000 + 123,000 = 135,000 ألف دولار.", "Potential exploration and evaluation asset under the stated policy = 12,000 + 123,000 = US$135,000 thousand."),
          text("مصروف اقتناء الأرض 15,000 ألف دولار منفصل عن أصل الاستكشاف؛ يدخل في تكلفة الأرض إذا استوفى شروط IAS 16.", "Land-acquisition legal cost of US$15,000 thousand is separate from the exploration asset and enters land cost if IAS 16 criteria are met."),
          text("الأعباء الإدارية العامة 25,000 ألف دولار لا تندرج لمجرد توزيعها على المشروع؛ وتكلفة استخراج الذهب 152,000 ألف دولار تقع بعد نطاق الاستكشاف وتحتاج تحليل معيارها اللاحق.", "Allocated general administration of US$25,000 thousand is not included merely because it was allocated; US$152,000 thousand of gold extraction occurs outside the exploration phase and needs analysis under the later applicable Standard."),
        ],
        conclusion: text(
          "الجواب عن «ما الذي يمكن رسملته كأصل استكشاف وتقييم وفق IFRS 6؟» هو حقوق الاستكشاف والحفر، بإجمالي 135,000 ألف دولار وفق السياسة المفترضة. لا يُقرر هذا الجواب مصير تكاليف الاستخراج وفق IAS 2 أو تكلفة الأرض وفق IAS 16 من دون الوقائع اللازمة.",
          "For the question 'which costs may be capitalised as IFRS 6 exploration and evaluation assets?', the rights and drilling total US$135,000 thousand under the assumed policy. That answer does not settle the subsequent IAS 2 treatment of extraction costs or IAS 16 land costs without further facts.",
        ),
        journalEntries: [
          { label: text("إثبات النفقات المباشرة المؤهلة وفق السياسة", "Recognise qualifying direct expenditure under the policy"), debit: text("أصل استكشاف وتقييم", "Exploration and evaluation asset"), credit: text("نقدية/دائنون", "Cash/payables"), amount: text("135,000 ألف دولار", "US$135,000 thousand") },
        ],
        reference: "IFRS 6.3–11, Appendix A; IAS 16; IAS 37",
      },
    ],
  },
  "IAS 2": {
    sections: [
      {
        title: text("التقييم صنفًا بصنف: التكلفة أم صافي القيمة القابلة للتحقق؟", "Item-by-item valuation: cost or net realisable value?"),
        explanation: text(
          "كوّن تكلفة كل صنف من تكلفة الشراء والتحويل والتكاليف اللازمة لإيصاله إلى مكانه وحالته الحاليين. قد يدخل نصيبه المنتظم من تكاليف الإنتاج المؤهلة، لكن تكلفة البيع ليست جزءًا من تكلفة المخزون. احسب صافي القيمة القابلة للتحقق من سعر البيع المتوقع في النشاط المعتاد بعد طرح تكلفة الإتمام والتكاليف الضرورية لإتمام البيع، ثم خذ الأقل من التكلفة وهذا الصافي لكل صنف أو مجموعة مناسبة؛ لا تعوض خسارة صنف بزيادة محتملة في صنف آخر. إذا كان الصافي أقل، أثبت التخفيض مصروفًا للفترة. قيّم ما يلزم للبيع وفق الوقائع، فلا تحصره آليًا في التكاليف الإضافية لكل صفقة فقط.",
          "Build each item's cost from purchase, conversion and other costs needed to bring it to its present location and condition. Eligible systematically allocated production overhead may be included, but selling costs are not inventory cost. Determine net realisable value from the expected ordinary-course selling price less estimated completion costs and costs necessary to make the sale. Carry each item or appropriate group at the lower of cost and that net amount; do not offset one item's shortfall against another item's potential upside. Recognise a necessary write-down as a period expense. Judge which selling costs are necessary on the facts; they are not automatically limited to costs incremental to an individual sale.",
        ),
        keyPoints: [
          text("أضف أعباء الإنتاج المؤهلة إلى التكلفة، لكن اطرح تكاليف البيع عند حساب صافي القيمة القابلة للتحقق.", "Add eligible production overhead to cost, but deduct necessary selling costs when calculating net realisable value."),
          text("قارن التكلفة والصافي لكل صنف قبل ضرب القيمة المختارة في الكمية.", "Compare cost and net realisable value per item before multiplying the selected amount by units held."),
          text("إذا ارتفع الصافي لاحقًا، تُراجع خسارة التخفيض السابقة في حدود التكلفة الأصلية.", "If net realisable value later rises, reverse a prior write-down only up to original cost."),
        ],
        reference: "IAS 2.6, 9–16, 28–34",
      },
    ],
    workedExamples: [
      {
        title: text("تقييم صنفين عند نهاية الفترة", "Valuing two inventory items at period-end"),
        facts: text(
          "لدى المنشأة 300 وحدة من الصنف A: مواد 160 دولارًا، أعباء إنتاج مؤهلة 15، تكلفة بيع ضرورية 12، وسعر بيع متوقع 185 للوحدة. ولديها 250 وحدة من B: مواد 50، أعباء إنتاج 10، تكلفة بيع 10، وسعر بيع 75 للوحدة. لا توجد تكلفة إتمام إضافية مذكورة.",
          "The entity holds 300 units of item A: materials US$160, eligible production overhead US$15, necessary selling costs US$12 and expected selling price US$185 per unit. It also holds 250 units of B: materials 50, overhead 10, selling costs 10 and selling price 75 per unit. No additional completion costs are specified.",
        ),
        calculations: [
          text("A: التكلفة للوحدة = 160 + 15 = 175؛ الصافي = 185 − 12 = 173؛ القيمة المختارة = 173 × 300 = 51,900 دولار.", "A: unit cost = 160 + 15 = 175; NRV = 185 − 12 = 173; selected carrying amount = 173 × 300 = US$51,900."),
          text("B: التكلفة للوحدة = 50 + 10 = 60؛ الصافي = 75 − 10 = 65؛ القيمة المختارة = 60 × 250 = 15,000 دولار.", "B: unit cost = 50 + 10 = 60; NRV = 75 − 10 = 65; selected carrying amount = 60 × 250 = US$15,000."),
          text("إجمالي المخزون = 51,900 + 15,000 = 66,900 دولار؛ تخفيض A = (175 − 173) × 300 = 600 دولار، ولا تخفيض لـB.", "Total inventory = 51,900 + 15,000 = US$66,900; A write-down = (175 − 173) × 300 = US$600, with no write-down for B."),
        ],
        conclusion: text("لا ترفع B إلى صافي قيمته 65 لموازنة خسارة A؛ الزيادة فوق التكلفة لا تُعترف بها.", "Do not raise B to its US$65 NRV to offset A's write-down; an increase above cost is not recognised."),
        journalEntries: [
          { label: text("تخفيض A في نهاية الفترة", "Period-end write-down of A"), debit: text("مصروف تخفيض مخزون", "Inventory write-down expense"), credit: text("مخزون أو مخصص تخفيضه", "Inventory or valuation allowance"), amount: text("600 دولار", "US$600") },
        ],
        reference: "IAS 2.6, 9–16, 28–34",
      },
    ],
  },
  "IAS 12": {
    sections: [
      {
        title: text("الضريبة الجارية: فرّق بين التزام السنة وتصحيح تقدير السنة السابقة", "Current tax: separate this year's charge from a prior-year estimate adjustment"),
        explanation: text(
          "تُقاس ضريبة الدخل الجارية بالمبلغ المتوقع دفعه أو استرداده وفق القانون ومعدلات الضريبة المقررة أو المقررة موضوعيًا بنهاية الفترة. عند حسم تقدير سنة سابقة، لا تعِد حساب ضريبة السنة الجارية على ربح السنة السابقة؛ أثبت الفرق بين التقدير والربط النهائي في مصروف الضريبة للفترة التي عُرف فيها، ما لم يكن مرتبطًا ببند اعترف به خارج الربح أو الخسارة. افصل حساب ضريبة الفترة الحالية عن رصيد مستحق أو مسترد السنة السابقة. ولا تعرض الأصل والمطلوب الضريبيين بصافي مبلغ لمجرد أنهما يخصان المنشأة ذاتها؛ يلزم حق قانوني نافذ في المقاصة ونية التسوية صافيًا أو المتزامنة. هذا ضبط لضريبة جارية، لا أصل أو التزام ضريبة مؤجلة.",
          "Measure current income tax at the amount expected to be paid or recovered under tax law and rates enacted or substantively enacted by period-end. When a prior-year estimate is finalised, do not recompute this year's tax on last year's profit: recognise the estimate-to-final-assessment difference in the period it becomes known, unless it relates to an item recognised outside profit or loss. Keep the current-period obligation distinct from a prior-year payable or receivable. Do not net a tax asset and liability merely because they belong to the same entity: an enforceable set-off right and an intention to settle net or simultaneously are needed. This is a current-tax true-up, not deferred tax.",
        ),
        keyPoints: [
          text("احسب ضريبة ربح السنة الحالية، ثم صحح تقدير السنة السابقة بخطوة مستقلة.", "Compute tax on current-year taxable profit, then true up the prior estimate separately."),
          text("فرّق بين مصروف الضريبة الإجمالي والعرض الصافي للأصل والمطلوب عند تحقق شروط المقاصة.", "Distinguish total tax expense from net presentation of assets and liabilities when offset criteria are met."),
          text("التعديل اللاحق لتقدير سابق لا يصبح ضريبة مؤجلة بسبب تأخر التسوية النقدية.", "A later correction of a prior estimate is not deferred tax merely because cash settlement is delayed."),
        ],
        reference: "IAS 12.12, 46, 58, 71",
      },
      {
        title: text("الاستحواذ: فرق القيمة العادلة والأساس الضريبي يؤثر في الشهرة", "Acquisition: the fair-value versus tax-base difference affects goodwill"),
        explanation: text(
          "عند قياس أصل مقتنى في تجميع أعمال بقيمته العادلة في القوائم المجمعة، افحص ما إذا عدّل قانون الضريبة أساسه الضريبي أيضًا. إذا بقي الأساس أقل من القيمة الدفترية، ينتج فرق مؤقت خاضع للضريبة والتزام ضريبة مؤجلة بمعدل الضريبة المتوقع عند الانعكاس وفق القوانين النافذة. يُعترف بالتزام الضريبة المؤجلة في محاسبة الاستحواذ، فيخفض صافي الأصول القابلة للتحديد عند الشراء، ويرفع الشهرة بالمقدار نفسه مقارنة بحساب الشهرة دون الضريبة؛ لا تضع ضريبة فرق الاستحواذ مباشرة في مصروف الفترة عند الاعتراف الأول. لا تخلط ذلك باستثناء عدم إثبات ضريبة مؤجلة تنشأ من الاعتراف الأول بالشهرة نفسها، ولا تفترض أن كل زيادة في القيمة العادلة تولد ضريبة مؤجلة إذا تعدل الأساس الضريبي بالمقابل.",
          "When an acquired asset is measured at fair value in consolidated business-combination accounting, check whether tax law also resets its tax base. If the tax base remains below the carrying amount, a taxable temporary difference creates a deferred tax liability measured using the tax rate expected on reversal under enacted or substantively enacted law. Recognise the liability within acquisition accounting: it reduces identifiable net assets at acquisition and raises goodwill by the same amount relative to goodwill calculated without that tax. Do not put the acquisition-date tax effect directly in period expense. This differs from the exception for deferred tax arising on initial recognition of goodwill itself, and no difference arises merely from a fair-value uplift if the tax base is also reset.",
        ),
        keyPoints: [
          text("قارن القيمة الدفترية المجمعة بالأساس الضريبي للأصل في تاريخ الاستحواذ.", "Compare consolidated carrying amount with the asset's tax base at acquisition."),
          text("أثبت ضريبة فرق الأصل القابل للتحديد ضمن محاسبة الشراء، لا باعتبار الشهرة نفسها أساسًا للضريبة.", "Recognise tax on the identifiable asset's difference within purchase accounting, not as tax on goodwill itself."),
          text("راجع قانون الولاية الضريبية ومعدل الانعكاس قبل ضرب الفرق في النسبة.", "Check the jurisdiction's tax law and reversal rate before multiplying the difference."),
        ],
        reference: "IAS 12.15, 19, 47, 66; IFRS 3.10, 18",
      },
      {
        title: text("ربح المخزون داخل المجموعة: استرداد ضريبي بمعدل المشتري", "Intragroup inventory profit: deferred tax at the buyer's rate"),
        explanation: text(
          "إذا باعت شركة في المجموعة مخزونًا لشركة تابعة وما زال المخزون لدى المشتري بنهاية الفترة، تُلغى الأرباح غير المحققة في القوائم المجمعة. قد يبقى الأساس الضريبي للمخزون في دفاتر المشتري مساويًا لسعر شرائه الداخلي، بينما تنخفض قيمته الدفترية المجمعة إلى تكلفة المجموعة؛ هنا ينشأ فرق مؤقت قابل للخصم. استخدم معدل الضريبة المتوقع عند استرداد المخزون في ولاية الشركة التي ستحصل على الخصم الضريبي، لا معدل البائع لمجرد أنه سدد ضريبة الربح الداخلي. يعترف بأصل الضريبة المؤجلة فقط بقدر احتمال وجود ربح خاضع في الولاية الملائمة يسمح باستخدام الخصم. الضريبة الجارية التي ترتبت على البائع أمام سلطته الضريبية لا تُلغى كمعاملة داخلية، ثم ينعكس الأصل المؤجل عند بيع المخزون لطرف خارجي، مع إعادة فحص معدل الضريبة والأساس الضريبي الفعليين.",
          "If one group company sells inventory to another and the buyer still holds it at period-end, eliminate the unrealised profit in consolidated accounts. The buyer's tax base may remain at its intragroup purchase price while consolidated carrying amount falls to group cost, creating a deductible temporary difference. Use the rate expected when the inventory is recovered in the jurisdiction that receives the tax deduction, not the seller's rate merely because the seller paid tax on its intragroup profit. Recognise a deferred tax asset only to the extent probable taxable profit in the appropriate jurisdiction will permit use of the deduction. Do not eliminate the seller's tax payable to its authority as an intragroup item. The deferred tax reverses when the inventory is sold outside the group, subject to the actual tax base and reversal rate.",
        ),
        keyPoints: [
          text("ألغِ الربح الداخلي قبل مقارنة القيمة الدفترية المجمعة بأساس المشتري الضريبي.", "Eliminate internal profit before comparing group carrying amount with the buyer's tax base."),
          text("معدل البائع يفسر ضريبته الجارية، ومعدل المشتري يقيس أثر خصمه المستقبلي.", "The seller's rate explains its current tax; the buyer's rate measures its future deduction."),
          text("اختبر احتمال توفر الربح الخاضع المناسب قبل إثبات أصل الضريبة المؤجلة.", "Test probable suitable taxable profit before recognising the deferred tax asset."),
        ],
        reference: "IAS 12.5, 24, 28–29, 47; IFRS 10.B86(c)",
      },
      {
        title: text("من القيمة الدفترية إلى الأساس الضريبي: الإهلاك وتكاليف التطوير", "From carrying amount to tax base: depreciation and development costs"),
        explanation: text(
          "ابدأ بتحديد القيمة الدفترية للأصل وفق معيارها المحاسبي، ثم احسب المبلغ الذي سيبقى قابلًا للخصم ضريبيًا عند استرداد الأصل وفق قانون الولاية المعنية. إذا سبق الإهلاك الضريبي الإهلاك المحاسبي، تقل القاعدة الضريبية عن القيمة الدفترية وينشأ فرق مؤقت خاضع للضريبة، حتى لو لم تتغير تكلفة الأصل. وبالمثل، إذا رُسملت تكاليف تطوير مستوفية IAS 38 محاسبيًا لكنها خُصمت ضريبيًا بالكامل عند إنفاقها، فقد يبقى أصل محاسبي بأساس ضريبي صفر. اضرب الفرق في معدل الضريبة المتوقع عند انعكاسه والمقرر أو المقرر موضوعيًا بنهاية الفترة، ثم قارِن رصيد الضريبة المؤجلة المطلوب برصيد افتتاحها لاستخراج مصروف الفترة. لا تصنف كل فرق بين ربح المحاسبة وربح الضريبة ضريبةً مؤجلة؛ يلزم تحليل أساس الأصل أو الالتزام وما سيحدث عند استرداده أو تسويته.",
          "First establish the asset's carrying amount under its accounting Standard, then determine the deduction that will remain available for tax when it is recovered under the relevant jurisdiction's law. If tax depreciation runs ahead of accounting depreciation, the tax base falls below carrying amount and creates a taxable temporary difference even though original cost is unchanged. Likewise, qualifying development costs capitalised under IAS 38 but fully deducted for tax when incurred may leave an accounting asset with a nil tax base. Apply the tax rate expected on reversal under law enacted or substantively enacted by period-end, then compare required closing deferred tax with its opening balance to find the period charge. Not every accounting-versus-tax profit difference is deferred tax: analyse the asset's or liability's tax base and future recovery or settlement.",
        ),
        keyPoints: [
          text("القيمة الدفترية تُحسب بقواعد المحاسبة، والأساس الضريبي بقواعد الخصم المستقبلي.", "Carrying amount follows accounting rules; tax base follows future tax-deduction rules."),
          text("رصيد الضريبة المؤجلة الختامي ليس تلقائيًا مصروف السنة؛ احسب حركته.", "The closing deferred-tax balance is not automatically this year's expense; calculate its movement."),
          text("اختبر تاريخ بدء إهلاك الأصل المعنوي ولا تعترف باستهلاك قبل جاهزيته للاستخدام.", "Check when an intangible becomes available for use; do not amortise it earlier."),
        ],
        reference: "IAS 12.7, 15, 17, 47, 58; IAS 38.97",
      },
      {
        title: text("اختبار الأساس الضريبي: لا تحكم من اسم الحساب وحده", "Tax-base test: the account name alone is not enough"),
        explanation: text(
          "اسأل عن الأثر الضريبي لاسترداد الأصل أو تسوية الالتزام مستقبلًا. أساس الأصل هو ما سيخصم من منافع الاسترداد الخاضعة للضريبة؛ وإذا كانت تلك المنافع غير خاضعة أصلًا، فعادةً يعادل الأساس القيمة الدفترية. أما أساس الالتزام فهو قيمته الدفترية ناقص ما سيُخصم ضريبيًا عند تسويته؛ والإيراد المقبوض مقدمًا الذي ضُرّب بالفعل يخفض أساس التزامه بمقدار الإيراد الذي لن يخضع ثانيةً. لذلك قد يكون للذمة المدينة أساس صفر إن تُفرض الضريبة عند التحصيل، أو أساس يساوي رصيدها إن سبق خضوع الإيراد. وقد يكون للمصروف المستحق أساس صفر إذا لم يُخصم إلا عند الدفع، أو يساوي الالتزام إذا استنفد الخصم بالفعل. الغرامات غير القابلة للخصم والقروض التي لا يترتب على سداد أصلها أثر ضريبي لا تولد فروقًا مؤقتة لمجرد وجود رصيد محاسبي. حدّد أولًا قانون الولاية وطريقة الاسترداد ثم قرر إن كان الفرق خاضعًا أم قابلًا للخصم، ولا تفترض تلقائيًا إثبات أصل ضريبي مؤجل دون اختبار احتمالية استخدامه.",
          "Ask what tax consequence follows when an asset is recovered or a liability settled. An asset's tax base is the amount deductible against taxable recovery; if the benefits are not taxable, its tax base generally equals carrying amount. A liability's tax base is carrying amount less any future tax deduction on settlement; for revenue already taxed when received in advance, subtract the amount that will not be taxed again. A receivable can therefore have a nil tax base if taxed on collection, or a tax base equal to its balance if the income was already taxed. An accrued expense can have a nil tax base if deductible only on payment, or one equal to the liability if the deduction was already used. Non-deductible fines and tax-neutral loan principal do not create temporary differences merely because accounting balances exist. Identify the jurisdiction's rule and recovery path before classifying a difference, and do not automatically recognise a deferred tax asset without testing probable utilisation.",
        ),
        keyPoints: [
          text("للأصول: ما الخصم الباقي مقابل المنافع المستقبلية الخاضعة للضريبة؟", "For assets: what deduction remains against future taxable benefits?"),
          text("للالتزامات: ما الخصم المستقبلي عند السداد، أو ما الإيراد الذي لن يعاد فرض الضريبة عليه؟", "For liabilities: what future deduction arises on settlement, or what income will not be taxed again?"),
          text("فرق دائم مثل غرامة غير قابلة للخصم لا يساوي أصل ضريبة مؤجلة.", "A permanent non-deductible fine is not a deferred tax asset."),
        ],
        reference: "IAS 12.5, 7–10, 15, 24",
      },
      {
        title: text("ضريبة إعادة التقييم: افصل رصيد الفرق القديم عن حركة الدخل الشامل", "Revaluation tax: separate the old difference from the OCI movement"),
        explanation: text(
          "إذا زادت القيمة الدفترية لأصل وفق نموذج إعادة التقييم في IAS 16 ولم يتغير أساسه الضريبي، يتسع الفرق المؤقت الخاضع للضريبة. احسب أولًا كامل رصيد الالتزام المؤجل في تاريخ التقرير من القيمة الدفترية الجديدة ناقص الأساس الضريبي؛ ثم حلّل الفرق إلى جزء كان موجودًا قبل إعادة التقييم وجزء نشأ من الزيادة الجديدة. يتبع الأثر الضريبي للزيادة المعترف بها في الدخل الشامل الآخر المكان نفسه، فلا يصبح كله مصروفًا في الربح أو الخسارة لمجرد أن رصيد الالتزام المؤجل يظهر في قائمة المركز المالي. وإذا كان قبل إعادة التقييم فرق ناتج من اختلاف الإهلاك، فيجب الرجوع إلى رصيد الضريبة المؤجلة الافتتاحي وحركاته قبل وصفه بأنه مصروف السنة الحالية. يفترض المثال أن زيادة إعادة التقييم كلها في OCI ولا تعكس انخفاضًا سابقًا مسجلًا في الربح أو الخسارة؛ إن تغير هذا الواقع، يتبع الأثر الضريبي موضع الاعتراف الفعلي للزيادة.",
          "If IAS 16 revaluation increases an asset's carrying amount without resetting its tax base, the taxable temporary difference grows. First calculate the full reporting-date deferred tax liability from new carrying amount less tax base; then distinguish the difference already present before revaluation from the new uplift. The tax effect of an uplift recognised in other comprehensive income follows it into OCI; the entire closing liability is not this year's profit-or-loss tax expense merely because it appears on the statement of financial position. If a pre-revaluation difference arose from depreciation timing, inspect opening deferred tax and intervening movements before calling it a current-period charge. These illustrations assume the uplift is wholly in OCI and does not reverse a prior profit-or-loss revaluation loss; otherwise follow the actual location of the recognised gain.",
        ),
        keyPoints: [
          text("احسب الرصيد الكلي أولًا ثم وزع حركته وفق موضع الاعتراف بالمعاملة الأصلية.", "Compute the total balance first, then allocate its movement to where the underlying event was recognised."),
          text("ضريبة زيادة إعادة التقييم في OCI إذا كانت الزيادة نفسها في OCI.", "Tax on an OCI revaluation increase also belongs in OCI."),
          text("لا تضع فرق الإهلاك المتراكم القديم في مصروف السنة دون رصيد افتتاحي وحركة مثبتة.", "Do not charge an old cumulative depreciation difference to this year without an opening balance and demonstrated movement."),
        ],
        reference: "IAS 12.20, 47, 58, 61A–62; IAS 16.39, 42",
      },
      {
        title: text("خسارة تُرحّل للخلف: أصل ضريبة جارية لا أصل مؤجل", "A loss carried back: current tax receivable, not deferred tax"),
        explanation: text(
          "إذا أجاز قانون الضريبة استخدام خسارة السنة الحالية لاسترداد ضريبة جارية سبق دفعها عن سنة سابقة، فالمنفعة القابلة للاسترداد أصل ضريبة جارية في سنة وقوع الخسارة. حدد أولًا ما تسمح به قواعد الترحيل للخلف وما دُفع فعلًا، ثم اضرب الجزء المؤهل من الخسارة في معدل الضريبة المناسب مع مراعاة أي قيود قانونية. يثبت الأصل مقابل دخل ضريبي جارٍ في الربح أو الخسارة في الحالة المعتادة، ويبقى ذمة على الجهة الضريبية حتى التحصيل. لا تخلطه بأصل ضريبة مؤجلة من خسارة مُرحّلة للأمام؛ الأخير يتطلب اختبارًا منفصلًا لاحتمال أرباح ضريبية مستقبلية. وإذا كان استرداد الضريبة أقل من ناتج ضرب كامل الخسارة في المعدل، اقتصر الأصل على المبلغ القابل للاسترداد قانونًا.",
          "If tax law permits this year's loss to recover current tax actually paid for a prior year, the recoverable benefit is a current-tax asset in the loss year. First determine the carryback permitted and tax already paid, then apply the appropriate rate to the eligible loss subject to legal limits. Ordinarily recognise the receivable against current-tax income in profit or loss and retain it until collected. Do not confuse it with a deferred tax asset for a loss carried forward, which needs a separate probable-future-taxable-profit test. If only part of the computed benefit can legally be recovered, recognise only that recoverable amount.",
        ),
        keyPoints: [
          text("الترحيل للخلف يسترد ضريبة ماضية؛ الترحيل للأمام يعتمد على استخدام مستقبلي.", "Carryback recovers past tax; carryforward relies on future use."),
          text("الأصل يعكس الاسترداد المتوقع، وليس التزام ضريبة جديدًا رغم عنوان سؤال قديم.", "The asset reflects expected recovery, not a new tax payable even if an exercise labels it that way."),
          text("افحص حدود قانون الترحيل وسقف الضريبة المدفوعة قبل إثبات المبلغ.", "Check carryback limits and past tax paid before recognising the amount."),
        ],
        reference: "IAS 12.12–14, 46, 58",
      },
      {
        title: text("ضريبة أرباح التابعة غير الموزعة: اختبار شرطان معًا", "Tax on undistributed subsidiary profits: a two-condition exception"),
        explanation: text(
          "قد ينشأ فرق مؤقت خاضع مرتبط باستثمار الشركة الأم في تابعة، ومنها الأرباح غير الموزعة التي لا تُفرض عليها ضريبة لدى الأم إلا عند التحويل. يلزم الاعتراف بالتزام ضريبة مؤجلة إلا بقدر تحقق شرطين معًا: قدرة الأم على التحكم في توقيت انعكاس الفرق، ورجحان ألا ينعكس في المستقبل المنظور. السيطرة على سياسة التوزيعات تحقق الشرط الأول غالبًا لكنها لا تعفي المنشأة إذا كانت قد قررت التوزيع قريبًا. لا تساوِ آليًا بين رصيد أرباح تابعة أو مجموع توزيعات مخطط لها وبين مبلغ الفرق المؤقت الخاضع؛ يلزم تحليل القيمة الدفترية والأساس الضريبي للاستثمار وطريقة الاسترداد والضريبة المتوقعة عند الانعكاس. وإذا لم يُعط معدل الضريبة أو أساس الاستثمار، يمكن حسم مبدأ الاعتراف دون اختلاق مبلغ أو قيد رقمي.",
          "A taxable temporary difference may arise on a parent's investment in a subsidiary, including undistributed profits taxed at parent level only on remittance. Recognise deferred tax unless both conditions hold: the parent controls the timing of reversal and it is probable the difference will not reverse in the foreseeable future. Control of dividend policy usually meets the first condition but does not exempt planned near-term distributions. Do not automatically equate the subsidiary's retained earnings or planned dividends with the taxable temporary difference: examine the investment carrying amount and tax base, expected recovery and tax on reversal. Without the investment tax base or applicable rate, the recognition principle can be answered without inventing a numeric balance or entry.",
        ),
        keyPoints: [
          text("التحكم في توقيت التوزيع وحده غير كافٍ للإعفاء.", "Control over dividend timing alone is insufficient for the exception."),
          text("خطة التوزيع القريب تعني أن شرط عدم الانعكاس المتوقع قد فشل.", "A near-term distribution plan defeats the probable-no-reversal condition."),
          text("لا تحسب التزامًا رقميًا دون معدل الضريبة والفرق المؤقت ذي الصلة.", "Do not calculate a numeric liability without the relevant tax rate and temporary difference."),
        ],
        reference: "IAS 12.38–40, 47",
      },
    ],
    workedExamples: [
      {
        title: text("Darton: ربط نهائي أعلى أو أقل من التقدير", "Darton: final assessment above or below the estimate"),
        facts: text(
          "بلغ الربح الخاضع للضريبة في 20X8 لدى Darton مبلغ 120,000 دولار، ومعدل الضريبة 30%. قُدرت ضريبة 20X7 بمبلغ 30,000 وسُدد هذا التقدير، ثم حددتها الجهة الضريبية نهائيًا عند 35,000 في البديل الأول أو 25,000 في الثاني. يُسوّى الفرق مع دفعة السنة التالية، ويفترض أن أثر التعديل يدخل الربح أو الخسارة.",
          "Darton's 20X8 taxable profit is $120,000 at a 30% tax rate. Its 20X7 tax was estimated at $30,000 and that estimate was paid; the authority later finalises it at $35,000 in one alternative or $25,000 in the other. The difference is settled with the following year's payment; assume the true-up belongs in profit or loss.",
        ),
        calculations: [
          text("ضريبة 20X8 = 120,000 × 30% = 36,000. إذا كان الربط النهائي 35,000، فالزيادة عن التقدير 5,000؛ مصروف الضريبة الجاري الكلي 41,000، ومطلوب الضريبة 41,000 قبل السداد.", "20X8 tax = $120,000 × 30% = $36,000. If the final assessment is $35,000, the $5,000 underestimate makes total current-tax expense $41,000 and tax payable $41,000 before payment."),
          text("إذا كان الربط النهائي 25,000، فالمبالغة في التقدير 5,000؛ مصروف الضريبة الجاري 31,000. يعرض مطلوب 20X8 البالغ 36,000 وأصل استرداد 20X7 البالغ 5,000 على نحو منفصل؛ يصبح صافي العرض 31,000 فقط إذا تحققت شروط IAS 12 للمقاصة.", "If the final assessment is $25,000, the $5,000 overestimate makes current-tax expense $31,000. Present the $36,000 current-year payable and $5,000 prior-year recoverable separately; net presentation of $31,000 is permitted only if IAS 12's offset conditions are met."),
        ],
        conclusion: text("التصحيح الموجب أو السالب يخص ضريبة جارية من فترة سابقة. إجمالي المصروف 41,000 أو 31,000، لكن صافي العرض في بديل الاسترداد اختبار مستقل.", "The positive or negative true-up relates to prior-period current tax. Total expense is $41,000 or $31,000, while balance-sheet netting in the recoverable alternative is a separate test."),
        journalEntries: [
          { label: text("ضريبة ربح 20X8 في كلا البديلين", "20X8 profit tax in both alternatives"), debit: text("مصروف ضريبة جارية", "Current-tax expense"), credit: text("ضريبة جارية مستحقة", "Current tax payable"), amount: text("36,000 دولار", "$36,000") },
          { label: text("بديل نقص تقدير 20X7", "20X7 underestimation alternative"), debit: text("مصروف ضريبة جارية", "Current-tax expense"), credit: text("ضريبة سنوات سابقة مستحقة", "Prior-year tax payable"), amount: text("5,000 دولار", "$5,000") },
          { label: text("بديل زيادة تقدير 20X7", "20X7 overestimation alternative"), debit: text("ضريبة سنوات سابقة مستردة", "Prior-year tax receivable"), credit: text("مصروف ضريبة جارية", "Current-tax expense"), amount: text("5,000 دولار", "$5,000") },
        ],
        reference: "IAS 12.12, 46, 58, 71",
      },
      {
        title: text("Alpha وBeta: ضريبة تعديل أصل مقتنى", "Alpha and Beta: tax on an acquired asset adjustment"),
        facts: text(
          "اشترت Alpha كامل أسهم Beta في 1 أبريل 20X5. في تاريخ الشراء بلغت القيمة العادلة لمعدة مقتناة 54 مليون دولار، بينما بقي أساسها الضريبي 50 مليونًا؛ لم يؤثر تعديل القيمة العادلة في الأساس الضريبي، ومعدل الضريبة الملائم 25%. بقية فروق القيمة العادلة غير معطاة في هذه الحالة.",
          "Alpha acquired all of Beta's ordinary shares on 1 April 20X5. At acquisition, an acquired item of equipment has a fair value of $54 million but a tax base of $50 million; the fair-value adjustment does not reset the tax base, and the relevant tax rate is 25%. No other fair-value differences are given for this case.",
        ),
        calculations: [
          text("الفرق المؤقت الخاضع = 54 − 50 = 4 ملايين دولار. التزام الضريبة المؤجلة = 4 × 25% = مليون دولار. ينخفض صافي الأصول القابلة للتحديد بمليون، فتزيد الشهرة المحسوبة بمليون مقارنة باحتسابها دون الالتزام، مع ثبات بقية العناصر.", "Taxable temporary difference = $54m − $50m = $4m. Deferred tax liability = $4m × 25% = $1m. Identifiable net assets decrease by $1m, increasing calculated goodwill by $1m compared with omitting the liability, all else equal."),
        ],
        conclusion: text("يظهر التزام ضريبة مؤجلة بمليون ضمن محاسبة الاستحواذ. لا يمكن استخراج إجمالي الشهرة دون مقابل الشراء وسائر الأصول والالتزامات.", "Recognise a $1m deferred tax liability in acquisition accounting. Total goodwill cannot be calculated without consideration and the remaining assets and liabilities."),
        journalEntries: [
          { label: text("أثر ضريبة المعدة عند الاستحواذ", "Acquisition-date tax effect of equipment"), debit: text("شهرة ضمن تخصيص ثمن الشراء", "Goodwill within purchase-price allocation"), credit: text("التزام ضريبة مؤجلة", "Deferred tax liability"), amount: text("مليون دولار", "$1 million") },
        ],
        reference: "IAS 12.15, 19, 47, 66; IFRS 3.10, 18",
      },
      {
        title: text("Pappa وSierra: مخزون مباع داخل المجموعة", "Pappa and Sierra: inventory sold within the group"),
        facts: text(
          "باعت Pappa بضاعة تكلفتها 150 دولارًا إلى شركتها التابعة Sierra مقابل 200 دولار، وبقيت البضاعة لدى Sierra بنهاية السنة. تخضع أرباح كل شركة للضريبة في ولايتها منفردة: معدل Pappa هو 40% ومعدل Sierra هو 50%. يحق لـSierra عند الاسترداد خصم سعر شرائها البالغ 200 دولار. يفترض المثال احتمال توفر أرباح خاضعة لدى Sierra تكفي لاستخدام فرق الخصم، وثبات المعدل عند انعكاسه.",
          "Pappa sells goods costing $150 to subsidiary Sierra for $200, and Sierra still holds the goods at year-end. Each entity is taxed separately in its jurisdiction: Pappa's rate is 40% and Sierra's is 50%. On recovery Sierra may deduct its $200 purchase price. Assume probable taxable profits at Sierra sufficient to use the deductible difference and an unchanged rate on reversal.",
        ),
        calculations: [
          text("ربح Pappa الداخلي = 200 − 150 = 50، وضريبتها الجارية عليه = 50 × 40% = 20 دولارًا. بعد إلغاء الربح غير المحقق تصبح القيمة الدفترية المجمعة للمخزون 150، لكن أساسه الضريبي لدى Sierra يبقى 200؛ الفرق القابل للخصم 50.", "Pappa's intragroup profit is $200 − $150 = $50 and its current tax on that profit is $50 × 40% = $20. Eliminating unrealised profit leaves consolidated inventory carrying amount at $150, while its tax base at Sierra remains $200: a $50 deductible difference."),
          text("أصل الضريبة المؤجلة، بافتراض تحقق شرط الاعتراف، = 50 × معدل Sierra 50% = 25 دولارًا. اختلاف 25 عن ضريبة Pappa الجارية 20 طبيعي لاختلاف الولايتين والمعدلين؛ لا تستخدم 40% لقياس خصم Sierra المستقبلي.", "Subject to the recognition condition, deferred tax asset = $50 × Sierra's 50% rate = $25. The $25 differs from Pappa's $20 current tax because the jurisdictions and rates differ; do not measure Sierra's future deduction at 40%."),
        ],
        conclusion: text("يثبت في القوائم المجمعة أصل ضريبة مؤجلة 25 دولارًا يقابله دخل ضريبة مؤجلة، مع بقاء ضريبة Pappa الجارية منفصلة. إذا لم يرجح توفر ربح خاضع لدى Sierra، فلا يثبت الأصل بالكامل تلقائيًا.", "Recognise a $25 deferred tax asset and corresponding deferred tax income in consolidated accounts while retaining Pappa's separate current tax. If suitable taxable profit at Sierra is not probable, the full asset is not automatically recognised."),
        journalEntries: [
          { label: text("أثر الضريبة المؤجلة في القوائم المجمعة", "Deferred tax in consolidated accounts"), debit: text("أصل ضريبة مؤجلة", "Deferred tax asset"), credit: text("دخل ضريبة مؤجلة", "Deferred tax income"), amount: text("25 دولارًا", "$25") },
        ],
        reference: "IAS 12.5, 24, 28–29, 47; IFRS 10.B86(c)",
      },
      {
        title: text("Catsu: فرق الإهلاك المحاسبي والضريبي على سنتين", "Catsu: accounting versus tax depreciation over two years"),
        facts: text(
          "اشترت Catsu معدة في 1 يناير 20X1 بتكلفة 1,000,000 دولار، قيمة متبقية 100,000 وعمر نافع عشر سنوات. الإهلاك المحاسبي قسط ثابت، والخصم الضريبي 20% سنويًا من الرصيد الضريبي المتناقص. معدل ضريبة الدخل 30%. لا توجد فروق ضريبية أو أحداث أخرى في هذه المعدة.",
          "Catsu buys equipment on 1 January 20X1 for $1,000,000, with a $100,000 residual value and ten-year useful life. Accounting depreciation is straight-line, while tax depreciation is 20% a year on the reducing tax balance. The income-tax rate is 30%. Assume no other tax differences or events for this equipment.",
        ),
        calculations: [
          text("الإهلاك المحاسبي السنوي = (1,000,000 − 100,000) ÷ 10 = 90,000. نهاية 20X1: القيمة الدفترية 910,000؛ الأساس الضريبي 1,000,000 − 200,000 = 800,000؛ الفرق الخاضع 110,000 والالتزام المؤجل 33,000.", "Annual accounting depreciation = ($1,000,000 − $100,000) ÷ 10 = $90,000. End-20X1 carrying amount is $910,000; tax base is $1,000,000 − $200,000 = $800,000; taxable difference is $110,000 and deferred tax liability $33,000."),
          text("في 20X2 الخصم الضريبي = 800,000 × 20% = 160,000، فيصبح الأساس 640,000. القيمة الدفترية 910,000 − 90,000 = 820,000؛ الفرق الخاضع 180,000 والالتزام الختامي 54,000. مصروف الضريبة المؤجلة لسنة 20X2 = 54,000 − 33,000 = 21,000، وليس 54,000.", "20X2 tax deduction is $800,000 × 20% = $160,000, leaving tax base $640,000. Carrying amount is $910,000 − $90,000 = $820,000; taxable difference $180,000 and closing liability $54,000. The 20X2 deferred-tax charge is $54,000 − $33,000 = $21,000, not $54,000."),
        ],
        conclusion: text("يعرض التزام ضريبة مؤجلة 54,000 في 31 ديسمبر 20X2 ومصروف زيادة 21,000 في ربح أو خسارة السنة، بافتراض عدم وجود حركة أخرى.", "Present a $54,000 deferred tax liability at 31 December 20X2 and a $21,000 increase in that year's profit or loss, assuming no other movements."),
        journalEntries: [
          { label: text("زيادة الالتزام المؤجل في 20X2", "Increase in deferred tax liability in 20X2"), debit: text("مصروف ضريبة مؤجلة", "Deferred tax expense"), credit: text("التزام ضريبة مؤجلة", "Deferred tax liability"), amount: text("21,000 دولار", "$21,000") },
        ],
        reference: "IAS 12.7, 15, 17, 47, 58",
      },
      {
        title: text("Epsilon: تطوير مرسمل وخصم ضريبي فوري", "Epsilon: capitalised development and immediate tax deduction"),
        facts: text(
          "رسملت Epsilon نفقات تطوير مؤهلة قدرها 1,600,000 دولار خلال السنة المنتهية في 31 مارس 20X4. بدأ الأصل توليد المنافع وأصبح متاحًا للاستخدام في 1 يناير 20X4، وعمره النافع المتوقع خمس سنوات من ذلك التاريخ؛ يوزع الإطفاء شهريًا. خُصم الإنفاق كله ضريبيًا خلال السنة نفسها، ومعدل الضريبة 25%.",
          "Epsilon capitalises $1,600,000 of qualifying development expenditure during the year to 31 March 20X4. The asset starts generating benefits and is available for use on 1 January 20X4, with an expected five-year useful life from that date; amortisation is monthly. The full expenditure is deducted for tax in the same year and the tax rate is 25%.",
        ),
        calculations: [
          text("إطفاء يناير–مارس = 1,600,000 ÷ 5 × 3/12 = 80,000؛ القيمة الدفترية في 31 مارس = 1,520,000. لم يبق خصم ضريبي للمبلغ المرسمل، فالأساس الضريبي صفر. الفرق الخاضع والالتزام المؤجل = 1,520,000 × 25% = 380,000 دولار.", "January–March amortisation = $1,600,000 ÷ 5 × 3/12 = $80,000; 31 March carrying amount is $1,520,000. No further tax deduction remains for the capitalised cost, so tax base is nil. Taxable difference is $1,520,000 and deferred tax liability is $1,520,000 × 25% = $380,000."),
        ],
        conclusion: text("يثبت التزام ضريبة مؤجلة 380,000 عند نهاية السنة. لا ينطبق إعفاء الاعتراف الأول على أساس أن المعاملة لم تؤثر في الربح الضريبي؛ فقد خُصم الإنفاق فعلًا عند تكبده.", "Recognise a $380,000 deferred tax liability at year-end. The initial-recognition exception cannot be justified by claiming the transaction did not affect taxable profit: the expenditure was in fact deducted when incurred."),
        journalEntries: [
          { label: text("أثر الفرق المؤقت عند نهاية السنة", "Year-end temporary-difference effect"), debit: text("مصروف ضريبة مؤجلة", "Deferred tax expense"), credit: text("التزام ضريبة مؤجلة", "Deferred tax liability"), amount: text("380,000 دولار", "$380,000") },
        ],
        reference: "IAS 12.7, 15, 17, 47, 58; IAS 38.97",
      },
      {
        title: text("خمسة أصول: لماذا يختلف أساس الذمم؟", "Five assets: why receivables have different tax bases"),
        facts: text(
          "معدة تكلفتها 10,000 خُصم منها ضريبيًا 3,000 وسيخصم الباقي مستقبلًا؛ فوائد مستحقة 1,000 تُفرض عليها الضريبة عند التحصيل؛ ذمم تجارية 10,000 سبق خضوع إيرادها؛ قرض مدين 1,000,000 لا أثر ضريبي لاسترداد أصله؛ وتوزيعات مستحقة 5,000 من تابعة غير خاضعة للضريبة.",
          "Consider equipment costing $10,000 with $3,000 tax depreciation already deducted and the rest deductible later; $1,000 interest receivable taxed only on collection; $10,000 trade receivables whose revenue has already been taxed; a $1,000,000 loan receivable whose principal recovery is tax-neutral; and $5,000 non-taxable dividends receivable from a subsidiary.",
        ),
        calculations: [
          text("الأسس الضريبية بالترتيب: المعدة 10,000 − 3,000 = 7,000؛ الفوائد صفر؛ الذمم التجارية 10,000؛ القرض 1,000,000؛ التوزيعات 5,000 لأن المنفعة غير خاضعة للضريبة.", "Tax bases in order: equipment $10,000 − $3,000 = $7,000; interest nil; trade receivables $10,000; loan $1,000,000; dividends $5,000 because the benefit is non-taxable."),
        ],
        conclusion: text("عدم خضوع التوزيعات لا يولد التزامًا مؤجلًا؛ ويمكن تحليلها بديلًا بأساس صفر ومعدل ضريبة صفر، فتظل النتيجة الضريبية نفسها.", "Non-taxable dividends do not create a deferred tax liability. An alternative nil-base and nil-tax-rate analysis leads to the same tax result."),
        journalEntries: [],
        reference: "IAS 12.7",
      },
      {
        title: text("خمسة التزامات: الخصم المستقبلي أم الخصم المستنفد؟", "Five liabilities: future deduction or deduction already taken?"),
        facts: text(
          "مصروف مستحق 1,000 يخصم عند الدفع؛ إيراد فوائد مقبوض مقدمًا 10,000 خضع للضريبة عند القبض؛ مصروف مستحق 2,000 سبق خصمه؛ غرامة مستحقة 100 لا يجوز خصمها؛ وقرض دائن 1,000,000 لا أثر ضريبي لسداد أصله.",
          "Consider a $1,000 expense accrual deductible on payment; $10,000 interest received in advance already taxed on cash receipt; a $2,000 expense accrual already deducted; a $100 fine payable that is never deductible; and a $1,000,000 loan payable whose principal settlement is tax-neutral.",
        ),
        calculations: [
          text("الأسس الضريبية بالترتيب: المصروف الأول 1,000 − 1,000 = صفر؛ الإيراد المقدم 10,000 − 10,000 = صفر؛ المصروف المخصوم سابقًا 2,000؛ الغرامة 100؛ أصل القرض 1,000,000.", "Tax bases in order: first accrual $1,000 − $1,000 = nil; advance income $10,000 − $10,000 = nil; already-deducted expense $2,000; fine $100; loan principal $1,000,000."),
        ],
        conclusion: text("أساس الغرامة 100، لا صفر، لأنها لن تحصل على خصم مستقبلًا؛ وهذا فرق دائم في المصروف لا فرق مؤقت في رصيد الالتزام.", "The fine's tax base is $100, not nil, because no future deduction will arise; its non-deductibility is permanent, not a temporary difference on the liability."),
        journalEntries: [],
        reference: "IAS 12.8",
      },
      {
        title: text("Beta: ضريبة زيادة قيمة أرض", "Beta: tax on a land revaluation"),
        facts: text(
          "اشترت Beta أرضًا في 1 يناير 20X7 بمبلغ 400,000 دولار، وأعيد تقييمها في 31 ديسمبر 20X8 إلى 500,000. لا يؤثر التقييم في الربح الخاضع أو الأساس الضريبي، ومعدل الضريبة 30%. يفترض عدم وجود انخفاض سابق للأرض أُثبت في الربح أو الخسارة.",
          "Beta buys land on 1 January 20X7 for $400,000 and revalues it to $500,000 at 31 December 20X8. The revaluation changes neither taxable profit nor tax base; the tax rate is 30%. Assume no prior profit-or-loss revaluation decrease of this land.",
        ),
        calculations: [
          text("زيادة إعادة التقييم = 500,000 − 400,000 = 100,000، وهي أيضًا الفرق المؤقت الخاضع لأن الأساس الضريبي بقي 400,000. الالتزام المؤجل = 100,000 × 30% = 30,000؛ صافي زيادة فائض التقييم بعد الضريبة = 70,000.", "Revaluation uplift = $500,000 − $400,000 = $100,000, also the taxable temporary difference because tax base stays $400,000. Deferred tax liability = $100,000 × 30% = $30,000; the net-of-tax revaluation surplus increase is $70,000."),
        ],
        conclusion: text("تسجل ضريبة 30,000 في OCI مقابل الالتزام المؤجل، لا في مصروف الضريبة ضمن الربح أو الخسارة، ما دامت زيادة الأرض نفسها في OCI.", "Record the $30,000 tax in OCI against a deferred tax liability, not in profit-or-loss tax expense, while the land uplift itself is in OCI."),
        journalEntries: [
          { label: text("ضريبة إعادة تقييم الأرض", "Tax on land revaluation"), debit: text("الدخل الشامل الآخر — ضريبة فائض التقييم", "OCI — revaluation tax"), credit: text("التزام ضريبة مؤجلة", "Deferred tax liability"), amount: text("30,000 دولار", "$30,000") },
        ],
        reference: "IAS 12.20, 47, 61A–62; IAS 16.39, 42",
      },
      {
        title: text("Charlton: رصيد 210,000 وحركة إعادة تقييم 150,000", "Charlton: a $210,000 balance and $150,000 revaluation movement"),
        facts: text(
          "رفعت Charlton قيمة عقار خلال الفترة من قيمة دفترية 2,000,000 دولار إلى 2,500,000. كانت تكلفته التاريخية 2,200,000 وأساسه الضريبي في تاريخ التقرير 1,800,000. معدل الضريبة 30%، ولا يؤثر التقييم في الأساس الضريبي. يفترض أن الزيادة تسجل بالكامل في OCI، ولا تُعطى حركة ضريبية أخرى أو رصيد افتتاحي مفصل.",
          "Charlton revalues property during the period from a $2,000,000 carrying amount to $2,500,000. Its historical cost was $2,200,000 and reporting-date tax base is $1,800,000. The tax rate is 30% and revaluation does not reset tax base. Assume the uplift is wholly in OCI; no other tax movements or detailed opening deferred-tax balance are supplied.",
        ),
        calculations: [
          text("قبل الزيادة كان الفرق، إذا كان الأساس 1,800,000 آنذاك، يساوي 2,000,000 − 1,800,000 = 200,000 والتزامه 60,000. الزيادة الجديدة 500,000 وضريبتها 150,000. عند التقرير الفرق الكلي = 2,500,000 − 1,800,000 = 700,000 والالتزام الختامي 210,000 = 60,000 + 150,000.", "Before the uplift, if the tax base was already $1,800,000, the difference was $2,000,000 − $1,800,000 = $200,000 and related liability $60,000. The new $500,000 uplift adds $150,000 tax. At reporting date total difference is $2,500,000 − $1,800,000 = $700,000, giving a $210,000 closing liability = $60,000 + $150,000."),
        ],
        conclusion: text("ينسب 150,000 من حركة الالتزام إلى OCI مع زيادة التقييم. أما 60,000 المرتبطة بالفرق السابق فلا يصح وصفها بمصروف الربح أو الخسارة لهذه الفترة دون معرفة ما كان معترفًا به افتتاحًا وحركة الأساس الضريبي خلال السنة.", "Attribute the $150,000 liability movement caused by revaluation to OCI. Do not describe the $60,000 related to the pre-existing difference as this period's profit-or-loss expense without opening recognition and tax-base movement information."),
        journalEntries: [
          { label: text("ضريبة زيادة التقييم وحدها", "Tax on the revaluation uplift only"), debit: text("الدخل الشامل الآخر — ضريبة فائض التقييم", "OCI — revaluation tax"), credit: text("التزام ضريبة مؤجلة", "Deferred tax liability"), amount: text("150,000 دولار", "$150,000") },
        ],
        reference: "IAS 12.20, 47, 58, 61A–62; IAS 16.39, 42",
      },
      {
        title: text("Eramu: استرداد ضريبة سنة سابقة بخسارة السنة", "Eramu: recover prior tax with this year's loss"),
        facts: text(
          "دفعت Eramu ضريبة قدرها 50,000 دولار عن أرباح 20X7. في 20X8 تكبدت خسارة ضريبية 24,000، ويسمح القانون برد الخسارة إلى سنة سابقة لاسترداد الضريبة الجارية المدفوعة. معدل الضريبة 30%؛ يفترض أن كامل الخسارة مؤهل للرد وأن الضريبة السابقة تكفي لتغطية المبلغ.",
          "Eramu paid $50,000 tax on 20X7 profits. In 20X8 it incurs a $24,000 tax loss, and law permits carryback to recover current tax paid for an earlier period. The tax rate is 30%; assume the entire loss qualifies and prior tax paid is sufficient.",
        ),
        calculations: [
          text("الاسترداد المتوقع = 24,000 × 30% = 7,200 دولار، وهو دون الضريبة المدفوعة سابقًا 50,000. لذلك يُثبت أصل ضريبة جارية 7,200 ودخل/منفعة ضريبة جارية بالمبلغ نفسه في 20X8، ولا ينشأ من هذه الخسارة نفسها مطلوب ضريبة جارية.", "Expected refund = $24,000 × 30% = $7,200, less than $50,000 tax previously paid. Thus recognise a $7,200 current-tax receivable and corresponding current-tax benefit in 20X8; the loss itself does not create a current-tax payable."),
        ],
        conclusion: text("ترحيل الخسارة للخلف أصل ضريبة جارية؛ لا يسمى أصل ضريبة مؤجلة لمجرد أن النقد سيصل لاحقًا.", "The carryback is a current-tax asset; it is not deferred tax merely because cash arrives later."),
        journalEntries: [
          { label: text("إثبات منفعة الترحيل للخلف", "Recognise carryback benefit"), debit: text("ضريبة جارية مستردة", "Current tax receivable"), credit: text("دخل ضريبة جارية", "Current tax income"), amount: text("7,200 دولار", "$7,200") },
        ],
        reference: "IAS 12.12–14, 46, 58",
      },
      {
        title: text("Carrol وAnchor: السيطرة لا تعفي مع خطة توزيعات", "Carrol and Anchor: control does not exempt planned dividends"),
        facts: text(
          "لدى Carrol شركة تابعة واحدة Anchor. كانت أرباح Anchor المحتجزة عند الاستحواذ 2,000,000 دولار. قرر مديرو Carrol تحصيل توزيعات من Anchor قدرها 500,000 سنويًا خلال السنوات الثلاث المقبلة، وتُفرض ضريبة على تحويل التوزيعات. لم يعلن توزيع عن السنة الحالية، ولم يحدد السؤال أساس الاستثمار الضريبي أو معدل الضريبة.",
          "Carrol has one subsidiary, Anchor. Anchor's retained earnings at acquisition were $2,000,000. Carrol's directors plan $500,000 annual distributions from Anchor over the next three years, and remittances are taxable. No dividend is declared for the current year; neither the investment tax base nor tax rate is specified.",
        ),
        calculations: [
          text("التوزيعات المخطط لها = 500,000 × 3 = 1,500,000 دولار، لكنها ليست تلقائيًا مبلغ الفرق المؤقت أو الالتزام الضريبي. تتحكم Carrol في موعد التوزيع، غير أن خطة الثلاث سنوات تعني أن شرط رجحان عدم الانعكاس في المستقبل المنظور لا يتحقق للجزء المزمع توزيعه.", "Planned distributions total $500,000 × 3 = $1,500,000, but that is not automatically the temporary difference or tax liability. Carrol controls dividend timing, yet its three-year plan means the probable-no-reversal condition is not met for the portion expected to reverse."),
        ],
        conclusion: text("يلزم تحليل وإثبات ضريبة مؤجلة على الفرق المؤقت الخاضع المرتبط بالاستثمار المتوقع انعكاسه، لكن المعطيات لا تكفي لمبلغ محدد. عدم إعلان توزيع هذا العام لا يلغي خطة التوزيع خلال المستقبل المنظور.", "Assess and recognise deferred tax on the taxable investment difference expected to reverse, but the facts do not support a numeric balance. No declaration this year does not negate planned foreseeable distributions."),
        journalEntries: [],
        reference: "IAS 12.38–40, 47",
      },
    ],
  },
  "IFRS 13": {
    sections: [
      {
        title: text("القيمة العادلة للالتزام: أثر الجدارة الائتمانية للمنشأة", "Liability fair value: the entity's own credit risk"),
        explanation: text(
          "القيمة العادلة للالتزام هي سعر تحويله إلى مشارك في السوق في معاملة منتظمة بتاريخ القياس، لا المبلغ الذي تختار المنشأة دفعه لتسويته مبكرًا. يفترض القياس استمرار الالتزام بعد التحويل، ويشمل خطر عدم الوفاء به، ومنه الجدارة الائتمانية للمدين نفسه. لذلك قد تنخفض القيمة العادلة لوعد نقدي ثابت كلما زاد عائد السوق المطلوب لتحمل خطر المُصدر، مع ثبات المبلغ وتاريخ السداد وسائر الافتراضات. استخدم مدخلات المشاركين في السوق الملائمة ولا تُدخل فرق الائتمان مرتين في التدفقات ومعدل الخصم. IFRS 13 يحدد طريقة القياس عندما يطلب أو يجيز معيار آخر القيمة العادلة؛ ولا يحول تلقائيًا كل ذمة دائنة مقاسة بالتكلفة المستهلكة إلى التزام بالقيمة العادلة، ولا يعني انخفاض القيمة العادلة أن الدائن تنازل عن أصل المطالبة الاسمية.",
          "A liability's fair value is the price to transfer it to a market participant in an orderly transaction at the measurement date, not an amount the entity elects to pay for early settlement. The liability is assumed to continue after transfer, and the measure includes non-performance risk, including the debtor's own credit risk. Thus, with the promised cash flow, maturity and other assumptions unchanged, a higher market yield for the issuer's risk can reduce the promise's fair value. Use relevant market-participant inputs and do not double count credit risk in both cash flows and the discount rate. IFRS 13 specifies how to measure fair value when another Standard requires or permits it; it does not automatically convert every amortised-cost payable to fair value, and a lower fair value does not extinguish the creditor's nominal claim.",
        ),
        keyPoints: [
          text("حدد أولًا هل يطلب أو يسمح المعيار المختص بقياس الالتزام بالقيمة العادلة.", "First establish whether the applicable Standard requires or permits fair-value measurement of this liability."),
          text("قارن التزامات متماثلة في التدفق والأجل قبل عزل أثر ائتمان المُصدر.", "Compare liabilities with the same cash flow and term before isolating issuer credit risk."),
          text("ارتفاع معدل الخصم قد يخفض القيمة العادلة؛ لا يعني ذلك سقوط أصل الدين المستحق.", "A higher discount rate can lower fair value without cancelling the contractual principal."),
        ],
        reference: "IFRS 13.9, 34–43, 61–67",
      },
    ],
    workedExamples: [
      {
        title: text("وعدان بسداد 20,000 بعد سبع سنوات", "Two promises to pay 20,000 in seven years"),
        facts: text(
          "تعهدت Black وBlue، كل منهما على حدة، بسداد 20,000 دولار نقدًا إلى Green بعد سبع سنوات. عائد السوق الملائم لوعد Black ذي الجدارة الأعلى 4% سنويًا، وللوعد المماثل من Blue ذي الجدارة الأقل 8%. لأجل عزل خطر ائتمان المُصدر، يفترض تطابق العملة وموعد السداد وسائر شروط العقد ومخاطره، وعدم وجود كوبونات أو تدفقات وسيطة؛ والمعدلان يعكسان مدخلات المشاركين في السوق لهذا القياس.",
          "Black and Blue each independently promise to pay Green $20,000 cash in seven years. The relevant market yield is 4% a year for higher-credit-quality Black and 8% for otherwise comparable lower-credit-quality Blue. To isolate issuer credit risk, assume identical currency, maturity, other contractual terms and risks, with no coupons or interim cash flows; the yields represent market-participant inputs for this measurement.",
        ),
        calculations: [
          text("القيمة الحالية لوعد Black = 20,000 ÷ (1.04)^7 = 15,198.36 دولار.", "Present value of Black's promise = $20,000 ÷ (1.04)^7 = $15,198.36."),
          text("القيمة الحالية لوعد Blue = 20,000 ÷ (1.08)^7 = 11,669.81 دولار؛ الفرق بين القيمتين = 3,528.55 دولار. استُخدمت معاملات خصم كاملة ثم قربت النتيجة إلى السنت، فلا يُستبدل الناتج الدقيق بتقدير ناتج عن تقريب المعاملات.", "Present value of Blue's promise = $20,000 ÷ (1.08)^7 = $11,669.81; the values differ by $3,528.55. Full discount factors were used before rounding to cents, rather than substituting an estimate from prematurely rounded factors."),
        ],
        conclusion: text(
          "إذا كان مطلوبًا قياس هذين الالتزامين بالقيمة العادلة، فإن قيمة وعد Blue الأقل تعكس العائد الأعلى المطلوب لتحمل خطر عدم وفائه، لا إعفاءه من التزامه التعاقدي بدفع 20,000. المثال مقارنة قياس، ولا يقدم وقائع إصدار أو تصنيف تكفي لاشتقاق قيد اعتراف أو ربح إعادة قياس.",
          "Where fair-value measurement is required, Blue's lower measured value reflects the higher yield demanded for its non-performance risk; Blue still contractually owes $20,000. This is a measurement comparison, not a complete issuance or classification fact pattern from which an initial-recognition entry or remeasurement gain can be derived.",
        ),
        journalEntries: [],
        reference: "IFRS 13.9, 34–43, 61–67",
      },
    ],
  },
  "IAS 32": {
    sections: [
      {
        title: text("السند القابل للتحويل: قيّم الدين أولًا ثم خيار الأسهم", "Convertible bond: value the debt before the share option"),
        explanation: text(
          "إذا ألزم السند المصدر بسداد نقد أو كوبونات ومنح حامله خيار تحويل مؤهلًا إلى عدد ثابت من أسهم المصدر مقابل مبلغ ثابت، فهو أداة مركبة: التزام مالي وخيار حقوق ملكية منفصلان. حدد القيمة العادلة للالتزام بما كان سيدفعه السوق لسند مماثل بلا حق تحويل؛ اخصم أصل الدين والكوبونات بسعر دين مماثل، ثم خصص باقي متحصلات الإصدار لحقوق الملكية. سعر السهم الحالي والتوزيعات المتوقعة لا يحلان محل سعر الدين في هذه الطريقة. بعد الإصدار تبقى قيمة الخيار في حقوق الملكية دون إعادة قياس بسبب تغير احتمال التحويل، بينما يقاس الالتزام بالتكلفة المستهلكة وبالفائدة الفعلية. تحقق أولًا من عدم وجود بديل تسوية نقدية أو شرط يجعل عدد الأسهم أو مبلغ المقابل متغيرًا، فقد يغير ذلك تصنيف الخيار.",
          "If the issuer must pay cash principal or coupons and the holder has a qualifying option to exchange a fixed amount for a fixed number of the issuer's shares, the bond contains separately presented debt and equity components. First measure the liability at the value of comparable debt without conversion by discounting principal and coupons at that debt yield; assign the residual proceeds to equity. Current share price and expected dividends do not replace the comparable debt yield in this allocation. Subsequently, the equity option is not remeasured for changes in conversion likelihood, while the liability follows amortised cost and effective interest. First inspect any cash-settlement alternative or variable share or consideration clause, which may change the option's classification.",
        ),
        keyPoints: [
          text("اختبر مبلغًا ثابتًا مقابل عدد ثابت قبل افتراض أن خيار التحويل حقوق ملكية.", "Test fixed consideration for a fixed number of shares before treating the conversion option as equity."),
          text("استخدم معاملات خصم دقيقة؛ المعاملات المدوّرة قد تغير الباقي المخصص للخيار.", "Use sufficiently precise discount factors; rounded factors change the residual allocated to the option."),
          text("مكون حقوق الملكية ثابت بعد الإصدار، أما رصيد الدين فيتغير بالفائدة الفعلية والكوبونات.", "The equity component remains fixed after issue; the debt balance changes with effective interest and coupons."),
        ],
        reference: "IAS 32.16, 22, 28–32, AG30–AG35; IFRS 9.5.4.1",
      },
    ],
    workedExamples: [
      {
        title: text("Rathbone: فصل 2,000 سند قابل للتحويل", "Rathbone: separating 2,000 convertible bonds"),
        facts: text(
          "أصدرت Rathbone في بداية 20X2 عدد 2,000 سند قابل للتحويل، القيمة الاسمية ومتحصل الإصدار لكل منها 1,000 دولار، لمدة ثلاث سنوات. الكوبون السنوي 6% يدفع آخر كل سنة، ويجوز تحويل كل سند إلى 250 سهمًا عاديًا خلال المدة. عائد سند مماثل بلا خيار تحويل 9%. يفترض أن خيار التحويل يفي بشرط المبلغ الثابت مقابل العدد الثابت، ولا توجد بدائل تسوية أخرى أو تكاليف إصدار. سعر السهم الحالي 3 دولارات والتوزيع المتوقع 0.14 دولار للسهم، لكنهما لا يدخلان تقييم جزء الدين.",
          "At the start of 20X2, Rathbone issues 2,000 three-year convertible bonds at face value and proceeds of $1,000 each. The 6% annual coupon is paid in arrears, and each bond can convert to 250 ordinary shares during its term. Comparable debt without conversion yields 9%. Assume the conversion option meets fixed-for-fixed, with no other settlement alternatives or issue costs. Current share price is $3 and expected dividend $0.14 a share, neither of which measures the debt component.",
        ),
        calculations: [
          text("المتحصلات = 2,000 × 1,000 = 2,000,000 دولار، والكوبون السنوي = 2,000,000 × 6% = 120,000. القيمة الحالية لأصل الدين = 2,000,000 ÷ 1.09³ = 1,544,366.96؛ القيمة الحالية للكوبونات = 120,000 × (1/1.09 + 1/1.09² + 1/1.09³) = 303,755.36.", "Proceeds are 2,000 × $1,000 = $2,000,000 and annual coupon is $2,000,000 × 6% = $120,000. Principal present value = $2,000,000 ÷ 1.09³ = $1,544,366.96; coupon present value = $120,000 × (1/1.09 + 1/1.09² + 1/1.09³) = $303,755.36."),
          text("مكون الالتزام = 1,848,122.32 دولار؛ مكون حقوق الملكية المتبقي = 151,877.68. إن استُخدمت معاملات مختصرة إلى 0.772 و2.531، تنتج قيمة التزام تقريبية 1,847,720 وخيار 152,280؛ الفارق 402.32 دولار سببه تقريب المعاملات لا اختلاف المبدأ.", "Liability component = $1,848,122.32; residual equity component = $151,877.68. Truncating discount factors to 0.772 and 2.531 gives an approximate $1,847,720 liability and $152,280 option; the $402.32 difference is discount-factor rounding, not a different accounting principle."),
          text("تكلفة الفائدة الفعلية للسنة الأولى = 1,848,122.32 × 9% = 166,331.01؛ بعد دفع كوبون 120,000 يصبح رصيد الالتزام نحو 1,894,453.33. لا يعاد قياس خيار حقوق الملكية البالغ 151,877.68.", "First-year effective interest is $1,848,122.32 × 9% = $166,331.01; after the $120,000 coupon, the liability is about $1,894,453.33. The $151,877.68 equity option is not remeasured."),
        ],
        conclusion: text("يعرض عند الإصدار التزام 1,848,122.32 وخيار تحويل ضمن حقوق الملكية 151,877.68 باستخدام خصم 9% الدقيق، بشرط ثبات التحويل. لا تستخدم سعر السهم أو توزيعاته لقياس هذا الباقي.", "At issue, present a $1,848,122.32 liability and a $151,877.68 equity conversion option using precise 9% discounting, subject to fixed-for-fixed conversion. Do not use the share price or dividend to measure this residual."),
        journalEntries: [
          { label: text("إصدار السند المركب", "Issue the compound bond"), debit: text("نقدية", "Cash"), credit: text("التزام سند 1,848,122.32 + خيار تحويل ضمن حقوق الملكية 151,877.68", "Bond liability $1,848,122.32 + equity conversion option $151,877.68"), amount: text("2,000,000 دولار", "$2,000,000") },
          { label: text("فائدة السنة الأولى وسداد الكوبون", "Year-one interest and coupon"), debit: text("مصروف تمويل", "Finance cost"), credit: text("نقدية 120,000 + التزام سند 46,331.01", "Cash $120,000 + bond liability $46,331.01"), amount: text("166,331.01 دولار", "$166,331.01") },
        ],
        reference: "IAS 32.28–32, AG30–AG35; IFRS 9.5.4.1",
      },
    ],
  },
  "IFRS 9": {
    sections: [
      {
        title: text("مصفوفة الخسائر المتوقعة: معدل تعثر أم معدل خسارة؟", "ECL provision matrix: default rate or loss rate?"),
        explanation: text(
          "يسمح IFRS 9 باستخدام مصفوفة عملية للذمم التجارية ضمن المنهج المبسط، فتُجمع الأرصدة بحسب خصائص المخاطر وأعمار التأخر وتطبق معدلات خسائر ائتمانية متوقعة على مدى العمر. تُشتق المعدلات من خبرة التحصيل السابقة بعد تعديلها للظروف الراهنة والتوقعات المستقبلية المعقولة، مع مراعاة المبالغ المتوقع استردادها والقيمة الزمنية للنقود عند جوهريتها. لا يكفي ضرب احتمال التعثر وحده في كامل الرصيد إذا كانت هناك تحصيلات بعد التعثر؛ يجب أن يعكس المعدل الخسارة النقدية المتوقعة. عند مقارنة مخصص تاريخين، يسجل فرق الرصيد المطلوب عن الرصيد القائم فقط بعد النظر في الشطب والاستخدام والتحصيل والحركات الأخرى.",
          "IFRS 9 permits a practical provision matrix for trade receivables under the simplified approach. Group balances by shared credit risk and ageing, then apply lifetime expected credit-loss rates. Derive the rates from collection experience adjusted for current conditions and reasonable forward-looking forecasts, considering recoveries and the time value of money where material. Multiplying a probability of default alone by the full balance overstates ECL if post-default recovery is expected: the rate must represent expected cash shortfall. When comparing allowances at two dates, record the difference between required and existing balances only after considering write-offs, utilisation, collections and other movements.",
        ),
        keyPoints: [
          text("المنهج المبسط يعني خسائر العمر من البداية لذمم IFRS 15 بلا عنصر تمويل مهم.", "The simplified approach means lifetime ECL from inception for IFRS 15 receivables without significant financing."),
          text("استخدم معدلات خسارة معايرة، لا احتمالات تعثر مجردة دون معدل عدم الاسترداد.", "Use calibrated loss rates, not bare default probabilities without loss-given-default."),
          text("طابق المخصص الختامي مع القيد بعد تحليل حركات الرصيد الافتتاحي.", "Reconcile the closing allowance to the entry after analysing opening-balance movements."),
        ],
        reference: "IFRS 9.5.5.15–5.5.17, B5.5.35; IFRS 7.35N",
      },
      {
        title: text("تحوط القيمة العادلة للمخزون: افصل أثر الخطر المحوّط", "Inventory fair value hedge: isolate the hedged-risk adjustment"),
        explanation: text(
          "عندما توثق المنشأة منذ البداية تحوطًا مؤهلًا لمخاطر تغير السعر في مخزون قائم، يقاس عقد التحوط المشتق بالقيمة العادلة ويذهب ربحه أو خسارته إلى الربح أو الخسارة. ويعدل رصيد المخزون فقط بمقدار تغير قيمته العادلة المنسوب إلى الخطر المحدد في العلاقة، مع إثبات المقابل في الربح أو الخسارة. لذلك قد يظهر تعديل موجب في قيمة المخزون رغم أن القاعدة المعتادة في IAS 2 هي التكلفة أو صافي القيمة القابلة للتحقق أيهما أقل؛ ذلك التعديل استثناء خاص بمحاسبة التحوط وليس اختيار نموذج قيمة عادلة للمخزون كله. لا يكفي وجود عقد آجل اقتصاديًا: يلزم تعيين وتوثيق عند البدء، وأداة وبند مؤهلان، وعلاقة اقتصادية ونسبة تحوط ملائمة. عند البيع، تدخل القيمة الدفترية المعدلة للمخزون في تكلفة المبيعات، ويُسوّى المشتق منفصلًا.",
          "For a qualifying, documented hedge of price risk in recognised inventory, measure the derivative hedging instrument at fair value and recognise its gain or loss in profit or loss. Adjust the inventory only for the fair value change attributable to the designated risk, also in profit or loss. A positive inventory adjustment can therefore arise even though ordinary IAS 2 measurement is lower of cost and net realisable value: this is a hedge-accounting adjustment, not a general fair-value model for inventory. An economically protective forward alone is insufficient; inception designation and documentation, eligible items, an economic relationship and an appropriate hedge ratio are required. On sale, the adjusted inventory carrying amount becomes cost of sales and the derivative is settled separately.",
        ),
        keyPoints: [
          text("سجل المشتق وتعديل البند المحوّط في مسارين منفصلين ثم احسب صافي عدم الفاعلية في الربح أو الخسارة.", "Record derivative and hedged-item adjustments separately, then identify net ineffectiveness in profit or loss."),
          text("لا ترفع جميع المخزونات للقيمة العادلة لمجرد ارتفاع سعر السوق.", "Do not uplift all inventory to fair value merely because its market price rose."),
          text("أدخل تعديل التحوط المتراكم في تكلفة المبيعات عند بيع المخزون.", "Include the cumulative hedge adjustment in cost of sales when the inventory is sold."),
        ],
        reference: "IFRS 9.6.4.1, 6.5.2(a), 6.5.8; IAS 2.9, 34",
      },
      {
        title: text("تحوط التدفقات النقدية: اختبر الحد الأدنى التراكمي لا حركة الفترة وحدها", "Cash flow hedge: test the cumulative lower-of, not each period in isolation"),
        explanation: text(
          "يجوز اختيار محاسبة تحوط تدفقات نقدية لمخاطر العملة في ارتباط شراء ملزم، إذا وُثقت العلاقة واستوفت شروط IFRS 9. يقاس المشتق بالقيمة العادلة في كل تاريخ، لكن احتياطي تحوط التدفقات النقدية يُضبط على الأقل بالقيمة المطلقة من مكسب الأداة المتراكم منذ البداية أو التغير المتراكم في القيمة الحالية للتدفقات المحوطة منذ البداية. الفرق الباقي من حركة الأداة يثبت عدم فاعلية في الربح أو الخسارة؛ لذلك قد يختلف نصيب الفترة الثانية في الاحتياطي عن التغير المنفرد في تعرض تلك الفترة. إذا أدى الشراء إلى أصل غير مالي، ينقل الرصيد المتراكم من الاحتياطي مباشرةً إلى تكلفة الأصل، لا يُعاد تدويره عبر الربح أو الخسارة. يلزم قياس القيمة الحالية وأثر النقاط الآجلة وفق التعيين الفعلي؛ إذا لم تتوافر بيانات الخصم، فالأرقام المبسطة مشروطة بعدم جوهرية أثره.",
          "A foreign-currency firm commitment may be designated as a cash flow hedge if the relationship is documented and qualifies under IFRS 9. Remeasure the derivative each reporting date, but set the cash flow hedge reserve at the lower absolute amount of the instrument's cumulative gain since inception and the cumulative present-value change of hedged cash flows since inception. The remaining derivative movement is ineffectiveness in profit or loss. Thus a second period's reserve movement need not equal that period's stand-alone exposure change. When the purchase creates a non-financial asset, remove the accumulated reserve directly into its cost rather than recycling it through profit or loss. Present-value effects and forward points depend on the actual designation; simplified figures without discount inputs assume immaterial time value.",
        ),
        keyPoints: [
          text("قارن رصيدين تراكميين في كل تاريخ ثم احسب حركة الاحتياطي، ولا تطبق الحد الأدنى على كل فترة منفصلة.", "Compare cumulative balances at each date, then calculate the reserve movement; do not run the lower-of test separately for each period."),
          text("افصل عدم الفاعلية في الربح أو الخسارة عن الجزء الفعال في الدخل الشامل الآخر.", "Separate profit-or-loss ineffectiveness from the effective portion in OCI."),
          text("عند نشوء أصل غير مالي، عدّل التكلفة الأولية مباشرةً برصيد التحوط المتراكم.", "When a non-financial asset arises, adjust its initial cost directly for the accumulated hedge reserve."),
        ],
        reference: "IFRS 9.6.4.1, 6.5.4, 6.5.11(a)–(d), B6.5.4–B6.5.5",
      },
    ],
    workedExamples: [
      {
        title: text("Bets: تصحيح احتياطي التحوط على أساس تراكمي", "Bets: correcting the cash flow hedge reserve cumulatively"),
        facts: text(
          "ارتبطت Bets في 1 نوفمبر 20X1 بشراء أصل مقابل 60 مليون يورو في 1 نوفمبر 20X2، وعملتها الوظيفية الدولار. عيّنت العقد الآجل كاملًا لشراء اليورو في موعد السداد بسعر 1 دولار = 1.50 يورو ضمن تحوط تدفقات نقدية مستوفٍ للشروط، دون فصل عنصر الآجل في معالجة مستقلة لتكلفة التحوط. في البداية كان السعر الفوري 1.45 يورو للدولار. في 31 ديسمبر 20X1 صار الفوري 1.20 والآجل للموعد نفسه 1.24. في يوم الشراء صار الفوري والآجل 1.00. للتطبيق العددي فقط، يفترض أن تغير التدفقات المحوطة المحسوب من الأسعار الفورية يمثل قيمتها الحالية وأن أثر خصم التدفقات غير جوهري؛ ولا يهمل المثال فرق السعر الآجل بل ينعكس في عدم الفاعلية. إن لم يصح فرض الخصم يلزم قياس مستقل بالقيم الحالية.",
          "On 1 November 20X1 Bets commits to buy an asset for €60m on 1 November 20X2, with USD functional currency. It designates the entire forward to buy euros on that date at $1 = €1.50 in a qualifying cash flow hedge, without separately accounting for its forward element as a cost of hedging. Inception spot is €1.45 per dollar. At 31 December 20X1, spot is €1.20 and forward for the purchase date €1.24. On purchase date, both spot and forward are €1.00. For the numerical illustration only, assume spot-derived hedged cash-flow changes represent present values and discounting the cash flows has no material additional effect. The forward-point difference is not ignored: it contributes to ineffectiveness. If discounting is material, independently measure present values.",
        ),
        calculations: [
          text("31 ديسمبر: مكسب المشتق = 60,000,000 ÷ 1.24 − 60,000,000 ÷ 1.50 = 8,387,096.77 دولار. تغير تعرض الشراء المتراكم = 60,000,000 ÷ 1.20 − 60,000,000 ÷ 1.45 = 8,620,689.66. الأقل تراكميًا = 8,387,096.77 في احتياطي التحوط؛ لا عدم فاعلية موجبة حينها.", "31 December: derivative gain = €60,000,000 ÷ 1.24 − €60,000,000 ÷ 1.50 = $8,387,096.77. Cumulative purchase-exposure change = €60,000,000 ÷ 1.20 − €60,000,000 ÷ 1.45 = $8,620,689.66. The cumulative lower amount is $8,387,096.77 in the hedge reserve; there is no positive ineffectiveness then."),
          text("1 نوفمبر 20X2: مكسب المشتق المتراكم = 60,000,000 ÷ 1.00 − 60,000,000 ÷ 1.50 = 20,000,000. تغير البند المحوط المتراكم = 60,000,000 ÷ 1.00 − 60,000,000 ÷ 1.45 = 18,620,689.66. إذن الاحتياطي الختامي قبل تحويله للأصل = 18,620,689.66، وحركته منذ ديسمبر = 10,233,592.89 تقريبًا، وعدم الفاعلية التراكمية في الربح أو الخسارة = 1,379,310.34.", "1 November 20X2: cumulative derivative gain = €60,000,000 ÷ 1.00 − €60,000,000 ÷ 1.50 = $20,000,000. Cumulative hedged-item change = €60,000,000 ÷ 1.00 − €60,000,000 ÷ 1.45 = $18,620,689.66. Thus the reserve before basis adjustment is $18,620,689.66, its movement since December is about $10,233,592.89, and cumulative profit-or-loss ineffectiveness is $1,379,310.34."),
          text("يثبت الأصل يوم الشراء بمبلغ 60,000,000 دولار ويُقبض 20,000,000 من تسوية العقد الآجل؛ ثم يخفض رصيد احتياطي التحوط تكلفة الأصل مباشرةً بمبلغ 18,620,689.66، فتصبح تكلفته 41,379,310.34 دولار ضمن هذه الافتراضات. الفارق بين صافي النقد 40,000,000 والتكلفة 41,379,310.34 هو مكسب عدم الفاعلية 1,379,310.34 المثبت في الربح أو الخسارة.", "Recognise the asset on purchase for $60,000,000 and receive $20,000,000 on forward settlement; then directly reduce its cost by the $18,620,689.66 hedge reserve, giving $41,379,310.34 under these assumptions. The $1,379,310.34 gap between $40,000,000 net cash and $41,379,310.34 asset cost is the ineffectiveness gain in profit or loss."),
        ],
        conclusion: text("لا يكفي اختبار مكسب العقد وتغير تكلفة الشراء خلال الفترة الثانية منفصلين؛ IFRS 9 يطلب مقارنة الرقمين المتراكمين منذ البداية. وعليه يكون الاحتياطي 18,620,689.66 لا 18,387,096، وتكلفة الأصل بعد تعديل الأساس 41,379,310.34 في الحساب المبسط. فرق الآجل داخل مكسب العقد ويسهم في عدم الفاعلية؛ وإذا كان أثر خصم التدفقات جوهريًا فهذه الأرقام توضيحية لا قياسًا نهائيًا.", "The second period's instrument and purchase-cost changes cannot be capped in isolation: IFRS 9 compares cumulative amounts from inception. The reserve is therefore $18,620,689.66, not $18,387,096, and the simplified basis-adjusted asset cost is $41,379,310.34. Forward points are included in the instrument gain and contribute to ineffectiveness; if cash-flow discounting is material, these are illustrative rather than final measured amounts."),
        journalEntries: [
          { label: text("31 ديسمبر: مكسب العقد الفعال", "31 December: effective forward gain"), debit: text("أصل عقد آجل", "Forward asset"), credit: text("احتياطي تحوط التدفقات النقدية عبر OCI", "Cash flow hedge reserve through OCI"), amount: text("8,387,096.77 دولار", "$8,387,096.77") },
          { label: text("1 نوفمبر: الحركة الإضافية للعقد", "1 November: further forward movement"), debit: text("أصل عقد آجل", "Forward asset"), credit: text("احتياطي التحوط 10,233,592.89 + ربح عدم فاعلية 1,379,310.34", "Hedge reserve $10,233,592.89 + ineffectiveness gain $1,379,310.34"), amount: text("11,612,903.23 دولار", "$11,612,903.23") },
          { label: text("شراء الأصل بسعر الصرف الفوري", "Acquire asset at spot rate"), debit: text("أصل غير مالي", "Non-financial asset"), credit: text("نقدية", "Cash"), amount: text("60,000,000 دولار", "$60,000,000") },
          { label: text("تسوية العقد الآجل", "Settle the forward"), debit: text("نقدية", "Cash"), credit: text("أصل عقد آجل", "Forward asset"), amount: text("20,000,000 دولار", "$20,000,000") },
          { label: text("إدراج الاحتياطي في تكلفة الأصل", "Basis-adjust the asset from the reserve"), debit: text("احتياطي تحوط التدفقات النقدية", "Cash flow hedge reserve"), credit: text("أصل غير مالي", "Non-financial asset"), amount: text("18,620,689.66 دولار", "$18,620,689.66") },
        ],
        reference: "IFRS 9.6.5.4, 6.5.11(a)–(d), B6.5.4–B6.5.5; IAS 21.21",
      },
      {
        title: text("Jules: تحوط مخزون المعدن حتى بيعه", "Jules: hedging metal inventory through sale"),
        facts: text(
          "في 1 يوليو 20X6 اشترت Jules كمية 10,000 أونصة معدن بتكلفة 200 دولار للأونصة، وعيّنت عقد بيع مستقبلي للكمية نفسها بسعر 210 دولارات للتسليم في 30 يونيو 20X7 تحوطًا مؤهلًا لتغير سعر المخزون. في 31 ديسمبر 20X6 أصبح سعر المخزون 220 دولارًا للأونصة وسعر العقد المستقبلي للتسليم المحدد 227 دولارًا. في 30 يونيو 20X7 بيع المخزون وأغلق العقد عند سعر فوري 230 دولارًا للأونصة. يفترض المثال أن 200 دولار كان سعر البند المعين عند بدء التحوط، وأن تغير الأسعار المعطى يقيس خطر السعر المحوّط وقيمة المشتق دون أثر خصم أو هامش جوهري، وأن شروط IFRS 9 للتحوط موثقة ومستوفاة.",
          "On 1 July 20X6 Jules buys 10,000 ounces of metal at $200 per ounce and designates a futures sale of the same quantity at $210 for 30 June 20X7 as a qualifying hedge of inventory price risk. On 31 December 20X6 inventory price is $220 per ounce and the future for that delivery date is $227. On 30 June 20X7 the inventory is sold and the future closed at a $230 spot price. Assume $200 was the designated item's inception price, the quoted changes represent hedged-risk and derivative fair value changes without material discount or margin effects, and IFRS 9 hedge criteria are documented and met.",
        ),
        calculations: [
          text("في 31 ديسمبر: ربح البند المحوّط = 10,000 × (220 − 200) = 200,000 دولار؛ خسارة العقد = 10,000 × (227 − 210) = 170,000؛ صافي الربح في الفترة 30,000، ورصيد المخزون المعدل 2,200,000 والتزام المشتق 170,000.", "At 31 December: hedged-item gain = 10,000 × ($220 − $200) = $200,000; futures loss = 10,000 × ($227 − $210) = $170,000. Net period gain is $30,000, adjusted inventory $2,200,000 and derivative liability $170,000."),
          text("من 1 يناير إلى 30 يونيو: زيادة تعديل المخزون = 10,000 × (230 − 220) = 100,000؛ خسارة مشتق إضافية = 10,000 × (230 − 227) = 30,000. يصبح رصيد المخزون 2,300,000 والتزام المشتق 200,000. عند البيع بمبلغ 2,300,000 تظهر إيرادات وتكلفة مبيعات متساويتان في ذلك التاريخ، بينما صافي أثر التحوط على مدى الفترتين ربح 300,000 من البند ناقص خسارة 200,000 من العقد = 100,000 قبل أي مصروفات أخرى.", "From 1 January to 30 June: inventory adjustment rises 10,000 × ($230 − $220) = $100,000; further derivative loss is 10,000 × ($230 − $227) = $30,000. Inventory reaches $2,300,000 and derivative liability $200,000. Sale for $2,300,000 produces equal revenue and cost of sales at that date, while the cumulative price movement on the hedged item of $300,000 less $200,000 futures loss gives $100,000 profit before other costs."),
        ],
        conclusion: text("المحصلة الاقتصادية من الشراء والبيع والعقد هي 2,300,000 − 2,000,000 − 200,000 = 100,000 دولار. محاسبة التحوط توزع أثر تغير السعر عبر الفترتين بصورة متسقة؛ لا تُعامل زيادة المخزون 300,000 كإعادة تقييم عامة وفق IAS 2.", "The combined economic result is $2,300,000 sale proceeds − $2,000,000 original cost − $200,000 futures settlement = $100,000. Hedge accounting allocates price changes across periods consistently; the $300,000 inventory uplift is not a general IAS 2 revaluation."),
        journalEntries: [
          { label: text("31 ديسمبر: خسارة العقد", "31 December: futures loss"), debit: text("خسارة مشتق في الربح أو الخسارة", "Derivative loss in profit or loss"), credit: text("التزام عقد مستقبلي", "Futures liability"), amount: text("170,000 دولار", "$170,000") },
          { label: text("31 ديسمبر: تعديل المخزون للخطر المحوّط", "31 December: hedged-risk inventory adjustment"), debit: text("مخزون", "Inventory"), credit: text("ربح تحوط في الربح أو الخسارة", "Hedged-item gain in profit or loss"), amount: text("200,000 دولار", "$200,000") },
          { label: text("30 يونيو: خسارة العقد الإضافية", "30 June: further futures loss"), debit: text("خسارة مشتق في الربح أو الخسارة", "Derivative loss in profit or loss"), credit: text("التزام عقد مستقبلي", "Futures liability"), amount: text("30,000 دولار", "$30,000") },
          { label: text("30 يونيو: تعديل المخزون الإضافي", "30 June: further inventory adjustment"), debit: text("مخزون", "Inventory"), credit: text("ربح تحوط في الربح أو الخسارة", "Hedged-item gain in profit or loss"), amount: text("100,000 دولار", "$100,000") },
          { label: text("البيع: إثبات المتحصل", "Sale: recognise proceeds"), debit: text("نقدية", "Cash"), credit: text("إيراد", "Revenue"), amount: text("2,300,000 دولار", "$2,300,000") },
          { label: text("البيع: إخراج المخزون المعدل", "Sale: derecognise adjusted inventory"), debit: text("تكلفة مبيعات", "Cost of sales"), credit: text("مخزون", "Inventory"), amount: text("2,300,000 دولار", "$2,300,000") },
          { label: text("إقفال العقد بدفع صافي الالتزام", "Close the future by paying its net liability"), debit: text("التزام عقد مستقبلي", "Futures liability"), credit: text("نقدية", "Cash"), amount: text("200,000 دولار", "$200,000") },
        ],
        reference: "IFRS 9.6.4.1, 6.5.2(a), 6.5.8; IAS 2.34",
      },
      {
        title: text("Redblack: مصفوفة أعمار الذمم وحركة المخصص", "Redblack: receivables ageing matrix and allowance movement"),
        facts: text(
          "في 30 يونيو 20X4 بلغ إجمالي الذمم 60 مليون دولار موزعًا على شرائح: جارية 30 مليون بمعدل 0.3%؛ متأخرة 1–30 يومًا 15 مليون بمعدل 1.6%؛ 31–60 يومًا 8 ملايين بمعدل 3.6%؛ 61–90 يومًا 5 ملايين بمعدل 6.6%؛ أكثر من 90 يومًا مليونان بمعدل 10.6%. في 30 يونيو 20X5 كانت الأرصدة 32 و16 و10 و7 و3 ملايين، والمعدلات 0.5% و1.8% و3.8% و7% و11% بالترتيب. يفترض للحساب أن النسب المعطاة معدلات خسارة ائتمانية متوقعة على مدى العمر بعد معايرة التحصيلات والتوقعات، وأن المخصص الافتتاحي بقي 1.16 مليون دون شطب أو استخدام أو حركة أخرى.",
          "At 30 June 20X4 gross receivables total $60m by bucket: current $30m at 0.3%; 1–30 days overdue $15m at 1.6%; 31–60 days $8m at 3.6%; 61–90 days $5m at 6.6%; over 90 days $2m at 10.6%. At 30 June 20X5, balances are $32m, $16m, $10m, $7m and $3m, with rates of 0.5%, 1.8%, 3.8%, 7% and 11%. For this calculation, assume those rates are calibrated lifetime ECL rates after considering recoveries and forecasts, and that the opening $1.16m allowance has no intervening write-offs, use or other movement.",
        ),
        calculations: [
          text("مخصص 20X4 بالآلاف = 30,000 × 0.3% + 15,000 × 1.6% + 8,000 × 3.6% + 5,000 × 6.6% + 2,000 × 10.6% = 90 + 240 + 288 + 330 + 212 = 1,160.", "20X4 allowance in $000 = 30,000 × 0.3% + 15,000 × 1.6% + 8,000 × 3.6% + 5,000 × 6.6% + 2,000 × 10.6% = 90 + 240 + 288 + 330 + 212 = 1,160."),
          text("مخصص 20X5 بالآلاف = 32,000 × 0.5% + 16,000 × 1.8% + 10,000 × 3.8% + 7,000 × 7% + 3,000 × 11% = 160 + 288 + 380 + 490 + 330 = 1,648. الزيادة = 1,648 − 1,160 = 488 ألف دولار إذا لم توجد حركات أخرى.", "20X5 allowance in $000 = 32,000 × 0.5% + 16,000 × 1.8% + 10,000 × 3.8% + 7,000 × 7% + 3,000 × 11% = 160 + 288 + 380 + 490 + 330 = 1,648. Increase = 1,648 − 1,160 = $488,000 if there are no other movements."),
        ],
        conclusion: text("رصيد المخصص المطلوب في 20X5 هو 1,648,000 دولار، والزيادة المفترضة في الربح أو الخسارة 488,000 دولار. إذا كانت النسب مجرد احتمالات تعثر وليست معدلات خسارة بعد الاسترداد، فلا تكفي لحساب IFRS 9 دون بيانات الخسارة عند التعثر وغيرها.", "The required 20X5 allowance is $1,648,000 and the assumed increase in profit or loss is $488,000. If the percentages are merely default probabilities rather than post-recovery loss rates, IFRS 9 ECL cannot be determined without loss-given-default and other inputs."),
        journalEntries: [
          { label: text("زيادة المخصص المفترضة في 20X5", "Assumed 20X5 allowance increase"), debit: text("مصروف خسائر ائتمانية متوقعة", "Expected credit-loss expense"), credit: text("مخصص خسائر الذمم", "Receivables loss allowance"), amount: text("488,000 دولار", "$488,000") },
        ],
        reference: "IFRS 9.5.5.15–5.5.17, B5.5.35; IFRS 7.35N",
      },
    ],
  },
  "IAS 19": {
    sections: [
      {
        title: text(
          "الإجازة المرضية المتراكمة: احسب الزيادة المتوقعة في المدفوعات",
          "Accumulating sick leave: measure expected incremental payments",
        ),
        explanation: text(
          "الإجازة المدفوعة المتراكمة تنشئ التزامًا مع تقديم الخدمة التي تزيد حق الموظف في غياب مستقبلي، حتى لو كان الرصيد غير قابل للصرف نقدًا عند ترك العمل. لكن رصيد الأيام المرحلة ليس هو المصروف تلقائيًا: يقاس الالتزام بالمبلغ الإضافي المتوقع دفعه بسبب الأيام غير المستعملة في نهاية الفترة. افحص ترتيب استهلاك أيام السنة الجديدة والمرحلة، واحتمال بلوغ الموظفين سقف أيام السنة الجديدة؛ إذا استعمل الموظف أيام السنة الجديدة أولًا ولم يتجاوزها، فلن يتطلب الرصيد القديم دفعًا إضافيًا. عند عدم إعطاء أجر اليوم، أعرض النتيجة بوحدة أيام ولا تخترع مبلغًا نقديًا.",
          "Accumulating paid absence creates an obligation as service increases entitlement to future leave, even if unused days are not paid out on departure. Yet the carried-forward balance is not automatically the expense: measure the additional amount expected to be paid because of unused entitlement at period-end. Check the order in which new-year and carried-forward days are consumed and the likelihood of employees exceeding the new-year allowance. If current-year days are used first and an employee stays within that allowance, the old balance causes no incremental payment. Without a daily pay rate, report days rather than inventing a currency amount.",
        ),
        keyPoints: [
          text("ميّز التراكم عن استحقاق التعويض النقدي عند انتهاء العمل.", "Distinguish accumulation from cash vesting on leaving employment."),
          text("استخرج الأيام الإضافية المتوقعة، لا كامل الرصيد المرحّل.", "Calculate expected incremental days, not the entire carried-forward balance."),
          text("راجع ترتيب الاستهلاك وتاريخ انتهاء صلاحية الأيام.", "Check consumption order and expiry of days."),
        ],
        reference: "IAS 19.13–17",
      },
      {
        title: text(
          "إغلاق منشأة: افصل تعويض الإنهاء عن مكافأة البقاء",
          "Factory closure: separate termination pay from retention pay",
        ),
        explanation: text(
          "قد تعلن المنشأة مبلغًا أكبر لمن يظل حتى الإغلاق، مع مبلغ أساس تدفعه لكل من تنتهي خدمته بسبب القرار. مبلغ الأساس مقابل إنهاء العمل، فيعترف به عند التاريخ الأسبق لتعذر سحب العرض أو إثبات تكلفة إعادة هيكلة مؤهلة تشمل تلك المدفوعات. الزيادة المشروطة بأداء خدمة حتى الإغلاق ليست كلها تعويض إنهاء؛ إنها مقابل الخدمة المستقبلية وتُحمّل على فترات تقديمها مع تحديث عدد المتوقع بقائهم. اختبر مدة التسوية لتحديد ما إذا كانت الزيادة منفعة قصيرة الأجل، ولا تثبتها كلها يوم إعلان الخطة. في خطط المنافع المحددة، لا تستخدم نموذج «العائد المتوقع» القديم لقياس صافي الفائدة؛ تكلفة الخدمة وصافي الفائدة في الربح أو الخسارة، وإعادة القياس في الدخل الشامل الآخر.",
          "An entity may announce a larger payment for employees who stay until closure and a base amount for everyone whose employment ends because of the decision. The base amount is for termination and is recognised at the earlier of the offer becoming non-withdrawable and recognition of a qualifying restructuring cost involving the payments. The increment conditional on service until closure is not entirely termination pay: it compensates future service and is accrued over the service periods, updating the expected number who stay. Assess settlement timing to classify the increment as short-term when appropriate; do not expense it all on announcement. For defined-benefit plans, do not use the old separate expected-return model for net interest; service cost and net interest are in profit or loss, while remeasurements are in OCI.",
        ),
        keyPoints: [
          text("حدد المبلغ المستحق سواء بقي الموظف أم غادر قبل الإغلاق.", "Identify the amount payable whether the employee stays or leaves early."),
          text("وزع فقط الزيادة المشروطة بالخدمة على فترة البقاء المطلوبة.", "Spread only the service-dependent increment over the required retention period."),
          text("أعد تقدير العدد المتوقع بقاؤه ولا تخلط بين التوقيت والتصنيف.", "Re-estimate expected stayers and keep timing separate from classification."),
        ],
        reference: "IAS 19.8, 11, 159–170; IAS 37.72–83",
      },
    ],
    workedExamples: [
      {
        title: text("Plyman: اثنا عشر يومًا لا مئتا يوم", "Plyman: twelve days, not two hundred"),
        facts: text(
          "لدى Plyman مئة موظف، ولكل منهم خمسة أيام مرضية مدفوعة سنويًا. تنتقل الأيام غير المستعملة لسنة واحدة، وتستهلك أيام السنة الجديدة قبل الأيام المرحلة. في نهاية 20X8 تبقى في المتوسط يومان لكل موظف. يتوقع أن يستخدم 92 موظفًا خمسة أيام أو أقل في 20X9، وأن يستخدم الثمانية الآخرون 6.5 أيام لكل منهم. لم يحدد أجر اليوم.",
          "Plyman has 100 employees, each entitled to five paid sick days a year. Unused days carry forward for one year, and new-year days are used before carried-forward days. At the end of 20X8, each employee has two unused days on average. In 20X9, 92 employees are expected to use no more than five days, and the other eight to use 6.5 days each. No daily pay rate is given.",
        ),
        calculations: [
          text("الرصيد النظري = 100 × 2 = 200 يوم. للـ92 موظفًا لا توجد أيام إضافية متوقعة. لكل من الثمانية الآخرين: 6.5 − 5 = 1.5 يوم من الرصيد القديم، وهو أقل من الحد المرحّل البالغ يومين؛ الإجمالي 8 × 1.5 = 12 يومًا.", "The nominal balance is 100 × 2 = 200 days. The 92 employees generate no expected incremental days. Each of the other eight needs 6.5 − 5 = 1.5 carried-forward days, below the two-day balance; total incremental days are 8 × 1.5 = 12."),
        ],
        conclusion: text("يعترف بتكلفة والتزام يعادلان أجر 12 يومًا وفق الأجر المعمول به؛ لا يمكن تحديد مبلغ نقدي من الوقائع ولا يصح ضرب الأجر في 200 يوم.", "Recognise expense and liability for 12 days at the applicable pay rate. The facts do not support a currency amount, nor an expense for all 200 days."),
        journalEntries: [
          {
            label: text("استحقاق الإجازة المرضية الإضافية", "Accrue incremental sick leave"),
            debit: text("مصروف منافع الموظفين", "Employee-benefit expense"),
            credit: text("التزام إجازات مرضية مستحقة", "Accrued sick-leave liability"),
            amount: text("أجر 12 يومًا؛ المعدل غير معطى", "Pay for 12 days; rate not supplied"),
          },
        ],
        reference: "IAS 19.13–17",
      },
      {
        title: text("إغلاق المصنع: 1.2 مليون إنهاء و2 مليون خدمة", "Factory closure: 1.2 million termination and 2 million service"),
        facts: text(
          "ستغلق منشأة مصنعًا بعد عشرة أشهر وتنهي عمل العاملين المتبقين. تعرض 10,000 وحدة نقد لكل عامل يغادر قبل الإغلاق و30,000 لمن يستمر حتى يوم الإغلاق. عدد العاملين 120، ويتوقع مغادرة 20 مبكرًا وبقاء 100. نفترض استيفاء شروط الاعتراف بمزايا الإنهاء عند إعلان خطة الإغلاق، وأن المنفعة الإضافية قصيرة الأجل ولا يلزم خصمها.",
          "An entity will close a factory in ten months and terminate remaining staff. It offers CU10,000 to each employee leaving early and CU30,000 to each who serves until closure. There are 120 employees; 20 are expected to leave early and 100 to remain. Assume the termination-recognition criteria are met when the plan is announced, and the incremental benefit is short-term with no discount required.",
        ),
        calculations: [
          text("التدفق النقدي المتوقع = 20 × 10,000 + 100 × 30,000 = 3,200,000. جزء الإنهاء الأساسي = 120 × 10,000 = 1,200,000. الزيادة المقابلة للخدمة = 100 × (30,000 − 10,000) = 2,000,000، وتكلفتها الشهرية المبدئية 2,000,000 ÷ 10 = 200,000.", "Expected cash outflow = 20 × CU10,000 + 100 × CU30,000 = CU3,200,000. Base termination component = 120 × CU10,000 = CU1,200,000. Service-dependent increment = 100 × (CU30,000 − CU10,000) = CU2,000,000, initially CU200,000 per month over ten months."),
        ],
        conclusion: text("عند تحقق شرط الاعتراف يثبت 1,200,000 فورًا كمزايا إنهاء. ويثبت 200,000 شهريًا، وفق تقدير البقاء المحدّث، مقابل الخدمة اللاحقة؛ لا يثبت كامل 3,200,000 في يوم الإعلان.", "When the recognition trigger occurs, CU1,200,000 is recognised as termination benefits. Accrue the service component initially at CU200,000 a month, revising expected retention; do not recognise all CU3,200,000 on announcement."),
        journalEntries: [
          { label: text("عند تحقق شرط إنهاء الخدمة", "At termination recognition trigger"), debit: text("مصروف مزايا إنهاء الخدمة", "Termination-benefit expense"), credit: text("التزام مزايا إنهاء الخدمة", "Termination-benefit liability"), amount: text("1,200,000 وحدة نقد", "CU1,200,000") },
          { label: text("في كل شهر خدمة، مبدئيًا", "Each service month, initially"), debit: text("مصروف مزايا الموظفين قصيرة الأجل", "Short-term employee-benefit expense"), credit: text("التزام مكافأة البقاء", "Retention-benefit liability"), amount: text("200,000 وحدة نقد", "CU200,000") },
        ],
        reference: "IAS 19.11, 159–170; IAS 37.72–83",
      },
    ],
  },
  "IAS 37": {
    sections: [
      {
        title: text(
          "من نسب عيوب الضمان إلى مخصص واحد قابل للتسوية",
          "From warranty defect frequencies to one reconcilable provision",
        ),
        explanation: text(
          "عند بيع مجموعة كبيرة من المنتجات بضمان مطابقة، لا تختبر المنشأة احتمال مطالبة كل عميل منفردًا ثم تهمل الباقي. تقيّم الالتزام على مستوى مجموعة الضمانات، وتضرب احتمال كل نتيجة في تكلفة تحققها لو انطبقت على كامل المجموعة، ثم تجمع القيم المتوقعة. تحقق من أن فئات النتائج حصرية ومجموع احتمالاتها 100%، وأن تقديرات التكلفة تخص المبيعات التي نشأ عنها التزام في تاريخ التقرير. ضمان الخدمة المنفصل يخضع لتحليل IFRS 15 بدل افتراض دخوله تلقائيًا في هذا المخصص.",
          "For a large population of assurance warranties, do not dismiss each individual claim because it is uncertain. Evaluate the population, multiply each outcome's probability by its cost if applied to the whole population, and sum the expected values. Check that outcomes are mutually exclusive and probabilities total 100%, and that costs relate to sales already creating an obligation at reporting date. A separate service warranty requires IFRS 15 analysis rather than automatic inclusion in this provision.",
        ),
        keyPoints: [
          text(
            "استخدم التوزيع الاحتمالي الكامل، بما فيه فئة «بلا عيوب» بتكلفة صفر.",
            "Use the complete probability distribution, including a zero-cost no-defect category.",
          ),
          text(
            "راجع ما إذا كان الضمان لتأكيد المطابقة أو خدمة مستقلة قبل اختيار المعيار.",
            "Check whether the warranty assures compliance or provides a separate service before choosing the Standard.",
          ),
        ],
        reference: "IAS 37.14, 24, 36–40; IFRS 15.B28–B33",
      },
      {
        title: text(
          "العقد المرهق: قارن الخسارة الصافية بخيار الخروج",
          "Onerous contract: compare net fulfilment loss with exit cost",
        ),
        explanation: text(
          "وجود عقد بسعر أقل من تكلفة تنفيذه لا يعني تلقائيًا أن المخصص يساوي كامل تكلفة التنفيذ. احسب صافي خسارة الوفاء بعد المنافع المتوقعة من العقد، ثم قارنها بالتعويض أو الغرامة الواجبة عند الإخلال؛ الأقل يمثل تكلفة الخروج التي لا يمكن تجنبها. تشمل تكلفة التنفيذ التكاليف الإضافية وتوزيع التكاليف الأخرى المرتبطة مباشرة بالعقد وفق IAS 37 الحالي. قبل إنشاء مخصص منفصل، أثبت أي انخفاض في الأصول المستخدمة لتنفيذه. لا تعدّ احتمال الحصول على عقود مستقبلية مستقلة منفعة مؤكدة من العقد القائم بلا حق تعاقدي.",
          "A fixed price below fulfilment cost does not make the provision equal to total fulfilment cost. Calculate the net fulfilment loss after benefits expected from the contract, then compare it with compensation or penalty for failing to perform; the lower figure is the unavoidable exit cost. Current IAS 37 includes incremental costs and allocated other directly related costs in fulfilment cost. Recognise impairment of assets used to fulfil the contract before a separate provision. Do not treat hopes of separate future contracts as enforceable benefits of this one.",
        ),
        keyPoints: [
          text(
            "افحص أولًا انخفاض الأصول المتعلقة بالعقد ثم احسب المخصص المتبقي.",
            "Test assets related to the contract for impairment before measuring the remaining provision.",
          ),
          text(
            "لا تخلط بين مبلغ الإيراد المتوقع والخسارة الصافية من الوفاء.",
            "Do not confuse expected contract revenue with the net loss from fulfilment.",
          ),
        ],
        reference: "IAS 37.66–69; IAS 36.9",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مخصص ضمان Parker بالقيمة المتوقعة",
          "Parker warranty provision using expected value",
        ),
        facts: text(
          "تبيع Parker Co سلعًا بضمان مطابقة ستة أشهر. تشير الخبرة إلى أن 75% من المبيعات بلا عيوب، و20% تحتاج إصلاحًا بسيطًا، و5% إصلاحًا كبيرًا. لو احتاجت جميع الوحدات إصلاحًا بسيطًا لكانت تكلفته مليون دولار؛ ولو احتاجتها جميعًا إصلاحًا كبيرًا لكانت التكلفة 4 ملايين. يفترض المثال أن المبيعات أنشأت التزام ضمان حاليًا وأن أثر خصم ستة أشهر غير جوهري.",
          "Parker Co sells goods with a six-month assurance warranty. Experience suggests 75% will have no defect, 20% a minor defect and 5% a major defect. Repairing the entire population for minor defects would cost $1 million; repairing it all for major defects would cost $4 million. Assume the sales created a present warranty obligation and discounting over six months is immaterial.",
        ),
        calculations: [
          text(
            "القيمة المتوقعة = 75% × صفر + 20% × 1,000,000 + 5% × 4,000,000 = 400,000 دولار. لا تجمع 1 و4 ملايين ثم تضربهما في إجمالي نسبة العيوب 25%؛ لكل فئة احتمالها وتكلفتها.",
            "Expected value = 75% × nil + 20% × $1,000,000 + 5% × $4,000,000 = $400,000. Do not add the two full-population costs and multiply by the combined 25% defect rate; each outcome has its own probability and cost.",
          ),
        ],
        conclusion: text(
          "يثبت مخصص ضمان 400,000 دولار للمجموعة المباعة، ويعاد تقديره لاحقًا حسب المطالبات والمعلومات الجديدة.",
          "Recognise a $400,000 provision for the sold population and update the estimate as claims and information change.",
        ),
        journalEntries: [
          {
            label: text("إثبات مخصص الضمان", "Recognise warranty provision"),
            debit: text("مصروف الضمان", "Warranty expense"),
            credit: text("مخصص الضمان", "Warranty provision"),
            amount: text("400,000 دولار", "$400,000"),
          },
        ],
        reference: "IAS 37.14, 24, 36–40; IFRS 15.B28–B33",
      },
      {
        title: text(
          "عقد Leaf المرهق: الوفاء أم دفع التعويض؟",
          "Leaf's onerous contract: perform or pay compensation?",
        ),
        facts: text(
          "وقعت Leaf Co عقدًا لإنشاء أصل لدى عميل بسعر ثابت 100,000 دولار. التكاليف المقدرة اللازمة للوفاء 120,000 دولار، وتعويض الانسحاب من العقد 30,000. تأمل الشركة كسب أعمال مستقبلية بسبب علاقتها بالعميل، لكن لا حق تعاقدي لها في تلك الأعمال. يفترض المثال أن الـ120,000 تشمل جميع التكاليف المرتبطة مباشرة بالعقد، ولا توجد أصول متعلقة به يلزم اختبار انخفاضها أو أثر خصم جوهري.",
          "Leaf Co signs a contract to build an asset on a customer's premises for a fixed $100,000. Estimated costs to fulfil are $120,000 and compensation for withdrawing is $30,000. The company hopes for future customer business but has no contractual right to it. Assume the $120,000 includes all costs directly related to this contract, there is no related asset requiring an impairment test, and discounting is immaterial.",
        ),
        calculations: [
          text(
            "خسارة الوفاء الصافية = 120,000 − 100,000 = 20,000. تكلفة الانسحاب = 30,000؛ الأقل غير القابل للتجنب = 20,000 دولار.",
            "Net fulfilment loss = $120,000 − $100,000 = $20,000. Exit compensation = $30,000; the lower unavoidable cost is $20,000.",
          ),
        ],
        conclusion: text(
          "يثبت مخصص عقد مرهق 20,000 دولار لا 30,000 أو 120,000. الأمل في عمل مستقبلي منفصل لا يقلل التزام هذا العقد.",
          "Recognise a $20,000 onerous-contract provision, not $30,000 or $120,000. Hoped-for separate future business does not reduce this contract's obligation.",
        ),
        journalEntries: [
          {
            label: text("إثبات خسارة العقد المرهق", "Recognise onerous-contract loss"),
            debit: text("خسارة عقد مرهق", "Onerous-contract loss"),
            credit: text("مخصص عقد مرهق", "Onerous-contract provision"),
            amount: text("20,000 دولار", "$20,000"),
          },
        ],
        reference: "IAS 37.66–69",
      },
    ],
  },
  "IAS 38": {
    sections: [
      {
        title: text(
          "تاريخ استيفاء شروط التطوير هو بداية الأصل",
          "The development criteria date is the asset's starting point",
        ),
        explanation: text(
          "تُحمل تكاليف البحث والتطوير السابقة لتاريخ إثبات شروط IAS 38 الستة جميعًا على المصروف. من ذلك التاريخ فقط يبدأ تجميع تكاليف الأصل غير الملموس. نجاح المشروع لاحقًا أو ارتفاع قيمته القابلة للاسترداد لا يسمح بإعادة رسملة ما سبق إثباته مصروفًا. افصل في ملف المشروع بين إثبات الجدوى والموارد والقدرة على البيع أو الاستخدام، وتاريخ كل نفقة.",
          "Expense research and development costs incurred before all six IAS 38 criteria can be demonstrated. Only costs from that date form the internally generated intangible's cost. Later success or a high recoverable amount does not permit reinstatement of earlier expenses. Record evidence of feasibility, resources and ability to use or sell alongside each expenditure date.",
        ),
        keyPoints: [
          text(
            "الرسملة تبدأ مستقبلًا عندما تُثبت كل الشروط؛ ليست خيارًا بأثر رجعي.",
            "Capitalisation begins prospectively once every criterion is demonstrated; it is not a retrospective choice.",
          ),
          text(
            "لا تخلط بين تكلفة الأصل والقيمة القابلة للاسترداد في اختبار الانخفاض.",
            "Do not confuse asset cost with recoverable amount in an impairment test.",
          ),
        ],
        reference: "IAS 38.54–57, 65–67, 71; IAS 36.18",
      },
    ],
    workedExamples: [
      {
        title: text(
          "مشروع تطوير: إنفاق قبل استيفاء الشروط وبعده",
          "Development spending before and after the criteria date",
        ),
        facts: text(
          "أنفقت Doug Co مبلغ 100,000 دولار على عملية إنتاج جديدة خلال 20X3: منها 90,000 قبل 1 ديسمبر و10,000 في ديسمبر. في 1 ديسمبر أمكن إثبات جميع شروط الاعتراف بأصل تطوير. قدرت القيمة القابلة للاسترداد للمعرفة الفنية الناتجة في نهاية السنة بـ50,000 دولار. لا يحدد السؤال متى أصبح الأصل متاحًا للاستخدام أو عمره النافع.",
          "Doug Co spent $100,000 on a new production process in 20X3: $90,000 before 1 December and $10,000 during December. All development-asset recognition criteria could first be demonstrated on 1 December. The resulting know-how's year-end recoverable amount was estimated at $50,000. The facts do not specify an available-for-use date or useful life.",
        ),
        calculations: [
          text(
            "تكلفة الأصل المؤهل = 10,000 فقط منذ 1 ديسمبر. تبقى الـ90,000 السابقة مصروفًا، ولا يعاد إثباتها أصلًا عند نجاح المشروع.",
            "Qualifying asset cost is only the $10,000 incurred from 1 December. The earlier $90,000 remains expense and is not reinstated after the project's success.",
          ),
          text(
            "القيمة القابلة للاسترداد 50,000 لا ترفع تكلفة الأصل من 10,000 إلى 50,000، ولا تشير الأرقام المعطاة إلى خسارة انخفاض. لا يخترع المثال إهلاكًا دون تاريخ الإتاحة والعمر النافع.",
            "The $50,000 recoverable amount does not uplift $10,000 cost to $50,000, and the supplied figures do not indicate impairment. No amortisation is invented without an available-for-use date and useful life.",
          ),
        ],
        conclusion: text(
          "تظهر تكلفة تطوير 10,000 دولار قبل أي إهلاك يحتاج وقائع إضافية، مع مصروف سابق 90,000 دولار في 20X3.",
          "Development cost is $10,000 before any amortisation needing further facts, while $90,000 is a 20X3 expense.",
        ),
        journalEntries: [
          {
            label: text("الإنفاق السابق لاستيفاء الشروط", "Spending before the criteria date"),
            debit: text("مصروف بحث وتطوير", "Research and development expense"),
            credit: text("نقدية أو دائنون", "Cash or payables"),
            amount: text("90,000 دولار", "$90,000"),
          },
          {
            label: text("التطوير المؤهل منذ 1 ديسمبر", "Qualifying development from 1 December"),
            debit: text("أصل غير ملموس — تطوير", "Intangible asset — development"),
            credit: text("نقدية أو دائنون", "Cash or payables"),
            amount: text("10,000 دولار", "$10,000"),
          },
        ],
        reference: "IAS 38.54–57, 65–67, 71; IAS 36.18",
      },
      {
        title: text(
          "هبوط إعادة تقييم يتجاوز فائض الأصل",
          "Downward revaluation exceeding the asset's surplus",
        ),
        facts: text(
          "لأصل غير ملموس مطبق عليه نموذج إعادة التقييم بافتراض وجود سوق نشط، رصيد فائض خاص به 400 دولار من إعادة تقييم 20X3. في نهاية 20X4 لزم خفض قيمته الدفترية 500 دولار، دون تغير آخر في فائض الأصل.",
          "For an intangible measured under the revaluation model, assuming an active market, a $400 surplus for that asset arose in 20X3. At the end of 20X4 its carrying amount must fall by $500, with no other change in this asset's surplus.",
        ),
        calculations: [
          text(
            "من هبوط 500 دولار، يُعترف بـ400 في الدخل الشامل الآخر مع خفض فائض الأصل إلى صفر، وبالـ100 الزائدة في الربح أو الخسارة.",
            "Of the $500 decrease, $400 goes to other comprehensive income and reduces this asset's surplus to nil; the $100 excess goes to profit or loss.",
          ),
        ],
        conclusion: text(
          "لا يُسجل الانخفاض كله مصروفًا، ولا يُستخدم فائض أصل آخر. يشترط السوق النشط أصلًا لتطبيق نموذج إعادة التقييم.",
          "Do not expense the entire decrease or use another asset's surplus. An active market is a prerequisite for this revaluation model.",
        ),
        journalEntries: [
          {
            label: text("الجزء المقابل لفائض الأصل", "Amount offset against this asset's surplus"),
            debit: text(
              "الدخل الشامل الآخر — فائض إعادة التقييم",
              "Other comprehensive income — revaluation surplus",
            ),
            credit: text("الأصل غير الملموس", "Intangible asset"),
            amount: text("400 دولار", "$400"),
          },
          {
            label: text("الجزء الزائد على الفائض", "Amount exceeding the surplus"),
            debit: text(
              "خسارة إعادة تقييم — الربح أو الخسارة",
              "Revaluation loss — profit or loss",
            ),
            credit: text("الأصل غير الملموس", "Intangible asset"),
            amount: text("100 دولار", "$100"),
          },
        ],
        reference: "IAS 38.75–78, 86",
      },
    ],
  },
  "IAS 36": {
    sections: [
      {
        title: text(
          "احسب القيمة من الاستخدام من التدفقات، ثم قارنها بالبيع",
          "Discount use cash flows before comparing with disposal value",
        ),
        explanation: text(
          "اختبار الانخفاض ليس مقارنة القيمة الدفترية بإجمالي التدفقات المستقبلية غير المخصومة. تُقدّر التدفقات النقدية الملائمة الناتجة من الأصل في حالته الحالية، وتُخصم بمعدل مناسب إلى تاريخ القياس لاستخراج القيمة من الاستخدام. ثم تُقارن بالقيمة العادلة ناقص تكاليف التصرف؛ الأكبر منهما هو القيمة القابلة للاسترداد. تفصل الخطوات بين إهلاك السنة السابقة وتقدير الخسارة الجديدة، وتوضح أثر التقريب في المثال الرقمي.",
          "An impairment test does not compare carrying amount with undiscounted future cash flows. Estimate relevant cash flows from the asset in its current condition and discount them at an appropriate rate to the measurement date to obtain value in use. Compare that with fair value less costs of disposal; the higher is recoverable amount. Keep the prior year's depreciation separate from the new loss estimate and disclose rounding in numerical examples.",
        ),
        keyPoints: [
          text(
            "استخدم القيمة الأعلى بين الاستخدام والتصرف، لا مجموعهما ولا الأقل منهما.",
            "Use the higher of use and disposal values, neither their sum nor the lower value.",
          ),
          text(
            "طابق تاريخ التدفقات ومعدل الخصم، ولا تضف تدفقات تمويل أو تحسينات مستقبلية غير مسموحة.",
            "Align cash-flow timing and discount rate; do not add financing flows or unsupported future enhancement benefits.",
          ),
        ],
        reference: "IAS 36.6, 18–21, 30–57, 59–60",
      },
    ],
    workedExamples: [
      {
        title: text(
          "قيمة من الاستخدام لأربع سنوات وخسارة انخفاض مع أثر التقريب",
          "Four-year value-in-use estimate and impairment with rounding",
        ),
        facts: text(
          "اشترت منشأة أصلًا بمبلغ 3,000,000 دولار في 1 يونيو 20X3، ويهلك خطيًا خلال خمس سنوات دون قيمة متبقية. في 31 مايو 20X4 قدرت صافي التدفقات السنوية في نهاية السنوات الأربع التالية بمبالغ 280,000 و450,000 و500,000 و550,000 دولار. القيمة العادلة ناقص تكاليف التصرف 1,400,000 دولار. يفترض المثال ملاءمة معدل خصم 5% والتدفقات المعطاة، وعدم وجود تدفقات إضافية بعد السنة الرابعة.",
          "An entity acquires an asset for $3,000,000 on 1 June 20X3, depreciated straight-line over five years with nil residual value. At 31 May 20X4 it estimates net cash flows at the ends of the next four years of $280,000, $450,000, $500,000 and $550,000. Fair value less costs of disposal is $1,400,000. Assume the supplied 5% discount rate and cash flows are appropriate and no additional flows arise after year four.",
        ),
        calculations: [
          text(
            "إهلاك السنة الأولى = 3,000,000 ÷ 5 = 600,000؛ القيمة الدفترية قبل اختبار الانخفاض = 2,400,000.",
            "Year-one depreciation = $3,000,000 ÷ 5 = $600,000; pre-test carrying amount = $2,400,000.",
          ),
          text(
            "القيمة من الاستخدام = 280,000÷1.05 + 450,000÷1.05² + 500,000÷1.05³ + 550,000÷1.05⁴ = 1,559,235 دولارًا تقريبًا. إذا قُرِّب كل تدفق مخصوم إلى أقرب ألف، يصبح المجموع 1,559,000.",
            "Value in use = $280,000÷1.05 + $450,000÷1.05² + $500,000÷1.05³ + $550,000÷1.05⁴ ≈ $1,559,235. Rounding each discounted flow to the nearest thousand gives a total of $1,559,000.",
          ),
          text(
            "القيمة القابلة للاسترداد هي الأعلى بين 1,559,235 تقريبًا و1,400,000، أي 1,559,235. خسارة الانخفاض بالحساب غير المقرب ≈ 2,400,000 − 1,559,235 = 840,765؛ وتصبح 841,000 عند عرض المثال بأقرب ألف.",
            "Recoverable amount is the higher of approximately $1,559,235 and $1,400,000, so about $1,559,235. The unrounded impairment is approximately $2,400,000 − $1,559,235 = $840,765; reporting to the nearest thousand gives $841,000.",
          ),
        ],
        conclusion: text(
          "يخفض الأصل إلى قيمته القابلة للاسترداد، ويعاد حساب إهلاكه اللاحق على قيمته الجديدة وعمره المتبقي. الفرق بين 840,765 و841,000 تقريب عرض فقط، لا قاعدتان مختلفتان للقياس.",
          "Write the asset down to recoverable amount and recalculate subsequent depreciation using its revised carrying amount and remaining life. The difference between $840,765 and $841,000 is display rounding, not a different measurement rule.",
        ),
        journalEntries: [
          {
            label: text(
              "إثبات الخسارة بالحساب غير المقرب تقريبًا",
              "Recognise approximately unrounded loss",
            ),
            debit: text("خسارة انخفاض — الربح أو الخسارة", "Impairment loss — profit or loss"),
            credit: text("مجمع انخفاض الأصل", "Accumulated impairment"),
            amount: text("840,765 تقريبًا", "approximately $840,765"),
          },
        ],
        reference: "IAS 36.6, 18, 30–57, 59–60, 63",
      },
    ],
  },
  "IAS 20": {
    sections: [
      {
        title: text(
          "منحة الأصل تتبع استهلاك الأصل لا يوم قبضها",
          "An asset grant follows the asset's consumption, not its receipt date",
        ),
        explanation: text(
          "إذا توافر التأكيد المعقول باستيفاء شروط المنحة وتحصيلها، تُعترف منحة الأصل بصورة منهجية عبر الفترات التي تحمل إهلاك الأصل. يجوز عرضها دخلًا مؤجلًا يُطلق تدريجيًا، أو خصمها من القيمة الدفترية للأصل بحيث يظهر أثرها بخفض مصروف الإهلاك. لا يجوز الجمع بين الطريقتين للمنحة نفسها، ولا يغير اختلاف طريقة الإهلاك مجموع المنحة المستحق.",
          "Once there is reasonable assurance of compliance with grant conditions and receipt, an asset grant is recognised systematically over the periods bearing the asset's depreciation. It may be presented as deferred income released over time or deducted from the asset's carrying amount so its effect reduces depreciation expense. Do not apply both methods to the same grant; the depreciation pattern changes timing, not total grant entitlement.",
        ),
        keyPoints: [
          text(
            "في طريقة الدخل المؤجل، قابل نسبة الإيراد المعترف به بنسبة إهلاك الأصل المرتبط.",
            "Under deferred income, match the proportion of grant income to the related asset's depreciation pattern.",
          ),
          text(
            "قبل الإثبات تحقق من شروط المنحة والتأكيد المعقول، ولا تفترض أن القبض وحده يكفي.",
            "Check grant conditions and reasonable assurance before recognition; cash receipt alone is insufficient.",
          ),
        ],
        reference: "IAS 20.7, 12, 24–27",
      },
    ],
    workedExamples: [
      {
        title: text(
          "منحة تغطي نصف تكلفة آلة مع طريقتين للإهلاك",
          "Grant covering half a machine's cost under two depreciation patterns",
        ),
        facts: text(
          "تكلفة آلة 40,000 دولار، وعمرها أربع سنوات وقيمتها المتبقية صفر. تغطي منحة حكومية 50% من تكلفتها، أي 20,000 دولار. يفترض المثال تحقق شروط الاعتراف واختيار عرض المنحة دخلًا مؤجلًا. قارن الإهلاك الخطي بإهلاك 40% من الرصيد المتناقص مع تسوية المتبقي في السنة الأخيرة لإتمام العمر المحدد.",
          "A machine costs $40,000, has a four-year useful life and nil residual value. A government grant covers 50% of its cost, or $20,000. Assume recognition conditions are met and the grant is presented as deferred income. Compare straight-line depreciation with 40% reducing balance, clearing the remaining balance in the final year to meet the specified life.",
        ),
        calculations: [
          text(
            "القسط الثابت: إهلاك كل سنة = 40,000 ÷ 4 = 10,000؛ إيراد المنحة المقابل = 20,000 ÷ 4 = 5,000. إجمالي كل منهما خلال أربع سنوات 40,000 و20,000.",
            "Straight line: annual depreciation = $40,000 ÷ 4 = $10,000; related annual grant income = $20,000 ÷ 4 = $5,000. Four-year totals are $40,000 and $20,000 respectively.",
          ),
          text(
            "الرصيد المتناقص: إهلاك السنوات 1–3 = 16,000 ثم 9,600 ثم 5,760؛ الرصيد الباقي للسنة 4 = 8,640. إيراد المنحة المقابل = 8,000 ثم 4,800 ثم 2,880 ثم 4,320؛ مجموعه 20,000.",
            "Reducing balance: depreciation in years 1–3 is $16,000, $9,600 and $5,760; the remaining year-four amount is $8,640. Corresponding grant income is $8,000, $4,800, $2,880 and $4,320, totalling $20,000.",
          ),
          text(
            "بديل العرض بخصم المنحة من الأصل يخفض الأساس القابل للإهلاك إلى 20,000، ويخفض كل قسط إهلاك في هذا المثال إلى نصف القسط الإجمالي المقابل؛ لا يُثبت حينئذ إيراد منحة منفصل.",
            "The alternative presentation deducts the grant from the asset, leaving a $20,000 depreciable base and halving each corresponding gross depreciation charge in this example; no separate grant income is then recorded.",
          ),
        ],
        conclusion: text(
          "نمط الإهلاك يحدد توقيت تحرير المنحة، لكن إجمالي الأثر الصافي عبر عمر الأصل يبقى 20,000 دولار قبل أي ضرائب أو تغييرات تقدير.",
          "The depreciation pattern determines grant-release timing, but the total net effect over the asset's life remains $20,000 before tax or estimate changes.",
        ),
        journalEntries: [
          {
            label: text(
              "عند استحقاق المنحة وتحصيلها، بطريقة الدخل المؤجل",
              "On entitlement and collection, deferred-income method",
            ),
            debit: text("النقدية", "Cash"),
            credit: text("دخل منحة مؤجل", "Deferred grant income"),
            amount: text("20,000", "20,000"),
          },
          {
            label: text(
              "إهلاك السنة الأولى بطريقة القسط الثابت",
              "Year-one straight-line depreciation",
            ),
            debit: text("مصروف إهلاك", "Depreciation expense"),
            credit: text("مجمع إهلاك", "Accumulated depreciation"),
            amount: text("10,000", "10,000"),
          },
          {
            label: text(
              "تحرير منحة السنة الأولى بطريقة القسط الثابت",
              "Year-one straight-line grant release",
            ),
            debit: text("دخل منحة مؤجل", "Deferred grant income"),
            credit: text("إيراد منحة", "Grant income"),
            amount: text("5,000", "5,000"),
          },
        ],
        reference: "IAS 20.7, 12, 24–27; IAS 16.50–62",
      },
    ],
  },
  "IAS 23": {
    sections: [
      {
        title: text(
          "الإنفاق على أصل مؤهل بتمويل عام: عامل الزمن حاسم",
          "General borrowings for a qualifying asset: timing matters",
        ),
        explanation: text(
          "عند تمويل أصل مؤهل من اقتراض عام، تُحسب نسبة الرسملة من المتوسط المرجح لتكاليف القروض المعنية ثم تطبق على الإنفاق المؤهل خلال المدة التي تتحقق فيها شروط بدء الرسملة. مبلغ يصرف في أول السنة يتحمل وزنًا زمنيًا مختلفًا عن مبلغ يصرف في أول الربع الأخير. لا يتجاوز مجموع الرسملة تكاليف الاقتراض الفعلية للفترة، وتبقى التكاليف غير المؤهلة مصروفًا.",
          "For a qualifying asset funded by general borrowings, derive the capitalisation rate from the weighted average borrowing costs and apply it to qualifying expenditure for the period in which commencement criteria are met. Spending at the year's start has a different time weight from spending at the final quarter's start. Capitalisation cannot exceed borrowing costs actually incurred; ineligible costs remain an expense.",
        ),
        keyPoints: [
          text(
            "احسب معدل كل قرض موزونًا بحجم القرض، ثم زن كل دفعة إنفاق بعدد أشهرها.",
            "Weight each borrowing rate by its loan balance, then time-weight each expenditure tranche.",
          ),
          text(
            "وجود قرض طوال السنة لا يجعل إنفاق أكتوبر كأنه أنفق في يناير.",
            "A loan outstanding all year does not make October expenditure a January expenditure.",
          ),
        ],
        reference: "IAS 23.8, 14, 17–18",
      },
    ],
    workedExamples: [
      {
        title: text(
          "آلة كهرومائية وقرضان عامان بإنفاق مرحلي",
          "Hydroelectric machine with two general loans and staged expenditure",
        ),
        facts: text(
          "بدأ إنشاء آلة مؤهلة للرسملة في 1 يناير 20X6، واستمرت أنشطة تجهيزها خلال السنة. لدى المنشأة قرضان عامان قائمان طوال السنة: 120 مليون دولار بفائدة 10% و80 مليونًا بفائدة 9.5%. أنفقت 30 مليونًا على الآلة في 1 يناير و20 مليونًا إضافية في 1 أكتوبر. يفترض المثال عدم وجود قروض مخصصة أو أصول مؤهلة أخرى تؤثر في الحد الأقصى.",
          "Construction of a qualifying machine starts on 1 January 20X6 and necessary preparation continues through the year. The entity has two general loans outstanding throughout: $120m at 10% and $80m at 9.5%. It spends $30m on the machine on 1 January and another $20m on 1 October. Assume no specific borrowings or other qualifying assets affect the cap.",
        ),
        calculations: [
          text(
            "نسبة الرسملة = (120 × 10% + 80 × 9.5%) ÷ (120 + 80) = 19.6 ÷ 200 = 9.8%.",
            "Capitalisation rate = (120 × 10% + 80 × 9.5%) ÷ (120 + 80) = 19.6 ÷ 200 = 9.8%.",
          ),
          text(
            "نصيب إنفاق يناير = 30 × 9.8% × 12÷12 = 2.94 مليون؛ ونصيب إنفاق أكتوبر = 20 × 9.8% × 3÷12 = 0.49 مليون.",
            "January expenditure contributes $30m × 9.8% × 12÷12 = $2.94m; October expenditure contributes $20m × 9.8% × 3÷12 = $0.49m.",
          ),
          text(
            "تكلفة الاقتراض المرسملة = 3.43 مليون. إجمالي فائدة القرضين خلال السنة = 19.6 مليون؛ فلا يتجاوز المبلغ المرسمل السقف. إذا لم توجد أصول مؤهلة أخرى، يبقى 16.17 مليون مصروف تمويل.",
            "Capitalised borrowing cost is $3.43m. Total interest on both loans for the year is $19.6m, so the capitalised amount is below the cap. With no other qualifying assets, the remaining $16.17m is finance expense.",
          ),
        ],
        conclusion: text(
          "يضاف 3.43 مليون إلى تكلفة الآلة تحت الإنشاء، ولا تُرسمل فائدة إنفاق أكتوبر إلا عن الأشهر الثلاثة الأخيرة من السنة.",
          "Add $3.43m to the machine under construction; interest on the October tranche is capitalised only for the year's final three months.",
        ),
        journalEntries: [
          {
            label: text("رسملة التكلفة المؤهلة", "Capitalise eligible borrowing cost"),
            debit: text("آلة تحت الإنشاء", "Machine under construction"),
            credit: text("فوائد مستحقة أو نقدية", "Interest payable or cash"),
            amount: text("3.43 مليون", "$3.43m"),
          },
        ],
        reference: "IAS 23.8, 14, 17–18",
      },
    ],
  },
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
      {
        title: text("تقدير المغادرين ليس إعادة قياس قيمة الخيار", "Estimating leavers is not remeasuring the option"),
        explanation: text(
          "إذا اشترط المنح بقاء الموظف أربع سنوات، تُثبت خدمة كل سنة حسب أفضل تقدير متاح لعدد الخيارات المتوقع استحقاقها، لا بمجرد عدد من بقي في نهاية السنة الأولى. يمكن الاستدلال بمعدل مغادرة السنة الأولى إذا كان ممثلًا للسنوات التالية، لكن لا يفرض IFRS 2 تكراره آليًا؛ ينبغي تحديث التقدير عند ظهور أدلة جديدة. القيمة العادلة لخيار التسوية بالأسهم تُقاس في تاريخ المنح ولا تُستبدل بسعر الخيار في نهاية السنة. المصروف التراكمي بعد سنة = الخيارات المتوقع استحقاقها × القيمة العادلة بتاريخ المنح × 1/4، ويقابله احتياطي في حقوق الملكية. افصل هذا عن المنح المسددة نقدًا التي يعاد قياس التزامها في كل تاريخ تقرير.",
          "When a four-year service condition applies, recognise each year's service using the best available estimate of options expected to vest, not simply the employees present at the first year-end. First-year departures can inform a forecast if representative, but IFRS 2 does not mandate mechanically repeating them; revise the estimate as better evidence arrives. Grant-date fair value of an equity-settled option is not replaced by its year-end price. After one year, cumulative expense is expected vesting options × grant-date fair value × 1/4, with an equity reserve credit. This differs from a cash-settled award, whose liability is remeasured at each reporting date.",
        ),
        keyPoints: [
          text("افصح في الحل عن أي افتراض بشأن المغادرين المستقبليين بدل تقديمه كواقعة من السؤال.", "State any assumption about future leavers explicitly rather than treating it as a supplied fact."),
          text("لا تستخدم سعر الخيار في نهاية السنة لإعادة قياس منحة مسددة بالأسهم.", "Do not use the year-end option price to remeasure an equity-settled award."),
        ],
        reference: "IFRS 2.19–23, 30–33",
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
      {
        title: text("250 خيارًا لكل موظف وخدمة أربع سنوات", "250 options per employee over four years"),
        facts: text(
          "في 1 يناير 20X3 منحت منشأة 250 خيارًا لكل من 200 موظف بشرط استمرار الخدمة حتى 31 ديسمبر 20X6. غادر خمسة خلال 20X3. سعر الخيار عند المنح 12 دولارًا وعند نهاية السنة 15 دولارًا. لغرض بيان مبلغ 20X3 تفترض الإدارة، بعد دراسة المغادرات، استمرار معدل خمسة مغادرين سنويًا خلال الأربع سنوات؛ هذا التوقع افتراض تقديري لا نتيجة لازمة من الخمسة المغادرين وحدهم.",
          "On 1 January 20X3 an entity grants 250 options to each of 200 employees conditional on service through 31 December 20X6. Five leave during 20X3. The option price is $12 at grant and $15 at year-end. To illustrate a 20X3 amount, management, after assessing departures, assumes five leavers per year over four years; this is an explicit estimate, not a deduction compelled by five first-year departures alone.",
        ),
        calculations: [
          text("المغادرون المتوقعون وفق الافتراض = 5 × 4 = 20؛ الموظفون المتوقع استحقاقهم = 200 − 20 = 180.", "Under the stated estimate, projected leavers = 5 × 4 = 20; employees expected to vest = 200 − 20 = 180."),
          text("الخيارات المتوقع استحقاقها = 180 × 250 = 45,000؛ القيمة الكلية بتاريخ المنح = 45,000 × 12 = 540,000 دولار.", "Expected vesting options = 180 × 250 = 45,000; total grant-date value = 45,000 × $12 = $540,000."),
          text("مصروف 20X3 = 540,000 × 1/4 = 135,000 دولار. سعر نهاية السنة 15 دولارًا لا يغير هذا القياس لمنحة مسددة بأسهم.", "20X3 expense = $540,000 × 1/4 = $135,000. The $15 year-end option price does not change this equity-settled measurement."),
        ],
        conclusion: text("يظهر مصروف موظفين 135,000 واحتياطي حقوق ملكية 135,000 على أساس تقدير المغادرين المعلن؛ إذا دلّت معلومات أخرى على تقدير مختلف يتغير مبلغ السنة تبعًا له.", "Recognise staff expense and an equity reserve of $135,000 on the stated leaver estimate; other evidence supporting a different vesting estimate would change the amount."),
        journalEntries: [
          { label: text("31 ديسمبر 20X3: خدمة السنة", "31 December 20X3: service for the year"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي مدفوعات أسهم", "Share-based-payment reserve"), amount: text("135,000 دولار", "$135,000") },
        ],
        reference: "IFRS 2.19–23",
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
      {
        title: text(
          "سعر الصرف المناسب لكل بند وتاريخ",
          "Match the exchange rate to the item and date",
        ),
        explanation: text(
          "تبدأ المعاملة الأجنبية بسعرها الفوري في تاريخ الاعتراف. في كل تاريخ تقرير لاحق تُترجم الذمم والنقد والقروض المسددة بمبلغ محدد من العملة الأجنبية بسعر الإقفال، وتُثبت فروقها عادة في الربح أو الخسارة. لا تُغيّر تلك الترجمة تكلفة المخزون أو الأصل غير النقدي المقاس بالتكلفة التاريخية؛ أما البند غير النقدي المقاس بالقيمة العادلة فيستخدم سعر تاريخ قياس تلك القيمة. وعند السداد بعد نهاية السنة، قارن النقد المدفوع بالقيمة الدفترية للدائن في نهاية السنة السابقة، لا بقيمة يوم الشراء، لتحديد فرق صرف السنة الجديدة دون تكرار مكسب السنة الماضية.",
          "Initially translate a foreign-currency transaction at the spot rate on its recognition date. At each later reporting date, translate cash, receivables and loans or payables settled in fixed foreign-currency amounts at the closing rate; their exchange differences normally enter profit or loss. This does not change the historical cost of inventory or another non-monetary asset. A non-monetary item measured at fair value instead uses the exchange rate on the date that fair value was measured. When settlement follows a year-end, compare cash paid with the payable's carrying amount at that preceding year-end, not with its original amount, so the prior-year exchange gain is not recognised twice.",
        ),
        keyPoints: [
          text(
            "افصل أثر تغير الصرف حتى 31 ديسمبر عن أثره من 1 يناير إلى يوم السداد.",
            "Separate exchange movements up to 31 December from those between 1 January and settlement.",
          ),
          text(
            "حدد أولًا هل الرصيد نقدي أم غير نقدي وما أساس قياس غير النقدي.",
            "First identify whether the balance is monetary or non-monetary and the measurement basis of any non-monetary item.",
          ),
        ],
        reference: "IAS 21.21–23, 28–30",
      },
      {
        title: text(
          "تحديد العملة الوظيفية وتغييرها",
          "Determining and changing functional currency",
        ),
        explanation: text(
          "العملة الوظيفية تُستنتج من العملة التي تؤثر أساسًا في أسعار البيع وفي تكاليف العمالة والمواد والخدمات؛ وإذا لم تحسم هذه المؤشرات، انظر إلى عملة التمويل وعملة الاحتفاظ بمتحصلات التشغيل. وللعملية الأجنبية يُراعى مدى استقلالها عن الشركة الأم، وحجم التعاملات معها، وإمكانية تحويل تدفقاتها إليها ومصدر تمويلها. لا يختار المديرون تغيير العملة الوظيفية لمجرد تحسين العرض؛ لا تتغير إلا بتغير المعاملات والظروف الأساسية، ويُطبق التغيير مستقبلًا من تاريخه. عملة العرض أمر مختلف، ويمكن اختيارها مستقلة عن العملة الوظيفية، مع تطبيق قواعد ترجمة القوائم والإفصاحات ذات الصلة.",
          "Functional currency follows the currency that primarily influences sales prices and labour, material and other costs. If those primary indicators are inconclusive, consider financing currency and the currency in which operating receipts are retained. For a foreign operation, consider its autonomy from the parent, the scale of transactions with the parent, whether its cash flows are readily remittable and how it is financed. Management cannot change functional currency merely to improve presentation: a change requires altered underlying transactions and conditions, and is applied prospectively from the change date. Presentation currency is different and may be chosen separately, subject to the relevant financial-statement translation and disclosure requirements.",
        ),
        keyPoints: [
          text(
            "عملة عرض المجموعة لا تحدد وحدها العملة الوظيفية لكل شركة تابعة.",
            "The group's presentation currency alone does not determine each subsidiary's functional currency.",
          ),
          text(
            "عند تغير العملة الوظيفية، تُترجم جميع البنود إلى العملة الجديدة بسعر يوم التغيير، بصورة مستقبلية.",
            "On a functional-currency change, translate all items into the new currency at the change-date rate, prospectively.",
          ),
        ],
        reference: "IAS 21.9–12, 34–37, 38–39, 53–57",
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
      {
        title: text(
          "فاتورة باليورو تُسدد على دفعتين عبر سنتين",
          "Euro invoice settled in two instalments across year-ends",
        ),
        facts: text(
          "اشترت White Cliffs بضائع من Rinka في 30 سبتمبر مقابل 40,000 يورو. يُدفع نصف الثمن في 30 نوفمبر والنصف الآخر في 31 يناير؛ نهاية سنتها المالية 31 ديسمبر. أسعار الصرف (يورو لكل دولار): 1.60 عند الشراء، 1.80 في نوفمبر، 1.90 في ديسمبر، 1.85 في يناير.",
          "White Cliffs bought goods from Rinka on 30 September for €40,000. Half is paid on 30 November and the rest on 31 January; its year-end is 31 December. Rates, expressed as euros per US dollar, are 1.60 at purchase, 1.80 in November, 1.90 at year-end and 1.85 in January.",
        ),
        calculations: [
          text(
            "الشراء والدائن الأولي: 40,000 ÷ 1.60 = 25,000 دولار؛ نصيب كل دفعة 12,500 دولار قبل فروق الصرف.",
            "Initial purchase and payable: €40,000 ÷ 1.60 = US$25,000; each instalment initially represents US$12,500.",
          ),
          text(
            "دفعة نوفمبر: 20,000 ÷ 1.80 = 11,111 دولار بالتقريب؛ مكسب الصرف = 12,500 − 11,111 = 1,389 دولار.",
            "November payment: €20,000 ÷ 1.80 ≈ US$11,111; exchange gain = 12,500 − 11,111 = US$1,389.",
          ),
          text(
            "دائن ديسمبر المتبقي: 20,000 ÷ 1.90 ≈ 10,526 دولار؛ مكسب ديسمبر = 12,500 − 10,526 = 1,974 دولار. مكاسب السنة الأولى = 3,363 دولار.",
            "Remaining payable at December: €20,000 ÷ 1.90 ≈ US$10,526; December gain = 12,500 − 10,526 = US$1,974. First-year gains total US$3,363.",
          ),
          text(
            "السداد في يناير: 20,000 ÷ 1.85 ≈ 10,811 دولار؛ خسارة السنة الثانية = 10,811 − 10,526 = 285 دولار.",
            "January settlement: €20,000 ÷ 1.85 ≈ US$10,811; second-year loss = 10,811 − 10,526 = US$285.",
          ),
        ],
        conclusion: text(
          "تُثبت مكاسب 1,389 و1,974 في ربح أو خسارة السنة المنتهية في ديسمبر، وخسارة 285 في سنة يناير؛ يبقى مبلغ شراء البضائع الأصلي 25,000 دولار دون إعادة ترجمة لمجرد بقاء الدائن مفتوحًا. المبالغ مقربة إلى أقرب دولار، لذلك يُستخدم الرصيد المقرب نفسه في قيد يناير.",
          "Recognise gains of 1,389 and 1,974 in the year ending December, and the loss of 285 in the January year. The original US$25,000 goods purchase is not retranslated merely because the payable remains open. Amounts are rounded to whole dollars, with the same rounded closing payable carried into January.",
        ),
        journalEntries: [
          { label: text("30 سبتمبر: إثبات الشراء", "30 September: purchase"), debit: text("مشتريات/مخزون", "Purchases/inventory"), credit: text("دائنون تجاريون", "Trade payables"), amount: text("25,000 دولار", "US$25,000") },
          { label: text("30 نوفمبر: سداد نصف الفاتورة", "30 November: first instalment"), debit: text("دائنون تجاريون 12,500", "Trade payables 12,500"), credit: text("نقدية 11,111 ومكسب صرف 1,389", "Cash 11,111 and exchange gain 1,389"), amount: text("12,500 دولار", "US$12,500") },
          { label: text("31 ديسمبر: إعادة ترجمة الدائن المتبقي", "31 December: retranslate remaining payable"), debit: text("دائنون تجاريون", "Trade payables"), credit: text("مكسب صرف في الربح أو الخسارة", "Exchange gain in profit or loss"), amount: text("1,974 دولار", "US$1,974") },
          { label: text("31 يناير: السداد النهائي", "31 January: final settlement"), debit: text("دائنون 10,526 وخسارة صرف 285", "Payables 10,526 and exchange loss 285"), credit: text("نقدية", "Cash"), amount: text("10,811 دولار", "US$10,811") },
        ],
        reference: "IAS 21.21–23, 28–29",
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
      {
        title: text("خصم كميات بأثر رجعي", "Retrospective volume discount"),
        facts: text(
          "تبيع منشأة حواسيب بسعر 500 دولار للوحدة، ويصبح السعر 450 دولارًا لكل الوحدات المبيعة خلال سنة العقد إذا تجاوزت مشتريات العميل 500 وحدة. في الربع الأول باعت 70 وحدة وتوقعت، على أساس الأدلة المتاحة، عدم بلوغ الحد. في الربع الثاني باعت 250 وحدة أخرى وأصبح تجاوز الحد متوقعًا بدرجة تستوفي قيد المقابل المتغير.",
          "An entity sells computers for $500 each, reduced retrospectively to $450 for every unit bought during the contract year if the customer buys more than 500. It sells 70 in quarter one and, on the available evidence, does not expect the threshold to be met. It sells another 250 in quarter two, when meeting the threshold becomes sufficiently probable under the variable-consideration constraint.",
        ),
        calculations: [
          text(
            "إيراد الربع الأول = 70 × 500 = 35,000 دولار.",
            "Quarter-one revenue = 70 × $500 = $35,000.",
          ),
          text(
            "القيمة التراكمية المحدثة للوحدات الـ320 = (70 + 250) × 450 = 144,000 دولار.",
            "Revised cumulative consideration for 320 units = (70 + 250) × $450 = $144,000.",
          ),
          text(
            "إيراد الربع الثاني = 144,000 − 35,000 المعترف بها سابقًا = 109,000 دولار؛ أو 250 × 450 − 70 × 50 = 109,000 دولار.",
            "Quarter-two revenue = $144,000 − $35,000 already recognised = $109,000; equivalently 250 × $450 − 70 × $50 = $109,000.",
          ),
        ],
        conclusion: text(
          "التغيير في تقدير المقابل المتغير يعدل الإيراد التراكمي عند ظهور المعلومات الجديدة؛ مبلغ 3,500 دولار تصحيح لخصم الوحدات السابقة، وليس مصروف بيع جديدًا. يعاد تقييم التقدير في كل تاريخ تقرير.",
          "The revised estimate of variable consideration adjusts cumulative revenue as new information becomes available; $3,500 corrects the discount on earlier units, rather than being a new selling expense. Reassess the estimate at each reporting date.",
        ),
        journalEntries: [
          {
            label: text("إيراد وحدات الربع الأول", "Quarter-one units"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("إيراد", "Revenue"),
            amount: text("35,000", "35,000"),
          },
          {
            label: text("وحدات الربع الثاني بالسعر المحدث", "Quarter-two units at revised price"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("إيراد", "Revenue"),
            amount: text("112,500", "112,500"),
          },
          {
            label: text("تعديل خصم الوحدات السابقة", "True-up for earlier units"),
            debit: text("إيراد", "Revenue"),
            credit: text(
              "التزام رد أو تخفيض ذمم مدينة بحسب شروط التسوية",
              "Refund liability or receivable reduction, depending on settlement terms",
            ),
            amount: text("3,500", "3,500"),
          },
        ],
        reference: "IFRS 15.50–59, 87–90",
      },
      {
        title: text("بيع بتمويل مؤجل لسنتين", "Sale with two-year deferred financing"),
        facts: text(
          "سُلّم منتج للعميل في 31 ديسمبر 20X7 وانتقلت إليه السيطرة. سعره النقدي 10,000 دولار وتكلفته 8,000 دولار، لكن العميل سيدفع 12,100 دولار بعد سنتين. يفترض المثال أن الفرق يمثل مكون تمويل مهمًا وأن معدل الخصم الملائم عند نشأة العقد 10% سنويًا.",
          "A product is delivered and control passes on 31 December 20X7. Its cash selling price is $10,000 and cost $8,000, but the customer will pay $12,100 two years later. Assume the difference is a significant financing component and the appropriate rate at contract inception is 10% annually.",
        ),
        calculations: [
          text(
            "10,000 × 1.10² = 12,100؛ لذلك لا يُعرض كامل المبلغ المؤجل إيرادًا عند البيع.",
            "$10,000 × 1.10² = $12,100; the entire deferred amount is not revenue on sale.",
          ),
          text(
            "في 31 ديسمبر 20X7: الإيراد والذمم المدينة 10,000، وتكلفة المبيعات 8,000.",
            "At 31 December 20X7: revenue and receivable $10,000, and cost of sales $8,000.",
          ),
          text(
            "في نهاية 20X8: دخل فائدة 10,000 × 10% = 1,000؛ رصيد الذمم 11,000.",
            "At the end of 20X8: interest income $10,000 × 10% = $1,000; receivable $11,000.",
          ),
          text(
            "في نهاية 20X9: دخل فائدة 11,000 × 10% = 1,100؛ رصيد الذمم 12,100 يسوى عند التحصيل.",
            "At the end of 20X9: interest income $11,000 × 10% = $1,100; receivable $12,100 settled on collection.",
          ),
        ],
        conclusion: text(
          "يفصل الإيراد عند انتقال السيطرة عن دخل التمويل اللاحق، مع مراعاة متطلبات قياس الذمم وخسائرها الائتمانية بموجب IFRS 9.",
          "Separate revenue when control transfers from subsequent financing income, while applying IFRS 9 to receivable measurement and credit losses.",
        ),
        journalEntries: [
          {
            label: text("عند تسليم المنتج", "On product delivery"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("إيراد", "Revenue"),
            amount: text("10,000", "10,000"),
          },
          {
            label: text("إخراج تكلفة المنتج", "Recognise product cost"),
            debit: text("تكلفة مبيعات", "Cost of sales"),
            credit: text("مخزون", "Inventory"),
            amount: text("8,000", "8,000"),
          },
          {
            label: text("فائدة 20X8", "20X8 interest"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("دخل تمويل", "Finance income"),
            amount: text("1,000", "1,000"),
          },
          {
            label: text("فائدة 20X9", "20X9 interest"),
            debit: text("ذمم مدينة", "Receivable"),
            credit: text("دخل تمويل", "Finance income"),
            amount: text("1,100", "1,100"),
          },
        ],
        reference: "IFRS 15.60–65; IFRS 9.5.5",
      },
      {
        title: text(
          "آلة مع ضمان مطابقة وضمان خدمة ممتد",
          "Machine with assurance and extended service warranties",
        ),
        facts: text(
          "بيعت آلة بمبلغ 196,000 دولار، وهو سعرها المستقل. يضمن البائع مطابقتها للمواصفات لمدة سنة، ويضيف ستة أشهر من خدمة ضمان ممتد يمكن بيعها منفصلة بسعر 4,000 دولارات. يفترض المثال أن الخدمة الممتدة التزام أداء مميز وأن المقابل يدفع عند التسليم.",
          "A machine is sold for $196,000, its stand-alone selling price. The seller assures compliance with specifications for one year and adds six months of extended warranty service available separately for $4,000. Assume the extended service is a distinct performance obligation and payment is made on delivery.",
        ),
        calculations: [
          text(
            "الضمان الأساسي للمطابقة ليس التزام أداء منفصلًا؛ تُقيّم مخصصاته بموجب IAS 37. مجموع الأسعار المستقلة للآلة والخدمة = 196,000 + 4,000 = 200,000.",
            "The basic assurance warranty is not a separate performance obligation; assess its provision under IAS 37. Combined stand-alone prices = $196,000 + $4,000 = $200,000.",
          ),
          text(
            "المقابل المخصص للآلة = 196,000 × 196,000 ÷ 200,000 = 192,080 دولارًا.",
            "Consideration allocated to the machine = $196,000 × $196,000 ÷ $200,000 = $192,080.",
          ),
          text(
            "المقابل المخصص للخدمة الممتدة = 196,000 × 4,000 ÷ 200,000 = 3,920 دولارًا؛ إذا قُدمت بالتساوي خلال ستة أشهر، فحصة الشهر 653.33 تقريبًا مع تسوية التقريب في الشهر الأخير.",
            "Consideration allocated to extended service = $196,000 × $4,000 ÷ $200,000 = $3,920; if provided evenly over six months, each month is approximately $653.33, with rounding adjusted in the final month.",
          ),
        ],
        conclusion: text(
          "يثبت إيراد الآلة عند انتقال السيطرة، ويبقى 3,920 التزام عقد إلى أن تؤدى خدمة الضمان الممتد خلال فترتها؛ لا تُثبت قيمة الخدمة كلها إيرادًا لمجرد أنها وصفت بأنها مجانية.",
          "Recognise machine revenue when control passes and retain $3,920 as a contract liability until extended warranty service is performed; describing the service as free does not make its allocated consideration immediate revenue.",
        ),
        journalEntries: [
          {
            label: text("عند البيع والتحصيل", "On sale and collection"),
            debit: text("النقدية", "Cash"),
            credit: text(
              "إيراد آلة 192,080 + التزام عقد 3,920",
              "Machine revenue $192,080 + contract liability $3,920",
            ),
            amount: text("196,000 لكل جانب", "$196,000 on each side"),
          },
          {
            label: text("بعد اكتمال خدمة الأشهر الستة", "After completing six months of service"),
            debit: text("التزام عقد", "Contract liability"),
            credit: text("إيراد خدمة الضمان", "Warranty service revenue"),
            amount: text("3,920", "3,920"),
          },
        ],
        reference: "IFRS 15.73–86, B28–B33; IAS 37.14",
      },
    ],
  },
  "IFRS 16": {
    sections: [
      {
        title: text(
          "تحديد الإيجار: الأصل المحدد وحق الاستبدال",
          "Identifying a lease: specified assets and substitution rights",
        ),
        explanation: text(
          "ليس كل عقد لتوفير مركبات أو معدات إيجارًا. يبدأ الفحص بوجود أصل محدد صراحة أو ضمنًا، ثم حق العميل في معظم المنافع الاقتصادية وحقه في توجيه كيفية استخدام الأصل وغرضه طوال المدة. استبدال الأصل للإصلاح أو الصيانة وحده لا يلغي تحديده. أما قدرة المورد الحقيقية على اختيار أي أصل بديل متاح عند كل طلب فقد تعني أن العميل اشترى خدمة نقل لا حق استخدام أصل محدد.",
          "Not every contract to provide vehicles or equipment is a lease. First identify an explicit or implicit asset, then assess the customer's rights to substantially all economic benefits and to direct how and for what purpose it is used throughout the period. Substitution solely for repair or maintenance does not remove identification. A supplier's substantive ability to choose any available asset for each request may mean the customer bought transport services rather than the right to use an identified asset.",
        ),
        keyPoints: [
          text(
            "تحديد عشر مركبات بعينها في العقد يختلف عن اشتراط حافلة بأي رقم تتسع لعشرة ركاب.",
            "Naming ten particular vehicles differs from requiring any available ten-seat minibus.",
          ),
          text(
            "السؤال ليس من يملك الأصل قانونيًا، بل من يسيطر على استخدامه خلال فترة العقد.",
            "The test is not legal ownership, but who controls use during the contract period.",
          ),
        ],
        reference: "IFRS 16.9, B9, B13–B30",
      },
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
        title: text(
          "عقدا نقل محلي متشابهان ظاهريًا لكن أحدهما إيجار",
          "Two local transport contracts: only one contains a lease",
        ),
        facts: text(
          "في العقد الأول تتسلم جهة محلية عشر مركبات محددة لخمس سنوات، وتحدد المسارات والأسعار واستخدام المركبات، وتبقى عندها بين الرحلات؛ لا يستبدل المورد مركبة إلا للصيانة أو العطل. في العقد الثاني تطلب جهة محلية حافلة تتسع لعشرة عند الحاجة لمدة سنتين؛ يختار المورد في كل مرة أي حافلة متاحة من أسطوله وتبقى الحافلات في مقره.",
          "Under the first contract a local authority receives ten specified vehicles for five years, sets routes, fares and use, and keeps them between trips; the supplier substitutes one only for repair or maintenance. Under the second contract an authority requests a ten-seat minibus as needed for two years; the supplier selects any available minibus each time and holds its fleet at its own premises.",
        ),
        calculations: [
          text(
            "العقد الأول: المركبات محددة، والجهة تحدد استخدامها وتحصل على منافعها طوال المدة؛ استبدال الصيانة ليس حق استبدال جوهريًا، فيحتوي العقد على إيجار.",
            "First contract: the vehicles are specified and the authority directs use and receives benefits throughout; repair-only substitution is not substantive, so the contract contains a lease.",
          ),
          text(
            "العقد الثاني: لا تتحدد حافلة بعينها ويستطيع المورد الوفاء بكل طلب من أسطوله؛ على هذه الوقائع لا يوجد حق استخدام أصل محدد، بل خدمة نقل.",
            "Second contract: no particular minibus is identified and the supplier can fulfil each request from its fleet; on these facts there is no right to use an identified asset, but a transport service.",
          ),
        ],
        conclusion: text(
          "في الحالة الأولى يقيّم المستأجر أصل حق استخدام والتزام إيجار وفق المدفوعات وشروط العقد؛ وفي الثانية يعترف بتكلفة الخدمة عند تلقيها. لا تتوافر مبالغ مدفوعات لاحتساب قيد رقمي هنا.",
          "In the first case the lessee measures a right-of-use asset and lease liability using the contract's payments and terms; in the second it expenses the service as received. No payment amounts are provided for a numerical entry.",
        ),
        journalEntries: [],
        reference: "IFRS 16.9, B9, B13–B30",
      },
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
