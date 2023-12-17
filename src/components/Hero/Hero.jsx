import React from "react";
import "./style.css";

import Button from "../Button/Button";
import ImgNextGen from "../ImgNextGen/ImgNextGen";
import Tag from "../Tag/Tag";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title title">Growing Beautiful Plants at Home</h1>
        <p className="hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
          diam. Lectus elit, nulla elementum fringilla at.
        </p>
        <Button className="hero__link" variant="a" href="#!">
          Learn More
        </Button>
        <dl className="hero__achievements">
          <div className="hero__achievements-container">
            <dt>Delivety</dt>
            <dd>2000+</dd>
          </div>
          <div className="hero__achievements-container">
            <dt>Customers</dt>
            <dd>1200+</dd>
          </div>
          <div className="hero__achievements-container">
            <dt>Product</dt>
            <dd>1000+</dd>
          </div>
        </dl>
        <img
          className="hero__decoration"
          src="./images/decoration/leaf.png"
          width="157"
          height="193"
          alt="."
          aria-hidden="true"
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image-wrapper">
          <ImgNextGen
            srcJpgX2="./images/decoration/hero@2x.png"
            fallback="./images/decoration/hero.png"
            alt="Pretty succulent plant macro photo."
            width="557"
            height="719"
          />
        </div>
        <Tag
          className="hero__tag"
          value="Cactus stem"
          rtl={false}
          posX="-42"
          posY="175"
          width="95"
        />
        <Tag
          className="hero__tag"
          value="Cactus Thorn"
          rtl={true}
          posX="-47"
          posY="78"
          width="105"
        />
        <Tag
          className="hero__tag"
          value="Plant Media"
          rtl={true}
          posX="-35"
          posY="557"
          width="64"
        />
      </div>
    </section>
  );
};

export default Hero;
