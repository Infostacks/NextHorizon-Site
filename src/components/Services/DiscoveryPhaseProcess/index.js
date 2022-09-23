/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

import ServiceAndAwards from "./ServiceAndAwards";
import FAQsDiscoveryPhase from "./FAQsDiscoveryPhase";
import DiscoveryPhaseDeliverable from "./DiscoveryPhaseDeliverable";
import Certifications from "../Certifications";
import ClientTestimonials from "../../Services/ClientTestimonial";
import DiscoveryPhaseValue from "./DiscoveryPhaseValue";
import DiscoveryinSDLC from "./DiscoveryinSDLC";
import ProductDiscoveryProcess from "./ProductDiscoveryProcess";
import WhyYouNeedDiscoveryPhase from "./WhyYouNeedDiscoveryPhase";
import DiscoveryPhaseIncludes from "./DiscoveryPhaseIncludes";
import OurRewards from "../../OurRewards";
import ReadyDiscoveryTeam from "./ReadyDiscoveryTeam";
import HaveAnyQuestion from "../WebAppDevelopmentServices/HaveAnyQuestion";
import ReadyToProject from "../StaffAugmentation/ReadyToProject";
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
    <div className="flex flex-col items-center w-full bg-slate-100 overflow-x-hidden overflow-y-scroll pt-40">
      {/* start project panel  */}
      <div
        ref={ref}
        className="max-w-screen-lg flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5/6"
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
            Discovery phase
          </span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <motion.h1
            animate={leftAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold"
          >
            Product Discovery Phase
          </motion.h1>

          <motion.p animate={rightAnimation} className="text-white text-xl">
            Get assistance from our professional team to dive into the first
            step of the development process Undertake all the research you need
            to fully scope and plan your entire digital project
          </motion.p>

          {/* button  */}
          <motion.button
            animate={fadeInAnimation}
            className={styles.buttonBlackFull}
          >
            <Link to="/contact">Get free estimation</Link>
          </motion.button>
        </div>
      </div>

      {/* Services & awards */}
      <ServiceAndAwards />

      <DiscoveryPhaseValue />

      <DiscoveryinSDLC />

      <ProductDiscoveryProcess />

      <ReadyDiscoveryTeam />

      {/* DiscoveryPhaseDeliverable */}
      <DiscoveryPhaseDeliverable />

      <HaveAnyQuestion />

      <WhyYouNeedDiscoveryPhase />

      <DiscoveryPhaseIncludes />

      {/* certifications */}
      <Certifications />

      <div className="h-20"></div>

      <ReadyToProject />

      {/* testimonials */}
      <ClientTestimonials />

      <OurRewards />

      {/* Faqs webdev */}
      <FAQsDiscoveryPhase />
    </div>
  );
};

export default index;
