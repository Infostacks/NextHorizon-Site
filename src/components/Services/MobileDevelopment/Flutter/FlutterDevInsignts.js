import React from "react";
import { Link } from "react-router-dom";
import { androidDevInsignts } from "../../../../utils/data.js";

const FlutterDevInsignts = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:flex-row lg:flex-row flex-col gap-20 xl:px-0 lg:px-0 px-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Flutter app development insights
        </h2>
      </div>

      {/*   */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-center gap-5 mt-16">
        {androidDevInsignts.map((blogData, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-between gap-3 xl:w-[24rem] lg:w-[22rem] w-[20rem] bg-slate-200 rounded-3xl`}
            >
              <div className="flex flex-col p-5 justify-between gap-5">
                {/* breadcrumbs */}
                <div className="flex flex-row gap-2 text-sm">
                  <span className="hover:cursor-pointer text-slate-600 hover:text-[#D90429]">
                    <Link to="/blogs">Blog</Link>
                  </span>
                  <span>➙</span>
                  <span className="hover:cursor-pointer text-slate-600 hover:text-[#D90429]">
                    <Link to="">{blogData.category}</Link>
                  </span>
                </div>

                <span className="text-xl font-semibold font-serif antialiased hover:text-[#D90429] hover:cursor-pointer">
                  <Link to={`/blogs/${blogData.id}`}>{blogData.title}</Link>
                </span>
                <div className="flex flex-row justify-between text-sm">
                  <span>{blogData.postDate}</span>
                  <span>{blogData.author}</span>
                </div>
              </div>
              <img
                src={blogData.img}
                alt={blogData.title}
                className="imgColorChange object-cover h-[14rem] bg-slate-100 bg-opacity-60 rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FlutterDevInsignts;
