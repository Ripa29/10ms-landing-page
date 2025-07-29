'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-64">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"
            />
        </div>
    );
};