import { CountryDetailsCard } from "./CountryDetailsCard";
import { CountryList } from "./CountryList";

export const Results = ({ numberOfResults, searchResults, searchValue }) => {
  switch (true) {
    case numberOfResults === 0 && searchValue !== "":
      return <p>No countries found: try a different search</p>

    case numberOfResults === 0:
      return <p>Start typing to begin your search</p>;

    case numberOfResults === 1:
      const onlyCountry = searchResults[0];
      return <CountryDetailsCard country={onlyCountry} />;

    case numberOfResults > 1 && numberOfResults <= 10:
      return <CountryList searchResults={searchResults} />;

    default:
      return <p>Too many matches: try narrowing it down</p>;
  }
};
