import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Home, Languages } from "lucide-react";
import { Library } from "@/components/Library";
import { t, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/library")({
  head: () => {
    const url = "https://acc-ahmedelmadni.lovable.app/library";
    const courseSchemas = t.library.courses.slice(0, 12).map((c) => ({
      "@context": "https://schema.org",
      "@type": "Course",
      name: c.ar,
      alternateName: c.en,
      description: c.desc.ar,
      inLanguage: c.lang === "ar" ? "ar" : "en",
      educationalLevel: c.level,
      isAccessibleForFree: c.price === "free",
      provider: {
        "@type": "Person",
        name: "Ahmed Elmadani",
        url: "https://acc-ahmedelmadni.lovable.app/",
      },
      offers: {
        "@type": "Offer",
        price: c.price === "free" ? "0" : undefined,
        priceCurrency: "SAR",
        category: c.price === "free" ? "Free" : "Paid",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: `PT${c.hours}H`,
      },
    }));
    return {
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
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Accounting Library — Ahmed Elmadani" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://acc-ahmedelmadni.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "المكتبة", item: url },
            ],
          }),
        },
        ...courseSchemas.map((s) => ({
          type: "application/ld+json",
          children: JSON.stringify(s),
        })),
      ],
    };
  },
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
