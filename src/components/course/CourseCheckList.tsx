'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Checklist } from '@/types/course';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useLocale } from '@/hooks/useLocale';
import Image from 'next/image';
import 'swiper/css';

interface CourseCheckListProps {
    checklist: Checklist[];
}

export const CourseCheckList: React.FC<CourseCheckListProps> = ({ checklist }) => {
    const { t } = useLocale();

    return (
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {t('course.whatYouWillGet')}
                    </h2>
                </motion.div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={26}
                    slidesPerView="auto"
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    speed={600}
                    grabCursor={true}
                >
                    {checklist.map((item, index) => (
                        <SwiperSlide key={item.id} className="!w-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 max-w-sm"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 relative flex-shrink-0">
                                    <Image
                                        src={item.icon}
                                        alt="checklist icon"
                                        fill
                                        className="object-contain"
                                        sizes="48px"
                                        priority
                                    />
                                </div>

                                {/* Text */}
                                <div className="text-gray-800">
                                    <p className="text-base font-medium leading-snug break-words w-22">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
