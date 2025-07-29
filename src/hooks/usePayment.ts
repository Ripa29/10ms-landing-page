'use client';

import { useState } from 'react';
import type { PaymentMethod, DeliveryOption, PaymentState } from '@/types/payment';

interface PaymentResult {
    success: boolean;
    error?: string;
}

export const usePayment = () => {
    const [paymentState, setPaymentState] = useState<PaymentState>({
        selectedMethod: null,
        selectedDelivery: null,
        processing: false,
    });

    const selectPaymentMethod = (method: PaymentMethod) => {
        setPaymentState(prev => ({
            ...prev,
            selectedMethod: method,
        }));
    };

    const selectDeliveryOption = (delivery: DeliveryOption) => {
        setPaymentState(prev => ({
            ...prev,
            selectedDelivery: delivery,
        }));
    };

    const processPayment = async (): Promise<PaymentResult> => {
        setPaymentState(prev => ({ ...prev, processing: true }));

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setPaymentState(prev => ({ ...prev, processing: false }));
            return { success: true };
        } catch (error) {
            console.error(error);
            setPaymentState(prev => ({ ...prev, processing: false }));
            return { success: false, error: 'Payment failed' };
        }
    };

    return {
        ...paymentState,
        selectPaymentMethod,
        selectDeliveryOption,
        processPayment,
    };
};