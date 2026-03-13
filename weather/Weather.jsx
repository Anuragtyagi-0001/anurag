import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./Weatherslice";
import "./Weather.css";

export function Weather() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  const getWeatherColor = () => {
    if (!data) return "#87CEEB"; 

    const condition = data.weather[0].main.toLowerCase();

    if (condition.includes("clear")) return "#FFD700"; 
    if (condition.includes("cloud")) return "#B0C4DE"; 
    if (condition.includes("rain")) return "#5F9EA0";  

    return "#87CEEB";
  };

  return (
    <div
      className="weather-container"
      style={{ backgroundColor: getWeatherColor() }}
    >
      <div className="weather-card">
        <h2>Weather Dashboard</h2>

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>

        {status === "loading" && <p>Loading....</p>}
        {status === "failed" && <p>Error: {error}</p>}

        {status === "succeeded" && data && (
          <div className="weather-info">
            <h3>{data.name}</h3>
            <p>Temp: {data.main.temp} °C</p>
            <p>Condition: {data.weather[0].description}</p>
            <p>Wind: {data.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}