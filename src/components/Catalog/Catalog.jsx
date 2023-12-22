import React from "react";
import "./style.css";

import Tabs from "../Tabs/Tabs";

const Catalog = () => {
  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title title">Our Best Products</h2>
      <Tabs className="catalog__tabs" />
    </section>
  );
};

export default Catalog;
