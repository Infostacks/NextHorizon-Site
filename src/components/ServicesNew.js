import React from "react";
import { servicesNew, featuredPartners } from "../utils/data";
import { Link } from "react-router-dom";

const ServicesNew = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      {/* start project panel  */}
      <div className="flex flex-col justify-start gap-10 p-5 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-4/6">
        {/* breadcrumbs */}
        <div className="flex flex-row gap-2 font-light text-sm">
          <span>Next Horizon</span>
          <span>➙</span>
          <span>Services</span>
        </div>

        {/* heading  */}
        <div className="flex flex-col gap-5 h-full text-white">
          <h1>Custom Software Development Services</h1>

          <span>
            We create solutions that solve business problems, meet requirements, respond to market
            needs, and transform internal operations.
          </span>

          {/* button  */}
          <button className="bg-[#08080cff] text-[#edf2f4ff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
            Explore more
          </button>
        </div>
      </div>

      {/* Services & awards */}
      <div className="flex flex-row justify-between px-5 max-w-screen-lg mx-10 my-5">
        <div className="flex flex-col gap-5 w-1/2">
          <span>Services</span>
          <div className="flex flex-row gap-5">
            <span>End-to-end development</span>
            <span>Legacy software modernization</span>
            <span>Manual and automation tests</span>
          </div>
        </div>
        {/* awards  */}
        <div className="flex flex-col gap-5">
          <span>Awards</span>
          <div className="flex flex-row gap-5">
            <span>IAOP</span>
            <span>Clutch</span>
            <span>Upwork</span>
          </div>
        </div>
      </div>

      {/* partener & clients  */}
      <div className="overflow-x-hidden flex flex-col justify-start items-center bg-slate-200 w-screen">
        <section className="flex flex-col items-center justify-start p-20 w-full">
          <div className="max-w-screen-xl w-full flex items-center justify-start flex-col py-16">
            {/* top section  */}
            <div className="flex xl:flex-row lg:flex-row flex-col items-center gap-5 mx-10">
              {/* Text intro  */}
              <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-3xl font-bold tracking-tight">Our Partners & Clients</h2>
                <p>
                  Clients and partners we’ve worked with frequently recommend us to others thanks to
                  our individual approach to tech problems
                </p>
              </div>
            </div>

            {/* partners & clients  */}
            <div className="flex flex-row justify-around items-center max-w-screen-xl  w-screen">
              <div className="flex flex-col gap-5 justify-center items-center">
                {/* slide 1 */}
                <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
                  {featuredPartners.map((partner, index) => {
                    return (
                      <div
                        key={index}
                        className="flex overflow-hidden items-center justify-center bg-white w-[14rem] h-[6rem] rounded-2xl py-3 px-5">
                        <img src={partner} alt="" className="imgColorChange h-fit" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* services section  */}
      <div className="bg-white overflow-x-hidden w-screen">
        <section className="flex flex-col items-center justify-center pb-10 px-10 w-full">
          <div className="max-w-screen-xl w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
            {/* top section  */}
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 w-full mx-10">
              {/* Text intro  */}
              <div className="flex xl:flex-row gap-5 lg:flex-row md:flex-row flex-col justify-center items-center w-full">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Custom Software solutions we offer
                </h2>
                <span className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full ">
                  Our team supports you at every stage of the software development life-cycle: from
                  product discovery to deployment and post-release support
                </span>
              </div>
            </div>

            {/* services offered  */}
            <div className="flex flex-col items-center w-full gap-10 mt-16">
              {servicesNew.map((service, index) => {
                return (
                  <div
                    key={index}
                    className={`flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center xl:gap-10 lg:gap-10 md:gap-6 gap-3 w-full`}>
                    {/* image data  */}
                    <div
                      className={`xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2`}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className={`imgColorChange object-cover w-full rounded-[1rem] shadow-xl`}
                      />
                    </div>

                    {/* info data  */}
                    <div className="flex flex-col gap-5 xl:w-[45%] lg:w-1/2 md:w-1/2 w-screen xl:h-full lg:h-full md:h-full h-1/2 justify-center">
                      <span className="text-2xl font-bold text-gray-700">{service.title}</span>
                      <span className="text-lg text-gray-500">{service.desc}</span>

                      {/* other links data  */}
                      <div className="flex flex-row justify-start items-center gap-6 w-full">
                        <a href={service.link1}>
                          <span className="text-base font-semibold underline underline-offset-1">
                            {service.name1}
                          </span>
                        </a>
                        <a href={service.link2}>
                          <span className="text-base font-semibold underline underline-offset-1">
                            {service.name2}
                          </span>
                        </a>
                        <a href={service.link3}>
                          <span className="text-base font-semibold underline underline-offset-1">
                            {service.name3}
                          </span>
                        </a>
                      </div>

                      {/* button  */}
                      <button className="bg-[#08080cff] text-[#edf2f4ff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                        Explore more
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* show more button */}
          <button className="hover:bg-[#08080cff] text-[#252627] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-white border-[1px] hover:border-none border-[#D90429] w-fit">
            Show more
          </button>
        </section>
      </div>

      {/* tech challenges section  */}

      <div className="flex items-center justify-center w-screen bg-[#D90429]">
        <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] px-5 text-slate-50 z-[50rem]">
          <div className="flex xl:flex-row lg:flex-row flex-col gap-10 items-center justify-center">
            <span className="text-2xl text-slate-50 text-justify xl:w-1/2 lg:w-1/2 w-full">
              Schedule a meeting to get consulted about the software development services you need.
            </span>
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 w-full">
              <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-slate-50 font-semibold">
                Got any tech challenges?
              </h1>
              {/* button  */}
              <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
                <Link to="/contact">Explore more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNew;
