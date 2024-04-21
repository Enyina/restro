"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface ThankyouProps {
  isOpen: boolean;
  onClose: () => void;
}

const Thankyou: React.FC<ThankyouProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 bg-opacity-50 bg-gray-900 flex justify-center items-center ${!isOpen && 'hidden'}`}
    >
      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-center items-center w-[345px] h-[456px] gap-7">
        <Image src="/images/thumps-up.png" alt="Thank You" width={143} height={150} className=" mx-auto mb-4" />

        {/* <p className="text-xl font-bold text-center mb-4">Thank you for your review!</p> */}
        <p className="text-black text-base text-center">Thank you for your time, your review has been sent successfully.</p>

        <Link href="/home">
          <button className=" bg-Primary_color text-white font-bold py-2 px-10 rounded-md ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
