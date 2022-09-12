import React from "react";
import { industries } from "../../utils/data.js";

const Industries = () => {
  return (
    <div className="overflow-x-hidden bg-slate-100 w-full">
      <section className="flex flex-col items-center justify-center py-20">
        <div className="max-w-screen-lg w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
          {/* top section  */}
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 mx-10">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-center font-bold tracking-tight">
                A robust payments platform, built with intelligence
              </h2>
              <p className="xl:text-3xl lg:text-3xl text-xl text-center">
                Donec luctus, risus a ornare ultrices, lacus ligula pellentesque
                massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi
                nec mattis interdum augue nulla.
              </p>
            </div>
          </div>

          {/* awards  */}
          <div className="grid grid-cols-1 gap-3 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
            {industries.map((industry, index) => {
              return (
                <div key={index} className="flex flex-col justify-center gap-4">
                  <span className="text-5xl text-[#D90429] drop-shadow-md z-40">
                    {industry.icon}
                  </span>

                  <span className="text-base font-semibold text-gray-700">
                    {industry.title}
                  </span>
                  <span className="text-base text-gray-700 w-56 tracking-wider text-justify">
                    {industry.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* show more button */}
        <button className="hover:bg-[#08080cff] text-[#252627] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-white border-[1px] hover:border-[#08080cff] border-[#D90429] w-fit">
          Show more
        </button>
      </section>
    </div>
  );
};

export default Industries;
