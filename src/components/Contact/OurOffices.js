import React from "react";
import { offices } from "../../utils/data.js";

const OurOffices = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center pb-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Offices
        </h2>

        <p className="max-w-lg mt-4 text-xl">
          With several offices in Ukraine and beyond, you’re more than welcome
          to come to visit us at any convenient time and meet your team in
          person.
        </p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex xl:flex-row lg:flex-row md:flex-row flex-col flex-wrap w-full px-10 gap-10">
        {offices.map((office, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <img src={office.flag} alt="" className="w-16 h-10" />

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700">
                  {office.city}
                </span>

                <span className="text-xl text-gray-700">{office.adress}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700">Phone</span>

                <span className="text-xl text-gray-500">{office.contact}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurOffices;
