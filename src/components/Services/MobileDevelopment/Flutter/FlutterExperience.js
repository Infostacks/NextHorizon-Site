import React from "react";
import { flutterExperience } from "../../../../utils/data.js";
import styles from "../../../../utils/GlobalStyles.js";
import "./listStyle.css";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const FlutterExperience = () => {
  return (
    <section className="bg-slate-100 overflow-x-hidden flex flex-col items-center justify-center w-screen xl:px-0 lg:px-0 px-10">
      <div className="max-w-screen-xl w-full flex items-center justify-center flex-col pt-10 pb-3 z-0">
        {/* top section  */}
        <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col">
          {/* Text intro  */}
          <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
            Our experience with Flutter
          </span>

          <span className="max-w-2xl mt-4 xl:text-3xl lg:text-3xl text-xl xl:w-1/2 lg:w-1/2 w-full tracking-wide">
            We offer Flutter app development services to clients and create
            open-source projects to support the community.
          </span>
        </div>

        {/* case Studies  */}
        <div className="flex flex-col items-center w-full gap-10 mt-16">
          {flutterExperience.map((process, index) => {
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
                <div className="flex flex-col gap-5 xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 justify-center px-6">
                  <span className="xl:text-4xl lg:text-4xl text-2xl font-bold text-gray-700 font-serif">
                    {process.title}
                  </span>

                  <span className="font-bold font-sans flex flex-row gap-5">
                    {process.icons.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row gap-2 items-center"
                        >
                          <span className="text-3xl">{item.icon}</span>
                          <span className="text-xl">{item.title}</span>
                        </div>
                      );
                    })}
                  </span>
                  <span className="text-lg text-gray-700">
                    <Answer faq={process.desc} />
                  </span>

                  <span className="font-bold font-sans flex xl:flex-row lg:flex-row flex-col gap-5">
                    {process.icons.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`bg-white text-${styles.redPrimary} border-[1px] border-${styles.redPrimary} py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:text-${styles.blackPrimary} hover:border-[1px] hover:border-${styles.blackPrimary} hover:cursor-pointer w-fit h-fit`}
                        >
                          <div className="flex justify-center items-center gap-3">
                            <span className="text-3xl">{item.icon}</span>
                            <span className="text-axl">{item.title}</span>
                          </div>
                        </div>
                      );
                    })}
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

export default FlutterExperience;
