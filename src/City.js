import React from "react";
import "./City.css";

export default function City() {
  let currentCity = { city: "Avondale" };

  return (
    <h1 id="city" className="City">
      {currentCity.city}
    </h1>
  );
}
