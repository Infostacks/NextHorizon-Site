import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { appModernizationServiceBenefits } from "../../../utils/data.js";

const AppModernizationBenefits = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const upAnimation = useAnimation();
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
    }

    if (!inView) {
      upAnimation.start({ y: "5vw", opacity: 0 });
    }
  }, [inView, upAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col0 xl:mx-0 lg:mx-0 mx-10">
        {/* Text intro  */}
        <motion.span
          animate={upAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          App modernization services benefits
        </motion.span>

        <motion.span
          animate={upAnimation}
          className="xl:text-3xl lg:text-3xl text-xl tracking-wide xl:w-8/12 lg:w-3/5 w-full"
        >
          Legacy application modernization services can bring many benefits both
          for business of all sizes and domains.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10 px-10">
        {appModernizationServiceBenefits.map((benefit, index) => {
          return (
            <motion.div
              animate={upAnimation}
              className="flex flex-col justify-center gap-2"
              key={index}
            >
              <span className="text-xl font-semibold">{benefit.title}</span>
              <span className="text-lg text-justify font-serif">
                {benefit.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AppModernizationBenefits;
