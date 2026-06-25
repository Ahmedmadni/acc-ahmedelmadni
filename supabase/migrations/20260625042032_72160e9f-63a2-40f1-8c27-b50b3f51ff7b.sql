ALTER TABLE public.exam_questions
  ADD COLUMN IF NOT EXISTS question_type TEXT NOT NULL DEFAULT 'MCQ',
  ADD COLUMN IF NOT EXISTS difficulty TEXT NOT NULL DEFAULT 'intermediate',
  ADD COLUMN IF NOT EXISTS exam_domain TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'approved',
  ADD COLUMN IF NOT EXISTS duplicate_hash TEXT;

ALTER TABLE public.exam_questions
  DROP CONSTRAINT IF EXISTS exam_questions_question_type_check,
  ADD CONSTRAINT exam_questions_question_type_check CHECK (question_type IN ('MCQ','TRUE_FALSE','MULTIPLE_RESPONSE','CASE_STUDY'));

ALTER TABLE public.exam_questions
  DROP CONSTRAINT IF EXISTS exam_questions_difficulty_check,
  ADD CONSTRAINT exam_questions_difficulty_check CHECK (difficulty IN ('easy','intermediate','hard'));

ALTER TABLE public.exam_questions
  DROP CONSTRAINT IF EXISTS exam_questions_status_check,
  ADD CONSTRAINT exam_questions_status_check CHECK (status IN ('draft','pending_review','approved','rejected'));

UPDATE public.exam_questions
SET duplicate_hash = md5(lower(regexp_replace(coalesce(question_en, question_ar), '\s+', ' ', 'g')))
WHERE duplicate_hash IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS exam_questions_duplicate_hash_idx
  ON public.exam_questions (duplicate_hash)
  WHERE duplicate_hash IS NOT NULL;

DROP POLICY IF EXISTS "Authenticated users can insert their own questions" ON public.exam_questions;
DROP POLICY IF EXISTS "Owners can update their own questions" ON public.exam_questions;
DROP POLICY IF EXISTS "Owners can delete their own questions" ON public.exam_questions;
DROP POLICY IF EXISTS "Admins can insert exam questions" ON public.exam_questions;
DROP POLICY IF EXISTS "Admins can update exam questions" ON public.exam_questions;
DROP POLICY IF EXISTS "Admins can delete exam questions" ON public.exam_questions;

CREATE POLICY "Admins can insert exam questions"
  ON public.exam_questions FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update exam questions"
  ON public.exam_questions FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete exam questions"
  ON public.exam_questions FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Public questions readable by everyone" ON public.exam_questions;
CREATE POLICY "Public approved questions readable by everyone"
  ON public.exam_questions FOR SELECT
  USING (is_public = true AND status = 'approved');