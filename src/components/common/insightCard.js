import React, { useState } from "react";
import "./insightCard.css";

const InsightCard = ({ content }) => {
  return (
    <div className="insight-container">
      <div className="text-content">{content.heading}</div>
      <button>Recommended Solutions</button>
    </div>
  );
};

export default InsightCard;
