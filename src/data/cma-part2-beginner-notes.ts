import { CMA_PART2_FINAL_WORKED } from "@/data/cma-part2-final-worked";
import { CMA_PART2_EXTENDED_WORKED } from "@/data/cma-part2-extended-worked";

/**
 * Human-authored, beginner-first explanations for all 56 CMA Part 2 topics.
 * These are learning bridges, not replacements for the full technical guide.
 * Keep Arabic and English meaning aligned. No AI/database calls at runtime.
 */
export interface CmaBeginnerNote {
  idea: { ar: string; en: string };
  example?: {
    scenario: { ar: string; en: string };
    steps: { ar: string[]; en: string[] };
    takeaway: { ar: string; en: string };
  };
}

const ideas: readonly [string, string, string][] = [
  ["p2-su1-common-size", "بدل أن تقارن أرقام شركتين مختلفتين في الحجم، حوّل كل بند إلى نسبة. تكلفة مبيعات 60% تعني أن 60 من كل 100 من المبيعات صُرفت على تكلفة المنتج.", "Turn amounts into percentages before comparing companies of different sizes. A 60% cost-of-sales ratio means 60 out of every 100 in sales is spent on the product cost."],
  ["p2-su1-liquidity", "السؤال هنا: هل تستطيع الشركة دفع ما عليها خلال الشهور القادمة؟ لا يكفي أن تمتلك أصولًا؛ المهم هل يمكن تحويلها إلى نقد في الوقت المناسب.", "The question is whether the company can pay bills due soon. Owning assets is not enough; the company needs usable cash when payments fall due."],
  ["p2-su1-solvency", "السيولة تخص المدفوعات القريبة، أما الملاءة فتعني قدرة الشركة على تحمل ديونها على المدى الطويل والاستمرار في النشاط.", "Liquidity concerns near-term bills. Solvency asks whether the company can sustain its long-term debts and stay in business."],
  ["p2-su1-leverage", "الرافعة تعني أن جزءًا من تكاليفك ثابت أو أن تمويلك يعتمد على الدين؛ لذلك قد تؤدي زيادة صغيرة في المبيعات إلى تغير أكبر في الربح، والعكس صحيح.", "Leverage means fixed operating costs or borrowing magnify results: a small sales change can cause a larger profit change, in either direction."],
  ["p2-su2-profitability", "المبيعات الكبيرة لا تعني تلقائيًا ربحًا جيدًا. نقيس كم يتبقى من كل 100 من المبيعات، ثم كم تحقق الشركة على أموالها وأصولها.", "High sales do not automatically mean strong profit. First see how much of each 100 in sales is retained, then compare returns with assets and owners' funds."],
  ["p2-su2-reported-profit", "قد يظهر الربح مرتفعًا بسبب بيع أصل مرة واحدة أو تغيير تقدير محاسبي. هنا نفرق بين الربح المتكرر والربح الذي يصعب أن يتكرر.", "Reported profit may rise because of a one-off asset sale or an accounting estimate. Separate recurring performance from gains unlikely to recur."],
  ["p2-su2-per-share", "بدل الاكتفاء بإجمالي ربح الشركة، نسأل عن نصيب السهم العادي من الربح، ثم نقارن هذا النصيب بسعر السهم في السوق.", "Instead of looking only at total profit, calculate the earnings attributable to each ordinary share and compare that amount with the market price."],
  ["p2-su3-activity", "هذه النسب تقيس سرعة حركة أموال الشركة: كم يومًا تنتظر تحصيل العميل؟ وكم يومًا يبقى المخزون قبل بيعه؟", "Activity ratios measure how fast resources move: how long customers take to pay and how long inventory stays before sale."],
  ["p2-su3-earnings-quality", "ربح على الورق لا يساوي نقدًا في البنك. نبحث هل الأرباح تتحول إلى تحصيل فعلي، وهل تعتمد على عمليات مستمرة أم بنود استثنائية.", "Accounting profit is not cash in the bank. Check whether earnings turn into collections and come from recurring operations rather than unusual items."],
  ["p2-su4-bonds", "السند قرض تقدمه للمُصدر مقابل فوائد وسداد أصل المبلغ في موعد محدد. إذا تغيرت أسعار الفائدة في السوق يتغير سعر السند المتداول.", "A bond is a loan to an issuer with interest and repayment terms. Its market price changes as market interest rates change."],
  ["p2-su4-stock", "عندما تشتري سهمًا فأنت تشتري حصة ملكية، وليس وعدًا ثابتًا برد أصل المبلغ. حقوق السهم العادي تختلف عن الممتاز.", "Buying a share means owning part of a business, not receiving a promise of principal repayment. Ordinary and preferred shares have different rights."],
  ["p2-su4-dividends", "الشركة قد توزع بعض أرباحها على المساهمين أو تحتفظ بها للنمو. التوزيع النقدي يخفض النقد، أما توزيع الأسهم فيغير عدد الأسهم ولا يخلق نقدًا.", "A company can distribute profit or retain it for growth. Cash dividends use cash; stock dividends change share counts without creating cash."],
  ["p2-su5-markets", "في السوق الأولية تحصل الشركة على أموال من إصدار أوراق جديدة، وفي السوق الثانوية يتبادل المستثمرون أوراقًا قائمة غالبًا دون أن تقبض الشركة ثمن الصفقة.", "In a primary issue the company raises new funds. In secondary trading investors exchange existing securities, typically without paying the issuer."],
  ["p2-su5-risk-return", "العائد الأعلى غالبًا يأتي معه عدم يقين أكبر. الهدف ليس اختيار أكبر نسبة متوقعة فقط؛ بل فهم مقدار الخسارة الممكنة مقابلها.", "Higher expected return often comes with more uncertainty. Consider possible losses alongside the promised or expected return."],
  ["p2-su5-portfolio", "بدل وضع كل الأموال في أصل واحد، توزع المحفظة على أصول مختلفة. التنويع يخفض بعض المخاطر، لكنه لا يلغي مخاطر السوق كله.", "A portfolio spreads money across assets. Diversification reduces some company-specific risk but cannot eliminate market-wide risk."],
  ["p2-su5-short-financing", "التمويل القصير يغطي احتياجات مثل الرواتب والمخزون قبل تحصيل العملاء. قارِن التكلفة الفعلية وتوقيت السداد، لا نسبة الفائدة المعلنة وحدها.", "Short-term finance bridges needs such as payroll and inventory before customer collections. Compare true financing cost and repayment timing, not just the advertised rate."],
  ["p2-su5-long-financing", "المعدات والمشروعات الطويلة تحتاج تمويلًا يناسب عمرها. الدين له أقساط وفوائد، أما إصدار الأسهم فيشارك الملاك الجدد في الملكية.", "Long-lived assets need appropriately timed financing. Debt requires interest and repayment; equity financing shares ownership with investors."],
  ["p2-su6-stock-value", "نحاول تقدير ما يستحقه السهم من خلال ما قد يولده مستقبلًا، لا من خلال سعره الحالي وحده. تغيّر توقعات النمو قد يغيّر القيمة كثيرًا.", "Estimate a share's value from expected future benefits, not its current quoted price alone. Growth assumptions can greatly change the result."],
  ["p2-su6-current-capital", "الشركة تموّل نفسها بدين وملكية. تكلفة رأس المال هي متوسط ما يطلبه الدائنون والمساهمون مقابل تمويلها، مع مراعاة الضريبة على الدين عند انطباقها.", "A company funds itself with debt and equity. Its cost of capital averages lenders' and owners' required returns, allowing for debt tax effects where relevant."],
  ["p2-su6-new-capital", "إذا احتجت تمويلًا إضافيًا قد تصبح آخر دفعة تمويل أغلى من التمويل الحالي. لهذا نحسب تكلفة المال الجديد قبل قبول المشروع.", "Additional financing can cost more than existing financing. Estimate the marginal cost of new funds before approving another project."],
  ["p2-su6-derivatives", "المشتق عقد تعتمد قيمته على شيء آخر مثل سهم أو عملة. بعض العقود تمنح حق الاختيار، وأخرى تلزم الطرفين بالتنفيذ.", "A derivative's value depends on an underlying asset, such as a share or currency. Options give a choice; forwards and futures create commitments."],
  ["p2-su7-working-capital", "الشركة تحتاج نقدًا ومخزونًا وذممًا لتعمل يوميًا. رأس المال العامل يربط هذه الأصول بالالتزامات القصيرة، لكن الرقم وحده لا يكشف توقيت التحصيل.", "Daily operations need cash, inventory and receivables. Working capital compares these with short-term obligations, but its balance alone does not show payment timing."],
  ["p2-su7-cash", "قد تكون الشركة مربحة ومع ذلك تتعثر إذا جاء موعد الرواتب قبل تحصيل الفواتير. موازنة النقد تتوقع الداخل والخارج حسب التوقيت.", "A profitable company can still struggle if payroll is due before invoices are collected. A cash budget forecasts money in and out by date."],
  ["p2-su7-marketable", "إذا كان لدى الشركة نقد لا تحتاجه مؤقتًا، يمكن استثماره لفترة قصيرة. الأهم أن يكون آمنًا وسهل التسييل عند الحاجة، وليس أعلى عائد فقط.", "Temporary surplus cash may be invested briefly. Safety and access when needed matter as much as, or more than, the highest yield."],
  ["p2-su7-receivables", "زيادة البيع الآجل قد تجلب عملاء أكثر، لكنها تؤخر النقد وتزيد خطر عدم التحصيل. نقارن هامش المبيعات الإضافية بتكلفة التمويل والديون المعدومة.", "More credit sales may attract customers but delay cash and increase bad-debt risk. Compare extra contribution with financing and default costs."],
  ["p2-su7-inventory", "مخزون قليل جدًا قد يوقف البيع أو الإنتاج، ومخزون كبير يجمد الأموال. نبحث عن كمية طلب وتوقيت إعادة شراء يوازنان بين التكلفتين.", "Too little inventory risks stockouts; too much ties up cash. Find order sizes and reorder timing that balance these costs."],
  ["p2-su8-mergers", "عند شراء شركة أخرى لا يكفي معرفة سعرها. اسأل: ما قيمتها وحدها؟ وما الوفر أو النمو الذي سيحدث بعد الدمج؟ وكم ستكلف عملية الدمج؟", "An acquisition price means little alone. Estimate the target's stand-alone value, realistic merger benefits and integration costs."],
  ["p2-su8-international-trade", "في البيع لدولة أخرى لا يهم السعر فقط؛ بل من يضمن الدفع، ومتى تنتقل مخاطر البضاعة، وبأي عملة سيُدفع الثمن.", "Cross-border sales depend on more than price: who secures payment, who bears shipment risk and which currency settles the bill?"],
  ["p2-su8-exchange-systems", "إذا كانت فاتورتك بالدولار وحساباتك بالريال، فتغير سعر الصرف يغير قيمتها بعملتك. ابدأ دائمًا بتحديد أي عملة في البسط وأيها في المقام.", "A dollar invoice changes in home-currency value as exchange rates move. First identify which currency is quoted per unit of the other."],
  ["p2-su8-fx-risk", "شركة ستدفع بعملة أجنبية لاحقًا لا تعرف بالضبط كم ستكلفها اليوم. التحوط يهدف لتقليل المفاجآت، وليس ضمان تحقيق ربح من العملة.", "A future foreign-currency payment has uncertain home-currency cost. Hedging reduces surprises; it is not a guaranteed currency profit."],
  ["p2-su8-fx-effects", "تغير العملة قد يؤثر على فاتورة ستُسدد، أو ترجمة قوائم شركة أجنبية، أو قدرة الشركة على المنافسة. كل أثر يُحلل بطريقة مختلفة.", "Currency changes may affect a payable, translated foreign statements or long-term competitiveness. Each exposure requires different analysis."],
  ["p2-su9-cvp", "قبل حساب الربح اسأل: كم يتبقى من سعر بيع الوحدة بعد تكلفتها المتغيرة؟ هذا المبلغ يسدد التكاليف الثابتة أولًا، وبعدها يصبح ربحًا.", "For each unit, subtract variable cost from selling price. The remaining contribution first covers fixed costs; only then does it become profit."],
  ["p2-su9-target-income", "نقطة التعادل تعني ربحًا صفريًا. إذا أردنا ربحًا محددًا، نضيفه إلى التكاليف الثابتة ثم نقسم على هامش مساهمة الوحدة.", "Break-even gives zero profit. To earn a target profit, add it to fixed costs and divide by contribution per unit."],
  ["p2-su9-multi-product", "عندما تبيع منتجات مختلفة بهوامش مختلفة، لا يمكن استخدام هامش منتج واحد. احسب مساهمة سلة مبيعات تمثل المزيج المعتاد.", "When products have different margins, one product's margin is not enough. Calculate the contribution of a bundle matching the normal sales mix."],
  ["p2-su10-marginal-profit", "القرار يتعلق بالوحدة الإضافية: هل إيراد بيعها أكبر من التكلفة الإضافية لإنتاجها؟ لا تُدخل تكاليف لن تتغير بسبب القرار.", "For the next unit, ask whether its extra revenue exceeds its extra cost. Exclude costs unchanged by the decision."],
  ["p2-su10-relevant-costs", "في القرار بين بديلين انظر فقط إلى الأموال المستقبلية التي تختلف بينهما. ما دُفع في الماضي ولن يُسترد لا يتغير بالقرار.", "When choosing between alternatives, compare future amounts that differ. A past cost that cannot be recovered does not change with today's choice."],
  ["p2-su10-special-orders", "طلب بسعر أقل من المعتاد ليس مرفوضًا تلقائيًا. إذا كانت لديك طاقة فارغة، فقد يكون مقبولًا ما دام يغطي تكاليفه الإضافية ولا يضر مبيعاتك المعتادة.", "A discounted special order is not automatically bad. Spare capacity may make it worthwhile if it covers additional costs without displacing regular business."],
  ["p2-su10-make-buy", "هل تصنع القطعة بنفسك أم تشتريها جاهزة؟ لا تقارن كل تكاليف المصنع بسعر المورد؛ قارن ما ستتجنب دفعه فعلًا إذا توقفت عن التصنيع.", "Make or buy? Do not compare all factory costs with supplier price. Compare only costs actually avoided by stopping production, plus alternative uses of capacity."],
  ["p2-su10-process-further", "لديك منتج يمكن بيعه الآن أو تحسينه وبيعه بسعر أعلى. قارِن زيادة سعر البيع بتكلفة التحسين فقط، وليس بتكاليف إنتاج حدثت بالفعل.", "Sell now or process further? Compare the extra selling price with the additional processing cost, not costs already incurred."],
  ["p2-su10-keep-drop", "القسم الخاسر محاسبيًا قد يظل مفيدًا إذا كان يساهم في تغطية مصروفات ثابتة لن تختفي بإغلاقه. احسب ما سيزول وما سيضيع من مساهمة.", "An accounting loss does not always justify closing a division. Check which costs disappear and which contribution is lost."],
  ["p2-su11-elasticity", "مرونة الطلب تجيب: عندما يتغير السعر بنسبة معينة، كم تتغير الكمية المطلوبة؟ إذا كانت الكمية شديدة الحساسية، قد يؤدي رفع السعر إلى انخفاض الإيراد.", "Elasticity asks how much demand changes when price changes. If buyers are very sensitive, a price increase can reduce total revenue."],
  ["p2-su11-market-structures", "عدد المنافسين وطبيعة المنتج يحددان قدرة الشركة على اختيار السعر. شركة تحتكر منتجًا تختلف عن شركة تبيع سلعة لها بدائل كثيرة.", "The number of competitors and product differences affect pricing power. A monopolist faces different choices from a commodity seller with many rivals."],
  ["p2-su11-pricing", "التسعير ليس إضافة نسبة ربح على التكلفة فقط. قد تبدأ بسعر يقبله السوق ثم تستنتج أقصى تكلفة تسمح بتحقيق هامش الربح المطلوب.", "Pricing is not always a markup on cost. Sometimes market price is set first, then allowable cost is calculated to preserve target profit."],
  ["p2-su12-risk-management", "إدارة المخاطر تعني معرفة ما قد يعطل أهداف الشركة، وتقدير احتماله وأثره، ثم اختيار هل نخفضه أو نقبله أو ننقله أو نتجنبه.", "Risk management identifies events that threaten objectives, assesses likelihood and impact, then decides whether to reduce, accept, transfer or avoid exposure."],
  ["p2-su12-coso-erm", "COSO ERM ليس قائمة مخاطر فقط؛ بل طريقة تربط الثقافة والاستراتيجية وقرارات الإدارة والمتابعة بالمخاطر التي تقبلها الشركة.", "COSO ERM is more than a risk list: it connects culture, strategy, management decisions and monitoring to the risks an organization accepts."],
  ["p2-su13-capital-budgeting", "عندما تشتري معدة أو تبدأ مشروعًا لا تنظر لسعر الشراء فقط. اجمع النقد الخارج اليوم، والنقد المتوقع خلال التشغيل، والقيمة المتبقية في النهاية.", "When buying equipment or starting a project, consider cash spent now, cash generated during operations and amounts recovered at the end."],
  ["p2-su13-risk-real-options", "توقعات المشروع ليست مؤكدة. جرّب سيناريوهات مختلفة، وفكر هل تستطيع تأجيل المشروع أو توسيعه أو إيقافه إذا تغيرت الظروف.", "Project forecasts are uncertain. Test different scenarios and the value of options to delay, expand or abandon the investment."],
  ["p2-su13-discounted-cash", "100 اليوم ليست كـ100 بعد سنة؛ لأن المال المتاح الآن يمكن استثماره. لذلك نرجع التدفقات المستقبلية لقيمتها اليوم ونقارنها بتكلفة المشروع.", "100 today is worth more than 100 received later because money can earn a return. Discount future cash flows to today's value and compare them with initial cost."],
  ["p2-su13-payback", "فترة الاسترداد تقول متى تسترجع نقدًا يساوي ما دفعته في البداية. لكنها لا تخبرك وحدها عن كل الأرباح بعد الاسترداد.", "Payback shows when cumulative inflows recover the initial cash outlay. It does not measure all value earned after recovery."],
  ["p2-su13-ranking", "إذا كان لديك مشروعان ولا تستطيع تنفيذ إلا واحد، اختر بناء على القيمة التي يضيفها كل مشروع، لا أعلى نسبة عائد وحدها.", "When only one project can be chosen, focus on value added rather than the highest percentage return alone."],
  ["p2-su13-integrated-decisions", "القرار الاستثماري الكامل يجمع تكلفة البداية، وفر الضريبة، ونقد التشغيل، وبيع الأصل في النهاية، واسترداد رأس المال العامل دون تكرار أي بند.", "A full project decision combines initial cost, tax effects, operating cash, terminal asset sale and working-capital recovery without double counting."],
  ["p2-su14-business-ethics", "السلوك الأخلاقي ليس مجرد سؤال: هل التصرف قانوني؟ اسأل أيضًا: هل هو عادل وصادق؟ ومن قد يتضرر إذا أخفينا المعلومات؟", "Ethics asks more than whether something is legal. Ask whether it is fair and truthful, and who may be harmed by hidden information."],
  ["p2-su14-ima-ethics", "معايير IMA تطلب الكفاءة والسرية والنزاهة والمصداقية. إذا طُلب منك تضليل التقارير، وثّق الواقعة واتبع مسارات الحل والتصعيد المناسبة.", "IMA standards emphasize competence, confidentiality, integrity and credibility. If pressured to misstate reports, document the concern and follow appropriate resolution channels."],
  ["p2-su14-fraud", "الاحتيال يصبح أرجح عندما يجتمع ضغط على الشخص، وفرصة يستطيع استغلالها، ومبرر يقنع به نفسه. تقليل الفرصة يبدأ بفصل الصلاحيات والرقابة.", "Fraud becomes more likely when pressure, opportunity and rationalization come together. Segregating duties helps reduce opportunity."],
  ["p2-su15-legislation", "قبل أي دفعة غير عادية اسأل من المستفيد وما الغرض وهل توجد موافقة ومستند صحيح. تغيير اسم الرشوة في الدفاتر لا يجعلها مصروفًا مشروعًا.", "Before an unusual payment, check the recipient, purpose, authorization and accurate documentation. Relabeling a bribe in the books does not legitimize it."],
  ["p2-su15-responsibility", "حتى لو استطعت جمع بيانات كثيرة، فهذا لا يعني أن لك الحق في استخدامها لأي غرض. راعِ موافقة أصحابها والخصوصية والأمن والتحيز.", "Having access to data does not mean it can be used for any purpose. Consider consent, privacy, security and bias."]
];

const worked: Record<string, NonNullable<CmaBeginnerNote["example"]>> = {
  "p2-su1-liquidity": {
    scenario: { ar: "لدى شركة أصول متداولة 200,000، منها مخزون 50,000، والتزامات متداولة 100,000. ما نسبتا التداول والسريعة (مع افتراض عدم وجود بنود أخرى مستبعدة)؟", en: "Current assets are 200,000, including inventory of 50,000; current liabilities are 100,000. Find the current and quick ratios (assuming no other quick-ratio exclusions)." },
    steps: { ar: ["نسبة التداول = 200,000 ÷ 100,000 = 2 مرة.", "نستبعد المخزون من الأصول السريعة: 200,000 − 50,000 = 150,000.", "النسبة السريعة = 150,000 ÷ 100,000 = 1.5 مرة."], en: ["Current ratio = 200,000 ÷ 100,000 = 2.", "Exclude inventory: quick assets = 200,000 − 50,000 = 150,000.", "Quick ratio = 150,000 ÷ 100,000 = 1.5."] },
    takeaway: { ar: "الفرق أن نسبة التداول تشمل المخزون، أما السريعة فتركز على أصول أقرب للتحول إلى نقد.", en: "The current ratio includes inventory; the quick ratio focuses on assets more readily converted to cash." }
  },
  "p2-su2-profitability": {
    scenario: { ar: "مبيعات 100,000، وتكلفة مبيعات 60,000، ومصاريف تشغيلية 25,000. كم هامش مجمل الربح وهامش التشغيل؟", en: "Sales are 100,000, cost of sales is 60,000 and operating expenses are 25,000. Find gross and operating margins." },
    steps: { ar: ["مجمل الربح = 100,000 − 60,000 = 40,000.", "هامش مجمل الربح = 40,000 ÷ 100,000 = 40%.", "ربح التشغيل = 40,000 − 25,000 = 15,000؛ هامش التشغيل = 15%."], en: ["Gross profit = 100,000 − 60,000 = 40,000.", "Gross margin = 40,000 ÷ 100,000 = 40%.", "Operating profit = 40,000 − 25,000 = 15,000; operating margin = 15%."] },
    takeaway: { ar: "هامش 40% قبل مصاريف التشغيل ليس معناه أن صافي ربح الشركة 40%.", en: "A 40% gross margin is not a 40% net profit margin." }
  },
  "p2-su6-current-capital": {
    scenario: { ar: "تمويل الشركة 60% حقوق ملكية بتكلفة 12% و40% دين بفائدة 8%، ومعدل ضريبة مفترض 25% ينطبق على فوائد الدين. احسب WACC.", en: "Financing is 60% equity costing 12% and 40% debt costing 8%; assume a 25% tax rate applies to deductible debt interest. Find WACC." },
    steps: { ar: ["مساهمة حقوق الملكية = 60% × 12% = 7.2%.", "تكلفة الدين بعد الضريبة = 8% × (1 − 25%) = 6%.", "مساهمة الدين = 40% × 6% = 2.4%؛ المتوسط = 7.2% + 2.4% = 9.6%."], en: ["Equity component = 60% × 12% = 7.2%.", "After-tax debt cost = 8% × (1 − 25%) = 6%.", "Debt component = 40% × 6% = 2.4%; WACC = 7.2% + 2.4% = 9.6%."] },
    takeaway: { ar: "نستخدم الأوزان وتكلفة كل مصدر؛ ولا نفترض وفورات ضريبية إذا لم يكن خصم الفوائد متاحًا.", en: "Use each source's weight and cost; do not assume a tax shield when interest deductibility is unavailable." }
  },
  "p2-su7-inventory": {
    scenario: { ar: "يستهلك مخزن 1,200 وحدة سنويًا، وتكلفة إصدار الطلب 50، وتكلفة حمل الوحدة سنويًا 2. ما كمية الطلب الاقتصادية تقريبًا؟", en: "Annual demand is 1,200 units, ordering cost is 50 per order and annual holding cost is 2 per unit. Approximate EOQ?" },
    steps: { ar: ["القانون: EOQ = الجذر التربيعي لـ (2 × الطلب السنوي × تكلفة الطلب ÷ تكلفة الحفظ للوحدة).", "داخل الجذر = 2 × 1,200 × 50 ÷ 2 = 60,000.", "الجذر التربيعي لـ60,000 ≈ 245 وحدة في الطلب الواحد."], en: ["EOQ = square root of (2 × annual demand × ordering cost ÷ holding cost per unit).", "Inside the root: 2 × 1,200 × 50 ÷ 2 = 60,000.", "Square root of 60,000 ≈ 245 units per order."] },
    takeaway: { ar: "هذا النموذج يفترض طلبًا وتكاليف مستقرة؛ لا تستخدم النتيجة آليًا إذا توجد قيود سعة أو خصومات كمية.", en: "The model assumes stable demand and costs; adjust if capacity limits or quantity discounts matter." }
  },
  "p2-su9-cvp": {
    scenario: { ar: "شركة تبيع الوحدة بسعر 100، والتكلفة المتغيرة 60، والمصاريف الثابتة 20,000. كم وحدة تحتاج لكي لا تحقق ربحًا أو خسارة؟", en: "A unit sells for 100, variable cost is 60 and fixed costs are 20,000. How many units must be sold to break even?" },
    steps: { ar: ["هامش مساهمة الوحدة = 100 − 60 = 40.", "كل وحدة تساهم بـ40 في تغطية التكاليف الثابتة.", "وحدات التعادل = 20,000 ÷ 40 = 500 وحدة."], en: ["Contribution per unit = 100 − 60 = 40.", "Each unit contributes 40 toward fixed costs.", "Break-even units = 20,000 ÷ 40 = 500 units."] },
    takeaway: { ar: "عند بيع 500 وحدة يكون الربح التشغيلي صفرًا؛ فوق ذلك تبدأ المساهمة في تكوين ربح، بافتراض ثبات المعطيات.", en: "At 500 units operating profit is zero; sales beyond this begin to earn profit, assuming costs and prices stay constant." }
  },
  "p2-su9-target-income": {
    scenario: { ar: "باستخدام سعر 100 وتكلفة متغيرة 60 وثابتة 20,000، كم وحدة نبيع لنحقق ربح تشغيل 8,000؟", en: "With price 100, variable cost 60 and fixed costs 20,000, how many units earn operating profit of 8,000?" },
    steps: { ar: ["هامش الوحدة = 100 − 60 = 40.", "المبلغ المطلوب تغطيته = 20,000 تكاليف ثابتة + 8,000 ربح = 28,000.", "الوحدات المطلوبة = 28,000 ÷ 40 = 700 وحدة."], en: ["Unit contribution = 100 − 60 = 40.", "Amount to cover = 20,000 fixed cost + 8,000 desired profit = 28,000.", "Required units = 28,000 ÷ 40 = 700."] },
    takeaway: { ar: "لتحقيق ربح مستهدف قبل الضريبة نضيفه إلى التكاليف الثابتة قبل القسمة.", en: "For target pretax operating profit, add the target to fixed costs before dividing." }
  },
  "p2-su10-relevant-costs": {
    scenario: { ar: "دفعت شركة 10,000 سابقًا على دراسة لا يمكن استردادها. أمامها الآن خيار أ بتكلفة مستقبلية 6,000 وخيار ب بـ8,000، ولهما المنفعة نفسها. أيهما أقل تكلفة؟", en: "A company already paid 10,000 for a nonrefundable study. Two options now deliver the same benefit: A costs 6,000 in the future, B costs 8,000. Which costs less?" },
    steps: { ar: ["الـ10,000 دُفعت في الماضي وستظل مدفوعة مهما كان الاختيار.", "قارن المستقبل المختلف فقط: أ = 6,000، ب = 8,000.", "اختر أ، فهو أوفر بـ2,000 إذا تساوت المنافع والمخاطر."], en: ["The prior 10,000 stays spent whichever option is chosen.", "Compare differing future costs: A = 6,000, B = 8,000.", "Choose A; it saves 2,000 if benefits and risks are equal."] },
    takeaway: { ar: "التكلفة الغارقة لا تُحمّل على أحد البديلين عند اتخاذ القرار الحالي.", en: "A sunk cost is not relevant to choosing between present alternatives." }
  },
  "p2-su10-special-orders": {
    scenario: { ar: "لدى مصنع طاقة إنتاجية فارغة، وجاء طلب خاص لـ100 وحدة بسعر 70 للوحدة. التكلفة المتغيرة 50 للوحدة، ولا توجد تكلفة إضافية أخرى أو مبيعات معتادة مزاحة. هل يقبل؟", en: "A factory has idle capacity and an order for 100 units at 70 each. Variable cost is 50 per unit; there are no other incremental costs or displaced normal sales. Accept?" },
    steps: { ar: ["إيراد الطلب الإضافي = 100 × 70 = 7,000.", "تكلفته الإضافية = 100 × 50 = 5,000.", "المساهمة الإضافية = 2,000؛ يمكن قبول الطلب وفق المعطيات."], en: ["Incremental sales = 100 × 70 = 7,000.", "Incremental variable costs = 100 × 50 = 5,000.", "Incremental contribution = 2,000; the order can be accepted on these assumptions."] },
    takeaway: { ar: "إذا كان الطلب سيزيح مبيعات عادية أو يخلق مصروفات أخرى، يجب خصم أثرها أولًا.", en: "Deduct opportunity costs or other expenses if the order displaces regular sales or adds costs." }
  },
  "p2-su10-make-buy": {
    scenario: { ar: "تصنيع 100 قطعة يتطلب تكاليف متغيرة 3,000 وتكاليف ثابتة يمكن تجنبها 1,000. مورد يعرض القطع نفسها بـ3,600. لا يوجد استخدام بديل للطاقة؛ ماذا تختار؟", en: "Making 100 parts incurs 3,000 variable cost and 1,000 avoidable fixed cost. A supplier offers them for 3,600. No alternative use exists for capacity. Choose?" },
    steps: { ar: ["التكلفة التي ستتجنبها إذا اشتريت = 3,000 + 1,000 = 4,000.", "تكلفة الشراء = 3,600.", "الشراء أوفر بـ400، إذا كانت الجودة والمواعيد متماثلة."], en: ["Avoidable make cost = 3,000 + 1,000 = 4,000.", "The supplier charge for buying all 100 parts is 3,600.", "Buy saves 400 if quality and delivery are equivalent."] },
    takeaway: { ar: "لا تدخل في المقارنة المصروفات الثابتة التي ستبقى حتى بعد التوقف عن التصنيع.", en: "Exclude fixed costs that remain even if internal production stops." }
  },
  "p2-su11-elasticity": {
    scenario: { ar: "ارتفع السعر من 10 إلى 12 وانخفضت الكمية المطلوبة من 100 إلى 80. احسب مرونة نقطة المنتصف بالقيمة المطلقة.", en: "Price increases from 10 to 12 and demand falls from 100 to 80. Calculate absolute midpoint elasticity." },
    steps: { ar: ["تغير الكمية النسبي = (80 − 100) ÷ 90 = −22.22%.", "تغير السعر النسبي = (12 − 10) ÷ 11 = +18.18%.", "المرونة = |−22.22% ÷ 18.18%| ≈ 1.22؛ الطلب مرن."], en: ["Midpoint quantity change = (80 − 100) ÷ 90 = −22.22%.", "Midpoint price change = (12 − 10) ÷ 11 = +18.18%.", "Absolute elasticity ≈ 22.22% ÷ 18.18% = 1.22; demand is elastic."] },
    takeaway: { ar: "الإيراد هنا ينخفض من 1,000 إلى 960 رغم زيادة السعر.", en: "Revenue falls from 1,000 to 960 even though the selling price rises." }
  },
  "p2-su13-discounted-cash": {
    scenario: { ar: "تدفع 900 اليوم لتحصل على 1,100 بعد سنة. معدل العائد المطلوب 10%. هل المشروع يضيف قيمة؟", en: "You invest 900 today to receive 1,100 in one year. Required return is 10%. Does the project add value?" },
    steps: { ar: ["القيمة الحالية للتدفق = 1,100 ÷ 1.10 = 1,000.", "صافي القيمة الحالية NPV = 1,000 − 900 = +100.", "بما أن NPV موجبة، يضيف المشروع 100 قيمة وفق هذه الافتراضات."], en: ["Present value of inflow = 1,100 ÷ 1.10 = 1,000.", "NPV = 1,000 − 900 = +100.", "Positive NPV means 100 in value added under the assumptions."] },
    takeaway: { ar: "لا نقارن 1,100 المستقبلية مباشرة بـ900 اليوم قبل الخصم.", en: "Do not compare the future 1,100 directly with today's 900 without discounting." }
  },
  "p2-su13-payback": {
    scenario: { ar: "تكلفة مشروع 100، ويدخل 40 في نهاية كل سنة. ما فترة الاسترداد البسيطة؟", en: "A project costs 100 and returns 40 at each year end. Find simple payback." },
    steps: { ar: ["بعد السنة الأولى تسترد 40، وبعد الثانية 80.", "المتبقي بعد سنتين = 100 − 80 = 20.", "وفق افتراض الدفع في نهاية السنة فقط، لا تصل الدفعة الثالثة إلا بنهاية السنة الثالثة؛ الاسترداد الفعلي = 3 سنوات."], en: ["Recover 40 after year 1 and 80 after year 2.", "Remaining amount = 100 − 80 = 20.", "With receipts arriving only at each year-end, the third receipt arrives at the end of year three; actual payback = 3 years."] },
    takeaway: { ar: "لو افترض السؤال أن تدفق 40 يتوزع بانتظام خلال السنة الثالثة، فإن الاسترداد المستوفى بالتوزيع الخطي يصبح 2.5 سنة. اذكر افتراض التوقيت أولًا.", en: "If instead the 40 arrives uniformly during year three, linear interpolation gives 2.5 years. Always state the timing assumption." }
  },
  "p2-su14-fraud": {
    scenario: { ar: "موظف عليه التزامات شخصية، يستطيع إضافة مورد وصرف مستحقاته بنفسه، ويبرر ذلك بأنه سيعيد المبلغ لاحقًا. ما عناصر مثلث الاحتيال؟", en: "An employee under personal financial pressure can create vendors and pay them, claiming any taken funds will be returned later. Identify fraud-triangle elements." },
    steps: { ar: ["الالتزامات الشخصية قد تمثل ضغطًا.", "جمع إنشاء المورد والصرف في يد شخص واحد يخلق فرصة.", "القول «سأعيد المال» قد يمثل تبريرًا للسلوك."], en: ["Personal financial demands can create pressure.", "Vendor creation and payment by one person create opportunity.", "Saying 'I will return it' is a possible rationalization."] },
    takeaway: { ar: "فصل إنشاء المورد عن الموافقة على الصرف يقلل الفرصة لكنه لا يزيل كل المخاطر.", en: "Separating vendor creation from payment authorization reduces opportunity but does not remove all risk." }
  }
};

export const CMA_PART2_BEGINNER_NOTES: Record<string, CmaBeginnerNote> =
  Object.fromEntries(ideas.map(([id, ar, en]) => [id, {
    idea: { ar, en },
    example: worked[id] ?? CMA_PART2_EXTENDED_WORKED[id] ?? CMA_PART2_FINAL_WORKED[id],
  }]));
