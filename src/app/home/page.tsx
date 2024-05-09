"use client"
// import Header from "@/components/Header";
import ItemDetail from "@/components/ItemDetail";
import ScrollableContent from "@/components/Scrollable";
import MenuComponent from "@/components/SideBar";
import Slider from "@/components/Slider";
import Modals from "@/components/modal";
import Search from "@/components/search";
import { Slide } from "@/interfaces/Slider.interface";
import ClientLayout from "@/layouts/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import PopularMeals from "../../../dummyData/popularMeals.json"
import { useDispatch, useSelector } from "react-redux";
import { pushId } from "../GlobalRedux/features/cart/cartSlice";
import { RootState } from "../GlobalRedux/store";

const slides: Slide[] = [
  {
    id: 1,
    name: "Product 1",
    image: "/images/temp/slide6.jpeg",
    description: "Detailed description of product 1",
    price: 99.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "/images/temp/slide7.jpeg",
    description: "Detailed description of product 2",
    price: 99.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "/images/temp/slide3.jpeg",
    description: "Detailed description of product ",
    price: 99.99,
  },
  {
    id: 4,
    name: "Product 4",
    image: "/images/temp/slide5.jpg",
    description: "Detailed description of product ",
    price: 99.99,
  },
  {
    id: 5,
    name: "Product 5",
    image: "/images/temp/slide1.jpeg",
    description: "Detailed description of product ",
    price: 99.99,
  },
  {
    id: 6,
    name: "Product 6",
    image: "",
    description: "Detailed description of product ",
    price: 99.99,
  },
  {
    id: 7,
    name: "Product 7",
    image: "/images/temp/slide4.jpg",
    description: "Detailed description of product ",
    price: 99.99,
  },
  // Add more slides here
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch= useDispatch()
  const isAdded = useSelector((state: RootState) => state.cart.isAdded);
  const handleItemClick = (itemId : number)=>{
    dispatch(pushId({itemId}))
    openModal()
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" w-full">
      {/* HERO */}
      <div  className=" h-screen flex flex-col p-0">
         {" "}
        <div
          style={{
            backgroundImage: `url(${"/images/hero.png"})`,
          }}
          className="relative  z-50 w-full h-60  md:h-72 lg:h-72 xl:h-64 bg-cover  -mt-8">
          <div className="absolute w-[89%] h-12 bottom-0 inset-x-1 -mb-8 mx-auto   ">
          <Search  onOpen={openModal}/>
          </div>
          <div className="bg-transparent absolute top-12 left-4">
            <h1 className="text-3xl  text-white font-bold ">Delicious Meals</h1>
            <h3 className="  font-light text-sm leading-6 text-#C5C5C5  text-white/40">
              What would you like to order?
            </h3>
          </div>
          <div className=" absolute  top-11 right-4  rounded-lg">
          <MenuComponent/>
          </div>

      </div>

      <div className=" flex-grow overflow-y-auto  m-auto  w-[100%] p-6 pt-14 no-scrollbar">
        <div className=" flex justify-between items-center ">
          <h2 className=" text-black text-lg font-bold">Popular Meals</h2>
          <h2 ><Link className=" text-green-600 text-sm underline" href="/menu">View All Menu</Link></h2>
        </div>
     {  PopularMeals.map((meal)=> <div key={meal.id} className="mt-8 bg-white rounded-xl p-2 flex justify-around items-center" onClick={()=>handleItemClick(meal.id)}>
          <Image src={meal.image} alt="" width={130} height={120} className=" rounded-full"/>
          <div className="ml-2 relative">
            <h2 className="  text-black text-base font-bold">{meal.name}</h2>
            <p className=" text-gray-400 my-1 text-xs"> {meal.description}</p>
            <div className=" flex  gap-12 mt-2">
            <h2 className=" text-black text-base font-bold">N {meal.price.toLocaleString()}</h2>
            <div className=" bg-Primary_color p-1 rounded-lg ml-2 flex items-center justify-center absolute bottom-0 right-2">
                    <MdArrowForward
                      style={{
                        color: "white",
                        height:"12px"
                      }}
                    />
                  </div>
            </div>

          </div>
        </div>)}
   
      </div>
      </div>

       <div className={`${isModalOpen? " fixed top-0  translate-y-0 ": " translate-y-full hidden"} w-full z-50  transition duration-500 ease-in-out`}>  <ItemDetail onClose={closeModal} /> </div>
     {isAdded && (
     <div className="fixed top-9 left-1/2  text-nowrap -translate-x-1/2 bg-[#5A8A2A] text-white rounded-lg px-4 py-2 z-50 transform transition-transform duration-300 ease-in-out translate-y-0">
        Item Successfully Added To Order List
      </div>
      )} 
    </div>
  );
};
// const Page = () => {
//   return (
//     <div className="m-0 p-0 ">
//       {/* SLIDE AND SEARCH  */}
//       <Header slides={slides} />
//       {/* <div className="relative inset-0">
//         <Slider slides={slides} />
//         <div className="absolute w-[89%]  h-12 -mt-4   inset-x-1 mx-auto ">
//           <Search />
//         </div>
//         <div className="bg-transparent absolute top-5 left-4">
//           <h1 className="text-xl  text-white/85 ">Delicious Meals</h1>
//           <h3 className=" text-base font-light leading-6 text-left  text-white/40">
//             What would you like to order?
//           </h3>
//         </div>
//         <div className="bg-white absolute  top-7 right-4 p-2 w-8 h-8 rounded-lg">
//           <Image src="/images/menu.png" alt="" width={60} height={60} />
//         </div>
//       </div> */}

//       {/* BOTTOM AND CATEGORY */}
//       <div className="flex-grow overflow-y-auto ">
//         <div className="mt-16 p-6">
//           <div className=" flex justify-between items-center mb-5">
//             <h2 className=" text-black text-lg font-bold">Popular Meals</h2>
//             <h2>
//               <Link className=" text-green-600 text-sm underline" href="/menu">
//                 View All Menu
//               </Link>
//             </h2>
//           </div>
//           {/* CATEGORY */}

//           <div className=" mb-16">
//             <div className="flex justify-between items-center">
//               <h1 className=" w-[60%] md:w-[40%]  lg:w-[30%]  xl:w-[20%]  text-3xl text-nowrap">
//                 Food Category
//               </h1>
//               <div className="w-[35%] md:w-[60%]  lg:w-[70%]  xl:w-[80%]  ">
//                 <hr className="border-t border-black w-full mt-3" />
//               </div>
//             </div>
//             {/* CATERORY ITEMS SCROller */}
//             <div className="flex w-ful   mt-4">
//               {/* <div className="gap-6 flex flex-shrink-0 w-full  overflow-x-scroll overflow-hidden scroll-smooth"> */}
//               <ScrollableContent>
//                 {/* CATERORY ITEMS  */}
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* </div> */}
//               </ScrollableContent>
//             </div>
//           </div>
//           <div className=" mb-16">
//             <div className="flex justify-between items-center">
//               <h1 className=" w-[60%] md:w-[40%]  lg:w-[30%]  xl:w-[20%]  text-3xl text-nowrap">
//                 Food Category
//               </h1>
//               <div className="w-[35%] md:w-[60%]  lg:w-[70%]  xl:w-[80%]  ">
//                 <hr className="border-t border-black w-full mt-3" />
//               </div>
//             </div>
//             {/* CATERORY ITEMS SCROller */}
//             <div className="flex w-ful   mt-4">
//               {/* <div className="gap-6 flex flex-shrink-0 w-full  overflow-x-scroll overflow-hidden scroll-smooth"> */}
//               <ScrollableContent>
//                 {/* CATERORY ITEMS  */}
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* </div> */}
//               </ScrollableContent>
//             </div>
//           </div>
//           <div className=" mb-16">
//             <div className="flex justify-between items-center">
//               <h1 className=" w-[60%] md:w-[40%]  lg:w-[30%]  xl:w-[20%]  text-3xl text-nowrap">
//                 Food Category
//               </h1>
//               <div className="w-[35%] md:w-[60%]  lg:w-[70%]  xl:w-[80%]  ">
//                 <hr className="border-t border-black w-full mt-3" />
//               </div>
//             </div>
//             {/* CATERORY ITEMS SCROller */}
//             <div className="flex w-ful   mt-4">
//               {/* <div className="gap-6 flex flex-shrink-0 w-full  overflow-x-scroll overflow-hidden scroll-smooth"> */}
//               <ScrollableContent>
//                 {/* CATERORY ITEMS  */}
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* </div> */}
//               </ScrollableContent>
//             </div>
//           </div>
//           <div className=" mb-16">
//             <div className="flex justify-between items-center">
//               <h1 className=" w-[60%] md:w-[40%]  lg:w-[30%]  xl:w-[20%]  text-3xl text-nowrap">
//                 Food Category
//               </h1>
//               <div className="w-[35%] md:w-[60%]  lg:w-[70%]  xl:w-[80%]  ">
//                 <hr className="border-t border-black w-full mt-3" />
//               </div>
//             </div>
//             {/* CATERORY ITEMS SCROller */}
//             <div className="flex w-ful   mt-4">
//               {/* <div className="gap-6 flex flex-shrink-0 w-full  overflow-x-scroll overflow-hidden scroll-smooth"> */}
//               <ScrollableContent>
//                 {/* CATERORY ITEMS  */}
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" bg-white p-2 flex-col object-cover gap-10 w-40  rounded-xl">
//                   <Image
//                     src="/images/temp/chiken1.jpeg"
//                     alt=""
//                     width={100}
//                     height={100}
//                     className="w-36 mt-5"
//                   />
//                   <h2 className="mt-3 mb-3">Food Name</h2>
//                   <div className="flex mt-3   gap-12 items-center">
//                     <h2 className=" text-Secondry_color ">
//                       <span>$</span>3000
//                     </h2>
//                     <div className=" bg-Primary_color p-1 rounded-lg ml-2">
//                       <MdArrowForward
//                         style={{
//                           color: "white",
//                           height: "10px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* </div> */}
//               </ScrollableContent>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Page;
