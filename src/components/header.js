import React from "react";
import "./header.css";
import DropDown from "./common/dropdown";
import logOut from "../public/icons/sign-out.png";
import astralLogo from "../public/icons/astral-logo.png";

const Header = ({ topSelectOptions }) => {
  return (
    <div className="dashboard-container-child dashboard-container-child-1">
      <img src={astralLogo} />
      <DropDown options={topSelectOptions} width={15} />
      <button className="logout-btn">
        <img src={logOut} alt="logOut" />
      </button>
    </div>
  );
};

export default Header;
