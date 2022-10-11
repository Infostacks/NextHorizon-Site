import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { certifications } from "../../utils/data.js";

const Certifications = () => {
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
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <motion.h2
          animate={rightAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Certifications
        </motion.h2>

        <motion.p animate={leftAnimation} className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl">
          We keep deepening the expertise to meet your highest expectations and build even more
          innovative software
        </motion.p>
      </div>

      {/* awards  */}
      <motion.div
        animate={fadeInAnimation}
        className="max-w-screen-lg grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-10">
        {certifications.map((reward, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-4">
              <img
                src={reward.img}
                alt={reward.title}
                className="imgColorChange object-cover w-60 h-60 bg-zinc-100 p-6 rounded-[3rem] shadow-xl"
              />

              <span className="text-lg font-bold text-gray-700">{reward.title}</span>
              <span className="text-md text-gray-500 text-center w-52 ">{reward.desc}</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Certifications;
