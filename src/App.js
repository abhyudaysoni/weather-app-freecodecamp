import Search from "./components/search/Search";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useEffect, useState } from "react";
import ForecastWeather from "./components/Forecast/ForecastWeather";
// import { GEO_API_URL, geoApiOptions } from "./api";

const sampleCity = { latitude: "28.6139", longitude: "77.2090" };

export const Container = styled.div`
  width: 80%;
  margin: 1rem auto;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  // const [city, setCity] = useState();

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
        // const cityRes = await res[2].json();
        // setCity(cityRes.data[0].city);
        setCurrentWeather({ city: "New Delhi", ...weatherRes });
        setForecastWeather({ ...forecastRes });
      })
      .catch((err) => {
        console.log(err.message);
      });
    // const geolocationAPI = navigator.geolocation;
    // geolocationAPI.getCurrentPosition((position) => {
    // const lat = position.coords.latitude;
    // const lon = position.coords.longitude;
    // const updatedLat = `${Math.sign(lat) === -1 ? "-" : "+"}${lat}`;
    // const updatedLon = `${Math.sign(lon) === -1 ? "-" : "+"}${lon}`;
    // const fetchCityUrl = `${GEO_API_URL}/cities?location=${sampleCity.latitude}-${sampleCity.longitude}`;
    // const getCityFetch = fetch(fetchCityUrl, geoApiOptions);
    // });
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
  return (
    <Container>
      <Search onSearchChange={searchChangeHandler} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecastWeather && <ForecastWeather forecastWeather={forecastWeather} />}
    </Container>
  );
}

export default App;
