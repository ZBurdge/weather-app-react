import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const long = props.coordinates.longitude;
  const lat = props.coordinates.latitude;
  const apiKey = "354625fc8tco3a0bc76af830b102d699";
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <h3 className="forecast-heading">5 Day Forecast</h3>
      <hr />
      <div className="row">
        <div className="col">
          <div className="Forecast-day"> Thu </div>
          icon
          <div clasaName="Forecast-temp">
            <span className="Forecast-max">19°</span>
            <span className="Forecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
