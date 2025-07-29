import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/hooks/useLocale';
import { AuthProvider } from '@/hooks/useAuth';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {CallButton} from "@/components/common/CallButton";
import React from "react";
import {WhatsAppChat} from "@/components/common/WhatsAppChat";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'IELTS Course by Munzereen Shahid | 10 Minute School',
    description: 'Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই!',
    keywords: 'IELTS, English, Course, Bangladesh, 10 Minute School',
    openGraph: {
        title: 'IELTS Course by Munzereen Shahid',
        description: 'Complete IELTS preparation course with expert guidance',
        images: ['/logo/10ms-logo.svg'],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <LocaleProvider>
            <AuthProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </AuthProvider>
        </LocaleProvider>
        </body>
        </html>
    );
}