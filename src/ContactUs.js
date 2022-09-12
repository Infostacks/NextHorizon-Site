import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";

const ContactUs = () => {
  return (
    <section className="xl:h-screen lg:h-screen h-full flex items-center">
      {/* Lottie animation code here */}
      <div className="flex gap-20 flex-col max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center mb-10">
          <h2 className="text-slate-800 xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Contact Us
          </h2>
        </div>

        <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-10">
          {/* left side  */}
          <div className="flex flex-col gap-10 justify-center items-center xl:w-1/2 lg:w-1/2 w-full ">
            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center rounded-lg shadow-xl">
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl text-orange-600">
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
              <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center rounded-lg shadow-xl">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-3xl text-orange-600">
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

              <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center rounded-lg shadow-xl">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-3xl text-orange-600">
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
          <blockquote className="flex flex-col justify-between p-6 -mt-6 xl:w-1/2 lg:w-1/2 w-full text-center rounded-lg shadow-xl">
            <div className="flex flex-col p-0 gap-3 items-center">
              <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-full gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
              />
              <textarea
                name="message"
                className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                placeholder="Message"
              />

              <button
                type="submit"
                className="text-white bg-orange-600 px-6 py-2 rounded-md w-fit font-light"
              >
                Send Message
              </button>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
