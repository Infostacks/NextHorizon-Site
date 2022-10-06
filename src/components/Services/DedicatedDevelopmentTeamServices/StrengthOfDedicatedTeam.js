/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { strengthOfDedicatedTeam } from "../../../utils/data.js";

const StrengthOfDedicatedTeam = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, fadeInAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 w-full flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10"
    >
      {/* top section  */}
      <div className="max-w-screen-lg text-center flex items-center flex-col">
        {/* Text intro  */}
        <motion.span
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          Strengths of a dedicated development team model
        </motion.span>

        <motion.span
          animate={fadeInAnimation}
          className="max-w-lg mt-4 text-lg tracking-wide xl:font-semibold lg:font-semibold"
        >
          A dedicated development team services bring you the perk of tight
          cooperation with the team to stay on the same page. But these are not
          all the benefits you get from this model.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10">
        {strengthOfDedicatedTeam.map((webApp, index) => {
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
              className="flex flex-col justify-center gap-3"
              key={index}
            >
              <span className="text-xl font-semibold">{webApp.title}</span>
              <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                {webApp.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StrengthOfDedicatedTeam;
