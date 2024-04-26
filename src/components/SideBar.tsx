"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MenuComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log({isOpen});
    
  };

  return (
    <>
      <div className="bg-white    p-2 w-12 h-12 rounded-lg">
        <Image
          onClick={toggleMenu}
          src="/images/menu.png"
          alt=""
          width={60}
          height={60}
        />
      </div>
      {/* {isOpen && ( */}
        <div className={`fixed inset-0 z-50 flex ${isOpen  ? "" :"hidden "}  `}>
          {/* Faded black background */}
          <div
            className="fixed inset-0 bg-black opacity-50 transition duration-200"
            onClick={toggleMenu}></div>
          {/* Sidebar modal */}
          <div className="fixed inset-y-0 left-0 w-3/5 md:w-[40%] lg:w-[30%] xl:w-[20%] bg-white shadow-md transform transition-transform duration-700 ease-in-out ">
            {/* Sidebar content */}
            <div className=" h-screen p-9 flex flex-col justify-between">
              <div className=" gap-9 flex flex-col ">
                <Image
                  src="/images/welcome.png"
                  alt=""
                  width={118}
                  height={118}
                />
                <ul className=" gap-5 flex flex-col text-base font-bold ">
                  <li
                    className={`cursor-pointer ${
                      activeItem === 1 ? "text-[#F36829]" : ""
                    }`}
                    onClick={() => handleClick(1)}>
                    <Link href="/home">Home</Link>
                  </li>
                  <li
                    className={`cursor-pointer ${
                      activeItem === 2 ? "text-[#F36829]" : ""
                    }`}
                    onClick={() => handleClick(2)}>
                    <Link href="/menu">Menu</Link>
                  </li>
                  <li
                    className={`cursor-pointer ${
                      activeItem === 3 ? "text-[#F36829]" : ""
                    }`}
                    onClick={() => handleClick(3)}>
                    <Link href="/orders">Order Cart</Link>
                  </li>
                  <li
                    className={`cursor-pointer ${
                      activeItem === 4 ? "text-[#F36829]" : ""
                    }`}
                    onClick={() => handleClick(4)}>
                    <Link href="/order-tracking">Order Tracking</Link>
                  </li>
                </ul>
              </div>

              {/* Add your menu items here */}

              <div className="gap-5 flex flex-col">
                <div className="  ">
                  <h1 className="font-bold text-lg flex flex-col">
                    Shiro Lagos <span>Hotel</span>
                  </h1>
                  <p className="text-[#727272] text-xs">
                    154 Lekki - Epe Expressway
                  </p>
                </div>

                <h2 className=" text-[#F36829] text-base font-semibold flex justify-start items-start">
                  Ordering From 14b Fourth Floor Connecting Rooms
                </h2>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default MenuComponent;
