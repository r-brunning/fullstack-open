import { useEffect, useState } from "react";
import { getAllPersons } from "./services/results";
import axios from "axios";

const Results = ({ numberOfResults, searchResults }) => {
  switch (true) {
    case numberOfResults === 0:
      return null
    case numberOfResults === 1:
      return (
        <>
          <p>One Result</p>
        </>
      );
    case numberOfResults > 1 && numberOfResults <= 10:
      return (
        <>
          <p>Between one and ten</p>
          {searchResults.map((result) => (
            <div key={result.cca3}>{result.name.common}</div>
          ))}
        </>
      );
    default:
      return (
        <>
          <p>Too many</p>
        </>
      );
  }
};

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allSearchResults, setAllSearchResults] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState(0)

  useEffect(() => {
    getAllPersons().then( (results) => {
      setAllSearchResults(results)
    }
    )
     }, 
  []);

  const handleSearchChange = (event) => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue)
    
    setNumberOfResults(10)
    console.log(numberOfResults)
  }

  const searchResults = allSearchResults.filter((result) =>
    result.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      Find countries: <input type="text" onChange={handleSearchChange} ></input>
      <Results numberOfResults={numberOfResults} searchResults={searchResults} />
    </>
  );
}

export default App;
