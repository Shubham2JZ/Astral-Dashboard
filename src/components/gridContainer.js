import React, { useState } from "react";
import GridBox from "./common/gridBox";
import "./gridContainer.css";
import { gridData } from "./testdata";

const GridContainer = () => {
  const [data, setData] = useState(gridData);
  return (
    <div className="dashboard-container-child grids-container">
      <div className="grid-list">
        {data.map((n, i) => (
          <GridBox key={i} data={n} />
        ))}
      </div>
      <div id="grid-tips">
        <span>
          <b>GOLM = </b>Growth over Last Month
        </span>
        <span>
          <b>GOLY = </b>Growth over Last Year
        </span>
      </div>
    </div>
  );
};

export default GridContainer;
