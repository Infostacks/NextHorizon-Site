import React from 'react'
import { servicesNew } from "../../utils/data";
import { Link } from "react-router-dom";


const ServicesSection = () => {
  return (
    <div className="bg-white overflow-x-hidden w-screen">
        <section className="flex flex-col items-center justify-center pb-10 w-full">
          <div className="max-w-screen-lg w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-2 sm:py-24">
            {/* top section  */}
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 w-full">
              {/* Text intro  */}
              <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center w-full">
                <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
                  Custom Software solutions we offer
                </h2>
                <span className="xl:w-2/3 lg:w-2/3 md:w-2/3 w-full xl:text-3xl lg:text-3xl text-xl">
                  Our team supports you at every stage of the software
                  development life-cycle: from product discovery to deployment
                  and post-release support
                </span>
              </div>
            </div>

            {/* services offered  */}
            <div className="flex flex-col items-center w-full gap-10 mt-16 mx-5">
              {servicesNew.map((service, index) => {
                return (
                  <div
                    key={index}
                    className={`flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center xl:gap-10 lg:gap-10 md:gap-6 gap-3 w-full`}
                  >
                    {/* image data  */}
                    <div
                      className={`xl:w-1/2 lg:w-1/2 md:w-1/2 w-11/12 mx-5`}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className={`imgColorChange object-cover w-full rounded-[1rem] shadow-xl`}
                      />
                    </div>

                    {/* info data  */}
                    <div className="flex flex-col gap-5 xl:w-1/2 lg:w-1/2 md:w-1/2 w-11/12 justify-center">
                      <span className="text-4xl font-serif font-bold text-gray-900">
                        {service.title}
                      </span>
                      <span className="text-gray-800 xl:text-xl lg:text-xl text-base text-justify">{service.desc}</span>

                      {/* other links data  */}
                      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-start xl:gap-5 lg:gap-5 gap-2 w-full">
                        <Link to={service.link1}>
                          <span className="text-base font-semibold underline underline-offset-1 hover:text-[#D90429]">
                            {service.name1}
                          </span>
                        </Link>
                        <Link to={service.link2}>
                          <span className="text-base font-semibold underline underline-offset-1 hover:text-[#D90429]">
                            {service.name2}
                          </span>
                        </Link>
                        <Link to={service.link3}>
                          <span className="text-base font-semibold underline underline-offset-1 hover:text-[#D90429]">
                            {service.name3}
                          </span>
                        </Link>
                      </div>

                      {/* button  */}
                      <Link to={service.exploreMoreLink} className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit h-fit">
                        Explore more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
  )
}

export default ServicesSection