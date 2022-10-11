import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CareersHero from "../../images/careersHero.png";
import styles from "../../utils/GlobalStyles";

const HeroSection = () => {
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
      className="flex xl:flex-row lg:flex-row flex-col items-center justify-around h-screen w-full">
      {/* text  */}
      <div className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold xl:w-1/2 lg:w-1/2 w-full flex justify-center items-center ">
        <motion.span
          animate={fadeInAnimation}
          className={`xl:w-3/6 lg:w-3/6 w-full xl:px-0 lg:px-0 px-10 text-${styles.blackPrimary}`}>
          Find your dream jobs with us easily
        </motion.span>
      </div>

      {/* heroImage */}
      <motion.div
        animate={fadeInAnimation}
        className="h-full flex items-center xl:w-1/2 lg:w-1/2 w-full">
        <img src={CareersHero} alt="" className="h-4/6" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
