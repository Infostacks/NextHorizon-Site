import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { devOpsValues } from "../../../utils/data.js";

const DevOpsValues = () => {
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
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:items-center lg:items-center xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <motion.span
          animate={leftAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          DevOps values
        </motion.span>

        <motion.span
          animate={rightAnimation}
          className="max-w-2xl mt-4 xl:text-xl lg:text-xl text-base tracking-wide"
        >
          Our DevOps partner will help you with cloud infrastructure, continuous
          integration, and automation. We develop and maintain effective
          solutions bearing in mind industry best practices, cost savings, and
          your business workflows.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full xl:gap-20 lg:gap-20 gap-10 mx-10">
        {devOpsValues.map((value, index) => {
          return (
            <motion.div
              animate={fadeInAnimation}
              className="flex flex-col justify-center"
              key={index}
            >
              <h2 className="text-slate-900 text-3xl font-semibold drop-shadow-md">
                {value.title}
              </h2>

              <div className="w-full xl:text-xl lg:text-xl text-base">
                {value.desc}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DevOpsValues;
