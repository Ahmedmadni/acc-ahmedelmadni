-- The 20260626012141 migration tightened kb_ratings SELECT to "own row only"
-- (correctly, for individual-row privacy), but the article page still needs
-- a public average/count across ALL ratings for an article. A SECURITY
-- DEFINER function exposes only the aggregate, never individual rows.
CREATE OR REPLACE FUNCTION public.get_article_rating_summary(p_article_id uuid)
RETURNS TABLE (avg_rating numeric, rating_count integer)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COALESCE(AVG(rating), 0)::numeric AS avg_rating,
    COUNT(*)::integer AS rating_count
  FROM public.kb_ratings
  WHERE article_id = p_article_id;
$$;

GRANT EXECUTE ON FUNCTION public.get_article_rating_summary(uuid) TO anon, authenticated;
