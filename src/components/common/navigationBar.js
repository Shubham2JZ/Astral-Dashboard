import React, { useState } from "react";
import "./navigationBar.css";

const navList = [
  "Geography which requires attention",
  "Products which requires attention",
  "Channel which requires attention",
];

const NavigationBar = () => {
  const [selectedNav, setSelectedNav] = useState(navList[0]);

  const handleNavClick = (i) => {
    setSelectedNav(navList[i]);
  };

  return (
    <div className="topnav">
      {navList.map((n, i) => (
        <div
          key={i}
          onClick={() => handleNavClick(i)}
          className={selectedNav === navList[i] ? "active" : ""}
        >
          {n}
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
