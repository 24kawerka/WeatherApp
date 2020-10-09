import React from "react";
import "./Icons.css";

export const Thunderstorm: React.FC = () => {
  return (
    <div className="icon thunder-storm">
      <div className="cloud"></div>
      <div className="lightning">
        <div className="bolt"></div>
        <div className="bolt"></div>
      </div>
    </div>
  );
};
