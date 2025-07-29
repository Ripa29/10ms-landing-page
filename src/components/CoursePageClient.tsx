'use client';
import React, { useState } from 'react';
import { CourseData } from '@/types/course';
import { CourseHero } from '@/components/course/CourseHero';
import { CourseTrailer } from '@/components/course/CourseTrailer';
import { CourseFeatures } from '@/components/course/CourseFeatures';
import { CoursePointers } from '@/components/course/CoursePointers';
import { CourseCheckList } from '@/components/course/CourseCheckList';
import { CourseTestimonials } from '@/components/course/CourseTestimonials';
import { FAQ } from '@/components/course/FAQ';
import { CourseCTA } from '@/components/course/CourseCTA';
import { PaymentModal } from '@/components/payment/PaymentModal';
import { Loading } from '@/components/ui/Loading';
import { CourseDetails } from "@/components/course/CourseDetails";
import { CourseLayoutSection } from "@/components/course/CourseLayoutSection";
import {CourseInstructors} from '@/components/course/CourseInstructors';
import CourseExclusiveFeatures from "@/components/course/CourseExclusiveFeatures";
import { useLocale } from "@/hooks/useLocale";
interface CoursePageClientProps {
    initialData: CourseData;

}

export const CoursePageClient: React.FC<CoursePageClientProps> = ({ initialData }) => {
    const { t } = useLocale();
    const [courseData] = useState<CourseData>(initialData);

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    if (!courseData) return <Loading />;

    const handleBuyClick = () => {
        setIsPaymentModalOpen(true);
    };

    const getSectionByType = (type: string) =>
        courseData.sections.find(section => section.type === type);


    const featuresSection = getSectionByType('features');
    const instructorsSection = getSectionByType('instructors');
    const pointersSection = getSectionByType('pointers');
    const testimonialsSection = getSectionByType('testimonials');
    const faqSection = getSectionByType('faq');
    const aboutSection = getSectionByType('about');
    const courseLayoutSection = getSectionByType('courseLayout');
    const exclusiveFeaturesSection = getSectionByType('feature_explanations');

    return (
        <div className="min-h-screen bg-white">


            {/* Title + Description */}
            <CourseHero courseData={courseData} onEnroll={handleBuyClick} />

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-10">

                    {/* How the course is laid out */}
                    {courseLayoutSection && (
                        <CourseLayoutSection
                            features={courseLayoutSection.values}
                            sectionName={courseLayoutSection.name}
                        />
                    )}

                    {/* Instructors */}
                    {instructorsSection && (
                        <CourseInstructors instructors={instructorsSection.values} />
                    )}

                    {/* Features */}
                    {featuresSection && (
                        <CourseFeatures
                            features={featuresSection.values}
                            sectionName={featuresSection.name}
                        />
                    )}

                    {/* What you will learn by doing the course */}
                    {pointersSection && (
                        <CoursePointers
                            pointers={pointersSection.values}
                            sectionName={pointersSection.name}
                        />
                    )}

                    {/* Course Exclusive Feature */}
                    {exclusiveFeaturesSection && exclusiveFeaturesSection.values.length > 0 && (
                        <CourseExclusiveFeatures
                            features={exclusiveFeaturesSection.values}
                            sectionName={exclusiveFeaturesSection.name}
                        />
                    )}

                    {/* Course details */}
                    {aboutSection && (
                        <CourseDetails
                            sections={aboutSection.values}
                            title={aboutSection.name}
                        />
                    )}
                </div>

                {/* Right Column: Trailer, CTA, Checklist */}
                <div className="space-y-8">
                    <CourseTrailer media={courseData.media} />
                    <CourseCTA ctaText={courseData.cta_text.name} onEnroll={handleBuyClick} />
                    <CourseCheckList checklist={courseData.checklist} />
                </div>
            </div>

            {/* Testimonials */}
            {testimonialsSection && (
                <CourseTestimonials
                    testimonials={testimonialsSection.values}
                    title={testimonialsSection.name}
                />
            )}

            {/* FAQ */}
            {faqSection && (
                <FAQ
                    faqs={faqSection.values}
                    sectionName={faqSection.name}
                />
            )}

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                courseId={courseData.id}
                courseTitle={courseData.title}
            />


        </div>
    );
};
