import { useCallback, useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

export type StudySection = "cma" | "standards";
export type StudyLanguagePreferences = Record<StudySection, Lang>;

const LANGUAGE_KEYS: Record<StudySection, string> = {
  cma: "accounting-library-cma-language-v1",
  standards: "accounting-library-ifrs-language-v1",
};

/** No global website-language preference is consulted: both curricula default to English. */
export function studySectionForPath(pathname: string): StudySection | null {
  if (/^\/library\/cma(?:\/|$)/.test(pathname)) return "cma";
  if (/^\/library\/standards(?:\/|$)/.test(pathname)) return "standards";
  return null;
}

export function studyLanguageStorageKey(section: StudySection): string {
  return LANGUAGE_KEYS[section];
}

export function readStudyLanguage(
  section: StudySection,
  getItem: (key: string) => string | null,
): Lang {
  try {
    return getItem(LANGUAGE_KEYS[section]) === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

const DEFAULT_PREFERENCES: StudyLanguagePreferences = { cma: "en", standards: "en" };

/**
 * These two study languages are independent of the portfolio's global language.
 * Each standard/CMA choice persists in this browser; no login or database.
 * Initial English state is the same for server rendering and hydration.
 */
export function useLibraryStudyLanguage(): [
  StudyLanguagePreferences,
  (section: StudySection, next: Lang) => void,
] {
  const [preferences, setPreferences] = useState<StudyLanguagePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const read = (key: string) => window.localStorage.getItem(key);
    setPreferences({
      cma: readStudyLanguage("cma", read),
      standards: readStudyLanguage("standards", read),
    });
    const onStorage = (event: StorageEvent) => {
      if (event.key && !Object.values(LANGUAGE_KEYS).includes(event.key)) return;
      setPreferences({
        cma: readStudyLanguage("cma", read),
        standards: readStudyLanguage("standards", read),
      });
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setStudyLanguage = useCallback((section: StudySection, next: Lang) => {
    if (next !== "en" && next !== "ar") return;
    setPreferences((previous) => ({ ...previous, [section]: next }));
    try {
      window.localStorage.setItem(LANGUAGE_KEYS[section], next);
    } catch {
      // Private browsing or storage limits must not block manual switching.
    }
  }, []);

  return [preferences, setStudyLanguage];
}
