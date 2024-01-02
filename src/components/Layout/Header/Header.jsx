import React from "react";
import "./style.css";

import { HEADER_LINKS } from "./HEADER_LINKS";
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
            {HEADER_LINKS.map((item, index) => {
              return (
                <li className="menu__item" key={`header_${index}`}>
                  <NavLink className="menu__link menu__link" to={item.link} end>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
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
