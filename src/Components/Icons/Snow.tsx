import React from "react";
import "./Icons.css";
export const Snow: React.FC = () => {
  return (
    <div className="icon flurries">
      <div className="cloud"></div>
      <div className="snow">
        <div className="flake"></div>
        <div className="flake"></div>
      </div>
    </div>
  );
};
