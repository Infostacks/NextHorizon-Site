import React, { useState } from "react";
import { testingProcess } from "../../../utils/data.js";

const TestingProcess = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center">
      {/* top section  */}
      <div className="bg-black text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10">
        {/* Text intro  */}
        <div className="flex gap-5 flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight">
            Software testing process
          </h2>

          <div className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
            The software testing is divided into several stages to build an
            efficient testing workflow and comply with high quality standards.
          </div>

          <div className="flex">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 grid-cols-1 xl:gap-10 lg:gap-10 gap-2">
              {testingProcess.map((process, index) => {
                return (
                  <button key={index}>
                    <div
                      className={`flex flex-row items-center text-[#D90429] gap-4 text-md font-semibold py-3 px-2 rounded-3xl drop-shadow-md w-full ${`job-btn ${
                        count === index && "active-btn"
                      }`}`}
                      onClick={() => setCount(index)}
                    >
                      <span
                        className={`px-4 py-2 ${`job-btn ${
                          count === index && "text-[#D90429]"
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
      </div>

      <div className="flex flex-col gap-10 bg-[#D90429] text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10">
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif gap-5 xl:w-2/3 lg:w-2/3 w-full">
          <span className="text-4xl font-bold">
            {testingProcess[count].title}
          </span>
          <span className="text-justify xl:text-xl lg:text-xl text-base">{testingProcess[count].desc1}</span>
          <span className="text-7xl font-bold">
            {testingProcess[count].percentage}
          </span>
          <span className="xl:text-xl lg:text-xl text-base">{testingProcess[count].desc2}</span>
        </div>
      </div>
    </div>
  );
};

export default TestingProcess;
