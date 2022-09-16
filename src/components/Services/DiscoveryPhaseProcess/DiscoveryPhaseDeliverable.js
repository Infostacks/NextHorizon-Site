/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { discoveryPhaseDeliverable } from "../../../utils/data.js";

const DiscoveryPhaseDeliverable = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen flex flex-col xl:gap-10 lg:gap-10 gap-2 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Discovery phase deliverables
        </h1>

        <span className="max-w-lg xl:text-3xl lg:text-3xl text-xls text-slate-800">
          Documents that describe the project requirements and tech aspects of
          the development
        </span>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center xl:gap-20 lg:gap-14 gap-10 max-w-screen-lg w-full">
        <div className="flex xl:flex-row lg:flex-row flex-col w-full flex-wrap">
          {discoveryPhaseDeliverable.map((category, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row text-2xl items-center py-3 px-4 font-semibold rounded-full drop-shadow-md underline ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}
                >
                  {category.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex w-full gap-10 bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-3xl shadow-md">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10">
            {discoveryPhaseDeliverable[count].data.map((item, index) => {
              return (
                <div
                  className="flex xl:flex-row lg:flex-row flex-col gap-3"
                  key={index}
                >
                  <span className="text-2xl font-semibold bg-[#D90429] rounded-full py-1 px-3 h-fit w-fit text-slate-100">
                    {item.id}
                  </span>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">{item.title}</span>
                    <span className="xl:text-xl lg:text-xl text-base text-justify">{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPhaseDeliverable;
