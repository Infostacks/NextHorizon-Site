import React from "react";
import { motion } from "framer-motion";
import { featuredPartners } from "../../utils/data";

const PartnersAndClients = () => {
  return (
    <div className="overflow-x-hidden flex flex-col justify-start items-center bg-slate-200 w-screen xl:px-0 lg:px-0 px-10">
      <section className="flex flex-col items-center justify-start w-full">
        <div className="max-w-screen-lg w-full flex gap-5 items-center justify-start flex-col py-16">
          {/* top section  */}
          <div className="flex flex-col items-center">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
                Our Partners & Clients
              </h2>
              <p className="xl:text-xl lg:text-xl text-base">
                Clients and partners we’ve worked with frequently recommend us
                to others thanks to our individual approach to tech problems
              </p>
            </div>
          </div>

          {/* partners & clients  */}
          <div className="flex flex-row justify-around items-center max-w-screen-lg  w-screen">
            <div className="flex flex-col gap-5 justify-center items-center">
              {/* slide 1 */}
              <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
                {featuredPartners.map((partner, index) => {
                  return (
                    <motion.div
                      initial={{
                        y: index % 2 === 0 ? "-10vh" : "10vh",
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 2,
                          bounce: 0.5,
                        },
                      }}
                      key={index}
                      className="imgColorChange flex overflow-hidden items-center justify-center bg-white w-[14rem] h-[6rem] rounded-2xl py-3 px-5"
                    >
                      <img src={partner} alt="" className="h-fit" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersAndClients;
