/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../../../utils/GlobalStyles";

const ReadyDiscoveryTeam = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });

      rightAnimation.start({
        x: 0,
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
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation, fadeInAnimation]);

  return (
    <motion.div
      ref={ref}
      animate={fadeInAnimation}
      className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col justify-center items-center gap-5 p-5 mt-20 xl:px-20 rounded-[3rem] bg-gradient-to-bl from-indigo-500 via-cyan-500 to-indigo-500 w-5/6"
    >
      {/* left  */}
      <motion.div
        animate={rightAnimation}
        className="flex flex-col justify-around gap-5 h-full text-white"
      >
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
          Ready to Start With Our Discovery Team Experts?
        </span>

        <div className="flex xl:flex-row lg:flex-row flex-col items-center justify-between gap-5 w-full">
          {/* button  */}
          <button className={styles.buttonBlackFull}>
            <Link to="/contact">Contact Us</Link>
          </button>

          <span className="text-white xl:text-xl lg:text-xl text-base xl:w-2/3 lg:w-2/3 w-full">
            Other Cleveroad experts are engaged in the process if additional
            expertise is needed.
          </span>
        </div>
      </motion.div>

      {/* right  */}
      <motion.div
        animate={leftAnimation}
        className="flex flex-col justify-around gap-5 w-full h-full text-white"
      >
        <span className="text-white xl:text-xl lg:text-xl text-base">
          The Discovery phase is conducted by a qualified team of: The Discovery
          phase is conducte
        </span>
        <div className="flex xl:flex-row lg:flex-row flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-white text-lg">Business Analyst</span>
            <span className="text-white text-lg">UI/UX designer</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white text-lg">Solution Architect</span>
            <span className="text-white text-lg">UI/UX designer</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReadyDiscoveryTeam;
