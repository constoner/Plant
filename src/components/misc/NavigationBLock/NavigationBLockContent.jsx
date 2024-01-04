import React from "react";
import "./style.css";

import ROUTES from "../../../utils/ROUTES";

const NavigationBlockContent = ({ className, links }) => {
  return (
    <nav
      className={className ? `${className} nav-block` : "nav-block"}
      aria-label="Help page navigation"
    >
      <ul className="nav-block__list">
        {Object.values(links).map((item, index) => {
          return (
            <li className="nav-block__item" key={index}>
              <a
                className="nav-block__link"
                data-href={item.id}
                href={ROUTES[item.id]}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBlockContent;
