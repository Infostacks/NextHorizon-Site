import React from "react";
import { BsApple } from "react-icons/bs";
import { MdOutlineAndroid } from "react-icons/md";

const FullCycle = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <h2 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight">
          Full-cycle iOS and Android app development
        </h2>

        <p className="max-w-lg mt-4 text-gring-offset-warm-gray-500">
          Efficient solutions to fit your business domain and budget requirements. We provide custom
          development for businesses, MVPs to verify your startup ideas and launch your product
          earlier, and development teams to support or enhance existing products.
        </p>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col w-full gap-10 mx-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-[20rem] h-[15rem] bg-slate-500 hover:bg-blue-600 text-white text-6xl font-bold flex flex-col gap-2 justify-center items-center rounded-3xl drop-shadow-md hover:cursor-pointer">
            <BsApple />
            <h3>IOS</h3>
          </div>

          <h3 className="text-3xl font-semibold">
            Fully functional applications for all Apple devices
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-[20rem] h-[15rem] bg-slate-500 hover:bg-green-600 text-white text-6xl font-bold flex flex-col justify-center items-center rounded-3xl drop-shadow-md hover:cursor-pointer">
            <MdOutlineAndroid />
            <h3>Android</h3>
          </div>

          <h3 className="text-3xl font-semibold">
            Sophisticated applications for Android-powered devices
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FullCycle;
