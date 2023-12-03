import React from "react";
import "./style.css";
import logo from "./../../images/logo.svg";

import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__logo" href="./" aria-label="to home page.">
          <img src={logo} width="60" height="29" alt="Plant's logo."></img>
        </a>
        <ul className="header__menu menu">
          <li className="menu__item">
            <a className="menu__link menu__link--active" href="#home">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#services">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#about">
              About Us
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#blog">
              Blog
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className="header__user-menu user-menu">
          <li className="user-menu__item">
            <a className="user-menu__link" href="./">
              Login
            </a>
          </li>
          <li className="user-menu__item">
            <Button
              className="user-menu__link user-menu__link button button--small"
              href=""
            >
              Sign Up
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
