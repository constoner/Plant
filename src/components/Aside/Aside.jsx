import React from "react";
import "./style.css";

import Gallery from "../Gallery/Gallery.jsx";

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="aside__title title">Follow Us on Instagram</h2>
      <p className="aside__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accu msan sit amet nunc cursus. Nec tristique at in erat lectus
      </p>
      <Gallery className="aside__gallery" />
    </aside>
  );
};

export default Aside;
