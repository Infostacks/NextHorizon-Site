import React from "react";
import { companiesList } from "../../utils/data";
import styles from "../../utils/GlobalStyles";

const ClientsSection = () => {
  return (
    <div className="overflow-x-hidden flex flex-col bg-slate-300 bg-opacity-80 backdrop-blur-sm items-center justify-evenly p-20 gap-5 w-full">
      <h1
        className={`font-bold xl:text-7xl lg:text-7xl md:text-4xl text-3xl max-w-screen-lg text-center text-${styles.blackPrimary}`}>
        Illustrious software always required a one-step solution
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-20 md:gap-10 xl:mt-10 lg:mt-10 max-w-screen-lg">
        {companiesList &&
          companiesList.map((company, index) => {
            return (
              <img
                key={index}
                src={company}
                alt="projectimage"
                className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md"
              />
            );
          })}
      </div>
    </div>
  );
};

export default ClientsSection;
