import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { howItWorks } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const [count, setCount] = useState(0);
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });

      rightAnimation.start({
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
      leftAnimation.start({ y: "-5vw", opacity: 0 });
      rightAnimation.start({ y: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation, fadeInAnimation]);

  return (
    <motion.div
      ref={ref}
      animate={fadeInAnimation}
      className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center"
    >
      {/* top section  */}
      <div
        className={`bg-${styles.blackPrimary} text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10`}
      >
        {/* Text intro  */}
        <div className="flex gap-5 flex-col xl:w-1/2 lg:w-1/2 w-full">
          <motion.h2
            animate={rightAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight"
          >
            How it works
          </motion.h2>

          <motion.div
            animate={leftAnimation}
            className="max-w-lg mt-4 text-gring-offset-warm-gray-500 tracking-wide"
          >
            We follow a proven multi-step assembling process to provide the best
            dedicated development team that meets your requirements.
          </motion.div>
          <div className="flex flex-col">
            {howItWorks.map((process, index) => {
              return (
                <button key={index}>
                  <div
                    className={`flex flex-row items-center text-${
                      styles.redPrimary
                    } gap-4 text-md font-semibold py-2 px-1 rounded-3xl drop-shadow-md w-full ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => setCount(index)}
                  >
                    <span
                      className={`px-[.6rem] py-[.15rem] ${`job-btn ${
                        count === index && `text-${styles.redPrimary}`
                      }`} bg-white rounded-full`}
                    >
                      {process.id}
                    </span>
                    {process.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col gap-10 bg-${styles.redPrimary} text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10`}
      >
        {/* Show Data  */}
        <motion.div
          animate={rightAnimation}
          className="flex flex-col text-xl font-serif gap-5 xl:w-1/2 lg:w-1/2 w-full"
        >
          <span className="xl:text-4xl lg:text-4xl text-xl font-bold">
            {howItWorks[count].title}
          </span>
          <span className="text-justify xl:text-xl lg:text-xl text-base">
            {howItWorks[count].desc1}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
