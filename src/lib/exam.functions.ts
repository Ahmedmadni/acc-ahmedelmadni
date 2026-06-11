import { createServerFn } from "@tanstack/react-start";
import { generateText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { TRACKS } from "@/lib/exam-bank";

const InputSchema = z.object({
  rawText: z.string().min(20).max(120_000),
  defaultTrack: z.enum(TRACKS as [string, ...string[]]).optional(),
});

const SYSTEM = `You extract multiple-choice exam questions from raw text (professional accounting/finance exams: IFRS, CMA, CPA, FMAA, ACCA, CFA).
Return STRICT JSON only — no prose, no markdown fences.
Schema:
{
  "questions": [
    {
      "track": "IFRS|CMA|CPA|FMAA|ACCA|CFA",
      "topic": "short topic string",
      "question_en": "string",
      "question_ar": "Arabic translation",
      "choices_en": ["A","B","C","D"],
      "choices_ar": ["..","..","..",".."],
      "answerIndex": 0,
      "explanation_en": "concise explanation citing standard/source",
      "explanation_ar": "شرح مختصر يذكر المعيار/المصدر",
      "reference": "e.g. Gleim CMA Part 1, IAS 16, ISA 200"
    }
  ]
}
Rules:
- Detect answers from context if marked (e.g. "Answer: B", highlighted, asterisked). If ambiguous, set answerIndex to your best inference based on standard guidance.
- Provide BOTH Arabic and English for question/choices/explanation. Translate accurately.
- Keep choices exactly 2-5 options.
- Skip non-MCQ content.
- Max 40 questions per call.`;

export const extractExamQuestions = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => InputSchema.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");
    const gateway = createLovableAiGatewayProvider(key);

    const { text } = await generateText({
      model: gateway("google/gemini-3-flash-preview"),
      system: SYSTEM,
      prompt: `Default track if unclear: ${data.defaultTrack ?? "IFRS"}\n\nRaw text:\n\n${data.rawText}`,
    });

    type ExtractedQ = {
      track?: string;
      topic?: string;
      question_en?: string;
      question_ar?: string;
      choices_en?: string[];
      choices_ar?: string[];
      answerIndex?: number;
      explanation_en?: string;
      explanation_ar?: string;
      reference?: string;
    };
    const cleaned = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "");
    let parsed: { questions?: ExtractedQ[] } = {};
    try {
      parsed = JSON.parse(cleaned) as { questions?: ExtractedQ[] };
    } catch {
      const m = cleaned.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]) as { questions?: ExtractedQ[] };
    }
    const list: ExtractedQ[] = Array.isArray(parsed.questions) ? parsed.questions : [];
    return { questions: list };
  });
