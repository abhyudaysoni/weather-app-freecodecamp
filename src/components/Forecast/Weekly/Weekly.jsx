import React from "react";
import { Container } from "./styles";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Weekly = ({ forecastWeather }) => {
  const currentDay = new Date().getDay();
  const weekly = forecastWeather.list.filter(
    (item, index) => item.dt_txt.split(" ")[1] === "12:00:00"
  );

  const forecastDays = WEEK_DAYS.slice(currentDay + 1, 7).concat(
    WEEK_DAYS.slice(0, currentDay)
  );

  return (
    <Container>
      <h2>Weekly</h2>
      <Accordion allowZeroExpanded>
        {weekly.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="weekday">
                    <div className="left">
                      <h2>{forecastDays[index]}</h2>
                      <h3 className="temperature">{item.main.temp}°C</h3>
                      <p className="min-max">
                        {item.main.temp_min}°C / {item.main.temp_max}°C
                      </p>
                      <p className="weather">{item.weather[0].main}</p>
                    </div>
                    <img
                      src={`assets/${item.weather[0].icon}.png`}
                      className="weather-icon right"
                      alt="weather"
                    />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="weekday-details">
                  <div className="detail-item">
                    <label>Feels like: </label>
                    <p>{item.main.feels_like}°C</p>
                  </div>
                  <div className="detail-item">
                    <label>Weather: </label>
                    <p> {item.weather[0].description}</p>
                  </div>
                  <div className="detail-item">
                    <label>Humidity: </label>
                    <p>{item.main.humidity}%</p>
                  </div>
                  <div className="detail-item">
                    <label>Pressure: </label>
                    <p>{item.main.pressure} hPa</p>
                  </div>
                  <div className="detail-item">
                    <label>Wind Speed: </label>
                    <p>{item.wind.speed} m/s</p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Weekly;

/*

        




*/
