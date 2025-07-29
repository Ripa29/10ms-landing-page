'use client';
import { useState, createContext, useContext, ReactNode } from 'react';
import { User, AuthState, Credentials, SignupData } from '@/types/auth';

interface AuthContextType extends AuthState {
    login: (credentials: Credentials) => Promise<void>;
    logout: () => void;
    signup: (data: SignupData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        loading: false,
    });

    const login = async ({ email, password }: Credentials) => {
        setAuthState(prev => ({ ...prev, loading: true }));
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const user: User = {
                id: '1',
                name: 'John Doe',
                email,
                phone: '0123456789',
            };
            setAuthState({
                user,
                isAuthenticated: true,
                loading: false,
            });
        } catch (error) {
            setAuthState(prev => ({ ...prev, loading: false }));
            throw error;
        }
    };

    const logout = () => {
        setAuthState({
            user: null,
            isAuthenticated: false,
            loading: false,
        });
    };

    const signup = async (data: SignupData) => {
        setAuthState(prev => ({ ...prev, loading: true }));
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const user: User = {
                id: '2',
                ...data,
            };
            setAuthState({
                user,
                isAuthenticated: true,
                loading: false,
            });
        } catch (error) {
            setAuthState(prev => ({ ...prev, loading: false }));
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout, signup }}>
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
