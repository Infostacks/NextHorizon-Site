import React from "react";
import { featuredPartners } from "../utils/data";

const FeaturedPartners = () => {
  return (
    <div className="overflow-x-hidden w-full flex flex-col justify-center items-center bg-slate-100">
      <section className="flex flex-col items-center justify-center py-20">
        <div className="max-w-screen-xl w-full flex items-center justify-center flex-col py-16">
          {/* top section  */}
          <div className="flex xl:flex-row lg:flex-row flex-col items-center gap-5 mx-10">
            {/* Text intro  */}
            <div className="flex flex-col justify-center items-center w-full">
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Partners & Clients
              </h2>
              <p>
                Clients and partners we’ve worked with frequently recommend us
                to others thanks to our individual approach to tech problems
              </p>
            </div>
          </div>

          {/* partners & clients  */}
          <div className="flex flex-row justify-around items-center max-w-screen-xl  w-screen">
            <div className="flex flex-col gap-5 justify-center items-center">
              {/* slide 1 */}
              <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
                {featuredPartners.map((partner, index) => {
                  return (
                    <div
                      key={index}
                      className="imgColorChange flex overflow-hidden items-center justify-center bg-white w-[14rem] h-[6rem] rounded-2xl py-3 px-5"
                    >
                      <img src={partner} alt="" className="h-fit" />
                    </div>
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

export default FeaturedPartners;
