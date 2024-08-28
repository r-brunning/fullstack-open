import { useState } from "react";
import { Filter } from "./components/Filter";
import { Numbers } from "./components/Numbers";
import { PersonForm } from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const addPerson = (event) => {
    event.preventDefault();
    const newPersons = persons.concat({ name: newName, number: newNumber });
    const newNameInPersons = persons
      .map((person) => person.name)
      .includes(newName);
    newNameInPersons
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(newPersons);
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
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Numbers searchResults={searchResults} />
    </div>
  );
};

export default App;
