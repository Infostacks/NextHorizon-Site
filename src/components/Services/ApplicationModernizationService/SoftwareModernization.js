import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SoftwareModernization = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const upAnimation = useAnimation();
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
    }

    if (!inView) {
      upAnimation.start({ y: "5vw", opacity: 0 });
    }
  }, [inView, upAnimation]);

  return (
    <div
      ref={ref}
      className="xl:h-[50rem] lg:h-[50rem] w-screen flex xl:flex-row lg:flex-row flex-col justify-center items-center bg-slate-100 pt-20"
    >
      {/* top section  */}
      <div className="bg-black text-white xl:w-1/2 lg:w-1/2 px-20 w-full flex xl:items-end lg:items-end items-center justify-center flex-col h-full">
        {/* Text intro  */}
        <div className="max-w-xl flex gap-10 flex-col 6 xl:py-0 lg:py-0 py-10">
          <motion.h2
            animate={upAnimation}
            className="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-semibold flex flex-wrap tracking-tight"
          >
            Software modernization we've carried on
          </motion.h2>

          <motion.div animate={upAnimation}>
            <img
              src="https://www.cleveroad.com/static/9f7666f63e43a03bbef3bbc691a80048/dc764/tapgp.webp"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col bg-[#D90429] text-white xl:w-1/2 lg:w-1/2 w-full px-20 h-full justify-center xl:py-0 lg:py-0 py-10">
        {/* Show Data  */}
        <div className="flex flex-col gap-5 max-w-xl">
          <motion.span animate={upAnimation} className="text-3xl font-semibold">
            Legacy CRM modernization for a microfinance company
          </motion.span>

          <motion.div animate={upAnimation} className="flex flex-col gap-1">
            <span className="text-xl font-semibold">Challenge:</span>
            <span className="text-base tracking-wide">
              Rewrite the outdated CRM system for a Canadian microfinance
              company. The main requirements were enhanced performance and high
              scalability since the client base was growing steadily.
            </span>
          </motion.div>

          <motion.div animate={upAnimation} className="flex flex-col gap-1">
            <span className="text-xl font-semibold">How we solved it:</span>
            <span className="text-base tracking-wide">
              We’ve rebuilt CRM from scratch using React.js. Besides that, the
              whole system was based on a powerful Node.js backend. High
              scalability was ensured with Amazon S3 and Amazon EC2 cloud
              services.
            </span>
          </motion.div>

          <div className="flex flex-row justify-between gap-5">
            <motion.div animate={upAnimation} className="flex flex-col gap-1">
              <span className="text-xl font-semibold">Core tech stack:</span>
              <span className="text-base tracking-wide">
                React.js, Node.js, Amazon S3, Amazon EC2
              </span>
            </motion.div>

            <motion.div animate={upAnimation} className="flex flex-col gap-1">
              <span className="text-xl font-semibold">Team:</span>
              <span className="text-base tracking-wide">5</span>
            </motion.div>

            <motion.div animate={upAnimation} className="flex flex-col gap-1">
              <span className="text-xl font-semibold">Duration:</span>
              <span className="text-base tracking-wide">3 months</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareModernization;
