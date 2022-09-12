import React from "react";

const BuildProject = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row flex-col justify-center items-center gap-10 w-screen max-w-screen-lg px-10 h-80">
      <span>
        Schedule a meeting to get consulted about the software development
        services you need.
      </span>
      <div className="flex flex-col gap-4">
        <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
          Ready to build a project?
        </h1>
        {/* button  */}
        <button className="bg-[#08080cff] border-[1px] border-[#08080cff]  text-[#edf2f4ff] py-2 px-5 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#d90429ff] hover:border-[1px] hover:border-[#d90429ff] w-fit h-fit">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default BuildProject;
