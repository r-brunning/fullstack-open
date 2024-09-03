import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Numbers } from "./components/Numbers";
import { PersonForm } from "./components/PersonForm";
import { getAll, addPerson } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddPerson = (event) => {
    event.preventDefault();

    const newPerson = { name: newName, number: newNumber };

    const isAlreadyInPersons = persons
      .map((person) => person.name)
      .includes(newName);

    if (isAlreadyInPersons) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      addPerson(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    }
  };

  const searchResults = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange} />

      <h2>add a new</h2>
      <PersonForm
        addPerson={handleAddPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Numbers searchResults={searchResults} />
    </div>
  );
};

export default App;
