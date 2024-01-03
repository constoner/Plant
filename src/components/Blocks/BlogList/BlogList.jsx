import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import PageData from "../../App/Context.jsx";

import BlogListContent from "./BlogListContent.jsx";

const BlogList = () => {
  const { blogState } = useContext(PageData);
  const { loadBlog, blogData, setBlogData, blogLoading, setBlogLoading } =
    blogState();
  const [chunkNo, setChunkNo] = useState(1);

  useEffect(() => {
    loadBlog(chunkNo).then((data) => setBlogData(data));
    setChunkNo(chunkNo + 1);
  }, []);

  const onButtonClick = (ref) => {
    setBlogLoading(true);
    loadBlog(chunkNo).then((data) => {
      if (data) {
        setBlogData((posts) => [...posts, ...data]);
      } else {
        ref.current.toggleAttribute("disabled");
      }
    });
    setBlogLoading(false);
    setChunkNo(chunkNo + 1);
  };

  return (
    <BlogListContent
      blogData={blogData}
      onButtonClick={onButtonClick}
      loading={blogLoading}
    />
  );
};

export default BlogList;
