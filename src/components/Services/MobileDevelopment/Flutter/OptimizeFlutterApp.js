/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const OptimizeFlutterApp = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, fadeInAnimation]);

  return (
    <motion.div
      ref={ref}
      animate={fadeInAnimation}
      className="flex items-center justify-center w-screen bg-[#D90429]"
    >
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
        <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
          <span className="xl:text-3xl lg:text-3xl text-xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
            One Flutter dev equals Two native devs
          </span>
          <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
            <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
              Optimize your team in an effective way
            </h1>
            {/* button  */}
            <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
              <Link to="/contact">Calculate Now</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OptimizeFlutterApp;
