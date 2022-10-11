import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { perksAndBenifits } from "../../utils/data.js";
import styles from "../../utils/GlobalStyles.js";

const PerksAndBenifits = () => {
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
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <motion.h2
          ref={ref}
          animate={fadeInAnimation}
          className={`text-${styles.blackPrimary} xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight`}>
          Perks and Benefits
        </motion.h2>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {perksAndBenifits.map((benifit, index) => {
          return (
            <motion.div
              initial={{ y: index % 2 === 0 ? "-10vh" : "10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  bounce: 0.5,
                  type: "spring",
                },
              }}
              className="flex flex-col justify-center p-5 drop-shadow-md rounded-3xl bg-white gap-5"
              key={index}>
              <div className={`text-5xl text-${styles.redPrimary}`}>{benifit.icon}</div>
              <div className="text-xl font-semibold">{benifit.title}</div>
              <div>{benifit.desc}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PerksAndBenifits;
