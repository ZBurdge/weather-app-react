import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <p className="forecast-heading">6 Day Forecast</p>
      <hr />
      <div className="forecast" id="forecast"></div>
    </div>
  );
}
