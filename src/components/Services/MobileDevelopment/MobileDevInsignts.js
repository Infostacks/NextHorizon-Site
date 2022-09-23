import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogs } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const MobileDevInsignts = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10 xl:px-0 lg:px-0 px-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Mobile app development insights
        </h2>
      </div>

      {/*   */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-center gap-5 mt-16">
        {blogs.map((insight, index) => {
          return (
            <motion.div
              initial={{
                x: index % 2 === 0 ? "-10vw" : "10vw",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "spring",
                  bounce: 0.6,
                },
              }}
              key={index}
              className={`flex flex-col justify-between gap-3 xl:w-[22rem] lg:w-[22rem] w-[20rem] bg-slate-200 rounded-3xl`}
            >
              <div className="flex flex-col p-5 justify-around gap-5">
                {/* breadcrumbs */}
                <div className="flex flex-row gap-2 text-sm">
                  <span
                    className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}
                  >
                    <Link to="/blogs/latest">Blog</Link>
                  </span>
                  <span>➙</span>
                  <span
                    className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}
                  >
                    <Link to="">{insight.category}</Link>
                  </span>
                </div>

                <span
                  className={`text-3xl hover:text-${styles.redPrimary} hover:cursor-pointer`}
                >
                  <Link to={`/blogs/${insight.id}`}>{insight.title}</Link>
                </span>
                <span>{insight.date}</span>
              </div>
              <img
                src={insight.img}
                alt={insight.title}
                className="imgColorChange object-cover h-[14rem] bg-slate-100 bg-opacity-60 shadow-xl rounded-3xl"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileDevInsignts;
