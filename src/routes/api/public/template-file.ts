import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

/**
 * Downloads one published accounting template.
 *
 * The `template-files` bucket is private and carries no storage read rule that
 * is open to callers, so a visitor never reaches the files directly. This
 * endpoint does the check the bucket used to rely on — the file must belong to
 * a template row that is actually published — and only then hands back a
 * short-lived signed link minted with privileged access.
 */
const BUCKET = "template-files";
const MARKER = `/${BUCKET}/`;
const LINK_TTL_SECONDS = 60;

/** A single object name, never a path that walks out of the bucket. */
const SAFE_NAME = /^[^/\s\\]{1,200}\.[A-Za-z0-9]{2,5}$/;

function objectPath(raw: string): string {
  const value = raw.trim();
  const at = value.indexOf(MARKER);
  const candidate = at >= 0 ? value.slice(at + MARKER.length) : value;
  try {
    return decodeURIComponent(candidate).replace(/^\/+/, "");
  } catch {
    return "";
  }
}

export const Route = createFileRoute("/api/public/template-file")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const path = objectPath(url.searchParams.get("path") ?? "");

        if (!path || path.includes("..") || !SAFE_NAME.test(path)) {
          return new Response("Not found", { status: 404 });
        }

        const supabaseUrl = process.env.SUPABASE_URL;
        const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
        if (!supabaseUrl || !publishableKey) {
          return new Response("Not found", { status: 404 });
        }

        // Published-only visibility is decided by the public policy on the
        // table, so this read stays inside row-level security.
        const publicClient = createClient(supabaseUrl, publishableKey, {
          auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
        });

        const { data } = await publicClient
          .from("accounting_templates")
          .select("file_url")
          .eq("is_published", true);

        const isPublished = (data ?? []).some(
          (row) => row.file_url && objectPath(row.file_url) === path,
        );
        if (!isPublished) return new Response("Not found", { status: 404 });

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: signed, error } = await supabaseAdmin.storage
          .from(BUCKET)
          .createSignedUrl(path, LINK_TTL_SECONDS, { download: path });

        if (error || !signed?.signedUrl) return new Response("Not found", { status: 404 });

        return Response.redirect(signed.signedUrl, 302);
      },
    },
  },
});
