import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * A Supabase client for reading *public* content (published certifications,
 * articles, and friends) that deliberately carries no user session.
 *
 * The shared client in `./client` persists a session in `localStorage` and
 * refreshes it automatically. That's correct for the admin area, but it makes
 * public content depend on auth state: once a browser has signed into
 * /admin, every subsequent PostgREST request from that browser carries the
 * stored JWT instead of the anon key. If that token has expired and the
 * refresh fails, the read comes back 401 and the section silently falls back
 * to its hardcoded placeholder list — while a browser that never signed in
 * keeps working perfectly. That asymmetry looks like "it works in one browser
 * but not the other" and is impossible to reason about from the UI.
 *
 * This client opts out of that entirely: no storage, no session persistence,
 * no auto-refresh. Every request is anonymous and hits the public-read RLS
 * policies, so public content renders identically regardless of whether
 * anyone is signed in, and regardless of the state of a stored token.
 */
function createPublicClient() {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY =
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    const missing = [
      ...(!SUPABASE_URL ? ["SUPABASE_URL"] : []),
      ...(!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []),
    ];
    throw new Error(`Missing Supabase environment variable(s): ${missing.join(", ")}.`);
  }

  return createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

let _client: ReturnType<typeof createPublicClient> | undefined;

/** Anonymous, session-free Supabase client for public content reads. */
export const supabasePublic = new Proxy({} as ReturnType<typeof createPublicClient>, {
  get(_, prop, receiver) {
    if (!_client) _client = createPublicClient();
    return Reflect.get(_client, prop, receiver);
  },
});
