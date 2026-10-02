import { useSiteLang } from "@/lib/use-site-lang";
import { Suspense, lazy, useEffect, useState } from "react";
import { Navbar, Footer, FloatingSocial } from "@/routes/index";
import type { Lang } from "@/lib/i18n";

const AIAssistant = lazy(() =>
  import("@/components/AIAssistant").then((m) => ({ default: m.AIAssistant })),
);

export function SubPageShell({ children }: { children: (lang: Lang) => React.ReactNode }) {
  const [lang, setLang] = useSiteLang();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    // EFL sub-route foundation: a calm deep-charcoal base (matches the homepage
    // body / footer #151412) replaces the retired navy cinematic-bg + animated
    // aurora + cinematic-grid. No infinite motion, no glow. Individual route
    // identities (About cinematic, Services, Request) sit on top of this base.
    <div className="relative min-h-screen bg-[#151412] antialiased" style={{ color: "var(--fg)" }}>
      <Navbar lang={lang} onToggle={() => setLang((l) => (l === "ar" ? "en" : "ar"))} />
      <main className="pt-20 sm:pt-24 lg:pt-28">{children(lang)}</main>
      <Footer lang={lang} />
      <FloatingSocial isRTL={isRTL} />
      <Suspense fallback={null}>
        <AIAssistant lang={lang} />
      </Suspense>
    </div>
  );
}
