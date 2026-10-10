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
];

export function getIfrsPracticeCases(standardCode: string): IfrsPracticeCase[] {
  return IFRS_BOOK2_PRACTICE_CASES.filter(
    (practiceCase) => practiceCase.standardCode === standardCode,
  );
}
