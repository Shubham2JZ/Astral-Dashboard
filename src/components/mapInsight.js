import React from "react";
import Map from "./map";
import "./mapInsight.css";

const MapInsights = () => {
  return (
    <div className="dashboard-container-child dashboard-container-child-5">
      <div id="map-container"><Map/></div>
      <div id="insight-container">Insights</div>
    </div>
  );
};

export default MapInsights;
