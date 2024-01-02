import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import PageData from "../../App/Context.jsx";

import TabsContent from "./TabsContent.jsx";

const BUTTON_VALUE = {
  closed: "View All",
  opened: "Collapse",
};

const Tabs = ({ className }) => {
  const [buttonValue, setButtonValue] = useState(BUTTON_VALUE.closed);
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

  const changeTab = (tab) => {
    setViewState(false);
    setButtonValue("View All");
    setTimeout(() => {
      setFilter(tab.dataset.type);
    }, 200);
  };

  const onTabClick = (evt, ref, prev, height) => {
    let currentTab = evt.target;
    prev.dataset.active = false;
    currentTab.dataset.active = true;
    prev = currentTab;
    ref.current.style.maxHeight = height;
    changeTab(currentTab);
  };

  const viewAll = () => {
    setViewState(!viewState);
    setButtonValue(!viewState ? BUTTON_VALUE.opened : BUTTON_VALUE.closed);
  };

  return (
    <TabsContent
      className={className}
      buttonValue={buttonValue}
      onButtonClick={viewAll}
      onTabClick={onTabClick}
      view={viewState}
      catalogData={catalogData}
    />
  );
};

export default Tabs;
