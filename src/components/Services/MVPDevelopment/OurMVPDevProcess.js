import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mvpDevlopmentProcess } from "../../../utils/data.js";

const OurMVPDevProcess = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="xl:h-[50rem] lg:h-[50rem] h-full w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center">
      {/* top section  */}
      <div className="bg-black text-white xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center flex-col h-full xl:py-0 lg:py-0 py-10">
        {/* Text intro  */}
        <div className="flex gap-5 flex-col xl:w-4/6 lg:w-4/6 w-5/6">
          <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight">
            MVP development process
          </h2>

          <div className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
            We follow a time-tested methodology to build a working MVP following
            your product vision and market demands.
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 grid-cols-1 xl:gap-10 lg:gap-10 gap-0">
            {mvpDevlopmentProcess.map((process, index) => {
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

      <div className="flex flex-col gap-10 bg-slate-300 text-slate-00 xl:w-1/2 lg:w-1/2 w-full xl:px-20 lg:px-14 px-10 h-full justify-center xl:py-0 lg:py-0 py-10">
        {/* Show Data  */}
        <div className="flex flex-col text-xl font-serif gap-5 xl:w-2/3 lg:w-2/3 w-full">
          <span className="flex flex-row items-center gap-3 text-4xl font-bold">
            <span className="bg-white text-[#D90429] h-fit rounded-full px-5 py-2 ">
              {mvpDevlopmentProcess[count].id}
            </span>
            <span className="xl:text-3xl lg:text-3xl text-2xl">{mvpDevlopmentProcess[count].title}</span>
          </span>
          <span className="text-justify xl:text-xl lg:text-xl text-base">
            {mvpDevlopmentProcess[count].desc}
          </span>
          <span className="xl:text-3xl lg:text-3xl text-2xl font-semibold underline underline-offset-1">
            Staff:
          </span>
          <span className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-5 gap-0">
            {mvpDevlopmentProcess[count].staff.map((item, index) => {
              return <span key={index}>{item}</span>;
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
