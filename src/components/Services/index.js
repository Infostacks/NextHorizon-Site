import React from "react";
import ServiceAndAwards from "./ServiceAndAwards";
import PartnersAndClients from "./PartnersAndClients";
import ServicesSection from "./ServicesSection";
import SDLC from "./SDLC";
import ClientTestimonial from "./ClientTestimonial";
import IndustryExperts from "./IndustryExperts";
import BuildProject from "./BuildProject";
import OurRewards from "../OurRewards";
import HelpBusiness from "./HelpBusiness";
import Certifications from "./Certifications";
import FAQs from "../FAQs";
import { Link } from "react-router-dom";

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
          <span className="hover:cursor-pointer text-slate-200">Services</span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Custom Software Development Services
          </h1>

          <p className="text-white text-xl">
            We create solutions that solve business problems, meet requirements,
            respond to market needs, and transform internal operations.
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      {/* partener & clients  */}
      <PartnersAndClients />

      {/* services section  */}
      <ServicesSection />

      {/* have any question */}
      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-white z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-xl text-slate-50">
              Schedule a meeting to get consulted about the software development
              services you need.
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] text-slate-100 font-semibold">
                Got any tech challenges?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[#D90429] w-fit">
                <Link to="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Software Development Flow */}
      <SDLC />

      {/* client testimonial */}
      <ClientTestimonial />

      {/* industry experts  */}
      <IndustryExperts />

      {/* buildprojects */}
      <BuildProject />

      <OurRewards />

      <HelpBusiness />

      <Certifications />

      <FAQs />
    </div>
  );
};

export default index;
