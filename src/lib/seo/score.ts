// SEO scoring system for knowledge-base articles.
// Returns a 0–100 score plus a list of actionable tips.

export type SeoArticleInput = {
  title_ar?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  excerpt_ar?: string | null;
  content_ar?: unknown;
  featured_image?: string | null;
  keywords?: string[] | null;
  faq?: unknown;
};

export type SeoCheck = {
  id: string;
  label: string;
  points: number;
  earned: number;
  passed: boolean;
  tip?: string;
};

export type SeoScoreResult = {
  score: number; // 0..100
  grade: "A" | "B" | "C" | "D" | "F";
  checks: SeoCheck[];
};

function wordsCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function contentWordCount(content: unknown): number {
  if (!Array.isArray(content)) return 0;
  let total = 0;
  for (const s of content) {
    if (!s || typeof s !== "object") continue;
    // AI-generated articles store sections as {heading, body}; legacy
    // SQL-seeded articles store {heading, paragraphs}. Count either shape.
    if ("paragraphs" in s) {
      const ps = (s as { paragraphs?: string[] }).paragraphs ?? [];
      for (const p of ps) total += wordsCount(String(p));
    } else if ("body" in s) {
      const body = (s as { body?: string }).body;
      if (typeof body === "string") total += wordsCount(body);
    }
  }
  return total;
}

export function computeArticleSeoScore(a: SeoArticleInput): SeoScoreResult {
  const checks: SeoCheck[] = [];

  // 1) Title length
  const title = a.meta_title || a.title_ar || "";
  const tl = title.length;
  checks.push({
    id: "title-length",
    label: "طول العنوان (30–60 حرفًا)",
    points: 15,
    earned: tl >= 30 && tl <= 60 ? 15 : tl >= 20 && tl <= 70 ? 8 : 0,
    passed: tl >= 30 && tl <= 60,
    tip: tl < 30 ? "العنوان قصير جدًا." : tl > 60 ? "العنوان طويل وقد يُقتطع." : undefined,
  });

  // 2) Meta description
  const desc = a.meta_description || a.excerpt_ar || "";
  const dl = desc.length;
  checks.push({
    id: "meta-description",
    label: "وصف ميتا (120–160 حرفًا)",
    points: 15,
    earned: dl >= 120 && dl <= 160 ? 15 : dl >= 80 && dl <= 200 ? 8 : 0,
    passed: dl >= 120 && dl <= 160,
    tip:
      dl === 0 ? "أضف وصف ميتا." : dl < 120 ? "الوصف قصير." : dl > 160 ? "الوصف طويل." : undefined,
  });

  // 3) Content length
  const wc = contentWordCount(a.content_ar);
  checks.push({
    id: "content-length",
    label: "طول المحتوى (≥ 600 كلمة)",
    points: 20,
    earned: wc >= 1200 ? 20 : wc >= 600 ? 14 : wc >= 300 ? 7 : 0,
    passed: wc >= 600,
    tip: wc < 600 ? `الكلمات الحالية ${wc}، يُفضل ≥ 600.` : undefined,
  });

  // 4) Keywords
  const kws = a.keywords ?? [];
  checks.push({
    id: "keywords",
    label: "كلمات مفتاحية (3–8)",
    points: 10,
    earned: kws.length >= 3 && kws.length <= 8 ? 10 : kws.length >= 1 ? 5 : 0,
    passed: kws.length >= 3 && kws.length <= 8,
    tip: kws.length === 0 ? "لا توجد كلمات مفتاحية." : undefined,
  });

  // 5) Featured image
  const hasImg = !!a.featured_image;
  checks.push({
    id: "featured-image",
    label: "صورة بارزة",
    points: 10,
    earned: hasImg ? 10 : 0,
    passed: hasImg,
    tip: hasImg ? undefined : "أضف صورة بارزة.",
  });

  // 6) FAQ section
  const faqArr = Array.isArray(a.faq) ? a.faq : [];
  checks.push({
    id: "faq",
    label: "أسئلة شائعة (≥ 3)",
    points: 10,
    earned: faqArr.length >= 3 ? 10 : faqArr.length >= 1 ? 5 : 0,
    passed: faqArr.length >= 3,
    tip: faqArr.length === 0 ? "أضف قسم الأسئلة الشائعة." : undefined,
  });

  // 7) Keyword in title
  const tLower = title.toLowerCase();
  const inTitle = kws.some((k) => tLower.includes(String(k).toLowerCase()));
  checks.push({
    id: "kw-in-title",
    label: "كلمة مفتاحية في العنوان",
    points: 10,
    earned: inTitle ? 10 : 0,
    passed: inTitle,
    tip: !inTitle && kws.length ? "ضمّن كلمة مفتاحية في العنوان." : undefined,
  });

  // 8) Keyword in description
  const dLower = desc.toLowerCase();
  const inDesc = kws.some((k) => dLower.includes(String(k).toLowerCase()));
  checks.push({
    id: "kw-in-desc",
    label: "كلمة مفتاحية في الوصف",
    points: 10,
    earned: inDesc ? 10 : 0,
    passed: inDesc,
    tip: !inDesc && kws.length ? "ضمّن كلمة مفتاحية في الوصف." : undefined,
  });

  const score = checks.reduce((s, c) => s + c.earned, 0);
  const grade: SeoScoreResult["grade"] =
    score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : score >= 40 ? "D" : "F";
  return { score, grade, checks };
}
