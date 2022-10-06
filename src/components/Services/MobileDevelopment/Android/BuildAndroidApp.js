/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "../../../../utils/GlobalStyles";

const BuildAndroidApp = () => {
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
      className={`flex flex-col items-center justify-center w-screen bg-${styles.blackPrimary} xl:p-0 lg:p-0 p-10`}
    >
      <div className="max-w-screen-lg text-white z-[50rem]">
        <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 md:w-1/2">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
              Build Android app for any purpose
            </h1>
            <span className="xl:text-xl lg:text-xl text-base tracking-wider text-justify font-serif">
              Our software engineers design applications with attention to
              detail and bearing in mind every peculiarity of the operating
              system. They take care of the application’s compatibility with all
              Android versions and devices so you can be sure your users will
              get a top-notch final product.
            </span>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
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

export default BuildAndroidApp;
