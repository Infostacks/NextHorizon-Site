/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";

const Menu = ({ items }) => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-5 xl:px-28 lg:px-28 md:px-28">
      {items.map((menuItem, index) => {
        const { img, title, desc } = menuItem;
        return (
          <div key={index} className="">
            <a href="">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="opacity-50"
                  whileHover={{
                    opacity: 1,
                    scale: 1.15,
                    // rotate: id % 2 === 0 ? -5 : 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute flex flex-col justify-center items-center py-3 px-2 text-white w-[18.8rem] bg-orange-600">
                    <div className="text-2xl">{title}</div>
                    <div className="text-base">{desc}</div>
                  </div>
                  <div className="rounded-2xl">
                    <img src={img} alt={title} width={300} className="rounded-2xl border-2 border-slate-900" />
                  </div>
                </motion.div>
              </motion.div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
