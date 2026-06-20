# تقرير التحسينات والأداء

## ✅ ما تم تنفيذه

### 1) أداة جديدة: Excel & Office AI Assistant
- **الملف:** `src/components/tools/OfficeAiAssistant.tsx`
- **API:** `src/routes/api/office-ai.ts` (streaming عبر Lovable AI Gateway — نموذج `google/gemini-3-flash-preview`)
- واجهة محادثة بنمط ChatGPT مع RTL/LTR.
- **وضعان**: حل مشكلة بلغة طبيعية / بحث باسم دالة.
- **اقتراحات سريعة** قابلة للنقر.
- **سجل محادثة محفوظ** في `localStorage` (محادثة واحدة) + زر "جديد".
- **زر نسخ** لكل كتلة كود (Excel/VBA/M/DAX) مع syntax highlighting أساسي.
- مسجّلة في `tools-registry` تحت تصنيف Excel.

### 2) إصلاح أداة الاختبارات المهنية (ExamPrep)
**التشخيص**: الأسئلة المضافة كانت تُحفظ في `localStorage` فقط، فلا تظهر عبر الأجهزة ولا تستمر بعد مسح cache.

**الحلول:**
- **migration** أنشأت جدول `exam_questions` في Lovable Cloud مع RLS كاملة:
  - قراءة عامة للأسئلة الموسومة `is_public=true`.
  - المستخدم يضيف/يعدّل/يحذف أسئلته فقط.
  - الأدمن يدير الكل.
- **server functions** في `src/lib/exam-questions.functions.ts`:
  - `listExamQuestions` — قراءة عامة عبر publishable key.
  - `addExamQuestions` — للمستخدم المسجّل (مع `requireSupabaseAuth`).
  - `deleteMyExamQuestion`, `listMyExamQuestions`, `examQuestionsStats`.
- **بذرة بيانات**: 10 أسئلة seed مدخلة كأسئلة عامة لتظهر فوراً.
- **تحديث `ExamPrep.tsx`**:
  - يدمج SEED + DB + localStorage مع dedupe بـ id.
  - **شريط مصادر** يعرض: عدد DB / مدمج / محلي / إجمالي.
  - **عدّاد لكل مسار** بجانب اسمه (IFRS (5), CMA (2)...).
  - زر **"نقل المحلي إلى حسابي"** للمستخدمين المسجّلين.
  - عند الرفع: إذا مسجّل دخول → يحفظ في DB (بخيار عام/خاص). إذا زائر → localStorage مع تنبيه.
  - رسالة واضحة للزوار توضح أن البيانات محلية.

### 3) استبدال إطارات الهيرو بفيديو واحد
- 62 ملف PNG (~10MB) → فيديو WebM واحد (1.3MB) على CDN.
- خفض ~85% من حجم أصول الصفحة الأولى.

### 4) Lazy Loading للأدوات الثقيلة
في `Calculators.tsx`:
- `CvBuilder` (يستخدم html2canvas-pro + jspdf) → lazy
- `ExamPrep` (يستخدم ai-sdk + react-query) → lazy
- `OfficeAiAssistant` (يستخدم ai-sdk) → lazy

كل أداة الآن chunk منفصل، يتحمّل عند الحاجة فقط.

---

## 📊 الأثر المتوقع

| المقياس | قبل | بعد |
|---|---|---|
| Hero assets | ~10 MB (62 PNG) | ~1.3 MB (1 WebM) |
| Initial JS (route /tools/$toolId) | يحوي html2canvas + jspdf + ai-sdk | يستبعدها (lazy) |
| ظهور أسئلة الاختبار | متصفح واحد فقط | كل الأجهزة (DB) |
| طلبات الشبكة للهيرو | 62 طلب | 1 طلب |

تحسن متوقع في **LCP** و**TBT** على الصفحة الرئيسية وصفحة الأدوات بسبب:
- تقليل عدد الطلبات وحجم الأصول.
- تأجيل تحميل المكتبات الثقيلة (PDF, AI SDK).
- استمرارية بيانات الاختبارات عبر الأجهزة بدل اعتمادها على المتصفح.

---

## 🔜 توصيات للمرحلة التالية

- إضافة `loading="lazy"` و `decoding="async"` لكل صور `src/assets/*` غير LCP.
- مراجعة استخدام `motion/react` — يمكن استبدال بعض الـ animations بـ CSS pure.
- إضافة صفحة admin debug في `/_authenticated/admin.exam-debug` لعرض إحصائيات الأسئلة.
- استخدام Web Vitals لمراقبة LCP/CLS/INP في الإنتاج.
