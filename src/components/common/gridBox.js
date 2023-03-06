import React from "react";
import "./gridBox.css";
import redDownArrow from "../../public/icons/red-down-arrow.png";
import greenUpArrow from "../../public/icons/green-up-arrow.png";

const GridBox = ({ data }) => {
  const { data: gridData } = data;

  const getTextColor = (x) => (x < 0 ? "red-text" : "green-text");

  const showGrowthData = (x) => (x < 0 ? x * -1 : x);

  return (
    <div className="grid-box">
      <div className="gridbox-main-text">
        <div>{data.topic}</div>
        <div className="bigger-text">
          {data.data.totalValue} {data.mainDataType}
        </div>
      </div>
      <div className="gridbox-growth">
        <span>GOLY</span>
        <div>
          <img src={gridData.yearlyGrowth < 0 ? redDownArrow : greenUpArrow} />
          <span className={`${getTextColor(gridData.yearlyGrowth)}`}>
            {showGrowthData(gridData.yearlyGrowth)}%
          </span>
        </div>
        <span>/</span>
        <span>GOLM</span>
        <div>
          <img src={gridData.monthlyGrowth < 0 ? redDownArrow : greenUpArrow} />
          <span className={`${getTextColor(gridData.monthlyGrowth)}`}>
            {showGrowthData(gridData.monthlyGrowth)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
