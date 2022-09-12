/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Menu from "./Menu";
import { blogs } from "../../utils/data";


const index = ({selectedCategory}) => {
  const [menuItems, setMenuItems] = useState(blogs);
  const [currentCat, setCurrentCat] = useState(selectedCategory);

  const filterItems = () => {
    setCurrentCat(selectedCategory);

    const newItems = blogs.filter((item) => item.category === selectedCategory);
    setMenuItems(newItems);
  };

  // filterItems();

  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      <div className="">
        <div>ClientGuides</div>
        <Menu items={menuItems} />
      </div>
    </section>
  );
};

export default index;
