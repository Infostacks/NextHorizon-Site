import React, { useState } from "react";
import { motion } from "framer-motion";
import { typesOfTesting } from "../../../utils/data.js";

import "./listStyle.css";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const TypesOfTesting = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-100 h-full w-screen flex flex-col justify-center items-center gap-5 py-10 xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:flex-row lg:flex-row flex-col gap-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight sm:text-5xl">
          Types of software testing we offer
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Our engineers draw up a software testing strategy tailored to your project in order to
          eliminate possible bugs and issues.
        </p>
      </div>

      <div className="flex xl:flex-row lg:flex-row flex-col gap-5 max-w-screen-lg bg-slate-200 xl:p-10 lg:p-10 p-5 rounded-[3rem] drop-shadow-md">
        <div className="flex flex-col w-fit">
          {typesOfTesting.map((process, index) => {
            return (
              <motion.button
                initial={{
                  x: index % 2 === 0 ? "-10vw" : "10vw",
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    type: "spring",
                    bounce: 0.6,
                  },
                }}
                key={index}>
                <div
                  className={`flex flex-row gap-2 text-md font-semibold items-center py-3 px-2 rounded-3xl drop-shadow-md underline w-full ${`job-btn ${
                    count === index && "active-btn underline"
                  }`}`}
                  onClick={() => setCount(index)}>
                  {process.type}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Show Data  */}
        <div className="flex flex-col justify-center xl:text-xl lg:text-xl text-base font-serif xl:w-9/12 lg:w-9/12 w-full text-justify">
          <Answer faq={typesOfTesting[count].desc} />
        </div>
      </div>
    </div>
  );
};

export default TypesOfTesting;
