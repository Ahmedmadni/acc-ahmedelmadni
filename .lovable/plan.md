
# استبدال إطارات الهيرو بفيديو

## الخطوات

1. **رفع الفيديو كـ Lovable Asset**
   - `lovable-assets create --file /mnt/user-uploads/hero-video.webm --filename hero.webm > src/assets/hero.webm.asset.json`

2. **تحديث `src/routes/index.tsx`**
   - حذف مكون `HeroFrameSlideshow` ومنطق preload الإطارات.
   - استبدالها بـ `<video>` مع: `autoPlay muted loop playsInline preload="metadata"` + `poster` (إطار افتراضي).
   - إضافة `<link rel="preload" as="video">` في `head()` للـ LCP.

3. **حذف الإطارات من `public/hero-frames/`**
   - حذف جميع ملفات `ezgif-frame-*.png` (62 ملف) بعد التأكد من عدم وجود مراجع أخرى.

## النتيجة
- هيرو بفيديو واحد خفيف بدل 62 صورة.
- خفض كبير في حجم الـ public وعدد طلبات الشبكة.
- لا تغيير في التصميم العام.
