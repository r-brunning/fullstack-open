export const Numbers = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((person) => (
        <div key={person.name}>{`${person.name} ${person.number}`}</div>
      ))}
    </div>
  );
};
