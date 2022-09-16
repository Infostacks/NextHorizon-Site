/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { blogs } from "../../utils/data";

import Categories from "./Categories";
import { Outlet } from "react-router-dom";

const allCategories = ["latest", ...new Set(blogs.map((item) => item.category))];

const index = ({selectedCategory}) => {
  const [menuItems, setMenuItems] = useState(blogs);
  const [categories, setCategories] = useState(allCategories);
  const [currentCat, setCurrentCat] = useState("latest");

  const filterItems = (selectedCategory) => {
    setCurrentCat(selectedCategory);
    if (selectedCategory === "latest") {
      setMenuItems(blogs);
      return;
    }
    const newItems = blogs.filter((item) => item.category === selectedCategory);
    setMenuItems(newItems);
  };

  return (
    <section className="flex flex-col items-center w-full overflow-x-hidden pt-40 gap-10 bg-slate-100 px-5">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Latest Blogs
        </h2>
      </div>

      {/*   */}
      <div className="rounded-xl px-8 py-3 xl:mx-40 lg:mx-40 md:mx-40 mx-10 bg-rose-100 shadow-md text-[#D90429]">
        <Categories
          categories={categories}
          filterItems={filterItems}
          currentCategory={currentCat}
        />
      </div>
      <Outlet/>
    </section>
  );
};

export default index;
