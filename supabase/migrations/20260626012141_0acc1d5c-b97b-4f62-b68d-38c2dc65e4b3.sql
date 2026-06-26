DROP POLICY IF EXISTS ratings_read_all ON public.kb_ratings;
CREATE POLICY ratings_read_own ON public.kb_ratings FOR SELECT TO authenticated USING (auth.uid() = user_id);
REVOKE SELECT ON public.kb_ratings FROM anon;