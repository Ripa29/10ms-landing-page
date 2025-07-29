'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiClock } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { useLocale } from '@/hooks/useLocale';
import { COURSE_PRICE, COURSE_DISCOUNT_PRICE } from '@/lib/constants';

interface CourseCTAProps {
    onEnroll: () => void;
    ctaText: string;
}

export const CourseCTA: React.FC<CourseCTAProps> = ({ onEnroll, ctaText }) => {
    const { t, locale } = useLocale();

    const formatPrice = (price: number) => {
        return locale === 'bn' ? `৳${price}` : `৳${price}`;
    };

    const benefits = t('courseCTA.benefits') as unknown as string[];

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const discountDeadline = useMemo(() => {
        const now = new Date();
        return now.getTime() + 5 * 24 * 60 * 60 * 1000;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = discountDeadline - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [discountDeadline]);

    return (
        <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('courseCTA.heading')}
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        {t('courseCTA.description')}
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-center space-x-2 p-3 bg-green-50 rounded-lg"
                            >
                                <FiCheck size={16} className="text-green-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-green-800">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Price and Discount */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 mb-6">
                        <div className="text-center line-through text-gray-400">
                            <div className="text-2xl font-bold">{formatPrice(COURSE_PRICE)}</div>
                            <div className="text-sm">{t('courseCTA.priceLabel')}</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-extrabold text-primary-600">
                                {formatPrice(COURSE_DISCOUNT_PRICE)}
                            </div>
                            <div className="text-sm text-primary-700 font-semibold">
                                {t('courseCTA.discountLabel')}
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                        size="lg"
                        onClick={onEnroll}
                        className="w-full sm:w-auto px-8 py-4 text-lg"
                    >
                        {ctaText}
                    </Button>

                    {/* Countdown */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center space-y-2 mt-6 text-sm text-gray-500"
                    >
                        <div className="flex items-center space-x-2">
                            <FiClock size={16} />
                            <span>{t('courseCTA.urgency')}</span>
                        </div>
                        <div className="flex space-x-4 font-mono text-lg text-red-600 font-semibold">
                            <div>
                                <span>{timeLeft.days}</span> <small>Days</small>
                            </div>
                            <div>
                                <span>{timeLeft.hours.toString().padStart(2, '0')}</span> <small>Hrs</small>
                            </div>
                            <div>
                                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span> <small>Min</small>
                            </div>
                            <div>
                                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span> <small>Sec</small>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
