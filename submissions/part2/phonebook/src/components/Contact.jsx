export const Contact = ({ displayedPersons, handleDeletePerson }) => {
  return (
    <div>
      {displayedPersons.map((person) => (
        <div key={person.id}>
          <span>{`${person.name} ${person.number}`}</span>
          <button onClick={() => handleDeletePerson(person.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
