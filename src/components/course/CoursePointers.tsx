'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Pointer } from '@/types/course';

interface CoursePointersProps {
    pointers: Pointer[];
    sectionName: string;
}

export const CoursePointers: React.FC<CoursePointersProps> = ({ pointers, sectionName }) => {
    return (
        <section className="py-16 bg-white">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {pointers.map((pointer, index) => (
                        <motion.div
                            key={pointer.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <FaCheck className="text-white text-xs" />
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {pointer.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};