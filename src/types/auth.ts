export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
    phone: string;
}
