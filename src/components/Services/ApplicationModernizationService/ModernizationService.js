import React from "react";
import { modernizationServicesWeProvide } from "../../../utils/data.js";

const ModernizationService = () => {
  return (
    <div className="w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col gap-5 xl:mx-0 lg:mx-0 mx-10">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          App modernization services we provide
        </span>

        <span className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          As a software development company, we can deliver a wide range of
          modernization options for your software.
        </span>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-xl w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 w-full flex-wrap">
          {modernizationServicesWeProvide.map((category, index) => {
            return (
              <div className="flex w-full gap-10 bg-slate-200 p-10 rounded-3xl shadow-md">
                <div className="flex flex-row gap-3" key={index}>
                  <div className="flex flex-row gap-3 text-xl" key={index}>
                    <span className="text-[#D90429]">✔</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">
                      {category.title}
                    </span>
                    <span className="text-lg text-justify">
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

export default ModernizationService;
