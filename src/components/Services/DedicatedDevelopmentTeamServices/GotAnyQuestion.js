import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../../../utils/GlobalStyles";

const GotAnyQuestion = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, fadeInAnimation]);

  return (
    <motion.div
      ref={ref}
      animate={fadeInAnimation}
      className={`flex items-center justify-center w-screen bg-${styles.redPrimary} bg-opacity-90`}>
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
        <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
          <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
            We’re glad to answer your questions related to dedicated teams. Just fill in the request
            field, and our representative will contact you to schedule a meeting.
          </span>
          <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
            <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
              Got any questions to ask?
            </h1>
            {/* button  */}
            <button className={styles.buttonBlackFull}>
              <Link to="/contact">Book a consultation</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GotAnyQuestion;
