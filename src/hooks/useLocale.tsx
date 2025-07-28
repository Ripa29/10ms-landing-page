'use client';
import { useState, createContext, useContext, ReactNode } from 'react';
import { locales, Locale, defaultLocale } from '@/i18n/config';

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>(defaultLocale);

    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = locales[locale];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale, t }}>
    {children}
    </LocaleContext.Provider>
);
}

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within LocaleProvider');
    }
    return context;
};