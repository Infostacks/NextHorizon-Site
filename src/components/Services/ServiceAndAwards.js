import React from "react";

const ServiceAndAwards = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between px-5 max-w-screen-lg mx-10 my-5 gap-5">
      <div className="flex flex-col gap-5 w-1/2">
        <span className="text-slate-400 font-semibold">Services</span>
        <div className="flex flex-row flex-wrap gap-5">
          <span>End-to-end development</span>
          <span>Legacy software modernization</span>
          <span>Manual and automation tests</span>
        </div>
      </div>
      {/* awards  */}
      <div className="flex flex-col gap-5">
        <span className="text-slate-400 font-semibold">Awards</span>
        <div className="flex flex-row gap-5">
          <span>IAOP</span>
          <span>Clutch</span>
          <span>Upwork</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceAndAwards;
