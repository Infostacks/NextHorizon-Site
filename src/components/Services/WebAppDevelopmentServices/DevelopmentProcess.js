/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { webDevProcessAtNext } from "../../../utils/data.js";

const DevelopmentProcess = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-100 h-full w-screen flex flex-col justify-center items-center gap-10 py-10 xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Development process at Next Horizon
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xls tracking-wide">
          We follow the Scrum framework, working in 2-week sprints and completing a set amount of
          work by the end of each. Then show a demo or release the product.
        </p>
      </div>

      <div className="flex xl:flex-row lg:flex-row flex-col gap-5 max-w-screen-lg bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-[3rem] drop-shadow-md">
        <div className="flex flex-col xl:w-3/12 lg:w-3/12 w-full xl:gap-5 lg:gap-5 gap-1">
          {webDevProcessAtNext.map((process, index) => {
            return (
              <motion.button
                initial={{ x: index % 2 === 0 ? "-10vw" : "10vw", opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    type: "spring",
                    bounce: 0.6,
                  },
                }}
                key={index}>
                <div
                  className={`flex flex-row gap-2 text-md font-semibold items-center py-3 px-2 rounded-3xl drop-shadow-md w-full underline ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => setCount(index)}>
                  {process.title}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex flex-col xl:w-9/12 lg:w-9/12 w-full gap-3">
          <span className="text-xl font-semibold">{webDevProcessAtNext[count].title}</span>
          <span className="flex flex-wrap xl:text-xl lg:text-xl text-base text-justify">
            {webDevProcessAtNext[count].desc}
          </span>
          <span className="text-xl font-semibold">Team</span>
          <div className="flex flex-row gap-5 flex-wrap">
            {webDevProcessAtNext[count].team.map((member, index) => {
              return <div>{member}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
