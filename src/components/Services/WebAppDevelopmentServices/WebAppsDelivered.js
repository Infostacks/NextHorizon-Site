import React from "react";
import { Link } from "react-router-dom";
import { webAppsDelivered } from "../../../utils/data.js";

const WebAppsDelivered = () => {
  return (
    <section className="bg-slate-100 flex flex-col items-center justify-center pb-10 overflow-x-hidden w-screen">
      <div className="max-w-screen-xl w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
        {/* top section  */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 w-full mx-10">
          {/* Text intro  */}
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
              Our Portfolio
            </h2>
          </div>
        </div>

        {/* case Studies  */}
        <div className="flex flex-col items-center w-full gap-20 mt-16">
          {webAppsDelivered.map((webapp, index) => {
            return (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0
                    ? " xl:flex-row lg:flex-row md:flex-row flex-col "
                    : " xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse flex-col"
                } justify-center items-center xl:gap-10 lg:gap-10 md:gap-6 gap-3 w-full`}
              >
                {/* image data  */}
                <div className=" xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 px-5">
                  <img
                    src={webapp.img}
                    alt={webapp.title}
                    className="imgColorChange object-cover w-full bg-slate-100 bg-opacity-60 rounded-[1rem] shadow-xl"
                  />
                </div>

                {/* info data  */}
                <div className="flex flex-col gap-5 xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 justify-center px-6">
                  <span className="text-2xl font-bold text-gray-800">
                    {webapp.title}
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    Challenge:
                  </span>
                  <span className="xl:text-xl lg:text-xl text-base text-gray-700 text-justify">
                    {webapp.challange}
                  </span>

                  <span className="text-xl font-bold text-gray-800">
                    How we solved it:
                  </span>
                  <span className="xl:text-xl lg:text-xl text-base text-gray-700">
                    {webapp.solution}
                  </span>

                  {/* bottom info  */}
                  <div className="flex flex-row justify-around">
                    {/* core tech data  */}
                    <div className="flex flex-col justify-start">
                      <span className="text-lg font-semibold">
                        Core tech stack:
                      </span>
                      <div className="flex flex-row gap-2 flex-wrap">
                        {webapp.techStack}
                      </div>
                    </div>

                    {/* team data  */}
                    <div className="flex flex-col justify-start">
                      <span className="text-lg font-semibold">Team:</span>
                      <div className="flex flex-row gap-2 flex-wrap">
                        {webapp.teamSize}
                      </div>
                    </div>

                    {/* duration data  */}
                    <div className="flex flex-col justify-start">
                      <span className="text-lg font-semibold">Duration:</span>
                      <div className="flex flex-row gap-2 flex-wrap">
                        {webapp.duration}
                      </div>
                    </div>
                  </div>

                  {/* button  */}
                  <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                    Explore more study
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* show more button */}
      <button className="hover:bg-[#08080cff] text-[#252627] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-white border-[1px] hover:border-[#252627] border-[#D90429] w-fit">
        <Link to="/portfolio">Show more</Link>
      </button>
    </section>
  );
};

export default WebAppsDelivered;
