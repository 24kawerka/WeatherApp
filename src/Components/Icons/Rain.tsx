import React from "react";
import "./Icons.css";
export const Rain: React.FC = () => {
  return (
    <div className="weather_class">
      <div className="icon rainy">
        <div className="cloud"></div>
        <div className="rain"></div>
      </div>
    </div>
  );
};
