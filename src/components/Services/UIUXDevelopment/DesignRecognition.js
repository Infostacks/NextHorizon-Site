import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { designRecognition } from "../../../utils/data.js";

const DesignRecognition = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Design for mobile and web products
        </h2>

        <p className="text-2xl tracking-wide">
          Creating the same distinct style and brand identity for all platforms
          using best-proven
        </p>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col justify-center w-full gap-10">
        {designRecognition.map((webApp, index) => {
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
              className="flex flex-col items-center justify-center gap-2"
              key={index}
            >
              <img
                src={webApp.img}
                alt={webApp.title}
                className="w-52 shadow-lg rounded-3xl"
              />

              <span className="text-xl font-semibold">{webApp.title}</span>
              <span className="text-lg font-serif w-52 text-center">
                {webApp.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DesignRecognition;
