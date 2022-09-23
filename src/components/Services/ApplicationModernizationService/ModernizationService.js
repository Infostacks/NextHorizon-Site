import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { modernizationServicesWeProvide } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const ModernizationService = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
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
      className="w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col gap-5 xl:mx-0 lg:mx-0 mx-10">
        {/* Text intro  */}
        <motion.span
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          App modernization services we provide
        </motion.span>

        <motion.span
          animate={fadeInAnimation}
          className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide"
        >
          As a software development company, we can deliver a wide range of
          modernization options for your software.
        </motion.span>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-lg w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 w-full flex-wrap">
          {modernizationServicesWeProvide.map((category, index) => {
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
                className="flex w-full gap-10 bg-slate-200 p-10 rounded-3xl shadow-md"
              >
                <div className="flex flex-row gap-3" key={index}>
                  <div className="flex flex-row gap-3 text-xl" key={index}>
                    <span className={`text-${styles.redPrimary}`}>✔</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">
                      {category.title}
                    </span>
                    <span className="text-lg text-justify">
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

export default ModernizationService;
