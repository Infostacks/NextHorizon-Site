import React from "react";
import { businessBenifits, techBenifits } from "../../../../utils/data.js";

const ValidateIdea = () => {
  return (
    <section className="bg-[#08080cff] text-slate-50 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center flex-col">
        {/* Text intro  */}
        <span className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Validate your idea and build MVP faster
        </span>

        <span className="max-w-5xl mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          Using Flutter, we’ll help you reduce time to market releasing apps and
          their updates faster and bringing a native-like performance to
          end-users
        </span>
      </div>

      {/*   */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row flex-col justify-center w-full gap-20">
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-semibold">Business benefits:</span>
          <ul className="pl-5 flex flex-col gap-2 xl:text-xl lg:text-xl text-base">
            {businessBenifits.map((benifit) => {
              return <li>{benifit}</li>;
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-2xl font-semibold">Tech benefits:</span>
          <ul className="pl-5 flex flex-col gap-2 xl:text-xl lg:text-xl text-base">
            {techBenifits.map((benifit) => {
              return <li>{benifit}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValidateIdea;
