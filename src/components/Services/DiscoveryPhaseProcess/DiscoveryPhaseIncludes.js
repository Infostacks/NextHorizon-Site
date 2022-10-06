import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { discoveryPhaseIncludes } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const DiscoveryPhaseIncludes = () => {
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
      className="xl:h-[55rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center"
    >
      {/* top section  */}
      <div className={`bg-${styles.blackPrimary} text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full py-10`}>
        {/* Text intro  */}
        <div className="flex gap-5  flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <motion.h2
            animate={rightAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight"
          >
            Discovery phase includes
          </motion.h2>

          <motion.div
            animate={rightAnimation}
            className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide"
          >
            The discovery phase's main goal is to exclude unknowns, prepare
            technical basis and UX design following your needs, and provide an
            accurate project time and cost estimation in the end.
          </motion.div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-0">
            {discoveryPhaseIncludes.map((phase, index) => {
              return (
                <motion.button animate={rightAnimation} key={index}>
                  <div
                    className={`flex flex-row items-center text-${styles.redPrimary} gap-2 text-sm font-semibold py-3 px-2 rounded-3xl drop-shadow-md z-50 w-full ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => setCount(index)}
                  >
                    <span
                      className={`px-3 py-[0.6rem] ${`job-btn ${
                        count === index && `text-${styles.redPrimary}`
                      }`} bg-white rounded-full`}
                    >
                      {phase.id}
                    </span>
                    {phase.category}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`flex flex-col xl:gap-10 lg:gap-10 gap-2 bg-${styles.redPrimary} bg-opacity-90 text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center py-10`}>
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif xl:gap-5 lg:gap-5 gap-2 xl:w-2/3 lg:w-2/3 w-full">
          <motion.span animate={leftAnimation} className="text-4xl font-bold">
            {discoveryPhaseIncludes[count].category}
          </motion.span>
          <motion.span
            animate={leftAnimation}
            className="text-justify xl:text-xl lg:text-xl text-base"
          >
            {discoveryPhaseIncludes[count].desc}
          </motion.span>
          <motion.span
            animate={leftAnimation}
            className="text-3xl font-semibold underline underline-offset-1"
          >
            Staff:
          </motion.span>
          <span className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-5 gap-2">
            {discoveryPhaseIncludes[count].staff.map((item, index) => {
              return (
                <motion.span
                  animate={leftAnimation}
                  className="xl:text-xl lg:text-xl text-base"
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </span>
        </div>

        {/* button  */}
        <button className={styles.buttonBlackFull}>
          <Link to="/contact">Book a consultation</Link>
        </button>
      </div>
    </motion.div>
  );
};

export default DiscoveryPhaseIncludes;
