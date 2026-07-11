import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/integrations/supabase/admin-middleware";

const CATEGORIES = ["tax", "declarations", "financial", "vouchers", "tools"] as const;
const FORMATS = ["Excel", "Word"] as const;

const TemplateSchema = z.object({
  title_ar: z.string().min(2).max(200),
  title_en: z.string().min(2).max(200),
  description_ar: z.string().min(2).max(1000),
  description_en: z.string().min(2).max(1000),
  how_to_use_ar: z.string().max(2000).optional().nullable(),
  how_to_use_en: z.string().max(2000).optional().nullable(),
  category: z.enum(CATEGORIES).default("tools"),
  format: z.enum(FORMATS).default("Excel"),
  pages: z.number().int().min(1).max(200).default(1),
  is_new: z.boolean().default(false),
  is_official: z.boolean().default(false),
  related_standard: z.string().max(60).optional().nullable(),
  file_url: z.string().url().optional().nullable().or(z.literal("")),
  preview_fields: z.array(z.string().min(1).max(60)).max(10).default([]),
  sort_order: z.number().int().min(0).max(9999).default(0),
  is_published: z.boolean().default(true),
});

export type AccountingTemplateRow = {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  how_to_use_ar: string | null;
  how_to_use_en: string | null;
  category: (typeof CATEGORIES)[number];
  format: (typeof FORMATS)[number];
  pages: number;
  is_new: boolean;
  is_official: boolean;
  related_standard: string | null;
  file_url: string | null;
  preview_fields: string[];
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

function normalizeUrl(v: string | null | undefined) {
  return v === "" ? null : v;
}

export const listAccountingTemplatesFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("accounting_templates")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw new Error(error.message);
    return { items: (data as AccountingTemplateRow[]) ?? [] };
  });

export const createAccountingTemplateFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => TemplateSchema.parse(input))
  .handler(async ({ data, context }) => {
    const payload = { ...data, file_url: normalizeUrl(data.file_url) };
    const { data: row, error } = await context.supabase
      .from("accounting_templates")
      .insert(payload)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return { item: row as AccountingTemplateRow };
  });

export const updateAccountingTemplateFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), patch: TemplateSchema.partial() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const payload = { ...data.patch, file_url: normalizeUrl(data.patch.file_url) };
    const { error } = await context.supabase
      .from("accounting_templates")
      .update(payload)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteAccountingTemplateFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("accounting_templates")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ File upload (Word/Excel template files) ============
export const uploadTemplateFileFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((input: unknown) =>
    z
      .object({
        filename: z.string().min(1).max(200),
        base64: z.string().min(10),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bytes = Buffer.from(data.base64, "base64");
    if (bytes.length > 20 * 1024 * 1024) throw new Error("File too large (max 20MB)");
    const safe = data.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const ext = safe.split(".").pop()?.toLowerCase();
    const allowed = ["doc", "docx", "xls", "xlsx", "pdf"];
    if (!ext || !allowed.includes(ext)) {
      throw new Error("Only Word, Excel, or PDF files are allowed");
    }
    const contentTypeMap: Record<string, string> = {
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      pdf: "application/pdf",
    };
    const path = `${Date.now()}_${safe}`;
    const { error: upErr } = await supabaseAdmin.storage
      .from("template-files")
      .upload(path, bytes, { contentType: contentTypeMap[ext], upsert: true });
    if (upErr) throw new Error(upErr.message);
    const { data: pub } = supabaseAdmin.storage.from("template-files").getPublicUrl(path);
    return { url: pub.publicUrl };
  });
