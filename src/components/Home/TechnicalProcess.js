import React, { useState } from "react";
import { technicalProcess } from "../../utils/data.js";
import { BiCheckDouble } from "react-icons/bi";

const TechnicalProcess = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white h-full w-full overflow-x-hidden py-20">
      <div className="flex flex-col justify-center items-center gap-10 px-10">
        <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">Our Technical Process</h1>
        <div className="flex flex-row items-center gap-5 flex-wrap justify-center">
          {technicalProcess.map((process, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row gap-2 text-2xl justify-center items-center border-[1px] border-slate-400 h-28 w-60 ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}
                >
                  <span className="text-5xl">{process.icon}</span>
                  {process.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex xl:flex-row items-center flex-col xl:w-1/2 lg:w-1/2 md:w-5/6 w-full ">
          <div className="flex flex-col xl:w-1/2 lg:w-1/2 w-full flex-wrap gap-5">
            <h3 className="xl:text-3xl lg:text-3xl text-xl font-semibold">{technicalProcess[count].category}</h3>
            <p className="flex flex-wrap text-justify">
              {technicalProcess[count].desc1}
            </p>
            <ul className="text-slate-900 flex flex-col gap-3">
              {technicalProcess[count].list.map((item, index) => {
                return (
                  <li key={index} className="flex flex-row gap-3 font-light">
                    <span className="text-[#D90429] text-2xl">
                      <BiCheckDouble />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className="flex flex-wrap my-5 text-justify">
              {technicalProcess[count].desc2}
            </p>
          </div>

          <div className="flex flex-col xl:w-1/2 lg:w-1/2 w-full">
            <img
              src={technicalProcess[count].img}
              alt={technicalProcess[count].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProcess;
