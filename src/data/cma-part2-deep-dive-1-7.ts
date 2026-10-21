import type { CmaTopicGuide } from "@/data/cma-guides";

type Lesson = NonNullable<CmaTopicGuide["lessonSections"]>[number];

/** Original extensions keyed to the 26 sections of the supplied Part 2 outlines. */
export const CMA_PART2_DEEP_DIVE_1_7: Record<string, Lesson[]> = {
  "p2-su1-common-size": [
    { heading: { ar: "التحليل الرأسي والأفقي", en: "Vertical and horizontal analysis" }, body: {
      ar: "في التحليل الرأسي تقسم بنود قائمة الدخل على مبيعات الفترة نفسها، وبنود الميزانية على إجمالي أصول تاريخ الميزانية نفسه. في التحليل الأفقي قارن مبلغ الفترة بمبلغ سنة أساس ثابتة: مؤشر الاتجاه = مبلغ الفترة ÷ مبلغ الأساس × 100. إذا كانت مبيعات الأساس 400,000 والحالية 500,000 فالمؤشر 125%، أي نمو 25%؛ أما ارتفاع بند مصروف من 10% إلى 12% من المبيعات فهو ارتفاع نقطتين مئويتين أو 20% نسبيًا. اذكر أساس المقارنة، لأن تغير التصنيف أو شراء منشأة أخرى يحد من دلالة الاتجاه.",
      en: "Vertical analysis divides income-statement lines by same-period sales and balance-sheet lines by same-date total assets. Horizontal analysis fixes a base year: trend index = current amount/base amount × 100. Sales rising from 400,000 to 500,000 yield an index of 125%, a 25% increase; an expense moving from 10% to 12% of sales rises two percentage points, or 20% relative to its original rate. State the base and consider acquisitions and reclassifications before attributing the change to operations.",
    } },
  ],
  "p2-su1-liquidity": [
    { heading: { ar: "نسب السيولة وتركيب الأصول", en: "Liquidity measures and composition" }, body: {
      ar: "نسبة النقدية = النقد وما في حكمه ÷ الخصوم المتداولة؛ والنسبة السريعة تستخدم النقد والاستثمارات القصيرة والذمم القابلة للتحصيل، فتستبعد المخزون والمدفوع مقدمًا. رأس المال العامل الصافي مبلغ وليس نسبة. عند سداد 20,000 من دائن متداول من نقد الشركة وكان المتداول 200,000 والخصوم 100,000، تصير النسبة 180,000÷80,000=2.25 بعد أن كانت 2؛ لكنها خسرت 20,000 نقدًا. افحص الذمم المقيدة، السحب على المكشوف، والالتزامات التي تستحق قبل تحصيل العملاء.",
      en: "Cash ratio is cash and equivalents/current liabilities; quick ratio includes cash, short-term liquid investments and collectible receivables but excludes inventory and prepayments. Net working capital is an amount, not a ratio. Paying a 20,000 current payable in cash when current assets are 200,000 and current liabilities 100,000 raises the current ratio from 2 to 180,000/80,000 = 2.25 while cash falls. Check restricted balances, overdrafts and liabilities due before customer collections.",
    } },
  ],
  "p2-su1-solvency": [
    { heading: { ar: "بنية رأس المال وتغطية الالتزامات", en: "Capital structure and coverage" }, body: {
      ar: "لا تخلط نسبة الدين إلى إجمالي رأس المال، الدين ÷ (الدين + حقوق الملكية)، مع الدين إلى حقوق الملكية أو إجمالي الالتزامات إلى الأصول. فدين 300 وملكية 200 يعطي 60% من رأس المال و1.5 مرة من الملكية. تغطية الفوائد EBIT ÷ الفائدة تقيس هامش الربح المحاسبي للفائدة؛ ويمكن أن تختلف عن تغطية الرسوم الثابتة التي تضم إيجارات ومدفوعات ثابتة وفق تعريف السؤال. جرّب سيناريو انخفاض EBIT واحصر أصل الدين المستحق: القدرة على دفع الفوائد وحدها لا تكفي للسداد.",
      en: "Debt-to-total-capital is debt/(debt + equity), distinct from debt/equity and total liabilities/assets. Debt of 300 and equity of 200 imply 60% of total capital and 1.5 times equity. EBIT/interest assesses the earnings cushion for interest; fixed-charge coverage may also include leases and other fixed payments under the question's definition. Stress lower EBIT and identify principal due: ability to pay interest does not establish ability to retire the debt.",
    } },
  ],
  "p2-su1-leverage": [
    { heading: { ar: "حساسية الربح والتعادل", en: "Earnings sensitivity and break-even" }, body: {
      ar: "درجة الرافعة التشغيلية = هامش المساهمة ÷ EBIT، والمالية = EBIT ÷ (EBIT − الفائدة) بافتراض عدم وجود توزيعات ممتازة. عند مبيعات 1,000 وتكلفة متغيرة 600 وثابتة 300 وفائدة 50: المساهمة 400 وEBIT 100 وربح ما قبل الضريبة 50، لذا DOL=4 وDFL=2 والمركبة=8. نمو المبيعات 2% حول هذا المستوى يوحي بزيادة ربح ما قبل الضريبة نحو 16%، لا بزيادة مضمونة لكل حجم؛ الانخفاض قرب نقطة التعادل يضخم الخسائر كذلك.",
      en: "At a given operating point DOL = contribution/EBIT and, absent preferred dividends, DFL = EBIT/(EBIT − interest). With sales 1,000, variable cost 600, fixed operating cost 300 and interest 50, contribution is 400, EBIT 100 and pretax income 50: DOL 4, DFL 2 and combined leverage 8. A nearby 2% sales rise suggests about 16% pretax income growth, not a universal forecast; losses are amplified near break-even too.",
    } },
  ],
  "p2-su2-profitability": [
    { heading: { ar: "تفسير دوبون والعائد", en: "Interpreting DuPont returns" }, body: {
      ar: "ROE = صافي الربح ÷ متوسط الملكية = هامش الصافي × دوران الأصول × مضاعف الملكية، عندما تستخدم القيم المتوسطة المتسقة. هامش 8% ودوران 1.5 ومضاعف 2 ينتج 24%. تحسن العائد نتيجة رفع المضاعف وحده ليس تحسنًا في كفاءة التشغيل. قارن أيضًا هامش التشغيل والعائد على الأصول، واضبط البنود غير المتكررة وحدود المقارنة بين الشركات؛ متوسط الأصول عادة (رصيد البداية + النهاية)÷2 إذا لم توجد حركات كبيرة أثناء السنة.",
      en: "ROE = net income/average equity = net margin × asset turnover × equity multiplier when average bases are consistent. An 8% margin, 1.5 turnover and 2 multiplier yield 24%. ROE rising solely through leverage is different from operating improvement. Compare operating margin and asset return, normalize unusual items and use more representative asset averages when material acquisitions make a simple opening/closing average misleading.",
    } },
  ],
  "p2-su2-reported-profit": [
    { heading: { ar: "التقديرات والأخطاء وقابلية التكرار", en: "Estimates, errors and recurrence" }, body: {
      ar: "قد تغير طريقة الإهلاك والأعمار النافعة ومخصص التعثر وتوقيت الاعتراف بالإيراد الهامش المعلن دون تغيير التحصيل في الفترة. قارن الإفصاحات والحركات عبر السنوات، وميز تغيير التقدير المستقبلي عن تصحيح خطأ سابق وفق السياسة المحاسبية المطبقة. إذا تضمن الربح مكسب بيع أصل غير متكرر بمبلغ 40,000 قبل ضريبة 25%، استبعد 30,000 من الربح بعد الضريبة لغرض تحليل الاستدامة فقط؛ لا تحذف المصروفات التشغيلية المتكررة لأنها تقلل الربح.",
      en: "Depreciation lives, credit-loss provisions and revenue timing can move reported margins without changing current-period cash receipts. Compare disclosures and multi-year patterns, distinguishing prospective estimate changes from corrections of prior errors under applicable accounting rules. A nonrecurring 40,000 pretax disposal gain at a 25% tax rate adds 30,000 after tax: remove that amount only in a clearly labeled sustainability analysis, while retaining ordinary recurring expenses.",
    } },
  ],
  "p2-su2-per-share": [
    { heading: { ar: "الترجيح الزمني والتخفيف", en: "Share weighting and dilution" }, body: {
      ar: "احسب المتوسط المرجح للأسهم العادية من تاريخ الإصدار أو إعادة الشراء؛ إذا ظل 80,000 سهم ستة أشهر ثم 100,000 ستة أشهر، فالمقام 90,000. أرباح 205,000 بعد توزيعات ممتازة 25,000 تعطي EPS أساسية 2. لا تخلط EPS مع القيمة الدفترية للسهم، التي تقسم حقوق العادي بعد طرح مطالبة الممتاز على الأسهم القائمة في التاريخ. في EPS المخففة افحص أدوات التحويل والخيارات بحسب قواعدها؛ أداة ترفع EPS تعامل كمضادة للتخفيف ولا تدرج.",
      en: "Weight common shares from issue or repurchase dates: 80,000 shares for six months and 100,000 for six months give 90,000 weighted shares. Income of 205,000 less preferred dividends of 25,000 produces basic EPS of 2. Book value per share instead divides residual common equity by shares outstanding at the balance-sheet date. Diluted EPS evaluates convertibles and options using the relevant rules; instruments that increase EPS are antidilutive and excluded.",
    } },
  ],
  "p2-su3-activity": [
    { heading: { ar: "دورة التشغيل والتحويل النقدي", en: "Operating and cash cycles" }, body: {
      ar: "دوران الذمم = صافي المبيعات الآجلة ÷ متوسط الذمم، ودوران المخزون = تكلفة المبيعات ÷ متوسط المخزون. حوّل كل دوران إلى أيام بقسمة 365 عليه. إذا كانت DSO=40 وDIO=50 وDPO=30، فدورة التشغيل 90 يومًا، ودورة تحويل النقد 60 يومًا. نمو المخزون قد يخفض الدوران حتى مع زيادة الطلب؛ ولحساب DPO استخدم مشتريات آجلة أو تكلفة مبيعات بديلًا معلنًا إذا تعذر توافر المشتريات، مع توضيح حدود المقارنة.",
      en: "Receivables turnover is net credit sales/average receivables; inventory turnover is COGS/average inventory. Divide 365 by each turnover for days. DSO 40, DIO 50 and DPO 30 imply a 90-day operating cycle and a 60-day cash conversion cycle. Inventory growth can reduce turns even during expansion. For DPO, use credit purchases if known or a disclosed COGS approximation; avoid comparing companies on different denominators.",
    } },
  ],
  "p2-su3-earnings-quality": [
    { heading: { ar: "حدود النسب وجودة التدفقات", en: "Ratio limitations and cash quality" }, body: {
      ar: "الربح الجيد قابل للتكرار وتدعمه تحصيلات التشغيل بمرور عدة دورات، لكن CFO منخفضًا في سنة نمو قوية قد يكون استثمارًا في الذمم وليس تلاعبًا. افحص الأرباح غير التشغيلية، حركة الذمم والمخزون، والسياسات التي تؤجل المصروف. قد تشوه الأرصدة الموسمية والمتوسطات البسيطة ونوافذ الأسعار النسب؛ كما تختلف السياسات المحاسبية وتصنيف بعض التدفقات. اجمع تحليل الاتجاه مع المقارنة القطاعية والإيضاحات، ولا تجعل نسبة CFO÷الربح اختبارًا وحيدًا.",
      en: "Sustainable income tends to convert to operating cash over several cycles, but weak CFO during expansion can reflect investment in receivables rather than manipulation. Inspect nonoperating gains, working-capital movements and policies that defer expenses. Seasonality, simple balance averages, price windows and accounting classifications can distort ratios. Use trend and industry comparisons with disclosures instead of treating CFO/net income as a single pass/fail test.",
    } },
  ],
  "p2-su4-bonds": [
    { heading: { ar: "تسعير السند وعلاقته بالفائدة", en: "Bond pricing and yield" }, body: {
      ar: "سعر السند يساوي القيمة الحالية للكوبونات مضافًا إليها القيمة الحالية للقيمة الاسمية، بمعدل السوق الملائم للمخاطر والأجل. سند اسمي 1,000 يدفع 60 سنويًا لسنتين، وعائد السوق 8%: السعر = 60÷1.08 + 1,060÷1.08² ≈ 964.33، أي خصم لأن عائد السوق أكبر من معدل الكوبون 6%. العائد الجاري 60÷السعر لا يساوي العائد حتى الاستحقاق لأنه يهمل تغير السعر نحو القيمة الاسمية؛ ارتفاع الفائدة يخفض سعر السند الثابت عادة.",
      en: "Bond price is the present value of coupons plus face value at the risk- and maturity-appropriate market yield. A 1,000 face bond pays 60 annually for two years at an 8% market yield: price = 60/1.08 + 1,060/1.08² ≈ 964.33, a discount because market yield exceeds the 6% coupon rate. Current yield (60/price) omits pull to par and differs from yield to maturity. Higher market rates normally lower a fixed-rate bond's price.",
    } },
  ],
  "p2-su4-stock": [
    { heading: { ar: "حقوق الأسهم العادية والممتازة", en: "Common and preferred claims" }, body: {
      ar: "للعادي عادة حق التصويت والمطالبة المتبقية بعد الدائنين والممتاز، أما الممتاز فيملك أولوية التوزيع والتصفية وفق عقد الإصدار. التراكمي يعني تراكم توزيعات فائتة قبل توزيع العادي؛ والمشارك قد ينال زيادة وفق شروطه. إصدار أسهم عادية جديدة قد يخفف حصة التصويت وربح السهم إذا لم تُقابل الأموال المجمعة بعائد مناسب. القيمة الدفترية للعادي لا تمثل تلقائيًا قيمته السوقية، وحقوق المطالبة الممتازة تحددها شروط الأداة.",
      en: "Common holders generally have voting and residual claims after creditors and preferred shareholders. Preferred shares have contractual priority for dividends and liquidation; cumulative arrears must be addressed before common dividends, and participating terms may grant more. New common shares can dilute voting and EPS unless proceeds generate enough return. Common book value is not market value, and the preferred claim depends on the instrument's terms.",
    } },
  ],
  "p2-su4-dividends": [
    { heading: { ar: "تواريخ التوزيع وآثار الأسهم", en: "Dividend dates and share effects" }, body: {
      ar: "ميز تاريخ الإعلان الذي تنشأ فيه توزيعات النقد المعلنة كالتزام، وتاريخ أحقية السجل، وتاريخ الدفع الذي يخرج فيه النقد؛ تاريخ التداول دون الحق يحدد من يشتري بعده دون استحقاق. التوزيع النقدي يخفض النقد والحقوق، بينما التوزيع السهمي ينقل ضمن مكونات الحقوق ولا يولد نقدًا. تجزئة السهم تزيد عدد الأسهم وتخفض القيمة الاسمية للوحدة دون تغيير إجمالي الحقوق. إعادة شراء الأسهم تخفض النقد والحقوق وتغير مقام EPS المحتمل، ولا تعني ارتفاع قيمة الشركة تلقائيًا.",
      en: "Distinguish declaration (cash dividend liability arises), record date (eligible holders) and payment (cash leaves); the ex-dividend date governs trades without entitlement. Cash dividends reduce cash and equity, while stock dividends reclassify within equity without a cash outflow. A stock split increases share count and reduces per-share par value without changing total equity. Repurchases use cash and can alter future weighted shares, but do not automatically create enterprise value.",
    } },
  ],
  "p2-su5-markets": [
    { heading: { ar: "الاكتتاب وكفاءة المعلومات", en: "Offerings and information efficiency" }, body: {
      ar: "في السوق الأولية تنتقل حصيلة الإصدار إلى الجهة المصدرة بعد رسوم الاكتتاب؛ تداول السهم في السوق الثانوية بين المستثمرين لا يعطي المُصدر حصيلة جديدة عادة. سوق النقد لأدوات قصيرة الأجل وسوق رأس المال لأدوات أطول. في كفاءة السوق بالشكل الضعيف تنعكس بيانات الأسعار التاريخية في السعر؛ شبه القوي يشمل المعلومات العامة؛ والقوي يفترض شمول المعلومات الخاصة كذلك. هذه نماذج تحليلية وليست ضمانًا بأن السعر يساوي القيمة الجوهرية دومًا. افصل بين مخاطر الإفصاح، رسوم الطرح، والتخفيف.",
      en: "Primary-market issuance sends proceeds to the issuer net of underwriting and flotation costs; ordinary secondary-market trades transfer ownership between investors. Money markets cover short maturities and capital markets longer-term instruments. Weak-form efficiency incorporates past prices; semistrong form incorporates public information; strong form would also incorporate private information. These are analytical hypotheses, not guarantees that price always equals intrinsic value. Evaluate disclosure, issuance fees and dilution separately.",
    } },
  ],
  "p2-su5-risk-return": [
    { heading: { ar: "العائد المتوقع والمخاطرة وبيتا", en: "Expected return, dispersion and beta" }, body: {
      ar: "العائد المتوقع هو المتوسط المرجح لاحتمالات النتائج، وليس العائد المؤكد. التباين = مجموع الاحتمال × مربع فرق كل عائد عن المتوقع، والانحراف المعياري جذره. بيتا تقيس حساسية العائد لعائد السوق ضمن نموذج مخاطرة منتظمة؛ قد يكون لأصل تقلب إجمالي مرتفع لكن بيتا منخفضة. إذا كان الخالي من المخاطر 4% وعائد السوق 10% وبيتا 1.2، يعطي CAPM عائدًا مطلوبًا 4%+1.2×(10%−4%)=11.2%. هذا تقدير مشروط بالمدخلات لا ضمان للاستثمار.",
      en: "Expected return is a probability-weighted mean, not a certain outcome. Variance is the probability-weighted sum of squared deviations and standard deviation its square root. Beta measures market sensitivity within a systematic-risk model; total volatility can be high despite modest beta. With risk-free rate 4%, expected market return 10% and beta 1.2, CAPM estimates required return of 4% + 1.2 × (10% − 4%) = 11.2%, conditional on the inputs.",
    } },
  ],
  "p2-su5-portfolio": [
    { heading: { ar: "التنويع والارتباط والمحفظة الكفؤة", en: "Diversification and efficient portfolios" }, body: {
      ar: "عائد المحفظة متوسط موزون لأوزان القيمة السوقية؛ مخاطرتها لا تساوي عمومًا المتوسط الموزون لانحرافات الأصول لأن التغاير بين العوائد مهم. أصلان بارتباط +1 لا يوفران فائدة تنويع كالارتباط الأقل، والارتباط −1 قد يتيح تحوطًا كاملًا بأوزان مناسبة في نموذج مبسط. يقل خطر الشركة الخاص بتنويع واسع، لكن خطر السوق العام يبقى. المحفظة الكفؤة تقدم أعلى عائد متوقع عند مستوى مخاطرة معين أو أقل مخاطرة عند عائد مستهدف، حسب الفرضيات.",
      en: "Portfolio return is the value-weighted mean of asset returns. Portfolio risk is not usually the weighted mean of individual standard deviations because covariance matters. Correlation +1 offers less diversification than lower correlation; −1 can theoretically hedge perfectly at suitable weights in a simple model. Broad diversification reduces company-specific risk, not marketwide risk. An efficient portfolio offers the highest expected return for a given risk or lowest risk for a target return under its assumptions.",
    } },
  ],
  "p2-su5-short-financing": [
    { heading: { ar: "تكلفة الخصم وشروط القرض", en: "Trade credit and loan costs" }, body: {
      ar: "شروط 2/10 صافي 40 تعني خصم 2% إذا دُفع خلال 10 أيام، وإلا يستحق كامل المبلغ في اليوم 40. تكلفة ترك الخصم التقريبية سنويًا = 0.02÷0.98 × 365÷30 ≈ 24.83%؛ قارنها بتكلفة اقتراض قصير لتسديد مبكر. القرض المخصوم يقتطع الفائدة مقدمًا، فتُحسب تكلفته على النقد المتحصل لا الاسمي؛ والرصيد التعويضي غير المتاح يخفض الأموال القابلة للاستخدام. افحص رسوم الالتزام والضمان وتوقيت السحب قبل مقارنة المعدلات المعلنة.",
      en: "Terms 2/10 net 40 offer a 2% discount by day 10, otherwise full payment on day 40. Approximate annual cost of skipping the discount is .02/.98 × 365/30 ≈ 24.83%; compare this with borrowing to pay early. A discounted loan deducts interest upfront, so effective cost uses usable proceeds rather than face amount. Required compensating balances further reduce usable funds. Include commitment fees, collateral and draw timing when comparing quoted rates.",
    } },
  ],
  "p2-su5-long-financing": [
    { heading: { ar: "مواءمة الأجل وأدوات التمويل", en: "Maturity matching and instruments" }, body: {
      ar: "الأصول طويلة العمر تحتاج غالبًا تمويلًا ملائم الأجل لتجنب سداد قرض قصير قبل تحقق تدفق الأصل. الدين يحافظ على الملكية لكنه يفرض مدفوعات وتعهدات، بينما إصدار أسهم يخفف حصة الملاك دون إلزام بسداد أصل. قد يوفر التأجير استخدام الأصل لقاء دفعات وفق العقد، وللسندات القابلة للتحويل وحامل الضمان حق تحويل أو شراء بشروط قد يؤدي إلى تخفيف مستقبلي. الأرباح المحتجزة مصدر ملكية له تكلفة فرصة، وليست مجانية، وتقييم البدائل يحتاج التدفق بعد الضريبة وحدود المخاطر.",
      en: "Match long-lived assets with funding maturities that do not force refinancing before assets produce cash. Debt preserves ownership but creates fixed payments and covenants; new equity dilutes owners but has no principal maturity. Leases provide use rights for payments under their terms; convertibles and warrants can create future dilution. Retained earnings are equity capital with an opportunity cost, not free financing. Compare after-tax cash flows and refinancing risk as well as quoted rates.",
    } },
  ],
  "p2-su6-stock-value": [
    { heading: { ar: "النمو الثابت والمتغير والممتاز", en: "Constant and variable growth" }, body: {
      ar: "نموذج جوردون P0 = D1÷(ke−g) يحتاج توزيع السنة المقبلة ونموًا دائمًا أقل من العائد المطلوب. إذا كان D0=2 وينمو 5%، فـD1=2.10، ومع ke=12% تكون القيمة 30. في النمو المتغير، اخصم توزيعات سنوات النمو السريع كلًّا على حدة ثم أضف القيمة النهائية في نهاية آخر سنة سريعة، وخصمها للحاضر؛ لا تستخدم D0 في البسط النهائي. السهم الممتاز ذو توزيع ثابت دائم قد يقدر بقيمة Dp÷kp عند توافر افتراض الاستمرار.",
      en: "Gordon's P0 = D1/(ke − g) requires next year's dividend and perpetual growth below required return. If D0 = 2, growth 5% and ke 12%, D1 = 2.10 and value = 30. For nonconstant growth discount each high-growth dividend separately, add terminal value at the end of the last high-growth year and discount it back; use the next dividend in that terminal formula. A perpetually fixed preferred dividend may be valued as Dp/kp under its assumptions.",
    } },
  ],
  "p2-su6-current-capital": [
    { heading: { ar: "مكونات WACC والأوزان", en: "WACC components and weights" }, body: {
      ar: "التكلفة الملائمة للدين القائم عند تمويل قرار جديد هي عائد السوق الحالي للدين المشابه، لا كوبونه التاريخي. يُضرب الدين في (1−معدل الضريبة) فقط إذا كانت الفائدة قابلة للخصم وفق الحالة؛ لا تطبق الدرع على توزيعات الأسهم. تعكس الأوزان المستهدفة أو القيم السوقية تكلفة فرصة رأس المال بصورة أنسب من الأرصدة الدفترية عند اختلاف الأسعار. على سبيل المثال دين 40% بتكلفة 8% وضريبة 25% وملكية 60% بتكلفة 14%: WACC = 2.4% + 8.4% = 10.8%. لمشروع بمخاطر مختلفة، عدل معدل الخصم للمخاطر بدل استعمال WACC الشركة دون تفكير.",
      en: "For a new decision use the current market cost of comparable debt, not an old coupon. Apply (1 − tax rate) to interest only when it is deductible under the case; equity dividends get no such shield. Target or market-value weights generally better represent opportunity cost than stale book amounts. Debt 40% at 8% with 25% tax and equity 60% at 14% yield WACC 2.4% + 8.4% = 10.8%. A project with materially different risk requires a risk-adjusted discount rate rather than automatic use of companywide WACC.",
    } },
  ],
  "p2-su6-new-capital": [
    { heading: { ar: "نقاط الانقطاع والتكلفة الهامشية", en: "Break points and marginal capital" }, body: {
      ar: "إذا توفر مصدر بمبلغ محدود ووزنه المستهدف w، تنفد سعته عندما يبلغ إجمالي التمويل المتراكم المبلغ ÷ w. أرباح محتجزة 120,000 بوزن ملكية 60% تعطي نقطة 200,000؛ مصدر دين رخيص 80,000 بوزن 40% ينفد عند 200,000 كذلك. بعد الانقطاع أعد حساب WACC بمكونات التكلفة الجديدة لا بكل الأموال السابقة. عند إصدار سهم وتوزيع السنة المقبلة D1 وتكلفة طرح نسبتها f من سعر P0، يمكن تقدير تكلفة الملكية الجديدة D1÷[P0(1−f)]+g إذا انطبقت فرضيات النمو المستقر.",
      en: "A source with limited available funding and target weight w is exhausted when total cumulative funding reaches its amount/w. Retained earnings 120,000 at 60% equity create a 200,000 break point; cheap debt 80,000 at 40% debt also runs out at 200,000. Recalculate marginal WACC with the new component costs beyond the break, rather than applying one historical rate throughout. Under stable-growth assumptions new equity cost can be estimated as D1/[P0(1−f)] + g when flotation fraction f reduces net proceeds.",
    } },
  ],
  "p2-su6-derivatives": [
    { heading: { ar: "التحوط بالعقود والخيارات", en: "Hedges with contracts and options" }, body: {
      ar: "مشتري خيار بيع بسعر تنفيذ 50 وقسط 3 وسعر نهائي 40 يحقق عائدًا 10 وربحًا صافيًا 7 للوحدة؛ إذا صعد السعر فوق 50 يخسر القسط فقط. يثبت العقد الآجل سعر تبادل مستقبلي ملزم للطرفين، وتُسوّى العقود المستقبلية عادة يوميًا بهوامش، بينما مبادلة الفائدة تبادل تدفقات محسوبة على أصل اسمي لا تبادل الأصل نفسه بالضرورة. لقياس نجاح التحوط اجمع تغير قيمة التعرض الأساسي وعائد المشتق والقسط أو رسومه؛ عائد المشتق وحده لا يحدد النتيجة الاقتصادية.",
      en: "A put buyer with strike 50, premium 3 and expiry spot 40 receives payoff 10 and net profit 7 per unit; above strike the buyer loses only the premium. A forward fixes an obligatory future exchange price; futures are generally exchange-traded with daily margin settlement. An interest-rate swap exchanges calculated cash flows on a notional principal, not necessarily the principal itself. Evaluate hedge success by combining underlying exposure changes with derivative cash flows and premiums.",
    } },
  ],
  "p2-su7-working-capital": [
    { heading: { ar: "السياسة المحافظة والهجومية", en: "Conservative and aggressive policy" }, body: {
      ar: "رأس المال العامل الدائم هو الحد الأدنى للأصول المتداولة عبر المواسم، أما المؤقت فيرتفع مع الذروة ثم يهبط. تمويل جزء كبير من الدائم بقرض قصير يعرض الشركة لمخاطر إعادة التمويل وارتفاع الفائدة. السياسة المحافظة تحتفظ بسيولة وتمويل طويل أكبر مقابل تكلفة وفرصة عائد ضائعة؛ والهجومية تقلص هذه الهوامش وتقبل احتمال عجز قصير. حدد سياسة مناسبة بنمط التحصيل وحجم المخزون وتقلب الطلب، وليس بمجرد تعظيم نسبة التداول.",
      en: "Permanent working capital is the minimum current-asset level across seasons; temporary needs rise and fall with activity. Funding much of the permanent layer with short-term borrowing adds rollover and rate risk. Conservative policy retains more liquidity and longer-term finance at a cost and foregone return; aggressive policy uses smaller buffers and accepts cash shortfall risk. Match the choice to collection patterns, inventory and demand volatility rather than maximizing the current ratio.",
    } },
  ],
  "p2-su7-cash": [
    { heading: { ar: "سرعة التحصيل والرصيد المتاح", en: "Collection speed and usable balance" }, body: {
      ar: "تخطيط النقد يضع التحصيلات والمدفوعات في الأسابيع أو الأشهر التي تقع فيها فعلًا. قد تختصر وسائل الدفع والتحصيل الإلكترونية والتجميع المصرفي زمن التحصيل، بينما تأخير دفع الموردين إلى تاريخ الاستحقاق المسموح يحافظ على النقد دون الإضرار بالعلاقة أو فقد خصم مربح. إذا اشترط البنك رصيدًا تعويضيًا 10% عند سحب 100,000 ولم يكن لدى الشركة رصيد قائم يغطيه، فالنقد القابل للاستخدام 90,000 فقط قبل الفائدة. ميز الرصيد الدفتري عن الرصيد المتاح عند قياس عجز الموازنة.",
      en: "Cash budgets place receipts and payments in the weeks or months when they occur. Electronic collection and concentration can reduce collection float; paying suppliers on permitted due dates preserves cash without losing profitable discounts or damaging relationships. If a bank requires a 10% compensating balance on a 100,000 draw and no existing funds satisfy it, only 90,000 is usable before interest. Distinguish ledger balance from available cash when funding a shortfall.",
    } },
  ],
  "p2-su7-marketable": [
    { heading: { ar: "مواءمة الأجل ومخاطر الورقة", en: "Matching maturity and security risk" }, body: {
      ar: "سيولة الورقة هي القدرة على بيعها سريعًا بقيمة قريبة من المتوقعة، لا مجرد وجود سعر معلن. قارن الأذون الحكومية والأوراق التجارية والودائع من حيث خطر المُصدر، الأجل، إمكانية التسييل وتكلفة الخروج. ورقة سعرها 49,500 وتدفع 50,000 بعد 90 يومًا تولد عائد فترة 500÷49,500≈1.0101%؛ العائد السنوي البسيط على 365 يومًا يقارب 4.10%، لكن المقارنة الصحيحة تتبع أساس الأيام والتركيب والضريبة المعطاة لكل بديل.",
      en: "Liquidity means being able to sell promptly near expected value, not merely observing a quoted price. Compare government bills, commercial paper and deposits by issuer credit, maturity, exit ability and cost. A security bought for 49,500 and redeemed for 50,000 in 90 days returns 500/49,500 ≈ 1.0101% for the period; a simple 365-day annualization is about 4.10%. Compare instruments on matched day counts, compounding and taxes specified in the case.",
    } },
  ],
  "p2-su7-receivables": [
    { heading: { ar: "شروط الائتمان والتخصيم", en: "Credit terms and factoring" }, body: {
      ar: "قبل تعديل شروط الائتمان، قدر مساهمة المبيعات الجديدة وخسائر التعثر وتكاليف التحصيل والاستثمار الإضافي في الذمم. متوسط الذمم الإضافية ≈ المبيعات الآجلة الإضافية × أيام التحصيل ÷ أيام السنة في تبسيط مناسب؛ ثم اضرب الرصيد الذي يحتاج تمويلًا في تكلفة الفرصة الملائمة حسب افتراض السؤال. التخصيم يبيع أو يمول الذمم لقاء رسوم وقد ينقل خطر التعثر أو يُبقي حق الرجوع بحسب العقد؛ قارنه بالاقتراض والتحصيل الداخلي على صافي النقد وتوزيع الخطر، لا بمبلغ الفاتورة فقط.",
      en: "Before changing credit terms estimate incremental sales contribution, defaults, collection expense and funds tied up in receivables. A simplified additional average receivable is incremental credit sales × collection days/days in year; apply the financing rate to the appropriate invested balance under the question's assumptions. Factoring sells or finances receivables for fees and may transfer or retain default risk depending on recourse terms. Compare its net cash and risk transfer with borrowing and internal collection.",
    } },
  ],
  "p2-su7-inventory": [
    { heading: { ar: "كمية الطلب ومخزون الأمان", en: "Order size and safety stock" }, body: {
      ar: "في EOQ التقليدي تكلفة الطلب السنوية = (D÷Q)×S، والحمل السنوي للمخزون الدوري = (Q÷2)×H؛ عند الكمية المثلى يتساوى الطرفان إذا ثبُتت الفروض. لا تدخل تكلفة الشراء المتساوية بين البدائل في التفاضل، لكن خصم الكمية يغيّر المقارنة ويستلزم حساب إجمالي تكلفة كل شريحة صالحة. نقطة إعادة الطلب = الطلب اليومي × مهلة التوريد + مخزون الأمان. يرفع مخزون الأمان تكلفة الحمل ليقل احتمال نفاد الصنف؛ اختبر خدمة العملاء وتقلب الطلب ووقت التوريد بدل إضافته إلى Q آليًا.",
      en: "Traditional EOQ annual ordering cost is (D/Q)S and annual cycle-stock carrying cost is (Q/2)H; they are equal at the optimum under standard assumptions. Constant purchase cost cancels in the comparison, but quantity discounts require full relevant cost for each feasible price tier. Reorder point = daily demand × lead time + safety stock. Safety stock raises carrying costs while lowering stockout exposure; determine it from service targets and demand and lead-time uncertainty, not by automatically adding it to Q.",
    } },
  ],
};
