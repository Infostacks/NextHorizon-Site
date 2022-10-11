import React from "react";
import { blogs } from "../../utils/data";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const FeaturedBlogs = () => {
  console.log(blogs);
  return (
    <div className="relative bg-slate-100 bg-opacity-80 w-full flex items-center justify-center pt-20 xl:px-0 lg:px-0 px-10">
      {blogs.map(
        (blog, index) =>
          blog.feature && (
            <div
              key={index}
              className="xl:p-10 lg:p-10 p-5 bg-white bg-opacity-30 backdrop-blur-sm border-2 rounded-3xl max-w-screen-lg h-[25rem] flex gap-5 xl:flex-row lg:flex-row flex-col">
              <span className="xl:w-1/2 lg:w-1/2 w-full">
                <img src={blog?.img} alt="" className="rounded-3xl shadow-lg" />
              </span>
              <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col gap-[1rem] px-4 overflow-y-scroll scroll-smooth">
                <Answer faq={blog?.desc} />
                {/* {blog?.desc} */}
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default FeaturedBlogs;
