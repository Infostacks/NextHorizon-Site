/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { strengthOfDedicatedTeam } from "../../../utils/data.js";

const StrengthOfDedicatedTeam = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg text-center flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Strengths of a dedicated development team model
        </span>

        <span className="max-w-lg text-lg tracking-wide xl:font-semibold lg:font-semibold">
          A dedicated development team services bring you the perk of tight
          cooperation with the team to stay on the same page. But these are not
          all the benefits you get from this model.
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-sm flex flex-col w-full gap-10">
        {strengthOfDedicatedTeam.map((webApp, index) => {
          return (
            <div className="flex flex-col justify-center gap-3" key={index}>
              <span className="text-xl font-semibold">{webApp.title}</span>
              <span className="xl:text-xl lg:text-xl text-base text-justify font-serif">
                {webApp.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StrengthOfDedicatedTeam;
