import { blogs } from "../../utils/data";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const BlogPost = () => {
  const id = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const res = blogs.filter((item) => item.id === id.postId);
        // console.log("res: ", res);
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPostDetail();
  }, []);

  return (
    <div
      className={`flex flex-col justify-between gap-10 max-w-screen-lg py-16`}
    >
      <div className="flex flex-col p-5 justify-between gap-5">
        <span className="text-3xl font-semibold font-serif antialiased text-[#D90429]">
          {data[0]?.title}
        </span>
        <div className="flex flex-row justify-between text-base">
          <span>{data[0]?.postDate}</span>
          <span>{data[0]?.author}</span>
        </div>
      </div>
      <img
        src={data[0]?.img}
        alt={data[0]?.title}
        className="object-cover w-full bg-slate-100 bg-opacity-60 rounded-3xl"
      />
      <div>
        <Answer faq={data[0]?.desc} />
        {/* <span style="text-align: justify;font-size: 1.2rem;">
          Converting an existing e-commerce website to an e-commerce mobile app
          is not a difficult task to do. You need to follow a few steps for that
          purpose which are as follows: Figure out the website platform Keep the
          look and feel consistent Enlist key native features like push messages
          and catalog and categories. Develop Application Programming Interface.
          Collaborate APIs with the app Test the platform on all parameters
          Launch the mobile app
        </span> */}
      </div>
    </div>
  );
};

export default BlogPost;
