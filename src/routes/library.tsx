import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Home, Languages, BookMarked, Video, FileText, Maximize2, Minimize2 } from "lucide-react";
import { type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/library")({
  head: () => {
    const url = "https://ahmedelmadni.com/library";
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

const LibLangCtx = createContext<Lang>("ar");
export function useLibLang(): Lang {
  return useContext(LibLangCtx);
}

const FocusCtx = createContext<boolean>(false);
export function useLibFocus(): boolean {
  return useContext(FocusCtx);
}

function LibraryLayout() {
  const [lang, setLang] = useState<Lang>("ar");
  const [focus, setFocus] = useState(false);
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
    <LibLangCtx.Provider value={lang}>
      <FocusCtx.Provider value={focus}>
        <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#04101f] text-white">
          <AnimatePresence initial={false}>
            {!focus && (
              <motion.header
                key="lib-header"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className="sticky top-0 z-40 border-b border-[#d7aa52]/20 bg-[#04101f]/85 backdrop-blur-xl"
              >
                <div className="w-full px-4 sm:px-8 lg:px-16 flex h-16  items-center justify-between">
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
              </motion.header>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {!focus && (
              <motion.div
                key="lib-tabs"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full px-4 sm:px-8 lg:px-16 mt-6 "
              >
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
              </motion.div>
            )}
          </AnimatePresence>

          <Outlet />

          <button
            type="button"
            onClick={() => setFocus((f) => !f)}
            aria-pressed={focus}
            title={lang === "ar" ? (focus ? "إنهاء وضع التركيز" : "وضع التركيز") : focus ? "Exit Focus" : "Focus Mode"}
            className="fixed bottom-6 left-6 z-[60] inline-flex items-center gap-2 rounded-full border border-[#d7aa52]/45 bg-[#04101f]/90 px-4 py-2.5 text-xs font-bold text-[#f3d28a] shadow-xl shadow-black/40 backdrop-blur-xl transition-all hover:scale-105 hover:bg-[#d7aa52]/15"
          >
            {focus ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
            <span className="hidden sm:inline">
              {lang === "ar" ? (focus ? "إنهاء التركيز" : "وضع التركيز") : focus ? "Exit Focus" : "Focus Mode"}
            </span>
          </button>
        </div>
      </FocusCtx.Provider>
    </LibLangCtx.Provider>
  );
}
