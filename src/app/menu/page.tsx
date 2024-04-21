"use client"

import ItemDetail from '@/components/ItemDetail'
import Drawer from '@/components/drawer'
import Hero from '@/components/hero'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalRedux/store'


  
const Page=()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAdded = useSelector((state: RootState) => state.cart.isAdded);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    return (
        <div className=" h-screen flex flex-col relative">
        {/* Hero component fixed at the top */}
        <Hero compName="Food Menu" />
  
        {/* Main content area with scrolling */}
        <div className="flex-grow overflow-y-auto ">
          {/* Your other content or components here */}
  
          {/* Drawer component placed within the scrollable content */}
          <Drawer onOpen={openModal}/>
        </div>
        <div className={`${isModalOpen? " absolute top-0  translate-y-0 block ": " translate-y-full hidden"} w-full  transition duration-500 ease-in-out`}>  <ItemDetail onClose={closeModal} /> </div>
        {isAdded && (
     <div className="fixed top-9 left-1/2  text-nowrap -translate-x-1/2 bg-[#5A8A2A] text-white rounded-lg px-4 py-2 z-50 transform transition-transform duration-300 ease-in-out translate-y-0">
        Item Successfully Added To Order List
      </div>
      )} 
      </div>
    )
}
export default Page
