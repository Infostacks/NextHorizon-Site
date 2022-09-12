import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsModernization from "./FAQsModernization";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import OurRewards from "../../OurRewards";
import AppModernizationBenefits from "./AppModernizationBenefits";
import SoftwareModernization from "./SoftwareModernization";
import ModernizationService from "./ModernizationService";
import IndustryExperts from "../IndustryExperts";
import ModernizationChallenges from "./ModernizationChallenges";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden mt-40">
      {/* start project panel  */}
      <div className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 mx-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-4/6">
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
            App Modernization
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Application Modernization Services
          </h1>

          <p className="text-white text-xl">
            Update your legacy software with cutting-edge technologies that
            grant new features, strengthen security and enhance performance.
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <AppModernizationBenefits />

      <div className="flex flex-col items-center justify-center w-screen bg-rose-600">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] text-white z-[50rem]">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center xl:px-0 lg:px-0 px-10">
            <div className="flex flex-col gap-4">
              <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] text-slate-50 font-semibold">
                Have any questions?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Contact us</Link>
              </button>
            </div>
            <span className="text-2xl text-slate-50 text-justify">
              Leave your application, and our representative will contact you
              within 24 hours to consult you on application modernization
              services.
            </span>
          </div>
        </div>
      </div>

      <ModernizationService />

      <IndustryExperts />

      {/* testimonials */}
      <ClientTestimonials />

      <div className="flex flex-col items-center justify-center w-screen bg-slate-900">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] text-white z-[50rem]">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center xl:px-0 lg:px-0 px-10">
            <span className="text-2xl text-slate-100 text-justify">
              We gladly consult you on application modernization services flow.
              Leave a message, and our manager will contact you as soon as
              possible to schedule a meeting.
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem]  text-slate-100 font-semibold">
                Got any questions to ask?
              </h1>
              {/* button  */}
              <button className="bg-[#D90429] text-[#edf2f4ff] border-[1px] border-[#D90429] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-fit">
                <Link to="/contact">Get free consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModernizationChallenges />

      <OurRewards />

      <SoftwareModernization />

      {/* certifications */}
      <Certifications />

      {/* Faqs webdev */}
      <FAQsModernization />
    </div>
  );
};

export default index;
