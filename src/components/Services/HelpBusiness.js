import React from "react";
import { helpBusinesses } from "../../utils/data.js";
import styles from "../../utils/GlobalStyles.js";

const HelpBusiness = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center pt-20 pb-2 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col xl:gap-2 lg:gap-2 gap-5 items-center">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          How we can help your business
        </span>

        <span className="max-w-lg mt-4 text-lg tracking-wide font-semibold">
          As a software development company, we can deliver a wide range of
          modernization options for your software
        </span>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-lg w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 w-full flex-wrap">
          {helpBusinesses.map((category, index) => {
            return (
              <div className="flex w-full gap-10 bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-3xl shadow-md">
                <div className="flex xl:flex-row lg:flex-row flex-col gap-3" key={index}>
                  <div className="flex flex-row gap-3 text-xl" key={index}>
                    <span className={`text-${styles.redPrimary}`}>✔</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">
                      {category.title}
                    </span>
                    <span className="xl:text-lg lg:text-lg text-base text-justify">
                      {category.desc}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpBusiness;
