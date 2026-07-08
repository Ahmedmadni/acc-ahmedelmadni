import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

type Body = {
  section?: string;
  text?: string;
  lang?: "ar" | "en";
  action?: "generate" | "improve" | "shorten" | "expand" | "professionalize" | "ats";
  context?: Record<string, unknown>;
};

const PROMPT = (
  section: string,
  lang: "ar" | "en",
  text: string,
  context: string,
  action: NonNullable<Body["action"]>,
) => {
  const actionAr: Record<NonNullable<Body["action"]>, string> = {
    generate: "أنشئ محتوى جديداً مناسباً لهذا القسم بناءً على السياق",
    improve: "حسّن الصياغة مع الحفاظ على المعنى",
    shorten: "اختصر النص مع الحفاظ على الأثر المهني",
    expand: "وسّع النص بإضافة قيمة مهنية دون اختلاق أرقام",
    professionalize: "اجعل النص أكثر احترافية ومناسباً للمديرين التنفيذيين",
    ats: "حسّن النص ليتوافق مع أنظمة تتبع المتقدمين ATS بإضافة كلمات مفتاحية طبيعية",
  };
  const actionEn: Record<NonNullable<Body["action"]>, string> = {
    generate: "Generate new content for this section from the context",
    improve: "Improve the wording while preserving meaning",
    shorten: "Shorten the text while keeping professional impact",
    expand: "Expand the text with professional value without inventing metrics",
    professionalize: "Make the text more executive and professional",
    ats: "Optimize for ATS with natural role-relevant keywords",
  };
  const ar = `أنت كاتب سير ذاتية محترف بمستوى Deloitte / PwC. أعد صياغة الجزء التالي من السيرة الذاتية ليصبح:
- احترافياً وموجزاً وقوياً
- يبدأ بأفعال حركة قوية
- يبرز الإنجازات والأرقام عند الإمكان
- خالٍ من الحشو والكلمات العامة
- بنفس اللغة (عربي فصيح أعمال)
- لا تضف عناوين أو رموز Markdown، فقط النص الناتج

القسم: ${section}
المطلوب: ${actionAr[action]}
السياق: ${context}
النص الأصلي:
"""${text || "أنشئ محتوى مناسباً من السياق المتاح."}"""

اكتب النسخة المحسّنة فقط بدون أي مقدمات.`;

  const en = `You are a senior CV writer (Deloitte / PwC level). Rewrite the following CV section to be:
- Professional, concise, and impactful
- Lead with strong action verbs
- Highlight achievements and metrics where possible
- No fluff or generic phrasing
- Same language (business English)
- No headings or markdown, plain text only

Section: ${section}
Action: ${actionEn[action]}
Context: ${context}
Original text:
"""${text || "Generate suitable content from the available context."}"""

Return only the improved version, no preamble.`;

  return lang === "ar" ? ar : en;
};

export const Route = createFileRoute("/api/cv-enhance")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as Body;
        const text = (body.text || "").trim();
        const action = body.action ?? "improve";
        if (!text && action !== "generate") return new Response("Text required", { status: 400 });
        if (text.length > 4000) return new Response("Text too long", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const lang = body.lang === "en" ? "en" : "ar";
        const section = (body.section || "summary").slice(0, 50);
        const context = JSON.stringify(body.context || {}).slice(0, 600);

        const gateway = createLovableAiGatewayProvider(key);
        try {
          const { text: improved } = await generateText({
            model: gateway("google/gemini-3-flash-preview"),
            prompt: PROMPT(section, lang, text, context, action),
          });
          return Response.json({ text: improved.trim() });
        } catch (err) {
          const msg = err instanceof Error ? err.message : "AI error";
          return new Response(msg, { status: 500 });
        }
      },
    },
  },
});
