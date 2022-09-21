import { blogs } from "../../utils/data";
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const BlogPost = () => {
  const id = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        // console.log("outside:", id.postId);
        // console.log("blog: ", blogs);
        const res = blogs.filter((item) => item.id === id.postId);
        // console.log("res: ", res);
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPostDetail(blogs);
  }, []);

  return (
    <div
      className={`flex flex-col justify-between gap-3 max-w-screen-lg py-16`}
    >
      <div className="flex flex-col p-5 justify-between gap-5">
        <span className="text-3xl font-semibold font-serif antialiased hover:text-[#D90429] hover:cursor-pointer">
          <NavLink to={`/blogs/${data[0].id}`}>{data[0].title}</NavLink>
        </span>
        <div className="flex flex-row justify-between text-base">
          <span>{data[0].postDate}</span>
          <span>{data[0].author}</span>
        </div>
      </div>
      <img
        src={data[0].img}
        alt={data[0].title}
        className="imgColorChange object-cover w-full bg-slate-100 bg-opacity-60 rounded-3xl"
      />
    </div>
    // <div className="pb-10 max-w-screen-lg flex flex-col justify-center gap-5">
    //   BlogPost ID: {data.id}
    //   <div>Title: {data.title}</div>
    //   <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#D90429] hover:border-[1px] hover:border-[#D90429] w-fit">
    //     <Link to="/blogs">Contact us</Link>
    //   </button>
    // </div>
  );
};

export default BlogPost;
