'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocale } from '@/hooks/useLocale';

export const WhatsAppChat: React.FC = () => {
    const { t } = useLocale();

    const handleWhatsAppClick = () => {
        const whatsappNumber = t('contact.whatsappNumber') as string;
        const message = encodeURIComponent(t('contact.whatsappMessage') as string);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <motion.button
            onClick={handleWhatsAppClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors"
            aria-label={t('contact.whatsapp') as string}
        >
            <FaWhatsapp size={20} />
        </motion.button>
    );
};
