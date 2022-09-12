import React from "react";
import { reliableDevOpsSevices } from "../../../utils/data.js";

const ReliableDevOpsSevices = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
          Reliable DevOps services
        </span>

        <span className="max-w-2xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          We’ll help you reduce time to market without sacrificing reliability,
          security, and compliance. Streamline your processes, improve
          efficiency, and develop new ideas faster with our assistance.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col justify-center flex-wrap w-full gap-20">
        {reliableDevOpsSevices.map((service, index) => {
          return (
            <div className="flex flex-col justify-center xl:w-1/3 lg:w-1/3 w-full gap-5" key={index}>
              <h2 className="text-slate-900 text-3xl font-semibold drop-shadow-md">
                {service.title}
              </h2>

                <ul className="flex flex-col pl-5">
                  {service.desc.map((tool, index) => {
                    return <li className="xl:text-xl lg:text-xl text-base font-serif tracking-wider text-justify" key={index}>{tool}</li>;
                  })}
                </ul>
              </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReliableDevOpsSevices;
