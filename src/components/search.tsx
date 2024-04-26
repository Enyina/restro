"use client"
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { CiSearch } from "react-icons/ci";
// import { menu } from './drawer';
import Menu from "../../dummyData/allCategory.json"
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { pushId } from "@/app/GlobalRedux/features/cart/cartSlice";
import { ModalContentProps } from './drawer';


const Search :React.FC<ModalContentProps> = ({onOpen}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const dispatch = useDispatch()
  useEffect(() => {
    // fetchMenuItems();
    setMenuItems(Menu);
  }, []);

  // const fetchMenuItems = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/menu');
  //     setMenuItems(response.data);
  //   } catch (error) {
  //     console.error('Error fetching menu items:', error);
  //   }
  // };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  let filteredMenuItems= []
 if(searchQuery !== "" || " "){
   filteredMenuItems = menuItems.reduce((filteredProducts: MenuContentItem[], item: MenuItem) => {
    const matchingProducts = item.content.filter((product: MenuContentItem) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // console.log({filteredMenuItems},{matchingProducts}, {searchQuery})
    return [...filteredProducts, ...matchingProducts];
  }, []);
 }
 const handleItemClick = (itemId : number)=>{
  dispatch(pushId({itemId}))
  onOpen()
}
  return (
    <div className="flex ml-0.5 justify-center h-full w-full   items-center relative">
    <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search Food Name..."
        className=" h-full w-full border-none bg-white pl-10 px-4 py-2  rounded-xl group"
        />
        <div className=" absolute left-1 text-gray-900 ml-2 text-2xl"><CiSearch style={{}} /></div>
      {searchQuery.length > 0 &&(
    <div className="absolute top-full left-0 w-full overflow-y-auto max-h-36 shadow-md bg-default_background_color p-2 z-40 mt-2  "> <ul className=" p-2 list-none">
    {filteredMenuItems.map((item:MenuContentItem) => (
      
          <li key={item.id} className='flex gap-2 justify-start items-center p-1'onClick={()=>handleItemClick(item.id)} >  <span className="inline-block w-1.5 h-1.5 mr-2 bg-[#408023] rounded-full"></span>{item.name}  </li>
        ))}
        </ul>
    </div>     )}
  </div>
  );
};
// const Search = () => {
//   return (
//     <div className="flex  ml-0.5 justify-center h-full w-full  bg-white rounded-xl  items-center relative" >
//      <div className=' text-gray-900 ml-4 text-2xl '><CiSearch style={{}} /></div>
//     <p className='w-full px-5 py-2 text-gray-500  text-lg '>Search Food Name</p> 
//     </div>
//   );
// };

export default Search;