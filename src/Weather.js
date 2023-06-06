import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    let city = "Avondale";
    const apiKey = "354625fc8tco3a0bc76af830b102d699";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
