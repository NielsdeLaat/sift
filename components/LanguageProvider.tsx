'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Lang, type Translations } from '@/lib/i18n';

const LANG_KEY = 'tt_lang';
const DEFAULT_LANG: Lang = 'nl';

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: translations[DEFAULT_LANG],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY) as Lang | null;
    if (stored === 'nl' || stored === 'en') setLangState(stored);
    document.documentElement.lang = stored ?? DEFAULT_LANG;
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
    document.documentElement.lang = l;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageCtx {
  return useContext(LanguageContext);
}
