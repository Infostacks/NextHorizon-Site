import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mvpDevlopmentProcess } from "../../../utils/data.js";

const OurMVPDevProcess = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[50rem] w-screen flex flex-row justify-center items-center my-10">
      {/* top section  */}
      <div className="bg-slate-200 text-slate-800 w-1/2 flex items-center justify-center flex-col h-full">
        {/* Text intro  */}
        <div className="flex gap-5 flex-col w-4/6">
          <h2 className="text-7xl font-bold flex flex-wrap tracking-tight">
            MVP development process
          </h2>

          <div className="max-w-lg mt-4 text-gring-offset-warm-gray-500 tracking-wide">
            We follow a time-tested methodology to build a working MVP following
            your product vision and market demands.
          </div>
          <div className="flex gap-5">
            <div className="grid grid-cols-2 gap-10">
              {mvpDevlopmentProcess.map((process, index) => {
                return (
                  <button key={index}>
                    <div
                      className={`flex flex-row items-center text-[#D90429] gap-4 text-md font-semibold py-3 px-2 rounded-3xl drop-shadow-md z-50 w-full ${`job-btn ${
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

      <div className="flex flex-col gap-10 bg-slate-900 text-white w-1/2 px-20 h-full justify-center">
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif gap-5 w-2/3">
          <span className="flex flex-row gap-3 text-4xl font-bold">
            <span className="bg-white text-[#D90429] rounded-full px-5 py-2 ">
              {mvpDevlopmentProcess[count].id}
            </span>
            <span>{mvpDevlopmentProcess[count].title}</span>
          </span>
          <span className="text-justify">
            {mvpDevlopmentProcess[count].desc}
          </span>
          <span className="text-3xl font-semibold underline underline-offset-1">
            Staff:
          </span>
          <span className="grid grid-cols-2 gap-5">
            {mvpDevlopmentProcess[count].staff.map((item, index) => {
              return <span>{item}</span>;
            })}
          </span>
        </div>

        {/* button  */}
        <button className="bg-[#D90429] text-[#edf2f4ff] border-[1px] border-[#D90429] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-fit">
          <Link to="/contact">Get free consultation</Link>
        </button>
      </div>
    </div>
  );
};

export default OurMVPDevProcess;
