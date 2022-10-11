/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "../../../../utils/GlobalStyles";

const IOSAppForAnyPurpose = () => {
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
      className={`flex flex-col items-center justify-center w-screen bg-${styles.blackPrimary} xl:p-0 lg:p-0 p-10`}>
      <div className="max-w-screen-lg text-white z-[50rem]">
        <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 md:w-1/2">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
              Build iOS app for any purpose
            </h1>
            <span className="text-xl tracking-wider text-justify font-serif">
              We are passionate about introducing new technologies as well as checking how the
              application performs across all the devices and iOS versions supported by Apple. All
              these ensure 100% user satisfaction from the product.
            </span>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
            <img
              src="https://www.cleveroad.com/assets/icons/services/services-design/web-design.svg"
              alt=""
              className="h-[40rem]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IOSAppForAnyPurpose;
