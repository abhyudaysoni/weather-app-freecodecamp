import React from "react";
import { Container } from "./styles";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  calcForecastDays,
  calcWeeklyDays,
  calcMinMaxTemp,
} from "../../../helpers/helper";

const Weekly = ({ weekly }) => {
  const weeklyForecast = calcWeeklyDays(weekly);
  const forecastDays = calcForecastDays();
  const minMax = calcMinMaxTemp(weekly);
  return (
    <Container>
      <h2>Weekly</h2>
      <Accordion allowZeroExpanded>
        {weeklyForecast.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="weekday">
                    <div className="left">
                      <h2>{forecastDays[index]}</h2>
                      <h3 className="temperature">
                        {(
                          (Number(minMax[index].min) +
                            Number(minMax[index].max)) /
                          2
                        ).toFixed(2)}
                        °C
                      </h3>
                      <p className="min-max">
                        {minMax[index].min}°C / {minMax[index].max}°C
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
