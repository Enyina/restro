"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import Menu from "../../dummyData/allCategory.json"
import { useDispatch } from "react-redux";
import { pushId } from "@/app/GlobalRedux/features/cart/cartSlice";

interface ModalContentProps {
  onOpen: () => void;
}


// export const menu: MenuItem[] = [
//   {
//     categoryId: 1,
//     name: "Rice",
//     image: "path/to/rice.jpg",
//     content: [
//       {
//         id: 101,
//         image: "path/to/jollof_rice.jpg",
//         name: "Jollof Rice",
//         description:
//           "Aromatic rice dish cooked with tomatoes, peppers, and spices.",
//         price: 10.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       {
//         id: 102,
//         image: "path/to/fried_rice.jpg",
//         name: "Fried Rice",
//         description: "Savory rice dish with vegetables, meat, or seafood.",
//         price: 8.0,
//       },
//       // Add more rice items here
//     ],
//   },
//   {
//     categoryId: 2,
//     name: "Soups",
//     image: "path/to/soup.jpg",
//     content: [
//       {
//         id: 201,
//         image: "path/to/egusi_soup.jpg",
//         name: "Egusi Soup",
//         description:
//           "A rich and flavorful soup made with melon seeds, vegetables, and meat.",
//         price: 7.0,
//       },
//       {
//         id: 202,
//         image: "path/to/tomato_soup.jpg",
//         name: "Tomato Soup",
//         description: "Creamy tomato soup, perfect for a light meal.",
//         price: 5.0,
//       },
//       // Add more soup items here
//     ],
//   },
//   {
//     categoryId: 3,
//     name: "Proteins",
//     image: "path/to/protein.jpg",
//     content: [
//       {
//         id: 301,
//         image: "path/to/chicken_stew.jpg",
//         name: "Chicken Stew",
//         description: "Tender chicken pieces simmered in a flavorful sauce.",
//         price: 12.0,
//       },
//       {
//         id: 302,
//         image: "path/to/grilled_fish.jpg",
//         name: "Grilled Fish",
//         description:
//           "Fresh fish grilled to perfection with your choice of seasoning.",
//         price: 15.0,
//       },
//       // Add more protein items here
//     ],
//   },
//   {
//     categoryId: 4,
//     name: "Swallow",
//     image: "path/to/swallow.jpg",
//     content: [
//       {
//         id: 401,
//         image: "path/to/ pounded_yam.jpg",
//         name: "Pounded Yam",
//         description: "Mashed yams, a popular staple food in West Africa.",
//         price: 6.0,
//       },
//       {
//         id: 402,
//         image: "path/to/eba.jpg",
//         name: "Eba",
//         description: "Starch-based dough made from cassava flour.",
//         price: 5.0,
//       },
//       // Add more swallow items here
//     ],
//   },
//   {
//     categoryId: 5,
//     name: "Sauce",
//     image: "path/to/sauce.jpg",
//     content: [
//       {
//         id: 501,
//         image: "path/to/stew_sauce.jpg",
//         name: "Stew Sauce",
//         description: "A flavorful tomato-based sauce for stews and soups.",
//         price: 4.0,
//       },
//       {
//         id: 502,
//         image: "path/to/jollof_sauce.jpg",
//         name: "Jollof Sauce",
//         description: "Spicy tomato-based sauce for jollof rice.",
//         price: 5.0,
//       },
//       // Add more sauce items here
//     ],
//   },
//   {
//     categoryId: 6,
//     name: "Drinks",
//     image: "path/to/drink.jpg",
//     content: [
//       {
//         id: 601,
//         image: "path/to/juice.jpg",
//         name: "Fresh Juice",
//         description: "Choose from a variety of fresh fruit juices.",
//         price: 3.0,
//       },
//       {
//         id: 602,
//         image: "path/to/soda.jpg",
//         name: "Soda",
//         description: "Choose from a selection of popular sodas.",
//         price: 2.0,
//       },
//       {
//         id: 603,
//         image: "path/to/water.jpg",
//         name: "Bottled Water",
//         description: "Still or sparkling bottled water.",
//         price: 1.0,
//       },
//       // Add more drink items here
//     ],
//   },
//   {
//     categoryId: 7,
//     name: "Breakfast",
//     image: "path/to/breakfast.jpg",
//     content: [
//       {
//         id: 701,
//         image: "path/to/eggs.jpg",
//         name: "Eggs",
//         description:
//           "Scrambled, fried, or omelet, served with your choice of sides.",
//         price: 5.0,
//       },
//       {
//         id: 702,
//         image: "path/to/pancakes.jpg",
//         name: "Pancakes",
//         description: "Fluffy pancakes served with butter and syrup.",
//         price: 4.0,
//       },
//       {
//         id: 703,
//         image: "path/to/oatmeal.jpg",
//         name: "Oatmeal",
//         description: "Hearty oatmeal with your choice of toppings.",
//         price: 3.0,
//       },
//       // Add more breakfast items here
//     ],
//   },
//   {
//     categoryId: 8,
//     name: "Dessert",
//     image: "path/to/dessert.jpg",
//     content: [
//       {
//         id: 801,
//         image: "path/to/cake.jpg",
//         name: "Cake",
//         description: "Choose from a variety of delicious cakes.",
//         price: 4.0,
//       },
//       {
//         id: 802,
//         image: "path/to/ice_cream.jpg",
//         name: "Ice Cream",
//         description: "Scoops of your favorite ice cream flavors.",
//         price: 3.0,
//       },
//       {
//         id: 803,
//         image: "path/to/fruit_salad.jpg",
//         name: "Fruit Salad",
//         description: "Refreshing mix of seasonal fruits.",
//         price: 2.0,
//       },
//       // Add more dessert items here
//     ],
//   },
// ];

const Drawer: React.FC<ModalContentProps> = ({onOpen}) => {
  const [activeCategory, setActiveCategory] = useState(Menu[0].categoryId);
 const dispatch = useDispatch()

 const activeMenu = Menu
 ?.find((category) => category.categoryId === activeCategory)
 console.log({activeMenu});
 
  const handleCategoryClick = (categoryId: number): void => {
    setActiveCategory(categoryId);
  };
  const handleItemClick = (itemId : number)=>{
    dispatch(pushId({itemId}))
    onOpen()
  }
  return (
    <div className="min-h-full  z-50 inset-0 bg-opacity-50  ">
      <div className="flex items-center justify-center  pt-10 px-4 sm:p-6 md:p-8">
        <div className="w-full overflow-hidden">
          {/* Category List */}
          <div className=" flex overflow-x-scroll scrollbar-hide gap-6">
            {Menu.map((category) => (
              <div
                key={category.categoryId}
                className={` flex h-11 w-32 px-9  rounded-3xl gap-1  justify-center items-center ${
                  activeCategory === category.categoryId
                    ? "bg-orange-500"
                    : "bg-[#DFDFDF]"
                }`}
                onClick={() => handleCategoryClick(category.categoryId)}>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={32}
                  height={32}
                  className="  rounded-full bg-white p-1"
                />
                <button
                  className={` ml-1 font-medium text-base   ${
                    activeCategory === category.categoryId
                      ? "text-white"
                      : "text-black "
                  }`}>
                  {category.name}
                </button>
              </div>
            ))}
          </div>

          {/* Content Area */}
          {activeCategory  && (
            <div className="p-1">
              {activeCategory && (
                <div className="mb-10">
                  {activeMenu?.content.map((item:MenuContentItem) => (
                      // <Link key={item.id} href={"/product/id"}>
                        <div
                          key={item.id}
                          onClick={()=>handleItemClick(item.id)}
                          className="mt-9 bg-white rounded-xl p-3 gap-5 flex justify-around items-center shadow-sm">
                          <Image
                            src={item.image}
                            alt=""
                            width={120}
                            height={120}
                            className=" rounded-full "
                          />
                          <div className=" relative w-full">
                            <h2 className=" mb-1 text-black text-base font-bold">
                           {item.name}
                            </h2>
                            <p className=" text-gray-400 my-1 text-xs">
                            {item.description}
                            </p>
                            <div className=" flex  gap-12 mt-2">
                              <h2 className=" text-black text-base font-bold">
                                N {item.price.toLocaleString()}
                              </h2>
                              <div className=" bg-Primary_color p-1 rounded-lg ml-2 flex items-center justify-center absolute bottom-0 right-2">
                                <MdArrowForward
                                  style={{
                                    color: "white",
                                    height: "12px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      // </Link>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
