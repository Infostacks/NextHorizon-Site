import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import logomN from "./images/logo/logomN.png";

const ContactUs = () => {
  return (
    <section className="xl:h-screen lg:h-screen h-full flex items-center">
      {/* Lottie animation code here */}
      <div className="flex gap-5 flex-col max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex xl:flex-row lg:flex-row flex-col gap-10">
          {/* left side  */}
          <div className="flex flex-col gap-10 justify-center items-center xl:w-1/2 lg:w-1/2 w-full z-30">
            <div className="max-w-lg mx-auto text-center mb-10">
              <h2 className="text-slate-800 xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
                Contact Us
              </h2>
            </div>
            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl hover:shadow-xl">
              <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
                <div className="text-3xl text-[#D90429]">
                  <HiOutlineLocationMarker />
                </div>
                <div className="text-2xl font-semibold text-gray-700">
                  Our Address
                </div>
                <div className="text-base text-gray-500">
                  264 Avenue 0 Suite A8,NY,11230, USA
                </div>
              </div>
            </blockquote>

            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-3 w-full">
              <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl hover:shadow-xl">
                <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
                  <div className="text-3xl text-[#D90429]">
                    <BiEnvelope />
                  </div>
                  <div className="text-2xl font-semibold text-gray-700">
                    Email Us
                  </div>
                  <div className="text-base text-gray-500">
                    support@nhitechsolutions.com
                  </div>
                </div>
              </blockquote>

              <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl hover:shadow-xl">
                <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
                  <div className="text-3xl text-[#D90429]">
                    <BiPhoneCall />
                  </div>
                  <div className="text-2xl font-semibold text-gray-700">
                    Call Us
                  </div>
                  <div className="text-base text-gray-500">+1 929 552 2285</div>
                  <div className="text-base text-gray-500">+1 951 877 4085</div>
                </div>
              </blockquote>
            </div>
          </div>

          {/* right side  */}
          <div
            className={`z-0 flex justify-center flex-col items-center m-0 xl:w-1/2 lg:w-1/2 w-full h-full`}
          >
            <div className="w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-700">
              <img src={logomN} alt="" className="bg-cover w-fit h-[60rem]" />
            </div>
            <div className="absolute z-0 flex justify-center items-center xl:w-1/5 lg:w-4/12 md:w-2/3 w-4/5 bg-white rounded-[3rem] drop-shadow-md">
              <blockquote className="flex flex-col justify-between p-6 mt-6 w-full text-center">
                <div className="flex flex-col p-0 gap-10 items-center w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                  />
                  <input
                    type="text"
                    name="help"
                    placeholder="How can we help?"
                    className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                  />
                  <textarea
                    name="message"
                    className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                    placeholder="Message"
                  />
                  <button
                    type="submit"
                    value="Send"
                    className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit"
                  >
                    Send Message
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
