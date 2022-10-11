import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { devOpsInsights } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const DevOpsInsignts = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const upAnimation = useAnimation();
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
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      upAnimation.start({ y: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, upAnimation, fadeInAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <motion.div
          animate={fadeInAnimation}
          className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-wider antialiased">
          DevOps insights
        </motion.div>
      </div>

      {/*   */}
      <div className="flex flex-row flex-wrap gap-5 mt-16">
        {devOpsInsights.map((insight, index) => {
          return (
            <motion.div
              animate={upAnimation}
              key={index}
              className={`flex flex-col justify-between gap-3 xl:w-[22rem] lg:w-[22rem] w-[20rem] bg-slate-200 rounded-3xl shadow-xl`}>
              <div className="flex flex-col p-5 justify-around gap-5">
                {/* breadcrumbs */}
                <div className="flex flex-row gap-2 text-sm">
                  <span
                    className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                    Blog
                  </span>
                  <span>➙</span>
                  <span
                    className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                    <Link to="">{insight.category}</Link>
                  </span>
                </div>

                <span
                  className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                  <Link to={`/blogs/${insight.id}`}>{insight.title}</Link>
                </span>
                <div className="flex flex-row justify-between text-sm">
                  <span>{insight.postDate}</span>
                  <span>{insight.author}</span>
                </div>
              </div>
              <img
                src={insight.img}
                alt={insight.title}
                className="imgColorChange object-cover w-full h-[14rem] bg-slate-100 bg-opacity-60 rounded-3xl"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DevOpsInsignts;
