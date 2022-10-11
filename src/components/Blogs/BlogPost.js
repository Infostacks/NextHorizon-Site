import { blogs } from "../../utils/data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPostDetail();
  }, []);

  return (
    <div className={`flex flex-col justify-between gap-10 max-w-screen-lg py-16`}>
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

      <Answer faq={data[0]?.desc} />
    </div>
  );
};

export default BlogPost;
