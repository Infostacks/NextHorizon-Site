/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsModernization from "./FAQsModernization";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import OurRewards from "../../OurRewards";
import AppModernizationBenefits from "./AppModernizationBenefits";
import SoftwareModernization from "./SoftwareModernization";
import ModernizationService from "./ModernizationService";
import IndustryExperts from "../IndustryExperts";
import ModernizationChallenges from "./ModernizationChallenges";
import HaveAQuestion from "./HaveAQuestion";
import GotAnyQuestion from "./GotAnyQuestion";
import styles from "../../../utils/GlobalStyles";

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
        className="max-w-screen-lg flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 mx-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5/6"
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
            App Modernization
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <motion.h1
            animate={leftAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold"
          >
            Application Modernization Services
          </motion.h1>

          <motion.p animate={rightAnimation} className="text-white text-xl">
            Update your legacy software with cutting-edge technologies that
            grant new features, strengthen security and enhance performance.
          </motion.p>

          {/* button  */}
          <motion.button
            animate={fadeInAnimation}
            className={styles.buttonBlackFull}
          >
            <Link to="/contact">Start a project</Link>
          </motion.button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <AppModernizationBenefits />

      <HaveAQuestion/>

      <ModernizationService />

      <IndustryExperts />

      {/* testimonials */}
      <ClientTestimonials />

      <GotAnyQuestion/>

      <ModernizationChallenges />

      <OurRewards />

      <SoftwareModernization />

      {/* certifications */}
      <Certifications />

      {/* Faqs webdev */}
      <FAQsModernization />
    </div>
  );
};

export default index;
