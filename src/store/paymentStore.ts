'use client';
import { create } from 'zustand';
import type { PaymentMethod, DeliveryOption } from '@/types/payment';

interface PaymentStore {
    selectedMethod: PaymentMethod | null;
    selectedDelivery: DeliveryOption | null;
    processing: boolean;
    orderData: any | null;
    selectPaymentMethod: (method: PaymentMethod) => void;
    selectDeliveryOption: (delivery: DeliveryOption) => void;
    setProcessing: (processing: boolean) => void;
    setOrderData: (data: any) => void;
    reset: () => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
    selectedMethod: null,
    selectedDelivery: null,
    processing: false,
    orderData: null,
    selectPaymentMethod: (selectedMethod) => set({ selectedMethod }),
    selectDeliveryOption: (selectedDelivery) => set({ selectedDelivery }),
    setProcessing: (processing) => set({ processing }),
    setOrderData: (orderData) => set({ orderData }),
    reset: () => set({
        selectedMethod: null,
        selectedDelivery: null,
        processing: false,
        orderData: null,
    }),
}));