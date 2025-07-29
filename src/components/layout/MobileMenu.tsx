'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';
import { UserAuthButton } from '../auth/UserAuthButton';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { User, Credentials, SignupData } from '@/types/auth';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiSearch } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    login: (credentials: Credentials) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => void;
}

export const MobileMenu = ({
                               isOpen,
                               onClose,
                               isAuthenticated,
                               user,
                               loading,
                               login,
                               signup,
                               logout,
                           }: MobileMenuProps) => {
    const { t } = useLocale();

    const handleLogout = () => {
        logout();
        onClose();
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleLogin = () => {
        login({
            email: 'demo@example.com',
            password: 'password123',
        });
    };

    const handleSignup = () => {
        signup({
            name: 'Demo User',
            email: 'demo@example.com',
            password: 'password123',
            phone: '01700000000',
        });
    };

    const class6to12Items = t('nav.class6to12.class6to12Label') as string[];
    const skillItems = t('nav.skill.skillLabel') as string[];
    const englishCenterItems = t('nav.englishCenter.englishCenterLabel') as string[];
    const moreItems = t('nav.more.moreLabel') as string[];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="md:hidden bg-white shadow-sm border-t p-4 space-y-5"
                >
                    {/* Logo + Icons */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 gap-2">
                            <MdMenuOpen
                                className="h-6 w-6 text-gray-800 cursor-pointer"
                                onClick={toggleMenu}
                            />
                            <Image
                                src="/logo/10ms-logo.svg"
                                alt="10 Minute School"
                                width={150}
                                height={60}
                                priority
                            />
                        </div>

                        {/* Language Switcher */}
                        <div className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Top Actions */}
                    <div className="flex items-center space-x-4">
                        <FiSearch size={10} className="h-6 w-6 text-gray-600" />
                        <Link
                            href={`tel:${t('contact.callNumber')}`}
                            className="flex items-center text-green-600 font-medium gap-1 hover:text-green-700"
                        >
                            <FiPhone className="text-lg" />
                        </Link>
                        <UserAuthButton
                            user={user}
                            isAuthenticated={isAuthenticated}
                            onLogin={handleLogin}
                            onSignup={handleSignup}
                            onLogout={handleLogout}
                        />
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-2 grid grid-cols-2 text-gray-700">
                        {/* Class 6–12 */}
                        <div>
                            <div className="flex items-center cursor-pointer hover:text-black">
                                {t('nav.class6to12.title')}
                                <HiChevronDown size={30} />
                            </div>
                            {isMenuOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    {class6to12Items.map((item, i) => (
                                        <li key={i} className="hover:text-black cursor-pointer">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Skill */}
                        <div>
                            <div className="flex items-center cursor-pointer hover:text-black">
                                {t('nav.skill.title')}
                                <HiChevronDown size={30} />
                            </div>
                            {isMenuOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    {skillItems.map((item, i) => (
                                        <li key={i} className="hover:text-black cursor-pointer">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* English Center */}
                        <div>
                            <div className="flex items-center cursor-pointer hover:text-black">
                                {t('nav.englishCenter.title')}
                                <HiChevronDown size={30} />
                            </div>
                            {isMenuOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    {englishCenterItems.map((item, i) => (
                                        <li key={i} className="hover:text-black cursor-pointer">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Admission Test */}
                        <div className="cursor-pointer hover:text-black">
                            {t('nav.admissionTest')}
                        </div>

                        {/* More */}
                        <div>
                            <div className="flex items-center cursor-pointer hover:text-black">
                                {t('nav.more.title')}
                                <HiChevronDown size={30} />
                            </div>
                            {isMenuOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    {moreItems.map((item, i) => (
                                        <li key={i} className="hover:text-black cursor-pointer">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
