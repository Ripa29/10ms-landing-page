'use client';
import React, { useState, useEffect } from 'react';
import { CourseHero } from '@/components/course/CourseHero';
import { CourseTrailer } from '@/components/course/CourseTrailer';
import { CourseInstructors } from '@/components/course/CourseInstructors';
import { CourseFeatures } from '@/components/course/CourseFeatures';
import { CoursePointers } from '@/components/course/CoursePointers';
import { CourseDetails } from '@/components/course/CourseDetails';
import { CourseCheckList } from '@/components/course/CourseCheckList';
import { CourseTestimonials } from '@/components/course/CourseTestimonials';
import { CourseCTA } from '@/components/course/CourseCTA';
import { PaymentModal } from '@/components/payment/PaymentModal';
import { Loading } from '@/components/ui/Loading';
import { fetchCourseData } from '@/lib/api';
import { useLocale } from '@/hooks/useLocale';
import type { CourseData } from '@/types/course';
import {FAQ} from "@/components/course/FAQ";
import CourseExclusiveFeatures from "@/components/course/CourseExclusiveFeatures";
import {CourseLayoutSection} from "@/components/course/CourseLayoutSection";
import {SEOHead} from "@/components/common/SEOHead";

export default function HomePage() {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const { locale } = useLocale();

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        setLoading(true);
        const response = await fetchCourseData(locale);
        setCourseData(response.data);
      } catch (err) {
        setError('Failed to load course data');
        console.error('Error loading course data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [locale]);

  const handleEnroll = () => {
    setIsPaymentModalOpen(true);
  };

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <Loading />
        </div>
    );
  }

  if (error || !courseData) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
    );
  }

  // Process sections data
  const instructorsSection = courseData.sections.find(s => s.type === 'instructors');
  const courseLayoutSection = courseData.sections.find(s => s.type === 'courseLayout');
  const pointersSection = courseData.sections.find(s => s.type === 'pointers');
  const aboutSection = courseData.sections.find(s => s.type === 'about');
  const featuresSection = courseData.sections.find(s => s.type === 'features');
  const testimonialsSection = courseData.sections.find(s => s.type === 'testimonials');
  const exclusiveFeaturesSection = courseData.sections.find(s => s.type === 'feature_explanations');
  const faqSection = courseData.sections.find(s => s.type === 'faq');
  return (

        <div className="min-h-screen bg-white">
          <SEOHead course={courseData} />

          {/* Title + Description */}
          <CourseHero courseData={courseData} onEnroll={handleEnroll} />

          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">

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
            <div className="space-y-4">
              <CourseTrailer media={courseData.media} />
              <CourseCTA ctaText={courseData.cta_text.name} onEnroll={handleEnroll} />
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
}