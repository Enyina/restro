"use client"
// ModalContent.tsx
import Image from "next/image";
import IngredientsUsed from "./IngredentsUsed";
import Recommendations, { Recommendation } from "./Recomendation";
import DrinksOptions from "./DrinksOption";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSingleOrder, isAdded } from "@/app/GlobalRedux/features/cart/cartSlice";
import Menu from "../../dummyData/allCategory.json";
import riceRc from "../../dummyData/riceRecommendation.json";
import SoupRec from "../../dummyData/soupRecommendations.json";
import { RootState } from "@/app/GlobalRedux/store";

interface ModalContentProps {
  onClose: () => void;
}
const items = [
  { name: "Galic" },
  { name: "Ginger" },
  { name: "Nutmeg" },
  { name: "Bay leaf" },
];
const RecommendationsArray: Recommendation[] = [
  {
    id: 1,
    name: "Chicken Stew",
    image: "/images/temp/chiken1.jpeg", // Adjust the image path to your actual location
    price: 2000,
  },
  {
    id: 2,
    name: "Jollof Rice",
    image: "/images/temp/rice2.jpeg", // Replace with your image path
    price: 1500,
  },
  {
    id: 3,
    name: "Egusi Soup",
    image: "/images/temp/soup1.jpeg", // Replace with your image path
    price: 2200,
  },
  {
    id: 4,
    name: "Pounded Yam",
    image: "/images/temp/chiken2.jpeg", // Replace with your image path
    price: 1200,
  },
  {
    id: 5,
    name: "MoinMoin",
    image: "/images/temp/salad3.jpeg", // Replace with your image path
    price: 800,
  },
  {
    id: 6,
    name: "MoinMoin",
    image: "/images/temp/salad3.jpeg", // Replace with your image path
    price: 800,
  },
  {
    id: 7,
    name: "MoinMoin",
    image: "/images/temp/salad3.jpeg", // Replace with your image path
    price: 800,
  },
  // ... add more recommendations
];
const ItemDetail: React.FC<ModalContentProps> = ({ onClose }) => {
  const itemId = useSelector((state: RootState) => state.cart.itemId);
  const product = findItemById(Menu , itemId);
  if (product) {
    console.log("Found item:", product);
    // Access item details: foundItem.name, foundItem.price, etc.
  } else {
    console.log("Item with ID", itemId, "not found.");
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(product?.price);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function findItemById(data : any, itemId : number) {
    for (const category of data) {
      for (const item of category.content) {
        if (item.id === itemId) {
          return {
            categoryId: category.categoryId,
            categoryName: category.name,
            ...item, // Include all item properties
          };
        }
      }
    }
    return null; // If item not found, return null
  }
  const handleClick = () => {
    setIsPopupOpen(true);
    dispatch(
      addToSingleOrder({
        id: 1,
        name: "Rice",
        size: "", // Optional property for size
        price: "3,000",
        totalPrice: "6,000",
        image: "/images/temp/salad1.jpeg",
        quantity: 2,
      })
      );
      setTimeout(() => dispatch(isAdded({isAdded:false})), 3000); // Hide popup after 2 seconds
  };

  return (
    // <div
    //   className={`bg-default_background_color m-1 w-full rounded-3xl p-0 min-h-screen md:mx-24 lg:mx-48 xl:mx-96 `}>
    //   <div className=" w-full min-h-min  flex flex-col gap-1 relative">
    <div className=" w-full min-h-screen p-7 flex flex-col gap-12 relative bg-default_background_color m-auto">
      {/* <div
          style={{
            backgroundImage: "url(/images/temp/salad1.jpeg)",
          }}
          className=" h-96  w-full rounded-bl-[150px]  rounded-tl-2xl  rounded-tr-2xl  bg-cover"></div> */}
      {/* Top Section Image to DESC Start */}
      {/* <div className="p-7"> */}
      <div className="">
        <Image
          src={product?.image}
          alt=""
          width={100}
          height={100}
          className="h-72 mt-9 w-full rounded-full "
        />
        <Image
          src={"/images/iconX.png"}
          alt=""
          width={18}
          height={18}
          className=" absolute top-6 right-6 cursor-pointer"
          onClick={onClose}
        />
        <div className="mt-7 flex flex-col gap-6">
          <div className=" flex flex-col gap-1">
            <h1 className=" text-black text-2xl font-bold">{product?.name}</h1>
            <p className="text-[#4E7E1E] text-base">NGN {product?.price}</p>
          </div>
          <div>
            <h3 className=" text-black text-sm font-bold">Description</h3>
            <p className=" text-black text-[11px]">{product?.description}</p>
            <hr className=" text-black mt-2"/>
          </div>
        </div>
      </div>
      {/* Top Section Image to DESC End*/}

      {/* DrinksOption Session start*/}
      {product?.categoryName === "Breakfast" && (
        <DrinksOptions
          item={{
            topCategory: "DRINKs", // Category for drinks
            compositions: [
              { name: "Extra Shot" },
              { name: "Caramel Drizzle" },
              { name: "Whipped Cream" },
              { name: "Oat Milk" },
              { name: "Soy Milk" },
            ],
          }}
        />
      )}
      {/* DrinksOption Session start*/}

      {/* Ingredent Session start*/}
      {product?.name === "Jollof Rice" && <IngredientsUsed items={items} />}
      {/* Ingredent Session End*/}

      {/* Ingredent Session End*/}
      {product?.categoryName === ("Rice" || "Soup") && (
        <Recommendations
          recommendations={product.categoryName === "Rice" ? riceRc : SoupRec}
        />
      )}
      {/* Ingredent Session End*/}

      {/* Bottom Section Add to Cart End*/}
      {/* <div className=" p-7"> */}
      <div className=" ">
        <div className=" flex justify-between  ">
          {/* Add mount */}
          <div className="flex gap-2">
            <button
              className="flex justify-center items-center py-3 px-6 rounded-lg text-Primary_color  border border-gray-400 hover:bg-Primary_color hover:text-white hover:border-transparent transition duration-300 "
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
              -
            </button>
            <p className="flex justify-center items-center p-2 rounded-lg">
              {quantity}
            </p>
            <button
              className="flex justify-center items-center py-3 px-6 rounded-lg text-Primary_color  border border-gray-400 hover:bg-Primary_color hover:text-white hover:border-transparent transition duration-300"
              onClick={() => setQuantity((prev) => prev + 1)}>
              +
            </button>
          </div>

          <button
            className=" bg-Primary_color flex justify-center items-center p-3 rounded-lg text-white"
            onClick={handleClick}>
            {" "}
            Add (N {totalPrice})
          </button>
        </div>
      </div>
      {/* Bottom Section Add to Cart End*/}
      
    </div>
    // </div>
  );
};

export default ItemDetail;
