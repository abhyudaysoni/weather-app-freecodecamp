import Search from "./components/search/Search";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useEffect, useState } from "react";
import ForecastWeather from "./components/Forecast/ForecastWeather";

const sampleCity = { latitude: "28.6139", longitude: "77.2090" };

export const Container = styled.div`
  width: 80%;
  margin: 1rem auto;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
    margin: 0;
  }
`;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  // console.log(currentWeather);
  // console.log(forecastWeather);

  useEffect(() => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${sampleCity.latitude}&lon=${sampleCity.longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forcastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${sampleCity.latitude}&lon=${sampleCity.longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forcastWeatherFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();
        setCurrentWeather({ city: "New Delhi", ...weatherRes });
        setForecastWeather({ ...forecastRes });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

  const currentTime = new Date().getHours();
  const timeArrayLength = Math.ceil((24 - currentTime) / 3 + 1);
  const todayForecast = forecastWeather?.list.slice(0, timeArrayLength);
  const weeklyForecast = forecastWeather?.list.slice(
    timeArrayLength,
    forecastWeather?.list.length
  );

  return (
    <Container>
      {currentWeather && forecastWeather && (
        <>
          <Search onSearchChange={searchChangeHandler} />
          {currentWeather && (
            <CurrentWeather
              currentWeather={currentWeather}
              today={todayForecast}
            />
          )}
          {forecastWeather && (
            <ForecastWeather today={todayForecast} weekly={weeklyForecast} />
          )}
        </>
      )}
    </Container>
  );
}

export default App;
