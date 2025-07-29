import { type ClassValue, clsx } from 'clsx';

const CONFLICT_GROUPS = [
    // text alignment
    ['text-left', 'text-center', 'text-right', 'text-justify'],
    // padding
    ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-7', 'p-8'],
    // margin
    ['m-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-7', 'm-8'],
    // display
    ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'hidden'],
];

/**
 * Remove conflicting tailwind classes manually
 */
function removeConflicts(classes: string[]): string[] {
    return CONFLICT_GROUPS.reduce((final, group) => {
        const found = group.filter(cls => classes.includes(cls));
        if (found.length <= 1) return final;
        const last = found[found.length - 1];
        return final.filter(cls => !group.includes(cls)).concat(last);
    }, classes);
}

/**
 * Utility function to combine class names and resolve basic conflicts
 */
export function cn(...inputs: ClassValue[]) {
    const classList = clsx(inputs).split(' ').filter(Boolean);
    const resolved = removeConflicts(classList);
    return resolved.join(' ');
}

/**
 * Format price with currency
 */
export const formatPrice = (price: number, currency: string = '৳'): string => {
    return `${currency}${price.toLocaleString()}`;
};

/**
 * Format duration in hours/minutes (Bangla)
 */
export const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
        return `${minutes} মিনিট`;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
        return `${hours} ঘন্টা`;
    }

    return `${hours} ঘন্টা ${remainingMinutes} মিনিট`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

/**
 * Slugify text (URL-safe)
 */
export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

/**
 * Debounce a function
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

/**
 * Generate YouTube embed URL
 */
export const generateYouTubeEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}`;
};

/**
 * Generate YouTube thumbnail URL
 */
export const generateYouTubeThumbnailUrl = (
    videoId: string,
    quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'high'
): string => {
    return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
};

/**
 * Validate email
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate Bangladeshi phone number
 */
export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^(\+88)?01[3-9]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length === 11 && cleanPhone.startsWith('01')) {
        return cleanPhone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
    }

    return phone;
};
