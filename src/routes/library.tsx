import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Home, Languages } from "lucide-react";
import { Library } from "@/components/Library";
import type { Lang } from "@/lib/i18n";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "المكتبة المحاسبية | Accounting Library — Ahmed Elmadani" },
      {
        name: "description",
        content:
          "مكتبة احترافية لأفضل كورسات وشهادات المحاسبة من مصادر موثوقة - IFRS، CMA، CPA، SOCPA، VAT والمزيد.",
      },
      { property: "og:title", content: "المكتبة المحاسبية | Accounting Library" },
      {
        property: "og:description",
        content: "A curated library of the best accounting courses & certifications.",
      },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const isRTL = lang === "ar";

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

      <Library lang={lang} />
    </div>
  );
}
