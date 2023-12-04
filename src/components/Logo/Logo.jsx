import React from "react";
import logo from "./../../images/vector/logo.svg";
import "./style.css";

const Logo = ({ className }) => {
  className ? (className = `${className} logo`) : (className = "logo");
  return (
    <a className={className} href="./" aria-label="to home page.">
      <img src={logo} width="60" height="29" alt="Plant's logo."></img>
    </a>
  );
};

export default Logo;
