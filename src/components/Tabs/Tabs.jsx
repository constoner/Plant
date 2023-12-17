import React from "react";
import "./style.css";

import Card from "../Card/Card";

const Tabs = ({ className }) => {
  const onTabClick = (evt) => {
    document.querySelector("[data-active]").removeAttribute("data-active");
    evt.target.setAttribute("data-active", true);
  };

  const tabsClass = className ? `${className} tabs` : "tabs";

  return (
    <div className={tabsClass}>
      <div className="tabs__container" data-tabs="parent" data-height="unset">
        <div
          className="tabs__controls"
          data-tabs="controls"
          onClick={onTabClick}
        >
          <button
            className="tabs__button"
            type="button"
            data-active
            data-tabs="control"
          >
            New Plants
          </button>
          <button className="tabs__button" type="button" data-tabs="control">
            New Arrivals
          </button>
          <button className="tabs__button" type="button" data-tabs="control">
            Sale
          </button>
        </div>
        <ul className="tabs__content" data-tabs="content">
          <li className="tabs__item">
            <Card
              name="Outdoor Plant"
              href="#!"
              imgSource="./images/catalog/catalog-1.png"
              rank={5}
              price="50.00"
            />
          </li>
          <li className="tabs__item">
            <Card
              name="Monstera Plant"
              href="#!"
              imgSource="./images/catalog/catalog-2.png"
              rank={4}
              price="60.00"
            />
          </li>
          <li className="tabs__item">
            <Card
              name="Pottel Plant"
              href="#!"
              imgSource="./images/catalog/catalog-3.png"
              rank={5}
              price="55.00"
            />
          </li>
          <li className="tabs__item">
            <Card
              name="Indoor Plant"
              href="#!"
              imgSource="./images/catalog/catalog-4.png"
              rank={5}
              price="25.00"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
