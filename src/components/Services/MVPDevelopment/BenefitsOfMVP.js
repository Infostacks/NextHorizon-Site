import React from "react";
import { benifitsOfMVP } from "../../../utils/data.js";

const BenefitsOfMVP = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Benefits of MVP
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10">
        {benifitsOfMVP.map((benefit, index) => {
          return (
            <div className="flex flex-col justify-center gap-2" key={index}>
              <span className="text-xl font-semibold">{benefit.title}</span>
              <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                {benefit.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsOfMVP;
