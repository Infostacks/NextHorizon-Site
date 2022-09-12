import React from "react";
import { Link } from "react-router-dom";

const GotAnyQuestion = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-slate-900">
      <div className="max-w-screen-lg xl:my-[6rem] lg:my-[3rem] my-[2rem] text-white z-[50rem]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center xl:px-0 lg:px-0 px-10">
          <span className="text-2xl text-slate-100 text-justify">
            We gladly consult you on application modernization services flow.
            Leave a message, and our manager will contact you as soon as
            possible to schedule a meeting.
          </span>
          <div className="flex flex-col gap-4">
            <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem]  text-slate-100 font-semibold">
              Got any questions to ask?
            </h1>
            {/* button  */}
            <button className="bg-[#D90429] text-[#edf2f4ff] border-[1px] border-[#D90429] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-fit">
              <Link to="/contact">Get free consultation</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotAnyQuestion;
