import React from "react";
import { industries } from "../../utils/data.js";

const Industries = () => {
  return (
    <div className="overflow-x-hidden bg-slate-100 w-full">
      <section className="flex flex-col items-center justify-center pt-20">
        <div className="max-w-screen-lg w-full flex items-center justify-center gap-10 flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
          {/* top section  */}
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 mx-10">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-center font-bold tracking-tight">
                A robust payments platform, built with intelligence
              </h2>
              <p className="xl:text-3xl lg:text-3xl text-xl text-justify">
                We’re successful in receiving top worth position to meet
                benchmark through maintaining a lead in rating, score the first
                rank in software & IT oriented solutions due to our strong tech
                assistance to retain benchmark by promoting brand awareness,
                improving business positioning, and ensure trust and credibility
                to build long-term relationships with customers.
              </p>
            </div>
          </div>

          {/* industries  */}
          <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
            {industries.map((industry, index) => {
              return (
                <div
                  className="flex flex-col justify-center bg-slate-50 xl:p-10 lg:p-10 p-5 rounded-3xl drop-shadow-md"
                  key={index}
                >
                  <div className="flex flex-row flex-wrap justify-between">
                    <div className="text-3xl font-semibold xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                      <span className="text-5xl text-[#D90429] drop-shadow-md z-40">
                        {industry.icon}
                      </span>

                      <span className="text-2xl font-semibold text-gray-700">
                        {industry.title}
                      </span>
                    </div>
                    <span className="xl:text-xl lg:text-xl text-base text-justify font-serif xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                      {industry.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
