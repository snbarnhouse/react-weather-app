import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForcast] = useState(null);
  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
              <WeatherForecastDay data= {forecast[0]}/>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1743d71cea491649f0bd96f06af46d71";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
