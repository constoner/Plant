import React, { useEffect } from "react";
import usePageState from "../../App/usePageState";
import PageData from "../../App/Context";

import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ToTop from "../../misc/ToTop/ToTop";
import Popup from "../../misc/Popup/Popup";

const MainLayout = ({ children }) => {
  const state = usePageState();

  let location = useLocation();

  useEffect(() => {
    if (location.hash !== "#!") {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <PageData.Provider value={state}>
        <main>
          <div className="container">{children ?? <Outlet />}</div>
        </main>
        <ToTop />
        <Popup />
      </PageData.Provider>
      <Footer />
    </>
  );
};

export default MainLayout;
