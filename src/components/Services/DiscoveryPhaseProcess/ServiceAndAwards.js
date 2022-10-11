/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { discoveryPhaseProcess } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const ServiceAndAwards = () => {
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
    <div
      ref={ref}
      animate={fadeInAnimation}
      className="flex xl:flex-row lg:flex-row flex-col justify-between gap-5 max-w-screen-lg my-10 xl:px-0 lg:px-0 px-10">
      <div className="flex flex-col xl:text-xl lg:text-xl text-base text-justify gap-5 xl:w-1/2 lg:w-1/2 w-full">
        <motion.span animate={rightAnimation}>
          The Discovery phase is a process that takes place before kicking off project development.
          Discovery services offered by Nexxt.ai help you turn project requirements into a clear
          plan to speed up the development and improve the product quality. A properly conducted
          Discovery phase saves up to $200 000 on product development: it's considerably bigger than
          the price of discovery.
        </motion.span>
      </div>

      {/* info data  */}
      <div className="flex flex-col gap-5 justify-center">
        {discoveryPhaseProcess.map((item, index) => {
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
              className="flex flex-row gap-3 xl:text-xl lg:text-xl text-base"
              key={index}>
              <span className={`text-${styles.redPrimary}`}>✔</span>
              <span>{item}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceAndAwards;
