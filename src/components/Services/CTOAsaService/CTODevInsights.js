import React from "react";
import { Link } from "react-router-dom";
import { ctoDevInsights } from "../../../utils/data.js";

const CTODevInsights = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-20">
        {/* Text intro  */}
        <div className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-wider antialiased">
          CTO as a Service insights
        </div>
      </div>

      {/*   */}
      <div className="flex flex-row justify-center flex-wrap gap-5">
        {ctoDevInsights.map((insight, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-between gap-3 xl:w-[25rem] lg:w-[22rem] w-[20rem] bg-slate-200 rounded-3xl shadow-xl`}
            >
              <div className="flex flex-col p-5 justify-around gap-5">
                {/* breadcrumbs */}
                <div className="flex flex-row gap-2 text-sm">
                  <span className="hover:cursor-pointer text-slate-600 hover:text-[#D90429]">
                    Blog
                  </span>
                  <span>➙</span>
                  <span className="hover:cursor-pointer text-slate-600 hover:text-[#D90429]">
                    <Link to="">{insight.category}</Link>
                  </span>
                </div>

                <span className="text-xl font-semibold font-serif antialiased hover:text-[#D90429] hover:cursor-pointer">
                  <Link to={`/blogs/${insight.id}`}>{insight.title}</Link>
                </span>
                <div className="flex flex-row justify-between text-sm">
                  <span>{insight.postDate}</span>
                  <span>{insight.author}</span>
                </div>
              </div>
              <img
                src={insight.img}
                alt={insight.title}
                className="imgColorChange object-cover w-full h-[20rem] bg-slate-100 bg-opacity-60 rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CTODevInsights;
