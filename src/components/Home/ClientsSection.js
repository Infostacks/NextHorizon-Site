import React from "react";
import { companiesList } from "../../utils/data";
import styles from "../../utils/GlobalStyles";

const ClientsSection = () => {
  return (
    <div className="overflow-x-hidden flex flex-col bg-slate-200 items-center justify-evenly p-20 gap-5 w-full">
      <h1
        className={`font-bold xl:text-7xl lg:text-7xl md:text-4xl text-3xl max-w-screen-lg text-center text-${styles.blackPrimary}`}
      >
        Illustrious software always required a one-step solution
      </h1>
      <div className="my-16 lg:my-7 w-9/12 max-w-screen-lg m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
        {companiesList &&
          companiesList.map((company, index) => {
            return (
              <img
                key={index}
                className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md"
                src={company}
                alt="projectimage"
              />
            );
          })}
      </div>
    </div>
  );
};

export default ClientsSection;
