/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-center gap-5 mt-16">
        {items.map((blogData, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-between gap-3 xl:w-[24rem] lg:w-[22rem] w-[20rem] bg-slate-200 rounded-3xl shadow-xl`}
            >
              <div className="flex flex-col p-5 justify-between gap-5">
                {/* breadcrumbs */}
                <div className="flex flex-row gap-2 text-sm">
                  <span className="hover:cursor-pointer text-slate-600 hover:text-rose-800">
                    Blog
                  </span>
                  <span>➙</span>
                  <span className="hover:cursor-pointer text-slate-600 hover:text-rose-800">
                    <Link to="">{blogData.category}</Link>
                  </span>
                </div>

                <span className="text-xl font-semibold font-serif antialiased hover:text-rose-700 hover:cursor-pointer">
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
                className="imgColorChange object-cover h-[14rem] xl:w-[24rem] lg:w-[22rem] w-[20rem] bg-slate-100 bg-opacity-60 rounded-3xl"
              />
            </div>
          );
        })}
      </div>
  );
};

export default Menu;
