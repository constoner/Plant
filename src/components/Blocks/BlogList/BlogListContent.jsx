import React, { useRef } from "react";
import "./style.css";

import BlogPost from "../BlogPost/BlogPost";
import Button from "../../misc/Button/Button";
import Loading from "../../misc/Loading/Loading";

const BlogListContent = ({ blogData, onButtonClick, buttonName, loading }) => {
  const buttonRef = useRef(null);

  return (
    <section className="blog">
      <h1 className="blog__title title">Our News</h1>
      <ul className="blog__list">
        {!blogData.length ? (
          <Loading />
        ) : (
          blogData.map((item, index) => {
            return loading ? (
              <Loading key={index} />
            ) : (
              <li className="blog__item" key={`blog_${item.date}`}>
                <BlogPost className="blog__post" postData={item} />
              </li>
            );
          })
        )}
      </ul>
      <Button
        className="blog__button"
        variant="button"
        type="button"
        onClick={() => onButtonClick(buttonRef)}
        innerRef={buttonRef}
      >
        {buttonName}
      </Button>
    </section>
  );
};

export default BlogListContent;
