import axios from "axios";
import { useEffect, useState } from "react";
import { getWeather } from "../services/weather";

export const CapitalCityWeather = ({ country }) => {
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const capital = country.capital;
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];

  const apiKey = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    if (lat && lon) {
      getWeather(lat, lon, apiKey)
        .then((results) => setWeatherDetails(results.current))
        .catch((error) => {
          setErrorMessage("Failed to fetch weather data");
          console.log("Failed to fetch weather data", error);
        });
    }
  }, [lat, lon, apiKey]);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (!weatherDetails) {
    return <p>Loading weather data...</p>;
  }

  return (
    <>
      <h3>Weather in {capital}</h3>
      <p>temperature {weatherDetails.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`}
        alt={`Weather icon for ${capital}`}
      />
      <p>wind {weatherDetails.wind_speed} m/s</p>
    </>
  );
};
