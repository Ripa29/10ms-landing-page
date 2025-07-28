'use client';
import { useState, createContext, useContext, ReactNode } from 'react';
import { User, AuthState } from '@/types/auth';

interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: false,
    });

    const login = async (email: string, password: string) => {
        setAuthState(prev => ({ ...prev, isLoading: true }));
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const user: User = { id: '1', name: 'John Doe', email };
            setAuthState({
                user,
                isAuthenticated: true,
                isLoading: false,
            });
        } catch (error) {
            setAuthState(prev => ({ ...prev, isLoading: false }));
            throw error;
        }
    };

    const logout = () => {
        setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
        });
    };

    const register = async (userData: Partial<User>) => {
        setAuthState(prev => ({ ...prev, isLoading: true }));
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const user: User = { id: '1', ...userData } as User;
            setAuthState({
                user,
                isAuthenticated: true,
                isLoading: false,
            });
        } catch (error) {
            setAuthState(prev => ({ ...prev, isLoading: false }));
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout, register }}>
    {children}
    </AuthContext.Provider>
);
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};