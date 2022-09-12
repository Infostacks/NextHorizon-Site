import React from "react";
// import { Link } from "react-router-dom";
import { designRecognition } from "../../../utils/data.js";

const DesignRecognition = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Design for mobile and web products
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Creating the same distinct style and brand identity for all platforms
          using best-proven
        </p>
      </div>

      {/*   */}
      <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col justify-center w-full gap-10">
        {designRecognition.map((webApp, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-2"
              key={index}
            >
              <img
                src={webApp.img}
                alt={webApp.title}
                className="w-52 shadow-lg rounded-3xl"
              />

              <span className="text-xl font-semibold">{webApp.title}</span>
              <span className="text-lg font-serif w-52 text-center">
                {webApp.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DesignRecognition;
