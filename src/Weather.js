import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = "354625fc8tco3a0bc76af830b102d699";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="Search">
          {" "}
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder=" search city..."
              autoComplete="off"
              id="searchBox"
              className="searchBox"
              onChange={updateCity}
            />
            <input type="submit" value="🔍" className="search-btn" />
          </form>{" "}
        </div>

        <button id="currentLocation-btn" className="Location">
          Current Location
        </button>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
