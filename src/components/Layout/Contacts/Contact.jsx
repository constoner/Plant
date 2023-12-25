import React from "react";
import "./style.css";

import ImgNextGen from "../../misc/ImgNextGen/ImgNextGen";
import Icon from "../../misc/Icon/Icon";
import Aside from "../../Blocks/Aside/Aside";

const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <div className="contacts__image-container">
          <ImgNextGen
            className="contacts__image"
            srcJpgX2="/images/decoration/map@2x.png"
            fallback="/images/decoration/map.png"
            alt="We on ther Map."
            width="446"
            height="440"
          />
          <Icon
            sprite="/images/vector/icons.svg"
            name="pin"
            width={60}
            height={120}
            aria-hidden={true}
            style={{ top: "142px", left: "238px" }}
          />
        </div>
        <div className="contacts__content">
          <h2 className="contacts__title title">How Find Us</h2>
          <p className="contacts__text">
            Please feel free to reach out to us using the contact information
            provided above. We value your feedback, inquiries, and are here to
            assist you!
          </p>
          <div className="contacts__container">
            <address className="contacts__link contacts__link--address">
              <Icon
                sprite="/images/vector/icons.svg"
                name="map"
                width={24}
                height={24}
                aria-hidden={true}
              />
              1 Miskatonic Ln, North Providence, Rhode Island, 02911
            </address>
            <a
              className="contacts__link contacts__link--phone"
              href="tel:4138201890"
            >
              <Icon
                sprite="/images/vector/icons.svg"
                name="phone"
                width={24}
                height={24}
                aria-hidden={true}
              />
              (413) 820-1890
            </a>
            <a
              className="contacts__link contacts__link--mobile"
              href="tel:+14019368731"
            >
              <Icon
                sprite="/images/vector/icons.svg"
                name="mobile"
                width={24}
                height={24}
                aria-hidden={true}
              />
              +1 (401) 936-8731
            </a>
            <a
              className="contacts__link contacts__link--email"
              href="mailto:info@plant.com"
            >
              <Icon
                sprite="/images/vector/icons.svg"
                name="email"
                width={24}
                height={24}
                aria-hidden={true}
              />
              info@plant.com
            </a>
            <a className="contacts__link" href="#!">
              <Icon
                sprite="/images/vector/logos.svg"
                name="fb"
                width={24}
                height={24}
                aria-hidden={true}
              />
              @homeplantbeauty
            </a>
            <a className="contacts__link" href="#!">
              <Icon
                sprite="/images/vector/logos.svg"
                name="tw"
                width={24}
                height={24}
                aria-hidden={true}
              />
              @homeplantbeauty
            </a>
            <a className="contacts__link" href="#!">
              <Icon
                sprite="/images/vector/logos.svg"
                name="inst"
                width={24}
                height={24}
                aria-hidden={true}
              />
              @homeplantbeauty
            </a>
          </div>
        </div>
      </section>
      <Aside />
    </>
  );
};

export default Contacts;
