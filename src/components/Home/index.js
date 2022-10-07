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
    <div className=" w-full">
      <Hero />
      {/* <OurRewards />
      <FeaturedBlogs/>
      <Industries/>
      <CaseStudies />
      <TechnologyStack />
      <ClientsSection />
      <ClientTestimonial />
      <ContactUs />
      <MemberLogin /> */}
    </div>
  );
};

export default index;
