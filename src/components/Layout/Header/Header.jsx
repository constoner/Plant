import React from "react";
import "./style.css";

import Logo from "../../misc/Logo/Logo";
import Button from "../../misc/Button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Logo className="header__logo" />
          <ul className="header__menu menu">
            <li className="menu__item">
              <a className="menu__link menu__link" href="/">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/products">
                Products
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/about-us">
                About Us
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/blog">
                Blog
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/contacts">
                Contacts
              </a>
            </li>
          </ul>
          <ul className="header__user-menu user-menu">
            <li className="user-menu__item">
              <a className="user-menu__link" href="#!">
                Login
              </a>
            </li>
            <li className="user-menu__item">
              <Button
                className="user-menu__link user-menu__link"
                variant="a"
                isSmall={true}
                href="#!"
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
