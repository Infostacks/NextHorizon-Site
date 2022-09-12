import React from "react";
import { connectOurTeams } from "../../utils/data.js";

const ConnectOurTeam = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 px-5 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Connect with our Team
        </h2>

        <p className="max-w-lg mt-4 text-gring-offset-warm-gray-500">
          Let's communicate! Don't hesitate to contact us with your projects,
          ideas, and questions.
        </p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row md:flex-row flex-col w-full xl:px-10 px-5 gap-10">
        {connectOurTeams.map((reward, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-lg font-bold text-gray-700">
                {reward.heading}
              </span>
              <h3 className="text-lg font-bold text-[#D90429] hover:cursor-pointer">
                {reward.email}
              </h3>
              <span className="text-lg text-gray-500">
                {reward.desc}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConnectOurTeam;
