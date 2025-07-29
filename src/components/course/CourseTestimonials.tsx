'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { FaPlay } from "react-icons/fa";
import { Modal } from '../ui/Modal';
import type { Testimonial } from '@/types/course';
import Image from 'next/image';
import { RiCloseFill } from "react-icons/ri";

interface CourseTestimonialsProps {
    testimonials: Testimonial[];
    title: string;
}

export const CourseTestimonials: React.FC<CourseTestimonialsProps> = ({
                                                                          testimonials,
                                                                          title
                                                                      }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const closeModal = () => {
        setSelectedVideo(null);
        setIsVideoModalOpen(false);

    };

    const openVideoModal = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
        setIsVideoModalOpen(true);
    };

    return (
        <section className="py-16 bg-white">
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

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="testimonials-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={testimonial.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-xl p-6 h-full"
                            >
                                {/* Video Thumbnail */}
                                {testimonial.video_url && testimonial.thumb && (
                                    <div
                                        className="relative aspect-video rounded-lg overflow-hidden mb-4 group cursor-pointer"
                                        onClick={() => openVideoModal(testimonial.video_url!)}
                                    >
                                        <Image
                                            src={testimonial.thumb}
                                            alt="Video Testimonial"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="relative flex h-18 w-18">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-18 w-18 bg-red-600 items-center justify-center">
                                                    <FaPlay className="w-6 h-6 text-white ml-1" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Student Info */}
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.profile_image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover rounded-full"
                                            sizes="48px"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-primary-600 font-medium">
                                            {testimonial.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            size={16}
                                            className="text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {testimonial.testimonial}
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Video Modal */}
                <Modal
                    isOpen={isVideoModalOpen}
                    onClose={closeModal}
                    size="xl"
                >
                    {selectedVideo && (
                        <div className="relative w-full aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="Student Testimonial"
                                className="w-full h-full rounded-md"
                                allowFullScreen
                                allow="autoplay"
                                onLoad={() => setVideoLoaded(true)}
                            />
                            {videoLoaded && (
                                <button
                                    onClick={closeModal}
                                    className="absolute -top-8 right-0 bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 shadow"
                                >
                                    <RiCloseFill className="text-blue-600" size={24} />
                                </button>
                            )}
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
};
