## مكتبة المعرفة المحاسبية — Accounting Knowledge Hub

### المرحلة 1: تفعيل Lovable Cloud + قاعدة البيانات
- تفعيل Lovable Cloud (Supabase)
- إنشاء جداول:
  - `kb_categories` (id, slug, name_ar, name_en, icon, order)
  - `kb_articles` (id, slug, category_id, title_ar, title_en, excerpt_ar, excerpt_en, content_ar (jsonb sections), featured_image, author_name, author_avatar, published_at, updated_at, reading_minutes, references jsonb, faq jsonb, related_keywords text[])
  - `kb_ratings` (id, article_id, user_id, rating 1-5, unique)
  - `kb_bookmarks` (id, article_id, user_id, unique)
- RLS: قراءة عامة للمقالات والتصنيفات؛ كتابة التقييم/الحفظ للمستخدم المُسجَّل فقط على صفه.
- Seed: 7 تصنيفات (المالية، التكاليف، الضريبية، الزكاة/الضريبة السعودية، VAT، القوائم المالية، المراجعة، Excel، ERP، ريادة الأعمال = 10) + مقال تأسيسي واحد لكل تصنيف بمحتوى عربي حقيقي مختصر (~600-900 كلمة)، FAQ (3-5 أسئلة)، مراجع، صورة مميزة (placeholder gradient أو unsplash).

### المرحلة 2: المسارات (Routes) + التنقل
- `/knowledge` — الصفحة الرئيسية للمكتبة: شبكة التصنيفات + شريط بحث + أحدث المقالات + مقالات مميزة.
- `/knowledge/$categorySlug` — صفحة التصنيف: قائمة المقالات + فلترة + ترتيب.
- `/knowledge/$categorySlug/$articleSlug` — صفحة المقال (SEO-friendly URL).
- إضافة رابط "المكتبة المحاسبية" للقائمة الرئيسية في `__root.tsx` / Header (بجانب «الأدوات» و«مكتبة الكورسات»).
- ملاحظة: الـ `/library` الحالي هو مكتبة كورسات؛ نضيف قسماً جديداً منفصلاً اسمه "Knowledge Hub" لتجنب الالتباس.

### المرحلة 3: مكونات صفحة المقال
- **رأس المقال**: Breadcrumbs (Schema.org) → صورة مميزة → عنوان → معلومات الكاتب + التواريخ + وقت القراءة + تقييم نجوم.
- **شريط جانبي (sticky على الديسكتوب)**: جدول محتويات تلقائي يتولّد من عناوين H2/H3 + مؤشر التقدّم في القراءة.
- **متن المقال**: محتوى منظّم (مقدمة، عناوين، أمثلة، خلاصة) بأسلوب Typography احترافي RTL.
- **FAQ**: Accordion + JSON-LD `FAQPage`.
- **مراجع**: قائمة روابط/معايير.
- **مقالات ذات صلة**: محرك توصية بسيط — أولوية لنفس التصنيف ثم تقاطع الـ keywords (مرجّح).
- **أزرار الإجراءات**: مشاركة (Twitter/LinkedIn/WhatsApp/Copy)، حفظ (bookmark)، تقييم، طباعة PDF (إعادة استخدام `pdf-export.ts` الحالي).
- **Structured Data**: `Article`, `BreadcrumbList`, `FAQPage` كـ `<script type="application/ld+json">` عبر `head()` لكل مقال.

### المرحلة 4: البحث والفلترة
- بحث فوري عميل-جانبي (client-side fuzzy) فوق المقالات المُحمّلة على الصفحة الرئيسية للمكتبة.
- فلترة حسب التصنيف + ترتيب حسب الأحدث/الأكثر تقييماً.

### المرحلة 5: التقييم والحفظ (يتطلب تسجيل دخول)
- استخدام Lovable Cloud Auth (Email + Password افتراضياً، Google عبر broker).
- صفحة `/auth` بسيطة (تسجيل/دخول).
- زر تقييم وحفظ يطلب الدخول إذا لم يكن المستخدم مسجّلاً (toast + رابط لـ /auth).
- خدمة `getArticleStats` server fn لجلب متوسط التقييم وعدد المقيّمين.

### المرحلة 6: التصميم
- نفس الهوية الحالية: خلفية `#04101f`، ذهبي `#d7aa52`، خطوط بارزة.
- بطاقات تصنيف بأيقونات `lucide-react` موحّدة (Calculator, Receipt, FileBarChart, ShieldCheck, BookOpen, FileSpreadsheet, Server, Rocket).
- مقالات بأسلوب مجلات استشارية: عنوان كبير، ميتاداتا فاخرة، typography نظيف، فواصل ذهبية.

### الملفات المتأثرة
- جديدة: `src/routes/knowledge.index.tsx`, `src/routes/knowledge.$categorySlug.index.tsx`, `src/routes/knowledge.$categorySlug.$articleSlug.tsx`, `src/routes/auth.tsx`, `src/routes/_authenticated/route.tsx`, `src/components/knowledge/*` (CategoryGrid, ArticleCard, ArticleHeader, Toc, FaqSection, RelatedArticles, ShareButtons, RatingStars, BookmarkButton, SearchBar).
- جديدة (lib): `src/lib/knowledge/*.functions.ts` للـ server fns.
- ترحيلات SQL: جدول + RLS + Seed.
- تعديل: `src/routes/__root.tsx` (رابط التنقّل)، `src/routes/index.tsx` (قسم ترويجي للمكتبة في الصفحة الرئيسية — اختياري).

### ملاحظات التحقق
- بعد البناء: زيارة `/knowledge`، فتح تصنيف، فتح مقال، التحقق من Toc + FAQ + JSON-LD في الـ DOM، تجربة تسجيل دخول → تقييم → حفظ → طباعة PDF.

هذا حجم كبير — سأنفّذه على دفعات (Cloud أولاً، ثم الـ schema/seed، ثم المسارات والمكونات، ثم Auth وميزات التفاعل).