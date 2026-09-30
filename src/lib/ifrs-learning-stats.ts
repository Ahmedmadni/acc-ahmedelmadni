export type IfrsDifficulty = "easy" | "intermediate" | "hard";
export type IfrsLearningMode = "learn" | "exam" | "adaptive";

export interface IfrsAttemptRecord {
  attemptId: string;
  questionId: string;
  standardCode: string;
  domain: string;
  difficulty: IfrsDifficulty;
  mode: IfrsLearningMode;
  correct: boolean;
  answeredAt: string;
}

export interface IfrsWeaknessStat {
  key: string;
  standardCode: string;
  domain: string;
  attempts: number;
  correct: number;
  accuracy: number;
}

const STORAGE_KEY = "ifrs-learning-attempts-v1";
const MAX_ATTEMPTS = 1200;

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function legacyAttemptId(item: Partial<IfrsAttemptRecord>) {
  return `legacy:${item.questionId ?? "unknown"}:${item.answeredAt ?? "unknown"}`;
}

export function createIfrsAttemptId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `attempt:${Date.now()}:${Math.random().toString(36).slice(2)}`;
}

export function normalizeIfrsAttempt(value: unknown): IfrsAttemptRecord | null {
  if (!value || typeof value !== "object") return null;
  const item = value as Partial<IfrsAttemptRecord>;
  if (
    typeof item.questionId !== "string" ||
    typeof item.standardCode !== "string" ||
    typeof item.domain !== "string" ||
    typeof item.correct !== "boolean" ||
    typeof item.answeredAt !== "string"
  ) {
    return null;
  }

  const difficulty: IfrsDifficulty =
    item.difficulty === "easy" || item.difficulty === "hard"
      ? item.difficulty
      : "intermediate";

  const mode: IfrsLearningMode =
    item.mode === "exam" || item.mode === "adaptive" ? item.mode : "learn";

  return {
    attemptId:
      typeof item.attemptId === "string" && item.attemptId
        ? item.attemptId
        : legacyAttemptId(item),
    questionId: item.questionId,
    standardCode: item.standardCode,
    domain: item.domain,
    difficulty,
    mode,
    correct: item.correct,
    answeredAt: item.answeredAt,
  };
}

export function readIfrsAttempts(): IfrsAttemptRecord[] {
  if (!canUseStorage()) return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(normalizeIfrsAttempt)
      .filter((item): item is IfrsAttemptRecord => item !== null);
  } catch {
    return [];
  }
}

export function writeIfrsAttempts(records: IfrsAttemptRecord[]) {
  if (!canUseStorage()) return;
  const unique = new Map<string, IfrsAttemptRecord>();
  for (const record of records) unique.set(record.attemptId, record);
  const next = [...unique.values()]
    .sort((a, b) => a.answeredAt.localeCompare(b.answeredAt))
    .slice(-MAX_ATTEMPTS);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function recordIfrsAttempt(record: IfrsAttemptRecord) {
  writeIfrsAttempts([...readIfrsAttempts(), record]);
}

export function clearIfrsAttempts() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function buildWeaknessStats(
  attempts: IfrsAttemptRecord[],
  standardCode?: string,
): IfrsWeaknessStat[] {
  const grouped = new Map<
    string,
    { standardCode: string; domain: string; attempts: number; correct: number }
  >();

  for (const attempt of attempts) {
    if (standardCode && attempt.standardCode !== standardCode) continue;
    const key = `${attempt.standardCode}::${attempt.domain}`;
    const current = grouped.get(key) ?? {
      standardCode: attempt.standardCode,
      domain: attempt.domain,
      attempts: 0,
      correct: 0,
    };
    current.attempts += 1;
    if (attempt.correct) current.correct += 1;
    grouped.set(key, current);
  }

  return [...grouped.entries()]
    .map(([key, value]) => ({
      key,
      ...value,
      accuracy: value.attempts > 0 ? Math.round((value.correct / value.attempts) * 100) : 0,
    }))
    .sort((a, b) => {
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      return b.attempts - a.attempts;
    });
}

export function overallAccuracy(attempts: IfrsAttemptRecord[]) {
  if (attempts.length === 0) return 0;
  const correct = attempts.reduce((total, attempt) => total + (attempt.correct ? 1 : 0), 0);
  return Math.round((correct / attempts.length) * 100);
}
