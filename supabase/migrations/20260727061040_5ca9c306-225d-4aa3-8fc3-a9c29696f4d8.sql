DROP POLICY IF EXISTS "template-files public read" ON storage.objects;

CREATE POLICY "template_files_read_published_or_admin"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'template-files'
  AND (
    public.has_role(auth.uid(), 'admin'::public.app_role)
    OR EXISTS (
      SELECT 1
      FROM public.accounting_templates t
      WHERE t.file_url = storage.objects.name
        AND t.is_published = true
    )
  )
);