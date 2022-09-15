import React from "react";
import { Link } from "react-router-dom";

import { AiFillEdit } from "react-icons/ai";
import { BsCalendar3RangeFill } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { SiAdobeindesign } from "react-icons/si";
import { HiBriefcase } from "react-icons/hi";
import { SiNextdotjs } from "react-icons/si";

const BlogMenu = () => {
  return (
    <div className="absolute top-[2.8rem] xl:right-[15rem] lg:right-[8rem] right-[3rem] max-w-screen-sm gap-5 z-50 bg-slate-100 rounded-3xl drop-shadow-md flex flex-col opacity-70 hover:opacity-100 transition-opacity duration-700">
      <div className="flex flex-row">
        {/* mobile  */}
        <div className="flex flex-col gap-10 bg-slate-100 p-10 rounded-l-3xl">
          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-blue-700">
              <BsCalendar3RangeFill />
            </div>
            <Link to="/blogs/latest">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1B2B36]">
                  Latest
                </span>
                <span className="text-slate-500">
                  Recently published blog posts on various topics
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-blue-700">
              <AiFillEdit />
            </div>
            <Link to="/blogs/Client%20Guides">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1B2B36]">
                  Client Guides
                </span>
                <span className="text-slate-500">
                  Reads showing solutions to business problems
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-blue-700">
              <ImOffice />
            </div>
            <Link to="/blogs/Technologies">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1B2B36]">
                  Tech
                </span>
                <span className="text-slate-500">
                  Posts telling about tech stuff in plain English
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* web  */}
        <div className="flex flex-col gap-10 bg-slate-200 p-10 rounded-r-3xl">
          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-orange-400">
              <SiAdobeindesign />
            </div>
            <Link to="/blogs/UI/UX%20Design">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1B2B36]">
                  Design
                </span>
                <span className="text-slate-500">
                  Guides to building beautiful UI and convenient UX
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-orange-400">
              <HiBriefcase />
            </div>
            <Link to="/blogs/Case%20Studies">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1B2B36]">
                  Case Studies
                </span>
                <span className="text-slate-500">
                  Cases from real projects explained in great detail
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-orange-400">
              <SiNextdotjs />
            </div>
            <Link to="/blogs/Next%20Horizon">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1B2B36]">
                  Next Horizon
                </span>
                <span className="text-slate-500">
                  Company news, awards, and achievements
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMenu;
