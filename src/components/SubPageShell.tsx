import { useEffect, useState } from "react";
import { Navbar, Footer, FloatingSocial } from "@/routes/index";
import type { Lang } from "@/lib/i18n";

type Theme = "dark" | "light";

export function SubPageShell({ children }: { children: (lang: Lang) => React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("dark");
  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("light", theme === "light");
    el.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="relative min-h-screen antialiased" style={{ color: "var(--fg)" }}>
      <div className="cinematic-bg" />
      <div className="aurora" />
      <div className="cinematic-grid" />
      <Navbar
        lang={lang}
        theme={theme}
        onToggle={() => setLang((l) => (l === "ar" ? "en" : "ar"))}
        onTheme={() => setTheme((th) => (th === "dark" ? "light" : "dark"))}
      />
      <main className="pt-20 sm:pt-24 lg:pt-28">{children(lang)}</main>
      <Footer lang={lang} />
      <FloatingSocial isRTL={isRTL} />
    </div>
  );
}
