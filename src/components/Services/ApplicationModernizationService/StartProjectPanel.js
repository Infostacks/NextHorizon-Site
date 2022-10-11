import React from "react";
import { Link } from "react-router-dom";

const StartProjectPanel = () => {
  return (
    <div className="flex flex-col justify-around xl:gap-10 lg:gap-10 gap-5 py-5 xl:px-20 lg:px-20 md:px-10 px-5 mx-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-4/6">
      {/* breadcrumbs */}
      <div className="flex flex-row gap-2 text-sm">
        <span className="hover:cursor-pointer text-slate-600 hover:text-slate-200">
          <Link to="/">Next Horizon</Link>
        </span>
        <span>➙</span>
        <span className="hover:cursor-pointer text-slate-600 hover:text-slate-200">
          <Link to="/services">Services</Link>
        </span>
        <span>➙</span>
        <span className="hover:cursor-pointer text-slate-200">App Modernization</span>
      </div>

      {/* heading  */}
      <div className="flex flex-col gap-5 h-full text-white">
        <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
          Application Modernization Services
        </h1>

        <p className="text-white text-xl">
          Update your legacy software with cutting-edge technologies that grant new features,
          strengthen security and enhance performance.
        </p>

        {/* button  */}
        <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
          <Link to="/contact">Start a project</Link>
        </button>
      </div>
    </div>
  );
};

export default StartProjectPanel;
