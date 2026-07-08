// Server-side Supabase client using the publishable (anon) key — respects
// RLS as an unauthenticated visitor would. Distinct from client.server.ts
// (service role, bypasses RLS): use this one for server functions that must
// serve public/anonymous reads without a caller JWT (no requireSupabaseAuth
// middleware in play), so RLS policies still apply exactly as they would in
// the browser.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

let _client: ReturnType<typeof build> | undefined;

function build() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key)
    throw new Error("Missing Supabase env (SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY)");
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

export function getServerAnonClient() {
  if (!_client) _client = build();
  return _client;
}
