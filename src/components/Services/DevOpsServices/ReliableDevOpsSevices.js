import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { reliableDevOpsSevices } from "../../../utils/data.js";

const ReliableDevOpsSevices = () => {
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
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center flex-col">
        {/* Text intro  */}
        <motion.span
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
          Reliable DevOps services
        </motion.span>

        <motion.span
          animate={fadeInAnimation}
          className="max-w-2xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          We’ll help you reduce time to market without sacrificing reliability, security, and
          compliance. Streamline your processes, improve efficiency, and develop new ideas faster
          with our assistance.
        </motion.span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col justify-center flex-wrap w-full gap-20">
        {reliableDevOpsSevices.map((service, index) => {
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
              <h2 className="text-slate-900 text-3xl font-semibold drop-shadow-md">
                {service.title}
              </h2>

              <ul className="flex flex-col pl-5">
                {service.desc.map((tool, index) => {
                  return (
                    <li
                      className="xl:text-xl lg:text-xl text-base font-serif tracking-wider"
                      key={index}>
                      {tool}
                    </li>
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

export default ReliableDevOpsSevices;
