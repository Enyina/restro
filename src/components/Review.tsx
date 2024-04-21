"use client";
import React, { useState } from "react";
import Thankyou from "./Thankyou";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";

interface ReviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const Review: React.FC<ReviewProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starCount, setStarCount] = useState(0);

  //   if (!isOpen) return null;

  const handleStarCount = (starCount: number) => {
    setStarCount(starCount);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 bg-opacity-50 bg-gray-900 flex justify-center items-center ${
        !isOpen && "hidden"
      }`}>
      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-center items-center gap-5 w-80">
        <h2 className="text-xl font-bold mb-4">Leave a review</h2>

        <div className="stars flex gap-2">
          <div>
            <MdOutlineStar
              onClick={() => handleStarCount(1)}
              style={{
                color: starCount >= 1 ? "orange" : "",
                width: "32px",
                height: "32px",
                display: starCount >= 1 ? "block" : "none",
              }}
            />
            <IoStarOutline
              onClick={() => handleStarCount(1)}
              style={{
                width: "32px",
                height: "32px",
                display: starCount < 1 ? "block" : "none",
              }}
            />
          </div>
          <div>
            <MdOutlineStar
              onClick={() => handleStarCount(2)}
              style={{
                color: starCount >= 2 ? "orange" : "",
                width: "32px",
                height: "32px",
                display: starCount >= 2 ? "block" : "none",
              }}
            />
            <IoStarOutline
              onClick={() => handleStarCount(2)}
              style={{
                width: "32px",
                height: "32px",
                display: starCount < 2 ? "block" : "none",
              }}
            />
          </div>
          <div>
            <MdOutlineStar
              onClick={() => handleStarCount(3)}
              style={{
                color: starCount >= 3 ? "orange" : "",
                width: "32px",
                height: "32px",
                display: starCount >= 3 ? "block" : "none",
              }}
            />
            <IoStarOutline
              onClick={() => handleStarCount(3)}
              style={{
                width: "32px",
                height: "32px",
                display: starCount < 3 ? "block" : "none",
              }}
            />
          </div>
          <div>
            <MdOutlineStar
              onClick={() => handleStarCount(4)}
              style={{
                color: starCount >= 4 ? "orange" : "",
                width: "32px",
                height: "32px",
                display: starCount >= 4 ? "block" : "none",
              }}
            />
            <IoStarOutline
              onClick={() => handleStarCount(4)}
              style={{
                width: "32px",
                height: "32px",
                display: starCount < 4 ? "block" : "none",
              }}
            />
          </div>
          <div>
            <MdOutlineStar
              onClick={() => handleStarCount(5)}
              style={{
                color: starCount >= 5 ? "orange" : "",
                width: "32px",
                height: "32px",
                display: starCount >= 5 ? "block" : "none",
              }}
            />
            <IoStarOutline
              onClick={() => handleStarCount(5)}
              style={{
                width: "32px",
                height: "32px",
                display: starCount < 5 ? "block" : "none",
              }}
            />
          </div>
        </div>

        <input
          type="text"
          className="w-full pb-28 border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-1 focus:ring-Primary_color/100"
          placeholder="Comment"
        />

        <button
          className=" bg-Primary_color text-white font-bold py-2 px-10 rounded-md mt-4 w-full flex justify-center items-center"
          onClick={openModal}>
          Submit
        </button>

        <Thankyou isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Review;
