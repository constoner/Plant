import React from "react";
import "./style-fonts.css";
import "./style-colors.css";
import "./style.css";

import Header from "../Header/Header";
import Collections from "../Collections/Collections";
import About from "../About/About";
import Reviews from "../Reviews/Reviews";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import SmallSection from "../SmallSection/SmallSection";
import Subscribe from "../Subscribe/Subscribe";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Collections id="collections" />
          <About id="about" />
          <Reviews id="reviews" />
          <SmallSection>
            <Subscribe id="subscribe" />
          </SmallSection>
          <Aside />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
