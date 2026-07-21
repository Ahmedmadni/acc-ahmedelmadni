import { useEffect } from "react";

type Lang = "ar" | "en";

const LANG_KEY = "global-lang";

export function GlobalControls() {
  // Language-only initializer. The site uses one permanent visual system
  // (Executive Financial Luxury) with no user-facing light/dark toggle, so
  // the `dark` class is applied statically in the root shell; here we only
  // sync the saved language and clear any stale `light` class from before
  // the toggle was removed.
  useEffect(() => {
    try {
      const savedLang = (localStorage.getItem(LANG_KEY) as Lang | null) ?? "ar";
      const el = document.documentElement;
      el.lang = savedLang;
      el.dir = savedLang === "ar" ? "rtl" : "ltr";
      el.classList.add("dark");
      el.classList.remove("light");
    } catch {
      /* noop */
    }
  }, []);

  return null;
}
