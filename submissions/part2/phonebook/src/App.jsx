import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Contact } from "./components/Contact";
import { PersonForm } from "./components/PersonForm";
import { getAll, addPerson, deletePerson} from "./services/persons";
import { Notification } from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("")

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
      addPerson(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setAlertType("newPerson")
        setAlertMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {setAlertMessage(null)}, 5000)
      });
    }
  };

  const displayedPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    const shouldDelete = window.confirm(`Should ${personToDelete.name} be deleted?`)

    if (shouldDelete) {
      deletePerson(id)
      .then(() =>
        {setPersons(persons.filter(p => p.id !==  id))})
      .catch((error) => {
        if (error.response){
        setPersons(persons.filter(p => p.id !==  id))
        setAlertType("alreadyDeletedAlert")
        setAlertMessage(`${personToDelete.name} has already been deleted from the server`)
        setTimeout(() => {setAlertMessage(null)}, 5000)}
      })
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alertMessage} alertType={alertType} />
      <Filter handleSearchChange={handleSearchChange} />

      <h2>add a new</h2>
      <PersonForm
        addPerson={handleAddPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Contact displayedPersons={displayedPersons} handleDeletePerson={handleDeletePerson}/>
    </div>
  );
};

export default App;
