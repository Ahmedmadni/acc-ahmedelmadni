DROP POLICY IF EXISTS internal_links_read_all ON public.kb_internal_links;
CREATE POLICY internal_links_admin_read ON public.kb_internal_links
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));