import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { productDiscoveryProcess } from "../../../utils/data.js";

const ProductDiscoveryProcess = () => {
  const [count, setCount] = useState(0);
  const [toolData, setToolData] = useState(0);

  return (
    <div className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Product discovery process
        </h2>
      </div>

      {/* categories plan */}
      <div className="flex flex-col justify-center items-center xl:gap-20 lg:gap-14 gap-5 max-w-screen-xl w-full drop-shadow-md">
        <div className="flex flex-row w-full xl:gap-10 lg:gap-10 gap-2 flex-wrap">
          {productDiscoveryProcess.map((process, index) => {
            return (
              <div className="flex flex-col gap-1">
                <span className="xl:text-2xl lg:text-2xl font-semibold">
                  {process.discoveryProcess}
                </span>
                <button className="flex flex-col justify-center" key={index}>
                  <div
                    className={`flex flex-row items-center xl:gap-10 lg:gap-10 gap-5 py-3 bg-slate-200  justify-center px-4 font-semibold rounded-full drop-shadow-md z-50 ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => {
                      setCount(index);
                      setToolData(0);
                    }}
                  >
                    {process.dayDots.map((dot, index) => {
                      return <span key={index}>{dot}</span>;
                    })}
                  </div>
                </button>
                <div className="flex flex-row justify-between px-2 text-slate-600">
                  <span>{process.dayFrom}</span>
                  <span>{process.dayTo}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex xl:flex-row lg:flex-row flex-col justify-between w-full xl:gap-10 lg:gap-10 gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-semibold">
              {productDiscoveryProcess[count].discoveryProcess}
            </span>
            <span className="xl:text-xl lg:text-xl text-base">
              {productDiscoveryProcess[count].heading}
            </span>
          </div>
          <span className="text-lg font-semibold">
            {productDiscoveryProcess[count].duration}
          </span>
        </div>

        {/* Show Tool Data  */}
        <div className="flex flex-col gap-10 max-w-screen-xl w-full bg-slate-200 xl:p-20 lg:p-20 p-8 rounded-[3rem] drop-shadow-md">
          {productDiscoveryProcess[count].plansRequirements.map(
            (plan, index) => {
              return (
                <div
                  key={index}
                  className={`flex xl:flex-row lg:flex-row flex-col justify-between text-lg items-center`}
                  onClick={() => setToolData(index)}
                >
                  {/* item 1 */}
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold">Business Intelligence</span>
                    <ul className="pl-5 xl:text-xl lg:text-xl text-base">
                      {plan.bisunessIntelligence.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>

                  {/* item 2 */}
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold">Solutions Architecture</span>
                    <ul className="pl-5 xl:text-xl lg:text-xl text-base">
                      {plan.bisunessIntelligence.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>

                  {/* item 3 */}
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold">UX/UX Design</span>
                    <ul className="pl-5 xl:text-xl lg:text-xl text-base">
                      {plan.bisunessIntelligence.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDiscoveryProcess;
