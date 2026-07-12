import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const TranslatableSchema = z.object({
  fullName: z.string(),
  jobTitle: z.string(),
  location: z.string(),
  summary: z.string(),
  experience: z.array(z.object({ role: z.string(), company: z.string(), description: z.string() })),
  education: z.array(z.object({ degree: z.string(), school: z.string() })),
  skills: z.array(z.string()),
  languages: z.array(z.string()),
  certifications: z.array(z.object({ name: z.string(), issuer: z.string() })),
});
type Translatable = z.infer<typeof TranslatableSchema>;

type Body = {
  data?: Translatable;
  sourceLang?: "ar" | "en";
  targetLang?: "ar" | "en";
};

const PROMPT = (source: "ar" | "en", target: "ar" | "en", payload: Translatable) => {
  const langName = { ar: "Arabic", en: "English" };
  return `You are a professional CV translator. Translate the following CV content from ${langName[source]} to ${langName[target]}.

Rules:
- Translate jobTitle, location, summary, experience[].role, experience[].description, education[].degree, skills[], languages[], and certifications[].name into natural, professional ${langName[target]} business language.
- For fullName, experience[].company, education[].school, and certifications[].issuer (proper nouns/names): transliterate them into ${langName[target]} script/spelling using the standard professional convention, rather than translating their meaning.
- "languages" entries are language names (e.g. "Arabic", "English") — translate each to its ${langName[target]} name.
- Preserve the exact same JSON structure and array lengths as the input — do not add, remove, or reorder items.
- Return ONLY valid JSON matching the input schema, no markdown, no commentary.

Input JSON:
${JSON.stringify(payload)}

Return the translated JSON now.`;
};

export const Route = createFileRoute("/api/cv-translate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as Body;
        const sourceLang = body.sourceLang === "en" ? "en" : "ar";
        const targetLang = body.targetLang === "en" ? "en" : "ar";
        if (sourceLang === targetLang) {
          return new Response("sourceLang and targetLang must differ", { status: 400 });
        }
        const parsed = TranslatableSchema.safeParse(body.data);
        if (!parsed.success) return new Response("Invalid CV data", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        try {
          const { text } = await generateText({
            model: gateway("google/gemini-3-flash-preview"),
            prompt: PROMPT(sourceLang, targetLang, parsed.data),
          });
          const cleaned = text
            .trim()
            .replace(/^```(?:json)?\s*/i, "")
            .replace(/```\s*$/i, "");
          const json = JSON.parse(cleaned);
          const result = TranslatableSchema.safeParse(json);
          if (!result.success) {
            return new Response("AI returned an unexpected shape", { status: 502 });
          }
          if (
            result.data.experience.length !== parsed.data.experience.length ||
            result.data.education.length !== parsed.data.education.length ||
            result.data.certifications.length !== parsed.data.certifications.length
          ) {
            return new Response("AI translation changed the item count", { status: 502 });
          }
          return Response.json({ data: result.data });
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Translation failed";
          return new Response(msg, { status: 500 });
        }
      },
    },
  },
});
