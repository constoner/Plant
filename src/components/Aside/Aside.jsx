import React from "react";
import "./style.css";

import ImgNextGen from "../ImgNextGen/ImgNextGen";

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="aside__title title">Follow Us on Instagram</h2>
      <p className="aside__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accu msan sit amet nunc cursus. Nec tristique at in erat lectus
      </p>
      <ul className="aside__gallery gallery">
        <li className="gallery__item">
          <div className="gallery__wrapper">
            <a className="gallery__link" href="#!">
              <ImgNextGen
                srcJpgX2="./images/insta/insta-1@2x.jpg"
                fallback="./images/insta/insta-1.jpg"
                alt="A beautiful small house plant."
              />
            </a>
          </div>
        </li>
        <li className="gallery__item">
          <div className="gallery__wrapper">
            <a className="gallery__link" href="#!">
              <ImgNextGen
                srcJpgX2="./images/insta/insta-2@2x.jpg"
                fallback="./images/insta/insta-2.jpg"
                alt="A beautiful small house plant."
              />
            </a>
          </div>
        </li>
        <li className="gallery__item">
          <div className="gallery__wrapper">
            <a className="gallery__link" href="#!">
              <ImgNextGen
                srcJpgX2="./images/insta/insta-3@2x.jpg"
                fallback="./images/insta/insta-3.jpg"
                alt="A beautiful small house plant."
              />
            </a>
          </div>
        </li>
        <li className="gallery__item">
          <div className="gallery__wrapper">
            <a className="gallery__link" href="#!">
              <ImgNextGen
                srcJpgX2="./images/insta/insta-4@2x.jpg"
                fallback="./images/insta/insta-4.jpg"
                alt="A beautiful small house plant."
              />
            </a>
          </div>
        </li>
        <li className="gallery__item">
          <div className="gallery__wrapper">
            <a className="gallery__link" href="#!">
              <ImgNextGen
                srcJpgX2="./images/insta/insta-5@2x.jpg"
                fallback="./images/insta/insta-5.jpg"
                alt="A beautiful small house plant."
              />
            </a>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
