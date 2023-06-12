import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <h3 className="forecast-heading">5 Day Forecast</h3>
        <hr />
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key="index">
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return <></>;
            }
          })}
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
