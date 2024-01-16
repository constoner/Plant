import React, { useEffect, createRef } from "react";
import "./style.css";
import usePageState from "../../App/usePageState";
import PageData from "../../App/Context";
import { useScrollToAnchor } from "../../../utils/utils";

import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { transitionProps } from "../../../utils/CONSTANTS";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ToTop from "../../misc/ToTop/ToTop";
import Popup from "../../misc/Popup/Popup";

const MainLayout = ({ children }) => {
  useScrollToAnchor();
  const nodeRef = createRef();
  const state = usePageState();
  const location = useLocation();
  const currentOutlet = useOutlet();

  useEffect(() => {
    if (location.hash === "") {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <PageData.Provider value={state}>
        <main>
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={transitionProps.pageTransition}
              unmountOnExit
            >
              {() => (
                <div
                  className="container"
                  ref={nodeRef}
                  style={{
                    transitionDuration: `${transitionProps.pageTransition}ms`,
                  }}
                >
                  {children ?? currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </main>
        <ToTop />
        <Popup />
      </PageData.Provider>
      <Footer />
    </>
  );
};

export default MainLayout;
