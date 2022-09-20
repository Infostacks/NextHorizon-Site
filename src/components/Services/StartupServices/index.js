/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsMVP from "./FAQsMVP";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import OurMVPDevProcess from "./OurMVPDevProcess";
import OurRewards from "../../OurRewards";
import BenefitsOfMVP from "./BenefitsOfMVP";
import StepsForMVPDevelopment from "./StepsForMVPDevelopment";
import OurMVPIndustryExpertise from "./OurMVPIndustryExpertise";
import LetTalkAboutProject from "./LetTalkAboutProject";

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
    <div className="flex flex-col items-center w-full overflow-x-hidden mt-40">
      {/* start project panel  */}
      <div
        ref={ref}
        className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 xl:w-4/6 lg:w-4/6 w-5/6"
      >
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
            Startup Services
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <motion.h1
            animate={leftAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold"
          >
            Startup Services
          </motion.h1>

          <motion.p animate={rightAnimation} className="text-white text-xl">
            If you’re a brave startup with an idea and you want to test waters,
            we’ll help you bring it to life. As a software engineering company,
            we have in-depth experience in creating MVP projects to reduce time
            to market.
          </motion.p>

          {/* button  */}
          <motion.button
            animate={fadeInAnimation}
            className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit"
          >
            <Link to="/contact">Start a project</Link>
          </motion.button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <BenefitsOfMVP />

      <StepsForMVPDevelopment />

      <OurRewards />

      {/* testimonials */}
      <ClientTestimonials />

      <OurMVPIndustryExpertise />

      <LetTalkAboutProject/>

      <OurMVPDevProcess />

      {/* certifications */}
      <Certifications />

      {/* Faqs webdev */}
      <FAQsMVP />
    </div>
  );
};

export default index;
