import React from "react";
import { webAppDevServices } from "../../../utils/data.js";
const WebDevProcess = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Web application development services
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          We consult businesses, helping them modernize or create apps from
          scratch with custom UI/UX design.
        </p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex flex-row flex-wrap items-center w-full gap-10">
        {webAppDevServices.map((reward, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center gap-4 w-[30rem]"
            >
              <span className="text-lg font-bold text-gray-900 w-full">
                {reward.title}
              </span>
              <span className="xl:text-xl lg:text-xl text-base text-gray-800 w-full text-justify">
                {reward.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebDevProcess;
