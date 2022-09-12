import React from "react";
import {
  uxuiTimeTestedApproach,
  uxuiTimeTestedApproach1,
} from "../../../utils/data.js";

import redBG from "../../../images/redBG.png";

const UIUXTimeTestedApproach = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Our time-tested UI/UX approach
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          User experience and user interface are inseparable and form an overall
          impression of your product
        </p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-2xl flex flex-row flex-wrap xl:justify-center lg:justify-center gap-5 items-center w-full">
        {/* left side  */}
        <div className="flex flex-col justify-center gap-5">
          {uxuiTimeTestedApproach.map((item, index) => {
            return (
              <span key={index} className="text-2xl font-serif">
                {item}
              </span>
            );
          })}
        </div>

        {/* center  */}
        <div>
          <img src={redBG} alt="" className="" />
        </div>

        {/* right side  */}
        <div className="flex flex-col justify-center gap-5">
          {uxuiTimeTestedApproach1.map((item, index) => {
            return (
              <span key={index} className="text-2xl font-serif">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UIUXTimeTestedApproach;
