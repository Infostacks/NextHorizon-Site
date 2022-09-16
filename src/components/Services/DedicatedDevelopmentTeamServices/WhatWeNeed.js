/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { whatWeNeed } from "../../../utils/data.js";

const WhatWeNeed = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg text-center flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          What we need from your side
        </span>

        <span className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide xl:font-semibold lg:font-semibold">
          For productive cooperation and fast dedicated development team
          assembling, we need your full involvement in the process.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10">
        {whatWeNeed.map((item, index) => {
          return (
            <div className="flex flex-col justify-center gap-5" key={index}>
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                {item.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeNeed;
