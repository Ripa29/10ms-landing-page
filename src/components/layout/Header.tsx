'use client';

import { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, user, login, signup, logout, loading } = useAuth();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            {/*  DesktopNavigation  */}
            <div className="hidden lg:block">
                <DesktopNavigation
                    isAuthenticated={isAuthenticated}
                    user={user}
                    login={login}
                    signup={signup}
                    logout={logout}
                />
            </div>

            {/*  Mobile menu button  */}
            <div className="block lg:hidden pt-5 pl-2">
                <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            {/*  Mobile menu  */}
            <div className="block lg:hidden">
                <MobileMenu
                    isOpen={isMenuOpen}
                    onClose={closeMenu}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    login={login}
                    signup={signup}
                    logout={logout}
                    loading={loading}
                />
            </div>
        </header>
    );
};
