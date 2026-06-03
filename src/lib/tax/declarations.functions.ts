import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { generateText } from "ai";

const DeclTypeSchema = z.enum(["vat", "zakat"]);

const SaveSchema = z.object({
  type: DeclTypeSchema,
  period_label: z.string().min(1).max(50),
  input_data: z.record(z.string().min(1).max(64), z.number()),
  result_data: z.record(z.string().min(1).max(64), z.number()),
  notes: z.string().max(500).optional().nullable(),
  id: z.string().uuid().optional(),
});

export const saveDeclarationFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => SaveSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    if (data.id) {
      const { error } = await supabase
        .from("tax_declarations")
        .update({
          period_label: data.period_label,
          input_data: data.input_data,
          result_data: data.result_data,
          notes: data.notes ?? null,
        })
        .eq("id", data.id)
        .eq("user_id", userId);
      if (error) throw new Error(error.message);
      return { id: data.id };
    }
    const { data: row, error } = await supabase
      .from("tax_declarations")
      .insert({
        user_id: userId,
        type: data.type,
        period_label: data.period_label,
        input_data: data.input_data,
        result_data: data.result_data,
        notes: data.notes ?? null,
      })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: row.id };
  });

export const listMyDeclarationsFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data, error } = await supabase
      .from("tax_declarations")
      .select("id, type, period_label, input_data, result_data, notes, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return { declarations: data ?? [] };
  });

export const deleteDeclarationFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("tax_declarations")
      .delete()
      .eq("id", data.id)
      .eq("user_id", userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

const ExplainSchema = z.object({
  type: DeclTypeSchema,
  lang: z.enum(["ar", "en"]),
  input_data: z.record(z.string().min(1).max(64), z.number()),
  result_data: z.record(z.string().min(1).max(64), z.number()),
});

export const explainCalculationFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => ExplainSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");
    const gateway = createLovableAiGatewayProvider(key);

    const systemAr =
      "أنت مستشار محاسبي وضريبي سعودي محترف. اشرح للمستخدم الحسابات المعروضة باختصار ووضوح، مع الإشارة لقواعد هيئة الزكاة والضريبة والجمارك (ZATCA) ذات الصلة. استخدم نقاطاً مرقمة وقدِّم نصيحة عملية واحدة في النهاية.";
    const systemEn =
      "You are a professional Saudi tax & zakat consultant. Briefly explain the calculation shown to the user with clear references to ZATCA rules. Use numbered points and finish with one practical tip.";

    const subject =
      data.type === "vat"
        ? data.lang === "ar"
          ? "الإقرار الضريبي السعودي (15%)"
          : "Saudi VAT return (15%)"
        : data.lang === "ar"
          ? "الإقرار الزكوي السعودي (2.5%)"
          : "Saudi Zakat declaration (2.5%)";

    const prompt = [
      data.lang === "ar" ? `الموضوع: ${subject}` : `Subject: ${subject}`,
      data.lang === "ar" ? "المدخلات:" : "Inputs:",
      JSON.stringify(data.input_data, null, 2),
      data.lang === "ar" ? "النتائج:" : "Results:",
      JSON.stringify(data.result_data, null, 2),
    ].join("\n");

    const { text } = await generateText({
      model: gateway("google/gemini-3-flash-preview"),
      system: data.lang === "ar" ? systemAr : systemEn,
      prompt,
    });

    return { explanation: text };
  });
