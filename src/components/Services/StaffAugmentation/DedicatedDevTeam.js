import React from "react";
import { dedicatedDevTeam } from "../../../utils/data.js";

const DedicatedDevTeam = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-md text-center flex items-center xl:px-10 flex-col gap-5">
        {/* Text intro  */}
        <h1 className="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-bold tracking-tight">
          Dedicated development team is a good choice to
        </h1>
      </div>

      {/* DedicatedDevTeam  */}
      <div className="max-w-screen-lg grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 w-full gap-10 text-xl font-semibold">
        {dedicatedDevTeam.map((item, index) => {
          return (
            <div className="flex flex-row gap-3" key={index}>
              <span className="text-3xl text-[#D90429]">{item.icon}</span>
              <span className="">{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DedicatedDevTeam;
