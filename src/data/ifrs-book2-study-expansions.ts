import type { StandardStudyExpansion, StudyText } from "./ifrs-standard-study-expansions";

const text = (ar: string, en: string): StudyText => ({ ar, en });

/**
 * Additional applied material reviewed against the cited IFRS requirements.
 * Source-page and acquisition records stay in the private editorial audit;
 * learner-facing references identify the applicable Standard only.
 */
export const IFRS_BOOK2_STUDY_EXPANSIONS: Partial<Record<string, StandardStudyExpansion>> = {
  "IAS 41": {
    sections: [
      {
        title: text("عرض الأصل البيولوجي وتصنيفه بحسب دورة التشغيل", "Presenting biological assets and applying the operating cycle"),
        explanation: text(
          "عرض الأصول البيولوجية في بند مستقل لا يعفيها من تصنيف الأصول. عند إعداد قائمة مركز مالي تفصل المتداول وغير المتداول، قيّم متى تتوقع المنشأة بيع الأصل أو استهلاكه أو تحقيقه في دورة تشغيلها المعتادة، ثم طبق بقية شروط الأصل المتداول. قد يكون الأصل متداولًا ضمن دورة تشغيل تتجاوز اثني عشر شهرًا؛ أما الأصل المحتفظ به لإنتاج منافع على المدى الطويل فقد يكون غير متداول. وصف الأصل بأنه ناضج أو غير ناضج، أو استهلاكي أو مثمر، يفيد الإفصاح لكنه لا يحسم التصنيف وحده. وإذا كان العرض بحسب السيولة أكثر ملاءمة وموثوقية، يطبق أساس العرض هذا وفق شروط المعيار. تظل النباتات المثمرة نفسها ضمن IAS 16، وتبقى الثمار النامية عليها ضمن IAS 41.",
          "A separate biological-asset line does not remove asset classification requirements. In a statement that distinguishes current and non-current assets, assess expected sale, consumption or realisation in the normal operating cycle, then the other current-asset criteria. An asset can be current within an operating cycle longer than twelve months; an asset retained to generate benefits over the longer term may be non-current. Mature/immature and consumable/bearer descriptions support disclosure but do not determine that classification alone. Use liquidity presentation when it provides reliable and more relevant information under the applicable requirements. Bearer plants themselves remain within IAS 16, while produce growing on them remains within IAS 41."
        ),
        keyPoints: [
          text("حدد دورة التشغيل واستخدام الأصل وتوقيت تحقيقه قبل تصنيفه.", "Establish the operating cycle, asset use and expected realisation before classification."),
          text("البند المستقل والإفصاح عن النضج لا يحلان محل اختبار المتداول وغير المتداول.", "A separate line and maturity disclosures do not replace the current/non-current assessment.")
        ],
        reference: "IAS 1.54(f), 60–68; IAS 41.2–5, 43–45",
      },
      {
        title: text("نقطة الحصاد تنقل المحصول إلى قياس المخزون", "Harvest transfers produce into inventory measurement"),
        explanation: text(
          "ابدأ بتمييز المنتج الذي ما زال ينمو على الأصل الحي عن المنتج الذي حُصد. في لحظة الحصاد يقاس المحصول بالقيمة العادلة ناقص تكاليف البيع، ويثبت أثر الاعتراف في الربح أو الخسارة؛ ويصبح ذلك القياس تكلفة المحصول عند تطبيق IAS 2. بعد الحصاد لا تعاد زيادة كل محصول إلى القيمة العادلة في كل تاريخ تقرير بموجب IAS 41. يطبق عادة الأقل من التكلفة وصافي القيمة القابلة للتحقق، مع مراعاة استثناءات نطاق قياس IAS 2 إن انطبقت فعلًا. قد تدخل تكاليف التحويل اللاحقة المؤهلة ضمن تكلفة المخزون، لكن مجرد التخزين أو انتظار البيع لا يمدد نطاق IAS 41. وثّق تاريخ الحصاد والكمية وقياسها لكي يتصل سجل الأصل البيولوجي بسجل المخزون دون تكرار مكسب الحصاد.",
          "Distinguish produce still growing on a living asset from harvested produce. At harvest, measure agricultural produce at fair value less costs to sell and recognise the initial-recognition effect in profit or loss; that measurement becomes its cost when IAS 2 applies. After harvest, IAS 41 does not require every crop to be uplifted to fair value at every reporting date. Normally apply the lower of cost and net realisable value, considering IAS 2 measurement-scope exceptions only when their conditions actually apply. Eligible subsequent conversion costs may enter inventory cost, but storage or waiting for sale does not extend IAS 41's scope. Document harvest date, quantity and measurement to connect biological-asset and inventory records without recognising the harvest gain twice."
        ),
        keyPoints: [
          text("قيمة الحصاد ناقص تكاليف البيع تصبح تكلفة البداية وفق IAS 2.", "Harvest-date fair value less costs to sell becomes the initial IAS 2 cost."),
          text("اختبر صافي القيمة القابلة للتحقق بعد الحصاد وفق نموذج المخزون المطبق.", "Assess net realisable value after harvest under the applicable inventory model.")
        ],
        reference: "IAS 41.3, 13, 28, 32; IAS 2.3, 9–10, 20",
      }
    ],
    workedExamples: [],
  },
  "IFRS 10": {
    sections: [
      {
        title: text("خسائر التابعة قبل الاستحواذ ليست خسائر المجموعة اللاحقة", "Pre-acquisition subsidiary losses are not later group losses"),
        explanation: text(
          "عند إعداد القوائم الموحدة، تُستبعد حصة الأم في حقوق ملكية التابعة عند تاريخ الاستحواذ مقابل الاستثمار، وتدخل قيم صافي الأصول المحددة في قياس الشهرة وفق IFRS 3. إذا كانت أرباح التابعة المحتجزة سالبة عند الشراء، فإن العجز جزء من صافي الأصول المشتراة؛ لا يُخصم مرة ثانية من أرباح المجموعة المحتجزة بعد الاستحواذ. ما يُضاف لاحقًا هو حصة الأم في حركة أرباح التابعة منذ تاريخ السيطرة، بعد تسويات التجميع ذات الصلة.",
          "On consolidation, the parent's investment is eliminated against the subsidiary's acquisition-date equity, and the identifiable net assets enter the IFRS 3 goodwill calculation. If the subsidiary has a retained deficit at acquisition, that deficit is part of the acquired net assets; it is not deducted again from the group's post-acquisition retained earnings. The later addition is the parent's share of the subsidiary's movement since control began, after relevant consolidation adjustments.",
        ),
        keyPoints: [
          text("جمّد حقوق ملكية التابعة بتاريخ الشراء، بما فيها الخسائر المتراكمة، لحساب صافي الأصول المقتناة.", "Fix the subsidiary's equity at acquisition, including accumulated losses, to calculate acquired net assets."),
          text("احسب الحركة اللاحقة من رصيد نهاية الفترة ناقص رصيد تاريخ الشراء؛ اطرح منها تسويات القيمة العادلة والربح الداخلي عند انطباقها.", "Calculate the post-acquisition movement from closing less acquisition-date retained earnings, adjusting for fair-value depreciation and intragroup profit where relevant."),
          text("قيد الاستبعاد ورقة عمل للتجميع، وليس تسجيلًا جديدًا في دفاتر الشركة الأم أو التابعة.", "The elimination is a consolidation worksheet entry, not a new posting in either company's separate ledger."),
        ],
        reference: "IFRS 10.B86(a)–(c); IFRS 3.18–19, 32",
      },
    ],
    workedExamples: [
      {
        title: text("P وS: خسائر 35,000 قبل الشراء", "P and S: 35,000 pre-acquisition deficit"),
        facts: text(
          "اشترت P كامل أسهم S البالغة 50,000 سهم بقيمة اسمية 1 للسهم مقابل 20,000 عندما كان رصيد أرباح S المحتجزة مدينًا 35,000. حققت S بعد الاستحواذ أرباحًا تراكمية 40,000، فأصبح رصيدها الختامي دائنًا 5,000. أرباح P المحتجزة في نهاية الفترة 70,000. يوضح الحساب بافتراض أن S منشأة أعمال وأن صافي الأصول الدفترية المعطى يساوي القيم المعترف بها عند الشراء، دون فروق قيمة عادلة أو انخفاض شهرة إضافي.",
          "P bought all 50,000 one-unit ordinary shares of S for 20,000 when S had a 35,000 debit retained-earnings balance. S subsequently earned cumulative profits of 40,000, leaving a closing credit retained balance of 5,000; P's closing retained earnings are 70,000. The calculation assumes S is a business, the supplied book net assets equal recognised acquisition-date values, and there are no additional fair-value differences or goodwill impairment.",
        ),
        calculations: [
          text("صافي أصول S عند الشراء = رأس المال 50,000 − خسائر مبقاة 35,000 = 15,000.", "S acquisition-date net assets = share capital 50,000 − retained deficit 35,000 = 15,000."),
          text("الشهرة = المقابل 20,000 − صافي الأصول 15,000 = 5,000.", "Goodwill = consideration 20,000 − net assets 15,000 = 5,000."),
          text("أرباح S بعد الشراء = رصيد ختامي 5,000 − رصيد افتتاحي (−35,000) = 40,000.", "S post-acquisition earnings = closing 5,000 − acquisition-date (−35,000) = 40,000."),
          text("الأرباح المحتجزة الموحدة المنسوبة للأم = 70,000 + 100% × 40,000 = 110,000، قبل أي تسويات أخرى.", "Consolidated retained earnings attributable to the parent = 70,000 + 100% × 40,000 = 110,000 before other adjustments."),
        ],
        conclusion: text(
          "الخسارة السابقة للشراء خفضت صافي الأصول عند قياس الشهرة، بينما ربح 40,000 اللاحق هو وحده الذي يدخل حركة الأرباح الموحدة. لا يُطرح عجز 35,000 من الأرباح الموحدة مرة أخرى.",
          "The earlier loss reduced acquisition-date net assets for goodwill; only the subsequent 40,000 earnings enter the consolidated retained-earnings movement. The 35,000 deficit is not deducted a second time.",
        ),
        journalEntries: [
          {
            label: text("ورقة التجميع: استبعاد استثمار P وحقوق S عند الشراء", "Consolidation worksheet: eliminate P's investment and S's acquisition-date equity"),
            debit: text("رأس مال S 50,000؛ شهرة 5,000", "S share capital 50,000; goodwill 5,000"),
            credit: text("عجز أرباح S السابق للشراء 35,000؛ الاستثمار في S 20,000", "S pre-acquisition retained deficit 35,000; investment in S 20,000"),
            amount: text("55,000 لكل جانب", "55,000 on each side"),
          },
        ],
        reference: "IFRS 10.B86(b); IFRS 3.18–19, 32",
      },
      {
        title: text("Alpha وBeta: حقوق غير مسيطرة بعد استبعاد أصل دعوى محتمل", "Alpha and Beta: NCI after excluding a contingent claim"),
        facts: text(
          "اشترت Alpha نسبة 80% من Beta في 1 أبريل 20X6، وقُدرت القيمة العادلة للحصة غير المسيطرة حينها بـ24 مليون دولار. بلغ رأس مال Beta وأرباحها المحتجزة في تاريخ الشراء 50 و35 مليونًا. زيادات القيمة القابلة للاعتراف: أرض 10 ملايين، معدات 8 ملايين، وعلاقات عملاء قابلة للتحديد بافتراض استيفاء شروط IFRS 3 بقيمة 20 مليونًا. توجد مطالبة قضائية محتملة قُدرت بـ3 ملايين لكنها لا تُعترف أصلًا في تاريخ الشراء. بافتراض ثبات الأسس الضريبية، ينشأ التزام ضريبة مؤجلة بمعدل 25% على زيادات القيمة المعترف بها. في 31 مارس 20X7 بلغت حقوق Beta الدفترية 94 مليونًا، وأصبحت فروق القيمة الباقية قبل ضريبتها 10 ملايين للأرض و6 للمعدات و16 للعلاقات؛ ولم تُثبت خسارة انخفاض للشهرة.",
          "Alpha acquired 80% of Beta on 1 April 20X6 and measured NCI at acquisition-date fair value of US$24 million. Beta's share capital and retained earnings at acquisition were US$50 million and US$35 million. Recognisable uplifts were land US$10 million, equipment US$8 million and, assuming IFRS 3 identifiability, customer relationships US$20 million. A US$3 million lawsuit claim remained contingent and is not an acquisition-date asset. Assuming unchanged tax bases, a 25% deferred tax liability arises on the recognised uplifts. At 31 March 20X7 Beta's book equity was US$94 million and remaining pre-tax uplifts were land US$10 million, equipment US$6 million and customer relationships US$16 million; no goodwill impairment is specified.",
        ),
        calculations: [
          text("صافي الأصول المحددة عند الشراء = 50 + 35 + (10 + 8 + 20) − 25% × 38 = 113.5 مليون دولار. المطالبة المحتملة 3 ملايين وضريبتها الافتراضية لا تدخلان الحساب.", "Acquisition-date identifiable net assets = 50 + 35 + (10 + 8 + 20) − 25% × 38 = US$113.5 million. The US$3 million contingent claim and hypothetical related tax are excluded."),
          text("إذا كان المقابل 120 مليونًا، فالشهرة الكلية = 120 + 24 − 113.5 = 30.5 مليون. نصيب الحصة غير المسيطرة الضمني من الشهرة = 24 − 20% × 113.5 = 1.3 مليون.", "With consideration of US$120 million, total goodwill = 120 + 24 − 113.5 = US$30.5 million. The NCI's implied goodwill share = 24 − 20% × 113.5 = US$1.3 million."),
          text("فروق القيمة الصافية في نهاية الفترة = (10 + 6 + 16) × 75% = 24 مليونًا؛ صافي أصول Beta المعدل = 94 + 24 = 118 مليونًا.", "Closing net fair-value uplifts = (10 + 6 + 16) × 75% = US$24 million; adjusted Beta net assets = 94 + 24 = US$118 million."),
          text("الحصة غير المسيطرة الختامية = 20% × 118 + 1.3 = 24.9 مليون دولار. حركة صافي الأصول بعد الشراء = 118 − 113.5 = 4.5 ملايين، وحصة الأم منها = 80% × 4.5 = 3.6 ملايين، قبل تسويات أخرى.", "Closing NCI = 20% × 118 + 1.3 = US$24.9 million. Post-acquisition net-asset movement = 118 − 113.5 = US$4.5 million; the parent's share is 80% × 4.5 = US$3.6 million before other adjustments."),
        ],
        conclusion: text(
          "هذه تسوية توحيد للحصة غير المسيطرة وليست إثبات أصل دعوى جديد. عدم إدخال المطالبة المحتملة عند الاستحواذ يزيد الشهرة المصححة بمقدار 2.25 مليون مقارنة بحساب يُدخلها مع ضريبتها، ويرفع نصيب الشهرة المنسوب للحصة غير المسيطرة بمقدار 0.45 مليون. لا تُحوّل كامل نتيجة صافي أصول Beta إلى حصة الأم؛ تُفصل نسبة 20% والحصة الضمنية من الشهرة.",
          "This is an NCI consolidation worksheet, not recognition of a new lawsuit asset. Excluding the acquisition-date contingent claim increases corrected goodwill by US$2.25 million compared with a calculation including the claim and related tax, and increases the NCI goodwill share by US$0.45 million. Do not attribute all of Beta's adjusted net assets to the parent; separate the 20% NCI and its implied goodwill share.",
        ),
        journalEntries: [],
        reference: "IFRS 3.19, 23A, 32; IFRS 10.22, B94–B96; IAS 12",
      },
      {
        title: text("Panther وSabre: حدود تجميع نصف السنة وقرض سبق السيطرة", "Panther and Sabre: a half-year consolidation and pre-control loan"),
        facts: text(
          "حصلت Panther على 60% من Sabre في 1 يوليو 20X4. بلغ ربح Sabre بعد الضريبة عن السنة 610 آلاف دولار، ودخلها الشامل الآخر 180 ألفًا، مع افتراض انتظام البنود غير الداخلية خلال السنة. زادت القيمة العادلة لعقار تابع بمقدار 200 ألف عند الشراء، وعمره المتبقي 20 سنة. كان لدى Panther قرض ممنوح إلى Sabre منذ 1 يناير بمبلغ 800 ألف وفائدة سوقية 5%. ترد مشتريات البضاعة الداخلية في حالة مستقلة لأن السؤال لا يحدد توزيعها الزمني أو تاريخ شراء مخزون الإقفال؛ كما لم يُعط الأساس الضريبي لزيادة قيمة العقار.",
          "Panther obtained 60% control of Sabre on 1 July 20X4. Sabre's full-year profit after tax was US$610 thousand and other comprehensive income was US$180 thousand; non-intragroup items accrue evenly. Acquisition-date fair value of property exceeded its carrying amount by US$200 thousand, with 20 years' remaining life. Panther had lent Sabre US$800 thousand from 1 January at a market rate of 5%. Intragroup goods are analysed separately because their transaction timing and closing-inventory sourcing are unspecified; the tax base of the property uplift is also not supplied.",
        ),
        calculations: [
          text("تدخل نتائج Sabre من 1 يوليو فقط: ربحها بعد الضريبة قبل تسويات التجميع = 610 × 6/12 = 305 آلاف دولار؛ والدخل الشامل الآخر = 180 × 6/12 = 90 ألفًا.", "Include Sabre's results only from 1 July: post-control profit after tax before consolidation adjustments = 610 × 6/12 = US$305 thousand; other comprehensive income = 180 × 6/12 = US$90 thousand."),
          text("الإهلاك الإضافي على زيادة القيمة العادلة للعقار للفترة اللاحقة للشراء = 200 ÷ 20 × 6/12 = 5 آلاف دولار قبل الضريبة؛ ورصيد الزيادة غير المستهلك في 31 ديسمبر = 195 ألفًا.", "Additional post-acquisition depreciation on the property uplift = 200 ÷ 20 × 6/12 = US$5 thousand before tax; unconsumed uplift at 31 December = US$195 thousand."),
          text("فائدة القرض السنوية = 800 × 5% = 40 ألفًا. كان نصفها الأول بين طرفين منفصلين؛ يُلغى عند التجميع فقط نصف السنة اللاحق للسيطرة = 20 ألفًا من إيراد فائدة Panther ومصروف فائدة Sabre، فضلًا عن إلغاء رصيد القرض المتقابل في المركز المالي الموحد.", "Annual loan interest = 800 × 5% = US$40 thousand. The first half arose between separate entities; eliminate only the post-control half-year, US$20 thousand, from Panther's interest income and Sabre's interest expense, as well as the reciprocal loan balances in the consolidated statement of financial position."),
        ],
        conclusion: text(
          "هذه حسابات فرعية مؤكدة، وليست قائمة ربح موحدة نهائية. لا يكفي ضرب كل المبيعات الداخلية في 6/12؛ فالفرض الزمني يستثني تلك التعاملات. كما أن نصيب غير المسيطرين بعد الضريبة يتطلب تحديد أثر الضريبة لزيادة القيمة العادلة وربح المخزون الداخلي، فلا يُعرض له رقم نهائي من البيانات المتاحة.",
          "These are supportable workings, not a definitive consolidated profit statement. Do not multiply all intragroup sales by 6/12: the even-accrual assumption excludes those transactions. A final after-tax NCI allocation also requires the tax effect of the fair-value uplift and the dated inventory-profit adjustment, neither of which can be settled from the supplied facts.",
        ),
        journalEntries: [],
        reference: "IFRS 10.20, B86(c), B88, B94; IFRS 3.18; IAS 12.15, 24",
      },
      {
        title: text("Alpha: متى يُلغى الرصيد المتبادل مع التابعة ولا يُلغى مع الزميلة؟", "Alpha: eliminate subsidiary balances, not associate balances"),
        facts: text(
          "في 31 مارس 20X7 تسيطر Alpha على Beta بنسبة 80% ولها تأثير مهم في Gamma بنسبة 40% دون سيطرة. بالمليون دولار، يبلغ رصيد المدينين التجاريين 43 لدى Alpha و30 لدى Beta. يتضمن رصيد Alpha مبلغ 5 مستحقًا من Beta و4 مستحقًا من Gamma. ويبلغ رصيد الدائنين التجاريين 25 لدى Alpha و17 لدى Beta، ويتضمن رصيد Beta مبلغ 5 مستحقًا لـAlpha؛ أما Gamma فتظهر في قوائمها المنفصلة رصيدًا مقابلًا قدره 4. يُعرض استثمار Gamma بطريقة حقوق الملكية بدل إدراج أصولها والتزاماتها بندًا ببند.",
          "At 31 March 20X7 Alpha controls 80% of Beta and has 40% significant influence, but not control, over Gamma. In US$m, trade receivables are 43 for Alpha and 30 for Beta. Alpha's balance includes 5 due from Beta and 4 due from Gamma. Trade payables are 25 for Alpha and 17 for Beta, with 5 due to Alpha included in Beta's balance; Gamma separately reports the reciprocal 4. Gamma is equity-accounted rather than consolidated line by line.",
        ),
        calculations: [
          text("المدينون التجاريون الموحدون = 43 + 30 − 5 = 68 مليون دولار. يُلغى مبلغ Beta من الطرفين لأنه داخل المجموعة؛ لا يُضاف رصيد مديني Gamma البالغ 31 ولا يُطرح رصيدها المقابل 4، فالزميلة ليست تابعة مجمعة.", "Consolidated trade receivables = 43 + 30 − 5 = US$68m. Eliminate the Beta balance on both sides because it is intragroup. Do not add Gamma's own 31 of receivables or deduct its reciprocal 4: the associate is not consolidated line by line."),
          text("الدائنون التجاريون الموحدون = 25 + 17 − 5 = 37 مليون دولار. يبقى مبلغ 4 المستحق من Gamma ضمن مديني Alpha بوصفه رصيدًا مع منشأة خارج حدود التجميع، مع فحص الإفصاح عن الطرف ذي العلاقة عند اللزوم.", "Consolidated trade payables = 25 + 17 − 5 = US$37m. The 4 due from Gamma remains in Alpha's receivables because the associate is outside the consolidation boundary, subject to applicable related-party disclosure."),
        ],
        conclusion: text(
          "الملكية بنسبة 40% والتأثير المهم لا يحولان كل رصيد مع Gamma إلى رصيد داخلي قابل للإلغاء. تختلف تسوية ربح البيع غير المحقق إلى الزميلة، التي تؤثر في قيمة الاستثمار وفق IAS 28، عن إلغاء أصل الذمة المدينة أو الدائنة بالكامل.",
          "A 40% holding with significant influence does not turn every balance with Gamma into an intragroup balance for full elimination. Restricting unrealised downstream profit against the equity-method investment under IAS 28 is distinct from eliminating an entire receivable or payable.",
        ),
        journalEntries: [],
        reference: "IFRS 10.B86(c); IAS 28.10, 28; IAS 24.18",
      },
      {
        title: text("Alpha وBeta: ربح مخزون داخلي وأثره الضريبي", "Alpha and Beta: intragroup inventory profit and tax"),
        facts: text(
          "تسيطر Alpha على 80% من Beta. في 31 مارس 20X7 بلغ مخزون Alpha مبلغ 33 مليون دولار ومخزون Beta مبلغ 30 مليونًا. يتضمن مخزون Beta مكونات اشترتها من Alpha بمبلغ 20 مليونًا، ولا تزال ضمن المخزون عند الإقفال. باعتهـا Alpha بالتكلفة مضافًا إليها هامش 25% من التكلفة. معدل الضريبة المذكور للفروق المؤقتة 25%. تمتلك Alpha أيضًا زميلة منفصلة، لكن مخزون تلك الزميلة لا يدخل في التجميع سطرًا بسطر.",
          "Alpha controls 80% of Beta. At 31 March 20X7 Alpha's inventory is US$33 million and Beta's is US$30 million. Beta's closing inventory includes components bought from Alpha for US$20 million, still held at year-end. Alpha priced them at cost plus a 25% markup on cost. The stated tax rate for temporary differences is 25%. Alpha also has a separate associate, whose inventory is not consolidated line by line.",
        ),
        calculations: [
          text("تكلفة المكونات للمجموعة = 20 ÷ 1.25 = 16 مليون دولار؛ الربح الداخلي غير المحقق = 20 − 16 = 4 ملايين. لا تضرب 20 في 25%؛ فالهامش محسوب على التكلفة، لا على سعر البيع.", "Cost to the group = 20 ÷ 1.25 = US$16m; unrealised intragroup profit = 20 − 16 = US$4m. Do not multiply 20 by 25%: the markup is on cost, not selling price."),
          text("المخزون الموحد = مخزون Alpha 33 + مخزون Beta 30 − الربح الداخلي 4 = 59 مليون دولار. لا تُضاف أصول الزميلة إلى هذا الجمع.", "Consolidated inventory = Alpha 33 + Beta 30 − intragroup profit 4 = US$59m. The associate's assets are not added to this line."),
          text("إذا كان الأساس الضريبي للمكونات لدى Beta هو سعر شرائها 20 مليونًا، فإن الفرق المؤقت القابل للخصم على مستوى المجموعة = 20 − 16 = 4 ملايين؛ وأصل الضريبة المؤجلة المحتمل = 4 × 25% = مليون دولار، بشرط توافر ربح ضريبي مستقبلي يُرجّح استخدام الفرق مقابله.", "If Beta's tax base for the components is its US$20m purchase price, the group's deductible temporary difference is 20 − 16 = US$4m; the potential deferred tax asset is 4 × 25% = US$1m, subject to probable future taxable profit against which it can be used."),
        ],
        conclusion: text(
          "يُلغى الربح الداخلي كاملًا، لا بنسبة ملكية الأم البالغة 80%، لأن Beta تابعة مجمعة. الرقم 59 مليونًا يخص المخزون الموحد؛ أما أصل الضريبة المؤجلة البالغ مليونًا فمشروط بتأكيد الأساس الضريبي وشروط الاعتراف في IAS 12، ولا يمثل إجمالي الضريبة المؤجلة في مسألة تجميع أوسع.",
          "Eliminate the full intragroup profit, not merely the parent's 80% interest, because Beta is consolidated. US$59m is the consolidated inventory amount. The US$1m deferred tax asset is conditional on the tax base and IAS 12 recognition criteria; it is not the total deferred tax balance for a wider consolidation problem.",
        ),
        journalEntries: [
          {
            label: text("ورقة التجميع: استبعاد البيع الداخلي", "Consolidation worksheet: eliminate intragroup sale"),
            debit: text("الإيراد 20 مليون دولار", "Revenue US$20m"),
            credit: text("تكلفة المبيعات 20 مليون دولار", "Cost of sales US$20m"),
            amount: text("20 مليون دولار لكل جانب", "US$20m on each side"),
          },
          {
            label: text("ورقة التجميع: استبعاد الربح الذي بقي في المخزون", "Consolidation worksheet: remove profit remaining in inventory"),
            debit: text("تكلفة المبيعات 4 ملايين دولار", "Cost of sales US$4m"),
            credit: text("المخزون 4 ملايين دولار", "Inventory US$4m"),
            amount: text("4 ملايين دولار لكل جانب", "US$4m on each side"),
          },
        ],
        reference: "IFRS 10.B86(c); IAS 12.11, 24",
      },
    ],
  },
  "IFRS 3": {
    sections: [
      {
        title: text("افصل الشهرة عن العلامة والعلاقة المحددتين", "Separate goodwill from identifiable brands and relationships"),
        explanation: text(
          "الشهرة في تجميع الأعمال قيمة متبقية لا قائمة مستقلة للعاملين أو السمعة. قبل قياسها، حدد الأصول غير الملموسة المستحوذ عليها التي يمكن فصلها أو تنشأ عن حقوق تعاقدية أو قانونية، وقس كل عنصر مؤهل في تاريخ الاستحواذ وفق IFRS 3. ثم احسب الشهرة من المقابل والحصة غير المسيطرة وأي حصة سابقة مطروحًا منها صافي الأصول المحددة. الشهرة المتولدة داخليًا لا تسجل. شهرة الاستحواذ لا تُطفأ ولا تشطب لمجرد صعوبة تقييمها؛ تُخصص للوحدات المستفيدة وتُختبر للانخفاض سنويًا، ولا تُعكس خسارة انخفاضها.",
          "Combination goodwill is a residual, not a separate listing of workforce or reputation. Before measuring it, identify acquired intangibles that are separable or arise from contractual or legal rights, and measure qualifying items at acquisition under IFRS 3. Then compute goodwill as consideration plus NCI and any previously held interest less identifiable net assets. Internally generated goodwill is unrecognised. Acquired goodwill is neither amortised nor written off merely because valuation is difficult; allocate it to benefiting units, test annually for impairment, and never reverse a recognised goodwill loss.",
        ),
        keyPoints: [
          text("الشهرة المشتراة والأصل غير الملموس المحدد لا يحلان محل بعضهما في توزيع سعر الشراء.", "Acquired goodwill and an identifiable intangible are not interchangeable in purchase-price allocation."),
          text("الرأي بأن الشهرة «ينبغي إلغاؤها فورًا» ليس سياسة مسموحة بدل IFRS 3.", "A view that goodwill should be immediately eliminated is not an allowed IFRS 3 policy."),
        ],
        reference: "IFRS 3.10–13, 18, 32; IAS 38.11–12, 48–50; IAS 36.80, 90, 124",
      },
      {
        title: text("الأصل المحتمل عند الاستحواذ: لا تخلطه بالالتزام المحتمل", "Do not confuse an acquired contingent asset with a contingent liability"),
        explanation: text(
          "إذا كانت الشركة المستحوذ عليها تطالب موردًا بتعويض وما زال قبول الدعوى أو نتيجتها غير مؤكدين في تاريخ الاستحواذ، فإن تقدير «قيمة عادلة» للمطالبة أو عرض تسوية مرفوض لا يحوّلانها إلى أصل قابل للاعتراف في تجميع الأعمال. ينص IFRS 3 صراحةً على عدم اعتراف المستحوذ بأصل محتمل في تاريخ الاستحواذ، خلافًا لقاعدة بعض الالتزامات المحتملة المستحوذ عليها القابلة للقياس. لذا لا تُضف المطالبة إلى صافي الأصول المحددة ولا تُنشئ فرقًا ضريبيًا مؤجلًا لعنصر لم يُعترف به. تحقق المطالبة بعد الاستحواذ يُحلل في فترته على أساس وقائعه؛ لا يُستخدم آليًا لإعادة كتابة الشهرة في تاريخ الاستحواذ.",
          "If an acquiree has a damages claim against a supplier and success remains uncertain at the acquisition date, an estimated 'fair value' or rejected settlement offer does not make the claim a recognisable business-combination asset. IFRS 3 explicitly prohibits recognition of a contingent asset at acquisition, unlike the rule for certain measurable contingent liabilities assumed. Do not add the claim to identifiable net assets or create deferred tax on an unrecognised item. A later successful claim is analysed in the later period on its facts, not automatically used to rewrite acquisition-date goodwill.",
        ),
        keyPoints: [
          text("في حالة Alpha/Beta، عرض تسوية بمبلغ 3 ملايين رفضته Beta لا يجعل الدعوى أصلًا معترفًا به في تاريخ الشراء.", "In the Alpha/Beta facts, a rejected US$3 million settlement offer does not make the lawsuit a recognised acquisition-date asset."),
          text("افصل الالتزام المحتمل المستحوذ عليه عن الأصل المحتمل؛ IFRS 3 لا يسوي بينهما.", "Distinguish an assumed contingent liability from a contingent asset; IFRS 3 does not treat them symmetrically."),
          text("لا تحسب ضريبة مؤجلة على أصل افتراضي أُبعد أصلًا من تسويات الاستحواذ.", "Do not calculate deferred tax on a hypothetical asset already excluded from acquisition accounting."),
        ],
        reference: "IFRS 3.10–13, 23–23A; IAS 37.31–35; IAS 12",
      },
      {
        title: text("العلاقات مع العملاء قد تنفصل عن الشهرة، أما فريق العمل فلا", "Customer relationships may be separate; assembled workforce is not"),
        explanation: text(
          "لا يمنع عدم اعتراف الشركة المقتناة بعلاقات العملاء التي كوّنتها داخليًا من إثباتها عند الاستحواذ إذا استوفت معيار الأصل غير الملموس القابل للتحديد: تنشأ من حق تعاقدي/قانوني أو تكون قابلة للفصل، ويُقاس الأصل المستحوذ عليه بالقيمة العادلة. افحص أدلة هذه القابلية قبل نقل تقييم 20 مليونًا إلى الأصول المحددة. أما مهارة مجموعة العاملين القائمة أو قيمة «فريق العمل المجمع» فلا تُثبت أصلًا مستقلًا لمجرد وجود تقدير 15 مليونًا؛ تُستوعب قيمتها في الشهرة. تُقدّر الحياة النافعة للعلاقات المثبتة من نمط المنافع المتوقعة، ولا تجعل عبارة «على الأقل خمس سنوات» عمرًا نهائيًا مقداره خمس سنوات بلا تحليل.",
          "The acquiree's earlier failure to recognise internally generated customer relationships does not prevent acquisition-date recognition if they satisfy the identifiable-intangible criterion: contractual/legal rights or separability, measured at acquisition-date fair value. Check evidence for that criterion before including the US$20 million estimate in identifiable assets. An assembled workforce or the value of existing staff expertise is not a separate identifiable asset merely because it has a US$15 million valuation; its value is subsumed in goodwill. Estimate the recognised relationship's useful life from expected benefits, rather than treating 'at least five years' as an exact five-year life without analysis.",
        ),
        keyPoints: [
          text("اختبر سبب قابلية تحديد علاقات العملاء؛ الرقم المقوّم وحده لا يكفي.", "Establish why customer relationships are identifiable; a valuation alone is not enough."),
          text("لا تُنشئ أصلًا منفصلًا بقيمة 15 مليونًا لفريق العمل المجمع.", "Do not create a separate US$15 million assembled-workforce asset."),
          text("افصل تقييم الأصل عند الاستحواذ عن تقدير عمره وإطفائه اللاحق.", "Separate acquisition-date recognition from subsequent useful-life and amortisation estimates."),
        ],
        reference: "IFRS 3.10–13, B31–B33, B37; IAS 38.97–104",
      },
    ],
    workedExamples: [
      {
        title: text("مقابل 61 ألفًا وصافي أصول محددة 38 ألفًا", "Consideration of $61,000 and identifiable net assets of $38,000"),
        facts: text(
          "تُذكر صفقة شراء نشاط بمقابل 61,000 دولار وتقييم المشتري لصافي الأصول المحددة بـ38,000 دولار. لا تُعطى حصة غير مسيطرة أو حصة ملكية سابقة.",
          "A business purchase illustration gives $61,000 consideration and the acquirer's $38,000 valuation of identifiable net assets. No NCI or previously held interest is given.",
        ),
        calculations: [
          text(
            "إذا كان مبلغ 38,000 هو صافي القيم العادلة الصحيحة للأصول المحددة والالتزامات في تاريخ تجميع أعمال، وكانت الملكية كاملة، فالشهرة = 61,000 − 38,000 = 23,000 دولار.",
            "If $38,000 is the correctly measured acquisition-date fair value of identifiable assets less liabilities in a business combination, and ownership is complete, goodwill is $61,000 − $38,000 = $23,000.",
          ),
          text(
            "تقييم تفاوضي للبائع أو المشتري لا يكفي وحده بدل قياسات تاريخ الاستحواذ وفق IFRS 3؛ ووجود حصة غير مسيطرة أو حصة سابقة يغير المعادلة. لا تُثبت الشهرة المتولدة داخليًا لدى البائع بمجرد الاتفاق على ثمن.",
            "A seller's or buyer's negotiating estimate alone does not replace IFRS 3 acquisition-date measurements; NCI or a previously held interest changes the equation. Agreement on a price does not create internally generated goodwill in the seller's books.",
          ),
        ],
        conclusion: text(
          "23,000 دولار نتيجة مشروطة بصحة فرضيات تجميع الأعمال وقياس صافي الأصول، وليست قيمة مستقلة للسمعة.",
          "$23,000 is conditional on the business-combination and net-asset measurement assumptions, not an independent valuation of reputation.",
        ),
        journalEntries: [],
        reference: "IFRS 3.10, 18, 32; IAS 38.48",
      },

      {
        title: text("Alpha/Beta: أثر استبعاد المطالبة المحتملة من الشهرة", "Alpha/Beta: goodwill effect of excluding a contingent claim"),
        facts: text(
          "دفعت Alpha ثمن 80% من Beta بإصدار 20 مليون سهم قيمتها العادلة 6 دولارات للسهم؛ والقيمة العادلة للحقوق غير المسيطرة 24 مليون دولار. بلغ صافي أصول Beta الدفتري عند الاستحواذ 85 مليونًا. زادت قيمة الأرض 10 ملايين والمعدات 8 ملايين، وقُدرت علاقات العملاء بـ20 مليونًا إذا ثبت أنها قابلة للتحديد. وردت مطالبة قضائية غير محسومة بقيمة تقديرية 3 ملايين، وقيمة مقدرة لفريق العمل 15 مليونًا. معدل الضريبة على الفروق المؤقتة 25%، مع افتراض بقاء الأسس الضريبية للعناصر المعترف بها دون تعديل.",
          "Alpha paid for 80% of Beta with 20 million shares worth US$6 each; non-controlling interests were measured at US$24 million. Beta's acquisition-date book net assets were US$85 million. Land had a US$10 million uplift and equipment US$8 million; customer relationships were valued at US$20 million if identifiable. An unresolved legal claim had an estimated US$3 million value and an assembled workforce was valued at US$15 million. The temporary-difference tax rate is 25%, assuming unchanged tax bases for the recognised items.",
        ),
        calculations: [
          text("المقابل 20 × 6 = 120 مليونًا؛ ومع الحقوق غير المسيطرة 24 مليونًا يصبح إجمالي طرفي معادلة الشهرة 144 مليونًا.", "Consideration is 20 × 6 = US$120 million; adding US$24 million NCI gives US$144 million for the goodwill equation."),
          text("إذا ثبتت قابلية تحديد علاقات العملاء: زيادات القيمة المعترف بها = 10 + 8 + 20 = 38 مليونًا؛ أصل الدعوى المحتمل 3 ملايين وفريق العمل 15 مليونًا لا يدخلان هنا. الضريبة المؤجلة على الزيادات = 38 × 25% = 9.5 ملايين، بافتراض الأسس الضريبية المذكور.", "If customer relationships are identifiable, recognised uplifts are 10 + 8 + 20 = US$38 million; the US$3 million contingent claim and US$15 million workforce are excluded. Deferred tax on those uplifts is 38 × 25% = US$9.5 million under the stated tax-base assumption."),
          text("صافي الأصول المحددة = 85 + 38 − 9.5 = 113.5 مليونًا؛ الشهرة = 144 − 113.5 = 30.5 مليونًا. إدخال المطالبة خطأً مع فرقها الضريبي كان سيخفض الشهرة بمقدار 3 − 0.75 = 2.25 مليون.", "Identifiable net assets = 85 + 38 − 9.5 = US$113.5 million; goodwill = 144 − 113.5 = US$30.5 million. Incorrectly adding the claim and related tax difference would understate goodwill by 3 − 0.75 = US$2.25 million."),
        ],
        conclusion: text(
          "30.5 مليون دولار نتيجة مشروطة بثبوت قابلية تحديد علاقات العملاء وبفرض الأسس الضريبية المذكور، وليست حلًا كاملًا لقائمة المركز المالي الموحدة. لا يُثبت أصل المطالبة المحتملة أو فريق العمل منفصلين؛ ويعاد تقدير أرقام الشهرة إن لم تتحقق شروط علاقة العملاء.",
          "US$30.5 million is conditional on identifiable customer relationships and the stated tax-base assumption, not a full consolidated statement of financial position. Neither the contingent claim nor assembled workforce is recognised separately; reassess goodwill if the customer relationship fails the identifiability test.",
        ),
        journalEntries: [],
        reference: "IFRS 3.18–19, 23A, 32, B31–B33, B37; IAS 12",
      },
      {
        title: text("Alpha/Beta: مقابل أسهم الشراء وتكاليف إصدارها", "Alpha/Beta: share consideration and issue costs"),
        facts: text(
          "في 1 أبريل 20X6 اشترت Alpha أربعين مليون سهم في Beta بإصدار سهم واحد من أسهمها لكل سهمين مشتراة؛ القيمة الاسمية لسهم Alpha دولار واحد وسعره المدرج يوم الشراء 6 دولارات. لم تسجل Alpha إصدار الأسهم في دفاترها، لكنها حمّلت مبلغ 0.8 مليون دولار من التكاليف المباشرة لإصدارها على الربح أو الخسارة خلال السنة. رأس مال Alpha قبل التصحيح 70 مليون دولار ولا يظهر في بياناتها رصيد سابق لعلاوة إصدار.",
          "On 1 April 20X6 Alpha bought 40 million Beta shares by issuing one of its own shares for every two acquired. Each Alpha share has US$1 par value and a quoted acquisition-date price of US$6. Alpha did not record the share issue, but charged US$0.8 million of directly attributable share-issue costs to profit or loss during the year. Its unadjusted share capital is US$70 million, with no pre-existing share-premium balance shown.",
        ),
        calculations: [
          text("الأسهم المصدرة = 40 ÷ 2 = 20 مليون سهم؛ مقابل الاستحواذ بالقيمة العادلة = 20 × 6 = 120 مليون دولار، يدخل في حساب الشهرة قبل فحص صافي الأصول المقتناة.",
          "Shares issued = 40 ÷ 2 = 20 million; acquisition-date fair-value consideration = 20 × 6 = US$120 million, used in the goodwill equation before assessing acquired net assets."),
          text("يثبت رأس مال جديد 20 × 1 = 20 مليونًا، وعلاوة إصدار أولية 20 × (6 − 1) = 100 مليون. تكلفة إصدار الأسهم المباشرة 0.8 تُخصم من علاوة الإصدار، لا من المقابل 120 ولا من ربح الفترة؛ فتكون علاوة الإصدار 99.2 مليون ورأس المال الختامي 90 مليونًا، قبل أي أثر ضريبي غير معطى.",
          "Record new share capital of 20 × 1 = US$20 million and initial share premium of 20 × (6 − 1) = US$100 million. Deduct the US$0.8 million direct issue cost from share premium, not from US$120 million consideration or period profit: share premium becomes US$99.2 million and closing share capital US$90 million, before any unspecified tax effect."),
        ],
        conclusion: text(
          "صحح المصروف المحمل خطأً على الربح أو الخسارة بزيادة الربح/الأرباح المحتجزة 0.8 مليون وخفض علاوة الإصدار بالمبلغ نفسه. لا تخلط هذه التكلفة المباشرة لإصدار أداة حقوق ملكية مع أتعاب الاستحواذ الأخرى التي تعالج عادةً مصروفًا وفق IFRS 3.",
          "Reverse the issue cost incorrectly charged to profit or loss, increasing profit/retained earnings by US$0.8 million and decreasing share premium by the same amount. Direct equity-issue costs are distinct from other acquisition-related fees, which IFRS 3 generally expenses.",
        ),
        journalEntries: [
          {
            label: text("إثبات أسهم المقابل التي لم تسجلها Alpha", "Record the previously omitted consideration shares"),
            debit: text("استثمار في Beta", "Investment in Beta"),
            credit: text("رأس المال 20 مليونًا وعلاوة الإصدار 100 مليون", "Share capital US$20m and share premium US$100m"),
            amount: text("120 مليون دولار", "US$120m"),
          },
          {
            label: text("إعادة تبويب تكلفة إصدار الأسهم المباشرة", "Reclassify direct share-issue costs"),
            debit: text("علاوة إصدار الأسهم", "Share premium"),
            credit: text("مصروف إصدار الأسهم، أو الأرباح المحتجزة إذا أُقفل", "Share-issue expense, or retained earnings if closed"),
            amount: text("0.8 مليون دولار", "US$0.8m"),
          },
        ],
        reference: "IFRS 3.37, 53; IAS 32.35, 37; IAS 12.61A",
      },
    ],
  },
  "IAS 16": {
    sections: [
      {
        title: text("عكس خسارة إعادة التقييم: الأصل نفسه أولًا", "Reversing a revaluation loss: test the same asset first"),
        explanation: text(
          "عند ارتفاع أصل ثابت سبق تسجيل خسارة إعادة تقييم له في الربح أو الخسارة، يُعاد إلى الربح أو الخسارة فقط الجزء الذي يعكس خسارة ذلك الأصل؛ وما زاد يدخل الدخل الشامل الآخر وفائض إعادة التقييم. وعند هبوط أصل له فائض قائم، يُستنفد فائض الأصل نفسه عبر الدخل الشامل الآخر أولًا، ثم يسجل الباقي في الربح أو الخسارة. لا تخلط رصيد شركة كاملًا أو فائض أصل آخر مع رصيد الأصل محل القياس. في جميع الحالات يلزم تطبيق سياسة إعادة التقييم على فئة الأصول كاملة، وتقييم آثار الضريبة المؤجلة عند وجودها.",
          "For an increase in PPE after a prior revaluation decrease charged to profit or loss, recognise in profit or loss only the portion reversing that same asset's earlier loss; the excess goes to other comprehensive income and revaluation surplus. For a decrease when the asset has an existing surplus, use that same asset's surplus through other comprehensive income first and recognise the rest in profit or loss. Do not substitute an entity-wide reserve or another asset's surplus. Apply the revaluation policy to the entire asset class and assess related deferred tax when relevant.",
        ),
        keyPoints: [
          text("الاختبار مرتبط بتاريخ وأثر إعادة تقييم الأصل المحدد، لا بالسعر الأصلي فقط.", "The test follows the particular asset's prior revaluation history, not merely original cost."),
          text("الزيادة التي تعكس خسارة سابقة في الربح أو الخسارة تختلف عن فائض جديد في الدخل الشامل الآخر.", "An increase reversing a prior profit-or-loss loss differs from new surplus in other comprehensive income."),
        ],
        reference: "IAS 16.36, 39–40; IAS 12.61A",
      },
      {
        title: text("فائض إعادة التقييم عند الاستخدام والاستبعاد", "Revaluation surplus during use and on derecognition"),
        explanation: text(
          "يُعرض فائض إعادة تقييم الأصل ضمن حقوق الملكية بعد الاعتراف بالزيادة في الدخل الشامل الآخر وفق شروط IAS 16. يجوز تحويل الجزء المتحقق منه مباشرةً إلى الأرباح المحتجزة عندما يُستبعد الأصل، أو تدريجيًا أثناء استخدامه بمقدار الفرق بين الإهلاك على القيمة المعاد تقييمها والإهلاك على التكلفة الأصلية. هذا التحويل داخل حقوق الملكية ولا يمر عبر الربح أو الخسارة. وعند بيع الأصل، يُحسب ربح الاستبعاد منفصلًا بوصفه صافي المتحصلات ناقص القيمة الدفترية في تاريخ البيع؛ لا تخلط بينه وبين تحويل الفائض.",
          "A qualifying upward revaluation is recognised in other comprehensive income and accumulated in equity as a revaluation surplus under IAS 16. The realised portion may be transferred directly to retained earnings when the asset is derecognised, or progressively as it is used for the difference between depreciation on the revalued amount and depreciation on original cost. This is an equity-to-equity transfer, never a profit-or-loss item. On disposal, calculate the separate derecognition gain as net proceeds less the asset's carrying amount at the sale date; do not confuse it with the surplus transfer.",
        ),
        keyPoints: [
          text("حدد فائض الأصل المحدد، لا رصيد احتياطي إعادة التقييم الكلي للشركة.", "Track the surplus of the particular asset, not the entity's entire revaluation reserve."),
          text("احسب التحويل السنوي الاختياري من فرق الإهلاك، ثم اطرح ما نُقل بالفعل قبل الاستبعاد.", "Calculate any optional annual transfer from excess depreciation, then deduct amounts already transferred before disposal."),
          text("اعرض ربح بيع الأصل في الربح أو الخسارة وتحويل باقي الفائض في حقوق الملكية دون تدويره في الربح أو الخسارة.", "Show any disposal gain in profit or loss and the residual-surplus transfer within equity, without recycling the surplus through profit or loss."),
        ],
        reference: "IAS 16.39–41, 67–71",
      },
      {
        title: text("تكلفة الاقتناء والإهلاك بحسب الاستخدام", "Acquisition cost and depreciation by use"),
        explanation: text(
          "تدخل الأتعاب المهنية المرتبطة مباشرة بشراء الأرض في تكلفة الأرض حتى لو سُجلت أولًا ضمن المصروفات العامة. الأرض المملوكة ذات العمر غير المحدد لا تُهلك عادة، بخلاف المعدات والأثاث والسيارات التي يبدأ إهلاكها عندما تصبح متاحة للاستخدام. حدّد أساس وطريقة الإهلاك لكل فئة ثم وزّع مصروف الفترة بحسب وظيفة الأصل: إنتاج أو إدارة أو توزيع. إهلاك معدات الإنتاج قد يدخل تكلفة تحويل المخزون وفق IAS 2؛ لا يُحمّل تلقائيًا كله على مصروف الفترة. أما حق استخدام العقار المؤجّر والتزام الإيجار فيحتاجان تقييمًا منفصلًا بموجب IFRS 16 وفق شروط العقد، ولا يُخلطان بالأرض المملوكة.",
          "Professional fees directly attributable to acquiring freehold land form part of its cost even if initially recorded in general expenses. Owned land with an unlimited useful life is generally not depreciated, unlike equipment, furniture and vehicles, whose depreciation starts when available for use. Determine each class's depreciation base and method, then allocate the period's charge to production, administration or distribution according to the asset's use. Production-equipment depreciation may enter inventory conversion cost under IAS 2; it is not automatically all a period expense. An interest in leased property and its lease liability require separate IFRS 16 assessment based on contract terms and must not be conflated with owned land.",
        ),
        keyPoints: [
          text("انقل رسوم الشراء المباشرة من المصروف إلى تكلفة الأرض؛ لا تضف إليها رسومًا غير مرتبطة بالشراء.", "Reclassify directly attributable purchase fees into land cost; do not add unrelated fees."),
          text("طريقة الرصيد المتناقص تُطبّق على القيمة الدفترية الافتتاحية، بينما النسبة على التكلفة تُطبّق على التكلفة الأصلية.", "Apply a reducing-balance rate to opening carrying amount, but a cost-based rate to original cost."),
          text("افصل إهلاك التصنيع عن الإدارة والتوزيع، وقيّم إدراج جزء التصنيع في المخزون بحسب IAS 2.", "Separate manufacturing depreciation from administration and distribution, and assess inventory inclusion under IAS 2."),
        ],
        reference: "IAS 16.16–17, 48–49, 55, 58, 60–61; IAS 2.12–13; IFRS 16.22–28",
      },
      {
        title: text("تغيّر تقدير العمر وإهلاك المكونات", "Useful-life changes and component depreciation"),
        explanation: text(
          "راجع العمر الإنتاجي والقيمة المتبقية وطريقة الإهلاك سنويًا على الأقل. عند تغيّر التقدير، وزّع القيمة الدفترية المتبقية على العمر أو وحدات الاستخدام المتبقية بأثر مستقبلي، ولا تُعد إهلاك السنوات الماضية. أهلك كل جزء جوهري من الأصل المركب بحسب نمط منافعه. تُرسمل تكلفة الفحص الرئيسي عند تنفيذه إذا تحققت شروط الاعتراف، مع إلغاء الرصيد المتبقي لفحص سابق؛ لا تُرسمل تكلفة فحص مستقبلي.",
          "Review useful life, residual value and depreciation method at least annually. Allocate remaining carrying amount over revised remaining life or use prospectively; do not restate past depreciation. Depreciate each significant part in line with its benefit pattern. Capitalise a major inspection when performed if recognition criteria are met, derecognising any remaining previous-inspection component; do not capitalise a future inspection.",
        ),
        keyPoints: [
          text("تعديل العمر أو الطريقة تغيير في التقدير يطبق على الحاضر والمستقبل.", "A useful-life or method change is an estimate change applied currently and prospectively."),
          text("للمكونات الجوهرية أعمار أو وحدات استخدام مستقلة.", "Significant components have separate lives or units of use."),
          text("رسملة الفحص مشروطة بوقوعه وإلغاء رصيد الفحص السابق.", "Inspection capitalisation depends on performance and removal of any prior-inspection balance."),
        ],
        reference: "IAS 16.14, 43–44, 50–51, 60–62; IAS 8.36–38",
      },
      {
        title: text("القيمة الدفترية والمبلغ القابل للاسترداد", "Carrying amount and recoverable amount"),
        explanation: text(
          "القيمة الدفترية للأصل ليست بالضرورة سعر بيعه ولا مجرد التكلفة ناقص الإهلاك: تُطرح أيضًا خسائر الانخفاض المتراكمة، وقد يكون أساس القياس مبلغًا معاد تقييمه. وفق IAS 36، المبلغ القابل للاسترداد هو الأعلى بين القيمة العادلة ناقص تكاليف الاستبعاد وقيمة الاستخدام. لذلك قد تتجاوز القيمة الدفترية سعر البيع الصافي إذا كانت قيمة الاستخدام تدعمها. افحص مؤشرات الانخفاض، واختبر الأصل أو وحدة توليد النقد عند اللزوم؛ لا تعتمد على سعر سوقي واحد أو تفترض أن كل انخفاض في سعر البيع يوجب خسارة.",
          "An asset's carrying amount is not necessarily its selling price or simply cost less depreciation: accumulated impairment is deducted too, and the measurement base may be revalued. IAS 36 defines recoverable amount as the higher of fair value less costs of disposal and value in use. Carrying amount can therefore exceed net selling value when supported by value in use. Assess impairment indicators and test the asset or cash-generating unit where required; one market quote alone does not prove an impairment loss.",
        ),
        keyPoints: [
          text("الاسترداد = الأعلى بين قيمة الاستخدام والقيمة العادلة ناقص تكاليف الاستبعاد.", "Recoverable amount is the higher of value in use and fair value less costs of disposal."),
          text("الإهلاك توزيع منافع، لا تقييم سوقي ولا احتياطي نقدي للشراء.", "Depreciation allocates benefits; it is neither market remeasurement nor a replacement cash reserve."),
        ],
        reference: "IAS 16.6, 29–31, 50–55; IAS 36.9, 18, 22",
      },
      {
        title: text("إيقاف الإهلاك والاستبعاد عند البيع", "Depreciation cut-off and derecognition on sale"),
        explanation: text(
          "يبدأ الإهلاك حين يصبح الأصل متاحًا للاستخدام. ولا يتوقف لمجرد التوقف المؤقت عن تشغيله؛ بل يتوقف عند التصنيف المحتفظ به للبيع وفق IFRS 5 أو الاستبعاد، أيهما أسبق، مع احتمال صفر مصروف في طريقة وحدات الإنتاج عند عدم الإنتاج. عند البيع احسب إهلاك الفترة حتى تاريخ التوقف، ثم ألغِ تكلفة الأصل ومجمع إهلاكه وأثبت المقابل المستحق أو النقد؛ ربح أو خسارة الاستبعاد = صافي المتحصلات ناقص القيمة الدفترية. لا تصنف ربح بيع أصل ثابت عادي ضمن الإيراد، مع مراعاة استثناء IAS 16.69 لبيع الأصول المؤجرة بانتظام ضمن النشاط العادي.",
          "Depreciation starts when an asset is available for use and does not stop merely because it becomes idle. It ceases on IFRS 5 held-for-sale classification or derecognition, whichever is earlier, though a units-of-production charge can be zero without output. On sale, charge depreciation to the cut-off date, remove asset cost and accumulated depreciation and recognise cash or receivable; disposal gain or loss equals net proceeds less carrying amount. An ordinary PPE disposal gain is not revenue, subject to the IAS 16.69 exception for routine sales of former rental assets in ordinary activities.",
        ),
        keyPoints: [
          text("تاريخ البيع يحدد إهلاك السنة الجزئية قبل حساب ربح أو خسارة الاستبعاد.", "Sale date sets the partial-year depreciation before measuring disposal gain or loss."),
          text("أزل تكلفة الأصل ومجمع إهلاكه معًا ولا تسجل المتحصلات كلها كربح.", "Remove both gross cost and accumulated depreciation; proceeds are not wholly profit."),
        ],
        reference: "IAS 16.55, 67–72; IFRS 5.25",
      },
      {
        title: text("نطاق IAS 16 واختبار الاعتراف", "IAS 16 scope and recognition test"),
        explanation: text(
          "يطبق IAS 16 على الأصول الملموسة المستخدمة في الإنتاج أو توريد الخدمات أو التأجير أو الإدارة لأكثر من فترة، بما في ذلك النباتات المثمرة نفسها؛ أما المنتج الذي ينمو عليها فيبقى ضمن IAS 41. تُوجّه حقوق التعدين والاحتياطيات، والأصول المصنفة محتفظًا بها للبيع، إلى المعايير المختصة وفق حدود نطاق IAS 16. اعترف بالأصل أو الجزء البديل فقط إذا رجح تدفق منافعه الاقتصادية إلى المنشأة وأمكن قياس تكلفته بموثوقية. لا تضف شرطًا مستقلًا بانتقال «المخاطر والمكافآت» كما لو كان معيار الإيراد، ولا ترسمل أي قطعة غيار أو معدات سلامة بلا اختبار شروط الاعتراف؛ قد تكون معدات السلامة لازمة للاستفادة من الأصول الأخرى ويُراجع انخفاض قيمة المجموعة المرتبطة.",
          "IAS 16 covers tangible items used for production, services, rental or administration over more than one period, including bearer plants themselves; produce growing on them remains under IAS 41. Mineral rights/reserves and assets classified as held for sale follow their applicable Standards within IAS 16's scope boundaries. Recognise an item or replacement only when associated future benefits are probable and cost is reliably measurable. Do not introduce a separate transfer-of-risks-and-rewards rule as if it were a revenue test, or capitalise every spare or safety item without the recognition test; safety equipment may enable benefits from other assets and prompt impairment assessment of the related group.",
        ),
        keyPoints: [
          text("افصل النبات المثمر عن المنتج الزراعي النامي عليه.", "Distinguish a bearer plant from produce growing on it."),
          text("الإنفاق اللاحق وإحلال المكونات يخضعان لمبدأ الاعتراف نفسه.", "Subsequent expenditure and component replacement face the same recognition principle."),
        ],
        reference: "IAS 16.2–11, 13–14; IAS 41.2–3",
      },
      {
        title: text("تكلفة الأصل والاختبار والاستبدال والمبادلة", "Asset cost, testing, replacement and exchange"),
        explanation: text(
          "تبدأ تكلفة الأصل بثمن الشراء بعد الخصومات، ورسوم الاستيراد والضرائب غير القابلة للاسترداد، والتكاليف المباشرة اللازمة لجعله في الموقع والحالة المقصودة، والتقدير الأولي لالتزام التفكيك وإعادة الموقع إن وجد. لا ترسمل مصروفات الإدارة العامة أو التأسيس أو الخسائر التشغيلية الأولية لمجرد وقوعها أثناء المشروع. اختبر عمل الأصل، لكن اعترف بمتحصلات بيع المنتجات المصنوعة قبل جاهزيته وتكلفتها في الربح أو الخسارة وفق المعايير المنطبقة؛ لا تخصم المتحصلات من تكلفة الأصل. عند استبدال جزء جوهري، ألغِ القيمة الدفترية للجزء القديم واعترف بالجديد إذا تحققت الشروط. وفي مبادلة أصل غير نقدي، استخدم القيمة العادلة عادة، إلا إذا افتقرت العملية إلى الجوهر التجاري أو تعذر قياس القيمة العادلة لكلا طرفيها بموثوقية؛ حينها يكون الأساس قيمة الأصل المتنازل عنه الدفترية.",
          "Asset cost starts with purchase price after discounts, import duties and non-refundable taxes, directly attributable costs to bring it to intended location and condition, and any initial dismantling/restoration obligation estimate. Do not capitalise general administration, start-up or initial operating losses merely because they arise during the project. Test functionality, but recognise proceeds and costs of items produced before intended use in profit or loss under applicable Standards; do not net sale proceeds against asset cost. On replacement, derecognise the old part's carrying amount and recognise the new part if criteria are met. A non-monetary exchange is normally measured at fair value unless it lacks commercial substance or neither fair value is reliably measurable; then use the carrying amount of the asset given up.",
        ),
        keyPoints: [
          text("بيع منتجات الاختبار لا يخفض تكلفة الأصل بعد تعديل IAS 16.20A.", "Selling test output does not reduce asset cost after IAS 16.20A."),
          text("ألغِ الجزء المستبدل عند الاعتراف بالجزء الجديد؛ لا تُبقِهما معًا.", "Derecognise the replaced part when recognising its replacement."),
          text("مبادلة الأصل تختبر الجوهر التجاري وقابلية القياس قبل اختيار التكلفة.", "For an exchange, assess commercial substance and reliable fair-value measurement."),
        ],
        reference: "IAS 16.7, 13–24; IAS 37.14",
      },
    ],
    workedExamples: [
      {
        title: text("Gains: فائض أصل أُعيد تقييمه ثم بيع", "Gains: a revalued asset subsequently sold"),
        facts: text(
          "كانت القيمة الدفترية لأصل 30,000 دولار عند إعادة تقييمه، وزادت قيمته حينها بمبلغ 50,000 إلى 80,000. يبلغ عمر الإهلاك المستخدم في السؤال عشر سنوات. بعد ثلاث سنوات أظهر السجل إهلاكًا تراكميًا 24,000 على المبلغ المعاد تقييمه، ثم بيع الأصل بمبلغ 60,000. تنقل المنشأة فائض الإهلاك المتحقق إلى الأرباح المحتجزة أثناء الاستخدام. لا يورد السؤال أثرًا ضريبيًا لهذه الأرقام.",
          "At revaluation an asset's carrying amount was US$30,000 and the uplift was US$50,000 to US$80,000. The question uses a ten-year depreciation period. After three years it shows cumulative depreciation of US$24,000 on the revalued amount, and the asset is sold for US$60,000. The entity transfers realised excess-depreciation surplus to retained earnings during use. No tax effect is specified for these figures.",
        ),
        calculations: [
          text("الإهلاك السنوي بعد إعادة التقييم = 80,000 ÷ 10 = 8,000؛ وعلى المبلغ الأصلي = 30,000 ÷ 10 = 3,000؛ الفرق المحوّل خلال ثلاث سنوات = (8,000 − 3,000) × 3 = 15,000 دولار.", "Annual depreciation on revalued amount = 80,000 ÷ 10 = 8,000; on original amount = 30,000 ÷ 10 = 3,000; three-year excess transferred = (8,000 − 3,000) × 3 = US$15,000."),
          text("فائض إعادة التقييم المتبقي قبل البيع = 50,000 − 15,000 = 35,000 دولار.", "Residual revaluation surplus immediately before sale = 50,000 − 15,000 = US$35,000."),
          text("القيمة الدفترية عند البيع = 80,000 − 24,000 = 56,000؛ وربح الاستبعاد المنفصل = 60,000 − 56,000 = 4,000 دولار.", "Carrying amount at disposal = 80,000 − 24,000 = 56,000; separate disposal gain = 60,000 − 56,000 = US$4,000."),
        ],
        conclusion: text(
          "يمكن تحويل 35,000 دولار مباشرةً من فائض إعادة التقييم إلى الأرباح المحتجزة عند البيع. هذه حركة داخل حقوق الملكية، مستقلة عن ربح الاستبعاد البالغ 4,000 دولار المعترف به في الربح أو الخسارة. تجنب إدخال 35,000 مرة ثانية في ربح الفترة.",
          "US$35,000 may be transferred directly from revaluation surplus to retained earnings on disposal. This equity movement is distinct from the US$4,000 disposal gain recognised in profit or loss. Do not count the US$35,000 a second time in current-period profit.",
        ),
        journalEntries: [
          {
            label: text("إثبات البيع وربح الاستبعاد", "Record sale and derecognition gain"),
            debit: text("نقدية 60,000", "Cash 60,000"),
            credit: text("أصل ثابت 56,000 + ربح استبعاد 4,000", "Property, plant and equipment 56,000 + disposal gain 4,000"),
            amount: text("60,000 لكل جانب", "60,000 on each side"),
          },
          {
            label: text("تحويل الفائض المتبقي داخل حقوق الملكية", "Transfer residual surplus within equity"),
            debit: text("فائض إعادة التقييم 35,000", "Revaluation surplus 35,000"),
            credit: text("أرباح محتجزة 35,000", "Retained earnings 35,000"),
            amount: text("35,000 لكل جانب", "35,000 on each side"),
          },
        ],
        reference: "IAS 16.41, 67–71",
      },
      {
        title: text("Polymer: تكلفة الأرض وإهلاك الأصول المملوكة", "Polymer: land cost and depreciation of owned assets"),
        facts: text(
          "في 31 مايو 20X8 تظهر أرض مملوكة بتكلفة 250,000 دولار، ورسوم محاماة مباشرة لشرائها بمبلغ 5,000 سُجلت ضمن المصروفات القانونية. تكلفة معدات المصنع 150,000 ومجمع إهلاكها الافتتاحي 68,500، وإهلاك السنة 8% من التكلفة. تكلفة الأثاث 50,000 ومجمعه 15,750، وإهلاكه 10% من التكلفة. تكلفة السيارات 75,000 ومجمعها 25,000، وإهلاكها 20% بطريقة الرصيد المتناقص. يُستخدم ربع السيارات إداريًا وثلاثة أرباعها في التوزيع. يظهر أيضًا عقار ذو حق إيجار لكن شروط عقده غير متاحة لهذا الحساب.",
          "At 31 May 20X8 owned land is carried at US$250,000, while US$5,000 of legal fees directly attributable to its purchase were recorded in legal expenses. Factory equipment cost US$150,000 with opening accumulated depreciation of US$68,500 and current depreciation at 8% of cost. Furniture cost US$50,000 with accumulated depreciation of US$15,750 and 10% of cost depreciation. Vehicles cost US$75,000 with accumulated depreciation of US$25,000 and depreciation at 20% reducing balance. One-quarter of vehicle use is administrative and three-quarters relates to distribution. A leased property interest also appears, but its contract terms are unavailable for this calculation.",
        ),
        calculations: [
          text("تكلفة الأرض المصححة = 250,000 + 5,000 = 255,000 دولار؛ لا يُحتسب إهلاك للأرض في هذه الوقائع.", "Corrected land cost = 250,000 + 5,000 = US$255,000; no land depreciation arises on these facts."),
          text("إهلاك معدات المصنع = 150,000 × 8% = 12,000؛ قيمتها الختامية = 150,000 − 68,500 − 12,000 = 69,500 دولار.", "Factory-equipment depreciation = 150,000 × 8% = 12,000; closing carrying amount = 150,000 − 68,500 − 12,000 = US$69,500."),
          text("إهلاك الأثاث = 50,000 × 10% = 5,000؛ قيمته الختامية = 50,000 − 15,750 − 5,000 = 29,250 دولار.", "Furniture depreciation = 50,000 × 10% = 5,000; closing carrying amount = 50,000 − 15,750 − 5,000 = US$29,250."),
          text("القيمة الافتتاحية للسيارات = 75,000 − 25,000 = 50,000؛ إهلاك الرصيد المتناقص = 50,000 × 20% = 10,000؛ القيمة الختامية = 40,000 دولار.", "Opening vehicle carrying amount = 75,000 − 25,000 = 50,000; reducing-balance depreciation = 50,000 × 20% = 10,000; closing carrying amount = US$40,000."),
          text("إجمالي إهلاك الأصول الثلاثة = 27,000: تكلفة تصنيع 12,000، إدارة 5,000 + 2,500 = 7,500، توزيع 7,500. مجموع القيم الدفترية للأصول المملوكة المذكورة = 255,000 + 69,500 + 29,250 + 40,000 = 393,750 دولار.", "Depreciation on the three depreciable classes totals 27,000: manufacturing 12,000, administration 5,000 + 2,500 = 7,500, distribution 7,500. The specified owned assets' aggregate carrying amount is 255,000 + 69,500 + 29,250 + 40,000 = US$393,750."),
        ],
        conclusion: text(
          "تُعرض الأرض والمعدات والأثاث والسيارات المملوكة هنا بقيمة إجمالية 393,750 دولار قبل أي معلومات إضافية عن انخفاض القيمة. يدخل إهلاك المصنع 12,000 في مجمع تكلفة الإنتاج؛ ويتحدد ما يبقى في مخزون آخر المدة وما يُحمّل لتكلفة المبيعات وفق حركة المخزون وIAS 2. لا تُضف قيمة العقار المؤجّر إلى هذا المجموع ولا تفترض له معالجة IAS 16 قبل فحص عقد الإيجار وفق IFRS 16.",
          "The specified owned land, equipment, furniture and vehicles total US$393,750 before any further impairment information. Factory depreciation of US$12,000 enters the production-cost pool; its split between closing inventory and cost of sales depends on inventory movements and IAS 2. Do not add the leased property to this subtotal or assume IAS 16 treatment without assessing its contract under IFRS 16.",
        ),
        journalEntries: [
          {
            label: text("تصحيح تصنيف رسوم شراء الأرض", "Reclassify land-purchase legal fees"),
            debit: text("أرض مملوكة 5,000", "Owned land 5,000"),
            credit: text("مصروفات قانونية 5,000", "Legal expenses 5,000"),
            amount: text("5,000 لكل جانب", "5,000 on each side"),
          },
          {
            label: text("إثبات إهلاك السنة حسب الوظيفة", "Record annual depreciation by function"),
            debit: text("تكلفة إنتاج 12,000 + مصروفات إدارية 7,500 + مصروفات توزيع 7,500", "Production cost 12,000 + administrative expense 7,500 + distribution expense 7,500"),
            credit: text("مجمع إهلاك المعدات 12,000 + مجمع إهلاك الأثاث 5,000 + مجمع إهلاك السيارات 10,000", "Equipment accumulated depreciation 12,000 + furniture accumulated depreciation 5,000 + vehicle accumulated depreciation 10,000"),
            amount: text("27,000 لكل جانب", "27,000 on each side"),
          },
        ],
        reference: "IAS 16.16–17, 48–49, 58, 60–61; IAS 2.12–13; IFRS 16.22–28",
      },
      {
        title: text("عقار مملوك: افصل إهلاك المبنى عن إعادة التقييم", "Owner-occupied property: separate building depreciation from revaluation"),
        facts: text(
          "تكلفة أرض ومبنى مملوكين 430 ألف دولار. جزء المبنى من التكلفة 100 ألف، وعمره النافع 50 سنة دون قيمة متبقية مفترضة في الحساب المعروض. بلغ مجمع إهلاك المبنى أول السنة 20 ألفًا، وأعيد تقييم العقار في نهاية السنة إلى 800 ألف. لا تتوافر في هذه الوقائع بيانات عن خسائر إعادة تقييم سابقة للأصل أو عن بقية أصول الفئة.",
          "Owner-occupied land and building cost $430 thousand. The building's cost component is $100 thousand with a 50-year useful life and no residual amount in the presented calculation. Opening accumulated building depreciation is $20 thousand, and the property is revalued to $800 thousand at year-end. These facts provide no information about earlier revaluation losses on the asset or other assets in the class.",
        ),
        calculations: [
          text("إهلاك المبنى للسنة = 100 ÷ 50 = 2 ألف دولار؛ الأرض لا تُهلك لمجرد أنها ضمن العقار.", "Annual building depreciation = 100 ÷ 50 = $2 thousand; land is not depreciated merely because it is included in the property."),
          text("القيمة الدفترية قبل إعادة التقييم = 430 − 20 − 2 = 408 آلاف دولار؛ الزيادة الحسابية إلى القيمة الجديدة = 800 − 408 = 392 ألفًا.", "Pre-revaluation carrying amount = 430 − 20 − 2 = $408 thousand; the numerical uplift to the new value is 800 − 408 = $392 thousand."),
          text("إذا لم تكن هناك خسارة إعادة تقييم سابقة لنفس الأصل أُثبتت في الربح أو الخسارة، تُعترف الزيادة 392 ألفًا في الدخل الشامل الآخر وتُجمع في فائض إعادة التقييم. إن وُجدت خسارة سابقة، يُعترف بجزء عكسها في الربح أو الخسارة أولًا وفق IAS 16.", "If no previous revaluation decrease for the same asset was recognised in profit or loss, the $392 thousand increase goes to other comprehensive income and revaluation surplus. If such a decrease exists, the portion reversing it first goes to profit or loss under IAS 16."),
        ],
        conclusion: text(
          "هذه مصالحة للعقار فقط، وليست قائمة مالية كاملة. لا تكفي قيمة 800 ألف غير المفصلة بين الأرض والمبنى لحساب إهلاك المبنى بعد إعادة التقييم؛ ويجب أيضًا التأكد من تطبيق سياسة إعادة التقييم على الفئة كلها، لا اختيار هذا العقار منفردًا.",
          "This is a property reconciliation, not a complete set of financial statements. The unallocated $800 thousand valuation does not determine post-revaluation building depreciation; also confirm that the revaluation policy applies to the entire class rather than selectively to this property.",
        ),
        journalEntries: [
          {
            label: text("إهلاك المبنى خلال السنة", "Annual building depreciation"),
            debit: text("مصروف إهلاك المبنى", "Building depreciation expense"),
            credit: text("مجمع إهلاك المبنى", "Accumulated building depreciation"),
            amount: text("2,000", "2,000"),
          },
          {
            label: text("زيادة إعادة التقييم — بشرط عدم وجود عكس خسارة سابقة", "Revaluation uplift — if no prior loss is reversed"),
            debit: text("العقار، على أساس القيمة الدفترية الصافية", "Property, on a net-carrying-amount basis"),
            credit: text("فائض إعادة التقييم عبر الدخل الشامل الآخر", "Revaluation surplus through other comprehensive income"),
            amount: text("392,000", "392,000"),
          },
        ],
        reference: "IAS 16.31, 35–40, 58, 60–62",
      },
      {
        title: text("طائرة: إهلاك المكونات والفحص الرئيسي", "Aircraft: components and major inspection"),
        facts: text(
          "بدن طائرة بتكلفة 20 مليون دولار وعمر 20 سنة؛ معدات هبوط 5 ملايين لكل 500 هبوط؛ محركات 8 ملايين لكل 1,600 ساعة طيران. السنة الأولى 150 رحلة و400 ساعة. يُجرى فحص رئيسي بقيمة 1.2 مليون في نهاية السنة الثالثة وكل ثلاث سنوات بعدها.",
          "Fuselage costs $20m over 20 years; undercarriage $5m over 500 landings; engines $8m over 1,600 flying hours. Year 1 has 150 flights and 400 hours. A $1.2m major overhaul is performed at the end of year 3 and every three years thereafter.",
        ),
        calculations: [
          text("إهلاك البدن 20 ÷ 20 = مليون دولار؛ الهبوط 5 × 150 ÷ 500 = 1.5 مليون بافتراض هبوط لكل رحلة؛ المحركات 8 × 400 ÷ 1,600 = 2 مليون؛ المجموع للسنة الأولى 4.5 مليون.", "Fuselage $20m ÷ 20 = $1m; undercarriage $5m × 150 ÷ 500 = $1.5m assuming one landing per flight; engines $8m × 400 ÷ 1,600 = $2m; year-1 total $4.5m."),
          text("بعد إنجاز فحص 1.2 مليون بنهاية السنة الثالثة، يكون إهلاكه على السنوات الثلاث التالية 1.2 ÷ 3 = 0.4 مليون سنويًا؛ يُلغى أي جزء غير مستهلك من الفحص السابق.", "After the $1.2m inspection is completed at end of year 3, depreciate it over the next three years: $1.2m ÷ 3 = $0.4m annually; derecognise any undepreciated previous-inspection component."),
          text("إذا بقي استعمال الأجزاء الأخرى مساويًا للسنة الأولى، يكون المجموع المقارن بعد الفحص 4.5 + 0.4 = 4.9 ملايين؛ لا يُعدّ هذا إهلاك السنة الأولى.", "If use of the other parts matches year 1, comparative depreciation after the overhaul is $4.5m + $0.4m = $4.9m; this is not year-1 depreciation."),
        ],
        conclusion: text("افصل الأجزاء الجوهرية ولا ترسمل الفحص قبل حدوثه؛ عدد الرحلات يساوي الهبوط فقط وفق افتراض المثال.", "Separate significant components and do not capitalise an overhaul before it occurs; flights equal landings only under this example's assumption."),
        journalEntries: [
          {
            label: text("إهلاك السنة الأولى", "First-year depreciation"),
            debit: text("مصروف الإهلاك: البدن 1 مليون + الهبوط 1.5 مليون + المحركات 2 مليون", "Depreciation expense: fuselage $1m + undercarriage $1.5m + engines $2m"),
            credit: text("مجمع إهلاك المكونات", "Accumulated component depreciation"),
            amount: text("4.5 ملايين دولار", "$4.5m"),
          },
          {
            label: text("رسملة الفحص عند إنجازه", "Capitalise inspection when completed"),
            debit: text("مكوّن الفحص الرئيسي", "Major-inspection component"),
            credit: text("نقدية أو دائنون", "Cash or payables"),
            amount: text("1.2 مليون دولار", "$1.2m"),
          },
        ],
        reference: "IAS 16.7, 14, 43–44, 50, 55, 60–62",
      },
    ],
  },
  "IFRS 11": {
    sections: [
      {
        title: text("صنّف الترتيب بحسب الحقوق والالتزامات", "Classify the arrangement by rights and obligations"),
        explanation: text(
          "ابدأ بإثبات أن قرارات الأنشطة ذات الصلة تتطلب موافقة الأطراف التي تتقاسم السيطرة بالإجماع. بعد ذلك اسأل: هل لكل طرف حقوق مباشرة في الأصول والتزامات عن الخصوم، أم حق في صافي أصول الترتيب فقط؟ الأولى عملية مشتركة والثانية مشروع مشترك. وجود شركة أو وعاء قانوني منفصل لا يحسم التصنيف وحده؛ راجع الشكل القانوني وشروط العقد والوقائع الأخرى عند اللزوم. وكذلك لا تجعل تشابه نسب الملكية أو توزيع الأرباح بديلًا عن تحليل الحقوق والالتزامات.",
          "First establish that decisions over relevant activities require unanimous consent of the parties sharing control. Then ask whether each party has direct rights to assets and obligations for liabilities, or rights only to the arrangement's net assets. The former is a joint operation and the latter a joint venture. A separate legal vehicle does not decide the classification by itself; examine its legal form, contractual terms and, when relevant, other facts and circumstances. Matching ownership or profit-sharing percentages are no substitute for analysing enforceable rights and obligations.",
        ),
        keyPoints: [
          text("وثّق بند القرارات التي تحتاج إجماع الأطراف قبل استخدام وصف «سيطرة مشتركة».", "Document which relevant-activity decisions require unanimous consent before concluding that joint control exists."),
          text("اختبر حق الأصل والتزام الخصم مباشرة، لا مجرد حق توزيع صافي الربح.", "Test direct asset rights and liability obligations, not just entitlement to a share of net profit."),
          text("المنشأة المنفصلة قد تستضيف عملية مشتركة أو مشروعًا مشتركًا.", "A separate vehicle may house either a joint operation or a joint venture."),
        ],
        reference: "IFRS 11.7–16, B15–B33",
      },
      {
        title: text("غيّر المعالجة بعد التصنيف، لا قبله", "Apply the accounting only after classification"),
        explanation: text(
          "في العملية المشتركة يعترف المشغّل بأصوله والتزاماته وإيراداته ومصروفاته، ويضيف حصته فيما يُحتفظ به أو يُتكبد بصورة مشتركة وفق الحقوق التعاقدية؛ ليست العملية نسبة موحدة تُضرب آليًا في كل بند. أما في المشروع المشترك فيثبت الطرف استثمارًا ويستخدم طريقة حقوق الملكية بموجب IAS 28 ما لم ينطبق استثناء. وعند إعداد القوائم المنفصلة لحصة في مشروع مشترك، تُراجع خيارات IAS 27 بدل افتراض أن معالجة القوائم الموحدة تنسخ بحذافيرها.",
          "For a joint operation, the operator recognises its own assets, liabilities, revenue and expenses together with its contractual share of jointly held or incurred items; do not mechanically multiply every line by one percentage. For a joint venture, the venturer recognises an investment and applies the IAS 28 equity method unless an exemption applies. For a joint-venture interest in separate financial statements, consider the IAS 27 options rather than copying the consolidated-statement treatment without analysis.",
        ),
        keyPoints: [
          text("مثال خط أنابيب تشغّله شركات معًا يستلزم تحليل الحقوق في الخط والمخرجات والتزامات التشغيل.", "A jointly operated pipeline requires analysis of rights to the pipeline and output and obligations for operating costs."),
          text("في عقار مشترك تُفحص حصة كل طرف في الأصل وإيراد الإيجار والمصروفات بموجب الاتفاق.", "For jointly held property, assess each party's rights to the property, rent and expenses under the agreement."),
          text("احسب الاستثمار بطريقة حقوق الملكية للمشروع المشترك، لا حصة سطرية من أصوله وديونه.", "Equity-account a joint venture investment rather than taking line-by-line shares of its assets and debts."),
        ],
        reference: "IFRS 11.20–26; IAS 28.16; IAS 27.10",
      },
      {
        title: text("شراء حصة في عملية مشتركة تشكل نشاط أعمال", "Acquiring an interest in a joint operation that is a business"),
        explanation: text(
          "إذا كانت أنشطة العملية المشتركة تُكوّن نشاط أعمال وفق IFRS 3 واشترت المنشأة حصة فيها، فلا يكفي وصف الشراء بأنه «حصة أصول». تُطبَّق، في حدود الحصة المكتسبة، مبادئ المحاسبة عن تجميع الأعمال التي لا تتعارض مع IFRS 11؛ فتُقاس الأصول والالتزامات القابلة للتحديد وفق المبادئ المنطبقة، ويُفحص وجود شهرة أو مكسب شراء بسعر منخفض وتُستوفى الإفصاحات ذات الصلة. لا تطبق هذه المعالجة لمجرد امتلاك أصل مشترك لا يشكل نشاط أعمال، ولا تفترض أن كل شراء حصة يمنح السيطرة على منشأة تابعة.",
          "If the joint operation's activities constitute a business as defined in IFRS 3 and an entity acquires an interest in it, the purchase is not merely an undifferentiated asset-share acquisition. To the extent of the interest acquired, apply business-combination principles that do not conflict with IFRS 11: measure identifiable assets and liabilities under the applicable principles, assess goodwill or a bargain-purchase gain, and provide the relevant disclosures. Do not apply this treatment merely to a jointly held asset that is not a business, or assume that every interest acquisition gives control of a subsidiary.",
        ),
        keyPoints: [
          text("اختبر أولًا تعريف «نشاط أعمال» في IFRS 3 قبل اختيار قواعد الاقتناء.", "Test the IFRS 3 definition of a business before choosing acquisition accounting."),
          text("طبّق المبادئ في حدود الحصة المقتناة وبشرط عدم تعارضها مع IFRS 11.", "Apply the principles to the acquired interest only insofar as they do not conflict with IFRS 11."),
        ],
        reference: "IFRS 11.21A, B33A–B33D; IFRS 3",
      },
    ],
    workedExamples: [],
  },
  "IAS 28": {
    sections: [
      {
        title: text("وحّد تاريخ المعلومات والسياسات قبل حساب حصة الزميلة", "Align reporting information and policies before calculating the associate share"),
        explanation: text(
          "ابدأ من قوائم الزميلة في تاريخ تقرير المستثمر نفسه متى أمكن. إذا تعذر إعداد قوائم بذلك التاريخ، تُستخدم أحدث قوائم متاحة مع تسوية آثار المعاملات والأحداث المهمة بين التاريخين، ولا يتجاوز الفارق ثلاثة أشهر. ثم عدّل البنود التي تستخدم سياسة محاسبية مختلفة عن سياسة المجموعة في معاملات وظروف متماثلة. لا تعالج فرق التاريخ أو السياسة بإضافة نسبة الملكية آليًا إلى أرقام لم تُهيأ للمقارنة.",
          "Start with associate statements drawn up to the investor's reporting date when practicable. If that is impracticable, use the most recent available statements, adjust for significant intervening transactions and events, and keep the date gap within three months. Then adjust unlike accounting policies for similar transactions and circumstances to the group's policies. Do not apply an ownership percentage mechanically to figures that have not first been made comparable."
        ),
        keyPoints: [
          text("سجّل تاريخ قوائم الزميلة وتاريخ قوائم المجموعة قبل إدخال أي ربح في طريقة حقوق الملكية.", "Record both reporting dates before equity-accounting any profit."),
          text("عالج الأحداث المهمة بين التاريخين؛ حد الثلاثة أشهر ليس إعفاءً من التسوية.", "Adjust significant intervening events; the three-month limit is not a waiver of adjustment."),
          text("سوِّ السياسات في المعاملات والظروف المتماثلة، ثم احسب حصة الربح بعد الضريبة.", "Align policies for like transactions and circumstances before calculating the after-tax profit share.")
        ],
        reference: "IAS 28.33–36",
      },
      {
        title: text("بيع المستثمر لزميلته: ليس حذفًا كاملًا كبيع بين شركتين تابعتين", "Investor-to-associate sales: not full subsidiary-style elimination"),
        explanation: text(
          "في البيع من المستثمر أو تابعاته إلى زميلة لا تشكل البضاعة المبيعة نشاطًا تجاريًا، تعترف المجموعة من مكسب البيع فقط بالجزء المنسوب إلى المستثمرين الآخرين في الزميلة ما دام الأصل لدى الزميلة. يُستبعد الجزء المنسوب إلى حصة المجموعة من الربح، لا قيمة البيع كلها، لأن الزميلة لا تُضاف أصولها ومصروفاتها بندًا ببند إلى القوائم الموحدة. اقسم الربح الداخلي الحقيقي على أساس سعر البيع أو التكلفة وفق صياغة المعطيات أولًا، ثم اضرب الجزء غير المحقق في نسبة ملكية المستثمر. يختلف تحديد موضع التسوية واتجاهها بين البيع من المستثمر إلى الزميلة والبيع العكسي؛ لا تنسخ قيد اتجاه إلى الاتجاه الآخر بلا تحليل.",
          "For a sale of ordinary goods that do not constitute a business from an investor or its subsidiaries to an associate, the group recognises the gain only to the extent of the other investors' interests while the asset remains with the associate. Eliminate the share attributable to the investor's interest, not the whole sale, because the associate's assets and expenses are not line-by-line consolidated. First calculate the actual embedded profit using the question's cost-versus-selling-price basis, then multiply the unrealised portion by the investor's percentage. Determine the location and direction of the worksheet adjustment separately for downstream and upstream sales; do not copy one directional entry into the other without analysis."
        ),
        keyPoints: [
          text("«25% زيادة على التكلفة» تعني ربحًا يساوي 25/125 من سعر البيع، لا 25% منه.", "A 25% mark-up on cost means profit is 25/125 of selling price, not 25% of it."),
          text("لا يُحذف كامل إيراد البيع لزميلة كما يحدث بين الأم وتابعة تُوحَّد بالكامل.", "Do not eliminate all revenue from a sale to an associate as if it were a sale between fully consolidated group companies."),
          text("إن ظهرت دلائل انخفاض قيمة أو كان الأصل المباع نشاطًا تجاريًا، اختبر القواعد الخاصة قبل تعميم المثال.", "If there is impairment evidence or the asset transferred is a business, test the specific requirements before generalising this illustration.")
        ],
        reference: "IAS 28.28–29; IFRS 10.B86(c)",
      },
    ],
    workedExamples: [
      {
        title: text("بيع Parent بضاعة إلى Associate بهامش 25% على التكلفة", "Parent sells inventory to Associate at 25% mark-up on cost"),
        facts: text(
          "تملك Parent، التي لديها شركات تابعة، نسبة 25% من أسهم Associate، ويُفترض أنها تقابل 25% من حقوق التصويت مع استمرار التأثير المهم. باعت Parent إلى Associate بضاعة بسعر إجمالي 1,000,000 دولار، وهو التكلفة مضافًا إليها 25%. ظلت البضاعة كلها لدى Associate في نهاية السنة، ولا تُذكر خسارة قيمة أو معاملة مع طرف خارجي لاحقة. المثال عن بضاعة عادية لا تمثل نشاطًا تجاريًا.",
          "Parent, which has subsidiaries, holds 25% of Associate's shares, assumed to correspond to 25% of voting rights with continuing significant influence. Parent sold goods to Associate for total proceeds of US$1,000,000 at cost plus a 25% mark-up. All the goods remained with Associate at year-end; no impairment or subsequent outside sale is supplied. The goods are ordinary inventory, not a business."
        ),
        calculations: [
          text("التكلفة الأصلية = 1,000,000 ÷ 1.25 = 800,000 دولار؛ وربح Parent من البيع = 200,000 دولار. يمكن التحقق بـ1,000,000 × 25/125 = 200,000.", "Original cost = US$1,000,000 ÷ 1.25 = US$800,000; Parent's sale profit = US$200,000. Check: 1,000,000 × 25/125 = 200,000."),
          text("حصة المجموعة من الربح غير المحقق = 25% × 200,000 = 50,000 دولار؛ الجزء المنسوب إلى المستثمرين الآخرين الذي يجوز إبقاؤه = 75% × 200,000 = 150,000 دولار.", "The group's unrealised-interest share = 25% × US$200,000 = US$50,000; the portion attributable to other investors that remains recognised = 75% × US$200,000 = US$150,000."),
          text("تسوية حقوق الملكية تخفض الربح الموحد والاستثمار في الزميلة بـ50,000 دولار. لا تخفض مخزون المجموعة بمبلغ 200,000؛ مخزون الزميلة ليس مخزونًا موحدًا بندًا ببند.", "The equity-method adjustment reduces consolidated profit and the investment in Associate by US$50,000. Do not reduce group inventory by US$200,000: Associate's inventory is not line-by-line consolidated group inventory."),
        ],
        conclusion: text(
          "القيد التعليمي في ورقة التجميع: مدين تعديل أرباح بيع غير محققة لزميلة 50,000؛ دائن استثمار في الزميلة 50,000. لا يعني ذلك حذف إيراد البيع البالغ 1,000,000 بكامله. لا نُعيد إثبات الجزء المؤجل إلا عندما يصبح الربح محققًا للمجموعة وفق وقائع بيع لاحقة معلومة.",
          "Illustrative group worksheet entry: debit unrealised-gain adjustment on sale to Associate 50,000; credit investment in Associate 50,000. This is not an elimination of the entire US$1,000,000 sale revenue. Reverse the deferred portion only when later facts show the gain has become realised from the group's perspective."
        ),
        journalEntries: [
          {
            label: text("استبعاد حصة المستثمر في ربح البيع الذي لا يزال غير محقق", "Eliminate the investor's share of the unrealised downstream gain"),
            debit: text("تعديل ربح بيع بضاعة إلى زميلة — الربح أو الخسارة الموحدة", "Downstream unrealised-gain adjustment — consolidated profit or loss"),
            credit: text("استثمار في زميلة", "Investment in associate"),
            amount: text("50,000 دولار", "US$50,000"),
          },
        ],
        reference: "IAS 28.28–29",
      },
      {
        title: text("Alpha وGamma: قيمة الاستثمار بعد بيع مخزون غير محقق", "Alpha and Gamma: associate carrying amount after unrealised inventory profit"),
        facts: text(
          "اشترت Alpha في 1 أبريل 20X5 عدد 20 مليون سهم من Gamma مقابل 1.60 دولار للسهم. لدى Gamma رأس مال من 50 مليون سهم بقيمة اسمية دولار واحد، وتتمتع Alpha بتأثير مهم لا بسيطرة. ارتفعت الأرباح المحتجزة لـGamma من 15 مليونًا عند الاقتناء إلى 28 مليون دولار في 31 مارس 20X7. تضمنت مخازن Gamma في تاريخ التقرير مكونات اشترتها من Alpha بسعر 16 مليون دولار؛ وكان تسعير Alpha هو التكلفة مضافًا إليها 25%. لم يُذكر انخفاض قيمة الاستثمار.",
          "On 1 April 20X5 Alpha bought 20 million Gamma shares for US$1.60 each. Gamma has 50 million US$1 ordinary shares and Alpha has significant influence rather than control. Gamma's retained earnings rose from US$15 million at acquisition to US$28 million at 31 March 20X7. Gamma's closing inventories include components bought from Alpha for US$16 million, priced at Alpha's cost plus 25%. No investment impairment is specified.",
        ),
        calculations: [
          text("حصة Alpha في Gamma = 20 ÷ 50 = 40%؛ تكلفة الاستثمار = 20 مليون × 1.60 = 32 مليون دولار.", "Alpha's interest in Gamma = 20 ÷ 50 = 40%; investment cost = 20 million × US$1.60 = US$32 million."),
          text("حركة الأرباح المحتجزة بعد الاقتناء = 28 − 15 = 13 مليونًا؛ حصة Alpha المستخدمة في هذا المثال = 13 × 40% = 5.2 ملايين دولار، بشرط عدم وجود توزيعات أو حركات أخرى غير مذكورة تتطلب تسوية مستقلة.", "Post-acquisition retained-earnings movement = 28 − 15 = US$13 million; Alpha's share used here = 13 × 40% = US$5.2 million, subject to any unreported distributions or other movements requiring separate adjustment."),
          text("ربح Alpha المضمّن في المخزون = 16 × 25/125 = 3.2 ملايين؛ الجزء غير المحقق المنسوب لحصة Alpha = 3.2 × 40% = 1.28 مليون دولار.", "Alpha's profit embedded in inventory = 16 × 25/125 = US$3.2 million; the unrealised portion attributable to Alpha's 40% interest = US$1.28 million."),
          text("القيمة الدفترية للاستثمار بطريقة حقوق الملكية = 32 + 5.2 − 1.28 = 35.92 مليون دولار، قبل أي تسوية مستقلة للضريبة المؤجلة أو وقائع إضافية.", "Equity-method investment carrying amount = 32 + 5.2 − 1.28 = US$35.92 million, before any separate deferred-tax adjustment or additional facts."),
        ],
        conclusion: text(
          "لا تُضاف أصول Gamma والتزاماتها بندًا ببند إلى المجموعة لأنها زميلة وليست تابعة. لا يُحذف كامل ربح البيع 3.2 ملايين ولا كامل رصيد مخزونها 16 مليونًا؛ تُستبعد فقط حصة Alpha غير المحققة 1.28 مليون من الربح والاستثمار. تختلف هذه التسوية عن إلغاء معاملات Alpha مع تابعتها Beta إلغاءً كاملًا.",
          "Gamma's assets and liabilities are not consolidated line by line because it is an associate, not a subsidiary. Neither the full US$3.2 million sale profit nor all US$16 million of Gamma inventory is eliminated; only Alpha's US$1.28 million unrealised-interest share is removed from group profit and the investment. This differs from full elimination of Alpha's intragroup transactions with its subsidiary Beta.",
        ),
        journalEntries: [
          {
            label: text("تسوية ورقة التجميع للربح غير المحقق لدى الزميلة", "Group worksheet adjustment for unrealised associate profit"),
            debit: text("تعديل ربح بيع مخزون إلى زميلة 1.28 مليون", "Adjustment to gain on sale to associate US$1.28 million"),
            credit: text("استثمار في زميلة Gamma 1.28 مليون", "Investment in Gamma US$1.28 million"),
            amount: text("1.28 مليون دولار لكل جانب", "US$1.28 million on each side"),
          },
        ],
        reference: "IAS 28.3, 10, 28–29",
      },
    ],
  },
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
  "IAS 8": {
    sections: [
      {
        title: text("خطأ المخزون الذي ينعكس في السنة التالية", "An inventory error that reverses in the next year"),
        explanation: text(
          "إذا تضمن مخزون نهاية سنة بضاعة بيعت قبل تاريخ التقرير، يكون المخزون والربح في تلك السنة زائدين، وتنتقل الزيادة خطأً إلى تكلفة مبيعات السنة التالية من رصيد أول المدة. لا يُترك الخطآن ليتقاصا في العرض؛ يعاد بيان المقارنة وفق IAS 8، وتُصحح أرقام السنة الحالية من دون إدراج أثر الفترة السابقة في ربحها. يُفحص أثر الضريبة بشكل مستقل وفق IAS 12: معدل الضريبة وحده لا يثبت أن تعديل إقرار السنة السابقة قابل للاسترداد أو أن أثر الضريبة مؤجل أو جارٍ.",
          "If closing inventory includes goods already sold before the reporting date, inventory and that year's profit are overstated; the same error flows through next year's opening inventory and cost of sales. Do not let the two errors offset in presentation: restate the comparative under IAS 8 and correct the current year without putting the prior-period effect into current profit. Assess tax separately under IAS 12: the stated tax rate alone does not prove that prior-year tax is recoverable or establish whether the effect is current or deferred tax.",
        ),
        keyPoints: [
          text("أعد حساب تكلفة المبيعات في السنتين بإشارتين متعاكستين؛ لا تغير المبيعات إذا كانت البضاعة بيعت وأثبت إيرادها بالفعل.", "Recalculate cost of sales in the two years with opposite signs; do not change revenue when the goods were already sold and revenue recorded."),
          text("اعرض الأرباح المحتجزة الافتتاحية بعد إعادة البيان، ولا تضف خسارة السنة السابقة إلى مصروف السنة الحالية.", "Present opening retained earnings after restatement; do not charge the earlier year's loss to the current year's expense."),
          text("افصل أثر IAS 8 عن تحليل الضريبة الجارية أو المؤجلة ومتطلبات القانون الضريبي في IAS 12.", "Separate IAS 8 restatement from current/deferred-tax and tax-law analysis under IAS 12."),
        ],
        reference: "IAS 8.4, 41–49; IAS 12.12–14, 58–61A",
      },
    ],
    workedExamples: [
      {
        title: text("Global: إعادة بيان مخزون بيع قبل الإقفال", "Global: restating inventory sold before year-end"),
        facts: text(
          "اكتشفت Global في 20X7 أن مخزون 31 ديسمبر 20X6 تضمن بضاعة بقيمة 4,200 ألف دولار بيعت قبل ذلك التاريخ. في 20X6 كانت المبيعات 47,400 وتكلفة المبيعات 34,570 وضريبة الدخل 3,880؛ وفي مسودة 20X7 المبيعات 67,200 وتكلفة المبيعات 55,800 وضريبة الدخل 3,400، وكل الأرقام بالألف. تضمنت تكلفة 20X7 خطأ مخزون أول المدة. رصيد الأرباح المحتجزة في 1 يناير 20X6 هو 13,000، ولا توزيعات. معدل الضريبة المذكور 30%، لكن لا يوضح السؤال وضع التصحيح لدى مصلحة الضرائب.",
          "Global discovers in 20X7 that 31 December 20X6 inventory included goods worth US$4,200 thousand sold before that date. In 20X6 revenue was 47,400, cost of sales 34,570 and income tax expense 3,880; the 20X7 draft shows revenue 67,200, cost of sales 55,800 and tax expense 3,400, all in thousands. The 20X7 cost of sales includes the opening-inventory error. Opening retained earnings on 1 January 20X6 are 13,000, with no dividends. The stated tax rate is 30%, but the question does not specify how tax authorities treat the correction.",
        ),
        calculations: [
          text("20X6 بعد إعادة البيان: تكلفة المبيعات = 34,570 + 4,200 = 38,770؛ الربح قبل الضريبة = 47,400 − 38,770 = 8,630.", "Restated 20X6: cost of sales = 34,570 + 4,200 = 38,770; profit before tax = 47,400 − 38,770 = 8,630."),
          text("20X7 المصححة: تكلفة المبيعات = 55,800 − 4,200 = 51,600؛ الربح قبل الضريبة = 67,200 − 51,600 = 15,600.", "Corrected 20X7: cost of sales = 55,800 − 4,200 = 51,600; profit before tax = 67,200 − 51,600 = 15,600."),
          text("إذا كان أثر التصحيح الضريبي كاملًا وقابلًا للتسوية في السنتين كما يفترض الحل التعليمي، فكل تعديل ضريبي = 4,200 × 30% = 1,260: ضريبة 20X6 = 3,880 − 1,260 = 2,620 وصافي ربحها = 6,010؛ ضريبة 20X7 = 3,400 + 1,260 = 4,660 وصافي ربحها = 10,940.", "If the full tax effect is recoverable/payable across the two years as the teaching solution assumes, each tax adjustment is 4,200 × 30% = 1,260: 20X6 tax = 3,880 − 1,260 = 2,620 and net profit = 6,010; 20X7 tax = 3,400 + 1,260 = 4,660 and net profit = 10,940."),
          text("تحت هذا الافتراض فقط: الأرباح المحتجزة في 31 ديسمبر 20X6 = 13,000 + 6,010 = 19,010؛ وفي 31 ديسمبر 20X7 = 19,010 + 10,940 = 29,950. قبل حسم المعالجة الضريبية يبقى الربح قبل الضريبة المصحح وحده محسومًا من المعطيات.", "Only under that tax assumption: retained earnings at 31 December 20X6 = 13,000 + 6,010 = 19,010; at 31 December 20X7 = 19,010 + 10,940 = 29,950. Without resolving tax treatment, only the corrected pre-tax profits follow conclusively from the facts."),
        ],
        conclusion: text(
          "الخطأ ينتمي إلى مقارنة 20X6، لا إلى ربح 20X7. يفسر انعكاسه زيادة ربح 20X7 قبل الضريبة بالمبلغ نفسه. الأرقام بعد الضريبة مشروطة بفحص IAS 12 وحقوق الاسترداد أو المبالغ المستحقة لدى السلطة الضريبية.",
          "The error belongs in the 20X6 comparative, not 20X7 profit. Its reversal explains the equal increase in 20X7 pre-tax profit. After-tax amounts require IAS 12 analysis of recoverable or payable tax balances.",
        ),
        journalEntries: [
          { label: text("تعديل مسودة 20X7 بعد انتقال خطأ أول المدة إلى تكلفة المبيعات — قبل الضريبة", "Adjust the 20X7 draft after the opening error reached cost of sales — before tax"), debit: text("أرباح محتجزة افتتاحية", "Opening retained earnings"), credit: text("تكلفة المبيعات 20X7", "20X7 cost of sales"), amount: text("4,200 ألف دولار", "US$4,200 thousand") },
          { label: text("مشروط: ضريبة 20X6 القابلة للاسترداد أو تسوية التزامها", "Conditional: recoverable 20X6 tax or payable adjustment"), debit: text("ضريبة جارية مستردة أو خفض التزامها", "Current-tax receivable or reduction of payable"), credit: text("أرباح محتجزة افتتاحية", "Opening retained earnings"), amount: text("1,260 ألف دولار", "US$1,260 thousand") },
          { label: text("مشروط: أثر التصحيح في ضريبة 20X7", "Conditional: correction of 20X7 tax"), debit: text("مصروف ضريبة الدخل 20X7", "20X7 income-tax expense"), credit: text("ضريبة جارية مستحقة", "Current tax payable"), amount: text("1,260 ألف دولار", "US$1,260 thousand") },
        ],
        reference: "IAS 8.4, 42–49; IAS 12.12–14, 58–61A",
      },
    ],
  },
  "IAS 2": {
    sections: [
      {
        title: text("متى تصبح العملة المشفرة مخزونًا؟", "When is a cryptocurrency holding inventory?"),
        explanation: text(
          "بالنسبة للفئة غير التعاقدية من العملات المشفرة التي عالجها قرار لجنة تفسيرات IFRS، إذا كانت المنشأة تحتفظ بالرموز للبيع في السياق المعتاد لأعمالها فهي مخزون ضمن IAS 2. ويُقاس المخزون عادةً بالأقل من التكلفة وصافي القيمة القابلة للتحقق. أما تاجر السلع الوسيط الذي يستوفي شروط IAS 2.3(b) ويقيس مخزونه بالقيمة العادلة ناقص تكاليف البيع، فيعترف بتغير ذلك القياس في الربح أو الخسارة. لا يكفي وصف المنشأة بأنها «متداولة» وحده لإثبات استثناء الوسيط؛ افحص طبيعة نشاطها وغرض الشراء وسرعة إعادة البيع.",
          "For the non-contractual cryptocurrency subset considered by the IFRS Interpretations Committee, tokens held for sale in an entity's ordinary course of business are IAS 2 inventory. Inventory is normally measured at the lower of cost and net realisable value. A qualifying commodity broker-trader applying IAS 2.3(b) measures its inventory at fair value less costs to sell and recognises changes in profit or loss. A trading label alone does not establish that exception; inspect the entity's activity, acquisition purpose and expected resale."
        ),
        keyPoints: [
          text("حيازة للاستثمار أو الاستخدام خارج البيع المعتاد تُراجع تحت IAS 38، لا تُسمّى مخزونًا لمجرد إمكان بيعها.", "An investment or use holding outside ordinary-course sales is assessed under IAS 38, not called inventory merely because it can be sold."),
          text("ميّز صافي القيمة القابلة للتحقق لمخزون النشاط المعتاد عن القيمة العادلة ناقص تكاليف البيع لاستثناء تاجر السلع الوسيط.", "Distinguish ordinary inventory's net realisable value from the broker-trader exception's fair value less costs to sell."),
          text("لا تعمم النتيجة على العملات المستقرة أو الرموز ذات حقوق تعاقدية دون تحليل الحقوق الفعلية.", "Do not extend the conclusion to stablecoins or tokens with contractual rights without analysing those rights.")
        ],
        reference: "IAS 2.3(b), 5–6, 9; IAS 38.8, 12; IFRS Interpretations Committee, Holdings of Cryptocurrencies (June 2019)",
      },

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
      {
        title: text("Polymer: مخزون التصنيع وتكلفة المبيعات", "Polymer: manufacturing inventories and cost of sales"),
        facts: text(
          "في مسألة Polymer، مخزون أول الفترة مواد خام 108,400 وتحت التشغيل 32,750 ومنتجات تامة 184,500. خلال السنة كانت مشتريات المواد 750,600، ونقلها إلى المصنع 10,500، وأجور التصنيع 250,000، وأعباء التصنيع 125,000، وإهلاك معدات الإنتاج 8% من تكلفة 150,000. مخزون آخر الفترة: مواد خام 112,600، وتحت التشغيل 37,800، ومنتجات تامة 275,350. لا يقدم السؤال بيانات عن صافي القيمة القابلة للتحقق أو الطاقة الإنتاجية المعتادة.",
          "In Polymer, opening inventories are raw materials 108,400, work in progress 32,750 and finished goods 184,500. During the year raw-material purchases are 750,600, inward carriage 10,500, manufacturing wages 250,000, manufacturing overhead 125,000 and production-equipment depreciation is 8% of 150,000 cost. Closing inventories are raw materials 112,600, work in progress 37,800 and finished goods 275,350. The facts do not specify net realisable values or normal production capacity.",
        ),
        calculations: [
          text("مخزون أول الفترة = 108,400 + 32,750 + 184,500 = 325,650.", "Opening inventory = 108,400 + 32,750 + 184,500 = 325,650."),
          text("إهلاك معدات الإنتاج = 150,000 × 8% = 12,000؛ ويُدرج ضمن تكلفة التحويل إذا كان توزيع أعباء المصنع مؤهلًا وفق IAS 2.", "Production-equipment depreciation = 150,000 × 8% = 12,000; it enters conversion cost if the factory-overhead allocation qualifies under IAS 2."),
          text("تكلفة الموارد المتاحة = 325,650 + 750,600 + 10,500 + 250,000 + 125,000 + 12,000 = 1,473,750.", "Cost available = 325,650 + 750,600 + 10,500 + 250,000 + 125,000 + 12,000 = 1,473,750."),
          text("مخزون آخر الفترة = 112,600 + 37,800 + 275,350 = 425,750؛ تكلفة المبيعات المحسوبة = 1,473,750 − 425,750 = 1,048,000.", "Closing inventory = 112,600 + 37,800 + 275,350 = 425,750; computed cost of sales = 1,473,750 − 425,750 = 1,048,000."),
        ],
        conclusion: text(
          "مبلغ 1,048,000 صحيح حسابيًا إذا كانت الأعباء 125,000 والإهلاك 12,000 قابلين للتحميل على الإنتاج وفق الطاقة المعتادة، ولم يظهر تخفيض إلى صافي القيمة القابلة للتحقق أو هدر غير عادي. لا تُدرج مصروفات الإدارة والتوزيع ضمن هذه المعادلة لمجرد ورودها في ميزان المراجعة.",
          "The 1,048,000 arithmetic holds if the 125,000 overhead and 12,000 depreciation are eligible for allocation at normal capacity, with no net-realisable-value write-down or abnormal waste. Administrative and distribution expenses do not enter this inventory-cost bridge merely because they appear in the trial balance.",
        ),
        journalEntries: [],
        reference: "IAS 2.9–16, 28–34",
      },
    ],
  },
  "IAS 12": {
    sections: [
      {
        title: text("ضريبة القيمة المضافة في مثال الفصل ليست ضريبة دخل وفق IAS 12", "The chapter's VAT example is outside IAS 12 income tax"),
        explanation: text(
          "IAS 12 يخص الضرائب القائمة على الربح الخاضع للضريبة، بينما ضريبة القيمة المضافة على توريد السلع والخدمات تحكمها قواعد الولاية الضريبية. في سلسلة الكتاب وبفرض أن جميع الموردين مسجلون ومؤهلون لاسترداد ضريبة المدخلات وأن التوريدات خاضعة لمعدل 20%: الغابوي يبيع بـ100 جنيه فيورد 20؛ صانع الأثاث يبيع بـ150 فيحتسب مخرجات 30 ويخصم مدخلات 20 فيورد 10؛ المتجر يبيع بـ300 فيحتسب مخرجات 60 ويخصم مدخلات 30 فيورد 30. مجموع ما يورد 60، وهو 20% من سعر البيع النهائي قبل الضريبة. التوريد الصفري يخضع لمعدل صفر وقد تبقى ضريبة المدخلات قابلة للاسترداد؛ أما التوريد المعفى فلا ينتج ضريبة مخرجات وتقيّد عادةً قابلية استرداد مدخلاته. هذه نتيجة المثال وتعليمات HMRC العامة، وليست قاعدة اعتراف بضريبة مؤجلة في IAS 12 أو حكمًا لكل ولاية.",
          "IAS 12 covers taxes based on taxable profit; VAT on supplies of goods or services follows the relevant jurisdiction's tax law. In the book's chain, assuming all traders are VAT registered, eligible to recover input tax and make 20%-rated taxable supplies: the forester sells for £100 and remits £20; the furniture maker sells for £150, charges £30 output VAT, deducts £20 input VAT and remits £10; the shop sells for £300, charges £60, deducts £30 and remits £30. Total remitted is £60, or 20% of the final pre-tax price. Zero-rated supplies bear a 0% output rate and can retain input-tax recovery; exempt supplies have no output VAT and normally restrict related input-tax recovery. This is the source illustration and general HMRC guidance, not an IAS 12 deferred-tax recognition rule or a universal tax-law conclusion."
        ),
        keyPoints: [
          text("20 + 10 + 30 = 60 جنيهًا إجمالي الضريبة المحصلة عبر السلسلة.", "£20 + £10 + £30 = £60 total VAT remitted along the chain."),
          text("الصفرية والإعفاء يختلفان في استرداد ضريبة المدخلات.", "Zero rating and exemption differ in input-tax recovery."),
          text("افصل ضريبة المبيعات عن ضريبة الدخل المؤجلة وفق IAS 12.", "Keep sales tax separate from IAS 12 deferred income tax."),
        ],
        reference: "IAS 12.2; HMRC VAT Notice 700, sections 3 and 10",
      },
      {
        title: text("استثناء الاعتراف الأولي بعد تعديل IAS 12", "The IAS 12 initial-recognition exception after amendment"),
        explanation: text(
          "لا يعفي الاعتراف الأولي بأصل أو التزام من الضريبة المؤجلة تلقائيًا. استثناء IAS 12.15 و24 ضيق: مع مراعاة شروط كل فقرة، يتعلق بمعاملة ليست تجميع أعمال، لا تؤثر عند حدوثها في الربح المحاسبي أو الخاضع للضريبة، ولا تنشئ عند حدوثها فروقًا مؤقتة خاضعة وقابلة للخصم بمقادير متساوية. لذلك لا يطبق الاستثناء لمجرد أن قيد إيجار أو التزام إزالة أصل لم يؤثر فورًا في الربح؛ إذا نشأت فروق متساوية للأصل والالتزام، تُختبر ضريبة كل جانب ويظل إثبات أصل الضريبة المؤجلة مشروطًا باحتمال استخدامه. استثناء الشهرة عند الاعتراف الأولي حكم منفصل. عرض الكتاب الذي يقتصر على شرطي عدم تجميع الأعمال وعدم التأثير في الربح يحذف شرط الفروق المتساوية الذي أضيف بتعديل ساري للفترات السنوية التي تبدأ في 1 يناير 2023 أو بعده.",
          "Initial recognition of an asset or liability does not automatically exempt deferred tax. The IAS 12.15 and .24 exception is narrow: subject to each paragraph's conditions, it concerns a transaction outside a business combination that affects neither accounting nor taxable profit at inception and does not then give rise to equal taxable and deductible temporary differences. Thus, a lease or decommissioning entry is not exempt merely because it has no immediate profit effect. If equal differences arise on the asset and liability, assess tax on each side; recognition of a deferred tax asset still depends on probable utilisation. Initial recognition of goodwill has a separate exception. The book's two-condition summary omits the equal-differences condition added by the amendment effective for annual periods beginning on or after 1 January 2023."
        ),
        keyPoints: [
          text("افحص الفروق المتساوية للأصل والالتزام قبل استخدام إعفاء الاعتراف الأولي.", "Check equal asset/liability differences before invoking the initial-recognition exemption."),
          text("عدم تأثير القيد في الربح وحده لا يمنع إثبات الضريبة المؤجلة.", "No immediate profit effect alone does not preclude deferred tax."),
          text("اختبر احتمال استخدام فرق الخصم قبل إثبات الأصل المؤجل.", "Test probable utilisation before recognising a deferred tax asset."),
        ],
        reference: "IAS 12.15, 22A, 24, 28–29; Deferred Tax related to Assets and Liabilities arising from a Single Transaction (2021 amendment)",
      },
      {
        title: text("مقاصة أصول والتزامات الضريبة المؤجلة: اختبر الجهة والكيان", "Offsetting deferred tax: test authority and taxable entity"),
        explanation: text(
          "تتطلب مقاصة أصل ضريبة مؤجلة والتزام ضريبة مؤجلة حقًا قانونيًا نافذًا لمقاصة أصول ومطلوبات الضريبة الجارية، وأن تتعلق الضريبتان بالسلطة نفسها. ثم يجب أن تخصا الكيان الخاضع نفسه، أو كيانين مختلفين ينويان تسوية الضرائب الجارية صافيًا أو تحقيق الأصل وتسوية الالتزام بالتزامن في كل فترة مستقبلية يُتوقع فيها عكس مبالغ مؤجلة مهمة. مجرد وحدة المجموعة أو السلطة الضريبية لا يكفي. ملخص الكتاب في صفحة 258 يذكر الحق القانوني والسلطة فقط، ويغفل اختبار الكيان أو نمط التسوية المستقبلية؛ لذلك لا تُعرض أرصدة مؤجلة لجهتين من المجموعة صافيًا دون وقائع إضافية.",
          "To offset a deferred tax asset and liability, the entity needs a legally enforceable right to offset current-tax balances and both deferred amounts must relate to taxes levied by the same authority. They must then concern the same taxable entity, or different taxable entities intending net current-tax settlement or simultaneous realisation and settlement in each future period when significant deferred amounts reverse. Common group ownership or the same authority alone is insufficient. The book's page-258 summary gives only the legal right and authority, omitting the taxable-entity or future-settlement test; group deferred balances cannot be netted without those facts."
        ),
        keyPoints: [
          text("تحقق من الحق القانوني لمقاصة الضريبة الجارية والسلطة الضريبية نفسها.", "Check the enforceable current-tax set-off right and same tax authority."),
          text("إن اختلف الكيان الخاضع، اختبر نية التسوية المستقبلية في فترات الانعكاس المهمة.", "For different taxable entities, test future settlement intentions across significant reversal periods."),
        ],
        reference: "IAS 12.74–76",
      },
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
      {
        title: text("ضريبة خيارات الموظفين: قارن الخصم المتوقع بمصروف الخدمة التراكمي", "Employee-option tax: compare expected deduction with cumulative service cost"),
        explanation: text(
          "قد يثبت مصروف خيارات الموظفين محاسبيًا على فترة الخدمة وفق IFRS 2 بينما لا يسمح القانون بخصمه ضريبيًا إلا عند ممارسة الخيار وبمبلغ يعتمد على قيمته الجوهرية آنذاك. تحدد IAS 12 أساس خدمات الموظفين المستلمة حتى تاريخ التقرير بالمبلغ الذي يتوقع السماح بخصمه مستقبلًا، اعتمادًا على المعلومات والقيمة السوقية المتاحة في ذلك التاريخ ونسبة الخدمة المكتسبة؛ وبما أن الخدمات صُرفت وليس لها أصل دفتري، قد ينشأ فرق مؤقت قابل للخصم. يخضع إثبات أصل الضريبة المؤجلة لاحتمال وجود أرباح خاضعة كافية لاستخدام الخصم. وزّع المنفعة الضريبية التراكمية بين الربح أو الخسارة، بقدر ما يتعلق بمصروف الخدمة التراكمي، وحقوق الملكية مباشرةً لأي خصم ضريبي متوقع يزيد عليه. عند ممارسة الخيارات حلّل الضريبة الجارية الفعلية واعكس الأصل المؤجل دون عدّ المنفعة مرتين؛ لا تخلط أثر حقوق الملكية مع الدخل الشامل الآخر.",
          "An employee-option expense may be recognised over service under IFRS 2 while tax law permits a deduction only when options are exercised, measured by intrinsic value then. IAS 12 measures the tax base of employee services received to date by the future deduction expected under information and share price available at the reporting date, reflecting service already rendered; the services have no carrying amount after being expensed, so a deductible temporary difference may arise. Recognise a deferred tax asset only to the extent probable taxable profits will permit use of the deduction. Allocate cumulative tax benefit to profit or loss up to the amount attributable to cumulative service expense, with any excess deduction benefit directly in equity. On exercise, recognise the actual current-tax effect and reverse the deferred asset without double counting the benefit; direct equity is not OCI.",
        ),
        keyPoints: [
          text("استخدم خصم الخدمات المكتسبة حتى تاريخ التقرير، لا كامل خصم خيار لم يستحق بعد.", "Use the deduction attributable to service received to date, not the full deduction for an unvested option."),
          text("اختبر قابلية استرداد الأصل المؤجل، ثم افصل أثر الربح أو الخسارة عن الزيادة المعترف بها مباشرة في حقوق الملكية.", "Test deferred-asset recoverability, then separate profit-or-loss tax from any excess recognised directly in equity."),
        ],
        reference: "IAS 12.24, 28–29, 68A–68C; IFRS 2.19–23",
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
      {
        title: text("Bruce: ضريبة خصم خيارات الأسهم عند الممارسة", "Bruce: tax deduction for employee options on exercise"),
        facts: text(
          "في 1 يناير 20X2 منح Bruce أحد موظفيه 5,000 خيار يستحق بعد خدمته حتى 31 ديسمبر 20X3. القيمة العادلة للخيار عند المنح 3 دولارات. يسمح قانون الضريبة بخصم القيمة الجوهرية فقط عند الممارسة؛ بلغت 1.20 دولار للخيار في نهاية 20X2 و3.40 دولارات في نهاية 20X3 حين مورست الخيارات. معدل الضريبة 30%. يفترض إثبات الأصل المؤجل احتمال توفر أرباح ضريبية كافية للاستفادة من الخصم.",
          "On 1 January 20X2 Bruce grants an employee 5,000 options vesting on 31 December 20X3 after service. Grant-date fair value is $3 per option. Tax law allows a deduction of intrinsic value only on exercise; estimated intrinsic value is $1.20 per option at end-20X2 and $3.40 at end-20X3, when all options are exercised. Tax rate is 30%. Recognition of the deferred tax asset assumes probable taxable profits sufficient to use the deduction.",
        ),
        calculations: [
          text("نهاية 20X2: مصروف خدمة تراكمي = 5,000 × 3 × 1/2 = 7,500. الخصم المتوقع المنسوب للخدمة حتى تاريخه = 5,000 × 1.20 × 1/2 = 3,000؛ أصل الضريبة المؤجلة = 3,000 × 30% = 900 دولار، كله في الربح أو الخسارة.", "End-20X2: cumulative service cost = 5,000 × $3 × 1/2 = $7,500. Estimated future deduction attributable to service to date = 5,000 × $1.20 × 1/2 = $3,000; deferred tax asset = $3,000 × 30% = $900, all in profit or loss."),
          text("نهاية 20X3 قبل الممارسة: مصروف الخدمة التراكمي = 5,000 × 3 = 15,000؛ الخصم المتوقع = 5,000 × 3.40 = 17,000؛ أصل الضريبة المؤجلة = 5,100. المنفعة التراكمية المرتبطة بالمصروف = 15,000 × 30% = 4,500، والزيادة إلى حقوق الملكية مباشرة = (17,000 − 15,000) × 30% = 600.", "End-20X3 before exercise: cumulative service cost = 5,000 × $3 = $15,000; expected deduction = 5,000 × $3.40 = $17,000; deferred tax asset = $5,100. Cumulative benefit attributable to expense is $15,000 × 30% = $4,500; excess recognised directly in equity is ($17,000 − $15,000) × 30% = $600."),
          text("حركة 20X3 قبل الممارسة = أصل مؤجل زائد 4,200: دخل ضريبة مؤجلة في الربح أو الخسارة 4,500 − 900 = 3,600، وحقوق ملكية 600. عند الممارسة يصبح الخصم الفعلي 17,000 والمنفعة الجارية 5,100؛ يعكس الأصل المؤجل 5,100 ويثبت الأثر الجاري بالمبلغ نفسه وفق توزيعه، دون منفعة إضافية صافية.", "The 20X3 pre-exercise asset increase is $4,200: deferred tax income in profit or loss of $4,500 − $900 = $3,600 and $600 in equity. On exercise the actual $17,000 deduction yields $5,100 current-tax benefit; reverse the $5,100 deferred asset and recognise current tax with the same allocation, without a second net benefit."),
        ],
        conclusion: text("لا تقاس الضريبة المؤجلة بالقيمة العادلة للخيار البالغة 3 دولارات، بل بالخصم الضريبي المتوقع للخدمة المستلمة. في نهاية 20X3 يوزع أصل 5,100 إلى منفعة تراكمية 4,500 في الربح أو الخسارة و600 مباشرةً في حقوق الملكية، بشرط قابلية الاستفادة الضريبية.", "Deferred tax is not measured from the $3 option fair value, but from the expected tax deduction for service received. At end-20X3, the $5,100 asset is allocated to $4,500 cumulative profit-or-loss benefit and $600 directly in equity, subject to recoverability."),
        journalEntries: [
          { label: text("31 ديسمبر 20X2: المنفعة المؤجلة", "31 December 20X2: deferred benefit"), debit: text("أصل ضريبة مؤجلة", "Deferred tax asset"), credit: text("دخل ضريبة مؤجلة — ربح أو خسارة", "Deferred tax income — profit or loss"), amount: text("900 دولار", "$900") },
          { label: text("31 ديسمبر 20X3: زيادة الأصل المؤجل قبل الممارسة", "31 December 20X3: pre-exercise deferred asset increase"), debit: text("أصل ضريبة مؤجلة 4,200", "Deferred tax asset 4,200"), credit: text("دخل ضريبة مؤجلة 3,600 + حقوق ملكية 600", "Deferred tax income 3,600 + equity 600"), amount: text("4,200 دولار لكل جانب", "$4,200 each side") },
          { label: text("عند الممارسة: تحويل المنفعة من مؤجلة إلى جارية", "On exercise: transfer benefit from deferred to current"), debit: text("أصل ضريبة جارية أو تخفيض التزام ضريبي جارٍ", "Current tax receivable or reduction of current tax payable"), credit: text("أصل ضريبة مؤجلة", "Deferred tax asset"), amount: text("5,100 دولار؛ عرض مبسط للحركة الصافية", "$5,100; simplified net reclassification") },
        ],
        reference: "IAS 12.24, 28–29, 68A–68C; IFRS 2.19–23",
      },
    ],
  },
  "IFRS 7": {
    sections: [
      {
        title: text("إفصاح حساسية مخاطر السوق: الربح أو الخسارة وحقوق الملكية", "Market-risk sensitivity: profit or loss and equity"),
        explanation: text(
          "يطلب IFRS 7.40 تحليل حساسية لكل نوع من مخاطر السوق تتعرض له المنشأة في نهاية فترة التقرير، يبين أثر التغيرات الممكنة بصورة معقولة في متغير الخطر على الربح أو الخسارة وحقوق الملكية، مع طرق التحليل وافتراضاته وتغيراتها. قد يختلف الأثران بحسب تصنيف الأداة ومكان الاعتراف بتغير قيمتها؛ فلا يكفي عرض الربح أو الخسارة وحده. إذا استُخدم تحليل بديل وفق IFRS 7.41، مثل القيمة المعرضة للمخاطر الذي يعكس الترابط بين المتغيرات، تنطبق شروط تلك الفقرة. نسبة هذا الإفصاح إلى IFRS 9.40 في صفحة الكتاب خطأ مرجعي؛ مصدره IFRS 7.",
          "IFRS 7.40 requires a sensitivity analysis for each type of market risk at the reporting date, showing how reasonably possible changes in the risk variable would affect profit or loss and equity, together with the methods, assumptions and changes in them. The two effects can differ with an instrument's classification and where its remeasurement is recognised; profit or loss alone is insufficient. An alternative analysis such as value at risk that reflects interdependencies can be used under IFRS 7.41 when its conditions are met. The book's attribution to IFRS 9.40 is a reference error: the disclosure is in IFRS 7."
        ),
        keyPoints: [
          text("اعرض الأثر على الربح أو الخسارة وحقوق الملكية، لا أحدهما فقط.", "Show effects on both profit or loss and equity, not only one."),
          text("اذكر التغير المعقول في متغير الخطر والمنهج والافتراضات.", "State the reasonably possible risk change, method and assumptions."),
        ],
        reference: "IFRS 7.40–41, B17–B18",
      },
    ],
    workedExamples: [],
  },
  "IFRS 13": {
    sections: [
      {
        title: text("السوق الرئيسي والأكثر منفعة: اختيار السوق يسبق قياس سعر الخروج", "Principal and most advantageous markets: choose the market before measuring exit price"),
        explanation: text(
          "تستخدم القيمة العادلة سعر السوق الرئيسي الذي يمكن الوصول إليه، أي الأعلى حجمًا ونشاطًا للبند؛ لا تستبدله بسوق يعطي صافي عائد أكبر. عند غياب سوق رئيسي فقط، اختر السوق الأكثر منفعة بعد مقارنة صافي حصيلة البيع بعد تكاليف المعاملة والنقل. بعد اختيار السوق، لا تخصم تكاليف المعاملة من القيمة العادلة لأنها تخص الصفقة لا الأصل. تخصم تكاليف النقل إذا كان موقع الأصل خاصية تؤثر في قياسه. لا تنشئ مقارنة الأسواق بذاتها قيد بيع أو ربحًا؛ يلزم معيار يطلب القياس بالقيمة العادلة ووقائع الاعتراف.",
          "Use the accessible principal market, with the greatest volume and activity for the item, even if another market yields better net proceeds. Only if there is no principal market, choose the most advantageous market by comparing net sale proceeds after transaction and transport costs. Once the market is chosen, exclude transaction costs from fair value because they belong to the transaction, not the asset. Deduct transport costs if the asset's location is a characteristic of the measurement. Comparing markets alone creates no sale entry or gain; a Standard requiring fair value and recognition facts are needed."
        ),
        keyPoints: [
          text("وجود سوق رئيسي يحسم اختيار السوق المتاح للقياس.", "An accessible principal market determines the market used for measurement."),
          text("تكاليف المعاملة تدخل مقارنة الأسواق الأكثر منفعة، ولا تخصم من القيمة العادلة.", "Transaction costs enter the most-advantageous-market comparison but are not deducted from fair value."),
          text("تكاليف النقل تخصم فقط عندما يكون الموقع من خصائص الأصل.", "Transport costs are deducted when location is a characteristic of the asset."),
        ],
        reference: "IFRS 13.16–19, 24–26, Appendix A",
      },
      {
        title: text("تصنيف قياس القيمة العادلة وفق مدخله المهم الأدنى", "Classify a fair-value measurement by its lowest significant input"),
        explanation: text(
          "المستوى الأول سعر معلن غير معدل لبند مطابق في سوق نشطة يمكن الوصول إليها؛ المستوى الثاني مدخلات أخرى قابلة للملاحظة مباشرة أو غير مباشرة؛ والمستوى الثالث مدخلات غير قابلة للملاحظة تعكس افتراضات المشاركين في السوق. يصنف القياس كاملًا بحسب أدنى مستوى لمدخل مهم في القياس، لا بحسب اسم أسلوب التقييم. لذلك لا يصبح معدل إتاوة تعاقدي مدخلًا من المستوى الثاني لمجرد أن الطرف المقابل مستقل، ولا يصنف مضاعف شركة مقارنة تلقائيًا في المستوى الثاني: تحقق من بيانات السوق ومدى ملاءمتها والتعديلات المهمة. قد يؤدي تعديل مهم غير قابل للملاحظة لمدخل من المستوى الثاني إلى تصنيف القياس بالمستوى الثالث.",
          "Level 1 is an unadjusted accessible active-market quote for an identical item; Level 2 comprises other directly or indirectly observable inputs; Level 3 comprises unobservable inputs reflecting market-participant assumptions. Classify the entire measurement by its lowest-level significant input, not by the valuation technique's name. A contractual royalty rate is not Level 2 merely because the counterparty is unrelated, and a comparable-company multiple is not automatically Level 2: assess market observability, relevance and significant adjustments. A significant unobservable adjustment to a Level 2 input can place the measurement in Level 3."
        ),
        keyPoints: [
          text("افحص أهمية كل مدخل للقياس ككل قبل تحديد المستوى.", "Assess each input's significance to the whole measurement before assigning a level."),
          text("استقلال طرف العقد وحده لا يثبت قابلية المدخل للملاحظة في السوق.", "An unrelated contractual counterparty alone does not establish market observability."),
        ],
        reference: "IFRS 13.72–76, 81–89",
      },
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
        title: text("بيع خيار أسهم للمستثمر: افحص التسوية والمقابل", "Selling an investor a share option: inspect settlement and consideration"),
        explanation: text(
          "بيع المنشأة خيارًا على أسهمها لا يثبت وحده أنه التزام مالي أو أداة حقوق ملكية، ولا يجعله تلقائيًا معاملة دفع على أساس الأسهم وفق IFRS 2. إذا منح الخيار المستثمر حق شراء عدد ثابت من أسهم المصدر مقابل مبلغ نقدي ثابت بعملة المنشأة الوظيفية، ولم يلزم المصدر بتسوية نقدية أو بعدد متغير من الأسهم، يصنف الخيار عادة ضمن حقوق الملكية وفق IAS 32. أما حق التسوية نقدًا أو المقابل المتغير أو عدد الأسهم المتغير فقد ينتج التزامًا أو مشتقًا؛ يلزم قراءة الشروط. IFRS 2 يعالج تلقي سلع أو خدمات مقابل أدوات حقوق ملكية أو مبالغ مبنية على قيمة الأسهم؛ مجرد بيع خيار تمويلي لمستثمر لا يثبت تلقي خدمة. في سؤال لا يذكر سعر الممارسة أو عدد الأسهم أو طريقة التسوية أو طبيعة المقابل، النتيجة القطعية غير مدعومة.",
          "An issuer's sale of an option over its own shares alone proves neither liability nor equity classification, and does not automatically make it an IFRS 2 share-based payment. An option allowing an investor to buy a fixed number of the issuer's shares for a fixed cash amount in the issuer's functional currency, without cash or variable-share settlement, is normally equity under IAS 32. Cash settlement, variable consideration or a variable number of shares can instead create a liability or derivative; read the contract. IFRS 2 deals with goods or services received for equity instruments or share-price-based amounts; selling a financing option to an investor does not establish receipt of services. A prompt omitting exercise price, share count, settlement and consideration cannot support a categorical classification.",
        ),
        keyPoints: [
          text("عدد أسهم ثابت مقابل مبلغ ثابت يدعم تصنيف خيار الإصدار حقوق ملكية مع تحقق بقية الشروط.", "A fixed number of issued shares for fixed consideration supports equity, subject to the other terms."),
          text("بيع الخيار لا يعني تطبيق IFRS 2 دون دليل على سلع أو خدمات مستلمة.", "An option sale does not invoke IFRS 2 without goods or services received."),
        ],
        reference: "IAS 32.11, 16, 22, AG27(a); IFRS 2.2, Appendix A",
      },
      {
        title: text("عقد السلعة: التسليم الفعلي أم نطاق الأدوات المالية؟", "Commodity contract: physical delivery or financial-instrument scope?"),
        explanation: text(
          "المخزون والعقار ليسا أصلين ماليين لمجرد إمكان بيعهما نقدًا، والعقد الذي لا يسوى إلا بتسليم سلعة مقابل ثمنها لا ينشئ بذاته حقًا حاليًا في قبض أصل مالي مقابل التزام مالي. لكن لا تستبعد جميع عقود السلع الآجلة بعبارة واحدة: افحص إمكان التسوية الصافية بالنقد أو بأداة مالية، وممارسة المنشأة في تسوية العقود المماثلة، وقابلية السلعة للتحويل بسهولة إلى نقد. عند تحقق نطاق IAS 32/IFRS 9 يعامل العقد كما لو كان أداة مالية، ما لم ينطبق استثناء الاستخدام الخاص بعقد دخلت فيه المنشأة ولا تزال تحتفظ به لاستلام السلعة أو تسليمها وفق حاجتها المتوقعة. قد تتاح في شروط محددة تسمية اختيارية بالقيمة العادلة عبر الربح أو الخسارة عند بدء العقد لتفادي عدم اتساق القياس. لا يحدد اسم «عقد مستقبلي للسلع» النتيجة دون شروط التسوية والغرض والممارسة.",
          "Inventory and property are not financial assets simply because they can be sold for cash, and a contract settled solely by delivery of a commodity for its price does not by itself create a present right and obligation to exchange financial assets. Yet commodity forwards and futures cannot all be excluded categorically: test net settlement in cash or a financial instrument, the entity's practice with similar contracts, and whether the item is readily convertible to cash. When IAS 32/IFRS 9 brings the contract into scope, account for it as if it were a financial instrument unless the own-use exception applies to a contract entered into and still held for expected receipt or delivery needs. In specified circumstances an inception-date fair-value-through-profit-or-loss designation can prevent an accounting mismatch. The label 'commodity future' alone cannot decide scope without settlement terms, purpose and practice.",
        ),
        keyPoints: [
          text("فرّق بين بيع السلعة نفسها مقابل نقد وبين تسوية العقد صافيًا.", "Distinguish selling the commodity for cash from net settlement of its contract."),
          text("اختبر نطاق IFRS 9 واستثناء الاستخدام الخاص قبل الحكم على عقد السلعة.", "Test IFRS 9 scope and the own-use exception before classifying a commodity contract."),
        ],
        reference: "IAS 32.8–10, AG20–AG23; IFRS 9.2.4–2.7, BA.2",
      },
      {
        title: text("أداة يردها حاملها للمصدر: استثناء حقوق الملكية ضيق", "Holder-puttable instrument: a narrow equity exception"),
        explanation: text(
          "حق الحامل في طلب استرداد الأداة نقدًا يحقق عادة تعريف الالتزام المالي، لكن IAS 32 يسمح باستثناء محدود إذا استوفت الأداة جميع شروط الفقرتين 16A و16B، ومنها حق نسبي في صافي الأصول عند التصفية، وكونها في أدنى فئة من المطالبات، وتماثل خصائص أدوات تلك الفئة، واعتماد تدفقاتها أساسًا على أداء المنشأة أو صافي أصولها، وغياب عقد آخر يحد جوهريًا من عائد الحامل المتبقي. توجد شروط منفصلة للأداة التي تُلزم بدفع حصة نسبية من صافي الأصول عند التصفية فقط. لا تفترض تحقق الاستثناء من لفظ «سهم» أو حق الاسترداد وحده؛ اقرأ شروط الفئة والعقود الأخرى. وإذا بدأت أو توقفت شروط الاستثناء لاحقًا، طبّق إعادة التصنيف في تاريخ التغير وفق IAS 32، فلا تكون عبارة «التصنيف ثابت دائمًا حتى الاستبعاد» صحيحة على إطلاقها.",
          "A holder's right to demand cash redemption normally meets the financial-liability definition. IAS 32 has a narrow exception if every condition in paragraphs 16A and 16B is met, including a pro rata residual interest on liquidation, membership in the most subordinate class, identical features across that class, cash flows substantially based on performance or net assets, and no other arrangement that substantially fixes or restricts the holder's residual return. Separate conditions address an obligation to deliver a pro rata share of net assets only on liquidation. Neither a 'share' label nor putability proves the exception: inspect the class and other contracts. If the exception's conditions begin or cease to be met later, apply IAS 32's reclassification rules from that date; classification is not invariably fixed until derecognition.",
        ),
        keyPoints: [
          text("الأصل في حق الاسترداد النقدي التزام؛ الاستثناء مشروط بكل متطلبات IAS 32.", "Cash putability normally creates a liability; the equity exception requires every IAS 32 condition."),
          text("راجع تغير شروط الاستثناء لإمكان إعادة التصنيف.", "Reassess changes to the exception's conditions for required reclassification."),
        ],
        reference: "IAS 32.11, 16A–16F, 17",
      },
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
      {
        title: text("الأسهم الممتازة القابلة للاسترداد: العقد قبل الاسم", "Redeemable preference shares: contract before label"),
        explanation: text(
          "لا يكفي وصف الأداة بأنها «سهم ممتاز تراكمي قابل للاسترداد» لتصنيفها بالكامل دينًا أو حقوق ملكية. افحص أولًا هل يفرض العقد سداد نقد في تاريخ محدد أو بطلب الحامل؛ إن وُجد، ينشأ مكوّن التزام. أما خيار الاسترداد الذي يملكه المصدر وحده فلا يفرض التسوية نقدًا بذاته. ثم افحص التوزيعات مستقلةً: هل يستطيع المصدر تجنب دفعها بلا قيد أم أنها إلزامية؟ قد تضم الأداة مكوّن التزام للاسترداد ومكوّن حقوق ملكية للتوزيعات الاختيارية. المصروف في الربح أو الخسارة يتعلق بمكوّن الالتزام؛ أما توزيع مكوّن حقوق الملكية فيُعرض مباشرةً في حقوق الملكية. التراكم لا يحل محل قراءة شروط الالتزام والتفويض بالتوزيع.",
          "The label 'cumulative redeemable preference share' does not by itself classify the entire instrument as debt or equity. First test whether the contract requires cash redemption on a specified date or at the holder's option: that creates a liability component. Redemption solely at the issuer's choice does not itself create a cash obligation. Test distributions separately: can the issuer avoid them unconditionally, or are they mandatory? An instrument may have a redemption liability and an equity component for discretionary distributions. Returns on a liability component affect profit or loss; distributions on an equity component are recognised directly in equity. Cumulativeness does not replace reading the payment and approval terms.",
        ),
        keyPoints: [
          text("اسأل: من يملك قرار الاسترداد، ومتى يصبح النقد واجب السداد؟", "Ask who controls redemption and when cash becomes payable."),
          text("تراكم العائد لا يعني وحده أن العائد مستحق أو مصروف تمويل.", "A cumulative return alone does not make it an accrued finance cost."),
          text("قسّم الأداة عند وجود التزام استرداد مع حق توزيعات اختياري.", "Separate components when cash redemption is obligatory but distributions are discretionary."),
        ],
        reference: "IAS 32.15–19, 28, 35–36, AG25–AG27, AG37",
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
      {
        title: text("Polymer: متى يصبح مبلغ 18,400 تكلفة تمويل؟", "Polymer: when is $18,400 a finance cost?"),
        facts: text(
          "لدى Polymer عدد 100,000 سهم ممتاز تراكمي قابل للاسترداد بقيمة اسمية دولار واحد وعائد مسمى 8.4%، وسندات قرض بقيمة 100,000 دولار بكوبون 10%. لم توضح المسألة هل استرداد الأسهم إلزامي أو باختيار الحامل أو المصدر، ولا هل توزيعها إلزامي. يظهر مبلغ 18,400 في الحل التقليدي كمصروف تمويل، لكن استحقاق جزء الأسهم يحتاج إثبات شروطه.",
          "Polymer has 100,000 cumulative redeemable $1 preference shares with a stated 8.4% return and $100,000 of 10% loan notes. The question does not say whether share redemption is mandatory, holder-controlled or issuer-controlled, nor whether distributions are obligatory. A traditional solution presents $18,400 of finance costs, but the preference component depends on the missing terms.",
        ),
        calculations: [
          text("كوبون سندات القرض = 100,000 × 10% = 10,000 دولار. العائد الاسمي المسمى للأسهم الممتازة = 100,000 × 8.4% = 8,400 دولار؛ الجمع الحسابي = 18,400.", "Loan-note coupon = $100,000 × 10% = $10,000. Stated preference return = $100,000 × 8.4% = $8,400; arithmetic total = $18,400."),
          text("إذا كان استرداد الأسهم نقدًا واجبًا، وكان عائد 8.4% نفسه واجبًا عن سنة كاملة، مع إصدار بالقيمة الاسمية ودون تكاليف أو خصم مؤثر، يصبح 8,400 مصروفًا مرتبطًا بالالتزام، ويصل مجموع التمويل الاسمي إلى 18,400. هذا افتراض مشروط لا معلومة معطاة.", "If cash redemption is obligatory and the 8.4% return is also unavoidable for a full year, with issue at par and no material cost or discount, the $8,400 is a liability-related expense and stated total finance cost reaches $18,400. This is a conditional assumption, not a stated fact."),
          text("إذا كانت التوزيعات اختيارية، فلا يمكن إثبات 8,400 مصروفًا أو مستحقًا تلقائيًا. قد يلزم فصل التزام الاسترداد عن حق التوزيع ضمن حقوق الملكية؛ وإذا كان الاسترداد باختيار المصدر وحده، افحص احتمال تصنيف الأداة حقوق ملكية. لا يمكن إكمال رصيد الالتزام أو الربح النهائي دون نص العقد.", "If distributions are discretionary, the $8,400 cannot automatically be expensed or accrued. A redemption liability may need separation from an equity distribution right; with issuer-only redemption, assess whether the instrument is equity. The liability balance and final profit cannot be completed without the contract."),
        ],
        conclusion: text(
          "الرقم 18,400 قابل للتبرير فقط بعد التحقق من شروط الاسترداد والتوزيع والقياس؛ لا تنقل وصف «سهم» أو «تراكمي» مباشرةً إلى القيد.",
          "The $18,400 amount is supportable only after confirming redemption and distribution obligations and measurement; neither 'share' nor 'cumulative' determines the entry.",
        ),
        journalEntries: [],
        reference: "IAS 32.15–19, 28, 35–36, AG25–AG27, AG37; IFRS 9.4.2.1",
      },
    ],
  },
  "IFRS 9": {
    sections: [
      {
        title: text("تحوط القيمة العادلة: أسهم OCI غير دين OCI", "Fair value hedge: elected equity OCI differs from debt OCI"),
        explanation: text(
          "في تحوط قيمة عادلة مؤهل، يثبت تغير أداة التحوط عادة في الربح أو الخسارة، ويثبت تغير البند المحوط المنسوب للخطر نفسه في الربح أو الخسارة مع تعديل قيمته الدفترية عند الاقتضاء. توجد معالجتان مهمتان لا تخلط بينهما: أصل الدين المصنف إلزاميًا بالقيمة العادلة عبر الدخل الشامل الآخر وفق IFRS 9.4.1.2A يبقى مقاسًا بالقيمة العادلة، لكن ربح أو خسارة الخطر المحوط يثبت في الربح أو الخسارة؛ أما استثمار الأسهم الذي اختارت المنشأة عند البداية عرض تغير قيمته في الدخل الشامل الآخر وفق 5.7.5 فيظل مكسبه أو خسارته المرتبطة بالخطر المحوط هناك، وكذلك تغير أداة التحوط المعينة لذلك الاستثمار. هذا الاستثناء لا يعني أن كل أداة تحوط أو كل أصل FVOCI يذهب إلى الدخل الشامل الآخر. قيود المخزون في تحوط القيمة العادلة تقيدها التغيرات المنسوبة للخطر المعين لا إعادة تقييم عامة.",
          "In a qualifying fair value hedge, the hedging instrument's movement normally goes to profit or loss and the hedged-risk movement of the item also goes there, adjusting its carrying amount where applicable. Keep two FVOCI situations distinct: a debt asset mandatorily measured at FVOCI under IFRS 9.4.1.2A remains at fair value, but its hedged-risk gain or loss enters profit or loss. For an equity investment with the inception-date OCI election under 5.7.5, the relevant hedged-item gain or loss remains in OCI and so does the movement of a hedging instrument designated to hedge that investment. This exception does not send every hedging instrument or FVOCI asset to OCI. Inventory fair-value-hedge entries are limited to change attributable to the designated risk, not a general revaluation.",
        ),
        keyPoints: [
          text("دين FVOCI: تغير الخطر المحوط في الربح أو الخسارة.", "Debt FVOCI: hedged-risk movement enters profit or loss."),
          text("أسهم اختير لها OCI: تغير الاستثمار وأداة تحوطه المعينة في الدخل الشامل الآخر.", "Elected equity OCI: the investment and its designated hedge movement enter OCI."),
        ],
        reference: "IFRS 9.4.1.2A, 5.7.5, 6.4.1, 6.5.8(a)–(b)",
      },
      {
        title: text("مشتق مضمّن: اختبر نوع العقد المضيف قبل الفصل", "Embedded derivative: identify the host before bifurcation"),
        explanation: text(
          "إذا كان العقد المضيف أصلًا ماليًا يدخل نطاق IFRS 9، طبق اختبار التصنيف والقياس على العقد المختلط كله؛ لا تفصل خيارًا مرتبطًا بمؤشر أسهم داخل سند يحمله المستثمر ثم تفترض أن جزء الدين بالتكلفة المستهلكة. إذا لم يكن المضيف أصلًا ماليًا في هذا النطاق، مثل التزام مالي أو بعض العقود غير المالية، يفصل المشتق فقط عندما لا ترتبط مخاطره الاقتصادية ارتباطًا وثيقًا بالمضيف، وكان سيحقق تعريف المشتق لو انفصل، ولم يكن العقد المختلط كله مقاسًا بالقيمة العادلة عبر الربح أو الخسارة. فهرسة سداد سند يصدره كيان بمؤشر أسهم قد تستدعي فصلًا من جهة المصدر وفق هذه الشروط. أما مجرد تسعير عقد إنشاء بعملة أجنبية فلا يكفي للجزم بالفصل: افحص شروط العملة وما إذا كان الشرط وثيق الصلة وفق B4.3.8(d).",
          "If the host is a financial asset within IFRS 9, classify and measure the entire hybrid; do not separate an equity-index option in a bond held by an investor and presume the remaining debt is at amortised cost. When the host is not such an asset, as with a financial liability or some non-financial contracts, separate the embedded derivative only if its risks are not closely related to the host, a standalone feature would meet the derivative definition, and the hybrid is not already at fair value through profit or loss. Equity-indexed redemption of a bond issued by an entity may require separation from the issuer's liability host when those tests hold. Foreign-currency pricing of a construction contract alone does not establish separation: inspect the currency and close-relationship conditions in B4.3.8(d).",
        ),
        keyPoints: [
          text("أصل مالي مضيف ضمن IFRS 9: قيّم العقد المختلط كله.", "Financial-asset host within IFRS 9: assess the whole hybrid."),
          text("مضيف آخر: لا تفصل إلا بعد اختبارات عدم الارتباط وتعريف المشتق وقياس العقد الكامل.", "Other host: bifurcate only after the close-relationship, derivative-definition and whole-contract tests."),
        ],
        reference: "IFRS 9.4.3.2–4.3.5, B4.3.5(a), B4.3.8(d)",
      },
      {
        title: text("محاسبة التحوط اختيار موثق وأدواتها أوسع من المشتقات", "Hedge accounting is an eligible documented choice with broader instruments"),
        explanation: text(
          "وجود تحوط اقتصادي لا يفرض تلقائيًا محاسبة التحوط. تختار المنشأة تعيين العلاقة وتوثيقها عند بدايتها، ثم تطبق نموذج IFRS 9 إذا ضمت أداة وبندًا مؤهلين، وارتبطت تغيراتهما اقتصاديًا، ولم يطغَ خطر الائتمان، وعكست نسبة التحوط الكميات المستخدمة فعليًا دون انحراف مصطنع. المشتقات المؤهلة شائعة، لكن أصلًا أو التزامًا ماليًا غير مشتق مقاسًا بالقيمة العادلة عبر الربح أو الخسارة قد يؤهل أداة تحوط أيضًا ضمن شروط 6.2.2؛ لذلك لا يصح قصر كل الأدوات غير المشتقة على تحوط مخاطر العملة. لتحوط العملة قاعدة إضافية تسمح بتعيين مكون خطر العملة في أداة مالية غير مشتقة مؤهلة. وبعد اختيار علاقة مؤهلة، تصبح قواعد القياس والعرض المعينة لها واجبة التطبيق، لا خيارًا انتقائيًا لكل ربح أو خسارة.",
          "An economic hedge does not automatically require hedge accounting. The entity chooses and documents a qualifying relationship at inception, then applies IFRS 9 when instrument and item are eligible, an economic relationship exists, credit risk does not dominate, and the hedge ratio reflects actual quantities without artificial imbalance. Qualifying derivatives are common, but a non-derivative financial asset or liability measured at fair value through profit or loss may also qualify as a hedging instrument under paragraph 6.2.2; non-derivatives are not confined to foreign-currency hedges. A separate foreign-currency rule permits designation of the FX-risk component of an eligible non-derivative instrument. Once a qualifying relationship is designated, its prescribed measurement and presentation rules apply rather than selectively choosing where each gain goes.",
        ),
        keyPoints: [
          text("التعيين عند البداية اختياري؛ بعده يلزم استيفاء شروط العلاقة وتطبيق القياس المحدد.", "Inception designation is optional; then qualifying conditions and prescribed accounting apply."),
          text("قد تؤهل أداة مالية غير مشتقة بالقيمة العادلة عبر الربح أو الخسارة للتحوط.", "A non-derivative FVPL financial instrument may qualify as a hedge instrument."),
        ],
        reference: "IFRS 9.6.1.2, 6.2.1–6.2.3, 6.4.1, 6.5.1",
      },
      {
        title: text("تسهيل غير مسحوب: السحب المتوقع ليس الخسارة المتوقعة", "Undrawn commitment: expected draw is not expected loss"),
        explanation: text(
          "يدخل التزام الإقراض غير المسحوب المؤهل ضمن نموذج الخسائر الائتمانية المتوقعة، وتقدر المنشأة ما يرجح سحبه في الأفق الملائم: خلال 12 شهرًا لتقدير خسائر 12 شهرًا، وخلال العمر المتوقع لتقدير خسائر العمر. لكن المبلغ المتوقع سحبه مضروبًا في احتمال التعثر يعطي تعرضًا مرجحًا للتعثر، وليس مخصصًا نهائيًا ما لم يكن العجز النقدي بعد التعثر يساوي كامل الرصيد ولا يوجد استرداد أو خصم جوهري. قس الفرق المخصوم بين التدفقات المستحقة لو سحب العميل والتدفقات التي تتوقع تحصيلها، بما في ذلك الضمانات والتحصيلات ذات الصلة. وإذا كان المنتج دوارًا مثل السحب المكشوف، افحص مدة التعرض الفعلية التي لا تحدها دائمًا مهلة الإلغاء التعاقدية وفق IFRS 9.5.5.20. يعرض مخصص التزام الإقراض عادة التزامًا، لا خصمًا من أصل لم يسحب بعد.",
          "An eligible undrawn loan commitment falls under ECL. Estimate amounts expected to be drawn in the appropriate horizon: within twelve months for twelve-month ECL and over the expected life for lifetime ECL. But expected draw multiplied by default probability is default-weighted exposure, not automatically a loss allowance unless post-default shortfall is the entire balance and recovery and discount effects are immaterial. Measure the discounted difference between cash flows due if drawn and expected collections, including relevant collateral and recoveries. For revolving facilities such as overdrafts, assess the actual credit-risk exposure period, which IFRS 9.5.5.20 may extend beyond a contractual cancellation notice. Present an ECL provision for the commitment as a liability rather than deducting it from an asset that has not yet been drawn.",
        ),
        keyPoints: [
          text("السحب المتوقع × احتمال التعثر يحتاج معدل خسارة بعد الاسترداد وخصمًا مناسبًا.", "Expected draw × default probability still needs post-recovery loss and appropriate discounting."),
          text("قارن أفق السحب خلال 12 شهرًا بأفق السحب خلال عمر الالتزام.", "Distinguish the twelve-month draw horizon from the commitment's lifetime horizon."),
        ],
        reference: "IFRS 9.5.5.1, 5.5.3–5.5.5, 5.5.17, 5.5.20, B5.5.30–B5.5.31",
      },
      {
        title: text("الصناعة والضمان والتأخر: لا تختزل خطر الائتمان في مؤشر واحد", "Industry, collateral and arrears: credit risk needs more than one indicator"),
        explanation: text(
          "يمكن لمعلومات ركود صناعة يعمل فيها المقترضون أن تكشف تدهورًا قبل التأخر عن السداد. جزئ المحفظة بحسب التعرض المشترك ذي الصلة، مثل عمل المقترض لدى المصنعين أو مورديهم، ثم اختبر تغير احتمال التعثر مقارنة ببداية كل قرض على أساس جماعي أو فردي مناسب. انخفاض نسبة القرض إلى قيمة العقار المرهون قد يخفض الخسارة عند التعثر، لكنه لا يلغي بالضرورة زيادة احتمال التعثر أو الانتقال إلى خسائر العمر. وعند تعثر قرض بعينه أو ظهور حدث يضر بالتدفقات، قيّم كونه متعثرًا ائتمانيًا والضمان والتحصيلات المخصومة على حدة. في مصفوفة ذمم تجارية، احسب أيام التأخر من تاريخ الاستحقاق التعاقدي المحدد، لا تاريخ الفاتورة أو مجرد انتهاء حد الائتمان؛ وعدل معدل المجموعة إذا أظهرت معلومات عميل معين صعوبات مالية أشد من متوسطها.",
          "Industry stress affecting borrowers can reveal deterioration before payments become overdue. Segment the portfolio by relevant shared exposure, such as borrowers employed by manufacturers or their suppliers, then assess changes in default likelihood since each loan's origination on an appropriate collective or individual basis. A low loan-to-collateral-value ratio may reduce loss given default but does not necessarily prevent a significant rise in default risk or lifetime ECL. For a specific default or event harming cash flows, assess credit impairment and discounted collateral recoveries separately. In a trade-receivable matrix, count days past due from the actual contractual due date, not the invoice date or a vague credit-limit label; adjust a group rate when an individual customer's severe financial difficulty makes it unrepresentative.",
        ),
        keyPoints: [
          text("الضمان يؤثر في مبلغ العجز المتوقع ولا يلغي تلقائيًا زيادة احتمال التعثر.", "Collateral affects expected shortfall and does not automatically cancel a rise in default risk."),
          text("ثبت تاريخ الاستحقاق قبل نقل الذمة إلى شريحة التأخر التالية.", "Establish the due date before moving a receivable to an overdue bucket."),
        ],
        reference: "IFRS 9.5.5.4, 5.5.9–5.5.11, 5.5.17, B5.5.5–B5.5.6, B5.5.35",
      },
      {
        title: text("التزام مسمى بالقيمة العادلة: افصل خطر ائتمان المصدر", "Designated fair-value liability: separate the issuer's credit effect"),
        explanation: text(
          "في الالتزام المالي الذي عُيّن بالقيمة العادلة عبر الربح أو الخسارة، يُعرض عادة الجزء من تغير قيمته العادلة المنسوب إلى تغير خطر ائتمان المصدر في الدخل الشامل الآخر، والباقي في الربح أو الخسارة. إذا كان هذا الفصل يخلق عدم اتساق محاسبيًا في الربح أو الخسارة أو يزيده، يعرض التغير كله في الربح أو الخسارة؛ يحدد ذلك عند الاعتراف الأولي ولا يعاد تقريره لاحقًا. لا تعمم هذا العرض على كل التزامات المتاجرة، ولا تساوِ انخفاض القيمة العادلة للدين عند تدهور ائتمان المصدر مع إلغاء أصل المبلغ المستحق للدائن. يلزم قياس أثر الخطر الائتماني منفصلًا قبل وضع قيد، ولا توفر الصفحة مبالغ لذلك.",
          "For a financial liability designated at fair value through profit or loss, the portion of its fair-value movement attributable to changes in the issuer's credit risk normally goes to OCI, with the remainder in profit or loss. If that split creates or enlarges a profit-or-loss accounting mismatch, present the entire change in profit or loss; make this determination at initial recognition and do not subsequently reassess it. Do not apply this presentation to every trading liability, or equate a lower liability fair value after credit deterioration with cancellation of the creditor's contractual principal. Isolate the credit-risk effect before posting an entry; the page supplies no amounts for one.",
        ),
        keyPoints: [
          text("العرض المنفصل يخص الالتزام المعين بالقيمة العادلة، مع اختبار عدم الاتساق عند البداية.", "The split concerns a designated fair-value liability, with the mismatch test at inception."),
          text("تغير ائتمان المصدر لا يطفئ أصل الدين التعاقدي.", "Issuer-credit movement does not extinguish contractual principal."),
        ],
        reference: "IFRS 9.5.7.7–5.7.9; IFRS 13.42",
      },
      {
        title: text("الخسائر الائتمانية: مدة التعثر ومقارنة الخطر", "Expected credit losses: default horizon and risk comparison"),
        explanation: text(
          "خسائر 12 شهرًا هي الجزء من خسائر العمر الناتج من أحداث تعثر قد تقع خلال الاثني عشر شهرًا القادمة؛ تشمل العجز النقدي المتوقع طوال عمر الأداة بعد ذلك التعثر، وليست فقط التدفقات غير المحصلة خلال سنة. وفق المنهج العام ينتقل المخصص إلى خسائر العمر عند زيادة جوهرية في خطر التعثر منذ الاعتراف الأولي، لا لمجرد ارتفاع مبلغ الخسارة المحتملة عند التعثر. قارن خطر التعثر على العمر المتوقع المتبقي في تاريخ التقرير بما كان متوقعًا لذلك الأفق عند البداية، مستخدمًا معلومات تاريخية وحالية ومستقبلية معقولة؛ لا تجمع نسب فترات متتابعة ما لم تكن احتمالات هامشية غير متداخلة، ولا تقارن مجموعين لأفقين مختلفين كما لو كانا قابلين للمقارنة تلقائيًا. يجب أن يعكس القياس احتمالات النتائج والعجز بعد الاسترداد والقيمة الزمنية. عند تحسن الخطر بحيث لا تعود الزيادة الجوهرية قائمة، يعود الأصل المؤهل إلى مخصص 12 شهرًا.",
          "Twelve-month ECL is the portion of lifetime ECL arising from defaults possible in the next twelve months; it includes all later cash shortfalls caused by such a default, not merely cash missed within one year. Under the general approach, move to lifetime ECL when default risk has increased significantly since initial recognition, not merely because loss severity has risen. Compare default risk over the remaining expected life at the reporting date with the risk originally expected for that horizon, using reasonable historical, current and forward-looking evidence. Do not add successive-period percentages unless they are non-overlapping marginal probabilities, or treat totals over different horizons as automatically comparable. Measurement reflects probability-weighted outcomes, recoveries and time value. If significant deterioration reverses, an eligible asset returns to twelve-month ECL.",
        ),
        keyPoints: [
          text("خسائر 12 شهرًا تتعلق بوقت التعثر المحتمل، لا بوقت كل عجز نقدي.", "Twelve-month ECL limits possible default timing, not the timing of all cash shortfalls."),
          text("الانتقال إلى خسائر العمر يقاس بتغير خطر التعثر المقارن منذ البداية.", "Move to lifetime ECL on a comparable increase in default risk since origination."),
          text("لا يكفي احتمال التعثر × خسارة غير مخصومة دون اختبار الاسترداد والقيمة الزمنية.", "Probability times undiscounted loss is insufficient without recovery and time-value analysis."),
        ],
        reference: "IFRS 9.5.5.3–5.5.9, 5.5.17, Appendix A, B5.5.7–B5.5.11, B5.5.43",
      },
      {
        title: text("تأخر 30 يومًا وخطر منخفض وفائدة الأصل المتعثر", "Thirty days past due, low risk and interest on a credit-impaired asset"),
        explanation: text(
          "تجاوز الدفعة التعاقدية 30 يومًا ينشئ افتراضًا قابلًا للدحض بزيادة جوهرية في خطر الائتمان، لا قاعدة آلية تنتظر التأخر أو تمنع اكتشاف التدهور قبله؛ يجب استخدام المعلومات المستقبلية المتاحة. ويمكن للمنشأة اختيار تبسيط الخطر الائتماني المنخفض إذا تحقق في تاريخ التقرير، ولا تعني تسمية «درجة استثمارية» غياب مخصص 12 شهرًا. في المرحلتين غير المتعثرتين يحسب دخل الفائدة على إجمالي القيمة الدفترية، وعندما يصبح أصل لم يكن متعثرًا عند نشأته متعثرًا ائتمانيًا يحسب من الفترة اللاحقة بالمعدل الفعلي على التكلفة المستهلكة بعد المخصص، مع استمرار قياس خسائر العمر. يستثنى الأصل المشترى أو المنشأ وهو متعثر ائتمانيًا من هذا التسلسل المعتاد ويستخدم معدل فائدة فعليًا معدلًا ائتمانيًا.",
          "More than 30 days past due creates a rebuttable presumption of a significant credit-risk increase, not a rule to wait for arrears or ignore earlier forward-looking deterioration. An entity may use the low-credit-risk simplification if the instrument qualifies at the reporting date; an investment-grade label does not remove the twelve-month allowance. Interest on non-credit-impaired assets uses gross carrying amount. If an asset not credit-impaired at origination later becomes credit-impaired, subsequent-period interest uses the effective rate on amortised cost after the allowance while lifetime ECL continues. A purchased or originated credit-impaired asset follows a distinct credit-adjusted effective-interest approach from inception.",
        ),
        keyPoints: [
          text("التأخر أكثر من 30 يومًا قرينة قابلة للدحض؛ قد يظهر التدهور قبلها.", "More than 30 days late is rebuttable; deterioration can be identified earlier."),
          text("الخطر المنخفض تبسيط اختياري، لا إعفاء من مخصص خسائر 12 شهرًا.", "Low credit risk is an optional simplification, not an exemption from twelve-month ECL."),
          text("الفائدة على إجمالي الرصيد قبل التعثر وعلى التكلفة المستهلكة بعد حدوثه.", "Interest uses gross amount before credit impairment and amortised cost after it arises."),
        ],
        reference: "IFRS 9.5.4.1–5.4.2, 5.5.10–5.5.11, B5.5.22–B5.5.24",
      },
      {
        title: text("إعادة تصنيف أصل الدين: وجهة الفرق تحدد موضعه", "Debt-asset reclassification: the destination determines where the difference goes"),
        explanation: text(
          "لا تعيد تصنيف أصل مالي إلا عندما يتغير نموذج الأعمال الفعلي لإدارة الأصول المالية، وتطبق النتيجة مستقبلًا من تاريخ إعادة التصنيف؛ تبدل النية بشأن أصل منفرد ليس كافيًا. إذا انتقل أصل دين من التكلفة المستهلكة إلى القيمة العادلة عبر الربح أو الخسارة، يقاس بالقيمة العادلة ويثبت الفرق مع تكلفته المستهلكة السابقة في الربح أو الخسارة. أما انتقاله من التكلفة المستهلكة إلى القيمة العادلة عبر الدخل الشامل الآخر فيقاس أيضًا بالقيمة العادلة، لكن الفرق يثبت في الدخل الشامل الآخر. لذلك لا يصح إرسال كل فروق الانتقال من التكلفة المستهلكة إلى الربح أو الخسارة دون تحديد الفئة الجديدة. لا يعاد تصنيف التزام مالي بهذه القاعدة، ولا يلغى اختيار العرض في الدخل الشامل الآخر لاستثمار أسهم مؤهل لأنه غير قابل للنقض.",
          "Reclassify a financial asset only when the actual business model for managing financial assets changes, prospectively from the reclassification date; a changed intention for one asset is insufficient. On moving a debt asset from amortised cost to fair value through profit or loss, measure it at fair value and recognise the difference from its previous amortised cost in profit or loss. Moving it instead from amortised cost to fair value through OCI also requires fair-value measurement, but the difference goes to OCI. The destination category must therefore be identified before posting the difference. This reclassification rule does not reclassify financial liabilities or revoke an eligible equity investment's irrevocable OCI presentation election.",
        ),
        keyPoints: [
          text("التكلفة المستهلكة ← الربح أو الخسارة بالقيمة العادلة: الفرق في الربح أو الخسارة.", "Amortised cost → fair value through profit or loss: difference in profit or loss."),
          text("التكلفة المستهلكة ← الدخل الشامل الآخر بالقيمة العادلة: الفرق في الدخل الشامل الآخر.", "Amortised cost → fair value through OCI: difference in OCI."),
        ],
        reference: "IFRS 9.4.4.1–4.4.2, 5.6.1–5.6.4, B4.4.1–B4.4.3",
      },
      {
        title: text("القيمة العادلة للأسهم والتكلفة كمدخل تقدير محدود", "Equity fair value and cost as a limited estimate"),
        explanation: text(
          "تقاس استثمارات أدوات حقوق الملكية الداخلة في IFRS 9 بالقيمة العادلة في التواريخ اللاحقة، سواء عُرض تغيرها في الربح أو الخسارة أو اختير لها الدخل الشامل الآخر عند الاعتراف الأولي. ليست صعوبة تقدير القيمة العادلة ترخيصًا عامًا لتحويل الاستثمار إلى فئة «التكلفة». في ظروف محدودة فقط قد تمثل التكلفة أفضل تقدير للقيمة العادلة، ويعاد فحص ذلك كلما ظهرت معلومات أو تغيرات في أداء المستثمر فيه أو سوقه. كذلك لا يوجد استثناء عام يحول التزامًا مصنفًا بالقيمة العادلة عبر الربح أو الخسارة إلى التكلفة لمجرد صعوبة التقدير. أضف تكاليف المعاملة المباشرة إلى القياس الأولي إذا لم تكن الأداة بالقيمة العادلة عبر الربح أو الخسارة؛ أما تكاليف أداة تلك الفئة فتحمل على الربح أو الخسارة، ثم تُقاس الأداة في نهاية الفترة بقيمتها العادلة دون إضافة تكاليف بيع محتملة.",
          "Equity investments within IFRS 9 remain at fair value subsequently, whether changes pass through profit or loss or an eligible inception-date OCI election. Difficulty estimating fair value does not create a general cost measurement category. Only in limited circumstances may cost be the best estimate of fair value, reassessed as investee performance and market information change. There is likewise no general switch of a fair-value-through-profit-or-loss liability to cost because valuation is difficult. Add directly attributable transaction costs initially when an instrument is not at fair value through profit or loss; expense those costs for an instrument in that category. At each reporting date measure fair value without adding hypothetical disposal costs.",
        ),
        keyPoints: [
          text("التكلفة قد تكون تقديرًا للقيمة العادلة في نطاق ضيق، لا أساس قياس بديلًا عامًا.", "Cost may estimate fair value narrowly; it is not a general alternative measurement basis."),
          text("تكاليف المعاملة تدخل الأصل المختار له عرض OCI وتُحمّل على المصروف لأصل المتاجرة.", "Transaction costs enter an OCI-elected asset but are expensed for a trading asset."),
        ],
        reference: "IFRS 9.4.2.1, 5.1.1, 5.2.1, 5.7.1, 5.7.5–5.7.6, B5.2.2–B5.2.4; IFRS 13.25–26",
      },
      {
        title: text("اختباران مستقلان لأصل الدين: إدارة المحفظة وتدفق العقد", "Two separate debt-asset tests: portfolio management and contract cash flows"),
        explanation: text(
          "ابدأ بنموذج الأعمال كما يُدار فعليًا على مستوى المحفظة: التحصيل، أو التحصيل والبيع، أو إدارة أخرى على أساس القيمة العادلة. لا تنقل محفظة «الاحتفاظ للتحصيل» إلى فئة البيع لمجرد بيع قليل أو عرضي، خاصةً عند تدهور الائتمان؛ وافحص تكرار المبيعات وقيمتها وسببها مع الدليل المستقبلي. ثم اختبر شروط كل أصل: هل التدفقات في تواريخ محددة تمثل أصل المبلغ والفائدة على رصيده فقط؟ حتى لو كان الهدف التحصيل، فإن حقًا جوهريًا لتحويل القرض إلى أسهم المصدر يعرّض الحامل لقيمة حقوق الملكية ويفشل هذا الاختبار؛ يقاس الأصل المركب كله عادة بالقيمة العادلة عبر الربح أو الخسارة، دون فصل خيار التحويل عن أصل مالي مضيف. وإذا نجح اختبار التدفقات، تُقاس محفظة التحصيل بالتكلفة المستهلكة، ومحفظة التحصيل والبيع بالقيمة العادلة عبر الدخل الشامل الآخر، ما لم ينطبق تعيين مؤهل بالقيمة العادلة عبر الربح أو الخسارة.",
          "First assess how the portfolio is actually managed: to collect, both collect and sell, or under another fair-value objective. Do not turn a hold-to-collect portfolio into a selling model merely because of limited incidental sales, especially sales following credit deterioration; evaluate their frequency, value, reasons and forward-looking evidence. Then inspect each asset's terms: are specified-date cash flows solely principal and interest on the outstanding principal? Even if the objective is collection, a substantive right to convert a loan into the issuer's shares exposes its holder to equity value and fails that test. The entire hybrid financial asset is generally measured at fair value through profit or loss without separating its conversion feature. If cash flows pass, collect-only debt is at amortised cost and collect-and-sell debt at fair value through OCI, absent a qualifying fair-value-through-profit-or-loss designation.",
        ),
        keyPoints: [
          text("قيّم نموذج الأعمال للمحفظة، ثم اختبر تدفقات كل أصل على حدة.", "Assess the portfolio's business model, then each asset's cash-flow terms."),
          text("قليل من المبيعات لا يحوّل هدف التحصيل تلقائيًا إلى هدف البيع.", "Limited sales do not automatically turn collection into a selling objective."),
          text("خيار التحويل الجوهري يفشل اختبار أصل الدين والفائدة حتى مع نية الاحتفاظ.", "A substantive conversion option fails the principal-and-interest test despite an intention to hold."),
        ],
        reference: "IFRS 9.4.1.1–4.1.5, 4.3.2, B4.1.1–B4.1.4, B4.1.7A–B4.1.9",
      },
      {
        title: text("الاعتراف بالمشتق لا يفترض التزامًا موجبًا يوم التعاقد", "Recognising a derivative does not imply a day-one liability"),
        explanation: text(
          "عند دخول المنشأة طرفًا في شروط عقد مشتق يقع ضمن IFRS 9، يبدأ الاعتراف به وتُقاس قيمته العادلة في ذلك التاريخ، حتى لو لم تدفع المنشأة مبلغًا نقديًا أوليًا. لكن تاريخ الاعتراف شيء ومبلغ القياس واتجاهه شيء آخر: العقد الآجل المتفق عليه بسعر السوق قد تكون قيمته العادلة صفرًا عند البداية، أو يصبح أصلًا أو التزامًا بحسب شروطه والسوق. لا تثبت التزامًا ماليًا موجبًا لمجرد وجود وعد بشراء سلعة مستقبلًا، ولا تخترع مبلغًا إذا لم تُعط أسعار العقد والقيمة العادلة. ميّز عقد شراء سلعة للاستخدام بالتسليم الفعلي عن عقد تجوز تسويته صافيًا، ثم اختبر نطاق IFRS 9 واستثناء الاستخدام الخاص.",
          "A derivative within IFRS 9 is recognised when the entity becomes party to its contractual provisions and measured at fair value on that date, even if there is no initial cash payment. Recognition date, measured amount and asset-or-liability direction are different questions: an at-market forward may have zero initial fair value, or the terms may give an asset or liability. Do not record a positive financial liability merely because the entity promises to buy a commodity later, and do not invent a value without contract pricing and fair-value inputs. Distinguish a physical-delivery purchase for use from a net-settleable contract, then apply IFRS 9 scope and the own-use test.",
        ),
        keyPoints: [
          text("أثبت المشتق عند الدخول في العقد، ثم قسه بالقيمة العادلة المتاحة فعلًا.", "Recognise the derivative on becoming a party, then measure its actual fair value."),
          text("قد يكون رصيد اليوم الأول صفرًا؛ لا تحدد أصلًا أو التزامًا بلا بيانات السوق.", "Day-one balance may be zero; do not assert an asset or liability without market inputs."),
        ],
        reference: "IFRS 9.2.4–2.7, 3.1.1, 5.1.1, 5.7.1; IAS 32.AG20–AG23",
      },
      {
        title: text("بيع الأصل مع خيار استرداد أو إقراض أوراق مالية", "Asset sale with a repurchase option or securities lending"),
        explanation: text(
          "اختبار استبعاد الأصل المالي يمر بانتهاء حقوق التدفقات أو نقلها، ثم بانتقال مخاطر الملكية وعوائدها بدرجة جوهرية، ومع الحالات الوسطية باختبار السيطرة والاستمرار في الارتباط. خيار إعادة شراء بسعر القيمة العادلة في تاريخ الشراء قد يترك تقلب سعر السوق للمشتري فيسمح بالاستبعاد؛ كونه «خيارًا لا التزامًا» ليس وحده سبب النتيجة، إذ قد يحتفظ خيار شراء عميق الربحية بمعظم المخاطر والعوائد. وفي إقراض أسهم مع التزام رد الأسهم نفسها أو ما يعادلها، يحتفظ المقرض عادة بمخاطرها وعوائدها، فلا يستبعدها لمجرد انتقال الحيازة القانونية مؤقتًا. عند استبعاد جزء، يكون الربح هو المقابل الصافي عن الجزء المستبعد ناقص قيمته الدفترية المخصصة؛ لا تعكس إشارة الحساب. ولا تُستنتج قيمة مكسب أو قيد من أمثلة لا تتضمن قيمًا دفترية أو مقابلاً.",
          "Financial-asset derecognition starts with expiry or transfer of cash-flow rights, then tests whether substantially all ownership risks and rewards passed; intermediate cases require a control and continuing-involvement assessment. A repurchase call at fair value on the future purchase date can leave market-price exposure with the buyer and permit derecognition. Being an 'option rather than an obligation' is not sufficient by itself: a deeply in-the-money call can retain substantially all risks and rewards. In a securities loan requiring return of the same or substantially the same shares, the lender normally keeps those risks and rewards and does not derecognise merely because legal possession temporarily passes. On partial derecognition, gain is net consideration for the derecognised part less its allocated carrying amount; do not reverse the sign. Do not infer a gain or journal amount from examples with no carrying values or consideration.",
        ),
        keyPoints: [
          text("اختبر سعر خيار إعادة الشراء والمخاطر والعوائد، لا شكل الخيار وحده.", "Test repurchase price and risks and rewards, not option form alone."),
          text("رد أوراق مماثلة في إقراض الأسهم يعني عادة استمرار إثبات الأصل.", "An obligation to return equivalent shares in a securities loan normally means continuing recognition."),
        ],
        reference: "IFRS 9.3.2.3–3.2.6, 3.2.13, B3.2.4–B3.2.5",
      },
      {
        title: text("الضمان المالي ليس مجرد التزام محتمل وفق IAS 37", "A financial guarantee is not merely an IAS 37 contingency"),
        explanation: text(
          "افحص نص الضمان: هل يلزم المُصدر بدفع مبالغ محددة لتعويض حامل أداة دين عن خسارة ناتجة من إخفاق مدين محدد في السداد عند الاستحقاق؟ إذا نعم، وفي غياب استثناء نطاق أو اختيار محاسبي ذي صلة، يدخل العقد ضمن IFRS 9. يثبت المُصدر التزامًا بالقيمة العادلة عند نشأته، ثم يقيسه عادة بالأعلى من مخصص الخسائر الائتمانية المتوقعة والمبلغ المبدئي ناقص الدخل التراكمي المناسب. تصنيف عقد القرض المضمون كمجرد التزام محتمل عند سلامة المدين ثم مخصص IAS 37 عند تعثره يتجاهل الاعتراف الأولي ونموذج الخسائر الائتمانية. لا تخترع قيمة عادلة أو خسارة متوقعة عندما تغيب شروط الضمان والتعرض واحتمالات التعثر والتحصيل.",
          "Read the guarantee terms: must the issuer make specified payments to reimburse a debt holder for loss from a specified debtor's failure to pay when due? If so, absent a relevant scope exception or election, IFRS 9 applies. The issuer initially recognises a fair-value liability, then generally measures it at the higher of expected credit losses and the initial amount less appropriate cumulative income. Treating a borrowing guarantee as a mere contingent liability while the debtor is sound and an IAS 37 provision only after deterioration overlooks initial recognition and ECL. Do not invent fair value or ECL without the guarantee terms, exposure, default and recovery inputs.",
        ),
        keyPoints: [
          text("ابدأ باختبار التعريف والنطاق قبل النظر إلى درجة احتمال مطالبة الضامن.", "Test definition and scope before considering how likely a call on the guarantee is."),
          text("تدهور المدين يغير قياس الخسارة المتوقعة؛ لا يخلق الاعتراف الأولي لأول مرة إن كان العقد ضمن IFRS 9 أصلًا.", "Borrower deterioration affects ECL measurement; it does not first create recognition for a contract already within IFRS 9."),
        ],
        reference: "IFRS 9.Appendix A, 2.1(e), 4.2.1(c), 5.1.1, 5.5",
      },
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
        title: text("من الراتب النهائي إلى التزام كل سنة خدمة", "From final salary to each year's service obligation"),
        explanation: text(
          "في خطة تعد بنسبة من الراتب النهائي عن كل سنة خدمة، قدّر الراتب عند تاريخ دفع المنفعة أولًا. انسب إلى كل سنة وحدة منفعة وفق صيغة الخطة، ثم اخصم الوحدة التي اكتسبت في السنة الحالية حتى تاريخ الدفع لاستخراج تكلفة الخدمة الجارية. التزام نهاية السنة هو القيمة الحالية لجميع الوحدات المكتسبة حتى ذلك التاريخ. تزيد فائدة السنة التالية الالتزام الافتتاحي بسبب اقتراب موعد الدفع؛ ولا تُعد وحدة خدمة جديدة. حافظ على القيم غير المقربة في الحساب ثم بيّن أثر تقريب الجدول التعليمي، وافحص احتمالات المغادرة إذا كانت مؤثرة ومتاحًا تقديرها.",
          "For a plan promising a percentage of final salary for each service year, project salary to the benefit-payment date first. Attribute one unit under the plan formula to each year and discount the unit earned in the current year to obtain current service cost. The year-end obligation is the present value of all units earned by that date. Next year's interest increases the opening obligation as payment approaches; it is not another service unit. Keep unrounded values in the calculation, then explain any rounding in a teaching table, and incorporate departure probabilities when relevant and estimable.",
        ),
        keyPoints: [
          text("توقع الراتب النهائي قبل حساب وحدة المنفعة.", "Project final salary before measuring a benefit unit."),
          text("افصل تكلفة الخدمة الحالية عن فائدة الالتزام الافتتاحي.", "Separate current service cost from interest on the opening obligation."),
          text("لا تعرض أرقام الجدول المقربة بوصفها قيمًا دقيقة.", "Do not present whole-unit teaching figures as exact values."),
        ],
        reference: "IAS 19.66–71, 75–98, 120–123",
      },
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
      {
        title: text("إنهاء الخدمة الطوعي أو الإجباري: اختبر سبب المنفعة وتوقيت الالتزام", "Voluntary or involuntary termination: test the benefit and recognition date"),
        explanation: text(
          "لا تقتصر مزايا إنهاء الخدمة على قرار صاحب العمل بفصل الموظف. قد تنشأ أيضًا عندما يقبل الموظف عرضًا من المنشأة مقابل إنهاء عمله طوعًا؛ لكن مبلغًا يستحق عند الاستقالة أو التقاعد لأي سبب بموجب خدمة سابقة يُقيّم كمنفعة ما بعد انتهاء الخدمة، والزيادة المشروطة بخدمة مستقبلية تُحمّل على تلك الخدمة. في العرض الطوعي يصبح التعهد غير قابل للسحب عند قبول الموظف أو سريان قيد سابق يمنع سحبه، أيهما أسبق. وفي الإنهاء بقرار المنشأة يلزم إبلاغ المتأثرين بخطة تفصيلية لا يرجح تغييرها جوهريًا وتحدد العاملين والوظائف والمواقع والموعد والمزايا. يثبت التزام ومصروف الإنهاء في التاريخ الأسبق لتعذر سحب العرض وإثبات إعادة هيكلة مؤهلة تتضمن المزايا. إذا كانت المنفعة تعزيزًا لحق ما بعد الخدمة، تُقاس وفق متطلبات ذلك الحق؛ وإلا يتبع القياس متطلبات المنافع قصيرة الأجل أو الطويلة الأخرى بحسب موعد التسوية المتوقع.",
          "Termination benefits are not confined to an employer's unilateral dismissal. They can also arise when an employee accepts the employer's offer in exchange for voluntary termination. A benefit payable on ordinary resignation or retirement regardless of cause is instead assessed as a post-employment benefit, and an increment conditional on future service is attributed to that service. For a voluntary offer, the employer can no longer withdraw it when the employee accepts or an earlier restriction on withdrawal takes effect. For an employer-initiated termination, it must communicate a detailed plan unlikely to change significantly, identifying affected numbers, roles, locations, completion date and benefits. Recognise a termination liability and expense at the earlier of the offer becoming non-withdrawable and recognition of a qualifying restructuring involving the payments. Measure an enhancement of post-employment benefits under those benefit requirements; otherwise use short-term or other long-term measurement according to expected settlement timing.",
        ),
        keyPoints: [
          text("قبول عرض إنهاء طوعي من المنشأة قد ينشئ منفعة إنهاء خدمة.", "Accepting an employer's voluntary redundancy offer can create a termination benefit."),
          text("افصل ما يستحق بغض النظر عن سبب المغادرة وما يعتمد على خدمة لاحقة.", "Separate benefits payable regardless of departure cause from amounts earned through later service."),
          text("توقيت الاعتراف وتصنيف طريقة القياس سؤالان مختلفان.", "Recognition timing and measurement category are separate questions."),
        ],
        reference: "IAS 19.8, 159–170; IAS 37.72–83",
      },
      {
        title: text("تعديل الخطة وتقليصها وتسويتها", "Plan amendment, curtailment and settlement"),
        explanation: text(
          "تغيير المنافع عن خدمة سابقة أو خفض عدد المشمولين بالخطة يولد تكلفة خدمة سابقة، قد تكون مصروفًا أو تخفيضًا للمصروف إذا انخفض الالتزام. أما التسوية فهي معاملة تزيل التزام المنشأة القانوني أو الضمني عن منافع محددة؛ سداد المنافع المعتاد وفق شروط الخطة ليس تسوية مستقلة. أعد قياس الالتزام وأصول الخطة بافتراضات حديثة قبل تحديد تكلفة الخدمة السابقة أو ربح التسوية أو خسارتها. قارن قيمة الالتزام الذي أزيل بمقابل التسوية، بما فيه أصول الخطة المنقولة. تظهر تكلفة الخدمة السابقة وأثر التسوية في الربح أو الخسارة، بينما تُعرض إعادة القياس الاكتوارية وعوائد الأصول خارج صافي الفائدة في الدخل الشامل الآخر. بعد الحدث تُستخدم الافتراضات المحدّثة لحساب تكلفة الخدمة الجارية وصافي الفائدة لباقي الفترة.",
          "A change to benefits for prior service or a significant reduction in covered employees produces past service cost, which can be a credit when the obligation falls. A settlement eliminates the employer's further legal or constructive obligation for specified benefits; an ordinary benefit payment already provided for in the plan is not a separate settlement. Remeasure the obligation and plan assets using current assumptions before measuring past service cost or the settlement gain or loss. Compare the obligation extinguished with the settlement price, including plan assets transferred. Past service cost and settlement effects enter profit or loss; actuarial remeasurement and asset return beyond net interest enter OCI. Updated assumptions determine current service cost and net interest for the rest of the period after the event.",
        ),
        keyPoints: [
          text("تعترف بتكلفة الخدمة السابقة في التاريخ الأسبق لتعديل الخطة أو تقليصها وإثبات إعادة هيكلة أو مزايا إنهاء مرتبطة بها.", "Recognise past service cost at the earlier of the amendment or curtailment and recognition of related restructuring or termination benefits."),
          text("لا تعامل المنافع العادية المسددة من أصول الخطة على أنها ربح أو خسارة تسوية.", "Do not treat ordinary benefits paid from plan assets as a settlement gain or loss."),
          text("افصل إعادة القياس السابقة للحدث عن تكلفة الخدمة السابقة وأثر التسوية.", "Separate pre-event remeasurement from past service cost and the settlement result."),
        ],
        reference: "IAS 19.99–112, 120–130",
      },
      {
        title: text("سقف أصل المنفعة المحددة", "Defined-benefit asset ceiling"),
        explanation: text(
          "زيادة أصول الخطة على الالتزام لا تعني أن الفائض كله أصل للمنشأة. يقيد IAS 19 صافي الأصل المعترف به بالقيمة الحالية للمنافع الاقتصادية المتاحة في صورة رد مبالغ أو تخفيض مساهمات مستقبلية؛ ويُفحص حق المنشأة وشروط الخطة والحد الأدنى للتمويل وفق IFRIC 14. يدخل جزء الفائدة المتعلق بأثر السقف في صافي الفائدة بالربح أو الخسارة. أما تغير أثر السقف عدا الفائدة فيعد إعادة قياس بالدخل الشامل الآخر، لا ربحًا أو خسارة تشغيلية. إن لم يبين السؤال إمكان استرداد الفائض، اعرض الفائض الحسابي مع تعليق مبلغ الأصل المعترف به على اختبار السقف.",
          "Plan assets exceeding the obligation do not automatically create an equally large employer asset. IAS 19 limits the recognised net asset to the present value of economic benefits available as refunds or reductions in future contributions; assess the plan terms, the employer's rights and minimum funding under IFRIC 14. Interest on the ceiling adjustment belongs in net interest in profit or loss. Other changes in the ceiling effect are remeasurements in OCI, not profit-or-loss gains or expenses. Without evidence that the surplus is available, show the arithmetic surplus but make the recognised asset conditional on the ceiling test.",
        ),
        keyPoints: [
          text("احسب الفائض أولًا ثم اختبر المنافع الاقتصادية المتاحة للمنشأة.", "Calculate the surplus, then test economic benefits available to the employer."),
          text("ضع تغير السقف خارج عنصر الفائدة في الدخل الشامل الآخر.", "Put changes in the ceiling effect beyond interest in OCI."),
        ],
        reference: "IAS 19.57, 64, 120–126, 127–130; IFRIC 14.7–9",
      },
      {
        title: text("مساهمات ومنافع خلال السنة: احسب الفائدة بحسب توقيت النقد", "Mid-year cash flows: time-weight defined-benefit interest"),
        explanation: text(
          "عند حساب صافي الفائدة لا تضرب رصيد نهاية السنة في معدل الخصم. ابدأ بصافي الالتزام أو الأصل ومعدل الخصم في أول الفترة، ثم راعِ مدة بقاء كل مساهمة من صاحب العمل وكل منفعة مدفوعة من الخطة ضمن أرصدتها. المساهمة في أول السنة تزيد أصول الخطة طوال السنة وتخفض صافي التزام صاحب العمل؛ دفع منفعة من أصول الخطة يخفض الالتزام الإجمالي والأصول معًا، فلا يغير الصافي بذاته، لكنه يؤثر في فائدة كل رصيد بعد تاريخ الدفع. افصل فائدة أصول الخطة المحسوبة بمعدل الخصم عن عائدها الفعلي؛ الفارق إعادة قياس في الدخل الشامل الآخر. لا تقرّب الفائدة الوسيطة قبل استخراج فرق إعادة القياس إذا كانت الأرقام الدقيقة متاحة.",
          "Do not multiply a year-end balance by the discount rate to calculate net interest. Start with the opening net liability or asset and discount rate, then reflect how long each employer contribution and plan benefit payment changes the relevant balances. An opening-date contribution increases plan assets throughout the year and reduces the employer's net liability; a benefit paid from plan assets reduces gross obligation and assets equally, leaving net liability unchanged by the payment itself, but affects interest on each gross balance after payment. Separate discount-rate interest on plan assets from their actual return; the difference is an OCI remeasurement. Keep intermediate interest unrounded when deriving remeasurement if exact amounts are available.",
        ),
        keyPoints: [
          text("احسب فترة بقاء كل مساهمة أو دفعة منافع في الرصيد المناسب.", "Time-weight each contribution and benefit payment in the appropriate balance."),
          text("عائد الأصول الفعلي فوق الفائدة المحسوبة بمعدل الخصم يذهب إلى الدخل الشامل الآخر.", "Actual asset return beyond discount-rate interest goes to OCI."),
        ],
        reference: "IAS 19.120–130",
      },
    ],
    workedExamples: [
      {
        title: text("خمس سنوات: وحدة منفعة مرتبطة بالراتب النهائي", "Five years: one final-salary benefit unit per service year"),
        facts: text(
          "تدفع الخطة عند انتهاء الخدمة بنهاية السنة الخامسة 1% من الراتب النهائي عن كل سنة خدمة. راتب السنة الأولى 10,000 دولار، ويزيد 7% مركبة سنويًا؛ معدل الخصم 10%. كما يفعل المثال المصور في الصفحة 180، نفترض ثبات التقديرات ونتجاهل احتمال المغادرة في تاريخ أبكر أو لاحق. الأرقام أدناه حساب مستقل بالقيم غير المقربة، ثم مقارنة بأرقام الجدول الصحيحة على مستوى الوحدة الكاملة.",
          "The plan pays 1% of final salary for each service year on departure at the end of year 5. Year-1 salary is $10,000, rising by 7% compounded annually; the discount rate is 10%. As in the scanned p180 illustration, assume unchanged estimates and omit the probability of leaving earlier or later. The calculations below use unrounded values and then compare with the source's whole-unit teaching figures.",
        ),
        calculations: [
          text("الراتب النهائي بعد أربع زيادات = 10,000 × 1.07^4 = 13,107.9601؛ وحدة المنفعة لكل سنة = 1% × الراتب النهائي = 131.079601 دولار. في نهاية السنة n، تكلفة الخدمة الحالية = 131.079601 ÷ 1.10^(5 − n)، والالتزام = n × تكلفة الخدمة الحالية.", "Final salary after four increases = $10,000 × 1.07^4 = $13,107.9601; each service year's benefit unit = 1% × final salary = $131.079601. At the end of year n, current service cost = $131.079601 ÷ 1.10^(5 − n), and the obligation = n × that current service cost."),
          text("تكلفة الخدمة للسنوات 1–5، بعد تقريب مستقل إلى سنتين: 89.53، 98.48، 108.33، 119.16، 131.08 دولار. التزامات الإقفال: 89.53، 196.96، 324.99، 476.65، 655.40 دولار. يعرض الجدول المصور التزامات تقريبية بوحدات صحيحة 89، 196، 324، 476، 655؛ لا يُستخدم هذا العرض المقرب لإعادة قياس السنوات التالية.", "Current service costs for years 1–5, each independently rounded to cents: $89.53, $98.48, $108.33, $119.16 and $131.08. Closing obligations: $89.53, $196.96, $324.99, $476.65 and $655.40. The scanned table displays approximate whole-unit obligations of 89, 196, 324, 476 and 655; those display figures are not inputs to later-year measurement."),
          text("في السنة الثانية تنشأ فائدة تقارب 89.52913121 × 10% = 8.95291312 دولار، وتضاف تكلفة خدمة 98.48204433؛ فيكون التزام الإقفال غير المقرب 196.96408866. وفي السنة الخامسة: فائدة 476.65309455 × 10% = 47.66530946، مع خدمة 131.079601، تعطي 655.398005 دولار.", "In year 2, interest is approximately $89.52913121 × 10% = $8.95291312, plus $98.48204433 service cost, giving an unrounded closing obligation of $196.96408866. In year 5, interest of $476.65309455 × 10% = $47.66530946 plus $131.079601 service cost gives $655.398005."),
        ],
        conclusion: text("طريقة الوحدة الإضافية تربط كل سنة خدمة بوحدة من الراتب النهائي المتوقع؛ الفائدة تفك الخصم على الوحدات المكتسبة سابقًا. اختلاف السنتات عن الجدول ذي الأرقام الصحيحة أثر عرض وتقريب، لا تعديل في قاعدة IAS 19. في تقييم فعلي تُدخل أيضًا الافتراضات الديموغرافية المناسبة.", "Projected unit credit ties each service year to a unit of projected final salary; interest unwinds discounting on units already earned. Cent-level differences from the whole-unit table are presentation and rounding, not a different IAS 19 rule. An actual valuation also incorporates relevant demographic assumptions."),
        journalEntries: [
          { label: text("نهاية السنة الأولى: خدمة مكتسبة", "End of year 1: service earned"), debit: text("مصروف خدمة منافع محددة", "Defined-benefit service expense"), credit: text("التزام منفعة محددة", "Defined-benefit obligation"), amount: text("89.53 دولار تقريبًا", "Approximately $89.53") },
          { label: text("السنة الثانية: فك خصم الرصيد الافتتاحي", "Year 2: interest on opening obligation"), debit: text("مصروف صافي فائدة", "Net interest expense"), credit: text("التزام منفعة محددة", "Defined-benefit obligation"), amount: text("8.95 دولار تقريبًا", "Approximately $8.95") },
        ],
        reference: "IAS 19.66–71, 75–98, 120–123",
      },
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
        title: text("قرار المخصص أو الإفصاح أو عدم الإجراء", "Choose provision, contingent disclosure or no entry"),
        explanation: text(
          "عند وجود حدث ماضٍ، افصل ثلاثة أسئلة: هل الالتزام حالي أم محتمل؟ هل خروج الموارد مرجح؟ وهل يمكن تقدير المبلغ بثقة كافية؟ الالتزام الحالي مع خروج مرجح وتقدير موثوق يكوّن مخصصًا. إن بقي الوجود غير مؤكد، أو كان الخروج غير مرجح لكنه غير بعيد، يفصح عن التزام محتمل بدل إثبات مبلغ. إذا كان احتمال الخروج بعيدًا فلا يلزم عادة إفصاح. وفي جانب المطالبات، لا يثبت الأصل المحتمل: يفصح عنه عند رجحان التدفق، ولا يثبت أصلًا إلا عندما يصبح التدفق مؤكدًا فعليًا فلا يبقى احتماليًا. استثناءات النطاق مثل الضمان المالي يجب حسمها قبل تطبيق هذا المخطط.",
          "After a past event, separate three questions: is the obligation present or merely possible, is an outflow probable, and can it be estimated reliably? A present obligation with probable outflow and reliable estimate is a provision. If existence remains uncertain, or outflow is not probable but more than remote, disclose a contingent liability instead of recording an amount. A remote outflow normally needs no disclosure. For possible inflows, do not recognise a contingent asset: disclose when inflow is probable and recognise an asset only once virtually certain, when it ceases to be contingent. Resolve scope exclusions such as financial guarantees before using this decision route.",
        ),
        keyPoints: [
          text("الإفصاح عن التزام محتمل لا يعني تسجيله كالتزام في قائمة المركز المالي.", "Disclosing a contingent liability does not record a statement-of-financial-position liability."),
          text("عند تغير أدلة دعوى قضائية بين سنتين، أعد التقييم في كل تاريخ تقرير ولا تفترض رقم تعويض غير معطى.", "Reassess litigation evidence at each reporting date; do not invent an unspecified damages amount."),
        ],
        reference: "IAS 37.14–16, 25–26, 27–35, 84–89",
      },
      {
        title: text("إعلان إعادة الهيكلة وحدود تكاليفها", "Communicating restructuring and limiting its costs"),
        explanation: text(
          "الخطة التفصيلية المعتمدة داخل الإدارة لا تكفي وحدها لالتزام ضمني. يلزم بدء تنفيذها أو إعلان سماتها الرئيسية للأطراف المتأثرة بما يخلق توقعًا صحيحًا؛ ولبيع عملية، يفحص كذلك اتفاق البيع الملزم. عند نشوء المخصص، لا يدخل فيه سوى النفقات المباشرة الضرورية لإعادة الهيكلة وغير المرتبطة بالنشاط المستمر. التسويق والأنظمة الجديدة وإعادة تدريب الموظفين ليست مخصص إعادة هيكلة لمجرد ورودها في الميزانية التقديرية للخطة.",
          "An internally approved detailed plan alone does not create a constructive obligation. The entity must start implementing it or announce its main features to those affected so as to create a valid expectation; a sale of an operation also requires assessing a binding sale agreement. Once a provision is justified, include only direct expenditures necessarily entailed by restructuring and unrelated to continuing activities. Marketing, new systems and staff retraining are not restructuring-provision costs merely because they appear in a plan budget.",
        ),
        keyPoints: [
          text("فرّق بين قرار الإدارة وبين التزام لم يعد بإمكان المنشأة تفاديه واقعيًا تجاه المتأثرين.", "Distinguish management's decision from a commitment the entity can no longer realistically avoid to those affected."),
          text("لا تُحمّل المخصص تكلفة تحسين التشغيل القادم.", "Do not load future operating enhancements into the provision."),
        ],
        reference: "IAS 37.70–83",
      },
      {
        title: text("لا تنشئ مخصصًا قبل وجود التزام حالي", "A provision starts with a present obligation"),
        explanation: text(
          "وجود نية لإصلاح أصل أو إنفاق تشغيلي في المستقبل لا يكفي. افحص حدثًا ماضيًا أنشأ التزامًا قانونيًا أو ضمنيًا، ورجحان خروج الموارد، وإمكان التقدير الموثوق. الالتزام الضمني يحتاج ممارسة ثابتة أو سياسة منشورة أو إعلانًا محددًا أدى إلى توقع مشروع لدى الأطراف المعنية، لا مجرد قرار داخلي قابل للتغيير. لدى مجموعة كبيرة من ضمانات المطابقة تُقيّم احتمالية الخروج على مستوى المجموعة وتُستخدم القيمة المتوقعة، مع فصل ضمان الخدمة إذا كان التزام أداء مستقلًا.",
          "An intention to repair an asset or incur future operating expenditure is not enough. Identify a past event creating a legal or constructive present obligation, a probable resource outflow and reliable measurement. A constructive obligation requires established practice, published policy or a sufficiently specific statement creating a valid expectation in affected parties, not merely a reversible internal plan. For a large population of assurance warranties assess probability at population level and use expected value, while separating a distinct service warranty if it is a separate performance obligation.",
        ),
        keyPoints: [
          text("المخصص ليس احتياطيًا لتسوية الأرباح أو للصيانة المستقبلية بلا حدث ملزم.", "A provision is not a profit-smoothing reserve or a future-maintenance reserve without an obligating event."),
          text("راجع الالتزام والتقدير في كل تاريخ تقرير، واعكس المخصص إذا لم يعد خروج الموارد مرجحًا.", "Review the obligation and estimate each reporting date and reverse the provision if an outflow is no longer probable."),
        ],
        reference: "IAS 37.10, 14, 24, 36–40, 59–61; IFRS 15.B28–B33",
      },
      {
        title: text("خصم المخصص وفصل حق الاسترداد", "Discount a material provision and separate reimbursement rights"),
        explanation: text(
          "إذا كان أثر القيمة الزمنية جوهريًا، قس الالتزام بالقيمة الحالية للتدفقات المستقبلية باستخدام معدل خصم مناسب قبل الضريبة، دون تكرار المخاطر في التدفقات والمعدل. زيادة المخصص بسبب مرور الوقت تُثبت تكلفة تمويل. لا تخصم مكسب بيع أصل متوقع من مبلغ الالتزام. إذا سيسدد طرف ثالث تكلفة الالتزام، أبق المخصص إجماليًا وأثبت أصل استرداد منفصلًا فقط عندما يكون التحصيل مؤكدًا فعليًا عند تسوية الالتزام، وبما لا يزيد على المخصص؛ يجوز عرض مصروف المخصص صافيًا من الاسترداد في الربح أو الخسارة، لا مقاصة الأصل والالتزام في قائمة المركز المالي.",
          "When the time-value effect is material, measure the obligation at the present value of future outflows using an appropriate pre-tax rate without double-counting risks in cash flows and rate. Recognise passage-of-time unwinding as finance cost. Do not deduct an expected asset-disposal gain from the obligation. If a third party will reimburse settlement, retain the gross provision and recognise a separate reimbursement asset only when receipt on settlement is virtually certain, capped at the provision; the related expense may be shown net in profit or loss, but the asset and liability are not offset in the statement of financial position.",
        ),
        keyPoints: [
          text("الإضافة الأولية لتكلفة أصل مادي تتطلب ارتباط التزام الإزالة أو الاستعادة بذلك الأصل؛ ليست نتيجة آلية لكل مخصص.", "Initial inclusion in PPE cost requires a related dismantling or restoration obligation; it is not automatic for every provision."),
          text("فرّق بين تحديث تقدير التدفقات أو معدل الخصم وبين فك الخصم الناشئ عن مرور الزمن.", "Distinguish a change in estimated flows or discount rate from the unwind caused by time passing."),
        ],
        reference: "IAS 37.36, 45–47, 51–60; IAS 16.16(c); IFRIC 1.4–8",
      },
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
        title: text("استعادة بيئية بعد خمس سنوات: قيمة حالية وفك خصم", "Five-year restoration: present value and discount unwind"),
        facts: text(
          "تتوقع منشأة دفع 5,000,000 دولار لتنظيف موقع بعد خمس سنوات، بمعدل خصم 10% سنويًا. يفترض المثال أن نشاطًا سابقًا أنشأ التزام استعادة حاليًا وأن التدفق والمعدل مناسبان وفق IAS 37؛ لا يذكر السؤال تفاصيل كافية لحسم ما إذا كان المبلغ يُضاف إلى تكلفة أصل مادي أو يُحمل مصروفًا.",
          "An entity expects to pay $5,000,000 to restore a site in five years, using a 10% annual discount rate. Assume past activity has created a present restoration obligation and the cash flow and rate meet IAS 37; the prompt lacks enough facts to decide whether the initial debit belongs in PPE cost or expense.",
        ),
        calculations: [
          text(
            "بالعوامل الدقيقة: القيمة الحالية = 5,000,000 ÷ 1.10^5 = 3,104,606.62، أي 3,104,607 دولار بالتقريب. بعد سنة ومع بقاء التدفق والخصم دون تغيير: 5,000,000 ÷ 1.10^4 = 3,415,067.28؛ تكلفة فك الخصم = 310,460.66، أي 310,461 دولار.",
            "Using exact factors: present value = $5,000,000 / 1.10^5 = $3,104,606.62, or $3,104,607 rounded. One year later, with unchanged cash flow and rate, $5,000,000 / 1.10^4 = $3,415,067.28; discount unwind is $310,460.66, or $310,461.",
          ),
          text(
            "إذا استُخدمت عوامل الجدول المقربة 0.62092 و0.68301، تكون القيم المعروضة 3,104,600 و3,415,050 وفك الخصم 310,450. فرق 17 دولارًا تقريبًا عند نهاية السنة ناشئ من تقريب عوامل الخصم، لا من اختلاف قاعدة الاعتراف.",
            "Using table-rounded factors 0.62092 and 0.68301 gives displayed amounts of $3,104,600 and $3,415,050 and $310,450 unwind. The roughly $17 year-end difference is factor rounding, not a different recognition rule.",
          ),
        ],
        conclusion: text(
          "أثبت مخصص الاستعادة بالقيمة الحالية عند نشوء الالتزام، ثم تكلفة تمويل لفك الخصم كل فترة. لا تُضاف القيمة الأولية لأصل مادي إلا إذا كانت تكلفته مؤهلة وفق IAS 16.",
          "Recognise the restoration provision at present value when the obligation arises, then finance cost for unwinding each period. Include the initial debit in PPE only if it qualifies as that asset's cost under IAS 16.",
        ),
        journalEntries: [
          {
            label: text("نشوء الالتزام — الطرف المدين بحسب طبيعة النفقة", "Obligation arises — debit depends on expenditure nature"),
            debit: text("تكلفة أصل مؤهل أو مصروف استعادة", "Qualifying asset cost or restoration expense"),
            credit: text("مخصص استعادة", "Restoration provision"),
            amount: text("3,104,607 دولار", "$3,104,607"),
          },
          {
            label: text("فك الخصم في السنة التالية", "Next year's discount unwind"),
            debit: text("تكلفة تمويل", "Finance cost"),
            credit: text("مخصص استعادة", "Restoration provision"),
            amount: text("310,461 دولار", "$310,461"),
          },
        ],
        reference: "IAS 37.14, 36, 45–47, 60; IAS 16.16(c); IFRIC 1.4–8",
      },

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
        title: text("الحماية القانونية دليل على السيطرة وليست شرطًا منفردًا", "Legal protection is evidence of control, not the sole test"),
        explanation: text(
          "لأصل غير ملموس محدد، افحص قدرة المنشأة على الحصول على المنافع ومنع الغير من الوصول إليها. الحق القانوني القابل للإنفاذ دليل قوي، لكن IAS 38 لا يجعله الوسيلة الوحيدة في جميع الظروف؛ قد تثبت السرية الفعلية السيطرة على معرفة فنية. في المقابل، مهارات الموظفين والولاء العام للعملاء لا تصبح أصولًا لمجرد إنفاق التدريب أو الإعلان، لأن المنشأة غالبًا لا تتحكم في منافعها المستقبلية على نحو كافٍ. وعند الاستحواذ، افحص ما إذا كانت علاقة العميل أو العلامة أصلًا محددًا منفصلًا عن الشهرة.",
          "For an identifiable intangible, assess the ability to obtain benefits and restrict others' access. Enforceable legal rights are strong evidence but IAS 38 does not make them the only means in every circumstance; effective secrecy can support control of know-how. Staff skills and general customer loyalty are not assets merely because training or advertising was paid for, since the entity generally lacks sufficient control over future benefits. On acquisition, test whether a customer relationship or brand is a separately identifiable asset rather than goodwill.",
        ),
        keyPoints: [
          text("التحديد يتحقق بالقابلية للفصل أو بحق تعاقدي/قانوني، وليس بشرط تحقق الطريقين معًا.", "Identifiability is met by separability or contractual/legal rights, not necessarily both."),
          text("لا تفترض أن انعدام براءة الاختراع يعني انعدام السيطرة، ولا أن كل إنفاق لبناء سمعة يخلق أصلًا.", "Do not assume no patent always means no control, or that reputation-building spend creates an asset."),
        ],
        reference: "IAS 38.11–16, 18–23, 48–50",
      },
      {
        title: text("العمر المحدود وغير المحدد للعلامة المشتراة", "Finite and indefinite life of a purchased brand"),
        explanation: text(
          "ابدأ بتحليل مدة الحماية وإمكان التجديد، والاستعمال المتوقع ودورة المنتج والتقادم والمنافسة والإنفاق المطلوب لحفظ قوة العلامة. العمر غير المحدد لا يعني عمرًا أبديًا؛ بل عدم وجود حد منظور لتدفقات النقد بعد تحليل الأدلة. الأصل ذو العمر المحدود يُطفأ من تاريخ إتاحته للاستخدام، مع مراجعة العمر وطريقة الإطفاء سنويًا. غير المحدد لا يُطفأ، لكنه يخضع لاختبار انخفاض سنوي ومراجعة سنوية لاستمرار هذا التصنيف؛ وإذا تغير التقدير إلى عمر محدود عومل كتغير تقدير مع تقييم الانخفاض.",
          "Assess legal protection and renewals, expected use, product cycles, obsolescence, competition and the spend needed to sustain a brand. Indefinite does not mean infinite: it means no foreseeable cash-inflow limit after reviewing evidence. A finite-life asset is amortised from availability for use, with annual life and method review. An indefinite-life asset is not amortised but is tested annually for impairment and reassessed annually; a change to finite life is a change in estimate and an impairment indicator.",
        ),
        keyPoints: [
          text("لا تُحسب مدة إطفاء رقمية من اسم العلامة وحده.", "A numerical amortisation period cannot be inferred from the brand name alone."),
          text("فترة الحق القانوني قد تُجدد إذا دعمت الأدلة التجديد، لكنها لا تضمن استمرار المنفعة الاقتصادية.", "Renewable legal rights can inform useful life when supported by evidence, but do not guarantee lasting benefits."),
        ],
        reference: "IAS 38.88–110; IAS 36.10",
      },
      {
        title: text("الأصول المشفرة: افحص حقوق الرمز وغرض الاحتفاظ قبل التصنيف", "Cryptoassets: inspect token rights and holding purpose before classification"),
        explanation: text(
          "قرار لجنة تفسيرات IFRS بشأن حيازة العملات المشفرة ينطبق على فئة محددة: أصل رقمي قائم على دفتر موزع ومؤمن بالتشفير، لا يصدره طرف ولا ينشئ عقدًا بين حامل الرمز وطرف آخر. إذا لم يُحتفظ بهذا الأصل للبيع في سياق النشاط المعتاد، يعالج عادةً أصلًا غير ملموسًا وفق IAS 38؛ فهو قابل للفصل والتحويل، وليس نقدًا أو حقًا تعاقديًا في نقد لمجرد قبوله في بعض المدفوعات. يجب فحص شروط كل رمز؛ فالرموز التي تمنح مطالبة تعاقدية أو حقًا في أداة مالية قد تقع في نطاق مختلف.",
          "The IFRS Interpretations Committee's cryptocurrency decision covers a defined subset: a cryptographically secured distributed-ledger asset with no issuer and no contract between the holder and another party. Unless held for sale in the ordinary course of business, such a holding is generally an IAS 38 intangible: it is separable and transferable, but is not cash or a contractual right to cash merely because some merchants accept it. Assess each token's rights; contractual claims or financial-instrument rights can lead to different accounting."
        ),
        keyPoints: [
          text("اسأل أولًا: هل الرمز ضمن نطاق القرار، وهل تحتفظ به المنشأة للبيع في نشاطها المعتاد؟ إذا نعم، انتقل إلى IAS 2 بدل IAS 38.", "First ask whether the token fits the decision's defined subset and is held for sale in ordinary activities; if so, consider IAS 2 instead of IAS 38."),
          text("تبدأ المعالجة في IAS 38 بالتكلفة، ثم يُختار نموذج التكلفة أو إعادة التقييم إذا وُجد سوق نشط قابل للإثبات؛ لا تفترض أن كل سوق تداول نشط بالمعنى المحاسبي.", "IAS 38 starts at cost, then uses the cost model or a revaluation model only where an active market is demonstrable; an exchange listing is not by itself proof of an active market."),
          text("يُقيّم العمر النافع والانخفاض والإفصاح بحسب الوقائع، ولا يُفترض تلقائيًا أن كل العملات المشفرة ذات عمر غير محدد أو أداة مالية.", "Assess useful life, impairment and disclosure from the facts; do not presume every cryptoasset has an indefinite life or is a financial asset.")
        ],
        reference: "IAS 38.8, 12, 72–75, 88–91; IAS 2.6; IFRS Interpretations Committee, Holdings of Cryptocurrencies (June 2019)",
      },

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
          "نطاق اختبار الانخفاض وتوقيته",
          "Impairment scope and timing",
        ),
        explanation: text(
          "يفحص IAS 36 ما إذا كانت القيمة الدفترية للأصل تتجاوز قيمته القابلة للاسترداد. لا يدخل المخزون وأصول ضريبة الدخل المؤجلة والأصول المالية الخاضعة لـ IFRS 9 والأصول المحتفظ بها للبيع في اختباره المعتاد لأن لها معايير قياس خاصة. لكن استبعاد العقارات الاستثمارية يقتصر على ما يُقاس بالقيمة العادلة وفق IAS 40؛ العقار الاستثماري المقاس بالتكلفة يخضع لاختبار IAS 36 عند وجود مؤشر. افحص مؤشرات الانخفاض بنهاية كل فترة تقرير، ومنها تراجع السوق غير المعتاد والتلف والتقادم وتدهور الأداء. وحتى دون مؤشر، اختبر سنويًا الشهرة المكتسبة والأصل غير الملموس ذي العمر غير المحدد والأصل غير الملموس الذي لم يجهز بعد للاستخدام.",
          "IAS 36 tests whether an asset's carrying amount exceeds its recoverable amount. Inventories, deferred tax assets, IFRS 9 financial assets and assets held for sale have their own measurement rules. The investment-property exclusion is limited to IAS 40 property measured at fair value: cost-model investment property remains subject to IAS 36 when an impairment indicator exists. At each reporting date assess indicators such as an unusual market decline, damage, obsolescence or poorer performance. Even without an indicator, test acquired goodwill, indefinite-life intangibles and intangibles not yet available for use annually.",
        ),
        keyPoints: [
          text("لا تستبعد عقار IAS 40 المقاس بالتكلفة من اختبار IAS 36.", "Do not exclude IAS 40 cost-model property from IAS 36."),
          text("أضف الأصل غير الملموس غير الجاهز للاستخدام إلى قائمة الاختبارات السنوية.", "Include an intangible not yet available for use in annual testing."),
          text("افصل خسارة أصل التكلفة في الربح أو الخسارة عن انخفاض الأصل المعاد تقييمه الذي يتبع IAS 16.", "Distinguish a cost-model loss in profit or loss from a revalued asset's IAS 16 decrease."),
        ],
        reference: "IAS 36.2, 9–12, 59–61; IAS 40.56",
      },
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
      {
        title: text("تحديد وحدة توليد النقد وتوزيع الشهرة", "Identify a CGU and allocate goodwill"),
        explanation: text(
          "إذا تعذر تحديد القيمة القابلة للاسترداد لأصل منفرد لعدم استقلال تدفقاته، انتقل إلى أصغر مجموعة أصول تولد تدفقات داخلة مستقلة إلى حد كبير. راجع الموقع وقاعدة العملاء، وطريقة متابعة الإدارة للأداء، والقدرة القانونية والتشغيلية على استمرار النشاط أو إنهائه. لا تجعل الشراء المركزي وحده سببًا لدمج متاجر متمايزة؛ ولا تفصل خط حافلات لا تسمح الاتفاقية بإيقافه وحده. ثبت حدود الوحدات من فترة لأخرى ما لم يوجد مبرر للتغيير. خصص الشهرة للوحدة أو مجموعة الوحدات المنتفعة من منافع الاستحواذ عند أدنى مستوى تراقبها فيه الإدارة، بشرط ألا تتجاوز قطاعًا تشغيليًا قبل التجميع.",
          "If an asset's recoverable amount cannot be determined separately because its inflows are not largely independent, use the smallest group of assets with largely independent inflows. Consider location and customer base, how management monitors performance and whether operations can legally and practically continue or cease separately. Central purchasing alone need not combine distinct stores; a bus route that the contract does not permit discontinuing may not be a separate unit. Identify units consistently from period to period unless a change is justified. Allocate goodwill to benefiting units or groups at the lowest internal monitoring level, no larger than an operating segment before aggregation.",
        ),
        keyPoints: [
          text("استقلال التدفقات الداخلة هو جوهر تحديد الوحدة، لا مجرد فصل التكاليف.", "Independent cash inflows are central; separately tracked costs are not enough."),
          text("تحدد قيمة الوحدة الدفترية والقابلة للاسترداد على أساس متسق، ولا تخصم التزامًا معترفًا به إلا في الحالة المناسبة.", "Measure CGU carrying and recoverable amounts consistently; include a recognised liability only when the test requires it."),
        ],
        reference: "IAS 36.6, 66–80",
      },
      {
        title: text("توزيع خسارة الوحدة وحدود تخفيض الأصول", "Allocate CGU loss within asset floors"),
        explanation: text(
          "اختبر أولًا الأصول الفردية التي يظهر لها انخفاض أو تحكمها معايير قياس خاصة. إن كانت قيمة الوحدة الدفترية أعلى من القابلة للاسترداد، خفض الشهرة المخصصة أولًا، ثم وزع الرصيد على الأصول الأخرى الخاضعة للتوزيع بنسبة قيمها الدفترية. لا تخفض أي أصل عن الأعلى من قيمته العادلة ناقص تكاليف التصرف إن أمكن قياسها، وقيمة استخدامه إن أمكن تحديدها، والصفر. أعد توزيع ما منعه الحد الأدنى على بقية الأصول المؤهلة. وفي المثال العددي، افتراض بقاء الأصول المتداولة عند 20 مليونًا وتوزيع 6 ملايين بين المبنى والآلات بنسبة 30:6 يحتاج تحققًا من قياس تلك الأصول واتساق اختبار الوحدة؛ لا يكفي القول إنها متداولة.",
          "Test separately impaired assets and assets governed by other measurement Standards first. If a unit's carrying amount exceeds recoverable amount, reduce allocated goodwill first, then allocate the balance pro rata to other eligible assets. Do not reduce an asset below the highest of measurable fair value less costs of disposal, determinable value in use and zero; redistribute any amount blocked by that floor. In the numerical example, leaving current assets at $20m and splitting $6m over building and plant in a 30:6 ratio requires evidence about those assets and consistency of the CGU test, not merely their current classification.",
        ),
        keyPoints: [
          text("الشهرة أولًا، ثم الأصول المؤهلة بنسبة قيمها، مع مراعاة الحدود الدنيا.", "Goodwill first, then eligible assets pro rata, subject to individual floors."),
          text("لا تفترض أن كل الأصول المتداولة مقاسة بالقيمة العادلة أو خارج المقارنة.", "Do not assume all current assets are fair-valued or excluded from the comparison."),
        ],
        reference: "IAS 36.2, 76–79, 97–98, 104–108",
      },
      {
        title: text("التزام ملازم للأصل: لا تخلط القيمة الإجمالية والصافية", "An inseparable liability: never mix gross and net bases"),
        explanation: text(
          "عندما لا يمكن تحديد قيمة التصرف لوحدة توليد النقد دون أن يتحمل المشتري التزامًا معترفًا به، اطرح الالتزام من القيمة الدفترية للوحدة ومن قيمة الاستخدام لتبقى المقارنة متسقة. في مثال منصة الحفر: أصل 3 ملايين والتزام تفكيك 0.6، وعرض شراء صافٍ 2.8 يشمل تحمل الالتزام، وقيمة استخدام قبل الالتزام 3.3. صافي الدفترية 2.4، وصافي الاستخدام 2.7، والقابلة للاسترداد 2.8 مليون؛ لذلك لا تنشأ خسارة انخفاض. لا تقارن عرضًا صافيًا 2.8 بأصل إجمالي 3 لاستنتاج خسارة 0.2. يظل الأصل والالتزام منفصلين في العرض إن لم يحدث بيع.",
          "When the disposal value of a unit cannot be determined without a buyer assuming a recognised liability, deduct that liability from both the unit's carrying amount and value in use to compare like with like. For the platform: a $3m asset and $0.6m dismantling liability, a net $2.8m bid including assumption, and $3.3m value in use before the liability give net carrying $2.4m, net use $2.7m and recoverable $2.8m; no impairment. Do not compare a net $2.8m bid with the gross $3m asset to infer a $0.2m loss. Without disposal, the asset and liability remain separately presented.",
        ),
        keyPoints: [
          text("إذا دخل الالتزام في قيمة البيع، عالجه باتساق في القيمة الدفترية والاستخدام.", "If disposal value includes the liability, treat it consistently in carrying and use values."),
          text("فائض القابلة للاسترداد على الدفترية لا يعني إعادة تقييم الأصل أو إثبات ربح.", "Headroom over carrying amount is not an asset revaluation or a recognised gain."),
        ],
        reference: "IAS 36.29, 75–79",
      },
      {
        title: text("عكس الانخفاض: حدد التغير الحقيقي وسقف كل أصل", "Reversing impairment: identify changed estimates and each asset cap"),
        explanation: text(
          "افحص بنهاية فترة التقرير مؤشرات زوال الانخفاض السابق. لا يكفي ارتفاع القيمة القابلة للاسترداد بمرور الزمن؛ يلزم تغير في التقديرات التي بُني عليها الاختبار السابق. لا تعكس خسارة الشهرة مطلقًا. في غير الشهرة، لا ترفع القيمة الدفترية بعد العكس فوق قيمتها التي كانت ستظهر لولا الانخفاض، بعد الإهلاك أو الإطفاء. وإذا كان الاختبار لوحدة مولدة للنقد، يوزع العكس على أصولها عدا الشهرة بنسبة قيمها الدفترية، مع مراعاة القيمة القابلة للاسترداد الفردية متى أمكن تحديدها وسقف القيمة دون انخفاض. بعد ذلك حدّث الإهلاك المستقبلي. عكس أصل التكلفة يذهب عادة إلى الربح أو الخسارة؛ أما الأصل المعاد تقييمه فيتبع أحكام إعادة التقييم.",
          "At each reporting date look for evidence that a prior loss has diminished. A rise caused solely by passage of time is insufficient: estimates used in the prior recoverable-amount test must have changed. Never reverse goodwill impairment. For other assets, cap the post-reversal carrying amount at what it would have been without impairment, after depreciation or amortisation. For a CGU, allocate reversal to its assets other than goodwill pro rata by carrying amount, subject to each asset's determinable recoverable amount and no-impairment carrying cap. Then revise future depreciation. A cost-model reversal generally enters profit or loss; a revalued asset follows revaluation accounting.",
        ),
        keyPoints: [
          text("في حالة الوحدة 140 إلى 60 ثم 90 مليونًا، حد الأصل الملموس دون انخفاض 70 مليونًا؛ لا يعني ذلك ثبوت عكس 10 ملايين ما لم تُعرف قيمته الفعلية بعد ثلاث سنوات.", "In the CGU case, 140 falls to 60 then recoverable amount rises to 90; the tangible no-impairment cap is 70, but a 10m reversal is not established without its actual carrying amount three years later."),
          text("في سؤال الأصل غير القابل للإهلاك: 300,000 إلى 280,000 ثم قابل للاسترداد 310,000؛ العكس 20,000 فقط لا 30,000.", "For the non-depreciable asset: 300,000 to 280,000 then recoverable 310,000; reverse only 20,000, not 30,000."),
        ],
        reference: "IAS 36.110–115, 117–124",
      },
    ],
    workedExamples: [
      {
        title: text("أصل متلف وشهرة في اختبار وحدة واحدة", "Destroyed asset and goodwill in one CGU test"),
        facts: text(
          "تبلغ القيمة الدفترية لنشاط مكتسب 4.5 ملايين دولار: أصول ملموسة 4 ملايين وشهرة 0.5 مليون. دمر حادث أصلًا غير مؤمن عليه قيمته الدفترية مليون، وأصبحت القيمة القابلة للاسترداد للنشاط المتبقي 3.1 ملايين.",
          "An acquired business carries $4.5m: tangible assets $4m and goodwill $0.5m. An uninsured asset carried at $1m is destroyed; the remaining business has a recoverable amount of $3.1m.",
        ),
        calculations: [
          text("ألغِ الأصل المتلف أولًا: 4.5 − 1 = 3.5 ملايين قيمة دفترية للوحدة المتبقية.", "Write off the destroyed asset first: $4.5m − $1m = $3.5m carrying amount for the remaining unit."),
          text("خسارة الوحدة اللاحقة = 3.5 − 3.1 = 0.4 مليون؛ تحملها الشهرة أولًا فتنخفض من 0.5 إلى 0.1 مليون. الأصول الملموسة المتبقية 3 ملايين؛ المجموع 3.1.", "Further CGU impairment is $3.5m − $3.1m = $0.4m; reduce goodwill first from $0.5m to $0.1m. Tangible assets remaining are $3m; total $3.1m."),
          text("الأثر الكلي في الربح أو الخسارة 1.4 مليون = مليون شطب أصل متلف + 0.4 مليون انخفاض شهرة، وليس 1.4 مليون تخفيضًا للشهرة.", "Total profit-or-loss effect is $1.4m = $1m destroyed-asset write-off plus $0.4m goodwill impairment, not a $1.4m charge against goodwill."),
        ],
        conclusion: text(
          "افصل فحص الأصل الفردي عن فحص الوحدة ثم طبّق أولوية تخفيض الشهرة على خسارة الوحدة فقط.",
          "Separate the individual-asset write-off from the subsequent CGU test; goodwill absorbs the unit loss first, not the destroyed asset's own loss.",
        ),
        journalEntries: [
          {
            label: text("شطب الأصل المتلف", "Write off destroyed asset"),
            debit: text("خسارة الأصل المتلف", "Destroyed-asset loss"),
            credit: text("الأصل الملموس", "Tangible asset"),
            amount: text("1 مليون دولار", "$1 million"),
          },
          {
            label: text("خسارة الوحدة المخصصة للشهرة", "CGU loss allocated to goodwill"),
            debit: text("خسارة انخفاض", "Impairment loss"),
            credit: text("الشهرة", "Goodwill"),
            amount: text("0.4 مليون دولار", "$0.4 million"),
          },
        ],
        reference: "IAS 36.97–98, 104; IAS 16.67",
      },
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
      {
        title: text("التأكد المعقول والعرض ورد المنحة", "Reasonable assurance, presentation and repayment"),
        explanation: text(
          "لا تعترف بالمنحة الحكومية لمجرد قبض النقد؛ يلزم تأكيد معقول باستيفاء الشروط وتلقيها. اعترف بمنحة الدخل بصورة منهجية في الفترات التي تتحمل فيها المصروفات المرتبطة، كدخل مستقل أو تخفيض للمصروف ذي الصلة. واعرض منحة الأصل إما دخلًا مؤجلًا أو خصمًا من القيمة الدفترية للأصل، دون جمع الطريقتين. إذا أصبحت المنحة واجبة الرد، عالجها كتغير في تقدير محاسبي: استخدم الرصيد المؤجل أولًا لمنحة الدخل، وحمّل الفائض على الربح أو الخسارة؛ ولمنحة الأصل عدّل قيمة الأصل أو رصيد الدخل المؤجل وأثبت فورًا الإهلاك الإضافي التراكمي اللازم عند طريقة الخصم، ثم افحص انخفاض القيمة عند الاقتضاء.",
          "Cash receipt alone does not establish a government grant: reasonable assurance of compliance and receipt is required. Recognise income-related grants systematically over the periods bearing the related costs, either as separate income or a reduction of related expense. Present an asset-related grant as deferred income or deduct it from the asset's carrying amount, never both. If a grant becomes repayable, treat it as an estimate change: apply any unamortised income-grant credit first and expense any excess; for an asset grant adjust asset carrying amount or deferred income, immediately recognise any cumulative extra depreciation required by the deduction method, and assess impairment where relevant.",
        ),
        keyPoints: [
          text("قبض المنحة لا يثبت بذاته الوفاء بالشروط.", "Receipt alone does not prove compliance with conditions."),
          text("عرض منحة الأصل بطريقتين بديلتين لا متزامنتين.", "Asset-grant presentations are alternatives, not simultaneous entries."),
          text("رد المنحة قد يوجب إهلاكًا إضافيًا فوريًا واختبار انخفاض قيمة.", "Repayment can require immediate catch-up depreciation and an impairment assessment."),
        ],
        reference: "IAS 20.7, 12, 24–29, 32",
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
      {
        title: text("منحة آلة بنسبة 20%: طريقتا العرض والنتيجة نفسها", "20% machinery grant: two presentations, same profit"),
        facts: text(
          "آلة تكلفتها 100,000 دولار وعمرها أربع سنوات بلا قيمة متبقية؛ حصلت الشركة على منحة حكومية تعادل 20% من التكلفة، أي 20,000. الربح قبل إهلاك الآلة والمنحة 50,000 كل سنة. افترض تحقق شروط الاعتراف، وإهلاك الآلة بالقسط الثابت.",
          "A machine costs $100,000, lasts four years and has nil residual value. The entity receives a government grant of 20% of cost, or $20,000. Annual profit before machine depreciation and grant is $50,000. Assume the grant recognition conditions are met and straight-line depreciation.",
        ),
        calculations: [
          text("عند خصم المنحة من قيمة الأصل: الأساس 100,000 − 20,000 = 80,000؛ الإهلاك السنوي 20,000؛ الربح السنوي 50,000 − 20,000 = 30,000. القيم الدفترية بنهاية السنوات 1–4: 60,000 ثم 40,000 ثم 20,000 ثم صفر.", "Deduction method: asset base $100,000 − $20,000 = $80,000; annual depreciation $20,000; annual profit $50,000 − $20,000 = $30,000. Year-end carrying amounts for years 1–4 are $60,000, $40,000, $20,000 and nil."),
          text("عند إثبات دخل مؤجل: إهلاك الأصل الإجمالي 100,000 ÷ 4 = 25,000 سنويًا؛ تحرير المنحة 20,000 ÷ 4 = 5,000 سنويًا؛ الربح 50,000 − 25,000 + 5,000 = 30,000. القيم الدفترية للأصل 75,000/50,000/25,000/صفر، وأرصدة الدخل المؤجل المقابلة 15,000/10,000/5,000/صفر.", "Deferred-income method: gross depreciation $100,000 ÷ 4 = $25,000 a year; release $20,000 ÷ 4 = $5,000 a year; profit $50,000 − $25,000 + $5,000 = $30,000. Asset carrying amounts are $75,000/$50,000/$25,000/nil and corresponding deferred-income balances $15,000/$10,000/$5,000/nil."),
          text("مجموع الأرباح عبر السنوات الأربع 120,000 في الطريقتين، لكن عرض الأصل والالتزام المؤجل يختلف؛ لا تسجل إيراد 5,000 مع أساس أصل مخفّض 80,000 لأن ذلك يكرر أثر المنحة.", "Total four-year profit is $120,000 under either method, but asset and deferred-income presentation differ. Do not add $5,000 grant income to an already reduced $80,000 asset base, which would double-count the grant."),
        ],
        conclusion: text(
          "طريقتا IAS 20.24 بديلتان في العرض مع الأثر الصافي نفسه على ربح المثال. قبل التطبيق العملي تحقق من الشروط، وتقييم الضريبة، وأي تغير لاحق أو التزام برد المنحة.",
          "IAS 20.24 permits alternative presentations with the same net profit in this fact pattern. In practice, verify conditions, tax effects, later changes and any repayment obligation.",
        ),
        journalEntries: [
          {
            label: text("الطريقة الأولى: منحة تخصم من تكلفة الآلة", "Deduction method: grant reduces asset base"),
            debit: text("نقدية", "Cash"),
            credit: text("أصل الآلة", "Machinery asset"),
            amount: text("20,000", "20,000"),
          },
          {
            label: text("الطريقة الثانية: تسجيل المنحة كدخل مؤجل", "Deferred-income method: initial grant"),
            debit: text("نقدية", "Cash"),
            credit: text("دخل منحة مؤجل", "Deferred grant income"),
            amount: text("20,000", "20,000"),
          },
          {
            label: text("الطريقة الثانية: تحرير المنحة سنويًا", "Deferred-income method: annual release"),
            debit: text("دخل منحة مؤجل", "Deferred grant income"),
            credit: text("إيراد منحة", "Grant income"),
            amount: text("5,000 سنويًا", "5,000 each year"),
          },
        ],
        reference: "IAS 20.7, 12, 24–27; IAS 16.50–55",
      },
    ],
  },
  "IAS 40": {
    sections: [
      {
        title: text("أرض غير محددة الاستعمال والعقار المشغول من المالك", "Undetermined-use land versus owner-occupied property"),
        explanation: text(
          "يشمل العقار الاستثماري أرضًا محتفظًا بها لزيادة قيمتها أو لم يتحدد استعمالها المستقبلي بعد، وكذلك عقارًا مؤجرًا لتحقيق الإيجار، لا عقارًا تستخدمه المنشأة في الإدارة أو الإنتاج ولا عقارًا معدًا للبيع في النشاط العادي. عند وجود أجزاء مختلفة، افصلها إذا أمكن بيعها أو تأجيرها تمويليًا كل على حدة. لا تكفي نية الإدارة المنفردة لنقل التصنيف؛ يلزم تغير استخدام تثبته الوقائع، مثل انتهاء إشغال المالك أو بدء التطوير لغرض الاستخدام الذاتي.",
          "Investment property includes land held for capital appreciation or with currently undetermined future use, and property held for rentals. It excludes owner-occupied production or administrative property and ordinary-course inventory. Separate mixed-use portions when they can be sold or finance-leased separately. Management intention alone is not enough for transfer; evidence of changed use, such as ending owner-occupation or commencing development for own use, is required.",
        ),
        keyPoints: [
          text("الأرض غير المحددة الاستعمال تدخل IAS 40 إذا لم تخصص للإشغال أو للبيع في النشاط العادي.", "Undetermined-use land falls under IAS 40 when not designated for owner-occupation or ordinary-course sale."),
          text("حالة المالك الذي يؤجر مبنى لتابعة تختلف بين القوائم الفردية والموحدة.", "A parent's lease of a building to a subsidiary can differ between separate and consolidated statements."),
        ],
        reference: "IAS 40.5, 7–10, 57",
      },
      {
        title: text("تاريخ النقل إلى نموذج القيمة العادلة وما بعده", "Transfer-date revaluation versus subsequent fair value"),
        explanation: text(
          "إذا انتهى استخدام مبنى كمقر إداري وصار مؤجرًا، أهلكه حتى تاريخ تغير الاستخدام وفق IAS 16. عند تحويله إلى عقار استثماري يقاس بالقيمة العادلة، عالج الفرق بين قيمته الدفترية وقيمته العادلة في ذلك التاريخ كما تعالج إعادة تقييم IAS 16: قد يذهب العكس المحدود لخسارة سابقة إلى الربح أو الخسارة، وتذهب الزيادة الباقية إلى الدخل الشامل الآخر. بعد النقل، تسجل تغيرات القيمة العادلة اللاحقة للعقار الاستثماري في الربح أو الخسارة وفق IAS 40، لا في فائض إعادة التقييم. أما نموذج التكلفة فيتبع الإهلاك والانخفاض مع الإفصاح عن القيمة العادلة.",
          "Depreciate a former administrative building under IAS 16 until the evidenced change-of-use date. On transfer to investment property carried at fair value, treat the difference between carrying amount and fair value at that date like an IAS 16 revaluation: a limited reversal of a prior loss may enter profit or loss and the remaining increase enters other comprehensive income. Subsequent fair-value movements under IAS 40 enter profit or loss, not revaluation surplus. Under the cost model, apply depreciation and impairment and disclose fair value.",
        ),
        keyPoints: [
          text("فرق يوم النقل ليس بالضرورة مكسب قيمة عادلة في الربح أو الخسارة.", "The transfer-date difference is not automatically a fair-value gain in profit or loss."),
          text("التغيرات بعد النقل، بنموذج القيمة العادلة، تدخل الربح أو الخسارة.", "Post-transfer fair-value changes enter profit or loss under the fair value model."),
        ],
        reference: "IAS 40.30–35, 56–62, 79(e); IAS 16.39–40",
      },
    ],
    workedExamples: [
      {
        title: text("مبنى مقر أصبح مؤجرًا في منتصف السنة", "Head office becomes a rental property mid-year"),
        facts: text(
          "تكلفة مبنى المقر 250,000 دولار من 1 يناير 20X0، وعمر الإهلاك 50 عامًا. توقف استخدامه الإداري وبدأ تأجيره في 30 يونيو 20X9. قيمته العادلة عند النقل 350,000 دولار، وفي نهاية سنة لاحقة 380,000. تفترض الحسابات عدم خسارة انخفاض سابقة.",
          "A head-office building cost $250,000 on 1 January 20X0 and has a 50-year depreciable life. Administrative use ended and letting began on 30 June 20X9. Fair value was $350,000 at transfer and $380,000 at a later year-end. Calculations assume no prior impairment loss.",
        ),
        calculations: [
          text("إهلاك 9.5 سنوات = (250,000 ÷ 50) × 9.5 = 47,500؛ القيمة الدفترية يوم النقل 202,500؛ الزيادة إلى 350,000 = 147,500.", "Depreciation for 9.5 years = ($250,000 ÷ 50) × 9.5 = $47,500; transfer-date carrying amount $202,500; uplift to $350,000 = $147,500."),
          text("في غياب خسارة سابقة، تسجل زيادة 147,500 في الدخل الشامل الآخر وفائض إعادة التقييم. تغير لاحق من 350,000 إلى 380,000 = 30,000 في الربح أو الخسارة.", "Absent a prior loss, $147,500 goes to other comprehensive income and revaluation surplus. A later rise from $350,000 to $380,000 gives a $30,000 profit-or-loss fair-value gain."),
        ],
        conclusion: text(
          "يختلف موضع الاعتراف بفرق يوم النقل عن التغير اللاحق في القيمة العادلة. لا تضف إيرادات إيجار أو آثارًا ضريبية غير معطاة.",
          "The transfer-date difference and later fair-value movement are recognised in different places. Do not invent rental income or tax effects.",
        ),
        journalEntries: [
          {
            label: text("إهلاك نصف سنة قبل النقل", "Six-month depreciation before transfer"),
            debit: text("مصروف إهلاك", "Depreciation expense"),
            credit: text("مجمع الإهلاك", "Accumulated depreciation"),
            amount: text("2,500", "2,500"),
          },
          {
            label: text("نقل القيمة الدفترية إلى العقار الاستثماري", "Reclassify pre-transfer carrying amount"),
            debit: text("العقار الاستثماري", "Investment property"),
            credit: text("مبنى مشغول من المالك، بالقيمة الدفترية الصافية", "Owner-occupied building at net carrying amount"),
            amount: text("202,500", "202,500"),
          },
          {
            label: text("إثبات الزيادة يوم النقل — دون خسارة سابقة", "Transfer-date uplift — absent prior loss"),
            debit: text("العقار الاستثماري، صافي الزيادة", "Investment property, net uplift"),
            credit: text("فائض إعادة التقييم عبر الدخل الشامل الآخر", "Revaluation surplus through other comprehensive income"),
            amount: text("147,500", "147,500"),
          },
          {
            label: text("زيادة القيمة العادلة اللاحقة", "Subsequent fair-value rise"),
            debit: text("العقار الاستثماري", "Investment property"),
            credit: text("مكسب القيمة العادلة في الربح أو الخسارة", "Fair-value gain in profit or loss"),
            amount: text("30,000", "30,000"),
          },
        ],
        reference: "IAS 40.35, 57, 61–62; IAS 16.39–40, 50–55",
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
      {
        title: text("الاقتراض المخصص ودخل الاستثمار المؤقت", "Specific borrowing and temporary investment income"),
        explanation: text(
          "إذا اقترضت المنشأة مبلغًا خصيصًا لإنشاء أصل مؤهل، فإن المبلغ الممكن رسملته خلال الفترة المؤهلة هو تكلفة الاقتراض الفعلية على ذلك التمويل مطروحًا منها دخل استثمار الأموال المقترضة مؤقتًا قبل استخدامها. لا تبدأ الرسملة بمجرد سحب القرض؛ يلزم في الوقت نفسه إنفاق على الأصل، وتكبد تكلفة اقتراض، ومباشرة أنشطة إعداد الأصل لاستخدامه أو بيعه. إذا كان قرض واحد يمول أصلين، فوزع التكلفة والدخل على أساس يمكن إثباته من استخدام الأموال، ولا تفترض تاريخًا لم تبدأ فيه الأنشطة من وصف عام يقول «خلال السنة».",
          "For funds borrowed specifically for a qualifying asset, capitalisable costs during the eligible period are actual borrowing costs on those funds less income from their temporary investment. Drawing the loan alone does not start capitalisation: expenditure, borrowing costs and necessary preparation activities must all be underway. If one loan funds two assets, allocate cost and investment income on a supportable use-of-funds basis, and do not infer an exact activity start date from a broad 'during the year' description.",
        ),
        keyPoints: [
          text("خصم دخل الاستثمار المؤقت يخص التمويل المخصص في فترة الرسملة المؤهلة.", "Deduct temporary-investment income on specific borrowings in the eligible capitalisation period."),
          text("ثلاثة شروط بدء الرسملة يجب أن تتحقق معًا لكل أصل.", "All three commencement conditions must be met together for each asset."),
        ],
        reference: "IAS 23.8, 12–13, 17–18",
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
        title: text("تاريخ القياس: خدمة الموظف والسلع من المورد", "Measurement date: employee service and supplier goods"),
        explanation: text(
          "في المعاملة المسددة بحقوق الملكية مع الموظفين أو من يقدمون خدمات مماثلة، تقاس الخدمة بالرجوع إلى القيمة العادلة للأدوات في تاريخ المنح. أما مع مورد غير موظف، فيفترض إمكان قياس السلع أو الخدمات المستلمة مباشرة بصورة موثوقة، ويكون القياس عند الحصول على السلع أو تقديم الخدمة. إذا دُحض هذا الافتراض، يقاس المقابل بالرجوع إلى القيمة العادلة للأدوات في تاريخ الحصول على السلع أو تقديم الخدمة أيضًا، وليس تلقائيًا بتاريخ منح الموظفين. حدد صفة الطرف وتاريخ تلقي الخدمة قبل اختيار قيمة الخيار من السؤال.",
          "For equity-settled transactions with employees and others providing similar services, measure services by reference to the instruments' grant-date fair value. For a non-employee supplier, goods or services are presumed directly measurable at reliable fair value, measured when goods are obtained or services rendered. If that presumption is rebutted, use instrument fair value at the date goods are obtained or services rendered as well, rather than automatically using the employee grant-date rule. Identify the counterparty and receipt date before selecting an option value."
        ),
        keyPoints: [
          text("قاعدة تاريخ المنح لخدمات الموظفين لا تعمم على جميع الموردين.", "Do not apply the employee grant-date rule to all suppliers."),
          text("حدد أولًا هل يمكن قياس السلعة أو الخدمة المستلمة مباشرة.", "First assess whether the received goods or services can be measured directly.")
        ],
        reference: "IFRS 2.10–13",
      },

      {
        title: text("إلغاء المنحة يختلف عن سقوطها لعدم إكمال الخدمة", "Cancellation differs from failure to complete service"),
        explanation: text(
          "افحص سبب زوال الحق قبل حساب المصروف. إذا لم يكمل الموظف خدمة مشروطة بالمنحة، يحدث سقوط بسبب عدم استيفاء شرط استحقاق غير سوقي؛ يعدل العدد المتوقع استحقاقه ويعكس ما سبق إثباته عن تلك الأدوات عند ثبوت عدم استحقاقها. أما إلغاء منحة مسددة بحقوق الملكية أثناء فترة الاستحقاق، بخلاف السقوط لعدم استيفاء شروط الاستحقاق، فيعجل إثبات المبلغ الذي كان سيثبت عن بقية الفترة. ينطبق تحليل الإلغاء أيضًا على اختيار المنشأة أو الطرف المقابل عدم استيفاء شرط غير استحقاقي يقع تحت سيطرته وفق IFRS 2.28A. لذلك لا تعتبر كل مغادرة أو عدم ممارسة خيار إلغاءً يوجب التعجيل؛ فالخيار الذي استحق بالفعل ثم لم يمارس لا يعكس تكلفته السابقة. وعند منح أدوات بديلة راجع شروط تعيين البديل ومعالجة التعديل.",
          "Identify why the right ends before measuring expense. Failure to complete a required service period is forfeiture for failure of a non-market vesting condition: update vesting numbers and reverse amounts for instruments that will not vest. By contrast, cancellation of an equity-settled grant during vesting, other than forfeiture for failure of vesting conditions, accelerates the amount otherwise recognised over the remaining period. The cancellation analysis also applies when the entity or counterparty chooses not to meet a non-vesting condition within its control under IFRS 2.28A. Do not treat every departure or unexercised option as cancellation requiring acceleration: cost is not reversed when an already vested option is left unexercised. For replacement instruments, assess replacement designation and modification requirements."
        ),
        keyPoints: [
          text("حدد هل الحدث عدم استيفاء شرط خدمة أم إلغاء منحة قائمة.", "Determine whether the event is failure of a service condition or cancellation of an existing award."),
          text("وثق سبب التعجيل أو العكس؛ أثر الحدث يعتمد على نوع الشرط.", "Document the reason for acceleration or reversal; the condition type determines the effect.")
        ],
        reference: "IFRS 2.19–23, 27–28A",
      },

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
      {
        title: text("عند تحويل الوعد إلى نقد: التزام يعاد قياسه", "A cash promise creates a remeasured liability"),
        explanation: text(
          "في منحة الخيارات التي تسوّى بأسهم، يقابل تكلفة خدمة الموظفين احتياطي في حقوق الملكية على أساس القيمة العادلة بتاريخ المنح وعدد الأدوات المتوقع استحقاقها. إذا كان الوعد بدلًا من ذلك دفع نقد يعتمد على قيمة السهم، يقابل الخدمة التزام، ويعاد قياس هذا الالتزام بالقيمة العادلة لكل حق نقدي في كل تاريخ تقرير وعند التسوية؛ تذهب حركة القياس إلى الربح أو الخسارة. خلال فترة الخدمة يُضرب عدد الحقوق المتوقع استحقاقها في قيمتها العادلة الحالية وفي نسبة الخدمة المنقضية؛ وبعد الاستحقاق يستمر تحديث الالتزام حتى السداد. لا يُنشأ قيد إصدار أسهم عند الدفع النقدي، ولا يجوز استخدام قيمة خيار التسوية بالأسهم بتاريخ المنح لحساب التزام نقدي لم تُذكر قيمه العادلة اللاحقة.",
          "An equity-settled option grant credits an equity reserve for employee service using grant-date fair value and the number expected to vest. If the promise is instead cash based on share value, the service credits a liability remeasured to each cash right's fair value at every reporting date and settlement; remeasurement changes go to profit or loss. During service, multiply rights expected to vest by current fair value and elapsed service proportion; after vesting, continue remeasuring until payment. Cash payment creates no share-issue entry, and the equity option's grant-date value cannot stand in for missing later fair values of the cash right.",
        ),
        keyPoints: [
          text("الأسهم: مصروف خدمة مقابل حقوق ملكية؛ النقد: مصروف خدمة وتغير قيمة مقابل التزام.", "Shares: service cost against equity; cash: service cost and fair-value changes against a liability."),
          text("بغياب قيمة الحق النقدي في تواريخ التقرير، اشرح طريقة الحساب ولا تختلق مبالغ.", "Without reporting-date cash-right fair values, explain the method rather than inventing amounts."),
        ],
        reference: "IFRS 2.14–23, 30–33",
      },
      {
        title: text("تعديل سعر ممارسة الخيار: أضف المنفعة ولا تمحُ المنحة الأصلية", "Option repricing: add the benefit, retain the original grant"),
        explanation: text(
          "إذا خفضت المنشأة سعر ممارسة خيار موظف أثناء فترة الاستحقاق وزادت قيمته العادلة، تستمر أولًا في إثبات تكلفة المنحة الأصلية بالقيمة العادلة بتاريخ المنح طوال فترة خدمتها الأصلية، بحسب عدد الخيارات المتوقع استحقاقها. ثم تقيس الزيادة في القيمة العادلة في لحظة التعديل: قيمة الخيار بعد التعديل ناقص قيمته قبل التعديل في التاريخ نفسه، وتوزعها على الخدمة المتبقية حتى استحقاق الأدوات المعدلة. لا تستبدل قيمة المنحة الأصلية بالقيمة الجديدة كاملة ولا تعترف بالزيادة كلها فورًا إذا بقيت خدمة مطلوبة. عند تغير تقدير المغادرين، أعد حساب المصروف التراكمي لكل مكوّن ثم اطرح ما سبق إثباته لاستخراج مصروف السنة.",
          "When repricing an employee option during vesting increases its fair value, continue recognising the original award's grant-date fair value over its original service period for options expected to vest. Then measure incremental fair value at the modification date: the modified option's fair value less the original option's fair value immediately before the change, both measured on that date, and recognise it over remaining service until the modified award vests. Do not replace the whole original grant-date value with the new value or recognise the entire increment immediately while service remains. When leaver estimates change, recompute each component's cumulative cost and deduct previously recognised expense to obtain the current-year charge.",
        ),
        keyPoints: [
          text("المقارنة بين القيمتين قبل التعديل وبعده تجري في تاريخ التعديل نفسه، لا بين تاريخ المنح ونهاية السنة.", "Compare pre- and post-modification fair values on the same modification date, not grant date against year-end."),
          text("حافظ على خط زمني منفصل للمنحة الأصلية وآخر للزيادة الناتجة عن التعديل.", "Keep separate service timelines for the original award and the modification increment."),
        ],
        reference: "IFRS 2.27, B42–B43(a)",
      },
      {
        title: text("حقوق ارتفاع السهم النقدية: افصل المصروف عن الرصيد والمدفوع", "Cash SARs: separate expense, liability and payment"),
        explanation: text(
          "في حق ارتفاع قيمة السهم المسدد نقدًا يُقاس الالتزام بالقيمة العادلة للحقوق غير المسددة في كل تاريخ تقرير، مع مراعاة الخدمة المقدمة وشروط الاستحقاق غير السوقية في عدد الحقوق المتوقع استحقاقها. أثناء فترة الخدمة: الالتزام التراكمي = الموظفون المتوقع استحقاقهم × الحقوق لكل موظف × القيمة العادلة الحالية للحق × نسبة الخدمة المنقضية. بعد الاستحقاق تُقاس الحقوق الباقية بالقيمة العادلة الكاملة حتى السداد. عند ممارسة بعض الموظفين حقوقهم، تخفض النقدية الالتزام بالقيمة المدفوعة لهم، ويحسب مصروف السنة من العلاقة: التزام الإقفال + النقد المدفوع خلال السنة − التزام الافتتاح. لا تخلط بين القيمة العادلة للحقوق التي ما زالت قائمة والقيمة النقدية الفعلية للحقوق الممارسة، ولا تتوقف إعادة القياس عند تاريخ الاستحقاق إذا بقيت حقوق غير مسددة.",
          "For cash-settled share appreciation rights, remeasure the liability for outstanding rights at fair value at each reporting date, reflecting service rendered and expected vesting numbers for non-market conditions. During service, cumulative liability is employees expected to vest × rights per employee × current fair value per right × elapsed service fraction. After vesting, outstanding rights remain at full current fair value until settlement. When some employees exercise, cash paid reduces the liability; derive the year's expense as closing liability + cash paid during the year − opening liability. Do not confuse fair value of outstanding rights with actual cash on exercised rights, and do not stop remeasurement at vesting while rights remain unpaid.",
        ),
        keyPoints: [
          text("تغير توقع المغادرين يؤثر في عدد الحقوق قبل الاستحقاق؛ تغير القيمة العادلة يؤثر في الالتزام إلى حين السداد.", "Revised leaver estimates affect pre-vesting rights; fair-value changes affect the liability until settlement."),
          text("اختبر المصالحة: رصيد الافتتاح + مصروف السنة − النقد المدفوع = رصيد الإقفال.", "Reconcile opening liability + annual expense − cash paid = closing liability."),
        ],
        reference: "IFRS 2.30–33D",
      },
      {
        title: text("من يملك خيار التسوية يحدد شكل المحاسبة", "Who chooses settlement determines the accounting"),
        explanation: text(
          "إذا امتلك الموظف حق الاختيار بين أسهم ونقد، تمنحه المنشأة أداة مركبة: التزامًا يمثل حق طلب النقد ومكوّن حقوق ملكية يمثل منفعة اختيار الأسهم بدلًا من النقد. في تاريخ المنح يُقاس مكوّن الالتزام أولًا، ثم تُحدد القيمة المتبقية لمكوّن حقوق الملكية وفق قيم البديلين. يثبت كل مكوّن مع تقديم الخدمة: الالتزام النقدي يعاد قياسه في تواريخ التقرير حتى التسوية، أما مكوّن حقوق الملكية فيبقى بقيمة المنح ولا يعاد قياسه لمجرد تغير سعر السهم. أما إذا كان حق الاختيار للمنشأة نفسها، فيجب تحديد وجود التزام حالي بالدفع النقدي؛ السياسة أو الممارسة السابقة في الدفع نقدًا، أو غياب الجوهر التجاري لبديل الأسهم، قد تجعلها معاملة نقدية. لا تصنف الخيارين كمعاملة واحدة دائمًا دون فحص صاحب القرار والالتزام.",
          "If the employee can choose cash or shares, the entity grants a compound instrument: a liability for the cash demand and an equity component for the additional benefit of choosing shares. At grant date, measure the liability component first, then determine the residual equity component from the alternatives' values. Recognise both as service is rendered: remeasure the cash liability at each reporting date until settlement, but do not remeasure the grant-date equity component merely because the share price changes. If the entity itself chooses settlement, assess whether it has a present cash-settlement obligation; a cash-settlement policy or practice, or an equity alternative without commercial substance, may require cash-settled accounting. Do not classify every settlement choice alike without identifying who chooses and whether a present obligation exists.",
        ),
        keyPoints: [
          text("اختيار الموظف: التزام وحقوق ملكية منفصلان؛ اختيار المنشأة: اختبر الالتزام الحالي أولًا.", "Employee's choice: separate liability and equity; entity's choice: test for a present obligation first."),
          text("أعد قياس المكوّن النقدي فقط، مع استمرار إثبات الخدمة على فترة الاستحقاق.", "Remeasure only the cash component while recognising service over the vesting period."),
        ],
        reference: "IFRS 2.34–43",
      },
      {
        title: text("استبدال خيار ملغى: اختبر صفة البديل ثم افصل قيمته الإضافية", "Replacing a cancelled option: identify the replacement and its increment"),
        explanation: text(
          "عندما تلغي المنشأة منحة أسهم قائمة وتمنح أدوات جديدة في التاريخ نفسه، لا تعد الجديدة تعديلًا للأصلية تلقائيًا: يجب أن تحددها المنشأة صراحةً كأدوات بديلة للملغاة عند المنح. عندئذ تستمر تكلفة المنحة الأصلية بالقيمة العادلة بتاريخ منحها، وتضاف منفعة الاستبدال المقاسة بفرق القيمة العادلة للبديل عن صافي القيمة العادلة للملغى في تاريخ الاستبدال، مع مراعاة أي مبلغ دُفع للموظف عند الإلغاء. وزّع تكلفة المنحة الأصلية على فترة استحقاقها الأصلية، والزيادة على فترة الخدمة من تاريخ الاستبدال إلى استحقاق الأداة البديلة؛ ثم حدّث عدد الموظفين المتوقع استحقاقهم وفق شروط الخدمة غير السوقية. إن لم تعيّن الأدوات الجديدة بديلًا، تعامل معها كمنحة مستقلة وتراجع معالجة إلغاء القديمة. لا تستخدم قيمة البديل الكاملة إضافةً إلى المنحة الأصلية فيتضاعف المصروف.",
          "When an existing equity award is cancelled and new instruments are granted, the new award is not automatically a modification: it must be identified as a replacement on its grant date. Then continue the original grant-date fair-value cost and add the incremental benefit measured as replacement-date fair value less the cancelled award's net fair value at the same date, allowing for any cancellation payment. Recognise original cost over its original vesting period and the increment over service from replacement until the replacement vests; update expected vesting numbers for non-market service conditions. If the new instruments are not designated replacements, account for them as a new grant and assess cancellation of the original award separately. Do not add the replacement's entire fair value to the original cost and double-count service.",
        ),
        keyPoints: [
          text("التعيين كبديل وقت المنح شرط مهم، لا مجرد وصف لاحق للحدث.", "Identification as a replacement at grant date matters; a later label is not enough."),
          text("لكل من التكلفة الأصلية والزيادة فترة خدمة قد تختلف عن الأخرى.", "Original cost and the increment may have different service periods."),
          text("عند تمديد الخدمة، قيّم عدد المستحقين لكل مكوّن وفق شروطه؛ لا تخفض تكلفة الأصلية بسبب مغادرين بعد نهايتها الأصلية.", "When service is extended, estimate vesting numbers separately for each component; do not reduce original cost for departures after its original end date."),
        ],
        reference: "IFRS 2.27–28(c), B42–B44(c)",
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
      {
        title: text("تغير تقديرات الاستحقاق ثم ممارسة الخيارات", "Revised vesting estimates and option exercise"),
        facts: text(
          "مُنح 800 موظف 200 خيار لكل منهم على سهم قيمته الاسمية دولار واحد. القيمة العادلة للخيار عند المنح 4 دولارات وسعر الممارسة 1.50 دولار؛ يشترط البقاء ثلاث سنوات. في نهاية السنة الأولى كان المتوقع مغادرة 95 موظفًا، وفي الثانية 70، وعند الاستحقاق غادر 60 فعليًا. مارس جميع المستحقين الخيارات في نهاية السنة الثالثة.",
          "Eight hundred employees each receive 200 options on $1 par shares. Grant-date option fair value is $4 and exercise price $1.50; three years' service is required. Expected total leavers are 95 at the first year-end and 70 at the second; 60 actually leave by vesting. All vested options are exercised at the end of year three.",
        ),
        calculations: [
          text("نهاية 20X1: (800 − 95) × 200 × 4 × 1/3 = 188,000 دولار مصروفًا ورصيد احتياطي.", "20X1: (800 − 95) × 200 × $4 × 1/3 = $188,000 expense and closing reserve."),
          text("نهاية 20X2: الرصيد التراكمي (800 − 70) × 200 × 4 × 2/3 = 389,333.33؛ مصروف السنة ≈ 201,333.33 دولار.", "20X2 cumulative reserve: (800 − 70) × 200 × $4 × 2/3 = $389,333.33; current-year charge ≈ $201,333.33."),
          text("نهاية 20X3: 740 × 200 × 4 = 592,000 دولار رصيدًا نهائيًا؛ مصروف السنة ≈ 202,666.67 دولار. قد تعرض القوائم المصروفين 201,333 و202,667 بعد التقريب.", "20X3 final reserve: 740 × 200 × $4 = $592,000; current-year charge ≈ $202,666.67. The two annual charges may be displayed as $201,333 and $202,667 after rounding."),
          text("عند الممارسة: 148,000 سهم؛ نقدية 148,000 × 1.50 = 222,000؛ علاوة إصدار = 222,000 + 592,000 − 148,000 = 666,000 دولار.", "On exercise: 148,000 shares; cash = 148,000 × $1.50 = $222,000; share premium = $222,000 + $592,000 − $148,000 = $666,000."),
        ],
        conclusion: text("تُثبت تكلفة الخدمة التراكمية 592,000 في حقوق الملكية، ثم يُحوّل الاحتياطي مع النقد إلى رأس مال وعلاوة عند الممارسة. لو كان الوعد نقديًا لظهر التزام معاد القياس بدل الاحتياطي، لكن قيم الحقوق النقدية اللازمة لاستخراج مبالغ سنوية غير معطاة.", "Cumulative service cost of $592,000 is credited to equity and transferred with cash to share capital and premium on exercise. A cash promise would instead create a remeasured liability; the cash-right fair values needed for annual figures are not supplied."),
        journalEntries: [
          { label: text("20X1: خدمة الموظفين", "20X1: employee service"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("188,000 دولار", "$188,000") },
          { label: text("20X2: خدمة الموظفين وتعديل التقدير", "20X2: service and revised estimate"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("201,333 دولار تقريبًا", "Approximately $201,333") },
          { label: text("20X3: استكمال الخدمة", "20X3: remaining service"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("202,667 دولار تقريبًا", "Approximately $202,667") },
          { label: text("20X3: ممارسة جميع الخيارات المستحقة", "20X3: exercise of all vested options"), debit: text("نقدية 222,000 + احتياطي 592,000", "Cash 222,000 + reserve 592,000"), credit: text("رأس مال 148,000 + علاوة 666,000", "Share capital 148,000 + premium 666,000"), amount: text("814,000 دولار لكل جانب", "$814,000 each side") },
        ],
        reference: "IFRS 2.14–23, 30–33",
      },
      {
        title: text("إعادة تسعير خيارات Cello بعد السنة الأولى", "Cello option repricing after year one"),
        facts: text(
          "في بداية السنة الأولى مُنح 500 موظف 100 خيار لكل منهم بشرط خدمة ثلاث سنوات، والقيمة العادلة عند المنح 15 دولارًا، وكان التقدير الأولي لمغادرة 100 موظف. عند نهاية السنة الأولى غادر 40 وصار المتوقع 110 مغادرين إجمالًا. خُفض سعر الممارسة في هذا التاريخ، فكانت القيمة العادلة للخيار الأصلي قبل التعديل 5 دولارات وللخيار المعدل 8 دولارات. في السنة الثانية غادر 35 آخرون وصار المتوقع 105 مغادرين إجمالًا؛ وفي الثالثة غادر 28، فأصبح الإجمالي الفعلي 103 واستحقت خيارات 397 موظفًا.",
          "At the start of year one, 500 employees each receive 100 options subject to three years' service, with grant-date fair value of $15; initially 100 employees are expected to leave. At the first year-end, 40 have left and total expected leavers rise to 110. The exercise price is reduced then; fair value immediately before repricing is $5 per original option and $8 per modified option. Another 35 leave in year two, when total expected leavers become 105; 28 leave in year three, so actual total leavers are 103 and 397 employees vest.",
        ),
        calculations: [
          text("الزيادة عند تعديل السنة الأولى = 8 − 5 = 3 دولارات لكل خيار، توزع على السنتين المتبقيتين؛ لا تُستبدل بها قيمة المنحة الأصلية 15 دولارًا.", "Modification-date increment = $8 − $5 = $3 per option, spread over the two remaining service years; it does not replace the original $15 grant value."),
          text("السنة الأولى: (500 − 110) × 100 × 15 × 1/3 = 195,000 دولار مصروفًا تراكميًا.", "Year one: (500 − 110) × 100 × $15 × 1/3 = $195,000 cumulative expense."),
          text("السنة الثانية: (500 − 105) × 100 × [15 × 2/3 + 3 × 1/2] = 454,250 دولار تراكميًا؛ مصروف السنة = 454,250 − 195,000 = 259,250.", "Year two: (500 − 105) × 100 × [$15 × 2/3 + $3 × 1/2] = $454,250 cumulative; current-year expense = $454,250 − $195,000 = $259,250."),
          text("السنة الثالثة: (500 − 103) × 100 × (15 + 3) = 714,600 دولار تراكميًا؛ مصروف السنة = 714,600 − 454,250 = 260,350.", "Year three: (500 − 103) × 100 × ($15 + $3) = $714,600 cumulative; current-year expense = $714,600 − $454,250 = $260,350."),
        ],
        conclusion: text("المصروف عبر السنوات الثلاث 195,000 ثم 259,250 ثم 260,350، ومجموعه 714,600 دولار؛ يقابله احتياطي في حقوق الملكية. أساس الزيادة هو 3 دولارات بتاريخ التعديل، لا 8 دولارات مضافة إلى 15.", "The three annual charges are $195,000, $259,250 and $260,350, totalling $714,600, with an equity reserve credit. Only the $3 modification-date increment is added to the original $15, not the entire $8 modified fair value."),
        journalEntries: [
          { label: text("السنة الأولى: خدمة قبل التعديل", "Year one: pre-modification service"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("195,000 دولار", "$195,000") },
          { label: text("السنة الثانية: خدمة وتعديل", "Year two: service and modification"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("259,250 دولار", "$259,250") },
          { label: text("السنة الثالثة: اكتمال الاستحقاق", "Year three: vesting completed"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("260,350 دولار", "$260,350") },
        ],
        reference: "IFRS 2.27, B42–B43(a)",
      },
      {
        title: text("تسوية حقوق ارتفاع السهم على ثلاث دفعات نقدية", "Cash SARs settled in three instalments"),
        facts: text(
          "مُنح 500 موظف 100 حق ارتفاع قيمة سهم لكل منهم، مشروطًا بالخدمة ثلاث سنوات حتى نهاية 20X3. كان المتوقع استحقاق 405 موظفين في 20X1 ثم 400 في 20X2؛ واستحق بالفعل 403 في 20X3. مارس 150 حقهم في 20X3، ثم 140 في 20X4، ثم الباقون 113 في 20X5. القيم العادلة لكل حق قائم في نهاية 20X1–20X4 هي 14.40 و15.50 و18.20 و21.40 دولارًا، والمبالغ النقدية لكل حق ممارس في 20X3–20X5 هي 15 و20 و25 دولارًا.",
          "Five hundred employees each receive 100 cash share appreciation rights, conditional on service through 20X3. Vesting is expected for 405 employees in 20X1 and 400 in 20X2; 403 actually vest in 20X3. Rights are exercised by 150 employees in 20X3, 140 in 20X4 and the remaining 113 in 20X5. Year-end fair values per outstanding right in 20X1–20X4 are $14.40, $15.50, $18.20 and $21.40; cash amounts per right exercised in 20X3–20X5 are $15, $20 and $25.",
        ),
        calculations: [
          text("20X1: الالتزام والمصروف = 405 × 100 × 14.40 × 1/3 = 194,400 دولار.", "20X1: liability and expense = 405 × 100 × $14.40 × 1/3 = $194,400."),
          text("20X2: الالتزام = 400 × 100 × 15.50 × 2/3 = 413,333.33؛ المصروف ≈ 218,933.33.", "20X2: liability = 400 × 100 × $15.50 × 2/3 = $413,333.33; expense ≈ $218,933.33."),
          text("20X3: المدفوع = 150 × 100 × 15 = 225,000؛ الالتزام الباقي = 253 × 100 × 18.20 = 460,460؛ المصروف ≈ 460,460 + 225,000 − 413,333.33 = 272,126.67.", "20X3: cash paid = 150 × 100 × $15 = $225,000; remaining liability = 253 × 100 × $18.20 = $460,460; expense ≈ $460,460 + $225,000 − $413,333.33 = $272,126.67."),
          text("20X4: المدفوع = 140 × 100 × 20 = 280,000؛ الالتزام الباقي = 113 × 100 × 21.40 = 241,820؛ المصروف = 241,820 + 280,000 − 460,460 = 61,360.", "20X4: cash paid = 140 × 100 × $20 = $280,000; remaining liability = 113 × 100 × $21.40 = $241,820; expense = $241,820 + $280,000 − $460,460 = $61,360."),
          text("20X5: سداد الباقي = 113 × 100 × 25 = 282,500؛ الالتزام الختامي صفر؛ المصروف = 282,500 − 241,820 = 40,680. مجموع المصروف = مجموع النقد المدفوع = 787,500.", "20X5: settle remaining rights for 113 × 100 × $25 = $282,500; closing liability is nil; expense = $282,500 − $241,820 = $40,680. Total expense equals total cash paid of $787,500."),
        ],
        conclusion: text("بعد الاستحقاق يستمر تعديل الالتزام على أساس القيمة العادلة للحقوق غير الممارسة؛ لا تعد المدفوعات النقدية مصروفًا إضافيًا بذاتها، بل تُصالح مع حركة الالتزام لتحديد مصروف كل سنة.", "After vesting, continue fair-value remeasurement of unexercised rights. Cash payments are not automatically extra expense; reconcile them with the liability movement to determine each year's charge."),
        journalEntries: [
          { label: text("كل سنة: خدمة وإعادة قياس", "Each year: service and remeasurement"), debit: text("مصروف مدفوعات أسهم", "Share-based-payment expense"), credit: text("التزام حقوق نقدية", "Cash SAR liability"), amount: text("وفق مصروف السنة المحسوب", "Calculated annual expense") },
          { label: text("عند ممارسة الحقوق", "On exercise of rights"), debit: text("التزام حقوق نقدية", "Cash SAR liability"), credit: text("نقدية", "Cash"), amount: text("القيمة النقدية المدفوعة", "Cash settlement amount") },
        ],
        reference: "IFRS 2.30–33D",
      },
      {
        title: text("مدير يختار 24,000 سهمًا أو قيمة 20,000 سهم نقدًا", "Director chooses 24,000 shares or cash for 20,000 phantom shares"),
        facts: text(
          "في 1 أكتوبر 20X2 منح Saddler مديرًا حق اختيار 24,000 سهم أو مبلغ نقدي يعادل قيمة 20,000 سهم، بشرط خدمة ثلاث سنوات. القيمة العادلة لبديل الأسهم عند المنح 4.50 دولارات للسهم، وسعر السهم 5.20 دولارات في تاريخ المنح و6.10 دولارات في 30 سبتمبر 20X3.",
          "On 1 October 20X2 Saddler grants a director the choice between 24,000 shares and cash equal to the value of 20,000 phantom shares, conditional on three years' service. Grant-date fair value of the share alternative is $4.50 per share; market share price is $5.20 at grant and $6.10 on 30 September 20X3.",
        ),
        calculations: [
          text("قيمة بديل الأسهم عند المنح = 24,000 × 4.50 = 108,000 دولار؛ قيمة البديل النقدي عند المنح = 20,000 × 5.20 = 104,000 دولار.", "Grant-date share alternative = 24,000 × $4.50 = $108,000; grant-date cash alternative = 20,000 × $5.20 = $104,000."),
          text("مكوّن حقوق الملكية المتبقي = 108,000 − 104,000 = 4,000 دولار، ومصروف خدمته في السنة الأولى = 4,000 ÷ 3 = 1,333.33.", "Residual equity component = $108,000 − $104,000 = $4,000, with first-year service cost of $4,000 ÷ 3 = $1,333.33."),
          text("الالتزام النقدي في نهاية السنة الأولى = 20,000 × 6.10 × 1/3 = 40,666.67 دولار؛ يثبت مصروفًا والتزامًا بهذا المبلغ، ويعاد قياسه في الأعوام اللاحقة.", "First-year cash liability = 20,000 × $6.10 × 1/3 = $40,666.67; recognise expense and liability for this amount, then remeasure in later years."),
        ],
        conclusion: text("في 30 سبتمبر 20X3 يثبت مصروف إجمالي يقارب 42,000 دولار: نحو 1,333 في حقوق الملكية ونحو 40,667 التزامًا. التقريب إلى الدولار يجعل القيدين المعروضين 1,333 و40,667، لا تغييرًا في قاعدة القياس.", "At 30 September 20X3 total expense is approximately $42,000: about $1,333 credited to equity and $40,667 to a liability. Whole-dollar presentation of $1,333 and $40,667 reflects rounding, not a different measurement rule."),
        journalEntries: [
          { label: text("30 سبتمبر 20X3: مكوّن الأسهم", "30 September 20X3: equity component"), debit: text("مصروف موظفين", "Staff expense"), credit: text("حقوق ملكية", "Equity"), amount: text("1,333.33 دولار تقريبًا", "Approximately $1,333.33") },
          { label: text("30 سبتمبر 20X3: مكوّن النقد", "30 September 20X3: cash component"), debit: text("مصروف موظفين", "Staff expense"), credit: text("التزام تسوية نقدية", "Cash-settlement liability"), amount: text("40,666.67 دولار تقريبًا", "Approximately $40,666.67") },
        ],
        reference: "IFRS 2.35–38",
      },
      {
        title: text("Piper: بديل بخدمة أطول بعد إلغاء الخيارات", "Piper: replacement options with a longer service period"),
        facts: text(
          "في 1 يناير 20X1 منحت Piper ألف موظف 3,000 خيار لكل منهم مشروطة بالبقاء حتى نهاية 20X3، والقيمة العادلة للخيار بتاريخ المنح 5 دولارات. في نهاية 20X1 توقعت مغادرة 100 موظف وسجلت مصروف خدمة 4.5 ملايين دولار. في 1 يناير 20X2 ألغت الخيارات القديمة ومنحت أخرى بدلًا عنها تستحق نهاية 20X4، دون دفع تعويض؛ كانت القيمة العادلة للقديم 1 دولار وللجديد 7 دولارات في ذلك التاريخ. بقي 975 موظفًا في بداية 20X2، وغادر 35 خلاله، وتوقعت 40 مغادرًا في 20X3 و40 في 20X4. يعتمد الحساب التالي على تحقق شرط تعيين الخيارات الجديدة بدائل عند منحها وفق IFRS 2.",
          "On 1 January 20X1 Piper grants 3,000 options each to 1,000 employees, conditional on service until end-20X3; grant-date fair value is $5 per option. At end-20X1 it expects 100 leavers and has recognised $4.5 million service cost. On 1 January 20X2 the old awards are cancelled and new options granted in their place, vesting at end-20X4, with no compensation; fair values then are $1 for the old and $7 for the new option. Nine hundred seventy-five employees remain at the start of 20X2, 35 leave during it, and 40 more are expected to leave in each of 20X3 and 20X4. The calculation below assumes the new awards qualify as identified replacements under IFRS 2 at grant date.",
        ),
        calculations: [
          text("المتوقع استحقاقهم للبديل حتى نهاية 20X4 = 975 − 35 − 40 − 40 = 860. الزيادة في القيمة العادلة بتاريخ الاستبدال = 7 − 1 = 6 دولارات لكل خيار.", "Employees expected to satisfy the replacement period through end-20X4 = 975 − 35 − 40 − 40 = 860. Replacement-date incremental fair value is $7 − $1 = $6 per option."),
          text("التكلفة الأصلية التراكمية حتى نهاية 20X2 = 900 × 3,000 × 5 × 2/3 = 9.00 ملايين دولار؛ المتوقع إكمالهم شرطها الأصلي 975 − 35 − 40 = 900، وتنتهي في 20X3؛ لا يغير تمديد الخدمة هذا العدد للتكلفة الأصلية وفق IFRS 2.B44(c).", "Cumulative original-award cost at end-20X2 = 900 × 3,000 × $5 × 2/3 = $9.00 million; 975 − 35 − 40 = 900 are expected to complete the original period in 20X3; the service extension does not change that population for original cost under IFRS 2.B44(c)."),
          text("تكلفة الزيادة التراكمية للسنة الأولى بعد الاستبدال = 860 × 3,000 × 6 × 1/3 = 5.16 ملايين دولار؛ فترة البديل تمتد من بداية 20X2 إلى نهاية 20X4.", "First-year cumulative increment after replacement = 860 × 3,000 × $6 × 1/3 = $5.16 million; replacement service runs from start-20X2 through end-20X4."),
          text("الرصيد التراكمي في نهاية 20X2 = 14.16 مليون دولار؛ مصروف 20X2 = 14.16 − 4.50 = 9.66 ملايين دولار.", "End-20X2 cumulative reserve = $14.16 million; 20X2 expense = $14.16m − $4.50m = $9.66 million."),
        ],
        conclusion: text("يكون قيد 20X2 مدين مصروف موظفين ودائن احتياطي خيارات بمبلغ 9.66 ملايين دولار، بشرط تعيين الخيارات الجديدة بدائل عند منحها. هذا فرع الاستبدال؛ لا يستنتج منه مبلغ فرع الإلغاء المصحوب بتعويض نقدي.", "Debit staff expense and credit option reserve by $9.66 million in 20X2, provided the new awards were identified as replacements when granted. This replacement branch does not determine the separate cash-compensated cancellation branch."),
        journalEntries: [
          { label: text("31 ديسمبر 20X2: الخدمة والتعديل", "31 December 20X2: service and replacement increment"), debit: text("مصروف موظفين", "Staff expense"), credit: text("احتياطي خيارات", "Option reserve"), amount: text("9.66 ملايين دولار", "$9.66 million") },
        ],
        reference: "IFRS 2.19–23, 27–28(c), B42–B44(c)",
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
      {
        title: text("أسهم لا تدخل المقام بالطريقة المعتادة", "Shares that need a different denominator test"),
        explanation: text(
          "ليس كل حق في سهم مستقبلي سهمًا عاديًا قائمًا اليوم. في الربحية الأساسية تدخل الأسهم الصادرة نقدًا عندما يصبح المقابل مستحق التحصيل، وأسهم الاستحواذ من تاريخ الاقتناء، والأسهم المشروطة فقط من تاريخ تحقق جميع شروط إصدارها. أما الأسهم القابلة للاسترجاع فتستبعد حتى زوال شرط الاسترجاع. الأسهم التي سيصدرها عقد تحويل إلزامي تدخل الأساسية من تاريخ العقد وفق النص الخاص. السهم المدفوع جزئيًا يحسب في الأساسية ككسر من سهم كامل بقدر مشاركته في التوزيعات؛ والجزء الذي لا يشارك يُختبر في المخفضة كخيار أو ضمان. في المخفضة قد تدخل الأسهم المشروطة غير المستوفية بعدد ما كان سيصدر لو انتهت فترة الشرط في تاريخ التقرير، فقط إذا كان الأثر مخفِّضًا. هذا اختبار افتراضي ولا يعني أن الشرط تحقق فعليًا أو أن أسهمًا صدرت. عند إصدار منحة أو تجزئة بعد تاريخ التقرير وقبل اعتماد القوائم، تعاد أرقام السهم لكل الفترات المعروضة؛ أما الإصدار النقدي اللاحق فلا يغير حساب فترة منتهية، وقد يلزم وصفه في الإفصاح إن كان جوهريًا. ورقة ربحية السهم مصالحة عرض لا قيد محاسبي مستقل.",
          "A future right to shares is not automatically an ordinary share outstanding today. In basic EPS, cash-issued shares enter when consideration is receivable, acquisition shares from the acquisition date, and contingently issuable shares only when all issue conditions are met. Contingently returnable shares are excluded until the recall condition lapses. Shares issuable on a mandatorily convertible contract enter basic EPS from the contract date under the specific rule. A partly paid share counts as a fraction in basic EPS to the extent it participates in dividends relative to a fully paid share; its non-participating portion is tested like an option or warrant in diluted EPS. In diluted EPS, unsatisfied contingent shares may be included in the number that would be issuable if the reporting date ended the contingency period, only when dilutive. This hypothetical test does not mean the condition was actually met or shares were issued. A bonus issue or split after the period but before authorisation restates per-share amounts for all periods presented; a later cash issue does not change a completed period's EPS, though significant transactions may need disclosure. The EPS schedule is a presentation reconciliation, not a separate journal entry.",
        ),
        keyPoints: [
          text("تحقق أولًا من تاريخ استحقاق المقابل، وتاريخ تحقق الشرط، وحق المشاركة في توزيعات الأرباح؛ ثم اختر مقام الأساسية.", "First check when consideration is receivable, when conditions are met and the right to dividends; only then determine the basic denominator."),
          text("افصل بين تحقق الشرط فعلًا في الأساسية ومحاكاة نهاية فترة الشرط في المخفضة، ولا تضم أداة مضادة للتخفيف.", "Separate actual satisfaction of conditions for basic EPS from the hypothetical period-end test for diluted EPS, excluding antidilutive instruments."),
          text("أعد بيان الأسهم المجانية والتجزئة بأثر رجعي، وميّزها عن إصدار نقدي لاحق يُفصح عنه عند اللزوم دون تغيير المقام السابق.", "Restate bonus issues and splits retrospectively; distinguish a later cash issue, disclosed when required without changing the earlier denominator."),
        ],
        reference: "IAS 33.21–24, 52–57, 64, 70(d), A15–A16",
      },
      {
        title: text("من الرقم إلى الإفصاح: كيف يقرأ المستثمر ربحية السهم؟", "From calculation to disclosure: reading earnings per share"),
        explanation: text(
          "بعد حساب الربحية الأساسية والمخفضة، لا يكفي عرض رقمين بلا تفسير. تعرض المنشأة الربحية لكل منهما بالقدر نفسه من الأهمية، وذلك للربح أو الخسارة العائدة لحملة أسهم الأم العادية وللعمليات المستمرة العائدة لهم. إذا كانت لديها عملية متوقفة، تعرض نصيب السهم الأساسي والمخفض منها في قائمة الأداء أو الإيضاحات. وفي الإيضاحات تصالح بسط كل حساب مع الربح أو الخسارة، ثم تصالح المتوسط المرجح للأسهم في الأساسية مع مقام المخفضة؛ هكذا يرى القارئ أثر توزيعات الأسهم الممتازة والفائدة بعد الضريبة والأسهم المحتملة، بدلاً من الاكتفاء برقم نهائي. وتصف الأدوات المستبعدة لأنها مضادة للتخفيف هذا العام رغم احتمال تخفيفها لاحقًا، ومعاملات الأسهم اللاحقة للفترة التي كان يمكن أن تغيّر الربحية تغييرًا مهمًا لو وقعت قبل نهايتها. الإفصاح ليس قيدًا محاسبيًا جديدًا؛ إنه جسر قابل للتتبع بين الربح وعدد الأسهم والرقم المعروض للسهم.",
          "Basic and diluted EPS need more than two unexplained figures. Present them with equal prominence for profit or loss attributable to the parent's ordinary shareholders and for continuing operations attributable to them. If there is a discontinued operation, present its basic and diluted per-share amounts in the performance statement or notes. In the notes, reconcile each numerator to profit or loss and the basic weighted-average share denominator to the diluted denominator. This makes the effects of preference dividends, after-tax interest and potential shares visible instead of hiding them in a final number. Describe instruments excluded as antidilutive this year that could dilute EPS later, and post-period ordinary-share transactions that would have significantly changed EPS had they occurred before period-end. The disclosure is not a new journal entry; it is a traceable bridge from profit and share counts to each reported per-share amount.",
        ),
        keyPoints: [
          text("جهز جدولًا للبسط: ربح مساهمي الأم العاديين، ثم تعديلات الأدوات المخفِّضة بعد الضريبة؛ لا تخلط بين ربح المجموعة وربح حملة أسهم الأم.", "Build a numerator bridge from profit attributable to the parent's ordinary shareholders to after-tax dilutive-instrument adjustments; do not confuse group profit with profit attributable to the parent's ordinary shareholders."),
          text("جهز جدولًا للمقام: المتوسط المرجح للأسهم القائمة، ثم الزيادة من كل فئة أدوات مخفِّضة؛ اشرح ما استُبعد لأنه مضاد للتخفيف.", "Build a denominator bridge from weighted-average outstanding shares to each class of dilutive potential shares, explaining instruments excluded as antidilutive."),
          text("اعرض نصيب السهم من العملية المتوقفة منفصلًا إذا وجدت، وميز معاملات الأسهم اللاحقة التي تتطلب إفصاحًا عن إعادة حساب المنح والتجزئات بأثر رجعي.", "Show per-share amounts for discontinued operations separately when applicable, and distinguish subsequent share transactions requiring disclosure from bonus issues and splits that require retrospective recalculation."),
        ],
        reference: "IAS 33.66–70, 71",
      },
      {
        title: text("ربحية السهم المعدلة وتاريخ تطبيق IFRS 18", "Adjusted EPS and the IFRS 18 transition"),
        explanation: text(
          "قد تعرض المنشأة رقمًا إضافيًا للسهم إلى جانب الربحية الأساسية والمخفضة، لكن لا يجوز مساواته بهما أو اختيار بسط اعتباطي. كانت قاعدة IAS 33 السابقة تسمح باستخدام مكون معلن من قائمة الدخل الشامل بشروط الإفصاح. عند تطبيق IFRS 18—إلزاميًا للفترات السنوية التي تبدأ في 1 يناير 2027 أو بعده، أو مبكرًا إذا اختارته المنشأة—تُقيَّد مبالغ السهم الإضافية: يكون البسط مبلغًا عائدًا لحملة أسهم الأم العادية من مجموع أو مجموع فرعي حدده IFRS 18، أو من مقياس أداء محدد من الإدارة وفقه. تُعرض الأساسية والمخفضة الإضافيتان بالقدر نفسه من الأهمية في الإيضاحات لا في القوائم الرئيسية، وباستخدام أعداد الأسهم المرجحة وفق IAS 33. لذلك ابدأ دائمًا بتحديد معيار العرض المطبق على الفترة قبل قبول رقم «ربحية معدلة» مطبوع في مرجع أقدم.",
          "An entity may disclose an additional per-share measure alongside basic and diluted EPS, but it cannot treat it as interchangeable with them or select an arbitrary numerator. The earlier IAS 33 rule allowed a reported component of comprehensive income, subject to disclosure requirements. Once IFRS 18 is applied—mandatorily for annual periods beginning on or after 1 January 2027, or earlier by election—additional per-share measures are restricted: the numerator must be an amount attributable to the parent's ordinary equity holders of a total or subtotal identified in IFRS 18, or a management-defined performance measure under that Standard. Disclose the additional basic and diluted measures with equal prominence in the notes, not in the primary statements, using IAS 33 weighted-average share counts. Identify the presentation Standard applicable to the period before accepting an 'adjusted EPS' figure from older study material.",
        ),
        keyPoints: [
          text("تحقق من تاريخ بداية الفترة ومن اختيار التطبيق المبكر لـIFRS 18؛ لا تطبق قيوده الجديدة بأثر افتراضي على فترة لم يُطبق فيها.", "Check the period start and any early adoption of IFRS 18; do not retrospectively impose its new restriction on a period in which it was not applied."),
          text("اختبر البسط أولًا، ثم المقام؛ تسمية الرقم «معدلًا» لا تكفي لإجازته.", "Test the numerator before the denominator; labelling an amount 'adjusted' does not make it permissible."),
          text("المبلغ الإضافي للسهم إفصاح في الإيضاحات، أما الربحية الأساسية والمخفضة المطلوبة فتظل في قائمة الأداء.", "An additional per-share amount belongs in the notes; required basic and diluted EPS remain in the performance statement."),
        ],
        reference: "IAS 33.73B–73C; IFRS 18.C1",
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
        title: text("حدود IFRS 15 الحالية: النطاق، السعر، ومخاطر الائتمان", "Current IFRS 15 boundaries: scope, price and credit risk"),
        explanation: text(
          "ابدأ بتحديد ما إذا كان العقد عقدًا مع عميل يقع ضمن IFRS 15. الإيجارات الخاضعة لـIFRS 16، وعقود التأمين الخاضعة لـIFRS 17، والأدوات والحقوق المالية الخاضعة لمعاييرها لا تُنقل تلقائيًا إلى نموذج الإيراد. لبعض عقود الخدمة برسوم ثابتة التي تستوفي شروط IFRS 17 خيار سياسة بينه وبين IFRS 15؛ افحص الشروط قبل الحكم. إذا انطبق IFRS 15، تحقق من الموافقة والالتزام والحقوق وشروط الدفع والجوهر التجاري وإمكان تحصيل المقابل. يُقدّر سعر المعاملة بعد المقابل المتغير والتنازلات السعرية ومكون التمويل المهم عند انطباقها، لكنه لا يُخفض آليًا بمخصص تعثر العميل: قيّم خسائر الائتمان المتوقعة للذمم وأصول العقود وفق IFRS 9 بعد تحديد قيمها الإجمالية.",
          "First determine whether the customer contract falls within IFRS 15. Leases in IFRS 16, insurance contracts in IFRS 17 and financial instruments or rights within their own Standards do not automatically enter the revenue model. Certain fixed-fee service contracts meeting IFRS 17 conditions permit an accounting-policy choice between IFRS 17 and IFRS 15; check those conditions. If IFRS 15 applies, assess approval and commitment, identifiable rights and payment terms, commercial substance and probable collection. Estimate the transaction price for variable consideration, price concessions and any significant financing component when relevant, but do not automatically deduct a customer-default allowance from revenue: assess expected credit losses on receivables and contract assets under IFRS 9 after determining their gross amounts.",
        ),
        keyPoints: [
          text("لا تستخدم إحالة IFRS 4 القديمة لعقود التأمين؛ حلّ IFRS 17 محله.", "Do not rely on the obsolete IFRS 4 insurance reference; IFRS 17 replaced it."),
          text("افصل تنازل السعر الحقيقي، الذي يغير المقابل، عن خسارة الائتمان المتوقعة على حق ثابت.", "Distinguish a genuine price concession that changes consideration from an expected credit loss on a fixed right."),
          text("العقد المكتوب والشفهي والضمني قد ينطبق عليه النموذج؛ شكل العقد ليس شرطًا سادسًا مستقلًا عن شروط IFRS 15.9.", "Written, oral and implied contracts can qualify; contract form is not a sixth criterion separate from IFRS 15.9."),
        ],
        reference: "IFRS 15.5, 9–10, 47–59, 105–108; IFRS 17.8; IFRS 9.5.5",
      },
      {
        title: text("الشهادات والفواتير لا تحسم طبيعة الحق في المقابل", "Certificates and invoices do not determine the nature of the right"),
        explanation: text(
          "عند البناء على مدى الزمن، ابدأ بالتحقق من أحد معايير IFRS 15.35 ثم اختر مقياس تقدم يعكس ما نُقل للعميل. شهادة العمل قد تكون دليلًا على قيمة المخرجات لكنها لا تثبت تلقائيًا حقًا نافذًا في الدفع عن الأداء طوال العقد، خصوصًا عند إنهاء العميل. بعد الاعتراف بالإيراد، اسأل سؤالًا منفصلًا عن العرض: هل أصبح الحق في المقابل غير مشروط إلا بمرور الوقت؟ إذا نعم فهو ذمة مدينة، حتى قبل إصدار الفاتورة؛ وإلا فهو أصل عقد ما دام الأداء سبق الدفع أو استحقاقه. التحصيل أو الفوترة ليسا مقياس الإيراد.",
          "For over-time construction, first establish an IFRS 15.35 criterion and use a progress measure that depicts transfer to the customer. A work certificate may evidence output value but does not automatically establish an enforceable right to payment for performance throughout the contract, especially on customer termination. After revenue recognition, assess presentation separately: if the right to consideration is unconditional except for time, it is a receivable even before an invoice; otherwise it is a contract asset when performance precedes payment or payment due. Billing and collection do not measure revenue.",
        ),
        keyPoints: [
          text("افحص العقد والقانون: قيمة شهادة الأعمال ليست بديلًا عن حق الدفع عند إنهاء العميل دون إخلال.", "Inspect contract and law: a work certificate is not a substitute for a right to payment on termination without seller default."),
          text("فرّق بين قياس الأداء وتوقيت استحقاق المقابل وتصنيف الحق في الميزانية.", "Separate progress measurement, payment entitlement and statement-of-financial-position classification."),
        ],
        reference: "IFRS 15.35–40, 105–108, B14–B19",
      },
      {
        title: text("تكاليف الحصول على العقد والوفاء به: أصل أم مصروف؟", "Contract acquisition and fulfilment costs: asset or expense?"),
        explanation: text(
          "تُرسمل التكلفة الإضافية للحصول على عقد، كالعمولة التي ما كانت لتنشأ لولا نجاحه، إذا توقعت المنشأة استردادها. أما تكلفة كانت ستتحملها سواء فازت بالعقد أم لا فتُحمل مصروفًا ما لم تكن قابلة للتحميل صراحةً على العميل. وتكاليف الوفاء تُفحص أولًا تحت IAS 2 أو IAS 16 أو IAS 38 عند انطباقها؛ وإذا لم يحكمها معيار آخر، يثبت أصل IFRS 15 فقط إن كانت مرتبطة مباشرة بعقد محدد، وتنشئ أو تعزز موارد لأداء مستقبلي، ويتوقع استردادها. يُستهلك الأصل على نحو يتسق مع نقل السلع والخدمات المرتبطة به ويُختبر للانخفاض.",
          "Capitalise an incremental cost of obtaining a contract, such as a commission that would not arise without winning it, when recovery is expected. Costs incurred whether or not the contract is won are expensed unless explicitly chargeable to the customer. For fulfilment costs, first assess IAS 2, IAS 16 or IAS 38 if applicable; otherwise IFRS 15 permits an asset only if costs relate directly to an identifiable contract, create or enhance resources for future performance, and are expected to be recovered. Amortise the asset consistently with transfer of related goods or services and test it for impairment."
        ),
        keyPoints: [
          text("اختبار تكلفة الحصول: هل كانت ستنشأ لو خسرنا العقد؟ إن نعم فهي ليست «إضافية» لمجرد ارتباطها بالمناقصة.", "Acquisition-cost test: would it arise if the bid failed? If yes, it is not incremental merely because it relates to the tender."),
          text("اختبار الوفاء ثلاثي: ارتباط مباشر، مورد لأداء لاحق، واسترداد متوقع؛ وتُطبق المعايير الأخرى أولًا.", "Fulfilment-cost test: direct relationship, resource for later performance, and expected recovery; apply other relevant Standards first."),
          text("يجوز تبسيط تحميل تكاليف الحصول الإضافية على المصروف إذا كانت فترة إهلاك أصلها سنة أو أقل.", "The practical expedient permits expensing incremental acquisition costs when the otherwise-recognised asset would be amortised over one year or less.")
        ],
        reference: "IFRS 15.91–99, 101–104; IAS 2; IAS 16; IAS 38",
      },

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
        title: text("خيار رد يملكه العميل وسعر إعادة شراء 900,000", "Customer-held put with a 900,000 repurchase price"),
        facts: text(
          "تقبض منشأة 1,000,000 دولار عن أصل، وللعميل حق إلزامها بإعادة شرائه خلال سنة مقابل 900,000. القيمة السوقية المتوقعة عندئذ 750,000. تُقيّم الحوافز والحقوق عند بداية العقد وفق الشروط المعطاة.",
          "An entity receives $1,000,000 for an asset. The customer can require it to repurchase the asset within a year for $900,000; expected market value then is $750,000. Assess incentives and rights at contract inception from the stated terms.",
        ),
        calculations: [
          text("سعر الرد أقل من المبلغ المقبوض بمقدار 100,000، لكنه أعلى من القيمة السوقية المتوقعة بمقدار 150,000؛ لدى العميل حافز اقتصادي مهم لممارسة الخيار.", "The put price is $100,000 below the proceeds but $150,000 above expected market value; the customer has a significant economic incentive to exercise."),
          text("مع هذا الحافز لا تعامل المتحصلات بيعًا نهائيًا؛ يعالج الترتيب وفق IFRS 16. يلزم تصنيف الإيجار وشروطه لتحديد عرض الأصل أو صافي الاستثمار والإيراد.", "With that incentive the proceeds are not an outright sale; apply IFRS 16. Lease classification and terms determine presentation of the asset or net investment and income."),
        ],
        conclusion: text(
          "فرق 100,000 ليس تلقائيًا إيراد إيجار تشغيليًا يُثبت دفعة واحدة؛ يحتاج توقيت الدخل وتصنيف الإيجار إلى شروط إضافية غير مذكورة. لا يُخترع قيد إيجار محدد.",
          "The $100,000 difference is not automatically operating-lease income recognised at once; income timing and lease classification need further terms not given. No specific lease entry is invented.",
        ),
        journalEntries: [],
        reference: "IFRS 15.B70–B72; IFRS 16",
      },
      {
        title: text("آلة وقطع غيار مدفوعة مع بقاء القطع لدى البائع", "Machine and paid-for spares retained by the seller"),
        facts: text(
          "يسدد العميل مقابل آلة وقطع غيار بعد صنعهما، ويتسلم الآلة. يفحص قطع الغيار ويقبلها لكنه يطلب إبقاءها في مخزن البائع، مع قدرته على سحبها في أي وقت. لا تتوافر أسعار بيع مستقلة أو مقابل محدد في الوقائع.",
          "After production, the customer pays for a machine and spare parts and takes the machine. The customer inspects and accepts the spares but asks that they remain at the seller's warehouse and can collect them at any time. No stand-alone prices or total consideration are stated.",
        ),
        calculations: [
          text("إيراد الآلة يتبع انتقال السيطرة عند التسليم. أما قطع الغيار فلا يكفي لقبولها أو دفع ثمنها وحده: اختبر السبب الجوهري للاحتفاظ، وتخصيص القطع للعميل، وجاهزيتها للنقل، وعدم قدرة البائع على استخدامها أو إعادة توجيهها.", "Machine revenue follows control transfer on delivery. Acceptance or payment alone does not settle the spares: test the substantive reason for holding, separate identification for the customer, readiness for transfer, and the seller's inability to use or redirect them."),
          text("إذا تحققت شروط الاحتفاظ الأربعة وانتقلت السيطرة، فقيّم خدمة الحفظ المتبقية بوصفها وعدًا متميزًا محتملاً، وخصص السعر نسبيًا فقط بعد تحديد أسعار البيع المستقلة.", "If all four bill-and-hold conditions are met and control transfers, assess the remaining custody service as a possible distinct promise and allocate price relatively only once stand-alone selling prices are established."),
        ],
        conclusion: text(
          "لا تُثبت إيرادات القطع أو الحفظ بمبالغ مخترعة. إن لم تستوف شروط IFRS 15.B81، يُؤجل إيراد قطع الغيار رغم الفاتورة والتحصيل إلى انتقال السيطرة.",
          "Do not invent amounts for spares or custody. If IFRS 15.B81 is not satisfied, defer spares revenue despite invoicing and cash receipt until control transfers.",
        ),
        journalEntries: [],
        reference: "IFRS 15.22–30, 31–38, 73–86, B79–B82",
      },
      {
        title: text("هاتف مجاني ظاهريًا مع خدمة لمدة سنتين", "Apparently free handset with two years of service"),
        facts: text(
          "يحصل العميل على هاتف عند توقيع عقد خدمة شبكة مدته 24 شهرًا بسعر 20 دولارًا شهريًا. سعر بيع الهاتف المستقل 100 دولار، وسعر الخدمة المستقل لعامين 480 دولارًا. يفترض المثال أن الهاتف والخدمة التزاما أداء منفصلان، ولا يذكر خصمًا خاصًا بأحدهما أو مكون تمويل مهمًا.",
          "A customer receives a handset on signing a 24-month network-service contract for $20 a month. The handset's stand-alone selling price is $100 and the two-year service's stand-alone price is $480. Assume handset and service are distinct obligations with no discount specific to one obligation and no significant financing component."
        ),
        calculations: [
          text("مقابل العقد 24 × 20 = 480 دولارًا؛ مجموع الأسعار المستقلة 100 + 480 = 580. يخصص للهاتف 480 × 100/580 = 82.7586 دولارًا، وللخدمة 480 × 480/580 = 397.2414 دولارًا.", "Contract consideration = 24 × $20 = $480; total stand-alone prices = $100 + $480 = $580. Allocate $480 × 100/580 = $82.7586 to the handset and $480 × 480/580 = $397.2414 to service."),
          text("يُعترف بحصة الهاتف عند انتقال السيطرة عليه. وبافتراض تقديم الخدمة بالتساوي، إيرادها السنوي 397.2414 ÷ 2 = 198.6207؛ في السنة الأولى إجمالي 281.3793، وفي الثانية 198.6207. لا تُقرب نسب 100/580 و480/580 إلى 17% و83% قبل الحساب: التقريب الوسيط يعطي 82 و199، بينما الدقة تعطي نحو 82.76 و198.62.", "Recognise the handset share when its control transfers. If service is provided evenly, annual service revenue is $397.2414 / 2 = $198.6207; total year-one revenue is $281.3793 and year two $198.6207. Do not round 100/580 and 480/580 to 17% and 83% before calculation: premature rounding gives $82 and $199 rather than about $82.76 and $198.62.")
        ],
        conclusion: text("وصف الهاتف بأنه مجاني لا يلغي إيراده: 82.76 دولارًا من المقابل الكلي يخصه، ويبقى 397.24 للخدمة. يعتمد عرض أصل العقد أو الذمة المدينة على حقوق الفوترة والدفع غير المعطاة، فلا يُخترع قيد تحصيل.", "Calling the handset free does not eliminate its revenue: about $82.76 of total consideration relates to it, leaving $397.24 for service. Contract-asset or receivable presentation depends on unspecified billing rights, so no cash or billing entry is invented."),
        journalEntries: [],
        reference: "IFRS 15.22–30, 73–86, 105–108",
      },

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
      {
        title: text("استثناء الاعتراف لا يلغي اختبار وجود الإيجار", "Recognition exemptions do not replace the lease test"),
        explanation: text(
          "بعد تقرير أن العقد يحتوي على إيجار، يمكن للمستأجر انتخاب استثناء الإيجار قصير الأجل إذا لم تتجاوز مدته 12 شهرًا ولا يتضمن خيار شراء؛ يكون الانتخاب بحسب فئة الأصل. ويمكن انتخاب استثناء الأصل منخفض القيمة عقدًا بعقد، ويُقيّم الأصل بقيمته عندما يكون جديدًا لا وفق حجم المنشأة. لا يصلح الاستثناء إذا كان الأصل شديد الاعتماد أو الترابط مع أصول أخرى على نحو يمنع الانتفاع به مستقلًا. عند الانتخاب تُثبت الدفعات مصروفًا على أساس القسط الثابت أو أساس منهجي آخر أكثر تمثيلًا للمنفعة، بدل أصل حق الاستخدام والالتزام المعتادين.",
          "After determining that a contract contains a lease, the lessee may elect the short-term exemption when the lease term is no more than 12 months and there is no purchase option; this election is by class of underlying asset. The low-value election is lease by lease, assessed by the asset's value when new rather than the lessee's size. An asset highly dependent on or interrelated with other assets does not qualify if it cannot be benefited from independently. If elected, payments are expensed straight-line or on another systematic basis more representative of benefits, instead of the usual ROU asset and liability.",
        ),
        keyPoints: [
          text("لا يوجد حد نقدي ثابت في نص IFRS 16 لتعريف منخفض القيمة.", "IFRS 16 specifies no fixed monetary low-value threshold."),
          text("حق الاستبدال للإصلاح فقط لا يلغي وجود أصل محدد.", "Repair-only substitution does not remove an identified asset."),
        ],
        reference: "IFRS 16.5–8, B3–B8, B13–B20",
      },
      {
        title: text("المؤجر: تصنيف العقد يغير الأصل والإيراد", "Lessor: classification changes the asset and income"),
        explanation: text(
          "يصنف المؤجر العقد تمويليًا إذا نُقلت معظم مخاطر ومنافع ملكية الأصل، وإلا فهو تشغيلي؛ لا يحكم الاسم أو مدة العقد وحدها. في الإيجار التمويلي يثبت المؤجر صافي الاستثمار في الإيجار ويعترف بدخل التمويل بمعدل عائد دوري ثابت. في التشغيلي يحتفظ بالأصل ويهلكه وفق سياسته للأصول المماثلة، ويثبت دخل الإيجار بخط مستقيم أو أساس منهجي أكثر تمثيلًا لنمط المنفعة، حتى لو اختلفت مواعيد قبض النقد. افصل خدمات الصيانة المميزة ووزع المقابل وفق IFRS 15 قبل حساب دخل الإيجار وحده.",
          "A lessor classifies a lease as finance when substantially all ownership risks and rewards transfer; otherwise it is operating. The contract label or term alone is not conclusive. For a finance lease the lessor recognises its net investment and finance income at a constant periodic rate of return. For an operating lease it retains and depreciates the asset under its policy for similar assets and recognises lease income straight-line or on a more representative systematic basis even when cash receipts differ. Separate distinct maintenance services and allocate consideration under IFRS 15 before calculating lease-only income.",
        ),
        keyPoints: [
          text("إعفاء المستأجر من أول شهرين لا يعني غياب دخل الإيجار في هذين الشهرين.", "Two rent-free months do not necessarily mean no lease income in those months."),
          text("لا تضف تكاليف المؤجر المباشرة الأولية في الإيجار التمويلي مرتين؛ تدخل قياس صافي الاستثمار.", "Do not double-count a finance lessor's initial direct costs: they are included in net investment measurement."),
        ],
        reference: "IFRS 16.17, 61–66, 67–73, 81–84; IFRS 15.73–90",
      },
      {
        title: text("الإيجار من الباطن يقاس بحق الاستخدام المتبقي", "Classify a sublease by the remaining ROU asset"),
        explanation: text(
          "يصبح المستأجر الأصلي مؤجرًا وسيطًا عند إعادة تأجير الأصل. إذا لم يكن الإيجار الرئيسي قصير الأجل مع اختيار استثناء الاعتراف، يصنف الوسيط الإيجار من الباطن بمقارنته بحق الاستخدام الناتج عن الإيجار الرئيسي، لا بعمر المبنى أو الآلة المملوكة لطرف آخر. إذا كان الباطن يغطي كامل السنوات الست الباقية من حق استخدام مدته الأصلية عشر سنوات، فذلك مؤشر قوي إلى نقل معظم مخاطر ومنافع حق الاستخدام المتبقي، فيكون الإيجار من الباطن تمويليًا في الحالة المعطاة. أما إذا كان الرئيسي قصير الأجل وعولج باستثناء IFRS 16.6، فيصنف الباطن تشغيليًا.",
          "The original lessee becomes an intermediate lessor when it subleases. Unless the head lease is short-term and the recognition exemption was elected, classify the sublease by reference to the ROU asset arising from the head lease, not the building or equipment owned by another party. A sublease covering all six years remaining of an original ten-year ROU is strong evidence that substantially all risks and rewards of that remaining right transfer, making the stated sublease a finance lease. If the head lease is short-term and accounted for using IFRS 16.6, the sublease is classified as operating.",
        ),
        keyPoints: [
          text("المقارنة الصحيحة: ست سنوات باقية لحق الاستخدام مقابل ست سنوات للباطن، لا مقابل العمر الكلي للعقار.", "Compare six remaining ROU years with six sublease years, not with the property's total life."),
        ],
        reference: "IFRS 16.61–66, B58",
      },
    ],
    workedExamples: [
      {
        title: text("ثلاثة ألياف ضوئية مميزة: من يوجه استخدامها؟", "Three distinct dark fibres: who directs their use?"),
        facts: text(
          "لعميل حق استخدام ثلاثة ألياف مظلمة محددة ومتميزة ماديًا داخل كابل أكبر لعشر سنوات. يصل العميل أطرافها بمعداته ويحدد توقيت تشغيلها والبيانات وحجمها. المورد يصلحها ويصونها، ولا يملك استبدالها إلا عند العطل أو للصيانة.",
          "A customer has a ten-year right to three specified, physically distinct dark fibres in a larger cable. It connects them to its equipment and decides when to light them and what data and volume they carry. The supplier repairs and maintains them and may substitute only for malfunction or maintenance.",
        ),
        calculations: [
          text("الألياف الثلاثة أصول محددة ماديًا، وليست مجرد نسبة غير مميزة من سعة الكابل. حق إصلاحها لا يعد استبدالًا جوهريًا طوال فترة الاستخدام.", "The three fibres are physically distinct identified assets, not an undifferentiated share of cable capacity. Repair-only replacement is not a substantive substitution right throughout use."),
          text("يحصل العميل على معظم المنافع من الاستعمال الحصري، ويتخذ قرارات كيفية الاستخدام وغرضه: التشغيل وتوقيت نقل البيانات ونوعها وحجمها. الصيانة لا تنقل هذه القرارات للمورد.", "The customer obtains substantially all benefits from exclusive use and directs how and for what purpose the fibres are used: lighting, timing, data type and volume. Maintenance does not transfer those decisions to the supplier."),
        ],
        conclusion: text("العقد يحتوي إيجارًا لحق استخدام الألياف الثلاثة؛ لا تتوفر مدفوعات لقياس أصل وخصم رقمي.", "The contract contains a lease of the three fibres; payment amounts are not given for numerical ROU and liability measurement."),
        journalEntries: [],
        reference: "IFRS 16.9, B9, B13–B24",
      },
      {
        title: text("خمس دفعات سنوية: أثر التقديم والتأخير في قياس الإيجار", "Five annual payments: advance versus arrears"),
        facts: text(
          "إيجار مبنى لخمس سنوات بدفعة 50,000 دولار سنويًا، وتكاليف مباشرة أولية 20,000 وحافز مستلم 5,000. لا تنتقل الملكية ولا يوجد خيار شراء. معدل اقتراض المستأجر 5% لأن المعدل الضمني غير متاح. قارن دفع أول 50,000 عند البدء بدفع الدفعات الخمس كلها في نهاية السنوات.",
          "A five-year building lease requires $50,000 annually, $20,000 initial direct costs and a $5,000 incentive received. Ownership does not transfer and there is no purchase option. The lessee's incremental borrowing rate is 5% because the implicit rate is not readily determinable. Compare a first $50,000 paid at commencement with all five payments in arrears.",
        ),
        calculations: [
          text("مقدمًا: القيمة الحالية لأربع دفعات غير مدفوعة = مجموع 50,000 ÷ 1.05^t للسنوات 1–4 = 177,297 تقريبًا بجمع كل سطر مقرب؛ أصل حق الاستخدام = 177,297 + 50,000 + 20,000 − 5,000 = 242,297.", "Advance: PV of four unpaid payments = sum of $50,000 / 1.05^t for years 1–4 = about $177,297 when individually rounded lines are summed; ROU asset = $177,297 + $50,000 + $20,000 − $5,000 = $242,297."),
          text("في نهاية السنة الأولى قبل الدفعة التالية، فائدة التزام المقدم = 177,297 × 5% = 8,865 تقريبًا؛ الالتزام 186,162، والدفعة التالية 50,000 عند بداية السنة الثانية. إهلاك حق الاستخدام على خمس سنوات ≈ 48,459 سنويًا إن استُخدم القسط الثابت وبافتراض قيمة متبقية صفر.", "At the first year-end before the next payment, interest on the advance liability is $177,297 × 5% ≈ $8,865; liability $186,162, with $50,000 due at the start of year two. Straight-line ROU depreciation over five years is about $48,459 annually, assuming nil residual value."),
          text("مؤخرًا: القيمة الحالية لخمس دفعات = مجموع 50,000 ÷ 1.05^t للسنوات 1–5 = 216,473 تقريبًا بجمع السطور المقربة؛ أصل حق الاستخدام = 216,473 + 20,000 − 5,000 = 231,473. فائدة السنة الأولى 10,824 تقريبًا؛ وبعد دفع 50,000 يصبح الالتزام 177,297.", "Arrears: PV of five payments = sum of $50,000 / 1.05^t for years 1–5 ≈ $216,473 when individually rounded lines are summed; ROU asset = $216,473 + $20,000 − $5,000 = $231,473. First-year interest ≈ $10,824; after the $50,000 payment, liability is $177,297."),
          text("تقريب كل خصم أولًا يختلف بنحو دولار عن تقريب مجموع القيم الحالية غير المقربة؛ ثبّت سياسة تقريب واحدة في الجدول والقيود.", "Rounding each discounted payment first can differ by about one dollar from rounding the unrounded PV total; use one rounding policy throughout the schedule and entries."),
        ],
        conclusion: text("الدفعة المدفوعة عند البدء تدخل أصل حق الاستخدام لا التزام الدفعات غير المسددة؛ لذلك يختلف القيد الافتتاحي والفائدة بين الحالتين.", "A payment at commencement enters the ROU asset, not the unpaid-payments liability; opening entries and interest therefore differ."),
        journalEntries: [
          {
            label: text("عند البدء — دفعات مقدمة", "Commencement — advance"),
            debit: text("أصل حق الاستخدام 242,297", "ROU asset 242,297"),
            credit: text("التزام إيجار 177,297 + نقدية 65,000", "Lease liability 177,297 + cash 65,000"),
            amount: text("242,297 لكل جانب", "242,297 each side"),
          },
          {
            label: text("عند البدء — دفعات مؤخرة", "Commencement — arrears"),
            debit: text("أصل حق الاستخدام 231,473", "ROU asset 231,473"),
            credit: text("التزام إيجار 216,473 + نقدية 15,000", "Lease liability 216,473 + cash 15,000"),
            amount: text("231,473 لكل جانب", "231,473 each side"),
          },
        ],
        reference: "IFRS 16.5–8, 22–29, 36–38",
      },
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
      {
        title: text("بيع وإعادة استئجار بسعر أعلى من السوق: افصل التمويل", "Above-market sale and leaseback: separate financing"),
        facts: text(
          "باعت منشأة مبنى قيمته الدفترية 600,000 دولار مقابل 800,000، بينما قيمته العادلة 750,000. استأجرته فورًا لخمس سنوات بدفعات 120,000 سنويًا مؤخرًا، وعمره المتبقي 15 سنة. تحقق البيع وفق IFRS 15، ومعدل الخصم 4.5%؛ معامل القيمة الحالية المعطى لخمس دفعات 4.390.",
          "An entity sells a building carried at $600,000 for $800,000 although its fair value is $750,000, then leases it back for five years at $120,000 annually in arrears. Remaining useful life is 15 years, the IFRS 15 sale criteria are met, the discount rate is 4.5%, and the supplied five-payment PV factor is 4.390.",
        ),
        calculations: [
          text("المقابل فوق القيمة العادلة = 800,000 − 750,000 = 50,000؛ يعالج تمويلًا إضافيًا لا مكسب بيع. القيمة الحالية للدفعات التعاقدية = 120,000 × 4.390 = 526,800؛ منها 50,000 تمويل منفصل و476,800 قيمة دفعات حق الاستخدام المحتفظ به.", "Above-market consideration = $800,000 − $750,000 = $50,000, additional financing rather than sale gain. PV of contractual payments = $120,000 × 4.390 = $526,800; split $50,000 financing and $476,800 relating to the retained right of use."),
          text("أصل حق الاستخدام = 600,000 × 476,800 ÷ 750,000 = 381,440. المكسب الإجمالي عند قيمة عادلة = 750,000 − 600,000 = 150,000؛ نصيب الحق المحتفظ به = 150,000 × 476,800 ÷ 750,000 = 95,360؛ المكسب المثبت للحق المنقول = 54,640.", "ROU asset = $600,000 × $476,800 / $750,000 = $381,440. Full fair-value gain = $750,000 − $600,000 = $150,000; retained-right share = $150,000 × $476,800 / $750,000 = $95,360; recognised transferred-right gain = $54,640."),
          text("عند عدم انتقال الملكية أو وجود خيار شراء مؤكد، يهلك حق الاستخدام على خمس سنوات لا عمر المبنى الباقي 15 عامًا؛ بالقسط الثابت وقيمة متبقية صفر يكون 381,440 ÷ 5 = 76,288 سنويًا. يراجع توزيع دفعات 120,000 بين التزام الإيجار والتمويل الإضافي عند قياسهما اللاحق.", "Absent ownership transfer or a reasonably certain purchase option, depreciate the ROU asset over five years, not the building's remaining 15 years; straight-line with nil residual gives $381,440 / 5 = $76,288 annually. Allocate subsequent $120,000 payments between the lease liability and additional financing as appropriate."),
        ],
        conclusion: text("لا تعترف بربح 200,000 من الفرق بين النقد المحصل والقيمة الدفترية؛ الربح المثبت 54,640 فقط، و50,000 تمويل إضافي.", "Do not recognise a $200,000 gain from cash proceeds less book value; recognise only $54,640 gain and $50,000 additional financing."),
        journalEntries: [
          {
            label: text("عند البيع وإعادة الاستئجار", "At sale and leaseback"),
            debit: text("نقدية 800,000 + أصل حق استخدام 381,440", "Cash 800,000 + ROU asset 381,440"),
            credit: text("مبنى 600,000 + التزام إيجار 476,800 + تمويل إضافي 50,000 + مكسب 54,640", "Building 600,000 + lease liability 476,800 + additional financing 50,000 + gain 54,640"),
            amount: text("1,181,440 لكل جانب", "1,181,440 each side"),
          },
        ],
        reference: "IFRS 16.99–102, 102A; IFRS 15.31–38",
      },
    ],
  },
  "IAS 10": {
    sections: [
      {
        title: text("التوزيع المقترح بعد الإقفال لا يصبح التزامًا بأثر رجعي", "A post-period proposed dividend is not a retrospective liability"),
        explanation: text(
          "اربط قرار توزيع الأرباح بتاريخ نشوء الالتزام، لا بتاريخ الأرباح التي سيموَّل منها. إذا أوصى مجلس الإدارة بتوزيع على حملة أدوات حقوق الملكية بعد نهاية الفترة، فلا يُثبت التوزيع دائنًا عند نهاية الفترة؛ حتى إعلان التوزيع بعد الإقفال وقبل اعتماد القوائم لا يخلق التزامًا في تاريخ الإقفال. افصل ذلك عن فوائد أو عوائد أداة مصنفة التزامًا ماليًا، التي تُقيَّم بشروطها ومواعيد استحقاقها. افحص تاريخ اعتماد القوائم ومتطلبات الإفصاح عن التوزيعات المقترحة أو المعلنة، دون تحويل الإفصاح إلى قيد استحقاق.",
          "Tie a dividend obligation to the date it arises, not the period in which the profits funding it were earned. When directors recommend a distribution on equity instruments after the reporting period, it is not a payable at period-end; even a declaration after year-end but before authorisation of the financial statements does not create an obligation at year-end. Distinguish this from interest or returns on an instrument classified as a financial liability, which must be assessed under its own terms and due dates. Check the authorisation date and applicable disclosure requirements for proposed or declared dividends without turning disclosure into an accrual.",
        ),
        keyPoints: [
          text("حدد تاريخ نهاية الفترة وتاريخ التوصية أو الإعلان وتاريخ اعتماد القوائم كلًّا على حدة.", "Identify separately the reporting date, recommendation or declaration date, and financial-statement authorisation date."),
          text("لا تعالج توزيعات الأسهم العادية المقترحة مثل فائدة أداة دين مستحقة.", "Do not treat a proposed ordinary-share dividend like accrued debt interest."),
          text("غياب التزام نهاية الفترة يعني عدم وجود قيد دائن للتوزيع في ذلك التاريخ.", "No period-end obligation means no dividend payable entry at that date."),
        ],
        reference: "IAS 10.3, 12–13; IAS 32.15–16, 35",
      },
    ],
    workedExamples: [
      {
        title: text("Polymer: توصية توزيع بعد تاريخ القوائم", "Polymer: a dividend recommendation after year-end"),
        facts: text(
          "تنتهي سنة Polymer في 31 مايو 20X8، ولديها 300,000 سهم عادي مدفوع. في 30 يونيو التالي أوصى المديرون بتوزيع 3.5 سنت للسهم. لا تذكر الوقائع إعلانًا ملزمًا قبل 31 مايو ولا تاريخ اعتماد القوائم للنشر.",
          "Polymer's year ends on 31 May 20X8 and it has 300,000 fully paid ordinary shares. On the following 30 June the directors recommended a dividend of 3.5 cents per share. The facts do not identify a binding declaration before 31 May or the date when the statements were authorised for issue.",
        ),
        calculations: [
          text("قيمة التوزيع المقترح = 300,000 × 0.035 دولار = 10,500 دولار.", "Proposed dividend = 300,000 × US$0.035 = US$10,500."),
          text("الالتزام المعترف به عن هذا التوزيع في 31 مايو 20X8 = صفر؛ ولا يُخصم 10,500 من أرباح الفترة أو الأرباح المحتجزة في قائمة ذلك التاريخ.", "Liability recognised for this dividend at 31 May 20X8 = nil; the US$10,500 is not deducted from period profit or retained earnings in the statement at that date."),
        ],
        conclusion: text(
          "التوصية اللاحقة حدث غير معدل بالنسبة إلى التزام التوزيع. لا قيد في 31 مايو؛ وإذا كانت التوصية قبل اعتماد القوائم للنشر فتُراجع متطلبات الإفصاح عن التوزيع المقترح. لا تفترض أن التوصية نفسها جعلت المبلغ مستحق الدفع في 30 يونيو؛ يتوقف قيد الفترة اللاحقة على الموافقة الملزمة وشروط الشركة.",
          "The later recommendation is non-adjusting for the dividend liability. Make no entry at 31 May; if the recommendation precedes authorisation for issue, assess disclosure of the proposed distribution. Do not assume the recommendation itself made the amount payable on 30 June; a later-period entry depends on binding approval and the entity's terms.",
        ),
        journalEntries: [],
        reference: "IAS 10.3, 12–13; IAS 32.15–16, 35",
      },
    ],
  },
};
