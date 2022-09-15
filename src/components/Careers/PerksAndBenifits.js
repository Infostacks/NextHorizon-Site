import React from 'react'
import {perksAndBenifits} from "../../utils/data.js";

const PerksAndBenifits = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
        Perks and Benefits
        </h2>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {perksAndBenifits.map((benifit, index) => {
          return(
            <div className="flex flex-col justify-center p-5 drop-shadow-md rounded-3xl bg-white gap-5" key={index}>
              <div className="text-5xl text-[#D90429]">{benifit.icon}</div>
              <div className="text-xl font-semibold">{benifit.title}</div>
              <div>{benifit.desc}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PerksAndBenifits