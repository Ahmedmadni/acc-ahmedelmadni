import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/integrations/supabase/admin-middleware";

const ITEM_TYPES = ["course", "book", "video", "external_link", "tool"] as const;

const ItemSchema = z.object({
  type: z.enum(ITEM_TYPES),
  title_ar: z.string().min(3).max(200),
  title_en: z.string().max(200).optional().nullable(),
  description_ar: z.string().max(2000).optional().nullable(),
  description_en: z.string().max(2000).optional().nullable(),
  category_slug: z.string().min(2).max(60),
  url: z.string().url().optional().nullable().or(z.literal("")),
  cover_image: z.string().url().optional().nullable().or(z.literal("")),
  author: z.string().max(120).optional().nullable(),
  provider: z.string().max(120).optional().nullable(),
  level: z.string().max(40).optional().nullable(),
  duration_hours: z.number().min(0).max(10000).optional().nullable(),
  is_free: z.boolean().default(true),
  price: z.number().min(0).max(100000).optional().nullable(),
  tags: z.array(z.string().min(1).max(40)).max(20).default([]),
  sort_order: z.number().int().min(0).max(9999).default(0),
  is_published: z.boolean().default(false),
  pdf_path: z.string().max(500).optional().nullable(),
});

type LibItemInput = z.infer<typeof ItemSchema>;

export type LibraryItemRow = {
  id: string;
  type: (typeof ITEM_TYPES)[number];
  title_ar: string;
  title_en: string | null;
  description_ar: string | null;
  description_en: string | null;
  category_slug: string;
  url: string | null;
  cover_image: string | null;
  author: string | null;
  provider: string | null;
  level: string | null;
  duration_hours: number | null;
  is_free: boolean;
  price: number | null;
  tags: string[];
  sort_order: number;
  is_published: boolean;
  pdf_path: string | null;
  generation_source: string;
  ai_model: string | null;
  created_at: string;
  updated_at: string;
};

// Loose-typed Supabase accessor for the not-yet-codegen'd library_items table.
type LooseSb = {
  from: (t: string) => {
    select: (s: string) => {
      order: (c: string, o: { ascending: boolean }) => Promise<{ data: unknown; error: { message: string } | null }>;
    };
    insert: (v: unknown) => {
      select: (s: string) => { single: () => Promise<{ data: unknown; error: { message: string } | null }> };
    };
    update: (v: unknown) => { eq: (c: string, val: string) => Promise<{ error: { message: string } | null }> };
    delete: () => { eq: (c: string, val: string) => Promise<{ error: { message: string } | null }> };
  };
};

// ============ List ============
export const listLibraryItemsFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const sb = context.supabase as unknown as LooseSb;
    const { data, error } = await sb.from("library_items").select("*").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return { items: (data as LibraryItemRow[]) ?? [] };
  });

// ============ Create ============
export const createLibraryItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => ItemSchema.parse(input))
  .handler(async ({ data, context }) => {
    const sb = context.supabase as unknown as LooseSb;
    const payload = normalize(data);
    const { data: row, error } = await sb.from("library_items").insert(payload).select("*").single();
    if (error) throw new Error(error.message);
    return { item: row as LibraryItemRow };
  });

// ============ Update ============
export const updateLibraryItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: ItemSchema.partial() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const sb = context.supabase as unknown as LooseSb;
    const payload = normalize(data.patch as LibItemInput);
    const { error } = await sb.from("library_items").update(payload).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Delete ============
export const deleteLibraryItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const sb = context.supabase as unknown as LooseSb;
    const { error } = await sb.from("library_items").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Toggle publish ============
export const togglePublishItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), is_published: z.boolean() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const sb = context.supabase as unknown as LooseSb;
    const { error } = await sb.from("library_items").update({ is_published: data.is_published }).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ AI generation ============
const AiOutputSchema = z.object({
  title_ar: z.string().min(3),
  title_en: z.string().min(3),
  description_ar: z.string().min(20),
  description_en: z.string().min(20),
  tags: z.array(z.string()).min(3).max(10),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  provider: z.string().optional(),
  author: z.string().optional(),
});

export const generateLibraryItemAIFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z
      .object({
        type: z.enum(ITEM_TYPES),
        topic: z.string().min(3).max(300),
        category_slug: z.string().min(2).max(60),
        url: z.string().url().optional().nullable(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("LOVABLE_API_KEY missing");

    const typeLabel: Record<string, string> = {
      course: "كورس تعليمي",
      book: "كتاب",
      video: "فيديو",
      external_link: "رابط خارجي",
      tool: "أداة محاسبية",
    };

    const system =
      "أنت خبير محاسبة. تساعد في صياغة بطاقات تعريفية لمحتوى مكتبة محاسبية. أعد JSON فقط بدون أي نص خارجه.";

    const prompt = `صِف ${typeLabel[data.type]} عن الموضوع التالي: "${data.topic}" ضمن تصنيف "${data.category_slug}".
${data.url ? `الرابط المرجعي: ${data.url}` : ""}

أرجع JSON بهذا الشكل:
{
  "title_ar": "عنوان جذاب بالعربية",
  "title_en": "Concise English title",
  "description_ar": "وصف 2-3 جمل بالعربية يلخص محتوى ${typeLabel[data.type]} وفائدته للمحاسب",
  "description_en": "2-3 sentence English description",
  "tags": ["وسم1","tag2","..."],
  "level": "beginner | intermediate | advanced",
  "provider": "اسم المنصة أو الناشر إن وُجد",
  "author": "اسم المؤلف أو المحاضر إن وُجد"
}`;

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
      if (res.status === 429) throw new Error("تجاوز معدل الطلبات — حاول لاحقاً");
      if (res.status === 402) throw new Error("نفدت أرصدة الذكاء الاصطناعي");
      throw new Error(`AI error ${res.status}`);
    }
    const json = (await res.json()) as { choices: { message: { content: string } }[] };
    const raw = json.choices[0]?.message?.content ?? "{}";
    let parsed;
    try {
      parsed = AiOutputSchema.parse(JSON.parse(raw));
    } catch (e) {
      throw new Error(`Invalid AI JSON: ${(e as Error).message.slice(0, 200)}`);
    }
    return { suggestion: parsed };
  });

// ============ Articles CRUD additions ============
const ArticlePatchSchema = z.object({
  title_ar: z.string().min(3).max(200).optional(),
  title_en: z.string().max(200).optional(),
  excerpt_ar: z.string().max(800).optional(),
  excerpt_en: z.string().max(800).optional(),
  meta_title: z.string().max(120).optional(),
  meta_description: z.string().max(300).optional(),
  featured_image: z.string().url().optional().nullable(),
  is_featured: z.boolean().optional(),
  status: z.enum(["draft", "pending_review", "approved", "published", "rejected"]).optional(),
});
type ArticlePatch = z.infer<typeof ArticlePatchSchema>;

export const updateArticleFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: ArticlePatchSchema }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const patch: ArticlePatch & { published_at?: string } = { ...data.patch };
    if (data.patch.status === "published") patch.published_at = new Date().toISOString();
    const { error } = await supabase.from("kb_articles").update(patch).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteArticleFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const { error } = await supabase.from("kb_articles").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Helpers ============
function normalize(d: Partial<LibItemInput>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...d };
  if (out.url === "") out.url = null;
  if (out.cover_image === "") out.cover_image = null;
  return out;
}
