export type IfrsDifficulty = "easy" | "intermediate" | "hard";

export interface IfrsAttemptRecord {
  questionId: string;
  standardCode: string;
  domain: string;
  difficulty: IfrsDifficulty;
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

export function readIfrsAttempts(): IfrsAttemptRecord[] {
  if (!canUseStorage()) return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is IfrsAttemptRecord =>
        item &&
        typeof item.questionId === "string" &&
        typeof item.standardCode === "string" &&
        typeof item.domain === "string" &&
        typeof item.correct === "boolean",
    );
  } catch {
    return [];
  }
}

export function recordIfrsAttempt(record: IfrsAttemptRecord) {
  if (!canUseStorage()) return;
  const next = [...readIfrsAttempts(), record].slice(-MAX_ATTEMPTS);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
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
