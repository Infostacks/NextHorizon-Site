import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mobileAndWebProducts } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const WebAndMobileApps = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Design for mobile and web products
        </h2>

        <p className="max-w-lg text-2xl">
          Creating the same distinct style and brand identity for all platforms using best-proven
        </p>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col w-full gap-10">
        {mobileAndWebProducts.map((webApp, index) => {
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
              className={`flex flex-col justify-center bg-${styles.redPrimary} bg-opacity-80 rounded-3xl shadow-lg`}
              key={index}>
              <div className="">
                <img src={webApp.img} alt={webApp.title} className="w-full h-full" />
              </div>

              <div className="flex flex-col gap-5 text-slate-100 px-3 py-5">
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

export default WebAndMobileApps;
