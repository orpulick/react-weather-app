import React from "react";

export default function formatDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekdays[props.date.getDay()];
  let hours = props.date.getHours();
  let mins = props.date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {" "}
      {day} {hours}:{mins}
    </div>
  );
}
