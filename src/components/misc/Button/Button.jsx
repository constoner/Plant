import React from "react";
import "./style.css";

const Button = ({
  children,
  className,
  variant = "a",
  isSmall = false,
  ...props
}) => {
  const CustomButton = `${variant}`;
  let buttonClass = className ? `${className} button` : "button";

  if (isSmall) {
    buttonClass += " button--small";
  }

  return (
    <CustomButton className={buttonClass} {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;
