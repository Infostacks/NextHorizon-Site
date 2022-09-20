import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { discoveryPhaseDeliverable } from "../../../utils/data.js";

const DiscoveryPhaseDeliverable = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const [count, setCount] = useState(0);
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
      className="w-screen flex flex-col gap-5 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <motion.h1
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          Discovery phase deliverables
        </motion.h1>

        <motion.span
          animate={fadeInAnimation}
          className="max-w-lg xl:text-3xl lg:text-3xl text-xls text-slate-800"
        >
          Documents that describe the project requirements and tech aspects of
          the development
        </motion.span>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-10 max-w-screen-lg w-full">
        <div className="flex xl:flex-row lg:flex-row flex-col w-full flex-wrap">
          {discoveryPhaseDeliverable.map((category, index) => {
            return (
              <motion.button animate={fadeInAnimation} key={index}>
                <div
                  className={`flex flex-row text-2xl items-center py-3 px-4 font-semibold rounded-full drop-shadow-md underline ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}
                >
                  {category.phase}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex w-full gap-10 bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-3xl shadow-md">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10">
            {discoveryPhaseDeliverable[count].data.map((item, index) => {
              return (
                <motion.div
                  animate={fadeInAnimation}
                  className="flex xl:flex-row lg:flex-row flex-col gap-3"
                  key={index}
                >
                  <span className="text-2xl font-semibold bg-[#D90429] rounded-full py-[.15rem] px-3 h-fit w-fit text-slate-100">
                    {item.id}
                  </span>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">{item.title}</span>
                    <span className="xl:text-xl lg:text-xl text-base text-justify">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPhaseDeliverable;
