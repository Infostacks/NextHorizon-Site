import React from "react";
import { flutterProjectsCompanies } from "../../../../utils/data.js";

const FlutterProjectsCompanies = () => {
  return (
    <div className="bg-slate-300 w-screen flex justify-center xl:px-0 lg:px-0 px-10">
      <section className="max-w-screen-lg text-[#D90429] flex xl:flex-row lg:flex-row flex-col gap-10 items-center py-20 overflow-x-hidden">
        {/* top section  */}
        <div className="flex items-center flex-col">
          {/* Text intro  */}
          <span className="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-bold tracking-tight">
            Popular projects built with Flutter
          </span>

          <span className="max-w-2xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
            Cross-platform development for startups and enterprises from
            different industries.
          </span>
        </div>

        {/*   */}
        <div className="max-w-screen-xl flex flex-row justify-center flex-wrap xl:gap-20 lg:gap-14 gap-10">
          {flutterProjectsCompanies.map((company) => {
            return (
              <img
                src={company}
                alt=""
                className="imgColorChange object-cover w-32 h-fit"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FlutterProjectsCompanies;
