import React, { useContext, useEffect } from "react";
import "./style.css";
import PageData from "../App/Context.jsx";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Tabs = ({ className }) => {
  const { catalogData, loadCatalog } = useContext(PageData);

  useEffect(() => {
    loadCatalog();
  }, []);

  const onTabClick = (evt) => {
    document.querySelector("[data-active]").removeAttribute("data-active");
    evt.target.setAttribute("data-active", true);
  };

  const tabsClass = className ? `${className} tabs` : "tabs";

  return (
    <div className={tabsClass}>
      <div className="tabs__container">
        <div className="tabs__controls" onClick={onTabClick}>
          <button
            className="tabs__button"
            type="button"
            data-active
            data-type="new"
          >
            New Plants
          </button>
          <button className="tabs__button" type="button" data-type="arrival">
            New Arrivals
          </button>
          <button className="tabs__button" type="button" data-type="sale">
            Sale
          </button>
        </div>
        <ul className="tabs__content">
          {catalogData.length ? (
            catalogData.map((item, index) => {
              return (
                <li className="tabs__item" key={index}>
                  <Card
                    name={item.name}
                    href={item.href}
                    imgSource={item.image}
                    rank={item.rank}
                    price={item.price}
                  />
                </li>
              );
            })
          ) : (
            <>
              <li className="tabs__item">
                <Loading width="270px" height="283px" />
              </li>
              <li className="tabs__item">
                <Loading width="270px" height="283px" />
              </li>
              <li className="tabs__item">
                <Loading width="270px" height="283px" />
              </li>
              <li className="tabs__item">
                <Loading width="270px" height="283px" />
              </li>
            </>
          )}
        </ul>
      </div>
      <Button
        className="catalog__button"
        variant="button"
        type="button"
        onClick={() => console.log(catalogData)}
      >
        View All
      </Button>
    </div>
  );
};

export default Tabs;
