GRANT SELECT ON public.kb_articles TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.kb_articles TO authenticated;
GRANT ALL ON public.kb_articles TO service_role;

GRANT SELECT ON public.kb_categories TO anon, authenticated;
GRANT ALL ON public.kb_categories TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.kb_ratings TO authenticated;
GRANT ALL ON public.kb_ratings TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.kb_bookmarks TO authenticated;
GRANT ALL ON public.kb_bookmarks TO service_role;