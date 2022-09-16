import React from "react";
import BgXl from "../../../images/bg-xl-lg.jpg";
import BgMd from "../../../images/bg-md.jpg";
import BgSm from "../../../images/bg-sm.png";

const DiscoveryinSDLC = () => {
  return (
    <section className="bg-white w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col gap-20 px-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Place of Discovery in SDLC
        </h2>

        <p className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base text-justify tracking-wide">
          We follow the Software Development Life Cycle (SDLC) process in our
          work. Preparation and project planning are important for further SDLC
          phases to reach cost-effective development. That's why we cover the
          Collecting requirements, Analysis, and Product design during thes
          discovery phase.
        </p>
      </div>

      {/*   */}
      <div
        className={`max-w-screen-lg flex flex-col justify-center items-center w-full gap-10 mx-10`}
      >
        <img src={BgXl} alt=""  className="hidden xl:block lg:block" />
        <img src={BgMd} alt="" className="md:block xl:hidden lg:hidden sm:hidden hidden"  />
        <img src={BgSm} alt="" className="sm:block xl:hidden lg:hidden md:hidden"  />
      </div>
    </section>
  );
};

export default DiscoveryinSDLC;
