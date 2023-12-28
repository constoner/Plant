import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ToTop from "../../misc/ToTop/ToTop";
import Popup from "../../misc/Popup/Popup";

const MainLayout = ({ children }) => {
  let location = useLocation();

  useEffect(() => {
    if (location.hash !== "#!") {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Header />
      <main>
        <div className="container">{children ?? <Outlet />}</div>
      </main>
      <Footer />
      <ToTop />
      <Popup />
    </div>
  );
};

export default MainLayout;
