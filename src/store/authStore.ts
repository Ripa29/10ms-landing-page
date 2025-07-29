'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types/auth';

interface AuthStore {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (user: User) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            loading: false,
            login: (user: User) => set({ user, isAuthenticated: true }),
            logout: () => set({ user: null, isAuthenticated: false }),
            setLoading: (loading: boolean) => set({ loading }),
        }),
        {
            name: 'auth-storage',
        }
    )
);