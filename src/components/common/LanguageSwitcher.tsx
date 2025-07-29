'use client';
import React from 'react';
import { useLocale } from '@/hooks/useLocale';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useLocale();

    return (
        <div className="flex items-center space-x-2">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLocale('bn')}
                className={`px-3 py-1 rounded ${
                    locale === 'bn' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
                বাং
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLocale('en')}
                className={`px-3 py-1 rounded ${
                    locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
                EN
            </motion.button>
        </div>
    );
};