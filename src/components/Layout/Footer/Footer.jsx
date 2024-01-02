import React from "react";
import "./style.css";

import { FOOTER_LINKS } from "./FOOTER_LINKS";
import { Link } from "react-router-dom";

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
                {FOOTER_LINKS.map((item, index) => {
                  if (item.column === "navigation") {
                    return (
                      <li
                        className="nav-column__item"
                        key={`footer_nav_${index}`}
                      >
                        <Link className="nav-column__link" to={item.link}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>

            <div className="footer__column nav-column">
              <p className="nav-column__title title">Help</p>
              <ul className="nav-column__list">
                {FOOTER_LINKS.map((item, index) => {
                  if (item.column === "help") {
                    return (
                      <li
                        className="nav-column__item"
                        key={`footer_help_${index}`}
                      >
                        <Link className="nav-column__link" to={item.link}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
