'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instructor } from '@/types/course';
import {useLocale} from "@/hooks/useLocale";

interface CourseInstructorsProps {
    instructors: Instructor[];

}

export function CourseInstructors({ instructors}: CourseInstructorsProps) {
    const { t } = useLocale();
    if (instructors.length === 0) return null;

    return (
        <section className="py-20 bg-gradient-to-br from-red-50 to-blue-50 rounded-md">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Meet Your Instructor
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Learn from the best in the field
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 items-center justify-center max-w-4xl mx-auto">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={instructor.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col lg:flex-row items-start gap-8"
                        >
                            {/* Instructor Image */}
                            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Instructor Info  */}
                            <div className="space-y-4 text-center lg:text-left max-w-xl self-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {instructor.name}
                                </h3>
                                <p className="text-primary-600 font-medium">
                                    {instructor.short_description}
                                </p>
                                <div
                                    className="text-gray-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: instructor.description }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}