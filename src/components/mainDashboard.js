import React, { useState } from "react";
import DropDown from "./common/dropdown";
import SearchBox from "./common/searchBox";
import Sidebar from "./common/sideBar";
import Header from "./header";
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
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="dashboard-container">
      <Header topSelectOptions={topSelectOptions} />
      <div className="dashboard-container-child dashboard-container-child-2">
        <div>
          <div>
            <div className={`dark-bg ${isSideBarOpen ? "" : "hidden"}`}></div>
            <button onClick={toggleSidebar}>Menu</button>
            <Sidebar
              isOpen={isSideBarOpen}
              onClose={() => setIsSideBarOpen(false)}
            />
          </div>
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
