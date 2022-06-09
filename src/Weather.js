import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temp: response.data.main.temp,
      date: "Wednesday 10:00PM",
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      feels: response.data.main.feels_like,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className=" btn w-100 search-button"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <strong className="temperature">
              {Math.round(weatherData.temp)}
            </strong>
            <span className="units">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feels)}°F</li>
              <li>Humditiy: {weatherData.humidity}%</li>
              <li>Windy: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ff3fd882f52fb1c27e72af3c00822426";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    return "loading...";
  }
}
