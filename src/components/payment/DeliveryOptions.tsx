'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTruck, FiClock } from 'react-icons/fi';
import { usePayment } from '@/hooks/usePayment';
import { DELIVERY_OPTIONS } from '@/lib/constants';

export const DeliveryOptions: React.FC = () => {
    const { selectedDelivery, selectDeliveryOption } = usePayment();

    return (
        <div className="space-y-4">
            {DELIVERY_OPTIONS.map((option) => (
                <motion.div
                    key={option.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => selectDeliveryOption(option)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedDelivery?.id === option.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                            <FiTruck size={24} className="text-primary-600 mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-900">{option.name}</h4>
                                <p className="text-sm text-gray-600">{option.description}</p>
                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <FiClock size={14} />
                                        <span>{option.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-semibold text-gray-900">
                                ৳{option.cost}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};