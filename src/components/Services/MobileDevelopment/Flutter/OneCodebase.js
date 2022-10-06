import React from "react";
import AndroidVsIos from "../../../../images/androidvsios.jpg";
import Dart from "../../../../images/Dart.png";

const OneCodebase = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-slate-200 py-20 xl:px-0 lg:px-0 px-10">
      <div className="max-w-screen-lg flex flex-col gap-10 text-slate-900 z-[50rem]">
        {/* top section  */}
        <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col">
          {/* Text intro  */}
          <span className="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-bold tracking-tight">
            One codebase, two mobile applications
          </span>

          <span className="max-w-2xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
            Flutter is Google’s SDK that lets developers build cross-platform
            apps with a single codebase.
          </span>
        </div>

        <div className=" flex xl:flex-row-reverse lg:flex-row md:flex-row flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 md:w-1/2">
            <span className="text-3xl xl:font-semibold lg:font-semibold">
              With this SDK, you get more for less. One Flutter developer will
              build a solution for two platforms (iOS and Android)
            </span>
            <div className="flex flex-col gap-5">
              <span className="text-2xl font-semibold">Reduce:</span>
              <div className="text-xl text-justify font-serif">
                Our software engineers design applications with attention to
                detail and bearing in mind every peculiarity of the operating
                system. They take care of the application’s compatibility with
                all Android versions and devices so you can be sure your users
                will get a top-notch final product.
              </div>
              <ul className="pl-5">
                <li>Development time</li>
                <li>Lines of code</li>
                <li>Costs</li>
                <li>Number of developers</li>
              </ul>
              <div className="flex flex-row items-center gap-5">
                <img
                  src={Dart}
                  alt=""
                  className="h-10 rounded-3xl drop-shadow-md"
                />
                <span className="text-2xl font-semibold">Dart</span>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
            <img
              src={AndroidVsIos}
              alt=""
              className="xl:h-[20rem] lg:h-[20rem] h-[12rem] rounded-3xl drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCodebase;
