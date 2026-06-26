import type { CvTemplate, CvTemplateId } from "./types";

export const CV_TEMPLATES: CvTemplate[] = [
  {
    id: "modern-executive",
    name: { ar: "تنفيذي حديث", en: "Modern Executive" },
    description: { ar: "قائمة جانبية داكنة مع رأس ذهبي ودائرة للصورة", en: "Dark sidebar · gold header · circular photo" },
    accent: "#b8862e",
    secondary: "#0b1220",
    layout: "sidebar",
  },
  {
    id: "ats-optimized",
    name: { ar: "متوافق ATS", en: "ATS Optimized" },
    description: { ar: "خطي نظيف — أعلى توافق مع أنظمة التوظيف", en: "Clean linear · maximum parser compatibility" },
    accent: "#1e3a5f",
    secondary: "#f1f5f9",
    layout: "minimal",
  },
  {
    id: "corporate-professional",
    name: { ar: "احترافي مؤسسي", en: "Corporate Professional" },
    description: { ar: "رأس ملوّن مع قائمة جانبية فاتحة وصورة دائرية", en: "Colored header · light sidebar · circular photo" },
    accent: "#174f70",
    secondary: "#e8f4f8",
    layout: "sidebar",
  },
  {
    id: "finance-accounting",
    name: { ar: "خبير مالي", en: "Finance & Accounting" },
    description: { ar: "قائمة جانبية ذهبية — مصمم للمحاسبين والماليين", en: "Gold sidebar · built for finance professionals" },
    accent: "#9a6a1f",
    secondary: "#fdf6e3",
    layout: "sidebar",
  },
  {
    id: "creative-professional",
    name: { ar: "إبداعي احترافي", en: "Creative Professional" },
    description: { ar: "رأس ملوّن مع مهارات شريطية وصورة جانبية", en: "Bold header · skill bars · side photo" },
    accent: "#0f766e",
    secondary: "#f0fdf4",
    layout: "classic",
  },
  {
    id: "minimal-elegant",
    name: { ar: "أنيق بسيط", en: "Minimal Elegant" },
    description: { ar: "تايبوغرافي نظيف مع خط ذهبي علوي", en: "Pure typography · single gold rule" },
    accent: "#374151",
    secondary: "#f9fafb",
    layout: "minimal",
  },
];

export const getCvTemplate = (id: CvTemplateId) =>
  CV_TEMPLATES.find((t) => t.id === id) ?? CV_TEMPLATES[0];
