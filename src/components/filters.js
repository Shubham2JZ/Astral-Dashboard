import React, { useState } from "react";
import DropDown from "./common/dropdown";
import SearchBox from "./common/searchBox";
import "./filters.css";

const valuesOptions = ["Values(Rs)", "Volume(Kg)", "Quantity(Pcs)"];

const granuralityOptions = [
  "Monthly",
  "Quarterly",
  "Half Yearly",
  "Yearly",
  "Weekly",
];

const Filters = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="dashboard-container-child filter-container">
      <div>
        <div>
          <span>Select Time</span>
          <DropDown options={granuralityOptions} width={10} bold={false} />
        </div>
        <div>
          <span>Select UoM</span>
          <DropDown options={valuesOptions} width={10} bold={false} />
        </div>
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Filters;
