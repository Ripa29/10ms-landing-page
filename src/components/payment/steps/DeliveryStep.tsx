'use client';
import React from 'react';
import { Button } from '../../ui/Button';
import { DeliveryOptions } from '../DeliveryOptions';
import { useLocale } from '@/hooks/useLocale';

interface DeliveryOption {
    id: string;
    name: string;
    cost: number;
}

interface DeliveryStepProps {
    selectedDelivery: DeliveryOption | null;
    onConfirm: () => void;
}

export const DeliveryStep: React.FC<DeliveryStepProps> = ({
                                                              selectedDelivery,
                                                              onConfirm,
                                                          }) => {
    const { t } = useLocale();

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{t('delivery.title')}</h3>
                <p className="text-gray-600">{t('delivery.subtitle')}</p>
            </div>

            <DeliveryOptions />

            <Button onClick={onConfirm} className="w-full" disabled={!selectedDelivery}>
                {t('delivery.confirm')}
            </Button>
        </div>
    );
};
