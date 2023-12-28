import React from "react";
import "./style.css";

import ROUTES from "../../../utils/ROUTES";
import { NavLink } from "react-router-dom";

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
              <NavLink className="menu__link menu__link" to={ROUTES.home} end>
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to={ROUTES.products}>
                Products
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to={ROUTES.aboutUs}>
                About Us
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to={ROUTES.blog}>
                Blog
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to={ROUTES.contacts}>
                Contacts
              </NavLink>
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
