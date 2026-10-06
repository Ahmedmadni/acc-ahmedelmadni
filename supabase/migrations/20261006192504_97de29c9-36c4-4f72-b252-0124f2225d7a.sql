CREATE TABLE public.kb_translation_staging (id uuid PRIMARY KEY, content_en jsonb, faq_en jsonb);
GRANT ALL ON public.kb_translation_staging TO service_role;
ALTER TABLE public.kb_translation_staging ENABLE ROW LEVEL SECURITY;