import React from "react";
import "./style.css";

import ROUTES from "../../../utils/ROUTES";
import { Link } from "react-router-dom";

import Icon from "../../misc/Icon/Icon";
import ImgNextGen from "../../misc/ImgNextGen/ImgNextGen";

const Collections = () => {
  return (
    <aside className="collections">
      <div className="collections__content">
        <h2 className="collections__title title">
          We&nbsp;have an&nbsp;extensive collection of&nbsp;plants for you and
          your family
        </h2>
        <Link className="collections__link" to={ROUTES.products}>
          See all collection
          <Icon
            sprite="/images/vector/icons.svg"
            name="arrow"
            width={16}
            height={11}
            aria-hidden={true}
          />
        </Link>
      </div>
      <div className="collections__gallery">
        <div className="colection__image-wrapper">
          <ImgNextGen
            className="collections__image"
            srcJpgX2="/images/decoration/promo-small-1@2x.png"
            fallback="/images/decoration/promo-small-1.png"
            aria-hidden={true}
            width="180"
            height="180"
            alt="."
          />
        </div>
        <div className="colection__image-wrapper">
          <ImgNextGen
            className="collections__image"
            srcJpgX2="/images/decoration/promo-small-2@2x.png"
            fallback="/images/decoration/promo-small-2.png"
            aria-hidden={true}
            width="180"
            height="180"
            alt="."
          />
        </div>
        <div className="colection__image-wrapper">
          <ImgNextGen
            className="collections__image"
            srcJpgX2="/images/decoration/promo-small-3@2x.png"
            fallback="/images/decoration/promo-small-3.png"
            aria-hidden={true}
            width="180"
            height="180"
            alt="."
          />
        </div>
      </div>
    </aside>
  );
};

export default Collections;
