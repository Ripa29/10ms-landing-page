'use client';
import React, { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';

interface UserAuthButtonProps {
    user: {
        name: string;
        email: string;
    } | null;
    isAuthenticated: boolean;
    onLogin: () => void;
    onSignup: () => void;
    onLogout: () => void;
}

export const UserAuthButton: React.FC<UserAuthButtonProps> = ({
                                                                  user,
                                                                  isAuthenticated,
                                                                  onLogin,
                                                                  onSignup,
                                                                  onLogout,
                                                              }) => {
    const { t } = useLocale();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="space-y-2 ">
            {isAuthenticated && user ? (
                <>
                    <div className="text-sm text-gray-700">
                        {t('common.loggedInAs')}: <strong>{user.name}</strong>
                    </div>
                    <Button variant="outline" onClick={onLogout}>
                        {t('common.logout')}
                    </Button>
                </>
            ) : (
                <>
                    <div className="flex gap-3">
                        <Button variant="primary" onClick={onLogin}>
                            {t('common.login')}
                        </Button>
                        <Button variant="secondary" onClick={onSignup}>
                            {t('common.signup')}
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};
