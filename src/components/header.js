import React, { useState } from "react";
import Sidebar from "./common/sideBar";
import "./header.css";
import sidebarIcon from "../public/icons/menu-burger.png";
import settingsIcon from "../public/icons/settings.png";

import DropDown from "./common/dropdown";
import astralLogo from "../public/icons/astral-logo.png";
import Logout from "./common/logout";

const topSelectOptions = [
  "Sale Performance",
  "Manufacture",
  "Finance",
  "Purchase",
];

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="dashboard-container-child dashboard-container-child-1">
      <div id="header-left-container">
        <div className={`dark-bg ${isSideBarOpen ? "" : "hidden"}`}></div>
        <div>
          <button
            className="sidebar-menu-btn cursor-pointer"
            onClick={toggleSidebar}
          >
            <img src={sidebarIcon} />
          </button>
          <Sidebar
            isOpen={isSideBarOpen}
            onClose={() => setIsSideBarOpen(false)}
          />
        </div>
        <img src={astralLogo} />
      </div>
      <DropDown options={topSelectOptions} width={15} border={false} />
      <div id="header-right-container">
        <img src={settingsIcon} className="cursor-pointer" />
        <div className="profile-picture-icon cursor-pointer">Profile</div>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
