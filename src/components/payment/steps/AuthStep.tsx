
import React from 'react';
import { Button } from '@/components/ui/Button';

interface AuthStepProps {
    phone: string;
    setPhone: (val: string) => void;
    password: string;
    setPassword: (val: string) => void;
    onLogin: () => void;
    loading?: boolean;
}

export const AuthStep: React.FC<AuthStepProps> = ({
                                                      phone,
                                                      setPhone,
                                                      password,
                                                      setPassword,
                                                      onLogin,
                                                      loading = false,
                                                  }) => (
    <div className="space-y-6">
        <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">লগইন করুন</h3>
            <p className="text-gray-600">কোর্স কিনতে প্রথমে লগইন করুন</p>
        </div>

        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    ফোন নম্বর
                </label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="01XXXXXXXXX"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    পাসওয়ার্ড
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="আপনার পাসওয়ার্ড"
                />
            </div>

            <Button
                onClick={onLogin}
                className="w-full"
                disabled={!phone || !password || loading}
                loading={loading}
            >
                লগইন করুন
            </Button>
        </div>
    </div>
);
