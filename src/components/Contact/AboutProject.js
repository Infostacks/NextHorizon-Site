import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AboutProject = () => {
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
      className="flex xl:flex-row lg:flex-row flex-col justify-around gap-5 py-5 xl:px-16 lg:px-16 md:px-10 px-5 rounded-[3rem] bg-gradient-to-bl from-rose-50 via-rose-100 to-rose-300 xl:w-4/6 lg:w-4/6 w-5/6"
    >
      {/* left side  */}
      <div className="flex flex-col justify-evenly gap-10 xl:w-1/2 lg:w-1/2 w-full">
        <motion.h1
          animate={upAnimation}
          className="xl:text-5xl lg:text-4xl text-2xl font-extrabold"
        >
          Tell Us About Your Project
        </motion.h1>
        <motion.p animate={upAnimation}>
          We’ll contact you within a couple of hours to schedule a meeting to
          discuss your goals.
        </motion.p>

        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-5">
          <motion.div animate={upAnimation} className="flex flex-col">
            <div className="flex flex-row gap-2">
              <span>icon</span>
              <h3 className="font-semibold">Clutch</h3>
            </div>
            <span>Reviews 51 . Rating 4.9/5</span>
          </motion.div>

          <motion.div animate={upAnimation} className="flex flex-col">
            <div className="flex flex-row gap-2">
              <span>icon</span>
              <h3 className="font-semibold">GoodFirms</h3>
            </div>
            <span>Reviews 51 . Rating 4.9/5</span>
          </motion.div>
        </div>
      </div>

      {/* right side  */}
      <form className="flex flex-col justify-start xl:w-1/2 lg:w-1/2 w-full gap-5">
        <motion.div
          animate={upAnimation}
          className="flex xl:flex-row lg:flex-row flex-col gap-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your full name *"
            className="ext-gray-600 font-light p-2 border-b-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="ext-gray-600 font-light p-2 border-b-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
          />
        </motion.div>
        <motion.div
          animate={upAnimation}
          className="flex xl:flex-row lg:flex-row flex-col gap-10"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address *"
            className="ext-gray-600 font-light p-2 border-b-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
          />
          <input
            type="text"
            name="contact"
            placeholder="Your phone number"
            className="ext-gray-600 font-light p-2 border-b-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
          />
        </motion.div>

        <motion.div
          animate={upAnimation}
          className="flex xl:flex-row lg:flex-row flex-col gap-10"
        >
          <input
            type="text"
            name="aboutProject"
            placeholder="About a project *"
            className="ext-gray-600 font-light p-2 border-b-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
          />
        </motion.div>

        <motion.div
          animate={upAnimation}
          className="flex xl:flex-row lg:flex-row flex-col gap-10"
        >
          <input
            type="file"
            name="file"
            className="uploadBtn text-gray-600 font-light border-b-[1px] border-gray-400 bg-transparent font-xs w-full"
          />
        </motion.div>

        <motion.div
          animate={upAnimation}
          className="flex flex-row items-center justify-start gap-2"
        >
          <input type="checkbox" name="nda" className="bg-transparent" />
          <span>Send me NDA</span>
        </motion.div>

        <motion.div
          animate={upAnimation}
          className="flex xl:flex-row lg:flex-row flex-col items-center justify-start gap-2"
        >
          <span className="text-slate-500 xl:w-10/12 lg:w-10/12">
            <span>
              By sending this form I confirm that I have read and accept the
            </span>{" "}
            <a
              href="#"
              className="underline text-slate-600 hover:text-slate-800"
            >
              Privacy Policy
            </a>
          </span>
          {/* show more button */}
          <button className="hover:bg-[#08080cff] text-[#252627] py-2 px-3 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-white border-[1px] hover:border-[#08080cff] border-[#D90429] w-[11rem]">
            Send Message
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default AboutProject;
