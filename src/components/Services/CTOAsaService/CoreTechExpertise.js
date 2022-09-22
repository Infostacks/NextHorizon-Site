import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { ctoTechExpertise } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const CoreTechExpertise = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const [count, setCount] = useState(0);
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
    <div
      ref={ref}
      className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center"
    >
      {/* top section  */}
      <div className={`bg-${styles.blackPrimary} text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10`}>
        {/* Text intro  */}
        <div className="flex gap-5 flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <motion.h2
            animate={upAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight"
          >
            Core tech-specific expertise
          </motion.h2>

          <motion.div
            animate={upAnimation}
            className="max-w-lg mt-4 text-xl tracking-wide"
          >
            With years of experience working on various industry-specific
            projects, our CTOs have a clear vision of how to build a product
            from scratch and polish it afterward.
          </motion.div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-2">
            {ctoTechExpertise.map((tech, index) => {
              return (
                <motion.button animate={upAnimation} key={index}>
                  <div
                    className={`flex flex-row items-center text-${styles.redPrimary} gap-4 text-md font-semibold py-2 px-1 rounded-3xl drop-shadow-md w-full ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => setCount(index)}
                  >
                    <span
                      className={`px-[.5rem] py-1 ${`job-btn ${
                        count === index && `text-${styles.redPrimary}`
                      }`} bg-white rounded-full`}
                    >
                      {tech.id}
                    </span>
                    {tech.category}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`flex flex-col xl:gap-10 lg:gap-10 gap-2 bg-${styles.redPrimary} text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10`}>
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif xl:gap-5 lg:gap-5 gap-2 xl:w-1/2 lg:w-1/2 w-full">
          <motion.span animate={upAnimation} className="text-4xl font-bold">
            {ctoTechExpertise[count].category}
          </motion.span>
          <motion.span animate={upAnimation} className="text-base">
            {ctoTechExpertise[count].desc}
          </motion.span>
          <motion.span
            animate={upAnimation}
            className="text-3xl font-semibold underline underline-offset-1"
          >
            Recent Project:
          </motion.span>
          <motion.span
            animate={upAnimation}
            className="xl:text-xl lg:text-xl text-base"
          >
            {ctoTechExpertise[count].recentProject}
          </motion.span>
        </div>

        {/* button  */}
        <button className={styles.buttonBlackFull}>
          <Link to="/contact">Explore Project</Link>
        </button>
      </div>
    </div>
  );
};

export default CoreTechExpertise;
