import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { industries } from "../../utils/data.js";

const Industries = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

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
    }

    if (!inView) {
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation]);
  return (
    <div className="overflow-x-hidden bg-slate-100 w-full">
      <section ref={ref} className="flex flex-col items-center justify-center pt-20 pb-2">
        <div className="max-w-screen-lg w-full flex items-center justify-center gap-10 flex-col">
          {/* top section  */}
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 mx-10">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <motion.h2  animate={leftAnimation} className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-center font-bold tracking-tight">
                A robust payments platform, built with intelligence
              </motion.h2>
              <motion.p  animate={rightAnimation} className="text-xl text-justify">
                We’re successful in receiving top worth position to meet
                benchmark through maintaining a lead in rating, score the first
                rank in software & IT oriented solutions due to our strong tech
                assistance to retain benchmark by promoting brand awareness,
                improving business positioning, and ensure trust and credibility
                to build long-term relationships with customers.
              </motion.p>
            </div>
          </div>

          {/* industries  */}
          <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
            {industries.map((industry, index) => {
              return (
                <div
                  className="flex flex-col justify-center bg-slate-50 xl:p-10 lg:p-10 p-5 rounded-3xl drop-shadow-md"
                  key={index}
                >
                  <div className="flex flex-row flex-wrap justify-between">
                    <div className="text-3xl font-semibold xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                      <span className="text-5xl text-[#D90429] drop-shadow-md z-40">
                        {industry.icon}
                      </span>

                      <span className="text-2xl font-semibold text-gray-700">
                        {industry.title}
                      </span>
                    </div>
                    <span className="xl:text-xl lg:text-xl text-base text-justify font-serif xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                      {industry.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
