/* eslint-disable react-hooks/rules-of-hooks */
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
      className={`flex flex-col items-center justify-center w-screen bg-${styles.blackPrimary} bg-opacity-90`}
    >
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] text-white z-[50rem]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center xl:px-0 lg:px-0 px-10">
          <span className="text-2xl text-slate-100 text-justify">
            We gladly consult you on application modernization services flow.
            Leave a message, and our manager will contact you as soon as
            possible to schedule a meeting.
          </span>
          <div className="flex flex-col gap-4">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem]  text-slate-100 font-semibold">
              Got any questions to ask?
            </h1>
            {/* button  */}
            <button className={styles.buttonRedFull}>
              <Link to="/contact">Get free consultation</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GotAnyQuestion;
