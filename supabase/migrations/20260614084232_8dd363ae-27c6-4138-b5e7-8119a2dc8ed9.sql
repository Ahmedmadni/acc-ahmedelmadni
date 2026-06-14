
-- Tighten library-pdfs storage: only admins or free items readable
DROP POLICY IF EXISTS library_pdfs_read_authenticated ON storage.objects;

CREATE POLICY library_pdfs_read_free_or_admin ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'library-pdfs'
  AND (
    has_role(auth.uid(), 'admin'::app_role)
    OR EXISTS (
      SELECT 1 FROM public.library_items li
      WHERE li.pdf_path = storage.objects.name
        AND li.is_published = true
        AND li.is_free = true
    )
  )
);

-- Explicit admin-only write policies on kb_generation_jobs
CREATE POLICY jobs_admin_insert ON public.kb_generation_jobs
FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY jobs_admin_update ON public.kb_generation_jobs
FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY jobs_admin_delete ON public.kb_generation_jobs
FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

-- Explicit admin-only write policies on kb_publishing_calendar
CREATE POLICY calendar_admin_insert ON public.kb_publishing_calendar
FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY calendar_admin_update ON public.kb_publishing_calendar
FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY calendar_admin_delete ON public.kb_publishing_calendar
FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

-- Lock down SECURITY DEFINER trigger functions from anon/authenticated execution
REVOKE EXECUTE ON FUNCTION public.assign_primary_admin() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.kb_touch_updated_at() FROM PUBLIC, anon, authenticated;
