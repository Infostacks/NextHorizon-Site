import React from "react";
import Hero from "./HeroSection";
import TeamSection from "./TeamSection";
import PerksAndBenifits from "./PerksAndBenifits";
import CareerOpportunities from "./CareerOpportunities";
import ClientSection from "../Home/ClientsSection";
import GetFreeConsultation from "./GetFreeConsultation";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-20 bg-slate-100">
      <Hero />
      <TeamSection />
      <PerksAndBenifits />
      <ClientSection />
      <CareerOpportunities />
      <GetFreeConsultation/>
    </div>
  );
};

export default index;
