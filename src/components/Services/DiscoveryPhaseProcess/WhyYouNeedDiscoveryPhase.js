import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { whyYouNeedDiscoveryPhase } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const WhyYouNeedDiscoveryPhase = () => {
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
    <div
      ref={ref}
      className="w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <motion.h1
          animate={fadeInAnimation}
          className="max-w-lg xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Why you need a discovery phase
        </motion.h1>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-lg w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 w-full flex-wrap">
          {whyYouNeedDiscoveryPhase.map((category, index) => {
            return (
              <motion.div
                key={index}
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
                className="flex w-full gap-10 bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-3xl shadow-md">
                <div className="flex xl:flex-row lg:flex-row flex-col gap-3" key={index}>
                  <div className="flex flex-row gap-3 text-xl" key={index}>
                    <span className={`text-${styles.redPrimary}`}>✔</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">{category.title}</span>
                    <span className="xl:text-xl lg:text-xl text-base text-justify">
                      {category.desc}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyYouNeedDiscoveryPhase;
