import axios from 'axios';
import type { ApiResponse } from '@/types/course';

const api = axios.create({
    baseURL: 'https://api.10minuteschool.com/discovery-service/api/v1',
    headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
    },
});

export const fetchCourseData = async (lang: 'en' | 'bn' = 'en'): Promise<ApiResponse> => {
    try {
        const response = await api.get(`/products/ielts-course?lang=${lang}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course data:', error);
        throw error;
    }
};

export default api;