# إكمال خطة التطوير الشاملة

سأكمل المراحل المتبقية من الخطة الأصلية. الهيرو تم استبداله بفيديو، نبدأ الآن بالباقي.

---

## 1) تحسين الأداء (Performance)

- مسح `src/` لاكتشاف ملفات/imports/أصول ميتة وحذفها (مع التحقق عبر `rg`).
- Lazy-load للأدوات الثقيلة: `CvBuilder`, `ExamPrep`, `AIAssistant`, `Calculators`, `VatReturnForm`, `ZakatDeclarationForm` عبر `lazy()` + `Suspense`.
- تقسيم vendor chunks في `vite.config.ts` (react / ai-sdk / supabase / pdf / motion).
- إضافة `loading="lazy"` و `decoding="async"` لكل الصور غير LCP.
- مراجعة `package.json` وإزالة المكتبات غير المستخدمة.
- إنشاء `PERFORMANCE_REPORT.md` يلخّص المحذوف والمحسّن والأثر المتوقع.

## 2) Loading Screen احترافي

- إعادة تصميم شاشة التحميل بنمط FinTech: خلفية داكنة + شعار "AM" ذهبي + شريط تقدّم CSS خفيف.
- مدة قصيرة (≤200ms) مع fade out.
- استبدال الشاشات البيضاء بـ **Skeletons** لكل قسم رئيسي (Hero, Tools grid, Knowledge cards, CV preview).
- inline critical CSS في `__root.tsx` لمنع FOUC.

## 3) أداة جديدة: Excel & Office AI Assistant او دمجها مع اداة الاكسيل الموجوده حاليا مع تغيير الاسم الحالي

- ملف `src/components/tools/OfficeAiAssistant.tsx` بواجهة chat على نمط ChatGPT (RTL/LTR).
- ملف `src/routes/api/office-ai.ts` (server route streaming عبر Lovable AI Gateway، نموذج `google/gemini-3-flash-preview`) مع System Prompt متخصص في Excel/Word/PowerPoint/Outlook/VBA/Power Query/Pivot.
- وضعان: "بحث بالدالة" / "بحث بالمشكلة" (تعديل prompt).
- اقتراحات سريعة (chips) قابلة للنقر.
- سجل المحادثة في **localStorage** (محادثة واحدة + زر "محادثة جديدة")، بدون قاعدة بيانات.
- زر **نسخ** لكل كتلة كود، عرض Markdown.
- تسجيل الأداة في `src/lib/tools-registry.ts` (id: `office-ai`).

## 4) إصلاح أداة اختبارات الشهادات (ExamPrep)

**التشخيص:** الأسئلة المضافة تُخزَّن في `localStorage` (`exam-bank-custom`) فقط، لذا لا تظهر بعد مسح cache أو على أجهزة أخرى — وهذا سبب "عدم ظهور الأسئلة".

**الخطة:**

- **migration**: جدول `exam_questions` (track, topic, question_ar/en, choices_ar/en[], answer_index, explanation_ar/en, reference, created_by, is_public) + GRANT + RLS (قراءة عامة للأسئلة العامة + قراءة/كتابة المالك).
- server functions: `listExamQuestions({track})`, `addExamQuestions(...)`, `deleteMyExamQuestion(id)`.
- تحديث `ExamPrep.tsx` ليقرأ من السيرفر بدل localStorage، مع زر "ترحيل الأسئلة المحلية إلى حسابي" (دون حذف تلقائي).
- صفحة Debug للأدمن `/_authenticated/admin.exam-debug.tsx` تعرض: عدد الأسئلة لكل track، أسئلة بدون track/answer، آخر الأخطاء.
- تدقيق دورة الامتحان: توليد → عرض → تقييم → مراجعة الإجابات.

## 5) تحسينات UX/UI عامة

- إضافة aria-labels للأزرار الأيقونية + focus rings واضحة.
- استبدال `h-screen` بـ `h-dvh` للجوال.
- prefetch للروابط داخل viewport (TanStack Router built-in).
- مراجعة meta/OG لكل route رئيسي.
- ضمان tap targets ≥44px على الجوال.

---

## الترتيب

سأنفّذ بالترتيب: (1) أداة Office AI → (2) إصلاح ExamPrep + migration → (3) Loading Screen → (4) Performance + cleanup → (5) UX polish.

هل أبدأ؟