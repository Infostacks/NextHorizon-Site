import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import DevOpsValues from "./DevOpsValues";
import FAQsDevOps from "./FAQsDevOps";
import ReliableDevOpsSevices from "./ReliableDevOpsSevices";
import DevOpsInsignts from "./DevOpsInsignts";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import CaseStudies from "../../CaseStudies";
import OurRewards from "../../OurRewards";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden mt-40">
      {/* start project panel  */}
      <div className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-br from-lime-500 via-green-500 to-lime-600 xl:w-4/6 lg:w-4/6 w-5/6">
        {/* breadcrumbs */}
        <div className="flex flex-row gap-2 text-sm">
          <span className="hover:cursor-pointer text-slate-600 hover:text-slate-200">
            <Link to="/">Next Horizon</Link>
          </span>
          <span>➙</span>
          <span className="hover:cursor-pointer text-slate-600 hover:text-slate-200">
            <Link to="/services">Services</Link>
          </span>
          <span>➙</span>
          <span className="hover:cursor-pointer text-slate-200">Devops</span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Cost-Saving DevOps Services
          </h1>

          <p className="text-white text-xl">
            Bring new code and features to your products painlessly with an
            experienced DevOps partner that's always there for you.
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      {/* ReliableDevOpsSevices */}
      <ReliableDevOpsSevices />

      {/* DevOpsValues */}
      <DevOpsValues />

      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Start saving time and money with DevOps services. Schedule a
              consultation with our specialist.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Hey! Let’s discuss details.
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CaseStudies />

      <OurRewards />

      {/* certifications */}
      <Certifications />

      {/* testimonials */}
      <ClientTestimonials />

      {/* Faqs Mobile */}
      <FAQsDevOps />

      {/* Mobile dev insigts */}
      <DevOpsInsignts />
    </div>
  );
};

export default index;
