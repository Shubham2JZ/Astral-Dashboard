import React from "react";
import Insights from "./insightsBox";
import Map from "./map";
import "./mapInsight.css";

const MapInsights = () => {
  return (
    <div className="dashboard-container-child map-insight-container">
      <Map />
      <Insights />
    </div>
  );
};

export default MapInsights;
