/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { modernizationChallenges } from "../../../utils/data.js";

const ModernizationChallenges = () => {
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
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 pb-2 overflow-x-hidden"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col gap-5 xl:mx-0 lg:mx-0 mx-10">
        {/* Text intro  */}
        <motion.span
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          App modernization challenges
        </motion.span>

        <motion.span
          animate={fadeInAnimation}
          className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide"
        >
          App modernization services are often tied with certain challenges that
          we can solve easily.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
        {modernizationChallenges.map((item, index) => {
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
              className="flex flex-col justify-center gap-5 bg-slate-50 p-10 rounded-3xl drop-shadow-md"
              key={index}
            >
              <div className="flex flex-row flex-wrap justify-between">
                <div className="text-3xl font-semibold xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                  {item.challenge}
                </div>
                <span className="text-lg text-justify font-serif xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ModernizationChallenges;
