import React from "react";
import "./style.css";

const Tag = ({
  className,
  value = "Hi! I'm tag!",
  rtl = false,
  posX = 10,
  posY = 10,
  width = 100,
}) => {
  const tagClass = className ? `${className} tag` : "tag";
  const tagStyle = {
    [rtl ? "right" : "left"]: `${posX}px`,
    top: `${posY}px`,
  };
  const tickStyle = {
    width: `${width}px`,
    [rtl ? "right" : "left"]: "100%",
    transform: rtl ? "rotate(180deg)" : null,
  };

  return (
    <div className={tagClass} aria-hidden="true" style={tagStyle}>
      <span className="tag__text">{value}</span>
      <span className="tag__tick" style={tickStyle}>
        <span className="tag__point"></span>
      </span>
    </div>
  );
};

export default Tag;
