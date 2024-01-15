import React, { useEffect, useRef } from "react";
import "./style.css";
import usePageState from "../../App/usePageState";
import PageData from "../../App/Context";
import { useScrollToAnchor } from "../../../utils/utils";

import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ToTop from "../../misc/ToTop/ToTop";
import Popup from "../../misc/Popup/Popup";

const MainLayout = ({ children }) => {
  useScrollToAnchor();
  const nodRef = useRef(null);
  const state = usePageState();
  const location = useLocation();

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
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={300} nodeRef={nodRef}>
              <div className="container" ref={nodRef}>
                {children ?? <Outlet />}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <ToTop />
        <Popup />
      </PageData.Provider>
      <Footer />
    </>
  );
};

export default MainLayout;
