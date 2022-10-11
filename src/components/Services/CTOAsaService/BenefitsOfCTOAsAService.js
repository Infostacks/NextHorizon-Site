/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { benefitsCtoAsAService } from "../../../utils/data.js";

const BenefitsOfCTOAsAService = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const upAnimation = useAnimation();
  const downAnimation = useAnimation();
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

      downAnimation.start({
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
      downAnimation.start({ y: "-5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, upAnimation, downAnimation, fadeInAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 pb-2 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col xl:gap-0 lg:gap-0 gap-10 items-center">
        {/* Text intro  */}
        <motion.span
          animate={upAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Benefits of CTO as a Service
        </motion.span>

        <motion.span
          animate={downAnimation}
          className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide font-semibold">
          Our tech executives effectively manage development teams, plan cost-effective development
          strategies, and comply with all clients' needs
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
        {benefitsCtoAsAService.map((benefit, index) => {
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
              className="flex flex-col justify-center bg-slate-50 xl:p-10 lg:p-10 p-5 rounded-3xl drop-shadow-md"
              key={index}>
              <div className="flex flex-row flex-wrap justify-between">
                <div className="text-3xl font-semibold xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                  {benefit.benefit}
                </div>
                <span className="xl:text-xl lg:text-xl text-base text-justify font-serif xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                  {benefit.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsOfCTOAsAService;
