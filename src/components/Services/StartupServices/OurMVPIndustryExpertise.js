import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mvpIndustryExpertise } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const OurMVPIndustryExpertise = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center">
      {/* top section  */}
      <div
        className={`bg-${styles.blackPrimary} text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10`}>
        {/* Text intro  */}
        <div className="flex gap-5 flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight">
            Our industry expertise
          </h2>

          <div className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
            Our experience, along with the knowledge of industry-specific tech and security
            standards, are what give us enough power to build software of any complexity
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-2">
            {mvpIndustryExpertise.map((phase, index) => {
              return (
                <motion.button
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
                  key={index}>
                  <div
                    className={`flex flex-row items-center text-${
                      styles.redPrimary
                    } gap-4 text-sm font-semibold py-2 px-1 rounded-3xl drop-shadow-md w-full ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => setCount(index)}>
                    <span
                      className={`px-2 py-1 ${`job-btn ${
                        count === index && `text-${styles.redPrimary}`
                      }`} bg-white rounded-full`}>
                      {phase.id}
                    </span>
                    {phase.category}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col gap-10 bg-${styles.redPrimary} text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10`}>
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif gap-5 xl:w-1/2 lg:w-1/2 w-full">
          <span className="text-4xl font-bold">{mvpIndustryExpertise[count].category}</span>
          <span className="text-justify xl:text-xl lg:text-xl text-base">
            {mvpIndustryExpertise[count].desc}
          </span>
          <span className="text-3xl font-semibold underline underline-offset-1">
            Recent Project:
          </span>
          <span className="xl:text-xl lg:text-xl text-base">
            {mvpIndustryExpertise[count].recentProject}
          </span>
        </div>

        {/* button  */}
        <button className={styles.buttonBlackFull}>
          <Link to="/contact">Explore Project</Link>
        </button>
      </div>
    </div>
  );
};

export default OurMVPIndustryExpertise;
