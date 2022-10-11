import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mobileTechstack } from "../../utils/data.js";
import styles from "../../utils/GlobalStyles.js";

const MobileAppsTech = () => {
  const [count, setCount] = useState(0);
  const [toolData, setToolData] = useState(0);
  return (
    <div className="flex flex-col gap-10 xl:px-0 lg:px-0 px-5">
      <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
        Mobile Technologies
      </h2>
      <div className="flex flex-col justify-center items-center gap-5 max-w-screen-lg w-full drop-shadow-md">
        <div className="flex flex-row w-full flex-wrap">
          {mobileTechstack.map((category, index) => {
            return (
              <button key={index}>
                <div
                  className={`flex flex-row text-xl items-center py-3 px-4 font-semibold rounded-full drop-shadow-md underline ${`job-btn ${
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
        <div className="flex flex-col justify-center xl:gap-20 lg:gap-14 gap-10 max-w-screen-lg w-full bg-slate-200 border-2 border-slate-300 bg-opacity-50 xl:p-20 lg:p-14 p-5 rounded-[3rem] drop-shadow-md">
          <div className="flex xl:flex-row lg:flex-row flex-col w-full flex-wrap">
            {mobileTechstack[count].techData.map((data, index) => {
              return (
                <div className="flex flex-col items-center gap-3" key={index}>
                  {/* <div>{data.tool}</div> */}
                  <button>
                    <div
                      className={`flex justify-center text-lg items-center xl:p-7 lg:p-7 md:p-4 p-2 underline font-semibold rounded-xl drop-shadow-md ${`job-btn ${
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
          <div className="flex xl:flex-row lg:flex-row flex-col w-full gap-5">
            <div className="flex flex-col xl:w-8/12 lg:8/12 w-full gap-5">
              <h3 className="text-xl font-semibold w-full">
                {mobileTechstack[count].techData[toolData].tool}
              </h3>
              <p className="flex flex-wrap text-justify xl:text-xl lg:text-xl text-base">
                {mobileTechstack[count].techData[toolData].desc}
              </p>
              {/* button  */}
              <button className={styles.buttonBlackFull}>
                <Link to="/contact">Hire a developer</Link>
              </button>
            </div>

            <div className="flex flex-row xl:justify-end lg:justify-end gap-10 xl:w-4/12 lg:w-4/12 w-full">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">
                  {mobileTechstack[count].techData[toolData].text1Head}
                </h2>
                <p>{mobileTechstack[count].techData[toolData].text1}</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">
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

export default MobileAppsTech;
