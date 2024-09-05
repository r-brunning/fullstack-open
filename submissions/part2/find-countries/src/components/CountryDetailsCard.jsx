import { CapitalCityWeather } from "./CapitalCityWeather";

export const CountryDetailsCard = ({ country }) => {
  const countryDetailsCardStyles = {
    backgroundColor: "lightBlue",
  };

  return (
    <div style={countryDetailsCardStyles}>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <img src={country.flags.png}></img>

      <h3>Languages</h3>
      <ul>
        {Object.entries(country.languages).map(([code, language]) => (
          <li key={code}>{language}</li>
        ))}
      </ul>

      <CapitalCityWeather country={country} />
    </div>
  );
};
