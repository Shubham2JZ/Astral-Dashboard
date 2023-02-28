import React from "react";
import "./appPage.css";
import astralLogo from "../public/icons/astral-logo.png";
import Logout from "./common/logout";

const AppPage = () => {
  return (
    <div className="all-apps-container">
      <div className="app-container-header">
        <img src={astralLogo} />
        <Logout white="yes" />
      </div>
      <div className="apps-list">Our Apps :</div>
    </div>
  );
};

export default AppPage;
