import { supabase } from "@/integrations/supabase/client";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  normalizeIfrsAttempt,
  writeIfrsAttempts,
  type IfrsAttemptRecord,
} from "@/lib/ifrs-learning-stats";

// The generated Database types lag behind newly created tables, so queries
// against ifrs_learning_attempts go through an untyped handle on the same
// client (RLS still applies — this only relaxes compile-time row typing).
const db = supabase as unknown as SupabaseClient;

type RemoteAttemptRow = {
  client_attempt_id: string;
  question_id: string;
  standard_code: string;
  domain: string;
  difficulty: string;
  mode: string;
  is_correct: boolean;
  answered_at: string;
};

function fromRemote(row: RemoteAttemptRow): IfrsAttemptRecord | null {
  return normalizeIfrsAttempt({
    attemptId: row.client_attempt_id,
    questionId: row.question_id,
    standardCode: row.standard_code,
    domain: row.domain,
    difficulty: row.difficulty,
    mode: row.mode,
    correct: row.is_correct,
    answeredAt: row.answered_at,
  });
}

function toInsert(userId: string, attempt: IfrsAttemptRecord) {
  return {
    user_id: userId,
    client_attempt_id: attempt.attemptId,
    question_id: attempt.questionId,
    standard_code: attempt.standardCode,
    domain: attempt.domain,
    difficulty: attempt.difficulty,
    mode: attempt.mode,
    is_correct: attempt.correct,
    answered_at: attempt.answeredAt,
  };
}

export async function syncIfrsProgress(localAttempts: IfrsAttemptRecord[]) {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) {
    return {
      userId: null,
      attempts: localAttempts,
      synced: false,
    };
  }

  const { data: remoteRows, error: loadError } = await supabase
    .from("ifrs_learning_attempts")
    .select(
      "client_attempt_id, question_id, standard_code, domain, difficulty, mode, is_correct, answered_at",
    )
    .eq("user_id", user.id)
    .order("answered_at", { ascending: false })
    .limit(1200);

  if (loadError) throw loadError;

  const remoteAttempts = (remoteRows ?? [])
    .map((row) => fromRemote(row as RemoteAttemptRow))
    .filter((attempt): attempt is IfrsAttemptRecord => attempt !== null);

  if (localAttempts.length > 0) {
    const remoteIds = new Set(remoteAttempts.map((attempt) => attempt.attemptId));
    const missing = localAttempts.filter((attempt) => !remoteIds.has(attempt.attemptId));
    if (missing.length > 0) {
      const { error: syncError } = await supabase
        .from("ifrs_learning_attempts")
        .upsert(missing.map((attempt) => toInsert(user.id, attempt)), {
          onConflict: "user_id,client_attempt_id",
          ignoreDuplicates: true,
        });
      if (syncError) throw syncError;
    }
  }

  const merged = new Map<string, IfrsAttemptRecord>();
  for (const attempt of remoteAttempts) merged.set(attempt.attemptId, attempt);
  for (const attempt of localAttempts) merged.set(attempt.attemptId, attempt);

  const attempts = [...merged.values()]
    .sort((a, b) => a.answeredAt.localeCompare(b.answeredAt))
    .slice(-1200);

  writeIfrsAttempts(attempts);

  return {
    userId: user.id,
    attempts,
    synced: true,
  };
}

export async function saveIfrsAttemptToAccount(
  userId: string | null,
  attempt: IfrsAttemptRecord,
) {
  if (!userId) return;
  const { error } = await supabase
    .from("ifrs_learning_attempts")
    .upsert(toInsert(userId, attempt), {
      onConflict: "user_id,client_attempt_id",
      ignoreDuplicates: true,
    });
  if (error) throw error;
}

export async function clearIfrsAccountProgress(userId: string | null) {
  if (!userId) return;
  const { error } = await supabase
    .from("ifrs_learning_attempts")
    .delete()
    .eq("user_id", userId);
  if (error) throw error;
}
