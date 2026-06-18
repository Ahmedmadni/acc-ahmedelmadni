import { useEffect, useState } from "react";

type Theme = "dark" | "light";
type Lang = "ar" | "en";

const THEME_KEY = "global-theme";
const LANG_KEY = "global-lang";

export function GlobalControls() {
  const [mounted, setMounted] = useState(false);
  const [theme] = useState<Theme>("dark");
  const [lang] = useState<Lang>("ar");

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = (localStorage.getItem(THEME_KEY) as Theme | null) ?? "dark";
      const savedLang = (localStorage.getItem(LANG_KEY) as Lang | null) ?? "ar";
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      document.documentElement.classList.toggle("light", savedTheme === "light");
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    } catch {
      /* noop */
    }
    setMounted(true);
  }, []);

  // No visual output anymore — the header's own controls handle the UI now
  return null;
}
