import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/integrations/supabase/admin-middleware";

const TRUSTED_DOMAINS = [
  "ifrs.org",
  "iasb.org",
  "zatca.gov.sa",
  "mc.gov.sa",
  "socpa.org.sa",
  "ifac.org",
  "aicpa-cima.com",
];

// ===== Article generation schema =====
const ArticleSchema = z.object({
  title_ar: z.string().min(20).max(140),
  title_en: z.string().min(10).max(140),
  slug: z.string().regex(/^[a-z0-9-]+$/).min(6).max(80),
  excerpt_ar: z.string().min(80).max(400), // executive summary
  excerpt_en: z.string().min(60).max(400),
  meta_title: z.string().min(20).max(70),
  meta_description: z.string().min(80).max(170),
  keywords: z.array(z.string().min(2).max(40)).min(4).max(12),
  reading_minutes: z.number().int().min(3).max(20),
  content_ar: z
    .array(
      z.object({
        heading: z.string().min(3).max(120),
        body: z.string().min(120),
      }),
    )
    .min(4)
    .max(10),
  practical_examples: z
    .array(z.object({ title: z.string().min(3), body: z.string().min(60) }))
    .min(1)
    .max(5),
  faq: z
    .array(z.object({ q: z.string().min(8), a: z.string().min(40) }))
    .min(3)
    .max(8),
  references: z
    .array(z.object({ title: z.string().min(3), url: z.string().url() }))
    .min(3),
  external_sources: z
    .array(z.object({ name: z.string(), url: z.string().url() }))
    .min(1),
});

type GeneratedArticle = z.infer<typeof ArticleSchema>;

// ===== Helpers =====
function sha256(text: string): Promise<string> {
  return crypto.subtle
    .digest("SHA-256", new TextEncoder().encode(text))
    .then((buf) =>
      Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""),
    );
}

async function callLovableAI(prompt: string, system: string): Promise<string> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) throw new Error("LOVABLE_API_KEY missing");
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "X-Lovable-AIG-SDK": "lovable-direct",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    if (res.status === 429) throw new Error("Rate limit — حاول لاحقاً");
    if (res.status === 402) throw new Error("AI credits exhausted");
    throw new Error(`AI error ${res.status}: ${body.slice(0, 300)}`);
  }
  const json = (await res.json()) as { choices: { message: { content: string } }[] };
  return json.choices[0]?.message?.content ?? "";
}

async function generateFeaturedImage(prompt: string): Promise<string | null> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-image-2",
        prompt,
        size: "1024x1024",
        quality: "low",
        n: 1,
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data?: { b64_json?: string }[] };
    const b64 = json.data?.[0]?.b64_json;
    if (!b64) return null;
    return b64;
  } catch {
    return null;
  }
}

// ===== Main generation server fn =====
export const generateArticleFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z
      .object({
        categorySlug: z.string().optional(),
        topicHint: z.string().optional(),
        jobId: z.string().uuid().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // 1) Pick a category
    let category: { id: string; slug: string; name_ar: string; name_en: string } | null = null;
    if (data.categorySlug) {
      const { data: c } = await supabase
        .from("kb_categories")
        .select("id,slug,name_ar,name_en")
        .eq("slug", data.categorySlug)
        .maybeSingle();
      category = c;
    } else {
      const { data: cats } = await supabase
        .from("kb_categories")
        .select("id,slug,name_ar,name_en");
      if (!cats?.length) throw new Error("No categories");
      category = cats[Math.floor(Math.random() * cats.length)];
    }
    if (!category) throw new Error("Category not found");

    // 2) Recent slugs/titles to avoid duplication
    const { data: recent } = await supabase
      .from("kb_articles")
      .select("title_ar,slug,keywords")
      .order("created_at", { ascending: false })
      .limit(50);
    const usedSlugs = new Set((recent ?? []).map((r) => r.slug));
    const recentTitles = (recent ?? []).map((r) => r.title_ar).join("\n- ");

    // 3) Generate via AI
    const system = `أنت كاتب محتوى محاسبي خبير. تكتب مقالات احترافية بالعربية الفصحى استناداً إلى المعايير الرسمية (IFRS, IASB, ZATCA السعودية, وزارة التجارة السعودية, SOCPA, IFAC). أعد فقط JSON صالحاً مطابقاً للهيكل المطلوب — بدون أي نص خارج JSON.`;
    const userPrompt = `اكتب مقالاً جديداً (بالعربية + ترجمة العنوان للإنجليزية) في تصنيف: ${category.name_ar} (${category.name_en}).
${data.topicHint ? `الموضوع المقترح: ${data.topicHint}` : ""}

تجنب تكرار هذه العناوين السابقة:
- ${recentTitles}

المطلوب JSON بهذا الشكل تماماً:
{
  "title_ar": "...",
  "title_en": "...",
  "slug": "kebab-case-english-slug",
  "excerpt_ar": "ملخص تنفيذي 2-3 جمل",
  "excerpt_en": "executive summary",
  "meta_title": "≤60 char SEO title (Arabic)",
  "meta_description": "≤160 char SEO description (Arabic)",
  "keywords": ["كلمة1","كلمة2",...],
  "reading_minutes": 6,
  "content_ar": [
    {"heading":"مقدمة","body":"..."},
    {"heading":"...","body":"..."},
    {"heading":"الخلاصة","body":"..."}
  ],
  "practical_examples": [{"title":"مثال 1","body":"..."}],
  "faq": [{"q":"...","a":"..."}],
  "references": [{"title":"IFRS 15","url":"https://www.ifrs.org/..."}],
  "external_sources": [{"name":"ZATCA","url":"https://zatca.gov.sa/..."}]
}

اشترط أن تكون روابط references و external_sources من نطاقات موثوقة فقط: ${TRUSTED_DOMAINS.join(", ")}.
المحتوى يجب أن يحوي: ملخص تنفيذي، محتوى رئيسي مفصّل، أمثلة عملية، أسئلة شائعة، مراجع، روابط مصادر خارجية.`;

    const raw = await callLovableAI(userPrompt, system);
    let parsed: GeneratedArticle;
    try {
      const obj = JSON.parse(raw);
      parsed = ArticleSchema.parse(obj);
    } catch (e) {
      throw new Error(`AI returned invalid JSON: ${(e as Error).message.slice(0, 200)}`);
    }

    // 4) Filter external links to trusted domains only
    parsed.references = parsed.references.filter((r) =>
      TRUSTED_DOMAINS.some((d) => r.url.includes(d)),
    );
    parsed.external_sources = parsed.external_sources.filter((s) =>
      TRUSTED_DOMAINS.some((d) => s.url.includes(d)),
    );
    if (parsed.references.length < 2) {
      throw new Error("Generated article lacks trusted references");
    }

    // 5) Ensure unique slug
    let slug = parsed.slug;
    let i = 1;
    while (usedSlugs.has(slug)) slug = `${parsed.slug}-${++i}`;

    // 6) Duplicate detection via content hash
    const hashSource = parsed.title_ar + "|" + parsed.excerpt_ar;
    const contentHash = await sha256(hashSource);
    const { data: dup } = await supabase
      .from("kb_articles")
      .select("id")
      .eq("content_hash", contentHash)
      .maybeSingle();
    if (dup) {
      if (data.jobId) {
        await supabaseAdmin
          .from("kb_generation_jobs")
          .update({ status: "skipped_duplicate", article_id: null })
          .eq("id", data.jobId);
      }
      throw new Error("Duplicate content detected — skipped");
    }

    // 7) Generate featured image (best-effort)
    let featuredImageUrl: string | null = null;
    const imgB64 = await generateFeaturedImage(
      `Editorial cover for an Arabic accounting article titled "${parsed.title_en}". Premium magazine style, gold and navy palette, abstract financial elements, no text.`,
    );
    if (imgB64) {
      try {
        const bytes = Uint8Array.from(atob(imgB64), (c) => c.charCodeAt(0));
        const path = `articles/${slug}-${Date.now()}.png`;
        const { error: upErr } = await supabaseAdmin.storage
          .from("kb-images")
          .upload(path, bytes, { contentType: "image/png", upsert: true });
        if (!upErr) {
          const { data: pub } = supabaseAdmin.storage.from("kb-images").getPublicUrl(path);
          featuredImageUrl = pub.publicUrl;
        }
      } catch {
        // ignore image errors
      }
    }

    // 8) Persist as pending_review
    const content_ar_jsonb = [
      ...parsed.content_ar,
      {
        heading: "أمثلة عملية",
        body: parsed.practical_examples.map((e) => `**${e.title}**\n${e.body}`).join("\n\n"),
      },
    ];

    const { data: inserted, error: insErr } = await supabaseAdmin
      .from("kb_articles")
      .insert({
        category_id: category.id,
        slug,
        title_ar: parsed.title_ar,
        title_en: parsed.title_en,
        excerpt_ar: parsed.excerpt_ar,
        excerpt_en: parsed.excerpt_en,
        content_ar: content_ar_jsonb,
        meta_title: parsed.meta_title,
        meta_description: parsed.meta_description,
        keywords: parsed.keywords,
        reading_minutes: parsed.reading_minutes,
        faq: parsed.faq,
        references: parsed.references,
        external_sources: parsed.external_sources,
        featured_image: featuredImageUrl,
        status: "pending_review",
        generation_source: "ai",
        ai_model: "google/gemini-3-flash-preview",
        content_hash: contentHash,
      })
      .select("id,slug,title_ar")
      .single();

    if (insErr) throw new Error(insErr.message);

    if (data.jobId) {
      await supabaseAdmin
        .from("kb_generation_jobs")
        .update({ status: "succeeded", article_id: inserted.id })
        .eq("id", data.jobId);
    }

    // 9) Update calendar generated_count
    const now = new Date();
    await supabaseAdmin.rpc("noop").catch(() => {});
    await supabaseAdmin
      .from("kb_publishing_calendar")
      .update({ generated_count: 1 })
      .eq("year", now.getUTCFullYear())
      .eq("month", now.getUTCMonth() + 1);

    return { id: inserted.id, slug: inserted.slug, title: inserted.title_ar };
  });

// ===== Admin actions =====
export const listAdminArticlesFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { supabase } = context;
    const { data, error } = await supabase
      .from("kb_articles")
      .select(
        "id,slug,title_ar,status,created_at,reviewed_at,featured_image,generation_source,category_id",
      )
      .order("created_at", { ascending: false })
      .limit(100);
    if (error) throw new Error(error.message);
    return { articles: data ?? [] };
  });

export const reviewArticleFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        action: z.enum(["approve", "reject"]),
        notes: z.string().max(2000).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const newStatus = data.action === "approve" ? "published" : "rejected";
    const update: Record<string, unknown> = {
      status: newStatus,
      reviewer_id: userId,
      reviewed_at: new Date().toISOString(),
      review_notes: data.notes ?? null,
    };
    if (data.action === "approve") update.published_at = new Date().toISOString();
    const { error } = await supabase.from("kb_articles").update(update).eq("id", data.id);
    if (error) throw new Error(error.message);

    // Auto internal-linking on publish (best-effort)
    if (data.action === "approve") {
      try {
        await autoInternalLinks(data.id);
      } catch (e) {
        console.error("internal-links error", e);
      }
    }

    return { ok: true };
  });

export const calendarOverviewFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { supabase } = context;
    const { data, error } = await supabase
      .from("kb_publishing_calendar")
      .select("*")
      .order("year")
      .order("month");
    if (error) throw new Error(error.message);
    return { calendar: data ?? [] };
  });

// ===== Internal link insertion =====
async function autoInternalLinks(articleId: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data: article } = await supabaseAdmin
    .from("kb_articles")
    .select("id,content_ar,keywords")
    .eq("id", articleId)
    .maybeSingle();
  if (!article) return;

  const { data: candidates } = await supabaseAdmin
    .from("kb_articles")
    .select("id,slug,title_ar,keywords,category_id")
    .eq("status", "published")
    .neq("id", articleId)
    .limit(200);
  if (!candidates?.length) return;

  // pick up to 5 candidates that share at least one keyword
  const myKw = new Set((article.keywords ?? []).map((k: string) => k.toLowerCase()));
  const matches: { id: string; slug: string; anchor: string; categoryId: string }[] = [];
  for (const c of candidates) {
    const overlap = (c.keywords ?? []).some((k: string) => myKw.has(k.toLowerCase()));
    if (overlap) {
      matches.push({ id: c.id, slug: c.slug, anchor: c.title_ar, categoryId: c.category_id });
      if (matches.length >= 5) break;
    }
  }
  if (!matches.length) return;

  const rows = matches.map((m) => ({
    article_id: articleId,
    target_article_id: m.id,
    anchor_text: m.anchor,
  }));
  await supabaseAdmin.from("kb_internal_links").upsert(rows, {
    onConflict: "article_id,target_article_id",
    ignoreDuplicates: true,
  } as never);
}
