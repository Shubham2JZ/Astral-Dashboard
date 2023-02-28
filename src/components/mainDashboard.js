import React, { useState } from "react";
import Filters from "./filters";
import GridContainer from "./gridContainer";

import Header from "./header";
import "./mainDashboard.css";
import MapInsight from "./mapInsight";
import Slider from "./slider";

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <Filters />
      <Slider />
      <GridContainer />
      <MapInsight />
    </div>
  );
};

export default MainDashboard;
