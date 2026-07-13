
-- updated_at trigger helper (reuse if exists)
CREATE OR REPLACE FUNCTION public.tg_set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

-- ============ certifications ============
CREATE TABLE public.certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL,
  title_en text NOT NULL,
  issuer_ar text,
  issuer_en text,
  issue_date text,
  image_url text,
  credential_url text,
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.certifications TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.certifications TO authenticated;
GRANT ALL ON public.certifications TO service_role;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "certifications public read" ON public.certifications
  FOR SELECT USING (is_published = true);
CREATE POLICY "certifications admin all" ON public.certifications
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_certifications_updated_at
  BEFORE UPDATE ON public.certifications
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ experience_items ============
CREATE TABLE public.experience_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role_ar text NOT NULL,
  role_en text NOT NULL,
  company_ar text NOT NULL,
  company_en text NOT NULL,
  company_logo_url text,
  date_ar text NOT NULL,
  date_en text NOT NULL,
  points_ar text[] NOT NULL DEFAULT '{}',
  points_en text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.experience_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.experience_items TO authenticated;
GRANT ALL ON public.experience_items TO service_role;
ALTER TABLE public.experience_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "experience public read" ON public.experience_items
  FOR SELECT USING (is_published = true);
CREATE POLICY "experience admin all" ON public.experience_items
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_experience_items_updated_at
  BEFORE UPDATE ON public.experience_items
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ skill_groups ============
CREATE TABLE public.skill_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  heading_ar text NOT NULL,
  heading_en text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.skill_groups TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.skill_groups TO authenticated;
GRANT ALL ON public.skill_groups TO service_role;
ALTER TABLE public.skill_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "skill_groups public read" ON public.skill_groups
  FOR SELECT USING (is_published = true);
CREATE POLICY "skill_groups admin all" ON public.skill_groups
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_skill_groups_updated_at
  BEFORE UPDATE ON public.skill_groups
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ skill_items ============
CREATE TABLE public.skill_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.skill_groups(id) ON DELETE CASCADE,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  level int NOT NULL DEFAULT 50,
  desc_ar text,
  desc_en text,
  tools text[] NOT NULL DEFAULT '{}',
  kpis_ar text[] NOT NULL DEFAULT '{}',
  kpis_en text[] NOT NULL DEFAULT '{}',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_skill_items_group ON public.skill_items(group_id);
GRANT SELECT ON public.skill_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.skill_items TO authenticated;
GRANT ALL ON public.skill_items TO service_role;
ALTER TABLE public.skill_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "skill_items public read" ON public.skill_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.skill_groups g
      WHERE g.id = skill_items.group_id AND g.is_published = true
    )
  );
CREATE POLICY "skill_items admin all" ON public.skill_items
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_skill_items_updated_at
  BEFORE UPDATE ON public.skill_items
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();
