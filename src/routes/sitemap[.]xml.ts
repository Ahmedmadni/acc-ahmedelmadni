import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { TOOLS } from "@/lib/tools-registry";

const BASE_URL = "https://acc-ahmedelmadni.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/library", changefreq: "weekly", priority: "0.8" },
          { path: "/knowledge", changefreq: "daily", priority: "0.9" },
          { path: "/tools", changefreq: "weekly", priority: "0.9" },
        ];

        for (const tool of TOOLS) {
          entries.push({
            path: `/tools/${tool.id}`,
            changefreq: "monthly",
            priority: tool.official ? "0.9" : "0.7",
          });
        }

        // Dynamic knowledge content
        try {
          const supabaseUrl =
            process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
          const supabaseKey =
            process.env.SUPABASE_PUBLISHABLE_KEY ??
            process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
          if (supabaseUrl && supabaseKey) {
            const client = createClient(supabaseUrl, supabaseKey);

            const { data: cats } = await client
              .from("kb_categories")
              .select("slug");
            for (const c of cats ?? []) {
              entries.push({
                path: `/knowledge/${c.slug}`,
                changefreq: "weekly",
                priority: "0.7",
              });
            }

            const { data: articles } = await client
              .from("kb_articles")
              .select("slug, updated_at, published_at, kb_categories(slug)")
              .order("published_at", { ascending: false });
            for (const a of (articles ?? []) as Array<{
              slug: string;
              updated_at?: string | null;
              published_at?: string | null;
              kb_categories: { slug: string } | null;
            }>) {
              const catSlug = a.kb_categories?.slug;
              if (!catSlug || !a.slug) continue;
              entries.push({
                path: `/knowledge/${catSlug}/${a.slug}`,
                lastmod: (a.updated_at ?? a.published_at ?? undefined)?.slice(
                  0,
                  10,
                ),
                changefreq: "monthly",
                priority: "0.6",
              });
            }
          }
        } catch (err) {
          console.error("sitemap dynamic fetch failed:", err);
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq
              ? `    <changefreq>${e.changefreq}</changefreq>`
              : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
