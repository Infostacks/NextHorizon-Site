import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { discoveryPhaseValue } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const DiscoveryPhaseValue = () => {
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
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <motion.h2
          animate={rightAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          Discovery phase value
        </motion.h2>

        <motion.p
          animate={leftAnimation}
          className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide"
        >
          Discovery services offered by Cleveroad help you turn project
          requirements into a clear plan to speed up the development and improve
          the product quality
        </motion.p>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-row flex-wrap justify-center w-full gap-10 mx-10">
        {discoveryPhaseValue.map((webApp, index) => {
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
              className={`flex flex-col justify-center bg-${styles.redPrimary} h-[30rem] w-[25rem] gap-5 rounded-3xl shadow-lg`}
              key={index}
            >
              <div className="flex flex-col justify-around gap-5 text-slate-100 xl:px-10 lg:px-10 px-5 py-5">
                <span className="text-xl font-semibold">{webApp.title}</span>
                <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                  {webApp.desc}
                </span>
                {/* button  */}
                <button className={styles.buttonBlackFull}>
                  <Link to="/contact">Explore more</Link>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DiscoveryPhaseValue;
