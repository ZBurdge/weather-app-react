import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "354625fc8tco3a0bc76af830b102d699";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}&units=imperial`;
  let currentCity = { city: "Avondale" };
  let weatherData = {
    date: "Thursday 13:05",
    icon: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v8/Condition_Card/MostlyCloudyDayV2.svg",
    tempature: "90",
    description: "Broken Clouds",
    humidity: "17",
    wind: "7",
  };
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
        {currentCity.city}
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
              <strong id="current-temp">{weatherData.tempature}</strong>
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
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span>mph
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  );
}
