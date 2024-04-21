"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";
import styles from "./styles.module.css";
import { FaAngleDown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface DrinkOption {
  name: string; // Name of the option (e.g., "Small", "Tall")
}
interface DrinksOptionsProps {
  item: {
    topCategory: string;
    compositions: DrinkOption[];
  };
  setSelectedDrink: (drink: string) => void;
}

const DrinksOptions: React.FC<DrinksOptionsProps> = ({ item, setSelectedDrink }: DrinksOptionsProps)  => {
  const [selectedOptions, setSelectedOptions] = useState<DrinkOption[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDrink, setActiveDrink] = useState(null); // State to track the active drink option
  // State to store the values of the selected drink

  // Function to handle click on a drink option
  const handleDrinkClick = (drinkName: any, drinkQuantity: any) => {
    // Set the active drink and selected drink state
    setActiveDrink(drinkName);
    const size = `${drinkName} (${drinkQuantity})`
    setSelectedDrink(size);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddOption = (option: DrinkOption) => {
    if (!selectedOptions.some((item) => item.name === option.name)) {
      setSelectedOptions([...selectedOptions, option]);
      setIsDropdownOpen(false);
    }
  };

  const handleRemoveOption = (option: DrinkOption) => {
    setSelectedOptions(
      selectedOptions.filter((item) => item.name !== option.name)
    );
  };

  const additionalOptionsHeight = 80 + selectedOptions.length * 5; // Adjust padding as needed

  return (
    item.topCategory === "DRINKs" && (
      <div className="drinks">
        <div className=" font-bold">Size Options</div>
        <div className=" flex gap-5 mt-4 justify-items-start items-baseline">
          <div
            className={` flex flex-col justify-center items-center cursor-pointer`}
            onClick={() => handleDrinkClick("Small", "12inc")}>
            <div
              className={` flex  justify-center items-center ${
                activeDrink === "Small" ? styles.activeDrink : "" // Apply 'active' class if this drink is active
              }`}>
              <CiCoffeeCup style={{ width: "24px", height: "24px" }} />
            </div>
            <p className="text-black font-bold text-xs">Small</p>
            <p className="text-black  text-[10px]">12inc</p>
          </div>
          <div
            className={`flex flex-col justify-center items-center cursor-pointer `}
            onClick={() => handleDrinkClick("Tall", "16inc")}>
            <div
              className={`  flex  justify-center items-center ${
                activeDrink === "Tall" ? styles.activeDrink : "" // Apply 'active' class if this drink is active
              }`}>
              <CiCoffeeCup style={{ width: "30px", height: "30px" }} />
            </div>
            <p className="text-black font-bold text-xs">Tall</p>
            <p className="text-black  text-[10px]">16inc</p>
          </div>
          <div
            className={`flex flex-col justify-center items-center cursor-pointer `}
            onClick={() => handleDrinkClick("Grande", "24inc")}>
            <div
              className={`  flex justify-center items-center ${
                activeDrink === "Grande" ? styles.activeDrink : "" // Apply 'active' class if this drink is active
              }`}>
              <CiCoffeeCup style={{ width: "34px", height: "34px" }} />
            </div>
            <p className="text-black font-bold text-xs">Grande</p>
            <p className="text-black  text-[10px]">24inc</p>
          </div>
          <div
            className={`flex flex-col justify-center items-center cursor-pointer `}
            onClick={() => handleDrinkClick("Tranta", "30inc")}>
            <div
              className={`  flex  justify-center items-center ${
                activeDrink === "Tranta" ? styles.activeDrink : "" // Apply 'active' class if this drink is active
              }`}>
              <CiCoffeeCup style={{ width: "39px", height: "39px" }} />
            </div>
            <p className={`text-black font-bold text-xs`}>Tranta</p>
            <p className="text-black  text-[10px]">30inc</p>
          </div>
        </div>

        <div className="mt-7 relative">
          <div className="text-black font-bold text-[12px]">
            Additional Options
          </div>
          <div className="bg-[#F8F8F8] rounded-xl border-orange-200 mt-3 flex justify-between items-center p-2 ">
            <div
              className="flex items-center flex-wrap gap-1  "
              // style={{ height: additionalOptionsHeight }}
            >
              {selectedOptions.map((option, index) => (
                <div
                  key={index}
                  className=" bg-[#438A2A] text-nowrap flex rounded-lg justify-center gap-2 p-1 items-center">
                  <p className="text-white  text-xs">{option.name}</p>
                  <MdCancel
                    onClick={() => handleRemoveOption(option)}
                    className=" bg-green-700 text-white  text-xs"
                  />
                </div>
              ))}
            </div>

            <FaAngleDown
              style={{ width: "30px", height: "30px" }}
              onClick={toggleDropdown}
              className=" text-Primary_color"
            />
          </div>
          {isDropdownOpen && (
            <div className=" bg-default_background_color flex flex-col gap-4 rounded-xl p-2 absolute z-50 top-full left-0 w-full overflow-y-auto max-h-36 shadow-md">
              {item.compositions.length > 0
                ? item.compositions.map((option, index) => (
                    <p
                      key={index}
                      className="text-black  text-xs hover:bg-gray-200"
                      onClick={() => handleAddOption(option)}>
                      {option.name}
                    </p>
                  ))
                : null}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default DrinksOptions;
