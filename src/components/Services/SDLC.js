import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { softwareDevelopmentFlow } from "../../utils/data.js";
import styles from "../../utils/GlobalStyles.js";

const SDLC = () => {
  return (
    <div className="flex flex-col justify-center w-screen items-center">
      <section className="flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-lg w-full flex items-center justify-center gap-10 flex-col xl:p-20 lg:p-20 p-8">
          {/* top section  */}
          <div className="flex flex-col items-center">
            {/* Text intro  */}
            <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-center font-bold tracking-tight">
              Our software development flow
            </h2>
            <p className="xl:text-xl lg:text-xl text-base">
              We follow an established software development life cycle (SDLC) to build a
              cost-effective product that meets your requirements and market demands
            </p>
          </div>

          <div className="max-w-screen-lg space-y-4 w-full flex flex-col items-center">
            {/* SDLC    */}
            {softwareDevelopmentFlow.map((process, index) => {
              return (
                <motion.details
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
                  key={index}
                  className={`p-6 border-l-4 border-${styles.redPrimary} bg-gray-50 drop-shadow-md group w-full`}
                  close>
                  <summary className="flex items-center justify-between cursor-pointer w-full">
                    <h5 className="text-lg font-semibold text-gray-900">{process.question}</h5>

                    <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700 w-full xl:bg-gradient-to-r lg:bg-gradient-to-r from-slate-200 to-slate-50 xl:rounded-[3rem] lg:rounded-[3rem] xl:p-3 lg:p-3 drop-shadow-md">
                    {process.answer}
                    <div className="flex xl:flex-row lg:flex-row flex-col xl:gap-10 lg:gap-10 gap-5 justify-center">
                      <div className="flex flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-full xl:p-5 lg:p-5">
                        <span className="text-2xl font-bold text-gray-900">{process.title}</span>
                        <span className="xl:text-base lg:text-lg text-base text-gray-700 text-justify">
                          {process.desc}
                        </span>
                      </div>

                      {/* other links data  */}
                      <div className="flex flex-col justify-start gap-6 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
                        <span className="text-2xl font-bold text-gray-700">Staff</span>
                        <span className="flex flex-row flex-wrap items-center gap-4 text-sm text-slate-700">
                          {process.staff.map((member, index) => {
                            return <span key={index}>➙ {member}</span>;
                          })}
                        </span>
                        {/* button  */}
                        <button className={styles.buttonBlackFull}>
                          <Link to="/contact">Book a consultation!</Link>
                        </button>
                      </div>
                    </div>
                  </p>
                </motion.details>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDLC;
