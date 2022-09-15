import React from "react";
import { Link } from "react-router-dom";
import { discoveryPhaseValue } from "../../../utils/data.js";

const DiscoveryPhaseValue = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Discovery phase value
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Discovery services offered by Cleveroad help you turn project
          requirements into a clear plan to speed up the development and improve
          the product quality
        </p>
      </div>

      {/*   */}
      <div className="max-w-screen-xl flex flex-row flex-wrap justify-center w-full gap-10 mx-10">
        {discoveryPhaseValue.map((webApp, index) => {
          return (
            <div
              className="flex flex-col justify-center bg-[#D90429] h-[30rem] w-[25rem] gap-5 rounded-3xl shadow-lg"
              key={index}
            >
              <div className="flex flex-col justify-around gap-5 text-slate-100 xl:px-10 lg:px-10 px-5 py-5">
                <span className="text-xl font-semibold">{webApp.title}</span>
                <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                  {webApp.desc}
                </span>
                {/* button  */}
                <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                  <Link to="/contact">Explore more</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DiscoveryPhaseValue;
