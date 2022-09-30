import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import webTechImg from "../../images/webTechpsd.png";
import mobTechImg from "../../images/mobTechpsd.png";
import styles from "../../utils/GlobalStyles";

import WebAppsTech from "./WebAppsTech";
import MobileAppsTech from "./MobileAppsTech";

const TechnologyStack = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const [viewDetail, setViewDetail] = useState(false);
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const fadeInAnimation = useAnimation();

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
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 3,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation, fadeInAnimation]);

  return (
    <div className="w-full overflow-x-hidden bg-slate-100 flex flex-col justify-center items-center">
      <section
        ref={ref}
        className="flex flex-col items-center justify-center xl:py-16 lg:py-14 py-10"
      >
        <div className="max-w-screen-lg w-full flex items-center justify-center flex-col px-4 gap-10">
          {/* top section  */}
          <div className="flex xl:flex-row lg:flex-row flex-col items-center">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center w-full gap-10 xl:px-0 lg:px-0 px-10">
              <motion.h2
                animate={rightAnimation}
                className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
              >
                Technology Stack
              </motion.h2>
              <motion.p
                animate={leftAnimation}
                className="text-xl max-w-3xl text-center"
              >
                The development team working on a project uses only modern and
                scalable technologies to implement mobile and web applications
                the way you mean it
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col justify-around items-center w-screen px-5 gap-10">
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-around items-center w-screen max-w-screen-lg gap-10 px-5">
              {/* web technologies  */}
              <div className="flex flex-col items-center gap-7 xl:w-1/2 lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2">
                <h5 className="xl:text-3xl lg:text-3xl text-xl font-semibold">
                  Web Technologies
                </h5>
                <div className="">
                  {/* background Circles */}
                  <div className="absolute bg-[#F96E46] blur-2xl xl:w-[18rem] bg-opacity-60 lg:w-[16rem] md:w-[14rem] w-[10rem] xl:h-[18rem] lg:h-[16rem] md:h-[14rem] h-[10rem] rounded-full mt-[13rem] ml-[10rem]"></div>
                  <div className="absolute bg-[#0CA4A5] blur-3xl bg-opacity-50 xl:w-[25rem] lg:w-[22rem] md:w-[20rem] w-[17rem] xl:h-[25rem] lg:h-[22rem] md:h-[20rem] h-[17rem] rounded-full"></div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [3, -3, 3] }}
                    // viewport={{ margin: "-40px" }}
                    transition={{
                      duration: 6,
                      type: "spring",
                      repeat: Infinity,
                    }}
                  >
                    <img
                      src={webTechImg}
                      alt=""
                      className="xl:w-full lg:w-full w-[20rem]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* mobile technologies  */}
              <div className="flex flex-col items-center gap-7 xl:w-1/2 lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2">
                <h5 className="xl:text-3xl lg:text-3xl text-xl font-semibold">
                  Mobile Technologies
                </h5>
                <div className="w-right">
                  {/* background Circles */}
                  <div className="absolute bg-[#00E8FC] xl:w-[18rem] lg:w-[16rem] md:w-[14rem] w-[10rem] xl:h-[18rem] lg:h-[16rem] md:h-[14rem] h-[10rem] rounded-full bg-opacity-80"></div>
                  <div className="absolute bg-[#FCBA04] xl:w-[20rem] lg:w-[18rem] md:w-[15rem] w-[13rem] xl:h-[20rem] lg:h-[18rem] md:h-[15rem] h-[13rem] rounded-full bg-opacity-80 mt-[10rem] ml-[8rem]"></div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{
                      duration: 9,
                      type: "spring",
                      repeat: Infinity,
                    }}
                  >
                    <img
                      src={mobTechImg}
                      alt=""
                      className="xl:w-full lg:w-full w-[20rem]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-screen justify-center items-center gap-10">
              {viewDetail ? (
                <div className="flex flex-col gap-10">
                  <WebAppsTech />
                  <MobileAppsTech />
                </div>
              ) : (
                ""
              )}
              <button
                onClick={() => setViewDetail(!viewDetail)}
                className={styles.buttonBlackFull}
              >
                {viewDetail ? "Hide" : "View"} Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStack;
