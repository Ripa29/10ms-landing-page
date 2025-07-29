'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQProps {
    faqs: FAQItem[];
    sectionName: string;
}

export const FAQ: React.FC<FAQProps> = ({ faqs, sectionName }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="py-16 bg-gray-50">
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

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => toggleExpand(faq.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                {expandedId === faq.id ? (
                                    <FaChevronUp className="text-blue-600 flex-shrink-0" />
                                ) : (
                                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {expandedId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-gray-200"
                                    >
                                        <div
                                            className="px-6 py-4 text-gray-700 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
