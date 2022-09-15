import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Categories = ({ categories, filterItems, currentCategory }) => {
  // const navigate = useNavigate();
  console.log(currentCategory);
  return (
    <div className="flex flex-wrap xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-8 lg:gap-8 md:gap-8 gap-0 p-0 ">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`font-semibold tracking-wide drop-shadow-md text-md capitalize py-2 px-5 
              ${
                currentCategory === category
                  ? "bg-[#D90429] text-white rounded-lg drop-shadow-md"
                  : "active:text-white active:bg-[#D90429]"
              }
              hover:bg-[#D90429] hover:text-white hover:rounded-lg`}
            key={index}
            onClick={() => filterItems(category)}
            // onClick={() => navigate(category)}
          >
            {/* {category} */}
            <Link to={currentCategory}>{category}</Link>
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
