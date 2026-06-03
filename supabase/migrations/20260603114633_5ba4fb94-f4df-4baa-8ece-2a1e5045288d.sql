
CREATE POLICY "kb_images_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'kb-images');

CREATE POLICY "kb_images_admin_write" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'kb-images' AND public.has_role(auth.uid(),'admin'));

CREATE POLICY "kb_images_admin_update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'kb-images' AND public.has_role(auth.uid(),'admin'));

CREATE POLICY "kb_images_admin_delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'kb-images' AND public.has_role(auth.uid(),'admin'));
