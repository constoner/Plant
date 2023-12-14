import React from "react";
import "./style.css";

import Icon from "../Icon/Icon";
import ImgNextGen from "../ImgNextGen/ImgNextGen";

const Collections = () => {
  return (
    <aside className="collections">
      <div className="collections__content">
        <h2 className="collections__title title">
          We have lots of plants collection for you and your family
        </h2>
        <a className="collections__link" href="#!">
          See all collection
          <Icon
            sprite="./images/vector/icons.svg"
            id="arrow"
            width={16}
            height={11}
            aria-hidden={true}
          />
        </a>
      </div>
      <div className="collections__gallery">
        <div className="colection__image-wrapper">
          <ImgNextGen
            className="collections__image"
            srcJpgX2="./images/decoration/promo-small-1@2x.png"
            fallback="./images/decoration/promo-small-1.png"
            aria-hidden={true}
            width="180"
            height="180"
          />
        </div>
        <div className="colection__image-wrapper">
          <ImgNextGen
            className="collections__image"
            srcJpgX2="./images/decoration/promo-small-2@2x.png"
            fallback="./images/decoration/promo-small-2.png"
            aria-hidden={true}
            width="180"
            height="180"
          />
        </div>
        <div className="colection__image-wrapper">
          <ImgNextGen
            className="collections__image"
            srcJpgX2="./images/decoration/promo-small-3@2x.png"
            fallback="./images/decoration/promo-small-3.png"
            aria-hidden={true}
            width="180"
            height="180"
          />
        </div>
      </div>
    </aside>
  );
};

export default Collections;
