import React from "react";
import { techForAdvanceIOSApps } from "../../../../utils/data.js";

const TechForAdvanceIOSApps = () => {
  return (
    <section className="bg-[#08080cff] text-slate-50 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Technologies for advanced iOS apps
        </span>

        <span className="max-w-4xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Without limiting your functional requirements, we use tools and
          services that ensure the best user experience in your final product.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-xl flex flex-row justify-center flex-wrap w-full xl:gap-20 lg:gap-14 gap-10 mx-10">
        {techForAdvanceIOSApps.map((service, index) => {
          return (
            <div
              className="flex flex-col justify-center xl:w-1/3 lg:w-1/3 w-full gap-5"
              key={index}
            >
              <h2 className="text-slate-50 text-3xl font-semibold drop-shadow-md">
                {service.title}
              </h2>

              <ul className="flex flex-col gap-3 pl-5">
                {service.desc.map((tool, index) => {
                  return (
                    <li
                      className="xl:text-xl lg:text-xl text-base font-serif tracking-wider text-justify"
                      key={index}
                    >
                      {tool}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechForAdvanceIOSApps;
