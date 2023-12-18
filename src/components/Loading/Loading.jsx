import React from "react";
import "./style.css";

const Loading = ({ width, height, value = "Loading..." }) => {
  return (
    <div className="loading" style={{ width: width, height: height }}>
      <span>{value}</span>
    </div>
  );
};

export default Loading;
