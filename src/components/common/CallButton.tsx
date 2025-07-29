'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { useLocale } from '@/hooks/useLocale';

export const CallButton: React.FC = () => {
    const { t } = useLocale();

    const handleCallClick = () => {
        window.open('tel:16910');
    };

    return (
        <motion.button
            onClick={handleCallClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors"
            aria-label={t('contact.call') as string}
        >
            <FiPhone size={20} />
        </motion.button>
    );
};
