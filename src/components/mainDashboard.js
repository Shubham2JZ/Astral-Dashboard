import React from "react";
import DropDown from "./common/dropdown";
import SearchBox from "./common/searchBox";
import "./mainDashboard.css";

const topSelectOptions = [
  "Sale Performance",
  "Manufacture",
  "Finance",
  "Purchase",
];

const valuesOptions = ["Values(Rs)", "Volume(Kg)", "Quantity(Pcs)"];

const granuralityOptions = [
  "Monthly",
  "Quarterly",
  "Half Yearly",
  "Yearly",
  "Weekly",
];

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-container-child dashboard-container-child-1">
        <div>Astral</div>
        <DropDown options={topSelectOptions} width={15} />
        <div>Back button</div>
      </div>
      <div className="dashboard-container-child dashboard-container-child-2">
        <div>
          <div>Menu</div>
          <div>
            <span className="small-text">Select Time</span>
            <DropDown options={granuralityOptions} width={10} />
          </div>
        </div>
        <div>
          <div>
            <span className="small-text">Select UoM</span>
            <DropDown options={valuesOptions} width={9} />
          </div>
          <SearchBox />
          <div>Setting</div>
          <div>Profile</div>
        </div>
      </div>
      <div className="dashboard-container-child dashboard-container-child-3">
        Slider----------------------------------------------------------------------
      </div>
      <div className="dashboard-container-child dashboard-container-child-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="dashboard-container-child dashboard-container-child-5">
        <div>Map</div>
        <div>Insights</div>
      </div>
    </div>
  );
};

export default MainDashboard;
