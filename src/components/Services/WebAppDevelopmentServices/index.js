/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
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
import HaveAnyQuestion from "./HaveAnyQuestion";
import ShowMore from "../ShowMore";

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
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-40">
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
            Web App development
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <motion.h1
            animate={leftAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold"
          >
            Web App Development Services
          </motion.h1>

          <motion.p animate={rightAnimation} className="text-white text-xl">
            Web applications that'll help you digitize your internal or external
            processes, modernize legacy apps or improve the mobile experience
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

      {/* WebApplicaitons */}
      <WebApplicaitons />

      {/* have any question */}
      <HaveAnyQuestion/>

      {/* WebIndustriesExperts */}
      <WebIndustriesExperts />

      {/* WebDevProcess */}
      <WebDevProcess />

      {/* Text div */}
      <ShowMore/>

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
