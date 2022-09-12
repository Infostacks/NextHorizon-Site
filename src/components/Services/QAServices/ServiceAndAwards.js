import React from "react";

const ServiceAndAwards = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between px-10 max-w-screen-lg w-screen mx-10 my-5 gap-5">
      <div className="flex flex-col gap-5 xl:w-1/2 lg:w-1/2 w-full">
        <span className="text-slate-400 font-semibold">Services</span>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-5">
          <span>Full-cycle software testing</span>
          <span>QA consulting services</span>
          <span>QA automation services</span>
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
