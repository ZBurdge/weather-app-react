import React from "react";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
