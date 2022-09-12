import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsDedicatedDevTeams from "./FAQsDedicatedDevTeams";
import StrengthOfDedicatedTeam from "./StrengthOfDedicatedTeam";
import ClientTestimonials from "../../Services/ClientTestimonial";
import DedicatedDevTeam from "./DedicatedDevTeam";
import OurRewards from "../../OurRewards";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import WhatWeOffer from "./WhatWeOffer";
import TechnologyStack from "../../Home/TechnologyStack";
import WhatWeNeed from "./WhatWeNeed";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-40 bg-slate-100">
      {/* start project panel  */}
      <div className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-tl from-lime-500 via-green-400 to-lime-500 lg:w-4/6 w-5/6">
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
            Dedicated Development Team
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Dedicated Development Team Services
          </h1>

          <p className="text-white text-xl">
            Expand your development capabilities by hiring a dedicated team of
            developers with years of experience in the industry you need.
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <OurRewards />

      <DedicatedDevTeam />

      {/* have any question */}
      <div className="flex items-center justify-center w-screen bg-rose-600">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              We’re glad to answer your questions related to dedicated teams.
              Just fill in the request field, and our representative will
              contact you to schedule a meeting.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Got any questions to ask?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Book a consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* StrengthOfDedicatedTeam */}
      <StrengthOfDedicatedTeam />

      <HowItWorks />

      <WhyChooseUs />

      <WhatWeOffer />

      <TechnologyStack />

      <div className="flex items-center justify-center w-screen bg-rose-600">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Get consulted by our specialists to validate your project idea.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Ready to develop a project?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Book a consultation!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <WhatWeNeed />

      {/* testimonials */}
      <ClientTestimonials />

      {/* Faqs webdev */}
      <FAQsDedicatedDevTeams />
    </div>
  );
};

export default index;
