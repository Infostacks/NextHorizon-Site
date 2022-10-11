import React from "react";
import { motion } from "framer-motion";
import { techForAdvanceAndroidApps } from "../../../../utils/data.js";
import styles from "../../../../utils/GlobalStyles.js";

const TechForAdvanceAndroidApps = () => {
  return (
    <section
      className={`bg-${styles.blackPrimary} text-slate-50 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10`}>
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center gap-10 flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold text-center tracking-tight">
          Technologies for advanced Android apps
        </span>

        <span className="max-w-4xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          We use a set of time-tested technologies and services to deliver your app functionality in
          the short term and build a great user experience
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-row justify-center flex-wrap w-full xl:gap-20 lg:gap-14 gap-10 mx-10">
        {techForAdvanceAndroidApps.map((service, index) => {
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
              className="flex flex-col justify-center xl:w-1/3 lg:w-1/3 w-full gap-5"
              key={index}>
              <h2 className="text-slate-50 text-3xl font-semibold drop-shadow-md">
                {service.title}
              </h2>

              <ul className="flex flex-col gap-3 pl-5">
                {service.desc.map((tool, index) => {
                  return (
                    <motion.li
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
                      className="xl:text-xl lg:text-xl text-base font-serif tracking-wider"
                      key={index}>
                      {tool}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechForAdvanceAndroidApps;
