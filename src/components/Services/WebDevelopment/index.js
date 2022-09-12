import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsWeb from "./FAQsWeb";
import WebAppsToStartBusiness from "./WebAppsToStartBusiness";
import WebDevInsignts from "./WebDevInsignts";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import ModernWebapps from "./ModernWebapps";
import CaseStudies from "../../CaseStudies";
import TechStackWebApps from "./TechStackWebApps";
import AdvanceWebApps from "./AdvanceWebApps";

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
            Web development
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Web Development Services
          </h1>

          <p className="text-white text-xl">
            We create responsive web applications and sites leveraging the most
            robust technologies in the industry to help you boost your business.
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <ModernWebapps />

      {/* WebAppsToStartBusiness */}
      <WebAppsToStartBusiness />

      <div className="flex items-center justify-center w-screen bg-slate-200">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-600 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Customize the features of your application and get the project
              cost estimation to your email inbox.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-700 font-semibold">
                How much will your app cost?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Calculate now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CaseStudies />

      <TechStackWebApps />

      <AdvanceWebApps />

      {/* testimonials */}
      <ClientTestimonials />

      {/* certifications */}
      <Certifications />

      {/* Faqs webdev */}
      <FAQsWeb />

      {/* web dev insigts */}
      <WebDevInsignts />
    </div>
  );
};

export default index;
