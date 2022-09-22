import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../../../utils/GlobalStyles";

const HaveAQuestion = () => {
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
      className={`flex flex-col items-center justify-center w-screen bg-${styles.redPrimary} bg-opacity-90`}
    >
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] text-white z-[50rem]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center justify-center xl:px-0 lg:px-0 px-10">
          <div className="flex flex-col gap-4">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] text-slate-50 font-semibold">
              Have any questions?
            </h1>
            {/* button  */}
            <button className={styles.buttonBlackFull}>
              <Link to="/contact">Contact us</Link>
            </button>
          </div>
          <span className="text-2xl text-slate-50 text-justify">
            Leave your application, and our representative will contact you
            within 24 hours to consult you on application modernization
            services.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HaveAQuestion;
