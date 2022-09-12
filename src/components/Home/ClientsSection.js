import React from "react";
import { companiesList } from "../../utils/data";

const ClientsSection = () => {
  return (
    <div className="overflow-x-hidden flex flex-col bg-slate-200 items-center justify-evenly px-20 py-20 drop-shadow-md gap-5 w-full">
      <h1 className="font-bold xl:text-7xl lg:text-7xl md:text-4xl text-3xl max-w-screen-lg text-center">
        Great software needs great relationships
      </h1>
      <p className="xl:text-3xl lg:text-3xl text-xl">
        Beyond our skilled expertise, it is our customers and our relationship
        with them that sets us apart.
      </p>
      <div className="flex flex-row flex-wrap xl:gap-20 lg:gap-20 md:gap-10 justify-evenly mt-10 max-w-screen-lg">
        {companiesList &&
          companiesList.map((company, index) => {
            return (
              <div className="backdrop:fill-slate-600" key={index}>
                <img
                  className="imgColorChange w-full h-40 back drop-shadow-md"
                  src={company}
                  alt="projectimage"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ClientsSection;
