import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import CaseStudies from "../../CaseStudies";
import CustomMobileApps from "./CustomMobileApps";
import FAQsMobile from "./FAQsMobile";
import FullCycle from "./FullCycle";
import MobileDevInsignts from "./MobileDevInsignts";
import TechStackMobile from "./TechStackMobile";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden mt-40">
      {/* start project panel  */}
      <div className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 xl:w-4/6 lg:w-4/6 w-5/6">
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
          <span className="hover:cursor-pointer text-slate-200">
            Mobile development
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Mobile Development Services
          </h1>

          <p className="text-white text-xl">
            We build native apps for iOS and Android operating systems using
            platform-specific programming languages like Swift, Objective-C,
            Java, Kotlin
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      {/* full cycle */}
      <FullCycle />

      {/* CustomMobileApps */}
      <CustomMobileApps />

      {/* how much app cost  */}
      <div className="flex items-center justify-center w-screen bg-[#08080cff]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Customize the features of your application and get the project
              cost estimation to your email inbox.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                How much will your app cost?
              </h1>
              {/* button  */}
              <button className="bg-white text-[#D90429] border-[1px] border-[#D90429] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Calculate Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CaseStudies */}
      <CaseStudies />

      {/* Text div */}
      <div className="max-w-screen-xl font-bold p-10">
        <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl">
          Learn about Next Horizon’s expertise. Our projects' details.{" "}
          <Link to="/portfolio" className="text-red-500">
            Show more
          </Link>{" "}
          <span>➙</span>
        </h1>
      </div>

      {/* techstackMobileApps */}
      <TechStackMobile />

      {/* Faqs Mobile */}
      <FAQsMobile />

      {/* Mobile dev insigts */}
      <MobileDevInsignts />
    </div>
  );
};

export default index;
