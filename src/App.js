import Search from "./components/search/Search";
import "./app.css";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

export const Container = styled.div`
  max-width: 1080px;
  margin: 1rem auto;
`;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  console.log(currentWeather);
  console.log(forecastWeather);
  const searchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forcastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forcastWeatherFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecastWeather({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Container>
      <Search onSearchChange={searchChangeHandler} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </Container>
  );
}

export default App;
