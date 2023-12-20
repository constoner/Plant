import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import PageData from "../App/Context.jsx";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Tabs = ({ className }) => {
  let prevTab = document.querySelector("[data-active='true']");
  const tabsClass = className ? `${className} tabs` : "tabs";
  const [buttonValue, setButtonValue] = useState("View All");
  const { catalogState } = useContext(PageData);
  const {
    loadCatalog,
    catalogData,
    filter,
    setFilter,
    viewState,
    setViewState,
  } = catalogState();

  useEffect(() => {
    loadCatalog();
  }, [filter]);

  const onTabClick = (evt) => {
    let currentTab = evt.target;
    prevTab.dataset.active = false;
    currentTab.dataset.active = true;
    prevTab = currentTab;
    setFilter(currentTab.dataset.type);
    setViewState(false);
    setButtonValue("View All");
  };

  const viewAll = () => {
    setViewState(!viewState);
    setButtonValue(!viewState ? "Collapse" : "View All");
  };

  return (
    <div className={tabsClass}>
      <div className="tabs__container">
        <div className="tabs__controls" onClick={onTabClick}>
          <button
            className="tabs__button"
            type="button"
            data-active="true"
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
          {catalogData.partialData?.length ? (
            catalogData.partialData.map((item, index) => {
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
          {viewState
            ? catalogData.restData?.map((item, index) => {
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
            : null}
        </ul>
      </div>
      <Button
        className="tabs__view-button"
        variant="button"
        type="button"
        onClick={viewAll}
        disabled={catalogData.restData ? false : true}
      >
        {buttonValue}
      </Button>
    </div>
  );
};

export default Tabs;
