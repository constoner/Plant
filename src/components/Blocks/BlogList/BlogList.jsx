import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import PageData from "../../App/Context.jsx";

import BlogPost from "../BlogPost/BlogPost";
import Button from "../../misc/Button/Button";

const BlogList = () => {
  const { blogState } = useContext(PageData);
  const { loadBlog, blogData } = blogState();

  useEffect(() => {
    loadBlog();
  }, []);

  return (
    <section className="blog">
      <h1 className="blog__title title">Our News</h1>
      <ul className="blog__list">
        {blogData.map((item, index) => {
          return (
            <li className="blog__item" key={`blog_${index}`}>
              <BlogPost className="blog__post" blogData={item} />
            </li>
          );
        })}
      </ul>
      <Button className="blog__button" variant="button" type="button">
        View More
      </Button>
    </section>
  );
};

export default BlogList;
