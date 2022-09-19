import React, { useEffect } from "react";
import homeBG from "../../images/template3.jpg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./home.css";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });

      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation]);

  return (
    <div className="w-screen overflow-hidden bg-slate-100">
      <img
        src={homeBG}
        alt="homeBG"
        className="h-screen w-full overflow-x-hidden absolute"
      />
      <section className="hero xl:px[10rem] lg:px-[4rem] md:px-[3rem] px-[3rem]">
        <div
          ref={ref}
          className="flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse xl:gap-0 lg:gap-0 gap-10 justify-center items-center h-screen w-11/12"
        >
          {/* right  */}
          <article className="flex flex-col justify-center xl:w-2/3 lg:w-1/2 md:w-1/2 w-full gap-5">
            <motion.h1 animate={leftAnimation} className="heroTextHeading z-10">
              Doing More for Your Technical Success
            </motion.h1>
            <motion.p
              animate={rightAnimation}
              className="z-10 heroTextSubHeading"
            >
              We‘re providing services to web and mobile application developers
              who are courageous to promote software solutions and lead towards
              the utmost growth of business demands to satisfy customer demands.
            </motion.p>
            <button className="hover:bg-[#08080cff] hover:text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner bg-white text-[#08080cff] w-fit opacity-50 hover:opacity-100 transition-opacity duration-1000">
              Connect with us
            </button>
          </article>
          {/* left  */}
          <article className="flex xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
            <img
              // src={heroFinal}
              src="https://demo.themovation.com/stratus/wp-content/uploads/2020/05/SEO-1.svg"
              alt="homeBG"
              className="xl:w-[50rem] lg:w-[45rem] md:w-[40rem] w-[35rem] h-auto rounded-2xl drop-shadow-xl"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Hero;
