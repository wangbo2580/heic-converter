// lib/i18n/index.ts

export type { Locale, Translations } from './types';
export { en } from './en';
export { zh } from './zh';

import { en } from './en';
import { zh } from './zh';
import type { Locale, Translations } from './types';

export const translations: Record<Locale, Translations> = {
  en,
  zh,
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};

export const defaultLocale: Locale = 'en';
