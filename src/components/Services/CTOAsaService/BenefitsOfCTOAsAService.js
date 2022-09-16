/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { benefitsCtoAsAService } from "../../../utils/data.js";

const BenefitsOfCTOAsAService = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col gap-10 items-center">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Benefits of CTO as a Service
        </span>

        <span className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide font-semibold">
          Our tech executives effectively manage development teams, plan
          cost-effective development strategies, and comply with all clients'
          needs
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex flex-col w-full gap-2 bg-slate-200 rounded-3xl">
        {benefitsCtoAsAService.map((benefit, index) => {
          return (
            <div
              className="flex flex-col justify-center bg-slate-50 xl:p-10 lg:p-10 p-5 rounded-3xl drop-shadow-md"
              key={index}
            >
              <div className="flex flex-row flex-wrap justify-between">
                <div className="text-3xl font-semibold xl:w-1/3 lg:w-1/3 md:w-1/3 w-full">
                  {benefit.benefit}
                </div>
                <span className="xl:text-xl lg:text-xl text-base text-justify font-serif xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
                  {benefit.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsOfCTOAsAService;
