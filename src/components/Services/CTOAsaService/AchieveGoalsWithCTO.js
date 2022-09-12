import React from "react";
import { achieveBusinessGoals } from "../../../utils/data.js";

const AchieveGoalsWithCTO = () => {
  return (
    <div className="w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold text-center tracking-tight">
          Achieve your business goals with CTO services
        </h1>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center max-w-screen-xl w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-10 gap-4 w-full flex-wrap">
          {achieveBusinessGoals.map((category, index) => {
            return (
              <div className="flex w-full gap-10 bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-3xl shadow-md">
                <div className="flex xl:flex-row lg:flex-row flex-col gap-3" key={index}>
                  <div className="flex flex-row text-xl" key={index}>
                    <span className="text-rose-600">✔</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="xl:text-3xl lg:text-3xl text-xl font-semibold">
                      {category.title}
                    </span>
                    <span className="xl:text-xl lg:text-xl text-base text-justify">
                      {category.desc}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchieveGoalsWithCTO;
