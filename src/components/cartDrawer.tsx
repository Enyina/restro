"use client";
import { switchOrderTab } from "@/app/GlobalRedux/features/cart/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const CartDrawer = () => {
  const [drawerState, setDrawerState] = useState("single");
  const dispatch = useDispatch()

  dispatch(switchOrderTab({tab:drawerState}))
  const action = (tab: string) => {
    setDrawerState(tab);
    console.log(tab);
  };
  return (
    // <div className=" bg-black ">
      
      <div className=" mb-8 w-full  flex justify-center">
        <div className=" bg-white flex justify-center gap-2 rounded-3xl py-2 px-3.5 text-nowrap shadow-md">
          <button
            type="button"
            onClick={() => action("single")}
            className={`
              tab flex justify-center items-center p-2 rounded-2xl cursor-pointer
              ${drawerState === "single" ? " bg-Primary_color text-white" : "text-gray-700"}
            `}>
            <p
              className={`${
                drawerState === "single" ? "font-bold" : "text-gray-700"
              } `}>
              Single Order
            </p>
          </button>
          <button
            type="button"
            onClick={() => action("family")}
            className={`
              tab flex justify-center items-center p-2 rounded-2xl cursor-pointer
              ${drawerState === "family" ? " bg-Primary_color text-white" : "text-gray-700"}
            `}>
            <p
              className={`${
                drawerState === "family" ? "font-bold" : "text-gray-700"
              } `}>
              Family Order
            </p>
          </button>
        </div>
      </div>
    // </div>
  );
};
export default CartDrawer;
