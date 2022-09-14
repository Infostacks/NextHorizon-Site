import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const ApplyNow = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;
  console.log(data);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11mw5hi",
        "template_zpjacye",
        form.current,
        "byjv8FrMKkAT9DYSa"
      )
      .then(
        (result) => {
          console.log("result text: ", result.text);
          setDone(true);
          navigate('/careers');
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="absolute flex justify-center flex-col items-center m-0 w-screen h-screen bg-no-repeat bg-cover 
    bg-[url('https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
    >
      <div className="flex justify-center items-center w-screen h-screen bg-opacity-95 bg-slate-700">
        <div className="max-w-screen-lg py-32 w-screen flex flex-col items-center gap-16 justify-center">
          <h1 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl text-gray-200">
            Apply for the job of <span className="font-semibold underline underline-offset-8 font-mono">{data ? data.jobTitle : ""}</span>
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 justify-between w-5/6"
          >
            {/* name & email  */}
            <div className="flex xl:flex-row lg:flex-row flex-col gap-5 w-full">
              <input
                type="text"
                name="user_name"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Name"
                onChange={(e) => e.target.value}
              />
              <input
                type="email"
                name="user_email"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Email"
                onChange={(e) => e.target.value}
              />
            </div>

            {/* address & city */}
            <div className="flex xl:flex-row lg:flex-row flex-col gap-5 w-full">
              <input
                type="text"
                name="address"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Address"
                onChange={(e) => e.target.value}
              />
              <input
                type="text"
                name="city"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="City"
                onChange={(e) => e.target.value}
              />
            </div>

            {/* country & job title */}
            <div className="flex xl:flex-row lg:flex-row flex-col gap-5 w-full">
              <input
                type="text"
                name="country"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Country"
                onChange={(e) => e.target.value}
              />
              <input
                type="text"
                name="jobTitle"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                defaultValue={data.jobTitle}
                onChange={(e) => e.target.value}
                readOnly
              />
            </div>

            {/* contact & dob */}
            <div className="flex xl:flex-row lg:flex-row flex-col gap-5 w-full">
              <input
                type="text"
                name="contact"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Contact Number"
                onChange={(e) => e.target.value}
              />
              <input
                type="text"
                name="currentDesignation"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Current Designation"
                onChange={(e) => e.target.value}
              />
            </div>

            {/* employment status  */}
            <div className="flex flex-col gap-5 w-full">
              <label className="text-xl text-gray-200">
                What is your current employment status?
              </label>
              <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="shippingOption"
                    value="standard_alt"
                    id="standard_alt"
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="standard_alt"
                  >
                    <span className="text-lg"> Employed </span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="shippingOption"
                    value="self_employed_alt"
                    id="self_employed_alt"
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="self_employed_alt"
                  >
                    <span className="text-lg"> Self-Employed </span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="shippingOption"
                    value="unemployed_alt"
                    id="unemployed_alt"
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="unemployed_alt"
                  >
                    <span className="text-lg"> Unemployed </span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="shippingOption"
                    value="student_alt"
                    id="student_alt"
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="student_alt"
                  >
                    <span className="text-lg"> Student </span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* resume url  */}
            <div className="flex flex-col gap-5 w-full">
              <input
                type="text"
                name="resume"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Submit your resume by providing your resume URL:"
                onChange={(e) => e.target.value}
              />
            </div>

            {/* skills intro  */}
            <div className="flex flex-col gap-5 w-full">
              <textarea
                type="text"
                name="skill_section"
                className="px-3 py-2 rounded-lg text-lg w-full focus:outline-none"
                placeholder="Describe your skills"
                onChange={(e) => e.target.value}
              />
            </div>

            <div className="flex flex-col gap-5 justify-center w-full">
              <button
                type="submit"
                value="Send"
                className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit"
              >
                Apply Now
              </button>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                exit={{ opacity: 0 }}
                className="text-xl text-gray-200 font-semibold"
              >
                {done && "Applied successfully"}
              </motion.span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
