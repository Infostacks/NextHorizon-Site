import React from "react";
import { discoveryPhaseProcess } from "../../../utils/data.js";

const ServiceAndAwards = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row flex-col justify-between gap-5 max-w-screen-lg my-5 xl:px-0 lg:px-0 px-10">
      <div className="flex flex-col xl:text-xl lg:text-xl text-base text-justify gap-5 xl:w-1/2 lg:w-1/2 w-full">
        <span>
          The Discovery phase is a process that takes place before kicking off
          project development. Discovery services offered by Cleveroad help you
          turn project requirements into a clear plan to speed up the
          development and improve the product quality. A properly conducted
          Discovery phase saves up to $200 000 on product development: it's
          considerably bigger than the price of discovery.
        </span>
      </div>

      {/* info data  */}
      <div className="flex flex-col gap-5 justify-center">
        {discoveryPhaseProcess.map((item, index) => {
          return (
            <div className="flex flex-row gap-3 xl:text-xl lg:text-xl text-base" key={index}>
              <span className="text-rose-600">✔</span>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceAndAwards;
