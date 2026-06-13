import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Home, Languages, BookMarked, Video, FileText } from "lucide-react";
import { type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/library")({
  head: () => {
    const url = "https://acc-ahmedelmadni.lovable.app/library";
    return {
      meta: [
        { title: "المكتبة المحاسبية | Accounting Library — Ahmed Elmadani" },
        {
          name: "description",
          content:
            "مكتبة احترافية لأفضل كورسات وكتب ومقالات المحاسبة من مصادر موثوقة - IFRS، CMA، CPA، SOCPA، VAT والمزيد.",
        },
        { property: "og:title", content: "المكتبة المحاسبية | Accounting Library" },
        {
          property: "og:description",
          content: "A curated library of the best accounting courses, books & articles.",
        },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Accounting Library — Ahmed Elmadani" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: LibraryLayout,
});

function LibraryLayout() {
  const [lang, setLang] = useState<Lang>("ar");
  const isRTL = lang === "ar";
  const matches = useChildMatches();
  const path = matches[matches.length - 1]?.pathname ?? "/library";
  const current: "courses" | "books" | "articles" =
    path.includes("/library/books")
      ? "books"
      : path.includes("/library/articles")
        ? "articles"
        : "courses";

  const tabs: { id: "courses" | "books" | "articles"; ar: string; en: string; Icon: typeof Video; to: "/library/courses" | "/library/books" | "/library/articles" }[] = [
    { id: "courses", ar: "الكورسات", en: "Courses", Icon: Video, to: "/library/courses" },
    { id: "books", ar: "الكتب", en: "Books", Icon: BookMarked, to: "/library/books" },
    { id: "articles", ar: "المقالات", en: "Articles", Icon: FileText, to: "/library/articles" },
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#04101f] text-white">
      <header className="sticky top-0 z-40 border-b border-[#d7aa52]/20 bg-[#04101f]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15"
          >
            <ArrowLeft className="size-3.5" />
            {lang === "ar" ? "الرئيسية" : "Home"}
            <Home className="size-3.5" />
          </Link>
          <div className="text-sm font-extrabold tracking-wide text-[#f3d28a]">
            {lang === "ar" ? "المكتبة المحاسبية" : "Accounting Library"}
          </div>
          <button
            onClick={() => setLang((l) => (l === "ar" ? "en" : "ar"))}
            className="inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/40 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[#f3d28a] transition-all hover:bg-[#d7aa52]/15"
            aria-label="Toggle language"
          >
            <Languages className="size-3.5" />
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </header>

      {/* Top tabs: Courses / Books / Articles */}
      <div className="mx-auto mt-6 w-[92%] max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#d7aa52]/25 bg-white/[0.03] p-1.5 backdrop-blur-xl sm:w-fit sm:mx-auto">
          {tabs.map(({ id, ar, en, Icon, to }) => {
            const active = current === id;
            return (
              <Link
                key={id}
                to={to}
                className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs font-bold transition-all ${
                  active
                    ? "bg-gradient-to-br from-[#f3d28a] to-[#b8862e] text-[#04101f] shadow-lg shadow-[#d7aa52]/30"
                    : "text-white/70 hover:text-[#f3d28a]"
                }`}
              >
                <Icon className="size-3.5" />
                {lang === "ar" ? ar : en}
              </Link>
            );
          })}
        </div>
      </div>

      <Outlet />
    </div>
  );
}

// Lang context for child routes (read via window) — fall back to AR
export function useLibraryLang(): Lang {
  if (typeof document === "undefined") return "ar";
  return (document.documentElement.dir === "ltr" ? "en" : "ar") as Lang;
}
