import React from "react";
import { certifications } from "../../utils/data.js";

const Certifications = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Certifications
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl">
          We keep deepening the expertise to meet your highest expectations and
          build even more innovative software
        </p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex flex-row flex-wrap justify-center w-full gap-5">
        {certifications.map((reward, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-4">
              <img
                src={reward.img}
                alt={reward.title}
                className="imgColorChange object-cover w-52 h-52 bg-zinc-100 p-8 rounded-[3rem] shadow-xl"
              />

              <span className="text-lg font-bold text-gray-700">
                {reward.title}
              </span>
              <span className="text-md text-gray-500 text-center w-52 ">
                {reward.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
