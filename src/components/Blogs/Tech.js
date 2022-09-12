// /* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { blogs } from "../../utils/data";
// import { Link } from "react-router-dom";

const allCategories = ["latest", ...new Set(blogs.map((item) => item.category))];

const index = ({selectedCategory}) => {
  const [menuItems, setMenuItems] = useState(blogs);
  const [categories, setCategories] = useState(allCategories);
  const [currentCat, setCurrentCat] = useState(selectedCategory);

  const filterItems = (selectedCategory) => {
    setCurrentCat(selectedCategory);

    const newItems = blogs.filter((item) => item.category === selectedCategory);
    setMenuItems(newItems);
  };

  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      {/* <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20"> */}
        {/* Text intro  */}
        {/* <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Latest Blogs TechBlogs
        </h2>
      </div> */}

      {/*   */}
      {/* <div className="rounded-xl px-8 py-3 xl:mx-40 lg:mx-40 md:mx-40 mx-10 bg-rose-100 text-rose-500">
        <Categories
          categories={categories}
          filterItems={filterItems}
          currentCategory={currentCat}
        />
      </div> */}
      <div className="">
        <div>TechBlogs</div>
        <Menu items={menuItems} />
      </div>
    </section>
  );
};

export default index;
