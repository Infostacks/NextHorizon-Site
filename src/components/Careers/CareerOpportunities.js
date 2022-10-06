import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { careerOpportunities } from "../../utils/data.js";
import { Link } from "react-router-dom";
import styles from "../../utils/GlobalStyles.js";

const CareerOpportunities = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, fadeInAnimation]);

  return (
    <section className="bg-slate-200 w-screen flex flex-col gap-10 items-center justify-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <motion.h2
          ref={ref}
          animate={fadeInAnimation}
          className={`xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight text-${styles.blackPrimary}`}
        >
          Career Opportunities
        </motion.h2>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex flex-col gap-10 w-full">
        {careerOpportunities.map((job, index) => {
          return (
            <motion.div
              initial={{ x: index % 2 === 0 ? "-10vw" : "10vw", opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  bounce: 0.5,
                  type: 'spring'
                },
              }}
              className="flex xl:flex-row lg:flex-row flex-col justify-between p-5 border-b-2 border-slate-300 gap-5 w-full"
              key={index}
            >
              <div className="flex flex-col">
                <div className="text-xl font-semibold">{job.jobTitle}</div>
                <div>{job.jobLocation}</div>
              </div>
              {/* button  */}
              <Link to={`/careers/${job.jobId}`} state={{ data: job }}>
                <button className={styles.buttonBlackFull}>
                  Apply Now
                </button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerOpportunities;
