'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from '@/types/course';

interface CourseFeaturesProps {
    features: Feature[];
    sectionName: string;
}

export const CourseFeatures: React.FC<CourseFeaturesProps> = ({ features, sectionName }) => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {sectionName}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};