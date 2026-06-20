
-- Exam tracks enum
DO $$ BEGIN
  CREATE TYPE public.exam_track AS ENUM ('IFRS','CMA','CPA','FMAA','ACCA','CFA');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Main table
CREATE TABLE IF NOT EXISTS public.exam_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  track public.exam_track NOT NULL,
  topic TEXT NOT NULL DEFAULT '',
  question_ar TEXT NOT NULL,
  question_en TEXT NOT NULL,
  choices_ar JSONB NOT NULL,
  choices_en JSONB NOT NULL,
  answer_index INTEGER NOT NULL CHECK (answer_index >= 0),
  explanation_ar TEXT NOT NULL DEFAULT '',
  explanation_en TEXT NOT NULL DEFAULT '',
  reference TEXT NOT NULL DEFAULT '',
  is_public BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS exam_questions_track_idx ON public.exam_questions (track);
CREATE INDEX IF NOT EXISTS exam_questions_public_idx ON public.exam_questions (is_public);
CREATE INDEX IF NOT EXISTS exam_questions_created_by_idx ON public.exam_questions (created_by);

-- GRANTS (required for the Data API)
GRANT SELECT ON public.exam_questions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_questions TO authenticated;
GRANT ALL ON public.exam_questions TO service_role;

-- RLS
ALTER TABLE public.exam_questions ENABLE ROW LEVEL SECURITY;

-- Public read for is_public=true
CREATE POLICY "Public questions readable by everyone"
  ON public.exam_questions FOR SELECT
  USING (is_public = true);

-- Owner can read their own (public or private)
CREATE POLICY "Owners can read their own questions"
  ON public.exam_questions FOR SELECT TO authenticated
  USING (auth.uid() = created_by);

-- Admins can read all
CREATE POLICY "Admins can read all questions"
  ON public.exam_questions FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Owner insert
CREATE POLICY "Authenticated users can insert their own questions"
  ON public.exam_questions FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = created_by);

-- Owner update
CREATE POLICY "Owners can update their own questions"
  ON public.exam_questions FOR UPDATE TO authenticated
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

-- Admin update
CREATE POLICY "Admins can update any question"
  ON public.exam_questions FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Owner delete
CREATE POLICY "Owners can delete their own questions"
  ON public.exam_questions FOR DELETE TO authenticated
  USING (auth.uid() = created_by);

-- Admin delete
CREATE POLICY "Admins can delete any question"
  ON public.exam_questions FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.touch_exam_questions_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

DROP TRIGGER IF EXISTS exam_questions_set_updated_at ON public.exam_questions;
CREATE TRIGGER exam_questions_set_updated_at
  BEFORE UPDATE ON public.exam_questions
  FOR EACH ROW EXECUTE FUNCTION public.touch_exam_questions_updated_at();
