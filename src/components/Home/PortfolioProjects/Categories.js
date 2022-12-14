/* eslint-disable react/prop-types */
import React from "react";

const Categories = ({ categories, filterItems, currentCategory }) => {
  console.log(currentCategory);
  return (
    <div className="flex flex-wrap xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-8 lg:gap-8 md:gap-8 gap-0 p-0 ">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`font-semibold text-sm capitalize py-2 px-5 
              ${
                currentCategory === category
                  ? "bg-orange-700 text-white rounded-2xl"
                  : "active:text-white active:bg-orange-900"
              }
              hover:bg-orange-700 hover:text-white hover:rounded-2xl`}
            key={index}
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
