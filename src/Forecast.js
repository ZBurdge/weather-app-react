import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <h3 className="forecast-heading">6 Day Forecast</h3>
        <hr />
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const long = props.coordinates.longitude;
    const lat = props.coordinates.latitude;
    const apiKey = "354625fc8tco3a0bc76af830b102d699";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
