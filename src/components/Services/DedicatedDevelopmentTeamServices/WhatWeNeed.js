/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { whatWeNeed } from "../../../utils/data.js";

const WhatWeNeed = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const upAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      upAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });
    }

    if (!inView) {
      upAnimation.start({ y: "5vw", opacity: 0 });
    }
  }, [inView, upAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10"
    >
      {/* top section  */}
      <div className="max-w-screen-lg text-center flex items-center flex-col">
        {/* Text intro  */}
        <motion.span
          animate={upAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          What we need from your side
        </motion.span>

        <motion.span
          animate={upAnimation}
          className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide xl:font-semibold lg:font-semibold"
        >
          For productive cooperation and fast dedicated development team
          assembling, we need your full involvement in the process.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10">
        {whatWeNeed.map((item, index) => {
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
              className="flex flex-col justify-center gap-5"
              key={index}
            >
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                {item.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeNeed;
