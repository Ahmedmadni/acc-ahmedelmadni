-- Categories
CREATE TABLE public.kb_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  description_ar text,
  description_en text,
  icon text NOT NULL DEFAULT 'BookOpen',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.kb_categories TO anon, authenticated;
GRANT ALL ON public.kb_categories TO service_role;
ALTER TABLE public.kb_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "categories_read_all" ON public.kb_categories FOR SELECT USING (true);

-- Articles
CREATE TABLE public.kb_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  category_id uuid NOT NULL REFERENCES public.kb_categories(id) ON DELETE CASCADE,
  title_ar text NOT NULL,
  title_en text NOT NULL,
  excerpt_ar text NOT NULL,
  excerpt_en text NOT NULL,
  content_ar jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of {heading, body}
  featured_image text,
  author_name text NOT NULL DEFAULT 'Ahmed Elmadani',
  author_title text DEFAULT 'Senior Accounting Consultant',
  author_avatar text,
  published_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  reading_minutes int NOT NULL DEFAULT 5,
  faq jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of {q, a}
  "references" jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of {label, url}
  keywords text[] NOT NULL DEFAULT '{}',
  is_featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX kb_articles_category_idx ON public.kb_articles(category_id);
CREATE INDEX kb_articles_published_idx ON public.kb_articles(published_at DESC);
GRANT SELECT ON public.kb_articles TO anon, authenticated;
GRANT ALL ON public.kb_articles TO service_role;
ALTER TABLE public.kb_articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "articles_read_all" ON public.kb_articles FOR SELECT USING (true);

-- Ratings
CREATE TABLE public.kb_ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES public.kb_articles(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rating int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (article_id, user_id)
);
CREATE INDEX kb_ratings_article_idx ON public.kb_ratings(article_id);
GRANT SELECT ON public.kb_ratings TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.kb_ratings TO authenticated;
GRANT ALL ON public.kb_ratings TO service_role;
ALTER TABLE public.kb_ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ratings_read_all" ON public.kb_ratings FOR SELECT USING (true);
CREATE POLICY "ratings_insert_own" ON public.kb_ratings FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "ratings_update_own" ON public.kb_ratings FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "ratings_delete_own" ON public.kb_ratings FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Bookmarks
CREATE TABLE public.kb_bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES public.kb_articles(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (article_id, user_id)
);
CREATE INDEX kb_bookmarks_user_idx ON public.kb_bookmarks(user_id);
GRANT SELECT, INSERT, DELETE ON public.kb_bookmarks TO authenticated;
GRANT ALL ON public.kb_bookmarks TO service_role;
ALTER TABLE public.kb_bookmarks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "bookmarks_read_own" ON public.kb_bookmarks FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "bookmarks_insert_own" ON public.kb_bookmarks FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "bookmarks_delete_own" ON public.kb_bookmarks FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.kb_touch_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;
CREATE TRIGGER kb_articles_touch BEFORE UPDATE ON public.kb_articles FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();