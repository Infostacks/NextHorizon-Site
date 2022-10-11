/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import { SiNodemon } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import styles from "../../../utils/GlobalStyles";

const AutomationTesting = () => {
  return (
    <section className="bg-slate-100 overflow-x-hidden flex flex-col justify-center pb-10 w-screen">
      <div className="w-full flex items-center justify-center flex-col gap-20 px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
        {/* top section  */}
        <div className="max-w-screen-xl flex flex-col xl:px-0 lg:px-0 px-10">
          {/* Text intro  */}
          <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
            Automation testing
          </span>

          <span className="max-w-xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
            We use automated tests to boost the speed of product testing and enhance the overall
            quality.
          </span>
        </div>

        {/* bottom section  */}
        <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col w-full gap-10">
          <div className="flex flex-col items-center justify-center shadow-lg rounded-[3rem]">
            <div className="absolute text-white text-[20rem] flex flex-col justify-center items-center drop-shadow-md hover:cursor-pointer">
              <SiNodemon />
            </div>

            <div
              className={`flex flex-col gap-20 z-20 xl:p-20 lg:p-20 p-10 rounded-[3rem] bg-${styles.redPrimary} bg-opacity-60`}>
              <div className="flex flex-col xl:gap-10 lg:gap-10 gap-2">
                <h2 className="font-semibold">Backend</h2>
                <h3 className="xl:text-xl lg:text-xl text-base font-serif text-justify tracking-normal">
                  It automates the API testing as well as helps us to check a large amount of //
                  eslint-disable-next-line react/no-unescaped-entities backend logic with which all
                  the product's platforms interact with
                </h3>
              </div>
              <div
                className={`xl:text-3xl lg:text-3xl text-xl font-mono font-semibold hover:bg-${styles.redPrimary} hover:drop-shadow-md px-5 py-2 w-fit rounded-full hover:text-white`}>
                <Link to="/contact">Order Now ➙</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center shadow-lg rounded-[3rem]">
            <div className="absolute text-white text-[20rem] flex flex-col justify-center items-center drop-shadow-md hover:cursor-pointer">
              <GrReactjs />
            </div>

            <div className="flex flex-col gap-20 z-20 xl:p-20 lg:p-20 p-10 rounded-[3rem] bg-blue-600 bg-opacity-60">
              <div className="flex flex-col xl:gap-10 lg:gap-10 gap-2">
                <h2 className="font-semibold">User Interface</h2>
                <h3 className="xl:text-xl lg:text-xl text-base font-serif text-justify tracking-normal">
                  These tests are written with the intent to imitate the behavior of product users
                  in order to test and validate various UI layouts
                </h3>
              </div>
              <div className="xl:text-3xl lg:text-3xl text-xl font-mono font-semibold hover:bg-blue-500 hover:drop-shadow-md px-5 py-2 w-fit rounded-full hover:text-white">
                <Link to="/contact">Order Now ➙</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTesting;
