import { useEffect, useState } from "react";
import { getAllPersons } from "./services/results";
import axios from "axios";

const Results = ({ numOfResults, searchResults }) => {
  switch (true) {
    case numOfResults === 1:
      return (
        <>
          <p>One Result</p>
        </>
      );
    case numOfResults > 1 && numOfResults <= 10:
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
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getAllPersons().then( (results) => {
      setSearchResults(results)
    }
    )
     }, 
  []);

  const handleSearchChange = (event) => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue)
  }

  return (
    <>
      Find countries: <input type="text" onChange={handleSearchChange} ></input>
      <Results numOfResults={10} searchResults={searchResults} />
    </>
  );
}

export default App;
