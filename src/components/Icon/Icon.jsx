import React from "react";

const Icon = ({ sprite, id, width, height, ...props }) => {
  return (
    <svg width={width} height={height} {...props}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
