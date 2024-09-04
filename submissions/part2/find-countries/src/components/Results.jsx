import { useState } from "react";
import { CountryDetailsCard } from "./CountryDetailsCard";

export const Results = ({ numberOfResults, searchResults }) => {
  const [showDetailsArr, setShowDetailsArr] = useState(
    searchResults.reduce((acc, country) => {
      acc[country.cca2] = false;
      return acc;
    }, {})
  );

  const toggleShowDetails = (id) => {
    const updatedShowDetails = { ...showDetailsArr };
    updatedShowDetails[id] = !showDetailsArr[id];
    setShowDetailsArr(updatedShowDetails);
  };

  switch (true) {
    case numberOfResults === 0:
      return <p>Start typing to see results</p>;

    case numberOfResults === 1:
      const onlyCountry = searchResults[0];

      return (
        <CountryDetailsCard country={onlyCountry}/>
      );

    case numberOfResults > 1 && numberOfResults <= 10:

      return (
        <>
          <h2>Results</h2>
          {searchResults.map((result) => (
            <div key={result.cca2}>
              <span>{result.name.common} </span>
              <button onClick={() => toggleShowDetails(result.cca2)}>
                {showDetailsArr[result.cca2] ? "Hide" : "Show"} details
              </button>
              {showDetailsArr[result.cca2] ? <CountryDetailsCard country={result} /> : null}
            </div>
          ))}
        </>
      );

    default:
      return <p>Too many matches. Specify another filter.</p>

  }
};
