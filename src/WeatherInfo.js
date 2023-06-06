import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city" className="City">
        {props.data.city}
      </h1>
      <div className="row">
        <div className="col-6">
          <h2 className="currentWeather">
            <section id="date-time">
              <FormattedDate date={props.data.date} />
            </section>
            <div className="iconTemp">
              <img
                src={props.data.icon}
                alt={props.data.description}
                id="icon"
              />
              <strong id="current-temp">
                {Math.round(props.data.temperature)}
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
                  {props.data.description}
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span id="humidity">{Math.round(props.data.humidity)}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(props.data.wind)}</span>mph
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  );
}
