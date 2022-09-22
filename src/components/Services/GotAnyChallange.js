/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../../utils/GlobalStyles";

const GotAnyChallange = () => {
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
      className={`flex items-center justify-center w-screen bg-${styles.redPrimary}`}
    >
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-white z-[50rem]">
        <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
          <span className="text-xl text-slate-50">
            Schedule a meeting to get consulted about the software development
            services you need.
          </span>
          <div className="flex flex-col gap-4">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] text-slate-100 font-semibold">
              Got any tech challenges?
            </h1>
            {/* button  */}
            <motion.button
              animate={fadeInAnimation}
              className={styles.buttonBlackFull}
            >
              <Link to="/contact">Contact us</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GotAnyChallange;

