import React from "react";

import Hero from "../../Blocks/Hero/Hero";
import Collections from "../../Blocks/Collections/Collections";
import Subscribe from "../../Blocks/Subscribe/Subscribe";
import SmallSection from "../../misc/SmallSection/SmallSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <SmallSection>
        <Subscribe />
      </SmallSection>
    </>
  );
};

export default Home;
