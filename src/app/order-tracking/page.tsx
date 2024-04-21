"use client";
import Review from "@/components/Review";
import Hero from "@/components/hero";
import React, { useState } from "react";
const Page = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState(0);
    setTimeout(() => setOrderStatus(orderStatus + 1), 5000);
  console.log({ orderStatus });

  const openReviewModal = () => setIsReviewModalOpen(true);
  const closeReviewModal = () => setIsReviewModalOpen(false);
  return (
    <div className=" pb-7">
      <Hero compName="Order Tracking" />

      <div className=" bg-white m-auto w-[90%]  flex flex-col gap-10 p-4 rounded-xl">
        <div className="flex flex-col gap-3">
          <p className=" text-sm text-[#404040] text-wrap">
            Kindly wait for your order to process
          </p>
          <p className="text-sm text-[#404040]">
            {" "}
            Orders Type: <span className="font-bold">Family</span>
          </p>
          <p className="text-sm text-[#404040]">
            Number of Orders: <span className="font-bold">1 Order</span>
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <div className={`flex flex-col items-center gap-1  `}>
              <div
                className={` w-3 h-3 rounded-full bg-gray-400  ${
                  orderStatus >= 1 && "bg-green-700"
                }`}></div>
              <div
                className={` h-20 border-l border-dashed border-gray-400 ${
                  orderStatus >= 1 && "border-green-700"
                }`}></div>
            </div>
            <div className="flex flex-col gap-2  justify-start -mt-1.5">
              <p className=" text-base font-bold text-black">Order Sent</p>
              <p className="text-[11px] text-[#404040]">
                Your order has been placed
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className={`flex flex-col items-center gap-1  `}>
              <div
                className={` w-3 h-3 rounded-full bg-gray-400  ${
                  orderStatus >= 2 && "bg-green-700"
                }`}></div>
              <div
                className={` h-20 border-l border-dashed border-gray-400 ${
                  orderStatus >= 2 && "border-green-700"
                }`}></div>
            </div>
            <div className="flex flex-col gap-2  justify-start -mt-1.5">
              <p className=" text-base font-bold text-black">Order Confirmed</p>
              <p className="text-[11px] text-[#404040]">
                The waiter has confirmed your order
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className={`flex flex-col items-center gap-1  `}>
              <div
                className={` w-3 h-3 rounded-full bg-gray-400  ${
                  orderStatus >= 3 && "bg-green-700"
                }`}></div>
              <div
                className={` h-20 border-l border-dashed border-gray-400 ${
                  orderStatus >= 3 && "border-green-700"
                }`}></div>
            </div>
            <div className="flex flex-col gap-2  justify-start -mt-1.5">
              <p className=" text-base font-bold text-black">
                Preparing your order
              </p>
              <p className="text-[11px] text-[#404040]">
                Your order has been been sent to the kitchen.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className={`flex flex-col items-center gap-1  `}>
              <div
                className={` w-3 h-3 rounded-full bg-gray-400  ${
                  orderStatus >= 4 && "bg-green-700"
                }`}></div>
              {/* <div
                className={` h-20 border-l border-dashed border-gray-400 ${
                  orderStatus >= 1 && "border-green-700"
                }`}></div> */}
            </div>
            <div className="flex flex-col gap-2  justify-start -mt-1.5">
              <p className=" text-base font-bold text-black">Order is ready</p>
              <p className="text-[11px] text-[#404040]">
                Your order is ready, you’ll be getting it in a bit.
              </p>
            </div>
          </div>
        </div>
        {orderStatus < 4 && (
          <div className="flex flex-col gap-3 mb-5">
            <p className=" text-sm text-[#727272]">
              Estimated Preparation Time{" "}
            </p>
            <p className=" font-bold text-black text-2xl">30 mins</p>
          </div>
        )}
        {orderStatus >= 4 && (
          <>
            <p className=" text-sm text-black">
              Kindly leave a review if you find our service helpful
            </p>
            <div className="flex gap-5 justify-between mb-5">
              <button
                className=" bg-Primary_color flex justify-center items-center p-3 rounded-lg text-white w-40"
                onClick={openReviewModal}>
                Leave A Review
              </button>
              <button className="  flex justify-center items-center p-3 rounded-lg text-Primary_color border border-Primary_color w-40">
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
      <Review isOpen={isReviewModalOpen} onClose={closeReviewModal} />
    </div>
  );
};
export default Page;
