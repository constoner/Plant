import React from "react";
import "./style.css";

import ImgNextGen from "../../misc/ImgNextGen/ImgNextGen";
import Button from "../../misc/Button/Button";

const POST_LENGTH = 250;

const shorterText = (text) => {
  return text.substr(0, POST_LENGTH).padEnd(POST_LENGTH + 3, ".");
};

const BlogPost = ({ className, postData }) => {
  const postClassName = className ? `${className} post` : "post";
  const { name, date, href, image, content } = postData;
  return (
    <section className={postClassName}>
      <h2 className="post__title title">
        <a href={href}>{name}</a>
      </h2>
      <p className="post__date">{date}</p>
      <div className="post__image">
        <ImgNextGen
          className="post__img"
          fallback={image}
          width={375}
          height={300}
        />
      </div>
      <p className="post__content">{shorterText(content)}</p>
      <Button className="post__button" variant="a" href={href} isSmall>
        Read Full Post
      </Button>
    </section>
  );
};

export default BlogPost;
