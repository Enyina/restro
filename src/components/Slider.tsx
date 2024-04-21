"use client";

import { Slide } from "@/interfaces/Slider.interface";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { useClient } from 'next/data-client';

const Slider: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(3);
  //   const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  //   const client = useClient();
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    // <div className="max-w-[1400p] h-[400px] w-full m-auto py-16 relative group">
    //   {/* <div > */}

    //   <div
    //     style={{
    //       backgroundImage: `url(${
    //         slides[currentSlide].image
    //           ||'public/images/temp/noImage.jpeg'
    //       })`,
    //     }}
    //     className="w-ful h-full rounded-2xl bg-center duration-500 bg-cover ">
    //     <div className="absolute min-w-min right-[20%] top-[36%] text-white  bg-gray-900   bg-opacity-50  rounded-lg p-1.5">
    //       <p className="text-2xl m-1">{slides[currentSlide].name}</p>
    //       <p className="m-1 text-2xl">{slides[currentSlide].price}</p>
    //       <button
    //         className="bg-Primary_color text-Secondry_color rounded-lg m-1
    // p-2">
    //         Have a taste
    //       </button>
    //     </div>
    //   </div>

    //   {/* // Left Arrow */}
    //   <div
    //     onClick={handlePrevSlide}
    //     className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/30 text-Primary_color cursor-pointer">
    //     <BsChevronCompactLeft size={30} />
    //   </div>
    //   {/* // Right Arrow */}
    //   <div
    //     onClick={handleNextSlide}
    //     className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/30 text-Primary_color cursor-pointer">
    //     <BsChevronCompactRight size={30} />
    //   </div>
    // </div>

    <div
      style={{
        backgroundImage: `url(${"/images/hero.png"})`,
      }}
      className="w-full h-[360px] p-auto m-auto flex justify-center bg-center items-center bg-cover outline-none bg-opacity-80 rounded-t-lg     relative group">
      <div
        className={`  w-full h-full  items-center justify-center p-2 flex mt-12 mb-7`}>
        <div
          style={{
            backgroundImage: `url(${
              slides[0].image || "/images/temp/noImage.jpeg"
            })`,
          }}
          className={`${styles.sliderImg} slider-img ${
            currentSlide === slides.indexOf(slides[0])
              ? "active: h-52 w-60"
              : "h-36 w-5"
          } m-1 bg-cover duration-500 relative rounded-md`}>
          {currentSlide === slides.indexOf(slides[0]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[0].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[0].price}
              </h2>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${
              slides[1].image || "/images/temp/noImage.jpeg"
            })`,
          }}
          className={`${styles.sliderImg} slider-img ${
            currentSlide === slides.indexOf(slides[1])
              ? "active: h-52 w-60"
              : "h-40 w-5"
          } m-1 bg-cover duration-500 relative rounded-md`}>
          {currentSlide === slides.indexOf(slides[1]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[1].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[1].price}
              </h2>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${
              slides[2].image || "/images/temp/noImage.jpeg"
            })`,
          }}
          className={` ${
            currentSlide === slides.indexOf(slides[2])
              ? "active: h-52 w-60"
              : "h-40 w-5"
          } m-1 bg-cover duration-500 relative rounded-md`}>
          {currentSlide === slides.indexOf(slides[2]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[2].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[2].price}
              </h2>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${
              slides[3].image || "/images/temp/noImage.jpeg"
            })`,
          }}
          className={`${styles.sliderImg} slider-img ${
            currentSlide === slides.indexOf(slides[3])
              ? "active: h-52 w-60"
              : "h-52 w-5"
          } m-1 bg-cover duration-500 relative rounded-md`}>
          {currentSlide === slides.indexOf(slides[3]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[3].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[3].price}
              </h2>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${
              slides[4].image || "public/images/temp/noImage.jpeg"
            })`,
          }}
          className={`${styles.sliderImg} slider-img ${
            currentSlide === slides.indexOf(slides[4])
              ? "active: h-52 w-60"
              : "h-48 w-5"
          } m-1 bg-cover duration-500 relative rounded-md`}>
          {currentSlide === slides.indexOf(slides[4]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[4].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[4].price}
              </h2>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${
              slides[5].image || "/images/temp/noImage.jpeg"
            })`,
            //   objectFit: 'cover',
          }}
          className={`   m-1 bg-cover transition duration-700 ease-in-out relative rounded-md ${
            currentSlide === slides.indexOf(slides[5])
              ? "active: h-52 w-60"
              : "h-40 w-5"
          }`}>
          {currentSlide === slides.indexOf(slides[5]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[5].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[5].price}
              </h2>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${
              slides[6].image || "/images/temp/noImage.jpeg"
            })`,
          }}
          className={`${
            styles.sliderImg
          } slider-img   m-1 bg-cover duration-500 relative rounded-md  ${
            currentSlide === slides.indexOf(slides[6])
              ? "active: h-52 w-60"
              : "h-36 w-5"
          }`}>
          {currentSlide === slides.indexOf(slides[6]) && (
            <div className="absolute bottom-1 left-1">
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[6].name}
              </h2>
              <h2 className="font-bold text-white text-lg uppercase">
                {slides[6].price}
              </h2>
            </div>
          )}
        </div>
      </div>
      {/* // Left Arrow */}
      <div
        onClick={handlePrevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-1 bg-[#F36829]/80 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} />
      </div>
      {/* // Right Arrow */}
      <div
        onClick={handleNextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-1  bg-[#F36829]/80 text-white cursor-pointer">
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default Slider;
