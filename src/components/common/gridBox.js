import React from "react";
import "./gridBox.css";

const GridBox = ({ data }) => {
  const { data: gridData } = data;

  const getTextColor = (x) => (x < 0 ? "red-text" : "green-text");
  return (
    <div className="grid-box">
      <div className="gridbox-main-text">
        <div>{data.topic}</div>
        <div className="bigger-text">{data.data.totalValue} Cr</div>
      </div>
      <div className="gridbox-growth-text">
        GOLY
        <span className={`${getTextColor(gridData.yearlyGrowth)}`}>
          {gridData.yearlyGrowth}%
        </span>
        / GOLM
        <span className={`${getTextColor(gridData.monthlyGrowth)}`}>
          {gridData.monthlyGrowth}%
        </span>
      </div>
    </div>
  );
};

export default GridBox;
