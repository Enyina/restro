"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface PaymentMethodModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  onClose,
  isModalOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    // Close modal when clicking outside (excluding modal_content)
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains('payment_modal_content') === false) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isModalOpen, closeModal]);

  // No need for console.log here (remove if not required)

  return (
    <div
      className={`${
        isModalOpen ? 'fixed top-0 left-0 w-full h-screen z-50 bg-opacity-50 bg-gray-900 flex justify-center items-center' : 'hidden'
      }`}
    >
      <div className="modal-overlay bg-transparent cursor-pointer" onClick={closeModal} />
      <div className="payment_modal_content bg-white rounded-lg p-3 shadow-md w-72 h-[299px] flex flex-col items-center">
        <p className="modal-title text-xl font-bold mb-4">Select Payment Method</p>
        <div className=" grid grid-cols-2 gap-4">
          {/* Add onClick handlers to each  item */}
          <div className=" cursor-pointer hover:bg-gray-100 p-1 " onClick={closeModal}>
            <Image width={75} height={75} src="/images/CASH.png" alt="" className="mx-auto" />
            <p className="text-center mt-2">Cash</p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 p-1" onClick={closeModal}>
            <Image width={75} height={75} src="/images/Tf.png" alt="" className="mx-auto" />
            <p className="text-center mt-2">Transfer</p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 p-1" onClick={closeModal}>
            <Image width={75} height={75} src="/images/POS.png" alt="" className="mx-auto" />
            <p className="text-center mt-2">POS</p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 p-1" onClick={closeModal}>
            <Image width={75} height={75} src="/images/WAllet.png" alt="" className="mx-auto" />
            <p className="text-center mt-2">Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
