import { useState } from "react";
import { CountryDetailsCard } from "./CountryDetailsCard";

export const CountryList = ({ searchResults }) => {

  const [countryVisibilityMap, setCountryVisibilityMap] = useState(
    searchResults.reduce((acc, country) => {
      acc[country.cca2] = false;
      return acc;
    }, {})
  );

  const toggleShowDetails = (id) => {
    const updatedShowDetails = { ...countryVisibilityMap };
    updatedShowDetails[id] = !countryVisibilityMap[id];
    setCountryVisibilityMap(updatedShowDetails);
  };

  return (
    <>
      <h2>Results</h2>
      {searchResults.map((result) => (
        <div key={result.cca2}>
          <span>{result.name.common} </span>
          <button onClick={() => toggleShowDetails(result.cca2)}>
            {countryVisibilityMap[result.cca2] ? "Hide" : "Show"} details
          </button>
          {countryVisibilityMap[result.cca2] && (
            <CountryDetailsCard country={result} />
          )}
        </div>
      ))}
    </>
  );
};
