import React, { useContext, useEffect, useState, useRef } from "react";
import "./style.css";
import PageData from "../App/Context.jsx";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Tabs = ({ className }) => {
  let prevTab = document.querySelector("[data-active='true']");
  const tabsClass = className ? `${className} tabs` : "tabs";
  const tabsRef = useRef(null);
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

  const tabsHeight = {
    close: "283px",
    open: "1000px",
  };

  useEffect(() => {
    tabsRef.current.style.maxHeight = tabsHeight.close;
    loadCatalog();
  }, [filter]);

  useEffect(() => {
    tabsHeight.open = `${tabsRef.current.scrollHeight}px`;
    tabsRef.current.style.maxHeight = viewState
      ? tabsHeight.open
      : tabsHeight.close;
  }, [viewState]);

  const onTabClick = (evt) => {
    let currentTab = evt.target;
    prevTab.dataset.active = false;
    currentTab.dataset.active = true;
    prevTab = currentTab;
    tabsRef.current.style.maxHeight = tabsHeight.close;
    setViewState(false);
    setButtonValue("View All");
    setTimeout(() => {
      setFilter(currentTab.dataset.type);
    }, 200);
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
            All Plants
          </button>
          <button className="tabs__button" type="button" data-type="arrival">
            New Arrivals
          </button>
          <button className="tabs__button" type="button" data-type="sale">
            Sale
          </button>
        </div>
        <ul className="tabs__content" ref={tabsRef}>
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
          {setTimeout(viewState, 200)
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
