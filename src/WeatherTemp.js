import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("imperial");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function celsius() {
    return (props.temp - 32) / 1.8;
  }

  if (unit === "imperial") {
    return (
      <span className="WeatherTemp">
        <strong id="current-temp">{Math.round(props.temp)}</strong>
        <span className="units">
          {" "}
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemp">
        <strong id="current-temp">{Math.round(celsius())}</strong>
        <span className="units">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </span>
    );
  }
}
