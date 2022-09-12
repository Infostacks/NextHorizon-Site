import { blogs } from "../../utils/data";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const { push } = useNavigate();
  const [post, SetPost] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = blogs.id;
        SetPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [id]);

  return (
    <div>
      BlogPost ID {id}
      <div>Title: {post.title}</div>
      <button onClick={() => push("/blogs")}>Go back</button>
    </div>
  );
};

export default BlogPost;
