import React from "react";

const Icon = ({ sprite, id, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
