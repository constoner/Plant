import React from "react";
import "./style.css";

import Logo from "../../misc/Logo/Logo";
import Icon from "../../misc/Icon/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__social">
            <Logo className="footer__logo" />
            <p className="footer__text">© 2023 Plant. All rights reserved</p>
            <div className="footer__text">
              <address>
                1 Miskatonic Ln, North Providence, Rhode Island, 02911,
              </address>
              United States Phone Number:
              <a href="tel:4138201890"> (413) 820-1890 </a>
              <br />
              Registery Company Number: 19161936
            </div>
            <ul className="footer__social-list social">
              <li className="social__item">
                <a className="social__link" href="#!" aria-label="Facebook.">
                  <Icon
                    sprite="/images/vector/logos.svg"
                    name="fb"
                    width="12"
                    height="22"
                  />
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#!" aria-label="Twitter.">
                  <Icon
                    sprite="/images/vector/logos.svg"
                    name="tw"
                    width="22"
                    height="18"
                  />
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#!" aria-label="Instagram.">
                  <Icon
                    sprite="/images/vector/logos.svg"
                    name="inst"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
            </ul>
          </div>

          <nav className="footer__nav">
            <div className="footer__column nav-column">
              <p className="nav-column__title title">Navigation</p>
              <ul className="nav-column__list">
                <li className="nav-column__item">
                  <a
                    className="nav-column__link"
                    href={process.env.PUBLIC_URL + "/"}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="/products">
                    Products
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="/about-us">
                    About Us
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column nav-column">
              <p className="nav-column__title title">Help</p>
              <ul className="nav-column__list">
                <li className="nav-column__item">
                  <a className="nav-column__link" href="Contacts">
                    Contacts
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="/questions">
                    FAQ
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="/feedback">
                    Feedback
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="/terms">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
