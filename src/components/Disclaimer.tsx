"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface DisclaimerModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  onClose,
  isModalOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    onClose();
  };
  const proceedToTracking = () => {
    // onClose();
  };

//   useEffect(() => {
//     // Close modal when clicking outside (excluding modal_content)
//     const handleClickOutside = (event: MouseEvent) => {
//       if ((event.target as HTMLElement).classList.contains('payment_modal_content') === false) {
//         closeModal();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, isModalOpen, closeModal]);

  // No need for console.log here (remove if not required)

  return (
    <div
      className={`${
        isModalOpen ? 'fixed top-0 left-0 w-full h-screen z-50 bg-opacity-50 bg-gray-900 flex justify-center items-center' : 'hidden'
      }`}
    >
      {/* <div className=" bg-transparent cursor-pointer"  /> */}
      <div className="payment_modal_content bg-white rounded-lg p-4 shadow-md w-72 h-[299px] flex flex-col items-center relative">
      <Image
            src={"/images/iconX.png"}
            alt=""
            width={18}
            height={18}
            className=" absolute top-6 right-6 cursor-pointer"
            onClick={onClose}
          />
        <div className=" m-auto flex flex-col justify-center items-center gap-4 text-center" >
       <p className=''>Since you will not be able to cancel this order again after you click Proceed Now, please review your order.</p>

      

       <button className=' rounded-xl bg-Primary_color  py-2 px-10 text-nowrap' > <Link href="/order-tracking" className=''>Proceed Now       </Link></button>

        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
