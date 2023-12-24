import React from "react";
import "./style-colors.css";
import "./style.css";

import Header from "../Layout/Header/Header";
import Hero from "../Hero/Hero";
import Collections from "../Collections/Collections";
import About from "../About/About";
import Catalog from "../Catalog/Catalog";
import Reviews from "../Reviews/Reviews";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import SmallSection from "../SmallSection/SmallSection";
import Subscribe from "../Subscribe/Subscribe";
import ToTop from "../ToTop/ToTop";
import Popup from "../Popup/Popup";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <Collections />
          <About />
          <Catalog />
          <Reviews />
          <SmallSection>
            <Subscribe />
          </SmallSection>
          <Aside />
        </div>
      </main>
      <Footer />
      <ToTop />
      <Popup />
    </>
  );
};

export default App;
