import React, { useState } from "react";
import { Link } from "react-router-dom";
import { androidTechstack } from "../../../../utils/data.js";
import styles from "../../../../utils/GlobalStyles.js";

const TechStackAndroid = () => {
  const [count, setCount] = useState(0);
  const [toolData, setToolData] = useState(0);

  return (
    <div className="bg-slate-100 w-screen flex flex-col gap-10 items-center pb-3 pt-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <h2 className="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-bold tracking-tight">
            Android app technology stack we use
          </h2>
          <p className="xl:text-2xl lg:text-2xl text-xl">
            We use only scalable and time-tested technology stack for Android apps.
          </p>
        </div>
      </div>

      {/* categories data */}
      <div className="flex flex-col justify-center items-center gap-10 max-w-screen-lg w-full drop-shadow-md">
        <div className="flex flex-row w-full flex-wrap">
          {androidTechstack.map((category, index) => {
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
        <div className="flex flex-col justify-center gap-10 max-w-screen-xl w-full bg-slate-200 xl:p-20 lg:p-14 p-5 rounded-[3rem] drop-shadow-md">
          <div className="flex xl:flex-row lg:flex-row flex-col w-full flex-wrap">
            {androidTechstack[count].techData.map((data, index) => {
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
              <div className="text-xl font-semibold w-full">
                {androidTechstack[count].techData[toolData].tool}
              </div>
              <p className="flex flex-wrap text-justify xl:text-xl lg:text-xl text-base">
                {androidTechstack[count].techData[toolData].desc}
              </p>
              {/* button  */}
              <button className={styles.buttonBlackFull}>
                <Link to="/contact">Hire a developer</Link>
              </button>
            </div>

            <div className="flex flex-row xl:justify-end lg:justify-end gap-10 xl:w-4/12 lg:w-4/12 w-full">
              <div className="flex flex-col">
                <h2 className="font-semibold">
                  {androidTechstack[count].techData[toolData].text1Head}
                </h2>
                <p>{androidTechstack[count].techData[toolData].text1}</p>
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold">
                  {androidTechstack[count].techData[toolData].text2Head}
                </h2>
                <p>{androidTechstack[count].techData[toolData].text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackAndroid;
