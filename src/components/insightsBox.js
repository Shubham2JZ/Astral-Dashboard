import React, { useState } from "react";
import InsightCard from "./common/insightCard";
import NavigationBar from "./common/navigationBar";
import "./insightsBox.css";

const insightContent = {
  heading: "Ahmedabad has achieved bla bla bla bla bla bla bla bla",
  content: "",
};

const Insights = () => {
  return (
    <div className="insights-box">
      <NavigationBar />
      {/* <InsightCard content={insightContent} /> */}
    </div>
  );
};

export default Insights;
