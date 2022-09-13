import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../utils/data.js";

const CaseStudies = () => {
  return (
    <section className="bg-slate-100 overflow-x-hidden w-full flex flex-col items-center justify-center pb-10">
      <div className="max-w-screen-xl w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
        {/* top section  */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 w-full mx-10">
          {/* Text intro  */}
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
              Case Studies
            </h2>
          </div>
        </div>

        {/* case Studies  */}
        <div className="flex flex-col items-center gap-20 mt-16">
          {caseStudies.map((caseStudy, index) => {
            return (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0
                    ? " xl:flex-row lg:flex-row md:flex-row flex-col "
                    : " xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse flex-col "
                } justify-center items-center xl:gap-8 lg:gap-8 md:gap-6 gap-3 shadow-md pb-5 rounded-3xl`}
              >
                {/* image data  */}
                <div className=" xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 px-5">
                  <img
                    src={caseStudy.img}
                    alt={caseStudy.title}
                    className="imgColorChange object-cover w-full bg-slate-100 bg-opacity-60 rounded-[1rem] shadow-xl"
                  />
                </div>

                {/* info data  */}
                <div className="flex flex-col gap-5 xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 justify-center px-6">
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      <img
                        src={caseStudy.review}
                        alt=""
                        className="imgColorChange object-cover w-full"
                      />
                    </div>
                    <span className="text-slate-400">{caseStudy.status}</span>
                  </div>

                  <span className="text-2xl font-bold text-gray-700">
                    {caseStudy.title}
                  </span>
                  <span className="text-lg text-gray-500">
                    {caseStudy.desc}
                  </span>

                  <div className="flex flex-col">
                    {/* contry data  */}
                    <div className="flex flex-row justify-start items-center gap-20">
                      <span className="text-lg font-semibold">Country</span>
                      <div className="flex flex-row gap-2">
                        <img
                          src={caseStudy.flag}
                          alt=""
                          className="object-cover h-5 bg-zinc-100 rounded-lg"
                        />
                        {caseStudy.country}
                      </div>
                    </div>

                    {/* core tech data  */}
                    <div className="flex flex-row justify-start items-center gap-16">
                      <span className="text-lg font-semibold">Core Tech</span>
                      <div className="flex flex-row gap-2">
                        {caseStudy.coreTech}
                      </div>
                    </div>
                  </div>

                  {/* button  */}
                  <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                    Explore more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* show more button */}
      <button className="hover:bg-[#08080cff] text-[#D90429] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:text-white border-[1px] hover:border-[#252627] border-[#D90429] w-fit">
        <Link to="/portfolio">Show more</Link>{" "}
      </button>
    </section>
  );
};

export default CaseStudies;
