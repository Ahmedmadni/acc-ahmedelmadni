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
