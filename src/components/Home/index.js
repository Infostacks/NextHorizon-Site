import React from "react";
import Hero from "./Hero";
import OurRewards from "../../components/OurRewards";
import ClientsSection from "./ClientsSection";
// import TechnicalProcess from "./TechnicalProcess";
import ClientTestimonial from "../Services/ClientTestimonial";
// import Team from "./Team";
import ContactUs from "../../ContactUs";
import MemberLogin from "./MemberLogin";
import CaseStudies from "../../components/CaseStudies";
import TechnologyStack from "./TechnologyStack";
import Industries from "./Industries";
import FeaturedBlogs from "./FeaturedBlogs";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <OurRewards />
      <FeaturedBlogs/>
      <Industries/>
      <CaseStudies />
      <TechnologyStack />
      <ClientsSection />
      {/* <TechnicalProcess /> */}
      <ClientTestimonial />
      {/* <Team /> */}
      <ContactUs />
      <MemberLogin />
    </div>
  );
};

export default index;
