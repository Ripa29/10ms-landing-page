
'use client';
import { FiMenu, FiX } from 'react-icons/fi';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => (
    <button
        onClick={onClick}
        className="md:hidden text-gray-500 hover:text-gray-700"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
);