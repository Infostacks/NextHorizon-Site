import React from "react";
import { Link } from "react-router-dom";
import Hero from "./HeroSection";
import TeamSection from "./TeamSection";
import PerksAndBenifits from "./PerksAndBenifits";
import CareerOpportunities from "./CareerOpportunities";
import ClientSection from "../Home/ClientsSection";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-20 bg-slate-100">
      <Hero />
      <TeamSection />
      <PerksAndBenifits />
      <ClientSection />
      <CareerOpportunities />

      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
              Interested in finding out more? Get in touch.
              </h1>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Get free consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
