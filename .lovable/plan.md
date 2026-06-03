## نظام أتمتة المحتوى المحاسبي بالذكاء الاصطناعي

### نظرة عامة
بناء نظام كامل لإنتاج 10+ مقالات محاسبية شهرياً تلقائياً، اعتماداً على مصادر موثوقة (IFRS / IASB / ZATCA / وزارة التجارة)، مع موافقة المشرف قبل النشر، صور تلقائية، روابط داخلية، وSEO.

---

### المرحلة 1 — قاعدة البيانات (Lovable Cloud)

تعديلات على `kb_articles`:
- `status` enum: `draft | pending_review | approved | published | rejected`
- `meta_title`, `meta_description`, `meta_keywords text[]`
- `external_sources jsonb` (روابط المصادر الأصلية)
- `generation_source text` (`ai` | `manual`)
- `ai_model text`, `content_hash text` (لكشف التكرار)
- `scheduled_for timestamptz`
- `reviewer_id uuid`, `reviewed_at timestamptz`, `review_notes text`

جداول جديدة:
- `kb_trusted_sources` (id, name, base_url, priority, is_active) — IFRS, IASB, ZATCA, MoC, IFAC…
- `kb_generation_jobs` (id, scheduled_for, status, category_id, topic_hint, error, article_id)
- `kb_publishing_calendar` (id, year, month, planned_count, generated_count, published_count)
- `user_roles` (id, user_id, role: `admin|reviewer|user`) + دالة `has_role(uuid, app_role)` SECURITY DEFINER
- `kb_internal_links` (article_id, target_article_id, anchor_text)

RLS:
- مقالات: قراءة عامة فقط للحالة `published`؛ المسودات للمشرفين فقط.
- باقي الجداول: مشرفون فقط للكتابة.

---

### المرحلة 2 — محرك توليد المحتوى (Server Functions)

`src/lib/knowledge/generate.functions.ts` (محمي بـ admin role):

1. **`pickTopic`** — يختار موضوعاً غير مكرر بناءً على التصنيفات + الكلمات المفتاحية السابقة.
2. **`fetchTrustedContext`** — يستخدم Firecrawl للبحث في مواقع المصادر الموثوقة (IFRS.org, zatca.gov.sa, mc.gov.sa) ويعيد مقتطفات + روابط.
3. **`generateArticle`** — يستدعي Lovable AI Gateway (`google/gemini-3-flash-preview`) مع مخطط منظم (Output.object/Zod):
   - `title_ar, title_en, slug`
   - `excerpt_ar (executive summary)`, `content_ar` (sections: intro, body, practical_examples, conclusion)
   - `faq[]`, `references[]`, `external_sources[]`, `keywords[]`
   - `meta_title (≤60)`, `meta_description (≤160)`
4. **`checkDuplicate`** — يحسب SHA-256 + cosine على العنوان/الـ excerpt مقابل المقالات الحالية؛ يرفض إذا التشابه > 85%.
5. **`generateFeaturedImage`** — يستدعي `/v1/images/generations` (`openai/gpt-image-2`, low quality) لإنتاج صورة مميزة وحفظها في Supabase Storage bucket `kb-images`.
6. **`insertInternalLinks`** — بعد الإدراج: يبحث في نص المقال عن مصطلحات تطابق `keywords` لمقالات منشورة أخرى ويضيف روابط `<a href="/knowledge/.../...">` (حد أقصى 5 روابط/مقال) ويسجّلها في `kb_internal_links`.
7. **`saveAsDraft`** — يحفظ المقال بحالة `pending_review`.

### المرحلة 3 — الجدولة الشهرية

- جدول `kb_publishing_calendar` يولَّد لـ 12 شهراً قادمة (10 مقالات/شهر موزعة على التصنيفات).
- Server route `/api/public/hooks/generate-articles` (محمي بـ HMAC + apikey).
- `pg_cron` job يستدعيه يومياً 09:00 UTC؛ يفحص `kb_generation_jobs` المستحقة ويولّد المقال.
- إعادة المحاولة عند الفشل (max 3) مع تسجيل الخطأ.

### المرحلة 4 — واجهة المشرف

`/admin/knowledge` (تحت `_authenticated` + has_role('admin')):
- جدول المسودات: عنوان، تصنيف، حالة، تاريخ التوليد، زر **معاينة / موافقة / رفض مع ملاحظات / تعديل**.
- صفحة معاينة كاملة للمقال قبل النشر.
- زر **توليد فوري** (manual trigger).
- لوحة التقويم الشهري: شبكة بالأشهر تعرض المخطط/المنجز/المنشور.
- زر **إعادة توليد الصورة** و**إعادة فحص الروابط الداخلية**.

عند **الموافقة**: تتغير الحالة إلى `published` و`published_at = now()` ويظهر المقال في `/knowledge`.

### المرحلة 5 — تحسين SEO

- حقن `meta_title`, `meta_description`, `keywords` في `head()` لكل مقال.
- JSON-LD `Article` بالفعل موجود — نضيف `Organization` و `WebSite` للجذر.
- توليد `sitemap.xml` ديناميكي يضم المقالات المنشورة فقط.
- Canonical URLs.

### المرحلة 6 — الأسرار والتكامل

- Firecrawl connector (للبحث في المصادر) — سأطلب ربطه.
- `LOVABLE_API_KEY` متوفر للذكاء الاصطناعي وتوليد الصور.
- Storage bucket عام `kb-images`.

---

### الملفات المتأثرة

**جديدة:**
- `supabase/migrations/*` (schema + roles + RLS)
- `src/lib/knowledge/generate.functions.ts`, `sources.functions.ts`, `admin.functions.ts`, `internal-links.ts`
- `src/routes/api/public/hooks/generate-articles.ts`
- `src/routes/_authenticated/admin.knowledge.tsx` (لوحة الإدارة)
- `src/routes/_authenticated/admin.knowledge.$id.tsx` (معاينة/تحرير)
- `src/routes/sitemap[.]xml.ts`
- `src/components/admin/*` (DraftsTable, CalendarGrid, ReviewPanel)

**تعديلات:**
- `src/routes/knowledge.index.tsx` + `knowledge.$categorySlug.$articleSlug.tsx` (فلترة `status=published` فقط، حقن meta tags الجديدة).
- `src/routes/__root.tsx` (رابط لوحة الإدارة للمشرفين).

---

### قبل البدء — أحتاج تأكيد:

1. **Firecrawl**: هل تسمح بربطه لجلب المصادر الموثوقة؟ (بديل: استخدام معرفة النموذج فقط بدون تحقق مباشر من المواقع — أقل دقة).
2. **حسابك كمشرف**: ما البريد الذي ستستخدمه؟ سأمنحه دور `admin` في seed.
3. **عدد المقالات شهرياً**: 10 (الأدنى المطلوب) أم أكثر؟
4. **الصور**: `openai/gpt-image-2` (سريع/رخيص) أم `gemini-3-pro-image-preview` (جودة أعلى/أبطأ)؟

بعد التأكيد أبدأ التنفيذ على دفعات: (1) قاعدة البيانات والأدوار، (2) محرك التوليد + Firecrawl، (3) لوحة الإدارة + workflow، (4) Cron + sitemap.