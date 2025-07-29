export interface Media {
    name: string;
    resource_type: 'video' | 'image';
    resource_value: string;
    thumbnail_url?: string;
}

export interface Checklist {
    id: string;
    text: string;
    icon: string;
    color: string;
    list_page_visibility: boolean;
}

export interface Instructor {
    name: string;
    description: string;
    image: string;
    slug: string;
    short_description: string;
    has_instructor_page: boolean;
}

export interface Feature {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
}

export interface Pointer {
    id: string;
    text: string;
    icon: string;
    color: string;
}

export interface AboutSection {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    id: string;
    name: string;
    description: string;
    testimonial: string;
    profile_image: string;
    video_url?: string;
    thumb?: string;
}

export interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: any[];
}

export interface CourseData {
    slug: string;
    id: number;
    title: string;
    description: string;
    media: Media[];
    checklist: Checklist[];
    seo: {
        meta_title: string;
        meta_description: string;
        meta_keywords: string;
    };
    cta_text: {
        name: string;
        value: string;
    };
    sections: Section[];
}

export interface ApiResponse {
    code: number;
    data: CourseData;
    message: string;
    status_code: number;
}