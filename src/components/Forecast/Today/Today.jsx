import React from "react";
import { calcTime } from "../../../helpers/helper";
import { Container } from "./styles";

const Today = ({ today }) => {
  return (
    <Container>
      <h2>Today</h2>
      <div className="today">
        {today.map((item, index) => {
          return (
            <div key={index} className="daily-item">
              <div>
                <img
                  src={`assets/${item.weather[0].icon}.png`}
                  className="icon-small"
                  alt="weather"
                />
                <h3>{item.main.temp}°C</h3>
              </div>
              <label className="time">{calcTime(item.dt_txt)}</label>
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

export default Today;
