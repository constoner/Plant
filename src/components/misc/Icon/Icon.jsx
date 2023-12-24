import React from "react";

const Icon = ({ sprite, name, width, height, ...props }) => {
  return (
    <svg width={width} height={height} {...props}>
      <use href={`${process.env.PUBLIC_URL + sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
