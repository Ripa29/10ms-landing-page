'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { AboutSection } from '@/types/course';

interface CourseDetailsProps {
    sections: AboutSection[];
    title: string;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ sections, title }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                </motion.div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-sm"
                        >
                            <div
                                className="text-xl font-bold text-gray-900 mb-6"
                                dangerouslySetInnerHTML={{ __html: section.title }}
                            />
                            <div
                                className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: section.description }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};