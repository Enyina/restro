"use client"
import Image from "next/image";
import React from "react";
// types.ts
export interface Recommendation {
  id: number; // Replace with a suitable unique identifier type (e.g., string if using UUIDs)
  name: string;
  image: string; // URL or path to the image
  price: number;
}

const Recommendations: React.FC<{ recommendations: Recommendation[] }> = ({
  recommendations,
}) => {
  return (
    <div className="w-full">
      <div className=" text-black text-sm font-bold">
        <p>Recommendations</p>
      </div>
      <div className=" text-black text-[11px] mt-2 ">
        <p>What would you like to add?</p>
      </div>

      <div className=" mt-4 flex gap-8  overflow-x-auto  ">
        {recommendations.map((item: Recommendation) => (
          <div
            key={item.id || Math.random()}
            className=" flex flex-col items-center justify-center">
            <div className=" flex-1  flex  items-center justify-center h-24 w-24">
              <Image
                src={item.image}
                alt=""
                width={110}
                height={110}
                className=" w-20 h-20 rounded-full"
              />
            </div>
            <div className="flex-1 flex flex-col items-center mt-4 gap-1 text-nowrap">
              <p className=" text-black text-sm font-bold">{item.name}</p>
              <p className="text-[#5A8A2A] text-[11px]">NGN {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
