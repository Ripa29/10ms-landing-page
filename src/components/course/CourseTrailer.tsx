'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Media } from '@/types/course';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';
import { FaPlay } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

interface CourseTrailerProps {
    media: Media[];
}

export const CourseTrailer: React.FC<CourseTrailerProps> = ({ media }) => {
    const { t } = useLocale();
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const previewMedia = media.filter((m) => m.name === 'preview_gallery');

    if (previewMedia.length === 0) return null;

    const openModal = (videoId: string) => {
        setActiveModal(videoId);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('sections.coursetrailer')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('course.previewPrompt')}
                    </p>
                </motion.div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="course-preview-swiper"
                    >
                        {previewMedia.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group">
                                    {item.resource_type === 'video' ? (
                                        <div
                                            onClick={() => openModal(item.resource_value)}
                                            className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                                        >
                                            <Image
                                                src={
                                                    item.thumbnail_url ||
                                                    `https://img.youtube.com/vi/${item.resource_value}/maxresdefault.jpg`
                                                }
                                                alt="Video thumbnail"
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            {/* Play Button with animate-ping */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="relative flex h-10 w-10">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-10 w-10 bg-red-500 items-center justify-center">
                                                        <FaPlay className="w-3 h-3 text-white ml-[1px]" />
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative aspect-video rounded-lg overflow-hidden">
                                            <Image
                                                src={item.resource_value}
                                                alt="Course preview"
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {activeModal && (
                        <motion.div
                            key="modal-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        >
                            <motion.div
                                key="modal-content"
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.85, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 bg-green-600 hover:bg-gray-100 text-gray-700 rounded-full p-1 shadow z-10"
                                >
                                    <RiCloseFill className="text-black hover:text-green-600" size={24} />
                                </button>

                                {/* Embedded YouTube Iframe */}
                                <iframe
                                    src={`https://www.youtube.com/embed/${activeModal}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
