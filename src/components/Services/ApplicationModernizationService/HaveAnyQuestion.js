import React from "react";
import { Link } from "react-router-dom";

const HaveAnyQuestion = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-rose-600">
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] text-white z-[50rem]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center xl:px-0 lg:px-0 px-10">
          <div className="flex flex-col gap-4">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] text-slate-50 font-semibold">
              Have any questions?
            </h1>
            {/* button  */}
            <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
              <Link to="/contact">Contact us</Link>
            </button>
          </div>
          <span className="text-2xl text-slate-50 text-justify">
            Leave your application, and our representative will contact you
            within 24 hours to consult you on application modernization
            services.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HaveAnyQuestion;
