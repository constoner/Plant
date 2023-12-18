import React from "react";
import "./style.css";

import ImgNextGen from "../ImgNextGen/ImgNextGen";

const SmallSection = ({ children }) => {
  return (
    <section className="small-section">
      <div className="small-section__content-wrapper">{children}</div>
      <div className="small-section__image-wrapper">
        <ImgNextGen
          className="small-section__image"
          srcJpgX2="/images/decoration/palm@2x.png"
          fallback="/images/decoration/palm.png"
          alt="Palm in small pot."
          width="262"
          height="356"
        />
      </div>
    </section>
  );
};

export default SmallSection;
