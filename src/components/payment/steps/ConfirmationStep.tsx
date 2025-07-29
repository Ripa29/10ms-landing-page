'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { Button } from '../../ui/Button';
import { useLocale } from '@/hooks/useLocale';

interface ConfirmationStepProps {
    courseTitle: string;
    price: number;
    formatPrice: (price: number) => string;
    onClose: () => void;
}

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
                                                                      courseTitle,
                                                                      price,
                                                                      formatPrice,
                                                                      onClose,
                                                                  }) => {
    const { t } = useLocale();

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg text-center space-y-6">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
            >
                <FiCheckCircle size={40} className="text-green-600" />
            </motion.div>

            <div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">{t('confirmation.heading')}</h3>
                <p className="text-gray-600">{t('confirmation.description')}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-left shadow-inner">
                <h4 className="font-semibold text-gray-900 mb-3 border-b pb-2">{t('confirmation.coursedetails')}</h4>
                <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>{t('confirmation.course')}</strong> {courseTitle}</p>
                    <p><strong>{t('confirmation.pricing')}</strong> {formatPrice(price)}</p>
                    <p><strong>{t('confirmation.access')}</strong> {t('confirmation.duration')}</p>
                </div>
            </div>

            <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700 text-white">
                {t('confirmation.start')}
            </Button>
        </div>
    );
};
