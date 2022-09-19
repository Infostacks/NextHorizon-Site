import React from "react";
import { uiuxDesignProcess } from "../../../utils/data.js";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const UXUIDesignProcess = () => {
  return (
    <section className="bg-slate-100 overflow-x-hidden flex flex-col items-center justify-center pb-10 w-screen xl:px-0 lg:px-0 px-10">
      <div className="max-w-screen-lg w-full flex items-center justify-center flex-col py-16 sm:py-24">
        {/* top section  */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 w-full mx-10">
          {/* Text intro  */}
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
              Our UI/UX design process
            </h2>
          </div>
        </div>

        {/* case Studies  */}
        <div className="flex flex-col items-center w-full gap-10 mt-16">
          {uiuxDesignProcess.map((process, index) => {
            return (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0
                    ? " xl:flex-row lg:flex-row md:flex-row flex-col "
                    : " xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse flex-col "
                } justify-center items-center xl:gap-10 lg:gap-10 md:gap-6 gap-3 w-full`}
              >
                {/* image data  */}
                <div className=" xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 px-5">
                  <img
                    src={process.img}
                    alt={process.title}
                    className="imgColorChange object-cover w-full bg-slate-100 bg-opacity-60 rounded-[1rem] shadow-xl"
                  />
                </div>

                {/* info data  */}
                <div className="flex flex-col gap-1 xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 justify-center px-6">
                  <span className="text-[#D90429] text-5xl font-bold font-sans">
                    {process.id}
                  </span>

                  <span className="text-2xl font-bold text-gray-900">
                    {process.title}
                  </span>
                  <span className="xl:text-xl lg:text-xl text-base text-gray-800">
                    <Answer faq={process.desc} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UXUIDesignProcess;
