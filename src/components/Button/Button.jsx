import React from "react";
import "./style.css";

const Button = ({ children, className, href }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default Button;
