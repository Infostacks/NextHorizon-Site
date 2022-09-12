/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { modernizationChallenges } from "../../../utils/data.js";

const ModernizationChallenges = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col gap-5 xl:mx-0 lg:mx-0 mx-10">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          App modernization challenges
        </span>

        <span className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          App modernization services are often tied with certain challenges that
          we can solve easily.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
        {modernizationChallenges.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center gap-5 bg-slate-50 p-10 rounded-3xl drop-shadow-md"
              key={index}
            >
              <div className="flex flex-row flex-wrap justify-between">
                <div className="text-3xl font-semibold xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                  {item.challenge}
                </div>
                <span className="text-lg text-justify font-serif xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ModernizationChallenges;
