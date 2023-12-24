import React from "react";
import "./style.css";

const Loading = ({ className, width, height, value = "Loading..." }) => {
  return (
    <div
      className={className ? className + " " + "loading" : "loading"}
      style={{ width: width, height: height }}
    >
      <span>{value}</span>
    </div>
  );
};

export default Loading;
