import React from "react";
import { ourRewards } from "../utils/data.js";
import { BsFillAwardFill } from "react-icons/bs";

const OurRewards = () => {
  return (
    <section className="w-screen overflow-x-hidden bg-slate-100">
      <div className="max-w-screen-lg px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        {/* top section  */}
        <div className="flex items-center justify-between xl:flex-row lg:flex-row md:flex-row flex-col gap-5 mx-10">
          {/* Text intro  */}
          <div className="flex flex-col justify-start items-start">
            <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
              Our awards
            </h2>

            <p className="mt-4 xl:text-3xl lg:text-3xl text-xl">
              Leading rating & review platforms rank Cleveroad among top
              software development companies due to our tech assistance in
              clients' digital transformation.
            </p>
          </div>

          {/* rating card  */}
          <div className="flex flex-col justify-center items-center p-10 bg-[#edf2f4ff] rounded-[40px]">
            <h3 className="text-2xl font-semibold">51 Reviews on Clutch</h3>
            <div className="flex flex-row justify-center items-center gap-5">
              <span className="text-[4rem]">
                <BsFillAwardFill />
              </span>
              <span className="text-[4rem] font-semibold">4.9</span>
            </div>
            <div className="flex space-x-0.5 justify-center mt-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>

        {/* awards  */}
        <div className="grid grid-cols-1 gap-3 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          {ourRewards.map((reward, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4"
              >
                <img
                  src={reward.img}
                  alt={reward.title}
                  className="imgColorChange object-cover w-56 h-56 bg-zinc-100 p-8 rounded-[3rem] shadow-xl"
                />

                <span className="text-lg font-bold text-gray-700">
                  {reward.title}
                </span>
                <span className="text-lg text-gray-500 text-center w-56 ">
                  {reward.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurRewards;
