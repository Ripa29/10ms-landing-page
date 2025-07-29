import Head from 'next/head';
import { CourseData } from '@/types/course';

interface SEOHeadProps {
    course?: CourseData;
    title?: string;
    description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ course, title, description }) => {
    const pageTitle = title || course?.title || '10 Minute School - IELTS Course';
    const pageDescription = description || course?.description || 'Learn IELTS with expert guidance';
    const thumbnail = course?.media?.find(m => m.name === 'thumbnail')?.resource_value;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            {thumbnail && <meta property="og:image" content={thumbnail} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            {thumbnail && <meta name="twitter:image" content={thumbnail} />}

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="10 Minute School" />
            <link rel="canonical" href={`https://10minuteschool.com/course/${course?.slug}`} />
        </Head>
    );
};