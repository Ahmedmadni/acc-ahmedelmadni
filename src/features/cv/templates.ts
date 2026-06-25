import type { CvTemplate, CvTemplateId } from "./types";

export const CV_TEMPLATES: CvTemplate[] = [
  {
    id: "modern-executive",
    name: { ar: "تنفيذي حديث", en: "Modern Executive" },
    description: { ar: "حضور قيادي بلمسة ذهبية", en: "Leadership profile with a gold accent" },
    accent: "#b8862e",
    secondary: "#0b1220",
    layout: "classic",
  },
  {
    id: "ats-optimized",
    name: { ar: "متوافق مع ATS", en: "ATS Optimized" },
    description: { ar: "واضح، خطي، وقابل للقراءة آلياً", en: "Clean, linear, parser-friendly" },
    accent: "#1f2937",
    secondary: "#111827",
    layout: "minimal",
  },
  {
    id: "corporate-professional",
    name: { ar: "احترافي مؤسسي", en: "Corporate Professional" },
    description: { ar: "منظم للشركات والاستشارات", en: "Structured for enterprise roles" },
    accent: "#174f70",
    secondary: "#0f2437",
    layout: "sidebar",
  },
  {
    id: "finance-accounting",
    name: { ar: "خبير مالي ومحاسبي", en: "Finance & Accounting Expert" },
    description: { ar: "مصمم للأدوار المالية المتقدمة", en: "Built for senior finance profiles" },
    accent: "#9a6a1f",
    secondary: "#162033",
    layout: "sidebar",
  },
  {
    id: "creative-professional",
    name: { ar: "احترافي إبداعي", en: "Creative Professional" },
    description: { ar: "مميز دون التضحية بالاحتراف", en: "Distinctive while staying polished" },
    accent: "#0f766e",
    secondary: "#12312f",
    layout: "classic",
  },
  {
    id: "minimal-elegant",
    name: { ar: "أنيق بسيط", en: "Minimal Elegant" },
    description: { ar: "مساحات نظيفة وتركيز على المحتوى", en: "Whitespace-led content focus" },
    accent: "#52525b",
    secondary: "#18181b",
    layout: "minimal",
  },
];

export const getCvTemplate = (id: CvTemplateId) => CV_TEMPLATES.find((template) => template.id === id) ?? CV_TEMPLATES[0];