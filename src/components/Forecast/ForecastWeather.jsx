import React from "react";
import { Container } from "./styles";
import Today from "./Today/Today";
import Weekly from "./Weekly/Weekly";


const ForecastWeather = ({ forecastWeather }) => {
  return (
    <Container>
      <Today forecastWeather={forecastWeather} />
      <Weekly forecastWeather={forecastWeather} />
    </Container>
  );
};

export default ForecastWeather;
