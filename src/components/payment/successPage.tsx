'use client';
import React, { useState } from 'react';
import {ConfirmationStep} from "@/components/payment/steps/ConfirmationStep";


const SuccessPage = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);

    };

    const formatPrice = (price: number) => `৳ ${price.toLocaleString()}`;

    return (
        <>
            {show && (
                <ConfirmationStep
                    courseTitle="IELTS Mastery Course"
                    price={1499}
                    formatPrice={formatPrice}
                    onClose={handleClose}
                />
            )}
        </>
    );
};

export default SuccessPage;
