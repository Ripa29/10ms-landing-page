'use client';
import React, { useState } from 'react';
import { SearchBox } from '../common/SearchBox';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { UserAuthButton } from '../auth/UserAuthButton';
import { useLocale } from '@/hooks/useLocale';
import { Credentials, SignupData, User } from '@/types/auth';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';
import Link from "next/link";

interface DesktopNavigationProps {
    isAuthenticated: boolean;
    user: User | null;
    login: (credentials: Credentials) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
                                                                 isAuthenticated,
                                                                 user,
                                                                 login,
                                                                 signup,
                                                                 logout,
                                                             }) => {
    const { t } = useLocale();

    const handleLogin = () =>
        login({ email: 'demo@example.com', password: 'password123' });
    const handleSignup = () =>
        signup({
            name: 'Demo User',
            email: 'demo@example.com',
            password: 'password123',
            phone: '',
        });

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (key: string) => {
        setActiveDropdown(prev => (prev === key ? null : key));
    };

    const renderDropdown = (key: string, labelKey: string) => {
        const items = t(`${key}.${labelKey}`) as string[] | string;

        if (!Array.isArray(items)) return null;

        return (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded z-50 p-2 min-w-[200px]">
                <ul className="space-y-1">
                    {items.map((item: string, index: number) => (
                        <li key={index} className="hover:text-blue-600 cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="hidden md:flex items-center px-6 py-2 shadow-sm bg-white space-x-4 w-full relative">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                <img
                    className="h-8 w-auto"
                    src="/logo/10ms-logo.svg"
                    alt="10 Minute School"
                />
            </motion.div>

            {/* Search */}
            <div className="flex-1 max-w-sm">
                <SearchBox />
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-4 text-sm font-medium text-gray-700 relative">
                {/* Class 6–12 */}
                <div className="relative">
                    <button
                        className="flex items-center cursor-pointer hover:text-black"
                        onClick={() => toggleDropdown('nav.class6to12')}
                    >
                        {t('nav.class6to12.title')}
                        <HiChevronDown size={20} />
                    </button>
                    {activeDropdown === 'nav.class6to12' &&
                        renderDropdown('nav.class6to12', 'class6to12Label')}
                </div>

                {/* Skill */}
                <div className="relative">
                    <button
                        className="flex items-center cursor-pointer hover:text-black"
                        onClick={() => toggleDropdown('nav.skill')}
                    >
                        {t('nav.skill.title')}
                        <HiChevronDown size={20} />
                    </button>
                    {activeDropdown === 'nav.skill' &&
                        renderDropdown('nav.skill', 'skillLabel')}
                </div>

                {/* Admission Test */}
                <span className="cursor-pointer hover:text-black">
                    {t('nav.admissionTest')}
                </span>

                {/* Online Batch */}
                <div className="relative">
                    <button
                        className="flex items-center cursor-pointer hover:text-black"
                        onClick={() => toggleDropdown('nav.onlineBatch')}
                    >
                        {t('nav.onlineBatch.title')}
                        <HiChevronDown size={20} />
                    </button>
                    {activeDropdown === 'nav.onlineBatch' &&
                        renderDropdown('nav.onlineBatch', 'onlineBatchLabel')}
                </div>

                {/* English Center */}
                <div className="relative">
                    <button
                        className="flex items-center cursor-pointer hover:text-black"
                        onClick={() => toggleDropdown('nav.englishCenter')}
                    >
                        {t('nav.englishCenter.title')}
                        <HiChevronDown size={20} />
                    </button>
                    {activeDropdown === 'nav.englishCenter' &&
                        renderDropdown('nav.englishCenter', 'englishCenterLabel')}
                </div>

                {/* More */}
                <div className="relative">
                    <button
                        className="flex items-center cursor-pointer hover:text-black"
                        onClick={() => toggleDropdown('nav.more')}
                    >
                        {t('nav.more.title')}
                        <HiChevronDown size={20} />
                    </button>
                    {activeDropdown === 'nav.more' &&
                        renderDropdown('nav.more', 'moreLabel')}
                </div>
            </nav>

            {/* Language Switcher */}
            <div className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700">
                <LanguageSwitcher />
            </div>

            {/* Call Button */}
            <Link
                href={`tel:${t('contact.callNumber')}`}
                className="flex items-center text-green-600 font-medium gap-1 hover:text-green-700"
            >
                <FiPhone className="text-lg" />
                {t('contact.callNumber')}
            </Link>

            {/* Auth Button */}
            <UserAuthButton
                user={user}
                isAuthenticated={isAuthenticated}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={logout}
            />
        </div>
    );
};

export default DesktopNavigation;
