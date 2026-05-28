# خطة تطوير منصة الأدوات المحاسبية الذكية

الطلب ضخم جداً (أكثر من 30 أداة + مكتبة معايير IFRS كاملة + مساعد AI + Case Studies + Templates). تنفيذه دفعة واحدة سيُنتج كوداً سطحياً وغير مختبر. أقترح تقسيمه إلى مراحل مع الحفاظ الكامل على الهوية البصرية الحالية (نفس الألوان والخطوط في `src/styles.css`).

## المرحلة 1 — البنية الأساسية وأهم 6 أدوات (هذه المرحلة الآن)

### 1. صفحة جديدة `/tools` — "الأدوات المحاسبية الذكية"
- Route جديد `src/routes/tools.tsx` + رابط في النافبار.
- Hero مختصر + بحث داخلي + Tabs للفئات (تمويل/ضرائب/تحليل/Excel/IFRS).
- بطاقات Glassmorphism تستخدم نفس tokens الموجودة (`--card`, `--primary`, `--accent`) بدون ألوان جديدة.
- دعم RTL/EN عبر `i18n.ts` الحالي.

### 2. صفحة أداة `/tools/$toolId` مع Layout موحّد
- العمود الأيسر: الحاسبة التفاعلية (Live Calculation).
- العمود الأيمن (Info Panel): شرح مبسط، متى تُستخدم، المعيار المرتبط، المعادلة، أخطاء شائعة، Tips.
- زر تصدير PDF (طباعة المتصفح) + زر مشاركة (Web Share API).

### 3. الأدوات المُنفّذة في هذه المرحلة (الأكثر طلباً)
1. **PV** — Present Value
2. **FV** — Future Value
3. **NPV** — مع جدول تدفقات
4. **IRR** — حل عددي (Newton)
5. **Loan Amortization** — جدول كامل + Chart
6. **VAT Calculator** — شامل/غير شامل

كل أداة مرتبطة بمرجعها (IFRS/IAS) في الـ Info Panel.

## المرحلة 2 (لاحقاً — بعد موافقتك)
- بقية أدوات التمويل: DCF, Payback, Profitability Index, Effective Rate, Bond, **Lease IFRS 16**.
- أدوات الضرائب: Zakat, WHT, Corporate Tax, **Deferred Tax IAS 12**.
- Financial Ratios Dashboard مع Recharts ومقارنة Benchmark.
- أدوات Excel: Journal Entry Generator, Trial Balance, Depreciation, Inventory (FIFO/LIFO/WA).

## المرحلة 3
- **IFRS Knowledge Hub**: صفحة لكل معيار (15, 16, 9, IAS 36, 2, 12, 16) مع شرح + أمثلة + Decision Trees + Common Mistakes.
- نظام Tooltips للمصطلحات.
- Case Studies + Templates (Excel/Checklists).

## المرحلة 4
- توسيع `AIAssistant` الحالي ليصبح "AI Accounting Assistant" متخصص (System Prompt محدّث + Quick Actions: شرح معيار، اقتراح قيد، تفسير نسبة).
- مقارنات تفاعلية (IFRS vs GAAP, FIFO vs WA, Finance vs Operating Lease).

## ملاحظات تقنية
- **بدون** تغيير الألوان/الخطوط. كل البطاقات الزجاجية باستخدام `bg-card/60 backdrop-blur` فقط.
- الحسابات في `src/lib/finance.ts` (دوال نقية + اختبارات بسيطة).
- Framer Motion موجود مسبقاً — استخدامه باعتدال (fade/slide خفيفة).
- لا حاجة لـ Supabase في هذه المراحل (الأدوات client-side).
- الحفاظ على مكوّن `AIAssistant` و`Library` كما هما.

## ما أحتاج تأكيده منك
هل أبدأ بـ **المرحلة 1** الآن (البنية + 6 أدوات + Info Panel كامل)، أم تفضّل ترتيباً مختلفاً للأدوات؟