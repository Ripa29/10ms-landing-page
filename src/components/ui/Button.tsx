'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  onClick,
                                                  type = 'button',
                                                  variant = 'primary',
                                                  size = 'md',
                                                  disabled = false,
                                                  loading = false,
                                                  className = '',
                                              }) => {
    const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
        primary: 'bg-blue-600 hover:bg-sky-700 text-white focus:ring-sky-500',
        secondary: 'bg-green-600 hover:bg-green-300 text-white focus:ring-green-400',
        outline: 'border-2 border-sky-900 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-sky-500',
        ghost: 'bg-transparent text-sky-600 hover:bg-sky-50',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            type={type}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            } ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Loading...</span>
                </div>
            ) : (
                children
            )}
        </motion.button>
    );
};
