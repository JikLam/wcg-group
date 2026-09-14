"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import type { Lang } from "../services/service-data";

const STORAGE_KEY = "wcg-language";
const documentLanguages: Record<Lang, string> = {
  tc: "zh-Hant",
  sc: "zh-Hans",
  en: "en",
};

function isLanguage(value: string | null): value is Lang {
  return value === "tc" || value === "sc" || value === "en";
}

export function usePersistedLanguage() {
  const [lang, setLangState] = useState<Lang>("tc");

  useLayoutEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(savedLanguage) && savedLanguage !== lang) {
      setLangState(savedLanguage);
      return;
    }

    document.documentElement.lang = documentLanguages[lang];
    document.documentElement.classList.remove("wcg-language-loading");
  }, [lang]);

  const setLang = useCallback((nextLanguage: Lang) => {
    setLangState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = documentLanguages[nextLanguage];
  }, []);

  return [lang, setLang] as const;
}
