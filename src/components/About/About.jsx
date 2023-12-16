import React, { useState, useRef } from "react";
import "./style.css";

import { initAccordions } from "../../vendor/accordions/init-accordion";
import "../../vendor/accordions/data-accordion.css";

import ImgNextGen from "../ImgNextGen/ImgNextGen";
import Button from "../Button/Button";

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    initAccordions();
  });
});

const About = () => {
  const [value, setValue] = useState("Read More");
  const accordionRef = useRef(null);

  const onButtonClick = (elem) => {
    elem.current.toggleAttribute("is-active");
    setValue(!elem.current.attributes["is-active"] ? "Read More" : "Read Less");
  };

  return (
    <section className="about">
      <div className="about__image-container">
        <ImgNextGen
          className="about__image"
          srcJpgX2="./images/decoration/promo-2@2x.jpg"
          fallback="./images/decoration/promo-2@2x.jpg"
          alt="Beautiful bonsai tree in a wide pot with a bright green crown."
          with="446"
          height="440"
        />
      </div>
      <div className="about__content">
        <p className="about__title about__title--add title">About Us</p>
        <h2 className="about__title title">
          Continue to Develop to Became Global Company
        </h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
          diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc
          cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit,
          nulla elementum fringilla at.
        </p>
        <div className="about__accordion accordion" data-accordion="parent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus.
          </p>
          <div
            className="accordion__element"
            data-accordion="element"
            ref={accordionRef}
          >
            <Button
              className="about__button accordion__button"
              type="button"
              variant="button"
              data-accordion="button"
              onClick={() => onButtonClick(accordionRef)}
            >
              {value}
            </Button>
            <div className="accordion__content" data-accordion="content">
              <div className="accordion__wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus. Nec tristique at in
                  erat lectus mas sa diam. Lectus elit, nulla elementum
                  fringilla at. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus.
                  Nec tristique at in erat lectus mas sa diam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus. Nec tristique at in
                  erat lectus mas sa diam. Lectus elit, nulla elementum
                  fringilla at. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus.
                  Nec tristique at in erat lectus mas sa diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
