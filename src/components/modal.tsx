"use client"
import React, { useState, useRef, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const Modals: React.FC<ModalProps> = ({
  children,
  onOpen,
  onClose,
  isOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenModal = () => {
    setIsAnimating(true);
    onOpen();
  };

  const handleCloseModal = () => {
    setIsAnimating(true);
    onClose();
  };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         handleCloseModal();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('click', handleClickOutside);
//     } else {
//       document.removeEventListener('click', handleClickOutside);
//     }

//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isOpen]);

  return (
    <div
      ref={modalRef}
      className={`fixed inset-x-0 bottom-0 z-50 overflow-auto px-4 py-6 md:inset-auto md:p-4 md:w-full md:max-w-2xl transition duration-300 ease-in-out ${
        isOpen ? '' : 'translate-y-full'
      }`}
    >
      {children}
      {!isAnimating && (
        <button
          type="button"
          className="absolute top-right pt-1 pr-1 md:p-4"
          onClick={handleCloseModal}
        >
          <span className="sr-only">Close modal</span>
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-white hover:text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.707 3.307a1 1 0 00-1.414 0L0 6.014l4.293 4.293a1 1 0 001.414-1.414L2.307 4.707l2.393-2.393a1 1 0 000-1.414zM15.293 4.707a1 1 0 00-1.414 0L16 6.014l-4.293 4.293a1 1 0 001.414 1.414L17.693 4.707l-2.393-2.393a1 1 0 00-1.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Modals;
