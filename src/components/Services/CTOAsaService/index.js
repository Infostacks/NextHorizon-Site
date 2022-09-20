/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsCTO from "./FAQsCTO";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import TypesOfCTOServiceValue from "./TypesOfCTOServiceValue";
import BenefitsOfCTOAsAService from "./BenefitsOfCTOAsAService";
import CTOHelpBusiness from "./CTOHelpBusiness";
import AchieveGoalsWithCTO from "./AchieveGoalsWithCTO";
import CoreTechExpertise from "./CoreTechExpertise";
import CTODevInsights from "./CTODevInsights";

const index = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });

      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 3,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation, fadeInAnimation]);

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-40 bg-slate-100">
      {/* start project panel  */}
      <div
        ref={ref} className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 xl:w-4/6 lg:w-4/6 w-5/6">
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
          <span className="hover:cursor-pointer text-slate-200">CTO</span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <motion.h1
            animate={leftAnimation} className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            CTO as a Service
          </motion.h1>

          <motion.p animate={rightAnimation} className="text-white text-xl">
            Our experienced tech executives help startups, SMBs, and enterprises
            transform their business vision into an effective tech solution.
          </motion.p>

          {/* button  */}
          <motion.button
            animate={fadeInAnimation} className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            <Link to="/contact">Start a project</Link>
          </motion.button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <BenefitsOfCTOAsAService />

      <div className="flex items-center justify-center w-screen bg-slate-100">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-[#D90429] z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
              You can hire a CTO for your project
            </h1>
            {/* button  */}
            <button className="xl:w-1/3 lg:w-1/3 w-fit bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429]">
              <Link to="/contact">Get a consultation</Link>
            </button>
          </div>
        </div>
      </div>

      <CTOHelpBusiness />

      {/* testimonials */}
      <ClientTestimonials />

      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Most experienced CTOs will start working on your project as soon
              as possible. Contact our managers to describe your requirements.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Looking for an expert CTO?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Get free consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AchieveGoalsWithCTO />

      <TypesOfCTOServiceValue />

      <CoreTechExpertise />

      {/* certifications */}
      <Certifications />

      {/* Faqs webdev */}
      <FAQsCTO />

      <CTODevInsights />
    </div>
  );
};

export default index;
