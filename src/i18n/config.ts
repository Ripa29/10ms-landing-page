import en from '@/i18n/locales/en.json';
import bn from '@/i18n/locales/bn.json';

export const locales = { en, bn };
export type Locale = keyof typeof locales;
export const defaultLocale: Locale = 'en';