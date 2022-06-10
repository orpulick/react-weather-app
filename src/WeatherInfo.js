import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={52}
            />
          </div>

          <strong className="temperature">{Math.round(props.data.temp)}</strong>
          <span className="units">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°F</li>
            <li>Humditiy: {props.data.humidity}%</li>
            <li>Windy: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
