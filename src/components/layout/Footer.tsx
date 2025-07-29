'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaArrowUp
} from 'react-icons/fa';
import { WhatsAppChat } from '@/components/common/WhatsAppChat';
import { CallButton } from '@/components/common/CallButton';
import { useLocale } from '@/hooks/useLocale';

export const Footer: React.FC = () => {
    const { t } = useLocale();
    const companyLinks = t('footer.companyLabel') as string[];
    const otherLinks = t('footer.otherLabel') as string[];

    // Scroll-to-top button visibility
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white text-black border-t border-gray-200 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* App Section */}
                    <div>
                        <img src="/logo/10ms-logo.svg" alt="10 Minute School" className="h-10 mb-4" />
                        <p className="text-green-600 mb-4">{t('footer.heading')}</p>
                        <p className="mb-4 text-sm font-medium">{t('footer.download')}</p>
                        <div className="flex gap-4">
                            <Link href="https://play.google.com/store" target="_blank">
                                <img src="/app/play.png" alt="Google Play" className="h-12" />
                            </Link>
                            <Link href="https://www.apple.com/app-store/" target="_blank">
                                <img src="/app/apple-app-store.png" alt="App Store" className="h-12" />
                            </Link>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {companyLinks.map((item, index) => (
                                <li key={index} className="hover:text-green-600 hover:underline">
                                    <Link href="#">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.other')}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {otherLinks.map((item, index) => (
                                <li key={index} className="hover:text-green-600 hover:underline">
                                    <Link href="#">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.keep')}</h3>
                        <ul className="text-sm space-y-3 text-gray-800">
                            <li>
                                <strong>{t('contact.call')}</strong>{' '}
                                <span className="text-green-600">{t('contact.callNumber')}</span> (24×7)
                            </li>
                            <li>
                                <strong>{t('contact.whatsapp')}</strong>{' '}
                                <span className="text-green-600">{t('contact.whatsappNumber')}</span> (24×7)
                            </li>
                            <li>
                                <strong>{t('contact.outside')}</strong>{' '}
                                <span className="text-green-600">{t('contact.outsidenumber')}</span>
                            </li>
                            <li>
                                <strong>{t('contact.mail')}</strong>{' '}
                                <span className="text-green-600">support@10minuteschool.com</span>
                            </li>
                        </ul>

                        <div className="flex space-x-4 mt-4 text-gray-600">
                            <Link href="#"><FaFacebookF size={20} /></Link>
                            <Link href="#"><FaInstagram size={20} /></Link>
                            <Link href="#"><FaLinkedinIn size={20} /></Link>
                            <Link href="#"><FaYoutube size={20} /></Link>
                            <Link href="#"><FaTiktok size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-400 text-sm">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>

            {/* Floating buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
                <WhatsAppChat />
                <CallButton />
                {showScroll && (
                    <button
                        onClick={scrollToTop}
                        className="bg-black text-white text-xl w-10 h-10 rounded-full shadow-lg hover:bg-[#1c283d] flex items-center justify-center transition-opacity duration-300"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp />
                    </button>
                )}
            </div>
        </footer>
    );
};
