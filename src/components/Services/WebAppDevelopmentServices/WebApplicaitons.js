import React from "react";
import { webApplications } from "../../../utils/data.js";

const WebApplicaitons = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Web applications for any need, device, and platform
        </h2>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-10">
        {webApplications.map((webApp, index) => {
          return (
            <div
              className="flex xl:flex-row lg:flex-row flex-col gap-5"
              key={index}
            >
              <div className="text-slate-700 xl:text-3xl lg:text-3xl text-2xl font-semibold drop-shadow-md xl:w-2/6 lg:w-2/6 w-full">
                <h2>{webApp.category}</h2>
              </div>

              <div className="flex flex-col gap-2 xl:w-4/6 lg:w-4/6 w-full text-justify">
                <span className="xl:text-xl lg:text-xl text-base">
                  {webApp.desc}
                </span>
                <div className="flex flex-row gap-3 flex-wrap h-fit">
                  {webApp.tools.map((tool, index) => {
                    return (
                      <span
                        className="py-2 px-3 bg-slate-300 rounded-full"
                        key={index}
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebApplicaitons;
