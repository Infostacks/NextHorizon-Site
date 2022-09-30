import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "../utils/data.js";
import styles from "../utils/GlobalStyles";

const CaseStudies = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 3,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, fadeInAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 bg-opacity-80 overflow-x-hidden w-screen flex flex-col items-center justify-center pb-10 xl:px-0 lg:px-10 px-10"
    >
      <div className="max-w-screen-xl w-full flex items-center justify-center flex-col py-16 sm:py-24">
        {/* top section  */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 w-full mx-10">
          {/* Text intro  */}
          <div className="flex flex-col justify-center items-center w-full">
            <motion.h2
              animate={fadeInAnimation}
              className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
            >
              Case Studies
            </motion.h2>
          </div>
        </div>

        {/* case Studies  */}
        <div className="max-w-screen-lg flex flex-col items-center gap-20 mt-16 xl:px-0 lg:px-0 px-10">
          {caseStudies.map((caseStudy, index) => {
            return (
              <motion.div
                initial={{ x: index % 2 === 0 ? "-10vw" : "10vw", opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    type: "spring",
                    bounce: 0.6,
                  },
                }}
                key={index}
                className={`flex ${
                  index % 2 === 0
                    ? " xl:flex-row lg:flex-row md:flex-row flex-col "
                    : " xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse flex-col "
                } justify-center items-center xl:gap-8 lg:gap-8 md:gap-6 gap-3 shadow-md pb-5 rounded-3xl backdrop-blur-sm border-2`}
              >
                {/* image data  */}
                <div className=" xl:w-[45%] lg:w-1/2 md:w-1/2 w-full xl:h-full lg:h-full md:h-full h-1/2 px-5">
                  <motion.img
                    animate={fadeInAnimation}
                    src={caseStudy.img}
                    alt={caseStudy.title}
                    className="object-cover w-full bg-slate-100 bg-opacity-60 rounded-[1rem] shadow-xl"
                  />
                </div>

                {/* info data  */}
                <div className="flex flex-col gap-5 xl:w-[45%] lg:w-1/2 md:w-1/2 w-full xl:h-full lg:h-full md:h-full h-1/2 justify-center px-6">
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      <img
                        src={caseStudy.review}
                        alt=""
                        className="object-cover w-full"
                      />
                    </div>
                    <span className="text-slate-400">{caseStudy.status}</span>
                  </div>

                  <span className="text-2xl font-bold text-gray-700">
                    {caseStudy.title}
                  </span>
                  <span className="text-lg text-gray-500">
                    {caseStudy.desc}
                  </span>

                  <div className="flex flex-col">
                    {/* contry data  */}
                    <div className="flex flex-row justify-start items-center gap-20">
                      <span className="text-lg font-semibold">Country</span>
                      <div className="flex flex-row gap-2">
                        <img
                          src={caseStudy.flag}
                          alt=""
                          className="object-cover h-5 bg-zinc-100 rounded-lg"
                        />
                        {caseStudy.country}
                      </div>
                    </div>

                    {/* core tech data  */}
                    <div className="flex flex-row justify-start items-center gap-16">
                      <span className="text-lg font-semibold">Core Tech</span>
                      <div className="flex flex-row gap-2">
                        {caseStudy.coreTech}
                      </div>
                    </div>
                  </div>

                  {/* button  */}
                  <button className={styles.buttonBlackFull}>
                    Explore more
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* show more button */}
      <button className={styles.buttonRedOutline}>
        <Link to="/portfolio">Show more</Link>{" "}
      </button>
    </section>
  );
};

export default CaseStudies;
