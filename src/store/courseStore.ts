'use client';
import { create } from 'zustand';
import type { CourseData } from '@/types/course';

interface CourseStore {
    courseData: CourseData | null;
    loading: boolean;
    error: string | null;
    setCourseData: (data: CourseData) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
    courseData: null,
    loading: false,
    error: null,
    setCourseData: (courseData) => set({ courseData }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));