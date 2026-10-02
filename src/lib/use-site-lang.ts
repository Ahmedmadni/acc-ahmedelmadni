import { useCallback, useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

const KEY = "global-lang";
const EVT = "site-lang-change";

/** Site-wide language shared across every page and persisted between visits. */
export function useSiteLang(): [Lang, (next: Lang | ((l: Lang) => Lang)) => void] {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "ar") setLangState(saved);
    } catch {
      /* noop */
    }
    const onChange = (e: Event) => {
      const v = (e as CustomEvent<Lang>).detail;
      if (v === "ar" || v === "en") setLangState(v);
    };
    window.addEventListener(EVT, onChange);
    return () => window.removeEventListener(EVT, onChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang | ((l: Lang) => Lang)) => {
    setLangState((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      try {
        localStorage.setItem(KEY, value);
      } catch {
        /* noop */
      }
      queueMicrotask(() => window.dispatchEvent(new CustomEvent(EVT, { detail: value })));
      return value;
    });
  }, []);

  return [lang, setLang];
}
