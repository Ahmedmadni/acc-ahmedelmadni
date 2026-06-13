
-- Track uploaded PDF storage path on library items
ALTER TABLE public.library_items
  ADD COLUMN IF NOT EXISTS pdf_path text;

-- Storage policies on library-pdfs bucket
-- Admins can do everything
CREATE POLICY "library_pdfs_admin_all"
  ON storage.objects
  FOR ALL
  TO authenticated
  USING (bucket_id = 'library-pdfs' AND public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (bucket_id = 'library-pdfs' AND public.has_role(auth.uid(), 'admin'::public.app_role));

-- Service role bypasses RLS, but make read explicit for any authenticated requests too
CREATE POLICY "library_pdfs_read_authenticated"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (bucket_id = 'library-pdfs');
