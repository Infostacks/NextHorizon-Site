import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mvpIndustryExpertise } from "../../../utils/data.js";

const SoftwareModernization = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="xl:h-[50rem] lg:h-[50rem] w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center my-10">
      {/* top section  */}
      <div className="bg-black text-white xl:w-1/2 lg:w-1/2 w-full flex xl:items-end lg:items-end items-center justify-center flex-col h-full">
        {/* Text intro  */}
        <div className="flex gap-10 flex-col w-4/6 xl:py-0 lg:py-0 py-10">
          <h2 className="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-bold flex flex-wrap tracking-tight">
            Software modernization we've carried on
          </h2>

          <div className="max-w-lg ">
            <img
              src="https://www.cleveroad.com/static/480bb8c4971f2bba8789fdc5ed86064d/01245/application-modernization-services-case-one.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-[#D90429] text-white xl:w-1/2 lg:w-1/2 w-full px-20 h-full justify-center xl:py-0 lg:py-0 py-10">
        {/* Show Data  */}
        <div className="flex flex-col gap-10 max-w-xl">
          <span className="text-3xl font-semibold">
            Legacy CRM modernization for a microfinance company
          </span>

          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold">Challenge:</span>
            <span className="text-base tracking-wide">
              Rewrite the outdated CRM system for a Canadian microfinance
              company. The main requirements were enhanced performance and high
              scalability since the client base was growing steadily.
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold">How we solved it:</span>
            <span className="text-base tracking-wide">
              We’ve rebuilt CRM from scratch using React.js. Besides that, the
              whole system was based on a powerful Node.js backend. High
              scalability was ensured with Amazon S3 and Amazon EC2 cloud
              services.
            </span>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold">Core tech stack:</span>
              <span className="text-base tracking-wide">
                React.js, Node.js, Amazon S3, Amazon EC2
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold">Team:</span>
              <span className="text-base tracking-wide">5</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold">Duration:</span>
              <span className="text-base tracking-wide">3 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareModernization;
