import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../../../utils/GlobalStyles";

const HireCTO = () => {
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
      className="flex items-center justify-center w-screen bg-slate-100">
      <div
        className={`max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-${styles.redPrimary} z-[50rem]`}>
        <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
          <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
            You can hire a CTO for your project
          </h1>
          {/* button  */}
          <button className={`xl:w-1/3 lg:w-1/3 ${styles.buttonBlackFull}`}>
            <Link to="/contact">Get a consultation</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HireCTO;
