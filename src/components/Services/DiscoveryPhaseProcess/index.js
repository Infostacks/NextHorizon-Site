import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsDiscoveryPhase from "./FAQsDiscoveryPhase";
import DiscoveryPhaseDeliverable from "./DiscoveryPhaseDeliverable";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import DiscoveryPhaseValue from "./DiscoveryPhaseValue";
import DiscoveryinSDLC from "./DiscoveryinSDLC";
import ProductDiscoveryProcess from "./ProductDiscoveryProcess";
import WhyYouNeedDiscoveryPhase from "./WhyYouNeedDiscoveryPhase";
import DiscoveryPhaseIncludes from "./DiscoveryPhaseIncludes";
import OurRewards from "../../OurRewards";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll mt-40">
      {/* start project panel  */}
      <div className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 l:w-4/6 lg:w-4/6 w-5/6">
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
            Discovery phase
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Product Discovery Phase
          </h1>

          <p className="text-white text-xl">
            Get assistance from our professional team to dive into the first
            step of the development process Undertake all the research you need
            to fully scope and plan your entire digital project
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Get free estimation</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <DiscoveryPhaseValue />

      <DiscoveryinSDLC />

      <ProductDiscoveryProcess />

      <div className="flex xl:flex-row lg:flex-row flex-col justify-center items-center xl:gap-10 lg:gap-10 gap-5 py-5 my-10 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-bl from-indigo-500 via-cyan-500 to-indigo-500 xl:w-4/6 lg:w-4/6 w-5/6">
        {/* left  */}
        <div className="flex flex-col justify-around gap-5 h-full text-white">
          <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Ready to Start With Our Discovery Team Experts?
          </span>

          <div className="flex xl:flex-row lg:flex-row flex-col justify-between gap-10">
            {/* button  */}
            <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
              <Link to="/contact">Contact Us</Link>
            </button>

            <span className="text-white xl:text-xl lg:text-xl text-base xl:w-2/3 lg:w-2/3 w-full">
              Other Cleveroad experts are engaged in the process if additional
              expertise is needed.
            </span>
          </div>
        </div>

        {/* right  */}
        <div className="flex flex-col justify-around gap-5 h-full text-white">
          <span className="text-white xl:text-xl lg:text-xl text-base">
            The Discovery phase is conducted by a qualified team of: The
            Discovery phase is conducte
          </span>
          <div className="flex xl:flex-row lg:flex-row flex-col justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-white text-lg">Business Analyst</span>
              <span className="text-white text-lg">UI/UX designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white text-lg">Solution Architect</span>
              <span className="text-white text-lg">UI/UX designer</span>
            </div>
          </div>
        </div>
      </div>

      {/* DiscoveryPhaseDeliverable */}
      <DiscoveryPhaseDeliverable />

      <div className="flex items-center justify-center w-screen bg-rose-600">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Ask our managers anything you want to know about software
              development, and they’ll answer your question within 24 hours.
              It’s free of charge and commitment.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Got any questions to ask?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Get free consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <WhyYouNeedDiscoveryPhase />

      <DiscoveryPhaseIncludes />

      {/* certifications */}
      <Certifications />

      <div className="flex items-center justify-center w-screen bg-rose-600">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Get consulted by our specialists to validate your project idea.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Ready to start a project?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Get free consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <ClientTestimonials />

      <OurRewards />

      {/* Faqs webdev */}
      <FAQsDiscoveryPhase />
    </div>
  );
};

export default index;
