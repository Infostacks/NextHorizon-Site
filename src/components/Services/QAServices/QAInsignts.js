import React from "react";
import { Link } from "react-router-dom";
import { designInsights } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const QAInsignts = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center py-20 overflow-x-hidden">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10 xl:px-0 lg:px-0 px-10">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Quality Assurance insights
        </h2>
      </div>

      {/*   */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-center gap-5 mt-16">
        {designInsights.map((insight, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-between gap-3 xl:w-[22rem] lg:w-[22rem] w-[20rem] bg-slate-200 rounded-3xl`}>
              <div className="flex flex-col p-5 justify-around gap-5">
                {/* breadcrumbs */}
                <div className="flex flex-row gap-2 text-sm">
                  <span
                    className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                    Blog
                  </span>
                  <span>➙</span>
                  <span
                    className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
                    <Link to="">{insight.category}</Link>
                  </span>
                </div>

                <span
                  className={`hover:cursor-pointer text-slate-600 hover:text-${styles.redPrimary}`}>
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
                className="imgColorChange object-cover h-[14rem] bg-slate-100 bg-opacity-60 rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QAInsignts;
