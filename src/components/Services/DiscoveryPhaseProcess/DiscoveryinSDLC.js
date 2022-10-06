/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import BgXl from "../../../images/bg-xl-lg.jpg";
import BgMd from "../../../images/bg-md.jpg";
import BgSm from "../../../images/bg-sm.png";

const DiscoveryinSDLC = () => {
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
    <section
      ref={ref}
      className="bg-white w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col gap-20 px-10">
        {/* Text intro  */}
        <motion.h2
          animate={leftAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          Place of Discovery in SDLC
        </motion.h2>

        <motion.p
          animate={rightAnimation}
          className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base text-justify tracking-wide"
        >
          We follow the Software Development Life Cycle (SDLC) process in our
          work. Preparation and project planning are important for further SDLC
          phases to reach cost-effective development. That's why we cover the
          Collecting requirements, Analysis, and Product design during thes
          discovery phase.
        </motion.p>
      </div>

      {/*   */}
      <motion.div
        animate={fadeInAnimation}
        className={`max-w-screen-lg flex flex-col justify-center items-center w-full gap-10 mx-10`}
      >
        <img src={BgXl} alt="" className="hidden xl:block lg:block" />
        <img
          src={BgMd}
          alt=""
          className="md:block xl:hidden lg:hidden sm:hidden hidden"
        />
        <img
          src={BgSm}
          alt=""
          className="sm:block xl:hidden lg:hidden md:hidden"
        />
      </motion.div>
    </section>
  );
};

export default DiscoveryinSDLC;
