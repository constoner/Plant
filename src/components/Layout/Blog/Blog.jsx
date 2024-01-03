import React from "react";

import BlogList from "../../Blocks/BlogList/BlogList";
import Aside from "../../Blocks/Aside/Aside";
import SmallSection from "../../misc/SmallSection/SmallSection";
import Subscribe from "../../Blocks/Subscribe/Subscribe";

const Blog = () => {
  return (
    <>
      <BlogList />
      <Aside />
      <SmallSection>
        <Subscribe />
      </SmallSection>
    </>
  );
};

export default Blog;
