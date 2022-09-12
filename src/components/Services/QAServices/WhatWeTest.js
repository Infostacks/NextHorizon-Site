import React from "react";
import { whatWeTest } from "../../../utils/data.js";

const WebAndMobileApps = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          What do we test?
        </span>

        <span className="max-w-xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          We run tests to check every single component of your software and
          guarantee the highest possible quality.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10">
        {whatWeTest.map((webApp, index) => {
          return (
            <div
              className="flex flex-col justify-center gap-5"
              key={index}
            >
              <span className="text-xl font-semibold">{webApp.title}</span>
              <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                {webApp.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebAndMobileApps;
