import { useEffect, useState } from "react";
import { getAllPersons } from "./services/results";
import { Results } from "./components/Results";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCountriesResults, setAllCountriesResults] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getAllPersons().then((results) => {
      setAllCountriesResults(results);
    });
  }, []);

  const handleSearchChange = (event) => {
    const newSearchValue = event.target.value;

    if (newSearchValue === ""){
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

  return (
    <>
      Find countries: <input type="text" onChange={handleSearchChange}></input>
      <Results
        numberOfResults={numberOfResults}
        searchResults={searchResults}
      />
    </>
  );
}

export default App;
