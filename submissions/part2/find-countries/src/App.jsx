import { useEffect, useState } from "react";
import { getAllPersons } from "./services/results";
import { Results } from "./components/Results";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCountriesResults, setAllCountriesResults] = useState(null);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllPersons()
      .then((results) => {
        setAllCountriesResults(results);
      })
      .catch((error) => {
        const newErrorMessage = "Error fetching country data. Please reload.";
        setErrorMessage(newErrorMessage);
        console.error(newErrorMessage, error);
        setAllCountriesResults(null);
      });
  }, []);

  const handleSearchChange = (event) => {
    const newSearchValue = event.target.value;

    if (newSearchValue === "") {
      setSearchValue("");
      setSearchResults([]);
      setNumberOfResults(0);
      return;
    }

    const newSearchResults = allCountriesResults.filter((result) =>
      result.name.common.toLowerCase().includes(newSearchValue.toLowerCase())
    );
    const newNumberOfResults = newSearchResults.length;

    setNumberOfResults(newNumberOfResults);
    setSearchValue(newSearchValue);
    setSearchResults(newSearchResults);
  };

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (!allCountriesResults) {
    return <p>Loading country data...</p>;
  }

  return (
    <>
      Find countries: <input type="text" onChange={handleSearchChange}></input>
      <Results
        numberOfResults={numberOfResults}
        searchResults={searchResults}
        searchValue={searchValue}
      />
    </>
  );
}

export default App;
