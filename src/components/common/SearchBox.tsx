'use client';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocale } from '@/hooks/useLocale';

interface SearchBoxProps {
    onSearch?: (query: string) => void;
    initialQuery?: string | string[];
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, initialQuery = '' }) => {

    const normalizedQuery = Array.isArray(initialQuery) ? initialQuery[0] : initialQuery;

    const [query, setQuery] = useState<string>(normalizedQuery);
    const { t } = useLocale();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', query);
        onSearch?.(query);
    };

    return (
        <form onSubmit={handleSearch} className="relative">
            <div className="relative">
                <FiSearch
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('common.search') as string}
                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
            </div>
        </form>
    );
};
