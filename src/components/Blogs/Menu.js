/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "../../utils/GlobalStyles";

const Menu = ({ items }) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-center gap-5 mt-16">
      {items.map((blogData, index) => {
        return (
          <motion.div
            initial={{ x: index % 2 === 0 ? "-10vw" : "10vw", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 2,
                type: "spring",
                bounce: 0.4,
              },
            }}
            key={index}
            className={`flex flex-col justify-between gap-3 xl:w-[22rem] lg:w-[22rem] w-[20rem] bg-slate-200 bg-opacity-70 border-2 border-slate-900/3 rounded-3xl shadow-xl`}
          >
            <div className="flex flex-col p-5 justify-between gap-5">
              {/* breadcrumbs */}
              <div className="flex flex-row gap-2 text-sm">
                <span className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                  Blog
                </span>
                <span>➙</span>
                <span className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                  {/* underline due to navlink  */}
                  <NavLink to="">{blogData.category}</NavLink>
                </span>
              </div>

              <span className={`text-lg font-semibold font-serif antialiased hover:text-${styles.redPrimary} hover:cursor-pointer`}>
                <NavLink to={`/blogs/${blogData.id}`}>{blogData.title}</NavLink>
              </span>
              <div className="flex flex-row justify-between text-sm">
                <span>{blogData.postDate}</span>
                <span>{blogData.author}</span>
              </div>
            </div>
            <img
              src={blogData.img}
              alt={blogData.title}
              className="object-cover h-[14rem] w-full bg-slate-100 bg-opacity-60 rounded-3xl"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Menu;
