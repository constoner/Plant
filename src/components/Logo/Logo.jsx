import React from "react";
import "./style.css";

import Icon from "../Icon/Icon";

const Logo = ({ className }) => {
  className ? (className = `${className} logo`) : (className = "logo");
  return (
    <a
      className={className}
      href="./"
      aria-label="Plant's logo - click to home page."
    >
      <Icon
        sprite="./images/vector/logos.svg"
        name="logo"
        width={60}
        height={29}
      />
    </a>
  );
};

export default Logo;
