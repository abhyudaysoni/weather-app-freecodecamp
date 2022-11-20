import React from "react";
import { calcMinMaxTemp } from "../../helpers/helper";
import { Container } from "./styles";

const CurrentWeather = ({ currentWeather, today }) => {
  const minMaxTemp = calcMinMaxTemp(today)[0];
  const avgTemp = ((minMaxTemp.min + minMaxTemp.max) / 2).toFixed(2);
  return (
    <Container>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{currentWeather.city}</p>
            <p className="weather-description">
              {currentWeather.weather[0].description}
            </p>
          </div>
          <img
            src={`assets/${currentWeather.weather[0].icon}.png`}
            className="weather-icon"
            alt="weather"
          />
        </div>
        <div className="bottom">
          <div className="temperatures">
            <p className="temperature-min">{`Min: ${minMaxTemp.min}°C`}</p>
            <p className="temperature">{`${Math.round(
              currentWeather.main.temp
            )}°C`}</p>
            <p className="temperature-max">{`Max: ${minMaxTemp.max}°C`}</p>
          </div>
          <div className="details">
            <div className="parameter-row-head">
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like: </span>
              <span className="parameter-value">{`${currentWeather.main.feels_like}°C`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Average Temp: </span>
              <span className="parameter-value">{`${avgTemp}°C`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind: </span>
              <span className="parameter-value">{`${currentWeather.wind.speed}m/s`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity: </span>
              <span className="parameter-value">{`${currentWeather.main.humidity}%`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure: </span>
              <span className="parameter-value">{`${currentWeather.main.pressure} hPa`}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CurrentWeather;
