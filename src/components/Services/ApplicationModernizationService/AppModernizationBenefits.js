import React from "react";
import { appModernizationServiceBenefits } from "../../../utils/data.js";

const AppModernizationBenefits = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col gap-5 xl:mx-0 lg:mx-0 mx-10">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          App modernization services benefits
        </span>

        <span className="max-w-2xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Legacy application modernization services can bring many benefits both
          for business of all sizes and domains.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10 px-10">
        {appModernizationServiceBenefits.map((benefit, index) => {
          return (
            <div className="flex flex-col justify-center gap-2" key={index}>
              <span className="text-xl font-semibold">{benefit.title}</span>
              <span className="text-lg text-justify font-serif">
                {benefit.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AppModernizationBenefits;
