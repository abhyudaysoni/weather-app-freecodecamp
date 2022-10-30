import React from "react";
import { Container } from "./styles";

// const WEEK_DAYS = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

const ForecastWeather = ({ forecastWeather }) => {
  const currentTime = new Date().getHours();
  const timeArrayLength = Math.ceil((24 - currentTime) / 3 + 1);
  return (
    <Container>
      <h2>Today</h2>
      <div className="today">
        {forecastWeather.list.splice(0, timeArrayLength).map((item, index) => {
          const time = item.dt_txt.split(" ")[1];
          return (
            <div key={index} className="daily-item">
              <div>
                <img
                  src={`assets/${item.weather[0].icon}.png`}
                  className="icon-small"
                  alt="weather"
                />
              </div>
              <label className="time">{time}</label>
              <div className="details">
                <p>{item.weather[0].description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ForecastWeather;
