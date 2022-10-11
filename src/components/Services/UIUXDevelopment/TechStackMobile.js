/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mobileTechstack } from "../../../utils/data.js";

const TechStackMobile = () => {
  const [count, setCount] = useState(0);
  const [toolData, setToolData] = useState(0);

  return (
    <div className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Tech stack for custom mobile apps
        </h2>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-xl w-full drop-shadow-md">
        <div className="flex flex-row w-full gap-5 flex-wrap">
          {mobileTechstack.map((category, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row text-2xl items-center py-3 px-4 font-semibold rounded-full drop-shadow-md z-50 ${`job-btn ${
                    count === index && "active-btn"
                  }`}`}
                  onClick={() => {
                    setCount(index);
                    setToolData(0);
                  }}>
                  {category.techCategory}
                </div>
              </button>
            );
          })}
        </div>

        {/* Show Tool Data  */}
        <div className="flex flex-col justify-center items-center gap-20 max-w-screen-xl w-full bg-slate-200 p-20 rounded-[3rem] drop-shadow-md">
          <div className="flex flex-row w-full flex-wrap">
            {mobileTechstack[count].techData.map((data, index) => {
              return (
                <div className="flex flex-col items-center gap-3">
                  {/* <div>{data.tool}</div> */}
                  <button key={index}>
                    <div
                      className={`flex justify-center text-lg items-center p-7 font-semibold rounded-xl drop-shadow-md z-50 ${`job-btn ${
                        toolData === index && "active-btn"
                      }`}`}
                      onClick={() => setToolData(index)}>
                      {/* {data.icon} */}
                      {data.tool}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* show data */}
          <div className="flex flex-row w-full gap-5">
            <div className="flex flex-col w-8/12">
              <h3 className="text-xl font-semibold w-full">
                {mobileTechstack[count].techData[toolData].tool}
              </h3>
              <p className="flex flex-wrap text-justify text-xl">
                {mobileTechstack[count].techData[toolData].desc}
              </p>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Hire a developer</Link>
              </button>
            </div>

            <div className="flex flex-row justify-end flex-wrap gap-10 w-4/12">
              <div className="flex flex-col">
                <h2 className="font-semibold">
                  {mobileTechstack[count].techData[toolData].text1Head}
                </h2>
                <p>{mobileTechstack[count].techData[toolData].text1}</p>
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold">
                  {mobileTechstack[count].techData[toolData].text2Head}
                </h2>
                <p>{mobileTechstack[count].techData[toolData].text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackMobile;
