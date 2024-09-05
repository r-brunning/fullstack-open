import axios from "axios";

export const getWeather = (lat, lon, apiKey, tempUnit = "metric") => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${tempUnit}`;
  const request = axios.get(url);

  return request.then((response) => response.data);
};
