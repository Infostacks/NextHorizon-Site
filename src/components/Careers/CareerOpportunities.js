import React, { useState } from "react";
import { careerOpportunities } from "../../utils/data.js";
import { Link } from "react-router-dom";

const CareerOpportunities = () => {
  const [showApplyNow, setShowApplyNow] = useState(false);

  const handleApplyNow = () => {
    setShowApplyNow(!showApplyNow);
  };

  return (
    <section className="bg-slate-200 w-screen flex flex-col gap-10 items-center justify-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Career Opportunities
        </h2>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex flex-col gap-10 w-full">
        {careerOpportunities.map((job, index) => {
          return (
            <div
              className="flex xl:flex-row lg:flex-row flex-col justify-between p-5 border-b-2 border-slate-300 gap-5 w-full"
              key={index}
            >
              <div className="flex flex-col">
                <div className="text-xl font-semibold">{job.jobTitle}</div>
                <div>{job.jobLocation}</div>
              </div>
              {/* button  */}
              <Link to={`/careers/${job.jobId}`} state={{ data: job }}>
                <button
                  onClick={handleApplyNow}
                  className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerOpportunities;
