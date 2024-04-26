"use client"
import Image from 'next/image'
import React from 'react'
import Search from './search'
import { IoIosArrowBack } from "react-icons/io";
import MenuComponent from './SideBar';
import CartDrawer from './cartDrawer';
import Link from 'next/link';
interface HeroProps {
    compName: string;
    setDrawer?:number;
  }
const Hero: React.FC<HeroProps>  = ({ compName, setDrawer }) => {
  let direction 
  if(compName === 'Food Menu' ){
    direction="/home"
  }else if(compName === 'Order Cart'){
    direction="/menu"
  }else{
    direction="/orders"
  }
  return (
    <div>
       <div
        style={{
          backgroundImage: `url(${"/images/hero.png"})`,
        }}
        className="  relative h-48 mb-10">
     
  
      
          <div className={` absolute w-[100%] h-12 -mt-4  top-[100%] inset-x-1 mx-auto ${compName === "Order Cart"? "block" : "hidden"}`}>
            <CartDrawer  />
          </div>
        <div className=' absolute top-0 flex justify-between w-full p-5 mt-12'>
        <div className="bg-white   p-2 w-12 h-12 rounded-lg flex justify-center items-center text-3xl ">
          <Link href={direction}>
          
          <IoIosArrowBack />
          </Link>
          </div>
          <div className='   text-white flex justify-center items-center text-2xl  ' >
            {compName}
          </div>
          <div >

            <MenuComponent/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
