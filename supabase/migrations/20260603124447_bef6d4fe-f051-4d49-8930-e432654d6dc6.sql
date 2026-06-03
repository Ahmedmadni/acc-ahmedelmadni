
-- Enum for item types
CREATE TYPE public.library_item_type AS ENUM ('course','book','video','external_link','tool');

CREATE TABLE public.library_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type public.library_item_type NOT NULL,
  title_ar text NOT NULL,
  title_en text,
  description_ar text,
  description_en text,
  category_slug text NOT NULL DEFAULT 'fundamentals',
  url text,
  cover_image text,
  author text,
  provider text,
  level text,
  duration_hours numeric,
  is_free boolean NOT NULL DEFAULT true,
  price numeric,
  tags text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  generation_source text NOT NULL DEFAULT 'manual',
  ai_model text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.library_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.library_items TO authenticated;
GRANT ALL ON public.library_items TO service_role;

ALTER TABLE public.library_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "library_read_published" ON public.library_items
  FOR SELECT TO public USING (is_published = true);

CREATE POLICY "library_admin_read_all" ON public.library_items
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "library_admin_insert" ON public.library_items
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "library_admin_update" ON public.library_items
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE POLICY "library_admin_delete" ON public.library_items
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'::app_role));

CREATE TRIGGER library_items_touch
  BEFORE UPDATE ON public.library_items
  FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();

CREATE INDEX idx_library_items_type ON public.library_items(type);
CREATE INDEX idx_library_items_category ON public.library_items(category_slug);
CREATE INDEX idx_library_items_published ON public.library_items(is_published);
