BEGIN;

CREATE TABLE IF NOT EXISTS public.ifrs_learning_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  client_attempt_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  standard_code TEXT NOT NULL REFERENCES public.ifrs_standards(code) ON DELETE CASCADE,
  domain TEXT NOT NULL DEFAULT 'general',
  difficulty TEXT NOT NULL DEFAULT 'intermediate'
    CHECK (difficulty IN ('easy','intermediate','hard')),
  mode TEXT NOT NULL DEFAULT 'learn'
    CHECK (mode IN ('learn','exam','adaptive')),
  is_correct BOOLEAN NOT NULL,
  answered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, client_attempt_id)
);

CREATE INDEX IF NOT EXISTS ifrs_learning_attempts_user_recent_idx
  ON public.ifrs_learning_attempts (user_id, answered_at DESC);

CREATE INDEX IF NOT EXISTS ifrs_learning_attempts_user_standard_idx
  ON public.ifrs_learning_attempts (user_id, standard_code, answered_at DESC);

CREATE INDEX IF NOT EXISTS ifrs_learning_attempts_user_domain_idx
  ON public.ifrs_learning_attempts (user_id, standard_code, domain);

GRANT SELECT, INSERT, DELETE ON public.ifrs_learning_attempts TO authenticated;
GRANT ALL ON public.ifrs_learning_attempts TO service_role;

ALTER TABLE public.ifrs_learning_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own IFRS attempts" ON public.ifrs_learning_attempts;
CREATE POLICY "Users read own IFRS attempts"
  ON public.ifrs_learning_attempts
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users insert own IFRS attempts" ON public.ifrs_learning_attempts;
CREATE POLICY "Users insert own IFRS attempts"
  ON public.ifrs_learning_attempts
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users delete own IFRS attempts" ON public.ifrs_learning_attempts;
CREATE POLICY "Users delete own IFRS attempts"
  ON public.ifrs_learning_attempts
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

COMMIT;
