import React, { useState } from "react";
import { motion } from "framer-motion";
import webTechImg from "../../images/webTechpsd.png";
import mobTechImg from "../../images/mobTechpsd.png";

import WebAppsTech from "./WebAppsTech";
import MobileAppsTech from "./MobileAppsTech";

const TechnologyStack = () => {
  const [viewDetail, setViewDetail] = useState(false);

  return (
    <div className="w-full overflow-x-hidden bg-slate-100 flex flex-col justify-center items-center">
      <section className="flex flex-col items-center justify-center xl:py-20 lg:py-14 py-10">
        <div className="max-w-screen-xl w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24 gap-10">
          {/* top section  */}
          <div className="flex xl:flex-row lg:flex-row flex-col items-center">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center w-full gap-10 xl:px-0 lg:px-0 px-10">
              <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
                Technology Stack
              </h2>
              <p>
                The development team working on a project uses only modern and
                scalable technologies to implement mobile and web applications
                the way you mean it
              </p>
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
                  <div className="absolute bg-[#F96E46] xl:w-[18rem] lg:w-[16rem] md:w-[14rem] w-[10rem] xl:h-[18rem] lg:h-[16rem] md:h-[14rem] h-[10rem] rounded-full bg-opacity-80 mt-[13rem] ml-[10rem]"></div>
                  <div className="absolute bg-[#0CA4A5] xl:w-[25rem] lg:w-[22rem] md:w-[20rem] w-[17rem] xl:h-[25rem] lg:h-[22rem] md:h-[20rem] h-[17rem] rounded-full bg-opacity-80"></div>
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
                className="bg-[#08080cff] border-[1px] border-[#08080cff] text-[#edf2f4ff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit"
              >
                {viewDetail? "Hide" : "View"} Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStack;
