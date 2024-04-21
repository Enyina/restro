"use client"
import React from 'react';
import IngredentScale from './IngredentScale';
interface Item {
    name: string; 
  }

const IngredientsUsed : React.FC<{ items: Item[] }> = ({ items  }) => {
  return (
    <div className="">
        <h2 className='text-black text-sm mb-3 font-bold'> Ingredients Used</h2>
      {items && items.length > 0 ? (
        <ul className="list-none "> {/* Improved structure and styling */}
          {items.map((item:Item) => (
            <li key={item.name} className="flex flex-col gap-5 my-2 ">
              <IngredentScale name={item.name} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No ingredients used yet.</p>
      )}
    </div>
  );
};

export default IngredientsUsed;
