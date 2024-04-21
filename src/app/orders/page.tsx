"use client";
import DisclaimerModal from "@/components/Disclaimer";
import Hero from "@/components/hero";
import PaymentMethodModal from "@/components/paymentModal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import {
  removeFromFamilyOrder,
  removeFromSingleOrder,
} from "../GlobalRedux/features/cart/cartSlice";
const Page = () => {
  const [state, setState] = useState("single");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(false);
  const [isFamilyItemOpen, setIsFamilyItemOpen] = useState(10000);
  const dispatch = useDispatch();
  const drawerTab = useSelector((state: RootState) => state.cart.orderTab);
  const ord = useSelector((state: RootState) => state.cart.singleOrder);
  console.log({ord});
  

  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);
  const openDisclaimerModal = () => setIsDisclaimerModalOpen(true);
  const closeDisclaimerModal = () => setIsDisclaimerModalOpen(false);
  console.log({ isFamilyItemOpen });

  const setDrawer = (index: number) => {
    setState("index");

    console.log(index);
  };
  useEffect(() => {
    setState(drawerTab);
  }, [drawerTab]);
  const singleOrder = [
    {
      id: 1,
      name: "Black Coffee",
      size: "Grande (24inc Cup)",
      totalPrice: "6,000",
      quantity: 2,
      price: "3,500",
      image: "/images/temp/coff.png",
    },
    {
      id: 2,
      name: "Chiken Culet",
      price: "3,000",
      totalPrice: "9,000",
      quantity: 3,
      image: "/images/temp/culet.png",
    },
  ];

  const familyOrder = [
    [
      {
        id: 1,
        name: "Black Coffee",
        size: "Grande (24inc Cup)",
        price: "3,500",
        totalPrice: "6,000",
        quantity: 2,
        image: "/images/temp/coff.png",
      },
      {
        id: 2,
        name: "Black Coffee",
        price: "3,000",
        totalPrice: "9,000",
        quantity: 3,
        image: "/images/temp/culet.png",
      },
    ],
    [
      {
        id: 1,
        name: "Black Coffee",
        size: "Grande (24inc Cup)",
        price: "3,500",
        totalPrice: "9,000",
        quantity: 3,
        image: "/images/temp/coff.png",
      },
      {
        id: 2,
        name: "Black Coffee",
        price: "3,000",
        totalPrice: "9,000",
        quantity: 3,
        image: "/images/temp/culet.png",
      },
    ],
  ];
  // Calculate the sum of totalPrice values
const singleOrderTotalPriceSum = singleOrder.reduce((acc, item) => acc + Number(item.totalPrice.replace(/,/g, '')), 0);
const familyOrderTotalPriceSum = familyOrder.flat().reduce((sum, item) => sum + parseInt(item.totalPrice.replace(/,/g, ''), 10), 0);

  return (
    <div className="  ">
      <Hero compName="Order Cart" />

      <div className=" w-[89%] m-auto flex flex-col justify-center gap-10 ">
        {state === "single" && (
          <div className="flex flex-col gap-10">
            <div className="pt-12 flex flex-col gap-7 ">
              {singleOrder.map((order) => (
                <div
                  key={order.id}
                  className=" bg-white flex gap-3 items-center p-3 rounded-2xl relative">
                  <Image src={order.image} alt="" width={115} height={115} />
                  <div className="flex flex-col gap-2.5">
                    <p className=" text-base text-black font-bold">
                      {order.name}
                    </p>
                    <p className="text-[#404040] text-[10px]">{order.size}</p>
                    <p className="text-[#5A8A2A] text-[12px] font-bold">
                      NGN {order.price}
                    </p>
                  </div>
                  <div className=" absolute right-4 top-6 text-3xl text-Primary_color">
                    <MdDelete
                      onClick={() => dispatch(removeFromSingleOrder({itemId:order.id}))}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-9">
              <p
                className=" font-bold text-black text-sm
          mb-3">
                Leave An Order Note
              </p>
              <input
                type="text"
                className="w-full  text-wrap pb-28 pl-3 pt-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Type Here..."
              />
            </div>
          </div>
        )}

        {state === "family" && (
          <div className="flex flex-col gap-10">
            <div className="pt-12 flex flex-col gap-7 ">
              {familyOrder.map((orders, index) => (
                <div
                  key={index}
                  className=" bg-white flex flex-col gap-4  p-4 rounded-2xl relative">
                  <div className="flex flex-col">
                    <h2 className=" text-black font-bold text-base">Order {index + 1}</h2>
                    {isFamilyItemOpen !== index && <p className="text-[#404040] text-[10px]">2 Packaged Orders</p>}
                  </div>
                  <div>
                    <div className=" absolute right-4 top-3 text-3xl text-Primary_color">
                      <MdDelete
                        onClick={() => dispatch(removeFromFamilyOrder(index))}
                      />
                    </div>

                    { isFamilyItemOpen === index && <div>
                        {orders.map(
                      (order, index) =>
                       (
                          <div
                            key={index}
                            className=" flex flex-col gap-1 justify-between w-full  py-3">
                          <div className="flex gap-5 w-full items-end ">
                          <div className=" flex flex-col   text-nowrap w-3/4 gap-1">
                              <p className=" text-xs text-[#292929] ">
                            
                                {order.name}
                              </p>
                              <p className=" text-[#404040] text-[10px]">{order.size}</p>
                            </div>
                            {/* <div className=""> */}
                            <p className=" text-[#5A8A2A] text-nowrap text-xs ">
                              NGN {order.totalPrice}
                            </p>
                            {/* </div> */}
                          </div>
                            <hr style={{color:"black "}} />
                          </div>
                        )
                    )}   
                        </div>}
                    
                  </div>
                  {isFamilyItemOpen === index && (
                    <div className="mb-9">
                      <p
                        className=" font-bold text-black text-xs
          mb-3">
                        Leave An Order Note
                      </p>
                      <input
                        type="text"
                        className="w-full  text-wrap pb-28 pl-3 pt-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                        placeholder="Type Here..."
                      />
                    </div>
                  )}
                  <div className="flex justify-between">
                    <p className="text-[#5A8A2A] text-xs">NGN {orders.reduce((sum, item) => sum + parseInt(item.totalPrice.replace(/,/g, ''), 10), 0).toLocaleString()}</p>
                    <div>
                      {isFamilyItemOpen !== index && (
                        <p className="text-[#F36829]  text-xs " onClick={() => setIsFamilyItemOpen(index)}>
                          View Details
                        </p>
                      )}
                      {isFamilyItemOpen === index && (
                        <p  className="text-[#F36829]  text-xs " onClick={() => setIsFamilyItemOpen(10000)}>
                          View Less
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-40 flex items-center mb-16">
                <h2 className=" text-[#F36829] border border-dashed text-sm border-[#F36829] p-3 rounded-xl">Add New Order</h2>
          </div>
          </div>
        )}

        <div className="flex flex-col gap-7 mb-10">
          <p
            className=" underline text-[#408023] text-sm"
            onClick={openPaymentModal}>
            How will you like to Pay?
          </p>
          <div className="flex justify-between">
            <p className="pricing_details_left">Sum Total ({state === "single"? singleOrder.length : familyOrder.length} items)</p>

            <p className="pricing_details_right">N {state === "single"? singleOrderTotalPriceSum.toLocaleString() : familyOrderTotalPriceSum.toLocaleString()}</p>
          </div>
          <div className="flex gap-5">
            <button
              className=" bg-Primary_color flex justify-center items-center p-3 rounded-lg text-white w-40 "
              onClick={openDisclaimerModal}>
              Place Order
            </button>
            <button className="  flex justify-center items-center p-3 rounded-lg text-Primary_color border border-Primary_color w-40">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
      <PaymentMethodModal
        onClose={closePaymentModal}
        isModalOpen={isPaymentModalOpen}
      />
      <DisclaimerModal
        onClose={closeDisclaimerModal}
        isModalOpen={isDisclaimerModalOpen}
      />
    </div>
  );
};
export default Page;
