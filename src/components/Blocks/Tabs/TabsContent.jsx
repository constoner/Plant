import React, { useEffect, useRef } from "react";
import "./style.css";

import Button from "../../misc/Button/Button.jsx";
import Card from "../Card/Card";
import Loading from "../../misc/Loading/Loading";

const TABS_HEIGHT = {
  closed: "283px",
  opened: "1000px",
};

const TabsSpare = () => {
  return (
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
  );
};

const TabsContent = ({
  className,
  buttonValue,
  onButtonClick,
  onTabClick,
  view,
  catalogData,
}) => {
  const tabsClass = className ? `${className} tabs` : "tabs";

  const tabsRef = useRef(null);
  let prevTab = document.querySelector("[data-active='true']");

  useEffect(() => {
    tabsRef.current.style.maxHeight = TABS_HEIGHT.closed;
    TABS_HEIGHT.opened = `${tabsRef.current.scrollHeight}px`;
    tabsRef.current.style.maxHeight = view
      ? TABS_HEIGHT.opened
      : TABS_HEIGHT.closed;
  }, [view]);

  return (
    <div className={tabsClass}>
      <div className="tabs__container">
        <div
          className="tabs__controls"
          onClick={(evt) =>
            onTabClick(evt, tabsRef, prevTab, TABS_HEIGHT.closed)
          }
        >
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
            <TabsSpare />
          )}
          {setTimeout(view, 200)
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
        onClick={onButtonClick}
        disabled={catalogData.restData ? false : true}
      >
        {buttonValue}
      </Button>
    </div>
  );
};

export default TabsContent;
