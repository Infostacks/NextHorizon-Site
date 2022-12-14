import React, { useState } from "react";
import { customMobileApps } from "../../../utils/data.js";

const CustomMobileApps = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Custom mobile apps
        </h2>

        <p className="max-w-lg mt-4 text-gring-offset-warm-gray-500">
          Helping startups and businesses build mobile solutions that support their brand identity,
          meet market needs and encourage business growth and expansion.
        </p>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center xl:gap-20 lg:gap-14 gap-5 max-w-screen-lg w-full bg-slate-200 p-5 rounded-[3rem] drop-shadow-md">
        <div className="flex flex-row w-full flex-wrap">
          {customMobileApps.map((category, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row text-2xl items-center py-3 px-4 font-semibold underline rounded-full drop-shadow-md ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}>
                  {category.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex xl:flex-row lg:flex-row flex-col w-full gap-10">
          <p className="flex flex-wrap text-justify xl:text-xl lg:text-xl text-base xl:w-8/12">
            {customMobileApps[count].desc}
          </p>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{customMobileApps[count].time}</h2>
              <p>Average development time</p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{customMobileApps[count].duration}</h2>
              <p>Average project length</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMobileApps;
