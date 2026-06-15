
-- 1) Add has_pdf generated column so clients can know a PDF exists without seeing the path
ALTER TABLE public.library_items
  ADD COLUMN IF NOT EXISTS has_pdf boolean GENERATED ALWAYS AS (pdf_path IS NOT NULL) STORED;

-- 2) Revoke column-level SELECT on pdf_path from anon and authenticated
REVOKE SELECT (pdf_path) ON public.library_items FROM anon;
REVOKE SELECT (pdf_path) ON public.library_items FROM authenticated;

-- Re-grant SELECT on all OTHER columns to anon/authenticated explicitly
GRANT SELECT (
  id, type, title_ar, title_en, description_ar, description_en, category_slug,
  url, cover_image, author, provider, level, duration_hours, is_free, price,
  tags, sort_order, is_published, generation_source, ai_model, created_at, updated_at,
  has_pdf
) ON public.library_items TO anon, authenticated;

-- 3) Tighten SECURITY DEFINER function execution: revoke from PUBLIC/anon, keep authenticated for RLS
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- Trigger-only functions: no caller needs EXECUTE
REVOKE EXECUTE ON FUNCTION public.assign_primary_admin() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.kb_touch_updated_at() FROM PUBLIC, anon, authenticated;
