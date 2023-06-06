import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      date: "Thursday 13:05",
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="Search">
          {" "}
          <form id="city-search">
            <input
              type="text"
              placeholder=" search city..."
              autoComplete="off"
              id="searchBox"
              className="searchBox"
            />
            <input type="submit" value="🔍" className="search-btn" />
          </form>{" "}
        </div>

        <button id="currentLocation-btn" className="Location">
          Current Location
        </button>
        <h1 id="city" className="City">
          {weatherData.city}
        </h1>
        <div className="row">
          <div className="col-6">
            <h2 className="currentWeather">
              <section id="date-time">{weatherData.date}</section>
              <div className="iconTemp">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  id="icon"
                />
                <strong id="current-temp">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="units"> °F </span>
              </div>
            </h2>
          </div>
          <div className="col-6">
            <h3 className="weatherInfo">
              <ul>
                <li>
                  <span className="description" id="description">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  Humidity:{" "}
                  <span id="humidity">{Math.round(weatherData.humidity)}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(weatherData.wind)}</span>mph
                </li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "da nang";
    const apiKey = "354625fc8tco3a0bc76af830b102d699";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
