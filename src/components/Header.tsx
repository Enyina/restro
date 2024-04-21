"use client";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Search from "./search";
import Image from "next/image";
import Slider from "./Slider";
import { Slide } from "@/interfaces/Slider.interface";
import MenuComponent from "./SideBar";

const Header: React.FC<{ slides: Slide[] }> = ({ slides, ...otherProps }) => {
  // Assuming component name is Header
  const [isSticky, setIsSticky] = useState(false); // State to track stickiness
  const [isHeroVisible, setIsHeroVisible] = useState(true); // State to track hero visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Here:", { scrollPosition });
      setIsSticky(scrollPosition > 200); // Set sticky state after 200px scroll
      setIsHeroVisible(scrollPosition < 200); // Set hero visibility state
      console.log({ isSticky });
      console.log({ isHeroVisible });
    };

    window.addEventListener("scroll", handleScroll); // Add event listener

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [isHeroVisible, isSticky]); // Empty dependency array to run effect only once

  return (
    <div className="relative">
      {isHeroVisible ? ( // Conditionally render hero section
      <div className={`relative inset-0 ${isSticky ? "hidden" : ""}`}>
        {" "}
        {/* Sticky logic */}
        <Slider slides={slides} />
        <div className="absolute w-[89%] h-12 -mt-4 inset-x-1 mx-auto">
          <Search />
        </div>
        <div className="bg-transparent absolute top-6 left-4">
          <h1 className="text-xl text-white/85">Delicious Meals</h1>
          <h3 className="text-base font-light leading-6 text-left text-white/40">
            What would you like to order?
          </h3>
        </div>
        <div className=" absolute top-4 right-1 p-2 rounded-lg">
          {/* <Image src="/images/menu.png" alt="" width={60} height={60} /> */}
          <MenuComponent/>
        </div>
      </div>

       ):(   
      <div
        className={`  
        ${
          isSticky ? "fixed top-0 left-0 w-full z-50" : "hidden"
        }`
        }>
        <div
          className={`relative h-40 bg-cover bg-no-repeat `} // Hero styles
          style={{ backgroundImage: `url(${"/images/hero.png"})` }} // Background image
        >
          <div className="absolute w-[89%] h-12 -mt-4 top-[100%] inset-x-1 mx-auto">
            <Search />
          </div>
          <div className="bg-transparent absolute top-12 left-4">
            <h1 className="text-3xl text-white font-bold">Delicious Meals</h1>
            <h3 className="font-light text-sm leading-6 text-#C5C5C5 text-white/40">
              What would you like to order?
            </h3>
          </div>
          <div className=" absolute top-9 right-5 p-2 w-12 h-12 rounded-lg">
            {/* <Image src="/images/menu.png" alt="" width={60} height={60} /> */}
            <MenuComponent/>
          </div>
        </div>
      </div>
      )} 
      {/* <Header slides={slides}/> */}
    </div>
  );
};

export default Header;
