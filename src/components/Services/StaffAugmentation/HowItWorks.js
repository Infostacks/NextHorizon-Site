import React, { useState } from "react";
import { howItWorks } from "../../../utils/data.js";

const HowItWorks = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center">
      {/* top section  */}
      <div className="bg-black text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10">
        {/* Text intro  */}
        <div className="flex gap-5 flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight">
            How it works
          </h2>

          <div className="max-w-lg mt-4 text-gring-offset-warm-gray-500 tracking-wide">
            We follow a proven multi-step assembling process to provide the best
            dedicated development team that meets your requirements.
          </div>
          <div className="flex flex-col">
            {howItWorks.map((process, index) => {
              return (
                <button key={index}>
                  <div
                    className={`flex flex-row items-center text-rose-600 gap-4 text-md font-semibold py-3 px-2 rounded-3xl drop-shadow-md w-full ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => setCount(index)}
                  >
                    <span
                      className={`px-4 py-2 ${`job-btn ${
                        count === index && "text-rose-600"
                      }`} bg-white rounded-full`}
                    >
                      {process.id}
                    </span>
                    {process.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-rose-600 text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10">
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif gap-5 xl:w-1/2 lg:w-1/2 w-full">
          <span className="xl:text-4xl lg:text-4xl text-xl font-bold">
            {howItWorks[count].title}
          </span>
          <span className="text-justify xl:text-xl lg:text-xl text-base">{howItWorks[count].desc1}</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
