import { useEffect, useState } from "react";
import { Languages, Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";
type Lang = "ar" | "en";

const THEME_KEY = "global-theme";
const LANG_KEY = "global-lang";

export function GlobalControls() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("ar");

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = (localStorage.getItem(THEME_KEY) as Theme | null) ?? "dark";
      const savedLang = (localStorage.getItem(LANG_KEY) as Lang | null) ?? "ar";
      setTheme(savedTheme);
      setLang(savedLang);
    } catch { /* noop */ }
    setMounted(true);
  }, []);

  // Apply theme + lang to html element
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.classList.toggle("dark", theme === "dark");
    html.classList.toggle("light", theme === "light");
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* noop */ }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* noop */ }
    // Notify pages with local lang state
    window.dispatchEvent(new CustomEvent("global-lang-change", { detail: lang }));
  }, [lang, mounted]);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-[5.5rem] z-[60] flex items-center gap-1.5 rounded-full border border-[#d7aa52]/40 bg-[#04101f]/75 px-1.5 py-1.5 shadow-lg shadow-black/30 backdrop-blur-md"
      style={{
        // Pin to inline-end so it sits on the natural edge in both LTR and RTL
        insetInlineEnd: "0.75rem",
      }}
      aria-label="Global controls"
    >
      <button
        type="button"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-[#d7aa52]/15"
        aria-label="Toggle theme"
        title="Theme"
      >
        {theme === "dark"
          ? <Sun className="size-4 text-[#d7aa52]" />
          : <Moon className="size-4 text-[#d7aa52]" />}
      </button>
      <button
        type="button"
        onClick={() => setLang((l) => (l === "ar" ? "en" : "ar"))}
        className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-bold transition-colors hover:bg-[#d7aa52]/15"
        style={{ color: "var(--fg)" }}
        aria-label="Toggle language"
        title="Language"
      >
        <Languages className="size-3.5 text-[#d7aa52]" />
        <span>{lang === "ar" ? "EN" : "AR"}</span>
      </button>
    </div>
  );
}
