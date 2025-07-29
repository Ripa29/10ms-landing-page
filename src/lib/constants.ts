import type { DeliveryOption, PaymentMethod } from '@/types/payment';

export const COURSE_PRICE = 1000;
export const COURSE_DISCOUNT_PRICE = 800;
export const DELIVERY_OPTIONS: DeliveryOption[] = [
    {
        id: 'pathao',
        name: 'Pathao Delivery',
        cost: 60,
        duration: '1-2 days',
        description: 'Fast delivery within Dhaka',
    },
    {
        id: 'SpeedFast',
        name: 'SpeedFast Delivery',
        cost: 120,
        duration: '3-5 days',
        description: 'Fast delivery within all district',
    },
    {
        id: 'redx',
        name: 'RedX Delivery',
        cost: 200,
        duration: '10-15 days',
        description: 'Nationwide delivery',
    },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
    {
        id: 'bkash',
        name: 'bKash',
        icon: '/payment/bkash.png',
        type: 'bkash',
    },
    {
        id: 'card',
        name: 'Credit/Debit Card',
        icon: '/payment/card.png',
        type: 'card',
    },
    {
        id: 'nagad',
        name: 'Nagad',
        icon: '/payment/nagad.png',
        type: 'nagad',
    },
    {
        id: 'rocket',
        name: 'Rocket',
        icon: '/payment/rocket.png',
        type: 'rocket',
    },
];