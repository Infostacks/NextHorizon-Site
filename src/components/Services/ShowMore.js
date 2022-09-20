/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const ShowMore = () => {
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
      className="max-w-screen-lg font-bold p-10"
    >
      <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl">
        Learn about Next Horizon’s expertise. Our projects' details.{" "}
        <Link to="/portfolio" className="text-red-500">
          Show more
        </Link>{" "}
        <span>➙</span>
      </h1>
    </motion.div>
  );
};

export default ShowMore;
