import React from "react";
import "./style.css";

import ImgNextGen from "../../misc/ImgNextGen/ImgNextGen";
import Icon from "../../misc/Icon/Icon";

const Address = () => {
  return (
    <section className="address">
      <div className="address__image-container">
        <ImgNextGen
          className="address__image"
          srcJpgX2="/images/decoration/map@2x.png"
          fallback="/images/decoration/map.png"
          alt="We on ther Map."
          width="446"
          height="440"
        />
        <Icon
          sprite="/images/vector/icons.svg"
          name="map-pin"
          width={60}
          height={120}
          aria-hidden={true}
          style={{ top: "205px", left: "218px" }}
        />
      </div>
      <div className="address__content">
        <h2 className="address__title title">How To Find Us</h2>
        <p className="address__text">
          Please feel free to reach out to us using the contact information
          provided above. We value your feedback, inquiries, and are here to
          assist you!
        </p>
        <div className="address__container">
          <address className="address__link">
            <Icon
              sprite="/images/vector/icons.svg"
              name="map-pin"
              width={22}
              height={22}
              aria-hidden={true}
            />
            1 Miskatonic Ln, North Providence, Rhode Island, 02911
          </address>
          <a className="address__link" href="tel:4138201890">
            <Icon
              sprite="/images/vector/icons.svg"
              name="phone"
              width={22}
              height={22}
              aria-hidden={true}
            />
            (413) 820-1890
          </a>
          <a className="address__link" href="tel:+14019368731">
            <Icon
              sprite="/images/vector/icons.svg"
              name="mobile"
              width={22}
              height={22}
              aria-hidden={true}
            />
            +1 (401) 936-8731
          </a>
          <a className="address__link" href="mailto:info@plant.com">
            <Icon
              sprite="/images/vector/icons.svg"
              name="mail"
              width={22}
              height={22}
              aria-hidden={true}
            />
            info@plant.com
          </a>
          <a className="address__link" href="#!">
            <Icon
              sprite="/images/vector/logos.svg"
              name="fb"
              width={22}
              height={22}
              aria-hidden={true}
            />
            @homeplantbeauty
          </a>
          <a className="address__link" href="#!">
            <Icon
              sprite="/images/vector/logos.svg"
              name="tw"
              width={22}
              height={22}
              aria-hidden={true}
            />
            @homeplantbeauty
          </a>
          <a className="address__link" href="#!">
            <Icon
              sprite="/images/vector/logos.svg"
              name="inst"
              width={22}
              height={22}
              aria-hidden={true}
            />
            @homeplantbeauty
          </a>
        </div>
      </div>
    </section>
  );
};

export default Address;
