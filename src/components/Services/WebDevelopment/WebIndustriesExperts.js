/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { webIndustriesExperts } from "../../../utils/data.js";

const WebIndustriesExperts = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Industries we're experts in
        </h2>

        <p className="max-w-lg mt-4 text-gring-offset-warm-gray-500">
          We create software for different industries and businesses, providing high-level tech
          specialists to handle software development.
        </p>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-xl w-full bg-slate-200 p-20 rounded-[3rem] drop-shadow-md">
        <div className="flex flex-row w-full gap-5 flex-wrap">
          {webIndustriesExperts.map((industry, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row text-2xl items-center py-3 px-4 font-semibold rounded-full drop-shadow-md z-50 ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}>
                  {industry.industries}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex flex-row w-full gap-10">
          <div className="flex flex-col gap-2 w-2/6">
            <span className="text-xl font-semibold">Recent project</span>
            <span className="flex flex-wrap text-xl xl:w-8/12">
              {webIndustriesExperts[count].projectsTitle}
            </span>
          </div>

          <div className="flex flex-col gap-10 w-4/6">{webIndustriesExperts[count].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default WebIndustriesExperts;
