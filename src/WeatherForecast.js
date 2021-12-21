import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
    function handleResponse(response) {

    }

    let apiKey = "1743d71cea491649f0bd96f06af46d71";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className= "WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Tues</div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">70° </span>|<span className="WeatherForecast-temperature-min"> 30°</span></div>
                </div>
            </div>
        </div>
    )
}