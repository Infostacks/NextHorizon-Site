import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { industryExperts } from "../../utils/data.js";

const IndustryExperts = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const [count, setCount] = useState(0);
  const upAnimation = useAnimation();
  const fadeInAnimation = useAnimation();
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
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      upAnimation.start({ y: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, upAnimation, fadeInAnimation]);

  return (
    <div
      ref={ref}
      className="bg-slate-100 h-full w-screen flex flex-col justify-center items-center gap-10 py-20"
    >
      <motion.span
        animate={fadeInAnimation}
        className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold px-5"
      >
        Our industry expertise
      </motion.span>
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center gap-5 max-w-screen-lg w-full">
        <div className="flex flex-col xl:w-3/12 lg:w-3/12 md:w-3/12 w-8/12 xl:gap-5 lg:gap-5 gap-0 flex-wrap justify-center">
          {industryExperts.map((category, index) => {
            return (
              <motion.button animate={fadeInAnimation} key={index}>
                <div
                  className={`flex flex-row gap-2 text-2xl items-center px-3 rounded-3xl drop-shadow-md h-16 ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}
                >
                  <span className="xl:text-5xl lg:text-5xl md:text-4xl text-2xl">
                    {category.catIcon}
                  </span>
                  {category.category}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Show Data  */}
        <motion.div
          animate={upAnimation}
          className="flex flex-col w-9/12 gap-5"
        >
          <img
            src={industryExperts[count].img}
            alt=""
            className="rounded-[3rem] shadow-lg border-[1px] border-slate-400 shadow-slate-400"
          />
          <h3 className="xl:text-3xl lg:text-3xl text-xl font-semibold">
            {industryExperts[count].heading}
          </h3>
          <p className="flex flex-wrap text-justify xl:text-xl lg:text-xl text-base">
            {industryExperts[count].desc}
          </p>
          {/* button  */}
          <button className="text-[#d90429ff] font-semibold py-2 px-5 rounded-full drop-shadow-md hover:shadow-inner hover:bg-rose-200 hover:text-[#d90429ff] w-fit h-fit">
            Discover industry details
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryExperts;
