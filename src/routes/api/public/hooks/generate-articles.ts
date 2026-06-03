import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * Public cron endpoint — called by pg_cron daily.
 * Generates queued articles (limited by `max` per run).
 * Auth: requires `x-cron-secret` matching CRON_SECRET env var.
 */
const TRUSTED_DOMAINS = [
  "ifrs.org",
  "zatca.gov.sa",
  "mc.gov.sa",
  "socpa.org.sa",
  "ifac.org",
  "aicpa-cima.com",
];

const ArticleSchema = z.object({
  title_ar: z.string().min(20),
  title_en: z.string().min(10),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  excerpt_ar: z.string().min(80),
  excerpt_en: z.string().min(60),
  meta_title: z.string().min(20).max(70),
  meta_description: z.string().min(80).max(170),
  keywords: z.array(z.string()).min(4),
  reading_minutes: z.number().int().min(3).max(20),
  content_ar: z.array(z.object({ heading: z.string(), body: z.string().min(120) })).min(4),
  practical_examples: z.array(z.object({ title: z.string(), body: z.string() })).min(1),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
  references: z.array(z.object({ title: z.string(), url: z.string().url() })).min(3),
  external_sources: z.array(z.object({ name: z.string(), url: z.string().url() })).min(1),
});

async function callAI(prompt: string, system: string): Promise<string> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) throw new Error("LOVABLE_API_KEY missing");
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) throw new Error(`AI ${res.status}: ${await res.text()}`);
  const j = (await res.json()) as { choices: { message: { content: string } }[] };
  return j.choices[0]?.message?.content ?? "";
}

async function generateOne() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // Pick category with least articles
  const { data: cats } = await supabaseAdmin
    .from("kb_categories")
    .select("id,slug,name_ar,name_en");
  if (!cats?.length) throw new Error("no categories");
  const cat = cats[Math.floor(Math.random() * cats.length)];

  const { data: recent } = await supabaseAdmin
    .from("kb_articles")
    .select("title_ar,slug")
    .order("created_at", { ascending: false })
    .limit(30);
  const usedSlugs = new Set((recent ?? []).map((r) => r.slug));
  const recentTitles = (recent ?? []).map((r) => `- ${r.title_ar}`).join("\n");

  const system =
    "أنت كاتب محتوى محاسبي خبير. أعد JSON صالحاً فقط استناداً للمعايير الرسمية (IFRS, ZATCA, MoC, SOCPA, IFAC).";
  const userPrompt = `اكتب مقالاً جديداً في تصنيف: ${cat.name_ar} (${cat.name_en}).
تجنّب هذه العناوين السابقة:
${recentTitles}

JSON المتوقع: {title_ar,title_en,slug,excerpt_ar,excerpt_en,meta_title (≤60),meta_description (≤160),keywords[≥4],reading_minutes,content_ar:[{heading,body}],practical_examples:[{title,body}],faq:[{q,a}],references:[{title,url}],external_sources:[{name,url}]}.
كل الروابط من النطاقات الموثوقة فقط: ${TRUSTED_DOMAINS.join(", ")}.`;

  const raw = await callAI(userPrompt, system);
  const parsed = ArticleSchema.parse(JSON.parse(raw));

  parsed.references = parsed.references.filter((r) =>
    TRUSTED_DOMAINS.some((d) => r.url.includes(d)),
  );
  parsed.external_sources = parsed.external_sources.filter((s) =>
    TRUSTED_DOMAINS.some((d) => s.url.includes(d)),
  );
  if (parsed.references.length < 2) throw new Error("no trusted refs");

  let slug = parsed.slug;
  let i = 1;
  while (usedSlugs.has(slug)) slug = `${parsed.slug}-${++i}`;

  const hashBuf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(parsed.title_ar + "|" + parsed.excerpt_ar),
  );
  const contentHash = Array.from(new Uint8Array(hashBuf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const { data: dup } = await supabaseAdmin
    .from("kb_articles")
    .select("id")
    .eq("content_hash", contentHash)
    .maybeSingle();
  if (dup) return { skipped: "duplicate" };

  const content_ar_jsonb = [
    ...parsed.content_ar,
    {
      heading: "أمثلة عملية",
      body: parsed.practical_examples.map((e) => `**${e.title}**\n${e.body}`).join("\n\n"),
    },
  ];

  const { data: inserted, error } = await supabaseAdmin
    .from("kb_articles")
    .insert({
      category_id: cat.id,
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
      status: "pending_review",
      generation_source: "ai",
      ai_model: "google/gemini-3-flash-preview",
      content_hash: contentHash,
    })
    .select("id,slug")
    .single();
  if (error) throw new Error(error.message);
  return { id: inserted.id, slug: inserted.slug };
}

export const Route = createFileRoute("/api/public/hooks/generate-articles")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env.CRON_SECRET;
        if (expected && request.headers.get("x-cron-secret") !== expected) {
          return new Response("Forbidden", { status: 403 });
        }
        const max = 1; // one per cron tick — schedule cron 10×/month
        const results: unknown[] = [];
        for (let i = 0; i < max; i++) {
          try {
            results.push(await generateOne());
          } catch (e) {
            results.push({ error: (e as Error).message });
          }
        }
        return Response.json({ ok: true, results });
      },
    },
  },
});
