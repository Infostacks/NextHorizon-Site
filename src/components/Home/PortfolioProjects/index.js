/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { portfolioProjects } from "../../../utils/data.js";

const allCategories = ["all", ...new Set(portfolioProjects.map((item) => item.category))];

const index = () => {
  const [menuItems, setMenuItems] = useState(portfolioProjects);
  const [categories, setCategories] = useState(allCategories);
  const [currentCat, setCurrentCat] = useState("all");

  const filterItems = (category) => {
    setCurrentCat(category);
    if (category === "all") {
      setMenuItems(portfolioProjects);
      return;
    }
    const newItems = portfolioProjects.filter((item) => item.category === category);
    setMenuItems(newItems);
    console.log("menue items: ", menuItems);
  };

  return (
    <main className="py-20 overflow-x-hidden bg-slate-100">
      <section className="flex flex-col justify-center items-center w-full gap-5">
        <div className="rounded-xl px-8 py-3 bg-orange-100 text-orange-500 font-semibold">
          <h2>Proud Projects</h2>
        </div>
        <div className="rounded-xl px-8 py-3 xl:mx-40 lg:mx-40 md:mx-40 mx-10 bg-orange-100 text-orange-500">
          <Categories
            categories={categories}
            filterItems={filterItems}
            currentCategory={currentCat}
          />
        </div>
        <div className="">
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default index;
