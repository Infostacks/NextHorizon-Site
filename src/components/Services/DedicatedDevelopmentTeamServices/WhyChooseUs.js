import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
// import { Link } from "react-router-dom";
import { whyChooseUs } from "../../../utils/data.js";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const upAnimation = useAnimation();
  const downAnimation = useAnimation();
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      upAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });

      downAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      upAnimation.start({ y: "-5vw", opacity: 0 });
      downAnimation.start({ y: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, upAnimation, downAnimation, fadeInAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 overflow-x-hidden flex flex-col items-center justify-center pb-10 w-screen xl:px-0 lg:px-0 px-10"
    >
      <div className="max-w-screen-xl w-full flex items-center justify-center flex-col py-16 sm:py-24">
        {/* top section  */}
        <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col xl:gap-10 lg:gap-10 gap-2 items-center">
          {/* Text intro  */}
          <motion.span
            animate={fadeInAnimation}
            className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
          >
            Why choose us
          </motion.span>

          <motion.span
            animate={fadeInAnimation}
            className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base xl:tracking-wide lg:tracking-wide xl:font-semibold lg:font-semibold"
          >
            We follow a proven multi-step assembling process to provide the best
            dedicated development team that meets your requirements.
          </motion.span>
        </div>

        {/* WhyChooseUs */}
        <div className="flex flex-col w-full gap-10 mt-16">
          {whyChooseUs.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center xl:gap-10 lg:gap-10 md:gap-6 gap-3 w-full`}
              >
                {/* image data  */}
                <div className="flex flex-col gap-5">
                  <motion.span animate={upAnimation}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full bg-slate-100 bg-opacity-60 rounded-[1rem] shadow-xl"
                    />
                  </motion.span>

                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col ">
                      <span className="text-2xl font-semibold">
                        {item.name}
                      </span>
                      <span className="text-slate-500 text-xl">
                        {item.designation}
                      </span>
                    </div>
                    <div className="flex flex-row gap-5 text-3xl">
                      <a href={item.email} className="hover:text-[#D90429]">
                        <MdOutlineEmail />
                      </a>
                      <a href={item.linkedIn} className="hover:text-[#D90429]">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>

                  {/* button  */}
                  <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                    Get free consultation
                  </button>
                </div>

                {/* info data  */}
                <div className="flex flex-col gap-5 justify-center">
                  {item.qualities.map((quality, index) => {
                    return (
                      <motion.div
                        animate={downAnimation}
                        className="flex flex-row gap-3 xl:text-xl lg:text-xl text-base"
                        key={index}
                      >
                        <span className="text-[#D90429]">✔</span>
                        <span>{quality}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
