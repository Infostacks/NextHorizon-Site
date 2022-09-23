import React from "react";
import { motion } from "framer-motion";
import { techForAdvanceWebApps } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const AdvanceWebApps = () => {
  return (
    <section
      className={`bg-${styles.blackPrimary} text-slate-50 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10`}
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold text-center tracking-tight">
          Technologies for advanced web apps
        </span>

        <span className="max-w-4xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Without limiting your functional requirements, we use tools and
          services that ensure the best user experience in your final product.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-row justify-center flex-wrap w-full xl:gap-20 lg:gap-14 gap-10 mx-10">
        {techForAdvanceWebApps.map((service, index) => {
          return (
            <motion.div
              initial={{ x: index % 2 === 0 ? "-10vw" : "10vw", opacity: 0 }}
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
              key={index}
            >
              <h2 className="text-slate-50 text-3xl font-semibold drop-shadow-md">
                {service.title}
              </h2>

              <div className="flex flex-col gap-5">
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
                        key={index}
                      >
                        {tool}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvanceWebApps;
