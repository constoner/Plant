import React, { useEffect } from "react";
import "./style.css";

import initMap from "./initMap";

const Map = ({ className }) => {
  useEffect(() => {
    initMap();
  }, []);

  const mapClassName = className ? `${className} map` : "map";
  return (
    <>
      <div className={mapClassName} id="map"></div>
    </>
  );
};

export default Map;
