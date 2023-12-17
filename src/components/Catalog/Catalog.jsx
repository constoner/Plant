import React from "react";
import "./style.css";

import Tabs from "../Tabs/Tabs";
import Button from "../Button/Button";

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title title">Our Best Product</h2>
      <Tabs className="catalog__tabs" />
      <Button className="catalog__button" variant="button" type="button">
        View All
      </Button>
    </section>
  );
};

export default Catalog;
