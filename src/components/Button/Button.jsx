import React from "react";
import "./style.css";

const Button = ({
  children,
  className,
  variant = "a",
  isSmall = false,
  ...props
}) => {
  let buttonClass = className ? `${className} button` : "button";

  if (isSmall) {
    buttonClass += " button--small";
  }

  return variant === "a" ? (
    <a className={buttonClass} {...props}>
      {children}
    </a>
  ) : (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
