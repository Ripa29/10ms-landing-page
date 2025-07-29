import type { User } from '@/types/auth';

export const TOKEN_KEY = 'auth_token';
export const USER_KEY = 'user_data';

export const saveAuthData = (token: string, user: User): void => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getAuthToken = (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
};

export const getAuthUser = (): User | null => {
    if (typeof window === 'undefined') return null;

    const userData = localStorage.getItem(USER_KEY);
    if (!userData) return null;

    try {
        return JSON.parse(userData);
    } catch {
        return null;
    }
};

export const clearAuthData = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

export const checkAuthStatus = (): boolean => {
    const token = getAuthToken();
    const user = getAuthUser();
    return !!(token && user);
};

// Mock authentication functions
export const mockLogin = async (phone: string, password: string): Promise<{ success: boolean; token?: string; user?: User; error?: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation
    if (phone === '01700000000' && password === 'password') {
        const mockUser: User = {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            phone: phone,
        };

        const mockToken = 'mock_jwt_token_' + Date.now();

        return {
            success: true,
            token: mockToken,
            user: mockUser,
        };
    }

    return {
        success: false,
        error: 'Invalid credentials',
    };
};

export const mockRegister = async (name: string, phone: string, email: string, password: string): Promise<{ success: boolean; token?: string; user?: User; error?: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockUser: User = {
        id: Date.now().toString(),
        name,
        email,
        phone,
    };

    const mockToken = 'mock_jwt_token_' + Date.now();

    return {
        success: true,
        token: mockToken,
        user: mockUser,
    };
};