
-- =============================================================
-- AI Content Automation: schema, roles, RLS, calendar, jobs
-- =============================================================

-- 1) Roles enum + table + has_role helper
CREATE TYPE public.app_role AS ENUM ('admin','reviewer','user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_read_own_roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 2) Article status enum + columns
CREATE TYPE public.article_status AS ENUM ('draft','pending_review','approved','published','rejected');

ALTER TABLE public.kb_articles
  ADD COLUMN status public.article_status NOT NULL DEFAULT 'published',
  ADD COLUMN meta_title text,
  ADD COLUMN meta_description text,
  ADD COLUMN external_sources jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN generation_source text NOT NULL DEFAULT 'manual',
  ADD COLUMN ai_model text,
  ADD COLUMN content_hash text,
  ADD COLUMN scheduled_for timestamptz,
  ADD COLUMN reviewer_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN reviewed_at timestamptz,
  ADD COLUMN review_notes text;

CREATE INDEX kb_articles_status_idx ON public.kb_articles(status);
CREATE INDEX kb_articles_content_hash_idx ON public.kb_articles(content_hash);

-- Tighten article read RLS to published-only for public; admins see all
DROP POLICY IF EXISTS "articles_read_all" ON public.kb_articles;

CREATE POLICY "articles_read_published" ON public.kb_articles
  FOR SELECT TO public USING (status = 'published');

CREATE POLICY "articles_admin_read_all" ON public.kb_articles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "articles_admin_insert" ON public.kb_articles
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "articles_admin_update" ON public.kb_articles
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "articles_admin_delete" ON public.kb_articles
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 3) Trusted sources
CREATE TABLE public.kb_trusted_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  base_url text NOT NULL,
  priority int NOT NULL DEFAULT 100,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.kb_trusted_sources TO anon, authenticated;
GRANT ALL ON public.kb_trusted_sources TO service_role;
ALTER TABLE public.kb_trusted_sources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "trusted_sources_read_all" ON public.kb_trusted_sources
  FOR SELECT USING (true);
CREATE POLICY "trusted_sources_admin_write" ON public.kb_trusted_sources
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin'))
  WITH CHECK (public.has_role(auth.uid(),'admin'));

INSERT INTO public.kb_trusted_sources (name, base_url, priority) VALUES
  ('IFRS Foundation', 'https://www.ifrs.org', 10),
  ('IASB', 'https://www.ifrs.org/groups/international-accounting-standards-board/', 15),
  ('Saudi ZATCA', 'https://zatca.gov.sa', 20),
  ('Saudi Ministry of Commerce', 'https://mc.gov.sa', 25),
  ('SOCPA', 'https://socpa.org.sa', 30),
  ('IFAC', 'https://www.ifac.org', 40),
  ('AICPA', 'https://www.aicpa-cima.com', 50);

-- 4) Generation jobs
CREATE TYPE public.job_status AS ENUM ('queued','running','succeeded','failed','skipped_duplicate');

CREATE TABLE public.kb_generation_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scheduled_for timestamptz NOT NULL DEFAULT now(),
  status public.job_status NOT NULL DEFAULT 'queued',
  category_id uuid REFERENCES public.kb_categories(id) ON DELETE SET NULL,
  topic_hint text,
  attempts int NOT NULL DEFAULT 0,
  last_error text,
  article_id uuid REFERENCES public.kb_articles(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX kb_gen_jobs_status_due_idx ON public.kb_generation_jobs(status, scheduled_for);

GRANT SELECT ON public.kb_generation_jobs TO authenticated;
GRANT ALL ON public.kb_generation_jobs TO service_role;
ALTER TABLE public.kb_generation_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "jobs_admin_read" ON public.kb_generation_jobs
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TRIGGER kb_gen_jobs_touch
BEFORE UPDATE ON public.kb_generation_jobs
FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();

-- 5) Publishing calendar
CREATE TABLE public.kb_publishing_calendar (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year int NOT NULL,
  month int NOT NULL CHECK (month BETWEEN 1 AND 12),
  planned_count int NOT NULL DEFAULT 10,
  generated_count int NOT NULL DEFAULT 0,
  published_count int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (year, month)
);

GRANT SELECT ON public.kb_publishing_calendar TO authenticated;
GRANT ALL ON public.kb_publishing_calendar TO service_role;
ALTER TABLE public.kb_publishing_calendar ENABLE ROW LEVEL SECURITY;

CREATE POLICY "calendar_admin_read" ON public.kb_publishing_calendar
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- 6) Internal links registry
CREATE TABLE public.kb_internal_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES public.kb_articles(id) ON DELETE CASCADE,
  target_article_id uuid NOT NULL REFERENCES public.kb_articles(id) ON DELETE CASCADE,
  anchor_text text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.kb_internal_links TO anon, authenticated;
GRANT ALL ON public.kb_internal_links TO service_role;
ALTER TABLE public.kb_internal_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "internal_links_read_all" ON public.kb_internal_links
  FOR SELECT USING (true);

-- 7) Seed calendar for next 12 months (idempotent)
INSERT INTO public.kb_publishing_calendar (year, month, planned_count)
SELECT
  EXTRACT(YEAR FROM d)::int,
  EXTRACT(MONTH FROM d)::int,
  10
FROM generate_series(
  date_trunc('month', now()),
  date_trunc('month', now()) + interval '11 months',
  interval '1 month'
) AS d
ON CONFLICT (year, month) DO NOTHING;
