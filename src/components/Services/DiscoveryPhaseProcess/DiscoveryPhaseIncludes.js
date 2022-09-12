import React, { useState } from "react";
import { Link } from "react-router-dom";
import { discoveryPhaseIncludes } from "../../../utils/data.js";

const DiscoveryPhaseIncludes = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center">
      {/* top section  */}
      <div className="bg-black text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10">
        {/* Text intro  */}
        <div className="flex gap-5  flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight">
            Discovery phase includes
          </h2>

          <div className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide">
            The discovery phase's main goal is to exclude unknowns, prepare
            technical basis and UX design following your needs, and provide an
            accurate project time and cost estimation in the end.
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 grid-cols-1 xl:gap-10 lg:gap-10 gap-0">
            {discoveryPhaseIncludes.map((phase, index) => {
              return (
                <button key={index}>
                  <div
                    className={`flex flex-row items-center text-rose-600 gap-4 text-md font-semibold py-3 px-2 rounded-3xl drop-shadow-md z-50 w-full ${`job-btn ${
                      count === index && "active-btn"
                    }`}`}
                    onClick={() => setCount(index)}
                  >
                    <span
                      className={`px-4 py-2 ${`job-btn ${
                        count === index && "text-rose-600"
                      }`} bg-white rounded-full`}
                    >
                      {phase.id}
                    </span>
                    {phase.category}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:gap-10 lg:gap-10 gap-2 bg-rose-600 text-white xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10">
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif xl:gap-5 lg:gap-5 gap-2 xl:w-1/2 lg:w-1/2 w-full">
          <span className="text-4xl font-bold">
            {discoveryPhaseIncludes[count].category}
          </span>
          <span className="text-justify xl:text-xl lg:text-xl text-base">
            {discoveryPhaseIncludes[count].desc}
          </span>
          <span className="text-3xl font-semibold underline underline-offset-1">
            Staff:
          </span>
          <span className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-5 gap-2">
            {discoveryPhaseIncludes[count].staff.map((item, index) => {
              return <span className="xl:text-xl lg:text-xl text-base" key={index}>{item}</span>;
            })}
          </span>
        </div>

        {/* button  */}
        <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
          <Link to="/contact">Book a consultation</Link>
        </button>
      </div>
    </div>
  );
};

export default DiscoveryPhaseIncludes;
