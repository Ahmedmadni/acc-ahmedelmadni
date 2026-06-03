# ترقية قسم الزكاة والضرائب — خطة التنفيذ

## 1. أدوات الحساب الجديدة (`src/components/tools/Calculators.tsx` + `tools-registry.ts`)

### نموذج الإقرار الضريبي السعودي (VAT Return)
حقول الإدخال:
- المبيعات الخاضعة للضريبة (Taxable Sales)
- المبيعات صفرية النسبة (Zero-Rated)
- المبيعات المعفاة (Exempt)
- المشتريات (Purchases)
- ضريبة المدخلات (Input VAT)
- ضريبة المخرجات (Output VAT) — تُحسب تلقائياً = Taxable × 15%
- **صافي الضريبة** (Net VAT) = Output − Input

### نموذج إقرار الزكاة السعودي (Zakat Declaration)
- رأس المال (Capital)
- الأرباح المبقاة (Retained Earnings)
- الاحتياطيات (Reserves)
- الاستثمارات (Investments)
- الأصول الثابتة (Fixed Assets)
- التسويات (Adjustments)
- **الوعاء الزكوي** = (Capital + Retained + Reserves − Investments − Fixed Assets ± Adjustments)
- **الزكاة المستحقة** = الوعاء × 2.5%

### ميزات مشتركة لكلا النموذجين
- دعم العربية/الإنجليزية (يستفيد من `lang` الموجود).
- **تحقق الإدخالات** (Validation) عبر `zod`: أرقام موجبة، حد أقصى منطقي.
- **شرح بجانب كل حقل** (tooltip + نص توضيحي) ثنائي اللغة.
- **روابط مرجعية** للوائح الرسمية (ZATCA): زر يفتح `zatca.gov.sa` للائحة ذات الصلة.
- **شرح AI**: زر "اشرح الحساب" بجانب النتيجة، يستدعي `createServerFn` يبعث للنموذج `google/gemini-3-flash-preview` ليشرح الناتج بلغة المستخدم.
- **تصدير PDF**: يستفيد من `src/lib/pdf-export.ts` الموجود (نمط مستخدم في `tools.$toolId.tsx`).
- **تصدير Excel**: مكتبة `xlsx` (تُضاف عبر `bun add xlsx`).

## 2. الأرشيف التاريخي للإقرارات

جدول جديد `public.tax_declarations`:
- `user_id` (FK to auth.users)
- `type` enum: `vat` | `zakat`
- `period_label` (مثلاً Q1-2026)
- `input_data` jsonb
- `result_data` jsonb
- `created_at`

RLS: كل مستخدم يرى/يحرر إقراراته فقط. المشرف يرى الكل.

Server functions (`src/lib/tax/declarations.functions.ts`):
- `saveDeclarationFn` — حفظ إقرار.
- `listMyDeclarationsFn` — قائمة إقراراتي.
- `deleteDeclarationFn` — حذف.
- `explainCalculationFn` — استدعاء AI للشرح.

## 3. صفحة الأرشيف
- مسار جديد محمي: `src/routes/_authenticated/declarations.tsx`
- جدول بإقرارات المستخدم مع أزرار: عرض / تنزيل PDF / حذف.
- زر في صفحة الأداة "حفظ في الأرشيف" يظهر للمسجَّلين فقط.

## 4. تسجيل الأدوات
- إضافة `vat-return` و`zakat-declaration` في `tools-registry.ts` ضمن تصنيف Zakat & Tax.
- بطاقات الأدوات في `/tools` ستعرضها تلقائياً.
- زر "أرشيف إقراراتي" بجانب الأدوات للمستخدمين المسجلين.

## 5. الملفات المتأثرة (تقديري)
- إنشاء: `src/components/tools/VatReturnForm.tsx`, `ZakatDeclarationForm.tsx`, `src/lib/tax/declarations.functions.ts`, `src/lib/tax/excel-export.ts`, `src/routes/_authenticated/declarations.tsx`, migration للجدول الجديد.
- تعديل: `Calculators.tsx` (إضافة الـ id الجديدين)، `tools-registry.ts`، `pdf-export.ts` (دالة generic للنموذج).
- تبعية جديدة: `xlsx`.

## ملاحظات تقنية
- استدعاءات AI تمر عبر `createServerFn` + `requireSupabaseAuth` لحماية الكوتا.
- صادرات PDF تستخدم الـ DOM capture الحالي (نفس نمط الأدوات الأخرى) لاتساق التصميم.
- جميع نصوص الواجهة في كائنات `{ ar, en }` على نسق `i18n.ts` الحالي.

هل أبدأ التنفيذ بهذه الخطة؟