import React from "react";
import "./style.css";

import SmallSection from "../../misc/SmallSection/SmallSection";

const NotFound = () => {
  return (
    <>
      <SmallSection>
        <h2 className="not-found title">Sorry, page not found</h2>
        <p className="not-found title">404</p>
      </SmallSection>
    </>
  );
};

export default NotFound;
