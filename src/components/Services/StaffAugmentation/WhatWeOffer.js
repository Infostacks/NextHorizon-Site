/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { whatWeOffer } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const WhatWeOffer = () => {
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
    <section
      ref={ref}
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10"
    >
      {/* top section  */}
      <div className="max-w-screen-xl flex flex-col">
        {/* Text intro  */}
        <motion.span
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold"
        >
          What we offer
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
        {whatWeOffer.map((offer, index) => {
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
              className="flex flex-col justify-center xl:gap-5 lg:gap-5 gap-2 bg-slate-50 xl:p-10 lg:p-10 p-5 rounded-3xl drop-shadow-md"
              key={index}
            >
              <span className="xl:text-2xl lg:text-2xl text-base font-semibold">
                {offer.category}
              </span>

              <div className="flex flex-row flex-wrap justify-between">
                <span className="xl:text-lg lg:text-lg text-base text-justify font-serif xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
                  {offer.desc}
                </span>
                <div className="flex flex-col xl:text-lg lg:text-lg text-sm tracking-wide font-semibold">
                  {offer.expertise.map((item, index) => {
                    return (
                      <span key={index} className={`text-${styles.redPrimary}`}>
                        ✔{" "}
                        <span className={`text-${styles.blackPrimary}`}>
                          {item}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
