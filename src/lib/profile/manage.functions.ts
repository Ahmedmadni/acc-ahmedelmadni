import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/integrations/supabase/admin-middleware";

// ============ Certifications ============
const CertificationSchema = z.object({
  title_ar: z.string().min(2).max(200),
  title_en: z.string().min(2).max(200),
  issuer_ar: z.string().max(200).optional().nullable(),
  issuer_en: z.string().max(200).optional().nullable(),
  issue_date: z.string().max(60).optional().nullable(),
  image_url: z.string().url().optional().nullable().or(z.literal("")),
  credential_url: z.string().url().optional().nullable().or(z.literal("")),
  sort_order: z.number().int().min(0).max(9999).default(0),
  is_published: z.boolean().default(true),
});

export type CertificationRow = {
  id: string;
  title_ar: string;
  title_en: string;
  issuer_ar: string | null;
  issuer_en: string | null;
  issue_date: string | null;
  image_url: string | null;
  credential_url: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

function normalizeUrl(v: string | null | undefined) {
  return v === "" ? null : v;
}

export const listCertificationsFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("certifications")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw new Error(error.message);
    return { items: (data as CertificationRow[]) ?? [] };
  });

export const createCertificationFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => CertificationSchema.parse(input))
  .handler(async ({ data, context }) => {
    const payload = {
      ...data,
      image_url: normalizeUrl(data.image_url),
      credential_url: normalizeUrl(data.credential_url),
    };
    const { data: row, error } = await context.supabase
      .from("certifications")
      .insert(payload)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return { item: row as CertificationRow };
  });

export const updateCertificationFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: CertificationSchema.partial() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const payload = {
      ...data.patch,
      image_url: normalizeUrl(data.patch.image_url),
      credential_url: normalizeUrl(data.patch.credential_url),
    };
    const { error } = await context.supabase
      .from("certifications")
      .update(payload)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteCertificationFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("certifications").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Experience ============
const ExperienceSchema = z.object({
  role_ar: z.string().min(2).max(200),
  role_en: z.string().min(2).max(200),
  company_ar: z.string().min(2).max(200),
  company_en: z.string().min(2).max(200),
  company_logo_url: z.string().url().optional().nullable().or(z.literal("")),
  date_ar: z.string().min(1).max(100),
  date_en: z.string().min(1).max(100),
  points_ar: z.array(z.string().min(1).max(500)).max(20).default([]),
  points_en: z.array(z.string().min(1).max(500)).max(20).default([]),
  sort_order: z.number().int().min(0).max(9999).default(0),
  is_published: z.boolean().default(true),
});

export type ExperienceRow = {
  id: string;
  role_ar: string;
  role_en: string;
  company_ar: string;
  company_en: string;
  company_logo_url: string | null;
  date_ar: string;
  date_en: string;
  points_ar: string[];
  points_en: string[];
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export const listExperienceItemsFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("experience_items")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw new Error(error.message);
    return { items: (data as ExperienceRow[]) ?? [] };
  });

export const createExperienceItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => ExperienceSchema.parse(input))
  .handler(async ({ data, context }) => {
    const payload = { ...data, company_logo_url: normalizeUrl(data.company_logo_url) };
    const { data: row, error } = await context.supabase
      .from("experience_items")
      .insert(payload)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return { item: row as ExperienceRow };
  });

export const updateExperienceItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: ExperienceSchema.partial() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const payload = { ...data.patch, company_logo_url: normalizeUrl(data.patch.company_logo_url) };
    const { error } = await context.supabase
      .from("experience_items")
      .update(payload)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteExperienceItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("experience_items").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Skill groups ============
const SkillGroupSchema = z.object({
  heading_ar: z.string().min(2).max(120),
  heading_en: z.string().min(2).max(120),
  sort_order: z.number().int().min(0).max(9999).default(0),
  is_published: z.boolean().default(true),
});

export type SkillGroupRow = {
  id: string;
  heading_ar: string;
  heading_en: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export const listSkillGroupsFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("skill_groups")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw new Error(error.message);
    return { groups: (data as SkillGroupRow[]) ?? [] };
  });

export const createSkillGroupFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => SkillGroupSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("skill_groups")
      .insert(data)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return { group: row as SkillGroupRow };
  });

export const updateSkillGroupFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: SkillGroupSchema.partial() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("skill_groups")
      .update(data.patch)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteSkillGroupFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("skill_groups").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Skill items ============
const SkillItemSchema = z.object({
  group_id: z.string().uuid(),
  name_ar: z.string().min(1).max(150),
  name_en: z.string().min(1).max(150),
  level: z.number().int().min(0).max(100).default(50),
  desc_ar: z.string().max(500).optional().nullable(),
  desc_en: z.string().max(500).optional().nullable(),
  tools: z.array(z.string().min(1).max(60)).max(20).default([]),
  kpis_ar: z.array(z.string().min(1).max(150)).max(10).default([]),
  kpis_en: z.array(z.string().min(1).max(150)).max(10).default([]),
  sort_order: z.number().int().min(0).max(9999).default(0),
});

export type SkillItemRow = {
  id: string;
  group_id: string;
  name_ar: string;
  name_en: string;
  level: number;
  desc_ar: string | null;
  desc_en: string | null;
  tools: string[];
  kpis_ar: string[];
  kpis_en: string[];
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export const listSkillItemsFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("skill_items")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw new Error(error.message);
    return { items: (data as SkillItemRow[]) ?? [] };
  });

export const createSkillItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => SkillItemSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("skill_items")
      .insert(data)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return { item: row as SkillItemRow };
  });

export const updateSkillItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: SkillItemSchema.partial() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("skill_items")
      .update(data.patch)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteSkillItemFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("skill_items").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ Image upload (certifications + experience company logos) ============
export const uploadProfileImageFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z
      .object({
        kind: z.enum(["certification", "experience"]),
        filename: z.string().min(1).max(200),
        base64: z.string().min(10),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bytes = Buffer.from(data.base64, "base64");
    if (bytes.length > 5 * 1024 * 1024) throw new Error("Image too large (max 5MB)");
    const safe = data.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${data.kind}/${Date.now()}_${safe}`;
    const ext = safe.split(".").pop()?.toLowerCase();
    const contentType =
      ext === "png"
        ? "image/png"
        : ext === "webp"
          ? "image/webp"
          : ext === "svg"
            ? "image/svg+xml"
            : "image/jpeg";
    const { error: upErr } = await supabaseAdmin.storage
      .from("kb-images")
      .upload(path, bytes, { contentType, upsert: true });
    if (upErr) throw new Error(upErr.message);
    const { data: pub } = supabaseAdmin.storage.from("kb-images").getPublicUrl(path);
    return { url: pub.publicUrl };
  });
