export const Results = ({ numberOfResults, searchResults }) => {
  switch (true) {
    case numberOfResults === 0:
      return <p>Start typing to see results</p>;

    case numberOfResults === 1:
      const onlyCountry = searchResults[0];

      return (
        <>
          <h2>{onlyCountry.name.common}</h2>
          <p>Capital {onlyCountry.capital}</p>
          <p>Area {onlyCountry.area}</p>
          <img src={onlyCountry.flags.png}></img>

          <h3>Languages:</h3>
          <ul>
            {Object.entries(onlyCountry.languages).map(([code, language]) => (
              <li key={code}>{language}</li>
            ))}
          </ul>
        </>
      );

    case numberOfResults > 1 && numberOfResults <= 10:
      return (
        <>
          <h2>Results</h2>
          {searchResults.map((result) => (
            <div key={result.cca2}>{result.name.common}</div>
          ))}
        </>
      );

    default:
      return (
        <>
          <p>Too many matches. Specify another filter.</p>
        </>
      );
  }
};
