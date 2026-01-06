// contexts/LanguageContext.tsx

'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, defaultLocale, type Locale, type Translations } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred-locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  // Load saved locale on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLocaleState('zh');
      }
    }
    setMounted(true);
  }, []);

  // Save locale to localStorage when it changes
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    // Update HTML lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  // Update HTML lang attribute on mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const value: LanguageContextType = {
    locale,
    t: translations[locale],
    setLocale,
  };

  // Prevent hydration mismatch by rendering with default locale on server
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: defaultLocale, t: translations[defaultLocale], setLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Utility hook to get just the translations
export function useTranslations() {
  const { t } = useLanguage();
  return t;
}
