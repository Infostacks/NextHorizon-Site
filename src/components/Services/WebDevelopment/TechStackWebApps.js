import React, { useState } from "react";
import { Link } from "react-router-dom";
import { techStackWebApps } from "../../../utils/data.js";

const TechStackWebApps = () => {
  const [count, setCount] = useState(0);
  const [toolData, setToolData] = useState(0);

  return (
    <div className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Technologies for advanced web apps
        </h2>

        <span className="max-w-lg xl:text-3xl lg:text-3xl text-xl text-slate-800">
          We create responsive web applications and sites leveraging the most
          robust technologies in the industry to help you boost your business.
        </span>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center xl:gap-20 lg:gap-14 gap-10 max-w-screen-xl w-full drop-shadow-md">
        <div className="flex flex-row w-full flex-wrap">
          {techStackWebApps.map((category, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row text-xl items-center py-3 px-4 font-semibold rounded-full drop-shadow-md underline ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => {
                    setCount(index);
                    setToolData(0);
                  }}
                >
                  {category.techCategory}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show Tool Data  */}
        <div className="flex flex-col justify-center xl:gap-20 lg:gap-14 gap-10 max-w-screen-xl w-full bg-slate-200 xl:p-20 lg:p-14 p-5 rounded-[3rem] drop-shadow-md">
          <div className="flex xl:flex-row lg:flex-row flex-col w-full flex-wrap">
            {techStackWebApps[count].techData.map((data, index) => {
              return (
                <div className="flex flex-col items-center gap-3" key={index}>
                  {/* <div>{data.tool}</div> */}
                  <button>
                    <div
                      className={`flex justify-center text-lg items-center xl:p-7 lg:p-7 md:p-4 p-2 underline font-semibold rounded-xl drop-shadow-md ${`job-btn ${
                        toolData === index && "active-btn"
                      }`}`}
                      onClick={() => setToolData(index)}
                    >
                      {/* {data.icon} */}
                      {data.tool}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* show data */}
          <div className="flex xl:flex-row lg:flex-row flex-col w-full gap-5">
            <div className="flex flex-col xl:w-8/12 lg:8/12 w-full gap-5">
              <div className="text-xl font-semibold w-full">
                {techStackWebApps[count].techData[toolData].tool}
              </div>
              <div className="flex flex-wrap text-justify xl:text-xl lg:text-xl text-base">
                {techStackWebApps[count].techData[toolData].desc}
              </div>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Hire a developer</Link>
              </button>
            </div>

            <div className="flex flex-row xl:justify-end lg:justify-end gap-10 xl:w-4/12 lg:w-4/12 w-full">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">
                  {techStackWebApps[count].techData[toolData].text1Head}
                </h2>
                <p>{techStackWebApps[count].techData[toolData].text1}</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">
                  {techStackWebApps[count].techData[toolData].text2Head}
                </h2>
                <p>{techStackWebApps[count].techData[toolData].text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackWebApps;
