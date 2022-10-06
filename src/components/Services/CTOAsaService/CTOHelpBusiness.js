import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { howCanCTOHelpBusiness } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const CTOHelpBusiness = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
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
    <section
      ref={ref}
      className={`bg-${styles.blackPrimary} text-slate-50 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10`}
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col gap-10 items-center">
        {/* Text intro  */}
        <motion.span
          animate={upAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
        >
          How can CTOs help your business?
        </motion.span>

        <motion.span
          animate={upAnimation}
          className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide font-semibold"
        >
          Companies hire Chief Technology Officers when they need high-level
          technical specialists to handle software development operations.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-2xl flex xl:flex-row lg:flex-row flex-col justify-center flex-wrap w-full gap-20">
        {howCanCTOHelpBusiness.map((scope, index) => {
          return (
            <motion.div
              animate={upAnimation}
              className="flex flex-col justify-center gap-5 xl:w-1/3 lg:h-1/3 w-full"
              key={index}
            >
              <h2 className="text-slate-50 text-3xl font-semibold drop-shadow-md">
                {scope.scope}
              </h2>

              <div className="flex flex-col gap-5">
                {scope.abilities.map((ability, index) => {
                  return (
                    <motion.div
                      animate={upAnimation}
                      className="flex flex-col justify-center"
                      key={index}
                    >
                      <h2 className="text-slate-50 text-xl underline underline-offset-2 font-semibold drop-shadow-md">
                        {ability.title}
                      </h2>

                      <div className="flex flex-col">
                        <ul className="flex flex-col  pl-5">
                          {ability.desc.map((tool, index) => {
                            return (
                              <motion.li
                                animate={upAnimation}
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CTOHelpBusiness;
