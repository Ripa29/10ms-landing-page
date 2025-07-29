'use client';

import Image from "next/image";

interface UserAvatarProps {
    user?: {
        name?: string;
        email?: string;
        image?: string;
    };
    size?: 'sm' | 'md' | 'lg';
}

export const UserAvatar = ({ user, size = 'md' }: UserAvatarProps) => {
    const sizeClasses = {
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
    };

    const getInitials = () => {
        if (user?.name) return user.name.charAt(0).toUpperCase();
        if (user?.email) return user.email.charAt(0).toUpperCase();
        return '?';
    };

    return user?.image ? (
        <Image
            src={user.image}
            alt="User"
            fill
            className={`${sizeClasses[size]} rounded-full object-cover`}
            sizes="48px"
        />
    ) : (
        <div
            className={`${sizeClasses[size]} bg-blue-500 rounded-full flex items-center justify-center text-white font-medium`}
        >
            {getInitials()}
        </div>
    );
};