import React from "react";
import "./style.css";

const Tag = ({
  className,
  title = "Hi! I'm tag!",
  content = null,
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
      <p className="tag__title">{title}</p>
      <p className="tag__content">{content}</p>
      <span className="tag__tick" style={tickStyle}>
        <span className="tag__point"></span>
      </span>
    </div>
  );
};

export default Tag;
