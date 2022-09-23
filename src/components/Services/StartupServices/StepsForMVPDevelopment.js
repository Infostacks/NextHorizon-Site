import React from "react";
import { Link } from "react-router-dom";
import { stepsMVPDevelopment } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const StepsForMVPDevelopment = () => {
  return (
    <section className={`bg-${styles.blackPrimary} text-slate-50 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10`}>
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          What steps to take before MVP development
        </span>

        <span className="max-w-2xl mt-4 text-lg tracking-wide">
          Prepare the ground for your product’s MVP before getting to the
          development.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col justify-center flex-wrap w-full xl:gap-20 lg:gap-14 gap-10">
        {stepsMVPDevelopment.map((step, index) => {
          return (
            <div
              className="flex flex-col justify-center xl:w-1/3 lg:w-1/3 w-full"
              key={index}
            >
              <h2 className="text-slate-50 text-3xl flex gap-3 font-semibold drop-shadow-md">
                {step.title}
              </h2>

              <div className="flex flex-col gap-5">{step.desc}</div>
            </div>
          );
        })}
      </div>
      {/* button  */}
      <button className={styles.buttonRedFull}>
        <Link to="/contact">Get free consultation</Link>
      </button>
    </section>
  );
};

export default StepsForMVPDevelopment;
