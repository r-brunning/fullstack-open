import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "070000000000" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{`${person.name} ${person.number}`}</div>
      ))}
    </div>
  );
};

export default App;
