import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { companiesList } from "../../utils/data";
import styles from "../../utils/GlobalStyles";

const ClientsSection = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 3,
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
      className="overflow-x-hidden flex flex-col bg-slate-200 items-center justify-evenly p-20 gap-5 w-full"
    >
      <motion.h1
        animate={fadeInAnimation}
        className={`font-bold xl:text-7xl lg:text-7xl md:text-4xl text-3xl max-w-screen-lg text-center text-${styles.blackPrimary}`}
      >
        Illustrious software always required a one-step solution
      </motion.h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-20 md:gap-10 xl:mt-10 lg:mt-10 max-w-screen-lg">
        {companiesList &&
          companiesList.map((company, index) => {
            return (
              <div className="backdrop:fill-slate-600" key={index}>
                <img
                  className="imgColorChange xl:h-40 lg:h-40 h-60 back drop-shadow-md"
                  src={company}
                  alt="projectimage"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ClientsSection;
