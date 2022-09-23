import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { dedicatedDevTeam } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const DedicatedDevTeam = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 3,
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
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10"
    >
      {/* top section  */}
      <div className="max-w-screen-lg text-center flex items-center xl:px-10 flex-col gap-5">
        {/* Text intro  */}
        <motion.h1
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          Dedicated development team is a good choice to
        </motion.h1>
      </div>

      {/* DedicatedDevTeam  */}
      <div className="max-w-screen-lg grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 w-full gap-10 text-xl font-semibold">
        {dedicatedDevTeam.map((item, index) => {
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
              className="flex flex-row gap-3"
              key={index}
            >
              <span className={`text-3xl text-${styles.redPrimary}`}>
                {item.icon}
              </span>
              <span className="">{item.text}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DedicatedDevTeam;
