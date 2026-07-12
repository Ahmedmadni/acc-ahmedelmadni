
-- accounting_templates
CREATE TABLE public.accounting_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  how_to_use_ar text,
  how_to_use_en text,
  category text NOT NULL DEFAULT 'tools',
  format text NOT NULL DEFAULT 'Excel',
  pages int NOT NULL DEFAULT 1,
  is_new boolean NOT NULL DEFAULT false,
  is_official boolean NOT NULL DEFAULT false,
  related_standard text,
  file_url text,
  preview_fields text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.accounting_templates TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.accounting_templates TO authenticated;
GRANT ALL ON public.accounting_templates TO service_role;
ALTER TABLE public.accounting_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "templates public read" ON public.accounting_templates
  FOR SELECT USING (is_published = true);
CREATE POLICY "templates admin all" ON public.accounting_templates
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_accounting_templates_updated_at
  BEFORE UPDATE ON public.accounting_templates
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- storage policies for template-files bucket
CREATE POLICY "template-files public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'template-files');
CREATE POLICY "template-files admin write"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'template-files' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "template-files admin update"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'template-files' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "template-files admin delete"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'template-files' AND public.has_role(auth.uid(), 'admin'));

-- article rating summary RPC
CREATE OR REPLACE FUNCTION public.get_article_rating_summary(p_article_id uuid)
RETURNS TABLE(avg_rating numeric, rating_count int)
LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT COALESCE(AVG(rating)::numeric(3,2), 0) AS avg_rating,
         COUNT(*)::int AS rating_count
  FROM public.kb_ratings
  WHERE article_id = p_article_id;
$$;
GRANT EXECUTE ON FUNCTION public.get_article_rating_summary(uuid) TO anon, authenticated;
