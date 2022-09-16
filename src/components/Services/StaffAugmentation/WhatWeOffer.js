/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { whatWeOffer } from "../../../utils/data.js";

const WhatWeOffer = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 pb-3 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">What we offer</span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
        {whatWeOffer.map((offer, index) => {
          return (
            <div className="flex flex-col justify-center xl:gap-5 lg:gap-5 gap-2 bg-slate-50 xl:p-10 lg:p-10 p-5 rounded-3xl drop-shadow-md" key={index}>
              <span className="xl:text-2xl lg:text-2xl text-base font-semibold">{offer.category}</span>

              <div className="flex flex-row flex-wrap justify-between">
                <span className="xl:text-lg lg:text-lg text-base text-justify font-serif xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
                  {offer.desc}
                </span>
                <div className="flex flex-col xl:text-lg lg:text-lg text-sm tracking-wide font-semibold">
                  {offer.expertise.map((item, index) => {
                    return <span key={index}>✔ {item}</span>;
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

export default WhatWeOffer;
