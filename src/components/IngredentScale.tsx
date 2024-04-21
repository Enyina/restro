"use client"
import React, { useState } from 'react';
import styles from './styles.module.css'

interface Ingredient {
    name: string;
  }
function IngredentScale({ name }: Ingredient) {
  const [selectedOption, setSelectedOption] = useState(0); // Initial selection

  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(parseInt(event.target.value));
  };

  return (
    <div className={` flex items-center  gap-4`}>
      <ul className={`w-1/4 `}>
        <li className='text-black text-sm text-nowrap'><span className="inline-block w-1 h-1 mr-2 bg-black rounded-full"></span>{name}</li>
      </ul>
      <div className="w-3/4 flex justify-end items-center">
        
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={selectedOption}
          onChange={handleSlideChange}
          className={`${styles.custom_thumb} appearance-none`}
        />
        <div className={` ml-2`}>
          <span>{selectedOption}%</span>
        </div>
      </div>
    </div>
  );
}

export default IngredentScale;
