-- Enum for declaration type
DO $$ BEGIN
  CREATE TYPE public.tax_declaration_type AS ENUM ('vat', 'zakat');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Table
CREATE TABLE IF NOT EXISTS public.tax_declarations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type public.tax_declaration_type NOT NULL,
  period_label text NOT NULL,
  input_data jsonb NOT NULL DEFAULT '{}'::jsonb,
  result_data jsonb NOT NULL DEFAULT '{}'::jsonb,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tax_declarations_user ON public.tax_declarations(user_id, created_at DESC);

-- Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tax_declarations TO authenticated;
GRANT ALL ON public.tax_declarations TO service_role;

-- RLS
ALTER TABLE public.tax_declarations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tax_decl_select_own" ON public.tax_declarations
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "tax_decl_insert_own" ON public.tax_declarations
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "tax_decl_update_own" ON public.tax_declarations
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "tax_decl_delete_own" ON public.tax_declarations
  FOR DELETE TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'::public.app_role));

-- Touch updated_at trigger (reuses pattern)
CREATE TRIGGER trg_tax_decl_touch
BEFORE UPDATE ON public.tax_declarations
FOR EACH ROW EXECUTE FUNCTION public.kb_touch_updated_at();