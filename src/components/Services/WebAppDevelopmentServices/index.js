import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import WebIndustriesExperts from "./WebIndustriesExperts";
import FaqsWebAppsServices from "./FaqsWebAppsServices";
import WebApplicaitons from "./WebApplicaitons";
import WebDevProcess from "./WebDevProcess";
import WebDevInsignts from "./WebDevInsignts";
import DevelopmentProcess from "./DevelopmentProcess";
import WebAppsDelivered from "./WebAppsDelivered";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-40">
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
            Web App development
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Web App Development Services
          </h1>

          <p className="text-white text-xl">
            Web applications that'll help you digitize your internal or external
            processes, modernize legacy apps or improve the mobile experience
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      {/* WebApplicaitons */}
      <WebApplicaitons />

      {/* have any question */}
      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Our managers will consult you about choosing a web-based solution
              for your needs.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Have any questions?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WebIndustriesExperts */}
      <WebIndustriesExperts />

      {/* WebDevProcess */}
      <WebDevProcess />

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

      {/* testimonials */}
      <ClientTestimonials />

      {/* development process  */}
      <DevelopmentProcess />

      {/* webapp delivered  */}
      <WebAppsDelivered />

      {/* Faqs Mobile */}
      <FaqsWebAppsServices />

      {/* certifications */}
      <Certifications />

      {/* WebDevInsignts */}
      <WebDevInsignts />
    </div>
  );
};

export default index;
