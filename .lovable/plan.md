## الهدف
لوحة تحكم واحدة `/admin/library` تُمكّن المدير من إدارة كل محتوى المكتبة (مقالات + كورسات + كتب + روابط + فيديوهات) — إضافة/تعديل/حذف يدوي + توليد بالذكاء الاصطناعي.

## التغييرات

### 1. قاعدة البيانات (migration واحدة)
جدول جديد `library_items`:
- `id`, `type` (enum: course | book | video | external_link | tool)
- `title_ar`, `title_en`, `description_ar`, `description_en`
- `category_slug` (يربط مع تصنيفات المكتبة الحالية: fundamentals, reporting, tax, audit, software)
- `url` (رابط خارجي للكورس/الكتاب/الفيديو)
- `cover_image`, `author`, `provider` (Coursera, YouTube, إلخ)
- `level` (beginner/intermediate/advanced), `duration_hours`, `is_free`, `price`
- `tags[]`, `sort_order`, `is_published`
- `created_at`, `updated_at`
- RLS: قراءة عامة للمنشور فقط، كتابة للأدمن فقط
- GRANT للـ anon (قراءة) + authenticated + service_role

### 2. Server Functions جديدة `src/lib/library/manage.functions.ts`
- `listLibraryItemsFn` (admin: كل العناصر)
- `createLibraryItemFn` / `updateLibraryItemFn` / `deleteLibraryItemFn`
- `generateLibraryItemWithAIFn`: يأخذ {type, topic_hint, category} → يستخدم Lovable AI Gateway (gemini-2.5-flash) لتوليد عنوان/وصف/tags ثم يحفظ كـ draft

أيضاً نضيف للمقالات:
- `updateArticleFn` / `deleteArticleFn` في `generate.functions.ts`

### 3. لوحة التحكم `/admin/library` (route جديد تحت `_authenticated`)
صفحة واحدة بتبويبات (Tabs):
- **تبويب "المقالات"** — جدول كل المقالات (الموجود + جديد): تعديل inline، حذف، توليد جديد بالـ AI، نشر/إلغاء
- **تبويب "الكورسات"** — جدول library_items حيث type=course: زر "إضافة يدوي" + زر "توليد بالـ AI"
- **تبويب "الكتب"** — type=book
- **تبويب "الفيديوهات والروابط"** — type=video / external_link

كل تبويب: جدول + Dialog للإضافة/التعديل (form بكل الحقول) + زر AI يفتح dialog صغير (موضوع + تصنيف) → يولّد ويعبّي الـ form تلقائياً.

### 4. ربط الواجهة الأمامية
- `src/routes/library.tsx` يقرأ من `library_items` (type=course) بدل القائمة الثابتة في i18n، fallback للقائمة الحالية لو الجدول فارغ
- لا تغيير على واجهة المقالات (تستخدم `kb_articles` أصلاً)

### 5. زر دخول للوحة
في صفحة `/_authenticated/admin/knowledge` نضيف زر "إدارة المكتبة الكاملة" يفتح `/admin/library`.

## ملاحظات تقنية
- استخدام shadcn: Tabs, Dialog, Table, Form, Input, Textarea, Select, Switch
- التحقق من المدخلات بـ Zod في الـ server functions
- AI generation عبر `createLovableAiGatewayProvider` (مفتاح LOVABLE_API_KEY متوفر)
- لا حذف فعلي للمقالات الموجودة — فقط إضافة قدرات الإدارة
