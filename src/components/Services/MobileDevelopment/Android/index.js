import React from "react";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import CaseStudies from "../../../CaseStudies";
import AndroidAppsBuilt from "./AndroidAppsBuilt";
import FAQsAndroid from "./FAQsAndroid";
import TechStackAndroid from "./TechStackAndroid";
import TechForAdvanceAndroidApps from "./TechForAdvanceAndroidApps";
import OurRewards from "../../../OurRewards";
import Certifications from "../../Certifications";
import ClientTestimonial from "../../ClientTestimonial";
import AndroidDevInsignts from "./AndroidDevInsignts";

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
            Android development
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Android Development Services
          </h1>

          <p className="text-white text-xl">
            Building and delivering native Android applications of any
            complexity level using platform-specific technologies like Java and
            Kotlin.
          </p>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      {/* Build android app for any purpose  */}
      <div className="flex flex-col items-center justify-center w-screen bg-slate-900 xl:p-0 lg:p-0 p-10">
        <div className="max-w-screen-lg text-white z-[50rem]">
          <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col gap-10 items-center justify-center">
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 md:w-1/2">
              <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
                Build Android app for any purpose
              </h1>
              <span className="xl:text-xl lg:text-xl text-base tracking-wider text-justify font-serif">
                Our software engineers design applications with attention to
                detail and bearing in mind every peculiarity of the operating
                system. They take care of the application’s compatibility with
                all Android versions and devices so you can be sure your users
                will get a top-notch final product.
              </span>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
              <img
                src="https://www.cleveroad.com/assets/icons/services/services-design/web-design.svg"
                alt=""
                className="h-[40rem]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AndroidAppsBuilt */}
      <AndroidAppsBuilt />

      {/* how much app cost  */}
      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Customize the features of your application and get the project
              cost estimation to your email inbox.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                How much will your app cost?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Calculate Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <TechForAdvanceAndroidApps />

      {/* CaseStudies */}
      <CaseStudies />

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

      <OurRewards />

      {/* TechStackAndroidApps */}
      <TechStackAndroid />

      <ClientTestimonial />

      <Certifications />

      {/* FAQsAndroid */}
      <FAQsAndroid />

      {/* AndroidDevInsignts */}
      <AndroidDevInsignts />
    </div>
  );
};

export default index;
