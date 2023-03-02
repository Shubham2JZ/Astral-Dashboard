import React, { useState } from "react";
import "./insightCard.css";

const InsightCard = ({ content }) => {

  return (
    <div className="insight-container" style={{ color: colorChoose() }}>
      <div className="text-content">{content.heading}</div>
      <button
        className={`button ${content.performance}`}
      >
S      </button>
    </div>
  );
};

export default InsightCard;
