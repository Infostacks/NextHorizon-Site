/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { BiCheckDouble } from "react-icons/bi";

const Showcase = () => {
  return (
    <div className="h-4/5 px-5 flex flex-col justify-center items-center drop-shadow-md">
      <div className="bg-white drop-shadow-lg py-12 px-5 flex gap-5 flex-col">
        <div className="flex flex-row justify-around">
          <div className="flex flex-row items-center gap-5">
            <div className="text-slate-400 scale-[3]">
              <HiOutlineEmojiHappy />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-extrabold">125</div>
              <div>Happy Clients</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-slate-400 scale-[3]">
              <AiOutlineProject />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-extrabold">85</div>
              <div>Projects</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-slate-400 scale-[3]">
              <FiClock />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-extrabold">10</div>
              <div>Years of experience</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-slate-400 scale-[3]">
              <BsAward />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-extrabold">15</div>
              <div>Awards</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2 px-5 flex items-center">
            <img
              className="inline-block"
              src="https://www.nhitechsolutions.com/assets/img/about.jpg"
            />
          </div>
          <div className="w-1/2  flex flex-col">
            <h1 className="text-2xl font-bold">Let us be your Preferred IT Partner.</h1>
            <p className="text-slate-600 font-light">
              <i>
                As we are one of the world’s largest IT Service providers. Our deep pool of over
                100+ certified engineers and IT support staff.
              </i>
            </p>
            <ul className="text-slate-900">
              <li className="flex flex-row gap-3 font-light">
                <span className="text-orange-600 text-2xl">
                  <BiCheckDouble />
                </span>
                Highly Skilled In Modern Tech Stacks and Cloud-Computing.
              </li>
              <li className="flex flex-row gap-3 font-light">
                <span className="text-orange-600 text-2xl">
                  <BiCheckDouble />
                </span>
                Trusted Effective Service and Solutions.
              </li>
              <li className="flex flex-row gap-3 font-light">
                <span className="text-orange-600 text-2xl">
                  <BiCheckDouble />
                </span>
                Business Oriented Customized Systems Tailored to be detail-oriented.
              </li>
              <li className="flex flex-row gap-3 font-light">
                <span className="text-orange-600 text-2xl">
                  <BiCheckDouble />
                </span>
                We own Dedicated Teams working in agile enviroment
              </li>
            </ul>
            <p className="text-slate-600 font-light mt-3">
              We are commited to provide you quality IT-Services, by experts to help one to deal
              with challenges and critical activities. Hence we really know the true needs of our
              clients. We work on different layers of Application development and got a striving
              latest Technology stack for each.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
