import { createClientOnlyFn } from "@tanstack/react-start";
import type { IfrsAttemptRecord } from "@/lib/ifrs-learning-stats";

export const syncIfrsProgress = createClientOnlyFn(
  async (localAttempts: IfrsAttemptRecord[]) => {
    const client = await import("@/lib/ifrs-progress.client");
    return client.syncIfrsProgress(localAttempts);
  },
);

export const saveIfrsAttemptToAccount = createClientOnlyFn(
  async (userId: string | null, attempt: IfrsAttemptRecord) => {
    const client = await import("@/lib/ifrs-progress.client");
    return client.saveIfrsAttemptToAccount(userId, attempt);
  },
);

export const clearIfrsAccountProgress = createClientOnlyFn(
  async (userId: string | null) => {
    const client = await import("@/lib/ifrs-progress.client");
    return client.clearIfrsAccountProgress(userId);
  },
);
