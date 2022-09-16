import React from "react";
import Slider from "react-slick";
import { clientsTestimonials } from "../../utils/data.js";

const ClientTestimonial = () => {
  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-10 w-screen flex justify-center items-center bg-slate-100 px-5">
      <section className="rounded-[5rem] py-10 px-16">
        <div className="flex items-center justify-center w-full h-full">
          <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight mb-10">
            Client testimonials
          </h2>
        </div>

        <Slider
          {...settings}
          className="xl:max-w-screen-md lg:max-w-screen-md max-w-screen-sm"
        >
          {clientsTestimonials.map((member, index) => {
            return (
              <div key={index} className={`w-full h-full flex flex-col justify-center items-center`}>
                {/* info data  */}
                <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between gap-5 mb-3">
                  <div className="flex flex-row flex-wrap xl:px-2 lg:px-2 md:px-5 px-20 justify-center">
                    <img
                      src={member.img}
                      alt=""
                      className="rounded-full w-16 h-16"
                    />
                    <div className="flex flex-col px-5">
                      <span className="text-xl text-gray-700">
                        {member.name}
                      </span>
                      <span className="text-base text-gray-600">
                        {member.designation}
                      </span>
                    </div>
                  </div>
                  <span className="flex flex-row gap-2 justify-center items-center text-gray-700 mr-10">
                    <img
                      src={member.flagIcon}
                      alt=""
                      className="rounded-lg w-8"
                    />

                    <span className="text-base text-gray-700">
                      {member.country}
                    </span>
                  </span>
                </div>

                <div className="flex flex-col items-center xl:px-2 lg:px-2 md:px-5 px-20">
                  <span className="text-base text-gray-500 xl:w-full lg:w-full md:w-full w-4/6 text-justify">
                    {member.desc}
                  </span>

                  {/* buttons  */}
                  <div className="flex xl:flex-row lg:flex-row flex-col gap-5 mt-5">
                    <button className="bg-[#08080cff] border-[1px] border-[#08080cff]  text-[#edf2f4ff] py-2 px-5 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit h-fit">
                      Review on Clutch.co{" "}
                    </button>
                    <button className="bg-[#08080cff] border-[1px] border-[#08080cff]  text-[#edf2f4ff] py-2 px-5 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit h-fit">
                      View case study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default ClientTestimonial;
