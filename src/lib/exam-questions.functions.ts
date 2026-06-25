import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireAdmin } from "@/integrations/supabase/admin-middleware";
import { TRACKS, type ExamQuestion, type ExamTrack } from "@/lib/exam-bank";

const TrackEnum = z.enum(TRACKS as [string, ...string[]]);

const QuestionInput = z.object({
  track: TrackEnum,
  topic: z.string().max(200).default(""),
  question_ar: z.string().min(1).max(2000),
  question_en: z.string().min(1).max(2000),
  choices_ar: z.array(z.string().max(1000)).min(2).max(6),
  choices_en: z.array(z.string().max(1000)).min(2).max(6),
  answer_index: z.number().int().min(0).max(5),
  question_type: z.enum(["MCQ", "TRUE_FALSE", "MULTIPLE_RESPONSE", "CASE_STUDY"]).default("MCQ"),
  difficulty: z.enum(["easy", "intermediate", "hard"]).default("intermediate"),
  exam_domain: z.string().max(200).default(""),
  explanation_ar: z.string().max(4000).default(""),
  explanation_en: z.string().max(4000).default(""),
  reference: z.string().max(300).default(""),
  is_public: z.boolean().default(false),
  status: z.enum(["draft", "pending_review", "approved", "rejected"]).default("approved"),
  duplicate_hash: z.string().max(64).optional(),
});

type Row = {
  id: string;
  track: ExamTrack;
  topic: string;
  question_ar: string;
  question_en: string;
  choices_ar: unknown;
  choices_en: unknown;
  answer_index: number;
  question_type?: string;
  difficulty?: string;
  exam_domain?: string;
  explanation_ar: string;
  explanation_en: string;
  reference: string;
  is_public: boolean;
  created_by: string | null;
};

function rowToExamQuestion(r: Row): ExamQuestion {
  return {
    id: r.id,
    track: r.track,
    topic: r.topic || "—",
    question: { ar: r.question_ar, en: r.question_en },
    choices: {
      ar: Array.isArray(r.choices_ar) ? (r.choices_ar as string[]) : [],
      en: Array.isArray(r.choices_en) ? (r.choices_en as string[]) : [],
    },
    answerIndex: r.answer_index,
    explanation: { ar: r.explanation_ar, en: r.explanation_en },
    reference: r.reference || "—",
  };
}

/** Public read — uses publishable key + RLS public/anon policy. */
export const listExamQuestions = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) =>
    z.object({ track: TrackEnum.optional() }).parse(d ?? {}),
  )
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Missing Supabase env");
    const supabase = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });

    let q = supabase
      .from("exam_questions")
      .select(
        "id,track,topic,question_ar,question_en,choices_ar,choices_en,answer_index,question_type,difficulty,exam_domain,explanation_ar,explanation_en,reference,is_public,created_by",
      )
      .eq("is_public", true)
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(2000);

    if (data.track) q = q.eq("track", data.track as ExamTrack);

    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return { questions: (rows ?? []).map((r) => rowToExamQuestion(r as Row)) };
  });

/** Admin: list all questions for review and maintenance. */
export const listAdminExamQuestions = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data: rows, error } = await context.supabase
      .from("exam_questions")
      .select(
        "id,track,topic,question_ar,question_en,choices_ar,choices_en,answer_index,question_type,difficulty,exam_domain,explanation_ar,explanation_en,reference,is_public,created_by,status,duplicate_hash",
      )
      .order("created_at", { ascending: false })
      .limit(2000);
    if (error) throw new Error(error.message);
    return { questions: (rows ?? []).map((r) => rowToExamQuestion(r as Row)) };
  });

/** Add a batch of questions for the signed-in user. */
export const addExamQuestions = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) =>
    z
      .object({
        questions: z.array(QuestionInput).min(1).max(50),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    const payload = data.questions.map((q) => ({
      ...q,
      track: q.track as ExamTrack,
      created_by: context.userId,
      duplicate_hash: q.duplicate_hash ?? hashQuestion(q.question_en || q.question_ar),
    }));
    const hashes = payload.map((q) => q.duplicate_hash).filter(Boolean) as string[];
    const { data: existing, error: existingError } = hashes.length
      ? await context.supabase.from("exam_questions").select("duplicate_hash").in("duplicate_hash", hashes)
      : { data: [], error: null };
    if (existingError) throw new Error(existingError.message);
    const existingSet = new Set((existing ?? []).map((row) => (row as { duplicate_hash: string | null }).duplicate_hash).filter(Boolean));
    const uniquePayload = payload.filter((q) => !existingSet.has(q.duplicate_hash ?? ""));
    if (uniquePayload.length === 0) return { inserted: 0, skipped: payload.length };
    const { data: rows, error } = await context.supabase
      .from("exam_questions")
      .insert(uniquePayload)
      .select("id");
    if (error) throw new Error(error.message);
    return { inserted: rows?.length ?? 0, skipped: payload.length - (rows?.length ?? 0) };
  });

/** Delete a question. Admin only. */
export const deleteMyExamQuestion = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("exam_questions")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const updateExamQuestionStatus = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid(), status: z.enum(["draft", "pending_review", "approved", "rejected"]), is_public: z.boolean().optional() }).parse(d))
  .handler(async ({ data, context }) => {
    const patch: { status: string; is_public?: boolean } = { status: data.status };
    if (typeof data.is_public === "boolean") patch.is_public = data.is_public;
    const { error } = await context.supabase.from("exam_questions").update(patch).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/** Aggregate counts per track — useful for debug & user feedback. */
export const examQuestionsStats = createServerFn({ method: "GET" })
  .handler(async () => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Missing Supabase env");
    const supabase = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await supabase
      .from("exam_questions")
      .select("track")
      .eq("is_public", true);
    if (error) throw new Error(error.message);
    const counts: Record<string, number> = {};
    for (const r of data ?? []) {
      const t = (r as { track: string }).track;
      counts[t] = (counts[t] ?? 0) + 1;
    }
    return { counts, total: data?.length ?? 0 };
  });

function hashQuestion(value: string) {
  let hash = 0;
  const normalized = value.toLowerCase().replace(/[\s\W_]+/g, " ").trim();
  for (let i = 0; i < normalized.length; i += 1) hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  return hash.toString(16).padStart(8, "0");
}
