export interface PaymentMethod {
    id: string;
    name: string;
    icon: string;
    type: 'bkash' | 'card' | 'nagad' | 'rocket';
}

export interface DeliveryOption {
    id: string;
    name: string;
    cost: number;
    duration: string;
    description: string;
}

export interface PaymentState {
    selectedMethod: PaymentMethod | null;
    selectedDelivery: DeliveryOption | null;
    processing: boolean;
}