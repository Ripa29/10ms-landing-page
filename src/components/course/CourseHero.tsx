'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CourseData } from '@/types/course';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';
import { COURSE_PRICE } from '@/lib/constants';

interface CourseHeroProps {
    courseData: CourseData;
    onEnroll: () => void;
}

export const CourseHero: React.FC<CourseHeroProps> = ({ courseData, onEnroll }) => {
    const { t,locale  } = useLocale();

    const formatPrice = (price: number) => {
        return locale === 'bn' ? `৳${price}` : `৳${price}`;
    };
    return (
        <section className="bg-gradient-to-br from-blue-100 via-blue-400 to-indigo-700 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            {courseData.title}
                        </h1>

                        <div
                            className="text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: courseData.description }}
                        />

                        <div className="flex items-center space-x-4 mb-8">
                            <div className="text-3xl font-bold text-black">
                                {formatPrice(COURSE_PRICE)}
                            </div>
                            <Button
                                onClick={onEnroll}
                                size="lg"
                                className="bg-green-600 hover:bg-gray-700 px-8 py-4 text-lg font-semibold"
                            >
                                {courseData.cta_text.name}
                            </Button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {courseData.checklist.slice(0, 4).map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index }}
                                    className="flex items-center space-x-3"
                                >
                                    <img src={item.icon} alt="" className="w-6 h-6" />
                                    <span className="text-sm text-blue-100">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Hero Image/Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                            {courseData.media[0] && (
                                <img
                                    src={courseData.media[0].thumbnail_url || courseData.media[0].resource_value}
                                    alt={courseData.title}
                                    className="w-full rounded-lg shadow-2xl"
                                />
                            )}

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
                            >
                                ⭐ Best Seller
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full font-semibold"
                            >
                                ✓ Certified
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};