'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { PAYMENT_METHODS, COURSE_PRICE } from '@/lib/constants';
import { useLocale } from '@/hooks/useLocale';

interface PaymentStepProps {
    selectedMethod: typeof PAYMENT_METHODS[0] | null;
    selectPaymentMethod: (method: typeof PAYMENT_METHODS[0]) => void;
    onPay: () => void;
    processing: boolean;
    formatPrice: (price: number) => string;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({
                                                            selectedMethod,
                                                            selectPaymentMethod,
                                                            onPay,
                                                            processing,
                                                            formatPrice,
                                                        }) => {
    const { t } = useLocale();

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{t('payment.paymentoption')}</h3>
                <div className="text-2xl font-bold text-primary-600">
                    {formatPrice(COURSE_PRICE)}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PAYMENT_METHODS.map((method) => (
                    <motion.div
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectPaymentMethod(method)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedMethod?.id === method.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <div className="text-center">
                            <div className="w-auto h-auto mx-auto mb-3">
                                <img
                                    src={method.icon}
                                    alt={method.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Button
                onClick={onPay}
                className="w-full"
                disabled={!selectedMethod}
                loading={processing}
            >
                {t('payment.pay')}
            </Button>
        </div>
    );
};
