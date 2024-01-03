import React from "react";

import BlogList from "../../Blocks/BlogList/BlogList";
import SmallSection from "../../misc/SmallSection/SmallSection";
import Subscribe from "../../Blocks/Subscribe/Subscribe";

const Blog = () => {
  return (
    <>
      <BlogList />
      <SmallSection>
        <Subscribe />
      </SmallSection>
    </>
  );
};

export default Blog;
