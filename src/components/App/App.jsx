import React from "react";
import "./style-colors.css";
import "./style.css";

import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import ToTop from "../misc/ToTop/ToTop";
import Popup from "../misc/Popup/Popup";
import Home from "../Layout/Home/Home";
import Products from "../Layout/Products/Products";
import AboutUs from "../Layout/AboutUs/AboutUs";
import Contacts from "../Layout/Contacts/Contact";
import Questions from "../Layout/Questions/Questions";
import Terms from "../Layout/Terms/Terms";

import NotFound from "../Layout/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {/* <Home /> */}
          {/* <Products /> */}
          {/* <AboutUs /> */}
          {/* <Contacts /> */}
          {/* <Questions /> */}
          <Terms />
          {/* <NotFound /> */}
        </div>
      </main>
      <Footer />
      <ToTop />
      <Popup />
    </>
  );
};

export default App;
