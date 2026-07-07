-- The kb-images and library-pdfs storage buckets already exist in production
-- (created out-of-band via the Supabase/Lovable dashboard) — only their RLS
-- policies were ever migrated (20260603114633, 20260613023641, 20260614084232).
-- This documents their existence as code so a fresh environment provisioned
-- purely from migrations ends up with the buckets the existing RLS policies
-- already assume. ON CONFLICT DO NOTHING makes this a no-op where the
-- buckets already exist.
INSERT INTO storage.buckets (id, name, public)
VALUES
  ('kb-images', 'kb-images', true),
  ('library-pdfs', 'library-pdfs', false)
ON CONFLICT (id) DO NOTHING;
