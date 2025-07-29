'use client';

import React from 'react';
import { Dialog } from '@headlessui/react';
import { usePayment } from '@/hooks/usePayment';
import { FaTimes } from 'react-icons/fa';
import { PaymentStep } from '@/components/payment/steps/PaymentStep';
import { DeliveryStep } from '@/components/payment/steps/DeliveryStep';
import { formatPrice } from '@/lib/utils';
import { useLocale } from '@/hooks/useLocale';
import SuccessPage from "@/components/payment/successPage";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseId: number;
    courseTitle: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
                                                              isOpen,
                                                              onClose,
                                                              courseId,
                                                              courseTitle,
                                                          }) => {
    const { t } = useLocale();
    const {
        selectedMethod,
        selectedDelivery,
        processing,
        selectPaymentMethod,
        selectDeliveryOption,
        processPayment,
    } = usePayment();

    const handlePayment = async () => {
        const result = await processPayment();

        if (result.success) {
            alert(t('common.success'));
            onClose();
        } else {
            alert(result.error || t('common.error'));
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white w-full max-w-md rounded-lg shadow-xl p-6">
                    <div className="flex justify-end items-left mb-4">
                        <button onClick={onClose}>
                            <FaTimes className="text-gray-600" />
                        </button>
                    </div>

                    <PaymentStep
                        selectedMethod={selectedMethod}
                        selectPaymentMethod={selectPaymentMethod}
                        onPay={handlePayment}
                        processing={processing}
                        formatPrice={formatPrice}
                    />

                    {/*<div className="mt-6">*/}
                    {/*    <DeliveryStep*/}
                    {/*        selectedDelivery={selectedDelivery}*/}
                    {/*        onConfirm={handlePayment}*/}
                    {/*    />*/}
                    {/*</div>*/}

{/*<SuccessPage/>*/}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};