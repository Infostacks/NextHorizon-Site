import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
// import logomN from "./images/logo/logomN.png";

const ContactUs = () => {
  return (
    <section className="flex items-center justify-center w-full pt-20">
      {/* Lottie animation code here */}
      <div className="flex flex-col gap-10 w-full max-w-screen-lg">
        <div className="w-full flex xl:gap-20 lg:gap-14 gap-10 xl:flex-row lg:flex-row flex-col justify-evenly">
          {/* left side  */}
          <div className="mb-10 flex max-w-sm flex-col gap-3 justify-center items-center w-full bg-[#D90429] rounded-3xl drop-shadow-md shadow-lg z-30">
            <h2 className="text-slate-100 xl:text-3xl lg:text-3xl text-xl font-bold">
              Contact Us
            </h2>
            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl">
              <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
                <div className="text-3xl text-[#D90429]">
                  <HiOutlineLocationMarker />
                </div>
                <div className="text-2xl font-semibold text-slate-100">
                  Our Address
                </div>
                <div className="text-base text-slate-50">
                  264 Avenue 0 Suite A8,NY,11230, USA
                </div>
              </div>
            </blockquote>

            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl">
              <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
                <div className="text-3xl text-[#D90429]">
                  <BiEnvelope />
                </div>
                <div className="text-2xl font-semibold text-slate-100">
                  Email Us
                </div>
                <div className="text-base text-slate-50">
                  support@nhitechsolutions.com
                </div>
              </div>
            </blockquote>

            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl">
              <div className="flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
                <div className="text-3xl text-[#D90429]">
                  <BiPhoneCall />
                </div>
                <div className="text-2xl font-semibold text-slate-100">
                  Call Us
                </div>
                <div className="text-base text-slate-50">+1 929 552 2285</div>
                <div className="text-base text-slate-50">+1 951 877 4085</div>
              </div>
            </blockquote>
          </div>

          {/* right side  */}
          <div className="mt-10 max-w-sm flex justify-center flex-col items-center w-full h-full bg-slate-500 rounded-3xl drop-shadow-md shadow-lg z-30">
            <blockquote className="flex flex-col gap-5 items-center pb-5 mt-6 w-full text-center">
              <h2 className="text-slate-100 xl:text-3xl lg:text-3xl text-xl font-bold">
                Get In Touch
              </h2>
              <div className="flex flex-col gap-4 px-5 items-center w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="text-slate-50 font-light py-2 px-4 rounded-lg border-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="text-slate-50 font-light py-2 px-4 rounded-lg border-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="text-slate-50 font-light py-2 px-4 rounded-lg border-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="text-slate-50 font-light py-2 px-4 rounded-lg border-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
                />
                <input
                  type="text"
                  name="help"
                  placeholder="How can we help?"
                  className="text-slate-50 font-light py-2 px-4 rounded-lg border-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
                />
                <textarea
                  name="message"
                  className="text-slate-50 font-light py-2 px-4 rounded-lg border-[1px] border-gray-400 focus:outline-none bg-transparent font-xs w-full"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit"
              >
                Send Message
              </button>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
