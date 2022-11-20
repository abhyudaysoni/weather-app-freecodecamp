import React from "react";
import { Container } from "./styles";
import Today from "./Today/Today";
import Weekly from "./Weekly/Weekly";

const ForecastWeather = ({ weekly, today }) => {
  return (
    <Container>
      <Today today={today} />
      <Weekly weekly={weekly} />
    </Container>
  );
};

export default ForecastWeather;
