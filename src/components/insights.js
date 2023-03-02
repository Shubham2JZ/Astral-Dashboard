import React, { useState } from "react";
import Card from "./card";
import "./insights.css";
import NavigationBar from "./navigationBar";

const insightContent = {
  heading: "Ahmedabad has achieved bla bla bla bla bla bla bla bla",
  content: "",
};

const Cards = () => {
  return (
    <div className="insights-container">
      <NavigationBar />
      <Card content={insightContent} />
    </div>
  );
};

export default Cards;
