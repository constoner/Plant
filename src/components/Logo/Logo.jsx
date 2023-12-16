import React from "react";
import "./style.css";

import Icon from "../Icon/Icon";

const Logo = ({ className }) => {
  className ? (className = `${className} logo`) : (className = "logo");
  return (
    <a className={className} href="./" aria-label="to home page.">
      <Icon
        sprite="./images/vector/logos.svg"
        id="logo"
        width={60}
        height={29}
        alt="Plant's logo."
      />
    </a>
  );
};

export default Logo;
