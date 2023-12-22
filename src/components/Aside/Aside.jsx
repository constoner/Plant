import React from "react";
import "./style.css";

import Gallery from "../Gallery/Gallery.jsx";

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="aside__title title">Follow Us On Instagram</h2>
      <p className="aside__text">
        Dive into the colourful and fragrant world of&nbsp;Plant
        on&nbsp;Instagram! Our dedicated section brings the beauty of&nbsp;our
        plants and the stories behind them right to&nbsp;your fingertips.
        Experience the joy of&nbsp;plants as&nbsp;never before and get inspired
        with every scroll
      </p>
      <Gallery className="aside__gallery" />
    </aside>
  );
};

export default Aside;
