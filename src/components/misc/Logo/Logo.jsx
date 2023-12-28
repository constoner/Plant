import React from "react";
import "./style.css";

import Icon from "../Icon/Icon";

const Logo = ({ className }) => {
  className ? (className = `${className} logo`) : (className = "logo");
  return (
    <a
      className={className}
      href={process.env.PUBLIC_URL + "/"}
      aria-label="Plant's logo - click to home page."
    >
      <Icon
        sprite="/images/vector/logos.svg"
        name="logo"
        width={59}
        height={19}
      />
    </a>
  );
};

export default Logo;
