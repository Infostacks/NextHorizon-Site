/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { connectOurTeams } from "../../utils/data.js";
import styles from "../../utils/GlobalStyles.js";

const ConnectOurTeam = () => {
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
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 px-5 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <motion.h2
          animate={fadeInAnimation}
          className="text-4xl font-bold tracking-tight sm:text-5xl">
          Connect with our Team
        </motion.h2>

        <motion.p
          animate={fadeInAnimation}
          className="max-w-lg mt-4 text-gring-offset-warm-gray-500">
          Let's communicate! Don't hesitate to contact us with your projects, ideas, and questions.
        </motion.p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row md:flex-row flex-col w-full xl:px-10 px-5 gap-10">
        {connectOurTeams.map((reward, index) => {
          return (
            <motion.div
              initial={{ y: index % 2 === 0 ? "-10vh" : "10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "spring",
                  bounce: 0.6,
                },
              }}
              key={index}
              className="flex flex-col gap-2">
              <span className="text-lg font-bold text-gray-700">{reward.heading}</span>
              <h3 className={`text-lg font-bold text-${styles.redPrimary} hover:cursor-pointer`}>
                {reward.email}
              </h3>
              <span className="text-lg text-gray-500">{reward.desc}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ConnectOurTeam;
